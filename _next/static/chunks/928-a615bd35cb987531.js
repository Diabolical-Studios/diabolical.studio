(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[928], {
    2796: function(t, e, r) {
        t.exports = r(643)
    },
    3264: function(t) {
        "use strict";
        var e = !("undefined" === typeof window || !window.document || !window.document.createElement)
          , r = {
            canUseDOM: e,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners: e && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: e && !!window.screen,
            isInWorker: !e
        };
        t.exports = r
    },
    4518: function(t) {
        var e, r, i, s, n, a, o, h, u, l, c, d, p, f, g, m = !1;
        function y() {
            if (!m) {
                m = !0;
                var t = navigator.userAgent
                  , y = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t)
                  , x = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
                if (d = /\b(iPhone|iP[ao]d)/.exec(t),
                p = /\b(iP[ao]d)/.exec(t),
                l = /Android/i.exec(t),
                f = /FBAN\/\w+;/i.exec(t),
                g = /Mobile/i.exec(t),
                c = !!/Win64/.exec(t),
                y) {
                    (e = y[1] ? parseFloat(y[1]) : y[5] ? parseFloat(y[5]) : NaN) && document && document.documentMode && (e = document.documentMode);
                    var v = /(?:Trident\/(\d+.\d+))/.exec(t);
                    a = v ? parseFloat(v[1]) + 4 : e,
                    r = y[2] ? parseFloat(y[2]) : NaN,
                    i = y[3] ? parseFloat(y[3]) : NaN,
                    (s = y[4] ? parseFloat(y[4]) : NaN) ? (y = /(?:Chrome\/(\d+\.\d+))/.exec(t),
                    n = y && y[1] ? parseFloat(y[1]) : NaN) : n = NaN
                } else
                    e = r = i = n = s = NaN;
                if (x) {
                    if (x[1]) {
                        var b = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                        o = !b || parseFloat(b[1].replace("_", "."))
                    } else
                        o = !1;
                    h = !!x[2],
                    u = !!x[3]
                } else
                    o = h = u = !1
            }
        }
        var x = {
            ie: function() {
                return y() || e
            },
            ieCompatibilityMode: function() {
                return y() || a > e
            },
            ie64: function() {
                return x.ie() && c
            },
            firefox: function() {
                return y() || r
            },
            opera: function() {
                return y() || i
            },
            webkit: function() {
                return y() || s
            },
            safari: function() {
                return x.webkit()
            },
            chrome: function() {
                return y() || n
            },
            windows: function() {
                return y() || h
            },
            osx: function() {
                return y() || o
            },
            linux: function() {
                return y() || u
            },
            iphone: function() {
                return y() || d
            },
            mobile: function() {
                return y() || d || p || l || g
            },
            nativeApp: function() {
                return y() || f
            },
            android: function() {
                return y() || l
            },
            ipad: function() {
                return y() || p
            }
        };
        t.exports = x
    },
    6534: function(t, e, r) {
        "use strict";
        var i, s = r(3264);
        s.canUseDOM && (i = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")),
        t.exports = function(t, e) {
            if (!s.canUseDOM || e && !("addEventListener"in document))
                return !1;
            var r = "on" + t
              , n = r in document;
            if (!n) {
                var a = document.createElement("div");
                a.setAttribute(r, "return;"),
                n = "function" === typeof a[r]
            }
            return !n && i && "wheel" === t && (n = document.implementation.hasFeature("Events.wheel", "3.0")),
            n
        }
    },
    643: function(t, e, r) {
        "use strict";
        var i = r(4518)
          , s = r(6534);
        function n(t) {
            var e = 0
              , r = 0
              , i = 0
              , s = 0;
            return "detail"in t && (r = t.detail),
            "wheelDelta"in t && (r = -t.wheelDelta / 120),
            "wheelDeltaY"in t && (r = -t.wheelDeltaY / 120),
            "wheelDeltaX"in t && (e = -t.wheelDeltaX / 120),
            "axis"in t && t.axis === t.HORIZONTAL_AXIS && (e = r,
            r = 0),
            i = 10 * e,
            s = 10 * r,
            "deltaY"in t && (s = t.deltaY),
            "deltaX"in t && (i = t.deltaX),
            (i || s) && t.deltaMode && (1 == t.deltaMode ? (i *= 40,
            s *= 40) : (i *= 800,
            s *= 800)),
            i && !e && (e = i < 1 ? -1 : 1),
            s && !r && (r = s < 1 ? -1 : 1),
            {
                spinX: e,
                spinY: r,
                pixelX: i,
                pixelY: s
            }
        }
        n.getEventType = function() {
            return i.firefox() ? "DOMMouseScroll" : s("wheel") ? "wheel" : "mousewheel"
        }
        ,
        t.exports = n
    },
    3775: function(t, e, r) {
        "use strict";
        r.d(e, {
            j: function() {
                return jt
            }
        });
        const i = t=>t;
        let s = i
          , n = i;
        const a = t=>1e3 * t
          , o = !1;
        var h = r(404);
        const u = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , l = t=>e=>1 - t(1 - e)
          , c = t=>t * t
          , d = l(c)
          , p = u(c);
        var f = r(6430)
          , g = r(4169)
          , m = r(1649);
        const y = (t,e)=>r=>Boolean((0,
        f.HD)(r) && f.mj.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e))
          , x = (t,e,r)=>i=>{
            if (!(0,
            f.HD)(i))
                return i;
            const [s,n,a,o] = i.match(f.KP);
            return {
                [t]: parseFloat(s),
                [e]: parseFloat(n),
                [r]: parseFloat(a),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        }
          , v = {
            ...m.Rx,
            transform: t=>Math.round((t=>(0,
            g.u)(0, 255, t))(t))
        }
          , b = {
            test: y("rgb", "red"),
            parse: x("red", "green", "blue"),
            transform: ({red: t, green: e, blue: r, alpha: i=1})=>"rgba(" + v.transform(t) + ", " + v.transform(e) + ", " + v.transform(r) + ", " + (0,
            f.Nw)(m.Fq.transform(i)) + ")"
        };
        const M = {
            test: y("#"),
            parse: function(t) {
                let e = ""
                  , r = ""
                  , i = ""
                  , s = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                r = t.substring(3, 5),
                i = t.substring(5, 7),
                s = t.substring(7, 9)) : (e = t.substring(1, 2),
                r = t.substring(2, 3),
                i = t.substring(3, 4),
                s = t.substring(4, 5),
                e += e,
                r += r,
                i += i,
                s += s),
                {
                    red: parseInt(e, 16),
                    green: parseInt(r, 16),
                    blue: parseInt(i, 16),
                    alpha: s ? parseInt(s, 16) / 255 : 1
                }
            },
            transform: b.transform
        };
        var A = r(6190);
        const w = {
            test: y("hsl", "hue"),
            parse: x("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: r, alpha: i=1})=>"hsla(" + Math.round(t) + ", " + A.aQ.transform((0,
            f.Nw)(e)) + ", " + A.aQ.transform((0,
            f.Nw)(r)) + ", " + (0,
            f.Nw)(m.Fq.transform(i)) + ")"
        }
          , E = {
            test: t=>b.test(t) || M.test(t) || w.test(t),
            parse: t=>b.test(t) ? b.parse(t) : w.test(t) ? w.parse(t) : M.parse(t),
            transform: t=>(0,
            f.HD)(t) ? t : t.hasOwnProperty("red") ? b.transform(t) : w.transform(t)
        }
          , _ = (t,e,r)=>-r * t + r * e + t;
        function T(t, e, r) {
            return r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        const F = (t,e,r)=>{
            const i = t * t;
            return Math.sqrt(Math.max(0, r * (e * e - i) + i))
        }
          , S = [M, b, w];
        function C(t) {
            const e = (r = t,
            S.find((t=>t.test(r))));
            var r;
            n(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let i = e.parse(t);
            return e === w && (i = function({hue: t, saturation: e, lightness: r, alpha: i}) {
                t /= 360,
                r /= 100;
                let s = 0
                  , n = 0
                  , a = 0;
                if (e /= 100) {
                    const i = r < .5 ? r * (1 + e) : r + e - r * e
                      , o = 2 * r - i;
                    s = T(o, i, t + 1 / 3),
                    n = T(o, i, t),
                    a = T(o, i, t - 1 / 3)
                } else
                    s = n = a = r;
                return {
                    red: Math.round(255 * s),
                    green: Math.round(255 * n),
                    blue: Math.round(255 * a),
                    alpha: i
                }
            }(i)),
            i
        }
        const R = (t,e)=>{
            const r = C(t)
              , i = C(e)
              , s = {
                ...r
            };
            return t=>(s.red = F(r.red, i.red, t),
            s.green = F(r.green, i.green, t),
            s.blue = F(r.blue, i.blue, t),
            s.alpha = _(r.alpha, i.alpha, t),
            b.transform(s))
        }
          , N = (t,e)=>r=>e(t(r))
          , P = (...t)=>t.reduce(N)
          , O = "${c}"
          , D = "${n}";
        function I(t) {
            "number" === typeof t && (t = `${t}`);
            const e = [];
            let r = 0
              , i = 0;
            const s = t.match(f.dA);
            s && (r = s.length,
            t = t.replace(f.dA, O),
            e.push(...s.map(E.parse)));
            const n = t.match(f.KP);
            return n && (i = n.length,
            t = t.replace(f.KP, D),
            e.push(...n.map(m.Rx.parse))),
            {
                values: e,
                numColors: r,
                numNumbers: i,
                tokenised: t
            }
        }
        function U(t) {
            return I(t).values
        }
        function B(t) {
            const {values: e, numColors: r, tokenised: i} = I(t)
              , s = e.length;
            return t=>{
                let e = i;
                for (let i = 0; i < s; i++)
                    e = e.replace(i < r ? O : D, i < r ? E.transform(t[i]) : (0,
                    f.Nw)(t[i]));
                return e
            }
        }
        const L = t=>"number" === typeof t ? 0 : t;
        const z = {
            test: function(t) {
                var e, r;
                return isNaN(t) && (0,
                f.HD)(t) && ((null === (e = t.match(f.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(f.dA)) || void 0 === r ? void 0 : r.length) || 0) > 0
            },
            parse: U,
            createTransformer: B,
            getAnimatableNone: function(t) {
                const e = U(t);
                return B(t)(e.map(L))
            }
        };
        function k(t, e) {
            return "number" === typeof t ? r=>_(t, e, r) : E.test(t) ? R(t, e) : X(t, e)
        }
        const q = (t,e)=>{
            const r = [...t]
              , i = r.length
              , s = t.map(((t,r)=>k(t, e[r])));
            return t=>{
                for (let e = 0; e < i; e++)
                    r[e] = s[e](t);
                return r
            }
        }
          , V = (t,e)=>{
            const r = {
                ...t,
                ...e
            }
              , i = {};
            for (const s in r)
                void 0 !== t[s] && void 0 !== e[s] && (i[s] = k(t[s], e[s]));
            return t=>{
                for (const e in i)
                    r[e] = i[e](t);
                return r
            }
        }
          , X = (t,e)=>{
            const r = z.createTransformer(e)
              , i = I(t)
              , n = I(e);
            return i.numColors === n.numColors && i.numNumbers >= n.numNumbers ? P(q(i.values, n.values), r) : (s(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            r=>`${r > 0 ? e : t}`)
        }
          , G = (t,e,r)=>{
            const i = e - t;
            return 0 === i ? 1 : (r - t) / i
        }
          , Y = (t,e)=>r=>_(t, e, r);
        function W(t, e, r) {
            const i = []
              , s = r || ("number" === typeof (n = t[0]) ? Y : "string" === typeof n ? E.test(n) ? R : X : Array.isArray(n) ? q : "object" === typeof n ? V : Y);
            var n;
            const a = t.length - 1;
            for (let o = 0; o < a; o++) {
                let r = s(t[o], t[o + 1]);
                if (e) {
                    const t = Array.isArray(e) ? e[o] : e;
                    r = P(t, r)
                }
                i.push(r)
            }
            return i
        }
        function j(t, e, {clamp: r=!0, ease: i, mixer: s}={}) {
            const a = t.length;
            n(a === e.length, "Both input and output ranges must be the same length"),
            n(!i || !Array.isArray(i) || i.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),
            t[0] > t[a - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            const o = W(e, i, s)
              , h = o.length
              , u = e=>{
                let r = 0;
                if (h > 1)
                    for (; r < t.length - 2 && !(e < t[r + 1]); r++)
                        ;
                const i = G(t[r], t[r + 1], e);
                return o[r](i)
            }
            ;
            return r ? e=>u((0,
            g.u)(t[0], t[a - 1], e)) : u
        }
        function $(t) {
            const e = [0];
            return function(t, e) {
                const r = t[t.length - 1];
                for (let i = 1; i <= e; i++) {
                    const s = G(0, e, i);
                    t.push(_(r, 1, s))
                }
            }(e, t.length - 1),
            e
        }
        const Z = (t,e,r)=>(((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
        function H(t, e, r, s) {
            if (t === e && r === s)
                return i;
            const n = e=>function(t, e, r, i, s) {
                let n, a, o = 0;
                do {
                    a = e + (r - e) / 2,
                    n = Z(a, i, s) - t,
                    n > 0 ? r = a : e = a
                } while (Math.abs(n) > 1e-7 && ++o < 12);
                return a
            }(e, 0, 1, t, r);
            return t=>0 === t || 1 === t ? t : Z(n(t), e, s)
        }
        const K = t=>1 - Math.sin(Math.acos(t))
          , Q = l(K)
          , J = u(Q)
          , tt = H(.33, 1.53, .69, .99)
          , et = l(tt)
          , rt = u(et)
          , it = {
            linear: i,
            easeIn: c,
            easeInOut: p,
            easeOut: d,
            circIn: K,
            circInOut: J,
            circOut: Q,
            backIn: et,
            backInOut: rt,
            backOut: tt,
            anticipate: t=>(t *= 2) < 1 ? .5 * et(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , st = t=>{
            if (Array.isArray(t)) {
                n(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                const [e,r,i,s] = t;
                return H(e, r, i, s)
            }
            return "string" === typeof t ? (n(void 0 !== it[t], `Invalid easing type '${t}'`),
            it[t]) : t
        }
        ;
        function nt({keyframes: t, ease: e=p, times: r, duration: i=300}) {
            t = [...t];
            const s = (t=>Array.isArray(t) && "number" !== typeof t[0])(e) ? e.map(st) : st(e)
              , n = {
                done: !1,
                value: t[0]
            }
              , a = function(t, e) {
                return t.map((t=>t * e))
            }(r && r.length === t.length ? r : $(t), i);
            function o() {
                return j(a, t, {
                    ease: Array.isArray(s) ? s : (e = t,
                    r = s,
                    e.map((()=>r || p)).splice(0, e.length - 1))
                });
                var e, r
            }
            let h = o();
            return {
                next: t=>(n.value = h(t),
                n.done = t >= i,
                n),
                flipTarget: ()=>{
                    t.reverse(),
                    h = o()
                }
            }
        }
        const at = .001;
        function ot({duration: t=800, bounce: e=.25, velocity: r=0, mass: i=1}) {
            let n, a;
            s(t <= 1e4, "Spring duration must be 10 seconds or less");
            let o = 1 - e;
            o = (0,
            g.u)(.05, 1, o),
            t = (0,
            g.u)(.01, 10, t / 1e3),
            o < 1 ? (n = e=>{
                const i = e * o
                  , s = i * t
                  , n = i - r
                  , a = ht(e, o)
                  , h = Math.exp(-s);
                return at - n / a * h
            }
            ,
            a = e=>{
                const i = e * o * t
                  , s = i * r + r
                  , a = Math.pow(o, 2) * Math.pow(e, 2) * t
                  , h = Math.exp(-i)
                  , u = ht(Math.pow(e, 2), o);
                return (-n(e) + at > 0 ? -1 : 1) * ((s - a) * h) / u
            }
            ) : (n = e=>Math.exp(-e * t) * ((e - r) * t + 1) - .001,
            a = e=>Math.exp(-e * t) * (t * t * (r - e)));
            const h = function(t, e, r) {
                let i = r;
                for (let s = 1; s < 12; s++)
                    i -= t(i) / e(i);
                return i
            }(n, a, 5 / t);
            if (t *= 1e3,
            isNaN(h))
                return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                };
            {
                const e = Math.pow(h, 2) * i;
                return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(i * e),
                    duration: t
                }
            }
        }
        function ht(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        var ut = r(3038);
        const lt = ["duration", "bounce"]
          , ct = ["stiffness", "damping", "mass"];
        function dt(t, e) {
            return e.some((e=>void 0 !== t[e]))
        }
        function pt({keyframes: t, restDelta: e, restSpeed: r, ...i}) {
            let s = t[0]
              , n = t[t.length - 1];
            const a = {
                done: !1,
                value: s
            }
              , {stiffness: o, damping: h, mass: u, velocity: l, duration: c, isResolvedFromDuration: d} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!dt(t, ct) && dt(t, lt)) {
                    const r = ot(t);
                    e = {
                        ...e,
                        ...r,
                        velocity: 0,
                        mass: 1
                    },
                    e.isResolvedFromDuration = !0
                }
                return e
            }(i);
            let p = ft
              , f = l ? -l / 1e3 : 0;
            const g = h / (2 * Math.sqrt(o * u));
            function m() {
                const t = n - s
                  , i = Math.sqrt(o / u) / 1e3
                  , a = Math.abs(t) < 5;
                if (r || (r = a ? .01 : 2),
                e || (e = a ? .005 : .5),
                g < 1) {
                    const e = ht(i, g);
                    p = r=>{
                        const s = Math.exp(-g * i * r);
                        return n - s * ((f + g * i * t) / e * Math.sin(e * r) + t * Math.cos(e * r))
                    }
                } else if (1 === g)
                    p = e=>n - Math.exp(-i * e) * (t + (f + i * t) * e);
                else {
                    const e = i * Math.sqrt(g * g - 1);
                    p = r=>{
                        const s = Math.exp(-g * i * r)
                          , a = Math.min(e * r, 300);
                        return n - s * ((f + g * i * t) * Math.sinh(a) + e * t * Math.cosh(a)) / e
                    }
                }
            }
            return m(),
            {
                next: t=>{
                    const i = p(t);
                    if (d)
                        a.done = t >= c;
                    else {
                        let s = f;
                        if (0 !== t)
                            if (g < 1) {
                                const e = Math.max(0, t - 5);
                                s = (0,
                                ut.R)(i - p(e), t - e)
                            } else
                                s = 0;
                        const o = Math.abs(s) <= r
                          , h = Math.abs(n - i) <= e;
                        a.done = o && h
                    }
                    return a.value = a.done ? n : i,
                    a
                }
                ,
                flipTarget: ()=>{
                    f = -f,
                    [s,n] = [n, s],
                    m()
                }
            }
        }
        pt.needsInterpolation = (t,e)=>"string" === typeof t || "string" === typeof e;
        const ft = t=>0;
        const gt = {
            decay: function({keyframes: t=[0], velocity: e=0, power: r=.8, timeConstant: i=350, restDelta: s=.5, modifyTarget: n}) {
                const a = t[0]
                  , o = {
                    done: !1,
                    value: a
                };
                let h = r * e;
                const u = a + h
                  , l = void 0 === n ? u : n(u);
                return l !== u && (h = l - a),
                {
                    next: t=>{
                        const e = -h * Math.exp(-t / i);
                        return o.done = !(e > s || e < -s),
                        o.value = o.done ? l : l + e,
                        o
                    }
                    ,
                    flipTarget: ()=>{}
                }
            },
            keyframes: nt,
            tween: nt,
            spring: pt
        };
        function mt(t, e, r=0) {
            return t - e - r
        }
        const yt = t=>{
            const e = ({delta: e})=>t(e);
            return {
                start: ()=>h.Z_.update(e, !0),
                stop: ()=>h.qY.update(e)
            }
        }
        ;
        function xt({duration: t, driver: e=yt, elapsed: r=0, repeat: i=0, repeatType: s="loop", repeatDelay: n=0, keyframes: a, autoplay: o=!0, onPlay: h, onStop: u, onComplete: l, onRepeat: c, onUpdate: d, type: p="keyframes", ...f}) {
            const g = r;
            let m, y, x = 0, v = t, b = !1, M = !0;
            const A = gt[a.length > 2 ? "keyframes" : p] || nt
              , w = a[0]
              , E = a[a.length - 1];
            let _ = {
                done: !1,
                value: w
            };
            const {needsInterpolation: T} = A;
            T && T(w, E) && (y = j([0, 100], [w, E], {
                clamp: !1
            }),
            a = [0, 100]);
            const F = A({
                ...f,
                duration: t,
                keyframes: a
            });
            function S() {
                x++,
                "reverse" === s ? (M = x % 2 === 0,
                r = function(t, e=0, r=0, i=!0) {
                    return i ? mt(e + -t, e, r) : e - (t - e) + r
                }(r, v, n, M)) : (r = mt(r, v, n),
                "mirror" === s && F.flipTarget()),
                b = !1,
                c && c()
            }
            function C(t) {
                M || (t = -t),
                r += t,
                b || (_ = F.next(Math.max(0, r)),
                y && (_.value = y(_.value)),
                b = M ? _.done : r <= 0),
                d && d(_.value),
                b && (0 === x && (v = void 0 !== v ? v : r),
                x < i ? function(t, e, r, i) {
                    return i ? t >= e + r : t <= -r
                }(r, v, n, M) && S() : (m && m.stop(),
                l && l()))
            }
            return o && (h && h(),
            m = e(C),
            m.start()),
            {
                stop: ()=>{
                    u && u(),
                    m && m.stop()
                }
                ,
                set currentTime(t) {
                    r = g,
                    C(t)
                },
                sample: e=>{
                    r = g;
                    const i = t && "number" === typeof t ? Math.max(.5 * t, 50) : 50;
                    let s = 0;
                    for (C(0); s <= e; ) {
                        const t = e - s;
                        C(Math.min(t, i)),
                        s += i
                    }
                    return _
                }
            }
        }
        const vt = ([t,e,r,i])=>`cubic-bezier(${t}, ${e}, ${r}, ${i})`
          , bt = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: vt([0, .65, .55, 1]),
            circOut: vt([.55, 0, 1, .45]),
            backIn: vt([.31, .01, .66, -.59]),
            backOut: vt([.33, 1.53, .69, .99])
        };
        function Mt(t) {
            if (t)
                return Array.isArray(t) ? vt(t) : bt[t]
        }
        const At = {
            waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate")
        }
          , wt = {}
          , Et = {};
        for (const $t in At)
            Et[$t] = ()=>(void 0 === wt[$t] && (wt[$t] = At[$t]()),
            wt[$t]);
        const _t = new Set(["opacity", "clipPath", "filter", "transform"]);
        function Tt(t, e, {onUpdate: r, onComplete: i, ...s}) {
            if (!(Et.waapi() && _t.has(e) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping))
                return !1;
            let {keyframes: n, duration: a=300, elapsed: o=0, ease: u} = s;
            if ("spring" === s.type || !(!(l = s.ease) || Array.isArray(l) || "string" === typeof l && bt[l])) {
                if (s.repeat === 1 / 0)
                    return;
                const t = xt({
                    ...s,
                    elapsed: 0
                });
                let e = {
                    done: !1,
                    value: n[0]
                };
                const r = [];
                let i = 0;
                for (; !e.done && i < 2e4; )
                    e = t.sample(i),
                    r.push(e.value),
                    i += 10;
                n = r,
                a = i - 10,
                u = "linear"
            }
            var l;
            const c = function(t, e, r, {delay: i=0, duration: s, repeat: n=0, repeatType: a="loop", ease: o, times: h}={}) {
                return t.animate({
                    [e]: r,
                    offset: h
                }, {
                    delay: i,
                    duration: s,
                    easing: Mt(o),
                    fill: "both",
                    iterations: n + 1,
                    direction: "reverse" === a ? "alternate" : "normal"
                })
            }(t.owner.current, e, n, {
                ...s,
                delay: -o,
                duration: a,
                ease: u
            });
            return c.onfinish = ()=>{
                t.set(function(t, {repeat: e, repeatType: r="loop"}) {
                    return t[e && "loop" !== r && e % 2 === 1 ? 0 : t.length - 1]
                }(n, s)),
                h.Z_.update((()=>c.cancel())),
                i && i()
            }
            ,
            {
                get currentTime() {
                    return c.currentTime || 0
                },
                set currentTime(t) {
                    c.currentTime = t
                },
                stop: ()=>{
                    const {currentTime: e} = c;
                    if (e) {
                        const r = xt({
                            ...s,
                            autoplay: !1
                        });
                        t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10)
                    }
                    h.Z_.update((()=>c.cancel()))
                }
            }
        }
        function Ft(t, e) {
            const r = performance.now()
              , i = ({timestamp: s})=>{
                const n = s - r;
                n >= e && (h.qY.read(i),
                t(n - e))
            }
            ;
            return h.Z_.read(i, !0),
            ()=>h.qY.read(i)
        }
        function St({keyframes: t, elapsed: e, onUpdate: r, onComplete: i}) {
            const s = ()=>{
                r && r(t[t.length - 1]),
                i && i()
            }
            ;
            return e ? {
                stop: Ft(s, -e)
            } : s()
        }
        var Ct = r(7367);
        var Rt = r(4714);
        const Nt = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , Pt = {
            type: "keyframes",
            duration: .8
        }
          , Ot = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , Dt = (t,{keyframes: e})=>e.length > 2 ? Pt : Rt.G.has(t) ? t.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : Nt : Ot
          , It = (t,e)=>"zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !z.test(e) || e.startsWith("url(")))
          , Ut = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function Bt(t) {
            const [e,r] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            const [i] = r.match(f.KP) || [];
            if (!i)
                return t;
            const s = r.replace(i, "");
            let n = Ut.has(e) ? 1 : 0;
            return i !== r && (n *= 100),
            e + "(" + n + s + ")"
        }
        const Lt = /([a-z-]*)\(.*?\)/g
          , zt = {
            ...z,
            getAnimatableNone: t=>{
                const e = t.match(Lt);
                return e ? e.map(Bt).join(" ") : t
            }
        };
        const kt = {
            ...r(6173).j,
            color: E,
            backgroundColor: E,
            outlineColor: E,
            fill: E,
            stroke: E,
            borderColor: E,
            borderTopColor: E,
            borderRightColor: E,
            borderBottomColor: E,
            borderLeftColor: E,
            filter: zt,
            WebkitFilter: zt
        };
        function qt(t, e) {
            let r = (t=>kt[t])(t);
            return r !== zt && (r = z),
            r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        }
        function Vt(t) {
            return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }
        function Xt(t) {
            return "number" === typeof t ? 0 : qt("", t)
        }
        const Gt = (t,e,r,i={})=>n=>{
            const h = function(t, e) {
                return t[e] || t.default || t
            }(i, t) || {}
              , u = h.delay || i.delay || 0;
            let {elapsed: l=0} = i;
            l -= a(u);
            const c = function(t, e, r, i) {
                const s = It(e, r);
                let n = void 0 !== i.from ? i.from : t.get();
                return "none" === n && s && "string" === typeof r ? n = qt(e, r) : Vt(n) && "string" === typeof r ? n = Xt(r) : !Array.isArray(r) && Vt(r) && "string" === typeof n && (r = Xt(n)),
                Array.isArray(r) ? (null === r[0] && (r[0] = n),
                r) : [n, r]
            }(e, t, r, h)
              , d = c[0]
              , p = c[c.length - 1]
              , f = It(t, d)
              , g = It(t, p);
            s(f === g, `You are trying to animate ${t} from "${d}" to "${p}". ${d} is not an animatable value - to enable this animation set ${d} to a value animatable to ${p} via the \`style\` property.`);
            let m = {
                keyframes: c,
                velocity: e.getVelocity(),
                ...h,
                elapsed: l,
                onUpdate: t=>{
                    e.set(t),
                    h.onUpdate && h.onUpdate(t)
                }
                ,
                onComplete: ()=>{
                    n(),
                    h.onComplete && h.onComplete()
                }
            };
            if (!f || !g || o || !1 === h.type)
                return St(m);
            if ("inertia" === h.type)
                return function({keyframes: t, velocity: e=0, min: r, max: i, power: s=.8, timeConstant: n=750, bounceStiffness: a=500, bounceDamping: o=10, restDelta: h=1, modifyTarget: u, driver: l, onUpdate: c, onComplete: d, onStop: p}) {
                    const f = t[0];
                    let g;
                    function m(t) {
                        return void 0 !== r && t < r || void 0 !== i && t > i
                    }
                    function y(t) {
                        return void 0 === r ? i : void 0 === i || Math.abs(r - t) < Math.abs(i - t) ? r : i
                    }
                    function x(t) {
                        g && g.stop(),
                        g = xt({
                            keyframes: [0, 1],
                            velocity: 0,
                            ...t,
                            driver: l,
                            onUpdate: e=>{
                                c && c(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: d,
                            onStop: p
                        })
                    }
                    function v(t) {
                        x({
                            type: "spring",
                            stiffness: a,
                            damping: o,
                            restDelta: h,
                            ...t
                        })
                    }
                    if (m(f))
                        v({
                            velocity: e,
                            keyframes: [f, y(f)]
                        });
                    else {
                        let t = s * e + f;
                        "undefined" !== typeof u && (t = u(t));
                        const i = y(t)
                          , a = i === r ? -1 : 1;
                        let o, l;
                        const c = t=>{
                            o = l,
                            l = t,
                            e = (0,
                            ut.R)(t - o, Ct.frameData.delta),
                            (1 === a && t > i || -1 === a && t < i) && v({
                                keyframes: [t, i],
                                velocity: e
                            })
                        }
                        ;
                        x({
                            type: "decay",
                            keyframes: [f, 0],
                            velocity: e,
                            timeConstant: n,
                            power: s,
                            restDelta: h,
                            modifyTarget: u,
                            onUpdate: m(t) ? c : void 0
                        })
                    }
                    return {
                        stop: ()=>g && g.stop()
                    }
                }(m);
            if (function({when: t, delay: e, delayChildren: r, staggerChildren: i, staggerDirection: s, repeat: n, repeatType: a, repeatDelay: o, from: h, elapsed: u, ...l}) {
                return !!Object.keys(l).length
            }(h) || (m = {
                ...m,
                ...Dt(t, m)
            }),
            m.duration && (m.duration = a(m.duration)),
            m.repeatDelay && (m.repeatDelay = a(m.repeatDelay)),
            e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                const r = Tt(e, t, m);
                if (r)
                    return r
            }
            return xt(m)
        }
        ;
        var Yt = r(3023)
          , Wt = r(406);
        function jt(t, e, r={}) {
            const i = (0,
            Wt.i)(t) ? t : (0,
            Yt.B)(t);
            return i.start(Gt("", i, e, r)),
            {
                stop: ()=>i.stop(),
                isAnimating: ()=>i.isAnimating()
            }
        }
    },
    3038: function(t, e, r) {
        "use strict";
        function i(t, e) {
            return e ? t * (1e3 / e) : 0
        }
        r.d(e, {
            R: function() {
                return i
            }
        })
    },
    3023: function(t, e, r) {
        "use strict";
        r.d(e, {
            B: function() {
                return h
            }
        });
        var i = r(7367)
          , s = r(404);
        class n {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                var e, r;
                return e = this.subscriptions,
                r = t,
                -1 === e.indexOf(r) && e.push(r),
                ()=>function(t, e) {
                    const r = t.indexOf(e);
                    r > -1 && t.splice(r, 1)
                }(this.subscriptions, t)
            }
            notify(t, e, r) {
                const i = this.subscriptions.length;
                if (i)
                    if (1 === i)
                        this.subscriptions[0](t, e, r);
                    else
                        for (let s = 0; s < i; s++) {
                            const i = this.subscriptions[s];
                            i && i(t, e, r)
                        }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        var a = r(3038);
        class o {
            constructor(t, e={}) {
                var r;
                this.version = "9.1.7",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t,e=!0)=>{
                    this.prev = this.current,
                    this.current = t;
                    const {delta: r, timestamp: n} = i.frameData;
                    this.lastUpdated !== n && (this.timeDelta = r,
                    this.lastUpdated = n,
                    s.Z_.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = ()=>s.Z_.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t})=>{
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = (r = this.current,
                !isNaN(parseFloat(r))),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new n);
                const r = this.events[t].add(e);
                return "change" === t ? ()=>{
                    r(),
                    s.Z_.read((()=>{
                        this.events.change.getSize() || this.stop()
                    }
                    ))
                }
                : r
            }
            clearListeners() {
                for (const t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, r) {
                this.set(e),
                this.prev = t,
                this.timeDelta = r
            }
            jump(t) {
                this.updateAndNotify(t),
                this.prev = t,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                return this.canTrackVelocity ? (0,
                a.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            start(t) {
                return this.stop(),
                new Promise((e=>{
                    this.hasAnimated = !0,
                    this.animation = t(e) || null,
                    this.events.animationStart && this.events.animationStart.notify()
                }
                )).then((()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                ))
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                this.animation = null
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function h(t, e) {
            return new o(t,e)
        }
    },
    9362: function(t, e, r) {
        "use strict";
        r.d(e, {
            V: function() {
                return u
            }
        });
        var i = r(1927)
          , s = r(2002)
          , n = r(1945);
        const a = new s.y
          , o = new n.A
          , h = new n.A;
        class u extends i.w {
            constructor(t, {near: e=.1, far: r=100, fov: i=45, aspect: a=1, left: o, right: h, bottom: u, top: l, zoom: c=1}={}) {
                super(),
                Object.assign(this, {
                    near: e,
                    far: r,
                    fov: i,
                    aspect: a,
                    left: o,
                    right: h,
                    bottom: u,
                    top: l,
                    zoom: c
                }),
                this.projectionMatrix = new s.y,
                this.viewMatrix = new s.y,
                this.projectionViewMatrix = new s.y,
                this.worldPosition = new n.A,
                this.type = o || h ? "orthographic" : "perspective",
                "orthographic" === this.type ? this.orthographic() : this.perspective()
            }
            perspective({near: t=this.near, far: e=this.far, fov: r=this.fov, aspect: i=this.aspect}={}) {
                return Object.assign(this, {
                    near: t,
                    far: e,
                    fov: r,
                    aspect: i
                }),
                this.projectionMatrix.fromPerspective({
                    fov: r * (Math.PI / 180),
                    aspect: i,
                    near: t,
                    far: e
                }),
                this.type = "perspective",
                this
            }
            orthographic({near: t=this.near, far: e=this.far, left: r=this.left, right: i=this.right, bottom: s=this.bottom, top: n=this.top, zoom: a=this.zoom}={}) {
                return Object.assign(this, {
                    near: t,
                    far: e,
                    left: r,
                    right: i,
                    bottom: s,
                    top: n,
                    zoom: a
                }),
                r /= a,
                i /= a,
                s /= a,
                n /= a,
                this.projectionMatrix.fromOrthogonal({
                    left: r,
                    right: i,
                    bottom: s,
                    top: n,
                    near: t,
                    far: e
                }),
                this.type = "orthographic",
                this
            }
            updateMatrixWorld() {
                return super.updateMatrixWorld(),
                this.viewMatrix.inverse(this.worldMatrix),
                this.worldMatrix.getTranslation(this.worldPosition),
                this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
                this
            }
            lookAt(t) {
                return super.lookAt(t, !0),
                this
            }
            project(t) {
                return t.applyMatrix4(this.viewMatrix),
                t.applyMatrix4(this.projectionMatrix),
                this
            }
            unproject(t) {
                return t.applyMatrix4(a.inverse(this.projectionMatrix)),
                t.applyMatrix4(this.worldMatrix),
                this
            }
            updateFrustum() {
                this.frustum || (this.frustum = [new n.A, new n.A, new n.A, new n.A, new n.A, new n.A]);
                const t = this.projectionViewMatrix;
                this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12],
                this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12],
                this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13],
                this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13],
                this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14],
                this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
                for (let e = 0; e < 6; e++) {
                    const t = 1 / this.frustum[e].distance();
                    this.frustum[e].multiply(t),
                    this.frustum[e].constant *= t
                }
            }
            frustumIntersectsMesh(t, e=t.worldMatrix) {
                if (!t.geometry.attributes.position)
                    return !0;
                if (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(),
                !t.geometry.bounds)
                    return !0;
                const r = o;
                r.copy(t.geometry.bounds.center),
                r.applyMatrix4(e);
                const i = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
                return this.frustumIntersectsSphere(r, i)
            }
            frustumIntersectsSphere(t, e) {
                const r = h;
                for (let i = 0; i < 6; i++) {
                    const s = this.frustum[i];
                    if (r.copy(s).dot(t) + s.constant < -e)
                        return !1
                }
                return !0
            }
        }
    },
    4060: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return h
            }
        });
        var i = r(1945);
        const s = new i.A;
        let n = 1
          , a = 1
          , o = !1;
        class h {
            constructor(t, e={}) {
                t.canvas || console.error("gl not passed as first argument to Geometry"),
                this.gl = t,
                this.attributes = e,
                this.id = n++,
                this.VAOs = {},
                this.drawRange = {
                    start: 0,
                    count: 0
                },
                this.instancedCount = 0,
                this.gl.renderer.bindVertexArray(null),
                this.gl.renderer.currentGeometry = null,
                this.glState = this.gl.renderer.state;
                for (let r in e)
                    this.addAttribute(r, e[r])
            }
            addAttribute(t, e) {
                if (this.attributes[t] = e,
                e.id = a++,
                e.size = e.size || 1,
                e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
                e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
                e.normalized = e.normalized || !1,
                e.stride = e.stride || 0,
                e.offset = e.offset || 0,
                e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size),
                e.divisor = e.instanced || 0,
                e.needsUpdate = !1,
                e.usage = e.usage || this.gl.STATIC_DRAW,
                e.buffer || this.updateAttribute(e),
                e.divisor) {
                    if (this.isInstanced = !0,
                    this.instancedCount && this.instancedCount !== e.count * e.divisor)
                        return console.warn("geometry has multiple instanced buffers of different length"),
                        this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                    this.instancedCount = e.count * e.divisor
                } else
                    "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
            }
            updateAttribute(t) {
                const e = !t.buffer;
                e && (t.buffer = this.gl.createBuffer()),
                this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer),
                this.glState.boundBuffer = t.buffer),
                e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data),
                t.needsUpdate = !1
            }
            setIndex(t) {
                this.addAttribute("index", t)
            }
            setDrawRange(t, e) {
                this.drawRange.start = t,
                this.drawRange.count = e
            }
            setInstancedCount(t) {
                this.instancedCount = t
            }
            createVAO(t) {
                this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(),
                this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
                this.bindAttributes(t)
            }
            bindAttributes(t) {
                t.attributeLocations.forEach(((t,{name: e, type: r})=>{
                    if (!this.attributes[e])
                        return void console.warn(`active attribute ${e} not being supplied`);
                    const i = this.attributes[e];
                    this.gl.bindBuffer(i.target, i.buffer),
                    this.glState.boundBuffer = i.buffer;
                    let s = 1;
                    35674 === r && (s = 2),
                    35675 === r && (s = 3),
                    35676 === r && (s = 4);
                    const n = i.size / s
                      , a = 1 === s ? 0 : s * s * s
                      , o = 1 === s ? 0 : s * s;
                    for (let h = 0; h < s; h++)
                        this.gl.vertexAttribPointer(t + h, n, i.type, i.normalized, i.stride + a, i.offset + h * o),
                        this.gl.enableVertexAttribArray(t + h),
                        this.gl.renderer.vertexAttribDivisor(t + h, i.divisor)
                }
                )),
                this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
            }
            draw({program: t, mode: e=this.gl.TRIANGLES}) {
                this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t),
                this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
                this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`),
                t.attributeLocations.forEach(((t,{name: e})=>{
                    const r = this.attributes[e];
                    r.needsUpdate && this.updateAttribute(r)
                }
                )),
                this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
            }
            getPosition() {
                const t = this.attributes.position;
                return t.data ? t : o ? void 0 : (console.warn("No position buffer data found to compute bounds"),
                o = !0)
            }
            computeBoundingBox(t) {
                t || (t = this.getPosition());
                const e = t.data
                  , r = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
                this.bounds || (this.bounds = {
                    min: new i.A,
                    max: new i.A,
                    center: new i.A,
                    scale: new i.A,
                    radius: 1 / 0
                });
                const s = this.bounds.min
                  , n = this.bounds.max
                  , a = this.bounds.center
                  , o = this.bounds.scale;
                s.set(1 / 0),
                n.set(-1 / 0);
                for (let i = 0, h = e.length; i < h; i += r) {
                    const t = e[i]
                      , r = e[i + 1]
                      , a = e[i + 2];
                    s.x = Math.min(t, s.x),
                    s.y = Math.min(r, s.y),
                    s.z = Math.min(a, s.z),
                    n.x = Math.max(t, n.x),
                    n.y = Math.max(r, n.y),
                    n.z = Math.max(a, n.z)
                }
                o.sub(n, s),
                a.add(s, n).divide(2)
            }
            computeBoundingSphere(t) {
                t || (t = this.getPosition());
                const e = t.data
                  , r = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
                this.bounds || this.computeBoundingBox(t);
                let i = 0;
                for (let n = 0, a = e.length; n < a; n += r)
                    s.fromArray(e, n),
                    i = Math.max(i, this.bounds.center.squaredDistance(s));
                this.bounds.radius = Math.sqrt(i)
            }
            remove() {
                for (let t in this.VAOs)
                    this.gl.renderer.deleteVertexArray(this.VAOs[t]),
                    delete this.VAOs[t];
                for (let t in this.attributes)
                    this.gl.deleteBuffer(this.attributes[t].buffer),
                    delete this.attributes[t]
            }
        }
    },
    2142: function(t, e, r) {
        "use strict";
        r.d(e, {
            K: function() {
                return h
            }
        });
        var i = r(1927);
        function s(t, e, r) {
            let i = e[0]
              , s = e[1]
              , n = e[2]
              , a = e[3]
              , o = e[4]
              , h = e[5]
              , u = e[6]
              , l = e[7]
              , c = e[8]
              , d = r[0]
              , p = r[1]
              , f = r[2]
              , g = r[3]
              , m = r[4]
              , y = r[5]
              , x = r[6]
              , v = r[7]
              , b = r[8];
            return t[0] = d * i + p * a + f * u,
            t[1] = d * s + p * o + f * l,
            t[2] = d * n + p * h + f * c,
            t[3] = g * i + m * a + y * u,
            t[4] = g * s + m * o + y * l,
            t[5] = g * n + m * h + y * c,
            t[6] = x * i + v * a + b * u,
            t[7] = x * s + v * o + b * l,
            t[8] = x * n + v * h + b * c,
            t
        }
        class n extends Array {
            constructor(t=1, e=0, r=0, i=0, s=1, n=0, a=0, o=0, h=1) {
                return super(t, e, r, i, s, n, a, o, h),
                this
            }
            set(t, e, r, i, s, n, a, o, h) {
                return t.length ? this.copy(t) : (function(t, e, r, i, s, n, a, o, h, u) {
                    t[0] = e,
                    t[1] = r,
                    t[2] = i,
                    t[3] = s,
                    t[4] = n,
                    t[5] = a,
                    t[6] = o,
                    t[7] = h,
                    t[8] = u
                }(this, t, e, r, i, s, n, a, o, h),
                this)
            }
            translate(t, e=this) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = e[3]
                      , o = e[4]
                      , h = e[5]
                      , u = e[6]
                      , l = e[7]
                      , c = e[8]
                      , d = r[0]
                      , p = r[1];
                    t[0] = i,
                    t[1] = s,
                    t[2] = n,
                    t[3] = a,
                    t[4] = o,
                    t[5] = h,
                    t[6] = d * i + p * a + u,
                    t[7] = d * s + p * o + l,
                    t[8] = d * n + p * h + c
                }(this, e, t),
                this
            }
            rotate(t, e=this) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = e[3]
                      , o = e[4]
                      , h = e[5]
                      , u = e[6]
                      , l = e[7]
                      , c = e[8]
                      , d = Math.sin(r)
                      , p = Math.cos(r);
                    t[0] = p * i + d * a,
                    t[1] = p * s + d * o,
                    t[2] = p * n + d * h,
                    t[3] = p * a - d * i,
                    t[4] = p * o - d * s,
                    t[5] = p * h - d * n,
                    t[6] = u,
                    t[7] = l,
                    t[8] = c
                }(this, e, t),
                this
            }
            scale(t, e=this) {
                return function(t, e, r) {
                    let i = r[0]
                      , s = r[1];
                    t[0] = i * e[0],
                    t[1] = i * e[1],
                    t[2] = i * e[2],
                    t[3] = s * e[3],
                    t[4] = s * e[4],
                    t[5] = s * e[5],
                    t[6] = e[6],
                    t[7] = e[7],
                    t[8] = e[8]
                }(this, e, t),
                this
            }
            multiply(t, e) {
                return e ? s(this, t, e) : s(this, this, t),
                this
            }
            identity() {
                var t;
                return (t = this)[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 1,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0,
                t[8] = 1,
                this
            }
            copy(t) {
                var e, r;
                return r = t,
                (e = this)[0] = r[0],
                e[1] = r[1],
                e[2] = r[2],
                e[3] = r[3],
                e[4] = r[4],
                e[5] = r[5],
                e[6] = r[6],
                e[7] = r[7],
                e[8] = r[8],
                this
            }
            fromMatrix4(t) {
                var e, r;
                return r = t,
                (e = this)[0] = r[0],
                e[1] = r[1],
                e[2] = r[2],
                e[3] = r[4],
                e[4] = r[5],
                e[5] = r[6],
                e[6] = r[8],
                e[7] = r[9],
                e[8] = r[10],
                this
            }
            fromQuaternion(t) {
                return function(t, e) {
                    let r = e[0]
                      , i = e[1]
                      , s = e[2]
                      , n = e[3]
                      , a = r + r
                      , o = i + i
                      , h = s + s
                      , u = r * a
                      , l = i * a
                      , c = i * o
                      , d = s * a
                      , p = s * o
                      , f = s * h
                      , g = n * a
                      , m = n * o
                      , y = n * h;
                    t[0] = 1 - c - f,
                    t[3] = l - y,
                    t[6] = d + m,
                    t[1] = l + y,
                    t[4] = 1 - u - f,
                    t[7] = p - g,
                    t[2] = d - m,
                    t[5] = p + g,
                    t[8] = 1 - u - c
                }(this, t),
                this
            }
            fromBasis(t, e, r) {
                return this.set(t[0], t[1], t[2], e[0], e[1], e[2], r[0], r[1], r[2]),
                this
            }
            inverse(t=this) {
                return function(t, e) {
                    let r = e[0]
                      , i = e[1]
                      , s = e[2]
                      , n = e[3]
                      , a = e[4]
                      , o = e[5]
                      , h = e[6]
                      , u = e[7]
                      , l = e[8]
                      , c = l * a - o * u
                      , d = -l * n + o * h
                      , p = u * n - a * h
                      , f = r * c + i * d + s * p;
                    f && (f = 1 / f,
                    t[0] = c * f,
                    t[1] = (-l * i + s * u) * f,
                    t[2] = (o * i - s * a) * f,
                    t[3] = d * f,
                    t[4] = (l * r - s * h) * f,
                    t[5] = (-o * r + s * n) * f,
                    t[6] = p * f,
                    t[7] = (-u * r + i * h) * f,
                    t[8] = (a * r - i * n) * f)
                }(this, t),
                this
            }
            getNormalMatrix(t) {
                return function(t, e) {
                    let r = e[0]
                      , i = e[1]
                      , s = e[2]
                      , n = e[3]
                      , a = e[4]
                      , o = e[5]
                      , h = e[6]
                      , u = e[7]
                      , l = e[8]
                      , c = e[9]
                      , d = e[10]
                      , p = e[11]
                      , f = e[12]
                      , g = e[13]
                      , m = e[14]
                      , y = e[15]
                      , x = r * o - i * a
                      , v = r * h - s * a
                      , b = r * u - n * a
                      , M = i * h - s * o
                      , A = i * u - n * o
                      , w = s * u - n * h
                      , E = l * g - c * f
                      , _ = l * m - d * f
                      , T = l * y - p * f
                      , F = c * m - d * g
                      , S = c * y - p * g
                      , C = d * y - p * m
                      , R = x * C - v * S + b * F + M * T - A * _ + w * E;
                    R && (R = 1 / R,
                    t[0] = (o * C - h * S + u * F) * R,
                    t[1] = (h * T - a * C - u * _) * R,
                    t[2] = (a * S - o * T + u * E) * R,
                    t[3] = (s * S - i * C - n * F) * R,
                    t[4] = (r * C - s * T + n * _) * R,
                    t[5] = (i * T - r * S - n * E) * R,
                    t[6] = (g * w - m * A + y * M) * R,
                    t[7] = (m * b - f * w - y * v) * R,
                    t[8] = (f * A - g * b + y * x) * R)
                }(this, t),
                this
            }
        }
        var a = r(2002);
        let o = 0;
        class h extends i.w {
            constructor(t, {geometry: e, program: r, mode: i=t.TRIANGLES, frustumCulled: s=!0, renderOrder: h=0}={}) {
                super(),
                t.canvas || console.error("gl not passed as first argument to Mesh"),
                this.gl = t,
                this.id = o++,
                this.geometry = e,
                this.program = r,
                this.mode = i,
                this.frustumCulled = s,
                this.renderOrder = h,
                this.modelViewMatrix = new a.y,
                this.normalMatrix = new n,
                this.beforeRenderCallbacks = [],
                this.afterRenderCallbacks = []
            }
            onBeforeRender(t) {
                return this.beforeRenderCallbacks.push(t),
                this
            }
            onAfterRender(t) {
                return this.afterRenderCallbacks.push(t),
                this
            }
            draw({camera: t}={}) {
                this.beforeRenderCallbacks.forEach((e=>e && e({
                    mesh: this,
                    camera: t
                }))),
                t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                    modelMatrix: {
                        value: null
                    },
                    viewMatrix: {
                        value: null
                    },
                    modelViewMatrix: {
                        value: null
                    },
                    normalMatrix: {
                        value: null
                    },
                    projectionMatrix: {
                        value: null
                    },
                    cameraPosition: {
                        value: null
                    }
                }),
                this.program.uniforms.projectionMatrix.value = t.projectionMatrix,
                this.program.uniforms.cameraPosition.value = t.worldPosition,
                this.program.uniforms.viewMatrix.value = t.viewMatrix,
                this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                this.program.uniforms.modelMatrix.value = this.worldMatrix,
                this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
                this.program.uniforms.normalMatrix.value = this.normalMatrix);
                let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
                this.program.use({
                    flipFaces: e
                }),
                this.geometry.draw({
                    mode: this.mode,
                    program: this.program
                }),
                this.afterRenderCallbacks.forEach((e=>e && e({
                    mesh: this,
                    camera: t
                })))
            }
        }
    },
    7032: function(t, e, r) {
        "use strict";
        r.d(e, {
            $: function() {
                return n
            }
        });
        let i = 1;
        const s = {};
        class n {
            constructor(t, {vertex: e, fragment: r, uniforms: s={}, transparent: n=!1, cullFace: a=t.BACK, frontFace: h=t.CCW, depthTest: u=!0, depthWrite: l=!0, depthFunc: c=t.LESS}={}) {
                t.canvas || console.error("gl not passed as first argument to Program"),
                this.gl = t,
                this.uniforms = s,
                this.id = i++,
                e || console.warn("vertex shader not supplied"),
                r || console.warn("fragment shader not supplied"),
                this.transparent = n,
                this.cullFace = a,
                this.frontFace = h,
                this.depthTest = u,
                this.depthWrite = l,
                this.depthFunc = c,
                this.blendFunc = {},
                this.blendEquation = {},
                this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
                const d = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(d, e),
                t.compileShader(d),
                "" !== t.getShaderInfoLog(d) && console.warn(`${t.getShaderInfoLog(d)}\nVertex Shader\n${o(e)}`);
                const p = t.createShader(t.FRAGMENT_SHADER);
                if (t.shaderSource(p, r),
                t.compileShader(p),
                "" !== t.getShaderInfoLog(p) && console.warn(`${t.getShaderInfoLog(p)}\nFragment Shader\n${o(r)}`),
                this.program = t.createProgram(),
                t.attachShader(this.program, d),
                t.attachShader(this.program, p),
                t.linkProgram(this.program),
                !t.getProgramParameter(this.program, t.LINK_STATUS))
                    return console.warn(t.getProgramInfoLog(this.program));
                t.deleteShader(d),
                t.deleteShader(p),
                this.uniformLocations = new Map;
                let f = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
                for (let i = 0; i < f; i++) {
                    let e = t.getActiveUniform(this.program, i);
                    this.uniformLocations.set(e, t.getUniformLocation(this.program, e.name));
                    const r = e.name.match(/(\w+)/g);
                    e.uniformName = r[0],
                    3 === r.length ? (e.isStructArray = !0,
                    e.structIndex = Number(r[1]),
                    e.structProperty = r[2]) : 2 === r.length && isNaN(Number(r[1])) && (e.isStruct = !0,
                    e.structProperty = r[1])
                }
                this.attributeLocations = new Map;
                const g = []
                  , m = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
                for (let i = 0; i < m; i++) {
                    const e = t.getActiveAttrib(this.program, i)
                      , r = t.getAttribLocation(this.program, e.name);
                    -1 !== r && (g[r] = e.name,
                    this.attributeLocations.set(e, r))
                }
                this.attributeOrder = g.join("")
            }
            setBlendFunc(t, e, r, i) {
                this.blendFunc.src = t,
                this.blendFunc.dst = e,
                this.blendFunc.srcAlpha = r,
                this.blendFunc.dstAlpha = i,
                t && (this.transparent = !0)
            }
            setBlendEquation(t, e) {
                this.blendEquation.modeRGB = t,
                this.blendEquation.modeAlpha = e
            }
            applyState() {
                this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
                this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
                this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
                this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
                this.gl.renderer.setFrontFace(this.frontFace),
                this.gl.renderer.setDepthMask(this.depthWrite),
                this.gl.renderer.setDepthFunc(this.depthFunc),
                this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
                this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
            }
            use({flipFaces: t=!1}={}) {
                let e = -1;
                this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program),
                this.gl.renderer.state.currentProgram = this.id),
                this.uniformLocations.forEach(((t,r)=>{
                    let i = r.uniformName
                      , s = this.uniforms[i];
                    if (r.isStruct && (s = s[r.structProperty],
                    i += `.${r.structProperty}`),
                    r.isStructArray && (s = s[r.structIndex][r.structProperty],
                    i += `[${r.structIndex}].${r.structProperty}`),
                    !s)
                        return u(`Active uniform ${i} has not been supplied`);
                    if (s && void 0 === s.value)
                        return u(`${i} uniform is missing a value parameter`);
                    if (s.value.texture)
                        return e += 1,
                        s.value.update(e),
                        a(this.gl, r.type, t, e);
                    if (s.value.length && s.value[0].texture) {
                        const i = [];
                        return s.value.forEach((t=>{
                            e += 1,
                            t.update(e),
                            i.push(e)
                        }
                        )),
                        a(this.gl, r.type, t, i)
                    }
                    a(this.gl, r.type, t, s.value)
                }
                )),
                this.applyState(),
                t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
            }
            remove() {
                this.gl.deleteProgram(this.program)
            }
        }
        function a(t, e, r, i) {
            i = i.length ? function(t) {
                const e = t.length
                  , r = t[0].length;
                if (void 0 === r)
                    return t;
                const i = e * r;
                let n = s[i];
                n || (s[i] = n = new Float32Array(i));
                for (let s = 0; s < e; s++)
                    n.set(t[s], s * r);
                return n
            }(i) : i;
            const n = t.renderer.state.uniformLocations.get(r);
            if (i.length)
                if (void 0 === n || n.length !== i.length)
                    t.renderer.state.uniformLocations.set(r, i.slice(0));
                else {
                    if (function(t, e) {
                        if (t.length !== e.length)
                            return !1;
                        for (let r = 0, i = t.length; r < i; r++)
                            if (t[r] !== e[r])
                                return !1;
                        return !0
                    }(n, i))
                        return;
                    n.set ? n.set(i) : function(t, e) {
                        for (let r = 0, i = t.length; r < i; r++)
                            t[r] = e[r]
                    }(n, i),
                    t.renderer.state.uniformLocations.set(r, n)
                }
            else {
                if (n === i)
                    return;
                t.renderer.state.uniformLocations.set(r, i)
            }
            switch (e) {
            case 5126:
                return i.length ? t.uniform1fv(r, i) : t.uniform1f(r, i);
            case 35664:
                return t.uniform2fv(r, i);
            case 35665:
                return t.uniform3fv(r, i);
            case 35666:
                return t.uniform4fv(r, i);
            case 35670:
            case 5124:
            case 35678:
            case 35680:
                return i.length ? t.uniform1iv(r, i) : t.uniform1i(r, i);
            case 35671:
            case 35667:
                return t.uniform2iv(r, i);
            case 35672:
            case 35668:
                return t.uniform3iv(r, i);
            case 35673:
            case 35669:
                return t.uniform4iv(r, i);
            case 35674:
                return t.uniformMatrix2fv(r, !1, i);
            case 35675:
                return t.uniformMatrix3fv(r, !1, i);
            case 35676:
                return t.uniformMatrix4fv(r, !1, i)
            }
        }
        function o(t) {
            let e = t.split("\n");
            for (let r = 0; r < e.length; r++)
                e[r] = r + 1 + ": " + e[r];
            return e.join("\n")
        }
        let h = 0;
        function u(t) {
            h > 100 || (console.warn(t),
            h++,
            h > 100 && console.warn("More than 100 program warnings - stopping logs."))
        }
    },
    3568: function(t, e, r) {
        "use strict";
        r.d(e, {
            T: function() {
                return n
            }
        });
        const i = new (r(1945).A);
        let s = 1;
        class n {
            constructor({canvas: t=document.createElement("canvas"), width: e=300, height: r=150, dpr: i=1, alpha: n=!1, depth: a=!0, stencil: o=!1, antialias: h=!1, premultipliedAlpha: u=!1, preserveDrawingBuffer: l=!1, powerPreference: c="default", autoClear: d=!0, webgl: p=2}={}) {
                const f = {
                    alpha: n,
                    depth: a,
                    stencil: o,
                    antialias: h,
                    premultipliedAlpha: u,
                    preserveDrawingBuffer: l,
                    powerPreference: c
                };
                this.dpr = i,
                this.alpha = n,
                this.color = !0,
                this.depth = a,
                this.stencil = o,
                this.premultipliedAlpha = u,
                this.autoClear = d,
                this.id = s++,
                2 === p && (this.gl = t.getContext("webgl2", f)),
                this.isWebgl2 = !!this.gl,
                this.gl || (this.gl = t.getContext("webgl", f)),
                this.gl || console.error("unable to create webgl context"),
                this.gl.renderer = this,
                this.setSize(e, r),
                this.state = {},
                this.state.blendFunc = {
                    src: this.gl.ONE,
                    dst: this.gl.ZERO
                },
                this.state.blendEquation = {
                    modeRGB: this.gl.FUNC_ADD
                },
                this.state.cullFace = null,
                this.state.frontFace = this.gl.CCW,
                this.state.depthMask = !0,
                this.state.depthFunc = this.gl.LESS,
                this.state.premultiplyAlpha = !1,
                this.state.flipY = !1,
                this.state.unpackAlignment = 4,
                this.state.framebuffer = null,
                this.state.viewport = {
                    x: 0,
                    y: 0,
                    width: null,
                    height: null
                },
                this.state.textureUnits = [],
                this.state.activeTextureUnit = 0,
                this.state.boundBuffer = null,
                this.state.uniformLocations = new Map,
                this.state.currentProgram = null,
                this.extensions = {},
                this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
                this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
                this.getExtension("OES_texture_float_linear"),
                this.getExtension("OES_texture_half_float"),
                this.getExtension("OES_texture_half_float_linear"),
                this.getExtension("OES_element_index_uint"),
                this.getExtension("OES_standard_derivatives"),
                this.getExtension("EXT_sRGB"),
                this.getExtension("WEBGL_depth_texture"),
                this.getExtension("WEBGL_draw_buffers")),
                this.getExtension("WEBGL_compressed_texture_astc"),
                this.getExtension("EXT_texture_compression_bptc"),
                this.getExtension("WEBGL_compressed_texture_s3tc"),
                this.getExtension("WEBGL_compressed_texture_etc1"),
                this.getExtension("WEBGL_compressed_texture_pvrtc"),
                this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
                this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
                this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
                this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
                this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
                this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
                this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
                this.parameters = {},
                this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
            setSize(t, e) {
                this.width = t,
                this.height = e,
                this.gl.canvas.width = t * this.dpr,
                this.gl.canvas.height = e * this.dpr,
                Object.assign(this.gl.canvas.style, {
                    width: t + "px",
                    height: e + "px"
                })
            }
            setViewport(t, e, r=0, i=0) {
                this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t,
                this.state.viewport.height = e,
                this.state.viewport.x = r,
                this.state.viewport.y = i,
                this.gl.viewport(r, i, t, e))
            }
            setScissor(t, e, r=0, i=0) {
                this.gl.scissor(r, i, t, e)
            }
            enable(t) {
                !0 !== this.state[t] && (this.gl.enable(t),
                this.state[t] = !0)
            }
            disable(t) {
                !1 !== this.state[t] && (this.gl.disable(t),
                this.state[t] = !1)
            }
            setBlendFunc(t, e, r, i) {
                this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === r && this.state.blendFunc.dstAlpha === i || (this.state.blendFunc.src = t,
                this.state.blendFunc.dst = e,
                this.state.blendFunc.srcAlpha = r,
                this.state.blendFunc.dstAlpha = i,
                void 0 !== r ? this.gl.blendFuncSeparate(t, e, r, i) : this.gl.blendFunc(t, e))
            }
            setBlendEquation(t, e) {
                t = t || this.gl.FUNC_ADD,
                this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t,
                this.state.blendEquation.modeAlpha = e,
                void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
            }
            setCullFace(t) {
                this.state.cullFace !== t && (this.state.cullFace = t,
                this.gl.cullFace(t))
            }
            setFrontFace(t) {
                this.state.frontFace !== t && (this.state.frontFace = t,
                this.gl.frontFace(t))
            }
            setDepthMask(t) {
                this.state.depthMask !== t && (this.state.depthMask = t,
                this.gl.depthMask(t))
            }
            setDepthFunc(t) {
                this.state.depthFunc !== t && (this.state.depthFunc = t,
                this.gl.depthFunc(t))
            }
            activeTexture(t) {
                this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t,
                this.gl.activeTexture(this.gl.TEXTURE0 + t))
            }
            bindFramebuffer({target: t=this.gl.FRAMEBUFFER, buffer: e=null}={}) {
                this.state.framebuffer !== e && (this.state.framebuffer = e,
                this.gl.bindFramebuffer(t, e))
            }
            getExtension(t, e, r) {
                return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
                e ? this.extensions[t] ? this.extensions[t][r].bind(this.extensions[t]) : null : this.extensions[t])
            }
            sortOpaque(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
            }
            sortTransparent(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
            }
            sortUI(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
            }
            getRenderList({scene: t, camera: e, frustumCull: r, sort: s}) {
                let n = [];
                if (e && r && e.updateFrustum(),
                t.traverse((t=>{
                    if (!t.visible)
                        return !0;
                    t.draw && (r && t.frustumCulled && e && !e.frustumIntersectsMesh(t) || n.push(t))
                }
                )),
                s) {
                    const t = []
                      , r = []
                      , s = [];
                    n.forEach((n=>{
                        n.program.transparent ? n.program.depthTest ? r.push(n) : s.push(n) : t.push(n),
                        n.zDepth = 0,
                        0 === n.renderOrder && n.program.depthTest && e && (n.worldMatrix.getTranslation(i),
                        i.applyMatrix4(e.projectionViewMatrix),
                        n.zDepth = i.z)
                    }
                    )),
                    t.sort(this.sortOpaque),
                    r.sort(this.sortTransparent),
                    s.sort(this.sortUI),
                    n = t.concat(r, s)
                }
                return n
            }
            render({scene: t, camera: e, target: r=null, update: i=!0, sort: s=!0, frustumCull: n=!0, clear: a}) {
                null === r ? (this.bindFramebuffer(),
                this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(r),
                this.setViewport(r.width, r.height)),
                (a || this.autoClear && !1 !== a) && (!this.depth || r && !r.depth || (this.enable(this.gl.DEPTH_TEST),
                this.setDepthMask(!0)),
                this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
                i && t.updateMatrixWorld(),
                e && e.updateMatrixWorld();
                this.getRenderList({
                    scene: t,
                    camera: e,
                    frustumCull: n,
                    sort: s
                }).forEach((t=>{
                    t.draw({
                        camera: e
                    })
                }
                ))
            }
        }
    },
    4937: function(t, e, r) {
        "use strict";
        r.d(e, {
            x: function() {
                return a
            }
        });
        const i = new Uint8Array(4);
        function s(t) {
            return 0 === (t & t - 1)
        }
        let n = 1;
        class a {
            constructor(t, {image: e, target: r=t.TEXTURE_2D, type: i=t.UNSIGNED_BYTE, format: s=t.RGBA, internalFormat: a=s, wrapS: o=t.CLAMP_TO_EDGE, wrapT: h=t.CLAMP_TO_EDGE, generateMipmaps: u=!0, minFilter: l=(u ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR), magFilter: c=t.LINEAR, premultiplyAlpha: d=!1, unpackAlignment: p=4, flipY: f=r == t.TEXTURE_2D, anisotropy: g=0, level: m=0, width: y, height: x=y}={}) {
                this.gl = t,
                this.id = n++,
                this.image = e,
                this.target = r,
                this.type = i,
                this.format = s,
                this.internalFormat = a,
                this.minFilter = l,
                this.magFilter = c,
                this.wrapS = o,
                this.wrapT = h,
                this.generateMipmaps = u,
                this.premultiplyAlpha = d,
                this.unpackAlignment = p,
                this.flipY = f,
                this.anisotropy = Math.min(g, this.gl.renderer.parameters.maxAnisotropy),
                this.level = m,
                this.width = y,
                this.height = x,
                this.texture = this.gl.createTexture(),
                this.store = {
                    image: null
                },
                this.glState = this.gl.renderer.state,
                this.state = {},
                this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
                this.state.magFilter = this.gl.LINEAR,
                this.state.wrapS = this.gl.REPEAT,
                this.state.wrapT = this.gl.REPEAT,
                this.state.anisotropy = 0
            }
            bind() {
                this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
                this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
            }
            update(t=0) {
                const e = !(this.image === this.store.image && !this.needsUpdate);
                if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t),
                this.bind()),
                e) {
                    if (this.needsUpdate = !1,
                    this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                    this.glState.flipY = this.flipY),
                    this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
                    this.glState.premultiplyAlpha = this.premultiplyAlpha),
                    this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
                    this.glState.unpackAlignment = this.unpackAlignment),
                    this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
                    this.state.minFilter = this.minFilter),
                    this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
                    this.state.magFilter = this.magFilter),
                    this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
                    this.state.wrapS = this.wrapS),
                    this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
                    this.state.wrapT = this.wrapT),
                    this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
                    this.state.anisotropy = this.anisotropy),
                    this.image) {
                        if (this.image.width && (this.width = this.image.width,
                        this.height = this.image.height),
                        this.target === this.gl.TEXTURE_CUBE_MAP)
                            for (let t = 0; t < 6; t++)
                                this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
                        else if (ArrayBuffer.isView(this.image))
                            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                        else if (this.image.isCompressedTexture)
                            for (let t = 0; t < this.image.length; t++)
                                this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
                        else
                            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                        this.generateMipmaps && (this.gl.renderer.isWebgl2 || s(this.image.width) && s(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1,
                        this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                        this.minFilter = this.gl.LINEAR)),
                        this.onUpdate && this.onUpdate()
                    } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                        for (let t = 0; t < 6; t++)
                            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, i);
                    else
                        this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, i);
                    this.store.image = this.image
                }
            }
        }
    },
    1927: function(t, e, r) {
        "use strict";
        r.d(e, {
            w: function() {
                return p
            }
        });
        var i = r(1945);
        function s(t, e, r) {
            let i = e[0]
              , s = e[1]
              , n = e[2]
              , a = e[3]
              , o = r[0]
              , h = r[1]
              , u = r[2]
              , l = r[3];
            return t[0] = i * l + a * o + s * u - n * h,
            t[1] = s * l + a * h + n * o - i * u,
            t[2] = n * l + a * u + i * h - s * o,
            t[3] = a * l - i * o - s * h - n * u,
            t
        }
        const n = function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t
        }
          , a = function(t, e, r, i, s) {
            return t[0] = e,
            t[1] = r,
            t[2] = i,
            t[3] = s,
            t
        }
          , o = function(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
        }
          , h = function(t, e) {
            let r = e[0]
              , i = e[1]
              , s = e[2]
              , n = e[3]
              , a = r * r + i * i + s * s + n * n;
            return a > 0 && (a = 1 / Math.sqrt(a)),
            t[0] = r * a,
            t[1] = i * a,
            t[2] = s * a,
            t[3] = n * a,
            t
        };
        class u extends Array {
            constructor(t=0, e=0, r=0, i=1) {
                return super(t, e, r, i),
                this.onChange = ()=>{}
                ,
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            get w() {
                return this[3]
            }
            set x(t) {
                this[0] = t,
                this.onChange()
            }
            set y(t) {
                this[1] = t,
                this.onChange()
            }
            set z(t) {
                this[2] = t,
                this.onChange()
            }
            set w(t) {
                this[3] = t,
                this.onChange()
            }
            identity() {
                var t;
                return (t = this)[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                this.onChange(),
                this
            }
            set(t, e, r, i) {
                return t.length ? this.copy(t) : (a(this, t, e, r, i),
                this.onChange(),
                this)
            }
            rotateX(t) {
                return function(t, e, r) {
                    r *= .5;
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = e[3]
                      , o = Math.sin(r)
                      , h = Math.cos(r);
                    t[0] = i * h + a * o,
                    t[1] = s * h + n * o,
                    t[2] = n * h - s * o,
                    t[3] = a * h - i * o
                }(this, this, t),
                this.onChange(),
                this
            }
            rotateY(t) {
                return function(t, e, r) {
                    r *= .5;
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = e[3]
                      , o = Math.sin(r)
                      , h = Math.cos(r);
                    t[0] = i * h - n * o,
                    t[1] = s * h + a * o,
                    t[2] = n * h + i * o,
                    t[3] = a * h - s * o
                }(this, this, t),
                this.onChange(),
                this
            }
            rotateZ(t) {
                return function(t, e, r) {
                    r *= .5;
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = e[3]
                      , o = Math.sin(r)
                      , h = Math.cos(r);
                    t[0] = i * h + s * o,
                    t[1] = s * h - i * o,
                    t[2] = n * h + a * o,
                    t[3] = a * h - n * o
                }(this, this, t),
                this.onChange(),
                this
            }
            inverse(t=this) {
                return function(t, e) {
                    let r = e[0]
                      , i = e[1]
                      , s = e[2]
                      , n = e[3]
                      , a = r * r + i * i + s * s + n * n
                      , o = a ? 1 / a : 0;
                    t[0] = -r * o,
                    t[1] = -i * o,
                    t[2] = -s * o,
                    t[3] = n * o
                }(this, t),
                this.onChange(),
                this
            }
            conjugate(t=this) {
                var e, r;
                return r = t,
                (e = this)[0] = -r[0],
                e[1] = -r[1],
                e[2] = -r[2],
                e[3] = r[3],
                this.onChange(),
                this
            }
            copy(t) {
                return n(this, t),
                this.onChange(),
                this
            }
            normalize(t=this) {
                return h(this, t),
                this.onChange(),
                this
            }
            multiply(t, e) {
                return e ? s(this, t, e) : s(this, this, t),
                this.onChange(),
                this
            }
            dot(t) {
                return o(this, t)
            }
            fromMatrix3(t) {
                return function(t, e) {
                    let r, i = e[0] + e[4] + e[8];
                    if (i > 0)
                        r = Math.sqrt(i + 1),
                        t[3] = .5 * r,
                        r = .5 / r,
                        t[0] = (e[5] - e[7]) * r,
                        t[1] = (e[6] - e[2]) * r,
                        t[2] = (e[1] - e[3]) * r;
                    else {
                        let i = 0;
                        e[4] > e[0] && (i = 1),
                        e[8] > e[3 * i + i] && (i = 2);
                        let s = (i + 1) % 3
                          , n = (i + 2) % 3;
                        r = Math.sqrt(e[3 * i + i] - e[3 * s + s] - e[3 * n + n] + 1),
                        t[i] = .5 * r,
                        r = .5 / r,
                        t[3] = (e[3 * s + n] - e[3 * n + s]) * r,
                        t[s] = (e[3 * s + i] + e[3 * i + s]) * r,
                        t[n] = (e[3 * n + i] + e[3 * i + n]) * r
                    }
                }(this, t),
                this.onChange(),
                this
            }
            fromEuler(t) {
                return function(t, e, r="YXZ") {
                    let i = Math.sin(.5 * e[0])
                      , s = Math.cos(.5 * e[0])
                      , n = Math.sin(.5 * e[1])
                      , a = Math.cos(.5 * e[1])
                      , o = Math.sin(.5 * e[2])
                      , h = Math.cos(.5 * e[2]);
                    "XYZ" === r ? (t[0] = i * a * h + s * n * o,
                    t[1] = s * n * h - i * a * o,
                    t[2] = s * a * o + i * n * h,
                    t[3] = s * a * h - i * n * o) : "YXZ" === r ? (t[0] = i * a * h + s * n * o,
                    t[1] = s * n * h - i * a * o,
                    t[2] = s * a * o - i * n * h,
                    t[3] = s * a * h + i * n * o) : "ZXY" === r ? (t[0] = i * a * h - s * n * o,
                    t[1] = s * n * h + i * a * o,
                    t[2] = s * a * o + i * n * h,
                    t[3] = s * a * h - i * n * o) : "ZYX" === r ? (t[0] = i * a * h - s * n * o,
                    t[1] = s * n * h + i * a * o,
                    t[2] = s * a * o - i * n * h,
                    t[3] = s * a * h + i * n * o) : "YZX" === r ? (t[0] = i * a * h + s * n * o,
                    t[1] = s * n * h + i * a * o,
                    t[2] = s * a * o - i * n * h,
                    t[3] = s * a * h - i * n * o) : "XZY" === r && (t[0] = i * a * h - s * n * o,
                    t[1] = s * n * h - i * a * o,
                    t[2] = s * a * o + i * n * h,
                    t[3] = s * a * h + i * n * o)
                }(this, t, t.order),
                this
            }
            fromAxisAngle(t, e) {
                return function(t, e, r) {
                    r *= .5;
                    let i = Math.sin(r);
                    t[0] = i * e[0],
                    t[1] = i * e[1],
                    t[2] = i * e[2],
                    t[3] = Math.cos(r)
                }(this, t, e),
                this.onChange(),
                this
            }
            slerp(t, e) {
                return function(t, e, r, i) {
                    let s, n, a, o, h, u = e[0], l = e[1], c = e[2], d = e[3], p = r[0], f = r[1], g = r[2], m = r[3];
                    n = u * p + l * f + c * g + d * m,
                    n < 0 && (n = -n,
                    p = -p,
                    f = -f,
                    g = -g,
                    m = -m),
                    1 - n > 1e-6 ? (s = Math.acos(n),
                    a = Math.sin(s),
                    o = Math.sin((1 - i) * s) / a,
                    h = Math.sin(i * s) / a) : (o = 1 - i,
                    h = i),
                    t[0] = o * u + h * p,
                    t[1] = o * l + h * f,
                    t[2] = o * c + h * g,
                    t[3] = o * d + h * m
                }(this, this, t, e),
                this.onChange(),
                this
            }
            fromArray(t, e=0) {
                return this[0] = t[e],
                this[1] = t[e + 1],
                this[2] = t[e + 2],
                this[3] = t[e + 3],
                this.onChange(),
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this[0],
                t[e + 1] = this[1],
                t[e + 2] = this[2],
                t[e + 3] = this[3],
                t
            }
        }
        var l = r(2002);
        const c = new l.y;
        class d extends Array {
            constructor(t=0, e=t, r=t, i="YXZ") {
                return super(t, e, r),
                this.order = i,
                this.onChange = ()=>{}
                ,
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(t) {
                this[0] = t,
                this.onChange()
            }
            set y(t) {
                this[1] = t,
                this.onChange()
            }
            set z(t) {
                this[2] = t,
                this.onChange()
            }
            set(t, e=t, r=t) {
                return t.length ? this.copy(t) : (this[0] = t,
                this[1] = e,
                this[2] = r,
                this.onChange(),
                this)
            }
            copy(t) {
                return this[0] = t[0],
                this[1] = t[1],
                this[2] = t[2],
                this.onChange(),
                this
            }
            reorder(t) {
                return this.order = t,
                this.onChange(),
                this
            }
            fromRotationMatrix(t, e=this.order) {
                return function(t, e, r="YXZ") {
                    "XYZ" === r ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)),
                    Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]),
                    t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]),
                    t[2] = 0)) : "YXZ" === r ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)),
                    Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]),
                    t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]),
                    t[2] = 0)) : "ZXY" === r ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)),
                    Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]),
                    t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0,
                    t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === r ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)),
                    Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]),
                    t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0,
                    t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === r ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)),
                    Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]),
                    t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0,
                    t[1] = Math.atan2(e[8], e[10]))) : "XZY" === r && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)),
                    Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]),
                    t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]),
                    t[1] = 0))
                }(this, t, e),
                this.onChange(),
                this
            }
            fromQuaternion(t, e=this.order) {
                return c.fromQuaternion(t),
                this.fromRotationMatrix(c, e)
            }
            toArray(t=[], e=0) {
                return t[e] = this[0],
                t[e + 1] = this[1],
                t[e + 2] = this[2],
                t
            }
        }
        class p {
            constructor() {
                this.parent = null,
                this.children = [],
                this.visible = !0,
                this.matrix = new l.y,
                this.worldMatrix = new l.y,
                this.matrixAutoUpdate = !0,
                this.position = new i.A,
                this.quaternion = new u,
                this.scale = new i.A(1),
                this.rotation = new d,
                this.up = new i.A(0,1,0),
                this.rotation.onChange = ()=>this.quaternion.fromEuler(this.rotation),
                this.quaternion.onChange = ()=>this.rotation.fromQuaternion(this.quaternion)
            }
            setParent(t, e=!0) {
                this.parent && t !== this.parent && this.parent.removeChild(this, !1),
                this.parent = t,
                e && t && t.addChild(this, !1)
            }
            addChild(t, e=!0) {
                ~this.children.indexOf(t) || this.children.push(t),
                e && t.setParent(this, !1)
            }
            removeChild(t, e=!0) {
                ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
                e && t.setParent(null, !1)
            }
            updateMatrixWorld(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
                this.worldMatrixNeedsUpdate = !1,
                t = !0);
                for (let e = 0, r = this.children.length; e < r; e++)
                    this.children[e].updateMatrixWorld(t)
            }
            updateMatrix() {
                this.matrix.compose(this.quaternion, this.position, this.scale),
                this.worldMatrixNeedsUpdate = !0
            }
            traverse(t) {
                if (!t(this))
                    for (let e = 0, r = this.children.length; e < r; e++)
                        this.children[e].traverse(t)
            }
            decompose() {
                this.matrix.getTranslation(this.position),
                this.matrix.getRotation(this.quaternion),
                this.matrix.getScaling(this.scale),
                this.rotation.fromQuaternion(this.quaternion)
            }
            lookAt(t, e=!1) {
                e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
                this.matrix.getRotation(this.quaternion),
                this.rotation.fromQuaternion(this.quaternion)
            }
        }
    },
    4284: function(t, e, r) {
        "use strict";
        r.d(e, {
            J: function() {
                return s
            }
        });
        var i = r(4060);
        class s extends i.Z {
            constructor(t, {width: e=1, height: r=1, widthSegments: i=1, heightSegments: n=1, attributes: a={}}={}) {
                const o = i
                  , h = n
                  , u = (o + 1) * (h + 1)
                  , l = o * h * 6
                  , c = new Float32Array(3 * u)
                  , d = new Float32Array(3 * u)
                  , p = new Float32Array(2 * u)
                  , f = l > 65536 ? new Uint32Array(l) : new Uint16Array(l);
                s.buildPlane(c, d, p, f, e, r, 0, o, h),
                Object.assign(a, {
                    position: {
                        size: 3,
                        data: c
                    },
                    normal: {
                        size: 3,
                        data: d
                    },
                    uv: {
                        size: 2,
                        data: p
                    },
                    index: {
                        data: f
                    }
                }),
                super(t, a)
            }
            static buildPlane(t, e, r, i, s, n, a, o, h, u=0, l=1, c=2, d=1, p=-1, f=0, g=0) {
                const m = f
                  , y = s / o
                  , x = n / h;
                for (let v = 0; v <= h; v++) {
                    let b = v * x - n / 2;
                    for (let n = 0; n <= o; n++,
                    f++) {
                        let x = n * y - s / 2;
                        if (t[3 * f + u] = x * d,
                        t[3 * f + l] = b * p,
                        t[3 * f + c] = a / 2,
                        e[3 * f + u] = 0,
                        e[3 * f + l] = 0,
                        e[3 * f + c] = a >= 0 ? 1 : -1,
                        r[2 * f] = n / o,
                        r[2 * f + 1] = 1 - v / h,
                        v === h || n === o)
                            continue;
                        let M = m + n + v * (o + 1)
                          , A = m + n + (v + 1) * (o + 1)
                          , w = m + n + (v + 1) * (o + 1) + 1
                          , E = m + n + v * (o + 1) + 1;
                        i[6 * g] = M,
                        i[6 * g + 1] = A,
                        i[6 * g + 2] = E,
                        i[6 * g + 3] = A,
                        i[6 * g + 4] = w,
                        i[6 * g + 5] = E,
                        g++
                    }
                }
            }
        }
    },
    421: function(t, e, r) {
        "use strict";
        r.d(e, {
            Q: function() {
                return M
            }
        });
        var i = r(6850)
          , s = r(1945)
          , n = r(2002);
        const a = new i.S
          , o = new i.S
          , h = new i.S
          , u = new s.A
          , l = new s.A
          , c = new s.A
          , d = new s.A
          , p = new s.A
          , f = new s.A
          , g = new s.A
          , m = new s.A
          , y = new s.A
          , x = new s.A
          , v = new s.A
          , b = new n.y;
        class M {
            constructor() {
                this.origin = new s.A,
                this.direction = new s.A
            }
            castMouse(t, e=[0, 0]) {
                if ("orthographic" === t.type) {
                    const {left: r, right: i, bottom: s, top: n, zoom: a} = t
                      , o = r / a + (i - r) / a * (.5 * e[0] + .5)
                      , h = s / a + (n - s) / a * (.5 * e[1] + .5);
                    this.origin.set(o, h, 0),
                    this.origin.applyMatrix4(t.worldMatrix),
                    this.direction.x = -t.worldMatrix[8],
                    this.direction.y = -t.worldMatrix[9],
                    this.direction.z = -t.worldMatrix[10]
                } else
                    t.worldMatrix.getTranslation(this.origin),
                    this.direction.set(e[0], e[1], .5),
                    t.unproject(this.direction),
                    this.direction.sub(this.origin).normalize()
            }
            intersectBounds(t, {maxDistance: e, output: r=[]}={}) {
                Array.isArray(t) || (t = [t]);
                const i = b
                  , n = u
                  , a = l
                  , o = r;
                return o.length = 0,
                t.forEach((t=>{
                    t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
                    const r = t.geometry.bounds;
                    let h;
                    if (i.inverse(t.worldMatrix),
                    e && (a.copy(this.direction).scaleRotateMatrix4(i),
                    h = e * a.len()),
                    n.copy(this.origin).applyMatrix4(i),
                    a.copy(this.direction).transformDirection(i),
                    e && n.distance(r.center) - r.radius > h)
                        return;
                    let u = 0;
                    if ("sphere" === t.geometry.raycast) {
                        if (n.distance(r.center) > r.radius && (u = this.intersectSphere(r, n, a),
                        !u))
                            return
                    } else if ((n.x < r.min.x || n.x > r.max.x || n.y < r.min.y || n.y > r.max.y || n.z < r.min.z || n.z > r.max.z) && (u = this.intersectBox(r, n, a),
                    !u))
                        return;
                    e && u > h || (t.hit || (t.hit = {
                        localPoint: new s.A,
                        point: new s.A
                    }),
                    t.hit.localPoint.copy(a).multiply(u).add(n),
                    t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix),
                    t.hit.distance = t.hit.point.distance(this.origin),
                    o.push(t))
                }
                )),
                o.sort(((t,e)=>t.hit.distance - e.hit.distance)),
                o
            }
            intersectMeshes(t, {cullFace: e=!0, maxDistance: r, includeUV: n=!0, includeNormal: y=!0, output: x=[]}={}) {
                const v = this.intersectBounds(t, {
                    maxDistance: r,
                    output: x
                });
                if (!v.length)
                    return v;
                const M = b
                  , A = u
                  , w = l
                  , E = c
                  , _ = d
                  , T = p
                  , F = f
                  , S = g
                  , C = m
                  , R = a
                  , N = o
                  , P = h;
                for (let a = v.length - 1; a >= 0; a--) {
                    const t = v[a];
                    let o;
                    M.inverse(t.worldMatrix),
                    r && (w.copy(this.direction).scaleRotateMatrix4(M),
                    o = r * w.len()),
                    A.copy(this.origin).applyMatrix4(M),
                    w.copy(this.direction).transformDirection(M);
                    let h, u, l, c = 0;
                    const d = t.geometry
                      , p = d.attributes
                      , f = p.index
                      , g = p.position
                      , m = Math.max(0, d.drawRange.start)
                      , x = Math.min(f ? f.count : g.count, d.drawRange.start + d.drawRange.count)
                      , b = g.stride ? g.stride / g.data.BYTES_PER_ELEMENT : g.size;
                    for (let i = m; i < x; i += 3) {
                        const t = f ? f.data[i] : i
                          , s = f ? f.data[i + 1] : i + 1
                          , n = f ? f.data[i + 2] : i + 2;
                        E.fromArray(g.data, t * b),
                        _.fromArray(g.data, s * b),
                        T.fromArray(g.data, n * b);
                        const a = this.intersectTriangle(E, _, T, e, A, w, S);
                        a && (r && a > o || (!c || a < c) && (c = a,
                        h = t,
                        u = s,
                        l = n,
                        F.copy(S)))
                    }
                    c || v.splice(a, 1),
                    t.hit.localPoint.copy(w).multiply(c).add(A),
                    t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix),
                    t.hit.distance = t.hit.point.distance(this.origin),
                    t.hit.faceNormal || (t.hit.localFaceNormal = new s.A,
                    t.hit.faceNormal = new s.A,
                    t.hit.uv = new i.S,
                    t.hit.localNormal = new s.A,
                    t.hit.normal = new s.A),
                    t.hit.localFaceNormal.copy(F),
                    t.hit.faceNormal.copy(t.hit.localFaceNormal).transformDirection(t.worldMatrix),
                    (n || y) && (E.fromArray(g.data, 3 * h),
                    _.fromArray(g.data, 3 * u),
                    T.fromArray(g.data, 3 * l),
                    this.getBarycoord(t.hit.localPoint, E, _, T, C)),
                    n && p.uv && (R.fromArray(p.uv.data, 2 * h),
                    N.fromArray(p.uv.data, 2 * u),
                    P.fromArray(p.uv.data, 2 * l),
                    t.hit.uv.set(R.x * C.x + N.x * C.y + P.x * C.z, R.y * C.x + N.y * C.y + P.y * C.z)),
                    y && p.normal && (E.fromArray(p.normal.data, 3 * h),
                    _.fromArray(p.normal.data, 3 * u),
                    T.fromArray(p.normal.data, 3 * l),
                    t.hit.localNormal.set(E.x * C.x + _.x * C.y + T.x * C.z, E.y * C.x + _.y * C.y + T.y * C.z, E.z * C.x + _.z * C.y + T.z * C.z),
                    t.hit.normal.copy(t.hit.localNormal).transformDirection(t.worldMatrix))
                }
                return v.sort(((t,e)=>t.hit.distance - e.hit.distance)),
                v
            }
            intersectSphere(t, e=this.origin, r=this.direction) {
                const i = c;
                i.sub(t.center, e);
                const s = i.dot(r)
                  , n = i.dot(i) - s * s
                  , a = t.radius * t.radius;
                if (n > a)
                    return 0;
                const o = Math.sqrt(a - n)
                  , h = s - o
                  , u = s + o;
                return h < 0 && u < 0 ? 0 : h < 0 ? u : h
            }
            intersectBox(t, e=this.origin, r=this.direction) {
                let i, s, n, a, o, h;
                const u = 1 / r.x
                  , l = 1 / r.y
                  , c = 1 / r.z
                  , d = t.min
                  , p = t.max;
                return i = ((u >= 0 ? d.x : p.x) - e.x) * u,
                s = ((u >= 0 ? p.x : d.x) - e.x) * u,
                n = ((l >= 0 ? d.y : p.y) - e.y) * l,
                a = ((l >= 0 ? p.y : d.y) - e.y) * l,
                i > a || n > s ? 0 : (n > i && (i = n),
                a < s && (s = a),
                o = ((c >= 0 ? d.z : p.z) - e.z) * c,
                h = ((c >= 0 ? p.z : d.z) - e.z) * c,
                i > h || o > s ? 0 : (o > i && (i = o),
                h < s && (s = h),
                s < 0 ? 0 : i >= 0 ? i : s))
            }
            intersectTriangle(t, e, r, i=!0, s=this.origin, n=this.direction, a=g) {
                const o = m
                  , h = y
                  , u = x;
                o.sub(e, t),
                h.sub(r, t),
                a.cross(o, h);
                let l, c = n.dot(a);
                if (!c)
                    return 0;
                if (c > 0) {
                    if (i)
                        return 0;
                    l = 1
                } else
                    l = -1,
                    c = -c;
                u.sub(s, t);
                let d = l * n.dot(h.cross(u, h));
                if (d < 0)
                    return 0;
                let p = l * n.dot(o.cross(u));
                if (p < 0)
                    return 0;
                if (d + p > c)
                    return 0;
                let f = -l * u.dot(a);
                return f < 0 ? 0 : f / c
            }
            getBarycoord(t, e, r, i, s=m) {
                const n = y
                  , a = x
                  , o = v;
                n.sub(i, e),
                a.sub(r, e),
                o.sub(t, e);
                const h = n.dot(n)
                  , u = n.dot(a)
                  , l = n.dot(o)
                  , c = a.dot(a)
                  , d = a.dot(o)
                  , p = h * c - u * u;
                if (0 === p)
                    return s.set(-2, -1, -1);
                const f = 1 / p
                  , g = (c * l - u * d) * f
                  , b = (h * d - u * l) * f;
                return s.set(1 - g - b, b, g)
            }
        }
    },
    2002: function(t, e, r) {
        "use strict";
        r.d(e, {
            y: function() {
                return a
            }
        });
        function i(t, e, r) {
            let i = e[0]
              , s = e[1]
              , n = e[2]
              , a = e[3]
              , o = e[4]
              , h = e[5]
              , u = e[6]
              , l = e[7]
              , c = e[8]
              , d = e[9]
              , p = e[10]
              , f = e[11]
              , g = e[12]
              , m = e[13]
              , y = e[14]
              , x = e[15]
              , v = r[0]
              , b = r[1]
              , M = r[2]
              , A = r[3];
            return t[0] = v * i + b * o + M * c + A * g,
            t[1] = v * s + b * h + M * d + A * m,
            t[2] = v * n + b * u + M * p + A * y,
            t[3] = v * a + b * l + M * f + A * x,
            v = r[4],
            b = r[5],
            M = r[6],
            A = r[7],
            t[4] = v * i + b * o + M * c + A * g,
            t[5] = v * s + b * h + M * d + A * m,
            t[6] = v * n + b * u + M * p + A * y,
            t[7] = v * a + b * l + M * f + A * x,
            v = r[8],
            b = r[9],
            M = r[10],
            A = r[11],
            t[8] = v * i + b * o + M * c + A * g,
            t[9] = v * s + b * h + M * d + A * m,
            t[10] = v * n + b * u + M * p + A * y,
            t[11] = v * a + b * l + M * f + A * x,
            v = r[12],
            b = r[13],
            M = r[14],
            A = r[15],
            t[12] = v * i + b * o + M * c + A * g,
            t[13] = v * s + b * h + M * d + A * m,
            t[14] = v * n + b * u + M * p + A * y,
            t[15] = v * a + b * l + M * f + A * x,
            t
        }
        function s(t, e) {
            let r = e[0]
              , i = e[1]
              , s = e[2]
              , n = e[4]
              , a = e[5]
              , o = e[6]
              , h = e[8]
              , u = e[9]
              , l = e[10];
            return t[0] = Math.hypot(r, i, s),
            t[1] = Math.hypot(n, a, o),
            t[2] = Math.hypot(h, u, l),
            t
        }
        const n = function() {
            const t = [0, 0, 0];
            return function(e, r) {
                let i = t;
                s(i, r);
                let n = 1 / i[0]
                  , a = 1 / i[1]
                  , o = 1 / i[2]
                  , h = r[0] * n
                  , u = r[1] * a
                  , l = r[2] * o
                  , c = r[4] * n
                  , d = r[5] * a
                  , p = r[6] * o
                  , f = r[8] * n
                  , g = r[9] * a
                  , m = r[10] * o
                  , y = h + d + m
                  , x = 0;
                return y > 0 ? (x = 2 * Math.sqrt(y + 1),
                e[3] = .25 * x,
                e[0] = (p - g) / x,
                e[1] = (f - l) / x,
                e[2] = (u - c) / x) : h > d && h > m ? (x = 2 * Math.sqrt(1 + h - d - m),
                e[3] = (p - g) / x,
                e[0] = .25 * x,
                e[1] = (u + c) / x,
                e[2] = (f + l) / x) : d > m ? (x = 2 * Math.sqrt(1 + d - h - m),
                e[3] = (f - l) / x,
                e[0] = (u + c) / x,
                e[1] = .25 * x,
                e[2] = (p + g) / x) : (x = 2 * Math.sqrt(1 + m - h - d),
                e[3] = (u - c) / x,
                e[0] = (f + l) / x,
                e[1] = (p + g) / x,
                e[2] = .25 * x),
                e
            }
        }();
        class a extends Array {
            constructor(t=1, e=0, r=0, i=0, s=0, n=1, a=0, o=0, h=0, u=0, l=1, c=0, d=0, p=0, f=0, g=1) {
                return super(t, e, r, i, s, n, a, o, h, u, l, c, d, p, f, g),
                this
            }
            get x() {
                return this[12]
            }
            get y() {
                return this[13]
            }
            get z() {
                return this[14]
            }
            get w() {
                return this[15]
            }
            set x(t) {
                this[12] = t
            }
            set y(t) {
                this[13] = t
            }
            set z(t) {
                this[14] = t
            }
            set w(t) {
                this[15] = t
            }
            set(t, e, r, i, s, n, a, o, h, u, l, c, d, p, f, g) {
                return t.length ? this.copy(t) : (function(t, e, r, i, s, n, a, o, h, u, l, c, d, p, f, g, m) {
                    t[0] = e,
                    t[1] = r,
                    t[2] = i,
                    t[3] = s,
                    t[4] = n,
                    t[5] = a,
                    t[6] = o,
                    t[7] = h,
                    t[8] = u,
                    t[9] = l,
                    t[10] = c,
                    t[11] = d,
                    t[12] = p,
                    t[13] = f,
                    t[14] = g,
                    t[15] = m
                }(this, t, e, r, i, s, n, a, o, h, u, l, c, d, p, f, g),
                this)
            }
            translate(t, e=this) {
                return function(t, e, r) {
                    let i, s, n, a, o, h, u, l, c, d, p, f, g = r[0], m = r[1], y = r[2];
                    e === t ? (t[12] = e[0] * g + e[4] * m + e[8] * y + e[12],
                    t[13] = e[1] * g + e[5] * m + e[9] * y + e[13],
                    t[14] = e[2] * g + e[6] * m + e[10] * y + e[14],
                    t[15] = e[3] * g + e[7] * m + e[11] * y + e[15]) : (i = e[0],
                    s = e[1],
                    n = e[2],
                    a = e[3],
                    o = e[4],
                    h = e[5],
                    u = e[6],
                    l = e[7],
                    c = e[8],
                    d = e[9],
                    p = e[10],
                    f = e[11],
                    t[0] = i,
                    t[1] = s,
                    t[2] = n,
                    t[3] = a,
                    t[4] = o,
                    t[5] = h,
                    t[6] = u,
                    t[7] = l,
                    t[8] = c,
                    t[9] = d,
                    t[10] = p,
                    t[11] = f,
                    t[12] = i * g + o * m + c * y + e[12],
                    t[13] = s * g + h * m + d * y + e[13],
                    t[14] = n * g + u * m + p * y + e[14],
                    t[15] = a * g + l * m + f * y + e[15])
                }(this, e, t),
                this
            }
            rotate(t, e, r=this) {
                return function(t, e, r, i) {
                    let s, n, a, o, h, u, l, c, d, p, f, g, m, y, x, v, b, M, A, w, E, _, T, F, S = i[0], C = i[1], R = i[2], N = Math.hypot(S, C, R);
                    Math.abs(N) < 1e-6 || (N = 1 / N,
                    S *= N,
                    C *= N,
                    R *= N,
                    s = Math.sin(r),
                    n = Math.cos(r),
                    a = 1 - n,
                    o = e[0],
                    h = e[1],
                    u = e[2],
                    l = e[3],
                    c = e[4],
                    d = e[5],
                    p = e[6],
                    f = e[7],
                    g = e[8],
                    m = e[9],
                    y = e[10],
                    x = e[11],
                    v = S * S * a + n,
                    b = C * S * a + R * s,
                    M = R * S * a - C * s,
                    A = S * C * a - R * s,
                    w = C * C * a + n,
                    E = R * C * a + S * s,
                    _ = S * R * a + C * s,
                    T = C * R * a - S * s,
                    F = R * R * a + n,
                    t[0] = o * v + c * b + g * M,
                    t[1] = h * v + d * b + m * M,
                    t[2] = u * v + p * b + y * M,
                    t[3] = l * v + f * b + x * M,
                    t[4] = o * A + c * w + g * E,
                    t[5] = h * A + d * w + m * E,
                    t[6] = u * A + p * w + y * E,
                    t[7] = l * A + f * w + x * E,
                    t[8] = o * _ + c * T + g * F,
                    t[9] = h * _ + d * T + m * F,
                    t[10] = u * _ + p * T + y * F,
                    t[11] = l * _ + f * T + x * F,
                    e !== t && (t[12] = e[12],
                    t[13] = e[13],
                    t[14] = e[14],
                    t[15] = e[15]))
                }(this, r, t, e),
                this
            }
            scale(t, e=this) {
                return function(t, e, r) {
                    let i = r[0]
                      , s = r[1]
                      , n = r[2];
                    t[0] = e[0] * i,
                    t[1] = e[1] * i,
                    t[2] = e[2] * i,
                    t[3] = e[3] * i,
                    t[4] = e[4] * s,
                    t[5] = e[5] * s,
                    t[6] = e[6] * s,
                    t[7] = e[7] * s,
                    t[8] = e[8] * n,
                    t[9] = e[9] * n,
                    t[10] = e[10] * n,
                    t[11] = e[11] * n,
                    t[12] = e[12],
                    t[13] = e[13],
                    t[14] = e[14],
                    t[15] = e[15]
                }(this, e, "number" === typeof t ? [t, t, t] : t),
                this
            }
            multiply(t, e) {
                return e ? i(this, t, e) : i(this, this, t),
                this
            }
            identity() {
                var t;
                return (t = this)[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = 1,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 1,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                this
            }
            copy(t) {
                var e, r;
                return r = t,
                (e = this)[0] = r[0],
                e[1] = r[1],
                e[2] = r[2],
                e[3] = r[3],
                e[4] = r[4],
                e[5] = r[5],
                e[6] = r[6],
                e[7] = r[7],
                e[8] = r[8],
                e[9] = r[9],
                e[10] = r[10],
                e[11] = r[11],
                e[12] = r[12],
                e[13] = r[13],
                e[14] = r[14],
                e[15] = r[15],
                this
            }
            fromPerspective({fov: t, aspect: e, near: r, far: i}={}) {
                return function(t, e, r, i, s) {
                    let n = 1 / Math.tan(e / 2)
                      , a = 1 / (i - s);
                    t[0] = n / r,
                    t[1] = 0,
                    t[2] = 0,
                    t[3] = 0,
                    t[4] = 0,
                    t[5] = n,
                    t[6] = 0,
                    t[7] = 0,
                    t[8] = 0,
                    t[9] = 0,
                    t[10] = (s + i) * a,
                    t[11] = -1,
                    t[12] = 0,
                    t[13] = 0,
                    t[14] = 2 * s * i * a,
                    t[15] = 0
                }(this, t, e, r, i),
                this
            }
            fromOrthogonal({left: t, right: e, bottom: r, top: i, near: s, far: n}) {
                return function(t, e, r, i, s, n, a) {
                    let o = 1 / (e - r)
                      , h = 1 / (i - s)
                      , u = 1 / (n - a);
                    t[0] = -2 * o,
                    t[1] = 0,
                    t[2] = 0,
                    t[3] = 0,
                    t[4] = 0,
                    t[5] = -2 * h,
                    t[6] = 0,
                    t[7] = 0,
                    t[8] = 0,
                    t[9] = 0,
                    t[10] = 2 * u,
                    t[11] = 0,
                    t[12] = (e + r) * o,
                    t[13] = (s + i) * h,
                    t[14] = (a + n) * u,
                    t[15] = 1
                }(this, t, e, r, i, s, n),
                this
            }
            fromQuaternion(t) {
                return function(t, e) {
                    let r = e[0]
                      , i = e[1]
                      , s = e[2]
                      , n = e[3]
                      , a = r + r
                      , o = i + i
                      , h = s + s
                      , u = r * a
                      , l = i * a
                      , c = i * o
                      , d = s * a
                      , p = s * o
                      , f = s * h
                      , g = n * a
                      , m = n * o
                      , y = n * h;
                    t[0] = 1 - c - f,
                    t[1] = l + y,
                    t[2] = d - m,
                    t[3] = 0,
                    t[4] = l - y,
                    t[5] = 1 - u - f,
                    t[6] = p + g,
                    t[7] = 0,
                    t[8] = d + m,
                    t[9] = p - g,
                    t[10] = 1 - u - c,
                    t[11] = 0,
                    t[12] = 0,
                    t[13] = 0,
                    t[14] = 0,
                    t[15] = 1
                }(this, t),
                this
            }
            setPosition(t) {
                return this.x = t[0],
                this.y = t[1],
                this.z = t[2],
                this
            }
            inverse(t=this) {
                return function(t, e) {
                    let r = e[0]
                      , i = e[1]
                      , s = e[2]
                      , n = e[3]
                      , a = e[4]
                      , o = e[5]
                      , h = e[6]
                      , u = e[7]
                      , l = e[8]
                      , c = e[9]
                      , d = e[10]
                      , p = e[11]
                      , f = e[12]
                      , g = e[13]
                      , m = e[14]
                      , y = e[15]
                      , x = r * o - i * a
                      , v = r * h - s * a
                      , b = r * u - n * a
                      , M = i * h - s * o
                      , A = i * u - n * o
                      , w = s * u - n * h
                      , E = l * g - c * f
                      , _ = l * m - d * f
                      , T = l * y - p * f
                      , F = c * m - d * g
                      , S = c * y - p * g
                      , C = d * y - p * m
                      , R = x * C - v * S + b * F + M * T - A * _ + w * E;
                    R && (R = 1 / R,
                    t[0] = (o * C - h * S + u * F) * R,
                    t[1] = (s * S - i * C - n * F) * R,
                    t[2] = (g * w - m * A + y * M) * R,
                    t[3] = (d * A - c * w - p * M) * R,
                    t[4] = (h * T - a * C - u * _) * R,
                    t[5] = (r * C - s * T + n * _) * R,
                    t[6] = (m * b - f * w - y * v) * R,
                    t[7] = (l * w - d * b + p * v) * R,
                    t[8] = (a * S - o * T + u * E) * R,
                    t[9] = (i * T - r * S - n * E) * R,
                    t[10] = (f * A - g * b + y * x) * R,
                    t[11] = (c * b - l * A - p * x) * R,
                    t[12] = (o * _ - a * F - h * E) * R,
                    t[13] = (r * F - i * _ + s * E) * R,
                    t[14] = (g * v - f * M - m * x) * R,
                    t[15] = (l * M - c * v + d * x) * R)
                }(this, t),
                this
            }
            compose(t, e, r) {
                return function(t, e, r, i) {
                    let s = e[0]
                      , n = e[1]
                      , a = e[2]
                      , o = e[3]
                      , h = s + s
                      , u = n + n
                      , l = a + a
                      , c = s * h
                      , d = s * u
                      , p = s * l
                      , f = n * u
                      , g = n * l
                      , m = a * l
                      , y = o * h
                      , x = o * u
                      , v = o * l
                      , b = i[0]
                      , M = i[1]
                      , A = i[2];
                    t[0] = (1 - (f + m)) * b,
                    t[1] = (d + v) * b,
                    t[2] = (p - x) * b,
                    t[3] = 0,
                    t[4] = (d - v) * M,
                    t[5] = (1 - (c + m)) * M,
                    t[6] = (g + y) * M,
                    t[7] = 0,
                    t[8] = (p + x) * A,
                    t[9] = (g - y) * A,
                    t[10] = (1 - (c + f)) * A,
                    t[11] = 0,
                    t[12] = r[0],
                    t[13] = r[1],
                    t[14] = r[2],
                    t[15] = 1
                }(this, t, e, r),
                this
            }
            getRotation(t) {
                return n(t, this),
                this
            }
            getTranslation(t) {
                var e, r;
                return r = this,
                (e = t)[0] = r[12],
                e[1] = r[13],
                e[2] = r[14],
                this
            }
            getScaling(t) {
                return s(t, this),
                this
            }
            getMaxScaleOnAxis() {
                return function(t) {
                    let e = t[0]
                      , r = t[1]
                      , i = t[2]
                      , s = t[4]
                      , n = t[5]
                      , a = t[6]
                      , o = t[8]
                      , h = t[9]
                      , u = t[10];
                    const l = e * e + r * r + i * i
                      , c = s * s + n * n + a * a
                      , d = o * o + h * h + u * u;
                    return Math.sqrt(Math.max(l, c, d))
                }(this)
            }
            lookAt(t, e, r) {
                return function(t, e, r, i) {
                    let s = e[0]
                      , n = e[1]
                      , a = e[2]
                      , o = i[0]
                      , h = i[1]
                      , u = i[2]
                      , l = s - r[0]
                      , c = n - r[1]
                      , d = a - r[2]
                      , p = l * l + c * c + d * d;
                    0 === p ? d = 1 : (p = 1 / Math.sqrt(p),
                    l *= p,
                    c *= p,
                    d *= p);
                    let f = h * d - u * c
                      , g = u * l - o * d
                      , m = o * c - h * l;
                    p = f * f + g * g + m * m,
                    0 === p && (u ? o += 1e-6 : h ? u += 1e-6 : h += 1e-6,
                    f = h * d - u * c,
                    g = u * l - o * d,
                    m = o * c - h * l,
                    p = f * f + g * g + m * m),
                    p = 1 / Math.sqrt(p),
                    f *= p,
                    g *= p,
                    m *= p,
                    t[0] = f,
                    t[1] = g,
                    t[2] = m,
                    t[3] = 0,
                    t[4] = c * m - d * g,
                    t[5] = d * f - l * m,
                    t[6] = l * g - c * f,
                    t[7] = 0,
                    t[8] = l,
                    t[9] = c,
                    t[10] = d,
                    t[11] = 0,
                    t[12] = s,
                    t[13] = n,
                    t[14] = a,
                    t[15] = 1
                }(this, t, e, r),
                this
            }
            determinant() {
                return function(t) {
                    let e = t[0]
                      , r = t[1]
                      , i = t[2]
                      , s = t[3]
                      , n = t[4]
                      , a = t[5]
                      , o = t[6]
                      , h = t[7]
                      , u = t[8]
                      , l = t[9]
                      , c = t[10]
                      , d = t[11]
                      , p = t[12]
                      , f = t[13]
                      , g = t[14]
                      , m = t[15];
                    return (e * a - r * n) * (c * m - d * g) - (e * o - i * n) * (l * m - d * f) + (e * h - s * n) * (l * g - c * f) + (r * o - i * a) * (u * m - d * p) - (r * h - s * a) * (u * g - c * p) + (i * h - s * o) * (u * f - l * p)
                }(this)
            }
            fromArray(t, e=0) {
                return this[0] = t[e],
                this[1] = t[e + 1],
                this[2] = t[e + 2],
                this[3] = t[e + 3],
                this[4] = t[e + 4],
                this[5] = t[e + 5],
                this[6] = t[e + 6],
                this[7] = t[e + 7],
                this[8] = t[e + 8],
                this[9] = t[e + 9],
                this[10] = t[e + 10],
                this[11] = t[e + 11],
                this[12] = t[e + 12],
                this[13] = t[e + 13],
                this[14] = t[e + 14],
                this[15] = t[e + 15],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this[0],
                t[e + 1] = this[1],
                t[e + 2] = this[2],
                t[e + 3] = this[3],
                t[e + 4] = this[4],
                t[e + 5] = this[5],
                t[e + 6] = this[6],
                t[e + 7] = this[7],
                t[e + 8] = this[8],
                t[e + 9] = this[9],
                t[e + 10] = this[10],
                t[e + 11] = this[11],
                t[e + 12] = this[12],
                t[e + 13] = this[13],
                t[e + 14] = this[14],
                t[e + 15] = this[15],
                t
            }
        }
    },
    6850: function(t, e, r) {
        "use strict";
        r.d(e, {
            S: function() {
                return h
            }
        });
        function i(t, e, r) {
            return t[0] = e[0] + r[0],
            t[1] = e[1] + r[1],
            t
        }
        function s(t, e, r) {
            return t[0] = e[0] - r[0],
            t[1] = e[1] - r[1],
            t
        }
        function n(t, e, r) {
            return t[0] = e[0] * r,
            t[1] = e[1] * r,
            t
        }
        function a(t) {
            var e = t[0]
              , r = t[1];
            return Math.sqrt(e * e + r * r)
        }
        function o(t, e) {
            return t[0] * e[1] - t[1] * e[0]
        }
        class h extends Array {
            constructor(t=0, e=t) {
                return super(t, e),
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set(t, e=t) {
                return t.length ? this.copy(t) : (function(t, e, r) {
                    t[0] = e,
                    t[1] = r
                }(this, t, e),
                this)
            }
            copy(t) {
                var e, r;
                return r = t,
                (e = this)[0] = r[0],
                e[1] = r[1],
                this
            }
            add(t, e) {
                return e ? i(this, t, e) : i(this, this, t),
                this
            }
            sub(t, e) {
                return e ? s(this, t, e) : s(this, this, t),
                this
            }
            multiply(t) {
                var e, r, i;
                return t.length ? (r = this,
                i = t,
                (e = this)[0] = r[0] * i[0],
                e[1] = r[1] * i[1]) : n(this, this, t),
                this
            }
            divide(t) {
                var e, r, i;
                return t.length ? (r = this,
                i = t,
                (e = this)[0] = r[0] / i[0],
                e[1] = r[1] / i[1]) : n(this, this, 1 / t),
                this
            }
            inverse(t=this) {
                var e, r;
                return r = t,
                (e = this)[0] = 1 / r[0],
                e[1] = 1 / r[1],
                this
            }
            len() {
                return a(this)
            }
            distance(t) {
                return t ? function(t, e) {
                    var r = e[0] - t[0]
                      , i = e[1] - t[1];
                    return Math.sqrt(r * r + i * i)
                }(this, t) : a(this)
            }
            squaredLen() {
                return this.squaredDistance()
            }
            squaredDistance(t) {
                return t ? function(t, e) {
                    var r = e[0] - t[0]
                      , i = e[1] - t[1];
                    return r * r + i * i
                }(this, t) : function(t) {
                    var e = t[0]
                      , r = t[1];
                    return e * e + r * r
                }(this)
            }
            negate(t=this) {
                var e, r;
                return r = t,
                (e = this)[0] = -r[0],
                e[1] = -r[1],
                this
            }
            cross(t, e) {
                return e ? o(t, e) : o(this, t)
            }
            scale(t) {
                return n(this, this, t),
                this
            }
            normalize() {
                return function(t, e) {
                    var r = e[0]
                      , i = e[1]
                      , s = r * r + i * i;
                    s > 0 && (s = 1 / Math.sqrt(s)),
                    t[0] = e[0] * s,
                    t[1] = e[1] * s
                }(this, this),
                this
            }
            dot(t) {
                return r = t,
                (e = this)[0] * r[0] + e[1] * r[1];
                var e, r
            }
            equals(t) {
                return r = t,
                (e = this)[0] === r[0] && e[1] === r[1];
                var e, r
            }
            applyMatrix3(t) {
                return function(t, e, r) {
                    var i = e[0]
                      , s = e[1];
                    t[0] = r[0] * i + r[3] * s + r[6],
                    t[1] = r[1] * i + r[4] * s + r[7]
                }(this, this, t),
                this
            }
            applyMatrix4(t) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1];
                    t[0] = r[0] * i + r[4] * s + r[12],
                    t[1] = r[1] * i + r[5] * s + r[13]
                }(this, this, t),
                this
            }
            lerp(t, e) {
                return function(t, e, r, i) {
                    var s = e[0]
                      , n = e[1];
                    t[0] = s + i * (r[0] - s),
                    t[1] = n + i * (r[1] - n)
                }(this, this, t, e),
                this
            }
            clone() {
                return new h(this[0],this[1])
            }
            fromArray(t, e=0) {
                return this[0] = t[e],
                this[1] = t[e + 1],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this[0],
                t[e + 1] = this[1],
                t
            }
        }
    },
    1945: function(t, e, r) {
        "use strict";
        r.d(e, {
            A: function() {
                return p
            }
        });
        function i(t) {
            let e = t[0]
              , r = t[1]
              , i = t[2];
            return Math.sqrt(e * e + r * r + i * i)
        }
        function s(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t
        }
        function n(t, e, r) {
            return t[0] = e[0] + r[0],
            t[1] = e[1] + r[1],
            t[2] = e[2] + r[2],
            t
        }
        function a(t, e, r) {
            return t[0] = e[0] - r[0],
            t[1] = e[1] - r[1],
            t[2] = e[2] - r[2],
            t
        }
        function o(t, e, r) {
            return t[0] = e[0] * r,
            t[1] = e[1] * r,
            t[2] = e[2] * r,
            t
        }
        function h(t) {
            let e = t[0]
              , r = t[1]
              , i = t[2];
            return e * e + r * r + i * i
        }
        function u(t, e) {
            let r = e[0]
              , i = e[1]
              , s = e[2]
              , n = r * r + i * i + s * s;
            return n > 0 && (n = 1 / Math.sqrt(n)),
            t[0] = e[0] * n,
            t[1] = e[1] * n,
            t[2] = e[2] * n,
            t
        }
        function l(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        }
        function c(t, e, r) {
            let i = e[0]
              , s = e[1]
              , n = e[2]
              , a = r[0]
              , o = r[1]
              , h = r[2];
            return t[0] = s * h - n * o,
            t[1] = n * a - i * h,
            t[2] = i * o - s * a,
            t
        }
        const d = function() {
            const t = [0, 0, 0]
              , e = [0, 0, 0];
            return function(r, i) {
                s(t, r),
                s(e, i),
                u(t, t),
                u(e, e);
                let n = l(t, e);
                return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n)
            }
        }();
        class p extends Array {
            constructor(t=0, e=t, r=t) {
                return super(t, e, r),
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set z(t) {
                this[2] = t
            }
            set(t, e=t, r=t) {
                return t.length ? this.copy(t) : (function(t, e, r, i) {
                    t[0] = e,
                    t[1] = r,
                    t[2] = i
                }(this, t, e, r),
                this)
            }
            copy(t) {
                return s(this, t),
                this
            }
            add(t, e) {
                return e ? n(this, t, e) : n(this, this, t),
                this
            }
            sub(t, e) {
                return e ? a(this, t, e) : a(this, this, t),
                this
            }
            multiply(t) {
                var e, r, i;
                return t.length ? (r = this,
                i = t,
                (e = this)[0] = r[0] * i[0],
                e[1] = r[1] * i[1],
                e[2] = r[2] * i[2]) : o(this, this, t),
                this
            }
            divide(t) {
                var e, r, i;
                return t.length ? (r = this,
                i = t,
                (e = this)[0] = r[0] / i[0],
                e[1] = r[1] / i[1],
                e[2] = r[2] / i[2]) : o(this, this, 1 / t),
                this
            }
            inverse(t=this) {
                var e, r;
                return r = t,
                (e = this)[0] = 1 / r[0],
                e[1] = 1 / r[1],
                e[2] = 1 / r[2],
                this
            }
            len() {
                return i(this)
            }
            distance(t) {
                return t ? function(t, e) {
                    let r = e[0] - t[0]
                      , i = e[1] - t[1]
                      , s = e[2] - t[2];
                    return Math.sqrt(r * r + i * i + s * s)
                }(this, t) : i(this)
            }
            squaredLen() {
                return h(this)
            }
            squaredDistance(t) {
                return t ? function(t, e) {
                    let r = e[0] - t[0]
                      , i = e[1] - t[1]
                      , s = e[2] - t[2];
                    return r * r + i * i + s * s
                }(this, t) : h(this)
            }
            negate(t=this) {
                var e, r;
                return r = t,
                (e = this)[0] = -r[0],
                e[1] = -r[1],
                e[2] = -r[2],
                this
            }
            cross(t, e) {
                return e ? c(this, t, e) : c(this, this, t),
                this
            }
            scale(t) {
                return o(this, this, t),
                this
            }
            normalize() {
                return u(this, this),
                this
            }
            dot(t) {
                return l(this, t)
            }
            equals(t) {
                return r = t,
                (e = this)[0] === r[0] && e[1] === r[1] && e[2] === r[2];
                var e, r
            }
            applyMatrix3(t) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1]
                      , n = e[2];
                    t[0] = i * r[0] + s * r[3] + n * r[6],
                    t[1] = i * r[1] + s * r[4] + n * r[7],
                    t[2] = i * r[2] + s * r[5] + n * r[8]
                }(this, this, t),
                this
            }
            applyMatrix4(t) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = r[3] * i + r[7] * s + r[11] * n + r[15];
                    a = a || 1,
                    t[0] = (r[0] * i + r[4] * s + r[8] * n + r[12]) / a,
                    t[1] = (r[1] * i + r[5] * s + r[9] * n + r[13]) / a,
                    t[2] = (r[2] * i + r[6] * s + r[10] * n + r[14]) / a
                }(this, this, t),
                this
            }
            scaleRotateMatrix4(t) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = r[3] * i + r[7] * s + r[11] * n + r[15];
                    a = a || 1,
                    t[0] = (r[0] * i + r[4] * s + r[8] * n) / a,
                    t[1] = (r[1] * i + r[5] * s + r[9] * n) / a,
                    t[2] = (r[2] * i + r[6] * s + r[10] * n) / a
                }(this, this, t),
                this
            }
            applyQuaternion(t) {
                return function(t, e, r) {
                    let i = e[0]
                      , s = e[1]
                      , n = e[2]
                      , a = r[0]
                      , o = r[1]
                      , h = r[2]
                      , u = o * n - h * s
                      , l = h * i - a * n
                      , c = a * s - o * i
                      , d = o * c - h * l
                      , p = h * u - a * c
                      , f = a * l - o * u
                      , g = 2 * r[3];
                    u *= g,
                    l *= g,
                    c *= g,
                    d *= 2,
                    p *= 2,
                    f *= 2,
                    t[0] = i + u + d,
                    t[1] = s + l + p,
                    t[2] = n + c + f
                }(this, this, t),
                this
            }
            angle(t) {
                return d(this, t)
            }
            lerp(t, e) {
                return function(t, e, r, i) {
                    let s = e[0]
                      , n = e[1]
                      , a = e[2];
                    t[0] = s + i * (r[0] - s),
                    t[1] = n + i * (r[1] - n),
                    t[2] = a + i * (r[2] - a)
                }(this, this, t, e),
                this
            }
            clone() {
                return new p(this[0],this[1],this[2])
            }
            fromArray(t, e=0) {
                return this[0] = t[e],
                this[1] = t[e + 1],
                this[2] = t[e + 2],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this[0],
                t[e + 1] = this[1],
                t[e + 2] = this[2],
                t
            }
            transformDirection(t) {
                const e = this[0]
                  , r = this[1]
                  , i = this[2];
                return this[0] = t[0] * e + t[4] * r + t[8] * i,
                this[1] = t[1] * e + t[5] * r + t[9] * i,
                this[2] = t[2] * e + t[6] * r + t[10] * i,
                this.normalize()
            }
        }
    }
}]);
