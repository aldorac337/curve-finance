(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7701],
  {
    17709: (e, t, n) => {
      'use strict';
      n.d(t, { b: () => s });
      var s = n(92994);
    },
    21336: (e, t, n) => {
      var s = n(50887).Buffer;
      let { keccak_256: i } = n(55715);
      function r(e) {
        return s.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = '0' + n);
        let i = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return s.from(i);
      }
      function o(e, t, n) {
        let s = r(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(s), s)
            : e.slice(0, t)
          : e.length < t
            ? (e.copy(s, t - e.length), s)
            : e.slice(-t);
      }
      function c(e) {
        if (!s.isBuffer(e)) {
          if (Array.isArray(e)) e = s.from(e);
          else if ('string' == typeof e) {
            var t;
            e = l(e) ? s.from((t = d(e)).length % 2 ? '0' + t : t, 'hex') : s.from(e);
          } else if ('number' == typeof e) e = intToBuffer(e);
          else if (null == e) e = s.allocUnsafe(0);
          else if ('bigint' == typeof e) e = a(e);
          else if (e.toArray) e = s.from(e.toArray());
          else throw Error('invalid type');
        }
        return e;
      }
      function l(e) {
        return 'string' == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return 'string' == typeof e && e.startsWith('0x') ? e.slice(2) : e;
      }
      e.exports = {
        zeros: r,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return '0x' + (e = c(e)).toString('hex');
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t)) throw Error('unsupported');
          return s.from(i(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          let n;
          return (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    56321: (e, t, n) => {
      var s = n(50887).Buffer;
      let i = n(21336);
      function r(e) {
        if (e.startsWith('int[')) return 'int256' + e.slice(3);
        if ('int' === e) return 'int256';
        if (e.startsWith('uint[')) return 'uint256' + e.slice(4);
        if ('uint' === e) return 'uint256';
        if (e.startsWith('fixed[')) return 'fixed128x128' + e.slice(5);
        else if ('fixed' === e) return 'fixed128x128';
        else if (e.startsWith('ufixed[')) return 'ufixed128x128' + e.slice(6);
        else if ('ufixed' === e) return 'ufixed128x128';
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ('' === t[2] ? 'dynamic' : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ('string' === t || 'number' === t) return BigInt(e);
        if ('bigint' === t) return e;
        throw Error('Argument is not a number');
      }
      function d(e, t) {
        if ('address' === e) return d('uint160', l(t));
        if ('bool' === e) return d('uint8', +!!t);
        if ('string' === e) return d('bytes', new s(t, 'utf8'));
        if ((p = e).lastIndexOf(']') === p.length - 1) {
          if (void 0 === t.length) throw Error('Not an array?');
          if ('dynamic' !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error('Elements exceed array size: ' + n);
          for (h in ((u = []),
          (e = e.slice(0, e.lastIndexOf('['))),
          'string' == typeof t && (t = JSON.parse(t)),
          t))
            u.push(d(e, t[h]));
          if ('dynamic' === n) {
            var n,
              r,
              u,
              h,
              p,
              f = d('uint256', t.length);
            u.unshift(f);
          }
          return s.concat(u);
        } else if ('bytes' === e)
          return (
            (t = new s(t)),
            (u = s.concat([d('uint256', t.length), t])),
            t.length % 32 != 0 && (u = s.concat([u, i.zeros(32 - (t.length % 32))])),
            u
          );
        else if (e.startsWith('bytes')) {
          if ((n = a(e)) < 1 || n > 32) throw Error('Invalid bytes<N> width: ' + n);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith('uint')) {
          if ((n = a(e)) % 8 || n < 8 || n > 256) throw Error('Invalid uint<N> width: ' + n);
          r = l(t);
          let s = i.bitLengthFromBigInt(r);
          if (s > n) throw Error('Supplied uint exceeds width: ' + n + ' vs ' + s);
          if (r < 0) throw Error('Supplied uint is negative');
          return i.bufferBEFromBigInt(r, 32);
        } else if (e.startsWith('int')) {
          if ((n = a(e)) % 8 || n < 8 || n > 256) throw Error('Invalid int<N> width: ' + n);
          r = l(t);
          let s = i.bitLengthFromBigInt(r);
          if (s > n) throw Error('Supplied int exceeds width: ' + n + ' vs ' + s);
          let o = i.twosFromBigInt(r, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith('ufixed')) {
          if (((n = o(e)), (r = l(t)) < 0)) throw Error('Supplied ufixed is negative');
          return d('uint256', r * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith('fixed'))
          return (n = o(e)), d('int256', l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error('Unsupported or invalid type: ' + e);
      }
      function u(e, t) {
        if (e.length !== t.length) throw Error('Number of types are not matching the values');
        for (var n, o, c = [], d = 0; d < e.length; d++) {
          var u = r(e[d]),
            h = t[d];
          if ('bytes' === u) c.push(h);
          else if ('string' === u) c.push(new s(h, 'utf8'));
          else if ('bool' === u) c.push(new s(h ? '01' : '00', 'hex'));
          else if ('address' === u) c.push(i.setLength(h, 20));
          else if (u.startsWith('bytes')) {
            if ((n = a(u)) < 1 || n > 32) throw Error('Invalid bytes<N> width: ' + n);
            c.push(i.setLengthRight(h, n));
          } else if (u.startsWith('uint')) {
            if ((n = a(u)) % 8 || n < 8 || n > 256) throw Error('Invalid uint<N> width: ' + n);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > n) throw Error('Supplied uint exceeds width: ' + n + ' vs ' + e);
            c.push(i.bufferBEFromBigInt(o, n / 8));
          } else if (u.startsWith('int')) {
            if ((n = a(u)) % 8 || n < 8 || n > 256) throw Error('Invalid int<N> width: ' + n);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > n) throw Error('Supplied int exceeds width: ' + n + ' vs ' + e);
            let t = i.twosFromBigInt(o, n);
            c.push(i.bufferBEFromBigInt(t, n / 8));
          } else throw Error('Unsupported or invalid type: ' + u);
        }
        return s.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = r(e[o]),
              u = d(l, t[o]);
            'string' === l || 'bytes' === l || 'dynamic' === c(l)
              ? (n.push(d('uint256', a)), i.push(u), (a += u.length))
              : n.push(u);
          }
          return s.concat(n.concat(i));
        },
        solidityPack: u,
        soliditySHA3: function (e, t) {
          return i.keccak(u(e, t));
        },
      };
    },
    57701: (e, t, n) => {
      'use strict';
      n.d(t, { createCoinbaseWalletSDK: () => tK });
      class s {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(''),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let s = localStorage.key(n);
            'string' == typeof s && s.startsWith(e) && t.push(s);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ''}:${e}`;
        }
        static clearAll() {
          new s('CBWSDK').clear(), new s('walletlink').clear();
        }
      }
      let i = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        r = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.',
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.',
          },
          '-32602': { standard: 'JSON RPC 2.0', message: 'Invalid method parameter(s).' },
          '-32603': { standard: 'JSON RPC 2.0', message: 'Internal JSON-RPC error.' },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': { standard: 'EIP-1474', message: 'Request limit exceeded.' },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message: 'The requested account and/or method has not been authorized by the user.',
          },
          4200: {
            standard: 'EIP-1193',
            message: 'The requested method is not supported by this Ethereum provider.',
          },
          4900: { standard: 'EIP-1193', message: 'The provider is disconnected from all chains.' },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.',
          },
          4902: { standard: 'EIP-3085', message: 'Unrecognized chain ID.' },
        },
        a = 'Unspecified error message.';
      function o(e, t = a) {
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (l(r, t)) return r[t].message;
          if ((n = e) >= -32099 && n <= -32e3) return 'Unspecified server error.';
        }
        return t;
      }
      function c(e) {
        return e && 'object' == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e;
      }
      function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function d(e, t) {
        return 'object' == typeof e && null !== e && t in e && 'string' == typeof e[t];
      }
      let u = {
        rpc: {
          parse: (e) => h(i.rpc.parse, e),
          invalidRequest: (e) => h(i.rpc.invalidRequest, e),
          invalidParams: (e) => h(i.rpc.invalidParams, e),
          methodNotFound: (e) => h(i.rpc.methodNotFound, e),
          internal: (e) => h(i.rpc.internal, e),
          server: (e) => {
            if (!e || 'object' != typeof e || Array.isArray(e))
              throw Error('Ethereum RPC Server errors must provide single object argument.');
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return h(t, e);
          },
          invalidInput: (e) => h(i.rpc.invalidInput, e),
          resourceNotFound: (e) => h(i.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => h(i.rpc.resourceUnavailable, e),
          transactionRejected: (e) => h(i.rpc.transactionRejected, e),
          methodNotSupported: (e) => h(i.rpc.methodNotSupported, e),
          limitExceeded: (e) => h(i.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => p(i.provider.userRejectedRequest, e),
          unauthorized: (e) => p(i.provider.unauthorized, e),
          unsupportedMethod: (e) => p(i.provider.unsupportedMethod, e),
          disconnected: (e) => p(i.provider.disconnected, e),
          chainDisconnected: (e) => p(i.provider.chainDisconnected, e),
          unsupportedChain: (e) => p(i.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || 'object' != typeof e || Array.isArray(e))
              throw Error('Ethereum Provider custom errors must provide single object argument.');
            let { code: t, message: n, data: s } = e;
            if (!n || 'string' != typeof n) throw Error('"message" must be a nonempty string');
            return new m(t, n, s);
          },
        },
      };
      function h(e, t) {
        let [n, s] = f(t);
        return new g(e, n || o(e), s);
      }
      function p(e, t) {
        let [n, s] = f(t);
        return new m(e, n || o(e), s);
      }
      function f(e) {
        if (e) {
          if ('string' == typeof e) return [e];
          if ('object' == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && 'string' != typeof t) throw Error('Must specify string message.');
            return [t || void 0, n];
          }
        }
        return [];
      }
      class g extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || 'string' != typeof t) throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class m extends g {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
          super(e, t, n);
        }
      }
      let _ = (e) => e,
        b = (e) => e,
        y = (e) => e;
      function w(e) {
        return Math.floor(e);
      }
      var v = n(50887).Buffer;
      let k = /^[0-9]*$/,
        x = /^[a-f0-9]*$/;
      function I(e) {
        return E(crypto.getRandomValues(new Uint8Array(e)));
      }
      function E(e) {
        return [...e].map((e) => e.toString(16).padStart(2, '0')).join('');
      }
      function C(e) {
        return new Uint8Array(e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16)));
      }
      function S(e, t = !1) {
        let n = e.toString('hex');
        return _(t ? `0x${n}` : n);
      }
      function M(e) {
        return S(j(e), !0);
      }
      function A(e) {
        return y(e.toString(10));
      }
      function P(e) {
        return _(`0x${BigInt(e).toString(16)}`);
      }
      function L(e) {
        return e.startsWith('0x') || e.startsWith('0X');
      }
      function N(e) {
        return L(e) ? e.slice(2) : e;
      }
      function D(e) {
        return L(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function R(e) {
        if ('string' != typeof e) return !1;
        let t = N(e).toLowerCase();
        return x.test(t);
      }
      function T(e, t = !1) {
        let n = (function (e, t = !1) {
          if ('string' == typeof e) {
            let n = N(e).toLowerCase();
            if (x.test(n)) return _(t ? `0x${n}` : n);
          }
          throw u.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
        })(e, !1);
        return n.length % 2 == 1 && (n = _(`0${n}`)), t ? _(`0x${n}`) : n;
      }
      function O(e) {
        if ('string' == typeof e) {
          let t = N(e).toLowerCase();
          if (R(t) && 40 === t.length) return b(D(t));
        }
        throw u.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function j(e) {
        if (v.isBuffer(e)) return e;
        if ('string' == typeof e) {
          if (R(e)) {
            let t = T(e, !1);
            return v.from(t, 'hex');
          }
          return v.from(e, 'utf8');
        }
        throw u.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function U(e) {
        if ('number' == typeof e && Number.isInteger(e)) return w(e);
        if ('string' == typeof e) {
          if (k.test(e)) return w(Number(e));
          if (R(e)) return w(Number(BigInt(T(e, !0))));
        }
        throw u.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function W(e) {
        if (
          null !== e &&
          ('bigint' == typeof e ||
            (function (e) {
              if (null == e || 'function' != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return 'function' == typeof t.config && 'number' == typeof t.EUCLID;
            })(e))
        )
          return BigInt(e.toString(10));
        if ('number' == typeof e) return BigInt(U(e));
        if ('string' == typeof e) {
          if (k.test(e)) return BigInt(e);
          if (R(e)) return BigInt(T(e, !0));
        }
        throw u.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function q() {
        return crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, !0, ['deriveKey']);
      }
      async function z(e, t) {
        return crypto.subtle.deriveKey(
          { name: 'ECDH', public: t },
          e,
          { name: 'AES-GCM', length: 256 },
          !1,
          ['encrypt', 'decrypt']
        );
      }
      async function K(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          s = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: s };
      }
      async function F(e, { iv: t, cipherText: n }) {
        let s = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: t }, e, n);
        return new TextDecoder().decode(s);
      }
      function B(e) {
        switch (e) {
          case 'public':
            return 'spki';
          case 'private':
            return 'pkcs8';
        }
      }
      async function H(e, t) {
        let n = B(e);
        return E(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function G(e, t) {
        let n = B(e),
          s = C(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(s),
          { name: 'ECDH', namedCurve: 'P-256' },
          !0,
          'private' === e ? ['deriveKey'] : []
        );
      }
      async function $(e, t) {
        return K(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                  message: t.message,
                })
              : t
          )
        );
      }
      async function J(e, t) {
        return JSON.parse(await F(t, e));
      }
      let Y = { storageKey: 'ownPrivateKey', keyType: 'private' },
        Q = { storageKey: 'ownPublicKey', keyType: 'public' },
        Z = { storageKey: 'peerPublicKey', keyType: 'public' };
      class V {
        constructor() {
          (this.storage = new s('CBWSDK', 'SCWKeyManager')),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(Z, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(Q.storageKey),
            this.storage.removeItem(Y.storageKey),
            this.storage.removeItem(Z.storageKey);
        }
        async generateKeyPair() {
          let e = await q();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Y, e.privateKey),
            await this.storeKey(Q, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey && (this.ownPrivateKey = await this.loadKey(Y)),
            null === this.ownPublicKey && (this.ownPublicKey = await this.loadKey(Q)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey && (this.peerPublicKey = await this.loadKey(Z)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await z(this.ownPrivateKey, this.peerPublicKey));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? G(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await H(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let X = '4.3.0',
        ee = '@coinbase/wallet-sdk';
      async function et(e, t) {
        let n = Object.assign(Object.assign({}, e), { jsonrpc: '2.0', id: crypto.randomUUID() }),
          s = await window.fetch(t, {
            method: 'POST',
            body: JSON.stringify(n),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'X-Cbw-Sdk-Version': X,
              'X-Cbw-Sdk-Platform': ee,
            },
          }),
          { result: i, error: r } = await s.json();
        if (r) throw r;
        return i;
      }
      let en = 'accounts',
        es = 'activeChain',
        ei = 'availableChains',
        er = 'walletCapabilities';
      class ea {
        constructor(e) {
          var t, n, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new V()),
            (this.storage = new s('CBWSDK', 'SCWStateManager')),
            (this.accounts = null !== (t = this.storage.loadObject(en)) && void 0 !== t ? t : []),
            (this.chain = this.storage.loadObject(es) || {
              id:
                null !==
                  (i = null === (n = e.metadata.appChainIds) || void 0 === n ? void 0 : n[0]) &&
                void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage = this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, s, i;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n
            ? void 0
            : n.call(t));
          let r = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (s = e.params) && void 0 !== s ? s : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(r);
          if ('failure' in a.content) throw a.content.failure;
          let o = await G('public', a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ('error' in c) throw c.error;
          if ('eth_requestAccounts' === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(en, e),
              null === (i = this.callback) || void 0 === i || i.call(this, 'accountsChanged', e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) {
            if ('wallet_sendCalls' === e.method) return this.sendRequestToPopup(e);
            throw u.provider.unauthorized();
          }
          switch (e.method) {
            case 'eth_requestAccounts':
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, 'connect', { chainId: P(this.chain.id) }),
                this.accounts
              );
            case 'eth_accounts':
              return this.accounts;
            case 'eth_coinbase':
              return this.accounts[0];
            case 'net_version':
              return this.chain.id;
            case 'eth_chainId':
              return P(this.chain.id);
            case 'wallet_getCapabilities':
              return this.storage.loadObject(er);
            case 'wallet_switchEthereumChain':
              return this.handleSwitchChainRequest(e);
            case 'eth_ecRecover':
            case 'personal_sign':
            case 'wallet_sign':
            case 'personal_ecRecover':
            case 'eth_signTransaction':
            case 'eth_sendTransaction':
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
            case 'wallet_addEthereumChain':
            case 'wallet_watchAsset':
            case 'wallet_sendCalls':
            case 'wallet_showCallsStatus':
            case 'wallet_grantPermissions':
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl) throw u.rpc.internal('No RPC URL set for chain');
              return et(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n
            ? void 0
            : n.call(t));
          let s = await this.sendEncryptedRequest(e),
            i = (await this.decryptResponseMessage(s)).result;
          if ('error' in i) throw i.error;
          return i.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t = null === (e = this.metadata.appChainIds) || void 0 === e ? void 0 : e[0]) &&
                void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw u.rpc.invalidParams();
          let s = U(n[0].chainId);
          if (this.updateChain(s)) return null;
          let i = await this.sendRequestToPopup(e);
          return null === i && this.updateChain(s), i;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw u.provider.unauthorized(
              'No valid session found, try requestAccounts before other methods'
            );
          let n = await $({ action: e, chainId: this.chain.id }, t),
            s = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(s);
        }
        async createRequestMessage(e) {
          let t = await H('public', await this.keyManager.getOwnPublicKey());
          return { id: crypto.randomUUID(), sender: t, content: e, timestamp: new Date() };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let s = e.content;
          if ('failure' in s) throw s.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i) throw u.provider.unauthorized('Invalid session');
          let r = await J(s.encrypted, i),
            a = null === (t = r.data) || void 0 === t ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({ id: Number(e), rpcUrl: t }));
            this.storage.storeObject(ei, e), this.updateChain(this.chain.id, e);
          }
          let o = null === (n = r.data) || void 0 === n ? void 0 : n.capabilities;
          return o && this.storage.storeObject(er, o), r;
        }
        updateChain(e, t) {
          var n;
          let s = null != t ? t : this.storage.loadObject(ei),
            i = null == s ? void 0 : s.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              this.storage.storeObject(es, i),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, 'chainChanged', P(i.id))),
            !0)
          );
        }
      }
      var eo = n(69267);
      let ec = 'Addresses';
      function el(e) {
        return void 0 !== e.errorMessage;
      }
      class ed {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error('secret must be 256 bits');
          let n = crypto.getRandomValues(new Uint8Array(12)),
            s = await crypto.subtle.importKey('raw', C(t), { name: 'aes-gcm' }, !1, [
              'encrypt',
              'decrypt',
            ]),
            i = new TextEncoder(),
            r = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv: n }, s, i.encode(e)),
            a = r.slice(r.byteLength - 16),
            o = r.slice(0, r.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return E(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error('secret must be 256 bits');
          return new Promise((n, s) => {
            !(async function () {
              let i = await crypto.subtle.importKey('raw', C(t), { name: 'aes-gcm' }, !1, [
                  'encrypt',
                  'decrypt',
                ]),
                r = C(e),
                a = r.slice(0, 12),
                o = r.slice(12, 28),
                c = new Uint8Array([...r.slice(28), ...o]),
                l = { name: 'AES-GCM', iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, i, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                s(e);
              }
            })();
          });
        }
      }
      class eu {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let s = `${t}:${n}`;
          this.auth = `Basic ${btoa(s)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: 'POST',
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error('Unabled to mark event as failed:', e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: s } = await t.json();
            if (s) throw Error(`Check unseen events failed: ${s}`);
            let i =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => 'Web3Response' === e.event)
                        .map((e) => ({
                          type: 'Event',
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(i), i;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = 'DISCONNECTED'),
          (e[(e.CONNECTING = 1)] = 'CONNECTING'),
          (e[(e.CONNECTED = 2)] = 'CONNECTED');
      })(eI || (eI = {}));
      class eh {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, 'ws'));
        }
        async connect() {
          if (this.webSocket) throw Error('webSocket object is not null');
          return new Promise((e, t) => {
            var n;
            let s;
            try {
              this.webSocket = s = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, eI.CONNECTING),
              (s.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, eI.DISCONNECTED);
              }),
              (s.onopen = (t) => {
                var n;
                e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, eI.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (s.onmessage = (e) => {
                var t, n;
                if ('h' === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: 'Heartbeat' });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) || void 0 === n || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, eI.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class ep {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = w(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ['__destroyed', this.handleDestroyed],
                  ['EthereumAddress', this.handleAccountUpdated],
                  ['WalletUsername', this.handleWalletUsernameUpdated],
                  ['AppVersion', this.handleAppVersionUpdated],
                  ['ChainId', (t) => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)],
                ]).forEach((t, n) => {
                  let s = e[n];
                  void 0 !== s && t(s);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              '1' === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) || void 0 === t || t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(t);
              null === (n = this.listener) || void 0 === n || n.metadataUpdated(e, s);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated('walletUsername', e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated('AppVersion', e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(e),
                i = await this.cipher.decrypt(t);
              null === (n = this.listener) || void 0 === n || n.chainUpdated(s, i);
            }),
            (this.session = e),
            (this.cipher = new ed(e.secret)),
            (this.listener = n);
          let s = new eh(`${t}/rpc`, WebSocket);
          s.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case eI.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        s.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case eI.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
              case eI.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            s.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case 'Heartbeat':
                  this.updateLastHeartbeat();
                  return;
                case 'IsLinkedOK':
                case 'Linked': {
                  let t = 'IsLinkedOK' === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case 'GetSessionConfigOK':
                case 'SessionConfigUpdated':
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case 'Event':
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) || void 0 === t || t(e));
            }),
            (this.ws = s),
            (this.http = new eu(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error('instance is destroyed');
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: 'SetSessionConfig',
                id: w(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: '1' },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ('Event' !== e.type || 'Web3Response' !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ('WEB3_RESPONSE' !== n.type) return;
          let { id: s, response: i } = n;
          null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(s, i);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error('Unable to check for unseen events', e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) => this.handleIncomingEvent(e));
        }
        async publishEvent(e, t, n = !1) {
          let s = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    'coinbaseWalletExtension' in window && window.coinbaseWalletExtension
                      ? 'injected_sdk'
                      : 'sdk',
                })
              )
            ),
            i = {
              type: 'PublishEvent',
              id: w(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: s,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
            if ('Fail' === e.type) throw Error(e.error || 'failed to publish event');
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData('h');
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let s = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                n = window.setTimeout(() => {
                  i(Error(`request ${s} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(s, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(s);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            'Fail' !==
              (
                await this.makeRequest({
                  type: 'HostSession',
                  id: w(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: 'IsLinked',
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: 'GetSessionConfig',
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class ef {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = D(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var eg = n(93902),
        em = n(29272);
      let e_ = 'session:id',
        eb = 'session:secret',
        ey = 'session:linked';
      class ew {
        constructor(e, t, n, s = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, em.My)((0, eg.sc)(`${t}, ${n} WalletLink`))),
            (this._linked = !!s);
        }
        static create(e) {
          return new ew(e, I(16), I(32)).save();
        }
        static load(e) {
          let t = e.getItem(e_),
            n = e.getItem(ey),
            s = e.getItem(eb);
          return t && s ? new ew(e, t, s, '1' === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(e_, this.id),
            this.storage.setItem(eb, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(ey, this._linked ? '1' : '0');
        }
      }
      function ev() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) || void 0 === e
                ? void 0
                : e.call(window, '(prefers-color-scheme: dark)').matches) &&
          void 0 !== t &&
          t
        );
      }
      function ek() {
        let e = document.createElement('style');
        (e.type = 'text/css'),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function ex() {
        for (var e, t, n = 0, s = ''; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                s,
                i = '';
              if ('string' == typeof t || 'number' == typeof t) i += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (s = e(t[n])) && (i && (i += ' '), (i += s));
                else for (n in t) t[n] && (i && (i += ' '), (i += n));
              }
              return i;
            })(e)) &&
            (s && (s += ' '), (s += t));
        return s;
      }
      var eI,
        eE,
        eC,
        eS,
        eM,
        eA,
        eP,
        eL,
        eN,
        eD,
        eR,
        eT,
        eO = {},
        ej = [],
        eU = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        eW = Array.isArray;
      function eq(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function ez(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function eK(e, t, n) {
        var s,
          i,
          r,
          a = {};
        for (r in t) 'key' == r ? (s = t[r]) : 'ref' == r ? (i = t[r]) : (a[r] = t[r]);
        if (
          (arguments.length > 2 && (a.children = arguments.length > 3 ? eE.call(arguments, 2) : n),
          'function' == typeof e && null != e.defaultProps)
        )
          for (r in e.defaultProps) void 0 === a[r] && (a[r] = e.defaultProps[r]);
        return eF(e, a, s, i, null);
      }
      function eF(e, t, n, s, i) {
        var r = {
          type: e,
          props: t,
          key: n,
          ref: s,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == i ? ++eS : i,
          __i: -1,
          __u: 0,
        };
        return null == i && null != eC.vnode && eC.vnode(r), r;
      }
      function eB(e) {
        return e.children;
      }
      function eH(e, t) {
        (this.props = e), (this.context = t);
      }
      function eG(e, t) {
        if (null == t) return e.__ ? eG(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return 'function' == typeof e.type ? eG(e) : null;
      }
      function e$(e) {
        ((!e.__d && (e.__d = !0) && eM.push(e) && !eJ.__r++) || eA !== eC.debounceRendering) &&
          ((eA = eC.debounceRendering) || eP)(eJ);
      }
      function eJ() {
        for (var e, t, n, s, i, r, a = 1; eM.length; )
          eM.length > a && eM.sort(eL),
            (e = eM.shift()),
            (a = eM.length),
            e.__d &&
              ((t = void 0),
              (s = (n = e.__v).__e),
              (i = []),
              (r = []),
              e.__P &&
                (((t = eq({}, n)).__v = n.__v + 1),
                eC.vnode && eC.vnode(t),
                eX(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [s] : null,
                  i,
                  null == s ? eG(n) : s,
                  !!(32 & n.__u),
                  r
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                e0(i, t, r),
                t.__e != s &&
                  (function e(t) {
                    var n, s;
                    if (null != (t = t.__) && null != t.__c) {
                      for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                        if (null != (s = t.__k[n]) && null != s.__e) {
                          t.__e = t.__c.base = s.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        eJ.__r = 0;
      }
      function eY(e, t, n, s, i, r, a, o, c, l, d) {
        var u,
          h,
          p,
          f,
          g,
          m,
          _ = (s && s.__k) || ej,
          b = t.length;
        for (
          c = (function (e, t, n, s, i) {
            var r,
              a,
              o,
              c,
              l,
              d = n.length,
              u = d,
              h = 0;
            for (e.__k = Array(i), r = 0; r < i; r++)
              null != (a = t[r]) && 'boolean' != typeof a && 'function' != typeof a
                ? ((c = r + h),
                  ((a = e.__k[r] =
                    'string' == typeof a ||
                    'number' == typeof a ||
                    'bigint' == typeof a ||
                    a.constructor == String
                      ? eF(null, a, null, null, null)
                      : eW(a)
                        ? eF(eB, { children: a }, null, null, null)
                        : void 0 === a.constructor && a.__b > 0
                          ? eF(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                          : a).__ = e),
                  (a.__b = e.__b + 1),
                  (o = null),
                  -1 !==
                    (l = a.__i =
                      (function (e, t, n, s) {
                        var i,
                          r,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o === c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (s > +(null != c && 0 == (2 & c.__u)))
                          for (i = n - 1, r = n + 1; i >= 0 || r < t.length; ) {
                            if (i >= 0) {
                              if ((c = t[i]) && 0 == (2 & c.__u) && a == c.key && o === c.type)
                                return i;
                              i--;
                            }
                            if (r < t.length) {
                              if ((c = t[r]) && 0 == (2 & c.__u) && a == c.key && o === c.type)
                                return r;
                              r++;
                            }
                          }
                        return -1;
                      })(a, n, c, u)) && (u--, (o = n[l]) && (o.__u |= 2)),
                  null == o || null === o.__v
                    ? (-1 == l && (i > d ? h-- : i < d && h++),
                      'function' != typeof a.type && (a.__u |= 4))
                    : l != c &&
                      (l == c - 1 ? h-- : l == c + 1 ? h++ : (l > c ? h-- : h++, (a.__u |= 4))))
                : (e.__k[r] = null);
            if (u)
              for (r = 0; r < d; r++)
                null != (o = n[r]) &&
                  0 == (2 & o.__u) &&
                  (o.__e == s && (s = eG(o)),
                  (function e(t, n, s) {
                    var i, r;
                    if (
                      (eC.unmount && eC.unmount(t),
                      (i = t.ref) && ((i.current && i.current !== t.__e) || e1(i, null, n)),
                      null != (i = t.__c))
                    ) {
                      if (i.componentWillUnmount)
                        try {
                          i.componentWillUnmount();
                        } catch (e) {
                          eC.__e(e, n);
                        }
                      i.base = i.__P = null;
                    }
                    if ((i = t.__k))
                      for (r = 0; r < i.length; r++)
                        i[r] && e(i[r], n, s || 'function' != typeof t.type);
                    s || ez(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(o, o));
            return s;
          })(n, t, _, c, b),
            u = 0;
          u < b;
          u++
        )
          null != (p = n.__k[u]) &&
            ((h = -1 === p.__i ? eO : _[p.__i] || eO),
            (p.__i = u),
            (m = eX(e, p, h, i, r, a, o, c, l, d)),
            (f = p.__e),
            p.ref && h.ref != p.ref && (h.ref && e1(h.ref, null, p), d.push(p.ref, p.__c || f, p)),
            null == g && null != f && (g = f),
            4 & p.__u || h.__k === p.__k
              ? (c = (function e(t, n, s) {
                  var i, r;
                  if ('function' == typeof t.type) {
                    for (i = t.__k, r = 0; i && r < i.length; r++)
                      i[r] && ((i[r].__ = t), (n = e(i[r], n, s)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !s.contains(n) && (n = eG(t)),
                    s.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(p, c, e))
              : 'function' == typeof p.type && void 0 !== m
                ? (c = m)
                : f && (c = f.nextSibling),
            (p.__u &= -7));
        return (n.__e = g), c;
      }
      function eQ(e, t, n) {
        '-' == t[0]
          ? e.setProperty(t, null == n ? '' : n)
          : (e[t] = null == n ? '' : 'number' != typeof n || eU.test(t) ? n : n + 'px');
      }
      function eZ(e, t, n, s, i) {
        var r;
        e: if ('style' == t) {
          if ('string' == typeof n) e.style.cssText = n;
          else {
            if (('string' == typeof s && (e.style.cssText = s = ''), s))
              for (t in s) (n && t in n) || eQ(e.style, t, '');
            if (n) for (t in n) (s && n[t] === s[t]) || eQ(e.style, t, n[t]);
          }
        } else if ('o' == t[0] && 'n' == t[1])
          (r = t != (t = t.replace(eN, '$1'))),
            (t =
              t.toLowerCase() in e || 'onFocusOut' == t || 'onFocusIn' == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + r] = n),
            n
              ? s
                ? (n.t = s.t)
                : ((n.t = eD), e.addEventListener(t, r ? eT : eR, r))
              : e.removeEventListener(t, r ? eT : eR, r);
        else {
          if ('http://www.w3.org/2000/svg' == i)
            t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
          else if (
            'width' != t &&
            'height' != t &&
            'href' != t &&
            'list' != t &&
            'form' != t &&
            'tabIndex' != t &&
            'download' != t &&
            'rowSpan' != t &&
            'colSpan' != t &&
            'role' != t &&
            'popover' != t &&
            t in e
          )
            try {
              e[t] = null == n ? '' : n;
              break e;
            } catch (e) {}
          'function' == typeof n ||
            (null == n || (!1 === n && '-' != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, 'popover' == t && 1 == n ? '' : n));
        }
      }
      function eV(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.u) t.u = eD++;
            else if (t.u < n.t) return;
            return n(eC.event ? eC.event(t) : t);
          }
        };
      }
      function eX(e, t, n, s, i, r, a, o, c, l) {
        var d,
          u,
          h,
          p,
          f,
          g,
          m,
          _,
          b,
          y,
          w,
          v,
          k,
          x,
          I,
          E,
          C,
          S = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (r = [(o = t.__e = n.__e)])), (d = eC.__b) && d(t);
        e: if ('function' == typeof S)
          try {
            if (
              ((_ = t.props),
              (b = 'prototype' in S && S.prototype.render),
              (y = (d = S.contextType) && s[d.__c]),
              (w = d ? (y ? y.props.value : d.__) : s),
              n.__c
                ? (m = (u = t.__c = n.__c).__ = u.__E)
                : (b
                    ? (t.__c = u = new S(_, w))
                    : ((t.__c = u = new eH(_, w)), (u.constructor = S), (u.render = e2)),
                  y && y.sub(u),
                  (u.props = _),
                  u.state || (u.state = {}),
                  (u.context = w),
                  (u.__n = s),
                  (h = u.__d = !0),
                  (u.__h = []),
                  (u._sb = [])),
              b && null == u.__s && (u.__s = u.state),
              b &&
                null != S.getDerivedStateFromProps &&
                (u.__s == u.state && (u.__s = eq({}, u.__s)),
                eq(u.__s, S.getDerivedStateFromProps(_, u.__s))),
              (p = u.props),
              (f = u.state),
              (u.__v = t),
              h)
            )
              b &&
                null == S.getDerivedStateFromProps &&
                null != u.componentWillMount &&
                u.componentWillMount(),
                b && null != u.componentDidMount && u.__h.push(u.componentDidMount);
            else {
              if (
                (b &&
                  null == S.getDerivedStateFromProps &&
                  _ !== p &&
                  null != u.componentWillReceiveProps &&
                  u.componentWillReceiveProps(_, w),
                !u.__e &&
                  ((null != u.shouldComponentUpdate &&
                    !1 === u.shouldComponentUpdate(_, u.__s, w)) ||
                    t.__v == n.__v))
              ) {
                for (
                  t.__v != n.__v && ((u.props = _), (u.state = u.__s), (u.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    v = 0;
                  v < u._sb.length;
                  v++
                )
                  u.__h.push(u._sb[v]);
                (u._sb = []), u.__h.length && a.push(u);
                break e;
              }
              null != u.componentWillUpdate && u.componentWillUpdate(_, u.__s, w),
                b &&
                  null != u.componentDidUpdate &&
                  u.__h.push(function () {
                    u.componentDidUpdate(p, f, g);
                  });
            }
            if (
              ((u.context = w), (u.props = _), (u.__P = e), (u.__e = !1), (k = eC.__r), (x = 0), b)
            ) {
              for (
                u.state = u.__s,
                  u.__d = !1,
                  k && k(t),
                  d = u.render(u.props, u.state, u.context),
                  I = 0;
                I < u._sb.length;
                I++
              )
                u.__h.push(u._sb[I]);
              u._sb = [];
            } else
              do
                (u.__d = !1),
                  k && k(t),
                  (d = u.render(u.props, u.state, u.context)),
                  (u.state = u.__s);
              while (u.__d && ++x < 25);
            (u.state = u.__s),
              null != u.getChildContext && (s = eq(eq({}, s), u.getChildContext())),
              b && !h && null != u.getSnapshotBeforeUpdate && (g = u.getSnapshotBeforeUpdate(p, f)),
              (E = d),
              null != d &&
                d.type === eB &&
                null == d.key &&
                (E = (function e(t) {
                  return 'object' != typeof t || null == t ? t : eW(t) ? t.map(e) : eq({}, t);
                })(d.props.children)),
              (o = eY(e, eW(E) ? E : [E], t, n, s, i, r, a, o, c, l)),
              (u.base = t.__e),
              (t.__u &= -161),
              u.__h.length && a.push(u),
              m && (u.__E = u.__ = null);
          } catch (e) {
            if (((t.__v = null), c || null != r)) {
              if (e.then) {
                for (t.__u |= c ? 160 : 128; o && 8 == o.nodeType && o.nextSibling; )
                  o = o.nextSibling;
                (r[r.indexOf(o)] = null), (t.__e = o);
              } else for (C = r.length; C--; ) ez(r[C]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            eC.__e(e, t, n);
          }
        else
          null == r && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (o = t.__e =
                (function (e, t, n, s, i, r, a, o, c) {
                  var l,
                    d,
                    u,
                    h,
                    p,
                    f,
                    g,
                    m = n.props,
                    _ = t.props,
                    b = t.type;
                  if (
                    ('svg' == b
                      ? (i = 'http://www.w3.org/2000/svg')
                      : 'math' == b
                        ? (i = 'http://www.w3.org/1998/Math/MathML')
                        : i || (i = 'http://www.w3.org/1999/xhtml'),
                    null != r)
                  ) {
                    for (l = 0; l < r.length; l++)
                      if (
                        (p = r[l]) &&
                        'setAttribute' in p == !!b &&
                        (b ? p.localName == b : 3 == p.nodeType)
                      ) {
                        (e = p), (r[l] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == b) return document.createTextNode(_);
                    (e = document.createElementNS(i, b, _.is && _)),
                      o && (eC.__m && eC.__m(t, r), (o = !1)),
                      (r = null);
                  }
                  if (null === b) m === _ || (o && e.data === _) || (e.data = _);
                  else {
                    if (((r = r && eE.call(e.childNodes)), (m = n.props || eO), !o && null != r))
                      for (m = {}, l = 0; l < e.attributes.length; l++)
                        m[(p = e.attributes[l]).name] = p.value;
                    for (l in m)
                      if (((p = m[l]), 'children' == l));
                      else if ('dangerouslySetInnerHTML' == l) u = p;
                      else if (!(l in _)) {
                        if (
                          ('value' == l && 'defaultValue' in _) ||
                          ('checked' == l && 'defaultChecked' in _)
                        )
                          continue;
                        eZ(e, l, null, p, i);
                      }
                    for (l in _)
                      (p = _[l]),
                        'children' == l
                          ? (h = p)
                          : 'dangerouslySetInnerHTML' == l
                            ? (d = p)
                            : 'value' == l
                              ? (f = p)
                              : 'checked' == l
                                ? (g = p)
                                : (o && 'function' != typeof p) ||
                                  m[l] === p ||
                                  eZ(e, l, p, m[l], i);
                    if (d)
                      o ||
                        (u && (d.__html === u.__html || d.__html === e.innerHTML)) ||
                        (e.innerHTML = d.__html),
                        (t.__k = []);
                    else if (
                      (u && (e.innerHTML = ''),
                      eY(
                        'template' === t.type ? e.content : e,
                        eW(h) ? h : [h],
                        t,
                        n,
                        s,
                        'foreignObject' == b ? 'http://www.w3.org/1999/xhtml' : i,
                        r,
                        a,
                        r ? r[0] : n.__k && eG(n, 0),
                        o,
                        c
                      ),
                      null != r)
                    )
                      for (l = r.length; l--; ) ez(r[l]);
                    o ||
                      ((l = 'value'),
                      'progress' == b && null == f
                        ? e.removeAttribute('value')
                        : void 0 === f ||
                          (f === e[l] && ('progress' != b || f) && ('option' != b || f === m[l])) ||
                          eZ(e, l, f, m[l], i),
                      (l = 'checked'),
                      void 0 !== g && g !== e[l] && eZ(e, l, g, m[l], i));
                  }
                  return e;
                })(n.__e, t, n, s, i, r, a, c, l));
        return (d = eC.diffed) && d(t), 128 & t.__u ? void 0 : o;
      }
      function e0(e, t, n) {
        for (var s = 0; s < n.length; s++) e1(n[s], n[++s], n[++s]);
        eC.__c && eC.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              eC.__e(e, t.__v);
            }
          });
      }
      function e1(e, t, n) {
        try {
          if ('function' == typeof e) {
            var s = 'function' == typeof e.__u;
            s && e.__u(), (s && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          eC.__e(e, n);
        }
      }
      function e2(e, t, n) {
        return this.constructor(e, n);
      }
      function e3(e, t, n) {
        var s, i, r, a;
        t == document && (t = document.documentElement),
          eC.__ && eC.__(e, t),
          (i = (s = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
          (r = []),
          (a = []),
          eX(
            t,
            (e = ((!s && n) || t).__k = eK(eB, null, [e])),
            i || eO,
            eO,
            t.namespaceURI,
            !s && n ? [n] : i ? null : t.firstChild ? eE.call(t.childNodes) : null,
            r,
            !s && n ? n : i ? i.__e : t.firstChild,
            s,
            a
          ),
          e0(r, e, a);
      }
      function e5(e, t) {
        e3(e, t, e5);
      }
      (eE = ej.slice),
        (eC = {
          __e: function (e, t, n, s) {
            for (var i, r, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((r = i.constructor) &&
                      null != r.getDerivedStateFromError &&
                      (i.setState(r.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch && (i.componentDidCatch(e, s || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (eS = 0),
        (eH.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = eq({}, this.state))),
            'function' == typeof e && (e = e(eq({}, n), this.props)),
            e && eq(n, e),
            null != e && this.__v && (t && this._sb.push(t), e$(this));
        }),
        (eH.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), e$(this));
        }),
        (eH.prototype.render = eB),
        (eM = []),
        (eP =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (eL = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (eJ.__r = 0),
        (eN = /(PointerCapture)$|Capture$/i),
        (eD = 0),
        (eR = eV(!1)),
        (eT = eV(!0));
      var e4,
        e8,
        e7,
        e6,
        e9 = 0,
        te = [],
        tt = eC,
        tn = tt.__b,
        ts = tt.__r,
        ti = tt.diffed,
        tr = tt.__c,
        ta = tt.unmount,
        to = tt.__;
      function tc(e, t) {
        tt.__h && tt.__h(e8, e, e9 || t), (e9 = 0);
        var n = e8.__H || (e8.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function tl(e) {
        return (
          (e9 = 1),
          (function (e, t, n) {
            var s = tc(e4++, 2);
            if (
              ((s.t = e),
              !s.__c &&
                ((s.__ = [
                  tg(void 0, t),
                  function (e) {
                    var t = s.__N ? s.__N[0] : s.__[0],
                      n = s.t(t, e);
                    t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
                  },
                ]),
                (s.__c = e8),
                !e8.__f))
            ) {
              var i = function (e, t, n) {
                if (!s.__c.__H) return !0;
                var i = s.__c.__H.__.filter(function (e) {
                  return !!e.__c;
                });
                if (
                  i.every(function (e) {
                    return !e.__N;
                  })
                )
                  return !r || r.call(this, e, t, n);
                var a = s.__c.props !== e;
                return (
                  i.forEach(function (e) {
                    if (e.__N) {
                      var t = e.__[0];
                      (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                    }
                  }),
                  (r && r.call(this, e, t, n)) || a
                );
              };
              e8.__f = !0;
              var r = e8.shouldComponentUpdate,
                a = e8.componentWillUpdate;
              (e8.componentWillUpdate = function (e, t, n) {
                if (this.__e) {
                  var s = r;
                  (r = void 0), i(e, t, n), (r = s);
                }
                a && a.call(this, e, t, n);
              }),
                (e8.shouldComponentUpdate = i);
            }
            return s.__N || s.__;
          })(tg, e)
        );
      }
      function td() {
        for (var e; (e = te.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(th), e.__H.__h.forEach(tp), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), tt.__e(t, e.__v);
            }
      }
      (tt.__b = function (e) {
        (e8 = null), tn && tn(e);
      }),
        (tt.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), to && to(e, t);
        }),
        (tt.__r = function (e) {
          ts && ts(e), (e4 = 0);
          var t = (e8 = e.__c).__H;
          t &&
            (e7 === e8
              ? ((t.__h = []),
                (e8.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(th), t.__h.forEach(tp), (t.__h = []), (e4 = 0))),
            (e7 = e8);
        }),
        (tt.diffed = function (e) {
          ti && ti(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== te.push(t) && e6 === tt.requestAnimationFrame) ||
                (
                  (e6 = tt.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(s), tu && cancelAnimationFrame(t), setTimeout(e);
                      },
                      s = setTimeout(n, 100);
                    tu && (t = requestAnimationFrame(n));
                  }
                )(td)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (e7 = e8 = null);
        }),
        (tt.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(th),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || tp(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                tt.__e(n, e.__v);
            }
          }),
            tr && tr(e, t);
        }),
        (tt.unmount = function (e) {
          ta && ta(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                th(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && tt.__e(t, n.__v));
        });
      var tu = 'function' == typeof requestAnimationFrame;
      function th(e) {
        var t = e8,
          n = e.__c;
        'function' == typeof n && ((e.__c = void 0), n()), (e8 = t);
      }
      function tp(e) {
        var t = e8;
        (e.__c = e.__()), (e8 = t);
      }
      function tf(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function tg(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      class tm {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ev());
        }
        attach(e) {
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-snackbar-root'),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            e3(
              eK(
                'div',
                null,
                eK(
                  t_,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    eK(tb, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let t_ = (e) =>
          eK(
            'div',
            { class: ex('-cbwsdk-snackbar-container') },
            eK(
              'style',
              null,
              '.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}'
            ),
            eK('div', { class: '-cbwsdk-snackbar' }, e.children)
          ),
        tb = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [s, i] = tl(!0),
            [r, a] = tl(null != e && e);
          return (
            !(function (e, t) {
              var n = tc(e4++, 3);
              !tt.__s && tf(n.__H, void 0) && ((n.__ = e), (n.u = void 0), e8.__H.__h.push(n));
            })(() => {
              let e = [
                window.setTimeout(() => {
                  i(!1);
                }, 1),
                window.setTimeout(() => {
                  a(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            eK(
              'div',
              {
                class: ex(
                  '-cbwsdk-snackbar-instance',
                  s && '-cbwsdk-snackbar-instance-hidden',
                  r && '-cbwsdk-snackbar-instance-expanded'
                ),
              },
              eK(
                'div',
                {
                  class: '-cbwsdk-snackbar-instance-header',
                  onClick: () => {
                    a(!r);
                  },
                },
                eK('img', {
                  src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+',
                  class: '-cbwsdk-snackbar-instance-header-cblogo',
                }),
                ' ',
                eK('div', { class: '-cbwsdk-snackbar-instance-header-message' }, t),
                eK(
                  'div',
                  { class: '-gear-container' },
                  !r &&
                    eK(
                      'svg',
                      {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      eK('circle', { cx: '12', cy: '12', r: '12', fill: '#F5F7F8' })
                    ),
                  eK('img', {
                    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=',
                    class: '-gear-icon',
                    title: 'Expand',
                  })
                )
              ),
              n &&
                n.length > 0 &&
                eK(
                  'div',
                  { class: '-cbwsdk-snackbar-instance-menu' },
                  n.map((e, t) =>
                    eK(
                      'div',
                      {
                        class: ex(
                          '-cbwsdk-snackbar-instance-menu-item',
                          e.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      eK(
                        'svg',
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: '0 0 10 11',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                        },
                        eK('path', {
                          'fill-rule': e.defaultFillRule,
                          'clip-rule': e.defaultClipRule,
                          d: e.path,
                          fill: '#AAAAAA',
                        })
                      ),
                      eK(
                        'span',
                        {
                          class: ex(
                            '-cbwsdk-snackbar-instance-menu-item-info',
                            e.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red'
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class ty {
        constructor() {
          (this.attached = !1), (this.snackbar = new tm());
        }
        attach() {
          if (this.attached) throw Error('Coinbase Wallet SDK UI is already attached');
          let e = document.documentElement,
            t = document.createElement('div');
          (t.className = '-cbwsdk-css-reset'),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            ek();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: 'Connection lost',
                  menuItems: [
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: 'Confirm on phone',
                  menuItems: [
                    {
                      isRed: !0,
                      info: 'Cancel transaction',
                      svgWidth: '11',
                      svgHeight: '11',
                      path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                      defaultFillRule: 'inherit',
                      defaultClipRule: 'inherit',
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class tw {
        constructor() {
          (this.root = null), (this.darkMode = ev());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-css-reset'),
            e.appendChild(this.root),
            ek();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            (e3(null, this.root),
            e &&
              e3(
                eK(
                  tv,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let tv = ({ title: e, buttonText: t, darkMode: n, onButtonClick: s, onDismiss: i }) =>
          eK(
            t_,
            { darkMode: n },
            eK(
              'div',
              { class: '-cbwsdk-redirect-dialog' },
              eK(
                'style',
                null,
                '.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}'
              ),
              eK('div', { class: '-cbwsdk-redirect-dialog-backdrop', onClick: i }),
              eK(
                'div',
                { class: ex('-cbwsdk-redirect-dialog-box', n ? 'dark' : 'light') },
                eK('p', null, e),
                eK('button', { onClick: s }, t)
              )
            )
          ),
        tk = 'https://www.walletlink.org';
      class tx {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new tw());
        }
        attach() {
          if (this.attached) throw Error('Coinbase Wallet SDK UI is already attached');
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL('https://go.cb-w.com/walletlink');
          t.searchParams.append(
            'redirect_url',
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append('wl_url', e);
          let n = document.createElement('a');
          (n.target = 'cbw-opener'), (n.href = t.href), (n.rel = 'noreferrer noopener'), n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: 'Redirecting to Coinbase Wallet...',
            buttonText: 'Open',
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class tI {
        constructor(e) {
          (this.chainCallbackParams = { chainId: '', jsonRpcUrl: '' }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (e = null == window ? void 0 : window.navigator) || void 0 === e
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(ec);
              if ((e && (this._session.linked = e), (this.isUnlinkedErrorState = !1), t)) {
                let n = t.split(' '),
                  s = 'true' === this.storage.getItem('IsStandaloneSigning');
                '' === n[0] || e || !this._session.linked || s || (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback && this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                tI.accountRequestCallbackIds.size > 0 &&
                  (Array.from(tI.accountRequestCallbackIds.values()).forEach((t) => {
                    this.invokeCallback(t, { method: 'requestEthereumAccounts', result: [e] });
                  }),
                  tI.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: s } = this.subscribe();
          (this._session = t),
            (this.connection = s),
            (this.relayEventManager = new ef()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = ew.load(this.storage) || ew.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new ep({ session: e, linkAPIUrl: t, listener: this }),
            s = this.isMobileWeb ? new tx() : new ty();
          return n.connect(), { session: e, ui: s, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = ew.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && s.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: A(e.weiValue),
              data: S(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? A(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: A(e.weiValue),
              data: S(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? A(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas ? A(e.maxPriorityFeePerGas) : null,
              gasLimit: e.gasLimit ? A(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: 'submitEthereumTransaction',
            params: { signedTransaction: S(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = I(8),
            s = (s) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, s),
                null == t || t();
            };
          return new Promise((i, r) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: s,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), el(e))) return r(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: 'WEB3_REQUEST', id: e, request: t };
          this.publishEvent('Web3Request', n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, { method: t.method, errorMessage: e.message });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof tx)
            switch (e) {
              case 'requestEthereumAccounts':
              case 'switchEthereumChain':
                return;
              default:
                window.addEventListener(
                  'blur',
                  () => {
                    window.addEventListener(
                      'focus',
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            'Web3RequestCanceled',
            { type: 'WEB3_REQUEST_CANCELED', id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ('requestEthereumAccounts' === t.method) {
            tI.accountRequestCallbackIds.forEach((e) => this.invokeCallback(e, t)),
              tI.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var s;
          let i =
            null !== (s = null == n ? void 0 : n.message) && void 0 !== s
              ? s
              : 'Unspecified error message.';
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: i });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = { method: 'requestEthereumAccounts', params: { appName: e, appLogoUrl: t } },
            s = I(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(s, (n) => {
              if (el(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              tI.accountRequestCallbackIds.add(s),
              this.publishWeb3RequestEvent(s, n);
          });
        }
        watchAsset(e, t, n, s, i, r) {
          let a = {
              method: 'watchAsset',
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: s, image: i },
                chainId: r,
              },
            },
            o = null,
            c = I(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), el(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, s, i, r) {
          let a = {
              method: 'addEthereumChain',
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: s,
                chainName: i,
                iconUrls: n,
                nativeCurrency: r,
              },
            },
            o = null,
            c = I(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), el(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: 'switchEthereumChain',
              params: Object.assign({ chainId: e }, { address: t }),
            },
            s = null,
            i = I(8);
          return (
            (s = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(i),
                  this.handleErrorResponse(i, n.method, e),
                  null == s || s();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(i, (n) =>
                (null == s || s(), el(n) && n.errorCode)
                  ? t(
                      u.provider.custom({
                        code: n.errorCode,
                        message:
                          'Unrecognized chain ID. Try adding the chain using addEthereumChain first.',
                      })
                    )
                  : el(n)
                    ? t(Error(n.errorMessage))
                    : void e(n)
              ),
                this.publishWeb3RequestEvent(i, n);
            })
          );
        }
      }
      tI.accountRequestCallbackIds = new Set();
      var tE = n(50887).Buffer;
      let tC = 'DefaultChainId',
        tS = 'DefaultJsonRpcUrl';
      class tM {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new s('walletlink', tk)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(ec);
          if (t) {
            let e = t.split(' ');
            '' !== e[0] && (this._addresses = e.map((e) => O(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } = this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(tS)) && void 0 !== e ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(tS, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let s = this.getChainId();
          this._storage.setItem(tC, t.toString(10)),
            U(t) !== s &&
              (null === (n = this.callback) || void 0 === n || n.call(this, 'chainChanged', P(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw u.rpc.invalidParams('Type is required');
          if ((null == t ? void 0 : t.type) !== 'ERC20')
            throw u.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
          if (!(null == t ? void 0 : t.options)) throw u.rpc.invalidParams('Options are required');
          if (!(null == t ? void 0 : t.options.address))
            throw u.rpc.invalidParams('Address is required');
          let n = this.getChainId(),
            { address: s, symbol: i, image: r, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(t.type, s, i, a, r, null == n ? void 0 : n.toString());
          return !el(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let s = e[0];
          if ((null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0)
            throw u.rpc.invalidParams('please pass in at least 1 rpcUrl');
          if (!s.chainName || '' === s.chainName.trim())
            throw u.rpc.invalidParams('chainName is a required field');
          if (!s.nativeCurrency) throw u.rpc.invalidParams('nativeCurrency is a required field');
          let i = Number.parseInt(s.chainId, 16);
          if (i === this.getChainId()) return !1;
          let r = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: d,
            } = s,
            h = await r.addEthereumChain(i.toString(), a, l, o, c, d);
          if (el(h)) return !1;
          if ((null === (n = h.result) || void 0 === n ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(a[0], i), null;
          throw u.rpc.internal('unable to add ethereum chain');
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            s = await n.switchEthereumChain(t.toString(10), this.selectedAddress || void 0);
          if (el(s)) throw s;
          let i = s.result;
          return i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t), null;
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error('addresses is not an array');
          let s = e.map((e) => O(e));
          JSON.stringify(s) !== JSON.stringify(this._addresses) &&
            ((this._addresses = s),
            null === (n = this.callback) || void 0 === n || n.call(this, 'accountsChanged', s),
            this._storage.setItem(ec, s.join(' ')));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case 'eth_accounts':
              return [...this._addresses];
            case 'eth_coinbase':
              return this.selectedAddress || null;
            case 'net_version':
              return this.getChainId().toString(10);
            case 'eth_chainId':
              return P(this.getChainId());
            case 'eth_requestAccounts':
              return this._eth_requestAccounts();
            case 'eth_ecRecover':
            case 'personal_ecRecover':
              return this.ecRecover(e);
            case 'personal_sign':
              return this.personalSign(e);
            case 'eth_signTransaction':
              return this._eth_signTransaction(t);
            case 'eth_sendRawTransaction':
              return this._eth_sendRawTransaction(t);
            case 'eth_sendTransaction':
              return this._eth_sendTransaction(t);
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
              return this.signTypedData(e);
            case 'wallet_addEthereumChain':
              return this.addEthereumChain(t);
            case 'wallet_switchEthereumChain':
              return this.switchEthereumChain(t);
            case 'wallet_watchAsset':
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl) throw u.rpc.internal('No RPC URL set for chain');
              return et(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = O(e);
          if (!this._addresses.map((e) => O(e)).includes(t))
            throw Error('Unknown Ethereum address');
        }
        _prepareTransactionParams(e) {
          let t = e.from ? O(e.from) : this.selectedAddress;
          if (!t) throw Error('Ethereum address is unavailable');
          this._ensureKnownAddress(t);
          let n = e.to ? O(e.to) : null,
            s = null != e.value ? W(e.value) : BigInt(0),
            i = e.data ? j(e.data) : tE.alloc(0),
            r = null != e.nonce ? U(e.nonce) : null,
            a = null != e.gasPrice ? W(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? W(e.maxFeePerGas) : null,
            c = null != e.maxPriorityFeePerGas ? W(e.maxPriorityFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: s,
            data: i,
            nonce: r,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? W(e.gas) : null,
            chainId: e.chainId ? U(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw u.rpc.invalidParams();
          let s = this.initializeRelay(),
            i = await s.sendRequest({
              method: 'ethereumAddressFromSignedMessage',
              params: {
                message: M(n[0]),
                signature: M(n[1]),
                addPrefix: 'personal_ecRecover' === t,
              },
            });
          if (el(i)) throw i;
          return i.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(tC)) && void 0 !== e ? e : '1',
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, 'connect', { chainId: P(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            s = await n.requestEthereumAccounts();
          if (el(s)) throw s;
          if (!s.result) throw Error('accounts received is empty');
          return (
            this._setAddresses(s.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, 'connect', { chainId: P(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw u.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let s = this.initializeRelay(),
            i = await s.sendRequest({
              method: 'signEthereumMessage',
              params: { address: O(t), message: M(n), addPrefix: !0, typedDataJson: null },
            });
          if (el(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signEthereumTransaction(t);
          if (el(s)) throw s;
          return s.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = j(e[0]),
            n = this.initializeRelay(),
            s = await n.submitEthereumTransaction(t, this.getChainId());
          if (el(s)) throw s;
          return s.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signAndSubmitEthereumTransaction(t);
          if (el(s)) throw s;
          return s.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw u.rpc.invalidParams();
          let s = n[+('eth_signTypedData_v1' === t)],
            i = n[+('eth_signTypedData_v1' !== t)];
          this._ensureKnownAddress(s);
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: 'signEthereumMessage',
              params: {
                address: O(s),
                message: S(
                  {
                    eth_signTypedData_v1: eo.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: eo.hashForSignTypedData_v3,
                    eth_signTypedData_v4: eo.hashForSignTypedData_v4,
                    eth_signTypedData: eo.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ('string' == typeof e) return JSON.parse(e);
                      if ('object' == typeof e) return e;
                      throw u.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`);
                    })(i),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(i, null, 2),
                addPrefix: !1,
              },
            });
          if (el(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new tI({
                linkAPIUrl: tk,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let tA = 'SignerType',
        tP = new s('CBWSDK', 'SignerConfigurator');
      async function tL(e) {
        let { communicator: t, metadata: n, handshakeRequest: s, callback: i } = e;
        tN(t, n, i).catch(() => {});
        let r = {
            id: crypto.randomUUID(),
            event: 'selectSignerType',
            data: Object.assign(Object.assign({}, e.preference), { handshakeRequest: s }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(r);
        return a;
      }
      async function tN(e, t, n) {
        await e.onMessage(({ event: e }) => 'WalletLinkSessionRequest' === e);
        let s = new tM({ metadata: t, callback: n });
        e.postMessage({ event: 'WalletLinkUpdate', data: { session: s.getSession() } }),
          await s.handshake(),
          e.postMessage({ event: 'WalletLinkUpdate', data: { connected: !0 } });
      }
      let tD = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: tR, getCrossOriginOpenerPolicy: tT } = (() => {
          let e;
          return {
            getCrossOriginOpenerPolicy: () => (void 0 === e ? 'undefined' : e),
            checkCrossOriginOpenerPolicy: async () => {
              if ('undefined' == typeof window) {
                e = 'non-browser-env';
                return;
              }
              try {
                let t = `${window.location.origin}${window.location.pathname}`,
                  n = await fetch(t, { method: 'HEAD' });
                if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                let s = n.headers.get('Cross-Origin-Opener-Policy');
                (e = null != s ? s : 'null'), 'same-origin' === e && console.error(tD);
              } catch (t) {
                console.error('Error checking Cross-Origin-Opener-Policy:', t.message),
                  (e = 'error');
              }
            },
          };
        })();
      class tO {
        constructor({ url: e = 'https://keys.coinbase.com/connect', metadata: t, preference: n }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let s = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let i = n.data;
                  e(i) &&
                    (t(i), window.removeEventListener('message', s), this.listeners.delete(s));
                };
                window.addEventListener('message', s), this.listeners.set(s, { reject: n });
              })),
            (this.disconnect = () => {
              (function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(u.provider.userRejectedRequest('Request rejected')),
                    window.removeEventListener('message', t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      for (let [t, n] of Object.entries({
                        sdkName: ee,
                        sdkVersion: X,
                        origin: window.location.origin,
                        coop: tT(),
                      }))
                        e.searchParams.append(t, n.toString());
                    })(e);
                    let s = `wallet_${crypto.randomUUID()}`,
                      i = window.open(e, s, `width=420, height=540, left=${t}, top=${n}`);
                    if ((null == i || i.focus(), !i))
                      throw u.rpc.internal('Pop up window failed to open');
                    return i;
                  })(this.url)),
                  this.onMessage(({ event: e }) => 'PopupUnload' === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => 'PopupLoaded' === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: X,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw u.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var tj = n(17709);
      class tU extends tj.b {}
      var tW = function (e, t) {
        var n = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (n[s] = e[s]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++)
            0 > t.indexOf(s[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
              (n[s[i]] = e[s[i]]);
        return n;
      };
      class tq extends tU {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: s } = n,
            i = tW(n, ['keysUrl']);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = i),
            (this.communicator = new tO({ url: s, metadata: t, preference: i }));
          let r = tP.getItem(tA);
          r && (this.signer = this.initSigner(r));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || 'object' != typeof e || Array.isArray(e))
                  throw u.rpc.invalidParams({
                    message: 'Expected a single, non-array, object argument.',
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ('string' != typeof t || 0 === t.length)
                  throw u.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (void 0 !== n && !Array.isArray(n) && ('object' != typeof n || null === n))
                  throw u.rpc.invalidParams({
                    message: "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case 'eth_sign':
                  case 'eth_signTypedData_v2':
                  case 'eth_subscribe':
                  case 'eth_unsubscribe':
                    throw u.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case 'eth_requestAccounts': {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), tP.setItem(tA, t);
                  break;
                }
                case 'wallet_sendCalls': {
                  let t = this.initSigner('scw');
                  await t.handshake({ method: 'handshake' });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case 'wallet_getCallsStatus':
                  return et(e, 'http://rpc.wallet.coinbase.com');
                case 'net_version':
                  return 1;
                case 'eth_chainId':
                  return P(1);
                default:
                  throw u.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === i.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, s;
                      let u = {};
                      if (
                        e &&
                        'object' == typeof e &&
                        !Array.isArray(e) &&
                        l(e, 'code') &&
                        Number.isInteger((n = e.code)) &&
                        (r[n.toString()] || ((s = n) >= -32099 && s <= -32e3))
                      )
                        (u.code = e.code),
                          e.message && 'string' == typeof e.message
                            ? ((u.message = e.message), l(e, 'data') && (u.data = e.data))
                            : ((u.message = o(u.code)), (u.data = { originalError: c(e) }));
                      else
                        (u.code = i.rpc.internal),
                          (u.message = d(e, 'message') ? e.message : a),
                          (u.data = { originalError: c(e) });
                      return t && (u.stack = d(e, 'stack') ? e.stack : void 0), u;
                    })(
                      (function (e) {
                        var t;
                        if ('string' == typeof e) return { message: e, code: i.rpc.internal };
                        if (el(e)) {
                          let n = e.errorMessage,
                            s =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                  ? i.provider.userRejectedRequest
                                  : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: s,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
                  return (
                    n.searchParams.set('version', X),
                    n.searchParams.set('code', t.code.toString()),
                    n.searchParams.set('message', t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: 'eth_requestAccounts' })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e ? void 0 : e.cleanup()),
            (this.signer = null),
            s.clearAll(),
            this.emit('disconnect', u.provider.disconnected('User initiated disconnection'));
        }
        requestSignerSelection(e) {
          return tL({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let { signerType: t, metadata: n, communicator: s, callback: i } = e;
            switch (t) {
              case 'scw':
                return new ea({ metadata: n, callback: i, communicator: s });
              case 'walletlink':
                return new tM({ metadata: n, callback: i });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      let tz = { options: 'all' };
      function tK(e) {
        var t;
        new s('CBWSDK').setItem('VERSION', X), tR();
        let n = {
          metadata: {
            appName: e.appName || 'Dapp',
            appLogoUrl: e.appLogoUrl || '',
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(tz, null !== (t = e.preference) && void 0 !== t ? t : {}),
        };
        !(function (e) {
          if (e) {
            if (!['all', 'smartWalletOnly', 'eoaOnly'].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error('Attribution cannot contain both auto and dataSuffix properties');
          }
        })(n.preference);
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, s;
                    let { appName: i, appLogoUrl: r, appChainIds: a } = e;
                    if ('smartWalletOnly' !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null === (n = e.setAppInfo) || void 0 === n || n.call(e, i, r, a, t), e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                            ? void 0
                            : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null === (s = o.setAppInfo) || void 0 === s || s.call(o, i, r, a, t), o
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new tq(n);
              })(n)),
            i
          ),
        };
      }
    },
    69267: (e, t, n) => {
      var s = n(50887).Buffer;
      let i = n(21336),
        r = n(56321),
        a = {
          type: 'object',
          properties: {
            types: {
              type: 'object',
              additionalProperties: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: { name: { type: 'string' }, type: { type: 'string' } },
                  required: ['name', 'type'],
                },
              },
            },
            primaryType: { type: 'string' },
            domain: { type: 'object' },
            message: { type: 'object' },
          },
          required: ['types', 'primaryType', 'domain', 'message'],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ['bytes32'],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    'bytes32',
                    null == o
                      ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                      : i.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o) throw Error(`missing value for field ${e} of type ${t}`);
                if ('bytes' === t) return ['bytes32', i.keccak(o)];
                if ('string' === t)
                  return 'string' == typeof o && (o = s.from(o, 'utf8')), ['bytes32', i.keccak(o)];
                if (t.lastIndexOf(']') === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf('[')),
                    s = o.map((t) => l(e, n, t));
                  return [
                    'bytes32',
                    i.keccak(
                      r.rawEncode(
                        s.map(([e]) => e),
                        s.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let s of n[e]) {
                let [e, n] = l(s.name, s.type, t[s.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let r of n[e]) {
                let e = t[r.name];
                if (void 0 !== e) {
                  if ('bytes' === r.type) o.push('bytes32'), (e = i.keccak(e)), c.push(e);
                  else if ('string' === r.type)
                    o.push('bytes32'),
                      'string' == typeof e && (e = s.from(e, 'utf8')),
                      (e = i.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[r.type])
                    o.push('bytes32'), (e = i.keccak(this.encodeData(r.type, e, n, a))), c.push(e);
                  else if (r.type.lastIndexOf(']') === r.type.length - 1)
                    throw Error('Arrays currently unimplemented in encodeData');
                  else o.push(r.type), c.push(e);
                }
              }
            return r.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = '',
              s = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (s = [e].concat(s.sort()))) {
              if (!t[i]) throw Error('No type definition specified: ' + i);
              n += i + '(' + t[i].map(({ name: e, type: t }) => t + ' ' + e).join(',') + ')';
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e])) return n;
            for (let s of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(s.type, t, n)) n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, s = !0) {
            return i.keccak(this.encodeData(e, t, n, s));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t;
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              r = [s.from('1901', 'hex')];
            return (
              r.push(this.hashStruct('EIP712Domain', n.domain, n.types, t)),
              'EIP712Domain' !== n.primaryType &&
                r.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              i.keccak(s.concat(r))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error('Expect argument to be non-empty array');
            if ('object' != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return 'bytes' === e.type ? i.toBuffer(e.value) : e.value;
              }),
              s = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + ' ' + e.name;
              });
            return r.soliditySHA3(
              ['bytes32', 'bytes32'],
              [r.soliditySHA3(Array(e.length).fill('string'), a), r.soliditySHA3(s, n)]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    92994: (e) => {
      'use strict';
      var t = Object.prototype.hasOwnProperty,
        n = '~';
      function s() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function r(e, t, s, r, a) {
        if ('function' != typeof s) throw TypeError('The listener must be a function');
        var o = new i(s, r || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new s()) : delete e._events[t];
      }
      function o() {
        (this._events = new s()), (this._eventsCount = 0);
      }
      Object.create && ((s.prototype = Object.create(null)), new s().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            s,
            i = [];
          if (0 === this._eventsCount) return i;
          for (s in (e = this._events)) t.call(e, s) && i.push(n ? s.slice(1) : s);
          return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            s = this._events[t];
          if (!s) return [];
          if (s.fn) return [s.fn];
          for (var i = 0, r = s.length, a = Array(r); i < r; i++) a[i] = s[i].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            s = this._events[t];
          return s ? (s.fn ? 1 : s.length) : 0;
        }),
        (o.prototype.emit = function (e, t, s, i, r, a) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            l,
            d = this._events[o],
            u = arguments.length;
          if (d.fn) {
            switch ((d.once && this.removeListener(e, d.fn, void 0, !0), u)) {
              case 1:
                return d.fn.call(d.context), !0;
              case 2:
                return d.fn.call(d.context, t), !0;
              case 3:
                return d.fn.call(d.context, t, s), !0;
              case 4:
                return d.fn.call(d.context, t, s, i), !0;
              case 5:
                return d.fn.call(d.context, t, s, i, r), !0;
              case 6:
                return d.fn.call(d.context, t, s, i, r, a), !0;
            }
            for (l = 1, c = Array(u - 1); l < u; l++) c[l - 1] = arguments[l];
            d.fn.apply(d.context, c);
          } else {
            var h,
              p = d.length;
            for (l = 0; l < p; l++)
              switch ((d[l].once && this.removeListener(e, d[l].fn, void 0, !0), u)) {
                case 1:
                  d[l].fn.call(d[l].context);
                  break;
                case 2:
                  d[l].fn.call(d[l].context, t);
                  break;
                case 3:
                  d[l].fn.call(d[l].context, t, s);
                  break;
                case 4:
                  d[l].fn.call(d[l].context, t, s, i);
                  break;
                default:
                  if (!c) for (h = 1, c = Array(u - 1); h < u; h++) c[h - 1] = arguments[h];
                  d[l].fn.apply(d[l].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return r(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return r(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, s, i) {
          var r = n ? n + e : e;
          if (!this._events[r]) return this;
          if (!t) return a(this, r), this;
          var o = this._events[r];
          if (o.fn) o.fn !== t || (i && !o.once) || (s && o.context !== s) || a(this, r);
          else {
            for (var c = 0, l = [], d = o.length; c < d; c++)
              (o[c].fn !== t || (i && !o[c].once) || (s && o[c].context !== s)) && l.push(o[c]);
            l.length ? (this._events[r] = 1 === l.length ? l[0] : l) : a(this, r);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new s()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    93902: (e, t, n) => {
      'use strict';
      n.d(t, { sc: () => d });
      var s = n(43957),
        i = n(29272);
      class r extends i.Vw {
        constructor(e, t, n, s) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = s),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.O8)(this.buffer));
        }
        update(e) {
          (0, s.CC)(this);
          let { view: t, buffer: n, blockLen: r } = this,
            a = (e = (0, i.ZJ)(e)).length;
          for (let s = 0; s < a; ) {
            let o = Math.min(r - this.pos, a - s);
            if (o === r) {
              let t = (0, i.O8)(e);
              for (; r <= a - s; s += r) this.process(t, s);
              continue;
            }
            n.set(e.subarray(s, s + o), this.pos),
              (this.pos += o),
              (s += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, s.CC)(this), (0, s.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: r, isLE: a } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > r - o && (this.process(n, 0), (o = 0));
          for (let e = o; e < r; e++) t[e] = 0;
          !(function (e, t, n, s) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, n, s);
            let i = BigInt(32),
              r = BigInt(0xffffffff),
              a = Number((n >> i) & r),
              o = Number(n & r),
              c = 4 * !!s,
              l = 4 * !s;
            e.setUint32(t + c, a, s), e.setUint32(t + l, o, s);
          })(n, r - 8, BigInt(8 * this.length), a),
            this.process(n, 0);
          let c = (0, i.O8)(e),
            l = this.outputLen;
          if (l % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let d = l / 4,
            u = this.get();
          if (d > u.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < d; e++) c.setUint32(4 * e, u[e], a);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: n, length: s, finished: i, destroyed: r, pos: a } = this;
          return (
            (e.length = s),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = r),
            s % t && e.buffer.set(n),
            e
          );
        }
      }
      let a = new Uint32Array([
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
        o = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class l extends r {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: s, E: i, F: r, G: a, H: o } = this;
          return [e, t, n, s, i, r, a, o];
        }
        set(e, t, n, s, i, r, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | s),
            (this.E = 0 | i),
            (this.F = 0 | r),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              s = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              r = (0, i.Ow)(n, 17) ^ (0, i.Ow)(n, 19) ^ (n >>> 10);
            c[e] = (r + c[e - 7] + s + c[e - 16]) | 0;
          }
          let { A: n, B: s, C: r, D: o, E: l, F: d, G: u, H: h } = this;
          for (let e = 0; e < 64; e++) {
            var p, f, g, m;
            let t =
                (h +
                  ((0, i.Ow)(l, 6) ^ (0, i.Ow)(l, 11) ^ (0, i.Ow)(l, 25)) +
                  (((p = l) & d) ^ (~p & u)) +
                  a[e] +
                  c[e]) |
                0,
              _ =
                (((0, i.Ow)(n, 2) ^ (0, i.Ow)(n, 13) ^ (0, i.Ow)(n, 22)) +
                  (((f = n) & (g = s)) ^ (f & (m = r)) ^ (g & m))) |
                0;
            (h = u),
              (u = d),
              (d = l),
              (l = (o + t) | 0),
              (o = r),
              (r = s),
              (s = n),
              (n = (t + _) | 0);
          }
          (n = (n + this.A) | 0),
            (s = (s + this.B) | 0),
            (r = (r + this.C) | 0),
            (o = (o + this.D) | 0),
            (l = (l + this.E) | 0),
            (d = (d + this.F) | 0),
            (u = (u + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(n, s, r, o, l, d, u, h);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let d = (0, i.ld)(() => new l());
    },
  },
]);
