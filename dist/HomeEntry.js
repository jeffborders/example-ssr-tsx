!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="Example site",o={title:r+" | About",entry:"AboutEntry"},u={title:r,entry:"HomeEntry"},i={title:r+" | 404",entry:"NotFoundEntry"};e.default={About:o,Home:u,NotFound:i}},,,function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0)),u=n(1),i=r(n(6)),c=r(n(2));u.hydrate(o.default.createElement(i.default,{title:c.default.Home.title}),document.getElementById("main"))},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),c=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&u(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});var l=c(n(0)),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={clicks:0},e.onClick=function(){e.setState((function(t){return{clicks:t.clicks+1}}))},e}return o(e,t),e.prototype.render=function(){var t=this.state,e=this.props,n=this.onClick,r=t.clicks,o=e.title;return l.default.createElement("h1",{onClick:n},o," - You've clicked this header ",r," times. Wow.")},e}(l.Component);e.default=f}]);