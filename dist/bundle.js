!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=/[A-Z]/g;t.exports=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(e instanceof Object))return e;var u=o.kebab,f=function(t){return t.replace(r,function(t){return"_".concat(t.toLowerCase())})},c=function(t){return t.replace(r,function(t){return"-".concat(t.toLowerCase())})};return new Proxy(e,{get:function(e,r){if("symbol"===n(r))return e[r];if(!0===u){var i=c(r);return e[i]instanceof Object?t(e[i],o):e[i]}var a=f(r);return e[a]instanceof Object?t(e[a]):e[a]},set:function(t,e,n){return t[!0===u?c(e):f(e)]=n,!0}})}}]);