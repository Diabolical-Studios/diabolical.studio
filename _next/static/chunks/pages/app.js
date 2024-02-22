(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    1118: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n(236)
        }
        ])
    },
    3991: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            function (e, t) {
                for (var n in t)
                    Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
            }(t, {
                PrefetchKind: function () {
                    return i
                },
                ACTION_REFRESH: function () {
                    return n
                },
                ACTION_NAVIGATE: function () {
                    return o
                },
                ACTION_RESTORE: function () {
                    return r
                },
                ACTION_SERVER_PATCH: function () {
                    return a
                },
                ACTION_PREFETCH: function () {
                    return s
                },
                ACTION_FAST_REFRESH: function () {
                    return l
                },
                ACTION_SERVER_ACTION: function () {
                    return c
                }
            });
        const n = "refresh"
            , o = "navigate"
            , r = "restore"
            , a = "server-patch"
            , s = "prefetch"
            , l = "fast-refresh"
            , c = "server-action";
        var i;
        !function (e) {
            e.AUTO = "auto",
                e.FULL = "full",
                e.TEMPORARY = "temporary"
        }(i || (i = {})),
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }),
                Object.assign(t.default, t),
                e.exports = t.default)
    },
    1516: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function () {
                    return r
                }
            });
        const o = n(2387);
        function r(e, t, r, a) {
            {
                const s = n(7159).normalizeLocalePath
                    , l = n(2249).detectDomainLocale
                    , c = t || s(e, r).detectedLocale
                    , i = l(a, void 0, c);
                if (i) {
                    const t = "http" + (i.http ? "" : "s") + "://"
                        , n = c === i.defaultLocale ? "" : "/" + c;
                    return "" + t + i.domain + (0,
                        o.normalizePathTrailingSlash)("" + n + e)
                }
                return !1
            }
        }
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
            Object.assign(t.default, t),
            e.exports = t.default)
    },
    5569: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return y
                }
            });
        const o = n(8754)._(n(7294))
            , r = n(4532)
            , a = n(3353)
            , s = n(1410)
            , l = n(9064)
            , c = n(370)
            , i = n(9955)
            , u = n(4224)
            , f = n(508)
            , d = n(1516)
            , p = n(4266)
            , h = n(3991)
            , m = new Set;
        function v(e, t, n, o, r, s) {
            if (!s && !(0,
                a.isLocalURL)(t))
                return;
            if (!o.bypassPrefetchedCheck) {
                const r = t + "%" + n + "%" + ("undefined" !== typeof o.locale ? o.locale : "locale" in e ? e.locale : void 0);
                if (m.has(r))
                    return;
                m.add(r)
            }
            const l = s ? e.prefetch(t, r) : e.prefetch(t, n, o);
            Promise.resolve(l).catch((e => {
                0
            }
            ))
        }
        function _(e) {
            return "string" === typeof e ? e : (0,
                s.formatUrl)(e)
        }
        const y = o.default.forwardRef((function (e, t) {
            let n;
            const { href: s, as: m, children: y, prefetch: b = null, passHref: g, replace: x, shallow: j, scroll: N, locale: E, onClick: w, onMouseEnter: O, onTouchStart: P, legacyBehavior: C = !1, ...R } = e;
            n = y,
                !C || "string" !== typeof n && "number" !== typeof n || (n = o.default.createElement("a", null, n));
            const k = o.default.useContext(i.RouterContext)
                , M = o.default.useContext(u.AppRouterContext)
                , L = null != k ? k : M
                , S = !k
                , T = !1 !== b
                , A = null === b ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL;
            const { href: I, as: F } = o.default.useMemo((() => {
                if (!k) {
                    const e = _(s);
                    return {
                        href: e,
                        as: m ? _(m) : e
                    }
                }
                const [e, t] = (0,
                    r.resolveHref)(k, s, !0);
                return {
                    href: e,
                    as: m ? (0,
                        r.resolveHref)(k, m) : t || e
                }
            }
            ), [k, s, m])
                , U = o.default.useRef(I)
                , D = o.default.useRef(F);
            let z;
            C && (z = o.default.Children.only(n));
            const H = C ? z && "object" === typeof z && z.ref : t
                , [K, W, V] = (0,
                    f.useIntersection)({
                        rootMargin: "200px"
                    })
                , X = o.default.useCallback((e => {
                    D.current === F && U.current === I || (V(),
                        D.current = F,
                        U.current = I),
                        K(e),
                        H && ("function" === typeof H ? H(e) : "object" === typeof H && (H.current = e))
                }
                ), [F, H, I, V, K]);
            o.default.useEffect((() => {
                L && W && T && v(L, I, F, {
                    locale: E
                }, {
                    kind: A
                }, S)
            }
            ), [F, I, W, E, T, null == k ? void 0 : k.locale, L, S, A]);
            const B = {
                ref: X,
                onClick(e) {
                    C || "function" !== typeof w || w(e),
                        C && z.props && "function" === typeof z.props.onClick && z.props.onClick(e),
                        L && (e.defaultPrevented || function (e, t, n, r, s, l, c, i, u, f) {
                            const { nodeName: d } = e.currentTarget;
                            if ("A" === d.toUpperCase() && (function (e) {
                                const t = e.currentTarget.getAttribute("target");
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) || !u && !(0,
                                a.isLocalURL)(n)))
                                return;
                            e.preventDefault();
                            const p = () => {
                                const e = null == c || c;
                                "beforePopState" in t ? t[s ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: i,
                                    scroll: e
                                }) : t[s ? "replace" : "push"](r || n, {
                                    forceOptimisticNavigation: !f,
                                    scroll: e
                                })
                            }
                                ;
                            u ? o.default.startTransition(p) : p()
                        }(e, L, I, F, x, j, N, E, S, T))
                },
                onMouseEnter(e) {
                    C || "function" !== typeof O || O(e),
                        C && z.props && "function" === typeof z.props.onMouseEnter && z.props.onMouseEnter(e),
                        L && (!T && S || v(L, I, F, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, S))
                },
                onTouchStart(e) {
                    C || "function" !== typeof P || P(e),
                        C && z.props && "function" === typeof z.props.onTouchStart && z.props.onTouchStart(e),
                        L && (!T && S || v(L, I, F, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, S))
                }
            };
            if ((0,
                l.isAbsoluteUrl)(F))
                B.href = F;
            else if (!C || g || "a" === z.type && !("href" in z.props)) {
                const e = "undefined" !== typeof E ? E : null == k ? void 0 : k.locale
                    , t = (null == k ? void 0 : k.isLocaleDomain) && (0,
                        d.getDomainLocale)(F, e, null == k ? void 0 : k.locales, null == k ? void 0 : k.domainLocales);
                B.href = t || (0,
                    p.addBasePath)((0,
                        c.addLocale)(F, e, null == k ? void 0 : k.defaultLocale))
            }
            return C ? o.default.cloneElement(z, B) : o.default.createElement("a", {
                ...R,
                ...B
            }, n)
        }
        ));
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
            Object.assign(t.default, t),
            e.exports = t.default)
    },
    7159: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
        const o = (e, t) => n(4842).normalizeLocalePath(e, t);
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
            Object.assign(t.default, t),
            e.exports = t.default)
    },
    508: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
        const o = n(7294)
            , r = n(29)
            , a = "function" === typeof IntersectionObserver
            , s = new Map
            , l = [];
        function c(e, t, n) {
            const { id: o, observer: r, elements: a } = function (e) {
                const t = {
                    root: e.root || null,
                    margin: e.rootMargin || ""
                }
                    , n = l.find((e => e.root === t.root && e.margin === t.margin));
                let o;
                if (n && (o = s.get(n),
                    o))
                    return o;
                const r = new Map
                    , a = new IntersectionObserver((e => {
                        e.forEach((e => {
                            const t = r.get(e.target)
                                , n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n)
                        }
                        ))
                    }
                    ), e);
                return o = {
                    id: t,
                    observer: a,
                    elements: r
                },
                    l.push(t),
                    s.set(t, o),
                    o
            }(n);
            return a.set(e, t),
                r.observe(e),
                function () {
                    if (a.delete(e),
                        r.unobserve(e),
                        0 === a.size) {
                        r.disconnect(),
                            s.delete(o);
                        const e = l.findIndex((e => e.root === o.root && e.margin === o.margin));
                        e > -1 && l.splice(e, 1)
                    }
                }
        }
        function i(e) {
            let { rootRef: t, rootMargin: n, disabled: s } = e;
            const l = s || !a
                , [i, u] = (0,
                    o.useState)(!1)
                , f = (0,
                    o.useRef)(null)
                , d = (0,
                    o.useCallback)((e => {
                        f.current = e
                    }
                    ), []);
            (0,
                o.useEffect)((() => {
                    if (a) {
                        if (l || i)
                            return;
                        const e = f.current;
                        if (e && e.tagName) {
                            return c(e, (e => e && u(e)), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            })
                        }
                    } else if (!i) {
                        const e = (0,
                            r.requestIdleCallback)((() => u(!0)));
                        return () => (0,
                            r.cancelIdleCallback)(e)
                    }
                }
                ), [l, n, t, i, f.current]);
            const p = (0,
                o.useCallback)((() => {
                    u(!1)
                }
                ), []);
            return [d, i, p]
        }
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
            Object.assign(t.default, t),
            e.exports = t.default)
    },
    5530: function () { },
    9926: function (e) {
        e.exports = {
            style: {
                fontFamily: "'__DM_Sans_12746b', '__DM_Sans_Fallback_12746b'",
                fontWeight: 400,
                fontStyle: "normal"
            },
            className: "__className_12746b",
            variable: "__variable_12746b"
        }
    },
    3976: function (e) {
        e.exports = {
            style: {
                fontFamily: "'__Noto_Serif_JP_ef0802', '__Noto_Serif_JP_Fallback_ef0802'",
                fontWeight: 400,
                fontStyle: "normal"
            },
            className: "__className_ef0802",
            variable: "__variable_ef0802"
        }
    },
    8032: function (e) {
        e.exports = {
            layout: "J",
            wrap: "K",
            main: "L"
        }
    },
    5205: function (e) {
        e.exports = {
            langSwitcher: "cC",
            list: "cE",
            item: "cF",
            link: "cG",
            active: "cH"
        }
    },
    2312: function (e) {
        e.exports = {
            box: "aQ",
            sign: "aR",
            arrowBox: "aS",
            logo: "aT",
            isOpened: "aU",
            arrow: "aV",
            popover: "aW",
            info: "aX",
            explainer: "aY",
            cross: "aZ"
        }
    },
    8406: function (e) {
        e.exports = {
            list: "bW",
            item: "bX",
            link: "bY",
            active: "bZ"
        }
    },
    1606: function (e) {
        e.exports = {
            nav: "cj",
            menu: "ck",
            isReady: "cl",
            menuIsOverflowed: "cm",
            menuListMaskDisable: "cn"
        }
    },
    1664: function (e, t, n) {
        e.exports = n(5569)
    },
    1163: function (e, t, n) {
        e.exports = n(6885)
    },
    236: function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, {
                default: function () {
                    return w
                }
            });
        var o = n(5893)
            , r = (n(5530),
                n(9926))
            , a = n(3976)
            , s = n(8032)
            , l = n(1163)
            , c = n(5205)
            , i = n(4751)
            , u = n(7294);
        const f = {
            en: "ENG",
            tr: "TR"
        };
        function d() {
            const e = (0,
                l.useRouter)()
                , { locales: t, locale: n } = e
                , [r, a] = (0,
                    u.useState)("");
            return (0,
                u.useEffect)((() => {
                    let t = e.asPath.split("#")[1];
                    t = t ? "#" + t : "",
                        a(t)
                }
                ), [e.asPath]),
                (0,
                    u.useEffect)((() => {
                        function e() {
                            a(window.location.hash)
                        }
                        return window.addEventListener("hashchange", e),
                            () => {
                                window.removeEventListener("hashchange", e),
                                    a("")
                            }
                    }
                    ), []),
                (0,
                    o.jsx)("ul", {
                        className: (0,
                            i.y)(c.list, c.langSwitcher),
                        children: t.map((t => {
                            const { asPath: a } = e
                                , s = a.split("#")[0]
                                , l = "en" === t ? "" : "/".concat(t);
                            return (0,
                                o.jsx)("li", {
                                    className: c.item,
                                    children: t === n ? (0,
                                        o.jsx)("span", {
                                            className: (0,
                                                i.y)(c.link, c.active),
                                            children: f[t]
                                        }) : (0,
                                            o.jsx)("a", {
                                                href: l + s + r,
                                                className: c.link,
                                                children: f[t]
                                            })
                                }, t)
                        }
                        ))
                    })
        }
        var p = n(2312)
            , h = n.n(p);
        function m() {
            const [e, t] = (0,
                u.useState)(!1);
            function n(e) {
                if (e.target.closest(".".concat(h().logo)))
                    return !1;
                t(!1)
            }
            /* return (0,
                u.useEffect)((() => (document.addEventListener("click", n),
                    () => document.removeEventListener("click", n)))),
                (0,
                    o.jsxs)("div", {
                        className: (0,
                            i.y)(h().logo, e && h().isOpened),
                        children: [(0,
                            o.jsxs)("div", {
                                className: h().popover,
                                children: [(0,
                                    o.jsx)("div", {
                                        className: h().info,
                                        children: (0,
                                            o.jsx)("a", {
                                                href: "mailto:info@halfof8.com",
                                                children: "info@halfof8.com"
                                            })
                                    }), (0,
                                        o.jsx)("div", {
                                            className: h().explainer,
                                            children: (0,
                                                o.jsx)("img", {
                                                    src: "/icons/explainer-math.svg",
                                                    alt: "8/2 \u2192 4",
                                                    width: "138",
                                                    height: "44"
                                                })
                                        }), (0,
                                            o.jsx)("div", {
                                                className: h().explainer,
                                                children: (0,
                                                    o.jsx)("img", {
                                                        src: "/icons/explainer-zero.svg",
                                                        alt: "8 \u2192 0",
                                                        width: "138",
                                                        height: "44"
                                                    })
                                            }), (0,
                                                o.jsx)("div", {
                                                    className: h().explainer,
                                                    children: (0,
                                                        o.jsx)("img", {
                                                            src: "/icons/explainer-three.svg",
                                                            alt: "8| \u2192 3",
                                                            width: "138",
                                                            height: "44"
                                                        })
                                                }), (0,
                                                    o.jsx)("div", {
                                                        className: h().explainer,
                                                        children: (0,
                                                            o.jsx)("img", {
                                                                src: "/icons/explainer-inf.svg",
                                                                alt: "\u221e/2 \u2192 \u221e",
                                                                width: "138",
                                                                height: "44"
                                                            })
                                                    })]
                            }), (0,
                                o.jsxs)("button", {
                                    className: h().box,
                                    onClick: function () {
                                        t(!e)
                                    },
                                    children: [(0,
                                        o.jsx)("span", {
                                            className: h().sign,
                                            children: (0,
                                                o.jsx)("img", {
                                                    src: "/icons/logo.svg",
                                                    alt: "\xbd8",
                                                    width: "36",
                                                    height: "24"
                                                })
                                        }), (0,
                                            o.jsx)("span", {
                                                className: h().cross
                                            }), (0,
                                                o.jsx)("span", {
                                                    className: h().arrowBox,
                                                    children: (0,
                                                        o.jsx)("img", {
                                                            className: h().arrow,
                                                            src: "/icons/arrow-bold-up.svg",
                                                            alt: "arrow",
                                                            width: "13",
                                                            height: "23"
                                                        })
                                                })]
                                })]
                    }) */
        }
        var v = n(1664)
            , _ = n.n(v)
            , y = n(8406)
            , b = n.n(y);
        const g = [{
            href: "/",
            name: "Login"
        }];
        function x(e) {
            let { menuRef: t } = e;
            const n = (0,
                l.useRouter)();
            return (0,
                o.jsx)("ul", {
                    className: b().list,
                    ref: t,
                    children: g.map((e => {
                        const t = n.route === e.href;
                        return (0,
                            o.jsx)("li", {
                                className: b().item,
                                children: (0,
                                    o.jsx)(_(), {
                                        href: e.href,
                                        className: (0,
                                            i.y)(b().link, t && b().active),
                                        locale: n.locale,
                                        children: e.name
                                    })
                            }, e.href)
                    }
                    ))
                })
        }
        var j = n(1606);
        function N() {
            const e = (0,
                u.useRef)(null)
                , t = (0,
                    u.useRef)(null)
                , [n, r] = (0,
                    u.useState)(!1)
                , [a, s] = (0,
                    u.useState)(null)
                , [l, c] = (0,
                    u.useState)(!0);
            function f() {
                const n = e.current.offsetWidth
                    , o = t.current.offsetWidth;
                s(o > n)
            }
            return (0,
                u.useEffect)((() => (window.addEventListener("resize", f),
                    f(),
                    c(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)),
                    () => window.removeEventListener("resize", f))), []),
                (0,
                    u.useEffect)((() => {
                        null !== a && r(!0)
                    }
                    ), [a]),
                (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                            o.jsx)("nav", {
                                className: (0,
                                    i.y)(j.menu, a && j.menuIsOverflowed, l && j.menuListMaskDisable, n && j.isReady),
                                ref: e,
                                children: (0,
                                    o.jsx)(x, {
                                        menuRef: t
                                    })
                            }), (0,
                                o.jsx)(d, {}), (0,
                                    o.jsx)(m, {})]
                    })
        }
        var E = e => {
            let { children: t } = e;
            const n = (0,
                l.useRouter)()
                , { locale: c } = n;
            return (0,
                o.jsxs)("div", {
                    className: (0,
                        i.y)(s.layout, r.variable, a.variable, "lang-".concat(c)),
                    "data-layout": "",
                    children: [(0,
                        o.jsx)(N, {}), (0,
                            o.jsx)("main", {
                                className: s.wrap,
                                children: t
                            })]
                })
        }
            ;
        var w = function (e) {
            let { Component: t, pageProps: n } = e;
            return (0,
                o.jsx)(E, {
                    children: (0,
                        o.jsx)(t, {
                            ...n
                        })
                })
        }
    },
    4751: function (e, t, n) {
        "use strict";
        function o() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter((e => !!e)).join(" ")
        }
        n.d(t, {
            y: function () {
                return o
            }
        })
    }
}, function (e) {
    var t = function (t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], (function () {
        return t(1118),
            t(6885)
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
