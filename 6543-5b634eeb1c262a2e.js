'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6543],
  {
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
    34202: (e, r, t) => {
      t.d(r, { y: () => g });
      var n = t(54568),
        i = t(17703),
        o = t(33161),
        l = t(94804),
        a = t(50010),
        c = t(12312),
        s = t(40576),
        d = t(33431),
        u = t(87401),
        h = t(84032);
      let g = ({
        children: e,
        open: r,
        onClose: t,
        onTransitionExited: g,
        title: p,
        titleAction: m,
        footer: x,
        sx: f,
      }) =>
        (0, n.jsx)(s.A, {
          open: r,
          onClose: t,
          onTransitionExited: g,
          sx: f,
          disableRestoreFocus: !0,
          children: (0, n.jsxs)(o.A, {
            sx: {
              ...h.B.ModalHeight.sm,
              width: h.B.ModalWidth.sm,
              maxWidth: '100vw',
              display: 'flex',
              flexDirection: 'column',
              [`@media (min-width: ${h.B.ModalWidth.md})`]: {
                ...h.B.ModalHeight.md,
                width: h.B.ModalWidth.md,
              },
            },
            children: [
              (0, n.jsx)(c.A, {
                action: (0, n.jsx)(d.A, {
                  onClick: t,
                  size: 'extraSmall',
                  children: (0, n.jsx)(i.A, {}),
                }),
                avatar: m,
                title: (0, n.jsx)(u.A, {
                  variant: 'headingXsBold',
                  color: 'textSecondary',
                  children: p,
                }),
              }),
              (0, n.jsx)(a.A, {
                sx: { flexGrow: 1, overflowY: 'hidden', display: 'flex', flexDirection: 'column' },
                children: e,
              }),
              x && (0, n.jsx)(l.A, { children: x }),
            ],
          }),
        });
    },
    63058: (e, r, t) => {
      t.d(r, { A: () => _ });
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
          refetchingCapped: x,
          fetchMoreChartData: f,
          lastFetchEndTime: b,
          oraclePriceVisible: C,
          liqRangeCurrentVisible: v,
          liqRangeNewVisible: y,
          latestOraclePrice: j,
        }) => {
          let w = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            V = (0, i.useRef)(null),
            R = (0, i.useRef)(null),
            F = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            M = (0, i.useRef)(null),
            O = (0, i.useRef)(b),
            D = (0, i.useRef)(!0),
            P = (0, i.useRef)(4),
            [L, z] = (0, i.useState)(!1),
            [E, T] = (0, i.useState)(null),
            [B, N] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            O.current = b;
          }, [b]);
          let q = (0, i.useRef)(
            s()(
              () => {
                !B && !x && (N(!0), f(O.current));
              },
              500,
              { leading: !0, trailing: !1 }
            )
          );
          return (
            (0, i.useEffect)(() => {
              if (!w.current) return;
              (A.current = (0, a.R9)(w.current, {
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
                (D.current = !0);
              let n = () => {
                  A.current &&
                    ((V.current = A.current.addAreaSeries({
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
                          return (P.current = e >= 1 ? 4 : t + 4), e.toFixed(P.current);
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
                          return (P.current = e >= 1 ? 4 : t + 4), e.toFixed(P.current);
                        },
                        minMove: 1e-7,
                      },
                    })));
                },
                i = () => {
                  A.current &&
                    ((S.current = A.current.addAreaSeries({
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
                          return (P.current = e >= 1 ? 4 : t + 4), e.toFixed(P.current);
                        },
                        minMove: 1e-7,
                      },
                    })),
                    (k.current = A.current.addAreaSeries({
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
                          return (P.current = e >= 1 ? 4 : t + 4), e.toFixed(P.current);
                        },
                        minMove: 1e-7,
                      },
                    })));
                };
              l &&
                l.current &&
                l.new &&
                (l.new.price2[0].value > l.current.price2[0].value ? (i(), n()) : (n(), i())),
                l && !l.current && l.new && !S.current && i(),
                l && l.current && !l.new && !V.current && n(),
                r &&
                  !F.current &&
                  (F.current = A.current.addCandlestickSeries({
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
                        return (P.current = e >= 1 ? 4 : t + 4), e.toFixed(P.current);
                      },
                      minMove: 1e-7,
                    },
                  })),
                t &&
                  !I.current &&
                  ((I.current = A.current.addHistogramSeries({
                    priceFormat: { type: 'volume' },
                    priceScaleId: '',
                  })),
                  I.current.priceScale().applyOptions({ scaleMargins: { top: 0.7, bottom: 0 } })),
                o &&
                  !M.current &&
                  (M.current = A.current.addLineSeries({
                    color: m.chartOraclePrice,
                    lineWidth: 2,
                    priceLineStyle: 2,
                    visible: C,
                  }));
              let s = () => {
                  if (B || x || !A.current || !F.current) return;
                  let e = A.current.timeScale(),
                    r = e.getVisibleLogicalRange();
                  if (!r) return;
                  let t = F.current.barsInLogicalRange(r);
                  t && t.barsBefore < 50 && (q.current(), T(e.getVisibleRange()));
                },
                u = A.current.timeScale();
              return (
                u.subscribeVisibleLogicalRangeChange(s),
                () => {
                  u.unsubscribeVisibleLogicalRangeChange(s),
                    (F.current = null),
                    A.current && (A.current.remove(), (A.current = null)),
                    (S.current = null),
                    (k.current = null),
                    (V.current = null),
                    (R.current = null),
                    (F.current = null),
                    (I.current = null),
                    (M.current = null);
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
              B,
              E,
              v,
              y,
              l,
              p,
              r,
              o,
              C,
              x,
              c,
              t,
              h,
            ]),
            (0, i.useEffect)(() => {
              if (!A.current) return;
              let e = A.current.timeScale();
              F.current && (F.current.setData(r), N(!1), E && e.setVisibleRange(E)),
                I.current && void 0 !== t && I.current.setData(t),
                M.current && void 0 !== o && M.current.setData(o),
                void 0 !== l &&
                  (l.new &&
                    S.current &&
                    k.current &&
                    (S.current.setData(l.new.price1), k.current.setData(l.new.price2)),
                  l.current &&
                    V.current &&
                    R.current &&
                    (V.current.setData(l.current.price1), R.current.setData(l.current.price2)),
                  V.current &&
                    R.current &&
                    l &&
                    l.current &&
                    l.new &&
                    (V.current.applyOptions({
                      topColor: m.rangeColorA25Old,
                      bottomColor: m.rangeColorA25Old,
                      lineColor: m.rangeColorOld,
                    }),
                    R.current.applyOptions({
                      topColor: m.backgroundColor,
                      bottomColor: m.backgroundColor,
                      lineColor: m.rangeColorOld,
                    }))),
                j &&
                  M.current &&
                  o &&
                  o[o.length - 1].value !== +j &&
                  M.current.update({ time: o[o.length - 1].time, value: +j });
            }, [m.backgroundColor, m.rangeColorA25Old, m.rangeColorOld, f, B, E, j, l, r, o, x, t]),
            (0, i.useEffect)(
              () => (
                (h.current = new ResizeObserver((e) => {
                  if (L) return;
                  let { width: r, height: t } = e[0].contentRect;
                  (r -= 1) <= 0 ||
                    (A.current?.applyOptions({ width: r, height: t }),
                    A.current?.timeScale().getVisibleLogicalRange());
                })),
                h.current.observe(w.current),
                () => {
                  z(!0), h?.current && h.current.disconnect();
                }
              ),
              [h, L]
            ),
            (0, n.jsx)(u, { ref: w })
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
      var x = t(11209);
      let f = (0, o.Ay)(x.uM).withConfig({ componentId: 'sc-29ce7b14-0' })([
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
                : (0, n.jsx)(x.Ay, {
                    buttonProps: { isDisabled: i },
                    placement: 'bottom',
                    offset: 0,
                    buttonStyles: { padding: '0.5rem' },
                    label: (0, n.jsx)('h3', { children: r[e]?.label ?? 'Loading' }),
                    showExpandIcon: !0,
                    children: (0, n.jsx)(f, {
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
        j = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-349a4466-2' })([
          'color:var(--page--text-color);margin-right:var(--spacing-2);margin-top:var(--spacing-1);&.active{color:var(--button_text--hover--color);background-color:var(--button_outlined--hover--background-color);&:hover{opacity:0.8;}}',
        ]),
        w = ({ currentTimeOption: e, setCurrentTimeOption: r, ...t }) => {
          let i = (e) => {
            r(e), t.close && t.close();
          };
          return (0, n.jsxs)(v, {
            children: [
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(j, {
                    className: '15m' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('15m'),
                    children: '15m',
                  }),
                  (0, n.jsx)(j, {
                    className: '30m' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('30m'),
                    children: '30m',
                  }),
                ],
              }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(j, {
                    className: '1h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('1h'),
                    children: '1h',
                  }),
                  (0, n.jsx)(j, {
                    className: '4h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('4h'),
                    children: '4h',
                  }),
                  (0, n.jsx)(j, {
                    className: '6h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('6h'),
                    children: '6h',
                  }),
                ],
              }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(j, {
                    className: '1d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('1d'),
                    children: '1d',
                  }),
                  (0, n.jsx)(j, {
                    className: '7d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('7d'),
                    children: '7d',
                  }),
                  (0, n.jsx)(j, {
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
        A = (0, o.Ay)(x.uM).withConfig({ componentId: 'sc-5bc9254e-0' })([
          'display:flex;flex-direction:column;h3{font-size:var(--font-size-2);margin-right:auto;}',
        ]),
        S = ({ currentTimeOption: e, setCurrentTimeOption: r, isDisabled: t }) =>
          (0, n.jsx)(x.Ay, {
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
              children: (0, n.jsx)(w, { currentTimeOption: e, setCurrentTimeOption: r }),
            }),
          });
      var k = t(38526),
        V = t(56457),
        R = t(99599);
      let F = {
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
        I = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-0' })([
          'display:flex;flex-direction:column;',
        ]),
        M = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-5e45ccb0-1' })([
          'margin:auto var(--spacing-3) auto 0;',
        ]),
        O = (0, o.Ay)(V.A).withConfig({ componentId: 'sc-5e45ccb0-2' })(['']),
        D = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-3' })([
          'display:flex;flex-direction:row;margin-bottom:var(--spacing-3);padding-right:var(--spacing-2);',
        ]),
        P = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-4' })([
          'display:flex;flex-direction:row;margin-right:auto;',
        ]),
        L = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-5e45ccb0-5' })([
          'margin-left:var(--spacing-2);margin-right:var(--spacing-2);box-shadow:none;display:none;align-items:center;&.active:not(:disabled){box-shadow:none;}@media (min-width:31.25rem){display:flex;}',
        ]),
        z = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-5e45ccb0-6' })([
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
        T = (0, o.Ay)(R.V).withConfig({ componentId: 'sc-5e45ccb0-8' })([
          'flex-direction:column;gap:var(--spacing-2);',
        ]),
        B = o.Ay.p.withConfig({ componentId: 'sc-5e45ccb0-9' })(['font-size:var(--font-size-2);']),
        N = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-10' })([
          'display:flex;flex-direction:column;',
        ]),
        q = o.Ay.div.withConfig({ componentId: 'sc-5e45ccb0-11' })([
          'display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;gap:var(--spacing-2);',
        ]),
        H = (0, o.Ay)(k.A).withConfig({ componentId: 'sc-5e45ccb0-12' })([
          'align-items:center;justify-content:center;display:flex;font-size:var(--font-size-1);font-weight:var(--font-weight);margin-right:0;svg{margin-right:0;}',
        ]),
        W = o.Ay.p.withConfig({ componentId: 'sc-5e45ccb0-13' })([
          'font-size:var(--font-size-1);font-weight:none;',
        ]),
        _ = ({
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
          flipChart: x,
          refetchPricesData: f,
          fetchMoreChartData: b,
          lastFetchEndTime: v,
          refetchingCapped: y,
          selectChartList: j,
          oraclePriceVisible: w,
          liqRangeCurrentVisible: A,
          liqRangeNewVisible: k,
          toggleOraclePriceVisible: _,
          toggleLiqRangeCurrentVisible: G,
          toggleLiqRangeNewVisible: Y,
          latestOraclePrice: $,
        }) => {
          let [U, Z] = (0, i.useState)(!1),
            K = [...a],
            X = (0, i.useRef)(null),
            [J, Q] = (0, i.useState)(l),
            [ee, er] = (0, i.useState)(F);
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
                x = r.getPropertyValue('--chart-liq-range-a25');
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
                rangeColorA25: x,
                rangeColorOld: r.getPropertyValue('--chart-liq-range-old'),
                rangeColorA25Old: r.getPropertyValue('--chart-liq-range-a25-old'),
              }),
                Q(l);
            }, [o, e, J, l]),
            (0, n.jsx)(I, {
              children: (0, n.jsxs)(N, {
                children: [
                  (0, n.jsxs)(D, {
                    children: [
                      (0, n.jsx)(P, {
                        children:
                          void 0 !== u && void 0 !== g
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(C, {
                                    isDisabled: !1,
                                    selectedChartIndex: u,
                                    selectChartList: j ?? [],
                                    setChartSelectedIndex: g,
                                  }),
                                  u > 1 &&
                                    void 0 !== x &&
                                    (0, n.jsx)(M, {
                                      onClick: () => x(),
                                      variant: 'icon-outlined',
                                      children: (0, n.jsx)(O, {
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
                                selectChartList: j ?? [],
                                setChartSelectedIndex: () => 0,
                              }),
                      }),
                      (0, n.jsx)(z, {
                        size: 'small',
                        variant: 'select',
                        onClick: () => {
                          f();
                        },
                        children: (0, n.jsx)(V.A, {
                          name: 'Renew',
                          size: 16,
                          'aria-label': 'Refresh chart',
                        }),
                      }),
                      (0, n.jsx)(L, {
                        size: 'small',
                        variant: 'select',
                        className: U ? 'active' : '',
                        onClick: () => Z(!U),
                        children: (0, n.jsx)(V.A, {
                          name: 'Cursor_1',
                          size: 16,
                          'aria-label': 'Toggle magnet mode',
                        }),
                      }),
                      (0, n.jsx)(S, {
                        isDisabled: 'READY' !== r,
                        currentTimeOption: p,
                        setCurrentTimeOption: m,
                      }),
                    ],
                  }),
                  'crvusd' === e &&
                    _ &&
                    Y &&
                    G &&
                    (0, n.jsxs)(q, {
                      children: [
                        s &&
                          s?.length > 0 &&
                          (0, n.jsx)(H, {
                            fillColor: 'var(--chart-oracle-price-line)',
                            blank: !0,
                            isSelected: w,
                            onChange: () => _(),
                            children: 'Oracle Price',
                          }),
                        d?.new &&
                          Y &&
                          (0, n.jsx)(H, {
                            fillColor: 'var(--chart-liq-range)',
                            blank: !0,
                            isSelected: k,
                            onChange: () => Y(),
                            children: (0, n.jsx)(W, { children: 'Liquidation Range (New)' }),
                          }),
                        d?.current &&
                          (0, n.jsx)(H, {
                            fillColor: d.new
                              ? 'var(--chart-liq-range-old)'
                              : 'var(--chart-liq-range)',
                            blank: !0,
                            isSelected: A,
                            onChange: () => G(),
                            children: (0, n.jsx)(W, { children: 'Liquidation Range (Current)' }),
                          }),
                      ],
                    }),
                  'READY' === r &&
                    (0, n.jsx)(E, {
                      ref: X,
                      chartExpanded: o,
                      chartHeight: t,
                      children: (0, n.jsx)(h, {
                        chartHeight: t,
                        ohlcData: K,
                        volumeData: c,
                        oraclePriceData: s,
                        liquidationRange: d,
                        timeOption: p,
                        wrapperRef: X,
                        chartExpanded: o,
                        magnet: U,
                        colors: ee,
                        refetchingCapped: y,
                        fetchMoreChartData: b,
                        lastFetchEndTime: v,
                        liqRangeCurrentVisible: A,
                        liqRangeNewVisible: k,
                        oraclePriceVisible: w,
                        latestOraclePrice: $,
                      }),
                    }),
                  'LOADING' === r &&
                    (0, n.jsx)(T, {
                      minHeight: o ? t.expanded.toString() + 'px' : t.standard.toString() + 'px',
                      children: (0, n.jsx)(R.A, { size: 18 }),
                    }),
                  'ERROR' === r &&
                    (0, n.jsxs)(T, {
                      minHeight: o ? t.expanded.toString() + 'px' : t.standard.toString() + 'px',
                      children: [
                        (0, n.jsx)(B, {
                          children: `Unable to fetch ${void 0 !== u ? j?.[u].label : j[0].label} data.`,
                        }),
                        (0, n.jsx)(z, {
                          size: 'small',
                          variant: 'text',
                          onClick: () => {
                            f();
                          },
                          children: (0, n.jsx)(V.A, {
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
    85806: (e, r, t) => {
      t.d(r, { n: () => P });
      var n = t(54568),
        i = t(87923),
        o = t(33431),
        l = t(42822),
        a = t(7620),
        c = t(64779),
        s = t(24388),
        d = t(2926),
        u = t(44876),
        h = t(56120),
        g = t(93796),
        p = t(14283),
        m = t(47983),
        x = t(97669),
        f = t(50520),
        b = t(4609),
        C = t(31184),
        v = t(41032),
        y = t(77241),
        j = t(36074),
        w = t(34202),
        A = t(69228);
      let { Spacing: S, IconSize: k } = t(84032).B,
        V = { STABLE: 0.1, CRYPTO: 0.5 },
        R = (0, y.ZV)(V.STABLE, { style: 'percent', maximumFractionDigits: 1 }),
        F = (0, y.ZV)(V.CRYPTO, { style: 'percent', maximumFractionDigits: 1 }),
        I = {
          'too-high': {
            message: (0, j.t)`High slippage selected`,
            helperText: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, j.t)`This may lead to fewer tokens received and potential loss of funds.`,
                (0, n.jsx)('br', {}),
                (0, j.t)`Proceed with caution.`,
              ],
            }),
          },
          'too-low': {
            message: (0, j.t)`Low slippage selected`,
            helperText: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, j.t)`Your transaction may fail if price moves slightly.`,
                (0, n.jsx)('br', {}),
                (0, j.t)`Consider increasing slippage if it doesn't go through.`,
                (0, n.jsx)('br', {}),
                (0, n.jsx)('br', {}),
                (0, j.t)`Min. slippage is ${0.01}%`,
              ],
            }),
          },
        };
      function M(e) {
        let r = Number(e);
        if (0 !== r) {
          if (r > 5) return 'too-high';
          if (r < 0.01) return 'too-low';
        }
      }
      function O(e) {
        let r = !Object.values(V).includes(Number(e));
        return { selected: r ? 'custom' : e, customValue: r ? e : '', error: r ? M(e) : void 0 };
      }
      let D = ({ isOpen: e, maxSlippage: r, onSave: t, onClose: i }) => {
          let [o, l] = (0, a.useState)(O(r)),
            { error: y, selected: D, customValue: P } = o,
            [L, z] = (0, a.useState)(void 0);
          (0, a.useEffect)(() => {
            l(O(r));
          }, [r]),
            (0, a.useEffect)(() => {
              y && z(y);
            }, [y]);
          let E = D && ('custom' !== D || (P && (!y || 'too-high' === y))),
            T = (0, n.jsx)(h.A, {
              fullWidth: !0,
              disabled: !E,
              onClick: () => t('custom' === D ? P : D),
              children: (0, j.t)`Save`,
            }),
            B = (0, n.jsx)(v.A, {
              variant: 'standard',
              type: 'number',
              value: P,
              placeholder: (0, j.t)`Custom slippage`,
              slotProps: {
                input: {
                  endAdornment: '%',
                  sx: {
                    color: (e) => ('custom' === D ? 'inherit' : e.design.Text.TextColors.Disabled),
                    paddingLeft: '1ch',
                  },
                },
              },
              error: !!y,
              onChange: (e) =>
                l({ selected: 'custom', customValue: e.target.value, error: M(e.target.value) }),
              onClick: () => l({ ...o, selected: 'custom' }),
              sx: {
                flexGrow: 1,
                '& .MuiInputBase-adornedEnd': {
                  color: (e) => ('custom' === D ? 'inherit' : e.design.Text.TextColors.Disabled),
                  paddingRight: '1ch',
                },
              },
            }),
            N = (0,
            j.t)`Maximum difference between expected price of the trade, versus the price when the trade is executed.`,
            q = (0, n.jsx)(A.m, {
              arrow: !0,
              placement: 'top',
              title: N,
              children: (0, n.jsx)(c.A, { sx: { width: k.xs, height: k.xs } }),
            });
          return (0, n.jsx)(w.y, {
            open: e,
            onClose: i,
            onTransitionExited: () => l(O(r)),
            title: (0, j.t)`Slippage Settings`,
            footer: T,
            sx: { '& .MuiPaper-root': { height: 'auto', minHeight: 'auto' } },
            children: (0, n.jsxs)(C.A, {
              gap: S.md,
              children: [
                (0, n.jsxs)(p.A, {
                  fullWidth: !0,
                  children: [
                    (0, n.jsxs)(x.A, {
                      sx: { color: 'text.secondary', '&.Mui-focused': { color: 'text.secondary' } },
                      children: [(0, j.t)`Max slippage`, ' ', q],
                    }),
                    (0, n.jsxs)(C.A, {
                      direction: { mobile: 'column', tablet: 'row' },
                      justifyContent: 'space-between',
                      gap: S.sm,
                      children: [
                        (0, n.jsxs)(b.A, {
                          row: !0,
                          value: o.selected,
                          onChange: (e) => l({ ...o, selected: e.target.value }),
                          sx: {
                            flexGrow: 1,
                            justifyContent: { mobile: 'space-between', tablet: 'start' },
                            gap: S.xs,
                          },
                          children: [
                            (0, n.jsx)(m.A, {
                              value: V.STABLE.toString(),
                              label: R,
                              control: (0, n.jsx)(f.A, {}),
                            }),
                            (0, n.jsx)(m.A, {
                              value: V.CRYPTO.toString(),
                              label: F,
                              control: (0, n.jsx)(f.A, {}),
                            }),
                          ],
                        }),
                        (0, n.jsx)(u.A, {
                          display: 'flex',
                          flexGrow: 1,
                          justifyContent: { mobile: 'start', tablet: 'end' },
                          children: B,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(g.A, {
                  in: y && 'custom' === D,
                  children: (0, n.jsxs)(s.A, {
                    variant: 'outlined',
                    severity: 'too-low' === L ? 'error' : 'warning',
                    sx: { boxShadow: 'none' },
                    children: [
                      (0, n.jsx)(d.A, { children: L ? I[L].message : '' }),
                      L ? I[L].helperText : '',
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        P = ({ disabled: e = !1, button: r, buttonIcon: t, maxSlippage: a, onSave: c }) => {
          let [s, , d, u] = (0, l.K)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              r
                ? r({ maxSlippage: a, onClick: u })
                : (0, n.jsx)(o.A, {
                    onClick: u,
                    disabled: e,
                    children: t || (0, n.jsx)(i.A, { color: e ? 'disabled' : 'action' }),
                  }),
              (0, n.jsx)(D, {
                isOpen: !!s,
                maxSlippage: a,
                onSave: (e) => {
                  u(), c(e);
                },
                onClose: d,
              }),
            ],
          });
        };
    },
  },
]);
