(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9215],
  {
    1334: (e, t, s) => {
      'use strict';
      s.d(t, { w: () => el });
      var r = s(54568),
        i = s(44876),
        l = s(13342),
        a = s(32678),
        n = s(4387),
        o = s(64174),
        c = s(42822),
        d = s(84032),
        u = s(17703),
        A = s(56120),
        h = s(33161),
        C = s(94804),
        p = s(50010),
        f = s(12312),
        g = s(40576),
        v = s(33431),
        m = s(87401),
        x = s(36074);
      let w = ({ isBeta: e, setIsBeta: t, open: s, openBetaSnackbar: i, onClose: l }) =>
        (0, r.jsx)(g.A, {
          open: s,
          onClose: l,
          children: (0, r.jsxs)(h.A, {
            sx: {
              width: d.B.ModalWidth.md,
              maxWidth: '100vw',
              display: 'flex',
              flexDirection: 'column',
            },
            children: [
              (0, r.jsx)(f.A, {
                action: (0, r.jsx)(v.A, {
                  onClick: l,
                  size: 'extraSmall',
                  children: (0, r.jsx)(u.A, {}),
                }),
                title: (0, r.jsx)(m.A, {
                  variant: 'headingXsBold',
                  color: 'textSecondary',
                  children: e ? (0, x.t)`Disable Beta Features` : (0, x.t)`Enable Beta Features`,
                }),
              }),
              (0, r.jsx)(p.A, {
                sx: {
                  flexGrow: 1,
                  overflowY: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                children: [
                  (0,
                  x.t)`Get early access to upcoming features and UI experiments before they go live.`,
                  (0,
                  x.t)`These are work-in-progress tools meant for testing, feedback, and iteration. You might experience minor bugs or visual inconsistencies — but your funds remain safe, and core functionality is unaffected.`,
                  (0,
                  x.t)`By enabling beta mode, you help shape the future of the Curve interface.`,
                  (0, x.t)`You can turn this off at any time.`,
                ].map((e) => (0, r.jsx)(m.A, { color: 'textSecondary', children: e }, e)),
              }),
              (0, r.jsx)(C.A, {
                children: (0, r.jsx)(A.A, {
                  color: e ? 'secondary' : 'primary',
                  onClick: () => {
                    t(!e), l(), i();
                  },
                  sx: { width: '100%' },
                  children: e ? (0, x.t)`Disable Beta Features` : (0, x.t)`Enable Beta Features`,
                }),
              }),
            ],
          }),
        });
      var b = s(24388),
        y = s(2926),
        L = s(15984),
        j = s(72415);
      let D = ({ isBeta: e, open: t, onClose: s, headerHeight: i }) =>
        (0, r.jsx)(L.A, {
          open: t,
          onClose: s,
          autoHideDuration: j.dw.Snackbar,
          anchorOrigin: { horizontal: 'right', vertical: 'top' },
          sx: { top: i, left: 'unset' },
          children: (0, r.jsxs)(b.A, {
            variant: 'outlined',
            severity: 'success',
            children: [
              (0, r.jsx)(y.A, {
                children: e ? (0, x.t)`Beta Features On` : (0, x.t)`Beta Features Off`,
              }),
              e
                ? (0, x.t)`You have successfully enabled beta features.`
                : (0, x.t)`You have successfully disabled beta features.`,
            ],
          }),
        });
      var B = s(51121),
        M = s(26055);
      let { IconSize: H, Spacing: S, FontWeight: Q } = d.B,
        P = () =>
          (0, r.jsxs)(i.A, {
            sx: { display: 'flex', flexDirection: 'column' },
            children: [
              (0, r.jsxs)(B.A, {
                href: '/',
                sx: { display: 'flex', alignItems: 'center', textDecoration: 'none', gap: S.xs },
                children: [
                  (0, r.jsx)(M.A, {
                    sx: { width: H.xxl, height: H.xxl, margin: S.sm },
                    children: (0, r.jsx)(n.$J, {}),
                  }),
                  (0, r.jsx)(m.A, {
                    color: 'textPrimary',
                    sx: { '&': { fontSize: j.XQ[600] }, fontWeight: Q.Bold },
                    children: 'Curve',
                  }),
                ],
              }),
              (0, r.jsx)(m.A, {
                variant: 'bodySRegular',
                color: 'textSecondary',
                sx: { textWrap: 'balance' },
                children: (0,
                x.t)`Curve DAO is building the software that powers the future world economy: decentralised, trustless, inclusive and autonomous.`,
              }),
            ],
          });
      var N = s(27261),
        k = s.n(N);
      let O = ({ label: e, href: t, icon: s, target: i = '_blank', appName: l, networkName: a }) =>
          (0, r.jsx)(A.A, {
            ...(t.startsWith('http')
              ? { component: B.A, href: t, target: i, rel: 'noreferrer' }
              : { component: k(), href: `/${l}/${a}/${t}` }),
            color: 'ghost',
            variant: 'link',
            startIcon: s,
            children: e,
          }),
        V = ({ title: e, links: t, networkName: s, appName: i }) =>
          (0, r.jsxs)(l.A, {
            container: !0,
            spacing: 1,
            children: [
              (0, r.jsx)(l.A, {
                size: 12,
                children: (0, r.jsx)(m.A, {
                  variant: 'headingXsBold',
                  sx: { display: 'flex', alignItems: 'center', height: d.B.ButtonSize.sm },
                  children: e,
                }),
              }),
              t.map((e) =>
                (0, r.jsx)(
                  l.A,
                  {
                    size: { mobile: 6, tablet: 12 },
                    children: (0, r.jsx)(O, { ...e, appName: i, networkName: s }),
                  },
                  e.href
                )
              ),
            ],
          });
      var E = s(26491),
        Z = s(92041),
        I = s(55298),
        R = s(8268),
        z = s(56465),
        U = s(99730),
        T = s(69879);
      let q = (0, T.A)(
        (0, r.jsxs)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 16 16',
          fill: 'currentColor',
          children: [
            (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3.28893 10.4509C3.13606 10.5391 2.93965 10.4827 2.86681 10.322C2.54605 9.61397 2.36745 8.82784 2.36745 8C2.36745 7.17216 2.54605 6.38603 2.86681 5.67804C2.93965 5.51725 3.13606 5.46086 3.28894 5.54912L3.74154 5.81044C3.83767 5.86593 3.89688 5.9685 3.89688 6.07949V9.92051C3.89688 10.0315 3.83767 10.1341 3.74154 10.1896L3.28893 10.4509ZM4.28523 5.40685C4.18911 5.46235 4.07068 5.46235 3.97456 5.40685L3.52282 5.14604C3.36976 5.05767 3.32051 4.85903 3.42369 4.71553C4.34436 3.43501 5.7892 2.55665 7.44414 2.39454C7.61983 2.37732 7.76699 2.51922 7.76699 2.69576V3.21729C7.76699 3.32828 7.70778 3.43085 7.61165 3.48635L4.28523 5.40685ZM3.52282 10.854C3.36976 10.9423 3.32051 11.141 3.42369 11.2845C4.34436 12.565 5.7892 13.4433 7.44414 13.6055C7.61984 13.6227 7.76699 13.4808 7.76699 13.3042V12.7827C7.76699 12.6717 7.70778 12.5692 7.61165 12.5137L4.28523 10.5931C4.18911 10.5376 4.07068 10.5376 3.97455 10.5931L3.52282 10.854ZM12.7111 10.4509C12.8639 10.5391 13.0603 10.4828 13.1332 10.322C13.454 9.61397 13.6325 8.82784 13.6325 8C13.6325 7.17216 13.454 6.38603 13.1332 5.67804C13.0603 5.51725 12.8639 5.46086 12.7111 5.54912L12.2584 5.81044C12.1623 5.86594 12.1031 5.9685 12.1031 6.0795V9.9205C12.1031 10.0315 12.1623 10.1341 12.2584 10.1896L12.7111 10.4509ZM12.5763 11.2845C12.6795 11.141 12.6302 10.9423 12.4772 10.854L12.0254 10.5931C11.9293 10.5376 11.8109 10.5376 11.7148 10.5931L8.38835 12.5136C8.29222 12.5691 8.23301 12.6717 8.23301 12.7827V13.3042C8.23301 13.4808 8.38017 13.6227 8.55586 13.6055C10.2108 13.4433 11.6556 12.565 12.5763 11.2845ZM8.23301 2.69576C8.23301 2.51923 8.38017 2.37732 8.55586 2.39454C10.2108 2.55665 11.6556 3.43501 12.5763 4.71553C12.6795 4.85903 12.6302 5.05767 12.4772 5.14604L12.0254 5.40686C11.9293 5.46235 11.8109 5.46235 11.7148 5.40686L8.38835 3.48635C8.29222 3.43086 8.23301 3.32829 8.23301 3.2173V2.69576ZM7.84465 5.68192C7.94078 5.62642 8.05921 5.62642 8.15533 5.68192L9.92984 6.70643C10.026 6.76193 10.0852 6.86449 10.0852 6.97549V9.02451C10.0852 9.13551 10.026 9.23807 9.92984 9.29357L8.15533 10.3181C8.05921 10.3736 7.94078 10.3736 7.84465 10.3181L6.07015 9.29357C5.97402 9.23807 5.91481 9.13551 5.91481 9.02451V6.97549C5.91481 6.86449 5.97402 6.76193 6.07015 6.70643L7.84465 5.68192ZM7.76698 4.25929C7.91117 4.17605 8.08881 4.17605 8.233 4.25929L11.123 5.92786C11.2672 6.0111 11.356 6.16495 11.356 6.33144V9.66856C11.356 9.83505 11.2672 9.9889 11.123 10.0721L8.233 11.7407C8.08881 11.824 7.91117 11.824 7.76698 11.7407L4.87695 10.0721C4.73276 9.9889 4.64394 9.83505 4.64394 9.66856V6.33144C4.64394 6.16495 4.73276 6.0111 4.87695 5.92786L7.76698 4.25929ZM8.07766 4.52835C8.0296 4.5006 7.97038 4.5006 7.92232 4.52835L5.03229 6.19691C4.98423 6.22466 4.95462 6.27594 4.95462 6.33144V9.66856C4.95462 9.72406 4.98423 9.77534 5.03229 9.80309L7.92232 11.4716C7.97038 11.4994 8.0296 11.4994 8.07766 11.4716L10.9677 9.80309C11.0158 9.77534 11.0454 9.72406 11.0454 9.66856V6.33144C11.0454 6.27594 11.0158 6.22466 10.9677 6.19691L8.07766 4.52835Z',
            }),
            (0, r.jsx)('path', {
              d: 'M7.41375 8.46416C7.07698 8.46416 6.83962 8.28024 6.83962 7.99814C6.83962 7.71729 7.07698 7.53585 7.41375 7.53585C7.71449 7.53585 7.93569 7.6887 7.96179 7.89251H7.78657C7.76544 7.78812 7.62874 7.67628 7.41375 7.67628C7.17018 7.67628 7.01235 7.81049 7.01235 7.99814C7.01235 8.18703 7.17018 8.32249 7.41375 8.32249C7.62874 8.32249 7.76544 8.2094 7.78657 8.10377H7.96179C7.93694 8.31006 7.71449 8.46416 7.41375 8.46416Z',
            }),
            (0, r.jsx)('path', {
              d: 'M8.12146 8.43931V7.55822H8.28799V7.92855H8.99385V7.55822H9.16037V8.43931H8.99385V8.06898H8.28799V8.43931H8.12146Z',
            }),
          ],
        }),
        'CrvHub'
      );
      var K = s(14766);
      let W = (0, T.A)(
          (0, r.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, r.jsx)('path', {
              d: 'M7.33484 11.3577C7.54313 11.3577 7.73059 11.5243 7.73059 11.7534C7.73059 11.9617 7.56396 12.1492 7.33484 12.1492C7.12655 12.1492 6.93909 11.9825 6.93909 11.7534C6.93909 11.5243 7.12655 11.3577 7.33484 11.3577ZM13.4586 8.9415C13.2503 8.9415 13.0628 8.77487 13.0628 8.54575C13.0628 8.33746 13.2295 8.15 13.4586 8.15C13.6669 8.15 13.8543 8.31663 13.8543 8.54575C13.8543 8.75404 13.6669 8.9415 13.4586 8.9415ZM13.4586 7.33767C12.7921 7.33767 12.2505 7.87922 12.2505 8.54575C12.2505 8.67073 12.2713 8.7957 12.313 8.92067L8.33464 11.0452C8.10552 10.712 7.73059 10.5245 7.33484 10.5245C6.8766 10.5245 6.46002 10.7953 6.25173 11.191L2.66913 9.31643C2.29421 9.10813 2.0026 8.50409 2.04426 7.92088C2.06509 7.62927 2.16924 7.40015 2.31504 7.31684C2.41918 7.25435 2.52333 7.27518 2.66913 7.33767L2.68996 7.35849C3.6481 7.85839 6.75163 9.48306 6.8766 9.54555C7.08489 9.62886 7.18904 9.67052 7.54313 9.50389L13.9585 6.17124C14.0626 6.12958 14.1668 6.04626 14.1668 5.90046C14.1668 5.713 13.9793 5.62968 13.9793 5.62968C13.6044 5.46305 13.042 5.19227 12.5004 4.94232C11.334 4.40077 10.001 3.7759 9.41775 3.46346C8.91785 3.19268 8.50127 3.4218 8.43878 3.46346L8.29298 3.52595C5.64769 4.85901 2.14841 6.58782 1.94012 6.71279C1.58602 6.92108 1.3569 7.35849 1.33607 7.90005C1.29442 8.75404 1.73183 9.64969 2.3567 9.96213L6.14759 11.9201C6.2309 12.5033 6.75163 12.9615 7.33484 12.9615C8.00137 12.9615 8.5221 12.4408 8.54293 11.7743L12.7087 9.52472C12.917 9.69135 13.1878 9.77466 13.4586 9.77466C14.1251 9.77466 14.6667 9.23311 14.6667 8.56658C14.6667 7.87922 14.1251 7.33767 13.4586 7.33767Z',
            }),
          }),
          'Docs'
        ),
        G = (0, T.A)(
          (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: [
              (0, r.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M15.9995 7.91027C15.9514 3.53333 12.3883 0 8 0C3.58172 0 0 3.58172 0 8C0 9.48951 0.407072 10.8839 1.11604 12.0781C1.23377 12.2764 1.35983 12.4692 1.49373 12.656L15.9995 7.91027ZM1.76671 11.8652L15.3118 7.43382C15.0228 3.64837 11.8596 0.666667 8 0.666667C3.94991 0.666667 0.666667 3.94991 0.666667 8C0.666667 9.41912 1.06922 10.7431 1.76671 11.8652Z',
              }),
              (0, r.jsx)('path', {
                d: 'M8.00001 16C12.4183 16 16 12.4183 16 8C16 7.97006 15.9998 7.94015 15.9995 7.91028L1.49374 12.656C2.9453 14.6808 5.3186 16 8.00001 16Z',
              }),
            ],
          }),
          'Dune'
        ),
        X = (0, T.A)(
          (0, r.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, r.jsx)('path', {
              d: 'M14.94 7.76L11.94 2.26C11.8968 2.18109 11.8332 2.11529 11.7557 2.06954C11.6783 2.02378 11.5899 1.99976 11.5 2H4.5C4.41005 1.99976 4.32171 2.02378 4.24427 2.06954C4.16683 2.11529 4.10317 2.18109 4.06 2.26L1.06 7.76C1.01612 7.83601 0.993012 7.92223 0.993012 8.01C0.993012 8.09777 1.01612 8.18399 1.06 8.26L4.06 13.76C4.10573 13.8352 4.1705 13.897 4.24776 13.9391C4.32501 13.9813 4.41203 14.0023 4.5 14H11.5C11.5899 14.0002 11.6783 13.9762 11.7557 13.9305C11.8332 13.8847 11.8968 13.8189 11.94 13.74L14.94 8.24C14.9803 8.16642 15.0014 8.08388 15.0014 8C15.0014 7.91612 14.9803 7.83359 14.94 7.76V7.76ZM11.465 3.5L13.66 7.5H8.91L11.465 3.5ZM8 7.07L5.41 3H10.59L8 7.07ZM4.535 3.5L7.09 7.5H2.34L4.535 3.5ZM2.34 8.5H7.09L4.535 12.5L2.34 8.5ZM8 8.93L10.59 13H5.41L8 8.93ZM11.465 12.5L8.91 8.5H13.66L11.465 12.5Z',
            }),
          }),
          'Integrations'
        ),
        J = (0, T.A)(
          (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 17',
            fill: 'currentColor',
            children: [
              (0, r.jsx)('path', {
                d: 'M0.625977 9.39249H6.55174L10.2218 6.10938H3.78138L0.625977 9.39249Z',
              }),
              (0, r.jsx)('path', {
                d: 'M6.53687 9.35117L6.67961 15.9306L10.2219 12.8071V6.10938L6.53687 9.35117Z',
              }),
              (0, r.jsx)('path', {
                d: 'M5.77808 4.48324H11.7038L15.3739 1.19824H8.93348L5.77808 4.48324Z',
              }),
              (0, r.jsx)('path', {
                d: 'M11.6904 4.44192L11.8313 11.0194L15.3736 7.89595V1.19824L11.6904 4.44192Z',
              }),
            ],
          }),
          'LAF'
        ),
        Y = (0, T.A)(
          (0, r.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, r.jsx)('path', {
              d: 'M2 12H7V13H2V12ZM2 9H7V10H2V9ZM13 7H3C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V6C14 6.26522 13.8946 6.51957 13.7071 6.70711C13.5196 6.89464 13.2652 7 13 7ZM3 3V6H13V3H3ZM13 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14ZM10 10V13H13V10H10Z',
            }),
          }),
          'News'
        ),
        F = (0, T.A)(
          (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: [
              (0, r.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M9.1999 13.3833C11.6138 13.3833 13.5706 11.4265 13.5706 9.01264C13.5706 6.59878 11.6138 4.64197 9.1999 4.64197C6.78605 4.64197 4.82923 6.59878 4.82923 9.01264C4.82923 11.4265 6.78605 13.3833 9.1999 13.3833ZM9.20026 5.65122C8.8549 5.65122 8.57872 5.93823 8.59199 6.28333L8.73105 9.89891C8.74075 10.151 8.94796 10.3504 9.20026 10.3504C9.45257 10.3504 9.65978 10.151 9.66948 9.89891L9.80854 6.28333C9.82181 5.93823 9.54563 5.65122 9.20026 5.65122ZM9.20016 12.3741C9.57448 12.3741 9.87793 12.0707 9.87793 11.6963C9.87793 11.322 9.57448 11.0186 9.20016 11.0186C8.82584 11.0186 8.5224 11.322 8.5224 11.6963C8.5224 12.0707 8.82584 12.3741 9.20016 12.3741Z',
              }),
              (0, r.jsx)('path', {
                d: 'M5.44266 12H2V13H6.52682C6.116 12.724 5.75018 12.3863 5.44266 12Z',
              }),
              (0, r.jsx)('path', {
                d: 'M4.50165 10H2V9H4.40002C4.40001 9.00422 4.4 9.00844 4.4 9.01266C4.4 9.3511 4.43503 9.68135 4.50165 10Z',
              }),
              (0, r.jsx)('path', {
                d: 'M13.4957 6.86852C13.5724 6.82475 13.6436 6.77064 13.7071 6.70711C13.8946 6.51957 14 6.26522 14 6V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V6C2 6.26522 2.10536 6.51957 2.29289 6.70711C2.48043 6.89464 2.73478 7 3 7H4.84107C5.00739 6.64038 5.21691 6.30483 5.46296 6H3V3H13V6H12.937C13.1529 6.26737 13.3406 6.55837 13.4957 6.86852Z',
              }),
            ],
          }),
          'Risk Disclaimers'
        ),
        _ = (0, T.A)(
          (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 14 12',
            fill: 'none',
            children: [
              (0, r.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10.5464 11.433C10.7255 11.5594 10.9555 11.5912 11.1618 11.5139C11.3664 11.4357 11.5182 11.2594 11.5637 11.0457C12.0464 8.77751 13.2182 3.03471 13.6573 0.971953C13.6901 0.815587 13.6355 0.653767 13.5137 0.550129C13.3901 0.445582 13.221 0.416491 13.0701 0.471946C10.7409 1.33468 3.56629 4.02654 0.633525 5.1111C0.448977 5.18019 0.328066 5.35838 0.333521 5.55565C0.339884 5.75202 0.472614 5.92202 0.662616 5.97929C1.97809 6.37293 3.70357 6.92021 3.70357 6.92021C3.70357 6.92021 4.51085 9.35661 4.93086 10.5948C4.98358 10.7512 5.1054 10.873 5.26541 10.9148C5.42632 10.9566 5.59723 10.913 5.71723 10.7994C6.39269 10.163 7.43543 9.17661 7.43543 9.17661C7.43543 9.17661 9.42092 10.6312 10.5464 11.433V11.433ZM4.42994 6.61112L5.36268 9.68753L5.57086 7.73932L11.2273 2.63834C11.2873 2.58379 11.2955 2.49288 11.2455 2.42925C11.1964 2.36561 11.1046 2.35015 11.0364 2.39288L4.43085 6.61294L4.42994 6.61112Z',
                fill: '#EE1C25',
              }),
              (0, r.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10.5464 11.433C10.7255 11.5594 10.9555 11.5912 11.1618 11.5139C11.3664 11.4357 11.5182 11.2594 11.5637 11.0457C12.0464 8.77751 13.2182 3.03471 13.6573 0.971953C13.6901 0.815587 13.6355 0.653767 13.5137 0.550129C13.3901 0.445582 13.221 0.416491 13.0701 0.471946C10.7409 1.33468 3.56629 4.02654 0.633525 5.1111C0.448977 5.18019 0.328066 5.35838 0.333521 5.55565C0.339884 5.75202 0.472614 5.92202 0.662616 5.97929C1.97809 6.37293 3.70357 6.92021 3.70357 6.92021C3.70357 6.92021 4.51085 9.35661 4.93086 10.5948C4.98358 10.7512 5.1054 10.873 5.26541 10.9148C5.42632 10.9566 5.59723 10.913 5.71723 10.7994C6.39269 10.163 7.43543 9.17661 7.43543 9.17661C7.43543 9.17661 9.42092 10.6312 10.5464 11.433V11.433ZM4.42994 6.61112L5.36268 9.68753L5.57086 7.73932L11.2273 2.63834C11.2873 2.58379 11.2955 2.49288 11.2455 2.42925C11.1964 2.36561 11.1046 2.35015 11.0364 2.39288L4.43085 6.61294L4.42994 6.61112Z',
                fill: 'url(#pattern0_8981_295)',
              }),
              (0, r.jsxs)('defs', {
                children: [
                  (0, r.jsx)('pattern', {
                    id: 'pattern0_8981_295',
                    patternContentUnits: 'objectBoundingBox',
                    width: '1',
                    height: '1',
                    children: (0, r.jsx)('use', {
                      xlinkHref: '#image0_8981_295',
                      transform: 'matrix(0.00520842 0 0 0.00625 0.1278 0.233495)',
                    }),
                  }),
                  (0, r.jsx)('image', {
                    id: 'image0_8981_295',
                    width: '255',
                    height: '160',
                    xlinkHref:
                      'data:image/png;base64,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',
                  }),
                ],
              }),
            ],
          }),
          'TelegramCN'
        ),
        $ = (0, T.A)(
          (0, r.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M11.5464 13.433C11.7255 13.5594 11.9555 13.5912 12.1618 13.5139C12.3664 13.4357 12.5182 13.2594 12.5637 13.0457C13.0464 10.7775 14.2182 5.03471 14.6573 2.97195C14.6901 2.81559 14.6355 2.65377 14.5137 2.55013C14.3901 2.44558 14.221 2.41649 14.0701 2.47195C11.7409 3.33468 4.56629 6.02654 1.63352 7.1111C1.44898 7.18019 1.32807 7.35838 1.33352 7.55565C1.33988 7.75202 1.47261 7.92202 1.66262 7.97929C2.97809 8.37293 4.70357 8.92021 4.70357 8.92021C4.70357 8.92021 5.51085 11.3566 5.93086 12.5948C5.98358 12.7512 6.1054 12.873 6.26541 12.9148C6.42632 12.9566 6.59723 12.913 6.71723 12.7994C7.39269 12.163 8.43543 11.1766 8.43543 11.1766C8.43543 11.1766 10.4209 12.6312 11.5464 13.433V13.433ZM5.42994 8.61112L6.36268 11.6875L6.57086 9.73932L12.2273 4.63834C12.2873 4.58379 12.2955 4.49288 12.2455 4.42925C12.1964 4.36561 12.1046 4.35015 12.0364 4.39288L5.43085 8.61294L5.42994 8.61112Z',
            }),
          }),
          'Telegram'
        ),
        ee = (0, T.A)(
          (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 14 12',
            fill: 'none',
            children: [
              (0, r.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10.5464 11.433C10.7255 11.5594 10.9555 11.5912 11.1618 11.5139C11.3664 11.4357 11.5182 11.2594 11.5637 11.0457C12.0464 8.77751 13.2182 3.03471 13.6573 0.971953C13.6901 0.815587 13.6355 0.653767 13.5137 0.550129C13.3901 0.445582 13.221 0.416491 13.0701 0.471946C10.7409 1.33468 3.56629 4.02654 0.633525 5.1111C0.448977 5.18019 0.328066 5.35838 0.333521 5.55565C0.339884 5.75202 0.472614 5.92202 0.662616 5.97929C1.97809 6.37293 3.70357 6.92021 3.70357 6.92021C3.70357 6.92021 4.51085 9.35661 4.93086 10.5948C4.98358 10.7512 5.1054 10.873 5.26541 10.9148C5.42632 10.9566 5.59723 10.913 5.71723 10.7994C6.39269 10.163 7.43543 9.17661 7.43543 9.17661C7.43543 9.17661 9.42092 10.6312 10.5464 11.433V11.433ZM4.42994 6.61112L5.36268 9.68753L5.57086 7.73932L11.2273 2.63834C11.2873 2.58379 11.2955 2.49288 11.2455 2.42925C11.1964 2.36561 11.1046 2.35015 11.0364 2.39288L4.43085 6.61294L4.42994 6.61112Z',
                fill: 'url(#pattern0_8981_277)',
              }),
              (0, r.jsxs)('defs', {
                children: [
                  (0, r.jsx)('pattern', {
                    id: 'pattern0_8981_277',
                    patternContentUnits: 'objectBoundingBox',
                    width: '1',
                    height: '1',
                    children: (0, r.jsx)('use', {
                      xlinkHref: '#image0_8981_277',
                      transform: 'matrix(0.00520842 0 0 0.00625 -0.125011 0)',
                    }),
                  }),
                  (0, r.jsx)('image', {
                    id: 'image0_8981_277',
                    width: '240',
                    height: '160',
                    xlinkHref:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgCAIAAAC9uXYyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA8KADAAQAAAABAAAAoAAAAADt++UAAAADgElEQVR4Ae3WUU3EUBRF0ZbpHxZQwAeuUIEAhGAFFQQnkAzBxj6rDvY9K8077/f74XOBygUeKiE6XOD/AkBzkLoA0Kk5xQDNQOoCQKfmFAM0A6kLAJ2aUwzQDKQuAHRqTjFAM5C6ANCpOcUAzUDqAkCn5hQDNAOpCwCdmlMM0AykLgB0ak4xQDOQugDQqTnFAM1A6gJAp+YUAzQDqQsAnZpTDNAMpC4AdGpOMUAzkLoA0Kk5xQDNQOoCQKfmFAM0A6kLAJ2aUwzQDKQuAHRqTjFAM5C6ANCpOcUAzUDqAkCn5hQDNAOpCwCdmlMM0AykLgB0ak4xQDOQugDQqTnFAM1A6gJAp+YUAzQDqQsAnZpTDNAMpC4AdGpOMUAzkLoA0Kk5xQDNQOoC19v7ZypIzPYFzuPlY/sC6lMXuI7HWypIzPYFvKG398/VA52bdDsI6O39c/VA5ybdDgJ6e/9cPdC5SbeDgN7eP1cPdG7S7SCgt/fP1QOdm3Q7COjt/XP1QOcm3Q4Cenv/XD3QuUm3g4De3j9XD3Ru0u0goLf3z9UDnZt0Owjo7f1z9UDnJt0OAnp7/1w90LlJt4OA3t4/Vw90btLtIKC398/VA52bdDsI6O39c/VA5ybdDgJ6e/9cPdC5SbeDgN7eP1cPdG7S7SCgt/fP1QOdm3Q7COjt/XP1QOcm3Q4Cenv/XD3QuUm3g4De3j9XD3Ru0u0goLf3z9UDnZt0Owjo7f1z9UDnJt0OAnp7/1w90LlJt4OA3t4/Vw90btLtIKC398/VX8dxy0UJ2r3A9fr7vVuvPHeB8+vZqyO36nDQ9XM+DedLr13A77m26HgP0OMAavlA1xYd7wF6HEAtH+jaouM9QI8DqOUDXVt0vAfocQC1fKBri473AD0OoJYPdG3R8R6gxwHU8oGuLTreA/Q4gFo+0LVFx3uAHgdQywe6tuh4D9DjAGr5QNcWHe8BehxALR/o2qLjPUCPA6jlA11bdLwH6HEAtXyga4uO9wA9DqCWD3Rt0fEeoMcB1PKBri063gP0OIBaPtC1Rcd7gB4HUMsHurboeA/Q4wBq+UDXFh3vAXocQC0f6Nqi4z1AjwOo5QNdW3S8B+hxALV8oGuLjvcAPQ6glg90bdHxHqDHAdTyga4tOt4D9DiAWj7QtUXHe4AeB1DLB7q26HgP0OMAavlA1xYd7/kDmLYLSMLYL7EAAAAASUVORK5CYII=',
                  }),
                ],
              }),
            ],
          }),
          'TelegramRU'
        ),
        et = (0, T.A)(
          (0, r.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 300 271',
            fill: 'currentColor',
            children: (0, r.jsx)('path', {
              d: 'm236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z',
            }),
          }),
          'X'
        ),
        es = (e) => [
          {
            title: (0, x.t)`Community`,
            links: [
              {
                label: (0, x.t)`Twitter`,
                href: 'https://twitter.com/curvefinance',
                icon: (0, r.jsx)(et, {}),
              },
              {
                label: (0, x.t)`Discord`,
                href: 'https://discord.gg/rgrfS7W',
                icon: (0, r.jsx)(K.E, {}),
              },
              {
                label: (0, x.t)`Youtube`,
                href: 'https://www.youtube.com/c/CurveFinance',
                icon: (0, r.jsx)(U.A, {}),
              },
              {
                label: (0, x.t)`Announcements`,
                href: 'https://t.me/curvefiann',
                icon: (0, r.jsx)($, {}),
              },
              { label: (0, x.t)`Telegram`, href: 'https://t.me/curvefi', icon: (0, r.jsx)($, {}) },
              {
                label: (0, x.t)`Telegram (CN)`,
                href: 'https://t.me/curveficn',
                icon: (0, r.jsx)(_, {}),
              },
              {
                label: (0, x.t)`Telegram (RU)`,
                href: 'https://t.me/crvrussianchat',
                icon: (0, r.jsx)(ee, {}),
              },
            ],
          },
          {
            title: (0, x.t)`Documentation`,
            links: [
              { label: (0, x.t)`News`, href: 'https://news.curve.fi/', icon: (0, r.jsx)(Y, {}) },
              {
                label: (0, x.t)`User Docs`,
                href: 'https://resources.curve.fi/',
                icon: (0, r.jsx)(R.A, {}),
              },
              { label: (0, x.t)`Integrations`, href: 'integrations/', icon: (0, r.jsx)(X, {}) },
              {
                label: (0, x.t)`Technical Docs`,
                href: 'https://docs.curve.fi/',
                icon: (0, r.jsx)(W, {}),
              },
              {
                label: (0, x.t)`Github`,
                href: 'https://github.com/curvefi',
                icon: (0, r.jsx)(I.A, {}),
              },
              {
                label: (0, x.t)`Risk Disclaimers`,
                href: `disclaimer/${(function (e) {
                  return 'lend' === e
                    ? '?tab=lend'
                    : 'crvusd' !== e
                      ? ''
                      : window.location.href.toLocaleLowerCase().includes('scrvusd')
                        ? '?tab=scrvusd'
                        : '?tab=crvusd';
                })(e)}`,
                icon: (0, r.jsx)(F, {}),
              },
            ],
          },
          {
            title: (0, x.t)`Security`,
            links: [
              {
                label: (0, x.t)`Audits`,
                href: 'https://docs.curve.fi/security/security/#security-audits',
                icon: (0, r.jsx)(E.A, {}),
              },
              {
                label: (0, x.t)`Bug Bounty`,
                href: 'https://docs.curve.fi/security/security/#bug-bounty',
                icon: (0, r.jsx)(Z.A, {}),
              },
              {
                label: (0, x.t)`Curve Monitor`,
                href: 'https://curvemonitor.com/',
                icon: (0, r.jsx)(J, {}),
              },
              { label: (0, x.t)`CrvHub`, href: 'https://crvhub.com/', icon: (0, r.jsx)(q, {}) },
              {
                label: (0, x.t)`Dune Analytics`,
                href: 'https://dune.com/mrblock_buidl/Curve.fi',
                icon: (0, r.jsx)(G, {}),
              },
              {
                label: (0, x.t)`API Status`,
                href: 'https://statuspage.freshping.io/59335-CurveAPI',
                icon: (0, r.jsx)(z.A, {}),
              },
            ],
          },
        ],
        er = n.NC.src,
        ei = (0, a.Ay)('img')({ alt: 'Llama', position: 'absolute' }),
        el = ({ appName: e, networkName: t, headerHeight: s }) => {
          let [a, n, u] = (0, c.K)(),
            [A, h, C] = (0, c.K)(),
            [p, f] = (0, o.Mj)('beta');
          return (0, r.jsx)(i.A, {
            component: 'footer',
            'data-testid': 'footer',
            display: 'flex',
            justifyContent: 'center',
            sx: (e) => ({
              backgroundColor: e.design.Layer[3].Fill,
              paddingInline: d.B.Spacing.lg,
              paddingBlock: d.B.Spacing.xl,
            }),
            children: (0, r.jsxs)(l.A, {
              container: !0,
              spacing: d.B.Grid.Column_Spacing,
              rowGap: d.B.Grid.Row_Spacing,
              sx: { position: 'relative', maxWidth: d.B.MaxWidth.footer },
              'data-testid': 'footer-content',
              children: [
                (0, r.jsx)(l.A, { size: { mobile: 12, desktop: 3 }, children: (0, r.jsx)(P, {}) }),
                es(e).map((s) =>
                  (0, r.jsx)(
                    l.A,
                    {
                      size: { mobile: 12, tablet: 4, desktop: 3 },
                      children: (0, r.jsx)(V, { ...s, networkName: t, appName: e }),
                    },
                    s.title
                  )
                ),
                (0, r.jsx)(ei, {
                  src: er,
                  sx: { height: d.B.IconSize.xxl, right: d.B.Spacing.lg, cursor: 'pointer' },
                  onClick: n,
                }),
                null != a &&
                  (0, r.jsx)(w, {
                    open: a,
                    onClose: u,
                    isBeta: p,
                    setIsBeta: f,
                    openBetaSnackbar: h,
                  }),
                null != A && (0, r.jsx)(D, { open: A, onClose: C, headerHeight: s, isBeta: p }),
              ],
            }),
          });
        };
    },
    8268: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l });
      var r = s(69879),
        i = s(54568);
      let l = (0, r.A)(
        (0, i.jsx)('path', {
          d: 'M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4',
        }),
        'HelpOutline'
      );
    },
    17281: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 85782));
    },
    20047: (e) => {
      e.exports = function (e, t, s) {
        if ('function' != typeof e) throw TypeError('Expected a function');
        return setTimeout(function () {
          e.apply(void 0, s);
        }, t);
      };
    },
    26491: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l });
      var r = s(69879),
        i = s(54568);
      let l = (0, r.A)(
        (0, i.jsx)('path', {
          d: 'M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2m-7 19.6-7-4.66V3h14v12.93zm-2.01-7.42-2.58-2.59L6 12l4 4 8-8-1.42-1.42z',
        }),
        'BeenhereOutlined'
      );
    },
    41257: () => {
      'use strict';
      (Date.prototype.getUTCTimestamp = function () {
        return this.getTime() / 1e3;
      }),
        (Date.prototype.getLocalTimestamp = function () {
          return (this.getTime() - 6e4 * this.getTimezoneOffset()) / 1e3;
        }),
        (BigInt.prototype.fromWei = function () {
          return Number(this) / 1e18;
        });
    },
    49879: (e, t, s) => {
      var r = s(20047),
        i = s(23830),
        l = s(5984);
      e.exports = i(function (e, t, s) {
        return r(e, l(t) || 0, s);
      });
    },
    54152: (e, t, s) => {
      'use strict';
      s.d(t, { t: () => A });
      var r = s(7620),
        i = s(68512),
        l = ['added', 'removed', 'updated'];
      function a(e) {
        return l.includes(e);
      }
      async function n({
        queryClient: e,
        persister: t,
        maxAge: s = 864e5,
        buster: r = '',
        hydrateOptions: l,
      }) {
        try {
          let a = await t.restoreClient();
          if (a) {
            if (a.timestamp) {
              let n = Date.now() - a.timestamp > s,
                o = a.buster !== r;
              n || o ? t.removeClient() : (0, i.Qv)(e, a.clientState, l);
            } else t.removeClient();
          }
        } catch (e) {
          t.removeClient();
        }
      }
      async function o({ queryClient: e, persister: t, buster: s = '', dehydrateOptions: r }) {
        let l = { buster: s, timestamp: Date.now(), clientState: (0, i.hw)(e, r) };
        await t.persistClient(l);
      }
      var c = s(87606),
        d = s(61529),
        u = s(54568),
        A = ({ children: e, persistOptions: t, onSuccess: s, ...i }) => {
          let [l, A] = r.useState(!0),
            h = r.useRef({ persistOptions: t, onSuccess: s }),
            C = r.useRef(!1);
          return (
            r.useEffect(() => {
              h.current = { persistOptions: t, onSuccess: s };
            }),
            r.useEffect(() => {
              let e = { ...h.current.persistOptions, queryClient: i.client };
              return (
                C.current ||
                  ((C.current = !0),
                  n(e).then(async () => {
                    try {
                      await h.current.onSuccess?.();
                    } finally {
                      A(!1);
                    }
                  })),
                l
                  ? void 0
                  : (function (e) {
                      let t = e.queryClient.getQueryCache().subscribe((t) => {
                          a(t.type) && o(e);
                        }),
                        s = e.queryClient.getMutationCache().subscribe((t) => {
                          a(t.type) && o(e);
                        });
                      return () => {
                        t(), s();
                      };
                    })(e)
              );
            }, [i.client, l]),
            (0, u.jsx)(c.QueryClientProvider, {
              ...i,
              children: (0, u.jsx)(d.IsRestoringProvider, { value: l, children: e }),
            })
          );
        };
    },
    55298: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l }), s(7620);
      var r = s(69879),
        i = s(54568);
      let l = (0, r.A)(
        (0, i.jsx)('path', {
          d: 'M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27',
        }),
        'GitHub'
      );
    },
    56465: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l });
      var r = s(69879),
        i = s(54568);
      let l = (0, r.A)(
        [
          (0, i.jsx)(
            'path',
            {
              d: 'M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2m0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2z',
            },
            '0'
          ),
          (0, i.jsx)(
            'path',
            {
              d: 'M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38z',
            },
            '1'
          ),
        ],
        'MonitorHeartOutlined'
      );
    },
    56796: (e, t, s) => {
      'use strict';
      s.d(t, { iD: () => c, ai: () => r.a, qQ: () => r.q });
      var r = s(61873),
        i = s(54568),
        l = s(84826),
        a = s(87606),
        n = s(82099),
        o = s(54152);
      function c({ children: e, persister: t, queryClient: s }) {
        return ((e = (0, i.jsxs)(i.Fragment, { children: [e, !l.OC && (0, i.jsx)(n.E, {})] })), t)
          ? (0, i.jsx)(o.t, { client: s, persistOptions: { persister: t }, children: e })
          : (0, i.jsx)(a.QueryClientProvider, { client: s, children: e });
      }
    },
    68512: (e, t, s) => {
      'use strict';
      function r(e) {
        return e;
      }
      function i(e) {
        return e.state.isPaused;
      }
      function l(e) {
        return 'success' === e.state.status;
      }
      function a(e) {
        return !0;
      }
      function n(e, t = {}) {
        let s =
            t.shouldDehydrateMutation ??
            e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
            i,
          o = e
            .getMutationCache()
            .getAll()
            .flatMap((e) =>
              s(e)
                ? [
                    {
                      mutationKey: e.options.mutationKey,
                      state: e.state,
                      ...(e.options.scope && { scope: e.options.scope }),
                      ...(e.meta && { meta: e.meta }),
                    },
                  ]
                : []
            ),
          c = t.shouldDehydrateQuery ?? e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? l,
          d = t.shouldRedactErrors ?? e.getDefaultOptions().dehydrate?.shouldRedactErrors ?? a,
          u = t.serializeData ?? e.getDefaultOptions().dehydrate?.serializeData ?? r;
        return {
          mutations: o,
          queries: e
            .getQueryCache()
            .getAll()
            .flatMap((e) =>
              c(e)
                ? [
                    {
                      state: {
                        ...e.state,
                        ...(void 0 !== e.state.data && { data: u(e.state.data) }),
                      },
                      queryKey: e.queryKey,
                      queryHash: e.queryHash,
                      ...('pending' === e.state.status && {
                        promise: e.promise
                          ?.then(u)
                          .catch((e) =>
                            d(e) ? Promise.reject(Error('redacted')) : Promise.reject(e)
                          ),
                      }),
                      ...(e.meta && { meta: e.meta }),
                    },
                  ]
                : []
            ),
        };
      }
      function o(e, t, s) {
        if ('object' != typeof t || null === t) return;
        let i = e.getMutationCache(),
          l = e.getQueryCache(),
          a =
            s?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            r,
          n = t.mutations || [],
          o = t.queries || [];
        n.forEach(({ state: t, ...r }) => {
          i.build(
            e,
            { ...e.getDefaultOptions().hydrate?.mutations, ...s?.defaultOptions?.mutations, ...r },
            t
          );
        }),
          o.forEach(({ queryKey: t, state: r, queryHash: i, meta: n, promise: o }) => {
            let c = l.get(i),
              d = void 0 === r.data ? r.data : a(r.data);
            if (c) {
              if (c.state.dataUpdatedAt < r.dataUpdatedAt) {
                let { fetchStatus: e, ...t } = r;
                c.setState({ ...t, data: d });
              }
            } else
              c = l.build(
                e,
                {
                  ...e.getDefaultOptions().hydrate?.queries,
                  ...s?.defaultOptions?.queries,
                  queryKey: t,
                  queryHash: i,
                  meta: n,
                },
                { ...r, data: d, fetchStatus: 'idle' }
              );
            if (o) {
              let e = Promise.resolve(o).then(a);
              c.fetch(void 0, { initialPromise: e });
            }
          });
      }
      s.d(t, { Qv: () => o, hw: () => n });
    },
    73813: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => r });
      let r = (0, s(48341).DU)([
        'html,body{display:block;height:100%;width:100%;}body{min-width:20rem;font-size:16px;color:var(--page--text-color);background-color:var(--page--background-color);scroll-behavior:smooth;}*{box-sizing:border-box;}html,body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,button,abbr,acronym,address,big,cite,code,del,dfn,em,img,input,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-family:var(--font);}li{list-style:none;}.width--full{width:100%;}.height--full{height:100%;}.vertical-align-middle{vertical-align:middle;}',
      ]);
    },
    82099: (e, t, s) => {
      'use strict';
      s.d(t, { E: () => r });
      var r = function () {
        return null;
      };
    },
    85782: (e, t, s) => {
      'use strict';
      s.d(t, { App: () => G });
      var r = s(54568);
      s(41257);
      var i = s(49879),
        l = s.n(i),
        a = s(7620),
        n = s(48341),
        o = s(55906),
        c = s(71287);
      let d = function (e, t) {
        let s = (0, c.A)((e) => e.pageWidth),
          r = (0, c.A)((e) => e.updateLayoutHeight);
        (0, a.useEffect)(
          () => (
            e?.current && r(t, e.current.getBoundingClientRect().height),
            () => {
              r(t, 0);
            }
          ),
          [e, t, r, s]
        );
      };
      var u = s(62942),
        A = s(74143),
        h = s(91069),
        C = s(12522),
        p = s(61466),
        f = s(29514);
      let g = ({ chainId: e }) =>
          (0, p.Os)('chainValidation', () => {
            (0, p.t6)('chainId', () => {
              (0, p.FE)(e)
                .message('Chain ID is required')
                .isNotEmpty()
                .message('Invalid chain ID')
                .isValidChainId();
            });
          }),
        v = ({ chainId: e }) =>
          (0, p.Os)('apiValidation', () => {
            (0, p.t6)('api', () => {
              let { curve: t } = C.B.getState();
              (0, p.FE)(t?.chainId)
                .message('Chain ID should be loaded')
                .equals(e)
                .message('Incorrect chain ID');
            });
          }),
        m = (0, f.Qi)((e) => {
          g(e), v(e);
        });
      async function x(e) {
        let t = C.B.getState().curve,
          { getTVL: s } = A.A.network;
        return s(t);
      }
      let { useQuery: w } = (0, h.X6)({
        queryKey: (e) => ['appStatsTvl', { chainId: e.chainId }],
        queryFn: x,
        staleTime: '5m',
        validationSuite: m,
      });
      async function b({ chainId: e }) {
        let t = C.B.getState().curve,
          { isLite: s } = c.A.getState().networks.networks[e];
        if (s) return null;
        let { getVolume: r } = A.A.network;
        return r(t);
      }
      let { useQuery: y } = (0, h.X6)({
        queryKey: (e) => ['appStatsVolume', { chainId: e.chainId }],
        queryFn: b,
        staleTime: '5m',
        validationSuite: m,
      });
      var L = s(21415),
        j = s(77241),
        D = s(72986),
        B = s(36074),
        M = s(21802),
        H = s(12580);
      let S = () => (0, B.t)`Quickswap`,
        Q = ({ sections: e, BannerProps: t }) => {
          let { wallet: s } = (0, D.vT)(),
            i = (0, a.useRef)(null),
            { push: l } = (0, u.useRouter)();
          d(i, 'mainNav');
          let n = (0, C.B)((e) => e.curve?.chainId),
            A = (0, c.A)((e) => e.connectState),
            h = (0, c.A)((e) => e.getNetworkConfigFromApi),
            p = (0, c.A)((e) => e.updateConnectState),
            f = (0, c.A)((e) => e.networks.networks),
            g = (0, c.A)((e) => e.networks.visibleNetworksList),
            v = (0, c.A)((e) => e.layoutHeight.globalAlert),
            { data: m } = w({ chainId: n }),
            { data: x } = y({ chainId: n }),
            { rChainId: b, rNetwork: Q } = (0, L.V1)(),
            { hasRouter: P } = h(b),
            N = (0, c.A)((e) => e.storeCache.routerFormValues[b]),
            k = f[b],
            O = (0, L.Rl)();
          return (0, r.jsx)(H.Y, {
            networkName: Q,
            mainNavRef: i,
            currentMenu: 'dex',
            isLite: k?.isLite,
            routes: (0, a.useMemo)(
              () => [
                ...(P && (!k || k.showRouterSwap)
                  ? [
                      {
                        app: 'dex',
                        route: (function (e, t) {
                          let s = t?.fromAddress ?? e?.fromAddress,
                            r = t?.toAddress ?? e?.toAddress;
                          return `${o.a$.PAGE_SWAP}/${s || r ? `?${new URLSearchParams({ ...(s && { from: s }), ...(r && { to: r }) })}` : ''}`;
                        })(k.swap, N),
                        label: S,
                      },
                    ]
                  : []),
                ...M.VS.dex.routes.filter((e) => e.route !== o.a$.PAGE_SWAP),
              ],
              [P, k, N]
            ),
            ChainProps: {
              options: g,
              disabled: (0, j.VP)(A, o.Ej.SWITCH_NETWORK),
              chainId: b,
              onChange: (0, a.useCallback)(
                (e) => {
                  if (b !== e) {
                    let t = f[e].id;
                    l((0, L.Yn)({ network: t }, `/${O}`)),
                      p('loading', o.Ej.SWITCH_NETWORK, [b, e]);
                  }
                },
                [b, f, l, O, p]
              ),
            },
            WalletProps: {
              onConnectWallet: (0, a.useCallback)(
                () => p('loading', o.Ej.CONNECT_WALLET, ['']),
                [p]
              ),
              onDisconnectWallet: (0, a.useCallback)(
                () => p('loading', o.Ej.DISCONNECT_WALLET),
                [p]
              ),
              walletAddress: (0, D.kB)(s),
              disabled: (0, j.VP)(A, o.Ej.SWITCH_NETWORK),
              label: (0, B.t)`Connect Wallet`,
            },
            appStats: [
              {
                label: (0, B.t)`Total Deposits`,
                value: (0, j.ZV)(m, { currency: 'USD', notation: 'compact' }),
              },
              ...(k?.isLite
                ? []
                : [
                    {
                      label: (0, B.t)`Daily Volume`,
                      value: (0, j.ZV)(x?.totalVolume, { currency: 'USD', notation: 'compact' }),
                    },
                    {
                      label: (0, B.t)`Crypto Volume Share`,
                      value: (0, j.ZV)(x?.cryptoShare, j.hd.PERCENT),
                    },
                  ]),
            ],
            sections: e,
            height: (0, H.g)(v),
            BannerProps: t,
          });
        };
      var P = s(46250),
        N = s(1334),
        k = s(40459);
      let O = (e) => [
          {
            title: (0, B.t)`Documentation`,
            links: [
              { href: 'https://news.curve.fi/', label: (0, B.t)`News` },
              {
                href: 'https://resources.curve.fi/lending/understanding-lending/',
                label: (0, B.t)`User Resources`,
              },
              { href: 'https://docs.curve.fi', label: (0, B.t)`Developer Resources` },
              {
                href: (0, L.Yn)({ network: e }, o.a$.PAGE_DISCLAIMER),
                label: (0, B.t)`Risk Disclaimers`,
              },
              {
                href: (0, L.Yn)({ network: e }, o.a$.PAGE_INTEGRATIONS),
                label: (0, B.t)`Integrations`,
              },
              {
                href: 'https://resources.curve.fi/glossary-branding/branding/',
                label: (0, B.t)`Branding`,
              },
              ...((0, B.Y)() ? [{ href: 'https://www.curve.wiki/', label: (0, B.t)`Wiki` }] : []),
            ],
          },
          {
            title: (0, B.t)`Security`,
            links: [
              { href: 'https://docs.curve.fi/references/audits/', label: (0, B.t)`Audits` },
              { href: 'https://docs.curve.fi/security/security/', label: (0, B.t)`Bug Bounty` },
              { href: 'https://dune.com/mrblock_buidl/Curve.fi', label: (0, B.t)`Dune Analytics` },
              { href: 'https://curvemonitor.com', label: (0, B.t)`Curve Monitor` },
              { href: 'https://crvhub.com/', label: (0, B.t)`Crvhub` },
            ],
          },
        ],
        V = n.Ay.main.withConfig({ componentId: 'sc-fa2daf12-0' })(
          ['margin:0 auto;max-width:var(--width);min-height:', ';width:100%;'],
          ({ minHeight: e }) => `calc(100vh - ${e}px)`
        ),
        E = n.Ay.div.withConfig({ componentId: 'sc-fa2daf12-1' })(
          ['display:flex;flex-direction:column;position:relative;width:100%;min-height:', ';'],
          ({ globalAlertHeight: e }) => `calc(100vh - ${e}px)`
        ),
        Z = ({ children: e }) => {
          let { wallet: t } = (0, D.vT)(),
            s = (0, a.useRef)(null);
          d(s, 'globalAlert');
          let i = (0, c.A)((e) => e.connectState),
            l = (0, c.A)((e) => e.layoutHeight),
            n = (0, c.A)((e) => e.updateConnectState),
            u = (0, c.A)((e) => e.layoutHeight.globalAlert),
            { rChainId: A, rNetwork: h } = (0, L.V1)(),
            C = (0, a.useMemo)(() => O(h), [h]),
            p = k.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE,
            [f, g] = (0, a.useState)(''),
            v = (0, j.N6)(i, o.Ej.SWITCH_NETWORK) || (!!f && (0, j.VP)(i, f)),
            m = (0, a.useMemo)(() => P.o.reduce((e, t) => e + l[t], 0), [l]);
          return (0, r.jsxs)(E, {
            globalAlertHeight: l?.globalAlert,
            children: [
              (0, r.jsx)(Q, {
                sections: C,
                BannerProps: {
                  ref: s,
                  networkName: h,
                  showConnectApiErrorMessage: (0, j.N6)(i, o.Ej.CONNECT_API),
                  showSwitchNetworkMessage: v,
                  maintenanceMessage: p,
                  handleNetworkChange: () => {
                    g(`${o.Ej.SWITCH_NETWORK}${(0, D.oe)(t)}-${A}`),
                      n('loading', o.Ej.SWITCH_NETWORK, [(0, D.oe)(t), A]);
                  },
                },
              }),
              (0, r.jsx)(V, { minHeight: m, children: e }),
              (0, r.jsx)(N.w, { appName: 'dex', networkName: h, headerHeight: (0, H.g)(u) }),
            ],
          });
        };
      var I = s(73813),
        R = s(88456),
        z = s(75911),
        U = s(95292),
        T = s(56796),
        q = s(47636),
        K = s(74043),
        W = s(41265);
      let G = ({ children: e }) => {
        let t = (0, C.B)((e) => e.curve),
          s = t?.chainId ?? 1,
          i = (0, c.A)((e) => e.isPageVisible),
          n = (0, c.A)((e) => e.pageWidth),
          o = (0, c.A)((e) => e.pools.poolsMapper[s]),
          d = (0, c.A)((e) => e.setPageWidth),
          u = (0, c.A)((e) => e.networks.fetchNetworks),
          h = (0, c.A)((e) => e.pools.fetchPools),
          p = (0, c.A)((e) => e.pools.fetchPoolsVolume),
          f = (0, c.A)((e) => e.pools.fetchPoolsTvl),
          g = (0, c.A)((e) => e.gas.fetchGasInfo),
          v = (0, c.A)((e) => e.usdRates.fetchAllStoredUsdRates),
          m = (0, c.A)((e) => e.userBalances.fetchAllStoredBalances),
          x = (0, c.A)((e) => e.tokens.setTokensMapper),
          w = (0, c.A)((e) => e.updateShowScrollButton),
          b = (0, c.A)((e) => e.updateGlobalStoreByKey),
          y = (0, c.A)((e) => e.networks.networks[s]),
          L = (0, z.nv)((e) => e.theme),
          [j, B] = (0, a.useState)(!1),
          M = (0, a.useCallback)(() => {
            window.innerWidth && d(window.innerWidth);
          }, [d]),
          H = (0, a.useCallback)(
            async (e) => {
              let { chainId: t } = e,
                s = Object.values(o);
              await Promise.all([p(t, s), f(e, s)]), x(t, s);
            },
            [f, p, o, x]
          );
        (0, a.useEffect)(() => {
          n &&
            ((document.body.className = `theme-${L} ${n}`.replace(/ +(?= )/g, '').trim()),
            document.body.setAttribute('data-theme', L));
        }, [n, L]),
          (0, a.useEffect)(() => {
            c.A.setState(c.A.getInitialState()),
              (async () => {
                let e = await u();
                D.vT.initialize(L, e);
                let t = () => {
                  b('isPageVisible', !document.hidden);
                };
                B(!0),
                  b('loaded', !0),
                  M(),
                  t(),
                  document.addEventListener('visibilitychange', t),
                  window.addEventListener('resize', () => M()),
                  window.addEventListener('scroll', () => l()(() => w(window.scrollY), 200));
              })();
          }, []);
        let S = (0, a.useCallback)(
          async (e) => {
            let t = await A.A.network.fetchAllPoolsList(e, y);
            h(e, t, null);
          },
          [h, y]
        );
        return (
          (0, U.A)(
            () => {
              t && (g(t), v(t), H(t), t.signerAddress && m(t));
            },
            q.oX['5m'],
            i
          ),
          (0, U.A)(
            () => {
              t && S(t);
            },
            q.oX['11m'],
            i
          ),
          (0, r.jsxs)('div', {
            suppressHydrationWarning: !0,
            style: { ...('chad' === L && W.jq) },
            children: [
              (0, r.jsx)(I.A, {}),
              (0, r.jsx)(K.N, {
                theme: L,
                children:
                  j &&
                  (0, r.jsx)(R.so, {
                    children: (0, r.jsx)(T.iD, {
                      persister: T.ai,
                      queryClient: T.qQ,
                      children: (0, r.jsx)(Z, { children: e }),
                    }),
                  }),
              }),
            ],
          })
        );
      };
    },
    88456: (e, t, s) => {
      'use strict';
      s.d(t, { so: () => n });
      var r = s(7620);
      s(97509);
      let i = r.createContext(null);
      function l(e) {
        let { children: t } = e,
          s = (0, r.useContext)(i),
          [l, a] = (0, r.useState)(0),
          n = (0, r.useMemo)(
            () => ({
              parent: s,
              modalCount: l,
              addModal() {
                a((e) => e + 1), s && s.addModal();
              },
              removeModal() {
                a((e) => e - 1), s && s.removeModal();
              },
            }),
            [s, l]
          );
        return r.createElement(i.Provider, { value: n }, t);
      }
      function a(e) {
        let t;
        let { modalProviderProps: s } = {
          modalProviderProps: {
            'aria-hidden': (!!(t = (0, r.useContext)(i)) && t.modalCount > 0) || void 0,
          },
        };
        return r.createElement('div', { 'data-overlay-container': !0, ...e, ...s });
      }
      function n(e) {
        return r.createElement(l, null, r.createElement(a, e));
      }
    },
    92041: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l });
      var r = s(69879),
        i = s(54568);
      let l = (0, r.A)(
        (0, i.jsx)('path', {
          d: 'M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65C8.03 15.48 8 15.23 8 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18c.31-.08.63-.12.94-.12.32 0 .63.04.95.12l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69zm-6 2h4v2h-4zm0-4h4v2h-4z',
        }),
        'BugReportOutlined'
      );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        4599, 2138, 3896, 2565, 8238, 7261, 8341, 2740, 2607, 4439, 7208, 2519, 7806, 4667, 1356,
        7999, 1332, 7044, 4925, 3887, 9556, 7959, 7184, 7653, 7105, 6469, 8099, 1868, 8534, 3377,
        3308, 7257, 7067, 3758, 8373, 4357, 7399, 5911, 7329, 6543, 1287, 2580, 587, 8315, 7358,
      ],
      () => t(17281)
    ),
      (_N_E = e.O());
  },
]);
