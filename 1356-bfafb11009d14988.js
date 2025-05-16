'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1356],
  {
    332: (e, t, r) => {
      r.d(t, { F: () => a });
      var n = r(74670),
        i = r(7620);
      function a(e, t, r) {
        let a = (0, i.useRef)(t),
          s = (0, n.J)(() => {
            r && r(a.current);
          });
        (0, i.useEffect)(() => {
          var t;
          let r = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return (
            null == r || r.addEventListener('reset', s),
            () => {
              null == r || r.removeEventListener('reset', s);
            }
          );
        }, [e, s]);
      }
    },
    7963: (e, t, r) => {
      r.d(t, { F: () => n });
      let n = r(7620).createContext({ register: () => {} });
      n.displayName = 'PressResponderContext';
    },
    84644: (e, t, r) => {
      r.d(t, { Fe: () => l, _h: () => u, rd: () => o });
      var n = r(48231),
        i = r(68797),
        a = r(7620);
      let s = (0, a.createContext)({
        isNative: !0,
        open: function (e, t) {
          (function (e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute('data-href')) {
              let r = document.createElement('a');
              (r.href = e.getAttribute('data-href')),
                e.hasAttribute('data-target') && (r.target = e.getAttribute('data-target')),
                e.hasAttribute('data-rel') && (r.rel = e.getAttribute('data-rel')),
                e.hasAttribute('data-download') && (r.download = e.getAttribute('data-download')),
                e.hasAttribute('data-ping') && (r.ping = e.getAttribute('data-ping')),
                e.hasAttribute('data-referrer-policy') &&
                  (r.referrerPolicy = e.getAttribute('data-referrer-policy')),
                e.appendChild(r),
                t(r),
                e.removeChild(r);
            }
          })(e, (e) => l(e, t));
        },
        useHref: (e) => e,
      });
      function o() {
        return (0, a.useContext)(s);
      }
      function l(e, t, r = !0) {
        var a, s;
        let { metaKey: o, ctrlKey: u, altKey: g, shiftKey: p } = t;
        (0, i.gm)() &&
          (null === (s = window.event) || void 0 === s
            ? void 0
            : null === (a = s.type) || void 0 === a
              ? void 0
              : a.startsWith('key')) &&
          '_blank' === e.target &&
          ((0, i.cX)() ? (o = !0) : (u = !0));
        let d =
          (0, i.Tc)() && (0, i.cX)() && !(0, i.bh)()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: o,
                ctrlKey: u,
                altKey: g,
                shiftKey: p,
              })
            : new MouseEvent('click', {
                metaKey: o,
                ctrlKey: u,
                altKey: g,
                shiftKey: p,
                bubbles: !0,
                cancelable: !0,
              });
        (l.isOpening = r), (0, n.e)(e), e.dispatchEvent(d), (l.isOpening = !1);
      }
      function u(e) {
        var t;
        let r = o().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : '');
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy,
        };
      }
      l.isOpening = !1;
    },
    85905: (e, t, r) => {
      r.d(t, { d: () => A });
      var n = r(68797),
        i = r(48647),
        a = r(88370);
      let s = 'default',
        o = '',
        l = new WeakMap();
      function u(e) {
        if ((0, n.un)()) {
          if ('default' === s) {
            let t = (0, i.TW)(e);
            (o = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = 'none');
          }
          s = 'disabled';
        } else if (e instanceof HTMLElement || e instanceof SVGElement) {
          let t = 'userSelect' in e.style ? 'userSelect' : 'webkitUserSelect';
          l.set(e, e.style[t]), (e.style[t] = 'none');
        }
      }
      function g(e) {
        if ((0, n.un)())
          'disabled' === s &&
            ((s = 'restoring'),
            setTimeout(() => {
              (0, a.v)(() => {
                if ('restoring' === s) {
                  let t = (0, i.TW)(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = o || ''),
                    (o = ''),
                    (s = 'default');
                }
              });
            }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
          let t = l.get(e),
            r = 'userSelect' in e.style ? 'userSelect' : 'webkitUserSelect';
          'none' === e.style[r] && (e.style[r] = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            l.delete(e);
        }
      }
      var p = r(7963),
        d = r(75261);
      function c(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
        return t.get(e);
      }
      var v = r(86111);
      function f(e, t, r) {
        var n = c(e, t, 'set');
        return (
          !(function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
              if (!t.writable) throw TypeError('attempted to set read only private field');
              t.value = r;
            }
          })(e, n, r),
          r
        );
      }
      var y = r(15258),
        T = r(53171),
        E = r(14187),
        h = r(74670),
        P = r(55795),
        m = r(22489),
        b = r(84644),
        w = r(61847),
        K = r(48231),
        k = r(97509),
        S = r(7620),
        D = new WeakMap();
      class M {
        continuePropagation() {
          f(this, D, !1);
        }
        get shouldStopPropagation() {
          var e;
          return (e = c(this, D, 'get')).get ? e.get.call(this) : e.value;
        }
        constructor(e, t, r, n) {
          var i;
          (0, v._)(this, D, { writable: !0, value: void 0 }), f(this, D, !0);
          let a =
              null !== (i = null == n ? void 0 : n.target) && void 0 !== i ? i : r.currentTarget,
            s = null == a ? void 0 : a.getBoundingClientRect(),
            o,
            l = 0,
            u,
            g = null;
          null != r.clientX && null != r.clientY && ((u = r.clientX), (g = r.clientY)),
            s &&
              (null != u && null != g
                ? ((o = u - s.left), (l = g - s.top))
                : ((o = s.width / 2), (l = s.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = o),
            (this.y = l);
        }
      }
      let O = Symbol('linkClicked');
      function A(e) {
        let {
            onPress: t,
            onPressChange: r,
            onPressStart: a,
            onPressEnd: s,
            onPressUp: o,
            isDisabled: l,
            isPressed: c,
            preventFocusOnPress: v,
            shouldCancelOnPointerExit: f,
            allowTextSelectionOnPress: D,
            ref: A,
            ...H
          } = (function (e) {
            let t = (0, S.useContext)(p.F);
            if (t) {
              let { register: r, ...n } = t;
              (e = (0, y.v)(n, e)), r();
            }
            return (0, T.w)(t, e.ref), e;
          })(e),
          [U, W] = (0, S.useState)(!1),
          _ = (0, S.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: [],
          }),
          { addGlobalListener: J, removeAllGlobalListeners: N } = (0, E.A)(),
          R = (0, h.J)((e, t) => {
            let n = _.current;
            if (l || n.didFirePressStart) return !1;
            let i = !0;
            if (((n.isTriggeringEvent = !0), a)) {
              let r = new M('pressstart', t, e);
              a(r), (i = r.shouldStopPropagation);
            }
            return r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), W(!0), i;
          }),
          G = (0, h.J)((e, n, i = !0) => {
            let a = _.current;
            if (!a.didFirePressStart) return !1;
            (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let o = !0;
            if (s) {
              let t = new M('pressend', n, e);
              s(t), (o = t.shouldStopPropagation);
            }
            if ((r && r(!1), W(!1), t && i && !l)) {
              let r = new M('press', n, e);
              t(r), o && (o = r.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), o;
          }),
          B = (0, h.J)((e, t) => {
            let r = _.current;
            if (l) return !1;
            if (o) {
              r.isTriggeringEvent = !0;
              let n = new M('pressup', t, e);
              return o(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
          }),
          V = (0, h.J)((e) => {
            let t = _.current;
            if (t.isPressed && t.target) {
              for (let r of (t.didFirePressStart &&
                null != t.pointerType &&
                G(X(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              N(),
              D || g(t.target),
              t.disposables))
                r();
              t.disposables = [];
            }
          }),
          z = (0, h.J)((e) => {
            f && V(e);
          }),
          j = (0, S.useMemo)(() => {
            let e = _.current,
              t = {
                onKeyDown(t) {
                  if (
                    I(t.nativeEvent, t.currentTarget) &&
                    (0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))
                  ) {
                    var a;
                    x((0, P.wt)(t.nativeEvent), t.key) && t.preventDefault();
                    let s = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (e.pointerType = 'keyboard'),
                        (s = R(t, 'keyboard'));
                      let n = t.currentTarget;
                      J(
                        (0, i.TW)(t.currentTarget),
                        'keyup',
                        (0, m.c)((t) => {
                          I(t, n) &&
                            !t.repeat &&
                            (0, P.sD)(n, (0, P.wt)(t)) &&
                            e.target &&
                            B(X(e.target, t), 'keyboard');
                        }, r),
                        !0
                      );
                    }
                    s && t.stopPropagation(),
                      t.metaKey &&
                        (0, n.cX)() &&
                        (null === (a = e.metaKeyEvents) ||
                          void 0 === a ||
                          a.set(t.key, t.nativeEvent));
                  } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t || (0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !b.Fe.isOpening
                  ) {
                    let r = !0;
                    if (
                      (l && t.preventDefault(),
                      !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ('virtual' === e.pointerType || (0, w.Y)(t.nativeEvent)))
                    ) {
                      let e = R(t, 'virtual'),
                        n = B(t, 'virtual'),
                        i = G(t, 'virtual');
                      r = e && n && i;
                    } else if (e.isPressed && 'keyboard' !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || 'virtual';
                      (r = G(X(t.currentTarget, t), n, !0)), (e.isOverTarget = !1), V(t);
                    }
                    (e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                var r, n, i;
                if (e.isPressed && e.target && I(t, e.target)) {
                  x((0, P.wt)(t), t.key) && t.preventDefault();
                  let r = (0, P.wt)(t);
                  G(X(e.target, t), 'keyboard', (0, P.sD)(e.target, (0, P.wt)(t))),
                    N(),
                    'Enter' !== t.key &&
                      C(e.target) &&
                      (0, P.sD)(e.target, r) &&
                      !t[O] &&
                      ((t[O] = !0), (0, b.Fe)(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key);
                } else if (
                  'Meta' === t.key &&
                  (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let r of ((e.metaKeyEvents = void 0), t.values()))
                    null === (i = e.target) ||
                      void 0 === i ||
                      i.dispatchEvent(new KeyboardEvent('keyup', r));
                }
              };
            if ('undefined' != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (0 !== t.button || !(0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) return;
                if ((0, w.P)(t.nativeEvent)) {
                  e.pointerType = 'virtual';
                  return;
                }
                e.pointerType = t.pointerType;
                let a = !0;
                if (!e.isPressed) {
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.activePointerId = t.pointerId),
                    (e.target = t.currentTarget),
                    D || u(e.target),
                    (a = R(t, e.pointerType));
                  let s = (0, P.wt)(t.nativeEvent);
                  'releasePointerCapture' in s && s.releasePointerCapture(t.pointerId),
                    J((0, i.TW)(t.currentTarget), 'pointerup', r, !1),
                    J((0, i.TW)(t.currentTarget), 'pointercancel', n, !1);
                }
                a && t.stopPropagation();
              }),
                (t.onMouseDown = (t) => {
                  if ((0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent)) && 0 === t.button) {
                    if (v) {
                      let r = (0, d.LE)(t.target);
                      r && e.disposables.push(r);
                    }
                    t.stopPropagation();
                  }
                }),
                (t.onPointerUp = (t) => {
                  (0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent)) &&
                    'virtual' !== e.pointerType &&
                    0 === t.button &&
                    B(t, e.pointerType || t.pointerType);
                }),
                (t.onPointerEnter = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    !e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), R(X(e.target, t), e.pointerType));
                }),
                (t.onPointerLeave = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1), G(X(e.target, t), e.pointerType, !1), z(t));
                });
              let r = (t) => {
                  if (
                    t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target
                  ) {
                    if ((0, P.sD)(e.target, (0, P.wt)(t)) && null != e.pointerType) {
                      let r = !1,
                        n = setTimeout(() => {
                          e.isPressed &&
                            e.target instanceof HTMLElement &&
                            (r ? V(t) : ((0, K.e)(e.target), e.target.click()));
                        }, 80);
                      J(t.currentTarget, 'click', () => (r = !0), !0),
                        e.disposables.push(() => clearTimeout(n));
                    } else V(t);
                    e.isOverTarget = !1;
                  }
                },
                n = (e) => {
                  V(e);
                };
              t.onDragStart = (e) => {
                (0, P.sD)(e.currentTarget, (0, P.wt)(e.nativeEvent)) && V(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && (0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) {
                  if (e.ignoreEmulatedMouseEvents) {
                    t.stopPropagation();
                    return;
                  }
                  if (
                    ((e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = (0, w.Y)(t.nativeEvent) ? 'virtual' : 'mouse'),
                    (0, k.flushSync)(() => R(t, e.pointerType)) && t.stopPropagation(),
                    v)
                  ) {
                    let r = (0, d.LE)(t.target);
                    r && e.disposables.push(r);
                  }
                  J((0, i.TW)(t.currentTarget), 'mouseup', r, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!(0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (r = R(t, e.pointerType))),
                    r && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!(0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1), (r = G(t, e.pointerType, !1)), z(t)),
                    r && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  (0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent)) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    B(t, e.pointerType || 'mouse');
                });
              let r = (t) => {
                if (0 === t.button) {
                  if (e.ignoreEmulatedMouseEvents) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  (e.target && e.target.contains(t.target) && null != e.pointerType) || V(t),
                    (e.isOverTarget = !1);
                }
              };
              (t.onTouchStart = (t) => {
                if (!(0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) return;
                let r = (function (e) {
                  let { targetTouches: t } = e;
                  return t.length > 0 ? t[0] : null;
                })(t.nativeEvent);
                r &&
                  ((e.activePointerId = r.identifier),
                  (e.ignoreEmulatedMouseEvents = !0),
                  (e.isOverTarget = !0),
                  (e.isPressed = !0),
                  (e.target = t.currentTarget),
                  (e.pointerType = 'touch'),
                  D || u(e.target),
                  R(F(e.target, t), e.pointerType) && t.stopPropagation(),
                  J((0, i.mD)(t.currentTarget), 'scroll', n, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!(0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = L(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && Y(r, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0), (n = R(F(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (n = G(F(e.target, t), e.pointerType, !1)),
                      z(F(e.target, t))),
                    n && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!(0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent))) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = L(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && Y(r, t.currentTarget) && null != e.pointerType
                    ? (B(F(e.target, t), e.pointerType), (n = G(F(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (n = G(F(e.target, t), e.pointerType, !1)),
                    n && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !D && g(e.target),
                    N();
                }),
                (t.onTouchCancel = (t) => {
                  (0, P.sD)(t.currentTarget, (0, P.wt)(t.nativeEvent)) &&
                    (t.stopPropagation(), e.isPressed && V(F(e.target, t)));
                });
              let n = (t) => {
                e.isPressed &&
                  (0, P.sD)((0, P.wt)(t), e.target) &&
                  V({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                (0, P.sD)(e.currentTarget, (0, P.wt)(e.nativeEvent)) && V(e);
              };
            }
            return t;
          }, [J, l, v, N, D, V, z, G, R, B]);
        return (
          (0, S.useEffect)(() => {
            let e = _.current;
            return () => {
              var t;
              for (let r of (D || g(null !== (t = e.target) && void 0 !== t ? t : void 0),
              e.disposables))
                r();
              e.disposables = [];
            };
          }, [D]),
          { isPressed: c || U, pressProps: (0, y.v)(H, j) }
        );
      }
      function C(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function I(e, t) {
        let { key: r, code: n } = e,
          a = t.getAttribute('role');
        return (
          ('Enter' === r || ' ' === r || 'Spacebar' === r || 'Space' === n) &&
          !(
            (t instanceof (0, i.mD)(t).HTMLInputElement && !U(t, r)) ||
            t instanceof (0, i.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === a || (!a && C(t))) && 'Enter' !== r)
        );
      }
      function L(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function F(e, t) {
        let r = 0,
          n = 0;
        return (
          t.targetTouches &&
            1 === t.targetTouches.length &&
            ((r = t.targetTouches[0].clientX), (n = t.targetTouches[0].clientY)),
          {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: r,
            clientY: n,
          }
        );
      }
      function X(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n,
        };
      }
      function Y(e, t) {
        let r,
          n,
          i = t.getBoundingClientRect(),
          a =
            ((r = 0),
            (n = 0),
            void 0 !== e.width ? (r = e.width / 2) : void 0 !== e.radiusX && (r = e.radiusX),
            void 0 !== e.height ? (n = e.height / 2) : void 0 !== e.radiusY && (n = e.radiusY),
            {
              top: e.clientY - n,
              right: e.clientX + r,
              bottom: e.clientY + n,
              left: e.clientX - r,
            });
        return (
          !(i.left > a.right) && !(a.left > i.right) && !(i.top > a.bottom) && !(a.top > i.bottom)
        );
      }
      function x(e, t) {
        return e instanceof HTMLInputElement
          ? !U(e, t)
          : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? 'submit' !== e.type && 'reset' !== e.type : !C(e));
      }
      let H = new Set([
        'checkbox',
        'radio',
        'range',
        'color',
        'file',
        'image',
        'button',
        'submit',
        'reset',
      ]);
      function U(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type ? ' ' === t : H.has(e.type);
      }
    },
  },
]);
