(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{103:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/misc/[id]",function(){return n(1829)}])},5105:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(5893),i=(n(7294),n(4497)),s=n(8420),c=n(9008),a="paragraph",l="text",d="image",o="toggle",u="bulleted_list_item",m="column_list",x="column",h="to_do",v="quote",p="divider",f="numbered_list_item",j="mention",y="date",N="user",g=function(e){var t;if(!(null===e||void 0===e||null===(t=e.results)||void 0===t?void 0:t.length))return null;var n=[],c=function(e,t){var _=void 0===t?0:t,b=e.type,k=e[b];switch(isNaN(parseInt(n[_]))&&(n[_]=0),b!==f&&(n[_]=0),b){case a:var w;if(null===(w=k.text)||void 0===w?void 0:w.length)return(0,r.jsx)("p",{className:"my-1",children:k.text.map((function(e){return c(e,_+1)}))});break;case l:var Z=e.href,M=void 0===Z?null:Z,E=e.annotations,H=E.color,C=E.code,A=void 0!==C&&C,F=E.underline,O=void 0!==F&&F,P=E.italic,S=void 0!==P&&P,T=E.strikethrough,X=void 0!==T&&T,q=E.bold,G=void 0!==q&&q;return(0,r.jsx)("span",{className:"".concat(G?"font-semibold":"","\n          ").concat(X?"line-through":"","\n          ").concat(S?"italic":"","\n          ").concat(O||M?"underline":"","\n          ").concat(H?"text-".concat(H,"-500"):"","\n          ").concat(M?"cursor-pointer opacity-70":"","\n          "),onClick:function(){M&&window.open(M)},children:A?(0,r.jsx)("code",{className:"rounded-md p-[2px] text-lime-400 bg-gray-700",children:k.content||""}):k.content||""});case d:var I,L;if(k.type)return(0,r.jsxs)("div",{className:"text-sm",children:[(0,r.jsx)("img",{className:"mx-auto my-1",src:null===(I=k[k.type])||void 0===I?void 0:I.url,alt:""}),(null===(L=k.caption)||void 0===L?void 0:L.length)?k.caption.map((function(e){return c(e,_+1)})):null]});break;case u:return(0,r.jsx)("ul",{className:"list-disc list-inside",children:(0,r.jsx)("li",{children:k.text.map((function(e){return c(e,_+1)}))})});case f:return(0,r.jsx)("ol",{start:++n[_],className:"list-decimal list-inside",children:(0,r.jsx)("li",{children:k.text.map((function(e){return c(e,_+1)}))})});case o:return(0,r.jsxs)("div",{className:"flex my-1 gap-x-1",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"hover:bg-text-primary hover:rounded-md cursor-pointer relative top-1",children:"\ud83d\udc49"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"my-1",children:k.text.map((function(e){return c(e,_+1)}))}),g(k.children)]})]});case m:return(0,r.jsx)("div",{className:"flex justify-between gap-x-6",children:g(k.children)});case x:return(0,r.jsx)("div",{className:"flex-1",children:g(k.children)});case h:return(0,r.jsxs)("div",{className:"flex gap-x-1",children:[k.checked?"\u2714":"\u2b55",(0,r.jsx)("div",{className:"".concat(k.checked?"line-through":""),children:k.text.map((function(e){return c(e,_+1)}))})]});case v:return(0,r.jsx)("div",{className:"border-black border-l-4 dark:border-primary",children:(0,r.jsx)("div",{className:"ml-4",children:k.text.map((function(e){return c(e,_+1)}))})});case p:return(0,r.jsx)("hr",{className:"my-6 dark:opacity-50"});case j:return(0,r.jsx)("span",{className:"bg-gray-200 hover:cursor-pointer",children:c(k,_+1)});case y:var z="yyyy-MM-dd",B="HH:mm dd/MM/yyyy",D=function(e){return(void 0===e?"":e).length===z.length},J=(0,i.Z)((0,s.Z)(k.start),D(k.start)?z:B);return k.end&&(J+=" -> ".concat((0,i.Z)((0,s.Z)(k.start),D(k.start)?z:B))),J;case N:return"@".concat(k.name)}return null};return(0,r.jsx)(r.Fragment,{children:e.results.map((function(e){return c(e)}))})},_=function(e){var t=e.post;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{children:(0,r.jsx)("title",{children:null===t||void 0===t?void 0:t.title})}),(0,r.jsxs)("div",{className:"container max-w-3xl",children:[(0,r.jsx)("div",{className:"text-3xl font-medium pb-2 text-primary text-center",children:t.title||"untitled"}),(0,r.jsx)("div",{className:"text-lg",children:g(t.content)}),(0,r.jsxs)("div",{className:"text-right mt-5",children:["Created at: ",(0,i.Z)((0,s.Z)(t.createdAt),"HH:mm dd/MM/yyyy")," | Last edited:"," ",(0,i.Z)((0,s.Z)(t.lastEditedAt),"HH:mm dd/MM/yyyy")]})]})]})}},1829:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(5893),i=n(5105),s=!0;t.default=function(e){var t=e.post;return(0,r.jsx)(i.Z,{post:t})}}},function(e){e.O(0,[221,774,888,179],(function(){return t=103,e(e.s=t);var t}));var t=e.O();_N_E=t}]);