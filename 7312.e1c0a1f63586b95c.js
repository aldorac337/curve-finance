(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7312],
  {
    2278: (e, t, r) => {
      'use strict';
      r.d(t, { Fo: () => eW });
      var n = {};
      r.r(n), r.d(n, { identity: () => T });
      var i = {};
      r.r(i), r.d(i, { base2: () => P });
      var o = {};
      r.r(o), r.d(o, { base8: () => L });
      var s = {};
      r.r(s), r.d(s, { base10: () => N });
      var a = {};
      r.r(a), r.d(a, { base16: () => U, base16upper: () => j });
      var u = {};
      r.r(u),
        r.d(u, {
          base32: () => F,
          base32hex: () => H,
          base32hexpad: () => J,
          base32hexpadupper: () => q,
          base32hexupper: () => W,
          base32pad: () => z,
          base32padupper: () => M,
          base32upper: () => k,
          base32z: () => V,
        });
      var l = {};
      r.r(l), r.d(l, { base36: () => K, base36upper: () => $ });
      var c = {};
      r.r(c), r.d(c, { base58btc: () => Y, base58flickr: () => G });
      var f = {};
      r.r(f),
        r.d(f, { base64: () => Z, base64pad: () => X, base64url: () => Q, base64urlpad: () => ee });
      var h = {};
      r.r(h), r.d(h, { base256emoji: () => ei });
      var d = {};
      r.r(d), r.d(d, { sha256: () => em, sha512: () => eD });
      var p = {};
      r.r(p), r.d(p, { identity: () => ev });
      var b = {};
      r.r(b), r.d(b, { code: () => eE, decode: () => e_, encode: () => ex, name: () => ew });
      var y = {};
      r.r(y), r.d(y, { code: () => eC, decode: () => eB, encode: () => eI, name: () => eA });
      let g = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
        for (var i = 0; i < e.length; i++) {
          var o = e.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== r[s]) throw TypeError(o + ' is ambiguous');
          r[s] = i;
        }
        var a = e.length,
          u = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function f(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var n = 0, i = 0; e[t] === u; ) n++, t++;
            for (var o = ((e.length - t) * l + 1) >>> 0, s = new Uint8Array(o); e[t]; ) {
              var c = r[e.charCodeAt(t)];
              if (255 === c) return;
              for (var f = 0, h = o - 1; (0 !== c || f < i) && -1 !== h; h--, f++)
                (c += (a * s[h]) >>> 0), (s[h] = c % 256 >>> 0), (c = (c / 256) >>> 0);
              if (0 !== c) throw Error('Non-zero carry');
              (i = f), t++;
            }
            if (' ' !== e[t]) {
              for (var d = o - i; d !== o && 0 === s[d]; ) d++;
              for (var p = new Uint8Array(n + (o - d)), b = n; d !== o; ) p[b++] = s[d++];
              return p;
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
            for (var r = 0, n = 0, i = 0, o = t.length; i !== o && 0 === t[i]; ) i++, r++;
            for (var s = ((o - i) * c + 1) >>> 0, l = new Uint8Array(s); i !== o; ) {
              for (var f = t[i], h = 0, d = s - 1; (0 !== f || h < n) && -1 !== d; d--, h++)
                (f += (256 * l[d]) >>> 0), (l[d] = f % a >>> 0), (f = (f / a) >>> 0);
              if (0 !== f) throw Error('Non-zero carry');
              (n = h), i++;
            }
            for (var p = s - n; p !== s && 0 === l[p]; ) p++;
            for (var b = u.repeat(r); p < s; ++p) b += e.charAt(l[p]);
            return b;
          },
          decodeUnsafe: f,
          decode: function (e) {
            var r = f(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let m = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        D = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        v = (e) => new TextEncoder().encode(e),
        w = (e) => new TextDecoder().decode(e);
      class E {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class x {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
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
          return O(this, e);
        }
      }
      class _ {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return O(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let O = (e, t) =>
        new _({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class S {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new E(e, t, r)),
            (this.decoder = new x(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let A = ({ name: e, prefix: t, encode: r, decode: n }) => new S(e, t, r, n),
        C = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: n, decode: i } = g(r, t);
          return A({ prefix: e, name: t, encode: n, decode: (e) => D(i(e)) });
        },
        I = (e, t, r, n) => {
          let i = {};
          for (let e = 0; e < t.length; ++e) i[t[e]] = e;
          let o = e.length;
          for (; '=' === e[o - 1]; ) --o;
          let s = new Uint8Array(((o * r) / 8) | 0),
            a = 0,
            u = 0,
            l = 0;
          for (let t = 0; t < o; ++t) {
            let o = i[e[t]];
            if (void 0 === o) throw SyntaxError(`Non-${n} character`);
            (u = (u << r) | o), (a += r) >= 8 && ((a -= 8), (s[l++] = 255 & (u >> a)));
          }
          if (a >= r || 255 & (u << (8 - a))) throw SyntaxError('Unexpected end of data');
          return s;
        },
        B = (e, t, r) => {
          let n = '=' === t[t.length - 1],
            i = (1 << r) - 1,
            o = '',
            s = 0,
            a = 0;
          for (let n = 0; n < e.length; ++n)
            for (a = (a << 8) | e[n], s += 8; s > r; ) (s -= r), (o += t[i & (a >> s)]);
          if ((s && (o += t[i & (a << (r - s))]), n)) for (; (o.length * r) & 7; ) o += '=';
          return o;
        },
        R = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
          A({ prefix: t, name: e, encode: (e) => B(e, n, r), decode: (t) => I(t, n, r, e) }),
        T = A({ prefix: '\0', name: 'identity', encode: (e) => w(e), decode: (e) => v(e) }),
        P = R({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        L = R({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        N = C({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        U = R({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        j = R({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 }),
        F = R({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        k = R({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        z = R({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        M = R({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        H = R({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        W = R({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        J = R({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        q = R({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        V = R({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        }),
        K = C({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        $ = C({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        }),
        Y = C({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        G = C({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        }),
        Z = R({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        X = R({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        Q = R({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        ee = R({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
        et = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        er = et.reduce((e, t, r) => ((e[r] = t), e), []),
        en = et.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        ei = A({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += er[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = en[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      function eo(e, t, r) {
        t = t || [];
        for (var n = (r = r || 0); e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (eo.bytes = r - n + 1), t;
      }
      function es(e, t) {
        var r,
          n = 0,
          t = t || 0,
          i = 0,
          o = t,
          s = e.length;
        do {
          if (o >= s) throw ((es.bytes = 0), RangeError('Could not decode varint'));
          (r = e[o++]), (n += i < 28 ? (127 & r) << i : (127 & r) * Math.pow(2, i)), (i += 7);
        } while (r >= 128);
        return (es.bytes = o - t), n;
      }
      let ea = {
          encode: eo,
          decode: es,
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
        },
        eu = (e, t = 0) => [ea.decode(e, t), ea.decode.bytes],
        el = (e, t, r = 0) => (ea.encode(e, t, r), t),
        ec = (e) => ea.encodingLength(e),
        ef = (e, t) => {
          let r = t.byteLength,
            n = ec(e),
            i = n + ec(r),
            o = new Uint8Array(i + r);
          return el(e, o, 0), el(r, o, n), o.set(t, i), new ep(e, r, t, o);
        },
        eh = (e) => {
          let t = D(e),
            [r, n] = eu(t),
            [i, o] = eu(t.subarray(n)),
            s = t.subarray(n + o);
          if (s.byteLength !== i) throw Error('Incorrect length');
          return new ep(r, i, s, t);
        },
        ed = (e, t) => e === t || (e.code === t.code && e.size === t.size && m(e.bytes, t.bytes));
      class ep {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      let eb = ({ name: e, code: t, encode: r }) => new ey(e, t, r);
      class ey {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? ef(this.code, t) : t.then((e) => ef(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let eg = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        em = eb({ name: 'sha2-256', code: 18, encode: eg('SHA-256') }),
        eD = eb({ name: 'sha2-512', code: 19, encode: eg('SHA-512') }),
        ev = { code: 0, name: 'identity', encode: D, digest: (e) => ef(0, D(e)) },
        ew = 'raw',
        eE = 85,
        ex = (e) => D(e),
        e_ = (e) => D(e),
        eO = new TextEncoder(),
        eS = new TextDecoder(),
        eA = 'json',
        eC = 512,
        eI = (e) => eO.encode(JSON.stringify(e)),
        eB = (e) => JSON.parse(eS.decode(e));
      class eR {
        constructor(e, t, r, n) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = n),
            (this.byteOffset = n.byteOffset),
            (this.byteLength = n.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: ez,
              byteLength: ez,
              code: ek,
              version: ek,
              multihash: ek,
              bytes: ek,
              _baseCache: ez,
              asCID: ez,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== eN) throw Error('Cannot convert a non dag-pb CID to CIDv0');
            if (t.code !== eU) throw Error('Cannot convert non sha2-256 multihash CID to CIDv0');
            return eR.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = ef(e, t);
              return eR.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            ed(this.multihash, e.multihash)
          );
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: n } = this;
          return 0 === r ? eP(t, n, e || Y.encoder) : eL(t, n, e || F.encoder);
        }
        toJSON() {
          return { code: this.code, version: this.version, hash: this.multihash.bytes };
        }
        get [Symbol.toStringTag]() {
          return 'CID';
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return 'CID(' + this.toString() + ')';
        }
        static isCID(e) {
          return eM(/^0\.0/, eH), !!(e && (e[eF] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error('Deprecated, use .toString()');
        }
        get codec() {
          throw Error('"codec" property is deprecated, use integer "code" property instead');
        }
        get buffer() {
          throw Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof eR) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: n, bytes: i } = e;
            return new eR(t, r, n, i || ej(t, r, n.bytes));
          }
          if (null == e || !0 !== e[eF]) return null;
          {
            let { version: t, multihash: r, code: n } = e,
              i = eh(r);
            return eR.create(t, n, i);
          }
        }
        static create(e, t, r) {
          if ('number' != typeof t) throw Error('String codecs are no longer supported');
          switch (e) {
            case 0:
              if (t === eN) return new eR(e, t, r, r.bytes);
              throw Error(`Version 0 CID must use dag-pb (code: ${eN}) block encoding`);
            case 1: {
              let n = ej(e, t, r.bytes);
              return new eR(e, t, r, n);
            }
            default:
              throw Error('Invalid version');
          }
        }
        static createV0(e) {
          return eR.create(0, eN, e);
        }
        static createV1(e, t) {
          return eR.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = eR.decodeFirst(e);
          if (r.length) throw Error('Incorrect length');
          return t;
        }
        static decodeFirst(e) {
          let t = eR.inspectBytes(e),
            r = t.size - t.multihashSize,
            n = D(e.subarray(r, r + t.multihashSize));
          if (n.byteLength !== t.multihashSize) throw Error('Incorrect length');
          let i = n.subarray(t.multihashSize - t.digestSize),
            o = new ep(t.multihashCode, t.digestSize, i, n);
          return [0 === t.version ? eR.createV0(o) : eR.createV1(t.codec, o), e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, n] = eu(e.subarray(t));
              return (t += n), r;
            },
            n = r(),
            i = eN;
          if ((18 === n ? ((n = 0), (t = 0)) : 1 === n && (i = r()), 0 !== n && 1 !== n))
            throw RangeError(`Invalid CID version ${n}`);
          let o = t,
            s = r(),
            a = r(),
            u = t + a;
          return {
            version: n,
            codec: i,
            multihashCode: s,
            digestSize: a,
            multihashSize: u - o,
            size: u,
          };
        }
        static parse(e, t) {
          let [r, n] = eT(e, t),
            i = eR.decode(n);
          return i._baseCache.set(r, e), i;
        }
      }
      let eT = (e, t) => {
          switch (e[0]) {
            case 'Q': {
              let r = t || Y;
              return [Y.prefix, r.decode(`${Y.prefix}${e}`)];
            }
            case Y.prefix: {
              let r = t || Y;
              return [Y.prefix, r.decode(e)];
            }
            case F.prefix: {
              let r = t || F;
              return [F.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  'To parse non base32 or base58btc encoded CID multibase decoder must be provided'
                );
              return [e[0], t.decode(e)];
          }
        },
        eP = (e, t, r) => {
          let { prefix: n } = r;
          if (n !== Y.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let i = t.get(n);
          if (null != i) return i;
          {
            let i = r.encode(e).slice(1);
            return t.set(n, i), i;
          }
        },
        eL = (e, t, r) => {
          let { prefix: n } = r,
            i = t.get(n);
          if (null != i) return i;
          {
            let i = r.encode(e);
            return t.set(n, i), i;
          }
        },
        eN = 112,
        eU = 18,
        ej = (e, t, r) => {
          let n = ec(e),
            i = n + ec(t),
            o = new Uint8Array(i + r.byteLength);
          return el(e, o, 0), el(t, o, n), o.set(r, i), o;
        },
        eF = Symbol.for('@ipld/js-cid/CID'),
        ek = { writable: !1, configurable: !1, enumerable: !0 },
        ez = { writable: !1, enumerable: !1, configurable: !1 },
        eM = (e, t) => {
          if (e.test('0.0.0-dev')) console.warn(t);
          else throw Error(t);
        },
        eH = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        eW = { ...n, ...i, ...o, ...s, ...a, ...u, ...l, ...c, ...f, ...h };
      ({ ...d, ...p });
    },
    9912: (e, t, r) => {
      var n =
          ('undefined' != typeof globalThis && globalThis) ||
          ('undefined' != typeof self && self) ||
          (void 0 !== r.g && r.g),
        i = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (e.prototype = n), new e();
        })();
      !(function (e) {
        !(function (t) {
          var n =
              (void 0 !== e && e) ||
              ('undefined' != typeof self && self) ||
              (void 0 !== r.g && r.g) ||
              {},
            i = {
              searchParams: 'URLSearchParams' in n,
              iterable: 'Symbol' in n && 'iterator' in Symbol,
              blob:
                'FileReader' in n &&
                'Blob' in n &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              formData: 'FormData' in n,
              arrayBuffer: 'ArrayBuffer' in n,
            };
          if (i.arrayBuffer)
            var o = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              s =
                ArrayBuffer.isView ||
                function (e) {
                  return e && o.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function a(e) {
            if (
              ('string' != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e)
            )
              throw TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase();
          }
          function u(e) {
            return 'string' != typeof e && (e = String(e)), e;
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              i.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function c(e) {
            (this.map = {}),
              e instanceof c
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                  ? e.forEach(function (e) {
                      if (2 != e.length)
                        throw TypeError(
                          'Headers constructor: expected name/value pair to be length 2, found' +
                            e.length
                        );
                      this.append(e[0], e[1]);
                    }, this)
                  : e &&
                    Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                    }, this);
          }
          function f(e) {
            if (!e._noBody) {
              if (e.bodyUsed) return Promise.reject(TypeError('Already read'));
              e.bodyUsed = !0;
            }
          }
          function h(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function d(e) {
            var t = new FileReader(),
              r = h(t);
            return t.readAsArrayBuffer(e), r;
          }
          function p(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function b() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e)) {
                  if ('string' == typeof e) this._bodyText = e;
                  else if (i.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                  else if (i.formData && FormData.prototype.isPrototypeOf(e))
                    this._bodyFormData = e;
                  else if (i.searchParams && URLSearchParams.prototype.isPrototypeOf(e))
                    this._bodyText = e.toString();
                  else {
                    var t;
                    i.arrayBuffer && i.blob && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = p(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || s(e))
                        ? (this._bodyArrayBuffer = p(e))
                        : (this._bodyText = e = Object.prototype.toString.call(e));
                  }
                } else (this._noBody = !0), (this._bodyText = '');
                !this.headers.get('content-type') &&
                  ('string' == typeof e
                    ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                    : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set('content-type', this._bodyBlob.type)
                      : i.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          'content-type',
                          'application/x-www-form-urlencoded;charset=UTF-8'
                        ));
              }),
              i.blob &&
                (this.blob = function () {
                  var e = f(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                  throw Error('could not read FormData body as blob');
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var e = f(this);
                  return (
                    e ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                }
                if (i.blob) return this.blob().then(d);
                throw Error('could not read as ArrayBuffer');
              }),
              (this.text = function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  o = f(this);
                if (o) return o;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (r = h((t = new FileReader()))),
                    (i = (n = /charset=([A-Za-z0-9_-]+)/.exec(e.type)) ? n[1] : 'utf-8'),
                    t.readAsText(e, i),
                    r
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (var t = new Uint8Array(e), r = Array(t.length), n = 0; n < t.length; n++)
                        r[n] = String.fromCharCode(t[n]);
                      return r.join('');
                    })(this._bodyArrayBuffer)
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error('could not read FormData body as text');
              }),
              i.formData &&
                (this.formData = function () {
                  return this.text().then(m);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (c.prototype.append = function (e, t) {
            (e = a(e)), (t = u(t));
            var r = this.map[e];
            this.map[e] = r ? r + ', ' + t : t;
          }),
            (c.prototype.delete = function (e) {
              delete this.map[a(e)];
            }),
            (c.prototype.get = function (e) {
              return (e = a(e)), this.has(e) ? this.map[e] : null;
            }),
            (c.prototype.has = function (e) {
              return this.map.hasOwnProperty(a(e));
            }),
            (c.prototype.set = function (e, t) {
              this.map[a(e)] = u(t);
            }),
            (c.prototype.forEach = function (e, t) {
              for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (c.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                l(e)
              );
            }),
            (c.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                l(e)
              );
            }),
            (c.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                l(e)
              );
            }),
            i.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
          var y = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];
          function g(e, t) {
            if (!(this instanceof g))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var r,
              i,
              o = (t = t || {}).body;
            if (e instanceof g) {
              if (e.bodyUsed) throw TypeError('Already read');
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new c(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials = t.credentials || this.credentials || 'same-origin'),
              (t.headers || !this.headers) && (this.headers = new c(t.headers)),
              (this.method =
                ((i = (r = t.method || this.method || 'GET').toUpperCase()),
                y.indexOf(i) > -1 ? i : r)),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if ('AbortController' in n) return new AbortController().signal;
                })()),
              (this.referrer = null),
              ('GET' === this.method || 'HEAD' === this.method) && o)
            )
              throw TypeError('Body not allowed for GET or HEAD requests');
            if (
              (this._initBody(o),
              ('GET' === this.method || 'HEAD' === this.method) &&
                ('no-store' === t.cache || 'no-cache' === t.cache))
            ) {
              var s = /([?&])_=[^&]*/;
              s.test(this.url)
                ? (this.url = this.url.replace(s, '$1_=' + new Date().getTime()))
                : (this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime());
            }
          }
          function m(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split('&')
                .forEach(function (e) {
                  if (e) {
                    var r = e.split('='),
                      n = r.shift().replace(/\+/g, ' '),
                      i = r.join('=').replace(/\+/g, ' ');
                    t.append(decodeURIComponent(n), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function D(e, t) {
            if (!(this instanceof D))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            if (
              (t || (t = {}),
              (this.type = 'default'),
              (this.status = void 0 === t.status ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw RangeError(
                "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
              );
            (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = void 0 === t.statusText ? '' : '' + t.statusText),
              (this.headers = new c(t.headers)),
              (this.url = t.url || ''),
              this._initBody(e);
          }
          (g.prototype.clone = function () {
            return new g(this, { body: this._bodyInit });
          }),
            b.call(g.prototype),
            b.call(D.prototype),
            (D.prototype.clone = function () {
              return new D(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new c(this.headers),
                url: this.url,
              });
            }),
            (D.error = function () {
              var e = new D(null, { status: 200, statusText: '' });
              return (e.ok = !1), (e.status = 0), (e.type = 'error'), e;
            });
          var v = [301, 302, 303, 307, 308];
          (D.redirect = function (e, t) {
            if (-1 === v.indexOf(t)) throw RangeError('Invalid status code');
            return new D(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = n.DOMException);
          try {
            new t.DOMException();
          } catch (e) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function w(e, r) {
            return new Promise(function (o, s) {
              var l = new g(e, r);
              if (l.signal && l.signal.aborted)
                return s(new t.DOMException('Aborted', 'AbortError'));
              var f = new XMLHttpRequest();
              function h() {
                f.abort();
              }
              if (
                ((f.onload = function () {
                  var e,
                    t,
                    r = {
                      statusText: f.statusText,
                      headers:
                        ((e = f.getAllResponseHeaders() || ''),
                        (t = new c()),
                        e
                          .replace(/\r?\n[\t ]+/g, ' ')
                          .split('\r')
                          .map(function (e) {
                            return 0 === e.indexOf('\n') ? e.substr(1, e.length) : e;
                          })
                          .forEach(function (e) {
                            var r = e.split(':'),
                              n = r.shift().trim();
                            if (n) {
                              var i = r.join(':').trim();
                              try {
                                t.append(n, i);
                              } catch (e) {
                                console.warn('Response ' + e.message);
                              }
                            }
                          }),
                        t),
                    };
                  0 === l.url.indexOf('file://') && (f.status < 200 || f.status > 599)
                    ? (r.status = 200)
                    : (r.status = f.status),
                    (r.url = 'responseURL' in f ? f.responseURL : r.headers.get('X-Request-URL'));
                  var n = 'response' in f ? f.response : f.responseText;
                  setTimeout(function () {
                    o(new D(n, r));
                  }, 0);
                }),
                (f.onerror = function () {
                  setTimeout(function () {
                    s(TypeError('Network request failed'));
                  }, 0);
                }),
                (f.ontimeout = function () {
                  setTimeout(function () {
                    s(TypeError('Network request timed out'));
                  }, 0);
                }),
                (f.onabort = function () {
                  setTimeout(function () {
                    s(new t.DOMException('Aborted', 'AbortError'));
                  }, 0);
                }),
                f.open(
                  l.method,
                  (function (e) {
                    try {
                      return '' === e && n.location.href ? n.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(l.url),
                  !0
                ),
                'include' === l.credentials
                  ? (f.withCredentials = !0)
                  : 'omit' === l.credentials && (f.withCredentials = !1),
                'responseType' in f &&
                  (i.blob
                    ? (f.responseType = 'blob')
                    : i.arrayBuffer && (f.responseType = 'arraybuffer')),
                r &&
                  'object' == typeof r.headers &&
                  !(r.headers instanceof c || (n.Headers && r.headers instanceof n.Headers)))
              ) {
                var d = [];
                Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                  d.push(a(e)), f.setRequestHeader(e, u(r.headers[e]));
                }),
                  l.headers.forEach(function (e, t) {
                    -1 === d.indexOf(t) && f.setRequestHeader(t, e);
                  });
              } else
                l.headers.forEach(function (e, t) {
                  f.setRequestHeader(t, e);
                });
              l.signal &&
                (l.signal.addEventListener('abort', h),
                (f.onreadystatechange = function () {
                  4 === f.readyState && l.signal.removeEventListener('abort', h);
                })),
                f.send(void 0 === l._bodyInit ? null : l._bodyInit);
            });
          }
          (w.polyfill = !0),
            n.fetch || ((n.fetch = w), (n.Headers = c), (n.Request = g), (n.Response = D)),
            (t.Headers = c),
            (t.Request = g),
            (t.Response = D),
            (t.fetch = w),
            Object.defineProperty(t, '__esModule', { value: !0 });
        })({});
      })(i),
        (i.fetch.ponyfill = !0),
        delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      ((t = o.fetch).default = o.fetch),
        (t.fetch = o.fetch),
        (t.Headers = o.Headers),
        (t.Request = o.Request),
        (t.Response = o.Response),
        (e.exports = t);
    },
    13996: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => v,
          __asyncGenerator: () => D,
          __asyncValues: () => w,
          __await: () => m,
          __awaiter: () => c,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => S,
          __createBinding: () => h,
          __decorate: () => a,
          __exportStar: () => d,
          __extends: () => i,
          __generator: () => f,
          __importDefault: () => _,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => l,
          __param: () => u,
          __read: () => b,
          __rest: () => s,
          __spread: () => y,
          __spreadArrays: () => g,
          __values: () => p,
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      function a(e, t, r, n) {
        var i,
          o = arguments.length,
          s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function u(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function l(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function c(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function f(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function h(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function d(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function p(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function b(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) s.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e;
      }
      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var n = Array(e), i = 0, t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function D(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var n,
          i = r.apply(e, t || []),
          o = [];
        return (
          (n = {}),
          s('next'),
          s('throw'),
          s('return'),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function s(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                o.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(u, l)
              : c(o[0][2], r);
          } catch (e) {
            c(o[0][3], e);
          }
        }
        function u(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function c(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          n('next'),
          n('throw', function (e) {
            throw e;
          }),
          n('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r) ? { value: m(e[n](t)), done: 'return' === n } : i ? i(t) : t;
              }
            : i;
        }
      }
      function w(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = p(e)),
            (t = {}),
            n('next'),
            n('throw'),
            n('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function _(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function S(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    19594: (e, t, r) => {
      'use strict';
      r.d(t, { o0: () => d });
      var n = r(40459),
        i = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++)
              (!n && i in t) || (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        o = function (e, t, r) {
          (this.name = e), (this.version = t), (this.os = r), (this.type = 'browser');
        },
        s = function (e) {
          (this.version = e), (this.type = 'node'), (this.name = 'node'), (this.os = n.platform);
        },
        a = function (e, t, r, n) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = n),
            (this.type = 'bot-device');
        },
        u = function () {
          (this.type = 'bot'),
            (this.bot = !0),
            (this.name = 'bot'),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = 'react-native'),
            (this.name = 'react-native'),
            (this.version = null),
            (this.os = null);
        },
        c = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        f = [
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['edge-ios', /EdgiOS\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['silk', /\bSilk\/([0-9._-]+)\b/],
          ['miui', /MiuiBrowser\/([0-9\.]+)$/],
          ['beaker', /BeakerBrowser\/([0-9\.]+)/],
          ['edge-chromium', /EdgA?\/([0-9\.]+)/],
          ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
          ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            'pie',
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FB[AS]V\/([0-9\.]+)/],
          ['instagram', /Instagram\s([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ['curl', /^curl\/([0-9\.]+)$/],
          [
            'searchbot',
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        h = [
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Chrome OS', /CrOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/],
        ];
      function d(e) {
        return e
          ? p(e)
          : 'undefined' == typeof document &&
              'undefined' != typeof navigator &&
              'ReactNative' === navigator.product
            ? new l()
            : 'undefined' != typeof navigator
              ? p(navigator.userAgent)
              : void 0 !== n && n.version
                ? new s(n.version.slice(1))
                : null;
      }
      function p(e) {
        var t,
          r =
            '' !== (t = e) &&
            f.reduce(function (e, r) {
              var n = r[0],
                i = r[1];
              if (e) return e;
              var o = i.exec(t);
              return !!o && [n, o];
            }, !1);
        if (!r) return null;
        var n = r[0],
          s = r[1];
        if ('searchbot' === n) return new u();
        var l = s[1] && s[1].split('.').join('_').split('_').slice(0, 3);
        l
          ? l.length < 3 &&
            (l = i(
              i([], l, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push('0');
                return t;
              })(3 - l.length),
              !0
            ))
          : (l = []);
        var d = l.join('.'),
          p = (function (e) {
            for (var t = 0, r = h.length; t < r; t++) {
              var n = h[t],
                i = n[0];
              if (n[1].exec(e)) return i;
            }
            return null;
          })(e),
          b = c.exec(e);
        return b && b[1] ? new a(n, d, p, b[1]) : new o(n, d, p);
      }
    },
    20561: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      let n = r(82914);
      (t.toMiliseconds = function (e) {
        return e * n.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / n.ONE_THOUSAND);
        });
    },
    24584: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => v,
          __asyncGenerator: () => D,
          __asyncValues: () => w,
          __await: () => m,
          __awaiter: () => c,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => S,
          __createBinding: () => h,
          __decorate: () => a,
          __exportStar: () => d,
          __extends: () => i,
          __generator: () => f,
          __importDefault: () => _,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => l,
          __param: () => u,
          __read: () => b,
          __rest: () => s,
          __spread: () => y,
          __spreadArrays: () => g,
          __values: () => p,
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      function a(e, t, r, n) {
        var i,
          o = arguments.length,
          s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function u(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function l(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function c(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function f(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function h(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function d(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function p(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function b(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) s.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e;
      }
      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var n = Array(e), i = 0, t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function D(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var n,
          i = r.apply(e, t || []),
          o = [];
        return (
          (n = {}),
          s('next'),
          s('throw'),
          s('return'),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function s(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                o.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(u, l)
              : c(o[0][2], r);
          } catch (e) {
            c(o[0][3], e);
          }
        }
        function u(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function c(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          n('next'),
          n('throw', function (e) {
            throw e;
          }),
          n('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r) ? { value: m(e[n](t)), done: 'return' === n } : i ? i(t) : t;
              }
            : i;
        }
      }
      function w(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = p(e)),
            (t = {}),
            n('next'),
            n('throw'),
            n('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function _(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function S(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    25476: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => s, j: () => o });
      let n = (e) => JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() + 'n' : t)),
        i = (e) =>
          JSON.parse(
            e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            ),
            (e, t) =>
              'string' == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t
          );
      function o(e) {
        if ('string' != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return i(e);
        } catch (t) {
          return e;
        }
      }
      function s(e) {
        return 'string' == typeof e ? e : n(e) || '';
      }
    },
    28916: (e, t, r) => {
      'use strict';
      r.d(t, { Uf: () => s, XW: () => a, fO: () => i, jf: () => o, zR: () => n });
      let n = 'INTERNAL_ERROR',
        i = 'SERVER_ERROR',
        o = [-32700, -32600, -32601, -32602, -32603],
        s = {
          PARSE_ERROR: { code: -32700, message: 'Parse error' },
          INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
          METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
          INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
          [n]: { code: -32603, message: 'Internal error' },
          [i]: { code: -32e3, message: 'Server error' },
        },
        a = i;
    },
    31873: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    32214: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let n = r(24584);
      n.__exportStar(r(31873), t), n.__exportStar(r(20561), t);
    },
    33137: (e, t, r) => {
      'use strict';
      r.d(t, {
        IJsonRpcProvider: () => s.kF,
        formatJsonRpcError: () => o.dZ,
        formatJsonRpcRequest: () => o.e_,
        formatJsonRpcResult: () => o.Im,
        getBigIntRpcId: () => o.eX,
        isHttpUrl: () => a.q$,
        isJsonRpcError: () => u.U$,
        isJsonRpcRequest: () => u.p3,
        isJsonRpcResponse: () => u.tq,
        isJsonRpcResult: () => u.xT,
        isLocalhostUrl: () => a.z,
        isWsUrl: () => a.A1,
        parseConnectionError: () => n.eF,
        payloadId: () => o.ER,
      }),
        r(28916);
      var n = r(64411),
        i = r(61818);
      r.o(i, 'IJsonRpcProvider') &&
        r.d(t, {
          IJsonRpcProvider: function () {
            return i.IJsonRpcProvider;
          },
        }),
        r.o(i, 'formatJsonRpcError') &&
          r.d(t, {
            formatJsonRpcError: function () {
              return i.formatJsonRpcError;
            },
          }),
        r.o(i, 'formatJsonRpcRequest') &&
          r.d(t, {
            formatJsonRpcRequest: function () {
              return i.formatJsonRpcRequest;
            },
          }),
        r.o(i, 'formatJsonRpcResult') &&
          r.d(t, {
            formatJsonRpcResult: function () {
              return i.formatJsonRpcResult;
            },
          }),
        r.o(i, 'getBigIntRpcId') &&
          r.d(t, {
            getBigIntRpcId: function () {
              return i.getBigIntRpcId;
            },
          }),
        r.o(i, 'isHttpUrl') &&
          r.d(t, {
            isHttpUrl: function () {
              return i.isHttpUrl;
            },
          }),
        r.o(i, 'isJsonRpcError') &&
          r.d(t, {
            isJsonRpcError: function () {
              return i.isJsonRpcError;
            },
          }),
        r.o(i, 'isJsonRpcRequest') &&
          r.d(t, {
            isJsonRpcRequest: function () {
              return i.isJsonRpcRequest;
            },
          }),
        r.o(i, 'isJsonRpcResponse') &&
          r.d(t, {
            isJsonRpcResponse: function () {
              return i.isJsonRpcResponse;
            },
          }),
        r.o(i, 'isJsonRpcResult') &&
          r.d(t, {
            isJsonRpcResult: function () {
              return i.isJsonRpcResult;
            },
          }),
        r.o(i, 'isLocalhostUrl') &&
          r.d(t, {
            isLocalhostUrl: function () {
              return i.isLocalhostUrl;
            },
          }),
        r.o(i, 'isReactNative') &&
          r.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        r.o(i, 'isWsUrl') &&
          r.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          }),
        r.o(i, 'payloadId') &&
          r.d(t, {
            payloadId: function () {
              return i.payloadId;
            },
          });
      var o = r(45924),
        s = r(39860),
        a = r(89720),
        u = r(60256);
    },
    35180: (e, t, r) => {
      'use strict';
      r.d(t, { D5: () => O, U5: () => _, h6: () => i.a, iP: () => E, oI: () => x });
      var n = r(59213),
        i = r.n(n),
        o = r(25476);
      let s = { level: 'info' },
        a = 'custom_context';
      class u {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      class l {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          let t = new u(e);
          if (t.size > this.maxSizeInBytes)
            throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head ? this.tail && (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          let e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          let e = [],
            t = this.head;
          for (; null !== t; ) e.push(t.value), (t = t.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              let t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class c {
        constructor(e, t = 1024e3) {
          (this.level = e ?? 'error'),
            (this.levelValue = n.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new l(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === n.levels.values.error
            ? console.error(e)
            : t === n.levels.values.warn
              ? console.warn(e)
              : t === n.levels.values.debug
                ? console.debug(e)
                : t === n.levels.values.trace
                  ? console.trace(e)
                  : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append((0, o.h)({ timestamp: new Date().toISOString(), log: e }));
          let t = 'string' == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new l(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          let t = this.getLogArray();
          return t.push((0, o.h)({ extraMetadata: e })), new Blob(t, { type: 'application/json' });
        }
      }
      class f {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new c(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          let t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement('a');
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class h {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new c(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      }
      var d = Object.defineProperty,
        p = Object.defineProperties,
        b = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        D = (e, t, r) =>
          t in e
            ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        v = (e, t) => {
          for (var r in t || (t = {})) g.call(t, r) && D(e, r, t[r]);
          if (y) for (var r of y(t)) m.call(t, r) && D(e, r, t[r]);
          return e;
        },
        w = (e, t) => p(e, b(t));
      function E(e) {
        return w(v({}, e), { level: e?.level || s.level });
      }
      function x(e, t = a) {
        return typeof e.bindings > 'u'
          ? (function (e, t = a) {
              return e[t] || '';
            })(e, t)
          : e.bindings().context || '';
      }
      function _(e, t, r = a) {
        let n = (function (e, t, r = a) {
          let n = x(e, r);
          return n.trim() ? `${n}/${t}` : t;
        })(e, t, r);
        return (function (e, t, r = a) {
          return (e[r] = t), e;
        })(e.child({ context: n }), n, r);
      }
      function O(e) {
        return 'u' > typeof e.loggerOverride && 'string' != typeof e.loggerOverride
          ? { logger: e.loggerOverride, chunkLoggerController: null }
          : 'u' > typeof window
            ? (function (e) {
                var t, r;
                let n = new f(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: i()(
                    w(v({}, e.opts), {
                      level: 'trace',
                      browser: w(v({}, null == (r = e.opts) ? void 0 : r.browser), {
                        write: (e) => n.write(e),
                      }),
                    })
                  ),
                  chunkLoggerController: n,
                };
              })(e)
            : (function (e) {
                var t;
                let r = new h(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: i()(w(v({}, e.opts), { level: 'trace' }), r),
                  chunkLoggerController: r,
                };
              })(e);
      }
    },
    36672: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let n = r(13996);
      n.__exportStar(r(44045), t), n.__exportStar(r(55239), t);
    },
    37486: (e, t, r) => {
      'use strict';
      r.d(t, { H: () => n });
      class n {}
    },
    37752: (e, t) => {
      'use strict';
      function r(e) {
        let t;
        return 'undefined' != typeof window && void 0 !== window[e] && (t = window[e]), t;
      }
      function n(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n('document');
        }),
        (t.getDocument = function () {
          return r('document');
        }),
        (t.getNavigatorOrThrow = function () {
          return n('navigator');
        }),
        (t.getNavigator = function () {
          return r('navigator');
        }),
        (t.getLocationOrThrow = function () {
          return n('location');
        }),
        (t.getLocation = function () {
          return r('location');
        }),
        (t.getCryptoOrThrow = function () {
          return n('crypto');
        }),
        (t.getCrypto = function () {
          return r('crypto');
        }),
        (t.getLocalStorageOrThrow = function () {
          return n('localStorage');
        }),
        (t.getLocalStorage = function () {
          return r('localStorage');
        });
    },
    39860: (e, t, r) => {
      'use strict';
      r.d(t, { kF: () => o });
      class n {}
      class i extends n {
        constructor() {
          super();
        }
      }
      class o extends i {
        constructor(e) {
          super();
        }
      }
    },
    44045: (e, t, r) => {
      'use strict';
      function n() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function i() {
        let e = n();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0),
        (t.getBrowerCrypto = n),
        (t.getSubtleCrypto = i),
        (t.isBrowserCryptoAvailable = function () {
          return !!n() && !!i();
        });
    },
    45103: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    45924: (e, t, r) => {
      'use strict';
      r.d(t, { ER: () => o, Im: () => u, dZ: () => l, eX: () => s, e_: () => a });
      var n = r(64411),
        i = r(28916);
      function o(e = 3) {
        return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e));
      }
      function s(e = 6) {
        return BigInt(o(e));
      }
      function a(e, t, r) {
        return { id: r || o(), jsonrpc: '2.0', method: e, params: t };
      }
      function u(e, t) {
        return { id: e, jsonrpc: '2.0', result: t };
      }
      function l(e, t, r) {
        var o, s;
        return {
          id: e,
          jsonrpc: '2.0',
          error:
            ((o = t),
            (s = r),
            void 0 === o
              ? (0, n.vG)(i.zR)
              : ('string' == typeof o &&
                  (o = Object.assign(Object.assign({}, (0, n.vG)(i.fO)), { message: o })),
                void 0 !== s && (o.data = s),
                (0, n.mE)(o.code) && (o = (0, n.rI)(o.code)),
                o)),
        };
      }
    },
    46406: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IWatch = void 0);
      class r {}
      t.IWatch = r;
    },
    55239: (e, t, r) => {
      'use strict';
      var n = r(40459);
      function i() {
        return (
          'undefined' == typeof document &&
          'undefined' != typeof navigator &&
          'ReactNative' === navigator.product
        );
      }
      function o() {
        return void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = i),
        (t.isNode = o),
        (t.isBrowser = function () {
          return !i() && !o();
        });
    },
    58393: (e) => {
      'use strict';
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, n) {
        var i = (n && n.stringify) || t;
        if ('object' == typeof e && null !== e) {
          var o = r.length + 1;
          if (1 === o) return e;
          var s = Array(o);
          s[0] = i(e);
          for (var a = 1; a < o; a++) s[a] = i(r[a]);
          return s.join(' ');
        }
        if ('string' != typeof e) return e;
        var u = r.length;
        if (0 === u) return e;
        for (var l = '', c = 0, f = -1, h = (e && e.length) || 0, d = 0; d < h; ) {
          if (37 === e.charCodeAt(d) && d + 1 < h) {
            switch (((f = f > -1 ? f : 0), e.charCodeAt(d + 1))) {
              case 100:
              case 102:
                if (c >= u || null == r[c]) break;
                f < d && (l += e.slice(f, d)), (l += Number(r[c])), (f = d + 2), d++;
                break;
              case 105:
                if (c >= u || null == r[c]) break;
                f < d && (l += e.slice(f, d)), (l += Math.floor(Number(r[c]))), (f = d + 2), d++;
                break;
              case 79:
              case 111:
              case 106:
                if (c >= u || void 0 === r[c]) break;
                f < d && (l += e.slice(f, d));
                var p = typeof r[c];
                if ('string' === p) {
                  (l += "'" + r[c] + "'"), (f = d + 2), d++;
                  break;
                }
                if ('function' === p) {
                  (l += r[c].name || '<anonymous>'), (f = d + 2), d++;
                  break;
                }
                (l += i(r[c])), (f = d + 2), d++;
                break;
              case 115:
                if (c >= u) break;
                f < d && (l += e.slice(f, d)), (l += String(r[c])), (f = d + 2), d++;
                break;
              case 37:
                f < d && (l += e.slice(f, d)), (l += '%'), (f = d + 2), d++, c--;
            }
            ++c;
          }
          ++d;
        }
        return -1 === f ? e : (f < h && (l += e.slice(f)), l);
      };
    },
    58421: (e, t, r) => {
      'use strict';
      t.g = void 0;
      let n = r(37752);
      t.g = function () {
        let e, t, r;
        try {
          (e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function i(...t) {
          let r = e.getElementsByTagName('meta');
          for (let e = 0; e < r.length; e++) {
            let n = r[e],
              i = ['itemprop', 'property', 'name']
                .map((e) => n.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (i.length && i) {
              let e = n.getAttribute('content');
              if (e) return e;
            }
          }
          return '';
        }
        let o = ((r = i('name', 'og:site_name', 'og:title', 'twitter:title')) || (r = e.title), r),
          s = i('description', 'og:description', 'twitter:description', 'keywords'),
          a = t.origin;
        return {
          description: s,
          url: a,
          icons: (function () {
            let r = e.getElementsByTagName('link'),
              n = [];
            for (let e = 0; e < r.length; e++) {
              let i = r[e],
                o = i.getAttribute('rel');
              if (o && o.toLowerCase().indexOf('icon') > -1) {
                let e = i.getAttribute('href');
                if (e) {
                  if (
                    -1 === e.toLowerCase().indexOf('https:') &&
                    -1 === e.toLowerCase().indexOf('http:') &&
                    0 !== e.indexOf('//')
                  ) {
                    let r = t.protocol + '//' + t.host;
                    if (0 === e.indexOf('/')) r += e;
                    else {
                      let n = t.pathname.split('/');
                      n.pop(), (r += n.join('/') + '/' + e);
                    }
                    n.push(r);
                  } else if (0 === e.indexOf('//')) {
                    let r = t.protocol + e;
                    n.push(r);
                  } else n.push(e);
                }
              }
            }
            return n;
          })(),
          name: o,
        };
      };
    },
    58621: (e) => {
      'use strict';
      var t,
        r = 'object' == typeof Reflect ? Reflect : null,
        n =
          r && 'function' == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && 'function' == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
      var i =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, n) {
            var i, o, s;
            function a(r) {
              e.removeListener(t, u), n(r);
            }
            function u() {
              'function' == typeof e.removeListener && e.removeListener('error', a),
                r([].slice.call(arguments));
            }
            b(e, t, u, { once: !0 }),
              'error' !== t &&
                ((i = e),
                (o = a),
                (s = { once: !0 }),
                'function' == typeof i.on && b(i, 'error', o, s));
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var s = 10;
      function a(e) {
        if ('function' != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' + typeof e
          );
      }
      function u(e) {
        return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
      }
      function l(e, t, r, n) {
        if (
          (a(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit('newListener', t, r.listener ? r.listener : r), (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount;
        else if (
          ('function' == typeof s ? (s = o[t] = n ? [r, s] : [s, r]) : n ? s.unshift(r) : s.push(r),
          (i = u(e)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var i,
            o,
            s,
            l = Error(
              'Possible EventEmitter memory leak detected. ' +
                s.length +
                ' ' +
                String(t) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            );
          (l.name = 'MaxListenersExceededWarning'),
            (l.emitter = e),
            (l.type = t),
            (l.count = s.length),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function c() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function f(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = c.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function h(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : 'function' == typeof i
            ? r
              ? [i.listener || i]
              : [i]
            : r
              ? (function (e) {
                  for (var t = Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                  return t;
                })(i)
              : p(i, i.length);
      }
      function d(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ('function' == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function p(e, t) {
        for (var r = Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      function b(e, t, r, n) {
        if ('function' == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else if ('function' == typeof e.addEventListener)
          e.addEventListener(t, function i(o) {
            n.once && e.removeEventListener(t, i), r(o);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' + typeof e
          );
      }
      Object.defineProperty(o, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || i(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          s = e;
        },
      }),
        (o.init = function () {
          (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || i(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
          var i = 'error' === e,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var s,
              a = Error('Unhandled error.' + (s ? ' (' + s.message + ')' : ''));
            throw ((a.context = s), a);
          }
          var u = o[e];
          if (void 0 === u) return !1;
          if ('function' == typeof u) n(u, this, t);
          else for (var l = u.length, c = p(u, l), r = 0; r < l; ++r) n(c[r], this, t);
          return !0;
        }),
        (o.prototype.addListener = function (e, t) {
          return l(this, e, t, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return l(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return a(t), this.on(e, f(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, f(this, e, t)), this;
        }),
        (o.prototype.removeListener = function (e, t) {
          var r, n, i, o, s;
          if ((a(t), void 0 === (n = this._events) || void 0 === (r = n[e]))) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e], n.removeListener && this.emit('removeListener', e, r.listener || t));
          else if ('function' != typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (s = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener && this.emit('removeListener', e, s || t);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              'removeListener' !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t) for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return h(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return h(this, e, !1);
        }),
        (o.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t);
        }),
        (o.prototype.listenerCount = d),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    59213: (e, t, r) => {
      'use strict';
      let n = r(58393);
      e.exports = o;
      let i =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ('undefined' != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, 'globalThis', {
                get: function () {
                  return delete Object.prototype.globalThis, (this.globalThis = this);
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function o(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let n = e.browser.transmit;
        if (n && 'function' != typeof n.send)
          throw Error('pino: transmit option must have a send function');
        let c = e.browser.write || i;
        e.browser.write && (e.browser.asObject = !0);
        let f = e.serializers || {},
          b = Array.isArray((t = e.browser.serialize))
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(f),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (y = !1),
          'function' == typeof c && (c.error = c.fatal = c.warn = c.info = c.debug = c.trace = c),
          !1 === e.enabled && (e.level = 'silent');
        let g = e.level || 'info',
          m = Object.create(c);
        m.log || (m.log = h),
          Object.defineProperty(m, 'levelVal', {
            get: function () {
              return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(m, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
              (this._level = e),
                s(D, m, 'error', 'log'),
                s(D, m, 'fatal', 'error'),
                s(D, m, 'warn', 'error'),
                s(D, m, 'info', 'log'),
                s(D, m, 'debug', 'log'),
                s(D, m, 'trace', 'log');
            },
          });
        let D = {
          transmit: n,
          serialize: b,
          asObject: e.browser.asObject,
          levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
          timestamp:
            'function' == typeof (r = e).timestamp ? r.timestamp : !1 === r.timestamp ? d : p,
        };
        return (
          (m.levels = o.levels),
          (m.level = g),
          (m.setMaxListeners =
            m.getMaxListeners =
            m.emit =
            m.addListener =
            m.on =
            m.prependListener =
            m.once =
            m.prependOnceListener =
            m.removeListener =
            m.removeAllListeners =
            m.listeners =
            m.listenerCount =
            m.eventNames =
            m.write =
            m.flush =
              h),
          (m.serializers = f),
          (m._serialize = b),
          (m._stdErrSerialize = y),
          (m.child = function (t, r) {
            if (!t) throw Error('missing bindings for child Pino');
            (r = r || {}), b && t.serializers && (r.serializers = t.serializers);
            let i = r.serializers;
            if (b && i) {
              var o = Object.assign({}, f, i),
                s = !0 === e.browser.serialize ? Object.keys(o) : b;
              delete t.serializers, a([t], s, o, this._stdErrSerialize);
            }
            function c(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = u(e, t, 'error')),
                (this.fatal = u(e, t, 'fatal')),
                (this.warn = u(e, t, 'warn')),
                (this.info = u(e, t, 'info')),
                (this.debug = u(e, t, 'debug')),
                (this.trace = u(e, t, 'trace')),
                o && ((this.serializers = o), (this._serialize = s)),
                n && (this._logEvent = l([].concat(e._logEvent.bindings, t)));
            }
            return (c.prototype = this), new c(this);
          }),
          n && (m._logEvent = l()),
          m
        );
      }
      function s(e, t, r, s) {
        let u = Object.getPrototypeOf(t);
        (t[r] = t.levelVal > t.levels.values[r] ? h : u[r] ? u[r] : i[r] || i[s] || h),
          (function (e, t, r) {
            if (e.transmit || t[r] !== h) {
              var s;
              t[r] =
                ((s = t[r]),
                function () {
                  let u = e.timestamp(),
                    c = Array(arguments.length),
                    f = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                  for (var h = 0; h < c.length; h++) c[h] = arguments[h];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(c, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject
                      ? s.call(
                          f,
                          (function (e, t, r, i) {
                            e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                            let s = r.slice(),
                              u = s[0],
                              l = {};
                            i && (l.time = i), (l.level = o.levels.values[t]);
                            let c = (0 | e._childLevel) + 1;
                            if ((c < 1 && (c = 1), null !== u && 'object' == typeof u)) {
                              for (; c-- && 'object' == typeof s[0]; ) Object.assign(l, s.shift());
                              u = s.length ? n(s.shift(), s) : void 0;
                            } else 'string' == typeof u && (u = n(s.shift(), s));
                            return void 0 !== u && (l.msg = u), l;
                          })(this, r, c, u)
                        )
                      : s.apply(f, c),
                    e.transmit)
                  ) {
                    let n = e.transmit.level || t.level,
                      i = o.levels.values[n],
                      s = o.levels.values[r];
                    if (s < i) return;
                    (function (e, t, r) {
                      let n = t.send,
                        i = t.ts,
                        o = t.methodLevel,
                        s = t.methodValue,
                        u = t.val,
                        c = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = i),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === c.indexOf(e);
                        })),
                        (e._logEvent.level.label = o),
                        (e._logEvent.level.value = s),
                        n(o, e._logEvent, u),
                        (e._logEvent = l(c));
                    })(
                      this,
                      {
                        ts: u,
                        methodLevel: r,
                        methodValue: s,
                        transmitLevel: n,
                        transmitValue: o.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      c
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, n) {
        for (let i in e)
          if (n && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
          else if ('object' == typeof e[i] && !Array.isArray(e[i]))
            for (let n in e[i]) t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
      }
      function u(e, t, r) {
        return function () {
          let n = Array(1 + arguments.length);
          n[0] = t;
          for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
          return e[r].apply(this, n);
        };
      }
      function l(e) {
        return { ts: 0, messages: [], bindings: e || [], level: { label: '', value: 0 } };
      }
      function c() {
        return {};
      }
      function f(e) {
        return e;
      }
      function h() {}
      function d() {
        return !1;
      }
      function p() {
        return Date.now();
      }
      (o.levels = {
        values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
        labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' },
      }),
        (o.stdSerializers = {
          mapHttpRequest: c,
          mapHttpResponse: c,
          wrapRequestSerializer: f,
          wrapResponseSerializer: f,
          wrapErrorSerializer: f,
          req: c,
          res: c,
          err: function (e) {
            let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: d,
            epochTime: p,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
    60256: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'object' == typeof e && 'id' in e && 'jsonrpc' in e && '2.0' === e.jsonrpc;
      }
      function i(e) {
        return n(e) && 'method' in e;
      }
      function o(e) {
        return n(e) && (s(e) || a(e));
      }
      function s(e) {
        return 'result' in e;
      }
      function a(e) {
        return 'error' in e;
      }
      r.d(t, { U$: () => a, p3: () => i, tq: () => o, xT: () => s });
    },
    61818: (e, t, r) => {
      'use strict';
      var n = r(36672);
      r.o(n, 'IJsonRpcProvider') &&
        r.d(t, {
          IJsonRpcProvider: function () {
            return n.IJsonRpcProvider;
          },
        }),
        r.o(n, 'formatJsonRpcError') &&
          r.d(t, {
            formatJsonRpcError: function () {
              return n.formatJsonRpcError;
            },
          }),
        r.o(n, 'formatJsonRpcRequest') &&
          r.d(t, {
            formatJsonRpcRequest: function () {
              return n.formatJsonRpcRequest;
            },
          }),
        r.o(n, 'formatJsonRpcResult') &&
          r.d(t, {
            formatJsonRpcResult: function () {
              return n.formatJsonRpcResult;
            },
          }),
        r.o(n, 'getBigIntRpcId') &&
          r.d(t, {
            getBigIntRpcId: function () {
              return n.getBigIntRpcId;
            },
          }),
        r.o(n, 'isHttpUrl') &&
          r.d(t, {
            isHttpUrl: function () {
              return n.isHttpUrl;
            },
          }),
        r.o(n, 'isJsonRpcError') &&
          r.d(t, {
            isJsonRpcError: function () {
              return n.isJsonRpcError;
            },
          }),
        r.o(n, 'isJsonRpcRequest') &&
          r.d(t, {
            isJsonRpcRequest: function () {
              return n.isJsonRpcRequest;
            },
          }),
        r.o(n, 'isJsonRpcResponse') &&
          r.d(t, {
            isJsonRpcResponse: function () {
              return n.isJsonRpcResponse;
            },
          }),
        r.o(n, 'isJsonRpcResult') &&
          r.d(t, {
            isJsonRpcResult: function () {
              return n.isJsonRpcResult;
            },
          }),
        r.o(n, 'isLocalhostUrl') &&
          r.d(t, {
            isLocalhostUrl: function () {
              return n.isLocalhostUrl;
            },
          }),
        r.o(n, 'isReactNative') &&
          r.d(t, {
            isReactNative: function () {
              return n.isReactNative;
            },
          }),
        r.o(n, 'isWsUrl') &&
          r.d(t, {
            isWsUrl: function () {
              return n.isWsUrl;
            },
          }),
        r.o(n, 'payloadId') &&
          r.d(t, {
            payloadId: function () {
              return n.payloadId;
            },
          });
    },
    64411: (e, t, r) => {
      'use strict';
      r.d(t, { eF: () => a, mE: () => i, rI: () => s, vG: () => o });
      var n = r(28916);
      function i(e) {
        return n.jf.includes(e);
      }
      function o(e) {
        return Object.keys(n.Uf).includes(e) ? n.Uf[e] : n.Uf[n.XW];
      }
      function s(e) {
        let t = Object.values(n.Uf).find((t) => t.code === e);
        return t || n.Uf[n.XW];
      }
      function a(e, t, r) {
        return e.message.includes('getaddrinfo ENOTFOUND') ||
          e.message.includes('connect ECONNREFUSED')
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
    },
    65807: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => m, V: () => m });
      var n = r(58621),
        i = r(9912),
        o = r.n(i),
        s = r(25476),
        a = r(33137),
        u = Object.defineProperty,
        l = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        p = (e, t, r) =>
          t in e
            ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        b = (e, t) => {
          for (var r in t || (t = {})) h.call(t, r) && p(e, r, t[r]);
          if (f) for (var r of f(t)) d.call(t, r) && p(e, r, t[r]);
          return e;
        },
        y = (e, t) => l(e, c(t));
      let g = {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
      };
      class m {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new n.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, a.isHttpUrl)(e))
          )
            throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
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
          if (!this.isAvailable) throw Error('Connection already closed');
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let t = (0, s.h)(e),
              r = await (await o()(this.url, y(b({}, g), { body: t }))).json();
            this.onPayload({ data: r });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!(0, a.isHttpUrl)(e))
            throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
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
                    if ((this.resetMaxListeners(), typeof this.isAvailable > 'u'))
                      return t(Error('HTTP connection is missing or invalid'));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = (0, s.h)({ id: 1, jsonrpc: '2.0', method: 'test', params: [] });
              await o()(e, y(b({}, g), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit('register_error', e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0), (this.registering = !1), this.events.emit('open');
        }
        onClose() {
          (this.isAvailable = !1), (this.registering = !1), this.events.emit('close');
        }
        onPayload(e) {
          if (typeof e.data > 'u') return;
          let t = 'string' == typeof e.data ? (0, s.j)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            n = r.message || r.toString(),
            i = (0, a.formatJsonRpcError)(e, n);
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return (0, a.parseConnectionError)(e, t, 'HTTP');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
    },
    69610: (e, t, r) => {
      'use strict';
      let n;
      r.d(t, { A: () => R });
      let i =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        o =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        s = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function a(e, t) {
        if (
          '__proto__' === e ||
          ('constructor' === e && t && 'object' == typeof t && 'prototype' in t)
        ) {
          var r;
          (r = e), console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
          return;
        }
        return t;
      }
      function u(e, t = {}) {
        if ('string' != typeof e) return e;
        let r = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes('\\')) return r.slice(1, -1);
        if (r.length <= 9) {
          let e = r.toLowerCase();
          if ('true' === e) return !0;
          if ('false' === e) return !1;
          if ('undefined' === e) return;
          if ('null' === e) return null;
          if ('nan' === e) return Number.NaN;
          if ('infinity' === e) return Number.POSITIVE_INFINITY;
          if ('-infinity' === e) return Number.NEGATIVE_INFINITY;
        }
        if (!s.test(e)) {
          if (t.strict) throw SyntaxError('[destr] Invalid JSON');
          return e;
        }
        try {
          if (i.test(e) || o.test(e)) {
            if (t.strict) throw Error('[destr] Possible prototype pollution');
            return JSON.parse(e, a);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
      var l = r(50887).Buffer;
      function c(e, ...t) {
        try {
          var r;
          return (r = e(...t)) && 'function' == typeof r.then ? r : Promise.resolve(r);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function f(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ('object' !== t && 'function' !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ('function' == typeof e.toJSON) return f(e.toJSON());
        throw Error('[unstorage] Cannot stringify value!');
      }
      let h = 'base64:';
      function d(e) {
        return (
          (e &&
            e.split('?')[0]?.replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '')) ||
          ''
        );
      }
      function p(e) {
        return (e = d(e)) ? e + ':' : '';
      }
      let b = () => {
        let e = new Map();
        return {
          name: 'memory',
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function y(e, t, r) {
        return e.watch ? e.watch((e, n) => t(e, r + n)) : () => {};
      }
      async function g(e) {
        'function' == typeof e.dispose && (await c(e.dispose));
      }
      function m(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function D(e, t) {
        let r = indexedDB.open(e);
        r.onupgradeneeded = () => r.result.createObjectStore(t);
        let n = m(r);
        return (e, r) => n.then((n) => r(n.transaction(t, e).objectStore(t)));
      }
      function v() {
        return n || (n = D('keyval-store', 'keyval')), n;
      }
      function w(e, t = v()) {
        return t('readonly', (t) => m(t.get(e)));
      }
      var E = r(25476),
        x = (e = {}) => {
          let t;
          let r = e.base && e.base.length > 0 ? `${e.base}:` : '',
            n = (e) => r + e;
          return (
            e.dbName && e.storeName && (t = D(e.dbName, e.storeName)),
            {
              name: 'idb-keyval',
              options: e,
              hasItem: async (e) => !(typeof (await w(n(e), t)) > 'u'),
              getItem: async (e) => (await w(n(e), t)) ?? null,
              setItem: (e, r) =>
                (function (e, t, r = v()) {
                  return r('readwrite', (r) => (r.put(t, e), m(r.transaction)));
                })(n(e), r, t),
              removeItem: (e) =>
                (function (e, t = v()) {
                  return t('readwrite', (t) => (t.delete(e), m(t.transaction)));
                })(n(e), t),
              getKeys: () =>
                (function (e = v()) {
                  return e('readonly', (e) => {
                    var t, r;
                    if (e.getAllKeys) return m(e.getAllKeys());
                    let n = [];
                    return ((t = e),
                    (r = (e) => n.push(e.key)),
                    (t.openCursor().onsuccess = function () {
                      this.result && (r(this.result), this.result.continue());
                    }),
                    m(t.transaction)).then(() => n);
                  });
                })(t),
              clear: () =>
                (function (e = v()) {
                  return e('readwrite', (e) => (e.clear(), m(e.transaction)));
                })(t),
            }
          );
        };
      class _ {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { '': e.driver || b() },
                mountpoints: [''],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              r = (e) => {
                for (let r of t.mountpoints)
                  if (e.startsWith(r))
                    return { base: r, relativeKey: e.slice(r.length), driver: t.mounts[r] };
                return { base: '', relativeKey: e, driver: t.mounts[''] };
              },
              n = (e, r) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                  .map((r) => ({
                    relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                    mountpoint: r,
                    driver: t.mounts[r],
                  })),
              i = (e, r) => {
                if (t.watching) for (let n of ((r = d(r)), t.watchListeners)) n(e, r);
              },
              o = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await y(t.mounts[e], i, e);
              },
              s = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              a = (e, t, n) => {
                let i = new Map(),
                  o = (e) => {
                    let t = i.get(e.base);
                    return (
                      t || ((t = { driver: e.driver, base: e.base, items: [] }), i.set(e.base, t)),
                      t
                    );
                  };
                for (let n of e) {
                  let e = 'string' == typeof n,
                    i = d(e ? n : n.key),
                    s = e ? void 0 : n.value,
                    a = e || !n.options ? t : { ...t, ...n.options },
                    u = r(i);
                  o(u).items.push({ key: i, value: s, relativeKey: u.relativeKey, options: a });
                }
                return Promise.all([...i.values()].map((e) => n(e))).then((e) => e.flat());
              },
              m = {
                hasItem(e, t = {}) {
                  let { relativeKey: n, driver: i } = r((e = d(e)));
                  return c(i.hasItem, n, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: n, driver: i } = r((e = d(e)));
                  return c(i.getItem, n, t).then((e) => u(e));
                },
                getItems: (e, t = {}) =>
                  a(e, t, (e) =>
                    e.driver.getItems
                      ? c(
                          e.driver.getItems,
                          e.items.map((e) => ({ key: e.relativeKey, options: e.options })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return d(e.join(':'));
                            })(e.base, t.key),
                            value: u(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            c(e.driver.getItem, t.relativeKey, t.options).then((e) => ({
                              key: t.key,
                              value: u(e),
                            }))
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: n, driver: i } = r((e = d(e)));
                  return i.getItemRaw
                    ? c(i.getItemRaw, n, t)
                    : c(i.getItem, n, t).then((e) => {
                        var t;
                        return 'string' == typeof e && e.startsWith(h)
                          ? ((t = e.slice(h.length)),
                            globalThis.Buffer
                              ? l.from(t, 'base64')
                              : Uint8Array.from(globalThis.atob(t), (e) => e.codePointAt(0)))
                          : e;
                      });
                },
                async setItem(e, t, n = {}) {
                  if (void 0 === t) return m.removeItem(e);
                  let { relativeKey: o, driver: s } = r((e = d(e)));
                  s.setItem && (await c(s.setItem, o, f(t), n), s.watch || i('update', e));
                },
                async setItems(e, t) {
                  await a(e, t, async (e) => {
                    if (e.driver.setItems)
                      return c(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: f(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          c(e.driver.setItem, t.relativeKey, f(t.value), t.options)
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, n = {}) {
                  if (void 0 === t) return m.removeItem(e, n);
                  let { relativeKey: o, driver: s } = r((e = d(e)));
                  if (s.setItemRaw) await c(s.setItemRaw, o, t, n);
                  else {
                    var a;
                    if (!s.setItem) return;
                    await c(
                      s.setItem,
                      o,
                      'string' == typeof t
                        ? t
                        : h +
                            ((a = t),
                            globalThis.Buffer
                              ? l.from(a).toString('base64')
                              : globalThis.btoa(String.fromCodePoint(...a))),
                      n
                    );
                  }
                  s.watch || i('update', e);
                },
                async removeItem(e, t = {}) {
                  'boolean' == typeof t && (t = { removeMeta: t });
                  let { relativeKey: n, driver: o } = r((e = d(e)));
                  o.removeItem &&
                    (await c(o.removeItem, n, t),
                    (t.removeMeta || t.removeMata) && (await c(o.removeItem, n + '$', t)),
                    o.watch || i('remove', e));
                },
                async getMeta(e, t = {}) {
                  'boolean' == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: n, driver: i } = r((e = d(e))),
                    o = Object.create(null);
                  if ((i.getMeta && Object.assign(o, await c(i.getMeta, n, t)), !t.nativeOnly)) {
                    let e = await c(i.getItem, n + '$', t).then((e) => u(e));
                    e &&
                      'object' == typeof e &&
                      ('string' == typeof e.atime && (e.atime = new Date(e.atime)),
                      'string' == typeof e.mtime && (e.mtime = new Date(e.mtime)),
                      Object.assign(o, e));
                  }
                  return o;
                },
                setMeta(e, t, r = {}) {
                  return this.setItem(e + '$', t, r);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + '$', t);
                },
                async getKeys(e, t = {}) {
                  let r = n((e = p(e)), !0),
                    i = [],
                    o = [],
                    s = !0;
                  for (let e of r) {
                    for (let r of (e.driver.flags?.maxDepth || (s = !1),
                    await c(e.driver.getKeys, e.relativeBase, t))) {
                      let t = e.mountpoint + d(r);
                      i.some((e) => t.startsWith(e)) || o.push(t);
                    }
                    i = [e.mountpoint, ...i.filter((t) => !t.startsWith(e.mountpoint))];
                  }
                  let a = void 0 !== t.maxDepth && !s;
                  return o.filter((r) => {
                    var n;
                    return (
                      (!a ||
                        (function (e, t) {
                          if (void 0 === t) return !0;
                          let r = 0,
                            n = e.indexOf(':');
                          for (; n > -1; ) r++, (n = e.indexOf(':', n + 1));
                          return r <= t;
                        })(r, t.maxDepth)) &&
                      ((n = e)
                        ? r.startsWith(n) && '$' !== r[r.length - 1]
                        : '$' !== r[r.length - 1])
                    );
                  });
                },
                async clear(e, t = {}) {
                  (e = p(e)),
                    await Promise.all(
                      n(e, !1).map(async (e) =>
                        e.driver.clear
                          ? c(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                            ? Promise.all(
                                (await e.driver.getKeys(e.relativeBase || '', t)).map((r) =>
                                  e.driver.removeItem(r, t)
                                )
                              )
                            : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => g(e)));
                },
                watch: async (e) => (
                  await o(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
                      0 === t.watchListeners.length && (await s());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await s();
                },
                mount(e, r) {
                  if ((e = p(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                  return (
                    e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = r),
                    t.watching &&
                      Promise.resolve(y(r, i, e))
                        .then((r) => {
                          t.unwatch[e] = r;
                        })
                        .catch(console.error),
                    m
                  );
                },
                async unmount(e, r = !0) {
                  (e = p(e)) &&
                    t.mounts[e] &&
                    (t.watching && e in t.unwatch && (t.unwatch[e]?.(), delete t.unwatch[e]),
                    r && (await g(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = '') {
                  let t = r((e = d(e) + ':'));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = '', t = {}) =>
                  n((e = d(e)), t.parents).map((e) => ({ driver: e.driver, base: e.mountpoint })),
                keys: (e, t = {}) => m.getKeys(e, t),
                get: (e, t = {}) => m.getItem(e, t),
                set: (e, t, r = {}) => m.setItem(e, t, r),
                has: (e, t = {}) => m.hasItem(e, t),
                del: (e, t = {}) => m.removeItem(e, t),
                remove: (e, t = {}) => m.removeItem(e, t),
              };
            return m;
          })({
            driver: x({ dbName: 'WALLET_CONNECT_V2_INDEXED_DB', storeName: 'keyvaluestorage' }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [
            e.key,
            e.value,
          ]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, E.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var O =
          'u' > typeof globalThis
            ? globalThis
            : 'u' > typeof window
              ? window
              : 'u' > typeof r.g
                ? r.g
                : 'u' > typeof self
                  ? self
                  : {},
        S = { exports: {} };
      function A(e) {
        var t;
        return [e[0], (0, E.j)(null != (t = e[1]) ? t : '')];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__('length', function () {
            return Object.keys(this).length;
          }),
          'u' > typeof O && O.localStorage
            ? (S.exports = O.localStorage)
            : 'u' > typeof window && window.localStorage
              ? (S.exports = window.localStorage)
              : (S.exports = new e());
      })();
      class C {
        constructor() {
          this.localStorage = S.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(A);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, E.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, E.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let I = async (e, t, r) => {
          let n = 'wc_storage_version',
            i = await t.getItem(n);
          if (i && i >= 1) {
            r(t);
            return;
          }
          let o = await e.getKeys();
          if (!o.length) {
            r(t);
            return;
          }
          let s = [];
          for (; o.length; ) {
            let r = o.shift();
            if (!r) continue;
            let n = r.toLowerCase();
            if (
              n.includes('wc@') ||
              n.includes('walletconnect') ||
              n.includes('wc_') ||
              n.includes('wallet_connect')
            ) {
              let n = await e.getItem(r);
              await t.setItem(r, n), s.push(r);
            }
          }
          await t.setItem(n, 1), r(t), B(e, s);
        },
        B = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class R {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new C();
          this.storage = e;
          try {
            let t = new _();
            I(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
    },
    73642: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), r(24584).__exportStar(r(46406), t);
    },
    78618: (e, t, r) => {
      'use strict';
      r.d(t, { Cq: () => tA, FA: () => tI, TZ: () => tC, UF: () => tS });
      var n = r(95572),
        i = r(25476);
      function o(e, ...t) {
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
      function s(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      let a = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0,
        u = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function l(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          o(e),
          e
        );
      }
      class c {
        clone() {
          return this._cloneInto();
        }
      }
      function f(e = 32) {
        if (a && 'function' == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && 'function' == typeof a.randomBytes) return a.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      class h extends c {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = u(this.buffer));
        }
        update(e) {
          s(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = l(e)).length;
          for (let o = 0; o < i; ) {
            let s = Math.min(n - this.pos, i - o);
            if (s === n) {
              let t = u(e);
              for (; n <= i - o; o += n) this.process(t, o);
              continue;
            }
            r.set(e.subarray(o, o + s), this.pos),
              (this.pos += s),
              (o += s),
              this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          s(this),
            (function (e, t) {
              o(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > n - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < n; e++) t[e] = 0;
          (function (e, t, r, n) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              o = BigInt(0xffffffff),
              s = Number((r >> i) & o),
              a = Number(r & o),
              u = 4 * !!n,
              l = 4 * !n;
            e.setUint32(t + u, s, n), e.setUint32(t + l, a, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let l = u(e),
            c = this.outputLen;
          if (c % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let f = c / 4,
            h = this.get();
          if (f > h.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < f; e++) l.setUint32(4 * e, h[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: n, finished: i, destroyed: o, pos: s } = this;
          return (
            (e.length = n),
            (e.pos = s),
            (e.finished = i),
            (e.destroyed = o),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let d = BigInt(0x100000000 - 1),
        p = BigInt(32),
        b = {
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              n = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
              let { h: o, l: s } = (function (e, t = !1) {
                return t
                  ? { h: Number(e & d), l: Number((e >> p) & d) }
                  : { h: 0 | Number((e >> p) & d), l: 0 | Number(e & d) };
              })(e[i], t);
              [r[i], n[i]] = [o, s];
            }
            return [r, n];
          },
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          add: function (e, t, r, n) {
            let i = (t >>> 0) + (n >>> 0);
            return { h: (e + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, r, n, i, o) => (t + r + n + i + o + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        },
        [y, g] = b.split(
          [
            '0x428a2f98d728ae22',
            '0x7137449123ef65cd',
            '0xb5c0fbcfec4d3b2f',
            '0xe9b5dba58189dbbc',
            '0x3956c25bf348b538',
            '0x59f111f1b605d019',
            '0x923f82a4af194f9b',
            '0xab1c5ed5da6d8118',
            '0xd807aa98a3030242',
            '0x12835b0145706fbe',
            '0x243185be4ee4b28c',
            '0x550c7dc3d5ffb4e2',
            '0x72be5d74f27b896f',
            '0x80deb1fe3b1696b1',
            '0x9bdc06a725c71235',
            '0xc19bf174cf692694',
            '0xe49b69c19ef14ad2',
            '0xefbe4786384f25e3',
            '0x0fc19dc68b8cd5b5',
            '0x240ca1cc77ac9c65',
            '0x2de92c6f592b0275',
            '0x4a7484aa6ea6e483',
            '0x5cb0a9dcbd41fbd4',
            '0x76f988da831153b5',
            '0x983e5152ee66dfab',
            '0xa831c66d2db43210',
            '0xb00327c898fb213f',
            '0xbf597fc7beef0ee4',
            '0xc6e00bf33da88fc2',
            '0xd5a79147930aa725',
            '0x06ca6351e003826f',
            '0x142929670a0e6e70',
            '0x27b70a8546d22ffc',
            '0x2e1b21385c26c926',
            '0x4d2c6dfc5ac42aed',
            '0x53380d139d95b3df',
            '0x650a73548baf63de',
            '0x766a0abb3c77b2a8',
            '0x81c2c92e47edaee6',
            '0x92722c851482353b',
            '0xa2bfe8a14cf10364',
            '0xa81a664bbc423001',
            '0xc24b8b70d0f89791',
            '0xc76c51a30654be30',
            '0xd192e819d6ef5218',
            '0xd69906245565a910',
            '0xf40e35855771202a',
            '0x106aa07032bbd1b8',
            '0x19a4c116b8d2d0c8',
            '0x1e376c085141ab53',
            '0x2748774cdf8eeb99',
            '0x34b0bcb5e19b48a8',
            '0x391c0cb3c5c95a63',
            '0x4ed8aa4ae3418acb',
            '0x5b9cca4f7763e373',
            '0x682e6ff3d6b2b8a3',
            '0x748f82ee5defb2fc',
            '0x78a5636f43172f60',
            '0x84c87814a1f0ab72',
            '0x8cc702081a6439ec',
            '0x90befffa23631e28',
            '0xa4506cebde82bde9',
            '0xbef9a3f7b2c67915',
            '0xc67178f2e372532b',
            '0xca273eceea26619c',
            '0xd186b8c721c0c207',
            '0xeada7dd6cde0eb1e',
            '0xf57d4f7fee6ed178',
            '0x06f067aa72176fba',
            '0x0a637dc5a2c898a6',
            '0x113f9804bef90dae',
            '0x1b710b35131c471b',
            '0x28db77f523047d84',
            '0x32caab7b40c72493',
            '0x3c9ebe0a15c9bebc',
            '0x431d67c49c100d4c',
            '0x4cc5d4becb3e42b6',
            '0x597f299cfc657e2a',
            '0x5fcb6fab3ad6faec',
            '0x6c44198c4a475817',
          ].map((e) => BigInt(e))
        ),
        m = new Uint32Array(80),
        D = new Uint32Array(80);
      class v extends h {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: u,
            El: l,
            Fh: c,
            Fl: f,
            Gh: h,
            Gl: d,
            Hh: p,
            Hl: b,
          } = this;
          return [e, t, r, n, i, o, s, a, u, l, c, f, h, d, p, b];
        }
        set(e, t, r, n, i, o, s, a, u, l, c, f, h, d, p, b) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | u),
            (this.El = 0 | l),
            (this.Fh = 0 | c),
            (this.Fl = 0 | f),
            (this.Gh = 0 | h),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | b);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (m[r] = e.getUint32(t)), (D[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | m[e - 15],
              r = 0 | D[e - 15],
              n = b.rotrSH(t, r, 1) ^ b.rotrSH(t, r, 8) ^ b.shrSH(t, r, 7),
              i = b.rotrSL(t, r, 1) ^ b.rotrSL(t, r, 8) ^ b.shrSL(t, r, 7),
              o = 0 | m[e - 2],
              s = 0 | D[e - 2],
              a = b.rotrSH(o, s, 19) ^ b.rotrBH(o, s, 61) ^ b.shrSH(o, s, 6),
              u = b.rotrSL(o, s, 19) ^ b.rotrBL(o, s, 61) ^ b.shrSL(o, s, 6),
              l = b.add4L(i, u, D[e - 7], D[e - 16]),
              c = b.add4H(l, n, a, m[e - 7], m[e - 16]);
            (m[e] = 0 | c), (D[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: o,
            Ch: s,
            Cl: a,
            Dh: u,
            Dl: l,
            Eh: c,
            El: f,
            Fh: h,
            Fl: d,
            Gh: p,
            Gl: v,
            Hh: w,
            Hl: E,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = b.rotrSH(c, f, 14) ^ b.rotrSH(c, f, 18) ^ b.rotrBH(c, f, 41),
              x = b.rotrSL(c, f, 14) ^ b.rotrSL(c, f, 18) ^ b.rotrBL(c, f, 41),
              _ = (c & h) ^ (~c & p),
              O = (f & d) ^ (~f & v),
              S = b.add5L(E, x, O, g[e], D[e]),
              A = b.add5H(S, w, t, _, y[e], m[e]),
              C = 0 | S,
              I = b.rotrSH(r, n, 28) ^ b.rotrBH(r, n, 34) ^ b.rotrBH(r, n, 39),
              B = b.rotrSL(r, n, 28) ^ b.rotrBL(r, n, 34) ^ b.rotrBL(r, n, 39),
              R = (r & i) ^ (r & s) ^ (i & s),
              T = (n & o) ^ (n & a) ^ (o & a);
            (w = 0 | p),
              (E = 0 | v),
              (p = 0 | h),
              (v = 0 | d),
              (h = 0 | c),
              (d = 0 | f),
              ({ h: c, l: f } = b.add(0 | u, 0 | l, 0 | A, 0 | C)),
              (u = 0 | s),
              (l = 0 | a),
              (s = 0 | i),
              (a = 0 | o),
              (i = 0 | r),
              (o = 0 | n);
            let P = b.add3L(C, B, T);
            (r = b.add3H(P, A, I, R)), (n = 0 | P);
          }
          ({ h: r, l: n } = b.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: o } = b.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: s, l: a } = b.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | a)),
            ({ h: u, l: l } = b.add(0 | this.Dh, 0 | this.Dl, 0 | u, 0 | l)),
            ({ h: c, l: f } = b.add(0 | this.Eh, 0 | this.El, 0 | c, 0 | f)),
            ({ h: h, l: d } = b.add(0 | this.Fh, 0 | this.Fl, 0 | h, 0 | d)),
            ({ h: p, l: v } = b.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | v)),
            ({ h: w, l: E } = b.add(0 | this.Hh, 0 | this.Hl, 0 | w, 0 | E)),
            this.set(r, n, i, o, s, a, u, l, c, f, h, d, p, v, w, E);
        }
        roundClean() {
          m.fill(0), D.fill(0);
        }
        destroy() {
          this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let w = (function (e) {
          let t = (t) => e().update(l(t)).digest(),
            r = e();
          return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
        })(() => new v()),
        E = BigInt(0),
        x = BigInt(1),
        _ = BigInt(2);
      function O(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function S(e) {
        if (!O(e)) throw Error('Uint8Array expected');
      }
      function A(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let C = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function I(e) {
        S(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += C[e[r]];
        return t;
      }
      function B(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        return '' === e ? E : BigInt('0x' + e);
      }
      let R = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function T(e) {
        return e >= R._0 && e <= R._9
          ? e - R._0
          : e >= R.A && e <= R.F
            ? e - (R.A - 10)
            : e >= R.a && e <= R.f
              ? e - (R.a - 10)
              : void 0;
      }
      function P(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let n = new Uint8Array(r);
        for (let t = 0, i = 0; t < r; t++, i += 2) {
          let r = T(e.charCodeAt(i)),
            o = T(e.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i
            );
          n[t] = 16 * r + o;
        }
        return n;
      }
      function L(e) {
        return S(e), B(I(Uint8Array.from(e).reverse()));
      }
      function N(e, t) {
        return P(e.toString(16).padStart(2 * t, '0'));
      }
      function U(e, t) {
        return N(e, t).reverse();
      }
      function j(e, t, r) {
        let n;
        if ('string' == typeof t)
          try {
            n = P(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (O(t)) n = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let i = n.length;
        if ('number' == typeof r && i !== r)
          throw Error(e + ' of length ' + r + ' expected, got ' + i);
        return n;
      }
      function F(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          S(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let k = (e) => 'bigint' == typeof e && E <= e;
      function z(e, t, r, n) {
        if (!(k(t) && k(r) && k(n)) || !(r <= t) || !(t < n))
          throw Error('expected valid ' + e + ': ' + r + ' <= n < ' + n + ', got ' + t);
      }
      let M = (e) => (_ << BigInt(e - 1)) - x,
        H = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || O(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function W(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = H[r];
          if ('function' != typeof i) throw Error('invalid validator function');
          let o = e[t];
          if (!(n && void 0 === o) && !i(o, e))
            throw Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + o);
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      function J(e) {
        let t = new WeakMap();
        return (r, ...n) => {
          let i = t.get(r);
          if (void 0 !== i) return i;
          let o = e(r, ...n);
          return t.set(r, o), o;
        };
      }
      let q = BigInt(0),
        V = BigInt(1),
        K = BigInt(2),
        $ = BigInt(3),
        Y = BigInt(4),
        G = BigInt(5),
        Z = BigInt(8);
      function X(e, t) {
        let r = e % t;
        return r >= q ? r : t + r;
      }
      function Q(e, t, r) {
        let n = e;
        for (; t-- > q; ) (n *= n), (n %= r);
        return n;
      }
      function ee(e, t) {
        if (e === q) throw Error('invert: expected non-zero number');
        if (t <= q) throw Error('invert: expected positive modulus, got ' + t);
        let r = X(e, t),
          n = t,
          i = q,
          o = V;
        for (; r !== q; ) {
          let e = n / r,
            t = n % r,
            s = i - o * e;
          (n = r), (r = t), (i = o), (o = s);
        }
        if (n !== V) throw Error('invert: does not exist');
        return X(i, t);
      }
      let et = (e, t) => (X(e, t) & V) === V,
        er = [
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
      function en(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          n = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: n };
      }
      function ei(e, t, r = !1, n = {}) {
        let i;
        if (e <= q) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: o, nByteLength: s } = en(e, t);
        if (s > 2048) throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: o,
          BYTES: s,
          MASK: M(o),
          ZERO: q,
          ONE: V,
          create: (t) => X(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return q <= t && t < e;
          },
          is0: (e) => e === q,
          isOdd: (e) => (e & V) === V,
          neg: (t) => X(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => X(t * t, e),
          add: (t, r) => X(t + r, e),
          sub: (t, r) => X(t - r, e),
          mul: (t, r) => X(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < q) throw Error('invalid exponent, negatives unsupported');
              if (r === q) return e.ONE;
              if (r === V) return t;
              let n = e.ONE,
                i = t;
              for (; r > q; ) r & V && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= V);
              return n;
            })(a, e, t),
          div: (t, r) => X(t * ee(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => ee(t, e),
          sqrt:
            n.sqrt ||
            ((t) => (
              i ||
                (i = (function (e) {
                  if (e % Y === $) {
                    let t = (e + V) / Y;
                    return function (e, r) {
                      let n = e.pow(r, t);
                      if (!e.eql(e.sqr(n), r)) throw Error('Cannot find square root');
                      return n;
                    };
                  }
                  if (e % Z === G) {
                    let t = (e - G) / Z;
                    return function (e, r) {
                      let n = e.mul(r, K),
                        i = e.pow(n, t),
                        o = e.mul(r, i),
                        s = e.mul(e.mul(o, K), i),
                        a = e.mul(o, e.sub(s, e.ONE));
                      if (!e.eql(e.sqr(a), r)) throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, r, n;
                    let i = (e - V) / K;
                    for (t = e - V, r = 0; t % K === q; t /= K, r++);
                    for (
                      n = K;
                      n < e &&
                      (function (e, t, r) {
                        if (t < q) throw Error('invalid exponent, negatives unsupported');
                        if (r <= q) throw Error('invalid modulus');
                        if (r === V) return q;
                        let n = V;
                        for (; t > q; ) t & V && (n = (n * e) % r), (e = (e * e) % r), (t >>= V);
                        return n;
                      })(n, i, e) !==
                        e - V;
                      n++
                    )
                      if (n > 1e3) throw Error('Cannot find square root: likely non-prime P');
                    if (1 === r) {
                      let t = (e + V) / Y;
                      return function (e, r) {
                        let n = e.pow(r, t);
                        if (!e.eql(e.sqr(n), r)) throw Error('Cannot find square root');
                        return n;
                      };
                    }
                    let o = (t + V) / K;
                    return function (e, s) {
                      if (e.pow(s, i) === e.neg(e.ONE)) throw Error('Cannot find square root');
                      let a = r,
                        u = e.pow(e.mul(e.ONE, n), t),
                        l = e.pow(s, o),
                        c = e.pow(s, t);
                      for (; !e.eql(c, e.ONE); ) {
                        if (e.eql(c, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(c); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        let r = e.pow(u, V << BigInt(a - t - 1));
                        (u = e.sqr(r)), (l = e.mul(l, r)), (c = e.mul(c, u)), (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              i(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                n = t.reduce((t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))), e.ONE),
                i = e.inv(n);
              return (
                t.reduceRight(
                  (t, n, i) => (e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n))),
                  i
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? U(e, s) : N(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw Error('Field.fromBytes: expected ' + s + ' bytes, got ' + e.length);
            return r ? L(e) : B(I(e));
          },
        });
        return Object.freeze(a);
      }
      let eo = BigInt(0),
        es = BigInt(1);
      function ea(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function eu(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function el(e, t) {
        return eu(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      let ec = new WeakMap(),
        ef = new WeakMap();
      function eh(e) {
        return ef.get(e) || 1;
      }
      let ed = BigInt(0),
        ep = BigInt(1),
        eb = BigInt(2),
        ey = BigInt(8),
        eg = { zip215: !0 };
      BigInt(0), BigInt(1);
      let em = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        ),
        eD = BigInt(
          '19681161376707505956807079304988542015446066515923890162744021073123829784752'
        );
      BigInt(0);
      let ev = BigInt(1),
        ew = BigInt(2);
      BigInt(3);
      let eE = BigInt(5),
        ex = BigInt(8),
        e_ = ei(em, void 0, !0),
        eO = (function (e) {
          var t;
          let r = (function (e) {
              let t =
                (W(
                  e.Fp,
                  er.reduce((e, t) => ((e[t] = 'function'), e), {
                    ORDER: 'bigint',
                    MASK: 'bigint',
                    BYTES: 'isSafeInteger',
                    BITS: 'isSafeInteger',
                  })
                ),
                W(
                  e,
                  { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
                  { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
                ),
                Object.freeze({ ...en(e.n, e.nBitLength), ...e, p: e.Fp.ORDER }));
              return (
                W(
                  e,
                  { hash: 'function', a: 'bigint', d: 'bigint', randomBytes: 'function' },
                  {
                    adjustScalarBytes: 'function',
                    domain: 'function',
                    uvRatio: 'function',
                    mapToCurve: 'function',
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            { Fp: n, n: i, prehash: o, hash: s, randomBytes: a, nByteLength: u, h: l } = r,
            c = eb << (BigInt(8 * u) - ep),
            f = n.create,
            h = ei(r.n, r.nBitLength),
            d =
              r.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: n.sqrt(e * n.inv(t)) };
                } catch {
                  return { isValid: !1, value: ed };
                }
              }),
            p = r.adjustScalarBytes || ((e) => e),
            b =
              r.domain ||
              ((e, t, r) => {
                if ((A('phflag', r), t.length || r))
                  throw Error('Contexts/pre-hash are not supported');
                return e;
              });
          function y(e, t) {
            z('coordinate ' + e, t, ed, c);
          }
          function g(e) {
            if (!(e instanceof v)) throw Error('ExtendedPoint expected');
          }
          let m = J((e, t) => {
              let { ex: r, ey: i, ez: o } = e,
                s = e.is0();
              null == t && (t = s ? ey : n.inv(o));
              let a = f(r * t),
                u = f(i * t),
                l = f(o * t);
              if (s) return { x: ed, y: ep };
              if (l !== ep) throw Error('invZ was invalid');
              return { x: a, y: u };
            }),
            D = J((e) => {
              let { a: t, d: n } = r;
              if (e.is0()) throw Error('bad point: ZERO');
              let { ex: i, ey: o, ez: s, et: a } = e,
                u = f(i * i),
                l = f(o * o),
                c = f(s * s),
                h = f(c * c),
                d = f(u * t);
              if (f(c * f(d + l)) !== f(h + f(n * f(u * l))))
                throw Error('bad point: equation left != right (1)');
              if (f(i * o) !== f(s * a)) throw Error('bad point: equation left != right (2)');
              return !0;
            });
          class v {
            constructor(e, t, r, n) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = r),
                (this.et = n),
                y('x', e),
                y('y', t),
                y('z', r),
                y('t', n),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof v) throw Error('extended point not allowed');
              let { x: t, y: r } = e || {};
              return y('x', t), y('y', r), new v(t, r, ep, f(t * r));
            }
            static normalizeZ(e) {
              let t = n.invertBatch(e.map((e) => e.ez));
              return e.map((e, r) => e.toAffine(t[r])).map(v.fromAffine);
            }
            static msm(e, t) {
              return (function (e, t, r, n) {
                if (
                  ((function (e, t) {
                    if (!Array.isArray(e)) throw Error('array expected');
                    e.forEach((e, r) => {
                      if (!(e instanceof t)) throw Error('invalid point at index ' + r);
                    });
                  })(r, e),
                  (function (e, t) {
                    if (!Array.isArray(e)) throw Error('array of scalars expected');
                    e.forEach((e, r) => {
                      if (!t.isValid(e)) throw Error('invalid scalar at index ' + r);
                    });
                  })(n, t),
                  r.length !== n.length)
                )
                  throw Error('arrays of points and scalars must have equal length');
                let i = e.ZERO,
                  o = (function (e) {
                    let t;
                    for (t = 0; e > E; e >>= x, t += 1);
                    return t;
                  })(BigInt(r.length)),
                  s = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1,
                  a = (1 << s) - 1,
                  u = Array(a + 1).fill(i),
                  l = Math.floor((t.BITS - 1) / s) * s,
                  c = i;
                for (let e = l; e >= 0; e -= s) {
                  u.fill(i);
                  for (let t = 0; t < n.length; t++) {
                    let i = Number((n[t] >> BigInt(e)) & BigInt(a));
                    u[i] = u[i].add(r[t]);
                  }
                  let t = i;
                  for (let e = u.length - 1, r = i; e > 0; e--) (r = r.add(u[e])), (t = t.add(r));
                  if (((c = c.add(t)), 0 !== e)) for (let e = 0; e < s; e++) c = c.double();
                }
                return c;
              })(v, h, e, t);
            }
            _setWindowSize(e) {
              O.setWindowSize(this, e);
            }
            assertValidity() {
              D(this);
            }
            equals(e) {
              g(e);
              let { ex: t, ey: r, ez: n } = this,
                { ex: i, ey: o, ez: s } = e,
                a = f(t * s),
                u = f(i * n),
                l = f(r * s),
                c = f(o * n);
              return a === u && l === c;
            }
            is0() {
              return this.equals(v.ZERO);
            }
            negate() {
              return new v(f(-this.ex), this.ey, this.ez, f(-this.et));
            }
            double() {
              let { a: e } = r,
                { ex: t, ey: n, ez: i } = this,
                o = f(t * t),
                s = f(n * n),
                a = f(eb * f(i * i)),
                u = f(e * o),
                l = t + n,
                c = f(f(l * l) - o - s),
                h = u + s,
                d = h - a,
                p = u - s,
                b = f(c * d),
                y = f(h * p),
                g = f(c * p);
              return new v(b, y, f(d * h), g);
            }
            add(e) {
              g(e);
              let { a: t, d: n } = r,
                { ex: i, ey: o, ez: s, et: a } = this,
                { ex: u, ey: l, ez: c, et: h } = e;
              if (t === BigInt(-1)) {
                let e = f((o - i) * (l + u)),
                  t = f((o + i) * (l - u)),
                  r = f(t - e);
                if (r === ed) return this.double();
                let n = f(s * eb * h),
                  d = f(a * eb * c),
                  p = d + n,
                  b = t + e,
                  y = d - n,
                  g = f(p * r),
                  m = f(b * y),
                  D = f(p * y);
                return new v(g, m, f(r * b), D);
              }
              let d = f(i * u),
                p = f(o * l),
                b = f(a * n * h),
                y = f(s * c),
                m = f((i + o) * (u + l) - d - p),
                D = y - b,
                w = y + b,
                E = f(p - t * d),
                x = f(m * D),
                _ = f(w * E),
                O = f(m * E);
              return new v(x, _, f(D * w), O);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return O.wNAFCached(this, e, v.normalizeZ);
            }
            multiply(e) {
              z('scalar', e, ep, i);
              let { p: t, f: r } = this.wNAF(e);
              return v.normalizeZ([t, r])[0];
            }
            multiplyUnsafe(e, t = v.ZERO) {
              return (
                z('scalar', e, ed, i),
                e === ed
                  ? _
                  : this.is0() || e === ep
                    ? this
                    : O.wNAFCachedUnsafe(this, e, v.normalizeZ, t)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return O.unsafeLadder(this, i).is0();
            }
            toAffine(e) {
              return m(this, e);
            }
            clearCofactor() {
              let { h: e } = r;
              return e === ep ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, t = !1) {
              let { d: i, a: o } = r,
                s = n.BYTES;
              (e = j('pointHex', e, s)), A('zip215', t);
              let a = e.slice(),
                u = e[s - 1];
              a[s - 1] = -129 & u;
              let l = L(a);
              z('pointHex.y', l, ed, t ? c : n.ORDER);
              let h = f(l * l),
                { isValid: p, value: b } = d(f(h - ep), f(i * h - o));
              if (!p) throw Error('Point.fromHex: invalid y coordinate');
              let y = (b & ep) === ep,
                g = (128 & u) != 0;
              if (!t && b === ed && g) throw Error('Point.fromHex: x=0 and x_0=1');
              return g !== y && (b = f(-b)), v.fromAffine({ x: b, y: l });
            }
            static fromPrivateKey(e) {
              return S(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                r = U(t, n.BYTES);
              return (r[r.length - 1] |= e & ep ? 128 : 0), r;
            }
            toHex() {
              return I(this.toRawBytes());
            }
          }
          (v.BASE = new v(r.Gx, r.Gy, ep, f(r.Gx * r.Gy))), (v.ZERO = new v(ed, ep, ep, ed));
          let { BASE: w, ZERO: _ } = v,
            O =
              ((t = 8 * u),
              {
                constTimeNegate: ea,
                hasPrecomputes: (e) => 1 !== eh(e),
                unsafeLadder(e, t, r = v.ZERO) {
                  let n = e;
                  for (; t > eo; ) t & es && (r = r.add(n)), (n = n.double()), (t >>= es);
                  return r;
                },
                precomputeWindow(e, r) {
                  let { windows: n, windowSize: i } = el(r, t),
                    o = [],
                    s = e,
                    a = s;
                  for (let e = 0; e < n; e++) {
                    (a = s), o.push(a);
                    for (let e = 1; e < i; e++) (a = a.add(s)), o.push(a);
                    s = a.double();
                  }
                  return o;
                },
                wNAF(e, r, n) {
                  let { windows: i, windowSize: o } = el(e, t),
                    s = v.ZERO,
                    a = v.BASE,
                    u = BigInt(2 ** e - 1),
                    l = 2 ** e,
                    c = BigInt(e);
                  for (let e = 0; e < i; e++) {
                    let t = e * o,
                      i = Number(n & u);
                    (n >>= c), i > o && ((i -= l), (n += es));
                    let f = t + Math.abs(i) - 1,
                      h = e % 2 != 0,
                      d = i < 0;
                    0 === i ? (a = a.add(ea(h, r[t]))) : (s = s.add(ea(d, r[f])));
                  }
                  return { p: s, f: a };
                },
                wNAFUnsafe(e, r, n, i = v.ZERO) {
                  let { windows: o, windowSize: s } = el(e, t),
                    a = BigInt(2 ** e - 1),
                    u = 2 ** e,
                    l = BigInt(e);
                  for (let e = 0; e < o; e++) {
                    let t = e * s;
                    if (n === eo) break;
                    let o = Number(n & a);
                    if (((n >>= l), o > s && ((o -= u), (n += es)), 0 === o)) continue;
                    let c = r[t + Math.abs(o) - 1];
                    o < 0 && (c = c.negate()), (i = i.add(c));
                  }
                  return i;
                },
                getPrecomputes(e, t, r) {
                  let n = ec.get(t);
                  return n || ((n = this.precomputeWindow(t, e)), 1 !== e && ec.set(t, r(n))), n;
                },
                wNAFCached(e, t, r) {
                  let n = eh(e);
                  return this.wNAF(n, this.getPrecomputes(n, e, r), t);
                },
                wNAFCachedUnsafe(e, t, r, n) {
                  let i = eh(e);
                  return 1 === i
                    ? this.unsafeLadder(e, t, n)
                    : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n);
                },
                setWindowSize(e, r) {
                  eu(r, t), ef.set(e, r), ec.delete(e);
                },
              });
          function S(e) {
            let t = n.BYTES;
            e = j('private key', e, t);
            let r = j('hashed private key', s(e), 2 * t),
              o = p(r.slice(0, t)),
              a = r.slice(t, 2 * t),
              u = X(L(o), i),
              l = w.multiply(u),
              c = l.toRawBytes();
            return { head: o, prefix: a, scalar: u, point: l, pointBytes: c };
          }
          function C(e = new Uint8Array(), ...t) {
            return X(L(s(b(F(...t), j('context', e), !!o))), i);
          }
          return (
            w._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (e) {
                return S(e).pointBytes;
              },
              sign: function (e, t, r = {}) {
                (e = j('message', e)), o && (e = o(e));
                let { prefix: s, scalar: a, pointBytes: u } = S(t),
                  l = C(r.context, s, e),
                  c = w.multiply(l).toRawBytes(),
                  f = X(l + C(r.context, c, u, e) * a, i);
                return z('signature.s', f, ed, i), j('result', F(c, U(f, n.BYTES)), 2 * n.BYTES);
              },
              verify: function (e, t, r, i = eg) {
                let s, a, u;
                let { context: l, zip215: c } = i,
                  f = n.BYTES;
                (e = j('signature', e, 2 * f)),
                  (t = j('message', t)),
                  (r = j('publicKey', r, f)),
                  void 0 !== c && A('zip215', c),
                  o && (t = o(t));
                let h = L(e.slice(f, 2 * f));
                try {
                  (s = v.fromHex(r, c)),
                    (a = v.fromHex(e.slice(0, f), c)),
                    (u = w.multiplyUnsafe(h));
                } catch {
                  return !1;
                }
                if (!c && s.isSmallOrder()) return !1;
                let d = C(l, a.toRawBytes(), s.toRawBytes(), t);
                return a.add(s.multiplyUnsafe(d)).subtract(u).clearCofactor().equals(v.ZERO);
              },
              ExtendedPoint: v,
              utils: {
                getExtendedPublicKey: S,
                randomPrivateKey: () => a(n.BYTES),
                precompute: (e = 8, t = v.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            '37095705934669439343138083508754565189542113879843219016388785533085940283555'
          ),
          Fp: e_,
          n: BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989'),
          h: ex,
          Gx: BigInt(
            '15112221349535400772501151409588531511454012693041857206046113283949847762202'
          ),
          Gy: BigInt(
            '46316835694926478169428394003475163141307993866256225615783033603165251855960'
          ),
          hash: w,
          randomBytes: f,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let r = X(t * t * t, em),
              n = (function (e) {
                let t = BigInt(10),
                  r = BigInt(20),
                  n = BigInt(40),
                  i = BigInt(80),
                  o = (((e * e) % em) * e) % em,
                  s = (Q(o, ew, em) * o) % em,
                  a = (Q(s, ev, em) * e) % em,
                  u = (Q(a, eE, em) * a) % em,
                  l = (Q(u, t, em) * u) % em,
                  c = (Q(l, r, em) * l) % em,
                  f = (Q(c, n, em) * c) % em,
                  h = (Q(f, i, em) * f) % em,
                  d = (Q(h, i, em) * f) % em,
                  p = (Q(d, t, em) * u) % em;
                return { pow_p_5_8: (Q(p, ew, em) * e) % em, b2: o };
              })(e * X(r * r * t, em)).pow_p_5_8,
              i = X(e * r * n, em),
              o = X(t * i * i, em),
              s = i,
              a = X(i * eD, em),
              u = o === e,
              l = o === X(-e, em),
              c = o === X(-e * eD, em);
            return (
              u && (i = s),
              (l || c) && (i = a),
              et(i, em) && (i = X(-i, em)),
              { isValid: u || l, value: i }
            );
          },
        }),
        eS = 'base64url',
        eA = 'utf8',
        eC = 'utf8',
        eI = 'base58btc';
      function eB(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function eR(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? eB(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function eT(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eR(t),
          n = 0;
        for (let t of e) r.set(t, n), (n += t.length);
        return eB(r);
      }
      var eP = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
        for (var i = 0; i < e.length; i++) {
          var o = e.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== r[s]) throw TypeError(o + ' is ambiguous');
          r[s] = i;
        }
        var a = e.length,
          u = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function f(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var n = 0, i = 0; e[t] === u; ) n++, t++;
            for (var o = ((e.length - t) * l + 1) >>> 0, s = new Uint8Array(o); e[t]; ) {
              var c = r[e.charCodeAt(t)];
              if (255 === c) return;
              for (var f = 0, h = o - 1; (0 !== c || f < i) && -1 !== h; h--, f++)
                (c += (a * s[h]) >>> 0), (s[h] = c % 256 >>> 0), (c = (c / 256) >>> 0);
              if (0 !== c) throw Error('Non-zero carry');
              (i = f), t++;
            }
            if (' ' !== e[t]) {
              for (var d = o - i; d !== o && 0 === s[d]; ) d++;
              for (var p = new Uint8Array(n + (o - d)), b = n; d !== o; ) p[b++] = s[d++];
              return p;
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
            for (var r = 0, n = 0, i = 0, o = t.length; i !== o && 0 === t[i]; ) i++, r++;
            for (var s = ((o - i) * c + 1) >>> 0, l = new Uint8Array(s); i !== o; ) {
              for (var f = t[i], h = 0, d = s - 1; (0 !== f || h < n) && -1 !== d; d--, h++)
                (f += (256 * l[d]) >>> 0), (l[d] = f % a >>> 0), (f = (f / a) >>> 0);
              if (0 !== f) throw Error('Non-zero carry');
              (n = h), i++;
            }
            for (var p = s - n; p !== s && 0 === l[p]; ) p++;
            for (var b = u.repeat(r); p < s; ++p) b += e.charAt(l[p]);
            return b;
          },
          decodeUnsafe: f,
          decode: function (e) {
            var r = f(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let eL = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        eN = (e) => new TextEncoder().encode(e),
        eU = (e) => new TextDecoder().decode(e);
      class ej {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class eF {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
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
          return ez(this, e);
        }
      }
      class ek {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return ez(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let ez = (e, t) =>
        new ek({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class eM {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new ej(e, t, r)),
            (this.decoder = new eF(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let eH = ({ name: e, prefix: t, encode: r, decode: n }) => new eM(e, t, r, n),
        eW = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: n, decode: i } = eP(r, t);
          return eH({ prefix: e, name: t, encode: n, decode: (e) => eL(i(e)) });
        },
        eJ = (e, t, r, n) => {
          let i = {};
          for (let e = 0; e < t.length; ++e) i[t[e]] = e;
          let o = e.length;
          for (; '=' === e[o - 1]; ) --o;
          let s = new Uint8Array(((o * r) / 8) | 0),
            a = 0,
            u = 0,
            l = 0;
          for (let t = 0; t < o; ++t) {
            let o = i[e[t]];
            if (void 0 === o) throw SyntaxError(`Non-${n} character`);
            (u = (u << r) | o), (a += r) >= 8 && ((a -= 8), (s[l++] = 255 & (u >> a)));
          }
          if (a >= r || 255 & (u << (8 - a))) throw SyntaxError('Unexpected end of data');
          return s;
        },
        eq = (e, t, r) => {
          let n = '=' === t[t.length - 1],
            i = (1 << r) - 1,
            o = '',
            s = 0,
            a = 0;
          for (let n = 0; n < e.length; ++n)
            for (a = (a << 8) | e[n], s += 8; s > r; ) (s -= r), (o += t[i & (a >> s)]);
          if ((s && (o += t[i & (a << (r - s))]), n)) for (; (o.length * r) & 7; ) o += '=';
          return o;
        },
        eV = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
          eH({ prefix: t, name: e, encode: (e) => eq(e, n, r), decode: (t) => eJ(t, n, r, e) });
      var eK = Object.freeze({
          __proto__: null,
          identity: eH({
            prefix: '\0',
            name: 'identity',
            encode: (e) => eU(e),
            decode: (e) => eN(e),
          }),
        }),
        e$ = Object.freeze({
          __proto__: null,
          base2: eV({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        eY = Object.freeze({
          __proto__: null,
          base8: eV({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        eG = Object.freeze({
          __proto__: null,
          base10: eW({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        eZ = Object.freeze({
          __proto__: null,
          base16: eV({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: eV({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let eX = eV({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        eQ = eV({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        e0 = eV({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        e1 = eV({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        e8 = eV({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        e3 = eV({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        e2 = eV({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var e5 = Object.freeze({
          __proto__: null,
          base32: eX,
          base32upper: eQ,
          base32pad: e0,
          base32padupper: e1,
          base32hex: e8,
          base32hexupper: e3,
          base32hexpad: e2,
          base32hexpadupper: eV({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: eV({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        e6 = Object.freeze({
          __proto__: null,
          base36: eW({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: eW({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        e4 = Object.freeze({
          __proto__: null,
          base58btc: eW({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: eW({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let e9 = eV({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        e7 = eV({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var te = Object.freeze({
        __proto__: null,
        base64: e9,
        base64pad: e7,
        base64url: eV({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: eV({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let tt = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        tr = tt.reduce((e, t, r) => ((e[r] = t), e), []),
        tn = tt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var ti = Object.freeze({
        __proto__: null,
        base256emoji: eH({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += tr[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = tn[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function to(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var n = r; e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (to.bytes = r - n + 1), t;
      }
      function ts(e, t) {
        var r,
          n = 0,
          t = t || 0,
          i = 0,
          o = t,
          s = e.length;
        do {
          if (o >= s) throw ((ts.bytes = 0), RangeError('Could not decode varint'));
          (r = e[o++]), (n += i < 28 ? (127 & r) << i : (127 & r) * Math.pow(2, i)), (i += 7);
        } while (r >= 128);
        return (ts.bytes = o - t), n;
      }
      var ta = {
        encode: to,
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
      let tu = (e, t, r = 0) => (ta.encode(e, t, r), t),
        tl = (e) => ta.encodingLength(e),
        tc = (e, t) => {
          let r = t.byteLength,
            n = tl(e),
            i = n + tl(r),
            o = new Uint8Array(i + r);
          return tu(e, o, 0), tu(r, o, n), o.set(t, i), new tf(e, r, t, o);
        };
      class tf {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      let th = ({ name: e, code: t, encode: r }) => new td(e, t, r);
      class td {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? tc(this.code, t) : t.then((e) => tc(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let tp = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var tb = Object.freeze({
          __proto__: null,
          sha256: th({ name: 'sha2-256', code: 18, encode: tp('SHA-256') }),
          sha512: th({ name: 'sha2-512', code: 19, encode: tp('SHA-512') }),
        }),
        ty = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: eL, digest: (e) => tc(0, eL(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let tg = { ...eK, ...e$, ...eY, ...eG, ...eZ, ...e5, ...e6, ...e4, ...te, ...ti };
      function tm(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      ({ ...tb, ...ty });
      let tD = tm(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tv = tm(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = eR((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        tw = { utf8: tD, 'utf-8': tD, hex: tg.base16, latin1: tv, ascii: tv, binary: tv, ...tg };
      function tE(e, t = 'utf8') {
        let r = tw[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : r.encoder.encode(e).substring(1);
      }
      function tx(e, t = 'utf8') {
        let r = tw[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? eB(globalThis.Buffer.from(e, 'utf-8'))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function t_(e) {
        return (0, i.j)(tE(tx(e, eS), eA));
      }
      function tO(e) {
        return tE(tx((0, i.h)(e), eA), eS);
      }
      function tS(e) {
        return ['did', 'key', 'z' + tE(eT([tx('K36', eI), e]), eI)].join(':');
      }
      function tA(e) {
        let t = e.split('.'),
          r = t_(t[0]),
          n = t_(t[1]);
        return {
          header: r,
          payload: n,
          signature: tx(t[2], eS),
          data: tx(t.slice(0, 2).join('.'), eC),
        };
      }
      function tC(e = f(32)) {
        let t = eO.getPublicKey(e);
        return { secretKey: eT([e, t]), publicKey: t };
      }
      async function tI(e, t, r, i, o = (0, n.fromMiliseconds)(Date.now())) {
        var s, a;
        let u = { alg: 'EdDSA', typ: 'JWT' },
          l = { iss: tS(i.publicKey), sub: e, aud: t, iat: o, exp: o + r },
          c = tx([tO((s = { header: u, payload: l }).header), tO(s.payload)].join('.'), eC);
        return [
          tO(
            (a = { header: u, payload: l, signature: eO.sign(c, i.secretKey.slice(0, 32)) }).header
          ),
          tO(a.payload),
          tE(a.signature, eS),
        ].join('.');
      }
    },
    79647: (e) => {
      'use strict';
      e.exports = function () {
        throw Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        );
      };
    },
    82914: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let n = r(24584);
      n.__exportStar(r(98358), t), n.__exportStar(r(88707), t);
    },
    88707: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    89720: (e, t, r) => {
      'use strict';
      function n(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, 'gi'));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function i(e) {
        return n(e, '^https?:');
      }
      function o(e) {
        return n(e, '^wss?:');
      }
      function s(e) {
        return RegExp('wss?://localhost(:d{2,5})?').test(e);
      }
      r.d(t, { A1: () => o, q$: () => i, z: () => s });
    },
    90252: (e, t, r) => {
      'use strict';
      function n(e, t, r) {
        var n, i;
        let o;
        return (
          (r.length
            ? ((n = t.length), Array.isArray(e) ? e.length >= n : Object.keys(e).length >= n)
            : ((i = t.length), Array.isArray(e) ? e.length === i : Object.keys(e).length === i)) &&
          ((o = !0),
          t.forEach((t) => {
            t in e || (o = !1);
          }),
          o)
        );
      }
      function i(e, t, r = '_') {
        let n = e.split(r);
        return n[n.length - 1].trim().toLowerCase() === t.trim().toLowerCase();
      }
      r.d(t, { CG: () => o });
      let o = {
        waku: {
          publish: 'waku_publish',
          batchPublish: 'waku_batchPublish',
          subscribe: 'waku_subscribe',
          batchSubscribe: 'waku_batchSubscribe',
          subscription: 'waku_subscription',
          unsubscribe: 'waku_unsubscribe',
          batchUnsubscribe: 'waku_batchUnsubscribe',
          batchFetchMessages: 'waku_batchFetchMessages',
        },
        irn: {
          publish: 'irn_publish',
          batchPublish: 'irn_batchPublish',
          subscribe: 'irn_subscribe',
          batchSubscribe: 'irn_batchSubscribe',
          subscription: 'irn_subscription',
          unsubscribe: 'irn_unsubscribe',
          batchUnsubscribe: 'irn_batchUnsubscribe',
          batchFetchMessages: 'irn_batchFetchMessages',
        },
        iridium: {
          publish: 'iridium_publish',
          batchPublish: 'iridium_batchPublish',
          subscribe: 'iridium_subscribe',
          batchSubscribe: 'iridium_batchSubscribe',
          subscription: 'iridium_subscription',
          unsubscribe: 'iridium_unsubscribe',
          batchUnsubscribe: 'iridium_batchUnsubscribe',
          batchFetchMessages: 'iridium_batchFetchMessages',
        },
      };
    },
    95572: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let n = r(24584);
      n.__exportStar(r(32214), t),
        n.__exportStar(r(45103), t),
        n.__exportStar(r(73642), t),
        n.__exportStar(r(82914), t);
    },
    98358: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
  },
]);
