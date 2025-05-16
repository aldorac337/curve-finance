'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4968],
  {
    4289: (e, t, l) => {
      l.d(t, {
        X: () => c,
      });
      var a = l(68466),
        r = l(61873),
        i = l(76635),
        n = l(89425),
        m = l(70697),
        d = l(29514);

      function c({
        queryFn: e,
        queryKey: t,
        staleTime: l,
        refetchInterval: c,
        validationSuite: o,
        dependencies: F,
        refetchOnWindowFocus: h,
        refetchOnMount: p,
      }) {
        let s = (e, t) => (0, d.p6)(o, e, t),
          f = (e) => (0, d.VG)(o, e) && !F?.(e).some((e) => !r.q.getQueryData(e)),
          E = ({ queryKey: t }) => (
            (0, i.dB)(t),
            e(
              s(
                Object.fromEntries(
                  t.flatMap((e) => (e && 'object' == typeof e ? Object.entries(e) : []))
                )
              )
            )
          ),
          z = (e, r = !0) =>
            (0, a.j)({
              queryKey: t(e),
              queryFn: E,
              staleTime: n.o[l ?? '5m'],
              refetchInterval: c ? n.o[c] : void 0,
              enabled: r && f(e),
              refetchOnWindowFocus: h,
              refetchOnMount: p,
            });
        return {
          assertValidity: s,
          checkValidity: (e, t) => (0, d.VG)(o, e, t),
          isEnabled: f,
          queryKey: t,
          getQueryOptions: z,
          getQueryData: (e) => r.q.getQueryData(t(e)),
          setQueryData: (e, l) => r.q.setQueryData(t(e), l),
          prefetchQuery: (e, l = 0) =>
            r.q.prefetchQuery({
              queryKey: t(e),
              queryFn: E,
              staleTime: l,
            }),
          fetchQuery: (e) => r.q.fetchQuery(z(e)),
          useQuery: (0, m.GQ)(z),
          invalidate: (e) =>
            r.q.invalidateQueries({
              queryKey: t(e),
            }),
        };
      }
    },
    4387: (e, t, l) => {
      l.d(t, {
        UK: () => CH,
        NC: () => CV,
        jp: () => a,
        if: () => CR,
        IA: () => C_,
        m$: () => CX,
        $x: () => Cx,
        e5: () => Cy,
        $E: () => Cw,
        xz: () => C$,
        nf: () => CQ.h,
        $J: () => Cv,
        Nj: () => CO,
        _n: () => Ck,
        qO: () => CS,
        bS: () => CB,
        S7: () => CD,
        WI: () => Cj,
      });
      let a = {
        src: '/_next/static/media/curve-logo.f83f84d4.png',
        height: 75,
        width: 75,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEVMaXGyAgBp/4/l+Rzy3Q2N/21A/74Cvf9I/7Y2+sX/vQA9/bj/ewAA///B/kRS/6TH/DHpKhX/cgABTP8X6ucCLvwAqf/8IALO5CzvnAv/OwC3+UT/VwDSAAD/IgClAADvxxCKAAD/dAHxCgHc/yT/cwCa/3r+/wb/ygMDvf/XnibuEwFPISsKAAAAJXRSTlMA/qW9/v78IAN0XbFXBfzo9gzevaJo8lb8+/2u/vpfzcd/r6X+IfxWmwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAEhJREFUeJwVwQUWgCAQBcCPAgt2dwvm/e/ncwZY571OAUyMDTYLgO0dW8MvD4vtHpGcLnrTcBMdDrSUIvY1gaq7CPErc4JS+ACxwQRPZC2taAAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 8,
      };
      var r,
        i,
        n,
        m,
        d,
        c,
        o,
        F,
        h,
        p,
        s,
        f,
        E,
        z,
        u,
        g,
        b,
        A,
        v,
        C,
        x,
        B,
        y,
        D,
        w,
        L,
        S,
        M,
        k,
        H,
        T,
        O,
        P,
        j,
        N,
        R,
        I,
        _,
        W,
        X,
        U,
        $,
        Q,
        V,
        G,
        Z,
        q,
        K,
        J,
        Y,
        ee,
        et,
        el,
        ea,
        er,
        ei,
        en,
        em,
        ed,
        ec,
        eo,
        eF,
        eh,
        ep,
        es,
        ef,
        eE,
        ez,
        eu,
        eg,
        eb,
        eA,
        ev,
        eC,
        ex,
        eB,
        ey,
        eD,
        ew,
        eL,
        eS,
        eM,
        ek,
        eH,
        eT,
        eO,
        eP,
        ej,
        eN,
        eR,
        eI,
        e_,
        eW,
        eX,
        eU,
        e$,
        eQ,
        eV,
        eG,
        eZ,
        eq,
        eK,
        eJ,
        eY,
        e1,
        e0,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7,
        e8,
        e9,
        te,
        tt,
        tl,
        ta,
        tr,
        ti,
        tn,
        tm,
        td,
        tc,
        to,
        tF,
        th,
        tp,
        ts,
        tf,
        tE,
        tz,
        tu,
        tg,
        tb,
        tA,
        tv,
        tC,
        tx,
        tB,
        ty,
        tD,
        tw,
        tL,
        tS,
        tM,
        tk,
        tH,
        tT,
        tO,
        tP,
        tj,
        tN,
        tR,
        tI,
        t_,
        tW,
        tX,
        tU,
        t$,
        tQ,
        tV,
        tG,
        tZ,
        tq,
        tK,
        tJ,
        tY,
        t1,
        t0,
        t2,
        t3,
        t4,
        t5,
        t6,
        t7,
        t8,
        t9,
        le,
        lt,
        ll,
        la,
        lr,
        li,
        ln,
        lm,
        ld,
        lc,
        lo,
        lF,
        lh,
        lp,
        ls,
        lf,
        lE,
        lz,
        lu,
        lg,
        lb,
        lA,
        lv,
        lC,
        lx,
        lB,
        ly,
        lD,
        lw,
        lL,
        lS,
        lM,
        lk,
        lH,
        lT,
        lO,
        lP,
        lj,
        lN,
        lR,
        lI,
        l_,
        lW,
        lX,
        lU,
        l$,
        lQ,
        lV,
        lG,
        lZ,
        lq,
        lK,
        lJ,
        lY,
        l1,
        l0,
        l2,
        l3,
        l4,
        l5,
        l6,
        l7,
        l8,
        l9,
        ae,
        at,
        al,
        aa,
        ar,
        ai,
        an,
        am,
        ad,
        ac,
        ao,
        aF,
        ah,
        ap,
        as,
        af,
        aE,
        az,
        au,
        ag,
        ab,
        aA,
        av,
        aC,
        ax,
        aB,
        ay,
        aD,
        aw,
        aL,
        aS,
        aM,
        ak,
        aH,
        aT,
        aO,
        aP,
        aj,
        aN,
        aR,
        aI,
        a_,
        aW,
        aX,
        aU,
        a$,
        aQ,
        aV,
        aG,
        aZ,
        aq,
        aK,
        aJ,
        aY,
        a1,
        a0,
        a2,
        a3,
        a4,
        a5,
        a6,
        a7,
        a8,
        a9,
        re,
        rt,
        rl,
        ra,
        rr,
        ri,
        rn,
        rm,
        rd,
        rc,
        ro,
        rF,
        rh,
        rp,
        rs,
        rf,
        rE,
        rz,
        ru,
        rg,
        rb,
        rA,
        rv,
        rC,
        rx,
        rB,
        ry,
        rD,
        rw,
        rL,
        rS,
        rM,
        rk,
        rH,
        rT,
        rO,
        rP,
        rj,
        rN,
        rR,
        rI,
        r_,
        rW,
        rX,
        rU,
        r$,
        rQ,
        rV,
        rG,
        rZ,
        rq,
        rK,
        rJ,
        rY,
        r1,
        r0,
        r2,
        r3,
        r4,
        r5,
        r6,
        r7,
        r8,
        r9,
        ie,
        it,
        il,
        ia,
        ir,
        ii,
        im,
        id,
        ic,
        io,
        iF,
        ih,
        ip,
        is,
        iE,
        iz,
        iu,
        ig,
        ib,
        iA,
        iv,
        iC,
        ix,
        iB,
        iy,
        iD,
        iw,
        iL,
        iS,
        iM,
        ik,
        iH,
        iT,
        iO,
        iP,
        ij,
        iN,
        iR,
        iI,
        i_,
        iW,
        iX,
        iU,
        i$,
        iQ,
        iV,
        iG,
        iZ,
        iq,
        iK,
        iJ,
        iY,
        i1,
        i0,
        i2,
        i3,
        i4,
        i5,
        i6,
        i7,
        i8,
        i9,
        ne,
        nt,
        nl,
        na,
        nr,
        ni,
        nn,
        nm,
        nd,
        nc,
        no,
        nF,
        nh,
        np,
        ns,
        nf,
        nE,
        nz,
        nu,
        ng,
        nb,
        nA,
        nv,
        nC,
        nx,
        nB,
        ny,
        nD,
        nw,
        nL,
        nS,
        nM,
        nk,
        nH,
        nT,
        nO,
        nP,
        nj,
        nN,
        nR,
        nI,
        n_,
        nW,
        nX,
        nU,
        n$,
        nQ,
        nV,
        nG,
        nZ,
        nq,
        nK,
        nJ,
        nY,
        n1,
        n0,
        n2,
        n3,
        n4,
        n5,
        n6,
        n7,
        n8,
        n9,
        me,
        mt,
        ml,
        ma,
        mr,
        mi,
        mn,
        mm,
        md,
        mc,
        mo,
        mF,
        mh,
        mp,
        ms,
        mf,
        mE,
        mz,
        mu,
        mg,
        mb,
        mA,
        mv,
        mC,
        mx,
        mB,
        my,
        mD,
        mw,
        mL,
        mS,
        mM,
        mk,
        mH,
        mT,
        mO,
        mP,
        mj,
        mN,
        mR,
        mI,
        m_,
        mW,
        mX,
        mU,
        m$,
        mQ,
        mV,
        mG,
        mZ,
        mq,
        mK,
        mJ,
        mY,
        m1,
        m0,
        m2,
        m3,
        m4,
        m5,
        m6,
        m7,
        m8,
        m9,
        de,
        dt,
        dl,
        da,
        dr,
        di,
        dn,
        dm,
        dd,
        dc,
        dF,
        dh,
        dp,
        ds,
        df,
        dE,
        dz,
        du,
        dg,
        db,
        dA,
        dv,
        dC,
        dx,
        dB,
        dy,
        dD,
        dw,
        dL,
        dS,
        dM,
        dk,
        dH,
        dT,
        dO,
        dP,
        dj,
        dN,
        dR,
        dI,
        d_,
        dW,
        dX,
        dU,
        d$,
        dQ,
        dV,
        dG,
        dZ,
        dq,
        dK,
        dJ,
        dY,
        d1,
        d0,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8,
        d9,
        ce,
        ct,
        cl,
        ca,
        cr,
        ci,
        cn,
        cm,
        cd,
        cc,
        co,
        cF,
        ch,
        cp,
        cs,
        cf,
        cE,
        cz,
        cu,
        cg,
        cb,
        cA,
        cv,
        cC,
        cx,
        cB,
        cy,
        cD,
        cw,
        cL,
        cS,
        cM,
        ck,
        cH,
        cT,
        cO,
        cP,
        cj,
        cN,
        cR,
        cI,
        c_,
        cW,
        cX,
        cU,
        c$,
        cQ,
        cV,
        cG,
        cZ,
        cq,
        cK,
        cJ,
        cY,
        c1,
        c0,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c8,
        c9,
        oe,
        ot,
        ol,
        oa,
        or,
        oi,
        on,
        om,
        od,
        oc,
        oo,
        oF,
        oh,
        op,
        os,
        of,
        oE,
        oz,
        ou,
        og,
        ob,
        oA,
        ov,
        oC,
        ox,
        oB,
        oy,
        oD,
        ow,
        oL,
        oS,
        oM,
        ok,
        oH,
        oT,
        oO,
        oP,
        oj,
        oN,
        oR,
        oI,
        o_,
        oW,
        oX,
        oU,
        o$,
        oQ,
        oV,
        oG,
        oZ,
        oq,
        oK,
        oJ,
        oY,
        o1,
        o0,
        o2,
        o3,
        o4,
        o5,
        o6,
        o7,
        o8,
        o9,
        Fe,
        Ft,
        Fl,
        Fa,
        Fr,
        Fi,
        Fn,
        Fm,
        Fd,
        Fc,
        Fo,
        FF,
        Fh,
        Fp,
        Fs,
        Ff,
        FE,
        Fz,
        Fu,
        Fg,
        Fb,
        FA,
        Fv,
        FC,
        Fx,
        FB,
        Fy,
        FD,
        Fw,
        FL,
        FS,
        FM,
        Fk,
        FH,
        FT,
        FO,
        FP,
        Fj,
        FN,
        FR,
        FI,
        F_,
        FW,
        FX,
        FU,
        F$,
        FQ,
        FV,
        FG,
        FZ,
        Fq,
        FK,
        FJ,
        FY,
        F1,
        F0,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        he,
        ht,
        hl,
        ha,
        hr,
        hi,
        hn,
        hm,
        hd,
        hc,
        ho,
        hF,
        hh,
        hp,
        hs,
        hf,
        hE,
        hz,
        hu,
        hg,
        hb,
        hA,
        hv,
        hC,
        hx,
        hB,
        hy,
        hD,
        hw,
        hL,
        hS,
        hM,
        hk,
        hH,
        hT,
        hO,
        hP,
        hj,
        hN,
        hR,
        hI,
        h_,
        hW,
        hX,
        hU,
        h$,
        hQ,
        hV,
        hG,
        hZ,
        hq,
        hK,
        hJ,
        hY,
        h1,
        h0,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        pe,
        pt,
        pl,
        pa,
        pr,
        pi,
        pn,
        pm,
        pd,
        pc,
        po,
        pF,
        ph,
        pp,
        ps,
        pf,
        pE,
        pz,
        pu,
        pg,
        pb,
        pA,
        pv,
        pC,
        px,
        pB,
        py,
        pD,
        pw,
        pL,
        pS,
        pM,
        pk,
        pH,
        pT,
        pO,
        pP,
        pj,
        pN,
        pR,
        pI,
        p_,
        pW,
        pX,
        pU,
        p$,
        pQ,
        pV,
        pG,
        pZ,
        pq,
        pK,
        pJ,
        pY,
        p1,
        p0,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        p8,
        p9,
        se,
        st,
        sl,
        sa,
        sr,
        si,
        sn,
        sm,
        sd,
        sc,
        so,
        sF,
        sh,
        sp,
        ss,
        sf,
        sE,
        sz,
        su,
        sg,
        sb,
        sA,
        sv,
        sC,
        sx,
        sB,
        sy,
        sD,
        sw,
        sL,
        sS,
        sM,
        sk,
        sH,
        sT,
        sO,
        sP,
        sj,
        sN,
        sR,
        sI,
        s_,
        sW,
        sX,
        sU,
        s$,
        sQ,
        sV,
        sG,
        sZ,
        sq,
        sK,
        sJ,
        sY,
        s1,
        s0,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        s9,
        fe,
        ft,
        fl,
        fa,
        fr,
        fi,
        fn,
        fm,
        fd,
        fc,
        fo,
        fF,
        fh,
        fp,
        fs,
        ff,
        fE,
        fz,
        fu,
        fg,
        fb,
        fA,
        fv,
        fC,
        fx,
        fB,
        fy,
        fD,
        fw,
        fL,
        fS,
        fM,
        fk,
        fH,
        fT,
        fO,
        fP,
        fj,
        fN,
        fR,
        fI,
        f_,
        fW,
        fX,
        fU,
        f$,
        fQ,
        fV,
        fG,
        fZ,
        fq,
        fK,
        fJ,
        fY,
        f1,
        f0,
        f2,
        f3,
        f4,
        f5,
        f6,
        f7,
        f8,
        f9,
        Ee,
        Et,
        El,
        Ea,
        Er,
        Ei,
        En,
        Em,
        Ed,
        Ec,
        Eo,
        EF,
        Eh,
        Ep,
        Es,
        Ef,
        EE,
        Ez,
        Eu,
        Eg,
        Eb,
        EA,
        Ev,
        EC,
        Ex,
        EB,
        Ey,
        ED,
        Ew,
        EL,
        ES,
        EM,
        Ek,
        EH,
        ET,
        EO,
        EP,
        Ej,
        EN,
        ER,
        EI,
        E_,
        EW,
        EX,
        EU,
        E$,
        EQ,
        EV,
        EG,
        EZ,
        Eq,
        EK,
        EJ,
        EY,
        E1,
        E0,
        E2,
        E3,
        E4,
        E5,
        E6,
        E7,
        E8,
        E9,
        ze,
        zt,
        zl,
        za,
        zr,
        zi,
        zn,
        zm,
        zd,
        zc,
        zo,
        zF,
        zh,
        zp,
        zs,
        zf,
        zE,
        zz,
        zu,
        zg,
        zb,
        zA,
        zv,
        zC,
        zx,
        zB,
        zy,
        zD,
        zw,
        zL,
        zS,
        zM,
        zk,
        zH,
        zT,
        zO,
        zP,
        zj,
        zN,
        zR,
        zI,
        z_,
        zW,
        zX,
        zU,
        z$,
        zQ,
        zV,
        zG,
        zZ,
        zq,
        zK,
        zJ,
        zY,
        z1,
        z0,
        z2,
        z3,
        z4,
        z5,
        z6,
        z7,
        z8,
        z9,
        ue,
        ut,
        ul,
        ua,
        ur,
        ui,
        un,
        um,
        ud,
        uc,
        uo,
        uF,
        uh,
        up,
        us,
        uf,
        uE,
        uz,
        uu,
        ug,
        ub,
        uA,
        uv,
        uC,
        ux,
        uB,
        uy,
        uD,
        uw,
        uL,
        uS,
        uM,
        uk,
        uH,
        uT,
        uO,
        uP,
        uj,
        uN,
        uR,
        uI,
        u_,
        uW,
        uX,
        uU,
        u$,
        uQ,
        uV,
        uG,
        uZ,
        uq,
        uK,
        uJ,
        uY,
        u1,
        u0,
        u2,
        u3,
        u4,
        u5,
        u6,
        u7,
        u8,
        u9,
        ge,
        gt,
        gl,
        ga,
        gr,
        gi,
        gn,
        gm,
        gd,
        gc,
        go,
        gF,
        gh,
        gp,
        gs,
        gf,
        gE,
        gz,
        gu,
        gg,
        gb,
        gA,
        gv,
        gC,
        gx,
        gB,
        gy,
        gD,
        gw,
        gL,
        gS,
        gM,
        gk,
        gH,
        gT,
        gO,
        gP,
        gj,
        gN,
        gR,
        gI,
        g_,
        gW,
        gX,
        gU,
        g$,
        gQ,
        gV,
        gG,
        gZ,
        gq,
        gK,
        gJ,
        gY,
        g1,
        g0,
        g2,
        g3,
        g4,
        g5,
        g6,
        g7,
        g8,
        g9,
        be,
        bt,
        bl,
        ba,
        br,
        bi,
        bn,
        bm,
        bd,
        bc,
        bo,
        bF,
        bh,
        bp,
        bs,
        bf,
        bE,
        bz,
        bu,
        bg,
        bb,
        bA,
        bv,
        bC,
        bx,
        bB,
        by,
        bD,
        bw,
        bL,
        bS,
        bM,
        bk,
        bH,
        bT,
        bO,
        bP,
        bj,
        bN,
        bR,
        bI,
        b_,
        bW,
        bX,
        bU,
        b$,
        bQ,
        bV,
        bG,
        bZ,
        bq,
        bK,
        bJ,
        bY,
        b1,
        b0,
        b2,
        b3,
        b4,
        b5,
        b6,
        b7,
        b8,
        b9,
        Ae,
        At,
        Al,
        Aa,
        Ar,
        Ai,
        An,
        Am,
        Ad,
        Ac,
        Ao,
        AF,
        Ah,
        Ap,
        As,
        Af,
        AE,
        Az,
        Au,
        Ag,
        Ab,
        AA,
        Av,
        AC,
        Ax,
        AB,
        Ay,
        AD,
        Aw,
        AL,
        AS,
        AM,
        Ak,
        AH,
        AT,
        AO,
        AP,
        Aj,
        AN,
        AR,
        AI,
        A_,
        AW,
        AX,
        AU,
        A$,
        AQ,
        AV,
        AG,
        AZ,
        Aq,
        AK,
        AJ,
        AY,
        A1,
        A0,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8,
        A9,
        ve,
        vt,
        vl,
        va,
        vr,
        vi,
        vn,
        vm,
        vd,
        vc,
        vo,
        vF,
        vh,
        vp,
        vs,
        vf,
        vE,
        vz,
        vu,
        vg,
        vb,
        vA,
        vv,
        vC,
        vx,
        vB,
        vy,
        vD,
        vw,
        vL,
        vS,
        vM,
        vk,
        vH,
        vT,
        vO,
        vP,
        vj,
        vN,
        vR,
        vI,
        v_,
        vW,
        vX,
        vU,
        v$,
        vQ,
        vV,
        vG,
        vZ,
        vq,
        vK,
        vJ,
        vY,
        v1,
        v0,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7,
        v8,
        v9,
        Ce,
        Ct,
        Cl,
        Ca,
        Cr,
        Ci,
        Cn,
        Cm,
        Cd,
        Cc,
        Co,
        CF,
        Ch,
        Cp,
        Cs,
        Cf,
        CE,
        Cz,
        Cu,
        Cg,
        Cb = l(7620);

      function CA() {
        return (CA = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let Cv = (e) =>
        Cb.createElement(
          'svg',
          CA(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 17 18',
            },
            e
          ),
          r ||
            (r = Cb.createElement('path', {
              fill: '#00F',
              d: 'm7.196 10.344-1.291.286-.16-.604 1.371-.25z',
            })),
          i ||
            (i = Cb.createElement('path', {
              fill: '#00F',
              d: 'm5.905 10.628-1.123.381-.241-.63 1.204-.355z',
            })),
          n ||
            (n = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm7.116 9.775-1.371.25-.143-.706 1.444-.213z',
            })),
          m ||
            (m = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm5.744 10.024-1.203.355-.22-.735 1.28-.325z',
            })),
          d ||
            (d = Cb.createElement('path', {
              fill: '#0000F1',
              d: 'm7.282 10.805-1.205.312-.172-.49 1.291-.286z',
            })),
          c ||
            (c = Cb.createElement('path', {
              fill: '#0000DA',
              d: 'm6.077 11.117-1.034.402-.26-.51 1.122-.38z',
            })),
          o ||
            (o = Cb.createElement('path', {
              fill: '#0058FF',
              d: 'm7.044 9.106-1.442.213-.127-.789 1.508-.171z',
            })),
          F ||
            (F = Cb.createElement('path', {
              fill: '#0048FF',
              d: 'm5.602 9.32-1.28.323-.19-.824 1.344-.289z',
            })),
          h ||
            (h = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm8.608 10.157-1.412.187-.081-.571L8.6 9.624z',
            })),
          p ||
            (p = Cb.createElement('path', {
              fill: '#0000DA',
              d: 'm7.373 11.144-1.116.334-.18-.361 1.205-.312z',
            })),
          s ||
            (s = Cb.createElement('path', {
              fill: '#0000E8',
              d: 'm4.783 11.01-.92.471-.324-.649 1.002-.453z',
            })),
          f ||
            (f = Cb.createElement('path', {
              fill: '#0000C4',
              d: 'm6.257 11.478-.94.42-.273-.378 1.034-.402z',
            })),
          E ||
            (E = Cb.createElement('path', {
              fill: '#003CFF',
              d: 'm8.602 9.625-1.486.15-.072-.667L8.598 9z',
            })),
          z ||
            (z = Cb.createElement('path', {
              fill: '#0008FF',
              d: 'm4.54 10.379-1 .453-.291-.759 1.073-.43z',
            })),
          u ||
            (u = Cb.createElement('path', {
              fill: '#00F',
              d: 'm8.614 10.584-1.332.22-.086-.46 1.412-.187z',
            })),
          g ||
            (g = Cb.createElement('path', {
              fill: '#0000C8',
              d: 'm5.043 11.52-.834.485-.346-.524.92-.472z',
            })),
          b ||
            (b = Cb.createElement('path', {
              fill: '#0090FF',
              d: 'm6.983 8.359-1.508.171-.102-.854 1.56-.127z',
            })),
          A ||
            (A = Cb.createElement('path', {
              fill: '#0084FF',
              d: 'm5.475 8.53-1.343.29-.156-.893 1.398-.25z',
            })),
          v ||
            (v = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm8.598 9-1.554.105-.061-.748L8.596 8.3z',
            })),
          C ||
            (C = Cb.createElement('path', {
              fill: '#003CFF',
              d: 'm4.321 9.643-1.073.43-.254-.85 1.138-.404z',
            })),
          x ||
            (x = Cb.createElement('path', {
              fill: '#0000F6',
              d: 'm8.622 10.896-1.248.247-.091-.338 1.332-.221z',
            })),
          B ||
            (B = Cb.createElement('path', {
              fill: '#0000D1',
              d: 'm7.466 11.352-1.025.35-.184-.224 1.116-.335z',
            })),
          y ||
            (y = Cb.createElement('path', {
              fill: '#0000AD',
              d: 'm5.316 11.898-.743.494-.362-.386.833-.486z',
            })),
          D ||
            (D = Cb.createElement('path', {
              fill: '#00B',
              d: 'm6.441 11.703-.849.429-.276-.234.942-.419z',
            })),
          w ||
            (w = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm8.596 8.301-1.613.058-.05-.81 1.661-.008z',
            })),
          L ||
            (L = Cb.createElement('path', {
              fill: '#0078FF',
              d: 'm4.133 8.82-1.138.403-.21-.922 1.19-.374z',
            })),
          S ||
            (S = Cb.createElement('path', {
              fill: '#0000ED',
              d: 'm8.63 11.084-1.164.268-.093-.209 1.25-.247z',
            })),
          M ||
            (M = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm6.933 7.55-1.56.126-.077-.898 1.6-.081z',
            })),
          k ||
            (k = Cb.createElement('path', {
              fill: '#002CFF',
              d: 'm10.076 10.061-1.47.095-.005-.53 1.534-.053z',
            })),
          H ||
            (H = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm5.373 7.676-1.398.251-.118-.939 1.439-.211z',
            })),
          T ||
            (T = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm10.01 10.452-1.397.132-.006-.428 1.47-.095z',
            })),
          O ||
            (O = Cb.createElement('path', {
              fill: '#0050FF',
              d: 'm10.137 9.571-1.535.052L8.598 9l1.595-.005z',
            })),
          P ||
            (P = Cb.createElement('path', {
              fill: '#0000DA',
              d: 'm3.862 11.481-.702.551-.399-.659.776-.541z',
            })),
          j ||
            (j = Cb.createElement('path', {
              fill: '#00F',
              d: 'm3.54 10.832-.776.541-.36-.772.846-.528z',
            })),
          N ||
            (N = Cb.createElement('path', {
              fill: '#0000A4',
              d: 'm5.593 12.132-.654.498-.369-.239.746-.493z',
            })),
          R ||
            (R = Cb.createElement('path', {
              fill: '#0000B6',
              d: 'm4.21 12.005-.622.557-.428-.53.702-.552z',
            })),
          I ||
            (I = Cb.createElement('path', {
              fill: '#0000D6',
              d: 'm7.561 11.425-.939.36-.183-.082 1.026-.35z',
            })),
          _ ||
            (_ = Cb.createElement('path', {
              fill: '#0004FF',
              d: 'm9.944 10.733-1.322.163-.008-.312 1.396-.132z',
            })),
          W ||
            (W = Cb.createElement('path', {
              fill: '#0078FF',
              d: 'M10.194 8.997 8.598 9l-.002-.7 1.647.046z',
            })),
          X ||
            (X = Cb.createElement('path', {
              fill: '#0000BF',
              d: 'm6.622 11.784-.755.433-.276-.085.849-.43z',
            })),
          U ||
            (U = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm8.595 7.54-1.662.01-.037-.854 1.7.041z',
            })),
          $ ||
            ($ = Cb.createElement('path', {
              fill: '#0034FF',
              d: 'm3.248 10.073-.846.528-.313-.866.905-.51z',
            })),
          Q ||
            (Q = Cb.createElement('path', {
              fill: '#0000F1',
              d: 'm8.64 11.144-1.079.281-.092-.073 1.163-.268z',
            })),
          V ||
            (V = Cb.createElement('path', {
              fill: '#00009F',
              d: 'm4.572 12.391-.537.558-.45-.387.622-.557z',
            })),
          G ||
            (G = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm3.975 7.927-1.19.374-.158-.972 1.23-.34z',
            })),
          Z ||
            (Z = Cb.createElement('path', {
              fill: '#00F',
              d: 'm9.878 10.898-1.248.186-.009-.188 1.323-.164z',
            })),
          q ||
            (q = Cb.createElement('path', {
              fill: '#23FFD4',
              d: 'm6.896 6.696-1.6.082-.05-.921 1.627-.034z',
            })),
          K ||
            (K = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'M10.243 8.347 8.596 8.3v-.76l1.691.099z',
            })),
          J ||
            (J = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm5.296 6.777-1.438.211-.078-.963 1.466-.168z',
            })),
          Y ||
            (Y = Cb.createElement('path', {
              fill: '#0000AD',
              d: 'm5.868 12.217-.56.497-.367-.084.653-.498z',
            })),
          ee ||
            (ee = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm2.994 9.223-.905.512-.257-.944.953-.49z',
            })),
          et ||
            (et = Cb.createElement('path', {
              fill: '#0000E8',
              d: 'm7.65 11.36-.848.36-.18.064.935-.359z',
            })),
          el ||
            (el = Cb.createElement('path', {
              fill: '#000096',
              d: 'm4.941 12.63-.451.554-.455-.235.537-.558z',
            })),
          ea ||
            (ea = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm8.595 6.739-1.7-.041-.022-.876 1.724.094z',
            })),
          er ||
            (er = Cb.createElement('path', {
              fill: '#00F',
              d: 'm9.812 10.943-1.173.201-.01-.06 1.249-.186z',
            })),
          ei ||
            (ei = Cb.createElement('path', {
              fill: '#04F',
              d: 'm11.526 10.05-1.45.011.061-.49 1.507.034z',
            })),
          en ||
            (en = Cb.createElement('path', {
              fill: '#002CFF',
              d: 'm11.401 10.4-1.391.052.065-.391 1.451-.011z',
            })),
          em ||
            (em = Cb.createElement('path', {
              fill: '#0000D1',
              d: 'm6.802 11.72-.666.43-.267.067.754-.433z',
            })),
          ed ||
            (ed = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm10.286 7.64-1.692-.1V6.74l1.725.154z',
            })),
          ec ||
            (ec = Cb.createElement('path', {
              fill: '#00F',
              d: 'm8.649 11.074-1 .286-.088.065 1.08-.28z',
            })),
          eo ||
            (eo = Cb.createElement('path', {
              fill: '#0064FF',
              d: 'm11.643 9.606-1.506-.035.056-.576 1.559.086z',
            })),
          eF ||
            (eF = Cb.createElement('path', {
              fill: '#19FFDE',
              d: 'm3.857 6.988-1.23.341-.104-.998 1.257-.306z',
            })),
          eh ||
            (eh = Cb.createElement('path', {
              fill: '#001CFF',
              d: 'm11.272 10.649-1.328.084.067-.281 1.39-.051z',
            })),
          ep ||
            (ep = Cb.createElement('path', {
              fill: '#0000D1',
              d: 'm3.16 12.032-.486.612-.464-.659.552-.612z',
            })),
          es ||
            (es = Cb.createElement('path', {
              fill: '#0000A8',
              d: 'm3.588 12.562-.416.61-.498-.527.487-.612z',
            })),
          ef ||
            (ef = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm6.873 5.82-1.627.035-.022-.923 1.64.012z',
            })),
          eE ||
            (eE = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm11.752 9.081-1.559-.083.05-.651 1.604.137z',
            })),
          ez ||
            (ez = Cb.createElement('path', {
              fill: '#00F',
              d: 'm2.761 11.373-.551.613-.42-.776.612-.609z',
            })),
          eu ||
            (eu = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm2.786 8.3-.954.49-.196-.995.991-.465z',
            })),
          eg ||
            (eg = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm5.246 5.857-1.466.17-.034-.965 1.479-.128z',
            })),
          eb ||
            (eb = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm11.142 10.79-1.265.108.066-.165 1.328-.084z',
            })),
          eA ||
            (eA = Cb.createElement('path', {
              fill: '#0000BF',
              d: 'm6.136 12.15-.471.49-.357.074.56-.497z',
            })),
          ev ||
            (ev = Cb.createElement('path', {
              fill: '#00009B',
              d: 'm5.308 12.714-.367.546-.452-.076.451-.554z',
            })),
          eC ||
            (eC = Cb.createElement('path', {
              fill: '#000092',
              d: 'm4.035 12.949-.342.602-.52-.38.415-.61z',
            })),
          ex ||
            (ex = Cb.createElement('path', {
              fill: '#000CFF',
              d: 'm9.75 10.866-1.102.208-.01.07 1.174-.201z',
            })),
          eB ||
            (eB = Cb.createElement('path', {
              fill: '#002CFF',
              d: 'm2.402 10.6-.612.61-.364-.877.663-.598z',
            })),
          ey ||
            (ey = Cb.createElement('path', {
              fill: '#5DFF9A',
              d: 'm8.597 5.914-1.724-.093-.009-.877 1.737.144z',
            })),
          eD ||
            (eD = Cb.createElement('path', {
              fill: '#2CFFCA',
              d: 'm10.32 6.893-1.725-.154.002-.825 1.747.209z',
            })),
          ew ||
            (ew = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm11.847 8.484-1.604-.137.041-.707 1.64.193z',
            })),
          eL ||
            (eL = Cb.createElement('path', {
              fill: '#00F',
              d: 'm7.736 11.155-.766.355-.168.21.848-.36z',
            })),
          eS ||
            (eS = Cb.createElement('path', {
              fill: '#000CFF',
              d: 'm8.659 10.874-.923.281-.086.204.999-.285z',
            })),
          eM ||
            (eM = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm11.014 10.817-1.202.126.066-.045 1.265-.109z',
            })),
          ek ||
            (ek = Cb.createElement('path', {
              fill: '#0000F1',
              d: 'm6.97 11.51-.58.422-.254.218.666-.43z',
            })),
          eH ||
            (eH = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm3.78 6.025-1.257.306-.047-1 1.27-.27z',
            })),
          eT ||
            (eT = Cb.createElement('path', {
              fill: '#000089',
              d: 'm4.49 13.184-.268.591-.53-.224.342-.602z',
            })),
          eO ||
            (eO = Cb.createElement('path', {
              fill: '#006CFF',
              d: 'm2.09 9.735-.664.6-.3-.955.706-.589z',
            })),
          eP ||
            (eP = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm2.627 7.33-.99.463-.13-1.025 1.016-.437z',
            })),
          ej ||
            (ej = Cb.createElement('path', {
              fill: '#06ECF1',
              d: 'm11.926 7.833-1.64-.193.034-.747 1.668.249z',
            })),
          eN ||
            (eN = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm6.864 4.944-1.64-.012.009-.901 1.637.057z',
            })),
          eR ||
            (eR = Cb.createElement('path', {
              fill: '#0024FF',
              d: 'm9.693 10.667-1.034.207-.01.2 1.102-.208z',
            })),
          eI ||
            (eI = Cb.createElement('path', {
              fill: '#0000AD',
              d: 'm5.665 12.64-.286.534-.44.086.368-.546z',
            })),
          e_ ||
            (e_ = Cb.createElement('path', {
              fill: '#04F',
              d: 'm12.708 10.421-1.307-.02.125-.351 1.354.06z',
            })),
          eW ||
            (eW = Cb.createElement('path', {
              fill: '#005CFF',
              d: 'm12.88 10.11-1.354-.06.117-.444 1.399.107z',
            })),
          eX ||
            (eX = Cb.createElement('path', {
              fill: '#5DFF9A',
              d: 'm10.344 6.123-1.747-.209.004-.826 1.757.262z',
            })),
          eU ||
            (eU = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm5.225 4.932-1.48.128.01-.942 1.48-.087z',
            })),
          e$ ||
            (e$ = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm10.89 10.732-1.142.134.062.077 1.202-.126z',
            })),
          eQ ||
            (eQ = Cb.createElement('path', {
              fill: '#0000DF',
              d: 'M6.39 11.932 6 12.409l-.336.231.471-.49z',
            })),
          eV ||
            (eV = Cb.createElement('path', {
              fill: '#0038FF',
              d: 'm12.528 10.636-1.256.013.13-.248 1.306.02z',
            })),
          eG ||
            (eG = Cb.createElement('path', {
              fill: '#0078FF',
              d: 'm13.044 9.713-1.401-.107.109-.525 1.442.156z',
            })),
          eZ ||
            (eZ = Cb.createElement('path', {
              fill: '#90FF66',
              d: 'm8.6 5.088-1.736-.144.007-.857 1.735.192z',
            })),
          eq ||
            (eq = Cb.createElement('path', {
              fill: '#00008D',
              d: 'm4.942 13.26-.193.577-.527-.062.268-.59z',
            })),
          eK ||
            (eK = Cb.createElement('path', {
              fill: '#001CFF',
              d: 'm7.814 10.817-.69.341-.154.352.766-.355z',
            })),
          eJ ||
            (eJ = Cb.createElement('path', {
              fill: '#0034FF',
              d: 'm12.347 10.75-1.205.04.13-.141 1.256-.013z',
            })),
          eY ||
            (eY = Cb.createElement('path', {
              fill: '#0030FF',
              d: 'm8.668 10.547-.853.27-.08.338.924-.281z',
            })),
          e1 ||
            (e1 = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm13.194 9.237-1.443-.156.095-.595 1.476.211z',
            })),
          e0 ||
            (e0 = Cb.createElement('path', {
              fill: '#33FFC4',
              d: 'm11.988 7.142-1.668-.25.024-.77 1.688.307z',
            })),
          e2 ||
            (e2 = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm1.832 8.79-.706.588-.228-1.012.738-.571z',
            })),
          e3 ||
            (e3 = Cb.createElement('path', {
              fill: '#0000C8',
              d: 'm2.674 12.645-.286.653-.517-.65.34-.661z',
            })),
          e4 ||
            (e4 = Cb.createElement('path', {
              fill: '#0000A4',
              d: 'm3.172 13.171-.23.64-.555-.513.285-.653z',
            })),
          e5 ||
            (e5 = Cb.createElement('path', {
              fill: '#0008FF',
              d: 'm7.124 11.158-.503.408-.232.368.581-.422z',
            })),
          e6 ||
            (e6 = Cb.createElement('path', {
              fill: '#00F',
              d: 'm2.21 11.986-.34.662-.467-.771.387-.668z',
            })),
          e7 ||
            (e7 = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm3.746 5.06-1.27.27.013-.976 1.265-.236z',
            })),
          e8 ||
            (e8 = Cb.createElement('path', {
              fill: '#0034FF',
              d: 'm12.169 10.76-1.155.057.128-.028 1.205-.039z',
            })),
          e9 ||
            (e9 = Cb.createElement('path', {
              fill: '#003CFF',
              d: 'm10.777 10.534-1.084.133.057.199 1.143-.134z',
            })),
          te ||
            (te = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm2.523 6.331-1.016.437L1.45 5.74l1.027-.408z',
            })),
          tt ||
            (tt = Cb.createElement('path', {
              fill: '#000089',
              d: 'm3.693 13.55-.173.625-.579-.364.23-.64z',
            })),
          tl ||
            (tl = Cb.createElement('path', {
              fill: '#04F',
              d: 'm9.643 10.352-.973.195-.01.327 1.034-.207z',
            })),
          ta ||
            (ta = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.323 8.696-1.476-.212.081-.653 1.503.27z',
            })),
          tr ||
            (tr = Cb.createElement('path', {
              fill: '#90FF66',
              d: 'M10.359 5.35 8.6 5.088l.005-.807 1.755.313z',
            })),
          ti ||
            (ti = Cb.createElement('path', {
              fill: '#CAFF2C',
              d: 'M6.87 4.089 5.236 4.03l.037-.857 1.622.1z',
            })),
          tn ||
            (tn = Cb.createElement('path', {
              fill: '#0000CD',
              d: 'm6.001 12.41-.204.518-.414.244.286-.534z',
            })),
          tm ||
            (tm = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm1.79 11.21-.387.667-.406-.874.429-.67z',
            })),
          td ||
            (td = Cb.createElement('path', {
              fill: '#CEFF29',
              d: 'm5.235 4.03-1.477.088.054-.894 1.46-.049z',
            })),
          tc ||
            (tc = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'M8.606 4.28 6.87 4.089l.02-.813 1.72.238z',
            })),
          to ||
            (to = Cb.createElement('path', {
              fill: '#00009F',
              d: 'm5.381 13.174-.122.56-.511.103.192-.577z',
            })),
          tF ||
            (tF = Cb.createElement('path', {
              fill: '#60FF97',
              d: 'm12.032 6.428-1.688-.306.014-.772 1.697.36z',
            })),
          th ||
            (th = Cb.createElement('path', {
              fill: '#0040FF',
              d: 'm11.998 10.667-1.107.065.122.085 1.155-.056z',
            })),
          tp ||
            (tp = Cb.createElement('path', {
              fill: '#00F',
              d: 'm6.623 11.565-.312.46-.308.384.388-.477z',
            })),
          ts ||
            (ts = Cb.createElement('path', {
              fill: 'navy',
              d: 'm4.222 13.775-.111.606-.59-.204.171-.624z',
            })),
          tf ||
            (tf = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm1.637 7.793-.74.572-.15-1.043.76-.555z',
            })),
          tE ||
            (tE = Cb.createElement('path', {
              fill: '#0FF8E7',
              d: 'm13.432 8.102-1.506-.268.062-.69 1.528.326z',
            })),
          tz ||
            (tz = Cb.createElement('path', {
              fill: '#0058FF',
              d: 'm8.678 10.102-.793.25-.07.465.854-.27z',
            })),
          tu ||
            (tu = Cb.createElement('path', {
              fill: '#0048FF',
              d: 'm7.885 10.351-.625.322-.136.486.69-.34z',
            })),
          tg ||
            (tg = Cb.createElement('path', {
              fill: '#0058FF',
              d: 'm10.674 10.23-1.033.122.051.315 1.084-.133z',
            })),
          tb ||
            (tb = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm1.426 10.333-.429.67-.334-.957.463-.668z',
            })),
          tA ||
            (tA = Cb.createElement('path', {
              fill: '#0060FF',
              d: 'm13.85 10.501-1.143-.081.173-.31 1.18.12z',
            })),
          tv ||
            (tv = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm13.634 10.684-1.106-.048.18-.215 1.143.082z',
            })),
          tC ||
            (tC = Cb.createElement('path', {
              fill: '#0074FF',
              d: 'm14.06 10.23-1.18-.12.164-.397 1.213.164z',
            })),
          tx ||
            (tx = Cb.createElement('path', {
              fill: '#006CFF',
              d: 'm9.597 9.926-.92.176-.009.445.974-.195z',
            })),
          tB ||
            (tB = Cb.createElement('path', {
              fill: '#0038FF',
              d: 'm7.26 10.673-.434.384-.204.508.504-.409z',
            })),
          ty ||
            (ty = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm11.838 10.47-1.06.063.113.197 1.107-.065z',
            })),
          tD ||
            (tD = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'M10.362 4.594 8.607 4.28l.006-.768 1.743.36z',
            })),
          tw ||
            (tw = Cb.createElement('path', {
              fill: '#000084',
              d: 'm4.75 13.837-.053.586-.586-.04.111-.608z',
            })),
          tL ||
            (tL = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm2.476 5.33-1.027.41.015-1.008 1.024-.379z',
            })),
          tS ||
            (tS = Cb.createElement('path', {
              fill: '#004CFF',
              d: 'm13.415 10.773-1.069-.023.182-.114 1.106.048z',
            })),
          tM ||
            (tM = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm3.755 4.118-1.265.236.072-.93 1.25-.2z',
            })),
          tk ||
            (tk = Cb.createElement('path', {
              fill: '#0090FF',
              d: 'm14.255 9.878-1.213-.163.151-.478 1.243.215z',
            })),
          tH ||
            (tH = Cb.createElement('path', {
              fill: '#36FFC1',
              d: 'm13.517 7.467-1.528-.326.043-.713 1.543.383z',
            })),
          tT ||
            (tT = Cb.createElement('path', {
              fill: '#8DFF6A',
              d: 'm12.055 5.71-1.697-.36.004-.756 1.695.412z',
            })),
          tO ||
            (tO = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm6.892 3.275-1.622-.1.067-.787 1.591.138z',
            })),
          tP ||
            (tP = Cb.createElement('path', {
              fill: '#00F',
              d: 'm6.31 12.025-.137.5-.379.402.204-.518z',
            })),
          tj ||
            (tj = Cb.createElement('path', {
              fill: '#0050FF',
              d: 'm13.2 10.777-1.031-.008.178-.015 1.069.032z',
            })),
          tN ||
            (tN = Cb.createElement('path', {
              fill: '#0000C4',
              d: 'm5.795 12.928-.052.54-.483.266.123-.56z',
            })),
          tR ||
            (tR = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm14.435 9.452-1.241-.215.13-.541 1.27.268z',
            })),
          tI ||
            (tI = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm8.612 3.513-1.72-.238.036-.749 1.69.279z',
            })),
          t_ ||
            (t_ = Cb.createElement('path', {
              fill: '#0080FF',
              d: 'm10.585 9.823-.988.103.046.426 1.032-.123z',
            })),
          tW ||
            (tW = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm5.27 3.175-1.46.049.099-.825 1.428-.012z',
            })),
          tX ||
            (tX = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm1.507 6.768-.76.555-.067-1.05.77-.534z',
            })),
          tU ||
            (tU = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm1.126 9.378-.463.668L.41 9.028l.49-.662z',
            })),
          t$ ||
            (t$ = Cb.createElement('path', {
              fill: '#002CFF',
              d: 'm6.826 11.057-.245.438-.27.53.311-.46z',
            })),
          tQ ||
            (tQ = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm11.694 10.176-1.02.053.102.305 1.062-.064z',
            })),
          tV ||
            (tV = Cb.createElement('path', {
              fill: '#00009F',
              d: 'm2.942 13.81-.05.62-.578-.504.073-.628z',
            })),
          tG ||
            (tG = Cb.createElement('path', {
              fill: '#0000C8',
              d: 'm2.387 13.298-.072.628-.54-.64.095-.636z',
            })),
          tZ ||
            (tZ = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm8.687 9.548-.743.22-.06.583.794-.25z',
            })),
          tq ||
            (tq = Cb.createElement('path', {
              fill: '#005CFF',
              d: 'm12.993 10.664-.995.003.17.094 1.032.005z',
            })),
          tK ||
            (tK = Cb.createElement('path', {
              fill: '#007CFF',
              d: 'm7.944 9.769-.571.293-.114.612.624-.32z',
            })),
          tJ ||
            (tJ = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm14.592 8.964-1.27-.268.11-.594 1.29.324z',
            })),
          tY ||
            (tY = Cb.createElement('path', {
              fill: '#000089',
              d: 'm3.52 14.175-.025.61-.603-.355.05-.62z',
            })),
          t1 ||
            (t1 = Cb.createElement('path', {
              fill: '#00009B',
              d: 'm5.26 13.734.006.565-.569.122.053-.586z',
            })),
          t0 ||
            (t0 = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm13.575 6.811-1.543-.383.023-.717 1.55.437z',
            })),
          t2 ||
            (t2 = Cb.createElement('path', {
              fill: '#0000FA',
              d: 'm1.87 12.648-.094.638-.486-.766.113-.641z',
            })),
          t3 ||
            (t3 = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm9.561 9.4-.875.148-.008.554.919-.176z',
            })),
          t4 ||
            (t4 = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm10.355 3.873-1.743-.36.007-.708 1.718.401z',
            })),
          t5 ||
            (t5 = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm12.057 5.006-1.695-.412-.007-.721 1.684.46z',
            })),
          t6 ||
            (t6 = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm7.374 10.061-.378.358-.17.638.434-.384z',
            })),
          t7 ||
            (t7 = Cb.createElement('path', {
              fill: 'navy',
              d: 'M4.11 14.381v.599l-.613-.195.025-.61z',
            })),
          t8 ||
            (t8 = Cb.createElement('path', {
              fill: '#006CFF',
              d: 'M12.8 10.47h-.962l.16.195.995-.002z',
            })),
          t9 ||
            (t9 = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'm2.489 4.354-1.025.378.088-.96 1.008-.348z',
            })),
          le ||
            (le = Cb.createElement('path', {
              fill: '#19FFDE',
              d: 'm14.722 8.424-1.29-.322.084-.634 1.306.38z',
            })),
          lt ||
            (lt = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm3.81 3.224-1.25.2.13-.858L3.909 2.4z',
            })),
          ll ||
            (ll = Cb.createElement('path', {
              fill: '#0024FF',
              d: 'm1.403 11.877-.114.64-.422-.87.131-.644z',
            })),
          la ||
            (la = Cb.createElement('path', {
              fill: '#0094FF',
              d: 'm11.57 9.79-.985.033.089.406 1.02-.053z',
            })),
          lr ||
            (lr = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm10.512 9.326-.951.075.035.525.988-.103z',
            })),
          li ||
            (li = Cb.createElement('path', {
              fill: '#FFB200',
              d: 'm6.928 2.526-1.592-.139.094-.699 1.546.173z',
            })),
          ln ||
            (ln = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm.897 8.366-.49.662L.24 7.976l.506-.653z',
            })),
          lm ||
            (lm = Cb.createElement('path', {
              fill: '#0000F1',
              d: 'm6.173 12.524.01.52-.442.425.053-.541z',
            })),
          ld ||
            (ld = Cb.createElement('path', {
              fill: '#FFBD00',
              d: 'm8.62 2.805-1.692-.279.05-.665 1.65.314z',
            })),
          lc ||
            (lc = Cb.createElement('path', {
              fill: '#0020FF',
              d: 'm6.582 11.495-.072.477-.337.552.135-.499z',
            })),
          lo ||
            (lo = Cb.createElement('path', {
              fill: '#8DFF6A',
              d: 'm13.605 6.148-1.551-.437.002-.705 1.549.49z',
            })),
          lF ||
            (lF = Cb.createElement('path', {
              fill: '#006CFF',
              d: 'm14.517 10.78-.883-.096.216-.183.908.128z',
            })),
          lh ||
            (lh = Cb.createElement('path', {
              fill: '#0078FF',
              d: 'm14.758 10.63-.907-.129.209-.27.931.163z',
            })),
          lp ||
            (lp = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm1.45 5.74-.77.533.017-1.03.767-.51z',
            })),
          ls ||
            (ls = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm14.273 10.846-.857-.073.219-.09.883.098z',
            })),
          lf ||
            (lf = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm14.99 10.396-.932-.163.197-.353.953.209z',
            })),
          lE ||
            (lE = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'M5.337 2.388 3.907 2.4l.14-.733 1.382.022z',
            })),
          lz ||
            (lz = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm8.695 8.898-.704.186-.047.685.743-.221z',
            })),
          lu ||
            (lu = Cb.createElement('path', {
              fill: '#000084',
              d: 'm4.697 14.423.024.587-.613-.03v-.599z',
            })),
          lg ||
            (lg = Cb.createElement('path', {
              fill: '#00B',
              d: 'm5.743 13.469.06.542-.537.288-.006-.565z',
            })),
          lb ||
            (lb = Cb.createElement('path', {
              fill: '#0084FF',
              d: 'm12.626 10.184-.932-.009.144.295h.963z',
            })),
          lA ||
            (lA = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm6.996 10.42-.188.412-.226.663.244-.438z',
            })),
          lv ||
            (lv = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm14.823 7.848-1.306-.38.059-.657 1.317.437z',
            })),
          lC ||
            (lC = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm9.536 8.787-.841.11-.008.65.875-.146z',
            })),
          lx ||
            (lx = Cb.createElement('path', {
              fill: '#0064FF',
              d: 'm.997 11.003-.13.644-.348-.956.144-.646z',
            })),
          lB ||
            (lB = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm14.033 10.824-.833-.058.215.006.857.074z',
            })),
          ly ||
            (ly = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm7.991 9.084-.528.259-.089.718.572-.293z',
            })),
          lD ||
            (lD = Cb.createElement('path', {
              fill: '#00A4FF',
              d: 'm15.209 10.087-.954-.209.178-.426.973.257z',
            })),
          lw ||
            (lw = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm12.038 4.334-1.683-.461-.019-.667 1.662.504z',
            })),
          lL ||
            (lL = Cb.createElement('path', {
              fill: '#FFC800',
              d: 'm10.337 3.206-1.718-.401.008-.63 1.681.438z',
            })),
          lS ||
            (lS = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm11.468 9.321-.956.005.073.497.984-.034z',
            })),
          lM ||
            (lM = Cb.createElement('path', {
              fill: '#0074FF',
              d: 'm13.803 10.714-.81-.05.207.102.833.057z',
            })),
          lk ||
            (lk = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm15.408 9.709-.973-.257.156-.49.991.308z',
            })),
          lH ||
            (lH = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm10.46 8.75-.923.037.026.612.95-.073z',
            })),
          lT ||
            (lT = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm7.463 9.343-.334.326-.133.752.378-.358z',
            })),
          lO ||
            (lO = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm13.606 5.496-1.548-.49-.02-.672 1.54.537z',
            })),
          lP ||
            (lP = Cb.createElement('path', {
              fill: '#00A4FF',
              d: 'm12.475 9.816-.906-.028.123.386.932.009z',
            })),
          lj ||
            (lj = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm14.892 7.248-1.317-.437.03-.663 1.322.49z',
            })),
          lN ||
            (lN = Cb.createElement('path', {
              fill: '#000096',
              d: 'm5.266 14.299.047.576-.592.135-.024-.587z',
            })),
          lR ||
            (lR = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm.747 7.323-.506.653-.075-1.061.513-.642z',
            })),
          lI ||
            (lI = Cb.createElement('path', {
              fill: 'gold',
              d: 'm2.56 3.424-1.008.348.16-.888.98-.318z',
            })),
          l_ ||
            (l_ = Cb.createElement('path', {
              fill: '#FF7A00',
              d: 'm6.977 1.861-1.546-.173.12-.592 1.489.202z',
            })),
          lW ||
            (lW = Cb.createElement('path', {
              fill: '#FF9C00',
              d: 'm3.908 2.4-1.218.166.186-.763 1.172-.136z',
            })),
          lX ||
            (lX = Cb.createElement('path', {
              fill: '#FF8900',
              d: 'm8.627 2.175-1.65-.314.062-.563 1.597.343z',
            })),
          lU ||
            (lU = Cb.createElement('path', {
              fill: '#0084FF',
              d: 'm13.588 10.52-.788-.05.193.195.81.05z',
            })),
          l$ ||
            (l$ = Cb.createElement('path', {
              fill: '#00009F',
              d: 'm2.892 14.43.07.566-.576-.503-.072-.567z',
            })),
          lQ ||
            (lQ = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm15.582 9.271-.99-.307.13-.54 1.005.36z',
            })),
          lV ||
            (lV = Cb.createElement('path', {
              fill: '#0000C8',
              d: 'm2.315 13.926.071.567-.54-.641-.07-.566z',
            })),
          lG ||
            (lG = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm6.51 11.972.064.497-.39.575-.01-.52z',
            })),
          lZ ||
            (lZ = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm.663 10.046-.145.645-.263-1.017.155-.646z',
            })),
          lq ||
            (lq = Cb.createElement('path', {
              fill: '#000089',
              d: 'm3.496 14.785.07.565-.603-.354-.07-.566z',
            })),
          lK ||
            (lK = Cb.createElement('path', {
              fill: '#005CFF',
              d: 'm6.808 10.832-.019.454-.28.688.073-.479z',
            })),
          lJ ||
            (lJ = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm8.704 8.168-.678.145-.033.77.704-.185z',
            })),
          lY ||
            (lY = Cb.createElement('path', {
              fill: '#0000ED',
              d: 'm6.185 13.044.108.52-.49.447-.06-.542z',
            })),
          l1 ||
            (l1 = Cb.createElement('path', {
              fill: 'gold',
              d: 'm12 3.71-1.663-.504-.028-.593 1.63.539z',
            })),
          l0 ||
            (l0 = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm9.52 8.102-.816.066-.007.73.84-.11z',
            })),
          l2 ||
            (l2 = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm1.464 4.732-.767.513L.8 4.26l.752-.486z',
            })),
          l3 ||
            (l3 = Cb.createElement('path', {
              fill: '#0000FA',
              d: 'm1.776 13.286.07.566-.485-.764-.073-.571z',
            })),
          l4 ||
            (l4 = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm11.392 8.782-.933-.032.053.576.956-.005z',
            })),
          l5 ||
            (l5 = Cb.createElement('path', {
              fill: '#FF6F00',
              d: 'M5.43 1.688 4.05 1.667l.178-.62 1.323.05z',
            })),
          l6 ||
            (l6 = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm10.309 2.613-1.681-.438.009-.534 1.632.466z',
            })),
          l7 ||
            (l7 = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm8.024 8.313-.5.219-.06.81.527-.258z',
            })),
          l8 ||
            (l8 = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm13.394 10.246-.768-.062.175.285.787.052z',
            })),
          l9 ||
            (l9 = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm7.129 9.668-.144.383-.177.781.188-.412z',
            })),
          ae ||
            (ae = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm12.352 9.377-.884-.056.101.469.906.027z',
            })),
          at ||
            (at = Cb.createElement('path', {
              fill: '#1FFFD7',
              d: 'm15.727 8.785-1.005-.36.102-.577 1.015.414z',
            })),
          al ||
            (al = Cb.createElement('path', {
              fill: 'navy',
              d: 'm4.11 14.98.068.566-.612-.196-.07-.565z',
            })),
          aa ||
            (aa = Cb.createElement('path', {
              fill: '#8DFF6A',
              d: 'm14.927 6.64-1.322-.49v-.654l1.322.542z',
            })),
          ar ||
            (ar = Cb.createElement('path', {
              fill: '#E1FF16',
              d: 'm13.578 4.871-1.54-.537-.04-.624 1.522.58z',
            })),
          ai ||
            (ai = Cb.createElement('path', {
              fill: '#23FFD4',
              d: 'm10.424 8.11-.903-.008.015.686.922-.037z',
            })),
          an ||
            (an = Cb.createElement('path', {
              fill: '#0024FF',
              d: 'm1.29 12.518.072.571-.422-.87-.074-.57z',
            })),
          am ||
            (am = Cb.createElement('path', {
              fill: '#0084FF',
              d: 'm15.116 10.918-.6-.136.242-.151.612.163z',
            })),
          ad ||
            (ad = Cb.createElement('path', {
              fill: '#00B',
              d: 'm5.802 14.01.07.565-.56.3-.046-.576z',
            })),
          ac ||
            (ac = Cb.createElement('path', {
              fill: '#0080FF',
              d: 'm14.858 10.959-.585-.114.245-.066.597.14z',
            })),
          ao ||
            (ao = Cb.createElement('path', {
              fill: '#0090FF',
              d: 'm15.37 10.796-.612-.163.233-.234.625.2z',
            })),
          aF ||
            (aF = Cb.createElement('path', {
              fill: '#0084FF',
              d: 'm14.605 10.924-.571-.1.24.022.585.114z',
            })),
          ah ||
            (ah = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm15.616 10.595-.626-.199.218-.31.639.24z',
            })),
          ap ||
            (ap = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm7.525 8.532-.305.289-.091.847.334-.326z',
            })),
          as ||
            (as = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm.409 9.028-.154.646-.174-1.056.163-.642z',
            })),
          af ||
            (af = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm13.226 9.898-.75-.082.15.367.768.062z',
            })),
          aE ||
            (aE = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'M8.637 1.64 7.04 1.299l.073-.445 1.533.364z',
            })),
          az ||
            (az = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm15.839 8.262-1.016-.414.07-.6 1.02.467z',
            })),
          au ||
            (au = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm.68 6.273-.514.64.02-1.046.511-.622z',
            })),
          ag ||
            (ag = Cb.createElement('path', {
              fill: '#000084',
              d: 'm4.72 15.01.068.568-.61-.032-.068-.566z',
            })),
          ab ||
            (ab = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm7.04 1.298-1.49-.202.142-.466 1.42.223z',
            })),
          aA ||
            (aA = Cb.createElement('path', {
              fill: '#FFAB00',
              d: 'm11.94 3.152-1.631-.54-.039-.505 1.592.568z',
            })),
          av ||
            (av = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm14.362 10.808-.559-.094.23.11.572.1z',
            })),
          aC ||
            (aC = Cb.createElement('path', {
              fill: '#2CFFCA',
              d: 'm11.343 8.184-.92-.076.035.64.934.032z',
            })),
          ax ||
            (ax = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm15.847 10.326-.637-.24.198-.377.648.283z',
            })),
          aB ||
            (aB = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm2.69 2.566-.98.318.23-.791.935-.29z',
            })),
          ay ||
            (ay = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm4.048 1.667-1.172.136.236-.648 1.113-.108z',
            })),
          aD ||
            (aD = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm12.26 8.874-.868-.092.076.539.885.056z',
            })),
          aw ||
            (aw = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm9.516 7.36-.808.018-.004.79.816-.066z',
            })),
          aL ||
            (aL = Cb.createElement('path', {
              fill: '#4DFFAA',
              d: 'm8.708 7.378-.666.096-.018.838.678-.144z',
            })),
          aS ||
            (aS = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm14.928 6.038-1.322-.542-.028-.625 1.314.59z',
            })),
          aM ||
            (aM = Cb.createElement('path', {
              fill: '#0058FF',
              d: 'm6.79 11.286.11.473-.326.712-.065-.497z',
            })),
          ak ||
            (ak = Cb.createElement('path', {
              fill: '#FF6F00',
              d: 'M10.27 2.107 8.639 1.64l.01-.424 1.577.487z',
            })),
          aH ||
            (aH = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm.867 11.647.075.571-.348-.952-.075-.576z',
            })),
          aT ||
            (aT = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'M13.52 4.29 12 3.71l-.06-.558 1.497.616z',
            })),
          aO ||
            (aO = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm6.574 12.47.153.497-.434.596-.108-.52z',
            })),
          aP ||
            (aP = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm6.985 10.05.023.426-.219.81.02-.453z',
            })),
          aj ||
            (aj = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm14.135 10.616-.546-.096.214.194.56.094z',
            })),
          aN ||
            (aN = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm10.411 7.42-.895-.06.004.742.904.008z',
            })),
          aR ||
            (aR = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm16.056 9.992-.648-.283.174-.438.657.33z',
            })),
          aI ||
            (aI = Cb.createElement('path', {
              fill: '#FF3F00',
              d: 'm5.55 1.096-1.323-.049.214-.49L5.692.63z',
            })),
          a_ ||
            (a_ = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'M1.553 3.772.8 4.258l.188-.913.725-.46z',
            })),
          aW ||
            (aW = Cb.createElement('path', {
              fill: '#49FFAD',
              d: 'm8.042 7.474-.486.175-.031.883.5-.22z',
            })),
          aX ||
            (aX = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm13.088 9.485-.734-.108.122.44.75.082z',
            })),
          aU ||
            (aU = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm15.915 7.715-1.02-.467.035-.609 1.024.52z',
            })),
          a$ ||
            (a$ = Cb.createElement('path', {
              fill: '#09F0EE',
              d: 'm7.22 8.82-.113.35-.123.88.144-.382z',
            })),
          aQ ||
            (aQ = Cb.createElement('path', {
              fill: '#00009B',
              d: 'm5.313 14.875.066.569-.591.134-.067-.568z',
            })),
          aV ||
            (aV = Cb.createElement('path', {
              fill: '#0000E8',
              d: 'm6.294 13.564.089.552-.512.459-.069-.564z',
            })),
          aG ||
            (aG = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm13.93 10.352-.536-.107.194.275.547.096z',
            })),
          aZ ||
            (aZ = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm16.239 9.601-.657-.33.145-.486.664.38z',
            })),
          aq ||
            (aq = Cb.createElement('path', {
              fill: '#33FFC4',
              d: 'm12.2 8.321-.857-.136.049.597.867.092z',
            })),
          aK ||
            (aK = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm11.323 7.546-.912-.127.013.69.918.075z',
            })),
          aJ ||
            (aJ = Cb.createElement('path', {
              fill: '#FF3B00',
              d: 'M8.647 1.217 7.112.853 7.194.54l1.462.378z',
            })),
          aY ||
            (aY = Cb.createElement('path', {
              fill: '#0000A8',
              d: 'm2.963 14.997.108.507-.571-.498-.114-.513z',
            })),
          a1 ||
            (a1 = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm14.891 5.46-1.313-.589-.058-.58 1.3.63z',
            })),
          a0 ||
            (a0 = Cb.createElement('path', {
              fill: '#FF8600',
              d: 'm11.862 2.673-1.592-.567-.047-.403 1.543.588z',
            })),
          a2 ||
            (a2 = Cb.createElement('path', {
              fill: '#0000CD',
              d: 'm2.386 14.493.114.513-.53-.634-.123-.52z',
            })),
          a3 ||
            (a3 = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm.241 7.976-.163.642L0 7.551l.163-.638z',
            })),
          a4 ||
            (a4 = Cb.createElement('path', {
              fill: '#46FFB1',
              d: 'm7.557 7.649-.29.249-.047.923.305-.29z',
            })),
          a5 ||
            (a5 = Cb.createElement('path', {
              fill: '#FF2900',
              d: 'M7.112.853 5.692.63l.162-.327 1.34.237z',
            })),
          a6 ||
            (a6 = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm.518 10.691.075.576-.264-1.013-.074-.58z',
            })),
          a7 ||
            (a7 = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm9.523 6.584-.81-.038-.005.832.808-.017z',
            })),
          a8 ||
            (a8 = Cb.createElement('path', {
              fill: '#000092',
              d: 'm3.565 15.35.102.507-.596-.353-.108-.508z',
            })),
          a9 ||
            (a9 = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm13.436 3.768-1.497-.616-.078-.479 1.465.644z',
            })),
          re ||
            (re = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm8.713 6.546-.668.046-.003.883.666-.096z',
            })),
          rt ||
            (rt = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm12.985 9.017-.726-.143.094.503.734.108z',
            })),
          rl ||
            (rl = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm10.224 1.704-1.578-.487.01-.3 1.513.498z',
            })),
          ra ||
            (ra = Cb.createElement('path', {
              fill: '#8AFF6D',
              d: 'm15.952 7.16-1.024-.52v-.602l1.023.57z',
            })),
          rr ||
            (rr = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.697 5.245-.51.624.115-1.003L.8 4.26z',
            })),
          ri ||
            (ri = Cb.createElement('path', {
              fill: '#00F',
              d: 'm1.847 13.852.122.52-.48-.755-.125-.53z',
            })),
          rn ||
            (rn = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.753 10.02-.527-.122.168.348.536.106z',
            })),
          rm ||
            (rm = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm10.418 6.698-.898-.114-.007.775.895.059z',
            })),
          rd ||
            (rd = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'm16.391 9.163-.664-.38.112-.522.67.43z',
            })),
          rc ||
            (rc = Cb.createElement('path', {
              fill: '#FF3000',
              d: 'm4.227 1.047-1.115.108.286-.512L4.441.558z',
            })),
          ro ||
            (ro = Cb.createElement('path', {
              fill: '#FF5900',
              d: 'm2.876 1.803-.934.29.292-.673.878-.265z',
            })),
          rF ||
            (rF = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm15.126 11.108-.268-.149.258-.044.271.167z',
            })),
          rh ||
            (rh = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm15.387 11.084-.271-.166.254-.122.276.192z',
            })),
          rp ||
            (rp = Cb.createElement('path', {
              fill: '#000084',
              d: 'm4.178 15.546.096.503-.607-.192-.102-.505z',
            })),
          rs ||
            (rs = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm14.867 11.06-.263-.136.254.036.267.148z',
            })),
          rf ||
            (rf = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm8.045 6.592-.487.127v.93l.486-.174z',
            })),
          rE ||
            (rE = Cb.createElement('path', {
              fill: '#00A4FF',
              d: 'm15.646 10.986-.276-.19.245-.2.28.224z',
            })),
          rz ||
            (rz = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm7.008 10.476.147.449-.254.832-.112-.471z',
            })),
          ru ||
            (ru = Cb.createElement('path', {
              fill: '#00B',
              d: 'm5.871 14.575.065.571-.557.298-.066-.569z',
            })),
          rg ||
            (rg = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm6.9 11.758.19.477-.363.732-.153-.498z',
            })),
          rb ||
            (rb = Cb.createElement('path', {
              fill: '#FF1600',
              d: 'M5.692.63 4.441.558l.242-.344 1.17.088z',
            })),
          rA ||
            (rA = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm12.175 7.732-.852-.186.02.64.857.135z',
            })),
          rv ||
            (rv = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm14.622 10.939-.26-.13.246.115.263.136z',
            })),
          rC ||
            (rC = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm1.362 13.088.126.529-.418-.858-.13-.538z',
            })),
          rx ||
            (rx = Cb.createElement('path', {
              fill: '#06ECF1',
              d: 'm7.106 9.17.051.396-.15.91-.022-.425z',
            })),
          rB ||
            (rB = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm14.82 4.92-1.3-.63-.085-.522 1.282.665z',
            })),
          ry ||
            (ry = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm11.333 6.881-.915-.183-.009.721.912.127z',
            })),
          rD ||
            (rD = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm15.895 10.818-.28-.223.231-.27.283.259z',
            })),
          rw ||
            (rw = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm13.607 9.635-.519-.15.138.413.527.122z',
            })),
          rL ||
            (rL = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm11.765 2.292-1.543-.588-.054-.289 1.488.6z',
            })),
          rS ||
            (rS = Cb.createElement('path', {
              fill: '#FF9100',
              d: 'm1.713 2.884-.725.461.267-.816.687-.435z',
            })),
          rM ||
            (rM = Cb.createElement('path', {
              fill: '#46FFB1',
              d: 'm16.508 8.692-.67-.43.077-.547.672.48z',
            })),
          rk ||
            (rk = Cb.createElement('path', {
              fill: '#39FFBE',
              d: 'M12.918 8.506 12.2 8.32l.06.553.725.143z',
            })),
          rH ||
            (rH = Cb.createElement('path', {
              fill: '#F20',
              d: 'M8.656.918 7.194.54l.09-.172 1.38.381z',
            })),
          rT ||
            (rT = Cb.createElement('path', {
              fill: '#ADFF49',
              d: 'm15.951 6.608-1.023-.57-.036-.578 1.018.615z',
            })),
          rO ||
            (rO = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.267 7.898-.099.314-.062.958.114-.35z',
            })),
          rP ||
            (rP = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm14.39 10.749-.255-.133.227.192.26.131z',
            })),
          rj ||
            (rj = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm13.326 3.319-1.465-.646-.096-.381 1.428.663z',
            })),
          rN ||
            (rN = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm6.727 12.967.107.542-.451.607-.09-.552z',
            })),
          rR ||
            (rR = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm9.54 5.791-.824-.095-.003.85.81.038z',
            })),
          rI ||
            (rI = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm16.129 10.584-.283-.258.21-.334.285.297z',
            })),
          r_ ||
            (r_ = Cb.createElement('path', {
              fill: '#00008D',
              d: 'm4.788 15.578.09.503-.604-.032-.096-.503z',
            })),
          rW ||
            (rW = Cb.createElement('path', {
              fill: '#FF3800',
              d: 'M10.17 1.415 8.655.918l.01-.168 1.442.501z',
            })),
          rX ||
            (rX = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm.255 9.674.076.58-.175-1.05-.077-.585z',
            })),
          rU ||
            (rU = Cb.createElement('path', {
              fill: '#ADFF49',
              d: 'm10.45 5.965-.91-.174-.017.793.898.114z',
            })),
          r$ ||
            (r$ = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm8.716 5.696-.684-.01.013.905.668-.045z',
            })),
          rQ ||
            (rQ = Cb.createElement('path', {
              fill: '#F60B00',
              d: 'M7.194.54 5.852.302l.176-.18 1.255.246z',
            })),
          rV ||
            (rV = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm7.558 6.718-.29.206v.974l.288-.25z',
            })),
          rG ||
            (rG = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm.166 6.913-.163.638.02-1.052.164-.632z',
            })),
          rZ ||
            (rZ = Cb.createElement('path', {
              fill: '#00C0FF',
              d: 'm14.182 10.494-.252-.142.204.264.256.133z',
            })),
          rq ||
            (rq = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm.94 12.22.13.538-.343-.942-.134-.55z',
            })),
          rK ||
            (rK = Cb.createElement('path', {
              fill: '#1FFFD7',
              d: 'm13.497 9.199-.512-.182.103.468.52.15z',
            })),
          rJ ||
            (rJ = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm16.341 10.29-.285-.298.183-.391.288.34z',
            })),
          rY ||
            (rY = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm12.187 7.122-.854-.24-.01.665.852.186z',
            })),
          r1 ||
            (r1 = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm16.587 8.195-.672-.48.037-.556.674.528z',
            })),
          r0 ||
            (r0 = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm14.717 4.433-1.281-.665-.11-.45 1.257.695z',
            })),
          r2 ||
            (r2 = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm11.374 6.208-.924-.245-.03.735.913.183z',
            })),
          r3 ||
            (r3 = Cb.createElement('path', {
              fill: '#BAFF3C',
              d: 'm8.032 5.686-.504.077.03.955.487-.126z',
            })),
          r4 ||
            (r4 = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm12.89 7.964-.715-.232.024.59.719.184z',
            })),
          r5 ||
            (r5 = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm11.658 2.014-1.489-.599-.06-.165 1.428.6z',
            })),
          r6 ||
            (r6 = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm.8 4.258-.498.606.209-.933.476-.586z',
            })),
          r7 ||
            (r7 = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm15.91 6.075-1.018-.615-.071-.54 1.009.654z',
            })),
          r8 ||
            (r8 = Cb.createElement('path', {
              fill: '#F10800',
              d: 'M4.44.558 3.399.643 3.72.281l.963-.067z',
            })),
          r9 ||
            (r9 = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm14.001 10.18-.248-.16.177.33.252.142z',
            })),
          ie ||
            (ie = Cb.createElement('path', {
              fill: '#0000ED',
              d: 'm6.383 14.116.064.574-.51.456-.066-.572z',
            })),
          it ||
            (it = Cb.createElement('path', {
              fill: '#FF7A00',
              d: 'm13.194 2.955-1.429-.663-.109-.278 1.382.674z',
            })),
          il ||
            (il = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'M5.853.302 4.683.214l.265-.188L6.03.123z',
            })),
          ia ||
            (ia = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm9.57 5.004-.852-.154v.846l.824.095z',
            })),
          ir ||
            (ir = Cb.createElement('path', {
              fill: '#FA0F00',
              d: 'M8.666.749 7.286.368 7.38.343l1.296.376z',
            })),
          ii ||
            (ii = Cb.createElement('path', {
              fill: '#FF2500',
              d: 'm3.112 1.155-.88.265.35-.536.816-.24z',
            })),
          im ||
            (im = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm16.527 9.941-.288-.34.152-.437.29.384z',
            })),
          id ||
            (id = Cb.createElement('path', {
              fill: '#00009F',
              d: 'm5.379 15.444.084.506-.585.131-.09-.503z',
            })),
          ic ||
            (ic = Cb.createElement('path', {
              fill: '#FF2500',
              d: 'M10.109 1.25 8.666.75l.01-.03 1.367.494z',
            })),
          io ||
            (io = Cb.createElement('path', {
              fill: '#DBFF1C',
              d: 'm10.5 5.24-.932-.236-.029.787.91.174z',
            })),
          iF ||
            (iF = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm8.718 4.85-.714-.066.028.902.684.01z',
            })),
          ih ||
            (ih = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm7.157 9.566.173.427-.175.933-.147-.45z',
            })),
          ip ||
            (ip = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm13.426 8.727-.508-.221.067.51.512.183z',
            })),
          is ||
            (is = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm7.156 10.926.218.457-.284.852-.19-.477z',
            })),
          iE ||
            (iE = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.168 8.212.066.367-.077.988-.05-.397z',
            })),
          iz ||
            (iz = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'M7.285.368 6.03.123 6.216.1 7.38.344z',
            })),
          iu ||
            (iu = Cb.createElement('path', {
              fill: '#0000B2',
              d: 'm3.071 15.504.107.426-.56-.49-.118-.434z',
            })),
          ig ||
            (ig = Cb.createElement('path', {
              fill: '#8AFF6D',
              d: 'm16.626 7.687-.674-.528v-.551l.67.574z',
            })),
          ib ||
            (ib = Cb.createElement('path', {
              fill: '#0000DA',
              d: 'm2.5 15.006.117.434-.522-.621-.127-.45z',
            })),
          iA ||
            (iA = Cb.createElement('path', {
              fill: '#A7FF50',
              d: 'm12.234 6.506-.86-.298-.041.673.854.241z',
            })),
          iv ||
            (iv = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm7.267 6.924-.099.277v1.011l.099-.314z',
            })),
          iC ||
            (iC = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm13.853 9.816-.245-.181.145.385.248.159z',
            })),
          ix ||
            (ix = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm15.052 11.286.074-.176.26-.025-.076.192z',
            })),
          iB ||
            (iB = Cb.createElement('path', {
              fill: '#FFAB00',
              d: 'm14.582 4.011-1.258-.694-.133-.363 1.229.711z',
            })),
          iy ||
            (iy = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm.593 11.268.134.548-.26-1.001-.137-.562z',
            })),
          iD ||
            (iD = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'M11.443 5.544 10.5 5.24l-.051.725.923.245z',
            })),
          iw ||
            (iw = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm14.797 11.225.071-.164.258.049-.074.176z',
            })),
          iL ||
            (iL = Cb.createElement('path', {
              fill: '#F50',
              d: 'm1.942 2.093-.687.435.342-.698.637-.41z',
            })),
          iS ||
            (iS = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm.079 8.618.077.586-.078-1.061-.077-.589z',
            })),
          iM ||
            (iM = Cb.createElement('path', {
              fill: '#00009B',
              d: 'm3.667 15.857.095.419-.585-.344-.106-.428z',
            })),
          ik ||
            (ik = Cb.createElement('path', {
              fill: '#FF3F00',
              d: 'm11.537 1.85-1.429-.6-.065-.037 1.365.591z',
            })),
          iH ||
            (iH = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm15.31 11.276.077-.192.26-.098-.083.214z',
            })),
          iT ||
            (iT = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm7.528 5.763-.307.163.046 1 .29-.207z',
            })),
          iO ||
            (iO = Cb.createElement('path', {
              fill: '#0050FF',
              d: 'm7.09 12.235.123.53-.379.742-.107-.541z',
            })),
          iP ||
            (iP = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm12.902 7.408-.715-.286-.012.61.715.233z',
            })),
          ij ||
            (ij = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm16.681 9.548-.29-.384.118-.472.29.43z',
            })),
          iN ||
            (iN = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm15.83 5.575-1.009-.653-.104-.488.996.688z',
            })),
          iR ||
            (iR = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm14.553 11.1.068-.161.247.122-.07.164z',
            })),
          iI ||
            (iI = Cb.createElement('path', {
              fill: '#00F',
              d: 'm1.97 14.372.127.448-.472-.74-.136-.462z',
            })),
          i_ ||
            (i_ = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm13.04 2.688-1.382-.674-.123-.163 1.335.674z',
            })),
          iW ||
            (iW = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm15.566 11.2.082-.214.25-.168-.082.24z',
            })),
          iX ||
            (iX = Cb.createElement('path', {
              fill: 'gold',
              d: 'm9.608 4.245-.89-.214v.82l.851.153z',
            })),
          iU ||
            (iU = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm8.003 4.784-.535.026.06.953.504-.077z',
            })),
          i$ ||
            (i$ = Cb.createElement('path', {
              fill: '#ED0400',
              d: 'M8.676.72 7.38.342l.097.122 1.208.363z',
            })),
          iQ ||
            (iQ = Cb.createElement('path', {
              fill: '#FF1E00',
              d: 'M10.043 1.213 8.676.719l.009.11 1.29.478z',
            })),
          iV ||
            (iV = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm10.572 4.541-.964-.296-.039.76.93.235z',
            })),
          iG ||
            (iG = Cb.createElement('path', {
              fill: '#00C0FF',
              d: 'm14.325 10.91.065-.162.231.19-.068.16z',
            })),
          iZ ||
            (iZ = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.186 5.867-.163.632.122-1.01.159-.625z',
            })),
          iq ||
            (iq = Cb.createElement('path', {
              fill: '#000092',
              d: 'm4.274 16.05.082.415-.596-.191-.093-.417z',
            })),
          iK ||
            (iK = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm8.717 4.03-.757-.122.043.875.714.067z',
            })),
          iJ ||
            (iJ = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm15.813 11.058.081-.24.234-.234-.086.27z',
            })),
          iY ||
            (iY = Cb.createElement('path', {
              fill: '#5DFF9A',
              d: 'm13.398 8.23-.507-.266.028.542.509.22z',
            })),
          i1 ||
            (i1 = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm13.742 9.41-.245-.211.11.436.244.181z',
            })),
          i0 ||
            (i0 = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm16.622 7.182-.672-.574-.041-.533.668.615z',
            })),
          i2 ||
            (i2 = Cb.createElement('path', {
              fill: '#C80000',
              d: 'M6.03.123 4.949.026 5.23 0l.984.1z',
            })),
          i3 ||
            (i3 = Cb.createElement('path', {
              fill: '#0000C4',
              d: 'm5.936 15.146.079.511-.553.293-.083-.506z',
            })),
          i4 ||
            (i4 = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm14.118 10.664.064-.17.208.255-.065.163z',
            })),
          i5 ||
            (i5 = Cb.createElement('path', {
              fill: '#CD0000',
              d: 'M4.683.214 3.72.28l.353-.2.876-.055z',
            })),
          i6 ||
            (i6 = Cb.createElement('path', {
              fill: '#CEFF29',
              d: 'm12.316 5.902-.873-.358-.07.664.86.298z',
            })),
          i7 ||
            (i7 = Cb.createElement('path', {
              fill: '#FF3800',
              d: 'm11.408 1.804-1.365-.591-.068.094 1.3.57z',
            })),
          i8 ||
            (i8 = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm11.539 4.907-.968-.367-.072.7.942.304z',
            })),
          i9 ||
            (i9 = Cb.createElement('path', {
              fill: '#4DFFAA',
              d: 'm16.8 9.122-.292-.429.08-.496.29.474z',
            })),
          ne ||
            (ne = Cb.createElement('path', {
              fill: '#0030FF',
              d: 'm1.488 13.617.137.462-.409-.84-.144-.48z',
            })),
          nt ||
            (nt = Cb.createElement('path', {
              fill: '#D10000',
              d: 'M7.38.343 6.216.098l.191.134 1.07.233z',
            })),
          nl ||
            (nl = Cb.createElement('path', {
              fill: '#FF9100',
              d: 'm14.421 3.666-1.227-.71-.153-.268 1.195.72z',
            })),
          na ||
            (na = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm6.834 13.51.063.577-.448.603-.065-.574z',
            })),
          nr ||
            (nr = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm9.655 3.533-.939-.271v.769l.89.214z',
            })),
          ni ||
            (ni = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm16.044 10.855.085-.271.212-.295-.086.305z',
            })),
          nn ||
            (nn = Cb.createElement('path', {
              fill: '#A4FF53',
              d: 'm12.954 6.846-.72-.34-.047.616.715.286z',
            })),
          nm ||
            (nm = Cb.createElement('path', {
              fill: '#F50',
              d: 'm12.872 2.524-1.335-.674-.129-.046 1.285.665z',
            })),
          nd ||
            (nd = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm15.713 5.122-.995-.687-.136-.424.98.714z',
            })),
          nc ||
            (nc = Cb.createElement('path', {
              fill: '#FF1E00',
              d: 'M9.975 1.307 8.685.829l.009.248 1.211.451z',
            })),
          no ||
            (no = Cb.createElement('path', {
              fill: '#FF8D00',
              d: 'm.987 3.345-.476.586.3-.839.444-.564z',
            })),
          nF ||
            (nF = Cb.createElement('path', {
              fill: '#FFB600',
              d: 'm10.66 3.89-1.005-.357-.048.712.965.296z',
            })),
          nh ||
            (nh = Cb.createElement('path', {
              fill: '#F10800',
              d: 'M8.685.829 7.477.467l.096.27 1.12.34z',
            })),
          np ||
            (np = Cb.createElement('path', {
              fill: '#E40000',
              d: 'm3.398.643-.814.24.398-.381L3.72.28z',
            })),
          ns ||
            (ns = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm13.94 10.365.062-.185.18.314-.064.17z',
            })),
          nf ||
            (nf = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm7.96 3.909-.582-.024.09.925.535-.026z',
            })),
          nE ||
            (nE = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm8.716 3.262-.812-.176.056.823.757.122z',
            })),
          nz ||
            (nz = Cb.createElement('path', {
              fill: '#000096',
              d: 'm4.877 16.081.072.417-.592-.033-.082-.416z',
            })),
          nu ||
            (nu = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm7.468 4.81-.34.118.093.997.307-.163z',
            })),
          ng ||
            (ng = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm13.669 8.973-.243-.245.071.472.245.212z',
            })),
          nb ||
            (nb = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm.33 10.254.136.562-.17-1.038-.14-.574z',
            })),
          nA ||
            (nA = Cb.createElement('path', {
              fill: '#FF3800',
              d: 'm11.275 1.88-1.3-.572-.069.221 1.234.545z',
            })),
          nv ||
            (nv = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.22 5.925-.115.24.063 1.037.1-.278z',
            })),
          nC ||
            (nC = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm13.408 7.72-.506-.312-.012.558.508.264z',
            })),
          nx ||
            (nx = Cb.createElement('path', {
              fill: '#FF7E00',
              d: 'm9.71 2.889-.997-.327.003.699.939.271z',
            })),
          nB ||
            (nB = Cb.createElement('path', {
              fill: '#09F0EE',
              d: 'm16.255 10.594.088-.305.186-.348-.091.34z',
            })),
          ny ||
            (ny = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.168 7.202.066.337v1.04l-.065-.367z',
            })),
          nD ||
            (nD = Cb.createElement('path', {
              fill: '#FFC400',
              d: 'm11.66 4.315-1-.426-.088.653.967.368z',
            })),
          nw ||
            (nw = Cb.createElement('path', {
              fill: '#FF2900',
              d: 'm9.905 1.528-1.211-.451.007.378 1.136.417z',
            })),
          nL ||
            (nL = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.235 8.579.186.405-.09 1.01-.173-.428z',
            })),
          nS ||
            (nS = Cb.createElement('path', {
              fill: '#FF9100',
              d: 'M10.764 3.301 9.71 2.89l-.055.644 1.005.356z',
            })),
          nM ||
            (nM = Cb.createElement('path', {
              fill: '#CAFF2C',
              d: 'm16.579 6.69-.669-.615-.082-.5.663.653z',
            })),
          nk ||
            (nk = Cb.createElement('path', {
              fill: '#6AFF8D',
              d: 'm16.878 8.67-.29-.475.04-.508.29.518z',
            })),
          nH ||
            (nH = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm12.43 5.326-.891-.418-.096.636.873.359z',
            })),
          nT ||
            (nT = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.33 9.993.238.44-.195.95-.218-.457z',
            })),
          nO ||
            (nO = Cb.createElement('path', {
              fill: '#FF7A00',
              d: 'm14.237 3.408-1.197-.72-.168-.164 1.161.72z',
            })),
          nP ||
            (nP = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm12.693 2.47-1.285-.665-.133.074 1.233.645z',
            })),
          nj ||
            (nj = Cb.createElement('path', {
              fill: '#FF1300',
              d: 'm8.694 1.077-1.12-.34.093.408 1.034.309z',
            })),
          nN ||
            (nN = Cb.createElement('path', {
              fill: '#D60000',
              d: 'M7.477.467 6.407.233l.192.289.974.215z',
            })),
          nR ||
            (nR = Cb.createElement('path', {
              fill: '#FF5900',
              d: 'm9.771 2.33-1.063-.375.005.608.997.327z',
            })),
          nI ||
            (nI = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm.001 7.551.077.589L.1 7.092.022 6.5z',
            })),
          n_ ||
            (n_ = Cb.createElement('path', {
              fill: '#FF3B00',
              d: 'm9.837 1.872-1.136-.417.007.5 1.063.375z',
            })),
          nW ||
            (nW = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm1.071 12.759.145.48-.337-.923-.152-.5z',
            })),
          nX ||
            (nX = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm13.792 10.02.061-.204.148.364-.062.185z',
            })),
          nU ||
            (nU = Cb.createElement('path', {
              fill: '#FF4300',
              d: 'm11.14 2.073-1.235-.545-.068.344 1.17.508z',
            })),
          n$ ||
            (n$ = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm8.713 2.563-.879-.225.07.748.812.176z',
            })),
          nQ ||
            (nQ = Cb.createElement('path', {
              fill: '#FF6F00',
              d: 'M10.88 2.793 9.77 2.33l-.06.559 1.054.412z',
            })),
          nV ||
            (nV = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'm13.044 6.3-.728-.398-.082.604.72.34z',
            })),
          nG ||
            (nG = Cb.createElement('path', {
              fill: '#FF1E00',
              d: 'm2.234 1.42-.637.41.408-.559.579-.387z',
            })),
          nZ ||
            (nZ = Cb.createElement('path', {
              fill: '#B00',
              d: 'M6.214.1 5.228 0l.29.14.888.093z',
            })),
          nq ||
            (nq = Cb.createElement('path', {
              fill: '#FFBD00',
              d: 'm15.561 4.725-.98-.714-.163-.345.96.732z',
            })),
          nK ||
            (nK = Cb.createElement('path', {
              fill: '#F50',
              d: 'm11.008 2.38-1.171-.508-.066.458 1.11.463z',
            })),
          nJ ||
            (nJ = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm7.373 11.383.134.523-.295.86-.122-.53z',
            })),
          nY ||
            (nY = Cb.createElement('path', {
              fill: '#FF2900',
              d: 'm8.701 1.455-1.034-.308.088.538.953.27z',
            })),
          n1 ||
            (n1 = Cb.createElement('path', {
              fill: '#FF4700',
              d: 'm8.708 1.955-.953-.27.08.653.878.226z',
            })),
          n0 ||
            (n0 = Cb.createElement('path', {
              fill: '#FFA300',
              d: 'M11.803 3.784 10.764 3.3l-.104.588 1 .426z',
            })),
          n2 ||
            (n2 = Cb.createElement('path', {
              fill: '#FF8900',
              d: 'm7.903 3.086-.642-.072.117.87.582.025z',
            })),
          n3 ||
            (n3 = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm16.436 10.282.091-.341.154-.393-.094.38z',
            })),
          n4 ||
            (n4 = Cb.createElement('path', {
              fill: '#FF5200',
              d: 'm12.507 2.524-1.232-.645-.135.194 1.181.616z',
            })),
          n5 ||
            (n5 = Cb.createElement('path', {
              fill: '#60FF97',
              d: 'm13.637 8.515-.24-.285.03.497.242.245z',
            })),
          n6 ||
            (n6 = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm14.392 11.416.405-.191.255.059-.413.2z',
            })),
          n7 ||
            (n7 = Cb.createElement('path', {
              fill: '#B20000',
              d: 'M4.95.026 4.073.08l.375-.032L5.23 0z',
            })),
          n8 ||
            (n8 = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm14.64 11.484.412-.2.258-.008-.42.214z',
            })),
          n9 ||
            (n9 = Cb.createElement('path', {
              fill: '#0000F1',
              d: 'm6.447 14.69.073.518-.505.45-.079-.512z',
            })),
          me ||
            (me = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm14.155 11.286.398-.187.245.125-.405.191z',
            })),
          mt ||
            (mt = Cb.createElement('path', {
              fill: 'gold',
              d: 'm12.576 4.792-.916-.477-.123.592.894.42z',
            })),
          ml ||
            (ml = Cb.createElement('path', {
              fill: '#A0FF56',
              d: 'm13.462 7.211-.508-.365-.052.562.506.314z',
            })),
          ma ||
            (ma = Cb.createElement('path', {
              fill: '#FF6F00',
              d: 'm14.033 3.245-1.16-.721-.18-.055 1.124.712z',
            })),
          mr ||
            (mr = Cb.createElement('path', {
              fill: '#E40000',
              d: 'M7.573.737 6.6.522l.187.437.881.189z',
            })),
          mi ||
            (mi = Cb.createElement('path', {
              fill: '#FF8200',
              d: 'm11.964 3.326-1.083-.533-.117.507 1.039.483z',
            })),
          mn ||
            (mn = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm.302 4.864-.159.626.22-.942.148-.616z',
            })),
          mm ||
            (mm = Cb.createElement('path', {
              fill: '#0000A8',
              d: 'm5.462 15.95.061.42-.574.128-.072-.417z',
            })),
          md ||
            (md = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm7.378 3.885-.388.075.137.968.34-.118z',
            })),
          mc ||
            (mc = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm13.681 9.64.06-.23.112.406-.06.204z',
            })),
          mo ||
            (mo = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm14.89 11.49.42-.214.256-.076-.428.232z',
            })),
          mF ||
            (mF = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm16.917 8.205-.29-.518-.005-.506.29.56z',
            })),
          mh ||
            (mh = Cb.createElement('path', {
              fill: '#FF5900',
              d: 'm12.32 2.689-1.18-.616-.132.307 1.13.58z',
            })),
          mp ||
            (mp = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm16.493 6.227-.663-.653-.117-.452.653.684z',
            })),
          ms ||
            (ms = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm13.933 11.098.392-.187.228.188-.399.187z',
            })),
          mf ||
            (mf = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm12.137 2.96-1.13-.58-.126.413 1.082.533z',
            })),
          mE ||
            (mE = Cb.createElement('path', {
              fill: '#FF5D00',
              d: 'm7.834 2.338-.713-.116.14.792.643.072z',
            })),
          mz ||
            (mz = Cb.createElement('path', {
              fill: '#0000C4',
              d: 'm3.177 15.93.073.322-.544-.475-.089-.336z',
            })),
          mu ||
            (mu = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm13.17 5.78-.74-.454-.114.577.728.397z',
            })),
          mg ||
            (mg = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm15.138 11.432.428-.232.245-.142-.436.254z',
            })),
          mb ||
            (mb = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm15.381 4.398-.96-.732-.184-.258.938.74z',
            })),
          mA ||
            (mA = Cb.createElement('path', {
              fill: '#FF1300',
              d: 'M7.667 1.147 6.785.959l.176.572.794.155z',
            })),
          mv ||
            (mv = Cb.createElement('path', {
              fill: '#0000E8',
              d: 'm2.617 15.44.09.337-.508-.604-.104-.354z',
            })),
          mC ||
            (mC = Cb.createElement('path', {
              fill: '#36FFC1',
              d: 'm16.587 9.927.094-.379.118-.427-.095.418z',
            })),
          mx ||
            (mx = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm13.732 10.857.386-.193.207.247-.392.187z',
            })),
          mB ||
            (mB = Cb.createElement('path', {
              fill: '#FF3400',
              d: 'm7.755 1.685-.794-.154.16.693.713.117z',
            })),
          my ||
            (my = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm7.127 4.928-.146.204.122 1.034.116-.241z',
            })),
          mD ||
            (mD = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm7.212 12.767.063.581-.378.739-.063-.578z',
            })),
          mw ||
            (mw = Cb.createElement('path', {
              fill: '#B00',
              d: 'm3.72.28-.738.222.436-.217.655-.204z',
            })),
          mL ||
            (mL = Cb.createElement('path', {
              fill: '#BF0000',
              d: 'M6.407.233 5.521.14 5.81.44l.79.082z',
            })),
          mS ||
            (mS = Cb.createElement('path', {
              fill: '#FFB600',
              d: 'm12.747 4.316-.944-.532-.143.53.916.477z',
            })),
          mM ||
            (mM = Cb.createElement('path', {
              fill: '#FF6800',
              d: 'm13.816 3.18-1.123-.71-.186.054 1.086.694z',
            })),
          mk ||
            (mk = Cb.createElement('path', {
              fill: '#0000AD',
              d: 'm3.762 16.274.057.313-.569-.335-.073-.322z',
            })),
          mH ||
            (mH = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm.727 11.816.152.5-.255-.98-.158-.52z',
            })),
          mT ||
            (mT = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm.156 9.204.14.574-.076-1.05-.14-.588z',
            })),
          mO ||
            (mO = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm13.649 8.05-.24-.33-.011.51.24.285z',
            })),
          mP ||
            (mP = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm1.255 2.528-.445.564.384-.72.405-.542z',
            })),
          mj ||
            (mj = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm15.377 11.312.435-.254.231-.204-.441.28z',
            })),
          mN ||
            (mN = Cb.createElement('path', {
              fill: '#0004FF',
              d: 'm2.096 14.819.103.354-.457-.719-.117-.375z',
            })),
          mR ||
            (mR = Cb.createElement('path', {
              fill: '#49FFAD',
              d: 'm13.609 9.233.06-.26.072.437-.06.23z',
            })),
          mI ||
            (mI = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.105 6.166.052.309.078 1.064-.067-.337z',
            })),
          m_ ||
            (m_ = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm13.558 10.57.381-.205.18.3-.387.193z',
            })),
          mW ||
            (mW = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm13.556 6.717-.512-.418-.09.547.508.365z',
            })),
          mX ||
            (mX = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm12.94 3.91-.977-.584-.16.457.944.532z',
            })),
          mU ||
            (mU = Cb.createElement('path', {
              fill: '#FF7E00',
              d: 'm7.261 3.014-.449.034.178.912.387-.075z',
            })),
          m$ ||
            (m$ = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm13.593 3.217-1.086-.694-.186.163 1.047.664z',
            })),
          mQ ||
            (mQ = Cb.createElement('path', {
              fill: '#A7FF50',
              d: 'm16.912 7.74-.29-.559-.045-.49.29.595z',
            })),
          mV ||
            (mV = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm16.368 5.804-.653-.684-.154-.395.645.708z',
            })),
          mG ||
            (mG = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm13.33 5.302-.754-.51-.145.534.74.454z',
            })),
          mZ ||
            (mZ = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm15.175 4.149-.939-.74-.204-.164.917.74z',
            })),
          mq ||
            (mq = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.234 7.54.187.383v1.06l-.187-.404z',
            })),
          mK ||
            (mK = Cb.createElement('path', {
              fill: '#FF8200',
              d: 'm13.149 3.586-1.011-.627-.174.367.976.584z',
            })),
          mJ ||
            (mJ = Cb.createElement('path', {
              fill: '#FF7300',
              d: 'm13.368 3.353-1.048-.664-.183.27 1.011.627z',
            })),
          mY ||
            (mY = Cb.createElement('path', {
              fill: '#0000A4',
              d: 'm4.358 16.465.04.309-.578-.187-.058-.313z',
            })),
          m1 ||
            (m1 = Cb.createElement('path', {
              fill: '#A40000',
              d: 'm5.23 0-.782.048.385.14.687-.049z',
            })),
          m0 ||
            (m0 = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm16.704 9.539.095-.417.08-.451-.099.456z',
            })),
          m2 ||
            (m2 = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm15.602 11.134.443-.28.21-.26-.45.307z',
            })),
          m3 ||
            (m3 = Cb.createElement('path', {
              fill: '#CD0000',
              d: 'M6.599.522 5.808.44l.284.456.693.063z',
            })),
          m4 ||
            (m4 = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.42 8.984.249.424-.1 1.025-.239-.44z',
            })),
          m5 ||
            (m5 = Cb.createElement('path', {
              fill: '#1FFFD7',
              d: 'm13.415 10.24.377-.22.147.345-.38.204z',
            })),
          m6 ||
            (m6 = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.022 6.5.078.592.122-1.006-.079-.596z',
            })),
          m7 ||
            (m7 = Cb.createElement('path', {
              fill: '#DA0000',
              d: 'm2.584.884-.579.387.465-.403.512-.367z',
            })),
          m8 ||
            (m8 = Cb.createElement('path', {
              fill: '#0000CD',
              d: 'm6.014 15.657.05.427-.541.286-.06-.42z',
            })),
          m9 ||
            (m9 = Cb.createElement('path', {
              fill: '#003CFF',
              d: 'm1.624 14.079.117.375-.397-.816-.129-.4z',
            })),
          de ||
            (de = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'M7.121 2.222 6.6 2.218l.213.83.45-.034z',
            })),
          dt ||
            (dt = Cb.createElement('path', {
              fill: '#9DFF5A',
              d: 'm13.702 7.586-.24-.375-.054.509.24.33z',
            })),
          dl ||
            (dl = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm13.577 8.81.06-.295.032.458-.06.26z',
            })),
          da ||
            (da = Cb.createElement('path', {
              fill: '#E80000',
              d: 'M6.785.96 6.092.897l.266.597.604.036z',
            })),
          dr ||
            (dr = Cb.createElement('path', {
              fill: '#FFC400',
              d: 'm13.52 4.877-.773-.562-.17.476.754.51z',
            })),
          di ||
            (di = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm6.99 3.96-.193.17.183 1.002.147-.204z',
            })),
          dn ||
            (dn = Cb.createElement('path', {
              fill: '#FF8600',
              d: 'm14.949 3.986-.916-.741-.217-.065.891.732z',
            })),
          dm ||
            (dm = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm13.689 6.25-.518-.47-.127.52.512.417z',
            })),
          dd ||
            (dd = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.568 10.433.143.516-.205.957-.133-.523z',
            })),
          dc ||
            (dc = Cb.createElement('path', {
              fill: '#F20',
              d: 'm6.96 1.53-.604-.035.245.724.522.003z',
            })),
          dF ||
            (dF = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm6.897 14.087.069.526-.446.595-.073-.518z',
            })),
          dh ||
            (dh = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm16.208 5.433-.647-.708-.181-.327.636.724z',
            })),
          dp ||
            (dp = Cb.createElement('path', {
              fill: '#0FF8E7',
              d: 'm15.803 10.901.45-.307.182-.312-.456.337z',
            })),
          ds ||
            (ds = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm16.867 7.286-.286-.597-.085-.463.285.63z',
            })),
          df ||
            (df = Cb.createElement('path', {
              fill: '#33FFC4',
              d: 'm13.307 9.88.374-.24.112.38-.377.22z',
            })),
          dE ||
            (dE = Cb.createElement('path', {
              fill: '#0000A8',
              d: 'm4.949 16.498.024.308-.575-.032-.041-.309z',
            })),
          dz ||
            (dz = Cb.createElement('path', {
              fill: '#6AFF8D',
              d: 'm16.78 9.126.098-.457.038-.464-.1.494z',
            })),
          du ||
            (du = Cb.createElement('path', {
              fill: '#9F0000',
              d: 'm4.073.08-.655.204.462-.04.568-.195z',
            })),
          dg ||
            (dg = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.677 11.631.715-.215.247.068-.725.224z',
            })),
          db ||
            (db = Cb.createElement('path', {
              fill: '#FFAB00',
              d: 'm13.733 4.52-.794-.61-.192.406.773.561z',
            })),
          dA ||
            (dA = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm13.45 11.497.704-.211.238.13-.715.215z',
            })),
          dv ||
            (dv = Cb.createElement('path', {
              fill: '#FF8200',
              d: 'm14.707 3.912-.89-.732-.224.037.866.713z',
            })),
          dC ||
            (dC = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm.466 10.816.156.52-.167-1.017-.16-.541z',
            })),
          dx ||
            (dx = Cb.createElement('path', {
              fill: '#FF8D00',
              d: 'm.511 3.93-.149.616.313-.848.135-.606z',
            })),
          dB ||
            (dB = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.915 11.708.724-.224.251.006-.735.236z',
            })),
          dy ||
            (dy = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm13.237 11.308.696-.21.222.188-.705.21z',
            })),
          dD ||
            (dD = Cb.createElement('path', {
              fill: '#A80000',
              d: 'm5.52.14-.685.047.386.308L5.81.44z',
            })),
          dw ||
            (dw = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm6.981 5.132.023.282.153 1.061-.052-.309z',
            })),
          dL ||
            (dL = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm13.965 4.238-.816-.653-.21.324.795.61z',
            })),
          dS ||
            (dS = Cb.createElement('path', {
              fill: '#FF8200',
              d: 'm14.46 3.93-.866-.713-.225.136.84.687z',
            })),
          dM ||
            (dM = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm13.587 8.38.062-.33-.012.465-.06.294z',
            })),
          dk ||
            (dk = Cb.createElement('path', {
              fill: '#BAFF3C',
              d: 'm13.797 7.14-.24-.423-.095.494.24.375z',
            })),
          dH ||
            (dH = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm13.857 5.824-.526-.522-.16.478.518.47z',
            })),
          dT ||
            (dT = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm14.155 11.726.735-.236.247-.058-.745.25z',
            })),
          dO ||
            (dO = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm15.98 10.619.456-.337.151-.355-.462.367z',
            })),
          dP ||
            (dP = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm13.044 11.07.688-.213.2.241-.696.21z',
            })),
          dj ||
            (dj = Cb.createElement('path', {
              fill: '#0078FF',
              d: 'm1.215 13.238.129.4-.327-.895-.138-.427z',
            })),
          dN ||
            (dN = Cb.createElement('path', {
              fill: '#FF8900',
              d: 'm14.209 4.04-.84-.687-.22.233.816.654z',
            })),
          dR ||
            (dR = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm16.016 5.122-.635-.724-.206-.25.623.736z',
            })),
          dI ||
            (dI = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm7.507 11.906.063.586-.295.857-.063-.581z',
            })),
          d_ ||
            (d_ = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm.079 8.14.14.588.022-1.034L.1 7.092z',
            })),
          dW ||
            (dW = Cb.createElement('path', {
              fill: '#FF7300',
              d: 'm6.813 3.048-.252.138.237.943.192-.17z',
            })),
          dX ||
            (dX = Cb.createElement('path', {
              fill: '#4DFFAA',
              d: 'm13.235 9.497.373-.264.072.408-.374.24z',
            })),
          dU ||
            (dU = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm16.777 6.857-.285-.63-.125-.423.282.658z',
            })),
          d$ ||
            (d$ = Cb.createElement('path', {
              fill: '#FF1A00',
              d: 'm1.597 1.83-.403.542.456-.582.357-.519z',
            })),
          dQ ||
            (dQ = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm14.392 11.683.745-.251.24-.12-.755.269z',
            })),
          dV ||
            (dV = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm12.877 10.789.681-.22.174.288-.688.213z',
            })),
          dG ||
            (dG = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm16.817 8.699.1-.494-.005-.465-.101.529z',
            })),
          dZ ||
            (dZ = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.157 6.475.175.363.089 1.085-.186-.384z',
            })),
          dq ||
            (dq = Cb.createElement('path', {
              fill: '#B60000',
              d: 'M5.808.44 5.22.495l.376.469.496-.068z',
            })),
          dK ||
            (dK = Cb.createElement('path', {
              fill: 'gold',
              d: 'm14.055 5.449-.535-.572-.189.424.526.522z',
            })),
          dJ ||
            (dJ = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm15.798 4.882-.623-.734-.227-.164.612.735z',
            })),
          dY ||
            (dY = Cb.createElement('path', {
              fill: '#0000FA',
              d: 'm6.52 15.208.04.437-.495.44-.05-.428z',
            })),
          d1 ||
            (d1 = Cb.createElement('path', {
              fill: '#00B',
              d: 'm5.523 16.37.008.313-.558.122-.024-.307z',
            })),
          d0 ||
            (d0 = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm16.125 10.296.462-.368.117-.39-.467.4z',
            })),
          d2 ||
            (d2 = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm14.622 11.581.756-.269.224-.178-.766.289z',
            })),
          d3 ||
            (d3 = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'm13.93 6.72-.241-.47-.133.467.241.422z',
            })),
          d4 ||
            (d4 = Cb.createElement('path', {
              fill: '#FF3F00',
              d: 'm6.6 2.218-.324.11.286.857.252-.138z',
            })),
          d5 ||
            (d5 = Cb.createElement('path', {
              fill: '#9AFF5D',
              d: 'm13.64 7.956.062-.37-.053.463-.062.33z',
            })),
          d6 ||
            (d6 = Cb.createElement('path', {
              fill: '#B20000',
              d: 'M2.982.502 2.47.869l.508-.236.44-.348z',
            })),
          d7 ||
            (d7 = Cb.createElement('path', {
              fill: '#0000D6',
              d: 'm3.25 16.252.025.204L2.751 16l-.045-.224z',
            })),
          d8 ||
            (d8 = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm12.738 10.47.677-.231.143.329-.682.22z',
            })),
          d9 ||
            (d9 = Cb.createElement('path', {
              fill: '#0000FA',
              d: 'm2.706 15.777.045.224-.49-.582-.063-.245z',
            })),
          ce ||
            (ce = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm13.204 9.1.373-.29.032.423-.374.264z',
            })),
          ct ||
            (ct = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.42 7.923.25.411-.001 1.074-.25-.424z',
            })),
          cl ||
            (cl = Cb.createElement('path', {
              fill: '#D60000',
              d: 'm6.092.896-.494.068.355.616.405-.086z',
            })),
          ca ||
            (ca = Cb.createElement('path', {
              fill: '#960000',
              d: 'M4.448.048 3.88.243l.476.133.477-.189z',
            })),
          cr ||
            (cr = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'm16.65 6.462-.282-.658-.16-.371.278.679z',
            })),
          ci ||
            (ci = Cb.createElement('path', {
              fill: '#FF1300',
              d: 'm6.356 1.494-.405.086.325.748.323-.11z',
            })),
          cn ||
            (cn = Cb.createElement('path', {
              fill: '#0000BF',
              d: 'm3.82 16.587.003.194-.548-.322-.024-.205z',
            })),
          cm ||
            (cm = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm14.279 5.134-.546-.612-.213.355.535.572z',
            })),
          cd ||
            (cd = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm.143 5.49.077.597.22-.939-.078-.602z',
            })),
          cc ||
            (cc = Cb.createElement('path', {
              fill: '#FF9C00',
              d: 'm15.559 4.72-.613-.736-.24-.073.596.725z',
            })),
          co ||
            (co = Cb.createElement('path', {
              fill: '#A0FF56',
              d: 'm16.811 8.269.102-.529-.046-.454-.101.56z',
            })),
          cF ||
            (cF = Cb.createElement('path', {
              fill: '#FFAB00',
              d: 'm6.798 4.13-.02.256.226 1.028-.023-.282z',
            })),
          ch ||
            (ch = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm2.2 15.173.063.245-.44-.692-.083-.273z',
            })),
          cp ||
            (cp = Cb.createElement('path', {
              fill: '#06ECF1',
              d: 'm14.834 11.423.768-.29.204-.232-.776.31z',
            })),
          cs ||
            (cs = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm.879 12.317.139.426-.248-.952-.147-.456z',
            })),
          cf ||
            (cf = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm7.275 13.348.065.537-.374.728-.069-.526z',
            })),
          cE ||
            (cE = Cb.createElement('path', {
              fill: '#39FFBE',
              d: 'm12.634 10.124.673-.245.108.36-.676.23z',
            })),
          cz ||
            (cz = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm14.523 4.89-.558-.653-.232.283.546.612z',
            })),
          cu ||
            (cu = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.669 9.408.147.51-.106 1.031-.142-.516z',
            })),
          cg ||
            (cg = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm15.304 4.637-.597-.725-.248.018.583.709z',
            })),
          cb ||
            (cb = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm.296 9.778.161.541-.074-1.027-.163-.564z',
            })),
          cA ||
            (cA = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm16.237 9.939.466-.4.078-.413-.47.43z',
            })),
          cv ||
            (cv = Cb.createElement('path', {
              fill: '#EEFF09',
              d: 'm14.1 6.337-.245-.513-.167.426.242.47z',
            })),
          cC ||
            (cC = Cb.createElement('path', {
              fill: '#FF9F00',
              d: 'm14.78 4.724-.572-.684-.245.198.558.653z',
            })),
          cx ||
            (cx = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm15.042 4.639-.583-.71-.25.11.571.685z',
            })),
          cB ||
            (cB = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm13.733 7.55.064-.409-.095.45-.062.369z',
            })),
          cy ||
            (cy = Cb.createElement('path', {
              fill: '#0000B6',
              d: 'm4.398 16.774-.018.187-.557-.18-.004-.194z',
            })),
          cD ||
            (cD = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm12.485 11.735.965-.236.227.134-.973.24z',
            })),
          cw ||
            (cw = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm16.486 6.112-.278-.68-.192-.31.274.694z',
            })),
          cL ||
            (cL = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm13.213 8.701.375-.321-.01.43-.374.29z',
            })),
          cS ||
            (cS = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm12.704 11.873.975-.242.237.077-.986.25z',
            })),
          cM ||
            (cM = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm12.282 11.54.954-.232.213.189-.964.238z',
            })),
          ck ||
            (ck = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm12.928 11.959.987-.251.24.018-.998.26z',
            })),
          cH ||
            (cH = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm.81 3.092-.136.606.397-.731.123-.595z',
            })),
          cT ||
            (cT = Cb.createElement('path', {
              fill: '#09F0EE',
              d: 'm12.098 11.302.946-.232.193.238-.955.233z',
            })),
          cO ||
            (cO = Cb.createElement('path', {
              fill: '#19FFDE',
              d: 'm15.03 11.212.776-.311.177-.282-.783.334z',
            })),
          cP ||
            (cP = Cb.createElement('path', {
              fill: '#0048FF',
              d: 'm1.742 14.454.081.273-.384-.786-.096-.303z',
            })),
          cj ||
            (cj = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm12.565 9.758.67-.261.072.383-.673.245z',
            })),
          cN ||
            (cN = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm16.764 7.848.103-.562-.088-.43-.102.59z',
            })),
          cR ||
            (cR = Cb.createElement('path', {
              fill: '#960000',
              d: 'm4.833.187-.477.189.477.307.387-.188z',
            })),
          cI ||
            (cI = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm14.3 6.005-.244-.557-.199.376.245.513z',
            })),
          c_ ||
            (c_ = Cb.createElement('path', {
              fill: '#0000DA',
              d: 'm6.065 16.084-.008.322-.526.277-.008-.313z',
            })),
          cW ||
            (cW = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm13.157 11.986.998-.26.237-.041-1.01.273z',
            })),
          cX ||
            (cX = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.004 5.414.15.346.177 1.077-.174-.364z',
            })),
          cU ||
            (cU = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm11.938 11.022.938-.233.168.281-.946.232z',
            })),
          c$ ||
            (c$ = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm6.56 3.186-.074.234.292.968.02-.257z',
            })),
          cQ ||
            (cQ = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.1 7.092.14.602.12-.993-.14-.615z',
            })),
          cV ||
            (cV = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm16.31 9.557.47-.431.037-.427-.472.461z',
            })),
          cG ||
            (cG = Cb.createElement('path', {
              fill: '#D10000',
              d: 'm2.005 1.271-.357.52.519-.426.303-.497z',
            })),
          cZ ||
            (cZ = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm16.29 5.816-.274-.694-.218-.24.27.702z',
            })),
          cq ||
            (cq = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.71 10.949.064.59-.205.953-.062-.586z',
            })),
          cK ||
            (cK = Cb.createElement('path', {
              fill: '#CEFF29',
              d: 'm13.863 7.17.068-.45-.134.42-.065.408z',
            })),
          cJ ||
            (cJ = Cb.createElement('path', {
              fill: '#960000',
              d: 'm3.418.285-.44.348.54-.058.362-.333z',
            })),
          cY ||
            (cY = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm13.263 8.31.377-.354-.053.424-.374.321z',
            })),
          c1 ||
            (c1 = Cb.createElement('path', {
              fill: '#00B',
              d: 'm4.973 16.806-.039.186-.554-.031.018-.187z',
            })),
          c0 ||
            (c0 = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm13.382 11.956 1.01-.273.229-.102-1.02.286z',
            })),
          c2 ||
            (c2 = Cb.createElement('path', {
              fill: '#0020FF',
              d: 'm6.966 14.613.032.45-.437.581-.041-.437z',
            })),
          c3 ||
            (c3 = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'm15.197 10.953.783-.334.145-.323-.789.357zM11.806 10.708l.933-.239.137.318-.938.233z',
            })),
          c4 ||
            (c4 = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm14.527 5.73-.248-.596-.224.315.245.557z',
            })),
          c5 ||
            (c5 = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm12.534 9.381.67-.28.032.396-.67.261z',
            })),
          c6 ||
            (c6 = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'm16.675 7.446.102-.59-.127-.394-.102.612z',
            })),
          c7 ||
            (c7 = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm16.067 5.584-.27-.702-.239-.163.266.703z',
            })),
          c8 ||
            (c8 = Cb.createElement('path', {
              fill: '#A80000',
              d: 'm5.22.495-.387.188.463.473.3-.192z',
            })),
          c9 ||
            (c9 = Cb.createElement('path', {
              fill: '#19FFDE',
              d: 'm.622 11.335.146.456-.163-.986-.15-.486z',
            })),
          oe ||
            (oe = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.332 6.837.24.402.099 1.093-.25-.41z',
            })),
          ot ||
            (ot = Cb.createElement('path', {
              fill: '#FF3400',
              d: 'm6.276 2.328-.14.216.35.876.075-.234z',
            })),
          ol ||
            (ol = Cb.createElement('path', {
              fill: '#0080FF',
              d: 'm1.344 13.638.096.303-.315-.86-.107-.337z',
            })),
          oa ||
            (oa = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm14.774 5.521-.251-.63-.245.244.248.597z',
            })),
          or ||
            (or = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm13.602 11.868 1.02-.286.214-.158-1.032.302z',
            })),
          oi ||
            (oi = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm16.345 9.16.472-.461-.006-.43-.475.49z',
            })),
          on ||
            (on = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm11.705 10.369.929-.245.104.346-.932.238z',
            })),
          om ||
            (om = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm14.03 6.827.07-.49-.17.382-.067.449z',
            })),
          od ||
            (od = Cb.createElement('path', {
              fill: '#FFB200',
              d: 'm15.824 5.422-.265-.703-.255-.082.262.694z',
            })),
          oc ||
            (oc = Cb.createElement('path', {
              fill: '#C80000',
              d: 'm5.596.964-.3.192.439.626.216-.204z',
            })),
          oo ||
            (oo = Cb.createElement('path', {
              fill: '#F10800',
              d: 'm5.951 1.58-.216.204.4.762.14-.217z',
            })),
          oF ||
            (oF = Cb.createElement('path', {
              fill: '#B1FF46',
              d: 'm13.351 7.935.381-.386-.092.408-.378.353z',
            })),
          oh ||
            (oh = Cb.createElement('path', {
              fill: '#FFB200',
              d: 'm15.033 5.383-.254-.659-.256.167.25.63z',
            })),
          op ||
            (op = Cb.createElement('path', {
              fill: '#FF8D00',
              d: 'm.362 4.546.077.602.313-.842L.675 3.7z',
            })),
          os ||
            (os = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm15.336 10.653.79-.357.11-.357-.794.38z',
            })),
          of ||
            (of = Cb.createElement('path', {
              fill: '#FFAB00',
              d: 'm15.566 5.332-.262-.694h-.262l.258.68z',
            })),
          oE ||
            (oE = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm15.3 5.32-.258-.681-.262.085.253.659z',
            })),
          oz ||
            (oz = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm12.54 9.004.672-.303-.009.4-.67.28z',
            })),
          ou ||
            (ou = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm11.327 11.996 1.158-.261.219.138-1.17.27z',
            })),
          og ||
            (og = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm11.135 11.797 1.147-.256.204.192-1.157.263z',
            })),
          ob ||
            (ob = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm.219 8.728.163.564.022-1.011-.163-.587z',
            })),
          oA ||
            (oA = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm16.548 7.075.102-.612-.163-.35-.101.632z',
            })),
          ov ||
            (ov = Cb.createElement('path', {
              fill: '#0000ED',
              d: 'm3.276 16.459-.024.081-.5-.437V16z',
            })),
          oC ||
            (oC = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm7.57 12.492.062.549-.292.844-.065-.537z',
            })),
          ox ||
            (ox = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.67 8.334.148.506-.003 1.078-.146-.51z',
            })),
          oB ||
            (oB = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm11.534 12.143 1.17-.27.226.086-1.18.28z',
            })),
          oy ||
            (oy = Cb.createElement('path', {
              fill: '#00F',
              d: 'M2.752 16v.104l-.467-.555-.022-.13z',
            })),
          oD ||
            (oD = Cb.createElement('path', {
              fill: '#FFA300',
              d: 'm6.778 4.388.115.332.26 1.04-.15-.346z',
            })),
          ow ||
            (ow = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm10.96 11.552 1.138-.25.184.239-1.148.256zM13.803 11.724l1.032-.301.193-.211-1.042.318z',
            })),
          oL ||
            (oL = Cb.createElement('path', {
              fill: '#0000CD',
              d: 'm5.53 16.683-.06.191-.536.118.039-.186z',
            })),
          oS ||
            (oS = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm11.639 10.012.926-.254.07.368-.93.244z',
            })),
          oM ||
            (oM = Cb.createElement('path', {
              fill: '#0000D6',
              d: 'm3.823 16.781-.049.068-.522-.308.023-.082z',
            })),
          ok ||
            (ok = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm14.226 6.531.075-.526-.2.332-.072.49z',
            })),
          oH ||
            (oH = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm11.748 12.239 1.18-.28.228.027-1.192.29z',
            })),
          oT ||
            (oT = Cb.createElement('path', {
              fill: '#890000',
              d: 'm3.88.243-.362.332.555.123.285-.321z',
            })),
          oO ||
            (oO = Cb.createElement('path', {
              fill: '#19FFDE',
              d: 'm10.807 11.269 1.13-.245.16.28-1.137.25z',
            })),
          oP ||
            (oP = Cb.createElement('path', {
              fill: '#00F',
              d: 'm6.56 15.645-.02.334-.48.426.006-.322z',
            })),
          oj ||
            (oj = Cb.createElement('path', {
              fill: '#A0FF56',
              d: 'm16.336 8.759.474-.49-.048-.42-.473.515z',
            })),
          oN ||
            (oN = Cb.createElement('path', {
              fill: '#0024FF',
              d: 'm2.263 15.419.022.13-.42-.66-.043-.162z',
            })),
          oR ||
            (oR = Cb.createElement('path', {
              fill: '#FF1600',
              d: 'm1.194 2.372-.122.595.475-.592.1-.585z',
            })),
          oI ||
            (oI = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'm13.48 7.587.386-.418-.131.38-.381.386z',
            })),
          o_ ||
            (o_ = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm16.385 6.744.1-.632-.195-.296-.1.645z',
            })),
          oW ||
            (oW = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm15.442 10.32.795-.381.074-.382-.8.404z',
            })),
          oX ||
            (oX = Cb.createElement('path', {
              fill: '#A80000',
              d: 'm2.47.868-.304.497.568-.256.245-.476z',
            })),
          oU ||
            (oU = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm11.964 12.276 1.193-.29.225-.03-1.204.3z',
            })),
          o$ ||
            (o$ = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm12.588 8.635.675-.327-.05.392-.672.304z',
            })),
          oQ ||
            (oQ = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'm10.681 10.952 1.125-.244.132.313-1.13.245z',
            })),
          oV ||
            (oV = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm1.018 12.743.107.337-.238-.916-.117-.373z',
            })),
          oG ||
            (oG = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm13.987 11.53 1.043-.318.169-.26-1.053.334z',
            })),
          oZ ||
            (oZ = Cb.createElement('path', {
              fill: '#0000CD',
              d: 'm4.38 16.96-.074.06-.53-.171.048-.068z',
            })),
          oq ||
            (oq = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm11.608 9.646.926-.265.031.377-.926.254z',
            })),
          oK ||
            (oK = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm14.449 6.29.078-.56-.227.275-.074.526z',
            })),
          oJ ||
            (oJ = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'm.22 6.086.14.616.218-.927-.139-.628z',
            })),
          oY ||
            (oY = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.816 9.918.062.595-.105 1.026-.063-.59z',
            })),
          o1 ||
            (o1 = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm12.178 12.256 1.204-.3.218-.088-1.216.31z',
            })),
          o0 ||
            (o0 = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm16.19 6.462.1-.645-.223-.233-.097.653z',
            })),
          o2 ||
            (o2 = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm16.29 8.364.474-.516-.089-.402-.472.539z',
            })),
          o3 ||
            (o3 = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm7.153 5.76.222.395.197 1.085-.24-.403z',
            })),
          o4 ||
            (o4 = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm1.822 14.727.043.161-.365-.75-.062-.197z',
            })),
          o5 ||
            (o5 = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm.456 10.319.151.486-.071-.996-.154-.517z',
            })),
          o6 ||
            (o6 = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm10.585 10.612 1.12-.245.1.34-1.124.245z',
            })),
          o7 ||
            (o7 = Cb.createElement('path', {
              fill: '#005CFF',
              d: 'm7.34 13.885.025.466-.367.712-.032-.449z',
            })),
          o8 ||
            (o8 = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm6.486 3.42.067.321.34.977-.115-.332z',
            })),
          o9 ||
            (o9 = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm14.692 6.11.082-.589-.245.21-.078.56z',
            })),
          Fe ||
            (Fe = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm13.637 7.277.392-.45-.166.343-.384.417z',
            })),
          Ft ||
            (Ft = Cb.createElement('path', {
              fill: '#890000',
              d: 'm4.356.376-.285.32.555.3.204-.313z',
            })),
          Fl ||
            (Fl = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm15.511 9.961.8-.404.034-.397-.802.427z',
            })),
          Fa ||
            (Fa = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm15.97 6.236.097-.653-.245-.164-.095.654z',
            })),
          Fr ||
            (Fr = Cb.createElement('path', {
              fill: '#ADFF49',
              d: 'm12.672 8.285.68-.35-.09.374-.674.327z',
            })),
          Fi ||
            (Fi = Cb.createElement('path', {
              fill: '#2CFFCA',
              d: 'm14.146 11.286 1.05-.334.14-.3-1.058.35z',
            })),
          Fn ||
            (Fn = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm11.614 9.281.927-.277-.008.377-.926.265z',
            })),
          Fm ||
            (Fm = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm10.128 12.39 1.301-.313-.2-.174-1.306.31z',
            })),
          Fd ||
            (Fd = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm9.924 12.213 1.306-.31-.184-.223-1.31.308z',
            })),
          Fc ||
            (Fc = Cb.createElement('path', {
              fill: '#FFC400',
              d: 'm14.949 5.996.085-.612-.26.138-.082.59z',
            })),
          Fo ||
            (Fo = Cb.createElement('path', {
              fill: '#0000ED',
              d: 'm6.057 16.406-.081.202-.507.266.06-.191z',
            })),
          FF ||
            (FF = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm12.384 12.178 1.218-.31.204-.144-1.227.32z',
            })),
          Fh ||
            (Fh = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm10.341 12.514 1.299-.316-.21-.122-1.302.314z',
            })),
          Fp ||
            (Fp = Cb.createElement('path', {
              fill: '#0000D1',
              d: 'm4.934 16.992-.1.058-.528-.03.074-.06z',
            })),
          Fs ||
            (Fs = Cb.createElement('path', {
              fill: '#FFC400',
              d: 'm15.729 6.073.095-.653-.258-.09-.092.65z',
            })),
          Ff ||
            (Ff = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm10.521 10.256 1.117-.245.067.357-1.12.245z',
            })),
          FE ||
            (FE = Cb.createElement('path', {
              fill: '#0FF8E7',
              d: 'm9.737 11.988 1.308-.308-.163-.265-1.313.303z',
            })),
          Fz ||
            (Fz = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm15.211 5.951.089-.632-.267.064-.085.612z',
            })),
          Fu ||
            (Fu = Cb.createElement('path', {
              fill: '#CEFF29',
              d: 'm16.203 7.985.472-.539-.127-.371-.47.557z',
            })),
          Fg ||
            (Fg = Cb.createElement('path', {
              fill: '#FFBD00',
              d: 'm15.474 5.98.092-.646-.266-.013-.089.632z',
            })),
          Fb ||
            (Fb = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm10.56 12.581 1.296-.316-.216-.066-1.3.316z',
            })),
          FA ||
            (FA = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm13.828 7.01.398-.479-.196.296-.393.449z',
            })),
          Fv ||
            (Fv = Cb.createElement('path', {
              fill: '#FF2D00',
              d: 'm6.136 2.544.009.313.408.884-.067-.32z',
            })),
          FC ||
            (FC = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm9.57 11.718 1.31-.303-.14-.3-1.314.298z',
            })),
          Fx ||
            (Fx = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm.674 3.698.077.608.399-.727-.077-.612z',
            })),
          FB ||
            (FB = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.573 7.24.144.504.101 1.096-.147-.506z',
            })),
          Fy ||
            (Fy = Cb.createElement('path', {
              fill: '#9B0000',
              d: 'm4.833.683-.204.313.54.469.128-.31z',
            })),
          FD ||
            (FD = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'm.24 7.694.164.586.119-.97L.359 6.7z',
            })),
          Fw ||
            (Fw = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm1.439 13.941.06.198-.3-.821-.074-.237z',
            })),
          FL ||
            (FL = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm15.543 9.587.802-.427-.008-.401-.804.447z',
            })),
          FS ||
            (FS = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm10.779 12.592 1.293-.318-.216-.008-1.296.317z',
            })),
          FM ||
            (FM = Cb.createElement('path', {
              fill: '#8D0000',
              d: 'm2.979.633-.245.476.6-.078.183-.456z',
            })),
          Fk ||
            (Fk = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm12.791 7.962.688-.375-.125.348-.68.35z',
            })),
          FH ||
            (FH = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm14.278 11.002 1.058-.35.106-.333-1.065.366z',
            })),
          FT ||
            (FT = Cb.createElement('path', {
              fill: '#0FF8E7',
              d: 'm12.576 12.045 1.227-.32.184-.196-1.238.33z',
            })),
          FO ||
            (FO = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm6.998 15.063-.034.353-.423.563.021-.335z',
            })),
          FP ||
            (FP = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm7.773 11.54.06.562-.2.939-.063-.548z',
            })),
          Fj ||
            (Fj = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm11.657 8.928.931-.293-.046.367-.928.28z',
            })),
          FN ||
            (FN = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm.77 11.79.117.374-.156-.947-.123-.412z',
            })),
          FR ||
            (FR = Cb.createElement('path', {
              fill: '#00F',
              d: 'm3.252 16.54-.055-.04-.473-.415.027.019z',
            })),
          FI ||
            (FI = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm10.49 9.892 1.118-.244.03.367-1.117.245z',
            })),
          F_ ||
            (F_ = Cb.createElement('path', {
              fill: '#0010FF',
              d: 'm2.751 16.104-.027-.019-.44-.525.001-.011z',
            })),
          FW ||
            (FW = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm9.426 11.413 1.315-.299-.111-.33-1.318.294z',
            })),
          FX ||
            (FX = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm16.079 7.632.469-.557-.163-.331-.466.571z',
            })),
          FU ||
            (FU = Cb.createElement('path', {
              fill: '#E80000',
              d: 'm5.735 1.782-.056.31.466.765-.01-.313z',
            })),
          F$ ||
            (F$ = Cb.createElement('path', {
              fill: '#B00',
              d: 'm5.297 1.156-.129.309.511.626.056-.309z',
            })),
          FQ ||
            (FQ = Cb.createElement('path', {
              fill: '#D10000',
              d: 'm1.648 1.79-.099.585.54-.436.078-.572z',
            })),
          FV ||
            (FV = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm14.043 6.796.408-.508-.223.242-.399.48z',
            })),
          FG ||
            (FG = Cb.createElement('path', {
              fill: '#0000F1',
              d: 'm3.774 16.849-.081-.06-.494-.29.054.04z',
            })),
          FZ ||
            (FZ = Cb.createElement('path', {
              fill: '#FF9F00',
              d: 'm6.893 4.718.194.392.29 1.045-.224-.395z',
            })),
          Fq ||
            (Fq = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm10.99 12.54 1.292-.316-.21.05-1.293.318z',
            })),
          FK ||
            (FK = Cb.createElement('path', {
              fill: '#0038FF',
              d: 'm2.285 15.549-.002.011-.395-.623-.021-.049z',
            })),
          FJ ||
            (FJ = Cb.createElement('path', {
              fill: '#0000E3',
              d: 'm5.471 16.874-.125.063-.512.113.1-.058z',
            })),
          FY ||
            (FY = Cb.createElement('path', {
              fill: '#9DFF5A',
              d: 'm15.535 9.206.802-.447-.048-.395-.803.465z',
            })),
          F1 ||
            (F1 = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm9.312 11.078 1.318-.293-.082-.35-1.32.288z',
            })),
          F0 ||
            (F0 = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'm15.92 7.315.465-.571-.194-.282-.46.579z',
            })),
          F2 ||
            (F2 = Cb.createElement('path', {
              fill: '#1FFFD7',
              d: 'm12.749 11.859 1.238-.329.16-.242-1.247.339z',
            })),
          F3 ||
            (F3 = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm12.943 7.676.694-.4-.158.311-.686.375z',
            })),
          F4 ||
            (F4 = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm8.785 12.737 1.341-.347-.204-.177-1.347.34z',
            })),
          F5 ||
            (F5 = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm14.377 10.685 1.065-.366.07-.358-1.07.38z',
            })),
          F6 ||
            (F6 = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm8.575 12.553 1.347-.34-.187-.225-1.357.33z',
            })),
          F7 ||
            (F7 = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm14.277 6.642.415-.53-.245.18-.404.504z',
            })),
          F8 ||
            (F8 = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm10.495 9.53 1.119-.25-.006.364-1.118.245z',
            })),
          F9 ||
            (F9 = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm11.735 8.592.937-.308-.084.35-.931.292z',
            })),
          he ||
            (he = Cb.createElement('path', {
              fill: '#0000E8',
              d: 'm4.306 17.02-.112-.068-.503-.163.082.058z',
            })),
          ht ||
            (ht = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm9.009 12.866 1.332-.352-.213-.122-1.342.345z',
            })),
          hl ||
            (hl = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm.382 9.292.154.517.022-.98-.154-.547z',
            })),
          ha ||
            (ha = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm8.38 12.318 1.356-.33-.167-.27-1.364.32z',
            })),
          hr ||
            (hr = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm11.194 12.433 1.29-.315-.202.106-1.293.317z',
            })),
          hi ||
            (hi = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.818 8.84.063.6-.003 1.073-.062-.595z',
            })),
          hn ||
            (hn = Cb.createElement('path', {
              fill: '#FF9100',
              d: 'm.439 5.148.139.629.31-.833-.137-.638z',
            })),
          hm ||
            (hm = Cb.createElement('path', {
              fill: '#0008FF',
              d: 'm6.54 15.98-.097.218-.464.408.082-.202z',
            })),
          hd ||
            (hd = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm15.73 7.04.46-.58-.22-.224-.454.586z',
            })),
          hc ||
            (hc = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm9.235 12.936 1.324-.355-.219-.067-1.332.352z',
            })),
          ho ||
            (ho = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm7.632 13.04.02.486-.287.826-.025-.467z',
            })),
          hF ||
            (hF = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm1.125 13.081.075.238-.227-.873-.086-.28z',
            })),
          hh ||
            (hh = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'm14.525 6.548.424-.552-.256.114-.415.53z',
            })),
          hp ||
            (hp = Cb.createElement('path', {
              fill: '#0064FF',
              d: 'm1.865 14.888.02.049-.344-.709-.041-.09z',
            })),
          hs ||
            (hs = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm8.205 12.038 1.364-.32-.143-.305-1.37.307z',
            })),
          hf ||
            (hf = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm9.229 10.724 1.32-.289-.05-.36-1.322.282z',
            })),
          hE ||
            (hE = Cb.createElement('path', {
              fill: 'maroon',
              d: 'm3.518.575-.183.456.618.104.12-.438z',
            })),
          hz ||
            (hz = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm15.488 8.83.803-.466-.088-.38-.8.482z',
            })),
          hu ||
            (hu = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm15.516 6.822.453-.586-.241-.163-.45.584z',
            })),
          hg ||
            (hg = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm13.125 7.433.703-.422-.19.266-.694.399z',
            })),
          hb ||
            (hb = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm14.78 6.52.431-.569-.263.045-.423.552z',
            })),
          hA ||
            (hA = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm9.462 12.946 1.317-.354-.219-.01-1.325.354z',
            })),
          hv ||
            (hv = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm12.9 11.625 1.246-.339.132-.285-1.255.347z',
            })),
          hC ||
            (hC = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm15.282 6.658.449-.585-.258-.094-.44.58z',
            })),
          hx ||
            (hx = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm15.034 6.556.44-.577-.263-.026-.431.569z',
            })),
          hB ||
            (hB = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm14.442 10.34 1.07-.379.03-.374-1.071.392z',
            })),
          hy ||
            (hy = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm10.535 9.184 1.122-.256-.043.353-1.12.25z',
            })),
          hD ||
            (hD = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm11.847 8.286.943-.324-.12.323-.935.307z',
            })),
          hw ||
            (hw = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm11.377 12.271 1.288-.313-.183.16-1.288.315z',
            })),
          hL ||
            (hL = Cb.createElement('path', {
              fill: '#2CFFCA',
              d: 'm8.056 11.72 1.37-.307-.114-.335-1.376.294z',
            })),
          hS ||
            (hS = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'm6.553 3.741.157.392.377.977-.195-.392z',
            })),
          hM ||
            (hM = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm7.377 6.155.136.504.205 1.085-.144-.504z',
            })),
          hk ||
            (hk = Cb.createElement('path', {
              fill: '#0000ED',
              d: 'm4.834 17.05-.141-.07-.5-.028.113.068z',
            })),
          hH ||
            (hH = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm.607 10.805.123.412-.067-.958-.127-.449z',
            })),
          hT ||
            (hT = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm9.179 10.357 1.322-.282-.013-.364-1.324.278z',
            })),
          hO ||
            (hO = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm9.684 12.895 1.306-.354-.213.05-1.316.355z',
            })),
          hP ||
            (hP = Cb.createElement('path', {
              fill: '#FF1A00',
              d: 'm1.072 2.967.076.612.475-.589-.076-.612z',
            })),
          hj ||
            (hj = Cb.createElement('path', {
              fill: '#CAFF2C',
              d: 'm15.403 8.466.8-.481-.122-.353-.796.494z',
            })),
          hN ||
            (hN = Cb.createElement('path', {
              fill: '#000CFF',
              d: 'm3.197 16.499-.053-.159-.444-.386.024.131z',
            })),
          hR ||
            (hR = Cb.createElement('path', {
              fill: '#00F',
              d: 'm5.978 16.608-.149.076-.483.253.125-.063z',
            })),
          hI ||
            (hI = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm7.487 13.119 1.298-.382-.211-.184-1.313.37z',
            })),
          h_ ||
            (h_ = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm7.263 12.923 1.313-.37-.196-.235-1.325.355z',
            })),
          hW ||
            (hW = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm2.724 16.085-.024-.131-.412-.492-.005.098z',
            })),
          hX ||
            (hX = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm13.33 7.241.713-.445-.215.213-.703.423z',
            })),
          hU ||
            (hU = Cb.createElement('path', {
              fill: '#A40000',
              d: 'm2.167 1.365-.078.571.592-.266.053-.563z',
            })),
          h$ ||
            (h$ = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm7.725 13.255 1.285-.39-.224-.128-1.3.381z',
            })),
          hQ ||
            (hQ = Cb.createElement('path', {
              fill: '#0064FF',
              d: 'm7.365 14.351-.045.375-.356.69.034-.353z',
            })),
          hV ||
            (hV = Cb.createElement('path', {
              fill: 'gold',
              d: 'm.36 6.702.164.608.213-.904-.159-.63z',
            })),
          hG ||
            (hG = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm1.5 14.139.04.09-.282-.776-.058-.135z',
            })),
          hZ ||
            (hZ = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.935 11.372 1.377-.294-.082-.354-1.383.28z',
            })),
          hq ||
            (hq = Cb.createElement('path', {
              fill: '#06ECF1',
              d: 'm7.055 12.673 1.325-.355-.175-.28-1.338.338z',
            })),
          hK ||
            (hK = Cb.createElement('path', {
              fill: '#00F',
              d: 'm3.69 16.79-.084-.176-.462-.274.053.159z',
            })),
          hJ ||
            (hJ = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm13.023 11.35 1.254-.348.1-.317-1.26.356z',
            })),
          hY ||
            (hY = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm14.47 9.98 1.072-.394-.007-.38-1.073.406z',
            })),
          h1 ||
            (h1 = Cb.createElement('path', {
              fill: '#840000',
              d: 'm4.073.697-.12.438.618.286.057-.423z',
            })),
          h0 ||
            (h0 = Cb.createElement('path', {
              fill: '#19FFDE',
              d: 'm11.54 12.058 1.288-.31-.164.21-1.288.313z',
            })),
          h2 ||
            (h2 = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.878 10.513.06.574-.105 1.015-.06-.56z',
            })),
          h3 ||
            (h3 = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm7.964 13.33 1.27-.394-.226-.07-1.284.39z',
            })),
          h4 ||
            (h4 = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'm11.992 8.017.951-.341-.152.285-.944.325z',
            })),
          h5 ||
            (h5 = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm10.608 8.855 1.127-.263-.078.334-1.123.256z',
            })),
          h6 ||
            (h6 = Cb.createElement('path', {
              fill: '#004CFF',
              d: 'm2.283 15.56.005-.098-.373-.585-.03.06z',
            })),
          h7 ||
            (h7 = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm9.89 12.783 1.302-.35-.202.108-1.306.354z',
            })),
          h8 ||
            (h8 = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm6.867 12.376 1.337-.338-.15-.318-1.347.319z',
            })),
          h9 ||
            (h9 = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm15.282 8.126.797-.494-.16-.317-.79.504z',
            })),
          pe ||
            (pe = Cb.createElement('path', {
              fill: '#FF2900',
              d: 'm6.145 2.857.112.396.453.88-.157-.392z',
            })),
          pt ||
            (pt = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm13.554 7.105.723-.463-.234.154-.713.443z',
            })),
          pl ||
            (pl = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm9.164 9.989 1.324-.278.022-.355-1.326.272z',
            })),
          pa ||
            (pa = Cb.createElement('path', {
              fill: '#1FFFD7',
              d: 'm.887 12.164.086.281-.146-.903-.094-.327z',
            })),
          pr ||
            (pr = Cb.createElement('path', {
              fill: '#00F',
              d: 'm4.193 16.952-.116-.187-.47-.151.084.176z',
            })),
          pi ||
            (pi = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm8.203 13.34 1.26-.394-.227-.01-1.273.394z',
            })),
          pn ||
            (pn = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm7.847 11.004 1.381-.28-.05-.368-1.385.265z',
            })),
          pm ||
            (pm = Cb.createElement('path', {
              fill: '#00F',
              d: 'm5.346 16.937-.17-.063-.483.106.141.07z',
            })),
          pd ||
            (pd = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'm6.709 12.039 1.347-.319-.12-.348-1.354.297z',
            })),
          pc ||
            (pc = Cb.createElement('path', {
              fill: '#EEFF09',
              d: 'm15.129 7.819.79-.504-.189-.274-.782.51z',
            })),
          po ||
            (po = Cb.createElement('path', {
              fill: '#920000',
              d: 'm4.628.996-.057.424.601.456-.004-.411z',
            })),
          pF ||
            (pF = Cb.createElement('path', {
              fill: '#0038FF',
              d: 'm6.964 15.416-.114.241-.408.542.099-.22z',
            })),
          ph ||
            (ph = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm13.79 7.028.735-.48-.247.094-.724.463z',
            })),
          pp ||
            (pp = Cb.createElement('path', {
              fill: '#9AFF5D',
              d: 'm14.462 9.612 1.073-.405-.047-.377-1.07.415z',
            })),
          ps ||
            (ps = Cb.createElement('path', {
              fill: '#0074FF',
              d: 'm1.888 14.937.03-.06-.324-.664-.051.015z',
            })),
          pf ||
            (pf = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm13.117 11.04 1.26-.355.066-.344-1.266.36z',
            })),
          pE ||
            (pE = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm6.3 13.532 1.188-.414-.225-.195-1.205.398z',
            })),
          pz ||
            (pz = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm6.057 13.321 1.206-.398-.208-.25-1.222.38z',
            })),
          pu ||
            (pu = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm.404 8.28.154.548.116-.94-.151-.577z',
            })),
          pg ||
            (pg = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm12.163 7.79.962-.357-.182.243-.951.34z',
            })),
          pb ||
            (pb = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'm5.68 2.091.06.402.518.76-.113-.396z',
            })),
          pA ||
            (pA = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'm11.678 11.799 1.287-.307-.139.255-1.287.31z',
            })),
          pv ||
            (pv = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.717 7.744.063.604.101 1.092-.063-.6z',
            })),
          pC ||
            (pC = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm6.553 13.68 1.171-.425-.235-.137-1.188.414z',
            })),
          px ||
            (px = Cb.createElement('path', {
              fill: '#09F0EE',
              d: 'm10.08 12.615 1.297-.344-.185.163-1.302.35z',
            })),
          pB ||
            (pB = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm10.713 8.557 1.134-.27-.112.305-1.127.262z',
            })),
          py ||
            (py = Cb.createElement('path', {
              fill: '#B20000',
              d: 'm5.168 1.465.005.411.567.617-.06-.402z',
            })),
          pD ||
            (pD = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm8.435 13.286 1.247-.392-.22.051-1.26.395z',
            })),
          pw ||
            (pw = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm5.833 13.052 1.222-.379-.188-.297-1.237.356z',
            })),
          pL ||
            (pL = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm14.949 7.551.782-.51-.215-.221-.775.51z',
            })),
          pS ||
            (pS = Cb.createElement('path', {
              fill: '#FF5200',
              d: 'm.751 4.306.136.64.394-.716-.131-.65z',
            })),
          pM ||
            (pM = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm14.034 7.012.745-.493-.254.029-.735.48z',
            })),
          pk ||
            (pk = Cb.createElement('path', {
              fill: '#FF9F00',
              d: 'm7.087 5.11.125.505.301 1.044-.137-.504z',
            })),
          pH ||
            (pH = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm1.2 13.318.058.134-.215-.825-.07-.182z',
            })),
          pT ||
            (pT = Cb.createElement('path', {
              fill: '#0028FF',
              d: 'm3.144 16.34-.009-.26-.412-.36-.023.234z',
            })),
          pO ||
            (pO = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm6.812 13.761 1.151-.431-.239-.075-1.17.426z',
            })),
          pP ||
            (pP = Cb.createElement('path', {
              fill: '#9AFF5D',
              d: 'm9.184 9.628 1.326-.272.057-.34-1.327.267z',
            })),
          pj ||
            (pj = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm7.833 12.102.016.505-.198.92-.019-.486z',
            })),
          pN ||
            (pN = Cb.createElement('path', {
              fill: '#0040FF',
              d: 'm2.7 15.954.023-.233-.384-.457-.051.198z',
            })),
          pR ||
            (pR = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm7.794 10.623 1.385-.266-.014-.367-1.388.25z',
            })),
          pI ||
            (pI = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm6.582 11.67 1.355-.298-.088-.367-1.362.274z',
            })),
          p_ ||
            (p_ = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm14.74 7.332.776-.51-.234-.164-.766.509z',
            })),
          pW ||
            (pW = Cb.createElement('path', {
              fill: 'gold',
              d: 'm14.278 7.06.756-.504-.255-.037-.745.493z',
            })),
          pX ||
            (pX = Cb.createElement('path', {
              fill: '#00F',
              d: 'm4.692 16.98-.147-.189-.468-.026.116.187z',
            })),
          pU ||
            (pU = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm14.516 7.166.766-.508-.248-.102-.756.503z',
            })),
          p$ ||
            (p$ = Cb.createElement('path', {
              fill: '#0FF8E7',
              d: 'm5.631 12.732 1.236-.356-.16-.337-1.25.329z',
            })),
          pQ ||
            (pQ = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm3.606 16.614-.04-.28-.43-.253.008.26z',
            })),
          pV ||
            (pV = Cb.createElement('path', {
              fill: '#890000',
              d: 'm2.734 1.109-.053.562.626-.088.028-.552z',
            })),
          pG ||
            (pG = Cb.createElement('path', {
              fill: '#0018FF',
              d: 'm6.442 16.2-.171.094-.442.39.149-.076z',
            })),
          pZ ||
            (pZ = Cb.createElement('path', {
              fill: '#B1FF46',
              d: 'm14.418 9.245 1.072-.416-.085-.363-1.07.424z',
            })),
          pq ||
            (pq = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm12.357 7.612.973-.373-.205.193-.961.357z',
            })),
          pK ||
            (pK = Cb.createElement('path', {
              fill: '#0060FF',
              d: 'm2.288 15.462.051-.198-.346-.544-.078.157z',
            })),
          pJ ||
            (pJ = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm13.177 10.701 1.265-.36.029-.361-1.268.367z',
            })),
          pY ||
            (pY = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm7.071 13.775 1.133-.432-.239-.011-1.151.431z',
            })),
          p1 ||
            (p1 = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm.536 9.809.127.449.022-.943-.127-.49z',
            })),
          p0 ||
            (p0 = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm8.655 13.169 1.235-.386-.208.112-1.246.39z',
            })),
          p2 ||
            (p2 = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm5.278 13.974 1.02-.442-.242-.21-1.044.421z',
            })),
          p3 ||
            (p3 = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm11.787 11.5 1.287-.302-.109.294-1.287.307z',
            })),
          p4 ||
            (p4 = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm10.249 12.393 1.291-.335-.163.213-1.297.344z',
            })),
          p5 ||
            (p5 = Cb.createElement('path', {
              fill: '#00C0FF',
              d: 'm5.014 13.743 1.044-.422-.225-.269-1.064.397z',
            })),
          p6 ||
            (p6 = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm1.54 14.228.052-.015-.265-.727-.07-.034z',
            })),
          p7 ||
            (p7 = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm10.848 8.296 1.143-.28-.144.27-1.135.271z',
            })),
          p8 ||
            (p8 = Cb.createElement('path', {
              fill: '#D10000',
              d: 'm1.55 2.375.075.612.54-.434-.076-.614z',
            })),
          p9 ||
            (p9 = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm5.554 14.135 1-.454-.254-.149-1.02.442z',
            })),
          se ||
            (se = Cb.createElement('path', {
              fill: '#23FFD4',
              d: 'm5.458 12.368 1.25-.33-.127-.369-1.265.3z',
            })),
          st ||
            (st = Cb.createElement('path', {
              fill: '#0010FF',
              d: 'm4.077 16.765-.075-.29-.437-.141.04.28z',
            })),
          sl ||
            (sl = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm4.769 13.449 1.064-.398-.202-.32-1.083.367z',
            })),
          sa ||
            (sa = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm6.485 11.278 1.362-.274-.054-.381-1.367.25z',
            })),
          sr ||
            (sr = Cb.createElement('path', {
              fill: '#0008FF',
              d: 'm5.83 16.684-.198-.052-.456.24.17.064z',
            })),
          si ||
            (si = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.776 10.24 1.388-.251.02-.361-1.388.236z',
            })),
          sn ||
            (sn = Cb.createElement('path', {
              fill: '#B1FF46',
              d: 'm9.24 9.283 1.327-.267.09-.314-1.328.262z',
            })),
          sm ||
            (sm = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm14.334 8.89 1.07-.424-.123-.34-1.063.43z',
            })),
          sd ||
            (sd = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm5.836 14.224.976-.462-.259-.082-.999.455z',
            })),
          sc ||
            (sc = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm12.57 7.492.983-.387-.224.136-.972.371z',
            })),
          so ||
            (so = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm7.651 13.525-.052.4-.279.8.045-.374z',
            })),
          sF ||
            (sF = Cb.createElement('path', {
              fill: '#00C0FF',
              d: 'm7.319 13.715 1.116-.43-.232.055-1.132.435z',
            })),
          sh ||
            (sh = Cb.createElement('path', {
              fill: '#0040FF',
              d: 'm3.135 16.08.084-.342-.38-.33-.116.315z',
            })),
          sp ||
            (sp = Cb.createElement('path', {
              fill: '#08F',
              d: 'm1.915 14.877.078-.157-.3-.618-.101.11z',
            })),
          ss ||
            (ss = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm.73 11.217.095.326-.065-.912-.097-.372z',
            })),
          sf ||
            (sf = Cb.createElement('path', {
              fill: '#0058FF',
              d: 'm2.723 15.72.116-.314-.354-.422-.146.28z',
            })),
          sE ||
            (sE = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm.578 5.775.158.63.304-.814-.152-.648z',
            })),
          sz ||
            (sz = Cb.createElement('path', {
              fill: '#06ECF1',
              d: 'm4.548 13.1 1.083-.367-.173-.364-1.102.337z',
            })),
          su ||
            (su = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm4.456 14.431.822-.457-.264-.231-.848.435z',
            })),
          sg ||
            (sg = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm8.855 12.99 1.225-.375-.19.168-1.236.386z',
            })),
          sb ||
            (sb = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm4.167 14.179.847-.436-.245-.293-.871.408z',
            })),
          sA ||
            (sA = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.881 9.44.06.588-.003 1.06-.06-.573z',
            })),
          sv ||
            (sv = Cb.createElement('path', {
              fill: '#0034FF',
              d: 'm3.565 16.334.05-.363-.396-.233-.084.343z',
            })),
          sC ||
            (sC = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm13.203 10.347 1.268-.368-.009-.367-1.268.367z',
            })),
          sx ||
            (sx = Cb.createElement('path', {
              fill: '#0008FF',
              d: 'm5.176 16.874-.178-.183-.453.1.148.19z',
            })),
          sB ||
            (sB = Cb.createElement('path', {
              fill: '#39FFBE',
              d: 'm5.316 11.97 1.266-.3-.096-.392-1.271.27z',
            })),
          sy ||
            (sy = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'm6.71 4.133.111.507.391.975-.125-.505z',
            })),
          sD ||
            (sD = Cb.createElement('path', {
              fill: '#0094FF',
              d: 'm4.758 14.609.796-.474-.276-.163-.822.458z',
            })),
          sw ||
            (sw = Cb.createElement('path', {
              fill: '#E1FF16',
              d: 'm11.01 8.079 1.153-.289-.171.227-1.143.279z',
            })),
          sL ||
            (sL = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'm10.39 12.124 1.288-.326-.138.258-1.291.336z',
            })),
          sS ||
            (sS = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm11.863 11.17 1.29-.297-.077.326-1.287.303z',
            })),
          sM ||
            (sM = Cb.createElement('path', {
              fill: '#0074FF',
              d: 'm2.339 15.264.146-.28-.32-.502-.172.238z',
            })),
          sk ||
            (sk = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm6.116 14.237.955-.462-.257-.012-.978.461z',
            })),
          sH ||
            (sH = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm14.218 8.555 1.065-.429-.154-.307-1.058.432z',
            })),
          sT ||
            (sT = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm3.897 13.857.871-.408-.22-.35-.893.374z',
            })),
          sO ||
            (sO = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm12.795 7.428.996-.4-.237.077-.984.387z',
            })),
          sP ||
            (sP = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm.973 12.445.07.182-.14-.852-.078-.232z',
            })),
          sj ||
            (sj = Cb.createElement('path', {
              fill: '#0014FF',
              d: 'm4.545 16.791-.108-.293-.435-.024.076.291z',
            })),
          sN ||
            (sN = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm6.426 10.873 1.367-.25-.017-.384-1.37.228z',
            })),
          sR ||
            (sR = Cb.createElement('path', {
              fill: 'maroon',
              d: 'm3.335 1.031-.028.552.644.094v-.542z',
            })),
          sI ||
            (sI = Cb.createElement('path', {
              fill: '#005CFF',
              d: 'm3.22 15.738.223-.404-.348-.304-.256.378z',
            })),
          s_ ||
            (s_ = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm3.847 14.89.609-.459-.29-.252-.637.435z',
            })),
          sW ||
            (sW = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm2.84 15.408.255-.376-.324-.387-.286.341z',
            })),
          sX ||
            (sX = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm4.358 12.704 1.102-.337-.144-.397-1.114.3z',
            })),
          sU ||
            (sU = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm3.529 14.614.637-.436-.269-.321-.662.404z',
            })),
          s$ ||
            (s$ = Cb.createElement('path', {
              fill: '#0094FF',
              d: 'm5.066 14.706.77-.482-.282-.088-.796.473z',
            })),
          sQ ||
            (sQ = Cb.createElement('path', {
              fill: '#002CFF',
              d: 'm4.002 16.474.017-.373-.404-.13-.05.363z',
            })),
          sV ||
            (sV = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm7.513 6.66.065.607.204 1.081-.064-.604z',
            })),
          sG ||
            (sG = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm7.555 13.589 1.102-.42-.222.117-1.116.428z',
            })),
          sZ ||
            (sZ = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm7.32 14.726-.126.267-.343.664.114-.24z',
            })),
          sq ||
            (sq = Cb.createElement('path', {
              fill: '#9AFF5D',
              d: 'm7.795 9.864 1.388-.236.056-.345-1.388.223z',
            })),
          sK ||
            (sK = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm9.329 8.964 1.327-.262.12-.28-1.327.257z',
            })),
          sJ ||
            (sJ = Cb.createElement('path', {
              fill: '#0074FF',
              d: 'm3.443 15.334.404-.443-.318-.277-.434.415z',
            })),
          sY ||
            (sY = Cb.createElement('path', {
              fill: '#0080FF',
              d: 'm4.179 15.086.58-.477-.303-.178-.61.46z',
            })),
          s1 ||
            (s1 = Cb.createElement('path', {
              fill: '#004CFF',
              d: 'm3.615 15.971.191-.424-.364-.213-.224.404z',
            })),
          s0 ||
            (s0 = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm1.257 13.452.07.034-.201-.772-.082-.086z',
            })),
          s2 ||
            (s2 = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm14.071 8.251 1.058-.432-.18-.268-1.05.434z',
            })),
          s3 ||
            (s3 = Cb.createElement('path', {
              fill: '#0084FF',
              d: 'm3.095 15.03.434-.416-.294-.353-.463.382z',
            })),
          s4 ||
            (s4 = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm13.027 7.424 1.008-.412-.245.016-.996.4z',
            })),
          s5 ||
            (s5 = Cb.createElement('path', {
              fill: '#00E0FB',
              d: 'm3.655 13.474.893-.373-.19-.397-.912.337z',
            })),
          s6 ||
            (s6 = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm3.235 14.26.662-.403-.242-.383-.688.367z',
            })),
          s7 ||
            (s7 = Cb.createElement('path', {
              fill: '#008CFF',
              d: 'm2.485 14.984.286-.341-.293-.46-.312.3z',
            })),
          s8 ||
            (s8 = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm1.592 14.213.101-.11-.245-.675-.12.058z',
            })),
          s9 ||
            (s9 = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm3.806 15.548.372-.462-.331-.195-.404.443z',
            })),
          fe ||
            (fe = Cb.createElement('path', {
              fill: '#9AFF5D',
              d: 'm13.194 9.98 1.269-.368-.045-.367-1.267.367z',
            })),
          ft ||
            (ft = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm1.993 14.72.173-.238-.278-.57-.195.19z',
            })),
          fl ||
            (fl = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm9.03 12.755 1.217-.363-.168.222-1.225.376z',
            })),
          fa ||
            (fa = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm6.387 14.174.932-.459-.248.06-.954.464z',
            })),
          fr ||
            (fr = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm.523 7.31.15.577.208-.876-.145-.605z',
            })),
          fi ||
            (fi = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm5.213 11.547 1.272-.27-.06-.404-1.278.238z',
            })),
          fn ||
            (fn = Cb.createElement('path', {
              fill: '#EEFF09',
              d: 'm11.194 7.913 1.163-.3-.194.176-1.154.288z',
            })),
          fm ||
            (fm = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'm13.897 7.985 1.052-.434-.206-.219-1.042.432z',
            })),
          fd ||
            (fd = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm2.77 14.643.465-.383-.267-.42-.49.343z',
            })),
          fc ||
            (fc = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm13.258 7.48 1.02-.421-.244-.047-1.008.412z',
            })),
          fo ||
            (fo = Cb.createElement('path', {
              fill: '#007CFF',
              d: 'm4.517 15.193.55-.487-.309-.097-.58.477z',
            })),
          fF ||
            (fF = Cb.createElement('path', {
              fill: '#0094FF',
              d: 'm5.373 14.72.743-.483-.28-.013-.77.482z',
            })),
          fh ||
            (fh = Cb.createElement('path', {
              fill: '#04F',
              d: 'm6.85 15.657-.19.12-.389.517.17-.095z',
            })),
          fp ||
            (fp = Cb.createElement('path', {
              fill: '#FF1E00',
              d: 'm1.15 3.577.131.651.471-.58-.128-.66z',
            })),
          fs ||
            (fs = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm11.905 10.817 1.289-.292-.041.348-1.288.297z',
            })),
          ff ||
            (ff = Cb.createElement('path', {
              fill: '#0048FF',
              d: 'm4.02 16.102.157-.435-.37-.12-.192.424z',
            })),
          fE ||
            (fE = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm13.7 7.764 1.04-.432-.225-.166-1.03.428z',
            })),
          fz ||
            (fz = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm10.5 11.816 1.285-.313-.108.298-1.288.326z',
            })),
          fu ||
            (fu = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm13.485 7.594 1.03-.428-.237-.107-1.02.42z',
            })),
          fg ||
            (fg = Cb.createElement('path', {
              fill: '#36FFC1',
              d: 'm4.203 12.27 1.113-.3-.104-.423-1.125.263z',
            })),
          fb ||
            (fb = Cb.createElement('path', {
              fill: '#0064FF',
              d: 'm4.177 15.665.34-.472-.338-.107-.373.461z',
            })),
          fA ||
            (fA = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm2.967 13.84.688-.367-.21-.432-.709.323z',
            })),
          fv ||
            (fv = Cb.createElement('path', {
              fill: '#FF2900',
              d: 'm6.257 3.253.093.51.471.877-.11-.507z',
            })),
          fC ||
            (fC = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm6.405 10.467 1.371-.228.02-.375-1.372.204z',
            })),
          fx ||
            (fx = Cb.createElement('path', {
              fill: '#0030FF',
              d: 'm4.437 16.499-.019-.377-.4-.021-.017.373z',
            })),
          fB ||
            (fB = Cb.createElement('path', {
              fill: '#13FCE4',
              d: 'm3.446 13.04.912-.335-.155-.434-.928.293z',
            })),
          fy ||
            (fy = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.937 11.087.014.527-.102.991-.016-.503z',
            })),
          fD ||
            (fD = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm2.166 14.482.313-.3-.254-.521-.337.252z',
            })),
          fw ||
            (fw = Cb.createElement('path', {
              fill: '#002CFF',
              d: 'm6.27 16.294-.22-.029-.416.367.197.05z',
            })),
          fL ||
            (fL = Cb.createElement('path', {
              fill: '#A80000',
              d: 'm2.09 1.939.074.617.59-.265-.073-.619z',
            })),
          fS ||
            (fS = Cb.createElement('path', {
              fill: '#00DCFE',
              d: 'm7.77 13.397 1.086-.408-.201.178-1.102.42z',
            })),
          fM ||
            (fM = Cb.createElement('path', {
              fill: 'maroon',
              d: 'M3.953 1.135v.542l.644.275-.024-.53z',
            })),
          fk ||
            (fk = Cb.createElement('path', {
              fill: '#0020FF',
              d: 'm4.998 16.691-.141-.286-.42.094.108.293z',
            })),
          fH ||
            (fH = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm9.45 8.68 1.327-.259.149-.24-1.327.255z',
            })),
          fT ||
            (fT = Cb.createElement('path', {
              fill: '#00C0FF',
              d: 'm2.478 14.183.49-.342-.23-.477-.51.297z',
            })),
          fO ||
            (fO = Cb.createElement('path', {
              fill: '#0020FF',
              d: 'm5.632 16.632-.208-.167-.426.225.178.182z',
            })),
          fP ||
            (fP = Cb.createElement('path', {
              fill: '#B1FF46',
              d: 'm7.85 9.506 1.389-.223.089-.319-1.388.21zM13.148 9.612l1.27-.367-.082-.355-1.265.367z',
            })),
          fj ||
            (fj = Cb.createElement('path', {
              fill: '#CEFF29',
              d: 'm.558 8.828.126.49.112-.904-.122-.526z',
            })),
          fN ||
            (fN = Cb.createElement('path', {
              fill: '#007CFF',
              d: 'm4.852 15.21.52-.49-.305-.014-.55.487z',
            })),
          fR ||
            (fR = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm11.393 7.8 1.177-.308-.213.122-1.163.298z',
            })),
          fI ||
            (fI = Cb.createElement('path', {
              fill: '#00BCFF',
              d: 'm6.642 14.037.913-.45-.236.127-.933.46z',
            })),
          f_ ||
            (f_ = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm1.693 14.102.196-.19-.227-.623-.215.137z',
            })),
          fW ||
            (fW = Cb.createElement('path', {
              fill: '#009CFF',
              d: 'm5.669 14.653.717-.479-.27.063-.744.484z',
            })),
          fX ||
            (fX = Cb.createElement('path', {
              fill: '#6DFF8A',
              d: 'm5.148 11.111 1.278-.238-.02-.408-1.283.204z',
            })),
          fU ||
            (fU = Cb.createElement('path', {
              fill: '#004CFF',
              d: 'm4.418 16.122.125-.437-.367-.02-.157.437z',
            })),
          f$ ||
            (f$ = Cb.createElement('path', {
              fill: '#23FFD4',
              d: 'm9.18 12.47 1.21-.347-.141.27-1.218.362z',
            })),
          fQ ||
            (fQ = Cb.createElement('path', {
              fill: '#0064FF',
              d: 'm4.544 15.685.308-.475-.335-.017-.34.472z',
            })),
          fV ||
            (fV = Cb.createElement('path', {
              fill: '#09F0EE',
              d: 'm2.737 13.363.709-.322-.17-.477-.728.278z',
            })),
          fG ||
            (fG = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'm5.74 2.493.072.517.538.754-.093-.511z',
            })),
          fZ ||
            (fZ = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm11.912 10.45 1.29-.286-.008.362-1.289.292z',
            })),
          fq ||
            (fq = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm1.326 13.486.12-.059-.186-.717-.135.004z',
            })),
          fK ||
            (fK = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm.663 10.259.097.371.021-.898-.096-.416z',
            })),
          fJ ||
            (fJ = Cb.createElement('path', {
              fill: '#920000',
              d: 'm4.571 1.42.024.53.626.45-.049-.525z',
            })),
          fY ||
            (fY = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm10.578 11.47 1.285-.3-.077.33-1.287.316zM4.088 11.81l1.125-.263-.065-.436-1.133.223z',
            })),
          f1 ||
            (f1 = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm3.275 12.564.928-.294-.115-.46-.941.251z',
            })),
          f0 ||
            (f0 = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm13.071 9.258 1.265-.367-.116-.334-1.26.367z',
            })),
          f2 ||
            (f2 = Cb.createElement('path', {
              fill: '#2CFFCA',
              d: 'm1.043 12.628.081.086-.13-.8-.09-.139z',
            })),
          f3 ||
            (f3 = Cb.createElement('path', {
              fill: '#00D4FF',
              d: 'm1.888 13.913.335-.252-.207-.572-.355.201z',
            })),
          f4 ||
            (f4 = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm.826 11.542.079.232-.061-.86-.082-.284z',
            })),
          f5 ||
            (f5 = Cb.createElement('path', {
              fill: '#B20000',
              d: 'm5.173 1.876.048.524.59.61-.071-.517z',
            })),
          f6 ||
            (f6 = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm2.225 13.66.511-.297-.188-.521-.53.247z',
            })),
          f7 ||
            (f7 = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm11.606 7.746 1.189-.318-.225.064-1.177.308z',
            })),
          f8 ||
            (f8 = Cb.createElement('path', {
              fill: '#9DFF5A',
              d: 'm6.424 10.068 1.371-.204.056-.358-1.37.182z',
            })),
          f9 ||
            (f9 = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm9.599 8.436 1.326-.252.174-.193-1.326.252z',
            })),
          Ee ||
            (Ee = Cb.createElement('path', {
              fill: '#09F0EE',
              d: 'm7.959 13.144 1.071-.39-.176.236-1.086.408z',
            })),
          Et ||
            (Et = Cb.createElement('path', {
              fill: '#06ECF1',
              d: 'm7.849 12.605-.059.428-.192.892.053-.4z',
            })),
          El ||
            (El = Cb.createElement('path', {
              fill: '#003CFF',
              d: 'm4.857 16.405-.05-.37-.389.087.017.377z',
            })),
          Ea ||
            (Ea = Cb.createElement('path', {
              fill: '#08F',
              d: 'm5.177 15.136.492-.483-.297.068-.52.49z',
            })),
          Er ||
            (Er = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.78 8.347.06.602.1 1.077-.059-.587z',
            })),
          Ei ||
            (Ei = Cb.createElement('path', {
              fill: '#FF9F00',
              d: 'm7.212 5.615.065.612.3 1.04-.064-.608z',
            })),
          En ||
            (En = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'm7.94 9.174 1.389-.21.122-.285-1.386.198z',
            })),
          Em ||
            (Em = Cb.createElement('path', {
              fill: '#FF5900',
              d: 'm.887 4.944.153.648.387-.7-.146-.664z',
            })),
          Ed ||
            (Ed = Cb.createElement('path', {
              fill: '#00D0FF',
              d: 'm6.875 13.828.895-.431-.215.192-.913.449z',
            })),
          Ec ||
            (Ec = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm12.958 8.922 1.26-.367-.147-.304-1.253.364z',
            })),
          Eo ||
            (Eo = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm5.948 14.503.694-.466-.256.137-.717.48z',
            })),
          EF ||
            (EF = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm11.826 7.752 1.2-.327-.231.004-1.189.319z',
            })),
          Eh ||
            (Eh = Cb.createElement('path', {
              fill: '#0070FF',
              d: 'm4.9 15.604.277-.468-.325.074-.308.475z',
            })),
          Ep ||
            (Ep = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm4.807 16.035.092-.43-.355.08-.126.437z',
            })),
          Es ||
            (Es = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm5.123 10.673 1.282-.204.018-.399-1.282.175z',
            })),
          Ef ||
            (Ef = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm11.882 10.077 1.293-.281.027.367-1.29.286z',
            })),
          EE ||
            (EE = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm2.548 12.842.727-.278-.128-.503-.741.229z',
            })),
          Ez ||
            (Ez = Cb.createElement('path', {
              fill: '#39FFBE',
              d: 'm9.297 12.143 1.203-.327-.111.31-1.208.343z',
            })),
          Eu ||
            (Eu = Cb.createElement('path', {
              fill: '#0038FF',
              d: 'm5.424 16.466-.171-.27-.396.209.14.286z',
            })),
          Eg ||
            (Eg = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm1.447 13.428.216-.138-.171-.662-.232.082z',
            })),
          Eb ||
            (Eb = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm10.622 11.103 1.285-.286-.041.354-1.284.3z',
            })),
          EA ||
            (EA = Cb.createElement('path', {
              fill: '#00B0FF',
              d: 'm7.598 13.925-.138.299-.266.77.128-.268z',
            })),
          Ev ||
            (Ev = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm12.818 8.615 1.253-.364-.174-.266-1.246.359z',
            })),
          EC ||
            (EC = Cb.createElement('path', {
              fill: '#6AFF8D',
              d: 'm4.015 11.335 1.133-.224-.025-.439-1.136.184z',
            })),
          Ex ||
            (Ex = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm12.045 7.816 1.214-.337-.232-.056-1.201.327z',
            })),
          EB ||
            (EB = Cb.createElement('path', {
              fill: '#49FFAD',
              d: 'm3.147 12.061.941-.25-.073-.475-.95.204z',
            })),
          Ey ||
            (Ey = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'M9.772 8.241 11.1 7.99l.192-.14-1.324.25z',
            })),
          ED ||
            (ED = Cb.createElement('path', {
              fill: '#8D0000',
              d: 'm2.68 1.671.075.62.625-.087-.073-.621z',
            })),
          Ew ||
            (Ew = Cb.createElement('path', {
              fill: '#0040FF',
              d: 'm6.05 16.265-.234-.145-.39.345.208.168z',
            })),
          EL ||
            (EL = Cb.createElement('path', {
              fill: '#1FFFD7',
              d: 'm2.018 13.09.53-.248-.141-.554-.545.195z',
            })),
          ES ||
            (ES = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm1.662 13.29.356-.2-.157-.607-.37.145z',
            })),
          EM ||
            (EM = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm12.651 8.344 1.245-.36-.197-.22-1.235.353z',
            })),
          Ek ||
            (Ek = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm6.48 9.688 1.371-.182.09-.332-1.367.163z',
            })),
          EH ||
            (EH = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm12.26 7.939 1.224-.346-.226-.114-1.213.337z',
            })),
          ET ||
            (ET = Cb.createElement('path', {
              fill: '#007CFF',
              d: 'm7.194 14.993-.207.152-.327.633.19-.12z',
            })),
          EO ||
            (EO = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm12.464 8.117 1.235-.353-.214-.17-1.224.345z',
            })),
          EP ||
            (EP = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm8.117 12.837 1.063-.368-.15.286-1.073.388z',
            })),
          Ej ||
            (Ej = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'M6.66 15.778h-.245l-.367.49.221.028z',
            })),
          EN ||
            (EN = Cb.createElement('path', {
              fill: '#D60000',
              d: 'm1.625 2.989.127.659.535-.426-.123-.667z',
            })),
          ER ||
            (ER = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm5.482 14.972.466-.469-.279.15-.492.483z',
            })),
          EI ||
            (EI = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'M8.065 8.877 9.45 8.68l.149-.245-1.381.189z',
            })),
          E_ ||
            (E_ = Cb.createElement('path', {
              fill: '#FF9C00',
              d: 'm.736 6.406.146.605.295-.787-.137-.631z',
            })),
          EW ||
            (EW = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm1.125 12.714.135-.004-.122-.742-.144-.053z',
            })),
          EX ||
            (EX = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm11.818 9.71 1.294-.276.062.362-1.293.281z',
            })),
          EU ||
            (EU = Cb.createElement('path', {
              fill: '#0050FF',
              d: 'm5.253 16.195-.082-.354-.365.194.05.37z',
            })),
          E$ ||
            (E$ = Cb.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.08 13.553.879-.408-.19.253-.894.43z',
            })),
          EQ ||
            (EQ = Cb.createElement('path', {
              fill: '#00C0FF',
              d: 'm6.202 14.275.673-.447-.233.209-.694.466z',
            })),
          EV ||
            (EV = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm9.967 8.099 1.324-.25.207-.081-1.322.249z',
            })),
          EG ||
            (EG = Cb.createElement('path', {
              fill: '#A0FF56',
              d: 'm5.14 10.242 1.283-.174.057-.38-1.28.144z',
            })),
          EZ ||
            (EZ = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm9.377 11.775 1.201-.306-.078.347-1.205.327z',
            })),
          Eq ||
            (Eq = Cb.createElement('path', {
              fill: '#0080FF',
              d: 'm5.235 15.425.248-.453-.305.164-.278.468z',
            })),
          EK ||
            (EK = Cb.createElement('path', {
              fill: '#46FFB1',
              d: 'm2.406 12.288.741-.228-.082-.521-.75.177z',
            })),
          EJ ||
            (EJ = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.947 10.028.019.55-.004 1.037-.02-.528z',
            })),
          EY ||
            (EY = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm10.626 10.72 1.286-.27-.007.367-1.284.285z',
            })),
          E1 ||
            (E1 = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm5.172 15.84.063-.415-.335.18-.092.43z',
            })),
          E0 ||
            (E0 = Cb.createElement('path', {
              fill: '#5DFF9A',
              d: 'm.903 11.775.092.14-.057-.805-.096-.195z',
            })),
          E2 ||
            (E2 = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'm6.821 4.64.066.616.388.97-.065-.612z',
            })),
          E3 ||
            (E3 = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm.674 7.887.122.526.2-.842-.114-.561z',
            })),
          E4 ||
            (E4 = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm3.987 10.856 1.136-.184.018-.43-1.137.146z',
            })),
          E5 ||
            (E5 = Cb.createElement('path', {
              fill: '#6AFF8D',
              d: 'm3.065 11.539.95-.204-.028-.479-.956.159z',
            })),
          E6 ||
            (E6 = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm11.72 9.358 1.298-.27.095.346-1.295.276z',
            })),
          E7 ||
            (E7 = Cb.createElement('path', {
              fill: '#36FFC1',
              d: 'm1.26 12.71.232-.082-.112-.683-.24.023z',
            })),
          E8 ||
            (E8 = Cb.createElement('path', {
              fill: '#CAFF2C',
              d: 'm6.574 9.335 1.367-.163.122-.296-1.36.144z',
            })),
          E9 ||
            (E9 = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm8.218 8.625 1.38-.189.174-.195-1.375.18z',
            })),
          ze ||
            (ze = Cb.createElement('path', {
              fill: '#90FF66',
              d: 'm.76 10.63.082.284.02-.847-.082-.334z',
            })),
          zt ||
            (zt = Cb.createElement('path', {
              fill: '#CAFF2C',
              d: 'm.685 9.317.096.416.107-.86-.092-.46z',
            })),
          zl ||
            (zl = Cb.createElement('path', {
              fill: '#40FFB7',
              d: 'm1.861 12.483.545-.195-.091-.571-.555.14z',
            })),
          za ||
            (za = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm10.176 8.015 1.322-.249.217-.025-1.32.25z',
            })),
          zr ||
            (zr = Cb.createElement('path', {
              fill: '#0054FF',
              d: 'm5.814 16.12-.2-.244-.361.32.171.271z',
            })),
          zi ||
            (zi = Cb.createElement('path', {
              fill: '#33FFC4',
              d: 'm8.24 12.481 1.057-.338-.116.326-1.064.367z',
            })),
          zn ||
            (zn = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm1.492 12.628.37-.145-.101-.626-.38.088z',
            })),
          zm ||
            (zm = Cb.createElement('path', {
              fill: '#00ACFF',
              d: 'm5.761 14.723.441-.45-.255.228-.465.47z',
            })),
          zd ||
            (zd = Cb.createElement('path', {
              fill: 'maroon',
              d: 'm3.307 1.583.073.621.643.095-.072-.622z',
            })),
          zc ||
            (zc = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.577 7.267.063.616.2 1.067-.06-.603z',
            })),
          zo ||
            (zo = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm11.59 9.03 1.301-.265.127.323-1.299.27z',
            })),
          zF ||
            (zF = Cb.createElement('path', {
              fill: '#94FF63',
              d: 'm10.593 10.334 1.29-.257.029.372-1.287.272z',
            })),
          zh ||
            (zh = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm7.251 13.218.866-.382-.158.308-.88.408z',
            })),
          zp ||
            (zp = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm6.426 13.974.653-.42-.204.274-.673.447z',
            })),
          zs ||
            (zs = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm9.42 11.386 1.202-.283-.04.367-1.205.305z',
            })),
          zf ||
            (zf = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm10.395 7.99 1.32-.249.22.036-1.317.249z',
            })),
          zE ||
            (zE = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm5.2 9.832 1.28-.144.094-.353-1.275.116z',
            })),
          zz ||
            (zz = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.95 11.615-.062.458-.1.96.06-.428z',
            })),
          zu ||
            (zu = Cb.createElement('path', {
              fill: '#FF2500',
              d: 'm1.281 4.228.146.665.46-.566-.136-.68z',
            })),
          zg ||
            (zg = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm2.315 11.716.75-.177-.034-.524-.755.125z',
            })),
          zb ||
            (zb = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm5.54 15.153.221-.43-.279.25-.247.452z',
            })),
          zA ||
            (zA = Cb.createElement('path', {
              fill: '#0068FF',
              d: 'm6.416 15.777-.26-.114-.342.457.237.145z',
            })),
          zv ||
            (zv = Cb.createElement('path', {
              fill: '#E1FF16',
              d: 'm11.433 8.735 1.306-.26.154.29-1.302.265z',
            })),
          zC ||
            (zC = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm8.397 8.421 1.375-.18.195-.142-1.37.175z',
            })),
          zx ||
            (zx = Cb.createElement('path', {
              fill: '#006CFF',
              d: 'm5.615 15.874-.11-.33-.333.297.082.354z',
            })),
          zB ||
            (zB = Cb.createElement('path', {
              fill: '#FF2900',
              d: 'm6.35 3.764.068.618.47.874-.065-.616z',
            })),
          zy ||
            (zy = Cb.createElement('path', {
              fill: '#60FF97',
              d: 'm.995 11.915.144.053-.052-.748-.149-.11z',
            })),
          zD ||
            (zD = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm10.618 8.026 1.318-.25.218.094-1.315.25z',
            })),
          zw ||
            (zw = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm6.704 9.02 1.36-.143.154-.253-1.354.127z',
            })),
          zL ||
            (zL = Cb.createElement('path', {
              fill: '#A4FF53',
              d: 'm4.004 10.388 1.137-.145.059-.41-1.134.106z',
            })),
          zS ||
            (zS = Cb.createElement('path', {
              fill: '#0080FF',
              d: 'm5.505 15.544.034-.391-.304.272-.062.416z',
            })),
          zM ||
            (zM = Cb.createElement('path', {
              fill: '#87FF70',
              d: 'm3.03 11.015.955-.159.017-.469-.954.113z',
            })),
          zk ||
            (zk = Cb.createElement('path', {
              fill: '#EEFF09',
              d: 'm11.252 8.481 1.306-.257.178.25-1.306.26z',
            })),
          zH ||
            (zH = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm10.84 8.122 1.314-.251.21.15-1.312.254z',
            })),
          zT ||
            (zT = Cb.createElement('path', {
              fill: '#AD0000',
              d: 'm2.164 2.555.123.667.584-.26-.116-.671z',
            })),
          zO ||
            (zO = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm11.053 8.275 1.31-.255.197.204-1.306.257z',
            })),
          zP ||
            (zP = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm7.79 13.033-.147.334-.184.857.139-.299z',
            })),
          zj ||
            (zj = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm10.524 9.952 1.294-.242.064.367-1.289.257z',
            })),
          zN ||
            (zN = Cb.createElement('path', {
              fill: '#4DFFAA',
              d: 'm8.326 12.089 1.051-.314-.082.364-1.056.34z',
            })),
          zR ||
            (zR = Cb.createElement('path', {
              fill: '#08F',
              d: 'm6.986 15.145-.263.035-.307.597h.245z',
            })),
          zI ||
            (zI = Cb.createElement('path', {
              fill: 'maroon',
              d: 'm3.951 1.677.072.622.643.275-.07-.622z',
            })),
          z_ ||
            (z_ = Cb.createElement('path', {
              fill: '#66FF90',
              d: 'm1.76 11.857.555-.14-.038-.576-.56.085z',
            })),
          zW ||
            (zW = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm7.46 14.224-.22.189-.254.732.207-.151z',
            })),
          zX ||
            (zX = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm6.006 14.393.42-.419-.224.301-.44.45z',
            })),
          zU ||
            (zU = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm9.423 10.98 1.203-.26-.005.383-1.202.283z',
            })),
          z$ ||
            (z$ = Cb.createElement('path', {
              fill: '#60FF97',
              d: 'm1.14 11.968.24-.024-.047-.69-.245-.034z',
            })),
          zQ ||
            (zQ = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm8.597 8.274 1.37-.175.209-.084-1.362.171z',
            })),
          zV ||
            (zV = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'm5.812 3.01.068.62.538.752-.067-.618z',
            })),
          zG ||
            (zG = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm1.38 11.944.38-.088-.043-.632-.384.03z',
            })),
          zZ ||
            (zZ = Cb.createElement('path', {
              fill: '#90FF66',
              d: 'm.842 10.914.096.195.019-.792-.095-.25z',
            })),
          zq ||
            (zq = Cb.createElement('path', {
              fill: '#2CFFCA',
              d: 'm7.384 12.832.857-.35-.122.354-.866.382z',
            })),
          zK ||
            (zK = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm5.3 9.451 1.274-.116.13-.315-1.265.092z',
            })),
          zJ ||
            (zJ = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'm1.04 5.593.137.631.377-.677-.127-.653z',
            })),
          zY ||
            (zY = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm6.612 13.607.639-.389-.172.335-.653.421z',
            })),
          z1 ||
            (z1 = Cb.createElement('path', {
              fill: '#920000',
              d: 'm4.595 1.952.07.622.625.449-.07-.622z',
            })),
          z0 ||
            (z0 = Cb.createElement('path', {
              fill: '#EEFF09',
              d: 'm6.864 8.752 1.354-.127.18-.204-1.345.114z',
            })),
          z2 ||
            (z2 = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm10.421 9.585 1.299-.227.098.352-1.294.242z',
            })),
          z3 ||
            (z3 = Cb.createElement('path', {
              fill: '#007CFF',
              d: 'm6.157 15.663-.225-.215-.318.426.2.245z',
            })),
          z4 ||
            (z4 = Cb.createElement('path', {
              fill: '#B20000',
              d: 'm5.221 2.4.07.622.589.608-.068-.62z',
            })),
          z5 ||
            (z5 = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.84 8.95.016.574.098 1.054-.014-.55z',
            })),
          z6 ||
            (z6 = Cb.createElement('path', {
              fill: '#8AFF6D',
              d: 'm2.277 11.14.755-.126.017-.514-.753.075z',
            })),
          z7 ||
            (z7 = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm8.814 8.186 1.362-.171.22-.025-1.355.171z',
            })),
          z8 ||
            (z8 = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'M4.066 9.939 5.2 9.83l.1-.38-1.127.073z',
            })),
          z9 ||
            (z9 = Cb.createElement('path', {
              fill: '#00B4FF',
              d: 'm5.806 14.792.199-.4-.245.33-.222.43z',
            })),
          ue ||
            (ue = Cb.createElement('path', {
              fill: '#FFA300',
              d: 'm7.275 6.226.067.63.297 1.027-.063-.616z',
            })),
          ut ||
            (ut = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'm.781 9.735.082.334.101-.81-.075-.384z',
            })),
          ul ||
            (ul = Cb.createElement('path', {
              fill: '#A7FF50',
              d: 'm3.049 10.5.954-.112.063-.45-.951.07z',
            })),
          ua ||
            (ua = Cb.createElement('path', {
              fill: '#FFA300',
              d: 'm.882 7.011.115.56.286-.755-.105-.592z',
            })),
          ur ||
            (ur = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm8.37 11.668 1.05-.282-.041.39-1.052.313z',
            })),
          ui ||
            (ui = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm9.387 10.57 1.206-.236.033.387-1.203.26z',
            })),
          un ||
            (un = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm.796 8.413.092.46.192-.8-.082-.5z',
            })),
          um ||
            (um = Cb.createElement('path', {
              fill: '#D4FF23',
              d: 'm10.285 9.245 1.306-.214.13.326-1.299.228z',
            })),
          ud ||
            (ud = Cb.createElement('path', {
              fill: '#0090FF',
              d: 'm5.932 15.449-.134-.298-.293.393.11.33z',
            })),
          uc ||
            (uc = Cb.createElement('path', {
              fill: '#00A0FF',
              d: 'm5.798 15.15.009-.358-.268.36-.034.392z',
            })),
          uo ||
            (uo = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm9.041 8.161 1.354-.17.223.035-1.347.173z',
            })),
          uF ||
            (uF = Cb.createElement('path', {
              fill: '#8DFF6A',
              d: 'm.938 11.11.149.11.018-.735-.148-.168z',
            })),
          uh ||
            (uh = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm5.436 9.112 1.265-.092.161-.268-1.256.07z',
            })),
          up ||
            (up = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm7.053 8.536 1.344-.115.2-.147-1.333.105z',
            })),
          us ||
            (us = Cb.createElement('path', {
              fill: '#8AFF6D',
              d: 'm1.718 11.224.56-.084.018-.565-.56.03z',
            })),
          uf ||
            (uf = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm6.21 13.99.402-.383-.186.367-.42.42z',
            })),
          uE ||
            (uE = Cb.createElement('path', {
              fill: '#0098FF',
              d: 'm6.723 15.18-.28-.077-.286.56.26.114z',
            })),
          uz ||
            (uz = Cb.createElement('path', {
              fill: '#46FFB1',
              d: 'm7.475 12.403.85-.314-.084.392-.857.35z',
            })),
          uu ||
            (uu = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm10.12 8.937 1.313-.202.157.295-1.306.214z',
            })),
          ug ||
            (ug = Cb.createElement('path', {
              fill: '#920000',
              d: 'm2.755 2.29.116.672.618-.085-.11-.673z',
            })),
          ub ||
            (ub = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'm1.752 3.648.136.679.524-.416-.126-.69z',
            })),
          uA ||
            (uA = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm9.272 8.199 1.347-.173.222.096-1.338.176z',
            })),
          uv ||
            (uv = Cb.createElement('path', {
              fill: '#26FFD1',
              d: 'm6.757 13.184.627-.352-.133.386-.64.39z',
            })),
          uC ||
            (uC = Cb.createElement('path', {
              fill: '#83FF73',
              d: 'm7.954 10.578-.063.49-.003 1.005.062-.459z',
            })),
          ux ||
            (ux = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm9.932 8.673 1.32-.191.18.254-1.311.202z',
            })),
          uB ||
            (uB = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm9.502 8.298 1.338-.176.213.153-1.329.183z',
            })),
          uy ||
            (uy = Cb.createElement('path', {
              fill: '#8DFF6A',
              d: 'm1.087 11.22.245.035.017-.677-.245-.092zM1.333 11.255l.384-.03.018-.62-.385-.027z',
            })),
          uD ||
            (uD = Cb.createElement('path', {
              fill: '#ADFF49',
              d: 'm9.312 10.163 1.212-.211.07.382-1.207.235z',
            })),
          uw ||
            (uw = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm9.724 8.458 1.329-.183.2.206-1.321.192z',
            })),
          uL ||
            (uL = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'M4.174 9.524 5.3 9.451l.137-.34-1.117.041z',
            })),
          uS ||
            (uS = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm8.372 11.23 1.051-.25-.004.408-1.05.282z',
            })),
          uM ||
            (uM = Cb.createElement('path', {
              fill: '#AAFF4D',
              d: 'm2.296 10.575.755-.075.066-.49-.75.027z',
            })),
          uk ||
            (uk = Cb.createElement('path', {
              fill: '#00C4FF',
              d: 'm7.24 14.412-.278.076-.24.694.264-.035z',
            })),
          uH ||
            (uH = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm7.264 8.38 1.334-.106.216-.088-1.321.1z',
            })),
          uT ||
            (uT = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm3.115 10.009.95-.07.107-.415-.942.03z',
            })),
          uO ||
            (uO = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm6.03 14.352.18-.361-.205.402-.2.399z',
            })),
          uP ||
            (uP = Cb.createElement('path', {
              fill: '#46FFB1',
              d: 'm7.888 12.073-.151.372-.094.922.147-.334z',
            })),
          uj ||
            (uj = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm.862 10.067.095.25.095-.758-.088-.302z',
            })),
          uN ||
            (uN = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm6.887 5.256.07.64.386.96-.068-.63z',
            })),
          uR ||
            (uR = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm5.608 8.821 1.256-.07.189-.215-1.244.052z',
            })),
          uI ||
            (uI = Cb.createElement('path', {
              fill: '#00A8FF',
              d: 'm6.443 15.103-.245-.175-.266.52.225.215z',
            })),
          u_ ||
            (u_ = Cb.createElement('path', {
              fill: '#0FF8E7',
              d: 'm7.643 13.367-.23.23-.174.816.22-.189z',
            })),
          uW ||
            (uW = Cb.createElement('path', {
              fill: '#C4FF33',
              d: 'm9.2 9.775 1.22-.188.104.367-1.212.211z',
            })),
          uX ||
            (uX = Cb.createElement('path', {
              fill: '#63FF94',
              d: 'm7.52 11.945.849-.277-.045.42-.85.315z',
            })),
          uU ||
            (uU = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.64 7.883.02.597.196 1.044-.015-.574z',
            })),
          u$ ||
            (u$ = Cb.createElement('path', {
              fill: '#FF3000',
              d: 'm1.427 4.893.127.653.449-.547-.115-.672z',
            })),
          uQ ||
            (uQ = Cb.createElement('path', {
              fill: '#00C8FF',
              d: 'm6.042 14.673-.012-.32-.224.439-.01.359z',
            })),
          uV ||
            (uV = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm7.493 8.286 1.321-.1.227-.025-1.308.098z',
            })),
          uG ||
            (uG = Cb.createElement('path', {
              fill: '#00B8FF',
              d: 'm6.197 14.928-.155-.257-.245.48.134.297z',
            })),
          uZ ||
            (uZ = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm6.368 13.526.389-.342-.145.423-.402.384z',
            })),
          uq ||
            (uq = Cb.createElement('path', {
              fill: '#ADFF49',
              d: 'm1.735 10.605.559-.03.07-.54-.553-.023z',
            })),
          uK ||
            (uK = Cb.createElement('path', {
              fill: '#840000',
              d: 'm3.38 2.204.11.673.635.096-.102-.674z',
            })),
          uJ ||
            (uJ = Cb.createElement('path', {
              fill: '#97FF60',
              d: 'm8.33 10.785 1.057-.216.036.411-1.051.25z',
            })),
          uY ||
            (uY = Cb.createElement('path', {
              fill: '#43FFB4',
              d: 'm6.855 12.714.62-.311-.091.428-.627.352z',
            })),
          u1 ||
            (u1 = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm.888 8.873.075.384.181-.754-.065-.43z',
            })),
          u0 ||
            (u0 = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm9.055 9.41 1.23-.165.136.341-1.22.19z',
            })),
          u2 ||
            (u2 = Cb.createElement('path', {
              fill: '#EEFF09',
              d: 'm4.32 9.154 1.116-.041.172-.29-1.102.015z',
            })),
          u3 ||
            (u3 = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm.957 10.317.148.168.089-.702-.142-.224z',
            })),
          u4 ||
            (u4 = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm5.81 8.588 1.243-.052.211-.157-1.228.041z',
            })),
          u5 ||
            (u5 = Cb.createElement('path', {
              fill: 'gold',
              d: 'm7.733 8.259 1.308-.098.232.038-1.295.1z',
            })),
          u6 ||
            (u6 = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm1.177 6.224.105.594.36-.65-.09-.621z',
            })),
          u7 ||
            (u7 = Cb.createElement('path', {
              fill: '#CAFF2C',
              d: 'm2.365 10.035.75-.026.115-.456-.741-.018z',
            })),
          u8 ||
            (u8 = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm1.35 10.578.384.027.077-.593-.379-.082z',
            })),
          u9 ||
            (u9 = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm.997 7.571.081.501.272-.717-.07-.54z',
            })),
          ge ||
            (ge = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm3.23 9.553.942-.029.147-.37-.93-.008z',
            })),
          gt ||
            (gt = Cb.createElement('path', {
              fill: '#FF2D00',
              d: 'm6.418 4.382.076.653.464.863-.071-.641z',
            })),
          gl ||
            (gl = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm8.88 9.084 1.24-.147.164.307-1.23.167z',
            })),
          ga ||
            (ga = Cb.createElement('path', {
              fill: '#0CF',
              d: 'm6.961 14.488-.295-.032-.223.647.28.077z',
            })),
          gr ||
            (gr = Cb.createElement('path', {
              fill: '#B00',
              d: 'm2.286 3.222.127.689.57-.252-.114-.697z',
            })),
          gi ||
            (gi = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm1.105 10.486.245.092.081-.647-.237-.148z',
            })),
          gn ||
            (gn = Cb.createElement('path', {
              fill: 'gold',
              d: 'm7.978 8.3 1.294-.101.23.1-1.28.107z',
            })),
          gm ||
            (gm = Cb.createElement('path', {
              fill: '#7DFF7A',
              d: 'm7.52 11.466.85-.236-.002.438-.848.277z',
            })),
          gd ||
            (gd = Cb.createElement('path', {
              fill: '#B1FF46',
              d: 'm8.249 10.347 1.061-.184.075.406-1.056.216z',
            })),
          gc ||
            (gc = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm6.203 13.843.164-.317-.158.465-.18.36z',
            })),
          go ||
            (go = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm8.678 8.804 1.254-.13.188.264-1.24.147z',
            })),
          gF ||
            (gF = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm8.222 8.406 1.28-.108.222.16-1.265.117z',
            })),
          gh ||
            (gh = Cb.createElement('path', {
              fill: '#890000',
              d: 'm4.023 2.3.102.673.636.272-.095-.672z',
            })),
          gp ||
            (gp = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm8.459 8.575 1.265-.117.208.214-1.253.132z',
            })),
          gs ||
            (gs = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.856 9.524-.06.523.095 1.02.063-.49z',
            })),
          gf ||
            (gf = Cb.createElement('path', {
              fill: 'gold',
              d: 'm6.036 8.42 1.228-.041.229-.093-1.211.032z',
            })),
          gE ||
            (gE = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm4.504 8.837 1.102-.016.202-.233-1.086-.006z',
            })),
          gz ||
            (gz = Cb.createElement('path', {
              fill: '#60FF97',
              d: 'm6.905 12.211.617-.266-.047.458-.62.311z',
            })),
          gu ||
            (gu = Cb.createElement('path', {
              fill: '#3CFFBA',
              d: 'm6.475 13.01.38-.296-.098.47-.39.342z',
            })),
          gg ||
            (gg = Cb.createElement('path', {
              fill: '#E40000',
              d: 'm5.88 3.63.082.66.53.743-.076-.653z',
            })),
          gb ||
            (gb = Cb.createElement('path', {
              fill: '#00D8FF',
              d: 'm6.666 14.456-.263-.13-.204.602.245.175z',
            })),
          gA ||
            (gA = Cb.createElement('path', {
              fill: '#16FFE1',
              d: 'm7.414 13.597-.29.122-.162.77.278-.076z',
            })),
          gv ||
            (gv = Cb.createElement('path', {
              fill: '#0CF4EB',
              d: 'm6.23 14.116-.027-.273-.173.509.011.32z',
            })),
          gC ||
            (gC = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm1.811 10.012.554.023.122-.5-.543-.072z',
            })),
          gx ||
            (gx = Cb.createElement('path', {
              fill: '#9B0000',
              d: 'm4.666 2.574.095.67.618.444-.089-.667z',
            })),
          gB ||
            (gB = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'm.964 9.257.088.302.17-.704-.077-.352z',
            })),
          gy ||
            (gy = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'm8.127 9.926 1.074-.152.111.39-1.061.183z',
            })),
          gD ||
            (gD = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm7.344 6.855.025.62.29 1.005-.019-.597z',
            })),
          gw ||
            (gw = Cb.createElement('path', {
              fill: '#B00',
              d: 'm5.29 3.022.09.667.582.602-.082-.66z',
            })),
          gL ||
            (gL = Cb.createElement('path', {
              fill: '#02E8F4',
              d: 'm6.403 14.327-.173-.21-.189.556.156.257z',
            })),
          gS ||
            (gS = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm7.891 11.068-.151.412-.002.965.15-.372z',
            })),
          gM ||
            (gM = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm3.39 9.146.93.008.184-.317-.913-.039z',
            })),
          gk ||
            (gk = Cb.createElement('path', {
              fill: '#9AFF5D',
              d: 'm7.476 10.982.855-.197.04.445-.85.236z',
            })),
          gH ||
            (gH = Cb.createElement('path', {
              fill: '#49FFAD',
              d: 'm7.738 12.445-.235.274-.09.878.23-.23z',
            })),
          gT ||
            (gT = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm6.281 8.319 1.211-.033.24-.027-1.191.03z',
            })),
          gO ||
            (gO = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm2.489 9.535.74.018.16-.408-.726-.058z',
            })),
          gP ||
            (gP = Cb.createElement('path', {
              fill: '#F10800',
              d: 'M1.888 4.327 2.003 5l.509-.401-.1-.688z',
            })),
          gj ||
            (gj = Cb.createElement('path', {
              fill: '#DBFF1C',
              d: 'm1.432 9.93.38.082.134-.549-.368-.132z',
            })),
          gN ||
            (gN = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm7.97 9.534 1.086-.122.145.363-1.073.152z',
            })),
          gR ||
            (gR = Cb.createElement('path', {
              fill: 'gold',
              d: 'm4.723 8.582 1.086.006.227-.169-1.068-.021z',
            })),
          gI ||
            (gI = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm1.052 9.56.142.223.157-.653-.129-.275z',
            })),
          g_ ||
            (g_ = Cb.createElement('path', {
              fill: '#9F0000',
              d: 'm2.87 2.962.116.697.606-.082-.103-.7z',
            })),
          gW ||
            (gW = Cb.createElement('path', {
              fill: '#36FFC1',
              d: 'm6.32 13.278.155-.267-.107.515-.164.317z',
            })),
          gX ||
            (gX = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm1.08 8.074.064.43.257-.677-.05-.47z',
            })),
          gU ||
            (gU = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm6.54 8.29 1.194-.031.245.04-1.174.034z',
            })),
          g$ ||
            (g$ = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm6.905 11.686.615-.22v.479l-.616.266z',
            })),
          gQ ||
            (gQ = Cb.createElement('path', {
              fill: '#E1FF16',
              d: 'm1.194 9.783.238.148.146-.6-.227-.201z',
            })),
          gV ||
            (gV = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm7.779 9.181 1.102-.097.175.327-1.086.122z',
            })),
          gG ||
            (gG = Cb.createElement('path', {
              fill: '#5DFF9A',
              d: 'm6.53 12.458.375-.245-.05.501-.38.296z',
            })),
          gZ ||
            (gZ = Cb.createElement('path', {
              fill: '#FF3B00',
              d: 'm1.554 5.547.089.622.431-.524L2.001 5z',
            })),
          gq ||
            (gq = Cb.createElement('path', {
              fill: '#1CFFDB',
              d: 'm7.125 13.718-.307.017-.152.72.296.033z',
            })),
          gK ||
            (gK = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm7.385 10.504.864-.157.082.438-.855.196z',
            })),
          gJ ||
            (gJ = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm6.804 8.333 1.174-.034.245.107-1.155.04z',
            })),
          gY ||
            (gY = Cb.createElement('path', {
              fill: '#FF7A00',
              d: 'm1.281 6.817.07.54.346-.617-.053-.572z',
            })),
          g1 ||
            (g1 = Cb.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.561 8.877 1.118-.074.201.28-1.102.098z',
            })),
          g0 ||
            (g0 = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm3.59 8.798.914.039.219-.255-.894-.063z',
            })),
          g2 ||
            (g2 = Cb.createElement('path', {
              fill: '#FFD000',
              d: 'm7.067 8.448 1.155-.041.235.17-1.136.055z',
            })),
          g3 ||
            (g3 = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'm1.946 9.463.543.072.174-.449-.527-.116z',
            })),
          g4 ||
            (g4 = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm7.321 8.632 1.138-.057.221.229-1.119.073z',
            })),
          g5 ||
            (g5 = Cb.createElement('path', {
              fill: '#FFC800',
              d: 'm4.969 8.398 1.067.021.245-.1-1.046-.031z',
            })),
          g6 ||
            (g6 = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm6.958 5.898.033.64.378.939-.025-.62z',
            })),
          g7 ||
            (g7 = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm7.66 8.48-.054.555.19 1.012.06-.523z',
            })),
          g8 ||
            (g8 = Cb.createElement('path', {
              fill: '#30FFC7',
              d: 'm6.359 13.5-.038-.222-.118.565.027.273z',
            })),
          g9 ||
            (g9 = Cb.createElement('path', {
              fill: '#FFE600',
              d: 'm2.663 9.087.727.06.201-.349-.708-.094z',
            })),
          be ||
            (be = Cb.createElement('path', {
              fill: '#23FFD4',
              d: 'm6.818 13.734-.275-.077-.14.669.263.129z',
            })),
          bt ||
            (bt = Cb.createElement('path', {
              fill: '#29FFCE',
              d: 'M6.543 13.658 6.36 13.5l-.129.616.173.21z',
            })),
          bl ||
            (bl = Cb.createElement('path', {
              fill: '#D1FF26',
              d: 'm7.251 10.044.876-.118.123.421-.864.157z',
            })),
          ba ||
            (ba = Cb.createElement('path', {
              fill: '#9DFF5A',
              d: 'm6.853 11.155.623-.173.044.484-.617.22z',
            })),
          br ||
            (br = Cb.createElement('path', {
              fill: '#FFC400',
              d: 'm1.145 8.503.077.352.24-.63-.06-.398z',
            })),
          bi ||
            (bi = Cb.createElement('path', {
              fill: '#4DFFAA',
              d: 'm7.503 12.719-.295.17-.081.83.288-.123z',
            })),
          bn ||
            (bn = Cb.createElement('path', {
              fill: '#920000',
              d: 'm3.49 2.878.102.7.622.095-.09-.7z',
            })),
          bm ||
            (bm = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm5.235 8.288 1.046.03.258-.028-1.023-.034z',
            })),
          bd ||
            (bd = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm1.578 9.33.368.133.19-.49-.351-.179z',
            })),
          bc ||
            (bc = Cb.createElement('path', {
              fill: '#5AFF9D',
              d: 'm6.38 12.673.15-.214-.055.553-.154.268z',
            })),
          bo ||
            (bo = Cb.createElement('path', {
              fill: '#C80000',
              d: 'm2.413 3.911.099.688.556-.243-.082-.697z',
            })),
          bF ||
            (bF = Cb.createElement('path', {
              fill: '#BEFF39',
              d: 'm7.797 10.047-.149.452.092.98.151-.412z',
            })),
          bh ||
            (bh = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm6.528 11.881.377-.195v.525l-.376.245z',
            })),
          bp ||
            (bp = Cb.createElement('path', {
              fill: '#FFC800',
              d: 'm3.829 8.519.894.063.245-.184-.871-.082z',
            })),
          bs ||
            (bs = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm7.74 11.48-.236.32v.918l.235-.273z',
            })),
          bf ||
            (bf = Cb.createElement('path', {
              fill: '#E7FF0F',
              d: 'm7.078 9.616.89-.082.16.392-.877.118z',
            })),
          bE ||
            (bE = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'm1.222 8.855.13.275.223-.585-.113-.32z',
            })),
          bz ||
            (bz = Cb.createElement('path', {
              fill: '#FF3400',
              d: 'm6.493 5.033.043.66.454.844-.032-.64z',
            })),
          bu ||
            (bu = Cb.createElement('path', {
              fill: '#FFDE00',
              d: 'm1.352 9.13.226.2.207-.538-.21-.247z',
            })),
          bg ||
            (bg = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm5.517 8.256 1.023.034.264.043-.998-.03z',
            })),
          bb ||
            (bb = Cb.createElement('path', {
              fill: 'gold',
              d: 'm2.136 8.971.527.116.22-.383-.505-.153z',
            })),
          bA ||
            (bA = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm2.883 8.704.708.094.238-.28-.686-.122z',
            })),
          bv ||
            (bv = Cb.createElement('path', {
              fill: '#FF8600',
              d: 'm1.351 7.356.05.471.327-.58-.03-.507z',
            })),
          bC ||
            (bC = Cb.createElement('path', {
              fill: '#BAFF3C',
              d: 'm6.752 10.63.633-.127.091.479-.623.173z',
            })),
          bx ||
            (bx = Cb.createElement('path', {
              fill: '#960000',
              d: 'm4.125 2.973.09.7.622.268-.077-.694z',
            })),
          bB ||
            (bB = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm6.867 9.23.91-.049.19.353-.89.082z',
            })),
          by ||
            (by = Cb.createElement('path', {
              fill: '#56FFA0',
              d: 'm6.423 12.837-.044-.164-.058.607.038.221z',
            })),
          bD ||
            (bD = Cb.createElement('path', {
              fill: '#4DFFAA',
              d: 'm7.208 12.89-.313.069-.077.775.307-.017z',
            })),
          bw ||
            (bw = Cb.createElement('path', {
              fill: '#FF1300',
              d: 'm2.002 5 .074.645.49-.384-.054-.662z',
            })),
          bL ||
            (bL = Cb.createElement('path', {
              fill: '#FFBD00',
              d: 'm5.806 8.303 1 .03.262.115-.976-.02z',
            })),
          bS ||
            (bS = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm7.37 7.475-.047.586.283.974.054-.555z',
            })),
          bM ||
            (bM = Cb.createElement('path', {
              fill: '#F10800',
              d: 'm5.962 4.29.053.675.52.729-.042-.659z',
            })),
          bk ||
            (bk = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm4.097 8.316.871.081.267-.11-.845-.092z',
            })),
          bH ||
            (bH = Cb.createElement('path', {
              fill: '#FFDB00',
              d: 'm6.63 8.899.931-.022.218.304-.912.05z',
            })),
          bT ||
            (bT = Cb.createElement('path', {
              fill: '#FF4A00',
              d: 'm1.643 6.169.052.571.412-.497-.033-.598z',
            })),
          bO ||
            (bO = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm6.092 8.428.975.02.255.183H6.37z',
            })),
          bP ||
            (bP = Cb.createElement('path', {
              fill: '#FC0',
              d: 'M6.369 8.629h.952l.24.248-.93.021z',
            })),
          bj ||
            (bj = Cb.createElement('path', {
              fill: '#A40000',
              d: 'm4.761 3.245.078.694.605.434-.065-.686z',
            })),
          bN ||
            (bN = Cb.createElement('path', {
              fill: '#A0FF56',
              d: 'm6.47 11.296.383-.141.052.53-.377.195z',
            })),
          bR ||
            (bR = Cb.createElement('path', {
              fill: '#C40000',
              d: 'm5.379 3.689.065.686.572.59-.054-.674z',
            })),
          bI ||
            (bI = Cb.createElement('path', {
              fill: '#53FFA4',
              d: 'm6.614 12.939-.19-.103-.065.663.184.158z',
            })),
          b_ ||
            (b_ = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm6.377 12.039.15-.158v.577l-.148.215z',
            })),
          bW ||
            (bW = Cb.createElement('path', {
              fill: '#50FFA7',
              d: 'm6.894 12.959-.28-.022-.071.72.275.077z',
            })),
          bX ||
            (bX = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm6.604 10.124.647-.081.134.46-.633.125z',
            })),
          bU ||
            (bU = Cb.createElement('path', {
              fill: '#FFC800',
              d: 'm1.785 8.792.35.18.243-.421-.33-.219z',
            })),
          b$ ||
            (b$ = Cb.createElement('path', {
              fill: '#AD0000',
              d: 'm2.986 3.659.081.697.59-.077-.066-.7z',
            })),
          bQ ||
            (bQ = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm1.401 7.827.062.397.305-.54-.04-.437z',
            })),
          bV ||
            (bV = Cb.createElement('path', {
              fill: '#FFB600',
              d: 'm3.144 8.397.685.122.268-.204-.658-.143z',
            })),
          bG ||
            (bG = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm7.504 11.8-.296.224v.866l.295-.171z',
            })),
          bZ ||
            (bZ = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm4.39 8.195.845.093.28-.032-.818-.096z',
            })),
          bq ||
            (bq = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm2.377 8.55.507.154.261-.307-.483-.184z',
            })),
          bK ||
            (bK = Cb.createElement('path', {
              fill: '#F8F500',
              d: 'm7.606 9.035-.142.492.184.972.149-.452z',
            })),
          bJ ||
            (bJ = Cb.createElement('path', {
              fill: '#FFB600',
              d: 'm1.575 8.545.21.247.261-.46-.187-.288z',
            })),
          bY ||
            (bY = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm1.462 8.224.113.321.286-.5-.09-.362z',
            })),
          b1 ||
            (b1 = Cb.createElement('path', {
              fill: '#BAFF3C',
              d: 'm7.648 10.499-.232.367.088.934.236-.32z',
            })),
          b0 ||
            (b0 = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm6.413 9.653.665-.038.173.428-.647.081z',
            })),
          b2 ||
            (b2 = Cb.createElement('path', {
              fill: '#C1FF36',
              d: 'm6.358 10.718.394-.089.101.526-.383.141z',
            })),
          b3 ||
            (b3 = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm6.433 12.146-.056-.107.003.633.056.165z',
            })),
          b4 ||
            (b4 = Cb.createElement('path', {
              fill: '#FF7300',
              d: 'm6.99 6.537-.035.614.367.91.046-.586z',
            })),
          b5 ||
            (b5 = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm4.698 8.16.819.096.285.047-.791-.091z',
            })),
          b6 ||
            (b6 = Cb.createElement('path', {
              fill: '#FF5D00',
              d: 'm1.697 6.74.03.507.39-.468-.009-.537z',
            })),
          b7 ||
            (b7 = Cb.createElement('path', {
              fill: '#A4FF53',
              d: 'm6.314 11.397.157-.1.057.584-.15.158z',
            })),
          b8 ||
            (b8 = Cb.createElement('path', {
              fill: '#DA0000',
              d: 'm2.512 4.599.054.662.535-.232-.033-.673z',
            })),
          b9 ||
            (b9 = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'M6.183 9.23h.684l.21.386-.666.038z',
            })),
          Ae ||
            (Ae = Cb.createElement('path', {
              fill: '#FFA300',
              d: 'm3.439 8.172.66.144.292-.123-.632-.155z',
            })),
          At ||
            (At = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm7.208 12.024-.314.127v.81l.313-.071z',
            })),
          Al ||
            (Al = Cb.createElement('path', {
              fill: '#A40000',
              d: 'm3.592 3.578.065.701.605.093-.048-.699z',
            })),
          Aa ||
            (Aa = Cb.createElement('path', {
              fill: '#FFAB00',
              d: 'm5.013 8.212.793.091.286.125-.764-.079z',
            })),
          Ar ||
            (Ar = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm2.046 8.332.331.219.286-.339-.304-.25z',
            })),
          Ai ||
            (Ai = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm6.612 12.188-.19-.04.002.69.19.101z',
            })),
          An ||
            (An = Cb.createElement('path', {
              fill: '#FF2500',
              d: 'm2.076 5.645.033.598.466-.364-.01-.618z',
            })),
          Am ||
            (Am = Cb.createElement('path', {
              fill: '#FC0',
              d: 'm5.92 8.866.71.033.239.331h-.686z',
            })),
          Ad ||
            (Ad = Cb.createElement('path', {
              fill: '#FFAE00',
              d: 'm5.328 8.35.764.078.278.2-.735-.059z',
            })),
          Ac ||
            (Ac = Cb.createElement('path', {
              fill: '#80FF77',
              d: 'm6.893 12.15-.281.038v.75l.28.022z',
            })),
          Ao ||
            (Ao = Cb.createElement('path', {
              fill: '#FF9F00',
              d: 'm2.66 8.212.484.185.294-.225-.455-.206z',
            })),
          AF ||
            (AF = Cb.createElement('path', {
              fill: '#FFBD00',
              d: 'm5.633 8.57.734.059.262.27-.71-.033z',
            })),
          Ah ||
            (Ah = Cb.createElement('path', {
              fill: '#E1FF16',
              d: 'm6.195 10.163.408-.039.148.505-.393.09z',
            })),
          Ap ||
            (Ap = Cb.createElement('path', {
              fill: '#FF3F00',
              d: 'm6.536 5.694-.022.64.442.819.035-.615z',
            })),
          As ||
            (As = Cb.createElement('path', {
              fill: '#FF6F00',
              d: 'm1.728 7.247.04.436.364-.436-.015-.468z',
            })),
          Af ||
            (Af = Cb.createElement('path', {
              fill: '#FFB600',
              d: 'm7.323 8.061-.13.53.273.936.141-.492z',
            })),
          AE ||
            (AE = Cb.createElement('path', {
              fill: '#FF9800',
              d: 'm3.758 8.04.632.155.307-.035L4.096 8z',
            })),
          Az ||
            (Az = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm1.859 8.044.187.288.311-.37-.161-.32z',
            })),
          Au ||
            (Au = Cb.createElement('path', {
              fill: '#B7FF40',
              d: 'm7.416 10.867-.292.276.084.88.296-.222z',
            })),
          Ag ||
            (Ag = Cb.createElement('path', {
              fill: '#A40000',
              d: 'm4.214 3.673.047.7.606.26-.028-.694z',
            })),
          Ab ||
            (Ab = Cb.createElement('path', {
              fill: '#A7FF50',
              d: 'm6.353 11.444-.039-.047.063.642.045.107z',
            })),
          AA ||
            (AA = Cb.createElement('path', {
              fill: '#C7FF30',
              d: 'm6.191 10.762.168-.044.111.578-.156.1z',
            })),
          Av ||
            (Av = Cb.createElement('path', {
              fill: '#FF8200',
              d: 'm1.768 7.683.09.361.338-.403-.063-.394z',
            })),
          AC ||
            (AC = Cb.createElement('path', {
              fill: '#F1FC06',
              d: 'm7.464 9.527-.224.416.176.924.232-.368z',
            })),
          Ax ||
            (Ax = Cb.createElement('path', {
              fill: '#FBF100',
              d: 'm5.984 9.645.429.01.191.47-.408.038z',
            })),
          AB ||
            (AB = Cb.createElement('path', {
              fill: '#FF1300',
              d: 'm6.015 4.965-.005.662.505.705.022-.64z',
            })),
          Ay ||
            (Ay = Cb.createElement('path', {
              fill: '#C40000',
              d: 'm3.068 4.356.033.673.566-.07-.01-.678z',
            })),
          AD ||
            (AD = Cb.createElement('path', {
              fill: '#B60000',
              d: 'm4.84 3.94.027.695.588.422-.01-.68z',
            })),
          Aw ||
            (Aw = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm4.096 8 .602.16.315.052-.571-.155z',
            })),
          AL ||
            (AL = Cb.createElement('path', {
              fill: '#FF8D00',
              d: 'm2.983 7.966.456.206.32-.133-.424-.22zM2.357 7.962l.304.25.322-.245-.274-.273z',
            })),
          AS ||
            (AS = Cb.createElement('path', {
              fill: '#D10000',
              d: 'm5.444 4.375.011.68.554.571.006-.662z',
            })),
          AM ||
            (AM = Cb.createElement('path', {
              fill: '#FF3800',
              d: 'm2.109 6.243.007.536.44-.341.02-.56z',
            })),
          Ak ||
            (Ak = Cb.createElement('path', {
              fill: '#ADFF49',
              d: 'm6.538 11.425-.185.02.069.701.19.041z',
            })),
          AH ||
            (AH = Cb.createElement('path', {
              fill: '#B4FF43',
              d: 'm7.124 11.144-.31.182.08.823.314-.127z',
            })),
          AT ||
            (AT = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'm5.73 9.179.453.051.23.423-.43-.01z',
            })),
          AO ||
            (AO = Cb.createElement('path', {
              fill: '#F10800',
              d: 'm2.565 5.261.01.618.51-.22.016-.63z',
            })),
          AP ||
            (AP = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm4.442 8.057.572.155.314.137-.539-.14z',
            })),
          Aj ||
            (Aj = Cb.createElement('path', {
              fill: '#B1FF46',
              d: 'm6.814 11.326-.276.098.074.762.282-.037z',
            })),
          AN ||
            (AN = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm6.01 10.152.184.011.163.555-.167.044z',
            })),
          AR ||
            (AR = Cb.createElement('path', {
              fill: '#FF7E00',
              d: 'm6.956 7.151-.117.568.355.873.13-.53z',
            })),
          AI ||
            (AI = Cb.createElement('path', {
              fill: '#FFB900',
              d: 'm5.441 8.777.48.089.262.364-.453-.051z',
            })),
          A_ ||
            (A_ = Cb.createElement('path', {
              fill: '#FF9C00',
              d: 'm4.788 8.209.54.14.304.22-.508-.118z',
            })),
          AW ||
            (AW = Cb.createElement('path', {
              fill: '#CEFF29',
              d: 'm6.218 10.75-.027.012.123.635.038.047z',
            })),
          AX ||
            (AX = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm5.125 8.451.508.118.287.297-.479-.089z',
            })),
          AU ||
            (AU = Cb.createElement('path', {
              fill: '#F70',
              d: 'm2.196 7.641.161.32.352-.269-.131-.345z',
            })),
          A$ ||
            (A$ = Cb.createElement('path', {
              fill: '#FF8200',
              d: 'm3.334 7.819.424.22.338-.04-.392-.225z',
            })),
          AQ ||
            (AQ = Cb.createElement('path', {
              fill: '#FF4A00',
              d: 'm2.116 6.78.015.467.412-.318.014-.49z',
            })),
          AV ||
            (AV = Cb.createElement('path', {
              fill: '#B60000',
              d: 'm3.657 4.28.01.68.582.09.013-.676z',
            })),
          AG ||
            (AG = Cb.createElement('path', {
              fill: '#EBFF0C',
              d: 'm7.24 9.943-.283.33.167.87.292-.276z',
            })),
          AZ ||
            (AZ = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'm2.133 7.247.064.394.382-.294-.035-.418z',
            })),
          Aq ||
            (Aq = Cb.createElement('path', {
              fill: '#F70',
              d: 'm2.709 7.694.274.274.35-.147-.24-.29z',
            })),
          AK ||
            (AK = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm7.194 8.592-.212.46.26.89.224-.415z',
            })),
          AJ ||
            (AJ = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm5.779 9.583.204.062.211.518-.183-.01z',
            })),
          AY ||
            (AY = Cb.createElement('path', {
              fill: '#D7FF1F',
              d: 'm6.392 10.67-.174.08.135.694.185-.02z',
            })),
          A1 ||
            (A1 = Cb.createElement('path', {
              fill: '#FF4A00',
              d: 'm6.514 6.332-.1.6.425.787.117-.568z',
            })),
          A0 ||
            (A0 = Cb.createElement('path', {
              fill: '#FF7A00',
              d: 'M3.705 7.775 4.096 8l.347.057-.358-.22z',
            })),
          A2 ||
            (A2 = Cb.createElement('path', {
              fill: '#FF1A00',
              d: 'm2.575 5.879-.018.559.48-.204.048-.572z',
            })),
          A3 ||
            (A3 = Cb.createElement('path', {
              fill: '#DA0000',
              d: 'm3.101 5.03-.016.63.538-.067.044-.634z',
            })),
          A4 ||
            (A4 = Cb.createElement('path', {
              fill: '#F4F802',
              d: 'm6.02 10.083-.009.07.18.61.027-.013z',
            })),
          A5 ||
            (A5 = Cb.createElement('path', {
              fill: '#E4FF13',
              d: 'm6.957 10.273-.3.241.157.812.31-.184z',
            })),
          A6 ||
            (A6 = Cb.createElement('path', {
              fill: '#B00',
              d: 'm4.262 4.372-.013.676.581.251.037-.666z',
            })),
          A7 ||
            (A7 = Cb.createElement('path', {
              fill: '#FFC100',
              d: 'm5.5 9.071.23.108.253.466-.204-.062z',
            })),
          A8 ||
            (A8 = Cb.createElement('path', {
              fill: '#DEFF19',
              d: 'm6.657 10.514-.265.157.145.754.277-.099z',
            })),
          A9 ||
            (A9 = Cb.createElement('path', {
              fill: '#FF6000',
              d: 'm2.578 7.347.131.345.383-.161-.098-.36z',
            })),
          ve ||
            (ve = Cb.createElement('path', {
              fill: '#FF7E00',
              d: 'm4.085 7.839.358.218.346.152-.324-.204z',
            })),
          vt ||
            (vt = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm3.092 7.53.242.289.37-.043-.206-.293z',
            })),
          vl ||
            (vl = Cb.createElement('path', {
              fill: '#FF1E00',
              d: 'm6.01 5.627-.082.628.486.677.1-.6z',
            })),
          va ||
            (va = Cb.createElement('path', {
              fill: '#FFA700',
              d: 'm5.182 8.63.26.147.288.402-.23-.108z',
            })),
          vr ||
            (vr = Cb.createElement('path', {
              fill: '#C80000',
              d: 'm4.867 4.633-.037.666.565.406.06-.65z',
            })),
          vi ||
            (vi = Cb.createElement('path', {
              fill: '#FF8600',
              d: 'm4.465 8.005.324.204.335.242-.29-.18z',
            })),
          vn ||
            (vn = Cb.createElement('path', {
              fill: '#FF3000',
              d: 'm2.557 6.438-.014.49.449-.191.045-.506z',
            })),
          vm ||
            (vm = Cb.createElement('path', {
              fill: '#FF8900',
              d: 'm6.84 7.719-.196.505.336.83.214-.462z',
            })),
          vd ||
            (vd = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm4.834 8.27.29.181.317.327-.259-.148z',
            })),
          vc ||
            (vc = Cb.createElement('path', {
              fill: '#E40000',
              d: 'm5.455 5.055-.06.65.534.55.081-.628z',
            })),
          vo ||
            (vo = Cb.createElement('path', {
              fill: '#FFC800',
              d: 'm6.98 9.053-.268.38.245.84.282-.33z',
            })),
          vF ||
            (vF = Cb.createElement('path', {
              fill: '#FF4A00',
              d: 'm2.543 6.929.034.418.417-.176-.002-.433z',
            })),
          vh ||
            (vh = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'm5.765 9.46.012.123.233.568.01-.07z',
            })),
          vp ||
            (vp = Cb.createElement('path', {
              fill: '#FEED00',
              d: 'm6.178 9.945-.157.138.197.667.174-.08z',
            })),
          vs ||
            (vs = Cb.createElement('path', {
              fill: '#CD0000',
              d: 'm3.667 4.96-.043.635.554.087.071-.632z',
            })),
          vf ||
            (vf = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm3.498 7.483.206.293.38.063-.17-.286z',
            })),
          vE ||
            (vE = Cb.createElement('path', {
              fill: '#F10800',
              d: 'm3.085 5.66-.048.571.509-.062.078-.578z',
            })),
          vz ||
            (vz = Cb.createElement('path', {
              fill: '#FFD300',
              d: 'm6.712 9.434-.286.297.23.783.3-.241z',
            })),
          vu ||
            (vu = Cb.createElement('path', {
              fill: '#FF5200',
              d: 'm2.994 7.171.098.36.405-.048-.062-.364z',
            })),
          vg ||
            (vg = Cb.createElement('path', {
              fill: '#FFE200',
              d: 'm6.427 9.73-.25.215.215.726.265-.157z',
            })),
          vb ||
            (vb = Cb.createElement('path', {
              fill: '#FFB200',
              d: 'm5.462 8.9.038.171.279.512-.012-.122z',
            })),
          vA ||
            (vA = Cb.createElement('path', {
              fill: '#FF5900',
              d: 'm6.414 6.932-.175.543.405.75.195-.504z',
            })),
          vv ||
            (vv = Cb.createElement('path', {
              fill: '#FF6400',
              d: 'm3.914 7.551.171.286.38.166-.136-.268z',
            })),
          vC ||
            (vC = Cb.createElement('path', {
              fill: '#F20',
              d: 'm3.037 6.233-.045.505.476-.057.078-.51z',
            })),
          vx ||
            (vx = Cb.createElement('path', {
              fill: '#FFC400',
              d: 'm5.901 9.268-.136.192.254.623.158-.138z',
            })),
          vB ||
            (vB = Cb.createElement('path', {
              fill: '#FF3800',
              d: 'm2.992 6.738.002.433.44-.052.034-.438z',
            })),
          vy ||
            (vy = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm6.644 8.224-.25.43.318.782.268-.381z',
            })),
          vD ||
            (vD = Cb.createElement('path', {
              fill: '#D10000',
              d: 'm4.25 5.048-.072.632.553.24.1-.62z',
            })),
          vw ||
            (vw = Cb.createElement('path', {
              fill: '#FF9400',
              d: 'm5.112 8.417.068.213.318.441L5.46 8.9z',
            })),
          vL ||
            (vL = Cb.createElement('path', {
              fill: '#FF6C00',
              d: 'm4.329 7.735.136.271.367.267-.101-.247z',
            })),
          vS ||
            (vS = Cb.createElement('path', {
              fill: '#FF7E00',
              d: 'm4.733 8.024.1.247.35.359-.07-.213z',
            })),
          vM ||
            (vM = Cb.createElement('path', {
              fill: '#FF3000',
              d: 'm5.928 6.255-.151.575.462.645.175-.543z',
            })),
          vk ||
            (vk = Cb.createElement('path', {
              fill: '#FF4A00',
              d: 'm3.435 7.119.062.364.416.068-.026-.359z',
            })),
          vH ||
            (vH = Cb.createElement('path', {
              fill: '#E80000',
              d: 'm3.624 5.593-.078.577.522.082.11-.571z',
            })),
          vT ||
            (vT = Cb.createElement('path', {
              fill: '#DF0000',
              d: 'm4.83 5.3-.099.62.538.386.126-.602z',
            })),
          vO ||
            (vO = Cb.createElement('path', {
              fill: '#FFB200',
              d: 'm6.13 9-.228.268.276.677.25-.214z',
            })),
          vP ||
            (vP = Cb.createElement('path', {
              fill: '#FA0F00',
              d: 'm5.396 5.705-.126.601.506.523.153-.574z',
            })),
          vj ||
            (vj = Cb.createElement('path', {
              fill: '#FFA300',
              d: 'M6.394 8.651 6.13 9l.297.73.286-.296z',
            })),
          vN ||
            (vN = Cb.createElement('path', {
              fill: '#FF9F00',
              d: 'm5.57 8.658-.108.242.303.56.135-.192z',
            })),
          vR ||
            (vR = Cb.createElement('path', {
              fill: '#FF6800',
              d: 'm6.239 7.475-.229.471.382.705.251-.427z',
            })),
          vI ||
            (vI = Cb.createElement('path', {
              fill: '#FF3000',
              d: 'm3.468 6.68-.033.439.452.073.068-.433z',
            })),
          v_ ||
            (v_ = Cb.createElement('path', {
              fill: '#FF4A00',
              d: 'm3.888 7.192.026.36.415.183.01-.344z',
            })),
          vW ||
            (vW = Cb.createElement('path', {
              fill: '#FF1A00',
              d: 'm3.545 6.17-.077.51.49.08.112-.507z',
            })),
          vX ||
            (vX = Cb.createElement('path', {
              fill: '#FF7E00',
              d: 'm5.194 8.133-.082.284.348.483.108-.242z',
            })),
          vU ||
            (vU = Cb.createElement('path', {
              fill: '#ED0400',
              d: 'm4.178 5.68-.11.571.522.228.141-.561z',
            })),
          v$ ||
            (v$ = Cb.createElement('path', {
              fill: '#F50',
              d: 'm4.339 7.39-.01.343.404.29.045-.317z',
            })),
          vQ ||
            (vQ = Cb.createElement('path', {
              fill: '#FF8D00',
              d: 'm5.772 8.341-.202.317.331.61L6.13 9z',
            })),
          vV ||
            (vV = Cb.createElement('path', {
              fill: '#FF6800',
              d: 'm4.778 7.706-.045.318.38.393.08-.284z',
            })),
          vG ||
            (vG = Cb.createElement('path', {
              fill: '#FF7A00',
              d: 'm6.01 7.946-.24.395.36.659.264-.349z',
            })),
          vZ ||
            (vZ = Cb.createElement('path', {
              fill: '#FF4300',
              d: 'm5.776 6.83-.2.509.434.607.227-.471z',
            })),
          vq ||
            (vq = Cb.createElement('path', {
              fill: '#FF3400',
              d: 'm3.955 6.76-.067.432.452.197.104-.417z',
            })),
          vK ||
            (vK = Cb.createElement('path', {
              fill: '#FA0F00',
              d: 'm4.731 5.92-.14.56.506.366.172-.54z',
            })),
          vJ ||
            (vJ = Cb.createElement('path', {
              fill: '#FF1A00',
              d: 'm4.068 6.253-.112.506.487.213.147-.49z',
            })),
          vY ||
            (vY = Cb.createElement('path', {
              fill: '#F20',
              d: 'm5.27 6.306-.173.539.478.493.201-.51z',
            })),
          v1 ||
            (v1 = Cb.createElement('path', {
              fill: '#FF6800',
              d: 'm5.364 7.775-.17.358.378.525.202-.317z',
            })),
          v0 ||
            (v0 = Cb.createElement('path', {
              fill: '#F50',
              d: 'm5.575 7.339-.211.436.408.568.24-.395z',
            })),
          v2 ||
            (v2 = Cb.createElement('path', {
              fill: '#FF3B00',
              d: 'm4.443 6.972-.104.417.439.317.14-.393z',
            })),
          v3 ||
            (v3 = Cb.createElement('path', {
              fill: '#FF4E00',
              d: 'm4.917 7.313-.14.393.417.427.172-.359z',
            })),
          v4 ||
            (v4 = Cb.createElement('path', {
              fill: '#FF2500',
              d: 'm4.59 6.48-.147.49.474.342.18-.468z',
            })),
          v5 ||
            (v5 = Cb.createElement('path', {
              fill: '#FF3800',
              d: 'm5.097 6.846-.18.467.447.462.211-.435z',
            }))
        );

      function CC() {
        return (CC = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let Cx = (e) =>
          Cb.createElement(
            'svg',
            CC(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: 24,
                height: 24,
                fill: 'none',
              },
              e
            ),
            v6 ||
              (v6 = Cb.createElement('path', {
                fill: '#00F',
                d: 'M11.121 15.025c-1.63-1.223-3.627-1.996-5.68-1.918-1.369.026-2.677.435-3.993.769-.37.072-.797.177-1.14-.042-.178-.136-.266-.36-.292-.577-.245-1.341 2.46-1.881 3.396-2.285 1.284-.444 2.559-.915 3.788-1.488.609-.286 1.224-.566 1.746-1 1.575-1.302 2.63-3.08 3.895-4.675.769-.976 2.14-2.614 3.455-1.534 1.131.927 1.386 2.454 1.231 3.834-.452 3.642-1.366 6.64 1.79 9.412 1.02.884 2.212 1.604 3.112 2.638.288.348.825.985.34 1.384-1.088.548-3.347-.315-4.477-.678a28.7 28.7 0 0 1-7.17-3.84m0 0a28.7 28.7 0 0 0 7.183 3.806c.64.226 1.29.425 1.951.58.796.146 1.708.432 2.466.064.422-.363-.112-.93-.367-1.25-.911-1.02-2.094-1.713-3.134-2.594-3.261-2.827-2.37-5.828-1.92-9.541.145-1.31-.099-2.756-1.157-3.623-.245-.205-.548-.33-.855-.306-.993.137-1.645 1.066-2.27 1.79-1.268 1.582-2.346 3.392-3.954 4.683-.534.435-1.172.72-1.794 1.003-1.857.862-3.834 1.402-5.737 2.132-.566.257-1.35.54-1.453 1.232-.036.954.591.995 1.357.822 3.709-1.06 6.44-1.204 9.684 1.202',
              })),
            v7 ||
              (v7 = Cb.createElement('path', {
                fill: '#004CFF',
                d: 'M16.97 3.084c1.784 2.148.053 5.143.048 7.6-.134 1.964.654 3.923 2.126 5.224.479.434 1.017.814 1.504 1.254.505.486 1.988 1.695 1.481 2.445-.867.816-3.764-.313-4.786-.688a27.5 27.5 0 0 1-6.8-3.895c-1.037-.766-2.226-1.339-3.493-1.572-1.268-.248-2.578-.12-3.839.174l-.953.223c-.644.157-1.599.31-1.698-.618-.29-1.695 2.476-2.32 3.655-2.866A83 83 0 0 0 7.84 8.888c1.22-.471 2.219-1.358 3.13-2.282.919-.928 1.727-1.96 2.658-2.88.903-.9 2.285-1.939 3.341-.642m-.014.011c-1.054-1.28-2.41-.244-3.307.652-.926.92-1.731 1.955-2.64 2.896-.903.935-1.903 1.84-3.132 2.33a85 85 0 0 1-3.614 1.516C3.19 11 .443 11.684.743 13.199c.079.783.92.576 1.47.453l.952-.228c2.622-.7 5.345-.258 7.523 1.4 2.56 2.01 5.452 3.613 8.566 4.554.623.172 1.26.327 1.9.347.288.002.65-.006.852-.22.392-.63-1.018-1.817-1.451-2.238-.48-.44-1.01-.82-1.496-1.267-1.483-1.329-2.273-3.338-2.12-5.319.024-2.458 1.775-5.439.017-7.586',
              })),
            v8 ||
              (v8 = Cb.createElement('path', {
                fill: '#008CFF',
                d: 'M17.46 3.558c1.606 2.12-.258 4.965-.38 7.31-.205 1.864.346 3.818 1.657 5.179.427.457.93.841 1.375 1.284.536.564 1.192 1.143 1.374 1.943.089 1.291-2.286.58-2.977.392-3.007-.944-5.795-2.579-8.219-4.572-5.145-3.952-9.25.854-9.163-2.407.09-1.62 2.336-2.258 3.567-2.854 1.16-.487 2.328-.949 3.495-1.416 1.163-.466 2.187-1.222 3.14-2.033 1.422-1.049 4.414-5.034 6.131-2.826m-.027.021c-1.674-2.174-4.687 1.81-6.065 2.85-.948.822-1.97 1.592-3.144 2.075-1.163.476-2.325.953-3.478 1.451-1.15.572-3.376 1.246-3.436 2.741-.132 2.877 3.9-1.742 9.13 2.198 2.409 2.006 5.141 3.631 8.124 4.591.579.17 2.838.835 2.756-.19-.176-.747-.797-1.304-1.314-1.855-.443-.448-.942-.833-1.37-1.3-1.324-1.392-1.873-3.396-1.648-5.282.138-2.34 2.018-5.173.445-7.279',
              })),
            v9 ||
              (v9 = Cb.createElement('path', {
                fill: '#00D4FF',
                d: 'M17.952 4.032c.75 1.035.558 2.389.186 3.53-.355 1.163-.811 2.297-.988 3.496-.28 1.775.068 3.7 1.197 5.125.762.933 1.797 1.681 2.303 2.83.058.147.103.305.102.477-.164 1.558-3.834-.01-4.66-.376a23.5 23.5 0 0 1-4.685-2.833c-.485-.37-.938-.787-1.407-1.152-4.448-3.507-8.012.23-8.272-2.125-.26-1.455.62-2.318 1.807-2.945 1.606-.868 3.338-1.471 5.04-2.107 1.125-.445 2.167-1.079 3.157-1.775 1.498-.917 4.664-4.322 6.22-2.145m-.045.03c-1.51-2.127-4.684 1.266-6.136 2.17-.987.706-2.03 1.35-3.161 1.807-1.697.65-3.41 1.271-5 2.153-1.119.61-1.961 1.416-1.692 2.787.063.776.65.717 1.256.617 1.19-.228 2.436-.41 3.648-.184 1.22.206 2.36.77 3.33 1.518.486.383.925.793 1.403 1.162a23.2 23.2 0 0 0 4.622 2.833c.71.36 5.013 2.092 4.31.153-.487-1.116-1.507-1.863-2.26-2.802-1.14-1.46-1.483-3.434-1.185-5.235.189-1.213.656-2.348 1.018-3.503.375-1.127.579-2.447-.153-3.475',
              })),
            Ce ||
              (Ce = Cb.createElement('path', {
                fill: '#16FFE1',
                d: 'M18.445 4.507c.674 1.049.376 2.352-.06 3.43-.42 1.1-.925 2.172-1.16 3.32-.354 1.697-.176 3.575.752 5.062.657.987 1.638 1.737 1.998 2.918.039.15.063.312.029.479-.425 1.408-3.706-.107-4.574-.517A21.4 21.4 0 0 1 11 16.28c-1.273-1.184-2.671-2.337-4.442-2.584-1.173-.243-2.326.095-3.504.095a.766.766 0 0 1-.693-.62c-.108-.605-.195-1.19-.082-1.797.372-1.628 2.846-2.418 4.218-3.015.418-.143 1.252-.437 1.67-.579 1.403-.43 2.734-1.061 4.01-1.785 1.552-.765 4.896-3.634 6.268-1.487m-.064.039c-1.312-2.079-4.661.786-6.16 1.526-1.277.73-2.618 1.363-4.024 1.804-.41.15-1.245.444-1.655.594-1.307.587-3.75 1.402-4.088 2.94-.1.553-.004 1.164.097 1.71.04.127.086.256.18.332.335.251.797.114 1.198.078 3.068-.54 5.075.458 7.228 2.565 1.775 1.512 3.781 2.797 5.977 3.598.627.202 2.417.832 2.685-.015a.9.9 0 0 0-.025-.395c-.335-1.122-1.332-1.914-1.956-2.876-.939-1.527-1.11-3.447-.737-5.176.248-1.165.765-2.238 1.191-3.33.435-1.06.742-2.32.09-3.355',
              })),
            Ct ||
              (Ct = Cb.createElement('path', {
                fill: '#3CFFBA',
                d: 'M18.939 4.983c.6 1.065.191 2.316-.306 3.332-.486 1.039-1.037 2.05-1.33 3.152-.575 2.178-.3 4.69 1.274 6.407.16.241.31.49.44.752.255.497.52 1.342-.114 1.675-1.186.471-3.078-.491-4.154-1.027a19 19 0 0 1-2.876-1.907c-.91-.69-1.682-1.573-2.557-2.29-3.555-2.87-6.212-.02-6.426-2.312-.11-.709-.34-1.45-.134-2.166.328-1.01 1.372-1.522 2.245-1.975.912-.419 1.85-.797 2.813-1.077a32 32 0 0 0 4.852-1.689c1.57-.592 5.127-2.987 6.273-.875m-.085.045c-1.081-2.026-4.641.354-6.15.919a34 34 0 0 1-4.859 1.706c-.953.287-1.882.674-2.781 1.1-.836.45-1.831.937-2.138 1.896-.185.68.048 1.403.157 2.082.077.989.72.828 1.486.766 1.737-.222 3.549.262 4.903 1.383.893.737 1.633 1.6 2.548 2.303.889.71 1.831 1.358 2.833 1.896.992.52 2.056 1.01 3.172 1.138.272.022.56.018.785-.095.724-.444-.078-1.623-.391-2.143-.312-.48-.705-.92-.945-1.446-.733-1.579-.756-3.441-.31-5.104.307-1.12.87-2.135 1.36-3.165.492-.995.907-2.191.33-3.236',
              })),
            Cl ||
              (Cl = Cb.createElement('path', {
                fill: '#60FF97',
                d: 'M19.434 5.46c.526 1.087 0 2.28-.555 3.235-.55.978-1.146 1.933-1.496 2.991-.5 1.568-.584 3.337-.071 4.909.377 1.059 1.3 1.927 1.28 3.117-.244 1.894-3.628.178-4.541-.373-1.458-.863-2.766-1.962-3.918-3.202-1.083-1.242-2.506-2.271-4.188-2.402-.565-.07-1.106.011-1.682-.043a.9.9 0 0 1-.437-.171c-.363-.305-.304-.812-.441-1.225-.312-1.114-.754-2.32.326-3.199C5.48 7.664 7.808 7.219 9.958 6.69a59 59 0 0 0 3.229-.917c1.6-.46 3.166-1.313 4.876-1.237.36.025.713.16.991.395l.147.162c.092.086.165.262.233.367m-.108.049c-.91-1.982-4.58-.016-6.108.364a59 59 0 0 1-3.236.912c-2.138.534-4.418 1.006-6.16 2.433-1.002.817-.548 1.971-.247 3.03.15.459.085 1.192.717 1.235.54.044 1.123-.037 1.674.027 1.14.09 2.24.566 3.126 1.28.888.706 1.55 1.621 2.406 2.357 1.235 1.116 2.613 2.102 4.152 2.746.707.276 2.6 1.002 2.732-.195.01-1.137-.905-2.005-1.252-3.038-.517-1.62-.421-3.422.101-5.026.364-1.078.975-2.038 1.527-3.007.544-.933 1.068-2.061.568-3.118',
              })),
            Ca ||
              (Ca = Cb.createElement('path', {
                fill: '#8DFF6A',
                d: 'M19.929 5.938c.45 1.112-.194 2.24-.805 3.138-.611.92-1.255 1.82-1.659 2.84a9 9 0 0 0-.454 4.827c.234 1.08 1.092 2.038.862 3.204-.41 1.32-2.184.625-3.07.256-1.525-.687-2.85-1.762-4.005-2.959-1.548-1.72-2.669-3.41-5.222-3.535-.403-.04-.932.024-1.246-.326a.96.96 0 0 1-.197-.415c-.095-.551-.273-1.052-.48-1.568-.194-.51-.436-1.045-.388-1.639.162-1.19 1.444-1.734 2.407-2.177 1.46-.68 3.23-.94 4.808-1.225 1.084-.199 2.17-.387 3.249-.61 1.615-.212 5.378-1.893 6.2.19m-.132.05c-.727-1.951-4.533-.335-6.047-.138-1.082.22-2.169.407-3.253.604-2.143.377-4.38.784-6.199 2.051-1.121.778-.972 1.7-.466 2.823.21.504.405 1.055.503 1.59.113.615.761.534 1.254.568 1.124.04 2.234.46 3.111 1.167.885.685 1.5 1.631 2.274 2.423a15 15 0 0 0 2.496 2.122c1.026.72 4.648 2.555 4.171-.078-.154-.814-.67-1.514-.833-2.331-.234-1.103-.14-2.231.027-3.334.256-1.672 1.216-3.118 2.155-4.468.595-.872 1.229-1.928.807-2.998',
              })),
            Cr ||
              (Cr = Cb.createElement('path', {
                fill: '#94FF63',
                d: 'M20.426 6.418c.37 1.135-.39 2.198-1.057 3.04-.671.862-1.363 1.713-1.82 2.694-.666 1.467-.917 3.147-.817 4.748.06.825.501 1.567.53 2.402.061.568-.162 1.277-.768 1.464-1.31.336-2.834-.592-3.865-1.325-.885-.664-1.658-1.462-2.35-2.317-.682-.85-1.245-1.791-2.116-2.455a4.5 4.5 0 0 0-2.165-.958c-.386-.062-.95-.087-1.165-.512-.181-.386-.182-.8-.366-1.187-.342-1-1.298-1.995-.94-3.121.465-1.056 1.676-1.468 2.66-1.882 2.582-.945 5.396-.906 8.089-1.23 1.596-.046 5.506-1.43 6.15.639m-.159.049c-.556-1.913-4.492-.608-5.98-.577-2.697.298-5.49.276-8.05 1.25-1.07.465-2.88 1.105-2.58 2.57.278 1.053 1.051 1.93 1.247 3.027.08.65.586.68 1.129.748.832.112 1.63.465 2.285.987.887.675 1.473 1.645 2.153 2.497.68.844 1.44 1.629 2.303 2.278.853.634 1.834 1.176 2.886 1.344.257.023.525.04.756-.048 1.338-.604.124-2.576.093-3.62-.094-1.648.17-3.354.86-4.856.476-1.007 1.184-1.866 1.856-2.721.643-.817 1.383-1.79 1.042-2.88',
              })),
            Ci ||
              (Ci = Cb.createElement('path', {
                fill: '#CAFF2C',
                d: 'M20.924 6.9c.298 1.222-.667 2.226-1.414 3.05-.769.84-1.526 1.695-2.023 2.71-.511 1.01-.73 2.143-.923 3.249-.085.558-.136 1.123-.091 1.68.127 1.063.585 2.62-.608 3.247-1.529.586-3.6-.922-4.6-1.992-.797-.834-1.44-1.808-2.029-2.774-.612-.968-1.49-1.662-2.466-2.247-1.733-.169-1.195-.86-1.878-2.169-.436-.928-1.3-1.75-1.315-2.836.102-1.139 1.355-1.642 2.262-2.04a10.4 10.4 0 0 1 3.03-.747c2.065-.225 4.153-.3 6.225-.153 1.032.035 2.064-.093 3.105-.136.979-.043 2.45-.042 2.725 1.157m-.187.043c-.26-1.105-1.619-1.056-2.533-1.045-1.032.031-2.07.146-3.115.104a30.6 30.6 0 0 0-6.207.142 10.2 10.2 0 0 0-2.988.768c-.848.382-2.05.87-2.141 1.914-.014.49.252.957.512 1.394.404.662.877 1.317 1.129 2.068.142.448.166 1.035.715 1.169.255.09.543.095.79.165.99.568 1.926 1.33 2.541 2.313.596.98 1.217 1.924 1.996 2.745.942 1.014 2.909 2.464 4.333 1.951 1.075-.602.576-2.036.486-3.025-.045-.582.01-1.162.097-1.73.2-1.134.426-2.277.95-3.31.514-1.042 1.292-1.914 2.06-2.75.715-.8 1.644-1.71 1.375-2.873',
              })),
            Cn ||
              (Cn = Cb.createElement('path', {
                fill: '#FFE200',
                d: 'M21.421 7.382c.204 1.218-.825 2.127-1.61 2.88-.805.765-1.603 1.543-2.169 2.489-.588.941-.868 2.025-1.153 3.088-.202.8-.368 1.617-.336 2.443.037.84.004 1.827-.653 2.44-1.355 1.114-3.587-.391-4.52-1.473-.75-.852-1.3-1.848-1.79-2.849-.479-1.012-1.222-1.81-2.057-2.549l.05.029c-.255-.08-.526-.148-.778-.31-.258-.162-.417-.45-.486-.722-.097-.534-.312-1.001-.593-1.456-.737-1.25-2.706-2.978-.906-4.23 3.245-2.19 7.366-1.417 11.028-1.168 1.069.054 2.14-.015 3.22.009 1.014.026 2.543.124 2.753 1.38m-.215.036c-.2-1.147-1.606-1.184-2.543-1.241-1.068-.04-2.146.016-3.223-.057-3.156-.271-6.509-.833-9.527.417-.71.308-1.496.641-1.916 1.317-.62 1.144.99 2.46 1.508 3.427.29.453.534.98.634 1.507.067.245.19.457.395.584.21.134.483.202.745.281.85.735 1.645 1.606 2.13 2.637.997 2.104 2.67 4.62 5.25 4.573 1.187-.178 1.33-1.589 1.261-2.572-.032-.85.14-1.694.346-2.51.292-1.082.581-2.188 1.183-3.148.585-.974 1.403-1.769 2.21-2.532.744-.728 1.723-1.536 1.547-2.683',
              })),
            Cm ||
              (Cm = Cb.createElement('path', {
                fill: '#FFA300',
                d: 'M21.92 7.868c.11 1.217-.983 2.034-1.806 2.723-.845.696-1.682 1.405-2.311 2.288-.658.878-1.004 1.917-1.357 2.948-.263.775-.503 1.557-.632 2.365-.115 1.076-.312 2.425-1.434 2.917-1.348.502-2.893-.464-3.756-1.457-1.122-1.285-1.4-2.982-2.21-4.423-.267-.471-.592-.906-.914-1.355l.045.039c-.247-.123-.519-.26-.724-.496-.207-.233-.297-.54-.355-.81-.121-.523-.398-1.006-.714-1.454-1.643-2.167-3.58-3.66.095-5.113 3.178-1.277 6.683-.41 9.924.095 1.1.144 2.215.137 3.332.207 1.04.078 2.675.196 2.816 1.526m-.246.022c-.145-1.197-1.639-1.227-2.587-1.346-1.104-.094-2.225-.11-3.334-.278-3.224-.574-6.704-1.382-9.852-.092-.723.319-1.58.66-1.918 1.416-.405 1.144 1.365 2.51 1.942 3.438.329.457.627.958.766 1.526.061.27.142.517.311.705.17.194.426.32.68.446.667.884 1.281 1.858 1.635 2.918.376 1.023.802 2.044 1.495 2.87 1.52 1.724 4.194 2.47 4.654-.523.151-1.663.718-3.232 1.316-4.78.633-1.562 1.893-2.766 3.175-3.789.775-.665 1.803-1.376 1.717-2.51',
              })),
            Cd ||
              (Cd = Cb.createElement('path', {
                fill: '#FF6C00',
                d: 'M22.418 8.355c.021 1.221-1.139 1.952-2.002 2.586-.887.634-1.764 1.284-2.45 2.113q-.52.62-.89 1.338c-.675 1.471-1.31 3.005-1.73 4.573-.223.804-.614 1.645-1.343 2.122-1.286.794-2.93-.024-3.82-1.053-.727-.869-1.016-1.99-1.265-3.063-.219-1.074-.584-2.085-1.047-3.078l.034.045c-.225-.186-.455-.405-.604-.683-.148-.262-.203-.561-.283-.847-.166-.533-.484-1.018-.839-1.467-.354-.451-.755-.87-1.144-1.302-.542-.645-1.332-1.366-1.219-2.303.216-.921 1.224-1.312 1.995-1.643 3.324-1.321 6.964-.211 10.272.583 1.13.232 2.289.289 3.446.407 1.069.131 2.823.264 2.89 1.672m-.275.006c-.07-1.245-1.692-1.28-2.64-1.456-1.145-.146-2.31-.233-3.45-.494-3.282-.861-6.902-1.948-10.193-.593-.732.328-1.678.7-1.88 1.547-.081.867.673 1.525 1.199 2.142.392.425.8.842 1.168 1.3.368.455.708.954.894 1.532.08.264.134.56.274.798.132.246.342.442.57.628l.011.027c.468.99.853 2.046 1.074 3.12.247 1.054.536 2.132 1.22 2.947.804.92 2.31 1.698 3.458.986.662-.442 1.002-1.205 1.216-1.958.432-1.604 1.065-3.121 1.758-4.627.255-.495.567-.962.925-1.389.716-.86 1.618-1.524 2.506-2.157.807-.609 1.887-1.228 1.89-2.353',
              })),
            Cc ||
              (Cc = Cb.createElement('path', {
                fill: '#FF3000',
                d: 'M22.916 8.844c-.081 1.294-1.406 1.93-2.352 2.548-.978.607-1.933 1.254-2.68 2.112-.78.852-1.213 1.922-1.693 2.962l-.726 1.573c-.558 1.171-1.013 2.564-2.227 3.24-1.527.801-3.518-.287-4.106-1.805-.641-1.65-.292-3.478-.74-5.153-.15-.56-.532-1.023-.682-1.593-.24-1.142-1.083-1.987-1.868-2.8-.876-.96-2.963-2.5-1.486-3.805 2.605-1.921 6.098-1.46 9.026-.64 1.117.288 2.2.724 3.313 1.011 1.117.274 2.265.385 3.413.55 1.058.174 2.838.377 2.808 1.8m-.305-.014c.02-1.228-1.63-1.328-2.542-1.54-1.134-.195-2.29-.34-3.412-.648-3.84-1.278-8.553-3.055-12.202-.406-.871.741-.314 1.638.315 2.32.774.857 1.682 1.596 2.393 2.522.266.354.506.738.657 1.16.12.426.23.808.458 1.193 1.009 1.812.351 4.054 1.11 5.938.536 1.365 2.339 2.364 3.706 1.645 1.135-.65 1.54-1.972 2.087-3.1l.73-1.579c1.058-2.571 2.112-3.778 4.49-5.203.88-.593 2.107-1.121 2.21-2.302',
              })),
            Co ||
              (Co = Cb.createElement('path', {
                fill: '#DF0000',
                d: 'M23.414 9.335c-.186 1.329-1.615 1.869-2.627 2.452-1.046.562-2.064 1.178-2.874 2.026-.843.843-1.335 1.932-1.905 2.967-1.125 1.873-2.24 5.087-4.885 4.917-4.721-.97-1.602-5.517-2.69-8.549a23 23 0 0 0-.239-.857c-.407-1.104-1.343-1.93-2.18-2.732-.846-.879-3.022-2.38-1.77-3.69 3.227-2.554 7.7-1.156 11.156.182.558.218 1.104.458 1.672.622 1.138.342 2.317.509 3.495.718 1.078.221 2.968.458 2.847 1.944m-.334-.038c.116-1.234-1.675-1.392-2.565-1.636-1.752-.331-3.535-.729-5.158-1.501-3.392-1.385-7.843-2.731-11.009-.19-1.145 1.188 1.034 2.654 1.8 3.443.974.912 2.09 1.87 2.4 3.239l.12.43c.724 2.028-.237 4.182.086 6.238.183 1.16 1.303 1.931 2.4 2.072 2.404.155 3.522-3.052 4.564-4.769.576-1.054 1.093-2.18 1.956-3.04.847-.889 1.903-1.525 2.954-2.09.936-.56 2.25-.998 2.452-2.196',
              })),
            CF ||
              (CF = Cb.createElement('path', {
                fill: '#AD0000',
                d: 'M8.872 21.299c-1.267-.787-1.134-2.339-.761-3.57.487-1.765 1.193-3.564.66-5.366-.668-1.73-2.374-2.741-3.672-4.01-.462-.444-.931-.89-1.198-1.498-.588-1.482 1.35-2.178 2.428-2.522 3.1-.895 6.201.478 9.054 1.58 1.136.446 2.262 1.015 3.453 1.295 1.2.33 2.427.505 3.62.899 1.089.331 1.887 1.112 1.233 2.287-.52.849-1.515 1.209-2.346 1.62-.562.26-1.12.52-1.652.822-1.065.596-2.024 1.385-2.711 2.388-.336.498-.643 1.051-.966 1.578-1.439 2.349-3.907 6.67-7.142 4.497m.207-.306c3.47 2.329 6.05-3.7 7.618-5.967.72-1.051 1.73-1.878 2.826-2.488.547-.31 1.114-.575 1.677-.835.797-.396 1.71-.714 2.196-1.48.542-.968-.158-1.514-1.05-1.798-1.164-.384-2.406-.566-3.596-.894-1.215-.292-2.375-.82-3.448-1.44-2.67-1.357-5.93-2.352-8.886-1.478-.89.324-2.72.879-2.219 2.12.24.535.7.97 1.128 1.375 1.87 1.74 4.29 3.1 3.974 6.057-.084 1.278-.52 2.474-.84 3.657-.324 1.105-.497 2.489.62 3.17',
              }))
          ),
        CB = {
          src: '/_next/static/media/scrvUSD-sm.6ea621f0.webp',
          height: 64,
          width: 64,
          blurDataURL:
            'data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDYAAAABN6CgbRumuMqwhPcPjYgIvH1TUBNJkpqPTsA8SficHVz+ZAAi+h8jflE4Aa6FZCEFuApn9CdWUDggVAAAAHACAJ0BKggACAACQDglsAJ0ugH4AALhViXmXYAA/sl0xGFXHhvfD6MNUivVtJCE/Jeu5SHexNbMKlFkn/3/2umYQI/9dn9eVFXX/S3/t2CzmgAAAA==',
          blurWidth: 8,
          blurHeight: 8,
        },
        Cy = {
          src: '/_next/static/media/crvUSD-sm.b0748488.webp',
          height: 64,
          width: 64,
          blurDataURL:
            'data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDYAAAABP6AmAAFGLg0Vdq0aERG4/1BQGklSrMqdH16NQqPI5DRvAAcR/Y9RvyjcDBageGgZTOGO/gRWUDggRAAAABACAJ0BKggACAACQDglqAJ0APmPgMmB4gAA/bXjXfvYVWw7TAeVtfR7Mx66zd/w5KSGO2uxUGpJv/hWv5Wv5hpCmsAA',
          blurWidth: 8,
          blurHeight: 8,
        },
        CD = {
          src: '/_next/static/media/scrvUSD-xs.4b7e7f33.webp',
          height: 56,
          width: 56,
          blurDataURL:
            'data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABR6CgbRumpTWEQ/wfjYgIvH0L9cEmtq24yiroL7sDaBEB9SqALAYSB0lE/6OlV1ZYHj4NWUMO8BS4d/wFAFZQOCBSAAAAcAIAnQEqCAAIAAJAOCWwAnS6AfgAAyETfdqIAAD+lMz4l5bVmt9o2mW+T4ruLlawyu0SgDeiz5Cwie/9rpmECP/XZ/XlRV1/ym/7dgs5YwAAAA==',
          blurWidth: 8,
          blurHeight: 8,
        },
        Cw = {
          src: '/_next/static/media/crvUSD-xs.e0b5fecb.webp',
          height: 56,
          width: 56,
          blurDataURL:
            'data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABR6CgbRumpTWEQ/wfjYgIvH0L9aE2tm0oIv/fmopohHgtYG2ADmhdExH9j+gODQBVAVwGYL4G2B5gNfsIAFZQOCBEAAAA8AEAnQEqCAAIAAJAOCWoAnQA9LJ/ZxYAAP21411JclVsO0wHmOU14LQLCUbE8gBt/JlP+TiAwlv/+Fa/la/mGkKawAA=',
          blurWidth: 8,
          blurHeight: 8,
        };

      function CL() {
        return (CL = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CS = (e) =>
        Cb.createElement(
          'svg',
          CL(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 15 15',
            },
            e
          ),
          Ch ||
            (Ch = Cb.createElement('path', {
              fill: 'currentColor',
              fillRule: 'evenodd',
              d: 'M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m-.553-9.732a3.2 3.2 0 0 1 1.106 0l.366-2.056a5.3 5.3 0 0 0-1.838 0zm-1.453.7q.196-.179.43-.319L4.846 2.86q-.405.243-.757.563a4.6 4.6 0 0 0-.604.666l1.678 1.245q.144-.194.331-.365m3.582-.319q.234.14.43.319.188.171.33.365l1.679-1.245a4.6 4.6 0 0 0-.604-.666 5 5 0 0 0-.757-.563zM4.714 6.657q0-.235.051-.464L2.726 5.74a4.2 4.2 0 0 0-.101.918zm5.52-.464q.052.229.052.464h2.089q0-.466-.101-.918zm-2.058.848L7.5 5.675l-.685 1.354-.113.244-.245.037-1.508.218L6.03 8.593l.181.189-.044.244-.245 1.501 1.35-.697.227-.12.238.1 1.349.707-.257-1.5-.044-.245.183-.179 1.073-1.053-1.509-.218-.244-.036zm-1.79-.216L7.5 4.568l1.114 2.257 2.49.363-1.802 1.755.426 2.48-2.228-1.17-2.228 1.17.426-2.48-1.802-1.758z',
              clipRule: 'evenodd',
            }))
        );

      function CM() {
        return (CM = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let Ck = (e) =>
          Cb.createElement(
            'svg',
            CM(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 15 15',
              },
              e
            ),
            Cp ||
              (Cp = Cb.createElement('path', {
                fill: '#1F1E1B',
                d: 'M13.5 13.95a.45.45 0 1 0 0-.9h-12a.45.45 0 1 0 0 .9zM11.068 7.568a.45.45 0 1 0-.636-.636L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 0 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0z',
              }))
          ),
        CH = {
          src: '/_next/static/media/chad.d46ea509.png',
          height: 150,
          width: 150,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXr0IP/0Df81D3XooTxznHjqmvXkXj0zJfvvJvxwaHtxaTdvK73q5nzmI3mtpf5g4b0v6Dxi4ewi1v+eYX5z4zzwqTxupjfmHxpp7viAAAAE3RSTlMBxmduQRKNJuFrrvj6/q/V5aoq5O4ucAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwtxkkSgCAMAMFRhCRuKAH8/0+tEvvUQOQ3T8uI1DpmW7MvUXsA1OR8EpD6lX1fBcrtfjR9ASdoAbnJbyDQAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        };

      function CT() {
        return (CT = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CO = (e) =>
        Cb.createElement(
          'svg',
          CT(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
            },
            e
          ),
          Cs ||
            (Cs = Cb.createElement('path', {
              d: 'M12 11.807A9 9 0 0 1 10.049 2a9.94 9.94 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.95 9.95 0 0 0 2.735-5.119A9 9 0 0 1 12 11.807',
            }))
        );

      function CP() {
        return (CP = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let Cj = (e) =>
        Cb.createElement(
          'svg',
          CP(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
            },
            e
          ),
          Cf ||
            (Cf = Cb.createElement('path', {
              d: 'M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12M11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z',
            }))
        );

      function CN() {
        return (CN = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CR = (e) =>
        Cb.createElement(
          'svg',
          CN(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 18,
              height: 16,
              fill: 'none',
            },
            e
          ),
          CE ||
            (CE = Cb.createElement('path', {
              stroke: '#fff',
              strokeWidth: 2.5,
              d: 'M1 9.471 6.671 14 16 1',
            }))
        );

      function CI() {
        return (CI = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let C_ = (e) =>
        Cb.createElement(
          'svg',
          CI(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
            },
            e
          ),
          Cz ||
            (Cz = Cb.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001S17.515 2 12 2m0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001',
            }))
        );

      function CW() {
        return (CW = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CX = (e) =>
        Cb.createElement(
          'svg',
          CW(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 14,
              height: 14,
              fill: '#EA3943',
            },
            e
          ),
          Cu ||
            (Cu = Cb.createElement('path', {
              fillRule: 'evenodd',
              d: 'M3.092.472A1.5 1.5 0 0 0 .908 2.528L4.94 6.812.908 11.096a1.5 1.5 0 1 0 2.184 2.056L7 9.001l3.906 4.15a1.5 1.5 0 0 0 2.185-2.056L9.059 6.812l4.032-4.283A1.5 1.5 0 1 0 10.906.473L7 4.623z',
              clipRule: 'evenodd',
            }))
        );

      function CU() {
        return (CU = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let C$ = (e) =>
        Cb.createElement(
          'svg',
          CU(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 16,
              height: 16,
              fill: 'currentColor',
            },
            e
          ),
          Cg ||
            (Cg = Cb.createElement('path', {
              d: 'M5 2 0 8l5 6h11V2Zm2 3h1c.28 0 .53.11.71.29L10 6.59l1.29-1.3c.18-.18.43-.29.71-.29h1v1c0 .28-.11.53-.29.71L11.41 8l1.3 1.29c.18.18.29.43.29.71v1h-1c-.28 0-.53-.11-.71-.29L10 9.41l-1.29 1.3c-.18.18-.43.29-.71.29H7v-1c0-.28.11-.53.29-.71L8.59 8l-1.3-1.29A1 1 0 0 1 7 6Z',
            }))
        );
      var CQ = l(58916);
      let CV = {
        src: '/_next/static/media/llama.3f86cc18.png',
        height: 50,
        width: 40,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAOVBMVEXgpKS0q5C3qpDNuaXm3cvEsZ3Z0LzPxrG9spXGvaTHvqTXz77Z0r3SybTOw6zMwqrLop3v59Xf1sEq8gq8AAAAEXRSTlMBdBOg/QbMd1qAnOJKu+Xk5HSCRCYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicBcGJAYAgDATBBQJJUJ6z/2KdAXifAh23C+Bq1IimZMlMyZD0BePMuR0vvUb+IuQBdOTfiikAAAAASUVORK5CYII=',
        blurWidth: 6,
        blurHeight: 8,
      };
    },
    7908: (e, t, l) => {
      l.d(t, {
        A: () => m,
      });
      var a = l(54568),
        r = l(48341);
      let i = (0, r.i7)(['100%{transform:translateX(100%);}']),
        n = r.Ay.span.withConfig({
          componentId: 'sc-d22a12ef-0',
        })(
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
          i,
          ({ isLightBg: e }) =>
            e
              ? 'background-image: var(--skeleton_light--background-image);'
              : 'background-image: var(--skeleton--background-image);'
        ),
        m = ({ className: e, isLightBg: t = !1, skeleton: l = [12, 12], ...r }) =>
          (0, a.jsx)(n, {
            className: e,
            isLightBg: t,
            skeleton: l,
            ...r,
          });
    },
    16726: (e, t, l) => {
      l.d(t, {
        A: () => p,
      });
      var a = l(54568),
        r = l(7620),
        i = l(48341),
        n = l(45808),
        m = l(27280),
        d = l(94990),
        c = l(75778);
      let o = (0, r.forwardRef)(({ className: e, children: t, loading: l, testId: i, ...n }, c) => {
          let o = (0, r.useRef)(null),
            { isFocusVisible: p, focusProps: s } = (0, d.o)();
          return (0, a.jsxs)(F, {
            ...n,
            ...s,
            'data-testid': `btn-${i}`,
            className: `${e || ''} ${l ? 'loading' : ''} ${p ? 'focus-visible' : ''}`,
            ref: c || o,
            children: [
              t,
              l &&
                (0, a.jsx)(h, {
                  flex: !0,
                  flexAlignItems: 'center',
                  flexJustifyContent: 'center',
                  fillWidth: !0,
                  fillHeight: !0,
                  children: (0, a.jsx)(m.A, {
                    isDisabled: !0,
                    size: 17,
                  }),
                }),
            ],
          });
        }),
        F = i.Ay.button.withConfig({
          componentId: 'sc-186dc391-0',
        })(['', ';'], c.ku),
        h = (0, i.Ay)(n.A).withConfig({
          componentId: 'sc-186dc391-1',
        })([
          'position:absolute;top:0;left:0;bottom:0;right:0;background-color:var(--button--disabled_spinner--background-color);',
        ]);
      o.displayName = 'Button';
      let p = o;
    },
    17147: (e, t, l) => {
      l.d(t, {
        wl: () => eS,
        be: () => eM,
        L1: () => ek,
      });
      var a = l(33377),
        r = l(84121);
      let i = (e, t) =>
        ({
          [-2]: `2px 2px 0px 0px ${e.Color.Neutral[800]} inset`,
          [-1]: `1px 1px 0px 0px ${e.Color.Neutral[800]} inset`,
          1: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334624,0px 4px 4px -2px #2A334524,0px 8px 8px -8px #2A334514',
          2: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334624,0px 6px 6px -3px #2A334624,0px 8px 8px -6px #2A334524,0px 12px 12px -6px #2A334514',
          3: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334524,0px 8px 8px -4px #2A334524,0px 16px 16px -8px #2A334524,0px 32px 32px -16px #2A33451A',
        })[t];
      var n = l(72415),
        m = l(84032),
        d = l(41265);
      let { LineHeight: c, OutlineWidth: o, FontWeight: F, ButtonSize: h, FontSize: p } = m.B,
        s = ({ Fill: e, Label: t, Outline: l }) => ({
          color: t,
          backgroundColor: e,
          borderColor: l,
        }),
        f = ({ Default: e, Disabled: t, Hover: l, Current: a }) => ({
          ...s(e),
          '&:hover': s(l),
          '&:disabled': t && s(t),
          '&.current': a && s(a),
        }),
        E = (e, t, l, a, i) => ({
          [r.b.breakpoints.up(i)]: {
            height: e,
            fontSize: t[i],
            fontWeight: l,
            lineHeight: a[i],
          },
        }),
        z = ({ height: e, fontSize: t, fontWeight: l = 'Bold', lineHeight: a }) => ({
          ...E(h[e], p[t], F[l], c[a], 'mobile'),
          ...E(h[e], p[t], F[l], c[a], 'tablet'),
          ...E(h[e], p[t], F[l], c[a], 'desktop'),
        }),
        u = ({ Button: e, Text: t }) => {
          let {
              Primary: l,
              Secondary: a,
              Success: i,
              Error: c,
              Outlined: F,
              Ghost: h,
              Navigation: p,
              Focus_Outline: s,
              Transition: E,
            } = e,
            u = {
              primary: f(l),
              secondary: f(a),
              success: f(i),
              error: f(c),
              outlined: f(F),
              ghost: f(h),
              navigation: f(p),
            },
            g = d.vX[t.FontFamily.Button];
          return {
            styleOverrides: {
              root: {
                variants: [
                  ...Object.entries(u).map(([e, t]) => ({
                    props: {
                      color: e,
                    },
                    style: t,
                  })),
                  {
                    props: {
                      variant: 'link',
                    },
                    style: {
                      textTransform: 'none',
                      padding: 0,
                      height: `${n.XQ[400]} !important`,
                    },
                  },
                ],
                borderRadius: 0,
                border: `${o} solid transparent`,
                boxSizing: 'border-box',
                '&:focus-visible': {
                  borderColor: s,
                },
                fontFamily: g,
                textTransform: 'uppercase',
                transition: E,
              },
              sizeExtraSmall: {
                ...z({
                  height: 'xs',
                  fontSize: 'sm',
                  lineHeight: 'md',
                }),
                textTransform: 'none',
              },
              sizeSmall: z({
                height: 'sm',
                fontSize: 'sm',
                lineHeight: 'md',
              }),
              sizeMedium: z({
                height: 'md',
                fontSize: 'md',
                lineHeight: 'xl',
              }),
              sizeLarge: z({
                height: 'lg',
                fontSize: 'md',
                lineHeight: 'xl',
              }),
              startIcon: {
                [r.b.breakpoints.up('mobile')]: {
                  marginInlineEnd: m.B.Spacing.xs.mobile,
                },
                [r.b.breakpoints.up('tablet')]: {
                  marginInlineEnd: m.B.Spacing.xs.tablet,
                },
                [r.b.breakpoints.up('desktop')]: {
                  marginInlineEnd: m.B.Spacing.xs.desktop,
                },
              },
              endIcon: {
                [r.b.breakpoints.up('mobile')]: {
                  marginInlineStart: m.B.Spacing.xs.mobile,
                },
                [r.b.breakpoints.up('tablet')]: {
                  marginInlineStart: m.B.Spacing.xs.tablet,
                },
                [r.b.breakpoints.up('desktop')]: {
                  marginInlineStart: m.B.Spacing.xs.desktop,
                },
              },
            },
          };
        },
        { ButtonSize: g, OutlineWidth: b } = m.B,
        A = ({ Button: e, Layer: t, Text: l }) => ({
          styleOverrides: {
            root: {
              height: g.sm,
              minWidth: g.sm,
              border: `${b} solid transparent`,
              borderRadius: '0',
              padding: 0,
              color: e.Ghost.Default.Label,
              transition: e.Transition,
              '&.current': {
                borderColor: t.Highlight.Outline,
              },
              ':focus-visible': {
                borderColor: t.Highlight.Outline,
              },
              '&:hover': {
                color: e.Ghost.Hover.Label,
                backgroundColor: 'transparent',
                filter: 'saturate(2)',
              },
              fontFamily: d.vX[l.FontFamily.Button],
            },
            sizeExtraSmall: {
              height: g.xs,
              minWidth: g.xs,
            },
            sizeSmall: {
              height: g.sm,
              minWidth: g.sm,
            },
            sizeMedium: {
              height: g.md,
              minWidth: g.md,
            },
            sizeLarge: {
              height: g.lg,
              minWidth: g.lg,
            },
          },
        }),
        {
          Spacing: v,
          ButtonSize: C,
          FontSize: x,
          FontWeight: B,
          LineHeight: y,
          OutlineWidth: D,
        } = m.B,
        w = ({ Label: e, Fill: t }) => ({
          color: e,
          backgroundColor: t,
        }),
        L = (e, t, l, a, i, n, m, d) => ({
          [r.b.breakpoints.up(e)]: {
            minHeight: t,
            minWidth: l,
            ...(d && {
              height: d,
              width: d,
            }),
            paddingBlock: a[e],
            paddingInline: i[e],
            fontSize: n[e],
            fontWeight: B.Bold,
            lineHeight: m[e],
          },
        }),
        S = ({
          minHeight: e,
          minWidth: t,
          paddingBlock: l,
          paddingInline: a,
          fontSize: r,
          lineHeight: i,
        }) => {
          let n = [C[e], C[t], v[l], v[a], x[r], y[i]];
          return {
            ...L('mobile', ...n),
            ...L('tablet', ...n),
            ...L('desktop', ...n),
          };
        },
        M = ({ size: e, padding: t, fontSize: l, lineHeight: a }) => {
          let r = [C[e], C[e], v[t], v[t], x[l], y[a], ...(e && [C[e]])];
          return {
            ...L('mobile', ...r),
            ...L('tablet', ...r),
            ...L('desktop', ...r),
            overflow: 'hidden',
          };
        },
        k = ({ Toggles: e, Button: t, Text: l }) => {
          let { Default: a, Hover: r, Current: i } = e;
          return {
            styleOverrides: {
              root: {
                ...w(a),
                '&:hover': w(r),
                '&.Mui-selected': w(i),
                '&.Mui-selected:hover': w(i),
                '&&': {
                  margin: 0,
                },
                border: `${D} solid transparent !important`,
                borderRadius: 0,
                transition: t.Transition,
                fontFamily: d.vX[l.FontFamily.Button],
                textTransform: 'uppercase',
              },
              sizeExtraSmall: {
                ...S({
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
                ...M({
                  size: 'xs',
                  padding: 'xs',
                  fontSize: 'sm',
                  lineHeight: 'sm',
                }),
                textTransform: 'none',
              },
              sizeSmall: S({
                minHeight: 'sm',
                minWidth: 'sm',
                paddingBlock: 'sm',
                paddingInline: 'md',
                fontSize: 'sm',
                lineHeight: 'sm',
              }),
              sizeSmallSquare: M({
                size: 'sm',
                padding: 'sm',
                fontSize: 'sm',
                lineHeight: 'sm',
              }),
              sizeMedium: S({
                minHeight: 'md',
                minWidth: 'md',
                paddingBlock: 'sm',
                paddingInline: 'md',
                fontSize: 'md',
                lineHeight: 'xl',
              }),
              sizeMediumSquare: M({
                size: 'md',
                padding: 'sm',
                fontSize: 'md',
                lineHeight: 'xl',
              }),
            },
          };
        },
        { Sizing: H, Spacing: T, ButtonSize: O } = m.B,
        P = (e, t) => ({
          styleOverrides: {
            root: {
              padding: `${T.lg.desktop} ${T.md.desktop} ${T.sm.desktop}`,
              borderBottom: `1px solid ${e.Layer[3].Outline}`,
              minHeight: `calc(${O.lg} + 1px)`,
              variants: [
                {
                  props: {
                    size: 'small',
                  },
                  style: {
                    minHeight: 'auto',
                    maxHeight: H.md.desktop,
                    padding: `${T.md.desktop} ${T.md.desktop} ${T.sm.desktop}`,
                  },
                },
              ],
            },
            action: {
              alignContent: 'center',
              alignSelf: 'center',
              margin: 0,
            },
            title: {
              ...t.headingSBold,
              variants: [
                {
                  props: {
                    size: 'small',
                  },
                  style: {
                    ...t.headingXsBold,
                  },
                },
              ],
            },
          },
        });
      var j = l(54568),
        N = l(44876),
        R = l(69879);
      let I = (0, R.A)(
          (0, j.jsx)('svg', {
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, j.jsx)('path', {
              d: 'M12.2314 3.97534C12.5396 4.17683 12.6261 4.58999 12.4246 4.89815L7.89123 11.8315C7.78439 11.9949 7.61131 12.1032 7.41766 12.128C7.22401 12.1527 7.02925 12.0913 6.8848 11.9599L3.95147 9.29328C3.67903 9.04561 3.65895 8.62398 3.90662 8.35154C4.1543 8.0791 4.57593 8.05902 4.84837 8.30669L7.20315 10.4474L11.3086 4.16849C11.5101 3.86032 11.9233 3.77385 12.2314 3.97534Z',
              fill: 'currentColor',
            }),
          }),
          'Check'
        ),
        { Sizing: _ } = m.B,
        W = (0, R.A)(
          (0, j.jsx)('svg', {
            viewBox: '0 0 24 24',
          }),
          'Empty'
        ),
        X = (e) =>
          (0, j.jsx)(N.A, {
            className: 'icon-wrapper',
            display: 'flex',
            sx: {
              outline: '1px solid currentColor',
              '& svg': {
                animation: 'checkmark-appear 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
              },
              '@keyframes checkmark-appear': {
                from: {
                  transform: 'scale(0)',
                },
                to: {
                  transform: 'scale(1)',
                },
              },
            },
            children: e,
          }),
        U = ({ size: e }) => ({
          '& .icon-wrapper svg': (0, r.N)({
            fontSize: _[e],
          }),
        }),
        $ = () => ({
          defaultProps: {
            icon: X((0, j.jsx)(W, {})),
            checkedIcon: X((0, j.jsx)(I, {})),
            disableRipple: !0,
          },
          styleOverrides: {
            root: {
              ...U({
                size: 'sm',
              }),
              '&:hover .icon-wrapper, .MuiFormControlLabel-root:hover &:not(.Mui-disabled) .icon-wrapper, &.Mui-focusVisible .icon-wrapper':
                {
                  outlineWidth: '2px',
                },
            },
            sizeSmall: {
              ...U({
                size: 'xs',
              }),
            },
            sizeLarge: {
              ...U({
                size: 'md',
              }),
            },
          },
        }),
        Q = (e, t) => ({
          style: {
            backgroundColor: t.Fill[e],
            color: t.Label[e],
            borderColor: t.Border[e],
          },
          props: {
            color: e.toLowerCase(),
          },
        }),
        { Sizing: V, Spacing: G, IconSize: Z } = m.B,
        q = {
          extraSmall: {
            font: 'bodyXsBold',
            height: Z.md,
            iconSize: Z.sm,
          },
          small: {
            font: 'buttonXs',
            height: Z.md,
            iconSize: Z.sm,
          },
          medium: {
            font: 'buttonXs',
            height: V.md,
            iconSize: Z.md,
          },
          large: {
            font: 'buttonM',
            height: V.md,
            iconSize: Z.lg,
          },
          extraLarge: {
            font: 'headingSBold',
            height: V.xl,
            iconSize: Z.xl,
          },
        },
        K = {
          extraSmall: {
            deleteIconSize: Z.xs,
          },
          small: {
            height: V.md,
            deleteIconSize: Z.sm,
          },
          medium: {
            font: 'buttonS',
            deleteIconSize: Z.md,
          },
          large: {
            height: V.lg,
            font: 'buttonS',
            deleteIconSize: Z.lg,
          },
          extraLarge: {
            height: V.xl,
            deleteIconSize: Z.xl,
          },
        },
        J = ({ Chips: e, Color: t, Text: { TextColors: l }, Layer: a, Badges: i }, n) => ({
          styleOverrides: {
            root: {
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'transparent',
              borderRadius: e.BorderRadius.NonClickable,
              color: l.Primary,
              backgroundColor: 'transparent',
              ...(0, r.N)({
                paddingInline: G.xs,
              }),
              '&:has(.MuiChip-icon)': {
                ...(0, r.N)({
                  gap: G.xs,
                }),
                '& .MuiChip-icon': {
                  marginInline: 0,
                },
                '& .MuiChip-label': {
                  paddingInline: 0,
                },
              },
            },
          },
          variants: [
            {
              props: {
                clickable: !0,
              },
              style: {
                borderRadius: e.BorderRadius.Clickable,
                borderColor: e.Default.Stroke,
                cursor: 'pointer',
                '& .MuiChip-deleteIcon': {
                  margin: 0,
                },
                '&:hover, &:focus-visible': {
                  borderColor: 'transparent',
                  backgroundColor: e.Hover.Fill,
                  color: e.Hover.Label,
                  '& .MuiChip-deleteIcon': {
                    fill: e.Hover.Label,
                  },
                },
              },
            },
            Q('Default', i),
            Q('Active', i),
            Q('Alert', i),
            Q('Highlight', i),
            Q('Warning', i),
            Q('Accent', i),
            {
              props: {
                color: 'selected',
              },
              style: {
                backgroundColor: e.Current.Fill,
                color: e.Current.Label,
                borderColor: e.Current.Outline,
                '& .MuiChip-deleteIcon': {
                  fill: e.Current.Label,
                },
              },
            },
            {
              props: {
                color: 'unselected',
              },
              style: {
                color: e.Default.Label,
                backgroundColor: e.Default.Fill,
                borderColor: e.Default.Stroke,
                '& .MuiChip-deleteIcon': {
                  fill: e.Default.Label,
                },
              },
            },
            ...Object.entries(q).map(([e, { font: t, iconSize: l, ...a }]) => ({
              props: {
                size: e,
              },
              style: {
                ...(0, r.N)({
                  ...n[t],
                  ...a,
                }),
                '&:has(.MuiChip-icon)': {
                  '& .MuiChip-icon': (0, r.N)({
                    width: l,
                    height: l,
                  }),
                },
              },
            })),
            ...Object.entries(K).map(([e, { font: t, deleteIconSize: l, ...a }]) => ({
              props: {
                size: e,
                clickable: !0,
              },
              style: {
                ...(0, r.N)({
                  ...(t && n[t]),
                  ...a,
                }),
                '& .MuiChip-deleteIcon': (0, r.N)({
                  width: l,
                  height: l,
                }),
              },
            })),
          ],
        });
      var Y = l(83897);
      let ee = (0, R.A)(
          (0, j.jsxs)('svg', {
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, j.jsx)('path', {
                d: 'M8.79988 4.80006C8.79988 5.24189 8.44171 5.60006 7.99988 5.60006C7.55806 5.60006 7.19988 5.24189 7.19988 4.80006C7.19988 4.35823 7.55806 4.00006 7.99988 4.00006C8.44171 4.00006 8.79988 4.35823 8.79988 4.80006Z',
                fill: 'currentColor',
              }),
              (0, j.jsx)('path', {
                d: 'M6.40001 6.40006H8.00001C8.29456 6.40006 8.53334 6.63884 8.53334 6.93339V10.6667H9.60001V11.7334H6.40001V10.6667H7.46667V7.46672H6.40001V6.40006Z',
                fill: 'currentColor',
              }),
              (0, j.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M7.99987 0.935425C4.09834 0.935425 0.935516 4.09825 0.935516 7.99978C0.935516 11.9013 4.09834 15.0641 7.99987 15.0641C11.9014 15.0641 15.0642 11.9013 15.0642 7.99978C15.0642 4.09825 11.9014 0.935425 7.99987 0.935425ZM1.94885 7.99978C1.94885 4.6579 4.65799 1.94876 7.99987 1.94876C11.3417 1.94876 14.0509 4.6579 14.0509 7.99978C14.0509 11.3416 11.3417 14.0508 7.99987 14.0508C4.65799 14.0508 1.94885 11.3416 1.94885 7.99978Z',
                fill: 'currentColor',
              }),
            ],
          }),
          'InfoCircled'
        ),
        { Spacing: et, IconSize: el } = m.B,
        ea = '.MuiAlertTitle-root, .MuiAlert-icon',
        er = (
          { Layer: { 1: e, Feedback: t, Highlight: l }, Text: { TextColors: a } },
          { bodyXsRegular: i }
        ) => ({
          defaultProps: {
            iconMapping: {
              success: (0, j.jsx)(I, {
                fontSize: 'small',
              }),
              info: (0, j.jsx)(ee, {
                fontSize: 'small',
              }),
              warning: (0, j.jsx)(Y.P, {
                fontSize: 'small',
              }),
              error: (0, j.jsx)(Y.P, {
                fontSize: 'small',
              }),
            },
          },
          styleOverrides: {
            root: (0, r.N)({
              ...i,
              paddingInlineStart: et.md,
              paddingInlineEnd: et.sm,
              paddingBlockStart: et.sm,
              paddingBlockEnd: et.xs,
            }),
            outlined: {
              backgroundColor: e.Fill,
              color: a.Secondary,
              '&.MuiAlert-colorInfo': {
                [ea]: {
                  color: a.Highlight,
                },
                borderColor: l.Outline,
              },
              '&.MuiAlert-colorSuccess': {
                [ea]: {
                  color: a.Feedback.Success,
                },
                borderColor: t.Success,
              },
              '&.MuiAlert-colorWarning': {
                [ea]: {
                  color: a.Feedback.Warning,
                },
                borderColor: t.Warning,
              },
              '&.MuiAlert-colorError': {
                [ea]: {
                  color: a.Feedback.Error,
                },
                borderColor: t.Error,
              },
            },
            filled: {
              color: a.Feedback.Inverted,
              '&.MuiAlert-colorInfo': {
                backgroundColor: t.Info,
              },
              '&.MuiAlert-colorSuccess': {
                backgroundColor: t.Success,
              },
              '&.MuiAlert-colorWarning': {
                backgroundColor: t.Warning,
                color: a.Primary,
              },
              '&.MuiAlert-colorError': {
                backgroundColor: t.Error,
              },
            },
            icon: {
              ...(0, r.N)({
                marginRight: et.xs,
              }),
              '& svg': (0, r.N)({
                width: el.sm,
                height: el.sm,
              }),
            },
          },
        }),
        ei = ({}, { bodySBold: e }) => ({
          styleOverrides: {
            root: (0, r.N)({
              ...e,
              height: el.sm,
              marginBlockEnd: '4px',
            }),
          },
        }),
        { ButtonSize: en, Spacing: em } = m.B,
        ed = (e) => ({
          styleOverrides: {
            root: {
              ...(0, r.N)({
                height: en.md,
                transition: e.Button.Transition,
                gap: em.sm,
                paddingBlock: em.xs,
                paddingInline: em.sm,
              }),
              '&.Mui-focusVisible': {
                backgroundColor: e.Layer.TypeAction.Hover,
                '.MuiTypography-root': {
                  '--mui-palette-text-primary': 'inherit',
                },
              },
              '&.Mui-selected': {
                backgroundColor: e.Layer.TypeAction.Selected,
                '&:hover': {
                  backgroundColor: e.Layer.TypeAction.Selected,
                },
              },
            },
            dense: {
              height: en.sm,
            },
          },
        }),
        ec = (e, t) => ({
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
            select: {
              ...t.bodyMBold,
            },
          },
        }),
        eo = ({ Switch: { Default: e, Checked: t }, Button: { Focus_Outline: l } }) => ({
          styleOverrides: {
            root: {
              padding: 0,
              ':focus-within': {
                '.MuiSwitch-track': {
                  borderColor: l,
                },
              },
            },
            switchBase: {
              borderRadius: 0,
              '&.Mui-checked+.MuiSwitch-track': {
                opacity: 1,
              },
            },
            track: {
              borderRadius: 0,
              backgroundColor: e.Fill,
              border: `1px solid ${e.Outline}`,
              '.Mui-checked &': {
                backgroundColor: t.Fill,
                borderColor: t.Outline,
              },
            },
            thumb: {
              borderRadius: 0,
              color: e.Label,
              '.Mui-checked &': {
                color: t.Label,
              },
            },
          },
        }),
        { Spacing: eF, MaxWidth: eh } = m.B,
        ep = (e, t) => ({
          styleOverrides: {
            tooltip: {
              color: e.Text.TextColors.Secondary,
              backgroundColor: e.Layer[3].Fill,
              boxShadow: i(e, 2),
              maxWidth: eh.tooltip,
              display: 'flex',
              alignItems: 'center',
              ...(0, r.N)({
                padding: eF.md,
                ...t.bodyMBold,
              }),
            },
          },
        }),
        { Sizing: es } = m.B,
        ef = (0, R.A)(
          (0, j.jsx)('svg', {
            viewBox: '0 0 24 24',
          }),
          'Empty'
        ),
        eE = (0, R.A)(
          (0, j.jsx)('svg', {
            viewBox: '0 0 24 24',
            children: (0, j.jsx)('circle', {
              cx: '12',
              cy: '12',
              r: '6',
              fill: 'currentColor',
            }),
          }),
          'Circle'
        ),
        ez = (e) =>
          (0, j.jsx)(N.A, {
            className: 'icon-wrapper',
            display: 'flex',
            sx: {
              outline: '1px solid currentColor',
              borderRadius: '50%',
              '& svg': {
                animation: 'circle-appear 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
              },
              '@keyframes circle-appear': {
                from: {
                  transform: 'scale(0)',
                },
                to: {
                  transform: 'scale(1)',
                },
              },
            },
            children: e,
          }),
        eu = ({ size: e }) => ({
          '& .icon-wrapper svg': (0, r.N)({
            fontSize: es[e],
          }),
        }),
        eg = () => ({
          defaultProps: {
            icon: ez((0, j.jsx)(ef, {})),
            checkedIcon: ez((0, j.jsx)(eE, {})),
            disableRipple: !0,
          },
          styleOverrides: {
            root: {
              ...eu({
                size: 'sm',
              }),
              '&:hover .icon-wrapper, .MuiFormControlLabel-root:hover &:not(.Mui-disabled) .icon-wrapper, &.Mui-focusVisible .icon-wrapper':
                {
                  outlineWidth: '2px',
                },
            },
            sizeSmall: {
              ...eu({
                size: 'xs',
              }),
            },
            sizeLarge: {
              ...eu({
                size: 'md',
              }),
            },
          },
        }),
        { Sizing: eb } = m.B,
        eA = {
          small: eb.xs,
          medium: eb.sm,
        },
        ev = {
          ...(0, r.N)({
            height: eA.small,
          }),
          borderRadius: 0,
          border: 'none',
          '&.MuiSlider-sizeMedium, .MuiSlider-sizeMedium &': (0, r.N)({
            height: eA.medium,
          }),
        },
        eC = (e) => ({
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
        ex = ':not(:has([data-index="1"]))',
        eB = (e) => ({
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -10,
            width: 10,
            height: '100%',
          },
          [`&${ex}::before`]: {
            backgroundColor: e.Button.Primary.Default.Fill,
          },
          [`&.Mui-disabled${ex}::before`]: {
            backgroundColor: 'var(--mui-palette-grey-400)',
          },
        }),
        ey = (e) => ({
          defaultProps: {
            size: 'small',
          },
          styleOverrides: {
            root: {
              ...ev,
              borderRadius: 0,
              '&': {
                paddingBlock: 0,
              },
              position: 'relative',
              ...eC(e),
              ...eB(e),
            },
            thumb: {
              ...ev,
              width: 20,
              background: `${e.Color.Neutral[950]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
              transition: `background ${n.Uw}, border ${n.Uw}`,
              '&:hover': {
                backdropFilter: 'invert(1)',
                background: `${e.Color.Neutral[50]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
                backgroundBlendMode: 'difference',
                border: `1px solid ${e.Color.Primary[500]}`,
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: 'none',
              },
              '&.Mui-disabled': {
                background: `${e.Color.Neutral[600]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
              },
            },
            track: ev,
            rail: {
              height: 0,
            },
          },
        });
      var eD = l(81473);
      let ew = {
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
        eL = ({ Text: e }) => ({
          defaultProps: {
            variant: 'bodyMRegular',
            variantMapping: ew,
          },
          variants: Object.entries(e.TextColors.Feedback).map(([e, t]) => ({
            props: {
              color: e.toLowerCase(),
            },
            style: {
              color: t,
            },
          })),
        }),
        eS = m.B.ButtonSize.sm,
        eM = {
          width: '100%',
          minWidth: 320,
        },
        ek = (e, t) => ({
          MuiAlert: er(e, t),
          MuiAlertTitle: ei(e, t),
          MuiButton: u(e),
          MuiButtonBase: {
            defaultProps: {
              disableRipple: !0,
            },
          },
          MuiCardHeader: P(e, t),
          MuiCardActions: {
            styleOverrides: {
              root: {
                borderTop: `1px solid ${e.Layer[3].Outline}`,
                minHeight: m.B.ButtonSize.lg,
                justifyContent: 'center',
              },
            },
          },
          MuiCheckbox: $(),
          MuiChip: J(e, t),
          MuiContainer: {
            styleOverrides: {
              root: {
                display: 'flex',
                maxWidth: 'var(--width)',
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                maxHeight: '100dvh',
                [r.b.breakpoints.down('tablet')]: {
                  margin: 0,
                },
              },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: e.Layer[2].Outline,
              },
            },
          },
          MuiFormControlLabel: {
            styleOverrides: {
              root: {
                margin: '0',
              },
              label: {
                marginLeft: m.B.Spacing.xs.desktop,
                ...t.headingXsBold,
              },
            },
          },
          MuiIconButton: A(e),
          MuiLinearProgress: {
            styleOverrides: {
              root: {
                backgroundColor: e.Color.Neutral[300],
              },
              bar: {
                backgroundColor: e.Color.Primary[500],
              },
            },
          },
          MuiToggleButton: k(e),
          MuiToggleButtonGroup: {
            styleOverrides: {
              root: ({ ownerState: e }) => ({
                gap: e.compact ? '0rem' : '0.25rem',
              }),
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                backgroundColor: e.Inputs.Base.Default.Fill,
                ':has(input:autofill)': {
                  backgroundColor: 'light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))',
                  boxShadow: '0 0 0 100px #266798 inset',
                  '& svg': {
                    color: 'rgb(232, 240, 254)',
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 1,
                  transition: `border-color ${n.Uw}`,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: e.Inputs.Base.Default.Border.Active,
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: e.Inputs.Base.Default.Border.Error,
                },
              },
              input: {
                height: m.B.ButtonSize.md,
                boxSizing: 'border-box',
              },
              inputSizeSmall: {
                height: m.B.ButtonSize.sm,
              },
            },
          },
          MuiMenuItem: ed(e),
          MuiSelect: ec(e, t),
          MuiSlider: ey(e),
          MuiSkeleton: {
            styleOverrides: {
              root: {
                backgroundColor: (0, a.X4)(e.Text.TextColors.Primary, 0.13),
              },
            },
          },
          MuiTab: (0, eD.Yk)(e),
          MuiTabs: (0, eD.Xq)(e),
          MuiToolbar: {
            styleOverrides: {
              root: {
                minHeight: eS,
                paddingX: 3,
              },
            },
          },
          MuiTooltip: ep(e, t),
          MuiPaper: {
            styleOverrides: {
              root: {
                boxShadow: i(e, 1),
                backgroundImage: 'none',
              },
              elevation2: {
                boxShadow: i(e, 2),
              },
              elevation3: {
                boxShadow: i(e, 3),
              },
              elevation11: {
                boxShadow: i(e, -1),
              },
              elevation12: {
                boxShadow: i(e, -2),
              },
            },
          },
          MuiPopover: {
            defaultProps: {
              marginThreshold: 8,
              elevation: 3,
            },
            styleOverrides: {
              paper: {
                backgroundColor: e.Layer[3].Fill,
                '& .MuiMenu-list': {
                  maxHeight: m.B.MaxHeight.popover,
                },
              },
            },
          },
          MuiRadio: eg(),
          MuiSwitch: eo(e),
          MuiTypography: eL(e),
        });
    },
    21802: (e, t, l) => {
      l.d(t, {
        CP: () => m,
        PD: () => n,
        PE: () => o,
        R3: () => i,
        VS: () => c,
        WS: () => F,
        WU: () => d,
        rN: () => r,
      });
      var a = l(36074);
      let r = {
          PAGE_SWAP: '/pools',
          PAGE_POOLS: '/pools',
          PAGE_CREATE_POOL: '/pools',
          PAGE_DASHBOARD: '/pools',
        },
        i = {
          PAGE_MARKETS: '/pools',
          PAGE_DISCLAIMER: '/pools',
        },
        n = {
          PAGE_MARKETS: '/pools',
          BETA_PAGE_MARKETS: '/pools',
          PAGE_CRVUSD_STAKING: '/pools',
          PAGE_DISCLAIMER: '/pools',
          PAGE_PEGKEEPERS: '/pools',
        },
        m = {
          PAGE_VECRV_CREATE: '/vecrv/create',
          PAGE_PROPOSALS: '/proposals',
          PAGE_GAUGES: '/gauges',
          PAGE_VECRV: '/vecrv',
          PAGE_ANALYTICS: '/analytics',
          PAGE_USER: '/user',
          DISCUSSION: 'https://gov.curve.finance/',
          PAGE_DISCLAIMER: '/disclaimer',
        },
        d = ['dex', 'lend', 'crvusd', 'dao'],
        c = {
          dex: {
            label: 'DEX',
            routes: [
              {
                app: 'dex',
                route: r.PAGE_SWAP,
                label: () => (0, a.t)`Quickswap`,
              },
              {
                app: 'dex',
                route: r.PAGE_POOLS,
                label: () => (0, a.t)`Pools`,
              },
              {
                app: 'dex',
                route: r.PAGE_CREATE_POOL,
                label: () => (0, a.t)`Pool Creation`,
              },
              {
                app: 'dex',
                route: r.PAGE_DASHBOARD,
                label: () => (0, a.t)`Dashboard`,
              },
            ],
          },
          crvusd: {
            label: 'crvUSD',
            routes: [
              {
                app: 'crvusd',
                route: n.PAGE_MARKETS,
                label: () => (0, a.t)`crvUSD`,
              },
              {
                app: 'crvusd',
                route: n.BETA_PAGE_MARKETS,
                label: () => (0, a.t)`Llama (beta)`,
                betaFeature: !0,
              },
              {
                app: 'crvusd',
                route: n.PAGE_PEGKEEPERS,
                label: () => (0, a.t)`Peg Keepers`,
              },
              {
                app: 'crvusd',
                route: n.PAGE_CRVUSD_STAKING,
                label: () => (0, a.t)`Savings crvUSD`,
              },
            ],
          },
          lend: {
            label: 'Lend',
            routes: [
              {
                app: 'lend',
                route: i.PAGE_MARKETS,
                label: () => (0, a.t)`Lend`,
              },
            ],
          },
          dao: {
            label: 'DAO',
            routes: [
              {
                app: 'dao',
                route: m.PAGE_VECRV_CREATE,
                label: () => (0, a.t)`Lock CRV`,
              },
              {
                app: 'dao',
                route: m.PAGE_PROPOSALS,
                label: () => (0, a.t)`Proposals`,
              },
              {
                app: 'dao',
                route: m.PAGE_GAUGES,
                label: () => (0, a.t)`Gauges`,
              },
              {
                app: 'dao',
                route: m.PAGE_ANALYTICS,
                label: () => (0, a.t)`Analytics`,
              },
              {
                app: 'dao',
                route: m.DISCUSSION,
                label: () => (0, a.t)`Discussion`,
                target: '_blank',
              },
            ],
          },
        },
        o = (e, t, l = '/') => `/${e}/${t}${l}`,
        F = ({ route: e, target: t, label: l, app: a }, { networkId: r, pathname: i }) => {
          let n = e.startsWith('http') ? e : o(a, r, e);
          return {
            href: n,
            target: t,
            label: l(),
            isActive: i?.startsWith(n.split('?')[0]),
          };
        };
    },
    23779: (e, t, l) => {
      l.d(t, {
        Jg: () => E,
        Xs: () => f,
        hJ: () => p,
      });
      var a = l(16430),
        r = l(58648),
        i = l.n(r),
        n = l(44096),
        m = l.n(n),
        d = l(94345),
        c = l.n(d),
        o = l(45376),
        F = l.n(o);

      function h(e) {
        return c()(e, m());
      }

      function p(e) {
        return e
          .trim()
          .split(/[, ]+/)
          .reduce(
            (e, t) => {
              let l = t.toLowerCase();
              return l.startsWith('0x') ? e.addresses.push(t) : '' !== l && e.tokens.push(t), e;
            },
            {
              addresses: [],
              tokens: [],
            }
          );
      }
      let s = (e) =>
        Array.isArray(e) ? e.map(s) : 'string' == typeof e ? e.replace(/₮/g, 'T') : e;

      function f(e, t, l, r) {
        let { addresses: n, tokens: m } = p(e),
          d =
            m.length > 0
              ? (function (e, t, l) {
                  let r = e.some((e) => e.includes('₮')),
                    n = new a.A(t, {
                      ignoreLocation: !0,
                      ignoreDiacritics: !0,
                      isCaseSensitive: !1,
                      includeMatches: !0,
                      minMatchCharLength: 2,
                      threshold: 0.01,
                      ...(!r && {
                        getFn: (e, t) => s(i()(e, t)),
                      }),
                      keys: l,
                    }),
                    m = n.search(e[0]);
                  return (
                    e.forEach((e, t) => {
                      if (0 === t) return;
                      let l = n.search(e);
                      m = m.filter((e) => l.some((t) => t.item === e.item));
                    }),
                    h(m)
                  );
                })(m, t, l)
              : [],
          c =
            n.length > 0
              ? (function (e, t, l) {
                  let r = {
                    tokens: [],
                    other: [],
                  };
                  if (l.tokens) {
                    let i = new a.A(t, {
                        ignoreLocation: !0,
                        includeMatches: !0,
                        minMatchCharLength: 4,
                        threshold: 0.01,
                        keys: l.tokens,
                      }),
                      n = [];
                    e.forEach((e) => {
                      n = [...n, ...i.search(e)];
                    }),
                      (r.tokens = h(n));
                  }
                  if (l.other) {
                    let i = new a.A(t, {
                        ignoreLocation: !0,
                        includeMatches: !0,
                        minMatchCharLength: 4,
                        threshold: 0.01,
                        keys: l.other,
                      }),
                      n = [];
                    e.forEach((e) => {
                      n = [...n, ...i.search(e)];
                    }),
                      (r.other = h(n));
                  }
                  return r;
                })(n, t, r)
              : {
                  tokens: [],
                  other: [],
                };
        return {
          tokensResult: [...d, ...c.tokens],
          addressesResult: c.other,
        };
      }

      function E(e, t, l) {
        let { addressesResult: a, tokensResult: r } = f(e, t, ['symbol'], {
            tokens: ['address'],
          }),
          i = F()([...r, ...a], (e) => e.item.address);
        return i.length > 0 ? i.map((e) => e.item) : t.filter((t) => l(t.address, e));
      }
    },
    23795: (e, t, l) => {
      l.d(t, {
        c: () => n,
        t: () => i,
      });
      var a = l(40038),
        r = l.n(a);
      let i = async (e, t) => {
          let l = await t.waitForTransaction(e);
          if (!l?.status) throw Error(`Transaction ${e} failed`);
          return l;
        },
        n = async (e, t) => {
          let { results: l, errors: a } = await r()
            .for(e)
            .process((e) => i(e, t));
          if (Array.isArray(a) && a.length > 0) throw a;
          return l;
        };
    },
    27280: (e, t, l) => {
      l.d(t, {
        A: () => d,
      });
      var a = l(54568),
        r = l(48341);
      let i = (0, r.i7)(['0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}']),
        n = r.Ay.div.withConfig({
          componentId: 'sc-4b3b4f81-0',
        })(
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
          ({ isDisabled: e }) => m(e),
          i,
          ({ isDisabled: e }) => m(e)
        );

      function m(e) {
        return e ? 'var(--input--disabled--color)' : 'var(--border-400)';
      }
      let d = ({ isDisabled: e = !1, size: t, ...l }) =>
        (0, a.jsxs)(n, {
          ...l,
          isDisabled: e,
          size: t,
          children: [
            (0, a.jsx)('div', {}),
            (0, a.jsx)('div', {}),
            (0, a.jsx)('div', {}),
            (0, a.jsx)('div', {}),
          ],
        });
    },
    27487: (e, t, l) => {
      l.d(t, {
        A: () => a,
      });
      let a = l(48341).Ay.header.withConfig({
        componentId: 'sc-3345afef-0',
      })([
        'align-items:center;display:flex;justify-content:space-between;padding:0 var(--spacing-1);min-height:var(--box_header--height);width:100%;color:var(--box--primary--color);background-color:var(--box_header--primary--background-color);font-size:var(--box_header--font-size);font-weight:var(--box_header--font-weight);',
      ]);
    },
    29514: (e, t, l) => {
      l.d(t, {
        Vz: () => F,
        QD: () => s,
        Gb: () => p,
        p6: () => c,
        VG: () => d,
        Qi: () => o,
        I$: () => h,
      });
      var a = l(61466),
        r = l(7884),
        i = l.n(r),
        n = l(81734),
        m = l(81981);
      a.FE.extend({
        isDecimal: i(),
        isAddress: (e) => ({
          pass: !!e && 'string' == typeof e && (0, n.P)(e),
          message: () => 'Must be a valid Ethereum address',
        }),
        isNotZeroAddress: (e) => ({
          pass: e !== m.Xd,
          message: () => 'Address cannot be the zero address',
        }),
        isPositiveNumber: (e) => ({
          pass: 'number' == typeof e && e > 0,
          message: () => 'Must be a positive number',
        }),
        isValidChainId: (e) => ({
          pass: 'number' == typeof e,
          message: () => 'Must be a valid chain ID',
        }),
        isValidChainName: (e) => ({
          pass: 'string' == typeof e,
          message: () => 'Must be a valid chain name',
        }),
      });
      let d = (e, t, l) => 0 === Object.keys(e(t, l).getErrors()).length;

      function c(e, t, l) {
        let a = Object.entries(e(t, l).getErrors());
        if (a.length > 0)
          throw Error(`Validation failed: ${a.map(([e, t]) => `${e}: ${t}`).join(', ')}`);
        return t;
      }
      let o = (e) =>
          (0, a.vt)((t, l) => {
            (0, a.j6)(l), e(t);
          }),
        F = o(() => {}),
        h = (e) => {
          (0, a.FE)(e)
            .message('Token address is required')
            .isNotEmpty()
            .message('Invalid token address')
            .isAddress()
            .message('Token address cannot be zero address')
            .isNotZeroAddress();
        },
        p = (e) => {
          (0, a.FE)(e)
            .message('Amount is required')
            .isNotEmpty()
            .message('Amount should be a decimal number with up to 18 decimal places')
            .isDecimal({
              decimal_digits: '0,18',
            });
        },
        s = (e) => {
          (0, a.FE)(e)
            .message('Address is required')
            .isNotEmpty()
            .message('Invalid address')
            .isAddress()
            .message('Address cannot be zero address')
            .isNotZeroAddress();
        };
    },
    34202: (e, t, l) => {
      l.d(t, {
        y: () => p,
      });
      var a = l(54568),
        r = l(17703),
        i = l(33161),
        n = l(94804),
        m = l(50010),
        d = l(12312),
        c = l(40576),
        o = l(33431),
        F = l(87401),
        h = l(84032);
      let p = ({
        children: e,
        open: t,
        onClose: l,
        onTransitionExited: p,
        title: s,
        titleAction: f,
        footer: E,
        compact: z,
        sx: u,
      }) =>
        (0, a.jsx)(c.A, {
          open: t,
          onClose: l,
          onTransitionExited: p,
          disableRestoreFocus: !0,
          sx: {
            ...u,
            ...(z && {
              '& .MuiPaper-root': {
                height: 'auto',
                minHeight: 'auto',
                ...u?.['& .MuiPaper-root'],
              },
            }),
          },
          children: (0, a.jsxs)(i.A, {
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
              (0, a.jsx)(d.A, {
                action: (0, a.jsx)(o.A, {
                  onClick: l,
                  size: 'extraSmall',
                  children: (0, a.jsx)(r.A, {}),
                }),
                avatar: f,
                title: (0, a.jsx)(F.A, {
                  variant: 'headingXsBold',
                  color: 'textSecondary',
                  children: s,
                }),
              }),
              (0, a.jsx)(m.A, {
                sx: {
                  flexGrow: 1,
                  overflowY: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                },
                children: e,
              }),
              E &&
                (0, a.jsx)(n.A, {
                  children: E,
                }),
            ],
          }),
        });
    },
    35183: (e, t, l) => {
      l.d(t, {
        K4: () => c,
        QF: () => n,
        YQ: () => m,
        jX: () => d,
        nE: () => a,
        o8: () => i,
        w2: () => r,
      });
      let a = 'https://cdn.jsdelivr.net',
        r = `${a}/gh/curvefi`,
        i = `${r}/curve-assets`,
        n = 1e14,
        m = (e) => `${i}/images/assets${'ethereum' == e ? '' : `-${e}`}/`,
        d = (e) => `${i}/chains/${e}.png`,
        c = (e) => `${i}/branding/curve_illustration-${'dark' === e ? 'dark' : 'light'}.svg`;
    },
    35420: (e, t, l) => {
      l.d(t, {
        t: () => m,
      });
      var a = l(90046),
        r = l(46555),
        i = l(85683),
        n = l(65835);
      let m = {
        [a.b.type]: (0, a.b)(),
        [r.m.type]: (0, r.m)(),
        [i.g.type]: (0, i.g)(),
        [n.u.type]: (0, n.u)({
          projectId: '982ea4bdf92e49746bd040a981283b36',
          showQrModal: !0,
          qrModalOptions: {
            themeVariables: {
              '--wcm-z-index': '1301',
            },
          },
        }),
      };
    },
    36074: (e, t, l) => {
      l.d(t, {
        Y: () => i,
        t: () => a,
        x: () => r,
      });
      let a = (e, ...t) =>
          Array.isArray(e) ? e.map((e, l) => (l < t.length ? `${e}${t[l]}` : e)).join('') : e,
        r = ({ children: e }) => e,
        i = () => navigator.languages?.[0]?.startsWith('zh') ?? !1;
    },
    39416: (e, t, l) => {
      l.d(t, {
        A: () => A,
      });
      var a = l(54568),
        r = l(7620),
        i = l(82619),
        n = l(38392),
        m = l(2511),
        d = l(30929),
        c = l(23606),
        o = l(76970),
        F = l(36965),
        h = l(32032),
        p = l(5372),
        s = l(73359),
        f = l(53467),
        E = l(9240),
        z = l(10806),
        u = l(12932),
        g = l(64170);
      let b = {
          ArrowUp: i.Do,
          ArrowUpRight: i.F1,
          ArrowDown: i.fS,
          ArrowsHorizontal: i.pv,
          ArrowLeft: i.nk,
          ArrowRight: i.Qp,
          ArrowsVertical: n.BK,
          Calendar: n.Vv,
          Cursor_1: m.Jr,
          CaretDown: d.aY,
          CaretUp: d.Zc,
          ChevronDown: c.yQ,
          ChevronLeft: c.JG,
          ChevronSort: c.SK,
          ChevronRight: c.c_,
          ChevronUp: c.rX,
          CheckmarkFilled: c._j,
          Close: c.bm,
          Copy: m.QR,
          CurrencyDollar: m.Sq,
          Hourglass: o.Dx,
          Favorite: F.NG,
          FavoriteFilled: F.nr,
          FavoriteHalf: F.Q$,
          Fire: F.vX,
          InformationSquare: h.aB,
          InformationSquareFilled: h.mR,
          Locked: p.HK,
          Maximize: s.hz,
          Menu: s.DE,
          Minimize: s.Xj,
          Misuse: s.Jr,
          Launch: p.MQ,
          Search: f.vj,
          Settings: f.wB,
          SettingsAdjust: f.b_,
          Renew: E.wM,
          RowDelete: E.O,
          SidePanelClose: f.kz,
          SidePanelOpen: f.i6,
          Stop: z.VG,
          StopFilledAlt: z.Y5,
          UpToTop: u.mI,
          Wallet: u.uW,
          WarningSquareFilled: u.eI,
          StoragePool: z.YJ,
          OverflowMenuVertical: g.CH,
        },
        A = ({ className: e, name: t, size: l, ...i }) => {
          let n = (0, r.useMemo)(() => {
            if (t && t in b) return b[t];
          }, [t]);
          return n
            ? (0, a.jsx)(n, {
                className: e,
                size: l,
                ...i,
              })
            : (0, a.jsx)(a.Fragment, {});
        };
    },
    39651: (e, t, l) => {
      l.d(t, {
        HP: () => r,
        fi: () => a,
        tr: () => i,
      });
      let a = {
          xxs: 20,
          xs: 30,
          sm: 26.625,
          md: 60.063,
          lg: 80,
          xl: 120.063,
        },
        r = (e) => (t) => `@media (min-width: ${a[e]}rem) { ${t} }`;

      function i(e) {
        if (e > 1920) return 'page-wide';
        if (e > 1280 && e <= 1920) return 'page-large';
        if (e > 960 && e <= 1280) return 'page-medium';
        if (e > 450 && e <= 960) return 'page-small';
        if (e > 321 && e <= 450) return 'page-small-x';
        else return 'page-small-xx';
      }
    },
    41265: (e, t, l) => {
      l.d(t, {
        jq: () => z,
        vX: () => E,
      });
      var a = l(5230),
        r = l.n(a),
        i = l(40246),
        n = l.n(i),
        m = l(22174),
        d = l.n(m);
      let c = 'true' === l(40459).env.STORYBOOK,
        o = c
          ? {
              style: {
                fontFamily: 'MonaSans',
              },
            }
          : r(),
        F = c
          ? {
              style: {
                fontFamily: 'Hubot Sans',
              },
            }
          : n(),
        h = c
          ? {
              style: {
                fontFamily: 'Minecraft',
              },
            }
          : d(),
        p = [o.style.fontFamily, '"Helvetica Neue"', 'Helvetica', 'sans-serif'].join(','),
        s = [F.style.fontFamily, '"Helvetica Neue"', 'Helvetica', 'sans-serif'].join(','),
        f = [h.style.fontFamily, '"SF Mono Regular 11"', '"Ubuntu Mono"', 'monospace'].join(','),
        E = {
          'Mona Sans': p,
          'Hubot Sans': s,
          Minecraft: f,
        },
        z = {
          '--font': s,
          '--button--font': f,
        };
    },
    42822: (e, t, l) => {
      l.d(t, {
        K: () => r,
      });
      var a = l(7620);

      function r(e) {
        let [t, l] = (0, a.useState)(e),
          r = (0, a.useCallback)(() => l(!0), [l]);
        return [
          t,
          r,
          (0, a.useCallback)(() => l(!1), [l]),
          (0, a.useCallback)(() => l((e) => !e), [l]),
        ];
      }
    },
    44042: (e, t, l) => {
      l.d(t, {
        f: () => u,
      });
      var a = l(54568),
        r = l(7620),
        i = l(24388),
        n = l(2926),
        m = l(76653),
        d = l(36074);
      let c = (0, l(69879).A)(
        (0, a.jsxs)('svg', {
          viewBox: '0 0 28 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, a.jsx)('path', {
              d: 'M21.4667 13.8667C22.4976 13.8667 23.3334 13.0309 23.3334 12C23.3334 10.9691 22.4976 10.1333 21.4667 10.1333C20.4358 10.1333 19.6 10.9691 19.6 12C19.6 13.0309 20.4358 13.8667 21.4667 13.8667Z',
              fill: '#5A554F',
            }),
            (0, a.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M0.93335 3.59999C0.93335 2.05359 2.18695 0.799988 3.73335 0.799988H24.2667C25.8131 0.799988 27.0667 2.05359 27.0667 3.59999V20.4C27.0667 21.9464 25.8131 23.2 24.2667 23.2H3.73335C2.18695 23.2 0.93335 21.9464 0.93335 20.4V3.59999ZM3.73335 2.66665C3.21788 2.66665 2.80002 3.08452 2.80002 3.59999V20.4C2.80002 20.9155 3.21788 21.3333 3.73335 21.3333H24.2667C24.7822 21.3333 25.2 20.9155 25.2 20.4V17.6H18.6667C17.1203 17.6 15.8667 16.3464 15.8667 14.8V9.19999C15.8667 7.6538 17.1198 6.39999 18.6664 6.39999H25.2V3.59999C25.2 3.08452 24.7822 2.66665 24.2667 2.66665H3.73335ZM18.6664 8.26665H25.2V15.7333H18.6667C18.1512 15.7333 17.7334 15.3155 17.7334 14.8V9.19999C17.7334 8.68431 18.1511 8.26665 18.6664 8.26665Z',
              fill: '#5A554F',
            }),
          ],
        }),
        'Wallet'
      );
      var o = l(49770),
        F = l(34202),
        h = l(84121),
        p = l(84032),
        s = l(59621),
        f = l(49478);
      let { IconSize: E } = p.B,
        z = ({ onConnect: e, wallet: t, isLoading: l, isDisabled: i }) => {
          let { label: n, icon: m } = t,
            d = (0, r.useCallback)(() => e(t), [e, t]);
          return (0, a.jsx)(
            o.D,
            {
              label: n,
              labelVariant: 'bodyMBold',
              icon: (0, a.jsx)(m, {
                sx: (0, h.N)({
                  width: E.xl,
                  height: E.xl,
                }),
              }),
              value: n,
              onSelected: d,
              isLoading: l,
              disabled: i && !l,
            },
            n
          );
        },
        u = () => {
          let { connect: e, showModal: t, closeModal: l } = (0, s.vT)(),
            [o, h] = (0, r.useState)(null),
            [p, E] = (0, r.useState)(null),
            u = (0, r.useCallback)(
              async ({ connector: t }) => {
                h(null);
                try {
                  E(t), await e(t);
                } catch (e) {
                  console.info(e), h(e);
                } finally {
                  E(null);
                }
              },
              [e]
            ),
            g = f.f.map((e) => ({
              wallet: e,
              onConnect: u,
              key: e.label,
              isLoading: p == e.connector,
              isDisabled: !!p,
            }));
          return (0, a.jsxs)(F.y, {
            className: 'interact-button',

            open: t,
            onClose: l,
            title: (0, d.t)`Connect Wallet`,
            titleAction: (0, a.jsx)(c, {}),
            compact: !0,
            children: [
              o
                ? (0, a.jsxs)(i.A, {
                    variant: 'filled',
                    severity: 'error',
                    children: [
                      (0, a.jsx)(n.A, {
                        children: (0, d.t)`Error connecting wallet`,
                      }),
                      o.shortMessage ?? o.message ?? o,
                    ],
                  })
                : null,
              (0, a.jsx)(m.A, {
                children: g.map(({ key: e, ...t }) =>
                  (0, a.jsx)(
                    z,
                    {
                      ...t,
                    },
                    e
                  )
                ),
              }),
            ],
          });
        };
    },
    45808: (e, t, l) => {
      l.d(t, {
        A: () => i,
      });
      var a = l(48341),
        r = l(39651);
      let i = a.Ay.div
        .attrs(function ({ className: e, fillHeight: t, fillWidth: l, ...a }) {
          let r = `${e || ''} ${l ? 'width--full' : ''} ${t ? 'height--full' : ''}`;
          return {
            ...a,
            className: r,
          };
        })
        .withConfig({
          componentId: 'sc-5f8c1a7c-0',
        })(
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

        @media (min-width: ${r.fi.md}rem) {
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
    46759: (e, t, l) => {
      l.d(t, {
        v: () => r,
      });
      var a = l(84826);

      function r(e) {
        if (e) {
          let t = e.max[1] ? (0, a.pS)(e.max[1]) : null,
            l = e.prio[1] ? (0, a.pS)(e.prio[1]) : null;
          if (t && l)
            return {
              maxFeePerGas: t,
              maxPriorityFeePerGas: l,
            };
        }
        return null;
      }
    },
    47990: (e, t, l) => {
      l.d(t, {
        A: () => a.A,
      });
      var a = l(16726);
    },
    49478: (e, t, l) => {
      l.d(t, {
        f: () => h,
      });
      var a = l(54568),
        r = l(69879);
      let i = (0, a.jsx)('svg', {
        viewBox: '0 0 153.42 152.94',
        children: (0, a.jsx)('path', {
          fill: 'currentColor',
          d: 'M145.15,75.59v-58a9.29,9.29,0,0,0-9.3-9.28H77.65a2.24,2.24,0,0,1-1.56-.64l-7-7A2.24,2.24,0,0,0,67.48,0H9.31A9.29,9.29,0,0,0,0,9.27H0v58a2.16,2.16,0,0,0,.65,1.55l7,7a2.16,2.16,0,0,1,.65,1.55v58a9.29,9.29,0,0,0,9.3,9.28H75.8a2.24,2.24,0,0,1,1.56.64l7,7a2.24,2.24,0,0,0,1.56.64h58.19a9.29,9.29,0,0,0,9.31-9.27h0v-58a2.16,2.16,0,0,0-.65-1.55l-7-7A2.17,2.17,0,0,1,145.15,75.59Zm-39.8,30.69H48.18A1.32,1.32,0,0,1,46.87,105V48a1.35,1.35,0,0,1,1.31-1.33h57.17A1.34,1.34,0,0,1,106.68,48v57a1.33,1.33,0,0,1-1.33,1.32Z',
          transform: 'translate(0 0)',
        }),
      });
      (0, r.A)(i, 'FrameWallet');
      let n = (0, a.jsxs)('svg', {
        width: '34',
        height: '34',
        viewBox: '0 0 34 34',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M9.87012 30.9722L14.2373 32.2696V30.573L14.5938 30.1738H17.0894V32.1698V33.567H14.4156L11.1179 31.9702L9.87012 30.9722Z',
            fill: '#CDBDB2',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M24.1304 30.9722L19.8523 32.2696V30.573L19.4958 30.1738H17.0002V32.1698V33.567H19.674L22.9717 31.9702L24.1304 30.9722Z',
            fill: '#CDBDB2',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14.5936 27.2796L14.2371 30.573L14.6827 30.1738H19.3173L19.852 30.573L19.4955 27.2796L18.7825 26.7806L15.2175 26.8804L14.5936 27.2796Z',
            fill: '#393939',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12.187 5.02405L14.3261 10.6129L15.3064 26.8804H18.7824L19.8519 10.6129L21.8127 5.02405H12.187Z',
            fill: '#F89C35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2.8288 17.2993L0.333252 25.3832L6.57213 24.984H10.5828V21.4909L10.4046 14.3053L9.51331 15.1037L2.8288 17.2993Z',
            fill: '#F89D35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.55249 18.1976L14.8609 18.3972L14.0587 22.5888L10.5828 21.5908L7.55249 18.1976Z',
            fill: '#D87C30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.55249 18.2974L10.5828 21.491V24.6846L7.55249 18.2974Z',
            fill: '#EA8D3A',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10.583 21.5908L14.1481 22.5888L15.3067 26.8802L14.5046 27.3792L10.583 24.7844V21.5908Z',
            fill: '#F89D35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10.5831 24.7843L9.87012 30.9719L14.5938 27.2793L10.5831 24.7843Z',
            fill: '#EB8F35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14.8605 18.3972L15.3061 26.8803L13.9692 22.5389L14.8605 18.3972Z',
            fill: '#EA8E3A',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M6.48315 24.8841L10.583 24.7843L9.86997 30.9719L6.48315 24.8841Z',
            fill: '#D87C30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2.29404 33.6666L9.86982 30.972L6.483 24.8842L0.333252 25.3832L2.29404 33.6666Z',
            fill: '#D87C30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14.3261 10.6127L10.4937 14.2055L7.55249 18.1975L14.8609 18.4969L14.3261 10.6127Z',
            fill: '#E8821E',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M9.87012 30.9723L14.5938 27.2797L14.2373 30.4733V32.2697L11.0288 31.5711L9.87012 30.9723Z',
            fill: '#DFCEC3',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M24.1304 30.9723L19.4958 27.2797L19.8523 30.4733V32.2697L23.0608 31.5711L24.1304 30.9723Z',
            fill: '#DFCEC3',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12.9002 20.1938L13.8806 22.4893L10.4047 21.4913L12.9002 20.1938Z',
            fill: '#393939',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2.20508 0.333313L14.3263 10.6128L12.2764 5.02394L2.20508 0.333313Z',
            fill: '#E88F35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2.20487 0.333313L0.600586 5.82235L1.49185 11.8104L0.867966 12.2096L1.75923 13.1078L1.04622 13.8064L2.02661 14.8044L1.40273 15.4032L2.82875 17.3992L9.51326 15.1038C9.51326 15.1038 14.4152 10.7126 14.3261 10.6128C14.237 10.513 2.20487 0.333313 2.20487 0.333313Z',
            fill: '#8E5A30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M31.171 17.2993L33.6665 25.3832L27.4276 24.984H23.4169V21.4909L23.5952 14.3053L24.4864 15.1037L31.171 17.2993Z',
            fill: '#F89D35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M26.4473 18.1976L19.1389 18.3972L19.941 22.5888L23.417 21.5908L26.4473 18.1976Z',
            fill: '#D87C30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M26.4473 18.2974L23.417 21.491V24.6846L26.4473 18.2974Z',
            fill: '#EA8D3A',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M23.4167 21.5908L19.8517 22.5888L18.693 26.8802L19.4952 27.3792L23.4167 24.7844V21.5908Z',
            fill: '#F89D35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M23.4166 24.7843L24.1296 30.9719L19.495 27.3791L23.4166 24.7843Z',
            fill: '#EB8F35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.1393 18.3972L18.6936 26.8803L20.0305 22.5389L19.1393 18.3972Z',
            fill: '#EA8E3A',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M27.5166 24.8841L23.4168 24.7843L24.1298 30.9719L27.5166 24.8841Z',
            fill: '#D87C30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M31.7057 33.6666L24.1299 30.972L27.5168 24.8842L33.6665 25.3832L31.7057 33.6666Z',
            fill: '#D87C30',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.6736 10.6127L23.5061 14.2055L26.4473 18.1975L19.1389 18.4969L19.6736 10.6127Z',
            fill: '#E8821E',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M21.0995 20.1938L20.1191 22.4893L23.5951 21.4913L21.0995 20.1938Z',
            fill: '#393939',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M31.7947 0.333313L19.6734 10.6128L21.7234 5.02394L31.7947 0.333313Z',
            fill: '#E88F35',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M31.7949 0.333313L33.3992 5.82235L32.5079 11.8104L33.1318 12.2096L32.2405 13.1078L32.9535 13.8064L31.9731 14.8044L32.597 15.4032L31.171 17.3992L24.4865 15.1038C24.4865 15.1038 19.5845 10.7126 19.6736 10.6128C19.7628 10.513 31.7949 0.333313 31.7949 0.333313Z',
            fill: '#8E5A30',
          }),
        ],
      });
      (0, r.A)(n, 'MetamaskWallet');
      let m = (0, a.jsxs)('svg', {
        viewBox: '0 0 40 40',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
          (0, a.jsx)('mask', {
            id: 'mask0_8225_3072',
            style: {
              maskType: 'luminance',
            },
            maskUnits: 'userSpaceOnUse',
            x: '0',
            y: '0',
            width: '40',
            height: '40',
            children: (0, a.jsx)('path', {
              d: 'M40 6.10352e-05H0V40.0001H40V6.10352e-05Z',
              fill: 'white',
            }),
          }),
          (0, a.jsxs)('g', {
            mask: 'url(#mask0_8225_3072)',
            children: [
              (0, a.jsx)('path', {
                d: 'M40 6.10352e-05H0V40.0001H40V6.10352e-05Z',
                fill: '#AB9FF2',
              }),
              (0, a.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M17.4074 25.4938C15.8368 27.9004 13.205 30.946 9.70308 30.946C8.04761 30.946 6.45581 30.2645 6.45581 27.3041C6.45581 19.7648 16.7494 8.09381 26.3002 8.09381C31.7335 8.09381 33.8984 11.8635 33.8984 16.1442C33.8984 21.639 30.3327 27.9217 26.7883 27.9217C25.6635 27.9217 25.1116 27.3041 25.1116 26.3244C25.1116 26.0689 25.1541 25.792 25.239 25.4938C24.0292 27.5597 21.6946 29.4765 19.5085 29.4765C17.9167 29.4765 17.1102 28.4755 17.1102 27.0698C17.1102 26.5587 17.2163 26.0263 17.4074 25.4938ZM25.6346 15.9956C25.6346 17.243 24.8986 17.8667 24.0754 17.8667C23.2396 17.8667 22.5161 17.243 22.5161 15.9956C22.5161 14.7483 23.2396 14.1246 24.0754 14.1246C24.8986 14.1246 25.6346 14.7483 25.6346 15.9956ZM30.3123 15.9957C30.3123 17.243 29.5764 17.8667 28.7531 17.8667C27.9173 17.8667 27.1939 17.243 27.1939 15.9957C27.1939 14.7483 27.9173 14.1246 28.7531 14.1246C29.5764 14.1246 30.3123 14.7483 30.3123 15.9957Z',
                fill: '#FFFDF8',
              }),
            ],
          }),
        ],
      });
      (0, r.A)(m, 'PhantomWallet');
      let d = (0, a.jsxs)('svg', {
        viewBox: '0 0 40 38',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
          (0, a.jsx)('path', {
            d: 'M38.81 21.3663C40.294 18.0374 32.9143 8.69253 25.8555 4.84226C21.4036 1.83424 16.7913 2.23531 15.8288 3.55884C13.7833 6.44654 22.6469 8.93317 28.5828 11.7808C27.2994 12.3423 26.0961 13.3449 25.4143 14.5882C23.2084 12.1818 18.3555 10.0963 12.6603 11.7808C8.81004 12.9038 5.6416 15.5909 4.39828 19.6016C4.11753 19.4813 3.75657 19.4011 3.43571 19.4011C2.11218 19.4011 1.0293 20.484 1.0293 21.8075C1.0293 23.131 2.11218 24.2139 3.43571 24.2139C3.67636 24.2139 4.43839 24.0535 4.43839 24.0535L16.7913 24.1337C11.8582 31.9947 7.92769 33.1177 7.92769 34.4813C7.92769 35.8449 11.6576 35.484 13.0614 34.9626C19.7994 32.5562 27.0186 24.9759 28.2619 22.8102C33.4758 23.492 37.8475 23.5321 38.81 21.3663Z',
            fill: 'url(#paint0_linear_8225_3012)',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M28.6231 11.7808C28.9039 11.6604 28.8638 11.2594 28.7835 10.9385C28.6231 10.2166 25.6151 7.24867 22.8076 5.92514C18.9573 4.12033 16.1498 4.20054 15.7488 5.04279C16.5108 6.64707 20.1605 8.13103 23.9306 9.7353C25.4948 10.377 27.1392 11.0588 28.6231 11.7808Z',
            fill: 'url(#paint1_linear_8225_3012)',
          }),
          (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M23.7299 27.9038C22.9679 27.623 22.0855 27.3423 21.0828 27.1016C22.1256 25.2166 22.3663 22.369 21.3636 20.6043C19.9599 18.1177 18.1951 16.7941 14.0641 16.7941C11.8181 16.7941 5.72188 17.5562 5.60156 22.6497C5.60156 23.1711 5.60156 23.6524 5.64167 24.1337H16.7914C15.3074 26.5 13.9037 28.2647 12.6604 29.5882C14.1443 29.9492 15.3475 30.2701 16.4705 30.5909C17.5133 30.8717 18.516 31.1123 19.5187 31.3931C21.0427 30.2701 22.4866 29.0669 23.7299 27.9038Z',
            fill: 'url(#paint2_linear_8225_3012)',
          }),
          (0, a.jsx)('path', {
            d: 'M4.23791 23.5321C4.67909 27.3823 6.88497 28.9064 11.3769 29.3476C15.8689 29.7888 18.4358 29.508 21.8449 29.7888C24.6925 30.0294 27.2593 31.5134 28.1818 30.992C29.024 30.5508 28.5427 28.9064 27.4197 27.8636C25.9358 26.5 23.8903 25.5775 20.3208 25.2166C21.0427 23.2513 20.8422 20.4839 19.7192 19C18.1149 16.8342 15.147 15.8716 11.3769 16.2727C7.44647 16.754 3.67641 18.7192 4.23791 23.5321Z',
            fill: 'url(#paint3_linear_8225_3012)',
          }),
          (0, a.jsxs)('defs', {
            children: [
              (0, a.jsxs)('linearGradient', {
                id: 'paint0_linear_8225_3012',
                x1: '12.2523',
                y1: '18.2604',
                x2: '38.5409',
                y2: '25.7154',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  (0, a.jsx)('stop', {
                    stopColor: '#8797FF',
                  }),
                  (0, a.jsx)('stop', {
                    offset: '1',
                    stopColor: '#AAA8FF',
                  }),
                ],
              }),
              (0, a.jsxs)('linearGradient', {
                id: 'paint1_linear_8225_3012',
                x1: '33.1384',
                y1: '18.849',
                x2: '14.17',
                y2: '-0.16586',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  (0, a.jsx)('stop', {
                    stopColor: '#3B22A0',
                  }),
                  (0, a.jsx)('stop', {
                    offset: '1',
                    stopColor: '#5156D8',
                    stopOpacity: '0',
                  }),
                ],
              }),
              (0, a.jsxs)('linearGradient', {
                id: 'paint2_linear_8225_3012',
                x1: '24.2533',
                y1: '28.591',
                x2: '6.03203',
                y2: '18.1151',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  (0, a.jsx)('stop', {
                    stopColor: '#3B1E8F',
                  }),
                  (0, a.jsx)('stop', {
                    offset: '1',
                    stopColor: '#6A6FFB',
                    stopOpacity: '0',
                  }),
                ],
              }),
              (0, a.jsxs)('linearGradient', {
                id: 'paint3_linear_8225_3012',
                x1: '10.9825',
                y1: '20.4224',
                x2: '23.2987',
                y2: '36.0715',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  (0, a.jsx)('stop', {
                    stopColor: '#8898FF',
                  }),
                  (0, a.jsx)('stop', {
                    offset: '0.9839',
                    stopColor: '#5F47F1',
                  }),
                ],
              }),
            ],
          }),
        ],
      });
      (0, r.A)(d, 'RabbyWallet');
      let c = (0, r.A)(
          (0, a.jsx)('svg', {
            viewBox: '0 0 100 100',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, a.jsxs)('g', {
              children: [
                (0, a.jsx)('g', {
                  transform: 'translate(0, 0) scale(0.5)',
                  children: d,
                }),
                (0, a.jsx)('g', {
                  transform: 'translate(50, 0) scale(0.5)',
                  children: m,
                }),
                (0, a.jsx)('g', {
                  transform: 'translate(0, 50) scale(0.5)',
                  children: i,
                }),
                (0, a.jsx)('g', {
                  transform: 'translate(50, 50) scale(1.5)',
                  children: n,
                }),
              ],
            }),
          }),
          'BrowserWallet'
        ),
        o = (0, r.A)(
          (0, a.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 146 146',
            children: [
              (0, a.jsx)('rect', {
                width: '146',
                height: '146',
                fill: '#0052FF',
                rx: '73',
                ry: '73',
              }),
              (0, a.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M21.9 73C21.9 102.053 45.1466 125.3 74.2 125.3C103.253 125.3 126.5 102.053 126.5 73C126.5 43.9466 103.253 20.7 74.2 20.7C45.1466 20.7 21.9 43.9466 21.9 73ZM60.5 54.75C58.5673 54.75 57 56.3173 57 58.25V87.75C57 89.6827 58.5673 91.25 60.5 91.25H87.9C89.8327 91.25 91.4 89.6827 91.4 87.75V58.25C91.4 56.3173 89.8327 54.75 87.9 54.75H60.5Z',
                fill: 'white',
              }),
            ],
          }),
          'CoinbaseWallet'
        ),
        F = (0, r.A)(
          (0, a.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 661.6 661.5',
            children: [
              (0, a.jsx)('rect', {
                width: '661.6',
                height: '661.5',
                fill: '#12FF80',
                rx: '330.8',
                ry: '330.75',
              }),
              (0, a.jsx)('path', {
                d: 'M532,330.7h-49.4c-14.8,0-26.7,12-26.7,26.7v71.7c0,14.8-12,26.7-26.7,26.7H232.5c-14.8,0-26.7,12-26.7,26.7V532  c0,14.8,12,26.7,26.7,26.7h208c14.8,0,26.5-12,26.5-26.7v-39.6c0-14.8,12-25.2,26.7-25.2H532c14.8,0,26.7-12,26.7-26.7v-83.3  C558.7,342.3,546.7,330.7,532,330.7L532,330.7z',
              }),
              (0, a.jsx)('path', {
                d: 'M205.8,232.5c0-14.8,12-26.7,26.7-26.7H429c14.8,0,26.7-12,26.7-26.7v-49.4c0-14.8-12-26.7-26.7-26.7H221.1  c-14.8,0-26.7,12-26.7,26.7v38.1c0,14.8-12,26.7-26.7,26.7h-38c-14.8,0-26.7,12-26.7,26.7v83.4c0,14.8,12,26.1,26.8,26.1h49.4  c14.8,0,26.7-12,26.7-26.7L205.8,232.5L205.8,232.5z',
              }),
              (0, a.jsx)('path', {
                d: 'M307.5,278.8H355c15.5,0,28,12.6,28,28v47.5c0,15.5-12.6,28-28,28h-47.5c-15.5,0-28-12.6-28-28v-47.5  C279.5,291.3,292.1,278.8,307.5,278.8z',
              }),
            ],
          }),
          'SafeWallet'
        ),
        h = [
          {
            label: 'Browser Wallet',
            icon: c,
            connector: 'injected',
          },
          {
            label: 'Wallet Connect',
            icon: (0, r.A)(
              (0, a.jsx)('svg', {
                viewBox: '0 0 34 22',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, a.jsx)('path', {
                  d: 'M7.15752 4.77666C12.5935 -0.545589 21.4069 -0.545589 26.8428 4.77666L27.4971 5.4172C27.7689 5.68331 27.7689 6.11477 27.4971 6.38088L25.2591 8.57204C25.1232 8.7051 24.9029 8.7051 24.767 8.57204L23.8667 7.69058C20.0744 3.97765 13.926 3.97765 10.1337 7.69058L9.16956 8.63455C9.03366 8.76761 8.81332 8.76761 8.67742 8.63455L6.43945 6.44339C6.16765 6.17728 6.16765 5.74582 6.43945 5.47971L7.15752 4.77666ZM31.4712 9.30822L33.463 11.2584C33.7348 11.5245 33.7348 11.9559 33.463 12.222L24.4818 21.0155C24.21 21.2816 23.7693 21.2816 23.4975 21.0155C23.4975 21.0155 23.4975 21.0155 23.4975 21.0155L17.1233 14.7745C17.0553 14.708 16.9451 14.708 16.8772 14.7745C16.8772 14.7745 16.8772 14.7745 16.8772 14.7745L10.503 21.0155C10.2312 21.2816 9.79057 21.2816 9.51877 21.0155C9.51877 21.0155 9.51877 21.0155 9.51877 21.0155L0.537344 12.2219C0.265547 11.9558 0.265547 11.5244 0.537344 11.2582L2.52915 9.30811C2.80095 9.04199 3.24162 9.04199 3.51342 9.30811L9.8878 15.5492C9.95575 15.6157 10.0659 15.6157 10.1339 15.5492C10.1339 15.5492 10.1339 15.5492 10.1339 15.5492L16.5079 9.30811C16.7797 9.04199 17.2204 9.04198 17.4922 9.30808C17.4922 9.30809 17.4922 9.30809 17.4922 9.30809L23.8666 15.5492C23.9345 15.6157 24.0447 15.6157 24.1126 15.5492L30.4869 9.30822C30.7587 9.0421 31.1994 9.0421 31.4712 9.30822Z',
                  fill: '#3B99FC',
                }),
              }),
              'WalletConnect'
            ),
            connector: 'walletConnect',
          },
          {
            label: 'Coinbase',
            icon: o,
            connector: 'coinbaseWallet',
          },
          {
            label: 'Safe',
            icon: F,
            connector: 'safe',
          },
        ];
    },
    49770: (e, t, l) => {
      l.d(t, {
        D: () => o,
      });
      var a = l(54568),
        r = l(7620),
        i = l(1566),
        n = l(62082),
        m = l(87401);
      let d = (0, l(69879).A)(
        (0, a.jsxs)('svg', {
          width: '18',
          height: '18',
          viewBox: '0 0 18 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, a.jsx)('path', {
              d: 'M12.5452 6.38367C12.7571 6.08256 12.6848 5.66669 12.3837 5.4548C12.0826 5.24291 11.6667 5.31523 11.4548 5.61634L7.69302 10.9621L6.14241 9.38276C5.88446 9.12003 5.46236 9.11616 5.19964 9.37411C4.93691 9.63206 4.93304 10.0542 5.19099 10.3169L7.3021 12.4671C7.44072 12.6082 7.63489 12.6806 7.83209 12.6645C8.02929 12.6483 8.20915 12.5455 8.32302 12.3837L12.5452 6.38367Z',
              fill: 'currentColor',
            }),
            (0, a.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8.99988 0.169403C4.12296 0.169403 0.169434 4.12293 0.169434 8.99984C0.169434 13.8767 4.12296 17.8303 8.99988 17.8303C13.8768 17.8303 17.8303 13.8767 17.8303 8.99984C17.8303 4.12293 13.8768 0.169403 8.99988 0.169403ZM1.4361 8.99984C1.4361 4.82249 4.82252 1.43607 8.99988 1.43607C13.1772 1.43607 16.5637 4.82249 16.5637 8.99984C16.5637 13.1772 13.1772 16.5636 8.99988 16.5636C4.82253 16.5636 1.4361 13.1772 1.4361 8.99984Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'Checked'
      );
      var c = l(76586);

      function o({
        label: e,
        value: t,
        onSelected: l,
        isSelected: o,
        icon: F,
        isLoading: h,
        labelVariant: p,
        ...s
      }) {
        let f = (0, r.useRef)(null);
        return (0, a.jsx)(c.O, {
          hoverEl: f.current,
          children: (0, a.jsxs)(n.A, {
            selected: o,
            tabIndex: 0,
            ...s,
            onClick: () => l?.(t),
            children: [
              F,
              (0, a.jsx)(m.A, {
                sx: {
                  flexGrow: 1,
                },
                variant: p ?? 'headingXsBold',
                children: e,
              }),
              o && (0, a.jsx)(d, {}),
              h &&
                (0, a.jsx)(i.A, {
                  size: 20,
                }),
            ],
          }),
        });
      }
    },
    53082: (e, t, l) => {
      function a(e) {
        'function' == typeof e && setTimeout(() => e(), 100);
      }

      function r() {
        let e = document?.body?.classList;
        return e?.contains('page-small-x') || e?.contains('page-small-xx');
      }

      function i(e, t = 4) {
        return 42 === e.length
          ? e.slice(0, e.startsWith('0x') ? t + 2 : t) + '…' + e.slice(e.length - t)
          : e;
      }
      l.d(t, {
        _p: () => r,
        q5: () => a,
        z5: () => i,
      });
    },
    56457: (e, t, l) => {
      l.d(t, {
        A: () => a.A,
      });
      var a = l(39416);
    },
    58916: (e, t, l) => {
      l.d(t, {
        h: () => m,
      });
      var a,
        r,
        i = l(7620);

      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let m = (e) =>
        i.createElement(
          'svg',
          n(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 12,
              height: 12,
              fill: 'currentColor',
            },
            e
          ),
          a ||
            (a = i.createElement('path', {
              d: 'M10.282 10.282H1.718V1.718h3.208V0H0v12h12V7.074h-1.718z',
            })),
          r ||
            (r = i.createElement('path', {
              d: 'M6.834 0v1.718H9.07l-4.75 4.75L5.533 7.68l4.75-4.75v2.236H12V0z',
            }))
        );
    },
    59621: (e, t, l) => {
      l.d(t, {
        AW: () => i.AW,
        Ej: () => i.Ej,
        N6: () => i.N6,
        NB: () => i.NB,
        Sg: () => i.Sg,
        VP: () => i.VP,
        me: () => r.m,
        vT: () => a.v,
        w5: () => i.w5,
      });
      var a = l(62389),
        r = l(68586),
        i = l(73716);
    },
    61873: (e, t, l) => {
      l.d(t, {
        a: () => h,
        q: () => F,
      });
      var a = l(55807),
        r = l(86561),
        i = l(27824),
        n = l(50873),
        m = l(76635);
      let d = new i.$({
          onError: (e, t) => {
            (0, m.vV)(t.queryKey, e, e.message);
          },
          onSuccess: (e, t) => {
            (0, m.SW)(t.queryKey, e ? [e] : []);
          },
        }),
        c = (e, t) => {
          let l = e.options.meta?.queryKeyFn;
          return 'function' == typeof l ? l(t) : (e.options.mutationKey ?? String(e.mutationId));
        },
        o = new n.q({
          onError: (e, t, l, a) => {
            let r = c(a, t);
            (0, m.vV)(r, e, e.message);
          },
          onSuccess: (e, t, l, a) => {
            let r = c(a, t);
            (0, m.SW)(r, {
              data: e,
            });
          },
          onMutate: (e, t) => {
            let l = c(t, e);
            (0, m.Cn)(l);
          },
        }),
        F = new r.E({
          defaultOptions: {
            queries: {
              retryDelay: (e) => Math.min(1e3 * 2 ** e, 3e4),
              retry: 3,
            },
          },
          queryCache: d,
          mutationCache: o,
        }),
        h = (0, a.s)({
          storage: window.localStorage,
        });
    },
    62389: (e, t, l) => {
      l.d(t, {
        v: () => z,
      });
      var a = l(64914),
        r = l(7620),
        i = l(2617),
        n = l(1977),
        m = l(70092),
        d = l(67995),
        c = l(68642);
      let o = new Map(),
        F = (e, t) => (o.has(e) ? o.get(e) : t),
        h = (e, t) => (null == t ? o.delete(e) : o.set(e, t)),
        p = (e, t) =>
          (0, c.E)({
            key: e,
            initialValue: t,
            get: F,
            set: h,
          });
      var s = l(35420),
        f = l(49478);
      let E = {
          provider: null,
          wallet: null,
        },
        z = () => {
          let [e, t] = p('showConnectModal', !1),
            l = (0, r.useCallback)(() => t(!1), [t]),
            { data: c } = (0, i.Q)(),
            o = c?.account.address,
            { wallet: F, provider: h } =
              (0, r.useMemo)(() => {
                let e =
                  o && c?.transport.request
                    ? {
                        provider: {
                          request: c.transport.request,
                        },
                        account: {
                          address: o,
                        },
                        chainId: c.chain.id,
                      }
                    : null;
                return (E.wallet = e), (E.provider = e ? new a.k(e.provider) : null), E;
              }, [o, c?.chain.id, c?.transport.request]) ?? null,
            { connectAsync: z } = (0, n.e)(),
            { disconnectAsync: u } = (0, m.u)(),
            g = (0, r.useCallback)(async () => {
              await u(), await u();
            }, [u]),
            b = (0, r.useCallback)(
              async (e) => {
                if (!e) {
                  t(!0);
                  return;
                }
                let l = f.f.find((t) => t.connector === e) ?? f.f[0];
                try {
                  await z({
                    connector: s.t[l.connector],
                  }),
                    t(!1);
                } catch (e) {
                  throw (console.error('Error connecting wallet:', e), e);
                }
              },
              [z, t]
            ),
            { data: A } = (0, d.v)({
              address: o,
            });
          return (
            (0, r.useEffect)(() => {
              E.wallet && (E.wallet.account.ensName = A ?? void 0);
            }, [A]),
            {
              wallet: F,
              connect: b,
              disconnect: g,
              provider: h,
              showModal: e,
              closeModal: l,
            }
          );
        };
      z.getState = () => ({
        wallet: E.wallet,
        provider: E.provider,
      });
    },
    64269: (e, t, l) => {
      l.d(t, {
        BN: () => o,
        Ho: () => s,
        Yq: () => g,
        ZV: () => f,
        b$: () => u,
        hd: () => h,
        l8: () => A,
        uN: () => b,
        vk: () => z,
      });
      var a = l(42464),
        r = l(10541),
        i = l.n(r),
        n = l(23780),
        m = l.n(n),
        d = l(81670),
        c = l(35183);
      a.A.config({
        EXPONENTIAL_AT: 20,
        ROUNDING_MODE: a.A.ROUND_HALF_UP,
      });
      let o = a.A,
        F = (0, d.o0)((0, d.uz)('lang'), (0, d.sm)(), () => 'en') || 'en-US',
        h = {
          PERCENT: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'percent',
          },
          USD: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            currency: 'USD',
            style: 'currency',
          },
        };

      function p(e, t) {
        let l = e.toString().split('.')[1]?.length ?? 0;
        return l > t ? t : l;
      }

      function s(e, t) {
        let l = {};
        if (e && Number(e) >= 0) {
          let a = p(e, t);
          (l.minimumFractionDigits = a), (l.maximumFractionDigits = a);
        }
        return l;
      }

      function f(e, t) {
        let {
          defaultValue: l,
          showAllFractionDigits: r,
          showDecimalIfSmallNumberOnly: n,
          notation: m,
          ...d
        } = t ?? {};
        try {
          if (null == e || '' === e) return l || '';
          if (i()(Number(e))) return '?';
          {
            let l = {
              ...d,
              useGrouping: !0,
            };
            if (('USD' === l.currency && (l.style = 'currency'), 0 === Number(e)))
              return (
                (l.trailingZeroDisplay = 'stripIfInteger'),
                new Intl.NumberFormat(F, l).format(Number(e))
              );
            {
              let i = Number(e),
                c = new a.A(e).toString();
              if (
                (!('minimumFractionDigits' in l) &&
                  !('maximumFractionDigits' in l) &&
                  !('minimumSignificantDigits' in l) &&
                  !('maximumSignificantDigits' in l) &&
                  (r
                    ? (l.minimumFractionDigits =
                        new a.A(Number(e)).toString().split('.')[1]?.length ?? 0)
                    : n && i > 10
                      ? (l.maximumFractionDigits = 0)
                      : t?.style === 'percent'
                        ? (l.maximumFractionDigits = p(c, 2))
                        : 'compact' === m
                          ? (delete l.minimumFractionDigits,
                            delete l.maximumFractionDigits,
                            i >= 1e6
                              ? ((l.maximumFractionDigits = p(c, 2)), (l.notation = m))
                              : i > 10
                                ? ((l.trailingZeroDisplay = 'stripIfInteger'),
                                  (l.maximumFractionDigits = 0),
                                  (l.minimumFractionDigits = 0))
                                : (l.minimumFractionDigits = p(c, 5)))
                          : (l.minimumFractionDigits = p(c, 5))),
                1 > Number(e))
              ) {
                if (
                  (function (e, t) {
                    let { useGrouping: l, style: a, notation: r, ...i } = t;
                    return 0 === Number(new Intl.NumberFormat('en-US', i).format(Number(e)));
                  })(e, l)
                ) {
                  if (1e-9 > Number(e) && 'percent' !== l.style) return '<0.000000001';
                  {
                    let { minimumFractionDigits: t, maximumFractionDigits: a, ...r } = l;
                    return E(e, {
                      ...r,
                      minimumSignificantDigits: 2,
                      maximumSignificantDigits: 2,
                    });
                  }
                }
                if (9e-4 >= Number(e) && !('showAllFractionDigits' in (t ?? {}))) {
                  let { minimumFractionDigits: t, maximumFractionDigits: a, ...r } = l;
                  return E(e, {
                    ...(r ?? {}),
                    maximumSignificantDigits: 4,
                  });
                }
              }
              return E(e, {
                ...l,
                ...d,
              });
            }
          }
        } catch (a) {
          if (
            (console.error(a, {
              params: {
                val: e,
                options: t,
              },
            }),
            null == e || '' === e)
          )
            return l || '';
          if (i()(Number(e))) return '?';
          return e.toString();
        }
      }

      function E(e, t) {
        return 'USD' === t.currency && Number(e) > c.QF
          ? (console.warn(`USD value is too large: ${e}`), '?')
          : new Intl.NumberFormat(F, t).format('percent' === t.style ? Number(e) / 100 : Number(e));
      }

      function z(e, t) {
        let l = '';
        if (m()(e)) return '';
        if (i()(e)) l = '$N/A';
        else if (e) {
          if (1e-7 > Number(e)) {
            let e = {
              currency: 'USD',
              showAllFractionDigits: !0,
            };
            t && delete e.currency, (l = `<${f(1e-7, e)}`);
          } else {
            let a = {
              ...(Number(e) > 10
                ? {
                    minimumFractionDigits: 2,
                  }
                : {}),
              currency: 'USD',
            };
            t && delete a.currency, (l = f(e, a));
          }
        }
        return l;
      }

      function u(e, t) {
        let l = t - Math.min(t, Math.max(0, Math.floor(Math.log10(e))));
        return E(e, {
          minimumFractionDigits: l,
          maximumFractionDigits: l,
        });
      }
      let g = (e, t = 'short') =>
          'short' === t
            ? new Intl.DateTimeFormat(void 0, {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }).format(e)
            : new Intl.DateTimeFormat(void 0, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: !0,
              }).format(e),
        b = (e) => g(new Date(1e3 * e)),
        A = (e) => e - 60 * new Date().getTimezoneOffset();
    },
    64387: (e, t, l) => {
      l.d(t, {
        A: () => r.A,
        N: () => a.A,
      });
      var a = l(27487),
        r = l(45808);
    },
    68586: (e, t, l) => {
      l.d(t, {
        l: () => d,
        m: () => m,
      });
      var a = l(73630);
      let r = new EventTarget(),
        i = 'walletNotification',
        n = 'walletNotificationDismiss',
        m = (e, t, l) => {
          let m = {
            id: (0, a.A)(),
            type: t,
            message: e,
            ...(void 0 !== l && {
              autoDismiss: l,
            }),
          };
          return (
            r.dispatchEvent(
              new CustomEvent(i, {
                detail: m,
              })
            ),
            {
              dismiss: () =>
                r.dispatchEvent(
                  new CustomEvent(n, {
                    detail: m,
                  })
                ),
            }
          );
        },
        d = (e, t) => {
          let l = (t) => e(t.detail);
          r.addEventListener(i, l);
          let a = (e) => t(e.detail);
          return (
            r.addEventListener(n, a),
            () => {
              r.removeEventListener(i, l), r.removeEventListener(n, a);
            }
          );
        };
    },
    68642: (e, t, l) => {
      l.d(t, {
        E: () => i,
      });
      var a = l(7620);
      let r = new EventTarget();

      function i({ key: e, initialValue: t, get: l, set: i }) {
        let [n, m] = (0, a.useState)(() => l(e, t)),
          d = (0, a.useCallback)(
            (a) => {
              let n = 'function' == typeof a ? a(l(e, t)) : a;
              i(e, n), m(n), r.dispatchEvent(new Event(e));
            },
            [l, t, e, i]
          );
        return (
          (0, a.useEffect)(() => {
            let a = () => m(l(e, t));
            return r.addEventListener(e, a), () => r.removeEventListener(e, a);
          }, [l, t, e]),
          [n ?? t, d]
        );
      }
    },
    70697: (e, t, l) => {
      l.d(t, {
        v$: () => o,
        yE: () => F,
        px: () => i,
        GQ: () => c,
        it: () => m,
      });
      var a = l(7620),
        r = l(84007);
      let i = (e) => ({
          isLoading: e.some((e) => e.isLoading),
          isPending: e.some((e) => e.isPending),
          isError: e.some((e) => e.isError),
          isFetching: e.some((e) => e.isFetching),
        }),
        n = (e, t) => ({
          data: Object.fromEntries((e || []).map(({ data: e }, l) => [t[l], e])),
          ...i(e),
        }),
        m = (e, t) =>
          (0, r.useQueries)({
            queries: e,
            combine: (0, a.useCallback)((e) => n(e, t), [t]),
          });
      var d = l(67933);
      let c = (e) => (t, l) => {
          let a = e(t, l);
          return (0, d.useQuery)(a);
        },
        o = {
          isError: !1,
          isLoading: !0,
          isPending: !0,
          isFetching: !0,
          data: void 0,
        },
        F = {
          isError: !1,
          isLoading: !1,
          isPending: !1,
          isFetching: !1,
        };
    },
    71741: (e, t, l) => {
      l.d(t, {
        A: () => a,
      });
      let a = l(48341).Ay.div.withConfig({
        componentId: 'sc-b1ee5e03-0',
      })(
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
    72415: (e, t, l) => {
      l.d(t, {
        Ac: () => m,
        B6: () => i,
        Kz: () => d,
        Uw: () => F,
        XQ: () => c,
        dw: () => o,
        ri: () => a,
        vd: () => r,
        w8: () => n,
      });
      let a = {
          10: '#fdfcfc',
          25: '#fafafa',
          50: '#f8f7f7',
          75: '#f6f4f4',
          100: '#eeeceb',
          150: '#e7e4e2',
          200: '#dedbd8',
          300: '#d4d0cc',
          400: '#bbb6af',
          500: '#968e84',
          600: '#746e66',
          700: '#5a554f',
          750: '#494540',
          800: '#3b3834',
          850: '#302e2a',
          900: '#252420',
          950: '#1f1e1b',
          975: '#191815',
        },
        r = {
          100: '#d4f7e3',
          200: '#a8efc6',
          300: '#32ce79',
          400: '#27b86c',
          500: '#1fa25e',
          600: '#167d4a',
          700: '#0f5c38',
          800: '#0b3d26',
        },
        i = {
          200: '#ffd88b',
          300: '#ffc300',
          400: '#f77f00',
          500: '#ed242f',
          600: '#d41e26',
          700: '#b0151f',
          800: '#8c111c',
        },
        n = {
          50: '#fefaef',
          100: '#d5dbf0',
          200: '#acbef1',
          300: '#839ff2',
          400: '#5a81f3',
          500: '#3162f4',
          600: '#2c55d5',
          700: '#2747b5',
          800: '#223995',
          900: '#1d2c75',
          950: '#171e55',
        },
        m = {
          50: '#efedfc',
          100: '#dbd9f7',
          200: '#c6c4f2',
          300: '#b0aeee',
          400: '#9997e2',
          500: '#6a68b7',
          600: '#5f5cae',
          700: '#554fa5',
          800: '#4a4395',
          900: '#3e3684',
          950: '#2f2862',
        },
        d = {
          50: '0',
          100: '0.125rem',
          200: '0.25rem',
          300: '0.5rem',
          350: '0.875rem',
          400: '1rem',
          500: '1.5rem',
          600: '2rem',
          700: '3rem',
          800: '4rem',
        },
        c = {
          50: '0.25rem',
          100: '0.5rem',
          125: '0.75rem',
          150: '0.875rem',
          200: '1rem',
          250: '1.25rem',
          300: '1.5rem',
          350: '1.75rem',
          400: '2rem',
          450: '2.25rem',
          500: '2.5rem',
          600: '3rem',
          650: '3.5rem',
          700: '4rem',
          800: '5.5rem',
        },
        o = {
          Snackbar: 6e3,
        },
        F = 'ease-out 256ms';
    },
    73716: (e, t, l) => {
      l.d(t, {
        AW: () => D,
        Ej: () => c,
        Gk: () => u,
        N6: () => E,
        NB: () => w,
        Sg: () => x,
        VP: () => z,
        w5: () => B,
      });
      var a = l(54568),
        r = l(7620),
        i = l(8230),
        n = l(92797),
        m = l(33055),
        d = l(62389);
      let c = {
          CONNECT_API: 'api',
          HYDRATE: 'hydrate',
          CONNECT_WALLET: 'connect-wallet',
          DISCONNECT_WALLET: 'disconnect-wallet',
          SWITCH_NETWORK: 'switch-network',
        },
        {
          FAILURE: o,
          LOADING: F,
          SUCCESS: h,
        } = {
          LOADING: 'loading',
          SUCCESS: 'success',
          FAILURE: 'failure',
        },
        { HYDRATE: p, SWITCH_NETWORK: s, CONNECT_API: f } = c,
        E = ({ status: e, stage: t }, l) => e === o && !!(!l || t?.startsWith(l)),
        z = ({ status: e, stage: t }, l) =>
          e === F &&
          !!(!l || (Array.isArray(l) ? l.some((e) => t?.startsWith(e)) : t?.startsWith(l))),
        u = ({ status: e, stage: t }) => e === h && t !== p,
        g = (0, r.createContext)({
          connectState: {
            status: F,
          },
        }),
        b = (e, t) => !e || e.account?.address?.toLowerCase() == t?.signerAddress?.toLowerCase(),
        A = null,
        v = null;
      async function C(e, t) {
        if (((v = t), A)) {
          if ((await A, v !== t)) return A;
          A = null;
        }
        return (
          (v = null),
          (A = e().finally(() => {
            A = null;
          }))
        );
      }
      let x = ({ hydrate: e, initLib: t, chainId: l, onChainUnavailable: c, children: E }) => {
          let [z, u] = (0, r.useState)({
              status: F,
            }),
            { switchChainAsync: A } = (0, i.R)(),
            v = (0, n.i)(),
            { isReconnecting: x } = (0, m.F)(),
            { wallet: B } = (0, d.v)();
          (0, r.useEffect)(() => {
            if (x) return;
            let a = new AbortController(),
              r = a.signal;
            return (
              (async () => {
                try {
                  let a = document.hasFocus();
                  if (
                    v &&
                    v !== l &&
                    a &&
                    (u({
                      status: F,
                      stage: s,
                    }),
                    !(await A({
                      chainId: l,
                    })))
                  ) {
                    if (r.aborted) return;
                    u({
                      status: o,
                      stage: s,
                    }),
                      c([l, v]);
                  }
                  await C(async () => {
                    let a = y.get(),
                      i = a;
                    if (!b(B, a) || a?.chainId != l) {
                      if (
                        r.aborted ||
                        (u({
                          status: F,
                          stage: f,
                        }),
                        (i = (await t(l, B?.provider)) ?? null),
                        r.aborted)
                      )
                        return;
                      y.set(i);
                    }
                    r.aborted ||
                      (u({
                        status: h,
                        stage: p,
                      }),
                      await e(i, a, B));
                  }, [l, B]),
                    u({
                      status: h,
                    });
                } catch (e) {
                  if (r.aborted) return console.info('Error during init ignored', e);
                  console.error('Error during init', e),
                    u(({ stage: t }) => ({
                      status: o,
                      stage: t,
                      error: e,
                    }));
                }
              })(),
              () => a.abort()
            );
          }, [x, l, e, t, c, A, B, v]);
          let D = y.get(),
            w = D?.chainId === l && b(B, D);
          return (0, a.jsx)(g.Provider, {
            value: {
              connectState: z,
              ...(w && {
                lib: D,
              }),
            },
            children: E,
          });
        },
        B = () => (0, r.useContext)(g),
        y = {
          current: null,
          get: () => y.current,
          require() {
            if (!y.current) throw Error('Lib not initialized');
            return y.current;
          },
          set: (e) => (y.current = e),
          reset() {
            y.set(null);
          },
        },
        D = () => y.get(),
        w = () => y.require();
    },
    74043: (e, t, l) => {
      l.d(t, {
        i: () => N,
        N: () => j,
      });
      var a = l(54568),
        r = l(7806),
        i = l.n(r),
        n = l(31809),
        m = l(93790),
        d = l(77310),
        c = l(84121),
        o = l(17147),
        F = l(72415);
      let h = {
          plain: {
            Light: (function () {
              let e = {
                  Primary: F.ri[950],
                  Secondary: F.ri[700],
                  Tertiary: F.ri[500],
                  Disabled: F.ri[400],
                  Highlight: F.w8[500],
                  Feedback: {
                    Success: F.vd[600],
                    Warning: F.B6[400],
                    Error: F.B6[500],
                    Inverted: F.ri[50],
                  },
                },
                t = {
                  1: {
                    Fill: F.ri[50],
                    Outline: F.ri[300],
                  },
                  2: {
                    Fill: F.ri[100],
                    Outline: F.ri[200],
                  },
                  3: {
                    Fill: F.ri[50],
                    Outline: F.ri[300],
                  },
                  Highlight: F.w8[500],
                  TypeAction: {
                    Selected: F.w8[100],
                    Hover: F.ri[150],
                  },
                  Feedback: {
                    Info: F.w8[500],
                    Success: F.vd[600],
                    Warning: F.B6[300],
                    Error: F.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: t,
                Tables: {
                  Header: {
                    Fill: F.ri[200],
                  },
                },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: F.ri[10],
                    Alert: F.ri[10],
                    Highlight: F.w8[500],
                    Warning: F.ri[975],
                    Accent: F.ri[10],
                  },
                  Border: {
                    Default: F.ri[400],
                    Active: F.vd[400],
                    Alert: F.B6[500],
                    Highlight: F.w8[500],
                    Warning: F.B6[300],
                    Accent: F.w8[500],
                  },
                  Fill: {
                    Default: t[1].Fill,
                    Active: F.vd[400],
                    Alert: F.B6[500],
                    Highlight: t[1].Fill,
                    Warning: F.B6[300],
                    Accent: F.w8[500],
                  },
                },
              };
            })(),
            Dark: (function () {
              let e = {
                  Primary: F.ri[50],
                  Secondary: F.ri[300],
                  Tertiary: F.ri[400],
                  Disabled: F.ri[500],
                  Highlight: F.w8[400],
                  Feedback: {
                    Success: F.vd[400],
                    Warning: F.B6[300],
                    Error: F.B6[500],
                    Inverted: F.ri[950],
                  },
                },
                t = {
                  1: {
                    Fill: F.ri[950],
                    Outline: F.ri[900],
                  },
                  2: {
                    Fill: F.ri[900],
                    Outline: F.ri[800],
                  },
                  3: {
                    Fill: F.ri[800],
                    Outline: F.ri[700],
                  },
                  Highlight: F.w8[500],
                  TypeAction: {
                    Selected: F.w8[900],
                    Hover: F.ri[800],
                  },
                  Feedback: {
                    Info: F.w8[50],
                    Success: F.vd[300],
                    Warning: F.B6[400],
                    Error: F.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: t,
                Tables: {
                  Header: {
                    Fill: F.ri[800],
                  },
                },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: F.ri[10],
                    Alert: F.ri[10],
                    Highlight: F.w8[400],
                    Warning: F.ri[975],
                    Accent: F.ri[10],
                  },
                  Border: {
                    Default: F.ri[600],
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: F.w8[400],
                    Warning: F.B6[300],
                    Accent: F.w8[400],
                  },
                  Fill: {
                    Default: t[1].Fill,
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: t[1].Fill,
                    Warning: F.B6[300],
                    Accent: F.w8[400],
                  },
                },
              };
            })(),
            Chad: (function () {
              let e = {
                  Primary: F.ri[950],
                  Secondary: F.ri[700],
                  Tertiary: F.ri[500],
                  Disabled: F.ri[400],
                  Highlight: F.Ac[600],
                  Feedback: {
                    Success: F.vd[600],
                    Warning: F.B6[400],
                    Error: F.B6[500],
                    Inverted: F.ri[50],
                  },
                },
                t = {
                  1: {
                    Fill: F.Ac[100],
                    Outline: F.Ac[300],
                  },
                  2: {
                    Fill: F.Ac[200],
                    Outline: F.Ac[400],
                  },
                  3: {
                    Fill: F.Ac[300],
                    Outline: F.Ac[500],
                  },
                  Highlight: F.Ac[800],
                  TypeAction: {
                    Selected: F.Ac[50],
                    Hover: F.Ac[200],
                  },
                  Feedback: {
                    Info: F.Ac[700],
                    Success: F.vd[600],
                    Warning: F.B6[300],
                    Error: F.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: t,
                Tables: {
                  Header: {
                    Fill: F.Ac[50],
                  },
                },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: F.ri[10],
                    Alert: F.ri[10],
                    Highlight: F.Ac[800],
                    Warning: F.ri[975],
                    Accent: F.ri[10],
                  },
                  Border: {
                    Default: F.ri[975],
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: F.Ac[800],
                    Warning: F.B6[300],
                    Accent: F.Ac[800],
                  },
                  Fill: {
                    Default: t[1].Fill,
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: t[1].Fill,
                    Warning: F.B6[300],
                    Accent: F.Ac[800],
                  },
                },
              };
            })(),
          },
          inverted: {
            Light: (function () {
              let e = {
                  1: {
                    Fill: F.ri[950],
                    Outline: F.ri[600],
                  },
                  2: {
                    Fill: F.ri[900],
                    Outline: F.ri[750],
                  },
                  3: {
                    Fill: F.ri[750],
                    Outline: F.ri[600],
                  },
                  Highlight: F.w8[500],
                  TypeAction: {
                    Selected: F.ri[850],
                    Hover: F.ri[900],
                  },
                  Feedback: {
                    Info: F.w8[800],
                    Success: F.vd[300],
                    Warning: F.B6[400],
                    Error: F.B6[500],
                  },
                },
                t = {
                  Primary: F.ri[50],
                  Secondary: F.ri[300],
                  Tertiary: F.ri[400],
                  Disabled: F.ri[500],
                  Highlight: F.w8[500],
                  Feedback: {
                    Success: F.vd[300],
                    Warning: F.B6[300],
                    Error: F.B6[500],
                    Inverted: F.ri[950],
                  },
                };
              return {
                Text: t,
                Layer: e,
                Tables: {
                  Header: {
                    Fill: F.ri[800],
                  },
                },
                Badges: {
                  Label: {
                    Default: t.Primary,
                    Active: F.ri[10],
                    Alert: F.ri[10],
                    Highlight: F.w8[400],
                    Warning: F.ri[975],
                    Accent: F.ri[10],
                  },
                  Border: {
                    Default: F.ri[600],
                    Active: F.vd[400],
                    Alert: F.B6[500],
                    Highlight: F.w8[400],
                    Warning: F.B6[300],
                    Accent: F.w8[400],
                  },
                  Fill: {
                    Default: e[1].Fill,
                    Active: F.vd[400],
                    Alert: F.B6[500],
                    Highlight: F.ri[10],
                    Warning: F.B6[300],
                    Accent: F.w8[400],
                  },
                },
              };
            })(),
            Dark: (function () {
              let e = {
                  Primary: F.ri[950],
                  Secondary: F.ri[700],
                  Tertiary: F.ri[600],
                  Disabled: F.ri[400],
                  Highlight: F.w8[500],
                  Feedback: {
                    Success: F.vd[600],
                    Warning: F.B6[400],
                    Error: F.B6[500],
                    Inverted: F.ri[50],
                  },
                },
                t = {
                  1: {
                    Fill: F.ri[75],
                    Outline: F.ri[300],
                  },
                  2: {
                    Fill: F.ri[100],
                    Outline: F.ri[200],
                  },
                  3: {
                    Fill: F.ri[50],
                    Outline: F.ri[300],
                  },
                  Highlight: F.w8[500],
                  TypeAction: {
                    Selected: F.w8[100],
                    Hover: F.w8[50],
                  },
                  Feedback: {
                    Info: F.w8[500],
                    Success: F.vd[600],
                    Warning: F.B6[300],
                    Error: F.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: t,
                Tables: {
                  Header: {
                    Fill: F.ri[200],
                  },
                },
                Badges: {
                  Label: {
                    Default: F.ri[975],
                    Active: F.ri[10],
                    Alert: F.ri[10],
                    Highlight: F.w8[500],
                    Warning: F.ri[975],
                    Accent: F.ri[10],
                  },
                  Border: {
                    Default: F.ri[975],
                    Active: F.vd[400],
                    Alert: F.B6[500],
                    Highlight: F.w8[500],
                    Warning: F.B6[300],
                    Accent: F.w8[500],
                  },
                  Fill: {
                    Default: t[1].Fill,
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: t[1].Fill,
                    Warning: F.B6[300],
                    Accent: F.w8[500],
                  },
                },
              };
            })(),
            Chad: (function () {
              let e = {
                  Primary: F.ri[50],
                  Secondary: F.ri[300],
                  Tertiary: F.ri[400],
                  Disabled: F.ri[500],
                  Highlight: F.Ac[400],
                  Feedback: {
                    Success: F.vd[500],
                    Warning: F.B6[300],
                    Error: F.B6[500],
                    Inverted: F.ri[950],
                  },
                },
                t = {
                  1: {
                    Fill: F.Ac[950],
                    Outline: F.Ac[800],
                  },
                  2: {
                    Fill: F.Ac[800],
                    Outline: F.Ac[600],
                  },
                  3: {
                    Fill: F.Ac[700],
                    Outline: F.Ac[500],
                  },
                  Highlight: F.Ac[400],
                  TypeAction: {
                    Selected: F.Ac[800],
                    Hover: F.Ac[900],
                  },
                  Feedback: {
                    Info: F.ri[850],
                    Success: F.vd[300],
                    Warning: F.B6[400],
                    Error: F.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: t,
                Tables: {
                  Header: {
                    Fill: F.Ac[800],
                  },
                },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: F.ri[10],
                    Alert: F.ri[10],
                    Highlight: F.Ac[200],
                    Warning: F.ri[975],
                    Accent: F.ri[10],
                  },
                  Border: {
                    Default: F.ri[600],
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: F.Ac[200],
                    Warning: F.B6[300],
                    Accent: F.Ac[400],
                  },
                  Fill: {
                    Default: t[1].Fill,
                    Active: F.vd[500],
                    Alert: F.B6[500],
                    Highlight: t[1].Fill,
                    Warning: F.B6[300],
                    Accent: F.Ac[400],
                  },
                },
              };
            })(),
          },
        },
        { plain: p, inverted: s } = h,
        f = `all ${F.Uw}`,
        E = '0 0 auto',
        z = 'auto 0 0',
        u = (e) => {
          let t = {
              Neutral: F.ri,
              Primary: F.w8,
              Secondary: F.vd,
              Tertiary: F.B6,
            },
            l = {
              1: e.Layer[1],
              2: e.Layer[2],
              3: e.Layer[3],
              App: {
                Background: '#f0edeb',
              },
              Highlight: {
                Fill: e.Layer.Highlight,
                Outline: e.Layer.Highlight,
              },
              TypeAction: e.Layer.TypeAction,
              Feedback: e.Layer.Feedback,
            },
            a = {
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
            r = {
              Focus_Outline: t.Primary[500],
              Transition: f,
              Primary: {
                Default: {
                  Label: F.ri[50],
                  Fill: F.w8[500],
                },
                Hover: {
                  Label: F.ri[50],
                  Fill: F.ri[900],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Fill: F.w8[500],
                },
              },
              Secondary: {
                Default: {
                  Label: F.ri[50],
                  Fill: F.ri[900],
                },
                Hover: {
                  Label: F.ri[50],
                  Fill: F.w8[500],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Fill: t.Neutral[900],
                },
              },
              Outlined: {
                Default: {
                  Label: F.ri[950],
                  Outline: F.ri[300],
                },
                Hover: {
                  Label: F.w8[500],
                  Outline: F.w8[500],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Outline: a.TextColors.Disabled,
                },
              },
              Ghost: {
                Default: {
                  Label: a.TextColors.Highlight,
                },
                Hover: {
                  Label: F.ri[975],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Fill: F.ri[900],
                },
              },
              Success: {
                Default: {
                  Label: F.ri[900],
                  Fill: F.vd[400],
                },
                Hover: {
                  Label: F.vd[300],
                  Fill: F.ri[900],
                },
                Disabled: {
                  Label: F.ri[950],
                  Fill: F.vd[200],
                },
              },
              Error: {
                Default: {
                  Label: F.ri[50],
                  Fill: F.B6[500],
                },
                Hover: {
                  Label: F.B6[400],
                  Fill: F.ri[900],
                },
                Disabled: {
                  Label: F.ri[50],
                  Fill: F.B6[500],
                },
              },
              Navigation: {
                Default: {
                  Label: a.TextColors.Secondary,
                },
                Hover: {
                  Label: a.TextColors.Primary,
                  Fill: l[1].Fill,
                },
                Current: {
                  Label: F.ri[50],
                  Fill: l.Highlight.Fill,
                },
              },
            },
            i = {
              Transition: f,
              UnderLined: {
                Inset: z,
                Default: {
                  Label: a.TextColors.Secondary,
                },
                Hover: {
                  Label: a.TextColors.Highlight,
                  Outline: l.Highlight.Outline,
                },
                Current: {
                  Label: a.TextColors.Primary,
                  Outline: t.Primary[500],
                },
              },
              Contained: {
                Default: {
                  Label: a.TextColors.Secondary,
                  Fill: t.Neutral[300],
                },
                Hover: {
                  Label: t.Neutral[50],
                  Fill: t.Neutral[900],
                },
                Current: {
                  Label: a.TextColors.Primary,
                  Fill: l[1].Fill,
                  Outline: t.Primary[500],
                },
              },
              OverLined: {
                Inset: E,
                Default: {
                  Label: a.TextColors.Secondary,
                },
                Hover: {
                  Label: a.TextColors.Primary,
                  Fill: t.Neutral[200],
                  Outline: t.Neutral[500],
                },
                Current: {
                  Label: a.TextColors.Primary,
                  Outline: t.Primary[500],
                },
              },
            },
            n = {
              BorderRadius: {
                Clickable: 0,
                NonClickable: '100px',
              },
              Default: {
                Label: a.TextColors.Secondary,
                Fill: l[2].Fill,
                Stroke: l[2].Outline,
              },
              Hover: {
                Label: t.Neutral[50],
                Fill: t.Neutral[900],
              },
              Current: {
                Label: a.TextColors.Highlight,
                Fill: l[2].Fill,
                Outline: l.Highlight.Outline,
              },
            },
            m = {
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
              Default: {
                Label: a.TextColors.Primary,
              },
              Hover: {
                Label: a.TextColors.Highlight,
                Fill: l[3].Fill,
              },
              Current: {
                Label: F.ri[50],
                Fill: t.Neutral[900],
              },
            },
            c = {
              Header: {
                Fill: e.Tables.Header.Fill,
              },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            o = {
              Base: {
                Default: {
                  Fill: F.ri[100],
                  Border: {
                    Default: F.ri[400],
                    Active: e.Text.Highlight,
                    Filled: F.ri[850],
                    Error: F.B6[500],
                  },
                },
                Nested: {
                  Nested: F.ri[10],
                  Fill: F.ri[100],
                  Border: {
                    Default: F.ri[400],
                    Active: e.Text.Highlight,
                    Filled: F.ri[850],
                    Error: F.B6[500],
                  },
                },
              },
              Large: {
                Default: {
                  Fill: F.ri[150],
                },
              },
              SliderThumbImage: '/mui/slider-thumb-white.svg',
            },
            h = {
              Default: {
                Fill: l[1].Fill,
                Outline: t.Neutral[400],
                Label: t.Primary[500],
              },
              Checked: {
                Fill: t.Primary[500],
                Outline: t.Neutral[400],
                Label: F.ri[50],
              },
            };
          return {
            theme: 'light',
            Color: t,
            Text: a,
            Button: r,
            Layer: l,
            Tabs: i,
            Chips: n,
            Badges: m,
            Toggles: d,
            Table: c,
            Inputs: o,
            Switch: h,
          };
        },
        g = (e) => {
          let t = F.ri,
            l = {
              Neutral: {
                25: t[975],
                50: t[950],
                75: t[900],
                100: t[850],
                150: t[800],
                200: t[750],
                300: t[700],
                400: t[600],
                500: t[500],
                600: t[400],
                700: t[300],
                750: t[200],
                800: t[150],
                850: t[100],
                900: t[75],
                950: t[50],
                975: t[25],
              },
              Primary: {
                50: F.w8[950],
                100: F.w8[900],
                200: F.w8[800],
                300: F.w8[700],
                400: F.w8[600],
                500: F.w8[500],
                600: F.w8[400],
                700: F.w8[300],
                800: F.w8[200],
                900: F.w8[100],
                950: F.w8[50],
              },
              Secondary: {
                100: F.vd[800],
                200: F.vd[700],
                300: F.vd[600],
                400: F.vd[500],
                500: F.vd[400],
                600: F.vd[300],
                700: F.vd[200],
                800: F.vd[100],
              },
              Tertiary: {
                200: F.B6[500],
                300: F.B6[400],
                400: F.B6[300],
                600: F.B6[200],
              },
            },
            a = {
              1: {
                Fill: e.Layer[1].Fill,
                Outline: e.Layer[1].Outline,
              },
              2: {
                Fill: e.Layer[2].Fill,
                Outline: e.Layer[2].Outline,
              },
              3: {
                Fill: e.Layer[3].Fill,
                Outline: e.Layer[3].Outline,
              },
              App: {
                Background: '#12110f',
              },
              Highlight: {
                Fill: e.Layer.Highlight,
                Outline: e.Layer.Highlight,
              },
              TypeAction: {
                Hover: e.Layer.TypeAction.Hover,
                Selected: e.Layer.TypeAction.Selected,
              },
              Feedback: e.Layer.Feedback,
            },
            r = {
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
            i = {
              Focus_Outline: l.Primary[500],
              Transition: f,
              Primary: {
                Default: {
                  Label: t[50],
                  Fill: F.w8[500],
                },
                Hover: {
                  Label: t[900],
                  Fill: t[50],
                },
                Disabled: {
                  Label: r.TextColors.Disabled,
                  Fill: F.w8[500],
                },
              },
              Secondary: {
                Default: {
                  Label: t[900],
                  Fill: t[50],
                },
                Hover: {
                  Label: t[900],
                  Fill: F.w8[500],
                },
                Disabled: {
                  Label: r.TextColors.Disabled,
                  Fill: l.Neutral[50],
                },
              },
              Outlined: {
                Default: {
                  Label: t[50],
                  Outline: t[700],
                },
                Hover: {
                  Label: F.w8[500],
                  Outline: F.w8[500],
                },
                Disabled: {
                  Label: r.TextColors.Disabled,
                  Outline: r.TextColors.Disabled,
                },
              },
              Ghost: {
                Default: {
                  Label: l.Primary[700],
                },
                Hover: {
                  Label: t[50],
                },
                Disabled: {
                  Label: r.TextColors.Disabled,
                  Fill: t[850],
                },
              },
              Success: {
                Default: {
                  Label: t[900],
                  Fill: F.vd[300],
                },
                Hover: {
                  Label: F.vd[500],
                  Fill: t[50],
                },
                Disabled: {
                  Label: t[950],
                  Fill: F.vd[200],
                },
              },
              Error: {
                Default: {
                  Label: t[50],
                  Fill: F.B6[500],
                },
                Hover: {
                  Label: F.B6[400],
                  Fill: t[900],
                },
                Disabled: {
                  Label: t[50],
                  Fill: F.B6[500],
                },
              },
              Navigation: {
                Default: {
                  Label: r.TextColors.Secondary,
                },
                Hover: {
                  Label: r.TextColors.Primary,
                  Fill: a[1].Fill,
                },
                Current: {
                  Label: t[50],
                  Fill: a.Highlight.Fill,
                },
              },
            },
            n = {
              Transition: f,
              UnderLined: {
                Inset: z,
                Default: {
                  Label: r.TextColors.Secondary,
                },
                Hover: {
                  Label: r.TextColors.Highlight,
                  Outline: a.Highlight.Outline,
                },
                Current: {
                  Label: r.TextColors.Primary,
                  Outline: l.Primary[500],
                },
              },
              Contained: {
                Default: {
                  Label: r.TextColors.Secondary,
                  Fill: l.Neutral[200],
                },
                Hover: {
                  Label: l.Neutral[50],
                  Fill: l.Neutral[900],
                },
                Current: {
                  Label: r.TextColors.Primary,
                  Fill: a[1].Fill,
                  Outline: l.Primary[500],
                },
              },
              OverLined: {
                Inset: E,
                Default: {
                  Label: r.TextColors.Secondary,
                },
                Hover: {
                  Label: r.TextColors.Primary,
                  Fill: l.Neutral[200],
                  Outline: l.Neutral[500],
                },
                Current: {
                  Label: r.TextColors.Primary,
                  Outline: l.Primary[500],
                },
              },
            },
            m = {
              BorderRadius: {
                Clickable: 0,
                NonClickable: '100px',
              },
              Default: {
                Label: r.TextColors.Secondary,
                Fill: a[2].Fill,
                Stroke: a[2].Outline,
              },
              Hover: {
                Label: l.Neutral[50],
                Fill: l.Neutral[900],
              },
              Current: {
                Label: l.Neutral[950],
                Fill: a[2].Fill,
                Outline: a.Highlight.Outline,
              },
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
            c = {
              Default: {
                Label: r.TextColors.Primary,
              },
              Hover: {
                Label: r.TextColors.Highlight,
                Fill: a[3].Fill,
              },
              Current: {
                Label: l.Neutral[50],
                Fill: l.Neutral[950],
              },
            },
            o = {
              Header: {
                Fill: e.Tables.Header.Fill,
              },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            h = {
              Base: {
                Default: {
                  Fill: t[850],
                  Border: {
                    Default: t[600],
                    Active: e.Text.Highlight,
                    Filled: t[75],
                    Error: F.B6[500],
                  },
                },
                Nested: {
                  Nested: t[850],
                  Fill: t[850],
                  Border: {
                    Default: t[600],
                    Active: e.Text.Highlight,
                    Filled: t[75],
                    Error: F.B6[500],
                  },
                },
              },
              Large: {
                Default: {
                  Fill: t[975],
                },
              },
              SliderThumbImage: '/mui/slider-thumb-black.svg',
            },
            p = {
              Default: {
                Fill: a[1].Fill,
                Outline: l.Neutral[400],
                Label: l.Primary[500],
              },
              Checked: {
                Fill: l.Primary[500],
                Outline: l.Neutral[400],
                Label: t[50],
              },
            };
          return {
            theme: 'dark',
            Color: l,
            Text: r,
            Button: i,
            Layer: a,
            Tabs: n,
            Chips: m,
            Badges: d,
            Toggles: c,
            Table: o,
            Inputs: h,
            Switch: p,
          };
        },
        b = (e) => {
          let t = {
              Neutral: F.ri,
              Primary: F.Ac,
              Secondary: F.vd,
              Tertiary: F.B6,
            },
            l = {
              1: e.Layer[1],
              2: e.Layer[2],
              3: e.Layer[3],
              App: {
                Background: '#bdbbec',
              },
              Highlight: {
                Fill: e.Layer.Highlight,
                Outline: e.Layer.Highlight,
              },
              TypeAction: e.Layer.TypeAction,
              Feedback: e.Layer.Feedback,
            },
            a = {
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
            r = {
              Focus_Outline: t.Primary[600],
              Transition: f,
              Primary: {
                Default: {
                  Label: F.ri[50],
                  Fill: F.Ac[500],
                },
                Hover: {
                  Label: F.ri[50],
                  Fill: F.ri[900],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Fill: F.Ac[500],
                },
              },
              Secondary: {
                Default: {
                  Label: F.ri[50],
                  Fill: F.Ac[900],
                },
                Hover: {
                  Label: F.ri[50],
                  Fill: F.Ac[500],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Fill: t.Primary[950],
                },
              },
              Outlined: {
                Default: {
                  Label: F.ri[950],
                  Outline: F.ri[300],
                },
                Hover: {
                  Label: F.Ac[500],
                  Outline: F.Ac[500],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Outline: a.TextColors.Disabled,
                },
              },
              Ghost: {
                Default: {
                  Label: a.TextColors.Highlight,
                },
                Hover: {
                  Label: F.ri[800],
                },
                Disabled: {
                  Label: a.TextColors.Disabled,
                  Fill: F.Ac[950],
                },
              },
              Success: {
                Default: {
                  Label: F.ri[900],
                  Fill: F.vd[400],
                },
                Hover: {
                  Label: F.vd[500],
                  Fill: F.ri[900],
                },
                Disabled: {
                  Label: F.ri[950],
                  Fill: F.vd[200],
                },
              },
              Error: {
                Default: {
                  Label: F.ri[50],
                  Fill: F.B6[500],
                },
                Hover: {
                  Label: F.B6[400],
                  Fill: F.ri[900],
                },
                Disabled: {
                  Label: F.ri[50],
                  Fill: F.B6[500],
                },
              },
              Navigation: {
                Default: {
                  Label: a.TextColors.Secondary,
                },
                Hover: {
                  Label: a.TextColors.Primary,
                  Fill: l[1].Fill,
                },
                Current: {
                  Label: F.ri[50],
                  Fill: l.Highlight.Fill,
                },
              },
            },
            i = {
              Transition: f,
              UnderLined: {
                Inset: z,
                Default: {
                  Label: a.TextColors.Secondary,
                },
                Hover: {
                  Label: a.TextColors.Highlight,
                  Outline: l.Highlight.Outline,
                },
                Current: {
                  Label: a.TextColors.Primary,
                  Outline: t.Primary[500],
                },
              },
              Contained: {
                Default: {
                  Label: a.TextColors.Secondary,
                  Fill: t.Primary[200],
                },
                Hover: {
                  Label: t.Neutral[50],
                  Fill: t.Primary[950],
                },
                Current: {
                  Label: a.TextColors.Primary,
                  Fill: l[1].Fill,
                  Outline: t.Primary[500],
                },
              },
              OverLined: {
                Inset: E,
                Default: {
                  Label: a.TextColors.Secondary,
                },
                Hover: {
                  Label: a.TextColors.Primary,
                  Fill: t.Neutral[200],
                  Outline: t.Neutral[500],
                },
                Current: {
                  Label: a.TextColors.Primary,
                  Outline: t.Primary[500],
                },
              },
            },
            n = {
              BorderRadius: {
                Clickable: 0,
                NonClickable: 0,
              },
              Default: {
                Label: a.TextColors.Secondary,
                Fill: l[1].Fill,
                Stroke: l[2].Outline,
              },
              Hover: {
                Label: t.Neutral[50],
                Fill: t.Primary[950],
              },
              Current: {
                Label: a.TextColors.Primary,
                Fill: l[2].Fill,
                Outline: l.Highlight.Outline,
              },
            },
            m = {
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
              Default: {
                Label: a.TextColors.Primary,
              },
              Hover: {
                Label: a.TextColors.Highlight,
                Fill: l[3].Fill,
              },
              Current: {
                Label: F.ri[50],
                Fill: t.Primary[800],
              },
            },
            c = {
              Header: {
                Fill: e.Tables.Header.Fill,
              },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            o = {
              Base: {
                Default: {
                  Fill: F.Ac[50],
                  Border: {
                    Default: F.Ac[200],
                    Active: e.Text.Highlight,
                    Filled: F.Ac[400],
                    Error: F.B6[500],
                  },
                },
                Nested: {
                  Nested: F.Ac[50],
                  Fill: F.Ac[50],
                  Border: {
                    Default: F.Ac[200],
                    Active: e.Text.Highlight,
                    Filled: F.Ac[400],
                    Error: F.B6[500],
                  },
                },
              },
              Large: {
                Default: {
                  Fill: F.Ac[50],
                },
              },
              SliderThumbImage: '/mui/slider-thumb-white.svg',
            },
            h = {
              Default: {
                Fill: l[1].Fill,
                Outline: t.Neutral[400],
                Label: t.Primary[500],
              },
              Checked: {
                Fill: t.Primary[500],
                Outline: t.Neutral[400],
                Label: F.ri[50],
              },
            };
          return {
            theme: 'chad',
            Color: t,
            Text: a,
            Button: r,
            Layer: l,
            Tabs: i,
            Chips: n,
            Badges: m,
            Toggles: d,
            Table: c,
            Inputs: o,
            Switch: h,
          };
        },
        A = {
          light: ({ inverted: e }) => u(h[e ? 'inverted' : 'plain'].Light),
          dark: ({ inverted: e }) => g(h[e ? 'inverted' : 'plain'].Dark),
          chad: ({ inverted: e }) => b(h[e ? 'inverted' : 'plain'].Chad),
        },
        v = (e, { Layer: t, Color: l, Text: { TextColors: a } }) => ({
          mode: e,
          primary: {
            main: l.Primary[500],
          },
          secondary: {
            main: l.Secondary[500],
          },
          error: {
            main: t.Feedback.Error,
            contrastText: a.Feedback.Error,
          },
          info: {
            main: t.Feedback.Info,
            contrastText: a.Primary,
          },
          warning: {
            main: t.Feedback.Warning,
            contrastText: a.Feedback.Warning,
          },
          success: {
            main: t.Feedback.Success,
            contrastText: a.Feedback.Success,
          },
          text: {
            primary: a.Primary,
            secondary: a.Secondary,
            tertiary: a.Tertiary,
            disabled: a.Disabled,
            highlight: a.Highlight,
          },
          action: {
            hover: t.TypeAction.Hover,
            selected: t.TypeAction.Selected,
          },
          background: {
            default: t.App.Background,
            paper: t[2].Fill,
          },
          divider: t[1].Outline,
        });
      var C = l(84032),
        x = l(41265);
      let B = [
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
        { LineHeight: y, FontWeight: D, FontSize: w } = C.B,
        L = (e, t, l) => ({
          [c.b.breakpoints.up(l)]: {
            fontSize: w[e]?.[l],
            lineHeight: y[t]?.[l],
          },
        }),
        S = ({
          fontFamily: e,
          fontSize: t,
          fontWeight: l,
          lineHeight: a = t,
          letterSpacing: r = '0%',
          textCase: i,
        }) => ({
          fontFamily: e,
          fontWeight: D[l ?? 'Medium'],
          letterSpacing: r,
          ...('0%' !== r && {
            marginRight: `calc(${r} * -1)`,
          }),
          textTransform: i,
          transition: `color ${F.Uw}, border ${F.Uw}`,
          ...(!(t in w) && {
            fontSize: t,
          }),
          ...(!(a in y) && {
            lineHeight: a,
          }),
          ...L(t, a, 'mobile'),
          ...L(t, a, 'tablet'),
          ...L(t, a, 'desktop'),
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
            lineHeight: F.XQ[450],
            letterSpacing: '-1.28px',
            textCase: 'uppercase',
          },
          headingMLight: {
            fontFamily: 'Heading',
            fontWeight: 'Normal',
            fontSize: 'xl',
            lineHeight: F.XQ[450],
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
          headingXsMedium: {
            fontFamily: 'Heading',
            fontSize: 'sm',
            textCase: 'capitalize',
          },
          bodyMRegular: {
            fontFamily: 'Body',
            fontSize: 'md',
          },
          bodyMBold: {
            fontFamily: 'Body',
            fontWeight: 'Bold',
            fontSize: 'md',
          },
          bodySRegular: {
            fontFamily: 'Body',
            fontSize: 'sm',
          },
          bodySBold: {
            fontFamily: 'Body',
            fontWeight: 'Bold',
            fontSize: 'sm',
          },
          bodyXsRegular: {
            fontFamily: 'Body',
            fontSize: 'xs',
          },
          bodyXsBold: {
            fontFamily: 'Body',
            fontWeight: 'Bold',
            fontSize: 'xs',
          },
          buttonXs: {
            fontFamily: 'Button',
            fontWeight: 'Bold',
            fontSize: 'sm',
          },
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
          tableHeaderM: {
            fontFamily: 'Body',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          tableHeaderS: {
            fontFamily: 'Body',
            fontSize: 'sm',
            lineHeight: 'xs',
          },
          tableCellL: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: F.XQ[250],
            lineHeight: F.XQ[250],
          },
          tableCellMRegular: {
            fontFamily: 'Mono',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          tableCellMBold: {
            fontFamily: 'Mono',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          tableCellSRegular: {
            fontFamily: 'Mono',
            fontSize: 'sm',
            lineHeight: 'xs',
          },
          tableCellSBold: {
            fontFamily: 'Mono',
            fontWeight: 'Bold',
            fontSize: 'sm',
            lineHeight: 'xs',
          },
          highlightXsNotional: {
            fontFamily: 'Mono',
            fontSize: 'xs',
          },
          highlightXs: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xs',
          },
          highlightS: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'sm',
          },
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
            lineHeight: F.XQ[450],
            letterSpacing: '-1.28px',
          },
          highlightXxl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xxl',
            letterSpacing: '-2.56px',
          },
        },
        k = ({ Text: e }) => ({
          fontFamily: x.vX[e.FontFamily.Body],
          fontWeightBold: D.Bold,
          fontWeightMedium: D.Medium,
          fontWeightRegular: D.Normal,
          fontWeightLight: D.Light,
          ...B.reduce(
            (e, t) => ({
              ...e,
              [t]: void 0,
            }),
            {}
          ),
          ...Object.fromEntries(
            Object.entries(M).map(([t, l]) => {
              let { fontFamily: a, ...r } = S(l);
              return [
                t,
                {
                  ...r,
                  fontFamily: x.vX[e.FontFamily[a]],
                },
              ];
            })
          ),
        }),
        H = (e, t) => (t.inverted ? ('dark' == e ? 'light' : 'dark') : 'chad' == e ? 'light' : e),
        T = (e, t = {}) => {
          let l = A[e](t),
            a = k(l);
          return (0, d.A)({
            ...c.b,
            key: e,
            design: {
              ...l,
              options: t,
            },
            palette: v(H(e, t), l),
            typography: a,
            components: (0, o.L1)(l, a),
            shape: {
              borderRadius: 0,
            },
            cssVariables: !0,
            shadows: Array(25).fill('none'),
          });
        },
        O = {
          light: (e) => T('light', e),
          dark: (e) => T('dark', e),
          chad: (e) => T('chad', e),
        },
        P = i()((e, t) =>
          O[e]({
            inverted: t,
          })
        ),
        j = ({ theme: e, children: t }) =>
          (0, a.jsx)(m.A, {
            theme: P(e),
            children: t,
          }),
        N = ({ children: e, inverted: t = !0 }) => {
          let { theme: l } = (0, n.A)().design,
            r = P(l, t);
          return (0, a.jsx)(m.A, {
            theme: r,
            children: e,
          });
        };
    },
    75778: (e, t, l) => {
      l.d(t, {
        ku: () => d,
        ps: () => m,
      });
      var a = l(48341),
        r = l(77878);
      let i = (0, a.AH)([
          'color:var(--button--color);background-color:var(--button--background-color);border:1px solid var(--nav_button--border-color);box-shadow:3px 3px 0 var(--button--shadow-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover:not(:disabled):not(.loading){background-color:var(--button_filled--hover--background-color);}&:active:not(:disabled){box-shadow:none;transform:translate3d(3px,3px,3px);}&.loading,&:disabled{color:var(--button--disabled--color);border-color:var(--button--disabled--border-color);background-color:var(--button--disabled--background-color);box-shadow:none;cursor:initial;}',
        ]),
        n = (0, a.AH)([
          'border:1px solid var(--nav_button--border-color);box-shadow:3px 3px 0 var(--box--primary--shadow-color);background:var(--layout--home--background-color);color:var(--page--text-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&.active:not(:disabled){color:var(--button--color);background-color:var(--button--background-color);border:1px solid var(--button--border-color);box-shadow:3px 3px 0 var(--button--shadow-color);}&:hover:not(:disabled){color:var(--button--color);border:1px solid var(--button--border-color);background-color:var(--button_filled--hover--background-color);}&.loading,&:disabled{color:var(--button--disabled--color);}',
        ]),
        m = (0, a.AH)([
          'color:var(--button_outlined--color);background-color:transparent;border:1px solid var(--button_outlined--border-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:disabled{opacity:0.5;cursor:initial;transition:none;}&:hover:not(:disabled){color:var(--button_outlined--hover--color);border-color:var(--button_outlined--hover--color);background-color:var(--button_outlined--hover--background-color);}',
        ]),
        d = (0, a.AH)(
          [
            '',
            ';padding:var(--spacing-1) var(--spacing-2);font-size:inherit;font-weight:var(--button--font-weight);font-family:var(--button--font);text-transform:var(--button--text-transform);line-height:1.2;&.loading{position:relative;}&:not(:disabled){cursor:pointer;}',
            ' ',
            ' ',
            ' ',
            '',
          ],
          r.N,
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
          ({ variant: e, fillWidth: t }) => {
            if ('filled' === e)
              return `
        ${i}
      `;
            if ('icon-filled' === e)
              return `
        align-items: center;
        display: ${t ? 'flex' : 'inline-flex'};
        justify-content: center;

        ${i}
      `;
            if ('outlined' === e) return `${m}`;
            if ('icon-outlined' === e)
              return `
        ${m}

        align-items: center;
        display: ${t ? 'flex' : 'inline-flex'};
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
        ${n}
        box-shadow: none;
        &.active:not(:disabled) {
          box-shadow: none;
          border: 1px solid var(--button_outlined--border-color);
        }
      `;
          }
        );
    },
    76586: (e, t, l) => {
      l.d(t, {
        O: () => o,
      });
      var a = l(54568),
        r = l(7620),
        i = l(42822),
        n = l(74043),
        m = l(72415),
        d = l(91516);
      let c = (e) => e.design.Layer.TypeAction.Hover,
        o = ({ children: e, hoverEl: t, hoverColor: l = c }) => {
          let [o, F, h] = (0, i.K)(!1),
            p =
              (function (e, t) {
                let [l, a] = (0, r.useState)(!1);
                return (
                  (0, r.useEffect)(() => {
                    if (!e) return;
                    a(e.classList.contains(t));
                    let l = new MutationObserver((l) => {
                      l.forEach((l) => {
                        'class' === l.attributeName && a(e.classList.contains(t));
                      });
                    });
                    return (
                      l.observe(e, {
                        attributes: !0,
                      }),
                      () => {
                        l.disconnect();
                      }
                    );
                  }, [e, t]),
                  l
                );
              })(t, 'Mui-focusVisible') || o,
            s = e.props.sx ?? {};
          return (
            (0, d.Vg)(t, 'mouseenter', F),
            (0, a.jsx)(n.i, {
              inverted: p,
              children: (0, r.cloneElement)(e, {
                ...e.props,
                className: (0, d.xW)(p && d.Q6, e.props?.className),
                onMouseEnter: F,
                onMouseLeave: h,
                sx: {
                  ...s,
                  color: (e) => e.palette.text.secondary,
                  transition: [`background-color ${m.Uw}`, s.transition].filter(Boolean).join(', '),
                  '&:hover': {
                    ...s['&:hover'],
                    backgroundColor: l,
                  },
                  ...(p && {
                    backgroundColor: l,
                  }),
                },
              }),
            })
          );
        };
    },
    76635: (e, t, l) => {
      l.d(t, {
        Cn: () => d,
        Rm: () => n,
        SW: () => o,
        b0: () => r,
        dB: () => m,
        vV: () => c,
      });
      var a = l(84826),
        r = (function (e) {
          return (
            (e.ERROR = 'error'),
            (e.SUCCESS = 'success'),
            (e.WARNING = 'warning'),
            (e.INFO = 'info'),
            (e.SETTLED = 'settled'),
            (e.QUERY = 'query'),
            (e.MUTATION = 'mutation'),
            (e.LOADING = 'loading'),
            (e.IDLE = 'idle'),
            (e.STALE = 'stale'),
            (e.FETCHING = 'fetching'),
            (e.PAUSED = 'paused'),
            (e.CANCELLED = 'cancelled'),
            e
          );
        })({});
      let i = (e) => {
        let t = 'font-weight: bold; padding: 2px 4px; border-radius: 3px;';
        switch (e) {
          case 'error':
            return `background-color: #ff6b6b; color: #ffffff; ${t}`;
          case 'success':
            return `background-color: #51cf66; color: #ffffff; ${t}`;
          case 'warning':
          case 'mutation':
            return `background-color: #feca57; color: #ffffff; ${t}`;
          case 'info':
          case 'query':
            return `background-color: #e3f2fd; color: #1976d2; ${t}`;
          case 'settled':
            return `background-color: #f3e5f5; color: #7b1fa2; ${t}`;
          case 'loading':
          case 'fetching':
            return `background-color: #e0f7fa; color: #0097a7; ${t}`;
          case 'idle':
          case 'stale':
          case 'paused':
          case 'cancelled':
            return `background-color: #f5f5f5; color: #616161; ${t}`;
          default:
            return 'color: inherit;';
        }
      };

      function n(e, t, ...l) {
        if (!a.TS) return;
        let m = new Date().toISOString(),
          d = 'string' == typeof e ? e.split('.') : Array.isArray(e) ? e : [e],
          c = (e) => {
            switch (e) {
              case 'error':
                return console.error;
              case 'warning':
              case 'mutation':
                return console.warn;
              default:
                return console.info;
            }
          };
        if (a.OC)
          return c(t)(
            JSON.stringify({
              status: t,
              keyArray: d,
              args: l,
            }).slice(0, 300)
          );
        let o = t && Object.values(r).includes(t),
          [F, h] = ((e) => {
            let t = '',
              l = [];
            return (
              e.forEach((e, a) => {
                a > 0 && ((t += '%c → '), l.push('color: #666; font-size: 0.75em;')),
                  (t += `%c${'string' == typeof e ? e : JSON.stringify(e)}`),
                  l.push('color: #4CAF50; font-weight: bold;');
              }),
              [t, l]
            );
          })(d),
          p = (o ? l : [t, ...l]).filter((e) => null != e),
          s = p.length
            ? `%c (%c${p
                .map((e) =>
                  (function (e, t = 200, l = 3) {
                    let a = JSON.stringify(e);
                    return (
                      a.length > t && (a = `${a.slice(0, t - l)}...${a.slice(-l)}`),
                      Array.isArray(e) && (a = `${e.length} item${e.length > 1 ? 's' : ''}: ${a}`),
                      a.replaceAll('%', '%%')
                    );
                  })(e)
                )
                .join(', ')}%c)`
            : '',
          f = `%cDApp%c @ %c${m}%c -> ${o ? `%c${t}%c ` : ''}${F}${s}`,
          E = [
            'background: #1e63e9; color: white; padding: 2px 4px; border-radius: 3px;',
            'color: #666; font-weight: bold;',
            'color: #2196F3;',
            'color: #666;',
            ...(o ? [i(t), 'color: #4CAF50; font-weight: bold;'] : []),
            ...h,
            ...(p.length ? ['color: #fff;', 'color: #666;', 'color: #fff;'] : []),
          ];
        c(t)(f, ...E);
      }
      let m = (e, ...t) => n(e, 'query', ...t),
        d = (e, ...t) => n(e, 'mutation', ...t),
        c = (e, ...t) => n(e, 'error', ...t),
        o = (e, ...t) => n(e, 'success', ...t);
    },
    77241: (e, t, l) => {
      l.d(t, {
        BN: () => d.BN,
        o8: () => o.o8,
        hd: () => d.hd,
        AA: () => c.A,
        fi: () => r.fi,
        ic: () => n,
        mf: () => m,
        l8: () => d.l8,
        q5: () => a.q5,
        ND: () => i.N,
        Yq: () => d.Yq,
        uN: () => d.uN,
        ZV: () => d.ZV,
        vk: () => d.vk,
        b$: () => d.b$,
        K4: () => o.K4,
        lL: () => c.l,
        jX: () => o.jX,
        Ho: () => d.Ho,
        _p: () => a._p,
        tr: () => r.tr,
        z5: () => a.z5,
      });
      var a = l(53082),
        r = l(39651),
        i = l(77878);
      let n = (e) =>
          'number' == typeof e
            ? new Date(1e3 * e)
            : 'string' == typeof e
              ? new Date(e.includes('Z') ? e : `${e}Z`)
              : e,
        m = (e) => {
          let t = Math.abs(new Date().getTime() - n(e).getTime()),
            l = Math.floor(t / 6e4),
            a = Math.floor(t / 36e5),
            r = Math.floor(t / 864e5);
          return r > 0 ? `${r}d` : a > 0 ? `${a}h` : `${l}m`;
        };
      l(46759);
      var d = l(64269),
        c = l(82994),
        o = l(35183);
    },
    77878: (e, t, l) => {
      l.d(t, {
        N: () => a,
      });
      let a = (0, l(48341).AH)([
        '&:focus:not(.focus-visible){outline:none;}&.focus-visible{outline:2px solid var(--focus);z-index:1;}',
      ]);
    },
    79214: (e, t, l) => {
      l.d(t, {
        m: () => r,
        s: () => a,
      });
      var a = (function (e) {
        return (
          (e[(e.Ethereum = 1)] = 'Ethereum'),
          (e[(e.Optimism = 10)] = 'Optimism'),
          (e[(e.Gnosis = 100)] = 'Gnosis'),
          (e[(e.Moonbeam = 1284)] = 'Moonbeam'),
          (e[(e.Polygon = 137)] = 'Polygon'),
          (e[(e.Kava = 2222)] = 'Kava'),
          (e[(e.Fantom = 250)] = 'Fantom'),
          (e[(e.Arbitrum = 42161)] = 'Arbitrum'),
          (e[(e.Avalanche = 43114)] = 'Avalanche'),
          (e[(e.Celo = 42220)] = 'Celo'),
          (e[(e.Aurora = 0x4e454152)] = 'Aurora'),
          (e[(e.ZkSync = 324)] = 'ZkSync'),
          (e[(e.Base = 8453)] = 'Base'),
          (e[(e.Bsc = 56)] = 'Bsc'),
          (e[(e.Fraxtal = 252)] = 'Fraxtal'),
          (e[(e.XLayer = 196)] = 'XLayer'),
          (e[(e.Mantle = 5e3)] = 'Mantle'),
          (e[(e.Sonic = 146)] = 'Sonic'),
          e
        );
      })({});
      let r = {
        Hyperliquid: 999,
      };
    },
    81473: (e, t, l) => {
      l.d(t, {
        Mw: () => p,
        gH: () => h,
        Yk: () => s,
        Xq: () => g,
      });
      var a = l(84121),
        r = l(72415);
      let { Spacing: i } = l(84032).B,
        n = 'variant-contained',
        m = 'variant-underlined',
        d = 'variant-overlined',
        c = 'size-small',
        o = 'size-medium',
        F = 'size-large',
        h = {
          contained: n,
          underlined: m,
          overlined: d,
        },
        p = {
          small: c,
          medium: o,
          large: F,
        },
        s = ({ Tabs: { Transition: e } }) => ({
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
                transition: `opacity ${r.Uw}`,
              },
            },
          },
        }),
        f = ({ Label: e, Fill: t, Outline: l }) => ({
          color: e,
          backgroundColor: t,
          '::after': {
            backgroundColor: l ?? 'transparant',
          },
        }),
        E = ({ Current: e, Default: t, Hover: l, Inset: a }) => ({
          ...f(t),
          '&:hover': f(l),
          '&:hover::after': {
            opacity: 1,
          },
          '&.Mui-selected': f(e),
          '&.Mui-selected::after': {
            opacity: 1,
          },
          '::after': a && {
            inset: a,
          },
        }),
        z = (e, t, l, r) =>
          (0, a.N)({
            paddingBlockStart: i[e],
            paddingBlockEnd: i[t],
            paddingInlineStart: i[l],
            paddingInlineEnd: i[r],
          }),
        u = {
          [`&.${o} .MuiTab-root`]: z('md', 'xs', 'md', 'md'),
          [`&.${F} .MuiTab-root`]: z('md', 'xs', 'md', 'md'),
        },
        g = ({ Tabs: { UnderLined: e, OverLined: t, Contained: l }, Layer: a }) => ({
          styleOverrides: {
            root: {
              minHeight: 0,
              [`&.${n}`]: {
                '& .MuiTab-root': E(l),
                [`&.${c} .MuiTab-root`]: z('xs', 'xs', 'md', 'md'),
                [`&.${o} .MuiTab-root`]: z('md', 'xs', 'lg', 'lg'),
              },
              [`&.${d}`]: {
                '& .MuiTab-root': E(t),
                [`&.${c} .MuiTab-root`]: z('xs', 'xs', 'md', 'md'),
                [`&.${F} .MuiTab-root:hover`]: {
                  backgroundColor: 'unset',
                },
                ...u,
              },
              [`&.${m}`]: {
                '& .MuiTab-root': E(e),
                [`&.${c} .MuiTab-root`]: z('xs', 'xs', 'sm', 'sm'),
                ...u,
              },
              [`&.${F} .MuiTab-root::after`]: {
                height: '0px',
              },
            },
            indicator: {
              backgroundColor: a.Highlight.Outline,
              [`.${d} &`]: {
                top: 0,
              },
              [`.${n} &`]: {
                top: 0,
              },
              [`.${F} &`]: {
                height: '4px',
              },
            },
          },
        });
    },
    82994: (e, t, l) => {
      l.d(t, {
        A: () => m,
        l: () => d,
      });
      var a = l(79214),
        r = l(33550),
        i = l(35183);
      let n = {
          blocknativeSupport: !0,
          name: '',
          gasL2: !1,
          gasPricesUnit: 'GWEI',
          gasPricesUrl: '',
          gasPricesDefault: 0,
          integrations: {
            listUrl: `${i.w2}/curve-external-integrations/integrations-list.json`,
            tagsUrl: `${i.w2}/curve-external-integrations/integrations-tags.json`,
          },
          rewards: {
            baseUrl: i.nE,
            campaignsUrl: `${i.w2}/curve-external-reward@latest/campaign-list.json`,
            tagsUrl: `${i.w2}/curve-external-reward@latest/reward-tags.json`,
          },
          orgUIPath: '',
        },
        m = {
          [a.s.Ethereum]: {
            id: 'ethereum',
            chainId: a.s.Ethereum,
            gasPricesUrl: 'https://d3dl9x5bpp6us7.cloudfront.net/api/getGas',
            gasPricesDefault: 1,
            nativeCurrencySymbol: 'ETH',
            rpcUrl: 'https://eth.drpc.org',
            explorerUrl: 'https://etherscan.io/',
            orgUIPath: 'https://classic.curve.finance',
          },
          [a.s.Optimism]: {
            id: 'optimism',
            chainId: a.s.Optimism,
            gasL2: !0,
            rpcUrl: 'https://optimism.drpc.org',
            nativeCurrencySymbol: 'ETH',
            explorerUrl: 'https://optimistic.etherscan.io/',
          },
          [a.s.Gnosis]: {
            id: 'xdai',
            name: 'Gnosis',
            chainId: a.s.Gnosis,
            rpcUrl: 'https://rpc.gnosischain.com',
            nativeCurrencySymbol: 'XDAI',
            explorerUrl: 'https://gnosisscan.io/',
            orgUIPath: 'https://xdai.curve.finance',
          },
          [a.s.Moonbeam]: {
            id: 'moonbeam',
            chainId: a.s.Moonbeam,
            rpcUrl: 'https://moonbeam.public.blastapi.io',
            nativeCurrencySymbol: 'GLMR',
            explorerUrl: 'https://moonscan.io/',
            orgUIPath: 'https://moonbeam.curve.finance',
          },
          [a.s.Polygon]: {
            id: 'polygon',
            chainId: a.s.Polygon,
            gasPricesUrl: 'https://gasstation.polygon.technology/v2',
            gasPricesDefault: 0,
            rpcUrl: 'https://polygon-rpc.com',
            nativeCurrencySymbol: 'MATIC',
            explorerUrl: 'https://polygonscan.com/',
            orgUIPath: 'https://polygon.curve.finance',
          },
          [a.s.Kava]: {
            id: 'kava',
            chainId: a.s.Kava,
            gasPricesUnit: 'UKAVA',
            rpcUrl: 'https://evm.kava.io',
            nativeCurrencySymbol: 'KAVA',
            explorerUrl: 'https://explorer.kava.io/',
            orgUIPath: 'https://kava.curve.finance',
          },
          [a.s.Fantom]: {
            id: 'fantom',
            chainId: a.s.Fantom,
            rpcUrl: 'https://rpc.ftm.tools/',
            nativeCurrencySymbol: 'FTM',
            explorerUrl: 'https://ftmscout.com/',
            orgUIPath: 'https://ftm.curve.finance',
          },
          [a.s.Arbitrum]: {
            id: 'arbitrum',
            chainId: a.s.Arbitrum,
            rpcUrl: 'https://arb1.arbitrum.io/rpc',
            nativeCurrencySymbol: 'ETH',
            explorerUrl: 'https://arbiscan.io/',
            orgUIPath: 'https://arbitrum.curve.finance',
          },
          [a.s.Avalanche]: {
            id: 'avalanche',
            chainId: a.s.Avalanche,
            gasPricesUnit: 'nAVAX',
            gasPricesUrl: 'https://api.avax.network/ext/bc/C/rpc',
            gasPricesDefault: 0,
            rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
            nativeCurrencySymbol: 'AVAX',
            explorerUrl: 'https://snowscan.xyz/',
            orgUIPath: 'https://avax.curve.finance',
          },
          [a.s.Celo]: {
            id: 'celo',
            chainId: a.s.Celo,
            rpcUrl: 'https://forno.celo.org',
            nativeCurrencySymbol: 'CELO',
            explorerUrl: 'https://celoscan.io/',
            orgUIPath: 'https://celo.curve.finance',
          },
          [a.s.Aurora]: {
            id: 'aurora',
            chainId: a.s.Aurora,
            rpcUrl: 'https://mainnet.aurora.dev',
            nativeCurrencySymbol: 'aETH',
            explorerUrl: 'https://aurorascan.dev/',
            orgUIPath: 'https://aurora.curve.finance',
          },
          [a.s.ZkSync]: {
            id: 'zksync',
            name: 'zkSync Era',
            chainId: a.s.ZkSync,
            rpcUrl: 'https://mainnet.era.zksync.io',
            nativeCurrencySymbol: 'ETH',
            explorerUrl: 'https://era.zksync.network/',
          },
          [a.s.Base]: {
            id: 'base',
            chainId: a.s.Base,
            gasL2: !0,
            rpcUrl: 'https://base.drpc.org',
            nativeCurrencySymbol: 'ETH',
            explorerUrl: 'https://basescan.org/',
          },
          [a.s.Bsc]: {
            id: 'bsc',
            chainId: a.s.Bsc,
            rpcUrl: 'https://bsc-dataseed1.binance.org/',
            nativeCurrencySymbol: 'BNB',
            explorerUrl: 'https://bscscan.com/',
          },
          [a.s.Fraxtal]: {
            id: 'fraxtal',
            chainId: a.s.Fraxtal,
            rpcUrl: 'https://rpc.frax.com',
            nativeCurrencySymbol: 'frxETH',
            explorerUrl: 'https://fraxscan.com/',
          },
          [a.s.XLayer]: {
            id: 'x-layer',
            chainId: a.s.XLayer,
            rpcUrl: 'https://rpc.xlayer.tech',
            nativeCurrencySymbol: 'OKB',
            explorerUrl: 'https://www.okx.com/web3/explorer/xlayer/',
          },
          [a.s.Mantle]: {
            id: 'mantle',
            chainId: a.s.Mantle,
            rpcUrl: 'https://rpc.mantle.xyz',
            nativeCurrencySymbol: 'MNT',
            explorerUrl: 'https://mantlescan.xyz/',
          },
          [a.s.Sonic]: {
            id: 'sonic',
            chainId: a.s.Sonic,
            rpcUrl: 'https://rpc.soniclabs.com',
            nativeCurrencySymbol: 'S',
            explorerUrl: 'https://sonicscan.org/',
          },
        };

      function d(e, t) {
        let {
          name: l,
          explorerUrl: i,
          id: m,
          nativeCurrencySymbol: d,
          rpcUrl: c,
          isTestnet: o = !1,
          ...F
        } = {
          ...n,
          ...t,
        };
        return {
          ...F,
          name: (function (e) {
            let t = e.replace(/[-_]./g, (e) => ' ' + e.charAt(1).toUpperCase());
            return t.charAt(0).toUpperCase() + t.slice(1);
          })(l || m),
          chainId: e,
          symbol: d,
          id: m,
          networkId: m,
          hex: r.nD(e),
          logoSrc: `https://cdn.jsdelivr.net/gh/curvefi/curve-assets/chains/${m}.png`,
          logoSrcDark: `https://cdn.jsdelivr.net/gh/curvefi/curve-assets/chains/${m}-dark.png`,
          rpcUrl: c,
          isTestnet: o,
          scanAddressPath: (e) => `${i}address/${e}`,
          scanTxPath: (e) => `${i}tx/${e}`,
          ...(e === a.m.Hyperliquid
            ? {
                scanTokenPath: (e) => `${i}address/${e}`,
              }
            : {
                scanTokenPath: (e) => `${i}token/${e}`,
              }),
        };
      }
    },
    83897: (e, t, l) => {
      l.d(t, {
        P: () => r,
      });
      var a = l(54568);
      let r = (0, l(69879).A)(
        (0, a.jsxs)('svg', {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, a.jsx)('path', {
              d: 'M7.28203 4.78525C7.26636 4.3779 7.59235 4.03913 8 4.03913C8.40764 4.03913 8.73363 4.3779 8.71797 4.78525L8.55383 9.05287C8.54238 9.35046 8.29781 9.58581 8 9.58581C7.70218 9.58581 7.45761 9.35046 7.44616 9.05287L7.28203 4.78525Z',
              fill: 'currentColor',
            }),
            (0, a.jsx)('path', {
              d: 'M8.79988 11.1745C8.79988 11.6163 8.4417 11.9744 7.99988 11.9744C7.55805 11.9744 7.19988 11.6163 7.19988 11.1745C7.19988 10.7326 7.55805 10.3745 7.99988 10.3745C8.4417 10.3745 8.79988 10.7326 8.79988 11.1745Z',
              fill: 'currentColor',
            }),
            (0, a.jsx)('path', {
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
    84032: (e, t, l) => {
      l.d(t, {
        B: () => c,
      });
      var a = l(72415);
      let r = {
          xxs: {
            mobile: a.Kz[100],
            tablet: a.Kz[100],
            desktop: a.Kz[100],
          },
          xs: {
            mobile: a.Kz[100],
            tablet: a.Kz[200],
            desktop: a.Kz[200],
          },
          sm: {
            mobile: a.Kz[200],
            tablet: a.Kz[300],
            desktop: a.Kz[300],
          },
          md: {
            mobile: a.Kz[300],
            tablet: a.Kz[400],
            desktop: a.Kz[400],
          },
          lg: {
            mobile: a.Kz[400],
            tablet: a.Kz[500],
            desktop: a.Kz[500],
          },
          xl: {
            mobile: a.Kz[500],
            tablet: a.Kz[600],
            desktop: a.Kz[600],
          },
          xxl: {
            mobile: a.Kz[600],
            tablet: a.Kz[700],
            desktop: a.Kz[700],
          },
        },
        i = {
          xxs: {
            mobile: a.XQ[50],
            tablet: a.XQ[100],
            desktop: a.XQ[100],
          },
          xs: {
            mobile: a.XQ[150],
            tablet: a.XQ[200],
            desktop: a.XQ[200],
          },
          sm: {
            mobile: a.XQ[200],
            tablet: a.XQ[300],
            desktop: a.XQ[300],
          },
          md: {
            mobile: a.XQ[300],
            tablet: a.XQ[400],
            desktop: a.XQ[400],
          },
          lg: {
            mobile: a.XQ[400],
            tablet: a.XQ[500],
            desktop: a.XQ[500],
          },
          xl: {
            mobile: a.XQ[500],
            tablet: a.XQ[600],
            desktop: a.XQ[600],
          },
          xxl: {
            mobile: a.XQ[600],
            tablet: a.XQ[700],
            desktop: a.XQ[700],
          },
          '3xl': {
            mobile: a.XQ[700],
            tablet: a.XQ[800],
            desktop: a.XQ[800],
          },
        },
        n = {
          xxs: {
            mobile: a.XQ[100],
            tablet: a.XQ[125],
            desktop: a.XQ[125],
          },
          xs: {
            mobile: a.XQ[125],
            tablet: a.XQ[150],
            desktop: a.XQ[150],
          },
          sm: {
            mobile: a.XQ[150],
            tablet: a.XQ[200],
            desktop: a.XQ[200],
          },
          md: {
            mobile: a.XQ[250],
            tablet: a.XQ[250],
            desktop: a.XQ[250],
          },
          lg: {
            mobile: a.XQ[300],
            tablet: a.XQ[350],
            desktop: a.XQ[350],
          },
          xl: {
            mobile: a.XQ[400],
            tablet: a.XQ[500],
            desktop: a.XQ[500],
          },
          xxl: {
            mobile: a.XQ[500],
            tablet: a.XQ[600],
            desktop: a.XQ[600],
          },
          '3xl': {
            mobile: a.XQ[600],
            tablet: a.XQ[700],
            desktop: a.XQ[700],
          },
          '4xl': {
            mobile: a.XQ[700],
            tablet: a.XQ[800],
            desktop: a.XQ[800],
          },
        },
        m = {
          Column_Spacing: {
            mobile: a.Kz[300],
            tablet: a.Kz[400],
            desktop: a.Kz[500],
          },
          Row_Spacing: {
            mobile: a.Kz[300],
            tablet: a.Kz[400],
            desktop: a.Kz[500],
          },
        },
        d = {
          xs: {
            mobile: a.XQ[125],
            tablet: a.XQ[125],
            desktop: a.XQ[125],
          },
          sm: {
            mobile: a.XQ[150],
            tablet: a.XQ[150],
            desktop: a.XQ[150],
          },
          md: {
            mobile: a.XQ[200],
            tablet: a.XQ[200],
            desktop: a.XQ[200],
          },
          lg: {
            mobile: a.XQ[250],
            tablet: a.XQ[300],
            desktop: a.XQ[300],
          },
          xl: {
            mobile: a.XQ[350],
            tablet: a.XQ[400],
            desktop: a.XQ[400],
          },
          xxl: {
            mobile: a.XQ[500],
            tablet: a.XQ[600],
            desktop: a.XQ[700],
          },
        },
        c = {
          Spacing: r,
          Sizing: i,
          IconSize: n,
          ButtonSize: {
            xs: a.XQ[300],
            sm: a.XQ[500],
            md: a.XQ[600],
            lg: a.XQ[650],
          },
          Grid: m,
          FontSize: d,
          FontWeight: {
            Extra_Light: 200,
            Light: 300,
            Normal: 400,
            Medium: 500,
            Semi_Bold: 600,
            Bold: 700,
            Extra_Bold: 800,
          },
          LineHeight: {
            xs: {
              mobile: '0.75rem',
              tablet: '0.75rem',
              desktop: '0.875rem',
            },
            sm: {
              mobile: '0.875rem',
              tablet: '0.875rem',
              desktop: '1rem',
            },
            md: {
              mobile: '1.5rem',
              tablet: '1.5rem',
              desktop: '1.5rem',
            },
            lg: {
              mobile: '1.5rem',
              tablet: '1.5rem',
              desktop: '2rem',
            },
            xl: {
              mobile: '2rem',
              tablet: '2rem',
              desktop: '2.5rem',
            },
            xxl: {
              mobile: '2.5rem',
              tablet: '2.5rem',
              desktop: '4rem',
            },
          },
          ModalWidth: {
            xs: '100vw',
            sm: '100vw',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
          },
          ColumnWidth: {
            sm: 125,
            md: 200,
            lg: 350,
          },
          ModalHeight: {
            sm: {
              maxHeight: '100vh',
              height: '100vh',
              minHeight: '100vh',
            },
            md: {
              maxHeight: '100vh',
              height: '80vh',
              minHeight: '80vh',
            },
          },
          OutlineWidth: '0.125rem',
          MinWidth: {
            table: '60rem',
            tableHeader: '50rem',
            select: '5rem',
          },
          MaxWidth: {
            disclaimer: '43rem',
            tableTitle: '67rem',
            table: '96rem',
            banner: '96rem',
            footer: '96rem',
            connectWallet: '50rem',
            actionCard: '29rem',
            section: '59.5rem',
            tooltip: '27.5rem',
          },
          MinHeight: {
            tableNoResults: '35vh',
          },
          MaxHeight: {
            popover: '17rem',
            tokenSelector: '47rem',
          },
        };
    },
    84121: (e, t, l) => {
      l.d(t, {
        b: () => i,
        N: () => n,
      });
      var a = l(77310),
        r = l(72415);
      let i = (0, a.A)({
          breakpoints: {
            keys: ['mobile', 'tablet', 'desktop'],
            values: {
              mobile: 0,
              tablet: 640,
              desktop: 1200,
            },
            unit: 'px',
          },
          spacing: Object.values(r.Kz),
          direction: 'ltr',
        }),
        n = (e) =>
          Object.fromEntries(
            i.breakpoints.keys.map((t) => {
              let l = i.breakpoints.up(t);
              return [
                l,
                {
                  ...(e[l] ?? {}),
                  ...Object.fromEntries(
                    Object.entries(e).map(([e, l]) => [
                      e,
                      'string' == typeof l || 'number' == typeof l || null == l ? l : l[t],
                    ])
                  ),
                },
              ];
            })
          );
    },
    84826: (e, t, l) => {
      l.d(t, {
        BD: () => m,
        sW: () => v.s,
        $t: () => B,
        lW: () => S,
        TS: () => L,
        Jg: () => y.Jg,
        Js: () => f,
        Kl: () => A,
        Nj: () => c,
        hJ: () => y.hJ,
        UF: () => z,
        $K: () => u,
        ay: () => w,
        OC: () => D,
        yJ: () => h,
        OW: () => p,
        Rd: () => F,
        Co: () => x,
        Xs: () => y.Xs,
        Wr: () => n,
        l1: () => E,
        cz: () => o,
        p1: () => g,
        pS: () => b,
      });
      var a = l(81734),
        r = l(83106),
        i = l(81981);

      function n(e, t) {
        let { digits: l = 4 } = t || {},
          a = (0, r.b)(e || i.Xd);
        return `${a.slice(0, l + 2)}...${a.slice(-l)}`;
      }
      class m {
        static {
          this.STRING_REGEX = /^(-?)(\d*)(?:\.(\d+))?$/;
        }
        constructor(e, t = 0) {
          if (t < 0) throw Error('Scale must be non-negative');
          if (e instanceof m) {
            (this._integerPart = e._integerPart),
              (this._fractionalPart = e._fractionalPart),
              (this._scale = Math.max(e._scale, t)),
              (this._isNegative = e._isNegative);
            return;
          }
          if ('string' == typeof e) {
            let l = m.STRING_REGEX.exec(e);
            if (!l)
              throw Error(
                'Invalid string format. Expected "integer", "integer.fraction", or ".fraction"'
              );
            let [, a, r, i = ''] = l;
            (this._integerPart = BigInt(r || '0')),
              (this._fractionalPart = BigInt(i.padEnd(t, '0'))),
              (this._scale = Math.max(i.length, t)),
              (this._isNegative = '-' === a);
            return;
          }
          if (((this._scale = t), 'number' == typeof e)) {
            let [l, a = ''] = Math.abs(e).toFixed(t).split('.');
            (this._integerPart = BigInt(l)),
              (this._fractionalPart = BigInt(a)),
              (this._isNegative = e < 0);
            return;
          }
          if ('bigint' == typeof e) {
            (this._integerPart = e < 0n ? -e : e),
              (this._fractionalPart = 0n),
              (this._isNegative = e < 0n);
            return;
          }
          throw Error('Invalid value type');
        }
        static from(e, t = 0) {
          return new m(e, t);
        }
        static {
          this.fr = m.from;
        }
        static {
          this.zero = m.from(0);
        }
        static isValid(e) {
          return (
            e instanceof m ||
            ('string' == typeof e
              ? m.STRING_REGEX.test(e)
              : 'number' == typeof e
                ? !isNaN(e) && isFinite(e)
                : 'bigint' == typeof e)
          );
        }
        negate() {
          let e = new m(this, this._scale);
          return (e._isNegative = !this._isNegative), e;
        }
        abs() {
          return this.isNegative() ? this.negate() : this;
        }
        scaleFactor(e) {
          return BigInt('1' + '0'.repeat(e));
        }
        toScaledBigInt() {
          return this._integerPart * this.scaleFactor(this._scale) + this._fractionalPart;
        }
        plus(e) {
          let t = Math.max(this._scale, e._scale),
            l = this.scaleUp(t),
            a = e.scaleUp(t),
            r = l.toScaledBigInt(),
            i = a.toScaledBigInt();
          if (this._isNegative === e._isNegative) {
            let e = r + i,
              l = new m(0, t);
            return (
              (l._integerPart = e / this.scaleFactor(t)),
              (l._fractionalPart = e % this.scaleFactor(t)),
              (l._isNegative = this._isNegative),
              l
            );
          }
          {
            let l = r > i,
              a = (l ? r : i) - (l ? i : r),
              n = new m(0, t);
            return (
              (n._integerPart = a / this.scaleFactor(t)),
              (n._fractionalPart = a % this.scaleFactor(t)),
              (n._isNegative = l ? this._isNegative : e._isNegative),
              n
            );
          }
        }
        minus(e) {
          let t = e.negate();
          return this.plus(t);
        }
        times(e) {
          let t = this._scale + e._scale,
            l = this.toScaledBigInt() * e.toScaledBigInt(),
            a = new m(0, t);
          return (
            (a._integerPart = l / this.scaleFactor(t)),
            (a._fractionalPart = l % this.scaleFactor(t)),
            (a._isNegative = this._isNegative !== e._isNegative),
            a
          );
        }
        div(e, t = this._scale) {
          if (e.isZero()) throw Error('Division by zero');
          let l = this.scaleUp(t + e._scale + 1),
            a = e.scaleUp(0),
            r = l.toScaledBigInt(),
            i = new m(r / a.toScaledBigInt(), t);
          return (i._isNegative = this._isNegative !== e._isNegative), i;
        }
        create(e, t = 0) {
          return new this.constructor(e, t);
        }
        pow(e) {
          if (!Number.isInteger(e)) throw Error('Exponent must be an integer');
          let t = this.create(1),
            l = this,
            a = Math.abs(e);
          for (; a > 0; ) a % 2 == 1 && (t = t.times(l)), (l = l.times(l)), (a = Math.floor(a / 2));
          return e < 0 ? this.create(1).div(t) : t;
        }
        sqrt(e = this._scale) {
          if (this.isNegative()) throw Error('Square root of negative numbers is not supported');
          if (this.isZero()) return new m(0);
          let t = new m(1, e + 1),
            l = this.scaleUp(e + 1),
            a = new m(l._integerPart, 0).div(new m(2), e + 1);
          for (; l.minus(a).abs().gt(t); )
            (l = a),
              (a = this.div(l, e + 1)
                .plus(l)
                .div(new m(2), e + 1));
          return a;
        }
        scaleUp(e) {
          if (e <= this._scale) return this;
          let t = e - this._scale,
            l = this._fractionalPart * this.scaleFactor(t);
          return new m(this._integerPart * this.scaleFactor(e) + l, e);
        }
        [Symbol.toPrimitive](e) {
          return 'number' === e ? this.valueOf() : this.toString();
        }
        valueOf() {
          let e = Number(this._integerPart) + Number(this._fractionalPart) / 10 ** this._scale;
          return this._isNegative ? -e : e;
        }
        compareTo(e) {
          return this._integerPart !== e._integerPart
            ? this._integerPart > e._integerPart
              ? 1
              : -1
            : this._fractionalPart !== e._fractionalPart
              ? this._fractionalPart > e._fractionalPart
                ? 1
                : -1
              : 0;
        }
        gt(e) {
          return this.compareTo(e) > 0;
        }
        eq(e) {
          return 0 === this.compareTo(e);
        }
        gte(e) {
          return this.gt(e) || this.eq(e);
        }
        lt(e) {
          return !this.gte(e);
        }
        lte(e) {
          return this.lt(e) || this.eq(e);
        }
        isZero() {
          return 0n === this._integerPart && 0n === this._fractionalPart;
        }
        isPositive() {
          return !this._isNegative;
        }
        isNegative() {
          return this._isNegative;
        }
        toString() {
          let e = this._integerPart.toString();
          if (0 === this._scale) return this._isNegative ? `-${e}` : e;
          let t = this._fractionalPart.toString().padStart(this._scale, '0');
          return `${this._isNegative ? '-' : ''}${e}.${t}`;
        }
        toFixed(e) {
          if (e < 0) throw Error('Decimal places must be non-negative');
          let t = this.round(e),
            l = t._integerPart.toString(),
            a = t._fractionalPart.toString().padStart(e, '0');
          return `${t._isNegative ? '-' : ''}${l}${e > 0 ? '.' + a : ''}`;
        }
        round(e) {
          if (e < 0) throw Error('Decimal places must be non-negative');
          let t = this.scaleFactor(e),
            l = this.scaleUp(e + 1);
          return new m(
            l._integerPart * t + (l._fractionalPart + 5n * this.scaleFactor(0)) / 10n,
            e
          );
        }
      }
      var d = l(54982);

      function c(e, t) {
        return (e * t) / 100n;
      }

      function o(e, t = 18) {
        let l = 0n;
        return (
          e.forEach((e) => {
            l += s(e, t);
          }),
          l
        );
      }

      function F(e, t, l = 18) {
        return s(e, l) - s(t, l);
      }

      function h(e, t, l = 18) {
        return s(e) > s(t, l);
      }

      function p(e, t, l = 18) {
        return s(e, l) >= s(t, l);
      }

      function s(e, t = 18) {
        if ('bigint' == typeof e) return e;
        let l = e || '0';
        if (l.includes('.')) {
          let [e, a] = l.split('.'),
            r = a.substring(0, t);
          l = `${e}.${r}`;
        }
        return (0, d.XS)(l, t);
      }

      function f(e, t = 18) {
        return (0, d.Js)(e, t);
      }

      function E(e, t) {
        let { digits: l = 4 } = t || {};
        return e ? `${e.slice(0, l + 2)}...${e.slice(-l)}` : '-';
      }

      function z(e) {
        return e / 1e9;
      }

      function u(e) {
        return Math.trunc(1e9 * e);
      }

      function g(e) {
        return e / 1e18;
      }

      function b(e) {
        return Math.trunc(e) / 1e9;
      }

      function A(e) {
        return e.includes('.') ? e.split('.')[1].length : 0;
      }
      var v = l(79214);

      function C(e) {
        return Math.floor(Math.log10(Math.abs(e)) / 3);
      }

      function x(e) {
        let t = ['', 'k', 'm', 'b', 't'],
          l = Math.max(0, Math.min(t.length - 1, C(e)));
        return t[l];
      }

      function B(e) {
        let t = 3 * C(e);
        return e / (t > 0 ? 10 ** t : 1);
      }
      var y = l(23779);
      let D = !!window.Cypress,
        w =
          'curve.finance' !== window.location.hostname &&
          'www.curve.finance' !== window.location.hostname,
        L = w;
      async function S(e) {
        if ((0, a.P)(e))
          try {
            e = (0, r.b)(e);
          } catch (e) {
            console.warn('Failed to checksum address', e);
          }
        try {
          return await navigator.clipboard.writeText(e), !0;
        } catch (e) {
          return console.warn('Copy to clipboard failed', e), !1;
        }
      }
    },
    88411: (e, t, l) => {
      l.d(t, {
        Ej: () => a.Ej,
        vz: () => h,
        s8: () => b,
        Sg: () => a.Sg,
        fI: () => M,
        AW: () => a.AW,
        N6: () => a.N6,
        VP: () => a.VP,
        me: () => a.me,
        NB: () => a.NB,
        GS: () => v,
        w5: () => a.w5,
        vT: () => a.vT,
      });
      var a = l(59621),
        r = l(54568),
        i = l(33055),
        n = l(67995),
        m = l(56120),
        d = l(84826);
      let c = ({ address: e, ...t }) => {
        let { data: l } = (0, n.v)({
          address: e,
        });
        return (0, r.jsx)(m.A, {
          size: 'small',
          color: 'ghost',
          title: e,
          ...t,
          children: l || (0, d.Wr)(e),
        });
      };
      var o = l(36074);
      let F = (e) =>
          (0, r.jsx)(m.A, {
            className: 'interact-button',
            size: 'small',
            color: 'primary',
            'data-testid': 'navigation-connect-wallet',
            ...e,
            children: (0, o.t)`Connect Wallet`,
          }),
        h = ({ sx: e }) => {
          let { address: l } = (0, i.F)(),
            { disconnect: m } = (0, a.vT)(),
            { connectState: d } = (0, a.w5)(),
            o = (0, a.VP)(d, a.Ej.CONNECT_WALLET);
          return l
            ? (0, r.jsx)(c, {
                address: l,
                loading: o,
                sx: e,
              })
            : (0, r.jsx)(F, {
                loading: o,
                sx: e,
              });
        };
      var p = l(61773),
        s = l(31184),
        f = l(32678),
        E = l(87401),
        z = l(4387),
        u = l(77241),
        g = l(84032);
      let b = ({
          description: e,
          connectText: t,
          loadingText: l,
          connectWallet: a,
          isLoading: i,
        }) =>
          (0, r.jsxs)(s.A, {
            padding: 7,
            spacing: 8,
            width: g.B.MaxWidth.connectWallet,
            maxWidth: '90vw',
            sx: {
              backgroundColor: 'var(--table--background-color)',
            },
            children: [
              (0, r.jsxs)(s.A, {
                spacing: 3,
                paddingBlock: 8,
                alignItems: 'center',
                justifyContent: 'center',
                sx: {
                  backgroundImage: (e) => `url(${(0, u.K4)(e.key)})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                },
                children: [
                  (0, r.jsx)(A, {
                    src: z.jp,
                    alt: 'Curve Logo',
                  }),
                  (0, r.jsx)(E.A, {
                    variant: 'headingXxl',
                    children: (0, o.t)`Enter Curve`,
                  }),
                ],
              }),
              (0, r.jsxs)(s.A, {
                spacing: 3,
                alignItems: 'center',
                children: [
                  (0, r.jsx)(E.A, {
                    variant: 'bodyMRegular',
                    children: e,
                  }),
                  (0, r.jsx)(m.A, {
                    size: 'large',
                    color: 'primary',
                    onClick: a,
                    loading: i,
                    loadingPosition: 'start',
                    'data-testid': `btn-connect-prompt${i ? '-loading' : ''}`,
                    children: i ? l : t,
                  }),
                ],
              }),
            ],
          }),
        A = (0, f.Ay)(p.default)({
          width: '3rem',
          height: '3rem',
          margin: '0 auto',
          '@media (min-width: 43.75rem)': {
            width: '5.5rem',
            height: '5.5rem',
          },
        }),
        v = (e) => {
          e.setStateByKey('formStatus', {
            ...e.formStatus,
            step: '',
            formProcessing: !1,
            error: 'error-invalid-provider',
          });
        };
      l(44042);
      var C = l(7620),
        x = l(24388),
        B = l(2926),
        y = l(55570),
        D = l(15984),
        w = l(68586);
      let L = {
          hint: 'info',
          error: 'error',
          pending: 'info',
          success: 'success',
        },
        S = {
          hint: (0, o.t)`Hint`,
          error: (0, o.t)`Error`,
          pending: (0, o.t)`Pending`,
          success: (0, o.t)`Success`,
        },
        M = ({ headerHeight: e }) => {
          let [t, l] = (0, C.useState)([]);
          return (
            (0, C.useEffect)(() => {
              let e = [],
                t = (e) => {
                  l((t) => t.filter((t) => t !== e));
                },
                a = (0, w.l)((a) => {
                  if ((l((e) => [...e, a]), a.autoDismiss)) {
                    let l = window.setTimeout(() => t(a), a.autoDismiss);
                    e.push(l);
                  }
                }, t);
              return () => {
                a(), e.forEach(clearTimeout);
              };
            }, []),
            (0, r.jsx)(D.A, {
              open: t.length > 0,
              onClose: () => l([]),
              anchorOrigin: {
                horizontal: 'center',
                vertical: 'top',
              },
              sx: {
                top: e,
              },
              children: (0, r.jsx)(y.A, {
                sx: {
                  justifyContent: 'end',
                  marginTop: 4,
                },
                children: t.map(({ id: e, type: t, message: l }) =>
                  (0, r.jsxs)(
                    x.A,
                    {
                      variant: 'filled',
                      severity: L[t],
                      children: [
                        (0, r.jsx)(B.A, {
                          children: S[t],
                        }),
                        (0, r.jsx)(E.A, {
                          children: l,
                        }),
                      ],
                    },
                    e
                  )
                ),
              }),
            })
          );
        };
    },
    89425: (e, t, l) => {
      l.d(t, {
        D: () => r,
        o: () => a,
      });
      let a = {
          '1s': 1e3,
          '2s': 2e3,
          '3s': 3e3,
          '4s': 4e3,
          '10s': 1e4,
          '15s': 15e3,
          '1m': 6e4,
          '5m': 3e5,
          '10m': 6e5,
          '11m': 66e4,
          '1h': 36e5,
          '1d': 864e5,
          Inf: 1 / 0,
        },
        r = {
          WEEK: 604800,
          MONTH: 2592e3,
        };
    },
    91069: (e, t, l) => {
      l.d(t, {
        X6: () => a.X,
        D$: () => r,
      });
      var a = l(4289);
      let r = {
        chain: ({ chainId: e }) => [
          'chain',
          {
            chainId: e,
          },
        ],
        chainName: ({ blockchainId: e }) => [
          'chain',
          {
            blockchainId: e,
          },
        ],
        pool: ({ chainId: e, poolId: t }) => [
          ...r.chain({
            chainId: e,
          }),
          'pool',
          {
            poolId: t,
          },
        ],
        contract: ({ blockchainId: e, contractAddress: t }) => [
          ...r.chainName({
            blockchainId: e,
          }),
          'contract',
          {
            contractAddress: t,
          },
        ],
        gauge: ({ chainId: e, poolId: t }) => [
          ...r.pool({
            chainId: e,
            poolId: t,
          }),
          'gauge',
        ],
      };
    },
    91516: (e, t, l) => {
      l.d(t, {
        Q6: () => m,
        Vg: () => d,
        XD: () => i,
        xW: () => n,
      });
      var a = l(7620),
        r = l(84826);

      function i(e, t, { untilTag: l } = {}) {
        let a = e;
        for (; a && a.tagName != l?.toUpperCase(); ) {
          if (a.classList.contains(t)) return !0;
          a = a.parentElement;
        }
        return !1;
      }
      let n = (...e) => e.filter(Boolean).join(' '),
        m = r.OC && 'cypress-hover';

      function d(e, t, l) {
        (0, a.useEffect)(() => {
          if (r.OC && e) return e.addEventListener(t, l), () => e.removeEventListener(t, l);
        }, [e, t, l]);
      }
    },
    99599: (e, t, l) => {
      l.d(t, {
        A: () => r.A,
        V: () => a.A,
      });
      var a = l(71741),
        r = l(27280);
    },
  },
]);
