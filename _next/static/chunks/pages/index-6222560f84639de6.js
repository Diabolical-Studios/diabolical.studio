(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(t, e, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return i(9525)
        }
        ])
    },
    9993: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return D
            }
        });
        var s = i(5893)
          , h = i(7294)
          , r = i(8589)
          , c = i.n(r)
          , n = i(8439)
          , o = i.n(n)
          , a = i(896)
          , l = i.n(a)
          , v = i(4751)
          , d = i(2708);
        function m() {
            return (0,
            s.jsx)("svg", {
                width: "24",
                height: "24",
                children: (0,
                s.jsx)("path", {
                    fill: "#fff",
                    d: "M2.61 21.57 19.9 3.94l-6.42-.3v-.9a50.8 50.8 0 0 0 9.44-.92 52 52 0 0 0-.92 9.52h-.88l-.3-6.48L3.5 22.46l-.89-.89Z"
                })
            })
        }
        var u = i(4725)
          , x = i(3754);
        var p = i(6723)
          , g = i(9979)
          , y = i(9360)
          , f = new WeakSet
          , z = new WeakSet
          , _ = new WeakSet;
        class w {
            mount() {
                (0,
                p._)(this, f, j).call(this),
                this.timer = setInterval((()=>(0,
                p._)(this, f, j).call(this)), 1e3)
            }
            unmount() {
                clearInterval(this.timer)
            }
            constructor(t) {
                (0,
                g._)(this, f),
                (0,
                g._)(this, z),
                (0,
                g._)(this, _),
                this.el = t,
                this.hours = null,
                this.minutes = null
            }
        }
        function j() {
            const [t,e] = (0,
            p._)(this, _, b).call(this);
            t === this.hours && e === this.minutes || (this.hours = t,
            this.minutes = e,
            (0,
            p._)(this, z, P).call(this, t, e))
        }
        function P(t, e) {
            this.el.innerHTML = '<span class="'.concat(y.numbers, '">').concat(t, "</span>"),
            this.el.innerHTML += '<span class="'.concat(y.colon, '">:</span>'),
            this.el.innerHTML += '<span class="'.concat(y.numbers, '">').concat(e, "</span>")
        }
        function b() {
            const t = (new Date).toLocaleString("en-GB", {
                timeZone: "Asia/Tokyo",
                hour: "2-digit",
                minute: "2-digit"
            })
              , [e,i] = t.split(":");
            return [e, i]
        }
        function C(t) {
            let {enterAnimCls: e="", exitAnimCls: i=""} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , s = !1
              , h = !1
              , r = !1;
            function c() {
                s = !0,
                h || r || a()
            }
            function n() {
                s = !1,
                h || r || l()
            }
            function o() {
                h ? (d(),
                s && a()) : r && (v(),
                s || l())
            }
            function a() {
                t.classList.add(e),
                r = !0
            }
            function l() {
                t.classList.add(i),
                t.classList.remove(e),
                h = !0
            }
            function v() {
                r = !1,
                h = !1
            }
            function d() {
                t.classList.remove(i, e),
                h = !1,
                r = !1
            }
            t.addEventListener("mouseenter", c),
            t.addEventListener("mouseleave", n),
            t.addEventListener("animationend", o),
            this.unmount = ()=>{
                t.removeEventListener("mouseenter", c),
                t.removeEventListener("mouseleave", n),
                t.removeEventListener("animationend", o)
            }
        }
        var M = i(3054)
          , S = i.n(M);
        function k(t) {
            let {children: e, href: i, parentCls: r} = t;
            const c = (0,
            h.useRef)(null)
              , n = (0,
            h.useRef)(null);
            return (0,
            h.useEffect)((()=>(!n.current && c.current && (n.current = new C(c.current,{
                enterAnimCls: S().enter,
                exitAnimCls: S().exit
            })),
            ()=>{
                n.current && n.current.unmount()
            }
            )), []),
            (0,
            s.jsx)("a", {
                href: i,
                className: (0,
                v.y)(...r, S().link),
                ref: c,
                target: "_blank",
                rel: "noopener noreferrer",
                children: e
            })
        }
        function L(t, e) {
            return function(t, e) {
                let {wordCls: i, letterCls: s, delay: h=0} = e;
                return (0,
                x.A)(t, {
                    wordCls: i,
                    letterCls: s,
                    getLetterStyle: t=>"transition-delay: ".concat(h + Math.floor(200 * Math.sqrt(t)), "ms")
                })
            }(t, {
                wordCls: o().word,
                letterCls: o().letter,
                delay: e
            })
        }
        function I(t, e) {
            return (0,
            u._)(t, {
                wordCls: o().word,
                delay: e
            })
        }
        const E = ["p", "p-light", "p-title", "p-body-light"]
          , A = [...E, "h3", "h3-lead-light", "h3-lead"];
        function H(t) {
            let {children: e, name: i, counter: r} = t;
            var c, n;
            const [a,u] = (0,
            h.useState)(!1)
              , {ref: x, inView: p, entry: g} = (0,
            d.YD)({
                threshold: 0
            })
              , y = (0,
            h.useRef)(null)
              , f = (0,
            h.useRef)(null);
            (0,
            h.useEffect)((()=>{
                p && !a && u(!0)
            }
            ), [p, a]);
            const z = a && o().inView
              , _ = a && o().isEntered
              , j = 125 * r
              , P = Object.keys(e)[0]
              , b = e[P];
            if ((0,
            h.useEffect)((()=>{
                if ("h3" === P && !y.current) {
                    var t, e;
                    const i = null === (e = g) || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.querySelector("[data-clock]");
                    i && (y.current = new w(i),
                    y.current.mount())
                }
                return ()=>{
                    if ("h3" === P && y.current) {
                        var t, e;
                        (null === (e = g) || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.querySelector("[data-clock]")) && y.current.unmount()
                    }
                }
            }
            ), [null === (c = g) || void 0 === c ? void 0 : c.target, P]),
            (0,
            h.useEffect)((()=>{
                var t;
                if (A.includes(P) && (null === (t = g) || void 0 === t ? void 0 : t.target) && !f.current) {
                    var e, i;
                    const t = null === (i = g) || void 0 === i || null === (e = i.target) || void 0 === e ? void 0 : e.querySelectorAll("a");
                    t.length > 0 && (f.current = [],
                    t.forEach((t=>{
                        f.current.push({
                            el: t,
                            instance: new C(t,{
                                enterAnimCls: S().enter,
                                exitAnimCls: S().exit
                            })
                        })
                    }
                    )))
                }
                return ()=>{
                    var t;
                    A.includes(P) && (null === (t = g) || void 0 === t ? void 0 : t.target) && f.current && f.current.forEach((t=>{
                        let {instance: e} = t;
                        e.unmount()
                    }
                    ))
                }
            }
            ), [null === (n = g) || void 0 === n ? void 0 : n.target, P]),
            "audio" === P) {
                const t = "/min/about/".concat(i, "/").concat(b);
                return (0,
                s.jsx)("audio", {
                    controls: !0,
                    ref: x,
                    src: t
                })
            }
            if ("h2" === P)
                return (0,
                s.jsx)("h2", {
                    className: (0,
                    v.y)(z, _, l().super),
                    ref: x,
                    dangerouslySetInnerHTML: {
                        __html: L(b, j)
                    }
                });
            if ("h3" === P) {
                let t = I(b, j);
                return t = t.replace("==clock==", "<div data-clock></div>"),
                (0,
                s.jsx)("h3", {
                    className: (0,
                    v.y)(z, _, o().title, l().title),
                    ref: x,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
            if ("h3-lead-light" === P)
                return (0,
                s.jsx)("h3", {
                    className: (0,
                    v.y)(z, _, l().lead, l().light),
                    ref: x,
                    dangerouslySetInnerHTML: {
                        __html: I(b, j)
                    }
                });
            if ("h4-super" === P)
                return (0,
                s.jsx)("h4", {
                    className: (0,
                    v.y)(z, _, l().super),
                    ref: x,
                    dangerouslySetInnerHTML: {
                        __html: L(b, j)
                    }
                });
            var M;
            if ("link" === P)
                return (0,
                s.jsxs)(k, {
                    href: b,
                    parentCls: [z, _, l().link],
                    children: [(0,
                    s.jsx)(m, {}), null !== (M = e.text) && void 0 !== M ? M : b.replace(/\w*:\/\//, "")]
                });
            if (E.includes(P)) {
                const t = [l().p, o().p];
                return "p" === P ? t.push(l().lead) : "p-light" === P ? t.push(l().lead, l().light) : "p-title" === P ? t.push(l().title, o().title) : "p-body-light" === P && t.push(l().body, l().light),
                (0,
                s.jsx)("p", {
                    className: (0,
                    v.y)(z, _, ...t),
                    ref: x,
                    dangerouslySetInnerHTML: {
                        __html: I(e[P], j)
                    }
                })
            }
            if ("list" === P || "list-body" === P)
                return (0,
                s.jsx)("ul", {
                    className: (0,
                    v.y)(l().ul, _, z),
                    ref: x,
                    children: b.map(((t,e)=>(0,
                    s.jsx)("li", {
                        className: (0,
                        v.y)(l().li, "list-body" === P && l().body),
                        dangerouslySetInnerHTML: {
                            __html: I(t, j)
                        }
                    }, e)))
                });
            if (e.img) {
                const {src: t, alt: i, width: h=1e3, height: r=1e3, ratio: c, href: n} = e
                  , a = (0,
                s.jsx)("div", {
                    className: (0,
                    v.y)(z, _, o().imgBox),
                    children: (0,
                    s.jsx)("img", {
                        src: t,
                        alt: null !== i && void 0 !== i ? i : "",
                        width: h,
                        height: r,
                        className: o().img,
                        ref: x,
                        loading: "lazy",
                        style: {
                            transitionDelay: "".concat(j, "ms"),
                            aspectRatio: c
                        }
                    })
                });
                return n ? (0,
                s.jsx)("a", {
                    href: n,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: o().imgLink,
                    children: a
                }) : a
            }
            if (e.video) {
                const {video: t, poster: h=null, width: r=1e3, height: c=1e3, ratio: n} = e
                  , a = t.startsWith("/") ? t : "/min/about/".concat(i, "/").concat(t);
                let l = null;
                var H;
                if (null !== h)
                    l = (null === (H = h) || void 0 === H ? void 0 : H.startsWith("/")) ? h : "/min/about/".concat(i, "/").concat(h);
                return (0,
                s.jsx)("div", {
                    className: (0,
                    v.y)(z, _, o().imgBox, o().videoBox),
                    children: (0,
                    s.jsx)("video", {
                        src: a,
                        width: r,
                        height: c,
                        className: o().video,
                        ref: x,
                        muted: !0,
                        autoPlay: !0,
                        poster: l,
                        playsInline: !0,
                        loop: !0,
                        preload: "metadata",
                        style: {
                            transitionDelay: "".concat(j, "ms"),
                            aspectRatio: n
                        }
                    })
                })
            }
        }
        const N = ["audio", "h2", "h3", "h3-lead-light", "h4-super", "img", "link", "list", "list-body", "p", "p-body-light", "p-light", "p-title", "video"]
          , O = ["grid-2", "grid-2-2", "grid-3", "grid-3-2", "grid-4", "grid-5", "grid-6"]
          , T = ["col", "col-mob-full", "grid", "colspan-2", "colspan-3", "colspan-4", "colspan-5"];
        function D(t) {
            let {children: e, name: i} = t
              , r = 0;
            return (0,
            s.jsx)(s.Fragment, {
                children: function t(e) {
                    if (Array.isArray(e))
                        return e.map(((e,i)=>(0,
                        s.jsx)(h.Fragment, {
                            children: t(e)
                        }, i)));
                    if (N.some((t=>Object.hasOwn(e, t))))
                        return (0,
                        s.jsx)(H, {
                            counter: r,
                            name: i,
                            children: e
                        });
                    if (T.some((t=>Object.hasOwn(e, t)))) {
                        if (e.col)
                            return r++,
                            (0,
                            s.jsx)("div", {
                                children: t(e.col)
                            });
                        if (e["col-mob-full"])
                            return r++,
                            (0,
                            s.jsx)("div", {
                                className: c().colMobFull,
                                children: t(e["col-mob-full"])
                            });
                        if (e.grid) {
                            const i = (0,
                            s.jsx)("div", {
                                className: c().grid,
                                children: t(e.grid)
                            });
                            return r = 0,
                            i
                        }
                        for (const i of O)
                            if (e[i]) {
                                const h = (0,
                                s.jsx)("div", {
                                    className: c()[i],
                                    children: t(e[i])
                                });
                                return r = 0,
                                h
                            }
                        for (let i = 2; i <= 5; i++)
                            if (e["colspan-".concat(i)])
                                return (0,
                                s.jsx)("div", {
                                    className: c()["colspan-".concat(i)],
                                    children: t(e["colspan-".concat(i)])
                                })
                    }
                    console.error("Unknown content element: ", e)
                }(e)
            })
        }
        T.push(...O)
    },
    1997: function(t) {
        t.exports = {
            path: "p",
            dash: "q"
        }
    },
    2698: function(t) {
        t.exports = {
            artworks: "co",
            canvas: "cp",
            ui: "cq",
            navLeft: "cr",
            navRight: "cs",
            gridPicture: "ct",
            sliderPicture: "cu",
            sliderInfo: "cv",
            helper: "cw",
            swipeNavs: "cx",
            swipeLeft: "cy",
            swipeRight: "cz",
            swipeDown: "cA",
            hidden: "cB"
        }
    },
    6081: function(t) {
        t.exports = {
            btn: "F",
            text: "G",
            hint: "H",
            isActive: "I"
        }
    },
    9360: function(t) {
        t.exports = {
            numbers: "bG",
            colon: "bH",
            blink: "bI"
        }
    },
    8589: function(t) {
        t.exports = {
            grid: "r",
            "grid-2": "s",
            "grid-2-2": "t",
            "grid-3": "u",
            "grid-3-2": "v",
            "grid-4": "w",
            "grid-5": "x",
            "grid-6": "y",
            "colspan-2": "z",
            "colspan-3": "A",
            "colspan-4": "B",
            "colspan-5": "C",
            colMobFull: "E"
        }
    },
    8439: function(t) {
        t.exports = {
            imgLink: "bs",
            title: "bt",
            p: "bu",
            inView: "bv",
            isEntered: "bw",
            word: "bx",
            letter: "by",
            li: "bz",
            ul: "bA",
            imgBox: "bB",
            videoBox: "bC",
            img: "bE",
            video: "bF"
        }
    },
    9582: function(t) {
        t.exports = {
            downloadBtn: "g"
        }
    },
    7683: function(t) {
        t.exports = {
            root: "cI",
            visible: "cJ",
            container: "cK",
            showBtn: "cL",
            welcome: "cM",
            hint: "cN",
            collapsed: "cO",
            welcomeHeading: "cP",
            welcomeText: "cQ",
            hintIcon: "cR",
            word: "cS",
            letter: "cT"
        }
    },
    3054: function(t) {
        t.exports = {
            link: "bg",
            enter: "bh",
            exit: "bi"
        }
    },
    896: function(t) {
        t.exports = {
            p: "bj",
            super: "bk",
            title: "bl",
            lead: "bm",
            body: "bn",
            light: "bo",
            link: "bp",
            ul: "bq",
            li: "br"
        }
    },
    9525: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            __N_SSG: function() {
                return Mt
            },
            default: function() {
                return St
            }
        });
        var s = i(5893)
          , h = i(2698)
          , r = i(7294)
          , c = i(6723)
          , n = i(9979)
          , o = i(2142)
          , a = i(4284)
          , l = i(7032)
          , v = i(6850)
          , d = i(1927)
          , m = i(1945)
          , u = i(4724)
          , x = i(7444);
        class p {
            set(t, e) {
                "function" !== typeof e ? this._data[t] = e : this._functions[t] = e
            }
            get(t) {
                return this._data[t] ? this._data[t] : this._functions[t] ? (this._data[t] = this._functions[t](),
                this._data[t]) : void 0
            }
            clear() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                e.length ? e.forEach((t=>{
                    this._data[t] = void 0
                }
                )) : this.clearAll()
            }
            clearAll() {
                this._data = {}
            }
            constructor() {
                this._data = {},
                this._functions = {}
            }
        }
        var g = i(5344)
          , y = i(7756)
          , f = i(7121)
          , z = i(9886)
          , _ = i(5321)
          , w = i(4937)
          , j = i(3829)
          , P = i(884)
          , b = i(3775)
          , C = i(3023)
          , M = new WeakMap
          , S = new WeakMap;
        class k extends d.w {
            update(t) {
                this._time += t,
                this.program.uniforms.uTime.value = this._time
            }
            load() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.src;
                if (this.src = t,
                this._imageCache[t])
                    this._setImage(this._imageCache[t]);
                else {
                    {
                        const e = new Image;
                        this._imageCache[t] = e,
                        e.crossOrigin = "anonymous",
                        e.src = t,
                        e.onload = t=>{
                            this._setImage(e),
                            (0,
                            f._)(this, S).call(this, t)
                        }
                    }
                    this.overlay && this.overlay.load()
                }
            }
            setup(t) {
                return this._setupShader(),
                this._setupMesh(t),
                this
            }
            set opacity(t) {
                (0,
                f._)(this, M).jump(t)
            }
            get opacity() {
                return (0,
                f._)(this, M).get()
            }
            animateOpacity(t, e) {
                (0,
                b.j)((0,
                f._)(this, M), t, e)
            }
            _setupShader() {
                const t = new w.x(this.gl,{
                    generateMipmaps: !1
                });
                this.program = new l.$(this.gl,{
                    depthTest: !0,
                    depthWrite: !0,
                    fragment: P.Z,
                    vertex: j.Z,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uAlpha: {
                            value: (0,
                            f._)(this, M).get()
                        }
                    },
                    transparent: !0
                }),
                this.texture = t
            }
            _setupMesh(t) {
                this.geometry = t,
                this.mesh = new o.K(this.gl,{
                    geometry: t,
                    program: this.program
                }),
                this.mesh.setParent(this)
            }
            _setImage(t) {
                this.texture.image = t,
                this.program = new l.$(this.gl,{
                    depthTest: !0,
                    depthWrite: !0,
                    fragment: "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D tMap;\n\nuniform float uAlpha;\n\nvarying vec2 vUv;\n\nvoid main() {\n\tvec3 tex = texture2D(tMap, vUv).rgb * uAlpha;\n\tgl_FragColor = vec4(tex, uAlpha);\n}\n",
                    vertex: j.Z,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        tMap: {
                            value: this.texture
                        },
                        uAlpha: {
                            value: (0,
                            f._)(this, M).get()
                        }
                    }
                }),
                this.mesh.program = this.program
            }
            constructor({renderingContext: t, srcSet: e}) {
                super(),
                (0,
                z._)(this, M, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                z._)(this, S, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                _._)(this, M, (0,
                C.B)(1)),
                (0,
                _._)(this, S, (t=>{
                    this.emit("load", t)
                }
                )),
                (0,
                g.m)(this),
                this.renderingContext = t,
                this.srcSet = e,
                this.gl = this.renderingContext.renderer.gl,
                (0,
                f._)(this, M).on("change", (t=>this.program.uniforms.uAlpha.value = t)),
                this._time = 0,
                this._imageCache = {}
            }
        }
        var L = i(7229);
        let I = 0;
        const E = (t,e,i,s)=>{
            const h = new k({
                renderingContext: {
                    renderer: e
                },
                srcSet: t.srcSet
            });
            if (h.setup(s),
            h.opacity = 0,
            h.scale.set(i, i, 1),
            h.title = t.title,
            h.imageId = t.id,
            h.id = I++,
            t.overlay) {
                const i = new L.a;
                i.position.z = .2,
                i.setup(e.gl, s),
                i.src = t.overlay,
                i.opacity = 0,
                i.setParent(h),
                h.overlay = i
            }
            return h
        }
        ;
        var A = i(1832);
        const H = "grid"
          , N = "slider"
          , O = "transition"
          , T = "info";
        var D = i(1124)
          , G = i(732)
          , U = i(1973)
          , R = i(6424);
        class V {
            load() {
                let t = 0
                  , e = 0;
                this._artworks.pictures.forEach((i=>{
                    const s = this.checker.check(i)
                      , {isInside: h} = s;
                    if (h) {
                        t++;
                        const s = this._artworks.mode === H ? i.srcSet.lowRes : i.srcSet.highRes;
                        i.load(s),
                        i.once("load", (()=>{
                            e++,
                            e >= t && this._artworks.start()
                        }
                        ))
                    }
                }
                ))
            }
            constructor(t) {
                this.update = ()=>{
                    const t = this._artworks.mode;
                    t !== N && t !== H || this._artworks.pictures.forEach((e=>{
                        this.checker.check(e).isInside && (t === N && e.src !== e.srcSet.highRes && e.load(e.srcSet.highRes),
                        t === H && e.src !== e.srcSet.lowRes && e.load(e.srcSet.lowRes))
                    }
                    ))
                }
                ,
                this.destroy = ()=>{}
                ,
                this._artworks = t;
                const e = this._artworks.cache.get("pictureSize");
                this.checker = new U.q(new R.F({
                    width: this._artworks._toUnits(this._artworks.context.width) + 2 * e.x,
                    height: this._artworks._toUnits(this._artworks.context.height) + 2 * e.y
                }))
            }
        }
        var Z = i(5364)
          , B = i(4662);
        var W = new WeakSet
          , F = new WeakSet
          , q = new WeakSet;
        class Y extends g.Z {
            destroy() {
                this.picturesLoader && this.picturesLoader.destroy(),
                this.cache.clear(),
                this.context.destroy(),
                this.initialized && (window.removeEventListener("resize", this._onResize),
                this.canvas.removeEventListener("pointermove", this._onMouseMove),
                this.canvas.removeEventListener("pointerdown", this._onPointerDown),
                this.canvas.removeEventListener("pointerup", this._onPointerUp),
                window.removeEventListener("pointerout", this._onPointerUp),
                window.removeEventListener("keydown", this._onKeyDown),
                this.canvas.removeEventListener("pointerout", this._onPointerOut),
                this.context.canvas.removeEventListener("wheel", this.wheelControls.onWheel),
                this.wheelControls.off("wheel", this._onMouseWheel))
            }
            get gap() {
                return this.cache.get("gap")
            }
            updateActiveIndex() {
                const t = this.activeIndex
                  , e = this._getActiveIndex();
                t !== e && (this.activeIndex = e,
                this.activePicture = this.getActivePicture(),
                this.emit("slideChanged", this))
            }
            getActivePicture() {
                if (this.mode === H) {
                    const t = this._getGridActiveRowIndex()
                      , e = this._getGridActiveColIndex();
                    return this.layout[t][e]
                }
                return this.mode === N ? this.sliderLayout[this.activeIndex] : this.activePicture
            }
            nextSlide() {
                if (this.mode !== N)
                    return;
                const t = this.activeIndex + 1 >= this.sliderLayout.length ? 0 : this.activeIndex + 1
                  , e = this.sliderLayout[t];
                this._slideToPicture(e)
            }
            prevSlide() {
                if (this.mode !== N)
                    return;
                const t = this.activeIndex - 1 < 0 ? this.sliderLayout.length - 1 : this.activeIndex - 1
                  , e = this.sliderLayout[t];
                this._slideToPicture(e)
            }
            slideTo(t) {
                const e = this.sliderLayout.find((e=>e.imageId === t));
                this._slideToPicture(e)
            }
            _createLayout() {
                this.layout = [],
                this.pictures.forEach(((t,e)=>{
                    const i = Math.floor(e / this.rowCount)
                      , s = e % this.rowCount;
                    Array.isArray(this.layout[s]) || (this.layout[s] = [],
                    this.layout[s][i] = []),
                    this.layout[s][i] = t
                }
                )),
                this.layoutMap = new Map,
                this.layout.forEach(((t,e)=>{
                    t.forEach(((t,i)=>{
                        this.layoutMap.set(t, {
                            rowIndex: e,
                            columnIndex: i
                        })
                    }
                    ))
                }
                ));
                const t = this.cache.get("pictureSize")
                  , e = this.gap
                  , i = this.cache.get("constraints");
                if (this.mode === H)
                    this.layout.forEach(((s,h)=>{
                        s.forEach(((s,r)=>{
                            const c = t.x
                              , n = t.y;
                            let o = r * (e + c)
                              , a = h * (e + n);
                            o < i.left && (o += i.width),
                            o > i.right && (o -= i.width),
                            a < i.bottom && (a += i.height),
                            a > i.top && (a -= i.height),
                            (0,
                            y.n)(s.position, [o, a])
                        }
                        ))
                    }
                    ));
                else if (this.mode === N) {
                    this.activePicture = this.pictures[0];
                    const {layout: t, doubles: e} = this._computeSliderLayout();
                    this.sliderLayout = t;
                    const i = this.cache.get("pictureSize").x + this.sliderGap
                      , s = this.cache.get("sliderConstraints");
                    this.sliderLayout.forEach(((t,e)=>{
                        const h = [0, 1, this.sliderLayout.length - 1].includes(e);
                        let r = e * i;
                        const c = h ? 0 : this.sliderZ;
                        r > s.right && (r -= s.width),
                        (0,
                        y.n)(t.position, {
                            x: r,
                            y: 0,
                            z: c
                        })
                    }
                    )),
                    e.forEach((t=>{
                        t.visible = !1,
                        t.opacity = 0,
                        this.grid.removeChild(t)
                    }
                    ))
                }
            }
            _updateFocus(t) {
                this.focusedPicture && (this.focusedPicture.overlay && (this.focusedPicture.overlay.opacity = 0),
                this.focusedPicture = null),
                t && this.mode === H && (t.overlay && (t.overlay.opacity = 1),
                this.focusedPicture = t)
            }
            _slideToPicture(t) {
                this.target.x = -t.position.x,
                (0,
                y.l)(this.grid.position, this.target, this.animationParams.drag)
            }
            _setMode(t) {
                t !== O && t !== T || (this.shouldCheckConstraints = !1),
                this.shouldUpdateOpacity = t === H,
                this.lastMode = this.mode,
                this.mode = t,
                this.lastMode !== t && this.emit("modeChanged", this)
            }
            _handleSliderMove() {
                "x" === this.gestureAxis ? this._handleMove() : "y" === this.gestureAxis && this._handleExitSlide()
            }
            _handleMove() {
                if (!this.isDown || this.mode === O || this.mode === T)
                    return;
                this.dragging = !0;
                const t = this.isMob ? this.params.mobMultiplier : this.params.multiplier
                  , e = this.target.x + this.deltaDrag.x * t;
                let i;
                this.mode === H && (i = this.target.y + this.deltaDrag.y * t),
                this.mode === N && (i = this.target.y),
                this.target.set(e, i, 0),
                (0,
                y.l)(this.grid.position, this.target, this.animationParams.drag)
            }
            _handleExitSlide() {
                this.grabbedPicture === this.activePicture && (this.grabbedPictureOffsetY = this.grabbedPicture.position.y + this._toUnits(-this.deltaDragPx.y) * (this.sliderZ / this.context.camera.position.z))
            }
            _escHandler() {
                this.mode === N && this._snapToSliderPicture(this.activePicture, (()=>{
                    this._sliderToGrid()
                }
                )),
                this.mode === T && this._toSlider()
            }
            _enterHandler() {
                if (!this.isDown) {
                    if (this.mode === H) {
                        const t = this._getGridPictureClosestToTarget();
                        if (!t)
                            return;
                        this._handlePictureClick({
                            target: t
                        })
                    }
                    this.mode === N && this._snapToSliderPicture(this._getSliderPictureClosestToTarget(), (()=>{
                        this._toInfo()
                    }
                    ))
                }
            }
            _arrowHandler(t) {
                if (this.mode === O || this.mode === T)
                    return;
                const e = this.mode === N ? this.sliderGap : this.gap
                  , {x: i, y: s} = this.cache.get("pictureSize");
                "ArrowDown" === t && this.mode === H && (this.target.y += s + e),
                "ArrowUp" === t && this.mode === H && (this.target.y -= s + e),
                "ArrowRight" === t && (this.target.x -= i + e),
                "ArrowLeft" === t && (this.target.x += i + e),
                this.mode === H && this._updateFocus(this._getGridPictureClosestToTarget()),
                (0,
                y.l)(this.grid.position, this.target, this.animationParams.drag)
            }
            _getGridPictureClosestToTarget() {
                const {x: t, y: e} = this.cache.get("pictureSize")
                  , i = t + this.gap
                  , s = e + this.gap
                  , h = -this.target.x
                  , r = -this.target.y;
                let c = Math.round(h / i) % this.columnCount
                  , n = Math.round(r / s) % this.rowCount;
                return c < 0 && (c += this.columnCount),
                n < 0 && (n += this.rowCount),
                this.layout[n][c]
            }
            _getSliderPictureClosestToTarget() {
                const {x: t} = this.cache.get("pictureSize")
                  , e = t + this.sliderGap
                  , i = -this.target.x;
                let s = Math.round(i / e) % this.sliderLayout.length;
                return s < 0 && (s += this.sliderLayout.length),
                this.sliderLayout[s]
            }
            _getGridActiveColIndex() {
                const {x: t} = this.cache.get("pictureSize")
                  , e = this.gap
                  , i = this.columnCount
                  , s = t + e
                  , h = s * i
                  , r = -this.grid.position.x / h
                  , c = Math.round(r * h / s) % i;
                return c < 0 ? i + c : c
            }
            _getGridActiveRowIndex() {
                const {y: t} = this.cache.get("pictureSize")
                  , e = this.gap
                  , i = this.rowCount
                  , s = t + e
                  , h = s * i
                  , r = -this.grid.position.y / h
                  , c = Math.round(r * h / s) % i;
                return c < 0 ? i + c : c
            }
            _getGridActiveIndex() {
                return this._getGridActiveRowIndex() * this.columnCount + this._getGridActiveColIndex()
            }
            _getSliderActiveIndex() {
                const {x: t} = this.cache.get("pictureSize")
                  , e = this.sliderGap
                  , i = this.sliderLayout.length
                  , s = t + e
                  , h = s * i
                  , r = -this.grid.position.x / h
                  , c = Math.round(r * h / s) % i;
                return c < 0 ? i + c : c
            }
            _getActiveIndex() {
                return this.mode === N ? this._getSliderActiveIndex() : this.mode === H ? this._getGridActiveIndex() : void 0
            }
            _snap() {
                if (this.mode === H) {
                    const {x: t, y: e} = this.cache.get("pictureSize")
                      , i = this.gap
                      , s = t + i
                      , h = e + i
                      , r = Math.round(this.target.x / s)
                      , c = Math.round(this.target.y / h);
                    this.target.x = r * s,
                    this.target.y = c * h,
                    (0,
                    y.l)(this.grid.position, this.target, this.animationParams.snapOnDragEnd)
                }
                if (this.mode === N) {
                    const {x: t} = this.cache.get("pictureSize")
                      , e = t + this.sliderGap
                      , i = Math.round(this.target.x / e);
                    this.target.x = i * e,
                    (0,
                    y.l)(this.grid.position, this.target, this.animationParams.snapOnDragEnd)
                }
            }
            _getCoordinatesOfEvent(t) {
                const e = this.cache.get("width")
                  , i = this.cache.get("height");
                return new v.S(t.clientX / e * 2 - 1,2 * (1 - t.clientY / i) - 1)
            }
            _buildConstraints() {
                return new R.F(this._getGridSize())
            }
            _checkConstraints() {
                if (!this.shouldCheckConstraints)
                    return;
                const t = this.mode === N ? "sliderConstraints" : "constraints";
                this._constraintsKeeper.constraints = this.cache.get(t),
                this._constraintsKeeper.update(),
                this.shouldCheckConstraints = !1
            }
            _buildSliderConstraints() {
                return new R.F(this._getSliderSize())
            }
            _getSliderPictureSizeInPx() {
                return {
                    x: this.sliderEl.offsetWidth,
                    y: this.sliderEl.offsetHeight
                }
            }
            _getSliderPictureSize() {
                const {x: t, y: e} = this._getSliderPictureSizeInPx();
                return {
                    x: this._toUnits(t),
                    y: this._toUnits(e)
                }
            }
            _getPictureSizeInPx() {
                return {
                    x: this.gridEl.offsetWidth,
                    y: this.gridEl.offsetHeight
                }
            }
            _getPictureSize() {
                const {x: t, y: e} = this._getPictureSizeInPx();
                return {
                    x: this._toUnits(t),
                    y: this._toUnits(e)
                }
            }
            _getGridSize() {
                const {x: t, y: e} = this._getPictureSize();
                return {
                    x: this.columnCount * (t + this.gap),
                    y: this.rowCount * (e + this.gap)
                }
            }
            _getSliderSize() {
                const {x: t, y: e} = this._getPictureSize();
                return {
                    x: this.images.length * (t + this.sliderGap),
                    y: e + this.sliderGap
                }
            }
            _computeSliderZ() {
                const t = this.context.camera.position.z
                  , {x: e} = this._getPictureSize()
                  , {x: i} = this._getSliderPictureSize();
                return t - t / (i / e)
            }
            _computeOpacity(t) {
                const e = this._toUnits(this.cache.get("width"))
                  , i = this._toUnits(this.cache.get("height"))
                  , s = (t.position.x + this.grid.position.x) / (e / 2)
                  , h = (t.position.y + this.grid.position.y) / (i / 2)
                  , r = 1 - Math.sqrt(s * s + h * h) + this.params.opacityDistance;
                return Math.max(Math.min(r, 1), this.params.opacity)
            }
            _computeRotation(t) {
                return this.lookBuffer.position.copy(t),
                this.lookBuffer.lookAt(this.lookTarget),
                this.lookBuffer.rotation
            }
            _handlePictureClick(t) {
                let {target: e} = t;
                if (this.dragging = !1,
                this.mode === N) {
                    const t = {
                        ...this.animationParams.snapOnClick
                    };
                    e === this.activePicture && (t.onComplete = ()=>this._toInfo()),
                    this.target.x = -e.position.x,
                    (0,
                    y.l)(this.grid.position, this.target, t)
                } else if (this.mode === H) {
                    this.target.x = -e.position.x,
                    this.target.y = -e.position.y;
                    const t = {
                        ...this.animationParams.snapOnClick,
                        onComplete: ()=>this._toSlider()
                    };
                    (0,
                    y.l)(this.grid.position, this.target, t),
                    this.resetLookAt()
                } else
                    this.mode === T && this._toSlider()
            }
            _snapToSliderPicture(t, e) {
                const i = this.target.x + t.position.x;
                this.target.x -= i;
                const s = {
                    ...this.animationParams.snapOnClick,
                    onComplete: e
                };
                (0,
                y.l)(this.grid.position, this.target, s)
            }
            resetLookAt() {
                this.shouldLookAtPointer = !1,
                this.pictures.forEach((t=>{
                    (0,
                    y.l)(t.rotation, {
                        x: 0,
                        y: 0
                    }, this.animationParams.resetRotation)
                }
                ))
            }
            start() {
                this.context.updatables.push(this),
                this.activePicture = this.getActivePicture(),
                this.context.start(),
                this.emit("start"),
                (0,
                c._)(this, W, K).call(this)
            }
            _loadPictures() {
                this.picturesLoader = new V(this),
                this.picturesLoader.load()
            }
            _sliderToGrid() {
                if (this.mode === H)
                    return;
                this._setMode(O);
                const t = this.activePicture
                  , e = [this._getPrevInSlider(t), t, this._getNextInSlider(t)]
                  , {x: i, y: s} = this._getPictureSize();
                e.forEach(((t,e)=>{
                    const i = e > 0 ? e - 1 : this.columnCount - 1
                      , s = this.layout[0][i]
                      , {rowIndex: h, columnIndex: r} = this.layoutMap.get(t);
                    this.layout[0][i] = t,
                    this.layout[h][r] = s,
                    this.layoutMap.set(t, {
                        rowIndex: 0,
                        columnIndex: i
                    }),
                    this.layoutMap.set(s, {
                        rowIndex: h,
                        columnIndex: r
                    })
                }
                ));
                const h = this.grid.position.x - this.target.x;
                this.target.set(0, 0, 0),
                (0,
                y.n)(this.grid.position, this.target);
                const r = this.cache.get("constraints");
                this.layout.forEach(((t,c)=>{
                    t.forEach(((t,n)=>{
                        const o = n * (i + this.gap)
                          , a = c * (s + this.gap)
                          , l = o > r.right ? o - r.width : o
                          , v = a > r.top ? a - r.height : a;
                        if (e.includes(t)) {
                            const i = (e.indexOf(t) - 1) * (this.sliderGap - this.gap);
                            (0,
                            y.n)(t.position, {
                                x: l + i + h
                            }),
                            (0,
                            y.l)(t.position, [l, 0, 0], this.animationParams.zoom);
                            const s = this._computeOpacity({
                                position: {
                                    x: l,
                                    y: v,
                                    z: 0
                                }
                            });
                            t.animateOpacity(s, this.animationParams.opacity)
                        } else {
                            t.opacity = 0,
                            (0,
                            y.n)(t.position, [l, v, 0]),
                            !t.parent && t.setParent(this.grid),
                            t.visible = !0;
                            const e = this._computeOpacity(t);
                            t.animateOpacity(e, {
                                ...this.animationParams.opacity,
                                delay: .3,
                                onComplete: ()=>{
                                    this.shouldLookAtPointer = !0,
                                    this._setMode(H)
                                }
                            })
                        }
                    }
                    ))
                }
                ))
            }
            _computeSliderLayout() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.activePicture;
                const e = this._getPrevInGrid(t)
                  , i = this._getNextInGrid(t)
                  , s = [e, t, i]
                  , h = this.pictures.filter((t=>!s.includes(t)))
                  , r = [];
                for (let c = 0; c < s.length; c++) {
                    const t = s[c]
                      , e = t.copyPicture || t.originalPicture;
                    e && (r.push(e),
                    h[h.indexOf(e)] = null)
                }
                for (let c = 0; c < h.length; c++) {
                    const t = h[c];
                    if (!t)
                        continue;
                    const e = t.copyPicture || t.originalPicture;
                    e && (r.push(e),
                    h[h.indexOf(e)] = null)
                }
                return {
                    layout: [t, i, ...h.filter((t=>!!t && !r.includes(t))), e],
                    doubles: r
                }
            }
            _getPrevInSlider() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.activePicture;
                let e = this.sliderLayout.indexOf(t) - 1;
                return e < 0 && (e = this.sliderLayout.length - 1),
                this.sliderLayout[e]
            }
            _getNextInSlider() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.activePicture;
                let e = this.sliderLayout.indexOf(t) + 1;
                return e >= this.sliderLayout.length && (e = 0),
                this.sliderLayout[e]
            }
            _getPrevInGrid() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.activePicture;
                const {rowIndex: e, columnIndex: i} = this.layoutMap.get(t)
                  , s = this.layout[e];
                return s[i - 1 < 0 ? s.length - 1 : i - 1]
            }
            _getNextInGrid() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.activePicture;
                const {rowIndex: e, columnIndex: i} = this.layoutMap.get(t)
                  , s = this.layout[e];
                return s[i + 1 > s.length - 1 ? 0 : i + 1]
            }
            _toInfo() {
                if (this.mode === N) {
                    const t = this.activePicture
                      , e = this.sliderLayout.filter((e=>e !== t))
                      , i = {
                        ...this.animationParams.opacity,
                        duration: .3
                    };
                    t.animateOpacity(0, i),
                    e.forEach((t=>t.animateOpacity(.2, i))),
                    this._setMode(T)
                }
            }
            _toSlider() {
                this.mode !== N && (this.mode === T && this.sliderLayout.forEach((t=>{
                    t.animateOpacity(1, {
                        ...this.animationParams.opacity,
                        duration: .3
                    }),
                    this.shouldCheckConstraints = !0,
                    this._setMode(N)
                }
                )),
                this.mode === H && this._gridToSlider())
            }
            _gridToSlider() {
                this._setMode(O);
                const {layout: t, doubles: e} = this._computeSliderLayout();
                this.sliderLayout = t;
                const i = this.cache.get("pictureSize").x + this.sliderGap
                  , s = this.cache.get("sliderConstraints");
                this.layout.forEach((t=>{
                    t.forEach((t=>{
                        const e = t.position.x + this.target.x
                          , i = e > s.right ? e - s.width : e
                          , h = t.position.y + this.target.y;
                        (0,
                        y.n)(t.position, {
                            x: i,
                            y: h
                        })
                    }
                    ))
                }
                )),
                this.target.set(0, 0, 0),
                (0,
                y.n)(this.grid.position, this.target),
                this.focusedPicture && (this.focusedPicture.overlay && (this.focusedPicture.overlay.opacity = 0),
                this.focusedPicture = null),
                this.sliderLayout.forEach(((t,e)=>{
                    let h = e * i;
                    h > s.right && (h -= s.width);
                    const r = this.sliderZ;
                    if (0 !== e && 1 !== e && e !== this.sliderLayout.length - 1) {
                        const e = ()=>{
                            (0,
                            y.n)(t.position, {
                                x: h,
                                y: 0,
                                z: r
                            }),
                            t.animateOpacity(1, this.animationParams.opacity),
                            this._setMode(N)
                        }
                        ;
                        t.animateOpacity(0, {
                            ...this.animationParams.opacity,
                            onComplete: e
                        })
                    } else
                        t.animateOpacity(1, this.animationParams.opacity),
                        (0,
                        y.l)(t.position, {
                            x: h,
                            y: 0,
                            z: r
                        }, this.animationParams.zoom)
                }
                )),
                e.forEach((t=>{
                    t.animateOpacity(0, {
                        ...this.animationParams.opacity,
                        onComplete: ()=>{
                            t.visible = !1,
                            this.grid.removeChild(t)
                        }
                    })
                }
                ))
            }
            _toUnits(t) {
                return t * this.cache.get("unitsPerPixels")
            }
            _setCursor(t) {
                this.mode === T ? this.context.canvas.style.cursor = "pointer" : this.context.canvas.style.cursor = t
            }
            constructor({canvas: t, images: e, params: i, gridEl: s, sliderEl: h, mode: r=H}) {
                super(),
                (0,
                n._)(this, W),
                (0,
                n._)(this, F),
                (0,
                n._)(this, q),
                this.update = t=>{
                    this._checkConstraints(),
                    this.updateActiveIndex(),
                    this.isMob && this.activePicture !== this.focusedPicture && this._updateFocus(this.activePicture),
                    this.picturesLoader && this.picturesLoader.update(),
                    this.lookTarget.x = this.pointer.x - this.grid.position.x,
                    this.lookTarget.y = this.pointer.y - this.grid.position.y,
                    this.pictures.forEach((e=>{
                        if (e.update(t),
                        this.shouldUpdateOpacity && (e.opacity = this._computeOpacity(e)),
                        !this.shouldLookAtPointer)
                            return;
                        const i = this._computeRotation(e.position);
                        (0,
                        y.l)(e.rotation, i, this.animationParams.rotation)
                    }
                    )),
                    this.grabbedPicture && "y" === this.gestureAxis && (0,
                    y.n)(this.grabbedPicture.position, {
                        y: this.grabbedPictureOffsetY
                    }, this.animationParams.dragPicture),
                    this.shouldUpdateOpacity = !1
                }
                ,
                this._onPointerDown = t=>{
                    if (!(0,
                    G.k)(t))
                        return;
                    this.isDown = !0;
                    const {x: e, y: i} = this._getCoordinatesOfEvent(t)
                      , s = e * this.cache.get("unitsPerPixels") * this.cache.get("width") / 2
                      , h = i * this.cache.get("unitsPerPixels") * this.cache.get("height") / 2;
                    this.downStart.set(s, h),
                    this.prevDrag.set(s, h),
                    this.prevDragPx.set(t.clientX, t.clientY),
                    this.emit("pointerDown", {
                        x: s,
                        y: h
                    })
                }
                ,
                this._onPointerUp = ()=>{
                    this.dragging && this._snap(),
                    this.mode === N && "y" === this.gestureAxis && (Math.abs(this.grabbedPictureOffsetY) > .35 ? this._sliderToGrid() : this.grabbedPicture && (0,
                    y.l)(this.grabbedPicture.position, {
                        y: 0
                    }, this.animationParams.dragPicture)),
                    this.grabbedPicture = null,
                    this.grabbedPictureOffsetY = 0,
                    this.dragging = !1,
                    this.isDown = !1,
                    this.gestureAxis = null
                }
                ,
                this._onPointerOut = ()=>{
                    this.pointer.set(0)
                }
                ,
                this._onEmulatedClick = ()=>{
                    this.mode === N && this._sliderToGrid(),
                    this.mode === T && this._toSlider()
                }
                ,
                this._onMouseMove = t=>{
                    const e = this._getCoordinatesOfEvent(t)
                      , i = e.x * this.cache.get("unitsPerPixels") * this.cache.get("width") / 2
                      , s = e.y * this.cache.get("unitsPerPixels") * this.cache.get("height") / 2;
                    if (this.pointer.set(i, s, 0),
                    this.currentDrag.set(i, s),
                    this.deltaDrag.set(i - this.prevDrag.x, s - this.prevDrag.y),
                    this.prevDrag.set(i, s),
                    this.currentDragPx.set(t.clientX, t.clientY),
                    this.deltaDragPx.set(t.clientX - this.prevDragPx.x, t.clientY - this.prevDragPx.y),
                    this.prevDragPx.copy(this.currentDragPx),
                    !this.isDown)
                        return;
                    const h = this.downStart.x - this.currentDrag.x
                      , r = this.downStart.y - this.currentDrag.y;
                    if (this.mode === N) {
                        if (!this.gestureAxis) {
                            let t;
                            Math.abs(h) > .04 && (t = "x"),
                            Math.abs(r) > .08 && (t = "y"),
                            this.gestureAxis = t
                        }
                        this._handleSliderMove()
                    } else
                        this.mode === H && this._handleMove()
                }
                ,
                this._onMouseWheel = t=>{
                    if (this.mode !== H && this.mode !== N)
                        return;
                    const e = this.mode === N ? "x" : t.axis
                      , i = "y" === e ? -t.direction : t.direction
                      , s = this.cache.get("pictureSize")
                      , h = this.mode === N ? this.sliderGap : this.gap;
                    this.target[e] -= i * (s[e] + h),
                    (0,
                    y.l)(this.grid.position, this.target, this.animationParams.drag)
                }
                ,
                this._onKeyDown = t=>{
                    if (![document.body, this.context.canvas].includes(document.activeElement))
                        return;
                    const {key: e} = t;
                    "Escape" === e && this._escHandler(),
                    "Enter" === e && this._enterHandler(),
                    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e) && this._arrowHandler(e)
                }
                ,
                this._onPositionUpdate = ()=>{
                    this.shouldCheckConstraints = this.mode === N || this.mode === H,
                    this.shouldUpdateOpacity = this.mode === H
                }
                ,
                this._onResize = ()=>{
                    this.cache.clear()
                }
                ,
                Object.assign(this, {
                    canvas: t,
                    images: e,
                    params: i,
                    gridEl: s,
                    sliderEl: h,
                    mode: r
                }),
                this.animationParams = A,
                this.animationParams.drag.onUpdate = this._onPositionUpdate,
                this.animationParams.snapOnDragEnd.onUpdate = this._onPositionUpdate,
                this.animationParams.snapOnClick.onUpdate = this._onPositionUpdate,
                this.isMob = window.matchMedia("(max-aspect-ratio: 3 / 4)").matches,
                this.activePicture = null,
                this.activeIndex = 0,
                this.cache = new p,
                this.context = new B.I(t),
                this.context.camera.position.z = 10,
                this.grid = new d.w,
                this.grid.setParent(this.context.scene),
                this.rowCount = 4,
                this.columnCount = Math.ceil(this.images.length / this.rowCount),
                this.picturesCount = this.rowCount * this.columnCount,
                this.pictures = Array.from({
                    length: this.picturesCount
                }),
                this.cache.set("gap", (()=>this._toUnits(16))),
                this.cache.set("pictureSize", (()=>this._getPictureSize())),
                this.cache.set("unitsPerPixels", (()=>(0,
                u.Z)(this.context.camera.position.z, this.context.camera))),
                this.cache.set("width", (()=>this.context.width)),
                this.cache.set("height", (()=>this.context.height)),
                this.cache.set("constraints", (()=>this._buildConstraints())),
                this.cache.set("sliderConstraints", (()=>this._buildSliderConstraints())),
                this.viewportPlane = (t=>{
                    const e = new o.K(t,{
                        geometry: new a.J(t),
                        program: new l.$(t,{
                            vertex: "attribute vec3 position;void main(){gl_Position = vec4(position, 1.0);}",
                            fragment: "void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); }"
                        })
                    });
                    return e.visible = !1,
                    e.matrixAutoUpdate = !1,
                    e
                }
                )(this.context.gl),
                (0,
                g.m)(this.viewportPlane),
                this.viewportPlane.scale.set(2 * this._toUnits(this.context.width), 2 * this._toUnits(this.context.height), 1),
                this.viewportPlane.on("click", this._onEmulatedClick),
                this.viewportPlane.position.z = -5,
                this.viewportPlane.updateMatrix(),
                this.viewportPlane.setParent(this.context.scene),
                this.geometry = new x.M(this.context.gl,{
                    height: 1.3333,
                    radius: .01
                });
                const c = this.cache.get("pictureSize");
                this.pictures = (t=>{
                    let {renderer: e, images: i, count: s, scale: h, geometry: r} = t;
                    const c = []
                      , n = [];
                    for (let a = 0; a < s; a++) {
                        const t = i[a % i.length]
                          , s = E(t, e, h, r);
                        a < i.length ? c.push(s) : (n.push(s),
                        s.originalPicture = c[a - i.length],
                        s.originalPicture.copyPicture = s)
                    }
                    const o = Math.floor(c.length / 2);
                    return c.splice(o, 0, ...n.reverse()),
                    c
                }
                )({
                    renderer: this.context.renderer,
                    images: e,
                    count: this.picturesCount,
                    scale: c.x,
                    geometry: this.geometry
                }),
                this.pictures.forEach((t=>{
                    t.setParent(this.grid)
                }
                )),
                this.prevDrag = new v.S,
                this.deltaDrag = new v.S,
                this.currentDrag = new v.S,
                this.downStart = new v.S,
                this.prevDragPx = new v.S,
                this.currentDragPx = new v.S,
                this.deltaDragPx = new v.S,
                this.pointer = new m.A,
                this.target = new m.A,
                this.lookTarget = new m.A(0,0,5),
                this.lookBuffer = new d.w,
                this.lookBuffer.setParent(this.context.scene),
                this.sliderZ = this._computeSliderZ(),
                this.sliderGap = (0,
                u.Z)(this.context.camera.position.z - this.sliderZ, this.context.camera) * (this.isMob ? 16 : 32),
                this._createLayout(),
                this.focusedPicture = null,
                this.pictures.forEach((t=>{
                    t.on("click", (e=>{
                        t.visible && this._handlePictureClick(e)
                    }
                    )),
                    t.on("pointerdown", (()=>{
                        t.visible && (this.grabbedPicture = t)
                    }
                    )),
                    t.on("pointerenter", (()=>{
                        t.visible && (this._setCursor("pointer"),
                        this.isMob || (this._updateFocus(t),
                        this.mode === N && this.pictures.forEach((e=>{
                            e !== t && e.animateOpacity(.3, this.animationParams.opacity)
                        }
                        ))))
                    }
                    )),
                    t.on("pointerleave", (()=>{
                        t.visible && (this._setCursor("initial"),
                        this.isMob || (this._updateFocus(null),
                        this.mode === N && this.pictures.forEach((t=>{
                            t.animateOpacity(1, {
                                type: "tween",
                                duration: .3
                            })
                        }
                        ))))
                    }
                    ))
                }
                )),
                this._constraintsKeeper = new Z.m({
                    constraints: this.cache.get("constraints"),
                    pictures: this.pictures
                }),
                this.shouldCheckConstraints = !1,
                this.shouldUpdateOpacity = !1,
                this.shouldLookAtPointer = !1,
                this._loadPictures()
            }
        }
        function K() {
            const t = ()=>{
                this.wheelControls = new D.z,
                this.wheelControls.on("wheel", this._onMouseWheel),
                this.context.canvas.addEventListener("wheel", this.wheelControls.onWheel, {
                    passive: !0
                }),
                window.addEventListener("resize", this._onResize),
                this.canvas.addEventListener("pointermove", this._onMouseMove),
                this.canvas.addEventListener("pointerdown", this._onPointerDown),
                this.canvas.addEventListener("pointerup", this._onPointerUp),
                window.addEventListener("pointerout", this._onPointerUp),
                window.addEventListener("keydown", this._onKeyDown),
                this.canvas.addEventListener("pointerout", this._onPointerOut),
                this.initialized = !0
            }
            ;
            this.mode === H ? (0,
            c._)(this, F, X).call(this, t) : (0,
            c._)(this, q, $).call(this, t)
        }
        function X(t) {
            this.pictures.forEach((t=>{
                t.texture.update()
            }
            )),
            this.context.render();
            let e = 0;
            const i = ()=>{
                e++ < this.pictures.length - 1 || (this.shouldLookAtPointer = !0)
            }
              , s = ()=>{
                this.pictures.forEach((t=>{
                    this.context.raycaster.add(t)
                }
                )),
                this.context.raycaster.add(this.viewportPlane),
                "function" === typeof t && t()
            }
              , h = this.getActivePicture();
            (0,
            y.n)(h.position, {
                z: this.sliderZ
            }),
            this.pictures.forEach((t=>{
                const e = h === t
                  , r = this._computeOpacity(t)
                  , c = e ? .025 : .2;
                t.animateOpacity(r, {
                    ...this.animationParams.opacity,
                    duration: .6,
                    delay: c,
                    onComplete: i
                }),
                e && (0,
                y.l)(t.position, {
                    z: 0
                }, {
                    ...this.animationParams.zoom,
                    onComplete: s
                })
            }
            ))
        }
        function $(t) {
            this._setMode(O),
            this.pictures.forEach((t=>{
                t.texture.update(),
                this.context.raycaster.add(t)
            }
            )),
            this.context.raycaster.add(this.viewportPlane),
            this.context.render();
            let e = !1;
            const i = ()=>{
                e || (e = !0,
                this.sliderLayout.forEach((t=>{
                    t.animateOpacity(1, this.animationParams.opacity),
                    this._setMode(N)
                }
                )),
                "function" === typeof t && t())
            }
            ;
            this.sliderLayout.forEach(((t,e)=>{
                t.opacity = 0;
                [0, 1, this.sliderLayout.length - 1].includes(e) && (t.animateOpacity(1, this.animationParams.opacity),
                (0,
                y.l)(t.position, {
                    z: this.sliderZ
                }, {
                    ...this.animationParams.zoom,
                    onComplete: i
                }))
            }
            ))
        }
        class J extends g.Z {
            get activeId() {
                return this._artworks.activePicture.imageId
            }
            get activeIndex() {
                return this._artworks.activeIndex
            }
            get mode() {
                return this._artworks.mode
            }
            get slides() {
                return this._artworks.sliderLayout
            }
            init() {
                this._artworks.on("start", this._onStart),
                this._artworks.on("slideChanged", this._onSlideChanged),
                this._artworks.on("modeChanged", this._onModeChanged)
            }
            destroy() {
                this._artworks.off("slideChanged", this._onSlideChanged),
                this._artworks.off("modeChanged", this._onModeChanged),
                this._artworks.destroy()
            }
            next() {
                this._artworks.nextSlide()
            }
            prev() {
                this._artworks.prevSlide()
            }
            slideTo(t) {
                this._artworks.slideTo(t)
            }
            toGrid() {
                this._artworks._sliderToGrid()
            }
            showInfo() {
                this._artworks._toInfo()
            }
            closeInfo() {
                this._artworks._toSlider()
            }
            constructor(t) {
                super(),
                this._onSlideChanged = ()=>{
                    this.emit("slideChanged", this)
                }
                ,
                this._onModeChanged = ()=>{
                    this.emit("modeChanged", this)
                }
                ,
                this._onStart = ()=>{
                    this.emit("start", this)
                }
                ,
                this._artworks = t,
                this.init()
            }
        }
        var Q = i(4751)
          , tt = i(3782)
          , et = i(5241)
          , it = i(5005)
          , st = i(2177)
          , ht = i(9582)
          , rt = i.n(ht)
          , ct = i(131);
        function nt(t) {
            let {url: e, title: i} = t;
            return (0,
            s.jsx)("a", {
                href: e,
                className: rt().downloadBtn,
                title: i,
                target: "_blank",
                children: (0,
                s.jsx)(ct.Z, {
                    icon: "download.svg"
                })
            })
        }
        var ot = i(1688)
          , at = i(6081)
          , lt = i.n(at);
        function vt(t) {
            let {text: e, icon: i, hint: h, label: r, isActive: c=!1, onClick: n, disabled: o=!1} = t;
            return (0,
            s.jsxs)("button", {
                className: (0,
                Q.y)(lt().btn, c && lt().isActive),
                onClick: n,
                disabled: o,
                "aria-label": r,
                children: [h && (0,
                s.jsx)("span", {
                    className: lt().hint,
                    children: h
                }), e && (0,
                s.jsx)("span", {
                    className: lt().text,
                    children: e
                }), i && (0,
                s.jsx)(ct.Z, {
                    icon: i,
                    disabled: o
                })]
            })
        }
        var dt = i(5097)
          , mt = i(9993)
          , ut = i(5503)
          , xt = i(1997);
        const pt = (0,
        r.memo)((t=>{
            let {className: e} = t;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("svg", {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "682",
                    height: "902",
                    viewBox: "0 0 682 902",
                    fill: "none",
                    children: (0,
                    s.jsxs)("g", {
                        className: xt.path,
                        fillRule: "evenodd",
                        stroke: "#fff",
                        children: [(0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "860.67",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "855.32",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "621.38",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "626.73",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "632.09",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "637.44",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "642.79",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "648.15",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "653.5",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "658.86",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "599.96",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "605.32",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "599.96",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "605.32",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "610.67",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "616.02",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "610.67",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "616.02",
                            cy: "866.02",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "599.96",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "605.32",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "599.96",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "605.32",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "610.67",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "616.02",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "610.67",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "616.02",
                            cy: "849.96",
                            r: "1.64"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "594.61",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "594.61",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "599.96",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "605.32",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "599.96",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "605.32",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "610.67",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "616.02",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "610.67",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "576.61",
                            cy: "866.11",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "581.96",
                            cy: "866.11",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "587.32",
                            cy: "866.11",
                            r: "1.11"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "616.02",
                            cy: "844.61",
                            r: "1.11"
                        }), (0,
                        s.jsx)("path", {
                            d: "M35.12 24.5l-14-7h5.76l14 7h-5.76zm-15.62 0v-2.7l5.38 2.7H19.5zm23-7v2.7l-5.38-2.7h5.38zM19 836h4m-4-24h4m-4-41h4m-4-24h4m-4-31h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-25h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-24h4m-4-33h4m-4-24h4m-4-39h4m-4-22h4m-4-24h4"
                        }), (0,
                        s.jsx)("path", {
                            strokeWidth: "2",
                            d: "M27 451h8"
                        }), (0,
                        s.jsx)("path", {
                            d: "M35.12 884.5l-14-7h5.76l14 7h-5.76zm-15.62 0v-2.7l5.38 2.7H19.5zm23-7v2.7l-5.38-2.7h5.38z"
                        }), (0,
                        s.jsx)("path", {
                            strokeWidth: "0.25",
                            d: "M94.13 711.13h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm-27-9h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm-27-9h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 18h7.75v7.75h-7.75zm0-9h7.75v7.75h-7.75zm0-9h7.75v7.75h-7.75zm-36-9h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm-18-35h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75zm-9-10h7.75v7.75h-7.75zm9 0h7.75v7.75h-7.75z"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "86.5",
                            cy: "789.5",
                            r: "4"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "86.5",
                            cy: "111.5",
                            r: "4"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "595.5",
                            cy: "111.5",
                            r: "4"
                        }), (0,
                        s.jsx)("path", {
                            strokeWidth: "2",
                            d: "M650 30h19m-10 8V18m-7 7h15m-12-4h-4m0-2h-4m15 2h4m0-2h4m-15 23v6m-2 0v6m-2 0v3m12-15v6m2 0v6m2 0v3"
                        }), (0,
                        s.jsx)("path", {
                            d: "M617.5 99.5c.17-1 .2-3.6-1-6-1.5-3-8-9.5-4.5-9s3.5 6.5 5.5 5.5 17.5-7 16-9-14.5 7.5-16 8.5c0 0 7-4.5 7.5-10s.5-10.5-1.5-7.5-6 3-6-.5 3-5 5-4-6 1.5-6.5-3.5 1.5-7 5-5.5 4.5 5 3.5 5.5-1-6 2.5-5 5 5.5 2 6.5c-2.4.8-3.67 1.67-4 2 5.3-3 8.07-1.7 6.47 1.5-2 4-4.97 3-6.47 1.5s5.5 9.5 10-12m-24.5 5s-3-5.5 0-9.5 8-2.5 9.5-4-8.5-2.5-9.5-1 3-3 3-7-5.5-6.5-5-2.5 4 7 8 4 9-10 9-12.5-3.5-4.5-3.5-.5 1.5 10 5 8.5 9.5-7.5 5.5-8-9.5 1.5-12.5 5-7-2-4.5-5.5 4-3.5 3-6-2.5-8 1.5-7.5 9 1.5 7 5.5-5 .5-3-2 11-1 9 6"
                        }), (0,
                        s.jsx)("path", {
                            strokeOpacity: "0.25",
                            d: "M595.5 0v111m0 65v-65m0 65v95m0 1v89m0 1v89m0 1v89m0 1v89m0 1v95m-.5.5h-82m129 0h-46m-50 62h-33m-1-62h-86m1 0h-86m1 0h-86m0 0h-86m0 0H85m-85 0h85M512.5 0v111m0 65v-65m0 65v26m-86-202v111m0 65v-65m0 65v26m-85-202v111m0 65v-65m0 65v26m-85-202v111m0 65v-65m0 65v26M595 111.5h-82m165 0h-82m-84 0h-86m1 0h-86m1 0h-86m0 0h-86m0 0H85m-85 0h85M170.5 0v111m0 65v-65m0 65v26M86.5 0v111m0 65v-65m0 65v95m0 1v89m0 1v89m0 1v89m0 1v89m0 1v95m0 1v61m0 1v112m84 0V791m0-65v65m0-65v-26m86 202V791m0-65v65m0-65v-26m85 202V791m0-65v65m0-65v-26m85 202V791m0-65v65m0-65v-26m86 202V791m0-65v65m83-64v36m-83-37v-26M130 451.5H70m525-276h-82m165 0h-82m-84 0h-86m1 0h-86m1 0h-86m0 0h-86m0 0H85m-85 0h85m427 614h-86m1 0h-86m1 0h-86m0 0h-86m0 0H85m-85 0h85m45-248H70m612 0H552m-422-180H70m612 0H552m-422-90H0m682 0H552m130 180H552m-422 180H0m682 0H552"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "44.5",
                            cy: "450.5",
                            r: "3"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "53.5",
                            cy: "450.5",
                            r: "3"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "53.5",
                            cy: "426.5",
                            r: "3"
                        }), (0,
                        s.jsx)("path", {
                            d: "M45 423v7m3.5-.5h-7M45 425h-2"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "53.5",
                            cy: "378.5",
                            r: "3"
                        }), (0,
                        s.jsx)("path", {
                            d: "M47 375v7m1.5-.5h-7M48 379h-4m4.5-3.5h-7"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "53.5",
                            cy: "354.5",
                            r: "3"
                        }), (0,
                        s.jsx)("path", {
                            d: "M47 351v7m-5-7v5m6-1h-6"
                        }), (0,
                        s.jsx)("circle", {
                            cx: "53.5",
                            cy: "403.5",
                            r: "3"
                        }), (0,
                        s.jsx)("path", {
                            d: "M42.5 401H48v2l-6 2.5v1h6.5"
                        })]
                    })
                }), (0,
                s.jsxs)("svg", {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "682",
                    height: "902",
                    viewBox: "0 0 682 902",
                    fill: "none",
                    children: [(0,
                    s.jsx)("path", {
                        fill: "#000",
                        d: "M123.72 17H49.03v5.4h74.7V17zM85.6 30.08H49.03v5.41H85.6v-5.4zm0 13.01H49.03v5.4H85.6v-5.4zm0 13H49.03v5.41H85.6v-5.4zm0 13.01H49.03v5.4H85.6v-5.4zm70.38-32.51H123.7v5.4h32.27v-5.4zm0 13H123.7V55h32.27v-5.4zm0 13H123.7V68h32.27v-5.4zm0 13.01H123.7V81h32.27v-5.4z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#000",
                        d: "M137.48 37.66h-32.25v3.23h32.25v-3.23zm0 13h-32.25v3.24h32.25v-3.24zm0 13h-32.25v3.25h32.25v-3.24zm0 13.01h-32.25v3.24h32.25v-3.24zM156 101.82h-15.22v3.24H156v-3.24zM49 85.6h18.49v-3.23H49v3.23zm107 2.98H85.6v5.4H156v-5.4z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#000",
                        d: "M554 773h8v8h-8zm0 104h8v8h-8zm104 0h8v8h-8zm0-104h8v8h-8z",
                        opacity: "0.2"
                    }), (0,
                    s.jsx)("path", {
                        stroke: "#000",
                        d: "M32 721v-81m0 143v-50m0 135v-74m0-337v83m0 86v-86m-1-262v167m0-325v144m0-234v72"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#000",
                        d: "M58.5 120l1.32 17.18L77 138.5l-17.18 1.32L58.5 157l-1.32-17.18L40 138.5l17.18-1.32L58.5 120z",
                        style: {
                            mixBlendMode: "difference"
                        }
                    }), (0,
                    s.jsx)("path", {
                        stroke: "#000",
                        d: "M66 83.5h19m44 20h19m-62-25h38m-38-6h38m-38-7h38m-38-6h38m-38-7h38m-38-6h38m-38-7h38m-38-7h38"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#000",
                        fillOpacity: "0.1",
                        d: "M554 773h112v112H554z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M616.46 746.33h-.3v-.36h.3c.6 0 1.03-.15 1.27-.46.25-.3.38-.7.38-1.19 0-.5-.1-.9-.32-1.16a1.1 1.1 0 00-.9-.4c-.5 0-.86.19-1.06.55-.19.36-.25.88-.18 1.55l-.95-.17a2.1 2.1 0 01.1-1.11c.14-.35.38-.63.72-.84.35-.22.81-.33 1.38-.33.54 0 .98.1 1.3.28.34.17.59.4.74.7.16.28.23.6.23.93 0 .52-.15.92-.47 1.22-.3.3-.75.5-1.34.61.62.1 1.1.3 1.43.64.34.33.5.77.5 1.34 0 .36-.08.69-.26.99-.17.3-.43.54-.79.73-.35.17-.81.26-1.38.26-.53 0-1-.13-1.4-.37-.4-.25-.68-.7-.85-1.35l.7-.2c.05.4.15.72.3.95.15.23.33.4.54.49.21.08.44.13.67.13.94 0 1.4-.55 1.4-1.63 0-.53-.12-.96-.39-1.3-.26-.34-.72-.5-1.37-.5zm8.83 1.57c0 .45-.1.84-.3 1.18-.19.33-.47.58-.82.77-.35.17-.76.26-1.23.26-.8 0-1.42-.3-1.86-.88a4.32 4.32 0 01-.65-2.58v-.7c0-1.2.23-2.1.67-2.67a2.16 2.16 0 011.8-.87c.5 0 .92.1 1.26.3.35.2.61.45.78.78.18.32.24.67.2 1.05l-.95.17c.06-.63-.02-1.11-.24-1.44-.22-.34-.57-.5-1.05-.5-.27 0-.5.06-.73.2-.21.13-.38.38-.5.75s-.2.9-.2 1.58v1.07c.22-.27.47-.47.74-.58.3-.13.6-.19.92-.19.65 0 1.17.2 1.57.6.4.39.6.92.6 1.59v.1zm-3.81-.6c0 .62.05 1.1.16 1.47.12.36.29.61.5.77.24.15.5.22.82.22.4 0 .71-.14.95-.4.24-.29.36-.76.36-1.44v-.1c0-.57-.1-1.01-.32-1.33-.21-.32-.54-.48-.99-.48-.26 0-.53.07-.8.2-.26.14-.5.38-.68.71v.37zm5.62 2.81a.61.61 0 01-.45-.18.63.63 0 01-.16-.45.6.6 0 01.16-.44.61.61 0 01.45-.17c.2 0 .35.06.46.17.12.11.18.26.18.44a.6.6 0 01-.18.45.63.63 0 01-.46.18zm6.18-2.29h.29V750h-4.41v-.58c0-.5.08-.93.25-1.27.17-.33.39-.62.65-.86a7 7 0 01.87-.66l.77-.53a2.32 2.32 0 00.61-.68c.17-.27.26-.6.26-1 0-.56-.11-.98-.33-1.25-.21-.27-.52-.4-.9-.4-.51 0-.86.18-1.06.54-.19.36-.25.88-.18 1.55l-.95-.17a2.02 2.02 0 01.08-1.11c.14-.35.39-.63.74-.84.35-.22.81-.33 1.38-.33.54 0 .98.1 1.32.29.33.19.58.44.73.74.16.31.23.64.23 1 0 .4-.07.73-.23 1a2.04 2.04 0 01-.6.68 5.42 5.42 0 01-.82.47c-.29.13-.57.27-.85.42a4.01 4.01 0 00-.75.5 2.46 2.46 0 00-.55.69 2.5 2.5 0 00-.25.97h2.83c.26 0 .41-.01.47-.04.05-.04.1-.12.13-.24l.27-1.07zm6.48-1.91v.7c0 .7-.1 1.31-.3 1.84-.2.53-.49.94-.87 1.23-.38.29-.84.43-1.39.43-.55 0-1.01-.14-1.4-.43-.37-.3-.65-.7-.85-1.23-.2-.53-.3-1.15-.3-1.85v-.7c0-.7.1-1.3.3-1.83.2-.53.48-.93.86-1.22.38-.3.84-.44 1.4-.44.54 0 1 .15 1.38.44.38.29.67.7.87 1.22.2.52.3 1.13.3 1.84zm-1.07-.77c0-.85-.13-1.46-.39-1.83a1.26 1.26 0 00-1.1-.55c-.47 0-.84.19-1.1.55-.25.37-.38.98-.38 1.83v2.23c0 .86.13 1.47.38 1.84.26.36.63.55 1.1.55.48 0 .85-.19 1.1-.55.26-.37.39-.98.39-1.84v-2.23zm4.93 3.97v-1.05h-3.18v-.35a8.5 8.5 0 002.19-3.63c.15-.47.3-.99.42-1.56h1.16a9.38 9.38 0 01-1.28 2.78 17.25 17.25 0 01-2.03 2.41h2.72V746l.96-.16v1.88h.84v.35h-.84v1.05c0 .26 0 .4.03.45.02.04.1.07.21.09l.6.06v.29h-2.87v-.29l.83-.06c.12 0 .19-.03.2-.08.03-.05.04-.2.04-.46zm7.52-1c0 .58-.2 1.06-.59 1.44-.38.37-.97.56-1.74.56-.55 0-1-.08-1.36-.25-.36-.18-.62-.4-.8-.68a1.64 1.64 0 01-.26-.9c0-.4.13-.77.4-1.1a3 3 0 011.18-.86 3.16 3.16 0 01-1.04-.77c-.26-.31-.39-.7-.39-1.17 0-.36.08-.69.25-.98.17-.3.42-.54.74-.71.33-.19.73-.28 1.2-.28s.87.08 1.2.24c.34.16.6.38.77.66.18.27.27.57.27.9 0 .37-.12.7-.36.97s-.62.53-1.13.74c.54.23.95.51 1.23.86.28.33.43.78.43 1.33zm-2.47-2.53l.47.2c.35-.2.6-.42.72-.67.13-.26.2-.56.2-.9 0-.48-.12-.84-.36-1.08s-.57-.37-.98-.37c-.4 0-.72.12-.98.34-.26.22-.39.55-.39.98 0 .37.12.67.34.9.23.21.56.41.98.6zm-1.37 2.68c0 .47.13.84.38 1.1.26.27.63.4 1.13.4.48 0 .85-.12 1.12-.35.26-.25.4-.6.4-1.04 0-.39-.11-.7-.33-.94-.2-.25-.55-.48-1.03-.69l-.65-.27a1.74 1.74 0 00-.77.74 2.2 2.2 0 00-.25 1.05zm6.47-2.29c-.33 0-.63-.07-.89-.23a1.72 1.72 0 01-.62-.63 1.9 1.9 0 01-.22-.92 1.72 1.72 0 01.84-1.55c.26-.15.56-.23.9-.23a1.68 1.68 0 011.49.87c.15.26.23.57.23.91 0 .34-.08.64-.23.91a1.6 1.6 0 01-.62.64c-.26.16-.55.23-.88.23zm0-.36c.39 0 .7-.13.95-.4.25-.26.37-.6.37-1.02 0-.4-.12-.75-.37-1.01s-.56-.4-.95-.4c-.38 0-.7.14-.95.4-.24.26-.36.6-.36 1.01 0 .42.12.76.36 1.02.25.27.57.4.95.4zm9.7-2.8v-.29h2.1v.3l-.6.05c-.13.02-.2.05-.22.1-.02.04-.03.2-.03.44V750h-.54l-4-6.75v5.86c0 .25 0 .4.03.45.02.04.1.07.2.09l.61.06v.29h-2.1v-.29l.6-.06c.12-.02.2-.05.22-.09.02-.05.03-.2.03-.45v-5.7c0-.25-.01-.4-.03-.44-.03-.05-.1-.08-.21-.1l-.6-.05v-.3h1.9l3.48 5.9v-5c0-.26 0-.4-.03-.45-.02-.05-.1-.08-.2-.1l-.61-.05zm-54.33 13.93l1.9-1.22h.8v6.57c0 .25 0 .4.03.45.02.04.1.07.2.09l1.12.08v.29h-3.82v-.29l1.27-.08c.11-.02.18-.05.2-.1.03-.04.04-.2.04-.44v-6.02l-1.54.98-.2-.3zm7.22 2.59h-.3v-.36h.3c.61 0 1.04-.15 1.28-.46.25-.3.37-.7.37-1.19 0-.5-.1-.9-.32-1.16a1.1 1.1 0 00-.9-.4c-.5 0-.86.19-1.06.55-.19.36-.24.88-.17 1.55l-.96-.17a2.1 2.1 0 01.1-1.11c.14-.35.38-.63.73-.84.35-.22.8-.33 1.37-.33.54 0 .98.1 1.31.28.34.17.58.4.74.7.15.28.23.6.23.93 0 .52-.16.92-.47 1.22-.31.3-.76.5-1.35.61.63.1 1.1.3 1.43.64.34.33.51.77.51 1.34 0 .36-.09.69-.26.99-.17.3-.44.54-.8.73-.35.17-.8.26-1.37.26-.54 0-1-.13-1.4-.37-.4-.25-.69-.7-.86-1.35l.7-.2c.06.4.16.72.3.95.16.23.34.4.54.49.22.08.44.13.67.13.94 0 1.41-.55 1.41-1.63 0-.53-.13-.96-.4-1.3-.26-.34-.72-.5-1.37-.5zm8.73 1.78c0 .58-.2 1.06-.58 1.44-.4.37-.98.56-1.75.56-.55 0-1-.08-1.36-.25a1.9 1.9 0 01-.8-.68 1.64 1.64 0 01-.26-.9c0-.4.13-.77.4-1.1a3 3 0 011.18-.86 3.14 3.14 0 01-1.04-.77c-.26-.31-.39-.7-.39-1.17 0-.36.09-.69.26-.98.16-.3.4-.54.73-.71.33-.19.73-.28 1.2-.28s.87.08 1.2.24c.34.16.6.38.77.66.18.27.28.57.28.9 0 .37-.13.7-.37.97s-.62.53-1.13.74c.54.23.95.51 1.23.86.29.33.43.78.43 1.33zm-2.46-2.53l.46.2c.36-.2.6-.42.72-.67.14-.26.2-.56.2-.9 0-.48-.12-.84-.36-1.08s-.57-.37-.98-.37c-.39 0-.72.12-.98.34-.26.22-.38.55-.38.98 0 .37.1.67.34.9.22.21.55.41.98.6zm-1.38 2.68c0 .47.13.84.39 1.1.25.27.63.4 1.12.4.48 0 .86-.12 1.12-.35.26-.25.4-.6.4-1.04 0-.39-.11-.7-.32-.94-.2-.25-.55-.48-1.04-.69l-.65-.27a1.74 1.74 0 00-.77.74 2.2 2.2 0 00-.25 1.05zm5.76 1.85a.61.61 0 01-.45-.18.63.63 0 01-.17-.45.6.6 0 01.17-.44.61.61 0 01.45-.17c.19 0 .34.06.46.17.12.11.18.26.18.44a.61.61 0 01-.18.45.63.63 0 01-.46.18zm6.18-2.29h.28V763h-4.4v-.58c0-.5.08-.93.25-1.27.16-.33.38-.62.64-.86.28-.24.57-.46.87-.66.27-.17.52-.35.77-.53.25-.19.46-.41.62-.68.17-.27.25-.6.25-1 0-.56-.1-.98-.33-1.25-.21-.27-.51-.4-.9-.4-.5 0-.86.18-1.06.54-.19.36-.24.88-.17 1.55l-.96-.17a2.02 2.02 0 01.09-1.11 1.72 1.72 0 01.74-.84c.35-.22.8-.33 1.37-.33.54 0 .98.1 1.32.29.34.19.58.44.74.74.15.31.23.64.23 1 0 .4-.08.73-.23 1a2.05 2.05 0 01-.6.68 5.47 5.47 0 01-.82.47c-.3.13-.58.27-.86.42a3.98 3.98 0 00-.75.5 2.46 2.46 0 00-.55.69c-.14.26-.22.59-.25.97h2.84c.26 0 .41-.01.46-.04.06-.04.1-.12.13-.24l.28-1.07zm5.52-6.2h.29v1.75h-3.39l-.13 2.35c.21-.15.44-.26.7-.33.25-.07.51-.1.79-.1.72 0 1.3.22 1.72.66.43.44.64 1.03.64 1.77 0 .42-.08.81-.24 1.18a2 2 0 01-.78.88c-.35.22-.82.33-1.39.33-.5 0-.94-.12-1.32-.37-.37-.26-.64-.7-.81-1.35l.69-.2c.09.6.26 1.02.52 1.24.25.22.54.33.87.33.45 0 .8-.17 1.03-.5.24-.33.36-.85.36-1.54 0-.6-.1-1.1-.32-1.48-.2-.4-.57-.58-1.1-.58a2.27 2.27 0 00-.77.14 2.29 2.29 0 00-.78.47l-.22-.1.21-3.65h2.73c.26 0 .42-.01.47-.03.06-.03.1-.12.12-.26l.11-.61zm6.04 6.2h.28V763h-4.4v-.58c0-.5.08-.93.24-1.27.17-.33.39-.62.65-.86a7 7 0 01.87-.66c.27-.17.52-.35.77-.53a2.32 2.32 0 00.62-.68c.17-.27.25-.6.25-1 0-.56-.1-.98-.33-1.25-.21-.27-.51-.4-.9-.4-.5 0-.86.18-1.06.54-.19.36-.25.88-.17 1.55l-.96-.17a2.02 2.02 0 01.09-1.11c.14-.35.38-.63.73-.84.36-.22.82-.33 1.38-.33.54 0 .98.1 1.32.29.34.19.58.44.74.74.15.31.23.64.23 1 0 .4-.08.73-.23 1a2.04 2.04 0 01-.6.68 5.42 5.42 0 01-.82.47c-.3.13-.58.27-.86.42a4.01 4.01 0 00-.75.5 2.46 2.46 0 00-.55.69 2.5 2.5 0 00-.25.97h2.84c.25 0 .4-.01.46-.04.06-.04.1-.12.13-.24l.28-1.07zm6.3-1.25c0 1.2-.25 2.1-.73 2.68-.48.57-1.11.86-1.9.86-.5 0-.95-.13-1.34-.37-.38-.25-.65-.7-.82-1.35l.68-.2c.06.4.16.72.3.95.14.23.32.4.51.49a1.6 1.6 0 001.42-.07c.25-.14.45-.4.6-.76.15-.37.23-.9.23-1.58v-.87a1.97 1.97 0 01-.75.58c-.28.13-.58.19-.9.19a2.32 2.32 0 01-1.15-.28 1.98 1.98 0 01-.76-.76 2.42 2.42 0 01-.26-1.15v-.29c0-.45.1-.84.3-1.17.2-.34.47-.6.82-.79.35-.18.76-.27 1.23-.27.81 0 1.43.3 1.86.88.44.59.65 1.45.65 2.59v.69zm-3.85-1.67c0 .55.11 1 .32 1.33.21.32.54.48 1 .48.26 0 .53-.07.8-.2.27-.15.5-.39.68-.72v-.56c0-.63-.06-1.12-.18-1.48a1.34 1.34 0 00-.5-.76c-.21-.15-.49-.23-.8-.23-.4 0-.72.14-.96.42-.24.27-.36.74-.36 1.42v.3zm6.48 1.07c-.33 0-.63-.07-.9-.23a1.72 1.72 0 01-.61-.64 1.89 1.89 0 01-.22-.9 1.72 1.72 0 01.84-1.55c.26-.16.56-.24.89-.24a1.68 1.68 0 011.5.87c.15.26.22.57.22.91 0 .34-.07.64-.23.91a1.62 1.62 0 01-.61.64c-.26.16-.55.23-.88.23zm0-.36c.38 0 .7-.13.94-.4.25-.26.38-.6.38-1.02 0-.4-.13-.75-.38-1.01-.24-.26-.56-.4-.94-.4-.39 0-.7.14-.95.4-.24.26-.36.6-.36 1.01 0 .42.12.76.36 1.02.25.27.56.4.95.4zm11.45 2.6h.29V763h-5.27v-.29l.6-.06c.12-.02.19-.05.21-.09.02-.04.03-.2.03-.45v-5.7c0-.26 0-.4-.03-.45-.02-.04-.1-.07-.2-.09l-.61-.05v-.3h5.12v1.8H665l-.32-1.16a.52.52 0 00-.08-.19c-.02-.04-.07-.07-.14-.08a2.14 2.14 0 00-.38-.02h-2.13v3.18h1.47l.38-.01c.07-.01.12-.04.14-.08a.66.66 0 00.08-.2l.2-.82h.3v2.57h-.3l-.2-.82a.52.52 0 00-.08-.19c-.02-.04-.07-.07-.14-.08a2.14 2.14 0 00-.38-.02h-1.47v3.25h2.27l.37-.01c.07-.02.12-.04.14-.08a.66.66 0 00.08-.2l.32-1.15zM642 708h4v4h-4zm12 0h4v4h-4z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M642 708h4v4h-4zm0 0h40v-4h-40zm4-4h32v-4h-32zm4-4h24v-4h-24zm4-4h16v-4h-16zm0 12h4v4h-4zm12 0h4v4h-4z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M660 688h4v40h-4zm-4 40h4v4h-4zm-4-4h4v4h-4zm26-16h4v4h-4zm-69 87.97h-4.8v-.99h4.8v.99zm-58 5.8h.99v.98H551v-.98zm26.09-13.5h1.9v-1.98h-.89v-.93h.9v-1.98h1v2.9h.99v.98h-.97v2.9h2.87v-2.9h.99-.01v.99h1.92v-.01.93h-1.88v1.98h.9l-.01-.01v.92h9.68v1h-9.66v.98h-1.91v-.95h-1v.95H581v-.97h-1v-.99h-.98v.01-.92h-.93v-1.98h-1v-.93z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M566.5 794.98v-1.9h4.79v-.98h2.9v.95h1.92v-1.88h.99v.92h1.93v2.88h-.93v.98h-.99v-1.87h-.99v.88h-.92v-.9h-1.99v-.97h-.9v.96h.9v.92h.97v1h-1.9V795h-.96v.96h.97v.98h-2.9v.93h-1.96v-.91h.96v-.98h.99v-1h.91v-.9h-.9v.9h-2.9zm9.63 9.7v-2.9h.96v-4.82h1.9v-.99h1V795h1v2.88h-1v2.9h.01-.98v-.91h-.92v9.6h-.99v-4.8h-.99v.01h.01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M570.32 807.57v-2.9h.97v-1.9h1v-1.98h.91v-1.91h.98v-1h1V796h.91v2.87h-.9v1.92h-.98v1.96h-1v1.92h-.92v.98h-.98v1.92h-1v.01zm17.4-10.63h-.93v-.96h-.98v-1h-.98v-.94h-.01 6.76v.92h-2.87v1h-1v.98h.02zm-9.65 22.21h-.96v-8.66h.96v8.67zm9.65-28.98v-.97h6.76v.96h-6.77zm-17.41 17.4v1.9h-.92v1.98h-.98v.91h-.98v-1.88h.96v-1.92h.98v-.99h.95-.01zm2-21.28l-.02-3.47v-.36h-.97v-.98h1.89v2.88h1v.98h-.99v.95h-.93.01zm25.09 20.3h.98v.97h.93v.98h.97v.93h-1.88v-.9h-1.98v-1h-.01 1v-1l-.01.02zm-31.9 12.58v-4.81h.99v-.01 4.81h-1l.01.01zm15.5-14.52h-1v-3.87h1-.02l.01 3.88.01-.01zm-.02-28.99v3.87h-.96v-3.86h.97zm2.91 30.92h-1v-3.82h.99v3.82h.01zm-1.97-34.8v-3.82h.98v-.01 3.82h-.99v.01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M581.92 808.55H581v-3.9h.9v3.9h.02zm13.58-13.6v-.88h3.8v.89h-3.8zm-21.31-22.17h.97v2.86h-.97v-2.87.01zm-7.7 22.2v.98h-2.9v-.98h2.9zm-1.97 3.89v-.98h.97v-.91h.98v1.88h-1.96v.01zm19.37 15.48h-.97v-2.88h.96v2.89l.01-.01zm-10.68-44.48h.98v2.91h-.97v-2.92h-.01zm14.5 20.29v.98h-2.91v-.97h2.92v-.01zm-10.6-7.71h-.99v-2.9h.97v2.9h.01zm-7.73 6.73h2.88v.97h-2.87v-.98.01zm1.94 21.3h.95v-.98h.93v1.93h-1.88v-.96zm11.58-14.5h1.9v.98l.02-.01h-.93v.91h-.99v-1.9.01zm12.6-7.72h2.86v.9h-2.86v-.9zm-14.52 9.62h.93v2.9h-.93v-2.9z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M569.4 789.17h-2.9v-.9h2.88v.91h.01zm-.02-18.32h.93v2.9h-.92v-2.9zm11.6 12.53h.93l-.01-.02v2.91h-.92l.01.01v-2.9zm-20.28 6.77h-1.98v-.97h1.97v.98l.01-.01zm8.7-19.3h-.98v-1.95h.96v1.95h.01zm13.5-2.9V766h.97v1.95h-.98.01zm4.82 5.8v-1.97h.98v1.97h-.99zm-5.81 27.03h.98v1.99-.01h-.97v-1.98h-.01zm10.67-17.4v.98h-1.97v-.98h1.98zm-29 12.58v.99h-1.97v-.98h1.98v-.01zm23.19-21.3v1.98h-.97v.01-1.98h.98-.01zm-30.95 25.2v-.99h1.97v.98h-1.98zm44.48 4.8h-1.92v-.97h1.91v.98h.01zm-4.81 7.72h-.98v-1.92l-.01.01h.98v1.92-.01zm-9.68-11.62h-.97v-1.89h.96v1.9h.01zm-21.3-1.9v1h-1.9v-.99h1.9z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M562.6 791.15h-1.9v-1h-.01 1.9v1h.01zm23.2-14.5v1.9h-.97v-1.9h.98-.01zm-28.99 5.79h-1.9v-.95h1.9v.95zm31.9 22.22h-.99v-1.91h.98v1.92zm-20.32-28h1v1.9h-1v-1.9zm14.5 4.8v1.9h-1l.02.01v-1.91h.98zm23.2 26.12v.95h-1.88v-.94h1.88zm-40.72-24.42h.99v1.91h-.98v-1.92.01zm32.04 9.88v-.94h1.89v.94h-1.9zm-20.31-10.58h.97v1.89h-.97v-1.9zm-25.11 19.31v-1h1.9v1h-1.9zm29.92 6.79h.97v1.89h-.96v-1.9h-.01zm-17.4-21.3h-1.9v-.98h-.01 1.9v.99h.02zm-6.73-3.88h1.91v.99h.01-1.9v-1l-.02.01zm32.84-14.5v-1.91h.98v1.9h-.99v.01zm-30.92 43.5v-1.9h.97v1.9h-.97zm45.4-34.8v.97h-1.88v-.97h1.9-.01zm-51.2 29v.97H552v-.96h1.9v-.01zm5.8-22.21h1.92v.97h-1.92v-.98zm10.61-10.62h.97v1.9h-.96v-1.9h-.01zm14.5 12.53v-1.9h.97v1.9h-.97zm-16.41 15.48v1.9h-.97v-1.89h.98-.01zm5.8 5.81v-1.91h.99v-.01 1.91h-1l.01.01zm11.61 10.6h-1v-1.9l-.01.01h1v1.9l.01-.01zm1.89-37.7v1.98h-.92.01v-1.98h.92-.01zm-5.79-8.7v1.96h-.9v-1.95h.9zm1.97 34.81h.91v1.95h-.9v-1.95zm11.6 0h-1.95v-.92h1.96v-.01.94-.01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M583.88 814.36h.92v1.92h-.91v-1.93zm-22.27-17.41v.9h-1.9v-.9h1.9zm39.66 8.72h1.91v.89h-1.9v-.9zm-38.68-14.52h1.92v.93h-1.9v-.93h-.02zm-6.78 8.7v.92h-1.93.01v-.91h1.93v-.01zm4.9.94v-.93h1.9v.92h-1.92l.01.01zm26.07 18.38h.91v1.9h-.9v-1.9zm-29.98-15.49v-.93h1.9v-.01.93h-1.9v.01zm35.79-20.3v-.9h1.89v.9h-1.9z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M559.7 801.77v-.98h1v.97h-1v.01zm5.8 17.4v.96h-.97v-.96h.98-.01zm8.7-29.99h.97v.97h-.96v-.97h-.01zm12.58-1.92v.98h-1 .01v-.97h1zm-10.68.02h.99v.99-.01h-.98v-.99.01h-.01zm-11.6-.01h.98v.96h-.96v-.97h-.01zm22.3 31.9h-.99v-1h.97v1h.01zm10.6-3.88h.97v.96h-.96v-.97h-.01zm-32.9-23.2h.98v.96h-.96v-.98l-.01.01zm-4.8 20.29v.98h-.99v.01-.99h1-.01zm43.51-.94h-.99v-.98.01h.99v.98-.01zm-37.83-28.29h-.97v-.96h.96v.97h.01zm5.92 3.13l1 .01v.96h-1v-.97zm23.2 24.18h-.97v-.96h.97v.97zm-27.09-34.79h.98v1-.01h-.97v-1 .01zm24.18 31.91h.98v.95h-.98v-.96.01zm-17.4-.02v.97h-.96v-.96h.97zm17.43-30.9v-.98h.94v.98h-.95zm-29.02 31.9v-.97h.97v.96h-.98.01zm20.3-12.6h-.97V795h.97v.97zm-14.5-12.56h1v.96l.01-.01h-1v-.96h-.01zm22.2 23.2h.99v.98h-.98v-1 .02h-.01zm9.7-1.93h.97v1l.01-.01h-.98v-1 .01zm-11.6 0h.98v.99-.01h-.98v-.99.01zm-17.4-27.09h.97v.97h-.96v-.97h-.01zm-4.83 28.07h-.95v-.96h.95v.96zm29.03-1h-.98v-.95h.97v.96l.01-.01zm-38.7-.97v.98h-.99v-.98h1-.01zm7.7-25.1h1v.97h-1v-.98.01zm6.82 20.3v-.98h.94v.97h-.95v.01zm26.08 3.87h-.96v-.96h.96v.97-.01zm-8.7-23.2v-.98h.99v.98h-1 .01zm-2.9 19.32v-.98h-.01.99v.98h-.99.01zm3.89 0h-.99v-1 .02h.99v-.01.99zm-30 2.9v.97h-1 .02v-.97h1-.01zm30.92-3.88h.99v.98h-.99v-1 .02zm6.79-17.41v.98h-.99v-.98h1-.01zm-13.52 0v.97h-1l.01.01v-.97h1v-.01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M570.33 799.87v-1h.99-.01v.99h-.99.01zm9.7-19.38h.94v.95h-.95v-.95zm14.47 20.3h.97v.96h-.96v-.97h-.01zm-2.9-1.92h.97v.98h-.97v-.99.01zm.99 2.9h-1v-.98h.99v.98zm-3.9-.97h1v.96l.01-.01h-1v-.96h-.01zm-1.89.95h-.99v-.99.01h.98v.99-.01h.01zm-18.4.02v-.99h.99v.98h-1l.01.01zm23.2-34.8V766h.97v.96h-.98l.01.01zm-17.4 22.2h-.96v-.9h.96v.91zm-7.71 25.19v-.97h.9v.96h-.9zm20.3-27.09v-.97h.9v.96h-.91v.01h.01zm.91 12.6h.99v.93-.01h-.98v-.93h-.01zm1-20.32v.92h-1v-.92h1zm-23.2 0h.97v.91h-.97v-.91zm36.7-.01h-.9v-.96h.9v.96zm-29.9-10.68h-.98v-.89h.97v.9h.01zm25.1 11.62v-.9h.97v.9h-.98.01zm2.88-.01h-.95v-.9h.95v.9zm-9.66 19.38h-.93v-.99.01h.93-.01v.99-.01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M586.78 798.87h.92v1-.01h-.91v-1 .01zm-19.36-16.42h-.91v-.97h.9v.98-.01zm20.3 20.3h-.92v-1h.91v1zm2.9 0h-.92v-1l-.01.01h.92v1-.01zm1.96-.98h.91v.96h-.9v-.97.01zm3.83-20.31v.97h-.9v-.96h.91v-.01zm-20.3-1.91h-.9v-.97h.9v.98-.01zm18.4 21.23h-.97v-.9h.96v.9zm-36.72-1.9v-.98h.9v.96h-.9v.01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M590.6 802.76h.98v.9h-.96v-.91h-.01zm6.8 0h.97v.93h.01-.98v-.94zm-12.59-16.49v.98h-.94v.01-.98h.95-.01zm3.9 11.6h-.98v-.93h-.01.98v.95-.01zm.98-19.3v-.99h.93-.01v.98h-.93v.01zm-33.88 26.1v.99h-.92.01v-.99h.92zm29-7.71h.98v.93h-.97v-.94h-.01zm-9.62 8.7v-.98h.94v.97h-.95.01zm-17.4-22.28h-.98v-.95.01h.97v.94h.01zm9.62-.93h.98v.94h-.97v-.94h-.01zm28.08 23.2v-1 .01h.92v1-.01h-.93zM580 783.39v-.9h.98v.9h.01-1 .01z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M553.9 806.59v-.92h1v-.01.92h-1zm9.68-29h.92v1-.02h-.91v-1 .01zm33.82 37.69h-.96v-.9h.96v.9zm-5.8-15.43l-.01.95v-.01h-.97v-.94h.98zm4.8 5.8h1v.94-.01h-1 .02v-.93h-.01zm8.72-28.07v-.9h.96v.9h-.97zm-10.61-.02v-.89h.96v.9h-.96zm-3.9.02v-.92h1v.92h-1zm-3.83 4.87v.9h-.96v-.9h.97z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M596.42 807.56h-.93v-.98h.93-.01v.99zm-26.1-22.22h-.92v-1 .02h.92v.98zm.98-7.76h-.97v-.91h.97v.91zm19.31 6.78v.97h-.9v-.96h.91-.01zm23.89 21.34v.99h1.97v-.98h-1.98.01zm-12.53-5.8v.97h1.9v-.96h-1.9z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M614.5 805.71v-.91h-1.9v.9h1.9v.01zm-4.81-2.9v.98h.98v-.98h-1 .02zm-4.8-.94h.88v-.96h-.89v.96z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M609.68 802.81v-.91h-.96v.9h.97l-.01.01zm-2.88-.01h.95v-.9h-.95v.9zm3.87.99v.97h.9v-.96h-.9v-.01zm-8.7-3.88V799H601v.9h.97v.01zm14.5 6.78v.97h.9v-.96h-.9v-.01zm19.5 8.3v-.98H634V814v.98h1.98v.01zm-7.57-3.24v-.97h-1.89v.97h1.9zM634 815v.91h1.9v-.9H634V815zm-13.31-6.15v-.98h-.99.01v.98h.99-.01zm4.8.94h-.89v.96h.9v-.96zm-4.79-.94v.9h.96v-.9h-.97zm2.87.01h-.94v.9h.94v-.9zm-3.87-.99v-.97h-.9v.96h.91v.01zm8.71 3.88v.9h.96v-.9h-.97.01zm5.5 2.22V813H633v.96h.91v.01zm-71.3-27.7h-.98v-.93h-.01.98v.94zm8.7 0h-.98v-.93h-.01.97v.94h.01zm30.92 8.69v-.89h.96v.89h-.96zm-27.04-8.68h-.98v-.94h.97v.94zm-12.6 22.27v.91h-.96v-.9h.98l-.01-.01zm18.4-32.88v-.97h.9v.96h-.9zm-13.57 0h-.91v-.97h.9v.97zm27.06 19.3h-.94v-.9h.94v.9zm7.74 15.5h-.91v-.97h.9v.97zm-29-40.61h-.92v-1 .01h.9v1l.02-.01zm17.4-.99v.97h-.91v-.96h.9zm-35.76 26.1h-.94v-.9h.94v.9zm33.84-23.19v-.9h.97v.9h-.97zm15.49 40.6h-.98v-.94h.97v.95-.01zm-29-26.1h.91v1h.01-.92v-1zm20.3 26.1h.9v.97h-.9v-.97zm8.7 0h.9v.97h-.9v-.97zm-45.48.98v.97h-.9v-.96h.9zm10.67-34.8h.91v.97h-.9v-.97zm20.3 27.1h.92v.93h-.91v-.94zm0-7.78v-.9h.93v.9h-.93zm-20.3 2.9v-.92h.95v.92h-.95zm14.51-20.3v-.9h.9v.9h-.91.01zm-25.17 8.7h-.91v-.91h.9v.91zm28.99-15.44v.92h-.94v.01-.92h.95-.01zm-7.71 9.64h1v2.9h-1v-2.9zm-7.7 12.58h-.98V795h.96v.97h.01zm.92-1.91h-.91v-.96h.9v.97-.01zm-3.83.93v-.9h.9v.9h-.9zm11.6 2.9v2.9h-1v-2.9h1zm15.42 9.7v-1h1v1h-1z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M596.42 806.59h-.94v-.94h.94v.94zm-6.74-8.71h.94v.99h-.94v-1z"
                    }), (0,
                    s.jsx)("path", {
                        fill: "#fff",
                        d: "M591.6 799.86h-1v-1h1v1zm-5.62-670.78c-.58 0-.91-.27-1.02-.8a2.38 2.38 0 01-.84.64 2.42 2.42 0 01-.91.19c-.52 0-.9-.14-1.14-.43a1.55 1.55 0 01-.36-1.03c0-.44.14-.78.44-1.03s.82-.38 1.55-.38h1.24v-.9c0-.58-.1-.98-.3-1.2-.2-.23-.47-.34-.82-.34-.22 0-.42.04-.6.13a.8.8 0 00-.38.48 2.4 2.4 0 00-.02 1l-.87-.13a1.73 1.73 0 01.13-.92c.13-.28.35-.5.64-.66.3-.17.67-.25 1.12-.25.54 0 .95.09 1.23.27.3.18.49.4.6.7.12.28.18.6.18.93v2.47c0 .38.04.61.12.7.08.1.18.15.28.15a.57.57 0 00.21-.04l.24-.17.2.28c-.1.1-.24.17-.4.24a1.28 1.28 0 01-.52.1zm-2.47-.43c.2 0 .43-.06.66-.17.24-.11.5-.34.77-.69v-1.2h-1.12c-.41 0-.71.09-.9.25-.19.17-.28.42-.28.76 0 .33.07.59.21.77.15.19.37.28.66.28zm-481.77-.94v.29h-2.6v-.29l.61-.06c.12-.02.19-.05.21-.09.02-.04.03-.2.03-.45v-2.74c0-.54-.08-.92-.26-1.14a.9.9 0 00-.75-.35c-.25 0-.52.08-.81.23-.3.14-.57.43-.83.86v3.14c0 .26.01.4.04.45.02.04.09.07.2.09l.61.06v.29h-2.6v-.29l.6-.06c.13-.02.2-.05.22-.09.02-.04.03-.2.03-.45v-6.36c0-.26 0-.4-.03-.45-.02-.04-.1-.07-.21-.09l-.6-.05v-.3h1.74v3.53c.26-.33.55-.57.88-.71.33-.16.66-.23.98-.23.54 0 .96.16 1.26.5.29.33.44.8.44 1.4v2.76c0 .26 0 .4.03.45.02.04.1.07.2.09l.61.06zm-2.66 639.45v-.3h1.75v7.25c0 .26.01.4.04.45.02.04.09.07.2.09l.61.06v.29h-2.6v-.29l.61-.06c.12-.02.19-.05.21-.09.02-.04.03-.2.03-.45v-6.36c0-.26 0-.4-.03-.45-.02-.04-.1-.07-.21-.09l-.6-.05z"
                    })]
                })]
            })
        }
        ));
        pt.displayName = "ArtworksHelper";
        var gt = i(1536)
          , yt = i(5972)
          , ft = i(7496)
          , zt = i(7683)
          , _t = i.n(zt)
          , wt = i(4725);
        function jt(t) {
            let {isVisible: e=!0, isCollapsed: i=!1, onBtnClick: h} = t;
            const c = (0,
            r.useContext)(ft.j);
            return (0,
            s.jsxs)("div", {
                className: (0,
                Q.y)(_t().root, e && _t().visible, i && _t().collapsed),
                children: [(0,
                s.jsxs)("div", {
                    className: (0,
                    Q.y)(_t().container),
                    children: [(0,
                    s.jsxs)("div", {
                        className: _t().welcome,
                        children: [(0,
                        s.jsx)("h2", {
                            className: _t().welcomeHeading,
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                wt._)(c.welcome_title, {
                                    wordCls: _t().word
                                })
                            }
                        }), (0,
                        s.jsx)("p", {
                            className: _t().welcomeText,
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                wt._)(c.welcome_text, {
                                    wordCls: _t().word,
                                    delay: 250
                                })
                            }
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: _t().hint,
                        children: [(0,
                        s.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                wt._)(c.nav_info, {
                                    wordCls: _t().word,
                                    delay: 850
                                })
                            }
                        }), (0,
                        s.jsx)("span", {
                            className: _t().hintIcon
                        })]
                    })]
                }), (0,
                s.jsx)("button", {
                    tabIndex: e && i ? 0 : -1,
                    className: _t().showBtn,
                    onClick: h
                })]
            })
        }
        var Pt = (0,
        r.memo)(jt);
        var bt = t=>{
            let {images: e} = t;
            const i = (0,
            r.useContext)(ft.j)
              , c = (0,
            r.useRef)(null)
              , n = (0,
            r.useRef)(null)
              , o = (0,
            r.useRef)(null)
              , [a,l] = (0,
            r.useState)(!0)
              , [v,d] = (0,
            r.useState)(e[0])
              , [m,u] = (0,
            r.useState)([])
              , [x,p] = (0,
            r.useState)(null)
              , [g,y] = (0,
            r.useState)(!1)
              , f = (0,
            r.useCallback)((()=>y(!1)), [])
              , z = x === N || x === T
              , _ = m.findIndex((t=>t.imageId === v.id))
              , w = (0,
            r.useCallback)((()=>{
                l(!1)
            }
            ), [])
              , j = (0,
            r.useCallback)((t=>{
                let {mode: e, slides: i} = t;
                var s;
                p(e),
                (null === (s = i) || void 0 === s ? void 0 : s.length) && u(i),
                e === H && (0,
                ut.g)()
            }
            ), [p])
              , P = (0,
            r.useCallback)((t=>{
                if (y(!0),
                t.mode !== N)
                    return;
                const i = e.find((e=>e.id === t.activeId));
                d(i),
                (0,
                ut.g)(i.hash)
            }
            ), [d, e])
              , b = (0,
            r.useRef)(null)
              , C = t=>{
                return e = m[t].imageId,
                b.current.slideTo(e);
                var e
            }
              , M = (0,
            yt.e)();
            return (0,
            r.useEffect)((()=>{
                if (!window)
                    return;
                const t = c.current
                  , i = n.current
                  , s = o.current
                  , h = location.hash.replace("#", "")
                  , r = e.findIndex((t=>t.hash === h))
                  , a = r < 0 ? void 0 : r;
                let l;
                l = void 0 === a ? e : [...e.slice(a), ...e.slice(0, a)];
                const v = void 0 === a ? H : N;
                p(v);
                const d = new Y({
                    canvas: t,
                    images: l,
                    params: {
                        mobMultiplier: 2,
                        multiplier: 4,
                        opacity: .25,
                        opacityDistance: .4
                    },
                    gridEl: i,
                    sliderEl: s,
                    mode: v
                })
                  , m = new J(d);
                return b.current = m,
                m.on("slideChanged", P),
                m.on("modeChanged", j),
                m.on("start", w),
                ()=>{
                    m.destroy()
                }
            }
            ), [e, j, P, w, M]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("h1", {
                    className: "visually-hidden",
                    children: i.h1
                }), (0,
                s.jsx)(tt.Z, {}), (0,
                s.jsx)(gt.q, {
                    isVisible: a
                }), (0,
                s.jsxs)("div", {
                    className: h.artworks,
                    children: [(0,
                    s.jsx)("canvas", {
                        className: h.canvas,
                        ref: c,
                        tabIndex: 0
                    }), (0,
                    s.jsx)(Pt, {
                        isVisible: !a && x === H,
                        isCollapsed: g,
                        onBtnClick: f
                    }), (0,
                    s.jsx)("div", {
                        className: (0,
                        Q.y)(h.ui, !z && h.hidden),
                        children: (0,
                        s.jsx)(dt.Z, {
                            slides: m,
                            activeId: _,
                            onClick: C,
                            disabled: x === T
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: (0,
                        Q.y)(h.swipeNavs, (a || !z || x === T) && h.hidden),
                        children: [(0,
                        s.jsx)("span", {
                            className: h.swipeLeft,
                            children: i.swipe_left
                        }), (0,
                        s.jsxs)("span", {
                            className: h.swipeDown,
                            children: [i.swipe_down, "\xa0", (0,
                            s.jsx)("span", {
                                children: i.or_tap
                            })]
                        }), (0,
                        s.jsx)("span", {
                            className: h.swipeRight,
                            children: i.swipe_right
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: (0,
                        Q.y)(h.ui, (a || !z) && h.hidden),
                        children: (0,
                        s.jsxs)(et.Z, {
                            children: [(0,
                            s.jsx)(it.Z, {
                                onClick: ()=>b.current.prev(),
                                disabled: x === T,
                                className: h.navLeft,
                                children: i.prev_btn
                            }), !!m.length && (0,
                            s.jsx)(ot.Z, {
                                value: _,
                                onChange: C,
                                disabled: x === T,
                                options: m.map((t=>({
                                    name: t.title
                                })))
                            }), x === T ? (0,
                            s.jsx)(vt, {
                                icon: "close.svg",
                                isActive: !0,
                                onClick: ()=>b.current.closeInfo(),
                                label: i.close_info_btn
                            }) : (0,
                            s.jsx)(vt, {
                                icon: "info.svg",
                                onClick: t=>b.current.showInfo(t),
                                label: i.info_btn
                            }), (0,
                            s.jsx)(nt, {
                                url: v.srcSet.original,
                                title: "".concat(i.download_btn, " '").concat(v.title, "'")
                            }), (0,
                            s.jsx)(st.Z, {
                                onClick: ()=>b.current.next(),
                                disabled: x === T,
                                className: h.navRight,
                                children: i.next_btn
                            })]
                        })
                    })]
                }), (0,
                s.jsx)("div", {
                    className: h.gridPicture,
                    ref: n
                }), (0,
                s.jsx)("div", {
                    className: h.sliderPicture,
                    ref: o
                }), (0,
                s.jsx)(pt, {
                    className: (0,
                    Q.y)(h.helper, h.ui, x !== H && h.hidden)
                }), x === T && (0,
                s.jsx)("div", {
                    className: h.sliderInfo,
                    children: (0,
                    s.jsx)(mt.Z, {
                        children: v.content
                    })
                })]
            })
        }
          , Ct = i(9008);
        i(7441).TU.use({
            silent: !0
        });
        var Mt = !0;
        function St(t) {
            let {images: e, t: i={}, isDebug: h=!1} = t;
            "#intro" === location.hash && ("/" === location.pathname && (location.href = "/about"),
            "/tr" === location.pathname && (location.href = "/tr/about"));
            const r = i.meta_title
              , c = i.meta_description.replace(/\n+/g, " ");
            return (0,
            s.jsxs)(ft.P, {
                value: i,
                children: [(0,
                s.jsxs)(Ct, {
                    children: [(0,
                    s.jsx)("title", {
                        children: r
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: c
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:title",
                        content: r
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:description",
                        content: c
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:image",
                        content: "https://halfof8.com/img/halfof8_og_artworks.jpeg"
                    })]
                }), (0,
                s.jsx)(bt, {
                    images: e,
                    isDebug: h
                })]
            })
        }
    },
    4725: function(t, e, i) {
        "use strict";
        i.d(e, {
            _: function() {
                return h
            }
        });
        var s = i(3754);
        function h(t, e) {
            let {wordCls: i, delay: h=0} = e;
            return (0,
            s.A)(t, {
                wordCls: i,
                getWordStyle: t=>"transition-delay: ".concat(h + Math.floor(100 * Math.sqrt(t)), "ms")
            })
        }
    }
}, function(t) {
    t.O(0, [152, 928, 415, 416, 774, 888, 179], (function() {
        return e = 5557,
        t(t.s = e);
        var e
    }
    ));
    var e = t.O();
    _N_E = e
}
]);
