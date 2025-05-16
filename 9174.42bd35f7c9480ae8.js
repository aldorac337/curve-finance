'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9174],
  {
    34767: (e, t, s) => {
      s.d(t, { Ai: () => i, OC: () => n }), Symbol();
      let r = Symbol(),
        o = Object.getPrototypeOf,
        a = new WeakMap(),
        l = (e) =>
          e && (a.has(e) ? a.get(e) : o(e) === Object.prototype || o(e) === Array.prototype),
        i = (e) => (l(e) && e[r]) || null,
        n = (e, t = !0) => {
          a.set(e, t);
        };
    },
    83795: (e, t, s) => {
      s.d(t, {
        mb: () => v,
        Ao: () => f,
        vZ: () => g,
        pV: () => R,
        D8: () => $,
        IN: () => b,
        jL: () => u,
        lH: () => Z,
        dC: () => G,
      });
      var r = s(34767);
      let o = (e) => 'object' == typeof e && null !== e,
        a = new WeakMap(),
        l = new WeakSet(),
        [i] = ((
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          s = (e) =>
            o(e) &&
            !l.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          i = (e) => {
            switch (e.status) {
              case 'fulfilled':
                return e.value;
              case 'rejected':
                throw e.reason;
              default:
                throw e;
            }
          },
          n = new WeakMap(),
          c = (e, t, s = i) => {
            let o = n.get(e);
            if ((null == o ? void 0 : o[0]) === t) return o[1];
            let d = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
            return (
              (0, r.OC)(d, !0),
              n.set(e, [t, d]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(d, t)) return;
                let o = Reflect.get(e, t),
                  i = { value: o, enumerable: !0, configurable: !0 };
                if (l.has(o)) (0, r.OC)(o, !1);
                else if (o instanceof Promise) delete i.value, (i.get = () => s(o));
                else if (a.has(o)) {
                  let [e, t] = a.get(o);
                  i.value = c(e, t(), s);
                }
                Object.defineProperty(d, t, i);
              }),
              Object.preventExtensions(d)
            );
          },
          d = new WeakMap(),
          p = [1, 1],
          u = (i) => {
            if (!o(i)) throw Error('object required');
            let n = d.get(i);
            if (n) return n;
            let f = p[0],
              h = new Set(),
              g = (e, t = ++p[0]) => {
                f !== t && ((f = t), h.forEach((s) => s(e, t)));
              },
              m = p[1],
              b = (e = ++p[1]) => (
                m === e ||
                  h.size ||
                  ((m = e),
                  v.forEach(([t]) => {
                    let s = t[1](e);
                    s > f && (f = s);
                  })),
                f
              ),
              y = (e) => (t, s) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), g(r, s);
              },
              v = new Map(),
              w = (e, t) => {
                if (v.has(e)) throw Error('prop listener already exists');
                if (h.size) {
                  let s = t[3](y(e));
                  v.set(e, [t, s]);
                } else v.set(e, [t]);
              },
              I = (e) => {
                var t;
                let s = v.get(e);
                s && (v.delete(e), null == (t = s[1]) || t.call(s));
              },
              C = (e) => {
                h.add(e),
                  1 === h.size &&
                    v.forEach(([e, t], s) => {
                      if (t) throw Error('remove already exists');
                      let r = e[3](y(s));
                      v.set(s, [e, r]);
                    });
                let t = () => {
                  h.delete(e),
                    0 === h.size &&
                      v.forEach(([e, t], s) => {
                        t && (t(), v.set(s, [e]));
                      });
                };
                return t;
              },
              O = Array.isArray(i) ? [] : Object.create(Object.getPrototypeOf(i)),
              W = {
                deleteProperty(e, t) {
                  let s = Reflect.get(e, t);
                  I(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && g(['delete', [t], s]), r;
                },
                set(t, i, n, c) {
                  let p = Reflect.has(t, i),
                    f = Reflect.get(t, i, c);
                  if (p && (e(f, n) || (d.has(n) && e(f, d.get(n))))) return !0;
                  I(i), o(n) && (n = (0, r.Ai)(n) || n);
                  let h = n;
                  if (n instanceof Promise)
                    n.then((e) => {
                      (n.status = 'fulfilled'), (n.value = e), g(['resolve', [i], e]);
                    }).catch((e) => {
                      (n.status = 'rejected'), (n.reason = e), g(['reject', [i], e]);
                    });
                  else {
                    !a.has(n) && s(n) && (h = u(n));
                    let e = !l.has(h) && a.get(h);
                    e && w(i, e);
                  }
                  return Reflect.set(t, i, h, c), g(['set', [i], n, f]), !0;
                },
              },
              E = t(O, W);
            d.set(i, E);
            let L = [O, b, c, C];
            return (
              a.set(E, L),
              Reflect.ownKeys(i).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(i, e);
                'value' in t && ((E[e] = i[e]), delete t.value, delete t.writable),
                  Object.defineProperty(O, e, t);
              }),
              E
            );
          }
        ) => [u, a, l, e, t, s, i, n, c, d, p])();
      function n(e = {}) {
        return i(e);
      }
      function c(e, t, s) {
        let r;
        let o = a.get(e);
        o || console.warn('Please use proxy object');
        let l = [],
          i = o[3],
          n = !1,
          c = i((e) => {
            if ((l.push(e), s)) {
              t(l.splice(0));
              return;
            }
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), n && t(l.splice(0));
              }));
          });
        return (
          (n = !0),
          () => {
            (n = !1), c();
          }
        );
      }
      var d = s(50887).Buffer;
      let p = n({ history: ['ConnectWallet'], view: 'ConnectWallet', data: void 0 }),
        u = {
          state: p,
          subscribe: (e) => c(p, () => e(p)),
          push(e, t) {
            e !== p.view && ((p.view = e), t && (p.data = t), p.history.push(e));
          },
          reset(e) {
            (p.view = e), (p.history = [e]);
          },
          replace(e) {
            p.history.length > 1 && ((p.history[p.history.length - 1] = e), (p.view = e));
          },
          goBack() {
            if (p.history.length > 1) {
              p.history.pop();
              let [e] = p.history.slice(-1);
              p.view = e;
            }
          },
          setData(e) {
            p.data = e;
          },
        },
        f = {
          WALLETCONNECT_DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
          WCM_VERSION: 'WCM_VERSION',
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            'undefined' != typeof window &&
            !!(
              window.matchMedia('(pointer:coarse)').matches ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
            ),
          isAndroid: () => f.isMobile() && navigator.userAgent.toLowerCase().includes('android'),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return f.isMobile() && (e.includes('iphone') || e.includes('ipad'));
          },
          isHttpUrl: (e) => e.startsWith('http://') || e.startsWith('https://'),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          isTelegram: () =>
            'undefined' != typeof window &&
            (!!window.TelegramWebviewProxy ||
              !!window.Telegram ||
              !!window.TelegramWebviewProxyProto),
          formatNativeUrl(e, t, s) {
            if (f.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let r = e;
            r.includes('://') || ((r = e.replaceAll('/', '').replaceAll(':', '')), (r = `${r}://`)),
              r.endsWith('/') || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          formatUniversalUrl(e, t, s) {
            if (!f.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let r = e;
            if (r.startsWith('https://t.me')) {
              let e = d.from(t).toString('base64').replace(/[=]/g, '');
              r.endsWith('/') && (r = r.slice(0, -1)), this.setWalletConnectDeepLink(r, s);
              let o = new URL(r);
              return o.searchParams.set('startapp', e), o.toString();
            }
            r.endsWith('/') || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            let s = this.isTelegram() ? '_blank' : t;
            window.open(e, s, 'noreferrer noopener');
          },
          setWalletConnectDeepLink(e, t) {
            try {
              localStorage.setItem(
                f.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: e, name: t })
              );
            } catch (e) {
              console.info('Unable to set WalletConnect deep link');
            }
          },
          setWalletConnectAndroidDeepLink(e) {
            try {
              let [t] = e.split('?');
              localStorage.setItem(
                f.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: t, name: 'Android' })
              );
            } catch (e) {
              console.info('Unable to set WalletConnect android deep link');
            }
          },
          removeWalletConnectDeepLink() {
            try {
              localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE);
            } catch (e) {
              console.info('Unable to remove WalletConnect deep link');
            }
          },
          setModalVersionInStorage() {
            try {
              'undefined' != typeof localStorage && localStorage.setItem(f.WCM_VERSION, '2.7.0');
            } catch (e) {
              console.info('Unable to set Web3Modal version in storage');
            }
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = u.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
        },
        h = n({
          enabled:
            'undefined' != typeof location &&
            (location.hostname.includes('localhost') || location.protocol.includes('https')),
          userSessionId: '',
          events: [],
          connectedWalletId: void 0,
        }),
        g = {
          state: h,
          subscribe: (e) =>
            c(h.events, () =>
              e(
                (function (e, t) {
                  let s = a.get(e);
                  s || console.warn('Please use proxy object');
                  let [r, o, l] = s;
                  return l(r, o(), void 0);
                })(h.events[h.events.length - 1])
              )
            ),
          initialize() {
            h.enabled &&
              void 0 !== (null == crypto ? void 0 : crypto.randomUUID) &&
              (h.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            h.connectedWalletId = e;
          },
          click(e) {
            if (h.enabled) {
              let t = {
                type: 'CLICK',
                name: e.name,
                userSessionId: h.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              h.events.push(t);
            }
          },
          track(e) {
            if (h.enabled) {
              let t = {
                type: 'TRACK',
                name: e.name,
                userSessionId: h.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              h.events.push(t);
            }
          },
          view(e) {
            if (h.enabled) {
              let t = {
                type: 'VIEW',
                name: e.name,
                userSessionId: h.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              h.events.push(t);
            }
          },
        },
        m = n({
          chains: void 0,
          walletConnectUri: void 0,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
        }),
        b = {
          state: m,
          subscribe: (e) => c(m, () => e(m)),
          setChains(e) {
            m.chains = e;
          },
          setWalletConnectUri(e) {
            m.walletConnectUri = e;
          },
          setIsCustomDesktop(e) {
            m.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            m.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            m.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            m.isUiLoaded = e;
          },
          setIsAuth(e) {
            m.isAuth = e;
          },
        },
        y = n({
          projectId: '',
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chains: void 0,
          enableAuthMode: !1,
          enableExplorer: !0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        v = {
          state: y,
          subscribe: (e) => c(y, () => e(y)),
          setConfig(e) {
            var t, s;
            g.initialize(),
              b.setChains(e.chains),
              b.setIsAuth(!!e.enableAuthMode),
              b.setIsCustomMobile(!!(null == (t = e.mobileWallets) ? void 0 : t.length)),
              b.setIsCustomDesktop(!!(null == (s = e.desktopWallets) ? void 0 : s.length)),
              f.setModalVersionInStorage(),
              Object.assign(y, e);
          },
        };
      var w = Object.defineProperty,
        I = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        W = (e, t, s) =>
          t in e
            ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (e[t] = s),
        E = (e, t) => {
          for (var s in t || (t = {})) C.call(t, s) && W(e, s, t[s]);
          if (I) for (var s of I(t)) O.call(t, s) && W(e, s, t[s]);
          return e;
        };
      let L = 'https://explorer-api.walletconnect.com',
        A = 'js-2.7.0';
      async function j(e, t) {
        let s = E({ sdkType: 'wcm', sdkVersion: A }, t),
          r = new URL(e, L);
        return (
          r.searchParams.append('projectId', v.state.projectId),
          Object.entries(s).forEach(([e, t]) => {
            t && r.searchParams.append(e, String(t));
          }),
          (await fetch(r)).json()
        );
      }
      let k = {
        getDesktopListings: async (e) => j('/w3m/v1/getDesktopListings', e),
        getMobileListings: async (e) => j('/w3m/v1/getMobileListings', e),
        getAllListings: async (e) => j('/w3m/v1/getAllListings', e),
        getWalletImageUrl: (e) =>
          `${L}/w3m/v1/getWalletImage/${e}?projectId=${v.state.projectId}&sdkType=wcm&sdkVersion=${A}`,
        getAssetImageUrl: (e) =>
          `${L}/w3m/v1/getAssetImage/${e}?projectId=${v.state.projectId}&sdkType=wcm&sdkVersion=${A}`,
      };
      var M = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        S = (e, t, s) =>
          t in e
            ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (e[t] = s),
        N = (e, t) => {
          for (var s in t || (t = {})) P.call(t, s) && S(e, s, t[s]);
          if (D) for (var s of D(t)) U.call(t, s) && S(e, s, t[s]);
          return e;
        };
      let T = f.isMobile(),
        _ = n({
          wallets: { listings: [], total: 0, page: 1 },
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        R = {
          state: _,
          async getRecomendedWallets() {
            let { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = v.state;
            if ('NONE' === e || ('ALL' === t && !e)) return _.recomendedWallets;
            if (f.isArray(e)) {
              let t = e.join(','),
                { listings: s } = await k.getAllListings({ recommendedIds: t }),
                r = Object.values(s);
              r.sort((t, s) => e.indexOf(t.id) - e.indexOf(s.id)), (_.recomendedWallets = r);
            } else {
              let { chains: e, isAuth: s } = b.state,
                r = null == e ? void 0 : e.join(','),
                o = f.isArray(t),
                a = {
                  page: 1,
                  sdks: s ? 'auth_v1' : void 0,
                  entries: f.RECOMMENDED_WALLET_AMOUNT,
                  chains: r,
                  version: 2,
                  excludedIds: o ? t.join(',') : void 0,
                },
                { listings: l } = T ? await k.getMobileListings(a) : await k.getDesktopListings(a);
              _.recomendedWallets = Object.values(l);
            }
            return _.recomendedWallets;
          },
          async getWallets(e) {
            let t = N({}, e),
              { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: r } = v.state,
              { recomendedWallets: o } = _;
            if ('ALL' === r) return _.wallets;
            o.length
              ? (t.excludedIds = o.map((e) => e.id).join(','))
              : f.isArray(s) && (t.excludedIds = s.join(',')),
              f.isArray(r) && (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(',')),
              b.state.isAuth && (t.sdks = 'auth_v1');
            let { page: a, search: l } = e,
              { listings: i, total: n } = T
                ? await k.getMobileListings(t)
                : await k.getDesktopListings(t),
              c = Object.values(i),
              d = l ? 'search' : 'wallets';
            return (
              (_[d] = { listings: [..._[d].listings, ...c], total: n, page: null != a ? a : 1 }),
              { listings: c, total: n }
            );
          },
          getWalletImageUrl: (e) => k.getWalletImageUrl(e),
          getAssetImageUrl: (e) => k.getAssetImageUrl(e),
          resetSearch() {
            _.search = { listings: [], total: 0, page: 1 };
          },
        },
        x = n({ open: !1 }),
        $ = {
          state: x,
          subscribe: (e) => c(x, () => e(x)),
          open: async (e) =>
            new Promise((t) => {
              let { isUiLoaded: s, isDataLoaded: r } = b.state;
              if (
                (f.removeWalletConnectDeepLink(),
                b.setWalletConnectUri(null == e ? void 0 : e.uri),
                b.setChains(null == e ? void 0 : e.chains),
                u.reset('ConnectWallet'),
                s && r)
              )
                (x.open = !0), t();
              else {
                let e = setInterval(() => {
                  let s = b.state;
                  s.isUiLoaded && s.isDataLoaded && (clearInterval(e), (x.open = !0), t());
                }, 200);
              }
            }),
          close() {
            x.open = !1;
          },
        };
      var H = Object.defineProperty,
        V = Object.getOwnPropertySymbols,
        K = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        B = (e, t, s) =>
          t in e
            ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (e[t] = s),
        J = (e, t) => {
          for (var s in t || (t = {})) K.call(t, s) && B(e, s, t[s]);
          if (V) for (var s of V(t)) z.call(t, s) && B(e, s, t[s]);
          return e;
        };
      let q = n({
          themeMode:
            'undefined' != typeof matchMedia && matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light',
        }),
        Z = {
          state: q,
          subscribe: (e) => c(q, () => e(q)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: s } = e;
            t && (q.themeMode = t), s && (q.themeVariables = J({}, s));
          },
        },
        F = n({ open: !1, message: '', variant: 'success' }),
        G = {
          state: F,
          subscribe: (e) => c(F, () => e(F)),
          openToast(e, t) {
            (F.open = !0), (F.message = e), (F.variant = t);
          },
          closeToast() {
            F.open = !1;
          },
        };
    },
    89174: (e, t, s) => {
      s.d(t, { WalletConnectModal: () => o });
      var r = s(83795);
      class o {
        constructor(e) {
          (this.openModal = r.D8.open),
            (this.closeModal = r.D8.close),
            (this.subscribeModal = r.D8.subscribe),
            (this.setTheme = r.lH.setThemeConfig),
            r.lH.setThemeConfig(e),
            r.mb.setConfig(e),
            this.initUi();
        }
        async initUi() {
          if ('undefined' != typeof window) {
            await Promise.all([s.e(7442), s.e(3679)]).then(s.bind(s, 43679));
            let e = document.createElement('wcm-modal');
            document.body.insertAdjacentElement('beforeend', e), r.IN.setIsUiLoaded(!0);
          }
        }
      }
    },
  },
]);
