// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return r&&"symbol"==typeof Symbol.toStringTag},t=Object.prototype.toString,e=t;var o=function(r){return e.call(r)},u=Object.prototype.hasOwnProperty;var f=function(r,n){return null!=r&&u.call(r,n)},a="function"==typeof Symbol?Symbol.toStringTag:"",i=f,c=a,v=t;var y=o,l=function(r){var n,t,e;if(null==r)return v.call(r);t=r[c],n=i(r,c);try{r[c]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[c]=t:delete r[c],e},p=n()?l:y,A=p,w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,U=function(r){return w&&r instanceof Uint32Array||"[object Uint32Array]"===A(r)},h=b;var s=function(){var r,n;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=U(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var m="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},d=s()?m:N,I=p,F="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null,H=function(r){return F&&r instanceof Float64Array||"[object Float64Array]"===I(r)},O=S;var g=function(){var r,n;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),r=H(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var E="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},T=g()?E:j,G=p,L="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,M=function(r){return L&&r instanceof Uint8Array||"[object Uint8Array]"===G(r)},P=W;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=M(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,x=p,q="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null,B=function(r){return q&&r instanceof Uint16Array||"[object Uint16Array]"===x(r)},C=z;var D=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=B(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J,K="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:D()?K:Q,uint8:k};(J=new R.uint16(1))[0]=4660;var X=52===new R.uint8(J.buffer)[0],Z=d,$=!0===X?1:0,rr=new T(1),nr=new Z(rr.buffer);var tr=function(r){return rr[0]=r,nr[$]};var er=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},or=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var ur=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*er(u),e+=o*o*or(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},fr=-.16666666666666632;var ar=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(fr+o*t):r-(o*(.5*n-e*t)-n-e*fr)},ir=d,cr=!0===X?0:1,vr=new T(1),yr=new ir(vr.buffer);var lr,pr,Ar=function(r){return vr[0]=r,yr[cr]};!0===X?(lr=1,pr=0):(lr=0,pr=1);var wr=d,br={HIGH:lr,LOW:pr},Ur=new T(1),hr=new wr(Ur.buffer),sr=br.HIGH,mr=br.LOW;var Nr=function(r,n){return hr[sr]=r,hr[mr]=n,Ur[0]},dr=Nr,Ir=Math.floor,Fr=Number.POSITIVE_INFINITY,Sr=Number.NEGATIVE_INFINITY;var Hr=function(r){return r!=r},Or=Fr,gr=Sr;var Er,jr,Tr=function(r){return r===Or||r===gr};!0===X?(Er=1,jr=0):(Er=0,jr=1);var Gr=d,Lr={HIGH:Er,LOW:jr},Wr=new T(1),Mr=new Gr(Wr.buffer),Pr=Lr.HIGH,Vr=Lr.LOW;var Yr=function(r,n){return Wr[0]=n,r[0]=Mr[Pr],r[1]=Mr[Vr],r};var _r=function(r,n){return 1===arguments.length?Yr([0,0],r):Yr(r,n)},kr=_r,xr=tr,qr=dr,zr=[0,0];var Br=Tr,Cr=Hr,Dr=function(r){return Math.abs(r)};var Jr=function(r,n){return Cr(n)||Br(n)?(r[0]=n,r[1]=0,r):0!==n&&Dr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Kr=tr;var Qr=function(r){var n=Kr(r);return(n=(2146435072&n)>>>20)-1023|0},Rr=Fr,Xr=Sr,Zr=Hr,$r=Tr,rn=function(r,n){var t,e;return kr(zr,r),t=zr[0],t&=2147483647,e=xr(n),qr(t|=e&=2147483648,zr[1])},nn=function(r,n){return 1===arguments.length?Jr([0,0],r):Jr(r,n)},tn=Qr,en=_r,on=dr,un=[0,0],fn=[0,0];var an=function(r,n){var t,e;return 0===n||0===r||Zr(r)||$r(r)?r:(nn(un,r),n+=un[1],(n+=tn(r=un[0]))<-1074?rn(0,r):n>1023?r<0?Xr:Rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,en(fn,r),t=fn[0],t&=2148532223,e*on(t|=n+1023<<20,fn[1])))};var cn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var vn=Ir,yn=an,ln=function(r){return cn(0,r)},pn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],An=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wn=5.960464477539063e-8,bn=ln(20),Un=ln(20),hn=ln(20),sn=ln(20);function mn(r,n,t,e,o,u,f,a,i){var c,v,y,l,p,A,w,b,U;for(l=u,U=e[t],b=t,p=0;b>0;p++)v=wn*U|0,sn[p]=U-16777216*v|0,U=e[b-1]+v,b-=1;if(U=yn(U,o),U-=8*vn(.125*U),U-=w=0|U,y=0,o>0?(w+=p=sn[t-1]>>24-o,sn[t-1]-=p<<24-o,y=sn[t-1]>>23-o):0===o?y=sn[t-1]>>23:U>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<t;p++)b=sn[p],0===c?0!==b&&(c=1,sn[p]=16777216-b):sn[p]=16777215-b;if(o>0)switch(o){case 1:sn[t-1]&=8388607;break;case 2:sn[t-1]&=4194303}2===y&&(U=1-U,0!==c&&(U-=yn(1,o)))}if(0===U){for(b=0,p=t-1;p>=u;p--)b|=sn[p];if(0===b){for(A=1;0===sn[u-A];A++);for(p=t+1;p<=t+A;p++){for(i[a+p]=pn[f+p],v=0,b=0;b<=a;b++)v+=r[b]*i[a+(p-b)];e[p]=v}return mn(r,n,t+=A,e,o,u,f,a,i)}}if(0===U)for(t-=1,o-=24;0===sn[t];)t-=1,o-=24;else(U=yn(U,-o))>=16777216?(v=wn*U|0,sn[t]=U-16777216*v|0,o+=24,sn[t+=1]=v):sn[t]=0|U;for(v=yn(1,o),p=t;p>=0;p--)e[p]=v*sn[p],v*=wn;for(p=t;p>=0;p--){for(v=0,A=0;A<=l&&A<=t-p;A++)v+=An[A]*e[p+A];hn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=hn[p];for(n[0]=0===y?v:-v,v=hn[0]-v,p=1;p<=t;p++)v+=hn[p];return n[1]=0===y?v:-v,7&w}var Nn=function(r,n,t,e){var o,u,f,a,i,c,v;for(4,(u=(t-3)/24|0)<0&&(u=0),a=t-24*(u+1),c=u-(f=e-1),v=f+4,i=0;i<=v;i++)bn[i]=c<0?0:pn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=f;c++)o+=r[c]*bn[f+(i-c)];Un[i]=o}return 4,mn(r,n,4,Un,a,4,u,f,bn)},dn=Math.round,In=tr;var Fn=tr,Sn=Ar,Hn=dr,On=Nn,gn=function(r,n,t){var e,o,u,f,a;return u=r-1.5707963267341256*(e=dn(.6366197723675814*r)),f=6077100506506192e-26*e,a=n>>20|0,t[0]=u-f,a-(In(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,a-(In(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e},En=1.5707963267341256,jn=6077100506506192e-26,Tn=2*jn,Gn=4*jn,Ln=[0,0,0],Wn=[0,0];var Mn=function(r,n){var t,e,o,u,f,a,i;if((o=2147483647&Fn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?gn(r,o,n):o<=1073928572?r>0?(i=r-En,n[0]=i-jn,n[1]=i-n[0]-jn,1):(i=r+En,n[0]=i+jn,n[1]=i-n[0]+jn,-1):r>0?(i=r-2*En,n[0]=i-Tn,n[1]=i-n[0]-Tn,2):(i=r+2*En,n[0]=i+Tn,n[1]=i-n[0]+Tn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?gn(r,o,n):r>0?(i=r-3*En,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*En,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?gn(r,o,n):r>0?(i=r-4*En,n[0]=i-Gn,n[1]=i-n[0]-Gn,4):(i=r+4*En,n[0]=i+Gn,n[1]=i-n[0]+Gn,-4);if(o<1094263291)return gn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Sn(r),i=Hn(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Ln[f]=0|i,i=16777216*(i-Ln[f]);for(Ln[2]=i,u=3;0===Ln[u-1];)u-=1;return a=On(Ln,Wn,e,u),r<0?(n[0]=-Wn[0],n[1]=-Wn[1],-a):(n[0]=Wn[0],n[1]=Wn[1],a)},Pn=tr,Vn=ur,Yn=ar,_n=Mn,kn=[0,0];var xn=function(r){var n;if(n=Pn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Vn(r,0);if(n>=2146435072)return NaN;switch(3&_n(r,kn)){case 0:return Vn(kn[0],kn[1]);case 1:return-Yn(kn[0],kn[1]);case 2:return-Vn(kn[0],kn[1]);default:return Yn(kn[0],kn[1])}};var qn=function(r){return(1-xn(r))/2};export{qn as default};
//# sourceMappingURL=mod.js.map
