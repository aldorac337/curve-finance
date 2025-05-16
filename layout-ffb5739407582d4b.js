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
        4599, 2138, 9335, 2565, 7261, 8238, 8341, 9205, 4439, 7208, 7806, 5052, 2519, 1356, 7999,
        5230, 8612, 7044, 4925, 3887, 9556, 7959, 7184, 7653, 7105, 6469, 7587, 1868, 8534, 3377,
        3308, 9459, 6467, 7399, 5911, 7637, 6543, 1287, 587, 8315, 7358,
      ],
      () => r(71608)
    ),
      (_N_E = e.O());
  },
]);
