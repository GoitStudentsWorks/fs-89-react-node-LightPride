import{u as g,d as x,r as a,c as l,aw as h,j as s,C as f}from"./index-12ebe24e.js";import{c as j}from"./drinks.selectors-f4b08448.js";import{u as P,D,N as k}from"./NotFoundDrinks-eb5e7d4d.js";import{P as F}from"./PageTitle-40eac95f.js";import{u as v,P as w}from"./Paginator-050066dd.js";import"./coctailPlaceholder-63182dac.js";import"./blueIced@2xMob-5282b6fb.js";const C=g.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function A(){const o=x(),{total:p,favoriteDrinks:t}=P(),[e,m]=a.useState(1),[u,d]=a.useState(!1),n=l(j),{isDesktop:i}=v(),c=r=>{m(r)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&c(e-1),d((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{o(h({page:n,size:i?9:8})).unwrap().catch(r=>console.log(r))},[o,n,i,p]),s.jsx(f,{children:s.jsxs(C,{children:[s.jsx(F,{title:"Favorites"}),u>0?s.jsxs(s.Fragment,{children:[s.jsx(D,{favorite:!0,drinksData:t,onPageChange:c,currentPage:e}),s.jsx(w,{})]}):s.jsx(k,{text:"You haven't added any favorite cocktails yet"})]})})}export{A as default};
