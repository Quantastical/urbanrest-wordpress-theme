jQuery.fn.sortElements = function() {
    var t = [].sort;
    return function(e, a) {
        a = a || function() {
            return this;
        };
        var o = this.map(function() {
            var t = a.call(this), e = t.parentNode, o = e.insertBefore(document.createTextNode(""), t.nextSibling);
            return function() {
                if (e === this) throw new Error("You can't sort elements if any one is a descendant of another.");
                e.insertBefore(this, o), e.removeChild(o);
            };
        });
        return t.call(this, e).each(function(t) {
            o[t].call(a.call(this));
        });
    };
}(), function(t, e, a, o) {
    "use strict";
    function r(e, a) {
        this.element = e, this.settings = t.extend({}, i, a), this._defaults = i, this._name = n, 
        this.init();
    }
    var n = "urbModal", i = {};
    t.extend(r.prototype, {
        init: function() {
            var e = t(this.element).addClass("modal-shade"), a = t('<div class="modal-content" />'), o = t('<button class="modal-close" type="button" />'), r = function(o) {
                var r = t(o.target);
                return r.is(".modal-content") || r.closest(".modal-content").length ? !0 : (a.removeClass("animated fadeInDown").addClass("animated fadeOutDown"), 
                e.removeClass("modal-opened animated fadeIn").addClass("modal-closing animated fadeOut"), 
                void setTimeout(function() {
                    t("body").removeClass("no-scroll"), e.removeClass("modal-closing animated fadeOut");
                }, 500));
            };
            e.on("click", r), e.wrapInner(a), e.append(o);
        },
        show: function() {
            var e = t(this.element), a = t(".modal-content", e);
            a.removeClass("fadeOutDown").addClass("animated fadeInDown"), e.addClass("modal-opened animated fadeIn"), 
            t("body").addClass("no-scroll");
        }
    }), t.fn[n] = function(e) {
        return this.each(function() {
            t.data(this, n) || t.data(this, n, new r(this, e));
        });
    };
}(jQuery, window, document), jQuery(function(t) {
    window.Urb = {
        $document: t(document),
        $window: t(window),
        $body: t("body"),
        $html: t("html").removeClass("no-javascript").addClass("javascript"),
        $wpadminbar: t("#wpadminbar"),
        $logo: t(".site .site-header .site-title .site-logo"),
        $menuLogo: t('<img src="/wp-content/themes/urbanrest-wordpress-theme/images/logo-urbanrest-text-inverted-min.png" />'),
        $siteNavigation: t(".site .site-header .site-navigation"),
        $mainNavigation: t(".site .site-header .site-navigation .main-navigation"),
        $pageNavigation: t(".site .site-header .site-navigation .page-navigation"),
        $socialNavigation: t(".site .site-header .site-navigation .social-navigation"),
        $communityEvents: t(".site .site-community .site-events .events"),
        $businessHours: t(".site .site-company .site-location .business-hours"),
        $map: t(".site .site-company .site-map"),
        $mapLink: t(".site .site-company .site-map .map-link"),
        $mapContainer: t(".site .site-company .site-map .map-container"),
        $mapCanvas: t('<div class="map-canvas" />'),
        $contactForm: t(".site .site-company .site-contact .contact-form"),
        $address: t(".site .site-footer .site-address"),
        $viewport: t('<div id="viewport" />'),
        scrollPosition: document.body.scrollTop,
        API: "http://testapi.urbanrest.com/"
    }, Urb.loading = function(t, e) {
        if (void 0 !== e) {
            var a = t.data("loading");
            t.data("loading", t.text()).text(a), t.removeClass("loading").addClass(e ? "success" : "failure").removeAttr("disabled");
        } else {
            var o = t.data("loading");
            t.data("loading", t.text()).text(o), t.addClass("loading").attr("disabled", !0);
        }
    }, Urb.setScrollPosition = function() {
        Urb.scrollPosition = Urb.$document.scrollTop();
    }, Urb.updateViewport = function() {
        var t = Urb.$window.outerWidth();
        Urb.$viewport.toggleClass("phone", 768 >= t), Urb.$viewport.toggleClass("tablet", t > 768 && 1024 >= t), 
        Urb.$viewport.toggleClass("desktop", t > 1024);
    }, Urb.setupViewport = function() {
        Urb.$body.append(Urb.$viewport), Urb.updateViewport();
    }, Urb.$window.on("load", Urb.setupViewport), Urb.$window.on("resize orientationchange", Urb.updateViewport), 
    Urb.$window.on("scroll", Urb.setScrollPosition);
}), jQuery(function(t) {
    Urb.setupModal = function() {
        t(".modal").urbModal(), t('[data-action="modal"]').on("click", Urb.showModal);
    }, Urb.showModal = function(e) {
        "string" != typeof e && (e = t(this).data("target")), t(e).data("urbModal").show();
    }, Urb.$window.on("ajaxload load", Urb.setupModal);
}), jQuery(function(t) {
    var e = Urb.$wpadminbar && Urb.$window.outerWidth() > 600 ? Urb.$wpadminbar.outerHeight() : 0, a = Urb.$pageNavigation.outerHeight() + e, o = t("main"), r = {
        "#contact": t("#contact"),
        "#beer": t("#beer")
    };
    o.length && (r[o.attr("id")] = o), Urb.highlightCurrentSection = function() {
        t("a.active", Urb.$pageNavigation).removeClass("active");
        for (var e in r) {
            var a = r[e];
            Urb.scrollPosition > a.offset().top - .5 * Urb.$window.height() && Urb.scrollPosition < a.offset().top + a.outerHeight() - .5 * Urb.$window.height() && t('a[href*="' + e + '"]', Urb.$pageNavigation).addClass("active");
        }
    }, Urb.loadPage = function(a) {
        var o = t("main");
        if (Urb.$body.removeClass("no-scroll"), "/" === a || "" === a) {
            var r = 0, n = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - r) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: r
            }, n), o.animate({
                height: 0
            }, n), void setTimeout(function() {
                o.remove();
            }, n + 250);
        }
        var i = [];
        t('a[href^="#"]').each(function() {
            var t = this.href.substring(this.href.indexOf("#"));
            i.push(t);
        });
        var s = a.replace("/", "#");
        if (-1 !== t.inArray(s, i)) {
            var r = t(a.replace("/", "#")).offset().top - e, n = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - r) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: r
            }, n), o.animate({
                height: 0
            }, n), void setTimeout(function() {
                o.remove();
            }, n + 250);
        }
        var r = t(".site-posts").offset().top + t(".site-posts").outerHeight(), n = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - r) / Urb.$window.height()));
        o.length > 0 || (o = t('<main class="new page row around-xs" />'), t(".site-posts").after(o)), 
        o.append('<span class="loading-text"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>').addClass("loading"), 
        setTimeout(function() {
            o.animate({
                height: 0
            }, 500);
        }, n), t("html,body").animate({
            scrollTop: r - e
        }, n), t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "getmaincontent",
                nonce: _URB.nonce,
                slug: a
            },
            dataType: "json",
            success: function(e) {
                if (e.success) {
                    var r = t(e.data);
                    o.replaceWith(r), Urb.$window.trigger("ajaxload");
                    var n = 0;
                    t(".page-header > *, .page-content > *, .page-footer > *, .post-header > *, .post-content > *, .post-footer > *", r).each(function() {
                        var e = t(this);
                        e.hide(), setTimeout(function() {
                            e.fadeIn(250);
                        }, n), n += 213;
                    }), t("#qr-code").html(".page-footer:after {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=https://" + encodeURIComponent(window.location.host + a) + ");}}");
                } else console.log(e.data);
            }
        });
    }, Urb.performHistoryNavigation = function(t) {
        t.preventDefault();
        var e = (t.state, document.location.pathname);
        Urb.loadPage(e);
    }, Urb.setupInternalLinks = function() {
        t("a").not('[href^="#"]').not(':not([href^="http://' + window.location.host + '"]):not([href^="https://' + window.location.host + '"])').each(function() {
            var e = t(this);
            e.closest(t("#wpadminbar")).length > 0 || e.unbind("click").click(function(e) {
                if (window.history) {
                    e.preventDefault(), Urb.$menuToggle.toggleClass("open", !1), Urb.$mainNavigation.toggleClass("open", !1);
                    var a = t(this), o = a.attr("href").replace(window.location.protocol + "//" + window.location.host, "");
                    window.history.pushState({}, a.text(), o), Urb.loadPage(o), t("body").trigger("click");
                }
            });
        });
    }, Urb.setupExternalLinks = function() {
        t('a[href^="http"]:not([href*="' + window.location.host + '"])').attr("target", "_blank");
    }, Urb.setupFragmentAnchors = function() {
        Urb.$document.on("click", 'a[href^="#"]', function(a) {
            a.preventDefault();
            var o = t.attr(this, "href"), r = 0, n = t(o);
            return "#" !== o && 0 !== n.length ? r = n.offset().top : o = "/", t("html,body").animate({
                scrollTop: Math.ceil(r - e)
            }, Math.round(500 * (Math.abs(Urb.$window.scrollTop() - r) / Urb.$window.height()))), 
            !1;
        });
    }, Urb.setupPageNavigation = function() {
        Urb.$pageNavigation.find(".menu-item a").click(function() {
            var e = t(this);
            e.blur();
        }), Urb.$menuToggle = t("#menu-toggle"), Urb.$menuToggle.on("click", function() {
            var a = !1;
            Urb.scrollPosition > 0 && (Urb.scrollPosition < Urb.$window.height() / 2 ? a = 0 : Urb.scrollPosition < Urb.$window.height() && (a = Urb.$window.height())), 
            a !== !1 ? t("html,body").animate({
                scrollTop: a - e
            }, {
                duration: 250,
                easing: "swing"
            }).promise().done(function() {
                Urb.$menuToggle.toggleClass("open"), Urb.$mainNavigation.toggleClass("open");
            }) : (Urb.$menuToggle.toggleClass("open"), Urb.$mainNavigation.toggleClass("open"));
        });
    }, Urb.setupNavigationSnap = function() {
        Urb.windowHeightMinusWPHeaderHeight = Urb.$window.height() - Urb.$pageNavigation.outerHeight() - e;
    }, Urb.scrollPageNavigation = function() {
        Urb.scrollPosition >= Urb.windowHeightMinusWPHeaderHeight ? Urb.$siteNavigation.addClass("stuck-top") : Urb.$siteNavigation.removeClass("stuck-top");
    }, Urb.scrollSocialNavigation = function() {
        Urb.$socialNavigation.is(":visible") ? Urb.scrollPosition > Urb.$window.height() ? Urb.$socialNavigation.addClass("hidden") : Urb.$socialNavigation.css({
            opacity: (1 - Urb.scrollPosition / (Urb.$window.height() / 15)).toFixed(2),
            "margin-top": (-1 * Urb.scrollPosition / 5).toFixed() + "px",
            transform: "scale(" + (1 - .2 * Urb.scrollPosition / (Urb.$window.height() / 5)).toFixed(2) + ")"
        }) : Urb.scrollPosition < Urb.$window.height() && Urb.$socialNavigation.removeClass("hidden");
    }, Urb.scrollToContent = function() {
        if (Urb.$body.hasClass("home") || 0 != Urb.$window.scrollTop()) {
            if (location.hash) {
                var o = t(location.hash), r = 5;
                Urb.$window.scrollTop() > o.offset().top - (a + r) && Urb.$window.scrollTop() < o.offset().top + r && Urb.$window.scrollTop(o.offset().top - a);
            } else if (location.pathname && location.pathname.match(/^\/(beer|contact)\/?$/)) {
                var o = t(location.pathname.replace(/\/$/, "").replace(/\/+/, "#")), r = 5;
                0 == Urb.$window.scrollTop() && o.length && Urb.$window.scrollTop(o.offset().top);
            }
        } else Urb.$window.scrollTop(t("main").offset().top - e);
        Urb.scrollPageNavigation();
    }, "scrollRestoration" in history && (history.scrollRestoration = "manual"), Urb.$window.on("load orientationchange resize", Urb.setupNavigationSnap), 
    Urb.$window.on("ajaxload load", Urb.setupExternalLinks), Urb.$window.on("load", Urb.setupFragmentAnchors), 
    Urb.$window.on("ajaxload load", Urb.setupInternalLinks), Urb.$window.on("load", Urb.setupPageNavigation), 
    Urb.$window.on("load scroll", Urb.scrollPageNavigation), Urb.$window.on("load scroll", Urb.scrollSocialNavigation), 
    Urb.$window.on("load", function() {
        setTimeout(Urb.scrollToContent, 1);
    }), Urb.$window.on("popstate", Urb.performHistoryNavigation), Urb.handleTouchEvents = function() {
        Urb.touchEventsHandled || (t("a, button").each(function() {
            var e = t(this);
            e.on("mouseenter mouseover", function(t) {
                t.preventDefault();
            }).on("touchend", function(e) {
                t("body").trigger("touchstart");
            });
        }), Urb.touchEventsHandled = !0);
    }, Urb.$window.on("touchstart", Urb.handleTouchEvents);
}), jQuery(function(t) {
    Urb.$searchForm = t("#search"), Urb.$search = t("input", Urb.$searchForm), Urb.$searchButton = t('[href="#search"]', Urb.$socialNavigation), 
    Urb.$searchLabel = t(".search-label", Urb.$searchForm), Urb.$searchSubmit = t("button", Urb.$searchForm), 
    Urb.cancelSearching = function() {
        setTimeout(function() {
            Urb.$searchForm.toggleClass("searching", !1);
        }, 250);
    }, Urb.changeSearch = function() {
        Urb.$searchLabel.toggleClass("visible", !Urb.$search.is(":valid"));
    }, Urb.search = function() {
        return Urb.$search.is(":invalid") ? (event.preventDefault(), !1) : void 0;
    }, Urb.setupSearch = function() {}, Urb.showSearchBox = function() {
        Urb.startSearching(), Urb.$search.focus();
    }, Urb.startSearching = function() {
        Urb.changeSearch(), Urb.$searchForm.toggleClass("searching", !0);
    }, Urb.$searchButton.on("click", Urb.showSearchBox), Urb.$searchSubmit.on("click", function() {
        Urb.$searchForm.submit();
    }), Urb.$searchForm.on("submit", Urb.search), Urb.$search.on("blur", Urb.cancelSearching), 
    Urb.$search.on("input", Urb.changeSearch), Urb.$window.on("load", Urb.setupSearch);
}), jQuery(function(t) {
    Urb.hideTooltip = function() {
        var e = t(this), a = e.data("tooltip");
        a && (a.removeClass("active"), setTimeout(function() {
            a.hasClass("active") || (e.data("tooltip", !1), e.attr("title", e.attr("data-title")), 
            e.removeAttr("data-title"), a.remove());
        }, 1e3));
    }, Urb.positionTooltip = function(t, e) {
        var a = e.offset().top - 1.25 * t.outerHeight() < Urb.scrollPosition;
        t.toggleClass("above", !a), t.toggleClass("below", a), a ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2,
            top: e.offset().top + e.outerHeight() + .25 * t.outerHeight()
        }) : t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2,
            top: e.offset().top - 1.25 * t.outerHeight()
        });
        var o = t.offset().left < 0, r = t.offset().left + t.outerWidth() > Urb.$window.width();
        t.toggleClass("left", o), t.toggleClass("right", r), o ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 + -1 * t.offset().left
        }) : r && t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 - (t.offset().left + t.outerWidth() - Urb.$window.width())
        });
    }, Urb.showTooltip = function() {
        var e = t(this), a = e.data("tooltip"), o = e.attr("title");
        e.parents(".map-canvas") || (a ? (Urb.positionTooltip(a, e), a.addClass("active")) : (a = t("<div />"), 
        a.addClass("tooltip"), a.text(o), Urb.$body.append(a), Urb.positionTooltip(a, e), 
        e.data("tooltip", a), a.addClass("active"), e.attr("data-title", o), e.removeAttr("title")));
    }, Urb.setupTooltips = function() {
        Urb.$body.on("mouseleave", "[title], [data-title]", Urb.hideTooltip), Urb.$body.on("mouseenter", "[title], [data-title]", Urb.showTooltip);
    }, Urb.$window.on("ajaxload load", Urb.setupTooltips);
}), jQuery(function(t) {
    var e, a = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, o = (Urb.$pageNavigation.outerHeight() + a, 
    t('<button class="next"><span class="fa fa-angle-right"></span></button>')), r = t('<button class="previous"><span class="fa fa-angle-left"></span></button>'), n = t(".site-posts .latest-posts .blog-post h4");
    Urb.automaticNavigation = function() {
        Urb.showNextPost();
    }, Urb.showPreviousPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), a = e.prev(".previous.blog-post");
        0 === Urb.scrollPosition && a.length && r.trigger("click");
    }, Urb.showNextPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), a = e.next(".next.blog-post");
        0 === Urb.scrollPosition && a.length && o.trigger("click");
    }, Urb.scrollHeader = function() {
        n.each(function() {
            var e = t(this);
            e.parents(".blog-post").is(".active") && (Urb.scrollPosition > 0 && Urb.scrollPosition < Urb.$window.height() ? e.css({
                height: (100 - 25 * Urb.scrollPosition / Urb.$window.height()).toFixed(2) + "%",
                transform: "scale(" + (1 - .15 * Urb.scrollPosition / Urb.$window.height()).toFixed(3) + ")"
            }) : e.removeAttr("style"));
        });
    }, Urb.setupHeaderNavigation = function() {
        o.on("click", function(a) {
            var n = t(".site-posts .latest-posts .blog-post.active"), i = n.next(".next.blog-post"), s = t(".site-posts .latest-posts .blog-post:first-child");
            n.length ? (r.addClass("active"), n.removeClass("active").addClass("previous"), 
            i.length && (i.removeClass("previous next").addClass("active"), Urb.getNextPost()), 
            i.next(".next.blog-post").length || o.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != a.which && e && clearInterval(e);
        }), r.on("click", function(a) {
            var n = t(".site-posts .latest-posts .blog-post.active"), i = n.prev(".previous.blog-post"), s = t(".site-posts .latest-posts .blog-post:last-child");
            n.length ? (o.addClass("active"), n.removeClass("active").addClass("next"), i.length && i.removeClass("previous next").addClass("active"), 
            i.prev(".previous.blog-post").length || r.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != a.which && e && clearInterval(e);
        }), t(".site-posts .latest-posts").after(o).after(r), t(".site-posts .latest-posts .blog-post > a").on("dragstart", function() {
            return !1;
        });
        document.getElementById("latest-posts");
        setTimeout(Urb.getNextPost, 500);
    }, Urb.startAutomaticNavigation = function() {
        e && clearInterval(e), e = setTimeout(function() {
            Urb.automaticNavigation();
        }, 5e3);
    }, Urb.stopAutomaticNavigation = function() {
        e && clearInterval(e), Urb.$window.off("scroll", Urb.stopAutomaticNavigation);
    }, Urb.getNextPost = function() {
        t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "getnext",
                id: t(".site-posts .latest-posts .blog-post:last-child").data("post-id")
            },
            success: function(e) {
                if (e.success) {
                    var a = t("<li />");
                    a.addClass("blog-post next"), a.attr("data-post-id", e.data.ID);
                    var r = t("<a />");
                    if (r.attr("href", e.data.permalink), r.on("dragstart", function() {
                        return !1;
                    }), a.append(r), e.data.thumbnail) {
                        var n = t("<span />");
                        n.addClass("blog-post-image"), e.data.image_src && n.css({
                            "background-image": "url(" + e.data.image_src + ")"
                        }), n.append(e.data.thumbnail), r.append(n);
                    }
                    if (e.data.post_title) {
                        var i = t("<h4 />");
                        i.text(e.data.post_title), r.append(i);
                    }
                    if (e.data.excerpt) {
                        var s = t("<div />");
                        s.addClass("blog-post-intro"), s.html(e.data.excerpt), a.append(s);
                    }
                    t(".site-posts .latest-posts").append(a), o.addClass("active"), Urb.startAutomaticNavigation();
                }
            }
        });
    }, Urb.$window.on("scroll", Urb.stopAutomaticNavigation), Urb.$window.on("load scroll", Urb.scrollHeader), 
    Urb.$window.on("load", Urb.setupHeaderNavigation);
}), jQuery(function(t) {
    Urb.$specials = t(".site-specials"), Urb.$currentBeerTaps = t(".current-beer .taps", Urb.$specials), 
    Urb.$currentBeerDeck = t(".upcoming-beer .decks", Urb.$specials), Urb.setupTapSorting = function() {
        t("th", Urb.$currentBeerTaps).click(Urb.sortTap);
    }, Urb.sortTap = function() {
        var e = t(this);
        Urb.$currentBeerTaps.find("td").filter(function() {
            return t(this).index() === e.index();
        }).sortElements(function(e, a) {
            return t.text([ e ]) == t.text([ a ]) ? 0 : t.text([ e ]) > t.text([ a ]) ? 1 : -1;
        }, function() {
            return this.parentNode;
        }), Urb.$currentBeerDeck.find("td").filter(function() {
            return t(this).index() === e.index();
        }).sortElements(function(e, a) {
            return t.text([ e ]) == t.text([ a ]) ? 0 : t.text([ e ]) > t.text([ a ]) ? 1 : -1;
        }, function() {
            return this.parentNode;
        });
    }, Urb.$window.on("load", Urb.setupTapSorting);
}), jQuery(function(t) {
    Urb.setupEventLinks = function() {
        t(".event", Urb.$communityEvents).each(function() {
            var e = t(this);
            e.on("click", function(e) {
                location.href = t(this).children(".event-what").attr("href");
            });
        });
    }, Urb.$window.on("load", Urb.setupEventLinks);
}), jQuery(function(t) {
    var e = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, a = Urb.$pageNavigation.outerHeight() + e;
    Urb.centerMap = function() {
        Urb.$map.hasClass("open") && setTimeout(function() {
            Urb.$map.data("map").setCenter(Urb.$map.data("marker").getPosition()), Urb.$map.data("map").panTo(Urb.$map.data("marker").getPosition());
        }, 250);
    }, Urb.scrollMap = function() {
        if (Urb.$map.hasClass("open") && !Urb.$map.hasClass("animating") && Urb.$mapCanvas.offset().top > Urb.scrollPosition + Urb.$window.height() && (Urb.$map.removeClass("open"), 
        t(".map-container, .map-canvas", Urb.$map).removeAttr("style")), !Urb.$map.data("map") && Urb.$window.scrollTop() > t("#contact").offset().top) {
            var e = t("<script />");
            e.attr("type", "text/javascript"), e.attr("async", !0), e.attr("src", "http://maps.google.com/maps/api/js?callback=Urb.setupMap"), 
            Urb.$body.append(e), Urb.$map.data("map", !0);
        }
    }, Urb.setupBusinessHours = function() {
        var e = new Date(), a = e.getDay() + 1;
        t("dt:nth-of-type(" + a + "), dd:nth-of-type(" + a + ")", Urb.$businesHours).addClass("today"), 
        t("dt", Urb.$businessHours).hover(function() {
            t(this).toggleClass("hover").next("dd").toggleClass("hover");
        }), t("dd", Urb.$businessHours).hover(function() {
            t(this).toggleClass("hover").prev("dt").toggleClass("hover");
        });
    }, Urb.setupContactForm = function() {
        Urb.$contactForm.attr("novalidate", !0), Urb.$contactForm.on("submit", Urb.submitContactForm);
        var t = Urb.$contactForm.find("#contact_email_address");
        Urb.$contactForm.data("email_address", t), t.on("keyup", function() {
            t.closest(".field").removeClass("error").removeAttr("title");
        });
    }, Urb.setupMap = function() {
        google || t(".site-map").remove(), Urb.$mapCanvas.appendTo(Urb.$mapContainer);
        var e = {
            disableDefaultUI: !0,
            draggable: !0,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: !1,
            overviewMapControl: !0,
            rotateControl: !1,
            scaleControl: !1,
            scrollwheel: !1,
            streetViewControl: !1,
            zoom: 14,
            zoomControl: !0,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
        Urb.$map.data("latitude") && Urb.$map.data("longitude") && (e.center = new google.maps.LatLng(Urb.$map.data("latitude"), Urb.$map.data("longitude")), 
        t.getJSON("/wp-content/themes/urbanrest-wordpress-theme/styles/map.json", function(t) {
            e.styles = t;
            var a = new google.maps.Map(Urb.$mapCanvas.get(0), e), o = new google.maps.Marker({
                icon: {
                    labelOrigin: {
                        x: 30,
                        y: 19
                    },
                    url: "http://maps.google.com/mapfiles/kml/paddle/grn-blank.png"
                },
                label: {
                    fontFamily: "FontAwesome",
                    fontSize: "22px",
                    text: ""
                },
                map: a,
                position: e.center
            }), r = new google.maps.InfoWindow({
                content: Urb.$address.html()
            });
            Urb.$map.data("map", a), Urb.$map.data("marker", o), Urb.$map.data("infoWindow", r), 
            google.maps.event.addListener(o, "click", function() {
                r.open(a, o);
            }), r.open(a, o);
        }));
    }, Urb.handleContactFormResponse = function(e) {
        console.log(e), console.log(e.responseText), e && e.success && Urb.loading(t('button[type="submit"]', Urb.$contactForm), !0);
    }, Urb.submitContactForm = function(e) {
        e.preventDefault(), Urb.validateContactForm() && (Urb.loading(t('button[type="submit"]', Urb.$contactForm)), 
        t.ajax({
            url: Urb.$contactForm.attr("action"),
            data: Urb.$contactForm.serialize(),
            dataType: "json",
            method: Urb.$contactForm.attr("method"),
            complete: Urb.handleContactFormResponse
        }));
    }, Urb.resizeMap = function() {
        if (Urb.$map.hasClass("open")) {
            Urb.$map.addClass("animating");
            var e = (Urb.$window.outerHeight() - a - t("h3", Urb.$map).outerHeight()).toFixed(0);
            t(".map-container, .map-canvas", Urb.$map).css("height", e + "px"), Urb.centerMap(), 
            t("html,body").animate({
                scrollTop: Urb.$window.scrollTop() + e
            }, 666, function() {
                Urb.$map.removeClass("animating");
            });
        }
    }, Urb.toggleMap = function(e) {
        e.preventDefault(), Urb.$map.data("map") || Urb.setupMap(), Urb.$map.toggleClass("open"), 
        Urb.$map.hasClass("open") ? Urb.resizeMap() : t(".map-container, .map-canvas", Urb.$map).removeAttr("style");
    }, Urb.validateContactForm = function() {
        var t = Urb.$contactForm.data("email_address");
        return t.val().length < 3 || t.val().indexOf("@") < 0 ? (t.closest(".field").addClass("error").attr("title", "Valid email address required."), 
        !1) : !0;
    }, Urb.$window.on("scroll", Urb.scrollMap), Urb.$window.on("load", Urb.setupBusinessHours), 
    Urb.$mapLink.on("click", Urb.toggleMap), Urb.$window.on("load", Urb.setupContactForm), 
    Urb.$window.on("resize orientationchange", Urb.resizeMap);
}), jQuery(function(t) {
    Urb.rateBeer = function() {
        var e = t(".rating-actions"), a = t(this);
        return e.addClass("rated"), a.addClass("rated"), a.prevAll(".rate-button").addClass("rated"), 
        a.nextAll(".rate-button").removeClass("rated"), t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "post-rate",
                nonce: _URB.nonce,
                post_rating: a.val(),
                post_id: a.data("id")
            },
            dataType: "json",
            success: function(t) {
                t.success ? Urb.$aggregateRating.attr("data-user-rating", a.val()) : console.log(t);
            }
        }), Urb.shareRating(a.val()), !1;
    }, Urb.setupRatingPoll = function() {
        Urb.$aggregateRating = t('[itemprop="aggregateRating"]'), Urb.$beerCheckinModal = t(".modal.checkin-modal");
        var e = t('<div class="rating-actions" />');
        Number(Urb.$aggregateRating.data("user-rating")) > 0 && e.addClass("rated");
        for (var a = 1; 5 >= a; a++) {
            var o = t('<button class="rate-button" />');
            o.val(a), o.data("id", Urb.$aggregateRating.data("beer-id")), o.text(1 === a ? "1 Star" : a + " Stars"), 
            o.toggleClass("rated", a <= Number(Urb.$aggregateRating.data("user-rating"))), e.append(o), 
            o.on("click", Urb.rateBeer);
        }
        Urb.$aggregateRating.after(e);
    }, Urb.setupRatingsFrom3rdParties = function() {
        t.ajaxSetup({
            beforeSend: function(t) {
                t.setRequestHeader("Authorization", "Basic " + btoa("urbanrest:Greensleeves"));
            }
        }), t.ajax({
            type: "get",
            url: Urb.API + "untappd/beer/info/",
            data: {
                postId: t('[itemprop="aggregateRating"]').data("beer-id")
            },
            dataType: "json",
            success: function(e) {
                var a = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), o = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), r = a * o;
                if (e.response.beer) {
                    var n = e.response.beer.rating_score, i = e.response.beer.rating_count, s = n * i, l = r + s, c = o + i, d = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", d.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(d.toFixed(1)), 
                    t('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        }), t.ajax({
            type: "get",
            url: Urb.API + "ratebeer/beer/info/",
            data: {
                postId: t('[itemprop="aggregateRating"]').data("beer-id")
            },
            dataType: "json",
            success: function(e) {
                var a = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), o = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), r = a * o;
                if (e) {
                    var n = Number(e.rating_value) / Number(e.best_rating) * 5, i = Number(e.review_count), s = n * i, l = r + s, c = o + i, d = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", d.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(d.toFixed(1)), 
                    t('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        }), t.ajax({
            type: "get",
            url: Urb.API + "beeradvocate/beer/info/",
            data: {
                postId: t('[itemprop="aggregateRating"]').data("beer-id")
            },
            dataType: "json",
            success: function(e) {
                var a = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), o = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), r = a * o;
                if (e) {
                    var n = Number(e.rating_value) / Number(e.best_rating) * 5, i = Number(e.review_count), s = n * i, l = r + s, c = o + i, d = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", d.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(d.toFixed(1)), 
                    t('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        });
    }, Urb.shareRating = function(e) {
        var a = t(".message", Urb.$beerCheckinModal);
        0 == a.length && (a = t('<div class="message" />'), t(".modal-content", Urb.$beerCheckinModal).prepend(a));
        var o = "Thanks.";
        switch (Number(e)) {
          case 5:
            o = "Wow, Thank You!";
            break;

          case 4:
            o = "Glad You Enjoyed It!";
            break;

          case 3:
            o = "Thanks!";
            break;

          case 2:
            o = "Thank you.";
            break;

          case 1:
            o = "We can do better.";
        }
        a.text(o), Urb.showModal(".modal.checkin-modal");
    }, Urb.$window.on("ajaxload load", Urb.setupRatingPoll);
}), jQuery(function(t) {}), jQuery(function(t) {}), jQuery(function(t) {}), jQuery(function(t) {}), 
function(t, e, a, o, r, n, i) {
    t.GoogleAnalyticsObject = r, t[r] = t[r] || function() {
        (t[r].q = t[r].q || []).push(arguments);
    }, t[r].l = 1 * new Date(), n = e.createElement(a), i = e.getElementsByTagName(a)[0], 
    n.async = 1, n.src = o, i.parentNode.insertBefore(n, i);
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), 
ga("create", "UA-54926068-6", "auto"), ga("require", "linkid", "linkid.js"), ga("set", "anonymizeIp", !0), 
ga("send", "pageview");
//# sourceMappingURL=script.js.map
