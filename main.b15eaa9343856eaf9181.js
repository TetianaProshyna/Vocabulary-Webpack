(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(n,t,e){},"4xUq":function(n,t,e){var r=e("mp5j");n.exports=(r.default||r).template({1:function(n,t,e,r,a){var o,l=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,i=n.escapeExpression,c=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'<div class="carousel-item">\r\n  <div class="first">\r\n    <span class="word transform cardTarget">'+i("function"==typeof(o=null!=(o=c(e,"word")||(null!=t?c(t,"word"):t))?o:s)?o.call(l,{name:"word",hash:{},data:a,loc:{start:{line:4,column:44},end:{line:4,column:52}}}):o)+'</span>\r\n    <span class="translation cardTarget hidden">'+i("function"==typeof(o=null!=(o=c(e,"translation")||(null!=t?c(t,"translation"):t))?o:s)?o.call(l,{name:"translation",hash:{},data:a,loc:{start:{line:5,column:48},end:{line:5,column:63}}}):o)+"</span>\r\n  </div>\r\n</div>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,t,e,r,a){var o;return null!=(o=(n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]})(e,"each").call(null!=t?t:n.nullContext||{},t,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:8,column:9}}}))?o:""},useData:!0})},L1EO:function(n,t,e){},NGEB:function(n){n.exports=JSON.parse('[{"word":"Combine Two Arrays","translation":"Объединить два массива"},{"word":"Entry","translation":"Вхождение"},{"word":"Multi-dimensional array","translation":"Многомерный массив"},{"word":"Nested array","translation":"Вложенный массив"},{"word":"Access the data inside arrays","translation":"Доступ к данным внутри массивов"},{"word":"Set it to equal","translation":"Установите его равным"},{"word":"Modify the data","translation":"Изменить данные"},{"word":"Takes parameters","translation":"Принимает параметры"},{"word":"console.log will display","translation":"Консоль отобразит"},{"word":"Assigning","translation":"Присвоение"}]')},QfWi:function(n,t,e){"use strict";e.r(t);e("1DEj"),e("L1EO");var r=e("4xUq"),a=e.n(r),o=e("NGEB"),l=a()(o);document.querySelector(".carousel-inner").insertAdjacentHTML("afterbegin",l);e("3dw1");var s=document.querySelectorAll(".first"),i=document.querySelector(".carousel-control-next"),c=document.querySelector(".carousel-control-prev");function u(n){var t=document.querySelector(".active.carousel-item");if(n.target.classList.contains("cardTarget")&&t){var e=document.querySelector(".active .word"),r=document.querySelector(".active .translation");e.classList.toggle("transform"),r.classList.toggle("transform"),setTimeout((function(){e.classList.toggle("hidden"),r.classList.toggle("hidden")}),500)}}function d(){if(document.querySelector(".active.carousel-item")){var n=document.querySelector(".active .word"),t=document.querySelector(".active .translation");n.classList.remove("hidden"),t.classList.add("hidden")}}s.forEach((function(){return addEventListener("click",u)})),i.addEventListener("click",d),c.addEventListener("click",d);e("60sD")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b15eaa9343856eaf9181.js.map