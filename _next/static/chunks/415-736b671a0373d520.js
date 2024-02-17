"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[415], {
    3754: function(e, t, n) {
        function s(e, {cls: t, getStyle: n, idx: s}) {
            return `<span${t ? ` class="${t}"` : ""}${n ? ` style="${n(s)}"` : ""}>${e}</span>`
        }
        function r(e, {wordCls: t, letterCls: n, getWordStyle: r, getLetterStyle: i}) {
            const l = Boolean(n || i);
            let o = ""
              , a = 0
              , c = 0;
            return e.replace(/<[^>]+>|[^<>\s-&]+|&\w+;|[-\u2013\u2014]|\s+/g, (e=>{
                if ("<" === e[0] || /&\w+;/.test(e))
                    o += e;
                else if (/^\s+$/.test(e))
                    o += " ";
                else {
                    let h = "";
                    if (l) {
                        e.split("").forEach((e=>{
                            h += s(e, {
                                cls: n,
                                getStyle: i,
                                idx: c
                            }),
                            c++
                        }
                        ))
                    } else
                        h = e;
                    o += s(h, {
                        cls: t,
                        getStyle: r,
                        idx: a
                    }),
                    a++
                }
            }
            )),
            o
        }
        n.d(t, {
            A: function() {
                return r
            }
        })
    },
    7441: function(e, t, n) {
        function s() {
            return {
                async: !1,
                baseUrl: null,
                breaks: !1,
                extensions: null,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                hooks: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
            }
        }
        n.d(t, {
            TU: function() {
                return B
            }
        });
        let r = {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            hooks: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1
        };
        function i(e) {
            r = e
        }
        const l = /[&<>"']/
          , o = new RegExp(l.source,"g")
          , a = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/
          , c = new RegExp(a.source,"g")
          , h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , p = e=>h[e];
        function u(e, t) {
            if (t) {
                if (l.test(e))
                    return e.replace(o, p)
            } else if (a.test(e))
                return e.replace(c, p);
            return e
        }
        const g = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function d(e) {
            return e.replace(g, ((e,t)=>"colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""))
        }
        const k = /(^|[^\[])\^/g;
        function f(e, t) {
            e = "string" === typeof e ? e : e.source,
            t = t || "";
            const n = {
                replace: (t,s)=>(s = (s = s.source || s).replace(k, "$1"),
                e = e.replace(t, s),
                n),
                getRegex: ()=>new RegExp(e,t)
            };
            return n
        }
        const x = /[^\w:]/g
          , m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function b(e, t, n) {
            if (e) {
                let e;
                try {
                    e = decodeURIComponent(d(n)).replace(x, "").toLowerCase()
                } catch (s) {
                    return null
                }
                if (0 === e.indexOf("javascript:") || 0 === e.indexOf("vbscript:") || 0 === e.indexOf("data:"))
                    return null
            }
            t && !m.test(n) && (n = function(e, t) {
                w[" " + e] || (y.test(e) ? w[" " + e] = e + "/" : w[" " + e] = R(e, "/", !0));
                const n = -1 === (e = w[" " + e]).indexOf(":");
                return "//" === t.substring(0, 2) ? n ? t : e.replace(_, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace($, "$1") + t : e + t
            }(t, n));
            try {
                n = encodeURI(n).replace(/%25/g, "%")
            } catch (s) {
                return null
            }
            return n
        }
        const w = {}
          , y = /^[^:]+:\/*[^/]*$/
          , _ = /^([^:]+:)[\s\S]*$/
          , $ = /^([^:]+:\/*[^/]*)[\s\S]*$/;
        const z = {
            exec: function() {}
        };
        function S(e, t) {
            const n = e.replace(/\|/g, ((e,t,n)=>{
                let s = !1
                  , r = t;
                for (; --r >= 0 && "\\" === n[r]; )
                    s = !s;
                return s ? "|" : " |"
            }
            )).split(/ \|/);
            let s = 0;
            if (n[0].trim() || n.shift(),
            n.length > 0 && !n[n.length - 1].trim() && n.pop(),
            n.length > t)
                n.splice(t);
            else
                for (; n.length < t; )
                    n.push("");
            for (; s < n.length; s++)
                n[s] = n[s].trim().replace(/\\\|/g, "|");
            return n
        }
        function R(e, t, n) {
            const s = e.length;
            if (0 === s)
                return "";
            let r = 0;
            for (; r < s; ) {
                const i = e.charAt(s - r - 1);
                if (i !== t || n) {
                    if (i === t || !n)
                        break;
                    r++
                } else
                    r++
            }
            return e.slice(0, s - r)
        }
        function T(e, t, n, s) {
            const r = t.href
              , i = t.title ? u(t.title) : null
              , l = e[1].replace(/\\([\[\]])/g, "$1");
            if ("!" !== e[0].charAt(0)) {
                s.state.inLink = !0;
                const e = {
                    type: "link",
                    raw: n,
                    href: r,
                    title: i,
                    text: l,
                    tokens: s.inlineTokens(l)
                };
                return s.state.inLink = !1,
                e
            }
            return {
                type: "image",
                raw: n,
                href: r,
                title: i,
                text: u(l)
            }
        }
        class I {
            constructor(e) {
                this.options = e || r
            }
            space(e) {
                const t = this.rules.block.newline.exec(e);
                if (t && t[0].length > 0)
                    return {
                        type: "space",
                        raw: t[0]
                    }
            }
            code(e) {
                const t = this.rules.block.code.exec(e);
                if (t) {
                    const e = t[0].replace(/^ {1,4}/gm, "");
                    return {
                        type: "code",
                        raw: t[0],
                        codeBlockStyle: "indented",
                        text: this.options.pedantic ? e : R(e, "\n")
                    }
                }
            }
            fences(e) {
                const t = this.rules.block.fences.exec(e);
                if (t) {
                    const e = t[0]
                      , n = function(e, t) {
                        const n = e.match(/^(\s+)(?:```)/);
                        if (null === n)
                            return t;
                        const s = n[1];
                        return t.split("\n").map((e=>{
                            const t = e.match(/^\s+/);
                            if (null === t)
                                return e;
                            const [n] = t;
                            return n.length >= s.length ? e.slice(s.length) : e
                        }
                        )).join("\n")
                    }(e, t[3] || "");
                    return {
                        type: "code",
                        raw: e,
                        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                        text: n
                    }
                }
            }
            heading(e) {
                const t = this.rules.block.heading.exec(e);
                if (t) {
                    let e = t[2].trim();
                    if (/#$/.test(e)) {
                        const t = R(e, "#");
                        this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
                    }
                    return {
                        type: "heading",
                        raw: t[0],
                        depth: t[1].length,
                        text: e,
                        tokens: this.lexer.inline(e)
                    }
                }
            }
            hr(e) {
                const t = this.rules.block.hr.exec(e);
                if (t)
                    return {
                        type: "hr",
                        raw: t[0]
                    }
            }
            blockquote(e) {
                const t = this.rules.block.blockquote.exec(e);
                if (t) {
                    const e = t[0].replace(/^ *>[ \t]?/gm, "")
                      , n = this.lexer.state.top;
                    this.lexer.state.top = !0;
                    const s = this.lexer.blockTokens(e);
                    return this.lexer.state.top = n,
                    {
                        type: "blockquote",
                        raw: t[0],
                        tokens: s,
                        text: e
                    }
                }
            }
            list(e) {
                let t = this.rules.block.list.exec(e);
                if (t) {
                    let n, s, r, i, l, o, a, c, h, p, u, g, d = t[1].trim();
                    const k = d.length > 1
                      , f = {
                        type: "list",
                        raw: "",
                        ordered: k,
                        start: k ? +d.slice(0, -1) : "",
                        loose: !1,
                        items: []
                    };
                    d = k ? `\\d{1,9}\\${d.slice(-1)}` : `\\${d}`,
                    this.options.pedantic && (d = k ? d : "[*+-]");
                    const x = new RegExp(`^( {0,3}${d})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                    for (; e && (g = !1,
                    t = x.exec(e)) && !this.rules.block.hr.test(e); ) {
                        if (n = t[0],
                        e = e.substring(n.length),
                        c = t[2].split("\n", 1)[0].replace(/^\t+/, (e=>" ".repeat(3 * e.length))),
                        h = e.split("\n", 1)[0],
                        this.options.pedantic ? (i = 2,
                        u = c.trimLeft()) : (i = t[2].search(/[^ ]/),
                        i = i > 4 ? 1 : i,
                        u = c.slice(i),
                        i += t[1].length),
                        o = !1,
                        !c && /^ *$/.test(h) && (n += h + "\n",
                        e = e.substring(h.length + 1),
                        g = !0),
                        !g) {
                            const t = new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`)
                              , s = new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)
                              , r = new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`)
                              , l = new RegExp(`^ {0,${Math.min(3, i - 1)}}#`);
                            for (; e && (p = e.split("\n", 1)[0],
                            h = p,
                            this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                            !r.test(h)) && !l.test(h) && !t.test(h) && !s.test(e); ) {
                                if (h.search(/[^ ]/) >= i || !h.trim())
                                    u += "\n" + h.slice(i);
                                else {
                                    if (o)
                                        break;
                                    if (c.search(/[^ ]/) >= 4)
                                        break;
                                    if (r.test(c))
                                        break;
                                    if (l.test(c))
                                        break;
                                    if (s.test(c))
                                        break;
                                    u += "\n" + h
                                }
                                o || h.trim() || (o = !0),
                                n += p + "\n",
                                e = e.substring(p.length + 1),
                                c = h.slice(i)
                            }
                        }
                        f.loose || (a ? f.loose = !0 : /\n *\n *$/.test(n) && (a = !0)),
                        this.options.gfm && (s = /^\[[ xX]\] /.exec(u),
                        s && (r = "[ ] " !== s[0],
                        u = u.replace(/^\[[ xX]\] +/, ""))),
                        f.items.push({
                            type: "list_item",
                            raw: n,
                            task: !!s,
                            checked: r,
                            loose: !1,
                            text: u
                        }),
                        f.raw += n
                    }
                    f.items[f.items.length - 1].raw = n.trimRight(),
                    f.items[f.items.length - 1].text = u.trimRight(),
                    f.raw = f.raw.trimRight();
                    const m = f.items.length;
                    for (l = 0; l < m; l++)
                        if (this.lexer.state.top = !1,
                        f.items[l].tokens = this.lexer.blockTokens(f.items[l].text, []),
                        !f.loose) {
                            const e = f.items[l].tokens.filter((e=>"space" === e.type))
                              , t = e.length > 0 && e.some((e=>/\n.*\n/.test(e.raw)));
                            f.loose = t
                        }
                    if (f.loose)
                        for (l = 0; l < m; l++)
                            f.items[l].loose = !0;
                    return f
                }
            }
            html(e) {
                const t = this.rules.block.html.exec(e);
                if (t) {
                    const e = {
                        type: "html",
                        block: !0,
                        raw: t[0],
                        pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                        text: t[0]
                    };
                    if (this.options.sanitize) {
                        const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : u(t[0]);
                        e.type = "paragraph",
                        e.text = n,
                        e.tokens = this.lexer.inline(n)
                    }
                    return e
                }
            }
            def(e) {
                const t = this.rules.block.def.exec(e);
                if (t) {
                    const e = t[1].toLowerCase().replace(/\s+/g, " ")
                      , n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : ""
                      , s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                    return {
                        type: "def",
                        tag: e,
                        raw: t[0],
                        href: n,
                        title: s
                    }
                }
            }
            table(e) {
                const t = this.rules.block.table.exec(e);
                if (t) {
                    const e = {
                        type: "table",
                        header: S(t[1]).map((e=>({
                            text: e
                        }))),
                        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                    };
                    if (e.header.length === e.align.length) {
                        e.raw = t[0];
                        let n, s, r, i, l = e.align.length;
                        for (n = 0; n < l; n++)
                            /^ *-+: *$/.test(e.align[n]) ? e.align[n] = "right" : /^ *:-+: *$/.test(e.align[n]) ? e.align[n] = "center" : /^ *:-+ *$/.test(e.align[n]) ? e.align[n] = "left" : e.align[n] = null;
                        for (l = e.rows.length,
                        n = 0; n < l; n++)
                            e.rows[n] = S(e.rows[n], e.header.length).map((e=>({
                                text: e
                            })));
                        for (l = e.header.length,
                        s = 0; s < l; s++)
                            e.header[s].tokens = this.lexer.inline(e.header[s].text);
                        for (l = e.rows.length,
                        s = 0; s < l; s++)
                            for (i = e.rows[s],
                            r = 0; r < i.length; r++)
                                i[r].tokens = this.lexer.inline(i[r].text);
                        return e
                    }
                }
            }
            lheading(e) {
                const t = this.rules.block.lheading.exec(e);
                if (t)
                    return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1],
                        tokens: this.lexer.inline(t[1])
                    }
            }
            paragraph(e) {
                const t = this.rules.block.paragraph.exec(e);
                if (t) {
                    const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                    return {
                        type: "paragraph",
                        raw: t[0],
                        text: e,
                        tokens: this.lexer.inline(e)
                    }
                }
            }
            text(e) {
                const t = this.rules.block.text.exec(e);
                if (t)
                    return {
                        type: "text",
                        raw: t[0],
                        text: t[0],
                        tokens: this.lexer.inline(t[0])
                    }
            }
            escape(e) {
                const t = this.rules.inline.escape.exec(e);
                if (t)
                    return {
                        type: "escape",
                        raw: t[0],
                        text: u(t[1])
                    }
            }
            tag(e) {
                const t = this.rules.inline.tag.exec(e);
                if (t)
                    return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1),
                    {
                        type: this.options.sanitize ? "text" : "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : u(t[0]) : t[0]
                    }
            }
            link(e) {
                const t = this.rules.inline.link.exec(e);
                if (t) {
                    const e = t[2].trim();
                    if (!this.options.pedantic && /^</.test(e)) {
                        if (!/>$/.test(e))
                            return;
                        const t = R(e.slice(0, -1), "\\");
                        if ((e.length - t.length) % 2 === 0)
                            return
                    } else {
                        const e = function(e, t) {
                            if (-1 === e.indexOf(t[1]))
                                return -1;
                            const n = e.length;
                            let s = 0
                              , r = 0;
                            for (; r < n; r++)
                                if ("\\" === e[r])
                                    r++;
                                else if (e[r] === t[0])
                                    s++;
                                else if (e[r] === t[1] && (s--,
                                s < 0))
                                    return r;
                            return -1
                        }(t[2], "()");
                        if (e > -1) {
                            const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                            t[2] = t[2].substring(0, e),
                            t[0] = t[0].substring(0, n).trim(),
                            t[3] = ""
                        }
                    }
                    let n = t[2]
                      , s = "";
                    if (this.options.pedantic) {
                        const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                        e && (n = e[1],
                        s = e[3])
                    } else
                        s = t[3] ? t[3].slice(1, -1) : "";
                    return n = n.trim(),
                    /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)),
                    T(t, {
                        href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                        title: s ? s.replace(this.rules.inline._escapes, "$1") : s
                    }, t[0], this.lexer)
                }
            }
            reflink(e, t) {
                let n;
                if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                    let e = (n[2] || n[1]).replace(/\s+/g, " ");
                    if (e = t[e.toLowerCase()],
                    !e) {
                        const e = n[0].charAt(0);
                        return {
                            type: "text",
                            raw: e,
                            text: e
                        }
                    }
                    return T(n, e, n[0], this.lexer)
                }
            }
            emStrong(e, t, n="") {
                let s = this.rules.inline.emStrong.lDelim.exec(e);
                if (!s)
                    return;
                if (s[3] && n.match(/[\p{L}\p{N}]/u))
                    return;
                if (!(s[1] || s[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
                    const n = s[0].length - 1;
                    let r, i, l = n, o = 0;
                    const a = "*" === s[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                    for (a.lastIndex = 0,
                    t = t.slice(-1 * e.length + n); null != (s = a.exec(t)); ) {
                        if (r = s[1] || s[2] || s[3] || s[4] || s[5] || s[6],
                        !r)
                            continue;
                        if (i = r.length,
                        s[3] || s[4]) {
                            l += i;
                            continue
                        }
                        if ((s[5] || s[6]) && n % 3 && !((n + i) % 3)) {
                            o += i;
                            continue
                        }
                        if (l -= i,
                        l > 0)
                            continue;
                        i = Math.min(i, i + l + o);
                        const t = e.slice(0, n + s.index + i + 1);
                        if (Math.min(n, i) % 2) {
                            const e = t.slice(1, -1);
                            return {
                                type: "em",
                                raw: t,
                                text: e,
                                tokens: this.lexer.inlineTokens(e)
                            }
                        }
                        const a = t.slice(2, -2);
                        return {
                            type: "strong",
                            raw: t,
                            text: a,
                            tokens: this.lexer.inlineTokens(a)
                        }
                    }
                }
            }
            codespan(e) {
                const t = this.rules.inline.code.exec(e);
                if (t) {
                    let e = t[2].replace(/\n/g, " ");
                    const n = /[^ ]/.test(e)
                      , s = /^ /.test(e) && / $/.test(e);
                    return n && s && (e = e.substring(1, e.length - 1)),
                    e = u(e, !0),
                    {
                        type: "codespan",
                        raw: t[0],
                        text: e
                    }
                }
            }
            br(e) {
                const t = this.rules.inline.br.exec(e);
                if (t)
                    return {
                        type: "br",
                        raw: t[0]
                    }
            }
            del(e) {
                const t = this.rules.inline.del.exec(e);
                if (t)
                    return {
                        type: "del",
                        raw: t[0],
                        text: t[2],
                        tokens: this.lexer.inlineTokens(t[2])
                    }
            }
            autolink(e, t) {
                const n = this.rules.inline.autolink.exec(e);
                if (n) {
                    let e, s;
                    return "@" === n[2] ? (e = u(this.options.mangle ? t(n[1]) : n[1]),
                    s = "mailto:" + e) : (e = u(n[1]),
                    s = e),
                    {
                        type: "link",
                        raw: n[0],
                        text: e,
                        href: s,
                        tokens: [{
                            type: "text",
                            raw: e,
                            text: e
                        }]
                    }
                }
            }
            url(e, t) {
                let n;
                if (n = this.rules.inline.url.exec(e)) {
                    let e, s;
                    if ("@" === n[2])
                        e = u(this.options.mangle ? t(n[0]) : n[0]),
                        s = "mailto:" + e;
                    else {
                        let t;
                        do {
                            t = n[0],
                            n[0] = this.rules.inline._backpedal.exec(n[0])[0]
                        } while (t !== n[0]);
                        e = u(n[0]),
                        s = "www." === n[1] ? "http://" + n[0] : n[0]
                    }
                    return {
                        type: "link",
                        raw: n[0],
                        text: e,
                        href: s,
                        tokens: [{
                            type: "text",
                            raw: e,
                            text: e
                        }]
                    }
                }
            }
            inlineText(e, t) {
                const n = this.rules.inline.text.exec(e);
                if (n) {
                    let e;
                    return e = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : u(n[0]) : n[0] : u(this.options.smartypants ? t(n[0]) : n[0]),
                    {
                        type: "text",
                        raw: n[0],
                        text: e
                    }
                }
            }
        }
        const v = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
            table: z,
            lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
            _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        };
        v.def = f(v.def).replace("label", v._label).replace("title", v._title).getRegex(),
        v.bullet = /(?:[*+-]|\d{1,9}[.)])/,
        v.listItemStart = f(/^( *)(bull) */).replace("bull", v.bullet).getRegex(),
        v.list = f(v.list).replace(/bull/g, v.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + v.def.source + ")").getRegex(),
        v._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
        v._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
        v.html = f(v.html, "i").replace("comment", v._comment).replace("tag", v._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
        v.lheading = f(v.lheading).replace(/bull/g, v.bullet).getRegex(),
        v.paragraph = f(v._paragraph).replace("hr", v.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v._tag).getRegex(),
        v.blockquote = f(v.blockquote).replace("paragraph", v.paragraph).getRegex(),
        v.normal = {
            ...v
        },
        v.gfm = {
            ...v.normal,
            table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        },
        v.gfm.table = f(v.gfm.table).replace("hr", v.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v._tag).getRegex(),
        v.gfm.paragraph = f(v._paragraph).replace("hr", v.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", v.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v._tag).getRegex(),
        v.pedantic = {
            ...v.normal,
            html: f("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", v._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: z,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: f(v.normal._paragraph).replace("hr", v.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", v.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
        };
        const A = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: z,
            tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(ref)\]/,
            nolink: /^!?\[(ref)\](?:\[\])?/,
            reflinkSearch: "reflink|nolink(?!\\()",
            emStrong: {
                lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
                rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
                rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
            },
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: z,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            punctuation: /^((?![*_])[\spunctuation])/
        };
        function E(e) {
            return e.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026")
        }
        function P(e) {
            let t, n, s = "";
            const r = e.length;
            for (t = 0; t < r; t++)
                n = e.charCodeAt(t),
                Math.random() > .5 && (n = "x" + n.toString(16)),
                s += "&#" + n + ";";
            return s
        }
        A._punctuation = "\\p{P}$+<=>`^|~",
        A.punctuation = f(A.punctuation, "u").replace(/punctuation/g, A._punctuation).getRegex(),
        A.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
        A.anyPunctuation = /\\[punct]/g,
        A._escapes = /\\([punct])/g,
        A._comment = f(v._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
        A.emStrong.lDelim = f(A.emStrong.lDelim, "u").replace(/punct/g, A._punctuation).getRegex(),
        A.emStrong.rDelimAst = f(A.emStrong.rDelimAst, "gu").replace(/punct/g, A._punctuation).getRegex(),
        A.emStrong.rDelimUnd = f(A.emStrong.rDelimUnd, "gu").replace(/punct/g, A._punctuation).getRegex(),
        A.anyPunctuation = f(A.anyPunctuation, "gu").replace(/punct/g, A._punctuation).getRegex(),
        A._escapes = f(A._escapes, "gu").replace(/punct/g, A._punctuation).getRegex(),
        A._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
        A._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        A.autolink = f(A.autolink).replace("scheme", A._scheme).replace("email", A._email).getRegex(),
        A._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
        A.tag = f(A.tag).replace("comment", A._comment).replace("attribute", A._attribute).getRegex(),
        A._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
        A._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,
        A._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
        A.link = f(A.link).replace("label", A._label).replace("href", A._href).replace("title", A._title).getRegex(),
        A.reflink = f(A.reflink).replace("label", A._label).replace("ref", v._label).getRegex(),
        A.nolink = f(A.nolink).replace("ref", v._label).getRegex(),
        A.reflinkSearch = f(A.reflinkSearch, "g").replace("reflink", A.reflink).replace("nolink", A.nolink).getRegex(),
        A.normal = {
            ...A
        },
        A.pedantic = {
            ...A.normal,
            strong: {
                start: /^__|\*\*/,
                middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                endAst: /\*\*(?!\*)/g,
                endUnd: /__(?!_)/g
            },
            em: {
                start: /^_|\*/,
                middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                endAst: /\*(?!\*)/g,
                endUnd: /_(?!_)/g
            },
            link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", A._label).getRegex(),
            reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", A._label).getRegex()
        },
        A.gfm = {
            ...A.normal,
            escape: f(A.escape).replace("])", "~|])").getRegex(),
            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
        },
        A.gfm.url = f(A.gfm.url, "i").replace("email", A.gfm._extended_email).getRegex(),
        A.breaks = {
            ...A.gfm,
            br: f(A.br).replace("{2,}", "*").getRegex(),
            text: f(A.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
        };
        class C {
            constructor(e) {
                this.tokens = [],
                this.tokens.links = Object.create(null),
                this.options = e || r,
                this.options.tokenizer = this.options.tokenizer || new I,
                this.tokenizer = this.options.tokenizer,
                this.tokenizer.options = this.options,
                this.tokenizer.lexer = this,
                this.inlineQueue = [],
                this.state = {
                    inLink: !1,
                    inRawBlock: !1,
                    top: !0
                };
                const t = {
                    block: v.normal,
                    inline: A.normal
                };
                this.options.pedantic ? (t.block = v.pedantic,
                t.inline = A.pedantic) : this.options.gfm && (t.block = v.gfm,
                this.options.breaks ? t.inline = A.breaks : t.inline = A.gfm),
                this.tokenizer.rules = t
            }
            static get rules() {
                return {
                    block: v,
                    inline: A
                }
            }
            static lex(e, t) {
                return new C(t).lex(e)
            }
            static lexInline(e, t) {
                return new C(t).inlineTokens(e)
            }
            lex(e) {
                let t;
                for (e = e.replace(/\r\n|\r/g, "\n"),
                this.blockTokens(e, this.tokens); t = this.inlineQueue.shift(); )
                    this.inlineTokens(t.src, t.tokens);
                return this.tokens
            }
            blockTokens(e, t=[]) {
                let n, s, r, i;
                for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, ((e,t,n)=>t + "    ".repeat(n.length))); e; )
                    if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s=>!!(n = s.call({
                        lexer: this
                    }, e, t)) && (e = e.substring(n.raw.length),
                    t.push(n),
                    !0)))))
                        if (n = this.tokenizer.space(e))
                            e = e.substring(n.raw.length),
                            1 === n.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(n);
                        else if (n = this.tokenizer.code(e))
                            e = e.substring(n.raw.length),
                            s = t[t.length - 1],
                            !s || "paragraph" !== s.type && "text" !== s.type ? t.push(n) : (s.raw += "\n" + n.raw,
                            s.text += "\n" + n.text,
                            this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
                        else if (n = this.tokenizer.fences(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.heading(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.hr(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.blockquote(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.list(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.html(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.def(e))
                            e = e.substring(n.raw.length),
                            s = t[t.length - 1],
                            !s || "paragraph" !== s.type && "text" !== s.type ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                                href: n.href,
                                title: n.title
                            }) : (s.raw += "\n" + n.raw,
                            s.text += "\n" + n.raw,
                            this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
                        else if (n = this.tokenizer.table(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.lheading(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else {
                            if (r = e,
                            this.options.extensions && this.options.extensions.startBlock) {
                                let t = 1 / 0;
                                const n = e.slice(1);
                                let s;
                                this.options.extensions.startBlock.forEach((function(e) {
                                    s = e.call({
                                        lexer: this
                                    }, n),
                                    "number" === typeof s && s >= 0 && (t = Math.min(t, s))
                                }
                                )),
                                t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1))
                            }
                            if (this.state.top && (n = this.tokenizer.paragraph(r)))
                                s = t[t.length - 1],
                                i && "paragraph" === s.type ? (s.raw += "\n" + n.raw,
                                s.text += "\n" + n.text,
                                this.inlineQueue.pop(),
                                this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(n),
                                i = r.length !== e.length,
                                e = e.substring(n.raw.length);
                            else if (n = this.tokenizer.text(e))
                                e = e.substring(n.raw.length),
                                s = t[t.length - 1],
                                s && "text" === s.type ? (s.raw += "\n" + n.raw,
                                s.text += "\n" + n.text,
                                this.inlineQueue.pop(),
                                this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(n);
                            else if (e) {
                                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw new Error(t)
                            }
                        }
                return this.state.top = !0,
                t
            }
            inline(e, t=[]) {
                return this.inlineQueue.push({
                    src: e,
                    tokens: t
                }),
                t
            }
            inlineTokens(e, t=[]) {
                let n, s, r, i, l, o, a = e;
                if (this.tokens.links) {
                    const e = Object.keys(this.tokens.links);
                    if (e.length > 0)
                        for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(a)); )
                            e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                }
                for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(a)); )
                    a = a.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (; null != (i = this.tokenizer.rules.inline.anyPunctuation.exec(a)); )
                    a = a.slice(0, i.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                for (; e; )
                    if (l || (o = ""),
                    l = !1,
                    !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((s=>!!(n = s.call({
                        lexer: this
                    }, e, t)) && (e = e.substring(n.raw.length),
                    t.push(n),
                    !0)))))
                        if (n = this.tokenizer.escape(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.tag(e))
                            e = e.substring(n.raw.length),
                            s = t[t.length - 1],
                            s && "text" === n.type && "text" === s.type ? (s.raw += n.raw,
                            s.text += n.text) : t.push(n);
                        else if (n = this.tokenizer.link(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.reflink(e, this.tokens.links))
                            e = e.substring(n.raw.length),
                            s = t[t.length - 1],
                            s && "text" === n.type && "text" === s.type ? (s.raw += n.raw,
                            s.text += n.text) : t.push(n);
                        else if (n = this.tokenizer.emStrong(e, a, o))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.codespan(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.br(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.del(e))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (n = this.tokenizer.autolink(e, P))
                            e = e.substring(n.raw.length),
                            t.push(n);
                        else if (this.state.inLink || !(n = this.tokenizer.url(e, P))) {
                            if (r = e,
                            this.options.extensions && this.options.extensions.startInline) {
                                let t = 1 / 0;
                                const n = e.slice(1);
                                let s;
                                this.options.extensions.startInline.forEach((function(e) {
                                    s = e.call({
                                        lexer: this
                                    }, n),
                                    "number" === typeof s && s >= 0 && (t = Math.min(t, s))
                                }
                                )),
                                t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1))
                            }
                            if (n = this.tokenizer.inlineText(r, E))
                                e = e.substring(n.raw.length),
                                "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)),
                                l = !0,
                                s = t[t.length - 1],
                                s && "text" === s.type ? (s.raw += n.raw,
                                s.text += n.text) : t.push(n);
                            else if (e) {
                                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw new Error(t)
                            }
                        } else
                            e = e.substring(n.raw.length),
                            t.push(n);
                return t
            }
        }
        class Z {
            constructor(e) {
                this.options = e || r
            }
            code(e, t, n) {
                const s = (t || "").match(/\S*/)[0];
                if (this.options.highlight) {
                    const t = this.options.highlight(e, s);
                    null != t && t !== e && (n = !0,
                    e = t)
                }
                return e = e.replace(/\n$/, "") + "\n",
                s ? '<pre><code class="' + this.options.langPrefix + u(s) + '">' + (n ? e : u(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : u(e, !0)) + "</code></pre>\n"
            }
            blockquote(e) {
                return `<blockquote>\n${e}</blockquote>\n`
            }
            html(e, t) {
                return e
            }
            heading(e, t, n, s) {
                if (this.options.headerIds) {
                    return `<h${t} id="${this.options.headerPrefix + s.slug(n)}">${e}</h${t}>\n`
                }
                return `<h${t}>${e}</h${t}>\n`
            }
            hr() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }
            list(e, t, n) {
                const s = t ? "ol" : "ul";
                return "<" + s + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + s + ">\n"
            }
            listitem(e) {
                return `<li>${e}</li>\n`
            }
            checkbox(e) {
                return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }
            paragraph(e) {
                return `<p>${e}</p>\n`
            }
            table(e, t) {
                return t && (t = `<tbody>${t}</tbody>`),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
            }
            tablerow(e) {
                return `<tr>\n${e}</tr>\n`
            }
            tablecell(e, t) {
                const n = t.header ? "th" : "td";
                return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`
            }
            strong(e) {
                return `<strong>${e}</strong>`
            }
            em(e) {
                return `<em>${e}</em>`
            }
            codespan(e) {
                return `<code>${e}</code>`
            }
            br() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }
            del(e) {
                return `<del>${e}</del>`
            }
            link(e, t, n) {
                if (null === (e = b(this.options.sanitize, this.options.baseUrl, e)))
                    return n;
                let s = '<a href="' + e + '"';
                return t && (s += ' title="' + t + '"'),
                s += ">" + n + "</a>",
                s
            }
            image(e, t, n) {
                if (null === (e = b(this.options.sanitize, this.options.baseUrl, e)))
                    return n;
                let s = `<img src="${e}" alt="${n}"`;
                return t && (s += ` title="${t}"`),
                s += this.options.xhtml ? "/>" : ">",
                s
            }
            text(e) {
                return e
            }
        }
        class q {
            strong(e) {
                return e
            }
            em(e) {
                return e
            }
            codespan(e) {
                return e
            }
            del(e) {
                return e
            }
            html(e) {
                return e
            }
            text(e) {
                return e
            }
            link(e, t, n) {
                return "" + n
            }
            image(e, t, n) {
                return "" + n
            }
            br() {
                return ""
            }
        }
        class O {
            constructor() {
                this.seen = {}
            }
            serialize(e) {
                return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
            }
            getNextSafeSlug(e, t) {
                let n = e
                  , s = 0;
                if (this.seen.hasOwnProperty(n)) {
                    s = this.seen[e];
                    do {
                        s++,
                        n = e + "-" + s
                    } while (this.seen.hasOwnProperty(n))
                }
                return t || (this.seen[e] = s,
                this.seen[n] = 0),
                n
            }
            slug(e, t={}) {
                const n = this.serialize(e);
                return this.getNextSafeSlug(n, t.dryrun)
            }
        }
        class L {
            constructor(e) {
                this.options = e || r,
                this.options.renderer = this.options.renderer || new Z,
                this.renderer = this.options.renderer,
                this.renderer.options = this.options,
                this.textRenderer = new q,
                this.slugger = new O
            }
            static parse(e, t) {
                return new L(t).parse(e)
            }
            static parseInline(e, t) {
                return new L(t).parseInline(e)
            }
            parse(e, t=!0) {
                let n, s, r, i, l, o, a, c, h, p, u, g, k, f, x, m, b, w, y, _ = "";
                const $ = e.length;
                for (n = 0; n < $; n++)
                    if (p = e[n],
                    this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type] && (y = this.options.extensions.renderers[p.type].call({
                        parser: this
                    }, p),
                    !1 !== y || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(p.type)))
                        _ += y || "";
                    else
                        switch (p.type) {
                        case "space":
                            continue;
                        case "hr":
                            _ += this.renderer.hr();
                            continue;
                        case "heading":
                            _ += this.renderer.heading(this.parseInline(p.tokens), p.depth, d(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
                            continue;
                        case "code":
                            _ += this.renderer.code(p.text, p.lang, p.escaped);
                            continue;
                        case "table":
                            for (c = "",
                            a = "",
                            i = p.header.length,
                            s = 0; s < i; s++)
                                a += this.renderer.tablecell(this.parseInline(p.header[s].tokens), {
                                    header: !0,
                                    align: p.align[s]
                                });
                            for (c += this.renderer.tablerow(a),
                            h = "",
                            i = p.rows.length,
                            s = 0; s < i; s++) {
                                for (o = p.rows[s],
                                a = "",
                                l = o.length,
                                r = 0; r < l; r++)
                                    a += this.renderer.tablecell(this.parseInline(o[r].tokens), {
                                        header: !1,
                                        align: p.align[r]
                                    });
                                h += this.renderer.tablerow(a)
                            }
                            _ += this.renderer.table(c, h);
                            continue;
                        case "blockquote":
                            h = this.parse(p.tokens),
                            _ += this.renderer.blockquote(h);
                            continue;
                        case "list":
                            for (u = p.ordered,
                            g = p.start,
                            k = p.loose,
                            i = p.items.length,
                            h = "",
                            s = 0; s < i; s++)
                                x = p.items[s],
                                m = x.checked,
                                b = x.task,
                                f = "",
                                x.task && (w = this.renderer.checkbox(m),
                                k ? x.tokens.length > 0 && "paragraph" === x.tokens[0].type ? (x.tokens[0].text = w + " " + x.tokens[0].text,
                                x.tokens[0].tokens && x.tokens[0].tokens.length > 0 && "text" === x.tokens[0].tokens[0].type && (x.tokens[0].tokens[0].text = w + " " + x.tokens[0].tokens[0].text)) : x.tokens.unshift({
                                    type: "text",
                                    text: w
                                }) : f += w),
                                f += this.parse(x.tokens, k),
                                h += this.renderer.listitem(f, b, m);
                            _ += this.renderer.list(h, u, g);
                            continue;
                        case "html":
                            _ += this.renderer.html(p.text, p.block);
                            continue;
                        case "paragraph":
                            _ += this.renderer.paragraph(this.parseInline(p.tokens));
                            continue;
                        case "text":
                            for (h = p.tokens ? this.parseInline(p.tokens) : p.text; n + 1 < $ && "text" === e[n + 1].type; )
                                p = e[++n],
                                h += "\n" + (p.tokens ? this.parseInline(p.tokens) : p.text);
                            _ += t ? this.renderer.paragraph(h) : h;
                            continue;
                        default:
                            {
                                const e = 'Token with "' + p.type + '" type was not found.';
                                if (this.options.silent)
                                    return void console.error(e);
                                throw new Error(e)
                            }
                        }
                return _
            }
            parseInline(e, t) {
                t = t || this.renderer;
                let n, s, r, i = "";
                const l = e.length;
                for (n = 0; n < l; n++)
                    if (s = e[n],
                    this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type] && (r = this.options.extensions.renderers[s.type].call({
                        parser: this
                    }, s),
                    !1 !== r || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)))
                        i += r || "";
                    else
                        switch (s.type) {
                        case "escape":
                        case "text":
                            i += t.text(s.text);
                            break;
                        case "html":
                            i += t.html(s.text);
                            break;
                        case "link":
                            i += t.link(s.href, s.title, this.parseInline(s.tokens, t));
                            break;
                        case "image":
                            i += t.image(s.href, s.title, s.text);
                            break;
                        case "strong":
                            i += t.strong(this.parseInline(s.tokens, t));
                            break;
                        case "em":
                            i += t.em(this.parseInline(s.tokens, t));
                            break;
                        case "codespan":
                            i += t.codespan(s.text);
                            break;
                        case "br":
                            i += t.br();
                            break;
                        case "del":
                            i += t.del(this.parseInline(s.tokens, t));
                            break;
                        default:
                            {
                                const e = 'Token with "' + s.type + '" type was not found.';
                                if (this.options.silent)
                                    return void console.error(e);
                                throw new Error(e)
                            }
                        }
                return i
            }
        }
        class D {
            constructor(e) {
                this.options = e || r
            }
            static passThroughHooks = new Set(["preprocess", "postprocess"]);
            preprocess(e) {
                return e
            }
            postprocess(e) {
                return e
            }
        }
        const j = new class {
            defaults = {
                async: !1,
                baseUrl: null,
                breaks: !1,
                extensions: null,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                hooks: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
            };
            options = this.setOptions;
            parse = this.#e(C.lex, L.parse);
            parseInline = this.#e(C.lexInline, L.parseInline);
            Parser = L;
            parser = L.parse;
            Renderer = Z;
            TextRenderer = q;
            Lexer = C;
            lexer = C.lex;
            Tokenizer = I;
            Slugger = O;
            Hooks = D;
            constructor(...e) {
                this.use(...e)
            }
            walkTokens(e, t) {
                let n = [];
                for (const s of e)
                    switch (n = n.concat(t.call(this, s)),
                    s.type) {
                    case "table":
                        for (const e of s.header)
                            n = n.concat(this.walkTokens(e.tokens, t));
                        for (const e of s.rows)
                            for (const s of e)
                                n = n.concat(this.walkTokens(s.tokens, t));
                        break;
                    case "list":
                        n = n.concat(this.walkTokens(s.items, t));
                        break;
                    default:
                        this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((e=>{
                            n = n.concat(this.walkTokens(s[e], t))
                        }
                        )) : s.tokens && (n = n.concat(this.walkTokens(s.tokens, t)))
                    }
                return n
            }
            use(...e) {
                const t = this.defaults.extensions || {
                    renderers: {},
                    childTokens: {}
                };
                return e.forEach((e=>{
                    const n = {
                        ...e
                    };
                    if (n.async = this.defaults.async || n.async || !1,
                    e.extensions && (e.extensions.forEach((e=>{
                        if (!e.name)
                            throw new Error("extension name required");
                        if (e.renderer) {
                            const n = t.renderers[e.name];
                            t.renderers[e.name] = n ? function(...t) {
                                let s = e.renderer.apply(this, t);
                                return !1 === s && (s = n.apply(this, t)),
                                s
                            }
                            : e.renderer
                        }
                        if (e.tokenizer) {
                            if (!e.level || "block" !== e.level && "inline" !== e.level)
                                throw new Error("extension level must be 'block' or 'inline'");
                            t[e.level] ? t[e.level].unshift(e.tokenizer) : t[e.level] = [e.tokenizer],
                            e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                        }
                        e.childTokens && (t.childTokens[e.name] = e.childTokens)
                    }
                    )),
                    n.extensions = t),
                    e.renderer) {
                        const t = this.defaults.renderer || new Z(this.defaults);
                        for (const n in e.renderer) {
                            const s = t[n];
                            t[n] = (...r)=>{
                                let i = e.renderer[n].apply(t, r);
                                return !1 === i && (i = s.apply(t, r)),
                                i
                            }
                        }
                        n.renderer = t
                    }
                    if (e.tokenizer) {
                        const t = this.defaults.tokenizer || new I(this.defaults);
                        for (const n in e.tokenizer) {
                            const s = t[n];
                            t[n] = (...r)=>{
                                let i = e.tokenizer[n].apply(t, r);
                                return !1 === i && (i = s.apply(t, r)),
                                i
                            }
                        }
                        n.tokenizer = t
                    }
                    if (e.hooks) {
                        const t = this.defaults.hooks || new D;
                        for (const n in e.hooks) {
                            const s = t[n];
                            D.passThroughHooks.has(n) ? t[n] = r=>{
                                if (this.defaults.async)
                                    return Promise.resolve(e.hooks[n].call(t, r)).then((e=>s.call(t, e)));
                                const i = e.hooks[n].call(t, r);
                                return s.call(t, i)
                            }
                            : t[n] = (...r)=>{
                                let i = e.hooks[n].apply(t, r);
                                return !1 === i && (i = s.apply(t, r)),
                                i
                            }
                        }
                        n.hooks = t
                    }
                    if (e.walkTokens) {
                        const t = this.defaults.walkTokens;
                        n.walkTokens = function(n) {
                            let s = [];
                            return s.push(e.walkTokens.call(this, n)),
                            t && (s = s.concat(t.call(this, n))),
                            s
                        }
                    }
                    this.defaults = {
                        ...this.defaults,
                        ...n
                    }
                }
                )),
                this
            }
            setOptions(e) {
                return this.defaults = {
                    ...this.defaults,
                    ...e
                },
                this
            }
            #e(e, t) {
                return (n,s,r)=>{
                    "function" === typeof s && (r = s,
                    s = null);
                    const i = {
                        ...s
                    };
                    s = {
                        ...this.defaults,
                        ...i
                    };
                    const l = this.#t(s.silent, s.async, r);
                    if ("undefined" === typeof n || null === n)
                        return l(new Error("marked(): input parameter is undefined or null"));
                    if ("string" !== typeof n)
                        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
                    if (function(e, t) {
                        e && !e.silent && (t && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),
                        (e.sanitize || e.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),
                        (e.highlight || "language-" !== e.langPrefix) && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),
                        e.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),
                        e.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),
                        e.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),
                        e.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),
                        (e.headerIds || e.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))
                    }(s, r),
                    s.hooks && (s.hooks.options = s),
                    r) {
                        const i = s.highlight;
                        let a;
                        try {
                            s.hooks && (n = s.hooks.preprocess(n)),
                            a = e(n, s)
                        } catch (o) {
                            return l(o)
                        }
                        const c = e=>{
                            let n;
                            if (!e)
                                try {
                                    s.walkTokens && this.walkTokens(a, s.walkTokens),
                                    n = t(a, s),
                                    s.hooks && (n = s.hooks.postprocess(n))
                                } catch (o) {
                                    e = o
                                }
                            return s.highlight = i,
                            e ? l(e) : r(null, n)
                        }
                        ;
                        if (!i || i.length < 3)
                            return c();
                        if (delete s.highlight,
                        !a.length)
                            return c();
                        let h = 0;
                        return this.walkTokens(a, (e=>{
                            "code" === e.type && (h++,
                            setTimeout((()=>{
                                i(e.text, e.lang, ((t,n)=>{
                                    if (t)
                                        return c(t);
                                    null != n && n !== e.text && (e.text = n,
                                    e.escaped = !0),
                                    h--,
                                    0 === h && c()
                                }
                                ))
                            }
                            ), 0))
                        }
                        )),
                        void (0 === h && c())
                    }
                    if (s.async)
                        return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((t=>e(t, s))).then((e=>s.walkTokens ? Promise.all(this.walkTokens(e, s.walkTokens)).then((()=>e)) : e)).then((e=>t(e, s))).then((e=>s.hooks ? s.hooks.postprocess(e) : e)).catch(l);
                    try {
                        s.hooks && (n = s.hooks.preprocess(n));
                        const r = e(n, s);
                        s.walkTokens && this.walkTokens(r, s.walkTokens);
                        let i = t(r, s);
                        return s.hooks && (i = s.hooks.postprocess(i)),
                        i
                    } catch (o) {
                        return l(o)
                    }
                }
            }
            #t(e, t, n) {
                return s=>{
                    if (s.message += "\nPlease report this to https://github.com/markedjs/marked.",
                    e) {
                        const e = "<p>An error occurred:</p><pre>" + u(s.message + "", !0) + "</pre>";
                        return t ? Promise.resolve(e) : n ? void n(null, e) : e
                    }
                    if (t)
                        return Promise.reject(s);
                    if (!n)
                        throw s;
                    n(s)
                }
            }
        }
        (r);
        function B(e, t, n) {
            return j.parse(e, t, n)
        }
        B.options = B.setOptions = function(e) {
            return j.setOptions(e),
            B.defaults = j.defaults,
            i(B.defaults),
            B
        }
        ,
        B.getDefaults = s,
        B.defaults = r,
        B.use = function(...e) {
            return j.use(...e),
            B.defaults = j.defaults,
            i(B.defaults),
            B
        }
        ,
        B.walkTokens = function(e, t) {
            return j.walkTokens(e, t)
        }
        ,
        B.parseInline = j.parseInline,
        B.Parser = L,
        B.parser = L.parse,
        B.Renderer = Z,
        B.TextRenderer = q,
        B.Lexer = C,
        B.lexer = C.lex,
        B.Tokenizer = I,
        B.Slugger = O,
        B.Hooks = D,
        B.parse = B;
        B.options,
        B.setOptions,
        B.use,
        B.walkTokens,
        B.parseInline
    },
    2708: function(e, t, n) {
        n.d(t, {
            YD: function() {
                return u
            }
        });
        var s = n(7294)
          , r = Object.defineProperty
          , i = (e,t,n)=>(((e,t,n)=>{
            t in e ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
        )(e, "symbol" !== typeof t ? t + "" : t, n),
        n)
          , l = new Map
          , o = new WeakMap
          , a = 0
          , c = void 0;
        function h(e) {
            return Object.keys(e).sort().filter((t=>void 0 !== e[t])).map((t=>{
                return `${t}_${"root" === t ? (n = e.root,
                n ? (o.has(n) || (a += 1,
                o.set(n, a.toString())),
                o.get(n)) : "0") : e[t]}`;
                var n
            }
            )).toString()
        }
        function p(e, t, n={}, s=c) {
            if ("undefined" === typeof window.IntersectionObserver && void 0 !== s) {
                const r = e.getBoundingClientRect();
                return t(s, {
                    isIntersecting: s,
                    target: e,
                    intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                    time: 0,
                    boundingClientRect: r,
                    intersectionRect: r,
                    rootBounds: r
                }),
                ()=>{}
            }
            const {id: r, observer: i, elements: o} = function(e) {
                let t = h(e)
                  , n = l.get(t);
                if (!n) {
                    const s = new Map;
                    let r;
                    const i = new IntersectionObserver((t=>{
                        t.forEach((t=>{
                            var n;
                            const i = t.isIntersecting && r.some((e=>t.intersectionRatio >= e));
                            e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = i),
                            null == (n = s.get(t.target)) || n.forEach((e=>{
                                e(i, t)
                            }
                            ))
                        }
                        ))
                    }
                    ),e);
                    r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
                    n = {
                        id: t,
                        observer: i,
                        elements: s
                    },
                    l.set(t, n)
                }
                return n
            }(n);
            let a = o.get(e) || [];
            return o.has(e) || o.set(e, a),
            a.push(t),
            i.observe(e),
            function() {
                a.splice(a.indexOf(t), 1),
                0 === a.length && (o.delete(e),
                i.unobserve(e)),
                0 === o.size && (i.disconnect(),
                l.delete(r))
            }
        }
        s.Component;
        function u({threshold: e, delay: t, trackVisibility: n, rootMargin: r, root: i, triggerOnce: l, skip: o, initialInView: a, fallbackInView: c, onChange: h}={}) {
            var u;
            const [g,d] = s.useState(null)
              , k = s.useRef()
              , [f,x] = s.useState({
                inView: !!a,
                entry: void 0
            });
            k.current = h,
            s.useEffect((()=>{
                if (o || !g)
                    return;
                let s;
                return s = p(g, ((e,t)=>{
                    x({
                        inView: e,
                        entry: t
                    }),
                    k.current && k.current(e, t),
                    t.isIntersecting && l && s && (s(),
                    s = void 0)
                }
                ), {
                    root: i,
                    rootMargin: r,
                    threshold: e,
                    trackVisibility: n,
                    delay: t
                }, c),
                ()=>{
                    s && s()
                }
            }
            ), [Array.isArray(e) ? e.toString() : e, g, i, r, l, o, n, c, t]);
            const m = null == (u = f.entry) ? void 0 : u.target
              , b = s.useRef();
            g || !m || l || o || b.current === m || (b.current = m,
            x({
                inView: !!a,
                entry: void 0
            }));
            const w = [d, f.inView, f.entry];
            return w.ref = w[0],
            w.inView = w[1],
            w.entry = w[2],
            w
        }
    }
}]);
