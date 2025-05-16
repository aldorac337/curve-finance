(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7442],
  {
    1906: (t, e, i) => {
      'use strict';
      let r;
      i.d(e, { H: () => a });
      var n = i(98959);
      let s = { ATTRIBUTE: 1 };
      class o {
        constructor(t) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t, e, i) {
          (this._$Ct = t), (this._$AM = e), (this._$Ci = i);
        }
        _$AS(t, e) {
          return this.update(t, e);
        }
        update(t, e) {
          return this.render(...e);
        }
      }
      let a =
        ((r = class extends o {
          constructor(t) {
            var e;
            if (
              (super(t),
              t.type !== s.ATTRIBUTE ||
                'class' !== t.name ||
                (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2)
            )
              throw Error(
                '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
              );
          }
          render(t) {
            return (
              ' ' +
              Object.keys(t)
                .filter((e) => t[e])
                .join(' ') +
              ' '
            );
          }
          update(t, [e]) {
            var i, r;
            if (void 0 === this.it) {
              for (let r in ((this.it = new Set()),
              void 0 !== t.strings &&
                (this.nt = new Set(
                  t.strings
                    .join(' ')
                    .split(/\s/)
                    .filter((t) => '' !== t)
                )),
              e))
                !e[r] ||
                  (null === (i = this.nt) || void 0 === i ? void 0 : i.has(r)) ||
                  this.it.add(r);
              return this.render(e);
            }
            let s = t.element.classList;
            for (let t in (this.it.forEach((t) => {
              t in e || (s.remove(t), this.it.delete(t));
            }),
            e)) {
              let i = !!e[t];
              i === this.it.has(t) ||
                (null === (r = this.nt) || void 0 === r ? void 0 : r.has(t)) ||
                (i ? (s.add(t), this.it.add(t)) : (s.remove(t), this.it.delete(t)));
            }
            return n.c0;
          }
        }),
        (...t) => ({ _$litDirective$: r, values: t }));
    },
    2004: (t, e, i) => {
      let r = i(88448).getSymbolSize;
      e.getPositions = function (t) {
        let e = r(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    9775: (t, e) => {
      let i = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        let t = 1;
        for (let e = 0; e < 255; e++) (i[e] = t), (r[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (let t = 255; t < 512; t++) i[t] = i[t - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw Error('log(' + t + ')');
          return r[t];
        }),
        (e.exp = function (t) {
          return i[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : i[r[t] + r[e]];
        });
    },
    13399: (t, e, i) => {
      'use strict';
      i(81507);
    },
    14629: (t, e, i) => {
      let r = i(40748),
        n = i(28029),
        s = i(22579),
        o = i(38888),
        a = i(25265),
        l = i(22654),
        h = i(88448),
        u = i(95514);
      function d(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function c(t, e, i) {
        let r;
        let n = [];
        for (; null !== (r = t.exec(i)); )
          n.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return n;
      }
      function f(t) {
        let e, i;
        let n = c(l.NUMERIC, r.NUMERIC, t),
          s = c(l.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return (
          h.isKanjiModeEnabled()
            ? ((e = c(l.BYTE, r.BYTE, t)), (i = c(l.KANJI, r.KANJI, t)))
            : ((e = c(l.BYTE_KANJI, r.BYTE, t)), (i = [])),
          n
            .concat(s, e, i)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function p(t, e) {
        switch (e) {
          case r.NUMERIC:
            return n.getBitsLength(t);
          case r.ALPHANUMERIC:
            return s.getBitsLength(t);
          case r.KANJI:
            return a.getBitsLength(t);
          case r.BYTE:
            return o.getBitsLength(t);
        }
      }
      function g(t, e) {
        let i;
        let l = r.getBestModeForData(t);
        if ((i = r.from(e, l)) !== r.BYTE && i.bit < l.bit)
          throw Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              r.toString(i) +
              '.\n Suggested mode is: ' +
              r.toString(l)
          );
        switch ((i !== r.KANJI || h.isKanjiModeEnabled() || (i = r.BYTE), i)) {
          case r.NUMERIC:
            return new n(t);
          case r.ALPHANUMERIC:
            return new s(t);
          case r.KANJI:
            return new a(t);
          case r.BYTE:
            return new o(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return 'string' == typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t;
        }, []);
      }),
        (e.fromString = function (t, i) {
          let n = (function (t, e) {
              let i = {},
                n = { start: {} },
                s = ['start'];
              for (let o = 0; o < t.length; o++) {
                let a = t[o],
                  l = [];
                for (let t = 0; t < a.length; t++) {
                  let h = a[t],
                    u = '' + o + t;
                  l.push(u), (i[u] = { node: h, lastCount: 0 }), (n[u] = {});
                  for (let t = 0; t < s.length; t++) {
                    let o = s[t];
                    i[o] && i[o].node.mode === h.mode
                      ? ((n[o][u] =
                          p(i[o].lastCount + h.length, h.mode) - p(i[o].lastCount, h.mode)),
                        (i[o].lastCount += h.length))
                      : (i[o] && (i[o].lastCount = h.length),
                        (n[o][u] = p(h.length, h.mode) + 4 + r.getCharCountIndicator(h.mode, e)));
                  }
                }
                s = l;
              }
              for (let t = 0; t < s.length; t++) n[s[t]].end = 0;
              return { map: n, table: i };
            })(
              (function (t) {
                let e = [];
                for (let i = 0; i < t.length; i++) {
                  let n = t[i];
                  switch (n.mode) {
                    case r.NUMERIC:
                      e.push([
                        n,
                        { data: n.data, mode: r.ALPHANUMERIC, length: n.length },
                        { data: n.data, mode: r.BYTE, length: n.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      e.push([n, { data: n.data, mode: r.BYTE, length: n.length }]);
                      break;
                    case r.KANJI:
                      e.push([n, { data: n.data, mode: r.BYTE, length: d(n.data) }]);
                      break;
                    case r.BYTE:
                      e.push([{ data: n.data, mode: r.BYTE, length: d(n.data) }]);
                  }
                }
                return e;
              })(f(t, h.isKanjiModeEnabled())),
              i
            ),
            s = u.find_path(n.map, 'start', 'end'),
            o = [];
          for (let t = 1; t < s.length - 1; t++) o.push(n.table[s[t]].node);
          return e.fromArray(
            o.reduce(function (t, e) {
              let i = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return i && i.mode === e.mode ? (t[t.length - 1].data += e.data) : t.push(e), t;
            }, [])
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(f(t, h.isKanjiModeEnabled()));
        });
    },
    17489: (t, e, i) => {
      'use strict';
      i.d(e, { M: () => s });
      let r = (t, e) =>
          'method' !== e.kind || !e.descriptor || 'value' in e.descriptor
            ? {
                kind: 'field',
                key: Symbol(),
                placement: 'own',
                descriptor: {},
                originalKey: e.key,
                initializer() {
                  'function' == typeof e.initializer && (this[e.key] = e.initializer.call(this));
                },
                finisher(i) {
                  i.createProperty(e.key, t);
                },
              }
            : {
                ...e,
                finisher(i) {
                  i.createProperty(e.key, t);
                },
              },
        n = (t, e, i) => {
          e.constructor.createProperty(i, t);
        };
      function s(t) {
        return (e, i) => (void 0 !== i ? n(t, e, i) : r(t, e));
      }
    },
    22579: (t, e, i) => {
      let r = i(40748),
        n = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          ' ',
          '$',
          '%',
          '*',
          '+',
          '-',
          '.',
          '/',
          ':',
        ];
      function s(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (s.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (s.prototype.getLength = function () {
          return this.data.length;
        }),
        (s.prototype.getBitsLength = function () {
          return s.getBitsLength(this.data.length);
        }),
        (s.prototype.write = function (t) {
          let e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            let i = 45 * n.indexOf(this.data[e]);
            (i += n.indexOf(this.data[e + 1])), t.put(i, 11);
          }
          this.data.length % 2 && t.put(n.indexOf(this.data[e]), 6);
        }),
        (t.exports = s);
    },
    22654: (t, e) => {
      let i = '[0-9]+',
        r =
          '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+',
        n = '(?:(?![A-Z0-9 $%*+\\-./:]|' + (r = r.replace(/u/g, '\\u')) + ')(?:.|[\r\n]))+';
      (e.KANJI = RegExp(r, 'g')),
        (e.BYTE_KANJI = RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')),
        (e.BYTE = RegExp(n, 'g')),
        (e.NUMERIC = RegExp(i, 'g')),
        (e.ALPHANUMERIC = RegExp('[A-Z $%*+\\-./:]+', 'g'));
      let s = RegExp('^' + r + '$'),
        o = RegExp('^' + i + '$'),
        a = RegExp('^[A-Z0-9 $%*+\\-./:]+$');
      (e.testKanji = function (t) {
        return s.test(t);
      }),
        (e.testNumeric = function (t) {
          return o.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    23747: (t, e, i) => {
      'use strict';
      i.d(e, { AH: () => s.AH, JW: () => o.JW, WF: () => a, qy: () => o.qy });
      var r,
        n,
        s = i(84544),
        o = i(98959);
      class a extends s.mN {
        constructor() {
          super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0);
        }
        createRenderRoot() {
          var t, e;
          let i = super.createRenderRoot();
          return (
            (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
              (e.renderBefore = i.firstChild),
            i
          );
        }
        update(t) {
          let e = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
            super.update(t),
            (this._$Do = (0, o.XX)(e, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var t;
          super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
        }
        render() {
          return o.c0;
        }
      }
      (a.finalized = !0),
        (a._$litElement$ = !0),
        null === (r = globalThis.litElementHydrateSupport) ||
          void 0 === r ||
          r.call(globalThis, { LitElement: a });
      let l = globalThis.litElementPolyfillSupport;
      null == l || l({ LitElement: a }),
        (null !== (n = globalThis.litElementVersions) && void 0 !== n
          ? n
          : (globalThis.litElementVersions = [])
        ).push('3.3.3');
    },
    25265: (t, e, i) => {
      let r = i(40748),
        n = i(88448);
      function s(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (s.getBitsLength = function (t) {
        return 13 * t;
      }),
        (s.prototype.getLength = function () {
          return this.data.length;
        }),
        (s.prototype.getBitsLength = function () {
          return s.getBitsLength(this.data.length);
        }),
        (s.prototype.write = function (t) {
          let e;
          for (e = 0; e < this.data.length; e++) {
            let i = n.toSJIS(this.data[e]);
            if (i >= 33088 && i <= 40956) i -= 33088;
            else if (i >= 57408 && i <= 60351) i -= 49472;
            else
              throw Error(
                'Invalid SJIS character: ' + this.data[e] + '\nMake sure your charset is UTF-8'
              );
            (i = ((i >>> 8) & 255) * 192 + (255 & i)), t.put(i, 13);
          }
        }),
        (t.exports = s);
    },
    28029: (t, e, i) => {
      let r = i(40748);
      function n(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (n.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          let e, i, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (r = parseInt(this.data.substr(e, 3), 10)), t.put(r, 10);
          let n = this.data.length - e;
          n > 0 && ((r = parseInt(this.data.substr(e), 10)), t.put(r, 3 * n + 1));
        }),
        (t.exports = n);
    },
    29519: (t, e, i) => {
      let r = i(76780);
      (e.render = function (t, e, i) {
        var n;
        let s = i,
          o = e;
        void 0 !== s || (e && e.getContext) || ((s = e), (e = void 0)),
          e ||
            (o = (function () {
              try {
                return document.createElement('canvas');
              } catch (t) {
                throw Error('You need to specify a canvas element');
              }
            })()),
          (s = r.getOptions(s));
        let a = r.getImageWidth(t.modules.size, s),
          l = o.getContext('2d'),
          h = l.createImageData(a, a);
        return (
          r.qrToImageData(h.data, t, s),
          (n = o),
          l.clearRect(0, 0, n.width, n.height),
          n.style || (n.style = {}),
          (n.height = a),
          (n.width = a),
          (n.style.height = a + 'px'),
          (n.style.width = a + 'px'),
          l.putImageData(h, 0, 0),
          o
        );
      }),
        (e.renderToDataURL = function (t, i, r) {
          let n = r;
          void 0 !== n || (i && i.getContext) || ((n = i), (i = void 0)), n || (n = {});
          let s = e.render(t, i, n),
            o = n.type || 'image/png',
            a = n.rendererOpts || {};
          return s.toDataURL(o, a.quality);
        });
    },
    36782: (t, e, i) => {
      'use strict';
      i.d(e, { E: () => r });
      let r = (t) => (e) =>
        'function' == typeof e
          ? ((t, e) => (customElements.define(t, e), e))(t, e)
          : ((t, e) => {
              let { kind: i, elements: r } = e;
              return {
                kind: i,
                elements: r,
                finisher(e) {
                  customElements.define(t, e);
                },
              };
            })(t, e);
    },
    36796: (t, e, i) => {
      'use strict';
      i.d(e, { i: () => tl });
      let r = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease' },
        n = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 },
        s = () => {},
        o = (t) => t;
      function a(t, e = !0) {
        if (t && 'finished' !== t.playState)
          try {
            t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
          } catch (t) {}
      }
      let l = (t) => t(),
        h = (t, e, i = r.duration) =>
          new Proxy({ animations: t.map(l).filter(Boolean), duration: i, options: e }, d),
        u = (t) => t.animations[0],
        d = {
          get: (t, e) => {
            let i = u(t);
            switch (e) {
              case 'duration':
                return t.duration;
              case 'currentTime':
                return n.s((null == i ? void 0 : i[e]) || 0);
              case 'playbackRate':
              case 'playState':
                return null == i ? void 0 : i[e];
              case 'finished':
                return (
                  t.finished || (t.finished = Promise.all(t.animations.map(c)).catch(s)), t.finished
                );
              case 'stop':
                return () => {
                  t.animations.forEach((t) => a(t));
                };
              case 'forEachNative':
                return (e) => {
                  t.animations.forEach((i) => e(i, t));
                };
              default:
                return void 0 === (null == i ? void 0 : i[e])
                  ? void 0
                  : () => t.animations.forEach((t) => t[e]());
            }
          },
          set: (t, e, i) => {
            switch (e) {
              case 'currentTime':
                i = n.ms(i);
              case 'playbackRate':
                for (let r = 0; r < t.animations.length; r++) t.animations[r][e] = i;
                return !0;
            }
            return !1;
          },
        },
        c = (t) => t.finished,
        f = (t) => 'object' == typeof t && !!t.createAnimation,
        p = (t) => 'number' == typeof t,
        g = (t) => Array.isArray(t) && !p(t[0]),
        m = (t, e, i) => -i * t + i * e + t,
        v = (t, e, i) => (e - t == 0 ? 1 : (i - t) / (e - t));
      function y(t, e) {
        let i = t[t.length - 1];
        for (let r = 1; r <= e; r++) {
          let n = v(0, e, r);
          t.push(m(i, 1, n));
        }
      }
      let A = (t, e, i) => {
          let r = e - t;
          return ((((i - t) % r) + r) % r) + t;
        },
        E = (t, e, i) => Math.min(Math.max(i, t), e),
        $ = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function _(t, e, i, r) {
        if (t === e && i === r) return o;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do (s = $((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : $(n(t), e, r));
      }
      let w =
          (t, e = 'end') =>
          (i) => {
            let r = (i = 'end' === e ? Math.min(i, 0.999) : Math.max(i, 0.001)) * t;
            return E(0, 1, ('end' === e ? Math.floor(r) : Math.ceil(r)) / t);
          },
        b = (t) => 'function' == typeof t,
        C = (t) => Array.isArray(t) && p(t[0]),
        S = {
          ease: _(0.25, 0.1, 0.25, 1),
          'ease-in': _(0.42, 0, 1, 1),
          'ease-in-out': _(0.42, 0, 0.58, 1),
          'ease-out': _(0, 0, 0.58, 1),
        },
        T = /\((.*?)\)/;
      function N(t) {
        if (b(t)) return t;
        if (C(t)) return _(...t);
        let e = S[t];
        if (e) return e;
        if (t.startsWith('steps')) {
          let e = T.exec(t);
          if (e) {
            let t = e[1].split(',');
            return w(parseFloat(t[0]), t[1].trim());
          }
        }
        return o;
      }
      class P {
        constructor(
          t,
          e = [0, 1],
          {
            easing: i,
            duration: n = r.duration,
            delay: s = r.delay,
            endDelay: a = r.endDelay,
            repeat: l = r.repeat,
            offset: h,
            direction: u = 'normal',
            autoplay: d = !0,
          } = {}
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = o),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = 'idle'),
            (this.finished = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            })),
            f((i = i || r.easing)))
          ) {
            let t = i.createAnimation(e);
            (i = t.easing), (e = t.keyframes || e), (n = t.duration || n);
          }
          (this.repeat = l), (this.easing = g(i) ? o : N(i)), this.updateDuration(n);
          let c = (function (
            t,
            e = (function (t) {
              let e = [0];
              return y(e, t - 1), e;
            })(t.length),
            i = o
          ) {
            let r = t.length,
              n = r - e.length;
            return (
              n > 0 && y(e, n),
              (n) => {
                var s;
                let o = 0;
                for (; o < r - 2 && !(n < e[o + 1]); o++);
                let a = E(0, 1, v(e[o], e[o + 1], n));
                return (a = ((s = o), g(i) ? i[A(0, i.length, s)] : i)(a)), m(t[o], t[o + 1], a);
              }
            );
          })(e, h, g(i) ? i.map(N) : o);
          (this.tick = (e) => {
            var i;
            let r = 0;
            (r = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate),
              (this.t = r),
              (r /= 1e3),
              (r = Math.max(r - s, 0)),
              'finished' === this.playState &&
                void 0 === this.pauseTime &&
                (r = this.totalDuration);
            let n = r / this.duration,
              o = Math.floor(n),
              l = n % 1;
            !l && n >= 1 && (l = 1), 1 === l && o--;
            let h = o % 2;
            ('reverse' === u || ('alternate' === u && h) || ('alternate-reverse' === u && !h)) &&
              (l = 1 - l);
            let d = r >= this.totalDuration ? 1 : Math.min(l, 1),
              f = c(this.easing(d));
            t(f),
              void 0 === this.pauseTime &&
              ('finished' === this.playState || r >= this.totalDuration + a)
                ? ((this.playState = 'finished'),
                  null === (i = this.resolve) || void 0 === i || i.call(this, f))
                : 'idle' !== this.playState &&
                  (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            d && this.play();
        }
        play() {
          let t = performance.now();
          (this.playState = 'running'),
            void 0 !== this.pauseTime
              ? (this.startTime = t - this.pauseTime)
              : this.startTime || (this.startTime = t),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = 'paused'), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = 'finished'), this.tick(0);
        }
        stop() {
          var t;
          (this.playState = 'idle'),
            void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId),
            null === (t = this.reject) || void 0 === t || t.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(t) {
          (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(t) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = t)
            : (this.startTime = performance.now() - t / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(t) {
          this.rate = t;
        }
      }
      var M = function () {};
      class x {
        setAnimation(t) {
          (this.animation = t),
            null == t || t.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      let R = new WeakMap();
      function B(t) {
        return R.has(t) || R.set(t, { transforms: [], values: new Map() }), R.get(t);
      }
      let U = ['', 'X', 'Y', 'Z'],
        I = { x: 'translateX', y: 'translateY', z: 'translateZ' },
        k = { syntax: '<angle>', initialValue: '0deg', toDefaultUnit: (t) => t + 'deg' },
        L = {
          translate: {
            syntax: '<length-percentage>',
            initialValue: '0px',
            toDefaultUnit: (t) => t + 'px',
          },
          rotate: k,
          scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: o },
          skew: k,
        },
        H = new Map(),
        O = (t) => `--motion-${t}`,
        D = ['x', 'y', 'z'];
      ['translate', 'scale', 'rotate', 'skew'].forEach((t) => {
        U.forEach((e) => {
          D.push(t + e), H.set(O(t + e), L[t]);
        });
      });
      let z = (t, e) => D.indexOf(t) - D.indexOf(e),
        j = new Set(D),
        F = (t) => j.has(t),
        V = (t, e) => {
          I[e] && (e = I[e]);
          let { transforms: i } = B(t);
          !(function (t, e) {
            -1 === t.indexOf(e) && t.push(e);
          })(i, e),
            (t.style.transform = J(i));
        },
        J = (t) => t.sort(z).reduce(K, '').trim(),
        K = (t, e) => `${t} ${e}(var(${O(e)}))`,
        q = (t) => t.startsWith('--'),
        Y = new Set(),
        W = (t, e) => document.createElement('div').animate(t, e),
        Q = {
          cssRegisterProperty: () =>
            'undefined' != typeof CSS && Object.hasOwnProperty.call(CSS, 'registerProperty'),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
          partialKeyframes: () => {
            try {
              W({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          },
          finished: () => !!W({ opacity: [0, 1] }, { duration: 0.001 }).finished,
          linearEasing: () => {
            try {
              W({ opacity: 0 }, { easing: 'linear(0, 1)' });
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        X = {},
        Z = {};
      for (let t in Q) Z[t] = () => (void 0 === X[t] && (X[t] = Q[t]()), X[t]);
      let G = (t, e) => {
          let i = '',
            r = Math.round(e / 0.015);
          for (let e = 0; e < r; e++) i += t(v(0, r - 1, e)) + ', ';
          return i.substring(0, i.length - 2);
        },
        tt = (t, e) =>
          b(t) ? (Z.linearEasing() ? `linear(${G(t, e)})` : r.easing) : C(t) ? te(t) : t,
        te = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        ti = (t) => (Array.isArray(t) ? t : [t]);
      function tr(t) {
        return I[t] && (t = I[t]), F(t) ? O(t) : t;
      }
      let tn = {
          get: (t, e) => {
            let i = q((e = tr(e))) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
            if (!i && 0 !== i) {
              let t = H.get(e);
              t && (i = t.initialValue);
            }
            return i;
          },
          set: (t, e, i) => {
            q((e = tr(e))) ? t.style.setProperty(e, i) : (t.style[e] = i);
          },
        },
        ts = (t) => 'string' == typeof t,
        to = (t, e) => (t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t)),
        ta = function (t, e, i = {}) {
          var l, u, d;
          'string' == typeof (l = t)
            ? (l = document.querySelectorAll(l))
            : l instanceof Element && (l = [l]);
          let c = (t = Array.from(l || [])).length;
          M(!!c, 'No valid element provided.'), M(!!e, 'No keyframes defined.');
          let m = [];
          for (let l = 0; l < c; l++) {
            let h = t[l];
            for (let t in e) {
              let v = to(i, t);
              (u = v.delay), (d = l), (v.delay = b(u) ? u(d, c) : u);
              let y = (function (t, e, i, l = {}, h) {
                var u;
                let d;
                let c = window.__MOTION_DEV_TOOLS_RECORD,
                  m = !1 !== l.record && c,
                  {
                    duration: v = r.duration,
                    delay: y = r.delay,
                    endDelay: A = r.endDelay,
                    repeat: E = r.repeat,
                    easing: $ = r.easing,
                    persist: _ = !1,
                    direction: w,
                    offset: C,
                    allowWebkitAcceleration: S = !1,
                    autoplay: T = !0,
                  } = l,
                  N = B(t),
                  P = F(e),
                  M = Z.waapi();
                P && V(t, e);
                let R = tr(e),
                  U = ((u = N.values).has(R) || u.set(R, new x()), u.get(R)),
                  I = H.get(R);
                return (
                  a(U.animation, !(f($) && U.generator) && !1 !== l.record),
                  () => {
                    let r = () => {
                        var e, i;
                        return null !==
                          (i =
                            null !== (e = tn.get(t, R)) && void 0 !== e
                              ? e
                              : null == I
                                ? void 0
                                : I.initialValue) && void 0 !== i
                          ? i
                          : 0;
                      },
                      a = (function (t, e) {
                        for (let i = 0; i < t.length; i++)
                          null === t[i] && (t[i] = i ? t[i - 1] : e());
                        return t;
                      })(ti(i), r),
                      u = (function (t, e) {
                        var i;
                        let r = (null == e ? void 0 : e.toDefaultUnit) || o,
                          n = t[t.length - 1];
                        if (ts(n)) {
                          let t =
                            (null === (i = n.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === i
                              ? void 0
                              : i[2]) || '';
                          t && (r = (e) => e + t);
                        }
                        return r;
                      })(a, I);
                    if (f($)) {
                      let t = $.createAnimation(a, 'opacity' !== e, r, R, U);
                      ($ = t.easing), (a = t.keyframes || a), (v = t.duration || v);
                    }
                    if (
                      (q(R) &&
                        (Z.cssRegisterProperty()
                          ? (function (t) {
                              if (!Y.has(t)) {
                                Y.add(t);
                                try {
                                  let { syntax: e, initialValue: i } = H.has(t) ? H.get(t) : {};
                                  CSS.registerProperty({
                                    name: t,
                                    inherits: !1,
                                    syntax: e,
                                    initialValue: i,
                                  });
                                } catch (t) {}
                              }
                            })(R)
                          : (M = !1)),
                      P && !Z.linearEasing() && (b($) || (g($) && $.some(b))) && (M = !1),
                      M)
                    ) {
                      I && (a = a.map((t) => (p(t) ? I.toDefaultUnit(t) : t))),
                        1 === a.length && (!Z.partialKeyframes() || m) && a.unshift(r());
                      let e = {
                        delay: n.ms(y),
                        duration: n.ms(v),
                        endDelay: n.ms(A),
                        easing: g($) ? void 0 : tt($, v),
                        direction: w,
                        iterations: E + 1,
                        fill: 'both',
                      };
                      (d = t.animate(
                        { [R]: a, offset: C, easing: g($) ? $.map((t) => tt(t, v)) : void 0 },
                        e
                      )).finished ||
                        (d.finished = new Promise((t, e) => {
                          (d.onfinish = t), (d.oncancel = e);
                        }));
                      let i = a[a.length - 1];
                      d.finished
                        .then(() => {
                          _ || (tn.set(t, R, i), d.cancel());
                        })
                        .catch(s),
                        S || (d.playbackRate = 1.000001);
                    } else if (h && P)
                      1 === (a = a.map((t) => ('string' == typeof t ? parseFloat(t) : t))).length &&
                        a.unshift(parseFloat(r())),
                        (d = new h(
                          (e) => {
                            tn.set(t, R, u ? u(e) : e);
                          },
                          a,
                          Object.assign(Object.assign({}, l), { duration: v, easing: $ })
                        ));
                    else {
                      let e = a[a.length - 1];
                      tn.set(t, R, I && p(e) ? I.toDefaultUnit(e) : e);
                    }
                    return (
                      m &&
                        c(
                          t,
                          e,
                          a,
                          { duration: v, delay: y, easing: $, repeat: E, offset: C },
                          'motion-one'
                        ),
                      U.setAnimation(d),
                      d && !T && d.pause(),
                      d
                    );
                  }
                );
              })(h, t, e[t], v, P);
              m.push(y);
            }
          }
          return h(m, i, i.duration);
        };
      function tl(t, e, i) {
        return (
          b(t)
            ? function (t, e = {}) {
                return h(
                  [
                    () => {
                      let i = new P(t, [0, 1], e);
                      return i.finished.catch(() => {}), i;
                    },
                  ],
                  e,
                  e.duration
                );
              }
            : ta
        )(t, e, i);
      }
    },
    38888: (t, e, i) => {
      let r = i(63983),
        n = i(40748);
      function s(t) {
        (this.mode = n.BYTE), 'string' == typeof t && (t = r(t)), (this.data = new Uint8Array(t));
      }
      (s.getBitsLength = function (t) {
        return 8 * t;
      }),
        (s.prototype.getLength = function () {
          return this.data.length;
        }),
        (s.prototype.getBitsLength = function () {
          return s.getBitsLength(this.data.length);
        }),
        (s.prototype.write = function (t) {
          for (let e = 0, i = this.data.length; e < i; e++) t.put(this.data[e], 8);
        }),
        (t.exports = s);
    },
    40748: (t, e, i) => {
      let r = i(71984),
        n = i(22654);
      (e.NUMERIC = { id: 'Numeric', bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: 'Alphanumeric', bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: 'Byte', bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: 'Kanji', bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw Error('Invalid mode: ' + t);
          if (!r.isValid(e)) throw Error('Invalid version: ' + e);
          return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return n.testNumeric(t)
            ? e.NUMERIC
            : n.testAlphanumeric(t)
              ? e.ALPHANUMERIC
              : n.testKanji(t)
                ? e.KANJI
                : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw Error('Invalid mode');
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, i) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ('string' != typeof t) throw Error('Param is not a string');
              switch (t.toLowerCase()) {
                case 'numeric':
                  return e.NUMERIC;
                case 'alphanumeric':
                  return e.ALPHANUMERIC;
                case 'kanji':
                  return e.KANJI;
                case 'byte':
                  return e.BYTE;
                default:
                  throw Error('Unknown mode: ' + t);
              }
            })(t);
          } catch (t) {
            return i;
          }
        });
    },
    49671: (t, e, i) => {
      let r = i(88448),
        n = r.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        let i = (t.bit << 3) | e,
          s = i << 10;
        for (; r.getBCHDigit(s) - n >= 0; ) s ^= 1335 << (r.getBCHDigit(s) - n);
        return ((i << 10) | s) ^ 21522;
      };
    },
    50507: (t, e, i) => {
      let r = i(96725),
        n = i(57069),
        s = i(29519),
        o = i(76118);
      function a(t, e, i, s, o) {
        let a = [].slice.call(arguments, 1),
          l = a.length,
          h = 'function' == typeof a[l - 1];
        if (!h && !r()) throw Error('Callback required as last argument');
        if (h) {
          if (l < 2) throw Error('Too few arguments provided');
          2 === l
            ? ((o = i), (i = e), (e = s = void 0))
            : 3 === l &&
              (e.getContext && void 0 === o
                ? ((o = s), (s = void 0))
                : ((o = s), (s = i), (i = e), (e = void 0)));
        } else {
          if (l < 1) throw Error('Too few arguments provided');
          return (
            1 === l
              ? ((i = e), (e = s = void 0))
              : 2 !== l || e.getContext || ((s = i), (i = e), (e = void 0)),
            new Promise(function (r, o) {
              try {
                let o = n.create(i, s);
                r(t(o, e, s));
              } catch (t) {
                o(t);
              }
            })
          );
        }
        try {
          let r = n.create(i, s);
          o(null, t(r, e, s));
        } catch (t) {
          o(t);
        }
      }
      (e.create = n.create),
        (e.toCanvas = a.bind(null, s.render)),
        (e.toDataURL = a.bind(null, s.renderToDataURL)),
        (e.toString = a.bind(null, function (t, e, i) {
          return o.render(t, i);
        }));
    },
    54511: (t, e, i) => {
      let r = i(88448).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        let e = Math.floor(t / 7) + 2,
          i = r(t),
          n = 145 === i ? 26 : 2 * Math.ceil((i - 13) / (2 * e - 2)),
          s = [i - 7];
        for (let t = 1; t < e - 1; t++) s[t] = s[t - 1] - n;
        return s.push(6), s.reverse();
      }),
        (e.getPositions = function (t) {
          let i = [],
            r = e.getRowColCoords(t),
            n = r.length;
          for (let t = 0; t < n; t++)
            for (let e = 0; e < n; e++)
              (0 !== t || 0 !== e) &&
                (0 !== t || e !== n - 1) &&
                (t !== n - 1 || 0 !== e) &&
                i.push([r[t], r[e]]);
          return i;
        });
    },
    57069: (t, e, i) => {
      let r = i(88448),
        n = i(78609),
        s = i(78007),
        o = i(58148),
        a = i(54511),
        l = i(2004),
        h = i(95200),
        u = i(72260),
        d = i(80352),
        c = i(59693),
        f = i(49671),
        p = i(40748),
        g = i(14629);
      function m(t, e, i) {
        let r, n;
        let s = t.size,
          o = f.getEncodedBits(e, i);
        for (r = 0; r < 15; r++)
          (n = ((o >> r) & 1) == 1),
            r < 6
              ? t.set(r, 8, n, !0)
              : r < 8
                ? t.set(r + 1, 8, n, !0)
                : t.set(s - 15 + r, 8, n, !0),
            r < 8
              ? t.set(8, s - r - 1, n, !0)
              : r < 9
                ? t.set(8, 15 - r - 1 + 1, n, !0)
                : t.set(8, 15 - r - 1, n, !0);
        t.set(s - 8, 8, 1, !0);
      }
      e.create = function (t, e) {
        let i, f;
        if (void 0 === t || '' === t) throw Error('No input text');
        let v = n.M;
        return (
          void 0 !== e &&
            ((v = n.from(e.errorCorrectionLevel, n.M)),
            (i = c.from(e.version)),
            (f = h.from(e.maskPattern)),
            e.toSJISFunc && r.setToSJISFunction(e.toSJISFunc)),
          (function (t, e, i, n) {
            let f;
            if (Array.isArray(t)) f = g.fromArray(t);
            else if ('string' == typeof t) {
              let r = e;
              if (!r) {
                let e = g.rawSplit(t);
                r = c.getBestVersionForData(e, i);
              }
              f = g.fromString(t, r || 40);
            } else throw Error('Invalid data');
            let v = c.getBestVersionForData(f, i);
            if (!v) throw Error('The amount of data is too big to be stored in a QR Code');
            if (e) {
              if (e < v)
                throw Error(
                  '\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ' +
                    v +
                    '.\n'
                );
            } else e = v;
            let y = (function (t, e, i) {
                let n = new s();
                i.forEach(function (e) {
                  n.put(e.mode.bit, 4),
                    n.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
                    e.write(n);
                });
                let o = (r.getSymbolTotalCodewords(t) - u.getTotalCodewordsCount(t, e)) * 8;
                for (n.getLengthInBits() + 4 <= o && n.put(0, 4); n.getLengthInBits() % 8 != 0; )
                  n.putBit(0);
                let a = (o - n.getLengthInBits()) / 8;
                for (let t = 0; t < a; t++) n.put(t % 2 ? 17 : 236, 8);
                return (function (t, e, i) {
                  let n, s;
                  let o = r.getSymbolTotalCodewords(e),
                    a = o - u.getTotalCodewordsCount(e, i),
                    l = u.getBlocksCount(e, i),
                    h = o % l,
                    c = l - h,
                    f = Math.floor(o / l),
                    p = Math.floor(a / l),
                    g = p + 1,
                    m = f - p,
                    v = new d(m),
                    y = 0,
                    A = Array(l),
                    E = Array(l),
                    $ = 0,
                    _ = new Uint8Array(t.buffer);
                  for (let t = 0; t < l; t++) {
                    let e = t < c ? p : g;
                    (A[t] = _.slice(y, y + e)),
                      (E[t] = v.encode(A[t])),
                      (y += e),
                      ($ = Math.max($, e));
                  }
                  let w = new Uint8Array(o),
                    b = 0;
                  for (n = 0; n < $; n++)
                    for (s = 0; s < l; s++) n < A[s].length && (w[b++] = A[s][n]);
                  for (n = 0; n < m; n++) for (s = 0; s < l; s++) w[b++] = E[s][n];
                  return w;
                })(n, t, e);
              })(e, i, f),
              A = new o(r.getSymbolSize(e));
            return (
              (function (t, e) {
                let i = t.size,
                  r = l.getPositions(e);
                for (let e = 0; e < r.length; e++) {
                  let n = r[e][0],
                    s = r[e][1];
                  for (let e = -1; e <= 7; e++)
                    if (!(n + e <= -1) && !(i <= n + e))
                      for (let r = -1; r <= 7; r++)
                        s + r <= -1 ||
                          i <= s + r ||
                          ((e >= 0 && e <= 6 && (0 === r || 6 === r)) ||
                          (r >= 0 && r <= 6 && (0 === e || 6 === e)) ||
                          (e >= 2 && e <= 4 && r >= 2 && r <= 4)
                            ? t.set(n + e, s + r, !0, !0)
                            : t.set(n + e, s + r, !1, !0));
                }
              })(A, e),
              (function (t) {
                let e = t.size;
                for (let i = 8; i < e - 8; i++) {
                  let e = i % 2 == 0;
                  t.set(i, 6, e, !0), t.set(6, i, e, !0);
                }
              })(A),
              (function (t, e) {
                let i = a.getPositions(e);
                for (let e = 0; e < i.length; e++) {
                  let r = i[e][0],
                    n = i[e][1];
                  for (let e = -2; e <= 2; e++)
                    for (let i = -2; i <= 2; i++)
                      -2 === e || 2 === e || -2 === i || 2 === i || (0 === e && 0 === i)
                        ? t.set(r + e, n + i, !0, !0)
                        : t.set(r + e, n + i, !1, !0);
                }
              })(A, e),
              m(A, i, 0),
              e >= 7 &&
                (function (t, e) {
                  let i, r, n;
                  let s = t.size,
                    o = c.getEncodedBits(e);
                  for (let e = 0; e < 18; e++)
                    (i = Math.floor(e / 3)),
                      (r = (e % 3) + s - 8 - 3),
                      (n = ((o >> e) & 1) == 1),
                      t.set(i, r, n, !0),
                      t.set(r, i, n, !0);
                })(A, e),
              (function (t, e) {
                let i = t.size,
                  r = -1,
                  n = i - 1,
                  s = 7,
                  o = 0;
                for (let a = i - 1; a > 0; a -= 2)
                  for (6 === a && a--; ; ) {
                    for (let i = 0; i < 2; i++)
                      if (!t.isReserved(n, a - i)) {
                        let r = !1;
                        o < e.length && (r = ((e[o] >>> s) & 1) == 1),
                          t.set(n, a - i, r),
                          -1 == --s && (o++, (s = 7));
                      }
                    if ((n += r) < 0 || i <= n) {
                      (n -= r), (r = -r);
                      break;
                    }
                  }
              })(A, y),
              isNaN(n) && (n = h.getBestMask(A, m.bind(null, A, i))),
              h.applyMask(n, A),
              m(A, i, n),
              { modules: A, version: e, errorCorrectionLevel: i, maskPattern: n, segments: f }
            );
          })(t, i, v, f)
        );
      };
    },
    58148: (t) => {
      function e(t) {
        if (!t || t < 1) throw Error('BitMatrix size must be defined and greater than 0');
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (e.prototype.set = function (t, e, i, r) {
        let n = t * this.size + e;
        (this.data[n] = i), r && (this.reservedBit[n] = !0);
      }),
        (e.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (e.prototype.xor = function (t, e, i) {
          this.data[t * this.size + e] ^= i;
        }),
        (e.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = e);
    },
    59693: (t, e, i) => {
      let r = i(88448),
        n = i(72260),
        s = i(78609),
        o = i(40748),
        a = i(71984),
        l = r.getBCHDigit(7973);
      function h(t, e) {
        return o.getCharCountIndicator(t, e) + 4;
      }
      (e.from = function (t, e) {
        return a.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, i) {
          if (!a.isValid(t)) throw Error('Invalid QR Code version');
          void 0 === i && (i = o.BYTE);
          let s = (r.getSymbolTotalCodewords(t) - n.getTotalCodewordsCount(t, e)) * 8;
          if (i === o.MIXED) return s;
          let l = s - h(i, t);
          switch (i) {
            case o.NUMERIC:
              return Math.floor((l / 10) * 3);
            case o.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case o.KANJI:
              return Math.floor(l / 13);
            case o.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (e.getBestVersionForData = function (t, i) {
          let r;
          let n = s.from(i, s.M);
          if (Array.isArray(t)) {
            if (t.length > 1)
              return (function (t, i) {
                for (let r = 1; r <= 40; r++)
                  if (
                    (function (t, e) {
                      let i = 0;
                      return (
                        t.forEach(function (t) {
                          let r = h(t.mode, e);
                          i += r + t.getBitsLength();
                        }),
                        i
                      );
                    })(t, r) <= e.getCapacity(r, i, o.MIXED)
                  )
                    return r;
              })(t, n);
            if (0 === t.length) return 1;
            r = t[0];
          } else r = t;
          return (function (t, i, r) {
            for (let n = 1; n <= 40; n++) if (i <= e.getCapacity(n, r, t)) return n;
          })(r.mode, r.getLength(), n);
        }),
        (e.getEncodedBits = function (t) {
          if (!a.isValid(t) || t < 7) throw Error('Invalid QR Code version');
          let e = t << 12;
          for (; r.getBCHDigit(e) - l >= 0; ) e ^= 7973 << (r.getBCHDigit(e) - l);
          return (t << 12) | e;
        });
    },
    60361: (t, e, i) => {
      'use strict';
      i.d(e, { w: () => n });
      var r = i(17489);
      function n(t) {
        return (0, r.M)({ ...t, state: !0 });
      }
    },
    63983: (t) => {
      'use strict';
      t.exports = function (t) {
        for (var e = [], i = t.length, r = 0; r < i; r++) {
          var n = t.charCodeAt(r);
          if (n >= 55296 && n <= 56319 && i > r + 1) {
            var s = t.charCodeAt(r + 1);
            s >= 56320 && s <= 57343 && ((n = (n - 55296) * 1024 + s - 56320 + 65536), (r += 1));
          }
          if (n < 128) {
            e.push(n);
            continue;
          }
          if (n < 2048) {
            e.push((n >> 6) | 192), e.push((63 & n) | 128);
            continue;
          }
          if (n < 55296 || (n >= 57344 && n < 65536)) {
            e.push((n >> 12) | 224), e.push(((n >> 6) & 63) | 128), e.push((63 & n) | 128);
            continue;
          }
          if (n >= 65536 && n <= 1114111) {
            e.push((n >> 18) | 240),
              e.push(((n >> 12) & 63) | 128),
              e.push(((n >> 6) & 63) | 128),
              e.push((63 & n) | 128);
            continue;
          }
          e.push(239, 191, 189);
        }
        return new Uint8Array(e).buffer;
      };
    },
    71984: (t, e) => {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    72260: (t, e, i) => {
      let r = i(78609),
        n = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4,
          6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6,
          10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8,
          17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37,
          12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33,
          45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70,
          22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
        ],
        s = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96,
          112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150,
          224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
          144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416,
          600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960,
          312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420,
          784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540,
          980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630,
          1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case r.L:
            return n[(t - 1) * 4 + 0];
          case r.M:
            return n[(t - 1) * 4 + 1];
          case r.Q:
            return n[(t - 1) * 4 + 2];
          case r.H:
            return n[(t - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case r.L:
              return s[(t - 1) * 4 + 0];
            case r.M:
              return s[(t - 1) * 4 + 1];
            case r.Q:
              return s[(t - 1) * 4 + 2];
            case r.H:
              return s[(t - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    76118: (t, e, i) => {
      let r = i(76780);
      function n(t, e) {
        let i = t.a / 255,
          r = e + '="' + t.hex + '"';
        return i < 1 ? r + ' ' + e + '-opacity="' + i.toFixed(2).slice(1) + '"' : r;
      }
      function s(t, e, i) {
        let r = t + e;
        return void 0 !== i && (r += ' ' + i), r;
      }
      e.render = function (t, e, i) {
        let o = r.getOptions(e),
          a = t.modules.size,
          l = t.modules.data,
          h = a + 2 * o.margin,
          u = o.color.light.a
            ? '<path ' + n(o.color.light, 'fill') + ' d="M0 0h' + h + 'v' + h + 'H0z"/>'
            : '',
          d =
            '<path ' +
            n(o.color.dark, 'stroke') +
            ' d="' +
            (function (t, e, i) {
              let r = '',
                n = 0,
                o = !1,
                a = 0;
              for (let l = 0; l < t.length; l++) {
                let h = Math.floor(l % e),
                  u = Math.floor(l / e);
                h || o || (o = !0),
                  t[l]
                    ? (a++,
                      (l > 0 && h > 0 && t[l - 1]) ||
                        ((r += o ? s('M', h + i, 0.5 + u + i) : s('m', n, 0)), (n = 0), (o = !1)),
                      (h + 1 < e && t[l + 1]) || ((r += s('h', a)), (a = 0)))
                    : n++;
              }
              return r;
            })(l, a, o.margin) +
            '"/>',
          c =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : '') +
            ('viewBox="0 0 ' + h + ' ') +
            h +
            '" shape-rendering="crispEdges">' +
            u +
            d +
            '</svg>\n';
        return 'function' == typeof i && i(null, c), c;
      };
    },
    76526: (t, e, i) => {
      'use strict';
      i.d(e, { J: () => n });
      var r = i(98959);
      let n = (t) => (null != t ? t : r.s6);
    },
    76780: (t, e) => {
      function i(t) {
        if (('number' == typeof t && (t = t.toString()), 'string' != typeof t))
          throw Error('Color should be defined as hex string');
        let e = t.slice().replace('#', '').split('');
        if (e.length < 3 || 5 === e.length || e.length > 8) throw Error('Invalid hex color: ' + t);
        (3 === e.length || 4 === e.length) &&
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push('F', 'F');
        let i = parseInt(e.join(''), 16);
        return {
          r: (i >> 24) & 255,
          g: (i >> 16) & 255,
          b: (i >> 8) & 255,
          a: 255 & i,
          hex: '#' + e.slice(0, 6).join(''),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        let e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          n = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : n,
          margin: e,
          color: { dark: i(t.color.dark || '#000000ff'), light: i(t.color.light || '#ffffffff') },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale;
        }),
        (e.getImageWidth = function (t, i) {
          let r = e.getScale(t, i);
          return Math.floor((t + 2 * i.margin) * r);
        }),
        (e.qrToImageData = function (t, i, r) {
          let n = i.modules.size,
            s = i.modules.data,
            o = e.getScale(n, r),
            a = Math.floor((n + 2 * r.margin) * o),
            l = r.margin * o,
            h = [r.color.light, r.color.dark];
          for (let e = 0; e < a; e++)
            for (let i = 0; i < a; i++) {
              let u = (e * a + i) * 4,
                d = r.color.light;
              e >= l &&
                i >= l &&
                e < a - l &&
                i < a - l &&
                (d = h[+!!s[Math.floor((e - l) / o) * n + Math.floor((i - l) / o)]]),
                (t[u++] = d.r),
                (t[u++] = d.g),
                (t[u++] = d.b),
                (t[u] = d.a);
            }
        });
    },
    78007: (t) => {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          let e = Math.floor(t / 8);
          return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1;
        },
        put: function (t, e) {
          for (let i = 0; i < e; i++) this.putBit(((t >>> (e - i - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          let e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    78609: (t, e) => {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, i) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ('string' != typeof t) throw Error('Param is not a string');
              switch (t.toLowerCase()) {
                case 'l':
                case 'low':
                  return e.L;
                case 'm':
                case 'medium':
                  return e.M;
                case 'q':
                case 'quartile':
                  return e.Q;
                case 'h':
                case 'high':
                  return e.H;
                default:
                  throw Error('Unknown EC Level: ' + t);
              }
            })(t);
          } catch (t) {
            return i;
          }
        });
    },
    80352: (t, e, i) => {
      let r = i(90897);
      function n(t) {
        (this.genPoly = void 0), (this.degree = t), this.degree && this.initialize(this.degree);
      }
      (n.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (n.prototype.encode = function (t) {
          if (!this.genPoly) throw Error('Encoder not initialized');
          let e = new Uint8Array(t.length + this.degree);
          e.set(t);
          let i = r.mod(e, this.genPoly),
            n = this.degree - i.length;
          if (n > 0) {
            let t = new Uint8Array(this.degree);
            return t.set(i, n), t;
          }
          return i;
        }),
        (t.exports = n);
    },
    81507: (t, e, i) => {
      'use strict';
      var r;
      null !=
        (null === (r = window.HTMLSlotElement) || void 0 === r
          ? void 0
          : r.prototype.assignedElements) ||
        ((t, e) => t.assignedNodes(e).filter((t) => t.nodeType === Node.ELEMENT_NODE));
    },
    84544: (t, e, i) => {
      'use strict';
      var r;
      i.d(e, { mN: () => $, AH: () => u });
      let n = window,
        s =
          n.ShadowRoot &&
          (void 0 === n.ShadyCSS || n.ShadyCSS.nativeShadow) &&
          'adoptedStyleSheets' in Document.prototype &&
          'replace' in CSSStyleSheet.prototype,
        o = Symbol(),
        a = new WeakMap();
      class l {
        constructor(t, e, i) {
          if (((this._$cssResult$ = !0), i !== o))
            throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
          (this.cssText = t), (this.t = e);
        }
        get styleSheet() {
          let t = this.o,
            e = this.t;
          if (s && void 0 === t) {
            let i = void 0 !== e && 1 === e.length;
            i && (t = a.get(e)),
              void 0 === t &&
                ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && a.set(e, t));
          }
          return t;
        }
        toString() {
          return this.cssText;
        }
      }
      let h = (t) => new l('string' == typeof t ? t : t + '', void 0, o),
        u = (t, ...e) =>
          new l(
            1 === t.length
              ? t[0]
              : e.reduce(
                  (e, i, r) =>
                    e +
                    ((t) => {
                      if (!0 === t._$cssResult$) return t.cssText;
                      if ('number' == typeof t) return t;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          t +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(i) +
                    t[r + 1],
                  t[0]
                ),
            t,
            o
          ),
        d = (t, e) => {
          s
            ? (t.adoptedStyleSheets = e.map((t) => (t instanceof CSSStyleSheet ? t : t.styleSheet)))
            : e.forEach((e) => {
                let i = document.createElement('style'),
                  r = n.litNonce;
                void 0 !== r && i.setAttribute('nonce', r),
                  (i.textContent = e.cssText),
                  t.appendChild(i);
              });
        },
        c = s
          ? (t) => t
          : (t) =>
              t instanceof CSSStyleSheet
                ? ((t) => {
                    let e = '';
                    for (let i of t.cssRules) e += i.cssText;
                    return h(e);
                  })(t)
                : t,
        f = window,
        p = f.trustedTypes,
        g = p ? p.emptyScript : '',
        m = f.reactiveElementPolyfillSupport,
        v = {
          toAttribute(t, e) {
            switch (e) {
              case Boolean:
                t = t ? g : null;
                break;
              case Object:
              case Array:
                t = null == t ? t : JSON.stringify(t);
            }
            return t;
          },
          fromAttribute(t, e) {
            let i = t;
            switch (e) {
              case Boolean:
                i = null !== t;
                break;
              case Number:
                i = null === t ? null : Number(t);
                break;
              case Object:
              case Array:
                try {
                  i = JSON.parse(t);
                } catch (t) {
                  i = null;
                }
            }
            return i;
          },
        },
        y = (t, e) => e !== t && (e == e || t == t),
        A = { attribute: !0, type: String, converter: v, reflect: !1, hasChanged: y },
        E = 'finalized';
      class $ extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this._$Eu();
        }
        static addInitializer(t) {
          var e;
          this.finalize(), (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
        }
        static get observedAttributes() {
          this.finalize();
          let t = [];
          return (
            this.elementProperties.forEach((e, i) => {
              let r = this._$Ep(i, e);
              void 0 !== r && (this._$Ev.set(r, i), t.push(r));
            }),
            t
          );
        }
        static createProperty(t, e = A) {
          if (
            (e.state && (e.attribute = !1),
            this.finalize(),
            this.elementProperties.set(t, e),
            !e.noAccessor && !this.prototype.hasOwnProperty(t))
          ) {
            let i = 'symbol' == typeof t ? Symbol() : '__' + t,
              r = this.getPropertyDescriptor(t, i, e);
            void 0 !== r && Object.defineProperty(this.prototype, t, r);
          }
        }
        static getPropertyDescriptor(t, e, i) {
          return {
            get() {
              return this[e];
            },
            set(r) {
              let n = this[t];
              (this[e] = r), this.requestUpdate(t, n, i);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(t) {
          return this.elementProperties.get(t) || A;
        }
        static finalize() {
          if (this.hasOwnProperty(E)) return !1;
          this[E] = !0;
          let t = Object.getPrototypeOf(this);
          if (
            (t.finalize(),
            void 0 !== t.h && (this.h = [...t.h]),
            (this.elementProperties = new Map(t.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty('properties'))
          ) {
            let t = this.properties;
            for (let e of [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)])
              this.createProperty(e, t[e]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(t) {
          let e = [];
          if (Array.isArray(t)) for (let i of new Set(t.flat(1 / 0).reverse())) e.unshift(c(i));
          else void 0 !== t && e.push(c(t));
          return e;
        }
        static _$Ep(t, e) {
          let i = e.attribute;
          return !1 === i
            ? void 0
            : 'string' == typeof i
              ? i
              : 'string' == typeof t
                ? t.toLowerCase()
                : void 0;
        }
        _$Eu() {
          var t;
          (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (t = this.constructor.h) || void 0 === t || t.forEach((t) => t(this));
        }
        addController(t) {
          var e, i;
          (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (i = t.hostConnected) || void 0 === i || i.call(t));
        }
        removeController(t) {
          var e;
          null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((t, e) => {
            this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
          });
        }
        createRenderRoot() {
          var t;
          let e =
            null !== (t = this.shadowRoot) && void 0 !== t
              ? t
              : this.attachShadow(this.constructor.shadowRootOptions);
          return d(e, this.constructor.elementStyles), e;
        }
        connectedCallback() {
          var t;
          void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t);
              });
        }
        enableUpdating(t) {}
        disconnectedCallback() {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((t) => {
              var e;
              return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t);
            });
        }
        attributeChangedCallback(t, e, i) {
          this._$AK(t, i);
        }
        _$EO(t, e, i = A) {
          var r;
          let n = this.constructor._$Ep(t, i);
          if (void 0 !== n && !0 === i.reflect) {
            let s = (
              void 0 !== (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute)
                ? i.converter
                : v
            ).toAttribute(e, i.type);
            (this._$El = t),
              null == s ? this.removeAttribute(n) : this.setAttribute(n, s),
              (this._$El = null);
          }
        }
        _$AK(t, e) {
          var i;
          let r = this.constructor,
            n = r._$Ev.get(t);
          if (void 0 !== n && this._$El !== n) {
            let t = r.getPropertyOptions(n),
              s =
                'function' == typeof t.converter
                  ? { fromAttribute: t.converter }
                  : void 0 !==
                      (null === (i = t.converter) || void 0 === i ? void 0 : i.fromAttribute)
                    ? t.converter
                    : v;
            (this._$El = n), (this[n] = s.fromAttribute(e, t.type)), (this._$El = null);
          }
        }
        requestUpdate(t, e, i) {
          let r = !0;
          void 0 !== t &&
            (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || y)(this[t], e)
              ? (this._$AL.has(t) || this._$AL.set(t, e),
                !0 === i.reflect &&
                  this._$El !== t &&
                  (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, i)))
              : (r = !1)),
            !this.isUpdatePending && r && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (t) {
            Promise.reject(t);
          }
          let t = this.scheduleUpdate();
          return null != t && (await t), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var t;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei && (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
          let e = !1,
            i = this._$AL;
          try {
            (e = this.shouldUpdate(i))
              ? (this.willUpdate(i),
                null === (t = this._$ES) ||
                  void 0 === t ||
                  t.forEach((t) => {
                    var e;
                    return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t);
                  }),
                this.update(i))
              : this._$Ek();
          } catch (t) {
            throw ((e = !1), this._$Ek(), t);
          }
          e && this._$AE(i);
        }
        willUpdate(t) {}
        _$AE(t) {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((t) => {
              var e;
              return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
            this.updated(t);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(t) {
          return !0;
        }
        update(t) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)), (this._$EC = void 0)),
            this._$Ek();
        }
        updated(t) {}
        firstUpdated(t) {}
      }
      ($[E] = !0),
        ($.elementProperties = new Map()),
        ($.elementStyles = []),
        ($.shadowRootOptions = { mode: 'open' }),
        null == m || m({ ReactiveElement: $ }),
        (null !== (r = f.reactiveElementVersions) && void 0 !== r
          ? r
          : (f.reactiveElementVersions = [])
        ).push('1.6.3');
    },
    88448: (t, e) => {
      let i;
      let r = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901,
        991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611,
        2761, 2876, 3034, 3196, 3362, 3532, 3706,
      ];
      (e.getSymbolSize = function (t) {
        if (!t) throw Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return r[t];
        }),
        (e.getBCHDigit = function (t) {
          let e = 0;
          for (; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ('function' != typeof t) throw Error('"toSJISFunc" is not a valid function.');
          i = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return void 0 !== i;
        }),
        (e.toSJIS = function (t) {
          return i(t);
        });
    },
    90897: (t, e, i) => {
      let r = i(9775);
      (e.mul = function (t, e) {
        let i = new Uint8Array(t.length + e.length - 1);
        for (let n = 0; n < t.length; n++)
          for (let s = 0; s < e.length; s++) i[n + s] ^= r.mul(t[n], e[s]);
        return i;
      }),
        (e.mod = function (t, e) {
          let i = new Uint8Array(t);
          for (; i.length - e.length >= 0; ) {
            let t = i[0];
            for (let n = 0; n < e.length; n++) i[n] ^= r.mul(e[n], t);
            let n = 0;
            for (; n < i.length && 0 === i[n]; ) n++;
            i = i.slice(n);
          }
          return i;
        }),
        (e.generateECPolynomial = function (t) {
          let i = new Uint8Array([1]);
          for (let n = 0; n < t; n++) i = e.mul(i, new Uint8Array([1, r.exp(n)]));
          return i;
        });
    },
    95200: (t, e) => {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let i = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (e.isValid = function (t) {
        return null != t && '' !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          let e = t.size,
            r = 0,
            n = 0,
            s = 0,
            o = null,
            a = null;
          for (let l = 0; l < e; l++) {
            (n = s = 0), (o = a = null);
            for (let h = 0; h < e; h++) {
              let e = t.get(l, h);
              e === o ? n++ : (n >= 5 && (r += i.N1 + (n - 5)), (o = e), (n = 1)),
                (e = t.get(h, l)) === a ? s++ : (s >= 5 && (r += i.N1 + (s - 5)), (a = e), (s = 1));
            }
            n >= 5 && (r += i.N1 + (n - 5)), s >= 5 && (r += i.N1 + (s - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          let e = t.size,
            r = 0;
          for (let i = 0; i < e - 1; i++)
            for (let n = 0; n < e - 1; n++) {
              let e = t.get(i, n) + t.get(i, n + 1) + t.get(i + 1, n) + t.get(i + 1, n + 1);
              (4 === e || 0 === e) && r++;
            }
          return r * i.N2;
        }),
        (e.getPenaltyN3 = function (t) {
          let e = t.size,
            r = 0,
            n = 0,
            s = 0;
          for (let i = 0; i < e; i++) {
            n = s = 0;
            for (let o = 0; o < e; o++)
              (n = ((n << 1) & 2047) | t.get(i, o)),
                o >= 10 && (1488 === n || 93 === n) && r++,
                (s = ((s << 1) & 2047) | t.get(o, i)),
                o >= 10 && (1488 === s || 93 === s) && r++;
          }
          return r * i.N3;
        }),
        (e.getPenaltyN4 = function (t) {
          let e = 0,
            r = t.data.length;
          for (let i = 0; i < r; i++) e += t.data[i];
          return Math.abs(Math.ceil((100 * e) / r / 5) - 10) * i.N4;
        }),
        (e.applyMask = function (t, i) {
          let r = i.size;
          for (let n = 0; n < r; n++)
            for (let s = 0; s < r; s++)
              i.isReserved(s, n) ||
                i.xor(
                  s,
                  n,
                  (function (t, i, r) {
                    switch (t) {
                      case e.Patterns.PATTERN000:
                        return (i + r) % 2 == 0;
                      case e.Patterns.PATTERN001:
                        return i % 2 == 0;
                      case e.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case e.Patterns.PATTERN011:
                        return (i + r) % 3 == 0;
                      case e.Patterns.PATTERN100:
                        return (Math.floor(i / 2) + Math.floor(r / 3)) % 2 == 0;
                      case e.Patterns.PATTERN101:
                        return ((i * r) % 2) + ((i * r) % 3) == 0;
                      case e.Patterns.PATTERN110:
                        return (((i * r) % 2) + ((i * r) % 3)) % 2 == 0;
                      case e.Patterns.PATTERN111:
                        return (((i * r) % 3) + ((i + r) % 2)) % 2 == 0;
                      default:
                        throw Error('bad maskPattern:' + t);
                    }
                  })(t, s, n)
                );
        }),
        (e.getBestMask = function (t, i) {
          let r = Object.keys(e.Patterns).length,
            n = 0,
            s = 1 / 0;
          for (let o = 0; o < r; o++) {
            i(o), e.applyMask(o, t);
            let r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
            e.applyMask(o, t), r < s && ((s = r), (n = o));
          }
          return n;
        });
    },
    95514: (t) => {
      'use strict';
      var e = {
        single_source_shortest_paths: function (t, i, r) {
          var n,
            s,
            o,
            a,
            l,
            h,
            u,
            d = {},
            c = {};
          c[i] = 0;
          var f = e.PriorityQueue.make();
          for (f.push(i, 0); !f.empty(); )
            for (o in ((s = (n = f.pop()).value), (a = n.cost), (l = t[s] || {})))
              l.hasOwnProperty(o) &&
                ((h = a + l[o]),
                (u = c[o]),
                (void 0 === c[o] || u > h) && ((c[o] = h), f.push(o, h), (d[o] = s)));
          if (void 0 !== r && void 0 === c[r])
            throw Error(['Could not find a path from ', i, ' to ', r, '.'].join(''));
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var i = [], r = e; r; ) i.push(r), t[r], (r = t[r]);
          return i.reverse(), i;
        },
        find_path: function (t, i, r) {
          var n = e.single_source_shortest_paths(t, i, r);
          return e.extract_shortest_path_from_predecessor_list(n, r);
        },
        PriorityQueue: {
          make: function (t) {
            var i,
              r = e.PriorityQueue,
              n = {};
            for (i in ((t = t || {}), r)) r.hasOwnProperty(i) && (n[i] = r[i]);
            return (n.queue = []), (n.sorter = t.sorter || r.default_sorter), n;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            this.queue.push({ value: t, cost: e }), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = e;
    },
    96725: (t) => {
      t.exports = function () {
        return 'function' == typeof Promise && Promise.prototype && Promise.prototype.then;
      };
    },
    98959: (t, e, i) => {
      'use strict';
      var r;
      i.d(e, { JW: () => S, XX: () => V, c0: () => T, qy: () => C, s6: () => N });
      let n = window,
        s = n.trustedTypes,
        o = s ? s.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
        a = '$lit$',
        l = `lit$${(Math.random() + '').slice(9)}$`,
        h = '?' + l,
        u = `<${h}>`,
        d = document,
        c = () => d.createComment(''),
        f = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
        p = Array.isArray,
        g = (t) => p(t) || 'function' == typeof (null == t ? void 0 : t[Symbol.iterator]),
        m = '[ 	\n\f\r]',
        v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        y = /-->/g,
        A = />/g,
        E = RegExp(
          `>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          'g'
        ),
        $ = /'/g,
        _ = /"/g,
        w = /^(?:script|style|textarea|title)$/i,
        b =
          (t) =>
          (e, ...i) => ({ _$litType$: t, strings: e, values: i }),
        C = b(1),
        S = b(2),
        T = Symbol.for('lit-noChange'),
        N = Symbol.for('lit-nothing'),
        P = new WeakMap(),
        M = d.createTreeWalker(d, 129, null, !1);
      function x(t, e) {
        if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
          throw Error('invalid template strings array');
        return void 0 !== o ? o.createHTML(e) : e;
      }
      let R = (t, e) => {
        let i = t.length - 1,
          r = [],
          n,
          s = 2 === e ? '<svg>' : '',
          o = v;
        for (let e = 0; e < i; e++) {
          let i = t[e],
            h,
            d,
            c = -1,
            f = 0;
          for (; f < i.length && ((o.lastIndex = f), null !== (d = o.exec(i))); )
            (f = o.lastIndex),
              o === v
                ? '!--' === d[1]
                  ? (o = y)
                  : void 0 !== d[1]
                    ? (o = A)
                    : void 0 !== d[2]
                      ? (w.test(d[2]) && (n = RegExp('</' + d[2], 'g')), (o = E))
                      : void 0 !== d[3] && (o = E)
                : o === E
                  ? '>' === d[0]
                    ? ((o = null != n ? n : v), (c = -1))
                    : void 0 === d[1]
                      ? (c = -2)
                      : ((c = o.lastIndex - d[2].length),
                        (h = d[1]),
                        (o = void 0 === d[3] ? E : '"' === d[3] ? _ : $))
                  : o === _ || o === $
                    ? (o = E)
                    : o === y || o === A
                      ? (o = v)
                      : ((o = E), (n = void 0));
          let p = o === E && t[e + 1].startsWith('/>') ? ' ' : '';
          s +=
            o === v
              ? i + u
              : c >= 0
                ? (r.push(h), i.slice(0, c) + a + i.slice(c) + l + p)
                : i + l + (-2 === c ? (r.push(void 0), e) : p);
        }
        return [x(t, s + (t[i] || '<?>') + (2 === e ? '</svg>' : '')), r];
      };
      class B {
        constructor({ strings: t, _$litType$: e }, i) {
          let r;
          this.parts = [];
          let n = 0,
            o = 0,
            u = t.length - 1,
            d = this.parts,
            [f, p] = R(t, e);
          if (((this.el = B.createElement(f, i)), (M.currentNode = this.el.content), 2 === e)) {
            let t = this.el.content,
              e = t.firstChild;
            e.remove(), t.append(...e.childNodes);
          }
          for (; null !== (r = M.nextNode()) && d.length < u; ) {
            if (1 === r.nodeType) {
              if (r.hasAttributes()) {
                let t = [];
                for (let e of r.getAttributeNames())
                  if (e.endsWith(a) || e.startsWith(l)) {
                    let i = p[o++];
                    if ((t.push(e), void 0 !== i)) {
                      let t = r.getAttribute(i.toLowerCase() + a).split(l),
                        e = /([.?@])?(.*)/.exec(i);
                      d.push({
                        type: 1,
                        index: n,
                        name: e[2],
                        strings: t,
                        ctor: '.' === e[1] ? H : '?' === e[1] ? D : '@' === e[1] ? z : L,
                      });
                    } else d.push({ type: 6, index: n });
                  }
                for (let e of t) r.removeAttribute(e);
              }
              if (w.test(r.tagName)) {
                let t = r.textContent.split(l),
                  e = t.length - 1;
                if (e > 0) {
                  r.textContent = s ? s.emptyScript : '';
                  for (let i = 0; i < e; i++)
                    r.append(t[i], c()), M.nextNode(), d.push({ type: 2, index: ++n });
                  r.append(t[e], c());
                }
              }
            } else if (8 === r.nodeType) {
              if (r.data === h) d.push({ type: 2, index: n });
              else {
                let t = -1;
                for (; -1 !== (t = r.data.indexOf(l, t + 1)); )
                  d.push({ type: 7, index: n }), (t += l.length - 1);
              }
            }
            n++;
          }
        }
        static createElement(t, e) {
          let i = d.createElement('template');
          return (i.innerHTML = t), i;
        }
      }
      function U(t, e, i = t, r) {
        var n, s, o;
        if (e === T) return e;
        let a = void 0 !== r ? (null === (n = i._$Co) || void 0 === n ? void 0 : n[r]) : i._$Cl,
          l = f(e) ? void 0 : e._$litDirective$;
        return (
          (null == a ? void 0 : a.constructor) !== l &&
            (null === (s = null == a ? void 0 : a._$AO) || void 0 === s || s.call(a, !1),
            void 0 === l ? (a = void 0) : (a = new l(t))._$AT(t, i, r),
            void 0 !== r
              ? ((null !== (o = i._$Co) && void 0 !== o ? o : (i._$Co = []))[r] = a)
              : (i._$Cl = a)),
          void 0 !== a && (e = U(t, a._$AS(t, e.values), a, r)),
          e
        );
      }
      class I {
        constructor(t, e) {
          (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t) {
          var e;
          let {
              el: { content: i },
              parts: r,
            } = this._$AD,
            n = (
              null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : d
            ).importNode(i, !0);
          M.currentNode = n;
          let s = M.nextNode(),
            o = 0,
            a = 0,
            l = r[0];
          for (; void 0 !== l; ) {
            if (o === l.index) {
              let e;
              2 === l.type
                ? (e = new k(s, s.nextSibling, this, t))
                : 1 === l.type
                  ? (e = new l.ctor(s, l.name, l.strings, this, t))
                  : 6 === l.type && (e = new j(s, this, t)),
                this._$AV.push(e),
                (l = r[++a]);
            }
            o !== (null == l ? void 0 : l.index) && ((s = M.nextNode()), o++);
          }
          return (M.currentNode = d), n;
        }
        v(t) {
          let e = 0;
          for (let i of this._$AV)
            void 0 !== i &&
              (void 0 !== i.strings
                ? (i._$AI(t, i, e), (e += i.strings.length - 2))
                : i._$AI(t[e])),
              e++;
        }
      }
      class k {
        constructor(t, e, i, r) {
          var n;
          (this.type = 2),
            (this._$AH = N),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = e),
            (this._$AM = i),
            (this.options = r),
            (this._$Cp = null === (n = null == r ? void 0 : r.isConnected) || void 0 === n || n);
        }
        get _$AU() {
          var t, e;
          return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
            void 0 !== e
            ? e
            : this._$Cp;
        }
        get parentNode() {
          let t = this._$AA.parentNode,
            e = this._$AM;
          return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t, e = this) {
          f((t = U(this, t, e)))
            ? t === N || null == t || '' === t
              ? (this._$AH !== N && this._$AR(), (this._$AH = N))
              : t !== this._$AH && t !== T && this._(t)
            : void 0 !== t._$litType$
              ? this.g(t)
              : void 0 !== t.nodeType
                ? this.$(t)
                : g(t)
                  ? this.T(t)
                  : this._(t);
        }
        k(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        $(t) {
          this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
        }
        _(t) {
          this._$AH !== N && f(this._$AH)
            ? (this._$AA.nextSibling.data = t)
            : this.$(d.createTextNode(t)),
            (this._$AH = t);
        }
        g(t) {
          var e;
          let { values: i, _$litType$: r } = t,
            n =
              'number' == typeof r
                ? this._$AC(t)
                : (void 0 === r.el && (r.el = B.createElement(x(r.h, r.h[0]), this.options)), r);
          if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n) this._$AH.v(i);
          else {
            let t = new I(n, this),
              e = t.u(this.options);
            t.v(i), this.$(e), (this._$AH = t);
          }
        }
        _$AC(t) {
          let e = P.get(t.strings);
          return void 0 === e && P.set(t.strings, (e = new B(t))), e;
        }
        T(t) {
          p(this._$AH) || ((this._$AH = []), this._$AR());
          let e = this._$AH,
            i,
            r = 0;
          for (let n of t)
            r === e.length
              ? e.push((i = new k(this.k(c()), this.k(c()), this, this.options)))
              : (i = e[r]),
              i._$AI(n),
              r++;
          r < e.length && (this._$AR(i && i._$AB.nextSibling, r), (e.length = r));
        }
        _$AR(t = this._$AA.nextSibling, e) {
          var i;
          for (
            null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
            t && t !== this._$AB;

          ) {
            let e = t.nextSibling;
            t.remove(), (t = e);
          }
        }
        setConnected(t) {
          var e;
          void 0 === this._$AM &&
            ((this._$Cp = t), null === (e = this._$AP) || void 0 === e || e.call(this, t));
        }
      }
      class L {
        constructor(t, e, i, r, n) {
          (this.type = 1),
            (this._$AH = N),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = e),
            (this._$AM = r),
            (this.options = n),
            i.length > 2 || '' !== i[0] || '' !== i[1]
              ? ((this._$AH = Array(i.length - 1).fill(new String())), (this.strings = i))
              : (this._$AH = N);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t, e = this, i, r) {
          let n = this.strings,
            s = !1;
          if (void 0 === n)
            (s = !f((t = U(this, t, e, 0))) || (t !== this._$AH && t !== T)) && (this._$AH = t);
          else {
            let r, o;
            let a = t;
            for (t = n[0], r = 0; r < n.length - 1; r++)
              (o = U(this, a[i + r], e, r)) === T && (o = this._$AH[r]),
                s || (s = !f(o) || o !== this._$AH[r]),
                o === N ? (t = N) : t !== N && (t += (null != o ? o : '') + n[r + 1]),
                (this._$AH[r] = o);
          }
          s && !r && this.j(t);
        }
        j(t) {
          t === N
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != t ? t : '');
        }
      }
      class H extends L {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(t) {
          this.element[this.name] = t === N ? void 0 : t;
        }
      }
      let O = s ? s.emptyScript : '';
      class D extends L {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(t) {
          t && t !== N
            ? this.element.setAttribute(this.name, O)
            : this.element.removeAttribute(this.name);
        }
      }
      class z extends L {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n), (this.type = 5);
        }
        _$AI(t, e = this) {
          var i;
          if ((t = null !== (i = U(this, t, e, 0)) && void 0 !== i ? i : N) === T) return;
          let r = this._$AH,
            n =
              (t === N && r !== N) ||
              t.capture !== r.capture ||
              t.once !== r.once ||
              t.passive !== r.passive,
            s = t !== N && (r === N || n);
          n && this.element.removeEventListener(this.name, this, r),
            s && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
        }
        handleEvent(t) {
          var e, i;
          'function' == typeof this._$AH
            ? this._$AH.call(
                null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
                  void 0 !== i
                  ? i
                  : this.element,
                t
              )
            : this._$AH.handleEvent(t);
        }
      }
      class j {
        constructor(t, e, i) {
          (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = e),
            (this.options = i);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          U(this, t);
        }
      }
      let F = n.litHtmlPolyfillSupport;
      null == F || F(B, k),
        (null !== (r = n.litHtmlVersions) && void 0 !== r ? r : (n.litHtmlVersions = [])).push(
          '2.8.0'
        );
      let V = (t, e, i) => {
        var r, n;
        let s = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : e,
          o = s._$litPart$;
        if (void 0 === o) {
          let t = null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : null;
          s._$litPart$ = o = new k(e.insertBefore(c(), t), t, void 0, null != i ? i : {});
        }
        return o._$AI(t), o;
      };
    },
  },
]);
