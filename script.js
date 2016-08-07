!function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(t) {
    var e, o, a, n, r, i, s = "Close", l = "BeforeClose", c = "AfterClose", d = "BeforeAppend", p = "MarkupParse", u = "Open", m = "Change", g = "mfp", f = "." + g, b = "mfp-ready", h = "mfp-removing", v = "mfp-prevent-close", U = function() {}, w = !!window.jQuery, C = t(window), $ = function(t, o) {
        e.ev.on(g + t + f, o);
    }, y = function(e, o, a, n) {
        var r = document.createElement("div");
        return r.className = "mfp-" + e, a && (r.innerHTML = a), n ? o && o.appendChild(r) : (r = t(r), 
        o && r.appendTo(o)), r;
    }, x = function(o, a) {
        e.ev.triggerHandler(g + o, a), e.st.callbacks && (o = o.charAt(0).toLowerCase() + o.slice(1), 
        e.st.callbacks[o] && e.st.callbacks[o].apply(e, t.isArray(a) ? a : [ a ]));
    }, T = function(o) {
        return o === i && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), 
        i = o), e.currTemplate.closeBtn;
    }, k = function() {
        t.magnificPopup.instance || (e = new U(), e.init(), t.magnificPopup.instance = e);
    }, I = function() {
        var t = document.createElement("p").style, e = [ "ms", "O", "Moz", "Webkit" ];
        if (void 0 !== t.transition) return !0;
        for (;e.length; ) if (e.pop() + "Transition" in t) return !0;
        return !1;
    };
    U.prototype = {
        constructor: U,
        init: function() {
            var o = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(o), 
            e.isIOS = /iphone|ipad|ipod/gi.test(o), e.supportsTransition = I(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), 
            a = t(document), e.popupsCache = {};
        },
        open: function(o) {
            var n;
            if (o.isObj === !1) {
                e.items = o.items.toArray(), e.index = 0;
                var i, s = o.items;
                for (n = 0; n < s.length; n++) if (i = s[n], i.parsed && (i = i.el[0]), i === o.el[0]) {
                    e.index = n;
                    break;
                }
            } else e.items = t.isArray(o.items) ? o.items : [ o.items ], e.index = o.index || 0;
            if (e.isOpen) return void e.updateItemHTML();
            e.types = [], r = "", o.mainEl && o.mainEl.length ? e.ev = o.mainEl.eq(0) : e.ev = a, 
            o.key ? (e.popupsCache[o.key] || (e.popupsCache[o.key] = {}), e.currTemplate = e.popupsCache[o.key]) : e.currTemplate = {}, 
            e.st = t.extend(!0, {}, t.magnificPopup.defaults, o), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, 
            e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, 
            e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = y("bg").on("click" + f, function() {
                e.close();
            }), e.wrap = y("wrap").attr("tabindex", -1).on("click" + f, function(t) {
                e._checkIfClose(t.target) && e.close();
            }), e.container = y("container", e.wrap)), e.contentContainer = y("content"), e.st.preloader && (e.preloader = y("preloader", e.container, e.st.tLoading));
            var l = t.magnificPopup.modules;
            for (n = 0; n < l.length; n++) {
                var c = l[n];
                c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e);
            }
            x("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? ($(p, function(t, e, o, a) {
                o.close_replaceWith = T(a.type);
            }), r += " mfp-close-btn-in") : e.wrap.append(T())), e.st.alignTop && (r += " mfp-align-top"), 
            e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: C.scrollTop(),
                position: "absolute"
            }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: a.height(),
                position: "absolute"
            }), e.st.enableEscapeKey && a.on("keyup" + f, function(t) {
                27 === t.keyCode && e.close();
            }), C.on("resize" + f, function() {
                e.updateSize();
            }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
            var d = e.wH = C.height(), m = {};
            if (e.fixedContentPos && e._hasScrollBar(d)) {
                var g = e._getScrollbarSize();
                g && (m.marginRight = g);
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var h = e.st.mainClass;
            return e.isIE7 && (h += " mfp-ie7"), h && e._addClassToMFP(h), e.updateItemHTML(), 
            x("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), 
            e._lastFocusedEl = document.activeElement, setTimeout(function() {
                e.content ? (e._addClassToMFP(b), e._setFocus()) : e.bgOverlay.addClass(b), a.on("focusin" + f, e._onFocusIn);
            }, 16), e.isOpen = !0, e.updateSize(d), x(u), o;
        },
        close: function() {
            e.isOpen && (x(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(h), 
            setTimeout(function() {
                e._close();
            }, e.st.removalDelay)) : e._close());
        },
        _close: function() {
            x(s);
            var o = h + " " + b + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (o += e.st.mainClass + " "), 
            e._removeClassFromMFP(o), e.fixedContentPos) {
                var n = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n);
            }
            a.off("keyup" + f + " focusin" + f), e.ev.off(f), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), 
            e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), 
            !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), 
            e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, 
            e.content = null, e.currTemplate = null, e.prevHeight = 0, x(c);
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var o = document.documentElement.clientWidth / window.innerWidth, a = window.innerHeight * o;
                e.wrap.css("height", a), e.wH = a;
            } else e.wH = t || C.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize");
        },
        updateItemHTML: function() {
            var o = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), o.parsed || (o = e.parseEl(e.index));
            var a = o.type;
            if (x("BeforeChange", [ e.currItem ? e.currItem.type : "", a ]), e.currItem = o, 
            !e.currTemplate[a]) {
                var r = e.st[a] ? e.st[a].markup : !1;
                x("FirstMarkupParse", r), r ? e.currTemplate[a] = t(r) : e.currTemplate[a] = !0;
            }
            n && n !== o.type && e.container.removeClass("mfp-" + n + "-holder");
            var i = e["get" + a.charAt(0).toUpperCase() + a.slice(1)](o, e.currTemplate[a]);
            e.appendContent(i, a), o.preloaded = !0, x(m, o), n = o.type, e.container.prepend(e.contentContainer), 
            x("AfterChange");
        },
        appendContent: function(t, o) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[o] === !0 ? e.content.find(".mfp-close").length || e.content.append(T()) : e.content = t : e.content = "", 
            x(d), e.container.addClass("mfp-" + o + "-holder"), e.contentContainer.append(e.content);
        },
        parseEl: function(o) {
            var a, n = e.items[o];
            if (n.tagName ? n = {
                el: t(n)
            } : (a = n.type, n = {
                data: n,
                src: n.src
            }), n.el) {
                for (var r = e.types, i = 0; i < r.length; i++) if (n.el.hasClass("mfp-" + r[i])) {
                    a = r[i];
                    break;
                }
                n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"));
            }
            return n.type = a || e.st.type || "inline", n.index = o, n.parsed = !0, e.items[o] = n, 
            x("ElementParse", n), e.items[o];
        },
        addGroup: function(t, o) {
            var a = function(a) {
                a.mfpEl = this, e._openClick(a, t, o);
            };
            o || (o = {});
            var n = "click.magnificPopup";
            o.mainEl = t, o.items ? (o.isObj = !0, t.off(n).on(n, a)) : (o.isObj = !1, o.delegate ? t.off(n).on(n, o.delegate, a) : (o.items = t, 
            t.off(n).on(n, a)));
        },
        _openClick: function(o, a, n) {
            var r = void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick;
            if (r || !(2 === o.which || o.ctrlKey || o.metaKey || o.altKey || o.shiftKey)) {
                var i = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                if (i) if (t.isFunction(i)) {
                    if (!i.call(e)) return !0;
                } else if (C.width() < i) return !0;
                o.type && (o.preventDefault(), e.isOpen && o.stopPropagation()), n.el = t(o.mfpEl), 
                n.delegate && (n.items = a.find(n.delegate)), e.open(n);
            }
        },
        updateStatus: function(t, a) {
            if (e.preloader) {
                o !== t && e.container.removeClass("mfp-s-" + o), a || "loading" !== t || (a = e.st.tLoading);
                var n = {
                    status: t,
                    text: a
                };
                x("UpdateStatus", n), t = n.status, a = n.text, e.preloader.html(a), e.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation();
                }), e.container.addClass("mfp-s-" + t), o = t;
            }
        },
        _checkIfClose: function(o) {
            if (!t(o).hasClass(v)) {
                var a = e.st.closeOnContentClick, n = e.st.closeOnBgClick;
                if (a && n) return !0;
                if (!e.content || t(o).hasClass("mfp-close") || e.preloader && o === e.preloader[0]) return !0;
                if (o === e.content[0] || t.contains(e.content[0], o)) {
                    if (a) return !0;
                } else if (n && t.contains(document, o)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t);
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
        },
        _hasScrollBar: function(t) {
            return (e.isIE7 ? a.height() : document.body.scrollHeight) > (t || C.height());
        },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
        },
        _onFocusIn: function(o) {
            return o.target === e.wrap[0] || t.contains(e.wrap[0], o.target) ? void 0 : (e._setFocus(), 
            !1);
        },
        _parseMarkup: function(e, o, a) {
            var n;
            a.data && (o = t.extend(a.data, o)), x(p, [ e, o, a ]), t.each(o, function(o, a) {
                if (void 0 === a || a === !1) return !0;
                if (n = o.split("_"), n.length > 1) {
                    var r = e.find(f + "-" + n[0]);
                    if (r.length > 0) {
                        var i = n[1];
                        "replaceWith" === i ? r[0] !== a[0] && r.replaceWith(a) : "img" === i ? r.is("img") ? r.attr("src", a) : r.replaceWith(t("<img>").attr("src", a).attr("class", r.attr("class"))) : r.attr(n[1], a);
                    }
                } else e.find(f + "-" + o).html(a);
            });
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", 
                document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
            }
            return e.scrollbarSize;
        }
    }, t.magnificPopup = {
        instance: null,
        proto: U.prototype,
        modules: [],
        open: function(e, o) {
            return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = o || 0, this.instance.open(e);
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function(e, o) {
            o.options && (t.magnificPopup.defaults[e] = o.options), t.extend(this.proto, o.proto), 
            this.modules.push(e);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function(o) {
        k();
        var a = t(this);
        if ("string" == typeof o) if ("open" === o) {
            var n, r = w ? a.data("magnificPopup") : a[0].magnificPopup, i = parseInt(arguments[1], 10) || 0;
            r.items ? n = r.items[i] : (n = a, r.delegate && (n = n.find(r.delegate)), n = n.eq(i)), 
            e._openClick({
                mfpEl: n
            }, a, r);
        } else e.isOpen && e[o].apply(e, Array.prototype.slice.call(arguments, 1)); else o = t.extend(!0, {}, o), 
        w ? a.data("magnificPopup", o) : a[0].magnificPopup = o, e.addGroup(a, o);
        return a;
    };
    var P, S, _, N = "inline", M = function() {
        _ && (S.after(_.addClass(P)).detach(), _ = null);
    };
    t.magnificPopup.registerModule(N, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                e.types.push(N), $(s + "." + N, function() {
                    M();
                });
            },
            getInline: function(o, a) {
                if (M(), o.src) {
                    var n = e.st.inline, r = t(o.src);
                    if (r.length) {
                        var i = r[0].parentNode;
                        i && i.tagName && (S || (P = n.hiddenClass, S = y(P), P = "mfp-" + P), _ = r.after(S).detach().removeClass(P)), 
                        e.updateStatus("ready");
                    } else e.updateStatus("error", n.tNotFound), r = t("<div>");
                    return o.inlineElement = r, r;
                }
                return e.updateStatus("ready"), e._parseMarkup(a, {}, o), a;
            }
        }
    });
    var F, j = "ajax", E = function() {
        F && t(document.body).removeClass(F);
    }, H = function() {
        E(), e.req && e.req.abort();
    };
    t.magnificPopup.registerModule(j, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                e.types.push(j), F = e.st.ajax.cursor, $(s + "." + j, H), $("BeforeChange." + j, H);
            },
            getAjax: function(o) {
                F && t(document.body).addClass(F), e.updateStatus("loading");
                var a = t.extend({
                    url: o.src,
                    success: function(a, n, r) {
                        var i = {
                            data: a,
                            xhr: r
                        };
                        x("ParseAjax", i), e.appendContent(t(i.data), j), o.finished = !0, E(), e._setFocus(), 
                        setTimeout(function() {
                            e.wrap.addClass(b);
                        }, 16), e.updateStatus("ready"), x("AjaxContentAdded");
                    },
                    error: function() {
                        E(), o.finished = o.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", o.src));
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(a), "";
            }
        }
    });
    var z, O = function(o) {
        if (o.data && void 0 !== o.data.title) return o.data.title;
        var a = e.st.image.titleSrc;
        if (a) {
            if (t.isFunction(a)) return a.call(e, o);
            if (o.el) return o.el.attr(a) || "";
        }
        return "";
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var o = e.st.image, a = ".image";
                e.types.push("image"), $(u + a, function() {
                    "image" === e.currItem.type && o.cursor && t(document.body).addClass(o.cursor);
                }), $(s + a, function() {
                    o.cursor && t(document.body).removeClass(o.cursor), C.off("resize" + f);
                }), $("Resize" + a, e.resizeImage), e.isLowIE && $("AfterChange", e.resizeImage);
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var o = 0;
                    e.isLowIE && (o = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), 
                    t.img.css("max-height", e.wH - o);
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, z && clearInterval(z), t.isCheckingImgSize = !1, x("ImageHasSize", t), 
                t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1));
            },
            findImageSize: function(t) {
                var o = 0, a = t.img[0], n = function(r) {
                    z && clearInterval(z), z = setInterval(function() {
                        return a.naturalWidth > 0 ? void e._onImageHasSize(t) : (o > 200 && clearInterval(z), 
                        o++, void (3 === o ? n(10) : 40 === o ? n(50) : 100 === o && n(500)));
                    }, r);
                };
                n(1);
            },
            getImage: function(o, a) {
                var n = 0, r = function() {
                    o && (o.img[0].complete ? (o.img.off(".mfploader"), o === e.currItem && (e._onImageHasSize(o), 
                    e.updateStatus("ready")), o.hasSize = !0, o.loaded = !0, x("ImageLoadComplete")) : (n++, 
                    200 > n ? setTimeout(r, 100) : i()));
                }, i = function() {
                    o && (o.img.off(".mfploader"), o === e.currItem && (e._onImageHasSize(o), e.updateStatus("error", s.tError.replace("%url%", o.src))), 
                    o.hasSize = !0, o.loaded = !0, o.loadError = !0);
                }, s = e.st.image, l = a.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", o.el && o.el.find("img").length && (c.alt = o.el.find("img").attr("alt")), 
                    o.img = t(c).on("load.mfploader", r).on("error.mfploader", i), c.src = o.src, l.is("img") && (o.img = o.img.clone()), 
                    c = o.img[0], c.naturalWidth > 0 ? o.hasSize = !0 : c.width || (o.hasSize = !1);
                }
                return e._parseMarkup(a, {
                    title: O(o),
                    img_replaceWith: o.img
                }, o), e.resizeImage(), o.hasSize ? (z && clearInterval(z), o.loadError ? (a.addClass("mfp-loading"), 
                e.updateStatus("error", s.tError.replace("%url%", o.src))) : (a.removeClass("mfp-loading"), 
                e.updateStatus("ready")), a) : (e.updateStatus("loading"), o.loading = !0, o.hasSize || (o.imgHidden = !0, 
                a.addClass("mfp-loading"), e.findImageSize(o)), a);
            }
        }
    });
    var B, A = function() {
        return void 0 === B && (B = void 0 !== document.createElement("p").style.MozTransform), 
        B;
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t : t.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var t, o = e.st.zoom, a = ".zoom";
                if (o.enabled && e.supportsTransition) {
                    var n, r, i = o.duration, c = function(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), a = "all " + o.duration / 1e3 + "s " + o.easing, n = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, r = "transition";
                        return n["-webkit-" + r] = n["-moz-" + r] = n["-o-" + r] = n[r] = a, e.css(n), e;
                    }, d = function() {
                        e.content.css("visibility", "visible");
                    };
                    $("BuildControls" + a, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(n), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), 
                            !t) return void d();
                            r = c(t), r.css(e._getOffset()), e.wrap.append(r), n = setTimeout(function() {
                                r.css(e._getOffset(!0)), n = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        r.remove(), t = r = null, x("ZoomAnimationEnded");
                                    }, 16);
                                }, i);
                            }, 16);
                        }
                    }), $(l + a, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(n), e.st.removalDelay = i, !t) {
                                if (t = e._getItemToZoom(), !t) return;
                                r = c(t);
                            }
                            r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), 
                            setTimeout(function() {
                                r.css(e._getOffset());
                            }, 16);
                        }
                    }), $(s + a, function() {
                        e._allowZoom() && (d(), r && r.remove(), t = null);
                    });
                }
            },
            _allowZoom: function() {
                return "image" === e.currItem.type;
            },
            _getItemToZoom: function() {
                return e.currItem.hasSize ? e.currItem.img : !1;
            },
            _getOffset: function(o) {
                var a;
                a = o ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var n = a.offset(), r = parseInt(a.css("padding-top"), 10), i = parseInt(a.css("padding-bottom"), 10);
                n.top -= t(window).scrollTop() - r;
                var s = {
                    width: a.width(),
                    height: (w ? a.innerHeight() : a[0].offsetHeight) - i - r
                };
                return A() ? s["-moz-transform"] = s.transform = "translate(" + n.left + "px," + n.top + "px)" : (s.left = n.left, 
                s.top = n.top), s;
            }
        }
    });
    var R = "iframe", L = "//about:blank", W = function(t) {
        if (e.currTemplate[R]) {
            var o = e.currTemplate[R].find("iframe");
            o.length && (t || (o[0].src = L), e.isIE8 && o.css("display", t ? "block" : "none"));
        }
    };
    t.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                e.types.push(R), $("BeforeChange", function(t, e, o) {
                    e !== o && (e === R ? W() : o === R && W(!0));
                }), $(s + "." + R, function() {
                    W();
                });
            },
            getIframe: function(o, a) {
                var n = o.src, r = e.st.iframe;
                t.each(r.patterns, function() {
                    return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), 
                    n = this.src.replace("%id%", n), !1) : void 0;
                });
                var i = {};
                return r.srcAction && (i[r.srcAction] = n), e._parseMarkup(a, i, o), e.updateStatus("ready"), 
                a;
            }
        }
    });
    var D = function(t) {
        var o = e.items.length;
        return t > o - 1 ? t - o : 0 > t ? o + t : t;
    }, Q = function(t, e, o) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, o);
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [ 0, 2 ],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var o = e.st.gallery, n = ".mfp-gallery";
                return e.direction = !0, o && o.enabled ? (r += " mfp-gallery", $(u + n, function() {
                    o.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                        return e.items.length > 1 ? (e.next(), !1) : void 0;
                    }), a.on("keydown" + n, function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                    });
                }), $("UpdateStatus" + n, function(t, o) {
                    o.text && (o.text = Q(o.text, e.currItem.index, e.items.length));
                }), $(p + n, function(t, a, n, r) {
                    var i = e.items.length;
                    n.counter = i > 1 ? Q(o.tCounter, r.index, i) : "";
                }), $("BuildControls" + n, function() {
                    if (e.items.length > 1 && o.arrows && !e.arrowLeft) {
                        var a = o.arrowMarkup, n = e.arrowLeft = t(a.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(v), r = e.arrowRight = t(a.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(v);
                        n.click(function() {
                            e.prev();
                        }), r.click(function() {
                            e.next();
                        }), e.container.append(n.add(r));
                    }
                }), $(m + n, function() {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                        e.preloadNearbyImages(), e._preloadTimeout = null;
                    }, 16);
                }), void $(s + n, function() {
                    a.off(n), e.wrap.off("click" + n), e.arrowRight = e.arrowLeft = null;
                })) : !1;
            },
            next: function() {
                e.direction = !0, e.index = D(e.index + 1), e.updateItemHTML();
            },
            prev: function() {
                e.direction = !1, e.index = D(e.index - 1), e.updateItemHTML();
            },
            goTo: function(t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var t, o = e.st.gallery.preload, a = Math.min(o[0], e.items.length), n = Math.min(o[1], e.items.length);
                for (t = 1; t <= (e.direction ? n : a); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? a : n); t++) e._preloadItem(e.index - t);
            },
            _preloadItem: function(o) {
                if (o = D(o), !e.items[o].preloaded) {
                    var a = e.items[o];
                    a.parsed || (a = e.parseEl(o)), x("LazyLoad", a), "image" === a.type && (a.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                        a.hasSize = !0;
                    }).on("error.mfploader", function() {
                        a.hasSize = !0, a.loadError = !0, x("LazyLoadError", a);
                    }).attr("src", a.src)), a.preloaded = !0;
                }
            }
        }
    });
    var q = "retina";
    t.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, function(t) {
                    return "@2x" + t;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, o = t.ratio;
                    o = isNaN(o) ? o() : o, o > 1 && ($("ImageHasSize." + q, function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / o,
                            width: "100%"
                        });
                    }), $("ElementParse." + q, function(e, a) {
                        a.src = t.replaceSrc(a, o);
                    }));
                }
            }
        }
    }), k();
}), jQuery.fn.sortElements = function() {
    var t = [].sort;
    return function(e, o) {
        o = o || function() {
            return this;
        };
        var a = this.map(function() {
            var t = o.call(this), e = t.parentNode, a = e.insertBefore(document.createTextNode(""), t.nextSibling);
            return function() {
                if (e === this) throw new Error("You can't sort elements if any one is a descendant of another.");
                e.insertBefore(this, a), e.removeChild(a);
            };
        });
        return t.call(this, e).each(function(t) {
            a[t].call(o.call(this));
        });
    };
}(), function(t, e, o, a) {
    "use strict";
    function n(e, o) {
        this.element = e, this.settings = t.extend({}, i, o), this._defaults = i, this._name = r, 
        this.init();
    }
    var r = "urbModal", i = {};
    t.extend(n.prototype, {
        init: function() {
            var e = t(this.element).addClass("modal-shade"), o = t('<div class="modal-content" />'), a = t('<button class="modal-close" type="button" />'), n = function(a) {
                var n = t(a.target);
                return n.is(".modal-content") || n.closest(".modal-content").length ? !0 : (o.removeClass("animated fadeInDown").addClass("animated fadeOutDown"), 
                e.removeClass("modal-opened animated fadeIn").addClass("modal-closing animated fadeOut"), 
                void setTimeout(function() {
                    t("body").removeClass("no-scroll"), e.removeClass("modal-closing animated fadeOut");
                }, 500));
            };
            e.on("click", n), e.wrapInner(o), e.append(a);
        },
        show: function() {
            var e = t(this.element), o = t(".modal-content", e);
            o.removeClass("fadeOutDown").addClass("animated fadeInDown"), e.addClass("modal-opened animated fadeIn"), 
            t("body").addClass("no-scroll");
        }
    }), t.fn[r] = function(e) {
        return this.each(function() {
            t.data(this, r) || t.data(this, r, new n(this, e));
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
            var o = t.data("loading");
            t.data("loading", t.text()).text(o), t.removeClass("loading").addClass(e ? "success" : "failure").removeAttr("disabled");
        } else {
            var a = t.data("loading");
            t.data("loading", t.text()).text(a), t.addClass("loading").attr("disabled", !0);
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
    var e = Urb.$wpadminbar && Urb.$window.outerWidth() > 600 ? Urb.$wpadminbar.outerHeight() : 0, o = Urb.$pageNavigation.outerHeight() + e, a = t("main"), n = {
        "#contact": t("#contact"),
        "#beer": t("#beer")
    };
    a.length && (n[a.attr("id")] = a), Urb.highlightCurrentSection = function() {
        t("a.active", Urb.$pageNavigation).removeClass("active");
        for (var e in n) {
            var o = n[e];
            Urb.scrollPosition > o.offset().top - .5 * Urb.$window.height() && Urb.scrollPosition < o.offset().top + o.outerHeight() - .5 * Urb.$window.height() && t('a[href*="' + e + '"]', Urb.$pageNavigation).addClass("active");
        }
    }, Urb.loadPage = function(o) {
        var a = t("main");
        if (Urb.$body.removeClass("no-scroll"), "/" === o || "" === o) {
            var n = 0, r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: n
            }, r), a.animate({
                height: 0
            }, r), void setTimeout(function() {
                a.remove();
            }, r + 250);
        }
        var i = [];
        t('a[href^="#"]').each(function() {
            var t = this.href.substring(this.href.indexOf("#"));
            i.push(t);
        });
        var s = o.replace("/", "#");
        if (-1 !== t.inArray(s, i)) {
            var n = t(o.replace("/", "#")).offset().top - e, r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: n
            }, r), a.animate({
                height: 0
            }, r), void setTimeout(function() {
                a.remove();
            }, r + 250);
        }
        var n = t(".site-posts").offset().top + t(".site-posts").outerHeight(), r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()));
        a.length > 0 || (a = t('<main class="new page row around-xs" />'), t(".site-posts").after(a)), 
        a.append('<span class="loading-text"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>').addClass("loading"), 
        setTimeout(function() {
            a.animate({
                height: 0
            }, 500);
        }, r), t("html,body").animate({
            scrollTop: n - e
        }, r), t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "getmaincontent",
                nonce: _URB.nonce,
                slug: o
            },
            dataType: "json",
            success: function(e) {
                if (e.success) {
                    var n = t(e.data);
                    a.replaceWith(n), Urb.$window.trigger("ajaxload");
                    var r = 0;
                    t(".page-header > *, .page-content > *, .page-footer > *, .post-header > *, .post-content > *, .post-footer > *", n).each(function() {
                        var e = t(this);
                        e.hide(), setTimeout(function() {
                            e.fadeIn(330);
                        }, r), r += 88;
                    }), t("#qr-code").html(".page-footer:after {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=https://" + encodeURIComponent(window.location.host + o) + ");}}");
                } else console.log(e.data);
            }
        });
    }, Urb.performHistoryNavigation = function(t) {
        t.preventDefault();
        var e = (t.state, document.location.pathname);
        Urb.loadPage(e);
    }, Urb.setupInternalLinks = function() {
        t("a").not('[href^="#"]').not(':not([href^="http://' + window.location.host + '"]):not([href^="https://' + window.location.host + '"])').not('[href$=".png"]').not('[href$=".jpg"]').not('[href$=".bmp"]').not('[href$=".gif"]').not('[href$=".jpeg"]').each(function() {
            var e = t(this);
            e.closest(t("#wpadminbar")).length > 0 || e.unbind("click").click(function(e) {
                if (window.history) {
                    e.preventDefault(), Urb.$menuToggle.toggleClass("open", !1), Urb.$mainNavigation.toggleClass("open", !1);
                    var o = t(this), a = o.attr("href").replace(window.location.protocol + "//" + window.location.host, "");
                    window.history.pushState({}, o.text(), a), Urb.loadPage(a), t("body").trigger("click");
                }
            });
        });
    }, Urb.setupExternalLinks = function() {
        t('a[href^="http"]:not([href*="' + window.location.host + '"])').attr("target", "_blank");
    }, Urb.setupFragmentAnchors = function() {
        Urb.$document.on("click", 'a[href^="#"]', function(o) {
            o.preventDefault();
            var a = t.attr(this, "href"), n = 0, r = t(a);
            return "#" !== a && 0 !== r.length ? n = r.offset().top : a = "/", t("html,body").animate({
                scrollTop: Math.ceil(n - e)
            }, Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()))), 
            !1;
        });
    }, Urb.setupPageNavigation = function() {
        Urb.$pageNavigation.find(".menu-item a").click(function() {
            var e = t(this);
            e.blur();
        }), Urb.$menuToggle = t("#menu-toggle"), Urb.$menuToggle.on("click", function() {
            var o = !1;
            Urb.scrollPosition > 0 && (Urb.scrollPosition < Urb.$window.height() / 2 ? o = 0 : Urb.scrollPosition < Urb.$window.height() && (o = Urb.$window.height())), 
            o !== !1 ? t("html,body").animate({
                scrollTop: o - e
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
                var a = t(location.hash), n = 5;
                Urb.$window.scrollTop() > a.offset().top - (o + n) && Urb.$window.scrollTop() < a.offset().top + n && Urb.$window.scrollTop(a.offset().top - o);
            } else if (location.pathname && location.pathname.match(/^\/(beer|contact)\/?$/)) {
                var a = t(location.pathname.replace(/\/$/, "").replace(/\/+/, "#")), n = 5;
                0 == Urb.$window.scrollTop() && a.length && Urb.$window.scrollTop(a.offset().top);
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
        var e = t(this), o = e.data("tooltip");
        o && (o.removeClass("active"), setTimeout(function() {
            o.hasClass("active") || (e.data("tooltip", !1), e.attr("title", e.attr("data-title")), 
            e.removeAttr("data-title"), o.remove());
        }, 1e3));
    }, Urb.positionTooltip = function(t, e) {
        var o = e.offset().top - 1.25 * t.outerHeight() < Urb.scrollPosition;
        t.toggleClass("above", !o), t.toggleClass("below", o), o ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2,
            top: e.offset().top + e.outerHeight() + .25 * t.outerHeight()
        }) : t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2,
            top: e.offset().top - 1.25 * t.outerHeight()
        });
        var a = t.offset().left < 0, n = t.offset().left + t.outerWidth() > Urb.$window.width();
        t.toggleClass("left", a), t.toggleClass("right", n), a ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 + -1 * t.offset().left
        }) : n && t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 - (t.offset().left + t.outerWidth() - Urb.$window.width())
        });
    }, Urb.showTooltip = function() {
        var e = t(this), o = e.data("tooltip"), a = e.attr("title");
        e.parents(".map-canvas") || (o ? (Urb.positionTooltip(o, e), o.addClass("active")) : (o = t("<div />"), 
        o.addClass("tooltip"), o.text(a), Urb.$body.append(o), Urb.positionTooltip(o, e), 
        e.data("tooltip", o), o.addClass("active"), e.attr("data-title", a), e.removeAttr("title")));
    }, Urb.setupTooltips = function() {
        Urb.$body.on("mouseleave", "[title], [data-title]", Urb.hideTooltip), Urb.$body.on("mouseenter", "[title], [data-title]", Urb.showTooltip);
    }, Urb.$window.on("ajaxload load", Urb.setupTooltips);
}), jQuery(function(t) {
    var e, o = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, a = (Urb.$pageNavigation.outerHeight() + o, 
    t('<button class="next"><span class="fa fa-angle-right"></span></button>')), n = t('<button class="previous"><span class="fa fa-angle-left"></span></button>'), r = t(".site-posts .latest-posts .blog-post h4");
    Urb.automaticNavigation = function() {
        Urb.showNextPost();
    }, Urb.showPreviousPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), o = e.prev(".previous.blog-post");
        0 === Urb.scrollPosition && o.length && n.trigger("click");
    }, Urb.showNextPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), o = e.next(".next.blog-post");
        0 === Urb.scrollPosition && o.length && a.trigger("click");
    }, Urb.scrollHeader = function() {
        r.each(function() {
            var e = t(this);
            e.parents(".blog-post").is(".active") && (Urb.scrollPosition > 0 && Urb.scrollPosition < Urb.$window.height() ? e.css({
                height: (100 - 25 * Urb.scrollPosition / Urb.$window.height()).toFixed(2) + "%",
                transform: "scale(" + (1 - .15 * Urb.scrollPosition / Urb.$window.height()).toFixed(3) + ")"
            }) : e.removeAttr("style"));
        });
    }, Urb.setupHeaderNavigation = function() {
        a.on("click", function(o) {
            var r = t(".site-posts .latest-posts .blog-post.active"), i = r.next(".next.blog-post"), s = t(".site-posts .latest-posts .blog-post:first-child");
            r.length ? (n.addClass("active"), r.removeClass("active").addClass("previous"), 
            i.length && (i.removeClass("previous next").addClass("active"), Urb.getNextPost()), 
            i.next(".next.blog-post").length || a.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != o.which && e && clearInterval(e);
        }), n.on("click", function(o) {
            var r = t(".site-posts .latest-posts .blog-post.active"), i = r.prev(".previous.blog-post"), s = t(".site-posts .latest-posts .blog-post:last-child");
            r.length ? (a.addClass("active"), r.removeClass("active").addClass("next"), i.length && i.removeClass("previous next").addClass("active"), 
            i.prev(".previous.blog-post").length || n.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != o.which && e && clearInterval(e);
        }), t(".site-posts .latest-posts").after(a).after(n), t(".site-posts .latest-posts .blog-post > a").on("dragstart", function() {
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
                    var o = t("<li />");
                    o.addClass("blog-post next"), o.attr("data-post-id", e.data.ID);
                    var n = t("<a />");
                    if (n.attr("href", e.data.permalink), n.on("dragstart", function() {
                        return !1;
                    }), o.append(n), e.data.thumbnail) {
                        var r = t("<span />");
                        r.addClass("blog-post-image"), e.data.image_src && r.css({
                            "background-image": "url(" + e.data.image_src + ")"
                        }), r.append(e.data.thumbnail), n.append(r);
                    }
                    if (e.data.post_title) {
                        var i = t("<h4 />");
                        i.text(e.data.post_title), n.append(i);
                    }
                    if (e.data.excerpt) {
                        var s = t("<div />");
                        s.addClass("blog-post-intro"), s.html(e.data.excerpt), o.append(s);
                    }
                    t(".site-posts .latest-posts").append(o), a.addClass("active"), Urb.startAutomaticNavigation();
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
        }).sortElements(function(e, o) {
            return t.text([ e ]) == t.text([ o ]) ? 0 : t.text([ e ]) > t.text([ o ]) ? 1 : -1;
        }, function() {
            return this.parentNode;
        }), Urb.$currentBeerDeck.find("td").filter(function() {
            return t(this).index() === e.index();
        }).sortElements(function(e, o) {
            return t.text([ e ]) == t.text([ o ]) ? 0 : t.text([ e ]) > t.text([ o ]) ? 1 : -1;
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
    var e = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, o = Urb.$pageNavigation.outerHeight() + e;
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
        var e = new Date(), o = e.getDay() + 1;
        t("dt:nth-of-type(" + o + "), dd:nth-of-type(" + o + ")", Urb.$businesHours).addClass("today"), 
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
            var o = new google.maps.Map(Urb.$mapCanvas.get(0), e), a = new google.maps.Marker({
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
                map: o,
                position: e.center
            }), n = new google.maps.InfoWindow({
                content: Urb.$address.html()
            });
            Urb.$map.data("map", o), Urb.$map.data("marker", a), Urb.$map.data("infoWindow", n), 
            google.maps.event.addListener(a, "click", function() {
                n.open(o, a);
            }), n.open(o, a);
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
            var e = (Urb.$window.outerHeight() - o - t("h3", Urb.$map).outerHeight()).toFixed(0);
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
        var e = t(".rating-actions"), o = t(this);
        return e.addClass("rated"), o.addClass("rated"), o.prevAll(".rate-button").addClass("rated"), 
        o.nextAll(".rate-button").removeClass("rated"), t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "post-rate",
                nonce: _URB.nonce,
                post_rating: o.val(),
                post_id: o.data("id")
            },
            dataType: "json",
            success: function(t) {
                t.success ? Urb.$aggregateRating.attr("data-user-rating", o.val()) : console.log(t);
            }
        }), Urb.shareRating(o.val()), !1;
    }, Urb.setupRatingPoll = function() {
        Urb.$aggregateRating = t('[itemprop="aggregateRating"]'), Urb.$beerCheckinModal = t(".modal.checkin-modal");
        var e = t('<div class="rating-actions" />');
        Number(Urb.$aggregateRating.data("user-rating")) > 0 && e.addClass("rated");
        for (var o = 1; 5 >= o; o++) {
            var a = t('<button class="rate-button" />');
            a.val(o), a.data("id", Urb.$aggregateRating.data("beer-id")), a.text(1 === o ? "1 Star" : o + " Stars"), 
            a.toggleClass("rated", o <= Number(Urb.$aggregateRating.data("user-rating"))), e.append(a), 
            a.on("click", Urb.rateBeer);
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
                var o = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), a = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), n = o * a;
                if (e.response.beer) {
                    var r = e.response.beer.rating_score, i = e.response.beer.rating_count, s = r * i, l = n + s, c = a + i, d = l / c;
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
                var o = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), a = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), n = o * a;
                if (e) {
                    var r = Number(e.rating_value) / Number(e.best_rating) * 5, i = Number(e.review_count), s = r * i, l = n + s, c = a + i, d = l / c;
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
                var o = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), a = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), n = o * a;
                if (e) {
                    var r = Number(e.rating_value) / Number(e.best_rating) * 5, i = Number(e.review_count), s = r * i, l = n + s, c = a + i, d = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", d.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(d.toFixed(1)), 
                    t('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        });
    }, Urb.shareRating = function(e) {
        var o = t(".message", Urb.$beerCheckinModal);
        0 == o.length && (o = t('<div class="message" />'), t(".modal-content", Urb.$beerCheckinModal).prepend(o));
        var a = "Thanks.";
        switch (Number(e)) {
          case 5:
            a = "Wow, Thank You!";
            break;

          case 4:
            a = "Glad You Enjoyed It!";
            break;

          case 3:
            a = "Thanks!";
            break;

          case 2:
            a = "Thank you.";
            break;

          case 1:
            a = "We can do better.";
        }
        o.text(a), Urb.showModal(".modal.checkin-modal");
    }, Urb.$window.on("ajaxload load", Urb.setupRatingPoll);
}), jQuery(function(t) {}), jQuery(function(t) {}), jQuery(function(t) {}), jQuery(function(t) {
    Urb.scrollSharing = function() {
        t("main").each(function() {
            var e = t(this);
            Urb.scrollPosition + Urb.$window.height() > e.offset().top + 1.5 * Urb.$pageNavigation.outerHeight() && Urb.scrollPosition + Urb.$window.height() < e.offset().top + e.outerHeight() ? e.find(".page-share, .post-share").addClass("visible") : e.find(".page-share, .post-share").removeClass("visible");
        });
    }, Urb.setupSharing = function() {
        var e = t("main");
        e.length > 0 && t(".page-share, .post-share", e).addClass("visible").bind("click", function() {
            t(".modal.share-modal .shortlink", e).focus().select();
        });
    }, Urb.$window.on("ajaxload load scroll", Urb.scrollSharing), Urb.$window.on("ajaxload load", function() {
        setTimeout(Urb.setupSharing, 500);
    });
}), jQuery(function(t) {}), jQuery(function(t) {
    Urb.setupGallery = function() {
        t(".gallery .gallery-icon a").magnificPopup({
            type: "image",
            autoFocusLast: !1,
            mainClass: "mfp-with-zoom",
            zoom: {
                enabled: !0,
                duration: 200,
                easing: "ease-in-out",
                opener: function(t) {
                    return t.is("img") ? t : t.find("img");
                }
            }
        });
    }, Urb.$window.on("ajaxload load", Urb.setupGallery);
}), function(t, e, o, a, n, r, i) {
    t.GoogleAnalyticsObject = n, t[n] = t[n] || function() {
        (t[n].q = t[n].q || []).push(arguments);
    }, t[n].l = 1 * new Date(), r = e.createElement(o), i = e.getElementsByTagName(o)[0], 
    r.async = 1, r.src = a, i.parentNode.insertBefore(r, i);
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), 
ga("create", "UA-54926068-6", "auto"), ga("require", "linkid", "linkid.js"), ga("set", "anonymizeIp", !0), 
ga("send", "pageview");
//# sourceMappingURL=script.js.map
