(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2711],
  {
    9606: (e, s, r) => {
      Promise.resolve().then(r.bind(r, 67520));
    },
    18278: (e, s, r) => {
      var t = r(19344),
        a = r(81676),
        i = r(61149),
        n = r(93590),
        o = r(71825),
        l = Math.max;
      e.exports = function (e) {
        if (!(e && e.length)) return [];
        var s = 0;
        return (
          (e = t(e, function (e) {
            if (o(e)) return (s = l(e.length, s)), !0;
          })),
          n(s, function (s) {
            return a(e, i(s));
          })
        );
      };
    },
    39276: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => o });
      var t = r(54568),
        a = r(7620),
        i = r(46205),
        n = r(77241);
      let o = ({ isHighlight: e, rewardsApy: s }) =>
        s?.other && 0 !== s.other.length
          ? (0, t.jsx)('div', {
              children: s?.other?.map((s) =>
                t.jsxs(
                  a.Fragment,
                  {
                    children: [
                      t.jsxs(i.v, {
                        size: 'md',
                        isBold: e,
                        children: [n.ZV(s.apy, n.hd.PERCENT), ' ', s.symbol],
                      }),
                      t.jsx('br', {}),
                    ],
                  },
                  s.tokenAddress
                )
              ),
            })
          : null;
    },
    44730: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => g });
      var t = r(33550),
        a = r(62942),
        i = r(7620),
        n = r(55906),
        o = r(71287),
        l = r(90263),
        d = r(21415),
        c = r(77241),
        h = r(72986),
        p = r(47636),
        m = r(12522);
      let g = function (e) {
        let s = (0, a.useParams)(),
          r = (0, a.usePathname)(),
          { push: g } = (0, a.useRouter)(),
          { wallet: u, connect: f, disconnect: w, walletName: A, setWalletName: j } = (0, h.vT)(),
          [y, v] = (0, h.v3)(),
          C = (0, m.B)((e) => e.curve),
          b = (0, m.B)((e) => e.updateCurve),
          I = (0, m.B)((e) => e.setIsLoadingCurve),
          k = (0, o.A)((e) => e.hydrate),
          P = (0, o.A)((e) => e.connectState),
          N = (0, o.A)((e) => e.networks.setNetworkConfigs),
          T = (0, o.A)((e) => e.updateConnectState),
          E = (0, o.A)((e) => e.networks.networks),
          O = (0, o.A)((e) => e.networks.networksIdMapper),
          { rChainId: L } = (0, d.V1)(),
          R = (0, h.oe)(u),
          S = (0, h.kB)(u),
          $ = (0, d.V3)(s, e),
          M = (0, i.useCallback)(
            async (e) => {
              if (e)
                try {
                  let [s, r] = e;
                  if ((I(!0), s)) {
                    let e = await (0, l.R8)(s, (r && u) || void 0);
                    N(e), b(e), T('success', ''), await k(e, C, u);
                  } else T('', '');
                } catch (e) {
                  console.error('Failed to connect to network', e), T('failure', n.Ej.CONNECT_API);
                } finally {
                  I(!1);
                }
            },
            [C, I, u, N, b, T, k]
          ),
          D = (0, i.useCallback)(
            async (e) => {
              if (e) {
                let s;
                let [r] = e;
                if (r) {
                  let e = new Promise(async (e, s) => {
                    try {
                      let s = await Promise.race([
                        f({ autoSelect: { label: r, disableModals: !0 } }),
                        new Promise((e, s) =>
                          setTimeout(() => s(Error('timeout connect wallet')), p.oX['3s'])
                        ),
                      ]);
                      e(s);
                    } catch (e) {
                      s(e);
                    }
                  });
                  try {
                    let r = await e;
                    if (!r || (Array.isArray(r) && 0 === r.length))
                      throw Error('unable to connect');
                    s = r[0];
                  } catch (e) {
                    j(null), ([s] = await f());
                  }
                } else [s] = await f();
                try {
                  if (!s) throw Error('unable to connect');
                  j(s.label);
                  let e = (0, h.oe)(s);
                  if (e && e !== $.rChainId) {
                    if (await v({ chainId: t.nD($.rChainId) }))
                      T('loading', n.Ej.CONNECT_API, [$.rChainId, !0]);
                    else {
                      let s = E[e]?.id;
                      s
                        ? (console.warn(
                            `Network is switched to ${e}, redirecting...`,
                            $.rChainId,
                            $.restFullPathname
                          ),
                          g((0, d.Yn)({ network: s }, `/${$.restFullPathname}`)),
                          T('loading', n.Ej.CONNECT_API, [e, !0]))
                        : T('failure', n.Ej.SWITCH_NETWORK);
                    }
                  } else T('loading', n.Ej.CONNECT_API, [$.rChainId, !0]);
                } catch (e) {
                  T('loading', n.Ej.CONNECT_API, [$.rChainId, !1]), j(null);
                }
              }
            },
            [f, g, E, $.rChainId, $.restFullPathname, v, T, j]
          ),
          B = (0, i.useCallback)(
            async (e) => {
              try {
                await w(e), j(null), T('loading', n.Ej.CONNECT_API, [$.rChainId, !1]);
              } catch (e) {
                console.error(e);
              }
            },
            [w, $.rChainId, T, j]
          ),
          F = (0, i.useCallback)(
            async (e) => {
              if (e) {
                let [s, r] = e;
                if (u)
                  try {
                    if (!(await v({ chainId: t.nD(r) }))) throw Error('reject network switch');
                    T('loading', n.Ej.CONNECT_API, [r, !0]);
                  } catch (t) {
                    console.error(t), T('failure', n.Ej.SWITCH_NETWORK);
                    let e = E[+s]?.id;
                    e
                      ? (console.warn(
                          `Could not switch network to ${r}, redirecting to ${e}`,
                          s,
                          $.restFullPathname,
                          t
                        ),
                        g((0, d.Yn)({ network: e }, `/${$.restFullPathname}`)),
                        T('success', ''))
                      : T('failure', n.Ej.SWITCH_NETWORK);
                  }
                else T('loading', n.Ej.CONNECT_API, [r, !1]);
              }
            },
            [g, E, $.restFullPathname, v, T, u]
          );
        return (
          (0, i.useEffect)(() => {
            if ('' === P.status && '' === P.stage && Object.values(O).length) {
              let e = s.network?.toLowerCase(),
                r = e ? O[e] : null;
              r && E[r]?.isActiveNetwork
                ? A
                  ? T('loading', n.Ej.CONNECT_WALLET, [A])
                  : T('loading', n.Ej.CONNECT_API, [L, !1])
                : (console.warn(
                    `network in router (${JSON.stringify(s)}) is not active, redirecting to default network`
                  ),
                  g((0, d.Yn)({ network: 'ethereum' }, n.a$.PAGE_SWAP)));
            }
          }, [g]),
          (0, i.useEffect)(() => {
            (P.status || P.stage) &&
              ((0, c.oJ)(P) ||
                ((0, c.VP)(P, n.Ej.SWITCH_NETWORK)
                  ? F(x(n.Ej.SWITCH_NETWORK, P.options))
                  : (0, c.VP)(P, n.Ej.CONNECT_WALLET)
                    ? D(x(n.Ej.CONNECT_WALLET, P.options))
                    : (0, c.VP)(P, n.Ej.DISCONNECT_WALLET) && u
                      ? B(u)
                      : (0, c.VP)(P, n.Ej.CONNECT_API) && M(x(n.Ej.CONNECT_API, P.options))));
          }, [P.status, P.stage]),
          (0, i.useEffect)(() => {
            if (
              ((0, c.oJ)(P) || (0, c.N6)(P)) &&
              (R || S || C) &&
              (C?.chainId !== R || C?.signerAddress?.toLowerCase() !== S?.toLowerCase())
            ) {
              if (S && C?.signerAddress.toLowerCase() !== S?.toLowerCase())
                T('loading', n.Ej.CONNECT_API, [R, !0]);
              else if (C?.chainId !== R) {
                let { id: e, isActiveNetwork: s } = E[R] ?? {};
                e && s
                  ? (T('loading', n.Ej.SWITCH_NETWORK, [$.rChainId, R]),
                    console.warn(`Network is switched to ${R}, redirecting...`, $),
                    g((0, d.Yn)({ network: e }, `/${$.restFullPathname}`)))
                  : S && T('failure', n.Ej.SWITCH_NETWORK);
              }
            }
          }, [R, S]),
          (0, i.useEffect)(() => {
            (0, c.oJ)(P) &&
              (R && C && C.chainId === R && $.rChainId !== R && r !== n.a$.PAGE_INTEGRATIONS
                ? T('loading', n.Ej.SWITCH_NETWORK, [R, $.rChainId])
                : C &&
                  C.chainId !== $.rChainId &&
                  T('loading', n.Ej.SWITCH_NETWORK, [C.chainId, $.rChainId]));
          }, [r]),
          { pageLoaded: 'success' === P.status, routerParams: $, curve: C }
        );
      };
      function x(e, s) {
        return s || console.warn(`missing options for key ${e}`), s;
      }
    },
    55928: (e, s, r) => {
      'use strict';
      r.d(s, { S: () => n });
      var t = r(54568),
        a = r(44876),
        i = r(3717);
      function n({ tokens: e, ...s }) {
        let r = e.length,
          n = r % 2 == 1,
          o = r > 4 ? 3 : 2,
          l = n ? 2 : 1;
        return (0, t.jsx)(a.A, {
          display: 'inline-grid',
          sx: {
            gridTemplateColumns: `repeat(${o}, auto)`,
            [`& > *:nth-of-type(${o}n-1)`]: { justifySelf: 'center' },
            [`& > *:nth-of-type(${o}n-1):nth-last-of-type(1)`]: { gridColumn: `span ${l}` },
          },
          children: e.map(({ address: e, symbol: a }, l) => {
            let d = l + 1,
              c = d > o,
              h = n && d !== r && r < 6 && c;
            return (0, t.jsx)(
              i.x,
              {
                ...s,
                address: e,
                tooltip: a,
                sx: {
                  ...(c && { marginTop: '-6px' }),
                  ...(l % o != 0 && { marginLeft: '-4px' }),
                  ...(h && { position: 'relative', left: '8px' }),
                },
              },
              `${e}${l}`
            );
          }),
        });
      }
    },
    62196: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => l });
      var t = r(54568),
        a = r(48341),
        i = r(12819),
        n = r(94990);
      let o = (0, a.Ay)(i.A).withConfig({ componentId: 'sc-9d409d30-0' })(['min-height:3.375rem;']),
        l = function ({
          className: e = '',
          searchText: s,
          handleInputChange: r,
          handleClose: a,
          ...i
        }) {
          let { isFocusVisible: l, focusProps: d } = (0, n.o)();
          return (0, t.jsx)(o, {
            id: 'inp-search',
            ...i,
            ...d,
            className: `${e} ${l ? 'focus-visible' : ''}`,
            value: s,
            handleInputChange: r,
            handleSearchClose: a,
          });
        };
    },
    67520: (e, s, r) => {
      'use strict';
      r.d(s, { default: () => ek });
      var t = r(54568),
        a = r(62942),
        i = r(7620),
        n = r(48341),
        o = r(49339),
        l = r(98330),
        d = r(90395),
        c = r(39276),
        h = r(70657),
        p = r(71287);
      let m = n.Ay.div.withConfig({ componentId: 'sc-7447a108-0' })(['line-height:1.2;']),
        g = ({
          isHighlightBase: e,
          isHighlightCrv: s,
          isHighlightOther: r,
          poolData: a,
          rewardsApy: i,
        }) => {
          let n = (0, p.A)((e) => e.isMdUp),
            o = (0, p.A)((e) => e.isXSmDown);
          return void 0 === i
            ? (0, t.jsx)(t.Fragment, { children: '-' })
            : (0, t.jsxs)('div', {
                children: [
                  !o && !n && (0, t.jsx)(d.A, { base: i?.base, isHighlight: e, poolData: a }),
                  (0, t.jsxs)(m, {
                    children: [
                      (0, t.jsx)(h.A, { isHighlight: s, poolData: a, rewardsApy: i }),
                      (0, t.jsx)(c.A, { isHighlight: r, rewardsApy: i }),
                    ],
                  }),
                ],
              });
        },
        x = ({ isHighlight: e, poolData: s, rewardsApy: r }) =>
          (0, t.jsx)(h.A, { poolData: s, rewardsApy: r, isHighlight: e });
      var u = r(46205),
        f = r(77241);
      let w = ({ isHighLight: e, tvlCached: s, tvl: r }) =>
          (0, t.jsx)(u.v, {
            isBold: e,
            size: 'md',
            tooltip: (0, f.ZV)(r?.value, f.hd.USD),
            tooltipProps: { placement: 'bottom end' },
            children: (0, f.ZV)(r?.value ?? s?.value, { currency: 'USD', notation: 'compact' }),
          }),
        A = ({ isHighLight: e, volumeCached: s, volume: r }) =>
          (0, t.jsx)(u.v, {
            isBold: e,
            size: 'md',
            tooltip: (0, f.ZV)(r?.value, f.hd.USD),
            tooltipProps: { placement: 'bottom end' },
            children: (0, f.ZV)(r?.value ?? s?.value, { currency: 'USD', notation: 'compact' }),
          });
      var j = r(51701),
        y = r(96025),
        v = r(64387),
        C = r(85709),
        b = r(36074);
      let I = ({ children: e, id: s, style: r, ...a }) => {
          let n = (0, i.useRef)(null),
            { isIntersecting: l } = (0, C.A)(n) ?? {},
            [d, c] = (0, i.useState)('88px');
          return (
            (0, i.useEffect)(() => {
              l && n.current && c(`${n.current.clientHeight}px`);
            }, [l]),
            (0, t.jsx)(o.Tr, {
              ref: n,
              id: s,
              style: { ...r, ...(!l && { height: d }) },
              ...a,
              children: l && e,
            })
          );
        },
        k = ({
          index: e,
          poolId: s,
          isCrvRewardsEnabled: r,
          formValues: a,
          isInPool: n,
          blockchainId: h,
          columnKeys: p,
          poolData: m,
          poolDataCachedOrApi: u,
          rewardsApy: f,
          searchParams: C,
          showInPoolColumn: k,
          campaignRewardsMapper: P,
          tvlCached: N,
          tvl: T,
          volumeCached: E,
          volume: O,
          handleCellClick: L,
        }) => {
          let { searchTextByTokensAndAddresses: R, searchTextByOther: S } = a,
            { searchText: $, sortBy: M } = C;
          return (0, t.jsx)(I, {
            id: `${s}-${e}`,
            className: 'row--info',
            onClick: ({ target: e }) => L(e),
            children: p.map((e, s) =>
              (0, t.jsxs)(
                i.Fragment,
                {
                  children: [
                    e === j.m.inPool &&
                      (0, t.jsx)(o.uC, {
                        isIn: n,
                        type: 'pool',
                        tooltip: (0, b.t)`You have a balance in this pool`,
                      }),
                    e === j.m.poolName &&
                      (0, t.jsx)(o.Td, {
                        $first: !k,
                        children: (0, t.jsx)(y.A, {
                          isVisible: !0,
                          blockchainId: h,
                          poolData: u,
                          poolListProps: {
                            searchText: $,
                            searchTextByTokensAndAddresses: R,
                            searchTextByOther: S,
                            onClick: L,
                          },
                        }),
                      }),
                    e === j.m.rewardsLite &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        children: (0, t.jsxs)(v.A, {
                          flex: !0,
                          flexColumn: !0,
                          style: { gap: 'var(--spacing-1)' },
                          children: [
                            f &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  r &&
                                    (0, t.jsx)(x, {
                                      isHighlight: 'rewardsCrv' === M,
                                      poolData: m,
                                      rewardsApy: f,
                                    }),
                                  (0, t.jsx)(c.A, {
                                    isHighlight: 'rewardsOther' === M,
                                    rewardsApy: f,
                                  }),
                                ],
                              }),
                            m &&
                              P[m.pool.address] &&
                              (0, t.jsx)(l.A, { rewardItems: P[m.pool.address] }),
                          ],
                        }),
                      }),
                    e === j.m.rewardsDesktop &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(o.Td, {
                            className: 'right',
                            children: (0, t.jsx)(d.A, {
                              base: f?.base,
                              isHighlight: 'rewardsBase' === M,
                              poolData: m,
                            }),
                          }),
                          (0, t.jsx)(o.Td, {
                            className: 'right',
                            children: (0, t.jsxs)(v.A, {
                              flex: !0,
                              flexColumn: !0,
                              style: { gap: 'var(--spacing-1)' },
                              children: [
                                f &&
                                  (0, t.jsx)(x, {
                                    isHighlight: 'rewardsCrv' === M,
                                    poolData: m,
                                    rewardsApy: f,
                                  }),
                                f &&
                                  (0, t.jsx)(c.A, {
                                    isHighlight: 'rewardsOther' === M,
                                    rewardsApy: f,
                                  }),
                                m &&
                                  P[m.pool.address] &&
                                  (0, t.jsx)(l.A, { rewardItems: P[m.pool.address] }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    e === j.m.rewardsMobile &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        children: (0, t.jsxs)(v.A, {
                          flex: !0,
                          flexColumn: !0,
                          style: { gap: 'var(--spacing-1)' },
                          children: [
                            (0, t.jsx)(g, {
                              poolData: m,
                              isHighlightBase: 'rewardsBase' === M,
                              isHighlightCrv: 'rewardsCrv' === M,
                              isHighlightOther: 'rewardsOther' === M,
                              rewardsApy: f,
                            }),
                            m &&
                              P[m.pool.address] &&
                              (0, t.jsx)(l.A, { rewardItems: P[m.pool.address] }),
                          ],
                        }),
                      }),
                    e === j.m.volume &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        children: (0, t.jsx)(A, {
                          isHighLight: 'volume' === M,
                          volumeCached: E,
                          volume: O,
                        }),
                      }),
                    e === j.m.tvl &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        $last: !0,
                        children: (0, t.jsx)(w, { isHighLight: 'tvl' === M, tvlCached: N, tvl: T }),
                      }),
                  ],
                },
                `tRow${e}${s}`
              )
            ),
          });
        };
      var P = r(47990),
        N = r(56457),
        T = r(84561),
        E = r(24633);
      let O = n.Ay.div.withConfig({ componentId: 'sc-fd906268-0' })([
          'display:flex;justify-content:space-between;padding:4px;padding-left:var(--spacing-narrow);width:100%;',
        ]),
        L = n.Ay.div.withConfig({ componentId: 'sc-fd906268-1' })(
          ['display:grid;min-height:150px;padding:', ';'],
          ({ themeType: e }) => ('chad' === e ? '1rem 0.75rem 0.75rem' : '1rem 1rem 0.75rem 1rem')
        ),
        R = n.Ay.div.withConfig({ componentId: 'sc-fd906268-2' })([
          'margin:0.3rem 0;> button:not(:last-of-type){border-right:1px solid rgba(255,255,255,0.25);}',
        ]),
        S = n.Ay.div.withConfig({ componentId: 'sc-fd906268-3' })([
          'max-height:0;overflow:hidden;transition:max-height 0.5s cubic-bezier(0,1,0,1);&.show{max-height:100rem;transition:max-height 1s ease-in-out;}',
        ]),
        $ = ({
          index: e,
          columnKeys: s,
          formValues: r,
          isInPool: a,
          blockchainId: n,
          poolData: h,
          poolDataCachedOrApi: p,
          poolId: m,
          rewardsApy: u,
          searchParams: C,
          showDetail: k,
          tableLabel: $,
          themeType: M,
          tvlCached: D,
          tvl: B,
          volumeCached: F,
          volume: H,
          handleCellClick: _,
          setShowDetail: W,
          campaignRewardsMapper: K,
        }) => {
          let { searchTextByTokensAndAddresses: V, searchTextByOther: z } = r,
            { searchText: Y, sortBy: U } = C,
            G = k === m,
            Z = (0, i.useMemo)(() => {
              if (U && !k) {
                if ('rewardsBase' === U)
                  return (0, t.jsx)(d.A, {
                    base: u?.base,
                    isHighlight: 'rewardsBase' === U,
                    poolData: h,
                  });
                if ('rewardsCrv' === U)
                  return (0, t.jsx)(x, {
                    poolData: h,
                    isHighlight: 'rewardsCrv' === U,
                    rewardsApy: u,
                  });
                if ('rewardsOther' === U)
                  return (0, t.jsx)(c.A, { isHighlight: 'rewardsOther' === U, rewardsApy: u });
                else if ('volume' === U)
                  return (0, f.ZV)(H?.value, { notation: 'compact', currency: 'USD' });
                else if ('tvl' === U)
                  return (0, f.ZV)(B?.value, { notation: 'compact', currency: 'USD' });
              }
            }, [k, U]);
          return (0, t.jsx)(I, {
            id: `${e}`,
            className: 'row--info',
            children: (0, t.jsxs)('td', {
              children: [
                (0, t.jsxs)(v.A, {
                  grid: !0,
                  gridTemplateColumns: a ? 'auto 1fr' : '1fr',
                  children: [
                    (0, t.jsx)(o.uC, {
                      as: 'div',
                      isMobile: !0,
                      isIn: a,
                      type: 'pool',
                      tooltip: a ? (0, b.t)`You have a balance in this pool` : '',
                    }),
                    (0, t.jsxs)(O, {
                      children: [
                        (0, t.jsx)(y.A, {
                          isVisible: !0,
                          blockchainId: n,
                          poolData: p,
                          poolListProps: {
                            quickViewValue: Z,
                            searchText: Y,
                            searchTextByTokensAndAddresses: V,
                            searchTextByOther: z,
                            onClick: _,
                          },
                        }),
                        (0, t.jsx)(T.A, {
                          onClick: () => W((e) => (e === m ? '' : m)),
                          children: G
                            ? (0, t.jsx)(N.A, { name: 'ChevronUp', size: 16 })
                            : (0, t.jsx)(N.A, { name: 'ChevronDown', size: 16 }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(S, {
                  className: G ? 'show' : '',
                  children: (0, t.jsx)(L, {
                    themeType: M,
                    children:
                      G &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)(E.db, {
                            children: [
                              -1 !== s.indexOf(j.m.volume) &&
                                (0, t.jsx)(E.Ay, {
                                  title: $.volume.name,
                                  children: (0, t.jsx)(A, {
                                    isHighLight: 'volume' === U,
                                    volumeCached: F,
                                    volume: H,
                                  }),
                                }),
                              (0, t.jsx)(E.Ay, {
                                title: $.tvl.name,
                                children: (0, t.jsx)(w, {
                                  isHighLight: 'tvl' === U,
                                  tvlCached: D,
                                  tvl: B,
                                }),
                              }),
                              (0, t.jsx)(E.Ay, {
                                title: (0, b.t)`BASE vAPY`,
                                titleNoCap: !0,
                                children: (0, t.jsx)(d.A, {
                                  base: u?.base,
                                  isHighlight: 'rewardsBase' === U,
                                  poolData: h,
                                }),
                              }),
                              !h?.gauge.isKilled &&
                                (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    -1 !== s.indexOf(j.m.rewardsLite)
                                      ? (0, t.jsx)(E.Ay, {
                                          title: (0, b.t)`REWARDS tAPR`,
                                          titleNoCap: !0,
                                          tooltip: (0,
                                          b.t)`Token APR based on current prices of tokens and reward rates`,
                                          children: (0, t.jsx)(c.A, {
                                            isHighlight: 'rewardsOther' === U,
                                            rewardsApy: u,
                                          }),
                                        })
                                      : (0, t.jsx)(E.Ay, {
                                          title: (0, b.t)`REWARDS tAPR`,
                                          titleNoCap: !0,
                                          titleDescription: `(${$.rewardsCrv.name} + ${$.rewardsOther.name})`,
                                          tooltip: (0,
                                          b.t)`Token APR based on current prices of tokens and reward rates`,
                                          children: (0, t.jsx)(g, {
                                            poolData: h,
                                            isHighlightBase: 'rewardsBase' === U,
                                            isHighlightCrv: 'rewardsCrv' === U,
                                            isHighlightOther: 'rewardsOther' === U,
                                            rewardsApy: u,
                                          }),
                                        }),
                                    h &&
                                      K[h.pool.address] &&
                                      (0, t.jsx)(E.Ay, {
                                        title: (0, b.t)`Additional external rewards`,
                                        children: (0, t.jsx)(l.A, {
                                          rewardItems: K[h.pool.address],
                                          mobile: !0,
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, t.jsxs)(R, {
                            children: [
                              (0, t.jsx)(P.A, {
                                variant: 'filled',
                                onClick: ({ target: e }) => _(e),
                                children: (0, b.t)`Deposit`,
                              }),
                              (0, t.jsx)(P.A, {
                                variant: 'filled',
                                onClick: ({ target: e }) => _(e, 'withdraw'),
                                children: (0, b.t)`Withdraw`,
                              }),
                              (0, t.jsx)(P.A, {
                                variant: 'filled',
                                onClick: ({ target: e }) => _(e, 'swap'),
                                children: (0, b.t)`Swap`,
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            }),
          });
        };
      var M = r(55906),
        D = r(11988),
        B = r(54210),
        F = r(78866),
        H = r(21415),
        _ = r(75911);
      let W = {
          swap: M.a$.PAGE_SWAP,
          withdraw: M.a$.PAGE_POOL_WITHDRAW,
          deposit: M.a$.PAGE_POOL_DEPOSIT,
        },
        K = ({
          poolId: e,
          index: s,
          isCrvRewardsEnabled: r,
          rChainId: n,
          columnKeys: l,
          searchParams: d,
          showInPoolColumn: c,
          tableLabels: h,
          searchTermMapper: m,
          showDetail: g,
          setShowDetail: x,
          curve: u,
        }) => {
          let { push: f } = (0, a.useRouter)(),
            w = (0, F.jv)(u),
            A = (0, p.A)((e) => e.poolList.formValues),
            j = (0, p.A)((e) => e.isXSmDown),
            y = (0, p.A)((s) => s.storeCache.poolsMapper[n]?.[e]),
            v = (0, p.A)((s) => s.pools.poolsMapper[n]?.[e]),
            C = (0, p.A)((s) => s.pools.rewardsApyMapper[n]?.[e]),
            b = (0, p.A)((s) => s.poolList.searchedByAddresses[e]),
            I = (0, p.A)((s) => s.storeCache.tvlMapper[n]?.[e]),
            P = (0, p.A)((s) => s.pools.tvlMapper[n]?.[e]),
            N = (0, p.A)((s) => s.user.poolList[w]?.[e]),
            T = (0, p.A)((s) => s.storeCache.volumeMapper[n]?.[e]),
            E = (0, p.A)((s) => s.pools.volumeMapper[n]?.[e]),
            O = (0, p.A)((e) => e.networks.networks[n]),
            L = (0, D.A)(),
            R = (0, _.nv)((e) => e.theme),
            S = v ?? y,
            K = (0, i.useMemo)(() => (0, B.ln)(b, m, S), [S, m, b]),
            V = (0, i.useCallback)(
              (s, r) => {
                let { nodeName: t } = s;
                'A' !== t &&
                  f((0, H.Yn)({ network: O.id }, `${M.a$.PAGE_POOLS}/${e}${W[r ?? 'deposit']}`));
              },
              [f, O.id, e]
            ),
            z = {
              index: s,
              isCrvRewardsEnabled: r,
              formValues: A,
              searchParams: d,
              isInPool: N,
              blockchainId: O.networkId,
              poolId: e,
              columnKeys: l,
              poolData: v,
              poolDataCachedOrApi: S,
              rewardsApy: C,
              showInPoolColumn: c,
              tvlCached: I,
              tvl: P,
              volumeCached: T,
              volume: E,
              handleCellClick: V,
              campaignRewardsMapper: L,
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              j
                ? (0, t.jsx)($, {
                    tableLabel: h,
                    showDetail: g,
                    themeType: R,
                    setShowDetail: x,
                    ...z,
                  })
                : (0, t.jsx)(k, { ...z }),
              b &&
                Object.keys(b).length > 0 &&
                (0, t.jsx)(o.c1, {
                  colSpan: 10,
                  id: e,
                  isMobile: j,
                  result: b,
                  searchTermMapper: K,
                  scanAddressPath: O.scanAddressPath,
                }),
            ],
          });
        };
      var V = r(45182),
        z = r(19115);
      let Y = ({ isReadyRewardsApy: e, tableLabels: s, ...r }) =>
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('div', {
              children: [
                (0, b.t)`Rewards tAPR`,
                ' ',
                (0, t.jsx)(z.A, {
                  placement: 'top',
                  children: (0, b.t)`Token APR based on current prices of tokens and reward rates`,
                }),
              ],
            }),
            (0, t.jsxs)(v.A, {
              grid: !0,
              gridAutoFlow: 'column',
              flexAlignItems: 'center',
              gridColumnGap: 1,
              flexJustifyContent: 'flex-end',
              children: [
                (0, t.jsx)(V.A, {
                  sortIdKey: 'rewardsCrv',
                  nowrap: !0,
                  ...r,
                  loading: !e,
                  children: s.rewardsCrv.name,
                }),
                '+',
                (0, t.jsx)(V.A, {
                  sortIdKey: 'rewardsOther',
                  nowrap: !0,
                  ...r,
                  loading: !e,
                  children: s.rewardsOther.name,
                }),
              ],
            }),
          ],
        });
      var U = r(39651);
      let G = n.Ay.col.withConfig({ componentId: 'sc-ffc2c4ea-0' })(
          [
            '@media (min-width:',
            'rem){min-width:200px;&.pool{min-width:400px;}&.base{min-width:100px;}&.rewards{min-width:300px;}&.tvl{min-width:150px;}}',
          ],
          U.fi.lg
        ),
        Z = n.Ay.col.withConfig({ componentId: 'sc-ffc2c4ea-1' })(['width:21px;']),
        J = (0, n.Ay)(o.d8).withConfig({ componentId: 'sc-ffc2c4ea-2' })([
          'font-size:var(--font-size-2);',
        ]),
        X = (0, n.Ay)(o.rl).withConfig({ componentId: 'sc-ffc2c4ea-3' })([
          'width:100%;height:100%;',
        ]),
        q = ({
          isLite: e,
          isReadyRewardsApy: s,
          isReadyTvl: r,
          isReadyVolume: a,
          columnKeys: n,
          searchParams: l,
          tableLabels: d,
          updatePath: c,
        }) => {
          let h = (0, i.useCallback)(
              (e, s) => {
                c({ sortBy: e, sortByOrder: s });
              },
              [c]
            ),
            p = { sortBy: l.sortBy, sortByOrder: l.sortByOrder, handleBtnClickSort: h },
            m = (0, b.t)`Token APR based on current prices of tokens and reward rates`,
            g = (0, b.t)`Variable APY based on today's trading activity`;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)('colgroup', {
                children: n.map((s, r) =>
                  (0, t.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        s === j.m.inPool && (0, t.jsx)(Z, { className: 'row-in-pool' }),
                        s === j.m.poolName && (0, t.jsx)(G, { className: 'left pool' }),
                        s === j.m.rewardsLite && (0, t.jsx)(G, { className: 'right' }),
                        s === j.m.rewardsDesktop &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(G, { className: 'right base' }),
                              (0, t.jsx)(G, { className: 'right rewards' }),
                            ],
                          }),
                        s === j.m.rewardsMobile && (0, t.jsx)(G, { className: 'right rewards' }),
                        s === j.m.volume && (0, t.jsx)('col', { className: 'right' }),
                        s === j.m.tvl && e && (0, t.jsx)(G, { className: 'right tvl' }),
                        s === j.m.tvl && !e && (0, t.jsx)('col', { className: 'right' }),
                      ],
                    },
                    `col${s}${r}`
                  )
                ),
              }),
              (0, t.jsx)(J, {
                children: (0, t.jsx)('tr', {
                  children: n.map((e, n) =>
                    (0, t.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          e === j.m.inPool &&
                            (0, t.jsx)('th', { className: 'in-pool', children: ' ' }, e),
                          e === j.m.poolName &&
                            (0, t.jsx)(
                              o.Th,
                              {
                                $first: 0 === n,
                                children: (0, t.jsx)(X, {
                                  className: 'left',
                                  sortIdKey: 'name',
                                  ...p,
                                  loading: !1,
                                  indicatorPlacement: 'right',
                                  children: d.name.name,
                                }),
                              },
                              e
                            ),
                          e === j.m.rewardsLite &&
                            (0, t.jsx)(o.Th, {
                              className: 'right',
                              children: (0, t.jsxs)(o.rl, {
                                className: 'right',
                                sortIdKey: 'rewardsLite',
                                nowrap: !0,
                                ...p,
                                loading: !s,
                                children: [
                                  d.rewardsLite.name,
                                  ' tAPR',
                                  (0, t.jsx)(z.A, { placement: 'top', children: m }),
                                ],
                              }),
                            }),
                          e === j.m.rewardsDesktop &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(o.Th, {
                                  children: (0, t.jsxs)(X, {
                                    className: 'right',
                                    sortIdKey: 'rewardsBase',
                                    ...p,
                                    loading: !s,
                                    children: [
                                      d.rewardsBase.name,
                                      (0, t.jsx)(z.A, { placement: 'top', children: g }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)(o.Th, {
                                  className: 'right',
                                  children: (0, t.jsx)(v.A, {
                                    grid: !0,
                                    gridRowGap: 1,
                                    children: (0, t.jsx)(Y, {
                                      isReadyRewardsApy: s,
                                      tableLabels: d,
                                      ...p,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          e === j.m.rewardsMobile &&
                            (0, t.jsx)(o.Th, {
                              className: 'right',
                              children: (0, t.jsxs)(v.A, {
                                grid: !0,
                                gridRowGap: 2,
                                flexJustifyContent: 'flex-end',
                                children: [
                                  (0, t.jsxs)(o.rl, {
                                    sortIdKey: 'rewardsBase',
                                    ...p,
                                    loading: !s,
                                    children: [
                                      d.rewardsBase.name,
                                      (0, t.jsx)(z.A, { placement: 'top', children: g }),
                                    ],
                                  }),
                                  (0, t.jsx)(v.A, {
                                    flex: !0,
                                    flexJustifyContent: 'flex-end',
                                    children: (0, t.jsx)(Y, {
                                      isReadyRewardsApy: s,
                                      tableLabels: d,
                                      ...p,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          e === j.m.volume &&
                            (0, t.jsx)(o.Th, {
                              children: (0, t.jsx)(X, {
                                className: 'right',
                                sortIdKey: 'volume',
                                ...p,
                                loading: !a,
                                children: d.volume.name,
                              }),
                            }),
                          e === j.m.tvl &&
                            (0, t.jsx)(o.Th, {
                              $last: !0,
                              children: (0, t.jsx)(X, {
                                className: 'right',
                                sortIdKey: 'tvl',
                                ...p,
                                loading: !r,
                                indicatorPlacement: 'left',
                                children: d.tvl.name,
                              }),
                            }),
                        ],
                      },
                      `thead${e}${n}`
                    )
                  ),
                }),
              }),
            ],
          });
        },
        Q = ({ showInPoolColumn: e }) =>
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)('colgroup', {
                children: [e && (0, t.jsx)(es, {}), (0, t.jsx)(ee, { className: 'left pool' })],
              }),
              (0, t.jsx)('thead', {
                children: (0, t.jsx)(o.Tr, {
                  children: (0, t.jsx)(o.Th, {
                    $first: !0,
                    className: 'left',
                    children: (0, b.t)`Pools`,
                  }),
                }),
              }),
            ],
          });
      Q.displayName = 'TableHeadMobile';
      let ee = n.Ay.col.withConfig({ componentId: 'sc-3c6e0c19-0' })(
          ['@media (min-width:', 'rem){&.pool{min-width:400px;}&.rewards{min-width:310px;}}'],
          U.fi.lg
        ),
        es = n.Ay.col.withConfig({ componentId: 'sc-3c6e0c19-1' })(['width:25px;']);
      var er = r(59339),
        et = r(77540),
        ea = (function (e) {
          return (e.api = 'api'), (e.search = 'search'), (e.filter = 'filter'), e;
        })(ea || {});
      let ei = n.Ay.div.withConfig({ componentId: 'sc-b1afab0e-0' })([
          'padding:var(--spacing-5);text-align:center;',
        ]),
        en = ({ colSpan: e, searchParams: s, signerAddress: r, updatePath: a }) => {
          let { filterKey: n, searchText: l } = s,
            d = (0, p.A)((e) => e.user.poolListLoaded),
            c = (0, p.A)((e) => e.user.poolListError),
            h = (0, i.useMemo)(
              () => (l ? 'search' : n ? 'filter' : d && c ? 'api' : void 0),
              [n, l, c, d]
            ),
            m = (0, i.useMemo)(
              () =>
                'search' === h
                  ? { searchText: '' }
                  : 'filter' === h
                    ? { filterKey: 'all' }
                    : void 0,
              [h]
            ),
            g = (0, i.useMemo)(
              () =>
                'search' === h ? l : 'filter' === h ? ('user' === n && r ? (0, f.z5)(r) : n) : '',
              [n, h, l, r]
            );
          return (0, t.jsx)(o.Tr, {
            children: (0, t.jsx)(o.Td, {
              colSpan: e,
              children: (0, t.jsx)(ei, {
                children:
                  'api' === h
                    ? (0, t.jsx)(v.A, {
                        flex: !0,
                        flexJustifyContent: 'center',
                        children: (0, t.jsx)(et.A, {
                          alertType: 'error',
                          children: 'Unable to retrieve pool list. Please try again later.',
                        }),
                      })
                    : 'search' === h || 'filter' === h
                      ? (0, t.jsx)(t.Fragment, {
                          children:
                            'all' === n
                              ? (0, t.jsx)(b.x, { children: 'No pool found' })
                              : (0, t.jsxs)(b.x, {
                                  children: [
                                    'No pool found for “',
                                    g,
                                    '”.',
                                    m &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)('br', {}),
                                          ' ',
                                          (0, t.jsx)(P.A, {
                                            variant: 'text',
                                            onClick: () => a(m),
                                            children: 'View all',
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                        })
                      : (0, t.jsxs)(b.x, {
                          children: [
                            "Can't find what you're looking for?",
                            ' ',
                            (0, t.jsx)(er.A, {
                              $noStyles: !0,
                              href: 'https://t.me/curvefi',
                              children: 'Feel free to ask us on Telegram',
                            }),
                          ],
                        }),
              }),
            }),
          });
        };
      var eo = r(23368),
        el = r(37862),
        ed = r(38526);
      let ec = ({ poolDatasCachedOrApi: e }) => {
        let s = e.length < 10,
          r = (0, _.nv)((e) => e.hideSmallPools),
          a = (0, _.nv)((e) => e.setHideSmallPools);
        return (0, t.jsx)(ed.A, {
          isDisabled: s,
          isSelected: !s && r,
          onChange: (e) => a(e),
          children: (0, b.t)`Hide very small pools`,
        });
      };
      var eh = r(62196),
        ep = r(33523),
        em = r(14026);
      let eg = n.Ay.div.withConfig({ componentId: 'sc-9d596b1d-0' })(
          [
            'display:flex;flex-direction:column;grid-gap:var(--spacing-narrow);padding:var(--spacing-narrow);padding-top:var(--spacing-normal);@media (min-width:',
            'rem){padding:var(--spacing-normal);padding-bottom:var(--spacing-narrow);}',
          ],
          f.fi.sm
        ),
        ex = (0, n.Ay)(v.A).withConfig({ componentId: 'sc-9d596b1d-1' })(
          [
            'align-items:flex-start;display:flex;flex-wrap:wrap;grid-gap:var(--spacing-narrow);@media (min-width:',
            'rem){display:grid;grid-template-columns:auto 1fr auto;}@media (min-width:',
            'rem){grid-template-columns:',
            ';}',
          ],
          f.fi.sm,
          f.fi.lg,
          ({ $isLite: e }) => (e ? 'auto 1fr auto' : '1fr auto auto')
        ),
        eu = ({
          isReady: e,
          activeKey: s,
          rChainId: r,
          isLite: a,
          poolDatasCachedOrApi: n,
          result: o,
          signerAddress: l,
          searchParams: d,
          tableLabels: c,
          updatePath: h,
        }) => {
          let m = (0, p.A)((e) => e.poolList.formStatus[s]),
            g = (0, p.A)((e) => e.isLgUp),
            { poolFilters: x } = (0, p.A)((e) => e.networks.networks[r]),
            u = (0, i.useMemo)(
              () => [
                { key: 'all', label: (0, b.t)`All` },
                { key: 'usd', label: 'USD' },
                { key: 'btc', label: 'BTC' },
                { key: 'kava', label: 'KAVA' },
                { key: 'eth', label: 'ETH' },
                { key: 'crvusd', label: (0, b.t)`crvUSD` },
                { key: 'tricrypto', label: (0, b.t)`Tricrypto` },
                { key: 'crypto', label: (0, b.t)`Crypto` },
                { key: 'stableng', label: (0, b.t)`Stable NG` },
                { key: 'cross-chain', label: (0, b.t)`Cross-chain` },
                { key: 'user', label: (0, b.t)`My Pools` },
              ],
              []
            ),
            f = (0, i.useMemo)(() => {
              let e = u.filter((e) => -1 !== x.indexOf(e.key));
              if ((l || (e = e.filter((e) => 'user' !== e.key)), Array.isArray(e))) {
                let s = {};
                for (let { key: r, label: t } of e) s[r] = { id: r, displayName: t };
                return s;
              }
            }, [u, l, x]);
          return (0, t.jsxs)(eg, {
            children: [
              (0, t.jsx)('div', {
                children: (0, t.jsx)(eh.A, {
                  placeholder: (0, b.t)`Search by tokens or address`,
                  searchText: d.searchText,
                  handleInputChange: (e) => h({ searchText: e }),
                  handleClose: () => h({ searchText: '' }),
                  testId: 'search-pools',
                }),
              }),
              (0, t.jsx)(ex, {
                $isLite: a,
                children:
                  g && !a
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(ep.A, {
                            disabled: !1,
                            filters: f,
                            filterKey: d.filterKey,
                            isLoading: !e || m?.isLoading,
                            resultsLength: o?.length,
                            updateRouteFilterKey: (e) => h({ filterKey: e }),
                          }),
                          (0, t.jsxs)(v.A, {
                            flex: !0,
                            gridGap: 2,
                            children: [
                              (0, t.jsx)(eo.A, { searchParams: d, labelsMapper: c, updatePath: h }),
                              (0, t.jsx)(ec, { poolDatasCachedOrApi: n }),
                            ],
                          }),
                        ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(em.A, {
                            filters: f,
                            filterKey: d.filterKey,
                            updateRouteFilterKey: (e) => h({ filterKey: e }),
                          }),
                          (0, t.jsx)(el.A, { searchParams: d, labelsMapper: c, updatePath: h }),
                          (0, t.jsx)(ec, { poolDatasCachedOrApi: n }),
                        ],
                      }),
              }),
            ],
          });
        };
      var ef = r(51569),
        ew = r(99599),
        eA = r(95292),
        ej = r(47636);
      let ey = ({
        rChainId: e,
        curve: s,
        isLite: r,
        searchParams: a,
        searchTermMapper: n,
        tableLabels: l,
        updatePath: d,
      }) => {
        let c = (0, D.A)(),
          h = (0, ef.uZ)(e, a),
          m = (0, p.A)((e) => e.poolList.activeKey),
          g = (0, p.A)((e) => e.poolList.formStatus[h] ?? ef.kR),
          x = (0, p.A)((e) => e.isMdUp),
          u = (0, p.A)((e) => e.isXSmDown),
          f = (0, p.A)((e) => e.isPageVisible),
          w = (0, p.A)((s) => s.storeCache.poolsMapper[e]),
          A = (0, p.A)((s) => s.pools.poolsMapper[e]),
          y = (0, p.A)((e) => e.poolList.result),
          v = (0, p.A)((s) => s.pools.rewardsApyMapper[e]),
          C = (0, p.A)((e) => e.poolList.showHideSmallPools),
          b = (0, p.A)((s) => s.storeCache.tvlMapper[e]),
          I = (0, p.A)((s) => s.pools.tvlMapper[e]),
          k = (0, F.jv)(s),
          P = (0, p.A)((e) => e.user.poolList[k]),
          N = (0, p.A)((s) => s.storeCache.volumeMapper[e]),
          T = (0, p.A)((s) => s.pools.volumeMapper[e]),
          E = (0, p.A)((e) => e.pools.fetchPoolsRewardsApy),
          O = (0, p.A)((e) => e.poolList.setFormValues),
          { initCampaignRewards: L, initiated: R } = (0, p.A)((e) => e.campaigns),
          S = (0, _.nv)((e) => e.hideSmallPools),
          $ = (0, p.A)((s) => s.networks.networks[e]?.isCrvRewardsEnabled),
          [M, B] = (0, i.useState)(''),
          H = (0, i.useMemo)(
            () => ((y[h] ?? h.split('-')[0] === m.split('-')[0]) ? y[m] : void 0),
            [h, m, y]
          ),
          { chainId: W, signerAddress: V = '' } = s ?? {},
          z = !!V,
          Y = (0, i.useMemo)(() => Object.values(A ?? {}), [A]),
          U = (0, i.useMemo)(() => Object.values(w ?? {}), [w]),
          G = (0, i.useMemo)(() => {
            let e = void 0 !== T && Object.keys(T).length >= 0,
              s = T || N || {},
              t = e || Object.keys(s).length > 0,
              a = void 0 !== I && Object.keys(I).length >= 0,
              i = I || b || {},
              n = a || Object.keys(i).length > 0;
            return r ? n : t && n;
          }, [r, I, b, T, N]),
          Z = (0, i.useMemo)(() => {
            let e = void 0 !== T && Object.keys(T).length >= 0,
              s = void 0 !== I && Object.keys(I).length >= 0;
            return r ? s : e && s;
          }, [r, I, T]),
          J = (0, i.useMemo)(() => {
            let e = [];
            return (z && e.push(j.m.inPool), e.push(j.m.poolName), r)
              ? e.concat([j.m.rewardsLite, j.m.tvl])
              : (x ? e.push(j.m.rewardsDesktop) : e.push(j.m.rewardsMobile),
                e.concat([j.m.volume, j.m.tvl]));
          }, [r, x, z]),
          X = (0, i.useCallback)(
            (s) => {
              O(
                e,
                r,
                s,
                S,
                void 0 !== A ? Y : void 0,
                U,
                v ?? {},
                T ?? {},
                N ?? {},
                I ?? {},
                b ?? {},
                P ?? {},
                c
              );
            },
            [O, e, r, S, A, Y, U, v, T, N, I, b, P, c]
          );
        (0, eA.A)(
          (0, i.useCallback)(() => {
            s && v && Object.keys(v).length > 0 && E(e, Y);
          }, [s, E, Y, e, v]),
          ej.oX['11m'],
          f
        ),
          (0, i.useEffect)(() => {
            (G || Z) && a && X(a);
          }, [G, Z, W, V, a, S]),
          (0, i.useEffect)(() => {
            R || L(e);
          }, [L, e, R]);
        let ee = x ? 7 : 4;
        return (
          C && ee++,
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(eu, {
                isReady: G,
                activeKey: h,
                rChainId: e,
                isLite: r,
                poolDatasCachedOrApi: Y ?? U,
                result: H,
                signerAddress: V,
                searchParams: a,
                tableLabels: l,
                updatePath: d,
              }),
              (0, t.jsxs)(o.Ay, {
                cellPadding: 0,
                cellSpacing: 0,
                children: [
                  u
                    ? (0, t.jsx)(Q, { showInPoolColumn: z })
                    : (0, t.jsx)(q, {
                        columnKeys: J,
                        isLite: r,
                        isReadyRewardsApy: !!v,
                        isReadyTvl: !!I,
                        isReadyVolume: !!T,
                        searchParams: a,
                        tableLabels: l,
                        updatePath: d,
                      }),
                  (0, t.jsx)(o.NN, {
                    $borderBottom: !0,
                    children:
                      Z && g.noResult
                        ? (0, t.jsx)(en, {
                            colSpan: ee,
                            searchParams: a,
                            signerAddress: V,
                            updatePath: d,
                          })
                        : G && Array.isArray(H)
                          ? (0, t.jsx)(t.Fragment, {
                              children: H.map((r, i) =>
                                (0, t.jsx)(
                                  K,
                                  {
                                    index: i,
                                    columnKeys: J,
                                    isCrvRewardsEnabled: $,
                                    poolId: r,
                                    rChainId: e,
                                    searchParams: a,
                                    showInPoolColumn: z,
                                    tableLabels: l,
                                    searchTermMapper: n,
                                    showDetail: M,
                                    setShowDetail: B,
                                    curve: s,
                                  },
                                  r
                                )
                              ),
                            })
                          : (0, t.jsx)('tr', {
                              children: (0, t.jsx)('td', {
                                colSpan: ee,
                                children: (0, t.jsx)(ew.V, { children: (0, t.jsx)(ew.A, {}) }),
                              }),
                            }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var ev = r(44730),
        eC = r(88935),
        eb = (function (e) {
          return (
            (e.filter = 'filter'),
            (e.sortBy = 'sortBy'),
            (e.order = 'order'),
            (e.search = 'search'),
            e
          );
        })(eb || {});
      let eI = n.Ay.div.withConfig({ componentId: 'sc-dfddd2ad-0' })(
          [
            'margin:0 auto;max-width:',
            ';min-height:50vh;background-color:var(--table--background-color);border:1px solid var(--box--secondary--border);@media (min-width:',
            'rem){margin:1.5rem auto;}',
          ],
          ({ $isLite: e }) => (e ? '870px' : 'var(--width)'),
          U.fi.lg
        ),
        ek = (e) => {
          let { push: s } = (0, a.useRouter)(),
            r = (0, a.useSearchParams)(),
            { routerParams: n, curve: o } = (0, ev.A)(),
            l = (0, B.Ay)(),
            { rChainId: d } = n,
            c = (0, p.A)((e) => e.pools.poolsMapper[d]),
            h = (0, p.A)((e) => e.storeCache.poolsMapper[d]),
            [m, g] = (0, i.useState)(null),
            x = (0, p.A)((e) => e.networks.networks[d]),
            { isLite: u } = x,
            f = Object.keys(c ?? h ?? {}).length,
            w = u ? 'tvl' : 'volume',
            A = (0, i.useMemo)(
              () => ({
                name: { name: (0, b.t)`Pool` },
                ...(u
                  ? { rewardsLite: { name: (0, b.t)`Rewards`, mobile: (0, b.t)`Rewards` } }
                  : {
                      rewardsBase: { name: (0, b.t)`Base vAPY`, mobile: (0, b.t)`Rewards Base` },
                      rewardsCrv: { name: 'CRV', mobile: (0, b.t)`Rewards CRV` },
                      rewardsOther: {
                        name: (0, b.t)`Incentives`,
                        mobile: (0, b.t)`Rewards Incentives`,
                      },
                    }),
                tvl: { name: (0, b.t)`TVL` },
                volume: { name: (0, b.t)`Volume` },
                points: { name: (0, b.t)`Points` },
              }),
              [u]
            ),
            j = (0, i.useCallback)(
              (r) => {
                let { filterKey: t, searchText: a, sortBy: i, sortByOrder: n } = { ...m, ...r },
                  o = new URLSearchParams(
                    [
                      ['filter', t && 'all' !== t ? t : ''],
                      ['sortBy', i && i !== w ? i : ''],
                      ['order', n && 'desc' !== n ? n : ''],
                      ['search', a ? encodeURIComponent(a) : ''],
                    ].filter(([, e]) => e)
                  ).toString();
                s((0, H.Yn)(e, `${M.a$.PAGE_POOLS}?${o}`));
              },
              [w, s, e, m]
            );
          return (
            (0, i.useEffect)(() => {
              if (d) {
                let e = (r?.get('filter') || 'all').toLowerCase(),
                  s = (r?.get('sortBy') || w).toLowerCase(),
                  t = (r?.get('order') || 'desc').toLowerCase(),
                  a = decodeURIComponent(r?.get('search') || ''),
                  i = x.poolFilters.find((s) => s === e);
                ('user' !== e || !o || o?.signerAddress) && i
                  ? g({
                      filterKey: e,
                      searchText: a,
                      sortBy: Object.keys(A).find((e) => e.toLowerCase() === s) ?? w,
                      sortByOrder: ['desc', 'asc'].find((e) => e.toLowerCase() === t) ?? 'desc',
                    })
                  : j({ filterKey: 'all', sortBy: s, sortByOrder: t, searchText: a });
              }
            }, [o?.signerAddress, f, d, r, w, x]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(eI, {
                  $isLite: u,
                  children:
                    d &&
                    m &&
                    (0, t.jsx)(ey, {
                      rChainId: d,
                      curve: o,
                      params: e,
                      isLite: u,
                      tableLabels: A,
                      searchParams: m,
                      searchTermMapper: l,
                      updatePath: j,
                    }),
                }),
                (0, t.jsx)(eC.A, { showScrollButton: !0 }),
              ],
            })
          );
        };
    },
    88935: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => h });
      var t = r(54568),
        a = r(48341),
        i = r(71287),
        n = r(47990),
        o = r(56457);
      let l = (0, a.i7)(['0%{opacity:0;transform:scale(0.5);}100%{opacity:1;transform:scale(1);}']),
        d = (0, a.Ay)(n.A).withConfig({ componentId: 'sc-c8553551-0' })(
          ['padding:0.5rem;opacity:0;&.pop-in{animation:', ' 0.25s;animation-fill-mode:forwards;}'],
          l
        ),
        c = a.Ay.div.withConfig({ componentId: 'sc-c8553551-1' })([
          'position:fixed;bottom:2rem;right:1rem;padding:1rem;z-index:var(--z-index-page-settings);',
        ]),
        h = ({ showScrollButton: e }) => {
          let s = (0, i.A)((e) => e.showScrollButton);
          return (0, t.jsx)(c, {
            children: (0, t.jsx)(d, {
              className: e && s ? 'pop-in' : '',
              show: !!e && s,
              variant: 'icon-filled',
              onClick: () => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
              },
              children: (0, t.jsx)(o.A, { name: 'UpToTop', size: 24 }),
            }),
          });
        };
    },
    90395: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => x });
      var t = r(54568),
        a = r(39904),
        i = r(48341),
        n = r(64387),
        o = r(46205),
        l = r(77241),
        d = r(36074);
      let c = i.Ay.p.withConfig({ componentId: 'sc-d3941c84-0' })([
          'font-weight:bold;margin-bottom:var(--spacing-1);white-space:nowrap;',
        ]),
        h = (0, i.Ay)(o.v).withConfig({ componentId: 'sc-d3941c84-1' })([
          'display:block;margin-top:var(--spacing-2);',
        ]),
        p = ({ baseApy: e, poolData: s }) => {
          let r = (0, d.t)`Pool APY`;
          return (
            s?.pool.isLending
              ? (r = (0, d.t)`Pool APY + Lending APY`)
              : s?.tokenAddresses.indexOf('0xae7ab96520de3a18e5e111b5eaab095312d7fe84') !== -1
                ? (r = (0, d.t)`Pool APY + Staking APY`)
                : (s?.pool?.implementation === '0x36dc03c0e12a1c241306a6a8f327fe28ba2be5b0' ||
                    s?.pool?.implementation === '0x7ca46a636b02d4abc66883d7ff164bde506dc66a') &&
                  (r = (0, d.t)`Pool APY + Interest APY`),
            (0, t.jsxs)(n.A, {
              children: [
                (0, t.jsxs)(c, {
                  children: [r, ' ', (0, t.jsx)(o.v, { size: 'xs', children: '(annualized)' })],
                }),
                (0, t.jsxs)('ul', {
                  children: [
                    (0, t.jsxs)('li', { children: ['Daily: ', (0, l.ZV)(e?.day, l.hd.PERCENT)] }),
                    (0, t.jsxs)('li', { children: ['Weekly: ', (0, l.ZV)(e?.week, l.hd.PERCENT)] }),
                  ],
                }),
                e?.day &&
                  0 > Number(e.day) &&
                  (0, t.jsx)(h, {
                    children: (0,
                    d.t)`Base vAPY can temporarily be negative when A parameter is ramped down, or crypto pools spend profit to rebalance.`,
                  }),
              ],
            })
          );
        };
      var m = r(55906),
        g = r(19115);
      let x = ({ base: e, isHighlight: s, poolData: r }) => {
        let i = r && 'failedFetching24hOldVprice' in r && r.failedFetching24hOldVprice;
        return (0, t.jsx)(t.Fragment, {
          children: i
            ? (0, t.jsxs)('span', {
                children: ['-', (0, t.jsx)(g.A, { children: 'Not available currently' })],
              })
            : void 0 !== e &&
              (0, t.jsx)(t.Fragment, {
                children:
                  +e.day > m.l5
                    ? (0, t.jsx)(a.A, { isBold: s })
                    : (0, t.jsx)(o.v, {
                        isBold: s,
                        size: 'md',
                        tooltip: e ? (0, t.jsx)(p, { poolData: r, baseApy: e }) : null,
                        tooltipProps: {
                          placement: 'bottom end',
                          textAlign: 'left',
                          ...(e && 0 > Number(e.day) ? { minWidth: '200px' } : {}),
                        },
                        children: (0, l.ZV)(e.day, l.hd.PERCENT),
                      }),
              }),
        });
      };
    },
    96025: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => Y });
      var t = r(54568),
        a = r(99123),
        i = r.n(a),
        n = r(7620),
        o = r(48341),
        l = r(18098),
        d = r(63013),
        c = r(56457),
        h = r(25025),
        p = r(39651),
        m = r(84826);
      let g = ({ className: e, ...s }) => {
          let r = (0, n.useRef)(null),
            { buttonProps: a, isPressed: i } = (0, l.s)(s, r),
            { children: o } = s;
          return (0, t.jsx)(x, {
            className: `${e} ${i ? 'isPressed' : ''}`,
            ...a,
            ref: r,
            children: o,
          });
        },
        x = o.Ay.button.withConfig({ componentId: 'sc-5ad86fca-0' })([
          'margin-right:2px;color:inherit;background:transparent;cursor:pointer;&.isPressed{color:white;background-color:var(--primary-400);}',
        ]),
        u = o.Ay.span.withConfig({ componentId: 'sc-5ad86fca-1' })([
          'align-items:center;display:inline-flex;max-width:0;transition:max-width 1s;white-space:nowrap;overflow:hidden;',
        ]),
        f = o.Ay.span.withConfig({ componentId: 'sc-5ad86fca-2' })(
          [
            'display:inherit;min-height:21px;border:1px solid transparent;&:hover{border-color:lightgray;',
            '{max-width:18.75rem;}}',
          ],
          u
        ),
        w = o.Ay.span.withConfig({ componentId: 'sc-5ad86fca-3' })([
          'margin-right:2px;font-family:var(--font-mono);font-size:var(--font-size-2);',
        ]),
        A = (0, o.Ay)(h.A).withConfig({ componentId: 'sc-5ad86fca-4' })(
          [
            'font-size:var(--font-size-4);@media (min-width:',
            'rem){font-size:1.25rem;max-width:13.75rem;}@media (min-width:',
            'rem){max-width:13.125rem;}',
          ],
          p.fi.sm,
          p.fi.lg
        ),
        j = (0, o.Ay)(c.A).withConfig({ componentId: 'sc-5ad86fca-5' })([
          'position:relative;top:2px;',
        ]),
        y = ({
          className: e,
          isHighlightPoolName: s,
          isHighlightPoolAddress: r,
          poolName: a,
          poolAddress: i,
          ...o
        }) => {
          let l = (0, n.useMemo)(() => (i ? `${(0, m.Wr)(i)}` : (0, d.b)(i)), [i]);
          return (0, t.jsxs)(f, {
            className: e,
            children: [
              (0, t.jsxs)(A, {
                children: [s || r ? (0, t.jsx)('strong', { children: a }) : a, ' '],
              }),
              (0, t.jsx)(u, {
                children: (0, t.jsxs)(g, {
                  ...o,
                  onPress: () => (0, m.lW)(i),
                  children: [
                    (0, t.jsx)(w, { children: r ? (0, t.jsx)('mark', { children: l }) : l }),
                    (0, t.jsx)(j, { name: 'Copy', size: 16 }),
                  ],
                }),
              }),
            ],
          });
        };
      var v = r(71287),
        C = r(99599),
        b = r(77241),
        I = r(12522);
      let k = ({ className: e, ...s }) => {
          let r = (0, n.useRef)(null),
            { buttonProps: a, isPressed: i } = (0, l.s)(s, r),
            { children: o } = s;
          return (0, t.jsx)(P, {
            className: `${e} ${i ? 'isPressed' : ''}`,
            ...a,
            ref: r,
            children: o,
          });
        },
        P = o.Ay.button.withConfig({ componentId: 'sc-7baf1843-0' })([
          'margin-left:2px;color:inherit;background:transparent;cursor:pointer;&.isPressed{color:white;background-color:var(--primary-400);}',
        ]),
        N = o.Ay.span.withConfig({ componentId: 'sc-7baf1843-1' })([
          'align-items:center;max-width:0;transition:max-width 1s;white-space:nowrap;overflow:hidden;',
        ]),
        T = o.Ay.span.withConfig({ componentId: 'sc-7baf1843-2' })(
          [
            'align-items:center;display:inline-flex;min-height:24px;padding:0 1px;border:1px solid transparent;font-size:var(--font-size-2);&:hover{margin-right:4px;border-color:lightgray;',
            '{max-width:18.75rem;}}',
          ],
          N
        ),
        E = o.Ay.span.withConfig({ componentId: 'sc-7baf1843-3' })([
          'margin:0 2px;position:relative;top:-2px;font-size:var(--font-size-1);font-weight:bold;',
        ]),
        O = (0, o.Ay)(c.A).withConfig({ componentId: 'sc-7baf1843-4' })([
          'position:relative;top:1px;margin:0 2px;',
        ]),
        L = ({ className: e, isHighlight: s, tokenName: r, tokenAddress: a, ...i }) => {
          let o = (0, I.B)((e) => e.curve),
            l = (0, v.A)((e) => e.usdRates.usdRatesMapper[a]),
            d = (0, v.A)((e) => e.usdRates.fetchUsdRateByToken),
            c = (0, b.vk)(l),
            h = (e) => {
              !e && o && d(o, a);
            },
            p = (0, n.useMemo)(() => (r && r.length > 10 ? `${r.slice(0, 5)}...` : r), [r]);
          return (0, t.jsxs)(T, {
            className: e,
            onMouseEnter: () => h(c),
            children: [
              (0, t.jsxs)('span', {
                children: [s ? (0, t.jsx)('strong', { children: p }) : p, ' '],
              }),
              (0, t.jsx)(N, {
                children: (0, t.jsxs)(k, {
                  ...i,
                  onPress: () => (0, m.lW)(a),
                  children: [
                    (0, t.jsx)(E, { children: void 0 === l ? (0, t.jsx)(C.A, { size: 10 }) : c }),
                    (0, t.jsx)(O, { name: 'Copy', size: 16 }),
                  ],
                }),
              }),
            ],
          });
        };
      var R = r(79614),
        S = r(70184),
        $ = r(14241),
        M = r(77540),
        D = r(64387),
        B = r(50567),
        F = r(46205),
        H = r(55928);
      let _ = o.Ay.div.withConfig({ componentId: 'sc-7b0963a-0' })(['min-width:3.3125rem;']),
        W = o.Ay.div.withConfig({ componentId: 'sc-7b0963a-1' })([
          'display:grid;align-items:center;grid-template-columns:auto 1fr;grid-column-gap:var(--spacing-2);width:100%;',
        ]),
        K = o.Ay.div.withConfig({ componentId: 'sc-7b0963a-2' })([
          'min-height:1.5rem;max-width:24.375rem;',
        ]),
        V = o.Ay.span.withConfig({ componentId: 'sc-7b0963a-3' })([
          'font-size:var(--font-size-2);',
        ]),
        z = (0, o.Ay)(M.A).withConfig({ componentId: 'sc-7b0963a-4' })([
          'font-size:var(--font-size-2);margin:var(--spacing-2) 0;max-height:100px;overflow:scroll;max-width:260px;',
        ]),
        Y = ({
          className: e = '',
          blockchainId: s,
          isVisible: r = !0,
          poolData: a,
          poolListProps: o,
        }) => {
          let { pool: l } = a ?? {},
            d = (0, n.useMemo)(
              () => i()(a?.tokens, a?.tokenAddresses).map(([e, s]) => ({ symbol: e, address: s })),
              [a?.tokens, a?.tokenAddresses]
            ),
            c = (0, R.A)(a?.pool.address, a?.hasVyperVulnerability),
            h = (0, S.A)(a?.tokenAddressesAll ?? []),
            p = (0, $.A)((e) => e.breakpoints.down('tablet')),
            m = (0, v.A)((e) => e.poolList.searchedTerms),
            { quickViewValue: g, onClick: x } = o ?? {},
            u = (e) => {
              if ('function' == typeof x) {
                let { nodeName: s } = e;
                'A' !== s && x(e);
              }
            },
            { highlightedTokens: f } = (0, n.useMemo)(() => {
              if (p || !r) return { highlightedTokens: [] };
              let e = !1;
              return {
                highlightedTokens: d.map(({ symbol: s, address: r }) => {
                  let t =
                    -1 !==
                    m.findIndex((e) => {
                      let t = s.toLowerCase(),
                        a = r.toLowerCase(),
                        i = e.toLowerCase();
                      return t.includes(i) || a === i || a.startsWith(i);
                    });
                  return t && (e = !0), { symbol: s, address: r, isHighLight: t };
                }),
                isHighlightPoolName: !e,
              };
            }, [p, r, m, d]);
          return (0, t.jsxs)('div', {
            children: [
              (0, t.jsxs)(W, {
                className: e,
                onClick: ({ target: e }) => u(e),
                children: [
                  (0, t.jsx)(_, { children: r && (0, t.jsx)(H.S, { blockchainId: s, tokens: d }) }),
                  (0, t.jsxs)(D.A, {
                    fillWidth: !0,
                    children: [
                      (0, t.jsxs)(D.A, {
                        flex: !0,
                        flexAlignItems: 'center',
                        children: [
                          !p &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (c?.isInformationOnly || c?.isInformationOnlyAndShowInForm) &&
                                  (0, t.jsx)(B.mL, {
                                    minWidth: '300px',
                                    placement: 'start',
                                    ...c,
                                    children: c.message,
                                  }),
                                h &&
                                  (0, t.jsx)(B.mL, {
                                    minWidth: '300px',
                                    placement: 'start',
                                    ...h,
                                    children: h.message,
                                  }),
                              ],
                            }),
                          l &&
                            (0, t.jsx)(y, {
                              poolAddress: l.address,
                              poolName: l.name,
                              isHighlightPoolName: !0,
                            }),
                        ],
                      }),
                      (0, t.jsx)(K, {
                        children:
                          l &&
                          (0, t.jsx)('div', {
                            children: p
                              ? d.map(({ symbol: e }, s) =>
                                  (0, t.jsxs)(V, { children: [e, ' '] }, `${e}-${s}`)
                                )
                              : r &&
                                f.map(({ symbol: e, address: s, isHighLight: r }, a) =>
                                  (0, t.jsx)(
                                    L,
                                    { tokenName: e, tokenAddress: s, isHighlight: r },
                                    `${e}${s}${a}`
                                  )
                                ),
                          }),
                      }),
                      g && (0, t.jsx)(F.v, { children: g }),
                    ],
                  }),
                ],
              }),
              h && p && (0, t.jsx)(z, { alertType: h.alertType, children: h.message }),
              c &&
                !c.isPoolPageOnly &&
                (0, t.jsx)(t.Fragment, {
                  children:
                    c.isInformationOnly || c.isInformationOnlyAndShowInForm
                      ? p
                        ? (0, t.jsx)(z, { alertType: c.alertType, children: c.message })
                        : null
                      : (0, t.jsx)(D.A, { padding: '0.5rem 0 0 0', children: c.message }),
                }),
            ],
          });
        };
    },
    99123: (e, s, r) => {
      e.exports = r(23830)(r(18278));
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [
        4599, 2138, 3896, 2565, 8238, 7261, 8341, 2740, 2607, 4439, 7208, 2519, 7806, 4667, 1356,
        7999, 1332, 7044, 4925, 3887, 9556, 7959, 7184, 7653, 7105, 6469, 8099, 1868, 8534, 3377,
        3308, 8373, 4357, 7399, 5911, 7329, 6543, 1287, 587, 8315, 7358,
      ],
      () => s(9606)
    ),
      (_N_E = e.O());
  },
]);
