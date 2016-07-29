!function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(t) {
    var e, a, o, n, r, i, s = "Close", l = "BeforeClose", c = "AfterClose", d = "BeforeAppend", p = "MarkupParse", u = "Open", m = "Change", g = "mfp", f = "." + g, b = "mfp-ready", h = "mfp-removing", v = "mfp-prevent-close", U = function() {}, w = !!window.jQuery, C = t(window), $ = function(t, a) {
        e.ev.on(g + t + f, a);
    }, y = function(e, a, o, n) {
        var r = document.createElement("div");
        return r.className = "mfp-" + e, o && (r.innerHTML = o), n ? a && a.appendChild(r) : (r = t(r), 
        a && r.appendTo(a)), r;
    }, x = function(a, o) {
        e.ev.triggerHandler(g + a, o), e.st.callbacks && (a = a.charAt(0).toLowerCase() + a.slice(1), 
        e.st.callbacks[a] && e.st.callbacks[a].apply(e, t.isArray(o) ? o : [ o ]));
    }, T = function(a) {
        return a === i && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), 
        i = a), e.currTemplate.closeBtn;
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
            var a = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(a), 
            e.isIOS = /iphone|ipad|ipod/gi.test(a), e.supportsTransition = I(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), 
            o = t(document), e.popupsCache = {};
        },
        open: function(a) {
            var n;
            if (a.isObj === !1) {
                e.items = a.items.toArray(), e.index = 0;
                var i, s = a.items;
                for (n = 0; n < s.length; n++) if (i = s[n], i.parsed && (i = i.el[0]), i === a.el[0]) {
                    e.index = n;
                    break;
                }
            } else e.items = t.isArray(a.items) ? a.items : [ a.items ], e.index = a.index || 0;
            if (e.isOpen) return void e.updateItemHTML();
            e.types = [], r = "", a.mainEl && a.mainEl.length ? e.ev = a.mainEl.eq(0) : e.ev = o, 
            a.key ? (e.popupsCache[a.key] || (e.popupsCache[a.key] = {}), e.currTemplate = e.popupsCache[a.key]) : e.currTemplate = {}, 
            e.st = t.extend(!0, {}, t.magnificPopup.defaults, a), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, 
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
            x("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? ($(p, function(t, e, a, o) {
                a.close_replaceWith = T(o.type);
            }), r += " mfp-close-btn-in") : e.wrap.append(T())), e.st.alignTop && (r += " mfp-align-top"), 
            e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: C.scrollTop(),
                position: "absolute"
            }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), e.st.enableEscapeKey && o.on("keyup" + f, function(t) {
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
                e.content ? (e._addClassToMFP(b), e._setFocus()) : e.bgOverlay.addClass(b), o.on("focusin" + f, e._onFocusIn);
            }, 16), e.isOpen = !0, e.updateSize(d), x(u), a;
        },
        close: function() {
            e.isOpen && (x(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(h), 
            setTimeout(function() {
                e._close();
            }, e.st.removalDelay)) : e._close());
        },
        _close: function() {
            x(s);
            var a = h + " " + b + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (a += e.st.mainClass + " "), 
            e._removeClassFromMFP(a), e.fixedContentPos) {
                var n = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n);
            }
            o.off("keyup" + f + " focusin" + f), e.ev.off(f), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), 
            e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), 
            !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), 
            e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, 
            e.content = null, e.currTemplate = null, e.prevHeight = 0, x(c);
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var a = document.documentElement.clientWidth / window.innerWidth, o = window.innerHeight * a;
                e.wrap.css("height", o), e.wH = o;
            } else e.wH = t || C.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize");
        },
        updateItemHTML: function() {
            var a = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), a.parsed || (a = e.parseEl(e.index));
            var o = a.type;
            if (x("BeforeChange", [ e.currItem ? e.currItem.type : "", o ]), e.currItem = a, 
            !e.currTemplate[o]) {
                var r = e.st[o] ? e.st[o].markup : !1;
                x("FirstMarkupParse", r), r ? e.currTemplate[o] = t(r) : e.currTemplate[o] = !0;
            }
            n && n !== a.type && e.container.removeClass("mfp-" + n + "-holder");
            var i = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](a, e.currTemplate[o]);
            e.appendContent(i, o), a.preloaded = !0, x(m, a), n = a.type, e.container.prepend(e.contentContainer), 
            x("AfterChange");
        },
        appendContent: function(t, a) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[a] === !0 ? e.content.find(".mfp-close").length || e.content.append(T()) : e.content = t : e.content = "", 
            x(d), e.container.addClass("mfp-" + a + "-holder"), e.contentContainer.append(e.content);
        },
        parseEl: function(a) {
            var o, n = e.items[a];
            if (n.tagName ? n = {
                el: t(n)
            } : (o = n.type, n = {
                data: n,
                src: n.src
            }), n.el) {
                for (var r = e.types, i = 0; i < r.length; i++) if (n.el.hasClass("mfp-" + r[i])) {
                    o = r[i];
                    break;
                }
                n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"));
            }
            return n.type = o || e.st.type || "inline", n.index = a, n.parsed = !0, e.items[a] = n, 
            x("ElementParse", n), e.items[a];
        },
        addGroup: function(t, a) {
            var o = function(o) {
                o.mfpEl = this, e._openClick(o, t, a);
            };
            a || (a = {});
            var n = "click.magnificPopup";
            a.mainEl = t, a.items ? (a.isObj = !0, t.off(n).on(n, o)) : (a.isObj = !1, a.delegate ? t.off(n).on(n, a.delegate, o) : (a.items = t, 
            t.off(n).on(n, o)));
        },
        _openClick: function(a, o, n) {
            var r = void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick;
            if (r || !(2 === a.which || a.ctrlKey || a.metaKey || a.altKey || a.shiftKey)) {
                var i = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                if (i) if (t.isFunction(i)) {
                    if (!i.call(e)) return !0;
                } else if (C.width() < i) return !0;
                a.type && (a.preventDefault(), e.isOpen && a.stopPropagation()), n.el = t(a.mfpEl), 
                n.delegate && (n.items = o.find(n.delegate)), e.open(n);
            }
        },
        updateStatus: function(t, o) {
            if (e.preloader) {
                a !== t && e.container.removeClass("mfp-s-" + a), o || "loading" !== t || (o = e.st.tLoading);
                var n = {
                    status: t,
                    text: o
                };
                x("UpdateStatus", n), t = n.status, o = n.text, e.preloader.html(o), e.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation();
                }), e.container.addClass("mfp-s-" + t), a = t;
            }
        },
        _checkIfClose: function(a) {
            if (!t(a).hasClass(v)) {
                var o = e.st.closeOnContentClick, n = e.st.closeOnBgClick;
                if (o && n) return !0;
                if (!e.content || t(a).hasClass("mfp-close") || e.preloader && a === e.preloader[0]) return !0;
                if (a === e.content[0] || t.contains(e.content[0], a)) {
                    if (o) return !0;
                } else if (n && t.contains(document, a)) return !0;
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
            return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || C.height());
        },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
        },
        _onFocusIn: function(a) {
            return a.target === e.wrap[0] || t.contains(e.wrap[0], a.target) ? void 0 : (e._setFocus(), 
            !1);
        },
        _parseMarkup: function(e, a, o) {
            var n;
            o.data && (a = t.extend(o.data, a)), x(p, [ e, a, o ]), t.each(a, function(a, o) {
                if (void 0 === o || o === !1) return !0;
                if (n = a.split("_"), n.length > 1) {
                    var r = e.find(f + "-" + n[0]);
                    if (r.length > 0) {
                        var i = n[1];
                        "replaceWith" === i ? r[0] !== o[0] && r.replaceWith(o) : "img" === i ? r.is("img") ? r.attr("src", o) : r.replaceWith(t("<img>").attr("src", o).attr("class", r.attr("class"))) : r.attr(n[1], o);
                    }
                } else e.find(f + "-" + a).html(o);
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
        open: function(e, a) {
            return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = a || 0, this.instance.open(e);
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function(e, a) {
            a.options && (t.magnificPopup.defaults[e] = a.options), t.extend(this.proto, a.proto), 
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
    }, t.fn.magnificPopup = function(a) {
        k();
        var o = t(this);
        if ("string" == typeof a) if ("open" === a) {
            var n, r = w ? o.data("magnificPopup") : o[0].magnificPopup, i = parseInt(arguments[1], 10) || 0;
            r.items ? n = r.items[i] : (n = o, r.delegate && (n = n.find(r.delegate)), n = n.eq(i)), 
            e._openClick({
                mfpEl: n
            }, o, r);
        } else e.isOpen && e[a].apply(e, Array.prototype.slice.call(arguments, 1)); else a = t.extend(!0, {}, a), 
        w ? o.data("magnificPopup", a) : o[0].magnificPopup = a, e.addGroup(o, a);
        return o;
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
            getInline: function(a, o) {
                if (M(), a.src) {
                    var n = e.st.inline, r = t(a.src);
                    if (r.length) {
                        var i = r[0].parentNode;
                        i && i.tagName && (S || (P = n.hiddenClass, S = y(P), P = "mfp-" + P), _ = r.after(S).detach().removeClass(P)), 
                        e.updateStatus("ready");
                    } else e.updateStatus("error", n.tNotFound), r = t("<div>");
                    return a.inlineElement = r, r;
                }
                return e.updateStatus("ready"), e._parseMarkup(o, {}, a), o;
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
            getAjax: function(a) {
                F && t(document.body).addClass(F), e.updateStatus("loading");
                var o = t.extend({
                    url: a.src,
                    success: function(o, n, r) {
                        var i = {
                            data: o,
                            xhr: r
                        };
                        x("ParseAjax", i), e.appendContent(t(i.data), j), a.finished = !0, E(), e._setFocus(), 
                        setTimeout(function() {
                            e.wrap.addClass(b);
                        }, 16), e.updateStatus("ready"), x("AjaxContentAdded");
                    },
                    error: function() {
                        E(), a.finished = a.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", a.src));
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(o), "";
            }
        }
    });
    var z, O = function(a) {
        if (a.data && void 0 !== a.data.title) return a.data.title;
        var o = e.st.image.titleSrc;
        if (o) {
            if (t.isFunction(o)) return o.call(e, a);
            if (a.el) return a.el.attr(o) || "";
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
                var a = e.st.image, o = ".image";
                e.types.push("image"), $(u + o, function() {
                    "image" === e.currItem.type && a.cursor && t(document.body).addClass(a.cursor);
                }), $(s + o, function() {
                    a.cursor && t(document.body).removeClass(a.cursor), C.off("resize" + f);
                }), $("Resize" + o, e.resizeImage), e.isLowIE && $("AfterChange", e.resizeImage);
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var a = 0;
                    e.isLowIE && (a = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), 
                    t.img.css("max-height", e.wH - a);
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, z && clearInterval(z), t.isCheckingImgSize = !1, x("ImageHasSize", t), 
                t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1));
            },
            findImageSize: function(t) {
                var a = 0, o = t.img[0], n = function(r) {
                    z && clearInterval(z), z = setInterval(function() {
                        return o.naturalWidth > 0 ? void e._onImageHasSize(t) : (a > 200 && clearInterval(z), 
                        a++, void (3 === a ? n(10) : 40 === a ? n(50) : 100 === a && n(500)));
                    }, r);
                };
                n(1);
            },
            getImage: function(a, o) {
                var n = 0, r = function() {
                    a && (a.img[0].complete ? (a.img.off(".mfploader"), a === e.currItem && (e._onImageHasSize(a), 
                    e.updateStatus("ready")), a.hasSize = !0, a.loaded = !0, x("ImageLoadComplete")) : (n++, 
                    200 > n ? setTimeout(r, 100) : i()));
                }, i = function() {
                    a && (a.img.off(".mfploader"), a === e.currItem && (e._onImageHasSize(a), e.updateStatus("error", s.tError.replace("%url%", a.src))), 
                    a.hasSize = !0, a.loaded = !0, a.loadError = !0);
                }, s = e.st.image, l = o.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", a.el && a.el.find("img").length && (c.alt = a.el.find("img").attr("alt")), 
                    a.img = t(c).on("load.mfploader", r).on("error.mfploader", i), c.src = a.src, l.is("img") && (a.img = a.img.clone()), 
                    c = a.img[0], c.naturalWidth > 0 ? a.hasSize = !0 : c.width || (a.hasSize = !1);
                }
                return e._parseMarkup(o, {
                    title: O(a),
                    img_replaceWith: a.img
                }, a), e.resizeImage(), a.hasSize ? (z && clearInterval(z), a.loadError ? (o.addClass("mfp-loading"), 
                e.updateStatus("error", s.tError.replace("%url%", a.src))) : (o.removeClass("mfp-loading"), 
                e.updateStatus("ready")), o) : (e.updateStatus("loading"), a.loading = !0, a.hasSize || (a.imgHidden = !0, 
                o.addClass("mfp-loading"), e.findImageSize(a)), o);
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
                var t, a = e.st.zoom, o = ".zoom";
                if (a.enabled && e.supportsTransition) {
                    var n, r, i = a.duration, c = function(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), o = "all " + a.duration / 1e3 + "s " + a.easing, n = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, r = "transition";
                        return n["-webkit-" + r] = n["-moz-" + r] = n["-o-" + r] = n[r] = o, e.css(n), e;
                    }, d = function() {
                        e.content.css("visibility", "visible");
                    };
                    $("BuildControls" + o, function() {
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
                    }), $(l + o, function() {
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
                    }), $(s + o, function() {
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
            _getOffset: function(a) {
                var o;
                o = a ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var n = o.offset(), r = parseInt(o.css("padding-top"), 10), i = parseInt(o.css("padding-bottom"), 10);
                n.top -= t(window).scrollTop() - r;
                var s = {
                    width: o.width(),
                    height: (w ? o.innerHeight() : o[0].offsetHeight) - i - r
                };
                return A() ? s["-moz-transform"] = s.transform = "translate(" + n.left + "px," + n.top + "px)" : (s.left = n.left, 
                s.top = n.top), s;
            }
        }
    });
    var R = "iframe", L = "//about:blank", W = function(t) {
        if (e.currTemplate[R]) {
            var a = e.currTemplate[R].find("iframe");
            a.length && (t || (a[0].src = L), e.isIE8 && a.css("display", t ? "block" : "none"));
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
                e.types.push(R), $("BeforeChange", function(t, e, a) {
                    e !== a && (e === R ? W() : a === R && W(!0));
                }), $(s + "." + R, function() {
                    W();
                });
            },
            getIframe: function(a, o) {
                var n = a.src, r = e.st.iframe;
                t.each(r.patterns, function() {
                    return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), 
                    n = this.src.replace("%id%", n), !1) : void 0;
                });
                var i = {};
                return r.srcAction && (i[r.srcAction] = n), e._parseMarkup(o, i, a), e.updateStatus("ready"), 
                o;
            }
        }
    });
    var D = function(t) {
        var a = e.items.length;
        return t > a - 1 ? t - a : 0 > t ? a + t : t;
    }, Q = function(t, e, a) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, a);
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
                var a = e.st.gallery, n = ".mfp-gallery";
                return e.direction = !0, a && a.enabled ? (r += " mfp-gallery", $(u + n, function() {
                    a.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                        return e.items.length > 1 ? (e.next(), !1) : void 0;
                    }), o.on("keydown" + n, function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                    });
                }), $("UpdateStatus" + n, function(t, a) {
                    a.text && (a.text = Q(a.text, e.currItem.index, e.items.length));
                }), $(p + n, function(t, o, n, r) {
                    var i = e.items.length;
                    n.counter = i > 1 ? Q(a.tCounter, r.index, i) : "";
                }), $("BuildControls" + n, function() {
                    if (e.items.length > 1 && a.arrows && !e.arrowLeft) {
                        var o = a.arrowMarkup, n = e.arrowLeft = t(o.replace(/%title%/gi, a.tPrev).replace(/%dir%/gi, "left")).addClass(v), r = e.arrowRight = t(o.replace(/%title%/gi, a.tNext).replace(/%dir%/gi, "right")).addClass(v);
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
                    o.off(n), e.wrap.off("click" + n), e.arrowRight = e.arrowLeft = null;
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
                var t, a = e.st.gallery.preload, o = Math.min(a[0], e.items.length), n = Math.min(a[1], e.items.length);
                for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index - t);
            },
            _preloadItem: function(a) {
                if (a = D(a), !e.items[a].preloaded) {
                    var o = e.items[a];
                    o.parsed || (o = e.parseEl(a)), x("LazyLoad", o), "image" === o.type && (o.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                        o.hasSize = !0;
                    }).on("error.mfploader", function() {
                        o.hasSize = !0, o.loadError = !0, x("LazyLoadError", o);
                    }).attr("src", o.src)), o.preloaded = !0;
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
                    var t = e.st.retina, a = t.ratio;
                    a = isNaN(a) ? a() : a, a > 1 && ($("ImageHasSize." + q, function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / a,
                            width: "100%"
                        });
                    }), $("ElementParse." + q, function(e, o) {
                        o.src = t.replaceSrc(o, a);
                    }));
                }
            }
        }
    }), k();
}), jQuery.fn.sortElements = function() {
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
    function n(e, a) {
        this.element = e, this.settings = t.extend({}, i, a), this._defaults = i, this._name = r, 
        this.init();
    }
    var r = "urbModal", i = {};
    t.extend(n.prototype, {
        init: function() {
            var e = t(this.element).addClass("modal-shade"), a = t('<div class="modal-content" />'), o = t('<button class="modal-close" type="button" />'), n = function(o) {
                var n = t(o.target);
                return n.is(".modal-content") || n.closest(".modal-content").length ? !0 : (a.removeClass("animated fadeInDown").addClass("animated fadeOutDown"), 
                e.removeClass("modal-opened animated fadeIn").addClass("modal-closing animated fadeOut"), 
                void setTimeout(function() {
                    t("body").removeClass("no-scroll"), e.removeClass("modal-closing animated fadeOut");
                }, 500));
            };
            e.on("click", n), e.wrapInner(a), e.append(o);
        },
        show: function() {
            var e = t(this.element), a = t(".modal-content", e);
            a.removeClass("fadeOutDown").addClass("animated fadeInDown"), e.addClass("modal-opened animated fadeIn"), 
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
    var e = Urb.$wpadminbar && Urb.$window.outerWidth() > 600 ? Urb.$wpadminbar.outerHeight() : 0, a = Urb.$pageNavigation.outerHeight() + e, o = t("main"), n = {
        "#contact": t("#contact"),
        "#beer": t("#beer")
    };
    o.length && (n[o.attr("id")] = o), Urb.highlightCurrentSection = function() {
        t("a.active", Urb.$pageNavigation).removeClass("active");
        for (var e in n) {
            var a = n[e];
            Urb.scrollPosition > a.offset().top - .5 * Urb.$window.height() && Urb.scrollPosition < a.offset().top + a.outerHeight() - .5 * Urb.$window.height() && t('a[href*="' + e + '"]', Urb.$pageNavigation).addClass("active");
        }
    }, Urb.loadPage = function(a) {
        var o = t("main");
        if (Urb.$body.removeClass("no-scroll"), "/" === a || "" === a) {
            var n = 0, r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: n
            }, r), o.animate({
                height: 0
            }, r), void setTimeout(function() {
                o.remove();
            }, r + 250);
        }
        var i = [];
        t('a[href^="#"]').each(function() {
            var t = this.href.substring(this.href.indexOf("#"));
            i.push(t);
        });
        var s = a.replace("/", "#");
        if (-1 !== t.inArray(s, i)) {
            var n = t(a.replace("/", "#")).offset().top - e, r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: n
            }, r), o.animate({
                height: 0
            }, r), void setTimeout(function() {
                o.remove();
            }, r + 250);
        }
        var n = t(".site-posts").offset().top + t(".site-posts").outerHeight(), r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()));
        o.length > 0 || (o = t('<main class="new page row around-xs" />'), t(".site-posts").after(o)), 
        o.append('<span class="loading-text"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>').addClass("loading"), 
        setTimeout(function() {
            o.animate({
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
                slug: a
            },
            dataType: "json",
            success: function(e) {
                if (e.success) {
                    var n = t(e.data);
                    o.replaceWith(n), Urb.$window.trigger("ajaxload");
                    var r = 0;
                    t(".page-header > *, .page-content > *, .page-footer > *, .post-header > *, .post-content > *, .post-footer > *", n).each(function() {
                        var e = t(this);
                        e.hide(), setTimeout(function() {
                            e.fadeIn(330);
                        }, r), r += 88;
                    }), t("#qr-code").html(".page-footer:after {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=https://" + encodeURIComponent(window.location.host + a) + ");}}");
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
            var o = t.attr(this, "href"), n = 0, r = t(o);
            return "#" !== o && 0 !== r.length ? n = r.offset().top : o = "/", t("html,body").animate({
                scrollTop: Math.ceil(n - e)
            }, Math.round(500 * (Math.abs(Urb.$window.scrollTop() - n) / Urb.$window.height()))), 
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
                var o = t(location.hash), n = 5;
                Urb.$window.scrollTop() > o.offset().top - (a + n) && Urb.$window.scrollTop() < o.offset().top + n && Urb.$window.scrollTop(o.offset().top - a);
            } else if (location.pathname && location.pathname.match(/^\/(beer|contact)\/?$/)) {
                var o = t(location.pathname.replace(/\/$/, "").replace(/\/+/, "#")), n = 5;
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
        var o = t.offset().left < 0, n = t.offset().left + t.outerWidth() > Urb.$window.width();
        t.toggleClass("left", o), t.toggleClass("right", n), o ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 + -1 * t.offset().left
        }) : n && t.css({
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
    t('<button class="next"><span class="fa fa-angle-right"></span></button>')), n = t('<button class="previous"><span class="fa fa-angle-left"></span></button>'), r = t(".site-posts .latest-posts .blog-post h4");
    Urb.automaticNavigation = function() {
        Urb.showNextPost();
    }, Urb.showPreviousPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), a = e.prev(".previous.blog-post");
        0 === Urb.scrollPosition && a.length && n.trigger("click");
    }, Urb.showNextPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), a = e.next(".next.blog-post");
        0 === Urb.scrollPosition && a.length && o.trigger("click");
    }, Urb.scrollHeader = function() {
        r.each(function() {
            var e = t(this);
            e.parents(".blog-post").is(".active") && (Urb.scrollPosition > 0 && Urb.scrollPosition < Urb.$window.height() ? e.css({
                height: (100 - 25 * Urb.scrollPosition / Urb.$window.height()).toFixed(2) + "%",
                transform: "scale(" + (1 - .15 * Urb.scrollPosition / Urb.$window.height()).toFixed(3) + ")"
            }) : e.removeAttr("style"));
        });
    }, Urb.setupHeaderNavigation = function() {
        o.on("click", function(a) {
            var r = t(".site-posts .latest-posts .blog-post.active"), i = r.next(".next.blog-post"), s = t(".site-posts .latest-posts .blog-post:first-child");
            r.length ? (n.addClass("active"), r.removeClass("active").addClass("previous"), 
            i.length && (i.removeClass("previous next").addClass("active"), Urb.getNextPost()), 
            i.next(".next.blog-post").length || o.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != a.which && e && clearInterval(e);
        }), n.on("click", function(a) {
            var r = t(".site-posts .latest-posts .blog-post.active"), i = r.prev(".previous.blog-post"), s = t(".site-posts .latest-posts .blog-post:last-child");
            r.length ? (o.addClass("active"), r.removeClass("active").addClass("next"), i.length && i.removeClass("previous next").addClass("active"), 
            i.prev(".previous.blog-post").length || n.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != a.which && e && clearInterval(e);
        }), t(".site-posts .latest-posts").after(o).after(n), t(".site-posts .latest-posts .blog-post > a").on("dragstart", function() {
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
                    var n = t("<a />");
                    if (n.attr("href", e.data.permalink), n.on("dragstart", function() {
                        return !1;
                    }), a.append(n), e.data.thumbnail) {
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
            }), n = new google.maps.InfoWindow({
                content: Urb.$address.html()
            });
            Urb.$map.data("map", a), Urb.$map.data("marker", o), Urb.$map.data("infoWindow", n), 
            google.maps.event.addListener(o, "click", function() {
                n.open(a, o);
            }), n.open(a, o);
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
                var a = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), o = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), n = a * o;
                if (e.response.beer) {
                    var r = e.response.beer.rating_score, i = e.response.beer.rating_count, s = r * i, l = n + s, c = o + i, d = l / c;
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
                var a = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), o = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), n = a * o;
                if (e) {
                    var r = Number(e.rating_value) / Number(e.best_rating) * 5, i = Number(e.review_count), s = r * i, l = n + s, c = o + i, d = l / c;
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
                var a = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), o = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), n = a * o;
                if (e) {
                    var r = Number(e.rating_value) / Number(e.best_rating) * 5, i = Number(e.review_count), s = r * i, l = n + s, c = o + i, d = l / c;
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
jQuery(function(t) {
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
}), function(t, e, a, o, n, r, i) {
    t.GoogleAnalyticsObject = n, t[n] = t[n] || function() {
        (t[n].q = t[n].q || []).push(arguments);
    }, t[n].l = 1 * new Date(), r = e.createElement(a), i = e.getElementsByTagName(a)[0], 
    r.async = 1, r.src = o, i.parentNode.insertBefore(r, i);
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), 
ga("create", "UA-54926068-6", "auto"), ga("require", "linkid", "linkid.js"), ga("set", "anonymizeIp", !0), 
ga("send", "pageview");
//# sourceMappingURL=script.js.map
