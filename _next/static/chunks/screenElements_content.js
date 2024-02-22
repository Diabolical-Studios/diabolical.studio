(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[416], {
    5241: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return o
            }
        });
        var s = n(5893)
          , i = n(1882)
          , r = n.n(i);
        function o(t) {
            let {children: e} = t;
            return (0,
            s.jsx)("div", {
                className: r().controls,
                children: e
            })
        }
    },
    3782: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return l
            }
        });
        var s = n(5893)
          , i = n(7294)
          , r = n(5776)
          , o = n.n(r);
        class a {
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
                    for (let n = 0; n < this.numDots; n++)
                        t = {},
                        t.x = e + this.GAP * (n % this.cols),
                        t.y = e + this.GAP * Math.floor(n / this.cols),
                        this.dots[n] = t
                }
                ,
                this.render = ()=>{
                    if (!window)
                        return;
                    let t, e, n;
                    const s = (t = this.ctx.createImageData(this.w, this.h)).data;
                    for (let i = 0; i < this.numDots; i++)
                        e = this.dots[i],
                        n = 4 * (e.x + e.y * this.w),
                        s[n] = s[n + 1] = s[n + 2] = this.COLOR,
                        s[n + 3] = this.ALPHA;
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
        var c = n(4751);
        function h() {
            const t = (0,
            i.useRef)(null)
              , e = (0,
            i.useRef)(null)
              , [n,r] = (0,
            i.useState)(!1);
            return (0,
            i.useEffect)((()=>{
                const n = t.current;
                return e.current = new a(n),
                r(!0),
                ()=>{
                    e.current.unmount()
                }
            }
            ), []),
            (0,
            s.jsx)("canvas", {
                className: (0,
                c.y)(o().canvas, n && o().ready),
                ref: t
            })
        }
        var l = (0,
        i.memo)(h)
    },
    131: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return a
            }
        });
        var s = n(5893)
          , i = n(6318)
          , r = n.n(i)
          , o = n(4751);
        function a(t) {
            let {icon: e, style: n, disabled: i=!1} = t;
            const a = Object.assign({}, n, {
                backgroundImage: "url(/icons/".concat(e, ")")
            });
            return (0,
            s.jsx)("span", {
                className: (0,
                o.y)(r().navBtnIcon, i && r().isDisabled),
                style: a
            })
        }
    },
    5005: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return c
            }
        });
        var s = n(5893)
          , i = n(975)
          , r = n.n(i)
          , o = n(131)
          , a = n(4751);
        function c(t) {
            let {children: e, className: n, onClick: i, disabled: c=!1} = t;
            return (0,
            s.jsxs)("button", {
                className: (0,
                a.y)(r().navLeft, n),
                onClick: i,
                disabled: c,
                children: [(0,
                s.jsx)(o.Z, {
                    icon: "arrow-right.svg",
                    style: {
                        transform: "rotate(180deg)"
                    },
                    disabled: c
                }), (0,
                s.jsx)("span", {
                    className: r().text,
                    children: e
                })]
            })
        }
    },
    2177: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return c
            }
        });
        var s = n(5893)
          , i = n(7733)
          , r = n.n(i)
          , o = n(131)
          , a = n(4751);
        function c(t) {
            let {children: e, className: n, onClick: i, disabled: c=!1} = t;
            return (0,
            s.jsxs)("button", {
                className: (0,
                a.y)(r().navRight, n),
                onClick: i,
                disabled: c,
                children: [(0,
                s.jsx)("span", {
                    className: r().text,
                    children: e
                }), (0,
                s.jsx)(o.Z, {
                    icon: "arrow-right.svg",
                    disabled: c
                })]
            })
        }
    },
    5097: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return h
            }
        });
        var s = n(5893)
          , i = n(3498)
          , r = n.n(i)
          , o = n(4751)
          , a = n(7294)
          , c = n(7496);
        function h(t) {
            let {slides: e=[], activeId: n=0, onClick: i, disabled: h=!1} = t;
            const l = (0,
            a.useContext)(c.j)
              , u = e.map(((t,e)=>e + 1))
              , d = Array.from({
                length: 3
            }, ((t,e)=>u.length + e)).concat(u);
            return (0,
            s.jsxs)("div", {
                className: (0,
                o.y)(r().pagination, h && r().disabled),
                children: [(0,
                s.jsx)("div", {
                    className: r().screen
                }), (0,
                s.jsx)("div", {
                    className: r().slider,
                    style: {
                        transform: "translateX(".concat(-24 * (n + 3), "px)")
                    },
                    children: d.map(((t,e)=>{
                        const a = e - 3
                          , c = n > e || n < e - 6;
                        return e < 3 ? (0,
                        s.jsx)("span", {
                            className: (0,
                            o.y)(r().slide, r().slideGhost, c && r().hidden)
                        }, e) : (0,
                        s.jsx)("button", {
                            tabIndex: h ? -1 : 0,
                            className: (0,
                            o.y)(r().slide, a === n && r().slideActive, c && r().hidden),
                            onClick: ()=>i(a),
                            "aria-label": "".concat(l.pagination_btn, " ").concat(a + 1),
                            children: a + 1
                        }, e)
                    }
                    ))
                })]
            })
        }
    },
    1688: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return h
            }
        });
        var s = n(5893)
          , i = n(9468)
          , r = n(9453)
          , o = n.n(r)
          , a = n(4751)
          , c = n(7294);
        function h(t) {
            let {options: e, value: n, onChange: r, disabled: h=!1, style: l={}} = t;
            return (0,
            s.jsx)("div", {
                className: o().container,
                style: l,
                children: (0,
                s.jsxs)(i.R, {
                    value: n,
                    onChange: r,
                    disabled: h,
                    children: [(0,
                    s.jsx)(i.R.Button, {
                        className: o().button,
                        children: (0,
                        s.jsxs)("span", {
                            className: o().buttonInner,
                            children: [(0,
                            s.jsx)("span", {
                                className: o().buttonText,
                                children: e[n].name
                            }), (0,
                            s.jsx)("span", {
                                className: o().arrow
                            })]
                        })
                    }), (0,
                    s.jsx)(i.R.Options, {
                        className: o().options,
                        children: e.map(((t,e)=>(0,
                        s.jsx)(i.R.Option, {
                            value: e,
                            as: c.Fragment,
                            children: e=>{
                                let {active: n} = e;
                                return (0,
                                s.jsx)("li", {
                                    className: (0,
                                    a.y)(o().option, n && o().optionActive),
                                    children: t.name
                                })
                            }
                        }, e)))
                    })]
                })
            })
        }
    },
    1882: function(t) {

    },
    5776: function(t) {

    },
    6318: function(t) {

    },
    975: function(t) {

    },
    7733: function(t) {

    },
    3498: function(t) {

    },
    7038: function(t) {
        /* t.exports = {
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
        } */
    },
    9453: function(t) {
    },
    3829: function(t, e) {
        "use strict";
        e.Z = "#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
    },
    884: function(t, e) {
        "use strict";
        e.Z = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nuniform float uTime;\nuniform float uAlpha;\n\nfloat cubicPulse(float c, float w, float x) {\n\tx = abs(x - c);\n\tif (x > w) return 0.0;\n\tx /= w;\n\treturn 1.0 - x * x * (3.0 - 2.0 * x);\n}\n\nvoid main() {\n\tfloat width = 0.9;\n\tfloat progress = mod(uTime, 2.0);\n\tfloat center = progress * (1.0 + 2.0 * width) - width;\n\tfloat y = cubicPulse(center, width, vUv.x);\n\n\tvec3 color = vec3(0.083 + y * 0.06);\n\tgl_FragColor = vec4(color, uAlpha);\n}\n"
    },
    1536: function(t, e, n) {
        "use strict";
        n.d(e, {
            q: function() {
                return l
            }
        });
        var s = n(5893)
          , i = n(4751)
          , r = n(7038)
          , o = n(1526)
          , a = n(4267)
          , c = n(7294);
        const h = t=>{
            let {className: e} = t;
            return (0,
            s.jsx)("div", {
                className: (0,
                i.y)(r.container, e),
                children: Array.from({
                    length: r.NUM_LINES
                }).map(((t,e)=>(0,
                s.jsx)("div", {
                    className: (0,
                    i.y)(r.ray, r["ray".concat(e)])
                }, e)))
            })
        }
          , l = (0,
        c.memo)((t=>{
            let {isVisible: e=!0} = t;
            return (0,
            s.jsx)(o.M, {
                children: e && (0,
                s.jsx)(a.m.div, {
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
                    s.jsx)(h, {})
                })
            })
        }
        ));
        l.displayName = "RaySpinnerWithAnimatePresence"
    },
    7496: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return r
            },
            j: function() {
                return i
            }
        });
        var s = n(5893);
        const i = (0,
        n(7294).createContext)({})
          , r = t=>{
            let {children: e, value: n} = t;
            return (0,
            s.jsx)(i.Provider, {
                value: n,
                children: e
            })
        }
    },
    5972: function(t, e, n) {
        "use strict";
        n.d(e, {
            e: function() {
                return r
            }
        });
        var s = n(7294)
          , i = n(3374);
        const r = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 350;
            const [e,n] = (0,
            s.useState)(0);
            return (0,
            s.useEffect)((()=>{
                if (!window)
                    return;
                const e = (0,
                i.P)((()=>n((t=>t + 1))), t);
                return window.addEventListener("resize", e),
                ()=>{
                    window.removeEventListener("resize", e)
                }
            }
            ), [t]),
            e
        }
    },
    732: function(t, e, n) {
        "use strict";
        n.d(e, {
            k: function() {
                return s
            }
        });
        const s = t=>0 === t.button || t.touches
    },
    5503: function(t, e, n) {
        "use strict";
        n.d(e, {
            g: function() {
                return s
            }
        });
        const s = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            const e = t.length ? "#" + t : t
              , n = location.pathname + e + location.search;
            history.replaceState({
                ...history.state,
                as: n,
                url: n
            }, "", n),
            window.dispatchEvent(new HashChangeEvent("hashchange"))
        }
    },
    1832: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            drag: function() {
                return i
            },
            dragPicture: function() {
                return r
            },
            opacity: function() {
                return u
            },
            resetRotation: function() {
                return h
            },
            rotation: function() {
                return c
            },
            snapOnClick: function() {
                return a
            },
            snapOnDragEnd: function() {
                return o
            },
            zoom: function() {
                return l
            }
        });
        const s = {
            type: "spring",
            restDelta: .0075,
            mass: 5,
            damping: 40,
            stiffness: 250
        }
          , i = {
            ...s
        }
          , r = {
            type: "spring",
            restDelta: .0075,
            mass: 4,
            damping: 40,
            stiffness: 250
        }
          , o = {
            ...s
        }
          , a = {
            ...s,
            mass: 5.8,
            damping: 80,
            stiffness: 420
        }
          , c = {
            ...s,
            mass: 1,
            damping: 100,
            stiffness: 500
        }
          , h = {
            ...c
        }
          , l = {
            ...s,
            mass: 5.2,
            damping: 120,
            stiffness: 610
        }
          , u = {
            type: "tween",
            duration: .6
        }
    },
    7756: function(t, e, n) {
        "use strict";
        n.d(e, {
            l: function() {
                return l
            },
            n: function() {
                return c
            }
        });
        const s = {
            x: "x",
            y: "y",
            z: "z",
            0: "x",
            1: "y",
            2: "z"
        }
          , i = t=>s[t];
        var r = n(3023);
        const o = new WeakMap
          , a = t=>{
            const e = o.get(t);
            if (!e) {
                const e = (t=>{
                    const e = {
                        x: (0,
                        r.B)(t.x),
                        y: (0,
                        r.B)(t.y)
                    };
                    return "number" === typeof t.z && (e.z = (0,
                    r.B)(t.z)),
                    Object.keys(e).forEach((n=>{
                        e[n].on("change", (e=>{
                            t[n] = e
                        }
                        ))
                    }
                    )),
                    e
                }
                )(t);
                return o.set(t, e),
                e
            }
            return e
        }
          , c = (t,e)=>{
            const n = a(t);
            Object.entries(e).forEach((t=>{
                let[e,s] = t;
                n[i(e)].jump(s)
            }
            ))
        }
        ;
        var h = n(3775);
        const l = (t,e,n)=>{
            let s = 0;
            const r = ()=>{
                var t;
                Object.keys(e).length > ++s || "function" === typeof (null === (t = n) || void 0 === t ? void 0 : t.onComplete) && n.onComplete()
            }
              , o = a(t);
            Object.entries(e).forEach((t=>{
                let[e,s] = t;
                (0,
                h.j)(o[i(e)], s, {
                    ...n,
                    onComplete: r
                })
            }
            ))
        }
    },
    4662: function(t, e, n) {
        "use strict";
        n.d(e, {
            I: function() {
                return f
            }
        });
        var s = n(5344)
          , i = n(3568)
          , r = n(1927)
          , o = n(9362)
          , a = n(421)
          , c = n(6850)
          , h = n(732);
        class l {
            stopPropagation() {
                this.propagationStopped = !0
            }
            constructor(t, e={}) {
                this.type = t,
                Object.assign(this, e),
                this.propagationStopped = !1
            }
        }
        class u {
            add() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                e.forEach((t=>{
                    this._targets.add(t)
                }
                )),
                this._targetsArray = Array.from(this._targets)
            }
            remove() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                e.forEach((t=>{
                    this._targets.delete(t)
                }
                )),
                this._targetsArray = Array.from(this._targets)
            }
            _setup() {
                this.context.on("destroy", this.destroy),
                this._instance = new a.Q(this.context.gl),
                this.context.canvas.addEventListener("pointermove", this._handlePointermove),
                this.context.canvas.addEventListener("pointerdown", this._handlePointerdown),
                this.context.canvas.addEventListener("pointerup", this._handlePointerup)
            }
            _emitEvent(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const s = {
                    target: e,
                    position: this._pointer,
                    localPosition: e.hit.localPoint
                }
                  , i = new l(t,Object.assign(n, s));
                this._bubble(e, i)
            }
            _bubble(t, e) {
                let n = t;
                for (; n && !e.propagationStopped; )
                    "function" === typeof n.emit && (e.currentTarget = n,
                    n.emit && n.emit(e.type, e)),
                    n = n.parent
            }
            constructor(t) {
                this.destroy = ()=>{
                    this.context.canvas.removeEventListener("pointermove", this._handlePointermove),
                    this.context.canvas.removeEventListener("pointerdown", this._handlePointerdown),
                    this.context.canvas.removeEventListener("pointerup", this._handlePointerup)
                }
                ,
                this.update = t=>{
                    const {width: e, height: n} = this.context;
                    this._pointer.set(t.clientX / e * 2 - 1, 2 * (1 - t.clientY / n) - 1),
                    this._instance.castMouse(this.context.camera, this._pointer),
                    this._intersects = this._instance.intersectMeshes(this._targetsArray)
                }
                ,
                this._handlePointermove = t=>{
                    this._pointerDelta.set(t.clientX, t.clientY).sub(this._pointerDownPosition),
                    this.update(t),
                    this._pointerDelta.squaredLen() > 4 && (this._clickedTarget = null);
                    const e = this._intersects[0];
                    this._hoverTarget && e !== this._hoverTarget && (this._emitEvent("pointerleave", this._hoverTarget, {
                        relatedTarget: e
                    }),
                    this._hoverTarget = null),
                    e && !this._hoverTarget && (this._emitEvent("pointerenter", e, {
                        relatedTarget: this._hoverTarget
                    }),
                    this._hoverTarget = e),
                    this._intersects.forEach((t=>{
                        const e = new l("pointermove",{
                            target: t,
                            position: this._pointer
                        });
                        this._bubble(t, e)
                    }
                    ))
                }
                ,
                this._handlePointerdown = t=>{
                    (0,
                    h.k)(t) && (this._pointerDownPosition.set(t.clientX, t.clientY),
                    this.update(t),
                    this._clickedTarget = this._intersects[0] || null,
                    this._intersects.forEach((t=>{
                        this._emitEvent("pointerdown", t)
                    }
                    )))
                }
                ,
                this._handlePointerup = t=>{
                    this._pointerDownPosition.set(0),
                    this._pointerDelta.set(0),
                    this.update(t),
                    this._intersects.forEach((t=>{
                        this._emitEvent("pointerup", t)
                    }
                    )),
                    this._clickedTarget && (this._emitEvent("click", this._clickedTarget),
                    this._clickedTarget = null)
                }
                ,
                this.context = t,
                this._instance = null,
                this._targets = new Set,
                this._targetsArray = [],
                this._hoverTarget = null,
                this._clickedTarget = null,
                this._pointer = new c.S,
                this._pointerDownPosition = new c.S,
                this._pointerDelta = new c.S,
                this._intersects = [],
                this._setup()
            }
        }
        class d {
            start() {
                this.startTime = p(),
                this.oldTime = this.startTime,
                this.elapsedTime = 0,
                this.running = !0
            }
            stop() {
                this.getElapsedTime(),
                this.running = !1,
                this.autoStart = !1
            }
            getElapsedTime() {
                return this.getDelta(),
                this.elapsedTime
            }
            getDelta() {
                let t = 0;
                if (this.autoStart && !this.running)
                    return this.start(),
                    0;
                if (this.running) {
                    const e = p();
                    t = (e - this.oldTime) / 1e3,
                    this.oldTime = e,
                    this.elapsedTime += t
                }
                return t
            }
            constructor(t=!0) {
                this.autoStart = t,
                this.startTime = 0,
                this.oldTime = 0,
                this.elapsedTime = 0,
                this.running = !1
            }
        }
        function p() {
            return ("undefined" === typeof performance ? Date : performance).now()
        }
        class f extends s.Z {
            start() {
                this._loop.start()
            }
            stop() {
                this._loop.stop()
            }
            render() {
                this.renderer.render({
                    scene: this.scene,
                    camera: this.camera
                })
            }
            destroy() {
                this.stop(),
                this.emit("destroy")
            }
            constructor(t) {
                super(),
                this._tick = ()=>{
                    const t = this.clock.getDelta();
                    for (const e of this.updatables)
                        !1 !== e.shouldUpdate && e.update(t);
                    this.renderer.render({
                        scene: this.scene,
                        camera: this.camera
                    })
                }
                ,
                this.canvas = t,
                this.width = window.innerWidth,
                this.height = window.innerHeight,
                this.isMob = window.matchMedia("(max-aspect-ratio: 3 / 4)").matches,
                this.renderer = new i.T({
                    canvas: t,
                    dpr: window.devicePixelRatio,
                    antialias: !0,
                    alpha: !0,
                    premultipliedAlpha: !0
                }),
                this.renderer.setSize(this.width, this.height),
                this.gl = this.renderer.gl,
                this.scene = new r.w,
                this.camera = new o.V(this.gl,{
                    fov: 45,
                    aspect: this.width / this.height
                }),
                this.clock = new d,
                this._loop = (t=>{
                    let e = null;
                    const n = ()=>{
                        e = requestAnimationFrame(n),
                        t()
                    }
                    ;
                    return {
                        start: ()=>{
                            null === e && (e = requestAnimationFrame(n))
                        }
                        ,
                        stop: ()=>{
                            cancelAnimationFrame(e),
                            e = null
                        }
                    }
                }
                )(this._tick),
                this.updatables = [],
                this.raycaster = new u(this)
            }
        }
    },
    6424: function(t, e, n) {
        "use strict";
        n.d(e, {
            F: function() {
                return s
            }
        });
        class s {
            set size(t) {
                const e = t.x || t.width
                  , n = t.y || t.height;
                this.width = e,
                this.height = n,
                this.left = -e / 2,
                this.right = e / 2,
                this.bottom = -n / 2,
                this.top = n / 2
            }
            constructor(t) {
                t && (this.size = t)
            }
        }
    },
    1973: function(t, e, n) {
        "use strict";
        n.d(e, {
            q: function() {
                return i
            }
        });
        var s = n(1945);
        class i {
            check(t) {
                const e = this.constraints
                  , n = this._getWorldPosition(t)
                  , s = n.x - e.left
                  , i = e.right - n.x
                  , r = n.y - e.bottom
                  , o = e.top - n.y;
                return {
                    constraints: e,
                    transform: t,
                    isInside: s > 0 && i > 0 && r > 0 && o > 0,
                    left: s,
                    right: i,
                    bottom: r,
                    top: o
                }
            }
            _getWorldPosition(t) {
                this._bufferVec.set(0);
                let e = t;
                for (; e; )
                    this._bufferVec.add(e.position),
                    e = e.parent;
                return this._bufferVec
            }
            constructor(t) {
                this.constraints = t,
                this._bufferVec = new s.A
            }
        }
    },
    5364: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return r
            }
        });
        var s = n(7756)
          , i = n(1973);
        class r {
            fit(t) {
                const e = this._checker.check(t);
                if (e.left < 0) {
                    const e = t.position.x + this.constraints.width;
                    (0,
                    s.n)(t.position, {
                        x: e
                    })
                }
                if (e.right < 0) {
                    const e = t.position.x - this.constraints.width;
                    (0,
                    s.n)(t.position, {
                        x: e
                    })
                }
                if (e.bottom < 0) {
                    const e = t.position.y + this.constraints.height;
                    (0,
                    s.n)(t.position, {
                        y: e
                    })
                }
                if (e.top < 0) {
                    const e = t.position.y - this.constraints.height;
                    (0,
                    s.n)(t.position, {
                        y: e
                    })
                }
            }
            constructor({constraints: t, pictures: e}) {
                this.update = ()=>{
                    this.pictures.forEach((t=>this.fit(t)))
                }
                ,
                this.constraints = t,
                this.pictures = e,
                this._checker = new i.q(t)
            }
        }
    },
    5344: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return s
            },
            m: function() {
                return i
            }
        });
        class s {
            on(t, e) {
                this.events[t] || (this.events[t] = []),
                this.events[t].push(e)
            }
            once(t, e) {
                var n = this;
                const s = function() {
                    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
                        r[o] = arguments[o];
                    e(...r),
                    n.off(t, s)
                };
                this.on(t, s)
            }
            emit(t, e) {
                this.events[t] && this.events[t].forEach((t=>t.call(null, e)))
            }
            off(t, e) {
                this.events[t] && (this.events[t] = this.events[t].filter((t=>t !== e)))
            }
            constructor() {
                this.events = {}
            }
        }
        const i = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s;
            t.on = (t,n)=>e.on(t, n),
            t.once = (t,n)=>e.once(t, n),
            t.off = (t,n)=>e.off(t, n),
            t.emit = (t,n)=>e.emit(t, n)
        }
    },
    7229: function(t, e, n) {
        "use strict";
        n.d(e, {
            a: function() {
                return c
            }
        });
        var s = n(1927)
          , i = n(4937)
          , r = n(7032)
          , o = n(2142)
          , a = n(3829);
        class c extends s.w {
            get opacity() {
                return this._opacity
            }
            set opacity(t) {
                0 === t ? this.visible = !1 : this.visible || (this.visible = !0),
                this._opacity = t,
                this.program.uniforms.uAlpha.value = t
            }
            setup(t, e) {
                this.gl = t;
                const n = new i.x(t,{
                    generateMipmaps: !1,
                    premultiplyAlpha: !0
                })
                  , s = new r.$(t,{
                    depthTest: !0,
                    depthWrite: !0,
                    fragment: "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 tex = texture2D(tMap, vUv);\n\tgl_FragColor = tex;\n}\n",
                    vertex: a.Z,
                    uniforms: {
                        tMap: {
                            value: n
                        },
                        uAlpha: {
                            value: this.alpha
                        }
                    },
                    transparent: !0
                })
                  , c = new o.K(t,{
                    geometry: e,
                    program: s
                });
                c.setParent(this),
                this.texture = n,
                this.program = s,
                this.mesh = c
            }
            load() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.src;
                if (this.loaded && this.src === t)
                    return;
                const e = new Image;
                e.crossOrigin = "anonymous",
                e.src = t,
                e.onload = ()=>{
                    this.texture.image = e,
                    this.loaded = !0,
                    this.onLoad()
                }
                ,
                this.src = t,
                this.image = e
            }
            onLoad() {}
            constructor() {
                super(),
                this.gl = null,
                this._opacity = 1,
                this.loaded = !1
            }
        }
    },
    1124: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return r
            }
        });
        var s = n(2796)
          , i = n(5344);
        class r extends i.Z {
            resetWheel() {
                this.wheel.x = 0,
                this.wheel.y = 0
            }
            constructor({spinThreshold: t=.15, pixelThreshold: e=330}={}) {
                super(),
                this.onWheel = t=>{
                    const {spinY: e, pixelY: n, pixelX: i, spinX: r} = s(t)
                      , o = Math.abs(i) > Math.abs(n) ? "x" : "y"
                      , a = "x" === o ? r : e
                      , c = "x" === o ? i : n;
                    if (Math.abs(a) < this.spinThreshold)
                        return;
                    const h = c / Math.abs(c);
                    h !== this.wheel[o] / Math.abs(this.wheel[o]) && this.resetWheel(),
                    this.wheel[o] += c,
                    Math.abs(this.wheel[o]) < this.pixelThreshold || (this.emit("wheel", {
                        axis: o,
                        direction: h
                    }),
                    this.resetWheel())
                }
                ,
                Object.assign(this, {
                    spinThreshold: t,
                    pixelThreshold: e
                }),
                this.wheel = {
                    x: 0,
                    y: 0
                }
            }
        }
    },
    3374: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return s
            }
        });
        const s = (t,e)=>{
            let n = null;
            const s = ()=>{
                clearTimeout(n),
                n = null
            }
            ;
            return function() {
                for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
                    r[o] = arguments[o];
                n || (n = setTimeout((()=>{
                    t(...r),
                    s()
                }
                ), e))
            }
        }
    },
    4724: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return s
            }
        });
        const s = (t,e)=>{
            const n = e.fov * (Math.PI / 180);
            return 2 * Math.tan(n / 2) * t / window.innerHeight
        }
    },
    7444: function(t, e, n) {
        "use strict";
        n.d(e, {
            M: function() {
                return i
            }
        });
        var s = n(4060);
        class i extends s.Z {
            static build(t, e, n, s, i, r, o, a) {
                const c = 2 * Math.PI
                  , h = 4 * (a + 1);
                let l, u, d, p, f;
                for (let v = 1; v < h + 1; v++)
                    s.push(0, v, v + 1);
                s.push(0, h, 1),
                t.push(0, 0, 0),
                n.push(.5, .5);
                for (let v = 0; v < h + 1; v++)
                    m(v);
                function m(e) {
                    l = Math.trunc(4 * e / h) + 1,
                    u = 1 === l || 4 === l ? 1 : -1,
                    d = l < 3 ? 1 : -1,
                    p = u * (i / 2 - o) + o * Math.cos(c * (e - l + 1) / (h - 4)),
                    f = d * (r / 2 - o) + o * Math.sin(c * (e - l + 1) / (h - 4)),
                    t.push(p, f, 0),
                    n.push(.5 + p / i, .5 + f / r)
                }
                t.forEach((()=>{
                    e.push(0, 0, 1)
                }
                ))
            }
            constructor(t, {width: e=1, height: n=1, radius: s=.1, smoothness: r=8, attributes: o={}}) {
                const a = []
                  , c = []
                  , h = []
                  , l = [];
                i.build(a, c, h, l, e, n, s, r),
                Object.assign(o, {
                    position: {
                        size: 3,
                        data: new Float32Array(a)
                    },
                    normal: {
                        size: 3,
                        data: new Float32Array(c)
                    },
                    uv: {
                        size: 2,
                        data: new Float32Array(h)
                    },
                    index: {
                        data: new Uint32Array(l)
                    }
                }),
                super(t, o),
                this.parameters = {
                    width: e,
                    height: n,
                    radius: s,
                    smoothness: r
                }
            }
        }
    }
}]);
