(this.webpackJsonpartcryption = this.webpackJsonpartcryption || []).push([
  [0],
  {
    109: function (e, t, a) {},
    123: function (e, t, a) {},
    124: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        r = a(0),
        i = a.n(r),
        c = a(11),
        s = a.n(c),
        o = (a(109), a(34)),
        l = a(18),
        j = a(39),
        d = a(4),
        b = a(180),
        x = a(205),
        h = a(181),
        u = a(182),
        O = a(183),
        p = a(42),
        m = a(127),
        g = a(91),
        f = a.n(g),
        y = a(90),
        C = a.n(y),
        v = a(76),
        S = a.n(v),
        w = a(203),
        L = a(178),
        B = a(179),
        k = a.p + "static/media/LogoLight.cf6a5043.svg",
        P = a(54),
        F = a(33),
        T = a(46),
        I = Object(T.a)(F.b)(
          n ||
            (n = Object(P.a)([
              "\n  color: #fff;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n",
            ]))
        ),
        N = a(5),
        A = a(204),
        M = a(177),
        H = a(176),
        R = Object(N.a)({
          root: {
            border: "1px solid rgba(0, 0, 0, .125)",
            boxShadow: "none",
            "&:not(:last-child)": { borderBottom: 0 },
            "&:before": { display: "none" },
            "&$expanded": { margin: "auto" },
          },
          expanded: {},
        })(A.a),
        q = Object(N.a)({
          root: {
            backgroundColor: "rgba(0, 0, 0, .03)",
            borderBottom: "1px solid rgba(0, 0, 0, .125)",
            marginBottom: -1,
            minHeight: 56,
            "&$expanded": { minHeight: 56 },
          },
          content: { "&$expanded": { margin: "12px 0" } },
          expanded: {},
        })(H.a),
        D = Object(N.a)(function (e) {
          return { root: { paddingLeft: e.spacing(2) } };
        })(M.a),
        E = a(3),
        W = [
          {
            title: "Settings",
            children: [
              { title: "Notifications" },
              { title: "Service Fees" },
              { title: "Resale Royalitics" },
              { title: "Plans & Pricing" },
            ],
          },
          {
            title: "PageManagement",
            children: [
              { title: "Page Management" },
              { title: "Welcome" },
              { title: "Home" },
              { title: "Profile Page" },
              { title: "Feed" },
              { title: "Featured Users" },
              { title: "Featured Curators", path: "/featured-curators" },
              { title: "Support, Help & FAQs" },
              { title: "Agreements" },
            ],
          },
          {
            title: "Transactions",
            children: [{ title: "Menu1" }, { title: "Menu2" }],
          },
          { title: "IP Case Management" },
          { title: "Analytics" },
          { title: "Chat" },
          { title: "User Reports" },
          { title: "Logs/Errors" },
          { title: "Roadmap" },
        ];
      function U(e) {
        var t = e.onClose,
          a = i.a.useState({}),
          n = Object(l.a)(a, 2),
          r = n[0],
          c = n[1];
        return Object(E.jsxs)("div", {
          children: [
            Object(E.jsxs)(w.a, {
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 1,
              paddingTop: 1,
              children: [
                Object(E.jsx)("img", { src: k }),
                Object(E.jsxs)(m.a, {
                  onClick: t,
                  children: [
                    Object(E.jsx)(S.a, {}),
                    Object(E.jsx)(w.a, {
                      position: "absolute",
                      style: { left: "8px", top: "12px" },
                      children: Object(E.jsx)(S.a, {}),
                    }),
                  ],
                }),
              ],
            }),
            W.map(function (e, t) {
              return Object(E.jsxs)(
                R,
                {
                  square: !0,
                  expanded: !!r[t],
                  onChange: function () {
                    return (
                      (e = t),
                      (a = !r[t]),
                      void c(
                        Object(j.a)(
                          Object(j.a)({}, r),
                          {},
                          Object(o.a)({}, e, a)
                        )
                      )
                    );
                    var e, a;
                  },
                  children: [
                    Object(E.jsx)(q, {
                      "aria-controls": "panel1d-content",
                      id: "panel1d-header",
                      expandIcon: e.children ? Object(E.jsx)(C.a, {}) : null,
                      children: Object(E.jsx)(p.a, { children: e.title }),
                    }),
                    e.children &&
                      Object(E.jsx)(D, {
                        children: Object(E.jsx)(L.a, {
                          children: e.children.map(function (e, t) {
                            return Object(E.jsx)(
                              B.a,
                              {
                                children: Object(E.jsx)(I, {
                                  to: e.path || "/url",
                                  children: e.title,
                                }),
                              },
                              t
                            );
                          }),
                        }),
                      }),
                  ],
                },
                t
              );
            }),
          ],
        });
      }
      var $ = a.p + "static/media/LogoDark.c05f3b10.svg",
        J = 336,
        z = Object(b.a)(function (e) {
          return {
            root: { display: "flex" },
            appBar: {
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              width: "calc(100% - ".concat(J, "px)"),
              marginLeft: J,
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: e.spacing(2) },
            hide: { display: "none" },
            drawer: {
              width: J,
              flexShrink: 0,
              "& .MuiPaper-root": { backgroundColor: "#000", color: "#fff" },
              "& .MuiIconButton-root": { color: "rgba(255, 255, 255, 0.8)" },
            },
            drawerPaper: { width: J },
            drawerHeader: Object(j.a)(
              Object(j.a)(
                {
                  display: "flex",
                  alignItems: "center",
                  padding: e.spacing(0, 1),
                },
                e.mixins.toolbar
              ),
              {},
              { justifyContent: "flex-end" }
            ),
            content: {
              flexGrow: 1,
              padding: e.spacing(3),
              transition: e.transitions.create("margin", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              marginLeft: -336,
            },
            contentShift: {
              transition: e.transitions.create("margin", {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
              marginLeft: 0,
            },
          };
        });
      function G(e) {
        var t = e.children,
          a = z(),
          n = i.a.useState(!0),
          r = Object(l.a)(n, 2),
          c = r[0],
          s = r[1];
        return Object(E.jsxs)("div", {
          className: a.root,
          children: [
            Object(E.jsx)(h.a, {}),
            Object(E.jsx)(u.a, {
              position: "fixed",
              color: "transparent",
              className: Object(d.a)(
                a.appBar,
                Object(o.a)({}, a.appBarShift, c)
              ),
              children: Object(E.jsxs)(O.a, {
                children: [
                  !c && Object(E.jsx)("img", { src: $ }),
                  Object(E.jsx)(m.a, {
                    color: "inherit",
                    "aria-label": "open drawer",
                    onClick: function () {
                      s(!0);
                    },
                    edge: "start",
                    className: Object(d.a)(a.menuButton, c && a.hide),
                    children: Object(E.jsx)(f.a, {}),
                  }),
                  Object(E.jsx)(p.a, { variant: "h6", noWrap: !0 }),
                ],
              }),
            }),
            Object(E.jsx)(x.a, {
              className: a.drawer,
              variant: "persistent",
              anchor: "left",
              open: c,
              classes: { paper: a.drawerPaper },
              children: Object(E.jsx)(U, {
                onClose: function () {
                  return s(!1);
                },
              }),
            }),
            Object(E.jsxs)("main", {
              className: Object(d.a)(
                a.content,
                Object(o.a)({}, a.contentShift, c)
              ),
              children: [
                Object(E.jsx)("div", { className: a.drawerHeader }),
                t,
              ],
            }),
          ],
        });
      }
      var Q,
        V = a(93),
        K = a(201),
        X = a(9),
        Y = a(92),
        Z = a(188),
        _ = a(192),
        ee = a(202),
        te = a(197),
        ae = a(206),
        ne = a(199),
        re = a(193),
        ie = a(200),
        ce = a(195),
        se = a(196),
        oe = a(194),
        le = (a(117), a(189)),
        je = a(190),
        de = a(191),
        be = a(198),
        xe = a(184),
        he = a(187),
        ue = a(186),
        Oe = a(185),
        pe = Object(b.a)({ root: {}, media: { height: 140 } });
      function me(e) {
        var t = e.curator,
          a = pe();
        return Object(E.jsxs)(xe.a, {
          className: a.root,
          children: [
            Object(E.jsx)(w.a, {
              padding: 1,
              children: Object(E.jsx)(Oe.a, {
                className: a.media,
                image: "./images/paella.jpg",
                title: "Demo Image",
              }),
            }),
            Object(E.jsx)(ue.a, {
              children: Object(E.jsx)(p.a, {
                gutterBottom: !0,
                variant: "h5",
                component: "h2",
                children: t.title,
              }),
            }),
            Object(E.jsx)(he.a, {
              children: Object(E.jsx)(Z.a, {
                size: "small",
                color: "primary",
                children: "Details",
              }),
            }),
          ],
        });
      }
      var ge = Object(T.a)(F.b)(
          Q ||
            (Q = Object(P.a)([
              "\n  color: #000;\n  text-decoration: underline;\n\n  &:hover {\n    text-decoration: underline;\n  }\n",
            ]))
        ),
        fe = [
          "Curator Apple",
          "Curator Banana",
          "Curator Apricots",
          "Curator Avocados",
          "Curator Elderberry",
        ];
      function ye(e) {
        Object(Y.a)(e);
        var t = Object(r.useState)(!1),
          a = Object(l.a)(t, 2),
          n = a[0],
          i = a[1],
          c = Object(r.useState)(!1),
          s = Object(l.a)(c, 2),
          o = s[0],
          j = s[1],
          d = Object(r.useState)(""),
          b = Object(l.a)(d, 2),
          x = b[0],
          h = b[1],
          u = Object(r.useMemo)(
            function () {
              return fe.filter(function (e) {
                return e.toLowerCase().search(x.toLowerCase()) >= 0;
              });
            },
            [x]
          );
        return Object(E.jsxs)("div", {
          children: [
            Object(E.jsxs)(w.a, {
              display: "flex",
              children: [
                Object(E.jsxs)(w.a, {
                  display: "flex",
                  children: [
                    Object(E.jsx)(p.a, { variant: "h4", children: "Curators" }),
                    Object(E.jsx)(w.a, {
                      marginLeft: 3,
                      children: Object(E.jsx)(m.a, {
                        children: Object(E.jsx)(le.a, {}),
                      }),
                    }),
                  ],
                }),
                Object(E.jsxs)(w.a, {
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  children: [
                    Object(E.jsxs)(Z.a, {
                      color: "primary",
                      variant: "contained",
                      onClick: function () {
                        return i(!0);
                      },
                      children: [Object(E.jsx)(je.a, {}), "Add a curator"],
                    }),
                    Object(E.jsx)(w.a, { marginRight: 1 }),
                    Object(E.jsxs)(Z.a, {
                      color: "primary",
                      variant: "contained",
                      onClick: function () {
                        return j(!0);
                      },
                      children: [Object(E.jsx)(de.a, {}), "Purchase"],
                    }),
                  ],
                }),
              ],
            }),
            Object(E.jsxs)(_.a, {
              container: !0,
              spacing: 1,
              children: [
                Object(E.jsx)(_.a, {
                  item: !0,
                  lg: 3,
                  md: 4,
                  children: Object(E.jsx)(me, {
                    curator: { title: "Curator 1" },
                  }),
                }),
                Object(E.jsx)(_.a, {
                  item: !0,
                  lg: 3,
                  md: 4,
                  children: Object(E.jsx)(me, {
                    curator: { title: "Curator 1" },
                  }),
                }),
                Object(E.jsx)(_.a, {
                  item: !0,
                  lg: 3,
                  md: 4,
                  children: Object(E.jsx)(me, {
                    curator: { title: "Curator 1" },
                  }),
                }),
                Object(E.jsx)(_.a, {
                  item: !0,
                  lg: 3,
                  md: 4,
                  children: Object(E.jsx)(me, {
                    curator: { title: "Curator 1" },
                  }),
                }),
              ],
            }),
            Object(E.jsxs)(re.a, {
              open: n,
              onClose: function () {
                return i(!1);
              },
              "aria-labelledby": "alert-dialog-title",
              "aria-describedby": "alert-dialog-description",
              children: [
                Object(E.jsx)(oe.a, {
                  id: "alert-dialog-title",
                  children: Object(E.jsx)(p.a, {
                    variant: "h5",
                    children: "Add a curator",
                  }),
                }),
                Object(E.jsxs)(ce.a, {
                  children: [
                    Object(E.jsx)(se.a, {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    }),
                    Object(E.jsx)(ee.a, {
                      id: "standard-basic",
                      label: "Standard",
                      fullWidth: !0,
                      onChange: function (e) {
                        return h(e.target.value);
                      },
                    }),
                    Object(E.jsx)(L.a, {
                      children: u.map(function (e) {
                        return Object(E.jsxs)(B.a, {
                          children: [
                            Object(E.jsx)(te.a, {
                              children: Object(E.jsx)(ae.a, {
                                children: Object(E.jsx)(be.a, {}),
                              }),
                            }),
                            Object(E.jsx)(ne.a, { primary: e }),
                          ],
                        });
                      }),
                    }),
                  ],
                }),
                Object(E.jsxs)(ie.a, {
                  children: [
                    Object(E.jsx)(Z.a, {
                      onClick: function () {
                        return i(!1);
                      },
                      color: "primary",
                      children: "Cancel",
                    }),
                    Object(E.jsx)(Z.a, {
                      onClick: function () {
                        return i(!1);
                      },
                      color: "primary",
                      variant: "contained",
                      autoFocus: !0,
                      children: "Create",
                    }),
                  ],
                }),
              ],
            }),
            Object(E.jsxs)(re.a, {
              open: o,
              onClose: function () {
                return j(!1);
              },
              "aria-labelledby": "alert-dialog-title",
              "aria-describedby": "alert-dialog-description",
              maxWidth: "lg",
              children: [
                Object(E.jsx)(oe.a, {
                  id: "alert-dialog-title",
                  children: Object(E.jsxs)(w.a, {
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #eee",
                    children: [
                      Object(E.jsx)(p.a, {
                        variant: "h5",
                        children: "Purchase",
                      }),
                      Object(E.jsx)(w.a, {
                        marginLeft: "auto",
                        children: Object(E.jsx)(L.a, {
                          children: Object(E.jsx)(B.a, {
                            children: Object(E.jsx)(ne.a, {
                              primary: "2.00ETH",
                              secondary: "Nov 2, 2021",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(E.jsx)(ce.a, {
                  children: Object(E.jsxs)(_.a, {
                    container: !0,
                    children: [
                      Object(E.jsx)(_.a, {
                        item: !0,
                        md: 3,
                        children: Object(E.jsxs)(L.a, {
                          children: [
                            Object(E.jsxs)(B.a, {
                              children: [
                                Object(E.jsx)(te.a, {
                                  children: Object(E.jsx)(be.a, {}),
                                }),
                                Object(E.jsx)(ne.a, {
                                  primary: "Vandana Taxali",
                                  secondary: "Transferor",
                                }),
                              ],
                            }),
                            Object(E.jsxs)(B.a, {
                              children: [
                                Object(E.jsx)(te.a, {
                                  children: Object(E.jsx)(be.a, {}),
                                }),
                                Object(E.jsx)(ne.a, {
                                  primary: "Rachel Nguen",
                                  secondary: "Transferee",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(E.jsx)(_.a, {
                        item: !0,
                        md: 9,
                        children: Object(E.jsxs)(w.a, {
                          width: "600px",
                          padding: 2,
                          children: [
                            Object(E.jsx)(Z.a, {
                              variant: "contained",
                              color: "secondary",
                              children: "Purchase",
                            }),
                            Object(E.jsxs)(w.a, {
                              marginTop: 2,
                              children: [
                                Object(E.jsx)("img", {
                                  src: "./images/paella.jpg",
                                  title: "Demo Image",
                                  height: "300px",
                                  imageStyle: {
                                    width: "300px",
                                    height: "auto",
                                  },
                                }),
                                Object(E.jsx)(p.a, { children: "Title" }),
                                Object(E.jsx)(p.a, {
                                  children: "Type of the assets",
                                }),
                                Object(E.jsx)(ge, {
                                  to: "/meta-data",
                                  children: "Click to see metadata",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                Object(E.jsxs)(ie.a, {
                  children: [
                    Object(E.jsx)(Z.a, {
                      onClick: function () {
                        return i(!1);
                      },
                      color: "primary",
                      children: "Cancel",
                    }),
                    Object(E.jsx)(Z.a, {
                      onClick: function () {
                        return i(!1);
                      },
                      variant: "contained",
                      autoFocus: !0,
                      color: "primary",
                      children: "Create",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      a(123);
      var Ce = Object(V.a)({
          palette: {
            primary: { main: "#000" },
            secondary: { main: "#BAE5F8" },
          },
          typography: {
            fontFamily: 'Inter, "Helvetica", "Arial", sans-serif',
            button: { textTransform: "none" },
          },
        }),
        ve = function () {
          return Object(E.jsx)(K.a, {
            theme: Ce,
            children: Object(E.jsx)(F.a, {
              children: Object(E.jsx)(G, {
                children: Object(E.jsxs)(X.c, {
                  children: [
                    Object(E.jsx)(X.a, {
                      path: "/featured-curators",
                      element: Object(E.jsx)(ye, {}),
                    }),
                    Object(E.jsx)(X.a, {
                      path: "/meta-data",
                      element: Object(E.jsx)(p.a, {
                        children: "Meta data page",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Se = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 208))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                a(e), n(e), r(e), i(e), c(e);
              });
        };
      s.a.render(
        Object(E.jsx)(i.a.StrictMode, { children: Object(E.jsx)(ve, {}) }),
        document.getElementById("root")
      ),
        Se();
    },
  },
  [[124, 1, 2]],
]);
//# sourceMappingURL=main.129d586b.chunk.js.map
