// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=t,o=function(n){return e.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,r){return null!=n&&f.call(n,r)},i="function"==typeof Symbol?Symbol.toStringTag:"",c=u,a=i,y=t,l=o,p=function(n){var r,t,e;if(null==n)return y.call(n);t=n[a],r=c(n,a);try{n[a]=void 0}catch(r){return y.call(n)}return e=y.call(n),r?n[a]=t:delete n[a],e},A=r&&"symbol"==typeof Symbol.toStringTag?p:l,v=A,s="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,w=function(n){return s&&n instanceof Uint32Array||"[object Uint32Array]"===v(n)},d=b,h=function(){var n,r;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=w(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},U="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){throw new Error("not implemented")},N=h()?U:m,I=A,g="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,S=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===I(n)},H=F,O=function(){var n,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),n=S(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=A,L="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,M=function(n){return L&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},x=W,P=function(){var n,r;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=M(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},V="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,k=A,q="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B=function(n){return q&&n instanceof Uint16Array||"[object Uint16Array]"===k(n)},C=z,D=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=B(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},J="function"==typeof Uint16Array?Uint16Array:void 0,K=function(){throw new Error("not implemented")},Q={uint16:D()?J:K,uint8:_};(n=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(n.buffer)[0],$=N,nn=!0===Z?1:0,rn=new E(1),tn=new $(rn.buffer),en=function(n){return rn[0]=n,tn[nn]},on=function(n){return 0===n?.0416666666666666:.0416666666666666+n*(2480158728947673e-20*n-.001388888888887411)},fn=function(n){return 0===n?-2.7557314351390663e-7:n*(2.087572321298175e-9+-11359647557788195e-27*n)-2.7557314351390663e-7},un=function(n,r){var t,e,o,f;return o=(f=n*n)*f,e=f*on(f),e+=o*o*fn(f),(o=1-(t=.5*f))+(1-o-t+(f*e-n*r))},cn=-.16666666666666632,an=function(n,r){var t,e,o;return t=.00833333333332249+(o=n*n)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*n,0===r?n+e*(cn+o*t):n-(o*(.5*r-e*t)-r-e*cn)},yn=N,ln=!0===Z?0:1,pn=new E(1),An=new yn(pn.buffer),vn=function(n){return pn[0]=n,An[ln]};!0===Z?(R=1,X=0):(R=0,X=1);var sn,bn,wn=N,dn={HIGH:R,LOW:X},hn=new E(1),Un=new wn(hn.buffer),mn=dn.HIGH,Nn=dn.LOW,In=function(n,r){return Un[mn]=n,Un[Nn]=r,hn[0]},gn=In,Fn=Math.floor,Sn=Number.POSITIVE_INFINITY,Hn=Number.NEGATIVE_INFINITY,On=function(n){return n!=n},Tn=Sn,jn=Hn,En=function(n){return n===Tn||n===jn};!0===Z?(sn=1,bn=0):(sn=0,bn=1);var Gn=N,Ln={HIGH:sn,LOW:bn},Wn=new E(1),Mn=new Gn(Wn.buffer),xn=Ln.HIGH,Pn=Ln.LOW,Vn=function(n,r){return Wn[0]=r,n[0]=Mn[xn],n[1]=Mn[Pn],n},Yn=function(n,r){return 1===arguments.length?Vn([0,0],n):Vn(n,r)},_n=Yn,kn=en,qn=gn,zn=[0,0],Bn=En,Cn=On,Dn=function(n){return Math.abs(n)},Jn=function(n,r){return Cn(r)||Bn(r)?(n[0]=r,n[1]=0,n):0!==r&&Dn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},Kn=function(n,r){return 1===arguments.length?Jn([0,0],n):Jn(n,r)},Qn=en,Rn=function(n){var r=Qn(n);return(r=(2146435072&r)>>>20)-1023|0},Xn=Sn,Zn=Hn,$n=On,nr=En,rr=function(n,r){var t,e;return _n(zn,n),t=zn[0],t&=2147483647,e=kn(r),qn(t|=e&=2147483648,zn[1])},tr=Kn,er=Rn,or=Yn,fr=gn,ur=[0,0],ir=[0,0],cr=function(n,r){var t,e;return 0===r||0===n||$n(n)||nr(n)?n:(tr(ur,n),r+=ur[1],(r+=er(n=ur[0]))<-1074?rr(0,n):r>1023?n<0?Zn:Xn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,or(ir,n),t=ir[0],t&=2148532223,e*fr(t|=r+1023<<20,ir[1])))},ar=function(n,r){var t,e;for(t=[],e=0;e<r;e++)t.push(n);return t},yr=Fn,lr=cr,pr=function(n){return ar(0,n)},Ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sr=16777216,br=5.960464477539063e-8,wr=pr(20),dr=pr(20),hr=pr(20),Ur=pr(20);function mr(n,r,t,e,o,f,u,i,c){var a,y,l,p,A,v,s,b,w;for(p=f,w=e[t],b=t,A=0;b>0;A++)y=br*w|0,Ur[A]=w-sr*y|0,w=e[b-1]+y,b-=1;if(w=lr(w,o),w-=8*yr(.125*w),w-=s=0|w,l=0,o>0?(s+=A=Ur[t-1]>>24-o,Ur[t-1]-=A<<24-o,l=Ur[t-1]>>23-o):0===o?l=Ur[t-1]>>23:w>=.5&&(l=2),l>0){for(s+=1,a=0,A=0;A<t;A++)b=Ur[A],0===a?0!==b&&(a=1,Ur[A]=16777216-b):Ur[A]=16777215-b;if(o>0)switch(o){case 1:Ur[t-1]&=8388607;break;case 2:Ur[t-1]&=4194303}2===l&&(w=1-w,0!==a&&(w-=lr(1,o)))}if(0===w){for(b=0,A=t-1;A>=f;A--)b|=Ur[A];if(0===b){for(v=1;0===Ur[f-v];v++);for(A=t+1;A<=t+v;A++){for(c[i+A]=Ar[u+A],y=0,b=0;b<=i;b++)y+=n[b]*c[i+(A-b)];e[A]=y}return mr(n,r,t+=v,e,o,f,u,i,c)}}if(0===w)for(t-=1,o-=24;0===Ur[t];)t-=1,o-=24;else(w=lr(w,-o))>=sr?(y=br*w|0,Ur[t]=w-sr*y|0,o+=24,Ur[t+=1]=y):Ur[t]=0|w;for(y=lr(1,o),A=t;A>=0;A--)e[A]=y*Ur[A],y*=br;for(A=t;A>=0;A--){for(y=0,v=0;v<=p&&v<=t-A;v++)y+=vr[v]*e[A+v];hr[t-A]=y}for(y=0,A=t;A>=0;A--)y+=hr[A];for(r[0]=0===l?y:-y,y=hr[0]-y,A=1;A<=t;A++)y+=hr[A];return r[1]=0===l?y:-y,7&s}var Nr=function(n,r,t,e){var o,f,u,i,c,a,y;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),a=f-(u=e-1),y=u+4,c=0;c<=y;c++)wr[c]=a<0?0:Ar[a],a+=1;for(c=0;c<=4;c++){for(o=0,a=0;a<=u;a++)o+=n[a]*wr[u+(c-a)];dr[c]=o}return mr(n,r,4,dr,i,4,f,u,wr)},Ir=Math.round,gr=en,Fr=en,Sr=vn,Hr=gn,Or=Nr,Tr=function(n,r,t){var e,o,f,u,i;return f=n-1.5707963267341256*(e=Ir(.6366197723675814*n)),u=6077100506506192e-26*e,i=r>>20|0,t[0]=f-u,i-(gr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(gr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e},jr=1.5707963267341256,Er=6077100506506192e-26,Gr=2*Er,Lr=3*Er,Wr=4*Er,Mr=[0,0,0],xr=[0,0],Pr=function(n,r){var t,e,o,f,u,i,c;if((o=2147483647&Fr(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Tr(n,o,r):o<=1073928572?n>0?(c=n-jr,r[0]=c-Er,r[1]=c-r[0]-Er,1):(c=n+jr,r[0]=c+Er,r[1]=c-r[0]+Er,-1):n>0?(c=n-2*jr,r[0]=c-Gr,r[1]=c-r[0]-Gr,2):(c=n+2*jr,r[0]=c+Gr,r[1]=c-r[0]+Gr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Tr(n,o,r):n>0?(c=n-3*jr,r[0]=c-Lr,r[1]=c-r[0]-Lr,3):(c=n+3*jr,r[0]=c+Lr,r[1]=c-r[0]+Lr,-3):1075388923===o?Tr(n,o,r):n>0?(c=n-4*jr,r[0]=c-Wr,r[1]=c-r[0]-Wr,4):(c=n+4*jr,r[0]=c+Wr,r[1]=c-r[0]+Wr,-4);if(o<1094263291)return Tr(n,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(t=Sr(n),c=Hr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Mr[u]=0|c,c=16777216*(c-Mr[u]);for(Mr[2]=c,f=3;0===Mr[f-1];)f-=1;return i=Or(Mr,xr,e,f),n<0?(r[0]=-xr[0],r[1]=-xr[1],-i):(r[0]=xr[0],r[1]=xr[1],i)},Vr=en,Yr=un,_r=an,kr=Pr,qr=[0,0],zr=function(n){var r;if(r=Vr(n),(r&=2147483647)<=1072243195)return r<1044381696?1:Yr(n,0);if(r>=2146435072)return NaN;switch(3&kr(n,qr)){case 0:return Yr(qr[0],qr[1]);case 1:return-_r(qr[0],qr[1]);case 2:return-Yr(qr[0],qr[1]);default:return _r(qr[0],qr[1])}};return function(n){return(1-zr(n))/2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).haversin=r();
//# sourceMappingURL=index.js.map
