'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7208],
  {
    31542: (e, t, r) => {
      r.d(t, { D: () => c });
      var n = r(24469),
        o = r(90909),
        u = r(20706),
        i = r(27024),
        s = r(15258),
        l = r(7620);
      function c(e, t, r) {
        let { isDisabled: c, trigger: a } = e,
          p = (0, i.Bi)(),
          d = (0, l.useRef)(!1),
          v = (0, l.useRef)(!1),
          f = () => {
            (d.current || v.current) && t.open(v.current);
          },
          g = (e) => {
            d.current || v.current || t.close(e);
          };
        (0, l.useEffect)(() => {
          let e = (e) => {
            r && r.current && 'Escape' === e.key && (e.stopPropagation(), t.close(!0));
          };
          if (t.isOpen)
            return (
              document.addEventListener('keydown', e, !0),
              () => {
                document.removeEventListener('keydown', e, !0);
              }
            );
        }, [r, t]);
        let E = () => {
            (v.current = !1), (d.current = !1), g(!0);
          },
          { hoverProps: m } = (0, o.M)({
            isDisabled: c,
            onHoverStart: () => {
              'focus' !== a &&
                ('pointer' === (0, n.ME)() ? (d.current = !0) : (d.current = !1), f());
            },
            onHoverEnd: () => {
              'focus' !== a && ((v.current = !1), (d.current = !1), g());
            },
          }),
          { focusableProps: T } = (0, u.Wc)(
            {
              isDisabled: c,
              onFocus: () => {
                (0, n.pP)() && ((v.current = !0), f());
              },
              onBlur: () => {
                (v.current = !1), (d.current = !1), g(!0);
              },
            },
            r
          );
        return {
          triggerProps: {
            'aria-describedby': t.isOpen ? p : void 0,
            ...(0, s.v)(T, m, { onPointerDown: E, onKeyDown: E, tabIndex: void 0 }),
          },
          tooltipProps: { id: p },
        };
      }
    },
    45826: (e, t, r) => {
      r.d(t, { O: () => a });
      var n = r(7620),
        o = r(86947);
      let u = {},
        i = 0,
        s = !1,
        l = null,
        c = null;
      function a(e = {}) {
        let { delay: t = 1500, closeDelay: r = 500 } = e,
          { isOpen: p, open: d, close: v } = (0, o.T)(e),
          f = (0, n.useMemo)(() => `${++i}`, []),
          g = (0, n.useRef)(null),
          E = (0, n.useRef)(v),
          m = () => {
            u[f] = h;
          },
          T = () => {
            for (let e in u) e !== f && (u[e](!0), delete u[e]);
          },
          y = () => {
            g.current && clearTimeout(g.current),
              (g.current = null),
              T(),
              m(),
              (s = !0),
              d(),
              l && (clearTimeout(l), (l = null)),
              c && (clearTimeout(c), (c = null));
          },
          h = (e) => {
            e || r <= 0
              ? (g.current && clearTimeout(g.current), (g.current = null), E.current())
              : g.current ||
                (g.current = setTimeout(() => {
                  (g.current = null), E.current();
                }, r)),
              l && (clearTimeout(l), (l = null)),
              s &&
                (c && clearTimeout(c),
                (c = setTimeout(
                  () => {
                    delete u[f], (c = null), (s = !1);
                  },
                  Math.max(500, r)
                )));
          },
          P = () => {
            T(),
              m(),
              p || l || s
                ? p || y()
                : (l = setTimeout(() => {
                    (l = null), (s = !0), y();
                  }, t));
          };
        return (
          (0, n.useEffect)(() => {
            E.current = v;
          }, [v]),
          (0, n.useEffect)(
            () => () => {
              g.current && clearTimeout(g.current), u[f] && delete u[f];
            },
            [f]
          ),
          {
            isOpen: p,
            open: (e) => {
              e || !(t > 0) || g.current ? y() : P();
            },
            close: h,
          }
        );
      }
    },
    86947: (e, t, r) => {
      r.d(t, { T: () => u });
      var n = r(7620),
        o = r(61112);
      function u(e) {
        let [t, r] = (0, o.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
          u = (0, n.useCallback)(() => {
            r(!0);
          }, [r]),
          i = (0, n.useCallback)(() => {
            r(!1);
          }, [r]),
          s = (0, n.useCallback)(() => {
            r(!t);
          }, [r, t]);
        return { isOpen: t, setOpen: r, open: u, close: i, toggle: s };
      }
    },
    90909: (e, t, r) => {
      r.d(t, { M: () => d });
      var n = r(14187),
        o = r(48647),
        u = r(55795),
        i = r(7620);
      let s = !1,
        l = 0;
      function c() {
        (s = !0),
          setTimeout(() => {
            s = !1;
          }, 50);
      }
      function a(e) {
        'touch' === e.pointerType && c();
      }
      function p() {
        if ('undefined' != typeof document)
          return (
            'undefined' != typeof PointerEvent
              ? document.addEventListener('pointerup', a)
              : document.addEventListener('touchend', c),
            l++,
            () => {
              --l > 0 ||
                ('undefined' != typeof PointerEvent
                  ? document.removeEventListener('pointerup', a)
                  : document.removeEventListener('touchend', c));
            }
          );
      }
      function d(e) {
        let { onHoverStart: t, onHoverChange: r, onHoverEnd: l, isDisabled: c } = e,
          [a, d] = (0, i.useState)(!1),
          v = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null,
          }).current;
        (0, i.useEffect)(p, []);
        let { addGlobalListener: f, removeAllGlobalListeners: g } = (0, n.A)(),
          { hoverProps: E, triggerHoverEnd: m } = (0, i.useMemo)(() => {
            let e = (e, i) => {
                if (
                  ((v.pointerType = i),
                  c || 'touch' === i || v.isHovered || !e.currentTarget.contains(e.target))
                )
                  return;
                v.isHovered = !0;
                let s = e.currentTarget;
                (v.target = s),
                  f(
                    (0, o.TW)(e.target),
                    'pointerover',
                    (e) => {
                      v.isHovered &&
                        v.target &&
                        !(0, u.sD)(v.target, e.target) &&
                        n(e, e.pointerType);
                    },
                    { capture: !0 }
                  ),
                  t && t({ type: 'hoverstart', target: s, pointerType: i }),
                  r && r(!0),
                  d(!0);
              },
              n = (e, t) => {
                let n = v.target;
                (v.pointerType = ''),
                  (v.target = null),
                  'touch' !== t &&
                    v.isHovered &&
                    n &&
                    ((v.isHovered = !1),
                    g(),
                    l && l({ type: 'hoverend', target: n, pointerType: t }),
                    r && r(!1),
                    d(!1));
              },
              i = {};
            return (
              'undefined' != typeof PointerEvent
                ? ((i.onPointerEnter = (t) => {
                    (s && 'mouse' === t.pointerType) || e(t, t.pointerType);
                  }),
                  (i.onPointerLeave = (e) => {
                    !c && e.currentTarget.contains(e.target) && n(e, e.pointerType);
                  }))
                : ((i.onTouchStart = () => {
                    v.ignoreEmulatedMouseEvents = !0;
                  }),
                  (i.onMouseEnter = (t) => {
                    v.ignoreEmulatedMouseEvents || s || e(t, 'mouse'),
                      (v.ignoreEmulatedMouseEvents = !1);
                  }),
                  (i.onMouseLeave = (e) => {
                    !c && e.currentTarget.contains(e.target) && n(e, 'mouse');
                  })),
              { hoverProps: i, triggerHoverEnd: n }
            );
          }, [t, r, l, c, v, f, g]);
        return (
          (0, i.useEffect)(() => {
            c && m({ currentTarget: v.target }, v.pointerType);
          }, [c]),
          { hoverProps: E, isHovered: a }
        );
      }
    },
    96200: (e, t, r) => {
      r.d(t, { f: () => i });
      var n = r(2728),
        o = r(15258),
        u = r(90909);
      function i(e, t) {
        let r = (0, n.$)(e, { labelable: !0 }),
          { hoverProps: i } = (0, u.M)({
            onHoverStart: () => (null == t ? void 0 : t.open(!0)),
            onHoverEnd: () => (null == t ? void 0 : t.close()),
          });
        return { tooltipProps: (0, o.v)(r, i, { role: 'tooltip' }) };
      }
    },
  },
]);
