!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length, n = J.type(e);
        return "function" !== n && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e));
    }
    function r(e, t, n) {
        if (J.isFunction(t)) return J.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return J.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (se.test(t)) return J.filter(t, e, n);
            t = J.filter(t, e);
        }
        return J.grep(e, function(e) {
            return V.call(t, e) >= 0 !== n;
        });
    }
    function o(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function i(e) {
        var t = he[e] = {};
        return J.each(e.match(fe) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function a() {
        K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), 
        J.ready();
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = J.expando + s.uid++;
    }
    function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(we, "-$1").toLowerCase(), 
        n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? J.parseJSON(n) : n);
            } catch (o) {}
            be.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function c() {
        return !0;
    }
    function u() {
        return !1;
    }
    function d() {
        try {
            return K.activeElement;
        } catch (e) {}
    }
    function p(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function h(e) {
        var t = De.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"));
    }
    function m(e, t) {
        var n, r, o, i, a, s, l, c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (i = ve.access(e), a = ve.set(t, i), c = i.events)) {
                delete a.handle, a.events = {};
                for (o in c) for (n = 0, r = c[o].length; r > n; n++) J.event.add(t, o, c[o][n]);
            }
            be.hasData(e) && (s = be.access(e), l = J.extend({}, s), be.set(t, l));
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([ e ], n) : n;
    }
    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    function y(t, n) {
        var r, o = J(n.createElement(t)).appendTo(n.body), i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : J.css(o[0], "display");
        return o.detach(), i;
    }
    function w(e) {
        var t = K, n = Fe[e];
        return n || (n = y(e, t), "none" !== n && n || (Me = (Me || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), 
        t = Me[0].contentDocument, t.write(), t.close(), n = y(e, t), Me.detach()), Fe[e] = n), 
        n;
    }
    function x(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || Be(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)), 
        qe.test(a) && Re.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, 
        a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a;
    }
    function U(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Qe.length; o--; ) if (t = Qe[o] + n, 
        t in e) return t;
        return r;
    }
    function T(e, t, n) {
        var r = We.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function k(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += J.css(e, n + Ue[i], !0, o)), 
        r ? ("content" === n && (a -= J.css(e, "padding" + Ue[i], !0, o)), "margin" !== n && (a -= J.css(e, "border" + Ue[i] + "Width", !0, o))) : (a += J.css(e, "padding" + Ue[i], !0, o), 
        "padding" !== n && (a += J.css(e, "border" + Ue[i] + "Width", !0, o)));
        return a;
    }
    function $(e, t, n) {
        var r = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = Be(e), a = "border-box" === J.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = x(e, t, i), (0 > o || null == o) && (o = e.style[t]), qe.test(o)) return o;
            r = a && (Y.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0;
        }
        return o + k(e, t, n || (a ? "border" : "content"), r, i) + "px";
    }
    function N(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ve.get(r, "olddisplay"), 
        n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (i[a] = ve.access(r, "olddisplay", w(r.nodeName)))) : (o = Ce(r), 
        "none" === n && o || ve.set(r, "olddisplay", o ? n : J.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e;
    }
    function S(e, t, n, r, o) {
        return new S.prototype.init(e, t, n, r, o);
    }
    function E() {
        return setTimeout(function() {
            Ye = void 0;
        }), Ye = J.now();
    }
    function j(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ue[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }
    function A(e, t, n) {
        for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, a = o.length; a > i; i++) if (r = o[i].call(n, t, e)) return r;
    }
    function P(e, t, n) {
        var r, o, i, a, s, l, c, u, d = this, p = {}, f = e.style, h = e.nodeType && Ce(e), g = ve.get(e, "fxshow");
        n.queue || (s = J._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || l();
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, J.queue(e, "fx").length || s.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        c = J.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || w(e.nodeName) : c, 
        "inline" === u && "none" === J.css(e, "float") && (f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (r in t) if (o = t[r], Ze.exec(o)) {
            if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                if ("show" !== o || !g || void 0 === g[r]) continue;
                h = !0;
            }
            p[r] = g && g[r] || J.style(e, r);
        } else c = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === c ? w(e.nodeName) : c) && (f.display = c); else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), i && (g.hidden = !h), 
            h ? J(e).show() : d.done(function() {
                J(e).hide();
            }), d.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) J.style(e, t, p[t]);
            });
            for (r in p) a = A(h ? g[r] : 0, r, d), r in g || (g[r] = a.start, h && (a.end = a.start, 
            a.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function _(e, t) {
        var n, r, o, i, a;
        for (n in e) if (r = J.camelCase(n), o = t[r], i = e[n], J.isArray(i) && (o = i[1], 
        i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = J.cssHooks[r], a && "expand" in a) {
            i = a.expand(i), delete e[r];
            for (n in i) n in e || (e[n] = i[n], t[n] = o);
        } else t[r] = o;
    }
    function I(e, t, n) {
        var r, o, i = 0, a = tt.length, s = J.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (o) return !1;
            for (var t = Ye || E(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(i);
            return s.notifyWith(e, [ c, i, n ]), 1 > i && l ? n : (s.resolveWith(e, [ c ]), 
            !1);
        }, c = s.promise({
            elem: e,
            props: J.extend({}, t),
            opts: J.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ye || E(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; r > n; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [ c, t ]) : s.rejectWith(e, [ c, t ]), this;
            }
        }), u = c.props;
        for (_(u, c.opts.specialEasing); a > i; i++) if (r = tt[i].call(c, e, u, c.opts)) return r;
        return J.map(u, A, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0, i = t.toLowerCase().match(fe) || [];
            if (J.isFunction(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function D(e, t, n, r) {
        function o(s) {
            var l;
            return i[s] = !0, J.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || i[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), 
                o(c), !1);
            }), l;
        }
        var i = {}, a = e === yt;
        return o(t.dataTypes[0]) || !i["*"] && o("*");
    }
    function H(e, t) {
        var n, r, o = J.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && J.extend(!0, e, r), e;
    }
    function O(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (o in s) if (s[o] && s[o].test(r)) {
            l.unshift(o);
            break;
        }
        if (l[0] in n) i = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    i = o;
                    break;
                }
                a || (a = o);
            }
            i = i || a;
        }
        return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0;
    }
    function M(e, t, n, r) {
        var o, i, a, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (i = u.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ("*" === i) i = l; else if ("*" !== l && l !== i) {
            if (a = c[l + " " + i] || c["* " + i], !a) for (o in c) if (s = o.split(" "), s[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[o] : c[o] !== !0 && (i = s[0], u.unshift(s[1]));
                break;
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (d) {
                return {
                    state: "parsererror",
                    error: a ? d : "No conversion from " + l + " to " + i
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function F(e, t, n, r) {
        var o;
        if (J.isArray(t)) J.each(t, function(t, o) {
            n || Tt.test(e) ? r(e, o) : F(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r);
        }); else if (n || "object" !== J.type(t)) r(e, t); else for (o in t) F(e + "[" + o + "]", t[o], n, r);
    }
    function R(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var q = [], B = q.slice, z = q.concat, W = q.push, V = q.indexOf, G = {}, X = G.toString, Q = G.hasOwnProperty, Y = {}, K = e.document, Z = "2.1.4", J = function(e, t) {
        return new J.fn.init(e, t);
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function(e, t) {
        return t.toUpperCase();
    };
    J.fn = J.prototype = {
        jquery: Z,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this);
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this);
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return J.each(this, e, t);
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: W,
        sort: q.sort,
        splice: q.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || J.isFunction(a) || (a = {}), 
        s === l && (a = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
        r = e[t], a !== r && (c && r && (J.isPlainObject(r) || (o = J.isArray(r))) ? (o ? (o = !1, 
        i = n && J.isArray(n) ? n : []) : i = n && J.isPlainObject(n) ? n : {}, a[t] = J.extend(c, i, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, J.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function(e) {
            return "object" === J.type(e) && !e.nodeType && !J.isWindow(e) && !(e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf"));
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[X.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            var t, n = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), 
            t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, r) {
            var o, i = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (;a > i && (o = t.apply(e[i], r), o !== !1); i++) ; else for (i in e) if (o = t.apply(e[i], r), 
                o === !1) break;
            } else if (s) for (;a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++) ; else for (i in e) if (o = t.call(e[i], i, e[i]), 
            o === !1) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "");
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? J.merge(r, "string" == typeof e ? [ e ] : e) : W.call(r, e)), 
            r;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : V.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
            return e.length = o, e;
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
            return o;
        },
        map: function(e, t, r) {
            var o, i = 0, a = e.length, s = n(e), l = [];
            if (s) for (;a > i; i++) o = t(e[i], i, r), null != o && l.push(o); else for (i in e) o = t(e[i], i, r), 
            null != o && l.push(o);
            return z.apply([], l);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (r = B.call(arguments, 2), 
            o = function() {
                return e.apply(t || this, r.concat(B.call(arguments)));
            }, o.guid = e.guid = e.guid || J.guid++, o) : void 0;
        },
        now: Date.now,
        support: Y
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        G["[object " + t + "]"] = t.toLowerCase();
    });
    var oe = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, l, c, d, f, h, g;
            if ((t ? t.ownerDocument || t : F) !== P && A(t), t = t || P, n = n || [], s = t.nodeType, 
            "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && I) {
                if (11 !== s && (o = be.exec(e))) if (a = o[1]) {
                    if (9 === s) {
                        if (i = t.getElementById(a), !i || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n;
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && O(t, i) && i.id === a) return n.push(i), 
                    n;
                } else {
                    if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && x.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (x.qsa && (!L || !L.test(e))) {
                    if (f = d = M, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = k(e), (d = t.getAttribute("id")) ? f = d.replace(we, "\\$&") : t.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", l = c.length; l--; ) c[l] = f + p(c[l]);
                        h = ye.test(e) && u(t.parentNode) || t, g = c.join(",");
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n;
                    } catch (m) {} finally {
                        d || t.removeAttribute("id");
                    }
                }
            }
            return N(e.replace(le, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > U.cacheLength && delete e[t.shift()], e[n + " "] = r;
            }
            var t = [];
            return e;
        }
        function r(e) {
            return e[M] = !0, e;
        }
        function o(e) {
            var t = P.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), r = e.length; r--; ) U.attrHandle[n[r]] = t;
        }
        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; ) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
                });
            });
        }
        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function f(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, i = q++;
            return t.first ? function(t, n, i) {
                for (;t = t[r]; ) if (1 === t.nodeType || o) return e(t, n, i);
            } : function(t, n, a) {
                var s, l, c = [ R, i ];
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || o) {
                    if (l = t[M] || (t[M] = {}), (s = l[r]) && s[0] === R && s[1] === i) return c[2] = s[2];
                    if (l[r] = c, c[2] = e(t, n, a)) return !0;
                }
            };
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function g(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r;
        }
        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (i = e[s]) && (!n || n(i, r, o)) && (a.push(i), 
            c && t.push(s));
            return a;
        }
        function v(e, t, n, o, i, a) {
            return o && !o[M] && (o = v(o)), i && !i[M] && (i = v(i, a)), r(function(r, a, s, l) {
                var c, u, d, p = [], f = [], h = a.length, v = r || g(t || "*", s.nodeType ? [ s ] : s, []), b = !e || !r && t ? v : m(v, p, e, s, l), y = n ? i || (r ? e : h || o) ? [] : a : b;
                if (n && n(b, y, s, l), o) for (c = m(y, f), o(c, [], s, l), u = c.length; u--; ) (d = c[u]) && (y[f[u]] = !(b[f[u]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (c = [], u = y.length; u--; ) (d = y[u]) && c.push(b[u] = d);
                            i(null, y = [], c, l);
                        }
                        for (u = y.length; u--; ) (d = y[u]) && (c = i ? ee(r, d) : p[u]) > -1 && (r[c] = !(a[c] = d));
                    }
                } else y = m(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : Z.apply(a, y);
            });
        }
        function b(e) {
            for (var t, n, r, o = e.length, i = U.relative[e[0].type], a = i || U.relative[" "], s = i ? 1 : 0, l = f(function(e) {
                return e === t;
            }, a, !0), c = f(function(e) {
                return ee(t, e) > -1;
            }, a, !0), u = [ function(e, n, r) {
                var o = !i && (r || n !== S) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                return t = null, o;
            } ]; o > s; s++) if (n = U.relative[e[s].type]) u = [ f(h(u), n) ]; else {
                if (n = U.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                    for (r = ++s; o > r && !U.relative[e[r].type]; r++) ;
                    return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(le, "$1"), n, r > s && b(e.slice(s, r)), o > r && b(e = e.slice(r)), o > r && p(e));
                }
                u.push(n);
            }
            return h(u);
        }
        function y(e, n) {
            var o = n.length > 0, i = e.length > 0, a = function(r, a, s, l, c) {
                var u, d, p, f = 0, h = "0", g = r && [], v = [], b = S, y = r || i && U.find.TAG("*", c), w = R += null == b ? 1 : Math.random() || .1, x = y.length;
                for (c && (S = a !== P && a); h !== x && null != (u = y[h]); h++) {
                    if (i && u) {
                        for (d = 0; p = e[d++]; ) if (p(u, a, s)) {
                            l.push(u);
                            break;
                        }
                        c && (R = w);
                    }
                    o && ((u = !p && u) && f--, r && g.push(u));
                }
                if (f += h, o && h !== f) {
                    for (d = 0; p = n[d++]; ) p(g, v, a, s);
                    if (r) {
                        if (f > 0) for (;h--; ) g[h] || v[h] || (v[h] = Y.call(l));
                        v = m(v);
                    }
                    Z.apply(l, v), c && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                }
                return c && (R = w, S = b), g;
            };
            return o ? r(a) : a;
        }
        var w, x, U, C, T, k, $, N, S, E, j, A, P, _, I, L, D, H, O, M = "sizzle" + 1 * new Date(), F = e.document, R = 0, q = 0, B = n(), z = n(), W = n(), V = function(e, t) {
            return e === t && (j = !0), 0;
        }, G = 1 << 31, X = {}.hasOwnProperty, Q = [], Y = Q.pop, K = Q.push, Z = Q.push, J = Q.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
            return -1;
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(ae), fe = new RegExp("^" + oe + "$"), he = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ue = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, Ce = function() {
            A();
        };
        try {
            Z.apply(Q = J.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType;
        } catch (Te) {
            Z = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, J.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : F;
            return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, _ = r.documentElement, 
            n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), 
            I = !T(r), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
            }), x.getElementsByClassName = ve.test(r.getElementsByClassName), x.getById = o(function(e) {
                return _.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length;
            }), x.getById ? (U.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, U.filter.ID = function(e) {
                var t = e.replace(xe, Ue);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete U.find.ID, U.filter.ID = function(e) {
                var t = e.replace(xe, Ue);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), U.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = i[o++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return i;
            }, U.find.CLASS = x.getElementsByClassName && function(e, t) {
                return I ? t.getElementsByClassName(e) : void 0;
            }, D = [], L = [], (x.qsa = ve.test(r.querySelectorAll)) && (o(function(e) {
                _.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), 
                e.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), 
                e.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]");
            }), o(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                L.push(",.*:");
            })), (x.matchesSelector = ve.test(H = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), D.push("!=", ae);
            }), L = L.length && new RegExp(L.join("|")), D = D.length && new RegExp(D.join("|")), 
            t = ve.test(_.compareDocumentPosition), O = t || ve.test(_.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, V = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === F && O(F, e) ? -1 : t === r || t.ownerDocument === F && O(F, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, o = 0, i = e.parentNode, s = t.parentNode, l = [ e ], c = [ t ];
                if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (i === s) return a(e, t);
                for (n = e; n = n.parentNode; ) l.unshift(n);
                for (n = t; n = n.parentNode; ) c.unshift(n);
                for (;l[o] === c[o]; ) o++;
                return o ? a(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0;
            }, r) : P;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== P && A(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !I || D && D.test(n) || L && L.test(n))) try {
                var r = H.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (o) {}
            return t(n, P, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && A(e), O(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== P && A(e);
            var n = U.attrHandle[t.toLowerCase()], r = n && X.call(U.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== r ? r : x.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (j = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(V), j) {
                for (;t = e[o++]; ) t === e[o] && (r = n.push(o));
                for (;r--; ) e.splice(n[r], 1);
            }
            return E = null, e;
        }, C = t.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (;t = e[r++]; ) n += C(t);
            return n;
        }, U = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Ue), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ue), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Ue).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), b = !l && !s;
                        if (m) {
                            if (i) {
                                for (;g; ) {
                                    for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild : m.lastChild ], a && b) {
                                for (u = m[M] || (m[M] = {}), c = u[e] || [], f = c[0] === R && c[1], p = c[0] === R && c[2], 
                                d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop(); ) if (1 === d.nodeType && ++p && d === t) {
                                    u[e] = [ R, f, p ];
                                    break;
                                }
                            } else if (b && (c = (t[M] || (t[M] = {}))[e]) && c[0] === R) p = c[1]; else for (;(d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (b && ((d[M] || (d[M] = {}))[e] = [ R, p ]), 
                            d !== t)); ) ;
                            return p -= o, p === r || p % r === 0 && p / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var o, i = U.pseudos[e] || U.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[M] ? i(n) : i.length > 1 ? (o = [ e, e, "", n ], U.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--; ) r = ee(e, o[a]), e[r] = !(t[r] = o[a]);
                    }) : function(e) {
                        return i(e, 0, o);
                    }) : i;
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [], n = [], o = $(e.replace(le, "$1"));
                    return o[M] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop();
                    };
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: r(function(e) {
                    return e = e.replace(xe, Ue), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                    };
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ue).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === _;
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !U.pseudos.empty(e);
                },
                header: function(e) {
                    return me.test(e.nodeName);
                },
                input: function(e) {
                    return ge.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: c(function() {
                    return [ 0 ];
                }),
                last: c(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: c(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }, U.pseudos.nth = U.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) U.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        }) U.pseudos[w] = l(w);
        return d.prototype = U.filters = U.pseudos, U.setFilters = new d(), k = t.tokenize = function(e, n) {
            var r, o, i, a, s, l, c, u = z[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = U.preFilter; s; ) {
                (!r || (o = ce.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), 
                r = !1, (o = ue.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(le, " ")
                }), s = s.slice(r.length));
                for (a in U.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), 
                i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return n ? s.length : s ? t.error(e) : z(e, l).slice(0);
        }, $ = t.compile = function(e, t) {
            var n, r = [], o = [], i = W[e + " "];
            if (!i) {
                for (t || (t = k(e)), n = t.length; n--; ) i = b(t[n]), i[M] ? r.push(i) : o.push(i);
                i = W(e, y(o, r)), i.selector = e;
            }
            return i;
        }, N = t.select = function(e, t, n, r) {
            var o, i, a, s, l, c = "function" == typeof e && e, d = !r && k(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (i = d[0] = d[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && x.getById && 9 === t.nodeType && I && U.relative[i[1].type]) {
                    if (t = (U.find.ID(a.matches[0].replace(xe, Ue), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(i.shift().value.length);
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !U.relative[s = a.type]); ) if ((l = U.find[s]) && (r = l(a.matches[0].replace(xe, Ue), ye.test(i[0].type) && u(t.parentNode) || t))) {
                    if (i.splice(o, 1), e = r.length && p(i), !e) return Z.apply(n, r), n;
                    break;
                }
            }
            return (c || $(e, d))(r, t, !I, n, ye.test(e) && u(t.parentNode) || t), n;
        }, x.sortStable = M.split("").sort(V).join("") === M, x.detectDuplicates = !!j, 
        A(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"));
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), o(function(e) {
            return null == e.getAttribute("disabled");
        }) || i(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), t;
    }(e);
    J.find = oe, J.expr = oe.selectors, J.expr[":"] = J.expr.pseudos, J.unique = oe.uniqueSort, 
    J.text = oe.getText, J.isXMLDoc = oe.isXML, J.contains = oe.contains;
    var ie = J.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? J.find.matchesSelector(r, e) ? [ r ] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, J.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], o = this;
            if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                for (t = 0; n > t; t++) if (J.contains(o[t], this)) return !0;
            }));
            for (t = 0; n > t; t++) J.find(e, o[t], r);
            return r = this.pushStack(n > 1 ? J.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, 
            r;
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0));
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ie.test(e) ? J(e) : e || [], !1).length;
        }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = J.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : ce.exec(e), 
            !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), 
                ae.test(n[1]) && J.isPlainObject(t)) for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), 
            this.context = K, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), J.makeArray(e, this));
    };
    ue.prototype = J.fn, le = J(K);
    var de = /^(?:parents|prev(?:Until|All))/, pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    J.extend({
        dir: function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                if (o && J(e).is(n)) break;
                r.push(e);
            }
            return r;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    }), J.fn.extend({
        has: function(e) {
            var t = J(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (J.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = ie.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                i.push(n);
                break;
            }
            return this.pushStack(i.length > 1 ? J.unique(i) : i);
        },
        index: function(e) {
            return e ? "string" == typeof e ? V.call(J(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return J.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n);
        },
        next: function(e) {
            return o(e, "nextSibling");
        },
        prev: function(e) {
            return o(e, "previousSibling");
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return J.sibling(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || J.merge([], e.childNodes);
        }
    }, function(e, t) {
        J.fn[e] = function(n, r) {
            var o = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = J.filter(r, o)), 
            this.length > 1 && (pe[e] || J.unique(o), de.test(e) && o.reverse()), this.pushStack(o);
        };
    });
    var fe = /\S+/g, he = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || i(e) : J.extend({}, e);
        var t, n, r, o, a, s, l = [], c = !e.once && [], u = function(i) {
            for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = l.length, r = !0; l && a > s; s++) if (l[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break;
            }
            r = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable());
        }, d = {
            add: function() {
                if (l) {
                    var n = l.length;
                    !function i(t) {
                        J.each(t, function(t, n) {
                            var r = J.type(n);
                            "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
                        });
                    }(arguments), r ? a = l.length : t && (o = n, u(t));
                }
                return this;
            },
            remove: function() {
                return l && J.each(arguments, function(e, t) {
                    for (var n; (n = J.inArray(t, l, n)) > -1; ) l.splice(n, 1), r && (a >= n && a--, 
                    s >= n && s--);
                }), this;
            },
            has: function(e) {
                return e ? J.inArray(e, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], a = 0, this;
            },
            disable: function() {
                return l = c = t = void 0, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return c = void 0, t || d.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return !l || n && !c || (t = t || [], t = [ e, t.slice ? t.slice() : t ], r ? c.push(t) : u(t)), 
                this;
            },
            fire: function() {
                return d.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return d;
    }, J.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", J.Callbacks("once memory"), "resolved" ], [ "reject", "fail", J.Callbacks("once memory"), "rejected" ], [ "notify", "progress", J.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return J.Deferred(function(n) {
                        J.each(t, function(t, i) {
                            var a = J.isFunction(e[t]) && e[t];
                            o[i[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? J.extend(e, r) : r;
                }
            }, o = {};
            return r.pipe = r.then, J.each(t, function(e, i) {
                var a = i[2], s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this;
                }, o[i[0] + "With"] = a.fireWith;
            }), r.promise(o), e && e.call(o, o), o;
        },
        when: function(e) {
            var t, n, r, o = 0, i = B.call(arguments), a = i.length, s = 1 !== a || e && J.isFunction(e.promise) ? a : 0, l = 1 === s ? e : J.Deferred(), c = function(e, n, r) {
                return function(o) {
                    n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && J.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(l.reject).progress(c(o, n, t)) : --s;
            return s || l.resolveWith(r, i), l.promise();
        }
    });
    var ge;
    J.fn.ready = function(e) {
        return J.ready.promise().done(e), this;
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0);
        },
        ready: function(e) {
            (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (ge.resolveWith(K, [ J ]), 
            J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready"))));
        }
    }), J.ready.promise = function(t) {
        return ge || (ge = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", a, !1), 
        e.addEventListener("load", a, !1))), ge.promise(t);
    }, J.ready.promise();
    var me = J.access = function(e, t, n, r, o, i, a) {
        var s = 0, l = e.length, c = null == n;
        if ("object" === J.type(n)) {
            o = !0;
            for (s in n) J.access(e, t, s, n[s], !0, i, a);
        } else if (void 0 !== r && (o = !0, J.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), 
        t = null) : (c = t, t = function(e, t, n) {
            return c.call(J(e), n);
        })), t)) for (;l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : i;
    };
    J.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t);
                } catch (r) {
                    t[this.expando] = n, J.extend(e, t);
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function(e, t, n) {
            var r, o = this.key(e), i = this.cache[o];
            if ("string" == typeof t) i[t] = n; else if (J.isEmptyObject(i)) J.extend(this.cache[o], t); else for (r in t) i[r] = t[r];
            return i;
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t];
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), 
            void 0 !== r ? r : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r, o, i = this.key(e), a = this.cache[i];
            if (void 0 === t) this.cache[i] = {}; else {
                J.isArray(t) ? r = t.concat(t.map(J.camelCase)) : (o = J.camelCase(t), t in a ? r = [ t, o ] : (r = o, 
                r = r in a ? [ r ] : r.match(fe) || [])), n = r.length;
                for (;n--; ) delete a[r[n]];
            }
        },
        hasData: function(e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]];
        }
    };
    var ve = new s(), be = new s(), ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, we = /([A-Z])/g;
    J.extend({
        hasData: function(e) {
            return be.hasData(e) || ve.hasData(e);
        },
        data: function(e, t, n) {
            return be.access(e, t, n);
        },
        removeData: function(e, t) {
            be.remove(e, t);
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n);
        },
        _removeData: function(e, t) {
            ve.remove(e, t);
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = be.get(i), 1 === i.nodeType && !ve.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; ) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = J.camelCase(r.slice(5)), 
                    l(i, r, o[r])));
                    ve.set(i, "hasDataAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                be.set(this, e);
            }) : me(this, function(t) {
                var n, r = J.camelCase(e);
                if (i && void 0 === t) {
                    if (n = be.get(i, e), void 0 !== n) return n;
                    if (n = be.get(i, r), void 0 !== n) return n;
                    if (n = l(i, r, void 0), void 0 !== n) return n;
                } else this.each(function() {
                    var n = be.get(this, r);
                    be.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && be.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                be.remove(this, e);
            });
        }
    }), J.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || J.isArray(n) ? r = ve.access(e, t, J.makeArray(n)) : r.push(n)), 
            r || []) : void 0;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t), r = n.length, o = n.shift(), i = J._queueHooks(e, t), a = function() {
                J.dequeue(e, t);
            };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
            delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    ve.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), J.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, o = J.Deferred(), i = this, a = this.length, s = function() {
                --r || o.resolveWith(i, [ i ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) n = ve.get(i[a], e + "queueHooks"), 
            n && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t);
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ue = [ "Top", "Right", "Bottom", "Left" ], Ce = function(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e);
    }, Te = /^(?:checkbox|radio)$/i;
    !function() {
        var e = K.createDocumentFragment(), t = e.appendChild(K.createElement("div")), n = K.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), 
        t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var ke = "undefined";
    Y.focusinBubbles = "onfocusin" in e;
    var $e = /^key/, Ne = /^(?:mouse|pointer|contextmenu)|click/, Se = /^(?:focusinfocus|focusoutblur)$/, Ee = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, c, u, d, p, f, h, g, m = ve.get(e);
            if (m) for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = J.guid++), 
            (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                return typeof J !== ke && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(fe) || [ "" ], c = t.length; c--; ) s = Ee.exec(t[c]) || [], 
            f = g = s[1], h = (s[2] || "").split(".").sort(), f && (d = J.event.special[f] || {}, 
            f = (o ? d.delegateType : d.bindType) || f, d = J.event.special[f] || {}, u = J.extend({
                type: f,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && J.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, i), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a, !1)), 
            d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), 
            J.event.global[f] = !0);
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, c, u, d, p, f, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(fe) || [ "" ], c = t.length; c--; ) if (s = Ee.exec(t[c]) || [], 
                f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (d = J.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, p = l[f] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; ) u = p[i], 
                    !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(i, 1), 
                    u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                    a && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || J.removeEvent(e, f, m.handle), 
                    delete l[f]);
                } else for (f in l) J.event.remove(e, f + t[c], n, r, !0);
                J.isEmptyObject(l) && (delete m.handle, ve.remove(e, "events"));
            }
        },
        trigger: function(t, n, r, o) {
            var i, a, s, l, c, u, d, p = [ r || K ], f = Q.call(t, "type") ? t.type : t, h = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Se.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), 
            f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[J.expando] ? t : new J.Event(f, "object" == typeof t && t), 
            t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = r), n = null == n ? [ t ] : J.makeArray(n, [ t ]), 
            d = J.event.special[f] || {}, o || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!o && !d.noBubble && !J.isWindow(r)) {
                    for (l = d.delegateType || f, Se.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), 
                    s = a;
                    s === (r.ownerDocument || K) && p.push(s.defaultView || s.parentWindow || e);
                }
                for (i = 0; (a = p[i++]) && !t.isPropagationStopped(); ) t.type = i > 1 ? l : d.bindType || f, 
                u = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), u && u.apply(a, n), 
                u = c && a[c], u && u.apply && J.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !J.acceptData(r) || c && J.isFunction(r[f]) && !J.isWindow(r) && (s = r[c], 
                s && (r[c] = null), J.event.triggered = f, r[f](), J.event.triggered = void 0, s && (r[c] = s)), 
                t.result;
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, r, o, i, a = [], s = B.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], c = J.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = J.event.handlers.call(this, e, l), t = 0; (o = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, r = ((J.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), 
                void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (;l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [ l ]).length), 
                r[o] && r.push(i);
                r.length && a.push({
                    elem: l,
                    handlers: r
                });
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, 
                r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), 
                e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, r, o = e.type, i = e, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ne.test(o) ? this.mouseHooks : $e.test(o) ? this.keyHooks : {}), 
            r = a.props ? this.props.concat(a.props) : this.props, e = new J.Event(i), t = r.length; t--; ) n = r[t], 
            e[n] = i[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            a.filter ? a.filter(e, i) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = J.extend(new J.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? J.event.trigger(o, null, t) : J.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
        }
    }, J.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, 
        t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void (this[J.expando] = !0)) : new J.Event(e, t);
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, o = e.relatedTarget, i = e.handleObj;
                return (!o || o !== r && !J.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), Y.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0);
        };
        J.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, o = ve.access(r, t);
                o || r.addEventListener(e, n, !0), ve.access(r, t, (o || 0) + 1);
            },
            teardown: function() {
                var r = this.ownerDocument || this, o = ve.access(r, t) - 1;
                o ? ve.access(r, t, o) : (r.removeEventListener(e, n, !0), ve.remove(r, t));
            }
        };
    }), J.fn.extend({
        on: function(e, t, n, r, o) {
            var i, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], o);
                return this;
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, 
            n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = u; else if (!r) return this;
            return 1 === o && (i = r, r = function(e) {
                return J().off(e), i.apply(this, arguments);
            }, r.guid = i.guid || (i.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, r, n, t);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), 
            this.each(function() {
                J.event.remove(this, e, n, t);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? J.event.trigger(e, t, n, !0) : void 0;
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ae = /<([\w:]+)/, Pe = /<|&#?\w+;/, _e = /<(?:script|style|link)/i, Ie = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^$|\/(?:java|ecma)script/i, De = /^true\/(.*)/, He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Oe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, 
    Oe.th = Oe.td, J.extend({
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0), l = J.contains(e.ownerDocument, e);
            if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e))) for (a = v(s), 
            i = v(e), r = 0, o = i.length; o > r; r++) b(i[r], a[r]);
            if (t) if (n) for (i = i || v(e), a = a || v(s), r = 0, o = i.length; o > r; r++) m(i[r], a[r]); else m(e, s);
            return a = v(s, "script"), a.length > 0 && g(a, !l && v(e, "script")), s;
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, a, s, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; f > p; p++) if (o = e[p], 
            o || 0 === o) if ("object" === J.type(o)) J.merge(d, o.nodeType ? [ o ] : o); else if (Pe.test(o)) {
                for (i = i || u.appendChild(t.createElement("div")), a = (Ae.exec(o) || [ "", "" ])[1].toLowerCase(), 
                s = Oe[a] || Oe._default, i.innerHTML = s[1] + o.replace(je, "<$1></$2>") + s[2], 
                c = s[0]; c--; ) i = i.lastChild;
                J.merge(d, i.childNodes), i = u.firstChild, i.textContent = "";
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++]; ) if ((!r || -1 === J.inArray(o, r)) && (l = J.contains(o.ownerDocument, o), 
            i = v(u.appendChild(o), "script"), l && g(i), n)) for (c = 0; o = i[c++]; ) Le.test(o.type || "") && n.push(o);
            return u;
        },
        cleanData: function(e) {
            for (var t, n, r, o, i = J.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (J.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (t.events) for (r in t.events) i[r] ? J.event.remove(n, r) : J.removeEvent(n, r, t.handle);
                    ve.cache[o] && delete ve.cache[o];
                }
                delete be.cache[n[be.expando]];
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? J.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || J.cleanData(v(n)), 
            n.parentNode && (t && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(v(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t);
            });
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !_e.test(e) && !Oe[(Ae.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(je, "<$1></$2>");
                    try {
                        for (;r > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (o) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this);
            }), e && (e.length || e.nodeType) ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, o, i, a, s, l = 0, c = this.length, u = this, d = c - 1, p = e[0], g = J.isFunction(p);
            if (g || c > 1 && "string" == typeof p && !Y.checkClone && Ie.test(p)) return this.each(function(n) {
                var r = u.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t);
            });
            if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 
            1 === n.childNodes.length && (n = r), r)) {
                for (o = J.map(v(n, "script"), f), i = o.length; c > l; l++) a = n, l !== d && (a = J.clone(a, !0, !0), 
                i && J.merge(o, v(a, "script"))), t.call(this[l], a, l);
                if (i) for (s = o[o.length - 1].ownerDocument, J.map(o, h), l = 0; i > l; l++) a = o[l], 
                Le.test(a.type || "") && !ve.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(He, "")));
            }
            return this;
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(e) {
            for (var n, r = [], o = J(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), 
            J(o[a])[t](n), W.apply(r, n.get());
            return this.pushStack(r);
        };
    });
    var Me, Fe = {}, Re = /^margin/, qe = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), Be = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null);
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            a.innerHTML = "", o.appendChild(i);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i);
        }
        var n, r, o = K.documentElement, i = K.createElement("div"), a = K.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        Y.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        i.appendChild(a), e.getComputedStyle && J.extend(Y, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return null == r && t(), r;
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(K.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), 
                t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), 
                t;
            }
        }));
    }(), J.swap = function(e, t, n, r) {
        var o, i, a = {};
        for (i in t) a[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t) e.style[i] = a[i];
        return o;
    };
    var ze = /^(none|table(?!-c[ea]).+)/, We = new RegExp("^(" + xe + ")(.*)$", "i"), Ve = new RegExp("^([+-])=(" + xe + ")", "i"), Ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Xe = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Qe = [ "Webkit", "O", "Moz", "ms" ];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = J.camelCase(t), l = e.style;
                return t = J.cssProps[s] || (J.cssProps[s] = C(l, s)), a = J.cssHooks[t] || J.cssHooks[s], 
                void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t] : (i = typeof n, 
                "string" === i && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(e, t)), 
                i = "number"), void (null != n && n === n && ("number" !== i || J.cssNumber[s] || (n += "px"), 
                Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n))));
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = J.camelCase(t);
            return t = J.cssProps[s] || (J.cssProps[s] = C(e.style, s)), a = J.cssHooks[t] || J.cssHooks[s], 
            a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = x(e, t, r)), "normal" === o && t in Xe && (o = Xe[t]), 
            "" === n || n ? (i = parseFloat(o), n === !0 || J.isNumeric(i) ? i || 0 : o) : o;
        }
    }), J.each([ "height", "width" ], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ze.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ge, function() {
                    return $(e, t, r);
                }) : $(e, t, r) : void 0;
            },
            set: function(e, n, r) {
                var o = r && Be(e);
                return T(e, n, r ? k(e, t, r, "border-box" === J.css(e, "boxSizing", !1, o), o) : 0);
            }
        };
    }), J.cssHooks.marginRight = U(Y.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, x, [ e, "marginRight" ]) : void 0;
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) o[e + Ue[r] + t] = i[r] || i[r - 2] || i[0];
                return o;
            }
        }, Re.test(e) || (J.cssHooks[e + t].set = T);
    }), J.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (J.isArray(t)) {
                    for (r = Be(e), o = t.length; o > a; a++) i[t[a]] = J.css(e, t[a], !1, r);
                    return i;
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t);
            }, e, t, arguments.length > 1);
        },
        show: function() {
            return N(this, !0);
        },
        hide: function() {
            return N(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? J(this).show() : J(this).hide();
            });
        }
    }), J.Tween = S, S.prototype = {
        constructor: S,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = i || (J.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = S.propHooks[this.prop];
            return e && e.get ? e.get(this) : S.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = S.propHooks[this.prop];
            return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : S.propHooks._default.set(this), this;
        }
    }, S.prototype.init.prototype = S.prototype, S.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, J.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, J.fx = S.prototype.init, J.fx.step = {};
    var Ye, Ke, Ze = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [ P ], nt = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), o = Je.exec(t), i = o && o[3] || (J.cssNumber[e] ? "" : "px"), a = (J.cssNumber[e] || "px" !== i && +r) && Je.exec(J.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== i) {
                i = i || a[3], o = o || [], a = +r || 1;
                do s = s || ".5", a /= s, J.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --l);
            }
            return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), 
            n;
        } ]
    };
    J.Animation = J.extend(I, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, o = e.length; o > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? tt.unshift(e) : tt.push(e);
        }
    }), J.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return r.duration = J.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in J.fx.speeds ? J.fx.speeds[r.duration] : J.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            J.isFunction(r.old) && r.old.call(this), r.queue && J.dequeue(this, r.queue);
        }, r;
    }, J.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var o = J.isEmptyObject(e), i = J.speed(t, n, r), a = function() {
                var t = I(this, J.extend({}, e), i);
                (o || ve.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, o = null != e && e + "queueHooks", i = J.timers, a = ve.get(this);
                if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && et.test(o) && r(a[o]);
                for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
                t = !1, i.splice(o, 1));
                (t || !n) && J.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ve.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = J.timers, a = r ? r.length : 0;
                for (n.finish = !0, J.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                i.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), J.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = J.fn[t];
        J.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, o);
        };
    }), J.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        J.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), J.timers = [], J.fx.tick = function() {
        var e, t = 0, n = J.timers;
        for (Ye = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || J.fx.stop(), Ye = void 0;
    }, J.fx.timer = function(e) {
        J.timers.push(e), e() ? J.fx.start() : J.timers.pop();
    }, J.fx.interval = 13, J.fx.start = function() {
        Ke || (Ke = setInterval(J.fx.tick, J.fx.interval));
    }, J.fx.stop = function() {
        clearInterval(Ke), Ke = null;
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fn.delay = function(e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r);
            };
        });
    }, function() {
        var e = K.createElement("input"), t = K.createElement("select"), n = t.appendChild(K.createElement("option"));
        e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, 
        Y.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", 
        Y.radioValue = "t" === e.value;
    }();
    var rt, ot, it = J.expr.attrHandle;
    J.fn.extend({
        attr: function(e, t) {
            return me(this, J.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e);
            });
        }
    }), J.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === ke ? J.prop(e, t, n) : (1 === i && J.isXMLDoc(e) || (t = t.toLowerCase(), 
            r = J.attrHooks[t] || (J.expr.match.bool.test(t) ? ot : rt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = J.find.attr(e, t), 
            null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), 
            n) : void J.removeAttr(e, t));
        },
        removeAttr: function(e, t) {
            var n, r, o = 0, i = t && t.match(fe);
            if (i && 1 === e.nodeType) for (;n = i[o++]; ) r = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[r] = !1), 
            e.removeAttribute(n);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Y.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, n) {
            return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = it[t] || J.find.attr;
        it[t] = function(e, t, r) {
            var o, i;
            return r || (i = it[t], it[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, 
            it[t] = i), o;
        };
    });
    var at = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return me(this, J.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[J.propFix[e] || e];
            });
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, o, i, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !J.isXMLDoc(e), i && (t = J.propFix[t] || t, 
            o = J.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1;
                }
            }
        }
    }), Y.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }
    }), J.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        J.propFix[this.toLowerCase()] = this;
    });
    var st = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s = "string" == typeof e && e, l = 0, c = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).addClass(e.call(this, t, this.className));
            });
            if (s) for (t = (e || "").match(fe) || []; c > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                for (i = 0; o = t[i++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                a = J.trim(r), n.className !== a && (n.className = a);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).removeClass(e.call(this, t, this.className));
            });
            if (s) for (t = (e || "").match(fe) || []; c > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                for (i = 0; o = t[i++]; ) for (;r.indexOf(" " + o + " ") >= 0; ) r = r.replace(" " + o + " ", " ");
                a = e ? J.trim(r) : "", n.className !== a && (n.className = a);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t);
            } : function() {
                if ("string" === n) for (var t, r = 0, o = J(this), i = e.match(fe) || []; t = i[r++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1;
        }
    });
    var lt = /\r/g;
    J.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = J.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, J(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
            })) : o ? (t = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, 
            "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0;
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e));
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++) if (n = r[l], 
                    !(!n.selected && l !== o || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                        if (t = J(n).val(), i) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = J.makeArray(t), a = o.length; a--; ) r = o[a], 
                    (r.selected = J.inArray(r.value, i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), i;
                }
            }
        }
    }), J.each([ "radio", "checkbox" ], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0;
            }
        }, Y.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var ct = J.now(), ut = /\?/;
    J.parseJSON = function(e) {
        return JSON.parse(e + "");
    }, J.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser(), t = n.parseFromString(e, "text/xml");
        } catch (r) {
            t = void 0;
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), 
        t;
    };
    var dt = /#.*$/, pt = /([?&])_=[^&]*/, ft = /^(.*?):[ \t]*([^\r\n]*)$/gm, ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bt = {}, yt = {}, wt = "*/".concat("*"), xt = e.location.href, Ut = vt.exec(xt.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: ht.test(Ut[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, J.ajaxSettings), t) : H(J.ajaxSettings, e);
        },
        ajaxPrefilter: L(bt),
        ajaxTransport: L(yt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var l, u, v, b, w, U = t;
                2 !== y && (y = 2, s && clearTimeout(s), r = void 0, i = a || "", x.readyState = e > 0 ? 4 : 0, 
                l = e >= 200 && 300 > e || 304 === e, n && (b = O(d, x, n)), b = M(d, b, x, l), 
                l ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (J.lastModified[o] = w), 
                w = x.getResponseHeader("etag"), w && (J.etag[o] = w)), 204 === e || "HEAD" === d.type ? U = "nocontent" : 304 === e ? U = "notmodified" : (U = b.state, 
                u = b.data, v = b.error, l = !v)) : (v = U, (e || !U) && (U = "error", 0 > e && (e = 0))), 
                x.status = e, x.statusText = (t || U) + "", l ? h.resolveWith(p, [ u, U, x ]) : h.rejectWith(p, [ x, U, v ]), 
                x.statusCode(m), m = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [ x, d, l ? u : v ]), 
                g.fireWith(p, [ x, U ]), c && (f.trigger("ajaxComplete", [ x, d ]), --J.active || J.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, o, i, a, s, l, c, u, d = J.ajaxSetup({}, t), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? J(p) : J.event, h = J.Deferred(), g = J.Callbacks("once memory"), m = d.statusCode || {}, v = {}, b = {}, y = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === y) {
                        if (!a) for (a = {}; t = ft.exec(i); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === y ? i : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return y || (e = b[n] = b[n] || e, v[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return y || (d.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > y) for (t in e) m[t] = [ m[t], e[t] ]; else x.always(e[x.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return r && r.abort(t), n(0, t), this;
                }
            };
            if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || xt) + "").replace(dt, "").replace(mt, Ut[1] + "//"), 
            d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(fe) || [ "" ], 
            null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === Ut[1] && l[2] === Ut[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ut[3] || ("http:" === Ut[1] ? "80" : "443")))), 
            d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), 
            D(bt, d, t, x), 2 === y) return x;
            c = J.event && d.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), 
            d.type = d.type.toUpperCase(), d.hasContent = !gt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ut.test(o) ? "&" : "?") + d.data, 
            delete d.data), d.cache === !1 && (d.url = pt.test(o) ? o.replace(pt, "$1_=" + ct++) : o + (ut.test(o) ? "&" : "?") + "_=" + ct++)), 
            d.ifModified && (J.lastModified[o] && x.setRequestHeader("If-Modified-Since", J.lastModified[o]), 
            J.etag[o] && x.setRequestHeader("If-None-Match", J.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), 
            x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === y)) return x.abort();
            w = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) x[u](d[u]);
            if (r = D(yt, d, t, x)) {
                x.readyState = 1, c && f.trigger("ajaxSend", [ x, d ]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout");
                }, d.timeout));
                try {
                    y = 1, r.send(v, n);
                } catch (U) {
                    if (!(2 > y)) throw U;
                    n(-1, U);
                }
            } else n(-1, "No Transport");
            return x;
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script");
        }
    }), J.each([ "get", "post" ], function(e, t) {
        J[t] = function(e, n, r, o) {
            return J.isFunction(n) && (o = o || r, r = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            });
        };
    }), J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, J.fn.extend({
        wrapAll: function(e) {
            var t;
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapAll(e.call(this, t));
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(e) {
            return this.each(J.isFunction(e) ? function(t) {
                J(this).wrapInner(e.call(this, t));
            } : function() {
                var t = J(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
            }).end();
        }
    }), J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e);
    };
    var Ct = /%20/g, Tt = /\[\]$/, kt = /\r?\n/g, $t = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            o(this.name, this.value);
        }); else for (n in e) F(n, e[n], t, o);
        return r.join("&").replace(Ct, "+");
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && Nt.test(this.nodeName) && !$t.test(e) && (this.checked || !Te.test(e));
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                };
            }).get();
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var St = 0, Et = {}, jt = {
        0: 200,
        1223: 204
    }, At = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Et) Et[e]();
    }), Y.cors = !!At && "withCredentials" in At, Y.ajax = At = !!At, J.ajaxTransport(function(e) {
        var t;
        return Y.cors || At && !e.crossDomain ? {
            send: function(n, r) {
                var o, i = e.xhr(), a = ++St;
                if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) i[o] = e.xhrFields[o];
                e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) i.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete Et[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(jt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()));
                    };
                }, i.onload = t(), i.onerror = t("error"), t = Et[a] = t("abort");
                try {
                    i.send(e.hasContent && e.data || null);
                } catch (s) {
                    if (t) throw s;
                }
            },
            abort: function() {
                t && t();
            }
        } : void 0;
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e;
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), K.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Pt = [], _t = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pt.pop() || J.expando + "_" + ct++;
            return this[e] = !0, e;
        }
    }), J.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (_t.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        s ? t[s] = t[s].replace(_t, "$1" + o) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), 
        t.converters["script json"] = function() {
            return a || J.error(o + " was not called"), a[0];
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments;
        }, r.always(function() {
            e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Pt.push(o)), a && J.isFunction(i) && i(a[0]), 
            a = i = void 0;
        }), "script") : void 0;
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var r = ae.exec(e), o = !n && [];
        return r ? [ t.createElement(r[1]) ] : (r = J.buildFragment([ e ], t, o), o && o.length && J(o).remove(), 
        J.merge([], r.childNodes));
    };
    var It = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && It) return It.apply(this, arguments);
        var r, o, i, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = J.trim(e.slice(s)), e = e.slice(0, s)), J.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && J.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? J("<div>").append(J.parseHTML(e)).find(r) : e);
        }).complete(n && function(e, t) {
            a.each(n, i || [ e.responseText, t, e ]);
        }), this;
    }, J.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem;
        }).length;
    };
    var Lt = e.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, c, u = J.css(e, "position"), d = J(e), p = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), i = J.css(e, "top"), 
            l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1, 
            c ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), 
            J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), 
            null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p);
        }
    }, J.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                J.offset.setOffset(this, e, t);
            });
            var t, n, r = this[0], o = {
                top: 0,
                left: 0
            }, i = r && r.ownerDocument;
            return i ? (t = i.documentElement, J.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (o = r.getBoundingClientRect()), 
            n = R(i), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), J.nodeName(e[0], "html") || (r = e.offset()), r.top += J.css(e[0], "borderTopWidth", !0), 
                r.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - J.css(n, "marginTop", !0),
                    left: t.left - r.left - J.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Lt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position"); ) e = e.offsetParent;
                return e || Lt;
            });
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        J.fn[t] = function(o) {
            return me(this, function(t, o, i) {
                var a = R(t);
                return void 0 === i ? a ? a[n] : t[o] : void (a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i);
            }, t, o, arguments.length, null);
        };
    }), J.each([ "top", "left" ], function(e, t) {
        J.cssHooks[t] = U(Y.pixelPosition, function(e, n) {
            return n ? (n = x(e, t), qe.test(n) ? J(e).position()[t] + "px" : n) : void 0;
        });
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            J.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || o === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var o;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? J.css(t, n, a) : J.style(t, n, r, a);
                }, t, i ? r : void 0, i, null);
            };
        });
    }), J.fn.size = function() {
        return this.length;
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J;
    });
    var Dt = e.jQuery, Ht = e.$;
    return J.noConflict = function(t) {
        return e.$ === J && (e.$ = Ht), t && e.jQuery === J && (e.jQuery = Dt), J;
    }, typeof t === ke && (e.jQuery = e.$ = J), J;
}), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(e) {
    var t, n, r, o, i, a, s = "Close", l = "BeforeClose", c = "AfterClose", u = "BeforeAppend", d = "MarkupParse", p = "Open", f = "Change", h = "mfp", g = "." + h, m = "mfp-ready", v = "mfp-removing", b = "mfp-prevent-close", y = function() {}, w = !!window.jQuery, x = e(window), U = function(e, n) {
        t.ev.on(h + e + g, n);
    }, C = function(t, n, r, o) {
        var i = document.createElement("div");
        return i.className = "mfp-" + t, r && (i.innerHTML = r), o ? n && n.appendChild(i) : (i = e(i), 
        n && i.appendTo(n)), i;
    }, T = function(n, r) {
        t.ev.triggerHandler(h + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), 
        t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [ r ]));
    }, k = function(n) {
        return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), 
        a = n), t.currTemplate.closeBtn;
    }, $ = function() {
        e.magnificPopup.instance || (t = new y(), t.init(), e.magnificPopup.instance = t);
    }, N = function() {
        var e = document.createElement("p").style, t = [ "ms", "O", "Moz", "Webkit" ];
        if (void 0 !== e.transition) return !0;
        for (;t.length; ) if (t.pop() + "Transition" in e) return !0;
        return !1;
    };
    y.prototype = {
        constructor: y,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), 
            t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = N(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), 
            r = e(document), t.popupsCache = {};
        },
        open: function(n) {
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (o = 0; o < s.length; o++) if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) {
                    t.index = o;
                    break;
                }
            } else t.items = e.isArray(n.items) ? n.items : [ n.items ], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], i = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, 
            n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, 
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, 
            t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, 
            t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = C("bg").on("click" + g, function() {
                t.close();
            }), t.wrap = C("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                t._checkIfClose(e.target) && t.close();
            }), t.container = C("container", t.wrap)), t.contentContainer = C("content"), t.st.preloader && (t.preloader = C("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t);
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (U(d, function(e, t, n, r) {
                n.close_replaceWith = k(r.type);
            }), i += " mfp-close-btn-in") : t.wrap.append(k())), t.st.alignTop && (i += " mfp-align-top"), 
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: x.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && r.on("keyup" + g, function(e) {
                27 === e.keyCode && t.close();
            }), x.on("resize" + g, function() {
                t.updateSize();
            }), t.st.closeOnContentClick || (i += " mfp-auto-cursor"), i && t.wrap.addClass(i);
            var u = t.wH = x.height(), f = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var h = t._getScrollbarSize();
                h && (f.marginRight = h);
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), 
            T("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), 
            t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), r.on("focusin" + g, t._onFocusIn);
            }, 16), t.isOpen = !0, t.updateSize(u), T(p), n;
        },
        close: function() {
            t.isOpen && (T(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), 
            setTimeout(function() {
                t._close();
            }, t.st.removalDelay)) : t._close());
        },
        _close: function() {
            T(s);
            var n = v + " " + m + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), 
            t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o);
            }
            r.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), 
            t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), 
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), 
            t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, 
            t.content = null, t.currTemplate = null, t.prevHeight = 0, T(c);
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth, r = window.innerHeight * n;
                t.wrap.css("height", r), t.wH = r;
            } else t.wH = e || x.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var r = n.type;
            if (T("BeforeChange", [ t.currItem ? t.currItem.type : "", r ]), t.currItem = n, 
            !t.currTemplate[r]) {
                var i = !!t.st[r] && t.st[r].markup;
                T("FirstMarkupParse", i), i ? t.currTemplate[r] = e(i) : t.currTemplate[r] = !0;
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
            t.appendContent(a, r), n.preloaded = !0, T(f, n), o = n.type, t.container.prepend(t.contentContainer), 
            T("AfterChange");
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(k()) : t.content = e : t.content = "", 
            T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
        },
        parseEl: function(n) {
            var r, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (r = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
                for (var i = t.types, a = 0; a < i.length; a++) if (o.el.hasClass("mfp-" + i[a])) {
                    r = i[a];
                    break;
                }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
            }
            return o.type = r || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, 
            T("ElementParse", o), t.items[n];
        },
        addGroup: function(e, n) {
            var r = function(r) {
                r.mfpEl = this, t._openClick(r, e, n);
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, r)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, r) : (n.items = e, 
            e.off(o).on(o, r)));
        },
        _openClick: function(n, r, o) {
            var i = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (i || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a) if (e.isFunction(a)) {
                    if (!a.call(t)) return !0;
                } else if (x.width() < a) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), 
                o.delegate && (o.items = r.find(o.delegate)), t.open(o);
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                var o = {
                    status: e,
                    text: r
                };
                T("UpdateStatus", o), e = o.status, r = o.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation();
                }), t.container.addClass("mfp-s-" + e), n = e;
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(b)) {
                var r = t.st.closeOnContentClick, o = t.st.closeOnBgClick;
                if (r && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (r) return !0;
                } else if (o && e.contains(document, n)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e);
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || x.height());
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
        },
        _onFocusIn: function(n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), 
            !1;
        },
        _parseMarkup: function(t, n, r) {
            var o;
            r.data && (n = e.extend(r.data, n)), T(d, [ t, n, r ]), e.each(n, function(n, r) {
                if (void 0 === r || r === !1) return !0;
                if (o = n.split("_"), o.length > 1) {
                    var i = t.find(g + "-" + o[0]);
                    if (i.length > 0) {
                        var a = o[1];
                        "replaceWith" === a ? i[0] !== r[0] && i.replaceWith(r) : "img" === a ? i.is("img") ? i.attr("src", r) : i.replaceWith(e("<img>").attr("src", r).attr("class", i.attr("class"))) : i.attr(o[1], r);
                    }
                } else t.find(g + "-" + n).html(r);
            });
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", 
                document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
            }
            return t.scrollbarSize;
        }
    }, e.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function(t, n) {
            return $(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), 
            this.modules.push(t);
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
    }, e.fn.magnificPopup = function(n) {
        $();
        var r = e(this);
        if ("string" == typeof n) if ("open" === n) {
            var o, i = w ? r.data("magnificPopup") : r[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
            i.items ? o = i.items[a] : (o = r, i.delegate && (o = o.find(i.delegate)), o = o.eq(a)), 
            t._openClick({
                mfpEl: o
            }, r, i);
        } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1)); else n = e.extend(!0, {}, n), 
        w ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
        return r;
    };
    var S, E, j, A = "inline", P = function() {
        j && (E.after(j.addClass(S)).detach(), j = null);
    };
    e.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(A), U(s + "." + A, function() {
                    P();
                });
            },
            getInline: function(n, r) {
                if (P(), n.src) {
                    var o = t.st.inline, i = e(n.src);
                    if (i.length) {
                        var a = i[0].parentNode;
                        a && a.tagName && (E || (S = o.hiddenClass, E = C(S), S = "mfp-" + S), j = i.after(E).detach().removeClass(S)), 
                        t.updateStatus("ready");
                    } else t.updateStatus("error", o.tNotFound), i = e("<div>");
                    return n.inlineElement = i, i;
                }
                return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r;
            }
        }
    });
    var _, I = "ajax", L = function() {
        _ && e(document.body).removeClass(_);
    }, D = function() {
        L(), t.req && t.req.abort();
    };
    e.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(I), _ = t.st.ajax.cursor, U(s + "." + I, D), U("BeforeChange." + I, D);
            },
            getAjax: function(n) {
                _ && e(document.body).addClass(_), t.updateStatus("loading");
                var r = e.extend({
                    url: n.src,
                    success: function(r, o, i) {
                        var a = {
                            data: r,
                            xhr: i
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), I), n.finished = !0, L(), t._setFocus(), 
                        setTimeout(function() {
                            t.wrap.addClass(m);
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded");
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(r), "";
            }
        }
    });
    var H, O = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (e.isFunction(r)) return r.call(t, n);
            if (n.el) return n.el.attr(r) || "";
        }
        return "";
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image, r = ".image";
                t.types.push("image"), U(p + r, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
                }), U(s + r, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), x.off("resize" + g);
                }), U("Resize" + r, t.resizeImage), t.isLowIE && U("AfterChange", t.resizeImage);
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), 
                    e.img.css("max-height", t.wH - n);
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, H && clearInterval(H), e.isCheckingImgSize = !1, T("ImageHasSize", e), 
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
            },
            findImageSize: function(e) {
                var n = 0, r = e.img[0], o = function(i) {
                    H && clearInterval(H), H = setInterval(function() {
                        return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(H), 
                        n++, void (3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)));
                    }, i);
                };
                o(1);
            },
            getImage: function(n, r) {
                var o = 0, i = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), 
                    t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 
                    o < 200 ? setTimeout(i, 100) : a()));
                }, a = function() {
                    n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), 
                    n.hasSize = !0, n.loaded = !0, n.loadError = !0);
                }, s = t.st.image, l = r.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), 
                    n.img = e(c).on("load.mfploader", i).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), 
                    c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
                }
                return t._parseMarkup(r, {
                    title: O(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (H && clearInterval(H), n.loadError ? (r.addClass("mfp-loading"), 
                t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), 
                t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, 
                r.addClass("mfp-loading"), t.findImageSize(n)), r);
            }
        }
    });
    var M, F = function() {
        return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), 
        M;
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom, r = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, i, a = n.duration, c = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), r = "all " + n.duration / 1e3 + "s " + n.easing, o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, i = "transition";
                        return o["-webkit-" + i] = o["-moz-" + i] = o["-o-" + i] = o[i] = r, t.css(o), t;
                    }, u = function() {
                        t.content.css("visibility", "visible");
                    };
                    U("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), 
                            !e) return void u();
                            i = c(e), i.css(t._getOffset()), t.wrap.append(i), o = setTimeout(function() {
                                i.css(t._getOffset(!0)), o = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        i.remove(), e = i = null, T("ZoomAnimationEnded");
                                    }, 16);
                                }, a);
                            }, 16);
                        }
                    }), U(l + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                i = c(e);
                            }
                            i.css(t._getOffset(!0)), t.wrap.append(i), t.content.css("visibility", "hidden"), 
                            setTimeout(function() {
                                i.css(t._getOffset());
                            }, 16);
                        }
                    }), U(s + r, function() {
                        t._allowZoom() && (u(), i && i.remove(), e = null);
                    });
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type;
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img;
            },
            _getOffset: function(n) {
                var r;
                r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = r.offset(), i = parseInt(r.css("padding-top"), 10), a = parseInt(r.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - i;
                var s = {
                    width: r.width(),
                    height: (w ? r.innerHeight() : r[0].offsetHeight) - a - i
                };
                return F() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, 
                s.top = o.top), s;
            }
        }
    });
    var R = "iframe", q = "//about:blank", B = function(e) {
        if (t.currTemplate[R]) {
            var n = t.currTemplate[R].find("iframe");
            n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"));
        }
    };
    e.magnificPopup.registerModule(R, {
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
                t.types.push(R), U("BeforeChange", function(e, t, n) {
                    t !== n && (t === R ? B() : n === R && B(!0));
                }), U(s + "." + R, function() {
                    B();
                });
            },
            getIframe: function(n, r) {
                var o = n.src, i = t.st.iframe;
                e.each(i.patterns, function() {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), 
                    o = this.src.replace("%id%", o), !1;
                });
                var a = {};
                return i.srcAction && (a[i.srcAction] = o), t._parseMarkup(r, a, n), t.updateStatus("ready"), 
                r;
            }
        }
    });
    var z = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : e < 0 ? n + e : e;
    }, W = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
    e.magnificPopup.registerModule("gallery", {
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
                var n = t.st.gallery, o = ".mfp-gallery";
                return t.direction = !0, !(!n || !n.enabled) && (i += " mfp-gallery", U(p + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        if (t.items.length > 1) return t.next(), !1;
                    }), r.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                    });
                }), U("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = W(n.text, t.currItem.index, t.items.length));
                }), U(d + o, function(e, r, o, i) {
                    var a = t.items.length;
                    o.counter = a > 1 ? W(n.tCounter, i.index, a) : "";
                }), U("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var r = n.arrowMarkup, o = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(b), i = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(b);
                        o.click(function() {
                            t.prev();
                        }), i.click(function() {
                            t.next();
                        }), t.container.append(o.add(i));
                    }
                }), U(f + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null;
                    }, 16);
                }), void U(s + o, function() {
                    r.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null;
                }));
            },
            next: function() {
                t.direction = !0, t.index = z(t.index + 1), t.updateItemHTML();
            },
            prev: function() {
                t.direction = !1, t.index = z(t.index - 1), t.updateItemHTML();
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload, r = Math.min(n[0], t.items.length), o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : r); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : o); e++) t._preloadItem(t.index - e);
            },
            _preloadItem: function(n) {
                if (n = z(n), !t.items[n].preloaded) {
                    var r = t.items[n];
                    r.parsed || (r = t.parseEl(n)), T("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0;
                    }).on("error.mfploader", function() {
                        r.hasSize = !0, r.loadError = !0, T("LazyLoadError", r);
                    }).attr("src", r.src)), r.preloaded = !0;
                }
            }
        }
    });
    var V = "retina";
    e.magnificPopup.registerModule(V, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina, n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (U("ImageHasSize." + V, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        });
                    }), U("ElementParse." + V, function(t, r) {
                        r.src = e.replaceSrc(r, n);
                    }));
                }
            }
        }
    }), $();
}), function() {
    var e = window, t = document, n = "replace", r = function(e, r, o, i, a) {
        return r = encodeURIComponent(r)[n](/\(/g, "%28")[n](/\)/g, "%29"), e = e + "=" + r + "; path=" + (o || "/") + "; ", 
        a && (e += "expires=" + new Date(new Date().getTime() + a).toGMTString() + "; "), 
        i && "none" != i && (e += "domain=" + i + ";"), i = t.cookie, t.cookie = e, i != t.cookie;
    }, o = function(e) {
        var n = t.body;
        try {
            n.addEventListener ? n.addEventListener("click", e, !1) : n.attachEvent && n.attachEvent("onclick", e);
        } catch (r) {}
    }, i = function(e, o, i, a) {
        this.get = function() {
            for (var r = void 0, o = [], i = t.cookie.split(";"), a = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$"), s = 0; s < i.length; s++) {
                var l = i[s].match(a);
                l && o.push(decodeURIComponent(l[1][n](/%28/g, "(")[n](/%29/g, ")")));
            }
            for (i = 0; i < o.length; i++) o[i] && (r = o[i]);
            return r;
        }, this.set = function(t) {
            return r(e, t, a, o, 1e3 * i);
        }, this.remove = function() {
            return r(e, "", a, o, -100);
        };
    }, a = function(t, n) {
        var r = void 0;
        if ("function" == typeof t.get && "function" == typeof t.set) {
            var a = n || {}, s = a.hasOwnProperty("cookieName") ? a.cookieName : "_gali", l = a.hasOwnProperty("cookieTimeout") ? a.cookieTimeout : 30, c = a.hasOwnProperty("levels") ? a.levels : 3, a = t.get("cookieDomain"), u = t.get("cookiePath"), d = new i(s, a, l, u);
            r || (r = d.get()), r && t.set("&linkid", r), o(function(t) {
                t = t || e.event, t = t.target || t.srcElement;
                for (var n, r = 0; t && r <= c; r++) {
                    if (n = t.getAttribute("id")) return t = n, void (100 < t.length ? d.remove() : t ? d.set(t) : d.remove());
                    t = t.parentElement;
                }
                d.remove();
            });
        }
    };
    !function() {
        e.gaplugins = e.gaplugins || {}, e.gaplugins.LinkId = a;
        var t = e.GoogleAnalyticsObject || "ga";
        e[t] = e[t] || function() {
            (e[t].q = e[t].q || []).push(arguments);
        }, e[t]("provide", "linkid", a);
    }();
}(), function() {
    function e(e) {
        U.set(e);
    }
    function t(e) {
        if (100 != e.get(Kt) && w(fe(e, Ot)) % 1e4 >= 100 * he(e, Kt)) throw "abort";
    }
    function n(e) {
        if (G(fe(e, Rt))) throw "abort";
    }
    function r() {
        var e = W.location.protocol;
        if ("http:" != e && "https:" != e) throw "abort";
    }
    function o(t) {
        try {
            z.navigator.sendBeacon ? e(42) : z.XMLHttpRequest && "withCredentials" in new z.XMLHttpRequest() && e(40);
        } catch (n) {}
        t.set(bt, T(t), !0), t.set(_e, he(t, _e) + 1);
        var r = [];
        de.map(function(e, n) {
            n.F && (e = t.get(e), void 0 != e && e != n.defaultValue && ("boolean" == typeof e && (e *= 1), 
            r.push(n.F + "=" + I("" + e))));
        }), r.push("z=" + ce()), t.set(je, r.join("&"), !0);
    }
    function i(e) {
        var t = fe(e, rn) || J() + "/collect", n = fe(e, Pe);
        if (!n && e.get(Ae) && (n = "beacon"), n) {
            var r = fe(e, je), o = e.get(Ee), o = o || _;
            "image" == n ? ne(t, r, o) : "xhr" == n && re(t, r, o) || "beacon" == n && oe(t, r, o) || te(t, r, o);
        } else te(t, fe(e, je), e.get(Ee));
        t = e.get(Rt), t = ae(t), n = t.hitcount, t.hitcount = n ? n + 1 : 1, t = e.get(Rt), 
        delete ae(t).pending_experiments, e.set(Ee, _, !0);
    }
    function a(e) {
        (z.gaData = z.gaData || {}).expId && e.set(ct, (z.gaData = z.gaData || {}).expId), 
        (z.gaData = z.gaData || {}).expVar && e.set(ut, (z.gaData = z.gaData || {}).expVar);
        var t = e.get(Rt);
        if (t = ae(t).pending_experiments) {
            var n = [];
            for (r in t) t.hasOwnProperty(r) && t[r] && n.push(encodeURIComponent(r) + "." + encodeURIComponent(t[r]));
            var r = n.join("!");
        } else r = void 0;
        r && e.set(dt, r, !0);
    }
    function s() {
        if (z.navigator && "preview" == z.navigator.loadPurpose) throw "abort";
    }
    function l(e) {
        var t = z.gaDevIds;
        N(t) && 0 != t.length && e.set("&did", t.join(","), !0);
    }
    function c(e) {
        if (!e.get(Rt)) throw "abort";
    }
    function u(t) {
        var n = he(t, gt);
        500 <= n && e(15);
        var r = fe(t, Se);
        if ("transaction" != r && "item" != r) {
            var r = he(t, vt), o = new Date().getTime(), i = he(t, mt);
            if (0 == i && t.set(mt, o), i = Math.round(2 * (o - i) / 1e3), 0 < i && (r = Math.min(r + i, 20), 
            t.set(mt, o)), 0 >= r) throw "abort";
            t.set(vt, --r);
        }
        t.set(gt, ++n);
    }
    function d(t, n, r, o) {
        n[t] = function() {
            try {
                return o && e(o), r.apply(this, arguments);
            } catch (n) {
                throw ie("exc", t, n && n.name), n;
            }
        };
    }
    function p() {
        var e, t;
        if ((t = (t = z.navigator) ? t.plugins : null) && t.length) for (var n = 0; n < t.length && !e; n++) {
            var r = t[n];
            -1 < r.name.indexOf("Shockwave Flash") && (e = r.description);
        }
        if (!e) try {
            var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            e = o.GetVariable("$version");
        } catch (i) {}
        if (!e) try {
            o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", o.AllowScriptAccess = "always", 
            e = o.GetVariable("$version");
        } catch (i) {}
        if (!e) try {
            o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = o.GetVariable("$version");
        } catch (i) {}
        return e && (o = e.match(/[\d]+/g)) && 3 <= o.length && (e = o[0] + "." + o[1] + " r" + o[2]), 
        e || void 0;
    }
    function f(e, t, n) {
        "none" == t && (t = "");
        var r = [], o = X(e);
        e = "__utma" == e ? 6 : 2;
        for (var i = 0; i < o.length; i++) {
            var a = ("" + o[i]).split(".");
            a.length >= e && r.push({
                hash: a[0],
                R: o[i],
                O: a
            });
        }
        if (0 != r.length) return 1 == r.length ? r[0] : h(t, r) || h(n, r) || h(null, r) || r[0];
    }
    function h(e, t) {
        if (null == e) var n = e = 1; else n = w(e), e = w(E(e, ".") ? e.substring(1) : "." + e);
        for (var r = 0; r < t.length; r++) if (t[r].hash == n || t[r].hash == e) return t[r];
    }
    function g(e) {
        var t = e.get(Ot);
        if (e.get(tn)) {
            var n = e.get(en);
            return e = v(n + t, 0), "_ga=2." + I(e + "." + n + "-" + t);
        }
        return e = v(t, 0), "_ga=1." + I(e + "." + t);
    }
    function m(e, t) {
        var n = new Date(), r = z.navigator, o = r.plugins || [];
        for (e = [ e, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t ], 
        t = 0; t < o.length; ++t) e.push(o[t].description);
        return w(e.join("."));
    }
    function v(e, t) {
        var n = new Date(), r = z.navigator;
        return w([ e, r.userAgent, r.language || "", n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t ].join("."));
    }
    function b(e, t) {
        if (t == W.location.hostname) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] instanceof RegExp) {
            if (e[n].test(t)) return !0;
        } else if (0 <= t.indexOf(e[n])) return !0;
        return !1;
    }
    function y(e) {
        return 0 <= e.indexOf(".") || 0 <= e.indexOf(":");
    }
    function w(e) {
        var t, n = 1;
        if (e) for (n = 0, t = e.length - 1; 0 <= t; t--) {
            var r = e.charCodeAt(t);
            n = (n << 6 & 268435455) + r + (r << 14), r = 266338304 & n, n = 0 != r ? n ^ r >> 21 : n;
        }
        return n;
    }
    var x = function(e) {
        this.w = e || [];
    };
    x.prototype.set = function(e) {
        this.w[e] = !0;
    }, x.prototype.encode = function() {
        for (var e = [], t = 0; t < this.w.length; t++) this.w[t] && (e[Math.floor(t / 6)] ^= 1 << t % 6);
        for (t = 0; t < e.length; t++) e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t] || 0);
        return e.join("") + "~";
    };
    var U = new x(), C = function(e, t) {
        var n = new x(k(e));
        n.set(t), e.set(yt, n.w);
    }, T = function(e) {
        e = k(e), e = new x(e);
        for (var t = U.w.slice(), n = 0; n < e.w.length; n++) t[n] = t[n] || e.w[n];
        return new x(t).encode();
    }, k = function(e) {
        return e = e.get(yt), N(e) || (e = []), e;
    }, $ = function(e) {
        return "function" == typeof e;
    }, N = function(e) {
        return "[object Array]" == Object.prototype.toString.call(Object(e));
    }, S = function(e) {
        return void 0 != e && -1 < (e.constructor + "").indexOf("String");
    }, E = function(e, t) {
        return 0 == e.indexOf(t);
    }, j = function(e) {
        return e ? e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    }, A = function() {
        for (var e = z.navigator.userAgent + (W.cookie ? W.cookie : "") + (W.referrer ? W.referrer : ""), t = e.length, n = z.history.length; 0 < n; ) e += n-- ^ t++;
        return [ le() ^ 2147483647 & w(e), Math.round(new Date().getTime() / 1e3) ].join(".");
    }, P = function(e) {
        var t = W.createElement("img");
        return t.width = 1, t.height = 1, t.src = e, t;
    }, _ = function() {}, I = function(t) {
        return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (e(28), 
        t);
    }, L = function(t, n, r, o) {
        try {
            t.addEventListener ? t.addEventListener(n, r, !!o) : t.attachEvent && t.attachEvent("on" + n, r);
        } catch (i) {
            e(27);
        }
    }, D = /^[\w\-:\/.?=&%!]+$/, H = function(e, t, n, r) {
        e && (n ? (r = "", t && D.test(t) && (r = ' id="' + t + '"'), D.test(e) && W.write("<script" + r + ' src="' + e + '"></script>')) : (n = W.createElement("script"), 
        n.type = "text/javascript", n.async = !0, n.src = e, r && (n.onload = r), t && (n.id = t), 
        e = W.getElementsByTagName("script")[0], e.parentNode.insertBefore(n, e)));
    }, O = function() {
        return "https:" == W.location.protocol;
    }, M = function(e, t) {
        return (e = e.match("(?:&|#|\\?)" + I(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == e.length ? e[1] : "";
    }, F = function() {
        var e = "" + W.location.hostname;
        return 0 == e.indexOf("www.") ? e.substring(4) : e;
    }, R = function(e) {
        var t = W.referrer;
        if (/^https?:\/\//i.test(t)) {
            if (e) return t;
            e = "//" + W.location.hostname;
            var n = t.indexOf(e);
            if ((5 == n || 6 == n) && (e = t.charAt(n + e.length), "/" == e || "?" == e || "" == e || ":" == e)) return;
            return t;
        }
    }, q = function(e, t) {
        if (1 == t.length && null != t[0] && "object" == typeof t[0]) return t[0];
        for (var n = {}, r = Math.min(e.length + 1, t.length), o = 0; o < r; o++) {
            if ("object" == typeof t[o]) {
                for (var i in t[o]) t[o].hasOwnProperty(i) && (n[i] = t[o][i]);
                break;
            }
            o < e.length && (n[e[o]] = t[o]);
        }
        return n;
    }, B = function() {
        this.keys = [], this.values = {}, this.m = {};
    };
    B.prototype.set = function(e, t, n) {
        this.keys.push(e), n ? this.m[":" + e] = t : this.values[":" + e] = t;
    }, B.prototype.get = function(e) {
        return this.m.hasOwnProperty(":" + e) ? this.m[":" + e] : this.values[":" + e];
    }, B.prototype.map = function(e) {
        for (var t = 0; t < this.keys.length; t++) {
            var n = this.keys[t], r = this.get(n);
            r && e(n, r);
        }
    };
    var z = window, W = document, V = window, G = function(e) {
        var t = V._gaUserPrefs;
        if (t && t.ioo && t.ioo() || e && !0 === V["ga-disable-" + e]) return !0;
        try {
            var n = V.external;
            if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0;
        } catch (r) {}
        return !1;
    }, X = function(e) {
        var t = [], n = W.cookie.split(";");
        e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
        for (var r = 0; r < n.length; r++) {
            var o = n[r].match(e);
            o && t.push(o[1]);
        }
        return t;
    }, Q = function(t, n, r, o, i, a) {
        if (i = !G(i) && !(Z.test(W.location.hostname) || "/" == r && K.test(o)), !i) return !1;
        if (n && 1200 < n.length && (n = n.substring(0, 1200), e(24)), r = t + "=" + n + "; path=" + r + "; ", 
        a && (r += "expires=" + new Date(new Date().getTime() + a).toGMTString() + "; "), 
        o && "none" != o && (r += "domain=" + o + ";"), o = W.cookie, W.cookie = r, !(o = o != W.cookie)) e: {
            for (t = X(t), o = 0; o < t.length; o++) if (n == t[o]) {
                o = !0;
                break e;
            }
            o = !1;
        }
        return o;
    }, Y = function(e) {
        return I(e).replace(/\(/g, "%28").replace(/\)/g, "%29");
    }, K = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Z = /(^|\.)doubleclick\.net$/i, J = function() {
        return (Te || O() ? "https:" : "http:") + "//www.google-analytics.com";
    }, ee = function(e) {
        this.name = "len", this.message = e + "-8192";
    }, te = function(e, t, n) {
        if (n = n || _, 2036 >= t.length) ne(e, t, n); else {
            if (!(8192 >= t.length)) throw ie("len", t.length), new ee(t.length);
            oe(e, t, n) || re(e, t, n) || ne(e, t, n);
        }
    }, ne = function(e, t, n) {
        var r = P(e + "?" + t);
        r.onload = r.onerror = function() {
            r.onload = null, r.onerror = null, n();
        };
    }, re = function(e, t, n) {
        var r = z.XMLHttpRequest;
        if (!r) return !1;
        var o = new r();
        return "withCredentials" in o && (e = e.replace(/^http:/, "https:"), o.open("POST", e, !0), 
        o.withCredentials = !0, o.setRequestHeader("Content-Type", "text/plain"), o.onreadystatechange = function() {
            4 == o.readyState && (n(), o = null);
        }, o.send(t), !0);
    }, oe = function(e, t, n) {
        return !!z.navigator.sendBeacon && (!!z.navigator.sendBeacon(e, t) && (n(), !0));
    }, ie = function(e, t, n) {
        1 <= 100 * Math.random() || G("?") || (e = [ "t=error", "_e=" + e, "_v=j56", "sr=1" ], 
        t && e.push("_f=" + t), n && e.push("_m=" + I(n.substring(0, 100))), e.push("aip=1"), 
        e.push("z=" + le()), ne(J() + "/collect", e.join("&"), _));
    }, ae = function(e) {
        var t = z.gaData = z.gaData || {};
        return t[e] = t[e] || {};
    }, se = function() {
        this.M = [];
    };
    se.prototype.add = function(e) {
        this.M.push(e);
    }, se.prototype.D = function(e) {
        try {
            for (var t = 0; t < this.M.length; t++) {
                var n = e.get(this.M[t]);
                n && $(n) && n.call(z, e);
            }
        } catch (r) {}
        t = e.get(Ee), t != _ && $(t) && (e.set(Ee, _, !0), setTimeout(t, 10));
    };
    var le = function() {
        return Math.round(2147483647 * Math.random());
    }, ce = function() {
        try {
            var e = new Uint32Array(1);
            return z.crypto.getRandomValues(e), 2147483647 & e[0];
        } catch (t) {
            return le();
        }
    }, ue = function() {
        this.data = new B();
    }, de = new B(), pe = [];
    ue.prototype.get = function(e) {
        var t = ve(e), n = this.data.get(e);
        return t && void 0 == n && (n = $(t.defaultValue) ? t.defaultValue() : t.defaultValue), 
        t && t.Z ? t.Z(this, e, n) : n;
    };
    var fe = function(e, t) {
        return e = e.get(t), void 0 == e ? "" : "" + e;
    }, he = function(e, t) {
        return e = e.get(t), void 0 == e || "" === e ? 0 : 1 * e;
    };
    ue.prototype.set = function(e, t, n) {
        if (e) if ("object" == typeof e) for (var r in e) e.hasOwnProperty(r) && ge(this, r, e[r], n); else ge(this, e, t, n);
    };
    var ge = function(e, t, n, r) {
        if (void 0 != n) switch (t) {
          case Rt:
            Xn.test(n);
        }
        var o = ve(t);
        o && o.o ? o.o(e, t, n, r) : e.data.set(t, n, r);
    }, me = function(e, t, n, r, o) {
        this.name = e, this.F = t, this.Z = r, this.o = o, this.defaultValue = n;
    }, ve = function(e) {
        var t = de.get(e);
        if (!t) for (var n = 0; n < pe.length; n++) {
            var r = pe[n], o = r[0].exec(e);
            if (o) {
                t = r[1](o), de.set(t.name, t);
                break;
            }
        }
        return t;
    }, be = function(e) {
        var t;
        return de.map(function(n, r) {
            r.F == e && (t = r);
        }), t && t.name;
    }, ye = function(e, t, n, r, o) {
        return e = new me(e, t, n, r, o), de.set(e.name, e), e.name;
    }, we = function(e, t) {
        pe.push([ new RegExp("^" + e + "$"), t ]);
    }, xe = function(e, t, n) {
        return ye(e, t, n, void 0, Ue);
    }, Ue = function() {}, Ce = S(window.GoogleAnalyticsObject) && j(window.GoogleAnalyticsObject) || "ga", Te = !1, ke = xe("apiVersion", "v"), $e = xe("clientVersion", "_v");
    ye("anonymizeIp", "aip");
    var Ne = ye("adSenseId", "a"), Se = ye("hitType", "t"), Ee = ye("hitCallback"), je = ye("hitPayload");
    ye("nonInteraction", "ni"), ye("currencyCode", "cu"), ye("dataSource", "ds");
    var Ae = ye("useBeacon", void 0, !1), Pe = ye("transport");
    ye("sessionControl", "sc", ""), ye("sessionGroup", "sg"), ye("queueTime", "qt");
    var _e = ye("_s", "_s");
    ye("screenName", "cd");
    var Ie = ye("location", "dl", ""), Le = ye("referrer", "dr"), De = ye("page", "dp", "");
    ye("hostname", "dh");
    var He = ye("language", "ul"), Oe = ye("encoding", "de");
    ye("title", "dt", function() {
        return W.title || void 0;
    }), we("contentGroup([0-9]+)", function(e) {
        return new me(e[0], "cg" + e[1]);
    });
    var Me = ye("screenColors", "sd"), Fe = ye("screenResolution", "sr"), Re = ye("viewportSize", "vp"), qe = ye("javaEnabled", "je"), Be = ye("flashVersion", "fl");
    ye("campaignId", "ci"), ye("campaignName", "cn"), ye("campaignSource", "cs"), ye("campaignMedium", "cm"), 
    ye("campaignKeyword", "ck"), ye("campaignContent", "cc");
    var ze = ye("eventCategory", "ec"), We = ye("eventAction", "ea"), Ve = ye("eventLabel", "el"), Ge = ye("eventValue", "ev"), Xe = ye("socialNetwork", "sn"), Qe = ye("socialAction", "sa"), Ye = ye("socialTarget", "st"), Ke = ye("l1", "plt"), Ze = ye("l2", "pdt"), Je = ye("l3", "dns"), et = ye("l4", "rrt"), tt = ye("l5", "srt"), nt = ye("l6", "tcp"), rt = ye("l7", "dit"), ot = ye("l8", "clt"), it = ye("timingCategory", "utc"), at = ye("timingVar", "utv"), st = ye("timingLabel", "utl"), lt = ye("timingValue", "utt");
    ye("appName", "an"), ye("appVersion", "av", ""), ye("appId", "aid", ""), ye("appInstallerId", "aiid", ""), 
    ye("exDescription", "exd"), ye("exFatal", "exf");
    var ct = ye("expId", "xid"), ut = ye("expVar", "xvar"), dt = ye("exp", "exp"), pt = ye("_utma", "_utma"), ft = ye("_utmz", "_utmz"), ht = ye("_utmht", "_utmht"), gt = ye("_hc", void 0, 0), mt = ye("_ti", void 0, 0), vt = ye("_to", void 0, 20);
    we("dimension([0-9]+)", function(e) {
        return new me(e[0], "cd" + e[1]);
    }), we("metric([0-9]+)", function(e) {
        return new me(e[0], "cm" + e[1]);
    }), ye("linkerParam", void 0, void 0, g, Ue);
    var bt = ye("usage", "_u"), yt = ye("_um");
    ye("forceSSL", void 0, void 0, function() {
        return Te;
    }, function(t, n, r) {
        e(34), Te = !!r;
    });
    var wt = ye("_j1", "jid"), xt = ye("_j2", "gjid");
    we("\\&(.*)", function(e) {
        var t = new me(e[0], e[1]), n = be(e[0].substring(1));
        return n && (t.Z = function(e) {
            return e.get(n);
        }, t.o = function(e, t, r, o) {
            e.set(n, r, o);
        }, t.F = void 0), t;
    });
    var Ut = xe("_oot"), Ct = ye("previewTask"), Tt = ye("checkProtocolTask"), kt = ye("validationTask"), $t = ye("checkStorageTask"), Nt = ye("historyImportTask"), St = ye("samplerTask"), Et = ye("_rlt"), jt = ye("buildHitTask"), At = ye("sendHitTask"), Pt = ye("ceTask"), _t = ye("devIdTask"), It = ye("timingTask"), Lt = ye("displayFeaturesTask"), Dt = ye("customTask"), Ht = xe("name"), Ot = xe("clientId", "cid"), Mt = xe("clientIdTime"), Ft = ye("userId", "uid"), Rt = xe("trackingId", "tid"), qt = xe("cookieName", void 0, "_ga"), Bt = xe("cookieDomain"), zt = xe("cookiePath", void 0, "/"), Wt = xe("cookieExpires", void 0, 63072e3), Vt = xe("legacyCookieDomain"), Gt = xe("legacyHistoryImport", void 0, !0), Xt = xe("storage", void 0, "cookie"), Qt = xe("allowLinker", void 0, !1), Yt = xe("allowAnchor", void 0, !0), Kt = xe("sampleRate", "sf", 100), Zt = xe("siteSpeedSampleRate", void 0, 1), Jt = xe("alwaysSendReferrer", void 0, !1), en = xe("_gid", "_gid"), tn = xe("_ge"), nn = xe("_gcn"), rn = ye("transportUrl"), on = ye("_r", "_r"), an = function(e, t, n) {
        this.V = e, this.fa = t, this.$ = !1, this.oa = n, this.ea = 1;
    }, sn = function(e, t, n) {
        if (e.fa && e.$) return 0;
        if (e.$ = !0, t) {
            if (e.oa && he(t, e.oa)) return he(t, e.oa);
            if (0 == t.get(Zt)) return 0;
        }
        return 0 == e.V ? 0 : (void 0 === n && (n = ce()), 0 == n % e.V ? Math.floor(n / e.V) % e.ea + 1 : 0);
    }, ln = function(e) {
        var t = Math.min(he(e, Zt), 100);
        return !(w(fe(e, Ot)) % 100 >= t);
    }, cn = function(e) {
        var t = {};
        if (un(t) || dn(t)) {
            var n = t[Ke];
            void 0 == n || 1 / 0 == n || isNaN(n) || (0 < n ? (pn(t, Je), pn(t, nt), pn(t, tt), 
            pn(t, Ze), pn(t, et), pn(t, rt), pn(t, ot), setTimeout(function() {
                e(t);
            }, 10)) : L(z, "load", function() {
                cn(e);
            }, !1));
        }
    }, un = function(e) {
        var t = z.performance || z.webkitPerformance, t = t && t.timing;
        if (!t) return !1;
        var n = t.navigationStart;
        return 0 != n && (e[Ke] = t.loadEventStart - n, e[Je] = t.domainLookupEnd - t.domainLookupStart, 
        e[nt] = t.connectEnd - t.connectStart, e[tt] = t.responseStart - t.requestStart, 
        e[Ze] = t.responseEnd - t.responseStart, e[et] = t.fetchStart - n, e[rt] = t.domInteractive - n, 
        e[ot] = t.domContentLoadedEventStart - n, !0);
    }, dn = function(e) {
        if (z.top != z) return !1;
        var t = z.external, n = t && t.onloadT;
        return t && !t.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 
        0 < n && t.setPageReadyTime(), void 0 != n && (e[Ke] = n, !0);
    }, pn = function(e, t) {
        var n = e[t];
        (isNaN(n) || 1 / 0 == n || 0 > n) && (e[t] = void 0);
    }, fn = function(e) {
        return function(t) {
            if ("pageview" == t.get(Se) && !e.I) {
                e.I = !0;
                var n = ln(t);
                t = 0 < M(t.get(Ie), "gclid").length, (n || t) && cn(function(t) {
                    e.send(n ? "timing" : "adtiming", t);
                });
            }
        };
    }, hn = !1, gn = function(e) {
        "cookie" == fe(e, Xt) && (mn(e, Ot, qt), e.get(tn) && mn(e, en, nn, 864e5));
    }, mn = function(t, n, r, o) {
        var i = yn(t, n);
        if (i) {
            r = fe(t, r), n = Cn(fe(t, zt));
            var a = Un(fe(t, Bt));
            o = o || 1e3 * he(t, Wt);
            var s = fe(t, Rt);
            if ("auto" != a) Q(r, i, n, a, s, o) && (hn = !0); else {
                e(32);
                e: {
                    if (i = [], a = F().split("."), 4 == a.length) {
                        var l = a[a.length - 1];
                        if (parseInt(l, 10) == l) {
                            l = [ "none" ];
                            break e;
                        }
                    }
                    for (l = a.length - 2; 0 <= l; l--) i.push(a.slice(l).join("."));
                    i.push("none"), l = i;
                }
                for (var c = 0; c < l.length; c++) if (a = l[c], t.data.set(Bt, a), i = yn(t, Ot), 
                Q(r, i, n, a, s, o)) return void (hn = !0);
                t.data.set(Bt, "auto");
            }
        } else t.get(tn) || e(54);
    }, vn = function(e) {
        if ("cookie" == fe(e, Xt) && !hn && (gn(e), !hn)) throw "abort";
    }, bn = function(t) {
        if (t.get(Gt)) {
            var n = fe(t, Bt), r = fe(t, Vt) || F(), o = f("__utma", r, n);
            o && (e(19), t.set(ht, new Date().getTime(), !0), t.set(pt, o.R), (n = f("__utmz", r, n)) && o.hash == n.hash && t.set(ft, n.R));
        }
    }, yn = function(e, t) {
        t = Y(fe(e, t));
        var n = Un(fe(e, Bt)).split(".").length;
        return e = Tn(fe(e, zt)), 1 < e && (n += "-" + e), t ? [ "GA1", n, t ].join(".") : "";
    }, wn = function(t, n) {
        if (!n || 1 > n.length) e(12); else {
            for (var r = [], o = 0; o < n.length; o++) {
                var i = n[o], a = i.split("."), s = a.shift();
                ("GA1" == s || "1" == s) && 1 < a.length ? (i = a.shift().split("-"), 1 == i.length && (i[1] = "1"), 
                i[0] *= 1, i[1] *= 1, a = {
                    H: i,
                    s: a.join(".")
                }) : a = /^amp-/.test(i) ? {
                    H: [ 0, 0 ],
                    s: i
                } : void 0, a && r.push(a);
            }
            if (1 == r.length) return e(13), r[0].s;
            if (0 != r.length) return e(14), n = Un(fe(t, Bt)).split(".").length, r = xn(r, n, 0), 
            1 == r.length ? r[0].s : (t = Tn(fe(t, zt)), r = xn(r, t, 1), 1 < r.length && e(41), 
            r[0] && r[0].s);
            e(12);
        }
    }, xn = function(e, t, n) {
        for (var r, o = [], i = [], a = 0; a < e.length; a++) {
            var s = e[a];
            s.H[n] == t ? o.push(s) : void 0 == r || s.H[n] < r ? (i = [ s ], r = s.H[n]) : s.H[n] == r && i.push(s);
        }
        return 0 < o.length ? o : i;
    }, Un = function(e) {
        return 0 == e.indexOf(".") ? e.substr(1) : e;
    }, Cn = function(e) {
        return e ? (1 < e.length && e.lastIndexOf("/") == e.length - 1 && (e = e.substr(0, e.length - 1)), 
        0 != e.indexOf("/") && (e = "/" + e), e) : "/";
    }, Tn = function(e) {
        return e = Cn(e), "/" == e ? 1 : e.split("/").length;
    }, kn = new RegExp(/^https?:\/\/([^\/:]+)/), $n = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/, Nn = function(t) {
        e(48), this.target = t, this.T = !1;
    };
    Nn.prototype.ca = function(e, t) {
        if (e.tagName) {
            if ("a" == e.tagName.toLowerCase()) return void (e.href && (e.href = Sn(this, e.href, t)));
            if ("form" == e.tagName.toLowerCase()) return En(this, e);
        }
        if ("string" == typeof e) return Sn(this, e, t);
    };
    var Sn = function(e, t, n) {
        var r = $n.exec(t);
        r && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")), e = e.target.get("linkerParam");
        var o = t.indexOf("?"), r = t.indexOf("#");
        return n ? t += (-1 == r ? "#" : "&") + e : (n = -1 == o ? "?" : "&", t = -1 == r ? t + (n + e) : t.substring(0, r) + n + e + t.substring(r)), 
        t = t.replace(/&+_ga=/, "&_ga=");
    }, En = function(e, t) {
        if (t && t.action) if ("get" == t.method.toLowerCase()) {
            e = e.target.get("linkerParam").split("=")[1];
            for (var n = t.childNodes || [], r = 0; r < n.length; r++) if ("_ga" == n[r].name) return void n[r].setAttribute("value", e);
            n = W.createElement("input"), n.setAttribute("type", "hidden"), n.setAttribute("name", "_ga"), 
            n.setAttribute("value", e), t.appendChild(n);
        } else "post" == t.method.toLowerCase() && (t.action = Sn(e, t.action));
    };
    Nn.prototype.S = function(t, n, r) {
        function o(r) {
            try {
                r = r || z.event;
                e: {
                    var o = r.target || r.srcElement;
                    for (r = 100; o && 0 < r; ) {
                        if (o.href && o.nodeName.match(/^a(?:rea)?$/i)) {
                            var a = o;
                            break e;
                        }
                        o = o.parentNode, r--;
                    }
                    a = {};
                }
                ("http:" == a.protocol || "https:" == a.protocol) && b(t, a.hostname || "") && a.href && (a.href = Sn(i, a.href, n));
            } catch (s) {
                e(26);
            }
        }
        var i = this;
        this.T || (this.T = !0, L(W, "mousedown", o, !1), L(W, "keyup", o, !1)), r && L(W, "submit", function(e) {
            if (e = e || z.event, (e = e.target || e.srcElement) && e.action) {
                var n = e.action.match(kn);
                n && b(t, n[1]) && En(i, e);
            }
        });
    };
    var jn, An = /^(GTM|OPT)-[A-Z0-9]+$/, Pn = /;_gaexp=[^;]*/g, _n = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g, In = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/, Ln = function(e) {
        function t(e, t) {
            t && (n += "&" + e + "=" + I(t));
        }
        var n = "https://www.google-analytics.com/gtm/js?id=" + I(e.id);
        return "dataLayer" != e.B && t("l", e.B), t("t", e.target), t("cid", e.clientId), 
        t("cidt", e.ka), t("gac", e.la), t("aip", e.ia), e.sync && t("m", "sync"), t("cycle", e.G), 
        e.qa && t("gclid", e.qa), In.test(W.referrer) && t("cb", String(le())), n;
    }, Dn = function(e, t, n) {
        this.U = wt, this.aa = t, (t = n) || (t = (t = fe(e, Ht)) && "t0" != t ? Rn.test(t) ? "_gat_" + Y(fe(e, Rt)) : "_gat_" + Y(t) : "_gat"), 
        this.Y = t;
    }, Hn = function(e, t) {
        var n = t.get(jt);
        t.set(jt, function(t) {
            On(e, t, e.U), On(e, t, xt);
            var r = n(t);
            return Mn(e, t), r;
        });
        var r = t.get(At);
        t.set(At, function(t) {
            var n = r(t);
            return Fn(e, t), n;
        });
    }, On = function(e, t, n) {
        t.get(n) || ("1" == X(e.Y)[0] ? t.set(n, "", !0) : t.set(n, "" + le(), !0));
    }, Mn = function(e, t) {
        t.get(e.U) && Q(e.Y, "1", t.get(zt), t.get(Bt), t.get(Rt), 6e4);
    }, Fn = function(e, t) {
        if (t.get(e.U)) {
            var n = new B(), r = function(e) {
                ve(e).F && n.set(ve(e).F, t.get(e));
            };
            r(ke), r($e), r(Rt), r(Ot), r(Ft), r(e.U), r(xt), r(en), n.set(ve(bt).F, T(t));
            var o = e.aa;
            n.map(function(e, t) {
                o += I(e) + "=", o += I("" + t) + "&";
            }), o += "z=" + le(), P(o), t.set(e.U, "", !0);
        }
    }, Rn = /^gtm\d+$/, qn = function(e, t) {
        if (e = e.b, !e.get("dcLoaded")) {
            C(e, 29), t = t || {};
            var n;
            t[qt] && (n = Y(t[qt])), t = new Dn(e, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), 
            Hn(t, e), e.set("dcLoaded", !0);
        }
    }, Bn = function(e) {
        if (!e.get("dcLoaded") && "cookie" == e.get(Xt)) {
            C(e, 51);
            var t = new Dn(e);
            On(t, e, t.U), On(t, e, xt), Mn(t, e), e.get(t.U) && (e.set(on, 1, !0), e.set(rn, J() + "/r/collect", !0));
        }
    }, zn = function() {
        var e = z.gaGlobal = z.gaGlobal || {};
        return e.hid = e.hid || le();
    }, Wn = function(e, t, n) {
        if (!jn) {
            var r = W.location.hash, o = z.name, i = /^#?gaso=([^&]*)/;
            (o = (r = (r = r && r.match(i) || o && o.match(i)) ? r[1] : X("GASO")[0] || "") && r.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (Q("GASO", "" + r, n, t, e, 0), 
            window._udo || (window._udo = t), window._utcp || (window._utcp = n), e = o[1], 
            H("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&" : "") + le(), "_gasojs")), 
            jn = !0;
        }
    }, Vn = function(e) {
        return e ? (1 * e).toFixed(3) : "0";
    }, Gn = function(t) {
        var n = z.performance;
        if (n && n.getEntriesByName) {
            e(35);
            var r = "https://www.google-analytics.com/analytics.js?wpid=" + t;
            H(r, void 0, void 0, function() {
                try {
                    var o = 1, i = n.getEntriesByName("https://www.google-analytics.com/analytics.js");
                    i && 0 != i.length || (i = n.getEntriesByName("http://www.google-analytics.com/analytics.js"), 
                    o = 0);
                    var a = n.getEntriesByName(r);
                    if (i && 1 == i.length && a && 1 == a.length) {
                        e(37);
                        var s = i[0], l = a[0], c = {
                            tid: t,
                            ad: Vn(s.duration),
                            bd: Vn(l.duration),
                            ar: Vn(s.responseEnd - s.requestStart),
                            br: Vn(l.responseEnd - l.requestStart),
                            an: Vn(s.domainLookupEnd - s.domainLookupStart),
                            bn: Vn(l.domainLookupEnd - l.domainLookupStart),
                            ac: Vn(s.connectEnd - s.connectStart),
                            bc: Vn(l.connectEnd - l.connectStart),
                            as: o
                        }, o = [];
                        o.push("_v=j56"), o.push("id=10");
                        for (var u in c) c.hasOwnProperty(u) && o.push(u + "=" + I(c[u]));
                        o.push("z=" + le()), ne("https://www.google-analytics.com/u/d", o.join("&"), _);
                    }
                } catch (d) {}
            });
        }
    }, Xn = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, Qn = function(e) {
        function d(e, t) {
            f.b.data.set(e, t);
        }
        function p(e, t) {
            d(e, t), f.filters.add(e);
        }
        var f = this;
        this.b = new ue(), this.filters = new se(), d(Ht, e[Ht]), d(Rt, j(e[Rt])), d(qt, e[qt]), 
        d(Bt, e[Bt] || F()), d(zt, e[zt]), d(Wt, e[Wt]), d(Vt, e[Vt]), d(Gt, e[Gt]), d(Qt, e[Qt]), 
        d(Yt, e[Yt]), d(Kt, e[Kt]), d(Zt, e[Zt]), d(Jt, e[Jt]), d(Xt, e[Xt]), d(Ft, e[Ft]), 
        d(Mt, e[Mt]), d(tn, e[tn]), d(ke, 1), d($e, "j56"), p(Ut, n), p(Dt, _), p(Ct, s), 
        p(Tt, r), p(kt, c), p($t, vn), p(Nt, bn), p(St, t), p(Et, u), p(Pt, a), p(_t, l), 
        p(Lt, Bn), p(jt, o), p(At, i), p(It, fn(this)), Yn(this.b, e[Ot]), Kn(this.b), this.b.set(Ne, zn()), 
        Wn(this.b.get(Rt), this.b.get(Bt), this.b.get(zt)), this.ra = new an(1e4, (!0), "gaexp10");
    }, Yn = function(t, n) {
        if (t.data.set(tn, t.get(tn) || 1 == sn(new an(1, (!0)), void 0, w(t.get(Ot)))), 
        t.get(tn)) {
            var r = fe(t, qt);
            t.data.set(nn, "_ga" == r ? "_gid" : r + "_gid");
        }
        if ("cookie" == fe(t, Xt)) {
            if (hn = !1, r = X(fe(t, qt)), !(r = wn(t, r))) {
                var r = fe(t, Bt), o = fe(t, Vt) || F();
                r = f("__utma", o, r), void 0 != r ? (e(10), r = r.O[1] + "." + r.O[2]) : r = void 0;
            }
            r && (t.data.set(Ot, r), r = X(fe(t, nn)), (r = wn(t, r)) && t.data.set(en, r), 
            hn = !0);
        }
        e: if (r = t.get(Yt), o = M(W.location[r ? "href" : "search"], "_ga")) if (t.get(Qt)) if (r = o.indexOf("."), 
        -1 == r) e(22); else {
            var i = o.substring(0, r), a = o.substring(r + 1), r = a.indexOf("."), o = a.substring(0, r), a = a.substring(r + 1);
            if ("1" == i) {
                if (r = a, o != m(r, 0) && o != m(r, -1) && o != m(r, -2) && o != v(r, 0) && o != v(r, -1) && o != v(r, -2)) {
                    e(23);
                    break e;
                }
            } else {
                if ("2" != i) {
                    e(22);
                    break e;
                }
                if (r = a.indexOf("-"), i = a.substring(0, r), r = a.substring(r + 1), o != m(i + r, 0) && o != m(i + r, -1) && o != m(i + r, -2) && o != v(i + r, 0) && o != v(i + r, -1) && o != v(i + r, -2)) {
                    e(53);
                    break e;
                }
                e(2), t.data.set(en, i);
            }
            e(11), t.data.set(Ot, r);
        } else e(21);
        n && (e(9), t.data.set(Ot, I(n))), t.get(Ot) || ((n = (n = z.gaGlobal && z.gaGlobal.vid) && -1 != n.search(/^(?:utma\.)?\d+\.\d+$/) ? n : void 0) ? (e(17), 
        t.data.set(Ot, n)) : (e(8), t.data.set(Ot, A()))), t.get(tn) && !t.get(en) && (e(3), 
        t.data.set(en, A())), gn(t);
    }, Kn = function(t) {
        var n = z.navigator, r = z.screen, o = W.location;
        if (t.set(Le, R(t.get(Jt))), o) {
            var i = o.pathname || "";
            "/" != i.charAt(0) && (e(31), i = "/" + i), t.set(Ie, o.protocol + "//" + o.hostname + i + o.search);
        }
        r && t.set(Fe, r.width + "x" + r.height), r && t.set(Me, r.colorDepth + "-bit");
        var r = W.documentElement, a = (i = W.body) && i.clientWidth && i.clientHeight, s = [];
        if (r && r.clientWidth && r.clientHeight && ("CSS1Compat" === W.compatMode || !a) ? s = [ r.clientWidth, r.clientHeight ] : a && (s = [ i.clientWidth, i.clientHeight ]), 
        r = 0 >= s[0] || 0 >= s[1] ? "" : s.join("x"), t.set(Re, r), t.set(Be, p()), t.set(Oe, W.characterSet || W.charset), 
        t.set(qe, n && "function" == typeof n.javaEnabled && n.javaEnabled() || !1), t.set(He, (n && (n.language || n.browserLanguage) || "").toLowerCase()), 
        o && t.get(Yt) && (n = W.location.hash)) {
            for (n = n.split(/[?&#]+/), o = [], r = 0; r < n.length; ++r) (E(n[r], "utm_id") || E(n[r], "utm_campaign") || E(n[r], "utm_source") || E(n[r], "utm_medium") || E(n[r], "utm_term") || E(n[r], "utm_content") || E(n[r], "gclid") || E(n[r], "dclid") || E(n[r], "gclsrc")) && o.push(n[r]);
            0 < o.length && (n = "#" + o.join("&"), t.set(Ie, t.get(Ie) + n));
        }
    };
    Qn.prototype.get = function(e) {
        return this.b.get(e);
    }, Qn.prototype.set = function(e, t) {
        this.b.set(e, t);
    };
    var Zn = {
        pageview: [ De ],
        event: [ ze, We, Ve, Ge ],
        social: [ Xe, Qe, Ye ],
        timing: [ it, at, lt, st ]
    };
    Qn.prototype.send = function(e) {
        if (!(1 > arguments.length)) {
            if ("string" == typeof arguments[0]) var t = arguments[0], n = [].slice.call(arguments, 1); else t = arguments[0] && arguments[0][Se], 
            n = arguments;
            t && (n = q(Zn[t] || [], n), n[Se] = t, this.b.set(n, void 0, !0), this.filters.D(this.b), 
            this.b.data.m = {}, sn(this.ra, this.b) && Gn(this.b.get(Rt)));
        }
    }, Qn.prototype.ma = function(e, t) {
        var n = this;
        sr(e, n, t) || (cr(e, function() {
            sr(e, n, t);
        }), lr(String(n.get(Ht)), e, void 0, t, !0));
    };
    var Jn, er, tr, nr, rr = function(e) {
        return "prerender" != W.visibilityState && (e(), !0);
    }, or = function(t) {
        if (!rr(t)) {
            e(16);
            var n = !1, r = function() {
                if (!n && rr(t)) {
                    n = !0;
                    var e = r, o = W;
                    o.removeEventListener ? o.removeEventListener("visibilitychange", e, !1) : o.detachEvent && o.detachEvent("onvisibilitychange", e);
                }
            };
            L(W, "visibilitychange", r);
        }
    }, ir = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, ar = function(e) {
        if ($(e[0])) this.u = e[0]; else {
            var t = ir.exec(e[0]);
            if (null != t && 4 == t.length && (this.c = t[1] || "t0", this.K = t[2] || "", this.C = t[3], 
            this.a = [].slice.call(e, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, 
            this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], 
            this.W = this.a[2]) : this.a[1] && (S(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), 
            t = e[1], e = e[2], !this.C) throw "abort";
            if (this.i && (!S(t) || "" == t)) throw "abort";
            if (this.g && (!S(t) || "" == t || !$(e))) throw "abort";
            if (y(this.c) || y(this.K)) throw "abort";
            if (this.g && "t0" != this.c) throw "abort";
        }
    };
    Jn = new B(), tr = new B(), nr = new B(), er = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var sr = function(e, t, n) {
        t == hr || t.get(Ht);
        var r = Jn.get(e);
        return !!$(r) && (t.plugins_ = t.plugins_ || new B(), !!t.plugins_.get(e) || (t.plugins_.set(e, new r(t, n || {})), 
        !0));
    }, lr = function(t, n, r, o, i) {
        if (!$(Jn.get(n)) && !tr.get(n)) {
            if (er.hasOwnProperty(n) && e(er[n]), An.test(n)) {
                if (e(52), t = hr.j(t), !t) return !0;
                r = o || {}, o = {
                    id: n,
                    B: r.dataLayer || "dataLayer",
                    ia: !!t.get("anonymizeIp"),
                    sync: i,
                    G: !1
                }, t.get("&gtm") == n && (o.G = !0);
                var a = String(t.get("name"));
                "t0" != a && (o.target = a), G(String(t.get("trackingId"))) || (o.clientId = String(t.get(Ot)), 
                o.ka = Number(t.get(Mt)), r = r.palindrome ? _n : Pn, r = (r = W.cookie.replace(/^|(; +)/g, ";").match(r)) ? r.sort().join("").substring(1) : void 0, 
                o.la = r, o.qa = M(t.b.get(Ie) || "", "gclid")), t = o.B, r = new Date().getTime(), 
                z[t] = z[t] || [], r = {
                    "gtm.start": r
                }, i || (r.event = "gtm.js"), z[t].push(r), r = Ln(o);
            }
            !r && er.hasOwnProperty(n) ? (e(39), r = n + ".js") : e(43), r && (r && 0 <= r.indexOf("/") || (r = (Te || O() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + r), 
            o = pr(r), t = o.protocol, r = W.location.protocol, ("https:" == t || t == r || ("http:" != t ? 0 : "http:" == r)) && dr(o) && (H(o.url, void 0, i), 
            tr.set(n, !0)));
        }
    }, cr = function(e, t) {
        var n = nr.get(e) || [];
        n.push(t), nr.set(e, n);
    }, ur = function(e, t) {
        Jn.set(e, t), t = nr.get(e) || [];
        for (var n = 0; n < t.length; n++) t[n]();
        nr.set(e, []);
    }, dr = function(e) {
        var t = pr(W.location.href);
        return !!E(e.url, "https://www.google-analytics.com/gtm/js?id=") || !(e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) && (e.host == t.host && e.port == t.port || (t = "http:" == e.protocol ? 80 : 443, 
        !("www.google-analytics.com" != e.host || (e.port || t) != t || !E(e.path, "/plugins/"))));
    }, pr = function(e) {
        function t(e) {
            var t = (e.hostname || "").split(":")[0].toLowerCase(), n = (e.protocol || "").toLowerCase(), n = 1 * e.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
            return e = e.pathname || "", E(e, "/") || (e = "/" + e), [ t, "" + n, e ];
        }
        var n = W.createElement("a");
        n.href = W.location.href;
        var r = (n.protocol || "").toLowerCase(), o = t(n), i = n.search || "", a = r + "//" + o[0] + (o[1] ? ":" + o[1] : "");
        return E(e, "//") ? e = r + e : E(e, "/") ? e = a + e : !e || E(e, "?") ? e = a + o[2] + (e || i) : 0 > e.split("/")[0].indexOf(":") && (e = a + o[2].substring(0, o[2].lastIndexOf("/")) + "/" + e), 
        n.href = e, r = t(n), {
            protocol: (n.protocol || "").toLowerCase(),
            host: r[0],
            port: r[1],
            path: r[2],
            query: n.search || "",
            url: e || ""
        };
    }, fr = {
        ga: function() {
            fr.f = [];
        }
    };
    fr.ga(), fr.D = function(e) {
        var t = fr.J.apply(fr, arguments), t = fr.f.concat(t);
        for (fr.f = []; 0 < t.length && !fr.v(t[0]) && (t.shift(), !(0 < fr.f.length)); ) ;
        fr.f = fr.f.concat(t);
    }, fr.J = function(e) {
        for (var t, n = [], r = 0; r < arguments.length; r++) try {
            t = new ar(arguments[r]), t.g ? ur(t.a[0], t.a[1]) : (t.i && (t.ha = lr(t.c, t.a[0], t.X, t.W)), 
            n.push(t));
        } catch (o) {}
        return n;
    }, fr.v = function(e) {
        try {
            if (e.u) e.u.call(z, hr.j("t0")); else {
                var t = e.c == Ce ? hr : hr.j(e.c);
                if (e.A) "t0" != e.c || hr.create.apply(hr, e.a); else if (e.ba) hr.remove(e.c); else if (t) if (e.i) {
                    if (e.ha && (e.ha = lr(e.c, e.a[0], e.X, e.W)), !sr(e.a[0], t, e.W)) return !0;
                } else if (e.K) {
                    var n = e.C, r = e.a, o = t.plugins_.get(e.K);
                    o[n].apply(o, r);
                } else t[e.C].apply(t, e.a);
            }
        } catch (i) {}
    };
    var hr = function(t) {
        e(1), fr.D.apply(fr, [ arguments ]);
    };
    hr.h = {}, hr.P = [], hr.L = 0, hr.answer = 42;
    var gr = [ Rt, Bt, Ht ];
    hr.create = function(e) {
        var t = q(gr, [].slice.call(arguments));
        t[Ht] || (t[Ht] = "t0");
        var n = "" + t[Ht];
        return hr.h[n] ? hr.h[n] : (t = new Qn(t), hr.h[n] = t, hr.P.push(t), t);
    }, hr.remove = function(e) {
        for (var t = 0; t < hr.P.length; t++) if (hr.P[t].get(Ht) == e) {
            hr.P.splice(t, 1), hr.h[e] = null;
            break;
        }
    }, hr.j = function(e) {
        return hr.h[e];
    }, hr.getAll = function() {
        return hr.P.slice(0);
    }, hr.N = function() {
        "ga" != Ce && e(49);
        var t = z[Ce];
        if (!t || 42 != t.answer) {
            hr.L = t && t.l, hr.loaded = !0;
            var n = z[Ce] = hr;
            if (d("create", n, n.create), d("remove", n, n.remove), d("getByName", n, n.j, 5), 
            d("getAll", n, n.getAll, 6), n = Qn.prototype, d("get", n, n.get, 7), d("set", n, n.set, 4), 
            d("send", n, n.send), d("requireSync", n, n.ma), n = ue.prototype, d("get", n, n.get), 
            d("set", n, n.set), !O() && !Te) {
                e: {
                    for (var n = W.getElementsByTagName("script"), r = 0; r < n.length && 100 > r; r++) {
                        var o = n[r].src;
                        if (o && 0 == o.indexOf("https://www.google-analytics.com/analytics")) {
                            e(33), n = !0;
                            break e;
                        }
                    }
                    n = !1;
                }
                n && (Te = !0);
            }
            O() || Te || !sn(new an(1e4)) || (e(36), Te = !0), (z.gaplugins = z.gaplugins || {}).Linker = Nn, 
            n = Nn.prototype, ur("linker", Nn), d("decorate", n, n.ca, 20), d("autoLink", n, n.S, 25), 
            ur("displayfeatures", qn), ur("adfeatures", qn), t = t && t.q, N(t) ? fr.D.apply(hr, t) : e(50);
        }
    }, hr.da = function() {
        for (var e = hr.getAll(), t = 0; t < e.length; t++) e[t].get(Ht);
    };
    var mr = hr.N, vr = z[Ce];
    vr && vr.r ? mr() : or(mr), or(function() {
        fr.D([ "provide", "render", _ ]);
    });
}(window), jQuery.fn.sortElements = function() {
    var e = [].sort;
    return function(t, n) {
        n = n || function() {
            return this;
        };
        var r = this.map(function() {
            var e = n.call(this), t = e.parentNode, r = t.insertBefore(document.createTextNode(""), e.nextSibling);
            return function() {
                if (t === this) throw new Error("You can't sort elements if any one is a descendant of another.");
                t.insertBefore(this, r), t.removeChild(r);
            };
        });
        return e.call(this, t).each(function(e) {
            r[e].call(n.call(this));
        });
    };
}(), function(e, t, n, r) {
    "use strict";
    function o(t, n) {
        this.element = t, this.settings = e.extend({}, a, n), this._defaults = a, this._name = i, 
        this.init();
    }
    var i = "urbModal", a = {};
    e.extend(o.prototype, {
        init: function() {
            var n = e(this.element).addClass("modal-shade"), r = e('<div class="modal-content" />'), o = e('<button class="modal-close" type="button" />');
            e("body").on("touchmove touchstart", function(n) {
                n = n || t.event;
                var r = e(n.target ? n.target : n.srcElement);
                if (r.hasClass("modal-shade")) return n.returnValue = !1, n.cancelBubble = !0, n.preventDefault && (n.preventDefault(), 
                n.stopPropagation()), !1;
            });
            var i = function(t) {
                var o = e(t.target);
                return !(!o.is(".modal-content") && !o.closest(".modal-content").length) || (r.removeClass("animated fadeIn").addClass("animated fadeOut"), 
                n.removeClass("modal-opened animated fadeIn").addClass("modal-closing animated fadeOut"), 
                e("body").removeClass("modal-active"), void setTimeout(function() {
                    e("body").removeClass("no-scroll"), n.removeClass("modal-closing animated fadeOut");
                }, 500));
            };
            n.on("click", i), n.wrapInner(r), n.append(o);
        },
        show: function() {
            var t = e(this.element), n = e(".modal-content", t);
            n.removeClass("fadeOut").addClass("animated fadeIn"), t.addClass("modal-opened animated fadeIn"), 
            e("body").addClass("no-scroll modal-active");
        }
    }), e.fn[i] = function(t) {
        return this.each(function() {
            e.data(this, i) || e.data(this, i, new o(this, t));
        });
    };
}(jQuery, window, document), jQuery(function(e) {
    window.Urb = {
        logging: location.search.indexOf("logging") >= 0,
        $document: e(document),
        $window: e(window),
        $body: e("body"),
        $html: e("html").removeClass("no-javascript").addClass("javascript"),
        $wpadminbar: e("#wpadminbar"),
        $logo: e(".site .site-header .site-title .site-logo"),
        $menuLogo: e('<img src="/wp-content/themes/urbanrest-wordpress-theme/images/logo-urbanrest-text-inverted-min.png" />'),
        $siteNavigation: e(".site .site-header .site-navigation"),
        $mainNavigation: e(".site .site-header .site-navigation .main-navigation"),
        $pageNavigation: e(".site .site-header .site-navigation .page-navigation"),
        $socialNavigation: e(".site .site-header .site-navigation .social-navigation"),
        $communityEvents: e(".site .site-community .site-events .events"),
        $businessHours: e(".site .site-company .site-location .business-hours"),
        $map: e(".site .site-company .site-map"),
        $mapLink: e(".site .site-company .site-map .map-link"),
        $mapContainer: e(".site .site-company .site-map .map-container"),
        $mapCanvas: e('<div class="map-canvas" />'),
        $contactForm: e(".site .site-company .site-contact .contact-form"),
        $address: e(".site .site-footer .site-address"),
        $viewport: e('<div id="viewport" />'),
        scrollPosition: document.body.scrollTop
    }, Urb.loading = function(e, t) {
        if (void 0 !== t) {
            var n = e.data("loading");
            e.data("loading", e.text()).text(n), e.removeClass("loading").addClass(t ? "success" : "failure").removeAttr("disabled");
        } else {
            var r = e.data("loading");
            e.data("loading", e.text()).text(r), e.addClass("loading").attr("disabled", !0);
        }
    }, Urb.log = function(e) {
        Urb.logging && console.log(e);
    }, Urb.setScrollPosition = function() {
        Urb.scrollPosition = Urb.$document.scrollTop();
    }, Urb.updateViewport = function() {
        Urb.log("Urb.updateViewport");
        var e = Urb.$window.outerWidth();
        Urb.$viewport.toggleClass("phone", e <= 768), Urb.$viewport.toggleClass("tablet", e > 768 && e <= 1024), 
        Urb.$viewport.toggleClass("desktop", e > 1024);
    }, Urb.setupViewport = function() {
        Urb.$body.append(Urb.$viewport), Urb.updateViewport();
    }, Urb.$window.on("load", Urb.setupViewport), Urb.$window.on("resize orientationchange", Urb.updateViewport), 
    Urb.$window.on("scroll", Urb.setScrollPosition);
}), jQuery(function(e) {
    Urb.setupModal = function() {
        Urb.log("Urb.setupModal"), e(".modal").urbModal(), e('[data-action="modal"]').on("click", Urb.showModal);
    }, Urb.showModal = function(t) {
        Urb.log("Urb.showModal"), "string" != typeof t && (t = e(this).data("target")), 
        e(t).data("urbModal").show();
    }, Urb.$window.on("ajaxloaded load", Urb.setupModal);
}), jQuery(function(e) {
    var t = Urb.$wpadminbar && Urb.$window.outerWidth() > 600 ? Urb.$wpadminbar.outerHeight() : 0, n = Urb.$pageNavigation.outerHeight() + t, r = e("main"), o = {
        "#contact": e("#contact"),
        "#beer": e("#beer"),
        "#events": e("#events")
    };
    r.length && (o[r.attr("id")] = r), Urb.$loading = e('<span class="loading-text" id="loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>'), 
    Urb.highlightCurrentSection = function() {
        e("a.active", Urb.$pageNavigation).removeClass("active");
        for (var t in o) {
            var n = o[t];
            Urb.scrollPosition > n.offset().top - .5 * Urb.$window.height() && Urb.scrollPosition < n.offset().top + n.outerHeight() - .5 * Urb.$window.height() && e('a[href*="' + t + '"]', Urb.$pageNavigation).addClass("active");
        }
    }, Urb.loadPage = function(n) {
        Urb.log("Urb.loadPage");
        var r = e("main");
        if (Urb.$body.removeClass("no-scroll"), "/" === n || "" === n) {
            var o = 0, i = 250;
            return e("html,body").animate({
                scrollTop: o
            }, i), r.animate({
                height: 0
            }, i), void setTimeout(function() {
                r.remove();
            }, i + 250);
        }
        var a = [];
        e('a[href^="#"]').each(function() {
            var e = this.href.substring(this.href.indexOf("#"));
            a.push(e);
        });
        var s = n.replace("/", "#");
        if (e.inArray(s, a) !== -1) {
            var o = e(n.replace("/", "#")).offset().top - t, i = 250;
            return e("html,body").animate({
                scrollTop: o
            }, i), r.animate({
                height: 0
            }, i), void setTimeout(function() {
                r.remove();
            }, i + 250);
        }
        var o = e(".site-posts").offset().top + e(".site-posts").outerHeight(), i = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - o) / Urb.$window.height()));
        0 == r.length && (r = e('<main class="new page row around-xs" />'), e(".site-posts").after(r)), 
        Urb.$body.append(Urb.$loading), r.addClass("loading"), setTimeout(function() {
            r.animate({
                height: 0
            }, 300);
        }, i), setTimeout(function() {
            e("html,body").animate({
                scrollTop: o - t
            }, i);
        }, 100);
        var l = "...", c = setInterval(function() {
            3 == l.length ? l = "" : l += ".", document.title = "Loading" + l;
        }, 250);
        e.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "getmaincontent",
                nonce: _URB.nonce,
                slug: n
            },
            dataType: "json",
            success: function(t) {
                if (Urb.log(t), t.success) {
                    document.title = t.data.title;
                    var o = e(t.data.content);
                    r.replaceWith(o), Urb.$loading.remove(), Urb.$window.trigger("ajaxloaded");
                    var i = 0;
                    e(".page-header > *:not(.hidden), .page-content > *:not(.hidden), .page-footer > *:not(.hidden), .post-header > *:not(.hidden), .post-content > *:not(.hidden), .post-footer > *:not(.hidden)", o).each(function() {
                        var t = e(this);
                        t.hide(), setTimeout(function() {
                            t.fadeIn(330);
                        }, i), i += 88;
                    }), e("#qr-code").html(".page-footer:before {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=" + encodeURIComponent(t.data.shortlink.replace(/URB.beer/i, "QR.URB.beer")) + ") !important;}}");
                } else {
                    document.title = "Server Error";
                    var o = e('<main class="page row around-xs">\t<article id="page-error" class="col-xs-11 col-sm-9 col-md-7 post-error post type-post">\t\t<header class="page-header" role="banner">\t\t\t<h2 class="page-title">Server Error</h2>\t\t</header>\t\t<div class="page-content">\t\t\t<p>\t\t\t\tThere was a problem loading the requested page, <u>' + n + '</u>.\t\t\t\tEither try again later or <a href="#contact">let us know</a> if you think something wrong.\t\t\t</p>\t\t</div>\t</article></main>');
                    r.replaceWith(o), Urb.$loading.remove(), Urb.$window.trigger("ajaxloaded");
                    var i = 0;
                    e(".page-header > *:not(.hidden), .page-content > *:not(.hidden), .page-footer > *:not(.hidden), .post-header > *:not(.hidden), .post-content > *:not(.hidden), .post-footer > *:not(.hidden)", o).each(function() {
                        var t = e(this);
                        t.hide(), setTimeout(function() {
                            t.fadeIn(330);
                        }, i), i += 88;
                    }), e("#qr-code").html(".page-footer:before {content: '' !important;}}");
                }
            },
            complete: function() {
                clearInterval(c);
            }
        });
    }, Urb.navigateInternally = function(t) {
        if (Urb.log("Urb.navigateInternally"), window.history) {
            t.preventDefault(), Urb.$menuToggle.toggleClass("open", !1), Urb.$mainNavigation.toggleClass("open", !1).removeAttr("style");
            var n = e(this), r = n.attr("href").replace(new RegExp("https?://" + window.location.host), "");
            window.history.pushState({}, n.text(), r), Urb.loadPage(r), e("body").trigger("click");
        }
    }, Urb.performHistoryNavigation = function(e) {
        Urb.log("Urb.performHistoryNavigation"), e.preventDefault();
        var t = (e.state, document.location.pathname);
        Urb.loadPage(t);
    }, Urb.setupImageLinks = function() {
        Urb.log("Urb.setupImageLinks"), e("a").filter('[href$=".png"],[href$=".jpg"],[href$=".bmp"],[href$=".gif"],[href$=".jpeg"]').magnificPopup({
            type: "image",
            autoFocusLast: !1,
            mainClass: "mfp-fade",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
            image: {
                cursor: null
            },
            callbacks: {
                open: function() {
                    Urb.$body.addClass("modal-active");
                },
                beforeClose: function() {
                    Urb.$body.removeClass("modal-active");
                }
            }
        });
    }, Urb.setupInternalLinks = function() {
        Urb.log("Urb.setupInternalLinks"), e("a").not('[href^="#"]').not(':not([href^="http://' + window.location.host + '"]):not([href^="https://' + window.location.host + '"])').not('[href$=".png"]').not('[href$=".jpg"]').not('[href$=".bmp"]').not('[href$=".gif"]').not('[href$=".jpeg"]').not('[href$=".pdf"]').not('[href$=".doc"]').not('[href$=".docx"]').not('[href$=".xls"]').not('[href$=".xlsx"]').each(function() {
            var t = e(this);
            t.closest(e("#wpadminbar")).length > 0 || t.unbind("click").click(Urb.navigateInternally);
        });
    }, Urb.setupExternalLinks = function() {
        Urb.log("Urb.setupExternalLinks"), e('a[href^="http"]:not([href*="' + window.location.host + '"])').attr("target", "_blank");
    }, Urb.setupFragmentAnchors = function() {
        Urb.log("Urb.setupFragmentAnchors"), Urb.$document.on("click", 'a[href^="#"]', function(n) {
            n.preventDefault();
            var r = e.attr(this, "href"), o = 0, i = e(r);
            return "#events" == r && e("#events").is(".hidden") && (e("#events").removeClass("hidden"), 
            Urb.$menuToggle.toggleClass("open", !1), Urb.$mainNavigation.toggleClass("open", !1).removeAttr("style")), 
            "#" !== r && 0 !== i.length ? o = i.offset().top : r = "/", e("html,body").animate({
                scrollTop: Math.ceil(o - t)
            }, Math.round(250 * (Math.abs(Urb.$window.scrollTop() - o) / Urb.$window.height()))), 
            !1;
        });
    }, Urb.setupPageNavigation = function() {
        Urb.log("Urb.setupPageNavigation"), Urb.$pageNavigation.find(".menu-item a").click(function() {
            var t = e(this);
            t.blur();
        }), Urb.$menuToggle = e("#menu-toggle"), Urb.$mainMenu = e("#menu-main-menu"), Urb.$menuToggle.on("click", function() {
            var n = !1;
            Urb.scrollPosition > 0 && (Urb.scrollPosition < Urb.$window.height() / 2 ? n = 0 : Urb.scrollPosition < Urb.$window.height() && (n = Urb.$window.height()));
            var r = function() {
                Urb.$menuToggle.toggleClass("open"), Urb.$mainNavigation.toggleClass("open"), Urb.$mainNavigation.hasClass("open") ? Urb.scrollPosition < Urb.$window.height() / 2 ? Urb.$mainNavigation.css("top", Urb.windowHeightMinusWPHeaderHeight - Urb.$mainMenu.outerHeight()) : Urb.$mainNavigation.css("bottom", Urb.windowHeightMinusWPHeaderHeight - Urb.$mainMenu.outerHeight()) : Urb.$mainNavigation.removeAttr("style");
            };
            n !== !1 ? e("html,body").animate({
                scrollTop: n - t
            }, {
                duration: 250,
                easing: "swing"
            }).promise().done(r) : r();
        });
    }, Urb.setupNavigationSnap = function() {
        Urb.windowHeightMinusWPHeaderHeight = Urb.$window.height() - Urb.$pageNavigation.outerHeight() - t;
    }, Urb.scrollPageNavigation = function() {
        Urb.scrollPosition >= Urb.windowHeightMinusWPHeaderHeight ? Urb.$siteNavigation.addClass("stuck-top").removeClass("past-midpoint") : Urb.scrollPosition >= Urb.$window.height() / 2 ? (Urb.$siteNavigation.addClass("past-midpoint").removeClass("stuck-top"), 
        Urb.$mainNavigation.hasClass("open") && (Urb.$menuToggle.toggleClass("open", !1), 
        Urb.$mainNavigation.toggleClass("open", !1).removeAttr("style"))) : (Urb.$siteNavigation.removeClass("past-midpoint").removeClass("stuck-top"), 
        Urb.$mainNavigation.hasClass("open") && (Urb.$menuToggle.toggleClass("open", !1), 
        Urb.$mainNavigation.toggleClass("open", !1).removeAttr("style")));
    }, Urb.scrollSocialNavigation = function() {
        Urb.$socialNavigation.is(":visible") ? Urb.scrollPosition > 10 ? e(".social-menu", Urb.$socialNavigation).removeClass("active") : e(".social-menu", Urb.$socialNavigation).addClass("active") : Urb.scrollPosition < Urb.$window.height() && Urb.$socialNavigation.removeClass("hidden");
    }, Urb.scrollToContent = function() {
        if (Urb.$body.hasClass("home")) {
            if (location.hash) {
                var r = e(location.hash), o = 5;
                r.length && !r.is(".hidden") && r.removeClass("hidden"), Urb.$window.scrollTop() > r.offset().top - (n + o) && Urb.$window.scrollTop() < r.offset().top + o && Urb.$window.scrollTop(r.offset().top - n);
            } else if (location.pathname && location.pathname.match(/^\/(beer|contact|events)\/?$/)) {
                var r = e(location.pathname.replace(/\/$/, "").replace(/\/+/, "#")), o = 5;
                r.length && r.is(".hidden") && r.removeClass("hidden"), 0 == Urb.$window.scrollTop() && r.length && Urb.$window.scrollTop(r.offset().top);
            }
        } else {
            Urb.$body.addClass("home");
            var i = e("main");
            0 == Urb.$window.scrollTop() && i.length && Urb.$window.scrollTop(i.offset().top - t);
        }
        Urb.scrollPageNavigation();
    }, "scrollRestoration" in history && (history.scrollRestoration = "manual"), Urb.$window.on("ajaxloaded load orientationchange resize", Urb.setupNavigationSnap), 
    Urb.$window.on("ajaxloaded load", Urb.setupExternalLinks), Urb.$window.on("ajaxloaded load", Urb.setupImageLinks), 
    Urb.$window.on("load", Urb.setupFragmentAnchors), Urb.$window.on("ajaxloaded load", Urb.setupInternalLinks), 
    Urb.$window.on("load", Urb.setupPageNavigation), Urb.$window.on("load scroll", Urb.scrollPageNavigation), 
    Urb.$window.on("scroll", Urb.scrollSocialNavigation), Urb.$window.on("popstate", Urb.performHistoryNavigation), 
    Urb.$window.on("load", function() {
        setTimeout(function() {
            Urb.scrollToContent(), Urb.scrollSocialNavigation();
        }, 100);
    }), Urb.handleTouchEvents = function() {
        Urb.touchEventsHandled || (e("a, button").each(function() {
            var t = e(this);
            t.on("mouseenter mouseover", function(e) {
                e.preventDefault();
            }).on("touchend", function(t) {
                e("body").trigger("touchstart");
            });
        }), Urb.touchEventsHandled = !0);
    }, Urb.$window.on("touchstart", Urb.handleTouchEvents);
}), jQuery(function(e) {
    Urb.$searchForm = e("#search"), Urb.$search = e("input", Urb.$searchForm), Urb.$searchButton = e('[href="#search"]', Urb.$socialNavigation), 
    Urb.$searchLabel = e(".search-label", Urb.$searchForm), Urb.$searchSubmit = e("button", Urb.$searchForm), 
    Urb.cancelSearching = function() {
        setTimeout(function() {
            Urb.$searchForm.toggleClass("searching", !1);
        }, 250);
    }, Urb.changeSearch = function() {
        Urb.$search.toggleClass("valid", Urb.$search.length), Urb.$search.toggleClass("invalid", !Urb.$search.length), 
        Urb.$searchLabel.toggleClass("visible", !Urb.$search.is(".valid"));
    }, Urb.search = function() {
        if (Urb.$search.is(".invalid")) return event.preventDefault(), !1;
    }, Urb.setupSearch = function() {}, Urb.showSearchBox = function() {
        Urb.startSearching(), Urb.$search.focus();
    }, Urb.startSearching = function() {
        Urb.changeSearch(), Urb.$searchForm.toggleClass("searching", !0);
    }, Urb.$searchButton.on("click", Urb.showSearchBox), Urb.$searchSubmit.on("click", function() {
        Urb.$searchForm.submit();
    }), Urb.$searchForm.on("submit", Urb.search), Urb.$search.on("blur", Urb.cancelSearching), 
    Urb.$search.on("input", Urb.changeSearch), Urb.$window.on("load", Urb.setupSearch);
}), jQuery(function(e) {
    Urb.hideTooltip = function() {
        Urb.log("Urb.hideTooltip");
        var t = e(this), n = t.data("tooltip");
        n && (n.removeClass("active"), setTimeout(function() {
            n.hasClass("active") || (t.data("tooltip", !1), t.attr("title", t.attr("data-title")), 
            t.removeAttr("data-title"), n.remove());
        }, 1e3));
    }, Urb.positionTooltip = function(e, t) {
        var n = t.offset().top - 1.25 * e.outerHeight() < Urb.scrollPosition;
        e.toggleClass("above", !n), e.toggleClass("below", n), n ? e.css({
            left: t.offset().left + t.width() / 2 - e.outerWidth() / 2,
            top: t.offset().top + t.outerHeight() + .25 * e.outerHeight()
        }) : e.css({
            left: t.offset().left + t.width() / 2 - e.outerWidth() / 2,
            top: t.offset().top - 1.25 * e.outerHeight()
        });
        var r = e.offset().left < 0, o = e.offset().left + e.outerWidth() > Urb.$window.width();
        e.toggleClass("left", r), e.toggleClass("right", o), r ? e.css({
            left: t.offset().left + t.width() / 2 - e.outerWidth() / 2 + e.offset().left * -1
        }) : o && e.css({
            left: t.offset().left + t.width() / 2 - e.outerWidth() / 2 - (e.offset().left + e.outerWidth() - Urb.$window.width())
        });
    }, Urb.showTooltip = function() {
        Urb.log("showTooltip");
        var t = e(this), n = t.data("tooltip"), r = t.attr("title");
        t.parents(".map-canvas") || (n ? (Urb.positionTooltip(n, t), n.addClass("active")) : (n = e("<div />"), 
        n.addClass("tooltip"), n.text(r), Urb.$body.append(n), Urb.positionTooltip(n, t), 
        t.data("tooltip", n), n.addClass("active"), t.attr("data-title", r), t.removeAttr("title")));
    }, Urb.setupTooltips = function() {
        Urb.$body.on("mouseleave", "[title], [data-title]", Urb.hideTooltip), Urb.$body.on("mouseenter", "[title], [data-title]", Urb.showTooltip);
    }, Urb.$window.on("ajaxloaded load", Urb.setupTooltips);
}), jQuery(function(e) {
    var t, n = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, r = (Urb.$pageNavigation.outerHeight() + n, 
    e('<button class="next"><span class="fa fa-angle-right"></span></button>')), o = e('<button class="previous"><span class="fa fa-angle-left"></span></button>'), i = e(".site-posts .latest-posts .blog-post h4");
    Urb.automaticNavigation = function() {
        Urb.showNextPost();
    }, Urb.showPreviousPost = function() {
        Urb.log("Urb.showPreviousPost");
        var t = e(".site-posts .latest-posts .blog-post.active"), n = t.prev(".previous.blog-post");
        0 === Urb.scrollPosition && n.length && o.trigger("click");
    }, Urb.showNextPost = function() {
        Urb.log("Urb.showNextPost");
        var t = e(".site-posts .latest-posts .blog-post.active"), n = t.next(".next.blog-post");
        0 === Urb.scrollPosition && n.length && r.trigger("click");
    }, Urb.scrollHeader = function() {
        i.each(function() {
            var t = e(this);
            t.parents(".blog-post").is(".active") && (Urb.scrollPosition > 0 && Urb.scrollPosition < Urb.$window.height() ? t.css({
                height: (100 - 25 * Urb.scrollPosition / Urb.$window.height()).toFixed(2) + "%",
                transform: "scale(" + (1 - .15 * Urb.scrollPosition / Urb.$window.height()).toFixed(3) + ")"
            }) : t.removeAttr("style"));
        });
    }, Urb.setupHeaderNavigation = function() {
        Urb.log("Urb.setupHeaderNavigation"), r.on("click", function(t) {
            var n = e(".site-posts .latest-posts .blog-post.active"), i = n.next(".next.blog-post"), a = e(".site-posts .latest-posts .blog-post:first-child");
            n.length ? (o.addClass("active"), n.removeClass("active").addClass("previous"), 
            i.length && (i.removeClass("previous next").addClass("active"), Urb.getNextPost()), 
            i.next(".next.blog-post").length || r.removeClass("active")) : a.removeClass("previous next").addClass("active"), 
            Urb.stopAutomaticNavigation();
        }), o.on("click", function(t) {
            var n = e(".site-posts .latest-posts .blog-post.active"), i = n.prev(".previous.blog-post"), a = e(".site-posts .latest-posts .blog-post:last-child");
            n.length ? (r.addClass("active"), n.removeClass("active").addClass("next"), i.length && i.removeClass("previous next").addClass("active"), 
            i.prev(".previous.blog-post").length || o.removeClass("active")) : a.removeClass("previous next").addClass("active"), 
            Urb.stopAutomaticNavigation();
        }), e(".site-posts .latest-posts").after(r).after(o), e(".site-posts .latest-posts .blog-post > a").on("dragstart", function() {
            return !1;
        });
        document.getElementById("latest-posts");
        Urb.getNextPost();
    }, Urb.startAutomaticNavigation = function() {
        t && clearInterval(t), t = setTimeout(function() {
            Urb.automaticNavigation();
        }, 5e3);
    }, Urb.stopAutomaticNavigation = function() {
        t && clearInterval(t), Urb.$window.off("scroll", Urb.stopAutomaticNavigation);
    }, Urb.getNextPost = function() {
        Urb.log("Urb.getNextPost"), e.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "getnext",
                id: e(".site-posts .latest-posts .blog-post:last-child").data("post-id")
            },
            success: function(t) {
                if (Urb.log(t), t.success) {
                    var n = e("<li />");
                    n.addClass("blog-post next"), n.attr("data-post-id", t.data.ID);
                    var o = e("<a />");
                    if (o.attr("href", t.data.permalink), o.on("dragstart", function() {
                        return !1;
                    }), o.on("click", Urb.navigateInternally), n.append(o), t.data.thumbnail) {
                        var i = e("<span />");
                        i.addClass("blog-post-image"), t.data.image_src && i.css({
                            "background-image": "url(" + t.data.image_src + ")"
                        }), i.append(t.data.thumbnail), o.append(i);
                    }
                    if (t.data.post_title) {
                        var a = e("<h4 />");
                        a.text(t.data.post_title), o.append(a);
                    }
                    if (t.data.excerpt) {
                        var s = e("<div />");
                        s.addClass("blog-post-intro"), s.html(t.data.excerpt), n.append(s);
                    }
                    e(".site-posts .latest-posts").append(n), r.addClass("active");
                }
            }
        });
    }, Urb.$window.on("scroll", Urb.stopAutomaticNavigation), Urb.$window.on("load scroll", Urb.scrollHeader), 
    Urb.$window.on("load", Urb.setupHeaderNavigation);
}), jQuery(function(e) {
    Urb.$specials = e(".site-specials"), Urb.$currentBeerTaps = e(".current-beer .taps", Urb.$specials), 
    Urb.$currentBeerDeck = e(".upcoming-beer .decks", Urb.$specials), Urb.setupTapSorting = function() {
        Urb.log("Urb.setupTapSorting"), e("th", Urb.$currentBeerTaps).click(Urb.sortTap);
    }, Urb.sortTap = function() {
        Urb.log("Urb.sortTap");
        var t = e(this);
        Urb.$currentBeerTaps.find("td").filter(function() {
            return e(this).index() === t.index();
        }).sortElements(function(t, n) {
            return e.text([ t ]) == e.text([ n ]) ? 0 : e.text([ t ]) > e.text([ n ]) ? 1 : -1;
        }, function() {
            return this.parentNode;
        }), Urb.$currentBeerDeck.find("td").filter(function() {
            return e(this).index() === t.index();
        }).sortElements(function(t, n) {
            return e.text([ t ]) == e.text([ n ]) ? 0 : e.text([ t ]) > e.text([ n ]) ? 1 : -1;
        }, function() {
            return this.parentNode;
        });
    }, Urb.$window.on("load", Urb.setupTapSorting);
}), jQuery(function(e) {
    Urb.setupEventLinks = function() {
        e(".event", Urb.$communityEvents).each(function() {
            var t = e(this);
            e(".event-what", t).on("click", function(t) {
                location.href = e(this).children(".event-what").attr("href");
            });
        });
    }, Urb.$window.on("load", Urb.setupEventLinks);
}), jQuery(function(e) {
    var t = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, n = Urb.$pageNavigation.outerHeight() + t;
    Urb.centerMap = function() {
        Urb.log("Urb.centerMap"), Urb.$map.hasClass("open") && (Urb.$map.data("map").setCenter(Urb.$map.data("marker").getPosition()), 
        Urb.$map.data("map").panTo(Urb.$map.data("marker").getPosition()));
    }, Urb.scrollMap = function() {
        if (Urb.$map.hasClass("open") && !Urb.$map.hasClass("animating") && Urb.$mapCanvas.offset().top > Urb.scrollPosition + Urb.$window.height() && (Urb.$map.removeClass("open"), 
        e(".map-container, .map-canvas", Urb.$map).removeAttr("style")), !Urb.$map.data("map") && Urb.$window.scrollTop() > e("#contact").offset().top) {
            var t = e("<script />");
            t.attr("type", "text/javascript"), t.attr("async", !0), t.attr("src", "https://maps.google.com/maps/api/js?key=" + _URB.googleBrowserMapApiKey + "&callback=Urb.setupMap"), 
            Urb.$body.append(t), Urb.$map.data("map", !0);
        }
    }, Urb.setupBusinessHours = function() {
        Urb.log("Urb.setupBusinessHours");
        var t = new Date(), n = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ], r = n[t.getDay()];
        e("dt." + r + ", dd." + r, Urb.$businesHours).addClass("today"), e("dt", Urb.$businessHours).hover(function() {
            e(this).toggleClass("hover").next("dd").toggleClass("hover");
        }), e("dd", Urb.$businessHours).hover(function() {
            e(this).toggleClass("hover").prev("dt").toggleClass("hover");
        });
    }, Urb.setupContactForm = function() {
        Urb.log("Urb.setupContactForm"), Urb.$contactForm.attr("novalidate", !0), Urb.$contactForm.on("submit", Urb.submitContactForm), 
        e(".field input, .field textarea", Urb.$contactForm).on("keyup", function() {
            e(this).closest(".field").toggleClass("active", this.value.length > 0 || e(this).is(":focus"));
        }).on("focus", function() {
            e(this).closest(".field").addClass("active");
        }).on("blur", function() {
            0 == this.value.length && e(this).closest(".field").removeClass("active");
        });
        var t = Urb.$contactForm.find("#contact_email_address");
        Urb.$contactForm.data("email_address", t), t.on("keyup", function() {
            t.closest(".field").removeClass("error").removeAttr("title");
        });
        var n = Urb.$contactForm.find("#contact_message");
        n.on("focus keyup", function() {
            this.clientHeight < this.scrollHeight && e(this).css("height", this.scrollHeight + "px");
        }).on("blur", function() {
            e(this).removeAttr("style");
        });
    }, Urb.setupMap = function() {
        Urb.log("Urb.setupMap"), google || e(".site-map").remove(), Urb.$mapCanvas.appendTo(Urb.$mapContainer);
        var t = {
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
        Urb.$map.data("latitude") && Urb.$map.data("longitude") && (t.center = new google.maps.LatLng(Urb.$map.data("latitude"), Urb.$map.data("longitude")), 
        e.getJSON("/wp-content/themes/urbanrest-wordpress-theme/styles/map.json", function(e) {
            t.styles = e;
            var n = new google.maps.Map(Urb.$mapCanvas.get(0), t), r = new google.maps.Marker({
                icon: {
                    labelOrigin: {
                        x: 30,
                        y: 19
                    },
                    url: "https://maps.google.com/mapfiles/kml/paddle/grn-blank.png"
                },
                label: {
                    fontFamily: "FontAwesome",
                    fontSize: "22px",
                    text: ""
                },
                map: n,
                position: t.center
            }), o = "https://www.google.com/maps/dir//2615+Wolcott+Avenue,+Ferndale,+Michigan,+48220";
            navigator.userAgent.match(/(Apple|Mac|iPhone|iPod|iPad)/i) && (o = "http://maps.apple.com/?daddr=2615+Wolcott+Avenue,+Ferndale,+Michigan,+48220");
            var i = new google.maps.InfoWindow({
                content: Urb.$address.html() + '<br /><a class="map-external-link" href="' + o + '">Get Directions</a>'
            });
            Urb.$map.data("map", n), Urb.$map.data("marker", r), Urb.$map.data("infoWindow", i), 
            google.maps.event.addListener(r, "click", function() {
                i.open(n, r);
            }), i.open(n, r);
        }));
    }, Urb.handleContactFormResponse = function(t) {
        Urb.trackEvent(window.location.pathname, "Contact", "Submit", 1), t && t.success && (Urb.loading(e('button[type="submit"]', Urb.$contactForm), !0), 
        Urb.$contactForm[0].reset());
    }, Urb.submitContactForm = function(t) {
        Urb.log("Urb.submitContactForm"), t.preventDefault(), Urb.validateContactForm() && (Urb.loading(e('button[type="submit"]', Urb.$contactForm)), 
        e.ajax({
            url: Urb.$contactForm.attr("action"),
            data: Urb.$contactForm.serialize(),
            dataType: "json",
            method: Urb.$contactForm.attr("method"),
            complete: Urb.handleContactFormResponse
        }));
    }, Urb.resizeMap = function() {
        if (Urb.$map.hasClass("open")) {
            Urb.$map.addClass("animating");
            var t = (Urb.$window.outerHeight() - n - e("h3", Urb.$map).outerHeight()).toFixed(0);
            e(".map-container, .map-canvas", Urb.$map).css("height", t + "px"), Urb.centerMap(), 
            e("html,body").animate({
                scrollTop: Urb.$window.scrollTop() + t
            }, 666, function() {
                Urb.$map.removeClass("animating");
            });
        }
    }, Urb.toggleMap = function(t) {
        Urb.log("Urb.toggleMap"), t.preventDefault(), e(t.target).blur(), Urb.$map.data("map") || Urb.setupMap(), 
        Urb.$map.toggleClass("open"), Urb.$map.hasClass("open") ? (Urb.resizeMap(), Urb.trackEvent(window.location.pathname, "Map", "Open", 1)) : e(".map-container, .map-canvas", Urb.$map).removeAttr("style");
    }, Urb.validateContactForm = function() {
        Urb.log("Urb.validateContactForm");
        var e = Urb.$contactForm.data("email_address");
        return !(e.val().length < 3 || e.val().indexOf("@") < 0) || (e.closest(".field").addClass("error").attr("title", "Valid email address required."), 
        !1);
    }, Urb.$window.on("scroll", Urb.scrollMap), Urb.$window.on("load", Urb.setupBusinessHours), 
    Urb.$mapLink.on("click", Urb.toggleMap), Urb.$window.on("load", Urb.setupContactForm), 
    Urb.$window.on("resize orientationchange", Urb.resizeMap);
}), jQuery(function(e) {
    Urb.rateBeer = function() {
        Urb.log("Urb.rateBeer");
        var t = e(".rating-actions"), n = e(this);
        return t.addClass("rated"), n.addClass("rated"), n.prevAll(".rate-button").addClass("rated"), 
        n.nextAll(".rate-button").removeClass("rated"), e.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "post-rate",
                nonce: _URB.nonce,
                post_rating: n.val(),
                post_id: n.data("id")
            },
            dataType: "json",
            success: function(e) {
                e.success ? Urb.$aggregateRating.attr("data-user-rating", n.val()) : Urb.log(e);
            }
        }), Urb.shareRating(n.val()), !1;
    }, Urb.setupRatingPoll = function() {
        Urb.log("Urb.setupRatingPoll"), Urb.$aggregateRating = e('[itemprop="aggregateRating"]'), 
        Urb.$beerCheckinModal = e(".modal.checkin-modal");
        var t = e("<h6>Rate this Beer</h6>");
        t.insertAfter(".beer-rating h5");
        var n = e('<div class="rating-actions" />');
        Number(Urb.$aggregateRating.data("user-rating")) > 0 && n.addClass("rated");
        for (var r = 1; r <= 5; r++) {
            var o = e('<button class="rate-button" />');
            o.val(r), o.data("id", Urb.$aggregateRating.data("beer-id")), o.text(1 === r ? "1 Star" : r + " Stars"), 
            o.toggleClass("rated", r <= Number(Urb.$aggregateRating.data("user-rating"))), n.append(o), 
            o.on("click", Urb.rateBeer);
        }
        Urb.$aggregateRating.after(n);
    }, Urb.setupRatingsFrom3rdParties = function() {
        Urb.log("Urb.setupRatingsFrom3rdParties"), e.ajaxSetup({
            beforeSend: function(e) {
                e.setRequestHeader("Authorization", "Basic " + btoa("urbanrest:Greensleeves"));
            }
        }), e.ajax({
            type: "get",
            url: _URB.url,
            data: {
                action: "getrating",
                nonce: _URB.nonce,
                rating_system: "untappd",
                postId: e('[itemprop="aggregateRating"]').data("beer-id")
            },
            dataType: "json",
            success: function(t) {
                var n = Number(e('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), r = Number(e('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), o = n * r;
                if (t.response.beer) {
                    var i = t.response.beer.rating_score, a = t.response.beer.rating_count, s = i * a, l = o + s, c = r + a, u = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", u.toFixed(1)), e('[itemprop="ratingValue"]', Urb.$aggregateRating).text(u.toFixed(1)), 
                    e('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        }), e.ajax({
            type: "get",
            url: _URB.url,
            data: {
                action: "getrating",
                nonce: _URB.nonce,
                rating_system: "ratebeer",
                postId: e('[itemprop="aggregateRating"]').data("beer-id")
            },
            dataType: "json",
            success: function(t) {
                var n = Number(e('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), r = Number(e('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), o = n * r;
                if (t) {
                    var i = Number(t.rating_value) / Number(t.best_rating) * 5, a = Number(t.review_count), s = i * a, l = o + s, c = r + a, u = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", u.toFixed(1)), e('[itemprop="ratingValue"]', Urb.$aggregateRating).text(u.toFixed(1)), 
                    e('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        }), e.ajax({
            type: "get",
            url: _URB.url,
            data: {
                action: "getrating",
                nonce: _URB.nonce,
                rating_system: "untappd",
                postId: e('[itemprop="aggregateRating"]').data("beer-id")
            },
            dataType: "json",
            success: function(t) {
                var n = Number(e('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), r = Number(e('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), o = n * r;
                if (t) {
                    var i = Number(t.rating_value) / Number(t.best_rating) * 5, a = Number(t.review_count), s = i * a, l = o + s, c = r + a, u = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", u.toFixed(1)), e('[itemprop="ratingValue"]', Urb.$aggregateRating).text(u.toFixed(1)), 
                    e('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        });
    }, Urb.shareRating = function(t) {
        Urb.log("Urb.shareRating");
        var n = e(".message", Urb.$beerCheckinModal);
        0 == n.length && (n = e('<div class="message" />'), e(".modal-content", Urb.$beerCheckinModal).prepend(n));
        var r = "Thanks.";
        switch (Number(t)) {
          case 5:
            r = "Wow, Thank You!";
            break;

          case 4:
            r = "Glad You Enjoyed It!";
            break;

          case 3:
            r = "Thanks!";
            break;

          case 2:
            r = "Thank you.";
            break;

          case 1:
            r = "We can do better.";
        }
        n.text(r), Urb.showModal(".modal.checkin-modal");
    }, Urb.$window.on("ajaxloaded load", Urb.setupRatingPoll);
}), jQuery(function(e) {
    Urb.scrollSharing = function() {
        e("main").each(function() {
            var t = e(this);
            Urb.scrollPosition + Urb.$window.height() > t.offset().top + 1.5 * Urb.$pageNavigation.outerHeight() && Urb.scrollPosition + Urb.$window.height() < t.offset().top + t.outerHeight() ? t.find(".page-share, .post-share").addClass("visible") : t.find(".page-share, .post-share").removeClass("visible");
        });
    }, Urb.setupSharing = function() {
        Urb.log("Urb.setupSharing");
        var t = e("main");
        t.length > 0 && e(".page-share, .post-share", t).addClass("visible").bind("click", function() {
            e(".modal.share-modal .shortlink", t).focus();
        });
    }, Urb.$window.on("ajaxloaded load scroll", Urb.scrollSharing), Urb.$window.on("ajaxloaded load", function() {
        setTimeout(Urb.setupSharing, 500);
    });
}), jQuery(function(e) {
    Urb.setupGallery = function() {
        Urb.log("Urb.setupGallery"), e(".gallery .gallery-icon a").magnificPopup({
            type: "image",
            autoFocusLast: !1,
            mainClass: "mfp-fade",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
            image: {
                cursor: null
            },
            callbacks: {
                open: function() {
                    Urb.$body.addClass("modal-active");
                },
                beforeClose: function() {
                    Urb.$body.removeClass("modal-active");
                }
            }
        });
    }, Urb.$window.on("ajaxloaded load", Urb.setupGallery);
}), jQuery(function(e) {
    Urb.setupAnalytics = function() {
        Urb.log("Urb.setupAnalytics"), ga("create", _URB.googleAnalyticsTrackingID, "auto"), 
        ga("set", "anonymizeIp", !0), Urb.trackPageView();
    }, Urb.setupEvents = function() {
        Urb.log("Urb.setupEvents"), e("a").on("click", function(t) {
            var n = e(t.target).closest("a");
            if (1 == n.length && window.location.host != n[0].host && !n.attr("onclick")) {
                t.preventDefault();
                var r = n[0].href, o = function() {
                    document.location = r;
                };
                n.data("event-action") ? Urb.trackEvent(window.location.pathname, n.data("event-action"), n.data("event-label"), 1, o) : Urb.trackEvent(window.location.pathname, "Outbound", r, 1, o), 
                setTimeout(o, 666);
            }
        });
    }, Urb.trackEvent = function(e, t, n, r, o) {
        Urb.log("Urb.trackEvent"), ga("send", {
            hitType: "event",
            eventCategory: e,
            eventAction: t,
            eventLabel: n,
            eventValue: r,
            hitCallback: o
        });
    }, Urb.trackPageView = function() {
        Urb.log("Urb.trackPageView"), setTimeout(function() {
            ga("send", "pageview", window.location.pathname);
        }, 666);
    }, Urb.$window.on("load", Urb.setupAnalytics), Urb.$window.on("ajaxloaded load", Urb.setupEvents), 
    Urb.$window.on("ajaxloaded", Urb.trackPageView);
});
//# sourceMappingURL=script.js.map
