(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1112, 2873, 4110, 8974, 9612],
  {
    15310: (t, e, r) => {
      Promise.resolve().then(r.bind(r, 75353));
    },
    73115: (t, e, r) => {
      'use strict';
      r.d(e, { A: () => $ });
      var a = r(7620),
        i = r(32987),
        n = r(56579),
        o = r(33377),
        s = r(66179),
        l = r(32678),
        d = r(33420),
        h = r(87975),
        p = r(61829),
        u = r(75989);
      function f(t) {
        return (0, u.Ay)('MuiSkeleton', t);
      }
      (0, p.A)('MuiSkeleton', [
        'root',
        'text',
        'rectangular',
        'rounded',
        'circular',
        'pulse',
        'wave',
        'withChildren',
        'fitContent',
        'heightAuto',
      ]);
      var c = r(54568);
      let m = (t) => {
          let { classes: e, variant: r, animation: a, hasChildren: i, width: o, height: s } = t;
          return (0, n.A)(
            {
              root: [
                'root',
                r,
                a,
                i && 'withChildren',
                i && !o && 'fitContent',
                i && !s && 'heightAuto',
              ],
            },
            f,
            e
          );
        },
        g = (0, s.i7)`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,
        v = (0, s.i7)`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,
        b =
          'string' != typeof g
            ? (0, s.AH)`
        animation: ${g} 2s ease-in-out 0.5s infinite;
      `
            : null,
        y =
          'string' != typeof v
            ? (0, s.AH)`
        &::after {
          animation: ${v} 2s linear 0.5s infinite;
        }
      `
            : null,
        w = (0, l.Ay)('span', {
          name: 'MuiSkeleton',
          slot: 'Root',
          overridesResolver: (t, e) => {
            let { ownerState: r } = t;
            return [
              e.root,
              e[r.variant],
              !1 !== r.animation && e[r.animation],
              r.hasChildren && e.withChildren,
              r.hasChildren && !r.width && e.fitContent,
              r.hasChildren && !r.height && e.heightAuto,
            ];
          },
        })(
          (0, d.A)(({ theme: t }) => {
            let e = String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1] || 'px',
              r = parseFloat(t.shape.borderRadius);
            return {
              display: 'block',
              backgroundColor: t.vars
                ? t.vars.palette.Skeleton.bg
                : (0, o.X4)(t.palette.text.primary, 'light' === t.palette.mode ? 0.11 : 0.13),
              height: '1.2em',
              variants: [
                {
                  props: { variant: 'text' },
                  style: {
                    marginTop: 0,
                    marginBottom: 0,
                    height: 'auto',
                    transformOrigin: '0 55%',
                    transform: 'scale(1, 0.60)',
                    borderRadius: `${r}${e}/${Math.round((r / 0.6) * 10) / 10}${e}`,
                    '&:empty:before': { content: '"\\00a0"' },
                  },
                },
                { props: { variant: 'circular' }, style: { borderRadius: '50%' } },
                {
                  props: { variant: 'rounded' },
                  style: { borderRadius: (t.vars || t).shape.borderRadius },
                },
                {
                  props: ({ ownerState: t }) => t.hasChildren,
                  style: { '& > *': { visibility: 'hidden' } },
                },
                {
                  props: ({ ownerState: t }) => t.hasChildren && !t.width,
                  style: { maxWidth: 'fit-content' },
                },
                {
                  props: ({ ownerState: t }) => t.hasChildren && !t.height,
                  style: { height: 'auto' },
                },
                {
                  props: { animation: 'pulse' },
                  style: b || { animation: `${g} 2s ease-in-out 0.5s infinite` },
                },
                {
                  props: { animation: 'wave' },
                  style: {
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    '&::after': {
                      background: `linear-gradient(
                90deg,
                transparent,
                ${(t.vars || t).palette.action.hover},
                transparent
              )`,
                      content: '""',
                      position: 'absolute',
                      transform: 'translateX(-100%)',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                    },
                  },
                },
                {
                  props: { animation: 'wave' },
                  style: y || { '&::after': { animation: `${v} 2s linear 0.5s infinite` } },
                },
              ],
            };
          })
        ),
        $ = a.forwardRef(function (t, e) {
          let r = (0, h.b)({ props: t, name: 'MuiSkeleton' }),
            {
              animation: a = 'pulse',
              className: n,
              component: o = 'span',
              height: s,
              style: l,
              variant: d = 'text',
              width: p,
              ...u
            } = r,
            f = { ...r, animation: a, component: o, variant: d, hasChildren: !!u.children },
            g = m(f);
          return (0, c.jsx)(w, {
            as: o,
            ref: e,
            className: (0, i.A)(g.root, n),
            ownerState: f,
            ...u,
            style: { width: p, height: s, ...l },
          });
        });
    },
    75353: (t, e, r) => {
      'use strict';
      r.d(e, { HashRouterRedirect: () => d });
      var a = r(54568),
        i = r(62942),
        n = r(7620),
        o = r(73115);
      let s = { dex: 'pools', lend: 'markets', crvusd: 'markets', dao: 'proposals' },
        l = ['lend', 'crvusd', 'dao'];
      function d({ app: t, redirects: e }) {
        let { replace: r } = (0, i.useRouter)();
        return (
          (0, n.useEffect)(() => {
            let a = (function ({ search: t, hash: e, origin: r }, a, i) {
              let n = e.replace(/^#\//, ''),
                o = a ?? l.find((t) => r.startsWith(t)) ?? 'dex';
              return i?.find((t) => t.startsWith(n))
                ? `/${o}/ethereum/${n}${t}`
                : n
                  ? `/${o}/${n}${t}`
                  : `/${o}/ethereum/${s[o]}`;
            })(window.location, t, e);
            console.info(`Redirecting from ${window.location.href} to ${a}`), r(a);
          }, [t, r, e]),
          (0, a.jsx)(o.A, {})
        );
      }
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [3896, 587, 8315, 7358], () => e(15310)), (_N_E = t.O());
  },
]);
