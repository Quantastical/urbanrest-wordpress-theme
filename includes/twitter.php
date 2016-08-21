<?php
require_once('plugins/TwitterAPIExchange.php');
$settings = array(
    'oauth_access_token' => "35701303-DKykBApLHuzX8upAeTrncxVrDObczkldO4bsubxWN",
    'oauth_access_token_secret' => "Njfx6UpIwbTLbX4YyMd1zpSMzVih5qbfOXiWcTBZ9xPo4",
    'consumer_key' => "jNn3vlw3RVTXLpuZQ5J1mW816",
    'consumer_secret' => "dhVEZPpgLRwWMEguk9ia6XciUTtr7DeFV3uh94Jm6j9Q4B1ojw"
);
$url = 'https://api.twitter.com/1.1/users/show.json';
$getfield = '?username=UrbanrestBeer';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$twitter_data = $twitter->buildOauth($url, $requestMethod)
	->setGetfield($getfield)
    ->performRequest();
?>
<a class="twitter-timeline" id="twitter-timeline" href="https://twitter.com/Quantastical" data-widget-id="647989566436188160" data-chrome="noheader nofooter">Tweets by @Quantastical</a>
<script>
twttr.widgets.load($('#twitter-timeline').get(0));
console.log('asdf');
console.log('<?php echo $twitter_data; ?>');
</script>