!function(t, e, n, i) {
    "use strict";
    function o(t, e, n) {
        return setTimeout(c(t, n), e);
    }
    function r(t, e, n) {
        return Array.isArray(t) ? (a(t, n[e], n), !0) : !1;
    }
    function a(t, e, n) {
        var o;
        if (t) if (t.forEach) t.forEach(e, n); else if (t.length !== i) for (o = 0; o < t.length; ) e.call(n, t[o], o, t), 
        o++; else for (o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
    }
    function s(e, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function() {
            var n = new Error("get-stack-trace"), i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", r = t.console && (t.console.warn || t.console.log);
            return r && r.call(t.console, o, i), e.apply(this, arguments);
        };
    }
    function l(t, e, n) {
        var i, o = e.prototype;
        i = t.prototype = Object.create(o), i.constructor = t, i._super = o, n && pt(i, n);
    }
    function c(t, e) {
        return function() {
            return t.apply(e, arguments);
        };
    }
    function u(t, e) {
        return typeof t == gt ? t.apply(e ? e[0] || i : i, e) : t;
    }
    function p(t, e) {
        return t === i ? e : t;
    }
    function h(t, e, n) {
        a(m(e), function(e) {
            t.addEventListener(e, n, !1);
        });
    }
    function d(t, e, n) {
        a(m(e), function(e) {
            t.removeEventListener(e, n, !1);
        });
    }
    function g(t, e) {
        for (;t; ) {
            if (t == e) return !0;
            t = t.parentNode;
        }
        return !1;
    }
    function f(t, e) {
        return t.indexOf(e) > -1;
    }
    function m(t) {
        return t.trim().split(/\s+/g);
    }
    function b(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var i = 0; i < t.length; ) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++;
        }
        return -1;
    }
    function v(t) {
        return Array.prototype.slice.call(t, 0);
    }
    function U(t, e, n) {
        for (var i = [], o = [], r = 0; r < t.length; ) {
            var a = e ? t[r][e] : t[r];
            b(o, a) < 0 && i.push(t[r]), o[r] = a, r++;
        }
        return n && (i = e ? i.sort(function(t, n) {
            return t[e] > n[e];
        }) : i.sort()), i;
    }
    function w(t, e) {
        for (var n, o, r = e[0].toUpperCase() + e.slice(1), a = 0; a < ht.length; ) {
            if (n = ht[a], o = n ? n + r : e, o in t) return o;
            a++;
        }
        return i;
    }
    function $() {
        return wt++;
    }
    function y(e) {
        var n = e.ownerDocument || e;
        return n.defaultView || n.parentWindow || t;
    }
    function T(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, 
        this.domHandler = function(e) {
            u(t.options.enable, [ t ]) && n.handler(e);
        }, this.init();
    }
    function C(t) {
        var e, n = t.options.inputClass;
        return new (e = n ? n : Tt ? j : Ct ? z : yt ? L : D)(t, x);
    }
    function x(t, e, n) {
        var i = n.pointers.length, o = n.changedPointers.length, r = e & kt && i - o === 0, a = e & (St | Rt) && i - o === 0;
        n.isFirst = !!r, n.isFinal = !!a, r && (t.session = {}), n.eventType = e, E(t, n), 
        t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n;
    }
    function E(t, e) {
        var n = t.session, i = e.pointers, o = i.length;
        n.firstInput || (n.firstInput = I(e)), o > 1 && !n.firstMultiple ? n.firstMultiple = I(e) : 1 === o && (n.firstMultiple = !1);
        var r = n.firstInput, a = n.firstMultiple, s = a ? a.center : r.center, l = e.center = k(i);
        e.timeStamp = bt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = F(s, l), 
        e.distance = R(s, l), N(n, e), e.offsetDirection = S(e.deltaX, e.deltaY);
        var c = A(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = mt(c.x) > mt(c.y) ? c.x : c.y, 
        e.scale = a ? M(a.pointers, i) : 1, e.rotation = a ? _(a.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, 
        P(n, e);
        var u = t.element;
        g(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u;
    }
    function N(t, e) {
        var n = e.center, i = t.offsetDelta || {}, o = t.prevDelta || {}, r = t.prevInput || {};
        e.eventType !== kt && r.eventType !== St || (o = t.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        }, i = t.offsetDelta = {
            x: n.x,
            y: n.y
        }), e.deltaX = o.x + (n.x - i.x), e.deltaY = o.y + (n.y - i.y);
    }
    function P(t, e) {
        var n, o, r, a, s = t.lastInterval || e, l = e.timeStamp - s.timeStamp;
        if (e.eventType != Rt && (l > It || s.velocity === i)) {
            var c = e.deltaX - s.deltaX, u = e.deltaY - s.deltaY, p = A(l, c, u);
            o = p.x, r = p.y, n = mt(p.x) > mt(p.y) ? p.x : p.y, a = S(c, u), t.lastInterval = e;
        } else n = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
        e.velocity = n, e.velocityX = o, e.velocityY = r, e.direction = a;
    }
    function I(t) {
        for (var e = [], n = 0; n < t.pointers.length; ) e[n] = {
            clientX: ft(t.pointers[n].clientX),
            clientY: ft(t.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: bt(),
            pointers: e,
            center: k(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        };
    }
    function k(t) {
        var e = t.length;
        if (1 === e) return {
            x: ft(t[0].clientX),
            y: ft(t[0].clientY)
        };
        for (var n = 0, i = 0, o = 0; e > o; ) n += t[o].clientX, i += t[o].clientY, o++;
        return {
            x: ft(n / e),
            y: ft(i / e)
        };
    }
    function A(t, e, n) {
        return {
            x: e / t || 0,
            y: n / t || 0
        };
    }
    function S(t, e) {
        return t === e ? Ft : mt(t) >= mt(e) ? 0 > t ? _t : Mt : 0 > e ? Dt : jt;
    }
    function R(t, e, n) {
        n || (n = Wt);
        var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + o * o);
    }
    function F(t, e, n) {
        n || (n = Wt);
        var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI;
    }
    function _(t, e) {
        return F(e[1], e[0], Lt) + F(t[1], t[0], Lt);
    }
    function M(t, e) {
        return R(e[0], e[1], Lt) / R(t[0], t[1], Lt);
    }
    function D() {
        this.evEl = Bt, this.evWin = Xt, this.pressed = !1, T.apply(this, arguments);
    }
    function j() {
        this.evEl = Qt, this.evWin = Gt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function H() {
        this.evTarget = Jt, this.evWin = Kt, this.started = !1, T.apply(this, arguments);
    }
    function O(t, e) {
        var n = v(t.touches), i = v(t.changedTouches);
        return e & (St | Rt) && (n = U(n.concat(i), "identifier", !0)), [ n, i ];
    }
    function z() {
        this.evTarget = ee, this.targetIds = {}, T.apply(this, arguments);
    }
    function W(t, e) {
        var n = v(t.touches), i = this.targetIds;
        if (e & (kt | At) && 1 === n.length) return i[n[0].identifier] = !0, [ n, n ];
        var o, r, a = v(t.changedTouches), s = [], l = this.target;
        if (r = n.filter(function(t) {
            return g(t.target, l);
        }), e === kt) for (o = 0; o < r.length; ) i[r[o].identifier] = !0, o++;
        for (o = 0; o < a.length; ) i[a[o].identifier] && s.push(a[o]), e & (St | Rt) && delete i[a[o].identifier], 
        o++;
        return s.length ? [ U(r.concat(s), "identifier", !0), s ] : void 0;
    }
    function L() {
        T.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new z(this.manager, t), this.mouse = new D(this.manager, t), this.primaryTouch = null, 
        this.lastTouches = [];
    }
    function Y(t, e) {
        t & kt ? (this.primaryTouch = e.changedPointers[0].identifier, B.call(this, e)) : t & (St | Rt) && B.call(this, e);
    }
    function B(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var n = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches, o = function() {
                var t = i.indexOf(n);
                t > -1 && i.splice(t, 1);
            };
            setTimeout(o, ne);
        }
    }
    function X(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var o = this.lastTouches[i], r = Math.abs(e - o.x), a = Math.abs(n - o.y);
            if (ie >= r && ie >= a) return !0;
        }
        return !1;
    }
    function V(t, e) {
        this.manager = t, this.set(e);
    }
    function q(t) {
        if (f(t, ce)) return ce;
        var e = f(t, ue), n = f(t, pe);
        return e && n ? ce : e || n ? e ? ue : pe : f(t, le) ? le : se;
    }
    function Q() {
        if (!re) return !1;
        var e = {}, n = t.CSS && t.CSS.supports;
        return [ "auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none" ].forEach(function(i) {
            e[i] = n ? t.CSS.supports("touch-action", i) : !0;
        }), e;
    }
    function G(t) {
        this.options = pt({}, this.defaults, t || {}), this.id = $(), this.manager = null, 
        this.options.enable = p(this.options.enable, !0), this.state = de, this.simultaneous = {}, 
        this.requireFail = [];
    }
    function Z(t) {
        return t & ve ? "cancel" : t & me ? "end" : t & fe ? "move" : t & ge ? "start" : "";
    }
    function J(t) {
        return t == jt ? "down" : t == Dt ? "up" : t == _t ? "left" : t == Mt ? "right" : "";
    }
    function K(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t;
    }
    function tt() {
        G.apply(this, arguments);
    }
    function et() {
        tt.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function nt() {
        tt.apply(this, arguments);
    }
    function it() {
        G.apply(this, arguments), this._timer = null, this._input = null;
    }
    function ot() {
        tt.apply(this, arguments);
    }
    function rt() {
        tt.apply(this, arguments);
    }
    function at() {
        G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
        this._input = null, this.count = 0;
    }
    function st(t, e) {
        return e = e || {}, e.recognizers = p(e.recognizers, st.defaults.preset), new lt(t, e);
    }
    function lt(t, e) {
        this.options = pt({}, st.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, 
        this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, 
        this.element = t, this.input = C(this), this.touchAction = new V(this, this.options.touchAction), 
        ct(this, !0), a(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
        }, this);
    }
    function ct(t, e) {
        var n = t.element;
        if (n.style) {
            var i;
            a(t.options.cssProps, function(o, r) {
                i = w(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || "";
            }), e || (t.oldCssProps = {});
        }
    }
    function ut(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i);
    }
    var pt, ht = [ "", "webkit", "Moz", "MS", "ms", "o" ], dt = e.createElement("div"), gt = "function", ft = Math.round, mt = Math.abs, bt = Date.now;
    pt = "function" != typeof Object.assign ? function(t) {
        if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (o !== i && null !== o) for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r]);
        }
        return e;
    } : Object.assign;
    var vt = s(function(t, e, n) {
        for (var o = Object.keys(e), r = 0; r < o.length; ) (!n || n && t[o[r]] === i) && (t[o[r]] = e[o[r]]), 
        r++;
        return t;
    }, "extend", "Use `assign`."), Ut = s(function(t, e) {
        return vt(t, e, !0);
    }, "merge", "Use `assign`."), wt = 1, $t = /mobile|tablet|ip(ad|hone|od)|android/i, yt = "ontouchstart" in t, Tt = w(t, "PointerEvent") !== i, Ct = yt && $t.test(navigator.userAgent), xt = "touch", Et = "pen", Nt = "mouse", Pt = "kinect", It = 25, kt = 1, At = 2, St = 4, Rt = 8, Ft = 1, _t = 2, Mt = 4, Dt = 8, jt = 16, Ht = _t | Mt, Ot = Dt | jt, zt = Ht | Ot, Wt = [ "x", "y" ], Lt = [ "clientX", "clientY" ];
    T.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), 
            this.evWin && h(y(this.element), this.evWin, this.domHandler);
        },
        destroy: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), 
            this.evWin && d(y(this.element), this.evWin, this.domHandler);
        }
    };
    var Yt = {
        mousedown: kt,
        mousemove: At,
        mouseup: St
    }, Bt = "mousedown", Xt = "mousemove mouseup";
    l(D, T, {
        handler: function(t) {
            var e = Yt[t.type];
            e & kt && 0 === t.button && (this.pressed = !0), e & At && 1 !== t.which && (e = St), 
            this.pressed && (e & St && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [ t ],
                changedPointers: [ t ],
                pointerType: Nt,
                srcEvent: t
            }));
        }
    });
    var Vt = {
        pointerdown: kt,
        pointermove: At,
        pointerup: St,
        pointercancel: Rt,
        pointerout: Rt
    }, qt = {
        2: xt,
        3: Et,
        4: Nt,
        5: Pt
    }, Qt = "pointerdown", Gt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Qt = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"), 
    l(j, T, {
        handler: function(t) {
            var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), o = Vt[i], r = qt[t.pointerType] || t.pointerType, a = r == xt, s = b(e, t.pointerId, "pointerId");
            o & kt && (0 === t.button || a) ? 0 > s && (e.push(t), s = e.length - 1) : o & (St | Rt) && (n = !0), 
            0 > s || (e[s] = t, this.callback(this.manager, o, {
                pointers: e,
                changedPointers: [ t ],
                pointerType: r,
                srcEvent: t
            }), n && e.splice(s, 1));
        }
    });
    var Zt = {
        touchstart: kt,
        touchmove: At,
        touchend: St,
        touchcancel: Rt
    }, Jt = "touchstart", Kt = "touchstart touchmove touchend touchcancel";
    l(H, T, {
        handler: function(t) {
            var e = Zt[t.type];
            if (e === kt && (this.started = !0), this.started) {
                var n = O.call(this, t, e);
                e & (St | Rt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: xt,
                    srcEvent: t
                });
            }
        }
    });
    var te = {
        touchstart: kt,
        touchmove: At,
        touchend: St,
        touchcancel: Rt
    }, ee = "touchstart touchmove touchend touchcancel";
    l(z, T, {
        handler: function(t) {
            var e = te[t.type], n = W.call(this, t, e);
            n && this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: xt,
                srcEvent: t
            });
        }
    });
    var ne = 2500, ie = 25;
    l(L, T, {
        handler: function(t, e, n) {
            var i = n.pointerType == xt, o = n.pointerType == Nt;
            if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i) Y.call(this, e, n); else if (o && X.call(this, n)) return;
                this.callback(t, e, n);
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var oe = w(dt.style, "touchAction"), re = oe !== i, ae = "compute", se = "auto", le = "manipulation", ce = "none", ue = "pan-x", pe = "pan-y", he = Q();
    V.prototype = {
        set: function(t) {
            t == ae && (t = this.compute()), re && this.manager.element.style && he[t] && (this.manager.element.style[oe] = t), 
            this.actions = t.toLowerCase().trim();
        },
        update: function() {
            this.set(this.manager.options.touchAction);
        },
        compute: function() {
            var t = [];
            return a(this.manager.recognizers, function(e) {
                u(e.options.enable, [ e ]) && (t = t.concat(e.getTouchAction()));
            }), q(t.join(" "));
        },
        preventDefaults: function(t) {
            var e = t.srcEvent, n = t.offsetDirection;
            if (this.manager.session.prevented) return void e.preventDefault();
            var i = this.actions, o = f(i, ce) && !he[ce], r = f(i, pe) && !he[pe], a = f(i, ue) && !he[ue];
            if (o) {
                var s = 1 === t.pointers.length, l = t.distance < 2, c = t.deltaTime < 250;
                if (s && l && c) return;
            }
            return a && r ? void 0 : o || r && n & Ht || a && n & Ot ? this.preventSrc(e) : void 0;
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault();
        }
    };
    var de = 1, ge = 2, fe = 4, me = 8, be = me, ve = 16, Ue = 32;
    G.prototype = {
        defaults: {},
        set: function(t) {
            return pt(this.options, t), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function(t) {
            if (r(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
        },
        dropRecognizeWith: function(t) {
            return r(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], 
            this);
        },
        requireFailure: function(t) {
            if (r(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = K(t, this), -1 === b(e, t) && (e.push(t), t.requireFailure(this)), this;
        },
        dropRequireFailure: function(t) {
            if (r(t, "dropRequireFailure", this)) return this;
            t = K(t, this);
            var e = b(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this;
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id];
        },
        emit: function(t) {
            function e(e) {
                n.manager.emit(e, t);
            }
            var n = this, i = this.state;
            me > i && e(n.options.event + Z(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), 
            i >= me && e(n.options.event + Z(i));
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = Ue);
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (Ue | de))) return !1;
                t++;
            }
            return !0;
        },
        recognize: function(t) {
            var e = pt({}, t);
            return u(this.options.enable, [ this, e ]) ? (this.state & (be | ve | Ue) && (this.state = de), 
            this.state = this.process(e), void (this.state & (ge | fe | me | ve) && this.tryEmit(e))) : (this.reset(), 
            void (this.state = Ue));
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(tt, G, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e;
        },
        process: function(t) {
            var e = this.state, n = t.eventType, i = e & (ge | fe), o = this.attrTest(t);
            return i && (n & Rt || !o) ? e | ve : i || o ? n & St ? e | me : e & ge ? e | fe : ge : Ue;
        }
    }), l(et, tt, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: zt
        },
        getTouchAction: function() {
            var t = this.options.direction, e = [];
            return t & Ht && e.push(pe), t & Ot && e.push(ue), e;
        },
        directionTest: function(t) {
            var e = this.options, n = !0, i = t.distance, o = t.direction, r = t.deltaX, a = t.deltaY;
            return o & e.direction || (e.direction & Ht ? (o = 0 === r ? Ft : 0 > r ? _t : Mt, 
            n = r != this.pX, i = Math.abs(t.deltaX)) : (o = 0 === a ? Ft : 0 > a ? Dt : jt, 
            n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = o, n && i > e.threshold && o & e.direction;
        },
        attrTest: function(t) {
            return tt.prototype.attrTest.call(this, t) && (this.state & ge || !(this.state & ge) && this.directionTest(t));
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = J(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
        }
    }), l(nt, tt, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ ce ];
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ge);
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e;
            }
            this._super.emit.call(this, t);
        }
    }), l(it, G, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ se ];
        },
        process: function(t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (St | Rt) && !r) this.reset(); else if (t.eventType & kt) this.reset(), 
            this._timer = o(function() {
                this.state = be, this.tryEmit();
            }, e.time, this); else if (t.eventType & St) return be;
            return Ue;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(t) {
            this.state === be && (t && t.eventType & St ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = bt(), 
            this.manager.emit(this.options.event, this._input)));
        }
    }), l(ot, tt, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ ce ];
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ge);
        }
    }), l(rt, tt, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Ht | Ot,
            pointers: 1
        },
        getTouchAction: function() {
            return et.prototype.getTouchAction.call(this);
        },
        attrTest: function(t) {
            var e, n = this.options.direction;
            return n & (Ht | Ot) ? e = t.overallVelocity : n & Ht ? e = t.overallVelocityX : n & Ot && (e = t.overallVelocityY), 
            this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & St;
        },
        emit: function(t) {
            var e = J(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
    }), l(at, G, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ le ];
        },
        process: function(t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & kt && 0 === this.count) return this.failTimeout();
            if (i && r && n) {
                if (t.eventType != St) return this.failTimeout();
                var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, s = !this.pCenter || R(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, 
                this._input = t;
                var l = this.count % e.taps;
                if (0 === l) return this.hasRequireFailures() ? (this._timer = o(function() {
                    this.state = be, this.tryEmit();
                }, e.interval, this), ge) : be;
            }
            return Ue;
        },
        failTimeout: function() {
            return this._timer = o(function() {
                this.state = Ue;
            }, this.options.interval, this), Ue;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            this.state == be && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
    }), st.VERSION = "2.0.7", st.defaults = {
        domEvents: !1,
        touchAction: ae,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [ [ ot, {
            enable: !1
        } ], [ nt, {
            enable: !1
        }, [ "rotate" ] ], [ rt, {
            direction: Ht
        } ], [ et, {
            direction: Ht
        }, [ "swipe" ] ], [ at ], [ at, {
            event: "doubletap",
            taps: 2
        }, [ "tap" ] ], [ it ] ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var we = 1, $e = 2;
    lt.prototype = {
        set: function(t) {
            return pt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), 
            this.input.target = t.inputTarget, this.input.init()), this;
        },
        stop: function(t) {
            this.session.stopped = t ? $e : we;
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers, o = e.curRecognizer;
                (!o || o && o.state & be) && (o = e.curRecognizer = null);
                for (var r = 0; r < i.length; ) n = i[r], e.stopped === $e || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(t), 
                !o && n.state & (ge | fe | me) && (o = e.curRecognizer = n), r++;
            }
        },
        get: function(t) {
            if (t instanceof G) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
            return null;
        },
        add: function(t) {
            if (r(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), 
            t;
        },
        remove: function(t) {
            if (r(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers, n = b(e, t);
                -1 !== n && (e.splice(n, 1), this.touchAction.update());
            }
            return this;
        },
        on: function(t, e) {
            if (t !== i && e !== i) {
                var n = this.handlers;
                return a(m(t), function(t) {
                    n[t] = n[t] || [], n[t].push(e);
                }), this;
            }
        },
        off: function(t, e) {
            if (t !== i) {
                var n = this.handlers;
                return a(m(t), function(t) {
                    e ? n[t] && n[t].splice(b(n[t], e), 1) : delete n[t];
                }), this;
            }
        },
        emit: function(t, e) {
            this.options.domEvents && ut(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault();
                };
                for (var i = 0; i < n.length; ) n[i](e), i++;
            }
        },
        destroy: function() {
            this.element && ct(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
            this.element = null;
        }
    }, pt(st, {
        INPUT_START: kt,
        INPUT_MOVE: At,
        INPUT_END: St,
        INPUT_CANCEL: Rt,
        STATE_POSSIBLE: de,
        STATE_BEGAN: ge,
        STATE_CHANGED: fe,
        STATE_ENDED: me,
        STATE_RECOGNIZED: be,
        STATE_CANCELLED: ve,
        STATE_FAILED: Ue,
        DIRECTION_NONE: Ft,
        DIRECTION_LEFT: _t,
        DIRECTION_RIGHT: Mt,
        DIRECTION_UP: Dt,
        DIRECTION_DOWN: jt,
        DIRECTION_HORIZONTAL: Ht,
        DIRECTION_VERTICAL: Ot,
        DIRECTION_ALL: zt,
        Manager: lt,
        Input: T,
        TouchAction: V,
        TouchInput: z,
        MouseInput: D,
        PointerEventInput: j,
        TouchMouseInput: L,
        SingleTouchInput: H,
        Recognizer: G,
        AttrRecognizer: tt,
        Tap: at,
        Pan: et,
        Swipe: rt,
        Pinch: nt,
        Rotate: ot,
        Press: it,
        on: h,
        off: d,
        each: a,
        merge: Ut,
        extend: vt,
        assign: pt,
        inherit: l,
        bindFn: c,
        prefixed: w
    });
    var ye = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    ye.Hammer = st, "function" == typeof define && define.amd ? define(function() {
        return st;
    }) : "undefined" != typeof module && module.exports ? module.exports = st : t[n] = st;
}(window, document, "Hammer"), jQuery.fn.sortElements = function() {
    var t = [].sort;
    return function(e, n) {
        n = n || function() {
            return this;
        };
        var i = this.map(function() {
            var t = n.call(this), e = t.parentNode, i = e.insertBefore(document.createTextNode(""), t.nextSibling);
            return function() {
                if (e === this) throw new Error("You can't sort elements if any one is a descendant of another.");
                e.insertBefore(this, i), e.removeChild(i);
            };
        });
        return t.call(this, e).each(function(t) {
            i[t].call(n.call(this));
        });
    };
}(), function(t, e, n, i) {
    "use strict";
    function o(e, n) {
        this.element = e, this.settings = t.extend({}, a, n), this._defaults = a, this._name = r, 
        this.init();
    }
    var r = "urbModal", a = {};
    t.extend(o.prototype, {
        init: function() {
            var e = t(this.element).addClass("modal-shade"), n = t('<div class="modal-content" />'), i = t('<button class="modal-close" type="button" />'), o = function(i) {
                var o = t(i.target);
                return o.is(".modal-content") || o.closest(".modal-content").length ? !0 : (n.removeClass("animated fadeInDown").addClass("animated fadeOutDown"), 
                e.removeClass("modal-opened animated fadeIn").addClass("modal-closing animated fadeOut"), 
                void setTimeout(function() {
                    t("body").removeClass("no-scroll"), e.removeClass("modal-closing animated fadeOut");
                }, 500));
            };
            e.on("click", o), e.wrapInner(n), e.append(i);
        },
        show: function() {
            var e = t(this.element), n = t(".modal-content", e);
            n.removeClass("fadeOutDown").addClass("animated fadeInDown"), e.addClass("modal-opened animated fadeIn"), 
            t("body").addClass("no-scroll");
        }
    }), t.fn[r] = function(e) {
        return this.each(function() {
            t.data(this, r) || t.data(this, r, new o(this, e));
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
            var n = t.data("loading");
            t.data("loading", t.text()).text(n), t.removeClass("loading").addClass(e ? "success" : "failure").removeAttr("disabled");
        } else {
            var i = t.data("loading");
            t.data("loading", t.text()).text(i), t.addClass("loading").attr("disabled", !0);
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
    var e = Urb.$wpadminbar && Urb.$window.outerWidth() > 600 ? Urb.$wpadminbar.outerHeight() : 0, n = Urb.$pageNavigation.outerHeight() + e, i = t("main"), o = {
        "#contact": t("#contact"),
        "#beer": t("#beer")
    };
    i.length && (o[i.attr("id")] = i), Urb.highlightCurrentSection = function() {
        t("a.active", Urb.$pageNavigation).removeClass("active");
        for (var e in o) {
            var n = o[e];
            Urb.scrollPosition > n.offset().top - .5 * Urb.$window.height() && Urb.scrollPosition < n.offset().top + n.outerHeight() - .5 * Urb.$window.height() && t('a[href*="' + e + '"]', Urb.$pageNavigation).addClass("active");
        }
    }, Urb.loadPage = function(n) {
        var i = t("main");
        if ("/" === n || "" === n) {
            var o = 0, r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - o) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: o
            }, r), i.animate({
                height: 0
            }, r), void setTimeout(function() {
                i.remove();
            }, r + 250);
        }
        var a = [];
        t('a[href^="#"]').each(function() {
            var t = this.href.substring(this.href.indexOf("#"));
            a.push(t);
        });
        var s = n.replace("/", "#");
        if (-1 !== t.inArray(s, a)) {
            var o = t(n.replace("/", "#")).offset().top - e, r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - o) / Urb.$window.height()));
            return t("html,body").animate({
                scrollTop: o
            }, r), i.animate({
                height: 0
            }, r), void setTimeout(function() {
                i.remove();
            }, r + 250);
        }
        var o = t(".site-posts").offset().top + t(".site-posts").outerHeight(), r = Math.round(500 * (Math.abs(Urb.$window.scrollTop() - o) / Urb.$window.height()));
        i.length > 0 || (i = t('<main class="new page row around-xs" />'), t(".site-posts").after(i)), 
        i.append('<span class="loading-text"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>').addClass("loading"), 
        setTimeout(function() {
            i.animate({
                height: 0
            }, 500);
        }, r), t("html,body").animate({
            scrollTop: o - e
        }, r), t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "getmaincontent",
                nonce: _URB.nonce,
                slug: n
            },
            dataType: "json",
            success: function(e) {
                if (e.success) {
                    var n = t(e.data);
                    i.replaceWith(n), Urb.$window.trigger("ajaxload");
                    var o = 0;
                    t(".page-header > *, .page-content > *, .page-footer > *, .post-header > *, .post-content > *, .post-footer > *", n).each(function() {
                        var e = t(this);
                        e.hide(), setTimeout(function() {
                            e.fadeIn(250);
                        }, o), o += 213;
                    });
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
                    var n = t(this), i = n.attr("href").replace(window.location.protocol + "//" + window.location.host, "");
                    window.history.pushState({}, n.text(), i), Urb.loadPage(i), t("body").trigger("click");
                }
            });
        });
    }, Urb.setupExternalLinks = function() {
        t('a[href^="http"]:not([href*="' + window.location.host + '"])').attr("target", "_blank");
    }, Urb.setupFragmentAnchors = function() {
        Urb.$document.on("click", 'a[href^="#"]', function(n) {
            n.preventDefault();
            var i = t.attr(this, "href"), o = 0, r = t(i);
            return "#" !== i && 0 !== r.length ? o = r.offset().top : i = "/", t("html,body").animate({
                scrollTop: Math.ceil(o - e)
            }, Math.round(500 * (Math.abs(Urb.$window.scrollTop() - o) / Urb.$window.height()))), 
            !1;
        });
    }, Urb.setupPageNavigation = function() {
        Urb.$pageNavigation.find(".menu-item a").click(function() {
            var e = t(this);
            e.blur();
        }), Urb.$menuToggle = t("#menu-toggle"), Urb.$menuToggle.on("click", function() {
            var n = !1;
            Urb.scrollPosition > 0 && (Urb.scrollPosition < Urb.$window.height() / 2 ? n = 0 : Urb.scrollPosition < Urb.$window.height() && (n = Urb.$window.height())), 
            n !== !1 ? t("html,body").animate({
                scrollTop: n - e
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
        Urb.scrollPosition >= Urb.windowHeightMinusWPHeaderHeight ? Urb.$siteNavigation.addClass("stuck-top") : Urb.$siteNavigation.removeClass("stuck-top"), 
        Urb.highlightCurrentSection();
    }, Urb.scrollSocialNavigation = function() {
        Urb.$socialNavigation.is(":visible") ? Urb.scrollPosition > Urb.$window.height() ? Urb.$socialNavigation.addClass("hidden") : Urb.$socialNavigation.css({
            opacity: (1 - Urb.scrollPosition / (Urb.$window.height() / 15)).toFixed(2),
            "margin-top": (-1 * Urb.scrollPosition / 5).toFixed() + "px",
            transform: "scale(" + (1 - .2 * Urb.scrollPosition / (Urb.$window.height() / 5)).toFixed(2) + ")"
        }) : Urb.scrollPosition < Urb.$window.height() && Urb.$socialNavigation.removeClass("hidden");
    }, Urb.scrollToContent = function() {
        if (Urb.$body.hasClass("home") || 0 != Urb.$window.scrollTop()) {
            if (location.hash) {
                var i = t(location.hash), o = 5;
                Urb.$window.scrollTop() > i.offset().top - (n + o) && Urb.$window.scrollTop() < i.offset().top + o && Urb.$window.scrollTop(i.offset().top - n);
            } else if (location.pathname && location.pathname.match(/^\/(beer|contact)\/?$/)) {
                var i = t(location.pathname.replace(/\/$/, "").replace(/\/+/, "#")), o = 5;
                0 == Urb.$window.scrollTop() && i.length && Urb.$window.scrollTop(i.offset().top);
            }
        } else Urb.$window.scrollTop(t("main").offset().top - e);
    }, "scrollRestoration" in history && (history.scrollRestoration = "manual"), Urb.$window.on("load orientationchange resize", Urb.setupNavigationSnap), 
    Urb.$window.on("ajaxload load", Urb.setupExternalLinks), Urb.$window.on("load", Urb.setupFragmentAnchors), 
    Urb.$window.on("ajaxload load", Urb.setupInternalLinks), Urb.$window.on("load", Urb.setupPageNavigation), 
    Urb.$window.on("load scroll", Urb.scrollPageNavigation), Urb.$window.on("load scroll", Urb.scrollSocialNavigation), 
    Urb.$window.on("load", function() {
        setTimeout(Urb.scrollToContent, 1);
    }), Urb.$window.on("popstate", Urb.performHistoryNavigation);
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
        var e = t(this), n = e.data("tooltip");
        n && (n.removeClass("active"), setTimeout(function() {
            n.hasClass("active") || (e.data("tooltip", !1), e.attr("title", e.attr("data-title")), 
            e.removeAttr("data-title"), n.remove());
        }, 1e3));
    }, Urb.positionTooltip = function(t, e) {
        var n = e.offset().top - 1.25 * t.outerHeight() < Urb.scrollPosition;
        t.toggleClass("above", !n), t.toggleClass("below", n), n ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2,
            top: e.offset().top + e.outerHeight() + .25 * t.outerHeight()
        }) : t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2,
            top: e.offset().top - 1.25 * t.outerHeight()
        });
        var i = t.offset().left < 0, o = t.offset().left + t.outerWidth() > Urb.$window.width();
        t.toggleClass("left", i), t.toggleClass("right", o), i ? t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 + -1 * t.offset().left
        }) : o && t.css({
            left: e.offset().left + e.width() / 2 - t.outerWidth() / 2 - (t.offset().left + t.outerWidth() - Urb.$window.width())
        });
    }, Urb.showTooltip = function() {
        var e = t(this), n = e.data("tooltip"), i = e.attr("title");
        e.parents(".map-canvas") || (n ? (Urb.positionTooltip(n, e), n.addClass("active")) : (n = t("<div />"), 
        n.addClass("tooltip"), n.text(i), Urb.$body.append(n), Urb.positionTooltip(n, e), 
        e.data("tooltip", n), n.addClass("active"), e.attr("data-title", i), e.removeAttr("title")));
    }, Urb.setupTooltips = function() {
        Urb.$body.on("mouseleave", "[title], [data-title]", Urb.hideTooltip), Urb.$body.on("mouseenter", "[title], [data-title]", Urb.showTooltip);
    }, Urb.$window.on("ajaxload load", Urb.setupTooltips);
}), jQuery(function(t) {
    var e, n = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, i = (Urb.$pageNavigation.outerHeight() + n, 
    t('<button class="next"><span class="fa fa-angle-right"></span></button>')), o = t('<button class="previous"><span class="fa fa-angle-left"></span></button>'), r = t(".site-posts .latest-posts .blog-post h4");
    Urb.automaticNavigation = function() {
        Urb.showNextPost();
    }, Urb.showPreviousPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), n = e.prev(".previous.blog-post");
        0 === Urb.scrollPosition && n.length && o.trigger("click");
    }, Urb.showNextPost = function() {
        var e = t(".site-posts .latest-posts .blog-post.active"), n = e.next(".next.blog-post");
        0 === Urb.scrollPosition && n.length && i.trigger("click");
    }, Urb.scrollHeader = function() {
        r.each(function() {
            var e = t(this);
            e.parents(".blog-post").is(".active") && (Urb.scrollPosition > 0 && Urb.scrollPosition < Urb.$window.height() ? e.css({
                height: (100 - 25 * Urb.scrollPosition / Urb.$window.height()).toFixed(2) + "%",
                transform: "scale(" + (1 - .15 * Urb.scrollPosition / Urb.$window.height()).toFixed(3) + ")"
            }) : e.removeAttr("style"));
        });
    }, Urb.setupHeaderNavigation = function() {
        i.on("click", function(n) {
            var r = t(".site-posts .latest-posts .blog-post.active"), a = r.next(".next.blog-post"), s = t(".site-posts .latest-posts .blog-post:first-child");
            r.length ? (o.addClass("active"), r.removeClass("active").addClass("previous"), 
            a.length && (a.removeClass("previous next").addClass("active"), Urb.getNextPost()), 
            a.next(".next.blog-post").length || i.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != n.which && e && clearInterval(e);
        }), o.on("click", function(n) {
            var r = t(".site-posts .latest-posts .blog-post.active"), a = r.prev(".previous.blog-post"), s = t(".site-posts .latest-posts .blog-post:last-child");
            r.length ? (i.addClass("active"), r.removeClass("active").addClass("next"), a.length && a.removeClass("previous next").addClass("active"), 
            a.prev(".previous.blog-post").length || o.removeClass("active")) : s.removeClass("previous next").addClass("active"), 
            void 0 != n.which && e && clearInterval(e);
        }), t(".site-posts .latest-posts").after(i).after(o), t(".site-posts .latest-posts .blog-post > a").on("dragstart", function() {
            return !1;
        });
        var n = document.getElementById("latest-posts"), r = new Hammer(n);
        r.on("swiperight", function() {
            Urb.showPreviousPost(), Urb.stopAutomaticNavigation();
        }), r.on("swipeleft", function() {
            Urb.showNextPost(), Urb.stopAutomaticNavigation();
        }), setTimeout(Urb.getNextPost, 500);
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
                    var n = t("<li />");
                    n.addClass("blog-post next"), n.attr("data-post-id", e.data.ID);
                    var o = t("<a />");
                    if (o.attr("href", e.data.permalink), o.on("dragstart", function() {
                        return !1;
                    }), n.append(o), e.data.thumbnail) {
                        var r = t("<span />");
                        r.addClass("blog-post-image"), e.data.image_src && r.css({
                            "background-image": "url(" + e.data.image_src + ")"
                        }), r.append(e.data.thumbnail), o.append(r);
                    }
                    if (e.data.post_title) {
                        var a = t("<h4 />");
                        a.text(e.data.post_title), o.append(a);
                    }
                    if (e.data.excerpt) {
                        var s = t("<div />");
                        s.addClass("blog-post-intro"), s.html(e.data.excerpt), n.append(s);
                    }
                    t(".site-posts .latest-posts").append(n), i.addClass("active"), Urb.startAutomaticNavigation();
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
        }).sortElements(function(e, n) {
            return t.text([ e ]) == t.text([ n ]) ? 0 : t.text([ e ]) > t.text([ n ]) ? 1 : -1;
        }, function() {
            return this.parentNode;
        }), Urb.$currentBeerDeck.find("td").filter(function() {
            return t(this).index() === e.index();
        }).sortElements(function(e, n) {
            return t.text([ e ]) == t.text([ n ]) ? 0 : t.text([ e ]) > t.text([ n ]) ? 1 : -1;
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
    var e = Urb.$wpadminbar ? Urb.$wpadminbar.outerHeight() : 0, n = Urb.$pageNavigation.outerHeight() + e;
    Urb.centerMap = function() {
        Urb.$map.data("map") && setTimeout(function() {
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
        var e = new Date(), n = e.getDay() + 1;
        t("dt:nth-of-type(" + n + "), dd:nth-of-type(" + n + ")", Urb.$businesHours).addClass("today"), 
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
            draggable: !1,
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
            var n = new google.maps.Map(Urb.$mapCanvas.get(0), e), i = new google.maps.Marker({
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
                map: n,
                position: e.center
            }), o = new google.maps.InfoWindow({
                content: Urb.$address.html()
            });
            Urb.$map.data("map", n), Urb.$map.data("marker", i), Urb.$map.data("infoWindow", o), 
            google.maps.event.addListener(i, "click", function() {
                o.open(n, i);
            }), o.open(n, i);
        })), t("#menu-map-icons a").each(function() {
            t(this).attr("title", this.textContent);
        });
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
    }, Urb.toggleMap = function(e) {
        if (e.preventDefault(), Urb.$map.data("map") || Urb.setupMap(), Urb.$map.toggleClass("open"), 
        Urb.$map.hasClass("open")) {
            Urb.$map.addClass("animating");
            var i = (Urb.$window.outerHeight() - n - t("h3", Urb.$map).outerHeight()).toFixed(0);
            t(".map-container, .map-canvas", Urb.$map).css("height", i + "px"), t("html,body").animate({
                scrollTop: Urb.$window.scrollTop() + i
            }, 666, function() {
                Urb.$map.removeClass("animating");
            });
        } else t(".map-container, .map-canvas", Urb.$map).removeAttr("style");
    }, Urb.validateContactForm = function() {
        var t = Urb.$contactForm.data("email_address");
        return t.val().length < 3 || t.val().indexOf("@") < 0 ? (t.closest(".field").addClass("error").attr("title", "Valid email address required."), 
        !1) : !0;
    }, Urb.$window.on("scroll", Urb.scrollMap), Urb.$window.on("load", Urb.setupBusinessHours), 
    Urb.$mapLink.on("click", Urb.toggleMap), Urb.$window.on("load", Urb.setupContactForm), 
    Urb.$window.on("resize", Urb.centerMap);
}), jQuery(function(t) {
    Urb.rateBeer = function() {
        var e = t(".rating-actions"), n = t(this);
        return e.addClass("rated"), n.addClass("rated"), n.prevAll(".rate-button").addClass("rated"), 
        n.nextAll(".rate-button").removeClass("rated"), t.ajax({
            type: "POST",
            url: _URB.url,
            data: {
                action: "post-rate",
                nonce: _URB.nonce,
                post_rating: n.val(),
                post_id: n.data("id")
            },
            dataType: "json",
            success: function(t) {
                t.success ? Urb.$aggregateRating.attr("data-user-rating", n.val()) : console.log(t), 
                Urb.shareRating(n.val());
            }
        }), !1;
    }, Urb.setupRatingPoll = function() {
        Urb.$aggregateRating = t('[itemprop="aggregateRating"]'), Urb.$beerCheckinModal = t(".beer-checkin.modal");
        var e = t('<div class="rating-actions" />');
        Number(Urb.$aggregateRating.data("user-rating")) > 0 && e.addClass("rated");
        for (var n = 1; 5 >= n; n++) {
            var i = t('<button class="rate-button" />');
            i.val(n), i.data("id", Urb.$aggregateRating.data("beer-id")), i.text(1 === n ? "1 Star" : n + " Stars"), 
            i.toggleClass("rated", n <= Number(Urb.$aggregateRating.data("user-rating"))), e.append(i), 
            i.on("click", Urb.rateBeer);
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
                var n = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), i = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), o = n * i;
                if (e.response.beer) {
                    var r = e.response.beer.rating_score, a = e.response.beer.rating_count, s = r * a, l = o + s, c = i + a, u = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", u.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(u.toFixed(1)), 
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
                var n = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), i = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), o = n * i;
                if (e) {
                    var r = Number(e.rating_value) / Number(e.best_rating) * 5, a = Number(e.review_count), s = r * a, l = o + s, c = i + a, u = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", u.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(u.toFixed(1)), 
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
                var n = Number(t('[itemprop="ratingValue"]', Urb.$aggregateRating).text()), i = Number(t('[itemprop="reviewCount"]', Urb.$aggregateRating).text()), o = n * i;
                if (e) {
                    var r = Number(e.rating_value) / Number(e.best_rating) * 5, a = Number(e.review_count), s = r * a, l = o + s, c = i + a, u = l / c;
                    Urb.$aggregateRating.attr("data-overall-rating", u.toFixed(1)), t('[itemprop="ratingValue"]', Urb.$aggregateRating).text(u.toFixed(1)), 
                    t('[itemprop="reviewCount"]', Urb.$aggregateRating).text(c.toFixed(0));
                }
            }
        });
    }, Urb.shareRating = function(e) {
        var n = t(".message", Urb.$beerCheckinModal);
        0 == n.length && (n = t('<div class="message" />'), t(".modal-content", Urb.$beerCheckinModal).prepend(n));
        var i = "Thanks.";
        switch (Number(e)) {
          case 5:
            i = "Wow, Thank You!";
            break;

          case 4:
            i = "Glad You Enjoyed It!";
            break;

          case 3:
            i = "Thanks!";
            break;

          case 2:
            i = "Thank you.";
            break;

          case 1:
            i = "We can do better.";
        }
        n.text(i), Urb.showModal(".beer-checkin.modal");
    }, Urb.$window.on("ajaxload load", Urb.setupRatingPoll);
}), jQuery(function(t) {}), jQuery(function(t) {}), jQuery(function(t) {}), jQuery(function(t) {}), 
function(t, e, n, i, o, r, a) {
    t.GoogleAnalyticsObject = o, t[o] = t[o] || function() {
        (t[o].q = t[o].q || []).push(arguments);
    }, t[o].l = 1 * new Date(), r = e.createElement(n), a = e.getElementsByTagName(n)[0], 
    r.async = 1, r.src = i, a.parentNode.insertBefore(r, a);
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), 
ga("create", "UA-54926068-6", "auto"), ga("require", "linkid", "linkid.js"), ga("set", "anonymizeIp", !0), 
ga("send", "pageview");
//# sourceMappingURL=script.js.map
