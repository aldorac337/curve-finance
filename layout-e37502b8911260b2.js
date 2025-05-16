(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9024],
  {
    21135: (e, r, t) => {
      'use strict';
      t.d(r, { InjectServeSideData: () => c });
      var s = t(7620),
        a = t(71287);
      let c = ({ chainId: e, pools: r, tvl: t, volume: c, children: l }) => {
        let n = (0, a.A)((e) => e.storeCache.setServerPreloadData);
        return (
          (0, s.useEffect)(() => {
            n(e, { pools: r, tvl: t, volume: c });
          }, [n, e, r, t, c]),
          l
        );
      };
    },
    71608: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 21135));
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(
      0,
      [
        4599, 2138, 9335, 4399, 7261, 5077, 6438, 4380, 4439, 7208, 2519, 1356, 7999, 3748, 8612,
        7044, 4925, 9720, 9556, 4237, 2226, 7653, 9630, 4034, 7587, 1868, 8534, 5476, 3033, 2438,
        7399, 3414, 9184, 1287, 587, 8315, 7358,
      ],
      () => r(71608)
    ),
      (_N_E = e.O());
  },
]);
