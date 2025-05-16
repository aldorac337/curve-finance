'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8238],
  {
    3969: (t, e, s) => {
      s.d(e, { $1: () => o, LJ: () => n, wZ: () => a });
      var r = s(7620),
        i = s(83777),
        n = (t, e) => {
          (t.suspense || t.throwOnError || t.experimental_prefetchInRender) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        a = (t) => {
          r.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        o = ({ result: t, errorResetBoundary: e, throwOnError: s, query: r, suspense: n }) =>
          t.isError &&
          !e.isReset() &&
          !t.isFetching &&
          r &&
          ((n && void 0 === t.data) || (0, i.G)(s, [t.error, r]));
    },
    7703: (t, e, s) => {
      s.d(e, {
        BH: () => y,
        Cp: () => f,
        EN: () => p,
        Eh: () => h,
        F$: () => d,
        MK: () => c,
        S$: () => r,
        ZM: () => Q,
        ZZ: () => S,
        Zw: () => n,
        d2: () => u,
        f8: () => v,
        gn: () => a,
        hT: () => w,
        j3: () => o,
        lQ: () => i,
        nJ: () => l,
        pl: () => C,
        y9: () => O,
        yy: () => R,
      });
      var r = 'undefined' == typeof window || 'Deno' in globalThis;
      function i() {}
      function n(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function a(t) {
        return 'number' == typeof t && t >= 0 && t !== 1 / 0;
      }
      function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function h(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function c(t, e) {
        let { type: s = 'all', exact: r, fetchStatus: i, predicate: n, queryKey: a, stale: o } = t;
        if (a) {
          if (r) {
            if (e.queryHash !== d(a, e.options)) return !1;
          } else if (!f(e.queryKey, a)) return !1;
        }
        if ('all' !== s) {
          let t = e.isActive();
          if (('active' === s && !t) || ('inactive' === s && t)) return !1;
        }
        return (
          ('boolean' != typeof o || e.isStale() === o) &&
          (!i || i === e.state.fetchStatus) &&
          (!n || !!n(e))
        );
      }
      function l(t, e) {
        let { exact: s, status: r, predicate: i, mutationKey: n } = t;
        if (n) {
          if (!e.options.mutationKey) return !1;
          if (s) {
            if (p(e.options.mutationKey) !== p(n)) return !1;
          } else if (!f(e.options.mutationKey, n)) return !1;
        }
        return (!r || e.state.status === r) && (!i || !!i(e));
      }
      function d(t, e) {
        return (e?.queryKeyHashFn || p)(t);
      }
      function p(t) {
        return JSON.stringify(t, (t, e) =>
          m(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, s) => ((t[s] = e[s]), t), {})
            : e
        );
      }
      function f(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            'object' == typeof t &&
            'object' == typeof e &&
            Object.keys(e).every((s) => f(t[s], e[s])))
        );
      }
      function y(t, e) {
        if (t === e) return t;
        let s = b(t) && b(e);
        if (s || (m(t) && m(e))) {
          let r = s ? t : Object.keys(t),
            i = r.length,
            n = s ? e : Object.keys(e),
            a = n.length,
            o = s ? [] : {},
            u = 0;
          for (let i = 0; i < a; i++) {
            let a = s ? i : n[i];
            ((!s && r.includes(a)) || s) && void 0 === t[a] && void 0 === e[a]
              ? ((o[a] = void 0), u++)
              : ((o[a] = y(t[a], e[a])), o[a] === t[a] && void 0 !== t[a] && u++);
          }
          return i === a && u === i ? t : o;
        }
        return e;
      }
      function v(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let s in t) if (t[s] !== e[s]) return !1;
        return !0;
      }
      function b(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function m(t) {
        if (!g(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let s = e.prototype;
        return (
          !!(g(s) && s.hasOwnProperty('isPrototypeOf')) &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function g(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      }
      function R(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function C(t, e, s) {
        return 'function' == typeof s.structuralSharing
          ? s.structuralSharing(t, e)
          : !1 !== s.structuralSharing
            ? y(t, e)
            : e;
      }
      function O(t, e, s = 0) {
        let r = [...t, e];
        return s && r.length > s ? r.slice(1) : r;
      }
      function S(t, e, s = 0) {
        let r = [e, ...t];
        return s && r.length > s ? r.slice(0, -1) : r;
      }
      var w = Symbol();
      function Q(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== w
            ? t.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
    },
    17566: (t, e, s) => {
      s.d(e, { t: () => d });
      var r = s(7620),
        i = s(60494),
        n = s(7703),
        a = s(87606),
        o = s(24199),
        u = s(3969),
        h = s(61529),
        c = s(33444),
        l = s(83777);
      function d(t, e, s) {
        let d = (0, a.useQueryClient)(s),
          p = (0, h.useIsRestoring)(),
          f = (0, o.useQueryErrorResetBoundary)(),
          y = d.defaultQueryOptions(t);
        d.getDefaultOptions().queries?._experimental_beforeQuery?.(y),
          (y._optimisticResults = p ? 'isRestoring' : 'optimistic'),
          (0, c.jv)(y),
          (0, u.LJ)(y, f),
          (0, u.wZ)(f);
        let v = !d.getQueryCache().get(y.queryHash),
          [b] = r.useState(() => new e(d, y)),
          m = b.getOptimisticResult(y),
          g = !p && !1 !== t.subscribed;
        if (
          (r.useSyncExternalStore(
            r.useCallback(
              (t) => {
                let e = g ? b.subscribe(i.jG.batchCalls(t)) : l.l;
                return b.updateResult(), e;
              },
              [b, g]
            ),
            () => b.getCurrentResult(),
            () => b.getCurrentResult()
          ),
          r.useEffect(() => {
            b.setOptions(y);
          }, [y, b]),
          (0, c.EU)(y, m))
        )
          throw (0, c.iL)(y, b, f);
        if (
          (0, u.$1)({
            result: m,
            errorResetBoundary: f,
            throwOnError: y.throwOnError,
            query: d.getQueryCache().get(y.queryHash),
            suspense: y.suspense,
          })
        )
          throw m.error;
        if (
          (d.getDefaultOptions().queries?._experimental_afterQuery?.(y, m),
          y.experimental_prefetchInRender && !n.S$ && (0, c.nE)(m, p))
        ) {
          let t = v ? (0, c.iL)(y, b, f) : d.getQueryCache().get(y.queryHash)?.promise;
          t?.catch(l.l).finally(() => {
            b.updateResult();
          });
        }
        return y.notifyOnChangeProps ? m : b.trackResult(m);
      }
    },
    21279: (t, e, s) => {
      s.d(e, { II: () => l, v_: () => u, wm: () => c });
      var r = s(51229),
        i = s(71116),
        n = s(22153),
        a = s(7703);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (t ?? 'online') !== 'online' || i.t.isOnline();
      }
      var h = class extends Error {
        constructor(t) {
          super('CancelledError'), (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function c(t) {
        return t instanceof h;
      }
      function l(t) {
        let e,
          s = !1,
          c = 0,
          l = !1,
          d = (0, n.T)(),
          p = () => r.m.isFocused() && ('always' === t.networkMode || i.t.isOnline()) && t.canRun(),
          f = () => u(t.networkMode) && t.canRun(),
          y = (s) => {
            l || ((l = !0), t.onSuccess?.(s), e?.(), d.resolve(s));
          },
          v = (s) => {
            l || ((l = !0), t.onError?.(s), e?.(), d.reject(s));
          },
          b = () =>
            new Promise((s) => {
              (e = (t) => {
                (l || p()) && s(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), l || t.onContinue?.();
            }),
          m = () => {
            let e;
            if (l) return;
            let r = 0 === c ? t.initialPromise : void 0;
            try {
              e = r ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(y)
              .catch((e) => {
                if (l) return;
                let r = t.retry ?? 3 * !a.S$,
                  i = t.retryDelay ?? o,
                  n = 'function' == typeof i ? i(c, e) : i,
                  u =
                    !0 === r ||
                    ('number' == typeof r && c < r) ||
                    ('function' == typeof r && r(c, e));
                if (s || !u) {
                  v(e);
                  return;
                }
                c++,
                  t.onFail?.(c, e),
                  (0, a.yy)(n)
                    .then(() => (p() ? void 0 : b()))
                    .then(() => {
                      s ? v(e) : m();
                    });
              });
          };
        return {
          promise: d,
          cancel: (e) => {
            l || (v(new h(e)), t.abort?.());
          },
          continue: () => (e?.(), d),
          cancelRetry: () => {
            s = !0;
          },
          continueRetry: () => {
            s = !1;
          },
          canStart: f,
          start: () => (f() ? m() : b().then(m), d),
        };
      }
    },
    22153: (t, e, s) => {
      s.d(e, { T: () => r });
      function r() {
        let t, e;
        let s = new Promise((s, r) => {
          (t = s), (e = r);
        });
        function r(t) {
          Object.assign(s, t), delete s.resolve, delete s.reject;
        }
        return (
          (s.status = 'pending'),
          s.catch(() => {}),
          (s.resolve = (e) => {
            r({ status: 'fulfilled', value: e }), t(e);
          }),
          (s.reject = (t) => {
            r({ status: 'rejected', reason: t }), e(t);
          }),
          s
        );
      }
    },
    24199: (t, e, s) => {
      s.d(e, { QueryErrorResetBoundary: () => u, useQueryErrorResetBoundary: () => o });
      var r = s(7620),
        i = s(54568);
      function n() {
        let t = !1;
        return {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        };
      }
      var a = r.createContext(n()),
        o = () => r.useContext(a),
        u = ({ children: t }) => {
          let [e] = r.useState(() => n());
          return (0, i.jsx)(a.Provider, { value: e, children: 'function' == typeof t ? t(e) : t });
        };
    },
    26759: (t, e, s) => {
      s.d(e, { k: () => i });
      var r = s(7703),
        i = class {
          #t;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.gn)(this.gcTime) &&
                (this.#t = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (r.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#t && (clearTimeout(this.#t), (this.#t = void 0));
          }
        };
    },
    28592: (t, e, s) => {
      s.d(e, { $: () => h });
      var r = s(51229),
        i = s(60494),
        n = s(42210),
        a = s(72327),
        o = s(22153),
        u = s(7703),
        h = class extends a.Q {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#e = t),
              (this.#s = null),
              (this.#r = (0, o.T)()),
              this.options.experimental_prefetchInRender ||
                this.#r.reject(Error('experimental_prefetchInRender feature flag is not enabled')),
              this.bindMethods(),
              this.setOptions(e);
          }
          #e;
          #i = void 0;
          #n = void 0;
          #a = void 0;
          #o;
          #u;
          #r;
          #s;
          #h;
          #c;
          #l;
          #d;
          #p;
          #f;
          #y = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#i.addObserver(this),
              c(this.#i, this.options) ? this.#v() : this.updateResult(),
              this.#b());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return l(this.#i, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return l(this.#i, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()), this.#m(), this.#g(), this.#i.removeObserver(this);
          }
          setOptions(t) {
            let e = this.options,
              s = this.#i;
            if (
              ((this.options = this.#e.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                'boolean' != typeof this.options.enabled &&
                'function' != typeof this.options.enabled &&
                'boolean' != typeof (0, u.Eh)(this.options.enabled, this.#i))
            )
              throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
            this.#R(),
              this.#i.setOptions(this.options),
              e._defaulted &&
                !(0, u.f8)(this.options, e) &&
                this.#e
                  .getQueryCache()
                  .notify({ type: 'observerOptionsUpdated', query: this.#i, observer: this });
            let r = this.hasListeners();
            r && d(this.#i, s, this.options, e) && this.#v(),
              this.updateResult(),
              r &&
                (this.#i !== s ||
                  (0, u.Eh)(this.options.enabled, this.#i) !== (0, u.Eh)(e.enabled, this.#i) ||
                  (0, u.d2)(this.options.staleTime, this.#i) !== (0, u.d2)(e.staleTime, this.#i)) &&
                this.#C();
            let i = this.#O();
            r &&
              (this.#i !== s ||
                (0, u.Eh)(this.options.enabled, this.#i) !== (0, u.Eh)(e.enabled, this.#i) ||
                i !== this.#f) &&
              this.#S(i);
          }
          getOptimisticResult(t) {
            var e, s;
            let r = this.#e.getQueryCache().build(this.#e, t),
              i = this.createResult(r, t);
            return (
              (e = this),
              (s = i),
              (0, u.f8)(e.getCurrentResult(), s) ||
                ((this.#a = i), (this.#u = this.options), (this.#o = this.#i.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#a;
          }
          trackResult(t, e) {
            let s = {};
            return (
              Object.keys(t).forEach((r) => {
                Object.defineProperty(s, r, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(r), e?.(r), t[r]),
                });
              }),
              s
            );
          }
          trackProp(t) {
            this.#y.add(t);
          }
          getCurrentQuery() {
            return this.#i;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#e.defaultQueryOptions(t),
              s = this.#e.getQueryCache().build(this.#e, e);
            return s.fetch().then(() => this.createResult(s, e));
          }
          fetch(t) {
            return this.#v({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#a)
            );
          }
          #v(t) {
            this.#R();
            let e = this.#i.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(u.lQ)), e;
          }
          #C() {
            this.#m();
            let t = (0, u.d2)(this.options.staleTime, this.#i);
            if (u.S$ || this.#a.isStale || !(0, u.gn)(t)) return;
            let e = (0, u.j3)(this.#a.dataUpdatedAt, t);
            this.#d = setTimeout(() => {
              this.#a.isStale || this.updateResult();
            }, e + 1);
          }
          #O() {
            return (
              ('function' == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#i)
                : this.options.refetchInterval) ?? !1
            );
          }
          #S(t) {
            this.#g(),
              (this.#f = t),
              !u.S$ &&
                !1 !== (0, u.Eh)(this.options.enabled, this.#i) &&
                (0, u.gn)(this.#f) &&
                0 !== this.#f &&
                (this.#p = setInterval(() => {
                  (this.options.refetchIntervalInBackground || r.m.isFocused()) && this.#v();
                }, this.#f));
          }
          #b() {
            this.#C(), this.#S(this.#O());
          }
          #m() {
            this.#d && (clearTimeout(this.#d), (this.#d = void 0));
          }
          #g() {
            this.#p && (clearInterval(this.#p), (this.#p = void 0));
          }
          createResult(t, e) {
            let s;
            let r = this.#i,
              i = this.options,
              a = this.#a,
              h = this.#o,
              l = this.#u,
              f = t !== r ? t.state : this.#n,
              { state: y } = t,
              v = { ...y },
              b = !1;
            if (e._optimisticResults) {
              let s = this.hasListeners(),
                a = !s && c(t, e),
                o = s && d(t, r, e, i);
              (a || o) && (v = { ...v, ...(0, n.k)(y.data, t.options) }),
                'isRestoring' === e._optimisticResults && (v.fetchStatus = 'idle');
            }
            let { error: m, errorUpdatedAt: g, status: R } = v;
            if (e.select && void 0 !== v.data) {
              if (a && v.data === h?.data && e.select === this.#h) s = this.#c;
              else
                try {
                  (this.#h = e.select),
                    (s = e.select(v.data)),
                    (s = (0, u.pl)(a?.data, s, e)),
                    (this.#c = s),
                    (this.#s = null);
                } catch (t) {
                  this.#s = t;
                }
            } else s = v.data;
            if (void 0 !== e.placeholderData && void 0 === s && 'pending' === R) {
              let t;
              if (a?.isPlaceholderData && e.placeholderData === l?.placeholderData) t = a.data;
              else if (
                ((t =
                  'function' == typeof e.placeholderData
                    ? e.placeholderData(this.#l?.state.data, this.#l)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#s = null);
                } catch (t) {
                  this.#s = t;
                }
              void 0 !== t && ((R = 'success'), (s = (0, u.pl)(a?.data, t, e)), (b = !0));
            }
            this.#s && ((m = this.#s), (s = this.#c), (g = Date.now()), (R = 'error'));
            let C = 'fetching' === v.fetchStatus,
              O = 'pending' === R,
              S = 'error' === R,
              w = O && C,
              Q = void 0 !== s,
              E = {
                status: R,
                fetchStatus: v.fetchStatus,
                isPending: O,
                isSuccess: 'success' === R,
                isError: S,
                isInitialLoading: w,
                isLoading: w,
                data: s,
                dataUpdatedAt: v.dataUpdatedAt,
                error: m,
                errorUpdatedAt: g,
                failureCount: v.fetchFailureCount,
                failureReason: v.fetchFailureReason,
                errorUpdateCount: v.errorUpdateCount,
                isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                isFetchedAfterMount:
                  v.dataUpdateCount > f.dataUpdateCount || v.errorUpdateCount > f.errorUpdateCount,
                isFetching: C,
                isRefetching: C && !O,
                isLoadingError: S && !Q,
                isPaused: 'paused' === v.fetchStatus,
                isPlaceholderData: b,
                isRefetchError: S && Q,
                isStale: p(t, e),
                refetch: this.refetch,
                promise: this.#r,
              };
            if (this.options.experimental_prefetchInRender) {
              let e = (t) => {
                  'error' === E.status ? t.reject(E.error) : void 0 !== E.data && t.resolve(E.data);
                },
                s = () => {
                  e((this.#r = E.promise = (0, o.T)()));
                },
                i = this.#r;
              switch (i.status) {
                case 'pending':
                  t.queryHash === r.queryHash && e(i);
                  break;
                case 'fulfilled':
                  ('error' === E.status || E.data !== i.value) && s();
                  break;
                case 'rejected':
                  ('error' !== E.status || E.error !== i.reason) && s();
              }
            }
            return E;
          }
          updateResult() {
            let t = this.#a,
              e = this.createResult(this.#i, this.options);
            (this.#o = this.#i.state),
              (this.#u = this.options),
              void 0 !== this.#o.data && (this.#l = this.#i),
              !(0, u.f8)(e, t) &&
                ((this.#a = e),
                this.#w({
                  listeners: (() => {
                    if (!t) return !0;
                    let { notifyOnChangeProps: e } = this.options,
                      s = 'function' == typeof e ? e() : e;
                    if ('all' === s || (!s && !this.#y.size)) return !0;
                    let r = new Set(s ?? this.#y);
                    return (
                      this.options.throwOnError && r.add('error'),
                      Object.keys(this.#a).some((e) => this.#a[e] !== t[e] && r.has(e))
                    );
                  })(),
                }));
          }
          #R() {
            let t = this.#e.getQueryCache().build(this.#e, this.options);
            if (t === this.#i) return;
            let e = this.#i;
            (this.#i = t),
              (this.#n = t.state),
              this.hasListeners() && (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#b();
          }
          #w(t) {
            i.jG.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#a);
                }),
                this.#e.getQueryCache().notify({ query: this.#i, type: 'observerResultsUpdated' });
            });
          }
        };
      function c(t, e) {
        return (
          (!1 !== (0, u.Eh)(e.enabled, t) &&
            void 0 === t.state.data &&
            ('error' !== t.state.status || !1 !== e.retryOnMount)) ||
          (void 0 !== t.state.data && l(t, e, e.refetchOnMount))
        );
      }
      function l(t, e, s) {
        if (!1 !== (0, u.Eh)(e.enabled, t)) {
          let r = 'function' == typeof s ? s(t) : s;
          return 'always' === r || (!1 !== r && p(t, e));
        }
        return !1;
      }
      function d(t, e, s, r) {
        return (
          (t !== e || !1 === (0, u.Eh)(r.enabled, t)) &&
          (!s.suspense || 'error' !== t.state.status) &&
          p(t, s)
        );
      }
      function p(t, e) {
        return !1 !== (0, u.Eh)(e.enabled, t) && t.isStaleByTime((0, u.d2)(e.staleTime, t));
      }
    },
    33444: (t, e, s) => {
      s.d(e, { EU: () => a, R3: () => r, iL: () => o, jv: () => i, nE: () => n });
      var r = (t, e) => void 0 === e.state.data,
        i = (t) => {
          let e = t.staleTime;
          t.suspense &&
            ((t.staleTime =
              'function' == typeof e ? (...t) => Math.max(e(...t), 1e3) : Math.max(e ?? 1e3, 1e3)),
            'number' == typeof t.gcTime && (t.gcTime = Math.max(t.gcTime, 1e3)));
        },
        n = (t, e) => t.isLoading && t.isFetching && !e,
        a = (t, e) => t?.suspense && e.isPending,
        o = (t, e, s) =>
          e.fetchOptimistic(t).catch(() => {
            s.clearReset();
          });
    },
    42210: (t, e, s) => {
      s.d(e, { X: () => o, k: () => u });
      var r = s(7703),
        i = s(60494),
        n = s(21279),
        a = s(26759),
        o = class extends a.k {
          #Q;
          #E;
          #P;
          #e;
          #F;
          #I;
          #T;
          constructor(t) {
            super(),
              (this.#T = !1),
              (this.#I = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#e = t.client),
              (this.#P = this.#e.getQueryCache()),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#Q = (function (t) {
                let e = 'function' == typeof t.initialData ? t.initialData() : t.initialData,
                  s = void 0 !== e,
                  r = s
                    ? 'function' == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0;
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: s ? (r ?? Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: s ? 'success' : 'pending',
                  fetchStatus: 'idle',
                };
              })(this.options)),
              (this.state = t.state ?? this.#Q),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#F?.promise;
          }
          setOptions(t) {
            (this.options = { ...this.#I, ...t }), this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length || 'idle' !== this.state.fetchStatus || this.#P.remove(this);
          }
          setData(t, e) {
            let s = (0, r.pl)(this.state.data, t, this.options);
            return (
              this.#x({ data: s, type: 'success', dataUpdatedAt: e?.updatedAt, manual: e?.manual }),
              s
            );
          }
          setState(t, e) {
            this.#x({ type: 'setState', state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#F?.promise;
            return this.#F?.cancel(t), e ? e.then(r.lQ).catch(r.lQ) : Promise.resolve();
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#Q);
          }
          isActive() {
            return this.observers.some((t) => !1 !== (0, r.Eh)(t.options.enabled, this));
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === r.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((t) => t.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, r.j3)(this.state.dataUpdatedAt, t)
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#F?.continue();
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#F?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#P.notify({ type: 'observerAdded', query: this, observer: t }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#F && (this.#T ? this.#F.cancel({ revert: !0 }) : this.#F.cancelRetry()),
                this.scheduleGc()),
              this.#P.notify({ type: 'observerRemoved', query: this, observer: t }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#x({ type: 'invalidate' });
          }
          fetch(t, e) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch) this.cancel({ silent: !0 });
              else if (this.#F) return this.#F.continueRetry(), this.#F.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let s = new AbortController(),
              i = (t) => {
                Object.defineProperty(t, 'signal', {
                  enumerable: !0,
                  get: () => ((this.#T = !0), s.signal),
                });
              },
              a = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#e,
                state: this.state,
                fetchFn: () => {
                  let t = (0, r.ZM)(this.options, e),
                    s = { client: this.#e, queryKey: this.queryKey, meta: this.meta };
                  return (i(s), (this.#T = !1), this.options.persister)
                    ? this.options.persister(t, s, this)
                    : t(s);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#E = this.state),
              ('idle' === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#x({ type: 'fetch', meta: a.fetchOptions?.meta });
            let o = (t) => {
              ((0, n.wm)(t) && t.silent) || this.#x({ type: 'error', error: t }),
                (0, n.wm)(t) ||
                  (this.#P.config.onError?.(t, this),
                  this.#P.config.onSettled?.(this.state.data, t, this)),
                this.scheduleGc();
            };
            return (
              (this.#F = (0, n.II)({
                initialPromise: e?.initialPromise,
                fn: a.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    o(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(t);
                  } catch (t) {
                    o(t);
                    return;
                  }
                  this.#P.config.onSuccess?.(t, this),
                    this.#P.config.onSettled?.(t, this.state.error, this),
                    this.scheduleGc();
                },
                onError: o,
                onFail: (t, e) => {
                  this.#x({ type: 'failed', failureCount: t, error: e });
                },
                onPause: () => {
                  this.#x({ type: 'pause' });
                },
                onContinue: () => {
                  this.#x({ type: 'continue' });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#F.start()
            );
          }
          #x(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return { ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                case 'pause':
                  return { ...e, fetchStatus: 'paused' };
                case 'continue':
                  return { ...e, fetchStatus: 'fetching' };
                case 'fetch':
                  return { ...e, ...u(e.data, this.options), fetchMeta: t.meta ?? null };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                    ...(!t.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  let s = t.error;
                  if ((0, n.wm)(s) && s.revert && this.#E)
                    return { ...this.#E, fetchStatus: 'idle' };
                  return {
                    ...e,
                    error: s,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...e, isInvalidated: !0 };
                case 'setState':
                  return { ...e, ...t.state };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#P.notify({ query: this, type: 'updated', action: t });
              });
          }
        };
      function u(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, n.v_)(e.networkMode) ? 'fetching' : 'paused',
          ...(void 0 === t && { error: null, status: 'pending' }),
        };
      }
    },
    51229: (t, e, s) => {
      s.d(e, { m: () => n });
      var r = s(72327),
        i = s(7703),
        n = new (class extends r.Q {
          #j;
          #k;
          #U;
          constructor() {
            super(),
              (this.#U = (t) => {
                if (!i.S$ && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener('visibilitychange', e, !1),
                    () => {
                      window.removeEventListener('visibilitychange', e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#k || this.setEventListener(this.#U);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#k?.(), (this.#k = void 0));
          }
          setEventListener(t) {
            (this.#U = t),
              this.#k?.(),
              (this.#k = t((t) => {
                'boolean' == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#j !== t && ((this.#j = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#j
              ? this.#j
              : globalThis.document?.visibilityState !== 'hidden';
          }
        })();
    },
    60494: (t, e, s) => {
      s.d(e, { jG: () => i });
      var r = (t) => setTimeout(t, 0),
        i = (function () {
          let t = [],
            e = 0,
            s = (t) => {
              t();
            },
            i = (t) => {
              t();
            },
            n = r,
            a = (r) => {
              e
                ? t.push(r)
                : n(() => {
                    s(r);
                  });
            },
            o = () => {
              let e = t;
              (t = []),
                e.length &&
                  n(() => {
                    i(() => {
                      e.forEach((t) => {
                        s(t);
                      });
                    });
                  });
            };
          return {
            batch: (t) => {
              let s;
              e++;
              try {
                s = t();
              } finally {
                --e || o();
              }
              return s;
            },
            batchCalls:
              (t) =>
              (...e) => {
                a(() => {
                  t(...e);
                });
              },
            schedule: a,
            setNotifyFunction: (t) => {
              s = t;
            },
            setBatchNotifyFunction: (t) => {
              i = t;
            },
            setScheduler: (t) => {
              n = t;
            },
          };
        })();
    },
    61529: (t, e, s) => {
      s.d(e, { IsRestoringProvider: () => a, useIsRestoring: () => n });
      var r = s(7620),
        i = r.createContext(!1),
        n = () => r.useContext(i),
        a = i.Provider;
    },
    67933: (t, e, s) => {
      s.d(e, { useQuery: () => n });
      var r = s(28592),
        i = s(17566);
      function n(t, e) {
        return (0, i.t)(t, r.$, e);
      }
    },
    71116: (t, e, s) => {
      s.d(e, { t: () => n });
      var r = s(72327),
        i = s(7703),
        n = new (class extends r.Q {
          #q = !0;
          #k;
          #U;
          constructor() {
            super(),
              (this.#U = (t) => {
                if (!i.S$ && window.addEventListener) {
                  let e = () => t(!0),
                    s = () => t(!1);
                  return (
                    window.addEventListener('online', e, !1),
                    window.addEventListener('offline', s, !1),
                    () => {
                      window.removeEventListener('online', e),
                        window.removeEventListener('offline', s);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#k || this.setEventListener(this.#U);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#k?.(), (this.#k = void 0));
          }
          setEventListener(t) {
            (this.#U = t), this.#k?.(), (this.#k = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#q !== t &&
              ((this.#q = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#q;
          }
        })();
    },
    72327: (t, e, s) => {
      s.d(e, { Q: () => r });
      var r = class {
        constructor() {
          (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    75608: (t, e, s) => {
      s.d(e, { PL: () => i, RQ: () => u, rB: () => o });
      var r = s(7703);
      function i(t) {
        return {
          onFetch: (e, s) => {
            let i = e.options,
              o = e.fetchOptions?.meta?.fetchMore?.direction,
              u = e.state.data?.pages || [],
              h = e.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              l = 0,
              d = async () => {
                let s = !1,
                  d = (t) => {
                    Object.defineProperty(t, 'signal', {
                      enumerable: !0,
                      get: () => (
                        e.signal.aborted
                          ? (s = !0)
                          : e.signal.addEventListener('abort', () => {
                              s = !0;
                            }),
                        e.signal
                      ),
                    });
                  },
                  p = (0, r.ZM)(e.options, e.fetchOptions),
                  f = async (t, i, n) => {
                    if (s) return Promise.reject();
                    if (null == i && t.pages.length) return Promise.resolve(t);
                    let a = {
                      client: e.client,
                      queryKey: e.queryKey,
                      pageParam: i,
                      direction: n ? 'backward' : 'forward',
                      meta: e.options.meta,
                    };
                    d(a);
                    let o = await p(a),
                      { maxPages: u } = e.options,
                      h = n ? r.ZZ : r.y9;
                    return { pages: h(t.pages, o, u), pageParams: h(t.pageParams, i, u) };
                  };
                if (o && u.length) {
                  let t = 'backward' === o,
                    e = { pages: u, pageParams: h },
                    s = (t ? a : n)(i, e);
                  c = await f(e, s, t);
                } else {
                  let e = t ?? u.length;
                  do {
                    let t = 0 === l ? (h[0] ?? i.initialPageParam) : n(i, c);
                    if (l > 0 && null == t) break;
                    (c = await f(c, t)), l++;
                  } while (l < e);
                }
                return c;
              };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    d,
                    {
                      client: e.client,
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    s
                  ))
              : (e.fetchFn = d);
          },
        };
      }
      function n(t, { pages: e, pageParams: s }) {
        let r = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[r], e, s[r], s) : void 0;
      }
      function a(t, { pages: e, pageParams: s }) {
        return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, s[0], s) : void 0;
      }
      function o(t, e) {
        return !!e && null != n(t, e);
      }
      function u(t, e) {
        return !!e && !!t.getPreviousPageParam && null != a(t, e);
      }
    },
    80589: (t, e, s) => {
      s.d(e, { $: () => o, s: () => a });
      var r = s(60494),
        i = s(26759),
        n = s(21279),
        a = class extends i.k {
          #M;
          #D;
          #F;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#D = t.mutationCache),
              (this.#M = []),
              (this.state = t.state || o()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#M.includes(t) ||
              (this.#M.push(t),
              this.clearGcTimeout(),
              this.#D.notify({ type: 'observerAdded', mutation: this, observer: t }));
          }
          removeObserver(t) {
            (this.#M = this.#M.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#D.notify({ type: 'observerRemoved', mutation: this, observer: t });
          }
          optionalRemove() {
            this.#M.length ||
              ('pending' === this.state.status ? this.scheduleGc() : this.#D.remove(this));
          }
          continue() {
            return this.#F?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            this.#F = (0, n.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error('No mutationFn found')),
              onFail: (t, e) => {
                this.#x({ type: 'failed', failureCount: t, error: e });
              },
              onPause: () => {
                this.#x({ type: 'pause' });
              },
              onContinue: () => {
                this.#x({ type: 'continue' });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#D.canRun(this),
            });
            let e = 'pending' === this.state.status,
              s = !this.#F.canStart();
            try {
              if (!e) {
                this.#x({ type: 'pending', variables: t, isPaused: s }),
                  await this.#D.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#x({ type: 'pending', context: e, variables: t, isPaused: s });
              }
              let r = await this.#F.start();
              return (
                await this.#D.config.onSuccess?.(r, t, this.state.context, this),
                await this.options.onSuccess?.(r, t, this.state.context),
                await this.#D.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, t, this.state.context),
                this.#x({ type: 'success', data: r }),
                r
              );
            } catch (e) {
              try {
                throw (
                  (await this.#D.config.onError?.(e, t, this.state.context, this),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#D.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(void 0, e, t, this.state.context),
                  e)
                );
              } finally {
                this.#x({ type: 'error', error: e });
              }
            } finally {
              this.#D.runNext(this);
            }
          }
          #x(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return { ...e, failureCount: t.failureCount, failureReason: t.error };
                case 'pause':
                  return { ...e, isPaused: !0 };
                case 'continue':
                  return { ...e, isPaused: !1 };
                case 'pending':
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: 'pending',
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: !1,
                  };
                case 'error':
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: 'error',
                  };
              }
            })(this.state)),
              r.jG.batch(() => {
                this.#M.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#D.notify({ mutation: this, type: 'updated', action: t });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: 'idle',
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    83777: (t, e, s) => {
      function r(t, e) {
        return 'function' == typeof t ? t(...e) : !!t;
      }
      function i() {}
      s.d(e, { G: () => r, l: () => i });
    },
    84007: (t, e, s) => {
      s.d(e, { useQueries: () => v });
      var r = s(7620),
        i = s(60494),
        n = s(28592),
        a = s(72327),
        o = s(7703);
      function u(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var h = class extends a.Q {
          #e;
          #L;
          #G;
          #A;
          #M;
          #_;
          #$;
          #H;
          #K = [];
          constructor(t, e, s) {
            super(),
              (this.#e = t),
              (this.#A = s),
              (this.#G = []),
              (this.#M = []),
              (this.#L = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#M.forEach((t) => {
                t.subscribe((e) => {
                  this.#B(t, e);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#M.forEach((t) => {
                t.destroy();
              });
          }
          setQueries(t, e) {
            (this.#G = t),
              (this.#A = e),
              i.jG.batch(() => {
                let t = this.#M,
                  e = this.#Z(this.#G);
                (this.#K = e), e.forEach((t) => t.observer.setOptions(t.defaultedQueryOptions));
                let s = e.map((t) => t.observer),
                  r = s.map((t) => t.getCurrentResult()),
                  i = s.some((e, s) => e !== t[s]);
                if (t.length !== s.length || i)
                  (this.#M = s),
                    (this.#L = r),
                    this.hasListeners() &&
                      (u(t, s).forEach((t) => {
                        t.destroy();
                      }),
                      u(s, t).forEach((t) => {
                        t.subscribe((e) => {
                          this.#B(t, e);
                        });
                      }),
                      this.#w());
              });
          }
          getCurrentResult() {
            return this.#L;
          }
          getQueries() {
            return this.#M.map((t) => t.getCurrentQuery());
          }
          getObservers() {
            return this.#M;
          }
          getOptimisticResult(t, e) {
            let s = this.#Z(t),
              r = s.map((t) => t.observer.getOptimisticResult(t.defaultedQueryOptions));
            return [r, (t) => this.#N(t ?? r, e), () => this.#W(r, s)];
          }
          #W(t, e) {
            return e.map((s, r) => {
              let i = t[r];
              return s.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : s.observer.trackResult(i, (t) => {
                    e.forEach((e) => {
                      e.observer.trackProp(t);
                    });
                  });
            });
          }
          #N(t, e) {
            return e
              ? ((this.#_ && this.#L === this.#H && e === this.#$) ||
                  ((this.#$ = e), (this.#H = this.#L), (this.#_ = (0, o.BH)(this.#_, e(t)))),
                this.#_)
              : t;
          }
          #Z(t) {
            let e = new Map(this.#M.map((t) => [t.options.queryHash, t])),
              s = [];
            return (
              t.forEach((t) => {
                let r = this.#e.defaultQueryOptions(t),
                  i = e.get(r.queryHash);
                i
                  ? s.push({ defaultedQueryOptions: r, observer: i })
                  : s.push({ defaultedQueryOptions: r, observer: new n.$(this.#e, r) });
              }),
              s
            );
          }
          #B(t, e) {
            let s = this.#M.indexOf(t);
            -1 !== s &&
              ((this.#L = (function (t, e, s) {
                let r = t.slice(0);
                return (r[e] = s), r;
              })(this.#L, s, e)),
              this.#w());
          }
          #w() {
            if (this.hasListeners()) {
              let t = this.#_,
                e = this.#W(this.#L, this.#K);
              t !== this.#N(e, this.#A?.combine) &&
                i.jG.batch(() => {
                  this.listeners.forEach((t) => {
                    t(this.#L);
                  });
                });
            }
          }
        },
        c = s(87606),
        l = s(61529),
        d = s(24199),
        p = s(3969),
        f = s(33444),
        y = s(83777);
      function v({ queries: t, ...e }, s) {
        let a = (0, c.useQueryClient)(s),
          o = (0, l.useIsRestoring)(),
          u = (0, d.useQueryErrorResetBoundary)(),
          v = r.useMemo(
            () =>
              t.map((t) => {
                let e = a.defaultQueryOptions(t);
                return (e._optimisticResults = o ? 'isRestoring' : 'optimistic'), e;
              }),
            [t, a, o]
          );
        v.forEach((t) => {
          (0, f.jv)(t), (0, p.LJ)(t, u);
        }),
          (0, p.wZ)(u);
        let [b] = r.useState(() => new h(a, v, e)),
          [m, g, R] = b.getOptimisticResult(v, e.combine),
          C = !o && !1 !== e.subscribed;
        r.useSyncExternalStore(
          r.useCallback((t) => (C ? b.subscribe(i.jG.batchCalls(t)) : y.l), [b, C]),
          () => b.getCurrentResult(),
          () => b.getCurrentResult()
        ),
          r.useEffect(() => {
            b.setQueries(v, e);
          }, [v, e, b]);
        let O = m.some((t, e) => (0, f.EU)(v[e], t))
          ? m.flatMap((t, e) => {
              let s = v[e];
              if (s) {
                let e = new n.$(a, s);
                if ((0, f.EU)(s, t)) return (0, f.iL)(s, e, u);
                (0, f.nE)(t, o) && (0, f.iL)(s, e, u);
              }
              return [];
            })
          : [];
        if (O.length > 0) throw Promise.all(O);
        let S = m.find((t, e) => {
          let s = v[e];
          return (
            s &&
            (0, p.$1)({
              result: t,
              errorResetBoundary: u,
              throwOnError: s.throwOnError,
              query: a.getQueryCache().get(s.queryHash),
              suspense: s.suspense,
            })
          );
        });
        if (S?.error) throw S.error;
        return g(R());
      }
    },
    87606: (t, e, s) => {
      s.r(e),
        s.d(e, {
          QueryClientContext: () => n,
          QueryClientProvider: () => o,
          useQueryClient: () => a,
        });
      var r = s(7620),
        i = s(54568),
        n = r.createContext(void 0),
        a = (t) => {
          let e = r.useContext(n);
          if (t) return t;
          if (!e) throw Error('No QueryClient set, use QueryClientProvider to set one');
          return e;
        },
        o = ({ client: t, children: e }) => (
          r.useEffect(
            () => (
              t.mount(),
              () => {
                t.unmount();
              }
            ),
            [t]
          ),
          (0, i.jsx)(n.Provider, { value: t, children: e })
        );
    },
  },
]);
