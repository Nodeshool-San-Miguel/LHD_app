(this["webpackJsonpreact-js"]=this["webpackJsonpreact-js"]||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/Mlh.c6849a42.svg"},114:function(e){e.exports=JSON.parse('{"es":{"header":{"register_team":"Registrar Equipo","teams":"Equipos","logout":"Cerrar Sesi\xf3n"},"register_team":{"team_name":"Nombre de equipo","set_category":"Selecciona categor\xeda para el equipo","add_hacker":"Agregar hacker","register_team":"Registrar equipo","cancel_registration":"Cancelar registro","scan_prompt":"Escanea el c\xf3digo del hacker"}},"en":{"header":{"register_team":"Register Team","teams":"Teams","logout":"Logout"},"register_team":{"team_name":"Team\'s Name","set_category":"Set hacker\'s team category","add_hacker":"Add hacker","register_team":"Register Team","cancel_registration":"Cancel registration","scan_prompt":"Scan the hacker\'s code"}}}')},119:function(e,t,a){e.exports=a(219)},219:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),o=a.n(c),i=a(22),s=(a(124),a(84)),l=(a(106),a(32)),m=a(107),u=a.n(m),d=(a(128),a(113)),f=(a(51),a(19)),p=(a(65),a(4)),g=(a(132),a(115)),h=a(82),v=a.n(h),E=a(63),y=a(108),k=(a(105),a(31)),b=(a(86),a(62)),j=a(58),_=a.n(j),w=function(e){var t=e.hackers,a=void 0===t?[]:t,r=e.setHackers,c=void 0===r?console.info:r;return n.a.createElement(k.a,{itemLayout:"horizontal",dataSource:a,renderItem:function(e,t){var r=e.name,o=void 0===r?"":r,i=e.email,s=void 0===i?"":i;return n.a.createElement(k.a.Item,{actions:[n.a.createElement(p.a,{type:"delete",onClick:function(){return function(e){var t=Object(E.a)(a);t.splice(e,1),c(t)}(t)}})]},n.a.createElement(k.a.Item.Meta,{avatar:n.a.createElement(b.a,{src:_.a}),title:o,description:s}))}})},C=(a(209),a(116)),x=function(e){var t=e.category,a=void 0===t?{}:t,c=e.setCategory,o=void 0===c?console.info:c,s=e.text,m=void 0===s?"":s,u=Object(r.useState)(!1),d=Object(i.a)(u,2),g=d[0],h=d[1],v=Object(r.useState)([]),E=Object(i.a)(v,2),y=E[0],k=E[1];return Object(r.useEffect)((function(){fetch("https://lhd-api.chrisft25.now.sh/api/teams_categories/").then((function(e){return e.json()})).then((function(e){return k(e)}))}),[]),n.a.createElement(C.a,{placement:"bottomCenter",overlay:n.a.createElement(l.a,null,y.map((function(e){var t=e.idCategory,a=e.description;return n.a.createElement(l.a.Item,{key:t,onClick:function(){h(!1),o({idCategory:t,description:a})}},a)}))),visible:g,onVisibleChange:function(e){return h(e)},className:"w-full mt-2"},n.a.createElement(f.a,{className:"flex items-center justify-center",size:"large",onClick:function(){return h(!0)}},a.description?a.description:m,g?n.a.createElement(p.a,{type:"arrow-down"}):n.a.createElement(p.a,{type:"arrow-right"})))},O=a(24),S=a.n(O),N=function(e){var t=e.lang,a=void 0===t?"":t,c=Object(r.useState)({}),o=Object(i.a)(c,2),s=o[0],l=o[1],m=Object(r.useState)([]),u=Object(i.a)(m,2),h=u[0],k=u[1],b=Object(r.useState)(),j=Object(i.a)(b,2),_=j[0],C=j[1],O="https://lhd-api.chrisft25.now.sh/api/",N=function(){l({}),k([]),C()};return n.a.createElement("div",{className:"flex flex-col"},n.a.createElement(g.a,{placeholder:a.team_name,size:"large",className:"w-full mt-2",onChange:function(e){C(e.target.value)},value:_}),n.a.createElement(x,{category:s,setCategory:l,text:a.set_category}),n.a.createElement(w,{hackers:h,setHackers:k}),h.length<5?n.a.createElement(f.a,{onClick:function(){window.cordova.plugins.barcodeScanner.scan(function(){var e=Object(y.a)(v.a.mark((function e(t){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"hackers/"+t.text).then((function(e){return e.json()}));case 2:if(!(a=e.sent)){e.next=19;break}if(!1!==a.found){e.next=7;break}return S()("\xa1Hacker no encontrado!","","warning"),e.abrupt("return",!1);case 7:if(!a.checkin){e.next=10;break}return S()("\xa1Hacker ya registrado!","","warning"),e.abrupt("return",!1);case 10:if(!(h.map((function(e){return e.id})).indexOf(a.id)>-1)){e.next=13;break}return S()("\xa1Hacker ya se encuentra en el equipo!","","warning"),e.abrupt("return",!1);case 13:(r=Object(E.a)(h)).push(a),k(r),S()("\xa1Hacker encontrado!",a.name,"success"),e.next=20;break;case 19:S()("\xa1Ha ocurrido un error!","Intentalo nuevamente","error");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){S()("\xa1Ha ocurrido un error!","Intentalo nuevamente","error")}),{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,prompt:a.scan_prompt,resultDisplayDuration:500,orientation:"vertical",formats:"QR_CODE"})},className:"flex items-center justify-center"},n.a.createElement(p.a,{type:"plus"})," ",a.add_hacker):null,n.a.createElement(d.a,null),h.length<3?n.a.createElement(f.a,{type:"primary",size:"large",className:"mt-2 w-full",disabled:!0},a.register_team):n.a.createElement(f.a,{type:"primary",size:"large",className:"mt-2 w-full",onClick:function(){var e={teamData:{idCategory:s.idCategory,idTeamType:1,nameTeam:_},hackers:h.map((function(e){return e.id})),createdBy:1},t={headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(e)};fetch(O+"teams/",t).then((function(e){switch(e.status){case 200:S()("\xa1Equipo creado correctamente!","","success"),N();break;case 500:S()("\xa1No se pudo crear el equipo!","Intentalo nuevamente","warning");break;default:S()("\xa1Ha ocurrido un error!","Intentalo nuevamente","error")}})).catch((function(e){return S()("\xa1Error al conectar con servidor!","Intentalo nuevamente","error")}))}},a.register_team),n.a.createElement(f.a,{type:"dashed",className:"mt-2 w-full",onClick:N},a.cancel_registration))},I=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){fetch("https://lhd-api.chrisft25.now.sh/api/teams/").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);return n.a.createElement("div",{className:"w-full"},n.a.createElement(k.a,{itemLayout:"horizontal",dataSource:a,renderItem:function(e){var t=e.id,a=void 0===t?"":t,r=e.category,c=void 0===r?"":r,o=e.nameTeam,i=void 0===o?"":o,s=e.members,l=void 0===s?"":s;return n.a.createElement(k.a.Item,{key:a,onClick:function(){return function(e){alert("me diste click "+e)}(a)}},n.a.createElement(k.a.Item.Meta,{avatar:n.a.createElement(b.a,{src:_.a}),title:"".concat(i," (").concat(l,")"),description:"Category: ".concat(c)}))}}))},T=function(e){var t=e.pushScreen,a=void 0===t?console.info:t,r=e.lang,c=void 0===r?"":r;return n.a.createElement("div",{className:"flex flex-col -m-4 pb-6"},n.a.createElement("div",{className:"flex items-center justify-center border-b p-4"},n.a.createElement("img",{src:u.a,alt:"ml-logo",className:"w-48"})),n.a.createElement(l.a,{defaultSelectedKeys:["menu-1"],theme:"light",mode:"horizontal"},n.a.createElement(l.a.Item,{key:"menu-1",onClick:function(){a(n.a.createElement(N,{lang:c.register_team}))}},c.header.register_team),n.a.createElement(l.a.Item,{key:"menu-2",onClick:function(){a(n.a.createElement(I,null))}},c.header.teams),n.a.createElement(l.a.Item,{key:"menu-3",onClick:function(){a(n.a.createElement(N,{lang:c.register_team}))}},c.header.logout)))},q=a(114),H=s.a.Content,z=function(){var e=q.en,t=Object(r.useState)(n.a.createElement(N,{lang:e.register_team})),a=Object(i.a)(t,2),c=a[0],o=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:"p-4 bg-white flex flex-col justify-center md:items-center"},n.a.createElement("div",{className:"md:max-w-2xl"},n.a.createElement(T,{pushScreen:o,lang:e}),n.a.createElement(H,null,c))))};a(217),a(218);document.addEventListener("deviceready",(function(){o.a.render(n.a.createElement(z,{cordovaWork:!0}),document.querySelector("#root"))}),!1)},58:function(e,t,a){e.exports=a.p+"static/media/Developer_photo.5fa9ecfd.png"}},[[119,1,2]]]);
//# sourceMappingURL=main.c10a4b68.chunk.js.map