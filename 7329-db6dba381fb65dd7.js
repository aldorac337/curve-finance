'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2445, 7329],
  {
    3717: (a, e, i) => {
      i.d(e, { x: () => p });
      var n = i(54568),
        t = i(44876),
        l = i(35183),
        o = i(69228),
        r = i(84121),
        d = i(84032);
      let s = '/images/default-crypto.png',
        { IconSize: c } = d.B,
        p = ({
          className: a = '',
          blockchainId: e = '',
          tooltip: i = '',
          size: d = 'sm',
          address: p,
          sx: m,
        }) =>
          (0, n.jsx)(o.m, {
            title: i,
            placement: 'top',
            children: (0, n.jsx)(t.A, {
              component: 'img',
              'data-testid': `token-icon-${i}`,
              className: `${a}`,
              alt: i,
              onError: ({ currentTarget: a }) => {
                a.src = s;
              },
              src: p ? `${(0, l.YQ)(e ?? '')}${p.toLowerCase()}.png` : s,
              loading: 'lazy',
              sx: (a) => ({
                border: '1px solid transparent',
                borderRadius: '50%',
                ...('sm' === d && {
                  width: '1.75rem',
                  height: '1.75rem',
                  [a.breakpoints.down(400)]: { width: '1.5rem', height: '1.5rem' },
                }),
                ...('mui-sm' === d && (0, r.N)({ width: c.sm, height: c.sm })),
                ...('mui-md' === d && (0, r.N)({ width: c.md, height: c.md })),
                ...('xl' === d && (0, r.N)({ width: c.xl, height: c.xl })),
                ...m,
              }),
            }),
          });
    },
    12522: (a, e, i) => {
      i.d(e, { B: () => l });
      var n = i(29906);
      let t = {
          curve: null,
          isLoadingCurve: !0,
          lending: null,
          isLoadingLending: !0,
          stable: null,
          isLoadingStable: !0,
        },
        l = (0, n.vt)((a) => ({
          ...t,
          updateCurve: (e) => a({ curve: e }),
          setIsLoadingCurve: (e) => a({ isLoadingCurve: e }),
          updateLending: (e) => a({ lending: e }),
          setIsLoadingLending: (e) => a({ isLoadingLending: e }),
          updateStable: (e) => a({ stable: e }),
          setIsLoadingStable: (e) => a({ isLoadingStable: e }),
        }));
    },
    50440: (a, e, i) => {
      i.d(e, { A: () => O });
      var n = {};
      i.r(n),
        i.d(n, {
          Babylon: () => l,
          Bills: () => o,
          Carrot: () => r,
          DLCLink: () => d,
          DTrinity: () => s,
          Elixir: () => c,
          Ethena: () => p,
          Etherfi: () => m,
          Fraxtal: () => f,
          Fx: () => u,
          Hinkal: () => g,
          Hourglass: () => b,
          Inception: () => k,
          Kelpdao: () => x,
          LevelMoney: () => h,
          Lombard: () => w,
          Mellow: () => S,
          Pumpbtc: () => E,
          Resolv: () => y,
          SolvProtocol: () => v,
          StableLabs: () => N,
          Symbiotic: () => P,
          Taiko: () => L,
          TurtleSeeds: () => I,
          TurtleTotems: () => C,
          Usual: () => F,
          Vnx: () => j,
          YieldFi: () => D,
          YieldNest: () => A,
          Zunami: () => q,
        });
      let t = JSON.parse(
          '[{"campaign":"Ethena.json"},{"campaign":"Etherfi.json"},{"campaign":"Kelpdao.json"},{"campaign":"DLCLink.json"},{"campaign":"Mellow.json"},{"campaign":"Symbiotic.json"},{"campaign":"Usual.json"},{"campaign":"Elixir.json"},{"campaign":"YieldNest.json"},{"campaign":"Fraxtal.json"},{"campaign":"Resolv.json"},{"campaign":"Lombard.json"},{"campaign":"TurtleSeeds.json"},{"campaign":"SolvProtocol.json"},{"campaign":"Hinkal.json"},{"campaign":"Inception.json"},{"campaign":"TurtleTotems.json"},{"campaign":"LevelMoney.json"},{"campaign":"DTrinity.json"},{"campaign":"YieldFi.json"},{"campaign":"Babylon.json"},{"campaign":"Vnx.json"},{"campaign":"Hourglass.json"},{"campaign":"Fx.json"},{"campaign":"Pumpbtc.json"},{"campaign":"Carrot.json"},{"campaign":"Bills.json"},{"campaign":"StableLabs.json"},{"campaign":"Taiko.json"},{"campaign":"Zunami.json"}]'
        ),
        l = JSON.parse(
          '{"campaignName":"Babylon Points","platform":"Babylon","description":"Points for providing liquidity.","platformImageId":"babylon.png","dashboardLink":"https://babylonlabs.io/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"1734652800","campaignEnd":"1738540800","address":"0xab3291b73a1087265e126e330cede0cfd4b8a693","network":"corn","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1734652800","campaignEnd":"1738540800","address":"0xb27d447cf1d211ca60676728ac28060ecfb90800","network":"corn","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1734652800","campaignEnd":"1738540800","address":"0xa1174d3af66ad2fd7c6d5c7b458b6da38988cd56","network":"corn","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1734652800","campaignEnd":"1738540800","address":"0xf59aa8acd7944abecf804e455a22b65f285af534","network":"corn","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1734652800","campaignEnd":"1738540800","address":"0x29c1b0baa9ac0182cf9f6ffceaf143f3ef3546a0","network":"corn","multiplier":"1x","tags":["points"],"lock":"false"}]}'
        ),
        o = JSON.parse(
          '{"campaignName":"Bills","platform":"OpenEden","description":"Points for providing liquidity.","platformImageId":"bills.png","dashboardLink":"https://portal.openeden.com/bills-campaign/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x90455bd11ce8a67c57d467e634dc142b8e4105aa","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"}]}'
        ),
        r = JSON.parse(
          '{"campaignName":"Carrot","platform":"Puffer","description":"Points for providing liquidity.","platformImageId":"carrot.png","dashboardLink":"https://app.puffer.fi/defi/","pools":[{"id":"null","action":"lp","description":"CARROT tokens are tokenized Puffer points.","campaignStart":"0","campaignEnd":"1770000000","address":"0xeeda34a377dd0ca676b9511ee1324974fa8d980d","network":"ethereum","multiplier":"carrot","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"CARROT tokens are tokenized Puffer points.","campaignStart":"0","campaignEnd":"1770000000","address":"0x39f5b252de249790faed0c2f05abead56d2088e1","network":"ethereum","multiplier":"carrot","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"CARROT tokens are tokenized Puffer points.","campaignStart":"0","campaignEnd":"1770000000","address":"0x4f87158350c296955966059c50263f711ce0817c","network":"ethereum","multiplier":"carrot","tags":["points"],"lock":"false"}]}'
        ),
        d = JSON.parse(
          '{"campaignName":"","platform":"DLC.Link","description":"Points for staking LP tokens.","platformImageId":"dlc_link.png","dashboardLink":"https://www.dlc.link/earn-with-dlcbtc","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xe957ce03ccdd88f02ed8b05c9a3a28abef38514a","network":"arbitrum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x3e293db65c81742e32b74e21a0787d2936beedf7","network":"arbitrum","multiplier":"5x","tags":["points"],"lock":"false"}]}'
        ),
        s = JSON.parse(
          '{"campaignName":"dT Points","platform":"dTRINITY","description":"Points for providing liquidity.","platformImageId":"dtrinity.png","dashboardLink":"https://app.dtrinity.org/dlend/points/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x9ca648d2f51098941688db9a0beb1dadc2d1b357","network":"fraxtal","multiplier":"50x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xf16f226baa419d9dc9d92c040ccbc8c0e25f36d7","network":"fraxtal","multiplier":"50x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x5eCFA6940a33A2dAd5c473896452f018c6c04577","network":"fraxtal","multiplier":"50x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x40F1DAd51055A693Dc6D0a8d68A3E7e2Ae13031A","network":"sonic","multiplier":"50x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xdb81ee19ea2E5E1acA04f55D9C6c4188C36a81Fe","network":"sonic","multiplier":"50x","tags":["points"],"lock":"false"}]}'
        ),
        c = JSON.parse(
          '{"campaignName":"Potions","platform":"Elixir","description":"Points for providing liquidity.","platformImageId":"Elixir.png","dashboardLink":"https://www.elixir.xyz/apothecary","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x5f6c431ac417f0f430b84a666a563fabe681da94","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xb478bf40dd622086e0d0889eebbadcb63806adde","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x7c4e143b23d72e6938e06291f705b5ae3d5c7c7c","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x88dfb9370fe350aa51ade31c32549d4d3a24faf2","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x6691dbb44154a9f23f8357c56fc9ff5548a8bdc4","network":"ethereum","multiplier":"10x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x82202caec5e6d85014eadc68d4912f3c90093e7c","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x7fd04c3eb261308154789db3a363df789b53644f","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x080A4941aad94dDC19C2fEd604D55109119b5774","network":"ethereum","multiplier":"15x","tags":["points"],"lock":"false"}]}'
        ),
        p = JSON.parse(
          '{"campaignName":"","platform":"Ethena","description":"Points for providing liquidity.","platformImageId":"ethena.png","dashboardLink":"https://app.ethena.fi/liquidity","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xf8db2accdef8e7a26b0e65c3980adc8ce11671a4","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"true"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x02950460e2b9529d0e00284a5fa2d7bdf3fa4d72","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"true"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x670a72e6d22b0956c0d2573288f82dcc5d6e3a61","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"true"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x1c34204fcfe5314dcf53be2671c02c35db58b4e3","network":"arbitrum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x74f88baa966407b50c10b393bbd789639effe78b","network":"ethereum","multiplier":"20x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xb536fea3a01c95dd09932440ec802a75410139d6","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x096a8865367686290639bc50bf8d85c0110d9fea","network":"arbitrum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x167478921b907422f8e88b43c4af2b8bea278d3a","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"true"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0xd29f8980852c2c76fc3f6e96a7aa06e0bedcc1b1","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x68984391a8ce6203067ee65ff7eed38c7e0d2d88","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x8b4e5263e8d6cc0bbf31edf14491fc6077b88229","network":"fraxtal","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x1e199dbe1f7aa237282fe941d5bcc3b167c8ce48","network":"fraxtal","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x2d9bf9c1befd77c094461df615bdbe905895f7c6","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"true"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x4b5e827f4c0a1042272a11857a355da1f4ceebae","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x59a06b97b2d566b9dee2a368eac8787cfa57f95d","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x3bd1017929b43c1414be2aca39892590fba4d6e2","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0xdbb1d219d84eacefb850ee04cacf2f1830934580","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x3cef1afc0e8324b57293a6e7ce663781bbefbb79","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0x5b03cccab7ba3010fa5cad23746cbf0794938e96","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"LP tokens staked in gauge are excluded from Ethena campaign","campaignStart":"0","campaignEnd":"1770000000","address":"0xF16f226Baa419d9DC9D92C040CCBC8c0E25F36D7","network":"fraxtal","multiplier":"30x","tags":["points"],"lock":"false"}]}'
        ),
        m = JSON.parse(
          '{"campaignName":"","platform":"Ether.fi","description":"Points for providing liquidity.","platformImageId":"etherfi.png","dashboardLink":"https://app.ether.fi/defi","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x278cfb6f06b1efc09d34fc7127d6060c61d629db","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xdb74dfdd3bb46be8ce6c33dc9d82777bcfc3ded5","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x6683eafe46cb9ed394f298e14b87ed680c17cedd","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xb9ef9c471f686e9249f5bb3af465560e4b917294","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x2fd6965730bef5c7e928342ad6e7d4819d08f8c4","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xcccd572b22dee28479b11dd99589a1e4c0682a7e","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x6a8a274a670484fc358ab5ae00a1e0aa9ab11ae6","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xb92b054b9cc33685e7f8c3f85177c4b6dc061391","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x7704d01908afd31bf647d969c295bb45230cd2d6","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"},{"id":"null","action":"","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xabaf76590478f2fe0b396996f55f0b61101e9502","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"},{"id":"null","action":"loan","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x652aEa6B22310C89DCc506710CaD24d2Dba56B11","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"}]}'
        ),
        f = JSON.parse(
          '{"campaignName":"FXTL","platform":"Fraxtal","description":"Points for providing liquidity.","platformImageId":"fraxtal.png","dashboardLink":"https://www.frax.com/flox/leaderboard/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xa0d3911349e701a1f49c1ba2dda34b4ce9636569","network":"fraxtal","multiplier":"5.83x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x2421176aea0def263805a9c87f6c9d10147b8a93","network":"fraxtal","multiplier":"43.75x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x63d64a76c2d616676cbac3068d3c6548f8485314","network":"fraxtal","multiplier":"15.313x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xbc3705b2bfd42d38e8fa2c8efdc3fdda645c3b2a","network":"fraxtal","multiplier":"20x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xee454138083b9b9714cac3c7cf12560248d76d6b","network":"fraxtal","multiplier":"34.063x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x4cfc391d75c43cf1bdb368e8bf680aed1228df39","network":"fraxtal","multiplier":"155.938x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x3df1658e3e76d14ef3c4d410829ea7575bb83b9b","network":"fraxtal","multiplier":"6.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x3a38e9b0b5cb034de01d5298fc2ed2d793c0c36f","network":"fraxtal","multiplier":"6.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x6e9b6660b94fa74a8087d7ee14dc28698249d242","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xf2f426fe123de7b769b2d4f8c911512f065225d3","network":"fraxtal","multiplier":"2.3125x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x8fd56bcfba75718dd1b920c854256b0c5f4a7401","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xc68f91ffa2b27147f9ab153267018f5fe4b6850f","network":"fraxtal","multiplier":"2.125x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x279a23349fa48ea5215d31666aff359dbbec1404","network":"fraxtal","multiplier":"6.25x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xf0922934f16dbe5df9f90f729b2023d5e1fc2f15","network":"fraxtal","multiplier":"12.5x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xa7573cbd8738ed268b931b038079f993e78d4216","network":"fraxtal","multiplier":"6.25x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xb4ebf87a474569d8eb7f7182b4bebd8ae79ae675","network":"fraxtal","multiplier":"2.125x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x0edf4a3762deb5329ecdbdeda98d287ae41fbb7e","network":"fraxtal","multiplier":"6.25x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x99d5b47d431f1963940f72ffa6f25bc0b9849cbf","network":"fraxtal","multiplier":"1.25x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x040efc9a141d7fa47745751c253e02d065c90bdb","network":"fraxtal","multiplier":"6.25x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x385540fda649a114ffeb943fd73ae82ce7908da3","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xcaef324bea3ff5c7a08710081294f3344ffadc54","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x35c6c59277f8fa9ae98dea29b0546d79957acdd8","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x63eb7846642630456707c3efbb50a03c79b89d81","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xf25e1db1f0c7bd1a29761a1fcdae187b8718cf18","network":"fraxtal","multiplier":"1.6875x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x9ca648d2f51098941688db9a0beb1dadc2d1b357","network":"fraxtal","multiplier":"1.875x","tags":["points"],"lock":"false"}]}'
        ),
        u = JSON.parse(
          '{"campaignName":"","platform":"F(x) Protocol","description":"External token rewards for providing liquidity.","platformImageId":"fx.png","dashboardLink":"https://fx.aladdin.club/","pools":[{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on f(x) Protocol and earn FXN rewards or on Convex and earn CRV and FXN rewards. For more information please visit f(x) Protocol","campaignStart":"0","campaignEnd":"1770000000","address":"0x5018be882dcce5e3f2f3b0913ae2096b9b3fb61f","network":"ethereum","multiplier":"FXN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on f(x) Protocol and earn FXN rewards or on Convex and earn CRV and FXN rewards. For more information please visit f(x) Protocol","campaignStart":"0","campaignEnd":"1770000000","address":"0x74345504eaea3d9408fc69ae7eb2d14095643c5b","network":"ethereum","multiplier":"FXN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on f(x) Protocol and earn FXN rewards or on Convex and earn CRV and FXN rewards. For more information please visit f(x) Protocol","campaignStart":"0","campaignEnd":"1770000000","address":"0x189b4e49b5caf33565095097b4b960f14032c7d0","network":"ethereum","multiplier":"FXN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on f(x) Protocol and earn FXN rewards or on Convex and earn CRV and FXN rewards. For more information please visit f(x) Protocol","campaignStart":"0","campaignEnd":"1770000000","address":"0xc15f285679a1ef2d25f53d4cbd0265e1d02f2a92","network":"ethereum","multiplier":"FXN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on f(x) Protocol and earn FXN rewards or on Convex and earn CRV and FXN rewards. For more information please visit f(x) Protocol","campaignStart":"0","campaignEnd":"1770000000","address":"0x8ffc7b89412efd0d17edea2018f6634ea4c2fcb2","network":"ethereum","multiplier":"FXN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on f(x) Protocol and earn FXN rewards or on Convex and earn CRV and FXN rewards. For more information please visit f(x) Protocol","campaignStart":"0","campaignEnd":"1770000000","address":"0x13eA95Ce68185e334d3747539845A3b7643a8cab","network":"ethereum","multiplier":"FXN","tags":["tokens"],"lock":"false"}]}'
        ),
        g = JSON.parse(
          '{"campaignName":"","platform":"Hinkal","description":"Points for providing liquidity.","platformImageId":"hinkal.png","dashboardLink":"https://app.hinkal.pro/anonymity-staking/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x1f7e9321ce32af1f9ea1185fd10d31fea31ffd95","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"}]}'
        ),
        b = JSON.parse(
          '{"campaignName":"Hourglass Points","platform":"Hourglass","description":"Points for providing liquidity.","platformImageId":"hourglass.png","dashboardLink":"https://hourglass.com/boost/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"1736874600","campaignEnd":"1742947200","address":"0xebe423b5466f9675669b2a4521b6e9f852dd1f52","network":"corn","multiplier":"4x","tags":["points"],"lock":"true"},{"id":"null","action":"lp","description":"null","campaignStart":"1736874600","campaignEnd":"1742947200","address":"0xf34a494e2e148d3227a2e8eea70d58bcbe88b188","network":"corn","multiplier":"4x","tags":["points"],"lock":"true"}]}'
        ),
        k = JSON.parse(
          '{"campaignName":"Totems","platform":"InceptionLRT","description":"Points for providing liquidity.","platformImageId":"inception.png","dashboardLink":"https://www.inceptionlrt.com/app/defi/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x5fc50c99e175dfeb8faa7613e050645583ac1501","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"}]}'
        ),
        x = JSON.parse(
          '{"campaignName":"Kernel Points","platform":"Kelp DAO","description":"Points for providing liquidity","platformImageId":"kelpdao-kernels.png","dashboardLink":"https://kelpdao.xyz/dashboard/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x6683eafe46cb9ed394f298e14b87ed680c17cedd","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x3772ba91b46f456ae487cb0974040c861c045810","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"}]}'
        ),
        h = JSON.parse(
          '{"campaignName":"","platform":"LevelMoney","description":"Points for providing liquidity.","platformImageId":"levelmoney.png","dashboardLink":"https://www.level.money/dashboard/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"1725109200","campaignEnd":"1770000000","address":"0x1220868672d5b10f3e1cb9ab519e4d0b08545ea4","network":"ethereum","multiplier":"40XP","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xf244324fbb57f09f0606ff088bc894b051d632eb","network":"ethereum","multiplier":"40XP","tags":["points"],"lock":"false"}]}'
        ),
        w = JSON.parse(
          '{"campaignName":"Lombard Lux","platform":"Lombard","description":"Points for providing liquidity.","platformImageId":"lombard.png","dashboardLink":"https://www.lombard.finance/app/dashboard/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x2f3bc4c27a4437aeca13de0e37cdf1028f3706f0","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xabaf76590478f2fe0b396996f55f0b61101e9502","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xc28c2fd809fc1795f90de1c9da2131434a77721d","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x88bddb9293f3efa2cea349e184c656ae0817ac87","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"}]}'
        ),
        S = JSON.parse(
          '{"campaignName":"","platform":"Mellow Protocol","description":"Points for providing liquidity.","platformImageId":"mellow.png","dashboardLink":"https://app.mellow.finance/restake","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x8c65cec3847ad99bdc02621bdbc89f2ace56934b","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xcec99cff3632cf1f16652cc5b1e80eb08be25983","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x5fc50c99e175dfeb8faa7613e050645583ac1501","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"}]}'
        ),
        E = JSON.parse(
          '{"campaignName":"PumpPoints","platform":"PumpBTC","description":"Points for providing liquidity.","platformImageId":"pump-points.png","dashboardLink":"https://mainnet.pumpbtc.xyz/defi/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xea659b615b48ec6e2d55cd82fcbe5f43d79aeea0","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"}]}'
        ),
        y = JSON.parse(
          '{"campaignName":"Resolv Points","platform":"Resolv","description":"Points for providing liquidity.","platformImageId":"resolv.png","dashboardLink":"https://app.resolv.xyz/points/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x3ee841f47947fefbe510366e4bbb49e145484195","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x8e001d4bac0eae1eea348dfc22f9b8bda67dd211","network":"ethereum","multiplier":"20x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xc907ba505c2e1cbc4658c395d4a2c7e6d2c32656","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x4628f13651ead6793f8d838b34b8f8522fb0cc52","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x38de22a3175708d45e7c7c64cd78479c8b56f76e","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xD552716F3BBA4224a19D7eB37A31650d7Ae10144","network":"ethereum","multiplier":"30x","tags":["points"],"lock":"false"}]}'
        ),
        v = JSON.parse(
          '{"campaignName":"Solv points","platform":"SolvProtocol","description":"Points for providing liquidity.","platformImageId":"solv.png","dashboardLink":"https://app.solv.finance/defi/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"1727132400","campaignEnd":"1736207999","address":"0xf1005ac82e89de676449525c3cb86959216864c1","network":"ethereum","multiplier":"14XP","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1727132400","campaignEnd":"1736207999","address":"0x8ea96fc70c577d59528c98c31bc4bf39027c1c3e","network":"ethereum","multiplier":"14XP","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1736208000","campaignEnd":"1770000000","address":"0xf1005ac82e89de676449525c3cb86959216864c1","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1736208000","campaignEnd":"1770000000","address":"0x8ea96fc70c577d59528c98c31bc4bf39027c1c3e","network":"ethereum","multiplier":"4x","tags":["points"],"lock":"false"}]}'
        ),
        N = JSON.parse(
          '{"campaignName":"S-points","platform":"Stables Labs","description":"Points for providing liquidity.","platformImageId":"s-points.png","dashboardLink":"https://app.usdx.money/airdrop/","pools":[{"id":"null","action":"lp","description":"Earn 1 S-Point per dollar daily, with up to 2.5x booster multiplier. For more information please visit usdx.money Dapp.","campaignStart":"0","campaignEnd":"1770000000","address":"0x3f131bb401c5f322bce82e1f06fb25aca08d3f7e","network":"ethereum","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"Earn 1 S-Point per dollar daily, with up to 2.5x booster multiplier. For more information please visit usdx.money Dapp.","campaignStart":"0","campaignEnd":"1770000000","address":"0x541d4752d992046787d3a21be1daff8e816bb02e","network":"ethereum","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"Earn 1 S-Point per dollar daily, with up to 2.5x booster multiplier. For more information please visit usdx.money Dapp.","campaignStart":"0","campaignEnd":"1770000000","address":"0x80eb9a1b48df52534430a7dc11e63c73669d5a06","network":"bsc","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"Earn 1 S-Point per dollar daily, with up to 2.5x booster multiplier. For more information please visit usdx.money Dapp.","campaignStart":"0","campaignEnd":"1770000000","address":"0x7be2dbf222eec2c2f06e05eab88c168b37144933","network":"bsc","multiplier":"2.5x","tags":["points"],"lock":"false"}]}'
        ),
        P = JSON.parse(
          '{"campaignName":"","platform":"Symbiotic.fi","description":"Points for providing liquidity.","platformImageId":"symbiotic.png","dashboardLink":"https://app.symbiotic.fi/dashboard","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x8c65cec3847ad99bdc02621bdbc89f2ace56934b","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xcec99cff3632cf1f16652cc5b1e80eb08be25983","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x73e4bec1a111869f395cbb24f6676826bf86d905","network":"ethereum","multiplier":"0-1x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x5fc50c99e175dfeb8faa7613e050645583ac1501","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"}]}'
        ),
        L = JSON.parse(
          '{"campaignName":"Liquidity Royale","platform":"Taiko","description":"Points for providing liquidity.","platformImageId":"taiko.png","dashboardLink":"https://trailblazers.taiko.xyz/journeys/liquidity/3/","pools":[{"id":"null","action":"lp","description":"Join Liquidity Royale, with the total reward pool of 1 Million TAIKO tokens. But now, in two tracks based on the assets provided as liquidity. Please visit issuer for more information.","campaignStart":"0","campaignEnd":"1770000000","address":"0xB391F2D5B83B3900997B4D6880ba7818Bef3591a","network":"taiko","multiplier":"Liquidity Royale","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"Join Liquidity Royale, with the total reward pool of 1 Million TAIKO tokens. But now, in two tracks based on the assets provided as liquidity. Please visit issuer for more information.","campaignStart":"0","campaignEnd":"1770000000","address":"0x761BEe8c6ec207CFf409456cdf6856818cD0b83c","network":"taiko","multiplier":"Liquidity Royale","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"Join Liquidity Royale, with the total reward pool of 1 Million TAIKO tokens. But now, in two tracks based on the assets provided as liquidity. Please visit issuer for more information.","campaignStart":"0","campaignEnd":"1770000000","address":"0x3da34fBc8FF2Bf12a4dfD499a2361823E348d8D7","network":"taiko","multiplier":"Liquidity Royale","tags":["points"],"lock":"false"}]}'
        ),
        I = JSON.parse(
          '{"campaignName":"Turtle Seeds","platform":"Turtle Club","description":"Points for providing liquidity.","platformImageId":"turtle-seeds.png","dashboardLink":"https://app.turtle.club/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x19b8524665abac613d82ece5d8347ba44c714bdd","network":"ethereum","multiplier":"1.1x","tags":["points"],"lock":"false"}]}'
        ),
        C = JSON.parse(
          '{"campaignName":"Turtle InceptionLRT points","platform":"Turtle Club","description":"Points for providing liquidity.","platformImageId":"turtle-inception.png","dashboardLink":"https://app.turtle.club/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x5fc50c99e175dfeb8faa7613e050645583ac1501","network":"ethereum","multiplier":"1x","tags":["points"],"lock":"false"}]}'
        ),
        F = JSON.parse(
          '{"campaignName":"","platform":"Usual","description":"External token rewards for providing liquidity.","platformImageId":"usual.png","dashboardLink":"https://app.usual.money/","pools":[{"id":"null","action":"lp","description":"The Usual Pills points campaign has been replaced with USUAL tokens. This pool is actively rewarded with USUAL. Please visit Usual\'s Dapp for more information. No user action is required.","campaignStart":"0","campaignEnd":"1770000000","address":"0x1d08e7adc263cfc70b1babe6dc5bb339c16eec52","network":"ethereum","multiplier":"usual","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"The Usual Pills points campaign has been replaced with USUAL tokens. This pool is actively rewarded with USUAL. Please visit Usual\'s Dapp for more information. No user action is required.","campaignStart":"0","campaignEnd":"1770000000","address":"0x14100f81e33c33ecc7cdac70181fb45b6e78569f","network":"ethereum","multiplier":"usual","tags":["tokens"],"lock":"false"}]}'
        ),
        j = JSON.parse(
          '{"campaignName":"VNX Points","platform":"VNX","description":"Points for providing liquidity.","platformImageId":"vnx.png","dashboardLink":"https://vnx.community/dashboard","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xda73dc70d5ca3f51b0000c308abcd358b5f3fefe","network":"fraxtal","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x77146b0a1d08b6844376df6d9da99ba7f1b19e71","network":"fraxtal","multiplier":"2x","tags":["points"],"lock":"false"}]}'
        ),
        D = JSON.parse(
          '{"campaignName":"YieldCrumbs","platform":"YieldFi","description":"Points for providing liquidity.","platformImageId":"yieldfi.png","dashboardLink":"https://yield.fi/portfolio/","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x169a5f124a3663a25313ee0f7f3bff028728867f","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xc5f859f5aa1881cff4521c513982799895f7d01a","network":"arbitrum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x9353976a6b6e7a9e1e9b1f2aaaba629ad310947f","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0xD552716F3BBA4224a19D7eB37A31650d7Ae10144","network":"ethereum","multiplier":"2x","tags":["points"],"lock":"false"}]}'
        ),
        A = JSON.parse(
          '{"campaignName":"Seeds","platform":"YieldNest","description":"Points for providing liquidity.","platformImageId":"yieldnest.png","dashboardLink":"https://app.yieldnest.finance/earn","pools":[{"id":"null","action":"lp","description":"null","campaignStart":"1721692800","campaignEnd":"1723420799","address":"0x19b8524665abac613d82ece5d8347ba44c714bdd","network":"ethereum","multiplier":"10x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1723420801","campaignEnd":"1724716799","address":"0x19b8524665abac613d82ece5d8347ba44c714bdd","network":"ethereum","multiplier":"5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1724716801","campaignEnd":"1770000000","address":"0x19b8524665abac613d82ece5d8347ba44c714bdd","network":"ethereum","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"1728993600","campaignEnd":"1730203199","address":"0x143985860efaeacb92db23e4b0c4d66be51b08d2","network":"ethereum","multiplier":"6x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"1730203200","campaignEnd":"1770000000","address":"0x143985860efaeacb92db23e4b0c4d66be51b08d2","network":"ethereum","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"1728993600","campaignEnd":"1730203199","address":"0x52036c9046247c3358c987a2389ffde6ef8564c9","network":"ethereum","multiplier":"6x","tags":["points"],"lock":"false"},{"id":"null","action":"supply","description":"null","campaignStart":"1730203200","campaignEnd":"1770000000","address":"0x52036c9046247c3358c987a2389ffde6ef8564c9","network":"ethereum","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1733479200","campaignEnd":"1734688799","address":"0xd65ed4bce447195187f37ce7d82f56adf1826f8f","network":"ethereum","multiplier":"6x","tags":["points"],"lock":"false"},{"id":"null","action":"lp","description":"null","campaignStart":"1734688800","campaignEnd":"1770000000","address":"0xd65ed4bce447195187f37ce7d82f56adf1826f8f","network":"ethereum","multiplier":"2.5x","tags":["points"],"lock":"false"},{"id":"null","action":"borrow","description":"null","campaignStart":"0","campaignEnd":"1770000000","address":"0x6f91f33Ac7122F025b73206239CbC81606F022D4","network":"ethereum","multiplier":"3x","tags":["points"],"lock":"false"}]}'
        ),
        q = JSON.parse(
          '{"campaignName":"ZUN","platform":"Zunami","description":"External token rewards for providing liquidity.","platformImageId":"zun.png","dashboardLink":"https://app.zunami.io/earn","pools":[{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on Zunami protocol and earn ZUN rewards. For more information please visit Zunami protocol.","campaignStart":"0","campaignEnd":"1770000000","address":"0x17D964DA2bD337CfEaEd30a27c9Ab6580676E730","network":"ethereum","multiplier":"ZUN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on Zunami protocol and earn ZUN rewards. For more information please visit Zunami protocol.","campaignStart":"0","campaignEnd":"1770000000","address":"0x13eA95Ce68185e334d3747539845A3b7643a8cab","network":"ethereum","multiplier":"ZUN","tags":["tokens"],"lock":"false"},{"id":"null","action":"lp","description":"Deposit your Curve LP tokens on Zunami protocol and earn ZUN rewards. For more information please visit Zunami protocol.","campaignStart":"0","campaignEnd":"1770000000","address":"0x6fBc5Ddc181240Cb1d9bcEc6Fdea429036818035","network":"ethereum","multiplier":"ZUN","tags":["tokens"],"lock":"false"}]}'
        ),
        O = t
          .map(({ campaign: a }) => {
            let e = a.split('.')?.[0];
            return e && e in n
              ? {
                  ...n[e],
                  pools: n[e].pools.filter((a) => {
                    let e = Date.now() / 1e3;
                    if ('0' === a.campaignStart || '0' === a.campaignEnd) return !0;
                    let i = new Date(+a.campaignStart).getTime(),
                      n = new Date(+a.campaignEnd).getTime();
                    return e >= i && e <= n;
                  }),
                }
              : null;
          })
          .filter(Boolean);
    },
    86854: (a, e, i) => {
      i.d(e, { A: () => w });
      var n = i(54568),
        t = i(61773),
        l = i(48341),
        o = i(64387),
        r = i(35736),
        d = i(77241);
      let s = l.Ay.div.withConfig({ componentId: 'sc-e77517e5-0' })([
          'display:flex;flex-direction:column;gap:var(--spacing-2);text-align:left;z-index:2;',
        ]),
        c = l.Ay.h3.withConfig({ componentId: 'sc-e77517e5-1' })([
          'font-size:var(--font-size-3);font-weight:var(--semi-bold);text-align:left;',
        ]),
        p = l.Ay.p.withConfig({ componentId: 'sc-e77517e5-2' })([
          'text-align:left;font-weight:normal;',
        ]),
        m = l.Ay.p.withConfig({ componentId: 'sc-e77517e5-3' })([
          'text-align:left;font-weight:normal;font-size:var(--font-size-2);font-style:italic;',
        ]),
        f = ({ rewardsPool: a }) => {
          let {
              campaignName: e,
              platform: i,
              description: t,
              action: l,
              dashboardLink: f,
              campaignStart: u,
              campaignEnd: g,
            } = a,
            b = (0, d.Yq)(new Date(1e3 * +u)),
            k = (0, d.Yq)(new Date(1e3 * +g));
          return (0, n.jsxs)(s, {
            children: [
              e && i
                ? (0, n.jsxs)(o.A, {
                    flex: !0,
                    flexColumn: !0,
                    children: [
                      (0, n.jsx)(c, { children: e }),
                      (0, n.jsxs)(p, { children: ['by ', i] }),
                    ],
                  })
                : e
                  ? (0, n.jsx)(c, { children: e })
                  : (0, n.jsx)(c, { children: i }),
              u &&
                '0' !== u &&
                g &&
                '0' !== g &&
                (0, n.jsxs)(o.A, {
                  flex: !0,
                  flexColumn: !0,
                  children: [
                    (0, n.jsx)(p, { children: `from: ${b}` }),
                    (0, n.jsx)(p, { children: `to: ${k}` }),
                  ],
                }),
              (0, n.jsx)(p, {
                children:
                  'lp' === l
                    ? t
                    : 'supply' === l
                      ? 'Earn points by supplying liquidity.'
                      : 'Earn points by borrowing.',
              }),
              (0, n.jsx)(m, {
                children:
                  'External rewards are project dependent, always check with the token issuer to make sure you have taken all the necessary actions to benefit from their rewards program.',
              }),
              (0, n.jsx)(r.G, { $noStyles: !0, href: f, children: 'Go to issuer' }),
            ],
          });
        };
      var u = i(56457),
        g = i(50567);
      let b = l.Ay.div.withConfig({ componentId: 'sc-a3b97d0f-0' })(
          [
            'display:flex;flex-direction:row;align-items:center;gap:var(--spacing-1);padding:var(--spacing-1);border:',
            ';',
          ],
          ({ highContrast: a }) => (a ? '1px solid var(--white)' : '1px solid var(--gray-500a25)')
        ),
        k = (0, l.Ay)(t.default).withConfig({ componentId: 'sc-a3b97d0f-1' })([
          'border:1px solid transparent;border-radius:50%;',
        ]),
        x = l.Ay.p.withConfig({ componentId: 'sc-a3b97d0f-2' })(
          ['text-transform:uppercase;font-size:var(--font-size-3);color:', ';white-space:nowrap;'],
          ({ highContrast: a }) => (a ? 'var(--white)' : 'var(--page--text-color)')
        ),
        h = (0, l.Ay)(u.A).withConfig({ componentId: 'sc-a3b97d0f-3' })(
          ['color:', ';'],
          ({ $highContrast: a }) => (a ? 'var(--white)' : 'var(--page--text-color)')
        ),
        w = ({ rewardsPool: a, highContrast: e, mobile: i, banner: t }) => {
          let { platform: l, multiplier: o, platformImageSrc: r } = a;
          return (0, n.jsx)(g.Ay, {
            tooltip: (0, n.jsx)(f, { rewardsPool: a }),
            minWidth: '200px',
            placement: i ? 'top' : 'auto',
            increaseZIndex: t,
            children: (0, n.jsxs)(b, {
              highContrast: e,
              children: [
                (0, n.jsx)(k, { src: r, alt: l, width: 16, height: 16 }),
                !!o && (0, n.jsx)(x, { highContrast: e, children: `${o}` }),
                a.lock && (0, n.jsx)(h, { size: 16, name: 'Locked', $highContrast: e }),
              ],
            }),
          });
        };
    },
    95292: (a, e, i) => {
      i.d(e, { A: () => t });
      var n = i(7620);
      function t(a, e, i) {
        let t = (0, n.useRef)(null),
          l = (0, n.useRef)(a);
        (0, n.useEffect)(() => {
          l.current = a;
        }, [a]),
          (0, n.useEffect)(() => {
            if (null !== e && i) {
              let a = setInterval(function () {
                l.current();
              }, e);
              return (t.current = a), () => clearInterval(a);
            }
          }, [e, i]);
      }
    },
  },
]);
