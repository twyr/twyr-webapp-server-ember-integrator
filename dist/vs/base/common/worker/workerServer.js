(function(){var e=["exports","require","vs/base/common/errors","vs/base/common/strings","vs/platform/instantiation/common/instantiation","vs/base/common/winjs.base","vs/nls!vs/base/common/worker/workerServer","vs/nls","vs/base/common/event","vs/base/common/types","vs/base/common/platform","vs/platform/platform","vs/base/common/objects","vs/base/common/paths","vs/editor/common/modes/supports","vs/base/common/eventEmitter","vs/base/common/lifecycle","vs/editor/common/model/wordHelper","vs/editor/common/core/modeTransition","vs/editor/common/editorCommon","vs/base/common/uri","vs/editor/common/modes","vs/editor/common/core/position","vs/editor/common/services/modeService","vs/base/common/async","vs/editor/common/modes/monarch/monarchCommon","vs/base/common/timer","vs/platform/workspace/common/workspace","vs/editor/common/modes/supports/richEditBrackets","vs/editor/common/core/range","vs/editor/common/core/arrays","vs/editor/common/modes/languageConfigurationRegistry","vs/base/common/severity","vs/platform/instantiation/common/descriptors","vs/base/common/assert","vs/editor/common/services/compatWorkerService","vs/base/common/map","vs/editor/common/services/resourceService","vs/platform/extensions/common/extensions","vs/editor/common/modes/abstractState","vs/editor/common/modes/modesRegistry","vs/platform/jsonschemas/common/jsonContributionRegistry","vs/platform/extensions/common/extensionsRegistry","vs/platform/request/common/request","vs/platform/telemetry/common/telemetry","vs/editor/common/model/textModel","vs/base/common/mime","vs/base/common/cancellation","vs/editor/common/modes/nullMode","vs/base/common/collections","vs/editor/common/core/viewLineToken","vs/platform/configuration/common/configuration","vs/platform/event/common/event","vs/editor/common/modes/supports/tokenizationSupport","vs/platform/instantiation/common/serviceCollection","vs/base/common/glob","vs/editor/common/model/tokensBinaryEncoding","vs/editor/common/model/modelLine","vs/base/common/arrays","vs/editor/common/modes/supports/suggestSupport","vs/editor/common/modes/abstractMode","vs/base/common/stopwatch","vs/editor/common/modes/lineStream","vs/base/common/callbackList","vs/editor/common/model/textModelWithTokensHelpers","vs/nls!vs/base/common/severity","vs/nls!vs/base/common/errors","vs/nls!vs/editor/common/config/defaultConfig","vs/editor/common/config/defaultConfig","vs/editor/common/model/tokenIterator","vs/nls!vs/editor/common/model/textModelWithTokens","vs/editor/common/model/textModelWithTokens","vs/editor/common/model/mirrorModel","vs/nls!vs/editor/common/modes/modesRegistry","vs/nls!vs/editor/common/modes/supports/suggestSupport","vs/nls!vs/editor/common/services/modeServiceImpl","vs/nls!vs/platform/configuration/common/configurationRegistry","vs/nls!vs/platform/extensions/common/abstractExtensionService","vs/nls!vs/platform/extensions/common/extensionsRegistry","vs/nls!vs/platform/jsonschemas/common/jsonContributionRegistry","vs/base/common/filters","vs/base/common/events","vs/editor/common/modes/languageSelector","vs/editor/common/services/editorWorkerService","vs/base/common/network","vs/editor/common/services/modelService","vs/base/common/graph","vs/editor/common/services/resourceServiceImpl","vs/editor/common/modes/monarch/monarchCompile","vs/base/common/marshalling","vs/platform/event/common/eventService","vs/base/common/worker/workerProtocol","vs/platform/workspace/common/baseWorkspaceContextService","vs/platform/instantiation/common/instantiationService","vs/editor/common/modes/supports/characterPair","vs/editor/common/model/indentationGuesser","vs/editor/common/services/compatWorkerServiceWorker","vs/editor/common/services/languagesRegistry","vs/editor/common/languages.common","vs/editor/common/modes/supports/electricCharacter","vs/platform/configuration/common/configurationRegistry","vs/editor/common/model/lineToken","vs/editor/common/modes/languageFeatureRegistry","vs/editor/common/services/modeServiceImpl","vs/platform/extensions/common/abstractExtensionService","vs/editor/common/modes/monarch/monarchLexer","vs/editor/common/modes/supports/onEnter","vs/platform/request/common/baseRequestService","vs/editor/common/viewModel/prefixSumComputer","vs/base/common/worker/workerServer","vs/base/common/winjs.base.raw","vs/editor/common/worker/editorWorkerServer"],t=function(t){for(var n=[],r=0,i=t.length;i>r;r++)n[r]=e[t[r]]
return n}
define(e[58],t([1,0]),function(e,t){"use strict"
function n(e,t){for(var n=0;n<e.length;n++){if(t(e[n]))return n}return-1}t.tail=function(e,t){return void 0===t&&(t=0),e[e.length-(1+t)]},t.forEach=function(e,t){for(var n=0,r=e.length;r>n;n++)t(e[n],function(){e.splice(n,1),n--,r--})},t.equals=function(e,t,n){if(void 0===n&&(n=function(e,t){return e===t}),e.length!==t.length)return!1
for(var r=0,i=e.length;i>r;r++)if(!n(e[r],t[r]))return!1
return!0},t.binarySearch=function(e,t,n){for(var r=0,i=e.length-1;i>=r;){var o=(r+i)/2|0,s=n(e[o],t)
if(0>s)r=o+1
else{if(!(s>0))return o
i=o-1}}return-(r+1)},t.findFirst=function(e,t){var n=0,r=e.length
if(0===r)return 0
for(;r>n;){var i=Math.floor((n+r)/2)
t(e[i])?r=i:n=i+1}return n},t.merge=function(e,t){var n=new Array
if(t)for(var r={},i=0;i<e.length;i++)for(var o=0;o<e[i].length;o++){var s=e[i][o],a=t(s)
r.hasOwnProperty(a)||(r[a]=!0,n.push(s))}else{i=0
for(var u=e.length;u>i;i++)n.push.apply(n,e[i])}return n},t.coalesce=function(e){return e?e.filter(function(e){return!!e}):e},t.contains=function(e,t){return e.indexOf(t)>=0},t.swap=function(e,t,n){var r=e[t],i=e[n]
e[t]=i,e[n]=r},t.move=function(e,t,n){e.splice(n,0,e.splice(t,1)[0])},t.isFalsyOrEmpty=function(e){return!Array.isArray(e)||0===e.length},t.distinct=function(e,t){if(!t)return e.filter(function(t,n){return e.indexOf(t)===n})
var n=Object.create(null)
return e.filter(function(e){var r=t(e)
return!n[r]&&(n[r]=!0,!0)})},t.uniqueFilter=function(e){var t=Object.create(null)
return function(n){var r=e(n)
return!t[r]&&(t[r]=!0,!0)}},t.firstIndex=n,t.first=function(e,t,r){void 0===r&&(r=null)
var i=n(e,t)
return 0>i?r:e[i]},t.commonPrefixLength=function(e,t,n){void 0===n&&(n=function(e,t){return e===t})
for(var r=0,i=0,o=Math.min(e.length,t.length);o>i&&n(e[i],t[i]);i++)r++
return r},t.flatten=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},t.range=function(e,t){void 0===t&&(t=0)
for(var n=[],r=t;e>r;r++)n.push(r)
return n},t.fill=function(e,t,n){void 0===n&&(n=[])
for(var r=0;e>r;r++)n[r]=t()
return n},t.index=function(e,t){var n=Object.create(null)
return e.forEach(function(e){return n[t(e)]=e}),n}}),define(e[34],t([1,0]),function(e,t){"use strict"
t.ok=function(e,t){if(!e||null===e)throw new Error(t?"Assertion failed ("+t+")":"Assertion Failed")}}),define(e[49],t([1,0]),function(e,t){"use strict"
function n(){return Object.create(null)}function r(e,t,n){var r=String(t)
return i(e,r)?e[r]:("function"==typeof n&&(n=n()),e[r]=n,n)}function i(e,t){return o.call(e,t)}t.createStringDictionary=n,t.createNumberDictionary=function(){return Object.create(null)},t.lookup=function(e,t,n){void 0===n&&(n=null)
var r=String(t)
return i(e,r)?e[r]:n},t.lookupOrInsert=r,t.insert=function(e,t,n){e[n(t)]=t}
var o=Object.prototype.hasOwnProperty
t.contains=i,t.values=function(e){var t=[]
for(var n in e)o.call(e,n)&&t.push(e[n])
return t},t.forEach=function(e,t){for(var n in e)if(o.call(e,n)&&!1===t({key:n,value:e[n]},function(){delete e[n]}))return},t.remove=function(e,t){return!!o.call(e,t)&&(delete e[t],!0)},t.groupBy=function(e,t){var i=n()
return e.forEach(function(e){return r(i,t(e),[]).push(e)}),i}})
var n=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}
define(e[81],t([1,0]),function(e,t){"use strict"
var r=function(){return function(e){this.time=(new Date).getTime(),this.originalEvent=e,this.source=null}}()
t.Event=r
var i=function(e){function t(t,n,r,i){e.call(this,i),this.key=t,this.oldValue=n,this.newValue=r}return n(t,e),t}(r)
t.PropertyChangeEvent=i
var o=function(e){function t(t,n){e.call(this,n),this.element=t}return n(t,e),t}(r)
t.ViewerEvent=o,t.EventType={PROPERTY_CHANGED:"propertyChanged",SELECTION:"selection",FOCUS:"focus",BLUR:"blur",HIGHLIGHT:"highlight",EXPAND:"expand",COLLAPSE:"collapse",TOGGLE:"toggle",CONTENTS_CHANGED:"contentsChanged",BEFORE_RUN:"beforeRun",RUN:"run",EDIT:"edit",SAVE:"save",CANCEL:"cancel",CHANGE:"change",DISPOSE:"dispose"}}),define(e[36],t([1,0]),function(e,t){"use strict"
var r=function(){function e(){this.map=Object.create(null),this._size=0}return Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var t=this.peek(e)
return t||null},e.prototype.keys=function(){var e=[]
for(var t in this.map)e.push(this.map[t].key)
return e},e.prototype.entries=function(){var e=[]
for(var t in this.map)e.push(this.map[t])
return e},e.prototype.set=function(e,t){return!this.get(e)&&(this.push(e,t),!0)},e.prototype.delete=function(e){var t=this.get(e)
return t?(this.pop(e),t):null},e.prototype.has=function(e){return!!this.get(e)},e.prototype.clear=function(){this.map=Object.create(null),this._size=0},e.prototype.push=function(e,t){var n={key:e,value:t}
this.map[e.toString()]=n,this._size++},e.prototype.pop=function(e){delete this.map[e.toString()],this._size--},e.prototype.peek=function(e){var t=this.map[e.toString()]
return t?t.value:null},e}()
t.SimpleMap=r
var i=function(){function e(e,t){void 0===e&&(e=Number.MAX_VALUE),void 0===t&&(t=1),this.limit=e,this.map=Object.create(null),this._size=0,this.ratio=e*t}return Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),e.prototype.set=function(e,t){if(this.map[e])return!1
var n={key:e,value:t}
return this.push(n),this._size>this.limit&&this.trim(),!0},e.prototype.get=function(e){var t=this.map[e]
return t?t.value:null},e.prototype.delete=function(e){var t=this.map[e]
return t?(this.map[e]=void 0,this._size--,t.next?t.next.prev=t.prev:this.head=t.prev,t.prev?t.prev.next=t.next:this.tail=t.next,t.value):null},e.prototype.has=function(e){return!!this.map[e]},e.prototype.clear=function(){this.map=Object.create(null),this._size=0,this.head=null,this.tail=null},e.prototype.push=function(e){this.head&&(e.prev=this.head,this.head.next=e),this.tail||(this.tail=e),this.head=e,this.map[e.key]=e,this._size++},e.prototype.trim=function(){if(this.tail)if(this.ratio<this.limit)for(var e=0,t=this.tail;t.next;){if(this.map[t.key]=void 0,this._size--,e===this.ratio){this.tail=t.next,this.tail.prev=null
break}t=t.next,e++}else this.map[this.tail.key]=void 0,this._size--,this.tail=this.tail.next,this.tail.prev=null},e}()
t.LinkedMap=i
var o=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.get=function(e){var t=this.map[e]
return t?(this.delete(e),this.push(t),t.value):null},t}(i)
t.LRUCache=o}),define(e[10],t([1,0]),function(e,t){"use strict"
var n=!1,r=!1,i=!1,o=!1,s=!1,a=!1,u=!1,c=void 0,l=void 0
if(t.LANGUAGE_DEFAULT="en","object"==typeof process){n="win32"===process.platform,r="darwin"===process.platform,i="linux"===process.platform,o=!n&&0===process.getuid()
var h=process.env.VSCODE_NLS_CONFIG
if(h)try{var d=JSON.parse(h),f=d.availableLanguages["*"]
c=d.locale,l=f||t.LANGUAGE_DEFAULT}catch(e){}s=!0}else if("object"==typeof navigator){var p=navigator.userAgent
n=p.indexOf("Windows")>=0,r=p.indexOf("Macintosh")>=0,i=p.indexOf("Linux")>=0,a=!0,l=c=navigator.language,u=!!self.QUnit}!function(e){e[e.Web=0]="Web",e[e.Mac=1]="Mac",e[e.Linux=2]="Linux",e[e.Windows=3]="Windows"}(t.Platform||(t.Platform={}))
var g=t.Platform
t._platform=g.Web,s&&(r?t._platform=g.Mac:n?t._platform=g.Windows:i&&(t._platform=g.Linux)),t.isWindows=n,t.isMacintosh=r,t.isLinux=i,t.isRootUser=o,t.isNative=s,t.isWeb=a,t.isQunit=u,t.platform=t._platform,t.language=l,t.locale=c
var m="object"==typeof self?self:global
t.globals=m,t.hasWebWorkerSupport=function(){return void 0!==m.Worker},t.setTimeout=m.setTimeout.bind(m),t.clearTimeout=m.clearTimeout.bind(m),t.setInterval=m.setInterval.bind(m),t.clearInterval=m.clearInterval.bind(m)}),define(e[13],t([1,0,10]),function(e,t,n){"use strict"
function r(e){var t=~e.lastIndexOf("/")||~e.lastIndexOf("\\")
return 0===t?e:~t==e.length-1?r(e.substring(0,e.length-1)):e.substr(1+~t)}function i(e,t){if(null==e)return e
var r=e.length
if(0===r)return"."
var i=n.isWindows&&t
if(function(e,t){return t?!u.test(e):!a.test(e)}(e,i))return e
for(var h=i?"\\":"/",d=s(e,h),f=d.length,p=!1,g="",m=d.length;r>=m;m++)if(m===r||e.charCodeAt(m)===c||e.charCodeAt(m)===l){if(o(e,f,m,"..")){var v=g.lastIndexOf(h),_=g.slice(v+1);(d||_.length>0)&&".."!==_&&(g=-1===v?"":g.slice(0,v),p=!0)}else o(e,f,m,".")&&(d||g||r-1>m)&&(p=!0)
if(!p){var y=e.slice(f,m)
""!==g&&g[g.length-1]!==h&&(g+=h),g+=y}f=m+1,p=!1}return d+g}function o(e,t,n,r){return t+r.length===n&&e.indexOf(r,t)===t}function s(e,t){if(void 0===t&&(t="/"),!e)return""
var n=e.length,r=e.charCodeAt(0)
if(r===c||r===l){if(((r=e.charCodeAt(1))===c||r===l)&&((r=e.charCodeAt(2))!==c&&r!==l)){for(var i=3,o=i;n>i&&((r=e.charCodeAt(i))!==c&&r!==l);i++);if(r=e.charCodeAt(i+1),o!==i&&r!==c&&r!==l)for(i+=1;n>i;i++)if((r=e.charCodeAt(i))===c||r===l)return e.slice(0,i+1).replace(/[\\\/]/g,t)}return t}if((r>=f&&g>=r||r>=d&&p>=r)&&e.charCodeAt(1)===h)return(r=e.charCodeAt(2))===c||r===l?e.slice(0,2)+t:e.slice(0,2)
var s=e.indexOf("://")
if(-1!==s)for(s+=3;n>s;s++)if((r=e.charCodeAt(s))===c||r===l)return e.slice(0,s+1)
return""}t.sep="/",t.nativeSep=n.isWindows?"\\":"/",t.relative=function(e,n){e=i(e),n=i(n)
for(var r=e.split(t.sep),o=n.split(t.sep);r.length>0&&o.length>0&&r[0]===o[0];)r.shift(),o.shift()
for(var s=0,a=r.length;a>s;s++)o.unshift("..")
return o.join(t.sep)},t.dirname=function(e){var t=~e.lastIndexOf("/")||~e.lastIndexOf("\\")
return 0===t?".":0==~t?e[0]:e.substring(0,~t)},t.basename=r,t.extname=function(e){var t=~(e=r(e)).lastIndexOf(".")
return t?e.substring(~t):""}
var a=/(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/,u=/(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/
t.normalize=i,t.getRoot=s,t.join=function(){for(var e="",n=0;n<arguments.length;n++){var r=arguments[n]
if(n>0){var o=e.charCodeAt(e.length-1)
if(o!==c&&o!==l){var s=r.charCodeAt(0)
s!==c&&s!==l&&(e+=t.sep)}}e+=r}return i(e)},t.isUNC=function(e){if(!n.isWindows)return!1
if(!e||e.length<5)return!1
var t=e.charCodeAt(0)
if(t!==l)return!1
if((t=e.charCodeAt(1))!==l)return!1
for(var r=2,i=r;r<e.length&&(t=e.charCodeAt(r))!==l;r++);return i!==r&&(t=e.charCodeAt(r+1),!isNaN(t)&&t!==l)},t.makePosixAbsolute=function(e){return function(e){return e&&"/"===e[0]}(i(e))?e:t.sep+e}
var c="/".charCodeAt(0),l="\\".charCodeAt(0),h=":".charCodeAt(0),d="a".charCodeAt(0),f="A".charCodeAt(0),p="z".charCodeAt(0),g="Z".charCodeAt(0)
t.isEqualOrParent=function(e,t){if(e===t)return!0
e=i(e)
var r=(t=i(t)).length
return t.charCodeAt(r-1)===c&&(t=t.substring(0,r-1),r-=1),e===t||(n.isLinux||(e=e.toLowerCase(),t=t.toLowerCase()),e===t||0===e.indexOf(t)&&e.charCodeAt(r)===c)}
var m=n.isWindows?/[\\\/:\*\?"<>\|]/g:/[\\\/]/g,v=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i
t.isValidBasename=function(e){return!(!e||0===e.length||/^\s+$/.test(e)||(m.lastIndex=0,m.test(e)||n.isWindows&&v.test(e)||"."===e||".."===e||n.isWindows&&"."===e[e.length-1]||n.isWindows&&e.length!==e.trim().length))},t.isAbsoluteRegex=/^((\/|[a-zA-Z]:\\)[^\(\)<>\\'\"\[\]]+)/,t.isAbsolute=function(e){return t.isAbsoluteRegex.test(e)}}),define(e[61],t([1,0,10]),function(e,t,n){"use strict"
var r=n.globals.performance&&"function"==typeof n.globals.performance.now,i=function(){function e(e){this._highResolution=r&&e,this._startTime=this._now(),this._stopTime=-1}return e.create=function(t){return void 0===t&&(t=!0),new e(t)},e.prototype.stop=function(){this._stopTime=this._now()},e.prototype.elapsed=function(){return-1!==this._stopTime?this._stopTime-this._startTime:this._now()-this._startTime},e.prototype._now=function(){return this._highResolution?n.globals.performance.now():(new Date).getTime()},e}()
t.StopWatch=i}),define(e[3],t([1,0,36]),function(e,t,n){"use strict"
function r(e,t){if(!e||!t)return e
var n=t.length
if(0===n||0===e.length)return e
for(var r=0;e.indexOf(t,r)===r;)r+=n
return e.substring(r)}function i(e,t){if(!e||!t)return e
var n=t.length,r=e.length
if(0===n||0===r)return e
for(var i=r,o=-1;-1!==(o=e.lastIndexOf(t,i-1))&&o+n===i;){if(0===o)return""
i=o}return e.substring(0,i)}function o(e,t,n,r,i){if(""===e)throw new Error("Cannot create regex from empty string")
t||(e=e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")),r&&(/\B/.test(e.charAt(0))||(e="\\b"+e),/\B/.test(e.charAt(e.length-1))||(e+="\\b"))
var o=""
return i&&(o+="g"),n||(o+="i"),new RegExp(e,o)}function s(e){return"^"!==e.source&&"^$"!==e.source&&"$"!==e.source&&(e.exec("")&&0===e.lastIndex)}function a(e){return e>=97&&122>=e||e>=65&&90>=e}t.empty="",t.pad=function(e,t,n){void 0===n&&(n="0")
for(var r=""+e,i=[r],o=r.length;t>o;o++)i.push(n)
return i.reverse().join("")}
var u=/{(\d+)}/g
t.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return 0===t.length?e:e.replace(u,function(e,n){var r=parseInt(n,10)
return isNaN(r)||0>r||r>=t.length?e:t[r]})},t.escape=function(e){return e.replace(/[<|>|&]/g,function(e){switch(e){case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"
default:return e}})},t.escapeRegExpCharacters=function(e){return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},t.trim=function(e,t){return void 0===t&&(t=" "),i(r(e,t),t)},t.ltrim=r,t.rtrim=i,t.convertSimple2RegExpPattern=function(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")},t.stripWildcards=function(e){return e.replace(/\*/g,"")},t.startsWith=function(e,t){if(e.length<t.length)return!1
for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1
return!0},t.endsWith=function(e,t){var n=e.length-t.length
return n>0?e.lastIndexOf(t)===n:0===n&&e===t},t.createRegExp=o,t.createSafeRegExp=function(e,t,n,r){if(""===e)return null
var i=null
try{i=o(e,t,n,r,!0)}catch(e){return null}try{if(s(i))return null}catch(e){return null}return i},t.regExpLeadsToEndlessLoop=s,t.canNormalize="function"==typeof"".normalize
var c=/[^\u0000-\u0080]/,l=new n.LinkedMap(1e4)
t.normalizeNFC=function(e){if(!t.canNormalize||!e)return e
var n,r=l.get(e)
return r||(n=c.test(e)?e.normalize("NFC"):e,l.set(e,n),n)},t.firstNonWhitespaceIndex=function(e){for(var t=0,n=e.length;n>t;t++)if(" "!==e.charAt(t)&&"\t"!==e.charAt(t))return t
return-1},t.getLeadingWhitespace=function(e){for(var t=0,n=e.length;n>t;t++)if(" "!==e.charAt(t)&&"\t"!==e.charAt(t))return e.substring(0,t)
return e},t.lastNonWhitespaceIndex=function(e,t){void 0===t&&(t=e.length-1)
for(var n=t;n>=0;n--)if(" "!==e.charAt(n)&&"\t"!==e.charAt(n))return n
return-1},t.localeCompare=function(e,t){return e.localeCompare(t)},t.equalsIgnoreCase=function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;n>r;r++){var i=e.charCodeAt(r),o=t.charCodeAt(r)
if(i!==o)if(a(i)&&a(o)){var s=Math.abs(i-o)
if(0!==s&&32!==s)return!1}else if(String.fromCharCode(i).toLocaleLowerCase()!==String.fromCharCode(o).toLocaleLowerCase())return!1}return!0},t.commonPrefixLength=function(e,t){var n,r=Math.min(e.length,t.length)
for(n=0;r>n;n++)if(e.charCodeAt(n)!==t.charCodeAt(n))return n
return r},t.commonSuffixLength=function(e,t){var n,r=Math.min(e.length,t.length),i=e.length-1,o=t.length-1
for(n=0;r>n;n++)if(e.charCodeAt(i-n)!==t.charCodeAt(o-n))return n
return r},t.isFullWidthCharacter=function(e){return(e=+e)>=11904&&55215>=e||e>=63744&&64255>=e||e>=65281&&65374>=e},t.difference=function(e,t,n){void 0===n&&(n=4)
var r=Math.abs(e.length-t.length)
if(r>n)return 0
var i,o,s=[],a=[]
for(i=0;i<t.length+1;++i)a.push(0)
for(i=0;i<e.length+1;++i)s.push(a)
for(i=1;i<e.length+1;++i)for(o=1;o<t.length+1;++o)e[i-1]===t[o-1]?s[i][o]=s[i-1][o-1]+1:s[i][o]=Math.max(s[i-1][o],s[i][o-1])
return s[e.length][t.length]-Math.sqrt(r)},t.computeLineStarts=function(e){for(var t=/\r\n|\r|\n/g,n=[0];t.exec(e);)n.push(t.lastIndex)
return n},t.lcut=function(e,n){if(e.length<n)return e
for(var r=e.split(/\b/),i=0,o=r.length-1;o>=0;o--)if((i+=r[o].length)>n){r.splice(0,o)
break}return r.join(t.empty).replace(/^\s/,t.empty)}
var h=/\x1B\x5B[12]?K/g,d=/\xA/g,f=/\x1b\[\d+m/g,p=/\x1b\[0?m/g
t.removeAnsiEscapeCodes=function(e){return e&&(e=(e=(e=(e=e.replace(h,"")).replace(d,"\n")).replace(f,"")).replace(p,"")),e}
var g=65279
t.UTF8_BOM_CHARACTER=String.fromCharCode(g),t.startsWithUTF8BOM=function(e){return e&&e.length>0&&e.charCodeAt(0)===g},t.appendWithLimit=function(e,t,n){var r=e.length+t.length
return r>n&&(e="..."+e.substr(r-n)),e+(t.length>n?t.substr(t.length-n):t)},t.safeBtoa=function(e){return btoa(encodeURIComponent(e))},t.repeat=function(e,t){for(var n="",r=0;t>r;r++)n+=e
return n}}),define(e[80],t([1,0,3,36]),function(e,t,n,r){"use strict"
function i(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return function(t,n){for(var r=0,i=e.length;i>r;r++){var o=e[r](t,n)
if(o)return o}return null}}function o(e,t,n){if(!n||0===n.length||n.length<t.length)return null
e&&(t=t.toLowerCase(),n=n.toLowerCase())
for(var r=0;r<t.length;r++)if(t[r]!==n[r])return null
return t.length>0?[{start:0,end:t.length}]:[]}function s(e,t){var n=t.toLowerCase().indexOf(e.toLowerCase())
return-1===n?null:[{start:n,end:n+e.length}]}function a(e,t){return function e(t,n,r,i){if(r===t.length)return[]
if(i===n.length)return null
if(t[r]===n[i]){var o=null
if(o=e(t,n,r+1,i+1))return f({start:i,end:i+1},o)}return e(t,n,r,i+1)}(e.toLowerCase(),t.toLowerCase(),0,0)}function u(e){return e>=97&&122>=e}function c(e){return e>=65&&90>=e}function l(e){return e>=48&&57>=e}function h(e){return[32,9,10,13].indexOf(e)>-1}function d(e){return u(e)||c(e)||l(e)}function f(e,t){return 0===t.length?t=[e]:e.end===t[0].start?t[0].start=e.start:t.unshift(e),t}function p(e,t){for(var n=t;n<e.length;n++){var r=e.charCodeAt(n)
if(c(r)||l(r)||n>0&&!d(e.charCodeAt(n-1)))return n}return e.length}function g(e,t,n,r){if(n===e.length)return[]
if(r===t.length)return null
if(e[n]!==t[r].toLowerCase())return null
var i=null,o=r+1
for(i=g(e,t,n+1,r+1);!i&&(o=p(t,o))<t.length;)i=g(e,t,n+1,o),o++
return null===i?null:f({start:r,end:r+1},i)}function m(e,t){if(!t||0===t.length)return null
if(!function(e){for(var t=0,n=0,r=0,i=0,o=0;o<e.length;o++)c(r=e.charCodeAt(o))&&t++,u(r)&&n++,h(r)&&i++
return 0!==t&&0!==n||0!==i?5>=t:e.length<=30}(e))return null
if(!function(e){if(e.length>60)return!1
for(var t=0,n=0,r=0,i=0,o=0,s=0;s<e.length;s++)c(o=e.charCodeAt(s))&&t++,u(o)&&n++,d(o)&&r++,l(o)&&i++
var a=t/e.length,h=n/e.length,f=r/e.length,p=i/e.length
return h>.2&&.8>a&&f>.6&&.2>p}(t))return null
for(var n=null,r=0;r<t.length&&null===(n=g(e.toLowerCase(),t,0,r));)r=p(t,r+1)
return n}function v(e,t,n,r){if(n===e.length)return[]
if(r===t.length)return null
if(e[n]!==t[r].toLowerCase())return null
var i=null,o=r+1
for(i=v(e,t,n+1,r+1);!i&&(o=_(t,o))<t.length;)i=v(e,t,n+1,o),o++
return null===i?null:f({start:r,end:r+1},i)}function _(e,t){for(var n=t;n<e.length;n++){if(h(e.charCodeAt(n))||n>0&&h(e.charCodeAt(n-1)))return n}return e.length}t.or=i,t.and=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return function(t,n){for(var r=[],i=0,o=e.length;o>i;i++){var s=e[i](t,n)
if(!s)return null
r=r.concat(s)}return r}},t.matchesStrictPrefix=function(e,t){return o(!1,e,t)},t.matchesPrefix=function(e,t){return o(!0,e,t)},t.matchesContiguousSubString=s,t.matchesSubString=a,t.matchesCamelCase=m,t.matchesWords=function(e,t){if(!t||0===t.length)return null
for(var n=null,r=0;r<t.length&&null===(n=v(e.toLowerCase(),t,0,r));)r=_(t,r+1)
return n},function(e){e[e.Contiguous=0]="Contiguous",e[e.Separate=1]="Separate"}(t.SubstringMatching||(t.SubstringMatching={})),t.SubstringMatching,t.fuzzyContiguousFilter=i(t.matchesPrefix,m,s)
var y=i(t.matchesPrefix,m,a),b=new r.LinkedMap(1e4)
t.matchesFuzzy=function(e,r,i){if(void 0===i&&(i=!1),"string"!=typeof e||"string"!=typeof r)return null
var o=b.get(e)
o||(o=new RegExp(n.convertSimple2RegExpPattern(e),"i"),b.set(e,o))
var s=o.exec(r)
return s?[{start:s.index,end:s.index+s[0].length}]:i?y(e,r):t.fuzzyContiguousFilter(e,r)}}),define(e[55],t([1,0,3,13,36]),function(e,t,n,r,i){"use strict"
function o(e){switch(e){case 0:return""
case 1:return h+"*?"
default:return"(?:"+l+"|"+h+"+"+l+"|"+l+h+"+)*?"}}function s(e,t){if(!e)return[]
for(var n,r=[],i=!1,o=!1,s="",a=0;a<e.length;a++){switch(n=e[a]){case t:if(!i&&!o){r.push(s),s=""
continue}break
case"{":i=!0
break
case"}":i=!1
break
case"[":o=!0
break
case"]":o=!1}s+=n}return s&&r.push(s),r}function a(e){if(!e)return null
e=e.trim()
var t=m.get(e)
return t?(t.regexp&&(t.regexp.lastIndex=0),t):(t=Object.create(null),f.test(e)?t.trivia=d.T1:p.test(e)?t.trivia=d.T2:g.test(e)?t.trivia=d.T3:t.regexp=function(e){try{return new RegExp(e)}catch(e){return/.^/}}("^"+function e(t){if(!t)return""
var r="",i=s(t,"/")
if(i.every(function(e){return"**"===e}))r=".*"
else{var a=!1
i.forEach(function(t,u){if("**"!==t){for(var c,d=!1,f="",p=!1,g="",m=0;m<t.length;m++)if("}"!==(c=t[m])&&d)f+=c
else if("]"!==c&&p){var v=void 0
switch(c){case"-":case"^":v=c
break
default:v=n.escapeRegExpCharacters(c)}g+=v}else switch(c){case"{":d=!0
continue
case"[":p=!0
continue
case"}":var _="(?:"+s(f,",").map(function(t){return e(t)}).join("|")+")"
r+=_,d=!1,f=""
break
case"]":r+="["+g+"]",p=!1,g=""
break
case"?":r+=h
continue
case"*":r+=o(1)
continue
default:r+=n.escapeRegExpCharacters(c)}u<i.length-1&&"**"!==i[u+1]&&(r+=l),a=!1}else a||(r+=o(2),a=!0)})}return r}(e)+"$"),m.set(e,t),t)}function u(e,t,r){if(!e||!t)return!1
if("string"==typeof e){var i=a(e)
if(!i)return!1
if(i.trivia===d.T1)return n.endsWith(t,e.substr(4))
if(i.trivia===d.T2){var o=e.substr(3)
return t===o||n.endsWith(t,"/"+o)||n.endsWith(t,"\\"+o)}return i.trivia===d.T3?e.slice(1,-1).split(",").some(function(e){return u(e,t)}):i.regexp.test(t)}return c(e,t,r)}function c(e,t,i){for(var o,s=Object.getOwnPropertyNames(e),a=function(a){var c=s[a],l=e[c]
if(!1===l)return"continue"
if(u(c,t)){if("boolean"==typeof l)return{value:c}
if(l&&"string"==typeof l.when){if(!i||!i.length)return"continue"
o||(o=n.rtrim(r.basename(t),r.extname(t)))
var h=l.when.replace("$(basename)",o)
return i.some(function(e){return e===h})?{value:c}:"continue"}return{value:c}}},c=0;c<s.length;c++){var l=a(c)
if("object"==typeof l)return l.value}return null}var l="[/\\\\]",h="[^/\\\\]"
t.splitGlobAware=s
var d,f=/^\*\*\/\*\.[\w\.-]+$/,p=/^\*\*\/[\w\.-]+$/,g=/^{\*\*\/\*\.[\w\.-]+(,\*\*\/\*\.[\w\.-]+)*}$/
!function(e){e[e.T1=0]="T1",e[e.T2=1]="T2",e[e.T3=2]="T3"}(d||(d={}))
var m=new i.LinkedMap(1e4)
t.match=u}),define(e[9],t([1,0]),function(e,t){"use strict"
function n(e){return Array.isArray?Array.isArray(e):!(!e||typeof e.length!==u.number||e.constructor!==Array)}function r(e){return typeof e===u.string||e instanceof String}function i(e){return!(typeof e!==u.object||null===e||Array.isArray(e)||e instanceof RegExp||e instanceof Date)}function o(e){return typeof e===u.undefined}function s(e){return typeof e===u.function}function a(e,t){if(r(t)){if(typeof e!==t)throw new Error("argument does not match constraint: typeof "+t)}else if(s(t)){if(e instanceof t)return
if(e&&e.constructor===t)return
if(1===t.length&&!0===t.call(void 0,e))return
throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")}}var u={number:"number",string:"string",undefined:"undefined",object:"object",function:"function"}
t.isArray=n,t.isString=r,t.isStringArray=function(e){return n(e)&&e.every(function(e){return r(e)})},t.isObject=i,t.isNumber=function(e){return(typeof e===u.number||e instanceof Number)&&!isNaN(e)},t.isBoolean=function(e){return!0===e||!1===e},t.isUndefined=o,t.isUndefinedOrNull=function(e){return o(e)||null===e}
var c=Object.prototype.hasOwnProperty
t.isEmptyObject=function(e){if(!i(e))return!1
for(var t in e)if(c.call(e,t))return!1
return!0},t.isFunction=s,t.areFunctions=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return e&&e.length>0&&e.every(s)},t.validateConstraints=function(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)a(e[r],t[r])},t.validateConstraint=a,t.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=Object.create(e.prototype)
return e.apply(r,t),r}}),define(e[86],t([1,0,9,49]),function(e,t,n,r){"use strict"
var i=function(){function e(e){this._hashFn=e,this._nodes=Object.create(null)}return e.prototype.roots=function(){var e=[]
return r.forEach(this._nodes,function(t){n.isEmptyObject(t.value.outgoing)&&e.push(t.value)}),e},e.prototype.traverse=function(e,t,n){var r=this.lookup(e)
r&&this._traverse(r,t,Object.create(null),n)},e.prototype._traverse=function(e,t,n,i){var o=this,s=this._hashFn(e.data)
if(!r.contains(n,s)){n[s]=!0,i(e.data)
var a=t?e.outgoing:e.incoming
r.forEach(a,function(e){return o._traverse(e.value,t,n,i)})}},e.prototype.insertEdge=function(e,t){var n=this.lookupOrInsertNode(e),r=this.lookupOrInsertNode(t)
n.outgoing[this._hashFn(t)]=r,r.incoming[this._hashFn(e)]=n},e.prototype.removeNode=function(e){var t=this._hashFn(e)
delete this._nodes[t],r.forEach(this._nodes,function(e){delete e.value.outgoing[t],delete e.value.incoming[t]})},e.prototype.lookupOrInsertNode=function(e){var t=this._hashFn(e),n=r.lookup(this._nodes,t)
return n||(n=function(e){return{data:e,incoming:Object.create(null),outgoing:Object.create(null)}}(e),this._nodes[t]=n),n},e.prototype.lookup=function(e){return r.lookup(this._nodes,this._hashFn(e))},Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this._nodes).length},enumerable:!0,configurable:!0}),e.prototype.toString=function(){var e=[]
return r.forEach(this._nodes,function(t){e.push(t.key+", (incoming)["+Object.keys(t.value.incoming).join(", ")+"], (outgoing)["+Object.keys(t.value.outgoing).join(",")+"]")}),e.join("\n")},e}()
t.Graph=i}),define(e[16],t([1,0,9]),function(e,t,r){"use strict"
function i(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
var n=e[0]
return r.isArray(n)&&(e=n),e.forEach(function(e){return e&&e.dispose()}),[]}function o(e){return{dispose:function(){return i(e)}}}t.empty=Object.freeze({dispose:function(){}}),t.dispose=i,t.combinedDisposable=o,t.toDisposable=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return o(e.map(function(e){return{dispose:e}}))}
var s=function(){function e(){this._toDispose=[]}return e.prototype.dispose=function(){this._toDispose=i(this._toDispose)},e.prototype._register=function(e){return this._toDispose.push(e),e},e}()
t.Disposable=s
var a=function(e){function t(){e.apply(this,arguments)}return n(t,e),t.prototype.add=function(e){if(!Array.isArray(e))return this._register(e)
for(var t=0,n=e;t<n.length;t++){var r=n[t]
return this._register(r)}},t}(s)
t.Disposables=a}),define(e[46],t([1,0,13,9,3,55]),function(e,t,n,r,i,o){"use strict"
function s(e,t){for(var r,s,a,u=n.basename(e),c=0;c<t.length;c++){var l=t[c]
if(l.filename&&u===l.filename.toLowerCase()){r=l
break}if(l.filepattern){var h=l.filepattern.indexOf(n.sep)>=0?e:u
o.match(l.filepattern.toLowerCase(),h)&&(!s||l.filepattern.length>s.filepattern.length)&&(s=l)}l.extension&&i.endsWith(u,l.extension.toLowerCase())&&(!a||l.extension.length>a.extension.length)&&(a=l)}return r?r.mime:s?s.mime:a?a.mime:null}function a(e){if(i.startsWithUTF8BOM(e)&&(e=e.substr(1)),e.length>0)for(var t=0;t<u.length;++t){var n=u[t]
if(n.firstline){var r=e.match(n.firstline)
if(r&&r.length>0&&r[0].length===e.length)return n.mime}}return null}t.MIME_TEXT="text/plain",t.MIME_BINARY="application/octet-stream",t.MIME_UNKNOWN="application/unknown"
var u=[]
t.registerTextMime=function(e){u.push(e),e.userConfigured||u.forEach(function(t){t.mime===e.mime||t.userConfigured||(e.extension&&t.extension===e.extension&&console.warn("Overwriting extension <<"+e.extension+">> to now point to mime <<"+e.mime+">>"),e.filename&&t.filename===e.filename&&console.warn("Overwriting filename <<"+e.filename+">> to now point to mime <<"+e.mime+">>"),e.filepattern&&t.filepattern===e.filepattern&&console.warn("Overwriting filepattern <<"+e.filepattern+">> to now point to mime <<"+e.mime+">>"),e.firstline&&t.firstline===e.firstline&&console.warn("Overwriting firstline <<"+e.firstline+">> to now point to mime <<"+e.mime+">>"))})},t.clearTextMimes=function(e){u=e?u.filter(function(e){return!e.userConfigured}):[]},t.guessMimeTypes=function(e,n){if(!e)return[t.MIME_UNKNOWN]
var r=s(e=e.toLowerCase(),u.filter(function(e){return e.userConfigured}))
if(r)return[r,t.MIME_TEXT]
var i=s(e,u.filter(function(e){return!e.userConfigured}))
if(i)return[i,t.MIME_TEXT]
if(n){var o=a(n)
if(o)return[o,t.MIME_TEXT]}return[t.MIME_UNKNOWN]},t.isBinaryMime=function(e){return!!e&&(r.isArray(e)?e:e.split(",").map(function(e){return e.trim()})).indexOf(t.MIME_BINARY)>=0},t.isUnspecific=function e(n){return!n||("string"==typeof n?n===t.MIME_BINARY||n===t.MIME_TEXT||n===t.MIME_UNKNOWN:1===n.length&&e(n[0]))},t.suggestFilename=function(e,t){for(var n=0;n<u.length;n++){var r=u[n]
if(!r.userConfigured&&r.mime===e&&r.extension)return t+r.extension}return null}}),define(e[12],t([1,0,9]),function(e,t,n){"use strict"
function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return t.forEach(function(t){return Object.keys(t).forEach(function(n){return e[n]=t[n]})}),e}function i(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0
return t}t.clone=function e(t){if(!t||"object"!=typeof t)return t
if(t instanceof RegExp)return t
var n=Array.isArray(t)?[]:{}
return Object.keys(t).forEach(function(r){t[r]&&"object"==typeof t[r]?n[r]=e(t[r]):n[r]=t[r]}),n},t.deepClone=function e(t){if(!t||"object"!=typeof t)return t
var n=Array.isArray(t)?[]:{}
return Object.getOwnPropertyNames(t).forEach(function(r){t[r]&&"object"==typeof t[r]?n[r]=e(t[r]):n[r]=t[r]}),n}
var o=Object.prototype.hasOwnProperty
t.cloneAndChange=function(e,t){return function e(t,r,i){if(n.isUndefinedOrNull(t))return t
var s=r(t)
if(void 0!==s)return s
if(n.isArray(t)){for(var a=[],u=0;u<t.length;u++)a.push(e(t[u],r,i))
return a}if(n.isObject(t)){if(i.indexOf(t)>=0)throw new Error("Cannot clone recursive data-structure")
i.push(t)
var c={}
for(var l in t)o.call(t,l)&&(c[l]=e(t[l],r,i))
return i.pop(),c}return t}(e,t,[])},t.mixin=function e(t,r,i){return void 0===i&&(i=!0),n.isObject(t)?(n.isObject(r)&&Object.keys(r).forEach(function(o){o in t?i&&(n.isObject(t[o])&&n.isObject(r[o])?e(t[o],r[o],i):t[o]=r[o]):t[o]=r[o]}),t):r},t.assign=r,t.toObject=function(e,t,n){return void 0===n&&(n=function(e){return e}),e.reduce(function(e,i){return r(e,((o={})[t(i)]=n(i),o))
var o},Object.create(null))},t.equals=function e(t,n){if(t===n)return!0
if(null==t||null==n)return!1
if(typeof t!=typeof n)return!1
if("object"!=typeof t)return!1
if(Array.isArray(t)!==Array.isArray(n))return!1
var r,i
if(Array.isArray(t)){if(t.length!==n.length)return!1
for(r=0;r<t.length;r++)if(!e(t[r],n[r]))return!1}else{var o=[]
for(i in t)o.push(i)
o.sort()
var s=[]
for(i in n)s.push(i)
if(s.sort(),!e(o,s))return!1
for(r=0;r<o.length;r++)if(!e(t[o[r]],n[o[r]]))return!1}return!0},t.ensureProperty=function(e,t,n){void 0===e[t]&&(e[t]=n)},t.arrayToHash=i,t.createKeywordMatcher=function(e,t){void 0===t&&(t=!1),t&&(e=e.map(function(e){return e.toLowerCase()}))
var n=i(e)
return t?function(e){return void 0!==n[e.toLowerCase()]&&n.hasOwnProperty(e.toLowerCase())}:function(e){return void 0!==n[e]&&n.hasOwnProperty(e)}},t.derive=function(e,t){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
t=t||function(){}
var r=e.prototype,i=t.prototype
for(var n in t.prototype=Object.create(r),i)i.hasOwnProperty(n)&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(i,n))
Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,configurable:!0,enumerable:!0})},t.safeStringify=function(e){var t=[]
return JSON.stringify(e,function(e,r){if(n.isObject(r)||Array.isArray(r)){if(-1!==t.indexOf(r))return"[Circular]"
t.push(r)}return r})},t.getOrDefault=function(e,t,n){void 0===n&&(n=null)
var r=t(e)
return void 0===r?n:r}}),define(e[20],t([1,0,10]),function(e,t,n){"use strict"
function r(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return encodeURIComponent(e).replace(/[!'()*]/g,r)}function o(e){return e}var s=function(){function e(){this._scheme=e._empty,this._authority=e._empty,this._path=e._empty,this._query=e._empty,this._fragment=e._empty,this._formatted=null,this._fsPath=null}return Object.defineProperty(e.prototype,"scheme",{get:function(){return this._scheme},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"authority",{get:function(){return this._authority},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"query",{get:function(){return this._query},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fragment",{get:function(){return this._fragment},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fsPath",{get:function(){var t
this._fsPath||(t=this._authority&&"file"===this.scheme?"//"+this._authority+this._path:e._driveLetterPath.test(this._path)?this._path[1].toLowerCase()+this._path.substr(2):this._path,n.isWindows&&(t=t.replace(/\//g,"\\")),this._fsPath=t)
return this._fsPath},enumerable:!0,configurable:!0}),e.prototype.with=function(t){if(!t)return this
var n=t.scheme||this.scheme,r=t.authority||this.authority,i=t.path||this.path,o=t.query||this.query,s=t.fragment||this.fragment
if(n===this.scheme&&r===this.authority&&i===this.path&&o===this.query&&s===this.fragment)return this
var a=new e
return a._scheme=n,a._authority=r,a._path=i,a._query=o,a._fragment=s,e._validate(a),a},e.parse=function(t){var n=new e,r=e._parseComponents(t)
return n._scheme=r.scheme,n._authority=decodeURIComponent(r.authority),n._path=decodeURIComponent(r.path),n._query=decodeURIComponent(r.query),n._fragment=decodeURIComponent(r.fragment),e._validate(n),n},e.file=function(t){var n=new e
if(n._scheme="file",(t=t.replace(/\\/g,e._slash))[0]===e._slash&&t[0]===t[1]){var r=t.indexOf(e._slash,2);-1===r?n._authority=t.substring(2):(n._authority=t.substring(2,r),n._path=t.substring(r))}else n._path=t
return n._path[0]!==e._slash&&(n._path=e._slash+n._path),e._validate(n),n},e._parseComponents=function(t){var n={scheme:e._empty,authority:e._empty,path:e._empty,query:e._empty,fragment:e._empty},r=e._regexp.exec(t)
return r&&(n.scheme=r[2]||n.scheme,n.authority=r[4]||n.authority,n.path=r[5]||n.path,n.query=r[7]||n.query,n.fragment=r[9]||n.fragment),n},e.from=function(t){return(new e).with(t)},e._validate=function(e){if(e.authority&&e.path&&"/"!==e.path[0])throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
if(!e.authority&&0===e.path.indexOf("//"))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')},e.prototype.toString=function(t){return void 0===t&&(t=!1),t?e._asFormatted(this,!0):(this._formatted||(this._formatted=e._asFormatted(this,!1)),this._formatted)},e._asFormatted=function(t,n){var s=n?o:i,a=[],u=t.scheme,c=t.authority,l=t.path,h=t.query,d=t.fragment;(u&&a.push(u,":"),(c||"file"===u)&&a.push("//"),c)&&(-1===(g=(c=c.toLowerCase()).indexOf(":"))?a.push(s(c)):a.push(s(c.substr(0,g)),c.substr(g)))
if(l){var f=e._upperCaseDrive.exec(l)
f&&(l=f[1]+f[2].toLowerCase()+l.substr(f[1].length+f[2].length))
for(var p=0;;){var g
if(-1===(g=l.indexOf(e._slash,p))){a.push(s(l.substring(p)).replace(/[#?]/,r))
break}a.push(s(l.substring(p,g)).replace(/[#?]/,r),e._slash),p=g+1}}return h&&a.push("?",s(h)),d&&a.push("#",s(d)),a.join(e._empty)},e.prototype.toJSON=function(){return{scheme:this.scheme,authority:this.authority,path:this.path,fsPath:this.fsPath,query:this.query,fragment:this.fragment,external:this.toString(),$mid:1}},e.revive=function(t){var n=new e
return n._scheme=t.scheme,n._authority=t.authority,n._path=t.path,n._query=t.query,n._fragment=t.fragment,n._fsPath=t.fsPath,n._formatted=t.external,e._validate(n),n},e._empty="",e._slash="/",e._regexp=/^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,e._driveLetterPath=/^\/[a-zA-z]:/,e._upperCaseDrive=/^(\/)?([A-Z]:)/,e}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=s}),define(e[89],t([1,0,20]),function(e,t,n){"use strict"
function r(e,t){return t instanceof RegExp?{$mid:2,source:t.source,flags:(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")}:t}function i(e,t){var r
return null!=t&&(r=t.$mid),1===r?n.default.revive(t):2===r?new RegExp(t.source,t.flags):t}t.stringify=function(e){return JSON.stringify(e,r)},t.parse=function(e){return JSON.parse(e,i)}}),function(){var e={"WinJS/Core/_WinJS":{}},t=function(t,n,r){var i={},o=!1,s=n.map(function(t){return"exports"===t?(o=!0,i):e[t]}),a=r.apply({},s)
e[t]=o?i:a}
t("WinJS/Core/_Global",[],function(){"use strict"
return"undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:{}}),t("WinJS/Core/_BaseCoreUtils",["WinJS/Core/_Global"],function(e){"use strict"
return{hasWinRT:!!e.Windows,markSupportedForProcessing:function(e){return e.supportedForProcessing=!0,e},_setImmediate:e.setImmediate?e.setImmediate.bind(e):function(t){e.setTimeout(t,0)}}}),t("WinJS/Core/_WriteProfilerMark",["WinJS/Core/_Global"],function(e){"use strict"
return e.msWriteProfilerMark||function(){}}),t("WinJS/Core/_Base",["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"],function(e,t,n,r){"use strict"
function i(e,t,n){var r,i,o,s=Object.keys(t),a=Array.isArray(e)
for(i=0,o=s.length;o>i;i++){var u=s[i],c=95!==u.charCodeAt(0),l=t[u]
!l||"object"!=typeof l||void 0===l.value&&"function"!=typeof l.get&&"function"!=typeof l.set?c?a?e.forEach(function(e){e[u]=l}):e[u]=l:(r=r||{})[u]={value:l,enumerable:c,configurable:!0,writable:!0}:(void 0===l.enumerable&&(l.enumerable=c),n&&l.setName&&"function"==typeof l.setName&&l.setName(n+"."+u),(r=r||{})[u]=l)}r&&(a?e.forEach(function(e){Object.defineProperties(e,r)}):Object.defineProperties(e,r))}return function(){function n(n,r){var i=n||{}
if(r){var o=r.split(".")
i===t&&"WinJS"===o[0]&&(i=e,o.splice(0,1))
for(var s=0,a=o.length;a>s;s++){var u=o[s]
i[u]||Object.defineProperty(i,u,{value:{},writable:!1,enumerable:!0,configurable:!0}),i=i[u]}}return i}function o(e,t,r){var o=n(e,t)
return r&&i(o,r,t||"<ANONYMOUS>"),o}var s=e
s.Namespace||(s.Namespace=Object.create(Object.prototype))
var a={uninitialized:1,working:2,initialized:3}
Object.defineProperties(s.Namespace,{defineWithParent:{value:o,writable:!0,enumerable:!0,configurable:!0},define:{value:function(e,n){return o(t,e,n)},writable:!0,enumerable:!0,configurable:!0},_lazy:{value:function(e){var t,n,i=a.uninitialized
return{setName:function(e){t=e},get:function(){switch(i){case a.initialized:return n
case a.uninitialized:i=a.working
try{r("WinJS.Namespace._lazy:"+t+",StartTM"),n=e()}finally{r("WinJS.Namespace._lazy:"+t+",StopTM"),i=a.uninitialized}return e=null,i=a.initialized,n
case a.working:throw"Illegal: reentrancy on initialization"
default:throw"Illegal"}},set:function(e){switch(i){case a.working:throw"Illegal: reentrancy on initialization"
default:i=a.initialized,n=e}},enumerable:!0,configurable:!0}},writable:!0,enumerable:!0,configurable:!0},_moduleDefine:{value:function(e,r,o){var s=[e],a=null
return r&&(a=n(t,r),s.push(a)),i(s,o,r||"<ANONYMOUS>"),a},writable:!0,enumerable:!0,configurable:!0}})}(),function(){function t(e,t,r){return e=e||function(){},n.markSupportedForProcessing(e),t&&i(e.prototype,t),r&&i(e,r),e}e.Namespace.define("WinJS.Class",{define:t,derive:function(e,r,o,s){if(e){r=r||function(){}
var a=e.prototype
return r.prototype=Object.create(a),n.markSupportedForProcessing(r),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,configurable:!0,enumerable:!0}),o&&i(r.prototype,o),s&&i(r,s),r}return t(r,o,s)},mix:function(e){var t,n
for(e=e||function(){},t=1,n=arguments.length;n>t;t++)i(e.prototype,arguments[t])
return e}})}(),{Namespace:e.Namespace,Class:e.Class}}),t("WinJS/Core/_ErrorFromName",["WinJS/Core/_Base"],function(e){"use strict"
var t=e.Class.derive(Error,function(e,t){this.name=e,this.message=t||e},{},{supportedForProcessing:!1})
return e.Namespace.define("WinJS",{ErrorFromName:t}),t}),t("WinJS/Core/_Events",["exports","WinJS/Core/_Base"],function(e,t){"use strict"
function n(e){var t="_on"+e+"state"
return{get:function(){var e=this[t]
return e&&e.userHandler},set:function(n){var r=this[t]
n?(r||(r={wrapper:function(e){return r.userHandler(e)},userHandler:n},Object.defineProperty(this,t,{value:r,enumerable:!1,writable:!0,configurable:!0}),this.addEventListener(e,r.wrapper,!1)),r.userHandler=n):r&&(this.removeEventListener(e,r.wrapper,!1),this[t]=null)},enumerable:!0}}var r=t.Class.define(function(e,t,n){this.detail=t,this.target=n,this.timeStamp=Date.now(),this.type=e},{bubbles:{value:!1,writable:!1},cancelable:{value:!1,writable:!1},currentTarget:{get:function(){return this.target}},defaultPrevented:{get:function(){return this._preventDefaultCalled}},trusted:{value:!1,writable:!1},eventPhase:{value:0,writable:!1},target:null,timeStamp:null,type:null,preventDefault:function(){this._preventDefaultCalled=!0},stopImmediatePropagation:function(){this._stopImmediatePropagationCalled=!0},stopPropagation:function(){}},{supportedForProcessing:!1}),i={_listeners:null,addEventListener:function(e,t,n){n=n||!1,this._listeners=this._listeners||{}
for(var r=this._listeners[e]=this._listeners[e]||[],i=0,o=r.length;o>i;i++){var s=r[i]
if(s.useCapture===n&&s.listener===t)return}r.push({listener:t,useCapture:n})},dispatchEvent:function(e,t){var n=this._listeners&&this._listeners[e]
if(n){for(var i=new r(e,t,this),o=0,s=(n=n.slice(0,n.length)).length;s>o&&!i._stopImmediatePropagationCalled;o++)n[o].listener(i)
return i.defaultPrevented||!1}return!1},removeEventListener:function(e,t,n){n=n||!1
var r=this._listeners&&this._listeners[e]
if(r)for(var i=0,o=r.length;o>i;i++){var s=r[i]
if(s.listener===t&&s.useCapture===n){r.splice(i,1),0===r.length&&delete this._listeners[e]
break}}}}
t.Namespace._moduleDefine(e,"WinJS.Utilities",{_createEventProperty:n,createEventProperties:function(){for(var e={},t=0,r=arguments.length;r>t;t++){var i=arguments[t]
e["on"+i]=n(i)}return e},eventMixin:i})}),t("WinJS/Core/_Trace",["WinJS/Core/_Global"],function(e){"use strict"
function t(e){return e}return{_traceAsyncOperationStarting:e.Debug&&e.Debug.msTraceAsyncOperationStarting&&e.Debug.msTraceAsyncOperationStarting.bind(e.Debug)||t,_traceAsyncOperationCompleted:e.Debug&&e.Debug.msTraceAsyncOperationCompleted&&e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug)||t,_traceAsyncCallbackStarting:e.Debug&&e.Debug.msTraceAsyncCallbackStarting&&e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug)||t,_traceAsyncCallbackCompleted:e.Debug&&e.Debug.msTraceAsyncCallbackCompleted&&e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug)||t}}),t("WinJS/Promise/_StateMachine",["WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_Base","WinJS/Core/_ErrorFromName","WinJS/Core/_Events","WinJS/Core/_Trace"],function(e,t,n,r,i,o){"use strict"
function s(){}function a(e,t){var n
n=t&&"object"==typeof t&&"function"==typeof t.then?O:D,e._value=t,e._setState(n)}function u(e,t,n,r,i,o){return{exception:e,error:t,promise:n,handler:o,id:r,parent:i}}function c(e,t,n,r){var i=n._isException
return u(i?t:null,i?null:t,e,n._errorId,n,r)}function l(e,t,n){var r=n._isException,i=n._errorId
return b(e,i,r),u(r?t:null,r?null:t,e,i,n)}function h(e,t){var n=++F
return b(e,n),u(null,t,e,n)}function d(e,t){var n=++F
return b(e,n,!0),u(t,null,e,n)}function f(e,t,n,r){y(e,{c:t,e:n,p:r,asyncOpID:o._traceAsyncOperationStarting("WinJS.Promise.done")})}function p(e,t,n,r){e._value=t,v(e,t,n,r),e._setState(W)}function g(t,n){var r,i,s=t._value,a=t._listeners
if(a)for(t._listeners=null,r=0,i=Array.isArray(a)?a.length:1;i>r;r++){var u=1===i?a:a[r],c=u.c,l=u.promise
if(o._traceAsyncOperationCompleted(u.asyncOpID,e.Debug&&e.Debug.MS_ASYNC_OP_STATUS_SUCCESS),l){o._traceAsyncCallbackStarting(u.asyncOpID)
try{l._setCompleteValue(c?c(s):s)}catch(e){l._setExceptionValue(e)}finally{o._traceAsyncCallbackCompleted()}l._state!==O&&l._listeners&&n.push(l)}else G.prototype.done.call(t,c)}}function m(t,n){var r,i,s=t._value,a=t._listeners
if(a)for(t._listeners=null,r=0,i=Array.isArray(a)?a.length:1;i>r;r++){var u=1===i?a:a[r],l=u.e,h=u.promise,d=e.Debug&&(s&&s.name===I?e.Debug.MS_ASYNC_OP_STATUS_CANCELED:e.Debug.MS_ASYNC_OP_STATUS_ERROR)
if(o._traceAsyncOperationCompleted(u.asyncOpID,d),h){var f=!1
try{l?(o._traceAsyncCallbackStarting(u.asyncOpID),f=!0,l.handlesOnError||v(h,s,c,t,l),h._setCompleteValue(l(s))):h._setChainedErrorValue(s,t)}catch(e){h._setExceptionValue(e)}finally{f&&o._traceAsyncCallbackCompleted()}h._state!==O&&h._listeners&&n.push(h)}else H.prototype.done.call(t,null,l)}}function v(e,t,n,r,i){if(T._listeners[x]){if(t instanceof Error&&t.message===I)return
T.dispatchEvent(x,n(e,t,r,i))}}function _(e,t){var n,r,i=e._listeners
if(i)for(n=0,r=Array.isArray(i)?i.length:1;r>n;n++){var o=1===r?i:i[n],s=o.p
if(s)try{s(t)}catch(e){}o.c||o.e||!o.promise||o.promise._progress(t)}}function y(e,t){var n=e._listeners
n?(n=Array.isArray(n)?n:[n]).push(t):n=t,e._listeners=n}function b(e,t,n){e._isException=n||!1,e._errorId=t}function k(e,t,n,r){e._value=t,v(e,t,n,r),e._setState(B)}function C(e,t){var n
n=t&&"object"==typeof t&&"function"==typeof t.then?O:z,e._value=t,e._setState(n)}function E(e,t,n,r){var i=new q(e)
return y(e,{promise:i,c:t,e:n,p:r,asyncOpID:o._traceAsyncOperationStarting("WinJS.Promise.then")}),i}function S(n){var r
return new $(function(i){n?r=e.setTimeout(i,n):t._setImmediate(i)},function(){r&&e.clearTimeout(r)})}e.Debug&&(e.Debug.setNonUserCodeExceptions=!0)
var T=new(n.Class.mix(n.Class.define(null,{},{supportedForProcessing:!1}),i.eventMixin))
T._listeners={}
var x="error",I="Canceled",L=!1,w={promise:1,thenPromise:2,errorPromise:4,exceptionPromise:8,completePromise:16}
w.all=w.promise|w.thenPromise|w.errorPromise|w.exceptionPromise|w.completePromise
var M,A,O,N,R,P,D,z,W,B,F=1
M={name:"created",enter:function(e){e._setState(A)},cancel:s,done:s,then:s,_completed:s,_error:s,_notify:s,_progress:s,_setCompleteValue:s,_setErrorValue:s},A={name:"working",enter:s,cancel:function(e){e._setState(R)},done:f,then:E,_completed:a,_error:p,_notify:s,_progress:_,_setCompleteValue:C,_setErrorValue:k},O={name:"waiting",enter:function(e){var t=e._value
if(t instanceof q&&t._state!==B&&t._state!==z)y(t,{promise:e})
else{var n=function(r){t._errorId?e._chainedError(r,t):(v(e,r,c,t,n),e._error(r))}
n.handlesOnError=!0,t.then(e._completed.bind(e),n,e._progress.bind(e))}},cancel:function(e){e._setState(N)},done:f,then:E,_completed:a,_error:p,_notify:s,_progress:_,_setCompleteValue:C,_setErrorValue:k},N={name:"waiting_canceled",enter:function(e){e._setState(P)
var t=e._value
t.cancel&&t.cancel()},cancel:s,done:f,then:E,_completed:a,_error:p,_notify:s,_progress:_,_setCompleteValue:C,_setErrorValue:k},R={name:"canceled",enter:function(e){e._setState(P),e._cancelAction()},cancel:s,done:f,then:E,_completed:a,_error:p,_notify:s,_progress:_,_setCompleteValue:C,_setErrorValue:k},P={name:"canceling",enter:function(e){var t=new Error(I)
t.name=t.message,e._value=t,e._setState(W)},cancel:s,done:s,then:s,_completed:s,_error:s,_notify:s,_progress:s,_setCompleteValue:s,_setErrorValue:s},D={name:"complete_notify",enter:function(e){if(e.done=G.prototype.done,e.then=G.prototype.then,e._listeners)for(var t,n=[e];n.length;)(t=n.shift())._state._notify(t,n)
e._setState(z)},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:g,_progress:s,_setCompleteValue:s,_setErrorValue:s},z={name:"success",enter:function(e){e.done=G.prototype.done,e.then=G.prototype.then,e._cleanupAction()},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:g,_progress:s,_setCompleteValue:s,_setErrorValue:s},W={name:"error_notify",enter:function(e){if(e.done=H.prototype.done,e.then=H.prototype.then,e._listeners)for(var t,n=[e];n.length;)(t=n.shift())._state._notify(t,n)
e._setState(B)},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:m,_progress:s,_setCompleteValue:s,_setErrorValue:s},B={name:"error",enter:function(e){e.done=H.prototype.done,e.then=H.prototype.then,e._cleanupAction()},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:m,_progress:s,_setCompleteValue:s,_setErrorValue:s}
var j,U=n.Class.define(null,{_listeners:null,_nextState:null,_state:null,_value:null,cancel:function(){this._state.cancel(this),this._run()},done:function(e,t,n){this._state.done(this,e,t,n)},then:function(e,t,n){return this._state.then(this,e,t,n)},_chainedError:function(e,t){var n=this._state._error(this,e,l,t)
return this._run(),n},_completed:function(e){var t=this._state._completed(this,e)
return this._run(),t},_error:function(e){var t=this._state._error(this,e,h)
return this._run(),t},_progress:function(e){this._state._progress(this,e)},_setState:function(e){this._nextState=e},_setCompleteValue:function(e){this._state._setCompleteValue(this,e),this._run()},_setChainedErrorValue:function(e,t){var n=this._state._setErrorValue(this,e,l,t)
return this._run(),n},_setExceptionValue:function(e){var t=this._state._setErrorValue(this,e,d)
return this._run(),t},_run:function(){for(;this._nextState;)this._state=this._nextState,this._nextState=null,this._state.enter(this)}},{supportedForProcessing:!1}),q=n.Class.derive(U,function(e){L&&(!0===L||L&w.thenPromise)&&(this._stack=$._getStack()),this._creator=e,this._setState(M),this._run()},{_creator:null,_cancelAction:function(){this._creator&&this._creator.cancel()},_cleanupAction:function(){this._creator=null}},{supportedForProcessing:!1}),H=n.Class.define(function(e){L&&(!0===L||L&w.errorPromise)&&(this._stack=$._getStack()),this._value=e,v(this,e,h)},{cancel:function(){},done:function(e,t){var n=this._value
if(t)try{t.handlesOnError||v(null,n,c,this,t)
var r=t(n)
return void(r&&"object"==typeof r&&"function"==typeof r.done&&r.done())}catch(e){n=e}n instanceof Error&&n.message===I||$._doneHandler(n)},then:function(e,t){if(!t)return this
var n,r=this._value
try{t.handlesOnError||v(null,r,c,this,t),n=new G(t(r))}catch(e){n=e===r?this:new V(e)}return n}},{supportedForProcessing:!1}),V=n.Class.derive(H,function(e){L&&(!0===L||L&w.exceptionPromise)&&(this._stack=$._getStack()),this._value=e,v(this,e,d)},{},{supportedForProcessing:!1}),G=n.Class.define(function(e){if(L&&(!0===L||L&w.completePromise)&&(this._stack=$._getStack()),e&&"object"==typeof e&&"function"==typeof e.then){var t=new q(null)
return t._setCompleteValue(e),t}this._value=e},{cancel:function(){},done:function(e){if(e)try{var t=e(this._value)
t&&"object"==typeof t&&"function"==typeof t.done&&t.done()}catch(e){$._doneHandler(e)}},then:function(e){try{var t=e?e(this._value):this._value
return t===this._value?this:new G(t)}catch(e){return new V(e)}}},{supportedForProcessing:!1}),$=n.Class.derive(U,function(e,t){L&&(!0===L||L&w.promise)&&(this._stack=$._getStack()),this._oncancel=t,this._setState(M),this._run()
try{e(this._completed.bind(this),this._error.bind(this),this._progress.bind(this))}catch(e){this._setExceptionValue(e)}},{_oncancel:null,_cancelAction:function(){try{if(!this._oncancel)throw new Error("Promise did not implement oncancel")
this._oncancel()}catch(e){e.message,e.stack,T.dispatchEvent("error",e)}},_cleanupAction:function(){this._oncancel=null}},{addEventListener:function(e,t,n){T.addEventListener(e,t,n)},any:function(e){return new $(function(t,n){var r=Object.keys(e)
0===r.length&&t()
var i=0
r.forEach(function(o){$.as(e[o]).then(function(){t({key:o,value:e[o]})},function(s){return s instanceof Error&&s.name===I?void(++i===r.length&&t($.cancel)):void n({key:o,value:e[o]})})})},function(){Object.keys(e).forEach(function(t){var n=$.as(e[t])
"function"==typeof n.cancel&&n.cancel()})})},as:function(e){return e&&"object"==typeof e&&"function"==typeof e.then?e:new G(e)},cancel:{get:function(){return j=j||new H(new r(I))}},dispatchEvent:function(e,t){return T.dispatchEvent(e,t)},is:function(e){return e&&"object"==typeof e&&"function"==typeof e.then},join:function(e){return new $(function(t,n,r){var i=Object.keys(e),o=Array.isArray(e)?[]:{},s=Array.isArray(e)?[]:{},a=0,u=i.length,c=function(e){if(0==--u){var a=Object.keys(o).length
if(0===a)t(s)
else{var c=0
i.forEach(function(e){var t=o[e]
t instanceof Error&&t.name===I&&c++}),c===a?t($.cancel):n(o)}}else r({Key:e,Done:!0})}
return i.forEach(function(t){var n=e[t]
void 0===n?a++:$.then(n,function(e){s[t]=e,c(t)},function(e){o[t]=e,c(t)})}),0===(u-=a)?void t(s):void 0},function(){Object.keys(e).forEach(function(t){var n=$.as(e[t])
"function"==typeof n.cancel&&n.cancel()})})},removeEventListener:function(e,t,n){T.removeEventListener(e,t,n)},supportedForProcessing:!1,then:function(e,t,n,r){return $.as(e).then(t,n,r)},thenEach:function(e,t,n,r){var i=Array.isArray(e)?[]:{}
return Object.keys(e).forEach(function(o){i[o]=$.as(e[o]).then(t,n,r)}),$.join(i)},timeout:function(e,t){var n=S(e)
return t?function(e,t){var n=function(){e.cancel()}
return e.then(function(){t.cancel()}),t.then(n,n),t}(n,t):n},wrap:function(e){return new G(e)},wrapError:function(e){return new H(e)},_veryExpensiveTagWithStack:{get:function(){return L},set:function(e){L=e}},_veryExpensiveTagWithStack_tag:w,_getStack:function(){if(e.Debug&&e.Debug.debuggerEnabled)try{throw new Error}catch(e){return e.stack}},_cancelBlocker:function(e,t){if(!$.is(e))return $.wrap(e)
var n,r,i=new $(function(e,t){n=e,r=t},function(){n=null,r=null,t&&t()})
return e.then(function(e){n&&n(e)},function(e){r&&r(e)}),i}})
return Object.defineProperties($,i.createEventProperties(x)),$._doneHandler=function(e){t._setImmediate(function(){throw e})},{PromiseStateMachine:U,Promise:$,state_created:M}}),t("WinJS/Promise",["WinJS/Core/_Base","WinJS/Promise/_StateMachine"],function(e,t){"use strict"
return e.Namespace.define("WinJS",{Promise:t.Promise}),t.Promise})
var n=e["WinJS/Core/_WinJS"]
"undefined"==typeof exports&&"function"==typeof define&&define.amd?define("vs/base/common/winjs.base.raw",n):module.exports=n,"undefined"!=typeof process&&"function"==typeof process.nextTick&&(e["WinJS/Core/_BaseCoreUtils"]._setImmediate=function(e){return process.nextTick(e)})}(),define(e[91],t([1,0]),function(e,t){"use strict"
t.MessageType={INITIALIZE:"$initialize",REPLY:"$reply",PRINT:"$print"},t.ReplyType={COMPLETE:"complete",ERROR:"error",PROGRESS:"progress"},t.PrintType={LOG:"log",DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"}}),define(e[30],t([1,0]),function(e,t){"use strict"
!function(e){e.findIndexInSegmentsArray=function(e,t){var n=0,r=e.length-1
if(0>=r)return 0
for(;r>n;){var i=n+Math.ceil((r-n)/2)
e[i].startIndex>t?r=i-1:n=i}return n}}(t.Arrays||(t.Arrays={}))}),define(e[18],t([1,0,30]),function(e,t,n){"use strict"
var r=function(){function e(e,t){this.startIndex=0|e,this.mode=t,this.modeId=t.getId()}return e.findIndexInSegmentsArray=function(e,t){return n.Arrays.findIndexInSegmentsArray(e,t)},e.create=function(t){for(var n=[],r=0,i=t.length;i>r;r++){var o=t[r]
n.push(new e(o.startIndex,o.mode))}return n},e}()
t.ModeTransition=r}),define(e[22],t([1,0]),function(e,t){"use strict"
var n=function(){function e(e,t){this.lineNumber=e,this.column=t}return e.prototype.equals=function(t){return e.equals(this,t)},e.equals=function(e,t){return!e&&!t||!!e&&!!t&&e.lineNumber===t.lineNumber&&e.column===t.column},e.prototype.isBefore=function(t){return e.isBefore(this,t)},e.isBefore=function(e,t){return e.lineNumber<t.lineNumber||!(t.lineNumber<e.lineNumber)&&e.column<t.column},e.prototype.isBeforeOrEqual=function(t){return e.isBeforeOrEqual(this,t)},e.isBeforeOrEqual=function(e,t){return e.lineNumber<t.lineNumber||!(t.lineNumber<e.lineNumber)&&e.column<=t.column},e.prototype.clone=function(){return new e(this.lineNumber,this.column)},e.prototype.toString=function(){return"("+this.lineNumber+","+this.column+")"},e.lift=function(t){return new e(t.lineNumber,t.column)},e.isIPosition=function(e){return e&&"number"==typeof e.lineNumber&&"number"==typeof e.column},e}()
t.Position=n}),define(e[29],t([1,0,22]),function(e,t,n){"use strict"
var r=function(){function e(e,t,n,r){e>n||e===n&&t>r?(this.startLineNumber=n,this.startColumn=r,this.endLineNumber=e,this.endColumn=t):(this.startLineNumber=e,this.startColumn=t,this.endLineNumber=n,this.endColumn=r)}return e.prototype.isEmpty=function(){return e.isEmpty(this)},e.isEmpty=function(e){return e.startLineNumber===e.endLineNumber&&e.startColumn===e.endColumn},e.prototype.containsPosition=function(t){return e.containsPosition(this,t)},e.containsPosition=function(e,t){return!(t.lineNumber<e.startLineNumber||t.lineNumber>e.endLineNumber)&&(!(t.lineNumber===e.startLineNumber&&t.column<e.startColumn)&&!(t.lineNumber===e.endLineNumber&&t.column>e.endColumn))},e.prototype.containsRange=function(t){return e.containsRange(this,t)},e.containsRange=function(e,t){return!(t.startLineNumber<e.startLineNumber||t.endLineNumber<e.startLineNumber)&&(!(t.startLineNumber>e.endLineNumber||t.endLineNumber>e.endLineNumber)&&(!(t.startLineNumber===e.startLineNumber&&t.startColumn<e.startColumn)&&!(t.endLineNumber===e.endLineNumber&&t.endColumn>e.endColumn)))},e.prototype.plusRange=function(t){return e.plusRange(this,t)},e.plusRange=function(t,n){var r,i,o,s
return n.startLineNumber<t.startLineNumber?(r=n.startLineNumber,i=n.startColumn):n.startLineNumber===t.startLineNumber?(r=n.startLineNumber,i=Math.min(n.startColumn,t.startColumn)):(r=t.startLineNumber,i=t.startColumn),n.endLineNumber>t.endLineNumber?(o=n.endLineNumber,s=n.endColumn):n.endLineNumber===t.endLineNumber?(o=n.endLineNumber,s=Math.max(n.endColumn,t.endColumn)):(o=t.endLineNumber,s=t.endColumn),new e(r,i,o,s)},e.prototype.intersectRanges=function(t){return e.intersectRanges(this,t)},e.intersectRanges=function(t,n){var r=t.startLineNumber,i=t.startColumn,o=t.endLineNumber,s=t.endColumn,a=n.startLineNumber,u=n.startColumn,c=n.endLineNumber,l=n.endColumn
return a>r?(r=a,i=u):r===a&&(i=Math.max(i,u)),o>c?(o=c,s=l):o===c&&(s=Math.min(s,l)),r>o?null:r===o&&i>s?null:new e(r,i,o,s)},e.prototype.equalsRange=function(t){return e.equalsRange(this,t)},e.equalsRange=function(e,t){return!!e&&!!t&&e.startLineNumber===t.startLineNumber&&e.startColumn===t.startColumn&&e.endLineNumber===t.endLineNumber&&e.endColumn===t.endColumn},e.prototype.getEndPosition=function(){return new n.Position(this.endLineNumber,this.endColumn)},e.prototype.getStartPosition=function(){return new n.Position(this.startLineNumber,this.startColumn)},e.prototype.cloneRange=function(){return new e(this.startLineNumber,this.startColumn,this.endLineNumber,this.endColumn)},e.prototype.toString=function(){return"["+this.startLineNumber+","+this.startColumn+" -> "+this.endLineNumber+","+this.endColumn+"]"},e.prototype.setEndPosition=function(t,n){return new e(this.startLineNumber,this.startColumn,t,n)},e.prototype.setStartPosition=function(t,n){return new e(t,n,this.endLineNumber,this.endColumn)},e.prototype.collapseToStart=function(){return e.collapseToStart(this)},e.collapseToStart=function(t){return new e(t.startLineNumber,t.startColumn,t.startLineNumber,t.startColumn)},e.lift=function(t){return t?new e(t.startLineNumber,t.startColumn,t.endLineNumber,t.endColumn):null},e.isIRange=function(e){return e&&"number"==typeof e.startLineNumber&&"number"==typeof e.startColumn&&"number"==typeof e.endLineNumber&&"number"==typeof e.endColumn},e.areIntersectingOrTouching=function(e,t){return!(e.endLineNumber<t.startLineNumber||e.endLineNumber===t.startLineNumber&&e.endColumn<t.startColumn)&&!(t.endLineNumber<e.startLineNumber||t.endLineNumber===e.startLineNumber&&t.endColumn<e.startColumn)},e.compareRangesUsingStarts=function(e,t){var n=0|e.startLineNumber,r=0|t.startLineNumber,i=0|e.startColumn,o=0|t.startColumn,s=0|e.endLineNumber,a=0|t.endLineNumber,u=0|e.endColumn,c=0|t.endColumn
return n===r?i===o?s===a?u-c:s-a:i-o:n-r},e.compareRangesUsingEnds=function(e,t){return e.endLineNumber===t.endLineNumber?e.endColumn===t.endColumn?e.startLineNumber===t.startLineNumber?e.startColumn-t.startColumn:e.startLineNumber-t.startLineNumber:e.endColumn-t.endColumn:e.endLineNumber-t.endLineNumber},e.spansMultipleLines=function(e){return e.endLineNumber>e.startLineNumber},e}()
t.Range=r}),define(e[50],t([1,0,30]),function(e,t,n){"use strict"
var r=function(){function e(e,t){this.startIndex=0|e,this.type=t.replace(/[^a-z0-9\-]/gi," ")}return e.prototype.equals=function(e){return this.startIndex===e.startIndex&&this.type===e.type},e.findIndexInSegmentsArray=function(e,t){return n.Arrays.findIndexInSegmentsArray(e,t)},e.equalsArray=function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;n>r;r++)if(!e[r].equals(t[r]))return!1
return!0},e}()
t.ViewLineToken=r
var i=function(){function e(e,t,n){this._lineTokens=e,this._fauxIndentLength=0|t,this._textLength=0|n}return e.prototype.getTokens=function(){return this._lineTokens},e.prototype.getFauxIndentLength=function(){return this._fauxIndentLength},e.prototype.getTextLength=function(){return this._textLength},e.prototype.equals=function(e){return this._fauxIndentLength===e._fauxIndentLength&&this._textLength===e._textLength&&r.equalsArray(this._lineTokens,e._lineTokens)},e.prototype.findIndexOfOffset=function(e){return r.findIndexInSegmentsArray(this._lineTokens,e)},e}()
t.ViewLineTokens=i}),define(e[19],t([1,0]),function(e,t){"use strict"
!function(e){e[e.None=0]="None",e[e.Same=1]="Same",e[e.Indent=2]="Indent"}(t.WrappingIndent||(t.WrappingIndent={}))
var r=(t.WrappingIndent,function(){function e(e){this.arrowSize=0|e.arrowSize,this.vertical=0|e.vertical,this.horizontal=0|e.horizontal,this.useShadows=Boolean(e.useShadows),this.verticalHasArrows=Boolean(e.verticalHasArrows),this.horizontalHasArrows=Boolean(e.horizontalHasArrows),this.handleMouseWheel=Boolean(e.handleMouseWheel),this.horizontalScrollbarSize=0|e.horizontalScrollbarSize,this.horizontalSliderSize=0|e.horizontalSliderSize,this.verticalScrollbarSize=0|e.verticalScrollbarSize,this.verticalSliderSize=0|e.verticalSliderSize,this.mouseWheelScrollSensitivity=Number(e.mouseWheelScrollSensitivity)}return e.prototype.equals=function(e){return this.arrowSize===e.arrowSize&&this.vertical===e.vertical&&this.horizontal===e.horizontal&&this.useShadows===e.useShadows&&this.verticalHasArrows===e.verticalHasArrows&&this.horizontalHasArrows===e.horizontalHasArrows&&this.handleMouseWheel===e.handleMouseWheel&&this.horizontalScrollbarSize===e.horizontalScrollbarSize&&this.horizontalSliderSize===e.horizontalSliderSize&&this.verticalScrollbarSize===e.verticalScrollbarSize&&this.verticalSliderSize===e.verticalSliderSize&&this.mouseWheelScrollSensitivity===e.mouseWheelScrollSensitivity},e.prototype.clone=function(){return new e(this)},e}())
t.InternalEditorScrollbarOptions=r
var i=function(){function e(e){this.isViewportWrapping=Boolean(e.isViewportWrapping),this.wrappingColumn=0|e.wrappingColumn,this.wrappingIndent=0|e.wrappingIndent,this.wordWrapBreakBeforeCharacters=String(e.wordWrapBreakBeforeCharacters),this.wordWrapBreakAfterCharacters=String(e.wordWrapBreakAfterCharacters),this.wordWrapBreakObtrusiveCharacters=String(e.wordWrapBreakObtrusiveCharacters)}return e.prototype.equals=function(e){return this.isViewportWrapping===e.isViewportWrapping&&this.wrappingColumn===e.wrappingColumn&&this.wrappingIndent===e.wrappingIndent&&this.wordWrapBreakBeforeCharacters===e.wordWrapBreakBeforeCharacters&&this.wordWrapBreakAfterCharacters===e.wordWrapBreakAfterCharacters&&this.wordWrapBreakObtrusiveCharacters===e.wordWrapBreakObtrusiveCharacters},e.prototype.clone=function(){return new e(this)},e}()
t.EditorWrappingInfo=i
var o=function(){function e(t){this.theme=String(t.theme),this.canUseTranslate3d=Boolean(t.canUseTranslate3d),this.experimentalScreenReader=Boolean(t.experimentalScreenReader),this.rulers=e._toSortedIntegerArray(t.rulers),this.ariaLabel=String(t.ariaLabel),this.lineNumbers=t.lineNumbers,this.selectOnLineNumbers=Boolean(t.selectOnLineNumbers),this.glyphMargin=Boolean(t.glyphMargin),this.revealHorizontalRightPadding=0|t.revealHorizontalRightPadding,this.roundedSelection=Boolean(t.roundedSelection),this.overviewRulerLanes=0|t.overviewRulerLanes,this.cursorBlinking=String(t.cursorBlinking),this.cursorStyle=0|t.cursorStyle,this.hideCursorInOverviewRuler=Boolean(t.hideCursorInOverviewRuler),this.scrollBeyondLastLine=Boolean(t.scrollBeyondLastLine),this.editorClassName=String(t.editorClassName),this.stopRenderingLineAfter=0|t.stopRenderingLineAfter,this.renderWhitespace=Boolean(t.renderWhitespace),this.indentGuides=Boolean(t.indentGuides),this.scrollbar=t.scrollbar.clone()}return e._toSortedIntegerArray=function(e){if(!Array.isArray(e))return[]
var t=e.map(function(e){var t=parseInt(e,10)
return isNaN(t)?0:t})
return t.sort(),t},e._numberArraysEqual=function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0},e.prototype.equals=function(t){return this.theme===t.theme&&this.canUseTranslate3d===t.canUseTranslate3d&&this.experimentalScreenReader===t.experimentalScreenReader&&e._numberArraysEqual(this.rulers,t.rulers)&&this.ariaLabel===t.ariaLabel&&this.lineNumbers===t.lineNumbers&&this.selectOnLineNumbers===t.selectOnLineNumbers&&this.glyphMargin===t.glyphMargin&&this.revealHorizontalRightPadding===t.revealHorizontalRightPadding&&this.roundedSelection===t.roundedSelection&&this.overviewRulerLanes===t.overviewRulerLanes&&this.cursorBlinking===t.cursorBlinking&&this.cursorStyle===t.cursorStyle&&this.hideCursorInOverviewRuler===t.hideCursorInOverviewRuler&&this.scrollBeyondLastLine===t.scrollBeyondLastLine&&this.editorClassName===t.editorClassName&&this.stopRenderingLineAfter===t.stopRenderingLineAfter&&this.renderWhitespace===t.renderWhitespace&&this.indentGuides===t.indentGuides&&this.scrollbar.equals(t.scrollbar)},e.prototype.createChangeEvent=function(t){return{theme:this.theme!==t.theme,canUseTranslate3d:this.canUseTranslate3d!==t.canUseTranslate3d,experimentalScreenReader:this.experimentalScreenReader!==t.experimentalScreenReader,rulers:!e._numberArraysEqual(this.rulers,t.rulers),ariaLabel:this.ariaLabel!==t.ariaLabel,lineNumbers:this.lineNumbers!==t.lineNumbers,selectOnLineNumbers:this.selectOnLineNumbers!==t.selectOnLineNumbers,glyphMargin:this.glyphMargin!==t.glyphMargin,revealHorizontalRightPadding:this.revealHorizontalRightPadding!==t.revealHorizontalRightPadding,roundedSelection:this.roundedSelection!==t.roundedSelection,overviewRulerLanes:this.overviewRulerLanes!==t.overviewRulerLanes,cursorBlinking:this.cursorBlinking!==t.cursorBlinking,cursorStyle:this.cursorStyle!==t.cursorStyle,hideCursorInOverviewRuler:this.hideCursorInOverviewRuler!==t.hideCursorInOverviewRuler,scrollBeyondLastLine:this.scrollBeyondLastLine!==t.scrollBeyondLastLine,editorClassName:this.editorClassName!==t.editorClassName,stopRenderingLineAfter:this.stopRenderingLineAfter!==t.stopRenderingLineAfter,renderWhitespace:this.renderWhitespace!==t.renderWhitespace,indentGuides:this.indentGuides!==t.indentGuides,scrollbar:!this.scrollbar.equals(t.scrollbar)}},e.prototype.clone=function(){return new e(this)},e}()
t.InternalEditorViewOptions=o
var s=function(){function e(e){this.selectionClipboard=Boolean(e.selectionClipboard),this.hover=Boolean(e.hover),this.contextmenu=Boolean(e.contextmenu),this.quickSuggestions=Boolean(e.quickSuggestions),this.quickSuggestionsDelay=e.quickSuggestionsDelay||0,this.parameterHints=Boolean(e.parameterHints),this.iconsInSuggestions=Boolean(e.iconsInSuggestions),this.formatOnType=Boolean(e.formatOnType),this.suggestOnTriggerCharacters=Boolean(e.suggestOnTriggerCharacters),this.acceptSuggestionOnEnter=Boolean(e.acceptSuggestionOnEnter),this.selectionHighlight=Boolean(e.selectionHighlight),this.outlineMarkers=Boolean(e.outlineMarkers),this.referenceInfos=Boolean(e.referenceInfos),this.folding=Boolean(e.folding)}return e.prototype.equals=function(e){return this.selectionClipboard===e.selectionClipboard&&this.hover===e.hover&&this.contextmenu===e.contextmenu&&this.quickSuggestions===e.quickSuggestions&&this.quickSuggestionsDelay===e.quickSuggestionsDelay&&this.parameterHints===e.parameterHints&&this.iconsInSuggestions===e.iconsInSuggestions&&this.formatOnType===e.formatOnType&&this.suggestOnTriggerCharacters===e.suggestOnTriggerCharacters&&this.acceptSuggestionOnEnter===e.acceptSuggestionOnEnter&&this.selectionHighlight===e.selectionHighlight&&this.outlineMarkers===e.outlineMarkers&&this.referenceInfos===e.referenceInfos&&this.folding===e.folding},e.prototype.clone=function(){return new e(this)},e}()
t.EditorContribOptions=s
var a=function(){function e(e){this.lineHeight=0|e.lineHeight,this.readOnly=Boolean(e.readOnly),this.wordSeparators=String(e.wordSeparators),this.autoClosingBrackets=Boolean(e.autoClosingBrackets),this.useTabStops=Boolean(e.useTabStops),this.tabFocusMode=Boolean(e.tabFocusMode),this.layoutInfo=e.layoutInfo.clone(),this.fontInfo=e.fontInfo.clone(),this.viewInfo=e.viewInfo.clone(),this.wrappingInfo=e.wrappingInfo.clone(),this.contribInfo=e.contribInfo.clone()}return e.prototype.equals=function(e){return this.lineHeight===e.lineHeight&&this.readOnly===e.readOnly&&this.wordSeparators===e.wordSeparators&&this.autoClosingBrackets===e.autoClosingBrackets&&this.useTabStops===e.useTabStops&&this.tabFocusMode===e.tabFocusMode&&this.layoutInfo.equals(e.layoutInfo)&&this.fontInfo.equals(e.fontInfo)&&this.viewInfo.equals(e.viewInfo)&&this.wrappingInfo.equals(e.wrappingInfo)&&this.contribInfo.equals(e.contribInfo)},e.prototype.createChangeEvent=function(e){return{lineHeight:this.lineHeight!==e.lineHeight,readOnly:this.readOnly!==e.readOnly,wordSeparators:this.wordSeparators!==e.wordSeparators,autoClosingBrackets:this.autoClosingBrackets!==e.autoClosingBrackets,useTabStops:this.useTabStops!==e.useTabStops,tabFocusMode:this.tabFocusMode!==e.tabFocusMode,layoutInfo:!this.layoutInfo.equals(e.layoutInfo),fontInfo:!this.fontInfo.equals(e.fontInfo),viewInfo:this.viewInfo.createChangeEvent(e.viewInfo),wrappingInfo:!this.wrappingInfo.equals(e.wrappingInfo),contribInfo:!this.contribInfo.equals(e.contribInfo)}},e.prototype.clone=function(){return new e(this)},e}()
t.InternalEditorOptions=a,function(e){e[e.Left=1]="Left",e[e.Center=2]="Center",e[e.Right=4]="Right",e[e.Full=7]="Full"}(t.OverviewRulerLane||(t.OverviewRulerLane={})),t.OverviewRulerLane,function(e){e[e.TextDefined=0]="TextDefined",e[e.LF=1]="LF",e[e.CRLF=2]="CRLF"}(t.EndOfLinePreference||(t.EndOfLinePreference={})),t.EndOfLinePreference,function(e){e[e.LF=1]="LF",e[e.CRLF=2]="CRLF"}(t.DefaultEndOfLine||(t.DefaultEndOfLine={})),t.DefaultEndOfLine,function(e){e[e.LF=0]="LF",e[e.CRLF=1]="CRLF"}(t.EndOfLineSequence||(t.EndOfLineSequence={})),t.EndOfLineSequence,function(e){e[e.AlwaysGrowsWhenTypingAtEdges=0]="AlwaysGrowsWhenTypingAtEdges",e[e.NeverGrowsWhenTypingAtEdges=1]="NeverGrowsWhenTypingAtEdges",e[e.GrowsOnlyWhenTypingBefore=2]="GrowsOnlyWhenTypingBefore",e[e.GrowsOnlyWhenTypingAfter=3]="GrowsOnlyWhenTypingAfter"}(t.TrackedRangeStickiness||(t.TrackedRangeStickiness={})),t.TrackedRangeStickiness,function(e){e[e.NotSet=0]="NotSet",e[e.ContentFlush=1]="ContentFlush",e[e.RecoverFromMarkers=2]="RecoverFromMarkers",e[e.Explicit=3]="Explicit",e[e.Paste=4]="Paste",e[e.Undo=5]="Undo",e[e.Redo=6]="Redo"}(t.CursorChangeReason||(t.CursorChangeReason={})),t.CursorChangeReason,function(e){e[e.Simple=0]="Simple",e[e.Center=1]="Center",e[e.CenterIfOutsideViewport=2]="CenterIfOutsideViewport"}(t.VerticalRevealType||(t.VerticalRevealType={}))
var u=(t.VerticalRevealType,function(){function e(e){this.width=0|e.width,this.height=0|e.height,this.top=0|e.top,this.right=0|e.right}return e.prototype.equals=function(e){return this.width===e.width&&this.height===e.height&&this.top===e.top&&this.right===e.right},e.prototype.clone=function(){return new e(this)},e}())
t.OverviewRulerPosition=u
var c=function(){function e(e){this.width=0|e.width,this.height=0|e.height,this.glyphMarginLeft=0|e.glyphMarginLeft,this.glyphMarginWidth=0|e.glyphMarginWidth,this.glyphMarginHeight=0|e.glyphMarginHeight,this.lineNumbersLeft=0|e.lineNumbersLeft,this.lineNumbersWidth=0|e.lineNumbersWidth,this.lineNumbersHeight=0|e.lineNumbersHeight,this.decorationsLeft=0|e.decorationsLeft,this.decorationsWidth=0|e.decorationsWidth,this.decorationsHeight=0|e.decorationsHeight,this.contentLeft=0|e.contentLeft,this.contentWidth=0|e.contentWidth,this.contentHeight=0|e.contentHeight,this.verticalScrollbarWidth=0|e.verticalScrollbarWidth,this.horizontalScrollbarHeight=0|e.horizontalScrollbarHeight,this.overviewRuler=e.overviewRuler.clone()}return e.prototype.equals=function(e){return this.width===e.width&&this.height===e.height&&this.glyphMarginLeft===e.glyphMarginLeft&&this.glyphMarginWidth===e.glyphMarginWidth&&this.glyphMarginHeight===e.glyphMarginHeight&&this.lineNumbersLeft===e.lineNumbersLeft&&this.lineNumbersWidth===e.lineNumbersWidth&&this.lineNumbersHeight===e.lineNumbersHeight&&this.decorationsLeft===e.decorationsLeft&&this.decorationsWidth===e.decorationsWidth&&this.decorationsHeight===e.decorationsHeight&&this.contentLeft===e.contentLeft&&this.contentWidth===e.contentWidth&&this.contentHeight===e.contentHeight&&this.verticalScrollbarWidth===e.verticalScrollbarWidth&&this.horizontalScrollbarHeight===e.horizontalScrollbarHeight&&this.overviewRuler.equals(e.overviewRuler)},e.prototype.clone=function(){return new e(this)},e}()
t.EditorLayoutInfo=c,function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.TEXTAREA=1]="TEXTAREA",e[e.GUTTER_GLYPH_MARGIN=2]="GUTTER_GLYPH_MARGIN",e[e.GUTTER_LINE_NUMBERS=3]="GUTTER_LINE_NUMBERS",e[e.GUTTER_LINE_DECORATIONS=4]="GUTTER_LINE_DECORATIONS",e[e.GUTTER_VIEW_ZONE=5]="GUTTER_VIEW_ZONE",e[e.CONTENT_TEXT=6]="CONTENT_TEXT",e[e.CONTENT_EMPTY=7]="CONTENT_EMPTY",e[e.CONTENT_VIEW_ZONE=8]="CONTENT_VIEW_ZONE",e[e.CONTENT_WIDGET=9]="CONTENT_WIDGET",e[e.OVERVIEW_RULER=10]="OVERVIEW_RULER",e[e.SCROLLBAR=11]="SCROLLBAR",e[e.OVERLAY_WIDGET=12]="OVERLAY_WIDGET"}(t.MouseTargetType||(t.MouseTargetType={})),t.MouseTargetType,t.KEYBINDING_CONTEXT_EDITOR_TEXT_FOCUS="editorTextFocus",t.KEYBINDING_CONTEXT_EDITOR_FOCUS="editorFocus",t.KEYBINDING_CONTEXT_EDITOR_TAB_MOVES_FOCUS="editorTabMovesFocus",t.KEYBINDING_CONTEXT_EDITOR_HAS_MULTIPLE_SELECTIONS="editorHasMultipleSelections",t.KEYBINDING_CONTEXT_EDITOR_HAS_NON_EMPTY_SELECTION="editorHasSelection",t.KEYBINDING_CONTEXT_EDITOR_LANGUAGE_ID="editorLangId",t.SHOW_ACCESSIBILITY_HELP_ACTION_ID="editor.action.showAccessibilityHelp"
var l=function(){function e(e){this.fontFamily=String(e.fontFamily),this.fontSize=0|e.fontSize,this.lineHeight=0|e.lineHeight}return e.prototype.getId=function(){return this.fontFamily+"-"+this.fontSize+"-"+this.lineHeight},e}()
t.BareFontInfo=l
var h=function(e){function t(t){e.call(this,t),this.typicalHalfwidthCharacterWidth=t.typicalHalfwidthCharacterWidth,this.typicalFullwidthCharacterWidth=t.typicalFullwidthCharacterWidth,this.spaceWidth=t.spaceWidth,this.maxDigitWidth=t.maxDigitWidth}return n(t,e),t.prototype.equals=function(e){return this.fontFamily===e.fontFamily&&this.fontSize===e.fontSize&&this.lineHeight===e.lineHeight&&this.typicalHalfwidthCharacterWidth===e.typicalHalfwidthCharacterWidth&&this.typicalFullwidthCharacterWidth===e.typicalFullwidthCharacterWidth&&this.spaceWidth===e.spaceWidth&&this.maxDigitWidth===e.maxDigitWidth},t.prototype.clone=function(){return new t(this)},t}(l)
t.FontInfo=h,t.ViewEventNames={ModelFlushedEvent:"modelFlushedEvent",LinesDeletedEvent:"linesDeletedEvent",LinesInsertedEvent:"linesInsertedEvent",LineChangedEvent:"lineChangedEvent",TokensChangedEvent:"tokensChangedEvent",DecorationsChangedEvent:"decorationsChangedEvent",CursorPositionChangedEvent:"cursorPositionChangedEvent",CursorSelectionChangedEvent:"cursorSelectionChangedEvent",RevealRangeEvent:"revealRangeEvent",LineMappingChangedEvent:"lineMappingChangedEvent",ScrollRequestEvent:"scrollRequestEvent"}
var d=function(){return function(e,t,n,r){this.top=0|e,this.left=0|t,this.width=0|n,this.height=0|r}}()
t.Viewport=d,function(e){e[e.Value=0]="Value",e[e.Selection=1]="Selection",e[e.Position=2]="Position",e[e.Scroll=3]="Scroll"}(t.CodeEditorStateFlag||(t.CodeEditorStateFlag={})),t.CodeEditorStateFlag,t.EditorType={ICodeEditor:"vs.editor.ICodeEditor",IDiffEditor:"vs.editor.IDiffEditor"},t.ClassName={EditorWarningDecoration:"greensquiggly",EditorErrorDecoration:"redsquiggly"},t.EventType={Disposed:"disposed",ConfigurationChanged:"configurationChanged",ModelDispose:"modelDispose",ModelChanged:"modelChanged",ModelTokensChanged:"modelTokensChanged",ModelModeChanged:"modelsModeChanged",ModelModeSupportChanged:"modelsModeSupportChanged",ModelOptionsChanged:"modelOptionsChanged",ModelRawContentChanged:"contentChanged",ModelContentChanged2:"contentChanged2",ModelRawContentChangedFlush:"flush",ModelRawContentChangedLinesDeleted:"linesDeleted",ModelRawContentChangedLinesInserted:"linesInserted",ModelRawContentChangedLineChanged:"lineChanged",EditorTextBlur:"blur",EditorTextFocus:"focus",EditorFocus:"widgetFocus",EditorBlur:"widgetBlur",ModelDecorationsChanged:"decorationsChanged",CursorPositionChanged:"positionChanged",CursorSelectionChanged:"selectionChanged",CursorRevealRange:"revealRange",CursorScrollRequest:"scrollRequest",ViewFocusGained:"focusGained",ViewFocusLost:"focusLost",ViewFocusChanged:"focusChanged",ViewScrollChanged:"scrollChanged",ViewZonesChanged:"zonesChanged",ViewLayoutChanged:"viewLayoutChanged",ContextMenu:"contextMenu",MouseDown:"mousedown",MouseUp:"mouseup",MouseMove:"mousemove",MouseLeave:"mouseleave",KeyDown:"keydown",KeyUp:"keyup",EditorLayout:"editorLayout",DiffUpdated:"diffUpdated"},t.Handler={ExecuteCommand:"executeCommand",ExecuteCommands:"executeCommands",CursorLeft:"cursorLeft",CursorLeftSelect:"cursorLeftSelect",CursorWordLeft:"cursorWordLeft",CursorWordStartLeft:"cursorWordStartLeft",CursorWordEndLeft:"cursorWordEndLeft",CursorWordLeftSelect:"cursorWordLeftSelect",CursorWordStartLeftSelect:"cursorWordStartLeftSelect",CursorWordEndLeftSelect:"cursorWordEndLeftSelect",CursorRight:"cursorRight",CursorRightSelect:"cursorRightSelect",CursorWordRight:"cursorWordRight",CursorWordStartRight:"cursorWordStartRight",CursorWordEndRight:"cursorWordEndRight",CursorWordRightSelect:"cursorWordRightSelect",CursorWordStartRightSelect:"cursorWordStartRightSelect",CursorWordEndRightSelect:"cursorWordEndRightSelect",CursorUp:"cursorUp",CursorUpSelect:"cursorUpSelect",CursorDown:"cursorDown",CursorDownSelect:"cursorDownSelect",CursorPageUp:"cursorPageUp",CursorPageUpSelect:"cursorPageUpSelect",CursorPageDown:"cursorPageDown",CursorPageDownSelect:"cursorPageDownSelect",CursorHome:"cursorHome",CursorHomeSelect:"cursorHomeSelect",CursorEnd:"cursorEnd",CursorEndSelect:"cursorEndSelect",ExpandLineSelection:"expandLineSelection",CursorTop:"cursorTop",CursorTopSelect:"cursorTopSelect",CursorBottom:"cursorBottom",CursorBottomSelect:"cursorBottomSelect",CursorColumnSelectLeft:"cursorColumnSelectLeft",CursorColumnSelectRight:"cursorColumnSelectRight",CursorColumnSelectUp:"cursorColumnSelectUp",CursorColumnSelectPageUp:"cursorColumnSelectPageUp",CursorColumnSelectDown:"cursorColumnSelectDown",CursorColumnSelectPageDown:"cursorColumnSelectPageDown",AddCursorDown:"addCursorDown",AddCursorUp:"addCursorUp",CursorUndo:"cursorUndo",MoveTo:"moveTo",MoveToSelect:"moveToSelect",ColumnSelect:"columnSelect",CreateCursor:"createCursor",LastCursorMoveToSelect:"lastCursorMoveToSelect",JumpToBracket:"jumpToBracket",Type:"type",ReplacePreviousChar:"replacePreviousChar",Paste:"paste",Tab:"tab",Indent:"indent",Outdent:"outdent",DeleteLeft:"deleteLeft",DeleteRight:"deleteRight",DeleteWordLeft:"deleteWordLeft",DeleteWordStartLeft:"deleteWordStartLeft",DeleteWordEndLeft:"deleteWordEndLeft",DeleteWordRight:"deleteWordRight",DeleteWordStartRight:"deleteWordStartRight",DeleteWordEndRight:"deleteWordEndRight",DeleteAllLeft:"deleteAllLeft",DeleteAllRight:"deleteAllRight",RemoveSecondaryCursors:"removeSecondaryCursors",CancelSelection:"cancelSelection",Cut:"cut",Undo:"undo",Redo:"redo",WordSelect:"wordSelect",WordSelectDrag:"wordSelectDrag",LastCursorWordSelect:"lastCursorWordSelect",LineSelect:"lineSelect",LineSelectDrag:"lineSelectDrag",LastCursorLineSelect:"lastCursorLineSelect",LastCursorLineSelectDrag:"lastCursorLineSelectDrag",LineInsertBefore:"lineInsertBefore",LineInsertAfter:"lineInsertAfter",LineBreakInsert:"lineBreakInsert",SelectAll:"selectAll",ScrollLineUp:"scrollLineUp",ScrollLineDown:"scrollLineDown",ScrollPageUp:"scrollPageUp",ScrollPageDown:"scrollPageDown"},function(e){e[e.Line=1]="Line",e[e.Block=2]="Block",e[e.Underline=3]="Underline"}(t.TextEditorCursorStyle||(t.TextEditorCursorStyle={}))
var f=t.TextEditorCursorStyle
t.cursorStyleToString=function(e){if(e===f.Line)return"line"
if(e===f.Block)return"block"
if(e===f.Underline)return"underline"
throw new Error("cursorStyleToString: Unknown cursorStyle")}
var p=function(){return function(e,t,n,r){this.from=0|e,this.to=0|t,this.colorId=0|n,this.position=0|r}}()
t.ColorZone=p
var g=function(){function e(e,t,n,r,i,o){this.startLineNumber=e,this.endLineNumber=t,this.position=n,this.forceHeight=r,this._color=i,this._darkColor=o,this._colorZones=null}return e.prototype.getColor=function(e){return e?this._darkColor:this._color},e.prototype.equals=function(e){return this.startLineNumber===e.startLineNumber&&this.endLineNumber===e.endLineNumber&&this.position===e.position&&this.forceHeight===e.forceHeight&&this._color===e._color&&this._darkColor===e._darkColor},e.prototype.compareTo=function(e){return this.startLineNumber===e.startLineNumber?this.endLineNumber===e.endLineNumber?this.forceHeight===e.forceHeight?this.position===e.position?this._darkColor===e._darkColor?this._color===e._color?0:this._color<e._color?-1:1:this._darkColor<e._darkColor?-1:1:this.position-e.position:this.forceHeight-e.forceHeight:this.endLineNumber-e.endLineNumber:this.startLineNumber-e.startLineNumber},e.prototype.setColorZones=function(e){this._colorZones=e},e.prototype.getColorZones=function(){return this._colorZones},e}()
t.OverviewRulerZone=g}),define(e[95],t([1,0]),function(e,t){"use strict"
function n(e,t,n,i){var o
for(o=0;t>o&&i>o;o++){if(e.charCodeAt(o)!==n.charCodeAt(o))break}for(var s=0,a=0,u=o;t>u;u++){e.charCodeAt(u)===r?s++:a++}var c=0,l=0
for(u=o;i>u;u++){n.charCodeAt(u)===r?c++:l++}if(s>0&&a>0)return 0
if(c>0&&l>0)return 0
var h=Math.abs(a-l),d=Math.abs(s-c)
return 0===h?d:d%h==0?d/h:0}var r=" ".charCodeAt(0),i="\t".charCodeAt(0)
t.guessIndentation=function(e,t,o){for(var s=0,a=0,u="",c=0,l=[0,0,0,0,0,0,0,0,0],h=0,d=e.length;d>h;h++){for(var f=e[h],p=!1,g=0,m=0,v=0,_=0,y=f.length;y>_;_++){var b=f.charCodeAt(_)
if(b===i)v++
else{if(b!==r){p=!0,g=_
break}m++}}if(p){v>0?s++:m>1&&a++
var k=n(u,c,f,g)
8>=k&&l[k]++,u=f,c=g}}var C=n(u,c,"",0)
8>=C&&l[C]++
var E=o
s!==a&&(E=a>s)
var S=t,T=E?0:.1*e.length
return[2,4,6,8].forEach(function(e){var t=l[e]
t>T&&(T=t,S=e)}),{insertSpaces:E,tabSize:S}}}),define(e[101],t([1,0,30]),function(e,t,n){"use strict"
var r=function(){function e(e,t){this.startIndex=0|e,this.type=t}return e.prototype.equals=function(e){return this.startIndex===e.startIndex&&this.type===e.type},e.findIndexInSegmentsArray=function(e,t){return n.Arrays.findIndexInSegmentsArray(e,t)},e.equalsArray=function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;n>r;r++)if(!e[r].equals(t[r]))return!1
return!0},e}()
t.LineToken=r}),define(e[69],t([1,0]),function(e,t){"use strict"
var n=function(){function e(e,t){this._model=e,this._currentLineNumber=t.lineNumber,this._currentTokenIndex=0,this._readLineTokens(this._currentLineNumber),this._next=null,this._prev=null
for(var n=t.column-1,r=Number.MAX_VALUE,i=this._currentLineTokens.getTokenCount()-1;i>=0;i--){var o=this._currentLineTokens.getTokenStartIndex(i)
if(n>=o&&r>=n){this._currentTokenIndex=i,this._next=this._current(),this._prev=this._current()
break}r=o}}return e.prototype._readLineTokens=function(e){this._currentLineTokens=this._model.getLineTokens(e,!1)},e.prototype._advanceNext=function(){if(this._prev=this._next,this._next=null,this._currentTokenIndex+1<this._currentLineTokens.getTokenCount())this._currentTokenIndex++,this._next=this._current()
else{for(;this._currentLineNumber+1<=this._model.getLineCount();)if(this._currentLineNumber++,this._readLineTokens(this._currentLineNumber),this._currentLineTokens.getTokenCount()>0){this._currentTokenIndex=0,this._next=this._current()
break}null===this._next&&(this._readLineTokens(this._currentLineNumber),this._currentTokenIndex=this._currentLineTokens.getTokenCount(),this._advancePrev(),this._next=null)}},e.prototype._advancePrev=function(){if(this._next=this._prev,this._prev=null,this._currentTokenIndex>0)this._currentTokenIndex--,this._prev=this._current()
else for(;this._currentLineNumber>1;)if(this._currentLineNumber--,this._readLineTokens(this._currentLineNumber),this._currentLineTokens.getTokenCount()>0){this._currentTokenIndex=this._currentLineTokens.getTokenCount()-1,this._prev=this._current()
break}},e.prototype._current=function(){var e=this._currentLineTokens.getTokenStartIndex(this._currentTokenIndex),t=this._currentLineTokens.getTokenType(this._currentTokenIndex),n=this._currentLineTokens.getTokenEndIndex(this._currentTokenIndex,this._model.getLineContent(this._currentLineNumber).length)
return{token:{startIndex:e,type:t},lineNumber:this._currentLineNumber,startColumn:e+1,endColumn:n+1}},e.prototype.hasNext=function(){return null!==this._next},e.prototype.next=function(){var e=this._next
return this._advanceNext(),e},e.prototype.hasPrev=function(){return null!==this._prev},e.prototype.prev=function(){var e=this._prev
return this._advancePrev(),e},e.prototype._invalidate=function(){var e=function(){throw new Error("iteration isn't valid anymore")}
this.hasNext=e,this.next=e,this.hasPrev=e,this.prev=e},e}()
t.TokenIterator=n}),define(e[17],t([1,0]),function(e,t){"use strict"
function n(e){void 0===e&&(e="")
for(var n=t.USUAL_WORD_SEPARATORS,r="(-?\\d*\\.\\d\\w*)|([^",i=0;i<n.length;i++)e.indexOf(n[i])>=0||(r+="\\"+n[i])
return r+="\\s]+)",new RegExp(r,"g")}t.USUAL_WORD_SEPARATORS="`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",t.createWordRegExp=n,t.DEFAULT_WORD_REGEXP=n(),t.ensureValidWordDefinition=function(e){var n=t.DEFAULT_WORD_REGEXP
if(e&&e instanceof RegExp)if(e.global)n=e
else{var r="g"
e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),n=new RegExp(e.source,r)}return n.lastIndex=0,n},t.getWordAtText=function(e,t,n,r){var i,o,s,a,u,c,l=n.match(t)
if(l)for(i=0;i<l.length;i++)if((c=l[i].trim()).length>0&&(u=r+(s=(o=n.indexOf(c,s))+c.length)+1,e>=(a=r+o+1)&&u>=e))return{word:c,startColumn:a,endColumn:u}
return null}}),define(e[39],t([1,0]),function(e,t){"use strict"
var n=function(){function e(e,t){void 0===t&&(t=null),this.mode=e,this.stateData=t}return e.prototype.getMode=function(){return this.mode},e.prototype.clone=function(){var e=this.makeClone()
return e.initializeFrom(this),e},e.prototype.makeClone=function(){throw new Error("Abstract Method")},e.prototype.initializeFrom=function(e){this.stateData=null!==e.stateData?e.stateData.clone():null},e.prototype.getStateData=function(){return this.stateData},e.prototype.setStateData=function(e){this.stateData=e},e.prototype.equals=function(t){return null!==t&&this.mode===t.getMode()&&(t instanceof e&&e.safeEquals(this.stateData,t.stateData))},e.prototype.tokenize=function(e){throw new Error("Abstract Method")},e.safeEquals=function(e,t){return null===e&&null===t||null!==e&&null!==t&&e.equals(t)},e.safeClone=function(e){return e?e.clone():null},e}()
t.AbstractState=n}),define(e[82],t([1,0,55]),function(e,t,n){"use strict"
function r(e,t,i){if(Array.isArray(e)){var o=e.map(function(e){return r(e,t,i)})
return Math.max.apply(Math,o)}if("string"==typeof e)return e===i?10:"*"===e?5:0
if(e){var s=e,a=0
if(s.language)if(s.language===i)a+=10
else{if("*"!==s.language)return 0
a+=5}if(s.scheme){if(s.scheme!==t.scheme)return 0
a+=10}if(s.pattern)if(s.pattern===t.fsPath)a+=10
else{if(!n.match(s.pattern,t.fsPath))return 0
a+=5}return a}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return r(e,t,n)>0},t.score=r}),define(e[62],t([1,0]),function(e,t){"use strict"
var n=function(){function e(e){this._source=e,this.sourceLength=e.length,this._pos=0,this.whitespace="\t  ",this.whitespaceArr=this.stringToArray(this.whitespace),this.separators="",this.separatorsArr=this.stringToArray(this.separators),this.tokenStart=-1,this.tokenEnd=-1}return e.prototype.stringToArray=function(t){return e.STRING_TO_ARRAY_CACHE.hasOwnProperty(t)||(e.STRING_TO_ARRAY_CACHE[t]=this.actualStringToArray(t)),e.STRING_TO_ARRAY_CACHE[t]},e.prototype.actualStringToArray=function(e){for(var t=0,n=0;n<e.length;n++)t=Math.max(t,e.charCodeAt(n))
var r=[]
for(n=0;t>=n;n++)r[n]=!1
for(n=0;n<e.length;n++)r[e.charCodeAt(n)]=!0
return r},e.prototype.pos=function(){return this._pos},e.prototype.eos=function(){return this._pos>=this.sourceLength},e.prototype.peek=function(){if(this._pos>=this.sourceLength)throw new Error("Stream is at the end")
return this._source[this._pos]},e.prototype.next=function(){if(this._pos>=this.sourceLength)throw new Error("Stream is at the end")
return this.tokenStart=-1,this.tokenEnd=-1,this._source[this._pos++]},e.prototype.next2=function(){if(this._pos>=this.sourceLength)throw new Error("Stream is at the end")
this.tokenStart=-1,this.tokenEnd=-1,this._pos++},e.prototype.advance=function(e){if(0===e)return""
var t=this._pos
return this._pos+=e,this.tokenStart=-1,this.tokenEnd=-1,this._source.substring(t,this._pos)},e.prototype._advance2=function(e){return 0===e?e:(this._pos+=e,this.tokenStart=-1,this.tokenEnd=-1,e)},e.prototype.advanceToEOS=function(){var e=this._pos
return this._pos=this.sourceLength,this.resetPeekedToken(),this._source.substring(e,this._pos)},e.prototype.goBack=function(e){this._pos-=e,this.resetPeekedToken()},e.prototype.createPeeker=function(e){var t=this
if(e instanceof RegExp)return function(){var n=e.exec(t._source.substr(t._pos))
if(null===n)return 0
if(0!==n.index)throw new Error('Regular expression must begin with the character "^"')
return n[0].length}
if((e instanceof String||"string"==typeof e)&&e)return function(){for(var n=e.length,r=t._pos+n<=t.sourceLength,i=0;r&&n>i;i++)r=t._source.charCodeAt(t._pos+i)===e.charCodeAt(i)
return r?n:0}
throw new Error("Condition must be either a regular expression, function or a non-empty string")},e.prototype._advanceIfStringCaseInsensitive=function(e){var t,n=this._pos,r=this._source,i=e.length
if(1>i||n+i>this.sourceLength)return 0
for(t=0;i>t;t++)if(r.charAt(n+t).toLowerCase()!==e.charAt(t).toLowerCase())return 0
return i},e.prototype.advanceIfStringCaseInsensitive=function(e){return this.advance(this._advanceIfStringCaseInsensitive(e))},e.prototype.advanceIfStringCaseInsensitive2=function(e){return this._advance2(this._advanceIfStringCaseInsensitive(e))},e.prototype._advanceIfString=function(e){var t,n=this._pos,r=this._source,i=e.length
if(1>i||n+i>this.sourceLength)return 0
for(t=0;i>t;t++)if(r.charCodeAt(n+t)!==e.charCodeAt(t))return 0
return i},e.prototype.advanceIfString=function(e){return this.advance(this._advanceIfString(e))},e.prototype.advanceIfString2=function(e){return this._advance2(this._advanceIfString(e))},e.prototype._advanceIfCharCode=function(e){return this._pos<this.sourceLength&&this._source.charCodeAt(this._pos)===e?1:0},e.prototype.advanceIfCharCode=function(e){return this.advance(this._advanceIfCharCode(e))},e.prototype.advanceIfCharCode2=function(e){return this._advance2(this._advanceIfCharCode(e))},e.prototype._advanceIfRegExp=function(e){return this._pos>=this.sourceLength?0:e.test(this._source.substr(this._pos))?RegExp.lastMatch.length:0},e.prototype.advanceIfRegExp=function(e){return this.advance(this._advanceIfRegExp(e))},e.prototype.advanceIfRegExp2=function(e){return this._advance2(this._advanceIfRegExp(e))},e.prototype.advanceLoop=function(e,t,n){if(this.eos())return""
var r=this.createPeeker(e),i=this._pos,o=0,s=null
for(s=t?function(e){return e>0}:function(e){return 0===e};!this.eos()&&s(o=r());)o>0?this.advance(o):this.next()
return n&&!this.eos()&&this.advance(o),this._source.substring(i,this._pos)},e.prototype.advanceWhile=function(e){return this.advanceLoop(e,!0,!1)},e.prototype.advanceUntil=function(e,t){return this.advanceLoop(e,!1,t)},e.prototype._advanceUntilString=function(e,t){if(this.eos()||0===e.length)return 0
var n=this._pos,r=this._source.indexOf(e,n)
return-1===r?this.sourceLength-n:t?r+e.length-n:r-n},e.prototype.advanceUntilString=function(e,t){return this.advance(this._advanceUntilString(e,t))},e.prototype.advanceUntilString2=function(e,t){return this._advance2(this._advanceUntilString(e,t))},e.prototype.resetPeekedToken=function(){this.tokenStart=-1,this.tokenEnd=-1},e.prototype.setTokenRules=function(e,t){this.separators===e&&this.whitespace===t||(this.separators=e,this.separatorsArr=this.stringToArray(this.separators),this.whitespace=t,this.whitespaceArr=this.stringToArray(this.whitespace),this.resetPeekedToken())},e.prototype.peekToken=function(){if(-1!==this.tokenStart)return this._source.substring(this.tokenStart,this.tokenEnd)
var e=this._source,t=this.sourceLength,n=this.whitespaceArr,r=this.separatorsArr,i=this._pos
if(i>=t)throw new Error("Stream is at the end")
for(;n[e.charCodeAt(i)]&&t>i;)i++
var o=i
if(r[e.charCodeAt(o)]&&t>o)o++
else for(;!r[e.charCodeAt(o)]&&!n[e.charCodeAt(o)]&&t>o;)o++
return this.tokenStart=i,this.tokenEnd=o,e.substring(i,o)},e.prototype.nextToken=function(){if(this._pos>=this.sourceLength)throw new Error("Stream is at the end")
var e
return e=-1===this.tokenStart?this.peekToken():this._source.substring(this.tokenStart,this.tokenEnd),this._pos=this.tokenEnd,this.tokenStart=-1,this.tokenEnd=-1,e},e.prototype.peekWhitespace=function(){for(var e=this._source,t=this.sourceLength,n=this.whitespaceArr,r=this._pos;n[e.charCodeAt(r)]&&t>r;)r++
return e.substring(this._pos,r)},e.prototype._skipWhitespace=function(){for(var e=this._source,t=this.sourceLength,n=this.whitespaceArr,r=this._pos,i=this._pos;n[e.charCodeAt(i)]&&t>i;)i++
return i-r},e.prototype.skipWhitespace=function(){return this.advance(this._skipWhitespace())},e.prototype.skipWhitespace2=function(){return this._advance2(this._skipWhitespace())},e.STRING_TO_ARRAY_CACHE={},e}()
t.LineStream=n}),define(e[25],t([1,0]),function(e,t){"use strict"
function n(e){return!e}function r(e,t){return e.ignoreCase&&t?t.toLowerCase():t}!function(e){e[e.None=0]="None",e[e.Open=1]="Open",e[e.Close=-1]="Close"}(t.MonarchBracket||(t.MonarchBracket={})),t.MonarchBracket,t.empty=n,t.fixCase=r,t.sanitize=function(e){return e.replace(/[&<>'"_]/g,"-")},t.log=function(e,t){console.log(e.languageId+": "+t)},t.throwError=function(e,t){throw new Error(e.languageId+": "+t)},t.substituteMatches=function(e,t,i,o,s){var a=null
return t.replace(/\$((\$)|(#)|(\d\d?)|[sS](\d\d?)|@(\w+))/g,function(t,u,c,l,h,d,f,p,g){return n(c)?n(l)?!n(h)&&h<o.length?r(e,o[h]):!n(f)&&e&&"string"==typeof e[f]?e[f]:(null===a&&(a=s.split(".")).unshift(s),!n(d)&&d<a.length?r(e,a[d]):""):r(e,i):"$"})},t.findRules=function(e,t){for(;t&&t.length>0;){var n=e.tokenizer[t]
if(n)return n
var r=t.lastIndexOf(".")
t=0>r?null:t.substr(0,r)}return null},t.stateExists=function(e,t){for(;t&&t.length>0;){if(e.stateNames[t])return!0
var n=t.lastIndexOf(".")
t=0>n?null:t.substr(0,n)}return!1}}),define(e[88],t([1,0,12,25]),function(e,t,n,r){"use strict"
function i(e,t,n){return"boolean"==typeof e?e:(n&&(e||void 0===t)&&n(),void 0===t?null:t)}function o(e,t,n){return"string"==typeof e?e:(n&&(e||void 0===t)&&n(),void 0===t?null:t)}function s(e,t){if("string"!=typeof t)return null
for(var n=0;t.indexOf("@")>=0&&5>n;)n++,t=t.replace(/@(\w+)/g,function(n,i){var o=""
return"string"==typeof e[i]?o=e[i]:e[i]&&e[i]instanceof RegExp?o=e[i].source:void 0===e[i]?r.throwError(e,"language definition does not contain attribute '"+i+"', used at: "+t):r.throwError(e,"attribute reference '"+i+"' must be a string, used at: "+t),r.empty(o)?"":"(?:"+o+")"})
return new RegExp(t,e.ignoreCase?"i":"")}function a(e,t,i,o){var a=-1,u=i,c=i.match(/^\$(([sS]?)(\d\d?)|#)(.*)$/)
c&&(c[3]&&(a=parseInt(c[3]),c[2]&&(a+=100)),u=c[4])
var l,h="~",d=u
if(u&&0!==u.length?/^\w*$/.test(d)?h="==":(c=u.match(/^(@|!@|~|!~|==|!=)(.*)$/))&&(h=c[1],d=c[2]):(h="!=",d=""),"~"!==h&&"!~"!==h||!/^(\w|\|)*$/.test(d))if("@"===h||"!@"===h){var f=e[d]
f||r.throwError(e,"the @ match target '"+d+"' is not defined, in rule: "+t),function(e,t){if(!t)return!1
if(!Array.isArray(t))return!1
var n
for(n in t)if(t.hasOwnProperty(n)&&!e(t[n]))return!1
return!0}(function(e){return"string"==typeof e},f)||r.throwError(e,"the @ match target '"+d+"' must be an array of strings, in rule: "+t)
var p=n.createKeywordMatcher(f,e.ignoreCase)
l=function(e){return"@"===h?p(e):!p(e)}}else if("~"===h||"!~"===h)if(d.indexOf("$")<0){var g=s(e,"^"+d+"$")
l=function(e){return"~"===h?g.test(e):!g.test(e)}}else l=function(t,n,i,o){return s(e,"^"+r.substituteMatches(e,d,n,i,o)+"$").test(t)}
else if(d.indexOf("$")<0){var m=r.fixCase(e,d)
l=function(e){return"=="===h?e===m:e!==m}}else{m=r.fixCase(e,d)
l=function(t,n,i,o,s){var a=r.substituteMatches(e,m,n,i,o)
return"=="===h?t===a:t!==a}}else{p=n.createKeywordMatcher(d.split("|"),e.ignoreCase)
l=function(e){return"~"===h?p(e):!p(e)}}return-1===a?{name:i,value:o,test:function(e,t,n,r){return l(e,e,t,n,r)}}:{name:i,value:o,test:function(e,t,n,r){var i=function(e,t,n,r){if(0>r)return e
if(r<t.length)return t[r]
if(r>=100){r-=100
var i=n.split(".")
if(i.unshift(n),r<i.length)return i[r]}return null}(e,t,n,a)
return l(i||"",e,t,n,r)}}}var u=function(){function e(e){this.regex=new RegExp(""),this.action={token:""},this.matchOnlyAtLineStart=!1,this.name="",this.name=e}return e.prototype.setRegex=function(e,t){var n
"string"==typeof t?n=t:t instanceof RegExp?n=t.source:r.throwError(e,"rules must start with a match string or regular expression: "+this.name),this.matchOnlyAtLineStart=n.length>0&&"^"===n[0],this.name=this.name+": "+n,this.regex=s(e,"^(?:"+(this.matchOnlyAtLineStart?n.substr(1):n)+")")},e.prototype.setAction=function(e,t){this.action=function e(t,n,i){if(i){if("string"==typeof i)return i
if(i.token||""===i.token){if("string"!=typeof i.token)return r.throwError(t,"a 'token' attribute must be of type string, in rule: "+n),{token:""}
var o={token:i.token}
if(i.token.indexOf("$")>=0&&(o.tokenSubst=!0),"string"==typeof i.bracket&&("@open"===i.bracket?o.bracket=r.MonarchBracket.Open:"@close"===i.bracket?o.bracket=r.MonarchBracket.Close:r.throwError(t,"a 'bracket' attribute must be either '@open' or '@close', in rule: "+n)),i.next)if("string"!=typeof i.next)r.throwError(t,"the next state must be a string value in rule: "+n)
else{var s=i.next;/^(@pop|@push|@popall)$/.test(s)||("@"===s[0]&&(s=s.substr(1)),s.indexOf("$")<0&&(r.stateExists(t,r.substituteMatches(t,s,"",[],""))||r.throwError(t,"the next state '"+i.next+"' is not defined in rule: "+n))),o.next=s}return"number"==typeof i.goBack&&(o.goBack=i.goBack),"string"==typeof i.switchTo&&(o.switchTo=i.switchTo),"string"==typeof i.log&&(o.log=i.log),"string"==typeof i.nextEmbedded&&(o.nextEmbedded=i.nextEmbedded,t.usesEmbedded=!0),o}if(Array.isArray(i)){var u,c=[]
for(u in i)i.hasOwnProperty(u)&&(c[u]=e(t,n,i[u]))
return{group:c}}if(i.cases){var l,h=[]
for(l in i.cases)if(i.cases.hasOwnProperty(l)){var d=e(t,n,i.cases[l])
"@default"===l||"@"===l||""===l?h.push({test:null,value:d,name:l}):"@eos"===l?h.push({test:function(e,t,n,r){return r},value:d,name:l}):h.push(a(t,n,l,d))}var f=t.defaultToken
return{test:function(e,t,n,r){var i
for(i in h)if(h.hasOwnProperty(i)&&(!h[i].test||h[i].test(e,t,n,r)))return h[i].value
return f}}}return r.throwError(t,"an action must be a string, an object with a 'token' or 'cases' attribute, or an array of actions; in rule: "+n),""}return{token:""}}(e,this.name,t)},e}()
t.compile=function(e,t){function n(e,a,l){var h
for(h in l)if(l.hasOwnProperty(h)){var d=l[h],f=d.include
if(f)"string"!=typeof f&&r.throwError(s,"an 'include' attribute must be a string at: "+e),"@"===f[0]&&(f=f.substr(1)),t.tokenizer[f]||r.throwError(s,"include target '"+f+"' is not defined at: "+e),n(e+"."+f,a,t.tokenizer[f])
else{var p=new u(e)
if(Array.isArray(d)&&d.length>=1&&d.length<=3)if(p.setRegex(c,d[0]),d.length>=3)if("string"==typeof d[1])p.setAction(c,{token:d[1],next:d[2]})
else if("object"==typeof d[1]){var g=d[1]
g.next=d[2],p.setAction(c,g)}else r.throwError(s,"a next state as the last element of a rule can only be given if the action is either an object or a string, at: "+e)
else p.setAction(c,d[1])
else d.regex||r.throwError(s,"a rule must either be an array, or an object with a 'regex' or 'include' field at: "+e),d.name&&(p.name=o(d.name)),d.matchOnlyAtStart&&(p.matchOnlyAtLineStart=i(d.matchOnlyAtLineStart)),p.setRegex(c,d.regex),p.setAction(c,d.action)
a.push(p)}}}if(!t||"object"!=typeof t)throw new Error("Monarch: expecting a language definition object")
var s={}
s.languageId=e,s.noThrow=!1,s.maxStack=100,s.start=o(t.start),s.ignoreCase=i(t.ignoreCase,!1),s.tokenPostfix=o(t.tokenPostfix,"."+s.languageId),s.defaultToken=o(t.defaultToken,"source",function(){r.throwError(s,"the 'defaultToken' must be a string")}),s.usesEmbedded=!1
var a,c=t
for(a in c.languageId=e,c.ignoreCase=s.ignoreCase,c.noThrow=s.noThrow,c.usesEmbedded=s.usesEmbedded,c.stateNames=t.tokenizer,c.defaultToken=s.defaultToken,t.tokenizer&&"object"==typeof t.tokenizer||r.throwError(s,"a language definition must define the 'tokenizer' attribute as an object"),s.tokenizer=[],t.tokenizer)if(t.tokenizer.hasOwnProperty(a)){s.start||(s.start=a)
var l=t.tokenizer[a]
s.tokenizer[a]=new Array,n("tokenizer."+a,s.tokenizer[a],l)}s.usesEmbedded=c.usesEmbedded,t.brackets?Array.isArray(t.brackets)||r.throwError(s,"the 'brackets' attribute must be defined as an array"):t.brackets=[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}]
var h=[]
for(var d in t.brackets)if(t.brackets.hasOwnProperty(d)){var f=t.brackets[d]
f&&Array.isArray(f)&&3===f.length&&(f={token:f[2],open:f[0],close:f[1]}),f.open===f.close&&r.throwError(s,"open and close brackets in a 'brackets' attribute must be different: "+f.open+"\n hint: use the 'bracket' attribute if matching on equal brackets is required."),"string"==typeof f.open&&"string"==typeof f.token?h.push({token:o(f.token)+s.tokenPostfix,open:r.fixCase(s,o(f.open)),close:r.fixCase(s,o(f.close))}):r.throwError(s,"every element in the 'brackets' array must be a '{open,close,token}' object or array")}return s.brackets=h,s.noThrow=!0,s}}),define(e[48],t([1,0]),function(e,t){"use strict"
var n=function(){function e(e,t){this.mode=e,this.stateData=t}return e.prototype.clone=function(){var t=this.stateData?this.stateData.clone():null
return new e(this.mode,t)},e.prototype.equals=function(e){if(this.mode!==e.getMode())return!1
var t=e.getStateData()
return!this.stateData&&!t||!(!this.stateData||!t)&&this.stateData.equals(t)},e.prototype.getMode=function(){return this.mode},e.prototype.tokenize=function(e){return e.advanceToEOS(),{type:""}},e.prototype.getStateData=function(){return this.stateData},e.prototype.setStateData=function(e){this.stateData=e},e}()
t.NullState=n
var r=function(){function e(){}return e.prototype.getId=function(){return e.ID},e.prototype.toSimplifiedMode=function(){return this},e.ID="vs.editor.modes.nullMode",e}()
t.NullMode=r,t.nullTokenize=function(e,t,n,r,i){void 0===r&&(r=0)
var o=[{startIndex:r,mode:e}]
return{tokens:[{startIndex:r,type:""}],actualStopOffset:r+t.length,endState:n,modeTransitions:o}}}),define(e[14],t([1,0,3,12,18]),function(e,t,n,r,i){"use strict"
var o=function(){function e(e,t){this.startIndex=e,this.type=t}return e.prototype.toString=function(){return"("+this.startIndex+", "+this.type+")"},e}()
t.Token=o
var s=function(){return function(e,t,n,r){this.tokens=e,this.modeTransitions=t,this.actualStopOffset=n,this.endState=r,this.retokenize=null}}()
t.LineTokens=s,t.handleEvent=function(e,t,n){var r=e.modeTransitions
if(1===r.length)return n(r[0].modeId,e,t)
var o=i.ModeTransition.findIndexInSegmentsArray(r,t),s=r[o].mode,u=r[o].startIndex,c=e.findIndexOfOffset(u),l=-1,h=-1
o+1<r.length?(h=e.findIndexOfOffset(r[o+1].startIndex),l=e.getTokenStartIndex(h)):(h=e.getTokenCount(),l=e.getLineContent().length)
var d=e.getTokenStartIndex(c),f=new a(e,s,c,h,d,l)
return n(s.getId(),f,t-d)}
var a=function(){function e(e,t,n,r,o,s){this.modeTransitions=[new i.ModeTransition(0,t)],this._actual=e,this._firstTokenInModeIndex=n,this._nextTokenAfterMode=r,this._firstTokenCharacterOffset=o,this._nextCharacterAfterModeIndex=s}return e.prototype.getLineContent=function(){return this._actual.getLineContent().substring(this._firstTokenCharacterOffset,this._nextCharacterAfterModeIndex)},e.prototype.getTokenCount=function(){return this._nextTokenAfterMode-this._firstTokenInModeIndex},e.prototype.findIndexOfOffset=function(e){return this._actual.findIndexOfOffset(e+this._firstTokenCharacterOffset)-this._firstTokenInModeIndex},e.prototype.getTokenStartIndex=function(e){return this._actual.getTokenStartIndex(e+this._firstTokenInModeIndex)-this._firstTokenCharacterOffset},e.prototype.getTokenEndIndex=function(e){return this._actual.getTokenEndIndex(e+this._firstTokenInModeIndex)-this._firstTokenCharacterOffset},e.prototype.getTokenType=function(e){return this._actual.getTokenType(e+this._firstTokenInModeIndex)},e.prototype.getTokenText=function(e){return this._actual.getTokenText(e+this._firstTokenInModeIndex)},e}()
t.FilteredLineContext=a
var u=/\b(comment|string|regex)\b/
t.ignoreBracketsInToken=function(e){return u.test(e)}
var c=function(){function e(){}return e.registerDefaultSnippets=function(e,t){this._defaultSnippets[e]=(this._defaultSnippets[e]||[]).concat(t)},e.registerSnippets=function(e,t,n){var r=this._snippets[e]
r||(this._snippets[e]=r={}),r[t]=n},e.getNonWhitespacePrefix=function(e,t){var n=e.getLineContent(t.lineNumber).match(/[^\s]+$/)
return n?n[0]:""},e.getSnippets=function(t,i){var o=t.getWordAtPosition(i),s=o?o.word.substring(0,i.column-o.startColumn).toLowerCase():"",a=e.getNonWhitespacePrefix(t,i).toLowerCase(),u={currentWord:s,incomplete:0===s.length,suggestions:[]},c=t.getModeId(),l=[],h=this._snippets[c]
if(h)for(var d in h)l=l.concat(h[d])
var f=this._defaultSnippets[c]
return f&&(l=l.concat(f)),l.forEach(function(e){if(0===s.length&&0===a.length);else{var t=e.label.toLowerCase()
if(s.length>0&&n.startsWith(t,s));else{if(!(a.length>s.length&&n.startsWith(t,a)))return;(e=r.clone(e)).overwriteBefore=a.length}}u.suggestions.push(e)}),u},e._defaultSnippets=Object.create(null),e._snippets=Object.create(null),e}()
t.SnippetsRegistry=c}),define(e[94],t([1,0,14]),function(e,t,n){"use strict"
var r=function(){function e(e,t,n){this._registry=e,this._modeId=t,this._autoClosingPairs=n.autoClosingPairs,this._autoClosingPairs||(this._autoClosingPairs=n.brackets?n.brackets.map(function(e){return{open:e[0],close:e[1]}}):[]),this._surroundingPairs=n.surroundingPairs||this._autoClosingPairs}return e.prototype.getAutoClosingPairs=function(){return this._autoClosingPairs},e.prototype.shouldAutoClosePair=function(e,t,r){var i=this
return n.handleEvent(t,r,function(t,n,r){if(i._modeId===t){if(0===n.getTokenCount())return!0
for(var o=n.findIndexOfOffset(r-1),s=n.getTokenType(o),a=0;a<i._autoClosingPairs.length;++a)if(i._autoClosingPairs[a].open===e){if(i._autoClosingPairs[a].notIn)for(var u=0;u<i._autoClosingPairs[a].notIn.length;++u)if(s.indexOf(i._autoClosingPairs[a].notIn[u])>-1)return!1
break}return!0}var c=i._registry.getCharacterPairSupport(t)
return c?c.shouldAutoClosePair(e,n,r):null})},e.prototype.getSurroundingPairs=function(){return this._surroundingPairs},e}()
t.CharacterPairSupport=r}),define(e[28],t([1,0,3,29]),function(e,t,n,r){"use strict"
function i(e,t){var n={}
return function(r){var i=e(r)
return n.hasOwnProperty(i)||(n[i]=t(r)),n[i]}}function o(e){var t="("+e.map(n.escapeRegExpCharacters).join(")|(")+")"
return n.createRegExp(t,!0,!1,!1,!1)}function s(e){for(var t="",n=e.length-1;n>=0;n--)t+=e.charAt(n)
return t}var a=function(){return function(e,t){var n=this
this.brackets=t.map(function(t){return{modeId:e,open:t[0],close:t[1],forwardRegex:u({open:t[0],close:t[1]}),reversedRegex:c({open:t[0],close:t[1]})}}),this.forwardRegex=l(this.brackets),this.reversedRegex=h(this.brackets),this.textIsBracket={},this.textIsOpenBracket={},this.maxBracketLength=0,this.brackets.forEach(function(e){n.textIsBracket[e.open]=e,n.textIsBracket[e.close]=e,n.textIsOpenBracket[e.open]=!0,n.textIsOpenBracket[e.close]=!1,n.maxBracketLength=Math.max(n.maxBracketLength,e.open.length),n.maxBracketLength=Math.max(n.maxBracketLength,e.close.length)})}}()
t.RichEditBrackets=a
var u=i(function(e){return e.open+";"+e.close},function(e){return o([e.open,e.close])}),c=i(function(e){return e.open+";"+e.close},function(e){return o([s(e.open),s(e.close)])}),l=i(function(e){return e.map(function(e){return e.open+";"+e.close}).join(";")},function(e){var t=[]
return e.forEach(function(e){t.push(e.open),t.push(e.close)}),o(t)}),h=i(function(e){return e.map(function(e){return e.open+";"+e.close}).join(";")},function(e){var t=[]
return e.forEach(function(e){t.push(s(e.open)),t.push(s(e.close))}),o(t)}),d=function(){function e(){}return e._findPrevBracketInText=function(e,t,n,i){var o=n.match(e)
if(!o)return null
var s=n.length-o.index,a=o[0].length,u=i+s
return new r.Range(t,u-a+1,t,u+1)},e.findPrevBracketInToken=function(e,t,n,r,i){for(var o="",s=i-1;s>=r;s--)o+=n.charAt(s)
return this._findPrevBracketInText(e,t,o,r)},e.findNextBracketInText=function(e,t,n,i){var o=n.match(e)
if(!o)return null
var s=o.index,a=o[0].length,u=i+s
return new r.Range(t,u+1,t,u+1+a)},e.findNextBracketInToken=function(e,t,n,r,i){var o=n.substring(r,i)
return this.findNextBracketInText(e,t,o,r)},e}()
t.BracketsUtils=d}),define(e[99],t([1,0,3,14,28]),function(e,t,n,r,i){"use strict"
var o=function(){function e(e,t,n,r){this._registry=e,this._modeId=t,this.contribution=r||{},this.brackets=new s(t,n,this.contribution.docComment)}return e.prototype.getElectricCharacters=function(){return Array.isArray(this.contribution.embeddedElectricCharacters)?this.contribution.embeddedElectricCharacters.concat(this.brackets.getElectricCharacters()):this.brackets.getElectricCharacters()},e.prototype.onElectricCharacter=function(e,t){var n=this
return r.handleEvent(e,t,function(e,t,r){if(n._modeId===e)return n.brackets.onElectricCharacter(t,r)
var i=n._registry.getElectricCharacterSupport(e)
return i?i.onElectricCharacter(t,r):null})},e}()
t.BracketElectricCharacterSupport=o
var s=function(){function e(e,t,n){void 0===n&&(n=null),this._modeId=e,this._richEditBrackets=t,this._docComment=n||null}return e.prototype.getElectricCharacters=function(){var e=[]
if(this._richEditBrackets)for(var t=0,n=this._richEditBrackets.brackets.length;n>t;t++){var r=this._richEditBrackets.brackets[t],i=r.close.charAt(r.close.length-1)
e.push(i)}return this._docComment&&e.push(this._docComment.open.charAt(this._docComment.open.length-1)),e.filter(function(e,t,n){return n.indexOf(e)===t})},e.prototype.onElectricCharacter=function(e,t){return 0===e.getTokenCount()?null:this._onElectricCharacterDocComment(e,t)||this._onElectricCharacterStandardBrackets(e,t)},e.prototype.containsTokenTypes=function(e,t){for(var n=t.split("."),r=0;r<n.length;++r)if(e.indexOf(n[r])<0)return!1
return!0},e.prototype._onElectricCharacterStandardBrackets=function(e,t){if(!this._richEditBrackets||0===this._richEditBrackets.brackets.length)return null
var o=this._richEditBrackets.reversedRegex,s=e.getLineContent(),a=e.findIndexOfOffset(t),u=e.getTokenStartIndex(a),c=t+1,l=n.firstNonWhitespaceIndex(e.getLineContent())
if(-1!==l&&u>l)return null
if(!r.ignoreBracketsInToken(e.getTokenType(a))){var h=i.BracketsUtils.findPrevBracketInToken(o,1,s,u,c)
if(h){var d=s.substring(h.startColumn-1,h.endColumn-1)
if(!this._richEditBrackets.textIsOpenBracket[d])return{matchOpenBracket:d}}}return null},e.prototype._onElectricCharacterDocComment=function(e,t){if(!this._docComment||!this._docComment.close)return null
var n=e.getLineContent()
if(n[t]!==this._docComment.open.charAt(this._docComment.open.length-1))return null
if(n.indexOf(this._docComment.close,t)>=0)return null
var r=e.findIndexOfOffset(t)
return this.containsTokenTypes(e.getTokenType(r),this._docComment.scope)?n.substring(e.getTokenStartIndex(r),t+1)!==this._docComment.open?null:{appendText:this._docComment.close}:null},e}()
t.Brackets=s}),define(e[53],t([1,0,62,48,14]),function(e,t,n,r,i){"use strict"
function o(e){return"function"==typeof e}var s=function(){function e(e,t,n){if(this._mode=e,this.customization=t,this.supportsNestedModes=n,this._embeddedModesListeners={},this.supportsNestedModes&&!this._mode.setTokenizationSupport)throw new Error("Cannot be a mode with nested modes unless I can emit a tokenizationSupport changed event!")
this.defaults={enterNestedMode:!o(t.enterNestedMode),getNestedMode:!o(t.getNestedMode),getNestedModeInitialState:!o(t.getNestedModeInitialState),getLeavingNestedModeData:!o(t.getLeavingNestedModeData),onReturningFromNestedMode:!o(t.onReturningFromNestedMode)}}return e.prototype.dispose=function(){for(var e in this._embeddedModesListeners)this._embeddedModesListeners[e].dispose(),delete this._embeddedModesListeners[e]},e.prototype.getInitialState=function(){return this.customization.getInitialState()},e.prototype.tokenize=function(e,t,n,r){return void 0===n&&(n=0),void 0===r&&(r=n+e.length),t.getMode()!==this._mode?this._nestedTokenize(e,t,n,r,[],[]):this._myTokenize(e,t,n,r,[],[])},e.prototype._nestedTokenize=function(e,t,n,i,o,s){for(var a=t.getStateData(),u=this.getLeavingNestedModeData(e,a),c=t;c.getStateData()&&c.getStateData().getMode()!==this._mode;)c=c.getStateData()
var l,h=c.getMode()
if(!u)return(l=h.tokenizationSupport?h.tokenizationSupport.tokenize(e,t,n,i):r.nullTokenize(h,e,t,n)).tokens=o.concat(l.tokens),l.modeTransitions=s.concat(l.modeTransitions),l
var d,f=u.nestedModeBuffer
f.length>0&&(t=(d=h.tokenizationSupport?h.tokenizationSupport.tokenize(f,t,n,i):r.nullTokenize(h,f,t,n)).endState,o=o.concat(d.tokens),s=s.concat(d.modeTransitions))
var p=u.bufferAfterNestedMode,g=u.stateAfterNestedMode
return g.setStateData(a.getStateData()),this.onReturningFromNestedMode(g,t),this._myTokenize(p,g,n+f.length,i,o,s)},e.prototype._myTokenize=function(t,r,o,s,a,u){var c,l,h=this,d=new n.LineStream(t),f=null,p=null
r=r.clone(),(u.length<=0||u[u.length-1].mode!==this._mode)&&u.push({startIndex:o,mode:this._mode})
for(var g=Math.min(s-o,t.length);d.pos()<g;){l=d.pos()
do{if(null==(c=r.tokenize(d))||(void 0===c.type||null===c.type)&&(void 0===c.nextState||null===c.nextState))throw new Error("Tokenizer must return a valid state")
if(c.nextState&&(c.nextState.setStateData(r.getStateData()),r=c.nextState),d.pos()<=l)throw new Error("Stream did not advance while tokenizing. Mode id is "+this._mode.getId()+' (stuck at token type: "'+c.type+'", prepend tokens: "'+a.map(function(e){return e.type}).join(",")+'").')}while(!c.type&&""!==c.type)
if((f!==c.type||c.dontMergeWithPrev||null===f)&&a.push(new i.Token(l+o,c.type)),f=c.type,this.supportsNestedModes&&this.enterNestedMode(r))if(this._getEmbeddedLevel(r)<e.MAX_EMBEDDED_LEVELS){var m=this.getNestedModeInitialState(r),v=m.state.getMode()
if("function"==typeof v.addSupportChangedListener&&!this._embeddedModesListeners.hasOwnProperty(v.getId())){var _=!1
this._embeddedModesListeners[v.getId()]=v.addSupportChangedListener(function(e){_||e.tokenizationSupport&&(_=!0,h._mode.setTokenizationSupport(function(e){return e.tokenizationSupport}),_=!1)})}if(!d.eos()){var y=t.substr(d.pos()),b=this._nestedTokenize(y,m.state,o+d.pos(),s,a,u)
return b.retokenize=b.retokenize||m.missingModePromise,b}r=m.state,p=m.missingModePromise}}return{tokens:a,actualStopOffset:d.pos()+o,modeTransitions:u,endState:r,retokenize:p}},e.prototype._getEmbeddedLevel=function(e){for(var t=-1;e;)t++,e=e.getStateData()
return t},e.prototype.enterNestedMode=function(e){return!this.defaults.enterNestedMode&&this.customization.enterNestedMode(e)},e.prototype.getNestedMode=function(e){return this.defaults.getNestedMode?null:this.customization.getNestedMode(e)},e._validatedNestedMode=function(e){var t=new r.NullMode,n=null
return e&&e.mode&&(t=e.mode),e&&e.missingModePromise&&(n=e.missingModePromise),{mode:t,missingModePromise:n}},e.prototype.getNestedModeInitialState=function(t){if(this.defaults.getNestedModeInitialState){var n,i=e._validatedNestedMode(this.getNestedMode(t)),o=i.missingModePromise
return(n=i.mode.tokenizationSupport?i.mode.tokenizationSupport.getInitialState():new r.NullState(i.mode,null)).setStateData(t),{state:n,missingModePromise:o}}return this.customization.getNestedModeInitialState(t)},e.prototype.getLeavingNestedModeData=function(e,t){return this.defaults.getLeavingNestedModeData?null:this.customization.getLeavingNestedModeData(e,t)},e.prototype.onReturningFromNestedMode=function(e,t){return this.defaults.onReturningFromNestedMode?null:this.customization.onReturningFromNestedMode(e,t)},e.MAX_EMBEDDED_LEVELS=5,e}()
t.TokenizationSupport=s}),define(e[105],t([1,0,39,62,25,53]),function(e,t,r,i,o,s){"use strict"
var a=function(e){function t(n,r,i,o,s){e.call(this,n),this.id=t.ID++,this.modeService=r,this.lexer=i,this.stack=o||[i.start],this.embeddedMode=s||null,this.embeddedEntered=!1,this.groupActions=null,this.groupMatches=null,this.groupMatched=null,this.groupRule=null}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),this.modeService,this.lexer,this.stack.slice(0),this.embeddedMode)},t.prototype.equals=function(n){if(!e.prototype.equals.call(this,n))return!1
if(!(n instanceof t))return!1
var r,i=n
if(this.stack.length!==i.stack.length||this.lexer.languageId!==i.lexer.languageId||this.embeddedMode!==i.embeddedMode)return!1
for(r in this.stack)if(this.stack.hasOwnProperty(r)&&this.stack[r]!==i.stack[r])return!1
return!0},t.prototype.tokenize=function(e,t){var n=this.stack.length,r=0,i=this.stack[0]
this.embeddedEntered=!1
var s=null,a=null,u=null,c=null
if(this.groupActions)r=this.groupActions.length,s=this.groupMatches,a=this.groupMatched.shift(),u=this.groupActions.shift(),c=this.groupRule,0===this.groupActions.length&&(this.groupActions=null,this.groupMatches=null,this.groupMatched=null,this.groupRule=null)
else{if(e.eos())return{type:""}
var l=e.advanceToEOS()
e.goBack(l.length)
var h=this.lexer.tokenizer[i]
if(h||(h=o.findRules(this.lexer,i)),h){c=null
var d,f=e.pos()
for(d in h)if(h.hasOwnProperty(d)&&(c=h[d],(0===f||!c.matchOnlyAtLineStart)&&(s=l.match(c.regex)))){a=s[0],u=c.action
break}}else o.throwError(this.lexer,"tokenizer state is not defined: "+i)}for(s||(s=[""],a=""),u||(e.eos()||(a=(s=[e.peek()])[0]),u=this.lexer.defaultToken),e.advance(a.length);u.test;){var p=u.test(a,s,i,e.eos())
u=p}var g=null
if("string"==typeof u||Array.isArray(u))g=u
else if(u.group)g=u.group
else if(null!==u.token&&void 0!==u.token){if(g=u.token,u.tokenSubst&&(g=o.substituteMatches(this.lexer,g,a,s,i)),u.nextEmbedded)if("@pop"===u.nextEmbedded)this.embeddedMode||o.throwError(this.lexer,"cannot pop embedded mode if not inside one"),this.embeddedMode=null
else if(this.embeddedMode)o.throwError(this.lexer,"cannot enter embedded mode from within an embedded mode")
else{this.embeddedMode=o.substituteMatches(this.lexer,u.nextEmbedded,a,s,i)
var m=this.modeService.getModeIdForLanguageName(this.embeddedMode)
this.embeddedMode&&m&&(this.embeddedMode=m),this.embeddedEntered=!0}if(u.goBack&&e.goBack(u.goBack),u.switchTo&&"string"==typeof u.switchTo)"@"===(v=o.substituteMatches(this.lexer,u.switchTo,a,s,i))[0]&&(v=v.substr(1)),o.findRules(this.lexer,v)?this.stack[0]=v:o.throwError(this.lexer,"trying to switch to a state '"+v+"' that is undefined in rule: "+c.name),null
else if(u.transform&&"function"==typeof u.transform)this.stack=u.transform(this.stack),null
else if(u.next)if("@push"===u.next)this.stack.length>=this.lexer.maxStack?o.throwError(this.lexer,"maximum tokenizer stack size reached: ["+this.stack[0]+","+this.stack[1]+",...,"+this.stack[this.stack.length-2]+","+this.stack[this.stack.length-1]+"]"):this.stack.unshift(i)
else if("@pop"===u.next)this.stack.length<=1?o.throwError(this.lexer,"trying to pop an empty stack in rule: "+c.name):this.stack.shift()
else if("@popall"===u.next)this.stack.length>1&&(this.stack=[this.stack[this.stack.length-1]])
else{var v
"@"===(v=o.substituteMatches(this.lexer,u.next,a,s,i))[0]&&(v=v.substr(1)),o.findRules(this.lexer,v)?this.stack.unshift(v):o.throwError(this.lexer,"trying to set a next state '"+v+"' that is undefined in rule: "+c.name)}u.log&&"string"==typeof u.log&&o.log(this.lexer,this.lexer.languageId+": "+o.substituteMatches(this.lexer,u.log,a,s,i))}if(null===g&&(o.throwError(this.lexer,"lexer rule has no well-defined action in rule: "+c.name),g=this.lexer.defaultToken),Array.isArray(g)){this.groupActions&&this.groupActions.length>0&&o.throwError(this.lexer,"groups cannot be nested: "+c.name),s.length!==g.length+1&&o.throwError(this.lexer,"matched number of groups does not match the number of actions in rule: "+c.name)
for(var _=0,y=1;y<s.length;y++)_+=s[y].length
return _!==a.length&&o.throwError(this.lexer,"with groups, all characters should be matched in consecutive groups in rule: "+c.name),this.groupMatches=s,this.groupMatched=s.slice(1),this.groupActions=g.slice(0),this.groupRule=c,e.goBack(a.length),this.tokenize(e)}if("@rematch"===g&&(e.goBack(a.length),a="",s=null,g=""),0===a.length)if(n!==this.stack.length||i!==this.stack[0]||(this.groupActions?this.groupActions.length:0)!==r){if(!t)return this.tokenize(e)}else o.throwError(this.lexer,"no progress in tokenizer in rule: "+c.name),e.advanceToEOS()
if(0===g.indexOf("@brackets")){var b=g.substr("@brackets".length),k=function(e,t){if(!t)return null
t=o.fixCase(e,t)
for(var n=e.brackets,r=0;r<n.length;r++){var i=n[r]
if(i.open===t)return{token:i.token,bracketType:o.MonarchBracket.Open}
if(i.close===t)return{token:i.token,bracketType:o.MonarchBracket.Close}}return null}(this.lexer,a)
return k||(o.throwError(this.lexer,"@brackets token returned but no bracket defined as: "+a),k={token:"",bracketType:o.MonarchBracket.None}),{type:o.sanitize(k.token+b)}}var C=""===g?"":g+this.lexer.tokenPostfix
return{type:o.sanitize(C)}},t.ID=0,t}(r.AbstractState)
t.MonarchLexer=a,t.createTokenizationSupport=function(e,t,n){return new s.TokenizationSupport(t,{getInitialState:function(){return new a(t,e,n)},enterNestedMode:function(e){return e instanceof a&&e.embeddedEntered},getNestedMode:function(t){var n=t.embeddedMode
if(!e.isRegisteredMode(n))return{mode:e.getMode("text/plain"),missingModePromise:null}
var r=e.getMode(n)
return r?{mode:r,missingModePromise:null}:{mode:e.getMode("text/plain"),missingModePromise:e.getOrCreateMode(n).then(function(){return null})}},getLeavingNestedModeData:function(e,t){for(var n=t.clone(),r=new i.LineStream(e);!r.eos()&&n.embeddedMode;)n.tokenize(r,!0)
if(n.embeddedMode)return null
var o=r.pos()
return{nestedModeBuffer:e.substring(0,o),bufferAfterNestedMode:e.substring(o),stateAfterNestedMode:n}}},n.usesEmbedded)}}),define(e[108],t([1,0]),function(e,t){"use strict"
var n=function(){return function(e,t){this.index=e,this.remainder=t}}()
t.PrefixSumIndexOfResult=n
var r=function(){function e(e){this.values=e,this.prefixSum=[]
for(var t=0,n=this.values.length;n>t;t++)this.prefixSum[t]=0
this.prefixSumValidIndex=-1}return e.prototype.getCount=function(){return this.values.length},e.prototype.insertValue=function(e,t){e=Math.floor(e),t=Math.floor(t),this.values.splice(e,0,t),this.prefixSum.splice(e,0,0),e-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=e-1)},e.prototype.insertValues=function(t,n){t=Math.floor(t),0!==n.length&&(this.values=this.values.slice(0,t).concat(n).concat(this.values.slice(t)),this.prefixSum=this.prefixSum.slice(0,t).concat(e._zeroArray(n.length)).concat(this.prefixSum.slice(t)),t-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=t-1))},e._zeroArray=function(e){e=Math.floor(e)
for(var t=[],n=0;e>n;n++)t[n]=0
return t},e.prototype.changeValue=function(e,t){e=Math.floor(e),t=Math.floor(t),this.values[e]!==t&&(this.values[e]=t,e-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=e-1))},e.prototype.removeValues=function(e,t){e=Math.floor(e),t=Math.floor(t),this.values.splice(e,t),this.prefixSum.splice(e,t),e-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=e-1)},e.prototype.getTotalValue=function(){return 0===this.values.length?0:this.getAccumulatedValue(this.values.length-1)},e.prototype.getAccumulatedValue=function(e){if(0>(e=Math.floor(e)))return 0
if(e<=this.prefixSumValidIndex)return this.prefixSum[e]
var t=this.prefixSumValidIndex+1
0===t&&(this.prefixSum[0]=this.values[0],t++),e>=this.values.length&&(e=this.values.length-1)
for(var n=t;e>=n;n++)this.prefixSum[n]=this.prefixSum[n-1]+this.values[n]
return this.prefixSumValidIndex=Math.max(this.prefixSumValidIndex,e),this.prefixSum[e]},e.prototype.getIndexOf=function(e){e=Math.floor(e)
for(var t,r,i,o=0,s=this.values.length-1;s>=o;)if(t=o+(s-o)/2|0,(i=(r=this.getAccumulatedValue(t))-this.values[t])>e)s=t-1
else{if(!(e>=r))break
o=t+1}return new n(t,e-i)},e}()
t.PrefixSumComputer=r}),define(e[66],t([7,6]),function(e,t){return e.create("vs/base/common/errors",t)}),define(e[2],t([1,0,66,12,10,9,58,3]),function(e,t,n,r,i,o,s,a){"use strict"
function u(e){d(e)||t.errorHandler.onUnexpectedError(e)}function c(e,t){var n=new p(e)
return t?n.verboseMessage:n.message}function l(e,t){return e.message?t&&(e.stack||e.stacktrace)?n.localize(7,null,h(e),e.stack||e.stacktrace):h(e):n.localize(8,null)}function h(e){return"string"==typeof e.code&&"number"==typeof e.errno&&"string"==typeof e.syscall?n.localize(9,null,e.message):e.message}function d(e){return e instanceof Error&&e.name===g&&e.message===g}var f=function(){function e(){this.listeners=[],this.unexpectedErrorHandler=function(e){i.setTimeout(function(){if(e.stack)throw new Error(e.message+"\n\n"+e.stack)
throw e},0)}}return e.prototype.addListener=function(e){var t=this
return this.listeners.push(e),function(){t._removeListener(e)}},e.prototype.emit=function(e){this.listeners.forEach(function(t){t(e)})},e.prototype._removeListener=function(e){this.listeners.splice(this.listeners.indexOf(e),1)},e.prototype.setUnexpectedErrorHandler=function(e){this.unexpectedErrorHandler=e},e.prototype.getUnexpectedErrorHandler=function(){return this.unexpectedErrorHandler},e.prototype.onUnexpectedError=function(e){this.unexpectedErrorHandler(e),this.emit(e)},e}()
t.ErrorHandler=f,t.errorHandler=new f,t.setUnexpectedErrorHandler=function(e){t.errorHandler.setUnexpectedErrorHandler(e)},t.onUnexpectedError=u,t.onUnexpectedPromiseError=function(e){return e.then(null,u)},t.transformErrorForSerialization=function(e){return e instanceof Error?{$isError:!0,name:e.name,message:e.message,stack:e.stacktrace||e.stack}:e}
var p=function(){function e(e){this.status=e.status,this.statusText=e.statusText,this.name="ConnectionError"
try{this.responseText=e.responseText}catch(e){this.responseText=""}if(this.errorMessage=null,this.errorCode=null,this.errorObject=null,this.responseText)try{var t=JSON.parse(this.responseText)
this.errorMessage=t.message,this.errorCode=t.code,this.errorObject=t}catch(e){}}return Object.defineProperty(e.prototype,"message",{get:function(){return this.connectionErrorToMessage(this,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verboseMessage",{get:function(){return this.connectionErrorToMessage(this,!0)},enumerable:!0,configurable:!0}),e.prototype.connectionErrorDetailsToMessage=function(e,t){var r=e.errorCode,i=e.errorMessage
return null!==r&&null!==i?n.localize(0,null,a.rtrim(i,"."),r):null!==i?i:t&&null!==e.responseText?e.responseText:null},e.prototype.connectionErrorToMessage=function(e,t){var r=this.connectionErrorDetailsToMessage(e,t)
return 401===e.status?null!==r?n.localize(1,null,r):n.localize(2,null):r||(e.status>0&&null!==e.statusText?t&&null!==e.responseText&&e.responseText.length>0?n.localize(3,null,e.statusText,e.status,e.responseText):n.localize(4,null,e.statusText,e.status):t&&null!==e.responseText&&e.responseText.length>0?n.localize(5,null,e.responseText):n.localize(6,null))},e}()
t.ConnectionError=p,r.derive(Error,p),t.toErrorMessage=function e(t,r){if(void 0===t&&(t=null),void 0===r&&(r=!1),!t)return n.localize(10,null)
if(Array.isArray(t)){var i=s.coalesce(t),a=e(i[0],r)
return i.length>1?n.localize(11,null,a,i.length):a}if(o.isString(t))return t
if(!o.isUndefinedOrNull(t.status))return c(t,r)
if(t.detail){var u=t.detail
if(u.error){if(u.error&&!o.isUndefinedOrNull(u.error.status))return c(u.error,r)
if(!o.isArray(u.error))return l(u.error,r)
for(var h=0;h<u.error.length;h++)if(u.error[h]&&!o.isUndefinedOrNull(u.error[h].status))return c(u.error[h],r)}if(u.exception)return o.isUndefinedOrNull(u.exception.status)?l(u.exception,r):c(u.exception,r)}return t.stack?l(t,r):t.message?t.message:n.localize(12,null)}
var g="Canceled"
t.isPromiseCanceledError=d,t.canceled=function(){var e=new Error(g)
return e.name=e.message,e},t.notImplemented=function(){return new Error(n.localize(13,null))},t.illegalArgument=function(e){return e?new Error(n.localize(14,null,e)):new Error(n.localize(15,null))},t.illegalState=function(e){return e?new Error(n.localize(16,null,e)):new Error(n.localize(17,null))},t.readonly=function(e){return e?new Error("readonly property '"+e+" cannot be changed'"):new Error("readonly property cannot be changed")},t.loaderError=function(e){return i.isWeb?new Error(n.localize(18,null)):new Error(n.localize(19,null,JSON.stringify(e)))},t.create=function(e,t){void 0===t&&(t={})
var n=new Error(e)
return o.isNumber(t.severity)&&(n.severity=t.severity),t.actions&&(n.actions=t.actions),n}}),define(e[63],t([1,0,2]),function(e,t,n){"use strict"
var r=function(){function e(){}return e.prototype.add=function(e,t,n){var r=this
void 0===t&&(t=null),this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(t),Array.isArray(n)&&n.push({dispose:function(){return r.remove(e,t)}})},e.prototype.remove=function(e,t){if(void 0===t&&(t=null),this._callbacks){for(var n=!1,r=0,i=this._callbacks.length;i>r;r++)if(this._callbacks[r]===e){if(this._contexts[r]===t)return this._callbacks.splice(r,1),void this._contexts.splice(r,1)
n=!0}if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}},e.prototype.invoke=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
if(this._callbacks){for(var r=[],i=this._callbacks.slice(0),o=this._contexts.slice(0),s=0,a=i.length;a>s;s++)try{r.push(i[s].apply(o[s],e))}catch(e){n.onUnexpectedError(e)}return r}},e.prototype.isEmpty=function(){return!this._callbacks||0===this._callbacks.length},e.prototype.dispose=function(){this._callbacks=void 0,this._contexts=void 0},e}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}),define(e[8],t([1,0,63]),function(e,t,n){"use strict"
var r
!function(e){var t={dispose:function(){}}
e.None=function(){return t}}(r||(r={})),Object.defineProperty(t,"__esModule",{value:!0}),t.default=r
var i,o=function(){function e(e){this._options=e}return Object.defineProperty(e.prototype,"event",{get:function(){var t=this
return this._event||(this._event=function(r,i,o){var s
return t._callbacks||(t._callbacks=new n.default),t._options&&t._options.onFirstListenerAdd&&t._callbacks.isEmpty()&&t._options.onFirstListenerAdd(t),t._callbacks.add(r,i),s={dispose:function(){s.dispose=e._noop,t._disposed||(t._callbacks.remove(r,i),t._options&&t._options.onLastListenerRemove&&t._callbacks.isEmpty()&&t._options.onLastListenerRemove(t))}},Array.isArray(o)&&o.push(s),s}),this._event},enumerable:!0,configurable:!0}),e.prototype.fire=function(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)},e.prototype.dispose=function(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0,this._disposed=!0)},e._noop=function(){},e}()
t.Emitter=o,t.fromEventEmitter=function(e,t){return function(n,r,i){var o=e.addListener2(t,function(){n.apply(r,arguments)})
return Array.isArray(i)&&i.push(o),o}},t.mapEvent=function(e,t){return function(n,r,i){return void 0===r&&(r=null),e(function(e){return n.call(r,t(e))},null,i)}},t.filterEvent=function(e,t){return function(n,r,i){return void 0===r&&(r=null),e(function(e){return t(e)&&n.call(r,e)},null,i)}},t.debounceEvent=function(e,t,n){void 0===n&&(n=100)
var r,i,s,a=new o({onFirstListenerAdd:function(){r=e(function(e){i=t(i,e),clearTimeout(s),s=setTimeout(function(){a.fire(i),i=void 0},n)})},onLastListenerRemove:function(){r.dispose()}})
return a.event},function(e){e[e.Idle=0]="Idle",e[e.Running=1]="Running"}(i||(i={}))
var s=function(){function e(){this.buffers=[]}return e.prototype.wrapEvent=function(e){var t=this
return function(n,r,i){return e(function(e){var i=t.buffers[t.buffers.length-1]
i?i.push(function(){return n.call(r,e)}):n.call(r,e)},void 0,i)}},e.prototype.bufferEvents=function(e){var t=[]
this.buffers.push(t),e(),this.buffers.pop(),t.forEach(function(e){return e()})},e}()
t.EventBufferer=s}),define(e[47],t([1,0,8]),function(e,t,n){"use strict"
var r
!function(e){e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:n.default.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:n.default.None})}(r=t.CancellationToken||(t.CancellationToken={}))
var i=Object.freeze(function(e,t){var n=setTimeout(e.bind(t),0)
return{dispose:function(){clearTimeout(n)}}}),o=function(){function e(){this._isCancelled=!1}return e.prototype.cancel=function(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this._emitter=void 0))},Object.defineProperty(e.prototype,"isCancellationRequested",{get:function(){return this._isCancelled},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCancellationRequested",{get:function(){return this._isCancelled?i:(this._emitter||(this._emitter=new n.Emitter),this._emitter.event)},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){}return Object.defineProperty(e.prototype,"token",{get:function(){return this._token||(this._token=new o),this._token},enumerable:!0,configurable:!0}),e.prototype.cancel=function(){this._token?this._token.cancel():this._token=r.Cancelled},e.prototype.dispose=function(){this.cancel()},e}()
t.CancellationTokenSource=s}),define(e[15],t([1,0,2]),function(e,t,r){"use strict"
function i(e,t){try{return e(t)}catch(e){r.onUnexpectedError(e)}}var o=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this._type=e,this._data=t}return e.prototype.getType=function(){return this._type},e.prototype.getData=function(){return this._data},e}()
t.EmitterEvent=o
var s=function(){function e(e){if(void 0===e&&(e=null),this._listeners={},this._bulkListeners=[],this._collectedEvents=[],this._deferredCnt=0,e){this._allowedEventTypes={}
for(var t=0;t<e.length;t++)this._allowedEventTypes[e[t]]=!0}else this._allowedEventTypes=null}return e.prototype.dispose=function(){this._listeners={},this._bulkListeners=[],this._collectedEvents=[],this._deferredCnt=0,this._allowedEventTypes=null},e.prototype.addListener=function(e,t){if("*"===e)throw new Error("Use addBulkListener(listener) to register your listener!")
if(this._allowedEventTypes&&!this._allowedEventTypes.hasOwnProperty(e))throw new Error("This object will never emit this event type!")
this._listeners.hasOwnProperty(e)?this._listeners[e].push(t):this._listeners[e]=[t]
var n=this
return{dispose:function(){n&&(n._removeListener(e,t),n=null,t=null)}}},e.prototype.addListener2=function(e,t){return this.addListener(e,t)},e.prototype.addOneTimeDisposableListener=function(e,t){var n=this.addListener(e,function(e){n.dispose(),t(e)})
return n},e.prototype.addBulkListener=function(e){var t=this
return this._bulkListeners.push(e),{dispose:function(){t._removeBulkListener(e)}}},e.prototype.addBulkListener2=function(e){return this.addBulkListener(e)},e.prototype.addEmitter=function(e){var t=this
return e.addBulkListener2(function(e){var n=e
0===t._deferredCnt?t._emitEvents(n):t._collectedEvents.push.apply(t._collectedEvents,n)})},e.prototype.addEmitter2=function(e){return this.addEmitter(e)},e.prototype._removeListener=function(e,t){if(this._listeners.hasOwnProperty(e))for(var n=this._listeners[e],r=0,i=n.length;i>r;r++)if(n[r]===t){n.splice(r,1)
break}},e.prototype._removeBulkListener=function(e){for(var t=0,n=this._bulkListeners.length;n>t;t++)if(this._bulkListeners[t]===e){this._bulkListeners.splice(t,1)
break}},e.prototype._emitToSpecificTypeListeners=function(e,t){if(this._listeners.hasOwnProperty(e))for(var n=this._listeners[e].slice(0),r=0,o=n.length;o>r;r++)i(n[r],t)},e.prototype._emitToBulkListeners=function(e){for(var t=this._bulkListeners.slice(0),n=0,r=t.length;r>n;n++)i(t[n],e)},e.prototype._emitEvents=function(e){this._bulkListeners.length>0&&this._emitToBulkListeners(e)
for(var t=0,n=e.length;n>t;t++){var r=e[t]
this._emitToSpecificTypeListeners(r.getType(),r.getData())}},e.prototype.emit=function(e,t){if(void 0===t&&(t={}),this._allowedEventTypes&&!this._allowedEventTypes.hasOwnProperty(e))throw new Error("Cannot emit this event type because it wasn't white-listed!")
if(this._listeners.hasOwnProperty(e)||0!==this._bulkListeners.length){var n=new o(e,t)
0===this._deferredCnt?this._emitEvents([n]):this._collectedEvents.push(n)}},e.prototype.deferredEmit=function(e){this._deferredCnt=this._deferredCnt+1
var t=function(e){try{return e()}catch(e){r.onUnexpectedError(e)}}(e)
return this._deferredCnt=this._deferredCnt-1,0===this._deferredCnt&&this._emitCollected(),t},e.prototype._emitCollected=function(){var e=this._collectedEvents
this._collectedEvents=[],e.length>0&&this._emitEvents(e)},e}()
t.EventEmitter=s
var a=function(){return function(e,t){this.target=e,this.arg=t}}(),u=function(e){function t(t){void 0===t&&(t=null),e.call(this,t),this._emitQueue=[]}return n(t,e),t.prototype._emitToSpecificTypeListeners=function(e,t){if(this._listeners.hasOwnProperty(e))for(var n=this._listeners[e],r=0,i=n.length;i>r;r++)this._emitQueue.push(new a(n[r],t))},t.prototype._emitToBulkListeners=function(e){for(var t=this._bulkListeners,n=0,r=t.length;r>n;n++)this._emitQueue.push(new a(t[n],e))},t.prototype._emitEvents=function(t){for(e.prototype._emitEvents.call(this,t);this._emitQueue.length>0;){var n=this._emitQueue.shift()
i(n.target,n.arg)}},t}(s)
t.OrderGuaranteeEventEmitter=u}),define(e[26],t([1,0,10,2,61]),function(e,t,n,r,i){"use strict"
t.ENABLE_TIMER=!1
var o=n.globals.msWriteProfilerMark
!function(e){e[e.EDITOR=0]="EDITOR",e[e.LANGUAGES=1]="LANGUAGES",e[e.WORKER=2]="WORKER",e[e.WORKBENCH=3]="WORKBENCH",e[e.STARTUP=4]="STARTUP"}(t.Topic||(t.Topic={}))
var s=t.Topic,a=function(){function e(){}return e.prototype.stop=function(){},e.prototype.timeTaken=function(){return-1},e}(),u=function(){function e(e,t,n,r,s){if(this.timeKeeper=e,this.name=t,this.description=s,this.topic=n,this.stopTime=null,r)this.startTime=r
else if(this.startTime=new Date,this.sw=i.StopWatch.create(),o){var a=["Monaco",this.topic,this.name,"start"]
o(a.join("|"))}}return e.prototype.stop=function(e){if(null===this.stopTime){if(e)return this.stopTime=e,this.sw=null,void this.timeKeeper._onEventStopped(this)
if(this.stopTime=new Date,this.sw&&this.sw.stop(),this.timeKeeper._onEventStopped(this),o){var t=["Monaco",this.topic,this.name,"stop"]
o(t.join("|"))}}},e.prototype.timeTaken=function(){return this.sw?this.sw.elapsed():this.stopTime?this.stopTime.getTime()-this.startTime.getTime():-1},e}(),c=function(){function e(){this.cleaningIntervalId=-1,this.collectedEvents=[],this.listeners=[]}return e.prototype.isEnabled=function(){return t.ENABLE_TIMER},e.prototype.start=function(e,n,r,i){if(!this.isEnabled())return t.nullEvent
var o
"string"==typeof e?o=e:e===s.EDITOR?o="Editor":e===s.LANGUAGES?o="Languages":e===s.WORKER?o="Worker":e===s.WORKBENCH?o="Workbench":e===s.STARTUP&&(o="Startup"),this.initAutoCleaning()
var a=new u(this,n,o,r,i)
return this.addEvent(a),a},e.prototype.dispose=function(){-1!==this.cleaningIntervalId&&(n.clearInterval(this.cleaningIntervalId),this.cleaningIntervalId=-1)},e.prototype.addListener=function(e){var t=this
return this.listeners.push(e),{dispose:function(){for(var n=0;n<t.listeners.length;n++)if(t.listeners[n]===e)return void t.listeners.splice(n,1)}}},e.prototype.addEvent=function(t){t.id=e.EVENT_ID,e.EVENT_ID++,this.collectedEvents.push(t),this.collectedEvents.length>e._EVENT_CACHE_LIMIT&&this.collectedEvents.shift()},e.prototype.initAutoCleaning=function(){var t=this;-1===this.cleaningIntervalId&&(this.cleaningIntervalId=n.setInterval(function(){var n=Date.now()
t.collectedEvents.forEach(function(t){!t.stopTime&&n-t.startTime.getTime()>=e._MAX_TIMER_LENGTH&&t.stop()})},e._CLEAN_UP_INTERVAL))},e.prototype.getCollectedEvents=function(){return this.collectedEvents.slice(0)},e.prototype.clearCollectedEvents=function(){this.collectedEvents=[]},e.prototype._onEventStopped=function(e){for(var t=[e],n=this.listeners.slice(0),i=0;i<n.length;i++)try{n[i](t)}catch(e){r.onUnexpectedError(e)}},e.prototype.setInitialCollectedEvents=function(t,n){var r=this
this.isEnabled()&&(n&&(e.PARSE_TIME=n),t.forEach(function(e){var t=new u(r,e.name,e.topic,e.startTime,e.description)
t.stop(e.stopTime),r.addEvent(t)}))},e._MAX_TIMER_LENGTH=6e4,e._CLEAN_UP_INTERVAL=12e4,e._EVENT_CACHE_LIMIT=1e3,e.EVENT_ID=1,e.PARSE_TIME=new Date,e}()
t.TimeKeeper=c
var l=new c
t.nullEvent=new a,t.start=function(e,t,n,r){return l.start(e,t,n,r)},t.getTimeKeeper=function(){return l}}),define(e[5],t([110,2]),function(e,t){"use strict"
var n={}
return e.Promise.addEventListener("error",function(e){var r=e.detail,i=r.id
return r.parent?void(r.handler&&n&&delete n[i]):(n[i]=r,void(1===Object.keys(n).length&&setTimeout(function(){var e=n
n={},Object.keys(e).forEach(function(n){var r=e[n]
r.exception?t.onUnexpectedError(r.exception):r.error&&t.onUnexpectedError(r.error),console.log("WARNING: Promise with no error callback:"+r.id),console.log(r),r.exception&&console.log(r.exception.stack)})},0)))}),{Promise:e.Promise,TPromise:e.Promise,PPromise:e.Promise}}),define(e[24],t([1,0,2,10,5,47,16]),function(e,t,r,i,o,s,a){"use strict"
function u(e){return e&&"function"==typeof e.then}t.toThenable=function(e){return u(e)?e:o.TPromise.as(e)},t.asWinJsPromise=function(e){var t=new s.CancellationTokenSource
return new o.TPromise(function(n,r){var i=e(t.token)
u(i)?i.then(n,r):n(i)},function(){t.cancel()})},t.wireCancellationToken=function(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}
var c=function(){function e(){this.activePromise=null,this.queuedPromise=null,this.queuedPromiseFactory=null}return e.prototype.queue=function(e){var t=this
if(this.activePromise){if(this.queuedPromiseFactory=e,!this.queuedPromise){var n=function(){t.queuedPromise=null
var e=t.queue(t.queuedPromiseFactory)
return t.queuedPromiseFactory=null,e}
this.queuedPromise=new o.Promise(function(e,r,i){t.activePromise.then(n,n,i).done(e)},function(){t.activePromise.cancel()})}return new o.Promise(function(e,n,r){t.queuedPromise.then(e,n,r)},function(){})}return this.activePromise=e(),new o.Promise(function(e,n,r){t.activePromise.done(function(n){t.activePromise=null,e(n)},function(e){t.activePromise=null,n(e)},r)},function(){t.activePromise.cancel()})},e}()
t.Throttler=c
var l=function(){function e(){this.current=o.TPromise.as(null)}return e.prototype.queue=function(e){return this.current=this.current.then(function(){return e()})},e}()
t.SimpleThrottler=l
var h=function(){function e(e){this.defaultDelay=e,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}return e.prototype.trigger=function(e,t){var n=this
return void 0===t&&(t=this.defaultDelay),this.task=e,this.cancelTimeout(),this.completionPromise||(this.completionPromise=new o.Promise(function(e){n.onSuccess=e},function(){}).then(function(){n.completionPromise=null,n.onSuccess=null
var e=n.task
return n.task=null,e()})),this.timeout=setTimeout(function(){n.timeout=null,n.onSuccess(null)},t),this.completionPromise},e.prototype.isTriggered=function(){return null!==this.timeout},e.prototype.cancel=function(){this.cancelTimeout(),this.completionPromise&&(this.completionPromise.cancel(),this.completionPromise=null)},e.prototype.cancelTimeout=function(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},e}()
t.Delayer=h
var d=function(e){function t(t){e.call(this,t),this.throttler=new c}return n(t,e),t.prototype.trigger=function(t,n){var r=this
return e.prototype.trigger.call(this,function(){return r.throttler.queue(t)},n)},t}(h)
t.ThrottledDelayer=d
var f=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,t),this.minimumPeriod=n,this.periodThrottler=new c}return n(t,e),t.prototype.trigger=function(t,n){var r=this
return e.prototype.trigger.call(this,function(){return r.periodThrottler.queue(function(){return o.Promise.join([o.TPromise.timeout(r.minimumPeriod),t()]).then(function(e){return e[1]})})},n)},t}(d)
t.PeriodThrottledDelayer=f
var p=function(){function e(){var e=this
this._value=new o.TPromise(function(t,n){e._completeCallback=t,e._errorCallback=n})}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),e.prototype.complete=function(e){this._completeCallback(e)},e.prototype.error=function(e){this._errorCallback(e)},e}()
t.PromiseSource=p
var g=function(e){function t(t){var n,i,o
e.call(this,function(e,t,r){n=e,i=t,o=r},function(){i(r.canceled())}),t.then(n,i,o)}return n(t,e),t}(o.TPromise)
t.ShallowCancelThenPromise=g,t.always=function(e,t){return new o.TPromise(function(n,i,o){e.done(function(e){try{t(e)}catch(e){r.onUnexpectedError(e)}n(e)},function(e){try{t(e)}catch(e){r.onUnexpectedError(e)}i(e)},function(e){o(e)})},function(){e.cancel()})},t.sequence=function(e){function t(){return e.length?e.pop()():null}var n=[]
return e=e.reverse(),o.TPromise.as(null).then(function e(r){r&&n.push(r)
var i=t()
return i?i.then(e):o.TPromise.as(n)})},t.once=function(e){var t,n=this,r=!1
return function(){return r?t:(r=!0,t=e.apply(n,arguments))}}
var m=function(){function e(e){this.maxDegreeOfParalellism=e,this.outstandingPromises=[],this.runningPromises=0}return e.prototype.queue=function(e){var t=this
return new o.TPromise(function(n,r,i){t.outstandingPromises.push({factory:e,c:n,e:r,p:i}),t.consume()})},e.prototype.consume=function(){for(var e=this;this.outstandingPromises.length&&this.runningPromises<this.maxDegreeOfParalellism;){var t=this.outstandingPromises.shift()
this.runningPromises++
var n=t.factory()
n.done(t.c,t.e,t.p),n.done(function(){return e.consumed()},function(){return e.consumed()})}},e.prototype.consumed=function(){this.runningPromises--,this.consume()},e}()
t.Limiter=m
var v=function(e){function t(){e.call(this),this._token=-1}return n(t,e),t.prototype.dispose=function(){this.cancel(),e.prototype.dispose.call(this)},t.prototype.cancel=function(){-1!==this._token&&(i.clearTimeout(this._token),this._token=-1)},t.prototype.cancelAndSet=function(e,t){var n=this
this.cancel(),this._token=i.setTimeout(function(){n._token=-1,e()},t)},t.prototype.setIfNotSet=function(e,t){var n=this;-1===this._token&&(this._token=i.setTimeout(function(){n._token=-1,e()},t))},t}(a.Disposable)
t.TimeoutTimer=v
var _=function(e){function t(){e.call(this),this._token=-1}return n(t,e),t.prototype.dispose=function(){this.cancel(),e.prototype.dispose.call(this)},t.prototype.cancel=function(){-1!==this._token&&(i.clearInterval(this._token),this._token=-1)},t.prototype.cancelAndSet=function(e,t){this.cancel(),this._token=i.setInterval(function(){e()},t)},t}(a.Disposable)
t.IntervalTimer=_
var y=function(){function e(e,t){this.timeoutToken=-1,this.runner=e,this.timeout=t,this.timeoutHandler=this.onTimeout.bind(this)}return e.prototype.dispose=function(){this.cancel(),this.runner=null},e.prototype.cancel=function(){this.isScheduled()&&(i.clearTimeout(this.timeoutToken),this.timeoutToken=-1)},e.prototype.setRunner=function(e){this.runner=e},e.prototype.schedule=function(e){void 0===e&&(e=this.timeout),this.cancel(),this.timeoutToken=i.setTimeout(this.timeoutHandler,e)},e.prototype.isScheduled=function(){return-1!==this.timeoutToken},e.prototype.onTimeout=function(){this.timeoutToken=-1,this.runner&&this.runner()},e}()
t.RunOnceScheduler=y,t.nfcall=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return new o.Promise(function(n,r){return e.apply(void 0,t.concat([function(e,t){return e?r(e):n(t)}]))})},t.ninvoke=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
return new o.Promise(function(r,i){return t.call.apply(t,[e].concat(n,[function(e,t){return e?i(e):r(t)}]))})}}),define(e[84],t([1,0,5]),function(e,t,n){"use strict"
!function(e){e.inMemory="inmemory",e.vscode="vscode",e.internal="private",e.http="http",e.https="https",e.file="file"}(t.Schemas||(t.Schemas={})),t.xhr=function(e){var t=null,r=!1
return new n.TPromise(function(n,i,o){(t=new XMLHttpRequest).onreadystatechange=function(){r||(4===t.readyState?(t.status>=200&&t.status<300||1223===t.status?n(t):i(t),t.onreadystatechange=function(){}):o(t))},t.open(e.type||"GET",e.url,!0,e.user,e.password),t.responseType=e.responseType||"",Object.keys(e.headers||{}).forEach(function(n){t.setRequestHeader(n,e.headers[n])}),e.customRequestInitializer&&e.customRequestInitializer(t),t.send(e.data)},function(){r=!0,t.abort()})}}),define(e[109],t([1,0,2,89,91]),function(e,t,n,r,i){"use strict"
var o=function(){function t(e){this._postSerializedMessage=e,this._workerId=0,this._requestHandler=null,this._bindConsole()}return t.prototype._bindConsole=function(){self.console={log:this._sendPrintMessage.bind(this,i.PrintType.LOG),debug:this._sendPrintMessage.bind(this,i.PrintType.DEBUG),info:this._sendPrintMessage.bind(this,i.PrintType.INFO),warn:this._sendPrintMessage.bind(this,i.PrintType.WARN),error:this._sendPrintMessage.bind(this,i.PrintType.ERROR)},n.setUnexpectedErrorHandler(function(e){self.console.error(e)})},t.prototype._sendPrintMessage=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
var o=t.map(function(e){return e instanceof Error?n.transformErrorForSerialization(e):e}),s={monacoWorker:!0,from:this._workerId,req:"0",type:i.MessageType.PRINT,level:e,payload:1===o.length?o[0]:o}
this._postMessage(s)},t.prototype._sendReply=function(e,t,r){var o={monacoWorker:!0,from:this._workerId,req:"0",id:e,type:i.MessageType.REPLY,action:t,payload:r instanceof Error?n.transformErrorForSerialization(r):r}
this._postMessage(o)},t.prototype.loadModule=function(e,t,n){self.require([e],function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n]
t(e[0])},n)},t.prototype.onmessage=function(e){this._onmessage(r.parse(e))},t.prototype._postMessage=function(e){this._postSerializedMessage(r.stringify(e))},t.prototype._onmessage=function(t){var n=this,r=this._sendReply.bind(this,t.id,i.ReplyType.COMPLETE),o=this._sendReply.bind(this,t.id,i.ReplyType.ERROR),s=this._sendReply.bind(this,t.id,i.ReplyType.PROGRESS)
switch(t.type){case i.MessageType.INITIALIZE:this._workerId=t.payload.id
var a=t.payload.loaderConfiguration
if(a){void 0!==a.baseUrl&&delete a.baseUrl,void 0!==a.paths&&void 0!==a.paths.vs&&delete a.paths.vs
var u=a["vs/nls"]
u&&u.pseudo&&e(["vs/nls"],function(e){e.setPseudoTranslation(u.pseudo)}),a.catchError=!0,self.require.config(a)}this.loadModule(t.payload.moduleId,function(e){n._requestHandler=e.value,r()},o)
break
default:this._handleMessage(t,r,o,s)}},t.prototype._handleMessage=function(e,t,r,i){if(this._requestHandler){var o=this._requestHandler[e.type]
if("function"==typeof o)try{o.call(this._requestHandler,this,t,r,i,e.payload)}catch(e){r(n.transformErrorForSerialization(e))}else r("Handler does not have method "+e.type)}else r("Request handler not loaded")},t}()
t.WorkerServer=o,t.create=function(e){return new o(e)}}),define(e[56],t([1,0,2,3,50]),function(e,t,n,r,i){"use strict"
var o=4294967295,s=65535,a=Math.pow(2,32),u=new i.ViewLineToken(0,""),c=[],l=[],h=[u],d=[0],f=function(){return function(){this._inflate=[""],this._deflate={"":0}}}()
t.TokensInflatorMap=f
var p=function(){function e(){}return e.deflateArr=function(e,t){if(0===t.length)return l
if(1===t.length&&0===t[0].startIndex&&!t[0].type)return d
var r,i,o,s,u,c=e._inflate,h=e._deflate,f=-1,p=new Array(t.length)
for(r=0,i=t.length;i>r;r++)(u=t[r]).startIndex<=f&&(u.startIndex=f+1,n.onUnexpectedError({message:"Invalid tokens detected",tokens:t})),h.hasOwnProperty(u.type)?o=h[u.type]:(o=c.length,h[u.type]=o,c.push(u.type)),s=o*a+1*u.startIndex,p[r]=s,f=u.startIndex
return p},e.getStartIndex=function(e){return e/1&o},e.getType=function(e,t){var n=t/a&s
return 0===n?r.empty:e._inflate[n]},e.inflateArr=function(e,t){if(0===t.length)return c
if(1===t.length&&0===t[0])return h
for(var n=[],r=e._inflate,u=0,l=t.length;l>u;u++){var d=t[u],f=d/1&o,p=d/a&s
n.push(new i.ViewLineToken(f,r[p]))}return n},e.findIndexOfOffset=function(e,t){return this.findIndexInSegmentsArray(e,t)},e.sliceAndInflate=function(e,t,n,r,u){if(0===t.length)return c
if(1===t.length&&0===t[0])return h
var l=this.findIndexInSegmentsArray(t,n),d=[],f=e._inflate,p=t[l],g=p/a&s,m=0
d.push(new i.ViewLineToken(m,f[g]))
for(var v=l+1,_=t.length;_>v;v++){var y=(p=t[v])/1&o
if(y>=r)break
g=p/a&s,m=y-n+u,d.push(new i.ViewLineToken(m,f[g]))}return d},e.findIndexInSegmentsArray=function(e,t){for(var n,r=0,i=e.length-1;i>r;)(4294967295&e[n=r+Math.ceil((i-r)/2)])>t?i=n-1:r=n
return r},e.START_INDEX_MASK=o,e.TYPE_MASK=s,e.START_INDEX_OFFSET=1,e.TYPE_OFFSET=a,e}()
t.TokensBinaryEncoding=p}),define(e[57],t([1,0,3,56,18,50]),function(e,t,n,r,i,o){"use strict"
function s(e,t,n){if(0===n)return null
if(!t||0===t.length)return null
if(1===t.length&&0===t[0].startIndex&&""===t[0].type)return null
var i=r.TokensBinaryEncoding.deflateArr(e,t)
return new g(e,i)}var a,u=r.TokensBinaryEncoding.START_INDEX_MASK,c=r.TokensBinaryEncoding.TYPE_MASK,l=r.TokensBinaryEncoding.START_INDEX_OFFSET,h=r.TokensBinaryEncoding.TYPE_OFFSET,d={adjust:function(){},finish:function(){}},f={adjustDelta:function(){},adjustSet:function(){},finish:function(){}}
!function(e){e[e.MarkerDefined=0]="MarkerDefined",e[e.ForceMove=1]="ForceMove",e[e.ForceStay=2]="ForceStay"}(a||(a={}))
var p=function(){function e(e,t){this._lineNumber=0|e,this._text=t,this._isInvalid=!1,this._state=null,this._modeTransitions=null,this._lineTokens=null,this._markers=null}return Object.defineProperty(e.prototype,"lineNumber",{get:function(){return this._lineNumber},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isInvalid",{get:function(){return this._isInvalid},set:function(e){this._isInvalid=e},enumerable:!0,configurable:!0}),e.prototype.setState=function(e){this._state=e},e.prototype.getState=function(){return this._state||null},e.prototype.getModeTransitions=function(e){return this._modeTransitions?this._modeTransitions:[new i.ModeTransition(0,e)]},e.prototype.setTokens=function(e,t,n,r){this._lineTokens=s(e,t,this._text.length),this._modeTransitions=function(e,t){return t&&0!==t.length?1===t.length&&0===t[0].startIndex&&t[0].mode===e?null:t:null}(n,r)},e.prototype._setLineTokensFromDeflated=function(e,t){this._lineTokens=function(e,t,n){return 0===n?null:t&&0!==t.length?1===t.length&&0===t[0]?null:new g(e,t):null}(e,t,this._text.length)},e.prototype.getTokens=function(){return this._lineTokens?this._lineTokens:0===this._text.length?m.INSTANCE:v.INSTANCE},e.prototype._createTokensAdjuster=function(){if(!this._lineTokens)return d
var e=this._lineTokens.getBinaryEncodedTokens(),t=e.length,n=0,r=0,i=function(i,o,s){for(var a=s-1;i>r&&t>n;){if(r>0&&0!==o){var d=e[n]/h&c,f=Math.max(a,r+o),p=d*h+f*l
if(0>o)for(;n>0;){if(!((e[n-1]/l&u)>=f))break
e.splice(n-1,1),t--,n--}e[n]=p}t>++n&&(r=e[n]/l&u)}}
return{adjust:i,finish:function(e,t){i(Number.MAX_VALUE,e,1)}}},e.prototype._setText=function(e){if(this._text=e,this._lineTokens){for(var t=this._lineTokens.getBinaryEncodedTokensMap(),n=this._lineTokens.getBinaryEncodedTokens(),r=this._text.length;n.length>0;){if(r>(n[n.length-1]/l&u))break
n.pop()}this._setLineTokensFromDeflated(t,n)}},e.prototype._createMarkersAdjuster=function(t){var n=this
if(!this._markers)return f
if(0===this._markers.length)return f
this._markers.sort(e._compareMarkers)
var r=this._markers,i=r.length,o=0,s=r[o],u=function(e,t){return s.column<e||!(s.column>e)&&(t!==a.ForceMove&&(t===a.ForceStay||s.stickToPreviousCharacter))},c=function(e,a,c,l){for(;i>o&&u(e,l);){if(0!==a){var h=Math.max(c,s.column+a)
s.column!==h&&(t[s.id]=!0,s.oldLineNumber=s.oldLineNumber||n._lineNumber,s.oldColumn=s.oldColumn||s.column,s.column=h)}i>++o&&(s=r[o])}}
return{adjustDelta:c,adjustSet:function(e,a,c){for(;i>o&&u(e,c);)s.column!==a&&(t[s.id]=!0,s.oldLineNumber=s.oldLineNumber||n._lineNumber,s.oldColumn=s.oldColumn||s.column,s.column=a),i>++o&&(s=r[o])},finish:function(e,t){c(Number.MAX_VALUE,e,1,a.MarkerDefined)}}},e.prototype.applyEdits=function(e,t){for(var n=0,r=this._text,i=this._createTokensAdjuster(),o=this._createMarkersAdjuster(e),s=0,u=t.length;u>s;s++){var c=t[s],l=n+c.startColumn,h=n+c.endColumn,d=h-l,f=c.text.length
i.adjust(c.startColumn-1,n,1),o.adjustDelta(c.startColumn,n,1,c.forceMoveMarkers?a.ForceMove:d>0?a.ForceStay:a.MarkerDefined)
var p=Math.min(d,f)
p>0&&(i.adjust(c.startColumn-1+p,n,l),c.forceMoveMarkers||o.adjustDelta(c.startColumn+p,n,l,c.forceMoveMarkers?a.ForceMove:d>f?a.ForceStay:a.MarkerDefined)),r=r.substring(0,l-1)+c.text+r.substring(h-1),n+=f-d,i.adjust(c.endColumn,n,l),o.adjustSet(c.endColumn,l+f,c.forceMoveMarkers?a.ForceMove:a.MarkerDefined)}return i.finish(n,r.length),o.finish(n,r.length),this._setText(r),n},e.prototype.split=function(t,n,r){var i=this._text.substring(0,n-1),o=this._text.substring(n-1),s=null
if(this._markers){this._markers.sort(e._compareMarkers)
for(var a=0,u=this._markers.length;u>a;a++){if((l=this._markers[a]).column>n||l.column===n&&(r||!l.stickToPreviousCharacter)){var c=this._markers.slice(0,a)
s=this._markers.slice(a),this._markers=c
break}}if(s)for(a=0,u=s.length;u>a;a++){var l
t[(l=s[a]).id]=!0,l.oldLineNumber=l.oldLineNumber||this._lineNumber,l.oldColumn=l.oldColumn||l.column,l.column-=n-1}}this._setText(i)
var h=new e(this._lineNumber+1,o)
return s&&h.addMarkers(s),h},e.prototype.append=function(e,t){var n=this._text.length
this._setText(this._text+t._text)
var r=t._lineTokens
if(r){var i=r.getBinaryEncodedTokens()
if(n>0)for(var o=0,s=i.length;s>o;o++){var a=i[o],d=(a/h&c)*h+((a/l&u)+n)*l
i[o]=d}var f=this._lineTokens
f?this._setLineTokensFromDeflated(f.getBinaryEncodedTokensMap(),f.getBinaryEncodedTokens().concat(i)):this._setLineTokensFromDeflated(r.getBinaryEncodedTokensMap(),i)}if(t._markers){var p=t._markers
for(o=0,s=p.length;s>o;o++){var g=p[o]
e[g.id]=!0,g.oldLineNumber=g.oldLineNumber||t.lineNumber,g.oldColumn=g.oldColumn||g.column,g.column+=n}this.addMarkers(p)}},e.prototype.addMarker=function(e){e.line=this,this._markers?this._markers.push(e):this._markers=[e]},e.prototype.addMarkers=function(e){if(0!==e.length){var t,n
for(t=0,n=e.length;n>t;t++)e[t].line=this
this._markers?this._markers=this._markers.concat(e):this._markers=e.slice(0)}},e._compareMarkers=function(e,t){return e.column===t.column?(e.stickToPreviousCharacter?0:1)-(t.stickToPreviousCharacter?0:1):e.column-t.column},e.prototype.removeMarker=function(e){if(this._markers){var t=this._indexOfMarkerId(e.id)
t>=0&&(e.line=null,this._markers.splice(t,1)),0===this._markers.length&&(this._markers=null)}},e.prototype.removeMarkers=function(e){if(this._markers){for(var t=0,n=this._markers.length;n>t;t++){var r=this._markers[t]
e[r.id]&&(r.line=null,this._markers.splice(t,1),n--,t--)}0===this._markers.length&&(this._markers=null)}},e.prototype.getMarkers=function(){return this._markers?this._markers.slice(0):[]},e.prototype.updateLineNumber=function(e,t){if(this._markers){var n,r,i,o=this._markers
for(n=0,r=o.length;r>n;n++)e[(i=o[n]).id]=!0,i.oldLineNumber=i.oldLineNumber||this._lineNumber}this._lineNumber=t},e.prototype.deleteLine=function(e,t,n){if(this._markers){var r,i,o,s=this._markers
for(r=0,i=s.length;i>r;r++)e[(o=s[r]).id]=!0,o.oldColumn=o.oldColumn||o.column,o.oldLineNumber=o.oldLineNumber||n,o.column=t
return s}return[]},e.prototype._indexOfMarkerId=function(e){for(var t=this._markers,n=0,r=t.length;r>n;n++)if(t[n].id===e)return n},e}()
t.ModelLine=p
var g=function(){function e(e,t){this.map=e,this._tokens=t}return e.prototype.getBinaryEncodedTokensMap=function(){return this.map},e.prototype.getBinaryEncodedTokens=function(){return this._tokens},e.prototype.getTokenCount=function(){return this._tokens.length},e.prototype.getTokenStartIndex=function(e){return r.TokensBinaryEncoding.getStartIndex(this._tokens[e])},e.prototype.getTokenType=function(e){return r.TokensBinaryEncoding.getType(this.map,this._tokens[e])},e.prototype.getTokenEndIndex=function(e,t){return e+1<this._tokens.length?r.TokensBinaryEncoding.getStartIndex(this._tokens[e+1]):t},e.prototype.equals=function(t){if(t instanceof e){if(this.map!==t.map)return!1
if(this._tokens.length!==t._tokens.length)return!1
for(var n=0,r=this._tokens.length;r>n;n++)if(this._tokens[n]!==t._tokens[n])return!1
return!0}return t instanceof e&&void 0},e.prototype.findIndexOfOffset=function(e){return r.TokensBinaryEncoding.findIndexOfOffset(this._tokens,e)},e.prototype.inflate=function(){return r.TokensBinaryEncoding.inflateArr(this.map,this._tokens)},e.prototype.sliceAndInflate=function(e,t,n){return r.TokensBinaryEncoding.sliceAndInflate(this.map,this._tokens,e,t,n)},e}()
t.LineTokens=g
var m=function(){function e(){}return e.prototype.getTokenCount=function(){return 0},e.prototype.getTokenStartIndex=function(e){return 0},e.prototype.getTokenType=function(e){return n.empty},e.prototype.getTokenEndIndex=function(e,t){return 0},e.prototype.equals=function(e){return e===this},e.prototype.findIndexOfOffset=function(e){return 0},e.prototype.inflate=function(){return[]},e.prototype.sliceAndInflate=function(e,t,n){return[]},e.INSTANCE=new e,e}(),v=function(){function e(){}return e.prototype.getTokenCount=function(){return 1},e.prototype.getTokenStartIndex=function(e){return 0},e.prototype.getTokenType=function(e){return n.empty},e.prototype.getTokenEndIndex=function(e,t){return t},e.prototype.equals=function(e){return this===e},e.prototype.findIndexOfOffset=function(e){return 0},e.prototype.inflate=function(){return[new o.ViewLineToken(0,"")]},e.prototype.sliceAndInflate=function(e,t,n){return[new o.ViewLineToken(0,"")]},e.INSTANCE=new e,e}()
t.DefaultLineTokens=v}),define(e[102],t([1,0,8,82]),function(e,t,n,r){"use strict"
var i=function(){function e(){this._clock=0,this._entries=[],this._onDidChange=new n.Emitter}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),e.prototype.register=function(e,t,n){var r=this
void 0===n&&(n=!1)
var i={selector:e,provider:t,isBuiltin:n,_score:-1,_time:this._clock++}
return this._entries.push(i),this._lastCandidate=void 0,this._onDidChange.fire(this._entries.length),{dispose:function(){if(i){var e=r._entries.indexOf(i)
e>=0&&(r._entries.splice(e,1),r._lastCandidate=void 0,r._onDidChange.fire(r._entries.length),i=void 0)}}}},e.prototype.has=function(e){return this.all(e).length>0},e.prototype.all=function(e){if(!e||e.isTooLargeForHavingAMode())return[]
this._updateScores(e)
for(var t=[],n=0,r=this._entries;n<r.length;n++){var i=r[n]
i._score>0&&t.push(i.provider)}return t},e.prototype.ordered=function(e){var t=[]
return this._orderedForEach(e,function(e){return t.push(e.provider)}),t},e.prototype.orderedGroups=function(e){var t,n,r=[]
return this._orderedForEach(e,function(e){t&&n===e._score?t.push(e.provider):(n=e._score,t=[e.provider],r.push(t))}),r},e.prototype._orderedForEach=function(e,t){if(e&&!e.isTooLargeForHavingAMode()){this._updateScores(e)
for(var n=0;n<this._entries.length;n++){var r=this._entries[n]
r._score>0&&t(r)}}},e.prototype._updateScores=function(t){var n={uri:t.uri.toString(),language:t.getModeId()}
if(!this._lastCandidate||this._lastCandidate.language!==n.language||this._lastCandidate.uri!==n.uri){this._lastCandidate=n
for(var i=0,o=this._entries;i<o.length;i++){var s=o[i]
s._score=r.score(s.selector,t.uri,t.getModeId()),s.isBuiltin&&s._score>0&&(s._score=.5,s._time=-1)}this._entries.sort(e._compareByScoreAndTime)}},e._compareByScoreAndTime=function(e,t){return e._score<t._score?1:e._score>t._score?-1:e._time<t._time?1:e._time>t._time?-1:0},e}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=i}),define(e[21],t([1,0,102]),function(e,t,n){"use strict"
!function(e){e[e.Text=0]="Text",e[e.Read=1]="Read",e[e.Write=2]="Write"}(t.DocumentHighlightKind||(t.DocumentHighlightKind={})),t.DocumentHighlightKind,function(e){e[e.File=0]="File",e[e.Module=1]="Module",e[e.Namespace=2]="Namespace",e[e.Package=3]="Package",e[e.Class=4]="Class",e[e.Method=5]="Method",e[e.Property=6]="Property",e[e.Field=7]="Field",e[e.Constructor=8]="Constructor",e[e.Enum=9]="Enum",e[e.Interface=10]="Interface",e[e.Function=11]="Function",e[e.Variable=12]="Variable",e[e.Constant=13]="Constant",e[e.String=14]="String",e[e.Number=15]="Number",e[e.Boolean=16]="Boolean",e[e.Array=17]="Array",e[e.Object=18]="Object",e[e.Key=19]="Key",e[e.Null=20]="Null"}(t.SymbolKind||(t.SymbolKind={}))
t.SymbolKind
!function(e){e.from=function(t){switch(t){case e.Method:return"method"
case e.Function:return"function"
case e.Constructor:return"constructor"
case e.Variable:return"variable"
case e.Class:return"class"
case e.Interface:return"interface"
case e.Namespace:return"namespace"
case e.Package:return"package"
case e.Module:return"module"
case e.Property:return"property"
case e.Enum:return"enum"
case e.String:return"string"
case e.File:return"file"
case e.Array:return"array"
case e.Number:return"number"
case e.Boolean:return"boolean"
case e.Object:return"object"
case e.Key:return"key"
case e.Null:return"null"}return"property"},e.to=function(t){switch(t){case"method":return e.Method
case"function":return e.Function
case"constructor":return e.Constructor
case"variable":return e.Variable
case"class":return e.Class
case"interface":return e.Interface
case"namespace":return e.Namespace
case"package":return e.Package
case"module":return e.Module
case"property":return e.Property
case"enum":return e.Enum
case"string":return e.String
case"file":return e.File
case"array":return e.Array
case"number":return e.Number
case"boolean":return e.Boolean
case"object":return e.Object
case"key":return e.Key
case"null":return e.Null}return e.Property}}(t.SymbolKind||(t.SymbolKind={})),function(e){e[e.None=0]="None",e[e.Indent=1]="Indent",e[e.IndentOutdent=2]="IndentOutdent",e[e.Outdent=3]="Outdent"}(t.IndentAction||(t.IndentAction={})),t.IndentAction,t.ReferenceProviderRegistry=new n.default,t.RenameProviderRegistry=new n.default,t.SuggestRegistry=new n.default,t.SignatureHelpProviderRegistry=new n.default,t.HoverProviderRegistry=new n.default,t.DocumentSymbolProviderRegistry=new n.default,t.DocumentHighlightProviderRegistry=new n.default,t.DefinitionProviderRegistry=new n.default,t.CodeLensProviderRegistry=new n.default,t.CodeActionProviderRegistry=new n.default,t.DocumentFormattingEditProviderRegistry=new n.default,t.DocumentRangeFormattingEditProviderRegistry=new n.default,t.OnTypeFormattingEditProviderRegistry=new n.default,t.LinkProviderRegistry=new n.default}),define(e[106],t([1,0,2,3,21,14]),function(e,t,n,r,i,o){"use strict"
var s=function(){function e(t,n,r){this._registry=t,(r=r||{}).brackets=r.brackets||[["(",")"],["{","}"],["[","]"]],this._modeId=n,this._brackets=r.brackets.map(function(t){return{open:t[0],openRegExp:e._createOpenBracketRegExp(t[0]),close:t[1],closeRegExp:e._createCloseBracketRegExp(t[1])}}),this._regExpRules=r.regExpRules||[],this._indentationRules=r.indentationRules}return e.prototype.onEnter=function(e,t){var n=this,r=e.getLineContext(t.lineNumber)
return o.handleEvent(r,t.column-1,function(r,i,o){if(n._modeId===r)return n._onEnter(e,t)
var s=n._registry.getOnEnterSupport(r)
return s?s.onEnter(e,t):null})},e.prototype._onEnter=function(e,t){var n=e.getLineContent(t.lineNumber),r=n.substr(0,t.column-1),i=n.substr(t.column-1),o=1===t.lineNumber?"":e.getLineContent(t.lineNumber-1)
return this._actualOnEnter(o,r,i)},e.prototype._actualOnEnter=function(t,n,r){for(var i=0,o=this._regExpRules.length;o>i;i++){var s=this._regExpRules[i]
if(s.beforeText.test(n)){if(!s.afterText)return s.action
if(s.afterText.test(r))return s.action}}if(n.length>0&&r.length>0)for(i=0,o=this._brackets.length;o>i;i++){if((a=this._brackets[i]).openRegExp.test(n)&&a.closeRegExp.test(r))return e._INDENT_OUTDENT}if(this._indentationRules){if(this._indentationRules.increaseIndentPattern&&this._indentationRules.increaseIndentPattern.test(n))return e._INDENT
if(this._indentationRules.indentNextLinePattern&&this._indentationRules.indentNextLinePattern.test(n))return e._INDENT
if(/^\s/.test(n)){if(this._indentationRules.decreaseIndentPattern&&this._indentationRules.decreaseIndentPattern.test(r))return e._OUTDENT
if(this._indentationRules.indentNextLinePattern&&this._indentationRules.indentNextLinePattern.test(t))return e._OUTDENT}}if(n.length>0)for(i=0,o=this._brackets.length;o>i;i++){var a
if((a=this._brackets[i]).openRegExp.test(n))return e._INDENT}return null},e._createOpenBracketRegExp=function(t){var n=r.escapeRegExpCharacters(t)
return/\B/.test(n.charAt(0))||(n="\\b"+n),n+="\\s*$",e._safeRegExp(n)},e._createCloseBracketRegExp=function(t){var n=r.escapeRegExpCharacters(t)
return/\B/.test(n.charAt(n.length-1))||(n+="\\b"),n="^\\s*"+n,e._safeRegExp(n)},e._safeRegExp=function(e){try{return new RegExp(e)}catch(e){return n.onUnexpectedError(e),null}},e._INDENT={indentAction:i.IndentAction.Indent},e._INDENT_OUTDENT={indentAction:i.IndentAction.IndentOutdent},e._OUTDENT={indentAction:i.IndentAction.Outdent},e}()
t.OnEnterSupport=s}),define(e[31],t([1,0,21,94,99,106,28,8,2,22,3,17]),function(e,t,n,r,i,o,s,a,u,c,l,h){"use strict"
var d=function(){function e(n,o,a){var u=null
o&&(u=o._conf),this._conf=e._mergeConf(u,a),this._conf.brackets&&(this.brackets=new s.RichEditBrackets(n,this._conf.brackets)),this._handleOnEnter(n,this._conf),this._handleComments(n,this._conf),this._conf.autoClosingPairs&&(this.characterPair=new r.CharacterPairSupport(t.LanguageConfigurationRegistry,n,this._conf)),(this._conf.__electricCharacterSupport||this._conf.brackets)&&(this.electricCharacter=new i.BracketElectricCharacterSupport(t.LanguageConfigurationRegistry,n,this.brackets,this._conf.__electricCharacterSupport)),this.wordDefinition=this._conf.wordPattern||h.DEFAULT_WORD_REGEXP}return e._mergeConf=function(e,t){return{comments:e?t.comments||e.comments:t.comments,brackets:e?t.brackets||e.brackets:t.brackets,wordPattern:e?t.wordPattern||e.wordPattern:t.wordPattern,indentationRules:e?t.indentationRules||e.indentationRules:t.indentationRules,onEnterRules:e?t.onEnterRules||e.onEnterRules:t.onEnterRules,autoClosingPairs:e?t.autoClosingPairs||e.autoClosingPairs:t.autoClosingPairs,surroundingPairs:e?t.surroundingPairs||e.surroundingPairs:t.surroundingPairs,__electricCharacterSupport:e?t.__electricCharacterSupport||e.__electricCharacterSupport:t.__electricCharacterSupport}},e.prototype._handleOnEnter=function(e,n){var r={},i=!0
n.brackets&&(i=!1,r.brackets=n.brackets),n.indentationRules&&(i=!1,r.indentationRules=n.indentationRules),n.onEnterRules&&(i=!1,r.regExpRules=n.onEnterRules),i||(this.onEnter=new o.OnEnterSupport(t.LanguageConfigurationRegistry,e,r))},e.prototype._handleComments=function(e,t){var n=t.comments
if(n&&(this.comments={},n.lineComment&&(this.comments.lineCommentToken=n.lineComment),n.blockComment)){var r=n.blockComment,i=r[0],o=r[1]
this.comments.blockCommentStartToken=i,this.comments.blockCommentEndToken=o}},e}()
t.RichEditSupport=d
var f=function(){function e(){this._onDidChange=new a.Emitter,this.onDidChange=this._onDidChange.event,this._entries=Object.create(null)}return e.prototype.register=function(e,t){var n=this._entries[e]||null
return this._entries[e]=new d(e,n,t),this._onDidChange.fire(void 0),{dispose:function(){}}},e.prototype._getRichEditSupport=function(e){return this._entries[e]},e.prototype.getElectricCharacterSupport=function(e){var t=this._getRichEditSupport(e)
return t&&t.electricCharacter||null},e.prototype.getComments=function(e){var t=this._getRichEditSupport(e)
return t&&t.comments||null},e.prototype.getCharacterPairSupport=function(e){var t=this._getRichEditSupport(e)
return t&&t.characterPair||null},e.prototype.getWordDefinition=function(e){var t=this._getRichEditSupport(e)
return t&&t.wordDefinition||null},e.prototype.getOnEnterSupport=function(e){var t=this._getRichEditSupport(e)
return t&&t.onEnter||null},e.prototype.getRawEnterActionAtPosition=function(e,t,n){var r,i=this.getOnEnterSupport(e.getMode().getId())
if(i)try{r=i.onEnter(e,new c.Position(t,n))}catch(e){u.onUnexpectedError(e)}return r},e.prototype.getEnterActionAtPosition=function(e,t,r){var i=e.getLineContent(t),o=l.getLeadingWhitespace(i)
o.length>r-1&&(o=o.substring(0,r-1))
var s=this.getRawEnterActionAtPosition(e,t,r)
return s?s.appendText||(s.indentAction===n.IndentAction.Indent||s.indentAction===n.IndentAction.IndentOutdent?s.appendText="\t":s.appendText=""):s={indentAction:n.IndentAction.None,appendText:""},s.removeText&&(o=o.substring(0,o.length-1)),{enterAction:s,indentation:o}},e.prototype.getBracketsSupport=function(e){var t=this._getRichEditSupport(e)
return t&&t.brackets||null},e}()
t.LanguageConfigurationRegistryImpl=f,t.LanguageConfigurationRegistry=new f}),define(e[64],t([1,0,18,31,17]),function(e,t,n,r,i){"use strict"
var o=function(){function e(){}return e._safeGetWordDefinition=function(e){return r.LanguageConfigurationRegistry.getWordDefinition(e.getId())},e.massageWordDefinitionOf=function(t){return i.ensureValidWordDefinition(e._safeGetWordDefinition(t))},e._getWordAtColumn=function(t,n,r,o){var s=o[r].startIndex,a=r+1<o.length?o[r+1].startIndex:t.length,u=o[r].mode
return i.getWordAtText(n,e.massageWordDefinitionOf(u),t.substring(s,a),s)},e.getWordAtPosition=function(t,r){if(!t._lineIsTokenized(r.lineNumber))return i.getWordAtText(r.column,e.massageWordDefinitionOf(t.getMode()),t.getLineContent(r.lineNumber),0)
var o=null,s=t.getLineContent(r.lineNumber),a=t._getLineModeTransitions(r.lineNumber),u=r.column-1,c=n.ModeTransition.findIndexInSegmentsArray(a,u)
return!(o=e._getWordAtColumn(s,r.column,c,a))&&c>0&&a[c].startIndex===u&&(o=e._getWordAtColumn(s,r.column,c-1,a)),o},e}()
t.WordHelper=o}),define(e[65],t([7,6]),function(e,t){return e.create("vs/base/common/severity",t)}),define(e[32],t([1,0,65,3]),function(e,t,n,r){"use strict"
var i
!function(e){e[e.Ignore=0]="Ignore",e[e.Info=1]="Info",e[e.Warning=2]="Warning",e[e.Error=3]="Error"}(i||(i={})),function(e){var t="error",i="warning",o="warn",s="info",a=Object.create(null)
a[e.Error]=n.localize(0,null),a[e.Warning]=n.localize(1,null),a[e.Info]=n.localize(2,null),e.fromValue=function(n){return n?r.equalsIgnoreCase(t,n)?e.Error:r.equalsIgnoreCase(i,n)||r.equalsIgnoreCase(o,n)?e.Warning:r.equalsIgnoreCase(s,n)?e.Info:e.Ignore:e.Ignore},e.toString=function(e){return a[e]||r.empty},e.compare=function(e,t){return t-e}}(i||(i={})),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i}),define(e[67],t([7,6]),function(e,t){return e.create("vs/editor/common/config/defaultConfig",t)}),define(e[68],t([1,0,67,10,17]),function(e,t,n,r,i){"use strict"
t.DEFAULT_INDENTATION={tabSize:4,insertSpaces:!0,detectIndentation:!0},t.DEFAULT_TRIM_AUTO_WHITESPACE=!0
var o="Consolas, 'Courier New', monospace",s="Menlo, Monaco, 'Courier New', monospace",a="'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'"
t.GOLDEN_LINE_HEIGHT_RATIO=r.isMacintosh?1.5:1.35
var u=function(){return function(){this.editor={experimentalScreenReader:!0,rulers:[],wordSeparators:i.USUAL_WORD_SEPARATORS,selectionClipboard:!0,ariaLabel:n.localize(0,null),lineNumbers:!0,selectOnLineNumbers:!0,lineNumbersMinChars:5,glyphMargin:!1,lineDecorationsWidth:10,revealHorizontalRightPadding:30,roundedSelection:!0,theme:"vs",readOnly:!1,scrollbar:{verticalScrollbarSize:14,horizontal:"auto",useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1},overviewRulerLanes:2,cursorBlinking:"blink",cursorStyle:"line",fontLigatures:!1,disableTranslate3d:!1,hideCursorInOverviewRuler:!1,scrollBeyondLastLine:!0,automaticLayout:!1,wrappingColumn:300,wrappingIndent:"same",wordWrapBreakBeforeCharacters:"([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋",wordWrapBreakAfterCharacters:" \t})]?|&,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ’”〉》」』】〕）］｝｣",wordWrapBreakObtrusiveCharacters:".",tabFocusMode:!1,hover:!0,contextmenu:!0,mouseWheelScrollSensitivity:1,quickSuggestions:!0,quickSuggestionsDelay:10,parameterHints:!0,iconsInSuggestions:!0,autoClosingBrackets:!0,formatOnType:!1,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:!0,selectionHighlight:!0,outlineMarkers:!1,referenceInfos:!0,folding:!0,renderWhitespace:!1,indentGuides:!1,useTabStops:!0,fontFamily:r.isMacintosh?s:r.isLinux?a:o,fontSize:r.isMacintosh?12:14,lineHeight:0}}}()
t.DefaultConfig=new u}),define(e[45],t([1,0,15,3,22,29,19,57,95,68,108]),function(e,t,r,i,o,s,a,u,c,l,h){"use strict"
t.LONG_LINE_BOUNDARY=1e3
var d=function(e){function r(t,n){t.push(a.EventType.ModelRawContentChanged,a.EventType.ModelOptionsChanged),e.call(this,t),this._shouldSimplifyMode=n.length>r.MODEL_SYNC_LIMIT,this._shouldDenyMode=n.length>r.MODEL_TOKENIZATION_LIMIT,this._options=n.options,this._constructLines(n),this._setVersionId(1),this._isDisposed=!1,this._isDisposing=!1}return n(r,e),r.prototype.isTooLargeForHavingAMode=function(){return this._shouldDenyMode},r.prototype.isTooLargeForHavingARichMode=function(){return this._shouldSimplifyMode},r.prototype.getOptions=function(){return this._options},r.prototype.updateOptions=function(e){var t=!1,n={tabSize:!1,insertSpaces:!1,trimAutoWhitespace:!1}
void 0!==e.insertSpaces&&this._options.insertSpaces!==e.insertSpaces&&(t=!0,n.insertSpaces=!0,this._options.insertSpaces=e.insertSpaces),void 0!==e.tabSize&&this._options.tabSize!==e.tabSize&&(t=!0,n.tabSize=!0,this._options.tabSize=e.tabSize),void 0!==e.trimAutoWhitespace&&this._options.trimAutoWhitespace!==e.trimAutoWhitespace&&(t=!0,n.trimAutoWhitespace=!0,this._options.trimAutoWhitespace=e.trimAutoWhitespace),t&&this.emit(a.EventType.ModelOptionsChanged,n)},r.prototype.detectIndentation=function(e,t){var n=this._lines.map(function(e){return e.text}),r=c.guessIndentation(n,t,e)
this.updateOptions({insertSpaces:r.insertSpaces,tabSize:r.tabSize})},r.prototype._normalizeIndentationFromWhitespace=function(e){for(var t=this._options.tabSize,n=this._options.insertSpaces,r=0,i=0;i<e.length;i++)"\t"===e.charAt(i)?r+=t:r++
var o=""
if(!n){var s=Math.floor(r/t)
r%=t
for(i=0;s>i;i++)o+="\t"}for(i=0;r>i;i++)o+=" "
return o},r.prototype.normalizeIndentation=function(e){var t=i.firstNonWhitespaceIndex(e)
return-1===t&&(t=e.length),this._normalizeIndentationFromWhitespace(e.substring(0,t))+e.substring(t)},r.prototype.getOneIndent=function(){var e=this._options.tabSize
if(this._options.insertSpaces){for(var t="",n=0;e>n;n++)t+=" "
return t}return"\t"},r.prototype.getVersionId=function(){return this._versionId},r.prototype.getAlternativeVersionId=function(){return this._alternativeVersionId},r.prototype._ensureLineStarts=function(){if(!this._lineStarts){for(var e=[],t=this._EOL.length,n=0,r=this._lines.length;r>n;n++)e.push(this._lines[n].text.length+t)
this._lineStarts=new h.PrefixSumComputer(e)}},r.prototype.getOffsetAt=function(e){var t=this.validatePosition(e)
return this._ensureLineStarts(),this._lineStarts.getAccumulatedValue(t.lineNumber-2)+t.column-1},r.prototype.getPositionAt=function(e){e=Math.floor(e),e=Math.max(0,e),this._ensureLineStarts()
var t=this._lineStarts.getIndexOf(e),n=this._lines[t.index].text.length
return new o.Position(t.index+1,Math.min(t.remainder+1,n+1))},r.prototype._increaseVersionId=function(){this._setVersionId(this._versionId+1)},r.prototype._setVersionId=function(e){this._versionId=e,this._alternativeVersionId=this._versionId},r.prototype._overwriteAlternativeVersionId=function(e){this._alternativeVersionId=e},r.prototype.isDisposed=function(){return this._isDisposed},r.prototype.dispose=function(){this._isDisposed=!0,this._lines=null,this._EOL=null,this._BOM=null,e.prototype.dispose.call(this)},r.prototype._createContentChangedFlushEvent=function(){return{changeType:a.EventType.ModelRawContentChangedFlush,detail:null,versionId:-1,isUndoing:!1,isRedoing:!1}},r.prototype._emitContentChanged2=function(e,t,n,r,i,o,u,c){var l={range:new s.Range(e,t,n,r),rangeLength:i,text:o,eol:this._EOL,versionId:this.getVersionId(),isUndoing:u,isRedoing:c}
this._isDisposing||this.emit(a.EventType.ModelContentChanged2,l)},r.prototype._resetValue=function(e,t){this._constructLines(t),this._increaseVersionId(),e.detail=this.toRawText(),e.versionId=this._versionId},r.prototype.toRawText=function(){return{BOM:this._BOM,EOL:this._EOL,lines:this.getLinesContent(),length:this.getValueLength(),options:this._options}},r.prototype.equals=function(e){if(this._BOM!==e.BOM)return!1
if(this._EOL!==e.EOL)return!1
if(this._lines.length!==e.lines.length)return!1
for(var t=0,n=this._lines.length;n>t;t++)if(this._lines[t].text!==e.lines[t])return!1
return!0},r.prototype.setValue=function(e){if(null!==e){var t
t=r.toRawText(e,{tabSize:this._options.tabSize,insertSpaces:this._options.insertSpaces,trimAutoWhitespace:this._options.trimAutoWhitespace,detectIndentation:!1,defaultEOL:this._options.defaultEOL}),this.setValueFromRawText(t)}},r.prototype.setValueFromRawText=function(e){if(null!==e){var t=this.getFullModelRange(),n=this.getValueLengthInRange(t),r=this.getLineCount(),i=this.getLineMaxColumn(r),o=this._createContentChangedFlushEvent()
this._resetValue(o,e),this._emitModelContentChangedFlushEvent(o),this._emitContentChanged2(1,1,r,i,n,this.getValue(),!1,!1)}},r.prototype.getValue=function(e,t){void 0===t&&(t=!1)
var n=this.getFullModelRange(),r=this.getValueInRange(n,e)
return t?this._BOM+r:r},r.prototype.getValueLength=function(e,t){void 0===t&&(t=!1)
var n=this.getFullModelRange(),r=this.getValueLengthInRange(n,e)
return t?this._BOM.length+r:r},r.prototype.getEmptiedValueInRange=function(e,t,n){void 0===t&&(t=""),void 0===n&&(n=a.EndOfLinePreference.TextDefined)
var r=this.validateRange(e)
if(r.isEmpty())return""
if(r.startLineNumber===r.endLineNumber)return this._repeatCharacter(t,r.endColumn-r.startColumn)
var i=this._getEndOfLine(n),o=r.startLineNumber-1,s=r.endLineNumber-1,u=[]
u.push(this._repeatCharacter(t,this._lines[o].text.length-r.startColumn+1))
for(var c=o+1;s>c;c++)u.push(this._repeatCharacter(t,this._lines[c].text.length))
return u.push(this._repeatCharacter(t,r.endColumn-1)),u.join(i)},r.prototype._repeatCharacter=function(e,t){for(var n="",r=0;t>r;r++)n+=e
return n},r.prototype.getValueInRange=function(e,t){void 0===t&&(t=a.EndOfLinePreference.TextDefined)
var n=this.validateRange(e)
if(n.isEmpty())return""
if(n.startLineNumber===n.endLineNumber)return this._lines[n.startLineNumber-1].text.substring(n.startColumn-1,n.endColumn-1)
var r=this._getEndOfLine(t),i=n.startLineNumber-1,o=n.endLineNumber-1,s=[]
s.push(this._lines[i].text.substring(n.startColumn-1))
for(var u=i+1;o>u;u++)s.push(this._lines[u].text)
return s.push(this._lines[o].text.substring(0,n.endColumn-1)),s.join(r)},r.prototype.getValueLengthInRange=function(e,t){void 0===t&&(t=a.EndOfLinePreference.TextDefined)
var n=this.validateRange(e)
if(n.isEmpty())return 0
if(n.startLineNumber===n.endLineNumber)return n.endColumn-n.startColumn
var r=this.getOffsetAt(new o.Position(n.startLineNumber,n.startColumn))
return this.getOffsetAt(new o.Position(n.endLineNumber,n.endColumn))-r},r.prototype.isDominatedByLongLines=function(){var e,n,r,i=0,o=0,s=this._lines
for(e=0,n=this._lines.length;n>e;e++)(r=s[e].text.length)>=t.LONG_LINE_BOUNDARY?o+=r:i+=r
return o>i},r.prototype.getLineCount=function(){return this._lines.length},r.prototype.getLineContent=function(e){if(1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
return this._lines[e-1].text},r.prototype.getLinesContent=function(){for(var e=[],t=0,n=this._lines.length;n>t;t++)e[t]=this._lines[t].text
return e},r.prototype.getEOL=function(){return this._EOL},r.prototype.setEOL=function(e){var t=e===a.EndOfLineSequence.CRLF?"\r\n":"\n"
if(this._EOL!==t){var n=this.getFullModelRange(),r=this.getValueLengthInRange(n),i=this.getLineCount(),o=this.getLineMaxColumn(i)
this._EOL=t,this._lineStarts=null,this._increaseVersionId()
var s=this._createContentChangedFlushEvent()
s.detail=this.toRawText(),s.versionId=this._versionId,this._emitModelContentChangedFlushEvent(s),this._emitContentChanged2(1,1,i,o,r,this.getValue(),!1,!1)}},r.prototype.getLineMinColumn=function(e){return 1},r.prototype.getLineMaxColumn=function(e){if(1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
return this._lines[e-1].text.length+1},r.prototype.getLineFirstNonWhitespaceColumn=function(e){if(1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
var t=i.firstNonWhitespaceIndex(this._lines[e-1].text)
return-1===t?0:t+1},r.prototype.getLineLastNonWhitespaceColumn=function(e){if(1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
var t=i.lastNonWhitespaceIndex(this._lines[e-1].text)
return-1===t?0:t+2},r.prototype.validateLineNumber=function(e){return 1>e&&(e=1),e>this._lines.length&&(e=this._lines.length),e},r.prototype.validatePosition=function(e){var t=e.lineNumber?e.lineNumber:1,n=e.column?e.column:1
if(1>t)t=1,n=1
else if(t>this._lines.length)t=this._lines.length,n=this.getLineMaxColumn(t)
else{var r=this.getLineMaxColumn(t)
1>n?n=1:n>r&&(n=r)}return new o.Position(t,n)},r.prototype.validateRange=function(e){var t=this.validatePosition(new o.Position(e.startLineNumber,e.startColumn)),n=this.validatePosition(new o.Position(e.endLineNumber,e.endColumn))
return new s.Range(t.lineNumber,t.column,n.lineNumber,n.column)},r.prototype.modifyPosition=function(e,t){return this.getPositionAt(this.getOffsetAt(e)+t)},r.prototype.getFullModelRange=function(){var e=this.getLineCount()
return new s.Range(1,1,e,this.getLineMaxColumn(e))},r.prototype._emitModelContentChangedFlushEvent=function(e){this._isDisposing||this.emit(a.EventType.ModelRawContentChanged,e)},r.toRawText=function(e,t){for(var n=0,r=-1;-1!==(r=e.indexOf("\r",r+1));)n++
var o=e.split(/\r\n|\r|\n/),s=""
i.startsWithUTF8BOM(o[0])&&(s=i.UTF8_BOM_CHARACTER,o[0]=o[0].substr(1))
var u,l,h=o.length-1
if(u=0===h?t.defaultEOL===a.DefaultEndOfLine.LF?"\n":"\r\n":n>h/2?"\r\n":"\n",t.detectIndentation){var d=c.guessIndentation(o,t.tabSize,t.insertSpaces)
l={tabSize:d.tabSize,insertSpaces:d.insertSpaces,trimAutoWhitespace:t.trimAutoWhitespace,defaultEOL:t.defaultEOL}}else l={tabSize:t.tabSize,insertSpaces:t.insertSpaces,trimAutoWhitespace:t.trimAutoWhitespace,defaultEOL:t.defaultEOL}
return{BOM:s,EOL:u,lines:o,length:e.length,options:l}},r.prototype._constructLines=function(e){var t,n,r=e.lines,i=[]
for(t=0,n=r.length;n>t;t++)i.push(new u.ModelLine(t+1,r[t]))
this._BOM=e.BOM,this._EOL=e.EOL,this._lines=i,this._lineStarts=null},r.prototype._getEndOfLine=function(e){switch(e){case a.EndOfLinePreference.LF:return"\n"
case a.EndOfLinePreference.CRLF:return"\r\n"
case a.EndOfLinePreference.TextDefined:return this.getEOL()}throw new Error("Unknown EOL preference")},r.prototype.findMatches=function(e,t,n,r,o,a){void 0===a&&(a=999)
var u,c=i.createSafeRegExp(e,n,r,o)
return c?(u=s.Range.isIRange(t)?t:this.getFullModelRange(),this._doFindMatches(u,c,a)):[]},r.prototype.findNextMatch=function(e,t,n,r,o){var s=i.createSafeRegExp(e,n,r,o)
if(!s)return null
var a,u,c=this.validatePosition(t),l=this.getLineCount(),h=c.lineNumber
if(a=this._lines[h-1].text.substring(c.column-1),u=this._findMatchInLine(s,a,h,c.column-1))return u
for(var d=1;l>=d;d++){var f=(h+d-1)%l
if(a=this._lines[f].text,u=this._findMatchInLine(s,a,f+1,0))return u}return null},r.prototype.findPreviousMatch=function(e,t,n,r,o){var s=i.createSafeRegExp(e,n,r,o)
if(!s)return null
var a,u,c=this.validatePosition(t),l=this.getLineCount(),h=c.lineNumber
if(a=this._lines[h-1].text.substring(0,c.column-1),u=this._findLastMatchInLine(s,a,h))return u
for(var d=1;l>=d;d++){var f=(l+h-d-1)%l
if(a=this._lines[f].text,u=this._findLastMatchInLine(s,a,f+1))return u}return null},r.prototype._doFindMatches=function(e,t,n){var r,i=[],o=0
if(e.startLineNumber===e.endLineNumber)return r=this._lines[e.startLineNumber-1].text.substring(e.startColumn-1,e.endColumn-1),o=this._findMatchesInLine(t,r,e.startLineNumber,e.startColumn-1,o,i,n),i
r=this._lines[e.startLineNumber-1].text.substring(e.startColumn-1),o=this._findMatchesInLine(t,r,e.startLineNumber,e.startColumn-1,o,i,n)
for(var s=e.startLineNumber+1;s<e.endLineNumber&&n>o;s++)o=this._findMatchesInLine(t,this._lines[s-1].text,s,0,o,i,n)
return n>o&&(r=this._lines[e.endLineNumber-1].text.substring(0,e.endColumn-1),o=this._findMatchesInLine(t,r,e.endLineNumber,0,o,i,n)),i},r.prototype._findMatchInLine=function(e,t,n,r){var i=e.exec(t)
return i?new s.Range(n,i.index+1+r,n,i.index+1+i[0].length+r):null},r.prototype._findLastMatchInLine=function(e,t,n){for(var r,i=null;r=e.exec(t);){var o=new s.Range(n,r.index+1,n,r.index+1+r[0].length)
if(o.equalsRange(i))break
i=o}return i},r.prototype._findMatchesInLine=function(e,t,n,r,i,o,a){var u
e.lastIndex=0
do{if(u=e.exec(t)){var c=new s.Range(n,u.index+1+r,n,u.index+1+u[0].length+r)
if(c.equalsRange(o[o.length-1]))return i
if(o.push(c),++i>=a)return i}}while(u)
return i},r.MODEL_SYNC_LIMIT=5242880,r.MODEL_TOKENIZATION_LIMIT=20971520,r.DEFAULT_CREATION_OPTIONS={tabSize:l.DEFAULT_INDENTATION.tabSize,insertSpaces:l.DEFAULT_INDENTATION.insertSpaces,detectIndentation:!1,defaultEOL:a.DefaultEndOfLine.LF,trimAutoWhitespace:l.DEFAULT_TRIM_AUTO_WHITESPACE},r}(r.OrderGuaranteeEventEmitter)
t.TextModel=d
var f=function(){function e(){}return e.fromString=function(e,t){return d.toRawText(e,t)},e.fromStringWithModelOptions=function(e,t){var n=t.getOptions()
return d.toRawText(e,{tabSize:n.tabSize,insertSpaces:n.insertSpaces,trimAutoWhitespace:n.trimAutoWhitespace,detectIndentation:!1,defaultEOL:n.defaultEOL})},e}()
t.RawText=f}),define(e[70],t([7,6]),function(e,t){return e.create("vs/editor/common/model/textModelWithTokens",t)}),define(e[71],t([1,0,70,24,2,16,61,26,5,19,45,64,69,48,14,28,18,101,56,31]),function(e,t,r,i,o,s,a,u,c,l,h,d,f,p,g,m,v,_,y,b){"use strict"
var k=function(){function e(e,t){var n=this
this._modePromise=e,this._externalModePromise=new c.TPromise(function(e,t,r){n._externalModePromise_c=e,n._externalModePromise_e=t},function(){}),this._model=t,this._isDisposed=!1,c.TPromise.timeout(0).then(function(){return n._modePromise}).then(function(e){if(n._isDisposed)n._externalModePromise_c(!1)
else{var t=n._model
n.dispose(),t.setMode(e),t._warmUpTokens(),n._externalModePromise_c(!0)}}).done(null,function(e){n._externalModePromise_e(e),o.onUnexpectedError(e)})}return e.prototype.getModePromise=function(){return this._externalModePromise},e.prototype.dispose=function(){this._modePromise=null,this._model=null,this._isDisposed=!0},e}(),C=function(){function e(e,t){var n=this
this._retokenizePromise=e,this._model=t,this._isDisposed=!1,this.isFulfilled=!1,c.TPromise.timeout(0).then(function(){return n._retokenizePromise}).then(function(){n._isDisposed||(n.isFulfilled=!0,n._model.onRetokenizerFulfilled())}).done(null,o.onUnexpectedError)}return e.prototype.getRange=function(){return null},e.prototype.dispose=function(){this._retokenizePromise=null,this._model=null,this._isDisposed=!0},e}()
t.FullModelRetokenizer=C
var E=function(){function e(e,t){this.modeTransitions=t.getModeTransitions(e),this._text=t.text,this._lineTokens=t.getTokens()}return e.prototype.getLineContent=function(){return this._text},e.prototype.getTokenCount=function(){return this._lineTokens.getTokenCount()},e.prototype.getTokenStartIndex=function(e){return this._lineTokens.getTokenStartIndex(e)},e.prototype.getTokenEndIndex=function(e){return this._lineTokens.getTokenEndIndex(e,this._text.length)},e.prototype.getTokenType=function(e){return this._lineTokens.getTokenType(e)},e.prototype.getTokenText=function(e){var t=this._lineTokens.getTokenStartIndex(e),n=this._lineTokens.getTokenEndIndex(e,this._text.length)
return this._text.substring(t,n)},e.prototype.findIndexOfOffset=function(e){return this._lineTokens.findIndexOfOffset(e)},e}(),S=function(e){function t(t,n,r,o){var s=this
if(t.push(l.EventType.ModelTokensChanged),t.push(l.EventType.ModelModeChanged),t.push(l.EventType.ModelModeSupportChanged),e.call(this,t,n),this._shouldAutoTokenize=r,this._mode=null,this._modeListener=null,this._modeToModelBinder=null,this._tokensInflatorMap=null,this._invalidLineStartIndex=0,this._lastState=null,this._revalidateTokensTimeout=-1,this._scheduleRetokenizeNow=null,this._retokenizers=null,o)if(c.TPromise.is(o)){var a=o._value
if(a&&"function"==typeof a.getId)this._mode=this._massageMode(a),this._resetModeListener(this._mode)
else{var u=o
this._modeToModelBinder=new k(u,this),this._mode=new p.NullMode}}else this._mode=this._massageMode(o),this._resetModeListener(this._mode)
else this._mode=new p.NullMode
this._revalidateTokensTimeout=-1,this._scheduleRetokenizeNow=new i.RunOnceScheduler(function(){return s._retokenizeNow()},200),this._retokenizers=[],this._resetTokenizationState()}return n(t,e),t.prototype.dispose=function(){this._modeToModelBinder&&(this._modeToModelBinder.dispose(),this._modeToModelBinder=null),this._resetModeListener(null),this._clearTimers(),this._mode=null,this._lastState=null,this._tokensInflatorMap=null,this._retokenizers=s.dispose(this._retokenizers),this._scheduleRetokenizeNow.dispose(),e.prototype.dispose.call(this)},t.prototype._massageMode=function(e){return this.isTooLargeForHavingAMode()?new p.NullMode:this.isTooLargeForHavingARichMode()?e.toSimplifiedMode():e},t.prototype.whenModeIsReady=function(){var e=this
return this._modeToModelBinder?this._modeToModelBinder.getModePromise().then(function(){return e._mode}):c.TPromise.as(this._mode)},t.prototype.onRetokenizerFulfilled=function(){this._scheduleRetokenizeNow.schedule()},t.prototype._retokenizeNow=function(){var e=this._retokenizers.filter(function(e){return e.isFulfilled})
this._retokenizers=this._retokenizers.filter(function(e){return!e.isFulfilled})
for(var t=!1,n=0;n<e.length;n++)e[n].getRange()||(t=!0)
if(t){n=0
for(var r=this._lines.length;r>n;n++)this._lines[n].isInvalid=!0
this._invalidLineStartIndex=0}else{var i=Number.MAX_VALUE
for(n=0;n<e.length;n++){var o=e[n].getRange()
i=Math.min(i,o.startLineNumber)
for(var s=o.startLineNumber;s<=o.endLineNumber;s++)this._lines[s-1].isInvalid=!0}i-1<this._invalidLineStartIndex&&(this._invalidLineStartIndex<this._lines.length&&(this._lines[this._invalidLineStartIndex].isInvalid=!0),this._invalidLineStartIndex=i-1)}this._beginBackgroundTokenization()
for(n=0;n<e.length;n++)e[n].dispose()},t.prototype._createRetokenizer=function(e,t){return new C(e,this)},t.prototype._resetValue=function(t,n){e.prototype._resetValue.call(this,t,n),this._resetTokenizationState()},t.prototype._resetMode=function(e,t){this._mode=t,this._resetModeListener(t),this._resetTokenizationState(),this.emitModelTokensChangedEvent(1,this.getLineCount())},t.prototype._resetModeListener=function(e){var t=this
this._modeListener&&(this._modeListener.dispose(),this._modeListener=null),e&&"function"==typeof e.addSupportChangedListener&&(this._modeListener=e.addSupportChangedListener(function(e){return t._onModeSupportChanged(e)}))},t.prototype._onModeSupportChanged=function(e){this._emitModelModeSupportChangedEvent(e),e.tokenizationSupport&&(this._resetTokenizationState(),this.emitModelTokensChangedEvent(1,this.getLineCount()))},t.prototype._resetTokenizationState=function(){this._retokenizers=s.dispose(this._retokenizers),this._scheduleRetokenizeNow.cancel(),this._clearTimers()
for(var e=0;e<this._lines.length;e++)this._lines[e].setState(null)
this._initializeTokenizationState()},t.prototype._clearTimers=function(){-1!==this._revalidateTokensTimeout&&(clearTimeout(this._revalidateTokensTimeout),this._revalidateTokensTimeout=-1)},t.prototype._initializeTokenizationState=function(){var e=null
if(this._mode.tokenizationSupport)try{e=this._mode.tokenizationSupport.getInitialState()}catch(e){e.friendlyMessage=t.MODE_TOKENIZATION_FAILED_MSG,o.onUnexpectedError(e),this._mode=new p.NullMode}e||(e=new p.NullState(this._mode,null)),this._lines[0].setState(e),this._lastState=null,this._tokensInflatorMap=new y.TokensInflatorMap,this._invalidLineStartIndex=0,this._beginBackgroundTokenization()},t.prototype.getLineTokens=function(e,t){if(void 0===t&&(t=!1),1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
return t||this._updateTokensUntilLine(e,!0),this._lines[e-1].getTokens()},t.prototype.getLineContext=function(e){if(1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
return this._updateTokensUntilLine(e,!0),new E(this._mode,this._lines[e-1])},t.prototype._getInternalTokens=function(e){return this._updateTokensUntilLine(e,!0),this._lines[e-1].getTokens()},t.prototype.getMode=function(){return this._mode},t.prototype.setMode=function(e){if(e)if(this._modeToModelBinder&&(this._modeToModelBinder.dispose(),this._modeToModelBinder=null),c.TPromise.is(e))this._modeToModelBinder=new k(e,this)
else{var t=this._massageMode(e)
if(this._mode!==t){var n={oldMode:this._mode,newMode:t}
this._resetMode(n,t),this._emitModelModeChangedEvent(n)}}},t.prototype.getModeIdAtPosition=function(e,t){var n=this.validatePosition({lineNumber:e,column:t}),r=n.lineNumber,i=n.column
if(1===i)return this.getStateBeforeLine(r).getMode().getId()
if(i===this.getLineMaxColumn(r))return this.getStateAfterLine(r).getMode().getId()
var o=this._getLineModeTransitions(r)
return o[v.ModeTransition.findIndexInSegmentsArray(o,i-1)].modeId},t.prototype._invalidateLine=function(e){this._lines[e].isInvalid=!0,e<this._invalidLineStartIndex&&(this._invalidLineStartIndex<this._lines.length&&(this._lines[this._invalidLineStartIndex].isInvalid=!0),this._invalidLineStartIndex=e,this._beginBackgroundTokenization())},t._toLineTokens=function(e){if(!e||0===e.length)return[]
if(e[0]instanceof _.LineToken)return e
for(var t=[],n=0,r=e.length;r>n;n++)t[n]=new _.LineToken(e[n].startIndex,e[n].type)
return t},t._toModeTransitions=function(e){if(!e||0===e.length)return[]
if(e[0]instanceof v.ModeTransition)return e
for(var t=[],n=0,r=e.length;r>n;n++)t[n]=new v.ModeTransition(e[n].startIndex,e[n].mode)
return t},t.prototype._updateLineTokens=function(e,n,r,i){this._lines[e].setTokens(n,t._toLineTokens(i.tokens),r,t._toModeTransitions(i.modeTransitions))},t.prototype._beginBackgroundTokenization=function(){var e=this
this._shouldAutoTokenize&&-1===this._revalidateTokensTimeout&&(this._revalidateTokensTimeout=setTimeout(function(){e._revalidateTokensTimeout=-1,e._revalidateTokensNow()},0))},t.prototype._warmUpTokens=function(){for(var e=Math.min(100,this.getLineCount()),t=e,n=1;e>=n;n++){if(this._lines[n-1].text.length>=200){t=n-1
break}}this._revalidateTokensNow(t)},t.prototype._revalidateTokensNow=function(e){void 0===e&&(e=this._invalidLineStartIndex+1e6)
var t=u.start(u.Topic.EDITOR,"backgroundTokenization")
e=Math.min(this._lines.length,e)
for(var n,r=this._invalidLineStartIndex+1,i=0,o=0,s=a.StopWatch.create(!1),c=r;e>=c;c++){if((n=s.elapsed())>20){e=c-1
break}if(o=this._lines[c-1].text.length,i>0&&n+n/i*o>20){e=c-1
break}this._updateTokensUntilLine(c,!1),i+=o}n=s.elapsed(),e>=r&&this.emitModelTokensChangedEvent(r,e),this._invalidLineStartIndex<this._lines.length&&this._beginBackgroundTokenization(),t.stop()},t.prototype.getStateBeforeLine=function(e){return this._updateTokensUntilLine(e-1,!0),this._lines[e-1].getState()},t.prototype.getStateAfterLine=function(e){return this._updateTokensUntilLine(e,!0),e<this._lines.length?this._lines[e].getState():this._lastState},t.prototype._getLineModeTransitions=function(e){if(1>e||e>this.getLineCount())throw new Error("Illegal value "+e+" for `lineNumber`")
return this._updateTokensUntilLine(e,!0),this._lines[e-1].getModeTransitions(this._mode)},t.prototype._updateTokensUntilLine=function(e,n){for(var r=this._lines.length,i=e-1,s=this._invalidLineStartIndex+1,a=e,u=this._invalidLineStartIndex;i>=u;u++){var c=u+1,l=null,h=this._lines[u].text
if(this._mode.tokenizationSupport){try{l=this._mode.tokenizationSupport.tokenize(this._lines[u].text,this._lines[u].getState(),0,1e9)}catch(e){e.friendlyMessage=t.MODE_TOKENIZATION_FAILED_MSG,o.onUnexpectedError(e)}l&&l.retokenize&&this._retokenizers.push(this._createRetokenizer(l.retokenize,u+1)),l&&l.tokens&&l.tokens.length>0&&(l.actualStopOffset=Math.max(l.actualStopOffset,l.tokens[l.tokens.length-1].startIndex+1)),l&&l.actualStopOffset<h.length&&(l.tokens.push({startIndex:l.actualStopOffset,type:""}),l.endState=this._lines[u].getState())}if(l||(l=p.nullTokenize(this._mode,h,this._lines[u].getState())),l.modeTransitions||(l.modeTransitions=[]),0===l.modeTransitions.length&&l.modeTransitions.push({startIndex:0,mode:this._mode}),this._updateLineTokens(u,this._tokensInflatorMap,this._mode,l),this._lines[u].isInvalid&&(this._lines[u].isInvalid=!1),r>c)if(null!==this._lines[c].getState()&&l.endState.equals(this._lines[c].getState())){for(var d=u+1;r>d&&!this._lines[d].isInvalid;){if(r>d+1){if(null===this._lines[d+1].getState())break}else if(null===this._lastState)break
d++}this._invalidLineStartIndex=Math.max(this._invalidLineStartIndex,d),u=d-1}else this._lines[c].setState(l.endState)
else this._lastState=l.endState}this._invalidLineStartIndex=Math.max(this._invalidLineStartIndex,i+1),n&&a>=s&&this.emitModelTokensChangedEvent(s,a)},t.prototype.emitModelTokensChangedEvent=function(e,t){var n={fromLineNumber:e,toLineNumber:t}
this._isDisposing||this.emit(l.EventType.ModelTokensChanged,n)},t.prototype._emitModelModeChangedEvent=function(e){this._isDisposing||this.emit(l.EventType.ModelModeChanged,e)},t.prototype._emitModelModeSupportChangedEvent=function(e){this._isDisposing||this.emit(l.EventType.ModelModeSupportChanged,e)},t.prototype._lineIsTokenized=function(e){return this._invalidLineStartIndex>e-1},t.prototype._getWordDefinition=function(){return d.WordHelper.massageWordDefinitionOf(this._mode)},t.prototype.getWordAtPosition=function(e){return d.WordHelper.getWordAtPosition(this,this.validatePosition(e))},t.prototype.getWordUntilPosition=function(e){var t=this.getWordAtPosition(e)
return t?{word:t.word.substr(0,e.column-t.startColumn),startColumn:t.startColumn,endColumn:e.column}:{word:"",startColumn:e.column,endColumn:e.column}},t.prototype.tokenIterator=function(e,t){var n=new f.TokenIterator(this,this.validatePosition(e)),r=t(n)
return n._invalidate(),r},t.prototype.findMatchingBracketUp=function(e,t){var n=this.validatePosition(t),r=this._lines[n.lineNumber-1].getModeTransitions(this._mode),i=r[v.ModeTransition.findIndexInSegmentsArray(r,n.column-1)],o=b.LanguageConfigurationRegistry.getBracketsSupport(i.modeId)
if(!o)return null
var s=o.textIsBracket[e]
return s?this._findMatchingBracketUp(s,n):null},t.prototype.matchBracket=function(e){return this._matchBracket(this.validatePosition(e))},t.prototype._matchBracket=function(e){var t=e.lineNumber,n=this._lines[t-1].text,r=this._lines[t-1].getTokens(),i=r.findIndexOfOffset(e.column-1),o=r.getTokenStartIndex(i),s=this._lines[t-1].getModeTransitions(this._mode),a=v.ModeTransition.findIndexInSegmentsArray(s,e.column-1),u=s[a],c=b.LanguageConfigurationRegistry.getBracketsSupport(u.modeId)
if(i>0&&o===e.column-1){var l=i-1,h=r.getTokenType(l)
if(!g.ignoreBracketsInToken(h)){var d=r.getTokenStartIndex(l),f=u,p=c
if(a>0&&u.startIndex===e.column-1&&(f=s[a-1],p=b.LanguageConfigurationRegistry.getBracketsSupport(f.modeId)),p)if(d=Math.max(d,e.column-1-p.maxBracketLength),(k=m.BracketsUtils.findPrevBracketInToken(p.reversedRegex,t,n,d,o))&&k.startColumn<=e.column&&e.column<=k.endColumn){var _=n.substring(k.startColumn-1,k.endColumn-1)
if(C=this._matchFoundBracket(k,p.textIsBracket[_],p.textIsOpenBracket[_]))return C}}}if(!g.ignoreBracketsInToken(r.getTokenType(i))&&c){o=Math.max(o,e.column-1-c.maxBracketLength)
var y=r.getTokenEndIndex(i,n.length)
for(y=Math.min(y,e.column-1+c.maxBracketLength);;){var k
if(!(k=m.BracketsUtils.findNextBracketInText(c.forwardRegex,t,n.substring(o,y),o)))break
if(k.startColumn<=e.column&&e.column<=k.endColumn){var C
_=n.substring(k.startColumn-1,k.endColumn-1)
if(C=this._matchFoundBracket(k,c.textIsBracket[_],c.textIsOpenBracket[_]))return C}o=k.endColumn-1}}return null},t.prototype._matchFoundBracket=function(e,t,n){var r
if(n){if(r=this._findMatchingBracketDown(t,e.getEndPosition()))return[e,r]}else if(r=this._findMatchingBracketUp(t,e.getStartPosition()))return[e,r]
return null},t.prototype._findMatchingBracketUp=function(e,t){for(var n=e.modeId,r=e.reversedRegex,i=-1,o=t.lineNumber;o>=1;o--){var s=this._lines[o-1].getTokens(),a=this._lines[o-1].text,u=this._lines[o-1].getModeTransitions(this._mode),c=u.length-1,l=u[c].startIndex,h=u[c].modeId,d=s.getTokenCount()-1,f=a.length
o===t.lineNumber&&(d=s.findIndexOfOffset(t.column-1),f=t.column-1,l=u[c=v.ModeTransition.findIndexInSegmentsArray(u,t.column-1)].startIndex,h=u[c].modeId)
for(var p=d;p>=0;p--){var _=s.getTokenType(p),y=s.getTokenStartIndex(p)
if(l>y&&(l=u[--c].startIndex,h=u[c].modeId),h===n&&!g.ignoreBracketsInToken(_))for(;;){var b=m.BracketsUtils.findPrevBracketInToken(r,o,a,y,f)
if(!b)break
var k=a.substring(b.startColumn-1,b.endColumn-1)
if(k===e.open?i++:k===e.close&&i--,0===i)return b
f=b.startColumn-1}f=y}}return null},t.prototype._findMatchingBracketDown=function(e,t){for(var n=e.modeId,r=e.forwardRegex,i=1,o=t.lineNumber,s=this.getLineCount();s>=o;o++){var a=this._lines[o-1].getTokens(),u=this._lines[o-1].text,c=this._lines[o-1].getModeTransitions(this._mode),l=0,h=l+1<c.length?c[l+1].startIndex:u.length+1,d=c[l].modeId,f=0,p=a.getTokenStartIndex(f)
o===t.lineNumber&&(f=a.findIndexOfOffset(t.column-1),p=Math.max(p,t.column-1),h=(l=v.ModeTransition.findIndexInSegmentsArray(c,t.column-1))+1<c.length?c[l+1].startIndex:u.length+1,d=c[l].modeId)
for(var _=f,y=a.getTokenCount();y>_;_++){var b=a.getTokenType(_),k=a.getTokenEndIndex(_,u.length)
if(p>=h&&(h=++l+1<c.length?c[l+1].startIndex:u.length+1,d=c[l].modeId),d===n&&!g.ignoreBracketsInToken(b))for(;;){var C=m.BracketsUtils.findNextBracketInToken(r,o,u,p,k)
if(!C)break
var E=u.substring(C.startColumn-1,C.endColumn-1)
if(E===e.open?i++:E===e.close&&i--,0===i)return C
p=C.endColumn-1}p=k}}return null},t.prototype.findPrevBracket=function(e){for(var t=this.validatePosition(e),n=/[\(\)\[\]\{\}]/,r=t.lineNumber;r>=1;r--){var i=this._lines[r-1].getTokens(),o=this._lines[r-1].text,s=i.getTokenCount()-1,a=o.length
r===t.lineNumber&&(s=i.findIndexOfOffset(t.column-1),a=t.column-1)
for(var u=s;u>=0;u--){var c=i.getTokenType(u),l=i.getTokenStartIndex(u)
if(!g.ignoreBracketsInToken(c)){var h=m.BracketsUtils.findPrevBracketInToken(n,r,o,l,a)
if(h)return this._toFoundBracket(h)}a=l}}return null},t.prototype.findNextBracket=function(e){for(var t=this.validatePosition(e),n=/[\(\)\[\]\{\}]/,r=t.lineNumber,i=this.getLineCount();i>=r;r++){var o=this._lines[r-1].getTokens(),s=this._lines[r-1].text,a=0,u=o.getTokenStartIndex(a)
r===t.lineNumber&&(a=o.findIndexOfOffset(t.column-1),u=Math.max(u,t.column-1))
for(var c=a,l=o.getTokenCount();l>c;c++){var h=o.getTokenType(c),d=o.getTokenEndIndex(c,s.length)
if(!g.ignoreBracketsInToken(h)){var f=m.BracketsUtils.findNextBracketInToken(n,r,s,u,d)
if(f)return this._toFoundBracket(f)}u=d}}return null},t.prototype._toFoundBracket=function(e){if(!e)return null
switch(this.getValueInRange(e)){case"(":return{range:e,open:"(",close:")",isOpen:!0}
case")":return{range:e,open:"(",close:")",isOpen:!1}
case"[":return{range:e,open:"[",close:"]",isOpen:!0}
case"]":return{range:e,open:"[",close:"]",isOpen:!1}
case"{":return{range:e,open:"{",close:"}",isOpen:!0}
case"}":return{range:e,open:"{",close:"}",isOpen:!1}}return null},t.MODE_TOKENIZATION_FAILED_MSG=r.localize(0,null),t}(h.TextModel)
t.TextModelWithTokens=S}),define(e[72],t([1,0,19,57,45,71,29,22]),function(e,t,r,i,o,s,a,u){"use strict"
var c=function(e){function t(t,n,i,o,s){e.call(this,t.concat([r.EventType.ModelDispose]),i,!1,o),this._setVersionId(n),this._associatedResource=s}return n(t,e),t.prototype.getModeId=function(){return this.getMode().getId()},t.prototype._constructLines=function(t){e.prototype._constructLines.call(this,t),this._EOL="\n"},t.prototype.destroy=function(){this.dispose()},t.prototype.dispose=function(){this.emit(r.EventType.ModelDispose),e.prototype.dispose.call(this)},Object.defineProperty(t.prototype,"uri",{get:function(){return this._associatedResource},enumerable:!0,configurable:!0}),t.prototype.getRangeFromOffsetAndLength=function(e,t){var n=this.getPositionAt(e),r=this.getPositionAt(e+t)
return new a.Range(n.lineNumber,n.column,r.lineNumber,r.column)},t.prototype.getOffsetAndLengthFromRange=function(e){var t=this.getOffsetAt(new u.Position(e.startLineNumber,e.startColumn))
return{offset:t,length:this.getOffsetAt(new u.Position(e.endLineNumber,e.endColumn))-t}},t.prototype.getPositionFromOffset=function(e){return this.getPositionAt(e)},t.prototype.getOffsetFromPosition=function(e){return this.getOffsetAt(e)},t.prototype.getLineStart=function(e){return 1>e&&(e=1),e>this.getLineCount()&&(e=this.getLineCount()),this.getOffsetAt(new u.Position(e,1))},t.prototype.getAllWordsWithRange=function(){if(this._lines.length>1e4)return[]
var e,t=[],n=function(n){var i=r.text.substring(n.start,n.end),o={startLineNumber:e+1,startColumn:n.start+1,endLineNumber:e+1,endColumn:n.end+1}
t.push({text:i,range:o})}
for(e=0;e<this._lines.length;e++){var r=this._lines[e]
this.wordenize(r.text).forEach(n)}return t},t.prototype.getAllWords=function(){var e=this,t=[]
return this._lines.forEach(function(n){e.wordenize(n.text).forEach(function(e){t.push(n.text.substring(e.start,e.end))})}),t},t.prototype.getAllUniqueWords=function(e){var t=!1,n={}
return this.getAllWords().filter(function(r){return e&&!t&&e===r?(t=!0,!1):!n[r]&&(n[r]=!0,!0)})},t.prototype.wordenize=function(e){for(var t,n=[],r=this._getWordDefinition();t=r.exec(e);)n.push({start:t.index,end:t.index+t[0].length})
return n},t}(s.TextModelWithTokens)
t.AbstractMirrorModel=c,t.createTestMirrorModelFromString=function(e,t,n){return void 0===t&&(t=null),new l(0,o.TextModel.toRawText(e,o.TextModel.DEFAULT_CREATION_OPTIONS),t,n)}
var l=function(e){function t(t,n,r,i){e.call(this,["changed"],t,n,r,i)}return n(t,e),t.prototype.onEvents=function(e){for(var t=!1,n=0,i=e.contentChanged.length;i>n;n++){var o=e.contentChanged[n]
switch(this._setVersionId(o.versionId),o.changeType){case r.EventType.ModelRawContentChangedFlush:this._onLinesFlushed(o),t=!0
break
case r.EventType.ModelRawContentChangedLinesDeleted:this._onLinesDeleted(o),t=!0
break
case r.EventType.ModelRawContentChangedLinesInserted:this._onLinesInserted(o),t=!0
break
case r.EventType.ModelRawContentChangedLineChanged:this._onLineChanged(o),t=!0}}t&&this.emit("changed",{})},t.prototype._onLinesFlushed=function(e){this._constructLines(e.detail),this._resetTokenizationState()},t.prototype._onLineChanged=function(e){this._lines[e.lineNumber-1].applyEdits({},[{startColumn:1,endColumn:Number.MAX_VALUE,text:e.detail,forceMoveMarkers:!1}]),this._lineStarts&&this._lineStarts.changeValue(e.lineNumber-1,this._lines[e.lineNumber-1].text.length+this._EOL.length),this._invalidateLine(e.lineNumber-1)},t.prototype._onLinesDeleted=function(e){var t=e.fromLineNumber-1,n=e.toLineNumber-1,r=this._lines[t].getState()
this._lines.splice(t,n-t+1),this._lineStarts&&this._lineStarts.removeValues(t,n-t+1),t<this._lines.length&&(this._lines[t].setState(r),this._invalidateLine(t))},t.prototype._onLinesInserted=function(e){var t,n,r=e.detail.split("\n"),o=[]
for(t=e.fromLineNumber-1,n=0;t<e.toLineNumber;t++,n++)this._lines.splice(t,0,new i.ModelLine(0,r[n])),o.push(r[n].length+this._EOL.length)
this._lineStarts&&this._lineStarts.insertValues(e.fromLineNumber-1,o),e.fromLineNumber>=2&&this._invalidateLine(e.fromLineNumber-2)},t}(c)
t.MirrorModel=l}),define(e[73],t([7,6]),function(e,t){return e.create("vs/editor/common/modes/modesRegistry",t)}),define(e[74],t([7,6]),function(e,t){return e.create("vs/editor/common/modes/supports/suggestSupport",t)}),define(e[75],t([7,6]),function(e,t){return e.create("vs/editor/common/services/modeServiceImpl",t)}),define(e[76],t([7,6]),function(e,t){return e.create("vs/platform/configuration/common/configurationRegistry",t)}),define(e[77],t([7,6]),function(e,t){return e.create("vs/platform/extensions/common/abstractExtensionService",t)}),define(e[78],t([7,6]),function(e,t){return e.create("vs/platform/extensions/common/extensionsRegistry",t)}),define(e[79],t([7,6]),function(e,t){return e.create("vs/platform/jsonschemas/common/jsonContributionRegistry",t)}),define(e[33],t([1,0,2]),function(e,t,r){"use strict"
var i=function(){function e(e){this._staticArguments=e}return e.prototype.appendStaticArguments=function(e){this._staticArguments.push.apply(this._staticArguments,e)},e.prototype.staticArguments=function(e){return isNaN(e)?this._staticArguments.slice(0):this._staticArguments[e]},e.prototype._validate=function(e){if(!e)throw r.illegalArgument("can not be falsy")},e}()
t.AbstractDescriptor=i
var o=function(e){function t(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
e.call(this,n),this._ctor=t}return n(t,e),Object.defineProperty(t.prototype,"ctor",{get:function(){return this._ctor},enumerable:!0,configurable:!0}),t.prototype.bind=function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n]
var r=[]
return r=(r=r.concat(this.staticArguments())).concat(e),new(t.bind.apply(t,[void 0].concat([this._ctor],r)))},t}(i)
t.SyncDescriptor=o,t.createSyncDescriptor=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return new(o.bind.apply(o,[void 0].concat([e],t)))}
var s=function(e){function t(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
if(e.call(this,r),this._moduleName=t,this._ctorName=n,"string"!=typeof t)throw new Error("Invalid AsyncDescriptor arguments, expected `moduleName` to be a string!")}return n(t,e),t.create=function(e,n){return new t(e,n)},Object.defineProperty(t.prototype,"moduleName",{get:function(){return this._moduleName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ctorName",{get:function(){return this._ctorName},enumerable:!0,configurable:!0}),t.prototype.bind=function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n]
var r=[]
return r=(r=r.concat(this.staticArguments())).concat(e),new(t.bind.apply(t,[void 0].concat([this.moduleName,this.ctorName],r)))},t}(i)
t.AsyncDescriptor=s
var a=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
return new(s.bind.apply(s,[void 0].concat([e,t],n)))}
t.createAsyncDescriptor0=a,t.createAsyncDescriptor1=a,t.createAsyncDescriptor2=a,t.createAsyncDescriptor3=a,t.createAsyncDescriptor4=a,t.createAsyncDescriptor5=a,t.createAsyncDescriptor6=a,t.createAsyncDescriptor7=a}),define(e[4],t([1,0]),function(e,t){"use strict"
function n(e,t,n,r){t[i.DI_TARGET]===t?t[i.DI_DEPENDENCIES].push({id:e,index:n,optional:r}):(t[i.DI_DEPENDENCIES]=[{id:e,index:n,optional:r}],t[i.DI_TARGET]=t)}function r(e){var t=function(e,r,i){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter")
n(t,e,i,!1)}
return t.toString=function(){return e},t}var i
!function(e){e.DI_TARGET="$di$target",e.DI_DEPENDENCIES="$di$dependencies",e.getServiceDependencies=function(t){return t[e.DI_DEPENDENCIES]||[]}}(i=t._util||(t._util={})),t.IInstantiationService=r("instantiationService"),t.createDecorator=r,t.optional=function(e){return function(t,r,i){if(3!==arguments.length)throw new Error("@optional-decorator can only be used to decorate a parameter")
n(e,t,i,!0)}}}),define(e[35],t([1,0,4]),function(e,t,n){"use strict"
t.ICompatWorkerService=n.createDecorator("compatWorkerService"),t.CompatWorkerAttr=function(e,t){var n=function(e,t){for(var n in e)if(e[n]===t)return n
throw new Error("Member not found in prototype")}(e.prototype,t)
e.prototype[n]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r]
return this.compatWorkerService.CompatWorker(this,n,t,e)}}}),define(e[83],t([1,0,4]),function(e,t,n){"use strict"
t.ID_EDITOR_WORKER_SERVICE="editorWorkerService",t.IEditorWorkerService=n.createDecorator(t.ID_EDITOR_WORKER_SERVICE)}),define(e[23],t([1,0,4]),function(e,t,n){"use strict"
t.IModeService=n.createDecorator("modeService")}),define(e[85],t([1,0,4]),function(e,t,n){"use strict"
t.IModelService=n.createDecorator("modelService")}),define(e[37],t([1,0,4]),function(e,t,n){"use strict"
t.ResourceEvents={ADDED:"resource.added",REMOVED:"resource.removed",CHANGED:"resource.changed"},t.IResourceService=n.createDecorator("resourceService")}),define(e[87],t([1,0,15,16,37]),function(e,t,r,i,o){"use strict"
var s=function(e){function t(){e.call(this),this.serviceId=o.IResourceService,this.data={},this.unbinds={}}return n(t,e),t.prototype.addListener2_=function(t,n){return e.prototype.addListener2.call(this,t,n)},t.prototype._anonymousModelId=function(e){for(var t="",n=0;n<e.length;n++){var r=e[n]
t+=r>="0"&&"9">=r?"0":r>="a"&&"z">=r?"a":r>="A"&&"Z">=r?"A":r}return t},t.prototype.insert=function(e,t){var n=this
if(this.contains(e))throw new Error("ResourceService: Cannot add model "+this._anonymousModelId(e.toString())+" because it already exists!")
var r=e.toString()
this.data[r]=t,this.unbinds[r]=[],this.unbinds[r].push(t.addBulkListener2(function(t){n.emit(o.ResourceEvents.CHANGED,{url:e,originalEvents:t})})),this.emit(o.ResourceEvents.ADDED,{url:e,addedElement:t})},t.prototype.get=function(e){return this.data[e.toString()]?this.data[e.toString()]:null},t.prototype.all=function(){var e=this
return Object.keys(this.data).map(function(t){return e.data[t]})},t.prototype.contains=function(e){return!!this.data[e.toString()]},t.prototype.remove=function(e){if(this.contains(e)){var t=e.toString(),n=this.data[t]
this.unbinds[t]=i.dispose(this.unbinds[t]),delete this.unbinds[t],delete this.data[t],this.emit(o.ResourceEvents.REMOVED,{url:e,removedElement:n})}},t}(r.EventEmitter)
t.ResourceService=s}),define(e[51],t([1,0,4]),function(e,t,n){"use strict"
t.IConfigurationService=n.createDecorator("configurationService"),t.getConfigurationValue=function(e,t,n){var r=function(e,t){for(var n=e,r=0;r<t.length;r++)if(!(n=n[t[r]]))return
return n}(e,t.split("."))
return void 0===r?n:r}}),define(e[52],t([1,0,4]),function(e,t,n){"use strict"
t.IEventService=n.createDecorator("eventService")}),define(e[90],t([1,0,15,52]),function(e,t,r,i){"use strict"
var o=function(e){function t(){e.call(this),this.serviceId=i.IEventService}return n(t,e),t}(r.EventEmitter)
t.EventService=o}),define(e[38],t([1,0,4]),function(e,t,n){"use strict"
t.IExtensionService=n.createDecorator("extensionService")}),define(e[54],t([1,0,58]),function(e,t,n){"use strict"
var r=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
this._entries=[]
for(var n=0,r=e;n<r.length;n++){var i=r[n]
this.set(i[0],i[1])}}return e.prototype.set=function(t,r){var i=[t,r],o=n.binarySearch(this._entries,i,e._entryCompare)
if(!(0>o)){var s=this._entries[o]
return this._entries[o]=i,s[1]}this._entries.splice(~o,0,i)},e.prototype.forEach=function(e){for(var t=0,n=this._entries;t<n.length;t++){var r=n[t]
e(r[0],r[1])}},e.prototype.has=function(t){return n.binarySearch(this._entries,e._searchEntry(t),e._entryCompare)>=0},e.prototype.get=function(t){var r=n.binarySearch(this._entries,e._searchEntry(t),e._entryCompare)
return r>=0?this._entries[r][1]:void 0},e._searchEntry=function(t){return e._dummy[0]=t,e._dummy},e._entryCompare=function(e,t){var n=e[0].toString(),r=t[0].toString()
return r>n?-1:n>r?1:0},e._dummy=[void 0,void 0],e}()
t.ServiceCollection=r}),define(e[93],t([1,0,5,2,9,34,86,33,4,54]),function(e,t,n,r,i,o,s,a,u,c){"use strict"
var l=function(){function t(e,t){void 0===e&&(e=new c.ServiceCollection),void 0===t&&(t=!1),this._services=e,this._strict=t,this._services.set(u.IInstantiationService,this)}return t.prototype.createChild=function(e){var n=this
return this._services.forEach(function(t,r){e.has(t)||(r instanceof a.SyncDescriptor&&(r=n._createAndCacheServiceInstance(t,r)),e.set(t,r))}),new t(e,this._strict)},t.prototype.invokeFunction=function(e){for(var t=this,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i]
var o
try{return o={get:function(e,n){var r=t._getOrCreateServiceInstance(e)
if(!r&&n!==u.optional)throw new Error("[invokeFunction] unkown service '"+e+"'")
return r}},e.apply(void 0,[o].concat(n))}finally{o.get=function(){throw r.illegalState("service accessor is only valid during the invocation of its target method")}}},t.prototype.createInstance=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return e instanceof a.AsyncDescriptor?this._createInstanceAsync(e,t):e instanceof a.SyncDescriptor?this._createInstance(e,t):this._createInstance(new a.SyncDescriptor(e),t)},t.prototype._createInstanceAsync=function(t,i){var o,s=this
return new n.TPromise(function(n,u,c){e([t.moduleName],function(e){if(o&&u(o),!e)return u(r.illegalArgument("module not found: "+t.moduleName))
var c
if("function"!=typeof(c=t.ctorName?e[t.ctorName]:e))return u(r.illegalArgument("not a function: "+t.ctorName||t.moduleName))
try{i.unshift.apply(i,t.staticArguments()),n(s._createInstance(new a.SyncDescriptor(c),i))}catch(e){return u(e)}},u)},function(){o=r.canceled()})},t.prototype._createInstance=function(e,t){var n=this,r=e.staticArguments().concat(t),o=u._util.getServiceDependencies(e.ctor).sort(function(e,t){return e.index-t.index}),s=o.map(function(t){var r=n._getOrCreateServiceInstance(t.id)
if(!r&&n._strict&&!t.optional)throw new Error("[createInstance] "+e.ctor.name+" depends on UNKNOWN service "+t.id+".")
return r}),a=o.length>0?o[0].index:r.length
if(r.length!==a){console.warn("[createInstance] First service dependency of "+e.ctor.name+" at position "+(a+1)+" conflicts with "+r.length+" static arguments")
var c=a-r.length
r=c>0?r.concat(new Array(c)):r.slice(0,a)}var l=[e.ctor]
l.push.apply(l,r),l.push.apply(l,s)
var h=i.create.apply(null,l)
return e._validate(h),h},t.prototype._getOrCreateServiceInstance=function(e){var t=this._services.get(e)
return t instanceof a.SyncDescriptor?this._createAndCacheServiceInstance(e,t):t},t.prototype._createAndCacheServiceInstance=function(e,t){function n(){var e=new Error("[createInstance] cyclic dependency between services")
throw e.message=r.toString(),e}o.ok(this._services.get(e)instanceof a.SyncDescriptor)
for(var r=new s.Graph(function(e){return e.id.toString()}),i=0,c=[{id:e,desc:t}];c.length;){var l=c.pop()
r.lookupOrInsertNode(l),i++>100&&n()
for(var h=0,d=u._util.getServiceDependencies(l.desc.ctor);h<d.length;h++){var f=d[h],p=this._services.get(f.id)
if(p||console.warn("[createInstance] "+e+" depends on "+f.id+" which is NOT registered."),p instanceof a.SyncDescriptor){var g={id:f.id,desc:p}
r.insertEdge(l,g),c.push(g)}}}for(;;){var m=r.roots()
if(0===m.length){0!==r.length&&n()
break}for(var v=0,_=m;v<_.length;v++){var y=_[v],b=this._createInstance(y.data.desc,[])
this._services.set(y.data.id,b),r.removeNode(y.data)}}return this._services.get(e)},t}()
t.InstantiationService=l}),define(e[11],t([1,0,9,34]),function(e,t,n,r){"use strict"
var i=function(){function e(){this.data={}}return e.prototype.add=function(e,t){r.ok(n.isString(e)),r.ok(n.isObject(t)),r.ok(!this.data.hasOwnProperty(e),"There is already an extension with this id"),this.data[e]=t},e.prototype.knows=function(e){return this.data.hasOwnProperty(e)},e.prototype.as=function(e){return this.data[e]||null},e}()
t.Registry=new i
var o=function(){function e(){this.toBeInstantiated=[],this.instances=[]}return e.prototype.setInstantiationService=function(e){for(this.instantiationService=e;this.toBeInstantiated.length>0;){var t=this.toBeInstantiated.shift()
this.instantiate(t)}},e.prototype.instantiate=function(e){var t=this.instantiationService.createInstance(e)
this.instances.push(t)},e.prototype._register=function(e){this.instantiationService?this.instantiate(e):this.toBeInstantiated.push(e)},e.prototype._getInstances=function(){return this.instances.slice(0)},e.prototype._setInstances=function(e){this.instances=e},e}()
t.BaseRegistry=o}),define(e[40],t([1,0,73,8,11]),function(e,t,n,r,i){"use strict"
t.Extensions={ModesRegistry:"editor.modesRegistry"}
var o=function(){function e(){this._onDidAddCompatModes=new r.Emitter,this.onDidAddCompatModes=this._onDidAddCompatModes.event,this._onDidAddLanguages=new r.Emitter,this.onDidAddLanguages=this._onDidAddLanguages.event,this._compatModes=[],this._languages=[]}return e.prototype.registerCompatModes=function(e){this._compatModes=this._compatModes.concat(e),this._onDidAddCompatModes.fire(e)},e.prototype.registerCompatMode=function(e){this._compatModes.push(e),this._onDidAddCompatModes.fire([e])},e.prototype.getCompatModes=function(){return this._compatModes.slice(0)},e.prototype.registerLanguage=function(e){this._languages.push(e),this._onDidAddLanguages.fire([e])},e.prototype.registerLanguages=function(e){this._languages=this._languages.concat(e),this._onDidAddLanguages.fire(e)},e.prototype.getLanguages=function(){return this._languages.slice(0)},e}()
t.EditorModesRegistry=o,t.ModesRegistry=new o,i.Registry.add(t.Extensions.ModesRegistry,t.ModesRegistry),t.ModesRegistry.registerLanguage({id:"plaintext",extensions:[".txt",".gitignore"],aliases:[n.localize(0,null),"text"],mimetypes:["text/plain"]})})
var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,s=3>o?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(3>o?i(s):o>3?i(t,n,s):i(t,n))||s)
return o>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__param||function(e,t){return function(n,r){t(n,r,e)}}
define(e[96],t([1,0,5,35,37,23,72,2,40]),function(e,t,n,o,s,a,u,c,l){"use strict"
var h=function(){function e(e,t,n){this.resourceService=e,this.modeService=t,this.serviceId=o.ICompatWorkerService,this.isInMainThread=!1,l.ModesRegistry.registerCompatModes(n.compatModes),l.ModesRegistry.registerLanguages(n.languages),this._compatModes=Object.create(null)}return e.prototype.registerCompatMode=function(e){this._compatModes[e.getId()]=e},e.prototype.handleMainRequest=function(e,t,r){if("$"===e)switch(t){case"acceptNewModel":return this._acceptNewModel(r[0])
case"acceptDidDisposeModel":return this._acceptDidDisposeModel(r[0])
case"acceptModelEvents":return this._acceptModelEvents(r[0],r[1])
case"acceptCompatModes":return this._acceptCompatModes(r[0])
case"acceptLanguages":return this._acceptLanguages(r[0])
case"instantiateCompatMode":return this._instantiateCompatMode(r[0])}var i=this._compatModes[e]
return n.TPromise.as(i[t].apply(i,r))},e.prototype.CompatWorker=function(e,t,n,r){return n.apply(e,r)},e.prototype._acceptNewModel=function(e){var t=this,n=new u.MirrorModel(e.versionId,e.value,null,e.url)
return this.resourceService.insert(n.uri,n),this.modeService.getOrCreateMode(e.modeId).then(function(e){t.resourceService.remove(n.uri),n.setMode(e),t.resourceService.insert(n.uri,n)})},e.prototype._acceptDidDisposeModel=function(e){var t=this.resourceService.get(e)
this.resourceService.remove(e),t.dispose()},e.prototype._acceptModelEvents=function(e,t){var n=this.resourceService.get(e)
try{n.onEvents(t)}catch(e){c.onUnexpectedError(e)}},e.prototype._acceptCompatModes=function(e){l.ModesRegistry.registerCompatModes(e)},e.prototype._acceptLanguages=function(e){l.ModesRegistry.registerLanguages(e)},e.prototype._instantiateCompatMode=function(e){return this.modeService.getOrCreateMode(e).then(function(e){})},r([i(0,s.IResourceService),i(1,a.IModeService)],e)}()
t.CompatWorkerServiceWorker=h}),define(e[97],t([1,0,2,8,46,3,40]),function(e,t,n,r,i,o,s){"use strict"
var a=Object.prototype.hasOwnProperty,u=function(){function e(e){var t=this
void 0===e&&(e=!0),this._onDidAddModes=new r.Emitter,this.onDidAddModes=this._onDidAddModes.event,this.knownModeIds={},this.mime2LanguageId={},this.name2LanguageId={},this.id2Name={},this.id2Extensions={},this.compatModes={},this.lowerName2Id={},this.id2ConfigurationFiles={},e&&(this._registerCompatModes(s.ModesRegistry.getCompatModes()),s.ModesRegistry.onDidAddCompatModes(function(e){return t._registerCompatModes(e)}),this._registerLanguages(s.ModesRegistry.getLanguages()),s.ModesRegistry.onDidAddLanguages(function(e){return t._registerLanguages(e)}))}return e.prototype._registerCompatModes=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n]
this._registerLanguage({id:r.id,extensions:r.extensions,filenames:r.filenames,firstLine:r.firstLine,aliases:r.aliases,mimetypes:r.mimetypes}),this.compatModes[r.id]={moduleId:r.moduleId,ctorName:r.ctorName,deps:r.deps},t.push(r.id)}this._onDidAddModes.fire(t)},e.prototype._registerLanguages=function(e){for(var t=[],n=0;n<e.length;n++)this._registerLanguage(e[n]),t.push(e[n].id)
this._onDidAddModes.fire(t)},e.prototype._setLanguageName=function(e,t,n){var r=this.id2Name[e]
if(r){if(!n)return
delete this.name2LanguageId[r]}this.name2LanguageId[t]=e,this.id2Name[e]=t},e.prototype._registerLanguage=function(e){this.knownModeIds[e.id]=!0
var t=null
if(void 0!==e.mimetypes&&Array.isArray(e.mimetypes))for(var r=0;r<e.mimetypes.length;r++)t||(t=e.mimetypes[r]),this.mime2LanguageId[e.mimetypes[r]]=e.id
if(t||(t="text/x-"+e.id,this.mime2LanguageId[t]=e.id),Array.isArray(e.extensions)){this.id2Extensions[e.id]=this.id2Extensions[e.id]||[]
for(var s=0,a=e.extensions;s<a.length;s++){var u=a[s]
i.registerTextMime({mime:t,extension:u}),this.id2Extensions[e.id].push(u)}}if(Array.isArray(e.filenames))for(var c=0,l=e.filenames;c<l.length;c++){var h=l[c]
i.registerTextMime({mime:t,filename:h})}if(Array.isArray(e.filenamePatterns))for(var d=0,f=e.filenamePatterns;d<f.length;d++){var p=f[d]
i.registerTextMime({mime:t,filepattern:p})}if("string"==typeof e.firstLine&&e.firstLine.length>0){var g=e.firstLine
"^"!==g.charAt(0)&&(g="^"+g)
try{var m=new RegExp(g)
o.regExpLeadsToEndlessLoop(m)||i.registerTextMime({mime:t,firstline:m})}catch(e){n.onUnexpectedError(e)}}if(this.lowerName2Id[e.id.toLowerCase()]=e.id,void 0!==e.aliases&&Array.isArray(e.aliases))for(r=0;r<e.aliases.length;r++)e.aliases[r]&&0!==e.aliases[r].length&&(this.lowerName2Id[e.aliases[r].toLowerCase()]=e.id)
var v=void 0!==e.aliases&&Array.isArray(e.aliases)&&e.aliases.length>0
if(v&&null===e.aliases[0]);else{var _=(v?e.aliases[0]:null)||e.id
this._setLanguageName(e.id,_,v)}"string"==typeof e.configuration&&(this.id2ConfigurationFiles[e.id]=this.id2ConfigurationFiles[e.id]||[],this.id2ConfigurationFiles[e.id].push(e.configuration))},e.prototype.isRegisteredMode=function(e){return!!a.call(this.mime2LanguageId,e)||a.call(this.knownModeIds,e)},e.prototype.getRegisteredModes=function(){return Object.keys(this.knownModeIds)},e.prototype.getRegisteredLanguageNames=function(){return Object.keys(this.name2LanguageId)},e.prototype.getLanguageName=function(e){return this.id2Name[e]||null},e.prototype.getModeIdForLanguageNameLowercase=function(e){return this.lowerName2Id[e]||null},e.prototype.getConfigurationFiles=function(e){return this.id2ConfigurationFiles[e]||[]},e.prototype.getMimeForMode=function(e){for(var t=Object.keys(this.mime2LanguageId),n=0,r=t.length;r>n;n++){var i=t[n]
if(this.mime2LanguageId[i]===e)return i}return null},e.prototype.extractModeIds=function(e){var t=this
return e?e.split(",").map(function(e){return e.trim()}).map(function(e){return t.mime2LanguageId[e]||e}).filter(function(e){return t.knownModeIds[e]}):[]},e.prototype.getModeIdsFromLanguageName=function(e){return e&&a.call(this.name2LanguageId,e)?[this.name2LanguageId[e]]:[]},e.prototype.getModeIdsFromFilenameOrFirstLine=function(e,t){if(!e&&!t)return[]
var n=i.guessMimeTypes(e,t)
return this.extractModeIds(n.join(","))},e.prototype.getCompatMode=function(e){return this.compatModes[e]||null},e.prototype.getExtensions=function(e){var t=this.name2LanguageId[e]
return t?this.id2Extensions[t]:[]},e}()
t.LanguagesRegistry=u}),define(e[41],t([1,0,79,11,15]),function(e,t,n,r,i){"use strict"
t.Extensions={JSONContribution:"base.contributions.json"}
var o=new(function(){function e(){this.schemasById={},this.eventEmitter=new i.EventEmitter}return e.prototype.addRegistryChangedListener=function(e){return this.eventEmitter.addListener2("registryChanged",e)},e.prototype.registerSchema=function(e,t){this.schemasById[function(e){return e.length>0&&"#"===e.charAt(e.length-1)?e.substring(0,e.length-1):e}(e)]=t,this.eventEmitter.emit("registryChanged",{})},e.prototype.getSchemaContributions=function(){return{schemas:this.schemasById}},e}())
r.Registry.add(t.Extensions.JSONContribution,o),o.registerSchema("http://json-schema.org/draft-04/schema#",{id:"http://json-schema.org/draft-04/schema#",title:n.localize(0,null),$schema:"http://json-schema.org/draft-04/schema#",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0}},type:"object",properties:{id:{type:"string",format:"uri",description:n.localize(1,null)},$schema:{type:"string",format:"uri",description:n.localize(2,null)},title:{type:"string",description:n.localize(3,null)},description:{type:"string",description:n.localize(4,null)},default:{description:n.localize(5,null)},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0,description:n.localize(6,null)},maximum:{type:"number",description:n.localize(7,null)},exclusiveMaximum:{type:"boolean",default:!1,description:n.localize(8,null)},minimum:{type:"number",description:n.localize(9,null)},exclusiveMinimum:{type:"boolean",default:!1,description:n.localize(10,null)},maxLength:{allOf:[{$ref:"#/definitions/positiveInteger"}],description:n.localize(11,null)},minLength:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}],description:n.localize(12,null)},pattern:{type:"string",format:"regex",description:n.localize(13,null)},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{},description:n.localize(14,null)},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{},description:n.localize(15,null)},maxItems:{allOf:[{$ref:"#/definitions/positiveInteger"}],description:n.localize(16,null)},minItems:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}],description:n.localize(17,null)},uniqueItems:{type:"boolean",default:!1,description:n.localize(18,null)},maxProperties:{allOf:[{$ref:"#/definitions/positiveInteger"}],description:n.localize(19,null)},minProperties:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}],description:n.localize(20,null)},required:{allOf:[{$ref:"#/definitions/stringArray"}],description:n.localize(21,null)},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{},description:n.localize(22,null)},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{},description:n.localize(23,null)},properties:{type:"object",additionalProperties:{$ref:"#"},default:{},description:n.localize(24,null)},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{},description:n.localize(25,null)},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]},description:n.localize(26,null)},enum:{type:"array",minItems:1,uniqueItems:!0,description:n.localize(27,null)},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}],description:n.localize(28,null)},format:{anyOf:[{type:"string",description:n.localize(29,null),enum:["date-time","uri","email","hostname","ipv4","ipv6","regex"]},{type:"string"}]},allOf:{allOf:[{$ref:"#/definitions/schemaArray"}],description:n.localize(30,null)},anyOf:{allOf:[{$ref:"#/definitions/schemaArray"}],description:n.localize(31,null)},oneOf:{allOf:[{$ref:"#/definitions/schemaArray"}],description:n.localize(32,null)},not:{allOf:[{$ref:"#"}],description:n.localize(33,null)}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},default:{}})}),define(e[42],t([1,0,78,2,13,32,41,11]),function(e,t,n,r,i,o,s,a){"use strict"
function u(e){if(!Array.isArray(e))return!1
for(var t=0,n=e.length;n>t;t++)if("string"!=typeof e[t])return!1
return!0}var c=function(){function e(e,t){this._messageHandler=e,this._source=t}return e.prototype._msg=function(e,t){this._messageHandler({type:e,message:t,source:this._source})},e.prototype.error=function(e){this._msg(o.default.Error,e)},e.prototype.warn=function(e){this._msg(o.default.Warning,e)},e.prototype.info=function(e){this._msg(o.default.Info,e)},e}()
t.isValidExtensionDescription=function(e,t,r){if(!t)return r.push(n.localize(0,null)),!1
if("string"!=typeof t.publisher)return r.push(n.localize(1,null,"publisher")),!1
if("string"!=typeof t.name)return r.push(n.localize(2,null,"name")),!1
if("string"!=typeof t.version)return r.push(n.localize(3,null,"version")),!1
if(!t.engines)return r.push(n.localize(4,null,"engines")),!1
if("string"!=typeof t.engines.vscode)return r.push(n.localize(5,null,"engines.vscode")),!1
if(void 0!==t.extensionDependencies&&!u(t.extensionDependencies))return r.push(n.localize(6,null,"extensionDependencies")),!1
if(void 0!==t.activationEvents){if(!u(t.activationEvents))return r.push(n.localize(7,null,"activationEvents")),!1
if(void 0===t.main)return r.push(n.localize(8,null,"activationEvents","main")),!1}if(void 0!==t.main){if("string"!=typeof t.main)return r.push(n.localize(9,null,"main")),!1
var o=i.normalize(i.join(e,t.main))
if(o.indexOf(e)&&r.push(n.localize(10,null,o,e)),void 0===t.activationEvents)return r.push(n.localize(11,null,"activationEvents","main")),!1}return!0}
var l=Object.hasOwnProperty,h=a.Registry.as(s.Extensions.JSONContribution),d=function(){function e(e,t){this.name=e,this._registry=t,this._handler=null,this._messageHandler=null}return e.prototype.setHandler=function(e){if(this._handler)throw new Error("Handler already set!")
this._handler=e,this._handle()},e.prototype.handle=function(e){this._messageHandler=e,this._handle()},e.prototype._handle=function(){var e=this
this._handler&&this._messageHandler&&this._registry.registerPointListener(this.name,function(t){var n=t.map(function(t){return{description:t,value:t.contributes[e.name],collector:new c(e._messageHandler,t.extensionFolderPath)}})
e._handler(n)})},e}(),f="vscode://schemas/vscode-extensions",p={default:{name:"{{name}}",description:"{{description}}",author:"{{author}}",version:"{{1.0.0}}",main:"{{pathToMain}}",dependencies:{}},properties:{displayName:{description:n.localize(12,null),type:"string"},categories:{description:n.localize(13,null),type:"array",items:{type:"string",enum:["Languages","Snippets","Linters","Themes","Debuggers","Productivity","Other"]}},galleryBanner:{type:"object",description:n.localize(14,null),properties:{color:{description:n.localize(15,null),type:"string"},theme:{description:n.localize(16,null),type:"string",enum:["dark","light"]}}},publisher:{description:n.localize(17,null),type:"string"},activationEvents:{description:n.localize(18,null),type:"array",items:{type:"string"}},extensionDependencies:{description:n.localize(19,null),type:"array",items:{type:"string"}},scripts:{type:"object",properties:{"vscode:prepublish":{description:n.localize(20,null),type:"string"}}},contributes:{description:n.localize(21,null),type:"object",properties:{},default:{}}}},g=function(){function e(){this._extensionsMap={},this._extensionsArr=[],this._activationMap={},this._pointListeners=[],this._extensionPoints={},this._oneTimeActivationEventListeners={}}return e.prototype.registerPointListener=function(t,n){var r={extensionPoint:t,listener:n}
this._pointListeners.push(r),this._triggerPointListener(r,e._filterWithExtPoint(this.getAllExtensionDescriptions(),t))},e.prototype.registerExtensionPoint=function(e,t){if(l.call(this._extensionPoints,e))throw new Error("Duplicate extension point: "+e)
var n=new d(e,this)
return this._extensionPoints[e]=n,p.properties.contributes.properties[e]=t,h.registerSchema(f,p),n},e.prototype.handleExtensionPoints=function(e){var t=this
Object.keys(this._extensionPoints).forEach(function(n){t._extensionPoints[n].handle(e)})},e.prototype._triggerPointListener=function(e,t){if(t&&0!==t.length)try{e.listener(t)}catch(e){r.onUnexpectedError(e)}},e.prototype.registerExtensions=function(t){for(var n=0,r=t.length;r>n;n++){var i=t[n]
if(l.call(this._extensionsMap,i.id))console.error("Extension `"+i.id+"` is already registered")
else if(this._extensionsMap[i.id]=i,this._extensionsArr.push(i),Array.isArray(i.activationEvents))for(var o=0,s=i.activationEvents.length;s>o;o++){var a=i.activationEvents[o]
this._activationMap[a]=this._activationMap[a]||[],this._activationMap[a].push(i)}}for(n=0,r=this._pointListeners.length;r>n;n++){var u=this._pointListeners[n],c=e._filterWithExtPoint(t,u.extensionPoint)
this._triggerPointListener(u,c)}},e._filterWithExtPoint=function(e,t){return e.filter(function(e){return e.contributes&&l.call(e.contributes,t)})},e.prototype.getExtensionDescriptionsForActivationEvent=function(e){return l.call(this._activationMap,e)?this._activationMap[e].slice(0):[]},e.prototype.getAllExtensionDescriptions=function(){return this._extensionsArr.slice(0)},e.prototype.getExtensionDescription=function(e){return l.call(this._extensionsMap,e)?this._extensionsMap[e]:null},e.prototype.registerOneTimeActivationEventListener=function(e,t){l.call(this._oneTimeActivationEventListeners,e)||(this._oneTimeActivationEventListeners[e]=[]),this._oneTimeActivationEventListeners[e].push(t)},e.prototype.triggerActivationEventListeners=function(e){if(l.call(this._oneTimeActivationEventListeners,e)){var t=this._oneTimeActivationEventListeners[e]
delete this._oneTimeActivationEventListeners[e]
for(var n=0,i=t.length;i>n;n++){var o=t[n]
try{o()}catch(e){r.onUnexpectedError(e)}}}},e}(),m="ExtensionsRegistry"
a.Registry.add(m,new g),t.ExtensionsRegistry=a.Registry.as(m),h.registerSchema(f,p)}),define(e[100],t([1,0,76,8,11,12,42,41]),function(e,t,n,r,i,o,s,a){"use strict"
t.Extensions={Configuration:"base.contributions.configuration"}
var u="vscode://schemas/settings",c=i.Registry.as(a.Extensions.JSONContribution),l=new(function(){function e(){this.configurationContributors=[],this.configurationSchema={allOf:[]},this._onDidRegisterConfiguration=new r.Emitter,c.registerSchema(u,this.configurationSchema)}return Object.defineProperty(e.prototype,"onDidRegisterConfiguration",{get:function(){return this._onDidRegisterConfiguration.event},enumerable:!0,configurable:!0}),e.prototype.registerConfiguration=function(e){this.configurationContributors.push(e),this.registerJSONConfiguration(e),this._onDidRegisterConfiguration.fire(this)},e.prototype.getConfigurations=function(){return this.configurationContributors.slice(0)},e.prototype.registerJSONConfiguration=function(e){var t=o.clone(e)
this.configurationSchema.allOf.push(t),c.registerSchema(u,this.configurationSchema)},e}())
i.Registry.add(t.Extensions.Configuration,l),s.ExtensionsRegistry.registerExtensionPoint("configuration",{description:n.localize(0,null),type:"object",defaultSnippets:[{body:{title:"",properties:{}}}],properties:{title:{description:n.localize(1,null),type:"string"},properties:{description:n.localize(2,null),type:"object",additionalProperties:{$ref:"http://json-schema.org/draft-04/schema#"}}}}).setHandler(function(e){for(var t=0;t<e.length;t++){var r=e[t].value,i=e[t].collector
if(r.type&&"object"!==r.type?i.warn(n.localize(3,null)):r.type="object",r.title&&"string"!=typeof r.title&&i.error(n.localize(4,null)),r.properties&&"object"!=typeof r.properties)return void i.error(n.localize(5,null))
var s=o.clone(r)
s.id=e[t].description.id,l.registerConfiguration(s)}})}),define(e[59],t([1,0,80,100,11,74,24]),function(e,t,n,r,i,o,s){"use strict"
var a=function(){function e(e,t){this._editorWorkerService=e,this._configurationService=t}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAutotriggerSuggest",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filter",{get:function(){return n.matchesStrictPrefix},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){var r=this._configurationService.getConfiguration("editor")
return!r||r.wordBasedSuggestions?s.wireCancellationToken(n,this._editorWorkerService.textualSuggest(e.uri,t)):[]},e._c=i.Registry.as(r.Extensions.Configuration).registerConfiguration({type:"object",order:5.1,properties:{"editor.wordBasedSuggestions":{type:"boolean",description:o.localize(0,null),default:!0}}}),e}()
t.TextualSuggestSupport=a,t.filterSuggestions=function(e){if(e){var t=n.fuzzyContiguousFilter,r=[]
return r.push({currentWord:e.currentWord,suggestions:e.suggestions.filter(function(n){return!!t(e.currentWord,n.label)}),incomplete:e.incomplete}),r}}}),define(e[60],t([1,0,15,5,33,4,51,21,59,83,17]),function(e,t,o,s,a,u,c,l,h,d,f){"use strict"
t.createWordRegExp=function(e){return void 0===e&&(e=""),f.createWordRegExp(e)}
var p=function(){function e(e,t,n,r,i){this._descriptor=e,this._workerDescriptor=a.createAsyncDescriptor1(t,n),this._superWorkerModuleId=r,this._instantiationService=i,this._workerPiecePromise=null}return e.prototype.worker=function(e){return this._getOrCreateWorker().then(e)},e.prototype._getOrCreateWorker=function(){var t=this
if(!this._workerPiecePromise){var n=this._superWorkerModuleId?e._loadModule(this._superWorkerModuleId):s.TPromise.as(null)
this._workerPiecePromise=n.then(function(){return e._loadModule(t._workerDescriptor.moduleName)}).then(function(){return t._instantiationService.createInstance(t._workerDescriptor,t._descriptor.id)})}return this._workerPiecePromise},e._loadModule=function(e){return new s.TPromise(function(t,n,r){self.require([e],t,n)},function(){})},e}()
t.ModeWorkerManager=p
var g=function(){function e(e){this._modeId=e,this._eventEmitter=new o.EventEmitter,this._simplifiedMode=null}return e.prototype.getId=function(){return this._modeId},e.prototype.toSimplifiedMode=function(){return this._simplifiedMode||(this._simplifiedMode=new v(this)),this._simplifiedMode},e.prototype.addSupportChangedListener=function(e){return this._eventEmitter.addListener2("modeSupportChanged",e)},e.prototype.setTokenizationSupport=function(e){var t=this,n=e(this)
return this.tokenizationSupport=n,this._eventEmitter.emit("modeSupportChanged",{tokenizationSupport:!0}),{dispose:function(){t.tokenizationSupport===n&&(delete t.tokenizationSupport,t._eventEmitter.emit("modeSupportChanged",{tokenizationSupport:!0}))}}},e}()
t.AbstractMode=g
var m=function(e){function t(t,n){e.call(this,t),this.compatWorkerService=n,this.compatWorkerService&&this.compatWorkerService.registerCompatMode(this)}return n(t,e),t}(g)
t.CompatMode=m
var v=function(){function e(e){var t=this
this._sourceMode=e,this._eventEmitter=new o.EventEmitter,this._id="vs.editor.modes.simplifiedMode:"+e.getId(),this._assignSupports(),this._sourceMode.addSupportChangedListener&&this._sourceMode.addSupportChangedListener(function(e){t._assignSupports(),t._eventEmitter.emit("modeSupportChanged",e)})}return e.prototype.getId=function(){return this._id},e.prototype.toSimplifiedMode=function(){return this},e.prototype._assignSupports=function(){this.tokenizationSupport=this._sourceMode.tokenizationSupport},e}()
t.isDigit=function(){var e="0".charCodeAt(0),t="1".charCodeAt(0),n="2".charCodeAt(0),r="3".charCodeAt(0),i="4".charCodeAt(0),o="5".charCodeAt(0),s="6".charCodeAt(0),a="7".charCodeAt(0),u="8".charCodeAt(0),c="9".charCodeAt(0),l="a".charCodeAt(0),h="b".charCodeAt(0),d="c".charCodeAt(0),f="d".charCodeAt(0),p="e".charCodeAt(0),g="f".charCodeAt(0),m="A".charCodeAt(0),v="B".charCodeAt(0),_="C".charCodeAt(0),y="D".charCodeAt(0),b="E".charCodeAt(0),k="F".charCodeAt(0)
return function(C,E){var S=C.charCodeAt(0)
switch(E){case 1:return S===e
case 2:return S>=e&&t>=S
case 3:return S>=e&&n>=S
case 4:return S>=e&&r>=S
case 5:return S>=e&&i>=S
case 6:return S>=e&&o>=S
case 7:return S>=e&&s>=S
case 8:return S>=e&&a>=S
case 9:return S>=e&&u>=S
case 10:return S>=e&&c>=S
case 11:return S>=e&&c>=S||S===l||S===m
case 12:return S>=e&&c>=S||S>=l&&h>=S||S>=m&&v>=S
case 13:return S>=e&&c>=S||S>=l&&d>=S||S>=m&&_>=S
case 14:return S>=e&&c>=S||S>=l&&f>=S||S>=m&&y>=S
case 15:return S>=e&&c>=S||S>=l&&p>=S||S>=m&&b>=S
default:return S>=e&&c>=S||S>=l&&g>=S||S>=m&&k>=S}}}()
var _=function(e){function t(t,n,r){e.call(this,t.id),r&&l.SuggestRegistry.register(this.getId(),new h.TextualSuggestSupport(r,n),!0)}return n(t,e),r([i(1,c.IConfigurationService),i(2,u.optional(d.IEditorWorkerService))],t)}(g)
t.FrankensteinMode=_}),define(e[103],t([1,0,75,2,8,16,12,13,5,46,33,38,42,4,60,40,97,23,51,39,14]),function(e,t,o,s,a,u,c,l,h,d,f,p,g,m,v,_,y,b,k,C,E){"use strict"
function S(e){return void 0===e||!!Array.isArray(e)&&e.every(function(e){return"string"==typeof e})}function T(e,t){return e?"string"!=typeof e.id?(t.error(o.localize(10,null,"id")),!1):S(e.extensions)?S(e.filenames)?void 0!==e.firstLine&&"string"!=typeof e.firstLine?(t.error(o.localize(13,null,"firstLine")),!1):void 0!==e.configuration&&"string"!=typeof e.configuration?(t.error(o.localize(14,null,"configuration")),!1):S(e.aliases)?!!S(e.mimetypes)||(t.error(o.localize(16,null,"mimetypes")),!1):(t.error(o.localize(15,null,"aliases")),!1):(t.error(o.localize(12,null,"filenames")),!1):(t.error(o.localize(11,null,"extensions")),!1):(t.error(o.localize(9,null,x.name)),!1)}var x=g.ExtensionsRegistry.registerExtensionPoint("languages",{description:o.localize(0,null),type:"array",defaultSnippets:[{body:[{id:"",aliases:[],extensions:[]}]}],items:{type:"object",defaultSnippets:[{body:{id:"",extensions:[]}}],properties:{id:{description:o.localize(1,null),type:"string"},aliases:{description:o.localize(2,null),type:"array",items:{type:"string"}},extensions:{description:o.localize(3,null),default:[".foo"],type:"array",items:{type:"string"}},filenames:{description:o.localize(4,null),type:"array",items:{type:"string"}},filenamePatterns:{description:o.localize(5,null),type:"array",items:{type:"string"}},mimetypes:{description:o.localize(6,null),type:"array",items:{type:"string"}},firstLine:{description:o.localize(7,null),type:"string"},configuration:{description:o.localize(8,null),type:"string"}}}}),I=function(){function e(e,t){var n=this
this.serviceId=b.IModeService,this._onDidAddModes=new a.Emitter,this.onDidAddModes=this._onDidAddModes.event,this._onDidCreateMode=new a.Emitter,this.onDidCreateMode=this._onDidCreateMode.event,this._instantiationService=e,this._extensionService=t,this._activationPromises={},this._instantiatedModes={},this._config={},this._registry=new y.LanguagesRegistry,this._registry.onDidAddModes(function(e){return n._onDidAddModes.fire(e)})}return e.prototype.getConfigurationForMode=function(e){return this._config[e]||{}},e.prototype.configureMode=function(e,t){var n=this.getModeId(e)
n&&this.configureModeById(n,t)},e.prototype.configureModeById=function(e,t){var n=this._config[e]||{},r=c.mixin(c.clone(n),t)
if(!c.equals(n,r)){this._config[e]=r
var i=this.getMode(e)
i&&i.configSupport&&i.configSupport.configure(this.getConfigurationForMode(e))}},e.prototype.configureAllModes=function(e){var t=this
e&&this._registry.getRegisteredModes().forEach(function(n){var r=e[n]
t.configureModeById(n,r)})},e.prototype.isRegisteredMode=function(e){return this._registry.isRegisteredMode(e)},e.prototype.isCompatMode=function(e){return!!this._registry.getCompatMode(e)},e.prototype.getRegisteredModes=function(){return this._registry.getRegisteredModes()},e.prototype.getRegisteredLanguageNames=function(){return this._registry.getRegisteredLanguageNames()},e.prototype.getExtensions=function(e){return this._registry.getExtensions(e)},e.prototype.getMimeForMode=function(e){return this._registry.getMimeForMode(e)},e.prototype.getLanguageName=function(e){return this._registry.getLanguageName(e)},e.prototype.getModeIdForLanguageName=function(e){return this._registry.getModeIdForLanguageNameLowercase(e)},e.prototype.getModeId=function(e){var t=this._registry.extractModeIds(e)
return t.length>0?t[0]:null},e.prototype.getConfigurationFiles=function(e){return this._registry.getConfigurationFiles(e)},e.prototype.lookup=function(e){for(var t=[],n=this._registry.extractModeIds(e),r=0;r<n.length;r++){var i=n[r]
t.push({modeId:i,isInstantiated:this._instantiatedModes.hasOwnProperty(i)})}return t},e.prototype.getMode=function(e){for(var t=this._registry.extractModeIds(e),n=!1,r=0;r<t.length;r++){if(this._instantiatedModes.hasOwnProperty(t[r]))return this._instantiatedModes[t[r]]
n=n||"plaintext"===t[r]}if(n){var i=null
return this.getOrCreateMode(e).then(function(e){i=e}).done(null,s.onUnexpectedError),i}},e.prototype.getModeIdByLanguageName=function(e){var t=this._registry.getModeIdsFromLanguageName(e)
return t.length>0?t[0]:null},e.prototype.getModeIdByFilenameOrFirstLine=function(e,t){var n=this._registry.getModeIdsFromFilenameOrFirstLine(e,t)
return n.length>0?n[0]:null},e.prototype.onReady=function(){return this._extensionService.onReady()},e.prototype.getOrCreateMode=function(e){var t=this
return this.onReady().then(function(){var n=t.getModeId(e)
return t._getOrCreateMode(n||"plaintext")})},e.prototype.getOrCreateModeByLanguageName=function(e){var t=this
return this.onReady().then(function(){var n=t.getModeIdByLanguageName(e)
return t._getOrCreateMode(n||"plaintext")})},e.prototype.getOrCreateModeByFilenameOrFirstLine=function(e,t){var n=this
return this.onReady().then(function(){var r=n.getModeIdByFilenameOrFirstLine(e,t)
return n._getOrCreateMode(r||"plaintext")})},e.prototype._getOrCreateMode=function(e){var t=this
if(this._instantiatedModes.hasOwnProperty(e))return h.TPromise.as(this._instantiatedModes[e])
if(this._activationPromises.hasOwnProperty(e))return this._activationPromises[e]
var n,r,i=new h.TPromise(function(e,t,i){n=e,r=t})
return this._activationPromises[e]=i,this._createMode(e).then(function(n){return t._instantiatedModes[e]=n,delete t._activationPromises[e],t._onDidCreateMode.fire(n),t._extensionService.activateByEvent("onLanguage:"+e).done(null,s.onUnexpectedError),t._instantiatedModes[e]}).then(n,r),i},e.prototype._createMode=function(e){var t=this,n=this._createModeDescriptor(e),r=this._registry.getCompatMode(e)
if(r){return(Array.isArray(r.deps)?h.TPromise.join(r.deps.map(function(e){return t.getOrCreateMode(e)})):h.TPromise.as(null)).then(function(i){var o=f.createAsyncDescriptor1(r.moduleId,r.ctorName)
return t._instantiationService.createInstance(o,n).then(function(n){return n.configSupport&&n.configSupport.configure(t.getConfigurationForMode(e)),n})})}return h.TPromise.as(this._instantiationService.createInstance(v.FrankensteinMode,n))},e.prototype._createModeDescriptor=function(e){return{id:e}},e.prototype._registerTokenizationSupport=function(e,t){return e.setTokenizationSupport?e.setTokenizationSupport(t):(console.warn("Cannot register tokenizationSupport on mode "+e.getId()+" because it does not support it."),u.empty)},e.prototype.registerModeSupport=function(e,t){var n=this
if(this._instantiatedModes.hasOwnProperty(e))return this._registerTokenizationSupport(this._instantiatedModes[e],t)
var r,i=new h.TPromise(function(e,t){r=e}),o=this.onDidCreateMode(function(i){i.getId()===e&&(r(n._registerTokenizationSupport(i,t)),o.dispose())})
return{dispose:function(){i.done(function(e){return e.dispose()},null)}}},e.prototype.registerTokenizationSupport=function(e,t){return this.registerModeSupport(e,t)},e.prototype.registerTokenizationSupport2=function(e,t){return this.registerModeSupport(e,function(e){return new w(e,t)})},e}()
t.ModeServiceImpl=I
var L=function(){function e(e,t,n){this._mode=e,this._actual=t,this._stateData=n}return Object.defineProperty(e.prototype,"actual",{get:function(){return this._actual},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new e(this._mode,this._actual.clone(),C.AbstractState.safeClone(this._stateData))},e.prototype.equals=function(t){return!!(t instanceof e&&this._actual.equals(t._actual))&&C.AbstractState.safeEquals(this._stateData,t._stateData)},e.prototype.getMode=function(){return this._mode},e.prototype.tokenize=function(e){throw new Error("Unexpected tokenize call!")},e.prototype.getStateData=function(){return this._stateData},e.prototype.setStateData=function(e){this._stateData=e},e}()
t.TokenizationState2Adapter=L
var w=function(){function e(e,t){this._mode=e,this._actual=t}return e.prototype.getInitialState=function(){return new L(this._mode,this._actual.getInitialState(),null)},e.prototype.tokenize=function(e,t,n,r){if(void 0===n&&(n=0),t instanceof L){var i=this._actual.tokenize(e,t.actual),o=[]
return i.tokens.forEach(function(e){if("string"==typeof e.scopes)o.push(new E.Token(e.startIndex+n,e.scopes))
else{if(!Array.isArray(e.scopes)||1!==e.scopes.length)throw new Error("Only token scopes as strings or of precisely 1 length are supported at this time!")
o.push(new E.Token(e.startIndex+n,e.scopes[0]))}}),{tokens:o,actualStopOffset:n+e.length,endState:new L(t.getMode(),i.endState,t.getStateData()),modeTransitions:[{startIndex:n,mode:t.getMode()}]}}throw new Error("Unexpected state to tokenize with!")},e}()
t.TokenizationSupport2Adapter=w
var M=function(e){function t(t,n,r){var i=this
e.call(this,t,n),this._configurationService=r,x.setHandler(function(e){for(var t=[],n=0,r=e.length;r>n;n++){var i=e[n]
if(Array.isArray(i.value))for(var s=0,a=i.value.length;a>s;s++){var u=i.value[s]
if(T(u,i.collector)){var c=u.configuration?l.join(i.description.extensionFolderPath,u.configuration):u.configuration
t.push({id:u.id,extensions:u.extensions,filenames:u.filenames,filenamePatterns:u.filenamePatterns,firstLine:u.firstLine,aliases:u.aliases,mimetypes:u.mimetypes,configuration:c})}}else i.collector.error(o.localize(17,null,x.name))}_.ModesRegistry.registerLanguages(t)}),this._configurationService.onDidUpdateConfiguration(function(e){return i.onConfigurationChange(e.config)})}return n(t,e),t.prototype.onReady=function(){var e=this
if(!this._onReadyPromise){var t=this._configurationService.getConfiguration()
this._onReadyPromise=this._extensionService.onReady().then(function(){return e.onConfigurationChange(t),!0})}return this._onReadyPromise},t.prototype.onConfigurationChange=function(e){var t=this
d.clearTextMimes(!0),e.files&&e.files.associations&&Object.keys(e.files.associations).forEach(function(n){d.registerTextMime({mime:t.getMimeForMode(e.files.associations[n]),filepattern:n,userConfigured:!0})})},r([i(0,m.IInstantiationService),i(1,p.IExtensionService),i(2,k.IConfigurationService)],t)}(I)
t.MainThreadModeServiceImpl=M}),define(e[104],t([1,0,77,32,5,38,42]),function(e,t,n,r,i,o,s){"use strict"
var a=Object.hasOwnProperty,u=function(){return function(e){this.activationFailed=e}}()
t.ActivatedExtension=u
var c=function(){function e(e){var t=this
this.serviceId=o.IExtensionService,e?(this._onReady=i.TPromise.as(!0),this._onReadyC=function(e){}):this._onReady=new i.TPromise(function(e,n,r){t._onReadyC=e},function(){console.warn("You should really not try to cancel this ready promise!")}),this._activatingExtensions={},this._activatedExtensions={}}return e.prototype._triggerOnReady=function(){this._onReadyC(!0)},e.prototype.onReady=function(){return this._onReady},e.prototype.getExtensionsStatus=function(){return null},e.prototype.isActivated=function(e){return a.call(this._activatedExtensions,e)},e.prototype.activateByEvent=function(e){var t=this
return this._onReady.then(function(){s.ExtensionsRegistry.triggerActivationEventListeners(e)
var n=s.ExtensionsRegistry.getExtensionDescriptionsForActivationEvent(e)
return t._activateExtensions(n,0)})},e.prototype.activateById=function(e){var t=this
return this._onReady.then(function(){var n=s.ExtensionsRegistry.getExtensionDescription(e)
if(!n)throw new Error("Extension `"+e+"` is not known")
return t._activateExtensions([n],0)})},e.prototype._handleActivateRequest=function(e,t,i){for(var o=void 0===e.extensionDependencies?[]:e.extensionDependencies,u=!0,c=0,l=o.length;l>c;c++){var h=o[c],d=s.ExtensionsRegistry.getExtensionDescription(h)
if(!d)return this._showMessage(r.default.Error,n.localize(0,null,h,e.id)),void(this._activatedExtensions[e.id]=this._createFailedExtension())
if(a.call(this._activatedExtensions,h)){if(this._activatedExtensions[h].activationFailed)return this._showMessage(r.default.Error,n.localize(1,null,h,e.id)),void(this._activatedExtensions[e.id]=this._createFailedExtension())}else u=!1,t[h]=d}u?t[e.id]=e:i.push(e)},e.prototype._activateExtensions=function(e,t){var o=this
if(0===e.length)return i.TPromise.as(void 0)
if(0===(e=e.filter(function(e){return!a.call(o._activatedExtensions,e.id)})).length)return i.TPromise.as(void 0)
if(t>10){for(var s=0,u=e.length;u>s;s++)this._showMessage(r.default.Error,n.localize(2,null,e[s].id)),this._activatedExtensions[e[s].id]=this._createFailedExtension()
return i.TPromise.as(void 0)}var c=Object.create(null),l=[]
for(s=0,u=e.length;u>s;s++)this._handleActivateRequest(e[s],c,l)
for(s=0,u=l.length;u>s;s++)c[l[s].id]&&delete c[l[s].id]
var h=Object.keys(c).map(function(e){return c[e]})
return 0===l.length?i.TPromise.join(h.map(function(e){return o._activateExtension(e)})).then(function(e){}):this._activateExtensions(h,t+1).then(function(e){return o._activateExtensions(l,t+1)})},e.prototype._activateExtension=function(e){var t=this
return a.call(this._activatedExtensions,e.id)?i.TPromise.as(void 0):a.call(this._activatingExtensions,e.id)?this._activatingExtensions[e.id]:(this._activatingExtensions[e.id]=this._actualActivateExtension(e).then(null,function(i){return t._showMessage(r.default.Error,n.localize(3,null,e.id,i.message)),console.error("Activating extension `"+e.id+"` failed: ",i.message),console.log("Here is the error stack: ",i.stack),t._createFailedExtension()}).then(function(n){t._activatedExtensions[e.id]=n,delete t._activatingExtensions[e.id]}),this._activatingExtensions[e.id])},e}()
t.AbstractExtensionService=c}),define(e[43],t([1,0,4]),function(e,t,n){"use strict"
t.IRequestService=n.createDecorator("requestService")}),define(e[44],t([1,0,5,26,4]),function(e,t,n,r,i){"use strict"
t.ITelemetryService=i.createDecorator("telemetryService"),t.NullTelemetryService={serviceId:void 0,timedPublicLog:function(e,t){return r.nullEvent},publicLog:function(e,t){return n.TPromise.as(null)},isOptedIn:!0,getTelemetryInfo:function(){return n.TPromise.as({instanceId:"someValue.instanceId",sessionId:"someValue.sessionId",machineId:"someValue.machineId"})}},t.combinedAppender=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return{log:function(t,n){return e.forEach(function(e){return e.log(t,n)})}}},t.NullAppender={log:function(){return null}},t.anonymize=function(e){if(!e)return e
for(var t="",n=0;n<e.length;n++){var r=e[n]
t+=r>="0"&&"9">=r?"0":r>="a"&&"z">=r?"a":r>="A"&&"Z">=r?"A":r}return t}}),define(e[107],t([1,0,20,5,84,3,26,24,12,43,44]),function(e,t,n,r,i,o,s,a,u,c,l){"use strict"
var h=function(){function e(e,t){void 0===t&&(t=l.NullTelemetryService),this.serviceId=c.IRequestService
var n=null,r=e.getWorkspace()
this._serviceMap=r||Object.create(null),this._telemetryService=t,r&&(n=o.rtrim(r.resource.toString(),"/")+"/"),this.computeOrigin(n)}return e.prototype.computeOrigin=function(e){if(e){this._origin=e
var t=n.default.parse(this._origin).path
t&&t.length>0&&(this._origin=this._origin.substring(0,this._origin.length-t.length+1)),o.endsWith(this._origin,"/")||(this._origin+="/")}else this._origin="/"},e.prototype.makeCrossOriginRequest=function(e){return null},e.prototype.makeRequest=function(e){var t=s.nullEvent,n=!1,c=e.url
if(!c)throw new Error("IRequestService.makeRequest: Url is required")
if((o.startsWith(c,"http://")||o.startsWith(c,"https://"))&&this._origin&&!o.startsWith(c,this._origin)){var l=this.makeCrossOriginRequest(e)
if(l)return l
n=!0}var h=e,d=r.TPromise.as(void 0)
return n||(h=this._telemetryService.getTelemetryInfo().then(function(e){var t={}
t["X-TelemetrySession"]=e.sessionId,t["X-Requested-With"]="XMLHttpRequest",h.headers=u.mixin(h.headers,t)})),e.timeout&&(h.customRequestInitializer=function(t){t.timeout=e.timeout}),d.then(function(){return a.always(i.xhr(h),function(e){t.data&&(t.data.status=e.status),t.stop()})})},e}()
t.BaseRequestService=h}),define(e[27],t([1,0,4]),function(e,t,n){"use strict"
t.IWorkspaceContextService=n.createDecorator("contextService")}),define(e[98],t([1,0,34,24,63,47,49,8,81,16,13,20,11,41,43,27,44,19,21,60,39,25,105,88,31,59,53,85,23,35]),function(e,t){}),define(e[92],t([1,0,20,13,27]),function(e,t,n,r,i){"use strict"
var o=function(){function e(e,t,n){void 0===n&&(n={}),this.serviceId=i.IWorkspaceContextService,this.workspace=e,this.configuration=t,this.options=n}return e.prototype.getWorkspace=function(){return this.workspace},e.prototype.getConfiguration=function(){return this.configuration},e.prototype.getOptions=function(){return this.options},e.prototype.isInsideWorkspace=function(e){return!(!e||!this.workspace)&&r.isEqualOrParent(e.fsPath,this.workspace.resource.fsPath)},e.prototype.toWorkspaceRelativePath=function(e){return this.isInsideWorkspace(e)?r.normalize(r.relative(this.workspace.resource.fsPath,e.fsPath)):null},e.prototype.toResource=function(e){return"string"==typeof e&&this.workspace?n.default.file(r.join(this.workspace.resource.fsPath,e)):null},e}()
t.BaseWorkspaceContextService=o}),define(e[111],t([1,0,32,5,90,52,104,38,54,93,107,43,44,92,27,103,23,87,37,96,35,98]),function(e,t,r,i,o,s,a,u,c,l,h,d,f,p,g,m,v,_,y,b,k){"use strict"
var C=function(e){function t(){e.call(this,!0)}return n(t,e),t.prototype._showMessage=function(e,t){switch(e){case r.default.Error:console.error(t)
break
case r.default.Warning:console.warn(t)
break
case r.default.Info:console.info(t)
break
default:console.log(t)}},t.prototype._createFailedExtension=function(){throw new Error("unexpected")},t.prototype._actualActivateExtension=function(e){throw new Error("unexpected")},t}(a.AbstractExtensionService),E=function(){function e(){}return e.prototype.initialize=function(e,t,n,r,i){var a=new c.ServiceCollection,E=new l.InstantiationService(a),S=new C
a.set(u.IExtensionService,S)
var T=new p.BaseWorkspaceContextService(i.contextService.workspace,i.contextService.configuration,i.contextService.options)
a.set(g.IWorkspaceContextService,T)
var x=new _.ResourceService
a.set(y.IResourceService,x)
var I=new h.BaseRequestService(T,f.NullTelemetryService)
a.set(d.IRequestService,I),a.set(s.IEventService,new o.EventService)
var L=new m.ModeServiceImpl(E,S)
a.set(v.IModeService,L),this.compatWorkerService=new b.CompatWorkerServiceWorker(x,L,i.modesRegistryData),a.set(k.ICompatWorkerService,this.compatWorkerService),t(void 0)},e.prototype.request=function(e,t,n,r,o){try{i.TPromise.as(this.compatWorkerService.handleMainRequest(o.target,o.methodName,o.args)).then(t,n)}catch(e){n(e)}},e}()
t.EditorWorkerServer=E,t.value=new E})}).call(this)
