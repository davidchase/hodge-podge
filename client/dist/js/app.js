!function t(e,r,n){function a(s,o){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return a(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(t,e){var r=t("hbsfy/runtime");e.exports=r.template({1:function(t,e,r,n){var a,i="\n        ";return a=e.each.call(t,(a=t&&t.basket,null==a||a===!1?a:a.items),{name:"each",hash:{},fn:this.program(2,n),inverse:this.noop,data:n}),(a||0===a)&&(i+=a),i+"\n    "},2:function(t,e,r,n){var a,i,s="function",o=this.escapeExpression,u='\n            <a href="#" ><img src="'+o((i=e.imageUrl||t&&t.imageUrl,typeof i===s?i.call(t,{name:"imageUrl",hash:{},data:n}):i))+'" style="width:8%; height:auto;"></a>\n            <p>Description: '+o((i=e.description||t&&t.description,typeof i===s?i.call(t,{name:"description",hash:{},data:n}):i))+" <button data-quantity="+o((i=e.quantity||t&&t.quantity,typeof i===s?i.call(t,{name:"quantity",hash:{},data:n}):i))+" data-index="+o((a=null==n||n===!1?n:n.index,typeof a===s?a.apply(t):a))+' class="button tiny alert remove-item">Remove</button></p>\n            <p>Quantity: '+o((i=e.quantity||t&&t.quantity,typeof i===s?i.call(t,{name:"quantity",hash:{},data:n}):i))+" </p>\n            ";return a=e["if"].call(t,t&&t.giftWrappable,{name:"if",hash:{},fn:this.program(3,n),inverse:this.noop,data:n}),(a||0===a)&&(u+=a),u+"\n        "},3:function(){return'\n                <p class="gift-wrap hide">Gift wrap available</p>\n            '},5:function(){return"\n        <p>Basket Is Empty</p>\n    "},compiler:[5,">= 2.0.0"],main:function(t,e,r,n){var a,i="function",s=this.escapeExpression,o="<h2>"+s((a=t&&t.site,a=null==a||a===!1?a:a.name,typeof a===i?a.apply(t):a))+'</h2>\n<div class="basket-sector">\n    <h3>Basket</h3>\n    <div class="right">\n        <h3>Sidebar</h3>\n        <p>Basket total '+s((a=t&&t.basket,a=null==a||a===!1?a:a.pricing,a=null==a||a===!1?a:a.amount,typeof a===i?a.apply(t):a))+"</p>\n    </div>\n    ";return a=e["if"].call(t,(a=t&&t.basket,null==a||a===!1?a:a.items),{name:"if",hash:{},fn:this.program(1,n),inverse:this.program(5,n),data:n}),(a||0===a)&&(o+=a),o+'\n    <button class="button small re-render">Get Items Again</button>\n</div>'},useData:!0})},{"hbsfy/runtime":12}],2:[function(t){"use strict";var e=t("../../../../server/basket/services"),r=t("../../common/pubsub"),n=t("../../../../both/basket/views/index.hbs"),a=document.getElementById("container"),i=JSON.parse(a.getAttribute("data-site")),s=a.querySelector(".gift-wrap");i&&i.displayGiftWrap&&s.classList.remove("hide"),a.addEventListener("click",function(t){if(-1!==t.target.className.indexOf("re-render")){{t.target}e.getBasket().then(function(t){var e=n({basket:t.entity});a.innerHTML=e}).otherwise(function(t){console.error("response error: ",t)})}},!1),a.addEventListener("click",function(t){if(-1!==t.target.className.indexOf("remove-item")){var i=t.target,s=i.getAttribute("data-index"),o=i.getAttribute("data-quantity");e.removeItem(s).then(function(t){var e=n({basket:t.entity});a.innerHTML=e,r.publish("quantityUpdate",o)}).otherwise(function(t){console.error("response error: ",t)})}},!1)},{"../../../../both/basket/views/index.hbs":1,"../../../../server/basket/services":13,"../../common/pubsub":4}],3:[function(t){"use strict";var e=t("./pubsub"),r=document.querySelector(".basket-count");e.subscribe("quantityUpdate",function(t){var e=parseInt(r.textContent,10),n=parseInt(t,10);r.textContent=e-n})},{"./pubsub":4}],4:[function(t,e){"use strict";var r=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw new TypeError("Event is not a string.")},n=function(t){if("function"!=typeof t)throw new TypeError("Handler is not a function")},a={},i={publish:function(t){if(r(t),a[t])for(var e={e:t,args:[].slice.call(arguments,1)},n=0,i=a[t].length;i>n;n++)a[t][n].apply(e,e.args)},subscribe:function(t,e){r(t),n(e),(a[t]=a[t]||[]).push(e)},unsubscribe:function(){var t=[].slice.call(arguments),e=t[0],i=t[1];r(e),n(i),e in a!=!1&&a[e].splice(a[e].indexOf(i),1)}};e.exports=i},{}],5:[function(t,e,r){"use strict";var n=t("./handlebars/base"),a=t("./handlebars/safe-string")["default"],i=t("./handlebars/exception")["default"],s=t("./handlebars/utils"),o=t("./handlebars/runtime"),u=function(){var t=new n.HandlebarsEnvironment;return s.extend(t,n),t.SafeString=a,t.Exception=i,t.Utils=s,t.VM=o,t.template=function(e){return o.template(e,t)},t},l=u();l.create=u,r["default"]=l},{"./handlebars/base":6,"./handlebars/exception":7,"./handlebars/runtime":8,"./handlebars/safe-string":9,"./handlebars/utils":10}],6:[function(t,e,r){"use strict";function n(t,e){this.helpers=t||{},this.partials=e||{},a(this)}function a(t){t.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new o("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,r){var n=r.inverse||function(){},a=r.fn;if(h(e)&&(e=e.call(this)),e===!0)return a(this);if(e===!1||null==e)return n(this);if(p(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):n(this);if(r.data&&r.ids){var i=g(r.data);i.contextPath=s.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(e,r)}),t.registerHelper("each",function(t,e){e||(e=t,t=this);var r,n,a=e.fn,i=e.inverse,o=0,u="";if(e.data&&e.ids&&(n=s.appendContextPath(e.data.contextPath,e.ids[0])+"."),h(t)&&(t=t.call(this)),e.data&&(r=g(e.data)),t&&"object"==typeof t)if(p(t))for(var l=t.length;l>o;o++)r&&(r.index=o,r.first=0===o,r.last=o===t.length-1,n&&(r.contextPath=n+o)),u+=a(t[o],{data:r});else for(var c in t)t.hasOwnProperty(c)&&(r&&(r.key=c,r.index=o,r.first=0===o,n&&(r.contextPath=n+c)),u+=a(t[c],{data:r}),o++);return 0===o&&(u=i(this)),u}),t.registerHelper("if",function(t,e){return h(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||s.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,r){return t.helpers["if"].call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})}),t.registerHelper("with",function(t,e){h(t)&&(t=t.call(this));var r=e.fn;if(!s.isEmpty(t)){if(e.data&&e.ids){var n=g(e.data);n.contextPath=s.appendContextPath(e.data.contextPath,e.ids[0]),e={data:n}}return r(t,e)}}),t.registerHelper("log",function(e,r){var n=r.data&&null!=r.data.level?parseInt(r.data.level,10):1;t.log(n,e)}),t.registerHelper("lookup",function(t,e){return t&&t[e]})}function i(t,e){m.log(t,e)}var s=t("./utils"),o=t("./exception")["default"],u="2.0.0-alpha.4";r.VERSION=u;var l=5;r.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:">= 2.0.0"};r.REVISION_CHANGES=c;var p=s.isArray,h=s.isFunction,f=s.toString,d="[object Object]";r.HandlebarsEnvironment=n,n.prototype={constructor:n,logger:m,log:i,registerHelper:function(t,e,r){if(f.call(t)===d){if(r||e)throw new o("Arg not supported with multiple helpers");s.extend(this.helpers,t)}else r&&(e.not=r),this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){f.call(t)===d?s.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};var m={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(m.level<=t){var r=m.methodMap[t];"undefined"!=typeof console&&console[r]&&console[r].call(console,e)}}};r.logger=m,r.log=i;var g=function(t){var e=s.extend({},t);return e._parent=t,e};r.createFrame=g},{"./exception":7,"./utils":10}],7:[function(t,e,r){"use strict";function n(t,e){var r;e&&e.firstLine&&(r=e.firstLine,t+=" - "+r+":"+e.firstColumn);for(var n=Error.prototype.constructor.call(this,t),i=0;i<a.length;i++)this[a[i]]=n[a[i]];r&&(this.lineNumber=r,this.column=e.firstColumn)}var a=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,r["default"]=n},{}],8:[function(t,e,r){"use strict";function n(t){var e=t&&t[0]||1,r=h;if(e!==r){if(r>e){var n=f[r],a=f[e];throw new p("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new p("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function a(t,e){if(!e)throw new p("No environment passed to template");e.VM.checkRevision(t.compiler);var r=function(t,r,n,a,i,s,o){a&&(n=c.extend({},n,a));var u=e.VM.invokePartial.call(this,t,r,n,i,s,o);if(null!=u)return u;if(e.compile){var l={helpers:i,partials:s,data:o};return s[r]=e.compile(t,{data:void 0!==o},e),s[r](n,l)}throw new p("The partial "+r+" could not be compiled when running in runtime-only mode")},n={escapeExpression:c.escapeExpression,invokePartial:r,fn:function(e){return t[e]},programs:[],program:function(t,e){var r=this.programs[t],n=this.fn(t);return e?r=s(this,t,n,e):r||(r=this.programs[t]=s(this,t,n)),r},programWithDepth:e.VM.programWithDepth,data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=c.extend({},e,t)),r},noop:e.VM.noop,compilerInfo:t.compiler},a=function(e,r){r=r||{};var i=r.data;return a._setup(r),!r.partial&&t.useData&&(i=l(e,i)),t.main.call(n,e,n.helpers,n.partials,i)};return a._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)))},a._child=function(t){return n.programWithDepth(t)},a}function i(t,e){var r=Array.prototype.slice.call(arguments,2),n=this,a=n.fn(t),i=function(t,i){return i=i||{},a.apply(n,[t,n.helpers,n.partials,i.data||e].concat(r))};return i.program=t,i.depth=r.length,i}function s(t,e,r,n){var a=function(e,a){return a=a||{},r.call(t,e,t.helpers,t.partials,a.data||n)};return a.program=e,a.depth=0,a}function o(t,e,r,n,a,i){var s={partial:!0,helpers:n,partials:a,data:i};if(void 0===t)throw new p("The partial "+e+" could not be found");return t instanceof Function?t(r,s):void 0}function u(){return""}function l(t,e){return e&&"root"in e||(e=e?d(e):{},e.root=t),e}var c=t("./utils"),p=t("./exception")["default"],h=t("./base").COMPILER_REVISION,f=t("./base").REVISION_CHANGES,d=t("./base").createFrame;r.checkRevision=n,r.template=a,r.programWithDepth=i,r.program=s,r.invokePartial=o,r.noop=u},{"./base":6,"./exception":7,"./utils":10}],9:[function(t,e,r){"use strict";function n(t){this.string=t}n.prototype.toString=function(){return""+this.string},r["default"]=n},{}],10:[function(t,e,r){"use strict";function n(t){return l[t]||"&amp;"}function a(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}function i(t){return t instanceof u?t.toString():t||0===t?(t=""+t,p.test(t)?t.replace(c,n):t):""}function s(t){return t||0===t?d(t)&&0===t.length?!0:!1:!0}function o(t,e){return(t?t+".":"")+e}var u=t("./safe-string")["default"],l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/[&<>"'`]/g,p=/[&<>"'`]/;r.extend=a;var h=Object.prototype.toString;r.toString=h;var f=function(t){return"function"==typeof t};f(/x/)&&(f=function(t){return"function"==typeof t&&"[object Function]"===h.call(t)});var f;r.isFunction=f;var d=Array.isArray||function(t){return t&&"object"==typeof t?"[object Array]"===h.call(t):!1};r.isArray=d,r.escapeExpression=i,r.isEmpty=s,r.appendContextPath=o},{"./safe-string":9}],11:[function(t,e){e.exports=t("./dist/cjs/handlebars.runtime")},{"./dist/cjs/handlebars.runtime":5}],12:[function(t,e){e.exports=t("handlebars/runtime")["default"]},{"handlebars/runtime":11}],13:[function(t,e){"use strict";var r=function(){this.rest=t("rest"),this.mime=t("rest/interceptor/mime"),this.errorCode=t("rest/interceptor/errorCode")},n=r.prototype;n.getBasket=function(){var t=this.rest.wrap(this.mime).wrap(this.errorCode);return t({path:"http://localhost:3000/api/data"})},n.removeItem=function(t){var e=this.rest.wrap(this.mime).wrap(this.errorCode);return e({method:"DELETE",path:"http://localhost:3000/api/data/"+t})},e.exports=new r},{rest:"k9FYYT","rest/interceptor/errorCode":"8OMoax","rest/interceptor/mime":"b+9qBN"}]},{},[2,3]);