'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4357],
  {
    7908: (e, i, r) => {
      r.d(i, { A: () => n });
      var l = r(54568),
        t = r(48341);
      let o = (0, t.i7)(['100%{transform:translateX(100%);}']),
        a = t.Ay.span.withConfig({ componentId: 'sc-d22a12ef-0' })(
          [
            'display:inline-block;position:relative;overflow:hidden;',
            ' ',
            " &:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);animation:",
            ' 2s infinite;',
            '',
          ],
          ({ skeleton: e }) => {
            if (e)
              return `
        height: ${e[1]}px;
        width: ${e[0]}px;
      `;
          },
          ({ isLightBg: e }) =>
            e
              ? 'background-color: var(--skeleton_light--background-color);'
              : 'background-color: var(--skeleton--background-color);',
          o,
          ({ isLightBg: e }) =>
            e
              ? 'background-image: var(--skeleton_light--background-image);'
              : 'background-image: var(--skeleton--background-image);'
        ),
        n = ({ className: e, isLightBg: i = !1, skeleton: r = [12, 12], ...t }) =>
          (0, l.jsx)(a, { className: e, isLightBg: i, skeleton: r, ...t });
    },
    14633: (e, i, r) => {
      r.d(i, { A: () => s });
      var l = r(54568),
        t = r(27261),
        o = r.n(t);
      r(7620);
      var a = r(48341),
        n = r(31702);
      let d = (0, a.Ay)(o()).withConfig({ componentId: 'sc-4549052d-0' })(['', ''], n.$),
        s = ({ children: e, href: i = '', ...r }) => (0, l.jsx)(d, { ...r, href: i, children: e });
    },
    16726: (e, i, r) => {
      r.d(i, { A: () => b });
      var l = r(54568),
        t = r(7620),
        o = r(48341),
        a = r(45808),
        n = r(27280),
        d = r(94990),
        s = r(75778);
      let c = (0, t.forwardRef)(({ className: e, children: i, loading: r, testId: o, ...a }, s) => {
          let c = (0, t.useRef)(null),
            { isFocusVisible: b, focusProps: h } = (0, d.o)();
          return (0, l.jsxs)(u, {
            ...a,
            ...h,
            'data-testid': `btn-${o}`,
            className: `${e || ''} ${r ? 'loading' : ''} ${b ? 'focus-visible' : ''}`,
            ref: s || c,
            children: [
              i,
              r &&
                (0, l.jsx)(g, {
                  flex: !0,
                  flexAlignItems: 'center',
                  flexJustifyContent: 'center',
                  fillWidth: !0,
                  fillHeight: !0,
                  children: (0, l.jsx)(n.A, { isDisabled: !0, size: 17 }),
                }),
            ],
          });
        }),
        u = o.Ay.button.withConfig({ componentId: 'sc-186dc391-0' })(['', ';'], s.ku),
        g = (0, o.Ay)(a.A).withConfig({ componentId: 'sc-186dc391-1' })([
          'position:absolute;top:0;left:0;bottom:0;right:0;background-color:var(--button--disabled_spinner--background-color);',
        ]);
      c.displayName = 'Button';
      let b = c;
    },
    17147: (e, i, r) => {
      r.d(i, { wl: () => eT, be: () => eM, L1: () => eD });
      var l = r(33377),
        t = r(84121);
      let o = (e, i) =>
        ({
          [-2]: `2px 2px 0px 0px ${e.Color.Neutral[800]} inset`,
          [-1]: `1px 1px 0px 0px ${e.Color.Neutral[800]} inset`,
          1: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334624,0px 4px 4px -2px #2A334524,0px 8px 8px -8px #2A334514',
          2: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334624,0px 6px 6px -3px #2A334624,0px 8px 8px -6px #2A334524,0px 12px 12px -6px #2A334514',
          3: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334524,0px 8px 8px -4px #2A334524,0px 16px 16px -8px #2A334524,0px 32px 32px -16px #2A33451A',
        })[i];
      var a = r(72415),
        n = r(84032),
        d = r(41265);
      let { LineHeight: s, OutlineWidth: c, FontWeight: u, ButtonSize: g, FontSize: b } = n.B,
        h = ({ Fill: e, Label: i, Outline: r }) => ({
          color: i,
          backgroundColor: e,
          borderColor: r,
        }),
        p = ({ Default: e, Disabled: i, Hover: r, Current: l }) => ({
          ...h(e),
          '&:hover': h(r),
          '&:disabled': i && h(i),
          '&.current': l && h(l),
        }),
        m = (e, i, r, l, o) => ({
          [t.b.breakpoints.up(o)]: { height: e, fontSize: i[o], fontWeight: r, lineHeight: l[o] },
        }),
        v = ({ height: e, fontSize: i, fontWeight: r = 'Bold', lineHeight: l }) => ({
          ...m(g[e], b[i], u[r], s[l], 'mobile'),
          ...m(g[e], b[i], u[r], s[l], 'tablet'),
          ...m(g[e], b[i], u[r], s[l], 'desktop'),
        }),
        x = ({ Button: e, Text: i }) => {
          let {
              Primary: r,
              Secondary: l,
              Success: o,
              Error: s,
              Outlined: u,
              Ghost: g,
              Navigation: b,
              Focus_Outline: h,
              Transition: m,
            } = e,
            x = {
              primary: p(r),
              secondary: p(l),
              success: p(o),
              error: p(s),
              outlined: p(u),
              ghost: p(g),
              navigation: p(b),
            },
            f = d.vX[i.FontFamily.Button];
          return {
            styleOverrides: {
              root: {
                variants: [
                  ...Object.entries(x).map(([e, i]) => ({ props: { color: e }, style: i })),
                  {
                    props: { variant: 'link' },
                    style: { textTransform: 'none', padding: 0, height: `${a.XQ[400]} !important` },
                  },
                ],
                borderRadius: 0,
                border: `${c} solid transparent`,
                boxSizing: 'border-box',
                '&:focus-visible': { borderColor: h },
                fontFamily: f,
                textTransform: 'uppercase',
                transition: m,
              },
              sizeExtraSmall: {
                ...v({ height: 'xs', fontSize: 'sm', lineHeight: 'md' }),
                textTransform: 'none',
              },
              sizeSmall: v({ height: 'sm', fontSize: 'sm', lineHeight: 'md' }),
              sizeMedium: v({ height: 'md', fontSize: 'md', lineHeight: 'xl' }),
              sizeLarge: v({ height: 'lg', fontSize: 'md', lineHeight: 'xl' }),
              startIcon: {
                [t.b.breakpoints.up('mobile')]: { marginInlineEnd: n.B.Spacing.xs.mobile },
                [t.b.breakpoints.up('tablet')]: { marginInlineEnd: n.B.Spacing.xs.tablet },
                [t.b.breakpoints.up('desktop')]: { marginInlineEnd: n.B.Spacing.xs.desktop },
              },
              endIcon: {
                [t.b.breakpoints.up('mobile')]: { marginInlineStart: n.B.Spacing.xs.mobile },
                [t.b.breakpoints.up('tablet')]: { marginInlineStart: n.B.Spacing.xs.tablet },
                [t.b.breakpoints.up('desktop')]: { marginInlineStart: n.B.Spacing.xs.desktop },
              },
            },
          };
        },
        { ButtonSize: f, OutlineWidth: y } = n.B,
        B = ({ Button: e, Layer: i, Text: r }) => ({
          styleOverrides: {
            root: {
              height: f.sm,
              minWidth: f.sm,
              border: `${y} solid transparent`,
              borderRadius: '0',
              padding: 0,
              color: e.Ghost.Default.Label,
              transition: e.Transition,
              '&.current': { borderColor: i.Highlight.Outline },
              ':focus-visible': { borderColor: i.Highlight.Outline },
              '&:hover': {
                color: e.Ghost.Hover.Label,
                backgroundColor: 'transparent',
                filter: 'saturate(2)',
              },
              fontFamily: d.vX[r.FontFamily.Button],
            },
            sizeExtraSmall: { height: f.xs, minWidth: f.xs },
            sizeSmall: { height: f.sm, minWidth: f.sm },
            sizeMedium: { height: f.md, minWidth: f.md },
            sizeLarge: { height: f.lg, minWidth: f.lg },
          },
        }),
        {
          Spacing: F,
          ButtonSize: A,
          FontSize: C,
          FontWeight: S,
          LineHeight: k,
          OutlineWidth: H,
        } = n.B,
        L = ({ Label: e, Fill: i }) => ({ color: e, backgroundColor: i }),
        w = (e, i, r, l, o, a, n, d) => ({
          [t.b.breakpoints.up(e)]: {
            minHeight: i,
            minWidth: r,
            ...(d && { height: d, width: d }),
            paddingBlock: l[e],
            paddingInline: o[e],
            fontSize: a[e],
            fontWeight: S.Bold,
            lineHeight: n[e],
          },
        }),
        T = ({
          minHeight: e,
          minWidth: i,
          paddingBlock: r,
          paddingInline: l,
          fontSize: t,
          lineHeight: o,
        }) => {
          let a = [A[e], A[i], F[r], F[l], C[t], k[o]];
          return { ...w('mobile', ...a), ...w('tablet', ...a), ...w('desktop', ...a) };
        },
        M = ({ size: e, padding: i, fontSize: r, lineHeight: l }) => {
          let t = [A[e], A[e], F[i], F[i], C[r], k[l], ...(e && [A[e]])];
          return {
            ...w('mobile', ...t),
            ...w('tablet', ...t),
            ...w('desktop', ...t),
            overflow: 'hidden',
          };
        },
        D = ({ Toggles: e, Button: i, Text: r }) => {
          let { Default: l, Hover: t, Current: o } = e;
          return {
            styleOverrides: {
              root: {
                ...L(l),
                '&:hover': L(t),
                '&.Mui-selected': L(o),
                '&.Mui-selected:hover': L(o),
                '&&': { margin: 0 },
                border: `${H} solid transparent !important`,
                borderRadius: 0,
                transition: i.Transition,
                fontFamily: d.vX[r.FontFamily.Button],
                textTransform: 'uppercase',
              },
              sizeExtraSmall: {
                ...T({
                  minHeight: 'xs',
                  minWidth: 'sm',
                  paddingBlock: 'xs',
                  paddingInline: 'sm',
                  fontSize: 'sm',
                  lineHeight: 'sm',
                }),
                textTransform: 'none',
              },
              sizeExtraSmallSquare: {
                ...M({ size: 'xs', padding: 'xs', fontSize: 'sm', lineHeight: 'sm' }),
                textTransform: 'none',
              },
              sizeSmall: T({
                minHeight: 'sm',
                minWidth: 'sm',
                paddingBlock: 'sm',
                paddingInline: 'md',
                fontSize: 'sm',
                lineHeight: 'sm',
              }),
              sizeSmallSquare: M({ size: 'sm', padding: 'sm', fontSize: 'sm', lineHeight: 'sm' }),
              sizeMedium: T({
                minHeight: 'md',
                minWidth: 'md',
                paddingBlock: 'sm',
                paddingInline: 'md',
                fontSize: 'md',
                lineHeight: 'xl',
              }),
              sizeMediumSquare: M({ size: 'md', padding: 'sm', fontSize: 'md', lineHeight: 'xl' }),
            },
          };
        },
        { Sizing: z, Spacing: O, ButtonSize: W } = n.B,
        I = (e, i) => ({
          styleOverrides: {
            root: {
              padding: `${O.lg.desktop} ${O.md.desktop} ${O.sm.desktop}`,
              borderBottom: `1px solid ${e.Layer[3].Outline}`,
              minHeight: `calc(${W.lg} + 1px)`,
              variants: [
                {
                  props: { size: 'small' },
                  style: {
                    minHeight: 'auto',
                    maxHeight: z.md.desktop,
                    padding: `${O.md.desktop} ${O.md.desktop} ${O.sm.desktop}`,
                  },
                },
              ],
            },
            action: { alignContent: 'center', alignSelf: 'center', margin: 0 },
            title: {
              ...i.headingSBold,
              variants: [{ props: { size: 'small' }, style: { ...i.headingXsBold } }],
            },
          },
        });
      var P = r(54568),
        N = r(44876),
        $ = r(69879);
      let j = (0, $.A)(
          (0, P.jsx)('svg', {
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, P.jsx)('path', {
              d: 'M12.2314 3.97534C12.5396 4.17683 12.6261 4.58999 12.4246 4.89815L7.89123 11.8315C7.78439 11.9949 7.61131 12.1032 7.41766 12.128C7.22401 12.1527 7.02925 12.0913 6.8848 11.9599L3.95147 9.29328C3.67903 9.04561 3.65895 8.62398 3.90662 8.35154C4.1543 8.0791 4.57593 8.05902 4.84837 8.30669L7.20315 10.4474L11.3086 4.16849C11.5101 3.86032 11.9233 3.77385 12.2314 3.97534Z',
              fill: 'currentColor',
            }),
          }),
          'Check'
        ),
        { Sizing: R } = n.B,
        E = (0, $.A)((0, P.jsx)('svg', { viewBox: '0 0 24 24' }), 'Empty'),
        X = (e) =>
          (0, P.jsx)(N.A, {
            className: 'icon-wrapper',
            display: 'flex',
            sx: {
              outline: '1px solid currentColor',
              '& svg': {
                animation: 'checkmark-appear 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
              },
              '@keyframes checkmark-appear': {
                from: { transform: 'scale(0)' },
                to: { transform: 'scale(1)' },
              },
            },
            children: e,
          }),
        _ = ({ size: e }) => ({ '& .icon-wrapper svg': (0, t.N)({ fontSize: R[e] }) }),
        U = () => ({
          defaultProps: {
            icon: X((0, P.jsx)(E, {})),
            checkedIcon: X((0, P.jsx)(j, {})),
            disableRipple: !0,
          },
          styleOverrides: {
            root: {
              ..._({ size: 'sm' }),
              '&:hover .icon-wrapper, .MuiFormControlLabel-root:hover &:not(.Mui-disabled) .icon-wrapper, &.Mui-focusVisible .icon-wrapper':
                { outlineWidth: '2px' },
            },
            sizeSmall: { ..._({ size: 'xs' }) },
            sizeLarge: { ..._({ size: 'md' }) },
          },
        }),
        V = (e, i) => ({
          style: { backgroundColor: i.Fill[e], color: i.Label[e], borderColor: i.Border[e] },
          props: { color: e.toLowerCase() },
        }),
        { Sizing: Q, Spacing: q, IconSize: G } = n.B,
        Z = {
          extraSmall: { font: 'bodyXsBold', height: G.md, iconSize: G.sm },
          small: { font: 'buttonXs', height: G.md, iconSize: G.sm },
          medium: { font: 'buttonXs', height: Q.md, iconSize: G.md },
          large: { font: 'buttonM', height: Q.md, iconSize: G.lg },
          extraLarge: { font: 'headingSBold', height: Q.xl, iconSize: G.xl },
        },
        Y = {
          extraSmall: { deleteIconSize: G.xs },
          small: { height: Q.md, deleteIconSize: G.sm },
          medium: { font: 'buttonS', deleteIconSize: G.md },
          large: { height: Q.lg, font: 'buttonS', deleteIconSize: G.lg },
          extraLarge: { height: Q.xl, deleteIconSize: G.xl },
        },
        J = ({ Chips: e, Color: i, Text: { TextColors: r }, Layer: l, Badges: o }, a) => ({
          styleOverrides: {
            root: {
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'transparent',
              borderRadius: e.BorderRadius.NonClickable,
              color: r.Primary,
              backgroundColor: 'transparent',
              ...(0, t.N)({ paddingInline: q.xs }),
              '&:has(.MuiChip-icon)': {
                ...(0, t.N)({ gap: q.xs }),
                '& .MuiChip-icon': { marginInline: 0 },
                '& .MuiChip-label': { paddingInline: 0 },
              },
            },
          },
          variants: [
            {
              props: { clickable: !0 },
              style: {
                borderRadius: e.BorderRadius.Clickable,
                borderColor: e.Default.Stroke,
                cursor: 'pointer',
                '& .MuiChip-deleteIcon': { margin: 0 },
                '&:hover, &:focus-visible': {
                  borderColor: 'transparent',
                  backgroundColor: e.Hover.Fill,
                  color: e.Hover.Label,
                  '& .MuiChip-deleteIcon': { fill: e.Hover.Label },
                },
              },
            },
            V('Default', o),
            V('Active', o),
            V('Alert', o),
            V('Highlight', o),
            V('Warning', o),
            V('Accent', o),
            {
              props: { color: 'selected' },
              style: {
                backgroundColor: e.Current.Fill,
                color: e.Current.Label,
                borderColor: e.Current.Outline,
                '& .MuiChip-deleteIcon': { fill: e.Current.Label },
              },
            },
            {
              props: { color: 'unselected' },
              style: {
                color: e.Default.Label,
                backgroundColor: e.Default.Fill,
                borderColor: e.Default.Stroke,
                '& .MuiChip-deleteIcon': { fill: e.Default.Label },
              },
            },
            ...Object.entries(Z).map(([e, { font: i, iconSize: r, ...l }]) => ({
              props: { size: e },
              style: {
                ...(0, t.N)({ ...a[i], ...l }),
                '&:has(.MuiChip-icon)': { '& .MuiChip-icon': (0, t.N)({ width: r, height: r }) },
              },
            })),
            ...Object.entries(Y).map(([e, { font: i, deleteIconSize: r, ...l }]) => ({
              props: { size: e, clickable: !0 },
              style: {
                ...(0, t.N)({ ...(i && a[i]), ...l }),
                '& .MuiChip-deleteIcon': (0, t.N)({ width: r, height: r }),
              },
            })),
          ],
        });
      var K = r(83897);
      let ee = (0, $.A)(
          (0, P.jsxs)('svg', {
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, P.jsx)('path', {
                d: 'M8.79988 4.80006C8.79988 5.24189 8.44171 5.60006 7.99988 5.60006C7.55806 5.60006 7.19988 5.24189 7.19988 4.80006C7.19988 4.35823 7.55806 4.00006 7.99988 4.00006C8.44171 4.00006 8.79988 4.35823 8.79988 4.80006Z',
                fill: 'currentColor',
              }),
              (0, P.jsx)('path', {
                d: 'M6.40001 6.40006H8.00001C8.29456 6.40006 8.53334 6.63884 8.53334 6.93339V10.6667H9.60001V11.7334H6.40001V10.6667H7.46667V7.46672H6.40001V6.40006Z',
                fill: 'currentColor',
              }),
              (0, P.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M7.99987 0.935425C4.09834 0.935425 0.935516 4.09825 0.935516 7.99978C0.935516 11.9013 4.09834 15.0641 7.99987 15.0641C11.9014 15.0641 15.0642 11.9013 15.0642 7.99978C15.0642 4.09825 11.9014 0.935425 7.99987 0.935425ZM1.94885 7.99978C1.94885 4.6579 4.65799 1.94876 7.99987 1.94876C11.3417 1.94876 14.0509 4.6579 14.0509 7.99978C14.0509 11.3416 11.3417 14.0508 7.99987 14.0508C4.65799 14.0508 1.94885 11.3416 1.94885 7.99978Z',
                fill: 'currentColor',
              }),
            ],
          }),
          'InfoCircled'
        ),
        { Spacing: ei, IconSize: er } = n.B,
        el = '.MuiAlertTitle-root, .MuiAlert-icon',
        et = (
          { Layer: { 1: e, Feedback: i, Highlight: r }, Text: { TextColors: l } },
          { bodyXsRegular: o }
        ) => ({
          defaultProps: {
            iconMapping: {
              success: (0, P.jsx)(j, { fontSize: 'small' }),
              info: (0, P.jsx)(ee, { fontSize: 'small' }),
              warning: (0, P.jsx)(K.P, { fontSize: 'small' }),
              error: (0, P.jsx)(K.P, { fontSize: 'small' }),
            },
          },
          styleOverrides: {
            root: (0, t.N)({
              ...o,
              paddingInlineStart: ei.md,
              paddingInlineEnd: ei.sm,
              paddingBlockStart: ei.sm,
              paddingBlockEnd: ei.xs,
            }),
            outlined: {
              backgroundColor: e.Fill,
              color: l.Secondary,
              '&.MuiAlert-colorInfo': { [el]: { color: l.Highlight }, borderColor: r.Outline },
              '&.MuiAlert-colorSuccess': {
                [el]: { color: l.Feedback.Success },
                borderColor: i.Success,
              },
              '&.MuiAlert-colorWarning': {
                [el]: { color: l.Feedback.Warning },
                borderColor: i.Warning,
              },
              '&.MuiAlert-colorError': { [el]: { color: l.Feedback.Error }, borderColor: i.Error },
            },
            filled: {
              color: l.Feedback.Inverted,
              '&.MuiAlert-colorInfo': { backgroundColor: i.Info },
              '&.MuiAlert-colorSuccess': { backgroundColor: i.Success },
              '&.MuiAlert-colorWarning': { backgroundColor: i.Warning, color: l.Primary },
              '&.MuiAlert-colorError': { backgroundColor: i.Error },
            },
            icon: {
              ...(0, t.N)({ marginRight: ei.xs }),
              '& svg': (0, t.N)({ width: er.sm, height: er.sm }),
            },
          },
        }),
        eo = ({}, { bodySBold: e }) => ({
          styleOverrides: { root: (0, t.N)({ ...e, height: er.sm, marginBlockEnd: '4px' }) },
        }),
        { ButtonSize: ea, Spacing: en } = n.B,
        ed = (e) => ({
          styleOverrides: {
            root: {
              ...(0, t.N)({
                height: ea.md,
                transition: e.Button.Transition,
                gap: en.sm,
                paddingBlock: en.xs,
                paddingInline: en.sm,
              }),
              '&.Mui-focusVisible': {
                backgroundColor: e.Layer.TypeAction.Hover,
                '.MuiTypography-root': { '--mui-palette-text-primary': 'inherit' },
              },
              '&.Mui-selected': {
                backgroundColor: e.Layer.TypeAction.Selected,
                '&:hover': { backgroundColor: e.Layer.TypeAction.Selected },
              },
            },
            dense: { height: ea.sm },
          },
        }),
        es = (e, i) => ({
          styleOverrides: {
            root: {
              border: 'none',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderBottom: `1px solid ${e.Layer[3].Outline}`,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: `2px solid ${e.Inputs.Base.Default.Border.Active}`,
              },
            },
            select: { ...i.bodyMBold },
          },
        }),
        ec = ({ Switch: { Default: e, Checked: i }, Button: { Focus_Outline: r } }) => ({
          styleOverrides: {
            root: { padding: 0, ':focus-within': { '.MuiSwitch-track': { borderColor: r } } },
            switchBase: { borderRadius: 0, '&.Mui-checked+.MuiSwitch-track': { opacity: 1 } },
            track: {
              borderRadius: 0,
              backgroundColor: e.Fill,
              border: `1px solid ${e.Outline}`,
              '.Mui-checked &': { backgroundColor: i.Fill, borderColor: i.Outline },
            },
            thumb: { borderRadius: 0, color: e.Label, '.Mui-checked &': { color: i.Label } },
          },
        }),
        { Spacing: eu, MaxWidth: eg } = n.B,
        eb = (e, i) => ({
          styleOverrides: {
            tooltip: {
              color: e.Text.TextColors.Secondary,
              backgroundColor: e.Layer[3].Fill,
              boxShadow: o(e, 2),
              maxWidth: eg.tooltip,
              display: 'flex',
              alignItems: 'center',
              ...(0, t.N)({ padding: eu.md, ...i.bodyMBold }),
            },
          },
        }),
        { Sizing: eh } = n.B,
        ep = (0, $.A)((0, P.jsx)('svg', { viewBox: '0 0 24 24' }), 'Empty'),
        em = (0, $.A)(
          (0, P.jsx)('svg', {
            viewBox: '0 0 24 24',
            children: (0, P.jsx)('circle', { cx: '12', cy: '12', r: '6', fill: 'currentColor' }),
          }),
          'Circle'
        ),
        ev = (e) =>
          (0, P.jsx)(N.A, {
            className: 'icon-wrapper',
            display: 'flex',
            sx: {
              outline: '1px solid currentColor',
              borderRadius: '50%',
              '& svg': { animation: 'circle-appear 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards' },
              '@keyframes circle-appear': {
                from: { transform: 'scale(0)' },
                to: { transform: 'scale(1)' },
              },
            },
            children: e,
          }),
        ex = ({ size: e }) => ({ '& .icon-wrapper svg': (0, t.N)({ fontSize: eh[e] }) }),
        ef = () => ({
          defaultProps: {
            icon: ev((0, P.jsx)(ep, {})),
            checkedIcon: ev((0, P.jsx)(em, {})),
            disableRipple: !0,
          },
          styleOverrides: {
            root: {
              ...ex({ size: 'sm' }),
              '&:hover .icon-wrapper, .MuiFormControlLabel-root:hover &:not(.Mui-disabled) .icon-wrapper, &.Mui-focusVisible .icon-wrapper':
                { outlineWidth: '2px' },
            },
            sizeSmall: { ...ex({ size: 'xs' }) },
            sizeLarge: { ...ex({ size: 'md' }) },
          },
        }),
        { Sizing: ey } = n.B,
        eB = { small: ey.xs, medium: ey.sm },
        eF = {
          ...(0, t.N)({ height: eB.small }),
          borderRadius: 0,
          border: 'none',
          '&.MuiSlider-sizeMedium, .MuiSlider-sizeMedium &': (0, t.N)({ height: eB.medium }),
        },
        eA = (e) => ({
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            right: -10,
            left: -10,
            border: `1px solid ${e.Color.Neutral[500]}`,
            zIndex: -1,
          },
        }),
        eC = ':not(:has([data-index="1"]))',
        eS = (e) => ({
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -10,
            width: 10,
            height: '100%',
          },
          [`&${eC}::before`]: { backgroundColor: e.Button.Primary.Default.Fill },
          [`&.Mui-disabled${eC}::before`]: { backgroundColor: 'var(--mui-palette-grey-400)' },
        }),
        ek = (e) => ({
          defaultProps: { size: 'small' },
          styleOverrides: {
            root: {
              ...eF,
              borderRadius: 0,
              '&': { paddingBlock: 0 },
              position: 'relative',
              ...eA(e),
              ...eS(e),
            },
            thumb: {
              ...eF,
              width: 20,
              background: `${e.Color.Neutral[950]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
              transition: `background ${a.Uw}, border ${a.Uw}`,
              '&:hover': {
                backdropFilter: 'invert(1)',
                background: `${e.Color.Neutral[50]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
                backgroundBlendMode: 'difference',
                border: `1px solid ${e.Color.Primary[500]}`,
              },
              '&:hover, &.Mui-focusVisible': { boxShadow: 'none' },
              '&.Mui-disabled': {
                background: `${e.Color.Neutral[600]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
              },
            },
            track: eF,
            rail: { height: 0 },
          },
        });
      var eH = r(81473);
      let eL = {
          headingXxl: 'h1',
          headingMBold: 'h2',
          headingMLight: 'h3',
          headingSBold: 'h4',
          headingXsBold: 'h5',
          headingXsMedium: 'h6',
          bodyMRegular: 'p',
          bodyMBold: 'p',
          bodySRegular: 'p',
          bodySBold: 'p',
          bodyXsRegular: 'p',
          bodyXsBold: 'p',
          buttonXs: 'span',
          buttonS: 'span',
          buttonM: 'span',
          tableHeaderM: 'p',
          tableHeaderS: 'p',
          tableCellL: 'p',
          tableCellMRegular: 'p',
          tableCellMBold: 'p',
          tableCellSRegular: 'p',
          tableCellSBold: 'p',
          highlightXsNotional: 'p',
          highlightXs: 'p',
          highlightS: 'p',
          highlightM: 'p',
          highlightL: 'p',
          highlightXl: 'p',
          highlightXxl: 'p',
        },
        ew = ({ Text: e }) => ({
          defaultProps: { variant: 'bodyMRegular', variantMapping: eL },
          variants: Object.entries(e.TextColors.Feedback).map(([e, i]) => ({
            props: { color: e.toLowerCase() },
            style: { color: i },
          })),
        }),
        eT = n.B.ButtonSize.sm,
        eM = { width: '100%', minWidth: 320 },
        eD = (e, i) => ({
          MuiAlert: et(e, i),
          MuiAlertTitle: eo(e, i),
          MuiButton: x(e),
          MuiButtonBase: { defaultProps: { disableRipple: !0 } },
          MuiCardHeader: I(e, i),
          MuiCardActions: {
            styleOverrides: {
              root: {
                borderTop: `1px solid ${e.Layer[3].Outline}`,
                minHeight: n.B.ButtonSize.lg,
                justifyContent: 'center',
              },
            },
          },
          MuiCheckbox: U(),
          MuiChip: J(e, i),
          MuiContainer: { styleOverrides: { root: { display: 'flex', maxWidth: 'var(--width)' } } },
          MuiDialog: {
            styleOverrides: {
              paper: { maxHeight: '100dvh', [t.b.breakpoints.down('tablet')]: { margin: 0 } },
            },
          },
          MuiDivider: { styleOverrides: { root: { borderColor: e.Layer[2].Outline } } },
          MuiFormControlLabel: {
            styleOverrides: {
              root: { margin: '0' },
              label: { marginLeft: n.B.Spacing.xs.desktop, ...i.headingXsBold },
            },
          },
          MuiIconButton: B(e),
          MuiLinearProgress: {
            styleOverrides: {
              root: { backgroundColor: e.Color.Neutral[300] },
              bar: { backgroundColor: e.Color.Primary[500] },
            },
          },
          MuiToggleButton: D(e),
          MuiToggleButtonGroup: {
            styleOverrides: {
              root: ({ ownerState: e }) => ({ gap: e.compact ? '0rem' : '0.25rem' }),
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                backgroundColor: e.Inputs.Base.Default.Fill,
                ':has(input:autofill)': {
                  backgroundColor: 'light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))',
                  boxShadow: '0 0 0 100px #266798 inset',
                  '& svg': { color: 'rgb(232, 240, 254)' },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 1,
                  transition: `border-color ${a.Uw}`,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: e.Inputs.Base.Default.Border.Active,
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: e.Inputs.Base.Default.Border.Error,
                },
              },
              input: { height: n.B.ButtonSize.md, boxSizing: 'border-box' },
              inputSizeSmall: { height: n.B.ButtonSize.sm },
            },
          },
          MuiMenuItem: ed(e),
          MuiSelect: es(e, i),
          MuiSlider: ek(e),
          MuiSkeleton: {
            styleOverrides: {
              root: { backgroundColor: (0, l.X4)(e.Text.TextColors.Primary, 0.13) },
            },
          },
          MuiTab: (0, eH.Yk)(e),
          MuiTabs: (0, eH.Xq)(e),
          MuiToolbar: { styleOverrides: { root: { minHeight: eT, paddingX: 3 } } },
          MuiTooltip: eb(e, i),
          MuiPaper: {
            styleOverrides: {
              root: { boxShadow: o(e, 1), backgroundImage: 'none' },
              elevation2: { boxShadow: o(e, 2) },
              elevation3: { boxShadow: o(e, 3) },
              elevation11: { boxShadow: o(e, -1) },
              elevation12: { boxShadow: o(e, -2) },
            },
          },
          MuiPopover: {
            defaultProps: { marginThreshold: 8, elevation: 3 },
            styleOverrides: {
              paper: {
                backgroundColor: e.Layer[3].Fill,
                '& .MuiMenu-list': { maxHeight: n.B.MaxHeight.popover },
              },
            },
          },
          MuiRadio: ef(),
          MuiSwitch: ec(e),
          MuiTypography: ew(e),
        });
    },
    27280: (e, i, r) => {
      r.d(i, { A: () => d });
      var l = r(54568),
        t = r(48341);
      let o = (0, t.i7)(['0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}']),
        a = t.Ay.div.withConfig({ componentId: 'sc-4b3b4f81-0' })(
          [
            'display:inline-block;position:relative;width:',
            'px;height:',
            'px;div{display:block;position:absolute;width:',
            'px;height:',
            'px;margin:2px;border:2px solid ',
            ';border-radius:50%;animation:',
            ' 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:',
            ' transparent transparent transparent;}div:nth-of-type(1){animation-delay:-0.45s;}div:nth-of-type(2){animation-delay:-0.3s;}div:nth-of-type(3){animation-delay:-0.15s;}',
          ],
          ({ size: e }) => (e || 30) + 4,
          ({ size: e }) => (e || 30) + 4,
          ({ size: e }) => e || 30,
          ({ size: e }) => e || 30,
          ({ isDisabled: e }) => n(e),
          o,
          ({ isDisabled: e }) => n(e)
        );
      function n(e) {
        return e ? 'var(--input--disabled--color)' : 'var(--border-400)';
      }
      let d = ({ isDisabled: e = !1, size: i, ...r }) =>
        (0, l.jsxs)(a, {
          ...r,
          isDisabled: e,
          size: i,
          children: [
            (0, l.jsx)('div', {}),
            (0, l.jsx)('div', {}),
            (0, l.jsx)('div', {}),
            (0, l.jsx)('div', {}),
          ],
        });
    },
    27487: (e, i, r) => {
      r.d(i, { A: () => l });
      let l = r(48341).Ay.header.withConfig({ componentId: 'sc-3345afef-0' })([
        'align-items:center;display:flex;justify-content:space-between;padding:0 var(--spacing-1);min-height:var(--box_header--height);width:100%;color:var(--box--primary--color);background-color:var(--box_header--primary--background-color);font-size:var(--box_header--font-size);font-weight:var(--box_header--font-weight);',
      ]);
    },
    31702: (e, i, r) => {
      r.d(i, { $: () => o });
      var l = r(48341),
        t = r(77878);
      let o = (0, l.AH)(
        [
          '',
          ';color:var(--link--color);font:var(--link--font-weight) var(--link--font);text-decoration:underline;transition:color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover{color:var(--link--hover--color);text-decoration-color:var(--link--underline--hover-color);}&.active,&.active:hover{color:var(--link--active-color);background-color:var(--active--background-color);}',
          ' ',
          ' ',
          ' ',
          '',
        ],
        t.N,
        ({ size: e }) => {
          if ('small' === e)
            return `
        min-height: var(--height-small);
        padding: 0 var(--spacing-2);
        font-size: var(--font-size-2);
      `;
        },
        ({ variant: e }) => {
          if ('contained' === e)
            return `
        &:active {
          box-shadow: none;
          transform: translate3d(3px, 3px, 3px);
        }
    
        &:hover {
          color: var(--link_contained--color);
          background-color: var(--link_contained--background-color);
          text-decoration-color: var(--link_contained--underline-color);
        }
      `;
        },
        ({ isDarkBg: e }) => {
          if (e)
            return `
        color: var(--link_light--color);

        &:hover {
          color: var(--link_light--hover--color);
          text-decoration-color: var(--link_light--hover--color);
        }
      `;
        },
        ({ $noStyles: e }) => {
          if (e)
            return `
        color: inherit;
        text-transform: inherit;
        
        &:hover {
          color: inherit;
          text-decoration: inherit;
        }
      `;
        }
      );
    },
    35736: (e, i, r) => {
      r.d(i, { E: () => t.A, G: () => l.A });
      var l = r(59339),
        t = r(14633);
    },
    39416: (e, i, r) => {
      r.d(i, { A: () => B });
      var l = r(54568),
        t = r(7620),
        o = r(82619),
        a = r(38392),
        n = r(2511),
        d = r(30929),
        s = r(23606),
        c = r(76970),
        u = r(36965),
        g = r(32032),
        b = r(5372),
        h = r(73359),
        p = r(53467),
        m = r(9240),
        v = r(10806),
        x = r(12932),
        f = r(64170);
      let y = {
          ArrowUp: o.Do,
          ArrowUpRight: o.F1,
          ArrowDown: o.fS,
          ArrowsHorizontal: o.pv,
          ArrowLeft: o.nk,
          ArrowRight: o.Qp,
          ArrowsVertical: a.BK,
          Calendar: a.Vv,
          Cursor_1: n.Jr,
          CaretDown: d.aY,
          CaretUp: d.Zc,
          ChevronDown: s.yQ,
          ChevronLeft: s.JG,
          ChevronSort: s.SK,
          ChevronRight: s.c_,
          ChevronUp: s.rX,
          CheckmarkFilled: s._j,
          Close: s.bm,
          Copy: n.QR,
          CurrencyDollar: n.Sq,
          Hourglass: c.Dx,
          Favorite: u.NG,
          FavoriteFilled: u.nr,
          FavoriteHalf: u.Q$,
          Fire: u.vX,
          InformationSquare: g.aB,
          InformationSquareFilled: g.mR,
          Locked: b.HK,
          Maximize: h.hz,
          Menu: h.DE,
          Minimize: h.Xj,
          Misuse: h.Jr,
          Launch: b.MQ,
          Search: p.vj,
          Settings: p.wB,
          SettingsAdjust: p.b_,
          Renew: m.wM,
          RowDelete: m.O,
          SidePanelClose: p.kz,
          SidePanelOpen: p.i6,
          Stop: v.VG,
          StopFilledAlt: v.Y5,
          UpToTop: x.mI,
          Wallet: x.uW,
          WarningSquareFilled: x.eI,
          StoragePool: v.YJ,
          OverflowMenuVertical: f.CH,
        },
        B = ({ className: e, name: i, size: r, ...o }) => {
          let a = (0, t.useMemo)(() => {
            if (i && i in y) return y[i];
          }, [i]);
          return a ? (0, l.jsx)(a, { className: e, size: r, ...o }) : (0, l.jsx)(l.Fragment, {});
        };
    },
    41265: (e, i, r) => {
      r.d(i, { jq: () => v, vX: () => m });
      var l = r(5230),
        t = r.n(l),
        o = r(40246),
        a = r.n(o),
        n = r(22174),
        d = r.n(n);
      let s = 'true' === r(40459).env.STORYBOOK,
        c = s ? { style: { fontFamily: 'MonaSans' } } : t(),
        u = s ? { style: { fontFamily: 'Hubot Sans' } } : a(),
        g = s ? { style: { fontFamily: 'Minecraft' } } : d(),
        b = [c.style.fontFamily, '"Helvetica Neue"', 'Helvetica', 'sans-serif'].join(','),
        h = [u.style.fontFamily, '"Helvetica Neue"', 'Helvetica', 'sans-serif'].join(','),
        p = [g.style.fontFamily, '"SF Mono Regular 11"', '"Ubuntu Mono"', 'monospace'].join(','),
        m = { 'Mona Sans': b, 'Hubot Sans': h, Minecraft: p },
        v = { '--font': h, '--button--font': p };
    },
    45808: (e, i, r) => {
      r.d(i, { A: () => o });
      var l = r(48341),
        t = r(39651);
      let o = l.Ay.div
        .attrs(function ({ className: e, fillHeight: i, fillWidth: r, ...l }) {
          let t = `${e || ''} ${r ? 'width--full' : ''} ${i ? 'height--full' : ''}`;
          return { ...l, className: t };
        })
        .withConfig({ componentId: 'sc-5f8c1a7c-0' })(
        [
          '',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ';',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ';',
          ';',
          ';',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '',
        ],
        ({ flex: e }) => e && 'display: flex;',
        ({ flexDirection: e }) => e && `flex-direction: ${e};`,
        ({ flexColumn: e }) => e && 'flex-direction: column;',
        ({ flexAlignItems: e }) => e && `align-items: ${e};`,
        ({ flexJustifyContent: e }) => e && `justify-content: ${e};`,
        ({ flexWrap: e }) => e && `flex-wrap: ${e};`,
        ({ flexGap: e }) => e && `gap: ${e};`,
        ({ flexCenter: e }) => {
          if (e)
            return `
        align-items: center;
        justify-content: center;
      `;
        },
        ({ grid: e }) => e && 'display: grid;',
        ({ gridArea: e }) => e && `grid-area: grid-${e};`,
        ({ gridAutoColumns: e }) => e && `grid-auto-columns: ${e};`,
        ({ gridAutoRows: e }) => e && `grid-auto-rows: ${e};`,
        ({ gridAutoFlow: e }) => e && `grid-auto-flow: ${e};`,
        ({ gridGap: e }) => e && `grid-gap: var(--spacing-${e});`,
        ({ gridColumnGap: e }) => e && `grid-column-gap: var(--spacing-${e});`,
        ({ gridRowGap: e }) => e && `grid-row-gap: var(--spacing-${e});`,
        ({ gridTemplateColumns: e }) => e && `grid-template-columns: ${e};`,
        ({ gridTemplateRows: e }) => e && `grid-template-rows: ${e};`,
        ({ display: e }) => e && `display: ${e};`,
        ({ padding: e }) =>
          !0 === e
            ? `
        padding: var(--spacing-narrow);

        @media (min-width: ${t.fi.md}rem) {
          padding: var(--spacing-3);
        }
      `
            : 'string' == typeof e
              ? `padding: ${e};`
              : void 0,
        ({ margin: e }) => {
          if (e) return `margin: ${e};`;
        },
        ({ variant: e }) =>
          'primary' === e
            ? `
        color: var(--box--primary--color);
        background: var(--box--primary--background);
      `
            : 'secondary' === e
              ? `
        color: inherit;
        border: var(--box--secondary--border);
        background-color: var(--box--secondary--background-color);
      `
              : void 0,
        ({ shadowed: e }) => {
          if (e) return 'box-shadow: 6px 6px 0 var(--box--primary--shadow-color);';
        },
        ({ maxWidth: e }) => {
          if (e) return `max-width: ${e};`;
        }
      );
    },
    47990: (e, i, r) => {
      r.d(i, { A: () => l.A });
      var l = r(16726);
    },
    56457: (e, i, r) => {
      r.d(i, { A: () => l.A });
      var l = r(39416);
    },
    59339: (e, i, r) => {
      r.d(i, { A: () => n });
      var l = r(54568),
        t = r(48341),
        o = r(31702);
      let a = t.Ay.a.withConfig({ componentId: 'sc-5da00b5e-0' })(['', ''], o.$),
        n = function ({ className: e, children: i, ...r }) {
          return (0, l.jsx)(a, {
            target: '_blank',
            ...r,
            className: e,
            rel: 'noreferrer noopener',
            children: i,
          });
        };
    },
    64387: (e, i, r) => {
      r.d(i, { A: () => t.A, N: () => l.A });
      var l = r(27487),
        t = r(45808);
    },
    69228: (e, i, r) => {
      r.d(i, { m: () => u });
      var l = r(54568),
        t = r(44876),
        o = r(78867),
        a = r(87401),
        n = r(84032),
        d = r(74043);
      let { Spacing: s } = n.B,
        c = ({ title: e, children: i }) =>
          (0, l.jsx)(d.i, {
            inverted: !1,
            children: (0, l.jsxs)(t.A, {
              sx: { padding: s.md, backgroundColor: (e) => e.design.Layer[3].Fill, width: '100%' },
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, l.jsx)(a.A, { variant: 'bodyMBold', color: 'textPrimary', children: e }),
                i,
              ],
            }),
          }),
        u = ({ title: e, body: i, clickable: r, children: t, slotProps: a, ...n }) =>
          (0, l.jsx)(o.A, {
            title: e && (0, l.jsx)(c, { title: e, children: i }),
            slotProps: {
              ...(!r && { popper: { sx: { userSelect: 'none', pointerEvents: 'none' } } }),
              tooltip: { sx: { '&': { padding: 0 } } },
            },
            ...n,
            children: t,
          });
    },
    71741: (e, i, r) => {
      r.d(i, { A: () => l });
      let l = r(48341).Ay.div.withConfig({ componentId: 'sc-b1ee5e03-0' })(
        [
          'align-items:center;display:flex;justify-content:center;padding:var(--spacing-',
          ');width:100%;',
          ' svg{vertical-align:baseline;circle:first-of-type{stroke:var(--spinner--foreground-color);}circle:last-of-type{stroke:var(--spinner--background-color);}}',
        ],
        ({ vSpacing: e }) => e ?? '5',
        ({ minHeight: e }) => {
          if (e)
            return `
        min-height: ${e};
        padding: 0;
      `;
        }
      );
    },
    74043: (e, i, r) => {
      r.d(i, { i: () => N, N: () => P });
      var l = r(54568),
        t = r(7806),
        o = r.n(t),
        a = r(31809),
        n = r(93790),
        d = r(77310),
        s = r(84121),
        c = r(17147),
        u = r(72415);
      let g = {
          plain: {
            Light: (function () {
              let e = {
                  Primary: u.ri[950],
                  Secondary: u.ri[700],
                  Tertiary: u.ri[500],
                  Disabled: u.ri[400],
                  Highlight: u.w8[500],
                  Feedback: {
                    Success: u.vd[600],
                    Warning: u.B6[400],
                    Error: u.B6[500],
                    Inverted: u.ri[50],
                  },
                },
                i = {
                  1: { Fill: u.ri[50], Outline: u.ri[300] },
                  2: { Fill: u.ri[100], Outline: u.ri[200] },
                  3: { Fill: u.ri[50], Outline: u.ri[300] },
                  Highlight: u.w8[500],
                  TypeAction: { Selected: u.w8[100], Hover: u.ri[150] },
                  Feedback: {
                    Info: u.w8[500],
                    Success: u.vd[600],
                    Warning: u.B6[300],
                    Error: u.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: u.ri[200] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: u.ri[10],
                    Alert: u.ri[10],
                    Highlight: u.w8[500],
                    Warning: u.ri[975],
                    Accent: u.ri[10],
                  },
                  Border: {
                    Default: u.ri[400],
                    Active: u.vd[400],
                    Alert: u.B6[500],
                    Highlight: u.w8[500],
                    Warning: u.B6[300],
                    Accent: u.w8[500],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: u.vd[400],
                    Alert: u.B6[500],
                    Highlight: i[1].Fill,
                    Warning: u.B6[300],
                    Accent: u.w8[500],
                  },
                },
              };
            })(),
            Dark: (function () {
              let e = {
                  Primary: u.ri[50],
                  Secondary: u.ri[300],
                  Tertiary: u.ri[400],
                  Disabled: u.ri[500],
                  Highlight: u.w8[400],
                  Feedback: {
                    Success: u.vd[400],
                    Warning: u.B6[300],
                    Error: u.B6[500],
                    Inverted: u.ri[950],
                  },
                },
                i = {
                  1: { Fill: u.ri[950], Outline: u.ri[900] },
                  2: { Fill: u.ri[900], Outline: u.ri[800] },
                  3: { Fill: u.ri[800], Outline: u.ri[700] },
                  Highlight: u.w8[500],
                  TypeAction: { Selected: u.w8[900], Hover: u.ri[800] },
                  Feedback: {
                    Info: u.w8[50],
                    Success: u.vd[300],
                    Warning: u.B6[400],
                    Error: u.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: u.ri[800] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: u.ri[10],
                    Alert: u.ri[10],
                    Highlight: u.w8[400],
                    Warning: u.ri[975],
                    Accent: u.ri[10],
                  },
                  Border: {
                    Default: u.ri[600],
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: u.w8[400],
                    Warning: u.B6[300],
                    Accent: u.w8[400],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: i[1].Fill,
                    Warning: u.B6[300],
                    Accent: u.w8[400],
                  },
                },
              };
            })(),
            Chad: (function () {
              let e = {
                  Primary: u.ri[950],
                  Secondary: u.ri[700],
                  Tertiary: u.ri[500],
                  Disabled: u.ri[400],
                  Highlight: u.Ac[600],
                  Feedback: {
                    Success: u.vd[600],
                    Warning: u.B6[400],
                    Error: u.B6[500],
                    Inverted: u.ri[50],
                  },
                },
                i = {
                  1: { Fill: u.Ac[100], Outline: u.Ac[300] },
                  2: { Fill: u.Ac[200], Outline: u.Ac[400] },
                  3: { Fill: u.Ac[300], Outline: u.Ac[500] },
                  Highlight: u.Ac[800],
                  TypeAction: { Selected: u.Ac[50], Hover: u.Ac[200] },
                  Feedback: {
                    Info: u.Ac[700],
                    Success: u.vd[600],
                    Warning: u.B6[300],
                    Error: u.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: u.Ac[50] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: u.ri[10],
                    Alert: u.ri[10],
                    Highlight: u.Ac[800],
                    Warning: u.ri[975],
                    Accent: u.ri[10],
                  },
                  Border: {
                    Default: u.ri[975],
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: u.Ac[800],
                    Warning: u.B6[300],
                    Accent: u.Ac[800],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: i[1].Fill,
                    Warning: u.B6[300],
                    Accent: u.Ac[800],
                  },
                },
              };
            })(),
          },
          inverted: {
            Light: (function () {
              let e = {
                  1: { Fill: u.ri[950], Outline: u.ri[600] },
                  2: { Fill: u.ri[900], Outline: u.ri[750] },
                  3: { Fill: u.ri[750], Outline: u.ri[600] },
                  Highlight: u.w8[500],
                  TypeAction: { Selected: u.ri[850], Hover: u.ri[900] },
                  Feedback: {
                    Info: u.w8[800],
                    Success: u.vd[300],
                    Warning: u.B6[400],
                    Error: u.B6[500],
                  },
                },
                i = {
                  Primary: u.ri[50],
                  Secondary: u.ri[300],
                  Tertiary: u.ri[400],
                  Disabled: u.ri[500],
                  Highlight: u.w8[500],
                  Feedback: {
                    Success: u.vd[300],
                    Warning: u.B6[300],
                    Error: u.B6[500],
                    Inverted: u.ri[950],
                  },
                };
              return {
                Text: i,
                Layer: e,
                Tables: { Header: { Fill: u.ri[800] } },
                Badges: {
                  Label: {
                    Default: i.Primary,
                    Active: u.ri[10],
                    Alert: u.ri[10],
                    Highlight: u.w8[400],
                    Warning: u.ri[975],
                    Accent: u.ri[10],
                  },
                  Border: {
                    Default: u.ri[600],
                    Active: u.vd[400],
                    Alert: u.B6[500],
                    Highlight: u.w8[400],
                    Warning: u.B6[300],
                    Accent: u.w8[400],
                  },
                  Fill: {
                    Default: e[1].Fill,
                    Active: u.vd[400],
                    Alert: u.B6[500],
                    Highlight: u.ri[10],
                    Warning: u.B6[300],
                    Accent: u.w8[400],
                  },
                },
              };
            })(),
            Dark: (function () {
              let e = {
                  Primary: u.ri[950],
                  Secondary: u.ri[700],
                  Tertiary: u.ri[600],
                  Disabled: u.ri[400],
                  Highlight: u.w8[500],
                  Feedback: {
                    Success: u.vd[600],
                    Warning: u.B6[400],
                    Error: u.B6[500],
                    Inverted: u.ri[50],
                  },
                },
                i = {
                  1: { Fill: u.ri[75], Outline: u.ri[300] },
                  2: { Fill: u.ri[100], Outline: u.ri[200] },
                  3: { Fill: u.ri[50], Outline: u.ri[300] },
                  Highlight: u.w8[500],
                  TypeAction: { Selected: u.w8[100], Hover: u.w8[50] },
                  Feedback: {
                    Info: u.w8[500],
                    Success: u.vd[600],
                    Warning: u.B6[300],
                    Error: u.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: u.ri[200] } },
                Badges: {
                  Label: {
                    Default: u.ri[975],
                    Active: u.ri[10],
                    Alert: u.ri[10],
                    Highlight: u.w8[500],
                    Warning: u.ri[975],
                    Accent: u.ri[10],
                  },
                  Border: {
                    Default: u.ri[975],
                    Active: u.vd[400],
                    Alert: u.B6[500],
                    Highlight: u.w8[500],
                    Warning: u.B6[300],
                    Accent: u.w8[500],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: i[1].Fill,
                    Warning: u.B6[300],
                    Accent: u.w8[500],
                  },
                },
              };
            })(),
            Chad: (function () {
              let e = {
                  Primary: u.ri[50],
                  Secondary: u.ri[300],
                  Tertiary: u.ri[400],
                  Disabled: u.ri[500],
                  Highlight: u.Ac[400],
                  Feedback: {
                    Success: u.vd[500],
                    Warning: u.B6[300],
                    Error: u.B6[500],
                    Inverted: u.ri[950],
                  },
                },
                i = {
                  1: { Fill: u.Ac[950], Outline: u.Ac[800] },
                  2: { Fill: u.Ac[800], Outline: u.Ac[600] },
                  3: { Fill: u.Ac[700], Outline: u.Ac[500] },
                  Highlight: u.Ac[400],
                  TypeAction: { Selected: u.Ac[800], Hover: u.Ac[900] },
                  Feedback: {
                    Info: u.ri[850],
                    Success: u.vd[300],
                    Warning: u.B6[400],
                    Error: u.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: u.Ac[800] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: u.ri[10],
                    Alert: u.ri[10],
                    Highlight: u.Ac[200],
                    Warning: u.ri[975],
                    Accent: u.ri[10],
                  },
                  Border: {
                    Default: u.ri[600],
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: u.Ac[200],
                    Warning: u.B6[300],
                    Accent: u.Ac[400],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: u.vd[500],
                    Alert: u.B6[500],
                    Highlight: i[1].Fill,
                    Warning: u.B6[300],
                    Accent: u.Ac[400],
                  },
                },
              };
            })(),
          },
        },
        { plain: b, inverted: h } = g,
        p = `all ${u.Uw}`,
        m = '0 0 auto',
        v = 'auto 0 0',
        x = (e) => {
          let i = { Neutral: u.ri, Primary: u.w8, Secondary: u.vd, Tertiary: u.B6 },
            r = {
              1: e.Layer[1],
              2: e.Layer[2],
              3: e.Layer[3],
              App: { Background: '#f0edeb' },
              Highlight: { Fill: e.Layer.Highlight, Outline: e.Layer.Highlight },
              TypeAction: e.Layer.TypeAction,
              Feedback: e.Layer.Feedback,
            },
            l = {
              TextColors: {
                Primary: e.Text.Primary,
                Secondary: e.Text.Secondary,
                Tertiary: e.Text.Tertiary,
                Highlight: e.Text.Highlight,
                Disabled: e.Text.Disabled,
                Feedback: e.Text.Feedback,
              },
              FontFamily: {
                Heading: 'Mona Sans',
                Body: 'Mona Sans',
                Mono: 'Mona Sans',
                Button: 'Mona Sans',
              },
            },
            t = {
              Focus_Outline: i.Primary[500],
              Transition: p,
              Primary: {
                Default: { Label: u.ri[50], Fill: u.w8[500] },
                Hover: { Label: u.ri[50], Fill: u.ri[900] },
                Disabled: { Label: l.TextColors.Disabled, Fill: u.w8[500] },
              },
              Secondary: {
                Default: { Label: u.ri[50], Fill: u.ri[900] },
                Hover: { Label: u.ri[50], Fill: u.w8[500] },
                Disabled: { Label: l.TextColors.Disabled, Fill: i.Neutral[900] },
              },
              Outlined: {
                Default: { Label: u.ri[950], Outline: u.ri[300] },
                Hover: { Label: u.w8[500], Outline: u.w8[500] },
                Disabled: { Label: l.TextColors.Disabled, Outline: l.TextColors.Disabled },
              },
              Ghost: {
                Default: { Label: l.TextColors.Highlight },
                Hover: { Label: u.ri[975] },
                Disabled: { Label: l.TextColors.Disabled, Fill: u.ri[900] },
              },
              Success: {
                Default: { Label: u.ri[900], Fill: u.vd[400] },
                Hover: { Label: u.vd[300], Fill: u.ri[900] },
                Disabled: { Label: u.ri[950], Fill: u.vd[200] },
              },
              Error: {
                Default: { Label: u.ri[50], Fill: u.B6[500] },
                Hover: { Label: u.B6[400], Fill: u.ri[900] },
                Disabled: { Label: u.ri[50], Fill: u.B6[500] },
              },
              Navigation: {
                Default: { Label: l.TextColors.Secondary },
                Hover: { Label: l.TextColors.Primary, Fill: r[1].Fill },
                Current: { Label: u.ri[50], Fill: r.Highlight.Fill },
              },
            },
            o = {
              Transition: p,
              UnderLined: {
                Inset: v,
                Default: { Label: l.TextColors.Secondary },
                Hover: { Label: l.TextColors.Highlight, Outline: r.Highlight.Outline },
                Current: { Label: l.TextColors.Primary, Outline: i.Primary[500] },
              },
              Contained: {
                Default: { Label: l.TextColors.Secondary, Fill: i.Neutral[300] },
                Hover: { Label: i.Neutral[50], Fill: i.Neutral[900] },
                Current: { Label: l.TextColors.Primary, Fill: r[1].Fill, Outline: i.Primary[500] },
              },
              OverLined: {
                Inset: m,
                Default: { Label: l.TextColors.Secondary },
                Hover: {
                  Label: l.TextColors.Primary,
                  Fill: i.Neutral[200],
                  Outline: i.Neutral[500],
                },
                Current: { Label: l.TextColors.Primary, Outline: i.Primary[500] },
              },
            },
            a = {
              BorderRadius: { Clickable: 0, NonClickable: '100px' },
              Default: { Label: l.TextColors.Secondary, Fill: r[2].Fill, Stroke: r[2].Outline },
              Hover: { Label: i.Neutral[50], Fill: i.Neutral[900] },
              Current: {
                Label: l.TextColors.Highlight,
                Fill: r[2].Fill,
                Outline: r.Highlight.Outline,
              },
            },
            n = {
              Label: {
                Default: e.Badges.Label.Default,
                Active: e.Badges.Label.Active,
                Alert: e.Badges.Label.Alert,
                Highlight: e.Badges.Label.Highlight,
                Warning: e.Badges.Label.Warning,
                Accent: e.Badges.Label.Accent,
              },
              Border: {
                Default: e.Badges.Border.Default,
                Active: e.Badges.Border.Active,
                Alert: e.Badges.Border.Alert,
                Highlight: e.Badges.Border.Highlight,
                Warning: e.Badges.Border.Warning,
                Accent: e.Badges.Border.Accent,
              },
              Fill: {
                Default: e.Badges.Fill.Default,
                Active: e.Badges.Fill.Active,
                Alert: e.Badges.Fill.Alert,
                Highlight: e.Badges.Fill.Highlight,
                Warning: e.Badges.Fill.Warning,
                Accent: e.Badges.Fill.Accent,
              },
            },
            d = {
              Default: { Label: l.TextColors.Primary },
              Hover: { Label: l.TextColors.Highlight, Fill: r[3].Fill },
              Current: { Label: u.ri[50], Fill: i.Neutral[900] },
            },
            s = {
              Header: { Fill: e.Tables.Header.Fill },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            c = {
              Base: {
                Default: {
                  Fill: u.ri[100],
                  Border: {
                    Default: u.ri[400],
                    Active: e.Text.Highlight,
                    Filled: u.ri[850],
                    Error: u.B6[500],
                  },
                },
                Nested: {
                  Nested: u.ri[10],
                  Fill: u.ri[100],
                  Border: {
                    Default: u.ri[400],
                    Active: e.Text.Highlight,
                    Filled: u.ri[850],
                    Error: u.B6[500],
                  },
                },
              },
              Large: { Default: { Fill: u.ri[150] } },
              SliderThumbImage: '/mui/slider-thumb-white.svg',
            },
            g = {
              Default: { Fill: r[1].Fill, Outline: i.Neutral[400], Label: i.Primary[500] },
              Checked: { Fill: i.Primary[500], Outline: i.Neutral[400], Label: u.ri[50] },
            };
          return {
            theme: 'light',
            Color: i,
            Text: l,
            Button: t,
            Layer: r,
            Tabs: o,
            Chips: a,
            Badges: n,
            Toggles: d,
            Table: s,
            Inputs: c,
            Switch: g,
          };
        },
        f = (e) => {
          let i = u.ri,
            r = {
              Neutral: {
                25: i[975],
                50: i[950],
                75: i[900],
                100: i[850],
                150: i[800],
                200: i[750],
                300: i[700],
                400: i[600],
                500: i[500],
                600: i[400],
                700: i[300],
                750: i[200],
                800: i[150],
                850: i[100],
                900: i[75],
                950: i[50],
                975: i[25],
              },
              Primary: {
                50: u.w8[950],
                100: u.w8[900],
                200: u.w8[800],
                300: u.w8[700],
                400: u.w8[600],
                500: u.w8[500],
                600: u.w8[400],
                700: u.w8[300],
                800: u.w8[200],
                900: u.w8[100],
                950: u.w8[50],
              },
              Secondary: {
                100: u.vd[800],
                200: u.vd[700],
                300: u.vd[600],
                400: u.vd[500],
                500: u.vd[400],
                600: u.vd[300],
                700: u.vd[200],
                800: u.vd[100],
              },
              Tertiary: { 200: u.B6[500], 300: u.B6[400], 400: u.B6[300], 600: u.B6[200] },
            },
            l = {
              1: { Fill: e.Layer[1].Fill, Outline: e.Layer[1].Outline },
              2: { Fill: e.Layer[2].Fill, Outline: e.Layer[2].Outline },
              3: { Fill: e.Layer[3].Fill, Outline: e.Layer[3].Outline },
              App: { Background: '#12110f' },
              Highlight: { Fill: e.Layer.Highlight, Outline: e.Layer.Highlight },
              TypeAction: {
                Hover: e.Layer.TypeAction.Hover,
                Selected: e.Layer.TypeAction.Selected,
              },
              Feedback: e.Layer.Feedback,
            },
            t = {
              TextColors: {
                Primary: e.Text.Primary,
                Secondary: e.Text.Secondary,
                Tertiary: e.Text.Tertiary,
                Highlight: e.Text.Highlight,
                Disabled: e.Text.Disabled,
                Feedback: e.Text.Feedback,
              },
              FontFamily: {
                Heading: 'Mona Sans',
                Body: 'Mona Sans',
                Mono: 'Mona Sans',
                Button: 'Mona Sans',
              },
            },
            o = {
              Focus_Outline: r.Primary[500],
              Transition: p,
              Primary: {
                Default: { Label: i[50], Fill: u.w8[500] },
                Hover: { Label: i[900], Fill: i[50] },
                Disabled: { Label: t.TextColors.Disabled, Fill: u.w8[500] },
              },
              Secondary: {
                Default: { Label: i[900], Fill: i[50] },
                Hover: { Label: i[900], Fill: u.w8[500] },
                Disabled: { Label: t.TextColors.Disabled, Fill: r.Neutral[50] },
              },
              Outlined: {
                Default: { Label: i[50], Outline: i[700] },
                Hover: { Label: u.w8[500], Outline: u.w8[500] },
                Disabled: { Label: t.TextColors.Disabled, Outline: t.TextColors.Disabled },
              },
              Ghost: {
                Default: { Label: r.Primary[700] },
                Hover: { Label: i[50] },
                Disabled: { Label: t.TextColors.Disabled, Fill: i[850] },
              },
              Success: {
                Default: { Label: i[900], Fill: u.vd[300] },
                Hover: { Label: u.vd[500], Fill: i[50] },
                Disabled: { Label: i[950], Fill: u.vd[200] },
              },
              Error: {
                Default: { Label: i[50], Fill: u.B6[500] },
                Hover: { Label: u.B6[400], Fill: i[900] },
                Disabled: { Label: i[50], Fill: u.B6[500] },
              },
              Navigation: {
                Default: { Label: t.TextColors.Secondary },
                Hover: { Label: t.TextColors.Primary, Fill: l[1].Fill },
                Current: { Label: i[50], Fill: l.Highlight.Fill },
              },
            },
            a = {
              Transition: p,
              UnderLined: {
                Inset: v,
                Default: { Label: t.TextColors.Secondary },
                Hover: { Label: t.TextColors.Highlight, Outline: l.Highlight.Outline },
                Current: { Label: t.TextColors.Primary, Outline: r.Primary[500] },
              },
              Contained: {
                Default: { Label: t.TextColors.Secondary, Fill: r.Neutral[200] },
                Hover: { Label: r.Neutral[50], Fill: r.Neutral[900] },
                Current: { Label: t.TextColors.Primary, Fill: l[1].Fill, Outline: r.Primary[500] },
              },
              OverLined: {
                Inset: m,
                Default: { Label: t.TextColors.Secondary },
                Hover: {
                  Label: t.TextColors.Primary,
                  Fill: r.Neutral[200],
                  Outline: r.Neutral[500],
                },
                Current: { Label: t.TextColors.Primary, Outline: r.Primary[500] },
              },
            },
            n = {
              BorderRadius: { Clickable: 0, NonClickable: '100px' },
              Default: { Label: t.TextColors.Secondary, Fill: l[2].Fill, Stroke: l[2].Outline },
              Hover: { Label: r.Neutral[50], Fill: r.Neutral[900] },
              Current: { Label: r.Neutral[950], Fill: l[2].Fill, Outline: l.Highlight.Outline },
            },
            d = {
              Label: {
                Default: e.Badges.Label.Default,
                Active: e.Badges.Label.Active,
                Alert: e.Badges.Label.Alert,
                Highlight: e.Badges.Label.Highlight,
                Warning: e.Badges.Label.Warning,
                Accent: e.Badges.Label.Accent,
              },
              Border: {
                Default: e.Badges.Border.Default,
                Active: e.Badges.Border.Active,
                Alert: e.Badges.Border.Alert,
                Highlight: e.Badges.Border.Highlight,
                Warning: e.Badges.Border.Warning,
                Accent: e.Badges.Border.Accent,
              },
              Fill: {
                Default: e.Badges.Fill.Default,
                Active: e.Badges.Fill.Active,
                Alert: e.Badges.Fill.Alert,
                Highlight: e.Badges.Fill.Highlight,
                Warning: e.Badges.Fill.Warning,
                Accent: e.Badges.Fill.Accent,
              },
            },
            s = {
              Default: { Label: t.TextColors.Primary },
              Hover: { Label: t.TextColors.Highlight, Fill: l[3].Fill },
              Current: { Label: r.Neutral[50], Fill: r.Neutral[950] },
            },
            c = {
              Header: { Fill: e.Tables.Header.Fill },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            g = {
              Base: {
                Default: {
                  Fill: i[850],
                  Border: {
                    Default: i[600],
                    Active: e.Text.Highlight,
                    Filled: i[75],
                    Error: u.B6[500],
                  },
                },
                Nested: {
                  Nested: i[850],
                  Fill: i[850],
                  Border: {
                    Default: i[600],
                    Active: e.Text.Highlight,
                    Filled: i[75],
                    Error: u.B6[500],
                  },
                },
              },
              Large: { Default: { Fill: i[975] } },
              SliderThumbImage: '/mui/slider-thumb-black.svg',
            },
            b = {
              Default: { Fill: l[1].Fill, Outline: r.Neutral[400], Label: r.Primary[500] },
              Checked: { Fill: r.Primary[500], Outline: r.Neutral[400], Label: i[50] },
            };
          return {
            theme: 'dark',
            Color: r,
            Text: t,
            Button: o,
            Layer: l,
            Tabs: a,
            Chips: n,
            Badges: d,
            Toggles: s,
            Table: c,
            Inputs: g,
            Switch: b,
          };
        },
        y = (e) => {
          let i = { Neutral: u.ri, Primary: u.Ac, Secondary: u.vd, Tertiary: u.B6 },
            r = {
              1: e.Layer[1],
              2: e.Layer[2],
              3: e.Layer[3],
              App: { Background: '#bdbbec' },
              Highlight: { Fill: e.Layer.Highlight, Outline: e.Layer.Highlight },
              TypeAction: e.Layer.TypeAction,
              Feedback: e.Layer.Feedback,
            },
            l = {
              TextColors: {
                Primary: e.Text.Primary,
                Secondary: e.Text.Secondary,
                Tertiary: e.Text.Tertiary,
                Highlight: e.Text.Highlight,
                Disabled: e.Text.Disabled,
                Feedback: e.Text.Feedback,
              },
              FontFamily: {
                Heading: 'Minecraft',
                Body: 'Hubot Sans',
                Mono: 'Hubot Sans',
                Button: 'Minecraft',
              },
            },
            t = {
              Focus_Outline: i.Primary[600],
              Transition: p,
              Primary: {
                Default: { Label: u.ri[50], Fill: u.Ac[500] },
                Hover: { Label: u.ri[50], Fill: u.ri[900] },
                Disabled: { Label: l.TextColors.Disabled, Fill: u.Ac[500] },
              },
              Secondary: {
                Default: { Label: u.ri[50], Fill: u.Ac[900] },
                Hover: { Label: u.ri[50], Fill: u.Ac[500] },
                Disabled: { Label: l.TextColors.Disabled, Fill: i.Primary[950] },
              },
              Outlined: {
                Default: { Label: u.ri[950], Outline: u.ri[300] },
                Hover: { Label: u.Ac[500], Outline: u.Ac[500] },
                Disabled: { Label: l.TextColors.Disabled, Outline: l.TextColors.Disabled },
              },
              Ghost: {
                Default: { Label: l.TextColors.Highlight },
                Hover: { Label: u.ri[800] },
                Disabled: { Label: l.TextColors.Disabled, Fill: u.Ac[950] },
              },
              Success: {
                Default: { Label: u.ri[900], Fill: u.vd[400] },
                Hover: { Label: u.vd[500], Fill: u.ri[900] },
                Disabled: { Label: u.ri[950], Fill: u.vd[200] },
              },
              Error: {
                Default: { Label: u.ri[50], Fill: u.B6[500] },
                Hover: { Label: u.B6[400], Fill: u.ri[900] },
                Disabled: { Label: u.ri[50], Fill: u.B6[500] },
              },
              Navigation: {
                Default: { Label: l.TextColors.Secondary },
                Hover: { Label: l.TextColors.Primary, Fill: r[1].Fill },
                Current: { Label: u.ri[50], Fill: r.Highlight.Fill },
              },
            },
            o = {
              Transition: p,
              UnderLined: {
                Inset: v,
                Default: { Label: l.TextColors.Secondary },
                Hover: { Label: l.TextColors.Highlight, Outline: r.Highlight.Outline },
                Current: { Label: l.TextColors.Primary, Outline: i.Primary[500] },
              },
              Contained: {
                Default: { Label: l.TextColors.Secondary, Fill: i.Primary[200] },
                Hover: { Label: i.Neutral[50], Fill: i.Primary[950] },
                Current: { Label: l.TextColors.Primary, Fill: r[1].Fill, Outline: i.Primary[500] },
              },
              OverLined: {
                Inset: m,
                Default: { Label: l.TextColors.Secondary },
                Hover: {
                  Label: l.TextColors.Primary,
                  Fill: i.Neutral[200],
                  Outline: i.Neutral[500],
                },
                Current: { Label: l.TextColors.Primary, Outline: i.Primary[500] },
              },
            },
            a = {
              BorderRadius: { Clickable: 0, NonClickable: 0 },
              Default: { Label: l.TextColors.Secondary, Fill: r[1].Fill, Stroke: r[2].Outline },
              Hover: { Label: i.Neutral[50], Fill: i.Primary[950] },
              Current: {
                Label: l.TextColors.Primary,
                Fill: r[2].Fill,
                Outline: r.Highlight.Outline,
              },
            },
            n = {
              Label: {
                Default: e.Badges.Label.Default,
                Active: e.Badges.Label.Active,
                Alert: e.Badges.Label.Alert,
                Highlight: e.Badges.Label.Highlight,
                Warning: e.Badges.Label.Warning,
                Accent: e.Badges.Label.Accent,
              },
              Border: {
                Default: e.Badges.Border.Default,
                Active: e.Badges.Border.Active,
                Alert: e.Badges.Border.Alert,
                Highlight: e.Badges.Border.Highlight,
                Warning: e.Badges.Border.Warning,
                Accent: e.Badges.Border.Accent,
              },
              Fill: {
                Default: e.Badges.Fill.Default,
                Active: e.Badges.Fill.Active,
                Alert: e.Badges.Fill.Alert,
                Highlight: e.Badges.Fill.Highlight,
                Warning: e.Badges.Fill.Warning,
                Accent: e.Badges.Fill.Accent,
              },
            },
            d = {
              Default: { Label: l.TextColors.Primary },
              Hover: { Label: l.TextColors.Highlight, Fill: r[3].Fill },
              Current: { Label: u.ri[50], Fill: i.Primary[800] },
            },
            s = {
              Header: { Fill: e.Tables.Header.Fill },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            c = {
              Base: {
                Default: {
                  Fill: u.Ac[50],
                  Border: {
                    Default: u.Ac[200],
                    Active: e.Text.Highlight,
                    Filled: u.Ac[400],
                    Error: u.B6[500],
                  },
                },
                Nested: {
                  Nested: u.Ac[50],
                  Fill: u.Ac[50],
                  Border: {
                    Default: u.Ac[200],
                    Active: e.Text.Highlight,
                    Filled: u.Ac[400],
                    Error: u.B6[500],
                  },
                },
              },
              Large: { Default: { Fill: u.Ac[50] } },
              SliderThumbImage: '/mui/slider-thumb-white.svg',
            },
            g = {
              Default: { Fill: r[1].Fill, Outline: i.Neutral[400], Label: i.Primary[500] },
              Checked: { Fill: i.Primary[500], Outline: i.Neutral[400], Label: u.ri[50] },
            };
          return {
            theme: 'chad',
            Color: i,
            Text: l,
            Button: t,
            Layer: r,
            Tabs: o,
            Chips: a,
            Badges: n,
            Toggles: d,
            Table: s,
            Inputs: c,
            Switch: g,
          };
        },
        B = {
          light: ({ inverted: e }) => x(g[e ? 'inverted' : 'plain'].Light),
          dark: ({ inverted: e }) => f(g[e ? 'inverted' : 'plain'].Dark),
          chad: ({ inverted: e }) => y(g[e ? 'inverted' : 'plain'].Chad),
        },
        F = (e, { Layer: i, Color: r, Text: { TextColors: l } }) => ({
          mode: e,
          primary: { main: r.Primary[500] },
          secondary: { main: r.Secondary[500] },
          error: { main: i.Feedback.Error, contrastText: l.Feedback.Error },
          info: { main: i.Feedback.Info, contrastText: l.Primary },
          warning: { main: i.Feedback.Warning, contrastText: l.Feedback.Warning },
          success: { main: i.Feedback.Success, contrastText: l.Feedback.Success },
          text: {
            primary: l.Primary,
            secondary: l.Secondary,
            tertiary: l.Tertiary,
            disabled: l.Disabled,
            highlight: l.Highlight,
          },
          action: { hover: i.TypeAction.Hover, selected: i.TypeAction.Selected },
          background: { default: i.App.Background, paper: i[2].Fill },
          divider: i[1].Outline,
        });
      var A = r(84032),
        C = r(41265);
      let S = [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'button',
          'body1',
          'body2',
          'caption',
          'overline',
          'subtitle1',
          'subtitle2',
        ],
        { LineHeight: k, FontWeight: H, FontSize: L } = A.B,
        w = (e, i, r) => ({
          [s.b.breakpoints.up(r)]: { fontSize: L[e]?.[r], lineHeight: k[i]?.[r] },
        }),
        T = ({
          fontFamily: e,
          fontSize: i,
          fontWeight: r,
          lineHeight: l = i,
          letterSpacing: t = '0%',
          textCase: o,
        }) => ({
          fontFamily: e,
          fontWeight: H[r ?? 'Medium'],
          letterSpacing: t,
          ...('0%' !== t && { marginRight: `calc(${t} * -1)` }),
          textTransform: o,
          transition: `color ${u.Uw}, border ${u.Uw}`,
          ...(!(i in L) && { fontSize: i }),
          ...(!(l in k) && { lineHeight: l }),
          ...w(i, l, 'mobile'),
          ...w(i, l, 'tablet'),
          ...w(i, l, 'desktop'),
        }),
        M = {
          headingXxl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xxl',
            letterSpacing: '-2.56px',
          },
          headingMBold: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xl',
            lineHeight: u.XQ[450],
            letterSpacing: '-1.28px',
            textCase: 'uppercase',
          },
          headingMLight: {
            fontFamily: 'Heading',
            fontWeight: 'Normal',
            fontSize: 'xl',
            lineHeight: u.XQ[450],
            letterSpacing: '-1.28px',
            textCase: 'uppercase',
          },
          headingSBold: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'lg',
            letterSpacing: '-0.48px',
            textCase: 'uppercase',
          },
          headingXsBold: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'sm',
            textCase: 'uppercase',
          },
          headingXsMedium: { fontFamily: 'Heading', fontSize: 'sm', textCase: 'capitalize' },
          bodyMRegular: { fontFamily: 'Body', fontSize: 'md' },
          bodyMBold: { fontFamily: 'Body', fontWeight: 'Bold', fontSize: 'md' },
          bodySRegular: { fontFamily: 'Body', fontSize: 'sm' },
          bodySBold: { fontFamily: 'Body', fontWeight: 'Bold', fontSize: 'sm' },
          bodyXsRegular: { fontFamily: 'Body', fontSize: 'xs' },
          bodyXsBold: { fontFamily: 'Body', fontWeight: 'Bold', fontSize: 'xs' },
          buttonXs: { fontFamily: 'Button', fontWeight: 'Bold', fontSize: 'sm' },
          buttonS: {
            fontFamily: 'Button',
            fontWeight: 'Bold',
            fontSize: 'sm',
            lineHeight: 'md',
            textCase: 'uppercase',
          },
          buttonM: {
            fontFamily: 'Button',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'xl',
            textCase: 'uppercase',
          },
          tableHeaderM: { fontFamily: 'Body', fontSize: 'md', lineHeight: 'sm' },
          tableHeaderS: { fontFamily: 'Body', fontSize: 'sm', lineHeight: 'xs' },
          tableCellL: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: u.XQ[250],
            lineHeight: u.XQ[250],
          },
          tableCellMRegular: { fontFamily: 'Mono', fontSize: 'md', lineHeight: 'sm' },
          tableCellMBold: {
            fontFamily: 'Mono',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          tableCellSRegular: { fontFamily: 'Mono', fontSize: 'sm', lineHeight: 'xs' },
          tableCellSBold: {
            fontFamily: 'Mono',
            fontWeight: 'Bold',
            fontSize: 'sm',
            lineHeight: 'xs',
          },
          highlightXsNotional: { fontFamily: 'Mono', fontSize: 'xs' },
          highlightXs: { fontFamily: 'Heading', fontWeight: 'Bold', fontSize: 'xs' },
          highlightS: { fontFamily: 'Heading', fontWeight: 'Bold', fontSize: 'sm' },
          highlightM: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          highlightL: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'lg',
            lineHeight: 'md',
          },
          highlightXl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xl',
            lineHeight: u.XQ[450],
            letterSpacing: '-1.28px',
          },
          highlightXxl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xxl',
            letterSpacing: '-2.56px',
          },
        },
        D = ({ Text: e }) => ({
          fontFamily: C.vX[e.FontFamily.Body],
          fontWeightBold: H.Bold,
          fontWeightMedium: H.Medium,
          fontWeightRegular: H.Normal,
          fontWeightLight: H.Light,
          ...S.reduce((e, i) => ({ ...e, [i]: void 0 }), {}),
          ...Object.fromEntries(
            Object.entries(M).map(([i, r]) => {
              let { fontFamily: l, ...t } = T(r);
              return [i, { ...t, fontFamily: C.vX[e.FontFamily[l]] }];
            })
          ),
        }),
        z = (e, i) => (i.inverted ? ('dark' == e ? 'light' : 'dark') : 'chad' == e ? 'light' : e),
        O = (e, i = {}) => {
          let r = B[e](i),
            l = D(r);
          return (0, d.A)({
            ...s.b,
            key: e,
            design: { ...r, options: i },
            palette: F(z(e, i), r),
            typography: l,
            components: (0, c.L1)(r, l),
            shape: { borderRadius: 0 },
            cssVariables: !0,
            shadows: Array(25).fill('none'),
          });
        },
        W = { light: (e) => O('light', e), dark: (e) => O('dark', e), chad: (e) => O('chad', e) },
        I = o()((e, i) => W[e]({ inverted: i })),
        P = ({ theme: e, children: i }) => (0, l.jsx)(n.A, { theme: I(e), children: i }),
        N = ({ children: e, inverted: i = !0 }) => {
          let { theme: r } = (0, a.A)().design,
            t = I(r, i);
          return (0, l.jsx)(n.A, { theme: t, children: e });
        };
    },
    75778: (e, i, r) => {
      r.d(i, { ku: () => d, ps: () => n });
      var l = r(48341),
        t = r(77878);
      let o = (0, l.AH)([
          'color:var(--button--color);background-color:var(--button--background-color);border:1px solid var(--nav_button--border-color);box-shadow:3px 3px 0 var(--button--shadow-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover:not(:disabled):not(.loading){background-color:var(--button_filled--hover--background-color);}&:active:not(:disabled){box-shadow:none;transform:translate3d(3px,3px,3px);}&.loading,&:disabled{color:var(--button--disabled--color);border-color:var(--button--disabled--border-color);background-color:var(--button--disabled--background-color);box-shadow:none;cursor:initial;}',
        ]),
        a = (0, l.AH)([
          'border:1px solid var(--nav_button--border-color);box-shadow:3px 3px 0 var(--box--primary--shadow-color);background:var(--layout--home--background-color);color:var(--page--text-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&.active:not(:disabled){color:var(--button--color);background-color:var(--button--background-color);border:1px solid var(--button--border-color);box-shadow:3px 3px 0 var(--button--shadow-color);}&:hover:not(:disabled){color:var(--button--color);border:1px solid var(--button--border-color);background-color:var(--button_filled--hover--background-color);}&.loading,&:disabled{color:var(--button--disabled--color);}',
        ]),
        n = (0, l.AH)([
          'color:var(--button_outlined--color);background-color:transparent;border:1px solid var(--button_outlined--border-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:disabled{opacity:0.5;cursor:initial;transition:none;}&:hover:not(:disabled){color:var(--button_outlined--hover--color);border-color:var(--button_outlined--hover--color);background-color:var(--button_outlined--hover--background-color);}',
        ]),
        d = (0, l.AH)(
          [
            '',
            ';padding:var(--spacing-1) var(--spacing-2);font-size:inherit;font-weight:var(--button--font-weight);font-family:var(--button--font);text-transform:var(--button--text-transform);line-height:1.2;&.loading{position:relative;}&:not(:disabled){cursor:pointer;}',
            ' ',
            ' ',
            ' ',
            '',
          ],
          t.N,
          ({ nowrap: e }) => {
            if (e) return 'white-space: nowrap;';
          },
          ({ size: e }) =>
            'small' === e
              ? `
        min-height: var(--height-small);
        font-size: var(--font-size-2);
        text-transform: uppercase;
      `
              : 'medium' === e
                ? `
        min-height: var(--height-medium);
      `
                : 'large' === e
                  ? `
        min-height: var(--height-large);
        font-size: var(--box_action--button--font-size);
      `
                  : 'x-large' === e
                    ? `
        min-height: var(--height-x-large);
        font-size: var(--box_action--button--font-size);
      `
                    : void 0,
          ({ fillWidth: e }) => {
            if (e) return 'width: 100%;';
          },
          ({ variant: e, fillWidth: i }) => {
            if ('filled' === e)
              return `
        ${o}
      `;
            if ('icon-filled' === e)
              return `
        align-items: center;
        display: ${i ? 'flex' : 'inline-flex'};
        justify-content: center;

        ${o}
      `;
            if ('outlined' === e) return `${n}`;
            if ('icon-outlined' === e)
              return `
        ${n}

        align-items: center;
        display: ${i ? 'flex' : 'inline-flex'};
      `;
            if ('text' === e)
              return `
        color: var(--button_text--color);
        background-color: transparent;
        border: none;
      
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
        &:hover:not(:disabled),
        &:active:not(:disabled) {
          color: var(--button_text--hover--color);
          background-color: var(--button_outlined--hover--background-color);
        }

        &.loading,
        &:disabled {
          color: var(--button--disabled--color);
        }
      `;
            else if ('select' === e)
              return `
        border: 1px solid var(--button_outlined--border-color);
        box-shadow: 3px 3px 0 var(--box--primary--shadow-color);
        background: var(--layout--home--background-color);
        color: var(--page--text-color);

        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &.active:not(:disabled) {
          color: var(--button--color);
          background-color: var(--button--background-color);
          border: 1px solid var(--nav_button--border-color);
          box-shadow: 3px 3px 0 var(--button--shadow-color);
        }
        &:hover:not(:disabled) {
          color: var(--button--color); 
          border: 1px solid var(--nav_button--border-color);
          background-color: var(--button_filled--hover--background-color);
        }
        &.loading,
        &:disabled {
          color: var(--button--disabled--color);
        }
      `;
            else if ('select-flat' === e)
              return `
        ${a}
        box-shadow: none;
        &.active:not(:disabled) {
          box-shadow: none;
          border: 1px solid var(--button_outlined--border-color);
        }
      `;
          }
        );
    },
    81473: (e, i, r) => {
      r.d(i, { Mw: () => b, gH: () => g, Yk: () => h, Xq: () => f });
      var l = r(84121),
        t = r(72415);
      let { Spacing: o } = r(84032).B,
        a = 'variant-contained',
        n = 'variant-underlined',
        d = 'variant-overlined',
        s = 'size-small',
        c = 'size-medium',
        u = 'size-large',
        g = { contained: a, underlined: n, overlined: d },
        b = { small: s, medium: c, large: u },
        h = ({ Tabs: { Transition: e } }) => ({
          styleOverrides: {
            root: {
              transition: e,
              textTransform: 'uppercase',
              position: 'relative',
              boxSizing: 'content-box',
              opacity: 1,
              minHeight: '2rem',
              minWidth: 0,
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '2px',
                opacity: 0,
                transition: `opacity ${t.Uw}`,
              },
            },
          },
        }),
        p = ({ Label: e, Fill: i, Outline: r }) => ({
          color: e,
          backgroundColor: i,
          '::after': { backgroundColor: r ?? 'transparant' },
        }),
        m = ({ Current: e, Default: i, Hover: r, Inset: l }) => ({
          ...p(i),
          '&:hover': p(r),
          '&:hover::after': { opacity: 1 },
          '&.Mui-selected': p(e),
          '&.Mui-selected::after': { opacity: 1 },
          '::after': l && { inset: l },
        }),
        v = (e, i, r, t) =>
          (0, l.N)({
            paddingBlockStart: o[e],
            paddingBlockEnd: o[i],
            paddingInlineStart: o[r],
            paddingInlineEnd: o[t],
          }),
        x = {
          [`&.${c} .MuiTab-root`]: v('md', 'xs', 'md', 'md'),
          [`&.${u} .MuiTab-root`]: v('md', 'xs', 'md', 'md'),
        },
        f = ({ Tabs: { UnderLined: e, OverLined: i, Contained: r }, Layer: l }) => ({
          styleOverrides: {
            root: {
              minHeight: 0,
              [`&.${a}`]: {
                '& .MuiTab-root': m(r),
                [`&.${s} .MuiTab-root`]: v('xs', 'xs', 'md', 'md'),
                [`&.${c} .MuiTab-root`]: v('md', 'xs', 'lg', 'lg'),
              },
              [`&.${d}`]: {
                '& .MuiTab-root': m(i),
                [`&.${s} .MuiTab-root`]: v('xs', 'xs', 'md', 'md'),
                [`&.${u} .MuiTab-root:hover`]: { backgroundColor: 'unset' },
                ...x,
              },
              [`&.${n}`]: {
                '& .MuiTab-root': m(e),
                [`&.${s} .MuiTab-root`]: v('xs', 'xs', 'sm', 'sm'),
                ...x,
              },
              [`&.${u} .MuiTab-root::after`]: { height: '0px' },
            },
            indicator: {
              backgroundColor: l.Highlight.Outline,
              [`.${d} &`]: { top: 0 },
              [`.${a} &`]: { top: 0 },
              [`.${u} &`]: { height: '4px' },
            },
          },
        });
    },
    83897: (e, i, r) => {
      r.d(i, { P: () => t });
      var l = r(54568);
      let t = (0, r(69879).A)(
        (0, l.jsxs)('svg', {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, l.jsx)('path', {
              d: 'M7.28203 4.78525C7.26636 4.3779 7.59235 4.03913 8 4.03913C8.40764 4.03913 8.73363 4.3779 8.71797 4.78525L8.55383 9.05287C8.54238 9.35046 8.29781 9.58581 8 9.58581C7.70218 9.58581 7.45761 9.35046 7.44616 9.05287L7.28203 4.78525Z',
              fill: 'currentColor',
            }),
            (0, l.jsx)('path', {
              d: 'M8.79988 11.1745C8.79988 11.6163 8.4417 11.9744 7.99988 11.9744C7.55805 11.9744 7.19988 11.6163 7.19988 11.1745C7.19988 10.7326 7.55805 10.3745 7.99988 10.3745C8.4417 10.3745 8.79988 10.7326 8.79988 11.1745Z',
              fill: 'currentColor',
            }),
            (0, l.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M9.00789 0.649407C8.55285 -0.114093 7.44714 -0.114093 6.9921 0.649408L0.17192 12.0927C-0.294216 12.8748 0.269334 13.8667 1.17982 13.8667H14.8202C15.7307 13.8667 16.2942 12.8748 15.8281 12.0927L9.00789 0.649407ZM7.90837 1.19551C7.94974 1.1261 8.05025 1.1261 8.09162 1.19551L14.9118 12.6388C14.9542 12.7099 14.903 12.8 14.8202 12.8H1.17982C1.09705 12.8 1.04582 12.7099 1.08819 12.6388L7.90837 1.19551Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'ExclamationTriangle'
      );
    },
    84121: (e, i, r) => {
      r.d(i, { b: () => o, N: () => a });
      var l = r(77310),
        t = r(72415);
      let o = (0, l.A)({
          breakpoints: {
            keys: ['mobile', 'tablet', 'desktop'],
            values: { mobile: 0, tablet: 640, desktop: 1200 },
            unit: 'px',
          },
          spacing: Object.values(t.Kz),
          direction: 'ltr',
        }),
        a = (e) =>
          Object.fromEntries(
            o.breakpoints.keys.map((i) => {
              let r = o.breakpoints.up(i);
              return [
                r,
                {
                  ...(e[r] ?? {}),
                  ...Object.fromEntries(
                    Object.entries(e).map(([e, r]) => [
                      e,
                      'string' == typeof r || 'number' == typeof r || null == r ? r : r[i],
                    ])
                  ),
                },
              ];
            })
          );
    },
    99599: (e, i, r) => {
      r.d(i, { A: () => t.A, V: () => l.A });
      var l = r(71741),
        t = r(27280);
    },
  },
]);
