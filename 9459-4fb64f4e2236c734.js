'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9459],
  {
    4289: (e, t, l) => {
      l.d(t, { X: () => F });
      var a = l(68466),
        r = l(61873),
        m = l(76635),
        i = l(89425),
        n = l(70697),
        c = l(29514);
      function F({
        queryFn: e,
        queryKey: t,
        staleTime: l,
        refetchInterval: F,
        validationSuite: d,
        dependencies: h,
        refetchOnWindowFocus: p,
        refetchOnMount: f,
      }) {
        let E = (e, t) => (0, c.p6)(d, e, t),
          o = (e) => (0, c.VG)(d, e) && !h?.(e).some((e) => !r.q.getQueryData(e)),
          z = ({ queryKey: t }) => (
            (0, m.dB)(t),
            e(
              E(
                Object.fromEntries(
                  t.flatMap((e) => (e && 'object' == typeof e ? Object.entries(e) : []))
                )
              )
            )
          ),
          s = (e, r = !0) =>
            (0, a.j)({
              queryKey: t(e),
              queryFn: z,
              staleTime: i.o[l ?? '5m'],
              refetchInterval: F ? i.o[F] : void 0,
              enabled: r && o(e),
              refetchOnWindowFocus: p,
              refetchOnMount: f,
            });
        return {
          assertValidity: E,
          checkValidity: (e, t) => (0, c.VG)(d, e, t),
          isEnabled: o,
          queryKey: t,
          getQueryOptions: s,
          getQueryData: (e) => r.q.getQueryData(t(e)),
          setQueryData: (e, l) => r.q.setQueryData(t(e), l),
          prefetchQuery: (e, l = 0) =>
            r.q.prefetchQuery({ queryKey: t(e), queryFn: z, staleTime: l }),
          fetchQuery: (e) => r.q.fetchQuery(s(e)),
          useQuery: (0, n.GQ)(s),
          invalidate: (e) => r.q.invalidateQueries({ queryKey: t(e) }),
        };
      }
    },
    4387: (e, t, l) => {
      l.d(t, {
        UK: () => CP,
        NC: () => Cq,
        jp: () => a,
        if: () => CL,
        IA: () => CO,
        m$: () => CT,
        $x: () => CD,
        e5: () => Cw,
        $E: () => Cy,
        xz: () => CG,
        nf: () => CK.h,
        $J: () => Cv,
        Nj: () => CN,
        _n: () => C_,
        qO: () => CM,
        bS: () => CB,
        S7: () => Cx,
        WI: () => CX,
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
        m,
        i,
        n,
        c,
        F,
        d,
        h,
        p,
        f,
        E,
        o,
        z,
        s,
        u,
        A,
        g,
        b,
        v,
        C,
        D,
        B,
        w,
        x,
        y,
        S,
        M,
        k,
        _,
        P,
        U,
        N,
        I,
        X,
        Q,
        L,
        $,
        O,
        R,
        T,
        j,
        G,
        K,
        q,
        V,
        H,
        W,
        J,
        Z,
        Y,
        ee,
        et,
        el,
        ea,
        er,
        em,
        ei,
        en,
        ec,
        eF,
        ed,
        eh,
        ep,
        ef,
        eE,
        eo,
        ez,
        es,
        eu,
        eA,
        eg,
        eb,
        ev,
        eC,
        eD,
        eB,
        ew,
        ex,
        ey,
        eS,
        eM,
        ek,
        e_,
        eP,
        eU,
        eN,
        eI,
        eX,
        eQ,
        eL,
        e$,
        eO,
        eR,
        eT,
        ej,
        eG,
        eK,
        eq,
        eV,
        eH,
        eW,
        eJ,
        eZ,
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
        tm,
        ti,
        tn,
        tc,
        tF,
        td,
        th,
        tp,
        tf,
        tE,
        to,
        tz,
        ts,
        tu,
        tA,
        tg,
        tb,
        tv,
        tC,
        tD,
        tB,
        tw,
        tx,
        ty,
        tS,
        tM,
        tk,
        t_,
        tP,
        tU,
        tN,
        tI,
        tX,
        tQ,
        tL,
        t$,
        tO,
        tR,
        tT,
        tj,
        tG,
        tK,
        tq,
        tV,
        tH,
        tW,
        tJ,
        tZ,
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
        lm,
        li,
        ln,
        lc,
        lF,
        ld,
        lh,
        lp,
        lf,
        lE,
        lo,
        lz,
        ls,
        lu,
        lA,
        lg,
        lb,
        lv,
        lC,
        lD,
        lB,
        lw,
        lx,
        ly,
        lS,
        lM,
        lk,
        l_,
        lP,
        lU,
        lN,
        lI,
        lX,
        lQ,
        lL,
        l$,
        lO,
        lR,
        lT,
        lj,
        lG,
        lK,
        lq,
        lV,
        lH,
        lW,
        lJ,
        lZ,
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
        am,
        ai,
        an,
        ac,
        aF,
        ad,
        ah,
        ap,
        af,
        aE,
        ao,
        az,
        as,
        au,
        aA,
        ag,
        ab,
        av,
        aC,
        aD,
        aB,
        aw,
        ax,
        ay,
        aS,
        aM,
        ak,
        a_,
        aP,
        aU,
        aN,
        aI,
        aX,
        aQ,
        aL,
        a$,
        aO,
        aR,
        aT,
        aj,
        aG,
        aK,
        aq,
        aV,
        aH,
        aW,
        aJ,
        aZ,
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
        rm,
        ri,
        rn,
        rc,
        rF,
        rd,
        rh,
        rp,
        rf,
        rE,
        ro,
        rz,
        rs,
        ru,
        rA,
        rg,
        rb,
        rv,
        rC,
        rD,
        rB,
        rw,
        rx,
        ry,
        rS,
        rM,
        rk,
        r_,
        rP,
        rU,
        rN,
        rI,
        rX,
        rQ,
        rL,
        r$,
        rO,
        rR,
        rT,
        rj,
        rG,
        rK,
        rq,
        rV,
        rH,
        rW,
        rJ,
        rZ,
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
        me,
        mt,
        ml,
        ma,
        mr,
        mm,
        mi,
        mn,
        mc,
        mF,
        md,
        mh,
        mp,
        mf,
        mE,
        mo,
        mz,
        ms,
        mu,
        mA,
        mg,
        mb,
        mv,
        mC,
        mD,
        mB,
        mw,
        mx,
        my,
        mS,
        mM,
        mk,
        m_,
        mP,
        mU,
        mN,
        mI,
        mX,
        mQ,
        mL,
        m$,
        mO,
        mR,
        mT,
        mj,
        mG,
        mK,
        mq,
        mV,
        mH,
        mW,
        mJ,
        mZ,
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
        ie,
        it,
        il,
        ia,
        ir,
        im,
        ii,
        ic,
        iF,
        id,
        ih,
        ip,
        iE,
        io,
        iz,
        is,
        iu,
        iA,
        ig,
        ib,
        iv,
        iC,
        iD,
        iB,
        iw,
        ix,
        iy,
        iS,
        iM,
        ik,
        i_,
        iP,
        iU,
        iN,
        iI,
        iX,
        iQ,
        iL,
        i$,
        iO,
        iR,
        iT,
        ij,
        iG,
        iK,
        iq,
        iV,
        iH,
        iW,
        iJ,
        iZ,
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
        nm,
        ni,
        nn,
        nc,
        nF,
        nd,
        nh,
        np,
        nf,
        nE,
        no,
        nz,
        ns,
        nu,
        nA,
        ng,
        nb,
        nv,
        nC,
        nD,
        nB,
        nw,
        nx,
        ny,
        nS,
        nM,
        nk,
        n_,
        nP,
        nU,
        nN,
        nI,
        nX,
        nQ,
        nL,
        n$,
        nO,
        nR,
        nT,
        nj,
        nG,
        nK,
        nq,
        nV,
        nH,
        nW,
        nJ,
        nZ,
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
        ce,
        ct,
        cl,
        ca,
        cr,
        cm,
        ci,
        cn,
        cc,
        cF,
        cd,
        ch,
        cp,
        cf,
        cE,
        co,
        cz,
        cs,
        cu,
        cA,
        cg,
        cb,
        cv,
        cC,
        cD,
        cB,
        cw,
        cx,
        cy,
        cS,
        cM,
        ck,
        c_,
        cP,
        cU,
        cN,
        cI,
        cX,
        cQ,
        cL,
        c$,
        cO,
        cR,
        cT,
        cj,
        cG,
        cK,
        cq,
        cV,
        cH,
        cW,
        cJ,
        cZ,
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
        Fe,
        Ft,
        Fl,
        Fa,
        Fr,
        Fm,
        Fi,
        Fn,
        Fc,
        FF,
        Fd,
        Fh,
        Fp,
        Ff,
        FE,
        Fo,
        Fz,
        Fs,
        Fu,
        FA,
        Fg,
        Fb,
        Fv,
        FC,
        FD,
        FB,
        Fw,
        Fx,
        Fy,
        FS,
        FM,
        Fk,
        F_,
        FP,
        FU,
        FN,
        FI,
        FX,
        FQ,
        FL,
        F$,
        FO,
        FR,
        FT,
        Fj,
        FG,
        FK,
        Fq,
        FV,
        FH,
        FW,
        FJ,
        FZ,
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
        de,
        dt,
        dl,
        da,
        dr,
        dm,
        di,
        dn,
        dc,
        dF,
        dd,
        dh,
        dp,
        df,
        dE,
        dz,
        ds,
        du,
        dA,
        dg,
        db,
        dv,
        dC,
        dD,
        dB,
        dw,
        dx,
        dy,
        dS,
        dM,
        dk,
        d_,
        dP,
        dU,
        dN,
        dI,
        dX,
        dQ,
        dL,
        d$,
        dO,
        dR,
        dT,
        dj,
        dG,
        dK,
        dq,
        dV,
        dH,
        dW,
        dJ,
        dZ,
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
        he,
        ht,
        hl,
        ha,
        hr,
        hm,
        hi,
        hn,
        hc,
        hF,
        hd,
        hh,
        hp,
        hf,
        hE,
        ho,
        hz,
        hs,
        hu,
        hA,
        hg,
        hb,
        hv,
        hC,
        hD,
        hB,
        hw,
        hx,
        hy,
        hS,
        hM,
        hk,
        h_,
        hP,
        hU,
        hN,
        hI,
        hX,
        hQ,
        hL,
        h$,
        hO,
        hR,
        hT,
        hj,
        hG,
        hK,
        hq,
        hV,
        hH,
        hW,
        hJ,
        hZ,
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
        pm,
        pi,
        pn,
        pc,
        pF,
        pd,
        ph,
        pp,
        pf,
        pE,
        po,
        pz,
        ps,
        pu,
        pA,
        pg,
        pb,
        pv,
        pC,
        pD,
        pB,
        pw,
        px,
        py,
        pS,
        pM,
        pk,
        p_,
        pP,
        pU,
        pN,
        pI,
        pX,
        pQ,
        pL,
        p$,
        pO,
        pR,
        pT,
        pj,
        pG,
        pK,
        pq,
        pV,
        pH,
        pW,
        pJ,
        pZ,
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
        fe,
        ft,
        fl,
        fa,
        fr,
        fm,
        fi,
        fn,
        fc,
        fF,
        fd,
        fh,
        fp,
        ff,
        fE,
        fo,
        fz,
        fs,
        fu,
        fA,
        fg,
        fb,
        fv,
        fC,
        fD,
        fB,
        fw,
        fx,
        fy,
        fS,
        fM,
        fk,
        f_,
        fP,
        fU,
        fN,
        fI,
        fX,
        fQ,
        fL,
        f$,
        fO,
        fR,
        fT,
        fj,
        fG,
        fK,
        fq,
        fV,
        fH,
        fW,
        fJ,
        fZ,
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
        Em,
        Ei,
        En,
        Ec,
        EF,
        Ed,
        Eh,
        Ep,
        Ef,
        EE,
        Eo,
        Ez,
        Es,
        Eu,
        EA,
        Eg,
        Eb,
        Ev,
        EC,
        ED,
        EB,
        Ew,
        Ex,
        Ey,
        ES,
        EM,
        Ek,
        E_,
        EP,
        EU,
        EN,
        EI,
        EX,
        EQ,
        EL,
        E$,
        EO,
        ER,
        ET,
        Ej,
        EG,
        EK,
        Eq,
        EV,
        EH,
        EW,
        EJ,
        EZ,
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
        oe,
        ot,
        ol,
        oa,
        or,
        om,
        oi,
        on,
        oc,
        oF,
        od,
        oh,
        op,
        of,
        oE,
        oo,
        oz,
        os,
        ou,
        oA,
        og,
        ob,
        ov,
        oC,
        oD,
        oB,
        ow,
        ox,
        oy,
        oS,
        oM,
        ok,
        o_,
        oP,
        oU,
        oN,
        oI,
        oX,
        oQ,
        oL,
        o$,
        oO,
        oR,
        oT,
        oj,
        oG,
        oK,
        oq,
        oV,
        oH,
        oW,
        oJ,
        oZ,
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
        ze,
        zt,
        zl,
        za,
        zr,
        zm,
        zi,
        zn,
        zc,
        zF,
        zd,
        zh,
        zp,
        zf,
        zE,
        zo,
        zz,
        zs,
        zu,
        zA,
        zg,
        zb,
        zv,
        zC,
        zD,
        zB,
        zw,
        zx,
        zy,
        zS,
        zM,
        zk,
        z_,
        zP,
        zU,
        zN,
        zI,
        zX,
        zQ,
        zL,
        z$,
        zO,
        zR,
        zT,
        zj,
        zG,
        zK,
        zq,
        zV,
        zH,
        zW,
        zJ,
        zZ,
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
        se,
        st,
        sl,
        sa,
        sr,
        sm,
        si,
        sn,
        sc,
        sF,
        sd,
        sh,
        sp,
        sf,
        sE,
        so,
        sz,
        ss,
        su,
        sA,
        sg,
        sb,
        sv,
        sC,
        sD,
        sB,
        sw,
        sx,
        sy,
        sS,
        sM,
        sk,
        s_,
        sP,
        sU,
        sN,
        sI,
        sX,
        sQ,
        sL,
        s$,
        sO,
        sR,
        sT,
        sj,
        sG,
        sK,
        sq,
        sV,
        sH,
        sW,
        sJ,
        sZ,
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
        ue,
        ut,
        ul,
        ua,
        ur,
        um,
        ui,
        un,
        uc,
        uF,
        ud,
        uh,
        up,
        uf,
        uE,
        uo,
        uz,
        us,
        uu,
        uA,
        ug,
        ub,
        uv,
        uC,
        uD,
        uB,
        uw,
        ux,
        uy,
        uS,
        uM,
        uk,
        u_,
        uP,
        uU,
        uN,
        uI,
        uX,
        uQ,
        uL,
        u$,
        uO,
        uR,
        uT,
        uj,
        uG,
        uK,
        uq,
        uV,
        uH,
        uW,
        uJ,
        uZ,
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
        Ae,
        At,
        Al,
        Aa,
        Ar,
        Am,
        Ai,
        An,
        Ac,
        AF,
        Ad,
        Ah,
        Ap,
        Af,
        AE,
        Ao,
        Az,
        As,
        Au,
        AA,
        Ag,
        Ab,
        Av,
        AC,
        AD,
        AB,
        Aw,
        Ax,
        Ay,
        AS,
        AM,
        Ak,
        A_,
        AP,
        AU,
        AN,
        AI,
        AX,
        AQ,
        AL,
        A$,
        AO,
        AR,
        AT,
        Aj,
        AG,
        AK,
        Aq,
        AV,
        AH,
        AW,
        AJ,
        AZ,
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
        ge,
        gt,
        gl,
        ga,
        gr,
        gm,
        gi,
        gn,
        gc,
        gF,
        gd,
        gh,
        gp,
        gf,
        gE,
        go,
        gz,
        gs,
        gu,
        gA,
        gg,
        gb,
        gv,
        gC,
        gD,
        gB,
        gw,
        gx,
        gy,
        gS,
        gM,
        gk,
        g_,
        gP,
        gU,
        gN,
        gI,
        gX,
        gQ,
        gL,
        g$,
        gO,
        gR,
        gT,
        gj,
        gG,
        gK,
        gq,
        gV,
        gH,
        gW,
        gJ,
        gZ,
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
        bm,
        bi,
        bn,
        bc,
        bF,
        bd,
        bh,
        bp,
        bf,
        bE,
        bo,
        bz,
        bs,
        bu,
        bA,
        bg,
        bb,
        bv,
        bC,
        bD,
        bB,
        bw,
        bx,
        by,
        bS,
        bM,
        bk,
        b_,
        bP,
        bU,
        bN,
        bI,
        bX,
        bQ,
        bL,
        b$,
        bO,
        bR,
        bT,
        bj,
        bG,
        bK,
        bq,
        bV,
        bH,
        bW,
        bJ,
        bZ,
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
        ve,
        vt,
        vl,
        va,
        vr,
        vm,
        vi,
        vn,
        vc,
        vF,
        vd,
        vh,
        vp,
        vf,
        vE,
        vo,
        vz,
        vs,
        vu,
        vA,
        vg,
        vb,
        vv,
        vC,
        vD,
        vB,
        vw,
        vx,
        vy,
        vS,
        vM,
        vk,
        v_,
        vP,
        vU,
        vN,
        vI,
        vX,
        vQ,
        vL,
        v$,
        vO,
        vR,
        vT,
        vj,
        vG,
        vK,
        vq,
        vV,
        vH,
        vW,
        vJ,
        vZ,
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
        Cm,
        Ci,
        Cn,
        Cc,
        CF,
        Cd,
        Ch,
        Cp,
        Cf,
        CE,
        Co,
        Cz,
        Cs,
        Cu,
        CA,
        Cg = l(7620);
      function Cb() {
        return (Cb = Object.assign
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
        Cg.createElement(
          'svg',
          Cb({ xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 17 18' }, e),
          r ||
            (r = Cg.createElement('path', {
              fill: '#00F',
              d: 'm7.196 10.344-1.291.286-.16-.604 1.371-.25z',
            })),
          m ||
            (m = Cg.createElement('path', {
              fill: '#00F',
              d: 'm5.905 10.628-1.123.381-.241-.63 1.204-.355z',
            })),
          i ||
            (i = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm7.116 9.775-1.371.25-.143-.706 1.444-.213z',
            })),
          n ||
            (n = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm5.744 10.024-1.203.355-.22-.735 1.28-.325z',
            })),
          c ||
            (c = Cg.createElement('path', {
              fill: '#0000F1',
              d: 'm7.282 10.805-1.205.312-.172-.49 1.291-.286z',
            })),
          F ||
            (F = Cg.createElement('path', {
              fill: '#0000DA',
              d: 'm6.077 11.117-1.034.402-.26-.51 1.122-.38z',
            })),
          d ||
            (d = Cg.createElement('path', {
              fill: '#0058FF',
              d: 'm7.044 9.106-1.442.213-.127-.789 1.508-.171z',
            })),
          h ||
            (h = Cg.createElement('path', {
              fill: '#0048FF',
              d: 'm5.602 9.32-1.28.323-.19-.824 1.344-.289z',
            })),
          p ||
            (p = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm8.608 10.157-1.412.187-.081-.571L8.6 9.624z',
            })),
          f ||
            (f = Cg.createElement('path', {
              fill: '#0000DA',
              d: 'm7.373 11.144-1.116.334-.18-.361 1.205-.312z',
            })),
          E ||
            (E = Cg.createElement('path', {
              fill: '#0000E8',
              d: 'm4.783 11.01-.92.471-.324-.649 1.002-.453z',
            })),
          o ||
            (o = Cg.createElement('path', {
              fill: '#0000C4',
              d: 'm6.257 11.478-.94.42-.273-.378 1.034-.402z',
            })),
          z ||
            (z = Cg.createElement('path', {
              fill: '#003CFF',
              d: 'm8.602 9.625-1.486.15-.072-.667L8.598 9z',
            })),
          s ||
            (s = Cg.createElement('path', {
              fill: '#0008FF',
              d: 'm4.54 10.379-1 .453-.291-.759 1.073-.43z',
            })),
          u ||
            (u = Cg.createElement('path', {
              fill: '#00F',
              d: 'm8.614 10.584-1.332.22-.086-.46 1.412-.187z',
            })),
          A ||
            (A = Cg.createElement('path', {
              fill: '#0000C8',
              d: 'm5.043 11.52-.834.485-.346-.524.92-.472z',
            })),
          g ||
            (g = Cg.createElement('path', {
              fill: '#0090FF',
              d: 'm6.983 8.359-1.508.171-.102-.854 1.56-.127z',
            })),
          b ||
            (b = Cg.createElement('path', {
              fill: '#0084FF',
              d: 'm5.475 8.53-1.343.29-.156-.893 1.398-.25z',
            })),
          v ||
            (v = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm8.598 9-1.554.105-.061-.748L8.596 8.3z',
            })),
          C ||
            (C = Cg.createElement('path', {
              fill: '#003CFF',
              d: 'm4.321 9.643-1.073.43-.254-.85 1.138-.404z',
            })),
          D ||
            (D = Cg.createElement('path', {
              fill: '#0000F6',
              d: 'm8.622 10.896-1.248.247-.091-.338 1.332-.221z',
            })),
          B ||
            (B = Cg.createElement('path', {
              fill: '#0000D1',
              d: 'm7.466 11.352-1.025.35-.184-.224 1.116-.335z',
            })),
          w ||
            (w = Cg.createElement('path', {
              fill: '#0000AD',
              d: 'm5.316 11.898-.743.494-.362-.386.833-.486z',
            })),
          x ||
            (x = Cg.createElement('path', {
              fill: '#00B',
              d: 'm6.441 11.703-.849.429-.276-.234.942-.419z',
            })),
          y ||
            (y = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm8.596 8.301-1.613.058-.05-.81 1.661-.008z',
            })),
          S ||
            (S = Cg.createElement('path', {
              fill: '#0078FF',
              d: 'm4.133 8.82-1.138.403-.21-.922 1.19-.374z',
            })),
          M ||
            (M = Cg.createElement('path', {
              fill: '#0000ED',
              d: 'm8.63 11.084-1.164.268-.093-.209 1.25-.247z',
            })),
          k ||
            (k = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm6.933 7.55-1.56.126-.077-.898 1.6-.081z',
            })),
          _ ||
            (_ = Cg.createElement('path', {
              fill: '#002CFF',
              d: 'm10.076 10.061-1.47.095-.005-.53 1.534-.053z',
            })),
          P ||
            (P = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm5.373 7.676-1.398.251-.118-.939 1.439-.211z',
            })),
          U ||
            (U = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm10.01 10.452-1.397.132-.006-.428 1.47-.095z',
            })),
          N ||
            (N = Cg.createElement('path', {
              fill: '#0050FF',
              d: 'm10.137 9.571-1.535.052L8.598 9l1.595-.005z',
            })),
          I ||
            (I = Cg.createElement('path', {
              fill: '#0000DA',
              d: 'm3.862 11.481-.702.551-.399-.659.776-.541z',
            })),
          X ||
            (X = Cg.createElement('path', {
              fill: '#00F',
              d: 'm3.54 10.832-.776.541-.36-.772.846-.528z',
            })),
          Q ||
            (Q = Cg.createElement('path', {
              fill: '#0000A4',
              d: 'm5.593 12.132-.654.498-.369-.239.746-.493z',
            })),
          L ||
            (L = Cg.createElement('path', {
              fill: '#0000B6',
              d: 'm4.21 12.005-.622.557-.428-.53.702-.552z',
            })),
          $ ||
            ($ = Cg.createElement('path', {
              fill: '#0000D6',
              d: 'm7.561 11.425-.939.36-.183-.082 1.026-.35z',
            })),
          O ||
            (O = Cg.createElement('path', {
              fill: '#0004FF',
              d: 'm9.944 10.733-1.322.163-.008-.312 1.396-.132z',
            })),
          R ||
            (R = Cg.createElement('path', {
              fill: '#0078FF',
              d: 'M10.194 8.997 8.598 9l-.002-.7 1.647.046z',
            })),
          T ||
            (T = Cg.createElement('path', {
              fill: '#0000BF',
              d: 'm6.622 11.784-.755.433-.276-.085.849-.43z',
            })),
          j ||
            (j = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm8.595 7.54-1.662.01-.037-.854 1.7.041z',
            })),
          G ||
            (G = Cg.createElement('path', {
              fill: '#0034FF',
              d: 'm3.248 10.073-.846.528-.313-.866.905-.51z',
            })),
          K ||
            (K = Cg.createElement('path', {
              fill: '#0000F1',
              d: 'm8.64 11.144-1.079.281-.092-.073 1.163-.268z',
            })),
          q ||
            (q = Cg.createElement('path', {
              fill: '#00009F',
              d: 'm4.572 12.391-.537.558-.45-.387.622-.557z',
            })),
          V ||
            (V = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm3.975 7.927-1.19.374-.158-.972 1.23-.34z',
            })),
          H ||
            (H = Cg.createElement('path', {
              fill: '#00F',
              d: 'm9.878 10.898-1.248.186-.009-.188 1.323-.164z',
            })),
          W ||
            (W = Cg.createElement('path', {
              fill: '#23FFD4',
              d: 'm6.896 6.696-1.6.082-.05-.921 1.627-.034z',
            })),
          J ||
            (J = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'M10.243 8.347 8.596 8.3v-.76l1.691.099z',
            })),
          Z ||
            (Z = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm5.296 6.777-1.438.211-.078-.963 1.466-.168z',
            })),
          Y ||
            (Y = Cg.createElement('path', {
              fill: '#0000AD',
              d: 'm5.868 12.217-.56.497-.367-.084.653-.498z',
            })),
          ee ||
            (ee = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm2.994 9.223-.905.512-.257-.944.953-.49z',
            })),
          et ||
            (et = Cg.createElement('path', {
              fill: '#0000E8',
              d: 'm7.65 11.36-.848.36-.18.064.935-.359z',
            })),
          el ||
            (el = Cg.createElement('path', {
              fill: '#000096',
              d: 'm4.941 12.63-.451.554-.455-.235.537-.558z',
            })),
          ea ||
            (ea = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm8.595 6.739-1.7-.041-.022-.876 1.724.094z',
            })),
          er ||
            (er = Cg.createElement('path', {
              fill: '#00F',
              d: 'm9.812 10.943-1.173.201-.01-.06 1.249-.186z',
            })),
          em ||
            (em = Cg.createElement('path', {
              fill: '#04F',
              d: 'm11.526 10.05-1.45.011.061-.49 1.507.034z',
            })),
          ei ||
            (ei = Cg.createElement('path', {
              fill: '#002CFF',
              d: 'm11.401 10.4-1.391.052.065-.391 1.451-.011z',
            })),
          en ||
            (en = Cg.createElement('path', {
              fill: '#0000D1',
              d: 'm6.802 11.72-.666.43-.267.067.754-.433z',
            })),
          ec ||
            (ec = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm10.286 7.64-1.692-.1V6.74l1.725.154z',
            })),
          eF ||
            (eF = Cg.createElement('path', {
              fill: '#00F',
              d: 'm8.649 11.074-1 .286-.088.065 1.08-.28z',
            })),
          ed ||
            (ed = Cg.createElement('path', {
              fill: '#0064FF',
              d: 'm11.643 9.606-1.506-.035.056-.576 1.559.086z',
            })),
          eh ||
            (eh = Cg.createElement('path', {
              fill: '#19FFDE',
              d: 'm3.857 6.988-1.23.341-.104-.998 1.257-.306z',
            })),
          ep ||
            (ep = Cg.createElement('path', {
              fill: '#001CFF',
              d: 'm11.272 10.649-1.328.084.067-.281 1.39-.051z',
            })),
          ef ||
            (ef = Cg.createElement('path', {
              fill: '#0000D1',
              d: 'm3.16 12.032-.486.612-.464-.659.552-.612z',
            })),
          eE ||
            (eE = Cg.createElement('path', {
              fill: '#0000A8',
              d: 'm3.588 12.562-.416.61-.498-.527.487-.612z',
            })),
          eo ||
            (eo = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm6.873 5.82-1.627.035-.022-.923 1.64.012z',
            })),
          ez ||
            (ez = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm11.752 9.081-1.559-.083.05-.651 1.604.137z',
            })),
          es ||
            (es = Cg.createElement('path', {
              fill: '#00F',
              d: 'm2.761 11.373-.551.613-.42-.776.612-.609z',
            })),
          eu ||
            (eu = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm2.786 8.3-.954.49-.196-.995.991-.465z',
            })),
          eA ||
            (eA = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm5.246 5.857-1.466.17-.034-.965 1.479-.128z',
            })),
          eg ||
            (eg = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm11.142 10.79-1.265.108.066-.165 1.328-.084z',
            })),
          eb ||
            (eb = Cg.createElement('path', {
              fill: '#0000BF',
              d: 'm6.136 12.15-.471.49-.357.074.56-.497z',
            })),
          ev ||
            (ev = Cg.createElement('path', {
              fill: '#00009B',
              d: 'm5.308 12.714-.367.546-.452-.076.451-.554z',
            })),
          eC ||
            (eC = Cg.createElement('path', {
              fill: '#000092',
              d: 'm4.035 12.949-.342.602-.52-.38.415-.61z',
            })),
          eD ||
            (eD = Cg.createElement('path', {
              fill: '#000CFF',
              d: 'm9.75 10.866-1.102.208-.01.07 1.174-.201z',
            })),
          eB ||
            (eB = Cg.createElement('path', {
              fill: '#002CFF',
              d: 'm2.402 10.6-.612.61-.364-.877.663-.598z',
            })),
          ew ||
            (ew = Cg.createElement('path', {
              fill: '#5DFF9A',
              d: 'm8.597 5.914-1.724-.093-.009-.877 1.737.144z',
            })),
          ex ||
            (ex = Cg.createElement('path', {
              fill: '#2CFFCA',
              d: 'm10.32 6.893-1.725-.154.002-.825 1.747.209z',
            })),
          ey ||
            (ey = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm11.847 8.484-1.604-.137.041-.707 1.64.193z',
            })),
          eS ||
            (eS = Cg.createElement('path', {
              fill: '#00F',
              d: 'm7.736 11.155-.766.355-.168.21.848-.36z',
            })),
          eM ||
            (eM = Cg.createElement('path', {
              fill: '#000CFF',
              d: 'm8.659 10.874-.923.281-.086.204.999-.285z',
            })),
          ek ||
            (ek = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm11.014 10.817-1.202.126.066-.045 1.265-.109z',
            })),
          e_ ||
            (e_ = Cg.createElement('path', {
              fill: '#0000F1',
              d: 'm6.97 11.51-.58.422-.254.218.666-.43z',
            })),
          eP ||
            (eP = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm3.78 6.025-1.257.306-.047-1 1.27-.27z',
            })),
          eU ||
            (eU = Cg.createElement('path', {
              fill: '#000089',
              d: 'm4.49 13.184-.268.591-.53-.224.342-.602z',
            })),
          eN ||
            (eN = Cg.createElement('path', {
              fill: '#006CFF',
              d: 'm2.09 9.735-.664.6-.3-.955.706-.589z',
            })),
          eI ||
            (eI = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm2.627 7.33-.99.463-.13-1.025 1.016-.437z',
            })),
          eX ||
            (eX = Cg.createElement('path', {
              fill: '#06ECF1',
              d: 'm11.926 7.833-1.64-.193.034-.747 1.668.249z',
            })),
          eQ ||
            (eQ = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm6.864 4.944-1.64-.012.009-.901 1.637.057z',
            })),
          eL ||
            (eL = Cg.createElement('path', {
              fill: '#0024FF',
              d: 'm9.693 10.667-1.034.207-.01.2 1.102-.208z',
            })),
          e$ ||
            (e$ = Cg.createElement('path', {
              fill: '#0000AD',
              d: 'm5.665 12.64-.286.534-.44.086.368-.546z',
            })),
          eO ||
            (eO = Cg.createElement('path', {
              fill: '#04F',
              d: 'm12.708 10.421-1.307-.02.125-.351 1.354.06z',
            })),
          eR ||
            (eR = Cg.createElement('path', {
              fill: '#005CFF',
              d: 'm12.88 10.11-1.354-.06.117-.444 1.399.107z',
            })),
          eT ||
            (eT = Cg.createElement('path', {
              fill: '#5DFF9A',
              d: 'm10.344 6.123-1.747-.209.004-.826 1.757.262z',
            })),
          ej ||
            (ej = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm5.225 4.932-1.48.128.01-.942 1.48-.087z',
            })),
          eG ||
            (eG = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm10.89 10.732-1.142.134.062.077 1.202-.126z',
            })),
          eK ||
            (eK = Cg.createElement('path', {
              fill: '#0000DF',
              d: 'M6.39 11.932 6 12.409l-.336.231.471-.49z',
            })),
          eq ||
            (eq = Cg.createElement('path', {
              fill: '#0038FF',
              d: 'm12.528 10.636-1.256.013.13-.248 1.306.02z',
            })),
          eV ||
            (eV = Cg.createElement('path', {
              fill: '#0078FF',
              d: 'm13.044 9.713-1.401-.107.109-.525 1.442.156z',
            })),
          eH ||
            (eH = Cg.createElement('path', {
              fill: '#90FF66',
              d: 'm8.6 5.088-1.736-.144.007-.857 1.735.192z',
            })),
          eW ||
            (eW = Cg.createElement('path', {
              fill: '#00008D',
              d: 'm4.942 13.26-.193.577-.527-.062.268-.59z',
            })),
          eJ ||
            (eJ = Cg.createElement('path', {
              fill: '#001CFF',
              d: 'm7.814 10.817-.69.341-.154.352.766-.355z',
            })),
          eZ ||
            (eZ = Cg.createElement('path', {
              fill: '#0034FF',
              d: 'm12.347 10.75-1.205.04.13-.141 1.256-.013z',
            })),
          eY ||
            (eY = Cg.createElement('path', {
              fill: '#0030FF',
              d: 'm8.668 10.547-.853.27-.08.338.924-.281z',
            })),
          e1 ||
            (e1 = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm13.194 9.237-1.443-.156.095-.595 1.476.211z',
            })),
          e0 ||
            (e0 = Cg.createElement('path', {
              fill: '#33FFC4',
              d: 'm11.988 7.142-1.668-.25.024-.77 1.688.307z',
            })),
          e2 ||
            (e2 = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm1.832 8.79-.706.588-.228-1.012.738-.571z',
            })),
          e3 ||
            (e3 = Cg.createElement('path', {
              fill: '#0000C8',
              d: 'm2.674 12.645-.286.653-.517-.65.34-.661z',
            })),
          e4 ||
            (e4 = Cg.createElement('path', {
              fill: '#0000A4',
              d: 'm3.172 13.171-.23.64-.555-.513.285-.653z',
            })),
          e5 ||
            (e5 = Cg.createElement('path', {
              fill: '#0008FF',
              d: 'm7.124 11.158-.503.408-.232.368.581-.422z',
            })),
          e6 ||
            (e6 = Cg.createElement('path', {
              fill: '#00F',
              d: 'm2.21 11.986-.34.662-.467-.771.387-.668z',
            })),
          e7 ||
            (e7 = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm3.746 5.06-1.27.27.013-.976 1.265-.236z',
            })),
          e8 ||
            (e8 = Cg.createElement('path', {
              fill: '#0034FF',
              d: 'm12.169 10.76-1.155.057.128-.028 1.205-.039z',
            })),
          e9 ||
            (e9 = Cg.createElement('path', {
              fill: '#003CFF',
              d: 'm10.777 10.534-1.084.133.057.199 1.143-.134z',
            })),
          te ||
            (te = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm2.523 6.331-1.016.437L1.45 5.74l1.027-.408z',
            })),
          tt ||
            (tt = Cg.createElement('path', {
              fill: '#000089',
              d: 'm3.693 13.55-.173.625-.579-.364.23-.64z',
            })),
          tl ||
            (tl = Cg.createElement('path', {
              fill: '#04F',
              d: 'm9.643 10.352-.973.195-.01.327 1.034-.207z',
            })),
          ta ||
            (ta = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.323 8.696-1.476-.212.081-.653 1.503.27z',
            })),
          tr ||
            (tr = Cg.createElement('path', {
              fill: '#90FF66',
              d: 'M10.359 5.35 8.6 5.088l.005-.807 1.755.313z',
            })),
          tm ||
            (tm = Cg.createElement('path', {
              fill: '#CAFF2C',
              d: 'M6.87 4.089 5.236 4.03l.037-.857 1.622.1z',
            })),
          ti ||
            (ti = Cg.createElement('path', {
              fill: '#0000CD',
              d: 'm6.001 12.41-.204.518-.414.244.286-.534z',
            })),
          tn ||
            (tn = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm1.79 11.21-.387.667-.406-.874.429-.67z',
            })),
          tc ||
            (tc = Cg.createElement('path', {
              fill: '#CEFF29',
              d: 'm5.235 4.03-1.477.088.054-.894 1.46-.049z',
            })),
          tF ||
            (tF = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'M8.606 4.28 6.87 4.089l.02-.813 1.72.238z',
            })),
          td ||
            (td = Cg.createElement('path', {
              fill: '#00009F',
              d: 'm5.381 13.174-.122.56-.511.103.192-.577z',
            })),
          th ||
            (th = Cg.createElement('path', {
              fill: '#60FF97',
              d: 'm12.032 6.428-1.688-.306.014-.772 1.697.36z',
            })),
          tp ||
            (tp = Cg.createElement('path', {
              fill: '#0040FF',
              d: 'm11.998 10.667-1.107.065.122.085 1.155-.056z',
            })),
          tf ||
            (tf = Cg.createElement('path', {
              fill: '#00F',
              d: 'm6.623 11.565-.312.46-.308.384.388-.477z',
            })),
          tE ||
            (tE = Cg.createElement('path', {
              fill: 'navy',
              d: 'm4.222 13.775-.111.606-.59-.204.171-.624z',
            })),
          to ||
            (to = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm1.637 7.793-.74.572-.15-1.043.76-.555z',
            })),
          tz ||
            (tz = Cg.createElement('path', {
              fill: '#0FF8E7',
              d: 'm13.432 8.102-1.506-.268.062-.69 1.528.326z',
            })),
          ts ||
            (ts = Cg.createElement('path', {
              fill: '#0058FF',
              d: 'm8.678 10.102-.793.25-.07.465.854-.27z',
            })),
          tu ||
            (tu = Cg.createElement('path', {
              fill: '#0048FF',
              d: 'm7.885 10.351-.625.322-.136.486.69-.34z',
            })),
          tA ||
            (tA = Cg.createElement('path', {
              fill: '#0058FF',
              d: 'm10.674 10.23-1.033.122.051.315 1.084-.133z',
            })),
          tg ||
            (tg = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm1.426 10.333-.429.67-.334-.957.463-.668z',
            })),
          tb ||
            (tb = Cg.createElement('path', {
              fill: '#0060FF',
              d: 'm13.85 10.501-1.143-.081.173-.31 1.18.12z',
            })),
          tv ||
            (tv = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm13.634 10.684-1.106-.048.18-.215 1.143.082z',
            })),
          tC ||
            (tC = Cg.createElement('path', {
              fill: '#0074FF',
              d: 'm14.06 10.23-1.18-.12.164-.397 1.213.164z',
            })),
          tD ||
            (tD = Cg.createElement('path', {
              fill: '#006CFF',
              d: 'm9.597 9.926-.92.176-.009.445.974-.195z',
            })),
          tB ||
            (tB = Cg.createElement('path', {
              fill: '#0038FF',
              d: 'm7.26 10.673-.434.384-.204.508.504-.409z',
            })),
          tw ||
            (tw = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm11.838 10.47-1.06.063.113.197 1.107-.065z',
            })),
          tx ||
            (tx = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'M10.362 4.594 8.607 4.28l.006-.768 1.743.36z',
            })),
          ty ||
            (ty = Cg.createElement('path', {
              fill: '#000084',
              d: 'm4.75 13.837-.053.586-.586-.04.111-.608z',
            })),
          tS ||
            (tS = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm2.476 5.33-1.027.41.015-1.008 1.024-.379z',
            })),
          tM ||
            (tM = Cg.createElement('path', {
              fill: '#004CFF',
              d: 'm13.415 10.773-1.069-.023.182-.114 1.106.048z',
            })),
          tk ||
            (tk = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm3.755 4.118-1.265.236.072-.93 1.25-.2z',
            })),
          t_ ||
            (t_ = Cg.createElement('path', {
              fill: '#0090FF',
              d: 'm14.255 9.878-1.213-.163.151-.478 1.243.215z',
            })),
          tP ||
            (tP = Cg.createElement('path', {
              fill: '#36FFC1',
              d: 'm13.517 7.467-1.528-.326.043-.713 1.543.383z',
            })),
          tU ||
            (tU = Cg.createElement('path', {
              fill: '#8DFF6A',
              d: 'm12.055 5.71-1.697-.36.004-.756 1.695.412z',
            })),
          tN ||
            (tN = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm6.892 3.275-1.622-.1.067-.787 1.591.138z',
            })),
          tI ||
            (tI = Cg.createElement('path', {
              fill: '#00F',
              d: 'm6.31 12.025-.137.5-.379.402.204-.518z',
            })),
          tX ||
            (tX = Cg.createElement('path', {
              fill: '#0050FF',
              d: 'm13.2 10.777-1.031-.008.178-.015 1.069.032z',
            })),
          tQ ||
            (tQ = Cg.createElement('path', {
              fill: '#0000C4',
              d: 'm5.795 12.928-.052.54-.483.266.123-.56z',
            })),
          tL ||
            (tL = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm14.435 9.452-1.241-.215.13-.541 1.27.268z',
            })),
          t$ ||
            (t$ = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm8.612 3.513-1.72-.238.036-.749 1.69.279z',
            })),
          tO ||
            (tO = Cg.createElement('path', {
              fill: '#0080FF',
              d: 'm10.585 9.823-.988.103.046.426 1.032-.123z',
            })),
          tR ||
            (tR = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm5.27 3.175-1.46.049.099-.825 1.428-.012z',
            })),
          tT ||
            (tT = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm1.507 6.768-.76.555-.067-1.05.77-.534z',
            })),
          tj ||
            (tj = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm1.126 9.378-.463.668L.41 9.028l.49-.662z',
            })),
          tG ||
            (tG = Cg.createElement('path', {
              fill: '#002CFF',
              d: 'm6.826 11.057-.245.438-.27.53.311-.46z',
            })),
          tK ||
            (tK = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm11.694 10.176-1.02.053.102.305 1.062-.064z',
            })),
          tq ||
            (tq = Cg.createElement('path', {
              fill: '#00009F',
              d: 'm2.942 13.81-.05.62-.578-.504.073-.628z',
            })),
          tV ||
            (tV = Cg.createElement('path', {
              fill: '#0000C8',
              d: 'm2.387 13.298-.072.628-.54-.64.095-.636z',
            })),
          tH ||
            (tH = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm8.687 9.548-.743.22-.06.583.794-.25z',
            })),
          tW ||
            (tW = Cg.createElement('path', {
              fill: '#005CFF',
              d: 'm12.993 10.664-.995.003.17.094 1.032.005z',
            })),
          tJ ||
            (tJ = Cg.createElement('path', {
              fill: '#007CFF',
              d: 'm7.944 9.769-.571.293-.114.612.624-.32z',
            })),
          tZ ||
            (tZ = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm14.592 8.964-1.27-.268.11-.594 1.29.324z',
            })),
          tY ||
            (tY = Cg.createElement('path', {
              fill: '#000089',
              d: 'm3.52 14.175-.025.61-.603-.355.05-.62z',
            })),
          t1 ||
            (t1 = Cg.createElement('path', {
              fill: '#00009B',
              d: 'm5.26 13.734.006.565-.569.122.053-.586z',
            })),
          t0 ||
            (t0 = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm13.575 6.811-1.543-.383.023-.717 1.55.437z',
            })),
          t2 ||
            (t2 = Cg.createElement('path', {
              fill: '#0000FA',
              d: 'm1.87 12.648-.094.638-.486-.766.113-.641z',
            })),
          t3 ||
            (t3 = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm9.561 9.4-.875.148-.008.554.919-.176z',
            })),
          t4 ||
            (t4 = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm10.355 3.873-1.743-.36.007-.708 1.718.401z',
            })),
          t5 ||
            (t5 = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm12.057 5.006-1.695-.412-.007-.721 1.684.46z',
            })),
          t6 ||
            (t6 = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm7.374 10.061-.378.358-.17.638.434-.384z',
            })),
          t7 ||
            (t7 = Cg.createElement('path', {
              fill: 'navy',
              d: 'M4.11 14.381v.599l-.613-.195.025-.61z',
            })),
          t8 ||
            (t8 = Cg.createElement('path', {
              fill: '#006CFF',
              d: 'M12.8 10.47h-.962l.16.195.995-.002z',
            })),
          t9 ||
            (t9 = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'm2.489 4.354-1.025.378.088-.96 1.008-.348z',
            })),
          le ||
            (le = Cg.createElement('path', {
              fill: '#19FFDE',
              d: 'm14.722 8.424-1.29-.322.084-.634 1.306.38z',
            })),
          lt ||
            (lt = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm3.81 3.224-1.25.2.13-.858L3.909 2.4z',
            })),
          ll ||
            (ll = Cg.createElement('path', {
              fill: '#0024FF',
              d: 'm1.403 11.877-.114.64-.422-.87.131-.644z',
            })),
          la ||
            (la = Cg.createElement('path', {
              fill: '#0094FF',
              d: 'm11.57 9.79-.985.033.089.406 1.02-.053z',
            })),
          lr ||
            (lr = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm10.512 9.326-.951.075.035.525.988-.103z',
            })),
          lm ||
            (lm = Cg.createElement('path', {
              fill: '#FFB200',
              d: 'm6.928 2.526-1.592-.139.094-.699 1.546.173z',
            })),
          li ||
            (li = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm.897 8.366-.49.662L.24 7.976l.506-.653z',
            })),
          ln ||
            (ln = Cg.createElement('path', {
              fill: '#0000F1',
              d: 'm6.173 12.524.01.52-.442.425.053-.541z',
            })),
          lc ||
            (lc = Cg.createElement('path', {
              fill: '#FFBD00',
              d: 'm8.62 2.805-1.692-.279.05-.665 1.65.314z',
            })),
          lF ||
            (lF = Cg.createElement('path', {
              fill: '#0020FF',
              d: 'm6.582 11.495-.072.477-.337.552.135-.499z',
            })),
          ld ||
            (ld = Cg.createElement('path', {
              fill: '#8DFF6A',
              d: 'm13.605 6.148-1.551-.437.002-.705 1.549.49z',
            })),
          lh ||
            (lh = Cg.createElement('path', {
              fill: '#006CFF',
              d: 'm14.517 10.78-.883-.096.216-.183.908.128z',
            })),
          lp ||
            (lp = Cg.createElement('path', {
              fill: '#0078FF',
              d: 'm14.758 10.63-.907-.129.209-.27.931.163z',
            })),
          lf ||
            (lf = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm1.45 5.74-.77.533.017-1.03.767-.51z',
            })),
          lE ||
            (lE = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm14.273 10.846-.857-.073.219-.09.883.098z',
            })),
          lo ||
            (lo = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm14.99 10.396-.932-.163.197-.353.953.209z',
            })),
          lz ||
            (lz = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'M5.337 2.388 3.907 2.4l.14-.733 1.382.022z',
            })),
          ls ||
            (ls = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm8.695 8.898-.704.186-.047.685.743-.221z',
            })),
          lu ||
            (lu = Cg.createElement('path', {
              fill: '#000084',
              d: 'm4.697 14.423.024.587-.613-.03v-.599z',
            })),
          lA ||
            (lA = Cg.createElement('path', {
              fill: '#00B',
              d: 'm5.743 13.469.06.542-.537.288-.006-.565z',
            })),
          lg ||
            (lg = Cg.createElement('path', {
              fill: '#0084FF',
              d: 'm12.626 10.184-.932-.009.144.295h.963z',
            })),
          lb ||
            (lb = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm6.996 10.42-.188.412-.226.663.244-.438z',
            })),
          lv ||
            (lv = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm14.823 7.848-1.306-.38.059-.657 1.317.437z',
            })),
          lC ||
            (lC = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm9.536 8.787-.841.11-.008.65.875-.146z',
            })),
          lD ||
            (lD = Cg.createElement('path', {
              fill: '#0064FF',
              d: 'm.997 11.003-.13.644-.348-.956.144-.646z',
            })),
          lB ||
            (lB = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm14.033 10.824-.833-.058.215.006.857.074z',
            })),
          lw ||
            (lw = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm7.991 9.084-.528.259-.089.718.572-.293z',
            })),
          lx ||
            (lx = Cg.createElement('path', {
              fill: '#00A4FF',
              d: 'm15.209 10.087-.954-.209.178-.426.973.257z',
            })),
          ly ||
            (ly = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm12.038 4.334-1.683-.461-.019-.667 1.662.504z',
            })),
          lS ||
            (lS = Cg.createElement('path', {
              fill: '#FFC800',
              d: 'm10.337 3.206-1.718-.401.008-.63 1.681.438z',
            })),
          lM ||
            (lM = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm11.468 9.321-.956.005.073.497.984-.034z',
            })),
          lk ||
            (lk = Cg.createElement('path', {
              fill: '#0074FF',
              d: 'm13.803 10.714-.81-.05.207.102.833.057z',
            })),
          l_ ||
            (l_ = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm15.408 9.709-.973-.257.156-.49.991.308z',
            })),
          lP ||
            (lP = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm10.46 8.75-.923.037.026.612.95-.073z',
            })),
          lU ||
            (lU = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm7.463 9.343-.334.326-.133.752.378-.358z',
            })),
          lN ||
            (lN = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm13.606 5.496-1.548-.49-.02-.672 1.54.537z',
            })),
          lI ||
            (lI = Cg.createElement('path', {
              fill: '#00A4FF',
              d: 'm12.475 9.816-.906-.028.123.386.932.009z',
            })),
          lX ||
            (lX = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm14.892 7.248-1.317-.437.03-.663 1.322.49z',
            })),
          lQ ||
            (lQ = Cg.createElement('path', {
              fill: '#000096',
              d: 'm5.266 14.299.047.576-.592.135-.024-.587z',
            })),
          lL ||
            (lL = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm.747 7.323-.506.653-.075-1.061.513-.642z',
            })),
          l$ ||
            (l$ = Cg.createElement('path', {
              fill: 'gold',
              d: 'm2.56 3.424-1.008.348.16-.888.98-.318z',
            })),
          lO ||
            (lO = Cg.createElement('path', {
              fill: '#FF7A00',
              d: 'm6.977 1.861-1.546-.173.12-.592 1.489.202z',
            })),
          lR ||
            (lR = Cg.createElement('path', {
              fill: '#FF9C00',
              d: 'm3.908 2.4-1.218.166.186-.763 1.172-.136z',
            })),
          lT ||
            (lT = Cg.createElement('path', {
              fill: '#FF8900',
              d: 'm8.627 2.175-1.65-.314.062-.563 1.597.343z',
            })),
          lj ||
            (lj = Cg.createElement('path', {
              fill: '#0084FF',
              d: 'm13.588 10.52-.788-.05.193.195.81.05z',
            })),
          lG ||
            (lG = Cg.createElement('path', {
              fill: '#00009F',
              d: 'm2.892 14.43.07.566-.576-.503-.072-.567z',
            })),
          lK ||
            (lK = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm15.582 9.271-.99-.307.13-.54 1.005.36z',
            })),
          lq ||
            (lq = Cg.createElement('path', {
              fill: '#0000C8',
              d: 'm2.315 13.926.071.567-.54-.641-.07-.566z',
            })),
          lV ||
            (lV = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm6.51 11.972.064.497-.39.575-.01-.52z',
            })),
          lH ||
            (lH = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm.663 10.046-.145.645-.263-1.017.155-.646z',
            })),
          lW ||
            (lW = Cg.createElement('path', {
              fill: '#000089',
              d: 'm3.496 14.785.07.565-.603-.354-.07-.566z',
            })),
          lJ ||
            (lJ = Cg.createElement('path', {
              fill: '#005CFF',
              d: 'm6.808 10.832-.019.454-.28.688.073-.479z',
            })),
          lZ ||
            (lZ = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm8.704 8.168-.678.145-.033.77.704-.185z',
            })),
          lY ||
            (lY = Cg.createElement('path', {
              fill: '#0000ED',
              d: 'm6.185 13.044.108.52-.49.447-.06-.542z',
            })),
          l1 ||
            (l1 = Cg.createElement('path', {
              fill: 'gold',
              d: 'm12 3.71-1.663-.504-.028-.593 1.63.539z',
            })),
          l0 ||
            (l0 = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm9.52 8.102-.816.066-.007.73.84-.11z',
            })),
          l2 ||
            (l2 = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm1.464 4.732-.767.513L.8 4.26l.752-.486z',
            })),
          l3 ||
            (l3 = Cg.createElement('path', {
              fill: '#0000FA',
              d: 'm1.776 13.286.07.566-.485-.764-.073-.571z',
            })),
          l4 ||
            (l4 = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm11.392 8.782-.933-.032.053.576.956-.005z',
            })),
          l5 ||
            (l5 = Cg.createElement('path', {
              fill: '#FF6F00',
              d: 'M5.43 1.688 4.05 1.667l.178-.62 1.323.05z',
            })),
          l6 ||
            (l6 = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm10.309 2.613-1.681-.438.009-.534 1.632.466z',
            })),
          l7 ||
            (l7 = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm8.024 8.313-.5.219-.06.81.527-.258z',
            })),
          l8 ||
            (l8 = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm13.394 10.246-.768-.062.175.285.787.052z',
            })),
          l9 ||
            (l9 = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm7.129 9.668-.144.383-.177.781.188-.412z',
            })),
          ae ||
            (ae = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm12.352 9.377-.884-.056.101.469.906.027z',
            })),
          at ||
            (at = Cg.createElement('path', {
              fill: '#1FFFD7',
              d: 'm15.727 8.785-1.005-.36.102-.577 1.015.414z',
            })),
          al ||
            (al = Cg.createElement('path', {
              fill: 'navy',
              d: 'm4.11 14.98.068.566-.612-.196-.07-.565z',
            })),
          aa ||
            (aa = Cg.createElement('path', {
              fill: '#8DFF6A',
              d: 'm14.927 6.64-1.322-.49v-.654l1.322.542z',
            })),
          ar ||
            (ar = Cg.createElement('path', {
              fill: '#E1FF16',
              d: 'm13.578 4.871-1.54-.537-.04-.624 1.522.58z',
            })),
          am ||
            (am = Cg.createElement('path', {
              fill: '#23FFD4',
              d: 'm10.424 8.11-.903-.008.015.686.922-.037z',
            })),
          ai ||
            (ai = Cg.createElement('path', {
              fill: '#0024FF',
              d: 'm1.29 12.518.072.571-.422-.87-.074-.57z',
            })),
          an ||
            (an = Cg.createElement('path', {
              fill: '#0084FF',
              d: 'm15.116 10.918-.6-.136.242-.151.612.163z',
            })),
          ac ||
            (ac = Cg.createElement('path', {
              fill: '#00B',
              d: 'm5.802 14.01.07.565-.56.3-.046-.576z',
            })),
          aF ||
            (aF = Cg.createElement('path', {
              fill: '#0080FF',
              d: 'm14.858 10.959-.585-.114.245-.066.597.14z',
            })),
          ad ||
            (ad = Cg.createElement('path', {
              fill: '#0090FF',
              d: 'm15.37 10.796-.612-.163.233-.234.625.2z',
            })),
          ah ||
            (ah = Cg.createElement('path', {
              fill: '#0084FF',
              d: 'm14.605 10.924-.571-.1.24.022.585.114z',
            })),
          ap ||
            (ap = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm15.616 10.595-.626-.199.218-.31.639.24z',
            })),
          af ||
            (af = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm7.525 8.532-.305.289-.091.847.334-.326z',
            })),
          aE ||
            (aE = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm.409 9.028-.154.646-.174-1.056.163-.642z',
            })),
          ao ||
            (ao = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm13.226 9.898-.75-.082.15.367.768.062z',
            })),
          az ||
            (az = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'M8.637 1.64 7.04 1.299l.073-.445 1.533.364z',
            })),
          as ||
            (as = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm15.839 8.262-1.016-.414.07-.6 1.02.467z',
            })),
          au ||
            (au = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm.68 6.273-.514.64.02-1.046.511-.622z',
            })),
          aA ||
            (aA = Cg.createElement('path', {
              fill: '#000084',
              d: 'm4.72 15.01.068.568-.61-.032-.068-.566z',
            })),
          ag ||
            (ag = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm7.04 1.298-1.49-.202.142-.466 1.42.223z',
            })),
          ab ||
            (ab = Cg.createElement('path', {
              fill: '#FFAB00',
              d: 'm11.94 3.152-1.631-.54-.039-.505 1.592.568z',
            })),
          av ||
            (av = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm14.362 10.808-.559-.094.23.11.572.1z',
            })),
          aC ||
            (aC = Cg.createElement('path', {
              fill: '#2CFFCA',
              d: 'm11.343 8.184-.92-.076.035.64.934.032z',
            })),
          aD ||
            (aD = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm15.847 10.326-.637-.24.198-.377.648.283z',
            })),
          aB ||
            (aB = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm2.69 2.566-.98.318.23-.791.935-.29z',
            })),
          aw ||
            (aw = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm4.048 1.667-1.172.136.236-.648 1.113-.108z',
            })),
          ax ||
            (ax = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm12.26 8.874-.868-.092.076.539.885.056z',
            })),
          ay ||
            (ay = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm9.516 7.36-.808.018-.004.79.816-.066z',
            })),
          aS ||
            (aS = Cg.createElement('path', {
              fill: '#4DFFAA',
              d: 'm8.708 7.378-.666.096-.018.838.678-.144z',
            })),
          aM ||
            (aM = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm14.928 6.038-1.322-.542-.028-.625 1.314.59z',
            })),
          ak ||
            (ak = Cg.createElement('path', {
              fill: '#0058FF',
              d: 'm6.79 11.286.11.473-.326.712-.065-.497z',
            })),
          a_ ||
            (a_ = Cg.createElement('path', {
              fill: '#FF6F00',
              d: 'M10.27 2.107 8.639 1.64l.01-.424 1.577.487z',
            })),
          aP ||
            (aP = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm.867 11.647.075.571-.348-.952-.075-.576z',
            })),
          aU ||
            (aU = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'M13.52 4.29 12 3.71l-.06-.558 1.497.616z',
            })),
          aN ||
            (aN = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm6.574 12.47.153.497-.434.596-.108-.52z',
            })),
          aI ||
            (aI = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm6.985 10.05.023.426-.219.81.02-.453z',
            })),
          aX ||
            (aX = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm14.135 10.616-.546-.096.214.194.56.094z',
            })),
          aQ ||
            (aQ = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm10.411 7.42-.895-.06.004.742.904.008z',
            })),
          aL ||
            (aL = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm16.056 9.992-.648-.283.174-.438.657.33z',
            })),
          a$ ||
            (a$ = Cg.createElement('path', {
              fill: '#FF3F00',
              d: 'm5.55 1.096-1.323-.049.214-.49L5.692.63z',
            })),
          aO ||
            (aO = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'M1.553 3.772.8 4.258l.188-.913.725-.46z',
            })),
          aR ||
            (aR = Cg.createElement('path', {
              fill: '#49FFAD',
              d: 'm8.042 7.474-.486.175-.031.883.5-.22z',
            })),
          aT ||
            (aT = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm13.088 9.485-.734-.108.122.44.75.082z',
            })),
          aj ||
            (aj = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm15.915 7.715-1.02-.467.035-.609 1.024.52z',
            })),
          aG ||
            (aG = Cg.createElement('path', {
              fill: '#09F0EE',
              d: 'm7.22 8.82-.113.35-.123.88.144-.382z',
            })),
          aK ||
            (aK = Cg.createElement('path', {
              fill: '#00009B',
              d: 'm5.313 14.875.066.569-.591.134-.067-.568z',
            })),
          aq ||
            (aq = Cg.createElement('path', {
              fill: '#0000E8',
              d: 'm6.294 13.564.089.552-.512.459-.069-.564z',
            })),
          aV ||
            (aV = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm13.93 10.352-.536-.107.194.275.547.096z',
            })),
          aH ||
            (aH = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm16.239 9.601-.657-.33.145-.486.664.38z',
            })),
          aW ||
            (aW = Cg.createElement('path', {
              fill: '#33FFC4',
              d: 'm12.2 8.321-.857-.136.049.597.867.092z',
            })),
          aJ ||
            (aJ = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm11.323 7.546-.912-.127.013.69.918.075z',
            })),
          aZ ||
            (aZ = Cg.createElement('path', {
              fill: '#FF3B00',
              d: 'M8.647 1.217 7.112.853 7.194.54l1.462.378z',
            })),
          aY ||
            (aY = Cg.createElement('path', {
              fill: '#0000A8',
              d: 'm2.963 14.997.108.507-.571-.498-.114-.513z',
            })),
          a1 ||
            (a1 = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm14.891 5.46-1.313-.589-.058-.58 1.3.63z',
            })),
          a0 ||
            (a0 = Cg.createElement('path', {
              fill: '#FF8600',
              d: 'm11.862 2.673-1.592-.567-.047-.403 1.543.588z',
            })),
          a2 ||
            (a2 = Cg.createElement('path', {
              fill: '#0000CD',
              d: 'm2.386 14.493.114.513-.53-.634-.123-.52z',
            })),
          a3 ||
            (a3 = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm.241 7.976-.163.642L0 7.551l.163-.638z',
            })),
          a4 ||
            (a4 = Cg.createElement('path', {
              fill: '#46FFB1',
              d: 'm7.557 7.649-.29.249-.047.923.305-.29z',
            })),
          a5 ||
            (a5 = Cg.createElement('path', {
              fill: '#FF2900',
              d: 'M7.112.853 5.692.63l.162-.327 1.34.237z',
            })),
          a6 ||
            (a6 = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm.518 10.691.075.576-.264-1.013-.074-.58z',
            })),
          a7 ||
            (a7 = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm9.523 6.584-.81-.038-.005.832.808-.017z',
            })),
          a8 ||
            (a8 = Cg.createElement('path', {
              fill: '#000092',
              d: 'm3.565 15.35.102.507-.596-.353-.108-.508z',
            })),
          a9 ||
            (a9 = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm13.436 3.768-1.497-.616-.078-.479 1.465.644z',
            })),
          re ||
            (re = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm8.713 6.546-.668.046-.003.883.666-.096z',
            })),
          rt ||
            (rt = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm12.985 9.017-.726-.143.094.503.734.108z',
            })),
          rl ||
            (rl = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm10.224 1.704-1.578-.487.01-.3 1.513.498z',
            })),
          ra ||
            (ra = Cg.createElement('path', {
              fill: '#8AFF6D',
              d: 'm15.952 7.16-1.024-.52v-.602l1.023.57z',
            })),
          rr ||
            (rr = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.697 5.245-.51.624.115-1.003L.8 4.26z',
            })),
          rm ||
            (rm = Cg.createElement('path', {
              fill: '#00F',
              d: 'm1.847 13.852.122.52-.48-.755-.125-.53z',
            })),
          ri ||
            (ri = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.753 10.02-.527-.122.168.348.536.106z',
            })),
          rn ||
            (rn = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm10.418 6.698-.898-.114-.007.775.895.059z',
            })),
          rc ||
            (rc = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'm16.391 9.163-.664-.38.112-.522.67.43z',
            })),
          rF ||
            (rF = Cg.createElement('path', {
              fill: '#FF3000',
              d: 'm4.227 1.047-1.115.108.286-.512L4.441.558z',
            })),
          rd ||
            (rd = Cg.createElement('path', {
              fill: '#FF5900',
              d: 'm2.876 1.803-.934.29.292-.673.878-.265z',
            })),
          rh ||
            (rh = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm15.126 11.108-.268-.149.258-.044.271.167z',
            })),
          rp ||
            (rp = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm15.387 11.084-.271-.166.254-.122.276.192z',
            })),
          rf ||
            (rf = Cg.createElement('path', {
              fill: '#000084',
              d: 'm4.178 15.546.096.503-.607-.192-.102-.505z',
            })),
          rE ||
            (rE = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm14.867 11.06-.263-.136.254.036.267.148z',
            })),
          ro ||
            (ro = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm8.045 6.592-.487.127v.93l.486-.174z',
            })),
          rz ||
            (rz = Cg.createElement('path', {
              fill: '#00A4FF',
              d: 'm15.646 10.986-.276-.19.245-.2.28.224z',
            })),
          rs ||
            (rs = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm7.008 10.476.147.449-.254.832-.112-.471z',
            })),
          ru ||
            (ru = Cg.createElement('path', {
              fill: '#00B',
              d: 'm5.871 14.575.065.571-.557.298-.066-.569z',
            })),
          rA ||
            (rA = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm6.9 11.758.19.477-.363.732-.153-.498z',
            })),
          rg ||
            (rg = Cg.createElement('path', {
              fill: '#FF1600',
              d: 'M5.692.63 4.441.558l.242-.344 1.17.088z',
            })),
          rb ||
            (rb = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm12.175 7.732-.852-.186.02.64.857.135z',
            })),
          rv ||
            (rv = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm14.622 10.939-.26-.13.246.115.263.136z',
            })),
          rC ||
            (rC = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm1.362 13.088.126.529-.418-.858-.13-.538z',
            })),
          rD ||
            (rD = Cg.createElement('path', {
              fill: '#06ECF1',
              d: 'm7.106 9.17.051.396-.15.91-.022-.425z',
            })),
          rB ||
            (rB = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm14.82 4.92-1.3-.63-.085-.522 1.282.665z',
            })),
          rw ||
            (rw = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm11.333 6.881-.915-.183-.009.721.912.127z',
            })),
          rx ||
            (rx = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm15.895 10.818-.28-.223.231-.27.283.259z',
            })),
          ry ||
            (ry = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm13.607 9.635-.519-.15.138.413.527.122z',
            })),
          rS ||
            (rS = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm11.765 2.292-1.543-.588-.054-.289 1.488.6z',
            })),
          rM ||
            (rM = Cg.createElement('path', {
              fill: '#FF9100',
              d: 'm1.713 2.884-.725.461.267-.816.687-.435z',
            })),
          rk ||
            (rk = Cg.createElement('path', {
              fill: '#46FFB1',
              d: 'm16.508 8.692-.67-.43.077-.547.672.48z',
            })),
          r_ ||
            (r_ = Cg.createElement('path', {
              fill: '#39FFBE',
              d: 'M12.918 8.506 12.2 8.32l.06.553.725.143z',
            })),
          rP ||
            (rP = Cg.createElement('path', {
              fill: '#F20',
              d: 'M8.656.918 7.194.54l.09-.172 1.38.381z',
            })),
          rU ||
            (rU = Cg.createElement('path', {
              fill: '#ADFF49',
              d: 'm15.951 6.608-1.023-.57-.036-.578 1.018.615z',
            })),
          rN ||
            (rN = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.267 7.898-.099.314-.062.958.114-.35z',
            })),
          rI ||
            (rI = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm14.39 10.749-.255-.133.227.192.26.131z',
            })),
          rX ||
            (rX = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm13.326 3.319-1.465-.646-.096-.381 1.428.663z',
            })),
          rQ ||
            (rQ = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm6.727 12.967.107.542-.451.607-.09-.552z',
            })),
          rL ||
            (rL = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm9.54 5.791-.824-.095-.003.85.81.038z',
            })),
          r$ ||
            (r$ = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm16.129 10.584-.283-.258.21-.334.285.297z',
            })),
          rO ||
            (rO = Cg.createElement('path', {
              fill: '#00008D',
              d: 'm4.788 15.578.09.503-.604-.032-.096-.503z',
            })),
          rR ||
            (rR = Cg.createElement('path', {
              fill: '#FF3800',
              d: 'M10.17 1.415 8.655.918l.01-.168 1.442.501z',
            })),
          rT ||
            (rT = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm.255 9.674.076.58-.175-1.05-.077-.585z',
            })),
          rj ||
            (rj = Cg.createElement('path', {
              fill: '#ADFF49',
              d: 'm10.45 5.965-.91-.174-.017.793.898.114z',
            })),
          rG ||
            (rG = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm8.716 5.696-.684-.01.013.905.668-.045z',
            })),
          rK ||
            (rK = Cg.createElement('path', {
              fill: '#F60B00',
              d: 'M7.194.54 5.852.302l.176-.18 1.255.246z',
            })),
          rq ||
            (rq = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm7.558 6.718-.29.206v.974l.288-.25z',
            })),
          rV ||
            (rV = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm.166 6.913-.163.638.02-1.052.164-.632z',
            })),
          rH ||
            (rH = Cg.createElement('path', {
              fill: '#00C0FF',
              d: 'm14.182 10.494-.252-.142.204.264.256.133z',
            })),
          rW ||
            (rW = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm.94 12.22.13.538-.343-.942-.134-.55z',
            })),
          rJ ||
            (rJ = Cg.createElement('path', {
              fill: '#1FFFD7',
              d: 'm13.497 9.199-.512-.182.103.468.52.15z',
            })),
          rZ ||
            (rZ = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm16.341 10.29-.285-.298.183-.391.288.34z',
            })),
          rY ||
            (rY = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm12.187 7.122-.854-.24-.01.665.852.186z',
            })),
          r1 ||
            (r1 = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm16.587 8.195-.672-.48.037-.556.674.528z',
            })),
          r0 ||
            (r0 = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm14.717 4.433-1.281-.665-.11-.45 1.257.695z',
            })),
          r2 ||
            (r2 = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm11.374 6.208-.924-.245-.03.735.913.183z',
            })),
          r3 ||
            (r3 = Cg.createElement('path', {
              fill: '#BAFF3C',
              d: 'm8.032 5.686-.504.077.03.955.487-.126z',
            })),
          r4 ||
            (r4 = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm12.89 7.964-.715-.232.024.59.719.184z',
            })),
          r5 ||
            (r5 = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm11.658 2.014-1.489-.599-.06-.165 1.428.6z',
            })),
          r6 ||
            (r6 = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm.8 4.258-.498.606.209-.933.476-.586z',
            })),
          r7 ||
            (r7 = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm15.91 6.075-1.018-.615-.071-.54 1.009.654z',
            })),
          r8 ||
            (r8 = Cg.createElement('path', {
              fill: '#F10800',
              d: 'M4.44.558 3.399.643 3.72.281l.963-.067z',
            })),
          r9 ||
            (r9 = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm14.001 10.18-.248-.16.177.33.252.142z',
            })),
          me ||
            (me = Cg.createElement('path', {
              fill: '#0000ED',
              d: 'm6.383 14.116.064.574-.51.456-.066-.572z',
            })),
          mt ||
            (mt = Cg.createElement('path', {
              fill: '#FF7A00',
              d: 'm13.194 2.955-1.429-.663-.109-.278 1.382.674z',
            })),
          ml ||
            (ml = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'M5.853.302 4.683.214l.265-.188L6.03.123z',
            })),
          ma ||
            (ma = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm9.57 5.004-.852-.154v.846l.824.095z',
            })),
          mr ||
            (mr = Cg.createElement('path', {
              fill: '#FA0F00',
              d: 'M8.666.749 7.286.368 7.38.343l1.296.376z',
            })),
          mm ||
            (mm = Cg.createElement('path', {
              fill: '#FF2500',
              d: 'm3.112 1.155-.88.265.35-.536.816-.24z',
            })),
          mi ||
            (mi = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm16.527 9.941-.288-.34.152-.437.29.384z',
            })),
          mn ||
            (mn = Cg.createElement('path', {
              fill: '#00009F',
              d: 'm5.379 15.444.084.506-.585.131-.09-.503z',
            })),
          mc ||
            (mc = Cg.createElement('path', {
              fill: '#FF2500',
              d: 'M10.109 1.25 8.666.75l.01-.03 1.367.494z',
            })),
          mF ||
            (mF = Cg.createElement('path', {
              fill: '#DBFF1C',
              d: 'm10.5 5.24-.932-.236-.029.787.91.174z',
            })),
          md ||
            (md = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm8.718 4.85-.714-.066.028.902.684.01z',
            })),
          mh ||
            (mh = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm7.157 9.566.173.427-.175.933-.147-.45z',
            })),
          mp ||
            (mp = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm13.426 8.727-.508-.221.067.51.512.183z',
            })),
          mf ||
            (mf = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm7.156 10.926.218.457-.284.852-.19-.477z',
            })),
          mE ||
            (mE = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.168 8.212.066.367-.077.988-.05-.397z',
            })),
          mo ||
            (mo = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'M7.285.368 6.03.123 6.216.1 7.38.344z',
            })),
          mz ||
            (mz = Cg.createElement('path', {
              fill: '#0000B2',
              d: 'm3.071 15.504.107.426-.56-.49-.118-.434z',
            })),
          ms ||
            (ms = Cg.createElement('path', {
              fill: '#8AFF6D',
              d: 'm16.626 7.687-.674-.528v-.551l.67.574z',
            })),
          mu ||
            (mu = Cg.createElement('path', {
              fill: '#0000DA',
              d: 'm2.5 15.006.117.434-.522-.621-.127-.45z',
            })),
          mA ||
            (mA = Cg.createElement('path', {
              fill: '#A7FF50',
              d: 'm12.234 6.506-.86-.298-.041.673.854.241z',
            })),
          mg ||
            (mg = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm7.267 6.924-.099.277v1.011l.099-.314z',
            })),
          mb ||
            (mb = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm13.853 9.816-.245-.181.145.385.248.159z',
            })),
          mv ||
            (mv = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm15.052 11.286.074-.176.26-.025-.076.192z',
            })),
          mC ||
            (mC = Cg.createElement('path', {
              fill: '#FFAB00',
              d: 'm14.582 4.011-1.258-.694-.133-.363 1.229.711z',
            })),
          mD ||
            (mD = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm.593 11.268.134.548-.26-1.001-.137-.562z',
            })),
          mB ||
            (mB = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'M11.443 5.544 10.5 5.24l-.051.725.923.245z',
            })),
          mw ||
            (mw = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm14.797 11.225.071-.164.258.049-.074.176z',
            })),
          mx ||
            (mx = Cg.createElement('path', {
              fill: '#F50',
              d: 'm1.942 2.093-.687.435.342-.698.637-.41z',
            })),
          my ||
            (my = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm.079 8.618.077.586-.078-1.061-.077-.589z',
            })),
          mS ||
            (mS = Cg.createElement('path', {
              fill: '#00009B',
              d: 'm3.667 15.857.095.419-.585-.344-.106-.428z',
            })),
          mM ||
            (mM = Cg.createElement('path', {
              fill: '#FF3F00',
              d: 'm11.537 1.85-1.429-.6-.065-.037 1.365.591z',
            })),
          mk ||
            (mk = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm15.31 11.276.077-.192.26-.098-.083.214z',
            })),
          m_ ||
            (m_ = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm7.528 5.763-.307.163.046 1 .29-.207z',
            })),
          mP ||
            (mP = Cg.createElement('path', {
              fill: '#0050FF',
              d: 'm7.09 12.235.123.53-.379.742-.107-.541z',
            })),
          mU ||
            (mU = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm12.902 7.408-.715-.286-.012.61.715.233z',
            })),
          mN ||
            (mN = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm16.681 9.548-.29-.384.118-.472.29.43z',
            })),
          mI ||
            (mI = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm15.83 5.575-1.009-.653-.104-.488.996.688z',
            })),
          mX ||
            (mX = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm14.553 11.1.068-.161.247.122-.07.164z',
            })),
          mQ ||
            (mQ = Cg.createElement('path', {
              fill: '#00F',
              d: 'm1.97 14.372.127.448-.472-.74-.136-.462z',
            })),
          mL ||
            (mL = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm13.04 2.688-1.382-.674-.123-.163 1.335.674z',
            })),
          m$ ||
            (m$ = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm15.566 11.2.082-.214.25-.168-.082.24z',
            })),
          mO ||
            (mO = Cg.createElement('path', {
              fill: 'gold',
              d: 'm9.608 4.245-.89-.214v.82l.851.153z',
            })),
          mR ||
            (mR = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm8.003 4.784-.535.026.06.953.504-.077z',
            })),
          mT ||
            (mT = Cg.createElement('path', {
              fill: '#ED0400',
              d: 'M8.676.72 7.38.342l.097.122 1.208.363z',
            })),
          mj ||
            (mj = Cg.createElement('path', {
              fill: '#FF1E00',
              d: 'M10.043 1.213 8.676.719l.009.11 1.29.478z',
            })),
          mG ||
            (mG = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm10.572 4.541-.964-.296-.039.76.93.235z',
            })),
          mK ||
            (mK = Cg.createElement('path', {
              fill: '#00C0FF',
              d: 'm14.325 10.91.065-.162.231.19-.068.16z',
            })),
          mq ||
            (mq = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.186 5.867-.163.632.122-1.01.159-.625z',
            })),
          mV ||
            (mV = Cg.createElement('path', {
              fill: '#000092',
              d: 'm4.274 16.05.082.415-.596-.191-.093-.417z',
            })),
          mH ||
            (mH = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm8.717 4.03-.757-.122.043.875.714.067z',
            })),
          mW ||
            (mW = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm15.813 11.058.081-.24.234-.234-.086.27z',
            })),
          mJ ||
            (mJ = Cg.createElement('path', {
              fill: '#5DFF9A',
              d: 'm13.398 8.23-.507-.266.028.542.509.22z',
            })),
          mZ ||
            (mZ = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm13.742 9.41-.245-.211.11.436.244.181z',
            })),
          mY ||
            (mY = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm16.622 7.182-.672-.574-.041-.533.668.615z',
            })),
          m1 ||
            (m1 = Cg.createElement('path', {
              fill: '#C80000',
              d: 'M6.03.123 4.949.026 5.23 0l.984.1z',
            })),
          m0 ||
            (m0 = Cg.createElement('path', {
              fill: '#0000C4',
              d: 'm5.936 15.146.079.511-.553.293-.083-.506z',
            })),
          m2 ||
            (m2 = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm14.118 10.664.064-.17.208.255-.065.163z',
            })),
          m3 ||
            (m3 = Cg.createElement('path', {
              fill: '#CD0000',
              d: 'M4.683.214 3.72.28l.353-.2.876-.055z',
            })),
          m4 ||
            (m4 = Cg.createElement('path', {
              fill: '#CEFF29',
              d: 'm12.316 5.902-.873-.358-.07.664.86.298z',
            })),
          m5 ||
            (m5 = Cg.createElement('path', {
              fill: '#FF3800',
              d: 'm11.408 1.804-1.365-.591-.068.094 1.3.57z',
            })),
          m6 ||
            (m6 = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm11.539 4.907-.968-.367-.072.7.942.304z',
            })),
          m7 ||
            (m7 = Cg.createElement('path', {
              fill: '#4DFFAA',
              d: 'm16.8 9.122-.292-.429.08-.496.29.474z',
            })),
          m8 ||
            (m8 = Cg.createElement('path', {
              fill: '#0030FF',
              d: 'm1.488 13.617.137.462-.409-.84-.144-.48z',
            })),
          m9 ||
            (m9 = Cg.createElement('path', {
              fill: '#D10000',
              d: 'M7.38.343 6.216.098l.191.134 1.07.233z',
            })),
          ie ||
            (ie = Cg.createElement('path', {
              fill: '#FF9100',
              d: 'm14.421 3.666-1.227-.71-.153-.268 1.195.72z',
            })),
          it ||
            (it = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm6.834 13.51.063.577-.448.603-.065-.574z',
            })),
          il ||
            (il = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm9.655 3.533-.939-.271v.769l.89.214z',
            })),
          ia ||
            (ia = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm16.044 10.855.085-.271.212-.295-.086.305z',
            })),
          ir ||
            (ir = Cg.createElement('path', {
              fill: '#A4FF53',
              d: 'm12.954 6.846-.72-.34-.047.616.715.286z',
            })),
          im ||
            (im = Cg.createElement('path', {
              fill: '#F50',
              d: 'm12.872 2.524-1.335-.674-.129-.046 1.285.665z',
            })),
          ii ||
            (ii = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm15.713 5.122-.995-.687-.136-.424.98.714z',
            })),
          ic ||
            (ic = Cg.createElement('path', {
              fill: '#FF1E00',
              d: 'M9.975 1.307 8.685.829l.009.248 1.211.451z',
            })),
          iF ||
            (iF = Cg.createElement('path', {
              fill: '#FF8D00',
              d: 'm.987 3.345-.476.586.3-.839.444-.564z',
            })),
          id ||
            (id = Cg.createElement('path', {
              fill: '#FFB600',
              d: 'm10.66 3.89-1.005-.357-.048.712.965.296z',
            })),
          ih ||
            (ih = Cg.createElement('path', {
              fill: '#F10800',
              d: 'M8.685.829 7.477.467l.096.27 1.12.34z',
            })),
          ip ||
            (ip = Cg.createElement('path', {
              fill: '#E40000',
              d: 'm3.398.643-.814.24.398-.381L3.72.28z',
            })),
          iE ||
            (iE = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm13.94 10.365.062-.185.18.314-.064.17z',
            })),
          io ||
            (io = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm7.96 3.909-.582-.024.09.925.535-.026z',
            })),
          iz ||
            (iz = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm8.716 3.262-.812-.176.056.823.757.122z',
            })),
          is ||
            (is = Cg.createElement('path', {
              fill: '#000096',
              d: 'm4.877 16.081.072.417-.592-.033-.082-.416z',
            })),
          iu ||
            (iu = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm7.468 4.81-.34.118.093.997.307-.163z',
            })),
          iA ||
            (iA = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm13.669 8.973-.243-.245.071.472.245.212z',
            })),
          ig ||
            (ig = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm.33 10.254.136.562-.17-1.038-.14-.574z',
            })),
          ib ||
            (ib = Cg.createElement('path', {
              fill: '#FF3800',
              d: 'm11.275 1.88-1.3-.572-.069.221 1.234.545z',
            })),
          iv ||
            (iv = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.22 5.925-.115.24.063 1.037.1-.278z',
            })),
          iC ||
            (iC = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm13.408 7.72-.506-.312-.012.558.508.264z',
            })),
          iD ||
            (iD = Cg.createElement('path', {
              fill: '#FF7E00',
              d: 'm9.71 2.889-.997-.327.003.699.939.271z',
            })),
          iB ||
            (iB = Cg.createElement('path', {
              fill: '#09F0EE',
              d: 'm16.255 10.594.088-.305.186-.348-.091.34z',
            })),
          iw ||
            (iw = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.168 7.202.066.337v1.04l-.065-.367z',
            })),
          ix ||
            (ix = Cg.createElement('path', {
              fill: '#FFC400',
              d: 'm11.66 4.315-1-.426-.088.653.967.368z',
            })),
          iy ||
            (iy = Cg.createElement('path', {
              fill: '#FF2900',
              d: 'm9.905 1.528-1.211-.451.007.378 1.136.417z',
            })),
          iS ||
            (iS = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.235 8.579.186.405-.09 1.01-.173-.428z',
            })),
          iM ||
            (iM = Cg.createElement('path', {
              fill: '#FF9100',
              d: 'M10.764 3.301 9.71 2.89l-.055.644 1.005.356z',
            })),
          ik ||
            (ik = Cg.createElement('path', {
              fill: '#CAFF2C',
              d: 'm16.579 6.69-.669-.615-.082-.5.663.653z',
            })),
          i_ ||
            (i_ = Cg.createElement('path', {
              fill: '#6AFF8D',
              d: 'm16.878 8.67-.29-.475.04-.508.29.518z',
            })),
          iP ||
            (iP = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm12.43 5.326-.891-.418-.096.636.873.359z',
            })),
          iU ||
            (iU = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.33 9.993.238.44-.195.95-.218-.457z',
            })),
          iN ||
            (iN = Cg.createElement('path', {
              fill: '#FF7A00',
              d: 'm14.237 3.408-1.197-.72-.168-.164 1.161.72z',
            })),
          iI ||
            (iI = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm12.693 2.47-1.285-.665-.133.074 1.233.645z',
            })),
          iX ||
            (iX = Cg.createElement('path', {
              fill: '#FF1300',
              d: 'm8.694 1.077-1.12-.34.093.408 1.034.309z',
            })),
          iQ ||
            (iQ = Cg.createElement('path', {
              fill: '#D60000',
              d: 'M7.477.467 6.407.233l.192.289.974.215z',
            })),
          iL ||
            (iL = Cg.createElement('path', {
              fill: '#FF5900',
              d: 'm9.771 2.33-1.063-.375.005.608.997.327z',
            })),
          i$ ||
            (i$ = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm.001 7.551.077.589L.1 7.092.022 6.5z',
            })),
          iO ||
            (iO = Cg.createElement('path', {
              fill: '#FF3B00',
              d: 'm9.837 1.872-1.136-.417.007.5 1.063.375z',
            })),
          iR ||
            (iR = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm1.071 12.759.145.48-.337-.923-.152-.5z',
            })),
          iT ||
            (iT = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm13.792 10.02.061-.204.148.364-.062.185z',
            })),
          ij ||
            (ij = Cg.createElement('path', {
              fill: '#FF4300',
              d: 'm11.14 2.073-1.235-.545-.068.344 1.17.508z',
            })),
          iG ||
            (iG = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm8.713 2.563-.879-.225.07.748.812.176z',
            })),
          iK ||
            (iK = Cg.createElement('path', {
              fill: '#FF6F00',
              d: 'M10.88 2.793 9.77 2.33l-.06.559 1.054.412z',
            })),
          iq ||
            (iq = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'm13.044 6.3-.728-.398-.082.604.72.34z',
            })),
          iV ||
            (iV = Cg.createElement('path', {
              fill: '#FF1E00',
              d: 'm2.234 1.42-.637.41.408-.559.579-.387z',
            })),
          iH ||
            (iH = Cg.createElement('path', {
              fill: '#B00',
              d: 'M6.214.1 5.228 0l.29.14.888.093z',
            })),
          iW ||
            (iW = Cg.createElement('path', {
              fill: '#FFBD00',
              d: 'm15.561 4.725-.98-.714-.163-.345.96.732z',
            })),
          iJ ||
            (iJ = Cg.createElement('path', {
              fill: '#F50',
              d: 'm11.008 2.38-1.171-.508-.066.458 1.11.463z',
            })),
          iZ ||
            (iZ = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm7.373 11.383.134.523-.295.86-.122-.53z',
            })),
          iY ||
            (iY = Cg.createElement('path', {
              fill: '#FF2900',
              d: 'm8.701 1.455-1.034-.308.088.538.953.27z',
            })),
          i1 ||
            (i1 = Cg.createElement('path', {
              fill: '#FF4700',
              d: 'm8.708 1.955-.953-.27.08.653.878.226z',
            })),
          i0 ||
            (i0 = Cg.createElement('path', {
              fill: '#FFA300',
              d: 'M11.803 3.784 10.764 3.3l-.104.588 1 .426z',
            })),
          i2 ||
            (i2 = Cg.createElement('path', {
              fill: '#FF8900',
              d: 'm7.903 3.086-.642-.072.117.87.582.025z',
            })),
          i3 ||
            (i3 = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm16.436 10.282.091-.341.154-.393-.094.38z',
            })),
          i4 ||
            (i4 = Cg.createElement('path', {
              fill: '#FF5200',
              d: 'm12.507 2.524-1.232-.645-.135.194 1.181.616z',
            })),
          i5 ||
            (i5 = Cg.createElement('path', {
              fill: '#60FF97',
              d: 'm13.637 8.515-.24-.285.03.497.242.245z',
            })),
          i6 ||
            (i6 = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm14.392 11.416.405-.191.255.059-.413.2z',
            })),
          i7 ||
            (i7 = Cg.createElement('path', {
              fill: '#B20000',
              d: 'M4.95.026 4.073.08l.375-.032L5.23 0z',
            })),
          i8 ||
            (i8 = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm14.64 11.484.412-.2.258-.008-.42.214z',
            })),
          i9 ||
            (i9 = Cg.createElement('path', {
              fill: '#0000F1',
              d: 'm6.447 14.69.073.518-.505.45-.079-.512z',
            })),
          ne ||
            (ne = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm14.155 11.286.398-.187.245.125-.405.191z',
            })),
          nt ||
            (nt = Cg.createElement('path', {
              fill: 'gold',
              d: 'm12.576 4.792-.916-.477-.123.592.894.42z',
            })),
          nl ||
            (nl = Cg.createElement('path', {
              fill: '#A0FF56',
              d: 'm13.462 7.211-.508-.365-.052.562.506.314z',
            })),
          na ||
            (na = Cg.createElement('path', {
              fill: '#FF6F00',
              d: 'm14.033 3.245-1.16-.721-.18-.055 1.124.712z',
            })),
          nr ||
            (nr = Cg.createElement('path', {
              fill: '#E40000',
              d: 'M7.573.737 6.6.522l.187.437.881.189z',
            })),
          nm ||
            (nm = Cg.createElement('path', {
              fill: '#FF8200',
              d: 'm11.964 3.326-1.083-.533-.117.507 1.039.483z',
            })),
          ni ||
            (ni = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm.302 4.864-.159.626.22-.942.148-.616z',
            })),
          nn ||
            (nn = Cg.createElement('path', {
              fill: '#0000A8',
              d: 'm5.462 15.95.061.42-.574.128-.072-.417z',
            })),
          nc ||
            (nc = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm7.378 3.885-.388.075.137.968.34-.118z',
            })),
          nF ||
            (nF = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm13.681 9.64.06-.23.112.406-.06.204z',
            })),
          nd ||
            (nd = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm14.89 11.49.42-.214.256-.076-.428.232z',
            })),
          nh ||
            (nh = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm16.917 8.205-.29-.518-.005-.506.29.56z',
            })),
          np ||
            (np = Cg.createElement('path', {
              fill: '#FF5900',
              d: 'm12.32 2.689-1.18-.616-.132.307 1.13.58z',
            })),
          nf ||
            (nf = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm16.493 6.227-.663-.653-.117-.452.653.684z',
            })),
          nE ||
            (nE = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm13.933 11.098.392-.187.228.188-.399.187z',
            })),
          no ||
            (no = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm12.137 2.96-1.13-.58-.126.413 1.082.533z',
            })),
          nz ||
            (nz = Cg.createElement('path', {
              fill: '#FF5D00',
              d: 'm7.834 2.338-.713-.116.14.792.643.072z',
            })),
          ns ||
            (ns = Cg.createElement('path', {
              fill: '#0000C4',
              d: 'm3.177 15.93.073.322-.544-.475-.089-.336z',
            })),
          nu ||
            (nu = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm13.17 5.78-.74-.454-.114.577.728.397z',
            })),
          nA ||
            (nA = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm15.138 11.432.428-.232.245-.142-.436.254z',
            })),
          ng ||
            (ng = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm15.381 4.398-.96-.732-.184-.258.938.74z',
            })),
          nb ||
            (nb = Cg.createElement('path', {
              fill: '#FF1300',
              d: 'M7.667 1.147 6.785.959l.176.572.794.155z',
            })),
          nv ||
            (nv = Cg.createElement('path', {
              fill: '#0000E8',
              d: 'm2.617 15.44.09.337-.508-.604-.104-.354z',
            })),
          nC ||
            (nC = Cg.createElement('path', {
              fill: '#36FFC1',
              d: 'm16.587 9.927.094-.379.118-.427-.095.418z',
            })),
          nD ||
            (nD = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm13.732 10.857.386-.193.207.247-.392.187z',
            })),
          nB ||
            (nB = Cg.createElement('path', {
              fill: '#FF3400',
              d: 'm7.755 1.685-.794-.154.16.693.713.117z',
            })),
          nw ||
            (nw = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm7.127 4.928-.146.204.122 1.034.116-.241z',
            })),
          nx ||
            (nx = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm7.212 12.767.063.581-.378.739-.063-.578z',
            })),
          ny ||
            (ny = Cg.createElement('path', {
              fill: '#B00',
              d: 'm3.72.28-.738.222.436-.217.655-.204z',
            })),
          nS ||
            (nS = Cg.createElement('path', {
              fill: '#BF0000',
              d: 'M6.407.233 5.521.14 5.81.44l.79.082z',
            })),
          nM ||
            (nM = Cg.createElement('path', {
              fill: '#FFB600',
              d: 'm12.747 4.316-.944-.532-.143.53.916.477z',
            })),
          nk ||
            (nk = Cg.createElement('path', {
              fill: '#FF6800',
              d: 'm13.816 3.18-1.123-.71-.186.054 1.086.694z',
            })),
          n_ ||
            (n_ = Cg.createElement('path', {
              fill: '#0000AD',
              d: 'm3.762 16.274.057.313-.569-.335-.073-.322z',
            })),
          nP ||
            (nP = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm.727 11.816.152.5-.255-.98-.158-.52z',
            })),
          nU ||
            (nU = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm.156 9.204.14.574-.076-1.05-.14-.588z',
            })),
          nN ||
            (nN = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm13.649 8.05-.24-.33-.011.51.24.285z',
            })),
          nI ||
            (nI = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm1.255 2.528-.445.564.384-.72.405-.542z',
            })),
          nX ||
            (nX = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm15.377 11.312.435-.254.231-.204-.441.28z',
            })),
          nQ ||
            (nQ = Cg.createElement('path', {
              fill: '#0004FF',
              d: 'm2.096 14.819.103.354-.457-.719-.117-.375z',
            })),
          nL ||
            (nL = Cg.createElement('path', {
              fill: '#49FFAD',
              d: 'm13.609 9.233.06-.26.072.437-.06.23z',
            })),
          n$ ||
            (n$ = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.105 6.166.052.309.078 1.064-.067-.337z',
            })),
          nO ||
            (nO = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm13.558 10.57.381-.205.18.3-.387.193z',
            })),
          nR ||
            (nR = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm13.556 6.717-.512-.418-.09.547.508.365z',
            })),
          nT ||
            (nT = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm12.94 3.91-.977-.584-.16.457.944.532z',
            })),
          nj ||
            (nj = Cg.createElement('path', {
              fill: '#FF7E00',
              d: 'm7.261 3.014-.449.034.178.912.387-.075z',
            })),
          nG ||
            (nG = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm13.593 3.217-1.086-.694-.186.163 1.047.664z',
            })),
          nK ||
            (nK = Cg.createElement('path', {
              fill: '#A7FF50',
              d: 'm16.912 7.74-.29-.559-.045-.49.29.595z',
            })),
          nq ||
            (nq = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm16.368 5.804-.653-.684-.154-.395.645.708z',
            })),
          nV ||
            (nV = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm13.33 5.302-.754-.51-.145.534.74.454z',
            })),
          nH ||
            (nH = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm15.175 4.149-.939-.74-.204-.164.917.74z',
            })),
          nW ||
            (nW = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.234 7.54.187.383v1.06l-.187-.404z',
            })),
          nJ ||
            (nJ = Cg.createElement('path', {
              fill: '#FF8200',
              d: 'm13.149 3.586-1.011-.627-.174.367.976.584z',
            })),
          nZ ||
            (nZ = Cg.createElement('path', {
              fill: '#FF7300',
              d: 'm13.368 3.353-1.048-.664-.183.27 1.011.627z',
            })),
          nY ||
            (nY = Cg.createElement('path', {
              fill: '#0000A4',
              d: 'm4.358 16.465.04.309-.578-.187-.058-.313z',
            })),
          n1 ||
            (n1 = Cg.createElement('path', {
              fill: '#A40000',
              d: 'm5.23 0-.782.048.385.14.687-.049z',
            })),
          n0 ||
            (n0 = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm16.704 9.539.095-.417.08-.451-.099.456z',
            })),
          n2 ||
            (n2 = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm15.602 11.134.443-.28.21-.26-.45.307z',
            })),
          n3 ||
            (n3 = Cg.createElement('path', {
              fill: '#CD0000',
              d: 'M6.599.522 5.808.44l.284.456.693.063z',
            })),
          n4 ||
            (n4 = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.42 8.984.249.424-.1 1.025-.239-.44z',
            })),
          n5 ||
            (n5 = Cg.createElement('path', {
              fill: '#1FFFD7',
              d: 'm13.415 10.24.377-.22.147.345-.38.204z',
            })),
          n6 ||
            (n6 = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.022 6.5.078.592.122-1.006-.079-.596z',
            })),
          n7 ||
            (n7 = Cg.createElement('path', {
              fill: '#DA0000',
              d: 'm2.584.884-.579.387.465-.403.512-.367z',
            })),
          n8 ||
            (n8 = Cg.createElement('path', {
              fill: '#0000CD',
              d: 'm6.014 15.657.05.427-.541.286-.06-.42z',
            })),
          n9 ||
            (n9 = Cg.createElement('path', {
              fill: '#003CFF',
              d: 'm1.624 14.079.117.375-.397-.816-.129-.4z',
            })),
          ce ||
            (ce = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'M7.121 2.222 6.6 2.218l.213.83.45-.034z',
            })),
          ct ||
            (ct = Cg.createElement('path', {
              fill: '#9DFF5A',
              d: 'm13.702 7.586-.24-.375-.054.509.24.33z',
            })),
          cl ||
            (cl = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm13.577 8.81.06-.295.032.458-.06.26z',
            })),
          ca ||
            (ca = Cg.createElement('path', {
              fill: '#E80000',
              d: 'M6.785.96 6.092.897l.266.597.604.036z',
            })),
          cr ||
            (cr = Cg.createElement('path', {
              fill: '#FFC400',
              d: 'm13.52 4.877-.773-.562-.17.476.754.51z',
            })),
          cm ||
            (cm = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm6.99 3.96-.193.17.183 1.002.147-.204z',
            })),
          ci ||
            (ci = Cg.createElement('path', {
              fill: '#FF8600',
              d: 'm14.949 3.986-.916-.741-.217-.065.891.732z',
            })),
          cn ||
            (cn = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm13.689 6.25-.518-.47-.127.52.512.417z',
            })),
          cc ||
            (cc = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.568 10.433.143.516-.205.957-.133-.523z',
            })),
          cF ||
            (cF = Cg.createElement('path', {
              fill: '#F20',
              d: 'm6.96 1.53-.604-.035.245.724.522.003z',
            })),
          cd ||
            (cd = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm6.897 14.087.069.526-.446.595-.073-.518z',
            })),
          ch ||
            (ch = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm16.208 5.433-.647-.708-.181-.327.636.724z',
            })),
          cp ||
            (cp = Cg.createElement('path', {
              fill: '#0FF8E7',
              d: 'm15.803 10.901.45-.307.182-.312-.456.337z',
            })),
          cf ||
            (cf = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm16.867 7.286-.286-.597-.085-.463.285.63z',
            })),
          cE ||
            (cE = Cg.createElement('path', {
              fill: '#33FFC4',
              d: 'm13.307 9.88.374-.24.112.38-.377.22z',
            })),
          co ||
            (co = Cg.createElement('path', {
              fill: '#0000A8',
              d: 'm4.949 16.498.024.308-.575-.032-.041-.309z',
            })),
          cz ||
            (cz = Cg.createElement('path', {
              fill: '#6AFF8D',
              d: 'm16.78 9.126.098-.457.038-.464-.1.494z',
            })),
          cs ||
            (cs = Cg.createElement('path', {
              fill: '#9F0000',
              d: 'm4.073.08-.655.204.462-.04.568-.195z',
            })),
          cu ||
            (cu = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.677 11.631.715-.215.247.068-.725.224z',
            })),
          cA ||
            (cA = Cg.createElement('path', {
              fill: '#FFAB00',
              d: 'm13.733 4.52-.794-.61-.192.406.773.561z',
            })),
          cg ||
            (cg = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm13.45 11.497.704-.211.238.13-.715.215z',
            })),
          cb ||
            (cb = Cg.createElement('path', {
              fill: '#FF8200',
              d: 'm14.707 3.912-.89-.732-.224.037.866.713z',
            })),
          cv ||
            (cv = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm.466 10.816.156.52-.167-1.017-.16-.541z',
            })),
          cC ||
            (cC = Cg.createElement('path', {
              fill: '#FF8D00',
              d: 'm.511 3.93-.149.616.313-.848.135-.606z',
            })),
          cD ||
            (cD = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm13.915 11.708.724-.224.251.006-.735.236z',
            })),
          cB ||
            (cB = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm13.237 11.308.696-.21.222.188-.705.21z',
            })),
          cw ||
            (cw = Cg.createElement('path', {
              fill: '#A80000',
              d: 'm5.52.14-.685.047.386.308L5.81.44z',
            })),
          cx ||
            (cx = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm6.981 5.132.023.282.153 1.061-.052-.309z',
            })),
          cy ||
            (cy = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm13.965 4.238-.816-.653-.21.324.795.61z',
            })),
          cS ||
            (cS = Cg.createElement('path', {
              fill: '#FF8200',
              d: 'm14.46 3.93-.866-.713-.225.136.84.687z',
            })),
          cM ||
            (cM = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm13.587 8.38.062-.33-.012.465-.06.294z',
            })),
          ck ||
            (ck = Cg.createElement('path', {
              fill: '#BAFF3C',
              d: 'm13.797 7.14-.24-.423-.095.494.24.375z',
            })),
          c_ ||
            (c_ = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm13.857 5.824-.526-.522-.16.478.518.47z',
            })),
          cP ||
            (cP = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm14.155 11.726.735-.236.247-.058-.745.25z',
            })),
          cU ||
            (cU = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm15.98 10.619.456-.337.151-.355-.462.367z',
            })),
          cN ||
            (cN = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm13.044 11.07.688-.213.2.241-.696.21z',
            })),
          cI ||
            (cI = Cg.createElement('path', {
              fill: '#0078FF',
              d: 'm1.215 13.238.129.4-.327-.895-.138-.427z',
            })),
          cX ||
            (cX = Cg.createElement('path', {
              fill: '#FF8900',
              d: 'm14.209 4.04-.84-.687-.22.233.816.654z',
            })),
          cQ ||
            (cQ = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm16.016 5.122-.635-.724-.206-.25.623.736z',
            })),
          cL ||
            (cL = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm7.507 11.906.063.586-.295.857-.063-.581z',
            })),
          c$ ||
            (c$ = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm.079 8.14.14.588.022-1.034L.1 7.092z',
            })),
          cO ||
            (cO = Cg.createElement('path', {
              fill: '#FF7300',
              d: 'm6.813 3.048-.252.138.237.943.192-.17z',
            })),
          cR ||
            (cR = Cg.createElement('path', {
              fill: '#4DFFAA',
              d: 'm13.235 9.497.373-.264.072.408-.374.24z',
            })),
          cT ||
            (cT = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm16.777 6.857-.285-.63-.125-.423.282.658z',
            })),
          cj ||
            (cj = Cg.createElement('path', {
              fill: '#FF1A00',
              d: 'm1.597 1.83-.403.542.456-.582.357-.519z',
            })),
          cG ||
            (cG = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm14.392 11.683.745-.251.24-.12-.755.269z',
            })),
          cK ||
            (cK = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm12.877 10.789.681-.22.174.288-.688.213z',
            })),
          cq ||
            (cq = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm16.817 8.699.1-.494-.005-.465-.101.529z',
            })),
          cV ||
            (cV = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.157 6.475.175.363.089 1.085-.186-.384z',
            })),
          cH ||
            (cH = Cg.createElement('path', {
              fill: '#B60000',
              d: 'M5.808.44 5.22.495l.376.469.496-.068z',
            })),
          cW ||
            (cW = Cg.createElement('path', {
              fill: 'gold',
              d: 'm14.055 5.449-.535-.572-.189.424.526.522z',
            })),
          cJ ||
            (cJ = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm15.798 4.882-.623-.734-.227-.164.612.735z',
            })),
          cZ ||
            (cZ = Cg.createElement('path', {
              fill: '#0000FA',
              d: 'm6.52 15.208.04.437-.495.44-.05-.428z',
            })),
          cY ||
            (cY = Cg.createElement('path', {
              fill: '#00B',
              d: 'm5.523 16.37.008.313-.558.122-.024-.307z',
            })),
          c1 ||
            (c1 = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm16.125 10.296.462-.368.117-.39-.467.4z',
            })),
          c0 ||
            (c0 = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm14.622 11.581.756-.269.224-.178-.766.289z',
            })),
          c2 ||
            (c2 = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'm13.93 6.72-.241-.47-.133.467.241.422z',
            })),
          c3 ||
            (c3 = Cg.createElement('path', {
              fill: '#FF3F00',
              d: 'm6.6 2.218-.324.11.286.857.252-.138z',
            })),
          c4 ||
            (c4 = Cg.createElement('path', {
              fill: '#9AFF5D',
              d: 'm13.64 7.956.062-.37-.053.463-.062.33z',
            })),
          c5 ||
            (c5 = Cg.createElement('path', {
              fill: '#B20000',
              d: 'M2.982.502 2.47.869l.508-.236.44-.348z',
            })),
          c6 ||
            (c6 = Cg.createElement('path', {
              fill: '#0000D6',
              d: 'm3.25 16.252.025.204L2.751 16l-.045-.224z',
            })),
          c7 ||
            (c7 = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm12.738 10.47.677-.231.143.329-.682.22z',
            })),
          c8 ||
            (c8 = Cg.createElement('path', {
              fill: '#0000FA',
              d: 'm2.706 15.777.045.224-.49-.582-.063-.245z',
            })),
          c9 ||
            (c9 = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm13.204 9.1.373-.29.032.423-.374.264z',
            })),
          Fe ||
            (Fe = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.42 7.923.25.411-.001 1.074-.25-.424z',
            })),
          Ft ||
            (Ft = Cg.createElement('path', {
              fill: '#D60000',
              d: 'm6.092.896-.494.068.355.616.405-.086z',
            })),
          Fl ||
            (Fl = Cg.createElement('path', {
              fill: '#960000',
              d: 'M4.448.048 3.88.243l.476.133.477-.189z',
            })),
          Fa ||
            (Fa = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'm16.65 6.462-.282-.658-.16-.371.278.679z',
            })),
          Fr ||
            (Fr = Cg.createElement('path', {
              fill: '#FF1300',
              d: 'm6.356 1.494-.405.086.325.748.323-.11z',
            })),
          Fm ||
            (Fm = Cg.createElement('path', {
              fill: '#0000BF',
              d: 'm3.82 16.587.003.194-.548-.322-.024-.205z',
            })),
          Fi ||
            (Fi = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm14.279 5.134-.546-.612-.213.355.535.572z',
            })),
          Fn ||
            (Fn = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm.143 5.49.077.597.22-.939-.078-.602z',
            })),
          Fc ||
            (Fc = Cg.createElement('path', {
              fill: '#FF9C00',
              d: 'm15.559 4.72-.613-.736-.24-.073.596.725z',
            })),
          FF ||
            (FF = Cg.createElement('path', {
              fill: '#A0FF56',
              d: 'm16.811 8.269.102-.529-.046-.454-.101.56z',
            })),
          Fd ||
            (Fd = Cg.createElement('path', {
              fill: '#FFAB00',
              d: 'm6.798 4.13-.02.256.226 1.028-.023-.282z',
            })),
          Fh ||
            (Fh = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm2.2 15.173.063.245-.44-.692-.083-.273z',
            })),
          Fp ||
            (Fp = Cg.createElement('path', {
              fill: '#06ECF1',
              d: 'm14.834 11.423.768-.29.204-.232-.776.31z',
            })),
          Ff ||
            (Ff = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm.879 12.317.139.426-.248-.952-.147-.456z',
            })),
          FE ||
            (FE = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm7.275 13.348.065.537-.374.728-.069-.526z',
            })),
          Fo ||
            (Fo = Cg.createElement('path', {
              fill: '#39FFBE',
              d: 'm12.634 10.124.673-.245.108.36-.676.23z',
            })),
          Fz ||
            (Fz = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm14.523 4.89-.558-.653-.232.283.546.612z',
            })),
          Fs ||
            (Fs = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.669 9.408.147.51-.106 1.031-.142-.516z',
            })),
          Fu ||
            (Fu = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm15.304 4.637-.597-.725-.248.018.583.709z',
            })),
          FA ||
            (FA = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm.296 9.778.161.541-.074-1.027-.163-.564z',
            })),
          Fg ||
            (Fg = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm16.237 9.939.466-.4.078-.413-.47.43z',
            })),
          Fb ||
            (Fb = Cg.createElement('path', {
              fill: '#EEFF09',
              d: 'm14.1 6.337-.245-.513-.167.426.242.47z',
            })),
          Fv ||
            (Fv = Cg.createElement('path', {
              fill: '#FF9F00',
              d: 'm14.78 4.724-.572-.684-.245.198.558.653z',
            })),
          FC ||
            (FC = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm15.042 4.639-.583-.71-.25.11.571.685z',
            })),
          FD ||
            (FD = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm13.733 7.55.064-.409-.095.45-.062.369z',
            })),
          FB ||
            (FB = Cg.createElement('path', {
              fill: '#0000B6',
              d: 'm4.398 16.774-.018.187-.557-.18-.004-.194z',
            })),
          Fw ||
            (Fw = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm12.485 11.735.965-.236.227.134-.973.24z',
            })),
          Fx ||
            (Fx = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm16.486 6.112-.278-.68-.192-.31.274.694z',
            })),
          Fy ||
            (Fy = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm13.213 8.701.375-.321-.01.43-.374.29z',
            })),
          FS ||
            (FS = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm12.704 11.873.975-.242.237.077-.986.25z',
            })),
          FM ||
            (FM = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm12.282 11.54.954-.232.213.189-.964.238z',
            })),
          Fk ||
            (Fk = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm12.928 11.959.987-.251.24.018-.998.26z',
            })),
          F_ ||
            (F_ = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm.81 3.092-.136.606.397-.731.123-.595z',
            })),
          FP ||
            (FP = Cg.createElement('path', {
              fill: '#09F0EE',
              d: 'm12.098 11.302.946-.232.193.238-.955.233z',
            })),
          FU ||
            (FU = Cg.createElement('path', {
              fill: '#19FFDE',
              d: 'm15.03 11.212.776-.311.177-.282-.783.334z',
            })),
          FN ||
            (FN = Cg.createElement('path', {
              fill: '#0048FF',
              d: 'm1.742 14.454.081.273-.384-.786-.096-.303z',
            })),
          FI ||
            (FI = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm12.565 9.758.67-.261.072.383-.673.245z',
            })),
          FX ||
            (FX = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm16.764 7.848.103-.562-.088-.43-.102.59z',
            })),
          FQ ||
            (FQ = Cg.createElement('path', {
              fill: '#960000',
              d: 'm4.833.187-.477.189.477.307.387-.188z',
            })),
          FL ||
            (FL = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm14.3 6.005-.244-.557-.199.376.245.513z',
            })),
          F$ ||
            (F$ = Cg.createElement('path', {
              fill: '#0000DA',
              d: 'm6.065 16.084-.008.322-.526.277-.008-.313z',
            })),
          FO ||
            (FO = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm13.157 11.986.998-.26.237-.041-1.01.273z',
            })),
          FR ||
            (FR = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.004 5.414.15.346.177 1.077-.174-.364z',
            })),
          FT ||
            (FT = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm11.938 11.022.938-.233.168.281-.946.232z',
            })),
          Fj ||
            (Fj = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm6.56 3.186-.074.234.292.968.02-.257z',
            })),
          FG ||
            (FG = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm.1 7.092.14.602.12-.993-.14-.615z',
            })),
          FK ||
            (FK = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm16.31 9.557.47-.431.037-.427-.472.461z',
            })),
          Fq ||
            (Fq = Cg.createElement('path', {
              fill: '#D10000',
              d: 'm2.005 1.271-.357.52.519-.426.303-.497z',
            })),
          FV ||
            (FV = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm16.29 5.816-.274-.694-.218-.24.27.702z',
            })),
          FH ||
            (FH = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.71 10.949.064.59-.205.953-.062-.586z',
            })),
          FW ||
            (FW = Cg.createElement('path', {
              fill: '#CEFF29',
              d: 'm13.863 7.17.068-.45-.134.42-.065.408z',
            })),
          FJ ||
            (FJ = Cg.createElement('path', {
              fill: '#960000',
              d: 'm3.418.285-.44.348.54-.058.362-.333z',
            })),
          FZ ||
            (FZ = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm13.263 8.31.377-.354-.053.424-.374.321z',
            })),
          FY ||
            (FY = Cg.createElement('path', {
              fill: '#00B',
              d: 'm4.973 16.806-.039.186-.554-.031.018-.187z',
            })),
          F1 ||
            (F1 = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm13.382 11.956 1.01-.273.229-.102-1.02.286z',
            })),
          F0 ||
            (F0 = Cg.createElement('path', {
              fill: '#0020FF',
              d: 'm6.966 14.613.032.45-.437.581-.041-.437z',
            })),
          F2 ||
            (F2 = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'm15.197 10.953.783-.334.145-.323-.789.357zM11.806 10.708l.933-.239.137.318-.938.233z',
            })),
          F3 ||
            (F3 = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm14.527 5.73-.248-.596-.224.315.245.557z',
            })),
          F4 ||
            (F4 = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm12.534 9.381.67-.28.032.396-.67.261z',
            })),
          F5 ||
            (F5 = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'm16.675 7.446.102-.59-.127-.394-.102.612z',
            })),
          F6 ||
            (F6 = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm16.067 5.584-.27-.702-.239-.163.266.703z',
            })),
          F7 ||
            (F7 = Cg.createElement('path', {
              fill: '#A80000',
              d: 'm5.22.495-.387.188.463.473.3-.192z',
            })),
          F8 ||
            (F8 = Cg.createElement('path', {
              fill: '#19FFDE',
              d: 'm.622 11.335.146.456-.163-.986-.15-.486z',
            })),
          F9 ||
            (F9 = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.332 6.837.24.402.099 1.093-.25-.41z',
            })),
          de ||
            (de = Cg.createElement('path', {
              fill: '#FF3400',
              d: 'm6.276 2.328-.14.216.35.876.075-.234z',
            })),
          dt ||
            (dt = Cg.createElement('path', {
              fill: '#0080FF',
              d: 'm1.344 13.638.096.303-.315-.86-.107-.337z',
            })),
          dl ||
            (dl = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm14.774 5.521-.251-.63-.245.244.248.597z',
            })),
          da ||
            (da = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm13.602 11.868 1.02-.286.214-.158-1.032.302z',
            })),
          dr ||
            (dr = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm16.345 9.16.472-.461-.006-.43-.475.49z',
            })),
          dm ||
            (dm = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm11.705 10.369.929-.245.104.346-.932.238z',
            })),
          di ||
            (di = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm14.03 6.827.07-.49-.17.382-.067.449z',
            })),
          dn ||
            (dn = Cg.createElement('path', {
              fill: '#FFB200',
              d: 'm15.824 5.422-.265-.703-.255-.082.262.694z',
            })),
          dc ||
            (dc = Cg.createElement('path', {
              fill: '#C80000',
              d: 'm5.596.964-.3.192.439.626.216-.204z',
            })),
          dF ||
            (dF = Cg.createElement('path', {
              fill: '#F10800',
              d: 'm5.951 1.58-.216.204.4.762.14-.217z',
            })),
          dd ||
            (dd = Cg.createElement('path', {
              fill: '#B1FF46',
              d: 'm13.351 7.935.381-.386-.092.408-.378.353z',
            })),
          dh ||
            (dh = Cg.createElement('path', {
              fill: '#FFB200',
              d: 'm15.033 5.383-.254-.659-.256.167.25.63z',
            })),
          dp ||
            (dp = Cg.createElement('path', {
              fill: '#FF8D00',
              d: 'm.362 4.546.077.602.313-.842L.675 3.7z',
            })),
          df ||
            (df = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm15.336 10.653.79-.357.11-.357-.794.38z',
            })),
          dE ||
            (dE = Cg.createElement('path', {
              fill: '#FFAB00',
              d: 'm15.566 5.332-.262-.694h-.262l.258.68z',
            })),
          dz ||
            (dz = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm15.3 5.32-.258-.681-.262.085.253.659z',
            })),
          ds ||
            (ds = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm12.54 9.004.672-.303-.009.4-.67.28z',
            })),
          du ||
            (du = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm11.327 11.996 1.158-.261.219.138-1.17.27z',
            })),
          dA ||
            (dA = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm11.135 11.797 1.147-.256.204.192-1.157.263z',
            })),
          dg ||
            (dg = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm.219 8.728.163.564.022-1.011-.163-.587z',
            })),
          db ||
            (db = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm16.548 7.075.102-.612-.163-.35-.101.632z',
            })),
          dv ||
            (dv = Cg.createElement('path', {
              fill: '#0000ED',
              d: 'm3.276 16.459-.024.081-.5-.437V16z',
            })),
          dC ||
            (dC = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm7.57 12.492.062.549-.292.844-.065-.537z',
            })),
          dD ||
            (dD = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.67 8.334.148.506-.003 1.078-.146-.51z',
            })),
          dB ||
            (dB = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm11.534 12.143 1.17-.27.226.086-1.18.28z',
            })),
          dw ||
            (dw = Cg.createElement('path', {
              fill: '#00F',
              d: 'M2.752 16v.104l-.467-.555-.022-.13z',
            })),
          dx ||
            (dx = Cg.createElement('path', {
              fill: '#FFA300',
              d: 'm6.778 4.388.115.332.26 1.04-.15-.346z',
            })),
          dy ||
            (dy = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm10.96 11.552 1.138-.25.184.239-1.148.256zM13.803 11.724l1.032-.301.193-.211-1.042.318z',
            })),
          dS ||
            (dS = Cg.createElement('path', {
              fill: '#0000CD',
              d: 'm5.53 16.683-.06.191-.536.118.039-.186z',
            })),
          dM ||
            (dM = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm11.639 10.012.926-.254.07.368-.93.244z',
            })),
          dk ||
            (dk = Cg.createElement('path', {
              fill: '#0000D6',
              d: 'm3.823 16.781-.049.068-.522-.308.023-.082z',
            })),
          d_ ||
            (d_ = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm14.226 6.531.075-.526-.2.332-.072.49z',
            })),
          dP ||
            (dP = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm11.748 12.239 1.18-.28.228.027-1.192.29z',
            })),
          dU ||
            (dU = Cg.createElement('path', {
              fill: '#890000',
              d: 'm3.88.243-.362.332.555.123.285-.321z',
            })),
          dN ||
            (dN = Cg.createElement('path', {
              fill: '#19FFDE',
              d: 'm10.807 11.269 1.13-.245.16.28-1.137.25z',
            })),
          dI ||
            (dI = Cg.createElement('path', {
              fill: '#00F',
              d: 'm6.56 15.645-.02.334-.48.426.006-.322z',
            })),
          dX ||
            (dX = Cg.createElement('path', {
              fill: '#A0FF56',
              d: 'm16.336 8.759.474-.49-.048-.42-.473.515z',
            })),
          dQ ||
            (dQ = Cg.createElement('path', {
              fill: '#0024FF',
              d: 'm2.263 15.419.022.13-.42-.66-.043-.162z',
            })),
          dL ||
            (dL = Cg.createElement('path', {
              fill: '#FF1600',
              d: 'm1.194 2.372-.122.595.475-.592.1-.585z',
            })),
          d$ ||
            (d$ = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'm13.48 7.587.386-.418-.131.38-.381.386z',
            })),
          dO ||
            (dO = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm16.385 6.744.1-.632-.195-.296-.1.645z',
            })),
          dR ||
            (dR = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm15.442 10.32.795-.381.074-.382-.8.404z',
            })),
          dT ||
            (dT = Cg.createElement('path', {
              fill: '#A80000',
              d: 'm2.47.868-.304.497.568-.256.245-.476z',
            })),
          dj ||
            (dj = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm11.964 12.276 1.193-.29.225-.03-1.204.3z',
            })),
          dG ||
            (dG = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm12.588 8.635.675-.327-.05.392-.672.304z',
            })),
          dK ||
            (dK = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'm10.681 10.952 1.125-.244.132.313-1.13.245z',
            })),
          dq ||
            (dq = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm1.018 12.743.107.337-.238-.916-.117-.373z',
            })),
          dV ||
            (dV = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm13.987 11.53 1.043-.318.169-.26-1.053.334z',
            })),
          dH ||
            (dH = Cg.createElement('path', {
              fill: '#0000CD',
              d: 'm4.38 16.96-.074.06-.53-.171.048-.068z',
            })),
          dW ||
            (dW = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm11.608 9.646.926-.265.031.377-.926.254z',
            })),
          dJ ||
            (dJ = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm14.449 6.29.078-.56-.227.275-.074.526z',
            })),
          dZ ||
            (dZ = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'm.22 6.086.14.616.218-.927-.139-.628z',
            })),
          dY ||
            (dY = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.816 9.918.062.595-.105 1.026-.063-.59z',
            })),
          d1 ||
            (d1 = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm12.178 12.256 1.204-.3.218-.088-1.216.31z',
            })),
          d0 ||
            (d0 = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm16.19 6.462.1-.645-.223-.233-.097.653z',
            })),
          d2 ||
            (d2 = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm16.29 8.364.474-.516-.089-.402-.472.539z',
            })),
          d3 ||
            (d3 = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm7.153 5.76.222.395.197 1.085-.24-.403z',
            })),
          d4 ||
            (d4 = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm1.822 14.727.043.161-.365-.75-.062-.197z',
            })),
          d5 ||
            (d5 = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm.456 10.319.151.486-.071-.996-.154-.517z',
            })),
          d6 ||
            (d6 = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm10.585 10.612 1.12-.245.1.34-1.124.245z',
            })),
          d7 ||
            (d7 = Cg.createElement('path', {
              fill: '#005CFF',
              d: 'm7.34 13.885.025.466-.367.712-.032-.449z',
            })),
          d8 ||
            (d8 = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm6.486 3.42.067.321.34.977-.115-.332z',
            })),
          d9 ||
            (d9 = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm14.692 6.11.082-.589-.245.21-.078.56z',
            })),
          he ||
            (he = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm13.637 7.277.392-.45-.166.343-.384.417z',
            })),
          ht ||
            (ht = Cg.createElement('path', {
              fill: '#890000',
              d: 'm4.356.376-.285.32.555.3.204-.313z',
            })),
          hl ||
            (hl = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm15.511 9.961.8-.404.034-.397-.802.427z',
            })),
          ha ||
            (ha = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm15.97 6.236.097-.653-.245-.164-.095.654z',
            })),
          hr ||
            (hr = Cg.createElement('path', {
              fill: '#ADFF49',
              d: 'm12.672 8.285.68-.35-.09.374-.674.327z',
            })),
          hm ||
            (hm = Cg.createElement('path', {
              fill: '#2CFFCA',
              d: 'm14.146 11.286 1.05-.334.14-.3-1.058.35z',
            })),
          hi ||
            (hi = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm11.614 9.281.927-.277-.008.377-.926.265z',
            })),
          hn ||
            (hn = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm10.128 12.39 1.301-.313-.2-.174-1.306.31z',
            })),
          hc ||
            (hc = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm9.924 12.213 1.306-.31-.184-.223-1.31.308z',
            })),
          hF ||
            (hF = Cg.createElement('path', {
              fill: '#FFC400',
              d: 'm14.949 5.996.085-.612-.26.138-.082.59z',
            })),
          hd ||
            (hd = Cg.createElement('path', {
              fill: '#0000ED',
              d: 'm6.057 16.406-.081.202-.507.266.06-.191z',
            })),
          hh ||
            (hh = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm12.384 12.178 1.218-.31.204-.144-1.227.32z',
            })),
          hp ||
            (hp = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm10.341 12.514 1.299-.316-.21-.122-1.302.314z',
            })),
          hf ||
            (hf = Cg.createElement('path', {
              fill: '#0000D1',
              d: 'm4.934 16.992-.1.058-.528-.03.074-.06z',
            })),
          hE ||
            (hE = Cg.createElement('path', {
              fill: '#FFC400',
              d: 'm15.729 6.073.095-.653-.258-.09-.092.65z',
            })),
          ho ||
            (ho = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm10.521 10.256 1.117-.245.067.357-1.12.245z',
            })),
          hz ||
            (hz = Cg.createElement('path', {
              fill: '#0FF8E7',
              d: 'm9.737 11.988 1.308-.308-.163-.265-1.313.303z',
            })),
          hs ||
            (hs = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm15.211 5.951.089-.632-.267.064-.085.612z',
            })),
          hu ||
            (hu = Cg.createElement('path', {
              fill: '#CEFF29',
              d: 'm16.203 7.985.472-.539-.127-.371-.47.557z',
            })),
          hA ||
            (hA = Cg.createElement('path', {
              fill: '#FFBD00',
              d: 'm15.474 5.98.092-.646-.266-.013-.089.632z',
            })),
          hg ||
            (hg = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm10.56 12.581 1.296-.316-.216-.066-1.3.316z',
            })),
          hb ||
            (hb = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm13.828 7.01.398-.479-.196.296-.393.449z',
            })),
          hv ||
            (hv = Cg.createElement('path', {
              fill: '#FF2D00',
              d: 'm6.136 2.544.009.313.408.884-.067-.32z',
            })),
          hC ||
            (hC = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm9.57 11.718 1.31-.303-.14-.3-1.314.298z',
            })),
          hD ||
            (hD = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm.674 3.698.077.608.399-.727-.077-.612z',
            })),
          hB ||
            (hB = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.573 7.24.144.504.101 1.096-.147-.506z',
            })),
          hw ||
            (hw = Cg.createElement('path', {
              fill: '#9B0000',
              d: 'm4.833.683-.204.313.54.469.128-.31z',
            })),
          hx ||
            (hx = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'm.24 7.694.164.586.119-.97L.359 6.7z',
            })),
          hy ||
            (hy = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm1.439 13.941.06.198-.3-.821-.074-.237z',
            })),
          hS ||
            (hS = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm15.543 9.587.802-.427-.008-.401-.804.447z',
            })),
          hM ||
            (hM = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm10.779 12.592 1.293-.318-.216-.008-1.296.317z',
            })),
          hk ||
            (hk = Cg.createElement('path', {
              fill: '#8D0000',
              d: 'm2.979.633-.245.476.6-.078.183-.456z',
            })),
          h_ ||
            (h_ = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm12.791 7.962.688-.375-.125.348-.68.35z',
            })),
          hP ||
            (hP = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm14.278 11.002 1.058-.35.106-.333-1.065.366z',
            })),
          hU ||
            (hU = Cg.createElement('path', {
              fill: '#0FF8E7',
              d: 'm12.576 12.045 1.227-.32.184-.196-1.238.33z',
            })),
          hN ||
            (hN = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm6.998 15.063-.034.353-.423.563.021-.335z',
            })),
          hI ||
            (hI = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm7.773 11.54.06.562-.2.939-.063-.548z',
            })),
          hX ||
            (hX = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm11.657 8.928.931-.293-.046.367-.928.28z',
            })),
          hQ ||
            (hQ = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm.77 11.79.117.374-.156-.947-.123-.412z',
            })),
          hL ||
            (hL = Cg.createElement('path', {
              fill: '#00F',
              d: 'm3.252 16.54-.055-.04-.473-.415.027.019z',
            })),
          h$ ||
            (h$ = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm10.49 9.892 1.118-.244.03.367-1.117.245z',
            })),
          hO ||
            (hO = Cg.createElement('path', {
              fill: '#0010FF',
              d: 'm2.751 16.104-.027-.019-.44-.525.001-.011z',
            })),
          hR ||
            (hR = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm9.426 11.413 1.315-.299-.111-.33-1.318.294z',
            })),
          hT ||
            (hT = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm16.079 7.632.469-.557-.163-.331-.466.571z',
            })),
          hj ||
            (hj = Cg.createElement('path', {
              fill: '#E80000',
              d: 'm5.735 1.782-.056.31.466.765-.01-.313z',
            })),
          hG ||
            (hG = Cg.createElement('path', {
              fill: '#B00',
              d: 'm5.297 1.156-.129.309.511.626.056-.309z',
            })),
          hK ||
            (hK = Cg.createElement('path', {
              fill: '#D10000',
              d: 'm1.648 1.79-.099.585.54-.436.078-.572z',
            })),
          hq ||
            (hq = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm14.043 6.796.408-.508-.223.242-.399.48z',
            })),
          hV ||
            (hV = Cg.createElement('path', {
              fill: '#0000F1',
              d: 'm3.774 16.849-.081-.06-.494-.29.054.04z',
            })),
          hH ||
            (hH = Cg.createElement('path', {
              fill: '#FF9F00',
              d: 'm6.893 4.718.194.392.29 1.045-.224-.395z',
            })),
          hW ||
            (hW = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm10.99 12.54 1.292-.316-.21.05-1.293.318z',
            })),
          hJ ||
            (hJ = Cg.createElement('path', {
              fill: '#0038FF',
              d: 'm2.285 15.549-.002.011-.395-.623-.021-.049z',
            })),
          hZ ||
            (hZ = Cg.createElement('path', {
              fill: '#0000E3',
              d: 'm5.471 16.874-.125.063-.512.113.1-.058z',
            })),
          hY ||
            (hY = Cg.createElement('path', {
              fill: '#9DFF5A',
              d: 'm15.535 9.206.802-.447-.048-.395-.803.465z',
            })),
          h1 ||
            (h1 = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm9.312 11.078 1.318-.293-.082-.35-1.32.288z',
            })),
          h0 ||
            (h0 = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'm15.92 7.315.465-.571-.194-.282-.46.579z',
            })),
          h2 ||
            (h2 = Cg.createElement('path', {
              fill: '#1FFFD7',
              d: 'm12.749 11.859 1.238-.329.16-.242-1.247.339z',
            })),
          h3 ||
            (h3 = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm12.943 7.676.694-.4-.158.311-.686.375z',
            })),
          h4 ||
            (h4 = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm8.785 12.737 1.341-.347-.204-.177-1.347.34z',
            })),
          h5 ||
            (h5 = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm14.377 10.685 1.065-.366.07-.358-1.07.38z',
            })),
          h6 ||
            (h6 = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm8.575 12.553 1.347-.34-.187-.225-1.357.33z',
            })),
          h7 ||
            (h7 = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm14.277 6.642.415-.53-.245.18-.404.504z',
            })),
          h8 ||
            (h8 = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm10.495 9.53 1.119-.25-.006.364-1.118.245z',
            })),
          h9 ||
            (h9 = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm11.735 8.592.937-.308-.084.35-.931.292z',
            })),
          pe ||
            (pe = Cg.createElement('path', {
              fill: '#0000E8',
              d: 'm4.306 17.02-.112-.068-.503-.163.082.058z',
            })),
          pt ||
            (pt = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm9.009 12.866 1.332-.352-.213-.122-1.342.345z',
            })),
          pl ||
            (pl = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm.382 9.292.154.517.022-.98-.154-.547z',
            })),
          pa ||
            (pa = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm8.38 12.318 1.356-.33-.167-.27-1.364.32z',
            })),
          pr ||
            (pr = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm11.194 12.433 1.29-.315-.202.106-1.293.317z',
            })),
          pm ||
            (pm = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.818 8.84.063.6-.003 1.073-.062-.595z',
            })),
          pi ||
            (pi = Cg.createElement('path', {
              fill: '#FF9100',
              d: 'm.439 5.148.139.629.31-.833-.137-.638z',
            })),
          pn ||
            (pn = Cg.createElement('path', {
              fill: '#0008FF',
              d: 'm6.54 15.98-.097.218-.464.408.082-.202z',
            })),
          pc ||
            (pc = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm15.73 7.04.46-.58-.22-.224-.454.586z',
            })),
          pF ||
            (pF = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm9.235 12.936 1.324-.355-.219-.067-1.332.352z',
            })),
          pd ||
            (pd = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm7.632 13.04.02.486-.287.826-.025-.467z',
            })),
          ph ||
            (ph = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm1.125 13.081.075.238-.227-.873-.086-.28z',
            })),
          pp ||
            (pp = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'm14.525 6.548.424-.552-.256.114-.415.53z',
            })),
          pf ||
            (pf = Cg.createElement('path', {
              fill: '#0064FF',
              d: 'm1.865 14.888.02.049-.344-.709-.041-.09z',
            })),
          pE ||
            (pE = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm8.205 12.038 1.364-.32-.143-.305-1.37.307z',
            })),
          po ||
            (po = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm9.229 10.724 1.32-.289-.05-.36-1.322.282z',
            })),
          pz ||
            (pz = Cg.createElement('path', {
              fill: 'maroon',
              d: 'm3.518.575-.183.456.618.104.12-.438z',
            })),
          ps ||
            (ps = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm15.488 8.83.803-.466-.088-.38-.8.482z',
            })),
          pu ||
            (pu = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm15.516 6.822.453-.586-.241-.163-.45.584z',
            })),
          pA ||
            (pA = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm13.125 7.433.703-.422-.19.266-.694.399z',
            })),
          pg ||
            (pg = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm14.78 6.52.431-.569-.263.045-.423.552z',
            })),
          pb ||
            (pb = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm9.462 12.946 1.317-.354-.219-.01-1.325.354z',
            })),
          pv ||
            (pv = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm12.9 11.625 1.246-.339.132-.285-1.255.347z',
            })),
          pC ||
            (pC = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm15.282 6.658.449-.585-.258-.094-.44.58z',
            })),
          pD ||
            (pD = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm15.034 6.556.44-.577-.263-.026-.431.569z',
            })),
          pB ||
            (pB = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm14.442 10.34 1.07-.379.03-.374-1.071.392z',
            })),
          pw ||
            (pw = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm10.535 9.184 1.122-.256-.043.353-1.12.25z',
            })),
          px ||
            (px = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm11.847 8.286.943-.324-.12.323-.935.307z',
            })),
          py ||
            (py = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm11.377 12.271 1.288-.313-.183.16-1.288.315z',
            })),
          pS ||
            (pS = Cg.createElement('path', {
              fill: '#2CFFCA',
              d: 'm8.056 11.72 1.37-.307-.114-.335-1.376.294z',
            })),
          pM ||
            (pM = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'm6.553 3.741.157.392.377.977-.195-.392z',
            })),
          pk ||
            (pk = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm7.377 6.155.136.504.205 1.085-.144-.504z',
            })),
          p_ ||
            (p_ = Cg.createElement('path', {
              fill: '#0000ED',
              d: 'm4.834 17.05-.141-.07-.5-.028.113.068z',
            })),
          pP ||
            (pP = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm.607 10.805.123.412-.067-.958-.127-.449z',
            })),
          pU ||
            (pU = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm9.179 10.357 1.322-.282-.013-.364-1.324.278z',
            })),
          pN ||
            (pN = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm9.684 12.895 1.306-.354-.213.05-1.316.355z',
            })),
          pI ||
            (pI = Cg.createElement('path', {
              fill: '#FF1A00',
              d: 'm1.072 2.967.076.612.475-.589-.076-.612z',
            })),
          pX ||
            (pX = Cg.createElement('path', {
              fill: '#CAFF2C',
              d: 'm15.403 8.466.8-.481-.122-.353-.796.494z',
            })),
          pQ ||
            (pQ = Cg.createElement('path', {
              fill: '#000CFF',
              d: 'm3.197 16.499-.053-.159-.444-.386.024.131z',
            })),
          pL ||
            (pL = Cg.createElement('path', {
              fill: '#00F',
              d: 'm5.978 16.608-.149.076-.483.253.125-.063z',
            })),
          p$ ||
            (p$ = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm7.487 13.119 1.298-.382-.211-.184-1.313.37z',
            })),
          pO ||
            (pO = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm7.263 12.923 1.313-.37-.196-.235-1.325.355z',
            })),
          pR ||
            (pR = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm2.724 16.085-.024-.131-.412-.492-.005.098z',
            })),
          pT ||
            (pT = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm13.33 7.241.713-.445-.215.213-.703.423z',
            })),
          pj ||
            (pj = Cg.createElement('path', {
              fill: '#A40000',
              d: 'm2.167 1.365-.078.571.592-.266.053-.563z',
            })),
          pG ||
            (pG = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm7.725 13.255 1.285-.39-.224-.128-1.3.381z',
            })),
          pK ||
            (pK = Cg.createElement('path', {
              fill: '#0064FF',
              d: 'm7.365 14.351-.045.375-.356.69.034-.353z',
            })),
          pq ||
            (pq = Cg.createElement('path', {
              fill: 'gold',
              d: 'm.36 6.702.164.608.213-.904-.159-.63z',
            })),
          pV ||
            (pV = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm1.5 14.139.04.09-.282-.776-.058-.135z',
            })),
          pH ||
            (pH = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.935 11.372 1.377-.294-.082-.354-1.383.28z',
            })),
          pW ||
            (pW = Cg.createElement('path', {
              fill: '#06ECF1',
              d: 'm7.055 12.673 1.325-.355-.175-.28-1.338.338z',
            })),
          pJ ||
            (pJ = Cg.createElement('path', {
              fill: '#00F',
              d: 'm3.69 16.79-.084-.176-.462-.274.053.159z',
            })),
          pZ ||
            (pZ = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm13.023 11.35 1.254-.348.1-.317-1.26.356z',
            })),
          pY ||
            (pY = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm14.47 9.98 1.072-.394-.007-.38-1.073.406z',
            })),
          p1 ||
            (p1 = Cg.createElement('path', {
              fill: '#840000',
              d: 'm4.073.697-.12.438.618.286.057-.423z',
            })),
          p0 ||
            (p0 = Cg.createElement('path', {
              fill: '#19FFDE',
              d: 'm11.54 12.058 1.288-.31-.164.21-1.288.313z',
            })),
          p2 ||
            (p2 = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm7.878 10.513.06.574-.105 1.015-.06-.56z',
            })),
          p3 ||
            (p3 = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm7.964 13.33 1.27-.394-.226-.07-1.284.39z',
            })),
          p4 ||
            (p4 = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'm11.992 8.017.951-.341-.152.285-.944.325z',
            })),
          p5 ||
            (p5 = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm10.608 8.855 1.127-.263-.078.334-1.123.256z',
            })),
          p6 ||
            (p6 = Cg.createElement('path', {
              fill: '#004CFF',
              d: 'm2.283 15.56.005-.098-.373-.585-.03.06z',
            })),
          p7 ||
            (p7 = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm9.89 12.783 1.302-.35-.202.108-1.306.354z',
            })),
          p8 ||
            (p8 = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm6.867 12.376 1.337-.338-.15-.318-1.347.319z',
            })),
          p9 ||
            (p9 = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm15.282 8.126.797-.494-.16-.317-.79.504z',
            })),
          fe ||
            (fe = Cg.createElement('path', {
              fill: '#FF2900',
              d: 'm6.145 2.857.112.396.453.88-.157-.392z',
            })),
          ft ||
            (ft = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm13.554 7.105.723-.463-.234.154-.713.443z',
            })),
          fl ||
            (fl = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm9.164 9.989 1.324-.278.022-.355-1.326.272z',
            })),
          fa ||
            (fa = Cg.createElement('path', {
              fill: '#1FFFD7',
              d: 'm.887 12.164.086.281-.146-.903-.094-.327z',
            })),
          fr ||
            (fr = Cg.createElement('path', {
              fill: '#00F',
              d: 'm4.193 16.952-.116-.187-.47-.151.084.176z',
            })),
          fm ||
            (fm = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm8.203 13.34 1.26-.394-.227-.01-1.273.394z',
            })),
          fi ||
            (fi = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm7.847 11.004 1.381-.28-.05-.368-1.385.265z',
            })),
          fn ||
            (fn = Cg.createElement('path', {
              fill: '#00F',
              d: 'm5.346 16.937-.17-.063-.483.106.141.07z',
            })),
          fc ||
            (fc = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'm6.709 12.039 1.347-.319-.12-.348-1.354.297z',
            })),
          fF ||
            (fF = Cg.createElement('path', {
              fill: '#EEFF09',
              d: 'm15.129 7.819.79-.504-.189-.274-.782.51z',
            })),
          fd ||
            (fd = Cg.createElement('path', {
              fill: '#920000',
              d: 'm4.628.996-.057.424.601.456-.004-.411z',
            })),
          fh ||
            (fh = Cg.createElement('path', {
              fill: '#0038FF',
              d: 'm6.964 15.416-.114.241-.408.542.099-.22z',
            })),
          fp ||
            (fp = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm13.79 7.028.735-.48-.247.094-.724.463z',
            })),
          ff ||
            (ff = Cg.createElement('path', {
              fill: '#9AFF5D',
              d: 'm14.462 9.612 1.073-.405-.047-.377-1.07.415z',
            })),
          fE ||
            (fE = Cg.createElement('path', {
              fill: '#0074FF',
              d: 'm1.888 14.937.03-.06-.324-.664-.051.015z',
            })),
          fo ||
            (fo = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm13.117 11.04 1.26-.355.066-.344-1.266.36z',
            })),
          fz ||
            (fz = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm6.3 13.532 1.188-.414-.225-.195-1.205.398z',
            })),
          fs ||
            (fs = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm6.057 13.321 1.206-.398-.208-.25-1.222.38z',
            })),
          fu ||
            (fu = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm.404 8.28.154.548.116-.94-.151-.577z',
            })),
          fA ||
            (fA = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm12.163 7.79.962-.357-.182.243-.951.34z',
            })),
          fg ||
            (fg = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'm5.68 2.091.06.402.518.76-.113-.396z',
            })),
          fb ||
            (fb = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'm11.678 11.799 1.287-.307-.139.255-1.287.31z',
            })),
          fv ||
            (fv = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.717 7.744.063.604.101 1.092-.063-.6z',
            })),
          fC ||
            (fC = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm6.553 13.68 1.171-.425-.235-.137-1.188.414z',
            })),
          fD ||
            (fD = Cg.createElement('path', {
              fill: '#09F0EE',
              d: 'm10.08 12.615 1.297-.344-.185.163-1.302.35z',
            })),
          fB ||
            (fB = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm10.713 8.557 1.134-.27-.112.305-1.127.262z',
            })),
          fw ||
            (fw = Cg.createElement('path', {
              fill: '#B20000',
              d: 'm5.168 1.465.005.411.567.617-.06-.402z',
            })),
          fx ||
            (fx = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm8.435 13.286 1.247-.392-.22.051-1.26.395z',
            })),
          fy ||
            (fy = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm5.833 13.052 1.222-.379-.188-.297-1.237.356z',
            })),
          fS ||
            (fS = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm14.949 7.551.782-.51-.215-.221-.775.51z',
            })),
          fM ||
            (fM = Cg.createElement('path', {
              fill: '#FF5200',
              d: 'm.751 4.306.136.64.394-.716-.131-.65z',
            })),
          fk ||
            (fk = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm14.034 7.012.745-.493-.254.029-.735.48z',
            })),
          f_ ||
            (f_ = Cg.createElement('path', {
              fill: '#FF9F00',
              d: 'm7.087 5.11.125.505.301 1.044-.137-.504z',
            })),
          fP ||
            (fP = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm1.2 13.318.058.134-.215-.825-.07-.182z',
            })),
          fU ||
            (fU = Cg.createElement('path', {
              fill: '#0028FF',
              d: 'm3.144 16.34-.009-.26-.412-.36-.023.234z',
            })),
          fN ||
            (fN = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm6.812 13.761 1.151-.431-.239-.075-1.17.426z',
            })),
          fI ||
            (fI = Cg.createElement('path', {
              fill: '#9AFF5D',
              d: 'm9.184 9.628 1.326-.272.057-.34-1.327.267z',
            })),
          fX ||
            (fX = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm7.833 12.102.016.505-.198.92-.019-.486z',
            })),
          fQ ||
            (fQ = Cg.createElement('path', {
              fill: '#0040FF',
              d: 'm2.7 15.954.023-.233-.384-.457-.051.198z',
            })),
          fL ||
            (fL = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm7.794 10.623 1.385-.266-.014-.367-1.388.25z',
            })),
          f$ ||
            (f$ = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm6.582 11.67 1.355-.298-.088-.367-1.362.274z',
            })),
          fO ||
            (fO = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm14.74 7.332.776-.51-.234-.164-.766.509z',
            })),
          fR ||
            (fR = Cg.createElement('path', {
              fill: 'gold',
              d: 'm14.278 7.06.756-.504-.255-.037-.745.493z',
            })),
          fT ||
            (fT = Cg.createElement('path', {
              fill: '#00F',
              d: 'm4.692 16.98-.147-.189-.468-.026.116.187z',
            })),
          fj ||
            (fj = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm14.516 7.166.766-.508-.248-.102-.756.503z',
            })),
          fG ||
            (fG = Cg.createElement('path', {
              fill: '#0FF8E7',
              d: 'm5.631 12.732 1.236-.356-.16-.337-1.25.329z',
            })),
          fK ||
            (fK = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm3.606 16.614-.04-.28-.43-.253.008.26z',
            })),
          fq ||
            (fq = Cg.createElement('path', {
              fill: '#890000',
              d: 'm2.734 1.109-.053.562.626-.088.028-.552z',
            })),
          fV ||
            (fV = Cg.createElement('path', {
              fill: '#0018FF',
              d: 'm6.442 16.2-.171.094-.442.39.149-.076z',
            })),
          fH ||
            (fH = Cg.createElement('path', {
              fill: '#B1FF46',
              d: 'm14.418 9.245 1.072-.416-.085-.363-1.07.424z',
            })),
          fW ||
            (fW = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm12.357 7.612.973-.373-.205.193-.961.357z',
            })),
          fJ ||
            (fJ = Cg.createElement('path', {
              fill: '#0060FF',
              d: 'm2.288 15.462.051-.198-.346-.544-.078.157z',
            })),
          fZ ||
            (fZ = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm13.177 10.701 1.265-.36.029-.361-1.268.367z',
            })),
          fY ||
            (fY = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm7.071 13.775 1.133-.432-.239-.011-1.151.431z',
            })),
          f1 ||
            (f1 = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm.536 9.809.127.449.022-.943-.127-.49z',
            })),
          f0 ||
            (f0 = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm8.655 13.169 1.235-.386-.208.112-1.246.39z',
            })),
          f2 ||
            (f2 = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm5.278 13.974 1.02-.442-.242-.21-1.044.421z',
            })),
          f3 ||
            (f3 = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm11.787 11.5 1.287-.302-.109.294-1.287.307z',
            })),
          f4 ||
            (f4 = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm10.249 12.393 1.291-.335-.163.213-1.297.344z',
            })),
          f5 ||
            (f5 = Cg.createElement('path', {
              fill: '#00C0FF',
              d: 'm5.014 13.743 1.044-.422-.225-.269-1.064.397z',
            })),
          f6 ||
            (f6 = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm1.54 14.228.052-.015-.265-.727-.07-.034z',
            })),
          f7 ||
            (f7 = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm10.848 8.296 1.143-.28-.144.27-1.135.271z',
            })),
          f8 ||
            (f8 = Cg.createElement('path', {
              fill: '#D10000',
              d: 'm1.55 2.375.075.612.54-.434-.076-.614z',
            })),
          f9 ||
            (f9 = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm5.554 14.135 1-.454-.254-.149-1.02.442z',
            })),
          Ee ||
            (Ee = Cg.createElement('path', {
              fill: '#23FFD4',
              d: 'm5.458 12.368 1.25-.33-.127-.369-1.265.3z',
            })),
          Et ||
            (Et = Cg.createElement('path', {
              fill: '#0010FF',
              d: 'm4.077 16.765-.075-.29-.437-.141.04.28z',
            })),
          El ||
            (El = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm4.769 13.449 1.064-.398-.202-.32-1.083.367z',
            })),
          Ea ||
            (Ea = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm6.485 11.278 1.362-.274-.054-.381-1.367.25z',
            })),
          Er ||
            (Er = Cg.createElement('path', {
              fill: '#0008FF',
              d: 'm5.83 16.684-.198-.052-.456.24.17.064z',
            })),
          Em ||
            (Em = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.776 10.24 1.388-.251.02-.361-1.388.236z',
            })),
          Ei ||
            (Ei = Cg.createElement('path', {
              fill: '#B1FF46',
              d: 'm9.24 9.283 1.327-.267.09-.314-1.328.262z',
            })),
          En ||
            (En = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm14.334 8.89 1.07-.424-.123-.34-1.063.43z',
            })),
          Ec ||
            (Ec = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm5.836 14.224.976-.462-.259-.082-.999.455z',
            })),
          EF ||
            (EF = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm12.57 7.492.983-.387-.224.136-.972.371z',
            })),
          Ed ||
            (Ed = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm7.651 13.525-.052.4-.279.8.045-.374z',
            })),
          Eh ||
            (Eh = Cg.createElement('path', {
              fill: '#00C0FF',
              d: 'm7.319 13.715 1.116-.43-.232.055-1.132.435z',
            })),
          Ep ||
            (Ep = Cg.createElement('path', {
              fill: '#0040FF',
              d: 'm3.135 16.08.084-.342-.38-.33-.116.315z',
            })),
          Ef ||
            (Ef = Cg.createElement('path', {
              fill: '#08F',
              d: 'm1.915 14.877.078-.157-.3-.618-.101.11z',
            })),
          EE ||
            (EE = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm.73 11.217.095.326-.065-.912-.097-.372z',
            })),
          Eo ||
            (Eo = Cg.createElement('path', {
              fill: '#0058FF',
              d: 'm2.723 15.72.116-.314-.354-.422-.146.28z',
            })),
          Ez ||
            (Ez = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm.578 5.775.158.63.304-.814-.152-.648z',
            })),
          Es ||
            (Es = Cg.createElement('path', {
              fill: '#06ECF1',
              d: 'm4.548 13.1 1.083-.367-.173-.364-1.102.337z',
            })),
          Eu ||
            (Eu = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm4.456 14.431.822-.457-.264-.231-.848.435z',
            })),
          EA ||
            (EA = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm8.855 12.99 1.225-.375-.19.168-1.236.386z',
            })),
          Eg ||
            (Eg = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm4.167 14.179.847-.436-.245-.293-.871.408z',
            })),
          Eb ||
            (Eb = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.881 9.44.06.588-.003 1.06-.06-.573z',
            })),
          Ev ||
            (Ev = Cg.createElement('path', {
              fill: '#0034FF',
              d: 'm3.565 16.334.05-.363-.396-.233-.084.343z',
            })),
          EC ||
            (EC = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm13.203 10.347 1.268-.368-.009-.367-1.268.367z',
            })),
          ED ||
            (ED = Cg.createElement('path', {
              fill: '#0008FF',
              d: 'm5.176 16.874-.178-.183-.453.1.148.19z',
            })),
          EB ||
            (EB = Cg.createElement('path', {
              fill: '#39FFBE',
              d: 'm5.316 11.97 1.266-.3-.096-.392-1.271.27z',
            })),
          Ew ||
            (Ew = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'm6.71 4.133.111.507.391.975-.125-.505z',
            })),
          Ex ||
            (Ex = Cg.createElement('path', {
              fill: '#0094FF',
              d: 'm4.758 14.609.796-.474-.276-.163-.822.458z',
            })),
          Ey ||
            (Ey = Cg.createElement('path', {
              fill: '#E1FF16',
              d: 'm11.01 8.079 1.153-.289-.171.227-1.143.279z',
            })),
          ES ||
            (ES = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'm10.39 12.124 1.288-.326-.138.258-1.291.336z',
            })),
          EM ||
            (EM = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm11.863 11.17 1.29-.297-.077.326-1.287.303z',
            })),
          Ek ||
            (Ek = Cg.createElement('path', {
              fill: '#0074FF',
              d: 'm2.339 15.264.146-.28-.32-.502-.172.238z',
            })),
          E_ ||
            (E_ = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm6.116 14.237.955-.462-.257-.012-.978.461z',
            })),
          EP ||
            (EP = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm14.218 8.555 1.065-.429-.154-.307-1.058.432z',
            })),
          EU ||
            (EU = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm3.897 13.857.871-.408-.22-.35-.893.374z',
            })),
          EN ||
            (EN = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm12.795 7.428.996-.4-.237.077-.984.387z',
            })),
          EI ||
            (EI = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm.973 12.445.07.182-.14-.852-.078-.232z',
            })),
          EX ||
            (EX = Cg.createElement('path', {
              fill: '#0014FF',
              d: 'm4.545 16.791-.108-.293-.435-.024.076.291z',
            })),
          EQ ||
            (EQ = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm6.426 10.873 1.367-.25-.017-.384-1.37.228z',
            })),
          EL ||
            (EL = Cg.createElement('path', {
              fill: 'maroon',
              d: 'm3.335 1.031-.028.552.644.094v-.542z',
            })),
          E$ ||
            (E$ = Cg.createElement('path', {
              fill: '#005CFF',
              d: 'm3.22 15.738.223-.404-.348-.304-.256.378z',
            })),
          EO ||
            (EO = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm3.847 14.89.609-.459-.29-.252-.637.435z',
            })),
          ER ||
            (ER = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm2.84 15.408.255-.376-.324-.387-.286.341z',
            })),
          ET ||
            (ET = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm4.358 12.704 1.102-.337-.144-.397-1.114.3z',
            })),
          Ej ||
            (Ej = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm3.529 14.614.637-.436-.269-.321-.662.404z',
            })),
          EG ||
            (EG = Cg.createElement('path', {
              fill: '#0094FF',
              d: 'm5.066 14.706.77-.482-.282-.088-.796.473z',
            })),
          EK ||
            (EK = Cg.createElement('path', {
              fill: '#002CFF',
              d: 'm4.002 16.474.017-.373-.404-.13-.05.363z',
            })),
          Eq ||
            (Eq = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm7.513 6.66.065.607.204 1.081-.064-.604z',
            })),
          EV ||
            (EV = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm7.555 13.589 1.102-.42-.222.117-1.116.428z',
            })),
          EH ||
            (EH = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm7.32 14.726-.126.267-.343.664.114-.24z',
            })),
          EW ||
            (EW = Cg.createElement('path', {
              fill: '#9AFF5D',
              d: 'm7.795 9.864 1.388-.236.056-.345-1.388.223z',
            })),
          EJ ||
            (EJ = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm9.329 8.964 1.327-.262.12-.28-1.327.257z',
            })),
          EZ ||
            (EZ = Cg.createElement('path', {
              fill: '#0074FF',
              d: 'm3.443 15.334.404-.443-.318-.277-.434.415z',
            })),
          EY ||
            (EY = Cg.createElement('path', {
              fill: '#0080FF',
              d: 'm4.179 15.086.58-.477-.303-.178-.61.46z',
            })),
          E1 ||
            (E1 = Cg.createElement('path', {
              fill: '#004CFF',
              d: 'm3.615 15.971.191-.424-.364-.213-.224.404z',
            })),
          E0 ||
            (E0 = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm1.257 13.452.07.034-.201-.772-.082-.086z',
            })),
          E2 ||
            (E2 = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm14.071 8.251 1.058-.432-.18-.268-1.05.434z',
            })),
          E3 ||
            (E3 = Cg.createElement('path', {
              fill: '#0084FF',
              d: 'm3.095 15.03.434-.416-.294-.353-.463.382z',
            })),
          E4 ||
            (E4 = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm13.027 7.424 1.008-.412-.245.016-.996.4z',
            })),
          E5 ||
            (E5 = Cg.createElement('path', {
              fill: '#00E0FB',
              d: 'm3.655 13.474.893-.373-.19-.397-.912.337z',
            })),
          E6 ||
            (E6 = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm3.235 14.26.662-.403-.242-.383-.688.367z',
            })),
          E7 ||
            (E7 = Cg.createElement('path', {
              fill: '#008CFF',
              d: 'm2.485 14.984.286-.341-.293-.46-.312.3z',
            })),
          E8 ||
            (E8 = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm1.592 14.213.101-.11-.245-.675-.12.058z',
            })),
          E9 ||
            (E9 = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm3.806 15.548.372-.462-.331-.195-.404.443z',
            })),
          oe ||
            (oe = Cg.createElement('path', {
              fill: '#9AFF5D',
              d: 'm13.194 9.98 1.269-.368-.045-.367-1.267.367z',
            })),
          ot ||
            (ot = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm1.993 14.72.173-.238-.278-.57-.195.19z',
            })),
          ol ||
            (ol = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm9.03 12.755 1.217-.363-.168.222-1.225.376z',
            })),
          oa ||
            (oa = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm6.387 14.174.932-.459-.248.06-.954.464z',
            })),
          or ||
            (or = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm.523 7.31.15.577.208-.876-.145-.605z',
            })),
          om ||
            (om = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm5.213 11.547 1.272-.27-.06-.404-1.278.238z',
            })),
          oi ||
            (oi = Cg.createElement('path', {
              fill: '#EEFF09',
              d: 'm11.194 7.913 1.163-.3-.194.176-1.154.288z',
            })),
          on ||
            (on = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'm13.897 7.985 1.052-.434-.206-.219-1.042.432z',
            })),
          oc ||
            (oc = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm2.77 14.643.465-.383-.267-.42-.49.343z',
            })),
          oF ||
            (oF = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm13.258 7.48 1.02-.421-.244-.047-1.008.412z',
            })),
          od ||
            (od = Cg.createElement('path', {
              fill: '#007CFF',
              d: 'm4.517 15.193.55-.487-.309-.097-.58.477z',
            })),
          oh ||
            (oh = Cg.createElement('path', {
              fill: '#0094FF',
              d: 'm5.373 14.72.743-.483-.28-.013-.77.482z',
            })),
          op ||
            (op = Cg.createElement('path', {
              fill: '#04F',
              d: 'm6.85 15.657-.19.12-.389.517.17-.095z',
            })),
          of ||
            (of = Cg.createElement('path', {
              fill: '#FF1E00',
              d: 'm1.15 3.577.131.651.471-.58-.128-.66z',
            })),
          oE ||
            (oE = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm11.905 10.817 1.289-.292-.041.348-1.288.297z',
            })),
          oo ||
            (oo = Cg.createElement('path', {
              fill: '#0048FF',
              d: 'm4.02 16.102.157-.435-.37-.12-.192.424z',
            })),
          oz ||
            (oz = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm13.7 7.764 1.04-.432-.225-.166-1.03.428z',
            })),
          os ||
            (os = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm10.5 11.816 1.285-.313-.108.298-1.288.326z',
            })),
          ou ||
            (ou = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm13.485 7.594 1.03-.428-.237-.107-1.02.42z',
            })),
          oA ||
            (oA = Cg.createElement('path', {
              fill: '#36FFC1',
              d: 'm4.203 12.27 1.113-.3-.104-.423-1.125.263z',
            })),
          og ||
            (og = Cg.createElement('path', {
              fill: '#0064FF',
              d: 'm4.177 15.665.34-.472-.338-.107-.373.461z',
            })),
          ob ||
            (ob = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm2.967 13.84.688-.367-.21-.432-.709.323z',
            })),
          ov ||
            (ov = Cg.createElement('path', {
              fill: '#FF2900',
              d: 'm6.257 3.253.093.51.471.877-.11-.507z',
            })),
          oC ||
            (oC = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm6.405 10.467 1.371-.228.02-.375-1.372.204z',
            })),
          oD ||
            (oD = Cg.createElement('path', {
              fill: '#0030FF',
              d: 'm4.437 16.499-.019-.377-.4-.021-.017.373z',
            })),
          oB ||
            (oB = Cg.createElement('path', {
              fill: '#13FCE4',
              d: 'm3.446 13.04.912-.335-.155-.434-.928.293z',
            })),
          ow ||
            (ow = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.937 11.087.014.527-.102.991-.016-.503z',
            })),
          ox ||
            (ox = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm2.166 14.482.313-.3-.254-.521-.337.252z',
            })),
          oy ||
            (oy = Cg.createElement('path', {
              fill: '#002CFF',
              d: 'm6.27 16.294-.22-.029-.416.367.197.05z',
            })),
          oS ||
            (oS = Cg.createElement('path', {
              fill: '#A80000',
              d: 'm2.09 1.939.074.617.59-.265-.073-.619z',
            })),
          oM ||
            (oM = Cg.createElement('path', {
              fill: '#00DCFE',
              d: 'm7.77 13.397 1.086-.408-.201.178-1.102.42z',
            })),
          ok ||
            (ok = Cg.createElement('path', {
              fill: 'maroon',
              d: 'M3.953 1.135v.542l.644.275-.024-.53z',
            })),
          o_ ||
            (o_ = Cg.createElement('path', {
              fill: '#0020FF',
              d: 'm4.998 16.691-.141-.286-.42.094.108.293z',
            })),
          oP ||
            (oP = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm9.45 8.68 1.327-.259.149-.24-1.327.255z',
            })),
          oU ||
            (oU = Cg.createElement('path', {
              fill: '#00C0FF',
              d: 'm2.478 14.183.49-.342-.23-.477-.51.297z',
            })),
          oN ||
            (oN = Cg.createElement('path', {
              fill: '#0020FF',
              d: 'm5.632 16.632-.208-.167-.426.225.178.182z',
            })),
          oI ||
            (oI = Cg.createElement('path', {
              fill: '#B1FF46',
              d: 'm7.85 9.506 1.389-.223.089-.319-1.388.21zM13.148 9.612l1.27-.367-.082-.355-1.265.367z',
            })),
          oX ||
            (oX = Cg.createElement('path', {
              fill: '#CEFF29',
              d: 'm.558 8.828.126.49.112-.904-.122-.526z',
            })),
          oQ ||
            (oQ = Cg.createElement('path', {
              fill: '#007CFF',
              d: 'm4.852 15.21.52-.49-.305-.014-.55.487z',
            })),
          oL ||
            (oL = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm11.393 7.8 1.177-.308-.213.122-1.163.298z',
            })),
          o$ ||
            (o$ = Cg.createElement('path', {
              fill: '#00BCFF',
              d: 'm6.642 14.037.913-.45-.236.127-.933.46z',
            })),
          oO ||
            (oO = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm1.693 14.102.196-.19-.227-.623-.215.137z',
            })),
          oR ||
            (oR = Cg.createElement('path', {
              fill: '#009CFF',
              d: 'm5.669 14.653.717-.479-.27.063-.744.484z',
            })),
          oT ||
            (oT = Cg.createElement('path', {
              fill: '#6DFF8A',
              d: 'm5.148 11.111 1.278-.238-.02-.408-1.283.204z',
            })),
          oj ||
            (oj = Cg.createElement('path', {
              fill: '#004CFF',
              d: 'm4.418 16.122.125-.437-.367-.02-.157.437z',
            })),
          oG ||
            (oG = Cg.createElement('path', {
              fill: '#23FFD4',
              d: 'm9.18 12.47 1.21-.347-.141.27-1.218.362z',
            })),
          oK ||
            (oK = Cg.createElement('path', {
              fill: '#0064FF',
              d: 'm4.544 15.685.308-.475-.335-.017-.34.472z',
            })),
          oq ||
            (oq = Cg.createElement('path', {
              fill: '#09F0EE',
              d: 'm2.737 13.363.709-.322-.17-.477-.728.278z',
            })),
          oV ||
            (oV = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'm5.74 2.493.072.517.538.754-.093-.511z',
            })),
          oH ||
            (oH = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm11.912 10.45 1.29-.286-.008.362-1.289.292z',
            })),
          oW ||
            (oW = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm1.326 13.486.12-.059-.186-.717-.135.004z',
            })),
          oJ ||
            (oJ = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm.663 10.259.097.371.021-.898-.096-.416z',
            })),
          oZ ||
            (oZ = Cg.createElement('path', {
              fill: '#920000',
              d: 'm4.571 1.42.024.53.626.45-.049-.525z',
            })),
          oY ||
            (oY = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm10.578 11.47 1.285-.3-.077.33-1.287.316zM4.088 11.81l1.125-.263-.065-.436-1.133.223z',
            })),
          o1 ||
            (o1 = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm3.275 12.564.928-.294-.115-.46-.941.251z',
            })),
          o0 ||
            (o0 = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm13.071 9.258 1.265-.367-.116-.334-1.26.367z',
            })),
          o2 ||
            (o2 = Cg.createElement('path', {
              fill: '#2CFFCA',
              d: 'm1.043 12.628.081.086-.13-.8-.09-.139z',
            })),
          o3 ||
            (o3 = Cg.createElement('path', {
              fill: '#00D4FF',
              d: 'm1.888 13.913.335-.252-.207-.572-.355.201z',
            })),
          o4 ||
            (o4 = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm.826 11.542.079.232-.061-.86-.082-.284z',
            })),
          o5 ||
            (o5 = Cg.createElement('path', {
              fill: '#B20000',
              d: 'm5.173 1.876.048.524.59.61-.071-.517z',
            })),
          o6 ||
            (o6 = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm2.225 13.66.511-.297-.188-.521-.53.247z',
            })),
          o7 ||
            (o7 = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm11.606 7.746 1.189-.318-.225.064-1.177.308z',
            })),
          o8 ||
            (o8 = Cg.createElement('path', {
              fill: '#9DFF5A',
              d: 'm6.424 10.068 1.371-.204.056-.358-1.37.182z',
            })),
          o9 ||
            (o9 = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm9.599 8.436 1.326-.252.174-.193-1.326.252z',
            })),
          ze ||
            (ze = Cg.createElement('path', {
              fill: '#09F0EE',
              d: 'm7.959 13.144 1.071-.39-.176.236-1.086.408z',
            })),
          zt ||
            (zt = Cg.createElement('path', {
              fill: '#06ECF1',
              d: 'm7.849 12.605-.059.428-.192.892.053-.4z',
            })),
          zl ||
            (zl = Cg.createElement('path', {
              fill: '#003CFF',
              d: 'm4.857 16.405-.05-.37-.389.087.017.377z',
            })),
          za ||
            (za = Cg.createElement('path', {
              fill: '#08F',
              d: 'm5.177 15.136.492-.483-.297.068-.52.49z',
            })),
          zr ||
            (zr = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm7.78 8.347.06.602.1 1.077-.059-.587z',
            })),
          zm ||
            (zm = Cg.createElement('path', {
              fill: '#FF9F00',
              d: 'm7.212 5.615.065.612.3 1.04-.064-.608z',
            })),
          zi ||
            (zi = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'm7.94 9.174 1.389-.21.122-.285-1.386.198z',
            })),
          zn ||
            (zn = Cg.createElement('path', {
              fill: '#FF5900',
              d: 'm.887 4.944.153.648.387-.7-.146-.664z',
            })),
          zc ||
            (zc = Cg.createElement('path', {
              fill: '#00D0FF',
              d: 'm6.875 13.828.895-.431-.215.192-.913.449z',
            })),
          zF ||
            (zF = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm12.958 8.922 1.26-.367-.147-.304-1.253.364z',
            })),
          zd ||
            (zd = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm5.948 14.503.694-.466-.256.137-.717.48z',
            })),
          zh ||
            (zh = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm11.826 7.752 1.2-.327-.231.004-1.189.319z',
            })),
          zp ||
            (zp = Cg.createElement('path', {
              fill: '#0070FF',
              d: 'm4.9 15.604.277-.468-.325.074-.308.475z',
            })),
          zf ||
            (zf = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm4.807 16.035.092-.43-.355.08-.126.437z',
            })),
          zE ||
            (zE = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm5.123 10.673 1.282-.204.018-.399-1.282.175z',
            })),
          zo ||
            (zo = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm11.882 10.077 1.293-.281.027.367-1.29.286z',
            })),
          zz ||
            (zz = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm2.548 12.842.727-.278-.128-.503-.741.229z',
            })),
          zs ||
            (zs = Cg.createElement('path', {
              fill: '#39FFBE',
              d: 'm9.297 12.143 1.203-.327-.111.31-1.208.343z',
            })),
          zu ||
            (zu = Cg.createElement('path', {
              fill: '#0038FF',
              d: 'm5.424 16.466-.171-.27-.396.209.14.286z',
            })),
          zA ||
            (zA = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm1.447 13.428.216-.138-.171-.662-.232.082z',
            })),
          zg ||
            (zg = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm10.622 11.103 1.285-.286-.041.354-1.284.3z',
            })),
          zb ||
            (zb = Cg.createElement('path', {
              fill: '#00B0FF',
              d: 'm7.598 13.925-.138.299-.266.77.128-.268z',
            })),
          zv ||
            (zv = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm12.818 8.615 1.253-.364-.174-.266-1.246.359z',
            })),
          zC ||
            (zC = Cg.createElement('path', {
              fill: '#6AFF8D',
              d: 'm4.015 11.335 1.133-.224-.025-.439-1.136.184z',
            })),
          zD ||
            (zD = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm12.045 7.816 1.214-.337-.232-.056-1.201.327z',
            })),
          zB ||
            (zB = Cg.createElement('path', {
              fill: '#49FFAD',
              d: 'm3.147 12.061.941-.25-.073-.475-.95.204z',
            })),
          zw ||
            (zw = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'M9.772 8.241 11.1 7.99l.192-.14-1.324.25z',
            })),
          zx ||
            (zx = Cg.createElement('path', {
              fill: '#8D0000',
              d: 'm2.68 1.671.075.62.625-.087-.073-.621z',
            })),
          zy ||
            (zy = Cg.createElement('path', {
              fill: '#0040FF',
              d: 'm6.05 16.265-.234-.145-.39.345.208.168z',
            })),
          zS ||
            (zS = Cg.createElement('path', {
              fill: '#1FFFD7',
              d: 'm2.018 13.09.53-.248-.141-.554-.545.195z',
            })),
          zM ||
            (zM = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm1.662 13.29.356-.2-.157-.607-.37.145z',
            })),
          zk ||
            (zk = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm12.651 8.344 1.245-.36-.197-.22-1.235.353z',
            })),
          z_ ||
            (z_ = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm6.48 9.688 1.371-.182.09-.332-1.367.163z',
            })),
          zP ||
            (zP = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm12.26 7.939 1.224-.346-.226-.114-1.213.337z',
            })),
          zU ||
            (zU = Cg.createElement('path', {
              fill: '#007CFF',
              d: 'm7.194 14.993-.207.152-.327.633.19-.12z',
            })),
          zN ||
            (zN = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm12.464 8.117 1.235-.353-.214-.17-1.224.345z',
            })),
          zI ||
            (zI = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm8.117 12.837 1.063-.368-.15.286-1.073.388z',
            })),
          zX ||
            (zX = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'M6.66 15.778h-.245l-.367.49.221.028z',
            })),
          zQ ||
            (zQ = Cg.createElement('path', {
              fill: '#D60000',
              d: 'm1.625 2.989.127.659.535-.426-.123-.667z',
            })),
          zL ||
            (zL = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm5.482 14.972.466-.469-.279.15-.492.483z',
            })),
          z$ ||
            (z$ = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'M8.065 8.877 9.45 8.68l.149-.245-1.381.189z',
            })),
          zO ||
            (zO = Cg.createElement('path', {
              fill: '#FF9C00',
              d: 'm.736 6.406.146.605.295-.787-.137-.631z',
            })),
          zR ||
            (zR = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm1.125 12.714.135-.004-.122-.742-.144-.053z',
            })),
          zT ||
            (zT = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm11.818 9.71 1.294-.276.062.362-1.293.281z',
            })),
          zj ||
            (zj = Cg.createElement('path', {
              fill: '#0050FF',
              d: 'm5.253 16.195-.082-.354-.365.194.05.37z',
            })),
          zG ||
            (zG = Cg.createElement('path', {
              fill: '#00E4F8',
              d: 'm7.08 13.553.879-.408-.19.253-.894.43z',
            })),
          zK ||
            (zK = Cg.createElement('path', {
              fill: '#00C0FF',
              d: 'm6.202 14.275.673-.447-.233.209-.694.466z',
            })),
          zq ||
            (zq = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm9.967 8.099 1.324-.25.207-.081-1.322.249z',
            })),
          zV ||
            (zV = Cg.createElement('path', {
              fill: '#A0FF56',
              d: 'm5.14 10.242 1.283-.174.057-.38-1.28.144z',
            })),
          zH ||
            (zH = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm9.377 11.775 1.201-.306-.078.347-1.205.327z',
            })),
          zW ||
            (zW = Cg.createElement('path', {
              fill: '#0080FF',
              d: 'm5.235 15.425.248-.453-.305.164-.278.468z',
            })),
          zJ ||
            (zJ = Cg.createElement('path', {
              fill: '#46FFB1',
              d: 'm2.406 12.288.741-.228-.082-.521-.75.177z',
            })),
          zZ ||
            (zZ = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.947 10.028.019.55-.004 1.037-.02-.528z',
            })),
          zY ||
            (zY = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm10.626 10.72 1.286-.27-.007.367-1.284.285z',
            })),
          z1 ||
            (z1 = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm5.172 15.84.063-.415-.335.18-.092.43z',
            })),
          z0 ||
            (z0 = Cg.createElement('path', {
              fill: '#5DFF9A',
              d: 'm.903 11.775.092.14-.057-.805-.096-.195z',
            })),
          z2 ||
            (z2 = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'm6.821 4.64.066.616.388.97-.065-.612z',
            })),
          z3 ||
            (z3 = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm.674 7.887.122.526.2-.842-.114-.561z',
            })),
          z4 ||
            (z4 = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm3.987 10.856 1.136-.184.018-.43-1.137.146z',
            })),
          z5 ||
            (z5 = Cg.createElement('path', {
              fill: '#6AFF8D',
              d: 'm3.065 11.539.95-.204-.028-.479-.956.159z',
            })),
          z6 ||
            (z6 = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm11.72 9.358 1.298-.27.095.346-1.295.276z',
            })),
          z7 ||
            (z7 = Cg.createElement('path', {
              fill: '#36FFC1',
              d: 'm1.26 12.71.232-.082-.112-.683-.24.023z',
            })),
          z8 ||
            (z8 = Cg.createElement('path', {
              fill: '#CAFF2C',
              d: 'm6.574 9.335 1.367-.163.122-.296-1.36.144z',
            })),
          z9 ||
            (z9 = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm8.218 8.625 1.38-.189.174-.195-1.375.18z',
            })),
          se ||
            (se = Cg.createElement('path', {
              fill: '#90FF66',
              d: 'm.76 10.63.082.284.02-.847-.082-.334z',
            })),
          st ||
            (st = Cg.createElement('path', {
              fill: '#CAFF2C',
              d: 'm.685 9.317.096.416.107-.86-.092-.46z',
            })),
          sl ||
            (sl = Cg.createElement('path', {
              fill: '#40FFB7',
              d: 'm1.861 12.483.545-.195-.091-.571-.555.14z',
            })),
          sa ||
            (sa = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm10.176 8.015 1.322-.249.217-.025-1.32.25z',
            })),
          sr ||
            (sr = Cg.createElement('path', {
              fill: '#0054FF',
              d: 'm5.814 16.12-.2-.244-.361.32.171.271z',
            })),
          sm ||
            (sm = Cg.createElement('path', {
              fill: '#33FFC4',
              d: 'm8.24 12.481 1.057-.338-.116.326-1.064.367z',
            })),
          si ||
            (si = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm1.492 12.628.37-.145-.101-.626-.38.088z',
            })),
          sn ||
            (sn = Cg.createElement('path', {
              fill: '#00ACFF',
              d: 'm5.761 14.723.441-.45-.255.228-.465.47z',
            })),
          sc ||
            (sc = Cg.createElement('path', {
              fill: 'maroon',
              d: 'm3.307 1.583.073.621.643.095-.072-.622z',
            })),
          sF ||
            (sF = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.577 7.267.063.616.2 1.067-.06-.603z',
            })),
          sd ||
            (sd = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm11.59 9.03 1.301-.265.127.323-1.299.27z',
            })),
          sh ||
            (sh = Cg.createElement('path', {
              fill: '#94FF63',
              d: 'm10.593 10.334 1.29-.257.029.372-1.287.272z',
            })),
          sp ||
            (sp = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm7.251 13.218.866-.382-.158.308-.88.408z',
            })),
          sf ||
            (sf = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm6.426 13.974.653-.42-.204.274-.673.447z',
            })),
          sE ||
            (sE = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm9.42 11.386 1.202-.283-.04.367-1.205.305z',
            })),
          so ||
            (so = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm10.395 7.99 1.32-.249.22.036-1.317.249z',
            })),
          sz ||
            (sz = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm5.2 9.832 1.28-.144.094-.353-1.275.116z',
            })),
          ss ||
            (ss = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm7.95 11.615-.062.458-.1.96.06-.428z',
            })),
          su ||
            (su = Cg.createElement('path', {
              fill: '#FF2500',
              d: 'm1.281 4.228.146.665.46-.566-.136-.68z',
            })),
          sA ||
            (sA = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm2.315 11.716.75-.177-.034-.524-.755.125z',
            })),
          sg ||
            (sg = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm5.54 15.153.221-.43-.279.25-.247.452z',
            })),
          sb ||
            (sb = Cg.createElement('path', {
              fill: '#0068FF',
              d: 'm6.416 15.777-.26-.114-.342.457.237.145z',
            })),
          sv ||
            (sv = Cg.createElement('path', {
              fill: '#E1FF16',
              d: 'm11.433 8.735 1.306-.26.154.29-1.302.265z',
            })),
          sC ||
            (sC = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm8.397 8.421 1.375-.18.195-.142-1.37.175z',
            })),
          sD ||
            (sD = Cg.createElement('path', {
              fill: '#006CFF',
              d: 'm5.615 15.874-.11-.33-.333.297.082.354z',
            })),
          sB ||
            (sB = Cg.createElement('path', {
              fill: '#FF2900',
              d: 'm6.35 3.764.068.618.47.874-.065-.616z',
            })),
          sw ||
            (sw = Cg.createElement('path', {
              fill: '#60FF97',
              d: 'm.995 11.915.144.053-.052-.748-.149-.11z',
            })),
          sx ||
            (sx = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm10.618 8.026 1.318-.25.218.094-1.315.25z',
            })),
          sy ||
            (sy = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm6.704 9.02 1.36-.143.154-.253-1.354.127z',
            })),
          sS ||
            (sS = Cg.createElement('path', {
              fill: '#A4FF53',
              d: 'm4.004 10.388 1.137-.145.059-.41-1.134.106z',
            })),
          sM ||
            (sM = Cg.createElement('path', {
              fill: '#0080FF',
              d: 'm5.505 15.544.034-.391-.304.272-.062.416z',
            })),
          sk ||
            (sk = Cg.createElement('path', {
              fill: '#87FF70',
              d: 'm3.03 11.015.955-.159.017-.469-.954.113z',
            })),
          s_ ||
            (s_ = Cg.createElement('path', {
              fill: '#EEFF09',
              d: 'm11.252 8.481 1.306-.257.178.25-1.306.26z',
            })),
          sP ||
            (sP = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm10.84 8.122 1.314-.251.21.15-1.312.254z',
            })),
          sU ||
            (sU = Cg.createElement('path', {
              fill: '#AD0000',
              d: 'm2.164 2.555.123.667.584-.26-.116-.671z',
            })),
          sN ||
            (sN = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm11.053 8.275 1.31-.255.197.204-1.306.257z',
            })),
          sI ||
            (sI = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm7.79 13.033-.147.334-.184.857.139-.299z',
            })),
          sX ||
            (sX = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm10.524 9.952 1.294-.242.064.367-1.289.257z',
            })),
          sQ ||
            (sQ = Cg.createElement('path', {
              fill: '#4DFFAA',
              d: 'm8.326 12.089 1.051-.314-.082.364-1.056.34z',
            })),
          sL ||
            (sL = Cg.createElement('path', {
              fill: '#08F',
              d: 'm6.986 15.145-.263.035-.307.597h.245z',
            })),
          s$ ||
            (s$ = Cg.createElement('path', {
              fill: 'maroon',
              d: 'm3.951 1.677.072.622.643.275-.07-.622z',
            })),
          sO ||
            (sO = Cg.createElement('path', {
              fill: '#66FF90',
              d: 'm1.76 11.857.555-.14-.038-.576-.56.085z',
            })),
          sR ||
            (sR = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm7.46 14.224-.22.189-.254.732.207-.151z',
            })),
          sT ||
            (sT = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm6.006 14.393.42-.419-.224.301-.44.45z',
            })),
          sj ||
            (sj = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm9.423 10.98 1.203-.26-.005.383-1.202.283z',
            })),
          sG ||
            (sG = Cg.createElement('path', {
              fill: '#60FF97',
              d: 'm1.14 11.968.24-.024-.047-.69-.245-.034z',
            })),
          sK ||
            (sK = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm8.597 8.274 1.37-.175.209-.084-1.362.171z',
            })),
          sq ||
            (sq = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'm5.812 3.01.068.62.538.752-.067-.618z',
            })),
          sV ||
            (sV = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm1.38 11.944.38-.088-.043-.632-.384.03z',
            })),
          sH ||
            (sH = Cg.createElement('path', {
              fill: '#90FF66',
              d: 'm.842 10.914.096.195.019-.792-.095-.25z',
            })),
          sW ||
            (sW = Cg.createElement('path', {
              fill: '#2CFFCA',
              d: 'm7.384 12.832.857-.35-.122.354-.866.382z',
            })),
          sJ ||
            (sJ = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm5.3 9.451 1.274-.116.13-.315-1.265.092z',
            })),
          sZ ||
            (sZ = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'm1.04 5.593.137.631.377-.677-.127-.653z',
            })),
          sY ||
            (sY = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm6.612 13.607.639-.389-.172.335-.653.421z',
            })),
          s1 ||
            (s1 = Cg.createElement('path', {
              fill: '#920000',
              d: 'm4.595 1.952.07.622.625.449-.07-.622z',
            })),
          s0 ||
            (s0 = Cg.createElement('path', {
              fill: '#EEFF09',
              d: 'm6.864 8.752 1.354-.127.18-.204-1.345.114z',
            })),
          s2 ||
            (s2 = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm10.421 9.585 1.299-.227.098.352-1.294.242z',
            })),
          s3 ||
            (s3 = Cg.createElement('path', {
              fill: '#007CFF',
              d: 'm6.157 15.663-.225-.215-.318.426.2.245z',
            })),
          s4 ||
            (s4 = Cg.createElement('path', {
              fill: '#B20000',
              d: 'm5.221 2.4.07.622.589.608-.068-.62z',
            })),
          s5 ||
            (s5 = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.84 8.95.016.574.098 1.054-.014-.55z',
            })),
          s6 ||
            (s6 = Cg.createElement('path', {
              fill: '#8AFF6D',
              d: 'm2.277 11.14.755-.126.017-.514-.753.075z',
            })),
          s7 ||
            (s7 = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm8.814 8.186 1.362-.171.22-.025-1.355.171z',
            })),
          s8 ||
            (s8 = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'M4.066 9.939 5.2 9.83l.1-.38-1.127.073z',
            })),
          s9 ||
            (s9 = Cg.createElement('path', {
              fill: '#00B4FF',
              d: 'm5.806 14.792.199-.4-.245.33-.222.43z',
            })),
          ue ||
            (ue = Cg.createElement('path', {
              fill: '#FFA300',
              d: 'm7.275 6.226.067.63.297 1.027-.063-.616z',
            })),
          ut ||
            (ut = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'm.781 9.735.082.334.101-.81-.075-.384z',
            })),
          ul ||
            (ul = Cg.createElement('path', {
              fill: '#A7FF50',
              d: 'm3.049 10.5.954-.112.063-.45-.951.07z',
            })),
          ua ||
            (ua = Cg.createElement('path', {
              fill: '#FFA300',
              d: 'm.882 7.011.115.56.286-.755-.105-.592z',
            })),
          ur ||
            (ur = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm8.37 11.668 1.05-.282-.041.39-1.052.313z',
            })),
          um ||
            (um = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm9.387 10.57 1.206-.236.033.387-1.203.26z',
            })),
          ui ||
            (ui = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm.796 8.413.092.46.192-.8-.082-.5z',
            })),
          un ||
            (un = Cg.createElement('path', {
              fill: '#D4FF23',
              d: 'm10.285 9.245 1.306-.214.13.326-1.299.228z',
            })),
          uc ||
            (uc = Cg.createElement('path', {
              fill: '#0090FF',
              d: 'm5.932 15.449-.134-.298-.293.393.11.33z',
            })),
          uF ||
            (uF = Cg.createElement('path', {
              fill: '#00A0FF',
              d: 'm5.798 15.15.009-.358-.268.36-.034.392z',
            })),
          ud ||
            (ud = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm9.041 8.161 1.354-.17.223.035-1.347.173z',
            })),
          uh ||
            (uh = Cg.createElement('path', {
              fill: '#8DFF6A',
              d: 'm.938 11.11.149.11.018-.735-.148-.168z',
            })),
          up ||
            (up = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm5.436 9.112 1.265-.092.161-.268-1.256.07z',
            })),
          uf ||
            (uf = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm7.053 8.536 1.344-.115.2-.147-1.333.105z',
            })),
          uE ||
            (uE = Cg.createElement('path', {
              fill: '#8AFF6D',
              d: 'm1.718 11.224.56-.084.018-.565-.56.03z',
            })),
          uo ||
            (uo = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm6.21 13.99.402-.383-.186.367-.42.42z',
            })),
          uz ||
            (uz = Cg.createElement('path', {
              fill: '#0098FF',
              d: 'm6.723 15.18-.28-.077-.286.56.26.114z',
            })),
          us ||
            (us = Cg.createElement('path', {
              fill: '#46FFB1',
              d: 'm7.475 12.403.85-.314-.084.392-.857.35z',
            })),
          uu ||
            (uu = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm10.12 8.937 1.313-.202.157.295-1.306.214z',
            })),
          uA ||
            (uA = Cg.createElement('path', {
              fill: '#920000',
              d: 'm2.755 2.29.116.672.618-.085-.11-.673z',
            })),
          ug ||
            (ug = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'm1.752 3.648.136.679.524-.416-.126-.69z',
            })),
          ub ||
            (ub = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm9.272 8.199 1.347-.173.222.096-1.338.176z',
            })),
          uv ||
            (uv = Cg.createElement('path', {
              fill: '#26FFD1',
              d: 'm6.757 13.184.627-.352-.133.386-.64.39z',
            })),
          uC ||
            (uC = Cg.createElement('path', {
              fill: '#83FF73',
              d: 'm7.954 10.578-.063.49-.003 1.005.062-.459z',
            })),
          uD ||
            (uD = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm9.932 8.673 1.32-.191.18.254-1.311.202z',
            })),
          uB ||
            (uB = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm9.502 8.298 1.338-.176.213.153-1.329.183z',
            })),
          uw ||
            (uw = Cg.createElement('path', {
              fill: '#8DFF6A',
              d: 'm1.087 11.22.245.035.017-.677-.245-.092zM1.333 11.255l.384-.03.018-.62-.385-.027z',
            })),
          ux ||
            (ux = Cg.createElement('path', {
              fill: '#ADFF49',
              d: 'm9.312 10.163 1.212-.211.07.382-1.207.235z',
            })),
          uy ||
            (uy = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm9.724 8.458 1.329-.183.2.206-1.321.192z',
            })),
          uS ||
            (uS = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'M4.174 9.524 5.3 9.451l.137-.34-1.117.041z',
            })),
          uM ||
            (uM = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm8.372 11.23 1.051-.25-.004.408-1.05.282z',
            })),
          uk ||
            (uk = Cg.createElement('path', {
              fill: '#AAFF4D',
              d: 'm2.296 10.575.755-.075.066-.49-.75.027z',
            })),
          u_ ||
            (u_ = Cg.createElement('path', {
              fill: '#00C4FF',
              d: 'm7.24 14.412-.278.076-.24.694.264-.035z',
            })),
          uP ||
            (uP = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm7.264 8.38 1.334-.106.216-.088-1.321.1z',
            })),
          uU ||
            (uU = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm3.115 10.009.95-.07.107-.415-.942.03z',
            })),
          uN ||
            (uN = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm6.03 14.352.18-.361-.205.402-.2.399z',
            })),
          uI ||
            (uI = Cg.createElement('path', {
              fill: '#46FFB1',
              d: 'm7.888 12.073-.151.372-.094.922.147-.334z',
            })),
          uX ||
            (uX = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm.862 10.067.095.25.095-.758-.088-.302z',
            })),
          uQ ||
            (uQ = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm6.887 5.256.07.64.386.96-.068-.63z',
            })),
          uL ||
            (uL = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm5.608 8.821 1.256-.07.189-.215-1.244.052z',
            })),
          u$ ||
            (u$ = Cg.createElement('path', {
              fill: '#00A8FF',
              d: 'm6.443 15.103-.245-.175-.266.52.225.215z',
            })),
          uO ||
            (uO = Cg.createElement('path', {
              fill: '#0FF8E7',
              d: 'm7.643 13.367-.23.23-.174.816.22-.189z',
            })),
          uR ||
            (uR = Cg.createElement('path', {
              fill: '#C4FF33',
              d: 'm9.2 9.775 1.22-.188.104.367-1.212.211z',
            })),
          uT ||
            (uT = Cg.createElement('path', {
              fill: '#63FF94',
              d: 'm7.52 11.945.849-.277-.045.42-.85.315z',
            })),
          uj ||
            (uj = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.64 7.883.02.597.196 1.044-.015-.574z',
            })),
          uG ||
            (uG = Cg.createElement('path', {
              fill: '#FF3000',
              d: 'm1.427 4.893.127.653.449-.547-.115-.672z',
            })),
          uK ||
            (uK = Cg.createElement('path', {
              fill: '#00C8FF',
              d: 'm6.042 14.673-.012-.32-.224.439-.01.359z',
            })),
          uq ||
            (uq = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm7.493 8.286 1.321-.1.227-.025-1.308.098z',
            })),
          uV ||
            (uV = Cg.createElement('path', {
              fill: '#00B8FF',
              d: 'm6.197 14.928-.155-.257-.245.48.134.297z',
            })),
          uH ||
            (uH = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm6.368 13.526.389-.342-.145.423-.402.384z',
            })),
          uW ||
            (uW = Cg.createElement('path', {
              fill: '#ADFF49',
              d: 'm1.735 10.605.559-.03.07-.54-.553-.023z',
            })),
          uJ ||
            (uJ = Cg.createElement('path', {
              fill: '#840000',
              d: 'm3.38 2.204.11.673.635.096-.102-.674z',
            })),
          uZ ||
            (uZ = Cg.createElement('path', {
              fill: '#97FF60',
              d: 'm8.33 10.785 1.057-.216.036.411-1.051.25z',
            })),
          uY ||
            (uY = Cg.createElement('path', {
              fill: '#43FFB4',
              d: 'm6.855 12.714.62-.311-.091.428-.627.352z',
            })),
          u1 ||
            (u1 = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm.888 8.873.075.384.181-.754-.065-.43z',
            })),
          u0 ||
            (u0 = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm9.055 9.41 1.23-.165.136.341-1.22.19z',
            })),
          u2 ||
            (u2 = Cg.createElement('path', {
              fill: '#EEFF09',
              d: 'm4.32 9.154 1.116-.041.172-.29-1.102.015z',
            })),
          u3 ||
            (u3 = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm.957 10.317.148.168.089-.702-.142-.224z',
            })),
          u4 ||
            (u4 = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm5.81 8.588 1.243-.052.211-.157-1.228.041z',
            })),
          u5 ||
            (u5 = Cg.createElement('path', {
              fill: 'gold',
              d: 'm7.733 8.259 1.308-.098.232.038-1.295.1z',
            })),
          u6 ||
            (u6 = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm1.177 6.224.105.594.36-.65-.09-.621z',
            })),
          u7 ||
            (u7 = Cg.createElement('path', {
              fill: '#CAFF2C',
              d: 'm2.365 10.035.75-.026.115-.456-.741-.018z',
            })),
          u8 ||
            (u8 = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm1.35 10.578.384.027.077-.593-.379-.082z',
            })),
          u9 ||
            (u9 = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm.997 7.571.081.501.272-.717-.07-.54z',
            })),
          Ae ||
            (Ae = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm3.23 9.553.942-.029.147-.37-.93-.008z',
            })),
          At ||
            (At = Cg.createElement('path', {
              fill: '#FF2D00',
              d: 'm6.418 4.382.076.653.464.863-.071-.641z',
            })),
          Al ||
            (Al = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm8.88 9.084 1.24-.147.164.307-1.23.167z',
            })),
          Aa ||
            (Aa = Cg.createElement('path', {
              fill: '#0CF',
              d: 'm6.961 14.488-.295-.032-.223.647.28.077z',
            })),
          Ar ||
            (Ar = Cg.createElement('path', {
              fill: '#B00',
              d: 'm2.286 3.222.127.689.57-.252-.114-.697z',
            })),
          Am ||
            (Am = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm1.105 10.486.245.092.081-.647-.237-.148z',
            })),
          Ai ||
            (Ai = Cg.createElement('path', {
              fill: 'gold',
              d: 'm7.978 8.3 1.294-.101.23.1-1.28.107z',
            })),
          An ||
            (An = Cg.createElement('path', {
              fill: '#7DFF7A',
              d: 'm7.52 11.466.85-.236-.002.438-.848.277z',
            })),
          Ac ||
            (Ac = Cg.createElement('path', {
              fill: '#B1FF46',
              d: 'm8.249 10.347 1.061-.184.075.406-1.056.216z',
            })),
          AF ||
            (AF = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm6.203 13.843.164-.317-.158.465-.18.36z',
            })),
          Ad ||
            (Ad = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm8.678 8.804 1.254-.13.188.264-1.24.147z',
            })),
          Ah ||
            (Ah = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm8.222 8.406 1.28-.108.222.16-1.265.117z',
            })),
          Ap ||
            (Ap = Cg.createElement('path', {
              fill: '#890000',
              d: 'm4.023 2.3.102.673.636.272-.095-.672z',
            })),
          Af ||
            (Af = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm8.459 8.575 1.265-.117.208.214-1.253.132z',
            })),
          AE ||
            (AE = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm7.856 9.524-.06.523.095 1.02.063-.49z',
            })),
          Ao ||
            (Ao = Cg.createElement('path', {
              fill: 'gold',
              d: 'm6.036 8.42 1.228-.041.229-.093-1.211.032z',
            })),
          Az ||
            (Az = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm4.504 8.837 1.102-.016.202-.233-1.086-.006z',
            })),
          As ||
            (As = Cg.createElement('path', {
              fill: '#60FF97',
              d: 'm6.905 12.211.617-.266-.047.458-.62.311z',
            })),
          Au ||
            (Au = Cg.createElement('path', {
              fill: '#3CFFBA',
              d: 'm6.475 13.01.38-.296-.098.47-.39.342z',
            })),
          AA ||
            (AA = Cg.createElement('path', {
              fill: '#E40000',
              d: 'm5.88 3.63.082.66.53.743-.076-.653z',
            })),
          Ag ||
            (Ag = Cg.createElement('path', {
              fill: '#00D8FF',
              d: 'm6.666 14.456-.263-.13-.204.602.245.175z',
            })),
          Ab ||
            (Ab = Cg.createElement('path', {
              fill: '#16FFE1',
              d: 'm7.414 13.597-.29.122-.162.77.278-.076z',
            })),
          Av ||
            (Av = Cg.createElement('path', {
              fill: '#0CF4EB',
              d: 'm6.23 14.116-.027-.273-.173.509.011.32z',
            })),
          AC ||
            (AC = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm1.811 10.012.554.023.122-.5-.543-.072z',
            })),
          AD ||
            (AD = Cg.createElement('path', {
              fill: '#9B0000',
              d: 'm4.666 2.574.095.67.618.444-.089-.667z',
            })),
          AB ||
            (AB = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'm.964 9.257.088.302.17-.704-.077-.352z',
            })),
          Aw ||
            (Aw = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'm8.127 9.926 1.074-.152.111.39-1.061.183z',
            })),
          Ax ||
            (Ax = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm7.344 6.855.025.62.29 1.005-.019-.597z',
            })),
          Ay ||
            (Ay = Cg.createElement('path', {
              fill: '#B00',
              d: 'm5.29 3.022.09.667.582.602-.082-.66z',
            })),
          AS ||
            (AS = Cg.createElement('path', {
              fill: '#02E8F4',
              d: 'm6.403 14.327-.173-.21-.189.556.156.257z',
            })),
          AM ||
            (AM = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm7.891 11.068-.151.412-.002.965.15-.372z',
            })),
          Ak ||
            (Ak = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm3.39 9.146.93.008.184-.317-.913-.039z',
            })),
          A_ ||
            (A_ = Cg.createElement('path', {
              fill: '#9AFF5D',
              d: 'm7.476 10.982.855-.197.04.445-.85.236z',
            })),
          AP ||
            (AP = Cg.createElement('path', {
              fill: '#49FFAD',
              d: 'm7.738 12.445-.235.274-.09.878.23-.23z',
            })),
          AU ||
            (AU = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm6.281 8.319 1.211-.033.24-.027-1.191.03z',
            })),
          AN ||
            (AN = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm2.489 9.535.74.018.16-.408-.726-.058z',
            })),
          AI ||
            (AI = Cg.createElement('path', {
              fill: '#F10800',
              d: 'M1.888 4.327 2.003 5l.509-.401-.1-.688z',
            })),
          AX ||
            (AX = Cg.createElement('path', {
              fill: '#DBFF1C',
              d: 'm1.432 9.93.38.082.134-.549-.368-.132z',
            })),
          AQ ||
            (AQ = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm7.97 9.534 1.086-.122.145.363-1.073.152z',
            })),
          AL ||
            (AL = Cg.createElement('path', {
              fill: 'gold',
              d: 'm4.723 8.582 1.086.006.227-.169-1.068-.021z',
            })),
          A$ ||
            (A$ = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm1.052 9.56.142.223.157-.653-.129-.275z',
            })),
          AO ||
            (AO = Cg.createElement('path', {
              fill: '#9F0000',
              d: 'm2.87 2.962.116.697.606-.082-.103-.7z',
            })),
          AR ||
            (AR = Cg.createElement('path', {
              fill: '#36FFC1',
              d: 'm6.32 13.278.155-.267-.107.515-.164.317z',
            })),
          AT ||
            (AT = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm1.08 8.074.064.43.257-.677-.05-.47z',
            })),
          Aj ||
            (Aj = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm6.54 8.29 1.194-.031.245.04-1.174.034z',
            })),
          AG ||
            (AG = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm6.905 11.686.615-.22v.479l-.616.266z',
            })),
          AK ||
            (AK = Cg.createElement('path', {
              fill: '#E1FF16',
              d: 'm1.194 9.783.238.148.146-.6-.227-.201z',
            })),
          Aq ||
            (Aq = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm7.779 9.181 1.102-.097.175.327-1.086.122z',
            })),
          AV ||
            (AV = Cg.createElement('path', {
              fill: '#5DFF9A',
              d: 'm6.53 12.458.375-.245-.05.501-.38.296z',
            })),
          AH ||
            (AH = Cg.createElement('path', {
              fill: '#FF3B00',
              d: 'm1.554 5.547.089.622.431-.524L2.001 5z',
            })),
          AW ||
            (AW = Cg.createElement('path', {
              fill: '#1CFFDB',
              d: 'm7.125 13.718-.307.017-.152.72.296.033z',
            })),
          AJ ||
            (AJ = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm7.385 10.504.864-.157.082.438-.855.196z',
            })),
          AZ ||
            (AZ = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm6.804 8.333 1.174-.034.245.107-1.155.04z',
            })),
          AY ||
            (AY = Cg.createElement('path', {
              fill: '#FF7A00',
              d: 'm1.281 6.817.07.54.346-.617-.053-.572z',
            })),
          A1 ||
            (A1 = Cg.createElement('path', {
              fill: '#FFEA00',
              d: 'm7.561 8.877 1.118-.074.201.28-1.102.098z',
            })),
          A0 ||
            (A0 = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm3.59 8.798.914.039.219-.255-.894-.063z',
            })),
          A2 ||
            (A2 = Cg.createElement('path', {
              fill: '#FFD000',
              d: 'm7.067 8.448 1.155-.041.235.17-1.136.055z',
            })),
          A3 ||
            (A3 = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'm1.946 9.463.543.072.174-.449-.527-.116z',
            })),
          A4 ||
            (A4 = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm7.321 8.632 1.138-.057.221.229-1.119.073z',
            })),
          A5 ||
            (A5 = Cg.createElement('path', {
              fill: '#FFC800',
              d: 'm4.969 8.398 1.067.021.245-.1-1.046-.031z',
            })),
          A6 ||
            (A6 = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm6.958 5.898.033.64.378.939-.025-.62z',
            })),
          A7 ||
            (A7 = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm7.66 8.48-.054.555.19 1.012.06-.523z',
            })),
          A8 ||
            (A8 = Cg.createElement('path', {
              fill: '#30FFC7',
              d: 'm6.359 13.5-.038-.222-.118.565.027.273z',
            })),
          A9 ||
            (A9 = Cg.createElement('path', {
              fill: '#FFE600',
              d: 'm2.663 9.087.727.06.201-.349-.708-.094z',
            })),
          ge ||
            (ge = Cg.createElement('path', {
              fill: '#23FFD4',
              d: 'm6.818 13.734-.275-.077-.14.669.263.129z',
            })),
          gt ||
            (gt = Cg.createElement('path', {
              fill: '#29FFCE',
              d: 'M6.543 13.658 6.36 13.5l-.129.616.173.21z',
            })),
          gl ||
            (gl = Cg.createElement('path', {
              fill: '#D1FF26',
              d: 'm7.251 10.044.876-.118.123.421-.864.157z',
            })),
          ga ||
            (ga = Cg.createElement('path', {
              fill: '#9DFF5A',
              d: 'm6.853 11.155.623-.173.044.484-.617.22z',
            })),
          gr ||
            (gr = Cg.createElement('path', {
              fill: '#FFC400',
              d: 'm1.145 8.503.077.352.24-.63-.06-.398z',
            })),
          gm ||
            (gm = Cg.createElement('path', {
              fill: '#4DFFAA',
              d: 'm7.503 12.719-.295.17-.081.83.288-.123z',
            })),
          gi ||
            (gi = Cg.createElement('path', {
              fill: '#920000',
              d: 'm3.49 2.878.102.7.622.095-.09-.7z',
            })),
          gn ||
            (gn = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm5.235 8.288 1.046.03.258-.028-1.023-.034z',
            })),
          gc ||
            (gc = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm1.578 9.33.368.133.19-.49-.351-.179z',
            })),
          gF ||
            (gF = Cg.createElement('path', {
              fill: '#5AFF9D',
              d: 'm6.38 12.673.15-.214-.055.553-.154.268z',
            })),
          gd ||
            (gd = Cg.createElement('path', {
              fill: '#C80000',
              d: 'm2.413 3.911.099.688.556-.243-.082-.697z',
            })),
          gh ||
            (gh = Cg.createElement('path', {
              fill: '#BEFF39',
              d: 'm7.797 10.047-.149.452.092.98.151-.412z',
            })),
          gp ||
            (gp = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm6.528 11.881.377-.195v.525l-.376.245z',
            })),
          gf ||
            (gf = Cg.createElement('path', {
              fill: '#FFC800',
              d: 'm3.829 8.519.894.063.245-.184-.871-.082z',
            })),
          gE ||
            (gE = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm7.74 11.48-.236.32v.918l.235-.273z',
            })),
          go ||
            (go = Cg.createElement('path', {
              fill: '#E7FF0F',
              d: 'm7.078 9.616.89-.082.16.392-.877.118z',
            })),
          gz ||
            (gz = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'm1.222 8.855.13.275.223-.585-.113-.32z',
            })),
          gs ||
            (gs = Cg.createElement('path', {
              fill: '#FF3400',
              d: 'm6.493 5.033.043.66.454.844-.032-.64z',
            })),
          gu ||
            (gu = Cg.createElement('path', {
              fill: '#FFDE00',
              d: 'm1.352 9.13.226.2.207-.538-.21-.247z',
            })),
          gA ||
            (gA = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm5.517 8.256 1.023.034.264.043-.998-.03z',
            })),
          gg ||
            (gg = Cg.createElement('path', {
              fill: 'gold',
              d: 'm2.136 8.971.527.116.22-.383-.505-.153z',
            })),
          gb ||
            (gb = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm2.883 8.704.708.094.238-.28-.686-.122z',
            })),
          gv ||
            (gv = Cg.createElement('path', {
              fill: '#FF8600',
              d: 'm1.351 7.356.05.471.327-.58-.03-.507z',
            })),
          gC ||
            (gC = Cg.createElement('path', {
              fill: '#BAFF3C',
              d: 'm6.752 10.63.633-.127.091.479-.623.173z',
            })),
          gD ||
            (gD = Cg.createElement('path', {
              fill: '#960000',
              d: 'm4.125 2.973.09.7.622.268-.077-.694z',
            })),
          gB ||
            (gB = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm6.867 9.23.91-.049.19.353-.89.082z',
            })),
          gw ||
            (gw = Cg.createElement('path', {
              fill: '#56FFA0',
              d: 'm6.423 12.837-.044-.164-.058.607.038.221z',
            })),
          gx ||
            (gx = Cg.createElement('path', {
              fill: '#4DFFAA',
              d: 'm7.208 12.89-.313.069-.077.775.307-.017z',
            })),
          gy ||
            (gy = Cg.createElement('path', {
              fill: '#FF1300',
              d: 'm2.002 5 .074.645.49-.384-.054-.662z',
            })),
          gS ||
            (gS = Cg.createElement('path', {
              fill: '#FFBD00',
              d: 'm5.806 8.303 1 .03.262.115-.976-.02z',
            })),
          gM ||
            (gM = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm7.37 7.475-.047.586.283.974.054-.555z',
            })),
          gk ||
            (gk = Cg.createElement('path', {
              fill: '#F10800',
              d: 'm5.962 4.29.053.675.52.729-.042-.659z',
            })),
          g_ ||
            (g_ = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm4.097 8.316.871.081.267-.11-.845-.092z',
            })),
          gP ||
            (gP = Cg.createElement('path', {
              fill: '#FFDB00',
              d: 'm6.63 8.899.931-.022.218.304-.912.05z',
            })),
          gU ||
            (gU = Cg.createElement('path', {
              fill: '#FF4A00',
              d: 'm1.643 6.169.052.571.412-.497-.033-.598z',
            })),
          gN ||
            (gN = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm6.092 8.428.975.02.255.183H6.37z',
            })),
          gI ||
            (gI = Cg.createElement('path', {
              fill: '#FC0',
              d: 'M6.369 8.629h.952l.24.248-.93.021z',
            })),
          gX ||
            (gX = Cg.createElement('path', {
              fill: '#A40000',
              d: 'm4.761 3.245.078.694.605.434-.065-.686z',
            })),
          gQ ||
            (gQ = Cg.createElement('path', {
              fill: '#A0FF56',
              d: 'm6.47 11.296.383-.141.052.53-.377.195z',
            })),
          gL ||
            (gL = Cg.createElement('path', {
              fill: '#C40000',
              d: 'm5.379 3.689.065.686.572.59-.054-.674z',
            })),
          g$ ||
            (g$ = Cg.createElement('path', {
              fill: '#53FFA4',
              d: 'm6.614 12.939-.19-.103-.065.663.184.158z',
            })),
          gO ||
            (gO = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm6.377 12.039.15-.158v.577l-.148.215z',
            })),
          gR ||
            (gR = Cg.createElement('path', {
              fill: '#50FFA7',
              d: 'm6.894 12.959-.28-.022-.071.72.275.077z',
            })),
          gT ||
            (gT = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm6.604 10.124.647-.081.134.46-.633.125z',
            })),
          gj ||
            (gj = Cg.createElement('path', {
              fill: '#FFC800',
              d: 'm1.785 8.792.35.18.243-.421-.33-.219z',
            })),
          gG ||
            (gG = Cg.createElement('path', {
              fill: '#AD0000',
              d: 'm2.986 3.659.081.697.59-.077-.066-.7z',
            })),
          gK ||
            (gK = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm1.401 7.827.062.397.305-.54-.04-.437z',
            })),
          gq ||
            (gq = Cg.createElement('path', {
              fill: '#FFB600',
              d: 'm3.144 8.397.685.122.268-.204-.658-.143z',
            })),
          gV ||
            (gV = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm7.504 11.8-.296.224v.866l.295-.171z',
            })),
          gH ||
            (gH = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm4.39 8.195.845.093.28-.032-.818-.096z',
            })),
          gW ||
            (gW = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm2.377 8.55.507.154.261-.307-.483-.184z',
            })),
          gJ ||
            (gJ = Cg.createElement('path', {
              fill: '#F8F500',
              d: 'm7.606 9.035-.142.492.184.972.149-.452z',
            })),
          gZ ||
            (gZ = Cg.createElement('path', {
              fill: '#FFB600',
              d: 'm1.575 8.545.21.247.261-.46-.187-.288z',
            })),
          gY ||
            (gY = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm1.462 8.224.113.321.286-.5-.09-.362z',
            })),
          g1 ||
            (g1 = Cg.createElement('path', {
              fill: '#BAFF3C',
              d: 'm7.648 10.499-.232.367.088.934.236-.32z',
            })),
          g0 ||
            (g0 = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm6.413 9.653.665-.038.173.428-.647.081z',
            })),
          g2 ||
            (g2 = Cg.createElement('path', {
              fill: '#C1FF36',
              d: 'm6.358 10.718.394-.089.101.526-.383.141z',
            })),
          g3 ||
            (g3 = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm6.433 12.146-.056-.107.003.633.056.165z',
            })),
          g4 ||
            (g4 = Cg.createElement('path', {
              fill: '#FF7300',
              d: 'm6.99 6.537-.035.614.367.91.046-.586z',
            })),
          g5 ||
            (g5 = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm4.698 8.16.819.096.285.047-.791-.091z',
            })),
          g6 ||
            (g6 = Cg.createElement('path', {
              fill: '#FF5D00',
              d: 'm1.697 6.74.03.507.39-.468-.009-.537z',
            })),
          g7 ||
            (g7 = Cg.createElement('path', {
              fill: '#A4FF53',
              d: 'm6.314 11.397.157-.1.057.584-.15.158z',
            })),
          g8 ||
            (g8 = Cg.createElement('path', {
              fill: '#DA0000',
              d: 'm2.512 4.599.054.662.535-.232-.033-.673z',
            })),
          g9 ||
            (g9 = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'M6.183 9.23h.684l.21.386-.666.038z',
            })),
          be ||
            (be = Cg.createElement('path', {
              fill: '#FFA300',
              d: 'm3.439 8.172.66.144.292-.123-.632-.155z',
            })),
          bt ||
            (bt = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm7.208 12.024-.314.127v.81l.313-.071z',
            })),
          bl ||
            (bl = Cg.createElement('path', {
              fill: '#A40000',
              d: 'm3.592 3.578.065.701.605.093-.048-.699z',
            })),
          ba ||
            (ba = Cg.createElement('path', {
              fill: '#FFAB00',
              d: 'm5.013 8.212.793.091.286.125-.764-.079z',
            })),
          br ||
            (br = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm2.046 8.332.331.219.286-.339-.304-.25z',
            })),
          bm ||
            (bm = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm6.612 12.188-.19-.04.002.69.19.101z',
            })),
          bi ||
            (bi = Cg.createElement('path', {
              fill: '#FF2500',
              d: 'm2.076 5.645.033.598.466-.364-.01-.618z',
            })),
          bn ||
            (bn = Cg.createElement('path', {
              fill: '#FC0',
              d: 'm5.92 8.866.71.033.239.331h-.686z',
            })),
          bc ||
            (bc = Cg.createElement('path', {
              fill: '#FFAE00',
              d: 'm5.328 8.35.764.078.278.2-.735-.059z',
            })),
          bF ||
            (bF = Cg.createElement('path', {
              fill: '#80FF77',
              d: 'm6.893 12.15-.281.038v.75l.28.022z',
            })),
          bd ||
            (bd = Cg.createElement('path', {
              fill: '#FF9F00',
              d: 'm2.66 8.212.484.185.294-.225-.455-.206z',
            })),
          bh ||
            (bh = Cg.createElement('path', {
              fill: '#FFBD00',
              d: 'm5.633 8.57.734.059.262.27-.71-.033z',
            })),
          bp ||
            (bp = Cg.createElement('path', {
              fill: '#E1FF16',
              d: 'm6.195 10.163.408-.039.148.505-.393.09z',
            })),
          bf ||
            (bf = Cg.createElement('path', {
              fill: '#FF3F00',
              d: 'm6.536 5.694-.022.64.442.819.035-.615z',
            })),
          bE ||
            (bE = Cg.createElement('path', {
              fill: '#FF6F00',
              d: 'm1.728 7.247.04.436.364-.436-.015-.468z',
            })),
          bo ||
            (bo = Cg.createElement('path', {
              fill: '#FFB600',
              d: 'm7.323 8.061-.13.53.273.936.141-.492z',
            })),
          bz ||
            (bz = Cg.createElement('path', {
              fill: '#FF9800',
              d: 'm3.758 8.04.632.155.307-.035L4.096 8z',
            })),
          bs ||
            (bs = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm1.859 8.044.187.288.311-.37-.161-.32z',
            })),
          bu ||
            (bu = Cg.createElement('path', {
              fill: '#B7FF40',
              d: 'm7.416 10.867-.292.276.084.88.296-.222z',
            })),
          bA ||
            (bA = Cg.createElement('path', {
              fill: '#A40000',
              d: 'm4.214 3.673.047.7.606.26-.028-.694z',
            })),
          bg ||
            (bg = Cg.createElement('path', {
              fill: '#A7FF50',
              d: 'm6.353 11.444-.039-.047.063.642.045.107z',
            })),
          bb ||
            (bb = Cg.createElement('path', {
              fill: '#C7FF30',
              d: 'm6.191 10.762.168-.044.111.578-.156.1z',
            })),
          bv ||
            (bv = Cg.createElement('path', {
              fill: '#FF8200',
              d: 'm1.768 7.683.09.361.338-.403-.063-.394z',
            })),
          bC ||
            (bC = Cg.createElement('path', {
              fill: '#F1FC06',
              d: 'm7.464 9.527-.224.416.176.924.232-.368z',
            })),
          bD ||
            (bD = Cg.createElement('path', {
              fill: '#FBF100',
              d: 'm5.984 9.645.429.01.191.47-.408.038z',
            })),
          bB ||
            (bB = Cg.createElement('path', {
              fill: '#FF1300',
              d: 'm6.015 4.965-.005.662.505.705.022-.64z',
            })),
          bw ||
            (bw = Cg.createElement('path', {
              fill: '#C40000',
              d: 'm3.068 4.356.033.673.566-.07-.01-.678z',
            })),
          bx ||
            (bx = Cg.createElement('path', {
              fill: '#B60000',
              d: 'm4.84 3.94.027.695.588.422-.01-.68z',
            })),
          by ||
            (by = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm4.096 8 .602.16.315.052-.571-.155z',
            })),
          bS ||
            (bS = Cg.createElement('path', {
              fill: '#FF8D00',
              d: 'm2.983 7.966.456.206.32-.133-.424-.22zM2.357 7.962l.304.25.322-.245-.274-.273z',
            })),
          bM ||
            (bM = Cg.createElement('path', {
              fill: '#D10000',
              d: 'm5.444 4.375.011.68.554.571.006-.662z',
            })),
          bk ||
            (bk = Cg.createElement('path', {
              fill: '#FF3800',
              d: 'm2.109 6.243.007.536.44-.341.02-.56z',
            })),
          b_ ||
            (b_ = Cg.createElement('path', {
              fill: '#ADFF49',
              d: 'm6.538 11.425-.185.02.069.701.19.041z',
            })),
          bP ||
            (bP = Cg.createElement('path', {
              fill: '#B4FF43',
              d: 'm7.124 11.144-.31.182.08.823.314-.127z',
            })),
          bU ||
            (bU = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'm5.73 9.179.453.051.23.423-.43-.01z',
            })),
          bN ||
            (bN = Cg.createElement('path', {
              fill: '#F10800',
              d: 'm2.565 5.261.01.618.51-.22.016-.63z',
            })),
          bI ||
            (bI = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm4.442 8.057.572.155.314.137-.539-.14z',
            })),
          bX ||
            (bX = Cg.createElement('path', {
              fill: '#B1FF46',
              d: 'm6.814 11.326-.276.098.074.762.282-.037z',
            })),
          bQ ||
            (bQ = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm6.01 10.152.184.011.163.555-.167.044z',
            })),
          bL ||
            (bL = Cg.createElement('path', {
              fill: '#FF7E00',
              d: 'm6.956 7.151-.117.568.355.873.13-.53z',
            })),
          b$ ||
            (b$ = Cg.createElement('path', {
              fill: '#FFB900',
              d: 'm5.441 8.777.48.089.262.364-.453-.051z',
            })),
          bO ||
            (bO = Cg.createElement('path', {
              fill: '#FF9C00',
              d: 'm4.788 8.209.54.14.304.22-.508-.118z',
            })),
          bR ||
            (bR = Cg.createElement('path', {
              fill: '#CEFF29',
              d: 'm6.218 10.75-.027.012.123.635.038.047z',
            })),
          bT ||
            (bT = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm5.125 8.451.508.118.287.297-.479-.089z',
            })),
          bj ||
            (bj = Cg.createElement('path', {
              fill: '#F70',
              d: 'm2.196 7.641.161.32.352-.269-.131-.345z',
            })),
          bG ||
            (bG = Cg.createElement('path', {
              fill: '#FF8200',
              d: 'm3.334 7.819.424.22.338-.04-.392-.225z',
            })),
          bK ||
            (bK = Cg.createElement('path', {
              fill: '#FF4A00',
              d: 'm2.116 6.78.015.467.412-.318.014-.49z',
            })),
          bq ||
            (bq = Cg.createElement('path', {
              fill: '#B60000',
              d: 'm3.657 4.28.01.68.582.09.013-.676z',
            })),
          bV ||
            (bV = Cg.createElement('path', {
              fill: '#EBFF0C',
              d: 'm7.24 9.943-.283.33.167.87.292-.276z',
            })),
          bH ||
            (bH = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'm2.133 7.247.064.394.382-.294-.035-.418z',
            })),
          bW ||
            (bW = Cg.createElement('path', {
              fill: '#F70',
              d: 'm2.709 7.694.274.274.35-.147-.24-.29z',
            })),
          bJ ||
            (bJ = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm7.194 8.592-.212.46.26.89.224-.415z',
            })),
          bZ ||
            (bZ = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm5.779 9.583.204.062.211.518-.183-.01z',
            })),
          bY ||
            (bY = Cg.createElement('path', {
              fill: '#D7FF1F',
              d: 'm6.392 10.67-.174.08.135.694.185-.02z',
            })),
          b1 ||
            (b1 = Cg.createElement('path', {
              fill: '#FF4A00',
              d: 'm6.514 6.332-.1.6.425.787.117-.568z',
            })),
          b0 ||
            (b0 = Cg.createElement('path', {
              fill: '#FF7A00',
              d: 'M3.705 7.775 4.096 8l.347.057-.358-.22z',
            })),
          b2 ||
            (b2 = Cg.createElement('path', {
              fill: '#FF1A00',
              d: 'm2.575 5.879-.018.559.48-.204.048-.572z',
            })),
          b3 ||
            (b3 = Cg.createElement('path', {
              fill: '#DA0000',
              d: 'm3.101 5.03-.016.63.538-.067.044-.634z',
            })),
          b4 ||
            (b4 = Cg.createElement('path', {
              fill: '#F4F802',
              d: 'm6.02 10.083-.009.07.18.61.027-.013z',
            })),
          b5 ||
            (b5 = Cg.createElement('path', {
              fill: '#E4FF13',
              d: 'm6.957 10.273-.3.241.157.812.31-.184z',
            })),
          b6 ||
            (b6 = Cg.createElement('path', {
              fill: '#B00',
              d: 'm4.262 4.372-.013.676.581.251.037-.666z',
            })),
          b7 ||
            (b7 = Cg.createElement('path', {
              fill: '#FFC100',
              d: 'm5.5 9.071.23.108.253.466-.204-.062z',
            })),
          b8 ||
            (b8 = Cg.createElement('path', {
              fill: '#DEFF19',
              d: 'm6.657 10.514-.265.157.145.754.277-.099z',
            })),
          b9 ||
            (b9 = Cg.createElement('path', {
              fill: '#FF6000',
              d: 'm2.578 7.347.131.345.383-.161-.098-.36z',
            })),
          ve ||
            (ve = Cg.createElement('path', {
              fill: '#FF7E00',
              d: 'm4.085 7.839.358.218.346.152-.324-.204z',
            })),
          vt ||
            (vt = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm3.092 7.53.242.289.37-.043-.206-.293z',
            })),
          vl ||
            (vl = Cg.createElement('path', {
              fill: '#FF1E00',
              d: 'm6.01 5.627-.082.628.486.677.1-.6z',
            })),
          va ||
            (va = Cg.createElement('path', {
              fill: '#FFA700',
              d: 'm5.182 8.63.26.147.288.402-.23-.108z',
            })),
          vr ||
            (vr = Cg.createElement('path', {
              fill: '#C80000',
              d: 'm4.867 4.633-.037.666.565.406.06-.65z',
            })),
          vm ||
            (vm = Cg.createElement('path', {
              fill: '#FF8600',
              d: 'm4.465 8.005.324.204.335.242-.29-.18z',
            })),
          vi ||
            (vi = Cg.createElement('path', {
              fill: '#FF3000',
              d: 'm2.557 6.438-.014.49.449-.191.045-.506z',
            })),
          vn ||
            (vn = Cg.createElement('path', {
              fill: '#FF8900',
              d: 'm6.84 7.719-.196.505.336.83.214-.462z',
            })),
          vc ||
            (vc = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm4.834 8.27.29.181.317.327-.259-.148z',
            })),
          vF ||
            (vF = Cg.createElement('path', {
              fill: '#E40000',
              d: 'm5.455 5.055-.06.65.534.55.081-.628z',
            })),
          vd ||
            (vd = Cg.createElement('path', {
              fill: '#FFC800',
              d: 'm6.98 9.053-.268.38.245.84.282-.33z',
            })),
          vh ||
            (vh = Cg.createElement('path', {
              fill: '#FF4A00',
              d: 'm2.543 6.929.034.418.417-.176-.002-.433z',
            })),
          vp ||
            (vp = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'm5.765 9.46.012.123.233.568.01-.07z',
            })),
          vf ||
            (vf = Cg.createElement('path', {
              fill: '#FEED00',
              d: 'm6.178 9.945-.157.138.197.667.174-.08z',
            })),
          vE ||
            (vE = Cg.createElement('path', {
              fill: '#CD0000',
              d: 'm3.667 4.96-.043.635.554.087.071-.632z',
            })),
          vo ||
            (vo = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm3.498 7.483.206.293.38.063-.17-.286z',
            })),
          vz ||
            (vz = Cg.createElement('path', {
              fill: '#F10800',
              d: 'm3.085 5.66-.048.571.509-.062.078-.578z',
            })),
          vs ||
            (vs = Cg.createElement('path', {
              fill: '#FFD300',
              d: 'm6.712 9.434-.286.297.23.783.3-.241z',
            })),
          vu ||
            (vu = Cg.createElement('path', {
              fill: '#FF5200',
              d: 'm2.994 7.171.098.36.405-.048-.062-.364z',
            })),
          vA ||
            (vA = Cg.createElement('path', {
              fill: '#FFE200',
              d: 'm6.427 9.73-.25.215.215.726.265-.157z',
            })),
          vg ||
            (vg = Cg.createElement('path', {
              fill: '#FFB200',
              d: 'm5.462 8.9.038.171.279.512-.012-.122z',
            })),
          vb ||
            (vb = Cg.createElement('path', {
              fill: '#FF5900',
              d: 'm6.414 6.932-.175.543.405.75.195-.504z',
            })),
          vv ||
            (vv = Cg.createElement('path', {
              fill: '#FF6400',
              d: 'm3.914 7.551.171.286.38.166-.136-.268z',
            })),
          vC ||
            (vC = Cg.createElement('path', {
              fill: '#F20',
              d: 'm3.037 6.233-.045.505.476-.057.078-.51z',
            })),
          vD ||
            (vD = Cg.createElement('path', {
              fill: '#FFC400',
              d: 'm5.901 9.268-.136.192.254.623.158-.138z',
            })),
          vB ||
            (vB = Cg.createElement('path', {
              fill: '#FF3800',
              d: 'm2.992 6.738.002.433.44-.052.034-.438z',
            })),
          vw ||
            (vw = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm6.644 8.224-.25.43.318.782.268-.381z',
            })),
          vx ||
            (vx = Cg.createElement('path', {
              fill: '#D10000',
              d: 'm4.25 5.048-.072.632.553.24.1-.62z',
            })),
          vy ||
            (vy = Cg.createElement('path', {
              fill: '#FF9400',
              d: 'm5.112 8.417.068.213.318.441L5.46 8.9z',
            })),
          vS ||
            (vS = Cg.createElement('path', {
              fill: '#FF6C00',
              d: 'm4.329 7.735.136.271.367.267-.101-.247z',
            })),
          vM ||
            (vM = Cg.createElement('path', {
              fill: '#FF7E00',
              d: 'm4.733 8.024.1.247.35.359-.07-.213z',
            })),
          vk ||
            (vk = Cg.createElement('path', {
              fill: '#FF3000',
              d: 'm5.928 6.255-.151.575.462.645.175-.543z',
            })),
          v_ ||
            (v_ = Cg.createElement('path', {
              fill: '#FF4A00',
              d: 'm3.435 7.119.062.364.416.068-.026-.359z',
            })),
          vP ||
            (vP = Cg.createElement('path', {
              fill: '#E80000',
              d: 'm3.624 5.593-.078.577.522.082.11-.571z',
            })),
          vU ||
            (vU = Cg.createElement('path', {
              fill: '#DF0000',
              d: 'm4.83 5.3-.099.62.538.386.126-.602z',
            })),
          vN ||
            (vN = Cg.createElement('path', {
              fill: '#FFB200',
              d: 'm6.13 9-.228.268.276.677.25-.214z',
            })),
          vI ||
            (vI = Cg.createElement('path', {
              fill: '#FA0F00',
              d: 'm5.396 5.705-.126.601.506.523.153-.574z',
            })),
          vX ||
            (vX = Cg.createElement('path', {
              fill: '#FFA300',
              d: 'M6.394 8.651 6.13 9l.297.73.286-.296z',
            })),
          vQ ||
            (vQ = Cg.createElement('path', {
              fill: '#FF9F00',
              d: 'm5.57 8.658-.108.242.303.56.135-.192z',
            })),
          vL ||
            (vL = Cg.createElement('path', {
              fill: '#FF6800',
              d: 'm6.239 7.475-.229.471.382.705.251-.427z',
            })),
          v$ ||
            (v$ = Cg.createElement('path', {
              fill: '#FF3000',
              d: 'm3.468 6.68-.033.439.452.073.068-.433z',
            })),
          vO ||
            (vO = Cg.createElement('path', {
              fill: '#FF4A00',
              d: 'm3.888 7.192.026.36.415.183.01-.344z',
            })),
          vR ||
            (vR = Cg.createElement('path', {
              fill: '#FF1A00',
              d: 'm3.545 6.17-.077.51.49.08.112-.507z',
            })),
          vT ||
            (vT = Cg.createElement('path', {
              fill: '#FF7E00',
              d: 'm5.194 8.133-.082.284.348.483.108-.242z',
            })),
          vj ||
            (vj = Cg.createElement('path', {
              fill: '#ED0400',
              d: 'm4.178 5.68-.11.571.522.228.141-.561z',
            })),
          vG ||
            (vG = Cg.createElement('path', {
              fill: '#F50',
              d: 'm4.339 7.39-.01.343.404.29.045-.317z',
            })),
          vK ||
            (vK = Cg.createElement('path', {
              fill: '#FF8D00',
              d: 'm5.772 8.341-.202.317.331.61L6.13 9z',
            })),
          vq ||
            (vq = Cg.createElement('path', {
              fill: '#FF6800',
              d: 'm4.778 7.706-.045.318.38.393.08-.284z',
            })),
          vV ||
            (vV = Cg.createElement('path', {
              fill: '#FF7A00',
              d: 'm6.01 7.946-.24.395.36.659.264-.349z',
            })),
          vH ||
            (vH = Cg.createElement('path', {
              fill: '#FF4300',
              d: 'm5.776 6.83-.2.509.434.607.227-.471z',
            })),
          vW ||
            (vW = Cg.createElement('path', {
              fill: '#FF3400',
              d: 'm3.955 6.76-.067.432.452.197.104-.417z',
            })),
          vJ ||
            (vJ = Cg.createElement('path', {
              fill: '#FA0F00',
              d: 'm4.731 5.92-.14.56.506.366.172-.54z',
            })),
          vZ ||
            (vZ = Cg.createElement('path', {
              fill: '#FF1A00',
              d: 'm4.068 6.253-.112.506.487.213.147-.49z',
            })),
          vY ||
            (vY = Cg.createElement('path', {
              fill: '#F20',
              d: 'm5.27 6.306-.173.539.478.493.201-.51z',
            })),
          v1 ||
            (v1 = Cg.createElement('path', {
              fill: '#FF6800',
              d: 'm5.364 7.775-.17.358.378.525.202-.317z',
            })),
          v0 ||
            (v0 = Cg.createElement('path', {
              fill: '#F50',
              d: 'm5.575 7.339-.211.436.408.568.24-.395z',
            })),
          v2 ||
            (v2 = Cg.createElement('path', {
              fill: '#FF3B00',
              d: 'm4.443 6.972-.104.417.439.317.14-.393z',
            })),
          v3 ||
            (v3 = Cg.createElement('path', {
              fill: '#FF4E00',
              d: 'm4.917 7.313-.14.393.417.427.172-.359z',
            })),
          v4 ||
            (v4 = Cg.createElement('path', {
              fill: '#FF2500',
              d: 'm4.59 6.48-.147.49.474.342.18-.468z',
            })),
          v5 ||
            (v5 = Cg.createElement('path', {
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
      let CD = (e) =>
          Cg.createElement(
            'svg',
            CC({ xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, fill: 'none' }, e),
            v6 ||
              (v6 = Cg.createElement('path', {
                fill: '#00F',
                d: 'M11.121 15.025c-1.63-1.223-3.627-1.996-5.68-1.918-1.369.026-2.677.435-3.993.769-.37.072-.797.177-1.14-.042-.178-.136-.266-.36-.292-.577-.245-1.341 2.46-1.881 3.396-2.285 1.284-.444 2.559-.915 3.788-1.488.609-.286 1.224-.566 1.746-1 1.575-1.302 2.63-3.08 3.895-4.675.769-.976 2.14-2.614 3.455-1.534 1.131.927 1.386 2.454 1.231 3.834-.452 3.642-1.366 6.64 1.79 9.412 1.02.884 2.212 1.604 3.112 2.638.288.348.825.985.34 1.384-1.088.548-3.347-.315-4.477-.678a28.7 28.7 0 0 1-7.17-3.84m0 0a28.7 28.7 0 0 0 7.183 3.806c.64.226 1.29.425 1.951.58.796.146 1.708.432 2.466.064.422-.363-.112-.93-.367-1.25-.911-1.02-2.094-1.713-3.134-2.594-3.261-2.827-2.37-5.828-1.92-9.541.145-1.31-.099-2.756-1.157-3.623-.245-.205-.548-.33-.855-.306-.993.137-1.645 1.066-2.27 1.79-1.268 1.582-2.346 3.392-3.954 4.683-.534.435-1.172.72-1.794 1.003-1.857.862-3.834 1.402-5.737 2.132-.566.257-1.35.54-1.453 1.232-.036.954.591.995 1.357.822 3.709-1.06 6.44-1.204 9.684 1.202',
              })),
            v7 ||
              (v7 = Cg.createElement('path', {
                fill: '#004CFF',
                d: 'M16.97 3.084c1.784 2.148.053 5.143.048 7.6-.134 1.964.654 3.923 2.126 5.224.479.434 1.017.814 1.504 1.254.505.486 1.988 1.695 1.481 2.445-.867.816-3.764-.313-4.786-.688a27.5 27.5 0 0 1-6.8-3.895c-1.037-.766-2.226-1.339-3.493-1.572-1.268-.248-2.578-.12-3.839.174l-.953.223c-.644.157-1.599.31-1.698-.618-.29-1.695 2.476-2.32 3.655-2.866A83 83 0 0 0 7.84 8.888c1.22-.471 2.219-1.358 3.13-2.282.919-.928 1.727-1.96 2.658-2.88.903-.9 2.285-1.939 3.341-.642m-.014.011c-1.054-1.28-2.41-.244-3.307.652-.926.92-1.731 1.955-2.64 2.896-.903.935-1.903 1.84-3.132 2.33a85 85 0 0 1-3.614 1.516C3.19 11 .443 11.684.743 13.199c.079.783.92.576 1.47.453l.952-.228c2.622-.7 5.345-.258 7.523 1.4 2.56 2.01 5.452 3.613 8.566 4.554.623.172 1.26.327 1.9.347.288.002.65-.006.852-.22.392-.63-1.018-1.817-1.451-2.238-.48-.44-1.01-.82-1.496-1.267-1.483-1.329-2.273-3.338-2.12-5.319.024-2.458 1.775-5.439.017-7.586',
              })),
            v8 ||
              (v8 = Cg.createElement('path', {
                fill: '#008CFF',
                d: 'M17.46 3.558c1.606 2.12-.258 4.965-.38 7.31-.205 1.864.346 3.818 1.657 5.179.427.457.93.841 1.375 1.284.536.564 1.192 1.143 1.374 1.943.089 1.291-2.286.58-2.977.392-3.007-.944-5.795-2.579-8.219-4.572-5.145-3.952-9.25.854-9.163-2.407.09-1.62 2.336-2.258 3.567-2.854 1.16-.487 2.328-.949 3.495-1.416 1.163-.466 2.187-1.222 3.14-2.033 1.422-1.049 4.414-5.034 6.131-2.826m-.027.021c-1.674-2.174-4.687 1.81-6.065 2.85-.948.822-1.97 1.592-3.144 2.075-1.163.476-2.325.953-3.478 1.451-1.15.572-3.376 1.246-3.436 2.741-.132 2.877 3.9-1.742 9.13 2.198 2.409 2.006 5.141 3.631 8.124 4.591.579.17 2.838.835 2.756-.19-.176-.747-.797-1.304-1.314-1.855-.443-.448-.942-.833-1.37-1.3-1.324-1.392-1.873-3.396-1.648-5.282.138-2.34 2.018-5.173.445-7.279',
              })),
            v9 ||
              (v9 = Cg.createElement('path', {
                fill: '#00D4FF',
                d: 'M17.952 4.032c.75 1.035.558 2.389.186 3.53-.355 1.163-.811 2.297-.988 3.496-.28 1.775.068 3.7 1.197 5.125.762.933 1.797 1.681 2.303 2.83.058.147.103.305.102.477-.164 1.558-3.834-.01-4.66-.376a23.5 23.5 0 0 1-4.685-2.833c-.485-.37-.938-.787-1.407-1.152-4.448-3.507-8.012.23-8.272-2.125-.26-1.455.62-2.318 1.807-2.945 1.606-.868 3.338-1.471 5.04-2.107 1.125-.445 2.167-1.079 3.157-1.775 1.498-.917 4.664-4.322 6.22-2.145m-.045.03c-1.51-2.127-4.684 1.266-6.136 2.17-.987.706-2.03 1.35-3.161 1.807-1.697.65-3.41 1.271-5 2.153-1.119.61-1.961 1.416-1.692 2.787.063.776.65.717 1.256.617 1.19-.228 2.436-.41 3.648-.184 1.22.206 2.36.77 3.33 1.518.486.383.925.793 1.403 1.162a23.2 23.2 0 0 0 4.622 2.833c.71.36 5.013 2.092 4.31.153-.487-1.116-1.507-1.863-2.26-2.802-1.14-1.46-1.483-3.434-1.185-5.235.189-1.213.656-2.348 1.018-3.503.375-1.127.579-2.447-.153-3.475',
              })),
            Ce ||
              (Ce = Cg.createElement('path', {
                fill: '#16FFE1',
                d: 'M18.445 4.507c.674 1.049.376 2.352-.06 3.43-.42 1.1-.925 2.172-1.16 3.32-.354 1.697-.176 3.575.752 5.062.657.987 1.638 1.737 1.998 2.918.039.15.063.312.029.479-.425 1.408-3.706-.107-4.574-.517A21.4 21.4 0 0 1 11 16.28c-1.273-1.184-2.671-2.337-4.442-2.584-1.173-.243-2.326.095-3.504.095a.766.766 0 0 1-.693-.62c-.108-.605-.195-1.19-.082-1.797.372-1.628 2.846-2.418 4.218-3.015.418-.143 1.252-.437 1.67-.579 1.403-.43 2.734-1.061 4.01-1.785 1.552-.765 4.896-3.634 6.268-1.487m-.064.039c-1.312-2.079-4.661.786-6.16 1.526-1.277.73-2.618 1.363-4.024 1.804-.41.15-1.245.444-1.655.594-1.307.587-3.75 1.402-4.088 2.94-.1.553-.004 1.164.097 1.71.04.127.086.256.18.332.335.251.797.114 1.198.078 3.068-.54 5.075.458 7.228 2.565 1.775 1.512 3.781 2.797 5.977 3.598.627.202 2.417.832 2.685-.015a.9.9 0 0 0-.025-.395c-.335-1.122-1.332-1.914-1.956-2.876-.939-1.527-1.11-3.447-.737-5.176.248-1.165.765-2.238 1.191-3.33.435-1.06.742-2.32.09-3.355',
              })),
            Ct ||
              (Ct = Cg.createElement('path', {
                fill: '#3CFFBA',
                d: 'M18.939 4.983c.6 1.065.191 2.316-.306 3.332-.486 1.039-1.037 2.05-1.33 3.152-.575 2.178-.3 4.69 1.274 6.407.16.241.31.49.44.752.255.497.52 1.342-.114 1.675-1.186.471-3.078-.491-4.154-1.027a19 19 0 0 1-2.876-1.907c-.91-.69-1.682-1.573-2.557-2.29-3.555-2.87-6.212-.02-6.426-2.312-.11-.709-.34-1.45-.134-2.166.328-1.01 1.372-1.522 2.245-1.975.912-.419 1.85-.797 2.813-1.077a32 32 0 0 0 4.852-1.689c1.57-.592 5.127-2.987 6.273-.875m-.085.045c-1.081-2.026-4.641.354-6.15.919a34 34 0 0 1-4.859 1.706c-.953.287-1.882.674-2.781 1.1-.836.45-1.831.937-2.138 1.896-.185.68.048 1.403.157 2.082.077.989.72.828 1.486.766 1.737-.222 3.549.262 4.903 1.383.893.737 1.633 1.6 2.548 2.303.889.71 1.831 1.358 2.833 1.896.992.52 2.056 1.01 3.172 1.138.272.022.56.018.785-.095.724-.444-.078-1.623-.391-2.143-.312-.48-.705-.92-.945-1.446-.733-1.579-.756-3.441-.31-5.104.307-1.12.87-2.135 1.36-3.165.492-.995.907-2.191.33-3.236',
              })),
            Cl ||
              (Cl = Cg.createElement('path', {
                fill: '#60FF97',
                d: 'M19.434 5.46c.526 1.087 0 2.28-.555 3.235-.55.978-1.146 1.933-1.496 2.991-.5 1.568-.584 3.337-.071 4.909.377 1.059 1.3 1.927 1.28 3.117-.244 1.894-3.628.178-4.541-.373-1.458-.863-2.766-1.962-3.918-3.202-1.083-1.242-2.506-2.271-4.188-2.402-.565-.07-1.106.011-1.682-.043a.9.9 0 0 1-.437-.171c-.363-.305-.304-.812-.441-1.225-.312-1.114-.754-2.32.326-3.199C5.48 7.664 7.808 7.219 9.958 6.69a59 59 0 0 0 3.229-.917c1.6-.46 3.166-1.313 4.876-1.237.36.025.713.16.991.395l.147.162c.092.086.165.262.233.367m-.108.049c-.91-1.982-4.58-.016-6.108.364a59 59 0 0 1-3.236.912c-2.138.534-4.418 1.006-6.16 2.433-1.002.817-.548 1.971-.247 3.03.15.459.085 1.192.717 1.235.54.044 1.123-.037 1.674.027 1.14.09 2.24.566 3.126 1.28.888.706 1.55 1.621 2.406 2.357 1.235 1.116 2.613 2.102 4.152 2.746.707.276 2.6 1.002 2.732-.195.01-1.137-.905-2.005-1.252-3.038-.517-1.62-.421-3.422.101-5.026.364-1.078.975-2.038 1.527-3.007.544-.933 1.068-2.061.568-3.118',
              })),
            Ca ||
              (Ca = Cg.createElement('path', {
                fill: '#8DFF6A',
                d: 'M19.929 5.938c.45 1.112-.194 2.24-.805 3.138-.611.92-1.255 1.82-1.659 2.84a9 9 0 0 0-.454 4.827c.234 1.08 1.092 2.038.862 3.204-.41 1.32-2.184.625-3.07.256-1.525-.687-2.85-1.762-4.005-2.959-1.548-1.72-2.669-3.41-5.222-3.535-.403-.04-.932.024-1.246-.326a.96.96 0 0 1-.197-.415c-.095-.551-.273-1.052-.48-1.568-.194-.51-.436-1.045-.388-1.639.162-1.19 1.444-1.734 2.407-2.177 1.46-.68 3.23-.94 4.808-1.225 1.084-.199 2.17-.387 3.249-.61 1.615-.212 5.378-1.893 6.2.19m-.132.05c-.727-1.951-4.533-.335-6.047-.138-1.082.22-2.169.407-3.253.604-2.143.377-4.38.784-6.199 2.051-1.121.778-.972 1.7-.466 2.823.21.504.405 1.055.503 1.59.113.615.761.534 1.254.568 1.124.04 2.234.46 3.111 1.167.885.685 1.5 1.631 2.274 2.423a15 15 0 0 0 2.496 2.122c1.026.72 4.648 2.555 4.171-.078-.154-.814-.67-1.514-.833-2.331-.234-1.103-.14-2.231.027-3.334.256-1.672 1.216-3.118 2.155-4.468.595-.872 1.229-1.928.807-2.998',
              })),
            Cr ||
              (Cr = Cg.createElement('path', {
                fill: '#94FF63',
                d: 'M20.426 6.418c.37 1.135-.39 2.198-1.057 3.04-.671.862-1.363 1.713-1.82 2.694-.666 1.467-.917 3.147-.817 4.748.06.825.501 1.567.53 2.402.061.568-.162 1.277-.768 1.464-1.31.336-2.834-.592-3.865-1.325-.885-.664-1.658-1.462-2.35-2.317-.682-.85-1.245-1.791-2.116-2.455a4.5 4.5 0 0 0-2.165-.958c-.386-.062-.95-.087-1.165-.512-.181-.386-.182-.8-.366-1.187-.342-1-1.298-1.995-.94-3.121.465-1.056 1.676-1.468 2.66-1.882 2.582-.945 5.396-.906 8.089-1.23 1.596-.046 5.506-1.43 6.15.639m-.159.049c-.556-1.913-4.492-.608-5.98-.577-2.697.298-5.49.276-8.05 1.25-1.07.465-2.88 1.105-2.58 2.57.278 1.053 1.051 1.93 1.247 3.027.08.65.586.68 1.129.748.832.112 1.63.465 2.285.987.887.675 1.473 1.645 2.153 2.497.68.844 1.44 1.629 2.303 2.278.853.634 1.834 1.176 2.886 1.344.257.023.525.04.756-.048 1.338-.604.124-2.576.093-3.62-.094-1.648.17-3.354.86-4.856.476-1.007 1.184-1.866 1.856-2.721.643-.817 1.383-1.79 1.042-2.88',
              })),
            Cm ||
              (Cm = Cg.createElement('path', {
                fill: '#CAFF2C',
                d: 'M20.924 6.9c.298 1.222-.667 2.226-1.414 3.05-.769.84-1.526 1.695-2.023 2.71-.511 1.01-.73 2.143-.923 3.249-.085.558-.136 1.123-.091 1.68.127 1.063.585 2.62-.608 3.247-1.529.586-3.6-.922-4.6-1.992-.797-.834-1.44-1.808-2.029-2.774-.612-.968-1.49-1.662-2.466-2.247-1.733-.169-1.195-.86-1.878-2.169-.436-.928-1.3-1.75-1.315-2.836.102-1.139 1.355-1.642 2.262-2.04a10.4 10.4 0 0 1 3.03-.747c2.065-.225 4.153-.3 6.225-.153 1.032.035 2.064-.093 3.105-.136.979-.043 2.45-.042 2.725 1.157m-.187.043c-.26-1.105-1.619-1.056-2.533-1.045-1.032.031-2.07.146-3.115.104a30.6 30.6 0 0 0-6.207.142 10.2 10.2 0 0 0-2.988.768c-.848.382-2.05.87-2.141 1.914-.014.49.252.957.512 1.394.404.662.877 1.317 1.129 2.068.142.448.166 1.035.715 1.169.255.09.543.095.79.165.99.568 1.926 1.33 2.541 2.313.596.98 1.217 1.924 1.996 2.745.942 1.014 2.909 2.464 4.333 1.951 1.075-.602.576-2.036.486-3.025-.045-.582.01-1.162.097-1.73.2-1.134.426-2.277.95-3.31.514-1.042 1.292-1.914 2.06-2.75.715-.8 1.644-1.71 1.375-2.873',
              })),
            Ci ||
              (Ci = Cg.createElement('path', {
                fill: '#FFE200',
                d: 'M21.421 7.382c.204 1.218-.825 2.127-1.61 2.88-.805.765-1.603 1.543-2.169 2.489-.588.941-.868 2.025-1.153 3.088-.202.8-.368 1.617-.336 2.443.037.84.004 1.827-.653 2.44-1.355 1.114-3.587-.391-4.52-1.473-.75-.852-1.3-1.848-1.79-2.849-.479-1.012-1.222-1.81-2.057-2.549l.05.029c-.255-.08-.526-.148-.778-.31-.258-.162-.417-.45-.486-.722-.097-.534-.312-1.001-.593-1.456-.737-1.25-2.706-2.978-.906-4.23 3.245-2.19 7.366-1.417 11.028-1.168 1.069.054 2.14-.015 3.22.009 1.014.026 2.543.124 2.753 1.38m-.215.036c-.2-1.147-1.606-1.184-2.543-1.241-1.068-.04-2.146.016-3.223-.057-3.156-.271-6.509-.833-9.527.417-.71.308-1.496.641-1.916 1.317-.62 1.144.99 2.46 1.508 3.427.29.453.534.98.634 1.507.067.245.19.457.395.584.21.134.483.202.745.281.85.735 1.645 1.606 2.13 2.637.997 2.104 2.67 4.62 5.25 4.573 1.187-.178 1.33-1.589 1.261-2.572-.032-.85.14-1.694.346-2.51.292-1.082.581-2.188 1.183-3.148.585-.974 1.403-1.769 2.21-2.532.744-.728 1.723-1.536 1.547-2.683',
              })),
            Cn ||
              (Cn = Cg.createElement('path', {
                fill: '#FFA300',
                d: 'M21.92 7.868c.11 1.217-.983 2.034-1.806 2.723-.845.696-1.682 1.405-2.311 2.288-.658.878-1.004 1.917-1.357 2.948-.263.775-.503 1.557-.632 2.365-.115 1.076-.312 2.425-1.434 2.917-1.348.502-2.893-.464-3.756-1.457-1.122-1.285-1.4-2.982-2.21-4.423-.267-.471-.592-.906-.914-1.355l.045.039c-.247-.123-.519-.26-.724-.496-.207-.233-.297-.54-.355-.81-.121-.523-.398-1.006-.714-1.454-1.643-2.167-3.58-3.66.095-5.113 3.178-1.277 6.683-.41 9.924.095 1.1.144 2.215.137 3.332.207 1.04.078 2.675.196 2.816 1.526m-.246.022c-.145-1.197-1.639-1.227-2.587-1.346-1.104-.094-2.225-.11-3.334-.278-3.224-.574-6.704-1.382-9.852-.092-.723.319-1.58.66-1.918 1.416-.405 1.144 1.365 2.51 1.942 3.438.329.457.627.958.766 1.526.061.27.142.517.311.705.17.194.426.32.68.446.667.884 1.281 1.858 1.635 2.918.376 1.023.802 2.044 1.495 2.87 1.52 1.724 4.194 2.47 4.654-.523.151-1.663.718-3.232 1.316-4.78.633-1.562 1.893-2.766 3.175-3.789.775-.665 1.803-1.376 1.717-2.51',
              })),
            Cc ||
              (Cc = Cg.createElement('path', {
                fill: '#FF6C00',
                d: 'M22.418 8.355c.021 1.221-1.139 1.952-2.002 2.586-.887.634-1.764 1.284-2.45 2.113q-.52.62-.89 1.338c-.675 1.471-1.31 3.005-1.73 4.573-.223.804-.614 1.645-1.343 2.122-1.286.794-2.93-.024-3.82-1.053-.727-.869-1.016-1.99-1.265-3.063-.219-1.074-.584-2.085-1.047-3.078l.034.045c-.225-.186-.455-.405-.604-.683-.148-.262-.203-.561-.283-.847-.166-.533-.484-1.018-.839-1.467-.354-.451-.755-.87-1.144-1.302-.542-.645-1.332-1.366-1.219-2.303.216-.921 1.224-1.312 1.995-1.643 3.324-1.321 6.964-.211 10.272.583 1.13.232 2.289.289 3.446.407 1.069.131 2.823.264 2.89 1.672m-.275.006c-.07-1.245-1.692-1.28-2.64-1.456-1.145-.146-2.31-.233-3.45-.494-3.282-.861-6.902-1.948-10.193-.593-.732.328-1.678.7-1.88 1.547-.081.867.673 1.525 1.199 2.142.392.425.8.842 1.168 1.3.368.455.708.954.894 1.532.08.264.134.56.274.798.132.246.342.442.57.628l.011.027c.468.99.853 2.046 1.074 3.12.247 1.054.536 2.132 1.22 2.947.804.92 2.31 1.698 3.458.986.662-.442 1.002-1.205 1.216-1.958.432-1.604 1.065-3.121 1.758-4.627.255-.495.567-.962.925-1.389.716-.86 1.618-1.524 2.506-2.157.807-.609 1.887-1.228 1.89-2.353',
              })),
            CF ||
              (CF = Cg.createElement('path', {
                fill: '#FF3000',
                d: 'M22.916 8.844c-.081 1.294-1.406 1.93-2.352 2.548-.978.607-1.933 1.254-2.68 2.112-.78.852-1.213 1.922-1.693 2.962l-.726 1.573c-.558 1.171-1.013 2.564-2.227 3.24-1.527.801-3.518-.287-4.106-1.805-.641-1.65-.292-3.478-.74-5.153-.15-.56-.532-1.023-.682-1.593-.24-1.142-1.083-1.987-1.868-2.8-.876-.96-2.963-2.5-1.486-3.805 2.605-1.921 6.098-1.46 9.026-.64 1.117.288 2.2.724 3.313 1.011 1.117.274 2.265.385 3.413.55 1.058.174 2.838.377 2.808 1.8m-.305-.014c.02-1.228-1.63-1.328-2.542-1.54-1.134-.195-2.29-.34-3.412-.648-3.84-1.278-8.553-3.055-12.202-.406-.871.741-.314 1.638.315 2.32.774.857 1.682 1.596 2.393 2.522.266.354.506.738.657 1.16.12.426.23.808.458 1.193 1.009 1.812.351 4.054 1.11 5.938.536 1.365 2.339 2.364 3.706 1.645 1.135-.65 1.54-1.972 2.087-3.1l.73-1.579c1.058-2.571 2.112-3.778 4.49-5.203.88-.593 2.107-1.121 2.21-2.302',
              })),
            Cd ||
              (Cd = Cg.createElement('path', {
                fill: '#DF0000',
                d: 'M23.414 9.335c-.186 1.329-1.615 1.869-2.627 2.452-1.046.562-2.064 1.178-2.874 2.026-.843.843-1.335 1.932-1.905 2.967-1.125 1.873-2.24 5.087-4.885 4.917-4.721-.97-1.602-5.517-2.69-8.549a23 23 0 0 0-.239-.857c-.407-1.104-1.343-1.93-2.18-2.732-.846-.879-3.022-2.38-1.77-3.69 3.227-2.554 7.7-1.156 11.156.182.558.218 1.104.458 1.672.622 1.138.342 2.317.509 3.495.718 1.078.221 2.968.458 2.847 1.944m-.334-.038c.116-1.234-1.675-1.392-2.565-1.636-1.752-.331-3.535-.729-5.158-1.501-3.392-1.385-7.843-2.731-11.009-.19-1.145 1.188 1.034 2.654 1.8 3.443.974.912 2.09 1.87 2.4 3.239l.12.43c.724 2.028-.237 4.182.086 6.238.183 1.16 1.303 1.931 2.4 2.072 2.404.155 3.522-3.052 4.564-4.769.576-1.054 1.093-2.18 1.956-3.04.847-.889 1.903-1.525 2.954-2.09.936-.56 2.25-.998 2.452-2.196',
              })),
            Ch ||
              (Ch = Cg.createElement('path', {
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
        Cw = {
          src: '/_next/static/media/crvUSD-sm.b0748488.webp',
          height: 64,
          width: 64,
          blurDataURL:
            'data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDYAAAABP6AmAAFGLg0Vdq0aERG4/1BQGklSrMqdH16NQqPI5DRvAAcR/Y9RvyjcDBageGgZTOGO/gRWUDggRAAAABACAJ0BKggACAACQDglqAJ0APmPgMmB4gAA/bXjXfvYVWw7TAeVtfR7Mx66zd/w5KSGO2uxUGpJv/hWv5Wv5hpCmsAA',
          blurWidth: 8,
          blurHeight: 8,
        },
        Cx = {
          src: '/_next/static/media/scrvUSD-xs.4b7e7f33.webp',
          height: 56,
          width: 56,
          blurDataURL:
            'data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABR6CgbRumpTWEQ/wfjYgIvH0L9cEmtq24yiroL7sDaBEB9SqALAYSB0lE/6OlV1ZYHj4NWUMO8BS4d/wFAFZQOCBSAAAAcAIAnQEqCAAIAAJAOCWwAnS6AfgAAyETfdqIAAD+lMz4l5bVmt9o2mW+T4ruLlawyu0SgDeiz5Cwie/9rpmECP/XZ/XlRV1/ym/7dgs5YwAAAA==',
          blurWidth: 8,
          blurHeight: 8,
        },
        Cy = {
          src: '/_next/static/media/crvUSD-xs.e0b5fecb.webp',
          height: 56,
          width: 56,
          blurDataURL:
            'data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABR6CgbRumpTWEQ/wfjYgIvH0L9aE2tm0oIv/fmopohHgtYG2ADmhdExH9j+gODQBVAVwGYL4G2B5gNfsIAFZQOCBEAAAA8AEAnQEqCAAIAAJAOCWoAnQA9LJ/ZxYAAP21411JclVsO0wHmOU14LQLCUbE8gBt/JlP+TiAwlv/+Fa/la/mGkKawAA=',
          blurWidth: 8,
          blurHeight: 8,
        };
      function CS() {
        return (CS = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CM = (e) =>
        Cg.createElement(
          'svg',
          CS({ xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 15 15' }, e),
          Cp ||
            (Cp = Cg.createElement('path', {
              fill: 'currentColor',
              fillRule: 'evenodd',
              d: 'M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m-.553-9.732a3.2 3.2 0 0 1 1.106 0l.366-2.056a5.3 5.3 0 0 0-1.838 0zm-1.453.7q.196-.179.43-.319L4.846 2.86q-.405.243-.757.563a4.6 4.6 0 0 0-.604.666l1.678 1.245q.144-.194.331-.365m3.582-.319q.234.14.43.319.188.171.33.365l1.679-1.245a4.6 4.6 0 0 0-.604-.666 5 5 0 0 0-.757-.563zM4.714 6.657q0-.235.051-.464L2.726 5.74a4.2 4.2 0 0 0-.101.918zm5.52-.464q.052.229.052.464h2.089q0-.466-.101-.918zm-2.058.848L7.5 5.675l-.685 1.354-.113.244-.245.037-1.508.218L6.03 8.593l.181.189-.044.244-.245 1.501 1.35-.697.227-.12.238.1 1.349.707-.257-1.5-.044-.245.183-.179 1.073-1.053-1.509-.218-.244-.036zm-1.79-.216L7.5 4.568l1.114 2.257 2.49.363-1.802 1.755.426 2.48-2.228-1.17-2.228 1.17.426-2.48-1.802-1.758z',
              clipRule: 'evenodd',
            }))
        );
      function Ck() {
        return (Ck = Object.assign
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
          Cg.createElement(
            'svg',
            Ck({ xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 15 15' }, e),
            Cf ||
              (Cf = Cg.createElement('path', {
                fill: '#1F1E1B',
                d: 'M13.5 13.95a.45.45 0 1 0 0-.9h-12a.45.45 0 1 0 0 .9zM11.068 7.568a.45.45 0 1 0-.636-.636L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 0 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0z',
              }))
          ),
        CP = {
          src: '/_next/static/media/chad.d46ea509.png',
          height: 150,
          width: 150,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXr0IP/0Df81D3XooTxznHjqmvXkXj0zJfvvJvxwaHtxaTdvK73q5nzmI3mtpf5g4b0v6Dxi4ewi1v+eYX5z4zzwqTxupjfmHxpp7viAAAAE3RSTlMBxmduQRKNJuFrrvj6/q/V5aoq5O4ucAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwtxkkSgCAMAMFRhCRuKAH8/0+tEvvUQOQ3T8uI1DpmW7MvUXsA1OR8EpD6lX1fBcrtfjR9ASdoAbnJbyDQAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        };
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
      let CN = (e) =>
        Cg.createElement(
          'svg',
          CU({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          CE ||
            (CE = Cg.createElement('path', {
              d: 'M12 11.807A9 9 0 0 1 10.049 2a9.94 9.94 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.95 9.95 0 0 0 2.735-5.119A9 9 0 0 1 12 11.807',
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
      let CX = (e) =>
        Cg.createElement(
          'svg',
          CI({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          Co ||
            (Co = Cg.createElement('path', {
              d: 'M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12M11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z',
            }))
        );
      function CQ() {
        return (CQ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CL = (e) =>
        Cg.createElement(
          'svg',
          CQ({ xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 16, fill: 'none' }, e),
          Cz ||
            (Cz = Cg.createElement('path', {
              stroke: '#fff',
              strokeWidth: 2.5,
              d: 'M1 9.471 6.671 14 16 1',
            }))
        );
      function C$() {
        return (C$ = Object.assign
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
        Cg.createElement(
          'svg',
          C$({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          Cs ||
            (Cs = Cg.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001S17.515 2 12 2m0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001',
            }))
        );
      function CR() {
        return (CR = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CT = (e) =>
        Cg.createElement(
          'svg',
          CR({ xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 14, fill: '#EA3943' }, e),
          Cu ||
            (Cu = Cg.createElement('path', {
              fillRule: 'evenodd',
              d: 'M3.092.472A1.5 1.5 0 0 0 .908 2.528L4.94 6.812.908 11.096a1.5 1.5 0 1 0 2.184 2.056L7 9.001l3.906 4.15a1.5 1.5 0 0 0 2.185-2.056L9.059 6.812l4.032-4.283A1.5 1.5 0 1 0 10.906.473L7 4.623z',
              clipRule: 'evenodd',
            }))
        );
      function Cj() {
        return (Cj = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let CG = (e) =>
        Cg.createElement(
          'svg',
          Cj(
            { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, fill: 'currentColor' },
            e
          ),
          CA ||
            (CA = Cg.createElement('path', {
              d: 'M5 2 0 8l5 6h11V2Zm2 3h1c.28 0 .53.11.71.29L10 6.59l1.29-1.3c.18-.18.43-.29.71-.29h1v1c0 .28-.11.53-.29.71L11.41 8l1.3 1.29c.18.18.29.43.29.71v1h-1c-.28 0-.53-.11-.71-.29L10 9.41l-1.29 1.3c-.18.18-.43.29-.71.29H7v-1c0-.28.11-.53.29-.71L8.59 8l-1.3-1.29A1 1 0 0 1 7 6Z',
            }))
        );
      var CK = l(58916);
      let Cq = {
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
      l.d(t, { A: () => n });
      var a = l(54568),
        r = l(48341);
      let m = (0, r.i7)(['100%{transform:translateX(100%);}']),
        i = r.Ay.span.withConfig({ componentId: 'sc-d22a12ef-0' })(
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
          m,
          ({ isLightBg: e }) =>
            e
              ? 'background-image: var(--skeleton_light--background-image);'
              : 'background-image: var(--skeleton--background-image);'
        ),
        n = ({ className: e, isLightBg: t = !1, skeleton: l = [12, 12], ...r }) =>
          (0, a.jsx)(i, { className: e, isLightBg: t, skeleton: l, ...r });
    },
    16726: (e, t, l) => {
      l.d(t, { A: () => f });
      var a = l(54568),
        r = l(7620),
        m = l(48341),
        i = l(45808),
        n = l(27280),
        c = l(94990),
        F = l(75778);
      let d = (0, r.forwardRef)(({ className: e, children: t, loading: l, testId: m, ...i }, F) => {
          let d = (0, r.useRef)(null),
            { isFocusVisible: f, focusProps: E } = (0, c.o)();
          return (0, a.jsxs)(h, {
            ...i,
            ...E,
            'data-testid': `btn-${m}`,
            className: `${e || ''} ${l ? 'loading' : ''} ${f ? 'focus-visible' : ''}`,
            ref: F || d,
            children: [
              t,
              l &&
                (0, a.jsx)(p, {
                  flex: !0,
                  flexAlignItems: 'center',
                  flexJustifyContent: 'center',
                  fillWidth: !0,
                  fillHeight: !0,
                  children: (0, a.jsx)(n.A, { isDisabled: !0, size: 17 }),
                }),
            ],
          });
        }),
        h = m.Ay.button.withConfig({ componentId: 'sc-186dc391-0' })(['', ';'], F.ku),
        p = (0, m.Ay)(i.A).withConfig({ componentId: 'sc-186dc391-1' })([
          'position:absolute;top:0;left:0;bottom:0;right:0;background-color:var(--button--disabled_spinner--background-color);',
        ]);
      d.displayName = 'Button';
      let f = d;
    },
    21802: (e, t, l) => {
      l.d(t, {
        CP: () => n,
        PD: () => i,
        PE: () => d,
        R3: () => m,
        VS: () => F,
        WS: () => h,
        WU: () => c,
        rN: () => r,
      });
      var a = l(36074);
      let r = {
          PAGE_SWAP: '/swap',
          PAGE_POOLS: '/pools',
          PAGE_CREATE_POOL: '/create-pool',
          PAGE_DASHBOARD: '/dashboard',
        },
        m = { PAGE_MARKETS: '/markets', PAGE_DISCLAIMER: '/disclaimer' },
        i = {
          PAGE_MARKETS: '/markets',
          BETA_PAGE_MARKETS: '/beta-markets',
          PAGE_CRVUSD_STAKING: '/scrvUSD',
          PAGE_DISCLAIMER: '/disclaimer',
          PAGE_PEGKEEPERS: '/pegkeepers',
        },
        n = {
          PAGE_VECRV_CREATE: '/vecrv/create',
          PAGE_PROPOSALS: '/proposals',
          PAGE_GAUGES: '/gauges',
          PAGE_VECRV: '/vecrv',
          PAGE_ANALYTICS: '/analytics',
          PAGE_USER: '/user',
          DISCUSSION: 'https://gov.curve.fi/',
          PAGE_DISCLAIMER: '/disclaimer',
        },
        c = ['dex', 'lend', 'crvusd', 'dao'],
        F = {
          dex: {
            label: 'DEX',
            routes: [
              { app: 'dex', route: r.PAGE_SWAP, label: () => (0, a.t)`Quickswap` },
              { app: 'dex', route: r.PAGE_POOLS, label: () => (0, a.t)`Pools` },
              { app: 'dex', route: r.PAGE_CREATE_POOL, label: () => (0, a.t)`Pool Creation` },
              { app: 'dex', route: r.PAGE_DASHBOARD, label: () => (0, a.t)`Dashboard` },
            ],
          },
          crvusd: {
            label: 'crvUSD',
            routes: [
              { app: 'crvusd', route: i.PAGE_MARKETS, label: () => (0, a.t)`crvUSD` },
              {
                app: 'crvusd',
                route: i.BETA_PAGE_MARKETS,
                label: () => (0, a.t)`Llama (beta)`,
                betaFeature: !0,
              },
              { app: 'crvusd', route: i.PAGE_PEGKEEPERS, label: () => (0, a.t)`Peg Keepers` },
              {
                app: 'crvusd',
                route: i.PAGE_CRVUSD_STAKING,
                label: () => (0, a.t)`Savings crvUSD`,
              },
            ],
          },
          lend: {
            label: 'Lend',
            routes: [{ app: 'lend', route: m.PAGE_MARKETS, label: () => (0, a.t)`Lend` }],
          },
          dao: {
            label: 'DAO',
            routes: [
              { app: 'dao', route: n.PAGE_VECRV_CREATE, label: () => (0, a.t)`Lock CRV` },
              { app: 'dao', route: n.PAGE_PROPOSALS, label: () => (0, a.t)`Proposals` },
              { app: 'dao', route: n.PAGE_GAUGES, label: () => (0, a.t)`Gauges` },
              { app: 'dao', route: n.PAGE_ANALYTICS, label: () => (0, a.t)`Analytics` },
              {
                app: 'dao',
                route: n.DISCUSSION,
                label: () => (0, a.t)`Discussion`,
                target: '_blank',
              },
            ],
          },
        },
        d = (e, t, l = '/') => `/${e}/${t}${l}`,
        h = ({ route: e, target: t, label: l, app: a }, { networkId: r, pathname: m }) => {
          let i = e.startsWith('http') ? e : d(a, r, e);
          return { href: i, target: t, label: l(), isActive: m?.startsWith(i.split('?')[0]) };
        };
    },
    22017: (e, t, l) => {
      l.d(t, { Bj: () => Q, me: () => $, vT: () => L });
      var a = l(64914),
        r = l(7620),
        m = l(75334),
        i = l(13267),
        n = l(81636),
        c = l(68711),
        F = l(7251),
        d = l(73573),
        h = l(74424),
        p = l(12806),
        f = l(3599),
        E = l(22635),
        o = l(40395),
        z = l(47744),
        s = l(11830),
        u = l(88259);
      let A = '982ea4bdf92e49746bd040a981283b36',
        g = (0, h.Ay)(),
        b = (0, z.A)({ email: 'info@curve.fi', appUrl: 'https://curve.fi' }),
        v = () => (0, p.A)({ walletConnectVersion: 2, projectId: A }),
        C = (0, d.A)({
          whitelistedDomains: [
            /^https:\/\/gnosis-safe\.io$/,
            /^https:\/\/app\.safe\.global$/,
            /^https:\/\/safe\.global$/,
            /^https:\/\/safe\.mainnet\.frax\.com$/,
            /^https:\/\/safe\.optimism\.io$/,
          ],
        }),
        D = (0, n.A)({ darkMode: !0 }),
        B = (0, c.A)({ apiKey: 'pk_live_190B10CE18F47DCD' }),
        w = () => (0, u.A)({ projectId: A, dappUrl: window.location.origin }),
        x = (0, o.A)(),
        y = (0, E.A)(),
        S = (0, F.A)(),
        M = (0, s.A)(),
        k = (0, i.A)(),
        _ = (0, f.A)({
          options: {
            extensionOnly: !1,
            dappMetadata: {
              url: 'https://curve.fi',
              name: 'Curve',
              iconUrl: 'https://classic.curve.fi/logo-square.svg',
            },
          },
        }),
        P = (e, t) =>
          m.Ts({
            wallets: [g, b, v(), C, D, B, w(), x, y, S, k, M, _],
            chains: Object.values(t).map(({ hex: e, name: t, rpcUrl: l, symbol: a }) => ({
              id: e,
              token: a,
              label: t,
              rpcUrl: l,
            })),
            appMetadata: {
              name: 'Curve',
              description: 'Efficient stablecoin and non-stablecoin swapping',
              icon: 'https://classic.curve.fi/logo-square.svg',
            },
            disableFontDownload: !0,
            notify: { desktop: { enabled: !0, position: 'topRight' } },
            theme: 'chad' === e ? 'light' : e,
            accountCenter: { desktop: { enabled: !1 }, mobile: { enabled: !1 } },
            connect: { autoConnectLastWallet: !1 },
          });
      var U = l(64174),
        N = l(96252);
      let I = null,
        X = { provider: null, wallet: null },
        Q = 'walletName',
        L = () => {
          let [{ wallet: e, connecting: t }, l, i] = (0, m.VN)(),
            [n, c] = (0, U.Mj)(Q);
          (0, r.useEffect)(() => {
            (X.wallet = e), (X.provider = e && new a.k((0, N.Xo)(e)));
          }, [e]);
          let F = e?.accounts?.[0]?.address;
          return {
            wallet: e,
            connecting: t,
            connect: l,
            disconnect: i,
            walletName: n,
            setWalletName: c,
            provider: L.getState().provider,
            signerAddress: F,
          };
        };
      (L.initialize = (...e) => (I = P(...e))),
        (L.getState = () => ({ wallet: X.wallet, provider: X.provider }));
      let $ = (e, t, l) => {
        if (!I) throw Error('Onboard not initialized');
        return I.state.actions.customNotification({
          type: t,
          message: e,
          ...(void 0 !== l && { autoDismiss: l }),
        });
      };
    },
    23779: (e, t, l) => {
      l.d(t, { Jg: () => z, Xs: () => o, hJ: () => f });
      var a = l(16430),
        r = l(58648),
        m = l.n(r),
        i = l(44096),
        n = l.n(i),
        c = l(94345),
        F = l.n(c),
        d = l(45376),
        h = l.n(d);
      function p(e) {
        return F()(e, n());
      }
      function f(e) {
        return e
          .trim()
          .split(/[, ]+/)
          .reduce(
            (e, t) => {
              let l = t.toLowerCase();
              return l.startsWith('0x') ? e.addresses.push(t) : '' !== l && e.tokens.push(t), e;
            },
            { addresses: [], tokens: [] }
          );
      }
      let E = (e) =>
        Array.isArray(e) ? e.map(E) : 'string' == typeof e ? e.replace(/₮/g, 'T') : e;
      function o(e, t, l, r) {
        let { addresses: i, tokens: n } = f(e),
          c =
            n.length > 0
              ? (function (e, t, l) {
                  let r = e.some((e) => e.includes('₮')),
                    i = new a.A(t, {
                      ignoreLocation: !0,
                      ignoreDiacritics: !0,
                      isCaseSensitive: !1,
                      includeMatches: !0,
                      minMatchCharLength: 2,
                      threshold: 0.01,
                      ...(!r && { getFn: (e, t) => E(m()(e, t)) }),
                      keys: l,
                    }),
                    n = i.search(e[0]);
                  return (
                    e.forEach((e, t) => {
                      if (0 === t) return;
                      let l = i.search(e);
                      n = n.filter((e) => l.some((t) => t.item === e.item));
                    }),
                    p(n)
                  );
                })(n, t, l)
              : [],
          F =
            i.length > 0
              ? (function (e, t, l) {
                  let r = { tokens: [], other: [] };
                  if (l.tokens) {
                    let m = new a.A(t, {
                        ignoreLocation: !0,
                        includeMatches: !0,
                        minMatchCharLength: 4,
                        threshold: 0.01,
                        keys: l.tokens,
                      }),
                      i = [];
                    e.forEach((e) => {
                      i = [...i, ...m.search(e)];
                    }),
                      (r.tokens = p(i));
                  }
                  if (l.other) {
                    let m = new a.A(t, {
                        ignoreLocation: !0,
                        includeMatches: !0,
                        minMatchCharLength: 4,
                        threshold: 0.01,
                        keys: l.other,
                      }),
                      i = [];
                    e.forEach((e) => {
                      i = [...i, ...m.search(e)];
                    }),
                      (r.other = p(i));
                  }
                  return r;
                })(i, t, r)
              : { tokens: [], other: [] };
        return { tokensResult: [...c, ...F.tokens], addressesResult: F.other };
      }
      function z(e, t, l) {
        let { addressesResult: a, tokensResult: r } = o(e, t, ['symbol'], { tokens: ['address'] }),
          m = h()([...r, ...a], (e) => e.item.address);
        return m.length > 0 ? m.map((e) => e.item) : t.filter((t) => l(t.address, e));
      }
    },
    23795: (e, t, l) => {
      l.d(t, { c: () => i, t: () => m });
      var a = l(40038),
        r = l.n(a);
      let m = async (e, t) => {
          let l = await t.waitForTransaction(e);
          if (!l?.status) throw Error(`Transaction ${e} failed`);
          return l;
        },
        i = async (e, t) => {
          let { results: l, errors: a } = await r()
            .for(e)
            .process((e) => m(e, t));
          if (Array.isArray(a) && a.length > 0) throw a;
          return l;
        };
    },
    27280: (e, t, l) => {
      l.d(t, { A: () => c });
      var a = l(54568),
        r = l(48341);
      let m = (0, r.i7)(['0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}']),
        i = r.Ay.div.withConfig({ componentId: 'sc-4b3b4f81-0' })(
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
          m,
          ({ isDisabled: e }) => n(e)
        );
      function n(e) {
        return e ? 'var(--input--disabled--color)' : 'var(--border-400)';
      }
      let c = ({ isDisabled: e = !1, size: t, ...l }) =>
        (0, a.jsxs)(i, {
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
      l.d(t, { A: () => a });
      let a = l(48341).Ay.header.withConfig({ componentId: 'sc-3345afef-0' })([
        'align-items:center;display:flex;justify-content:space-between;padding:0 var(--spacing-1);min-height:var(--box_header--height);width:100%;color:var(--box--primary--color);background-color:var(--box_header--primary--background-color);font-size:var(--box_header--font-size);font-weight:var(--box_header--font-weight);',
      ]);
    },
    29514: (e, t, l) => {
      l.d(t, {
        Vz: () => h,
        QD: () => E,
        Gb: () => f,
        p6: () => F,
        VG: () => c,
        Qi: () => d,
        I$: () => p,
      });
      var a = l(61466),
        r = l(7884),
        m = l.n(r),
        i = l(81734),
        n = l(81981);
      a.FE.extend({
        isDecimal: m(),
        isAddress: (e) => ({
          pass: !!e && 'string' == typeof e && (0, i.P)(e),
          message: () => 'Must be a valid Ethereum address',
        }),
        isNotZeroAddress: (e) => ({
          pass: e !== n.Xd,
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
      let c = (e, t, l) => 0 === Object.keys(e(t, l).getErrors()).length;
      function F(e, t, l) {
        let a = Object.entries(e(t, l).getErrors());
        if (a.length > 0)
          throw Error(`Validation failed: ${a.map(([e, t]) => `${e}: ${t}`).join(', ')}`);
        return t;
      }
      let d = (e) =>
          (0, a.vt)((t, l) => {
            (0, a.j6)(l), e(t);
          }),
        h = d(() => {}),
        p = (e) => {
          (0, a.FE)(e)
            .message('Token address is required')
            .isNotEmpty()
            .message('Invalid token address')
            .isAddress()
            .message('Token address cannot be zero address')
            .isNotZeroAddress();
        },
        f = (e) => {
          (0, a.FE)(e)
            .message('Amount is required')
            .isNotEmpty()
            .message('Amount should be a decimal number with up to 18 decimal places')
            .isDecimal({ decimal_digits: '0,18' });
        },
        E = (e) => {
          (0, a.FE)(e)
            .message('Address is required')
            .isNotEmpty()
            .message('Invalid address')
            .isAddress()
            .message('Address cannot be zero address')
            .isNotZeroAddress();
        };
    },
    35183: (e, t, l) => {
      l.d(t, {
        K4: () => F,
        QF: () => i,
        YQ: () => n,
        jX: () => c,
        nE: () => a,
        o8: () => m,
        w2: () => r,
      });
      let a = 'https://cdn.jsdelivr.net',
        r = `${a}/gh/curvefi`,
        m = `${r}/curve-assets`,
        i = 1e14,
        n = (e) => `${m}/images/assets${'ethereum' == e ? '' : `-${e}`}/`,
        c = (e) => `${m}/chains/${e}.png`,
        F = (e) => `${m}/branding/curve_illustration-${'dark' === e ? 'dark' : 'light'}.svg`;
    },
    36074: (e, t, l) => {
      l.d(t, { Y: () => m, t: () => a, x: () => r });
      let a = (e, ...t) =>
          Array.isArray(e) ? e.map((e, l) => (l < t.length ? `${e}${t[l]}` : e)).join('') : e,
        r = ({ children: e }) => e,
        m = () => navigator.languages?.[0]?.startsWith('zh') ?? !1;
    },
    39416: (e, t, l) => {
      l.d(t, { A: () => b });
      var a = l(54568),
        r = l(7620),
        m = l(82619),
        i = l(38392),
        n = l(2511),
        c = l(30929),
        F = l(23606),
        d = l(76970),
        h = l(36965),
        p = l(32032),
        f = l(5372),
        E = l(73359),
        o = l(53467),
        z = l(9240),
        s = l(10806),
        u = l(12932),
        A = l(64170);
      let g = {
          ArrowUp: m.Do,
          ArrowUpRight: m.F1,
          ArrowDown: m.fS,
          ArrowsHorizontal: m.pv,
          ArrowLeft: m.nk,
          ArrowRight: m.Qp,
          ArrowsVertical: i.BK,
          Calendar: i.Vv,
          Cursor_1: n.Jr,
          CaretDown: c.aY,
          CaretUp: c.Zc,
          ChevronDown: F.yQ,
          ChevronLeft: F.JG,
          ChevronSort: F.SK,
          ChevronRight: F.c_,
          ChevronUp: F.rX,
          CheckmarkFilled: F._j,
          Close: F.bm,
          Copy: n.QR,
          CurrencyDollar: n.Sq,
          Hourglass: d.Dx,
          Favorite: h.NG,
          FavoriteFilled: h.nr,
          FavoriteHalf: h.Q$,
          Fire: h.vX,
          InformationSquare: p.aB,
          InformationSquareFilled: p.mR,
          Locked: f.HK,
          Maximize: E.hz,
          Menu: E.DE,
          Minimize: E.Xj,
          Misuse: E.Jr,
          Launch: f.MQ,
          Search: o.vj,
          Settings: o.wB,
          SettingsAdjust: o.b_,
          Renew: z.wM,
          RowDelete: z.O,
          SidePanelClose: o.kz,
          SidePanelOpen: o.i6,
          Stop: s.VG,
          StopFilledAlt: s.Y5,
          UpToTop: u.mI,
          Wallet: u.uW,
          WarningSquareFilled: u.eI,
          StoragePool: s.YJ,
          OverflowMenuVertical: A.CH,
        },
        b = ({ className: e, name: t, size: l, ...m }) => {
          let i = (0, r.useMemo)(() => {
            if (t && t in g) return g[t];
          }, [t]);
          return i ? (0, a.jsx)(i, { className: e, size: l, ...m }) : (0, a.jsx)(a.Fragment, {});
        };
    },
    39651: (e, t, l) => {
      l.d(t, { HP: () => r, fi: () => a, tr: () => m });
      let a = { xxs: 20, xs: 30, sm: 26.625, md: 60.063, lg: 80, xl: 120.063 },
        r = (e) => (t) => `@media (min-width: ${a[e]}rem) { ${t} }`;
      function m(e) {
        if (e > 1920) return 'page-wide';
        if (e > 1280 && e <= 1920) return 'page-large';
        if (e > 960 && e <= 1280) return 'page-medium';
        if (e > 450 && e <= 960) return 'page-small';
        if (e > 321 && e <= 450) return 'page-small-x';
        else return 'page-small-xx';
      }
    },
    45808: (e, t, l) => {
      l.d(t, { A: () => m });
      var a = l(48341),
        r = l(39651);
      let m = a.Ay.div
        .attrs(function ({ className: e, fillHeight: t, fillWidth: l, ...a }) {
          let r = `${e || ''} ${l ? 'width--full' : ''} ${t ? 'height--full' : ''}`;
          return { ...a, className: r };
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
      l.d(t, { v: () => r });
      var a = l(84826);
      function r(e) {
        if (e) {
          let t = e.max[1] ? (0, a.pS)(e.max[1]) : null,
            l = e.prio[1] ? (0, a.pS)(e.prio[1]) : null;
          if (t && l) return { maxFeePerGas: t, maxPriorityFeePerGas: l };
        }
        return null;
      }
    },
    47636: (e, t, l) => {
      l.d(t, { D$: () => r.D$, D6: () => a.D, X6: () => r.X6, oX: () => a.o }), l(94046);
      var a = l(89425),
        r = l(91069);
    },
    47990: (e, t, l) => {
      l.d(t, { A: () => a.A });
      var a = l(16726);
    },
    53082: (e, t, l) => {
      function a(e) {
        'function' == typeof e && setTimeout(() => e(), 100);
      }
      function r() {
        let e = document?.body?.classList;
        return e?.contains('page-small-x') || e?.contains('page-small-xx');
      }
      function m(e, t = 4) {
        return 42 === e.length
          ? e.slice(0, e.startsWith('0x') ? t + 2 : t) + '…' + e.slice(e.length - t)
          : e;
      }
      l.d(t, { _p: () => r, q5: () => a, z5: () => m });
    },
    56457: (e, t, l) => {
      l.d(t, { A: () => a.A });
      var a = l(39416);
    },
    58916: (e, t, l) => {
      l.d(t, { h: () => n });
      var a,
        r,
        m = l(7620);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var a in l) ({}).hasOwnProperty.call(l, a) && (e[a] = l[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let n = (e) =>
        m.createElement(
          'svg',
          i(
            { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 12, fill: 'currentColor' },
            e
          ),
          a ||
            (a = m.createElement('path', {
              d: 'M10.282 10.282H1.718V1.718h3.208V0H0v12h12V7.074h-1.718z',
            })),
          r ||
            (r = m.createElement('path', {
              d: 'M6.834 0v1.718H9.07l-4.75 4.75L5.533 7.68l4.75-4.75v2.236H12V0z',
            }))
        );
    },
    61873: (e, t, l) => {
      l.d(t, { a: () => p, q: () => h });
      var a = l(55807),
        r = l(86561),
        m = l(27824),
        i = l(50873),
        n = l(76635);
      let c = new m.$({
          onError: (e, t) => {
            (0, n.vV)(t.queryKey, e, e.message);
          },
          onSuccess: (e, t) => {
            (0, n.SW)(t.queryKey, e ? [e] : []);
          },
        }),
        F = (e, t) => {
          let l = e.options.meta?.queryKeyFn;
          return 'function' == typeof l ? l(t) : (e.options.mutationKey ?? String(e.mutationId));
        },
        d = new i.q({
          onError: (e, t, l, a) => {
            let r = F(a, t);
            (0, n.vV)(r, e, e.message);
          },
          onSuccess: (e, t, l, a) => {
            let r = F(a, t);
            (0, n.SW)(r, { data: e });
          },
          onMutate: (e, t) => {
            let l = F(t, e);
            (0, n.Cn)(l);
          },
        }),
        h = new r.E({
          defaultOptions: { queries: { retryDelay: (e) => Math.min(1e3 * 2 ** e, 3e4), retry: 3 } },
          queryCache: c,
          mutationCache: d,
        }),
        p = (0, a.s)({ storage: window.localStorage });
    },
    64174: (e, t, l) => {
      l.d(t, { Mj: () => c, ZB: () => m, zM: () => r });
      var a = l(7620);
      function r(e) {
        let t = window.localStorage.getItem(e);
        return t && JSON.parse(t);
      }
      function m(e, t) {
        if (null == t) return window.localStorage.removeItem(e);
        window.localStorage.setItem(e, JSON.stringify(t));
      }
      function i(e, t) {
        let l = r(e);
        return null == l ? t : l;
      }
      let n = new EventTarget();
      function c(e, t) {
        let [l, r] = (0, a.useState)(() => i(e, t)),
          c = (0, a.useCallback)(
            (l) => {
              let a = 'function' == typeof l ? l(i(e, t)) : l;
              m(e, a), r(a), n.dispatchEvent(new Event(e));
            },
            [t, e]
          );
        return (
          (0, a.useEffect)(() => {
            let l = () => r(i(e, t));
            return n.addEventListener(e, l), () => n.removeEventListener(e, l);
          }, [t, e]),
          [l ?? t, c]
        );
      }
    },
    64269: (e, t, l) => {
      l.d(t, {
        BN: () => d,
        Ho: () => E,
        Yq: () => A,
        ZV: () => o,
        b$: () => u,
        hd: () => p,
        l8: () => b,
        uN: () => g,
        vk: () => s,
      });
      var a = l(42464),
        r = l(10541),
        m = l.n(r),
        i = l(23780),
        n = l.n(i),
        c = l(81670),
        F = l(35183);
      a.A.config({ EXPONENTIAL_AT: 20, ROUNDING_MODE: a.A.ROUND_HALF_UP });
      let d = a.A,
        h = (0, c.o0)((0, c.uz)('lang'), (0, c.sm)(), () => 'en') || 'en-US',
        p = {
          PERCENT: { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'percent' },
          USD: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            currency: 'USD',
            style: 'currency',
          },
        };
      function f(e, t) {
        let l = e.toString().split('.')[1]?.length ?? 0;
        return l > t ? t : l;
      }
      function E(e, t) {
        let l = {};
        if (e && Number(e) >= 0) {
          let a = f(e, t);
          (l.minimumFractionDigits = a), (l.maximumFractionDigits = a);
        }
        return l;
      }
      function o(e, t) {
        let {
          defaultValue: l,
          showAllFractionDigits: r,
          showDecimalIfSmallNumberOnly: i,
          notation: n,
          ...c
        } = t ?? {};
        try {
          if (null == e || '' === e) return l || '';
          if (m()(Number(e))) return '?';
          {
            let l = { ...c, useGrouping: !0 };
            if (('USD' === l.currency && (l.style = 'currency'), 0 === Number(e)))
              return (
                (l.trailingZeroDisplay = 'stripIfInteger'),
                new Intl.NumberFormat(h, l).format(Number(e))
              );
            {
              let m = Number(e),
                F = new a.A(e).toString();
              if (
                (!('minimumFractionDigits' in l) &&
                  !('maximumFractionDigits' in l) &&
                  !('minimumSignificantDigits' in l) &&
                  !('maximumSignificantDigits' in l) &&
                  (r
                    ? (l.minimumFractionDigits =
                        new a.A(Number(e)).toString().split('.')[1]?.length ?? 0)
                    : i && m > 10
                      ? (l.maximumFractionDigits = 0)
                      : t?.style === 'percent'
                        ? (l.maximumFractionDigits = f(F, 2))
                        : 'compact' === n
                          ? (delete l.minimumFractionDigits,
                            delete l.maximumFractionDigits,
                            m >= 1e6
                              ? ((l.maximumFractionDigits = f(F, 2)), (l.notation = n))
                              : m > 10
                                ? ((l.trailingZeroDisplay = 'stripIfInteger'),
                                  (l.maximumFractionDigits = 0),
                                  (l.minimumFractionDigits = 0))
                                : (l.minimumFractionDigits = f(F, 5)))
                          : (l.minimumFractionDigits = f(F, 5))),
                1 > Number(e))
              ) {
                if (
                  (function (e, t) {
                    let { useGrouping: l, style: a, notation: r, ...m } = t;
                    return 0 === Number(new Intl.NumberFormat('en-US', m).format(Number(e)));
                  })(e, l)
                ) {
                  if (1e-9 > Number(e) && 'percent' !== l.style) return '<0.000000001';
                  {
                    let { minimumFractionDigits: t, maximumFractionDigits: a, ...r } = l;
                    return z(e, { ...r, minimumSignificantDigits: 2, maximumSignificantDigits: 2 });
                  }
                }
                if (9e-4 >= Number(e) && !('showAllFractionDigits' in (t ?? {}))) {
                  let { minimumFractionDigits: t, maximumFractionDigits: a, ...r } = l;
                  return z(e, { ...(r ?? {}), maximumSignificantDigits: 4 });
                }
              }
              return z(e, { ...l, ...c });
            }
          }
        } catch (a) {
          if ((console.error(a, { params: { val: e, options: t } }), null == e || '' === e))
            return l || '';
          if (m()(Number(e))) return '?';
          return e.toString();
        }
      }
      function z(e, t) {
        return 'USD' === t.currency && Number(e) > F.QF
          ? (console.warn(`USD value is too large: ${e}`), '?')
          : new Intl.NumberFormat(h, t).format('percent' === t.style ? Number(e) / 100 : Number(e));
      }
      function s(e, t) {
        let l = '';
        if (n()(e)) return '';
        if (m()(e)) l = '$N/A';
        else if (e) {
          if (1e-7 > Number(e)) {
            let e = { currency: 'USD', showAllFractionDigits: !0 };
            t && delete e.currency, (l = `<${o(1e-7, e)}`);
          } else {
            let a = { ...(Number(e) > 10 ? { minimumFractionDigits: 2 } : {}), currency: 'USD' };
            t && delete a.currency, (l = o(e, a));
          }
        }
        return l;
      }
      function u(e, t) {
        let l = t - Math.min(t, Math.max(0, Math.floor(Math.log10(e))));
        return z(e, { minimumFractionDigits: l, maximumFractionDigits: l });
      }
      let A = (e, t = 'short') =>
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
        g = (e) => A(new Date(1e3 * e)),
        b = (e) => e - 60 * new Date().getTimezoneOffset();
    },
    64387: (e, t, l) => {
      l.d(t, { A: () => r.A, N: () => a.A });
      var a = l(27487),
        r = l(45808);
    },
    70697: (e, t, l) => {
      l.d(t, { v$: () => d, yE: () => h, px: () => m, GQ: () => F, it: () => n });
      var a = l(7620),
        r = l(84007);
      let m = (e) => ({
          isLoading: e.some((e) => e.isLoading),
          isPending: e.some((e) => e.isPending),
          isError: e.some((e) => e.isError),
          isFetching: e.some((e) => e.isFetching),
        }),
        i = (e, t) => ({
          data: Object.fromEntries((e || []).map(({ data: e }, l) => [t[l], e])),
          ...m(e),
        }),
        n = (e, t) =>
          (0, r.useQueries)({ queries: e, combine: (0, a.useCallback)((e) => i(e, t), [t]) });
      var c = l(67933);
      let F = (e) => (t, l) => {
          let a = e(t, l);
          return (0, c.useQuery)(a);
        },
        d = { isError: !1, isLoading: !0, isPending: !0, isFetching: !0, data: void 0 },
        h = { isError: !1, isLoading: !1, isPending: !1, isFetching: !1 };
    },
    71741: (e, t, l) => {
      l.d(t, { A: () => a });
      let a = l(48341).Ay.div.withConfig({ componentId: 'sc-b1ee5e03-0' })(
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
        Ac: () => n,
        B6: () => m,
        Kz: () => c,
        Uw: () => h,
        XQ: () => F,
        dw: () => d,
        ri: () => a,
        vd: () => r,
        w8: () => i,
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
        m = {
          200: '#ffd88b',
          300: '#ffc300',
          400: '#f77f00',
          500: '#ed242f',
          600: '#d41e26',
          700: '#b0151f',
          800: '#8c111c',
        },
        i = {
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
        n = {
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
        c = {
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
        F = {
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
        d = { Snackbar: 6e3 },
        h = 'ease-out 256ms';
    },
    73716: (e, t, l) => {
      l.d(t, {
        AW: () => w,
        Ej: () => d,
        Gk: () => g,
        N6: () => u,
        NB: () => x,
        Sg: () => C,
        VP: () => A,
        w5: () => D,
      });
      var a = l(54568),
        r = l(33550),
        m = l(7620),
        i = l(74699),
        n = l(22017),
        c = l(96252),
        F = l(64174);
      let d = {
          CONNECT_API: 'api',
          HYDRATE: 'hydrate',
          CONNECT_WALLET: 'connect-wallet',
          DISCONNECT_WALLET: 'disconnect-wallet',
          SWITCH_NETWORK: 'switch-network',
        },
        {
          FAILURE: h,
          LOADING: p,
          SUCCESS: f,
        } = { LOADING: 'loading', SUCCESS: 'success', FAILURE: 'failure' },
        { HYDRATE: E, SWITCH_NETWORK: o, CONNECT_WALLET: z, CONNECT_API: s } = d,
        u = ({ status: e, stage: t }, l) => e === h && !!(!l || t?.startsWith(l)),
        A = ({ status: e, stage: t }, l) =>
          e === p &&
          !!(!l || (Array.isArray(l) ? l.some((e) => t?.startsWith(e)) : t?.startsWith(l))),
        g = ({ status: e, stage: t }) => e === f && t !== E,
        b = (0, m.createContext)({ connectState: { status: p } }),
        v = (e, t) => !e || i.kB(e)?.toLowerCase() == t?.signerAddress?.toLowerCase(),
        C = ({ hydrate: e, initLib: t, chainId: l, onChainUnavailable: d, children: u }) => {
          let [A, g] = (0, m.useState)({ status: p }),
            C = (0, m.useRef)(!1),
            { wallet: D, connect: w } = (0, i.vT)(),
            [x, y] = (0, i.v3)();
          (0, m.useEffect)(() => {
            C.current && (0, F.ZB)(n.Bj, D?.label ?? null);
          }, [D]),
            (0, m.useEffect)(() => {
              let a = new AbortController(),
                m = a.signal,
                u = async (e) => (
                  g({ status: p, stage: z }),
                  (0, c.wj)(w({ autoSelect: { label: e, disableModals: !0 } }))
                    .then((e) => e.length > 0)
                    .catch(() => !1)
                );
              return (
                (async () => {
                  try {
                    if (!C.current) {
                      C.current = !0;
                      let e = (0, F.zM)(n.Bj);
                      if (e && (await u(e))) return;
                    }
                    let a = (0, i.oe)(D),
                      c = document.hasFocus();
                    if (
                      a &&
                      a !== l &&
                      c &&
                      (g({ status: p, stage: o }), !(await y({ chainId: r.nD(l) })))
                    ) {
                      if (m.aborted) return;
                      g({ status: h, stage: o }), d([l, a]);
                    }
                    let z = B.get(),
                      A = z;
                    if (!v(D, z) || z?.chainId != l) {
                      if (
                        m.aborted ||
                        (g({ status: p, stage: s }), (A = (await t(l, D)) ?? null), m.aborted)
                      )
                        return;
                      B.set(A);
                    }
                    if (m.aborted) return;
                    g({ status: f, stage: E }), await e(A, z, D), g({ status: f });
                  } catch (e) {
                    if (m.aborted) return console.info('Error during init ignored', e);
                    console.error('Error during init', e),
                      g(({ stage: t }) => ({ status: h, stage: t, error: e }));
                  }
                })(),
                () => a.abort()
              );
            }, [C, l, w, e, t, d, y, D]);
          let S = B.get(),
            M = S?.chainId === l && v(D, S);
          return (0, a.jsx)(b.Provider, {
            value: { connectState: A, ...(M && { lib: S }) },
            children: u,
          });
        },
        D = () => (0, m.useContext)(b),
        B = {
          current: null,
          get: () => B.current,
          require: () => {
            if (!B.current) throw Error('Lib not initialized');
            return B.current;
          },
          set: (e) => (B.current = e),
        },
        w = () => B.get(),
        x = () => B.require();
    },
    74699: (e, t, l) => {
      l.d(t, {
        Ej: () => i.Ej,
        vz: () => f,
        s8: () => b,
        Sg: () => i.Sg,
        AW: () => i.AW,
        oe: () => m.oe,
        kB: () => m.kB,
        oX: () => m.oX,
        N6: () => i.N6,
        VP: () => i.VP,
        me: () => r.me,
        NB: () => i.NB,
        GS: () => C,
        w5: () => i.w5,
        v3: () => a.v3,
        vT: () => r.vT,
      });
      var a = l(75334),
        r = l(22017),
        m = l(96252),
        i = l(73716),
        n = l(54568),
        c = l(56120),
        F = l(36074);
      let d = (e) =>
        (0, n.jsx)(c.A, {
          size: 'small',
          color: 'primary',
          'data-testid': 'navigation-connect-wallet',
          ...e,
          children: (0, F.t)`Connect Wallet`,
        });
      var h = l(84826);
      let p = ({ walletAddress: e, ...t }) =>
          (0, n.jsx)(c.A, {
            size: 'small',
            color: 'ghost',
            title: e,
            ...t,
            children: (0, h.Wr)(e),
          }),
        f = ({ sx: e, onConnect: t }) => {
          let { signerAddress: l, connect: a, disconnect: m, wallet: c } = (0, r.vT)(),
            { connectState: F } = (0, i.w5)(),
            h = (0, i.VP)(F, i.Ej.CONNECT_WALLET);
          return c && l
            ? (0, n.jsx)(p, {
                walletAddress: l,
                onClick: () => m({ label: c.label }),
                loading: h,
                sx: e,
              })
            : (0, n.jsx)(d, { onClick: () => (t?.(), a()), loading: h, sx: e });
        };
      var E = l(61773),
        o = l(31184),
        z = l(32678),
        s = l(87401),
        u = l(4387),
        A = l(77241),
        g = l(84032);
      let b = ({
          description: e,
          connectText: t,
          loadingText: l,
          connectWallet: a,
          isLoading: r,
        }) =>
          (0, n.jsxs)(o.A, {
            padding: 7,
            spacing: 8,
            width: g.B.MaxWidth.connectWallet,
            maxWidth: '90vw',
            sx: { backgroundColor: 'var(--table--background-color)' },
            children: [
              (0, n.jsxs)(o.A, {
                spacing: 3,
                paddingBlock: 8,
                alignItems: 'center',
                justifyContent: 'center',
                sx: {
                  backgroundImage: (e) => `url(${(0, A.K4)(e.key)})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                },
                children: [
                  (0, n.jsx)(v, { src: u.jp, alt: 'Curve Logo' }),
                  (0, n.jsx)(s.A, { variant: 'headingXxl', children: (0, F.t)`Enter Curve` }),
                ],
              }),
              (0, n.jsxs)(o.A, {
                spacing: 3,
                alignItems: 'center',
                children: [
                  (0, n.jsx)(s.A, { variant: 'bodyMRegular', children: e }),
                  (0, n.jsx)(c.A, {
                    size: 'large',
                    color: 'primary',
                    onClick: a,
                    loading: r,
                    loadingPosition: 'start',
                    'data-testid': `btn-connect-prompt${r ? '-loading' : ''}`,
                    children: r ? l : t,
                  }),
                ],
              }),
            ],
          }),
        v = (0, z.Ay)(E.default)({
          width: '3rem',
          height: '3rem',
          margin: '0 auto',
          '@media (min-width: 43.75rem)': { width: '5.5rem', height: '5.5rem' },
        }),
        C = (e) => {
          e.setStateByKey('formStatus', {
            ...e.formStatus,
            step: '',
            formProcessing: !1,
            error: 'error-invalid-provider',
          });
        };
    },
    75778: (e, t, l) => {
      l.d(t, { ku: () => c, ps: () => n });
      var a = l(48341),
        r = l(77878);
      let m = (0, a.AH)([
          'color:var(--button--color);background-color:var(--button--background-color);border:1px solid var(--nav_button--border-color);box-shadow:3px 3px 0 var(--button--shadow-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover:not(:disabled):not(.loading){background-color:var(--button_filled--hover--background-color);}&:active:not(:disabled){box-shadow:none;transform:translate3d(3px,3px,3px);}&.loading,&:disabled{color:var(--button--disabled--color);border-color:var(--button--disabled--border-color);background-color:var(--button--disabled--background-color);box-shadow:none;cursor:initial;}',
        ]),
        i = (0, a.AH)([
          'border:1px solid var(--nav_button--border-color);box-shadow:3px 3px 0 var(--box--primary--shadow-color);background:var(--layout--home--background-color);color:var(--page--text-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&.active:not(:disabled){color:var(--button--color);background-color:var(--button--background-color);border:1px solid var(--button--border-color);box-shadow:3px 3px 0 var(--button--shadow-color);}&:hover:not(:disabled){color:var(--button--color);border:1px solid var(--button--border-color);background-color:var(--button_filled--hover--background-color);}&.loading,&:disabled{color:var(--button--disabled--color);}',
        ]),
        n = (0, a.AH)([
          'color:var(--button_outlined--color);background-color:transparent;border:1px solid var(--button_outlined--border-color);transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:disabled{opacity:0.5;cursor:initial;transition:none;}&:hover:not(:disabled){color:var(--button_outlined--hover--color);border-color:var(--button_outlined--hover--color);background-color:var(--button_outlined--hover--background-color);}',
        ]),
        c = (0, a.AH)(
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
        ${m}
      `;
            if ('icon-filled' === e)
              return `
        align-items: center;
        display: ${t ? 'flex' : 'inline-flex'};
        justify-content: center;

        ${m}
      `;
            if ('outlined' === e) return `${n}`;
            if ('icon-outlined' === e)
              return `
        ${n}

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
        ${i}
        box-shadow: none;
        &.active:not(:disabled) {
          box-shadow: none;
          border: 1px solid var(--button_outlined--border-color);
        }
      `;
          }
        );
    },
    76635: (e, t, l) => {
      l.d(t, { Cn: () => c, Rm: () => i, SW: () => d, b0: () => r, dB: () => n, vV: () => F });
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
      let m = (e) => {
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
      function i(e, t, ...l) {
        if (!a.TS) return;
        let n = new Date().toISOString(),
          c = 'string' == typeof e ? e.split('.') : Array.isArray(e) ? e : [e],
          F = (e) => {
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
        if (a.OC) return F(t)(JSON.stringify({ status: t, keyArray: c, args: l }).slice(0, 300));
        let d = t && Object.values(r).includes(t),
          [h, p] = ((e) => {
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
          })(c),
          f = (d ? l : [t, ...l]).filter((e) => null != e),
          E = f.length
            ? `%c (%c${f
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
          o = `%cDApp%c @ %c${n}%c -> ${d ? `%c${t}%c ` : ''}${h}${E}`,
          z = [
            'background: #1e63e9; color: white; padding: 2px 4px; border-radius: 3px;',
            'color: #666; font-weight: bold;',
            'color: #2196F3;',
            'color: #666;',
            ...(d ? [m(t), 'color: #4CAF50; font-weight: bold;'] : []),
            ...p,
            ...(f.length ? ['color: #fff;', 'color: #666;', 'color: #fff;'] : []),
          ];
        F(t)(o, ...z);
      }
      let n = (e, ...t) => i(e, 'query', ...t),
        c = (e, ...t) => i(e, 'mutation', ...t),
        F = (e, ...t) => i(e, 'error', ...t),
        d = (e, ...t) => i(e, 'success', ...t);
    },
    77241: (e, t, l) => {
      l.d(t, {
        BN: () => c.BN,
        o8: () => d.o8,
        hd: () => c.hd,
        AA: () => F.A,
        fi: () => r.fi,
        ic: () => i,
        mf: () => n,
        l8: () => c.l8,
        q5: () => a.q5,
        ND: () => m.N,
        Yq: () => c.Yq,
        uN: () => c.uN,
        ZV: () => c.ZV,
        vk: () => c.vk,
        b$: () => c.b$,
        K4: () => d.K4,
        lL: () => F.l,
        jX: () => d.jX,
        Ho: () => c.Ho,
        _p: () => a._p,
        tr: () => r.tr,
        z5: () => a.z5,
      });
      var a = l(53082),
        r = l(39651),
        m = l(77878);
      let i = (e) =>
          'number' == typeof e
            ? new Date(1e3 * e)
            : 'string' == typeof e
              ? new Date(e.includes('Z') ? e : `${e}Z`)
              : e,
        n = (e) => {
          let t = Math.abs(new Date().getTime() - i(e).getTime()),
            l = Math.floor(t / 6e4),
            a = Math.floor(t / 36e5),
            r = Math.floor(t / 864e5);
          return r > 0 ? `${r}d` : a > 0 ? `${a}h` : `${l}m`;
        };
      l(46759);
      var c = l(64269),
        F = l(82994),
        d = l(35183);
    },
    77878: (e, t, l) => {
      l.d(t, { N: () => a });
      let a = (0, l(48341).AH)([
        '&:focus:not(.focus-visible){outline:none;}&.focus-visible{outline:2px solid var(--focus);z-index:1;}',
      ]);
    },
    79214: (e, t, l) => {
      l.d(t, { s: () => a });
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
    },
    82994: (e, t, l) => {
      l.d(t, { A: () => n, l: () => c });
      var a = l(79214),
        r = l(33550),
        m = l(35183);
      let i = {
          blocknativeSupport: !0,
          name: '',
          gasL2: !1,
          gasPricesUnit: 'GWEI',
          gasPricesUrl: '',
          gasPricesDefault: 0,
          integrations: {
            listUrl: `${m.w2}/curve-external-integrations/integrations-list.json`,
            tagsUrl: `${m.w2}/curve-external-integrations/integrations-tags.json`,
          },
          rewards: {
            baseUrl: m.nE,
            campaignsUrl: `${m.w2}/curve-external-reward@latest/campaign-list.json`,
            tagsUrl: `${m.w2}/curve-external-reward@latest/reward-tags.json`,
          },
          orgUIPath: '',
        },
        n = {
          [a.s.Ethereum]: {
            id: 'ethereum',
            chainId: a.s.Ethereum,
            gasPricesUrl: 'https://api.curve.fi/api/getGas',
            gasPricesDefault: 1,
            nativeCurrencySymbol: 'ETH',
            rpcUrl: 'https://eth.drpc.org',
            explorerUrl: 'https://etherscan.io/',
            orgUIPath: 'https://classic.curve.fi',
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
            orgUIPath: 'https://xdai.curve.fi',
          },
          [a.s.Moonbeam]: {
            id: 'moonbeam',
            chainId: a.s.Moonbeam,
            rpcUrl: 'https://moonbeam.public.blastapi.io',
            nativeCurrencySymbol: 'GLMR',
            explorerUrl: 'https://moonscan.io/',
            orgUIPath: 'https://moonbeam.curve.fi',
          },
          [a.s.Polygon]: {
            id: 'polygon',
            chainId: a.s.Polygon,
            gasPricesUrl: 'https://gasstation.polygon.technology/v2',
            gasPricesDefault: 0,
            rpcUrl: 'https://polygon-rpc.com',
            nativeCurrencySymbol: 'MATIC',
            explorerUrl: 'https://polygonscan.com/',
            orgUIPath: 'https://polygon.curve.fi',
          },
          [a.s.Kava]: {
            id: 'kava',
            chainId: a.s.Kava,
            gasPricesUnit: 'UKAVA',
            rpcUrl: 'https://evm.kava.io',
            nativeCurrencySymbol: 'KAVA',
            explorerUrl: 'https://explorer.kava.io/',
            orgUIPath: 'https://kava.curve.fi',
          },
          [a.s.Fantom]: {
            id: 'fantom',
            chainId: a.s.Fantom,
            rpcUrl: 'https://rpc.ftm.tools/',
            nativeCurrencySymbol: 'FTM',
            explorerUrl: 'https://ftmscout.com/',
            orgUIPath: 'https://ftm.curve.fi',
          },
          [a.s.Arbitrum]: {
            id: 'arbitrum',
            chainId: a.s.Arbitrum,
            rpcUrl: 'https://arb1.arbitrum.io/rpc',
            nativeCurrencySymbol: 'ETH',
            explorerUrl: 'https://arbiscan.io/',
            orgUIPath: 'https://arbitrum.curve.fi',
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
            orgUIPath: 'https://avax.curve.fi',
          },
          [a.s.Celo]: {
            id: 'celo',
            chainId: a.s.Celo,
            rpcUrl: 'https://forno.celo.org',
            nativeCurrencySymbol: 'CELO',
            explorerUrl: 'https://celoscan.io/',
            orgUIPath: 'https://celo.curve.fi',
          },
          [a.s.Aurora]: {
            id: 'aurora',
            chainId: a.s.Aurora,
            rpcUrl: 'https://mainnet.aurora.dev',
            nativeCurrencySymbol: 'aETH',
            explorerUrl: 'https://aurorascan.dev/',
            orgUIPath: 'https://aurora.curve.fi',
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
      function c(e, t) {
        let {
          name: l,
          explorerUrl: a,
          id: m,
          nativeCurrencySymbol: n,
          rpcUrl: c,
          isTestnet: F = !1,
          ...d
        } = { ...i, ...t };
        return {
          ...d,
          name: (function (e) {
            let t = e.replace(/[-_]./g, (e) => ' ' + e.charAt(1).toUpperCase());
            return t.charAt(0).toUpperCase() + t.slice(1);
          })(l || m),
          chainId: e,
          symbol: n,
          id: m,
          networkId: m,
          hex: r.nD(e),
          logoSrc: `https://cdn.jsdelivr.net/gh/curvefi/curve-assets/chains/${m}.png`,
          logoSrcDark: `https://cdn.jsdelivr.net/gh/curvefi/curve-assets/chains/${m}-dark.png`,
          rpcUrl: c,
          isTestnet: F,
          scanAddressPath: (e) => `${a}address/${e}`,
          scanTxPath: (e) => `${a}tx/${e}`,
          scanTokenPath: (e) => `${a}token/${e}`,
        };
      }
    },
    84032: (e, t, l) => {
      l.d(t, { B: () => F });
      var a = l(72415);
      let r = {
          xxs: { mobile: a.Kz[100], tablet: a.Kz[100], desktop: a.Kz[100] },
          xs: { mobile: a.Kz[100], tablet: a.Kz[200], desktop: a.Kz[200] },
          sm: { mobile: a.Kz[200], tablet: a.Kz[300], desktop: a.Kz[300] },
          md: { mobile: a.Kz[300], tablet: a.Kz[400], desktop: a.Kz[400] },
          lg: { mobile: a.Kz[400], tablet: a.Kz[500], desktop: a.Kz[500] },
          xl: { mobile: a.Kz[500], tablet: a.Kz[600], desktop: a.Kz[600] },
          xxl: { mobile: a.Kz[600], tablet: a.Kz[700], desktop: a.Kz[700] },
        },
        m = {
          xxs: { mobile: a.XQ[50], tablet: a.XQ[100], desktop: a.XQ[100] },
          xs: { mobile: a.XQ[150], tablet: a.XQ[200], desktop: a.XQ[200] },
          sm: { mobile: a.XQ[200], tablet: a.XQ[300], desktop: a.XQ[300] },
          md: { mobile: a.XQ[300], tablet: a.XQ[400], desktop: a.XQ[400] },
          lg: { mobile: a.XQ[400], tablet: a.XQ[500], desktop: a.XQ[500] },
          xl: { mobile: a.XQ[500], tablet: a.XQ[600], desktop: a.XQ[600] },
          xxl: { mobile: a.XQ[600], tablet: a.XQ[700], desktop: a.XQ[700] },
          '3xl': { mobile: a.XQ[700], tablet: a.XQ[800], desktop: a.XQ[800] },
        },
        i = {
          xxs: { mobile: a.XQ[100], tablet: a.XQ[125], desktop: a.XQ[125] },
          xs: { mobile: a.XQ[125], tablet: a.XQ[150], desktop: a.XQ[150] },
          sm: { mobile: a.XQ[150], tablet: a.XQ[200], desktop: a.XQ[200] },
          md: { mobile: a.XQ[250], tablet: a.XQ[250], desktop: a.XQ[250] },
          lg: { mobile: a.XQ[300], tablet: a.XQ[350], desktop: a.XQ[350] },
          xl: { mobile: a.XQ[400], tablet: a.XQ[500], desktop: a.XQ[500] },
          xxl: { mobile: a.XQ[500], tablet: a.XQ[600], desktop: a.XQ[600] },
          '3xl': { mobile: a.XQ[600], tablet: a.XQ[700], desktop: a.XQ[700] },
          '4xl': { mobile: a.XQ[700], tablet: a.XQ[800], desktop: a.XQ[800] },
        },
        n = {
          Column_Spacing: { mobile: a.Kz[300], tablet: a.Kz[400], desktop: a.Kz[500] },
          Row_Spacing: { mobile: a.Kz[300], tablet: a.Kz[400], desktop: a.Kz[500] },
        },
        c = {
          xs: { mobile: a.XQ[125], tablet: a.XQ[125], desktop: a.XQ[125] },
          sm: { mobile: a.XQ[150], tablet: a.XQ[150], desktop: a.XQ[150] },
          md: { mobile: a.XQ[200], tablet: a.XQ[200], desktop: a.XQ[200] },
          lg: { mobile: a.XQ[250], tablet: a.XQ[300], desktop: a.XQ[300] },
          xl: { mobile: a.XQ[350], tablet: a.XQ[400], desktop: a.XQ[400] },
          xxl: { mobile: a.XQ[500], tablet: a.XQ[600], desktop: a.XQ[700] },
        },
        F = {
          Spacing: r,
          Sizing: m,
          IconSize: i,
          ButtonSize: { xs: a.XQ[300], sm: a.XQ[500], md: a.XQ[600], lg: a.XQ[650] },
          Grid: n,
          FontSize: c,
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
            xs: { mobile: '0.75rem', tablet: '0.75rem', desktop: '0.875rem' },
            sm: { mobile: '0.875rem', tablet: '0.875rem', desktop: '1rem' },
            md: { mobile: '1.5rem', tablet: '1.5rem', desktop: '1.5rem' },
            lg: { mobile: '1.5rem', tablet: '1.5rem', desktop: '2rem' },
            xl: { mobile: '2rem', tablet: '2rem', desktop: '2.5rem' },
            xxl: { mobile: '2.5rem', tablet: '2.5rem', desktop: '4rem' },
          },
          ModalWidth: { xs: '100vw', sm: '100vw', md: '28rem', lg: '32rem', xl: '36rem' },
          ColumnWidth: { sm: 125, md: 200, lg: 350 },
          ModalHeight: {
            sm: { maxHeight: '100vh', height: '100vh', minHeight: '100vh' },
            md: { maxHeight: '100vh', height: '80vh', minHeight: '80vh' },
          },
          OutlineWidth: '0.125rem',
          MinWidth: { table: '60rem', tableHeader: '50rem', select: '5rem' },
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
          MinHeight: { tableNoResults: '35vh' },
          MaxHeight: { popover: '17rem', tokenSelector: '47rem' },
        };
    },
    84826: (e, t, l) => {
      l.d(t, {
        BD: () => n,
        sW: () => v.s,
        $t: () => B,
        lW: () => S,
        TS: () => y,
        Jg: () => w.Jg,
        Js: () => o,
        Kl: () => b,
        Nj: () => F,
        hJ: () => w.hJ,
        UF: () => s,
        $K: () => u,
        OC: () => x,
        yJ: () => p,
        OW: () => f,
        Rd: () => h,
        Co: () => D,
        Xs: () => w.Xs,
        Wr: () => i,
        l1: () => z,
        cz: () => d,
        p1: () => A,
        pS: () => g,
      });
      var a = l(81734),
        r = l(63013),
        m = l(81981);
      function i(e, t) {
        let { digits: l = 4 } = t || {},
          a = (0, r.b)(e || m.Xd);
        return `${a.slice(0, l + 2)}...${a.slice(-l)}`;
      }
      class n {
        static {
          this.STRING_REGEX = /^(-?)(\d*)(?:\.(\d+))?$/;
        }
        constructor(e, t = 0) {
          if (t < 0) throw Error('Scale must be non-negative');
          if (e instanceof n) {
            (this._integerPart = e._integerPart),
              (this._fractionalPart = e._fractionalPart),
              (this._scale = Math.max(e._scale, t)),
              (this._isNegative = e._isNegative);
            return;
          }
          if ('string' == typeof e) {
            let l = n.STRING_REGEX.exec(e);
            if (!l)
              throw Error(
                'Invalid string format. Expected "integer", "integer.fraction", or ".fraction"'
              );
            let [, a, r, m = ''] = l;
            (this._integerPart = BigInt(r || '0')),
              (this._fractionalPart = BigInt(m.padEnd(t, '0'))),
              (this._scale = Math.max(m.length, t)),
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
          return new n(e, t);
        }
        static {
          this.fr = n.from;
        }
        static {
          this.zero = n.from(0);
        }
        static isValid(e) {
          return (
            e instanceof n ||
            ('string' == typeof e
              ? n.STRING_REGEX.test(e)
              : 'number' == typeof e
                ? !isNaN(e) && isFinite(e)
                : 'bigint' == typeof e)
          );
        }
        negate() {
          let e = new n(this, this._scale);
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
            m = a.toScaledBigInt();
          if (this._isNegative === e._isNegative) {
            let e = r + m,
              l = new n(0, t);
            return (
              (l._integerPart = e / this.scaleFactor(t)),
              (l._fractionalPart = e % this.scaleFactor(t)),
              (l._isNegative = this._isNegative),
              l
            );
          }
          {
            let l = r > m,
              a = (l ? r : m) - (l ? m : r),
              i = new n(0, t);
            return (
              (i._integerPart = a / this.scaleFactor(t)),
              (i._fractionalPart = a % this.scaleFactor(t)),
              (i._isNegative = l ? this._isNegative : e._isNegative),
              i
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
            a = new n(0, t);
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
            m = new n(r / a.toScaledBigInt(), t);
          return (m._isNegative = this._isNegative !== e._isNegative), m;
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
          if (this.isZero()) return new n(0);
          let t = new n(1, e + 1),
            l = this.scaleUp(e + 1),
            a = new n(l._integerPart, 0).div(new n(2), e + 1);
          for (; l.minus(a).abs().gt(t); )
            (l = a),
              (a = this.div(l, e + 1)
                .plus(l)
                .div(new n(2), e + 1));
          return a;
        }
        scaleUp(e) {
          if (e <= this._scale) return this;
          let t = e - this._scale,
            l = this._fractionalPart * this.scaleFactor(t);
          return new n(this._integerPart * this.scaleFactor(e) + l, e);
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
          return new n(
            l._integerPart * t + (l._fractionalPart + 5n * this.scaleFactor(0)) / 10n,
            e
          );
        }
      }
      var c = l(54982);
      function F(e, t) {
        return (e * t) / 100n;
      }
      function d(e, t = 18) {
        let l = 0n;
        return (
          e.forEach((e) => {
            l += E(e, t);
          }),
          l
        );
      }
      function h(e, t, l = 18) {
        return E(e, l) - E(t, l);
      }
      function p(e, t, l = 18) {
        return E(e) > E(t, l);
      }
      function f(e, t, l = 18) {
        return E(e, l) >= E(t, l);
      }
      function E(e, t = 18) {
        if ('bigint' == typeof e) return e;
        let l = e || '0';
        if (l.includes('.')) {
          let [e, a] = l.split('.'),
            r = a.substring(0, t);
          l = `${e}.${r}`;
        }
        return (0, c.XS)(l, t);
      }
      function o(e, t = 18) {
        return (0, c.Js)(e, t);
      }
      function z(e, t) {
        let { digits: l = 4 } = t || {};
        return e ? `${e.slice(0, l + 2)}...${e.slice(-l)}` : '-';
      }
      function s(e) {
        return e / 1e9;
      }
      function u(e) {
        return Math.trunc(1e9 * e);
      }
      function A(e) {
        return e / 1e18;
      }
      function g(e) {
        return Math.trunc(e) / 1e9;
      }
      function b(e) {
        return e.includes('.') ? e.split('.')[1].length : 0;
      }
      var v = l(79214);
      function C(e) {
        return Math.floor(Math.log10(Math.abs(e)) / 3);
      }
      function D(e) {
        let t = ['', 'k', 'm', 'b', 't'],
          l = Math.max(0, Math.min(t.length - 1, C(e)));
        return t[l];
      }
      function B(e) {
        let t = 3 * C(e);
        return e / (t > 0 ? 10 ** t : 1);
      }
      var w = l(23779);
      let x = !!window.Cypress,
        y = 'curve.fi' !== window.location.hostname;
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
    89425: (e, t, l) => {
      l.d(t, { D: () => r, o: () => a });
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
        r = { WEEK: 604800, MONTH: 2592e3 };
    },
    91069: (e, t, l) => {
      l.d(t, { X6: () => a.X, D$: () => r });
      var a = l(4289);
      let r = {
        chain: ({ chainId: e }) => ['chain', { chainId: e }],
        chainName: ({ blockchainId: e }) => ['chain', { blockchainId: e }],
        pool: ({ chainId: e, poolId: t }) => [...r.chain({ chainId: e }), 'pool', { poolId: t }],
        contract: ({ blockchainId: e, contractAddress: t }) => [
          ...r.chainName({ blockchainId: e }),
          'contract',
          { contractAddress: t },
        ],
        gauge: ({ chainId: e, poolId: t }) => [...r.pool({ chainId: e, poolId: t }), 'gauge'],
      };
    },
    94046: (e, t, l) => {
      l.d(t, { c: () => a });
      let a = {
        mode: 'onChange',
        reValidateMode: 'onBlur',
        resetOptions: { keepErrors: !1 },
        delayError: 150,
        criteriaMode: 'all',
      };
    },
    96252: (e, t, l) => {
      l.d(t, { Xo: () => c, kB: () => i, oX: () => n, oe: () => m, wj: () => d });
      var a = l(36074),
        r = l(47636);
      function m(e) {
        let t = e?.chains[0].id;
        return t && Number(BigInt(t).toString());
      }
      let i = (e) => e?.accounts[0]?.address,
        n = (e) => e?.accounts[0]?.ens?.name;
      function c(e) {
        return 'isTrustWallet' in e.provider && window.ethereum
          ? window.ethereum
          : 'isExodus' in e.provider && void 0 !== window.exodus.ethereum
            ? window.exodus.ethereum
            : e.provider;
      }
      let F = (e, t) => new Promise((l, a) => setTimeout(() => a(Error(e)), t)),
        d = (e, t = (0, a.t)`Timeout connecting wallet`, l = r.oX['3s']) =>
          Promise.race([e, F(t, l)]);
    },
    99599: (e, t, l) => {
      l.d(t, { A: () => r.A, V: () => a.A });
      var a = l(71741),
        r = l(27280);
    },
  },
]);
