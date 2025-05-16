'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [914],
  {
    60914: (e, t, i) => {
      i.d(t, { EthereumProvider: () => hl, REQUIRED_METHODS: () => l2, default: () => hc });
      var s = i(58621),
        r = i.n(s),
        n = i(19594),
        o = i(95572),
        a = i(37752),
        c = i(58421);
      let l = '2.23.2',
        h = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = '', docsSlug: i }) =>
            t ? `${e ?? 'https://viem.sh'}${t}${i ? `#${i}` : ''}` : void 0,
          version: `viem@${l}`,
        };
      class p extends Error {
        constructor(e, t = {}) {
          let i =
              t.cause instanceof p
                ? t.cause.details
                : t.cause?.message
                  ? t.cause.message
                  : t.details,
            s = (t.cause instanceof p && t.cause.docsPath) || t.docsPath,
            r = h.getDocsUrl?.({ ...t, docsPath: s });
          super(
            [
              e || 'An error occurred.',
              '',
              ...(t.metaMessages ? [...t.metaMessages, ''] : []),
              ...(r ? [`Docs: ${r}`] : []),
              ...(i ? [`Details: ${i}`] : []),
              ...(h.version ? [`Version: ${h.version}`] : []),
            ].join('\n'),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, 'details', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docsPath', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'metaMessages', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'shortMessage', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'version', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'BaseError',
            }),
            (this.details = i),
            (this.docsPath = s),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = l);
        }
        walk(e) {
          return (function e(t, i) {
            return i?.(t)
              ? t
              : t && 'object' == typeof t && 'cause' in t && void 0 !== t.cause
                ? e(t.cause, i)
                : i
                  ? null
                  : t;
          })(this, e);
        }
      }
      function u(e, { strict: t = !0 } = {}) {
        return !!e && 'string' == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith('0x'));
      }
      class d extends p {
        constructor({ size: e, targetSize: t, type: i }) {
          super(
            `${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: 'SizeExceedsPaddingSizeError' }
          );
        }
      }
      function g(e, { dir: t, size: i = 32 } = {}) {
        return 'string' == typeof e
          ? (function (e, { dir: t, size: i = 32 } = {}) {
              if (null === i) return e;
              let s = e.replace('0x', '');
              if (s.length > 2 * i)
                throw new d({ size: Math.ceil(s.length / 2), targetSize: i, type: 'hex' });
              return `0x${s['right' === t ? 'padEnd' : 'padStart'](2 * i, '0')}`;
            })(e, { dir: t, size: i })
          : (function (e, { dir: t, size: i = 32 } = {}) {
              if (null === i) return e;
              if (e.length > i) throw new d({ size: e.length, targetSize: i, type: 'bytes' });
              let s = new Uint8Array(i);
              for (let r = 0; r < i; r++) {
                let n = 'right' === t;
                s[n ? r : i - r - 1] = e[n ? r : e.length - r - 1];
              }
              return s;
            })(e, { dir: t, size: i });
      }
      class f extends p {
        constructor({ max: e, min: t, signed: i, size: s, value: r }) {
          super(
            `Number "${r}" is not in safe ${s ? `${8 * s}-bit ${i ? 'signed' : 'unsigned'} ` : ''}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: 'IntegerOutOfRangeError' }
          );
        }
      }
      class y extends p {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: 'SizeOverflowError',
          });
        }
      }
      function m(e) {
        return u(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function w(e, { size: t }) {
        if (m(e) > t) throw new y({ givenSize: m(e), maxSize: t });
      }
      function b(e, t = {}) {
        let { signed: i } = t;
        t.size && w(e, { size: t.size });
        let s = BigInt(e);
        if (!i) return s;
        let r = (e.length - 2) / 2;
        return s <= (1n << (8n * BigInt(r) - 1n)) - 1n
          ? s
          : s - BigInt(`0x${'f'.padStart(2 * r, 'f')}`) - 1n;
      }
      let v = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function E(e, t = {}) {
        return 'number' == typeof e || 'bigint' == typeof e
          ? P(e, t)
          : 'string' == typeof e
            ? (function (e, t = {}) {
                return I(_.encode(e), t);
              })(e, t)
            : 'boolean' == typeof e
              ? (function (e, t = {}) {
                  let i = `0x${Number(e)}`;
                  return 'number' == typeof t.size
                    ? (w(i, { size: t.size }), g(i, { size: t.size }))
                    : i;
                })(e, t)
              : I(e, t);
      }
      function I(e, t = {}) {
        let i = '';
        for (let t = 0; t < e.length; t++) i += v[e[t]];
        let s = `0x${i}`;
        return 'number' == typeof t.size
          ? (w(s, { size: t.size }), g(s, { dir: 'right', size: t.size }))
          : s;
      }
      function P(e, t = {}) {
        let i;
        let { signed: s, size: r } = t,
          n = BigInt(e);
        r
          ? (i = s ? (1n << (8n * BigInt(r) - 1n)) - 1n : 2n ** (8n * BigInt(r)) - 1n)
          : 'number' == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
        let o = 'bigint' == typeof i && s ? -i - 1n : 0;
        if ((i && n > i) || n < o) {
          let t = 'bigint' == typeof e ? 'n' : '';
          throw new f({
            max: i ? `${i}${t}` : void 0,
            min: `${o}${t}`,
            signed: s,
            size: r,
            value: `${e}${t}`,
          });
        }
        let a = `0x${(s && n < 0 ? (1n << BigInt(8 * r)) + BigInt(n) : n).toString(16)}`;
        return r ? g(a, { size: r }) : a;
      }
      let _ = new TextEncoder(),
        S = new TextEncoder(),
        O = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function x(e) {
        return e >= O.zero && e <= O.nine
          ? e - O.zero
          : e >= O.A && e <= O.F
            ? e - (O.A - 10)
            : e >= O.a && e <= O.f
              ? e - (O.a - 10)
              : void 0;
      }
      function A(e, t = {}) {
        let i = e;
        t.size && (w(i, { size: t.size }), (i = g(i, { dir: 'right', size: t.size })));
        let s = i.slice(2);
        s.length % 2 && (s = `0${s}`);
        let r = s.length / 2,
          n = new Uint8Array(r);
        for (let e = 0, t = 0; e < r; e++) {
          let i = x(s.charCodeAt(t++)),
            r = x(s.charCodeAt(t++));
          if (void 0 === i || void 0 === r)
            throw new p(`Invalid byte sequence ("${s[t - 2]}${s[t - 1]}" in "${s}").`);
          n[e] = 16 * i + r;
        }
        return n;
      }
      function R(e, t = {}) {
        let i = S.encode(e);
        return 'number' == typeof t.size
          ? (w(i, { size: t.size }), g(i, { dir: 'right', size: t.size }))
          : i;
      }
      var C = i(62923);
      function N(e, t) {
        let i = (0, C.lY)(
          u(e, { strict: !1 })
            ? (function (e, t = {}) {
                return 'number' == typeof e || 'bigint' == typeof e
                  ? A(P(e, t))
                  : 'boolean' == typeof e
                    ? (function (e, t = {}) {
                        let i = new Uint8Array(1);
                        return ((i[0] = Number(e)), 'number' == typeof t.size)
                          ? (w(i, { size: t.size }), g(i, { size: t.size }))
                          : i;
                      })(e, t)
                    : u(e)
                      ? A(e, t)
                      : R(e, t);
              })(e)
            : e
        );
        return 'bytes' === (t || 'hex') ? i : E(i);
      }
      class T extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, 'maxSize', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let q = new T(8192);
      async function $({ hash: e, signature: t }) {
        let s = u(e) ? e : E(e),
          { secp256k1: r } = await i.e(6373).then(i.bind(i, 16373)),
          n = (() => {
            if ('object' == typeof t && 'r' in t && 's' in t) {
              let { r: e, s: i, v: s, yParity: n } = t,
                o = j(Number(n ?? s));
              return new r.Signature(b(e), b(i)).addRecoveryBit(o);
            }
            let e = u(t) ? t : E(t),
              i = j(
                (function (e, t = {}) {
                  return Number(b(e, t));
                })(`0x${e.slice(130)}`)
              );
            return r.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(i);
          })()
            .recoverPublicKey(s.substring(2))
            .toHex(!1);
        return `0x${n}`;
      }
      function j(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error('Invalid yParityOrV value');
      }
      async function D({ hash: e, signature: t }) {
        return (function (e) {
          let t = N(`0x${e.substring(4)}`).substring(26);
          return (function (e, t) {
            if (q.has(`${e}.${void 0}`)) return q.get(`${e}.${t}`);
            let i = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
              s = N(R(i), 'bytes'),
              r = (t ? i.substring(`${t}0x`.length) : i).split('');
            for (let e = 0; e < 40; e += 2)
              s[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
                (15 & s[e >> 1]) >= 8 && r[e + 1] && (r[e + 1] = r[e + 1].toUpperCase());
            let n = `0x${r.join('')}`;
            return q.set(`${e}.${t}`, n), n;
          })(`0x${t}`);
        })(await $({ hash: e, signature: t }));
      }
      let k = (function (e) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let i = 0; i < e.length; i++) {
          let s = e.charAt(i),
            r = s.charCodeAt(0);
          if (255 !== t[r]) throw TypeError(s + ' is ambiguous');
          t[r] = i;
        }
        let i = e.length,
          s = e.charAt(0),
          r = Math.log(i) / Math.log(256),
          n = Math.log(256) / Math.log(i);
        function o(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          let n = 0,
            o = 0,
            a = 0;
          for (; e[n] === s; ) o++, n++;
          let c = ((e.length - n) * r + 1) >>> 0,
            l = new Uint8Array(c);
          for (; n < e.length; ) {
            let s = e.charCodeAt(n);
            if (s > 255) return;
            let r = t[s];
            if (255 === r) return;
            let o = 0;
            for (let e = c - 1; (0 !== r || o < a) && -1 !== e; e--, o++)
              (r += (i * l[e]) >>> 0), (l[e] = r % 256 >>> 0), (r = (r / 256) >>> 0);
            if (0 !== r) throw Error('Non-zero carry');
            (a = o), n++;
          }
          let h = c - a;
          for (; h !== c && 0 === l[h]; ) h++;
          let p = new Uint8Array(o + (c - h)),
            u = o;
          for (; h !== c; ) p[u++] = l[h++];
          return p;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            let r = 0,
              o = 0,
              a = 0,
              c = t.length;
            for (; a !== c && 0 === t[a]; ) a++, r++;
            let l = ((c - a) * n + 1) >>> 0,
              h = new Uint8Array(l);
            for (; a !== c; ) {
              let e = t[a],
                s = 0;
              for (let t = l - 1; (0 !== e || s < o) && -1 !== t; t--, s++)
                (e += (256 * h[t]) >>> 0), (h[t] = e % i >>> 0), (e = (e / i) >>> 0);
              if (0 !== e) throw Error('Non-zero carry');
              (o = s), a++;
            }
            let p = l - o;
            for (; p !== l && 0 === h[p]; ) p++;
            let u = s.repeat(r);
            for (; p < l; ++p) u += e.charAt(h[p]);
            return u;
          },
          decodeUnsafe: o,
          decode: function (e) {
            let t = o(e);
            if (t) return t;
            throw Error('Non-base' + i + ' character');
          },
        };
      })('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
      var U = i(78618);
      function M(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function L(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let i = M(t),
          s = 0;
        for (let t of e) i.set(t, s), (s += t.length);
        return i;
      }
      var z = i(2278);
      function B(e, t, i, s) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: s },
        };
      }
      let H = B(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        K = B(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = M((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        V = { utf8: H, 'utf-8': H, hex: z.Fo.base16, latin1: K, ascii: K, binary: K, ...z.Fo };
      function F(e, t = 'utf8') {
        let i = V[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, 'utf8')
          : i.decoder.decode(`${i.prefix}${e}`);
      }
      function G(e, t = 'utf8') {
        let i = V[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : i.encoder.encode(e).substring(1);
      }
      var J = i(90252),
        W = i(40459),
        Q = i(50887).Buffer;
      function Y(e) {
        let [t, i] = e.split(':');
        return { namespace: t, reference: i };
      }
      function Z(e) {
        let [t, i, s] = e.split(':');
        return { namespace: t, reference: i, address: s };
      }
      function X(e, t = []) {
        let i = [];
        return (
          Object.keys(e).forEach((s) => {
            if (t.length && !t.includes(s)) return;
            let r = e[s];
            i.push(...r.accounts);
          }),
          i
        );
      }
      function ee(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      var et = Object.defineProperty,
        ei = Object.defineProperties,
        es = Object.getOwnPropertyDescriptors,
        er = Object.getOwnPropertySymbols,
        en = Object.prototype.hasOwnProperty,
        eo = Object.prototype.propertyIsEnumerable,
        ea = (e, t, i) =>
          t in e
            ? et(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ec = (e, t) => {
          for (var i in t || (t = {})) en.call(t, i) && ea(e, i, t[i]);
          if (er) for (var i of er(t)) eo.call(t, i) && ea(e, i, t[i]);
          return e;
        },
        el = (e, t) => ei(e, es(t));
      let eh = {
        reactNative: 'react-native',
        node: 'node',
        browser: 'browser',
        unknown: 'unknown',
      };
      function ep() {
        return 'u' > typeof W && 'u' > typeof W.versions && 'u' > typeof W.versions.node;
      }
      function eu() {
        return (
          !(0, a.getDocument)() && !!(0, a.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function ed() {
        return !ep() && !!(0, a.getNavigator)() && !!(0, a.getDocument)();
      }
      function eg() {
        return eu() ? eh.reactNative : ep() ? eh.node : ed() ? eh.browser : eh.unknown;
      }
      function ef() {
        var e;
        try {
          return eu() && 'u' > typeof i.g && 'u' > typeof (null == i.g ? void 0 : i.g.Application)
            ? null == (e = i.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function ey() {
        return (0, c.g)() || { name: '', description: '', url: '', icons: [''] };
      }
      function em(e, t, s) {
        let r = (function () {
            if (
              eg() === eh.reactNative &&
              'u' > typeof i.g &&
              'u' > typeof (null == i.g ? void 0 : i.g.Platform)
            ) {
              let { OS: e, Version: t } = i.g.Platform;
              return [e, t].join('-');
            }
            let e = (0, n.o0)();
            if (null === e) return 'unknown';
            let t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown';
            return 'browser' === e.type
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-');
          })(),
          o = (function () {
            var e;
            let t = eg();
            return t === eh.browser
              ? [t, (null == (e = (0, a.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', s].join('-'), r, o].join('/');
      }
      function ew(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function eb(e) {
        return Object.fromEntries(e.entries());
      }
      function ev(e) {
        return new Map(Object.entries(e));
      }
      function eE(e = o.FIVE_MINUTES, t) {
        let i, s, r, n;
        let a = (0, o.toMiliseconds)(e || o.FIVE_MINUTES);
        return {
          resolve: (e) => {
            r && i && (clearTimeout(r), i(e), (n = Promise.resolve(e)));
          },
          reject: (e) => {
            r && s && (clearTimeout(r), s(e));
          },
          done: () =>
            new Promise((e, o) => {
              if (n) return e(n);
              (r = setTimeout(() => {
                let e = Error(t);
                (n = Promise.reject(e)), o(e);
              }, a)),
                (i = e),
                (s = o);
            }),
        };
      }
      function eI(e, t, i) {
        return new Promise(async (s, r) => {
          let n = setTimeout(() => r(Error(i)), t);
          try {
            let t = await e;
            s(t);
          } catch (e) {
            r(e);
          }
          clearTimeout(n);
        });
      }
      function eP(e, t) {
        if ('string' == typeof t && t.startsWith(`${e}:`)) return t;
        if ('topic' === e.toLowerCase()) {
          if ('string' != typeof t)
            throw Error('Value must be "string" for expirer target type: topic');
          return `topic:${t}`;
        }
        if ('id' === e.toLowerCase()) {
          if ('number' != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function e_(e) {
        let [t, i] = e.split(':'),
          s = { id: void 0, topic: void 0 };
        if ('topic' === t && 'string' == typeof i) s.topic = i;
        else if ('id' === t && Number.isInteger(Number(i))) s.id = Number(i);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${i}`);
        return s;
      }
      function eS(e, t) {
        return (0, o.fromMiliseconds)((t || Date.now()) + (0, o.toMiliseconds)(e));
      }
      function eO(e) {
        return Date.now() >= (0, o.toMiliseconds)(e);
      }
      function ex(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function eA(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function eR({ id: e, topic: t, wcDeepLink: s }) {
        var r, n;
        try {
          if (!s) return;
          let o = 'string' == typeof s ? JSON.parse(s) : s,
            c = o?.href;
          if ('string' != typeof c) return;
          let l = (function (e, t, i) {
              let s = `requestId=${t}&sessionTopic=${i}`;
              e.endsWith('/') && (e = e.slice(0, -1));
              let r = `${e}`;
              if (e.startsWith('https://t.me')) {
                let t = e.includes('?') ? '&startapp=' : '?startapp=';
                r = `${r}${t}${(function (e, t = !1) {
                  let i = Q.from(e).toString('base64');
                  return t ? i.replace(/[=]/g, '') : i;
                })(s, !0)}`;
              } else r = `${r}/wc?${s}`;
              return r;
            })(c, e, t),
            h = eg();
          if (h === eh.browser) {
            let e;
            if (!(null != (r = (0, a.getDocument)()) && r.hasFocus())) {
              console.warn('Document does not have focus, skipping deeplink.');
              return;
            }
            (n = l),
              (e = '_self'),
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (('u' > typeof window &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    n.startsWith('https://') ||
                    n.startsWith('http://')) &&
                  (e = '_blank')
                : (e = '_top'),
              window.open(n, e, 'noreferrer noopener');
          } else
            h === eh.reactNative &&
              'u' > typeof (null == i.g ? void 0 : i.g.Linking) &&
              (await i.g.Linking.openURL(l));
        } catch (e) {
          console.error(e);
        }
      }
      async function eC(e, t) {
        let i = '';
        try {
          if (ed() && (i = localStorage.getItem(t))) return i;
          i = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return i;
      }
      function eN(e, t) {
        if (!e.includes(t)) return null;
        let i = e.split(/([&,?,=])/),
          s = i.indexOf(t);
        return i[s + 2];
      }
      function eT() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function eq() {
        return 'u' > typeof W && 'true' === W.env.IS_VITEST;
      }
      function e$(e) {
        return Q.from(e, 'base64').toString('utf-8');
      }
      function ej(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function eD(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function ek(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        ej(e.outputLen), ej(e.blockLen);
      }
      function eU(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function eM(e, t) {
        eD(e);
        let i = t.outputLen;
        if (e.length < i) throw Error('digestInto() expects output buffer of length at least ' + i);
      }
      let eL = BigInt(0x100000000 - 1),
        ez = BigInt(32),
        eB = (e, t, i) => (e << i) | (t >>> (32 - i)),
        eH = (e, t, i) => (t << i) | (e >>> (32 - i)),
        eK = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        eV = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i)),
        eF = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function eG(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function eJ(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let eW = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function eQ(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function eY(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          eD(e),
          e
        );
      }
      class eZ {
        clone() {
          return this._cloneInto();
        }
      }
      function eX(e) {
        let t = (t) => e().update(eY(t)).digest(),
          i = e();
        return (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = () => e()), t;
      }
      function e0(e = 32) {
        if (eF && 'function' == typeof eF.getRandomValues)
          return eF.getRandomValues(new Uint8Array(e));
        if (eF && 'function' == typeof eF.randomBytes) return eF.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let e1 = [],
        e2 = [],
        e8 = [],
        e5 = BigInt(0),
        e3 = BigInt(1),
        e6 = BigInt(2),
        e4 = BigInt(7),
        e9 = BigInt(256),
        e7 = BigInt(113);
      for (let e = 0, t = e3, i = 1, s = 0; e < 24; e++) {
        ([i, s] = [s, (2 * i + 3 * s) % 5]),
          e1.push(2 * (5 * s + i)),
          e2.push((((e + 1) * (e + 2)) / 2) % 64);
        let r = e5;
        for (let e = 0; e < 7; e++)
          (t = ((t << e3) ^ ((t >> e4) * e7)) % e9) & e6 && (r ^= e3 << ((e3 << BigInt(e)) - e3));
        e8.push(r);
      }
      let [te, tt] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            s = new Uint32Array(e.length);
          for (let r = 0; r < e.length; r++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & eL), l: Number((e >> ez) & eL) }
                : { h: 0 | Number((e >> ez) & eL), l: 0 | Number(e & eL) };
            })(e[r], t);
            [i[r], s[r]] = [n, o];
          }
          return [i, s];
        })(e8, !0),
        ti = (e, t, i) => (i > 32 ? eK(e, t, i) : eB(e, t, i)),
        ts = (e, t, i) => (i > 32 ? eV(e, t, i) : eH(e, t, i));
      class tr extends eZ {
        constructor(e, t, i, s = !1, r = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = s),
            (this.rounds = r),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            ej(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          eW || eQ(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let s = 24 - t; s < 24; s++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let s = (t + 8) % 10,
                    r = (t + 2) % 10,
                    n = i[r],
                    o = i[r + 1],
                    a = ti(n, o, 1) ^ i[s],
                    c = ts(n, o, 1) ^ i[s + 1];
                  for (let i = 0; i < 50; i += 10) (e[t + i] ^= a), (e[t + i + 1] ^= c);
                }
                let t = e[2],
                  r = e[3];
                for (let i = 0; i < 24; i++) {
                  let s = e2[i],
                    n = ti(t, r, s),
                    o = ts(t, r, s),
                    a = e1[i];
                  (t = e[a]), (r = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let s = 0; s < 10; s++) i[s] = e[t + s];
                  for (let s = 0; s < 10; s++) e[t + s] ^= ~i[(s + 2) % 10] & i[(s + 4) % 10];
                }
                (e[0] ^= te[s]), (e[1] ^= tt[s]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            eW || eQ(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          eU(this);
          let { blockLen: t, state: i } = this,
            s = (e = eY(e)).length;
          for (let r = 0; r < s; ) {
            let n = Math.min(t - this.pos, s - r);
            for (let t = 0; t < n; t++) i[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: s } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === s - 1 && this.keccak(),
            (e[s - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          eU(this, !1), eD(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let s = 0, r = e.length; s < r; ) {
            this.posOut >= i && this.keccak();
            let n = Math.min(i - this.posOut, r - s);
            e.set(t.subarray(this.posOut, this.posOut + n), s), (this.posOut += n), (s += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return ej(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((eM(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: i, outputLen: s, rounds: r, enableXOF: n } = this;
          return (
            e || (e = new tr(t, i, s, n, r)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = r),
            (e.suffix = i),
            (e.outputLen = s),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let tn = eX(() => new tr(136, 1, 32));
      function to(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return '0x' + Q.from(tn(i)).toString('hex');
      }
      async function ta(e, t, i, s, r, n) {
        switch (i.t) {
          case 'eip191':
            return await tc(e, t, i.s);
          case 'eip1271':
            return await tl(e, t, i.s, s, r, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`
            );
        }
      }
      async function tc(e, t, i) {
        return (await D({ hash: to(t), signature: i })).toLowerCase() === e.toLowerCase();
      }
      async function tl(e, t, i, s, r, n) {
        let o = Y(s);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${s}`
          );
        try {
          let o = '0x1626ba7e',
            a = i.substring(2),
            c = to(t).substring(2),
            l =
              o +
              c +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            h = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${s}&projectId=${r}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: e, data: l }, 'latest'],
                }),
              }
            ),
            { result: p } = await h.json();
          return !!p && p.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var th = Object.defineProperty,
        tp = Object.defineProperties,
        tu = Object.getOwnPropertyDescriptors,
        td = Object.getOwnPropertySymbols,
        tg = Object.prototype.hasOwnProperty,
        tf = Object.prototype.propertyIsEnumerable,
        ty = (e, t, i) =>
          t in e
            ? th(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        tm = (e, t) => {
          for (var i in t || (t = {})) tg.call(t, i) && ty(e, i, t[i]);
          if (td) for (var i of td(t)) tf.call(t, i) && ty(e, i, t[i]);
          return e;
        },
        tw = (e, t) => tp(e, tu(t));
      let tb = (e) => e?.split(':'),
        tv = (e) => {
          let t = e && tb(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        tE = (e) => {
          let t = e && tb(e);
          if (t) return t[2] + ':' + t[3];
        },
        tI = (e) => {
          let t = e && tb(e);
          if (t) return t.pop();
        };
      async function tP(e) {
        let { cacao: t, projectId: i } = e,
          { s: s, p: r } = t,
          n = t_(r, r.iss),
          o = tI(r.iss);
        return await ta(o, n, s, tE(r.iss), i);
      }
      let t_ = (e, t) => {
        let i = `${e.domain} wants you to sign in with your Ethereum account:`,
          s = tI(t);
        if (!e.aud && !e.uri)
          throw Error('Either `aud` or `uri` is required to construct the message');
        let r = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${tv(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          p = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          u = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          d = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join('')}`
            : void 0,
          g = tC(e.resources);
        return (
          g &&
            (r = (function (e = '', t) {
              tS(t);
              let i =
                'I further authorize the stated URI to perform the following actions on my behalf: ';
              if (e.includes(i)) return e;
              let s = [],
                r = 0;
              Object.keys(t.att).forEach((e) => {
                let i = Object.keys(t.att[e]).map((e) => ({
                  ability: e.split('/')[0],
                  action: e.split('/')[1],
                }));
                i.sort((e, t) => e.action.localeCompare(t.action));
                let n = {};
                i.forEach((e) => {
                  n[e.ability] || (n[e.ability] = []), n[e.ability].push(e.action);
                });
                let o = Object.keys(n).map(
                  (t) => (r++, `(${r}) '${t}': '${n[t].join("', '")}' for '${e}'.`)
                );
                s.push(o.join(', ').replace('.,', '.'));
              });
              let n = s.join(' '),
                o = `${i}${n}`;
              return `${e ? e + ' ' : ''}${o}`;
            })(r, tx(g))),
          [i, s, '', r, '', n, o, a, c, l, h, p, u, d].filter((e) => null != e).join(`
`)
        );
      };
      function tS(e) {
        if (!e) throw Error('No recap provided, value is undefined');
        if (!e.att) throw Error('No `att` property found');
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error('No resources found in `att` property');
        t.forEach((t) => {
          let i = e.att[t];
          if (Array.isArray(i) || 'object' != typeof i)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(i).length) throw Error(`Resource object is empty: ${t}`);
          Object.keys(i).forEach((e) => {
            let t = i[e];
            if (!Array.isArray(t))
              throw Error(`Ability limits ${e} must be an array of objects, found: ${t}`);
            if (!t.length)
              throw Error(`Value of ${e} is empty array, must be an array with objects`);
            t.forEach((t) => {
              if ('object' != typeof t)
                throw Error(`Ability limits (${e}) must be an array of objects, found: ${t}`);
            });
          });
        });
      }
      function tO(e) {
        return tS(e), `urn:recap:${Q.from(JSON.stringify(e)).toString('base64').replace(/=/g, '')}`;
      }
      function tx(e) {
        var t;
        let i =
          ((t = e.replace('urn:recap:', '')), JSON.parse(Q.from(t, 'base64').toString('utf-8')));
        return tS(i), i;
      }
      function tA(e) {
        var t;
        let i = tx(e);
        tS(i);
        let s = null == (t = i.att) ? void 0 : t.eip155;
        return s ? Object.keys(s).map((e) => e.split('/')[1]) : [];
      }
      function tR(e) {
        let t = tx(e);
        tS(t);
        let i = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && i.push(e[0].chains);
            });
          }),
          [...new Set(i.flat())]
        );
      }
      function tC(e) {
        var t;
        if (!e) return;
        let i = e?.[e.length - 1];
        return (t = i) && t.includes('urn:recap:') ? i : void 0;
      }
      function tN(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function tT(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function tq(e, ...t) {
        if (!tT(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function t$(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function tj(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let tD = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        tk = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function tU(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (tT(e)) e = tz(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function tM(e, t, i = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (i && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function tL(e, t, i, s) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, s);
        let r = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((i >> r) & n),
          a = Number(i & n),
          c = 4 * !!s,
          l = 4 * !s;
        e.setUint32(t + c, o, s), e.setUint32(t + l, a, s);
      }
      function tz(e) {
        return Uint8Array.from(e);
      }
      function tB(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let tH = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        tK = tH('expand 16-byte k'),
        tV = tH('expand 32-byte k'),
        tF = tD(tK),
        tG = tD(tV);
      function tJ(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function tW(e) {
        return e.byteOffset % 4 == 0;
      }
      let tQ = 0x100000000 - 1,
        tY = new Uint32Array(),
        tZ = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class tX {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            tq((e = tU(e)), 32);
          let t = tZ(e, 0),
            i = tZ(e, 2),
            s = tZ(e, 4),
            r = tZ(e, 6),
            n = tZ(e, 8),
            o = tZ(e, 10),
            a = tZ(e, 12),
            c = tZ(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
            (this.r[2] = ((i >>> 10) | (s << 6)) & 7939),
            (this.r[3] = ((s >>> 7) | (r << 9)) & 8191),
            (this.r[4] = ((r >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = tZ(e, 16 + 2 * t);
        }
        process(e, t, i = !1) {
          let { h: s, r: r } = this,
            n = r[0],
            o = r[1],
            a = r[2],
            c = r[3],
            l = r[4],
            h = r[5],
            p = r[6],
            u = r[7],
            d = r[8],
            g = r[9],
            f = tZ(e, t + 0),
            y = tZ(e, t + 2),
            m = tZ(e, t + 4),
            w = tZ(e, t + 6),
            b = tZ(e, t + 8),
            v = tZ(e, t + 10),
            E = tZ(e, t + 12),
            I = tZ(e, t + 14),
            P = s[0] + (8191 & f),
            _ = s[1] + (((f >>> 13) | (y << 3)) & 8191),
            S = s[2] + (((y >>> 10) | (m << 6)) & 8191),
            O = s[3] + (((m >>> 7) | (w << 9)) & 8191),
            x = s[4] + (((w >>> 4) | (b << 12)) & 8191),
            A = s[5] + ((b >>> 1) & 8191),
            R = s[6] + (((b >>> 14) | (v << 2)) & 8191),
            C = s[7] + (((v >>> 11) | (E << 5)) & 8191),
            N = s[8] + (((E >>> 8) | (I << 8)) & 8191),
            T = s[9] + ((I >>> 5) | (2048 * !i)),
            q = 0,
            $ = 0 + P * n + 5 * g * _ + 5 * d * S + 5 * u * O + 5 * p * x;
          (q = $ >>> 13),
            ($ &= 8191),
            ($ += 5 * h * A + 5 * l * R + 5 * c * C + 5 * a * N + 5 * o * T),
            (q += $ >>> 13),
            ($ &= 8191);
          let j = q + P * o + _ * n + 5 * g * S + 5 * d * O + 5 * u * x;
          (q = j >>> 13),
            (j &= 8191),
            (j += 5 * p * A + 5 * h * R + 5 * l * C + 5 * c * N + 5 * a * T),
            (q += j >>> 13),
            (j &= 8191);
          let D = q + P * a + _ * o + S * n + 5 * g * O + 5 * d * x;
          (q = D >>> 13),
            (D &= 8191),
            (D += 5 * u * A + 5 * p * R + 5 * h * C + 5 * l * N + 5 * c * T),
            (q += D >>> 13),
            (D &= 8191);
          let k = q + P * c + _ * a + S * o + O * n + 5 * g * x;
          (q = k >>> 13),
            (k &= 8191),
            (k += 5 * d * A + 5 * u * R + 5 * p * C + 5 * h * N + 5 * l * T),
            (q += k >>> 13),
            (k &= 8191);
          let U = q + P * l + _ * c + S * a + O * o + x * n;
          (q = U >>> 13),
            (U &= 8191),
            (U += 5 * g * A + 5 * d * R + 5 * u * C + 5 * p * N + 5 * h * T),
            (q += U >>> 13),
            (U &= 8191);
          let M = q + P * h + _ * l + S * c + O * a + x * o;
          (q = M >>> 13),
            (M &= 8191),
            (M += A * n + 5 * g * R + 5 * d * C + 5 * u * N + 5 * p * T),
            (q += M >>> 13),
            (M &= 8191);
          let L = q + P * p + _ * h + S * l + O * c + x * a;
          (q = L >>> 13),
            (L &= 8191),
            (L += A * o + R * n + 5 * g * C + 5 * d * N + 5 * u * T),
            (q += L >>> 13),
            (L &= 8191);
          let z = q + P * u + _ * p + S * h + O * l + x * c;
          (q = z >>> 13),
            (z &= 8191),
            (z += A * a + R * o + C * n + 5 * g * N + 5 * d * T),
            (q += z >>> 13),
            (z &= 8191);
          let B = q + P * d + _ * u + S * p + O * h + x * l;
          (q = B >>> 13),
            (B &= 8191),
            (B += A * c + R * a + C * o + N * n + 5 * g * T),
            (q += B >>> 13),
            (B &= 8191);
          let H = q + P * g + _ * d + S * u + O * p + x * h;
          (q = H >>> 13),
            (H &= 8191),
            (H += A * l + R * c + C * a + N * o + T * n),
            (q += H >>> 13),
            (H &= 8191),
            ($ = 8191 & (q = ((q = ((q << 2) + q) | 0) + $) | 0)),
            (q >>>= 13),
            (j += q),
            (s[0] = $),
            (s[1] = j),
            (s[2] = D),
            (s[3] = k),
            (s[4] = U),
            (s[5] = M),
            (s[6] = L),
            (s[7] = z),
            (s[8] = B),
            (s[9] = H);
        }
        finalize() {
          let { h: e, pad: t } = this,
            i = new Uint16Array(10),
            s = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++) (e[t] += s), (s = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * s),
            (s = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += s),
            (s = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += s),
            (i[0] = e[0] + 5),
            (s = i[0] >>> 13),
            (i[0] &= 8191);
          for (let t = 1; t < 10; t++) (i[t] = e[t] + s), (s = i[t] >>> 13), (i[t] &= 8191);
          i[9] -= 8192;
          let r = (1 ^ s) - 1;
          for (let e = 0; e < 10; e++) i[e] &= r;
          r = ~r;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & r) | i[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let n = e[0] + t[0];
          e[0] = 65535 & n;
          for (let i = 1; i < 8; i++)
            (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
          tB(i);
        }
        update(e) {
          t$(this);
          let { buffer: t, blockLen: i } = this,
            s = (e = tU(e)).length;
          for (let r = 0; r < s; ) {
            let n = Math.min(i - this.pos, s - r);
            if (n === i) {
              for (; i <= s - r; r += i) this.process(e, r);
              continue;
            }
            t.set(e.subarray(r, r + n), this.pos),
              (this.pos += n),
              (r += n),
              this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          tB(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          t$(this),
            (function (e, t) {
              tq(e);
              let i = t.outputLen;
              if (e.length < i)
                throw Error('digestInto() expects output buffer of length at least ' + i);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: i } = this,
            { pos: s } = this;
          if (s) {
            for (t[s++] = 1; s < 16; s++) t[s] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let r = 0;
          for (let t = 0; t < 8; t++) (e[r++] = i[t] >>> 0), (e[r++] = i[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
      }
      let t0 = (function (e) {
          let t = (t, i) => e(i).update(tU(t)).digest(),
            i = e(new Uint8Array(32));
          return (
            (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new tX(e)),
        t1 = (function (e, t) {
          let {
            allowShortKeys: i,
            extendNonceFn: s,
            counterLength: r,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || 'object' != typeof t) throw Error('options must be defined');
            return Object.assign(e, t);
          })({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, t);
          if ('function' != typeof e) throw Error('core must be a function');
          return (
            tN(r),
            tN(o),
            tj(n),
            tj(i),
            (t, a, c, l, h = 0) => {
              tq(t), tq(a), tq(c);
              let p = c.length;
              if ((void 0 === l && (l = new Uint8Array(p)), tq(l), tN(h), h < 0 || h >= tQ))
                throw Error('arx: counter overflow');
              if (l.length < p)
                throw Error(`arx: output (${l.length}) is shorter than data (${p})`);
              let u = [],
                d = t.length,
                g,
                f;
              if (32 === d) u.push((g = tz(t))), (f = tG);
              else if (16 === d && i)
                (g = new Uint8Array(32)).set(t), g.set(t, 16), (f = tF), u.push(g);
              else throw Error(`arx: invalid 32-byte key, got length=${d}`);
              tW(a) || u.push((a = tz(a)));
              let y = tD(g);
              if (s) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                s(f, y, tD(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let m = 16 - r;
              if (m !== a.length) throw Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), u.push(a);
              }
              return (
                (function (e, t, i, s, r, n, o, a) {
                  let c = r.length,
                    l = new Uint8Array(64),
                    h = tD(l),
                    p = tW(r) && tW(n),
                    u = p ? tD(r) : tY,
                    d = p ? tD(n) : tY;
                  for (let g = 0; g < c; o++) {
                    if ((e(t, i, s, h, o, a), o >= tQ)) throw Error('arx: counter overflow');
                    let f = Math.min(64, c - g);
                    if (p && 64 === f) {
                      let e = g / 4;
                      if (g % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, i; t < 16; t++) d[(i = e + t)] = u[i] ^ h[t];
                      g += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) n[(t = g + e)] = r[t] ^ l[e];
                    g += f;
                  }
                })(e, f, y, tD(a), c, l, h, o),
                tB(...u),
                l
              );
            }
          );
        })(
          function (e, t, i, s, r, n = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              p = t[1],
              u = t[2],
              d = t[3],
              g = t[4],
              f = t[5],
              y = t[6],
              m = t[7],
              w = i[0],
              b = i[1],
              v = i[2],
              E = o,
              I = a,
              P = c,
              _ = l,
              S = h,
              O = p,
              x = u,
              A = d,
              R = g,
              C = f,
              N = y,
              T = m,
              q = r,
              $ = w,
              j = b,
              D = v;
            for (let e = 0; e < n; e += 2)
              (R = (R + (q = tJ(q ^ (E = (E + S) | 0), 16))) | 0),
                (E = (E + (S = tJ(S ^ R, 12))) | 0),
                (R = (R + (q = tJ(q ^ E, 8))) | 0),
                (S = tJ(S ^ R, 7)),
                (C = (C + ($ = tJ($ ^ (I = (I + O) | 0), 16))) | 0),
                (I = (I + (O = tJ(O ^ C, 12))) | 0),
                (C = (C + ($ = tJ($ ^ I, 8))) | 0),
                (O = tJ(O ^ C, 7)),
                (N = (N + (j = tJ(j ^ (P = (P + x) | 0), 16))) | 0),
                (P = (P + (x = tJ(x ^ N, 12))) | 0),
                (N = (N + (j = tJ(j ^ P, 8))) | 0),
                (x = tJ(x ^ N, 7)),
                (T = (T + (D = tJ(D ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = tJ(A ^ T, 12))) | 0),
                (T = (T + (D = tJ(D ^ _, 8))) | 0),
                (A = tJ(A ^ T, 7)),
                (N = (N + (D = tJ(D ^ (E = (E + O) | 0), 16))) | 0),
                (E = (E + (O = tJ(O ^ N, 12))) | 0),
                (N = (N + (D = tJ(D ^ E, 8))) | 0),
                (O = tJ(O ^ N, 7)),
                (T = (T + (q = tJ(q ^ (I = (I + x) | 0), 16))) | 0),
                (I = (I + (x = tJ(x ^ T, 12))) | 0),
                (T = (T + (q = tJ(q ^ I, 8))) | 0),
                (x = tJ(x ^ T, 7)),
                (R = (R + ($ = tJ($ ^ (P = (P + A) | 0), 16))) | 0),
                (P = (P + (A = tJ(A ^ R, 12))) | 0),
                (R = (R + ($ = tJ($ ^ P, 8))) | 0),
                (A = tJ(A ^ R, 7)),
                (C = (C + (j = tJ(j ^ (_ = (_ + S) | 0), 16))) | 0),
                (_ = (_ + (S = tJ(S ^ C, 12))) | 0),
                (C = (C + (j = tJ(j ^ _, 8))) | 0),
                (S = tJ(S ^ C, 7));
            let k = 0;
            (s[k++] = (o + E) | 0),
              (s[k++] = (a + I) | 0),
              (s[k++] = (c + P) | 0),
              (s[k++] = (l + _) | 0),
              (s[k++] = (h + S) | 0),
              (s[k++] = (p + O) | 0),
              (s[k++] = (u + x) | 0),
              (s[k++] = (d + A) | 0),
              (s[k++] = (g + R) | 0),
              (s[k++] = (f + C) | 0),
              (s[k++] = (y + N) | 0),
              (s[k++] = (m + T) | 0),
              (s[k++] = (r + q) | 0),
              (s[k++] = (w + $) | 0),
              (s[k++] = (b + j) | 0),
              (s[k++] = (v + D) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        t2 = new Uint8Array(16),
        t8 = (e, t) => {
          e.update(t);
          let i = t.length % 16;
          i && e.update(t2.subarray(i));
        },
        t5 = new Uint8Array(32);
      function t3(e, t, i, s, r) {
        let n = e(t, i, t5),
          o = t0.create(n);
        r && t8(o, r), t8(o, s);
        let a = new Uint8Array(16),
          c = tk(a);
        tL(c, 0, BigInt(r ? r.length : 0), !0), tL(c, 8, BigInt(s.length), !0), o.update(a);
        let l = o.digest();
        return tB(n, a), l;
      }
      let t6 = ((e, t) => {
        function i(s, ...r) {
          if ((tq(s), void 0 !== e.nonceLength)) {
            let t = r[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? tq(t) : tq(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== r[1] && tq(r[1]);
          let o = t(s, ...r),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                tq(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c) throw Error('cannot encrypt() twice with same key + nonce');
              return (c = !0), tq(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((tq(e), n && e.length < n))
                throw Error('invalid ciphertext length: smaller than tagLength=' + n);
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(i, e), i;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, i, s) => ({
          encrypt(r, n) {
            let o = r.length;
            (n = tM(o + 16, n, !1)).set(r);
            let a = n.subarray(0, -16);
            e(t, i, a, a, 1);
            let c = t3(e, t, i, a, s);
            return n.set(c, o), tB(c), n;
          },
          decrypt(r, n) {
            n = tM(r.length - 16, n, !1);
            let o = r.subarray(0, -16),
              a = r.subarray(-16),
              c = t3(e, t, i, o, s);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let i = 0;
                for (let s = 0; s < e.length; s++) i |= e[s] ^ t[s];
                return 0 === i;
              })(a, c)
            )
              throw Error('invalid tag');
            return n.set(r.subarray(0, -16)), e(t, i, n, n, 1), tB(c), n;
          },
        }))(t1)
      );
      class t4 extends eZ {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), ek(e);
          let i = eY(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let s = this.blockLen,
            r = new Uint8Array(s);
          r.set(i.length > s ? e.create().update(i).digest() : i);
          for (let e = 0; e < r.length; e++) r[e] ^= 54;
          this.iHash.update(r), (this.oHash = e.create());
          for (let e = 0; e < r.length; e++) r[e] ^= 106;
          this.oHash.update(r), r.fill(0);
        }
        update(e) {
          return eU(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          eU(this),
            eD(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let { oHash: t, iHash: i, finished: s, destroyed: r, blockLen: n, outputLen: o } = this;
          return (
            (e.finished = s),
            (e.destroyed = r),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = i._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let t9 = (e, t, i) => new t4(e, t).update(i).digest();
      t9.create = (e, t) => new t4(e, t);
      let t7 = new Uint8Array([0]),
        ie = new Uint8Array(),
        it = (e, t, i, s, r) =>
          (function (e, t, i, s = 32) {
            if ((ek(e), ej(s), s > 255 * e.outputLen))
              throw Error('Length should be <= 255*HashLen');
            let r = Math.ceil(s / e.outputLen);
            void 0 === i && (i = ie);
            let n = new Uint8Array(r * e.outputLen),
              o = t9.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < r; t++)
              (t7[0] = t + 1),
                a
                  .update(0 === t ? ie : c)
                  .update(i)
                  .update(t7)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), c.fill(0), t7.fill(0), n.slice(0, s);
          })(
            e,
            (function (e, t, i) {
              return ek(e), void 0 === i && (i = new Uint8Array(e.outputLen)), t9(e, eY(i), eY(t));
            })(e, t, i),
            s,
            r
          );
      class ii extends eZ {
        constructor(e, t, i, s) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = i),
            (this.isLE = s),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = eG(this.buffer));
        }
        update(e) {
          eU(this);
          let { view: t, buffer: i, blockLen: s } = this,
            r = (e = eY(e)).length;
          for (let n = 0; n < r; ) {
            let o = Math.min(s - this.pos, r - n);
            if (o === s) {
              let t = eG(e);
              for (; s <= r - n; n += s) this.process(t, n);
              continue;
            }
            i.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === s && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          eU(this), eM(e, this), (this.finished = !0);
          let { buffer: t, view: i, blockLen: s, isLE: r } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > s - n && (this.process(i, 0), (n = 0));
          for (let e = n; e < s; e++) t[e] = 0;
          (function (e, t, i, s) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, s);
            let r = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((i >> r) & n),
              a = Number(i & n),
              c = 4 * !!s,
              l = 4 * !s;
            e.setUint32(t + c, o, s), e.setUint32(t + l, a, s);
          })(i, s - 8, BigInt(8 * this.length), r),
            this.process(i, 0);
          let o = eG(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], r);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: i, length: s, finished: r, destroyed: n, pos: o } = this;
          return (
            (e.length = s),
            (e.pos = o),
            (e.finished = r),
            (e.destroyed = n),
            s % t && e.buffer.set(i),
            e
          );
        }
      }
      let is = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4,
          0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe,
          0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
          0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
          0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116,
          0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
          0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
          0xc67178f2,
        ]),
        ir = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        io = new Uint32Array(64);
      class ia extends ii {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | ir[0]),
            (this.B = 0 | ir[1]),
            (this.C = 0 | ir[2]),
            (this.D = 0 | ir[3]),
            (this.E = 0 | ir[4]),
            (this.F = 0 | ir[5]),
            (this.G = 0 | ir[6]),
            (this.H = 0 | ir[7]);
        }
        get() {
          let { A: e, B: t, C: i, D: s, E: r, F: n, G: o, H: a } = this;
          return [e, t, i, s, r, n, o, a];
        }
        set(e, t, i, s, r, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | i),
            (this.D = 0 | s),
            (this.E = 0 | r),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) io[i] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = io[e - 15],
              i = io[e - 2],
              s = eJ(t, 7) ^ eJ(t, 18) ^ (t >>> 3),
              r = eJ(i, 17) ^ eJ(i, 19) ^ (i >>> 10);
            io[e] = (r + io[e - 7] + s + io[e - 16]) | 0;
          }
          let { A: i, B: s, C: r, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, p, u, d;
            let t =
                (l +
                  (eJ(o, 6) ^ eJ(o, 11) ^ eJ(o, 25)) +
                  (((h = o) & a) ^ (~h & c)) +
                  is[e] +
                  io[e]) |
                0,
              g =
                ((eJ(i, 2) ^ eJ(i, 13) ^ eJ(i, 22)) +
                  (((p = i) & (u = s)) ^ (p & (d = r)) ^ (u & d))) |
                0;
            (l = c),
              (c = a),
              (a = o),
              (o = (n + t) | 0),
              (n = r),
              (r = s),
              (s = i),
              (i = (t + g) | 0);
          }
          (i = (i + this.A) | 0),
            (s = (s + this.B) | 0),
            (r = (r + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(i, s, r, n, o, a, c, l);
        }
        roundClean() {
          io.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let ic = eX(() => new ia()),
        il = BigInt(0),
        ih = BigInt(1),
        ip = BigInt(2);
      function iu(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function id(e) {
        if (!iu(e)) throw Error('Uint8Array expected');
      }
      function ig(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let iy = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function im(e) {
        id(e);
        let t = '';
        for (let i = 0; i < e.length; i++) t += iy[e[i]];
        return t;
      }
      function iw(e) {
        let t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function ib(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        return '' === e ? il : BigInt('0x' + e);
      }
      let iv = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function iE(e) {
        return e >= iv._0 && e <= iv._9
          ? e - iv._0
          : e >= iv.A && e <= iv.F
            ? e - (iv.A - 10)
            : e >= iv.a && e <= iv.f
              ? e - (iv.a - 10)
              : void 0;
      }
      function iI(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let s = new Uint8Array(i);
        for (let t = 0, r = 0; t < i; t++, r += 2) {
          let i = iE(e.charCodeAt(r)),
            n = iE(e.charCodeAt(r + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[r] + e[r + 1]) + '" at index ' + r
            );
          s[t] = 16 * i + n;
        }
        return s;
      }
      function iP(e) {
        return ib(im(e));
      }
      function i_(e) {
        return id(e), ib(im(Uint8Array.from(e).reverse()));
      }
      function iS(e, t) {
        return iI(e.toString(16).padStart(2 * t, '0'));
      }
      function iO(e, t) {
        return iS(e, t).reverse();
      }
      function ix(e, t, i) {
        let s;
        if ('string' == typeof t)
          try {
            s = iI(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (iu(t)) s = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let r = s.length;
        if ('number' == typeof i && r !== i)
          throw Error(e + ' of length ' + i + ' expected, got ' + r);
        return s;
      }
      function iA(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let s = e[i];
          id(s), (t += s.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, s = 0; t < e.length; t++) {
          let r = e[t];
          i.set(r, s), (s += r.length);
        }
        return i;
      }
      let iR = (e) => 'bigint' == typeof e && il <= e;
      function iC(e, t, i) {
        return iR(e) && iR(t) && iR(i) && t <= e && e < i;
      }
      function iN(e, t, i, s) {
        if (!iC(t, i, s))
          throw Error('expected valid ' + e + ': ' + i + ' <= n < ' + s + ', got ' + t);
      }
      function iT(e) {
        let t;
        for (t = 0; e > il; e >>= ih, t += 1);
        return t;
      }
      let iq = (e) => (ip << BigInt(e - 1)) - ih,
        i$ = (e) => new Uint8Array(e),
        ij = (e) => Uint8Array.from(e);
      function iD(e, t, i) {
        if ('number' != typeof e || e < 2) throw Error('hashLen must be a number');
        if ('number' != typeof t || t < 2) throw Error('qByteLen must be a number');
        if ('function' != typeof i) throw Error('hmacFn must be a function');
        let s = i$(e),
          r = i$(e),
          n = 0,
          o = () => {
            s.fill(1), r.fill(0), (n = 0);
          },
          a = (...e) => i(r, s, ...e),
          c = (e = i$()) => {
            (r = a(ij([0]), e)), (s = a()), 0 !== e.length && ((r = a(ij([1]), e)), (s = a()));
          },
          l = () => {
            if (n++ >= 1e3) throw Error('drbg: tried 1000 values');
            let e = 0,
              i = [];
            for (; e < t; ) {
              let t = (s = a()).slice();
              i.push(t), (e += s.length);
            }
            return iA(...i);
          };
        return (e, t) => {
          let i;
          for (o(), c(e); !(i = t(l())); ) c();
          return o(), i;
        };
      }
      let ik = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || iu(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function iU(e, t, i = {}) {
        let s = (t, i, s) => {
          let r = ik[i];
          if ('function' != typeof r) throw Error('invalid validator function');
          let n = e[t];
          if (!(s && void 0 === n) && !r(n, e))
            throw Error('param ' + String(t) + ' is invalid. Expected ' + i + ', got ' + n);
        };
        for (let [e, i] of Object.entries(t)) s(e, i, !1);
        for (let [e, t] of Object.entries(i)) s(e, t, !0);
        return e;
      }
      function iM(e) {
        let t = new WeakMap();
        return (i, ...s) => {
          let r = t.get(i);
          if (void 0 !== r) return r;
          let n = e(i, ...s);
          return t.set(i, n), n;
        };
      }
      var iL = Object.freeze({
        __proto__: null,
        isBytes: iu,
        abytes: id,
        abool: ig,
        bytesToHex: im,
        numberToHexUnpadded: iw,
        hexToNumber: ib,
        hexToBytes: iI,
        bytesToNumberBE: iP,
        bytesToNumberLE: i_,
        numberToBytesBE: iS,
        numberToBytesLE: iO,
        numberToVarBytesBE: function (e) {
          return iI(iw(e));
        },
        ensureBytes: ix,
        concatBytes: iA,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let i = 0;
          for (let s = 0; s < e.length; s++) i |= e[s] ^ t[s];
          return 0 === i;
        },
        utf8ToBytes: function (e) {
          if ('string' != typeof e) throw Error('string expected');
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: iC,
        aInRange: iN,
        bitLen: iT,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & ih;
        },
        bitSet: function (e, t, i) {
          return e | ((i ? ih : il) << BigInt(t));
        },
        bitMask: iq,
        createHmacDrbg: iD,
        validateObject: iU,
        notImplemented: () => {
          throw Error('not implemented');
        },
        memoized: iM,
      });
      let iz = BigInt(0),
        iB = BigInt(1),
        iH = BigInt(2),
        iK = BigInt(3),
        iV = BigInt(4),
        iF = BigInt(5),
        iG = BigInt(8);
      function iJ(e, t) {
        let i = e % t;
        return i >= iz ? i : t + i;
      }
      function iW(e, t, i) {
        if (t < iz) throw Error('invalid exponent, negatives unsupported');
        if (i <= iz) throw Error('invalid modulus');
        if (i === iB) return iz;
        let s = iB;
        for (; t > iz; ) t & iB && (s = (s * e) % i), (e = (e * e) % i), (t >>= iB);
        return s;
      }
      function iQ(e, t, i) {
        let s = e;
        for (; t-- > iz; ) (s *= s), (s %= i);
        return s;
      }
      function iY(e, t) {
        if (e === iz) throw Error('invert: expected non-zero number');
        if (t <= iz) throw Error('invert: expected positive modulus, got ' + t);
        let i = iJ(e, t),
          s = t,
          r = iz,
          n = iB;
        for (; i !== iz; ) {
          let e = s / i,
            t = s % i,
            o = r - n * e;
          (s = i), (i = t), (r = n), (n = o);
        }
        if (s !== iB) throw Error('invert: does not exist');
        return iJ(r, t);
      }
      let iZ = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN',
      ];
      function iX(e, t) {
        let i = void 0 !== t ? t : e.toString(2).length,
          s = Math.ceil(i / 8);
        return { nBitLength: i, nByteLength: s };
      }
      function i0(e, t, i = !1, s = {}) {
        let r;
        if (e <= iz) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: n, nByteLength: o } = iX(e, t);
        if (o > 2048) throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let a = Object.freeze({
          ORDER: e,
          isLE: i,
          BITS: n,
          BYTES: o,
          MASK: iq(n),
          ZERO: iz,
          ONE: iB,
          create: (t) => iJ(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return iz <= t && t < e;
          },
          is0: (e) => e === iz,
          isOdd: (e) => (e & iB) === iB,
          neg: (t) => iJ(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => iJ(t * t, e),
          add: (t, i) => iJ(t + i, e),
          sub: (t, i) => iJ(t - i, e),
          mul: (t, i) => iJ(t * i, e),
          pow: (e, t) =>
            (function (e, t, i) {
              if (i < iz) throw Error('invalid exponent, negatives unsupported');
              if (i === iz) return e.ONE;
              if (i === iB) return t;
              let s = e.ONE,
                r = t;
              for (; i > iz; ) i & iB && (s = e.mul(s, r)), (r = e.sqr(r)), (i >>= iB);
              return s;
            })(a, e, t),
          div: (t, i) => iJ(t * iY(i, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => iY(t, e),
          sqrt:
            s.sqrt ||
            ((t) => (
              r ||
                (r = (function (e) {
                  if (e % iV === iK) {
                    let t = (e + iB) / iV;
                    return function (e, i) {
                      let s = e.pow(i, t);
                      if (!e.eql(e.sqr(s), i)) throw Error('Cannot find square root');
                      return s;
                    };
                  }
                  if (e % iG === iF) {
                    let t = (e - iF) / iG;
                    return function (e, i) {
                      let s = e.mul(i, iH),
                        r = e.pow(s, t),
                        n = e.mul(i, r),
                        o = e.mul(e.mul(n, iH), r),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), i)) throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, i, s;
                    let r = (e - iB) / iH;
                    for (t = e - iB, i = 0; t % iH === iz; t /= iH, i++);
                    for (s = iH; s < e && iW(s, r, e) !== e - iB; s++)
                      if (s > 1e3) throw Error('Cannot find square root: likely non-prime P');
                    if (1 === i) {
                      let t = (e + iB) / iV;
                      return function (e, i) {
                        let s = e.pow(i, t);
                        if (!e.eql(e.sqr(s), i)) throw Error('Cannot find square root');
                        return s;
                      };
                    }
                    let n = (t + iB) / iH;
                    return function (e, o) {
                      if (e.pow(o, r) === e.neg(e.ONE)) throw Error('Cannot find square root');
                      let a = i,
                        c = e.pow(e.mul(e.ONE, s), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let i = e.sqr(h); t < a && !e.eql(i, e.ONE); t++) i = e.sqr(i);
                        let i = e.pow(c, iB << BigInt(a - t - 1));
                        (c = e.sqr(i)), (l = e.mul(l, i)), (h = e.mul(h, c)), (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              r(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let i = Array(t.length),
                s = t.reduce((t, s, r) => (e.is0(s) ? t : ((i[r] = t), e.mul(t, s))), e.ONE),
                r = e.inv(s);
              return (
                t.reduceRight(
                  (t, s, r) => (e.is0(s) ? t : ((i[r] = e.mul(t, i[r])), e.mul(t, s))),
                  r
                ),
                i
              );
            })(a, e),
          cmov: (e, t, i) => (i ? t : e),
          toBytes: (e) => (i ? iO(e, o) : iS(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error('Field.fromBytes: expected ' + o + ' bytes, got ' + e.length);
            return i ? i_(e) : iP(e);
          },
        });
        return Object.freeze(a);
      }
      function i1(e) {
        if ('bigint' != typeof e) throw Error('field order must be bigint');
        return Math.ceil(e.toString(2).length / 8);
      }
      function i2(e) {
        let t = i1(e);
        return t + Math.ceil(t / 2);
      }
      let i8 = BigInt(0),
        i5 = BigInt(1);
      function i3(e, t) {
        let i = t.negate();
        return e ? i : t;
      }
      function i6(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function i4(e, t) {
        return i6(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      let i9 = new WeakMap(),
        i7 = new WeakMap();
      function se(e) {
        return i7.get(e) || 1;
      }
      function st(e) {
        return (
          iU(
            e.Fp,
            iZ.reduce((e, t) => ((e[t] = 'function'), e), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            })
          ),
          iU(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...iX(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let si = BigInt(0),
        ss = BigInt(1),
        sr = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let sn = BigInt(1),
        so = BigInt(2),
        sa = BigInt(3),
        sc = BigInt(5);
      BigInt(8);
      let sl = (function (e) {
        let t =
            (iU(
              e,
              { a: 'bigint' },
              {
                montgomeryBits: 'isSafeInteger',
                nByteLength: 'isSafeInteger',
                adjustScalarBytes: 'function',
                domain: 'function',
                powPminus2: 'function',
                Gu: 'bigint',
              }
            ),
            Object.freeze({ ...e })),
          { P: i } = t,
          s = (e) => iJ(e, i),
          r = t.montgomeryBits,
          n = Math.ceil(r / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => iW(e, i - BigInt(2), i));
        function l(e, t, i) {
          let r = s(e * (t - i));
          return [(t = s(t - r)), (i = s(i + r))];
        }
        let h = (t.a - BigInt(2)) / BigInt(4);
        function p(e, t) {
          let p = (function (e, t) {
            iN('u', e, si, i), iN('scalar', t, si, i);
            let n = ss,
              o = si,
              a = e,
              p = ss,
              u = si,
              d;
            for (let i = BigInt(r - 1); i >= si; i--) {
              let r = (t >> i) & ss;
              (u ^= r),
                (n = (d = l(u, n, a))[0]),
                (a = d[1]),
                (o = (d = l(u, o, p))[0]),
                (p = d[1]),
                (u = r);
              let c = n + o,
                g = s(c * c),
                f = n - o,
                y = s(f * f),
                m = g - y,
                w = a + p,
                b = s((a - p) * c),
                v = s(w * f),
                E = b + v,
                I = b - v;
              (a = s(E * E)), (p = s(e * s(I * I))), (n = s(g * y)), (o = s(m * (g + s(h * m))));
            }
            return (
              (n = (d = l(u, n, a))[0]),
              (a = d[1]),
              (o = (d = l(u, o, p))[0]),
              (p = d[1]),
              s(n * c(o))
            );
          })(
            (function (e) {
              let t = ix('u coordinate', e, n);
              return 32 === o && (t[31] &= 127), i_(t);
            })(t),
            (function (e) {
              let t = ix('scalar', e),
                i = t.length;
              if (i !== n && i !== o)
                throw Error(
                  'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + i
                );
              return i_(a(t));
            })(e)
          );
          if (p === si) throw Error('invalid private or public key received');
          return iO(s(p), n);
        }
        let u = iO(s(t.Gu), n);
        function d(e) {
          return p(e, u);
        }
        return {
          scalarMult: p,
          scalarMultBase: d,
          getSharedSecret: (e, t) => p(e, t),
          getPublicKey: (e) => d(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: u,
        };
      })({
        P: sr,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          let { pow_p_5_8: t, b2: i } = (function (e) {
            let t = BigInt(10),
              i = BigInt(20),
              s = BigInt(40),
              r = BigInt(80),
              n = (((e * e) % sr) * e) % sr,
              o = (iQ(n, so, sr) * n) % sr,
              a = (iQ(o, sn, sr) * e) % sr,
              c = (iQ(a, sc, sr) * a) % sr,
              l = (iQ(c, t, sr) * c) % sr,
              h = (iQ(l, i, sr) * l) % sr,
              p = (iQ(h, s, sr) * h) % sr,
              u = (iQ(p, r, sr) * p) % sr,
              d = (iQ(u, r, sr) * p) % sr,
              g = (iQ(d, t, sr) * c) % sr;
            return { pow_p_5_8: (iQ(g, so, sr) * e) % sr, b2: n };
          })(e);
          return iJ(iQ(t, sa, sr) * i, sr);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: e0,
      });
      function sh(e) {
        void 0 !== e.lowS && ig('lowS', e.lowS), void 0 !== e.prehash && ig('prehash', e.prehash);
      }
      let { bytesToNumberBE: sp, hexToBytes: su } = iL;
      class sd extends Error {
        constructor(e = '') {
          super(e);
        }
      }
      let sg = {
          Err: sd,
          _tlv: {
            encode: (e, t) => {
              let { Err: i } = sg;
              if (e < 0 || e > 256) throw new i('tlv.encode: wrong tag');
              if (1 & t.length) throw new i('tlv.encode: unpadded data');
              let s = t.length / 2,
                r = iw(s);
              if ((r.length / 2) & 128) throw new i('tlv.encode: long form length too big');
              let n = s > 127 ? iw((r.length / 2) | 128) : '';
              return iw(e) + n + r + t;
            },
            decode(e, t) {
              let { Err: i } = sg,
                s = 0;
              if (e < 0 || e > 256) throw new i('tlv.encode: wrong tag');
              if (t.length < 2 || t[s++] !== e) throw new i('tlv.decode: wrong tlv');
              let r = t[s++],
                n = 0;
              if (128 & r) {
                let e = 127 & r;
                if (!e) throw new i('tlv.decode(long): indefinite length not supported');
                if (e > 4) throw new i('tlv.decode(long): byte length is too big');
                let o = t.subarray(s, s + e);
                if (o.length !== e) throw new i('tlv.decode: length bytes not complete');
                if (0 === o[0]) throw new i('tlv.decode(long): zero leftmost byte');
                for (let e of o) n = (n << 8) | e;
                if (((s += e), n < 128)) throw new i('tlv.decode(long): not minimal encoding');
              } else n = r;
              let o = t.subarray(s, s + n);
              if (o.length !== n) throw new i('tlv.decode: wrong value length');
              return { v: o, l: t.subarray(s + n) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = sg;
              if (e < sf) throw new t('integer: negative integers are not allowed');
              let i = iw(e);
              if ((8 & Number.parseInt(i[0], 16) && (i = '00' + i), 1 & i.length))
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return i;
            },
            decode(e) {
              let { Err: t } = sg;
              if (128 & e[0]) throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t('invalid signature integer: unnecessary leading zero');
              return sp(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: i, _tlv: s } = sg,
              r = 'string' == typeof e ? su(e) : e;
            id(r);
            let { v: n, l: o } = s.decode(48, r);
            if (o.length) throw new t('invalid signature: left bytes after parsing');
            let { v: a, l: c } = s.decode(2, n),
              { v: l, l: h } = s.decode(2, c);
            if (h.length) throw new t('invalid signature: left bytes after parsing');
            return { r: i.decode(a), s: i.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: i } = sg,
              s = t.encode(2, i.encode(e.r)),
              r = t.encode(2, i.encode(e.s));
            return t.encode(48, s + r);
          },
        },
        sf = BigInt(0),
        sy = BigInt(1);
      BigInt(2);
      let sm = BigInt(3);
      BigInt(4);
      let sw = i0(BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff')),
        sb = (function (e, t) {
          let i = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = st(e);
                  return (
                    iU(
                      t,
                      { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                      { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: i, n: s } = t,
                r = i.BYTES + 1,
                n = 2 * i.BYTES + 1;
              function o(e) {
                return iJ(e, s);
              }
              let {
                  ProjectivePoint: a,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: l,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let i = (function (e) {
                      let t = st(e);
                      iU(
                        t,
                        { a: 'field', b: 'field' },
                        {
                          allowedPrivateKeyLengths: 'array',
                          wrapPrivateKey: 'boolean',
                          isTorsionFree: 'function',
                          clearCofactor: 'function',
                          allowInfinityPoint: 'boolean',
                          fromBytes: 'function',
                          toBytes: 'function',
                        }
                      );
                      let { endo: i, Fp: s, a: r } = t;
                      if (i) {
                        if (!s.eql(r, s.ZERO))
                          throw Error(
                            'invalid endomorphism, can only be defined for Koblitz curves that have a=0'
                          );
                        if (
                          'object' != typeof i ||
                          'bigint' != typeof i.beta ||
                          'function' != typeof i.splitScalar
                        )
                          throw Error(
                            'invalid endomorphism, expected beta: bigint and splitScalar: function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: s } = i,
                    r = i0(i.n, i.nBitLength),
                    n =
                      i.toBytes ||
                      ((e, t, i) => {
                        let r = t.toAffine();
                        return iA(Uint8Array.from([4]), s.toBytes(r.x), s.toBytes(r.y));
                      }),
                    o =
                      i.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: s.fromBytes(t.subarray(0, s.BYTES)),
                          y: s.fromBytes(t.subarray(s.BYTES, 2 * s.BYTES)),
                        };
                      });
                  function a(e) {
                    let { a: t, b: r } = i,
                      n = s.sqr(e),
                      o = s.mul(n, e);
                    return s.add(s.add(o, s.mul(e, t)), r);
                  }
                  if (!s.eql(s.sqr(i.Gy), a(i.Gx)))
                    throw Error('bad generator point: equation left != right');
                  function c(e) {
                    let t;
                    let {
                      allowedPrivateKeyLengths: s,
                      nByteLength: r,
                      wrapPrivateKey: n,
                      n: o,
                    } = i;
                    if (s && 'bigint' != typeof e) {
                      if ((iu(e) && (e = im(e)), 'string' != typeof e || !s.includes(e.length)))
                        throw Error('invalid private key');
                      e = e.padStart(2 * r, '0');
                    }
                    try {
                      t = 'bigint' == typeof e ? e : iP(ix('private key', e, r));
                    } catch {
                      throw Error(
                        'invalid private key, expected hex or ' + r + ' bytes, got ' + typeof e
                      );
                    }
                    return n && (t = iJ(t, o)), iN('private key', t, sy, o), t;
                  }
                  function l(e) {
                    if (!(e instanceof u)) throw Error('ProjectivePoint expected');
                  }
                  let h = iM((e, t) => {
                      let { px: i, py: r, pz: n } = e;
                      if (s.eql(n, s.ONE)) return { x: i, y: r };
                      let o = e.is0();
                      null == t && (t = o ? s.ONE : s.inv(n));
                      let a = s.mul(i, t),
                        c = s.mul(r, t),
                        l = s.mul(n, t);
                      if (o) return { x: s.ZERO, y: s.ZERO };
                      if (!s.eql(l, s.ONE)) throw Error('invZ was invalid');
                      return { x: a, y: c };
                    }),
                    p = iM((e) => {
                      if (e.is0()) {
                        if (i.allowInfinityPoint && !s.is0(e.py)) return;
                        throw Error('bad point: ZERO');
                      }
                      let { x: t, y: r } = e.toAffine();
                      if (!s.isValid(t) || !s.isValid(r)) throw Error('bad point: x or y not FE');
                      let n = s.sqr(r),
                        o = a(t);
                      if (!s.eql(n, o)) throw Error('bad point: equation left != right');
                      if (!e.isTorsionFree()) throw Error('bad point: not in prime-order subgroup');
                      return !0;
                    });
                  class u {
                    constructor(e, t, i) {
                      if (((this.px = e), (this.py = t), (this.pz = i), null == e || !s.isValid(e)))
                        throw Error('x required');
                      if (null == t || !s.isValid(t)) throw Error('y required');
                      if (null == i || !s.isValid(i)) throw Error('z required');
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: i } = e || {};
                      if (!e || !s.isValid(t) || !s.isValid(i)) throw Error('invalid affine point');
                      if (e instanceof u) throw Error('projective point not allowed');
                      let r = (e) => s.eql(e, s.ZERO);
                      return r(t) && r(i) ? u.ZERO : new u(t, i, s.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = s.invertBatch(e.map((e) => e.pz));
                      return e.map((e, i) => e.toAffine(t[i])).map(u.fromAffine);
                    }
                    static fromHex(e) {
                      let t = u.fromAffine(o(ix('pointHex', e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return u.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, i, s) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e)) throw Error('array expected');
                            e.forEach((e, i) => {
                              if (!(e instanceof t)) throw Error('invalid point at index ' + i);
                            });
                          })(i, e),
                          (function (e, t) {
                            if (!Array.isArray(e)) throw Error('array of scalars expected');
                            e.forEach((e, i) => {
                              if (!t.isValid(e)) throw Error('invalid scalar at index ' + i);
                            });
                          })(s, t),
                          i.length !== s.length)
                        )
                          throw Error('arrays of points and scalars must have equal length');
                        let r = e.ZERO,
                          n = iT(BigInt(i.length)),
                          o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                          a = (1 << o) - 1,
                          c = Array(a + 1).fill(r),
                          l = Math.floor((t.BITS - 1) / o) * o,
                          h = r;
                        for (let e = l; e >= 0; e -= o) {
                          c.fill(r);
                          for (let t = 0; t < s.length; t++) {
                            let r = Number((s[t] >> BigInt(e)) & BigInt(a));
                            c[r] = c[r].add(i[t]);
                          }
                          let t = r;
                          for (let e = c.length - 1, i = r; e > 0; e--)
                            (i = i.add(c[e])), (t = t.add(i));
                          if (((h = h.add(t)), 0 !== e)) for (let e = 0; e < o; e++) h = h.double();
                        }
                        return h;
                      })(u, r, e, t);
                    }
                    _setWindowSize(e) {
                      g.setWindowSize(this, e);
                    }
                    assertValidity() {
                      p(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (s.isOdd) return !s.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: i, pz: r } = this,
                        { px: n, py: o, pz: a } = e,
                        c = s.eql(s.mul(t, a), s.mul(n, r)),
                        h = s.eql(s.mul(i, a), s.mul(o, r));
                      return c && h;
                    }
                    negate() {
                      return new u(this.px, s.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = i,
                        r = s.mul(t, sm),
                        { px: n, py: o, pz: a } = this,
                        c = s.ZERO,
                        l = s.ZERO,
                        h = s.ZERO,
                        p = s.mul(n, n),
                        d = s.mul(o, o),
                        g = s.mul(a, a),
                        f = s.mul(n, o);
                      return (
                        (f = s.add(f, f)),
                        (h = s.mul(n, a)),
                        (h = s.add(h, h)),
                        (c = s.mul(e, h)),
                        (l = s.mul(r, g)),
                        (l = s.add(c, l)),
                        (c = s.sub(d, l)),
                        (l = s.add(d, l)),
                        (l = s.mul(c, l)),
                        (c = s.mul(f, c)),
                        (h = s.mul(r, h)),
                        (g = s.mul(e, g)),
                        (f = s.sub(p, g)),
                        (f = s.mul(e, f)),
                        (f = s.add(f, h)),
                        (h = s.add(p, p)),
                        (p = s.add(h, p)),
                        (p = s.add(p, g)),
                        (p = s.mul(p, f)),
                        (l = s.add(l, p)),
                        (g = s.mul(o, a)),
                        (g = s.add(g, g)),
                        (p = s.mul(g, f)),
                        (c = s.sub(c, p)),
                        (h = s.mul(g, d)),
                        (h = s.add(h, h)),
                        new u(c, l, (h = s.add(h, h)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: r, pz: n } = this,
                        { px: o, py: a, pz: c } = e,
                        h = s.ZERO,
                        p = s.ZERO,
                        d = s.ZERO,
                        g = i.a,
                        f = s.mul(i.b, sm),
                        y = s.mul(t, o),
                        m = s.mul(r, a),
                        w = s.mul(n, c),
                        b = s.add(t, r),
                        v = s.add(o, a);
                      (b = s.mul(b, v)), (v = s.add(y, m)), (b = s.sub(b, v)), (v = s.add(t, n));
                      let E = s.add(o, c);
                      return (
                        (v = s.mul(v, E)),
                        (E = s.add(y, w)),
                        (v = s.sub(v, E)),
                        (E = s.add(r, n)),
                        (h = s.add(a, c)),
                        (E = s.mul(E, h)),
                        (h = s.add(m, w)),
                        (E = s.sub(E, h)),
                        (d = s.mul(g, v)),
                        (h = s.mul(f, w)),
                        (d = s.add(h, d)),
                        (h = s.sub(m, d)),
                        (d = s.add(m, d)),
                        (p = s.mul(h, d)),
                        (m = s.add(y, y)),
                        (m = s.add(m, y)),
                        (w = s.mul(g, w)),
                        (v = s.mul(f, v)),
                        (m = s.add(m, w)),
                        (w = s.sub(y, w)),
                        (w = s.mul(g, w)),
                        (v = s.add(v, w)),
                        (y = s.mul(m, v)),
                        (p = s.add(p, y)),
                        (y = s.mul(E, v)),
                        (h = s.mul(b, h)),
                        (h = s.sub(h, y)),
                        (y = s.mul(b, m)),
                        (d = s.mul(E, d)),
                        new u(h, p, (d = s.add(d, y)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(u.ZERO);
                    }
                    wNAF(e) {
                      return g.wNAFCached(this, e, u.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: r } = i;
                      iN('scalar', e, sf, r);
                      let n = u.ZERO;
                      if (e === sf) return n;
                      if (this.is0() || e === sy) return this;
                      if (!t || g.hasPrecomputes(this))
                        return g.wNAFCachedUnsafe(this, e, u.normalizeZ);
                      let { k1neg: o, k1: a, k2neg: c, k2: l } = t.splitScalar(e),
                        h = n,
                        p = n,
                        d = this;
                      for (; a > sf || l > sf; )
                        a & sy && (h = h.add(d)),
                          l & sy && (p = p.add(d)),
                          (d = d.double()),
                          (a >>= sy),
                          (l >>= sy);
                      return (
                        o && (h = h.negate()),
                        c && (p = p.negate()),
                        (p = new u(s.mul(p.px, t.beta), p.py, p.pz)),
                        h.add(p)
                      );
                    }
                    multiply(e) {
                      let t, r;
                      let { endo: n, n: o } = i;
                      if ((iN('scalar', e, sy, o), n)) {
                        let { k1neg: i, k1: o, k2neg: a, k2: c } = n.splitScalar(e),
                          { p: l, f: h } = this.wNAF(o),
                          { p: p, f: d } = this.wNAF(c);
                        (l = g.constTimeNegate(i, l)),
                          (p = g.constTimeNegate(a, p)),
                          (p = new u(s.mul(p.px, n.beta), p.py, p.pz)),
                          (t = l.add(p)),
                          (r = h.add(d));
                      } else {
                        let { p: i, f: s } = this.wNAF(e);
                        (t = i), (r = s);
                      }
                      return u.normalizeZ([t, r])[0];
                    }
                    multiplyAndAddUnsafe(e, t, i) {
                      let s = u.BASE,
                        r = (e, t) =>
                          t !== sf && t !== sy && e.equals(s) ? e.multiply(t) : e.multiplyUnsafe(t),
                        n = r(this, t).add(r(e, i));
                      return n.is0() ? void 0 : n;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = i;
                      if (e === sy) return !0;
                      if (t) return t(u, this);
                      throw Error('isTorsionFree() has not been declared for the elliptic curve');
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = i;
                      return e === sy ? this : t ? t(u, this) : this.multiplyUnsafe(i.h);
                    }
                    toRawBytes(e = !0) {
                      return ig('isCompressed', e), this.assertValidity(), n(u, this, e);
                    }
                    toHex(e = !0) {
                      return ig('isCompressed', e), im(this.toRawBytes(e));
                    }
                  }
                  (u.BASE = new u(i.Gx, i.Gy, s.ONE)), (u.ZERO = new u(s.ZERO, s.ONE, s.ZERO));
                  let d = i.nBitLength,
                    g =
                      ((t = i.endo ? Math.ceil(d / 2) : d),
                      {
                        constTimeNegate: i3,
                        hasPrecomputes: (e) => 1 !== se(e),
                        unsafeLadder(e, t, i = u.ZERO) {
                          let s = e;
                          for (; t > i8; ) t & i5 && (i = i.add(s)), (s = s.double()), (t >>= i5);
                          return i;
                        },
                        precomputeWindow(e, i) {
                          let { windows: s, windowSize: r } = i4(i, t),
                            n = [],
                            o = e,
                            a = o;
                          for (let e = 0; e < s; e++) {
                            (a = o), n.push(a);
                            for (let e = 1; e < r; e++) (a = a.add(o)), n.push(a);
                            o = a.double();
                          }
                          return n;
                        },
                        wNAF(e, i, s) {
                          let { windows: r, windowSize: n } = i4(e, t),
                            o = u.ZERO,
                            a = u.BASE,
                            c = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            h = BigInt(e);
                          for (let e = 0; e < r; e++) {
                            let t = e * n,
                              r = Number(s & c);
                            (s >>= h), r > n && ((r -= l), (s += i5));
                            let p = t + Math.abs(r) - 1,
                              u = e % 2 != 0,
                              d = r < 0;
                            0 === r ? (a = a.add(i3(u, i[t]))) : (o = o.add(i3(d, i[p])));
                          }
                          return { p: o, f: a };
                        },
                        wNAFUnsafe(e, i, s, r = u.ZERO) {
                          let { windows: n, windowSize: o } = i4(e, t),
                            a = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < n; e++) {
                            let t = e * o;
                            if (s === i8) break;
                            let n = Number(s & a);
                            if (((s >>= l), n > o && ((n -= c), (s += i5)), 0 === n)) continue;
                            let h = i[t + Math.abs(n) - 1];
                            n < 0 && (h = h.negate()), (r = r.add(h));
                          }
                          return r;
                        },
                        getPrecomputes(e, t, i) {
                          let s = i9.get(t);
                          return (
                            s || ((s = this.precomputeWindow(t, e)), 1 !== e && i9.set(t, i(s))), s
                          );
                        },
                        wNAFCached(e, t, i) {
                          let s = se(e);
                          return this.wNAF(s, this.getPrecomputes(s, e, i), t);
                        },
                        wNAFCachedUnsafe(e, t, i, s) {
                          let r = se(e);
                          return 1 === r
                            ? this.unsafeLadder(e, t, s)
                            : this.wNAFUnsafe(r, this.getPrecomputes(r, e, i), t, s);
                        },
                        setWindowSize(e, i) {
                          i6(i, t), i7.set(e, i), i9.delete(e);
                        },
                      });
                  return {
                    CURVE: i,
                    ProjectivePoint: u,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: a,
                    isWithinCurveOrder: function (e) {
                      return iC(e, sy, i.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, s) {
                    let r = t.toAffine(),
                      n = i.toBytes(r.x);
                    return (
                      ig('isCompressed', s),
                      s
                        ? iA(Uint8Array.from([t.hasEvenY() ? 2 : 3]), n)
                        : iA(Uint8Array.from([4]), n, i.toBytes(r.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      s = e[0],
                      o = e.subarray(1);
                    if (t === r && (2 === s || 3 === s)) {
                      let e;
                      let t = iP(o);
                      if (!iC(t, sy, i.ORDER)) throw Error('Point is not on curve');
                      let r = l(t);
                      try {
                        e = i.sqrt(r);
                      } catch (e) {
                        throw Error(
                          'Point is not on curve' + (e instanceof Error ? ': ' + e.message : '')
                        );
                      }
                      return ((1 & s) == 1) != ((e & sy) === sy) && (e = i.neg(e)), { x: t, y: e };
                    }
                    if (t === n && 4 === s)
                      return {
                        x: i.fromBytes(o.subarray(0, i.BYTES)),
                        y: i.fromBytes(o.subarray(i.BYTES, 2 * i.BYTES)),
                      };
                    throw Error(
                      'invalid Point, expected length of ' +
                        r +
                        ', or uncompressed ' +
                        n +
                        ', got ' +
                        t
                    );
                  },
                }),
                p = (e) => im(iS(e, t.nByteLength)),
                u = (e, t, i) => iP(e.slice(t, i));
              class d {
                constructor(e, t, i) {
                  (this.r = e), (this.s = t), (this.recovery = i), this.assertValidity();
                }
                static fromCompact(e) {
                  let i = t.nByteLength;
                  return new d(u((e = ix('compactSignature', e, 2 * i)), 0, i), u(e, i, 2 * i));
                }
                static fromDER(e) {
                  let { r: t, s: i } = sg.toSig(ix('DER', e));
                  return new d(t, i);
                }
                assertValidity() {
                  iN('r', this.r, sy, s), iN('s', this.s, sy, s);
                }
                addRecoveryBit(e) {
                  return new d(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: r, s: n, recovery: c } = this,
                    l = y(ix('msgHash', e));
                  if (null == c || ![0, 1, 2, 3].includes(c)) throw Error('recovery id invalid');
                  let h = 2 === c || 3 === c ? r + t.n : r;
                  if (h >= i.ORDER) throw Error('recovery id 2 or 3 invalid');
                  let u = (1 & c) == 0 ? '02' : '03',
                    d = a.fromHex(u + p(h)),
                    g = iY(h, s),
                    f = o(-l * g),
                    m = o(n * g),
                    w = a.BASE.multiplyAndAddUnsafe(d, f, m);
                  if (!w) throw Error('point at infinify');
                  return w.assertValidity(), w;
                }
                hasHighS() {
                  return this.s > s >> sy;
                }
                normalizeS() {
                  return this.hasHighS() ? new d(this.r, o(-this.s), this.recovery) : this;
                }
                toDERRawBytes() {
                  return iI(this.toDERHex());
                }
                toDERHex() {
                  return sg.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return iI(this.toCompactHex());
                }
                toCompactHex() {
                  return p(this.r) + p(this.s);
                }
              }
              function g(e) {
                let t = iu(e),
                  i = 'string' == typeof e,
                  s = (t || i) && e.length;
                return t ? s === r || s === n : i ? s === 2 * r || s === 2 * n : e instanceof a;
              }
              let f =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error('input is too large');
                    let i = iP(e),
                      s = 8 * e.length - t.nBitLength;
                    return s > 0 ? i >> BigInt(s) : i;
                  },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return o(f(e));
                  },
                m = iq(t.nBitLength);
              function w(e) {
                return iN('num < 2^' + t.nBitLength, e, sf, m), iS(e, t.nByteLength);
              }
              let b = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                a.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return a.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, i = !0) {
                    if (g(e)) throw Error('first arg must be private key');
                    if (!g(t)) throw Error('second arg must be public key');
                    return a.fromHex(t).multiply(c(e)).toRawBytes(i);
                  },
                  sign: function (e, r, n = b) {
                    let { seed: l, k2sig: p } = (function (e, r, n = b) {
                      if (['recovered', 'canonical'].some((e) => e in n))
                        throw Error('sign() legacy options not supported');
                      let { hash: l, randomBytes: p } = t,
                        { lowS: u, prehash: g, extraEntropy: m } = n;
                      null == u && (u = !0),
                        (e = ix('msgHash', e)),
                        sh(n),
                        g && (e = ix('prehashed msgHash', l(e)));
                      let v = y(e),
                        E = c(r),
                        I = [w(E), w(v)];
                      if (null != m && !1 !== m) {
                        let e = !0 === m ? p(i.BYTES) : m;
                        I.push(ix('extraEntropy', e));
                      }
                      return {
                        seed: iA(...I),
                        k2sig: function (e) {
                          var t;
                          let i = f(e);
                          if (!h(i)) return;
                          let r = iY(i, s),
                            n = a.BASE.multiply(i).toAffine(),
                            c = o(n.x);
                          if (c === sf) return;
                          let l = o(r * o(v + c * E));
                          if (l === sf) return;
                          let p = (2 * (n.x !== c)) | Number(n.y & sy),
                            g = l;
                          return (
                            u && l > s >> sy && ((g = (t = l) > s >> sy ? o(-t) : t), (p ^= 1)),
                            new d(c, g, p)
                          );
                        },
                      };
                    })(e, r, n);
                    return iD(t.hash.outputLen, t.nByteLength, t.hmac)(l, p);
                  },
                  verify: function (e, i, r, n = v) {
                    let c, l;
                    (i = ix('msgHash', i)), (r = ix('publicKey', r));
                    let { lowS: h, prehash: p, format: u } = n;
                    if ((sh(n), 'strict' in n)) throw Error('options.strict was renamed to lowS');
                    if (void 0 !== u && 'compact' !== u && 'der' !== u)
                      throw Error('format must be compact or der');
                    let g = 'string' == typeof e || iu(e),
                      f =
                        !g &&
                        !u &&
                        'object' == typeof e &&
                        null !== e &&
                        'bigint' == typeof e.r &&
                        'bigint' == typeof e.s;
                    if (!g && !f)
                      throw Error(
                        'invalid signature, expected Uint8Array, hex string or Signature instance'
                      );
                    try {
                      if ((f && (c = new d(e.r, e.s)), g)) {
                        try {
                          'compact' !== u && (c = d.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof sg.Err)) throw e;
                        }
                        c || 'der' === u || (c = d.fromCompact(e));
                      }
                      l = a.fromHex(r);
                    } catch {
                      return !1;
                    }
                    if (!c || (h && c.hasHighS())) return !1;
                    p && (i = t.hash(i));
                    let { r: m, s: w } = c,
                      b = y(i),
                      E = iY(w, s),
                      I = o(b * E),
                      P = o(m * E),
                      _ = a.BASE.multiplyAndAddUnsafe(l, I, P)?.toAffine();
                    return !!_ && o(_.x) === m;
                  },
                  ProjectivePoint: a,
                  Signature: d,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return c(e), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let e = i2(t.n);
                      return (function (e, t, i = !1) {
                        let s = e.length,
                          r = i1(t),
                          n = i2(t);
                        if (s < 16 || s < n || s > 1024)
                          throw Error('expected ' + n + '-1024 bytes of input, got ' + s);
                        let o = iJ(i ? i_(e) : iP(e), t - iB) + iB;
                        return i ? iO(o, r) : iS(o, r);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = a.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...i) =>
                t9(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let i = 0; i < e.length; i++) {
                      let s = e[i];
                      eD(s), (t += s.length);
                    }
                    let i = new Uint8Array(t);
                    for (let t = 0, s = 0; t < e.length; t++) {
                      let r = e[t];
                      i.set(r, s), (s += r.length);
                    }
                    return i;
                  })(...i)
                ),
              randomBytes: e0,
            });
          return { ...i(t), create: i };
        })(
          {
            a: sw.create(BigInt('-3')),
            b: BigInt('0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b'),
            Fp: sw,
            n: BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551'),
            Gx: BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'),
            Gy: BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'),
            h: BigInt(1),
            lowS: !1,
          },
          ic
        ),
        sv = 'base10',
        sE = 'base16',
        sI = 'base64pad',
        sP = 'base64url',
        s_ = 'utf8';
      function sS() {
        return G(e0(32), sE);
      }
      function sO(e) {
        return G(ic(F(e, sE)), sE);
      }
      function sx(e) {
        return G(ic(F(e, s_)), sE);
      }
      function sA(e) {
        return Number(G(e, sv));
      }
      function sR(e) {
        return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
      function sC(e) {
        let t = e.replace(/-/g, '+').replace(/_/g, '/'),
          i = (4 - (t.length % 4)) % 4;
        return t + '='.repeat(i);
      }
      function sN(e) {
        if (2 === sA(e.type)) return G(L([e.type, e.sealed]), sI);
        if (1 === sA(e.type)) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return G(L([e.type, e.senderPublicKey, e.iv, e.sealed]), sI);
        }
        return G(L([e.type, e.iv, e.sealed]), sI);
      }
      function sT(e) {
        let t = F((e.encoding || sI) === sP ? sC(e.encoded) : e.encoded, sI),
          i = t.slice(0, 1);
        if (1 === sA(i)) {
          let e = t.slice(1, 33),
            s = t.slice(33, 45);
          return { type: i, sealed: t.slice(45), iv: s, senderPublicKey: e };
        }
        if (2 === sA(i)) return { type: i, sealed: t.slice(1), iv: e0(12) };
        let s = t.slice(1, 13);
        return { type: i, sealed: t.slice(13), iv: s };
      }
      function sq(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > 'u') throw Error('missing sender public key');
          if (typeof e?.receiverPublicKey > 'u') throw Error('missing receiver public key');
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function s$(e) {
        return (
          1 === e.type &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function sj(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function sD(e) {
        let t = J.CG[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function sk(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = e$(e);
          null != t && t.includes('wc:') && (e = t);
        }
        let i = (e = (e = e.includes('wc://') ? e.replace('wc://', '') : e).includes('wc:')
            ? e.replace('wc:', '')
            : e).indexOf(':'),
          s = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
          r = e.substring(0, i),
          n = e.substring(i + 1, s).split('@'),
          o = new URLSearchParams('u' > typeof s ? e.substring(s) : ''),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let c = 'string' == typeof a.methods ? a.methods.split(',') : void 0;
        return {
          protocol: r,
          topic: (t = n[0]).startsWith('//') ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = '-') {
            let i = {},
              s = 'relay' + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(s)) {
                  let r = t.replace(s, ''),
                    n = e[t];
                  i[r] = n;
                }
              }),
              i
            );
          })(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function sU(e) {
        let t = new URLSearchParams(),
          i = (function (e, t = '-') {
            let i = {};
            return (
              Object.keys(e).forEach((s) => {
                e[s] && (i['relay' + t + s] = e[s]);
              }),
              i
            );
          })(e.relay);
        Object.keys(i)
          .sort()
          .forEach((e) => {
            t.set(e, i[e]);
          }),
          t.set('symKey', e.symKey),
          e.expiryTimestamp && t.set('expiryTimestamp', e.expiryTimestamp.toString()),
          e.methods && t.set('methods', e.methods.join(','));
        let s = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${s}`;
      }
      function sM(e, t, i) {
        return `${e}?wc_ev=${i}&topic=${t}`;
      }
      var sL = Object.defineProperty,
        sz = Object.defineProperties,
        sB = Object.getOwnPropertyDescriptors,
        sH = Object.getOwnPropertySymbols,
        sK = Object.prototype.hasOwnProperty,
        sV = Object.prototype.propertyIsEnumerable,
        sF = (e, t, i) =>
          t in e
            ? sL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sG = (e, t) => {
          for (var i in t || (t = {})) sK.call(t, i) && sF(e, i, t[i]);
          if (sH) for (var i of sH(t)) sV.call(t, i) && sF(e, i, t[i]);
          return e;
        },
        sJ = (e, t) => sz(e, sB(t));
      function sW(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [i, s] = e.split(':');
            t.push(`${i}:${s}`);
          }),
          t
        );
      }
      function sQ(e) {
        return e.includes(':');
      }
      function sY(e) {
        return sQ(e) ? e.split(':')[0] : e;
      }
      function sZ(e, t) {
        let i = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              var i;
              let [s, r] = e.split(':');
              t[s] || (t[s] = { accounts: [], chains: [], events: [], methods: [] }),
                t[s].accounts.push(e),
                null == (i = t[s].chains) || i.push(`${s}:${r}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace('did:pkh:', ''))));
        for (let [t, s] of Object.entries(i))
          s.methods ? (s.methods = eA(s.methods, e)) : (s.methods = e),
            (s.events = ['chainChanged', 'accountsChanged']);
        return i;
      }
      let sX = {
          INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
          INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
          INVALID_UPDATE_REQUEST: { message: 'Invalid update request.', code: 1003 },
          INVALID_EXTEND_REQUEST: { message: 'Invalid extend request.', code: 1004 },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: 'Invalid session settle request.',
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
          UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: { message: 'Unauthorized update request.', code: 3003 },
          UNAUTHORIZED_EXTEND_REQUEST: { message: 'Unauthorized extend request.', code: 3004 },
          USER_REJECTED: { message: 'User rejected.', code: 5e3 },
          USER_REJECTED_CHAINS: { message: 'User rejected chains.', code: 5001 },
          USER_REJECTED_METHODS: { message: 'User rejected methods.', code: 5002 },
          USER_REJECTED_EVENTS: { message: 'User rejected events.', code: 5003 },
          UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
          UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
          UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
          UNSUPPORTED_ACCOUNTS: { message: 'Unsupported accounts.', code: 5103 },
          UNSUPPORTED_NAMESPACE_KEY: { message: 'Unsupported namespace key.', code: 5104 },
          USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
          SESSION_SETTLEMENT_FAILED: { message: 'Session settlement failed.', code: 7e3 },
          WC_METHOD_UNSUPPORTED: { message: 'Unsupported wc_ method.', code: 10001 },
        },
        s0 = {
          NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
          NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
          RESTORE_WILL_OVERRIDE: { message: 'Restore will override.', code: 3 },
          RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
          MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
          EXPIRED: { message: 'Expired.', code: 6 },
          UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
          MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
          NON_CONFORMING_NAMESPACES: { message: 'Non conforming namespaces.', code: 9 },
        };
      function s1(e, t) {
        let { message: i, code: s } = s0[e];
        return { message: t ? `${i} ${t}` : i, code: s };
      }
      function s2(e, t) {
        let { message: i, code: s } = sX[e];
        return { message: t ? `${i} ${t}` : i, code: s };
      }
      function s8(e, t) {
        return !!Array.isArray(e) && (!('u' > typeof t) || !e.length || e.every(t));
      }
      function s5(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function s3(e) {
        return typeof e > 'u';
      }
      function s6(e, t) {
        return !!(t && s3(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function s4(e, t) {
        return !!(t && s3(e)) || ('number' == typeof e && !isNaN(e));
      }
      function s9(e) {
        return !!(s6(e, !1) && e.includes(':')) && 2 === e.split(':').length;
      }
      function s7(e) {
        let t = !0;
        return s8(e) ? e.length && (t = e.every((e) => s6(e, !1))) : (t = !1), t;
      }
      function re(e, t) {
        let i = null;
        return (
          Object.values(e).forEach((e) => {
            var s;
            let r;
            if (i) return;
            let n =
              ((s = `${t}, namespace`),
              (r = null),
              s7(e?.methods)
                ? s7(e?.events) ||
                  (r = s2(
                    'UNSUPPORTED_EVENTS',
                    `${s}, events should be an array of strings or empty array for no events`
                  ))
                : (r = s2(
                    'UNSUPPORTED_METHODS',
                    `${s}, methods should be an array of strings or empty array for no methods`
                  )),
              r);
            n && (i = n);
          }),
          i
        );
      }
      function rt(e, t) {
        let i = null;
        if (e && s5(e)) {
          let s;
          let r = re(e, t);
          r && (i = r);
          let n =
            ((s = null),
            Object.values(e).forEach((e) => {
              var i, r;
              let n;
              if (s) return;
              let o =
                ((i = e?.accounts),
                (r = `${t} namespace`),
                (n = null),
                s8(i)
                  ? i.forEach((e) => {
                      n ||
                        (function (e) {
                          if (s6(e, !1) && e.includes(':')) {
                            let t = e.split(':');
                            if (3 === t.length) {
                              let e = t[0] + ':' + t[1];
                              return !!t[2] && s9(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = s2(
                          'UNSUPPORTED_ACCOUNTS',
                          `${r}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = s2(
                      'UNSUPPORTED_ACCOUNTS',
                      `${r}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (s = o);
            }),
            s);
          n && (i = n);
        } else i = s1('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return i;
      }
      function ri(e) {
        return s6(e.protocol, !0);
      }
      function rs(e) {
        return 'u' > typeof e;
      }
      function rr(e, t) {
        return !(
          !s9(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...sW(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function rn(e, t, i) {
        let s = null,
          r = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                var s;
                i.includes(':')
                  ? (t[i] = e[i])
                  : null == (s = e[i].chains) ||
                    s.forEach((s) => {
                      t[s] = { methods: e[i].methods, events: e[i].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                if (i.includes(':')) t[i] = e[i];
                else {
                  let s = sW(e[i].accounts);
                  s?.forEach((s) => {
                    t[s] = {
                      accounts: e[i].accounts.filter((e) => e.includes(`${s}:`)),
                      methods: e[i].methods,
                      events: e[i].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(r),
          a = Object.keys(n),
          c = ro(Object.keys(e)),
          l = ro(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (s = s1(
              'NON_CONFORMING_NAMESPACES',
              `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          ew(o, a) ||
            (s = s1(
              'NON_CONFORMING_NAMESPACES',
              `${i} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || s) return;
            let r = sW(t[e].accounts);
            r.includes(e) ||
              (s = s1(
                'NON_CONFORMING_NAMESPACES',
                `${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${r.toString()}`
              ));
          }),
          o.forEach((e) => {
            s ||
              (ew(r[e].methods, n[e].methods)
                ? ew(r[e].events, n[e].events) ||
                  (s = s1(
                    'NON_CONFORMING_NAMESPACES',
                    `${i} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (s = s1(
                    'NON_CONFORMING_NAMESPACES',
                    `${i} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          s
        );
      }
      function ro(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      function ra() {
        let e = eg();
        return new Promise((t) => {
          switch (e) {
            case eh.browser:
              t(ed() && navigator?.onLine);
              break;
            case eh.reactNative:
              t(rc());
              break;
            case eh.node:
            default:
              t(!0);
          }
        });
      }
      async function rc() {
        if (eu() && 'u' > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let rl = {};
      class rh {
        static get(e) {
          return rl[e];
        }
        static set(e, t) {
          rl[e] = t;
        }
        static delete(e) {
          delete rl[e];
        }
      }
      var rp = i(37486);
      class ru extends rp.H {
        constructor(e) {
          super();
        }
      }
      let rd = o.FIVE_SECONDS,
        rg = { pulse: 'heartbeat_pulse' };
      class rf extends ru {
        constructor(e) {
          super(e),
            (this.events = new s.EventEmitter()),
            (this.interval = rd),
            (this.interval = e?.interval || rd);
        }
        static async init(e) {
          let t = new rf(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(() => this.pulse(), (0, o.toMiliseconds)(this.interval));
        }
        pulse() {
          this.events.emit(rg.pulse);
        }
      }
      var ry = i(69610),
        rm = i(35180),
        rw = Object.defineProperty,
        rb = (e, t, i) =>
          t in e
            ? rw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        rv = (e, t, i) => rb(e, 'symbol' != typeof t ? t + '' : t, i);
      class rE extends rp.H {
        constructor(e) {
          super(), (this.opts = e), rv(this, 'protocol', 'wc'), rv(this, 'version', 2);
        }
      }
      var rI = Object.defineProperty,
        rP = (e, t, i) =>
          t in e
            ? rI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r_ = (e, t, i) => rP(e, 'symbol' != typeof t ? t + '' : t, i);
      class rS extends rp.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t), r_(this, 'records', new Map());
        }
      }
      class rO {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class rx extends rp.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class rA extends rp.H {
        constructor(e) {
          super();
        }
      }
      class rR {
        constructor(e, t, i, s) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      var rC = Object.defineProperty;
      class rN extends rp.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class rT extends rp.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class rq {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.store = i);
        }
      }
      class r$ {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class rj {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
        }
      }
      var rD = Object.defineProperty,
        rk = (e, t, i) =>
          t in e
            ? rD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        rU = (e, t, i) => rk(e, 'symbol' != typeof t ? t + '' : t, i);
      r();
      class rM {
        constructor(e) {
          (this.opts = e), rU(this, 'protocol', 'wc'), rU(this, 'version', 2);
        }
      }
      s.EventEmitter;
      class rL {
        constructor(e) {
          this.client = e;
        }
      }
      var rz = i(25476),
        rB = i(33137);
      class rH extends rB.IJsonRpcProvider {
        constructor(e) {
          super(e),
            (this.events = new s.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            (0, rB.formatJsonRpcRequest)(
              e.method,
              e.params || [],
              e.id || (0, rB.getBigIntRpcId)().toString()
            ),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (i, s) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                s(e);
              }
            this.events.on(`${e.id}`, (e) => {
              (0, rB.isJsonRpcError)(e) ? s(e.error) : i(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              s(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit('payload', e),
            (0, rB.isJsonRpcResponse)(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit('message', { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              'error',
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ''}`
              )
            ),
            this.events.emit('disconnect');
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            'string' == typeof e && (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit('connect'));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on('payload', (e) => this.onPayload(e)),
            this.connection.on('close', (e) => this.onClose(e)),
            this.connection.on('error', (e) => this.events.emit('error', e)),
            this.connection.on('register_error', (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      let rK = () =>
          'u' > typeof WebSocket ||
          ('u' > typeof i.g && 'u' > typeof i.g.WebSocket) ||
          ('u' > typeof window && 'u' > typeof window.WebSocket) ||
          ('u' > typeof self && 'u' > typeof self.WebSocket),
        rV = (e) => e.split('?')[0],
        rF =
          'u' > typeof WebSocket
            ? WebSocket
            : 'u' > typeof i.g && 'u' > typeof i.g.WebSocket
              ? i.g.WebSocket
              : 'u' > typeof window && 'u' > typeof window.WebSocket
                ? window.WebSocket
                : 'u' > typeof self && 'u' > typeof self.WebSocket
                  ? self.WebSocket
                  : i(79647);
      class rG {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new s.EventEmitter()),
            (this.registering = !1),
            !(0, rB.isWsUrl)(e))
          )
            throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          this.url = e;
        }
        get connected() {
          return 'u' > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > 'u') {
              t(Error('Connection already closed'));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > 'u' && (this.socket = await this.register());
          try {
            this.socket.send((0, rz.h)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!(0, rB.isWsUrl)(e))
            throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount('register_error') >= e ||
                this.events.listenerCount('open') >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once('register_error', (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once('open', () => {
                    if ((this.resetMaxListeners(), typeof this.socket > 'u'))
                      return t(Error('WebSocket connection is missing or invalid'));
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, i) => {
              let s = (0, rB.isReactNative)()
                  ? void 0
                  : { rejectUnauthorized: !(0, rB.isLocalhostUrl)(e) },
                r = new rF(e, [], s);
              rK()
                ? (r.onerror = (e) => {
                    i(this.emitError(e.error));
                  })
                : r.on('error', (e) => {
                    i(this.emitError(e));
                  }),
                (r.onopen = () => {
                  this.onOpen(r), t(r);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit('open');
        }
        onClose(e) {
          (this.socket = void 0), (this.registering = !1), this.events.emit('close', e);
        }
        onPayload(e) {
          if (typeof e.data > 'u') return;
          let t = 'string' == typeof e.data ? (0, rz.j)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          let i = this.parseError(t),
            s = i.message || i.toString(),
            r = (0, rB.formatJsonRpcError)(e, s);
          this.events.emit('payload', r);
        }
        parseError(e, t = this.url) {
          return (0, rB.parseConnectionError)(e, rV(t), 'WS');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(e?.message || `WebSocket connection failed for host: ${rV(this.url)}`)
          );
          return this.events.emit('register_error', t), t;
        }
      }
      var rJ = i(50887).Buffer,
        rW = i(40459);
      let rQ = 'core',
        rY = `wc@2:${rQ}:`,
        rZ = { logger: 'error' },
        rX = { database: ':memory:' },
        r0 = 'client_ed25519_seed',
        r1 = o.ONE_DAY,
        r2 = o.SIX_HOURS,
        r8 = 'wss://relay.walletconnect.org',
        r5 = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        r3 = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        r6 = '2.19.2',
        r4 = { link_mode: 'link_mode', relay: 'relay' },
        r9 = { inbound: 'inbound', outbound: 'outbound' },
        r7 = 'WALLETCONNECT_LINK_MODE_APPS',
        ne = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        nt =
          (o.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        ni = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        ns = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        nr = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        nn = 'https://verify.walletconnect.org',
        no = `${nn}/v3`,
        na = ['https://verify.walletconnect.com', nn],
        nc = {
          pairing_started: 'pairing_started',
          pairing_uri_validation_success: 'pairing_uri_validation_success',
          pairing_uri_not_expired: 'pairing_uri_not_expired',
          store_new_pairing: 'store_new_pairing',
          subscribing_pairing_topic: 'subscribing_pairing_topic',
          subscribe_pairing_topic_success: 'subscribe_pairing_topic_success',
          existing_pairing: 'existing_pairing',
          pairing_not_expired: 'pairing_not_expired',
          emit_inactive_pairing: 'emit_inactive_pairing',
          emit_session_proposal: 'emit_session_proposal',
        },
        nl = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
          proposal_listener_not_found: 'proposal_listener_not_found',
        },
        nh = {
          session_approve_started: 'session_approve_started',
          session_namespaces_validation_success: 'session_namespaces_validation_success',
          subscribing_session_topic: 'subscribing_session_topic',
          subscribe_session_topic_success: 'subscribe_session_topic_success',
          publishing_session_approve: 'publishing_session_approve',
          session_approve_publish_success: 'session_approve_publish_success',
          store_session: 'store_session',
          publishing_session_settle: 'publishing_session_settle',
          session_settle_publish_success: 'session_settle_publish_success',
        },
        np = {
          no_internet_connection: 'no_internet_connection',
          proposal_expired: 'proposal_expired',
          subscribe_session_topic_failure: 'subscribe_session_topic_failure',
          session_approve_publish_failure: 'session_approve_publish_failure',
          session_settle_publish_failure: 'session_settle_publish_failure',
          session_approve_namespace_validation_failure:
            'session_approve_namespace_validation_failure',
          proposal_not_found: 'proposal_not_found',
        },
        nu = {
          authenticated_session_approve_started: 'authenticated_session_approve_started',
          create_authenticated_session_topic: 'create_authenticated_session_topic',
          cacaos_verified: 'cacaos_verified',
          store_authenticated_session: 'store_authenticated_session',
          subscribing_authenticated_session_topic: 'subscribing_authenticated_session_topic',
          subscribe_authenticated_session_topic_success:
            'subscribe_authenticated_session_topic_success',
          publishing_authenticated_session_approve: 'publishing_authenticated_session_approve',
        },
        nd = {
          no_internet_connection: 'no_internet_connection',
          invalid_cacao: 'invalid_cacao',
          subscribe_authenticated_session_topic_failure:
            'subscribe_authenticated_session_topic_failure',
          authenticated_session_approve_publish_failure:
            'authenticated_session_approve_publish_failure',
          authenticated_session_pending_request_not_found:
            'authenticated_session_pending_request_not_found',
        };
      var ng = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var i = new Uint8Array(256), s = 0; s < i.length; s++) i[s] = 255;
        for (var r = 0; r < e.length; r++) {
          var n = e.charAt(r),
            o = n.charCodeAt(0);
          if (255 !== i[o]) throw TypeError(n + ' is ambiguous');
          i[o] = r;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function p(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var s = 0, r = 0; e[t] === c; ) s++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = i[e.charCodeAt(t)];
              if (255 === h) return;
              for (var p = 0, u = n - 1; (0 !== h || p < r) && -1 !== u; u--, p++)
                (h += (a * o[u]) >>> 0), (o[u] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (r = p), t++;
            }
            if (' ' !== e[t]) {
              for (var d = n - r; d !== n && 0 === o[d]; ) d++;
              for (var g = new Uint8Array(s + (n - d)), f = s; d !== n; ) g[f++] = o[d++];
              return g;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var i = 0, s = 0, r = 0, n = t.length; r !== n && 0 === t[r]; ) r++, i++;
            for (var o = ((n - r) * h + 1) >>> 0, l = new Uint8Array(o); r !== n; ) {
              for (var p = t[r], u = 0, d = o - 1; (0 !== p || u < s) && -1 !== d; d--, u++)
                (p += (256 * l[d]) >>> 0), (l[d] = p % a >>> 0), (p = (p / a) >>> 0);
              if (0 !== p) throw Error('Non-zero carry');
              (s = u), r++;
            }
            for (var g = o - s; g !== o && 0 === l[g]; ) g++;
            for (var f = c.repeat(i); g < o; ++g) f += e.charAt(l[g]);
            return f;
          },
          decodeUnsafe: p,
          decode: function (e) {
            var i = p(e);
            if (i) return i;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let nf = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        ny = (e) => new TextEncoder().encode(e),
        nm = (e) => new TextDecoder().decode(e);
      class nw {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class nb {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return nE(this, e);
        }
      }
      class nv {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return nE(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let nE = (e, t) =>
        new nv({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class nI {
        constructor(e, t, i, s) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = s),
            (this.encoder = new nw(e, t, i)),
            (this.decoder = new nb(e, t, s));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let nP = ({ name: e, prefix: t, encode: i, decode: s }) => new nI(e, t, i, s),
        n_ = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: s, decode: r } = ng(i, t);
          return nP({ prefix: e, name: t, encode: s, decode: (e) => nf(r(e)) });
        },
        nS = (e, t, i, s) => {
          let r = {};
          for (let e = 0; e < t.length; ++e) r[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = r[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${s} character`);
            (c = (c << i) | n), (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= i || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        nO = (e, t, i) => {
          let s = '=' === t[t.length - 1],
            r = (1 << i) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let s = 0; s < e.length; ++s)
            for (a = (a << 8) | e[s], o += 8; o > i; ) (o -= i), (n += t[r & (a >> o)]);
          if ((o && (n += t[r & (a << (i - o))]), s)) for (; (n.length * i) & 7; ) n += '=';
          return n;
        },
        nx = ({ name: e, prefix: t, bitsPerChar: i, alphabet: s }) =>
          nP({ prefix: t, name: e, encode: (e) => nO(e, s, i), decode: (t) => nS(t, s, i, e) });
      var nA = Object.freeze({
          __proto__: null,
          identity: nP({
            prefix: '\0',
            name: 'identity',
            encode: (e) => nm(e),
            decode: (e) => ny(e),
          }),
        }),
        nR = Object.freeze({
          __proto__: null,
          base2: nx({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        nC = Object.freeze({
          __proto__: null,
          base8: nx({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        nN = Object.freeze({
          __proto__: null,
          base10: n_({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        nT = Object.freeze({
          __proto__: null,
          base16: nx({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: nx({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let nq = nx({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        n$ = nx({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        nj = nx({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        nD = nx({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        nk = nx({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        nU = nx({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        nM = nx({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var nL = Object.freeze({
          __proto__: null,
          base32: nq,
          base32upper: n$,
          base32pad: nj,
          base32padupper: nD,
          base32hex: nk,
          base32hexupper: nU,
          base32hexpad: nM,
          base32hexpadupper: nx({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: nx({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        nz = Object.freeze({
          __proto__: null,
          base36: n_({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: n_({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        nB = Object.freeze({
          __proto__: null,
          base58btc: n_({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: n_({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let nH = nx({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        nK = nx({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var nV = Object.freeze({
        __proto__: null,
        base64: nH,
        base64pad: nK,
        base64url: nx({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: nx({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let nF = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        nG = nF.reduce((e, t, i) => ((e[i] = t), e), []),
        nJ = nF.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var nW = Object.freeze({
        __proto__: null,
        base256emoji: nP({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += nG[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = nJ[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function nQ(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var s = i; e >= 0x80000000; ) (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (nQ.bytes = i - s + 1), t;
      }
      function nY(e, t) {
        var i,
          s = 0,
          t = t || 0,
          r = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((nY.bytes = 0), RangeError('Could not decode varint'));
          (i = e[n++]), (s += r < 28 ? (127 & i) << r : (127 & i) * Math.pow(2, r)), (r += 7);
        } while (i >= 128);
        return (nY.bytes = n - t), s;
      }
      var nZ = {
        encode: nQ,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
              ? 2
              : e < 2097152
                ? 3
                : e < 0x10000000
                  ? 4
                  : e < 0x800000000
                    ? 5
                    : e < 0x40000000000
                      ? 6
                      : e < 0x2000000000000
                        ? 7
                        : e < 0x100000000000000
                          ? 8
                          : e < 0x8000000000000000
                            ? 9
                            : 10;
        },
      };
      let nX = (e, t, i = 0) => (nZ.encode(e, t, i), t),
        n0 = (e) => nZ.encodingLength(e),
        n1 = (e, t) => {
          let i = t.byteLength,
            s = n0(e),
            r = s + n0(i),
            n = new Uint8Array(r + i);
          return nX(e, n, 0), nX(i, n, s), n.set(t, r), new n2(e, i, t, n);
        };
      class n2 {
        constructor(e, t, i, s) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = s);
        }
      }
      let n8 = ({ name: e, code: t, encode: i }) => new n5(e, t, i);
      class n5 {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? n1(this.code, t) : t.then((e) => n1(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let n3 = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var n6 = Object.freeze({
          __proto__: null,
          sha256: n8({ name: 'sha2-256', code: 18, encode: n3('SHA-256') }),
          sha512: n8({ name: 'sha2-512', code: 19, encode: n3('SHA-512') }),
        }),
        n4 = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: nf, digest: (e) => n1(0, nf(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let n9 = { ...nA, ...nR, ...nC, ...nN, ...nT, ...nL, ...nz, ...nB, ...nV, ...nW };
      function n7(e, t, i, s) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: s },
        };
      }
      ({ ...n6, ...n4 });
      let oe = n7(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        ot = n7(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        oi = { utf8: oe, 'utf-8': oe, hex: n9.base16, latin1: ot, ascii: ot, binary: ot, ...n9 };
      var os = Object.defineProperty,
        or = (e, t, i) =>
          t in e
            ? os(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        on = (e, t, i) => or(e, 'symbol' != typeof t ? t + '' : t, i);
      class oo {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            on(this, 'keychain', new Map()),
            on(this, 'name', 'keychain'),
            on(this, 'version', '0.3'),
            on(this, 'initialized', !1),
            on(this, 'storagePrefix', rY),
            on(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            on(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            on(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            on(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = s1('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            on(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, rm.U5)(t, this.name));
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, eb(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? ev(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var oa = Object.defineProperty,
        oc = (e, t, i) =>
          t in e
            ? oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ol = (e, t, i) => oc(e, 'symbol' != typeof t ? t + '' : t, i);
      class oh {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            ol(this, 'name', 'crypto'),
            ol(this, 'keychain'),
            ol(this, 'randomSessionIdentifier', sS()),
            ol(this, 'initialized', !1),
            ol(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            ol(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            ol(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = U.TZ(e);
              return U.UF(t.publicKey);
            }),
            ol(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (function () {
                let e = sl.utils.randomPrivateKey(),
                  t = sl.getPublicKey(e);
                return { privateKey: G(e, sE), publicKey: G(t, sE) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            ol(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = U.TZ(t),
                s = this.randomSessionIdentifier;
              return await U.FA(s, e, r1, i);
            }),
            ol(this, 'generateSharedKey', (e, t, i) => {
              var s;
              this.isInitialized();
              let r =
                ((s = this.getPrivateKey(e)),
                G(it(ic, sl.getSharedSecret(F(s, sE), F(t, sE)), void 0, void 0, 32), sE));
              return this.setSymKey(r, i);
            }),
            ol(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let i = t || sO(e);
              return await this.keychain.set(i, e), i;
            }),
            ol(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            ol(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            ol(this, 'encode', async (e, t, i) => {
              this.isInitialized();
              let s = sq(i),
                r = (0, rz.h)(t);
              if (2 === s.type)
                return (function (e, t) {
                  let i = F('2', sv),
                    s = e0(12),
                    r = sN({ type: i, sealed: F(e, s_), iv: s });
                  return t === sP ? sR(r) : r;
                })(r, i?.encoding);
              if (s$(s)) {
                let t = s.senderPublicKey,
                  i = s.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = s;
              return (function (e) {
                var t;
                let i = ((t = 'u' > typeof e.type ? e.type : 0), F(`${t}`, sv));
                if (1 === sA(i) && typeof e.senderPublicKey > 'u')
                  throw Error('Missing sender public key for type 1 envelope');
                let s = 'u' > typeof e.senderPublicKey ? F(e.senderPublicKey, sE) : void 0,
                  r = 'u' > typeof e.iv ? F(e.iv, sE) : e0(12),
                  n = sN({
                    type: i,
                    sealed: t6(F(e.symKey, sE), r).encrypt(F(e.message, s_)),
                    iv: r,
                    senderPublicKey: s,
                  });
                return e.encoding === sP ? sR(n) : n;
              })({ type: o, symKey: n, message: r, senderPublicKey: a, encoding: i?.encoding });
            }),
            ol(this, 'decode', async (e, t, i) => {
              this.isInitialized();
              let s = (function (e, t) {
                let i = sT({ encoded: e, encoding: t?.encoding });
                return sq({
                  type: sA(i.type),
                  senderPublicKey:
                    'u' > typeof i.senderPublicKey ? G(i.senderPublicKey, sE) : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (2 === s.type) {
                let e = (function (e, t) {
                  let { sealed: i } = sT({ encoded: e, encoding: t });
                  return G(i, s_);
                })(t, i?.encoding);
                return (0, rz.j)(e);
              }
              if (s$(s)) {
                let t = s.receiverPublicKey,
                  i = s.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let s = this.getSymKey(e),
                  r = (function (e) {
                    let t = F(e.symKey, sE),
                      { sealed: i, iv: s } = sT({ encoded: e.encoded, encoding: e.encoding }),
                      r = t6(t, s).decrypt(i);
                    if (null === r) throw Error('Failed to decrypt');
                    return G(r, s_);
                  })({ symKey: s, encoded: t, encoding: i?.encoding });
                return (0, rz.j)(r);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            ol(this, 'getPayloadType', (e, t = sI) => sA(sT({ encoded: e, encoding: t }).type)),
            ol(this, 'getPayloadSenderPublicKey', (e, t = sI) => {
              let i = sT({ encoded: e, encoding: t });
              return i.senderPublicKey ? G(i.senderPublicKey, sE) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, rm.U5)(t, this.name)),
            (this.keychain = i || new oo(this.core, this.logger));
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = '';
          try {
            e = this.keychain.get(r0);
          } catch {
            (e = sS()), await this.keychain.set(r0, e);
          }
          return (function (e, t = 'utf8') {
            let i = oi[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ('utf8' === t || 'utf-8' === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, 'utf8')
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var op = Object.defineProperty,
        ou = Object.defineProperties,
        od = Object.getOwnPropertyDescriptors,
        og = Object.getOwnPropertySymbols,
        of = Object.prototype.hasOwnProperty,
        oy = Object.prototype.propertyIsEnumerable,
        om = (e, t, i) =>
          t in e
            ? op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ow = (e, t) => {
          for (var i in t || (t = {})) of.call(t, i) && om(e, i, t[i]);
          if (og) for (var i of og(t)) oy.call(t, i) && om(e, i, t[i]);
          return e;
        },
        ob = (e, t) => ou(e, od(t)),
        ov = (e, t, i) => om(e, 'symbol' != typeof t ? t + '' : t, i);
      class oE extends rO {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            ov(this, 'messages', new Map()),
            ov(this, 'messagesWithoutClientAck', new Map()),
            ov(this, 'name', 'messages'),
            ov(this, 'version', '0.3'),
            ov(this, 'initialized', !1),
            ov(this, 'storagePrefix', rY),
            ov(this, 'init', async () => {
              if (!this.initialized) {
                this.logger.trace('Initialized');
                try {
                  let e = await this.getRelayerMessages();
                  'u' > typeof e && (this.messages = e);
                  let t = await this.getRelayerMessagesWithoutClientAck();
                  'u' > typeof t && (this.messagesWithoutClientAck = t),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                      type: 'method',
                      method: 'restore',
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            ov(this, 'set', async (e, t, i) => {
              this.isInitialized();
              let s = sx(t),
                r = this.messages.get(e);
              if ((typeof r > 'u' && (r = {}), 'u' > typeof r[s])) return s;
              if (((r[s] = t), this.messages.set(e, r), i === r9.inbound)) {
                let i = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, ob(ow({}, i), { [s]: t }));
              }
              return await this.persist(), s;
            }),
            ov(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            ov(this, 'getWithoutAck', (e) => {
              this.isInitialized();
              let t = {};
              for (let i of e) {
                let e = this.messagesWithoutClientAck.get(i) || {};
                t[i] = Object.values(e);
              }
              return t;
            }),
            ov(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[sx(t)])),
            ov(this, 'ack', async (e, t) => {
              this.isInitialized();
              let i = this.messagesWithoutClientAck.get(e);
              if (typeof i > 'u') return;
              let s = sx(t);
              delete i[s],
                0 === Object.keys(i).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, i),
                await this.persist();
            }),
            ov(this, 'del', async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = (0, rm.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            '//' +
            this.name +
            '_withoutClientAck'
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, eb(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(this.storageKeyWithoutClientAck, eb(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? ev(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
          return 'u' > typeof e ? ev(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var oI = Object.defineProperty,
        oP = Object.defineProperties,
        o_ = Object.getOwnPropertyDescriptors,
        oS = Object.getOwnPropertySymbols,
        oO = Object.prototype.hasOwnProperty,
        ox = Object.prototype.propertyIsEnumerable,
        oA = (e, t, i) =>
          t in e
            ? oI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        oR = (e, t) => {
          for (var i in t || (t = {})) oO.call(t, i) && oA(e, i, t[i]);
          if (oS) for (var i of oS(t)) ox.call(t, i) && oA(e, i, t[i]);
          return e;
        },
        oC = (e, t) => oP(e, o_(t)),
        oN = (e, t, i) => oA(e, 'symbol' != typeof t ? t + '' : t, i);
      class oT extends rx {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            oN(this, 'events', new s.EventEmitter()),
            oN(this, 'name', 'publisher'),
            oN(this, 'queue', new Map()),
            oN(this, 'publishTimeout', (0, o.toMiliseconds)(o.ONE_MINUTE)),
            oN(this, 'initialPublishTimeout', (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            oN(this, 'needsTransportRestart', !1),
            oN(this, 'publish', async (e, t, i) => {
              var s;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: i },
                });
              let r = i?.ttl || r2,
                n = sj(i),
                o = i?.prompt || !1,
                a = i?.tag || 0,
                c = i?.id || (0, rB.getBigIntRpcId)().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: r,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: i?.attestation,
                    tvf: i?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let s = new Promise(async (s) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(r5.publish, n),
                      s(l));
                  };
                  this.relayer.events.on(r5.publish, n);
                  let h = eI(
                    new Promise((s, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: r,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: i?.attestation,
                        tvf: i?.tvf,
                      })
                        .then(s)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(r5.publish, n);
                  } catch (e) {
                    this.queue.set(c, oC(oR({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: c, topic: e, message: t, opts: i },
                }),
                  await eI(s, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug('Failed to Publish Payload'),
                  this.logger.error(e),
                  null != (s = i?.internal) && s.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            oN(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            oN(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            oN(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            oN(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, rm.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, i, s, r;
          let {
              topic: n,
              message: o,
              ttl: a = r2,
              prompt: c,
              tag: l,
              id: h,
              attestation: p,
              tvf: u,
            } = e,
            d = {
              method: sD(sj().protocol).publish,
              params: oR({ topic: n, message: o, ttl: a, prompt: c, tag: l, attestation: p }, u),
              id: h,
            };
          s3(null == (t = d.params) ? void 0 : t.prompt) &&
            (null == (i = d.params) || delete i.prompt),
            s3(null == (s = d.params) ? void 0 : s.tag) && (null == (r = d.params) || delete r.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: d });
          let g = await this.relayer.request(d);
          return (
            this.relayer.events.emit(r5.publish, e),
            this.logger.debug('Successfully Published Payload'),
            g
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let i = e.attempt + 1;
            this.queue.set(t, oC(oR({}, e), { attempt: i }));
            let { topic: s, message: r, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`
            ),
              await this.rpcPublish(
                oC(oR({}, e), {
                  topic: s,
                  message: r,
                  ttl: n.ttl,
                  prompt: n.prompt,
                  tag: n.tag,
                  id: n.id,
                  attestation: o,
                  tvf: n.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(rg.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1), this.relayer.events.emit(r5.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(r5.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var oq = Object.defineProperty,
        o$ = (e, t, i) =>
          t in e
            ? oq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        oj = (e, t, i) => o$(e, 'symbol' != typeof t ? t + '' : t, i);
      class oD {
        constructor() {
          oj(this, 'map', new Map()),
            oj(this, 'set', (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            oj(this, 'get', (e) => this.map.get(e) || []),
            oj(this, 'exists', (e, t) => this.get(e).includes(t)),
            oj(this, 'delete', (e, t) => {
              if (typeof t > 'u') {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let s = i.filter((e) => e !== t);
              if (!s.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, s);
            }),
            oj(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var ok = Object.defineProperty,
        oU = Object.defineProperties,
        oM = Object.getOwnPropertyDescriptors,
        oL = Object.getOwnPropertySymbols,
        oz = Object.prototype.hasOwnProperty,
        oB = Object.prototype.propertyIsEnumerable,
        oH = (e, t, i) =>
          t in e
            ? ok(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        oK = (e, t) => {
          for (var i in t || (t = {})) oz.call(t, i) && oH(e, i, t[i]);
          if (oL) for (var i of oL(t)) oB.call(t, i) && oH(e, i, t[i]);
          return e;
        },
        oV = (e, t) => oU(e, oM(t)),
        oF = (e, t, i) => oH(e, 'symbol' != typeof t ? t + '' : t, i);
      class oG extends rN {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            oF(this, 'subscriptions', new Map()),
            oF(this, 'topicMap', new oD()),
            oF(this, 'events', new s.EventEmitter()),
            oF(this, 'name', 'subscription'),
            oF(this, 'version', '0.3'),
            oF(this, 'pending', new Map()),
            oF(this, 'cached', []),
            oF(this, 'initialized', !1),
            oF(this, 'storagePrefix', rY),
            oF(this, 'subscribeTimeout', (0, o.toMiliseconds)(o.ONE_MINUTE)),
            oF(this, 'initialSubscribeTimeout', (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            oF(this, 'clientId'),
            oF(this, 'batchSubscribeTopicsLimit', 500),
            oF(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            oF(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let i = sj(t),
                  s = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, s);
                let r = await this.rpcSubscribe(e, i, t);
                return (
                  'string' == typeof r &&
                    (this.onSubscribe(r, s),
                    this.logger.debug('Successfully Subscribed Topic'),
                    this.logger.trace({
                      type: 'method',
                      method: 'subscribe',
                      params: { topic: e, opts: t },
                    })),
                  r
                );
              } catch (e) {
                throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(e), e);
              }
            }),
            oF(this, 'unsubscribe', async (e, t) => {
              this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            oF(
              this,
              'isSubscribed',
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            oF(
              this,
              'isKnownTopic',
              (e) =>
                new Promise((t) => {
                  t(
                    this.topicMap.topics.includes(e) ||
                      this.pending.has(e) ||
                      this.cached.some((t) => t.topic === e)
                  );
                })
            ),
            oF(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            oF(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            oF(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            oF(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            oF(this, 'start', async () => {
              await this.onConnect();
            }),
            oF(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            oF(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            oF(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            oF(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(rg.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(ne.created, async (e) => {
                  let t = ne.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(ne.deleted, async (e) => {
                  let t = ne.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, rm.U5)(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            '//' +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(i.map(async (i) => await this.unsubscribeById(e, i, t)));
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug('Unsubscribing Topic'),
            this.logger.trace({
              type: 'method',
              method: 'unsubscribe',
              params: { topic: e, id: t, opts: i },
            });
          try {
            let s = sj(i);
            await this.restartToComplete({ topic: e, id: t, relay: s }),
              await this.rpcUnsubscribe(e, t, s);
            let r = s2('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, r),
              this.logger.debug('Successfully Unsubscribed Topic'),
              this.logger.trace({
                type: 'method',
                method: 'unsubscribe',
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(e), e);
          }
        }
        async rpcSubscribe(e, t, i) {
          var s;
          (i && i?.transportType !== r4.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let r = { method: sD(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          let n = null == (s = i?.internal) ? void 0 : s.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === r4.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(r).catch((e) => this.logger.warn(e));
                  },
                  (0, o.toMiliseconds)(o.ONE_SECOND)
                ),
                t
              );
            let s = new Promise(async (t) => {
                let i = (s) => {
                  s.topic === e && (this.events.removeListener(ne.created, i), t(s.id));
                };
                this.events.on(ne.created, i);
                try {
                  let s = await eI(
                    new Promise((e, t) => {
                      this.relayer
                        .request(r)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(ne.created, i), t(s);
                } catch {}
              }),
              a = await eI(
                s,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!a && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return a ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(r5.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: sD(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: t });
          try {
            await await eI(
              new Promise((e) => {
                this.relayer
                  .request(t)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchSubscribe failed, please try again'
            );
          } catch {
            this.relayer.events.emit(r5.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = {
            method: sD(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i });
          try {
            t = await await eI(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchFetchMessages failed, please try again'
            );
          } catch {
            this.relayer.events.emit(r5.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let s = { method: sD(i.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s }),
            this.relayer.request(s)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, oV(oK({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, oK({}, e)), this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug('Setting subscription'),
            this.logger.trace({
              type: 'method',
              method: 'setSubscription',
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, oK({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(ne.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = s1('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'),
            this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(ne.deleted, oV(oK({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(ne.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let i = 0; i < t; i++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(ne.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = s1('RESTORE_WILL_OVERRIDE', this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) => oV(oK({}, e), { id: await this.getSubscriptionId(e.topic) }))
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
          let i = await this.rpcBatchFetchMessages(e);
          i &&
            i.messages &&
            (await ((t = (0, o.toMiliseconds)(o.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(i.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async restartToComplete(e) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return sx(e + (await this.getClientId()));
        }
      }
      var oJ = Object.defineProperty,
        oW = Object.getOwnPropertySymbols,
        oQ = Object.prototype.hasOwnProperty,
        oY = Object.prototype.propertyIsEnumerable,
        oZ = (e, t, i) =>
          t in e
            ? oJ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        oX = (e, t) => {
          for (var i in t || (t = {})) oQ.call(t, i) && oZ(e, i, t[i]);
          if (oW) for (var i of oW(t)) oY.call(t, i) && oZ(e, i, t[i]);
          return e;
        },
        o0 = (e, t, i) => oZ(e, 'symbol' != typeof t ? t + '' : t, i);
      class o1 extends rA {
        constructor(e) {
          super(e),
            o0(this, 'protocol', 'wc'),
            o0(this, 'version', 2),
            o0(this, 'core'),
            o0(this, 'logger'),
            o0(this, 'events', new s.EventEmitter()),
            o0(this, 'provider'),
            o0(this, 'messages'),
            o0(this, 'subscriber'),
            o0(this, 'publisher'),
            o0(this, 'name', 'relayer'),
            o0(this, 'transportExplicitlyClosed', !1),
            o0(this, 'initialized', !1),
            o0(this, 'connectionAttemptInProgress', !1),
            o0(this, 'relayUrl'),
            o0(this, 'projectId'),
            o0(this, 'packageName'),
            o0(this, 'bundleId'),
            o0(this, 'hasExperiencedNetworkDisruption', !1),
            o0(this, 'pingTimeout'),
            o0(this, 'heartBeatTimeout', (0, o.toMiliseconds)(o.THIRTY_SECONDS + o.FIVE_SECONDS)),
            o0(this, 'reconnectTimeout'),
            o0(this, 'connectPromise'),
            o0(this, 'reconnectInProgress', !1),
            o0(this, 'requestsInFlight', []),
            o0(this, 'connectTimeout', (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            o0(this, 'request', async (e) => {
              var t, i;
              this.logger.debug('Publishing Request Payload');
              let s = e.id || (0, rB.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  { id: s, method: e.method, topic: null == (t = e.params) ? void 0 : t.topic },
                  'relayer.request - publishing...'
                );
                let r = `${s}:${(null == (i = e.params) ? void 0 : i.tag) || ''}`;
                this.requestsInFlight.push(r);
                let n = await this.provider.request(e);
                return (this.requestsInFlight = this.requestsInFlight.filter((e) => e !== r)), n;
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${s}`), e);
              }
            }),
            o0(this, 'resetPingTimeout', () => {
              ep() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, i, s;
                  try {
                    this.logger.debug({}, 'pingTimeout: Connection stalled, terminating...'),
                      null ==
                        (s =
                          null ==
                          (i =
                            null == (t = null == (e = this.provider) ? void 0 : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : i.terminate) || s.call(i);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            o0(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            o0(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(r5.connect);
            }),
            o0(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            o0(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(r5.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            o0(this, 'registerProviderListeners', () => {
              this.provider.on(r3.payload, this.onPayloadHandler),
                this.provider.on(r3.connect, this.onConnectHandler),
                this.provider.on(r3.disconnect, this.onDisconnectHandler),
                this.provider.on(r3.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? (0, rm.U5)(e.logger, this.name)
                : (0, rm.h6)((0, rm.iP)({ level: e.logger || 'error' }))),
            (this.messages = new oE(this.logger, e.core)),
            (this.subscriber = new oG(this, this.logger)),
            (this.publisher = new oT(this, this.logger)),
            (this.relayUrl = e?.relayUrl || r8),
            (this.projectId = e.projectId),
            eu() &&
            'u' > typeof i.g &&
            'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === 'android'
              ? (this.packageName = ef())
              : eu() &&
                'u' > typeof i.g &&
                'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
                (null == i.g ? void 0 : i.g.Platform.OS) === 'ios' &&
                (this.bundleId = ef()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace('Initialized'),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : i.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent(
              { topic: e, message: t, publishedAt: Date.now(), transportType: r4.relay },
              r9.outbound
            );
        }
        async subscribe(e, t) {
          var i, s, r;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== 'relay') ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish) > 'u' ||
              (null == (s = t?.internal) ? void 0 : s.throwOnFailedPublish),
            o = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || '',
            a,
            c = (t) => {
              t.topic === e && (this.subscriber.off(ne.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(ne.created, c);
              }),
              new Promise(async (i, s) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, oX({ internal: { throwOnFailedPublish: n } }, t))
                    .catch((e) => {
                      n && s(e);
                    })) || o),
                  i();
              }),
            ]),
            o
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected)
            ? await eI(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
                this.onProviderDisconnect()
              )
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (!this.subscriber.hasAnyTopics) {
            this.logger.warn(
              'Starting WS connection skipped because the client has no topics to work with.'
            );
            return;
          }
          if (
            (this.connectPromise
              ? (this.logger.debug({}, 'Waiting for existing connection attempt to resolve...'),
                await this.connectPromise,
                this.logger.debug({}, 'Existing connection attempt resolved'))
              : ((this.connectPromise = new Promise(async (t, i) => {
                  await this.connect(e)
                    .then(t)
                    .catch(i)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, 'Restarting transport...'),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await ra()))
            throw Error(
              'No internet connection detected. Please restart your network and try again.'
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace('Batch message events is empty. Ignoring...');
            return;
          }
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.debug(`Batch of ${t.length} message events sorted`), t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(e, 'Error while processing batch message event: ' + e?.message);
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = eS(o.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(r5.message, e), await this.recordMessageEvent(e, r9.inbound);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e && e !== this.relayUrl && ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let i = () => {
                    t(Error('Connection interrupted while trying to subscribe'));
                  };
                  this.provider.once(r3.disconnect, i),
                    await eI(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(r3.disconnect, i), clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let i = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(r3.disconnect, i),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(r3.disconnect, i);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (e) {
              await this.subscriber.stop(),
                this.logger.warn({}, e.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
              break;
            }
            await new Promise((e) => setTimeout(e, (0, o.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, i, s, r;
          if (ep())
            try {
              null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (r =
                    null == (s = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : s.socket) ||
                  r.on('ping', () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new rH(
            new rG(
              (function ({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: s,
                auth: r,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: c,
              }) {
                let l = i.split('?'),
                  h = em(e, t, s),
                  p = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let s = t[e];
                        void 0 !== s && i.set(e, s);
                      }
                    return i.toString();
                  })(l[1] || '', {
                    auth: r,
                    ua: h,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: c || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + '?' + p;
              })({
                sdkVersion: r6,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e, t) {
          let { topic: i, message: s } = e;
          await this.messages.set(i, s, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
          let s = this.messages.has(t, i);
          return s && this.logger.warn(`Ignoring duplicate message: ${i}`), s;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug('Incoming Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }),
            (0, rB.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: i, message: s, publishedAt: r, attestation: n } = t.data,
              o = { topic: i, message: s, publishedAt: r, transportType: r4.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(oX({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, rB.isJsonRpcResponse)(e) && this.events.emit(r5.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, r9.inbound), this.events.emit(r5.message, e));
        }
        async acknowledgePayload(e) {
          let t = (0, rB.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(r3.payload, this.onPayloadHandler),
            this.provider.off(r3.connect, this.onConnectHandler),
            this.provider.off(r3.disconnect, this.onDisconnectHandler),
            this.provider.off(r3.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await ra();
          !(function (e) {
            var t, s;
            switch (eg()) {
              case eh.browser:
                (t = e),
                  !eu() &&
                    ed() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case eh.reactNative:
                (s = e),
                  eu() &&
                    'u' > typeof i.g &&
                    null != i.g &&
                    i.g.NetInfo &&
                    i.g?.NetInfo.addEventListener((e) => s(e?.isConnected));
              case eh.node:
            }
          })(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) => this.logger.error(e, e?.message))
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          clearTimeout(this.pingTimeout),
            this.events.emit(r5.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(
                    async () => {
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message)),
                        (this.reconnectTimeout = void 0),
                        (this.reconnectInProgress = !1);
                    },
                    (0, o.toMiliseconds)(0.1)
                  ))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(), this.connected || (await this.connect());
        }
      }
      function o2() {}
      function o8(e) {
        if (!e || 'object' != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        );
      }
      function o5(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function o3(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      let o6 = '[object Arguments]',
        o4 = '[object Object]';
      var o9 = Object.defineProperty,
        o7 = Object.getOwnPropertySymbols,
        ae = Object.prototype.hasOwnProperty,
        at = Object.prototype.propertyIsEnumerable,
        ai = (e, t, i) =>
          t in e
            ? o9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        as = (e, t) => {
          for (var i in t || (t = {})) ae.call(t, i) && ai(e, i, t[i]);
          if (o7) for (var i of o7(t)) at.call(t, i) && ai(e, i, t[i]);
          return e;
        },
        ar = (e, t, i) => ai(e, 'symbol' != typeof t ? t + '' : t, i);
      class an extends rR {
        constructor(e, t, i, s = rY, r) {
          super(e, t, i, s),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            ar(this, 'map', new Map()),
            ar(this, 'version', '0.3'),
            ar(this, 'cached', []),
            ar(this, 'initialized', !1),
            ar(this, 'getKey'),
            ar(this, 'storagePrefix', rY),
            ar(this, 'recentlyDeleted', []),
            ar(this, 'recentlyDeletedLimit', 200),
            ar(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !s3(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                          var t;
                          return null == (t = e?.proposer) ? void 0 : t.publicKey;
                        })(e)
                      ? this.map.set(e.id, e)
                      : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            ar(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            ar(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            ar(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((i) => {
                        var s;
                        return (
                          (s = t[i]),
                          (function e(t, i, s, r, n, o, a) {
                            let c = a(t, i, s, r, n, o);
                            if (void 0 !== c) return c;
                            if (typeof t == typeof i)
                              switch (typeof t) {
                                case 'bigint':
                                case 'string':
                                case 'boolean':
                                case 'symbol':
                                case 'undefined':
                                case 'function':
                                  return t === i;
                                case 'number':
                                  return t === i || Object.is(t, i);
                              }
                            return (function t(i, s, r, n) {
                              if (Object.is(i, s)) return !0;
                              let o = o3(i),
                                a = o3(s);
                              if ((o === o6 && (o = o4), a === o6 && (a = o4), o !== a)) return !1;
                              switch (o) {
                                case '[object String]':
                                  return i.toString() === s.toString();
                                case '[object Number]': {
                                  let e = i.valueOf(),
                                    t = s.valueOf();
                                  return e === t || (Number.isNaN(e) && Number.isNaN(t));
                                }
                                case '[object Boolean]':
                                case '[object Date]':
                                case '[object Symbol]':
                                  return Object.is(i.valueOf(), s.valueOf());
                                case '[object RegExp]':
                                  return i.source === s.source && i.flags === s.flags;
                                case '[object Function]':
                                  return i === s;
                              }
                              let c = (r = r ?? new Map()).get(i),
                                l = r.get(s);
                              if (null != c && null != l) return c === s;
                              r.set(i, s), r.set(s, i);
                              try {
                                switch (o) {
                                  case '[object Map]':
                                    if (i.size !== s.size) return !1;
                                    for (let [t, o] of i.entries())
                                      if (!s.has(t) || !e(o, s.get(t), t, i, s, r, n)) return !1;
                                    return !0;
                                  case '[object Set]': {
                                    if (i.size !== s.size) return !1;
                                    let t = Array.from(i.values()),
                                      o = Array.from(s.values());
                                    for (let a = 0; a < t.length; a++) {
                                      let c = t[a],
                                        l = o.findIndex((t) => e(c, t, void 0, i, s, r, n));
                                      if (-1 === l) return !1;
                                      o.splice(l, 1);
                                    }
                                    return !0;
                                  }
                                  case '[object Array]':
                                  case '[object Uint8Array]':
                                  case '[object Uint8ClampedArray]':
                                  case '[object Uint16Array]':
                                  case '[object Uint32Array]':
                                  case '[object BigUint64Array]':
                                  case '[object Int8Array]':
                                  case '[object Int16Array]':
                                  case '[object Int32Array]':
                                  case '[object BigInt64Array]':
                                  case '[object Float32Array]':
                                  case '[object Float64Array]':
                                    if (
                                      ('u' > typeof rJ && rJ.isBuffer(i) !== rJ.isBuffer(s)) ||
                                      i.length !== s.length
                                    )
                                      return !1;
                                    for (let t = 0; t < i.length; t++)
                                      if (!e(i[t], s[t], t, i, s, r, n)) return !1;
                                    return !0;
                                  case '[object ArrayBuffer]':
                                    return (
                                      i.byteLength === s.byteLength &&
                                      t(new Uint8Array(i), new Uint8Array(s), r, n)
                                    );
                                  case '[object DataView]':
                                    return (
                                      i.byteLength === s.byteLength &&
                                      i.byteOffset === s.byteOffset &&
                                      t(new Uint8Array(i), new Uint8Array(s), r, n)
                                    );
                                  case '[object Error]':
                                    return i.name === s.name && i.message === s.message;
                                  case o4: {
                                    if (
                                      !(t(i.constructor, s.constructor, r, n) || (o8(i) && o8(s)))
                                    )
                                      return !1;
                                    let o = [...Object.keys(i), ...o5(i)],
                                      a = [...Object.keys(s), ...o5(s)];
                                    if (o.length !== a.length) return !1;
                                    for (let t = 0; t < o.length; t++) {
                                      let a = o[t],
                                        c = i[a];
                                      if (!Object.hasOwn(s, a)) return !1;
                                      let l = s[a];
                                      if (!e(c, l, a, i, s, r, n)) return !1;
                                    }
                                    return !0;
                                  }
                                  default:
                                    return !1;
                                }
                              } finally {
                                r.delete(i), r.delete(s);
                              }
                            })(t, i, o, a);
                          })(s, e[i], void 0, void 0, void 0, void 0, o2)
                        );
                      })
                    )
                  : this.values
              )
            ),
            ar(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let i = as(as({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            ar(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, rm.U5)(t, this.name)),
            (this.storagePrefix = s),
            (this.getKey = r);
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = s1(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = s1('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > 'u' || !e.length) return;
            if (this.map.size) {
              let { message: e } = s1('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', value: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var ao = Object.defineProperty,
        aa = (e, t, i) =>
          t in e
            ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ac = (e, t, i) => aa(e, 'symbol' != typeof t ? t + '' : t, i);
      class al {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ac(this, 'name', 'pairing'),
            ac(this, 'version', '0.3'),
            ac(this, 'events', new (r())()),
            ac(this, 'pairings'),
            ac(this, 'initialized', !1),
            ac(this, 'storagePrefix', rY),
            ac(this, 'ignoredPayloadTypes', [1]),
            ac(this, 'registeredMethods', []),
            ac(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            ac(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            ac(this, 'create', async (e) => {
              this.isInitialized();
              let t = sS(),
                i = await this.core.crypto.setSymKey(t),
                s = eS(o.FIVE_MINUTES),
                r = { protocol: 'irn' },
                n = { topic: i, expiry: s, relay: r, active: !1, methods: e?.methods },
                a = sU({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: r,
                  expiryTimestamp: s,
                  methods: e?.methods,
                });
              return (
                this.events.emit(ni.create, n),
                this.core.expirer.set(i, s),
                await this.pairings.set(i, n),
                await this.core.relayer.subscribe(i, { transportType: e?.transportType }),
                { topic: i, uri: a }
              );
            }),
            ac(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [nc.pairing_started] },
              });
              this.isValidPair(e, i);
              let { topic: s, symKey: r, relay: n, expiryTimestamp: a, methods: c } = sk(e.uri);
              if (
                ((i.props.properties.topic = s),
                i.addTrace(nc.pairing_uri_validation_success),
                i.addTrace(nc.pairing_uri_not_expired),
                this.pairings.keys.includes(s))
              ) {
                if (((t = this.pairings.get(s)), i.addTrace(nc.existing_pairing), t.active))
                  throw (
                    (i.setError(nl.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${s}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(nc.pairing_not_expired);
              }
              let l = a || eS(o.FIVE_MINUTES),
                h = { topic: s, relay: n, expiry: l, active: !1, methods: c };
              this.core.expirer.set(s, l),
                await this.pairings.set(s, h),
                i.addTrace(nc.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: s })),
                this.events.emit(ni.create, h),
                i.addTrace(nc.emit_inactive_pairing),
                this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(r, s)),
                i.addTrace(nc.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(nl.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(s, { relay: n });
              } catch (e) {
                throw (i.setError(nl.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(nc.subscribe_pairing_topic_success), h;
            }),
            ac(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = eS(o.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            ac(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  { done: i, resolve: s, reject: r } = eE();
                this.events.once(ex('pairing_ping', e), ({ error: e }) => {
                  e ? r(e) : s();
                }),
                  await i();
              }
            }),
            ac(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            ac(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            ac(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            ac(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', s2('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            ac(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: s, methods: r } = e,
                n = this.core.crypto.keychain.get(t);
              return sU({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: i,
                expiryTimestamp: s,
                methods: r,
              });
            }),
            ac(this, 'sendRequest', async (e, t, i) => {
              let s = (0, rB.formatJsonRpcRequest)(t, i),
                r = await this.core.crypto.encode(e, s),
                n = nt[t].req;
              return this.core.history.set(e, s), this.core.relayer.publish(e, r, n), s.id;
            }),
            ac(this, 'sendResult', async (e, t, i) => {
              let s = (0, rB.formatJsonRpcResult)(e, i),
                r = await this.core.crypto.encode(t, s),
                n = nt[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, r, n), await this.core.history.resolve(s);
            }),
            ac(this, 'sendError', async (e, t, i) => {
              let s = (0, rB.formatJsonRpcError)(e, i),
                r = await this.core.crypto.encode(t, s),
                n = (await this.core.history.get(t, e)).request.method,
                o = nt[n] ? nt[n].res : nt.unregistered_method.res;
              await this.core.relayer.publish(t, r, o), await this.core.history.resolve(s);
            }),
            ac(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, s2('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            ac(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => eO(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            ac(this, 'onRelayEventRequest', async (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case 'wc_pairingPing':
                  return await this.onPairingPingRequest(t, i);
                case 'wc_pairingDelete':
                  return await this.onPairingDeleteRequest(t, i);
                default:
                  return await this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            ac(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: i } = e,
                s = (await this.core.history.get(t, i.id)).request.method;
              return 'wc_pairingPing' === s
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(s);
            }),
            ac(this, 'onPairingPingRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(ni.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            ac(this, 'onPairingPingResponse', (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, rB.isJsonRpcResult)(t)
                  ? this.events.emit(ex('pairing_ping', i), {})
                  : (0, rB.isJsonRpcError)(t) &&
                    this.events.emit(ex('pairing_ping', i), { error: t.error });
              }, 500);
            }),
            ac(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(ni.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            ac(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: i, method: s } = t;
              try {
                if (this.registeredMethods.includes(s)) return;
                let t = s2('WC_METHOD_UNSUPPORTED', s);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            ac(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(s2('WC_METHOD_UNSUPPORTED', e));
            }),
            ac(this, 'isValidPair', (e, t) => {
              var i;
              if (!rs(e)) {
                let { message: i } = s1('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(nl.malformed_pairing_uri), Error(i));
              }
              if (
                !(function (e) {
                  function t(e) {
                    try {
                      return 'u' > typeof new URL(e);
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (s6(e, !1)) {
                      if (t(e)) return !0;
                      let i = e$(e);
                      return t(i);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: i } = s1('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(nl.malformed_pairing_uri), Error(i));
              }
              let s = sk(e?.uri);
              if (!(null != (i = s?.relay) && i.protocol)) {
                let { message: e } = s1('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(nl.malformed_pairing_uri), Error(e));
              }
              if (!(null != s && s.symKey)) {
                let { message: e } = s1('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(nl.malformed_pairing_uri), Error(e));
              }
              if (
                null != s &&
                s.expiryTimestamp &&
                (0, o.toMiliseconds)(s?.expiryTimestamp) < Date.now()
              ) {
                t.setError(nl.pairing_expired);
                let { message: e } = s1(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            ac(this, 'isValidPing', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ac(this, 'isValidDisconnect', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ac(this, 'isValidPairingTopic', async (e) => {
              if (!s6(e, !1)) {
                let { message: t } = s1(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = s1('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (eO(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = s1('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, rm.U5)(t, this.name)),
            (this.pairings = new an(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(r5.message, async (e) => {
            let { topic: t, message: i, transportType: s } = e;
            if (
              this.pairings.keys.includes(t) &&
              s !== r4.link_mode &&
              !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
            )
              try {
                let e = await this.core.crypto.decode(t, i);
                (0, rB.isJsonRpcRequest)(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : (0, rB.isJsonRpcResponse)(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, i);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(nr.expired, async (e) => {
            let { topic: t } = e_(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(ni.expire, { topic: t }));
          });
        }
      }
      var ah = Object.defineProperty,
        ap = (e, t, i) =>
          t in e
            ? ah(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        au = (e, t, i) => ap(e, 'symbol' != typeof t ? t + '' : t, i);
      class ad extends rS {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            au(this, 'records', new Map()),
            au(this, 'events', new s.EventEmitter()),
            au(this, 'name', 'history'),
            au(this, 'version', '0.3'),
            au(this, 'cached', []),
            au(this, 'initialized', !1),
            au(this, 'storagePrefix', rY),
            au(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            au(this, 'set', (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Setting JSON-RPC request history record'),
                this.logger.trace({
                  type: 'method',
                  method: 'set',
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let s = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: eS(o.THIRTY_DAYS),
              };
              this.records.set(s.id, s), this.persist(), this.events.emit(ns.created, s);
            }),
            au(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = (0, rB.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(ns.updated, t));
            }),
            au(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            au(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ('u' > typeof t && i.id !== t) ||
                    (this.records.delete(i.id), this.events.emit(ns.deleted, i));
                }),
                this.persist();
            }),
            au(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            au(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            au(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            au(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            au(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, rm.U5)(t, this.name));
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ('u' > typeof t.response) return;
              let i = {
                topic: t.topic,
                request: (0, rB.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(i);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = s1('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(ns.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = s1('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored records for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', records: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(ns.created, (e) => {
            let t = ns.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(ns.updated, (e) => {
              let t = ns.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(ns.deleted, (e) => {
              let t = ns.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.core.heartbeat.on(rg.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, o.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(ns.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var ag = Object.defineProperty,
        af = (e, t, i) =>
          t in e
            ? ag(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ay = (e, t, i) => af(e, 'symbol' != typeof t ? t + '' : t, i);
      class am extends rT {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            ay(this, 'expirations', new Map()),
            ay(this, 'events', new s.EventEmitter()),
            ay(this, 'name', 'expirer'),
            ay(this, 'version', '0.3'),
            ay(this, 'cached', []),
            ay(this, 'initialized', !1),
            ay(this, 'storagePrefix', rY),
            ay(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            ay(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            ay(this, 'set', (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                s = { target: i, expiry: t };
              this.expirations.set(i, s),
                this.checkExpiry(i, s),
                this.events.emit(nr.created, { target: i, expiration: s });
            }),
            ay(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            ay(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(nr.deleted, { target: t, expiration: i });
              }
            }),
            ay(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            ay(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            ay(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            ay(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, rm.U5)(t, this.name));
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ('string' == typeof e) return eP('topic', e);
          if ('number' == typeof e) return eP('id', e);
          let { message: t } = s1('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(nr.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = s1('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored expirations for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', expirations: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = s1('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, o.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(nr.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(rg.pulse, () => this.checkExpirations()),
            this.events.on(nr.created, (e) => {
              let t = nr.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(nr.expired, (e) => {
              let t = nr.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(nr.deleted, (e) => {
              let t = nr.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var aw = Object.defineProperty,
        ab = (e, t, i) =>
          t in e
            ? aw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        av = (e, t, i) => ab(e, 'symbol' != typeof t ? t + '' : t, i);
      class aE extends rq {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            av(this, 'name', 'verify-api'),
            av(this, 'abortController'),
            av(this, 'isDevEnv'),
            av(this, 'verifyUrlV3', no),
            av(this, 'storagePrefix', rY),
            av(this, 'version', 2),
            av(this, 'publicKey'),
            av(this, 'fetchPromise'),
            av(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, o.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            av(this, 'register', async (e) => {
              if (!ed() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: s } = e,
                r = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${s}`;
              try {
                let e = (0, a.getDocument)(),
                  t = this.startAbortTimer(5 * o.ONE_SECOND),
                  s = await new Promise((s, n) => {
                    let o = () => {
                      window.removeEventListener('message', c),
                        e.body.removeChild(a),
                        n('attestation aborted');
                    };
                    this.abortController.signal.addEventListener('abort', o);
                    let a = e.createElement('iframe');
                    (a.src = r),
                      (a.style.display = 'none'),
                      a.addEventListener('error', o, { signal: this.abortController.signal });
                    let c = (r) => {
                      if (r.data && 'string' == typeof r.data)
                        try {
                          let n = JSON.parse(r.data);
                          if ('verify_attestation' === n.type) {
                            if ((0, U.Cq)(n.attestation).payload.id !== i) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener('abort', o),
                              window.removeEventListener('message', c),
                              s(null === n.attestation ? '' : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener('message', c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug('jwt attestation', s), s;
              } catch (e) {
                this.logger.warn(e);
              }
              return '';
            }),
            av(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              let { attestationId: t, hash: i, encryptedId: s } = e;
              if ('' === t) {
                this.logger.debug('resolve: attestationId is empty, skipping');
                return;
              }
              if (t) {
                if ((0, U.Cq)(t).payload.id !== s) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn('resolve: jwt attestation: origin url not verified');
                    return;
                  }
                  return e;
                }
              }
              if (!i) return;
              let r = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, r);
            }),
            av(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * o.ONE_SECOND),
                s = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(i), 200 === s.status ? await s.json() : void 0;
            }),
            av(this, 'getVerifyUrl', (e) => {
              let t = e || nn;
              return (
                na.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${nn}`
                  ),
                  (t = nn)),
                t
              );
            }),
            av(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(o.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            av(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            av(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            av(this, 'isValidJwtAttestation', async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
            }),
            av(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            av(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            av(this, 'validateAttestation', (e, t) => {
              let i = (function (e, t) {
                  let [i, s, r] = e.split('.'),
                    n = Q.from(sC(r), 'base64');
                  if (64 !== n.length) throw Error('Invalid signature length');
                  let o = n.slice(0, 32),
                    a = n.slice(32, 64),
                    c = ic(`${i}.${s}`),
                    l = (function (e) {
                      let t = Q.from(e.x, 'base64'),
                        i = Q.from(e.y, 'base64');
                      return L([new Uint8Array([4]), t, i]);
                    })(t);
                  if (!sb.verify(L([o, a]), c, l)) throw Error('Invalid signature');
                  return (0, U.Cq)(e).payload;
                })(e, t.publicKey),
                s = { hasExpired: (0, o.toMiliseconds)(i.exp) < Date.now(), payload: i };
              if (s.hasExpired)
                throw (
                  (this.logger.warn('resolve: jwt attestation expired'),
                  Error('JWT attestation expired'))
                );
              return {
                origin: s.payload.origin,
                isScam: s.payload.isScam,
                isVerified: s.payload.isVerified,
              };
            }),
            (this.logger = (0, rm.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = eq()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            '//verify:public:key'
          );
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, o.toMiliseconds)(e))
          );
        }
      }
      var aI = Object.defineProperty,
        aP = (e, t, i) =>
          t in e
            ? aI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        a_ = (e, t, i) => aP(e, 'symbol' != typeof t ? t + '' : t, i);
      class aS extends r$ {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            a_(this, 'context', 'echo'),
            a_(this, 'registerDeviceToken', async (e) => {
              let { clientId: t, token: i, notificationType: s, enableEncrypted: r = !1 } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: s, token: i, always_raw: r }),
              });
            }),
            (this.logger = (0, rm.U5)(t, this.context));
        }
      }
      var aO = Object.defineProperty,
        ax = Object.getOwnPropertySymbols,
        aA = Object.prototype.hasOwnProperty,
        aR = Object.prototype.propertyIsEnumerable,
        aC = (e, t, i) =>
          t in e
            ? aO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        aN = (e, t) => {
          for (var i in t || (t = {})) aA.call(t, i) && aC(e, i, t[i]);
          if (ax) for (var i of ax(t)) aR.call(t, i) && aC(e, i, t[i]);
          return e;
        },
        aT = (e, t, i) => aC(e, 'symbol' != typeof t ? t + '' : t, i);
      class aq extends rj {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            aT(this, 'context', 'event-client'),
            aT(this, 'storagePrefix', rY),
            aT(this, 'storageVersion', 0.1),
            aT(this, 'events', new Map()),
            aT(this, 'shouldPersist', !1),
            aT(this, 'init', async () => {
              if (!eq())
                try {
                  let e = {
                    eventId: eT(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: em(this.core.relayer.protocol, this.core.relayer.version, r6),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            aT(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: i = '',
                  properties: { topic: s, trace: r },
                } = e,
                n = eT(),
                o = this.core.projectId || '',
                a = aN(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: { event: t, type: i, properties: { topic: s, trace: r } },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return this.telemetryEnabled && (this.events.set(n, a), (this.shouldPersist = !0)), a;
            }),
            aT(this, 'getEvent', (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let s = Array.from(this.events.values()).find((e) => e.props.properties.topic === i);
              if (s) return aN(aN({}, s), this.setMethods(s.eventId));
            }),
            aT(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            aT(this, 'setEventListeners', () => {
              this.core.heartbeat.on(rg.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, o.fromMiliseconds)(Date.now()) - (0, o.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            aT(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            aT(this, 'addTrace', (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            aT(this, 'setError', (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            aT(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            aT(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, aN(aN({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            aT(this, 'submit', async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e) this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            aT(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${r6}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            aT(this, 'getAppDomain', () => ey().url),
            (this.logger = (0, rm.U5)(t, this.context)),
            (this.telemetryEnabled = i),
            i
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            '//' +
            this.context
          );
        }
      }
      var a$ = Object.defineProperty,
        aj = Object.getOwnPropertySymbols,
        aD = Object.prototype.hasOwnProperty,
        ak = Object.prototype.propertyIsEnumerable,
        aU = (e, t, i) =>
          t in e
            ? a$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        aM = (e, t) => {
          for (var i in t || (t = {})) aD.call(t, i) && aU(e, i, t[i]);
          if (aj) for (var i of aj(t)) ak.call(t, i) && aU(e, i, t[i]);
          return e;
        },
        aL = (e, t, i) => aU(e, 'symbol' != typeof t ? t + '' : t, i);
      class az extends rE {
        constructor(e) {
          var t;
          super(e),
            aL(this, 'protocol', 'wc'),
            aL(this, 'version', 2),
            aL(this, 'name', rQ),
            aL(this, 'relayUrl'),
            aL(this, 'projectId'),
            aL(this, 'customStoragePrefix'),
            aL(this, 'events', new s.EventEmitter()),
            aL(this, 'logger'),
            aL(this, 'heartbeat'),
            aL(this, 'relayer'),
            aL(this, 'crypto'),
            aL(this, 'storage'),
            aL(this, 'history'),
            aL(this, 'expirer'),
            aL(this, 'pairing'),
            aL(this, 'verify'),
            aL(this, 'echoClient'),
            aL(this, 'linkModeSupportedApps'),
            aL(this, 'eventClient'),
            aL(this, 'initialized', !1),
            aL(this, 'logChunkController'),
            aL(this, 'on', (e, t) => this.events.on(e, t)),
            aL(this, 'once', (e, t) => this.events.once(e, t)),
            aL(this, 'off', (e, t) => this.events.off(e, t)),
            aL(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            aL(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: i }) => {
              if (!e || !t) return;
              let s = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: r4.link_mode,
              };
              this.relayer.onLinkMessageEvent(s, { sessionExists: i });
            });
          let i = this.getGlobalCore(e?.customStoragePrefix);
          if (i)
            try {
              return (
                (this.customStoragePrefix = i.customStoragePrefix),
                (this.logger = i.logger),
                (this.heartbeat = i.heartbeat),
                (this.crypto = i.crypto),
                (this.history = i.history),
                (this.expirer = i.expirer),
                (this.storage = i.storage),
                (this.relayer = i.relayer),
                (this.pairing = i.pairing),
                (this.verify = i.verify),
                (this.echoClient = i.echoClient),
                (this.linkModeSupportedApps = i.linkModeSupportedApps),
                (this.eventClient = i.eventClient),
                (this.initialized = i.initialized),
                (this.logChunkController = i.logChunkController),
                i
              );
            } catch (e) {
              console.warn('Failed to copy global core', e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || r8),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let r = (0, rm.iP)({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : rZ.logger,
              name: rQ,
            }),
            { logger: n, chunkLoggerController: o } = (0, rm.D5)({
              opts: r,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = o),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = (0, rm.U5)(n, this.name)),
            (this.heartbeat = new rf()),
            (this.crypto = new oh(this, this.logger, e?.keychain)),
            (this.history = new ad(this, this.logger)),
            (this.expirer = new am(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new ry.A(aM(aM({}, rX), e?.storageOptions))),
            (this.relayer = new o1({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new al(this, this.logger)),
            (this.verify = new aE(this, this.logger, this.storage)),
            (this.echoClient = new aS(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new aq(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new az(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', i), t;
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(r7, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps = (await this.storage.getItem(r7)) || []),
              (this.initialized = !0),
              this.logger.info('Core Initialization Success');
          } catch (e) {
            throw (
              (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
              this.logger.error(e.message),
              e)
            );
          }
        }
        getGlobalCore(e = '') {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let t = `_walletConnectCore_${e}`,
              i = `${t}_count`;
            return (
              (globalThis[i] = (globalThis[i] || 0) + 1),
              globalThis[i] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`
                ),
              globalThis[t]
            );
          } catch (e) {
            console.warn('Failed to get global WalletConnect core', e);
            return;
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let i = `_walletConnectCore_${(null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ''}`;
            globalThis[i] = e;
          } catch (e) {
            console.warn('Failed to set global WalletConnect core', e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return 'u' > typeof rW && 'true' === rW.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let aB = 'client',
        aH = `wc@2:${aB}:`,
        aK = { name: aB, logger: 'error' },
        aV = 'WALLETCONNECT_DEEPLINK_CHOICE',
        aF = 'Proposal expired',
        aG = o.SEVEN_DAYS,
        aJ = {
          wc_sessionPropose: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: o.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: o.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        aW = { min: o.FIVE_MINUTES, max: o.SEVEN_DAYS },
        aQ = { idle: 'IDLE', active: 'ACTIVE' },
        aY = {
          eth_sendTransaction: { key: '' },
          eth_sendRawTransaction: { key: '' },
          wallet_sendCalls: { key: '' },
          solana_signTransaction: { key: 'signature' },
          solana_signAllTransactions: { key: 'transactions' },
          solana_signAndSendTransaction: { key: 'signature' },
        },
        aZ = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest', 'wc_sessionAuthenticate'],
        aX = 'wc@1.5:auth:',
        a0 = `${aX}:PUB_KEY`;
      var a1 = Object.defineProperty,
        a2 = Object.defineProperties,
        a8 = Object.getOwnPropertyDescriptors,
        a5 = Object.getOwnPropertySymbols,
        a3 = Object.prototype.hasOwnProperty,
        a6 = Object.prototype.propertyIsEnumerable,
        a4 = (e, t, i) =>
          t in e
            ? a1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        a9 = (e, t) => {
          for (var i in t || (t = {})) a3.call(t, i) && a4(e, i, t[i]);
          if (a5) for (var i of a5(t)) a6.call(t, i) && a4(e, i, t[i]);
          return e;
        },
        a7 = (e, t) => a2(e, a8(t)),
        ce = (e, t, i) => a4(e, 'symbol' != typeof t ? t + '' : t, i);
      class ct extends rL {
        constructor(e) {
          super(e),
            ce(this, 'name', 'engine'),
            ce(this, 'events', new (r())()),
            ce(this, 'initialized', !1),
            ce(this, 'requestQueue', { state: aQ.idle, queue: [] }),
            ce(this, 'sessionRequestQueue', { state: aQ.idle, queue: [] }),
            ce(this, 'requestQueueDelay', o.ONE_SECOND),
            ce(this, 'expectedPairingMethodMap', new Map()),
            ce(this, 'recentlyDeletedMap', new Map()),
            ce(this, 'recentlyDeletedLimit', 200),
            ce(this, 'relayMessageCache', []),
            ce(this, 'pendingSessions', new Map()),
            ce(this, 'init', async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(aJ) }),
                (this.initialized = !0),
                setTimeout(
                  async () => {
                    await this.processPendingMessageEvents(),
                      (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  },
                  (0, o.toMiliseconds)(this.requestQueueDelay)
                ));
            }),
            ce(this, 'connect', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = a7(a9({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: i,
                  requiredNamespaces: s,
                  optionalNamespaces: r,
                  sessionProperties: n,
                  scopedProperties: a,
                  relays: c,
                } = t,
                l = i,
                h,
                p = !1;
              try {
                if (l) {
                  let e = this.client.core.pairing.pairings.get(l);
                  this.client.logger.warn(
                    'connect() with existing pairing topic is deprecated and will be removed in the next major release.'
                  ),
                    (p = e.active);
                }
              } catch (e) {
                throw (this.client.logger.error(`connect() -> pairing.get(${l}) failed`), e);
              }
              if (!l || !p) {
                let { topic: e, uri: t } = await this.client.core.pairing.create();
                (l = e), (h = t);
              }
              if (!l) {
                let { message: e } = s1('NO_MATCHING_KEY', `connect() pairing topic: ${l}`);
                throw Error(e);
              }
              let u = await this.client.core.crypto.generateKeyPair(),
                d = aJ.wc_sessionPropose.req.ttl || o.FIVE_MINUTES,
                g = eS(d),
                f = a7(
                  a9(
                    a9(
                      {
                        requiredNamespaces: s,
                        optionalNamespaces: r,
                        relays: c ?? [{ protocol: 'irn' }],
                        proposer: { publicKey: u, metadata: this.client.metadata },
                        expiryTimestamp: g,
                        pairingTopic: l,
                      },
                      n && { sessionProperties: n }
                    ),
                    a && { scopedProperties: a }
                  ),
                  { id: (0, rB.payloadId)() }
                ),
                y = ex('session_connect', f.id),
                { reject: m, resolve: w, done: b } = eE(d, aF),
                v = ({ id: e }) => {
                  e === f.id &&
                    (this.client.events.off('proposal_expire', v),
                    this.pendingSessions.delete(f.id),
                    this.events.emit(y, { error: { message: aF, code: 0 } }));
                };
              return (
                this.client.events.on('proposal_expire', v),
                this.events.once(y, ({ error: e, session: t }) => {
                  this.client.events.off('proposal_expire', v), e ? m(e) : t && w(t);
                }),
                await this.sendRequest({
                  topic: l,
                  method: 'wc_sessionPropose',
                  params: f,
                  throwOnFailedPublish: !0,
                  clientRpcId: f.id,
                }),
                await this.setProposal(f.id, f),
                { uri: h, approval: b }
              );
            }),
            ce(this, 'pair', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error('pair() failed'), e);
              }
            }),
            ce(this, 'approve', async (e) => {
              var t, i, s;
              let r = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [nh.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (r.setError(np.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),
                  r.setError(np.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error('approve() -> isValidApprove() failed'),
                  r.setError(np.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  scopedProperties: l,
                  sessionConfig: h,
                } = e,
                p = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: r.eventId });
              let {
                  pairingTopic: u,
                  proposer: d,
                  requiredNamespaces: g,
                  optionalNamespaces: f,
                } = p,
                y = null == (i = this.client.core.eventClient) ? void 0 : i.getEvent({ topic: u });
              y ||
                (y =
                  null == (s = this.client.core.eventClient)
                    ? void 0
                    : s.createEvent({
                        type: nh.session_approve_started,
                        properties: {
                          topic: u,
                          trace: [
                            nh.session_approve_started,
                            nh.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let m = await this.client.core.crypto.generateKeyPair(),
                w = d.publicKey,
                b = await this.client.core.crypto.generateSharedKey(m, w),
                v = a9(
                  a9(
                    a9(
                      {
                        relay: { protocol: o ?? 'irn' },
                        namespaces: a,
                        controller: { publicKey: m, metadata: this.client.metadata },
                        expiry: eS(aG),
                      },
                      c && { sessionProperties: c }
                    ),
                    l && { scopedProperties: l }
                  ),
                  h && { sessionConfig: h }
                ),
                E = r4.relay;
              y.addTrace(nh.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(b, { transportType: E });
              } catch (e) {
                throw (y.setError(np.subscribe_session_topic_failure), e);
              }
              y.addTrace(nh.subscribe_session_topic_success);
              let I = a7(a9({}, v), {
                topic: b,
                requiredNamespaces: g,
                optionalNamespaces: f,
                pairingTopic: u,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: d.publicKey, metadata: d.metadata },
                controller: m,
                transportType: r4.relay,
              });
              await this.client.session.set(b, I), y.addTrace(nh.store_session);
              try {
                y.addTrace(nh.publishing_session_settle),
                  await this.sendRequest({
                    topic: b,
                    method: 'wc_sessionSettle',
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(np.session_settle_publish_failure), e);
                  }),
                  y.addTrace(nh.session_settle_publish_success),
                  y.addTrace(nh.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: u,
                    result: { relay: { protocol: o ?? 'irn' }, responderPublicKey: m },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(np.session_approve_publish_failure), e);
                  }),
                  y.addTrace(nh.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(b, s2('USER_DISCONNECTED')),
                  await this.client.core.relayer.unsubscribe(b),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({ eventId: y.eventId }),
                await this.client.core.pairing.updateMetadata({ topic: u, metadata: d.metadata }),
                await this.client.proposal.delete(n, s2('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: u }),
                await this.setExpiry(b, eS(aG)),
                { topic: b, acknowledged: () => Promise.resolve(this.client.session.get(b)) }
              );
            }),
            ce(this, 'reject', async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (this.client.logger.error('reject() -> isValidReject() failed'), e);
              }
              let { id: i, reason: s } = e;
              try {
                t = this.client.proposal.get(i).pairingTopic;
              } catch (e) {
                throw (this.client.logger.error(`reject() -> proposal.get(${i}) failed`), e);
              }
              t &&
                (await this.sendError({
                  id: i,
                  topic: t,
                  error: s,
                  rpcOpts: aJ.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(i, s2('USER_DISCONNECTED')));
            }),
            ce(this, 'update', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (this.client.logger.error('update() -> isValidUpdate() failed'), e);
              }
              let { topic: t, namespaces: i } = e,
                { done: s, resolve: r, reject: n } = eE(),
                o = (0, rB.payloadId)(),
                a = (0, rB.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(ex('session_update', o), ({ error: e }) => {
                  e ? n(e) : r();
                }),
                await this.client.session.update(t, { namespaces: i }),
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionUpdate',
                  params: { namespaces: i },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: s }
              );
            }),
            ce(this, 'extend', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (this.client.logger.error('extend() -> isValidExtend() failed'), e);
              }
              let { topic: t } = e,
                i = (0, rB.payloadId)(),
                { done: s, resolve: r, reject: n } = eE();
              return (
                this.events.once(ex('session_extend', i), ({ error: e }) => {
                  e ? n(e) : r();
                }),
                await this.setExpiry(t, eS(aG)),
                this.sendRequest({
                  topic: t,
                  method: 'wc_sessionExtend',
                  params: {},
                  clientRpcId: i,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: s }
              );
            }),
            ce(this, 'request', async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (this.client.logger.error('request() -> isValidRequest() failed'), e);
              }
              let {
                  chainId: t,
                  request: i,
                  topic: s,
                  expiry: r = aJ.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(s);
              n?.transportType === r4.relay && (await this.confirmOnlineStateOrThrow());
              let o = (0, rB.payloadId)(),
                a = (0, rB.getBigIntRpcId)().toString(),
                { done: c, resolve: l, reject: h } = eE(r, 'Request expired. Please try again.');
              this.events.once(ex('session_request', o), ({ error: e, result: t }) => {
                e ? h(e) : l(t);
              });
              let p = 'wc_sessionRequest',
                u = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (u)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: s,
                    method: p,
                    params: { request: a7(a9({}, i), { expiryTimestamp: eS(r) }), chainId: t },
                    expiry: r,
                    throwOnFailedPublish: !0,
                    appLink: u,
                  }).catch((e) => h(e)),
                  this.client.events.emit('session_request_sent', {
                    topic: s,
                    request: i,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let d = { request: a7(a9({}, i), { expiryTimestamp: eS(r) }), chainId: t },
                g = this.shouldSetTVF(p, d);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    a9(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: s,
                        method: p,
                        params: d,
                        expiry: r,
                        throwOnFailedPublish: !0,
                      },
                      g && { tvf: this.getTVFParams(o, d) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit('session_request_sent', {
                      topic: s,
                      request: i,
                      chainId: t,
                      id: o,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                    let e = await eC(this.client.core.storage, aV);
                    await eR({ id: o, topic: s, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            ce(this, 'respond', async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: i } = e,
                { id: s } = i,
                r = this.client.session.get(t);
              r.transportType === r4.relay && (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(r.peer.metadata, r.transportType);
              (0, rB.isJsonRpcResult)(i)
                ? await this.sendResult({
                    id: s,
                    topic: t,
                    result: i.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, rB.isJsonRpcError)(i) &&
                  (await this.sendError({ id: s, topic: t, error: i.error, appLink: n })),
                this.cleanupAfterResponse(e);
            }),
            ce(this, 'ping', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (this.client.logger.error('ping() -> isValidPing() failed'), e);
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, rB.payloadId)(),
                  i = (0, rB.getBigIntRpcId)().toString(),
                  { done: s, resolve: r, reject: n } = eE();
                this.events.once(ex('session_ping', e), ({ error: e }) => {
                  e ? n(e) : r();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: 'wc_sessionPing',
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: i,
                    }),
                    s(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    'ping() on pairing topic is deprecated and will be removed in the next major release.'
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            ce(this, 'emit', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: i, chainId: s } = e,
                r = (0, rB.getBigIntRpcId)().toString(),
                n = (0, rB.payloadId)();
              await this.sendRequest({
                topic: t,
                method: 'wc_sessionEvent',
                params: { event: i, chainId: s },
                throwOnFailedPublish: !0,
                relayRpcId: r,
                clientRpcId: n,
              });
            }),
            ce(this, 'disconnect', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionDelete',
                  params: s2('USER_DISCONNECTED'),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = s1(
                  'MISMATCHED_TOPIC',
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            ce(
              this,
              'find',
              (e) => (
                this.isInitialized(),
                this.client.session.getAll().filter((t) =>
                  (function (e, t) {
                    let { requiredNamespaces: i } = t,
                      s = Object.keys(e.namespaces),
                      r = Object.keys(i),
                      n = !0;
                    return (
                      !!ew(r, s) &&
                      (s.forEach((t) => {
                        let { accounts: s, methods: r, events: o } = e.namespaces[t],
                          a = sW(s),
                          c = i[t];
                        (ew(ee(t, c), a) && ew(c.methods, r) && ew(c.events, o)) || (n = !1);
                      }),
                      n)
                    );
                  })(t, e)
                )
              )
            ),
            ce(this, 'getPendingSessionRequests', () => this.client.pendingRequest.getAll()),
            ce(this, 'authenticate', async (e, t) => {
              var i, s, r;
              let n;
              this.isInitialized(), this.isValidAuthenticate(e);
              let o =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (i = this.client.metadata.redirect) ? void 0 : i.linkMode),
                a = o ? r4.link_mode : r4.relay;
              a === r4.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: c,
                  statement: l = '',
                  uri: h,
                  domain: p,
                  nonce: u,
                  type: d,
                  exp: g,
                  nbf: f,
                  methods: y = [],
                  expiry: m,
                } = e,
                w = [...(e.resources || [])],
                { topic: b, uri: v } = await this.client.core.pairing.create({
                  methods: ['wc_sessionAuthenticate'],
                  transportType: a,
                });
              this.client.logger.info({
                message: 'Generated new pairing',
                pairing: { topic: b, uri: v },
              });
              let E = await this.client.core.crypto.generateKeyPair(),
                I = sO(E);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(a0, { responseTopic: I, publicKey: E }),
                  this.client.auth.pairingTopics.set(I, { topic: I, pairingTopic: b }),
                ]),
                await this.client.core.relayer.subscribe(I, { transportType: a }),
                this.client.logger.info(`sending request to new pairing topic: ${b}`),
                y.length > 0)
              ) {
                let { namespace: e } = Y(c[0]),
                  t = tO(
                    (function (e, t, i, s = {}) {
                      return (
                        i?.sort((e, t) => e.localeCompare(t)),
                        {
                          att: {
                            [e]: (function (e, t, i = {}) {
                              return Object.assign(
                                {},
                                ...(t = t?.sort((e, t) => e.localeCompare(t))).map((t) => ({
                                  [`${e}/${t}`]: [i],
                                }))
                              );
                            })(t, i, s),
                          },
                        }
                      );
                    })(e, 'request', y)
                  );
                tC(w) &&
                  ((s = t),
                  (r = w.pop()),
                  (t = tO(
                    (function (e, t) {
                      tS(e), tS(t);
                      let i = Object.keys(e.att)
                          .concat(Object.keys(t.att))
                          .sort((e, t) => e.localeCompare(t)),
                        s = { att: {} };
                      return (
                        i.forEach((i) => {
                          var r, n;
                          Object.keys((null == (r = e.att) ? void 0 : r[i]) || {})
                            .concat(Object.keys((null == (n = t.att) ? void 0 : n[i]) || {}))
                            .sort((e, t) => e.localeCompare(t))
                            .forEach((r) => {
                              var n, o;
                              s.att[i] = tw(tm({}, s.att[i]), {
                                [r]:
                                  (null == (n = e.att[i]) ? void 0 : n[r]) ||
                                  (null == (o = t.att[i]) ? void 0 : o[r]),
                              });
                            });
                        }),
                        s
                      );
                    })(tx(s), tx(r))
                  ))),
                  w.push(t);
              }
              let P =
                  m && m > aJ.wc_sessionAuthenticate.req.ttl
                    ? m
                    : aJ.wc_sessionAuthenticate.req.ttl,
                _ = {
                  authPayload: {
                    type: d ?? 'caip122',
                    chains: c,
                    statement: l,
                    aud: h,
                    domain: p,
                    version: '1',
                    nonce: u,
                    iat: new Date().toISOString(),
                    exp: g,
                    nbf: f,
                    resources: w,
                  },
                  requester: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: eS(P),
                },
                S = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: c,
                      methods: [...new Set(['personal_sign', ...y])],
                      events: ['chainChanged', 'accountsChanged'],
                    },
                  },
                  relays: [{ protocol: 'irn' }],
                  pairingTopic: b,
                  proposer: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: eS(aJ.wc_sessionPropose.req.ttl),
                  id: (0, rB.payloadId)(),
                },
                { done: O, resolve: x, reject: A } = eE(P, 'Request expired'),
                R = (0, rB.payloadId)(),
                C = ex('session_connect', S.id),
                N = ex('session_request', R),
                T = async ({ error: e, session: t }) => {
                  this.events.off(N, q), e ? A(e) : t && x({ session: t });
                },
                q = async (e) => {
                  var i, s, r;
                  let n;
                  if (
                    (await this.deletePendingAuthRequest(R, { message: 'fulfilled', code: 0 }),
                    e.error)
                  ) {
                    let t = s2('WC_METHOD_UNSUPPORTED', 'wc_sessionAuthenticate');
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(C, T), A(e.error.message));
                  }
                  await this.deleteProposal(S.id), this.events.off(C, T);
                  let { cacaos: o, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of o) {
                    (await tP({ cacao: e, projectId: this.client.core.projectId })) ||
                      (this.client.logger.error(e, 'Signature verification failed'),
                      A(s2('SESSION_SETTLEMENT_FAILED', 'Signature verification failed')));
                    let { p: t } = e,
                      i = tC(t.resources),
                      s = [tE(t.iss)],
                      r = tI(t.iss);
                    if (i) {
                      let e = tA(i),
                        t = tR(i);
                      l.push(...e), s.push(...t);
                    }
                    for (let e of s) h.push(`${e}:${r}`);
                  }
                  let p = await this.client.core.crypto.generateSharedKey(E, c.publicKey);
                  l.length > 0 &&
                    ((n = {
                      topic: p,
                      acknowledged: !0,
                      self: { publicKey: E, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: eS(aG),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: 'irn' },
                      pairingTopic: b,
                      namespaces: sZ([...new Set(l)], [...new Set(h)]),
                      transportType: a,
                    }),
                    await this.client.core.relayer.subscribe(p, { transportType: a }),
                    await this.client.session.set(p, n),
                    b &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: b,
                        metadata: c.metadata,
                      })),
                    (n = this.client.session.get(p))),
                    null != (i = this.client.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.linkMode &&
                      null != (r = c.metadata.redirect) &&
                      r.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal),
                      this.client.session.update(p, { transportType: r4.link_mode })),
                    x({ auths: o, session: n });
                };
              this.events.once(C, T), this.events.once(N, q);
              try {
                if (o) {
                  let e = (0, rB.formatJsonRpcRequest)('wc_sessionAuthenticate', _, R);
                  this.client.core.history.set(b, e);
                  let i = await this.client.core.crypto.encode('', e, { type: 2, encoding: sP });
                  n = sM(t, b, i);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: b,
                      method: 'wc_sessionAuthenticate',
                      params: _,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: R,
                    }),
                    this.sendRequest({
                      topic: b,
                      method: 'wc_sessionPropose',
                      params: S,
                      expiry: aJ.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: S.id,
                    }),
                  ]);
              } catch (e) {
                throw (this.events.off(C, T), this.events.off(N, q), e);
              }
              return (
                await this.setProposal(S.id, S),
                await this.setAuthRequest(R, {
                  request: a7(a9({}, _), { verifyContext: {} }),
                  pairingTopic: b,
                  transportType: a,
                }),
                { uri: n ?? v, response: O }
              );
            }),
            ce(this, 'approveSessionAuthenticate', async (e) => {
              let t;
              let { id: i, auths: s } = e,
                r = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: i.toString(),
                    trace: [nu.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (r.setError(nd.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(i);
              if (!n)
                throw (
                  (r.setError(nd.authenticated_session_pending_request_not_found),
                  Error(`Could not find pending auth request with id ${i}`))
                );
              let o = n.transportType || r4.relay;
              o === r4.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = sO(a),
                h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                p = [],
                u = [];
              for (let e of s) {
                if (!(await tP({ cacao: e, projectId: this.client.core.projectId }))) {
                  r.setError(nd.invalid_cacao);
                  let e = s2('SESSION_SETTLEMENT_FAILED', 'Signature verification failed');
                  throw (
                    (await this.sendError({ id: i, topic: l, error: e, encodeOpts: h }),
                    Error(e.message))
                  );
                }
                r.addTrace(nu.cacaos_verified);
                let { p: t } = e,
                  s = tC(t.resources),
                  n = [tE(t.iss)],
                  o = tI(t.iss);
                if (s) {
                  let e = tA(s),
                    t = tR(s);
                  p.push(...e), n.push(...t);
                }
                for (let e of n) u.push(`${e}:${o}`);
              }
              let d = await this.client.core.crypto.generateSharedKey(c, a);
              if ((r.addTrace(nu.create_authenticated_session_topic), p?.length > 0)) {
                (t = {
                  topic: d,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: eS(aG),
                  authentication: s,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: 'irn' },
                  pairingTopic: n.pairingTopic,
                  namespaces: sZ([...new Set(p)], [...new Set(u)]),
                  transportType: o,
                }),
                  r.addTrace(nu.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(d, { transportType: o });
                } catch (e) {
                  throw (r.setError(nd.subscribe_authenticated_session_topic_failure), e);
                }
                r.addTrace(nu.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(d, t),
                  r.addTrace(nu.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              r.addTrace(nu.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: i,
                  result: {
                    cacaos: s,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (r.setError(nd.authenticated_session_approve_publish_failure), e);
              }
              return (
                await this.client.auth.requests.delete(i, { message: 'fulfilled', code: 0 }),
                await this.client.core.pairing.activate({ topic: n.pairingTopic }),
                this.client.core.eventClient.deleteEvent({ eventId: r.eventId }),
                { session: t }
              );
            }),
            ce(this, 'rejectSessionAuthenticate', async (e) => {
              this.isInitialized();
              let { id: t, reason: i } = e,
                s = this.getPendingAuthRequest(t);
              if (!s) throw Error(`Could not find pending auth request with id ${t}`);
              s.transportType === r4.relay && (await this.confirmOnlineStateOrThrow());
              let r = s.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = sO(r);
              await this.sendError({
                id: t,
                topic: o,
                error: i,
                encodeOpts: { type: 1, receiverPublicKey: r, senderPublicKey: n },
                rpcOpts: aJ.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(s.requester.metadata, s.transportType),
              }),
                await this.client.auth.requests.delete(t, { message: 'rejected', code: 0 }),
                await this.client.proposal.delete(t, s2('USER_DISCONNECTED'));
            }),
            ce(this, 'formatAuthMessage', (e) => {
              this.isInitialized();
              let { request: t, iss: i } = e;
              return t_(t, i);
            }),
            ce(this, 'processRelayMessageCache', () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            ce(this, 'cleanupDuplicatePairings', async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    i = this.client.core.pairing.pairings.getAll().filter((i) => {
                      var s, r;
                      return (
                        (null == (s = i.peerMetadata) ? void 0 : s.url) &&
                        (null == (r = i.peerMetadata) ? void 0 : r.url) === e.peer.metadata.url &&
                        i.topic &&
                        i.topic !== t.topic
                      );
                    });
                  if (0 === i.length) return;
                  this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`),
                    await Promise.all(
                      i.map((e) => this.client.core.pairing.disconnect({ topic: e.topic }))
                    ),
                    this.client.logger.info('Duplicate pairings clean up finished');
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            ce(this, 'deleteSession', async (e) => {
              var t;
              let { topic: i, expirerHasDeleted: s = !1, emitEvent: r = !0, id: n = 0 } = e,
                { self: o } = this.client.session.get(i);
              await this.client.core.relayer.unsubscribe(i),
                await this.client.session.delete(i, s2('USER_DISCONNECTED')),
                this.addToRecentlyDeleted(i, 'session'),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(i) &&
                  (await this.client.core.crypto.deleteSymKey(i)),
                s || this.client.core.expirer.del(i),
                this.client.core.storage.removeItem(aV).catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === i && this.deletePendingSessionRequest(e.id, s2('USER_DISCONNECTED'));
                }),
                i === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) &&
                  (this.sessionRequestQueue.state = aQ.idle),
                r && this.client.events.emit('session_delete', { id: n, topic: i });
            }),
            ce(this, 'deleteProposal', async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    i = this.client.core.eventClient.getEvent({ topic: t.pairingTopic });
                  i?.setError(np.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, s2('USER_DISCONNECTED')),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'proposal');
            }),
            ce(this, 'deletePendingSessionRequest', async (e, t, i = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'request'),
                (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
                  (t) => t.id !== e
                )),
                i &&
                  ((this.sessionRequestQueue.state = aQ.idle),
                  this.client.events.emit('session_request_expire', { id: e }));
            }),
            ce(this, 'deletePendingAuthRequest', async (e, t, i = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            ce(this, 'setExpiry', async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            ce(this, 'setProposal', async (e, t) => {
              this.client.core.expirer.set(e, eS(aJ.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            ce(this, 'setAuthRequest', async (e, t) => {
              let { request: i, pairingTopic: s, transportType: r = r4.relay } = t;
              this.client.core.expirer.set(e, i.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: i.authPayload,
                  requester: i.requester,
                  expiryTimestamp: i.expiryTimestamp,
                  id: e,
                  pairingTopic: s,
                  verifyContext: i.verifyContext,
                  transportType: r,
                });
            }),
            ce(this, 'setPendingSessionRequest', async (e) => {
              let { id: t, topic: i, params: s, verifyContext: r } = e,
                n = s.request.expiryTimestamp || eS(aJ.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: i,
                  params: s,
                  verifyContext: r,
                });
            }),
            ce(this, 'sendRequest', async (e) => {
              let t, s;
              let {
                  topic: r,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: p,
                  tvf: u,
                } = e,
                d = (0, rB.formatJsonRpcRequest)(n, o, l),
                g = !!p;
              try {
                let e = g ? sP : sI;
                t = await this.client.core.crypto.encode(r, d, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${r} failed`
                  ),
                  e)
                );
              }
              if (aZ.includes(n)) {
                let e = sx(JSON.stringify(d)),
                  i = sx(t);
                s = await this.client.core.verify.register({ id: i, decryptedId: e });
              }
              let f = aJ[n].req;
              if (
                ((f.attestation = s),
                a && (f.ttl = a),
                c && (f.id = c),
                this.client.core.history.set(r, d),
                g)
              ) {
                let e = sM(p, r, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = aJ[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = a7(a9({}, u), { correlationId: d.id })),
                  h
                    ? ((e.internal = a7(a9({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(r, t, e))
                    : this.client.core.relayer
                        .publish(r, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return d.id;
            }),
            ce(this, 'sendResult', async (e) => {
              let t, s, r;
              let {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                p = (0, rB.formatJsonRpcResult)(n, a),
                u = h && 'u' > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? sP : sI;
                t = await this.client.core.crypto.encode(
                  o,
                  p,
                  a7(a9({}, l || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${o} failed`
                  ),
                  e)
                );
              }
              try {
                let e = (s = await this.client.core.history.get(o, n)).request;
                try {
                  this.shouldSetTVF(e.method, e.params) && (r = this.getTVFParams(n, e.params, a));
                } catch (e) {
                  this.client.logger.warn('sendResult() -> getTVFParams() failed', e);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(`sendResult() -> history.get(${o}, ${n}) failed`), e)
                );
              }
              if (u) {
                let e = sM(h, o, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = aJ[s.request.method].res;
                (e.tvf = a7(a9({}, r), { correlationId: n })),
                  c
                    ? ((e.internal = a7(a9({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(o, t, e))
                    : this.client.core.relayer
                        .publish(o, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(p);
            }),
            ce(this, 'sendError', async (e) => {
              let t, s;
              let { id: r, topic: n, error: o, encodeOpts: a, rpcOpts: c, appLink: l } = e,
                h = (0, rB.formatJsonRpcError)(r, o),
                p = l && 'u' > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = p ? sP : sI;
                t = await this.client.core.crypto.encode(
                  n,
                  h,
                  a7(a9({}, a || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                s = await this.client.core.history.get(n, r);
              } catch (e) {
                throw (
                  (this.client.logger.error(`sendError() -> history.get(${n}, ${r}) failed`), e)
                );
              }
              if (p) {
                let e = sM(l, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = s.request.method,
                  i = c || aJ[e].res;
                this.client.core.relayer.publish(n, t, i);
              }
              await this.client.core.history.resolve(h);
            }),
            ce(this, 'cleanup', async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let i = !1;
                eO(t.expiry) && (i = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                  i && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  eO(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            ce(this, 'onProviderMessageEvent', async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            ce(this, 'onRelayEventRequest', async (e) => {
              this.requestQueue.queue.push(e), await this.processRequestsQueue();
            }),
            ce(this, 'processRequestsQueue', async () => {
              if (this.requestQueue.state === aQ.active) {
                this.client.logger.info('Request queue already active, skipping...');
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = aQ.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = aQ.idle;
            }),
            ce(this, 'processRequest', async (e) => {
              let { topic: t, payload: i, attestation: s, transportType: r, encryptedId: n } = e,
                o = i.method;
              if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: o }))
                switch (o) {
                  case 'wc_sessionPropose':
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: i,
                      attestation: s,
                      encryptedId: n,
                    });
                  case 'wc_sessionSettle':
                    return await this.onSessionSettleRequest(t, i);
                  case 'wc_sessionUpdate':
                    return await this.onSessionUpdateRequest(t, i);
                  case 'wc_sessionExtend':
                    return await this.onSessionExtendRequest(t, i);
                  case 'wc_sessionPing':
                    return await this.onSessionPingRequest(t, i);
                  case 'wc_sessionDelete':
                    return await this.onSessionDeleteRequest(t, i);
                  case 'wc_sessionRequest':
                    return await this.onSessionRequest({
                      topic: t,
                      payload: i,
                      attestation: s,
                      encryptedId: n,
                      transportType: r,
                    });
                  case 'wc_sessionEvent':
                    return await this.onSessionEventRequest(t, i);
                  case 'wc_sessionAuthenticate':
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: i,
                      attestation: s,
                      encryptedId: n,
                      transportType: r,
                    });
                  default:
                    return this.client.logger.info(`Unsupported request method ${o}`);
                }
            }),
            ce(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: i, transportType: s } = e,
                r = (await this.client.core.history.get(t, i.id)).request.method;
              switch (r) {
                case 'wc_sessionPropose':
                  return this.onSessionProposeResponse(t, i, s);
                case 'wc_sessionSettle':
                  return this.onSessionSettleResponse(t, i);
                case 'wc_sessionUpdate':
                  return this.onSessionUpdateResponse(t, i);
                case 'wc_sessionExtend':
                  return this.onSessionExtendResponse(t, i);
                case 'wc_sessionPing':
                  return this.onSessionPingResponse(t, i);
                case 'wc_sessionRequest':
                  return this.onSessionRequestResponse(t, i);
                case 'wc_sessionAuthenticate':
                  return this.onSessionAuthenticateResponse(t, i);
                default:
                  return this.client.logger.info(`Unsupported response method ${r}`);
              }
            }),
            ce(this, 'onRelayEventUnknownPayload', (e) => {
              let { topic: t } = e,
                { message: i } = s1(
                  'MISSING_OR_INVALID',
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(i);
            }),
            ce(this, 'shouldIgnorePairingRequest', (e) => {
              let { topic: t, requestMethod: i } = e,
                s = this.expectedPairingMethodMap.get(t);
              return (
                !(!s || s.includes(i)) &&
                !!(
                  s.includes('wc_sessionAuthenticate') &&
                  this.client.events.listenerCount('session_authenticate') > 0
                )
              );
            }),
            ce(this, 'onSessionProposeRequest', async (e) => {
              let { topic: t, payload: i, attestation: s, encryptedId: r } = e,
                { params: n, id: o } = i;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount('session_proposal') &&
                  (console.warn('No listener for session_proposal event'),
                  e?.setError(nl.proposal_listener_not_found)),
                  this.isValidConnect(a9({}, i.params));
                let a = n.expiryTimestamp || eS(aJ.wc_sessionPropose.req.ttl),
                  c = a9({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: s,
                  hash: sx(JSON.stringify(i)),
                  encryptedId: r,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(nc.emit_session_proposal),
                  this.client.events.emit('session_proposal', {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: e,
                  rpcOpts: aJ.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            ce(this, 'onSessionProposeResponse', async (e, t, i) => {
              let { id: s } = t;
              if ((0, rB.isJsonRpcResult)(t)) {
                let { result: r } = t;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  result: r,
                });
                let n = this.client.proposal.get(s);
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  proposal: n,
                });
                let o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  selfPublicKey: o,
                });
                let a = r.responderPublicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  peerPublicKey: a,
                });
                let c = await this.client.core.crypto.generateSharedKey(o, a);
                this.pendingSessions.set(s, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: s,
                  publicKey: o,
                });
                let l = await this.client.core.relayer.subscribe(c, { transportType: i });
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, rB.isJsonRpcError)(t)) {
                await this.client.proposal.delete(s, s2('USER_DISCONNECTED'));
                let e = ex('session_connect', s);
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            ce(this, 'onSessionSettleRequest', async (e, t) => {
              let { id: i, params: s } = t;
              try {
                this.isValidSessionSettleRequest(s);
                let {
                    relay: i,
                    controller: r,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
                    scopedProperties: c,
                    sessionConfig: l,
                  } = t.params,
                  h = [...this.pendingSessions.values()].find((t) => t.sessionTopic === e);
                if (!h) return this.client.logger.error(`Pending session not found for topic ${e}`);
                let p = this.client.proposal.get(h.proposalId),
                  u = a7(
                    a9(
                      a9(
                        a9(
                          {
                            topic: e,
                            relay: i,
                            expiry: n,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: h.pairingTopic,
                            requiredNamespaces: p.requiredNamespaces,
                            optionalNamespaces: p.optionalNamespaces,
                            controller: r.publicKey,
                            self: { publicKey: h.publicKey, metadata: this.client.metadata },
                            peer: { publicKey: r.publicKey, metadata: r.metadata },
                          },
                          a && { sessionProperties: a }
                        ),
                        c && { scopedProperties: c }
                      ),
                      l && { sessionConfig: l }
                    ),
                    { transportType: r4.relay }
                  );
                await this.client.session.set(u.topic, u),
                  await this.setExpiry(u.topic, u.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: h.pairingTopic,
                    metadata: u.peer.metadata,
                  }),
                  this.client.events.emit('session_connect', { session: u }),
                  this.events.emit(ex('session_connect', h.proposalId), { session: u }),
                  this.pendingSessions.delete(h.proposalId),
                  this.deleteProposal(h.proposalId, !1),
                  this.cleanupDuplicatePairings(u),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ce(this, 'onSessionSettleResponse', async (e, t) => {
              let { id: i } = t;
              (0, rB.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(ex('session_approve', i), {}))
                : (0, rB.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, s2('USER_DISCONNECTED')),
                  this.events.emit(ex('session_approve', i), { error: t.error }));
            }),
            ce(this, 'onSessionUpdateRequest', async (e, t) => {
              let { params: i, id: s } = t;
              try {
                let t = `${e}_session_update`,
                  r = rh.get(t);
                if (r && this.isRequestOutOfSync(r, s)) {
                  this.client.logger.warn(`Discarding out of sync request - ${s}`),
                    this.sendError({ id: s, topic: e, error: s2('INVALID_UPDATE_REQUEST') });
                  return;
                }
                this.isValidUpdate(a9({ topic: e }, i));
                try {
                  rh.set(t, s),
                    await this.client.session.update(e, { namespaces: i.namespaces }),
                    await this.sendResult({
                      id: s,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (rh.delete(t), e);
                }
                this.client.events.emit('session_update', { id: s, topic: e, params: i });
              } catch (t) {
                await this.sendError({ id: s, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ce(
              this,
              'isRequestOutOfSync',
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            ce(this, 'onSessionUpdateResponse', (e, t) => {
              let { id: i } = t,
                s = ex('session_update', i);
              if (0 === this.events.listenerCount(s))
                throw Error(`emitting ${s} without any listeners`);
              (0, rB.isJsonRpcResult)(t)
                ? this.events.emit(ex('session_update', i), {})
                : (0, rB.isJsonRpcError)(t) &&
                  this.events.emit(ex('session_update', i), { error: t.error });
            }),
            ce(this, 'onSessionExtendRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, eS(aG)),
                  await this.sendResult({ id: i, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_extend', { id: i, topic: e });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ce(this, 'onSessionExtendResponse', (e, t) => {
              let { id: i } = t,
                s = ex('session_extend', i);
              if (0 === this.events.listenerCount(s))
                throw Error(`emitting ${s} without any listeners`);
              (0, rB.isJsonRpcResult)(t)
                ? this.events.emit(ex('session_extend', i), {})
                : (0, rB.isJsonRpcError)(t) &&
                  this.events.emit(ex('session_extend', i), { error: t.error });
            }),
            ce(this, 'onSessionPingRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: i, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_ping', { id: i, topic: e });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ce(this, 'onSessionPingResponse', (e, t) => {
              let { id: i } = t,
                s = ex('session_ping', i);
              setTimeout(() => {
                if (0 === this.events.listenerCount(s))
                  throw Error(`emitting ${s} without any listeners 2176`);
                (0, rB.isJsonRpcResult)(t)
                  ? this.events.emit(ex('session_ping', i), {})
                  : (0, rB.isJsonRpcError)(t) &&
                    this.events.emit(ex('session_ping', i), { error: t.error });
              }, 500);
            }),
            ce(this, 'onSessionDeleteRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(r5.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: i }));
                      });
                    }),
                    this.sendResult({ id: i, topic: e, result: !0, throwOnFailedPublish: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: s2('USER_DISCONNECTED'),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            ce(this, 'onSessionRequest', async (e) => {
              var t, i, s;
              let { topic: r, payload: n, attestation: o, encryptedId: a, transportType: c } = e,
                { id: l, params: h } = n;
              try {
                await this.isValidRequest(a9({ topic: r }, h));
                let e = this.client.session.get(r),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: sx(
                      JSON.stringify((0, rB.formatJsonRpcRequest)('wc_sessionRequest', h, l))
                    ),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  p = { id: l, topic: r, params: h, verifyContext: n };
                await this.setPendingSessionRequest(p),
                  c === r4.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (i = e.peer.metadata.redirect) ? void 0 : i.universal
                    ),
                  null != (s = this.client.signConfig) && s.disableRequestQueue
                    ? this.emitSessionRequest(p)
                    : (this.addSessionRequestToSessionRequestQueue(p),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: r, error: e }), this.client.logger.error(e);
              }
            }),
            ce(this, 'onSessionRequestResponse', (e, t) => {
              let { id: i } = t,
                s = ex('session_request', i);
              if (0 === this.events.listenerCount(s))
                throw Error(`emitting ${s} without any listeners`);
              (0, rB.isJsonRpcResult)(t)
                ? this.events.emit(ex('session_request', i), { result: t.result })
                : (0, rB.isJsonRpcError)(t) &&
                  this.events.emit(ex('session_request', i), { error: t.error });
            }),
            ce(this, 'onSessionEventRequest', async (e, t) => {
              let { id: i, params: s } = t;
              try {
                let t = `${e}_session_event_${s.event.name}`,
                  r = rh.get(t);
                if (r && this.isRequestOutOfSync(r, i)) {
                  this.client.logger.info(`Discarding out of sync request - ${i}`);
                  return;
                }
                this.isValidEmit(a9({ topic: e }, s)),
                  this.client.events.emit('session_event', { id: i, topic: e, params: s }),
                  rh.set(t, i);
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ce(this, 'onSessionAuthenticateResponse', (e, t) => {
              let { id: i } = t;
              this.client.logger.trace({
                type: 'method',
                method: 'onSessionAuthenticateResponse',
                topic: e,
                payload: t,
              }),
                (0, rB.isJsonRpcResult)(t)
                  ? this.events.emit(ex('session_request', i), { result: t.result })
                  : (0, rB.isJsonRpcError)(t) &&
                    this.events.emit(ex('session_request', i), { error: t.error });
            }),
            ce(this, 'onSessionAuthenticateRequest', async (e) => {
              var t;
              let { topic: i, payload: s, attestation: r, encryptedId: n, transportType: o } = e;
              try {
                let { requester: e, authPayload: a, expiryTimestamp: c } = s.params,
                  l = await this.getVerifyContext({
                    attestationId: r,
                    hash: sx(JSON.stringify(s)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: i,
                    id: s.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(s.id, { request: h, pairingTopic: i, transportType: o }),
                  o === r4.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(e.metadata.redirect.universal),
                  this.client.events.emit('session_authenticate', {
                    topic: i,
                    params: s.params,
                    id: s.id,
                    verifyContext: l,
                  });
              } catch (n) {
                this.client.logger.error(n);
                let e = s.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  r = this.getAppLinkIfEnabled(s.params.requester.metadata, o);
                await this.sendError({
                  id: s.id,
                  topic: i,
                  error: n,
                  encodeOpts: { type: 1, receiverPublicKey: e, senderPublicKey: t },
                  rpcOpts: aJ.wc_sessionAuthenticate.autoReject,
                  appLink: r,
                });
              }
            }),
            ce(this, 'addSessionRequestToSessionRequestQueue', (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            ce(this, 'cleanupAfterResponse', (e) => {
              this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = aQ.idle), this.processSessionRequestQueue();
                  },
                  (0, o.toMiliseconds)(this.requestQueueDelay)
                );
            }),
            ce(this, 'cleanupPendingSentRequestsForTopic', ({ topic: e, error: t }) => {
              let i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter((t) => t.topic === e && 'wc_sessionRequest' === t.request.method)
                  .forEach((e) => {
                    let i = ex('session_request', e.request.id);
                    if (0 === this.events.listenerCount(i))
                      throw Error(`emitting ${i} without any listeners`);
                    this.events.emit(ex('session_request', e.request.id), { error: t });
                  });
            }),
            ce(this, 'processSessionRequestQueue', () => {
              if (this.sessionRequestQueue.state === aQ.active) {
                this.client.logger.info('session request queue is already active.');
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info('session request queue is empty.');
                return;
              }
              try {
                (this.sessionRequestQueue.state = aQ.active), this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            ce(this, 'emitSessionRequest', (e) => {
              this.client.events.emit('session_request', e);
            }),
            ce(this, 'onPairingCreated', (e) => {
              if ((e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active))
                return;
              let t = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, rB.formatJsonRpcRequest)(
                    'wc_sessionPropose',
                    a7(a9({}, t), {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                      scopedProperties: t.scopedProperties,
                    }),
                    t.id
                  ),
                });
            }),
            ce(this, 'isValidConnect', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1(
                  'MISSING_OR_INVALID',
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: i,
                optionalNamespaces: s,
                sessionProperties: r,
                scopedProperties: n,
                relays: o,
              } = e;
              if (
                (s3(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let i = !1;
                  return (
                    t && !e
                      ? (i = !0)
                      : e &&
                        s8(e) &&
                        e.length &&
                        e.forEach((e) => {
                          i = ri(e);
                        }),
                    i
                  );
                })(o, !0))
              ) {
                let { message: e } = s1('MISSING_OR_INVALID', `connect() relays: ${o}`);
                throw Error(e);
              }
              if (
                (s3(i) || 0 === s5(i) || this.validateNamespaces(i, 'requiredNamespaces'),
                s3(s) || 0 === s5(s) || this.validateNamespaces(s, 'optionalNamespaces'),
                s3(r) || this.validateSessionProps(r, 'sessionProperties'),
                !s3(n))
              ) {
                this.validateSessionProps(n, 'scopedProperties');
                let e = Object.keys(i || {}).concat(Object.keys(s || {}));
                if (!Object.keys(n).every((t) => e.includes(t)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n)}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            ce(this, 'validateNamespaces', (e, t) => {
              let i = (function (e, t, i) {
                let s = null;
                if (e && s5(e)) {
                  let r;
                  let n = re(e, t);
                  n && (s = n);
                  let o =
                    ((r = null),
                    Object.entries(e).forEach(([e, s]) => {
                      var n, o;
                      let a;
                      if (r) return;
                      let c =
                        ((n = ee(e, s)),
                        (o = `${t} ${i}`),
                        (a = null),
                        s8(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                s9(e) ||
                                (a = s2(
                                  'UNSUPPORTED_CHAINS',
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : s9(e) ||
                            (a = s2(
                              'UNSUPPORTED_CHAINS',
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (r = c);
                    }),
                    r);
                  o && (s = o);
                } else s = s1('MISSING_OR_INVALID', `${t}, ${i} should be an object with data`);
                return s;
              })(e, 'connect()', t);
              if (i) throw Error(i.message);
            }),
            ce(this, 'isValidApprove', async (e) => {
              if (!rs(e)) throw Error(s1('MISSING_OR_INVALID', `approve() params: ${e}`).message);
              let {
                id: t,
                namespaces: i,
                relayProtocol: s,
                sessionProperties: r,
                scopedProperties: n,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let o = this.client.proposal.get(t),
                a = rt(i, 'approve()');
              if (a) throw Error(a.message);
              let c = rn(o.requiredNamespaces, i, 'approve()');
              if (c) throw Error(c.message);
              if (!s6(s, !0)) {
                let { message: e } = s1('MISSING_OR_INVALID', `approve() relayProtocol: ${s}`);
                throw Error(e);
              }
              if ((s3(r) || this.validateSessionProps(r, 'sessionProperties'), !s3(n))) {
                this.validateSessionProps(n, 'scopedProperties');
                let e = new Set(Object.keys(i));
                if (!Object.keys(n).every((t) => e.has(t)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n)}, approved namespaces: ${Array.from(e).join(', ')}`
                  );
              }
            }),
            ce(this, 'isValidReject', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `reject() params: ${e}`);
                throw Error(t);
              }
              let { id: t, reason: i } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    'object' != typeof e ||
                    !e.code ||
                    !s4(e.code, !1) ||
                    !e.message ||
                    !s6(e.message, !1)
                  );
                })(i))
              ) {
                let { message: e } = s1(
                  'MISSING_OR_INVALID',
                  `reject() reason: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            ce(this, 'isValidSessionSettleRequest', (e) => {
              if (!rs(e)) {
                let { message: t } = s1(
                  'MISSING_OR_INVALID',
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: i, namespaces: s, expiry: r } = e;
              if (!ri(t)) {
                let { message: e } = s1(
                  'MISSING_OR_INVALID',
                  'onSessionSettleRequest() relay protocol should be a string'
                );
                throw Error(e);
              }
              let n = (function (e, t) {
                let i = null;
                return (
                  s6(e?.publicKey, !1) ||
                    (i = s1('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
                  i
                );
              })(i, 'onSessionSettleRequest()');
              if (n) throw Error(n.message);
              let o = rt(s, 'onSessionSettleRequest()');
              if (o) throw Error(o.message);
              if (eO(r)) {
                let { message: e } = s1('EXPIRED', 'onSessionSettleRequest()');
                throw Error(e);
              }
            }),
            ce(this, 'isValidUpdate', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `update() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, namespaces: i } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let s = this.client.session.get(t),
                r = rt(i, 'update()');
              if (r) throw Error(r.message);
              let n = rn(s.requiredNamespaces, i, 'update()');
              if (n) throw Error(n.message);
            }),
            ce(this, 'isValidExtend', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            ce(this, 'isValidRequest', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `request() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, request: i, chainId: s, expiry: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!rr(n, s)) {
                let { message: e } = s1('MISSING_OR_INVALID', `request() chainId: ${s}`);
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(s3(e) || !s6(e.method, !1));
                })(i)
              ) {
                let { message: e } = s1('MISSING_OR_INVALID', `request() ${JSON.stringify(i)}`);
                throw Error(e);
              }
              if (
                !(function (e, t, i) {
                  return (
                    !!s6(i, !1) &&
                    (function (e, t) {
                      let i = [];
                      return (
                        Object.values(e).forEach((e) => {
                          sW(e.accounts).includes(t) && i.push(...e.methods);
                        }),
                        i
                      );
                    })(e, t).includes(i)
                  );
                })(n, s, i.method)
              ) {
                let { message: e } = s1('MISSING_OR_INVALID', `request() method: ${i.method}`);
                throw Error(e);
              }
              if (
                r &&
                !(function (e, t) {
                  return s4(e, !1) && e <= t.max && e >= t.min;
                })(r, aW)
              ) {
                let { message: e } = s1(
                  'MISSING_OR_INVALID',
                  `request() expiry: ${r}. Expiry must be a number (in seconds) between ${aW.min} and ${aW.max}`
                );
                throw Error(e);
              }
            }),
            ce(this, 'isValidRespond', async (e) => {
              var t;
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `respond() params: ${e}`);
                throw Error(t);
              }
              let { topic: i, response: s } = e;
              try {
                await this.isValidSessionTopic(i);
              } catch (i) {
                throw (null != (t = e?.response) && t.id && this.cleanupAfterResponse(e), i);
              }
              if (
                !(function (e) {
                  return !(
                    s3(e) ||
                    (s3(e.result) && s3(e.error)) ||
                    !s4(e.id, !1) ||
                    !s6(e.jsonrpc, !1)
                  );
                })(s)
              ) {
                let { message: e } = s1(
                  'MISSING_OR_INVALID',
                  `respond() response: ${JSON.stringify(s)}`
                );
                throw Error(e);
              }
            }),
            ce(this, 'isValidPing', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            ce(this, 'isValidEmit', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `emit() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, event: i, chainId: s } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: r } = this.client.session.get(t);
              if (!rr(r, s)) {
                let { message: e } = s1('MISSING_OR_INVALID', `emit() chainId: ${s}`);
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(s3(e) || !s6(e.name, !1));
                })(i) ||
                !(function (e, t, i) {
                  return (
                    !!s6(i, !1) &&
                    (function (e, t) {
                      let i = [];
                      return (
                        Object.values(e).forEach((e) => {
                          sW(e.accounts).includes(t) && i.push(...e.events);
                        }),
                        i
                      );
                    })(e, t).includes(i)
                  );
                })(r, s, i.name)
              ) {
                let { message: e } = s1('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(i)}`);
                throw Error(e);
              }
            }),
            ce(this, 'isValidDisconnect', async (e) => {
              if (!rs(e)) {
                let { message: t } = s1('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            ce(this, 'isValidAuthenticate', (e) => {
              let { chains: t, uri: i, domain: s, nonce: r } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error('chains is required and must be a non-empty array');
              if (!s6(i, !1)) throw Error('uri is required parameter');
              if (!s6(s, !1)) throw Error('domain is required parameter');
              if (!s6(r, !1)) throw Error('nonce is required parameter');
              if ([...new Set(t.map((e) => Y(e).namespace))].length > 1)
                throw Error(
                  'Multi-namespace requests are not supported. Please request single namespace only.'
                );
              let { namespace: n } = Y(t[0]);
              if ('eip155' !== n)
                throw Error(
                  'Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.'
                );
            }),
            ce(this, 'getVerifyContext', async (e) => {
              let { attestationId: t, hash: i, encryptedId: s, metadata: r, transportType: n } = e,
                o = {
                  verified: {
                    verifyUrl: r.verifyUrl || nn,
                    validation: 'UNKNOWN',
                    origin: r.url || '',
                  },
                };
              try {
                if (n === r4.link_mode) {
                  let e = this.getAppLinkIfEnabled(r, n);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(r.url).origin ? 'VALID' : 'INVALID'),
                    o
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: i,
                  encryptedId: s,
                  verifyUrl: r.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(r.url).origin ? 'VALID' : 'INVALID'));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o;
            }),
            ce(this, 'validateSessionProps', (e, t) => {
              Object.values(e).forEach((i, s) => {
                if (null == i) {
                  let { message: r } = s1(
                    'MISSING_OR_INVALID',
                    `${t} must contain an existing value for each key. Received: ${i} for key ${Object.keys(e)[s]}`
                  );
                  throw Error(r);
                }
              });
            }),
            ce(this, 'getPendingAuthRequest', (e) => {
              let t = this.client.auth.requests.get(e);
              return 'object' == typeof t ? t : void 0;
            }),
            ce(this, 'addToRecentlyDeleted', (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let i of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(i);
                }
              }
            }),
            ce(this, 'checkRecentlyDeleted', (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: i } = s1(
                  'MISSING_OR_INVALID',
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(i);
              }
            }),
            ce(this, 'isLinkModeEnabled', (e, t) => {
              var s, r, n, o, a, c, l, h, p;
              return (
                !!e &&
                t === r4.link_mode &&
                (null == (r = null == (s = this.client.metadata) ? void 0 : s.redirect)
                  ? void 0
                  : r.linkMode) === !0 &&
                (null == (o = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : o.universal) !== void 0 &&
                (null == (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : c.universal) !== '' &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== '' &&
                (null == (p = e?.redirect) ? void 0 : p.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(e.redirect.universal) &&
                'u' > typeof (null == i.g ? void 0 : i.g.Linking)
              );
            }),
            ce(this, 'getAppLinkIfEnabled', (e, t) => {
              var i;
              return this.isLinkModeEnabled(e, t)
                ? null == (i = e?.redirect)
                  ? void 0
                  : i.universal
                : void 0;
            }),
            ce(this, 'handleLinkModeMessage', ({ url: e }) => {
              if (!e || !e.includes('wc_ev') || !e.includes('topic')) return;
              let t = eN(e, 'topic') || '',
                i = decodeURIComponent(eN(e, 'wc_ev') || ''),
                s = this.client.session.keys.includes(t);
              s && this.client.session.update(t, { transportType: r4.link_mode }),
                this.client.core.dispatchEnvelope({ topic: t, message: i, sessionExists: s });
            }),
            ce(this, 'registerLinkModeListeners', async () => {
              var e;
              if (eq() || (eu() && null != (e = this.client.metadata.redirect) && e.linkMode)) {
                let e = null == i.g ? void 0 : i.g.Linking;
                if ('u' > typeof e) {
                  e.addEventListener('url', this.handleLinkModeMessage, this.client.name);
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            ce(this, 'shouldSetTVF', (e, t) => {
              if (!t || 'wc_sessionRequest' !== e) return !1;
              let { request: i } = t;
              return Object.keys(aY).includes(i.method);
            }),
            ce(this, 'getTVFParams', (e, t, i) => {
              var s, r;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, i);
                return a7(
                  a9(
                    { correlationId: e, rpcMethods: [n], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null == (r = null == (s = t.request.params) ? void 0 : s[0])
                          ? void 0
                          : r.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (e) {
                this.client.logger.warn('Error getting TVF params', e);
              }
              return {};
            }),
            ce(this, 'isValidContractData', (e) => {
              var t;
              if (!e) return !1;
              try {
                let i = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!i.startsWith('0x')) return !1;
                let s = i.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(s) && s.length % 2 == 0;
              } catch {}
              return !1;
            }),
            ce(this, 'extractTxHashesFromResult', (e, t) => {
              try {
                let i = aY[e];
                if ('string' == typeof t) return [t];
                let s = t[i.key];
                if (s8(s))
                  return 'solana_signAllTransactions' === e
                    ? s.map((e) =>
                        (function (e) {
                          let t = atob(e),
                            i = new Uint8Array(t.length);
                          for (let e = 0; e < t.length; e++) i[e] = t.charCodeAt(e);
                          let s = i[0];
                          if (0 === s) throw Error('No signatures found');
                          if (i.length < 1 + 64 * s)
                            throw Error('Transaction data too short for claimed signature count');
                          if (i.length < 100) throw Error('Transaction too short');
                          let r = Q.from(e, 'base64').slice(1, 65);
                          return k.encode(r);
                        })(e)
                      )
                    : s;
                if ('string' == typeof s) return [s];
              } catch (e) {
                this.client.logger.warn('Error extracting tx hashes from result', e);
              }
              return [];
            });
        }
        async processPendingMessageEvents() {
          try {
            let e = this.client.session.keys,
              t = this.client.core.relayer.messages.getWithoutAck(e);
            for (let [e, i] of Object.entries(t))
              for (let t of i)
                try {
                  await this.onProviderMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${e}, message: ${t}`
                  );
                }
          } catch (e) {
            this.client.logger.warn('processPendingMessageEvents failed', e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s1('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(r5.message, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: i, attestation: s, transportType: r } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(a0)
              ? this.client.auth.authKeys.get(a0)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let e = await this.client.core.crypto.decode(t, i, {
              receiverPublicKey: n,
              encoding: r === r4.link_mode ? sP : sI,
            });
            (0, rB.isJsonRpcRequest)(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: s,
                  transportType: r,
                  encryptedId: sx(i),
                }))
              : (0, rB.isJsonRpcResponse)(e)
                ? (await this.client.core.history.resolve(e),
                  await this.onRelayEventResponse({ topic: t, payload: e, transportType: r }),
                  this.client.core.history.delete(t, e.id))
                : await this.onRelayEventUnknownPayload({ topic: t, payload: e, transportType: r }),
              await this.client.core.relayer.messages.ack(t, i);
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(nr.expired, async (e) => {
            let { topic: t, id: i } = e_(e.target);
            return i && this.client.pendingRequest.keys.includes(i)
              ? await this.deletePendingSessionRequest(i, s1('EXPIRED'), !0)
              : i && this.client.auth.requests.keys.includes(i)
                ? await this.deletePendingAuthRequest(i, s1('EXPIRED'), !0)
                : void (t
                    ? this.client.session.keys.includes(t) &&
                      (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
                      this.client.events.emit('session_expire', { topic: t }))
                    : i &&
                      (await this.deleteProposal(i, !0),
                      this.client.events.emit('proposal_expire', { id: i })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(ni.create, (e) => this.onPairingCreated(e)),
            this.client.core.pairing.events.on(ni.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, 'pairing');
            });
        }
        isValidPairingTopic(e) {
          if (!s6(e, !1)) {
            let { message: t } = s1('MISSING_OR_INVALID', `pairing topic should be a string: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = s1('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (eO(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = s1('EXPIRED', `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!s6(e, !1)) {
            let { message: t } = s1('MISSING_OR_INVALID', `session topic should be a string: ${e}`);
            throw Error(t);
          }
          if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
            let { message: t } = s1('NO_MATCHING_KEY', `session topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (eO(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = s1('EXPIRED', `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = s1(
              'MISSING_OR_INVALID',
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
          else if (s6(e, !1)) {
            let { message: t } = s1(
              'NO_MATCHING_KEY',
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = s1(
              'MISSING_OR_INVALID',
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ('number' != typeof e) {
            let { message: t } = s1('MISSING_OR_INVALID', `proposal id should be a number: ${e}`);
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = s1('NO_MATCHING_KEY', `proposal id doesn't exist: ${e}`);
            throw Error(t);
          }
          if (eO(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = s1('EXPIRED', `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class ci extends an {
        constructor(e, t) {
          super(e, t, 'proposal', aH), (this.core = e), (this.logger = t);
        }
      }
      class cs extends an {
        constructor(e, t) {
          super(e, t, 'session', aH), (this.core = e), (this.logger = t);
        }
      }
      class cr extends an {
        constructor(e, t) {
          super(e, t, 'request', aH, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class cn extends an {
        constructor(e, t) {
          super(e, t, 'authKeys', aX, () => a0), (this.core = e), (this.logger = t);
        }
      }
      class co extends an {
        constructor(e, t) {
          super(e, t, 'pairingTopics', aX), (this.core = e), (this.logger = t);
        }
      }
      class ca extends an {
        constructor(e, t) {
          super(e, t, 'requests', aX, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      var cc = Object.defineProperty,
        cl = (e, t, i) =>
          t in e
            ? cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ch = (e, t, i) => cl(e, 'symbol' != typeof t ? t + '' : t, i);
      class cp {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ch(this, 'authKeys'),
            ch(this, 'pairingTopics'),
            ch(this, 'requests'),
            (this.authKeys = new cn(this.core, this.logger)),
            (this.pairingTopics = new co(this.core, this.logger)),
            (this.requests = new ca(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
        }
      }
      var cu = Object.defineProperty,
        cd = (e, t, i) =>
          t in e
            ? cu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        cg = (e, t, i) => cd(e, 'symbol' != typeof t ? t + '' : t, i);
      class cf extends rM {
        constructor(e) {
          super(e),
            cg(this, 'protocol', 'wc'),
            cg(this, 'version', 2),
            cg(this, 'name', aK.name),
            cg(this, 'metadata'),
            cg(this, 'core'),
            cg(this, 'logger'),
            cg(this, 'events', new s.EventEmitter()),
            cg(this, 'engine'),
            cg(this, 'session'),
            cg(this, 'proposal'),
            cg(this, 'pendingRequest'),
            cg(this, 'auth'),
            cg(this, 'signConfig'),
            cg(this, 'on', (e, t) => this.events.on(e, t)),
            cg(this, 'once', (e, t) => this.events.once(e, t)),
            cg(this, 'off', (e, t) => this.events.off(e, t)),
            cg(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            cg(this, 'removeAllListeners', (e) => this.events.removeAllListeners(e)),
            cg(this, 'connect', async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'pair', async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'approve', async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'reject', async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'update', async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'extend', async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'request', async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'respond', async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'ping', async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'emit', async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'disconnect', async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'find', (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'getPendingSessionRequests', () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'authenticate', async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'formatAuthMessage', (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'approveSessionAuthenticate', async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cg(this, 'rejectSessionAuthenticate', async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || aK.name),
            (this.metadata = (function (e) {
              var t, i;
              let s = ey();
              try {
                return (
                  null != e &&
                    e.url &&
                    s.url &&
                    e.url !== s.url &&
                    (console.warn(
                      `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${s.url}. This is probably unintended and can lead to issues.`
                    ),
                    (e.url = s.url)),
                  null != (t = e?.icons) &&
                    t.length &&
                    e.icons.length > 0 &&
                    (e.icons = e.icons.filter((e) => '' !== e)),
                  el(ec(ec({}, s), e), {
                    url: e?.url || s.url,
                    name: e?.name || s.name,
                    description: e?.description || s.description,
                    icons:
                      null != (i = e?.icons) && i.length && e.icons.length > 0 ? e.icons : s.icons,
                  })
                );
              } catch (t) {
                return console.warn('Error populating app metadata', t), e || s;
              }
            })(e?.metadata)),
            (this.signConfig = e?.signConfig);
          let t =
            'u' > typeof e?.logger && 'string' != typeof e?.logger
              ? e.logger
              : (0, rm.h6)((0, rm.iP)({ level: e?.logger || aK.logger }));
          (this.core = e?.core || new az(e)),
            (this.logger = (0, rm.U5)(t, this.name)),
            (this.session = new cs(this.core, this.logger)),
            (this.proposal = new ci(this.core, this.logger)),
            (this.pendingRequest = new cr(this.core, this.logger)),
            (this.engine = new ct(this)),
            (this.auth = new cp(this.core, this.logger));
        }
        static async init(e) {
          let t = new cf(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, rm.oI)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info('SignClient Initialization Success'),
              setTimeout(
                () => {
                  this.engine.processRelayMessageCache();
                },
                (0, o.toMiliseconds)(o.ONE_SECOND)
              );
          } catch (e) {
            throw (
              (this.logger.info('SignClient Initialization Failure'),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var cy = i(65807),
        cm = i(50887).Buffer;
      let cw = 'error',
        cb = 'wc@2:universal_provider:',
        cv = 'https://rpc.walletconnect.org/v1/',
        cE = 'generic',
        cI = `${cv}bundler`,
        cP = { DEFAULT_CHAIN_CHANGED: 'default_chain_changed' };
      function c_() {}
      function cS(e) {
        return null == e || ('object' != typeof e && 'function' != typeof e);
      }
      function cO(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function cx(e) {
        return 'object' == typeof e && null !== e;
      }
      function cA(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function cR(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      let cC = '[object String]',
        cN = '[object Number]',
        cT = '[object Boolean]',
        cq = '[object Arguments]';
      function c$(e, t, i, s = new Map(), r) {
        let n = r?.(e, t, i, s);
        if (null != n) return n;
        if (cS(e)) return e;
        if (s.has(e)) return s.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          s.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = c$(e[n], n, i, s, r);
          return (
            Object.hasOwn(e, 'index') && (t.index = e.index),
            Object.hasOwn(e, 'input') && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [n, o] of (s.set(e, t), e)) t.set(n, c$(o, n, i, s, r));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let n of (s.set(e, t), e)) t.add(c$(n, void 0, i, s, r));
          return t;
        }
        if ('u' > typeof cm && cm.isBuffer(e)) return e.subarray();
        if (cO(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          s.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = c$(e[n], n, i, s, r);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ('u' > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return s.set(e, t), cj(t, e, i, s, r), t;
        }
        if ('u' > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return s.set(e, t), cj(t, e, i, s, r), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return s.set(e, t), cj(t, e, i, s, r), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            s.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            cj(t, e, i, s, r),
            t
          );
        }
        if (
          'object' == typeof e &&
          (function (e) {
            switch (cR(e)) {
              case cq:
              case '[object Array]':
              case '[object ArrayBuffer]':
              case '[object DataView]':
              case cT:
              case '[object Date]':
              case '[object Float32Array]':
              case '[object Float64Array]':
              case '[object Int8Array]':
              case '[object Int16Array]':
              case '[object Int32Array]':
              case '[object Map]':
              case cN:
              case '[object Object]':
              case '[object RegExp]':
              case '[object Set]':
              case cC:
              case '[object Symbol]':
              case '[object Uint8Array]':
              case '[object Uint8ClampedArray]':
              case '[object Uint16Array]':
              case '[object Uint32Array]':
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return s.set(e, t), cj(t, e, i, s, r), t;
        }
        return e;
      }
      function cj(e, t, i = e, s, r) {
        let n = [...Object.keys(t), ...cA(t)];
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = c$(t[a], a, i, s, r));
        }
      }
      function cD(e) {
        return c$(e, void 0, e, new Map(), (t, i, s, r) => {
          let n = void 0;
          if (null != n) return n;
          if ('object' == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case cN:
              case cC:
              case cT: {
                let t = new e.constructor(e?.valueOf());
                return cj(t, e), t;
              }
              case cq: {
                let t = {};
                return (
                  cj(t, e), (t.length = e.length), (t[Symbol.iterator] = e[Symbol.iterator]), t
                );
              }
              default:
                return;
            }
        });
      }
      function ck(e) {
        return null !== e && 'object' == typeof e && '[object Arguments]' === cR(e);
      }
      var cU = Object.defineProperty,
        cM = Object.defineProperties,
        cL = Object.getOwnPropertyDescriptors,
        cz = Object.getOwnPropertySymbols,
        cB = Object.prototype.hasOwnProperty,
        cH = Object.prototype.propertyIsEnumerable,
        cK = (e, t, i) =>
          t in e
            ? cU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        cV = (e, t) => {
          for (var i in t || (t = {})) cB.call(t, i) && cK(e, i, t[i]);
          if (cz) for (var i of cz(t)) cH.call(t, i) && cK(e, i, t[i]);
          return e;
        },
        cF = (e, t) => cM(e, cL(t));
      function cG(e, t, i) {
        var s;
        let r = Y(e);
        return (
          (null == (s = t.rpcMap) ? void 0 : s[r.reference]) ||
          `${cv}?chainId=${r.namespace}:${r.reference}&projectId=${i}`
        );
      }
      function cJ(e) {
        return e.includes(':') ? e.split(':')[1] : e;
      }
      function cW(e) {
        return e.map((e) => `${e.split(':')[0]}:${e.split(':')[1]}`);
      }
      function cQ(e = {}, t = {}) {
        return (function (e, ...t) {
          return (function (e, ...t) {
            let i = t.slice(0, -1),
              s = t[t.length - 1],
              r = e;
            for (let e = 0; e < i.length; e++)
              r = (function e(t, i, s, r) {
                if ((cS(t) && (t = Object(t)), null == i || 'object' != typeof i)) return t;
                if (r.has(i))
                  return (function (e) {
                    if (cS(e)) return e;
                    if (
                      Array.isArray(e) ||
                      cO(e) ||
                      e instanceof ArrayBuffer ||
                      ('u' > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
                    )
                      return e.slice(0);
                    let t = Object.getPrototypeOf(e),
                      i = t.constructor;
                    if (e instanceof Date || e instanceof Map || e instanceof Set) return new i(e);
                    if (e instanceof RegExp) {
                      let t = new i(e);
                      return (t.lastIndex = e.lastIndex), t;
                    }
                    if (e instanceof DataView) return new i(e.buffer.slice(0));
                    if (e instanceof Error) {
                      let t = new i(e.message);
                      return (t.stack = e.stack), (t.name = e.name), (t.cause = e.cause), t;
                    }
                    return 'u' > typeof File && e instanceof File
                      ? new i([e], e.name, { type: e.type, lastModified: e.lastModified })
                      : 'object' == typeof e
                        ? Object.assign(Object.create(t), e)
                        : e;
                  })(r.get(i));
                if ((r.set(i, t), Array.isArray(i))) {
                  i = i.slice();
                  for (let e = 0; e < i.length; e++) i[e] = i[e] ?? void 0;
                }
                let n = [...Object.keys(i), ...cA(i)];
                for (let o = 0; o < n.length; o++) {
                  let a = n[o],
                    c = i[a],
                    l = t[a];
                  if (
                    (ck(c) && (c = { ...c }),
                    ck(l) && (l = { ...l }),
                    'u' > typeof cm && cm.isBuffer(c) && (c = cD(c)),
                    Array.isArray(c))
                  ) {
                    if ('object' == typeof l && null != l) {
                      let e = [],
                        t = Reflect.ownKeys(l);
                      for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        e[s] = l[s];
                      }
                      l = e;
                    } else l = [];
                  }
                  let h = s(l, c, a, t, i, r);
                  null != h
                    ? (t[a] = h)
                    : Array.isArray(c) || (cx(l) && cx(c))
                      ? (t[a] = e(l, c, s, r))
                      : null == l &&
                          (function (e) {
                            if ('object' != typeof e || null == e) return !1;
                            if (null === Object.getPrototypeOf(e)) return !0;
                            if ('[object Object]' !== Object.prototype.toString.call(e)) {
                              let t = e[Symbol.toStringTag];
                              return (
                                !!(
                                  null != t &&
                                  Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
                                ) && e.toString() === `[object ${t}]`
                              );
                            }
                            let t = e;
                            for (; null !== Object.getPrototypeOf(t); )
                              t = Object.getPrototypeOf(t);
                            return Object.getPrototypeOf(e) === t;
                          })(c)
                        ? (t[a] = e({}, c, s, r))
                        : null == l && cO(c)
                          ? (t[a] = cD(c))
                          : (void 0 === l || void 0 !== c) && (t[a] = c);
                }
                return t;
              })(r, i[e], s, new Map());
            return r;
          })(e, ...t, c_);
        })(cY(e), cY(t));
      }
      function cY(e) {
        var t, i, s, r;
        let n = {};
        if (!s5(e)) return n;
        for (let [o, a] of Object.entries(e)) {
          let e = sQ(o) ? [o] : a.chains,
            c = a.methods || [],
            l = a.events || [],
            h = a.rpcMap || {},
            p = sY(o);
          n[p] = cF(cV(cV({}, n[p]), a), {
            chains: eA(e, null == (t = n[p]) ? void 0 : t.chains),
            methods: eA(c, null == (i = n[p]) ? void 0 : i.methods),
            events: eA(l, null == (s = n[p]) ? void 0 : s.events),
            rpcMap: cV(cV({}, h), null == (r = n[p]) ? void 0 : r.rpcMap),
          });
        }
        return n;
      }
      function cZ(e) {
        return e.includes(':') ? e.split(':')[2] : e;
      }
      function cX(e) {
        let t = {};
        for (let [i, s] of Object.entries(e)) {
          let e = s.methods || [],
            r = s.events || [],
            n = s.accounts || [],
            o = sQ(i) ? [i] : s.chains ? s.chains : cW(s.accounts);
          t[i] = { chains: o, methods: e, events: r, accounts: n };
        }
        return t;
      }
      function c0(e) {
        return 'number' == typeof e
          ? e
          : e.includes('0x')
            ? parseInt(e, 16)
            : isNaN(Number((e = e.includes(':') ? e.split(':')[1] : e)))
              ? e
              : Number(e);
      }
      let c1 = {},
        c2 = (e) => c1[e],
        c8 = (e, t) => {
          c1[e] = t;
        };
      var c5 = Object.defineProperty,
        c3 = (e, t, i) =>
          t in e
            ? c5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        c6 = (e, t, i) => c3(e, 'symbol' != typeof t ? t + '' : t, i);
      class c4 {
        constructor(e) {
          c6(this, 'name', 'polkadot'),
            c6(this, 'client'),
            c6(this, 'httpProviders'),
            c6(this, 'events'),
            c6(this, 'namespace'),
            c6(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let s = cJ(t);
              e[s] = this.createHttpProvider(
                s,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var c9 = Object.defineProperty,
        c7 = Object.defineProperties,
        le = Object.getOwnPropertyDescriptors,
        lt = Object.getOwnPropertySymbols,
        li = Object.prototype.hasOwnProperty,
        ls = Object.prototype.propertyIsEnumerable,
        lr = (e, t, i) =>
          t in e
            ? c9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ln = (e, t) => {
          for (var i in t || (t = {})) li.call(t, i) && lr(e, i, t[i]);
          if (lt) for (var i of lt(t)) ls.call(t, i) && lr(e, i, t[i]);
          return e;
        },
        lo = (e, t) => c7(e, le(t)),
        la = (e, t, i) => lr(e, 'symbol' != typeof t ? t + '' : t, i);
      class lc {
        constructor(e) {
          la(this, 'name', 'eip155'),
            la(this, 'client'),
            la(this, 'chainId'),
            la(this, 'namespace'),
            la(this, 'httpProviders'),
            la(this, 'events'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case 'eth_requestAccounts':
            case 'eth_accounts':
              return this.getAccounts();
            case 'wallet_switchEthereumChain':
              return await this.handleSwitchChain(e);
            case 'eth_chainId':
              return parseInt(this.getDefaultChain());
            case 'wallet_getCapabilities':
              return await this.getCapabilities(e);
            case 'wallet_getCallsStatus':
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        createHttpProvider(e, t) {
          let i = t || cG(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.V(i, c2('disableProviderPing')));
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let s = parseInt(cJ(t));
              e[s] = this.createHttpProvider(
                s,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, i;
          let s = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : '0x0',
            r = parseInt((s = s.startsWith('0x') ? s : `0x${s}`), 16);
          if (this.isChainApproved(r)) this.setDefaultChain(`${r}`);
          else if (this.namespace.methods.includes('wallet_switchEthereumChain'))
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: s }] },
              chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
            }),
              this.setDefaultChain(`${r}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${r}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, i, s;
          let r = null == (i = null == (t = e.request) ? void 0 : t.params) ? void 0 : i[0];
          if (!r) throw Error('Missing address parameter in `wallet_getCapabilities` request');
          let n = this.client.session.get(e.topic),
            o = (null == (s = n?.sessionProperties) ? void 0 : s.capabilities) || {};
          if (null != o && o[r]) return o?.[r];
          let a = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: lo(ln({}, n.sessionProperties || {}), {
                capabilities: lo(ln({}, o || {}), { [r]: a }),
              }),
            });
          } catch (e) {
            console.warn('Failed to update session with capabilities', e);
          }
          return a;
        }
        async getCallStatus(e) {
          var t, i;
          let s = this.client.session.get(e.topic),
            r = null == (t = s.sessionProperties) ? void 0 : t.bundler_name;
          if (r) {
            let t = this.getBundlerUrl(e.chainId, r);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (e) {
              console.warn('Failed to fetch call status from bundler', e, t);
            }
          }
          let n = null == (i = s.sessionProperties) ? void 0 : i.bundler_url;
          if (n)
            try {
              return await this.getUserOperationReceipt(n, e);
            } catch (e) {
              console.warn('Failed to fetch call status from custom bundler', e, n);
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error('Fetching call status not approved by the wallet.');
        }
        async getUserOperationReceipt(e, t) {
          var i;
          let s = new URL(e),
            r = await fetch(s, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                (0, rB.formatJsonRpcRequest)('eth_getUserOperationReceipt', [
                  null == (i = t.request.params) ? void 0 : i[0],
                ])
              ),
            });
          if (!r.ok) throw Error(`Failed to fetch user operation receipt - ${r.status}`);
          return await r.json();
        }
        getBundlerUrl(e, t) {
          return `${cI}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var ll = Object.defineProperty,
        lh = (e, t, i) =>
          t in e
            ? ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lp = (e, t, i) => lh(e, 'symbol' != typeof t ? t + '' : t, i);
      class lu {
        constructor(e) {
          lp(this, 'name', 'solana'),
            lp(this, 'client'),
            lp(this, 'httpProviders'),
            lp(this, 'events'),
            lp(this, 'namespace'),
            lp(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let s = cJ(t);
              e[s] = this.createHttpProvider(
                s,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var ld = Object.defineProperty,
        lg = (e, t, i) =>
          t in e
            ? ld(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lf = (e, t, i) => lg(e, 'symbol' != typeof t ? t + '' : t, i);
      class ly {
        constructor(e) {
          lf(this, 'name', 'cosmos'),
            lf(this, 'client'),
            lf(this, 'httpProviders'),
            lf(this, 'events'),
            lf(this, 'namespace'),
            lf(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let s = cJ(t);
              e[s] = this.createHttpProvider(
                s,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lm = Object.defineProperty,
        lw = (e, t, i) =>
          t in e
            ? lm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lb = (e, t, i) => lw(e, 'symbol' != typeof t ? t + '' : t, i);
      class lv {
        constructor(e) {
          lb(this, 'name', 'algorand'),
            lb(this, 'client'),
            lb(this, 'httpProviders'),
            lb(this, 'events'),
            lb(this, 'namespace'),
            lb(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let i = t || cG(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          return typeof i > 'u' ? void 0 : new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lE = Object.defineProperty,
        lI = (e, t, i) =>
          t in e
            ? lE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lP = (e, t, i) => lI(e, 'symbol' != typeof t ? t + '' : t, i);
      class l_ {
        constructor(e) {
          lP(this, 'name', 'cip34'),
            lP(this, 'client'),
            lP(this, 'httpProviders'),
            lP(this, 'events'),
            lP(this, 'namespace'),
            lP(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let i = this.getCardanoRPCUrl(t),
                s = cJ(t);
              e[s] = this.createHttpProvider(s, i);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || this.getCardanoRPCUrl(e);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lS = Object.defineProperty,
        lO = (e, t, i) =>
          t in e
            ? lS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lx = (e, t, i) => lO(e, 'symbol' != typeof t ? t + '' : t, i);
      class lA {
        constructor(e) {
          lx(this, 'name', 'elrond'),
            lx(this, 'client'),
            lx(this, 'httpProviders'),
            lx(this, 'events'),
            lx(this, 'namespace'),
            lx(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let s = cJ(t);
              e[s] = this.createHttpProvider(
                s,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lR = Object.defineProperty,
        lC = (e, t, i) =>
          t in e
            ? lR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lN = (e, t, i) => lC(e, 'symbol' != typeof t ? t + '' : t, i);
      class lT {
        constructor(e) {
          lN(this, 'name', 'multiversx'),
            lN(this, 'client'),
            lN(this, 'httpProviders'),
            lN(this, 'events'),
            lN(this, 'namespace'),
            lN(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let s = cJ(t);
              e[s] = this.createHttpProvider(
                s,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lq = Object.defineProperty,
        l$ = (e, t, i) =>
          t in e
            ? lq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lj = (e, t, i) => l$(e, 'symbol' != typeof t ? t + '' : t, i);
      class lD {
        constructor(e) {
          lj(this, 'name', 'near'),
            lj(this, 'client'),
            lj(this, 'httpProviders'),
            lj(this, 'events'),
            lj(this, 'namespace'),
            lj(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || cG(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace);
          return typeof i > 'u' ? void 0 : new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lk = Object.defineProperty,
        lU = (e, t, i) =>
          t in e
            ? lk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lM = (e, t, i) => lU(e, 'symbol' != typeof t ? t + '' : t, i);
      class lL {
        constructor(e) {
          lM(this, 'name', 'tezos'),
            lM(this, 'client'),
            lM(this, 'httpProviders'),
            lM(this, 'events'),
            lM(this, 'namespace'),
            lM(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || cG(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace);
          return typeof i > 'u' ? void 0 : new rH(new cy.A(i));
        }
      }
      var lz = Object.defineProperty,
        lB = (e, t, i) =>
          t in e
            ? lz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lH = (e, t, i) => lB(e, 'symbol' != typeof t ? t + '' : t, i);
      class lK {
        constructor(e) {
          lH(this, 'name', cE),
            lH(this, 'client'),
            lH(this, 'httpProviders'),
            lH(this, 'events'),
            lH(this, 'namespace'),
            lH(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = c2('events')),
            (this.client = c2('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
            ]),
            (this.namespace.methods = [
              ...new Set((this.namespace.methods || []).concat(e.methods || [])),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cP.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let i = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = Y(e);
                i[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            i
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || cG(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new rH(new cy.A(i, c2('disableProviderPing')));
        }
      }
      var lV = Object.defineProperty,
        lF = Object.defineProperties,
        lG = Object.getOwnPropertyDescriptors,
        lJ = Object.getOwnPropertySymbols,
        lW = Object.prototype.hasOwnProperty,
        lQ = Object.prototype.propertyIsEnumerable,
        lY = (e, t, i) =>
          t in e
            ? lV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        lZ = (e, t) => {
          for (var i in t || (t = {})) lW.call(t, i) && lY(e, i, t[i]);
          if (lJ) for (var i of lJ(t)) lQ.call(t, i) && lY(e, i, t[i]);
          return e;
        },
        lX = (e, t) => lF(e, lG(t)),
        l0 = (e, t, i) => lY(e, 'symbol' != typeof t ? t + '' : t, i);
      class l1 {
        constructor(e) {
          l0(this, 'client'),
            l0(this, 'namespaces'),
            l0(this, 'optionalNamespaces'),
            l0(this, 'sessionProperties'),
            l0(this, 'scopedProperties'),
            l0(this, 'events', new (r())()),
            l0(this, 'rpcProviders', {}),
            l0(this, 'session'),
            l0(this, 'providerOpts'),
            l0(this, 'logger'),
            l0(this, 'uri'),
            l0(this, 'disableProviderPing', !1),
            (this.providerOpts = e),
            (this.logger =
              'u' > typeof e?.logger && 'string' != typeof e?.logger
                ? e.logger
                : (0, rm.h6)((0, rm.iP)({ level: e?.logger || cw }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new l1(e);
          return await t.initialize(), t;
        }
        async request(e, t, i) {
          let [s, r] = this.validateChain(t);
          if (!this.session) throw Error('Please call connect() before request()');
          return await this.getProvider(s).request({
            request: lZ({}, e),
            chainId: `${s}:${r}`,
            topic: this.session.topic,
            expiry: i,
          });
        }
        sendAsync(e, t, i, s) {
          let r = new Date().getTime();
          this.request(e, i, s)
            .then((e) => t(null, (0, rB.formatJsonRpcResult)(r, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error('Sign Client not initialized');
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session) throw Error('Please call connect() before enable()');
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: s2('USER_DISCONNECTED'),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error('Sign Client not initialized');
          if ((this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing))
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error('Sign Client not initialized');
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: i, response: s } = await this.client.authenticate(e, t);
          i && ((this.uri = i), this.events.emit('display_uri', i));
          let r = await s();
          if (((this.session = r.session), this.session)) {
            let e = cX(this.session.namespaces);
            (this.namespaces = cQ(this.namespaces, e)),
              await this.persist('namespaces', this.namespaces),
              this.onConnect();
          }
          return r;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          let { uri: t, approval: i } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit('display_uri', t));
          let s = await i();
          this.session = s;
          let r = cX(s.namespaces);
          return (
            (this.namespaces = cQ(this.namespaces, r)),
            await this.persist('namespaces', this.namespaces),
            await this.persist('optionalNamespaces', this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [i, s] = this.validateChain(e),
              r = this.getProvider(i);
            r.name === cE ? r.setDefaultChain(`${i}:${s}`, t) : r.setDefaultChain(s, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info('Cleaning up inactive pairings...');
          let t = this.client.pairing.getAll();
          if (s8(t)) {
            for (let i of t)
              e.deletePairings
                ? this.client.core.expirer.set(i.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn('abortPairingAttempt is deprecated. This is now a no-op.');
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore('namespaces')) || {}),
            (this.optionalNamespaces = (await this.getFromStore('optionalNamespaces')) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace('Initialized'),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var e, t;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await cf.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || cw,
                relayUrl: this.providerOpts.relayUrl || 'wss://relay.walletconnect.org',
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(this.providerOpts.session.topic);
            } catch (i) {
              throw (
                (this.logger.error('Failed to get session', i),
                Error(
                  `The provided session: ${null == (t = null == (e = this.providerOpts) ? void 0 : e.session) ? void 0 : t.topic} doesn't exist in the Sign client`
                ))
              );
            }
          else {
            let e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace('SignClient Initialized');
        }
        createProviders() {
          if (!this.client) throw Error('Sign Client not initialized');
          if (!this.session)
            throw Error('Session not initialized. Please call connect() before enable()');
          let e = [...new Set(Object.keys(this.session.namespaces).map((e) => sY(e)))];
          c8('client', this.client),
            c8('events', this.events),
            c8('disableProviderPing', this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let i = Object.keys(t.namespaces).filter((t) => t.includes(e));
                  if (!i.length) return [];
                  let s = [];
                  return (
                    i.forEach((e) => {
                      let i = t.namespaces[e].accounts;
                      s.push(...i);
                    }),
                    s
                  );
                })(e, this.session),
                i = cW(t),
                s = lX(lZ({}, cQ(this.namespaces, this.optionalNamespaces)[e]), {
                  accounts: t,
                  chains: i,
                });
              switch (e) {
                case 'eip155':
                  this.rpcProviders[e] = new lc({ namespace: s });
                  break;
                case 'algorand':
                  this.rpcProviders[e] = new lv({ namespace: s });
                  break;
                case 'solana':
                  this.rpcProviders[e] = new lu({ namespace: s });
                  break;
                case 'cosmos':
                  this.rpcProviders[e] = new ly({ namespace: s });
                  break;
                case 'polkadot':
                  this.rpcProviders[e] = new c4({ namespace: s });
                  break;
                case 'cip34':
                  this.rpcProviders[e] = new l_({ namespace: s });
                  break;
                case 'elrond':
                  this.rpcProviders[e] = new lA({ namespace: s });
                  break;
                case 'multiversx':
                  this.rpcProviders[e] = new lT({ namespace: s });
                  break;
                case 'near':
                  this.rpcProviders[e] = new lD({ namespace: s });
                  break;
                case 'tezos':
                  this.rpcProviders[e] = new lL({ namespace: s });
                  break;
                default:
                  this.rpcProviders[cE]
                    ? this.rpcProviders[cE].updateNamespace(s)
                    : (this.rpcProviders[cE] = new lK({ namespace: s }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > 'u') throw Error('Sign Client is not initialized');
          this.client.on('session_ping', (e) => {
            var t;
            let { topic: i } = e;
            i === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit('session_ping', e);
          }),
            this.client.on('session_event', (e) => {
              var t;
              let { params: i, topic: s } = e;
              if (s !== (null == (t = this.session) ? void 0 : t.topic)) return;
              let { event: r } = i;
              if ('accountsChanged' === r.name) {
                let e = r.data;
                e && s8(e) && this.events.emit('accountsChanged', e.map(cZ));
              } else if ('chainChanged' === r.name) {
                let e = i.chainId,
                  t = i.event.data,
                  s = sY(e),
                  r = c0(e) !== c0(t) ? `${s}:${c0(t)}` : e;
                this.onChainChanged(r);
              } else this.events.emit(r.name, r.data);
              this.events.emit('session_event', e);
            }),
            this.client.on('session_update', ({ topic: e, params: t }) => {
              var i, s;
              if (e !== (null == (i = this.session) ? void 0 : i.topic)) return;
              let { namespaces: r } = t,
                n = null == (s = this.client) ? void 0 : s.session.get(e);
              (this.session = lX(lZ({}, n), { namespaces: r })),
                this.onSessionUpdate(),
                this.events.emit('session_update', { topic: e, params: t });
            }),
            this.client.on('session_delete', async (e) => {
              var t;
              e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                (await this.cleanup(),
                this.events.emit('session_delete', e),
                this.events.emit(
                  'disconnect',
                  lX(lZ({}, s2('USER_DISCONNECTED')), { data: e.topic })
                ));
            }),
            this.on(cP.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[cE];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: i,
            sessionProperties: s,
            scopedProperties: r,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            i && Object.keys(i).length && (this.optionalNamespaces = i),
            (this.sessionProperties = s),
            (this.scopedProperties = r);
        }
        validateChain(e) {
          let [t, i] = e?.split(':') || ['', ''];
          if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => sY(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && i) return [t, i];
          let s = sY(Object.keys(this.namespaces)[0]),
            r = this.rpcProviders[s].getDefaultChain();
          return [s, r];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [i, s] = this.validateChain(e);
          if (!s) return;
          this.updateNamespaceChain(i, s), this.events.emit('chainChanged', s);
          let r = this.getProvider(i).getDefaultChain();
          t || this.getProvider(i).setDefaultChain(s),
            this.emitAccountsChangedOnChainChange({
              namespace: i,
              previousChainId: r,
              newChainId: e,
            }),
            await this.persist('namespaces', this.namespaces);
        }
        emitAccountsChangedOnChainChange({ namespace: e, previousChainId: t, newChainId: i }) {
          var s, r;
          try {
            if (t === i) return;
            let n =
              null == (r = null == (s = this.session) ? void 0 : s.namespaces[e])
                ? void 0
                : r.accounts;
            if (!n) return;
            let o = n.filter((e) => e.includes(`${i}:`)).map(cZ);
            if (!s8(o)) return;
            this.events.emit('accountsChanged', o);
          } catch (e) {
            this.logger.warn('Failed to emit accountsChanged on chain change', e);
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          let i = this.namespaces[e] ? e : `${e}:${t}`;
          this.namespaces[i]
            ? this.namespaces[i] && (this.namespaces[i].defaultChain = t)
            : (this.namespaces[i] = { chains: [], methods: [], events: [], defaultChain: t });
        }
        onConnect() {
          this.createProviders(), this.events.emit('connect', { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore('namespaces'),
            await this.deleteFromStore('optionalNamespaces'),
            await this.deleteFromStore('sessionProperties'),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(e, t) {
          var i;
          let s = (null == (i = this.session) ? void 0 : i.topic) || '';
          await this.client.core.storage.setItem(`${cb}/${e}${s}`, t);
        }
        async getFromStore(e) {
          var t;
          let i = (null == (t = this.session) ? void 0 : t.topic) || '';
          return await this.client.core.storage.getItem(`${cb}/${e}${i}`);
        }
        async deleteFromStore(e) {
          var t;
          let i = (null == (t = this.session) ? void 0 : t.topic) || '';
          await this.client.core.storage.removeItem(`${cb}/${e}${i}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0) return;
            for (let e of await this.client.core.storage.getKeys())
              e.startsWith(cb) && (await this.client.core.storage.removeItem(e));
          } catch (e) {
            this.logger.warn('Failed to cleanup storage', e);
          }
        }
      }
      let l2 = ['eth_sendTransaction', 'personal_sign'],
        l8 = [
          'eth_accounts',
          'eth_requestAccounts',
          'eth_sendRawTransaction',
          'eth_sign',
          'eth_signTransaction',
          'eth_signTypedData',
          'eth_signTypedData_v3',
          'eth_signTypedData_v4',
          'eth_sendTransaction',
          'personal_sign',
          'wallet_switchEthereumChain',
          'wallet_addEthereumChain',
          'wallet_getPermissions',
          'wallet_requestPermissions',
          'wallet_registerOnboarding',
          'wallet_watchAsset',
          'wallet_scanQRCode',
          'wallet_sendCalls',
          'wallet_getCapabilities',
          'wallet_getCallsStatus',
          'wallet_showCallsStatus',
        ],
        l5 = ['chainChanged', 'accountsChanged'],
        l3 = ['chainChanged', 'accountsChanged', 'message', 'disconnect', 'connect'];
      var l6 = Object.defineProperty,
        l4 = Object.defineProperties,
        l9 = Object.getOwnPropertyDescriptors,
        l7 = Object.getOwnPropertySymbols,
        he = Object.prototype.hasOwnProperty,
        ht = Object.prototype.propertyIsEnumerable,
        hi = (e, t, i) =>
          t in e
            ? l6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        hs = (e, t) => {
          for (var i in t || (t = {})) he.call(t, i) && hi(e, i, t[i]);
          if (l7) for (var i of l7(t)) ht.call(t, i) && hi(e, i, t[i]);
          return e;
        },
        hr = (e, t) => l4(e, l9(t)),
        hn = (e, t, i) => hi(e, 'symbol' != typeof t ? t + '' : t, i);
      function ho(e) {
        return Number(e[0].split(':')[1]);
      }
      function ha(e) {
        return `0x${e.toString(16)}`;
      }
      class hc {
        constructor() {
          hn(this, 'events', new s.EventEmitter()),
            hn(this, 'namespace', 'eip155'),
            hn(this, 'accounts', []),
            hn(this, 'signer'),
            hn(this, 'chainId', 1),
            hn(this, 'modal'),
            hn(this, 'rpc'),
            hn(this, 'STORAGE_KEY', 'wc@2:ethereum_provider:'),
            hn(this, 'on', (e, t) => (this.events.on(e, t), this)),
            hn(this, 'once', (e, t) => (this.events.once(e, t), this)),
            hn(this, 'removeListener', (e, t) => (this.events.removeListener(e, t), this)),
            hn(this, 'off', (e, t) => (this.events.off(e, t), this)),
            hn(this, 'parseAccount', (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e
            ),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new hc();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(e, this.formatChainId(this.chainId), t);
        }
        sendAsync(e, t, i) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
        }
        get connected() {
          return !!this.signer.client && this.signer.client.core.relayer.connected;
        }
        get connecting() {
          return !!this.signer.client && this.signer.client.core.relayer.connecting;
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: 'eth_requestAccounts' })
          );
        }
        async connect(e) {
          if (!this.signer.client) throw Error('Provider not initialized. Call init() first');
          this.loadConnectOpts(e);
          let { required: t, optional: i } = (function (e) {
            let {
              chains: t,
              optionalChains: i,
              methods: s,
              optionalMethods: r,
              events: n,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!s8(t)) throw Error('Invalid chains');
            let c = {
                chains: t,
                methods: s || l2,
                events: n || l5,
                rpcMap: hs({}, t.length ? { [ho(t)]: a[ho(t)] } : {}),
              },
              l = n?.filter((e) => !l5.includes(e)),
              h = s?.filter((e) => !l2.includes(e));
            if (!i && !o && !r && !(null != l && l.length) && !(null != h && h.length))
              return { required: t.length ? c : void 0 };
            let p = {
              chains: [...new Set((l?.length && h?.length) || !i ? c.chains.concat(i || []) : i)],
              methods: [...new Set(c.methods.concat(null != r && r.length ? r : l8))],
              events: [...new Set(c.events.concat(null != o && o.length ? o : l3))],
              rpcMap: a,
            };
            return { required: t.length ? c : void 0, optional: i.length ? p : void 0 };
          })(this.rpc);
          try {
            let s = await new Promise(async (s, r) => {
              var n;
              this.rpc.showQrModal &&
                (null == (n = this.modal) ||
                  n.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      r(Error('Connection request reset. Please try again.')));
                  }));
              let o =
                null != e && e.scopedProperties ? { [this.namespace]: e.scopedProperties } : void 0;
              await this.signer
                .connect(
                  hr(
                    hs(
                      { namespaces: hs({}, t && { [this.namespace]: t }) },
                      i && { optionalNamespaces: { [this.namespace]: i } }
                    ),
                    { pairingTopic: e?.pairingTopic, scopedProperties: o }
                  )
                )
                .then((e) => {
                  s(e);
                })
                .catch((e) => {
                  r(Error(e.message));
                });
            });
            if (!s) return;
            let r = X(s.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r),
              this.setAccounts(r),
              this.events.emit('connect', { chainId: ha(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async authenticate(e, t) {
          if (!this.signer.client) throw Error('Provider not initialized. Call init() first');
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let i = await new Promise(async (i, s) => {
                var r;
                this.rpc.showQrModal &&
                  (null == (r = this.modal) ||
                    r.subscribeModal((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        s(Error('Connection request reset. Please try again.')));
                    })),
                  await this.signer
                    .authenticate(hr(hs({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      i(e);
                    })
                    .catch((e) => {
                      s(Error(e.message));
                    });
              }),
              s = i.session;
            if (s) {
              let e = X(s.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit('connect', { chainId: ha(this.chainId) });
            }
            return i;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on('session_event', (e) => {
            let { params: t } = e,
              { event: i } = t;
            'accountsChanged' === i.name
              ? ((this.accounts = this.parseAccounts(i.data)),
                this.events.emit('accountsChanged', this.accounts))
              : 'chainChanged' === i.name
                ? this.setChainId(this.formatChainId(i.data))
                : this.events.emit(i.name, i.data),
              this.events.emit('session_event', e);
          }),
            this.signer.on('accountsChanged', (e) => {
              (this.accounts = this.parseAccounts(e)),
                this.events.emit('accountsChanged', this.accounts);
            }),
            this.signer.on('chainChanged', (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit('chainChanged', ha(this.chainId)),
                this.persist();
            }),
            this.signer.on('session_update', (e) => {
              this.events.emit('session_update', e);
            }),
            this.signer.on('session_delete', (e) => {
              this.reset(),
                this.events.emit('session_delete', e),
                this.events.emit(
                  'disconnect',
                  hr(hs({}, s2('USER_DISCONNECTED')), { data: e.topic, name: 'USER_DISCONNECTED' })
                );
            }),
            this.signer.on('display_uri', (e) => {
              var t, i;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (i = this.modal) || i.openModal({ uri: e })),
                this.events.emit('display_uri', e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return 'string' == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(':')[1]);
        }
        setChainIds(e) {
          let t = e.filter((e) => this.isCompatibleChainId(e)).map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit('chainChanged', ha(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, i, s] = e.split(':');
          return { chainId: `${t}:${i}`, address: s };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter((e) => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit('accountsChanged', this.accounts);
        }
        getRpcConfig(e) {
          var t, i;
          let s = null != (t = e?.chains) ? t : [],
            r = null != (i = e?.optionalChains) ? i : [],
            n = s.concat(r);
          if (!n.length) throw Error('No chains specified in either `chains` or `optionalChains`');
          let o = s.length ? e?.methods || l2 : [],
            a = s.length ? e?.events || l5 : [],
            c = e?.optionalMethods || [],
            l = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            p = e?.qrModalOptions || void 0;
          return {
            chains: s?.map((e) => this.formatChainId(e)),
            optionalChains: r.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: l,
            rpcMap: h,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: p,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let i = {};
          return (
            e.forEach((e) => {
              i[e] = this.getRpcUrl(e, t);
            }),
            i
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? ho(this.rpc.chains)
              : ho(this.rpc.optionalChains)),
            (this.signer = await l1.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storage: e.storage,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
              logger: e.logger,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await i.e(9174).then(i.bind(i, 89174));
              e = t;
            } catch {
              throw Error('To use QR modal, please install @walletconnect/modal package');
            }
            if (e)
              try {
                this.modal = new e(hs({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error('Could not generate WalletConnectModal Instance'))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: i, rpcMap: s } = e;
          t &&
            s8(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = s?.[e] || this.getRpcUrl(e);
            })),
            i &&
              s8(i) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = i?.map((e) => this.formatChainId(e))),
              i.forEach((e) => {
                this.rpc.rpcMap[e] = s?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var i;
          return (
            (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error('Failed to load persisted session, clearing state...'),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) => this.signer.logger.warn(e));
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
        }
        parseAccounts(e) {
          return 'string' == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let hl = hc;
    },
  },
]);
