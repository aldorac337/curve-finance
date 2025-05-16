(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9215],
  {
    17281: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 85782));
    },
    85782: (e, t, a) => {
      'use strict';
      a.d(t, {
        App: () => H,
      });
      var i = a(54568);
      a(41257);
      var l = a(49879),
        s = a.n(l),
        n = a(62942),
        r = a(7620),
        o = a(86895),
        c = a(48341),
        d = a(55906),
        u = a(71287);
      let h = function (e, t) {
        let a = (0, u.A)((e) => e.pageWidth),
          i = (0, u.A)((e) => e.updateLayoutHeight);
        (0, r.useEffect)(
          () => (
            e?.current && i(t, e.current.getBoundingClientRect().height),
            () => {
              i(t, 0);
            }
          ),
          [e, t, i, a]
        );
      };
      var A = a(74143),
        p = a(88411),
        w = a(91069),
        m = a(61466),
        g = a(29514);
      let f = ({ chainId: e }) =>
          (0, m.Os)('chainValidation', () => {
            (0, m.t6)('chainId', () => {
              (0, m.FE)(e)
                .message('Chain ID is required')
                .isNotEmpty()
                .message('Invalid chain ID')
                .isValidChainId();
            });
          }),
        b = ({ chainId: e }) =>
          (0, m.Os)('apiValidation', () => {
            (0, m.t6)('api', () => {
              (0, m.FE)(p.AW()?.chainId)
                .message('Chain ID should be loaded')
                .equals(e)
                .message('Incorrect chain ID');
            });
          }),
        v = (0, g.Qi)((e) => {
          f(e), b(e);
        }),
        { useQuery: k } = (0, w.X6)({
          queryKey: (e) => [
            'appStatsTvl',
            {
              chainId: e.chainId,
            },
          ],
          queryFn: (e) => A.A.network.getTVL((0, p.NB)()),
          staleTime: '5m',
          validationSuite: v,
        });
      async function y({ chainId: e }) {
        let { isLite: t } = u.A.getState().networks.networks[e];
        return t ? null : A.A.network.getVolume((0, p.NB)());
      }
      let { useQuery: I } = (0, w.X6)({
        queryKey: (e) => [
          'appStatsVolume',
          {
            chainId: e.chainId,
          },
        ],
        queryFn: y,
        staleTime: '5m',
        validationSuite: v,
      });
      var S = a(31305),
        C = a(77241),
        E = a(36074),
        R = a(21802),
        N = a(44431);
      let P = () => (0, E.t)`Quickswap`,
        x = ({ sections: e, globalAlertRef: t, networkId: a }) => {
          let l = (0, r.useRef)(null),
            { lib: s = {} } = (0, p.w5)(),
            n = (0, S.iW)(a);
          h(l, 'mainNav');
          let o = (0, u.A)((e) => e.getNetworkConfigFromApi(n).hasRouter),
            c = (0, u.A)((e) => e.networks.networks),
            A = (0, u.A)((e) => e.networks.visibleNetworksList),
            w = (0, u.A)((e) => e.layoutHeight.globalAlert),
            m = (0, u.A)((e) => e.storeCache.routerFormValues[n]),
            { data: g } = k(s),
            { data: f } = I(s),
            b = c[n];
          return (0, i.jsx)(N.Y, {
            networkId: a,
            chainId: n,
            mainNavRef: l,
            currentMenu: 'dex',
            isLite: b?.isLite,
            routes: (0, r.useMemo)(
              () => [
                ...(o && (!b || b.showRouterSwap)
                  ? [
                      {
                        app: 'dex',
                        route: (function (e, t) {
                          let a = t?.fromAddress ?? e?.fromAddress,
                            i = t?.toAddress ?? e?.toAddress;
                          return `${d.a$.PAGE_SWAP}/${a || i ? `?${new URLSearchParams({ ...(a && { from: a }), ...(i && { to: i }) })}` : ''}`;
                        })(b.swap, m),
                        label: P,
                      },
                    ]
                  : []),
                ...R.VS.dex.routes.filter((e) => e.route !== d.a$.PAGE_SWAP),
              ],
              [o, b, m]
            ),
            chains: A,
            appStats: [
              {
                label: (0, E.t)`Total Deposits`,
                value: (0, C.ZV)(g, {
                  currency: 'USD',
                  notation: 'compact',
                }),
              },
              ...(b?.isLite
                ? []
                : [
                    {
                      label: (0, E.t)`Daily Volume`,
                      value: (0, C.ZV)(f?.totalVolume, {
                        currency: 'USD',
                        notation: 'compact',
                      }),
                    },
                    {
                      label: (0, E.t)`Crypto Volume Share`,
                      value: (0, C.ZV)(f?.cryptoShare, C.hd.PERCENT),
                    },
                  ]),
            ],
            sections: e,
            height: (0, N.g)(w),
            globalAlertRef: t,
          });
        };
      var V = a(46250),
        $ = a(95292),
        D = a(47636),
        L = a(1334);
      let _ = (e) => {
          let { lib: t } = (0, p.w5)(),
            a = (0, u.A)((e) => e.isPageVisible),
            i = (0, u.A)((e) => e.pools.fetchPools),
            l = (0, u.A)((t) => t.pools.poolsMapper[e.chainId]),
            s = (0, u.A)((e) => e.pools.fetchPoolsVolume),
            n = (0, u.A)((e) => e.pools.fetchPoolsTvl),
            o = (0, u.A)((e) => e.tokens.setTokensMapper),
            c = (0, u.A)((e) => e.gas.fetchGasInfo),
            d = (0, u.A)((e) => e.usdRates.fetchAllStoredUsdRates),
            h = (0, u.A)((e) => e.userBalances.fetchAllStoredBalances),
            w = (0, r.useCallback)(
              async (e) => {
                let { chainId: t } = e,
                  a = Object.values(l);
                await Promise.all([s(t, a), n(e, a)]), o(t, a);
              },
              [n, s, l, o]
            ),
            m = (0, r.useCallback)(
              async (t) => {
                let a = await A.A.network.fetchAllPoolsList(t, e);
                i(t, a, null);
              },
              [i, e]
            );
          (0, $.A)(
            () => {
              t && (c(t), d(t), w(t), t.signerAddress && h(t));
            },
            D.oX['5m'],
            a
          ),
            (0, $.A)(
              () => {
                t && m(t);
              },
              D.oX['11m'],
              a
            );
        },
        B = (e) => [
          {
            title: (0, E.t)`Documentation`,
            links: [
              {
                href: 'https://news.curve.finance/',
                label: (0, E.t)`News`,
              },
              {
                href: 'https://resources.curve.finance/lending/understanding-lending/',
                label: (0, E.t)`User Resources`,
              },
              {
                href: 'https://docs.curve.finance',
                label: (0, E.t)`Developer Resources`,
              },
              {
                href: (0, S.Yn)(
                  {
                    network: e,
                  },
                  d.a$.PAGE_DISCLAIMER
                ),
                label: (0, E.t)`Risk Disclaimers`,
              },
              {
                href: (0, S.Yn)(
                  {
                    network: e,
                  },
                  d.a$.PAGE_INTEGRATIONS
                ),
                label: (0, E.t)`Integrations`,
              },
              {
                href: 'https://resources.curve.finance/glossary-branding/branding/',
                label: (0, E.t)`Branding`,
              },
              ...((0, E.Y)()
                ? [
                    {
                      href: 'https://www.curve.wiki/',
                      label: (0, E.t)`Wiki`,
                    },
                  ]
                : []),
            ],
          },
          {
            title: (0, E.t)`Security`,
            links: [
              {
                href: 'https://docs.curve.finance/references/audits/',
                label: (0, E.t)`Audits`,
              },
              {
                href: 'https://docs.curve.finance/security/security/',
                label: (0, E.t)`Bug Bounty`,
              },
              {
                href: 'https://dune.com/mrblock_buidl/Curve.fi',
                label: (0, E.t)`Dune Analytics`,
              },
              {
                href: 'https://curvemonitor.com',
                label: (0, E.t)`Curve Monitor`,
              },
              {
                href: 'https://crvhub.com/',
                label: (0, E.t)`Crvhub`,
              },
            ],
          },
        ],
        T = c.Ay.main.withConfig({
          componentId: 'sc-2164db94-0',
        })(
          ['margin:0 auto;max-width:var(--width);min-height:', ';width:100%;'],
          ({ minHeight: e }) => `calc(100vh - ${e}px)`
        ),
        W = c.Ay.div.withConfig({
          componentId: 'sc-2164db94-1',
        })(
          ['display:flex;flex-direction:column;position:relative;width:100%;min-height:', ';'],
          ({ globalAlertHeight: e }) => `calc(100vh - ${e}px)`
        ),
        j = ({ children: e, network: t }) => {
          let a = (0, r.useRef)(null);
          h(a, 'globalAlert'), _(t);
          let l = (0, u.A)((e) => e.layoutHeight),
            s = (0, u.A)((e) => e.layoutHeight.globalAlert),
            n = (0, r.useMemo)(() => B(t.id), [t.id]),
            o = (0, r.useMemo)(() => V.o.reduce((e, t) => e + l[t], 0), [l]);
          return (0, i.jsxs)(W, {
            globalAlertHeight: l?.globalAlert,
            children: [
              (0, i.jsx)(x, {
                sections: n,
                globalAlertRef: a,
                networkId: t.id,
              }),
              (0, i.jsx)(T, {
                minHeight: o,
                children: e,
              }),
              (0, i.jsx)(L.w, {
                appName: 'dex',
                networkId: t.id,
                headerHeight: (0, N.g)(s),
              }),
            ],
          });
        };
      var M = a(90263),
        G = a(75911);
      let H = ({ children: e }) => {
        let { network: t = 'ethereum' } = (0, n.useParams)(),
          { push: a } = (0, n.useRouter)(),
          l = (0, S.ro)(),
          [c, d] = (0, r.useState)(!1),
          h = (0, u.A)((e) => e.pageWidth),
          A = (0, u.A)((e) => e.setPageWidth),
          w = (0, u.A)((e) => e.networks.fetchNetworks),
          m = (0, u.A)((e) => e.updateShowScrollButton),
          g = (0, u.A)((e) => e.updateGlobalStoreByKey),
          f = (0, u.A)((e) => e.networks.networks),
          b = (0, u.A)((e) => e.networks.networksIdMapper),
          v = (0, G.nv)((e) => e.theme),
          k = (0, u.A)((e) => e.hydrate),
          y = b[t],
          I = f[y],
          C = (0, r.useCallback)(() => {
            window.innerWidth && A(window.innerWidth);
          }, [A]);
        (0, r.useEffect)(() => {
          h &&
            ((document.body.className = `theme-${v} ${h}`.replace(/ +(?= )/g, '').trim()),
            document.body.setAttribute('data-theme', v));
        }, [h, v]),
          (0, r.useEffect)(() => {
            u.A.setState(u.A.getInitialState()),
              (async () => {
                await w();
                let e = () => {
                  g('isPageVisible', !document.hidden);
                };
                d(!0),
                  g('loaded', !0),
                  C(),
                  e(),
                  document.addEventListener('visibilitychange', e),
                  window.addEventListener('resize', () => C()),
                  window.addEventListener('scroll', () => s()(() => m(window.scrollY), 200));
              })();
          }, [w, C, g, m]);
        let E = (0, r.useCallback)(
          ([e]) => {
            let t = f[e]?.id;
            t &&
              (console.warn(`Network switched to ${t}, redirecting...`, location.href),
              a(
                (0, S.Yn)(
                  {
                    network: t,
                  },
                  `/${l}`
                )
              ));
          },
          [f, a, l]
        );
        return (0, i.jsx)(o.$, {
          loading: !c,
          children: (0, i.jsx)(p.Sg, {
            hydrate: k,
            initLib: M.R8,
            chainId: y,
            onChainUnavailable: E,
            children: (0, i.jsx)(j, {
              network: I,
              children: e,
            }),
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        4599, 9335, 4399, 7261, 5077, 6438, 4180, 4439, 7208, 2519, 1356, 7999, 3748, 8612, 7044,
        4925, 9720, 9556, 4237, 2226, 7653, 9630, 4034, 7587, 4845, 8534, 5476, 7257, 38, 3842,
        4968, 41, 7399, 3414, 1451, 1287, 4431, 104, 587, 8315, 7358,
      ],
      () => t(17281)
    ),
      (_N_E = e.O());
  },
]);
