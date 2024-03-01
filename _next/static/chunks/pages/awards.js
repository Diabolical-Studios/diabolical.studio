(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[621], {
    172: function(t, e, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/awards", function() {
            return i(708)
        }
        ])
    },
    9401: function(t) {
        t.exports = {
            page: "aE",
            canvas: "aF",
            orb: "aG",
            initialPicture: "aH",
            sliderPicture: "aI",
            visible: "aJ",
            right: "aK",
            left: "aL",
            orbCircle: "aM",
            activeButton: "aN",
            ui: "aO",
            hidden: "aP"
        }
    },
    708: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            __N_SSG: function() {
                return Gt
            },
            default: function() {
                return Bt
            }
        });
        var s = i(5893)
          , r = i(9008)
          , n = i(9401)
          , o = i(7294)
          , a = i(6723)
          , h = i(9979)
          , c = i(5344)
          , l = i(7121)
          , u = i(9886)
          , p = i(5321)
          , d = i(1927)
          , m = i(7032)
          , v = i(4937)
          , g = i(2142)
          , y = i(3829)
          , x = i(884)
          , f = i(7229)
          , w = i(4284);
        const P = {
            black: "#000000",
            white: "#ffffff",
            red: "#ff0000",
            green: "#00ff00",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            cyan: "#00ffff",
            yellow: "#ffff00",
            orange: "#ff8000"
        };
        function _(t) {
            4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
            const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e || console.warn(`Unable to convert hex string ${t} to rgb values`),
            [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
        }
        function b(t) {
            return [((t = parseInt(t)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
        }
        function k(t) {
            return void 0 === t ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t) ? "#" === t[0] ? _(t) : P[t.toLowerCase()] ? _(P[t.toLowerCase()]) : (console.warn("Color format not recognised"),
            [0, 0, 0]) : b(t)
        }
        class A extends Array {
            constructor(t) {
                return Array.isArray(t) ? super(...t) : super(...k(...arguments))
            }
            get r() {
                return this[0]
            }
            get g() {
                return this[1]
            }
            get b() {
                return this[2]
            }
            set r(t) {
                this[0] = t
            }
            set g(t) {
                this[1] = t
            }
            set b(t) {
                this[2] = t
            }
            set(t) {
                return Array.isArray(t) ? this.copy(t) : this.copy(k(...arguments))
            }
            copy(t) {
                return this[0] = t[0],
                this[1] = t[1],
                this[2] = t[2],
                this
            }
        }
        let C;
        const S = t=>(C && C.gl === t || (C = new w.J(t)),
        C);
        class M extends d.w {
            get color() {
                return this.program.uniforms.uColor.value
            }
            set color(t) {
                this.program.uniforms.uColor.value = new A(t)
            }
            get src() {
                return this.texture.image.src
            }
            set src(t) {
                if (t === this.src)
                    return;
                const e = new Image;
                e.crossOrigin = "anonymous",
                e.src = t,
                e.onload = ()=>{
                    this.texture.image = e
                }
            }
            constructor(t, {src: e="", color: i="#ffffff", geometry: s=S(t)}) {
                super(),
                (0,
                c.m)(this),
                this.gl = t,
                this.geometry = s,
                this.texture = new v.x(this.gl,{
                    generateMipmaps: !1,
                    premultiplyAlpha: !0
                }),
                this.program = new m.$(this.gl,{
                    vertex: y.Z,
                    fragment: "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\nuniform vec3 uColor;\n\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 tex = texture2D(tMap, vUv);\n\tgl_FragColor = tex * vec4(uColor, 1.0);\n}\n",
                    transparent: !0,
                    uniforms: {
                        uColor: {
                            value: new A(i)
                        },
                        tMap: {
                            value: this.texture
                        }
                    }
                });
                const r = new Image;
                r.crossOrigin = "anonymous",
                r.src = e,
                r.onload = ()=>{
                    this.texture.image = r
                }
                ,
                this.mesh = new g.K(this.gl,{
                    program: this.program,
                    geometry: this.geometry
                }),
                this.mesh.setParent(this)
            }
        }
        var E = i(7444)
          , z = i(1945)
          , I = i(4060)
          , D = i(6850);
        const L = new z.A;
        class j {
            constructor(t, {points: e, vertex: i=U, fragment: s=T, uniforms: r={}, attributes: n={}}) {
                this.gl = t,
                this.points = e,
                this.count = e.length,
                this.position = new Float32Array(3 * this.count * 2),
                this.prev = new Float32Array(3 * this.count * 2),
                this.next = new Float32Array(3 * this.count * 2);
                const o = new Float32Array(1 * this.count * 2)
                  , a = new Float32Array(2 * this.count * 2)
                  , h = new Uint16Array(3 * (this.count - 1) * 2);
                for (let u = 0; u < this.count; u++) {
                    o.set([-1, 1], 2 * u);
                    const t = u / (this.count - 1);
                    if (a.set([0, t, 1, t], 4 * u),
                    u === this.count - 1)
                        continue;
                    const e = 2 * u;
                    h.set([e + 0, e + 1, e + 2], 3 * (e + 0)),
                    h.set([e + 2, e + 1, e + 3], 3 * (e + 1))
                }
                const c = this.geometry = new I.Z(t,Object.assign(n, {
                    position: {
                        size: 3,
                        data: this.position
                    },
                    prev: {
                        size: 3,
                        data: this.prev
                    },
                    next: {
                        size: 3,
                        data: this.next
                    },
                    side: {
                        size: 1,
                        data: o
                    },
                    uv: {
                        size: 2,
                        data: a
                    },
                    index: {
                        size: 1,
                        data: h
                    }
                }));
                this.updateGeometry(),
                r.uResolution || (this.resolution = r.uResolution = {
                    value: new D.S
                }),
                r.uDPR || (this.dpr = r.uDPR = {
                    value: 1
                }),
                r.uThickness || (this.thickness = r.uThickness = {
                    value: 1
                }),
                r.uColor || (this.color = r.uColor = {
                    value: new A("#000")
                }),
                r.uMiter || (this.miter = r.uMiter = {
                    value: 1
                }),
                this.resize();
                const l = this.program = new m.$(t,{
                    vertex: i,
                    fragment: s,
                    uniforms: r
                });
                this.mesh = new g.K(t,{
                    geometry: c,
                    program: l
                })
            }
            updateGeometry() {
                this.points.forEach(((t,e)=>{
                    t.toArray(this.position, 3 * e * 2),
                    t.toArray(this.position, 3 * e * 2 + 3),
                    e ? (t.toArray(this.next, 3 * (e - 1) * 2),
                    t.toArray(this.next, 3 * (e - 1) * 2 + 3)) : (L.copy(t).sub(this.points[e + 1]).add(t),
                    L.toArray(this.prev, 3 * e * 2),
                    L.toArray(this.prev, 3 * e * 2 + 3)),
                    e === this.points.length - 1 ? (L.copy(t).sub(this.points[e - 1]).add(t),
                    L.toArray(this.next, 3 * e * 2),
                    L.toArray(this.next, 3 * e * 2 + 3)) : (t.toArray(this.prev, 3 * (e + 1) * 2),
                    t.toArray(this.prev, 3 * (e + 1) * 2 + 3))
                }
                )),
                this.geometry.attributes.position.needsUpdate = !0,
                this.geometry.attributes.prev.needsUpdate = !0,
                this.geometry.attributes.next.needsUpdate = !0
            }
            resize() {
                this.resolution && this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height),
                this.dpr && (this.dpr.value = this.gl.renderer.dpr)
            }
        }
        const U = "\n    precision highp float;\n\n    attribute vec3 position;\n    attribute vec3 next;\n    attribute vec3 prev;\n    attribute vec2 uv;\n    attribute float side;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n    uniform vec2 uResolution;\n    uniform float uDPR;\n    uniform float uThickness;\n    uniform float uMiter;\n\n    varying vec2 vUv;\n\n    vec4 getPosition() {\n        mat4 mvp = projectionMatrix * modelViewMatrix;\n        vec4 current = mvp * vec4(position, 1);\n        vec4 nextPos = mvp * vec4(next, 1);\n        vec4 prevPos = mvp * vec4(prev, 1);\n\n        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n        vec2 currentScreen = current.xy / current.w * aspect;\n        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n    \n        vec2 dir1 = normalize(currentScreen - prevScreen);\n        vec2 dir2 = normalize(nextScreen - currentScreen);\n        vec2 dir = normalize(dir1 + dir2);\n    \n        vec2 normal = vec2(-dir.y, dir.x);\n        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n        normal /= aspect;\n\n        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n        float pixelWidth = current.w * pixelWidthRatio;\n        normal *= pixelWidth * uThickness;\n        current.xy -= normal * side;\n    \n        return current;\n    }\n\n    void main() {\n        vUv = uv;\n        gl_Position = getPosition();\n    }\n"
          , T = "\n    precision highp float;\n\n    uniform vec3 uColor;\n    \n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor.rgb = uColor;\n        gl_FragColor.a = 1.0;\n    }\n";
        function F(t, e) {
            return (e + 1) * t / (e * t + 1)
        }
        class N {
            get visible() {
                return this.polyline.mesh.visible
            }
            set visible(t) {
                this.polyline.mesh.visible = t
            }
            setMesh() {
                this.initialPoints = [],
                this.points = [];
                for (let t = 0; t < this.resolution; t++) {
                    const e = ((.5 + t) / this.resolution - .5) * this.width
                      , i = (Math.random() - .5) * this.height;
                    this.points.push(new z.A(e,i,0)),
                    this.initialPoints.push(new z.A(e,i,0))
                }
                this.polyline = new j(this.gl,{
                    points: this.points
                }),
                this.polyline.program.uniforms.uColor.value = new A(this.color),
                this.mesh = this.polyline.mesh
            }
            reset() {
                for (let t = 0; t < this.resolution; t++)
                    this.points[t].y = this.initialPoints[t].y;
                this.polyline.updateGeometry()
            }
            setByteData(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.elapsed += e;
                const i = this.elapsed
                  , s = F((r = t).reduce(((t,e)=>t + e), 0) / r.length / 255, 8);
                var r;
                const n = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length;
                    const i = []
                      , s = .5 * e;
                    let r = 0;
                    for (let n = 0; n < e; n++)
                        i[s + (n % 2 === 0 ? 1 : -1) * Math.ceil(r)] = t[n],
                        r += .5;
                    return i
                }(t, this.resolution);
                for (let o = 0; o < this.resolution; o++) {
                    const t = this.initialPoints[o].y
                      , e = F(n[o] / 255, 10)
                      , r = o / this.resolution * Math.PI;
                    let a = 0;
                    a += Math.sin(r + 2 * i),
                    a += Math.sin(4 * r + 4 * i),
                    a += .5 * Math.sin(16 * r + 8 * i),
                    a *= 2,
                    a -= 1,
                    a *= .5,
                    a *= .4,
                    a += Math.random() - .5;
                    const h = t
                      , c = (Math.random() - .5) * s * t
                      , l = t * a
                      , u = t * e;
                    this.points[o].y = l + c + u + h
                }
                this.polyline.updateGeometry()
            }
            constructor(t, {color: e="#fff", resolution: i=32, width: s=1, height: r=1}={}) {
                this.gl = t,
                this.color = e,
                this.resolution = i,
                this.width = s,
                this.height = r,
                this.elapsed = 0,
                this.setMesh()
            }
        }
        var W = i(3775)
          , O = i(3023);
        class R extends I.Z {
            constructor(t, {radius: e=1, segments: i=32, thetaStart: s=0, thetaLength: r=2 * Math.PI, attributes: n={}}) {
                i = Math.max(3, i);
                const o = []
                  , a = []
                  , h = []
                  , c = []
                  , l = new z.A
                  , u = new D.S;
                a.push(0, 0, 0),
                h.push(0, 0, 1),
                c.push(.5, .5);
                for (let p = 0, d = 3; p <= i; p++,
                d += 3) {
                    const t = s + p / i * r;
                    l.x = e * Math.cos(t),
                    l.y = e * Math.sin(t),
                    a.push(l.x, l.y, l.z),
                    h.push(0, 0, 1),
                    u.x = (a[d] / e + 1) / 2,
                    u.y = (a[d + 1] / e + 1) / 2,
                    c.push(u.x, u.y)
                }
                for (let p = 1; p <= i; p++)
                    o.push(p, p + 1, 0);
                Object.assign(n, {
                    position: {
                        size: 3,
                        data: new Float32Array(a)
                    },
                    normal: {
                        size: 3,
                        data: new Float32Array(h)
                    },
                    uv: {
                        size: 2,
                        data: new Float32Array(c)
                    },
                    index: {
                        data: new Uint16Array(o)
                    }
                }),
                super(t, n),
                this.parameters = {
                    radius: e,
                    segments: i,
                    thetaStart: s,
                    thetaLength: r
                }
            }
        }
        let H;
        let Z;
        const G = t=>{
            t.overlay.opacity = 1,
            t.waveForm.visible = !1,
            t.controls.visible = !0,
            t.setProgressAlpha(.4)
        }
          , B = t=>{
            t.overlay.opacity = 0,
            t.waveForm.visible = !1,
            t.controls.visible = !1,
            t.setProgressAlpha(1)
        }
          , K = /\.(mp4|webm|ogg)$/;
        let q = 0;
        var V = new WeakMap
          , $ = new WeakMap;
        class X extends d.w {
            update(t) {
                this._time += t,
                this.program.uniforms.uTime.value = this._time,
                this.video && this.video.readyState >= this.video.HAVE_ENOUGH_DATA && (this.video && this.texture.image !== this.video && (this.texture.image = this.video),
                this.texture.needsUpdate = !0)
            }
            animateOpacity(t, e) {
                (0,
                W.j)((0,
                l._)(this, V), t, e)
            }
            get opacity() {
                return (0,
                l._)(this, V).get()
            }
            set opacity(t) {
                (0,
                l._)(this, V).jump(t)
            }
            setProgressAlpha(t) {
                this.program.uniforms.uProgressAlpha.value = t
            }
            setProgress(t) {
                const e = t < 0 ? 0 : t > 1 ? 1 : t;
                this.progress = e,
                this.program.uniforms.uProgress = {
                    value: e
                }
            }
            load() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.src;
                this.setSrc(t, !0),
                this.overlay.load(this.overlaySrc)
            }
            setSrc(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.src = t,
                !e)
                    return;
                if (K.test(t))
                    if (this.video = this._createVideo(t),
                    this.poster) {
                        const t = this._createImage(this.poster);
                        t.onload = ()=>{
                            this._setImage(t),
                            (0,
                            l._)(this, $).call(this),
                            this.video.play()
                        }
                        ,
                        t.onerror = ()=>{
                            this._setImage(this.video),
                            (0,
                            l._)(this, $).call(this),
                            this.video.play()
                        }
                    } else
                        console.warn("No poster for video ".concat(t)),
                        this._setImage(this.video),
                        (0,
                        l._)(this, $).call(this),
                        this.video.play();
                else {
                    const e = this._createImage(t);
                    e.onload = ()=>{
                        this._setImage(e),
                        (0,
                        l._)(this, $).call(this)
                    }
                    ,
                    e.onerror = ()=>{
                        (0,
                        l._)(this, $).call(this)
                    }
                }
            }
            setOverlay() {
                const t = new f.a;
                t.position.z = .3,
                t.setup(this.gl, this.geometry),
                t.opacity = 0,
                t.setParent(this),
                this.overlay = t
            }
            setIsPlaying(t) {
                this.isPlaying !== t && (this.isPlaying = t,
                this.applyState({
                    isPlaying: t
                }))
            }
            setIsHover(t) {
                this.isHover !== t && (this.isHover = t,
                this.applyState({
                    isHover: t
                }))
            }
            applyState(t) {
                let {isHover: e, isPlaying: i} = t;
                void 0 !== e && (e ? G(this) : !1 !== e || this.isPlaying || B(this)),
                void 0 !== i && (i ? G(this) : !1 !== i || this.isHover || B(this),
                this.controls.src = i ? "/icons/pause_white.png" : "/icons/play_white.png")
            }
            setControls() {
                var e;
                this.controls = new M(this.gl,{
                    src: t,
                    color: this.outlineColor,
                    geometry: (e = this.gl,
                    Z && e === Z.gl || (Z = new R(e,{
                        segments: 12,
                        radius: .5
                    })),
                    Z)
                }),
                this.controls.visible = this.isPlaying,
                this.controls.position.z = .6,
                this.controls.scale.set(.3, .3, 1),
                this.controls.setParent(this)
            }
            setWaveForm() {
                this.waveForm = new N(this.gl,{
                    height: .2,
                    width: 1.3,
                    color: this.outlineColor
                }),
                this.waveForm.visible = !1,
                this.waveForm.mesh.position.set(0, -.4, .6),
                this.waveForm.mesh.setParent(this)
            }
            _setImage(t) {
                this.texture.image = t,
                this.program = new m.$(this.gl,{
                    depthTest: !0,
                    depthWrite: !0,
                    fragment: "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\nuniform float uAlpha;\nuniform float uProgress;\nuniform float uProgressAlpha;\n\nvarying vec2 vUv;\n\nvoid main() {\n\tfloat alpha = uAlpha;\n\tfloat alpha0 = uProgressAlpha;\n\talpha *= step(uProgress, vUv.x) * (1.0 - alpha0) + alpha0;\n\n\tvec3 tex = texture2D(tMap, vUv).rgb * alpha;\n\n\tgl_FragColor = vec4(tex, alpha);\n}\n",
                    vertex: y.Z,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        tMap: {
                            value: this.texture
                        },
                        uAlpha: {
                            value: (0,
                            l._)(this, V).get()
                        },
                        transparent: !0,
                        uProgress: {
                            value: 0
                        },
                        uProgressAlpha: {
                            value: 1
                        }
                    }
                }),
                this.mesh.program = this.program
            }
            _createVideo(t) {
                const e = document.createElement("video");
                return e.crossOrigin = "anonymous",
                e.loop = !0,
                e.muted = !0,
                e.setAttribute("playsinline", "playsinline"),
                e.src = t,
                e
            }
            _createImage(t) {
                const e = new Image;
                return e.crossOrigin = "anonymous",
                t && (e.src = t),
                e
            }
            constructor(t, {src: e="", track: i, outlineColor: s="#faca22", overlay: r, poster: n=null}) {
                var o;
                super(),
                (0,
                u._)(this, V, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                u._)(this, $, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                p._)(this, V, (0,
                O.B)(1)),
                (0,
                p._)(this, $, (t=>{
                    this.emit("load", t)
                }
                )),
                (0,
                c.m)(this),
                this.context = t,
                this.outlineColor = s,
                this.overlaySrc = r,
                this.poster = n,
                this.track = i,
                this.gl = this.context.gl,
                this.isPlaying = !1,
                this.isHover = !1,
                this.overlay = null,
                this.id = q++,
                this.geometry = (o = this.gl,
                H && H.gl === o || (H = new E.M(o,{
                    height: 1.3333,
                    radius: .01
                })),
                H),
                this.texture = new v.x(this.gl,{
                    generateMipmaps: !1
                }),
                e && this.setSrc(e),
                this.program = new m.$(this.gl,{
                    depthTest: !0,
                    depthWrite: !0,
                    fragment: x.Z,
                    vertex: y.Z,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uAlpha: {
                            value: (0,
                            l._)(this, V).get()
                        },
                        transparent: !0,
                        uProgress: {
                            value: 0
                        },
                        uProgressAlpha: {
                            value: 1
                        }
                    }
                }),
                (0,
                l._)(this, V).on("change", (t=>this.program.uniforms.uAlpha.value = t)),
                this.mesh = new g.K(this.gl,{
                    geometry: this.geometry,
                    program: this.program
                }),
                this.mesh.setParent(this),
                this.overlaySrc && this.setOverlay(),
                this.setControls(),
                this.setWaveForm(),
                this._time = 0
            }
        }
        var Y = i(4724)
          , J = i(7756)
          , Q = i(1832)
          , tt = i(1124)
          , et = i(732);
        class it extends c.Z {
            destroy() {
                window.removeEventListener("pointermove", this._onMouseMove),
                this.context.canvas.removeEventListener("pointerdown", this._onPointerDown),
                this.context.canvas.removeEventListener("pointerup", this._onPointerUp),
                window.removeEventListener("pointerout", this._onPointerUp),
                window.removeEventListener("keydown", this._onKeyDown),
                this.context.canvas.removeEventListener("wheel", this.wheelControls.onWheel),
                this.wheelControls.off("wheel", this._onWheel)
            }
            _arrowHandler(t) {
                let e;
                this.music.pictures.forEach((t=>{
                    t.setIsHover(!1)
                }
                )),
                "ArrowRight" === t && (e = this.music.nextSlide()),
                "ArrowLeft" === t && (e = this.music.prevSlide()),
                e && e.setIsHover(!0)
            }
            _enterHandler() {
                this.music.picturesPlayer.togglePicture(this.music.getActivePicture())
            }
            constructor(t) {
                super(),
                this._onPointerDown = t=>{
                    if (!(0,
                    et.k)(t))
                        return;
                    this.isDown = !0;
                    const e = this._getCoordinatesOfEvent(t)
                      , i = e.x * this.unitsPerPixel * this.context.width * .5
                      , s = e.y * this.unitsPerPixel * this.context.height * .5;
                    this.prevDrag.set(i, s),
                    this.emit("pointerDown", {
                        x: i,
                        y: s
                    })
                }
                ,
                this._onPointerUp = ()=>{
                    this.dragging && this.music.snap(),
                    this.dragging = !1,
                    this.isDown = !1
                }
                ,
                this._onMouseMove = t=>{
                    const e = this._getCoordinatesOfEvent(t)
                      , i = e.x * this.unitsPerPixel * this.context.width * .5
                      , s = e.y * this.unitsPerPixel * this.context.height * .5;
                    if (!this.isDown)
                        return;
                    this.dragging = !0,
                    this.currentDrag.set(i, s);
                    const r = this.isMob ? this.params.mobMultiplier : this.params.multiplier;
                    let n = this.music.target.x
                      , o = this.music.target.y;
                    this.context.isMob ? o = this.music.target.y + (this.currentDrag.y - this.prevDrag.y) * r : n = this.music.target.x + (this.currentDrag.x - this.prevDrag.x) * r,
                    this.music.target.set(n, o, 0),
                    (0,
                    J.l)(this.music.transform.position, this.music.target, this.animationParams.drag),
                    this.prevDrag.set(i, s)
                }
                ,
                this._onWheel = t=>{
                    t.direction > 0 ? this.music.nextSlide() : this.music.prevSlide()
                }
                ,
                this._onKeyDown = t=>{
                    if (![document.body, this.context.canvas].includes(document.activeElement))
                        return;
                    const {key: e} = t;
                    ["ArrowLeft", "ArrowRight"].includes(e) && this._arrowHandler(e),
                    "Enter" === e && this._enterHandler()
                }
                ,
                this._getCoordinatesOfEvent = t=>{
                    const e = this.context.width
                      , i = this.context.height;
                    return new D.S(t.clientX / e * 2 - 1,2 * (1 - t.clientY / i) - 1)
                }
                ,
                this.music = t,
                this.context = t.context,
                this.unitsPerPixel = t.unitsPerPixel,
                this.params = t.params,
                this.animationParams = t.animationParams,
                this.isDown = !1,
                this.dragging = !1,
                this.prevDrag = new D.S,
                this.currentDrag = new D.S,
                this.wheelControls = new tt.z,
                this.wheelControls.on("wheel", this._onWheel),
                this.context.canvas.addEventListener("wheel", this.wheelControls.onWheel, {
                    passive: !0
                }),
                window.addEventListener("pointermove", this._onMouseMove),
                this.context.canvas.addEventListener("pointerdown", this._onPointerDown),
                this.context.canvas.addEventListener("pointerup", this._onPointerUp),
                window.addEventListener("pointerout", this._onPointerUp),
                window.addEventListener("keydown", this._onKeyDown)
            }
        }
        var st = i(3374);
        class rt {
            add() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this.list.push(...e)
            }
            remove(t) {
                const e = this.list.indexOf(t);
                -1 !== e && (this.list.splice(e, 1),
                e < this.index ? this.index-- : e === this.index && (this.index = 0))
            }
            setTrack(t) {
                const e = this.list.indexOf(t);
                return -1 === e ? (this.list.push(t),
                this.index = this.list.length - 1) : this.index = e,
                t
            }
            pick(t) {
                if (!(t < 0 || t >= this.list.length))
                    return this.index = t,
                    this.list[t]
            }
            pickNext() {
                let t = this.index + 1;
                return t >= this.list.length && this.loop && (t = 0),
                this.pick(t)
            }
            pickPrevious() {
                let t = this.index - 1;
                return t < 0 && this.loop && (t = this.list.length - 1),
                this.pick(t)
            }
            get length() {
                return this.list.length
            }
            constructor({loop: t=!1}) {
                this.loop = t,
                this.list = [],
                this.index = 0
            }
        }
        class nt extends c.Z {
            get node() {
                return this._node || (this._node = this._createNode()),
                this._node
            }
            destroy() {
                this.node.pause();
                for (const [t,e] of Object.entries(this.listeners))
                    this.node.removeEventListener(t, e);
                this.listeners = null,
                this._node = null
            }
            get isPlaying() {
                return !!this._node && !this._node.paused
            }
            get src() {
                return this.node.src
            }
            set src(t) {
                this.node.src = t
            }
            set progress(t) {
                isNaN(this.node.duration) || (this.node.currentTime = t * this.node.duration)
            }
            get progress() {
                return isNaN(this.node.duration) ? 0 : this.node.currentTime / this.node.duration
            }
            setPlaylist(t) {
                if (this.playlist = t,
                "mediaSession"in navigator)
                    for (const [s,r] of this.sessionEvents) {
                        var e;
                        const n = (null === (e = t) || void 0 === e ? void 0 : e.length) ? r : null;
                        try {
                            navigator.mediaSession.setActionHandler(s, n)
                        } catch (i) {
                            console.warn("".concat(s, " is not supported"))
                        }
                    }
            }
            setMetadata(t) {
                "mediaSession"in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
                    ...t
                }))
            }
            playTrack(t) {
                this.playlist && (this.playlist.setTrack(t),
                this.src = t.src,
                t.metadata && this.setMetadata(t.metadata),
                this.play())
            }
            _createNode() {
                const t = new Audio;
                t.volume = .7,
                t.muted = !1;
                for (const [e,i] of Object.entries(this.listeners))
                    t.addEventListener(e, i);
                return t
            }
            constructor() {
                super(),
                this.play = t=>{
                    this.node.play().then(t)
                }
                ,
                this.pause = ()=>{
                    this.node.pause()
                }
                ,
                this.previous = ()=>{
                    if (!this.playlist)
                        return;
                    const t = this.playlist.pickPrevious();
                    t && (this.src = t.src,
                    t.metadata && this.setMetadata(t.metadata),
                    this.play())
                }
                ,
                this.next = ()=>{
                    if (!this.playlist)
                        return;
                    const t = this.playlist.pickNext();
                    t && (this.src = t.src,
                    t.metadata && this.setMetadata(t.metadata),
                    this.play())
                }
                ,
                this.stop = ()=>{
                    this.node.pause(),
                    this.progress = 0
                }
                ,
                this.playlist = null;
                this.listeners = {},
                ["timeupdate", "pause", "play", "ended"].forEach((t=>{
                    this.listeners[t] = ()=>this.emit(t)
                }
                )),
                this.sessionEvents = [["previoustrack", this.previous], ["nexttrack", this.next], ["stop", this.stop]]
            }
        }
        class ot extends c.Z {
            init() {
                this.initialized || (this.node ? (this.audioContext = new AudioContext,
                this.analyser = this.audioContext.createAnalyser(),
                this.sourceNode = this.audioContext.createMediaElementSource(this.node),
                this.sourceNode.connect(this.analyser),
                this.analyser.connect(this.audioContext.destination),
                this.analyser.fftSize = 2 * this.size,
                this.initialized = !0) : console.warn("Can not create Analyser: node is not defined"))
            }
            getByteFrequencyData() {
                return this.analyser.getByteFrequencyData(this.dataArray),
                this.dataArray
            }
            getTimeDomainData() {
                return this.analyser.getByteTimeDomainData(this.timeArray),
                this.timeArray
            }
            destroy() {
                this.initialized && (this.analyser.disconnect(),
                this.audioContext.close().then((()=>{
                    this.sourceNode = null,
                    this.analyser = null
                }
                )))
            }
            constructor(t, {size: e=32}={}) {
                super(),
                this.node = t,
                this.size = e,
                this.initialized = !1,
                this.dataArray = new Uint8Array(this.size),
                this.timeArray = new Uint8Array(this.size)
            }
        }
        class at extends c.Z {
            init() {
                this.initialized || (this.node ? this.initialized = !0 : console.warn("Can not create Analyser: node is not defined"))
            }
            getByteFrequencyData() {
                return this.node.paused ? this._pauseData : this._playData
            }
            getTimeDomainData() {
                return this.getByteFrequencyData()
            }
            destroy() {}
            constructor(t, {size: e=32}={}) {
                super(),
                this.node = t,
                this.size = e,
                this.initialized = !1,
                this._pauseData = new Uint8Array(this.size),
                this._pauseData.fill(0),
                this._playData = new Uint8Array(this.size),
                this._playData.fill(128)
            }
        }
        const ht = t=>0 === t.indexOf("http://") || 0 === t.indexOf("https://")
          , ct = (t,e)=>{
            if (t === e)
                return !0;
            const i = ht(t)
              , s = ht(e);
            if (i && s)
                return !1;
            if (i) {
                return new URL(t).pathname === e
            }
            if (s) {
                return new URL(e).pathname === t
            }
        }
        ;
        class lt {
            init() {
                const t = /iPad|iPhone|iPod/.test(navigator.userAgent) ? at : ot;
                this.player = new nt,
                this.analyser = new t(this.player.node),
                this.pictures.forEach((t=>{
                    t.on("click", this._onPictureClick),
                    t.controls.on("click", this._onControlsClick)
                }
                )),
                this.player.setPlaylist(this.playlist),
                this.player.on("play", this.onPlay),
                this.player.on("pause", this.onPause),
                this.player.on("ended", this.onEnded),
                this.music.once("destroy", (()=>{
                    this.pictures.forEach((t=>{
                        t.off("click", this._onPictureClick),
                        t.controls.off("click", this._onControlsClick)
                    }
                    )),
                    this.analyser && this.analyser.destroy(),
                    this.player.destroy()
                }
                ))
            }
            togglePicture(t) {
                ct(this.player.src, t.track.src) ? this.player.isPlaying ? this.player.pause() : this.player.play() : this.player.playTrack(t.track)
            }
            _getPictureBySrc(t) {
                return this.pictures.find((e=>ct(t, e.track.src)))
            }
            constructor(t, {fps: e=12}={}) {
                this.onPause = ()=>{
                    this.currentPicture = this._getPictureBySrc(this.player.src),
                    this.currentPicture && (this.currentPicture.setIsPlaying(!1),
                    this.currentPicture = null)
                }
                ,
                this.onPlay = ()=>{
                    this.currentPicture && (this.currentPicture.setIsPlaying(!1),
                    this.currentPicture.setProgress(0)),
                    this.currentPicture = this._getPictureBySrc(this.player.src),
                    this.currentPicture && (this.currentPicture.setIsPlaying(!0),
                    this.currentPicture.emit("play")),
                    this.music.controls.isDown || this.music._slideToPicture(this.currentPicture)
                }
                ,
                this.onEnded = ()=>{
                    this.player.next()
                }
                ,
                this.update = t=>{
                    this.currentPicture && this.player.isPlaying && (this.currentPicture.setProgress(this.player.progress),
                    this.updateWaveform(t))
                }
                ,
                this.updateWaveform = t=>{
                    this.currentPicture && this.player.isPlaying && this.analyser && (this.analyser.initialized || this.analyser.init(),
                    this.currentPicture.waveForm.setByteData(this.analyser.getByteFrequencyData(), t))
                }
                ,
                this._onPictureClick = t=>{
                    const e = t.target;
                    ct(this.player.src, e.track.src) ? this.player.isPlaying ? this.player.progress = .5 + t.localPosition.x : (this.player.play(),
                    this.music.pointer.visible = !this.context.isMob) : (this.player.playTrack(e.track),
                    this.music.pointer.visible = !this.context.isMob)
                }
                ,
                this._onControlsClick = t=>{
                    t.stopPropagation(),
                    this.togglePicture(t.target.parent)
                }
                ,
                this.music = t,
                this.context = t.context,
                this.pictures = t.pictures,
                this.playlist = new rt({
                    loop: !0
                }),
                this.pictures.forEach((t=>{
                    this.playlist.add(t.track)
                }
                )),
                this.player = null,
                this.analyser = null,
                this.currentPicture = null,
                this.updateWaveform = (0,
                st.P)(this.updateWaveform, 1e3 / e)
            }
        }
        var ut = i(6424)
          , pt = i(5364)
          , dt = new WeakMap
          , mt = new WeakMap
          , vt = new WeakMap
          , gt = new WeakMap;
        class yt {
            enable() {
                this.canvas.addEventListener("pointermove", (0,
                l._)(this, vt)),
                this.canvas.addEventListener("pointerout", (0,
                l._)(this, gt))
            }
            disable() {
                this.canvas.removeEventListener("pointermove", (0,
                l._)(this, vt)),
                this.canvas.removeEventListener("pointerout", (0,
                l._)(this, gt))
            }
            update() {
                (0,
                l._)(this, dt).x = this.pointer.x - this.music.transform.position.x,
                (0,
                l._)(this, dt).y = this.pointer.y - this.music.transform.position.y,
                this.music.pictures.forEach((t=>{
                    (0,
                    l._)(this, mt).position.copy(t.position),
                    (0,
                    l._)(this, mt).lookAt((0,
                    l._)(this, dt)),
                    (0,
                    J.l)(t.rotation, (0,
                    l._)(this, mt).rotation, Q.rotation)
                }
                ))
            }
            constructor(t) {
                (0,
                u._)(this, dt, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                u._)(this, mt, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                u._)(this, vt, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                u._)(this, gt, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                p._)(this, dt, new z.A(0,0,5)),
                (0,
                p._)(this, mt, new d.w),
                this.destroy = ()=>{
                    this.disable()
                }
                ,
                (0,
                p._)(this, vt, (t=>{
                    this.pointer.x = (t.clientX / this.context.width * 2 - 1) * this.music.unitsPerPixel * this.context.width * .5,
                    this.pointer.y = (2 * (1 - t.clientY / this.context.height) - 1) * this.music.unitsPerPixel * this.context.height * .5
                }
                )),
                (0,
                p._)(this, gt, (()=>{
                    this.pointer.set(0)
                }
                )),
                this.music = t,
                this.context = t.context,
                this.canvas = this.context.canvas,
                this.pointer = new D.S,
                (0,
                l._)(this, mt).setParent(this.context.scene),
                this.music.once("destroy", this.destroy)
            }
        }
        class xt {
            getOpacity(t) {
                const e = t.position.x + this.transform.position.x
                  , i = t.position.y + this.transform.position.y
                  , s = e / (.5 * (this.context.width * this.unitsPerPixel))
                  , r = i / (.5 * (this.context.height * this.unitsPerPixel))
                  , n = 1 - new D.S(s,r).len() + this.opacityDistance;
                return Math.max(Math.min(n, 1), this.opacity)
            }
            constructor(t) {
                this.update = ()=>{
                    this.pictures.forEach((t=>{
                        t.opacity = this.getOpacity(t)
                    }
                    ))
                }
                ,
                this.context = t.context,
                this.transform = t.transform,
                this.unitsPerPixel = t.unitsPerPixel,
                this.pictures = t.pictures,
                this.opacity = .25,
                this.opacityDistance = .4
            }
        }
        var ft = new WeakMap
          , wt = new WeakMap;
        class Pt {
            get visible() {
                return this.sprite.mesh.visible
            }
            set visible(t) {
                this.sprite.mesh.visible = t
            }
            get color() {
                return this.sprite.color
            }
            set color(t) {
                this.sprite.color = t
            }
            constructor(t, {element: e=t.context.canvas, scale: i=.08}={}) {
                (0,
                u._)(this, ft, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                u._)(this, wt, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                p._)(this, ft, (t=>{
                    this.sprite.mesh.position.x = (t.clientX / this.context.width * 2 - 1) * this.music.unitsPerPixel * this.context.width * .5,
                    this.sprite.mesh.position.y = (2 * (1 - t.clientY / this.context.height) - 1) * this.music.unitsPerPixel * this.context.height * .5
                }
                )),
                (0,
                p._)(this, wt, (()=>{
                    this.visible = !1
                }
                )),
                this.music = t,
                this.context = t.context,
                this.element = e,
                this.sprite = new M(this.context.gl,{
                    src: "/icons/pointer_white.png"
                }),
                this.sprite.mesh.scale.set(i, i, 1),
                this.sprite.mesh.setParent(this.context.scene),
                this.sprite.program.depthTest = !1,
                this.sprite.program.depthWrite = !1,
                this.visible = !1,
                this.element.addEventListener("pointermove", (0,
                l._)(this, ft)),
                this.element.addEventListener("pointerout", (0,
                l._)(this, wt)),
                this.music.once("destroy", (()=>{
                    this.element.removeEventListener("pointermove", (0,
                    l._)(this, ft)),
                    this.element.removeEventListener("pointerout", (0,
                    l._)(this, wt))
                }
                ))
            }
        }
        var _t = i(1973);
        class bt extends c.Z {
            destroy() {
                this.checkMap.clear()
            }
            add() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                e.forEach((t=>{
                    this.checkMap.set(t, this.checker.check(t))
                }
                )),
                this.shouldUpdate = !0
            }
            remove(t) {
                this.checkMap.has(t) ? (this.checkMap.delete(t),
                0 === this.checkMap.size && (this.shouldUpdate = !1)) : console.warn("transform is not in the checkMap", t)
            }
            constructor(t, {checker: e=new _t.q(t)}={}) {
                super(),
                this.update = ()=>{
                    for (const [t,e] of this.checkMap.entries()) {
                        const i = this.checker.check(t);
                        if (i.isInside !== e.isInside) {
                            if ("function" !== typeof t.emit)
                                return void console.warn("transform has no emit method", t);
                            const e = i.isInside ? "enter" : "exit";
                            t.emit(e, i)
                        }
                        this.checkMap.has(t) && this.checkMap.set(t, i)
                    }
                }
                ,
                this.checker = e,
                this.constraints = t,
                this._bufferVec = new z.A,
                this.checkMap = new Map
            }
        }
        class kt extends c.Z {
            load(t) {
                this.shouldUpdate = !0;
                let e = 0
                  , i = 0;
                t.forEach((s=>{
                    const r = this.checker.check(s)
                      , {isInside: n} = r;
                    n ? (e++,
                    s.load(),
                    s.once("load", (()=>{
                        i++,
                        i >= e && this.emit("complete")
                    }
                    ))) : (this.obseserver.add(s),
                    s.once("enter", (()=>{
                        s.load(),
                        s.once("load", (()=>{
                            i++,
                            i >= t.length && (this.shouldUpdate = !1,
                            this.emit("complete-lazy"))
                        }
                        )),
                        this.obseserver.remove(s)
                    }
                    )))
                }
                ))
            }
            destroy() {
                this.shouldUpdate = !1,
                this.obseserver.destroy()
            }
            update() {
                this.obseserver.update()
            }
            constructor(t) {
                super(),
                this.constrainst = t,
                this.checker = new _t.q(this.constrainst),
                this.obseserver = new bt(this.constrainst,{
                    checker: this.checker
                }),
                this.shouldUpdate = !1
            }
        }
        var At = i(4662)
          , Ct = new WeakSet;
        class St extends c.Z {
            setPicturesSize() {
                this.pictureSize = {
                    x: this.gridEl.offsetWidth * this.unitsPerPixel,
                    y: this.gridEl.offsetHeight * this.unitsPerPixel
                }
            }
            setPictureScale() {
                this.pictureScale = this.pictureSize.x
            }
            setGridSize() {
                this.gridSize = {
                    x: (this.pictureSize.x + this.gridGap) * this.music.length,
                    y: (this.pictureSize.y + this.gridGap) * this.music.length
                }
            }
            setConstraints() {
                this.constraints = new ut.F(this.gridSize),
                this.constraintsKeeper = new pt.m({
                    constraints: this.constraints,
                    pictures: this.pictures
                })
            }
            setPictures() {
                this.pictures = this.music.map((t=>{
                    let {audio: e, cover: i, overlay: s, outlineColor: r, id: n, poster: o, track: a} = t;
                    const h = new X(this.context,{
                        track: a,
                        src: i,
                        audio: e,
                        outlineColor: r,
                        overlay: s,
                        poster: o
                    });
                    return h.imageId = n,
                    h.scale.x = h.scale.y = this.pictureScale,
                    h.opacity = 0,
                    h.setParent(this.transform),
                    h
                }
                ))
            }
            setLayout() {
                const t = this.context.camera.position.z
                  , e = t - t / (this.initialEl.offsetWidth * this.unitsPerPixel / this.pictureSize.x);
                this.pictures.forEach(((t,i)=>{
                    const s = this.context.isMob ? 0 : i * (this.pictureSize.x + this.gridGap)
                      , r = this.context.isMob ? -i * (this.pictureSize.y + this.gridGap) : 0
                      , n = 0 === i ? e : 0;
                    (0,
                    J.n)(t.position, {
                        x: s,
                        y: r,
                        z: n
                    }),
                    this.constraintsKeeper.fit(t)
                }
                ))
            }
            _loadPictures() {
                const t = new ut.F({
                    width: this.context.width * this.unitsPerPixel + 5 * (this.pictureSize.x + this.gridGap),
                    height: this.context.height * this.unitsPerPixel + 5 * (this.pictureSize.y + this.gridGap)
                });
                this.picturesLoader = new kt(t),
                this.picturesLoader.once("complete", (()=>{
                    this.context.start(),
                    this.emit("start"),
                    (0,
                    a._)(this, Ct, Mt).call(this)
                }
                )),
                this.picturesLoader.once("complete-lazy", (()=>{
                    this.context.updatables = this.context.updatables.filter((t=>t !== this.picturesLoader)),
                    this.picturesLoader.destroy()
                }
                )),
                this.picturesLoader.load(this.pictures),
                this.context.updatables.push(this.picturesLoader)
            }
            handleRevealComplete() {
                this.picturesPlayer.init(),
                this.pictures.forEach((t=>{
                    t.on("pointerenter", (e=>{
                        this._setCursor("pointer"),
                        this.context.isMob || (t.setIsHover(!0),
                        this.pointer.color = t.outlineColor,
                        this.pointer.visible = e.target === t && t.isPlaying && !this.context.isMob)
                    }
                    )),
                    t.on("pointerleave", (e=>{
                        this._setCursor("initial"),
                        this.pointer.visible = !1,
                        e.relatedTarget === t.controls || this.context.isMob || t.setIsHover(!1)
                    }
                    )),
                    this.context.raycaster.add(t, t.controls)
                }
                ))
            }
            updateActiveIndex() {
                const t = this.activeIndex
                  , e = this.getActiveIndex();
                t !== e && (this.activeIndex = e,
                this.emit("slideChanged", this))
            }
            getActivePicture() {
                const t = this.getActiveIndex();
                return this.pictures[t]
            }
            getActiveIndex() {
                const {x: t, y: e} = this.pictureSize
                  , i = this.gridGap
                  , s = this.pictures.length
                  , r = t + i
                  , n = e + i
                  , o = r * s
                  , a = n * s;
                let h;
                if (this.context.isMob) {
                    const t = this.transform.position.y / a;
                    h = Math.round(t * a / n) % s
                } else {
                    const t = -this.transform.position.x / o;
                    h = Math.round(t * o / r) % s
                }
                return h < 0 ? s + h : h
            }
            destroy() {
                this.emit("destroy"),
                this.context.off("beforeRender", this.update),
                this.context.destroy(),
                this.controls.destroy()
            }
            nextSlide() {
                const t = this.activeIndex + 1 >= this.pictures.length ? 0 : this.activeIndex + 1
                  , e = this.pictures[t];
                return this._slideToPicture(e),
                e
            }
            prevSlide() {
                const t = this.activeIndex - 1 < 0 ? this.pictures.length - 1 : this.activeIndex - 1
                  , e = this.pictures[t];
                return this._slideToPicture(e),
                e
            }
            slideTo(t) {
                const e = this.pictures.find((e=>e.imageId === t));
                e ? this._slideToPicture(e) : console.warn("Can not find target with imageId ".concat(t))
            }
            _slideToPicture(t) {
                this.target.x = -t.position.x,
                this.target.y = -t.position.y,
                (0,
                J.l)(this.transform.position, this.target, this.animationParams.drag)
            }
            _setCursor(t) {
                this.context.canvas.style.cursor = t
            }
            snap() {
                const {x: t, y: e} = this.pictureSize
                  , i = this.gridGap
                  , s = t + i
                  , r = e + i
                  , n = Math.round(this.target.x / s)
                  , o = Math.round(this.target.y / r);
                this.target.x = n * s,
                this.target.y = o * r,
                (0,
                J.l)(this.transform.position, this.target, this.animationParams.snapOnDragEnd)
            }
            constructor({canvas: t, music: e, gridEl: i, initialEl: s, params: r}) {
                super(),
                (0,
                h._)(this, Ct),
                this.update = ()=>{
                    const t = this.activeIndex;
                    var e, i;
                    (this.updateActiveIndex(),
                    this.context.isMob) && (null === (e = this.pictures[t]) || void 0 === e || e.setIsHover(!1),
                    null === (i = this.pictures[this.activeIndex]) || void 0 === i || i.setIsHover(!0))
                }
                ,
                Object.assign(this, {
                    canvas: t,
                    music: e,
                    gridEl: i,
                    params: r,
                    initialEl: s
                }),
                this.context = new At.I(t),
                this.context.camera.position.z = 5,
                this.unitsPerPixel = (0,
                Y.Z)(this.context.camera.position.z, this.context.camera),
                this.gridGap = 16 * this.unitsPerPixel,
                this.pictures = null,
                this.activeIndex = null,
                this.target = new z.A,
                this.transform = new d.w,
                this.transform.setParent(this.context.scene),
                this.pointer = new Pt(this),
                this.setPicturesSize(),
                this.setPictureScale(),
                this.setGridSize(),
                this.setPictures(),
                this.setConstraints(),
                this.setLayout(),
                this._loadPictures(),
                this.animationParams = Q,
                this.controls = new it(this),
                this.picturesPlayer = new lt(this),
                this.rotationAnimator = new yt(this),
                this.rotationAnimator.shouldUpdate = !1,
                this.opacityAnimator = new xt(this),
                this.opacityAnimator.shouldUpdate = !1,
                this.context.updatables.push(this, this.constraintsKeeper, this.rotationAnimator, this.opacityAnimator, this.picturesPlayer, ...this.pictures)
            }
        }
        function Mt() {
            this.pictures.forEach((t=>{
                t.texture.update()
            }
            )),
            this.context.render();
            let t = 0;
            const e = ()=>{
                t++ < this.pictures.length - 1 || (this.opacityAnimator.shouldUpdate = !0)
            }
              , i = ()=>{
                this.handleRevealComplete(),
                this.rotationAnimator.shouldUpdate = !0,
                this.rotationAnimator.enable()
            }
            ;
            this.pictures.forEach(((t,s)=>{
                const r = 0 === s
                  , n = this.opacityAnimator.getOpacity(t)
                  , o = r ? .025 : .65;
                t.animateOpacity(n, {
                    ...Q.opacity,
                    duration: .6,
                    delay: o,
                    onComplete: e
                }),
                r && (0,
                J.l)(t.position, {
                    z: 0
                }, {
                    ...this.animationParams.zoom,
                    onComplete: i
                })
            }
            ))
        }
        var Et = i(3782);
        class zt extends c.Z {
            init() {
                this._music.on("slideChanged", this._onSlideChanged),
                this._music.on("start", this._onStart)
            }
            destroy() {
                this._music.off("slideChanged", this._onSlideChanged),
                this._music.off("start", this._onStart),
                this._music.destroy()
            }
            get activeId() {
                return this._music.getActivePicture().imageId
            }
            get activeIndex() {
                return this._music.getActiveIndex()
            }
            get slides() {
                return this._music.pictures
            }
            next() {
                this._music.nextSlide()
            }
            prev() {
                this._music.prevSlide()
            }
            slideTo(t) {
                this._music.slideTo(Number(t))
            }
            slideToPlaying() {
                var t, e;
                const i = null === (e = this._music.picturesPlayer) || void 0 === e || null === (t = e.currentPicture) || void 0 === t ? void 0 : t.imageId;
                "number" === typeof i && this.slideTo(i)
            }
            constructor(t) {
                super(),
                this._onSlideChanged = ()=>{
                    this.emit("slideChanged", this)
                }
                ,
                this._onStart = ()=>{
                    this.emit("start", this)
                }
                ,
                this._music = t,
                this.init()
            }
        }
        var It = i(4751)
          , Dt = i(1688)
          , Lt = i(5005)
          , jt = i(2177)
          , Ut = i(5241)
          , Tt = i(5097)
          , Ft = i(1536)
          , Nt = i(5972)
          , Wt = i(7496);
        class Ot extends c.Z {
            getCurrentState() {
                if (!this.picturesPlayer.currentPicture)
                    return "pause";
                {
                    const t = this.checker.check(this.picturesPlayer.currentPicture);
                    if (t.left < 0)
                        return "left";
                    if (t.right < 0)
                        return "right";
                    if (t.top < 0)
                        return "top";
                    if (t.bottom < 0)
                        return "bottom"
                }
                return "inside"
            }
            constructor(t) {
                super(),
                this.destroy = ()=>{
                    this.destroyed = !0,
                    this.context.updatables = this.context.updatables.filter((t=>t !== this))
                }
                ,
                this.update = ()=>{
                    if (this.destroyed)
                        return;
                    const t = this.getCurrentState();
                    t !== this.lastState && (this.emit(t),
                    this.lastState = t)
                }
                ,
                this.music = t,
                this.context = t.context,
                this.pictures = this.music.pictures,
                this.picturesPlayer = this.music.picturesPlayer,
                this.context.once("destroy", this.destroy),
                this.checker = new _t.q(new ut.F({
                    width: this.context.width * this.music.unitsPerPixel + this.music.pictureSize.x,
                    height: this.context.height * this.music.unitsPerPixel + this.music.pictureSize.y
                })),
                this.lastState = "pause",
                this.context.updatables.push(this)
            }
        }
        var Rt = i(5503);
        const Ht = t=>{
            let {position: e, onClick: i, visible: r=!1} = t;
            return (0,
            s.jsxs)("button", {
                className: (0,
                It.y)(n.orb, e && n[e], r && n.visible),
                onClick: i,
                children: [(0,
                s.jsx)("span", {
                    className: n.orbCircle
                }), (0,
                s.jsx)("span", {
                    className: n.orbCircle
                }), (0,
                s.jsx)("span", {
                    className: n.orbCircle
                })]
            })
        }
        ;
        var Zt = t=>{
            let {music: e} = t;
            const i = (0,
            o.useContext)(Wt.j)
              , r = (0,
            o.useRef)(null)
              , a = (0,
            o.useRef)(null)
              , h = (0,
            o.useRef)(null)
              , [c,l] = (0,
            o.useState)(e[0])
              , u = (0,
            o.useRef)(null)
              , p = t=>u.current.slideTo(t)
              , [d,m] = (0,
            o.useState)(!0)
              , v = (0,
            o.useCallback)((()=>{
                m(!1)
            }
            ), [])
              , g = (0,
            o.useCallback)((t=>{
                const i = e.find((e=>e.id === t.activeId));
                l(i),
                (0,
                Rt.g)(i.hash)
            }
            ), [e])
              , [y,x] = (0,
            o.useState)("")
              , f = (0,
            o.useCallback)((()=>{
                u.current.slideToPlaying()
            }
            ), [])
              , w = (0,
            Nt.e)();
            return (0,
            o.useEffect)((()=>{
                if (!window)
                    return;
                const t = location.hash.replace("#", "")
                  , i = e.findIndex((e=>e.hash === t))
                  , s = i < 0 ? void 0 : i;
                let n;
                n = void 0 === s ? e : [...e.slice(s), ...e.slice(0, s)];
                const o = new St({
                    canvas: r.current,
                    gridEl: a.current,
                    initialEl: h.current,
                    params: {
                        mobMultiplier: 2,
                        multiplier: 4,
                        opacity: .25,
                        opacityDistance: .4
                    },
                    music: n
                })
                  , c = new zt(o);
                u.current = c,
                c.on("slideChanged", g),
                c.once("start", v);
                const l = new Ot(o)
                  , p = ()=>x("left")
                  , d = ()=>x("right")
                  , m = ()=>x("");
                return l.on("left", p),
                l.on("right", d),
                l.on("pause", m),
                l.on("inside", m),
                ()=>{
                    c.off("slideChanged", g),
                    c.off("start", v),
                    l.off("left", p),
                    l.off("right", d),
                    l.off("pause", m),
                    l.off("inside", m),
                    l.destroy(),
                    c.destroy()
                }
            }
            ), [e, g, v, w]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("h1", {
                    className: "visually-hidden",
                    children: i.h1
                }), (0,
                s.jsx)(Et.Z, {}), (0,
                s.jsxs)("div", {
                    className: n.page,
                    children: [(0,
                    s.jsx)("canvas", {
                        className: n.canvas,
                        ref: r,
                        tabIndex: 0
                    }), (0,
                    s.jsx)(Ht, {
                        position: "left",
                        onClick: f,
                        visible: "left" === y
                    }), (0,
                    s.jsx)(Ht, {
                        position: "right",
                        onClick: f,
                        visible: "right" === y
                    }), (0,
                    s.jsx)("div", {
                        className: n.sliderPicture,
                        ref: a
                    }), (0,
                    s.jsx)("div", {
                        className: n.initialPicture,
                        ref: h
                    }), (0,
                    s.jsx)(Ft.q, {
                        isVisible: d
                    }), (0,
                    s.jsxs)("div", {
                        className: (0,
                        It.y)(n.ui, d && n.hidden),
                        children: [(0,
                        s.jsx)(Tt.Z, {
                            slides: e,
                            activeId: c.id,
                            onClick: p
                        }), (0,
                        s.jsxs)(Ut.Z, {
                            children: [(0,
                            s.jsx)(Lt.Z, {
                                onClick: ()=>u.current.prev(),
                                children: i.prev_btn
                            }), (0,
                            s.jsx)(Dt.Z, {
                                value: c.id,
                                onChange: p,
                                options: e.map((t=>{
                                    let {id: e, track: i} = t;
                                    return {
                                        value: e,
                                        name: i.metadata.title
                                    }
                                }
                                ))
                            }), (0,
                            s.jsx)(jt.Z, {
                                onClick: ()=>u.current.next(),
                                children: i.next_btn
                            })]
                        })]
                    })]
                })]
            })
        }
          , Gt = !0;
        function Bt(t) {
            let {music: e, t: i={}} = t;
            const n = i.meta_title
              , o = i.meta_description.replace(/\n+/g, " ");
            return (0,
            s.jsxs)(Wt.P, {
                value: i,
                children: [(0,
                s.jsxs)(r, {
                    children: [(0,
                    s.jsx)("title", {
                        children: n
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: o
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:title",
                        content: n
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:description",
                        content: o
                    }), (0,
                    s.jsx)("meta", {
                        name: "og:image",
                        content: "https://halfof8.com/img/halfof8_og_music.jpeg"
                    })]
                }), (0,
                s.jsx)(Zt, {
                    music: e
                })]
            })
        }
    }
}, function(t) {
    t.O(0, [152, 928, 416, 774, 888, 179], (function() {
        return e = 172,
        t(t.s = e);
        var e
    }
    ));
    var e = t.O();
    _N_E = e
}
]);
