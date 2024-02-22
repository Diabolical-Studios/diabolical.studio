(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[521], {
    512: function(t, e, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return i(7392)
        }
        ])
    },
    9993: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return O
            }
        });
        var s = i(5893)
          , n = i(7294)
          , r = i(8589)
          , o = i.n(r)
          , l = i(8439)
          , a = i.n(l)
          , c = i(896)
          , h = i.n(c)
          , u = i(4751)
          , d = i(2708);
        function p() {
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
        var m = i(4725)
          , v = i(3754);
        var f = i(6723)
          , w = i(9979)
          , _ = i(9360)
          , g = new WeakSet
          , b = new WeakSet
          , y = new WeakSet;
        class x {
            mount() {
                (0,
                f._)(this, g, S).call(this),
                this.timer = setInterval((()=>(0,
                f._)(this, g, S).call(this)), 1e3)
            }
            unmount() {
                clearInterval(this.timer)
            }
            constructor(t) {
                (0,
                w._)(this, g),
                (0,
                w._)(this, b),
                (0,
                w._)(this, y),
                this.el = t,
                this.hours = null,
                this.minutes = null
            }
        }
        function S() {
            const [t,e] = (0,
            f._)(this, y, k).call(this);
            t === this.hours && e === this.minutes || (this.hours = t,
            this.minutes = e,
            (0,
            f._)(this, b, M).call(this, t, e))
        }
        function M(t, e) {
            this.el.innerHTML = '<span class="'.concat(_.numbers, '">').concat(t, "</span>"),
            this.el.innerHTML += '<span class="'.concat(_.colon, '">:</span>'),
            this.el.innerHTML += '<span class="'.concat(_.numbers, '">').concat(e, "</span>")
        }
        function k() {
            const t = (new Date).toLocaleString("en-GB", {
                timeZone: "Asia/Tokyo",
                hour: "2-digit",
                minute: "2-digit"
            })
              , [e,i] = t.split(":");
            return [e, i]
        }
        function j(t) {
            let {enterAnimCls: e="", exitAnimCls: i=""} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , s = !1
              , n = !1
              , r = !1;
            function o() {
                s = !0,
                n || r || c()
            }
            function l() {
                s = !1,
                n || r || h()
            }
            function a() {
                n ? (d(),
                s && c()) : r && (u(),
                s || h())
            }
            function c() {
                t.classList.add(e),
                r = !0
            }
            function h() {
                t.classList.add(i),
                t.classList.remove(e),
                n = !0
            }
            function u() {
                r = !1,
                n = !1
            }
            function d() {
                t.classList.remove(i, e),
                n = !1,
                r = !1
            }
            t.addEventListener("mouseenter", o),
            t.addEventListener("mouseleave", l),
            t.addEventListener("animationend", a),
            this.unmount = ()=>{
                t.removeEventListener("mouseenter", o),
                t.removeEventListener("mouseleave", l),
                t.removeEventListener("animationend", a)
            }
        }
        var E = i(3054)
          , L = i.n(E);
        function W(t) {
            let {children: e, href: i, parentCls: r} = t;
            const o = (0,
            n.useRef)(null)
              , l = (0,
            n.useRef)(null);
            return (0,
            n.useEffect)((()=>(!l.current && o.current && (l.current = new j(o.current,{
                enterAnimCls: L().enter,
                exitAnimCls: L().exit
            })),
            ()=>{
                l.current && l.current.unmount()
            }
            )), []),
            (0,
            s.jsx)("a", {
                href: i,
                className: (0,
                u.y)(...r, L().link),
                ref: o,
                target: "_blank",
                rel: "noopener noreferrer",
                children: e
            })
        }
        function T(t, e) {
            return function(t, e) {
                let {wordCls: i, letterCls: s, delay: n=0} = e;
                return (0,
                v.A)(t, {
                    wordCls: i,
                    letterCls: s,
                    getLetterStyle: t=>"transition-delay: ".concat(n + Math.floor(200 * Math.sqrt(t)), "ms")
                })
            }(t, {
                wordCls: a().word,
                letterCls: a().letter,
                delay: e
            })
        }
        function A(t, e) {
            return (0,
            m._)(t, {
                wordCls: a().word,
                delay: e
            })
        }
        const C = ["p", "p-light", "p-title", "p-body-light"]
          , N = [...C, "h3", "h3-lead-light", "h3-lead"];
        function z(t) {
            let {children: e, name: i, counter: r} = t;
            var o, l;
            const [c,m] = (0,
            n.useState)(!1)
              , {ref: v, inView: f, entry: w} = (0,
            d.YD)({
                threshold: 0
            })
              , _ = (0,
            n.useRef)(null)
              , g = (0,
            n.useRef)(null);
            (0,
            n.useEffect)((()=>{
                f && !c && m(!0)
            }
            ), [f, c]);
            const b = c && a().inView
              , y = c && a().isEntered
              , S = 125 * r
              , M = Object.keys(e)[0]
              , k = e[M];
            if ((0,
            n.useEffect)((()=>{
                if ("h3" === M && !_.current) {
                    var t, e;
                    const i = null === (e = w) || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.querySelector("[data-clock]");
                    i && (_.current = new x(i),
                    _.current.mount())
                }
                return ()=>{
                    if ("h3" === M && _.current) {
                        var t, e;
                        (null === (e = w) || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.querySelector("[data-clock]")) && _.current.unmount()
                    }
                }
            }
            ), [null === (o = w) || void 0 === o ? void 0 : o.target, M]),
            (0,
            n.useEffect)((()=>{
                var t;
                if (N.includes(M) && (null === (t = w) || void 0 === t ? void 0 : t.target) && !g.current) {
                    var e, i;
                    const t = null === (i = w) || void 0 === i || null === (e = i.target) || void 0 === e ? void 0 : e.querySelectorAll("a");
                    t.length > 0 && (g.current = [],
                    t.forEach((t=>{
                        g.current.push({
                            el: t,
                            instance: new j(t,{
                                enterAnimCls: L().enter,
                                exitAnimCls: L().exit
                            })
                        })
                    }
                    )))
                }
                return ()=>{
                    var t;
                    N.includes(M) && (null === (t = w) || void 0 === t ? void 0 : t.target) && g.current && g.current.forEach((t=>{
                        let {instance: e} = t;
                        e.unmount()
                    }
                    ))
                }
            }
            ), [null === (l = w) || void 0 === l ? void 0 : l.target, M]),
            "audio" === M) {
                const t = "/min/about/".concat(i, "/").concat(k);
                return (0,
                s.jsx)("audio", {
                    controls: !0,
                    ref: v,
                    src: t
                })
            }
            if ("h2" === M)
                return (0,
                s.jsx)("h2", {
                    className: (0,
                    u.y)(b, y, h().super),
                    ref: v,
                    dangerouslySetInnerHTML: {
                        __html: T(k, S)
                    }
                });
            if ("h3" === M) {
                let t = A(k, S);
                return t = t.replace("==clock==", "<div data-clock></div>"),
                (0,
                s.jsx)("h3", {
                    className: (0,
                    u.y)(b, y, a().title, h().title),
                    ref: v,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
            if ("h3-lead-light" === M)
                return (0,
                s.jsx)("h3", {
                    className: (0,
                    u.y)(b, y, h().lead, h().light),
                    ref: v,
                    dangerouslySetInnerHTML: {
                        __html: A(k, S)
                    }
                });
            if ("h4-super" === M)
                return (0,
                s.jsx)("h4", {
                    className: (0,
                    u.y)(b, y, h().super),
                    ref: v,
                    dangerouslySetInnerHTML: {
                        __html: T(k, S)
                    }
                });
            var E;
            if ("link" === M)
                return (0,
                s.jsxs)(W, {
                    href: k,
                    parentCls: [b, y, h().link],
                    children: [(0,
                    s.jsx)(p, {}), null !== (E = e.text) && void 0 !== E ? E : k.replace(/\w*:\/\//, "")]
                });
            if (C.includes(M)) {
                const t = [h().p, a().p];
                return "p" === M ? t.push(h().lead) : "p-light" === M ? t.push(h().lead, h().light) : "p-title" === M ? t.push(h().title, a().title) : "p-body-light" === M && t.push(h().body, h().light),
                (0,
                s.jsx)("p", {
                    className: (0,
                    u.y)(b, y, ...t),
                    ref: v,
                    dangerouslySetInnerHTML: {
                        __html: A(e[M], S)
                    }
                })
            }
            if ("list" === M || "list-body" === M)
                return (0,
                s.jsx)("ul", {
                    className: (0,
                    u.y)(h().ul, y, b),
                    ref: v,
                    children: k.map(((t,e)=>(0,
                    s.jsx)("li", {
                        className: (0,
                        u.y)(h().li, "list-body" === M && h().body),
                        dangerouslySetInnerHTML: {
                            __html: A(t, S)
                        }
                    }, e)))
                });
            if (e.img) {
                const {src: t, alt: i, width: n=1e3, height: r=1e3, ratio: o, href: l} = e
                  , c = (0,
                s.jsx)("div", {
                    className: (0,
                    u.y)(b, y, a().imgBox),
                    children: (0,
                    s.jsx)("img", {
                        src: t,
                        alt: null !== i && void 0 !== i ? i : "",
                        width: n,
                        height: r,
                        className: a().img,
                        ref: v,
                        loading: "lazy",
                        style: {
                            transitionDelay: "".concat(S, "ms"),
                            aspectRatio: o
                        }
                    })
                });
                return l ? (0,
                s.jsx)("a", {
                    href: l,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: a().imgLink,
                    children: c
                }) : c
            }
            if (e.video) {
                const {video: t, poster: n=null, width: r=1e3, height: o=1e3, ratio: l} = e
                  , c = t.startsWith("/") ? t : "/min/about/".concat(i, "/").concat(t);
                let h = null;
                var z;
                if (null !== n)
                    h = (null === (z = n) || void 0 === z ? void 0 : z.startsWith("/")) ? n : "/min/about/".concat(i, "/").concat(n);
                return (0,
                s.jsx)("div", {
                    className: (0,
                    u.y)(b, y, a().imgBox, a().videoBox),
                    children: (0,
                    s.jsx)("video", {
                        src: c,
                        width: r,
                        height: o,
                        className: a().video,
                        ref: v,
                        muted: !0,
                        autoPlay: !0,
                        poster: h,
                        playsInline: !0,
                        loop: !0,
                        preload: "metadata",
                        style: {
                            transitionDelay: "".concat(S, "ms"),
                            aspectRatio: l
                        }
                    })
                })
            }
        }
        const R = ["audio", "h2", "h3", "h3-lead-light", "h4-super", "img", "link", "list", "list-body", "p", "p-body-light", "p-light", "p-title", "video"]
          , H = ["grid-2", "grid-2-2", "grid-3", "grid-3-2", "grid-4", "grid-5", "grid-6"]
          , I = ["col", "col-mob-full", "grid", "colspan-2", "colspan-3", "colspan-4", "colspan-5"];
        function O(t) {
            let {children: e, name: i} = t
              , r = 0;
            return (0,
            s.jsx)(s.Fragment, {
                children: function t(e) {
                    if (Array.isArray(e))
                        return e.map(((e,i)=>(0,
                        s.jsx)(n.Fragment, {
                            children: t(e)
                        }, i)));
                    if (R.some((t=>Object.hasOwn(e, t))))
                        return (0,
                        s.jsx)(z, {
                            counter: r,
                            name: i,
                            children: e
                        });
                    if (I.some((t=>Object.hasOwn(e, t)))) {
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
                                className: o().colMobFull,
                                children: t(e["col-mob-full"])
                            });
                        if (e.grid) {
                            const i = (0,
                            s.jsx)("div", {
                                className: o().grid,
                                children: t(e.grid)
                            });
                            return r = 0,
                            i
                        }
                        for (const i of H)
                            if (e[i]) {
                                const n = (0,
                                s.jsx)("div", {
                                    className: o()[i],
                                    children: t(e[i])
                                });
                                return r = 0,
                                n
                            }
                        for (let i = 2; i <= 5; i++)
                            if (e["colspan-".concat(i)])
                                return (0,
                                s.jsx)("div", {
                                    className: o()["colspan-".concat(i)],
                                    children: t(e["colspan-".concat(i)])
                                })
                    }
                    console.error("Unknown content element: ", e)
                }(e)
            })
        }
        I.push(...H)
    },
    5241: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var s = i(5893)
          , n = i(1882)
          , r = i.n(n);
        function o(t) {
            let {children: e} = t;
            return (0,
            s.jsx)("div", {
                className: r().controls,
                children: e
            })
        }
    },
    3782: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return h
            }
        });
        var s = i(5893)
          , n = i(7294)
          , r = i(5776)
          , o = i.n(r);
        class l {
            constructor(t) {
                this.dots = [],
                this.GAP = 12,
                this.COLOR = 255,
                this.ALPHA = 80,
                this.setSizes = ()=>{
                    if (!window)
                        return;
                    let t;
                    this.w = this.canvas.width = window.innerWidth,
                    this.h = this.canvas.height = window.innerHeight,
                    this.cols = Math.ceil(this.canvas.width / this.GAP),
                    this.rows = Math.ceil(this.canvas.height / this.GAP),
                    this.numDots = this.rows * this.cols,
                    this.dots = [];
                    const e = this.GAP / 2;
                    for (let i = 0; i < this.numDots; i++)
                        t = {},
                        t.x = e + this.GAP * (i % this.cols),
                        t.y = e + this.GAP * Math.floor(i / this.cols),
                        this.dots[i] = t
                }
                ,
                this.render = ()=>{
                    if (!window)
                        return;
                    let t, e, i;
                    const s = (t = this.ctx.createImageData(this.w, this.h)).data;
                    for (let n = 0; n < this.numDots; n++)
                        e = this.dots[n],
                        i = 4 * (e.x + e.y * this.w),
                        s[i] = s[i + 1] = s[i + 2] = this.COLOR,
                        s[i + 3] = this.ALPHA;
                    this.ctx.putImageData(t, 0, 0)
                }
                ,
                this.resize = ()=>{
                    this.setSizes(),
                    this.render()
                }
                ,
                this.mount = ()=>{
                    window.addEventListener("resize", this.resize),
                    this.resize()
                }
                ,
                this.unmount = ()=>{
                    window.removeEventListener("resize", this.resize)
                }
                ,
                this.canvas = t,
                this.ctx = t.getContext("2d"),
                this.mount()
            }
        }
        var a = i(4751);
        function c() {
            const t = (0,
            n.useRef)(null)
              , e = (0,
            n.useRef)(null)
              , [i,r] = (0,
            n.useState)(!1);
            return (0,
            n.useEffect)((()=>{
                const i = t.current;
                return e.current = new l(i),
                r(!0),
                ()=>{
                    e.current.unmount()
                }
            }
            ), []),
            (0,
            s.jsx)("canvas", {
                className: (0,
                a.y)(o().canvas, i && o().ready),
                ref: t
            })
        }
        var h = (0,
        n.memo)(c)
    },
    131: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return l
            }
        });
        var s = i(5893)
          , n = i(6318)
          , r = i.n(n)
          , o = i(4751);
        function l(t) {
            let {icon: e, style: i, disabled: n=!1} = t;
            const l = Object.assign({}, i, {
                backgroundImage: "url(/icons/".concat(e, ")")
            });
            return (0,
            s.jsx)("span", {
                className: (0,
                o.y)(r().navBtnIcon, n && r().isDisabled),
                style: l
            })
        }
    },
    5005: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return a
            }
        });
        var s = i(5893)
          , n = i(975)
          , r = i.n(n)
          , o = i(131)
          , l = i(4751);
        function a(t) {
            let {children: e, className: i, onClick: n, disabled: a=!1} = t;
            return (0,
            s.jsxs)("button", {
                className: (0,
                l.y)(r().navLeft, i),
                onClick: n,
                disabled: a,
                children: [(0,
                s.jsx)(o.Z, {
                    icon: "arrow-right.svg",
                    style: {
                        transform: "rotate(180deg)"
                    },
                    disabled: a
                }), (0,
                s.jsx)("span", {
                    className: r().text,
                    children: e
                })]
            })
        }
    },
    2177: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return a
            }
        });
        var s = i(5893)
          , n = i(7733)
          , r = i.n(n)
          , o = i(131)
          , l = i(4751);
        function a(t) {
            let {children: e, className: i, onClick: n, disabled: a=!1} = t;
            return (0,
            s.jsxs)("button", {
                className: (0,
                l.y)(r().navRight, i),
                onClick: n,
                disabled: a,
                children: [(0,
                s.jsx)("span", {
                    className: r().text,
                    children: e
                }), (0,
                s.jsx)(o.Z, {
                    icon: "arrow-right.svg",
                    disabled: a
                })]
            })
        }
    },
    5097: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return c
            }
        });
        var s = i(5893)
          , n = i(3498)
          , r = i.n(n)
          , o = i(4751)
          , l = i(7294)
          , a = i(7496);
        function c(t) {
            let {slides: e=[], activeId: i=0, onClick: n, disabled: c=!1} = t;
            const h = (0,
            l.useContext)(a.j)
              , u = e.map(((t,e)=>e + 1))
              , d = Array.from({
                length: 3
            }, ((t,e)=>u.length + e)).concat(u);
            return (0,
            s.jsxs)("div", {
                className: (0,
                o.y)(r().pagination, c && r().disabled),
                children: [(0,
                s.jsx)("div", {
                    className: r().screen
                }), (0,
                s.jsx)("div", {
                    className: r().slider,
                    style: {
                        transform: "translateX(".concat(-24 * (i + 3), "px)")
                    },
                    children: d.map(((t,e)=>{
                        const l = e - 3
                          , a = i > e || i < e - 6;
                        return e < 3 ? (0,
                        s.jsx)("span", {
                            className: (0,
                            o.y)(r().slide, r().slideGhost, a && r().hidden)
                        }, e) : (0,
                        s.jsx)("button", {
                            tabIndex: c ? -1 : 0,
                            className: (0,
                            o.y)(r().slide, l === i && r().slideActive, a && r().hidden),
                            onClick: ()=>n(l),
                            "aria-label": "".concat(h.pagination_btn, " ").concat(l + 1),
                            children: l + 1
                        }, e)
                    }
                    ))
                })]
            })
        }
    },
    1688: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return c
            }
        });
        var s = i(5893)
          , n = i(9468)
          , r = i(9453)
          , o = i.n(r)
          , l = i(4751)
          , a = i(7294);
        function c(t) {
            let {options: e, value: i, onChange: r, disabled: c=!1, style: h={}} = t;
            return (0,
            s.jsx)("div", {
                className: o().container,
                style: h,
                children: (0,
                s.jsxs)(n.R, {
                    value: i,
                    onChange: r,
                    disabled: c,
                    children: [(0,
                    s.jsx)(n.R.Button, {
                        className: o().button,
                        children: (0,
                        s.jsxs)("span", {
                            className: o().buttonInner,
                            children: [(0,
                            s.jsx)("span", {
                                className: o().buttonText,
                                children: e[i].name
                            }), (0,
                            s.jsx)("span", {
                                className: o().arrow
                            })]
                        })
                    }), (0,
                    s.jsx)(n.R.Options, {
                        className: o().options,
                        children: e.map(((t,e)=>(0,
                        s.jsx)(n.R.Option, {
                            value: e,
                            as: a.Fragment,
                            children: e=>{
                                let {active: i} = e;
                                return (0,
                                s.jsx)("li", {
                                    className: (0,
                                    l.y)(o().option, i && o().optionActive),
                                    children: t.name
                                })
                            }
                        }, e)))
                    })]
                })
            })
        }
    },
    5461: function(t) {
        t.exports = {
            wrapper: "bJ",
            isMobile: "bK",
            isLoading: "bL",
            intro: "bM",
            introImg: "bN",
            articles: "bO",
            article: "bP",
            articleActive: "bQ",
            isShaded: "bR",
            articleContent: "bS",
            spacer: "bT",
            articleStuck: "bU",
            isMovingHorizontal: "bV"
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
    1882: function(t) {
        t.exports = {
            controls: "a"
        }
    },
    5776: function(t) {
        t.exports = {
            canvas: "M",
            ready: "N"
        }
    },
    6318: function(t) {
        t.exports = {
            navBtnIcon: "ba",
            isDisabled: "bb"
        }
    },
    975: function(t) {
        t.exports = {
            navLeft: "b",
            text: "c"
        }
    },
    7733: function(t) {
        t.exports = {
            navRight: "e",
            text: "f"
        }
    },
    3498: function(t) {
        t.exports = {
            pagination: "h",
            screen: "i",
            slider: "j",
            slide: "k",
            disabled: "l",
            slideActive: "m",
            slideGhost: "n",
            hidden: "o"
        }
    },
    7038: function(t) {
        t.exports = {
            NUM_LINES: "18",
            container: "O",
            ray: "P",
            ray0: "Q",
            "ray-0": "R",
            ray1: "S",
            "ray-1": "T",
            ray2: "U",
            "ray-2": "V",
            ray3: "W",
            "ray-3": "X",
            ray4: "Y",
            "ray-4": "Z",
            ray5: "aa",
            "ray-5": "ab",
            ray6: "ac",
            "ray-6": "ae",
            ray7: "af",
            "ray-7": "ag",
            ray8: "ah",
            "ray-8": "ai",
            ray9: "aj",
            "ray-9": "ak",
            ray10: "al",
            "ray-10": "am",
            ray11: "an",
            "ray-11": "ao",
            ray12: "ap",
            "ray-12": "aq",
            ray13: "ar",
            "ray-13": "as",
            ray14: "at",
            "ray-14": "au",
            ray15: "av",
            "ray-15": "aw",
            ray16: "ax",
            "ray-16": "ay",
            ray17: "az",
            "ray-17": "aA",
            ray18: "aB",
            "ray-18": "aC"
        }
    },
    2542: function(t) {
        t.exports = {
            section: "bc",
            inView: "be",
            isMobile: "bf"
        }
    },
    9453: function(t) {
        t.exports = {
            container: "ca",
            button: "cb",
            buttonInner: "cc",
            buttonText: "ce",
            arrow: "cf",
            options: "cg",
            option: "ch",
            optionActive: "ci"
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
    1536: function(t, e, i) {
        "use strict";
        i.d(e, {
            q: function() {
                return h
            }
        });
        var s = i(5893)
          , n = i(4751)
          , r = i(7038)
          , o = i(1526)
          , l = i(4267)
          , a = i(7294);
        const c = t=>{
            let {className: e} = t;
            return (0,
            s.jsx)("div", {
                className: (0,
                n.y)(r.container, e),
                children: Array.from({
                    length: r.NUM_LINES
                }).map(((t,e)=>(0,
                s.jsx)("div", {
                    className: (0,
                    n.y)(r.ray, r["ray".concat(e)])
                }, e)))
            })
        }
          , h = (0,
        a.memo)((t=>{
            let {isVisible: e=!0} = t;
            return (0,
            s.jsx)(o.M, {
                children: e && (0,
                s.jsx)(l.m.div, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: (0,
                    s.jsx)(c, {})
                })
            })
        }
        ));
        h.displayName = "RaySpinnerWithAnimatePresence"
    },
    7496: function(t, e, i) {
        "use strict";
        i.d(e, {
            P: function() {
                return r
            },
            j: function() {
                return n
            }
        });
        var s = i(5893);
        const n = (0,
        i(7294).createContext)({})
          , r = t=>{
            let {children: e, value: i} = t;
            return (0,
            s.jsx)(n.Provider, {
                value: i,
                children: e
            })
        }
    },
    7392: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            __N_SSG: function() {
                return Zt
            },
            default: function() {
                return qt
            }
        });
        var s = i(5893)
          , n = i(7121)
          , r = i(9886)
          , o = i(5321)
          , l = new WeakMap
          , a = new WeakMap
          , c = new WeakMap
          , h = new WeakMap
          , u = new WeakMap
          , d = new WeakMap
          , p = new WeakMap
          , m = new WeakMap
          , v = new WeakMap
          , f = new WeakMap
          , w = new WeakMap
          , _ = new WeakMap
          , g = new WeakMap
          , b = new WeakMap
          , y = new WeakMap
          , x = new WeakMap
          , S = new WeakMap
          , M = new WeakMap
          , k = new WeakMap
          , j = new WeakMap;
        class E {
            mount() {
                (0,
                n._)(this, x).call(this),
                this.scrollToArticle((0,
                n._)(this, p)),
                (0,
                n._)(this, v).addEventListener("scroll", (0,
                n._)(this, k)),
                window.addEventListener("resize", (0,
                n._)(this, x)),
                this.onReady()
            }
            unmount() {
                (0,
                n._)(this, v).removeEventListener("scroll", (0,
                n._)(this, k)),
                window.removeEventListener("resize", (0,
                n._)(this, x))
            }
            constructor({articlesContentEls: t, articlesEls: e, initialActiveId: i=0, introEl: s, scrollContainer: E, setActiveId: L, stuckCls: W, onReady: T=(()=>{}
            )}) {
                (0,
                r._)(this, l, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, a, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, c, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, h, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, u, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, d, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, p, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, m, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, v, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, f, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, w, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, _, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, g, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, b, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, y, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, x, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, S, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, M, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, k, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, j, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                o._)(this, l, 0),
                (0,
                o._)(this, u, []),
                (0,
                o._)(this, d, 0),
                (0,
                o._)(this, g, []),
                (0,
                o._)(this, b, (()=>{
                    let t = (0,
                    n._)(this, d);
                    (0,
                    o._)(this, u, (0,
                    n._)(this, h).map((e=>(t += e.offsetHeight,
                    t))))
                }
                )),
                (0,
                o._)(this, y, (()=>{
                    const {length: t} = (0,
                    n._)(this, u)
                      , e = [];
                    for (let i = 0; i < t; i++) {
                        const t = (0,
                        n._)(this, u)[i] - window.innerHeight;
                        e.push(t)
                    }
                    (0,
                    o._)(this, g, e)
                }
                )),
                (0,
                o._)(this, x, (()=>{
                    (0,
                    o._)(this, a, (0,
                    n._)(this, h)[0].offsetHeight),
                    (0,
                    o._)(this, d, (0,
                    n._)(this, m).offsetHeight),
                    (0,
                    n._)(this, b).call(this),
                    (0,
                    n._)(this, y).call(this)
                }
                )),
                (0,
                o._)(this, S, (t=>{
                    (0,
                    n._)(this, h)[t].classList.add((0,
                    n._)(this, _));
                    const e = -(0,
                    n._)(this, c)[t].offsetHeight + window.innerHeight;
                    (0,
                    n._)(this, h)[t].style.top = "".concat(e, "px")
                }
                )),
                (0,
                o._)(this, M, (t=>{
                    (0,
                    n._)(this, h)[t].classList.remove((0,
                    n._)(this, _)),
                    (0,
                    n._)(this, h)[t].style.top = ""
                }
                )),
                (0,
                o._)(this, k, (()=>{
                    const t = (0,
                    n._)(this, v).scrollTop;
                    (0,
                    o._)(this, f, t);
                    const e = (0,
                    n._)(this, j).call(this, t);
                    e !== (0,
                    n._)(this, l) && (0,
                    n._)(this, w).call(this, e);
                    for (let i = 0; i < (0,
                    n._)(this, g).length; i++)
                        t >= (0,
                        n._)(this, g)[i] ? (0,
                        n._)(this, S).call(this, i) : (0,
                        n._)(this, M).call(this, i)
                }
                )),
                (0,
                o._)(this, j, (t=>{
                    let e = 0;
                    const {length: i} = (0,
                    n._)(this, u);
                    for (let s = 0; s < i; s++)
                        if (t < (0,
                        n._)(this, u)[s] - 1)
                            return e = s,
                            e;
                    return i
                }
                )),
                this.scrollToArticle = t=>{
                    let e = 0 === t ? 0 : (0,
                    n._)(this, u)[t - 1];
                    e += 1,
                    (0,
                    n._)(this, v).scrollTo({
                        top: e,
                        behavior: "instant"
                    }),
                    (0,
                    n._)(this, w).call(this, t)
                }
                ,
                (0,
                o._)(this, c, t),
                (0,
                o._)(this, h, e),
                (0,
                o._)(this, p, i),
                (0,
                o._)(this, m, s),
                (0,
                o._)(this, v, E),
                (0,
                o._)(this, _, W),
                this.onReady = T,
                (0,
                o._)(this, w, (t=>{
                    (0,
                    o._)(this, l, t),
                    L(t)
                }
                ))
            }
        }
        var L = i(6723)
          , W = i(9979)
          , T = new WeakMap
          , A = new WeakMap
          , C = new WeakMap
          , N = new WeakMap
          , z = new WeakMap
          , R = new WeakMap
          , H = new WeakMap
          , I = new WeakMap
          , O = new WeakMap
          , P = new WeakMap
          , D = new WeakMap
          , B = new WeakMap
          , Z = new WeakMap
          , q = new WeakMap
          , V = new WeakMap
          , U = new WeakMap
          , X = new WeakMap
          , F = new WeakMap
          , G = new WeakMap
          , Y = new WeakSet
          , K = new WeakMap
          , Q = new WeakSet
          , J = new WeakSet
          , $ = new WeakMap
          , tt = new WeakMap
          , et = new WeakSet
          , it = new WeakSet
          , st = new WeakSet
          , nt = new WeakSet
          , rt = new WeakSet;
        class ot {
            mount() {
                this.scroller.dimensions.resize(),
                (0,
                L._)(this, Q, at).call(this),
                (0,
                n._)(this, X).call(this),
                (0,
                o._)(this, C, requestAnimationFrame((0,
                n._)(this, G))),
                document.addEventListener("keydown", (0,
                n._)(this, tt)),
                this.onReady()
            }
            unmount() {
                (0,
                L._)(this, Y, lt).call(this),
                (0,
                n._)(this, F).call(this),
                this.scroller.destroy(),
                (0,
                L._)(this, J, ct).call(this),
                document.removeEventListener("keydown", (0,
                n._)(this, tt)),
                (0,
                n._)(this, q).style.height = "auto",
                (0,
                n._)(this, P).style.padding = "",
                (0,
                n._)(this, A).forEach((t=>{
                    t.style.left = "",
                    t.style.top = "",
                    t.style.transform = ""
                }
                ))
            }
            jumpToArticle(t) {
                (0,
                o._)(this, D, !0);
                const e = this.getArticlePos(t);
                this.scroller.scrollTo(e, {
                    immediate: !0,
                    force: !0
                }),
                this.renderByScrollPos(e),
                (0,
                o._)(this, D, !1)
            }
            renderByScrollPos(t) {
                if (window.innerWidth < (0,
                n._)(this, H))
                    return;
                const e = (0,
                n._)(this, A);
                let i = null;
                for (let l = 0; l < e.length; l++) {
                    const s = e[l];
                    t >= (0,
                    n._)(this, B)[l] && t < (0,
                    n._)(this, I)[l] ? (s.scrollTop = t - (0,
                    n._)(this, B)[l],
                    i = l,
                    (0,
                    n._)(this, P).classList.remove((0,
                    n._)(this, R))) : t >= (0,
                    n._)(this, I)[l] ? (s.scrollTop = s.scrollHeight - s.offsetHeight,
                    (0,
                    n._)(this, P).classList.add((0,
                    n._)(this, R))) : s.scrollTop = 0
                }
                let s = 0;
                for (let n = 0; n < e.length; n++)
                    s += e[n].scrollTop;
                const r = Math.floor(s - t)
                  , o = Math.floor((-r + window.innerWidth / 3) / (0,
                n._)(this, N) * ((0,
                n._)(this, A).length - 1));
                if (o !== this.activeId) {
                    const t = Math.max(0, Math.min(o, (0,
                    n._)(this, A).length - 1));
                    (0,
                    n._)(this, Z).call(this, t)
                }
                for (let l = 0; l < e.length; l++) {
                    const t = (0,
                    n._)(this, V)[l];
                    let s;
                    s = r <= t ? t : null !== i ? -(0,
                    n._)(this, U) * o : r,
                    e[l].style.transform = "translateX(".concat(s, "px)")
                }
            }
            scrollToArticle(t, e) {
                const i = this.getArticlePos(t);
                (0,
                L._)(this, et, ht).call(this, i, e)
            }
            constructor({articlesContentEls: t, articlesEls: e, initialActiveId: i=0, isMovingHorizontalCls: s, mobileBreakpoint: l, scrollContainer: a, scroller: c, setActiveId: h, spacer: u, onReady: d=(()=>{}
            )}) {
                (0,
                W._)(this, Y),
                (0,
                W._)(this, Q),
                (0,
                W._)(this, J),
                (0,
                W._)(this, et),
                (0,
                W._)(this, it),
                (0,
                W._)(this, st),
                (0,
                W._)(this, nt),
                (0,
                W._)(this, rt),
                (0,
                r._)(this, T, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, A, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, C, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, N, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, z, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, R, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, H, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, I, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, O, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, P, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, D, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, B, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, Z, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, q, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, V, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, U, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, X, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, F, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, G, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, K, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, $, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                r._)(this, tt, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                o._)(this, C, 0),
                (0,
                o._)(this, N, 0),
                (0,
                o._)(this, z, 0),
                (0,
                o._)(this, R, ""),
                (0,
                o._)(this, I, []),
                (0,
                o._)(this, D, null),
                (0,
                o._)(this, B, []),
                (0,
                o._)(this, V, []),
                (0,
                o._)(this, U, 0),
                (0,
                o._)(this, X, (()=>{
                    this.scroller.on("scroll", (0,
                    n._)(this, $)),
                    (0,
                    o._)(this, D, !1)
                }
                )),
                (0,
                o._)(this, F, (()=>{
                    this.scroller.off("scroll", (0,
                    n._)(this, $)),
                    (0,
                    o._)(this, D, !0)
                }
                )),
                (0,
                o._)(this, G, (t=>{
                    this.scroller.raf(t),
                    (0,
                    o._)(this, C, requestAnimationFrame((0,
                    n._)(this, G)))
                }
                )),
                (0,
                o._)(this, K, (()=>{
                    (0,
                    o._)(this, N, (0,
                    L._)(this, it, ut).call(this, (0,
                    n._)(this, A)));
                    const t = (0,
                    n._)(this, N) + (0,
                    L._)(this, rt, mt).call(this, (0,
                    n._)(this, A)) + window.innerHeight;
                    (0,
                    n._)(this, q).style.height = "".concat(t, "px");
                    const e = (0,
                    L._)(this, nt, pt).call(this, (0,
                    n._)(this, A)[0]);
                    (0,
                    n._)(this, P).style.padding = "0 ".concat(e, "px"),
                    (0,
                    n._)(this, A).forEach(((t,e)=>{
                        t.style.left = "".concat(t.offsetWidth * e, "px"),
                        0 !== e && (t.style.top = "".concat(-t.offsetHeight * e, "px"))
                    }
                    ));
                    const i = []
                      , s = []
                      , r = []
                      , l = (0,
                    n._)(this, A)[0].offsetWidth;
                    (0,
                    o._)(this, U, l);
                    const a = window.innerWidth / 2 - l / 2;
                    (0,
                    n._)(this, A).forEach(((t,e)=>{
                        i[e] = 0 === e ? 0 : Math.floor(s[e - 1] + l),
                        s[e] = Math.floor(i[e] + (0,
                        L._)(this, st, dt).call(this, t));
                        const o = -l * e - a
                          , c = a / ((0,
                        n._)(this, A).length - 1) * e;
                        r[e] = Math.floor(o + c)
                    }
                    )),
                    (0,
                    o._)(this, B, i),
                    (0,
                    o._)(this, I, s),
                    (0,
                    o._)(this, V, r),
                    this.renderByScrollPos(this.scroller.scroll)
                }
                )),
                (0,
                o._)(this, $, (t=>{
                    if ((0,
                    n._)(this, D))
                        return;
                    const e = t.animatedScroll;
                    this.renderByScrollPos(e)
                }
                )),
                (0,
                o._)(this, tt, (t=>{
                    const e = this.scroller;
                    "ArrowDown" === t.key ? e.scrollTo(e.scroll + 100) : "ArrowUp" === t.key ? e.scrollTo(e.scroll - 100) : "PageDown" === t.key ? e.scrollTo(e.scroll + window.innerHeight) : "PageUp" === t.key ? e.scrollTo(e.scroll - window.innerHeight) : "Home" === t.key ? e.scrollTo(0) : "End" === t.key && e.scrollTo((0,
                    n._)(this, q).offsetHeight - window.innerHeight)
                }
                )),
                this.getArticlePos = t=>(0,
                n._)(this, B)[t],
                (0,
                o._)(this, T, t),
                (0,
                o._)(this, A, e),
                (0,
                o._)(this, R, s),
                (0,
                o._)(this, H, l),
                (0,
                o._)(this, P, a),
                (0,
                o._)(this, q, u),
                this.scroller = c,
                this.onReady = d,
                (0,
                o._)(this, Z, (t=>{
                    this.activeId = t,
                    h(t)
                }
                )),
                (0,
                o._)(this, z, i),
                (0,
                n._)(this, K).call(this),
                this.scroller.dimensions.resize(),
                this.jumpToArticle((0,
                n._)(this, z))
            }
        }
        function lt() {
            cancelAnimationFrame((0,
            n._)(this, C))
        }
        function at() {
            const t = new ResizeObserver((0,
            n._)(this, K));
            (0,
            n._)(this, A).forEach((e=>{
                t.observe(e)
            }
            )),
            (0,
            n._)(this, T).forEach((e=>{
                t.observe(e)
            }
            )),
            t.observe((0,
            n._)(this, P)),
            (0,
            o._)(this, O, t),
            window.addEventListener("resize", (0,
            n._)(this, K))
        }
        function ct() {
            (0,
            n._)(this, O).disconnect(),
            window.removeEventListener("resize", (0,
            n._)(this, K))
        }
        function ht(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.scroller.scrollTo(t, {
                duration: .8,
                ...e
            })
        }
        function ut(t) {
            return Math.floor((t.length - 1) * t[0].offsetWidth)
        }
        function dt(t) {
            return Math.floor(t.scrollHeight - t.clientHeight)
        }
        function pt(t) {
            return Math.floor((window.innerWidth - t.offsetWidth) / 2)
        }
        function mt(t) {
            return t.reduce(((t,e)=>t + (0,
            L._)(this, st, dt).call(this, e)), 0)
        }
        var vt = i(7294)
          , ft = i(9993)
          , wt = i(2542)
          , _t = i(4751)
          , gt = i(2708);
        function bt(t) {
            let {section: e, name: i, isMobile: n} = t;
            const {ref: r, inView: o} = (0,
            gt.YD)({
                threshold: 0
            });
            return (0,
            s.jsx)("section", {
                ref: r,
                className: (0,
                _t.y)(wt.section, n && wt.isMobile, o && wt.inView),
                children: e.map(((t,e)=>(0,
                s.jsx)(ft.Z, {
                    name: i,
                    children: t
                }, e)))
            })
        }
        function yt(t) {
            let {article: e, isMobile: i} = t;
            const {name: n, content: r} = e;
            return (0,
            s.jsx)(s.Fragment, {
                children: r.map(((t,e)=>{
                    let {section: r} = t;
                    return r && (0,
                    s.jsx)(bt, {
                        name: n,
                        section: r,
                        isMobile: i
                    }, e)
                }
                ))
            })
        }
        var xt = i(5241)
          , St = i(3782);
        function Mt() {
            return Mt = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            }
            ,
            Mt.apply(this, arguments)
        }
        function kt(t, e, i) {
            return Math.max(t, Math.min(e, i))
        }
        class jt {
            advance(t) {
                var e;
                if (!this.isRunning)
                    return;
                let i = !1;
                if (this.lerp)
                    this.value = (s = this.value,
                    n = this.to,
                    (1 - (r = 1 - Math.exp(-60 * this.lerp * t))) * s + r * n),
                    Math.round(this.value) === this.to && (this.value = this.to,
                    i = !0);
                else {
                    this.currentTime += t;
                    const e = kt(0, this.currentTime / this.duration, 1);
                    i = e >= 1;
                    const s = i ? 1 : this.easing(e);
                    this.value = this.from + (this.to - this.from) * s
                }
                var s, n, r;
                null == (e = this.onUpdate) || e.call(this, this.value, {
                    completed: i
                }),
                i && this.stop()
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(t, e, {lerp: i=.1, duration: s=1, easing: n=(t=>t), onUpdate: r}) {
                this.from = this.value = t,
                this.to = e,
                this.lerp = i,
                this.duration = s,
                this.easing = n,
                this.currentTime = 0,
                this.isRunning = !0,
                this.onUpdate = r
            }
        }
        class Et {
            constructor({wrapper: t, content: e, autoResize: i=!0}={}) {
                if (this.resize = ()=>{
                    this.onWrapperResize(),
                    this.onContentResize()
                }
                ,
                this.onWrapperResize = ()=>{
                    this.wrapper === window ? (this.width = window.innerWidth,
                    this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
                    this.height = this.wrapper.clientHeight)
                }
                ,
                this.onContentResize = ()=>{
                    this.scrollHeight = this.content.scrollHeight,
                    this.scrollWidth = this.content.scrollWidth
                }
                ,
                this.wrapper = t,
                this.content = e,
                i) {
                    const t = function(t, e) {
                        let i;
                        return function() {
                            let e = arguments
                              , s = this;
                            clearTimeout(i),
                            i = setTimeout((function() {
                                t.apply(s, e)
                            }
                            ), 250)
                        }
                    }(this.resize);
                    this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                    this.contentResizeObserver = new ResizeObserver(t),
                    this.contentResizeObserver.observe(this.content)
                }
                this.resize()
            }
            destroy() {
                var t, e;
                null == (t = this.wrapperResizeObserver) || t.disconnect(),
                null == (e = this.contentResizeObserver) || e.disconnect()
            }
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        }
        let Lt = ()=>({
            events: {},
            emit(t, ...e) {
                let i = this.events[t] || [];
                for (let s = 0, n = i.length; s < n; s++)
                    i[s](...e)
            },
            on(t, e) {
                var i;
                return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [e]),
                ()=>{
                    var i;
                    this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter((t=>e !== t))
                }
            }
        });
        class Wt {
            constructor(t, {wheelMultiplier: e=1, touchMultiplier: i=2, normalizeWheel: s=!1}) {
                this.onTouchStart = t=>{
                    const {clientX: e, clientY: i} = t.targetTouches ? t.targetTouches[0] : t;
                    this.touchStart.x = e,
                    this.touchStart.y = i,
                    this.lastDelta = {
                        x: 0,
                        y: 0
                    }
                }
                ,
                this.onTouchMove = t=>{
                    const {clientX: e, clientY: i} = t.targetTouches ? t.targetTouches[0] : t
                      , s = -(e - this.touchStart.x) * this.touchMultiplier
                      , n = -(i - this.touchStart.y) * this.touchMultiplier;
                    this.touchStart.x = e,
                    this.touchStart.y = i,
                    this.lastDelta = {
                        x: s,
                        y: n
                    },
                    this.emitter.emit("scroll", {
                        type: "touch",
                        deltaX: s,
                        deltaY: n,
                        event: t
                    })
                }
                ,
                this.onTouchEnd = t=>{
                    this.emitter.emit("scroll", {
                        type: "touch",
                        inertia: !0,
                        deltaX: this.lastDelta.x,
                        deltaY: this.lastDelta.y,
                        event: t
                    })
                }
                ,
                this.onWheel = t=>{
                    let {deltaX: e, deltaY: i} = t;
                    this.normalizeWheel && (e = kt(-100, e, 100),
                    i = kt(-100, i, 100)),
                    e *= this.wheelMultiplier,
                    i *= this.wheelMultiplier,
                    this.emitter.emit("scroll", {
                        type: "wheel",
                        deltaX: e,
                        deltaY: i,
                        event: t
                    })
                }
                ,
                this.element = t,
                this.wheelMultiplier = e,
                this.touchMultiplier = i,
                this.normalizeWheel = s,
                this.touchStart = {
                    x: null,
                    y: null
                },
                this.emitter = Lt(),
                this.element.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.element.addEventListener("touchstart", this.onTouchStart, {
                    passive: !1
                }),
                this.element.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }),
                this.element.addEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                })
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            destroy() {
                this.emitter.events = {},
                this.element.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.element.removeEventListener("touchstart", this.onTouchStart, {
                    passive: !1
                }),
                this.element.removeEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }),
                this.element.removeEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                })
            }
        }
        class Tt {
            constructor({direction: t, gestureDirection: e, mouseMultiplier: i, smooth: s, wrapper: n=window, content: r=document.documentElement, wheelEventsTarget: o=n, smoothWheel: l=null == s || s, smoothTouch: a=!1, syncTouch: c=!1, syncTouchLerp: h=.1, touchInertiaMultiplier: u=35, duration: d, easing: p=(t=>Math.min(1, 1.001 - Math.pow(2, -10 * t))), lerp: m=(d ? null : .1), infinite: v=!1, orientation: f=(null != t ? t : "vertical"), gestureOrientation: w=(null != e ? e : "vertical"), touchMultiplier: _=1, wheelMultiplier: g=(null != i ? i : 1), normalizeWheel: b=!1, autoResize: y=!0}={}) {
                this.onVirtualScroll = ({type: t, inertia: e, deltaX: i, deltaY: s, event: n})=>{
                    if (n.ctrlKey)
                        return;
                    const r = "touch" === t
                      , o = "wheel" === t;
                    if ("vertical" === this.options.gestureOrientation && 0 === s || "horizontal" === this.options.gestureOrientation && 0 === i || r && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && s <= 0)
                        return;
                    if (n.composedPath().find((t=>(null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")) || r && (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-touch")) || o && (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-wheel")))))
                        return;
                    if (this.isStopped || this.isLocked)
                        return void n.preventDefault();
                    if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && r || this.options.smoothWheel && o,
                    !this.isSmooth)
                        return this.isScrolling = !1,
                        void this.animate.stop();
                    n.preventDefault();
                    let l = s;
                    "both" === this.options.gestureOrientation ? l = Math.abs(s) > Math.abs(i) ? s : i : "horizontal" === this.options.gestureOrientation && (l = i);
                    const a = r && this.options.syncTouch
                      , c = r && e && Math.abs(l) > 1;
                    c && (l = this.velocity * this.options.touchInertiaMultiplier),
                    this.scrollTo(this.targetScroll + l, Mt({
                        programmatic: !1
                    }, a && {
                        lerp: c ? this.syncTouchLerp : .4
                    }))
                }
                ,
                this.onScroll = ()=>{
                    if (!this.isScrolling) {
                        const t = this.animatedScroll;
                        this.animatedScroll = this.targetScroll = this.actualScroll,
                        this.velocity = 0,
                        this.direction = Math.sign(this.animatedScroll - t),
                        this.emit()
                    }
                }
                ,
                t && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),
                e && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),
                i && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),
                s && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),
                window.lenisVersion = "1.0.15",
                n !== document.documentElement && n !== document.body || (n = window),
                this.options = {
                    wrapper: n,
                    content: r,
                    wheelEventsTarget: o,
                    smoothWheel: l,
                    smoothTouch: a,
                    syncTouch: c,
                    syncTouchLerp: h,
                    touchInertiaMultiplier: u,
                    duration: d,
                    easing: p,
                    lerp: m,
                    infinite: v,
                    gestureOrientation: w,
                    orientation: f,
                    touchMultiplier: _,
                    wheelMultiplier: g,
                    normalizeWheel: b,
                    autoResize: y
                },
                this.dimensions = new Et({
                    wrapper: n,
                    content: r,
                    autoResize: y
                }),
                this.rootElement.classList.add("lenis"),
                this.velocity = 0,
                this.isStopped = !1,
                this.isSmooth = l || a,
                this.isScrolling = !1,
                this.targetScroll = this.animatedScroll = this.actualScroll,
                this.animate = new jt,
                this.emitter = Lt(),
                this.options.wrapper.addEventListener("scroll", this.onScroll, {
                    passive: !1
                }),
                this.virtualScroll = new Wt(o,{
                    touchMultiplier: _,
                    wheelMultiplier: g,
                    normalizeWheel: b
                }),
                this.virtualScroll.on("scroll", this.onVirtualScroll)
            }
            destroy() {
                this.emitter.events = {},
                this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                    passive: !1
                }),
                this.virtualScroll.destroy(),
                this.dimensions.destroy(),
                this.rootElement.classList.remove("lenis"),
                this.rootElement.classList.remove("lenis-smooth"),
                this.rootElement.classList.remove("lenis-scrolling"),
                this.rootElement.classList.remove("lenis-stopped")
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            off(t, e) {
                var i;
                this.emitter.events[t] = null == (i = this.emitter.events[t]) ? void 0 : i.filter((t=>e !== t))
            }
            setScroll(t) {
                this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
            }
            resize() {
                this.dimensions.resize()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            reset() {
                this.isLocked = !1,
                this.isScrolling = !1,
                this.velocity = 0,
                this.animate.stop()
            }
            start() {
                this.isStopped = !1,
                this.reset()
            }
            stop() {
                this.isStopped = !0,
                this.animate.stop(),
                this.reset()
            }
            raf(t) {
                const e = t - (this.time || t);
                this.time = t,
                this.animate.advance(.001 * e)
            }
            scrollTo(t, {offset: e=0, immediate: i=!1, lock: s=!1, duration: n=this.options.duration, easing: r=this.options.easing, lerp: o=!n && this.options.lerp, onComplete: l=null, force: a=!1, programmatic: c=!0}={}) {
                if (!this.isStopped || a) {
                    if (["top", "left", "start"].includes(t))
                        t = 0;
                    else if (["bottom", "right", "end"].includes(t))
                        t = this.limit;
                    else {
                        var h;
                        let i;
                        if ("string" == typeof t ? i = document.querySelector(t) : null != (h = t) && h.nodeType && (i = t),
                        i) {
                            if (this.options.wrapper !== window) {
                                const t = this.options.wrapper.getBoundingClientRect();
                                e -= this.isHorizontal ? t.left : t.top
                            }
                            const s = i.getBoundingClientRect();
                            t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                        }
                    }
                    if ("number" == typeof t) {
                        if (t += e,
                        t = Math.round(t),
                        this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = kt(0, t, this.limit),
                        i)
                            return this.animatedScroll = this.targetScroll = t,
                            this.setScroll(this.scroll),
                            this.reset(),
                            this.emit(),
                            void (null == l || l());
                        if (!c) {
                            if (t === this.targetScroll)
                                return;
                            this.targetScroll = t
                        }
                        this.animate.fromTo(this.animatedScroll, t, {
                            duration: n,
                            easing: r,
                            lerp: o,
                            onUpdate: (t,{completed: e})=>{
                                s && (this.isLocked = !0),
                                this.isScrolling = !0,
                                this.velocity = t - this.animatedScroll,
                                this.direction = Math.sign(this.velocity),
                                this.animatedScroll = t,
                                this.setScroll(this.scroll),
                                c && (this.targetScroll = t),
                                e && (s && (this.isLocked = !1),
                                requestAnimationFrame((()=>{
                                    this.isScrolling = !1
                                }
                                )),
                                this.velocity = 0,
                                null == l || l()),
                                this.emit()
                            }
                        })
                    }
                }
            }
            get rootElement() {
                return this.options.wrapper === window ? this.options.content : this.options.wrapper
            }
            get limit() {
                return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
            }
            get isHorizontal() {
                return "horizontal" === this.options.orientation
            }
            get actualScroll() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
            }
            get scroll() {
                return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
                var t
            }
            get progress() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isSmooth() {
                return this.__isSmooth
            }
            set isSmooth(t) {
                this.__isSmooth !== t && (this.rootElement.classList.toggle("lenis-smooth", t),
                this.__isSmooth = t)
            }
            get isScrolling() {
                return this.__isScrolling
            }
            set isScrolling(t) {
                this.__isScrolling !== t && (this.rootElement.classList.toggle("lenis-scrolling", t),
                this.__isScrolling = t)
            }
            get isStopped() {
                return this.__isStopped
            }
            set isStopped(t) {
                this.__isStopped !== t && (this.rootElement.classList.toggle("lenis-stopped", t),
                this.__isStopped = t)
            }
        }
        var At = i(5005)
          , Ct = i(2177)
          , Nt = i(5097)
          , zt = i(1688)
          , Rt = i(5461)
          , Ht = i(1536)
          , It = i(1163)
          , Ot = i(7496);
        function Pt(t) {
            return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        }
        var Dt = t=>{
            let {articles: e} = t;
            const i = (0,
            vt.useContext)(Ot.j)
              , n = (0,
            It.useRouter)()
              , {asPath: r} = n
              , [o,l] = (0,
            vt.useState)(!0)
              , [a,c] = (0,
            vt.useState)(0)
              , [h,u] = (0,
            vt.useState)(null)
              , [d,p] = (0,
            vt.useState)(0)
              , [m,v] = (0,
            vt.useState)(!1)
              , [f,w] = (0,
            vt.useState)(!1)
              , _ = (0,
            vt.useRef)(null)
              , g = (0,
            vt.useRef)(null)
              , b = (0,
            vt.useRef)()
              , y = (0,
            vt.useRef)()
              , x = (0,
            vt.useRef)()
              , S = (0,
            vt.useRef)([]);
            S.current = e.map(((t,e)=>S.current[e] || (0,
            vt.createRef)()));
            const M = (0,
            vt.useRef)([]);
            M.current = e.map(((t,e)=>M.current[e] || (0,
            vt.createRef)()));
            const k = e.map(((t,e)=>e + 1))
              , j = (0,
            vt.useCallback)((t=>{
                location.hash = e[t].name,
                c(t)
            }
            ), [e]);
            (0,
            vt.useEffect)((()=>{
                const t = setTimeout((()=>{
                    !1 !== o ? v(!0) : w(!1)
                }
                ), 1e3);
                return ()=>{
                    clearTimeout(t)
                }
            }
            ), [o]);
            const L = (0,
            vt.useCallback)((function(t) {
                let {immediate: e=!1, easing: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t !== a && (w(!0),
                setTimeout((()=>{
                    w(!1)
                }
                ), 800),
                _.current ? _.current.scrollToArticle(t, {
                    immediate: e,
                    easing: i
                }) : g.current && g.current.scrollToArticle(t))
            }
            ), [a]);
            (0,
            vt.useEffect)((()=>{
                var t;
                const e = null === (t = b.current) || void 0 === t ? void 0 : t.querySelectorAll('a[href],button,audio,[tabindex]:not([tabindex="-1"])');
                function i(t) {
                    const e = t.target;
                    if (document.querySelector("[data-layout]").scrollLeft = 0,
                    !function(t) {
                        return S.current[a].current.contains(t)
                    }(e)) {
                        const t = function(t) {
                            return S.current.findIndex((e=>e.current.contains(t)))
                        }(e);
                        L(t)
                    }
                }
                return e.forEach((t=>{
                    t.addEventListener("focus", i)
                }
                )),
                ()=>{
                    e.forEach((t=>{
                        t.removeEventListener("focus", i)
                    }
                    ))
                }
            }
            ), [a, L, b]),
            (0,
            vt.useEffect)((()=>{
                function t() {
                    window.innerWidth <= 800 ? u(!0) : u(!1)
                }
                return window.addEventListener("resize", t),
                t(),
                ()=>{
                    window.removeEventListener("resize", t)
                }
            }
            ), []),
            (0,
            vt.useEffect)((()=>{
                const t = S.current.map((t=>t.current))
                  , e = M.current.map((t=>t.current));
                function i() {
                    null != _.current && (_.current.unmount(),
                    _.current = null)
                }
                function s() {
                    null != g.current && (g.current.unmount(),
                    g.current = null)
                }
                return !0 === h && (i(),
                g.current instanceof E || (g.current = new E({
                    articlesEls: t,
                    articlesContentEls: e,
                    initialActiveId: d,
                    introEl: x.current,
                    scrollContainer: b.current,
                    setActiveId: j,
                    stuckCls: Rt.articleStuck,
                    onReady: ()=>l(!1)
                }),
                g.current.mount())),
                !1 === h && (s(),
                function() {
                    if (_.current instanceof ot)
                        return;
                    const i = new Tt({
                        orientation: "vertical",
                        wrapper: b.current,
                        content: y.current,
                        duration: 1.2
                    })
                      , s = new ot({
                        articlesContentEls: e,
                        articlesEls: t,
                        initialActiveId: d,
                        scrollContainer: b.current,
                        scroller: i,
                        isMovingHorizontalCls: Rt.isMovingHorizontal,
                        setActiveId: t=>{
                            h || j(t)
                        }
                        ,
                        spacer: y.current,
                        mobileBreakpoint: 800,
                        onReady: ()=>l(!1)
                    });
                    s.mount(),
                    _.current = s
                }()),
                ()=>{
                    i(),
                    s()
                }
            }
            ), [h, d, j]);
            const W = (0,
            vt.useCallback)((()=>{
                0 !== a && L(a - 1, {
                    easing: Pt
                })
            }
            ), [a, L])
              , T = (0,
            vt.useCallback)((()=>{
                a !== e.length - 1 && L(a + 1, {
                    easing: Pt
                })
            }
            ), [a, e, L]);
            return (0,
            vt.useEffect)((()=>{
                const t = r.split("#")[1];
                if (void 0 === t)
                    return;
                const i = e.findIndex((e=>{
                    let {name: i} = e;
                    return i === t
                }
                ));
                p(i)
            }
            ), [r, e]),
            (0,
            vt.useEffect)((()=>{
                function t(t) {
                    h || ("ArrowLeft" === t.key && W(),
                    "ArrowRight" === t.key && T())
                }
                return window.addEventListener("keydown", t),
                ()=>{
                    window.removeEventListener("keydown", t)
                }
            }
            ), [T, W, h]),
            (0,
            vt.useEffect)((()=>{
                if (!(b.current instanceof HTMLElement))
                    return;
                [...b.current.querySelectorAll('a[href^="#"]')].forEach((t=>{
                    t.addEventListener("click", (i=>{
                        i.preventDefault();
                        const s = t.getAttribute("href").split("#")[1]
                          , n = e.findIndex((t=>{
                            let {name: e} = t;
                            return e === s
                        }
                        ));
                        L(n, {
                            easing: Pt
                        })
                    }
                    ))
                }
                ))
            }
            ), [b, e, L]),
            (0,
            s.jsxs)("div", {
                className: (0,
                _t.y)(h && Rt.isMobile, o && Rt.isLoading, f && Rt.isShaded),
                children: [(0,
                s.jsx)("h1", {
                    className: "visually-hidden",
                    children: i.h1
                }), (0,
                s.jsx)(St.Z, {}), (0,
                s.jsx)(Ht.q, {
                    isVisible: o && m
                }), (0,
                s.jsxs)("div", {
                    ref: b,
                    className: Rt.wrapper,
                    children: [(0,
                    s.jsx)("div", {
                        className: Rt.intro,
                        ref: x,
                        children: (0,
                        s.jsx)("img", {
                            src: "/img/about-intro-circles.svg",
                            alt: "Abstract intro illustration",
                            className: Rt.introImg,
                            width: "360",
                            height: "800"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: Rt.articles,
                        children: e.map(((t,e)=>(0,
                        s.jsx)("article", {
                            className: (0,
                            _t.y)(Rt.article, a === e && Rt.articleActive),
                            ref: S.current[e],
                            onClick: ()=>(t=>{
                                h || L(t, {
                                    easing: Pt
                                })
                            }
                            )(e),
                            children: (0,
                            s.jsx)("div", {
                                className: Rt.articleContent,
                                ref: M.current[e],
                                children: (0,
                                s.jsx)(yt, {
                                    article: t,
                                    isMobile: h
                                })
                            })
                        }, e)))
                    }), (0,
                    s.jsx)("div", {
                        ref: y,
                        className: Rt.spacer
                    })]
                }), (0,
                s.jsx)(Nt.Z, {
                    slides: k,
                    activeId: a,
                    onClick: t=>L(t)
                }), (0,
                s.jsxs)(xt.Z, {
                    children: [(0,
                    s.jsx)(At.Z, {
                        onClick: W,
                        disabled: 0 === a,
                        children: i.prev_btn
                    }), (0,
                    s.jsx)(zt.Z, {
                        options: e.map(((t,e)=>({
                            name: t.name,
                            value: e
                        }))),
                        value: a,
                        onChange: t=>L(t)
                    }), (0,
                    s.jsx)(Ct.Z, {
                        onClick: T,
                        disabled: a === e.length - 1,
                        children: i.next_btn
                    })]
                })]
            })
        }
          , Bt = i(9008);
        i(7441).TU.use({
            silent: !0
        });
        var Zt = !0;
        function qt(t) {
            let {articles: e, t: i={}} = t;
            const n = (0,
            It.useRouter)().asPath.split("#")[1] || ""
              , r = i.meta_title
              , o = i.meta_description.replace(/\n+/g, " ");
            return (0,
            s.jsxs)(Ot.P, {
                value: i,
                children: [(0,
                s.jsxs)(Bt, {
                    children: [(0,
                    s.jsx)("title", {
                        children: r
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: o
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:title",
                        content: r
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:description",
                        content: o
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:image",
                        content: "https://halfof8.com/img/halfof8_og_about.jpeg"
                    })]
                }), (0,
                s.jsx)(Dt, {
                    articles: e,
                    hash: n
                })]
            })
        }
    },
    4725: function(t, e, i) {
        "use strict";
        i.d(e, {
            _: function() {
                return n
            }
        });
        var s = i(3754);
        function n(t, e) {
            let {wordCls: i, delay: n=0} = e;
            return (0,
            s.A)(t, {
                wordCls: i,
                getWordStyle: t=>"transition-delay: ".concat(n + Math.floor(100 * Math.sqrt(t)), "ms")
            })
        }
    }
}, function(t) {
    t.O(0, [152, 415, 774, 888, 179], (function() {
        return e = 512,
        t(t.s = e);
        var e
    }
    ));
    var e = t.O();
    _N_E = e
}
]);
