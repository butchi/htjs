!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("./module/ns"),ub=c(bb),tb=b("./module/Router"),cb=c(tb),hb=function(){function b(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),console.log("Hello, world!"),this.initialize(),console.log("Thanks, world!")}return i(b,[{key:"initialize",value:function(){var b=this;$(function(){b.router=new cb["default"]})}}]),b}();ub["default"].main=new hb},{"./module/Router":3,"./module/ns":4}],2:[function(b,u,t){(function(b){"use strict";function u(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},h=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),i=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],bb=function(){function t(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,t),this.globalize(b)}return h(t,[{key:"globalize",value:function(u){var t=this,c=u.prefixStr||"";i.forEach(function(u){b[""+c+u]=function(){for(var b=arguments.length,c=Array(b),h=0;b>h;h++)c[h]=arguments[h];return t.element({tagName:u,argArr:c})}})}},{key:"element",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=b.argArr,t=b.tagName||"div";if(0===u.length)return new ub({tagName:t,content:null});if(1===u.length){var h=function(){var b=u[0];return"null"==b?{v:new ub({tagName:t}).create({content:null})}:"string"==typeof b?{v:new ub({tagName:t}).create({content:u})}:b instanceof Array?{v:new ub({tagName:t}).create({content:b})}:b instanceof ub?{v:new ub({tagName:t}).create({content:u})}:"object"===("undefined"==typeof b?"undefined":c(b))?{v:function(){for(var u=arguments.length,c=Array(u),h=0;u>h;h++)c[h]=arguments[h];return new ub({tagName:t,attribute:b}).create({content:c})}}:void 0}();if("object"===("undefined"==typeof h?"undefined":c(h)))return h.v}else if(u.length>1)return new ub({tagName:t}).create({content:u})}}]),t}();t["default"]=bb;var ub=function(){function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,b),this.initialize(t)}return h(b,[{key:"initialize",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.tagName=b.tagName||"div",this.elm=document.createElement(this.tagName),this.attribute=b.attribute||{},this.setAttribute()}},{key:"create",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=b.content||[];return this.innerHtjs({content:u}),this}},{key:"setAttribute",value:function(){var b=this,u=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this.attribute||{});return Object.keys(u).forEach(function(t){"style"===t?!function(){var c=[],h=u[t];Object.keys(h).forEach(function(b){var u=h[b];c.push(b+": "+u+";")});var i=c.join(" ");b.elm.setAttribute(t,i)}():b.elm.setAttribute(t,u[t])}),this.create}},{key:"innerHtjs",value:function(){var u=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=t.content||[];c.forEach(function(t){null==t||("string"==typeof t?u.elm.innerHTML+=t:t instanceof b&&u.elm.appendChild(t.elm))})}}]),b}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("./ns"),ub=(c(bb),b("../page/Common")),tb=c(ub),cb=b("../page/Index"),hb=c(cb),ib=function(){function b(){h(this,b),this.initialize()}return i(b,[{key:"initialize",value:function(){var b=$("body");this.pageCommon=new tb["default"],b.hasClass("page-index")&&(this.pageIndex=new hb["default"])}}]),b}();t["default"]=ib},{"../page/Common":5,"../page/Index":6,"./ns":4}],4:[function(b,u,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.licker=window.licker||{};var c=window.licker;t["default"]=c},{}],5:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("../module/ns"),ub=(c(bb),function(){function b(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),this.initialize()}return i(b,[{key:"initialize",value:function(){}}]),b}());t["default"]=ub},{"../module/ns":4}],6:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("../module/ns"),ub=(c(bb),b("../module/Htjs")),tb=c(ub),cb=function(){function b(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),this.initialize()}return i(b,[{key:"initialize",value:function(){this.htjs=new tb["default"]({prefixStr:""}),document.querySelector(".wrapper").append(div(div({"class":"test"})(h1("HTJS(仮)"),p({"class":"content"})("これは",a({href:"http://example.com",target:"_blank"})("アンカー"),"の",br(),span("テ","ス","ト"),"です。"),span({style:{color:"#f00","font-weight":"bold","font-size":"20px"}})("スタイルも効いた！"),span("うまくいってよかった！"))).elm)}}]),b}();t["default"]=cb},{"../module/Htjs":2,"../module/ns":4}]},{},[1]);