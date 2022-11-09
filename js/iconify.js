/**
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * For the full copyright and license information, please view the license.txt or license.gpl.txt
 * files at https://github.com/iconify/iconify
 *
 * Licensed under Apache 2.0 or GPL 2.0 at your option.
 * If derivative product is not compatible with one of licenses, you can pick one of licenses.
 *
 * @license Apache 2.0
 * @license GPL 2.0
 */
 "use strict";
 if (void 0 === self.Iconify && (self.Iconify = {
     isReady: !1
 },
 self.SimpleSVG = self.Iconify,
 function(e, t) {
     var i, n, o, r, s, a, c, l, u, d, f, h, p, v, g, b, m, y, w, _, x, O, j, I, A, E, k, C, M, L, S, N, P, T, F, R, D, H, V, G, Q, z, B, q, Y, J, U, W, $, K, X, Z, ee, te, ie, ne, oe, re = {
         config: {},
         version: "1.0.4"
     };
     function se(e, t) {
         var i;
         return t = t || {
             bubbles: !1,
             cancelable: !1,
             detail: void 0
         },
         (i = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
         i
     }
     function ae() {
         document.removeEventListener("DOMContentLoaded", ae),
         window.removeEventListener("load", ae),
         o.DOMReadyCallback()
     }
     function ce(t, i, e) {
         var n = t;
         if ("_" !== t.slice(0, 1)) {
             if (void 0 === u[t]) {
                 if (!e || void 0 === u["_" + t])
                     return;
                 n = "_" + t
             }
             switch (n) {
             case "API":
             case "SVGAttributes":
                 Object.keys(i).forEach(function(e) {
                     null === i[t] ? delete u[n][e] : u[n][e] = i[e]
                 });
                 break;
             default:
                 u[n] = i
             }
         }
     }
     function le(e, t) {
         return function(e, t) {
             switch (e) {
             case "rotate":
                 return t = parseInt(t),
                 isNaN(t) ? null : t;
             case "width":
             case "height":
             case "inlineHeight":
             case "inlineTop":
             case "verticalAlign":
                 return t = parseFloat(t),
                 isNaN(t) ? null : t;
             case "vFlip":
             case "hFlip":
                 return !!t;
             case "body":
             case "parent":
                 return "string" == typeof t ? t : null
             }
             return t
         }("rotate", e + t)
     }
     function ue(e, t) {
         return !!e != !!t
     }
     function de(e) {
         var i = Object.create(null);
         return (void 0 === e._defaults ? [e, v] : [e, e._defaults, v]).forEach(function(t) {
             Object.keys(t).forEach(function(e) {
                 "object" != typeof t[e] && void 0 === i[e] && (i[e] = t[e])
             })
         }),
         void 0 === i.inlineTop && (i.inlineTop = i.top),
         void 0 === i.inlineHeight && (i.inlineHeight = i.height),
         void 0 === i.verticalAlign && (i.height % 7 == 0 && i.height % 8 != 0 ? i.verticalAlign = -.143 : i.verticalAlign = -.125),
         i
     }
     function fe() {
         return this._icons = Object.create(null),
         this._aliases = Object.create(null),
         this._resolved = Object.create(null),
         this._add = function(e, t, i) {
             var n = e ? "_aliases" : "_icons";
             void 0 === this._resolved[t.prefix] ? (this._resolved[t.prefix] = Object.create(null),
             this._icons[t.prefix] = Object.create(null),
             this._aliases[t.prefix] = Object.create(null)) : (delete this._icons[t.prefix][t.icon],
             delete this._aliases[t.prefix][t.icon]),
             this._resolved[t.prefix][t.icon] = !1,
             this[n][t.prefix][t.icon] = i
         }
         ,
         this._resolveIcon = function(e) {
             var t, i, n, o, r, s;
             if (void 0 === this._resolved[e.prefix] || void 0 === this._resolved[e.prefix][e.icon])
                 return null;
             if (!1 !== this._resolved[e.prefix][e.icon])
                 return this._resolved[e.prefix][e.icon];
             if (void 0 !== this._icons[e.prefix][e.icon])
                 return this._resolved[e.prefix][e.icon] = de(this._icons[e.prefix][e.icon]);
             for (i = 0,
             t = this._aliases[e.prefix][e.icon],
             n = Object.create(null),
             Object.keys(t).forEach(function(e) {
                 "parent" !== e && (n[e] = t[e])
             }),
             o = t.parent; ; ) {
                 if (5 < ++i || void 0 === this._resolved[e.prefix][o])
                     return this._resolved[e.prefix][e.icon] = null;
                 if (r = void 0 === this._icons[e.prefix][o],
                 s = this[r ? "_aliases" : "_icons"][e.prefix][o],
                 Object.keys(s).forEach(function(e) {
                     if (void 0 !== n[e])
                         switch (e) {
                         case "rotate":
                             n[e] = le(n[e], s[e]);
                             break;
                         case "hFlip":
                         case "vFlip":
                             n[e] = ue(n[e], s[e])
                         }
                     else
                         "parent" !== e && (n[e] = s[e])
                 }),
                 !r)
                     break;
                 o = s.parent
             }
             return this._resolved[e.prefix][e.icon] = de(n)
         }
         ,
         this.addCollection = function(n) {
             var o = this
               , r = Object.create(null);
             g.forEach(function(e) {
                 void 0 !== n[e] ? r[e] = n[e] : void 0 !== v[e] && (r[e] = v[e])
             }),
             void 0 !== n.icons && Object.keys(n.icons).forEach(function(e) {
                 var t = p(e, n.prefix)
                   , i = n.icons[e];
                 void 0 !== i.body && (i._defaults = r,
                 o._add(!1, t, i))
             }),
             void 0 !== n.aliases && Object.keys(n.aliases).forEach(function(e) {
                 var t = p(e, n.prefix)
                   , i = n.aliases[e];
                 if (void 0 !== i.parent) {
                     if (void 0 === n.prefix) {
                         if (i.parent.slice(0, t.prefix.length) !== t.prefix)
                             return;
                         i.parent = i.parent.slice(t.prefix.length + 1)
                     }
                     o._add(!0, t, i)
                 }
             })
         }
         ,
         this.addIcon = function(e, t, i) {
             var n = void 0 !== t.parent
               , o = p(e, i);
             if (n && void 0 === i) {
                 if (t.parent.slice(0, o.prefix.length) !== o.prefix)
                     return;
                 t.parent = t.parent.slice(o.prefix.length + 1)
             }
             this._add(n, o, t)
         }
         ,
         this.exists = function(e, t) {
             var i = p(e, t);
             return void 0 !== this._resolved[i.prefix] && void 0 !== this._resolved[i.prefix][i.icon]
         }
         ,
         this.getIcon = function(e, t) {
             var i = p(e, t);
             return this._resolveIcon(i)
         }
         ,
         this.copyIcon = function(e, t) {
             var i, n = this.getIcon(e, t);
             return null === n ? null : (i = Object.create(null),
             Object.keys(n).forEach(function(e) {
                 i[e] = n[e]
             }),
             i)
         }
         ,
         this.list = function(e) {
             var i, n;
             return void 0 !== e ? void 0 === this._resolved[e] ? [] : Object.keys(this._resolved[e]) : (i = [],
             n = this._resolved,
             Object.keys(n).forEach(function(t) {
                 i = i.concat(Object.keys(n[t]).map(function(e) {
                     return "" === t && -1 === e.indexOf("-") ? e : t + ":" + e
                 }))
             }),
             i)
         }
         ,
         this
     }
     function he() {
         w && (w = !1,
         m.scanDOM())
     }
     function pe(e, t, i) {
         var n, o, r, s, a;
         if (1 === t)
             return e;
         if (i = void 0 === i ? 100 : i,
         "number" == typeof e)
             return Math.ceil(e * t * i) / i;
         if ("string" != typeof e)
             return e;
         if (null === (n = e.split(j)) || !n.length)
             return e;
         for (o = [],
         r = n.shift(),
         s = I.test(r); ; ) {
             if (s ? (a = parseFloat(r),
             isNaN(a) ? o.push(r) : o.push(Math.ceil(a * t * i) / i)) : o.push(r),
             void 0 === (r = n.shift()))
                 return o.join("");
             s = !s
         }
     }
     function ve(e, t, i) {
         var n, o, r;
         for (n = 0; n < t.length; n++)
             if (void 0 !== e[o = t[n]])
                 switch (typeof (r = e[o])) {
                 case "boolean":
                     return r;
                 case "number":
                     return !!r;
                 case "string":
                     switch (r.toLowerCase()) {
                     case "1":
                     case "true":
                     case o:
                         return !0;
                     case "0":
                     case "false":
                     case "":
                         return !1
                     }
                 }
         return i
     }
     function ge(e, t, i) {
         var n, o;
         for (n = 0; n < t.length; n++)
             if (void 0 !== e[o = t[n]])
                 return e[o];
         return i
     }
     function be() {
         var s = N.loaderMaxURLSize
           , o = Object.create(null);
         function a(e, t) {
             var i, n = o[e];
             "function" != typeof n ? (n = n.replace("{icons}", t.join(",")),
             (i = document.createElement("script")).setAttribute("type", "text/javascript"),
             i.setAttribute("src", n),
             i.setAttribute("async", !0),
             document.head.appendChild(i)) : n.call(L, e, t)
         }
         function c(e) {
             var t = void 0 === N.API[e] ? N.defaultAPI : N.API[e];
             return "function" == typeof t ? (o[e] = t,
             !1) : -1 === t.indexOf("{icons}") ? (o[e] = t,
             null) : (t = t.replace("{prefix}", e).replace("{callback}", "Iconify._loaderCallback"),
             (o[e] = t).replace("{icons}", "").length)
         }
         Object.keys(T).forEach(function(i) {
             var n = c(i)
               , o = !1 === n
               , r = [];
             if (null === n)
                 return a(i, []),
                 void (F[i] = !0);
             T[i].forEach(function(e, t) {
                 o || (n += e.length + 1,
                 s <= n && (a(i, r),
                 r = [],
                 n = c(i) + e.length + 1)),
                 r.push(e)
             }),
             r.length && a(i, r),
             F[i] = void 0 === F[i] ? T[i] : F[i].concat(T[i]),
             delete T[i]
         }),
         D = !1
     }
     function me(e, t, i) {
         return i || S.domready || N.loadBeforeDOMReady ? (void 0 === T[e] || -1 === T[e].indexOf(t)) && (void 0 === F[e] || !0 !== F[e] && -1 === F[e].indexOf(t)) && (void 0 === T[e] && (T[e] = []),
         T[e].push(t),
         D || (D = !0,
         window.setTimeout(be, 0)),
         1) : (o = t,
         void 0 === R[n = e] && (R[n] = Object.create(null)),
         R[n][o] = !0,
         void 0 === S._loaderDOMReady && (S._loaderDOMReady = S.DOMReadyCallback,
         S.DOMReadyCallback = function() {
             S._loaderDOMReady(),
             Object.keys(R).forEach(function(t) {
                 Object.keys(R[t]).forEach(function(e) {
                     L.iconExists(e, t) || me(t, e, !0)
                 })
             })
         }
         ),
         1);
         var n, o
     }
     function ye() {
         var e;
         !1 !== U && U.length ? (e = U,
         U = !1,
         Q.scanDOM(e)) : U = !1
     }
     function we(e) {
         e.forEach(function(e) {
             var t;
             if (!1 === U && (U = [],
             window.setTimeout(ye, 0)),
             e.addedNodes)
                 for (t = 0; t < e.addedNodes.length; t++)
                     U.push(e.addedNodes[t])
         })
     }
     function _e() {
         q.observe(void 0 === z._root ? document.querySelector("body") : z._root, W)
     }
     function xe(e, t) {
         var i;
         return "<?" === e.slice(0, 2) && (i = e.indexOf(">"),
         e = e.slice(i + 1)),
         e = -1 !== (i = (e = e.replace("viewbox=", "viewBox=").replace("preserveaspectratio=", "preserveAspectRatio=")).indexOf("</")) ? e.replace("</", t + "</") : e.replace("/>", ">" + t + "</svg>")
     }
     i = re,
     "function" != typeof window.CustomEvent && (se.prototype = window.Event.prototype,
     window.CustomEvent = se),
     i.event = function(e, t) {
         document.dispatchEvent(new CustomEvent(e,t))
     }
     ,
     n = e,
     r = (o = re).config,
     s = null,
     o.DOMReadyCallback = function() {
         o.domready = !0,
         o.nextInitItem()
     }
     ,
     o.initTimeout = function(e) {
         function t() {
             if (null !== s) {
                 if (!1 !== s.callback())
                     return s.stop(),
                     void o.nextInitItem();
                 s.counter++,
                 10 !== s.counter && 25 !== s.counter || (window.clearInterval(s.id),
                 s.id = window.setInterval(t, 10 === s.counter ? 250 : 1e3))
             }
         }
         null !== s && s.stop(),
         s = {
             id: window.setInterval(t, 100),
             counter: 0,
             callback: e,
             stop: function() {
                 window.clearInterval(s.id),
                 s = null
             },
             nextTick: t
         }
     }
     ,
     o.domready = !1,
     o.ready = !1,
     o.initQueue = [],
     o.readyQueue = [],
     o.nextInitItem = function() {
         var e;
         if (!o.ready) {
             if (o.initQueue.length)
                 e = o.initQueue.shift();
             else {
                 if (!o.domready)
                     return void o.initTimeout(function() {
                         return !o.domready && document.body && o.scanDOM(),
                         o.domready
                     });
                 if (!o.readyQueue.length)
                     return o.ready = n.isReady = !0,
                     o.event(r._readyEvent),
                     void o.scanDOM();
                 e = o.readyQueue.shift()
             }
             !1 !== e() && o.nextInitItem()
         }
     }
     ,
     o.addStylesheet = function(e) {
         var t;
         return document.head && document.body ? ((t = document.createElement("style")).type = "text/css",
         t.innerHTML = "span.iconify, i.iconify, iconify-icon { display: inline-block; width: 1em; }",
         null !== document.head.firstChild ? document.head.insertBefore(t, document.head.firstChild) : document.head.appendChild(t),
         !0) : !!o.domready || (e || o.initTimeout(o.addStylesheet.bind(null, !0)),
         !1)
     }
     ,
     o.initQueue.push(o.addStylesheet.bind(null, !1)),
     n.ready = function(e) {
         n.isReady ? window.setTimeout(e) : document.addEventListener(r._readyEvent, e)
     }
     ,
     window.setTimeout(function() {
         "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? o.domready = !0 : (document.addEventListener("DOMContentLoaded", ae),
         window.addEventListener("load", ae)),
         o.nextInitItem()
     }),
     (a = re.config).SVGAttributes = Object.create(null),
     a._imageClass = "iconify",
     a._loadingClass = "svg-loading",
     a._iconAttribute = "data-icon",
     a._rotateAttribute = "data-rotate",
     a._flipAttribute = "data-flip",
     a._inlineModeAttribute = "data-inline",
     a._alignAttribute = "data-align",
     a._appendAttribute = "data-icon-append",
     a._appendedClass = "svg-appended",
     a._readyEvent = "IconifyReady",
     a._webComponentsPolyfill = "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js",
     a._classListPolyfill = "https://cdnjs.cloudflare.com/ajax/libs/classlist/1.1.20150312/classList.min.js",
     function(t) {
         t.defaultAPI = "https://api.iconify.design/{prefix}.js?icons={icons}",
         t.API = Object.create(null),
         t.loaderMaxURLSize = 500,
         t.loadBeforeDOMReady = !(document && document.body),
         t._loaderEvent = "IconifyAddedIcons",
         t.sessionStorage = !0;
         try {
             t.localStorage = !!(window && window.localStorage && window.localStorage.length)
         } catch (e) {
             t.localStorage = !1
         }
     }(re.config),
     c = e,
     l = t,
     u = re.config,
     c.setConfig = function(e, t) {
         ce(e, t, !1)
     }
     ,
     c.setCustomAPI = function(e, t) {
         switch (typeof e) {
         case "string":
             0;
             break;
         case "object":
             if (e instanceof Array) {
                 0;
                 break
             }
         default:
             return
         }
         e.forEach(function(e) {
             null === t ? delete u.API[e] : u.API[e] = t
         })
     }
     ,
     c.getConfig = function(e) {
         return void 0 === u[e] ? void 0 === u["_" + e] ? null : u["_" + e] : u[e]
     }
     ,
     ["SimpleSVG", "Iconify"].forEach(function(e) {
         var t;
         void 0 !== l[e + "Config"] && "object" == typeof l[e + "Config"] && (t = l[e + "Config"],
         Object.keys(t).forEach(function(e) {
             ce(e, t[e], !0)
         }))
     }),
     f = (d = re).config,
     h = t,
     d.initQueue.push(function() {
         var e = {
             observer: !1,
             classList: !1
         }
           , t = {
             observer: !1,
             classList: !1
         };
         function i(e) {
             var t;
             return !e.length || (document.head ? ((t = document.createElement("script")).setAttribute("src", e),
             t.setAttribute("type", "text/javascript"),
             document.head.appendChild(t),
             !0) : d.domready)
         }
         function n() {
             if ("classList"in document.createElement("div"))
                 return 1;
             t.classList || (t.classList = i(f._classListPolyfill))
         }
         function o() {
             return h.MutationObserver && h.WeakMap || t.observer || (t.observer = i(f._webComponentsPolyfill)),
             1
         }
         return e.classList = !n(),
         e.observer = !o(),
         !e.classList && !e.observer || (d.initTimeout(function() {
             return !(e.observer && !o() || e.classList && !n())
         }),
         !1)
     }),
     re.getPrefix = function(e, t) {
         var i;
         return "string" == typeof t && "" !== t ? {
             prefix: t,
             icon: e
         } : 2 === (i = e.split(":")).length ? {
             prefix: i[0],
             icon: i[1]
         } : 1 < (i = e.split("-")).length ? {
             prefix: t = i.shift(),
             icon: i.join("-")
         } : {
             prefix: "",
             icon: e
         }
     }
     ,
     p = re.getPrefix,
     v = {
         left: 0,
         top: 0,
         width: 16,
         height: 16,
         rotate: 0,
         vFlip: !1,
         hFlip: !1
     },
     g = ["left", "top", "width", "height", "body", "rotate", "vFlip", "hFlip", "inlineTop", "inlineHeight", "verticalAlign"],
     fe.mergeFlip = ue,
     fe.mergeRotation = le,
     fe.blankIcon = function() {
         return de({
             body: "",
             width: 16,
             height: 16
         })
     }
     ,
     re.Storage = fe,
     b = e,
     y = t,
     w = !1,
     _ = new (m = re).Storage,
     b.addCollection = function(e, t) {
         _.addCollection(e),
         w || !0 === t || (w = !0,
         window.setTimeout(he, 0))
     }
     ,
     b.addIcon = function(e, t, i) {
         _.addIcon(e, t),
         w || !0 === i || (w = !0,
         window.setTimeout(he, 0))
     }
     ,
     b.iconExists = _.exists.bind(_),
     b.getIcon = _.copyIcon.bind(_),
     b.listIcons = _.list.bind(_),
     ["SimpleSVG", "Iconify"].forEach(function(e) {
         void 0 !== y[e + "Preload"] && y[e + "Preload"]instanceof Array && y[e + "Preload"].forEach(function(e) {
             "object" == typeof e && void 0 !== e.icons && b.addCollection(e)
         })
     }),
     x = re.Storage,
     O = re.config,
     j = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
     I = /^-?[0-9.]*[0-9]+[0-9.]*$/g,
     A = ["width", "height", "inline"],
     E = ["title"],
     k = 0,
     re.SVG = function(w) {
         return w = w || x.blankIcon(),
         this.item = w,
         this.height = function(e, t, i) {
             return void 0 === e ? t ? this.item.inlineHeight : this.item.height : pe(e, (t ? this.item.inlineHeight : this.item.height) / this.item.width, i)
         }
         ,
         this.width = function(e, t, i) {
             return void 0 === e ? this.item.width : pe(e, this.item.width / (t ? this.item.inlineHeight : this.item.height), i)
         }
         ,
         this.defaultAttributes = function() {
             return {
                 xmlns: "http://www.w3.org/2000/svg",
                 "xmlns:xlink": "http://www.w3.org/1999/xlink",
                 "aria-hidden": "true",
                 focusable: "false"
             }
         }
         ,
         this.preserveAspectRatio = function(e, t, i) {
             var n = "";
             switch (e) {
             case "left":
                 n += "xMin";
                 break;
             case "right":
                 n += "xMax";
                 break;
             default:
                 n += "xMid"
             }
             switch (t) {
             case "top":
                 n += "YMin";
                 break;
             case "bottom":
                 n += "YMax";
                 break;
             default:
                 n += "YMid"
             }
             return n += !0 === i ? " slice" : " meet"
         }
         ,
         this.htmlspecialchars = function(e) {
             switch (typeof e) {
             case "boolean":
             case "number":
                 return e + "";
             case "string":
                 return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
             }
             return ""
         }
         ,
         this.attributes = function(t) {
             var e, i, n, o, r, s, a, c, l, u, d, f, h, p = this, v = {
                 horizontal: "center",
                 vertical: "middle",
                 crop: !1
             }, g = {
                 rotate: w.rotate,
                 hFlip: w.hFlip,
                 vFlip: w.vFlip
             }, b = "", m = this.defaultAttributes(), y = [];
             if (s = ve(t = "object" == typeof t ? t : Object.create(null), [O._inlineModeAttribute, "inline"], !0),
             u = ve(t, [O._appendAttribute], !1),
             e = {
                 left: w.left,
                 top: s ? w.inlineTop : w.top,
                 width: w.width,
                 height: s ? w.inlineHeight : w.height
             },
             "string" == typeof t[O._flipAttribute] && t[O._flipAttribute].split(/[\s,]+/).forEach(function(e) {
                 switch (e = e.toLowerCase()) {
                 case "horizontal":
                     g.hFlip = !g.hFlip;
                     break;
                 case "vertical":
                     g.vFlip = !g.vFlip
                 }
             }),
             void 0 !== t[O._rotateAttribute])
                 if ("number" == typeof (c = t[O._rotateAttribute]))
                     g.rotate += c;
                 else if ("string" == typeof c)
                     if ("" === (d = c.replace(/^-?[0-9.]*/, "")))
                         c = parseInt(c),
                         isNaN(c) || (g.rotate += c);
                     else if (d !== c) {
                         switch (l = !1,
                         d) {
                         case "%":
                             l = 25;
                             break;
                         case "deg":
                             l = 90
                         }
                         l && (c = parseInt(c.slice(0, c.length - d.length)),
                         isNaN(c) || (g.rotate += Math.round(c / l)))
                     }
             switch (g.hFlip ? g.vFlip ? g.rotate += 2 : (y.push("translate(" + (e.width + e.left) + " " + (0 - e.top) + ")"),
             y.push("scale(-1 1)"),
             e.top = e.left = 0) : g.vFlip && (y.push("translate(" + (0 - e.left) + " " + (e.height + e.top) + ")"),
             y.push("scale(1 -1)"),
             e.top = e.left = 0),
             g.rotate % 4) {
             case 1:
                 h = e.height / 2 + e.top,
                 y.unshift("rotate(90 " + h + " " + h + ")"),
                 0 === e.left && 0 === e.top || (h = e.left,
                 e.left = e.top,
                 e.top = h),
                 e.width !== e.height && (h = e.width,
                 e.width = e.height,
                 e.height = h);
                 break;
             case 2:
                 y.unshift("rotate(180 " + (e.width / 2 + e.left) + " " + (e.height / 2 + e.top) + ")");
                 break;
             case 3:
                 h = e.width / 2 + e.left,
                 y.unshift("rotate(-90 " + h + " " + h + ")"),
                 0 === e.left && 0 === e.top || (h = e.left,
                 e.left = e.top,
                 e.top = h),
                 e.width !== e.height && (h = e.width,
                 e.width = e.height,
                 e.height = h)
             }
             return i = ge(t, ["data-width", "width"], null),
             n = ge(t, ["data-height", "height"], null),
             null === i && null === n && (n = "1em"),
             null !== i && null !== n ? (o = i,
             r = n) : null !== i ? r = pe(o = i, e.height / e.width) : o = pe(r = n, e.width / e.height),
             !1 !== o && (m.width = "auto" === o ? e.width : o),
             !1 !== r && (m.height = "auto" === r ? e.height : r),
             s && 0 !== w.verticalAlign && (b += "vertical-align: " + w.verticalAlign + "em;"),
             "string" == typeof t[O._alignAttribute] && t[O._alignAttribute].toLowerCase().split(/[\s,]+/).forEach(function(e) {
                 switch (e) {
                 case "left":
                 case "right":
                 case "center":
                     v.horizontal = e;
                     break;
                 case "top":
                 case "bottom":
                 case "middle":
                     v.vertical = e;
                     break;
                 case "crop":
                     v.crop = !0;
                     break;
                 case "meet":
                     v.crop = !1
                 }
             }),
             b += "-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);",
             m.style = b + (void 0 === t.style ? "" : t.style),
             m.preserveAspectRatio = this.preserveAspectRatio(v.horizontal, v.vertical, v.crop),
             m.viewBox = e.left + " " + e.top + " " + e.width + " " + e.height,
             a = function(i) {
                 var e, n, t = /\sid="(\S+)"/g, o = [];
                 function r(e, t, i) {
                     for (var n = 0; -1 !== (n = i.indexOf(e, n)); )
                         i = i.slice(0, n) + t + i.slice(n + e.length),
                         n += t.length;
                     return i
                 }
                 for (; e = t.exec(i); )
                     o.push(e[1]);
                 return o.length && (n = "IconifyId-" + Date.now().toString(16) + "-" + (16777216 * Math.random() | 0).toString(16) + "-",
                 o.forEach(function(e) {
                     var t = n + k;
                     k++,
                     i = r('="' + e + '"', '="' + t + '"', i),
                     i = r('="#' + e + '"', '="#' + t + '"', i),
                     i = r("(#" + e + ")", "(#" + t + ")", i)
                 })),
                 i
             }(this.item.body),
             y.length && (a = '<g transform="' + y.join(" ") + '">' + a + "</g>"),
             f = Object.create(null),
             Object.keys(t).forEach(function(e) {
                 void 0 === m[e] && (-1 !== E.indexOf(e) ? a = "<" + e + ">" + p.htmlspecialchars(t[e]) + "</" + e + ">" + a : -1 === A.indexOf(e) && (f[e] = t[e]))
             }),
             {
                 attributes: m,
                 elementAttributes: f,
                 body: a,
                 append: u
             }
         }
         ,
         this
     }
     ,
     M = (C = re).config._loadingClass,
     C.newImage = function(e, t, i) {
         return {
             element: e,
             icon: t,
             parser: i,
             loading: e.classList.contains(M)
         }
     }
     ,
     C.parsedImage = function(e, t) {
         return {
             element: e,
             icon: t
         }
     }
     ,
     C.getImageAttributes = function(t) {
         var e, i, n = Object.create(null);
         if (!t.element.hasAttributes())
             return n;
         for (e = 0; e < t.element.attributes.length; e++)
             i = t.element.attributes[e],
             n[i.name] = i.value;
         return t.parser && void 0 !== t.parser.filterAttributes && (n = t.parser.filterAttributes(t, n)),
         void 0 !== n.class && (n.class = n.class.split(" ").filter(function(e) {
             return e !== M
         }),
         t.parser && void 0 !== t.parser.filterClasses && (n.class = t.parser.filterClasses(t, n.class)),
         n.class = n.class.join(" ")),
         void 0 !== t.attributes && Object.keys(t.attributes).forEach(function(e) {
             n[e] = t.attributes[e]
         }),
         n
     }
     ,
     function(n, f, e) {
         var s = e._imageClass
           , t = e._loadingClass
           , i = e._appendedClass
           , a = e._iconAttribute
           , o = e._inlineModeAttribute
           , r = ":not(svg):not(." + i + ")"
           , c = ":not(." + t + ")"
           , l = "." + t
           , h = {
             iconify: {
                 selector: "." + s,
                 selectorAll: "." + s + r,
                 selectorNew: "." + s + r + c,
                 selectorLoading: "." + s + r + l,
                 icon: function(e) {
                     var t, i = e.getAttribute(a);
                     if ("string" == typeof i)
                         return i;
                     for (var n = 0; n < e.classList.length; n++)
                         if (5 < (t = e.classList[n]).length && "icon:" === t.slice(0, 5))
                             return t.slice(5);
                     return ""
                 },
                 filterClasses: function(e, t) {
                     var i, n, o;
                     for (n = 0; n < t.length; n++)
                         "icon-" === (i = t[n]).slice(0, 5) && 2 === (i = i.slice(5).split(":")).length && (o = "data-" + i[0],
                         void 0 === e.attributes && (e.attributes = Object.create(null)),
                         e.attributes[o] = i[1]);
                     return t
                 }
             }
         }
           , p = Object.keys(h);
         n.addFinder = function(e, t) {
             void 0 === t.selectorAll && (t.selectorAll = t.selector + r),
             void 0 === t.selectorNew && (t.selectorNew = t.selector + r + c),
             void 0 === t.selectorLoading && (t.selectorLoading = t.selector + r + l),
             h[e] = t,
             p = Object.keys(h),
             n.isReady && n.scanDOM()
         }
         ,
         n.addTag = function(e, i, t) {
             n.addFinder("tag-" + e, {
                 selector: e,
                 icon: null == t ? h.iconify.icon : t,
                 filterAttributes: function(e, t) {
                     return void 0 === t[o] && (t[o] = i),
                     t
                 },
                 filterClasses: h.iconify.filterClasses
             })
         }
         ;
         try {
             "object" == typeof Reflect && "object" == typeof customElements && Object.setPrototypeOf && (Object.setPrototypeOf(u.prototype, HTMLElement.prototype),
             Object.setPrototypeOf(u, HTMLElement),
             customElements.define("iconify-icon", u))
         } catch (e) {}
         function u() {
             return Reflect.construct(HTMLElement, [], u)
         }
         n.addTag("iconify-icon", !1),
         f.findNewImages = function(c, l) {
             var u = []
               , d = [];
             return (c = void 0 === c ? void 0 === e._root ? document.body : e._root : c) && p.forEach(function(e) {
                 var t, i, n, o, r = h[e], s = !0 === l ? r.selectorLoading : !1 === l ? r.selectorNew : r.selectorAll, a = c.querySelectorAll(s);
                 for (t = 0; t < a.length; t++)
                     i = a[t],
                     (n = r.icon(i)) && -1 === d.indexOf(i) && (d.push(i),
                     o = f.newImage(i, n, r),
                     u.push(o))
             }),
             u
         }
         ,
         f.findParsedImages = function(e) {
             var t, i, n, o = [], r = e.querySelectorAll("svg." + s);
             for (t = 0; t < r.length; t++)
                 (n = (i = r[t]).getAttribute(a)) && o.push(f.parsedImage(i, n));
             return o
         }
     }(e, re, re.config),
     L = e,
     N = (S = re).config,
     P = t,
     T = Object.create(null),
     F = Object.create(null),
     R = Object.create(null),
     H = {
         session: !(D = !1),
         local: !0
     },
     V = {
         session: 0,
         local: 0
     },
     L._loaderCallback = function(i) {
         var n = !1;
         "object" == typeof i && (["local", "session"].forEach(function(t) {
             var e;
             if (!n && H[t] && N[t + "Storage"]) {
                 e = P[t + "Storage"];
                 try {
                     V[t] || e.setItem("iconify-version", S.version),
                     e.setItem("iconify" + V[t], JSON.stringify(i)),
                     n = !0,
                     V[t]++,
                     e.setItem("iconify-count", V[t])
                 } catch (e) {
                     H[t] = !1
                 }
             }
         }),
         L.addCollection(i),
         S.event(N._loaderEvent))
     }
     ,
     S.loadImage = function(e, t) {
         var i = S.getPrefix(e.icon);
         return !!L.iconExists(i.icon, i.prefix) || (!1 !== t && me(i.prefix, i.icon, !1) && e.element.classList.add(N._loadingClass),
         !1)
     }
     ,
     L.preloadImages = function(e) {
         var t, i = !1;
         return e.forEach(function(e) {
             t = S.getPrefix(e),
             L.iconExists(t.icon, t.prefix) || (me(t.prefix, t.icon, !0),
             i = !0)
         }),
         i
     }
     ,
     ["local", "session"].forEach(function(t) {
         var e, i, n;
         try {
             if ("object" != typeof (e = P[t + "Storage"]))
                 return void (H[t] = !1);
             if (e.getItem("iconify-version") !== S.version)
                 return;
             if ("number" != typeof (n = parseInt(e.getItem("iconify-count"))) || isNaN(n))
                 return;
             for (; ; ) {
                 if (V[t] >= n)
                     return;
                 if ("string" != typeof (i = e.getItem("iconify" + V[t])))
                     return;
                 "object" == typeof (i = JSON.parse(i)) && L.addCollection(i),
                 V[t]++
             }
         } catch (e) {
             H[t] = !1
         }
     }),
     G = e,
     z = (Q = re).config,
     B = t,
     Y = 0,
     W = {
         childList: !(U = !1),
         subtree: !(J = q = null)
     },
     G.pauseObserving = function() {
         null !== q && (Y || (J = q.takeRecords(),
         q.disconnect())),
         Y++
     }
     ,
     G.resumeObserving = function() {
         null !== q ? Y && (--Y || (_e(),
         null !== J && J.length && we(J))) : Y--
     }
     ,
     G.isObserverPaused = function() {
         return null === q || !!Y
     }
     ,
     Q.readyQueue.push(function() {
         return q = new B.MutationObserver(we),
         Y || _e(),
         !0
     }),
     $ = e,
     X = (K = re).config,
     Z = X._iconAttribute,
     ee = X._loadingClass,
     te = X._imageClass,
     ie = X._appendedClass,
     K.renderSVG = function(t) {
         var e, i, n, o, r, s, a = K.getImageAttributes(t), c = $.getIcon(t.icon);
         a[Z] = t.icon,
         e = new K.SVG(c),
         n = document.createElement("svg"),
         r = e.attributes(a),
         Object.keys(r.attributes).forEach(function(e) {
             try {
                 n.setAttribute(e, r.attributes[e])
             } catch (e) {}
         }),
         Object.keys(r.elementAttributes).forEach(function(e) {
             try {
                 (r.append ? t.element : n).setAttribute(e, r.elementAttributes[e])
             } catch (e) {}
         }),
         t.loading && (n.classList.remove(ee),
         r.append && t.element.classList.remove(ee)),
         n.classList.add(te),
         s = xe(n.outerHTML, r.body),
         (o = document.createElement("span")).innerHTML = s,
         i = o.childNodes[0],
         r.append ? (t.element.classList.add(ie),
         t.element.appendChild(i)) : (t.element.parentNode.replaceChild(i, t.element),
         t.element = i),
         delete t.parser,
         delete t.loading
     }
     ,
     $.getSVGObject = function(e, t) {
         return !!$.iconExists(e) && new K.SVG($.getIcon(e)).attributes(t, !1)
     }
     ,
     $.getSVG = function(e, t) {
         var i, n;
         return !1 !== (n = $.getSVGObject(e, t)) && (i = document.createElement("svg"),
         Object.keys(n.attributes).forEach(function(e) {
             try {
                 i.setAttribute(e, n.attributes[e])
             } catch (e) {}
         }),
         xe(i.outerHTML, n.body))
     }
     ,
     ne = e,
     (oe = re).scanDOM = function() {
         var t = !1;
         function e() {
             oe.findNewImages().forEach(function(e) {
                 oe.loadImage(e) && (t || (t = !0,
                 ne.pauseObserving()),
                 oe.renderSVG(e))
             })
         }
         if (oe.ready)
             e();
         else
             try {
                 e()
             } catch (e) {}
         t && ne.resumeObserving()
     }
     ,
     ne.scanDOM = oe.scanDOM,
     ne.getVersion = function() {
         return oe.version
     }
 }(self.Iconify, self)),
 "object" == typeof exports)
     try {
         exports.__esModule = !0,
         exports.default = self.Iconify
     } catch (e) {}
 