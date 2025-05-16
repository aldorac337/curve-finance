'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9184],
  {
    3717: (e, r, t) => {
      t.d(r, { x: () => u });
      var n = t(54568),
        i = t(44876),
        o = t(35183),
        l = t(69228),
        a = t(84121),
        c = t(84032);
      let s = '/images/default-crypto.png',
        { IconSize: d } = c.B,
        u = ({
          className: e = '',
          blockchainId: r = '',
          tooltip: t = '',
          size: c = 'sm',
          address: u,
          sx: h,
        }) =>
          (0, n.jsx)(l.m, {
            title: t,
            placement: 'top',
            children: (0, n.jsx)(i.A, {
              component: 'img',
              'data-testid': `token-icon-${t}`,
              className: `${e}`,
              alt: t,
              onError: ({ currentTarget: e }) => {
                e.src = s;
              },
              src: u ? `${(0, o.YQ)(r ?? '')}${u.toLowerCase()}.png` : s,
              loading: 'lazy',
              sx: (e) => ({
                border: '1px solid transparent',
                borderRadius: '50%',
                ...('sm' === c && {
                  width: '1.75rem',
                  height: '1.75rem',
                  [e.breakpoints.down(400)]: { width: '1.5rem', height: '1.5rem' },
                }),
                ...('mui-sm' === c && (0, a.N)({ width: d.sm, height: d.sm })),
                ...('mui-md' === c && (0, a.N)({ width: d.md, height: d.md })),
                ...('xl' === c && (0, a.N)({ width: d.xl, height: d.xl })),
                ...h,
              }),
            }),
          });
    },
    14815: (e, r, t) => {
      t.d(r, { Gw: () => o, l8: () => l, yp: () => i });
      let n = {
          '5m': 300,
          '15m': 900,
          '30m': 1800,
          '1h': 3600,
          '4h': 14400,
          '6h': 21600,
          '12h': 43200,
          '1d': 86400,
          '7d': 604800,
          '14d': 1209600,
        },
        i = (e, r) => r - n[e],
        o = (e, r) => Math.floor(r - 299 * n[e]),
        l = (e) => e - 60 * new Date().getTimezoneOffset();
    },
    63058: (e, r, t) => {
      t.d(r, { A: () => H });
      var n = t(54568),
        i = t(7620),
        o = t(48341),
        l = t(16726),
        a = t(63557),
        c = t(20591),
        s = t.n(c);
      function d(e) {
        return e.replace(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*[\d.]+)?\)/, (e, r, t, n) => {
          let i = t / 100,
            o = n / 100,
            l = (e) => (e + r / 30) % 12,
            a = (e) => o - i * Math.min(o, 1 - o) * Math.max(-1, Math.min(l(e) - 3, 9 - l(e), 1));
          return `rgb(${Math.round(255 * a(0))}, ${Math.round(255 * a(8))}, ${Math.round(255 * a(4))})`;
        });
      }
      let u = o.Ay.div.withConfig({ componentId: 'sc-ceff6a23-0' })([
          'position:absolute;width:100%;font-variant-numeric:tabular-nums;',
        ]),
        h = ({
          chartHeight: e,
          ohlcData: r,
          volumeData: t,
          oraclePriceData: o,
          liquidationRange: l,
          timeOption: c,
          wrapperRef: h,
          chartExpanded: g,
          magnet: p,
          colors: m,
          refetchingCapped: f,
          fetchMoreChartData: x,
          lastFetchEndTime: b,
          oraclePriceVisible: C,
          liqRangeCurrentVisible: v,
          liqRangeNewVisible: y,
          latestOraclePrice: w,
        }) => {
          let j = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            R = (0, i.useRef)(null),
            V = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            F = (0, i.useRef)(null),
            D = (0, i.useRef)(b),
            O = (0, i.useRef)(!0),
            L = (0, i.useRef)(4),
            [P, M] = (0, i.useState)(!1),
            [E, N] = (0, i.useState)(null),
            [q, $] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            D.current = b;
          }, [b]);
          let _ = (0, i.useRef)(
            s()(
              () => {
                !q && !f && ($(!0), x(D.current));
              },
              500,
              { leading: !0, trailing: !1 }
            )
          );
          return (
            (0, i.useEffect)(() => {
              if (!j.current) return;
              (A.current = (0, a.R9)(j.current, {
                layout: {
                  background: { type: a.mE.Solid, color: d(m.backgroundColor) },
                  textColor: d(m.textColor),
                },
                width: h.current.clientWidth,
                height: g ? e.expanded : e.standard,
                timeScale: { timeVisible: 'day' !== c },
                rightPriceScale: {
                  autoScale: !0,
                  alignLabels: !0,
                  borderVisible: !1,
                  scaleMargins: { top: 0.1, bottom: 0.1 },
                },
                grid: { vertLines: { visible: !1 }, horzLines: { visible: !1 } },
                crosshair: {
                  mode: p ? a._q.Magnet : a._q.Normal,
                  vertLine: {
                    width: 4,
                    color: '#C3BCDB44',
                    style: a.Sc.Solid,
                    labelBackgroundColor: '#9B7DFF',
                  },
                  horzLine: { color: '#9B7DFF', labelBackgroundColor: '#9B7DFF' },
                },
              })),
                A.current.timeScale(),
                (O.current = !0);
              let n = () => {
                  A.current &&
                    ((I.current = A.current.addAreaSeries({
                      topColor: m.rangeColorA25,
                      bottomColor: m.rangeColorA25,
                      lineColor: m.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: v,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (L.current = e >= 1 ? 4 : t + 4), e.toFixed(L.current);
                        },
                        minMove: 1e-7,
                      },
                    })),
                    (R.current = A.current.addAreaSeries({
                      topColor: m.backgroundColor,
                      bottomColor: m.backgroundColor,
                      lineColor: m.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: v,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (L.current = e >= 1 ? 4 : t + 4), e.toFixed(L.current);
                        },
                        minMove: 1e-7,
                      },
                    })));
                },
                i = () => {
                  A.current &&
                    ((k.current = A.current.addAreaSeries({
                      topColor: m.rangeColorA25,
                      bottomColor: m.rangeColorA25,
                      lineColor: m.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: y,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (L.current = e >= 1 ? 4 : t + 4), e.toFixed(L.current);
                        },
                        minMove: 1e-7,
                      },
                    })),
                    (S.current = A.current.addAreaSeries({
                      topColor: m.backgroundColor,
                      bottomColor: m.backgroundColor,
                      lineColor: m.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: y,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (L.current = e >= 1 ? 4 : t + 4), e.toFixed(L.current);
                        },
                        minMove: 1e-7,
                      },
                    })));
                };
              l &&
                l.current &&
                l.new &&
                (l.new.price2[0].value > l.current.price2[0].value ? (i(), n()) : (n(), i())),
                l && !l.current && l.new && !k.current && i(),
                l && l.current && !l.new && !I.current && n(),
                r &&
                  !V.current &&
                  (V.current = A.current.addCandlestickSeries({
                    priceLineStyle: 2,
                    upColor: '#26a69a',
                    downColor: '#ef5350',
                    borderVisible: !1,
                    wickUpColor: '#26a69a',
                    wickDownColor: '#ef5350',
                    priceFormat: {
                      type: 'custom',
                      formatter: (e) => {
                        let [, r] = e.toString().split('.');
                        if (!r) return e.toFixed(4);
                        let t = r.split('').findIndex((e) => '0' !== e);
                        return (L.current = e >= 1 ? 4 : t + 4), e.toFixed(L.current);
                      },
                      minMove: 1e-7,
                    },
                  })),
                t &&
                  !z.current &&
                  ((z.current = A.current.addHistogramSeries({
                    priceFormat: { type: 'volume' },
                    priceScaleId: '',
                  })),
                  z.current.priceScale().applyOptions({ scaleMargins: { top: 0.7, bottom: 0 } })),
                o &&
                  !F.current &&
                  (F.current = A.current.addLineSeries({
                    color: m.chartOraclePrice,
                    lineWidth: 2,
                    priceLineStyle: 2,
                    visible: C,
                  }));
              let s = () => {
                  if (q || f || !A.current || !V.current) return;
                  let e = A.current.timeScale(),
                    r = e.getVisibleLogicalRange();
                  if (!r) return;
                  let t = V.current.barsInLogicalRange(r);
                  t && t.barsBefore < 50 && (_.current(), N(e.getVisibleRange()));
                },
                u = A.current.timeScale();
              return (
                u.subscribeVisibleLogicalRangeChange(s),
                () => {
                  u.unsubscribeVisibleLogicalRangeChange(s),
                    (V.current = null),
                    A.current && (A.current.remove(), (A.current = null)),
                    (k.current = null),
                    (S.current = null),
                    (I.current = null),
                    (R.current = null),
                    (V.current = null),
                    (z.current = null),
                    (F.current = null);
                }
              );
            }, [
              g,
              e.expanded,
              e.standard,
              m.backgroundColor,
              m.chartOraclePrice,
              m.rangeColor,
              m.rangeColorA25,
              m.textColor,
              q,
              E,
              v,
              y,
              l,
              p,
              r,
              o,
              C,
              f,
              c,
              t,
              h,
            ]),
            (0, i.useEffect)(() => {
              if (!A.current) return;
              let e = A.current.timeScale();
              V.current && (V.current.setData(r), $(!1), E && e.setVisibleRange(E)),
                z.current && void 0 !== t && z.current.setData(t),
                F.current && void 0 !== o && F.current.setData(o),
                void 0 !== l &&
                  (l.new &&
                    k.current &&
                    S.current &&
                    (k.current.setData(l.new.price1), S.current.setData(l.new.price2)),
                  l.current &&
                    I.current &&
                    R.current &&
                    (I.current.setData(l.current.price1), R.current.setData(l.current.price2)),
                  I.current &&
                    R.current &&
                    l &&
                    l.current &&
                    l.new &&
                    (I.current.applyOptions({
                      topColor: m.rangeColorA25Old,
                      bottomColor: m.rangeColorA25Old,
                      lineColor: m.rangeColorOld,
                    }),
                    R.current.applyOptions({
                      topColor: m.backgroundColor,
                      bottomColor: m.backgroundColor,
                      lineColor: m.rangeColorOld,
                    }))),
                w &&
                  F.current &&
                  o &&
                  o[o.length - 1].value !== +w &&
                  F.current.update({ time: o[o.length - 1].time, value: +w });
            }, [m.backgroundColor, m.rangeColorA25Old, m.rangeColorOld, x, q, E, w, l, r, o, f, t]),
            (0, i.useEffect)(
              () => (
                (h.current = new ResizeObserver((e) => {
                  if (P) return;
                  let { width: r, height: t } = e[0].contentRect;
                  (r -= 1) <= 0 ||
                    (A.current?.applyOptions({ width: r, height: t }),
                    A.current?.timeScale().getVisibleLogicalRange());
                })),
                h.current.observe(j.current),
                () => {
                  M(!0), h?.current && h.current.disconnect();
                }
              ),
              [h, P]
            ),
            (0, n.jsx)(u, { ref: j })
          );
        },
        g = o.Ay.div.withConfig({ componentId: 'sc-9e325f2c-0' })([
          'display:flex;flex-direction:column;margin:var(--spacing-2) auto 0 0;border-top:1px solid var(--border-600);',
        ]),
        p = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-9e325f2c-1' })([
          'color:var(--page--text-color);margin-right:auto;margin-top:var(--spacing-2);font-family:var(--font);font-weight:var(--bold);text-transform:none;&.active{color:var(--button_text--hover--color);background-color:var(--button_outlined--hover--background-color);&:hover{opacity:0.8;}}',
        ]),
        m = ({ data: e, currentData: r, setCurrentData: t, ...i }) => {
          let o = (e) => {
            t(e), i.close && i.close();
          };
          return (0, n.jsx)(g, {
            children: e.map((e, t) =>
              (0, n.jsx)(
                p,
                {
                  className: t === r ? 'active' : '',
                  variant: 'select',
                  onClick: () => o(t),
                  children: e.label,
                },
                t
              )
            ),
          });
        };
      var f = t(11209);
      let x = (0, o.Ay)(f.uM).withConfig({ componentId: 'sc-29ce7b14-0' })([
          'display:flex;flex-direction:column;h3{font-size:var(--font-size-2);}',
        ]),
        b = o.Ay.h3.withConfig({ componentId: 'sc-29ce7b14-1' })([
          'font-size:var(--font-size-3);margin:auto;padding-left:var(--spacing-2);',
        ]),
        C = ({
          selectedChartIndex: e,
          selectChartList: r,
          setChartSelectedIndex: t,
          isDisabled: i,
        }) =>
          (0, n.jsx)(n.Fragment, {
            children:
              1 === r.length
                ? (0, n.jsx)(b, { children: r[0]?.label ?? 'Loading' })
                : (0, n.jsx)(f.Ay, {
                    buttonProps: { isDisabled: i },
                    placement: 'bottom',
                    offset: 0,
                    buttonStyles: { padding: '0.5rem' },
                    label: (0, n.jsx)('h3', { children: r[e]?.label ?? 'Loading' }),
                    showExpandIcon: !0,
                    children: (0, n.jsx)(x, {
                      title: 'Select Chart',
                      children: (0, n.jsx)(m, { data: r, currentData: e, setCurrentData: t }),
                    }),
                  }),
          }),
        v = o.Ay.div.withConfig({ componentId: 'sc-349a4466-0' })([
          'display:flex;flex-direction:column;margin:var(--spacing-2) auto 0 0;border-top:1px solid var(--border-600);',
        ]),
        y = o.Ay.div.withConfig({ componentId: 'sc-349a4466-1' })([
          'display:flex;margin-top:var(--spacing-2);',
        ]),
        w = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-349a4466-2' })([
          'color:var(--page--text-color);margin-right:var(--spacing-2);margin-top:var(--spacing-1);&.active{color:var(--button_text--hover--color);background-color:var(--button_outlined--hover--background-color);&:hover{opacity:0.8;}}',
        ]),
        j = ({ currentTimeOption: e, setCurrentTimeOption: r, ...t }) => {
          let i = (e) => {
            r(e), t.close && t.close();
          };
          return (0, n.jsxs)(v, {
            children: [
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(w, {
                    className: '15m' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('15m'),
                    children: '15m',
                  }),
                  (0, n.jsx)(w, {
                    className: '30m' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('30m'),
                    children: '30m',
                  }),
                ],
              }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(w, {
                    className: '1h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('1h'),
                    children: '1h',
                  }),
                  (0, n.jsx)(w, {
                    className: '4h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('4h'),
                    children: '4h',
                  }),
                  (0, n.jsx)(w, {
                    className: '6h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('6h'),
                    children: '6h',
                  }),
                ],
              }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(w, {
                    className: '1d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('1d'),
                    children: '1d',
                  }),
                  (0, n.jsx)(w, {
                    className: '7d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('7d'),
                    children: '7d',
                  }),
                  (0, n.jsx)(w, {
                    className: '14d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('14d'),
                    children: '14d',
                  }),
                ],
              }),
            ],
          });
        },
        A = (0, o.Ay)(f.uM).withConfig({ componentId: 'sc-5bc9254e-0' })([
          'display:flex;flex-direction:column;h3{font-size:var(--font-size-2);margin-right:auto;}',
        ]),
        k = ({ currentTimeOption: e, setCurrentTimeOption: r, isDisabled: t }) =>
          (0, n.jsx)(f.Ay, {
            buttonProps: { isDisabled: t },
            placement: 'bottom',
            offset: 0,
            buttonStyles: {
              padding: '0.5rem',
              border: '1px solid var(--nav_button--border-color)',
            },
            label: (0, n.jsx)('h3', { children: e }),
            showExpandIcon: !0,
            buttonVariant: 'outlined',
            children: (0, n.jsx)(A, {
              title: 'Select Timeframe',
              children: (0, n.jsx)(j, { currentTimeOption: e, setCurrentTimeOption: r }),
            }),
          });
      var S = t(38526),
        I = t(56457),
        R = t(99599);
      let V = {
          backgroundColor: '#fafafa',
          lineColor: '#2962FF',
          textColor: 'black',
          areaTopColor: '#2962FF',
          areaBottomColor: 'rgba(41, 98, 255, 0.28)',
          chartGreenColor: '#2962FF',
          chartRedColor: '#ef5350',
          chartLabelColor: '#9B7DFF',
          chartVolumeRed: '#ef53507e',
          chartVolumeGreen: '#26a6997e',
          chartOraclePrice: '#3360c9c0',
          rangeColor: '#dfb316',
          rangeColorA25: '#dfb4167f',
          rangeColorOld: '#ab792f',
          rangeColorA25Old: '#ab792f25',
        },
        z = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-0' })([
          'display:flex;flex-direction:column;',
        ]),
        F = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-5e45ccb0-1' })([
          'margin:auto var(--spacing-3) auto 0;',
        ]),
        D = (0, o.Ay)(I.A).withConfig({ componentId: 'sc-5e45ccb0-2' })(['']),
        O = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-3' })([
          'display:flex;flex-direction:row;margin-bottom:var(--spacing-3);padding-right:var(--spacing-2);',
        ]),
        L = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-4' })([
          'display:flex;flex-direction:row;margin-right:auto;',
        ]),
        P = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-5e45ccb0-5' })([
          'margin-left:var(--spacing-2);margin-right:var(--spacing-2);box-shadow:none;display:none;align-items:center;&.active:not(:disabled){box-shadow:none;}@media (min-width:31.25rem){display:flex;}',
        ]),
        M = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-5e45ccb0-6' })([
          'margin-left:var(--spacing-2);box-shadow:none;display:none;align-items:center;&.active:not(:disabled){box-shadow:none;}@media (min-width:31.25rem){display:flex;}',
        ]),
        E = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-7' })(
          [
            'display:flex;flex-direction:column;position:relative;width:100%;min-height:',
            ';padding-bottom:var(--spacing-3);',
          ],
          (e) =>
            e.chartExpanded
              ? e.chartHeight.expanded.toString() + 'px'
              : e.chartHeight.standard.toString() + 'px'
        ),
        N = (0, o.Ay)(R.V).withConfig({ componentId: 'sc-5e45ccb0-8' })([
          'flex-direction:column;gap:var(--spacing-2);',
        ]),
        q = o.Ay.p.withConfig({ componentId: 'sc-5e45ccb0-9' })(['font-size:var(--font-size-2);']),
        $ = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-10' })([
          'display:flex;flex-direction:column;',
        ]),
        _ = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-11' })([
          'display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;gap:var(--spacing-2);',
        ]),
        B = (0, o.Ay)(S.A).withConfig({ componentId: 'sc-5e45ccb0-12' })([
          'align-items:center;justify-content:center;display:flex;font-size:var(--font-size-1);font-weight:var(--font-weight);margin-right:0;svg{margin-right:0;}',
        ]),
        T = o.Ay.p.withConfig({ componentId: 'sc-5e45ccb0-13' })([
          'font-size:var(--font-size-1);font-weight:none;',
        ]),
        H = ({
          chartType: e,
          chartStatus: r,
          chartHeight: t,
          chartExpanded: o,
          themeType: l,
          ohlcData: a,
          volumeData: c,
          oraclePriceData: s,
          liquidationRange: d,
          selectedChartIndex: u,
          setChartSelectedIndex: g,
          timeOption: p,
          setChartTimeOption: m,
          flipChart: f,
          refetchPricesData: x,
          fetchMoreChartData: b,
          lastFetchEndTime: v,
          refetchingCapped: y,
          selectChartList: w,
          oraclePriceVisible: j,
          liqRangeCurrentVisible: A,
          liqRangeNewVisible: S,
          toggleOraclePriceVisible: H,
          toggleLiqRangeCurrentVisible: W,
          toggleLiqRangeNewVisible: G,
          latestOraclePrice: Y,
        }) => {
          let [U, Q] = (0, i.useState)(!1),
            Z = [...a],
            J = (0, i.useRef)(null),
            [K, X] = (0, i.useState)(l),
            [ee, er] = (0, i.useState)(V);
          return (
            (0, i.useEffect)(() => {
              let r = getComputedStyle(document.body),
                t =
                  'crvusd' !== e || o
                    ? r.getPropertyValue('--box--secondary--background-color')
                    : r.getPropertyValue('--tab-secondary--content--background-color'),
                n = r.getPropertyValue('--line-color'),
                i = r.getPropertyValue('--page--text-color'),
                a = r.getPropertyValue('--area-top-color'),
                c = r.getPropertyValue('--area-bottom-color'),
                s = r.getPropertyValue('--chart-green'),
                d = r.getPropertyValue('--chart-red'),
                u = r.getPropertyValue('--chart-label'),
                h = r.getPropertyValue('--chart-volume-green'),
                g = r.getPropertyValue('--chart-volume-red'),
                p = r.getPropertyValue('--chart-oracle-price-line'),
                m = r.getPropertyValue('--chart-liq-range'),
                f = r.getPropertyValue('--chart-liq-range-a25');
              er({
                backgroundColor: t,
                lineColor: n,
                textColor: i,
                areaTopColor: a,
                areaBottomColor: c,
                chartGreenColor: s,
                chartRedColor: d,
                chartLabelColor: u,
                chartVolumeRed: g,
                chartVolumeGreen: h,
                chartOraclePrice: p,
                rangeColor: m,
                rangeColorA25: f,
                rangeColorOld: r.getPropertyValue('--chart-liq-range-old'),
                rangeColorA25Old: r.getPropertyValue('--chart-liq-range-a25-old'),
              }),
                X(l);
            }, [o, e, K, l]),
            (0, n.jsx)(z, {
              children: (0, n.jsxs)($, {
                children: [
                  (0, n.jsxs)(O, {
                    children: [
                      (0, n.jsx)(L, {
                        children:
                          void 0 !== u && void 0 !== g
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(C, {
                                    isDisabled: !1,
                                    selectedChartIndex: u,
                                    selectChartList: w ?? [],
                                    setChartSelectedIndex: g,
                                  }),
                                  u > 1 &&
                                    void 0 !== f &&
                                    (0, n.jsx)(F, {
                                      onClick: () => f(),
                                      variant: 'icon-outlined',
                                      children: (0, n.jsx)(D, {
                                        name: 'ArrowsHorizontal',
                                        size: 16,
                                        'aria-label': 'Flip tokens',
                                      }),
                                    }),
                                ],
                              })
                            : (0, n.jsx)(C, {
                                isDisabled: !1,
                                selectedChartIndex: 0,
                                selectChartList: w ?? [],
                                setChartSelectedIndex: () => 0,
                              }),
                      }),
                      (0, n.jsx)(M, {
                        size: 'small',
                        variant: 'select',
                        onClick: () => {
                          x();
                        },
                        children: (0, n.jsx)(I.A, {
                          name: 'Renew',
                          size: 16,
                          'aria-label': 'Refresh chart',
                        }),
                      }),
                      (0, n.jsx)(P, {
                        size: 'small',
                        variant: 'select',
                        className: U ? 'active' : '',
                        onClick: () => Q(!U),
                        children: (0, n.jsx)(I.A, {
                          name: 'Cursor_1',
                          size: 16,
                          'aria-label': 'Toggle magnet mode',
                        }),
                      }),
                      (0, n.jsx)(k, {
                        isDisabled: 'READY' !== r,
                        currentTimeOption: p,
                        setCurrentTimeOption: m,
                      }),
                    ],
                  }),
                  'crvusd' === e &&
                    H &&
                    G &&
                    W &&
                    (0, n.jsxs)(_, {
                      children: [
                        s &&
                          s?.length > 0 &&
                          (0, n.jsx)(B, {
                            fillColor: 'var(--chart-oracle-price-line)',
                            blank: !0,
                            isSelected: j,
                            onChange: () => H(),
                            children: 'Oracle Price',
                          }),
                        d?.new &&
                          G &&
                          (0, n.jsx)(B, {
                            fillColor: 'var(--chart-liq-range)',
                            blank: !0,
                            isSelected: S,
                            onChange: () => G(),
                            children: (0, n.jsx)(T, { children: 'Liquidation Range (New)' }),
                          }),
                        d?.current &&
                          (0, n.jsx)(B, {
                            fillColor: d.new
                              ? 'var(--chart-liq-range-old)'
                              : 'var(--chart-liq-range)',
                            blank: !0,
                            isSelected: A,
                            onChange: () => W(),
                            children: (0, n.jsx)(T, { children: 'Liquidation Range (Current)' }),
                          }),
                      ],
                    }),
                  'READY' === r &&
                    (0, n.jsx)(E, {
                      ref: J,
                      chartExpanded: o,
                      chartHeight: t,
                      children: (0, n.jsx)(h, {
                        chartHeight: t,
                        ohlcData: Z,
                        volumeData: c,
                        oraclePriceData: s,
                        liquidationRange: d,
                        timeOption: p,
                        wrapperRef: J,
                        chartExpanded: o,
                        magnet: U,
                        colors: ee,
                        refetchingCapped: y,
                        fetchMoreChartData: b,
                        lastFetchEndTime: v,
                        liqRangeCurrentVisible: A,
                        liqRangeNewVisible: S,
                        oraclePriceVisible: j,
                        latestOraclePrice: Y,
                      }),
                    }),
                  'LOADING' === r &&
                    (0, n.jsx)(N, {
                      minHeight: o ? t.expanded.toString() + 'px' : t.standard.toString() + 'px',
                      children: (0, n.jsx)(R.A, { size: 18 }),
                    }),
                  'ERROR' === r &&
                    (0, n.jsxs)(N, {
                      minHeight: o ? t.expanded.toString() + 'px' : t.standard.toString() + 'px',
                      children: [
                        (0, n.jsx)(q, {
                          children: `Unable to fetch ${void 0 !== u ? w?.[u].label : w[0].label} data.`,
                        }),
                        (0, n.jsx)(M, {
                          size: 'small',
                          variant: 'text',
                          onClick: () => {
                            x();
                          },
                          children: (0, n.jsx)(I.A, {
                            name: 'Renew',
                            size: 16,
                            'aria-label': 'Refresh chart',
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        };
    },
    86854: (e, r, t) => {
      t.d(r, { A: () => v });
      var n = t(54568),
        i = t(61773),
        o = t(48341),
        l = t(64387),
        a = t(35736),
        c = t(77241);
      let s = o.Ay.div.withConfig({ componentId: 'sc-e77517e5-0' })([
          'display:flex;flex-direction:column;gap:var(--spacing-2);text-align:left;z-index:2;',
        ]),
        d = o.Ay.h3.withConfig({ componentId: 'sc-e77517e5-1' })([
          'font-size:var(--font-size-3);font-weight:var(--semi-bold);text-align:left;',
        ]),
        u = o.Ay.p.withConfig({ componentId: 'sc-e77517e5-2' })([
          'text-align:left;font-weight:normal;',
        ]),
        h = o.Ay.p.withConfig({ componentId: 'sc-e77517e5-3' })([
          'text-align:left;font-weight:normal;font-size:var(--font-size-2);font-style:italic;',
        ]),
        g = ({ rewardsPool: e }) => {
          let {
              campaignName: r,
              platform: t,
              description: i,
              action: o,
              dashboardLink: g,
              campaignStart: p,
              campaignEnd: m,
            } = e,
            f = (0, c.Yq)(new Date(1e3 * +p)),
            x = (0, c.Yq)(new Date(1e3 * +m));
          return (0, n.jsxs)(s, {
            children: [
              r && t
                ? (0, n.jsxs)(l.A, {
                    flex: !0,
                    flexColumn: !0,
                    children: [
                      (0, n.jsx)(d, { children: r }),
                      (0, n.jsxs)(u, { children: ['by ', t] }),
                    ],
                  })
                : r
                  ? (0, n.jsx)(d, { children: r })
                  : (0, n.jsx)(d, { children: t }),
              p &&
                '0' !== p &&
                m &&
                '0' !== m &&
                (0, n.jsxs)(l.A, {
                  flex: !0,
                  flexColumn: !0,
                  children: [
                    (0, n.jsx)(u, { children: `from: ${f}` }),
                    (0, n.jsx)(u, { children: `to: ${x}` }),
                  ],
                }),
              (0, n.jsx)(u, {
                children:
                  'lp' === o
                    ? i
                    : 'supply' === o
                      ? 'Earn points by supplying liquidity.'
                      : 'Earn points by borrowing.',
              }),
              (0, n.jsx)(h, {
                children:
                  'External rewards are project dependent, always check with the token issuer to make sure you have taken all the necessary actions to benefit from their rewards program.',
              }),
              (0, n.jsx)(a.G, { $noStyles: !0, href: g, children: 'Go to issuer' }),
            ],
          });
        };
      var p = t(56457),
        m = t(50567);
      let f = o.Ay.div.withConfig({ componentId: 'sc-a3b97d0f-0' })(
          [
            'display:flex;flex-direction:row;align-items:center;gap:var(--spacing-1);padding:var(--spacing-1);border:',
            ';',
          ],
          ({ highContrast: e }) => (e ? '1px solid var(--white)' : '1px solid var(--gray-500a25)')
        ),
        x = (0, o.Ay)(i.default).withConfig({ componentId: 'sc-a3b97d0f-1' })([
          'border:1px solid transparent;border-radius:50%;',
        ]),
        b = o.Ay.p.withConfig({ componentId: 'sc-a3b97d0f-2' })(
          ['text-transform:uppercase;font-size:var(--font-size-3);color:', ';white-space:nowrap;'],
          ({ highContrast: e }) => (e ? 'var(--white)' : 'var(--page--text-color)')
        ),
        C = (0, o.Ay)(p.A).withConfig({ componentId: 'sc-a3b97d0f-3' })(
          ['color:', ';'],
          ({ $highContrast: e }) => (e ? 'var(--white)' : 'var(--page--text-color)')
        ),
        v = ({ rewardsPool: e, highContrast: r, mobile: t, banner: i }) => {
          let { platform: o, multiplier: l, platformImageSrc: a } = e;
          return (0, n.jsx)(m.Ay, {
            tooltip: (0, n.jsx)(g, { rewardsPool: e }),
            minWidth: '200px',
            placement: t ? 'top' : 'auto',
            increaseZIndex: i,
            children: (0, n.jsxs)(f, {
              highContrast: r,
              children: [
                (0, n.jsx)(x, { src: a, alt: o, width: 16, height: 16 }),
                !!l && (0, n.jsx)(b, { highContrast: r, children: `${l}` }),
                e.lock && (0, n.jsx)(C, { size: 16, name: 'Locked', $highContrast: r }),
              ],
            }),
          });
        };
    },
    95292: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(7620);
      function i(e, r, t) {
        let i = (0, n.useRef)(null),
          o = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          o.current = e;
        }, [e]),
          (0, n.useEffect)(() => {
            if (null !== r && t) {
              let e = setInterval(function () {
                o.current();
              }, r);
              return (i.current = e), () => clearInterval(e);
            }
          }, [r, t]);
      }
    },
  },
]);
