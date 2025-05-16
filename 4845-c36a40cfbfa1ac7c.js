'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4845],
  {
    18475: (e, x, a) => {
      a.d(x, { Z: () => c });
      let t = new Set();
      function c(e) {
        !t.has(e) &&
          (t.add(e),
          console.log('========= NOTICE ========='),
          console.log(`Request-Rate Exceeded for ${e} (this message will not be repeated)`),
          console.log(''),
          console.log('The default API keys for each service are provided as a highly-throttled,'),
          console.log('community resource for low-traffic projects and early prototyping.'),
          console.log(''),
          console.log('While your application will continue to function, we highly recommended'),
          console.log('signing up for your own API keys to improve performance, increase your'),
          console.log(
            'request rate/limit and enable other perks, such as metrics and advanced APIs.'
          ),
          console.log(''),
          console.log('For more details: https://docs.ethers.org/api-keys/'),
          console.log('=========================='));
      }
    },
    27098: (e, x, a) => {
      a.d(x, { p: () => g });
      var t = a(80876),
        c = a(60270),
        d = a(53165),
        f = a(18475),
        r = a(42761),
        b = a(45356);
      let n = (function () {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if ('undefined' != typeof global) return global;
        throw Error('unable to locate global object');
      })().WebSocket;
      var i = a(12289);
      class s {
        #e;
        #x;
        get filter() {
          return JSON.parse(this.#x);
        }
        #a;
        #t;
        #c;
        constructor(e, x) {
          (this.#e = e),
            (this.#x = JSON.stringify(x)),
            (this.#a = null),
            (this.#t = null),
            (this.#c = null);
        }
        start() {
          this.#a = this.#e
            .send('eth_subscribe', this.filter)
            .then((e) => (this.#e._register(e, this), e));
        }
        stop() {
          this.#a.then((e) => {
            !this.#e.destroyed && this.#e.send('eth_unsubscribe', [e]);
          }),
            (this.#a = null);
        }
        pause(e) {
          (0, t.vA)(
            e,
            'preserve logs while paused not supported by SocketSubscriber yet',
            'UNSUPPORTED_OPERATION',
            { operation: 'pause(false)' }
          ),
            (this.#t = !!e);
        }
        resume() {
          this.#t = null;
        }
        _handleMessage(e) {
          if (null != this.#a && null === this.#t) {
            let x = this.#c;
            (x =
              null == x
                ? this._emit(this.#e, e)
                : x.then(async () => {
                    await this._emit(this.#e, e);
                  })),
              (this.#c = x.then(() => {
                this.#c === x && (this.#c = null);
              }));
          }
        }
        async _emit(e, x) {
          throw Error('sub-classes must implemente this; _emit');
        }
      }
      class o extends s {
        constructor(e) {
          super(e, ['newHeads']);
        }
        async _emit(e, x) {
          e.emit('block', parseInt(x.number));
        }
      }
      class l extends s {
        constructor(e) {
          super(e, ['newPendingTransactions']);
        }
        async _emit(e, x) {
          e.emit('pending', x);
        }
      }
      class u extends s {
        #d;
        get logFilter() {
          return JSON.parse(this.#d);
        }
        constructor(e, x) {
          super(e, ['logs', x]), (this.#d = JSON.stringify(x));
        }
        async _emit(e, x) {
          e.emit(this.logFilter, e._wrapLog(x, e._network));
        }
      }
      class h extends b.R$ {
        #f;
        #r;
        #b;
        constructor(e, x) {
          let a = Object.assign({}, null != x ? x : {});
          (0, t.MR)(
            null == a.batchMaxCount || 1 === a.batchMaxCount,
            'sockets-based providers do not support batches',
            'options.batchMaxCount',
            x
          ),
            (a.batchMaxCount = 1),
            null == a.staticNetwork && (a.staticNetwork = !0),
            super(e, a),
            (this.#f = new Map()),
            (this.#r = new Map()),
            (this.#b = new Map());
        }
        _getSubscriber(e) {
          switch (e.type) {
            case 'close':
              return new i.J('close');
            case 'block':
              return new o(this);
            case 'pending':
              return new l(this);
            case 'event':
              return new u(this, e.filter);
            case 'orphan':
              if ('drop-log' === e.filter.orphan) return new i.J('drop-log');
          }
          return super._getSubscriber(e);
        }
        _register(e, x) {
          this.#r.set(e, x);
          let a = this.#b.get(e);
          if (a) {
            for (let e of a) x._handleMessage(e);
            this.#b.delete(e);
          }
        }
        async _send(e) {
          (0, t.MR)(!Array.isArray(e), 'WebSocket does not support batch send', 'payload', e);
          let x = new Promise((x, a) => {
            this.#f.set(e.id, { payload: e, resolve: x, reject: a });
          });
          return await this._waitUntilReady(), await this._write(JSON.stringify(e)), [await x];
        }
        async _processMessage(e) {
          let x = JSON.parse(e);
          if (x && 'object' == typeof x && 'id' in x) {
            let e = this.#f.get(x.id);
            if (null == e) {
              this.emit(
                'error',
                (0, t.xz)('received result for unknown id', 'UNKNOWN_ERROR', {
                  reasonCode: 'UNKNOWN_ID',
                  result: x,
                })
              );
              return;
            }
            this.#f.delete(x.id), e.resolve(x);
          } else if (x && 'eth_subscription' === x.method) {
            let e = x.params.subscription,
              a = this.#r.get(e);
            if (a) a._handleMessage(x.params.result);
            else {
              let a = this.#b.get(e);
              null == a && ((a = []), this.#b.set(e, a)), a.push(x.params.result);
            }
          } else {
            this.emit(
              'error',
              (0, t.xz)('received unexpected message', 'UNKNOWN_ERROR', {
                reasonCode: 'UNEXPECTED_MESSAGE',
                result: x,
              })
            );
            return;
          }
        }
        async _write(e) {
          throw Error('sub-classes must override this');
        }
      }
      class p extends h {
        #n;
        #i;
        get websocket() {
          if (null == this.#i) throw Error('websocket closed');
          return this.#i;
        }
        constructor(e, x, a) {
          super(x, a),
            'string' == typeof e
              ? ((this.#n = () => new n(e)), (this.#i = this.#n()))
              : 'function' == typeof e
                ? ((this.#n = e), (this.#i = e()))
                : ((this.#n = null), (this.#i = e)),
            (this.websocket.onopen = async () => {
              try {
                await this._start(), this.resume();
              } catch (e) {
                console.log('failed to start WebsocketProvider', e);
              }
            }),
            (this.websocket.onmessage = (e) => {
              this._processMessage(e.data);
            });
        }
        async _write(e) {
          this.websocket.send(e);
        }
        async destroy() {
          null != this.#i && (this.#i.close(), (this.#i = null)), super.destroy();
        }
      }
      let m = '84842078b09946638c03157f83405213';
      class y extends p {
        projectId;
        projectSecret;
        constructor(e, x) {
          let a = new g(e, x),
            d = a._getConnection();
          (0, t.vA)(
            !d.credentials,
            'INFURA WebSocket project secrets unsupported',
            'UNSUPPORTED_OPERATION',
            { operation: 'InfuraProvider.getWebSocketProvider()' }
          ),
            super(d.url.replace(/^http/i, 'ws').replace('/v3/', '/ws/v3/'), a._network),
            (0, c.n)(this, { projectId: a.projectId, projectSecret: a.projectSecret });
        }
        isCommunityResource() {
          return this.projectId === m;
        }
      }
      class g extends b.FR {
        projectId;
        projectSecret;
        constructor(e, x, a) {
          null == e && (e = 'mainnet');
          let t = r.l.from(e);
          null == x && (x = m),
            null == a && (a = null),
            super(g.getRequest(t, x, a), t, { staticNetwork: t }),
            (0, c.n)(this, { projectId: x, projectSecret: a });
        }
        _getProvider(e) {
          try {
            return new g(e, this.projectId, this.projectSecret);
          } catch (e) {}
          return super._getProvider(e);
        }
        isCommunityResource() {
          return this.projectId === m;
        }
        static getWebSocketProvider(e, x) {
          return new y(e, x);
        }
        static getRequest(e, x, a) {
          null == x && (x = m), null == a && (a = null);
          let c = new d.ui(
            `https://${(function (e) {
              switch (e) {
                case 'mainnet':
                  return 'mainnet.infura.io';
                case 'goerli':
                  return 'goerli.infura.io';
                case 'sepolia':
                  return 'sepolia.infura.io';
                case 'arbitrum':
                  return 'arbitrum-mainnet.infura.io';
                case 'arbitrum-goerli':
                  return 'arbitrum-goerli.infura.io';
                case 'arbitrum-sepolia':
                  return 'arbitrum-sepolia.infura.io';
                case 'base':
                  return 'base-mainnet.infura.io';
                case 'base-goerlia':
                  return 'base-goerli.infura.io';
                case 'base-sepolia':
                  return 'base-sepolia.infura.io';
                case 'bnb':
                  return 'bnbsmartchain-mainnet.infura.io';
                case 'bnbt':
                  return 'bnbsmartchain-testnet.infura.io';
                case 'linea':
                  return 'linea-mainnet.infura.io';
                case 'linea-goerli':
                  return 'linea-goerli.infura.io';
                case 'linea-sepolia':
                  return 'linea-sepolia.infura.io';
                case 'matic':
                  return 'polygon-mainnet.infura.io';
                case 'matic-amoy':
                  return 'polygon-amoy.infura.io';
                case 'matic-mumbai':
                  return 'polygon-mumbai.infura.io';
                case 'optimism':
                  return 'optimism-mainnet.infura.io';
                case 'optimism-goerli':
                  return 'optimism-goerli.infura.io';
                case 'optimism-sepolia':
                  return 'optimism-sepolia.infura.io';
              }
              (0, t.MR)(!1, 'unsupported network', 'network', e);
            })(e.name)}/v3/${x}`
          );
          return (
            (c.allowGzip = !0),
            a && c.setCredentials('', a),
            x === m && (c.retryFunc = async (e, x, a) => ((0, f.Z)('InfuraProvider'), !0)),
            c
          );
        }
      }
    },
    27737: (e, x, a) => {
      a.d(x, { R: () => i });
      var t = a(80876),
        c = a(60270),
        d = a(53165),
        f = a(18475),
        r = a(42761),
        b = a(45356);
      let n = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC';
      class i extends b.FR {
        apiKey;
        constructor(e, x) {
          null == e && (e = 'mainnet');
          let a = r.l.from(e);
          null == x && (x = n),
            super(i.getRequest(a, x), a, { staticNetwork: a }),
            (0, c.n)(this, { apiKey: x });
        }
        _getProvider(e) {
          try {
            return new i(e, this.apiKey);
          } catch (e) {}
          return super._getProvider(e);
        }
        async _perform(e) {
          if ('getTransactionResult' === e.method) {
            let x;
            let { trace: a, tx: d } = await (0, c.k)({
              trace: this.send('trace_transaction', [e.hash]),
              tx: this.getTransaction(e.hash),
            });
            if (null == a || null == d) return null;
            let f = !1;
            try {
              (x = a[0].result.output), (f = 'Reverted' === a[0].error);
            } catch (e) {}
            if (x)
              return (
                (0, t.vA)(!f, 'an error occurred during transaction executions', 'CALL_EXCEPTION', {
                  action: 'getTransactionResult',
                  data: x,
                  reason: null,
                  transaction: d,
                  invocation: null,
                  revert: null,
                }),
                x
              );
            (0, t.vA)(!1, 'could not parse trace result', 'BAD_DATA', { value: a });
          }
          return await super._perform(e);
        }
        isCommunityResource() {
          return this.apiKey === n;
        }
        static getRequest(e, x) {
          null == x && (x = n);
          let a = new d.ui(
            `https://${(function (e) {
              switch (e) {
                case 'mainnet':
                  return 'eth-mainnet.alchemyapi.io';
                case 'goerli':
                  return 'eth-goerli.g.alchemy.com';
                case 'sepolia':
                  return 'eth-sepolia.g.alchemy.com';
                case 'arbitrum':
                  return 'arb-mainnet.g.alchemy.com';
                case 'arbitrum-goerli':
                  return 'arb-goerli.g.alchemy.com';
                case 'arbitrum-sepolia':
                  return 'arb-sepolia.g.alchemy.com';
                case 'base':
                  return 'base-mainnet.g.alchemy.com';
                case 'base-goerli':
                  return 'base-goerli.g.alchemy.com';
                case 'base-sepolia':
                  return 'base-sepolia.g.alchemy.com';
                case 'matic':
                  return 'polygon-mainnet.g.alchemy.com';
                case 'matic-amoy':
                  return 'polygon-amoy.g.alchemy.com';
                case 'matic-mumbai':
                  return 'polygon-mumbai.g.alchemy.com';
                case 'optimism':
                  return 'opt-mainnet.g.alchemy.com';
                case 'optimism-goerli':
                  return 'opt-goerli.g.alchemy.com';
                case 'optimism-sepolia':
                  return 'opt-sepolia.g.alchemy.com';
              }
              (0, t.MR)(!1, 'unsupported network', 'network', e);
            })(e.name)}/v2/${x}`
          );
          return (
            (a.allowGzip = !0),
            x === n && (a.retryFunc = async (e, x, a) => ((0, f.Z)('alchemy'), !0)),
            a
          );
        }
      }
    },
    34114: (e, x, a) => {
      a.d(x, { u: () => xC });
      var t,
        c,
        d,
        f,
        r,
        b,
        n,
        i,
        s,
        o = a(93326),
        l = a(80876),
        u = a(44673),
        h = a(26820),
        p = a(42339),
        m = a(92824),
        y = a(84387),
        g = a(12644),
        w = a(33550),
        R = a(87109),
        A = a(73177),
        E = a(57899),
        N = a(98752),
        v = a(1625),
        T = a(60270);
      class I extends A.Z {
        address;
        #s;
        constructor(e, x) {
          super(x),
            (0, l.MR)(
              e && 'function' == typeof e.sign,
              'invalid private key',
              'privateKey',
              '[ REDACTED ]'
            ),
            (this.#s = e);
          let a = (0, N.K)(this.signingKey.publicKey);
          (0, T.n)(this, { address: a });
        }
        get signingKey() {
          return this.#s;
        }
        get privateKey() {
          return this.signingKey.privateKey;
        }
        async getAddress() {
          return this.address;
        }
        connect(e) {
          return new I(this.#s, e);
        }
        async signTransaction(e) {
          e = (0, E.VS)(e);
          let { to: x, from: a } = await (0, T.k)({
            to: e.to ? (0, u.tG)(e.to, this) : void 0,
            from: e.from ? (0, u.tG)(e.from, this) : void 0,
          });
          null != x && (e.to = x),
            null != a && (e.from = a),
            null != e.from &&
              ((0, l.MR)(
                (0, h.b)(e.from) === this.address,
                'transaction from address mismatch',
                'tx.from',
                e.from
              ),
              delete e.from);
          let t = v.Z.from(e);
          return (t.signature = this.signingKey.sign(t.unsignedHash)), t.serialized;
        }
        async signMessage(e) {
          return this.signMessageSync(e);
        }
        signMessageSync(e) {
          var x;
          return this.signingKey.sign(
            ('string' == typeof (x = e) && (x = (0, m.YW)(x)),
            (0, p.S)(
              (0, y.xW)([
                (0, m.YW)('\x19Ethereum Signed Message:\n'),
                (0, m.YW)(String(x.length)),
                x,
              ])
            ))
          ).serialized;
        }
        authorizeSync(e) {
          var x;
          (0, l.MR)(
            'string' == typeof e.address,
            'invalid address for authorizeSync',
            'auth.address',
            e
          );
          let a = this.signingKey.sign(
            ((x = e),
            (0, l.MR)(
              'string' == typeof x.address,
              'invalid address for hashAuthorization',
              'auth.address',
              x
            ),
            (0, p.S)(
              (0, y.xW)([
                '0x05',
                (0, g.R)([
                  null != x.chainId ? (0, w.c4)(x.chainId) : '0x',
                  (0, h.b)(x.address),
                  null != x.nonce ? (0, w.c4)(x.nonce) : '0x',
                ]),
              ])
            ))
          );
          return Object.assign(
            {},
            {
              address: (0, h.b)(e.address),
              nonce: (0, w.Ab)(e.nonce || 0),
              chainId: (0, w.Ab)(e.chainId || 0),
            },
            { signature: a }
          );
        }
        async authorize(e) {
          return (
            (e = Object.assign({}, e, { address: await (0, u.tG)(e.address, this) })),
            this.authorizeSync(await this.populateAuthorization(e))
          );
        }
        async signTypedData(e, x, a) {
          let t = await R.z.resolveNames(e, x, a, async (e) => {
            (0, l.vA)(
              null != this.provider,
              'cannot resolve ENS names without a provider',
              'UNSUPPORTED_OPERATION',
              { operation: 'resolveName', info: { name: e } }
            );
            let x = await this.provider.resolveName(e);
            return (
              (0, l.vA)(null != x, 'unconfigured ENS name', 'UNCONFIGURED_NAME', { value: e }), x
            );
          });
          return this.signingKey.sign(R.z.hash(t.domain, x, t.value)).serialized;
        }
      }
      var O = a(19085),
        k = a(73876);
      let S = !1,
        C = function (e, x, a) {
          return (0, k.Gz)(e, x).update(a).digest();
        },
        M = C;
      function U(e, x, a) {
        let t = (0, y.q5)(x, 'key'),
          c = (0, y.q5)(a, 'data');
        return (0, y.c$)(M(e, t, c));
      }
      (U._ = C),
        (U.lock = function () {
          S = !0;
        }),
        (U.register = function (e) {
          if (S) throw Error('computeHmac is locked');
          M = e;
        }),
        Object.freeze(U);
      var P = a(58616),
        $ = a(63320);
      let D = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
        L = Uint8Array.from({ length: 16 }, (e, x) => x),
        _ = L.map((e) => (9 * e + 5) % 16),
        K = [L],
        W = [_];
      for (let e = 0; e < 4; e++) for (let x of [K, W]) x.push(x[e].map((e) => D[e]));
      let B = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        G = K.map((e, x) => e.map((e) => B[x][e])),
        F = W.map((e, x) => e.map((e) => B[x][e])),
        j = new Uint32Array([0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]),
        z = new Uint32Array([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0]),
        V = (e, x) => (e << x) | (e >>> (32 - x));
      function q(e, x, a, t) {
        return 0 === e
          ? x ^ a ^ t
          : 1 === e
            ? (x & a) | (~x & t)
            : 2 === e
              ? (x | ~a) ^ t
              : 3 === e
                ? (x & t) | (a & ~t)
                : x ^ (a | ~t);
      }
      let Y = new Uint32Array(16);
      class H extends P.D {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 0x67452301),
            (this.h1 = -0x10325477),
            (this.h2 = -0x67452302),
            (this.h3 = 0x10325476),
            (this.h4 = -0x3c2d1e10);
        }
        get() {
          let { h0: e, h1: x, h2: a, h3: t, h4: c } = this;
          return [e, x, a, t, c];
        }
        set(e, x, a, t, c) {
          (this.h0 = 0 | e),
            (this.h1 = 0 | x),
            (this.h2 = 0 | a),
            (this.h3 = 0 | t),
            (this.h4 = 0 | c);
        }
        process(e, x) {
          for (let a = 0; a < 16; a++, x += 4) Y[a] = e.getUint32(x, !0);
          let a = 0 | this.h0,
            t = a,
            c = 0 | this.h1,
            d = c,
            f = 0 | this.h2,
            r = f,
            b = 0 | this.h3,
            n = b,
            i = 0 | this.h4,
            s = i;
          for (let e = 0; e < 5; e++) {
            let x = 4 - e,
              o = j[e],
              l = z[e],
              u = K[e],
              h = W[e],
              p = G[e],
              m = F[e];
            for (let x = 0; x < 16; x++) {
              let t = (V(a + q(e, c, f, b) + Y[u[x]] + o, p[x]) + i) | 0;
              (a = i), (i = b), (b = 0 | V(f, 10)), (f = c), (c = t);
            }
            for (let e = 0; e < 16; e++) {
              let a = (V(t + q(x, d, r, n) + Y[h[e]] + l, m[e]) + s) | 0;
              (t = s), (s = n), (n = 0 | V(r, 10)), (r = d), (d = a);
            }
          }
          this.set(
            (this.h1 + f + n) | 0,
            (this.h2 + b + s) | 0,
            (this.h3 + i + t) | 0,
            (this.h4 + a + d) | 0,
            (this.h0 + c + r) | 0
          );
        }
        roundClean() {
          Y.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      let J = (0, $.ld)(() => new H()),
        X = !1,
        Z = function (e) {
          return J(e);
        },
        Q = Z;
      function ee(e) {
        let x = (0, y.q5)(e, 'data');
        return (0, y.c$)(Q(x));
      }
      (ee._ = Z),
        (ee.lock = function () {
          X = !0;
        }),
        (ee.register = function (e) {
          if (X) throw TypeError('ripemd160 is locked');
          Q = e;
        }),
        Object.freeze(ee);
      let ex = !1,
        ea = function (e) {
          return new Uint8Array((0, k.po)(e));
        },
        et = ea;
      function ec(e) {
        return et(e);
      }
      (ec._ = ea),
        (ec.lock = function () {
          ex = !0;
        }),
        (ec.register = function (e) {
          if (ex) throw Error('randomBytes is locked');
          et = e;
        }),
        Object.freeze(ec);
      var ed = a(58363),
        ef = a(94675);
      let er = " !#$%&'()*+,-./<=>?@[]^_`{|}~",
        eb = /^[a-z]*$/i;
      function en(e, x) {
        let a = 97;
        return e.reduce(
          (e, t) => (
            t === x
              ? a++
              : t.match(eb)
                ? e.push(String.fromCharCode(a) + t)
                : ((a = 97), e.push(t)),
            e
          ),
          []
        );
      }
      class ei {
        locale;
        constructor(e) {
          (0, T.n)(this, { locale: e });
        }
        split(e) {
          return e.toLowerCase().split(/\s+/g);
        }
        join(e) {
          return e.join(' ');
        }
      }
      class es extends ei {
        #o;
        #l;
        constructor(e, x, a) {
          super(e), (this.#o = x), (this.#l = a), (this.#u = null);
        }
        get _data() {
          return this.#o;
        }
        _decodeWords() {
          var e;
          return (
            (e = this.#o),
            (0, l.MR)('0' === e[0], 'unsupported auwl data', 'data', e),
            (function (e, x) {
              for (let a = er.length - 1; a >= 0; a--)
                e = e.split(er[a]).join(x.substring(2 * a, 2 * a + 2));
              let a = [],
                t = e.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (e, x, t, c) => {
                  if (t) for (let e = parseInt(t); e >= 0; e--) a.push(';');
                  else a.push(x.toLowerCase());
                  return '';
                });
              if (t) throw Error(`leftovers: ${JSON.stringify(t)}`);
              return en(en(a, ';'), ':');
            })(e.substring(1 + 2 * er.length), e.substring(1, 1 + 2 * er.length))
          );
        }
        #u;
        #h() {
          if (null == this.#u) {
            let e = this._decodeWords();
            if ((0, ef.id)(e.join('\n') + '\n') !== this.#l)
              throw Error(`BIP39 Wordlist for ${this.locale} FAILED`);
            this.#u = e;
          }
          return this.#u;
        }
        getWord(e) {
          let x = this.#h();
          return (0, l.MR)(e >= 0 && e < x.length, `invalid word index: ${e}`, 'index', e), x[e];
        }
        getWordIndex(e) {
          return this.#h().indexOf(e);
        }
      }
      let eo = null;
      class el extends es {
        constructor() {
          super(
            'en',
            "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO",
            '0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60'
          );
        }
        static wordlist() {
          return null == eo && (eo = new el()), eo;
        }
      }
      let eu = !1,
        eh = function (e, x, a, t, c) {
          return (0, k.T_)(e, x, a, t, c);
        },
        ep = eh;
      function em(e, x, a, t, c) {
        let d = (0, y.q5)(e, 'password'),
          f = (0, y.q5)(x, 'salt');
        return (0, y.c$)(ep(d, f, a, t, c));
      }
      function ey(e) {
        return (((1 << e) - 1) << (8 - e)) & 255;
      }
      function eg(e, x) {
        (0, l.SP)('NFKD'), null == x && (x = el.wordlist());
        let a = x.split(e);
        (0, l.MR)(
          a.length % 3 == 0 && a.length >= 12 && a.length <= 24,
          'invalid mnemonic length',
          'mnemonic',
          '[ REDACTED ]'
        );
        let t = new Uint8Array(Math.ceil((11 * a.length) / 8)),
          c = 0;
        for (let e = 0; e < a.length; e++) {
          let d = x.getWordIndex(a[e].normalize('NFKD'));
          (0, l.MR)(d >= 0, `invalid mnemonic word at index ${e}`, 'mnemonic', '[ REDACTED ]');
          for (let e = 0; e < 11; e++)
            d & (1 << (10 - e)) && (t[c >> 3] |= 1 << (7 - (c % 8))), c++;
        }
        let d = (32 * a.length) / 3,
          f = ey(a.length / 3),
          r = (0, y.q5)((0, O.s)(t.slice(0, d / 8)))[0] & f;
        return (
          (0, l.MR)(
            r === (t[t.length - 1] & f),
            'invalid mnemonic checksum',
            'mnemonic',
            '[ REDACTED ]'
          ),
          (0, y.c$)(t.slice(0, d / 8))
        );
      }
      function ew(e, x) {
        (0, l.MR)(
          e.length % 4 == 0 && e.length >= 16 && e.length <= 32,
          'invalid entropy size',
          'entropy',
          '[ REDACTED ]'
        ),
          null == x && (x = el.wordlist());
        let a = [0],
          t = 11;
        for (let x = 0; x < e.length; x++)
          t > 8
            ? ((a[a.length - 1] <<= 8), (a[a.length - 1] |= e[x]), (t -= 8))
            : ((a[a.length - 1] <<= t),
              (a[a.length - 1] |= e[x] >> (8 - t)),
              a.push(e[x] & (((1 << (8 - t)) - 1) & 255)),
              (t += 3));
        let c = e.length / 4,
          d = parseInt((0, O.s)(e).substring(2, 4), 16) & ey(c);
        return (
          (a[a.length - 1] <<= c),
          (a[a.length - 1] |= d >> (8 - c)),
          x.join(a.map((e) => x.getWord(e)))
        );
      }
      (em._ = eh),
        (em.lock = function () {
          eu = !0;
        }),
        (em.register = function (e) {
          if (eu) throw Error('pbkdf2 is locked');
          ep = e;
        }),
        Object.freeze(em);
      let eR = {};
      class eA {
        phrase;
        password;
        wordlist;
        entropy;
        constructor(e, x, a, t, c) {
          null == t && (t = ''),
            null == c && (c = el.wordlist()),
            (0, l.gk)(e, eR, 'Mnemonic'),
            (0, T.n)(this, { phrase: a, password: t, wordlist: c, entropy: x });
        }
        computeSeed() {
          let e = (0, m.YW)('mnemonic' + this.password, 'NFKD');
          return em((0, m.YW)(this.phrase, 'NFKD'), e, 2048, 64, 'sha512');
        }
        static fromPhrase(e, x, a) {
          let t = eg(e, a);
          return (e = ew((0, y.q5)(t), a)), new eA(eR, t, e, x, a);
        }
        static fromEntropy(e, x, a) {
          let t = (0, y.q5)(e, 'entropy'),
            c = ew(t, a);
          return new eA(eR, (0, y.c$)(t), c, x, a);
        }
        static entropyToPhrase(e, x) {
          return ew((0, y.q5)(e, 'entropy'), x);
        }
        static phraseToEntropy(e, x) {
          return eg(e, x);
        }
        static isValidMnemonic(e, x) {
          try {
            return eg(e, x), !0;
          } catch (e) {}
          return !1;
        }
      }
      var eE = function (e, x, a, t) {
          if ('a' === a && !t) throw TypeError('Private accessor was defined without a getter');
          if ('function' == typeof x ? e !== x || !t : !x.has(e))
            throw TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === a ? t : 'a' === a ? t.call(e) : t ? t.value : x.get(e);
        },
        eN = function (e, x, a, t, c) {
          if ('m' === t) throw TypeError('Private method is not writable');
          if ('a' === t && !c) throw TypeError('Private accessor was defined without a setter');
          if ('function' == typeof x ? e !== x || !c : !x.has(e))
            throw TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === t ? c.call(e, a) : c ? (c.value = a) : x.set(e, a), a;
        };
      let ev = { 16: 10, 24: 12, 32: 14 },
        eT = [
          1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151,
          53, 106, 212, 179, 125, 250, 239, 197, 145,
        ],
        eI = [
          99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201,
          125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63,
          247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18,
          128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227,
          47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239,
          170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157,
          56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196,
          167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222,
          94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231,
          200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46,
          28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246,
          14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30,
          135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176,
          84, 187, 22,
        ],
        eO = [
          82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57,
          130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194,
          35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91,
          162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93,
          101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132,
          144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143,
          202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
          151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249,
          55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24,
          190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31,
          221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25,
          181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176,
          200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99,
          85, 33, 12, 125,
        ],
        ek = [
          0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1,
          0x91c5c554, 0x60303050, 0x2010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762,
          0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15,
          0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea,
          0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae,
          0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4,
          0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x804040c,
          0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0xa05050f, 0x2f9a9ab5,
          0xe070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd,
          0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2,
          0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b,
          0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0, 0xc1eded2c, 0x40202060,
          0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b,
          0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5,
          0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910,
          0x4020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3,
          0x5da3a3fe, 0x804040c0, 0x58f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504,
          0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e,
          0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2,
          0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac,
          0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f,
          0x44222266, 0x542a2a7e, 0x3b9090ab, 0xb888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3,
          0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256,
          0x743a3a4e, 0x140a0a1e, 0x924949db, 0xc06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d,
          0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b,
          0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x18d8d8c, 0xb1d5d564, 0x9c4e4ed2,
          0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e,
          0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24,
          0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21,
          0x964b4bdd, 0x61bdbddc, 0xd8b8b86, 0xf8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4,
          0xcc6666aa, 0x904848d8, 0x6030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f,
          0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138,
          0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x78e8e89, 0x339494a7,
          0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878,
          0xa5dfdf7a, 0x38c8c8f, 0x59a1a1f8, 0x9898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631,
          0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb,
          0xa85454fc, 0x6dbbbbd6, 0x2c16163a,
        ],
        eS = [
          0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0xdfff2f2, 0xbdd66b6b, 0xb1de6f6f,
          0x5491c5c5, 0x50603030, 0x3020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7,
          0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa,
          0xebb25959, 0xc98e4747, 0xbfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf,
          0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393,
          0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x2f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5,
          0x34d1e5e5, 0x8f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0xc080404,
          0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0xf0a0505, 0xb52f9a9a,
          0x90e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2,
          0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e,
          0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929,
          0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0, 0x2cc1eded, 0x60402020,
          0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939,
          0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa,
          0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9,
          0x6040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151,
          0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x4f1f5f5,
          0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0xefdf3f3,
          0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797,
          0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464,
          0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc,
          0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8,
          0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232,
          0x4e743a3a, 0x1e140a0a, 0xdb924949, 0xa0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2,
          0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979,
          0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e,
          0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x7f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a,
          0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c,
          0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f,
          0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5,
          0xaacc6666, 0xd8904848, 0x5060303, 0x1f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535,
          0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1,
          0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494,
          0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828,
          0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6,
          0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0,
          0xfca85454, 0xd66dbbbb, 0x3a2c1616,
        ],
        eC = [
          0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f,
          0xc55491c5, 0x30506030, 0x1030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7,
          0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa,
          0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af,
          0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93,
          0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5,
          0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x40c0804,
          0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x50f0a05, 0x9ab52f9a,
          0x7090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2,
          0x759fea75, 0x91b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e,
          0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229,
          0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0, 0xed2cc1ed, 0x20604020,
          0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239,
          0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa,
          0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9,
          0x2060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251,
          0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5,
          0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3,
          0xd26dbfd2, 0xcd4c81cd, 0xc14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597,
          0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864,
          0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc,
          0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8,
          0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0xb1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432,
          0x3a4e743a, 0xa1e140a, 0x49db9249, 0x60a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2,
          0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279,
          0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e,
          0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a,
          0xaee947ae, 0x8181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c,
          0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f,
          0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5,
          0x66aacc66, 0x48d89048, 0x3050603, 0xf601f7f6, 0xe121c0e, 0x61a3c261, 0x355f6a35,
          0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1,
          0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394,
          0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028,
          0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0xd171a0d, 0xbfda65bf, 0xe631d7e6,
          0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0xf111e0f, 0xb0cb7bb0,
          0x54fca854, 0xbbd66dbb, 0x163a2c16,
        ],
        eM = [
          0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de,
          0xc5c55491, 0x30305060, 0x1010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5,
          0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef,
          0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45,
          0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d,
          0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451,
          0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x4040c08,
          0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x5050f0a, 0x9a9ab52f,
          0x707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f,
          0x75759fea, 0x9091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc,
          0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52,
          0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0, 0xeded2cc1, 0x20206040,
          0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72,
          0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f,
          0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9,
          0x2020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2,
          0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1,
          0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd,
          0xd2d26dbf, 0xcdcd4c81, 0xc0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235,
          0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8,
          0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3,
          0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b,
          0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0xb0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664,
          0x3a3a4e74, 0xa0a1e14, 0x4949db92, 0x6060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f,
          0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2,
          0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c,
          0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4,
          0xaeaee947, 0x8081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438,
          0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e,
          0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471,
          0x6666aacc, 0x4848d890, 0x3030506, 0xf6f601f7, 0xe0e121c, 0x6161a3c2, 0x35355f6a,
          0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9,
          0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733,
          0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850,
          0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0xd0d171a, 0xbfbfda65, 0xe6e631d7,
          0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0xf0f111e, 0xb0b0cb7b,
          0x5454fca8, 0xbbbbd66d, 0x16163a2c,
        ],
        eU = [
          0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab,
          0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7,
          0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502,
          0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x38f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da,
          0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b,
          0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182,
          0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858,
          0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a,
          0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x2036aba,
          0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x605bed5,
          0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x58ae132, 0xa4f6eb75, 0xb83ec39,
          0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46,
          0x91548db5, 0x71c45d05, 0x406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc,
          0x67d99e77, 0xb0e842bd, 0x7898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9,
          0xf8841ec9, 0, 0x9808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0xf853856,
          0x3daed51e, 0x362d3927, 0xa0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0xc0a67b1,
          0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16,
          0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0xe090d0b, 0xf28bc7ad, 0x2db6a8b9,
          0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc,
          0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca,
          0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d,
          0x1d9e2f4b, 0xdcb230f3, 0xd8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa,
          0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1,
          0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4,
          0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5,
          0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e,
          0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e,
          0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af,
          0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815,
          0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54,
          0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x18c355d,
          0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c,
          0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c,
          0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14,
          0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c,
          0x283c498b, 0xff0d9541, 0x39a80171, 0x80cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461,
          0xd532b670, 0x486c5c74, 0xd0b85742,
        ],
        eP = [
          0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58,
          0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb,
          0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x2c32f75,
          0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259,
          0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e,
          0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31,
          0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868,
          0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab,
          0x7b2eb28, 0x32fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a,
          0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be,
          0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec,
          0xaa4060ef, 0x65e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd,
          0xb591548d, 0x571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043,
          0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f,
          0xc9f8841e, 0, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538,
          0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67,
          0xf9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a,
          0xae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0xb0e090d, 0xadf28bc7, 0xb92db6a8,
          0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5,
          0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc,
          0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1,
          0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448,
          0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1,
          0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d,
          0xd507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af,
          0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63,
          0x7bdb3bbb, 0x9cd2678, 0xf46e5918, 0x1ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6,
          0x821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2,
          0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8,
          0x4af10498, 0xf741ecda, 0xe7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d,
          0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x49d5eea, 0x5d018c35,
          0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761,
          0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1,
          0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f,
          0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0xcbce225,
          0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84,
          0x70d532b6, 0x74486c5c, 0x42d0b857,
        ],
        e$ = [
          0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa,
          0x3934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a,
          0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0xe9845ea, 0xc0e15dfe, 0x7502c32f,
          0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552,
          0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 1047239e3,
          0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a,
          0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048,
          0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x2e2724b, 0x8f57e31f, 0xab2a6655,
          0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x8a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203,
          0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605,
          0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83,
          0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x63d96dd, 0x5aedd3e, 0xbd464de6,
          0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940,
          0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0xa47a17c, 0xfe97c42,
          0x1ec9f884, 0, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85,
          0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a,
          0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12,
          0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0xd0b0e09, 0xc7adf28b, 0xa8b92db6,
          0xa9c8141e, 0x198557f1, 0x74caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72,
          0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731,
          0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729,
          0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194,
          0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938,
          0xa2fe8cca, 0xb3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a,
          0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3,
          0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c,
          0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff,
          0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x9d4ea9f, 0x7cd629b0, 0xb2af31a4,
          0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7,
          0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa,
          0x4dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c,
          0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7,
          0xc7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47,
          0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d,
          0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2,
          0x498b283c, 0x9541ff0d, 0x17139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb,
          0xb670d532, 0x5c74486c, 0x5742d0b8,
        ],
        eD = [
          0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac,
          0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x24c25f5, 0xe5d7fc4f, 0x2acbd7c5,
          0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3,
          0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95,
          0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99,
          0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5,
          0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x82b94f9, 0x48685870,
          0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66,
          0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 679998e3, 0xbfa5b223, 0x36aba02,
          0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x7f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x5bed506,
          0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b,
          0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d,
          0x548db591, 0xc45d0571, 0x6d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89,
          0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c,
          0x841ec9f8, 0, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0xefffbfd, 0x8538560f,
          0xaed51e3d, 0x2d392736, 0xfd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0xa67b10c,
          0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c,
          0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x90d0b0e, 0x8bc7adf2, 0xb6a8b92d,
          0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x1269ff7, 0x72f5bc5c,
          0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7,
          0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7,
          0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11,
          0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9,
          0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c,
          0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582,
          0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8,
          0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa,
          0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31,
          0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533,
          0x4984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc,
          0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01,
          0x877473fa, 0xb412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a,
          0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a,
          0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df,
          0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc,
          0x3c498b28, 0xd9541ff, 0xa8017139, 0xcb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b,
          0x32b670d5, 0x6c5c7448, 0xb85742d0,
        ],
        eL = [
          0, 0xe090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331,
          0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662,
          0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997,
          0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4,
          0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66,
          0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935,
          0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0,
          0x27b971dd, 0x29b07cd6, 0x38f5fe7, 0xd8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393,
          0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2,
          0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc,
          0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89,
          0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a,
          0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203,
          0x58ae132, 0xb83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b,
          0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x605bed5, 0x80cb3de,
          0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d,
          0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c,
          0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f,
          0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0,
          0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x9808683,
          0x7898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a,
          0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809,
          0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87,
          0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4,
          0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5,
          0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06,
          0x5078920d, 0xa0fd964, 0x406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043,
          0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d,
          0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844,
          0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0xc0a67b1, 0x2036aba, 0x10187da7,
          0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2,
          0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a,
          0x39a80171, 0x2bb3166c, 0x25ba1b67, 0xf853856, 0x18c355d, 0x13972240, 0x1d9e2f4b,
          0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18,
          0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed,
          0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be,
          0x91548db5, 0x834f9aa8, 0x8d4697a3,
        ],
        e_ = [
          0, 0xb0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23,
          0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46,
          0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9,
          0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c,
          0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac,
          0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9,
          0x3eb968c4, 0xf9357e7, 0x49d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266,
          0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303,
          0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20,
          0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043,
          0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c,
          0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289,
          0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x821bccf, 0x32fb5c2,
          0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc,
          0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3,
          0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06,
          0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x7b2eb28, 0xcbce225,
          0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340,
          0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3,
          0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086,
          0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d,
          0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x9cd2678,
          0x2c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c,
          0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09,
          0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a,
          0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x65e719f,
          0xd507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0,
          0x5e2e39f7, 0x552030fa, 0x1ec9ab7, 0xae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83,
          0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8,
          0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d,
          0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02,
          0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c,
          0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f,
          0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0xe7fcd50, 0x571c45d, 0x1863df4a,
          0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5,
          0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80,
          0xb591548d, 0xa8834f9a, 0xa38d4697,
        ],
        eK = [
          0, 0xd0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f,
          0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e,
          0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd,
          0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc,
          0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920,
          0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761,
          0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2,
          0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x3934be3,
          0xe9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc,
          0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940,
          0x4ec78749, 0x5aedd3e, 0x8a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13,
          0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2,
          0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5,
          0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f,
          0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c,
          0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x63d96dd,
          0xb3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2,
          0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3,
          0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1,
          0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980,
          0x8b880789, 0x9c951592, 0x919e1b9b, 0xa47a17c, 0x74caf75, 0x1051bd6e, 0x1d5ab367,
          1047239e3, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26,
          0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de,
          0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x9d4ea9f,
          0x4dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0,
          0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71,
          0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22,
          0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be,
          0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9,
          0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018,
          0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0xfe97c42, 0x2e2724b,
          0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0xc7a37a1,
          0x17139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e,
          0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df,
          0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c,
          0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d,
          0x8db59154, 0x9aa8834f, 0x97a38d46,
        ],
        eW = [
          0, 0x90d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a,
          0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254,
          0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6,
          0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8,
          0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9,
          0x1f8f57e3, 0x16825ced, 0xd9541ff, 0x4984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7,
          0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035,
          0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b,
          0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261,
          0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89,
          0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb,
          0x82b94f9, 0x1269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75,
          0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f,
          0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a,
          0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x5bed506, 0xcb3de08,
          0x17a4c31a, 0x1ea9c814, 0x218af93e, 679998e3, 0x3390ef22, 0x3a9de42c, 0xdd063d96,
          0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc,
          0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2,
          0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077,
          0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309,
          0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3,
          0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd,
          0x2f7502c3, 0x105633e9, 0x195b38e7, 0x24c25f5, 0xb412efb, 0xd7618c9a, 0xde6c8794,
          0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea,
          0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0,
          0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e,
          0x78920d50, 0xfd9640a, 0x6d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c,
          0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4,
          0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e,
          0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0xa67b10c, 0x36aba02, 0x187da710,
          0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272,
          0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37,
          0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d,
          0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863,
          0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1,
          0x7f2f0f3, 0xefffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f,
          0x548db591, 0x4f9aa883, 0x4697a38d,
        ];
      function eB(e) {
        let x = [];
        for (let a = 0; a < e.length; a += 4)
          x.push((e[a] << 24) | (e[a + 1] << 16) | (e[a + 2] << 8) | e[a + 3]);
        return x;
      }
      class eG {
        get key() {
          return eE(this, t, 'f').slice();
        }
        constructor(e) {
          let x;
          if (
            (t.set(this, void 0), c.set(this, void 0), d.set(this, void 0), !(this instanceof eG))
          )
            throw Error('AES must be instanitated with `new`');
          eN(this, t, new Uint8Array(e), 'f');
          let a = ev[this.key.length];
          if (null == a) throw TypeError('invalid key size (must be 16, 24 or 32 bytes)');
          eN(this, d, [], 'f'), eN(this, c, [], 'f');
          for (let e = 0; e <= a; e++)
            eE(this, d, 'f').push([0, 0, 0, 0]), eE(this, c, 'f').push([0, 0, 0, 0]);
          let f = (a + 1) * 4,
            r = this.key.length / 4,
            b = eB(this.key);
          for (let e = 0; e < r; e++)
            (x = e >> 2),
              (eE(this, d, 'f')[x][e % 4] = b[e]),
              (eE(this, c, 'f')[a - x][e % 4] = b[e]);
          let n = 0,
            i = r,
            s;
          for (; i < f; ) {
            if (
              ((s = b[r - 1]),
              (b[0] ^=
                (eI[(s >> 16) & 255] << 24) ^
                (eI[(s >> 8) & 255] << 16) ^
                (eI[255 & s] << 8) ^
                eI[(s >> 24) & 255] ^
                (eT[n] << 24)),
              (n += 1),
              8 != r)
            )
              for (let e = 1; e < r; e++) b[e] ^= b[e - 1];
            else {
              for (let e = 1; e < r / 2; e++) b[e] ^= b[e - 1];
              (s = b[r / 2 - 1]),
                (b[r / 2] ^=
                  eI[255 & s] ^
                  (eI[(s >> 8) & 255] << 8) ^
                  (eI[(s >> 16) & 255] << 16) ^
                  (eI[(s >> 24) & 255] << 24));
              for (let e = r / 2 + 1; e < r; e++) b[e] ^= b[e - 1];
            }
            let e = 0,
              x,
              t;
            for (; e < r && i < f; )
              (x = i >> 2),
                (t = i % 4),
                (eE(this, d, 'f')[x][t] = b[e]),
                (eE(this, c, 'f')[a - x][t] = b[e++]),
                i++;
          }
          for (let e = 1; e < a; e++)
            for (let x = 0; x < 4; x++)
              (s = eE(this, c, 'f')[e][x]),
                (eE(this, c, 'f')[e][x] =
                  eL[(s >> 24) & 255] ^ e_[(s >> 16) & 255] ^ eK[(s >> 8) & 255] ^ eW[255 & s]);
        }
        encrypt(e) {
          if (16 != e.length) throw TypeError('invalid plaintext size (must be 16 bytes)');
          let x = eE(this, d, 'f').length - 1,
            a = [0, 0, 0, 0],
            t = eB(e);
          for (let e = 0; e < 4; e++) t[e] ^= eE(this, d, 'f')[0][e];
          for (let e = 1; e < x; e++) {
            for (let x = 0; x < 4; x++)
              a[x] =
                ek[(t[x] >> 24) & 255] ^
                eS[(t[(x + 1) % 4] >> 16) & 255] ^
                eC[(t[(x + 2) % 4] >> 8) & 255] ^
                eM[255 & t[(x + 3) % 4]] ^
                eE(this, d, 'f')[e][x];
            t = a.slice();
          }
          let c = new Uint8Array(16),
            f = 0;
          for (let e = 0; e < 4; e++)
            (f = eE(this, d, 'f')[x][e]),
              (c[4 * e] = (eI[(t[e] >> 24) & 255] ^ (f >> 24)) & 255),
              (c[4 * e + 1] = (eI[(t[(e + 1) % 4] >> 16) & 255] ^ (f >> 16)) & 255),
              (c[4 * e + 2] = (eI[(t[(e + 2) % 4] >> 8) & 255] ^ (f >> 8)) & 255),
              (c[4 * e + 3] = (eI[255 & t[(e + 3) % 4]] ^ f) & 255);
          return c;
        }
        decrypt(e) {
          if (16 != e.length) throw TypeError('invalid ciphertext size (must be 16 bytes)');
          let x = eE(this, c, 'f').length - 1,
            a = [0, 0, 0, 0],
            t = eB(e);
          for (let e = 0; e < 4; e++) t[e] ^= eE(this, c, 'f')[0][e];
          for (let e = 1; e < x; e++) {
            for (let x = 0; x < 4; x++)
              a[x] =
                eU[(t[x] >> 24) & 255] ^
                eP[(t[(x + 3) % 4] >> 16) & 255] ^
                e$[(t[(x + 2) % 4] >> 8) & 255] ^
                eD[255 & t[(x + 1) % 4]] ^
                eE(this, c, 'f')[e][x];
            t = a.slice();
          }
          let d = new Uint8Array(16),
            f = 0;
          for (let e = 0; e < 4; e++)
            (f = eE(this, c, 'f')[x][e]),
              (d[4 * e] = (eO[(t[e] >> 24) & 255] ^ (f >> 24)) & 255),
              (d[4 * e + 1] = (eO[(t[(e + 3) % 4] >> 16) & 255] ^ (f >> 16)) & 255),
              (d[4 * e + 2] = (eO[(t[(e + 2) % 4] >> 8) & 255] ^ (f >> 8)) & 255),
              (d[4 * e + 3] = (eO[255 & t[(e + 1) % 4]] ^ f) & 255);
          return d;
        }
      }
      (t = new WeakMap()), (c = new WeakMap()), (d = new WeakMap());
      class eF {
        constructor(e, x, a) {
          if (a && !(this instanceof a)) throw Error(`${e} must be instantiated with "new"`);
          Object.defineProperties(this, {
            aes: { enumerable: !0, value: new eG(x) },
            name: { enumerable: !0, value: e },
          });
        }
      }
      var ej = function (e, x, a, t, c) {
          if ('m' === t) throw TypeError('Private method is not writable');
          if ('a' === t && !c) throw TypeError('Private accessor was defined without a setter');
          if ('function' == typeof x ? e !== x || !c : !x.has(e))
            throw TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === t ? c.call(e, a) : c ? (c.value = a) : x.set(e, a), a;
        },
        ez = function (e, x, a, t) {
          if ('a' === a && !t) throw TypeError('Private accessor was defined without a getter');
          if ('function' == typeof x ? e !== x || !t : !x.has(e))
            throw TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === a ? t : 'a' === a ? t.call(e) : t ? t.value : x.get(e);
        };
      class eV extends eF {
        constructor(e, x) {
          if ((super('ECC', e, eV), f.set(this, void 0), r.set(this, void 0), x)) {
            if (x.length % 16) throw TypeError('invalid iv size (must be 16 bytes)');
            ej(this, f, new Uint8Array(x), 'f');
          } else ej(this, f, new Uint8Array(16), 'f');
          ej(this, r, this.iv, 'f');
        }
        get iv() {
          return new Uint8Array(ez(this, f, 'f'));
        }
        encrypt(e) {
          if (e.length % 16)
            throw TypeError('invalid plaintext size (must be multiple of 16 bytes)');
          let x = new Uint8Array(e.length);
          for (let a = 0; a < e.length; a += 16) {
            for (let x = 0; x < 16; x++) ez(this, r, 'f')[x] ^= e[a + x];
            ej(this, r, this.aes.encrypt(ez(this, r, 'f')), 'f'), x.set(ez(this, r, 'f'), a);
          }
          return x;
        }
        decrypt(e) {
          if (e.length % 16)
            throw TypeError('invalid ciphertext size (must be multiple of 16 bytes)');
          let x = new Uint8Array(e.length);
          for (let a = 0; a < e.length; a += 16) {
            let t = this.aes.decrypt(e.subarray(a, a + 16));
            for (let c = 0; c < 16; c++)
              (x[a + c] = t[c] ^ ez(this, r, 'f')[c]), (ez(this, r, 'f')[c] = e[a + c]);
          }
          return x;
        }
      }
      (f = new WeakMap()), (r = new WeakMap());
      new WeakMap(), new WeakMap(), new WeakSet();
      var eq = function (e, x, a, t, c) {
          if ('m' === t) throw TypeError('Private method is not writable');
          if ('a' === t && !c) throw TypeError('Private accessor was defined without a setter');
          if ('function' == typeof x ? e !== x || !c : !x.has(e))
            throw TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === t ? c.call(e, a) : c ? (c.value = a) : x.set(e, a), a;
        },
        eY = function (e, x, a, t) {
          if ('a' === a && !t) throw TypeError('Private accessor was defined without a getter');
          if ('function' == typeof x ? e !== x || !t : !x.has(e))
            throw TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === a ? t : 'a' === a ? t.call(e) : t ? t.value : x.get(e);
        };
      class eH extends eF {
        constructor(e, x) {
          super('CTR', e, eH),
            n.set(this, void 0),
            i.set(this, void 0),
            s.set(this, void 0),
            eq(this, s, new Uint8Array(16), 'f'),
            eY(this, s, 'f').fill(0),
            eq(this, n, eY(this, s, 'f'), 'f'),
            eq(this, i, 16, 'f'),
            null == x && (x = 1),
            'number' == typeof x ? this.setCounterValue(x) : this.setCounterBytes(x);
        }
        get counter() {
          return new Uint8Array(eY(this, s, 'f'));
        }
        setCounterValue(e) {
          if (!Number.isInteger(e) || e < 0 || e > Number.MAX_SAFE_INTEGER)
            throw TypeError('invalid counter initial integer value');
          for (let x = 15; x >= 0; --x) (eY(this, s, 'f')[x] = e % 256), (e = Math.floor(e / 256));
        }
        setCounterBytes(e) {
          if (16 !== e.length) throw TypeError('invalid counter initial Uint8Array value length');
          eY(this, s, 'f').set(e);
        }
        increment() {
          for (let e = 15; e >= 0; e--)
            if (255 === eY(this, s, 'f')[e]) eY(this, s, 'f')[e] = 0;
            else {
              eY(this, s, 'f')[e]++;
              break;
            }
        }
        encrypt(e) {
          var x, a;
          let t = new Uint8Array(e);
          for (let e = 0; e < t.length; e++)
            16 === eY(this, i, 'f') &&
              (eq(this, n, this.aes.encrypt(eY(this, s, 'f')), 'f'),
              eq(this, i, 0, 'f'),
              this.increment()),
              (t[e] ^= eY(this, n, 'f')[
                (eq(this, i, ((a = eY(this, i, 'f')), (x = a++), a), 'f'), x)
              ]);
          return t;
        }
        decrypt(e) {
          return this.encrypt(e);
        }
      }
      (n = new WeakMap()),
        (i = new WeakMap()),
        (s = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      var eJ = a(54062),
        eX = a(61552),
        eZ = a(48658);
      let eQ = (e, x) => (e << x) | (e >>> (32 - x));
      function e0(e, x, a, t, c, d) {
        let f = e[x++] ^ a[t++],
          r = e[x++] ^ a[t++],
          b = e[x++] ^ a[t++],
          n = e[x++] ^ a[t++],
          i = e[x++] ^ a[t++],
          s = e[x++] ^ a[t++],
          o = e[x++] ^ a[t++],
          l = e[x++] ^ a[t++],
          u = e[x++] ^ a[t++],
          h = e[x++] ^ a[t++],
          p = e[x++] ^ a[t++],
          m = e[x++] ^ a[t++],
          y = e[x++] ^ a[t++],
          g = e[x++] ^ a[t++],
          w = e[x++] ^ a[t++],
          R = e[x++] ^ a[t++],
          A = f,
          E = r,
          N = b,
          v = n,
          T = i,
          I = s,
          O = o,
          k = l,
          S = u,
          C = h,
          M = p,
          U = m,
          P = y,
          $ = g,
          D = w,
          L = R;
        for (let e = 0; e < 8; e += 2)
          (T ^= eQ((A + P) | 0, 7)),
            (S ^= eQ((T + A) | 0, 9)),
            (P ^= eQ((S + T) | 0, 13)),
            (A ^= eQ((P + S) | 0, 18)),
            (C ^= eQ((I + E) | 0, 7)),
            ($ ^= eQ((C + I) | 0, 9)),
            (E ^= eQ(($ + C) | 0, 13)),
            (I ^= eQ((E + $) | 0, 18)),
            (D ^= eQ((M + O) | 0, 7)),
            (N ^= eQ((D + M) | 0, 9)),
            (O ^= eQ((N + D) | 0, 13)),
            (M ^= eQ((O + N) | 0, 18)),
            (v ^= eQ((L + U) | 0, 7)),
            (k ^= eQ((v + L) | 0, 9)),
            (U ^= eQ((k + v) | 0, 13)),
            (L ^= eQ((U + k) | 0, 18)),
            (E ^= eQ((A + v) | 0, 7)),
            (N ^= eQ((E + A) | 0, 9)),
            (v ^= eQ((N + E) | 0, 13)),
            (A ^= eQ((v + N) | 0, 18)),
            (O ^= eQ((I + T) | 0, 7)),
            (k ^= eQ((O + I) | 0, 9)),
            (T ^= eQ((k + O) | 0, 13)),
            (I ^= eQ((T + k) | 0, 18)),
            (U ^= eQ((M + C) | 0, 7)),
            (S ^= eQ((U + M) | 0, 9)),
            (C ^= eQ((S + U) | 0, 13)),
            (M ^= eQ((C + S) | 0, 18)),
            (P ^= eQ((L + D) | 0, 7)),
            ($ ^= eQ((P + L) | 0, 9)),
            (D ^= eQ(($ + P) | 0, 13)),
            (L ^= eQ((D + $) | 0, 18));
        (c[d++] = (f + A) | 0),
          (c[d++] = (r + E) | 0),
          (c[d++] = (b + N) | 0),
          (c[d++] = (n + v) | 0),
          (c[d++] = (i + T) | 0),
          (c[d++] = (s + I) | 0),
          (c[d++] = (o + O) | 0),
          (c[d++] = (l + k) | 0),
          (c[d++] = (u + S) | 0),
          (c[d++] = (h + C) | 0),
          (c[d++] = (p + M) | 0),
          (c[d++] = (m + U) | 0),
          (c[d++] = (y + P) | 0),
          (c[d++] = (g + $) | 0),
          (c[d++] = (w + D) | 0),
          (c[d++] = (R + L) | 0);
      }
      function e1(e, x, a, t, c) {
        let d = t + 0,
          f = t + 16 * c;
        for (let t = 0; t < 16; t++) a[f + t] = e[x + (2 * c - 1) * 16 + t];
        for (let t = 0; t < c; t++, d += 16, x += 16)
          e0(a, f, e, x, a, d), t > 0 && (f += 16), e0(a, d, e, (x += 16), a, f);
      }
      function e2(e, x, a) {
        let {
          N: t,
          r: c,
          p: d,
          dkLen: f,
          asyncTick: r,
          maxmem: b,
          onProgress: n,
        } = (0, $.tY)({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, a);
        if (
          ((0, eJ.ai)(t),
          (0, eJ.ai)(c),
          (0, eJ.ai)(d),
          (0, eJ.ai)(f),
          (0, eJ.ai)(r),
          (0, eJ.ai)(b),
          void 0 !== n && 'function' != typeof n)
        )
          throw Error('progressCb should be function');
        let i = 128 * c,
          s = i / 4;
        if (t <= 1 || (t & (t - 1)) != 0 || t >= 2 ** (i / 8) || t > 0x100000000)
          throw Error(
            'Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32'
          );
        if (d < 0 || d > ((0x100000000 - 1) * 32) / i)
          throw Error(
            'Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)'
          );
        if (f < 0 || f > (0x100000000 - 1) * 32)
          throw Error(
            'Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32'
          );
        let o = i * (t + d);
        if (o > b)
          throw Error(`Scrypt: parameters too large, ${o} (128 * r * (N + p)) > ${b} (maxmem)`);
        let l = (0, eZ.A)(eX.s, e, x, { c: 1, dkLen: i * d }),
          u = (0, $.DH)(l),
          h = (0, $.DH)(new Uint8Array(i * t)),
          p = (0, $.DH)(new Uint8Array(i)),
          m = () => {};
        if (n) {
          let e = 2 * t * d,
            x = Math.max(Math.floor(e / 1e4), 1),
            a = 0;
          m = () => {
            a++, n && (!(a % x) || a === e) && n(a / e);
          };
        }
        return {
          N: t,
          r: c,
          p: d,
          dkLen: f,
          blockSize32: s,
          V: h,
          B32: u,
          B: l,
          tmp: p,
          blockMixCb: m,
          asyncTick: r,
        };
      }
      function e5(e, x, a, t, c) {
        let d = (0, eZ.A)(eX.s, e, a, { c: 1, dkLen: x });
        return a.fill(0), t.fill(0), c.fill(0), d;
      }
      async function e3(e, x, a) {
        let {
          N: t,
          r: c,
          p: d,
          dkLen: f,
          blockSize32: r,
          V: b,
          B32: n,
          B: i,
          tmp: s,
          blockMixCb: o,
          asyncTick: l,
        } = e2(e, x, a);
        for (let e = 0; e < d; e++) {
          let x = r * e;
          for (let e = 0; e < r; e++) b[e] = n[x + e];
          let a = 0;
          await (0, $.$h)(t - 1, l, () => {
            e1(b, a, b, (a += r), c), o();
          }),
            e1(b, (t - 1) * r, n, x, c),
            o(),
            await (0, $.$h)(t, l, () => {
              let e = n[x + r - 16] % t;
              for (let a = 0; a < r; a++) s[a] = n[x + a] ^ b[e * r + a];
              e1(s, 0, n, x, c), o();
            });
        }
        return e5(e, f, i, b, s);
      }
      let e4 = !1,
        e6 = !1,
        e8 = async function (e, x, a, t, c, d, f) {
          return await e3(e, x, { N: a, r: t, p: c, dkLen: d, onProgress: f });
        },
        e7 = function (e, x, a, t, c, d) {
          return (function (e, x, a) {
            let {
              N: t,
              r: c,
              p: d,
              dkLen: f,
              blockSize32: r,
              V: b,
              B32: n,
              B: i,
              tmp: s,
              blockMixCb: o,
            } = e2(e, x, a);
            for (let e = 0; e < d; e++) {
              let x = r * e;
              for (let e = 0; e < r; e++) b[e] = n[x + e];
              for (let e = 0, x = 0; e < t - 1; e++) e1(b, x, b, (x += r), c), o();
              e1(b, (t - 1) * r, n, x, c), o();
              for (let e = 0; e < t; e++) {
                let e = n[x + r - 16] % t;
                for (let a = 0; a < r; a++) s[a] = n[x + a] ^ b[e * r + a];
                e1(s, 0, n, x, c), o();
              }
            }
            return e5(e, f, i, b, s);
          })(e, x, { N: a, r: t, p: c, dkLen: d });
        },
        e9 = e8,
        xe = e7;
      async function xx(e, x, a, t, c, d, f) {
        let r = (0, y.q5)(e, 'passwd'),
          b = (0, y.q5)(x, 'salt');
        return (0, y.c$)(await e9(r, b, a, t, c, d, f));
      }
      function xa(e, x, a, t, c, d) {
        let f = (0, y.q5)(e, 'passwd'),
          r = (0, y.q5)(x, 'salt');
        return (0, y.c$)(xe(f, r, a, t, c, d));
      }
      function xt(e) {
        return 'string' != typeof e || e.startsWith('0x') || (e = '0x' + e), (0, y.Lm)(e);
      }
      function xc(e, x) {
        for (e = String(e); e.length < x; ) e = '0' + e;
        return e;
      }
      function xd(e) {
        return 'string' == typeof e ? (0, m.YW)(e, 'NFKC') : (0, y.Lm)(e);
      }
      function xf(e, x) {
        let a = x.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
        (0, l.MR)(null != a, 'invalid path', 'path', x);
        let t = a[1],
          c = a[3],
          d = '!' === a[4],
          f = e;
        for (let e of t.toLowerCase().split('.')) {
          if (Array.isArray(f)) {
            if (!e.match(/^[0-9]+$/)) break;
            f = f[parseInt(e)];
          } else if ('object' == typeof f) {
            let x = null;
            for (let a in f)
              if (a.toLowerCase() === e) {
                x = f[a];
                break;
              }
            f = x;
          } else f = null;
          if (null == f) break;
        }
        if (((0, l.MR)(!d || null != f, 'missing required value', 'path', t), c && null != f)) {
          if ('int' === c) {
            if ('string' == typeof f && f.match(/^-?[0-9]+$/)) return parseInt(f);
            if (Number.isSafeInteger(f)) return f;
          }
          if ('number' === c && 'string' == typeof f && f.match(/^-?[0-9.]*$/))
            return parseFloat(f);
          if ('data' === c && 'string' == typeof f) return xt(f);
          if (('array' === c && Array.isArray(f)) || c === typeof f) return f;
          (0, l.MR)(!1, `wrong type found for ${c} `, 'path', t);
        }
        return f;
      }
      (xx._ = e8),
        (xx.lock = function () {
          e6 = !0;
        }),
        (xx.register = function (e) {
          if (e6) throw Error('scrypt is locked');
          e9 = e;
        }),
        Object.freeze(xx),
        (xa._ = e7),
        (xa.lock = function () {
          e4 = !0;
        }),
        (xa.register = function (e) {
          if (e4) throw Error('scryptSync is locked');
          xe = e;
        }),
        Object.freeze(xa);
      var xr = a(80006);
      let xb = "m/44'/60'/0'/0/0";
      function xn(e) {
        try {
          let x = JSON.parse(e),
            a = null != x.version ? parseInt(x.version) : 0;
          if (3 === a) return !0;
        } catch (e) {}
        return !1;
      }
      function xi(e, x) {
        let a = (0, y.q5)(x),
          t = xf(e, 'crypto.ciphertext:data!'),
          c = (0, y.c$)((0, p.S)((0, y.xW)([a.slice(16, 32), t]))).substring(2);
        (0, l.MR)(
          c === xf(e, 'crypto.mac:string!').toLowerCase(),
          'incorrect password',
          'password',
          '[ REDACTED ]'
        );
        let d = (function (e, x, a) {
            if ('aes-128-ctr' === xf(e, 'crypto.cipher:string')) {
              let t = new eH(x, xf(e, 'crypto.cipherparams.iv:data!'));
              return (0, y.c$)(t.decrypt(a));
            }
            (0, l.vA)(!1, 'unsupported cipher', 'UNSUPPORTED_OPERATION', { operation: 'decrypt' });
          })(e, a.slice(0, 16), t),
          f = (0, N.K)(d);
        if (e.address) {
          let x = e.address.toLowerCase();
          x.startsWith('0x') || (x = '0x' + x),
            (0, l.MR)(
              (0, h.b)(x) === f,
              'keystore address/privateKey mismatch',
              'address',
              e.address
            );
        }
        let r = { address: f, privateKey: d };
        if ('0.1' === xf(e, 'x-ethers.version:string')) {
          let x = a.slice(32, 64),
            t = xf(e, 'x-ethers.mnemonicCiphertext:data!'),
            c = new eH(x, xf(e, 'x-ethers.mnemonicCounter:data!'));
          r.mnemonic = {
            path: xf(e, 'x-ethers.path:string') || xb,
            locale: xf(e, 'x-ethers.locale:string') || 'en',
            entropy: (0, y.c$)((0, y.q5)(c.decrypt(t))),
          };
        }
        return r;
      }
      function xs(e) {
        let x = xf(e, 'crypto.kdf:string');
        if (x && 'string' == typeof x) {
          if ('scrypt' === x.toLowerCase()) {
            let a = xf(e, 'crypto.kdfparams.salt:data!'),
              t = xf(e, 'crypto.kdfparams.n:int!'),
              c = xf(e, 'crypto.kdfparams.r:int!'),
              d = xf(e, 'crypto.kdfparams.p:int!');
            (0, l.MR)(t > 0 && (t & (t - 1)) == 0, 'invalid kdf.N', 'kdf.N', t),
              (0, l.MR)(c > 0 && d > 0, 'invalid kdf', 'kdf', x);
            let f = xf(e, 'crypto.kdfparams.dklen:int!');
            return (
              (0, l.MR)(32 === f, 'invalid kdf.dklen', 'kdf.dflen', f),
              { name: 'scrypt', salt: a, N: t, r: c, p: d, dkLen: 64 }
            );
          }
          if ('pbkdf2' === x.toLowerCase()) {
            let x = xf(e, 'crypto.kdfparams.salt:data!'),
              a = xf(e, 'crypto.kdfparams.prf:string!'),
              t = a.split('-').pop();
            (0, l.MR)('sha256' === t || 'sha512' === t, 'invalid kdf.pdf', 'kdf.pdf', a);
            let c = xf(e, 'crypto.kdfparams.c:int!'),
              d = xf(e, 'crypto.kdfparams.dklen:int!');
            return (
              (0, l.MR)(32 === d, 'invalid kdf.dklen', 'kdf.dklen', d),
              { name: 'pbkdf2', salt: x, count: c, dkLen: d, algorithm: t }
            );
          }
        }
        (0, l.MR)(!1, 'unsupported key-derivation function', 'kdf', x);
      }
      function xo(e) {
        return new Promise((x) => {
          setTimeout(() => {
            x();
          }, e);
        });
      }
      async function xl(e, x, a) {
        let t = JSON.parse(e),
          c = xd(x),
          d = xs(t);
        if ('pbkdf2' === d.name) {
          a && (a(0), await xo(0));
          let { salt: e, count: x, dkLen: f, algorithm: r } = d,
            b = em(c, e, x, f, r);
          return a && (a(1), await xo(0)), xi(t, b);
        }
        (0, l.vA)('scrypt' === d.name, 'cannot be reached', 'UNKNOWN_ERROR', { params: d });
        let { salt: f, N: r, r: b, p: n, dkLen: i } = d;
        return xi(t, await xx(c, f, r, b, n, i, a));
      }
      function xu(e) {
        let x = null != e.salt ? (0, y.q5)(e.salt, 'options.salt') : ec(32),
          a = 131072,
          t = 8,
          c = 1;
        return (
          e.scrypt &&
            (e.scrypt.N && (a = e.scrypt.N),
            e.scrypt.r && (t = e.scrypt.r),
            e.scrypt.p && (c = e.scrypt.p)),
          (0, l.MR)(
            'number' == typeof a &&
              a > 0 &&
              Number.isSafeInteger(a) &&
              (BigInt(a) & BigInt(a - 1)) === BigInt(0),
            'invalid scrypt N parameter',
            'options.N',
            a
          ),
          (0, l.MR)(
            'number' == typeof t && t > 0 && Number.isSafeInteger(t),
            'invalid scrypt r parameter',
            'options.r',
            t
          ),
          (0, l.MR)(
            'number' == typeof c && c > 0 && Number.isSafeInteger(c),
            'invalid scrypt p parameter',
            'options.p',
            c
          ),
          { name: 'scrypt', dkLen: 32, salt: x, N: a, r: t, p: c }
        );
      }
      function xh(e, x, a, t) {
        let c = (0, y.q5)(a.privateKey, 'privateKey'),
          d = null != t.iv ? (0, y.q5)(t.iv, 'options.iv') : ec(16);
        (0, l.MR)(16 === d.length, 'invalid options.iv length', 'options.iv', t.iv);
        let f = null != t.uuid ? (0, y.q5)(t.uuid, 'options.uuid') : ec(16);
        (0, l.MR)(16 === f.length, 'invalid options.uuid length', 'options.uuid', t.iv);
        let r = e.slice(0, 16),
          b = e.slice(16, 32),
          n = new eH(r, d),
          i = (0, y.q5)(n.encrypt(c)),
          s = (0, p.S)((0, y.xW)([b, i])),
          o = {
            address: a.address.substring(2).toLowerCase(),
            id: (function (e) {
              let x = (0, y.q5)(e, 'randomBytes');
              (x[6] = (15 & x[6]) | 64), (x[8] = (63 & x[8]) | 128);
              let a = (0, y.c$)(x);
              return [
                a.substring(2, 10),
                a.substring(10, 14),
                a.substring(14, 18),
                a.substring(18, 22),
                a.substring(22, 34),
              ].join('-');
            })(f),
            version: 3,
            Crypto: {
              cipher: 'aes-128-ctr',
              cipherparams: { iv: (0, y.c$)(d).substring(2) },
              ciphertext: (0, y.c$)(i).substring(2),
              kdf: 'scrypt',
              kdfparams: {
                salt: (0, y.c$)(x.salt).substring(2),
                n: x.N,
                dklen: 32,
                p: x.p,
                r: x.r,
              },
              mac: s.substring(2),
            },
          };
        if (a.mnemonic) {
          let x = null != t.client ? t.client : `ethers/${xr.r}`,
            c = a.mnemonic.path || xb,
            d = a.mnemonic.locale || 'en',
            f = e.slice(32, 64),
            r = (0, y.q5)(a.mnemonic.entropy, 'account.mnemonic.entropy'),
            b = ec(16),
            n = new eH(f, b),
            i = (0, y.q5)(n.encrypt(r)),
            s = new Date(),
            l =
              'UTC--' +
              (s.getUTCFullYear() +
                '-' +
                xc(s.getUTCMonth() + 1, 2) +
                '-' +
                xc(s.getUTCDate(), 2) +
                'T' +
                xc(s.getUTCHours(), 2) +
                '-' +
                xc(s.getUTCMinutes(), 2) +
                '-' +
                xc(s.getUTCSeconds(), 2)) +
              '.0Z--' +
              o.address;
          o['x-ethers'] = {
            client: x,
            gethFilename: l,
            path: c,
            locale: d,
            mnemonicCounter: (0, y.c$)(b).substring(2),
            mnemonicCiphertext: (0, y.c$)(i).substring(2),
            version: '0.1',
          };
        }
        return JSON.stringify(o);
      }
      function xp(e, x, a) {
        null == a && (a = {});
        let t = xd(x),
          c = xu(a),
          d = xa(t, c.salt, c.N, c.r, c.p, 64);
        return xh((0, y.q5)(d), c, e, a);
      }
      async function xm(e, x, a) {
        null == a && (a = {});
        let t = xd(x),
          c = xu(a),
          d = await xx(t, c.salt, c.N, c.r, c.p, 64, a.progressCallback);
        return xh((0, y.q5)(d), c, e, a);
      }
      let xy = "m/44'/60'/0'/0/0",
        xg = new Uint8Array([66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100]),
        xw = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
      function xR(e, x) {
        let a = '';
        for (; e; ) (a = '0123456789abcdef'[e % 16] + a), (e = Math.trunc(e / 16));
        for (; a.length < 2 * x; ) a = '0' + a;
        return '0x' + a;
      }
      function xA(e) {
        let x = (0, y.q5)(e),
          a = (0, y.ZG)((0, O.s)((0, O.s)(x)), 0, 4),
          t = (0, y.xW)([x, a]);
        return (0, ed.R)(t);
      }
      let xE = {};
      function xN(e, x, a, t) {
        let c = new Uint8Array(37);
        0x80000000 & e
          ? ((0, l.vA)(null != t, 'cannot derive child of neutered node', 'UNSUPPORTED_OPERATION', {
              operation: 'deriveChild',
            }),
            c.set((0, y.q5)(t), 1))
          : c.set((0, y.q5)(a));
        for (let x = 24; x >= 0; x -= 8) c[33 + (x >> 3)] = (e >> (24 - x)) & 255;
        let d = (0, y.q5)(U('sha512', x, c));
        return { IL: d.slice(0, 32), IR: d.slice(32) };
      }
      function xv(e, x) {
        let a = x.split('/');
        (0, l.MR)(a.length > 0, 'invalid path', 'path', x),
          'm' === a[0] &&
            ((0, l.MR)(
              0 === e.depth,
              `cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth ${e.depth}`,
              'path',
              x
            ),
            a.shift());
        let t = e;
        for (let e = 0; e < a.length; e++) {
          let x = a[e];
          if (x.match(/^[0-9]+'$/)) {
            let a = parseInt(x.substring(0, x.length - 1));
            (0, l.MR)(a < 0x80000000, 'invalid path index', `path[${e}]`, x),
              (t = t.deriveChild(0x80000000 + a));
          } else if (x.match(/^[0-9]+$/)) {
            let a = parseInt(x);
            (0, l.MR)(a < 0x80000000, 'invalid path index', `path[${e}]`, x),
              (t = t.deriveChild(a));
          } else (0, l.MR)(!1, 'invalid path component', `path[${e}]`, x);
        }
        return t;
      }
      class xT extends I {
        publicKey;
        fingerprint;
        parentFingerprint;
        mnemonic;
        chainCode;
        path;
        index;
        depth;
        constructor(e, x, a, t, c, d, f, r, b) {
          super(x, b),
            (0, l.gk)(e, xE, 'HDNodeWallet'),
            (0, T.n)(this, { publicKey: x.compressedPublicKey });
          let n = (0, y.ZG)(ee((0, O.s)(this.publicKey)), 0, 4);
          (0, T.n)(this, {
            parentFingerprint: a,
            fingerprint: n,
            chainCode: t,
            path: c,
            index: d,
            depth: f,
          }),
            (0, T.n)(this, { mnemonic: r });
        }
        connect(e) {
          return new xT(
            xE,
            this.signingKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.mnemonic,
            e
          );
        }
        #p() {
          let e = { address: this.address, privateKey: this.privateKey },
            x = this.mnemonic;
          return (
            this.path &&
              x &&
              'en' === x.wordlist.locale &&
              '' === x.password &&
              (e.mnemonic = { path: this.path, locale: 'en', entropy: x.entropy }),
            e
          );
        }
        async encrypt(e, x) {
          return await xm(this.#p(), e, { progressCallback: x });
        }
        encryptSync(e) {
          return xp(this.#p(), e);
        }
        get extendedKey() {
          return (
            (0, l.vA)(this.depth < 256, 'Depth too deep', 'UNSUPPORTED_OPERATION', {
              operation: 'extendedKey',
            }),
            xA(
              (0, y.xW)([
                '0x0488ADE4',
                xR(this.depth, 1),
                this.parentFingerprint,
                xR(this.index, 4),
                this.chainCode,
                (0, y.xW)(['0x00', this.privateKey]),
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        neuter() {
          return new xI(
            xE,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.provider
          );
        }
        deriveChild(e) {
          let x = (0, w.WZ)(e, 'index');
          (0, l.MR)(x <= 0xffffffff, 'invalid index', 'index', x);
          let a = this.path;
          a && ((a += '/' + (0x7fffffff & x)), 0x80000000 & x && (a += "'"));
          let { IR: t, IL: c } = xN(x, this.chainCode, this.publicKey, this.privateKey);
          return new xT(
            xE,
            new o.h((0, w.up)(((0, w.Dg)(c) + BigInt(this.privateKey)) % xw, 32)),
            this.fingerprint,
            (0, y.c$)(t),
            a,
            x,
            this.depth + 1,
            this.mnemonic,
            this.provider
          );
        }
        derivePath(e) {
          return xv(this, e);
        }
        static #m(e, x) {
          (0, l.MR)((0, y.f)(e), 'invalid seed', 'seed', '[REDACTED]');
          let a = (0, y.q5)(e, 'seed');
          (0, l.MR)(a.length >= 16 && a.length <= 64, 'invalid seed', 'seed', '[REDACTED]');
          let t = (0, y.q5)(U('sha512', xg, a));
          return new xT(
            xE,
            new o.h((0, y.c$)(t.slice(0, 32))),
            '0x00000000',
            (0, y.c$)(t.slice(32)),
            'm',
            0,
            0,
            x,
            null
          );
        }
        static fromExtendedKey(e) {
          let x = (0, w.c4)((0, ed.H)(e));
          (0, l.MR)(
            82 === x.length || xA(x.slice(0, 78)) === e,
            'invalid extended key',
            'extendedKey',
            '[ REDACTED ]'
          );
          let a = x[4],
            t = (0, y.c$)(x.slice(5, 9)),
            c = parseInt((0, y.c$)(x.slice(9, 13)).substring(2), 16),
            d = (0, y.c$)(x.slice(13, 45)),
            f = x.slice(45, 78);
          switch ((0, y.c$)(x.slice(0, 4))) {
            case '0x0488b21e':
            case '0x043587cf': {
              let e = (0, y.c$)(f);
              return new xI(xE, (0, N.K)(e), e, t, d, null, c, a, null);
            }
            case '0x0488ade4':
            case '0x04358394 ':
              if (0 !== f[0]) break;
              return new xT(xE, new o.h(f.slice(1)), t, d, null, c, a, null, null);
          }
          (0, l.MR)(!1, 'invalid extended key prefix', 'extendedKey', '[ REDACTED ]');
        }
        static createRandom(e, x, a) {
          null == e && (e = ''), null == x && (x = xy), null == a && (a = el.wordlist());
          let t = eA.fromEntropy(ec(16), e, a);
          return xT.#m(t.computeSeed(), t).derivePath(x);
        }
        static fromMnemonic(e, x) {
          return x || (x = xy), xT.#m(e.computeSeed(), e).derivePath(x);
        }
        static fromPhrase(e, x, a, t) {
          null == x && (x = ''), null == a && (a = xy), null == t && (t = el.wordlist());
          let c = eA.fromPhrase(e, x, t);
          return xT.#m(c.computeSeed(), c).derivePath(a);
        }
        static fromSeed(e) {
          return xT.#m(e, null);
        }
      }
      class xI extends A.J {
        publicKey;
        fingerprint;
        parentFingerprint;
        chainCode;
        path;
        index;
        depth;
        constructor(e, x, a, t, c, d, f, r, b) {
          super(x, b), (0, l.gk)(e, xE, 'HDNodeVoidWallet'), (0, T.n)(this, { publicKey: a });
          let n = (0, y.ZG)(ee((0, O.s)(a)), 0, 4);
          (0, T.n)(this, {
            publicKey: a,
            fingerprint: n,
            parentFingerprint: t,
            chainCode: c,
            path: d,
            index: f,
            depth: r,
          });
        }
        connect(e) {
          return new xI(
            xE,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            e
          );
        }
        get extendedKey() {
          return (
            (0, l.vA)(this.depth < 256, 'Depth too deep', 'UNSUPPORTED_OPERATION', {
              operation: 'extendedKey',
            }),
            xA(
              (0, y.xW)([
                '0x0488B21E',
                xR(this.depth, 1),
                this.parentFingerprint,
                xR(this.index, 4),
                this.chainCode,
                this.publicKey,
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        deriveChild(e) {
          let x = (0, w.WZ)(e, 'index');
          (0, l.MR)(x <= 0xffffffff, 'invalid index', 'index', x);
          let a = this.path;
          a && ((a += '/' + (0x7fffffff & x)), 0x80000000 & x && (a += "'"));
          let { IR: t, IL: c } = xN(x, this.chainCode, this.publicKey, null),
            d = o.h.addPoints(c, this.publicKey, !0);
          return new xI(
            xE,
            (0, N.K)(d),
            d,
            this.fingerprint,
            (0, y.c$)(t),
            a,
            x,
            this.depth + 1,
            this.provider
          );
        }
        derivePath(e) {
          return xv(this, e);
        }
      }
      function xO(e) {
        try {
          if (JSON.parse(e).encseed) return !0;
        } catch (e) {}
        return !1;
      }
      function xk(e, x) {
        let a = JSON.parse(e),
          t = xd(x),
          c = (0, h.b)(xf(a, 'ethaddr:string!')),
          d = xt(xf(a, 'encseed:string!'));
        (0, l.MR)(d && d.length % 16 == 0, 'invalid encseed', 'json', e);
        let f = (0, y.q5)(em(t, t, 2e3, 32, 'sha256')).slice(0, 16),
          r = d.slice(0, 16),
          b = d.slice(16),
          n = new eV(f, r),
          i = (function (e) {
            if (e.length < 16) throw TypeError('PKCS#7 invalid length');
            let x = e[e.length - 1];
            if (x > 16) throw TypeError('PKCS#7 padding byte out of range');
            let a = e.length - x;
            for (let t = 0; t < x; t++)
              if (e[a + t] !== x) throw TypeError('PKCS#7 invalid padding byte');
            return new Uint8Array(e.subarray(0, a));
          })((0, y.q5)(n.decrypt(b))),
          s = '';
        for (let e = 0; e < i.length; e++) s += String.fromCharCode(i[e]);
        return { address: c, privateKey: (0, ef.id)(s) };
      }
      function xS(e) {
        return new Promise((x) => {
          setTimeout(() => {
            x();
          }, e);
        });
      }
      class xC extends I {
        constructor(e, x) {
          'string' != typeof e || e.startsWith('0x') || (e = '0x' + e),
            super('string' == typeof e ? new o.h(e) : e, x);
        }
        connect(e) {
          return new xC(this.signingKey, e);
        }
        async encrypt(e, x) {
          let a = { address: this.address, privateKey: this.privateKey };
          return await xm(a, e, { progressCallback: x });
        }
        encryptSync(e) {
          return xp({ address: this.address, privateKey: this.privateKey }, e);
        }
        static #y(e) {
          if (
            ((0, l.MR)(e, 'invalid JSON wallet', 'json', '[ REDACTED ]'),
            'mnemonic' in e && e.mnemonic && 'en' === e.mnemonic.locale)
          ) {
            let x = eA.fromEntropy(e.mnemonic.entropy),
              a = xT.fromMnemonic(x, e.mnemonic.path);
            if (a.address === e.address && a.privateKey === e.privateKey) return a;
            console.log(
              'WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key'
            );
          }
          let x = new xC(e.privateKey);
          return (
            (0, l.MR)(
              x.address === e.address,
              'address/privateKey mismatch',
              'json',
              '[ REDACTED ]'
            ),
            x
          );
        }
        static async fromEncryptedJson(e, x, a) {
          let t = null;
          return (
            xn(e)
              ? (t = await xl(e, x, a))
              : xO(e) && (a && (a(0), await xS(0)), (t = xk(e, x)), a && (a(1), await xS(0))),
            xC.#y(t)
          );
        }
        static fromEncryptedJsonSync(e, x) {
          let a = null;
          return (
            xn(e)
              ? (a = (function (e, x) {
                  let a = JSON.parse(e),
                    t = xd(x),
                    c = xs(a);
                  if ('pbkdf2' === c.name) {
                    let { salt: e, count: x, dkLen: d, algorithm: f } = c;
                    return xi(a, em(t, e, x, d, f));
                  }
                  (0, l.vA)('scrypt' === c.name, 'cannot be reached', 'UNKNOWN_ERROR', {
                    params: c,
                  });
                  let { salt: d, N: f, r, p: b, dkLen: n } = c;
                  return xi(a, xa(t, d, f, r, b, n));
                })(e, x))
              : xO(e)
                ? (a = xk(e, x))
                : (0, l.MR)(!1, 'invalid JSON wallet', 'json', '[ REDACTED ]'),
            xC.#y(a)
          );
        }
        static createRandom(e) {
          let x = xT.createRandom();
          return e ? x.connect(e) : x;
        }
        static fromPhrase(e, x) {
          let a = xT.fromPhrase(e);
          return x ? a.connect(x) : a;
        }
      }
    },
    91057: (e, x, a) => {
      a.d(x, { U: () => b });
      var t = a(1475),
        c = a(92277),
        d = a(33319),
        f = a(42339),
        r = a(92824);
      class b {
        constructor(e) {
          Object.defineProperty(this, 'abi', {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            (this.abi = e);
        }
        getFunctionSelector(e) {
          let x = this.getFunctionByName(e),
            a = x?.inputs;
          if (!a) throw Error;
          let c = a.map((e) => t.aX.from(e));
          return n(b.getSignature(e, c)).substring(0, 10);
        }
        getEventTopic(e) {
          let x = this.getEventByName(e),
            a = x?.inputs;
          if (!a) throw Error;
          let c = a.map((e) => t.aX.from(e, !0));
          return n(b.getSignature(e, c));
        }
        decodeConstructor(e) {
          let x = this.getConstructor(),
            a = x?.inputs;
          if (!a) throw Error;
          let d = a.map((e) => t.aX.from(e)),
            f = i(c.y.defaultAbiCoder().decode(d, e), d);
          return { inputs: d, values: f };
        }
        decodeEvent(e, x) {
          let a = this.getEventByTopic(e[0]),
            [, ...f] = e,
            r = a?.inputs;
          if (!r) throw Error;
          let b = r.map((e) => t.aX.from(e, !0)),
            n = b
              .filter((e) => e.indexed)
              .map((e, x) => {
                let a = f[x],
                  [t] = c.y.defaultAbiCoder().decode([e], a);
                return t;
              }),
            s = b.filter((e) => !e.indexed),
            o = c.y.defaultAbiCoder().decode(s, x);
          if (!a.name) throw Error;
          let l = 0,
            u = 0,
            h = new d.Q7();
          for (let e of b) e.indexed ? (h.push(n[l]), l++) : (h.push(o[u]), u++);
          let p = i(h, b);
          return { name: a.name, inputs: b, values: p };
        }
        decodeFunction(e) {
          let x = e.substring(0, 10),
            a = this.getFunctionBySelector(x),
            d = a?.inputs;
          if (!d) throw Error;
          let f = d.map((e) => t.aX.from(e)),
            r = `0x${e.substring(10)}`,
            b = i(c.y.defaultAbiCoder().decode(f, r), f);
          if (!a.name) throw Error;
          return { name: a.name, inputs: f, values: b };
        }
        decodeFunctionOutput(e, x) {
          let a = this.getFunctionByName(e),
            d = a?.outputs;
          if (!d) throw Error;
          let f = d.map((e) => t.aX.from(e)),
            r = i(c.y.defaultAbiCoder().decode(f, x), f);
          return { name: e, outputs: f, values: r };
        }
        encodeConstructor(e) {
          let x = this.getConstructor(),
            a = x?.inputs;
          if (!a) throw Error;
          let d = a.map((e) => t.aX.from(e)),
            f = s(e, d);
          return c.y.defaultAbiCoder().encode(d, f);
        }
        encodeEvent(e, x) {
          let a = this.getEventByName(e),
            f = a?.inputs;
          if (!f) throw Error;
          let r = f.map((e) => t.aX.from(e, !0)),
            i = n(b.getSignature(e, r)),
            s = new d.Q7(),
            o = [];
          for (let e = 0; e < r.length; e++) {
            let a = r[e],
              t = x[a.name];
            a.indexed ? s.push(t) : o.push(t);
          }
          let l = [
              i,
              ...r
                .filter((e) => e.indexed)
                .map((e, x) => c.y.defaultAbiCoder().encode([e], [s[x]])),
            ],
            u = r.filter((e) => !e.indexed);
          return { topics: l, data: c.y.defaultAbiCoder().encode(u, o) };
        }
        encodeFunction(e, x) {
          let a = this.getFunctionByName(e),
            d = a?.inputs;
          if (!d) throw Error;
          let f = d.map((e) => t.aX.from(e)),
            r = n(b.getSignature(e, f)).substring(2, 10),
            i = s(x, f),
            o = c.y.defaultAbiCoder().encode(f, i).substring(2);
          return `0x${r}${o}`;
        }
        encodeFunctionOutput(e, x) {
          let a = this.getFunctionByName(e).outputs;
          if (!a) throw Error;
          let d = a.map((e) => t.aX.from(e)),
            f = s(x, d);
          return c.y.defaultAbiCoder().encode(d, f);
        }
        getConstructor() {
          let e = this.abi.find((e) => 'constructor' === e.type);
          if (!e) throw Error;
          return e;
        }
        getFunctionByName(e) {
          let x = this.abi.find((x) => 'function' === x.type && x.name === e);
          if (!x) throw Error;
          return x;
        }
        getFunctionBySelector(e) {
          let x = this.abi
            .filter((e) => 'function' === e.type || 'error' === e.type)
            .find((x) => {
              let a = x.name,
                c = x.inputs;
              if (!a || !c) return !1;
              let d = c.map((e) => t.aX.from(e));
              return n(b.getSignature(a, d)).substring(0, 10) === e;
            });
          if (!x) throw Error;
          return x;
        }
        getEventByName(e) {
          let x = this.abi.find((x) => 'event' === x.type && x.name === e);
          if (!x) throw Error;
          return x;
        }
        getEventByTopic(e) {
          let x = this.abi
            .filter((e) => 'event' === e.type)
            .find((x) => {
              let a = x.name,
                c = x.inputs;
              if (!a || !c) return !1;
              let d = c.map((e) => t.aX.from(e, !0));
              return n(b.getSignature(a, d)) === e;
            });
          if (!x) throw Error;
          return x;
        }
        static getSignature(e, x) {
          let a = [];
          for (let e of x) {
            let x = this.getInputSignature(e);
            a.push(x);
          }
          let t = a.join(',');
          return `${e}(${t})`;
        }
        static getInputSignature(e) {
          if ('array' === e.baseType) {
            let x = e.arrayLength && e.arrayLength >= 0 ? `[${e.arrayLength}]` : '[]';
            if (!e.arrayChildren) throw Error;
            return `${this.getInputSignature(e.arrayChildren)}${x}`;
          }
          if ('tuple' === e.baseType) {
            if (!e.components) throw Error;
            return `(${e.components.map((e) => this.getInputSignature(e)).join(',')})`;
          }
          return e.type;
        }
      }
      function n(e) {
        return (0, f.S)((0, r.YW)(e));
      }
      function i(e, x) {
        return Object.fromEntries(e.toArray().map((e, a) => [x[a].name, e]));
      }
      function s(e, x) {
        return x.map((x) => e[x.name]);
      }
    },
  },
]);
