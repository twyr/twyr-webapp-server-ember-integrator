(function(){var o=["vs/languages/razor/common/razorWorker","require","exports","vs/languages/html/common/htmlWorker"],t=this&&this.__extends||function(o,t){function r(){this.constructor=o}for(var n in t)t.hasOwnProperty(n)&&(o[n]=t[n])
o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}
define(o[0],function(t){for(var r=[],n=0,a=t.length;a>n;n++)r[n]=o[t[n]]
return r}([1,2,3]),function(o,r,n){"use strict"
function a(){var o={a:["asp-action","asp-controller","asp-fragment","asp-host","asp-protocol","asp-route"],div:["asp-validation-summary"],form:["asp-action","asp-controller","asp-anti-forgery"],input:["asp-for","asp-format"],label:["asp-for"],select:["asp-for","asp-items"],span:["asp-validation-for"]}
return{collectTags:function(o){},collectAttributes:function(t,r){if(t){var n=o[t]
n&&n.forEach(function(o){return r(o,null)})}},collectValues:function(o,t,r){}}}r.getRazorTagProvider=a
var e=function(o){function r(){o.apply(this,arguments)}return t(r,o),r.prototype.addCustomTagProviders=function(o){o.push(a())},r}(n.HTMLWorker)
r.RAZORWorker=e})}).call(this)
