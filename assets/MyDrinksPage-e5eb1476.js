import{u as x,i as l,d as f,r as a,c as h,av as j,j as s,C as k}from"./index-12ebe24e.js";import{u as D,D as P,N as v}from"./NotFoundDrinks-eb5e7d4d.js";import{P as E}from"./PageTitle-40eac95f.js";import{u as y,P as C}from"./Paginator-050066dd.js";import{c as M}from"./drinks.selectors-f4b08448.js";import"./coctailPlaceholder-63182dac.js";import"./blueIced@2xMob-5282b6fb.js";const N=x.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function L(){const r=l(),i=f(),[e,m]=a.useState(1),{total:u,ownDrinks:t}=D(),[g,d]=a.useState(!1),o=h(M),{isDesktop:c}=y(),p=n=>{m(n)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&p(e-1),d((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{r(`?page=${e}`)},[e,r]),a.useEffect(()=>{i(j({page:o,size:6})).unwrap().catch(n=>console.log(n))},[i,o,c,u]),s.jsx(k,{children:s.jsxs(N,{children:[s.jsx(E,{title:"My drinks"}),g>0?s.jsxs(s.Fragment,{children:[s.jsx(P,{drinksData:t,onPageChange:p,currentPage:e}),s.jsx(C,{})]}):s.jsx(v,{text:"You haven't added any cocktails"})]})})}export{L as default};
