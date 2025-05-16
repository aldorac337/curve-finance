(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3748],
  {
    5984: (e, t, r) => {
      var o = r(7692),
        n = r(26087),
        i = r(52968),
        a = 0 / 0,
        p = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (i(e)) return a;
        if (n(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = o(e);
        var r = s.test(e);
        return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : p.test(e) ? a : +e;
      };
    },
    7692: (e, t, r) => {
      var o = r(27230),
        n = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, o(e) + 1).replace(n, '') : e;
      };
    },
    27230: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    35267: (e, t, r) => {
      var o = r(88480),
        n = r(87383),
        i = r(15904),
        a = Object.prototype,
        p = Function.prototype.toString,
        s = a.hasOwnProperty,
        l = p.call(Object);
      e.exports = function (e) {
        if (!i(e) || '[object Object]' != o(e)) return !1;
        var t = n(e);
        if (null === t) return !0;
        var r = s.call(t, 'constructor') && t.constructor;
        return 'function' == typeof r && r instanceof r && p.call(r) == l;
      };
    },
    35861: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => o });
      let o = r(61693).A;
    },
    61693: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n });
      var o = r(7620);
      function n({ controlled: e, default: t, name: r, state: n = 'value' }) {
        let { current: i } = o.useRef(void 0 !== e),
          [a, p] = o.useState(t),
          s = o.useCallback((e) => {
            i || p(e);
          }, []);
        return [i ? e : a, s];
      }
    },
    78867: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => eJ });
      var o = r(7620),
        n = r(32987),
        i = r(27020),
        a = r(56579),
        p = r(33377),
        s = r(11146),
        l = r(66395),
        c = r(29423),
        f = r(32678),
        u = r(31809),
        d = r(33420),
        m = r(87975),
        h = r(65490),
        v = r(36225),
        g = r(5511),
        y = r(74761),
        b = r(88997);
      function w(e) {
        if (null == e) return window;
        if ('[object Window]' !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function x(e) {
        var t = w(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function O(e) {
        var t = w(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function A(e) {
        if ('undefined' == typeof ShadowRoot) return !1;
        var t = w(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var R = Math.max,
        E = Math.min,
        T = Math.round;
      function j() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + '/' + e.version;
              })
              .join(' ')
          : navigator.userAgent;
      }
      function P() {
        return !/^((?!chrome|android).)*safari/i.test(j());
      }
      function M(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var o = e.getBoundingClientRect(),
          n = 1,
          i = 1;
        t &&
          O(e) &&
          ((n = (e.offsetWidth > 0 && T(o.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && T(o.height) / e.offsetHeight) || 1));
        var a = (x(e) ? w(e) : window).visualViewport,
          p = !P() && r,
          s = (o.left + (p && a ? a.offsetLeft : 0)) / n,
          l = (o.top + (p && a ? a.offsetTop : 0)) / i,
          c = o.width / n,
          f = o.height / i;
        return { width: c, height: f, top: l, right: s + c, bottom: l + f, left: s, x: s, y: l };
      }
      function k(e) {
        var t = w(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function S(e) {
        return e ? (e.nodeName || '').toLowerCase() : null;
      }
      function L(e) {
        return ((x(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function W(e) {
        return M(L(e)).left + k(e).scrollLeft;
      }
      function D(e) {
        return w(e).getComputedStyle(e);
      }
      function $(e) {
        var t = D(e),
          r = t.overflow,
          o = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + n + o);
      }
      function B(e) {
        var t = M(e),
          r = e.offsetWidth,
          o = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - r) && (r = t.width),
          1 >= Math.abs(t.height - o) && (o = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: o }
        );
      }
      function C(e) {
        return 'html' === S(e)
          ? e
          : e.assignedSlot || e.parentNode || (A(e) ? e.host : null) || L(e);
      }
      function H(e, t) {
        void 0 === t && (t = []);
        var r,
          o = (function e(t) {
            return ['html', 'body', '#document'].indexOf(S(t)) >= 0
              ? t.ownerDocument.body
              : O(t) && $(t)
                ? t
                : e(C(t));
          })(e),
          n = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = w(o),
          a = n ? [i].concat(i.visualViewport || [], $(o) ? o : []) : o,
          p = t.concat(a);
        return n ? p : p.concat(H(C(a)));
      }
      function I(e) {
        return O(e) && 'fixed' !== D(e).position ? e.offsetParent : null;
      }
      function N(e) {
        for (
          var t = w(e), r = I(e);
          r && ['table', 'td', 'th'].indexOf(S(r)) >= 0 && 'static' === D(r).position;

        )
          r = I(r);
        return r && ('html' === S(r) || ('body' === S(r) && 'static' === D(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(j());
                if (/Trident/i.test(j()) && O(e) && 'fixed' === D(e).position) return null;
                var r = C(e);
                for (A(r) && (r = r.host); O(r) && 0 > ['html', 'body'].indexOf(S(r)); ) {
                  var o = D(r);
                  if (
                    'none' !== o.transform ||
                    'none' !== o.perspective ||
                    'paint' === o.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(o.willChange) ||
                    (t && 'filter' === o.willChange) ||
                    (t && o.filter && 'none' !== o.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var F = 'bottom',
        V = 'right',
        q = 'left',
        U = 'auto',
        z = ['top', F, V, q],
        _ = 'start',
        X = 'viewport',
        Y = 'popper',
        G = z.reduce(function (e, t) {
          return e.concat([t + '-' + _, t + '-end']);
        }, []),
        J = [].concat(z, [U]).reduce(function (e, t) {
          return e.concat([t, t + '-' + _, t + '-end']);
        }, []),
        K = [
          'beforeRead',
          'read',
          'afterRead',
          'beforeMain',
          'main',
          'afterMain',
          'beforeWrite',
          'write',
          'afterWrite',
        ],
        Q = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function Z() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && 'function' == typeof e.getBoundingClientRect);
        });
      }
      var ee = { passive: !0 };
      function et(e) {
        return e.split('-')[0];
      }
      function er(e) {
        return e.split('-')[1];
      }
      function eo(e) {
        return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
      }
      function en(e) {
        var t,
          r = e.reference,
          o = e.element,
          n = e.placement,
          i = n ? et(n) : null,
          a = n ? er(n) : null,
          p = r.x + r.width / 2 - o.width / 2,
          s = r.y + r.height / 2 - o.height / 2;
        switch (i) {
          case 'top':
            t = { x: p, y: r.y - o.height };
            break;
          case F:
            t = { x: p, y: r.y + r.height };
            break;
          case V:
            t = { x: r.x + r.width, y: s };
            break;
          case q:
            t = { x: r.x - o.width, y: s };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var l = i ? eo(i) : null;
        if (null != l) {
          var c = 'y' === l ? 'height' : 'width';
          switch (a) {
            case _:
              t[l] = t[l] - (r[c] / 2 - o[c] / 2);
              break;
            case 'end':
              t[l] = t[l] + (r[c] / 2 - o[c] / 2);
          }
        }
        return t;
      }
      var ei = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
      function ea(e) {
        var t,
          r,
          o,
          n,
          i,
          a,
          p,
          s = e.popper,
          l = e.popperRect,
          c = e.placement,
          f = e.variation,
          u = e.offsets,
          d = e.position,
          m = e.gpuAcceleration,
          h = e.adaptive,
          v = e.roundOffsets,
          g = e.isFixed,
          y = u.x,
          b = void 0 === y ? 0 : y,
          x = u.y,
          O = void 0 === x ? 0 : x,
          A = 'function' == typeof v ? v({ x: b, y: O }) : { x: b, y: O };
        (b = A.x), (O = A.y);
        var R = u.hasOwnProperty('x'),
          E = u.hasOwnProperty('y'),
          j = q,
          P = 'top',
          M = window;
        if (h) {
          var k = N(s),
            S = 'clientHeight',
            W = 'clientWidth';
          k === w(s) &&
            'static' !== D((k = L(s))).position &&
            'absolute' === d &&
            ((S = 'scrollHeight'), (W = 'scrollWidth')),
            ('top' === c || ((c === q || c === V) && 'end' === f)) &&
              ((P = F),
              (O -= (g && k === M && M.visualViewport ? M.visualViewport.height : k[S]) - l.height),
              (O *= m ? 1 : -1)),
            (c === q || (('top' === c || c === F) && 'end' === f)) &&
              ((j = V),
              (b -= (g && k === M && M.visualViewport ? M.visualViewport.width : k[W]) - l.width),
              (b *= m ? 1 : -1));
        }
        var $ = Object.assign({ position: d }, h && ei),
          B =
            !0 === v
              ? ((t = { x: b, y: O }),
                (r = w(s)),
                (o = t.x),
                (n = t.y),
                { x: T(o * (i = r.devicePixelRatio || 1)) / i || 0, y: T(n * i) / i || 0 })
              : { x: b, y: O };
        return ((b = B.x), (O = B.y), m)
          ? Object.assign(
              {},
              $,
              (((p = {})[P] = E ? '0' : ''),
              (p[j] = R ? '0' : ''),
              (p.transform =
                1 >= (M.devicePixelRatio || 1)
                  ? 'translate(' + b + 'px, ' + O + 'px)'
                  : 'translate3d(' + b + 'px, ' + O + 'px, 0)'),
              p)
            )
          : Object.assign(
              {},
              $,
              (((a = {})[P] = E ? O + 'px' : ''), (a[j] = R ? b + 'px' : ''), (a.transform = ''), a)
            );
      }
      var ep = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      function es(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ep[e];
        });
      }
      var el = { start: 'end', end: 'start' };
      function ec(e) {
        return e.replace(/start|end/g, function (e) {
          return el[e];
        });
      }
      function ef(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && A(r)) {
          var o = t;
          do {
            if (o && e.isSameNode(o)) return !0;
            o = o.parentNode || o.host;
          } while (o);
        }
        return !1;
      }
      function eu(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ed(e, t, r) {
        var o, n, i, a, p, s, l, c, f, u;
        return t === X
          ? eu(
              (function (e, t) {
                var r = w(e),
                  o = L(e),
                  n = r.visualViewport,
                  i = o.clientWidth,
                  a = o.clientHeight,
                  p = 0,
                  s = 0;
                if (n) {
                  (i = n.width), (a = n.height);
                  var l = P();
                  (l || (!l && 'fixed' === t)) && ((p = n.offsetLeft), (s = n.offsetTop));
                }
                return { width: i, height: a, x: p + W(e), y: s };
              })(e, r)
            )
          : x(t)
            ? (((o = M(t, !1, 'fixed' === r)).top = o.top + t.clientTop),
              (o.left = o.left + t.clientLeft),
              (o.bottom = o.top + t.clientHeight),
              (o.right = o.left + t.clientWidth),
              (o.width = t.clientWidth),
              (o.height = t.clientHeight),
              (o.x = o.left),
              (o.y = o.top),
              o)
            : eu(
                ((n = L(e)),
                (a = L(n)),
                (p = k(n)),
                (s = null == (i = n.ownerDocument) ? void 0 : i.body),
                (l = R(a.scrollWidth, a.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0)),
                (c = R(
                  a.scrollHeight,
                  a.clientHeight,
                  s ? s.scrollHeight : 0,
                  s ? s.clientHeight : 0
                )),
                (f = -p.scrollLeft + W(n)),
                (u = -p.scrollTop),
                'rtl' === D(s || a).direction && (f += R(a.clientWidth, s ? s.clientWidth : 0) - l),
                { width: l, height: c, x: f, y: u })
              );
      }
      function em() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function eh(e) {
        return Object.assign({}, em(), e);
      }
      function ev(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      function eg(e, t) {
        void 0 === t && (t = {});
        var r,
          o,
          n,
          i,
          a,
          p,
          s,
          l = t,
          c = l.placement,
          f = void 0 === c ? e.placement : c,
          u = l.strategy,
          d = void 0 === u ? e.strategy : u,
          m = l.boundary,
          h = l.rootBoundary,
          v = l.elementContext,
          g = void 0 === v ? Y : v,
          y = l.altBoundary,
          b = l.padding,
          w = void 0 === b ? 0 : b,
          A = eh('number' != typeof w ? w : ev(w, z)),
          T = e.rects.popper,
          j = e.elements[void 0 !== y && y ? (g === Y ? 'reference' : Y) : g],
          P =
            ((r = x(j) ? j : j.contextElement || L(e.elements.popper)),
            (p = (a = [].concat(
              'clippingParents' === (o = void 0 === m ? 'clippingParents' : m)
                ? ((n = H(C(r))),
                  x((i = ['absolute', 'fixed'].indexOf(D(r).position) >= 0 && O(r) ? N(r) : r))
                    ? n.filter(function (e) {
                        return x(e) && ef(e, i) && 'body' !== S(e);
                      })
                    : [])
                : [].concat(o),
              [void 0 === h ? X : h]
            ))[0]),
            ((s = a.reduce(
              function (e, t) {
                var o = ed(r, t, d);
                return (
                  (e.top = R(o.top, e.top)),
                  (e.right = E(o.right, e.right)),
                  (e.bottom = E(o.bottom, e.bottom)),
                  (e.left = R(o.left, e.left)),
                  e
                );
              },
              ed(r, p, d)
            )).width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s),
          k = M(e.elements.reference),
          W = en({ reference: k, element: T, strategy: 'absolute', placement: f }),
          $ = eu(Object.assign({}, T, W)),
          B = g === Y ? $ : k,
          I = {
            top: P.top - B.top + A.top,
            bottom: B.bottom - P.bottom + A.bottom,
            left: P.left - B.left + A.left,
            right: B.right - P.right + A.right,
          },
          q = e.modifiersData.offset;
        if (g === Y && q) {
          var U = q[f];
          Object.keys(I).forEach(function (e) {
            var t = [V, F].indexOf(e) >= 0 ? 1 : -1,
              r = ['top', F].indexOf(e) >= 0 ? 'y' : 'x';
            I[e] += U[r] * t;
          });
        }
        return I;
      }
      function ey(e, t, r) {
        return R(e, E(t, r));
      }
      function eb(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function ew(e) {
        return ['top', V, F, q].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ex = (function (e) {
          void 0 === e && (e = {});
          var t = e,
            r = t.defaultModifiers,
            o = void 0 === r ? [] : r,
            n = t.defaultOptions,
            i = void 0 === n ? Q : n;
          return function (e, t, r) {
            void 0 === r && (r = i);
            var n,
              a = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, Q, i),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              p = [],
              s = !1,
              l = {
                state: a,
                setOptions: function (r) {
                  var n,
                    s,
                    f,
                    u,
                    d,
                    m = 'function' == typeof r ? r(a.options) : r;
                  c(),
                    (a.options = Object.assign({}, i, a.options, m)),
                    (a.scrollParents = {
                      reference: x(e) ? H(e) : e.contextElement ? H(e.contextElement) : [],
                      popper: H(t),
                    });
                  var h =
                    ((s = Object.keys(
                      (n = [].concat(o, a.options.modifiers).reduce(function (e, t) {
                        var r = e[t.name];
                        return (
                          (e[t.name] = r
                            ? Object.assign({}, r, t, {
                                options: Object.assign({}, r.options, t.options),
                                data: Object.assign({}, r.data, t.data),
                              })
                            : t),
                          e
                        );
                      }, {}))
                    ).map(function (e) {
                      return n[e];
                    })),
                    (f = new Map()),
                    (u = new Set()),
                    (d = []),
                    s.forEach(function (e) {
                      f.set(e.name, e);
                    }),
                    s.forEach(function (e) {
                      u.has(e.name) ||
                        (function e(t) {
                          u.add(t.name),
                            []
                              .concat(t.requires || [], t.requiresIfExists || [])
                              .forEach(function (t) {
                                if (!u.has(t)) {
                                  var r = f.get(t);
                                  r && e(r);
                                }
                              }),
                            d.push(t);
                        })(e);
                    }),
                    K.reduce(function (e, t) {
                      return e.concat(
                        d.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (a.orderedModifiers = h.filter(function (e) {
                      return e.enabled;
                    })),
                    a.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        r = e.options,
                        o = e.effect;
                      if ('function' == typeof o) {
                        var n = o({
                          state: a,
                          name: t,
                          instance: l,
                          options: void 0 === r ? {} : r,
                        });
                        p.push(n || function () {});
                      }
                    }),
                    l.update()
                  );
                },
                forceUpdate: function () {
                  if (!s) {
                    var e,
                      t,
                      r,
                      o,
                      n,
                      i,
                      p,
                      c,
                      f,
                      u,
                      d,
                      m = a.elements,
                      h = m.reference,
                      v = m.popper;
                    if (Z(h, v)) {
                      (a.rects = {
                        reference:
                          ((e = N(v)),
                          (t = 'fixed' === a.options.strategy),
                          (r = O(e)),
                          (p =
                            O(e) &&
                            ((n = T((o = e.getBoundingClientRect()).width) / e.offsetWidth || 1),
                            (i = T(o.height) / e.offsetHeight || 1),
                            1 !== n || 1 !== i)),
                          (c = L(e)),
                          (f = M(h, p, t)),
                          (u = { scrollLeft: 0, scrollTop: 0 }),
                          (d = { x: 0, y: 0 }),
                          (r || (!r && !t)) &&
                            (('body' !== S(e) || $(c)) &&
                              (u = (function (e) {
                                return e !== w(e) && O(e)
                                  ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                                  : k(e);
                              })(e)),
                            O(e)
                              ? ((d = M(e, !0)), (d.x += e.clientLeft), (d.y += e.clientTop))
                              : c && (d.x = W(c))),
                          {
                            x: f.left + u.scrollLeft - d.x,
                            y: f.top + u.scrollTop - d.y,
                            width: f.width,
                            height: f.height,
                          }),
                        popper: B(v),
                      }),
                        (a.reset = !1),
                        (a.placement = a.options.placement),
                        a.orderedModifiers.forEach(function (e) {
                          return (a.modifiersData[e.name] = Object.assign({}, e.data));
                        });
                      for (var g = 0; g < a.orderedModifiers.length; g++) {
                        if (!0 === a.reset) {
                          (a.reset = !1), (g = -1);
                          continue;
                        }
                        var y = a.orderedModifiers[g],
                          b = y.fn,
                          x = y.options,
                          A = void 0 === x ? {} : x,
                          R = y.name;
                        'function' == typeof b &&
                          (a = b({ state: a, options: A, name: R, instance: l }) || a);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    n ||
                      (n = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (n = void 0),
                            e(
                              new Promise(function (e) {
                                l.forceUpdate(), e(a);
                              })
                            );
                        });
                      })),
                    n
                  );
                },
                destroy: function () {
                  c(), (s = !0);
                },
              };
            if (!Z(e, t)) return l;
            function c() {
              p.forEach(function (e) {
                return e();
              }),
                (p = []);
            }
            return (
              l.setOptions(r).then(function (e) {
                !s && r.onFirstUpdate && r.onFirstUpdate(e);
              }),
              l
            );
          };
        })({
          defaultModifiers: [
            {
              name: 'eventListeners',
              enabled: !0,
              phase: 'write',
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  r = e.instance,
                  o = e.options,
                  n = o.scroll,
                  i = void 0 === n || n,
                  a = o.resize,
                  p = void 0 === a || a,
                  s = w(t.elements.popper),
                  l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return (
                  i &&
                    l.forEach(function (e) {
                      e.addEventListener('scroll', r.update, ee);
                    }),
                  p && s.addEventListener('resize', r.update, ee),
                  function () {
                    i &&
                      l.forEach(function (e) {
                        e.removeEventListener('scroll', r.update, ee);
                      }),
                      p && s.removeEventListener('resize', r.update, ee);
                  }
                );
              },
              data: {},
            },
            {
              name: 'popperOffsets',
              enabled: !0,
              phase: 'read',
              fn: function (e) {
                var t = e.state,
                  r = e.name;
                t.modifiersData[r] = en({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: 'absolute',
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: 'computeStyles',
              enabled: !0,
              phase: 'beforeWrite',
              fn: function (e) {
                var t = e.state,
                  r = e.options,
                  o = r.gpuAcceleration,
                  n = r.adaptive,
                  i = r.roundOffsets,
                  a = void 0 === i || i,
                  p = {
                    placement: et(t.placement),
                    variation: er(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: void 0 === o || o,
                    isFixed: 'fixed' === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    ea(
                      Object.assign({}, p, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === n || n,
                        roundOffsets: a,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      ea(
                        Object.assign({}, p, {
                          offsets: t.modifiersData.arrow,
                          position: 'absolute',
                          adaptive: !1,
                          roundOffsets: a,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    'data-popper-placement': t.placement,
                  }));
              },
              data: {},
            },
            {
              name: 'applyStyles',
              enabled: !0,
              phase: 'write',
              fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                  var r = t.styles[e] || {},
                    o = t.attributes[e] || {},
                    n = t.elements[e];
                  O(n) &&
                    S(n) &&
                    (Object.assign(n.style, r),
                    Object.keys(o).forEach(function (e) {
                      var t = o[e];
                      !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? '' : t);
                    }));
                });
              },
              effect: function (e) {
                var t = e.state,
                  r = {
                    popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
                    arrow: { position: 'absolute' },
                    reference: {},
                  };
                return (
                  Object.assign(t.elements.popper.style, r.popper),
                  (t.styles = r),
                  t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
                  function () {
                    Object.keys(t.elements).forEach(function (e) {
                      var o = t.elements[e],
                        n = t.attributes[e] || {},
                        i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce(
                          function (e, t) {
                            return (e[t] = ''), e;
                          },
                          {}
                        );
                      O(o) &&
                        S(o) &&
                        (Object.assign(o.style, i),
                        Object.keys(n).forEach(function (e) {
                          o.removeAttribute(e);
                        }));
                    });
                  }
                );
              },
              requires: ['computeStyles'],
            },
            {
              name: 'offset',
              enabled: !0,
              phase: 'main',
              requires: ['popperOffsets'],
              fn: function (e) {
                var t = e.state,
                  r = e.options,
                  o = e.name,
                  n = r.offset,
                  i = void 0 === n ? [0, 0] : n,
                  a = J.reduce(function (e, r) {
                    var o, n, a, p, s, l;
                    return (
                      (e[r] =
                        ((o = t.rects),
                        (a = [q, 'top'].indexOf((n = et(r))) >= 0 ? -1 : 1),
                        (s = (p =
                          'function' == typeof i
                            ? i(Object.assign({}, o, { placement: r }))
                            : i)[0]),
                        (l = p[1]),
                        (s = s || 0),
                        (l = (l || 0) * a),
                        [q, V].indexOf(n) >= 0 ? { x: l, y: s } : { x: s, y: l })),
                      e
                    );
                  }, {}),
                  p = a[t.placement],
                  s = p.x,
                  l = p.y;
                null != t.modifiersData.popperOffsets &&
                  ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += l)),
                  (t.modifiersData[o] = a);
              },
            },
            {
              name: 'flip',
              enabled: !0,
              phase: 'main',
              fn: function (e) {
                var t = e.state,
                  r = e.options,
                  o = e.name;
                if (!t.modifiersData[o]._skip) {
                  for (
                    var n = r.mainAxis,
                      i = void 0 === n || n,
                      a = r.altAxis,
                      p = void 0 === a || a,
                      s = r.fallbackPlacements,
                      l = r.padding,
                      c = r.boundary,
                      f = r.rootBoundary,
                      u = r.altBoundary,
                      d = r.flipVariations,
                      m = void 0 === d || d,
                      h = r.allowedAutoPlacements,
                      v = t.options.placement,
                      g = et(v) === v,
                      y =
                        s ||
                        (g || !m
                          ? [es(v)]
                          : (function (e) {
                              if (et(e) === U) return [];
                              var t = es(e);
                              return [ec(e), t, ec(t)];
                            })(v)),
                      b = [v].concat(y).reduce(function (e, r) {
                        var o, n, i, a, p, s, u, d, v, g, y, b;
                        return e.concat(
                          et(r) === U
                            ? ((n = (o = {
                                placement: r,
                                boundary: c,
                                rootBoundary: f,
                                padding: l,
                                flipVariations: m,
                                allowedAutoPlacements: h,
                              }).placement),
                              (i = o.boundary),
                              (a = o.rootBoundary),
                              (p = o.padding),
                              (s = o.flipVariations),
                              (d = void 0 === (u = o.allowedAutoPlacements) ? J : u),
                              0 ===
                                (y = (g = (v = er(n))
                                  ? s
                                    ? G
                                    : G.filter(function (e) {
                                        return er(e) === v;
                                      })
                                  : z).filter(function (e) {
                                  return d.indexOf(e) >= 0;
                                })).length && (y = g),
                              Object.keys(
                                (b = y.reduce(function (e, r) {
                                  return (
                                    (e[r] = eg(t, {
                                      placement: r,
                                      boundary: i,
                                      rootBoundary: a,
                                      padding: p,
                                    })[et(r)]),
                                    e
                                  );
                                }, {}))
                              ).sort(function (e, t) {
                                return b[e] - b[t];
                              }))
                            : r
                        );
                      }, []),
                      w = t.rects.reference,
                      x = t.rects.popper,
                      O = new Map(),
                      A = !0,
                      R = b[0],
                      E = 0;
                    E < b.length;
                    E++
                  ) {
                    var T = b[E],
                      j = et(T),
                      P = er(T) === _,
                      M = ['top', F].indexOf(j) >= 0,
                      k = M ? 'width' : 'height',
                      S = eg(t, {
                        placement: T,
                        boundary: c,
                        rootBoundary: f,
                        altBoundary: u,
                        padding: l,
                      }),
                      L = M ? (P ? V : q) : P ? F : 'top';
                    w[k] > x[k] && (L = es(L));
                    var W = es(L),
                      D = [];
                    if (
                      (i && D.push(S[j] <= 0),
                      p && D.push(S[L] <= 0, S[W] <= 0),
                      D.every(function (e) {
                        return e;
                      }))
                    ) {
                      (R = T), (A = !1);
                      break;
                    }
                    O.set(T, D);
                  }
                  if (A)
                    for (
                      var $ = m ? 3 : 1,
                        B = function (e) {
                          var t = b.find(function (t) {
                            var r = O.get(t);
                            if (r)
                              return r.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (R = t), 'break';
                        },
                        C = $;
                      C > 0 && 'break' !== B(C);
                      C--
                    );
                  t.placement !== R &&
                    ((t.modifiersData[o]._skip = !0), (t.placement = R), (t.reset = !0));
                }
              },
              requiresIfExists: ['offset'],
              data: { _skip: !1 },
            },
            {
              name: 'preventOverflow',
              enabled: !0,
              phase: 'main',
              fn: function (e) {
                var t = e.state,
                  r = e.options,
                  o = e.name,
                  n = r.mainAxis,
                  i = r.altAxis,
                  a = r.boundary,
                  p = r.rootBoundary,
                  s = r.altBoundary,
                  l = r.padding,
                  c = r.tether,
                  f = void 0 === c || c,
                  u = r.tetherOffset,
                  d = void 0 === u ? 0 : u,
                  m = eg(t, { boundary: a, rootBoundary: p, padding: l, altBoundary: s }),
                  h = et(t.placement),
                  v = er(t.placement),
                  g = !v,
                  y = eo(h),
                  b = 'x' === y ? 'y' : 'x',
                  w = t.modifiersData.popperOffsets,
                  x = t.rects.reference,
                  O = t.rects.popper,
                  A =
                    'function' == typeof d
                      ? d(Object.assign({}, t.rects, { placement: t.placement }))
                      : d,
                  T =
                    'number' == typeof A
                      ? { mainAxis: A, altAxis: A }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
                  j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                  P = { x: 0, y: 0 };
                if (w) {
                  if (void 0 === n || n) {
                    var M,
                      k = 'y' === y ? 'top' : q,
                      S = 'y' === y ? F : V,
                      L = 'y' === y ? 'height' : 'width',
                      W = w[y],
                      D = W + m[k],
                      $ = W - m[S],
                      C = f ? -O[L] / 2 : 0,
                      H = v === _ ? x[L] : O[L],
                      I = v === _ ? -O[L] : -x[L],
                      U = t.elements.arrow,
                      z = f && U ? B(U) : { width: 0, height: 0 },
                      X = t.modifiersData['arrow#persistent']
                        ? t.modifiersData['arrow#persistent'].padding
                        : em(),
                      Y = X[k],
                      G = X[S],
                      J = ey(0, x[L], z[L]),
                      K = g ? x[L] / 2 - C - J - Y - T.mainAxis : H - J - Y - T.mainAxis,
                      Q = g ? -x[L] / 2 + C + J + G + T.mainAxis : I + J + G + T.mainAxis,
                      Z = t.elements.arrow && N(t.elements.arrow),
                      ee = Z ? ('y' === y ? Z.clientTop || 0 : Z.clientLeft || 0) : 0,
                      en = null != (M = null == j ? void 0 : j[y]) ? M : 0,
                      ei = ey(f ? E(D, W + K - en - ee) : D, W, f ? R($, W + Q - en) : $);
                    (w[y] = ei), (P[y] = ei - W);
                  }
                  if (void 0 !== i && i) {
                    var ea,
                      ep,
                      es = 'x' === y ? 'top' : q,
                      el = 'x' === y ? F : V,
                      ec = w[b],
                      ef = 'y' === b ? 'height' : 'width',
                      eu = ec + m[es],
                      ed = ec - m[el],
                      eh = -1 !== ['top', q].indexOf(h),
                      ev = null != (ep = null == j ? void 0 : j[b]) ? ep : 0,
                      eb = eh ? eu : ec - x[ef] - O[ef] - ev + T.altAxis,
                      ew = eh ? ec + x[ef] + O[ef] - ev - T.altAxis : ed,
                      ex =
                        f && eh
                          ? (ea = ey(eb, ec, ew)) > ew
                            ? ew
                            : ea
                          : ey(f ? eb : eu, ec, f ? ew : ed);
                    (w[b] = ex), (P[b] = ex - ec);
                  }
                  t.modifiersData[o] = P;
                }
              },
              requiresIfExists: ['offset'],
            },
            {
              name: 'arrow',
              enabled: !0,
              phase: 'main',
              fn: function (e) {
                var t,
                  r,
                  o = e.state,
                  n = e.name,
                  i = e.options,
                  a = o.elements.arrow,
                  p = o.modifiersData.popperOffsets,
                  s = et(o.placement),
                  l = eo(s),
                  c = [q, V].indexOf(s) >= 0 ? 'height' : 'width';
                if (a && p) {
                  var f = eh(
                      'number' !=
                        typeof (t =
                          'function' == typeof (t = i.padding)
                            ? t(Object.assign({}, o.rects, { placement: o.placement }))
                            : t)
                        ? t
                        : ev(t, z)
                    ),
                    u = B(a),
                    d = 'y' === l ? 'top' : q,
                    m = 'y' === l ? F : V,
                    h = o.rects.reference[c] + o.rects.reference[l] - p[l] - o.rects.popper[c],
                    v = p[l] - o.rects.reference[l],
                    g = N(a),
                    y = g ? ('y' === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                    b = f[d],
                    w = y - u[c] - f[m],
                    x = y / 2 - u[c] / 2 + (h / 2 - v / 2),
                    O = ey(b, x, w);
                  o.modifiersData[n] = (((r = {})[l] = O), (r.centerOffset = O - x), r);
                }
              },
              effect: function (e) {
                var t = e.state,
                  r = e.options.element,
                  o = void 0 === r ? '[data-popper-arrow]' : r;
                null != o &&
                  ('string' != typeof o || (o = t.elements.popper.querySelector(o))) &&
                  ef(t.elements.popper, o) &&
                  (t.elements.arrow = o);
              },
              requires: ['popperOffsets'],
              requiresIfExists: ['preventOverflow'],
            },
            {
              name: 'hide',
              enabled: !0,
              phase: 'main',
              requiresIfExists: ['preventOverflow'],
              fn: function (e) {
                var t = e.state,
                  r = e.name,
                  o = t.rects.reference,
                  n = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = eg(t, { elementContext: 'reference' }),
                  p = eg(t, { altBoundary: !0 }),
                  s = eb(a, o),
                  l = eb(p, n, i),
                  c = ew(s),
                  f = ew(l);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: l,
                  isReferenceHidden: c,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    'data-popper-reference-hidden': c,
                    'data-popper-escaped': f,
                  }));
              },
            },
          ],
        }),
        eO = r(97469),
        eA = r(7623),
        eR = r(61829),
        eE = r(75989);
      function eT(e) {
        return (0, eE.Ay)('MuiPopper', e);
      }
      (0, eR.A)('MuiPopper', ['root']);
      var ej = r(54568);
      function eP(e) {
        return 'function' == typeof e ? e() : e;
      }
      let eM = (e) => {
          let { classes: t } = e;
          return (0, a.A)({ root: ['root'] }, eT, t);
        },
        ek = {},
        eS = o.forwardRef(function (e, t) {
          let {
              anchorEl: r,
              children: n,
              direction: i,
              disablePortal: a,
              modifiers: p,
              open: s,
              placement: l,
              popperOptions: c,
              popperRef: f,
              slotProps: u = {},
              slots: d = {},
              TransitionProps: m,
              ownerState: h,
              ...v
            } = e,
            b = o.useRef(null),
            w = (0, g.A)(b, t),
            x = o.useRef(null),
            O = (0, g.A)(x, f),
            A = o.useRef(O);
          (0, y.A)(() => {
            A.current = O;
          }, [O]),
            o.useImperativeHandle(f, () => x.current, []);
          let R = (function (e, t) {
              if ('ltr' === t) return e;
              switch (e) {
                case 'bottom-end':
                  return 'bottom-start';
                case 'bottom-start':
                  return 'bottom-end';
                case 'top-end':
                  return 'top-start';
                case 'top-start':
                  return 'top-end';
                default:
                  return e;
              }
            })(l, i),
            [E, T] = o.useState(R),
            [j, P] = o.useState(eP(r));
          o.useEffect(() => {
            x.current && x.current.forceUpdate();
          }),
            o.useEffect(() => {
              r && P(eP(r));
            }, [r]),
            (0, y.A)(() => {
              if (!j || !s) return;
              let e = (e) => {
                  T(e.placement);
                },
                t = [
                  { name: 'preventOverflow', options: { altBoundary: a } },
                  { name: 'flip', options: { altBoundary: a } },
                  {
                    name: 'onUpdate',
                    enabled: !0,
                    phase: 'afterWrite',
                    fn: ({ state: t }) => {
                      e(t);
                    },
                  },
                ];
              null != p && (t = t.concat(p)),
                c && null != c.modifiers && (t = t.concat(c.modifiers));
              let r = ex(j, b.current, { placement: R, ...c, modifiers: t });
              return (
                A.current(r),
                () => {
                  r.destroy(), A.current(null);
                }
              );
            }, [j, a, p, s, c, R]);
          let M = { placement: E };
          null !== m && (M.TransitionProps = m);
          let k = eM(e),
            S = d.root ?? 'div',
            L = (0, eO.A)({
              elementType: S,
              externalSlotProps: u.root,
              externalForwardedProps: v,
              additionalProps: { role: 'tooltip', ref: w },
              ownerState: e,
              className: k.root,
            });
          return (0, ej.jsx)(S, { ...L, children: 'function' == typeof n ? n(M) : n });
        }),
        eL = o.forwardRef(function (e, t) {
          let r;
          let {
              anchorEl: n,
              children: i,
              container: a,
              direction: p = 'ltr',
              disablePortal: s = !1,
              keepMounted: l = !1,
              modifiers: c,
              open: f,
              placement: u = 'bottom',
              popperOptions: d = ek,
              popperRef: m,
              style: h,
              transition: v = !1,
              slotProps: g = {},
              slots: y = {},
              ...w
            } = e,
            [x, O] = o.useState(!0);
          if (!l && !f && (!v || x)) return null;
          if (a) r = a;
          else if (n) {
            let e = eP(n);
            r = e && void 0 !== e.nodeType ? (0, b.A)(e).body : (0, b.A)(null).body;
          }
          let A = !f && l && (!v || x) ? 'none' : void 0,
            R = v
              ? {
                  in: f,
                  onEnter: () => {
                    O(!1);
                  },
                  onExited: () => {
                    O(!0);
                  },
                }
              : void 0;
          return (0, ej.jsx)(eA.A, {
            disablePortal: s,
            container: r,
            children: (0, ej.jsx)(eS, {
              anchorEl: n,
              direction: p,
              disablePortal: s,
              modifiers: c,
              ref: t,
              open: v ? !x : f,
              placement: u,
              popperOptions: d,
              popperRef: m,
              slotProps: g,
              slots: y,
              ...w,
              style: { position: 'fixed', top: 0, left: 0, display: A, ...h },
              TransitionProps: R,
              children: i,
            }),
          });
        }),
        eW = (0, f.Ay)(eL, {
          name: 'MuiPopper',
          slot: 'Root',
          overridesResolver: (e, t) => t.root,
        })({}),
        eD = o.forwardRef(function (e, t) {
          let r = (0, s.I)(),
            {
              anchorEl: o,
              component: n,
              components: i,
              componentsProps: a,
              container: p,
              disablePortal: l,
              keepMounted: c,
              modifiers: f,
              open: u,
              placement: d,
              popperOptions: h,
              popperRef: v,
              transition: g,
              slots: y,
              slotProps: b,
              ...w
            } = (0, m.b)({ props: e, name: 'MuiPopper' }),
            x = y?.root ?? i?.Root,
            O = {
              anchorEl: o,
              container: p,
              disablePortal: l,
              keepMounted: c,
              modifiers: f,
              open: u,
              placement: d,
              popperOptions: h,
              popperRef: v,
              transition: g,
              ...w,
            };
          return (0, ej.jsx)(eW, {
            as: n,
            direction: r ? 'rtl' : 'ltr',
            slots: { root: x },
            slotProps: b ?? a,
            ...O,
            ref: t,
          });
        });
      var e$ = r(59926),
        eB = r(39600),
        eC = r(62062),
        eH = r(35861),
        eI = r(3723);
      function eN(e) {
        return (0, eE.Ay)('MuiTooltip', e);
      }
      let eF = (0, eR.A)('MuiTooltip', [
          'popper',
          'popperInteractive',
          'popperArrow',
          'popperClose',
          'tooltip',
          'tooltipArrow',
          'touch',
          'tooltipPlacementLeft',
          'tooltipPlacementRight',
          'tooltipPlacementTop',
          'tooltipPlacementBottom',
          'arrow',
        ]),
        eV = (e) => {
          let { classes: t, disableInteractive: r, arrow: o, touch: n, placement: i } = e,
            p = {
              popper: ['popper', !r && 'popperInteractive', o && 'popperArrow'],
              tooltip: [
                'tooltip',
                o && 'tooltipArrow',
                n && 'touch',
                `tooltipPlacement${(0, h.A)(i.split('-')[0])}`,
              ],
              arrow: ['arrow'],
            };
          return (0, a.A)(p, eN, t);
        },
        eq = (0, f.Ay)(eD, {
          name: 'MuiTooltip',
          slot: 'Popper',
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.popper,
              !r.disableInteractive && t.popperInteractive,
              r.arrow && t.popperArrow,
              !r.open && t.popperClose,
            ];
          },
        })(
          (0, d.A)(({ theme: e }) => ({
            zIndex: (e.vars || e).zIndex.tooltip,
            pointerEvents: 'none',
            variants: [
              {
                props: ({ ownerState: e }) => !e.disableInteractive,
                style: { pointerEvents: 'auto' },
              },
              { props: ({ open: e }) => !e, style: { pointerEvents: 'none' } },
              {
                props: ({ ownerState: e }) => e.arrow,
                style: {
                  [`&[data-popper-placement*="bottom"] .${eF.arrow}`]: {
                    top: 0,
                    marginTop: '-0.71em',
                    '&::before': { transformOrigin: '0 100%' },
                  },
                  [`&[data-popper-placement*="top"] .${eF.arrow}`]: {
                    bottom: 0,
                    marginBottom: '-0.71em',
                    '&::before': { transformOrigin: '100% 0' },
                  },
                  [`&[data-popper-placement*="right"] .${eF.arrow}`]: {
                    height: '1em',
                    width: '0.71em',
                    '&::before': { transformOrigin: '100% 100%' },
                  },
                  [`&[data-popper-placement*="left"] .${eF.arrow}`]: {
                    height: '1em',
                    width: '0.71em',
                    '&::before': { transformOrigin: '0 0' },
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !e.isRtl,
                style: {
                  [`&[data-popper-placement*="right"] .${eF.arrow}`]: {
                    left: 0,
                    marginLeft: '-0.71em',
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !!e.isRtl,
                style: {
                  [`&[data-popper-placement*="right"] .${eF.arrow}`]: {
                    right: 0,
                    marginRight: '-0.71em',
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !e.isRtl,
                style: {
                  [`&[data-popper-placement*="left"] .${eF.arrow}`]: {
                    right: 0,
                    marginRight: '-0.71em',
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !!e.isRtl,
                style: {
                  [`&[data-popper-placement*="left"] .${eF.arrow}`]: {
                    left: 0,
                    marginLeft: '-0.71em',
                  },
                },
              },
            ],
          }))
        ),
        eU = (0, f.Ay)('div', {
          name: 'MuiTooltip',
          slot: 'Tooltip',
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.tooltip,
              r.touch && t.touch,
              r.arrow && t.tooltipArrow,
              t[`tooltipPlacement${(0, h.A)(r.placement.split('-')[0])}`],
            ];
          },
        })(
          (0, d.A)(({ theme: e }) => ({
            backgroundColor: e.vars
              ? e.vars.palette.Tooltip.bg
              : (0, p.X4)(e.palette.grey[700], 0.92),
            borderRadius: (e.vars || e).shape.borderRadius,
            color: (e.vars || e).palette.common.white,
            fontFamily: e.typography.fontFamily,
            padding: '4px 8px',
            fontSize: e.typography.pxToRem(11),
            maxWidth: 300,
            margin: 2,
            wordWrap: 'break-word',
            fontWeight: e.typography.fontWeightMedium,
            [`.${eF.popper}[data-popper-placement*="left"] &`]: { transformOrigin: 'right center' },
            [`.${eF.popper}[data-popper-placement*="right"] &`]: { transformOrigin: 'left center' },
            [`.${eF.popper}[data-popper-placement*="top"] &`]: {
              transformOrigin: 'center bottom',
              marginBottom: '14px',
            },
            [`.${eF.popper}[data-popper-placement*="bottom"] &`]: {
              transformOrigin: 'center top',
              marginTop: '14px',
            },
            variants: [
              { props: ({ ownerState: e }) => e.arrow, style: { position: 'relative', margin: 0 } },
              {
                props: ({ ownerState: e }) => e.touch,
                style: {
                  padding: '8px 16px',
                  fontSize: e.typography.pxToRem(14),
                  lineHeight: `${Math.round((16 / 14) * 1e5) / 1e5}em`,
                  fontWeight: e.typography.fontWeightRegular,
                },
              },
              {
                props: ({ ownerState: e }) => !e.isRtl,
                style: {
                  [`.${eF.popper}[data-popper-placement*="left"] &`]: { marginRight: '14px' },
                  [`.${eF.popper}[data-popper-placement*="right"] &`]: { marginLeft: '14px' },
                },
              },
              {
                props: ({ ownerState: e }) => !e.isRtl && e.touch,
                style: {
                  [`.${eF.popper}[data-popper-placement*="left"] &`]: { marginRight: '24px' },
                  [`.${eF.popper}[data-popper-placement*="right"] &`]: { marginLeft: '24px' },
                },
              },
              {
                props: ({ ownerState: e }) => !!e.isRtl,
                style: {
                  [`.${eF.popper}[data-popper-placement*="left"] &`]: { marginLeft: '14px' },
                  [`.${eF.popper}[data-popper-placement*="right"] &`]: { marginRight: '14px' },
                },
              },
              {
                props: ({ ownerState: e }) => !!e.isRtl && e.touch,
                style: {
                  [`.${eF.popper}[data-popper-placement*="left"] &`]: { marginLeft: '24px' },
                  [`.${eF.popper}[data-popper-placement*="right"] &`]: { marginRight: '24px' },
                },
              },
              {
                props: ({ ownerState: e }) => e.touch,
                style: {
                  [`.${eF.popper}[data-popper-placement*="top"] &`]: { marginBottom: '24px' },
                },
              },
              {
                props: ({ ownerState: e }) => e.touch,
                style: {
                  [`.${eF.popper}[data-popper-placement*="bottom"] &`]: { marginTop: '24px' },
                },
              },
            ],
          }))
        ),
        ez = (0, f.Ay)('span', {
          name: 'MuiTooltip',
          slot: 'Arrow',
          overridesResolver: (e, t) => t.arrow,
        })(
          (0, d.A)(({ theme: e }) => ({
            overflow: 'hidden',
            position: 'absolute',
            width: '1em',
            height: '0.71em',
            boxSizing: 'border-box',
            color: e.vars ? e.vars.palette.Tooltip.bg : (0, p.X4)(e.palette.grey[700], 0.9),
            '&::before': {
              content: '""',
              margin: 'auto',
              display: 'block',
              width: '100%',
              height: '100%',
              backgroundColor: 'currentColor',
              transform: 'rotate(45deg)',
            },
          }))
        ),
        e_ = !1,
        eX = new i.E(),
        eY = { x: 0, y: 0 };
      function eG(e, t) {
        return (r, ...o) => {
          t && t(r, ...o), e(r, ...o);
        };
      }
      let eJ = o.forwardRef(function (e, t) {
        let r = (0, m.b)({ props: e, name: 'MuiTooltip' }),
          {
            arrow: a = !1,
            children: p,
            classes: f,
            components: d = {},
            componentsProps: h = {},
            describeChild: g = !1,
            disableFocusListener: y = !1,
            disableHoverListener: b = !1,
            disableInteractive: w = !1,
            disableTouchListener: x = !1,
            enterDelay: O = 100,
            enterNextDelay: A = 0,
            enterTouchDelay: R = 700,
            followCursor: E = !1,
            id: T,
            leaveDelay: j = 0,
            leaveTouchDelay: P = 1500,
            onClose: M,
            onOpen: k,
            open: S,
            placement: L = 'bottom',
            PopperComponent: W,
            PopperProps: D = {},
            slotProps: $ = {},
            slots: B = {},
            title: C,
            TransitionComponent: H,
            TransitionProps: I,
            ...N
          } = r,
          F = o.isValidElement(p) ? p : (0, ej.jsx)('span', { children: p }),
          V = (0, u.A)(),
          q = (0, s.I)(),
          [U, z] = o.useState(),
          [_, X] = o.useState(null),
          Y = o.useRef(!1),
          G = w || E,
          J = (0, i.A)(),
          K = (0, i.A)(),
          Q = (0, i.A)(),
          Z = (0, i.A)(),
          [ee, et] = (0, eH.A)({ controlled: S, default: !1, name: 'Tooltip', state: 'open' }),
          er = ee,
          eo = (0, eC.A)(T),
          en = o.useRef(),
          ei = (0, e$.A)(() => {
            void 0 !== en.current &&
              ((document.body.style.WebkitUserSelect = en.current), (en.current = void 0)),
              Z.clear();
          });
        o.useEffect(() => ei, [ei]);
        let ea = (e) => {
            eX.clear(), (e_ = !0), et(!0), k && !er && k(e);
          },
          ep = (0, e$.A)((e) => {
            eX.start(800 + j, () => {
              e_ = !1;
            }),
              et(!1),
              M && er && M(e),
              J.start(V.transitions.duration.shortest, () => {
                Y.current = !1;
              });
          }),
          es = (e) => {
            (!Y.current || 'touchstart' === e.type) &&
              (U && U.removeAttribute('title'),
              K.clear(),
              Q.clear(),
              O || (e_ && A)
                ? K.start(e_ ? A : O, () => {
                    ea(e);
                  })
                : ea(e));
          },
          el = (e) => {
            K.clear(),
              Q.start(j, () => {
                ep(e);
              });
          },
          [, ec] = o.useState(!1),
          ef = (e) => {
            (0, l.A)(e.target) || (ec(!1), el(e));
          },
          eu = (e) => {
            U || z(e.currentTarget), (0, l.A)(e.target) && (ec(!0), es(e));
          },
          ed = (e) => {
            Y.current = !0;
            let t = F.props;
            t.onTouchStart && t.onTouchStart(e);
          };
        o.useEffect(() => {
          if (er)
            return (
              document.addEventListener('keydown', e),
              () => {
                document.removeEventListener('keydown', e);
              }
            );
          function e(e) {
            'Escape' === e.key && ep(e);
          }
        }, [ep, er]);
        let em = (0, eB.A)((0, c.A)(F), z, t);
        C || 0 === C || (er = !1);
        let eh = o.useRef(),
          ev = {},
          eg = 'string' == typeof C;
        g
          ? ((ev.title = er || !eg || b ? null : C), (ev['aria-describedby'] = er ? eo : null))
          : ((ev['aria-label'] = eg ? C : null), (ev['aria-labelledby'] = er && !eg ? eo : null));
        let ey = {
            ...ev,
            ...N,
            ...F.props,
            className: (0, n.A)(N.className, F.props.className),
            onTouchStart: ed,
            ref: em,
            ...(E
              ? {
                  onMouseMove: (e) => {
                    let t = F.props;
                    t.onMouseMove && t.onMouseMove(e),
                      (eY = { x: e.clientX, y: e.clientY }),
                      eh.current && eh.current.update();
                  },
                }
              : {}),
          },
          eb = {};
        x ||
          ((ey.onTouchStart = (e) => {
            ed(e),
              Q.clear(),
              J.clear(),
              ei(),
              (en.current = document.body.style.WebkitUserSelect),
              (document.body.style.WebkitUserSelect = 'none'),
              Z.start(R, () => {
                (document.body.style.WebkitUserSelect = en.current), es(e);
              });
          }),
          (ey.onTouchEnd = (e) => {
            F.props.onTouchEnd && F.props.onTouchEnd(e),
              ei(),
              Q.start(P, () => {
                ep(e);
              });
          })),
          b ||
            ((ey.onMouseOver = eG(es, ey.onMouseOver)),
            (ey.onMouseLeave = eG(el, ey.onMouseLeave)),
            G || ((eb.onMouseOver = es), (eb.onMouseLeave = el))),
          y ||
            ((ey.onFocus = eG(eu, ey.onFocus)),
            (ey.onBlur = eG(ef, ey.onBlur)),
            G || ((eb.onFocus = eu), (eb.onBlur = ef)));
        let ew = {
            ...r,
            isRtl: q,
            arrow: a,
            disableInteractive: G,
            placement: L,
            PopperComponentProp: W,
            touch: Y.current,
          },
          ex = 'function' == typeof $.popper ? $.popper(ew) : $.popper,
          eO = o.useMemo(() => {
            let e = [{ name: 'arrow', enabled: !!_, options: { element: _, padding: 4 } }];
            return (
              D.popperOptions?.modifiers && (e = e.concat(D.popperOptions.modifiers)),
              ex?.popperOptions?.modifiers && (e = e.concat(ex.popperOptions.modifiers)),
              { ...D.popperOptions, ...ex?.popperOptions, modifiers: e }
            );
          }, [_, D.popperOptions, ex?.popperOptions]),
          eA = eV(ew),
          eR = 'function' == typeof $.transition ? $.transition(ew) : $.transition,
          eE = {
            slots: {
              popper: d.Popper,
              transition: d.Transition ?? H,
              tooltip: d.Tooltip,
              arrow: d.Arrow,
              ...B,
            },
            slotProps: {
              arrow: $.arrow ?? h.arrow,
              popper: { ...D, ...(ex ?? h.popper) },
              tooltip: $.tooltip ?? h.tooltip,
              transition: { ...I, ...(eR ?? h.transition) },
            },
          },
          [eT, eP] = (0, eI.A)('popper', {
            elementType: eq,
            externalForwardedProps: eE,
            ownerState: ew,
            className: (0, n.A)(eA.popper, D?.className),
          }),
          [eM, ek] = (0, eI.A)('transition', {
            elementType: v.A,
            externalForwardedProps: eE,
            ownerState: ew,
          }),
          [eS, eL] = (0, eI.A)('tooltip', {
            elementType: eU,
            className: eA.tooltip,
            externalForwardedProps: eE,
            ownerState: ew,
          }),
          [eW, eN] = (0, eI.A)('arrow', {
            elementType: ez,
            className: eA.arrow,
            externalForwardedProps: eE,
            ownerState: ew,
            ref: X,
          });
        return (0, ej.jsxs)(o.Fragment, {
          children: [
            o.cloneElement(F, ey),
            (0, ej.jsx)(eT, {
              as: W ?? eD,
              placement: L,
              anchorEl: E
                ? {
                    getBoundingClientRect: () => ({
                      top: eY.y,
                      left: eY.x,
                      right: eY.x,
                      bottom: eY.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : U,
              popperRef: eh,
              open: !!U && er,
              id: eo,
              transition: !0,
              ...eb,
              ...eP,
              popperOptions: eO,
              children: ({ TransitionProps: e }) =>
                (0, ej.jsx)(eM, {
                  timeout: V.transitions.duration.shorter,
                  ...e,
                  ...ek,
                  children: (0, ej.jsxs)(eS, {
                    ...eL,
                    children: [C, a ? (0, ej.jsx)(eW, { ...eN }) : null],
                  }),
                }),
            }),
          ],
        });
      });
    },
    97469: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => p });
      var o = r(5511),
        n = r(85249),
        i = r(79036),
        a = r(68229);
      let p = function (e) {
        let {
            elementType: t,
            externalSlotProps: r,
            ownerState: p,
            skipResolvingSlotProps: s = !1,
            ...l
          } = e,
          c = s ? {} : (0, a.A)(r, p),
          { props: f, internalRef: u } = (0, i.A)({ ...l, externalSlotProps: c }),
          d = (0, o.A)(u, c?.ref, e.additionalProps?.ref);
        return (0, n.A)(t, { ...f, ref: d }, p);
      };
    },
  },
]);
