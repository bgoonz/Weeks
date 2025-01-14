/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-mq-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
  function C(a) {
    i.cssText = a;
  }
  function D(a, b) {
    return C(m.join(a + ";") + (b || ""));
  }
  function E(a, b) {
    return typeof a === b;
  }
  function F(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function G(a, b) {
    for (var d in a) if (i[a[d]] !== c) return b == "pfx" ? a[d] : !0;
    return !1;
  }
  function H(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function I(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.substr(1),
      e = (a + " " + o.join(d + " ") + d).split(" ");
    return E(b, "string") || E(b, "undefined")
      ? G(e, b)
      : ((e = (a + " " + p.join(d + " ") + d).split(" ")), H(e, b, c));
  }
  function K() {
    (e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) t[c[d]] = c[d] in j;
      return (
        t.list &&
          (t.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
        t
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, g, h, i = a.length; d < i; d++)
          j.setAttribute("type", (g = a[d])),
            (e = j.type !== "text"),
            e &&
              ((j.value = k),
              (j.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(g) && j.style.WebkitAppearance !== c
                ? (f.appendChild(j),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(j, null).WebkitAppearance !==
                      "textfield" &&
                    j.offsetHeight !== 0),
                  f.removeChild(j))
                : /^(search|tel)$/.test(g) ||
                  (/^(url|email)$/.test(g)
                    ? (e = j.checkValidity && j.checkValidity() === !1)
                    : /^color$/.test(g)
                    ? (f.appendChild(j),
                      f.offsetWidth,
                      (e = j.value != k),
                      f.removeChild(j))
                    : (e = j.value != k))),
            (s[a[d]] = !!e);
        return s;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d = "2.5.3",
    e = {},
    f = b.documentElement,
    g = "modernizr",
    h = b.createElement(g),
    i = h.style,
    j = b.createElement("input"),
    k = ":)",
    l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = "Webkit Moz O ms",
    o = n.split(" "),
    p = n.toLowerCase().split(" "),
    q = { svg: "http://www.w3.org/2000/svg" },
    r = {},
    s = {},
    t = {},
    u = [],
    v = u.slice,
    w,
    x = function (a, c, d, e) {
      var h,
        i,
        j,
        k = b.createElement("div"),
        l = b.body,
        m = l ? l : b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : g + (d + 1)),
            k.appendChild(j);
      return (
        (h = ["&#173;", "<style>", a, "</style>"].join("")),
        (k.id = g),
        ((l ? k : m).innerHTML += h),
        m.appendChild(k),
        l || ((m.style.background = ""), f.appendChild(m)),
        (i = c(k, a)),
        l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m),
        !!i
      );
    },
    y = function (b) {
      var c = a.matchMedia || a.msMatchMedia;
      if (c) return c(b).matches;
      var d;
      return (
        x(
          "@media " + b + " { #" + g + " { position: absolute; } }",
          function (b) {
            d =
              (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)[
                "position"
              ] == "absolute";
          }
        ),
        d
      );
    },
    z = (function () {
      function d(d, e) {
        (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
        var f = d in e;
        return (
          f ||
            (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute &&
              e.removeAttribute &&
              (e.setAttribute(d, ""),
              (f = E(e[d], "function")),
              E(e[d], "undefined") || (e[d] = c),
              e.removeAttribute(d))),
          (e = null),
          f
        );
      }
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return d;
    })(),
    A = {}.hasOwnProperty,
    B;
  !E(A, "undefined") && !E(A.call, "undefined")
    ? (B = function (a, b) {
        return A.call(a, b);
      })
    : (B = function (a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = v.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(v.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(v.call(arguments)));
          };
        return e;
      });
  var J = (function (c, d) {
    var f = c.join(""),
      g = d.length;
    x(
      f,
      function (c, d) {
        var f = b.styleSheets[b.styleSheets.length - 1],
          h = f
            ? f.cssRules && f.cssRules[0]
              ? f.cssRules[0].cssText
              : f.cssText || ""
            : "",
          i = c.childNodes,
          j = {};
        while (g--) j[i[g].id] = i[g];
        (e.touch =
          "ontouchstart" in a ||
          (a.DocumentTouch && b instanceof DocumentTouch) ||
          (j.touch && j.touch.offsetTop) === 9),
          (e.csstransforms3d =
            (j.csstransforms3d && j.csstransforms3d.offsetLeft) === 9 &&
            j.csstransforms3d.offsetHeight === 3),
          (e.generatedcontent =
            (j.generatedcontent && j.generatedcontent.offsetHeight) >= 1),
          (e.fontface = /src/i.test(h) && h.indexOf(d.split(" ")[0]) === 0);
      },
      g,
      d
    );
  })(
    [
      '@font-face {font-family:"font";src:url("https://")}',
      [
        "@media (",
        m.join("touch-enabled),("),
        g,
        ")",
        "{#touch{top:9px;position:absolute}}",
      ].join(""),
      [
        "@media (",
        m.join("transform-3d),("),
        g,
        ")",
        "{#csstransforms3d{left:9px;position:absolute;height:3px;}}",
      ].join(""),
      ['#generatedcontent:after{content:"', k, '";visibility:hidden}'].join(""),
    ],
    ["fontface", "touch", "csstransforms3d", "generatedcontent"]
  );
  (r.flexbox = function () {
    return I("flexOrder");
  }),
    (r["flexbox-legacy"] = function () {
      return I("boxDirection");
    }),
    (r.canvas = function () {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d");
    }),
    (r.canvastext = function () {
      return (
        !!e.canvas &&
        !!E(b.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (r.webgl = function () {
      try {
        var d = b.createElement("canvas"),
          e;
        (e = !(
          !a.WebGLRenderingContext ||
          (!d.getContext("experimental-webgl") && !d.getContext("webgl"))
        )),
          (d = c);
      } catch (f) {
        e = !1;
      }
      return e;
    }),
    (r.touch = function () {
      return e.touch;
    }),
    (r.geolocation = function () {
      return !!navigator.geolocation;
    }),
    (r.postmessage = function () {
      return !!a.postMessage;
    }),
    (r.websqldatabase = function () {
      return !!a.openDatabase;
    }),
    (r.indexedDB = function () {
      return !!I("indexedDB", a);
    }),
    (r.hashchange = function () {
      return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }),
    (r.history = function () {
      return !!a.history && !!history.pushState;
    }),
    (r.draganddrop = function () {
      var a = b.createElement("div");
      return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
    }),
    (r.websockets = function () {
      for (var b = -1, c = o.length; ++b < c; )
        if (a[o[b] + "WebSocket"]) return !0;
      return "WebSocket" in a;
    }),
    (r.rgba = function () {
      return (
        C("background-color:rgba(150,255,150,.5)"), F(i.backgroundColor, "rgba")
      );
    }),
    (r.hsla = function () {
      return (
        C("background-color:hsla(120,40%,100%,.5)"),
        F(i.backgroundColor, "rgba") || F(i.backgroundColor, "hsla")
      );
    }),
    (r.multiplebgs = function () {
      return (
        C("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(i.background)
      );
    }),
    (r.backgroundsize = function () {
      return I("backgroundSize");
    }),
    (r.borderimage = function () {
      return I("borderImage");
    }),
    (r.borderradius = function () {
      return I("borderRadius");
    }),
    (r.boxshadow = function () {
      return I("boxShadow");
    }),
    (r.textshadow = function () {
      return b.createElement("div").style.textShadow === "";
    }),
    (r.opacity = function () {
      return D("opacity:.55"), /^0.55$/.test(i.opacity);
    }),
    (r.cssanimations = function () {
      return I("animationName");
    }),
    (r.csscolumns = function () {
      return I("columnCount");
    }),
    (r.cssgradients = function () {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return (
        C(
          (a + "-webkit- ".split(" ").join(b + a) + m.join(c + a)).slice(
            0,
            -a.length
          )
        ),
        F(i.backgroundImage, "gradient")
      );
    }),
    (r.cssreflections = function () {
      return I("boxReflect");
    }),
    (r.csstransforms = function () {
      return !!I("transform");
    }),
    (r.csstransforms3d = function () {
      var a = !!I("perspective");
      return a && "webkitPerspective" in f.style && (a = e.csstransforms3d), a;
    }),
    (r.csstransitions = function () {
      return I("transition");
    }),
    (r.fontface = function () {
      return e.fontface;
    }),
    (r.generatedcontent = function () {
      return e.generatedcontent;
    }),
    (r.video = function () {
      var a = b.createElement("video"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (r.audio = function () {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (c.m4a = (
              a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            ).replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (r.localstorage = function () {
      try {
        return localStorage.setItem(g, g), localStorage.removeItem(g), !0;
      } catch (a) {
        return !1;
      }
    }),
    (r.sessionstorage = function () {
      try {
        return sessionStorage.setItem(g, g), sessionStorage.removeItem(g), !0;
      } catch (a) {
        return !1;
      }
    }),
    (r.webworkers = function () {
      return !!a.Worker;
    }),
    (r.applicationcache = function () {
      return !!a.applicationCache;
    }),
    (r.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
      );
    }),
    (r.inlinesvg = function () {
      var a = b.createElement("div");
      return (
        (a.innerHTML = "<svg/>"),
        (a.firstChild && a.firstChild.namespaceURI) == q.svg
      );
    }),
    (r.smil = function () {
      return (
        !!b.createElementNS &&
        /SVGAnimate/.test(l.call(b.createElementNS(q.svg, "animate")))
      );
    }),
    (r.svgclippaths = function () {
      return (
        !!b.createElementNS &&
        /SVGClipPath/.test(l.call(b.createElementNS(q.svg, "clipPath")))
      );
    });
  for (var L in r)
    B(r, L) &&
      ((w = L.toLowerCase()), (e[w] = r[L]()), u.push((e[w] ? "" : "no-") + w));
  return (
    e.input || K(),
    C(""),
    (h = j = null),
    (e._version = d),
    (e._prefixes = m),
    (e._domPrefixes = p),
    (e._cssomPrefixes = o),
    (e.mq = y),
    (e.hasEvent = z),
    (e.testProp = function (a) {
      return G([a]);
    }),
    (e.testAllProps = I),
    (e.testStyles = x),
    (e.prefixed = function (a, b, c) {
      return b ? I(a, b, c) : I(a, "pfx");
    }),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return o.call(a) == "[object Function]";
    }
    function e(a) {
      return typeof a == "string";
    }
    function f() {}
    function g(a) {
      return !a || a == "loaded" || a == "complete" || a == "uninitialized";
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                (a.t == "c"
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          a != "img" &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = {},
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      y[c] === 1 && ((r = 1), (y[c] = []), (l = b.createElement(a))),
        a == "object" ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror = l.onload = l.onreadystatechange = function () {
          k.call(this, r);
        }),
        p.splice(e, 0, u),
        a != "img" &&
          (r || y[c] === 2
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i(b == "c" ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), p.length == 1 && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && o.call(a.opera) == "[object Opera]",
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return o.call(a) == "[object Array]";
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, i) {
        var j = b(a),
          l = j.autoCallback;
        j.url.split(".").pop().split("?").shift(),
          j.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h),
            j.instead
              ? j.instead(a, e, f, g, i)
              : (y[j.url] ? (j.noexec = !0) : (y[j.url] = 1),
                f.load(
                  j.url,
                  j.forceCSS ||
                    (!j.forceJS &&
                      "css" == j.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  j.noexec,
                  j.attrs,
                  j.timeout
                ),
                (d(e) || d(l)) &&
                  f.load(function () {
                    k(),
                      e && e(j.origUrl, i, g),
                      l && l(j.origUrl, i, g),
                      (y[j.url] = 2);
                  })));
      }
      function i(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var j,
        l,
        m = this.yepnope.loader;
      if (e(a)) g(a, 0, m, 0);
      else if (w(a))
        for (j = 0; j < a.length; j++)
          (l = a[j]),
            e(l) ? g(l, 0, m, 0) : w(l) ? B(l) : Object(l) === l && i(l, m);
      else Object(a) === a && i(a, m);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      b.readyState == null &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload = function () {
            !l &&
              g(k.readyState) &&
              ((l = 1), c(), (k.onload = k.onreadystatechange = null));
          }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });
