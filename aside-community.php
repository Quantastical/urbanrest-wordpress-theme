<aside class="site-community row" id="events">
	<header class="col-xs-12">
		<h2>Latest News &amp; Events</h2>
	</header>

	<section class="site-events">
		<h3>
			<!-- TODO: make this source less 'neut' -->
			<span class="word">Upcoming</span>
			<span class="letter">E</span>
			<span class="letter">v</span>
			<span class="letter">e</span>
			<span class="letter">n</span>
			<span class="letter">t</span>
			<span class="letter">s</span>
		</h3>
<?php
require_once('includes/plugins/Facebook/autoload.php');
$app_id = get_option('facebook_app_id'); //'1692973204325474';
$app_secret = get_option('facebook_app_secret'); //'714136f769a765d1157086a1dae680e5';

$page_id = get_option('facebook_page_id'); //'urbanrestbeer';

$access_token = "https://graph.facebook.com/oauth/access_token?client_id=$app_id&client_secret=$app_secret&grant_type=client_credentials";
$access_token = file_get_contents($access_token); // returns 'accesstoken=APP_TOKEN|APP_SECRET'
$access_token = json_decode($access_token);
$access_token = $access_token->access_token;

$fb = new \Facebook\Facebook([
  'app_id' => $app_id,
  'app_secret' => $app_secret,
  'default_graph_version' => 'v2.10',
]);

$response = $fb->get('/' . $page_id . '/events?time_filter=upcoming', $access_token);
$graphEdge = $response->getGraphEdge();

$today = new DateTime();
$events = array();
foreach ($graphEdge as $item) {
	$event = $item->asArray();
	
	if(!isset($event['event_times'])) {
		if($event['end_time'] < $today) {
			continue;
		}

		array_push($events, $event);
	} else {
		foreach($event['event_times'] as $event_time) {
			if($event_time['end_time'] < $today) {
				continue;
			}

			$recurring_event = $event;
			$recurring_event['id'] = $event_time['id'];
			$recurring_event['start_time'] = $event_time['start_time'];
			$recurring_event['end_time'] = $event_time['end_time'];
			array_push($events, $recurring_event);
		}
	}
}

usort($events, function($a,$b){
    if ($a['start_time'] == $b['start_time']) {
        return 0;
    }
    return ($a['start_time'] < $b['start_time']) ? -1 : 1;
});
?>
		<ul class="events">
<?php foreach( $events as $event ) : ?>
			<li class="event" itemscope itemtype="http://schema.org/Event">
				<div class="event-when">
					<time class="event-start" itemprop="startDate" datetime="<?php echo $event['start_time']->format('Y-m-d H:i'); ?>">
						<span class="day"><?php echo $event['start_time']->format('l'); ?></span>
						<span class="month"><?php echo $event['start_time']->format('F'); ?></span>
						<span class="date"><?php echo $event['start_time']->format('j'); ?></span>
						<span class="year"><?php echo $event['start_time']->format('Y'); ?></span>
						<span class="time"><?php echo ($event['start_time']->format('i') == '00') ? $event['start_time']->format('g A') : $event['start_time']->format('g:i A'); ?></span>
					</time>
					<time class="event-end" itemprop="endDate" datetime="<?php echo $event['end_time']->format('Y-m-d H:i'); ?>">
						<span class="day"><?php echo $event['end_time']->format('l'); ?></span>
						<span class="month"><?php echo $event['end_time']->format('F'); ?></span>
						<span class="date"><?php echo $event['end_time']->format('j'); ?></span>
						<span class="year"><?php echo $event['end_time']->format('Y'); ?></span>
						<span class="time"><?php echo ($event['end_time']->format('i') == '00') ? $event['end_time']->format('g A') : $event['end_time']->format('g:i A'); ?></span>
					</time>
				</div>
				<a class="event-what" itemprop="url" href="https://www.facebook.com/events/<?php echo $event['id']; ?>/">
					<span itemprop="name"><?php echo $event['name']; ?></span>
				</a>
				<div class="event-why" itemprop="description">
					<?php echo nl2br(trim($event['description'])); ?>
				</div>
			</li>
<?php endforeach; ?>
		</ul>
	</section>
</aside>