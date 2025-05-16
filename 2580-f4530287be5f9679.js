'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2580],
  {
    12580: (e, t, n) => {
      n.d(t, { Y: () => e8, g: () => e4 });
      var s = n(54568),
        i = n(62942),
        r = n(7620),
        l = n(31809),
        a = n(14241),
        o = n(64174),
        d = n(21802),
        c = n(89822),
        x = n(44876),
        h = n(55570),
        C = n(95004),
        g = n(74699),
        p = n(47983),
        j = n(55329),
        u = n(36074);
      let m = ({ advancedMode: [e, t], label: n }) => {
        let i = (0, s.jsx)(j.A, {
          checked: e,
          onChange: () => t(!e),
          inputProps: { ...(!n && { 'aria-label': (0, u.t)`Advanced mode` }) },
          size: 'small',
        });
        return (0, s.jsx)(x.A, {
          display: 'inline-flex',
          alignItems: 'center',
          children: n ? (0, s.jsx)(p.A, { control: i, label: n, sx: { marginLeft: 2 } }) : i,
        });
      };
      var f = n(63797),
        v = n(1117),
        A = n(24388),
        w = n(2926),
        b = n(33431),
        y = n(15984),
        k = n(42822),
        L = n(34202),
        M = n(65209),
        S = n(72415),
        I = n(7834),
        z = n.n(I),
        T = n(62082),
        B = n(76653),
        E = n(87401),
        N = n(69879);
      let D = (0, N.A)(
        (0, s.jsxs)('svg', {
          width: '18',
          height: '18',
          viewBox: '0 0 18 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, s.jsx)('path', {
              d: 'M12.5452 6.38367C12.7571 6.08256 12.6848 5.66669 12.3837 5.4548C12.0826 5.24291 11.6667 5.31523 11.4548 5.61634L7.69302 10.9621L6.14241 9.38276C5.88446 9.12003 5.46236 9.11616 5.19964 9.37411C4.93691 9.63206 4.93304 10.0542 5.19099 10.3169L7.3021 12.4671C7.44072 12.6082 7.63489 12.6806 7.83209 12.6645C8.02929 12.6483 8.20915 12.5455 8.32302 12.3837L12.5452 6.38367Z',
              fill: 'currentColor',
            }),
            (0, s.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8.99988 0.169403C4.12296 0.169403 0.169434 4.12293 0.169434 8.99984C0.169434 13.8767 4.12296 17.8303 8.99988 17.8303C13.8768 17.8303 17.8303 13.8767 17.8303 8.99984C17.8303 4.12293 13.8768 0.169403 8.99988 0.169403ZM1.4361 8.99984C1.4361 4.82249 4.82252 1.43607 8.99988 1.43607C13.1772 1.43607 16.5637 4.82249 16.5637 8.99984C16.5637 13.1772 13.1772 16.5636 8.99988 16.5636C4.82253 16.5636 1.4361 13.1772 1.4361 8.99984Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'Checked'
      );
      var P = n(76586),
        Z = n(84032);
      let O = ({ children: e }) =>
        (0, s.jsx)(E.A, {
          variant: 'headingXsBold',
          sx: (e) => ({
            position: 'sticky',
            top: 0,
            backgroundColor: 'background.paper',
            zIndex: 1,
            paddingBlockEnd: Z.B.Spacing.xs,
            height: Z.B.ButtonSize.sm,
            alignContent: 'end',
            borderBottom: `1px solid ${e.design.Layer[1].Outline}`,
          }),
          children: e,
        });
      var H = n(97912),
        V = n(61773);
      let $ = ({ chain: { chainId: e, label: t, src: n }, size: i = 28 }) =>
        (0, s.jsx)(x.A, {
          component: 'span',
          alignItems: 'center',
          display: 'flex',
          'data-testid': `chain-icon-${e}`,
          children: (0, s.jsx)(V.default, { alt: t, src: n, loading: 'lazy', width: i, height: i }),
        });
      var F = (function (e) {
        return (e.test = 'test'), (e.main = 'main'), e;
      })(F || {});
      function R({ chain: e, onChange: t, isSelected: n }) {
        let i = (0, r.useRef)(null);
        return (0, s.jsx)(P.O, {
          hoverEl: i.current,
          children: (0, s.jsxs)(T.A, {
            onClick: () => t(e.chainId),
            'data-testid': `menu-item-chain-${e.chainId}`,
            selected: n,
            tabIndex: 0,
            children: [
              (0, s.jsx)($, { chain: e, size: 36 }),
              (0, s.jsx)(E.A, { sx: { flexGrow: 1 }, variant: 'headingXsBold', children: e.label }),
              n && (0, s.jsx)(D, {}),
            ],
          }),
        });
      }
      function W({ options: e, onChange: t, showTestnets: n, selectedNetwork: i }) {
        let [l, a] = (0, r.useState)(''),
          o = (0, r.useMemo)(
            () =>
              z()(
                e.filter((e) => e.label.toLocaleLowerCase().includes(l.toLocaleLowerCase())),
                (e) => (e.isTestnet ? 'test' : 'main')
              ),
            [e, l]
          ),
          d = { test: (0, u.t)`Test networks`, main: (0, u.t)`Main networks` },
          c = Object.entries(o);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(H.L, {
              sx: { marginBottom: 2 },
              placeholder: (0, u.t)`Search Networks`,
              onSearch: a,
              name: 'chainName',
            }),
            (0, s.jsx)(x.A, {
              sx: { overflowY: 'auto', flexGrow: '1' },
              children: c.length
                ? c
                    .filter(([e]) => n || 'test' !== e)
                    .flatMap(([e, l]) =>
                      (0, s.jsxs)(
                        r.Fragment,
                        {
                          children: [
                            n && (0, s.jsx)(O, { children: d[e] }),
                            (0, s.jsx)(B.A, {
                              children: l.map((e) =>
                                (0, s.jsx)(
                                  R,
                                  { chain: e, onChange: t, isSelected: e.chainId == i?.chainId },
                                  e.chainId
                                )
                              ),
                            }),
                          ],
                        },
                        e
                      )
                    )
                : (0, s.jsx)(A.A, {
                    variant: 'filled',
                    severity: 'info',
                    sx: { marginTop: 3 },
                    children: (0, s.jsx)(w.A, { children: (0, u.t)`No networks found` }),
                  }),
            }),
          ],
        });
      }
      let Y = ({ showTestnets: e, setShowTestnets: t }) =>
          (0, s.jsxs)(x.A, {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            children: [
              (0, s.jsx)(E.A, {
                variant: 'headingXsBold',
                display: 'inline-block',
                sx: { marginLeft: 4, marginRight: 2 },
                children: (0, u.t)`Show testnets`,
              }),
              (0, s.jsx)(j.A, {
                checked: e,
                onChange: () => t(!e),
                color: 'primary',
                inputProps: { 'aria-label': (0, u.t)`Show testnets` },
                size: 'small',
              }),
            ],
          }),
        X = ({ options: e, chainId: t, onChange: n, disabled: i, headerHeight: l }) => {
          let [a, , d, c] = (0, k.K)(),
            [x, C, g] = (0, k.K)(),
            [p, j, m] = (0, k.K)(),
            [I, z] = (0, o.Mj)('showTestnets', !1),
            T = (0, r.useMemo)(() => e.find((e) => e.chainId === t) ?? e[0], [e, t]);
          (0, r.useEffect)(() => () => d(), [t, d]);
          let B = e.length > 1 ? c : C;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(b.A, {
                size: 'small',
                disabled: i,
                onClick: B,
                'data-testid': 'btn-change-chain',
                children: [T && (0, s.jsx)($, { chain: T }), e.length > 1 && (0, s.jsx)(v.A, {})],
              }),
              (0, s.jsx)(y.A, {
                open: x,
                onClose: g,
                anchorOrigin: { horizontal: 'center', vertical: 'top' },
                sx: { top: l },
                autoHideDuration: S.dw.Snackbar,
                children: (0, s.jsx)(h.A, {
                  sx: { justifyContent: 'end', marginTop: 4 },
                  children: (0, s.jsx)(A.A, {
                    variant: 'filled',
                    severity: 'warning',
                    'data-testid': 'alert-eth-only',
                    children: (0, s.jsx)(w.A, {
                      children: (0,
                      u.t)`This application is only available on the Ethereum Mainnet`,
                    }),
                  }),
                }),
              }),
              null != a &&
                (0, s.jsx)(L.y, {
                  open: a,
                  onClose: d,
                  title: p ? (0, u.t)`Select Network Settings` : (0, u.t)`Select Network`,
                  titleAction: p && (0, s.jsx)(b.A, { onClick: m, children: (0, s.jsx)(f.A, {}) }),
                  footer: !p && (0, s.jsx)(M.l, { onClick: j }),
                  children: p
                    ? (0, s.jsx)(Y, { showTestnets: I, setShowTestnets: z })
                    : (0, s.jsx)(W, {
                        showTestnets: I,
                        onChange: n,
                        options: e,
                        selectedNetwork: T,
                      }),
                }),
            ],
          });
        };
      var _ = n(35018);
      let G = ({ theme: e, onChange: t }) =>
        _.Z.map(({ type: n, Component: i }) =>
          (0, s.jsx)(
            b.A,
            {
              size: 'small',
              onClick: () => t(n),
              className: e === n ? 'current' : '',
              'data-testid': `theme-switcher-button-${n}`,
              children: (0, s.jsx)(i, { size: 18 }),
            },
            n
          )
        );
      var K = n(69228);
      let J = ({ theme: e, onChange: t, label: n }) => {
        let i = _.Z.findIndex((t) => t.type === e),
          l = -1 === i ? 0 : i,
          a = (0, r.useCallback)(() => {
            let e = (l + 1) % _.Z.length;
            t(_.Z[e].type);
          }, [l, t]),
          { Component: o } = _.Z[l];
        return (0, s.jsx)(K.m, {
          title: n,
          children: (0, s.jsx)(b.A, {
            size: 'small',
            onClick: a,
            sx: { padding: 2 },
            'data-testid': `theme-switcher-${e}`,
            children: (0, s.jsx)(o, { size: 28 }),
          }),
        });
      };
      var U = n(75911),
        q = n(33550);
      let Q = (0, N.A)(
        (0, s.jsxs)('svg', {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, s.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M5.70261 6.66667C5.03791 6.66667 4.53338 7.1625 4.53338 7.73333C4.53338 8.30417 5.03791 8.8 5.70261 8.8C5.98067 8.8 6.24054 8.98149 6.32773 9.25255C6.34438 9.30434 6.36393 9.35546 6.38635 9.40571C6.47234 9.59847 6.59896 9.77495 6.76004 9.92452C6.92115 10.0741 7.11348 10.1938 7.32649 10.2757C7.53952 10.3576 7.76845 10.4 8.00005 10.4C8.23165 10.4 8.46058 10.3576 8.67361 10.2757C8.88662 10.1938 9.07895 10.0741 9.24006 9.92452C9.40114 9.77495 9.52776 9.59847 9.61375 9.40571C9.63616 9.35546 9.65571 9.30434 9.67237 9.25255C9.75955 8.98149 10.0194 8.8 10.2975 8.8C10.9622 8.8 11.4667 8.30417 11.4667 7.73333C11.4667 7.1625 10.9622 6.66667 10.2975 6.66667C9.99293 6.66667 9.71829 6.77262 9.51214 6.94337C9.3773 7.05506 9.20665 7.09009 9.05989 7.08198C8.91278 7.07384 8.7523 7.02059 8.63086 6.90783C8.4667 6.7554 8.2401 6.66667 8.00005 6.66667C7.76 6.66667 7.5334 6.7554 7.36924 6.90783C7.2478 7.02059 7.08732 7.07384 6.94021 7.08198C6.79345 7.09009 6.6228 7.05506 6.48796 6.94337C6.28181 6.77262 6.00717 6.66667 5.70261 6.66667ZM10.2975 9.33333C10.2443 9.33333 10.1943 9.37163 10.1801 9.41585C10.1575 9.48604 10.1311 9.55518 10.1008 9.62298C9.98476 9.88317 9.81523 10.1182 9.60297 10.3153C9.39075 10.5124 9.13985 10.6678 8.86507 10.7735C8.59031 10.8791 8.29643 10.9333 8.00005 10.9333C7.70367 10.9333 7.40979 10.8791 7.13503 10.7735C6.86025 10.6678 6.60935 10.5124 6.39713 10.3153C6.18487 10.1182 6.01534 9.88317 5.89928 9.62298C5.86904 9.55518 5.84259 9.48604 5.82001 9.41585C5.80579 9.37163 5.75575 9.33333 5.70261 9.33333C4.78127 9.33333 4.00005 8.63526 4.00005 7.73333C4.00005 6.83141 4.78127 6.13333 5.70261 6.13333C6.13182 6.13333 6.52668 6.28292 6.82817 6.53264C6.83432 6.53773 6.86145 6.55218 6.91076 6.54946C6.95973 6.54675 6.99361 6.52882 7.00633 6.51701C7.27302 6.26936 7.63078 6.13333 8.00005 6.13333C8.36932 6.13333 8.72708 6.26936 8.99377 6.51701C9.00648 6.52882 9.04037 6.54675 9.08934 6.54946C9.13865 6.55218 9.16578 6.53773 9.17193 6.53264C9.47342 6.28292 9.86827 6.13333 10.2975 6.13333C11.2188 6.13333 12.0001 6.83141 12.0001 7.73333C12.0001 8.63526 11.2188 9.33333 10.2975 9.33333Z',
              fill: 'currentColor',
            }),
            (0, s.jsx)('path', {
              d: 'M6.27697 7.73333C6.27697 8.02789 6.01982 8.26667 5.70261 8.26667C5.3854 8.26667 5.12825 8.02789 5.12825 7.73333C5.12825 7.43878 5.3854 7.2 5.70261 7.2C6.01982 7.2 6.27697 7.43878 6.27697 7.73333Z',
              fill: 'currentColor',
            }),
            (0, s.jsx)('path', {
              d: 'M10.8718 7.73333C10.8718 8.02789 10.6147 8.26667 10.2975 8.26667C9.98028 8.26667 9.72313 8.02789 9.72313 7.73333C9.72313 7.43878 9.98028 7.2 10.2975 7.2C10.6147 7.2 10.8718 7.43878 10.8718 7.73333Z',
              fill: 'currentColor',
            }),
            (0, s.jsx)('path', {
              d: 'M8.53338 8.8C8.82793 8.8 9.06672 8.56122 9.06672 8.26667C9.06672 8.11939 8.94732 8 8.80005 8H7.20005C7.05277 8 6.93338 8.11939 6.93338 8.26667C6.93338 8.56122 7.17216 8.8 7.46672 8.8H7.73338V9.54542L7.727 9.54173C7.70042 9.42248 7.59398 9.33333 7.46672 9.33333C7.31944 9.33333 7.20005 9.45272 7.20005 9.6C7.20005 9.70894 7.24377 9.80193 7.30196 9.87217C7.35864 9.94058 7.43104 9.99076 7.50367 10.0271C7.57737 10.0639 7.65877 10.0903 7.74187 10.1075C7.8254 10.1248 7.91292 10.1333 8.00005 10.1333C8.08718 10.1333 8.1747 10.1248 8.25823 10.1075C8.34133 10.0903 8.42272 10.0639 8.49643 10.0271C8.56906 9.99076 8.64146 9.94058 8.69814 9.87217C8.75633 9.80193 8.80005 9.70894 8.80005 9.6C8.80005 9.45272 8.68066 9.33333 8.53338 9.33333C8.40612 9.33333 8.29968 9.42248 8.2731 9.54173L8.26672 9.54542V8.8H8.53338Z',
              fill: 'currentColor',
            }),
            (0, s.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M4.40005 0.866667C3.86672 0.155556 2.80005 0.155556 2.26672 0.866667C2.09362 1.09746 2.00005 1.37817 2.00005 1.66667V3.07323C2.00005 3.28133 2.0336 3.48807 2.09941 3.6855L2.22347 4.05769C2.37365 4.50822 2.70192 4.84264 3.09978 5.01598C2.67973 5.47451 2.41649 6.06963 2.37353 6.71399L1.99087 12.4538C1.86774 14.3008 3.3327 15.8667 5.18379 15.8667H10.8164C12.6675 15.8667 14.1324 14.3008 14.0093 12.4538L13.6267 6.71399C13.5837 6.06962 13.3204 5.47449 12.9004 5.01595C13.2982 4.8426 13.6265 4.5082 13.7766 4.05769L13.9007 3.6855C13.9665 3.48807 14 3.28133 14 3.07323V1.66667C14 1.37817 13.9065 1.09746 13.7334 0.866667C13.2 0.155556 12.1334 0.155556 11.6 0.866667L11.4634 1.04888C11.4093 1.12106 11.3617 1.19798 11.3214 1.27869L10.9079 2.10557C10.7493 2.42282 10.6667 2.77263 10.6667 3.12732V3.55302C10.6667 3.66145 10.6777 3.76821 10.6989 3.87197C9.82581 3.60369 8.91625 3.46667 8.00009 3.46667C7.0839 3.46667 6.17431 3.6037 5.30123 3.872C5.32239 3.76823 5.33338 3.66146 5.33338 3.55302V3.12732C5.33338 2.77263 5.2508 2.42282 5.09218 2.10557L4.67874 1.27869C4.63838 1.19798 4.59085 1.12106 4.53671 1.04888L4.40005 0.866667ZM12.2263 4.47783C12.116 4.41491 12.0005 4.35908 11.8804 4.31104L11.5911 4.1953C11.4284 4.02518 11.3334 3.79632 11.3334 3.55302V3.12732C11.3334 2.87613 11.3919 2.62839 11.5042 2.40372L11.9176 1.57683C11.9401 1.53189 11.9666 1.48907 11.9967 1.44888L12.1334 1.26667C12.4 0.911111 12.9334 0.911111 13.2 1.26667C13.2866 1.38206 13.3334 1.52242 13.3334 1.66667V3.07323C13.3334 3.20968 13.3114 3.34523 13.2682 3.47468L13.1442 3.84687C13.0841 4.0271 12.9751 4.17541 12.8376 4.28332C12.9012 4.01278 12.9334 3.73546 12.9334 3.45682V3.41202C12.9334 2.88045 12.8096 2.35618 12.5719 1.88074C12.506 1.74901 12.3459 1.69562 12.2141 1.76148C12.0824 1.82734 12.029 1.98752 12.0949 2.11925C12.2956 2.52064 12.4 2.96325 12.4 3.41202V3.45682C12.4 3.78792 12.3467 4.11686 12.242 4.43096L12.2263 4.47783ZM4.11978 4.31104L4.40899 4.19536C4.57168 4.02523 4.66672 3.79634 4.66672 3.55302V3.12732C4.66672 2.87613 4.60823 2.62839 4.4959 2.40372L4.08245 1.57683C4.05998 1.53189 4.03352 1.48907 4.00337 1.44888L3.86672 1.26667C3.60005 0.911111 3.06672 0.911111 2.80005 1.26667C2.7135 1.38206 2.66672 1.52242 2.66672 1.66667V3.07323C2.66672 3.20968 2.68871 3.34523 2.73186 3.47468L2.85593 3.84687C2.916 4.0271 3.02502 4.17541 3.1625 4.28332C3.09894 4.01278 3.06672 3.73546 3.06672 3.45682V3.41202C3.06672 2.88045 3.19048 2.35618 3.4282 1.88074C3.49407 1.74901 3.65424 1.69562 3.78597 1.76148C3.9177 1.82734 3.97109 1.98752 3.90523 2.11925C3.70453 2.52064 3.60005 2.96325 3.60005 3.41202V3.45682C3.60005 3.78792 3.65343 4.11686 3.75813 4.43096L3.77377 4.47787C3.88415 4.41493 3.99966 4.35909 4.11978 4.31104ZM8.00009 4.53333C6.96695 4.53333 5.94329 4.73047 4.98404 5.11417L4.51593 5.30142C3.90109 5.54735 3.48188 6.12421 3.43783 6.78494L3.05518 12.5248C2.97309 13.7561 3.94973 14.8 5.18379 14.8H10.8164C12.0505 14.8 13.0271 13.7561 12.945 12.5248L12.5623 6.78494C12.5183 6.12421 12.0991 5.54735 11.4843 5.30142L11.0161 5.11417C10.0569 4.73047 9.03324 4.53333 8.00009 4.53333Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'Llama'
      );
      var ee = n(56120),
        et = n(33161),
        en = n(31184),
        es = n(74043);
      let ei = {
          default: {
            border: (e) => `1px solid ${e.design.Layer.Highlight.Outline}`,
            backgroundColor: (e) => e.design.Layer[1].Fill,
          },
          highlight: {
            border: (e) => `1px solid ${e.design.Layer.Highlight.Outline}`,
            backgroundColor: (e) => e.design.Color.Primary[800],
          },
          alert: { backgroundColor: (e) => e.design.Layer.Feedback.Error },
          warning: { backgroundColor: (e) => e.design.Layer.Feedback.Warning },
        },
        er = {
          default: 'textHighlight',
          alert: 'textPrimary',
          warning: 'textPrimary',
          highlight: 'textPrimary',
        },
        el = { default: !1, alert: !0, warning: !1, highlight: !0 },
        { MaxWidth: ea, Spacing: eo } = Z.B,
        ed = ({ onClick: e, buttonText: t, children: n, severity: i = 'default' }) =>
          (0, s.jsx)(et.A, {
            sx: {
              display: 'flex',
              gap: eo.md,
              alignSelf: 'stretch',
              paddingInline: eo.md,
              paddingBlock: eo.xs,
              alignItems: 'center',
              justifyContent: 'center',
              ...ei[i],
            },
            children: (0, s.jsxs)(en.A, {
              direction: 'row',
              sx: { width: '100%', maxWidth: ea.banner },
              alignItems: 'center',
              justifyContent: 'space-between',
              children: [
                (0, s.jsx)(es.i, {
                  inverted: el[i],
                  children: (0, s.jsx)(E.A, {
                    color: er[i],
                    variant: 'headingXsBold',
                    children: n,
                  }),
                }),
                t &&
                  (0, s.jsx)(ee.A, { color: 'ghost', onClick: e, size: 'extraSmall', children: t }),
              ],
            }),
          });
      var ec = n(40459);
      let { IconSize: ex } = Z.B,
        eh = ec.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE,
        eC = (0, r.forwardRef)(({ networkId: e, chainId: t }, n) => {
          let { wallet: i } = (0, g.vT)(),
            [, r] = (0, g.v3)(),
            { connectState: l } = (0, g.w5)(),
            a = (0, g.N6)(l, g.Ej.CONNECT_API),
            d = (i && (0, g.oe)(i) != t) || (0, g.N6)(l, g.Ej.SWITCH_NETWORK),
            [c, h] = (0, o.Mj)('beta');
          return (
            (d || a || eh || c) &&
            (0, s.jsxs)(x.A, {
              ref: n,
              children: [
                c &&
                  (0, s.jsxs)(ed, {
                    onClick: () => h(!1),
                    buttonText: (0, u.t)`Disable Beta Mode`,
                    children: [
                      (0, s.jsx)(Q, { sx: { width: ex.sm, height: ex.sm } }),
                      ' ',
                      (0, u.t)`BETA MODE ENABLED`,
                    ],
                  }),
                eh && (0, s.jsx)(ed, { severity: 'warning', children: eh }),
                d &&
                  (0, s.jsxs)(ed, {
                    severity: 'warning',
                    buttonText: (0, u.t)`Change network`,
                    onClick: () => r({ chainId: q.nD(t) }),
                    children: [
                      (0, u.t)`Please switch your wallet's network to`,
                      ' ',
                      (0, s.jsx)('strong', { children: e }),
                      ' ',
                      (0, u.t)`to use Curve on`,
                      ' ',
                      (0, s.jsx)('strong', { children: e }),
                      '.',
                      ' ',
                    ],
                  }),
                a &&
                  (0, s.jsx)(ed, {
                    severity: 'alert',
                    children: (0,
                    u.t)`There is an issue connecting to the API. You can try switching your RPC or, if you are connected to a wallet, please switch to a different one.`,
                  }),
              ],
            })
          );
        });
      eC.displayName = 'GlobalBanner';
      var eg = n(17147),
        ep = n(84826),
        ej = n(51121);
      let eu = ({ currentMenu: e, onChange: t, networkId: n }) =>
        (0, s.jsx)(x.A, {
          display: 'flex',
          alignItems: 'center',
          marginX: [2, 3, 4],
          gap: 2,
          children: Object.entries(d.VS).map(([i, { label: r, routes: l }]) =>
            (0, s.jsx)(
              ee.A,
              {
                color: 'navigation',
                size: 'small',
                className: e === i ? 'current' : '',
                component: ej.A,
                onClick: () => t(i),
                href: (0, d.PE)(l[0].app, n),
                'data-testid': `app-link-${i}`,
                children: r,
              },
              i
            )
          ),
        });
      var em = n(32678),
        ef = n(4387);
      let ev = (0, em.Ay)('img')({ width: 30, marginRight: 8 }),
        eA = ef.jp.src,
        ew = { dex: 'Curve', lend: 'LLAMALEND', crvusd: 'crvUSD', dao: 'DAO' },
        eb = ({ currentMenu: e, isLite: t, sx: n }) =>
          (0, s.jsxs)(ej.A, {
            href: '/',
            sx: { display: 'flex', alignItems: 'center', textDecoration: 'none', ...n },
            children: [
              (0, s.jsx)(ev, { src: eA, alt: 'Curve', width: 30 }),
              (0, s.jsxs)(x.A, {
                display: 'inline-flex',
                flexDirection: 'column',
                children: [
                  (0, s.jsx)(E.A, {
                    variant: 'headingSBold',
                    sx: { '&': { lineHeight: '1.2rem' }, textTransform: 'none' },
                    color: 'textPrimary',
                    children: ew[e],
                  }),
                  'dex' === e
                    ? t &&
                      (0, s.jsx)(E.A, {
                        variant: 'bodyXsBold',
                        color: 'textTertiary',
                        children: 'Lite',
                      })
                    : (0, s.jsx)(E.A, {
                        variant: 'bodyXsRegular',
                        color: 'textTertiary',
                        children: 'powered by Curve',
                      }),
                ],
              }),
            ],
          }),
        ey = ({ appStats: e }) =>
          e?.map(({ label: e, value: t }) =>
            s.jsxs(
              x.A,
              {
                display: 'inline-flex',
                alignItems: 'baseline',
                children: [
                  s.jsxs(E.A, {
                    variant: 'bodyMRegular',
                    color: 'grey.600',
                    sx: { whiteSpace: 'nowrap' },
                    children: [e, ':'],
                  }),
                  '\xa0',
                  s.jsx(E.A, { variant: 'highlightM', color: 'text.primary', children: t || '-' }),
                ],
              },
              e
            )
          );
      var ek = n(27261),
        eL = n.n(ek),
        eM = n(42374);
      let eS = ({ pages: e }) =>
          (0, s.jsx)(eM.u, {
            value: (0, r.useMemo)(() => e.find(({ isActive: e }) => e)?.href, [e]),
            options: (0, r.useMemo)(
              () =>
                e.map(({ label: e, href: t, target: n }) => ({
                  label: e,
                  component: t.startsWith('http') ? ej.A : eL(),
                  value: t,
                  href: t,
                  target: n,
                })),
              [e]
            ),
            variant: 'overlined',
            muiVariant: 'standard',
            sx: { overflow: 'visible' },
          }),
        eI = ({
          mainNavRef: e,
          currentMenu: t,
          ChainProps: n,
          globalAlertRef: i,
          height: l,
          pages: a,
          appStats: d,
          networkId: p,
          isLite: j = !1,
        }) => {
          let [f, v] = (0, r.useState)(t),
            A = (0, U.nv)((e) => e.theme),
            w = (0, U.nv)((e) => e.setTheme),
            b = (0, U.nv)((e) => e.isAdvancedMode),
            y = (0, U.nv)((e) => e.setAdvancedMode),
            [k] = (0, o.Mj)('beta');
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(c.A, {
                color: 'transparent',
                ref: e,
                children: [
                  (0, s.jsx)(eC, { networkId: p, ref: i, chainId: n.chainId }),
                  (0, s.jsx)(C.A, {
                    sx: {
                      backgroundColor: (e) => e.design.Layer[1].Fill,
                      justifyContent: 'space-around',
                      paddingY: 3,
                    },
                    'data-testid': 'main-nav',
                    children: (0, s.jsxs)(h.A, {
                      children: [
                        (0, s.jsx)(eb, { isLite: j, currentMenu: t }),
                        (0, s.jsx)(eu, { currentMenu: f, onChange: v, networkId: p }),
                        (0, s.jsx)(x.A, { sx: { flexGrow: 1 } }),
                        (0, s.jsxs)(x.A, {
                          display: 'flex',
                          marginLeft: 2,
                          justifyContent: 'flex-end',
                          gap: 3,
                          alignItems: 'center',
                          children: [
                            k && !ep.OC
                              ? (0, s.jsx)(U.FD, {})
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)(m, {
                                      advancedMode: [b, y],
                                      label: (0, u.t)`Advanced`,
                                    }),
                                    (0, s.jsx)(J, { theme: A, onChange: w, label: (0, u.t)`Mode` }),
                                  ],
                                }),
                            (0, s.jsx)(X, { ...n, headerHeight: l }),
                            (0, s.jsx)(g.vz, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(C.A, {
                    sx: {
                      backgroundColor: (e) => e.design.Layer[2].Fill,
                      justifyContent: 'space-around',
                      borderWidth: '1px 0',
                      borderColor: (e) => e.design.Layer[2].Outline,
                      borderStyle: 'solid',
                      boxSizing: 'content-box',
                      height: eg.wl,
                    },
                    'data-testid': 'subnav',
                    children: (0, s.jsxs)(h.A, {
                      children: [
                        (0, s.jsx)(eS, { pages: a }),
                        (0, s.jsx)(x.A, { flexGrow: 1 }),
                        (0, s.jsx)(x.A, {
                          display: 'flex',
                          gap: 3,
                          alignItems: 'center',
                          sx: { textOverflow: 'ellipsis', overflow: 'hidden' },
                          children: (0, s.jsx)(ey, { appStats: d }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(x.A, { height: l }),
            ],
          });
        };
      var ez = n(10470);
      let eT = (0, em.Ay)('svg')({ fill: 'currentColor', width: '24px', height: '24px' }),
        eB = (0, em.Ay)('path')``,
        eE = ({ toggle: e, isOpen: t }) =>
          (0, s.jsx)(b.A, {
            onClick: e,
            sx: { display: 'inline-flex' },
            'data-testid': 'menu-toggle',
            size: 'small',
            children: (0, s.jsxs)(eT, {
              focusable: 'false',
              'aria-hidden': 'true',
              viewBox: '0 0 24 24',
              children: [
                (0, s.jsx)(eB, {
                  d: 'M0 7h24v-2H0z',
                  sx: {
                    transition: 'transform 1.5s',
                    ...(t && { transform: 'skewY(-45deg) translate(0, 17px)' }),
                  },
                }),
                (0, s.jsx)(eB, {
                  d: 'M0 13h24v-2H0z',
                  sx: { transition: 'opacity 1s', ...(t && { opacity: 0 }) },
                }),
                (0, s.jsx)(eB, {
                  d: 'M0 19h24v-2H0z',
                  sx: {
                    transition: 'transform 1.5s',
                    ...(t && { transform: 'skewY(45deg) translate(0, -17px)' }),
                  },
                }),
              ],
            }),
          }),
        eN = ({ ChainProps: e, currentMenu: t, isSidebarOpen: n, toggleSidebar: i, isLite: r }) =>
          (0, s.jsxs)(en.A, {
            direction: 'row',
            width: '100%',
            paddingX: 2,
            children: [
              (0, s.jsx)(eE, { isOpen: n, toggle: i }),
              (0, s.jsx)(eb, { isLite: r, currentMenu: t }),
              (0, s.jsx)(en.A, { flexGrow: 1 }),
              (0, s.jsx)(X, { ...e }),
            ],
          });
      var eD = n(6572),
        eP = n(30513),
        eZ = n(74145),
        eO = n(52187),
        eH = n(19245);
      let eV = 'background.paper',
        e$ = () => {
          let e = (0, U.nv)((e) => e.theme),
            t = (0, U.nv)((e) => e.setTheme),
            n = (0, U.nv)((e) => e.isAdvancedMode),
            i = (0, U.nv)((e) => e.setAdvancedMode);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(x.A, {
                position: 'fixed',
                bottom: 0,
                sx: (e) => ({ ...eg.be, zIndex: e.zIndex.drawer + 1, backgroundColor: eV }),
                children: [
                  (0, s.jsx)(x.A, {
                    display: 'flex',
                    paddingX: 4,
                    marginTop: 4,
                    children: (0, s.jsx)(g.vz, { sx: { flexGrow: 1 } }),
                  }),
                  (0, s.jsxs)(eP.A, {
                    sx: { backgroundColor: eV },
                    disableGutters: !0,
                    children: [
                      (0, s.jsxs)(eO.A, {
                        expandIcon: (0, s.jsx)(eD.A, {}),
                        sx: { backgroundColor: eV, paddingInline: 4 },
                        children: [
                          (0, s.jsx)(eH.L, {
                            sx: { fontSize: 22, fill: 'transparent', stroke: 'currentColor' },
                          }),
                          (0, s.jsx)(E.A, {
                            sx: { marginLeft: 1, alignContent: 'center' },
                            variant: 'bodyMBold',
                            color: 'navigation',
                            'data-testid': 'sidebar-settings',
                            children: (0, u.t)`Settings`,
                          }),
                        ],
                      }),
                      (0, s.jsxs)(eZ.A, {
                        sx: {
                          backgroundColor: eV,
                          borderTop: (e) => `1px solid ${e.palette.text.secondary}`,
                          paddingBottom: 4,
                        },
                        children: [
                          (0, s.jsx)(eF, {
                            label: (0, u.t)`Mode`,
                            children: (0, s.jsx)(G, {
                              theme: e,
                              onChange: t,
                              label: (0, u.t)`Mode`,
                            }),
                          }),
                          (0, s.jsx)(eF, {
                            label: (0, u.t)`Advanced Mode`,
                            children: (0, s.jsx)(m, { advancedMode: [n, i] }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(x.A, { minHeight: 150 }),
              ' ',
            ],
          });
        },
        eF = ({ label: e, children: t, ...n }) =>
          (0, s.jsxs)(x.A, {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            ...n,
            children: [
              (0, s.jsx)(E.A, {
                variant: 'bodyMBold',
                color: 'navigation',
                marginLeft: 2,
                sx: { display: 'flex', alignItems: 'center' },
                children: e,
              }),
              (0, s.jsx)(x.A, { display: 'flex', alignItems: 'center', children: t }),
            ],
          });
      var eR = n(78006),
        eW = n(83721),
        eY = n(99825),
        eX = n(30234);
      let e_ = ({ page: e, child: t }) =>
          (0, s.jsx)(eX.Ay, {
            disableGutters: !0,
            sx: { display: 'flex', paddingY: 0, paddingRight: 4, paddingLeft: 4 * !!t },
            children: (0, s.jsx)(ee.A, {
              ...(e.href.startsWith('http')
                ? { component: ej.A, href: e.href, target: e.target }
                : { component: eL(), href: e.href, className: e.isActive ? 'current' : '' }),
              color: 'navigation',
              size: 'small',
              'data-testid': `sidebar-item-${e.label.toLowerCase()}`,
              sx: {
                justifyContent: 'flex-start',
                textDecoration: 'none',
                textTransform: 'uppercase',
                width: '100%',
              },
              children: e.label,
            }),
          }),
        eG = ({ pages: e, title: t, children: n }) =>
          (0, s.jsxs)(eR.A, {
            subheader: (0, s.jsxs)(eW.A, {
              disableSticky: !0,
              sx: { padding: 0 },
              children: [
                (0, s.jsx)(E.A, {
                  variant: 'headingSBold',
                  color: 'text.primary',
                  sx: { paddingX: 4, paddingTop: 4, paddingBottom: 2 },
                  children: t,
                }),
                (0, s.jsx)(eY.A, {}),
              ],
            }),
            sx: { marginTop: 3 },
            children: [e?.map((e) => s.jsx(e_, { child: !0, page: e }, e.href)), n],
          });
      var eK = n(41390),
        eJ = n(5404),
        eU = n(99730),
        eq = n(14766);
      let eQ = (0, N.A)(
          (0, s.jsx)('svg', {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 800 800',
            children: (0, s.jsx)('g', {
              transform: 'translate(0.000000,800.000000) scale(0.100000,-0.100000)',
              fill: 'currentColor',
              stroke: 'none',
              children: (0, s.jsx)('path', {
                d: 'M2120 7593 c-217 -13 -455 -54 -600 -102 -105 -36 -290 -126 -372 -182 -32 -21 -62 -39 -67 -39 -5 0 -11 -4 -13 -8 -1 -4 -23 -23 -47 -42 -107 -83 -242 -233 -326 -360 -17 -25 -32 -47 -35 -50 -9 -9 -110 -218 -130 -270 -46 -117 -82 -277 -111 -500 -25 -194 -35 -3718 -10 -3975 37 -388 91 -587 230 -837 94 -169 223 -322 379 -448 137 -111 344 -225 492 -272 141 -45 137 -45 145 -6 20 96 465 2061 467 2064 2 1 41 -9 88 -22 284 -83 645 -96 932 -34 175 38 353 104 517 192 108 58 116 59 301 39 241 -26 444 -1 600 76 94 45 227 174 289 279 53 91 111 232 150 368 124 432 134 874 28 1181 -160 465 -589 781 -1249 920 -373 79 -678 43 -894 -106 l-47 -32 23 41 c81 144 277 350 435 458 173 118 379 204 570 239 l90 16 114 -111 c330 -320 639 -499 936 -541 95 -13 278 -6 352 15 l52 14 42 -66 c151 -238 235 -503 246 -772 l5 -125 -51 -33 c-65 -44 -185 -169 -239 -252 -94 -143 -170 -331 -214 -533 -19 -88 -22 -133 -22 -317 -1 -227 10 -303 64 -448 47 -126 130 -255 202 -315 l42 -35 -127 -1129 c-70 -620 -128 -1131 -127 -1135 0 -5 79 -8 175 -8 l174 0 6 32 c3 18 39 337 80 708 42 371 79 691 83 710 l8 34 52 -55 c83 -88 130 -155 182 -264 57 -117 85 -214 100 -343 13 -121 9 -169 -51 -511 -28 -156 -49 -285 -47 -286 7 -8 249 27 328 46 192 48 390 132 540 230 203 132 384 325 501 537 138 250 197 461 230 832 27 311 18 3755 -11 3985 -27 210 -64 378 -111 498 -33 83 -117 247 -160 309 -21 32 -39 62 -39 67 0 5 -4 11 -8 13 -4 2 -23 23 -42 47 -204 261 -565 484 -901 556 -41 9 -139 26 -219 38 -144 21 -163 21 -2035 22 -1039 1 -1915 0 -1945 -2z m2668 -1199 c40 -13 103 -39 140 -58 106 -53 186 -83 301 -113 93 -24 125 -27 263 -28 87 0 158 -1 158 -3 0 -16 -91 -130 -139 -174 -265 -246 -640 -181 -1066 184 -163 141 -158 129 -81 166 58 28 105 43 176 56 51 9 177 -6 248 -30z m-1618 -1314 c53 -27 83 -72 88 -135 3 -41 -11 -106 -71 -330 -81 -299 -90 -330 -106 -339 -6 -4 -50 13 -98 37 -48 24 -116 55 -150 68 -35 13 -63 28 -63 32 0 11 127 490 147 552 36 116 150 168 253 115z m1047 -301 c62 -23 113 -95 113 -160 0 -58 -153 -614 -178 -649 -35 -47 -80 -70 -139 -70 -30 0 -67 7 -82 15 -63 32 -109 121 -95 182 20 87 156 589 164 602 13 25 63 69 90 80 34 13 92 13 127 0z m-1998 -178 c-19 -85 -23 -91 -46 -91 -21 0 -23 3 -17 23 12 42 74 170 79 165 3 -3 -4 -46 -16 -97z m3811 -317 c50 -46 102 -151 127 -259 27 -117 24 -376 -4 -501 -48 -205 -136 -385 -243 -494 -73 -74 -139 -107 -187 -95 -64 16 -135 126 -175 273 -30 107 -32 376 -4 502 53 242 171 463 296 555 91 67 132 71 190 19z m-3585 -153 c348 -75 763 -320 1087 -642 113 -112 181 -206 199 -272 12 -46 4 -106 -15 -113 -33 -12 -758 76 -1121 136 -276 46 -780 147 -879 176 -194 56 -266 115 -266 218 0 279 238 478 615 516 121 12 270 4 380 -19z m-245 -1181 c236 -44 579 -99 792 -127 76 -9 134 -21 130 -24 -21 -21 -217 -43 -377 -43 -333 0 -613 80 -785 224 l-25 21 25 -6 c14 -2 122 -23 240 -45z',
              }),
            }),
          }),
          'Dodo'
        ),
        e1 = ({ icon: e, href: t, label: n }) =>
          (0, s.jsx)(b.A, {
            component: ej.A,
            href: t,
            target: '_blank',
            rel: 'noopener noreferrer',
            size: 'small',
            children: (0, s.jsx)(K.m, {
              title: n,
              children: (0, s.jsx)(e, { fontSize: 'large', color: 'primary' }),
            }),
          }),
        e0 = ({ title: e }) =>
          (0, s.jsx)(eG, {
            title: e,
            children: (0, s.jsxs)(x.A, {
              display: 'flex',
              justifyContent: 'space-around',
              children: [
                (0, s.jsx)(e1, {
                  label: 'Discord',
                  href: 'https://discord.gg/rgrfS7W',
                  icon: eq.E,
                }),
                (0, s.jsx)(e1, {
                  label: 'Telegram',
                  href: (0, u.Y)() ? 'https://t.me/curveficn' : 'https://t.me/curvefi',
                  icon: eK.A,
                }),
                (0, s.jsx)(e1, {
                  label: 'Twitter',
                  href: 'https://x.com/curvefinance',
                  icon: eJ.A,
                }),
                (0, s.jsx)(e1, {
                  label: 'YouTube',
                  href: (0, u.Y)()
                    ? 'https://www.youtube.com/watch?v=FtzDlWdcou8&list=PLh7yM-DPEDYgP-vyEOCIboD3xg_TgJmkj'
                    : 'https://www.youtube.com/@CurveFinanceChannel',
                  icon: eU.A,
                }),
                (0, u.Y)() &&
                  (0, s.jsx)(e1, {
                    label: 'Dodo',
                    href: 'https://imdodo.com/s/147186?inv=7J46',
                    icon: eQ,
                  }),
              ],
            }),
          }),
        e3 = {
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
        e2 = (e) => `2 * ${e.spacing(3)} + ${eg.wl}`,
        e6 = ({
          mainNavRef: e,
          currentMenu: t,
          pages: n,
          appStats: l,
          sections: a,
          ChainProps: o,
          globalAlertRef: h,
          height: p,
          isLite: j = !1,
          networkId: m,
        }) => {
          let [f, v] = (0, r.useState)(!1),
            A = (0, r.useCallback)(() => v(!1), []),
            w = (0, r.useCallback)(() => v((e) => !e), []),
            b = (0, i.usePathname)(),
            { connect: y } = (0, g.vT)();
          (0, r.useEffect)(() => () => A(), [b, A]), (0, r.useCallback)(() => (A(), y()), [A, y]);
          let k = (0, r.useMemo)(
            () =>
              Object.entries(d.VS)
                .filter(([e]) => e != t)
                .map(([e, { label: t, routes: n }]) => ({
                  appName: e,
                  title: t,
                  pages: n.map((e) => (0, d.WS)(e, { networkId: m, pathname: b })),
                })),
            [t, m, b]
          );
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(c.A, {
                color: 'transparent',
                ref: e,
                sx: { backgroundColor: (e) => e.design.Layer[1].Fill },
                children: [
                  (0, s.jsx)(eC, { networkId: m, ref: h, chainId: o.chainId }),
                  (0, s.jsxs)(C.A, {
                    sx: (e) => ({ paddingBlock: 3, zIndex: e.zIndex.drawer + 1 }),
                    children: [
                      (0, s.jsx)(eN, {
                        isLite: j,
                        ChainProps: { ...o, headerHeight: p },
                        currentMenu: t,
                        isSidebarOpen: f,
                        toggleSidebar: w,
                      }),
                      (0, s.jsxs)(ez.Ay, {
                        anchor: 'left',
                        onClose: A,
                        open: f,
                        slotProps: { paper: { sx: { top: p, ...eg.be, ...e3 } } },
                        sx: { top: p },
                        variant: 'temporary',
                        hideBackdrop: !0,
                        'data-testid': 'mobile-drawer',
                        children: [
                          (0, s.jsxs)(x.A, {
                            children: [
                              (0, s.jsx)(en.A, {
                                padding: 4,
                                children: (0, s.jsx)(ey, { appStats: l }),
                              }),
                              (0, s.jsx)(eG, { title: d.VS[t].label, pages: n }),
                              k.map(({ appName: e, ...t }) => (0, s.jsx)(eG, { ...t }, e)),
                              a.map(({ title: e, links: t }) =>
                                (0, s.jsx)(eG, { title: e, pages: t }, e)
                              ),
                              (0, s.jsx)(e0, { title: (0, u.t)`Community` }),
                            ],
                          }),
                          (0, s.jsx)(e$, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(x.A, { height: p }),
            ],
          });
        },
        e7 = (e) => e.breakpoints.up('desktop'),
        e8 = ({ routes: e, ...t }) => {
          let n = (0, a.A)(e7, { noSsr: !0 }),
            [l] = (0, o.Mj)('beta'),
            c = (0, i.usePathname)(),
            { networkId: x } = t,
            h = (0, r.useMemo)(
              () =>
                e
                  .filter((e) => !e.betaFeature || l)
                  .map((e) => (0, d.WS)(e, { networkId: x, pathname: c })),
              [l, x, c, e]
            );
          return n ? (0, s.jsx)(eI, { pages: h, ...t }) : (0, s.jsx)(e6, { pages: h, ...t });
        },
        e4 = (e) => {
          let t = (0, a.A)(e7, { noSsr: !0 }),
            n = (0, l.A)(),
            s = t ? '96px' : e2(n);
          return `calc(${s} + ${e ?? 0}px)`;
        };
    },
    14766: (e, t, n) => {
      n.d(t, { E: () => i });
      var s = n(54568);
      let i = (0, n(69879).A)(
        (0, s.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 34 34',
          fill: 'currentColor',
          children: (0, s.jsx)('path', {
            d: 'M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z',
          }),
        }),
        'Discord'
      );
    },
    42374: (e, t, n) => {
      n.d(t, { u: () => h });
      var s = n(54568),
        i = n(27261),
        r = n.n(i),
        l = n(62942),
        a = n(7005),
        o = n(45629),
        d = n(87401),
        c = n(81473);
      let x = { small: 'buttonS', medium: 'buttonM', large: 'headingMBold' },
        h = ({
          variant: e = 'contained',
          size: t = 'small',
          muiVariant: n,
          options: i,
          onChange: h,
          value: C,
          textVariant: g,
          ...p
        }) => {
          let j = (0, l.usePathname)();
          return (0, s.jsx)(o.A, {
            variant: n,
            textColor: 'inherit',
            value: C ?? !1,
            onChange: (e, t) => h?.(t),
            className: `${c.gH[e]} ${c.Mw[t]}`,
            ...p,
            children: i.map(({ value: e, label: n, sx: i, ...l }) =>
              (0, s.jsx)(
                a.A,
                {
                  value: e,
                  component: r(),
                  href: `${j}?tab=${e}`,
                  label: (0, s.jsx)(d.A, { variant: g ?? x[t], children: n }),
                  sx: { ...i, whiteSpace: 'nowrap' },
                  ...l,
                },
                e
              )
            ),
          });
        };
    },
  },
]);
