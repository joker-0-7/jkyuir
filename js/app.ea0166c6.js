(function () {
  "use strict";
  var a = {
      1003: function (a, e, t) {
        var o = t(9242),
          n = t(3396);
        const l = (0, n._)(
          "div",
          { class: "phone bg-dark" },
          [
            (0, n._)("a", { href: "tel:01012594753" }, [
              (0, n._)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  class: "bi bi-telephone-fill",
                  viewBox: "0 0 16 16",
                },
                [
                  (0, n._)("path", {
                    "fill-rule": "evenodd",
                    d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
                  }),
                ]
              ),
            ]),
          ],
          -1
        );
        function r(a, e, t, o, r, i) {
          const c = (0, n.up)("NavBar"),
            s = (0, n.up)("router-view");
          return (
            (0, n.wg)(), (0, n.iD)("div", null, [(0, n.Wm)(c), (0, n.Wm)(s), l])
          );
        }
        const i = { class: "navbar navbar-expand-lg bg-dark" },
          c = { class: "container" },
          s = (0, n._)(
            "button",
            {
              class: "navbar-toggler bg-light",
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#navbarSupportedContent",
              "aria-controls": "navbarSupportedContent",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
            },
            [(0, n._)("span", { class: "navbar-toggler-icon" })],
            -1
          ),
          d = {
            class: "collapse navbar-collapse",
            id: "navbarSupportedContent",
          },
          u = { class: "navbar-nav me-auto mb-2 mb-lg-0 text-light" },
          p = { class: "nav-item" },
          b = { class: "nav-item" },
          v = { class: "nav-item" };
        function h(a, e, t, o, l, r) {
          const h = (0, n.up)("router-link");
          return (
            (0, n.wg)(),
            (0, n.iD)("nav", i, [
              (0, n._)("div", c, [
                (0, n.Wm)(
                  h,
                  { class: "navbar-brand text-light", to: "/" },
                  { default: (0, n.w5)(() => [(0, n.Uk)("ميديكال كير")]), _: 1 }
                ),
                s,
                (0, n._)("div", d, [
                  (0, n._)("ul", u, [
                    (0, n._)("li", p, [
                      (0, n.Wm)(
                        h,
                        { class: "nav-link text-light", to: "/" },
                        {
                          default: (0, n.w5)(() => [(0, n.Uk)("الرئسية")]),
                          _: 1,
                        }
                      ),
                    ]),
                    (0, n._)("li", b, [
                      (0, n.Wm)(
                        h,
                        { class: "nav-link text-light", to: "/about" },
                        {
                          default: (0, n.w5)(() => [(0, n.Uk)("من نحن")]),
                          _: 1,
                        }
                      ),
                    ]),
                    (0, n._)("li", v, [
                      (0, n.Wm)(
                        h,
                        { class: "nav-link text-light", to: "/" },
                        {
                          default: (0, n.w5)(() => [(0, n.Uk)("أتصل بنا")]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var f = { name: "NavBar" };
        const g = document.querySelectorAll("li > a");
        g.forEach((a) => {
          a.addEventListener("click", () => {
            a.classList.add("active");
          });
        });
        var m = t(89);
        const y = (0, m.Z)(f, [["render", h]]);
        var x = y,
          w = { components: { NavBar: x } };
        const k = (0, m.Z)(w, [["render", r]]);
        var E = k,
          _ = t(2483);
        function T(a, e, t, o, l, r) {
          const i = (0, n.up)("CarSule"),
            c = (0, n.up)("MoreAboutUs"),
            s = (0, n.up)("MoreInformation");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", null, [(0, n.Wm)(i), (0, n.Wm)(c), (0, n.Wm)(s)])
          );
        }
        var C = t.p + "https://joker-0-7.github.io/jkyuir/img/img-1.bc9086d7.png",
          O = t(3200),
          S = t.p + "https://joker-0-7.github.io/jkyuir/img/img-3.84ed26e4.png";
        const F = { class: "bg-primary-subtle" },
          j = { id: "carouselExampleCaptions", class: "carousel slide pb-4" },
          A = (0, n._)(
            "div",
            { class: "carousel-indicators" },
            [
              (0, n._)("button", {
                type: "button",
                "data-bs-target": "#carouselExampleCaptions",
                "data-bs-slide-to": "0",
                class: "active",
                "aria-current": "true",
                "aria-label": "Slide 1",
              }),
              (0, n._)("button", {
                type: "button",
                "data-bs-target": "#carouselExampleCaptions",
                "data-bs-slide-to": "1",
                "aria-label": "Slide 2",
              }),
              (0, n._)("button", {
                type: "button",
                "data-bs-target": "#carouselExampleCaptions",
                "data-bs-slide-to": "2",
                "aria-label": "Slide 3",
              }),
            ],
            -1
          ),
          N = { class: "carousel-inner" },
          M = { class: "carousel-item active" },
          P = (0, n._)(
            "img",
            { src: C, class: "d-block w-100", alt: "..." },
            null,
            -1
          ),
          W = { class: "carousel-caption d-none d-md-block text-dark" },
          L = (0, n._)("h5", null, "ميدكال كير للاطراف الصناعية", -1),
          U = (0, n._)(
            "p",
            null,
            " من الشركات الرائدة في تصنيع وصيانة الاطراف الصناعيه افضل اطرف صناعيه بجوده ودقه عالية ",
            -1
          ),
          B = (0, n.uE)(
            '<div class="carousel-item"><img src="' +
              O +
              '" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block text-dark"><h5>نهتم بأدق التفاصيل</h5><p> مهمتنا توفير أعلي مستوي من الجوده والخدمه لجميع الأطراف الصناعيه </p></div></div><div class="carousel-item"><img src="' +
              S +
              '" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block text-dark"><h5>أطراف صناعية المانية</h5><p> أطراف صناعية طبقا للمواصفات والمعايير العالمية بأفضل خامات وجوده عالميه وأفضل أطراف صناعية بجوده ودقه عالية </p></div></div>',
            2
          ),
          D = (0, n.uE)(
            '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
            2
          );
        function Z(a, e, t, o, l, r) {
          const i = (0, n.up)("router-link");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", F, [
              (0, n._)("div", j, [
                A,
                (0, n._)("div", N, [
                  (0, n._)("div", M, [
                    P,
                    (0, n._)("div", W, [
                      L,
                      U,
                      (0, n.Wm)(
                        i,
                        { to: "/", class: "btn btn-dark" },
                        {
                          default: (0, n.w5)(() => [(0, n.Uk)("أتصل بنا")]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  B,
                ]),
                D,
              ]),
            ])
          );
        }
        var I = { name: "CarSule" };
        const q = (0, m.Z)(I, [["render", Z]]);
        var H = q;
        const z = {
            class: "container accordion accordion-flush pb-2 pt-2",
            id: "accordionFlushExample",
          },
          K = (0, n.uE)(
            '<div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> اطراف صناعية المانية </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body"> يوفر ميديكال كير افضل اطراف صناعية المانية مصنعة طبقا لاحدث التكنولوجيا في الاطراف الصناعية في المانيا. يتم تصنيع الطرف الصناعي باحدث التكنولوجيا والخبرات الالمانية </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> صيانة الاطراف الصناعية </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body"> يوفر ميديكال كير خدمة صيانة الاطراف الصناعية حيث تشمل الخدمة صيانة اطراف صناعية تحت الركبة واطراف صناعية فوق الركبة واطراف صناعية علوية حيث يقوم بالخدمة افضل الخبراء والمهندسين المدربين على صيانة الاطراف الصناعية </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> اطراف صناعية سيلكون </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body"> حيث يوفر ميديكال كير مجموعة من الاطراف الصناعية السيلكون والتي لها نفس خصائص الطرف الطبيعي واللون حيث لا يوجد فرق بينها وبين الطرف الطبيعي </div><hr></div></div>',
            3
          ),
          G = [K];
        function J(a, e, t, o, l, r) {
          return (0, n.wg)(), (0, n.iD)("div", z, G);
        }
        var Q = { name: "MoreAboutUs" };
        const R = (0, m.Z)(Q, [["render", J]]);
        var V = R;
        const X = { class: "container" },
          Y = (0, n.uE)(
            '<div class="row"><div class="col-lg-6 col-sm-12 p-2"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> أطراف صناعية تحت الركبة </button></h2><div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> نقوم بتصنيع افضل اطراف صناعية تحت الركبة من اجود الخامات المستوردة حيث يوفرميديكال كير اطراف صناعية المانية في حالة البتر تحت الركبة ويتكون الطرف الصناعي لبتر تحت الركبة من السوكت والجزء الواصل بين القدم والسوكت ويمكن ان يكون القدم كربون </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> أطراف صناعية من مفصل الحوض </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"> في حالة البتر من مفصل الحوض يكون الطرف الصناعي اكثر تعقيدا ويحتاج الى كثير من التفاصيل حتى يناسب المريض. في ميديكال كير نهتم بتوفير اعلى مستوى من الجودة والخدمة للاطراف الصناعية حتي نعيد المريض لحياته الطبيعية مرة اخرى. </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> أطراف صناعية فوق الركبة </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"> يوفر ميديكال كير اطراف صناعية فوق الركبة حيث تتميز بالجودة والدقة في التصنيع بالاضافة الى الفريق الطبي المدرب على اعلى مستوى حيث يتكون الطرف الصناعي لبتر فوق الركبة من السوكت ويتم تصنيعه بعد اخذ المقاسات والركبة ويمكن ان تكون ثابتة او هوائية او ذاتية او الكترونية </div></div></div></div></div><div class="col-lg-6 col-sm-12 p-2"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingFive"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive"> أطراف صناعية تحت الكوع </button></h2><div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"><div class="accordion-body"> نقوم بتصنيع افضل اطراف صناعية تحت الكوع من اجود الخامات المستوردة حيث يوفرميديكال كير اطراف صناعية المانية في حالة البتر تحت الكوع نهتم بجميع تفاصيل اليد ويمكن ان يكون الطرف صناعي سيلكون وله نفس خصائص اليد الطبيعية </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> اطراف صناعية الكترونية </button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"><div class="accordion-body"> وفي هذه الحالة يكون الطرف الصناعي اكثر تعقيدا لما يحتويه من كثير من التفاصيل بالاضافة الى ان الطرف الصناعي يحاكي اليد الطبيعية </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSix"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> أطراف صناعية فوق الكوع </button></h2><div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample"><div class="accordion-body"> يوفر ميديكال كير اطراف صناعية فوق الكوع حيث تتميز بالجودة والدقة في التصنيع بالاضافة الى الفريق الطبي المدرب على اعلى مستوى.في حالة البتر فوق الكوع يحتوى الطرف الصناعيى على كثير من التفاصيل مثل كوع متحرك او يد متحركة بالاضافة الى يد تكون نفس لون البشرة. </div></div></div></div></div></div>',
            1
          ),
          $ = [Y];
        function aa(a, e, t, o, l, r) {
          return (0, n.wg)(), (0, n.iD)("div", X, $);
        }
        var ea = { name: "MoreInformation" };
        const ta = (0, m.Z)(ea, [["render", aa]]);
        var oa = ta,
          na = {
            name: "HomePage",
            components: { CarSule: H, MoreAboutUs: V, MoreInformation: oa },
          };
        const la = (0, m.Z)(na, [["render", T]]);
        var ra = la;
        const ia = [
            { path: "/", name: "home", component: ra },
            {
              path: "/about",
              name: "about",
              component: () => t.e(443).then(t.bind(t, 3644)),
            },
          ],
          ca = (0, _.p7)({ history: (0, _.PO)("/"), routes: ia });
        var sa = ca;
        (0, o.ri)(E).use(sa).mount("#app");
      },
      3200: function (a, e, t) {
        a.exports = t.p + "https://joker-0-7.github.io/jkyuir/img/img-2.d3f51158.png";
      },
    },
    e = {};
  function t(o) {
    var n = e[o];
    if (void 0 !== n) return n.exports;
    var l = (e[o] = { exports: {} });
    return a[o](l, l.exports, t), l.exports;
  }
  (t.m = a),
    (function () {
      var a = [];
      t.O = function (e, o, n, l) {
        if (!o) {
          var r = 1 / 0;
          for (d = 0; d < a.length; d++) {
            (o = a[d][0]), (n = a[d][1]), (l = a[d][2]);
            for (var i = !0, c = 0; c < o.length; c++)
              (!1 & l || r >= l) &&
              Object.keys(t.O).every(function (a) {
                return t.O[a](o[c]);
              })
                ? o.splice(c--, 1)
                : ((i = !1), l < r && (r = l));
            if (i) {
              a.splice(d--, 1);
              var s = n();
              void 0 !== s && (e = s);
            }
          }
          return e;
        }
        l = l || 0;
        for (var d = a.length; d > 0 && a[d - 1][2] > l; d--) a[d] = a[d - 1];
        a[d] = [o, n, l];
      };
    })(),
    (function () {
      t.n = function (a) {
        var e =
          a && a.__esModule
            ? function () {
                return a["default"];
              }
            : function () {
                return a;
              };
        return t.d(e, { a: e }), e;
      };
    })(),
    (function () {
      t.d = function (a, e) {
        for (var o in e)
          t.o(e, o) &&
            !t.o(a, o) &&
            Object.defineProperty(a, o, { enumerable: !0, get: e[o] });
      };
    })(),
    (function () {
      (t.f = {}),
        (t.e = function (a) {
          return Promise.all(
            Object.keys(t.f).reduce(function (e, o) {
              return t.f[o](a, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      t.u = function (a) {
        return "js/about.695d9250.js";
      };
    })(),
    (function () {
      t.miniCssF = function (a) {
        return "css/about.55ad6054.css";
      };
    })(),
    (function () {
      t.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (a, e) {
        return Object.prototype.hasOwnProperty.call(a, e);
      };
    })(),
    (function () {
      var a = {},
        e = "project:";
      t.l = function (o, n, l, r) {
        if (a[o]) a[o].push(n);
        else {
          var i, c;
          if (void 0 !== l)
            for (
              var s = document.getElementsByTagName("script"), d = 0;
              d < s.length;
              d++
            ) {
              var u = s[d];
              if (
                u.getAttribute("src") == o ||
                u.getAttribute("data-webpack") == e + l
              ) {
                i = u;
                break;
              }
            }
          i ||
            ((c = !0),
            (i = document.createElement("script")),
            (i.charset = "utf-8"),
            (i.timeout = 120),
            t.nc && i.setAttribute("nonce", t.nc),
            i.setAttribute("data-webpack", e + l),
            (i.src = o)),
            (a[o] = [n]);
          var p = function (e, t) {
              (i.onerror = i.onload = null), clearTimeout(b);
              var n = a[o];
              if (
                (delete a[o],
                i.parentNode && i.parentNode.removeChild(i),
                n &&
                  n.forEach(function (a) {
                    return a(t);
                  }),
                e)
              )
                return e(t);
            },
            b = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = p.bind(null, i.onerror)),
            (i.onload = p.bind(null, i.onload)),
            c && document.head.appendChild(i);
        }
      };
    })(),
    (function () {
      t.r = function (a) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(a, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      t.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var a = function (a, e, t, o, n) {
            var l = document.createElement("link");
            (l.rel = "stylesheet"), (l.type = "text/css");
            var r = function (t) {
              if (((l.onerror = l.onload = null), "load" === t.type)) o();
              else {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  i = (t && t.target && t.target.href) || e,
                  c = new Error(
                    "Loading CSS chunk " + a + " failed.\n(" + i + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.type = r),
                  (c.request = i),
                  l.parentNode.removeChild(l),
                  n(c);
              }
            };
            return (
              (l.onerror = l.onload = r),
              (l.href = e),
              t
                ? t.parentNode.insertBefore(l, t.nextSibling)
                : document.head.appendChild(l),
              l
            );
          },
          e = function (a, e) {
            for (
              var t = document.getElementsByTagName("link"), o = 0;
              o < t.length;
              o++
            ) {
              var n = t[o],
                l = n.getAttribute("data-href") || n.getAttribute("href");
              if ("stylesheet" === n.rel && (l === a || l === e)) return n;
            }
            var r = document.getElementsByTagName("style");
            for (o = 0; o < r.length; o++) {
              (n = r[o]), (l = n.getAttribute("data-href"));
              if (l === a || l === e) return n;
            }
          },
          o = function (o) {
            return new Promise(function (n, l) {
              var r = t.miniCssF(o),
                i = t.p + r;
              if (e(r, i)) return n();
              a(o, i, null, n, l);
            });
          },
          n = { 143: 0 };
        t.f.miniCss = function (a, e) {
          var t = { 443: 1 };
          n[a]
            ? e.push(n[a])
            : 0 !== n[a] &&
              t[a] &&
              e.push(
                (n[a] = o(a).then(
                  function () {
                    n[a] = 0;
                  },
                  function (e) {
                    throw (delete n[a], e);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var a = { 143: 0 };
      (t.f.j = function (e, o) {
        var n = t.o(a, e) ? a[e] : void 0;
        if (0 !== n)
          if (n) o.push(n[2]);
          else {
            var l = new Promise(function (t, o) {
              n = a[e] = [t, o];
            });
            o.push((n[2] = l));
            var r = t.p + t.u(e),
              i = new Error(),
              c = function (o) {
                if (t.o(a, e) && ((n = a[e]), 0 !== n && (a[e] = void 0), n)) {
                  var l = o && ("load" === o.type ? "missing" : o.type),
                    r = o && o.target && o.target.src;
                  (i.message =
                    "Loading chunk " + e + " failed.\n(" + l + ": " + r + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = r),
                    n[1](i);
                }
              };
            t.l(r, c, "chunk-" + e, e);
          }
      }),
        (t.O.j = function (e) {
          return 0 === a[e];
        });
      var e = function (e, o) {
          var n,
            l,
            r = o[0],
            i = o[1],
            c = o[2],
            s = 0;
          if (
            r.some(function (e) {
              return 0 !== a[e];
            })
          ) {
            for (n in i) t.o(i, n) && (t.m[n] = i[n]);
            if (c) var d = c(t);
          }
          for (e && e(o); s < r.length; s++)
            (l = r[s]), t.o(a, l) && a[l] && a[l][0](), (a[l] = 0);
          return t.O(d);
        },
        o = (self["webpackChunkproject"] = self["webpackChunkproject"] || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var o = t.O(void 0, [998], function () {
    return t(1003);
  });
  o = t.O(o);
})();
//# sourceMappingURL=app.ea0166c6.js.map
