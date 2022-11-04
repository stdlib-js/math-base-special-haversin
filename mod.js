// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var e,o="function"==typeof Symbol?Symbol.toStringTag:"";e=r&&"symbol"==typeof Symbol.toStringTag?function(r){var e,a,u,i,f;if(null==r)return t.call(r);a=r[o],f=o,e=null!=(i=r)&&n.call(i,f);try{r[o]=void 0}catch(n){return t.call(r)}return u=t.call(r),e?r[o]=a:delete r[o],u}:function(r){return t.call(r)};var a=e,u="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var f,c="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,t,n;if("function"!=typeof i)return!1;try{t=new i(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l=f,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,t,n;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),n=t,r=(y&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w=p,s="function"==typeof Uint8Array;var A="function"==typeof Uint8Array?Uint8Array:null;var _,d="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,t,n;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,256,257]),n=t,r=(s&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?d:function(){throw new Error("not implemented")};var m=_,h="function"==typeof Uint16Array;var U="function"==typeof Uint16Array?Uint16Array:null;var j,g="function"==typeof Uint16Array?Uint16Array:void 0;j=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,65536,65537]),n=t,r=(h&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var N,I={uint16:j,uint8:m};(N=new I.uint16(1))[0]=4660;var O=52===new I.uint8(N.buffer)[0],S=!0===O?1:0,E=new w(1),F=new l(E.buffer);function H(r){return E[0]=r,F[S]}function T(r,t){var n,e,o,a;return o=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(o=1-(n=.5*a))+(1-o-n+(a*e-r*t))}var G=-.16666666666666632;function P(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(G+o*n):r-(o*(.5*t-e*n)-t-e*G)}var L,V,W=!0===O?0:1,k=new w(1),M=new l(k.buffer);!0===O?(L=1,V=0):(L=0,V=1);var x={HIGH:L,LOW:V},Y=new w(1),C=new l(Y.buffer),q=x.HIGH,z=x.LOW;function B(r,t){return C[q]=r,C[z]=t,Y[0]}var D,J,K=Math.floor,Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function X(r){return r!=r}function Z(r){return r===Q||r===R}!0===O?(D=1,J=0):(D=0,J=1);var $={HIGH:D,LOW:J},rr=new w(1),tr=new l(rr.buffer),nr=$.HIGH,er=$.LOW;function or(r,t){return rr[0]=t,r[0]=tr[nr],r[1]=tr[er],r}function ar(r,t){return 1===arguments.length?or([0,0],r):or(r,t)}var ur=[0,0];var ir="function"==typeof Object.defineProperty?Object.defineProperty:null;var fr,cr=Object.defineProperty,lr=Object.prototype,yr=lr.toString,vr=lr.__defineGetter__,pr=lr.__defineSetter__,br=lr.__lookupGetter__,wr=lr.__lookupSetter__;fr=function(){try{return ir({},"x",{}),!0}catch(r){return!1}}()?cr:function(r,t,n){var e,o,a,u;if("object"!=typeof r||null===r||"[object Array]"===yr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===yr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(br.call(r,t)||wr.call(r,t)?(e=r.__proto__,r.__proto__=lr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,u="set"in n,o&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&vr&&vr.call(r,t,n.get),u&&pr&&pr.call(r,t,n.set),r};function sr(r,t,n,e){return X(r)||Z(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}fr((function(r){return sr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:sr});var Ar=[0,0],_r=[0,0];function dr(r,t){var n,e,o,a,u;return 0===t||0===r||X(r)||Z(r)?r:(sr(r,Ar,1,0),t+=Ar[1],t+=function(r){var t=H(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Ar[0]),t<-1074?(o=r,ar(ur,0),a=ur[0],a&=2147483647,u=H(o),B(a|=u&=2147483648,ur[1])):t>1023?r<0?R:Q:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ar(_r,r),n=_r[0],n&=2148532223,e*B(n|=t+1023<<20,_r[1])))}function mr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=5.960464477539063e-8,gr=mr(20),Nr=mr(20),Ir=mr(20),Or=mr(20);function Sr(r,t,n,e,o,a,u,i,f){var c,l,y,v,p,b,w,s,A;for(v=a,A=e[n],s=n,p=0;s>0;p++)l=jr*A|0,Or[p]=A-16777216*l|0,A=e[s-1]+l,s-=1;if(A=dr(A,o),A-=8*K(.125*A),A-=w=0|A,y=0,o>0?(w+=p=Or[n-1]>>24-o,Or[n-1]-=p<<24-o,y=Or[n-1]>>23-o):0===o?y=Or[n-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<n;p++)s=Or[p],0===c?0!==s&&(c=1,Or[p]=16777216-s):Or[p]=16777215-s;if(o>0)switch(o){case 1:Or[n-1]&=8388607;break;case 2:Or[n-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=dr(1,o)))}if(0===A){for(s=0,p=n-1;p>=a;p--)s|=Or[p];if(0===s){for(b=1;0===Or[a-b];b++);for(p=n+1;p<=n+b;p++){for(f[i+p]=hr[u+p],l=0,s=0;s<=i;s++)l+=r[s]*f[i+(p-s)];e[p]=l}return Sr(r,t,n+=b,e,o,a,u,i,f)}}if(0===A)for(n-=1,o-=24;0===Or[n];)n-=1,o-=24;else(A=dr(A,-o))>=16777216?(l=jr*A|0,Or[n]=A-16777216*l|0,o+=24,Or[n+=1]=l):Or[n]=0|A;for(l=dr(1,o),p=n;p>=0;p--)e[p]=l*Or[p],l*=jr;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=Ur[b]*e[p+b];Ir[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Ir[p];for(t[0]=0===y?l:-l,l=Ir[0]-l,p=1;p<=n;p++)l+=Ir[p];return t[1]=0===y?l:-l,7&w}function Er(r,t,n,e){var o,a,u,i,f,c,l;for(4,(a=(n-3)/24|0)<0&&(a=0),i=n-24*(a+1),c=a-(u=e-1),l=u+4,f=0;f<=l;f++)gr[f]=c<0?0:hr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*gr[u+(f-c)];Nr[f]=o}return 4,Sr(r,t,4,Nr,i,4,a,u,gr)}var Fr=Math.round;function Hr(r,t,n){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),u=6077100506506192e-26*e,i=t>>20|0,n[0]=a-u,i-(H(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),n[0]=a-u,i-(H(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),n[0]=a-u)),n[1]=a-n[0]-u,e}var Tr=1.5707963267341256,Gr=6077100506506192e-26,Pr=2*Gr,Lr=4*Gr,Vr=[0,0,0],Wr=[0,0];function kr(r,t){var n,e,o,a,u,i,f;if((o=2147483647&H(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Hr(r,o,t):o<=1073928572?r>0?(f=r-Tr,t[0]=f-Gr,t[1]=f-t[0]-Gr,1):(f=r+Tr,t[0]=f+Gr,t[1]=f-t[0]+Gr,-1):r>0?(f=r-2*Tr,t[0]=f-Pr,t[1]=f-t[0]-Pr,2):(f=r+2*Tr,t[0]=f+Pr,t[1]=f-t[0]+Pr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Hr(r,o,t):r>0?(f=r-3*Tr,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Tr,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Hr(r,o,t):r>0?(f=r-4*Tr,t[0]=f-Lr,t[1]=f-t[0]-Lr,4):(f=r+4*Tr,t[0]=f+Lr,t[1]=f-t[0]+Lr,-4);if(o<1094263291)return Hr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return k[0]=r,M[W]}(r),f=B(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Vr[u]=0|f,f=16777216*(f-Vr[u]);for(Vr[2]=f,a=3;0===Vr[a-1];)a-=1;return i=Er(Vr,Wr,e,a),r<0?(t[0]=-Wr[0],t[1]=-Wr[1],-i):(t[0]=Wr[0],t[1]=Wr[1],i)}var Mr=[0,0];function xr(r){return(1-function(r){var t;if(t=H(r),(t&=2147483647)<=1072243195)return t<1044381696?1:T(r,0);if(t>=2146435072)return NaN;switch(3&kr(r,Mr)){case 0:return T(Mr[0],Mr[1]);case 1:return-P(Mr[0],Mr[1]);case 2:return-T(Mr[0],Mr[1]);default:return P(Mr[0],Mr[1])}}(r))/2}export{xr as default};
//# sourceMappingURL=mod.js.map
