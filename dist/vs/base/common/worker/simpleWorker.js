(function(){var e=["exports","require","vs/base/common/winjs.base","vs/base/common/platform","vs/base/common/strings","vs/base/common/errors","vs/base/common/types","vs/editor/common/core/range","vs/base/common/map","vs/editor/common/core/position","vs/base/common/lifecycle","vs/nls","vs/nls!vs/base/common/worker/simpleWorker","vs/base/common/uri","vs/base/common/event","vs/base/common/cancellation","vs/editor/common/modes/supports/inplaceReplaceSupport","vs/editor/common/model/wordHelper","vs/editor/common/modes/linkComputer","vs/base/common/diff/diffChange","vs/editor/common/viewModel/prefixSumComputer","vs/editor/common/model/mirrorModel2","vs/nls!vs/base/common/errors","vs/base/common/objects","vs/base/common/diff/diff","vs/base/common/filters","vs/base/common/callbackList","vs/base/common/arrays","vs/editor/common/core/selection","vs/editor/common/diff/diffComputer","vs/editor/common/standalone/standaloneBase","vs/base/common/async","vs/base/common/severity","vs/nls!vs/base/common/keyCodes","vs/base/common/keyCodes","vs/nls!vs/base/common/severity","vs/base/common/worker/simpleWorker","vs/base/common/winjs.base.raw","vs/editor/common/services/editorSimpleWorker"],t=function(t){for(var n=[],r=0,i=t.length;i>r;r++)n[r]=e[t[r]]
return n}
define(e[27],t([1,0]),function(e,t){"use strict"
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
return e.forEach(function(e){return n[t(e)]=e}),n}}),define(e[19],t([1,0]),function(e,t){"use strict"
t.DifferenceType={Add:0,Remove:1,Change:2}
var n=function(){function e(e,t,n,r){this.originalStart=e,this.originalLength=t,this.modifiedStart=n,this.modifiedLength=r}return e.prototype.getChangeType=function(){return 0===this.originalLength?t.DifferenceType.Add:0===this.modifiedLength?t.DifferenceType.Remove:t.DifferenceType.Change},e.prototype.getOriginalEnd=function(){return this.originalStart+this.originalLength},e.prototype.getModifiedEnd=function(){return this.modifiedStart+this.modifiedLength},e}()
t.DiffChange=n}),define(e[24],t([1,0,19]),function(e,t,n){"use strict"
var r=function(){function e(){}return e.Assert=function(e,t){if(!e)throw new Error(t)},e}()
t.Debug=r
var i=function(){function e(){}return e.Copy=function(e,t,n,r,i){for(var o=0;i>o;o++)n[r+o]=e[t+o]},e}()
t.MyArray=i
var o=1447,s=function(){function e(){this.m_changes=[],this.m_originalStart=Number.MAX_VALUE,this.m_modifiedStart=Number.MAX_VALUE,this.m_originalCount=0,this.m_modifiedCount=0}return e.prototype.MarkNextChange=function(){(this.m_originalCount>0||this.m_modifiedCount>0)&&this.m_changes.push(new n.DiffChange(this.m_originalStart,this.m_originalCount,this.m_modifiedStart,this.m_modifiedCount)),this.m_originalCount=0,this.m_modifiedCount=0,this.m_originalStart=Number.MAX_VALUE,this.m_modifiedStart=Number.MAX_VALUE},e.prototype.AddOriginalElement=function(e,t){this.m_originalStart=Math.min(this.m_originalStart,e),this.m_modifiedStart=Math.min(this.m_modifiedStart,t),this.m_originalCount++},e.prototype.AddModifiedElement=function(e,t){this.m_originalStart=Math.min(this.m_originalStart,e),this.m_modifiedStart=Math.min(this.m_modifiedStart,t),this.m_modifiedCount++},e.prototype.getChanges=function(){return(this.m_originalCount>0||this.m_modifiedCount>0)&&this.MarkNextChange(),this.m_changes},e.prototype.getReverseChanges=function(){return(this.m_originalCount>0||this.m_modifiedCount>0)&&this.MarkNextChange(),this.m_changes.reverse(),this.m_changes},e}(),a=function(){function e(e,t,n){void 0===n&&(n=null),this.OriginalSequence=e,this.ModifiedSequence=t,this.ContinueProcessingPredicate=n,this.m_originalIds=[],this.m_modifiedIds=[],this.m_forwardHistory=[],this.m_reverseHistory=[],this.ComputeUniqueIdentifiers()}return e.prototype.ComputeUniqueIdentifiers=function(){var e=this.OriginalSequence.getLength(),t=this.ModifiedSequence.getLength()
this.m_originalIds=new Array(e),this.m_modifiedIds=new Array(t)
var n,r={},i=1
for(n=0;e>n;n++){var o=this.OriginalSequence.getElementHash(n)
r.hasOwnProperty(o)?this.m_originalIds[n]=r[o]:(this.m_originalIds[n]=i++,r[o]=this.m_originalIds[n])}for(n=0;t>n;n++){var s=this.ModifiedSequence.getElementHash(n)
r.hasOwnProperty(s)?this.m_modifiedIds[n]=r[s]:(this.m_modifiedIds[n]=i++,r[s]=this.m_modifiedIds[n])}},e.prototype.ElementsAreEqual=function(e,t){return this.m_originalIds[e]===this.m_modifiedIds[t]},e.prototype.ComputeDiff=function(){return this._ComputeDiff(0,this.OriginalSequence.getLength()-1,0,this.ModifiedSequence.getLength()-1)},e.prototype._ComputeDiff=function(e,t,n,r){return this.ComputeDiffRecursive(e,t,n,r,[!1])},e.prototype.ComputeDiffRecursive=function(e,t,i,o,s){for(s[0]=!1;t>=e&&o>=i&&this.ElementsAreEqual(e,i);)e++,i++
for(;t>=e&&o>=i&&this.ElementsAreEqual(t,o);)t--,o--
if(e>t||i>o){var a=void 0
return o>=i?(r.Assert(e===t+1,"originalStart should only be one more than originalEnd"),a=[new n.DiffChange(e,0,i,o-i+1)]):t>=e?(r.Assert(i===o+1,"modifiedStart should only be one more than modifiedEnd"),a=[new n.DiffChange(e,t-e+1,i,0)]):(r.Assert(e===t+1,"originalStart should only be one more than originalEnd"),r.Assert(i===o+1,"modifiedStart should only be one more than modifiedEnd"),a=[]),a}var u=[0],l=[0],c=this.ComputeRecursionPoint(e,t,i,o,u,l,s),f=u[0],h=l[0]
if(null!==c)return c
if(!s[0]){var p,m=this.ComputeDiffRecursive(e,f,i,h,s)
return p=s[0]?[new n.DiffChange(f+1,t-(f+1)+1,h+1,o-(h+1)+1)]:this.ComputeDiffRecursive(f+1,t,h+1,o,s),this.ConcatenateChanges(m,p)}return[new n.DiffChange(e,t-e+1,i,o-i+1)]},e.prototype.WALKTRACE=function(e,t,r,i,o,a,u,l,c,f,h,p,m,d,g,_,v,y){var b,C,S=null,E=new s,L=t,A=r,N=m[0]-_[0]-i,w=Number.MIN_VALUE,P=this.m_forwardHistory.length-1
do{(b=N+e)===L||A>b&&c[b-1]<c[b+1]?(d=(h=c[b+1])-N-i,w>h&&E.MarkNextChange(),w=h,E.AddModifiedElement(h+1,d),N=b+1-e):(d=(h=c[b-1]+1)-N-i,w>h&&E.MarkNextChange(),w=h-1,E.AddOriginalElement(h,d+1),N=b-1-e),P>=0&&(e=(c=this.m_forwardHistory[P])[0],L=1,A=c.length-1)}while(--P>=-1)
if(C=E.getReverseChanges(),y[0]){var M=m[0]+1,T=_[0]+1
if(null!==C&&C.length>0){var x=C[C.length-1]
M=Math.max(M,x.getOriginalEnd()),T=Math.max(T,x.getModifiedEnd())}S=[new n.DiffChange(M,p-M+1,T,g-T+1)]}else{E=new s,L=a,A=u,N=m[0]-_[0]-l,w=Number.MAX_VALUE,P=v?this.m_reverseHistory.length-1:this.m_reverseHistory.length-2
do{(b=N+o)===L||A>b&&f[b-1]>=f[b+1]?(d=(h=f[b+1]-1)-N-l,h>w&&E.MarkNextChange(),w=h+1,E.AddOriginalElement(h+1,d+1),N=b+1-o):(d=(h=f[b-1])-N-l,h>w&&E.MarkNextChange(),w=h,E.AddModifiedElement(h+1,d+1),N=b-1-o),P>=0&&(o=(f=this.m_reverseHistory[P])[0],L=1,A=f.length-1)}while(--P>=-1)
S=E.getChanges()}return this.ConcatenateChanges(C,S)},e.prototype.ComputeRecursionPoint=function(e,t,r,s,a,u,l){var c,f,h,p=0,m=0,d=0,g=0
e--,r--,a[0]=0,u[0]=0,this.m_forwardHistory=[],this.m_reverseHistory=[]
var _,v,y=t-e+(s-r),b=y+1,C=new Array(b),S=new Array(b),E=s-r,L=t-e,A=e-r,N=t-s,w=(L-E)%2==0
for(C[E]=e,S[L]=t,l[0]=!1,h=1;y/2+1>=h;h++){var P=0,M=0
for(p=this.ClipDiagonalBound(E-h,h,E,b),m=this.ClipDiagonalBound(E+h,h,E,b),_=p;m>=_;_+=2){for(f=(c=_===p||m>_&&C[_-1]<C[_+1]?C[_+1]:C[_-1]+1)-(_-E)-A,v=c;t>c&&s>f&&this.ElementsAreEqual(c+1,f+1);)c++,f++
if(C[_]=c,c+f>P+M&&(P=c,M=f),!w&&Math.abs(_-L)<=h-1&&c>=S[_])return a[0]=c,u[0]=f,v<=S[_]&&o+1>=h?this.WALKTRACE(E,p,m,A,L,d,g,N,C,S,c,t,a,f,s,u,w,l):null}var T=(P-e+(M-r)-h)/2
if(null!==this.ContinueProcessingPredicate&&!this.ContinueProcessingPredicate(P,this.OriginalSequence,T))return l[0]=!0,a[0]=P,u[0]=M,T>0&&o+1>=h?this.WALKTRACE(E,p,m,A,L,d,g,N,C,S,c,t,a,f,s,u,w,l):(e++,r++,[new n.DiffChange(e,t-e+1,r,s-r+1)])
for(d=this.ClipDiagonalBound(L-h,h,L,b),g=this.ClipDiagonalBound(L+h,h,L,b),_=d;g>=_;_+=2){for(f=(c=_===d||g>_&&S[_-1]>=S[_+1]?S[_+1]-1:S[_-1])-(_-L)-N,v=c;c>e&&f>r&&this.ElementsAreEqual(c,f);)c--,f--
if(S[_]=c,w&&Math.abs(_-E)<=h&&c<=C[_])return a[0]=c,u[0]=f,v>=C[_]&&o+1>=h?this.WALKTRACE(E,p,m,A,L,d,g,N,C,S,c,t,a,f,s,u,w,l):null}if(o>=h){var x=new Array(m-p+2)
x[0]=E-p+1,i.Copy(C,p,x,1,m-p+1),this.m_forwardHistory.push(x),(x=new Array(g-d+2))[0]=L-d+1,i.Copy(S,d,x,1,g-d+1),this.m_reverseHistory.push(x)}}return this.WALKTRACE(E,p,m,A,L,d,g,N,C,S,c,t,a,f,s,u,w,l)},e.prototype.ConcatenateChanges=function(e,t){var n=[],r=null
return 0===e.length||0===t.length?t.length>0?t:e:this.ChangesOverlap(e[e.length-1],t[0],n)?(r=new Array(e.length+t.length-1),i.Copy(e,0,r,0,e.length-1),r[e.length-1]=n[0],i.Copy(t,1,r,e.length,t.length-1),r):(r=new Array(e.length+t.length),i.Copy(e,0,r,0,e.length),i.Copy(t,0,r,e.length,t.length),r)},e.prototype.ChangesOverlap=function(e,t,i){if(r.Assert(e.originalStart<=t.originalStart,"Left change is not less than or equal to right change"),r.Assert(e.modifiedStart<=t.modifiedStart,"Left change is not less than or equal to right change"),e.originalStart+e.originalLength>=t.originalStart||e.modifiedStart+e.modifiedLength>=t.modifiedStart){var o=e.originalStart,s=e.originalLength,a=e.modifiedStart,u=e.modifiedLength
return e.originalStart+e.originalLength>=t.originalStart&&(s=t.originalStart+t.originalLength-e.originalStart),e.modifiedStart+e.modifiedLength>=t.modifiedStart&&(u=t.modifiedStart+t.modifiedLength-e.modifiedStart),i[0]=new n.DiffChange(o,s,a,u),!0}return i[0]=null,!1},e.prototype.ClipDiagonalBound=function(e,t,n,r){if(e>=0&&r>e)return e
var i=t%2==0
return 0>e?i===(n%2==0)?0:1:i===((r-n-1)%2==0)?r-1:r-2},e}()
t.LcsDiff=a})
var n=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}
define(e[8],t([1,0]),function(e,t){"use strict"
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
t.LRUCache=o}),define(e[3],t([1,0]),function(e,t){"use strict"
var n=!1,r=!1,i=!1,o=!1,s=!1,a=!1,u=!1,l=void 0,c=void 0
if(t.LANGUAGE_DEFAULT="en","object"==typeof process){n="win32"===process.platform,r="darwin"===process.platform,i="linux"===process.platform,o=!n&&0===process.getuid()
var f=process.env.VSCODE_NLS_CONFIG
if(f)try{var h=JSON.parse(f),p=h.availableLanguages["*"]
l=h.locale,c=p||t.LANGUAGE_DEFAULT}catch(e){}s=!0}else if("object"==typeof navigator){var m=navigator.userAgent
n=m.indexOf("Windows")>=0,r=m.indexOf("Macintosh")>=0,i=m.indexOf("Linux")>=0,a=!0,c=l=navigator.language,u=!!self.QUnit}!function(e){e[e.Web=0]="Web",e[e.Mac=1]="Mac",e[e.Linux=2]="Linux",e[e.Windows=3]="Windows"}(t.Platform||(t.Platform={}))
var d=t.Platform
t._platform=d.Web,s&&(r?t._platform=d.Mac:n?t._platform=d.Windows:i&&(t._platform=d.Linux)),t.isWindows=n,t.isMacintosh=r,t.isLinux=i,t.isRootUser=o,t.isNative=s,t.isWeb=a,t.isQunit=u,t.platform=t._platform,t.language=c,t.locale=l
var g="object"==typeof self?self:global
t.globals=g,t.hasWebWorkerSupport=function(){return void 0!==g.Worker},t.setTimeout=g.setTimeout.bind(g),t.clearTimeout=g.clearTimeout.bind(g),t.setInterval=g.setInterval.bind(g),t.clearInterval=g.clearInterval.bind(g)}),define(e[4],t([1,0,8]),function(e,t,n){"use strict"
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
var l=/[^\u0000-\u0080]/,c=new n.LinkedMap(1e4)
t.normalizeNFC=function(e){if(!t.canNormalize||!e)return e
var n,r=c.get(e)
return r||(n=l.test(e)?e.normalize("NFC"):e,c.set(e,n),n)},t.firstNonWhitespaceIndex=function(e){for(var t=0,n=e.length;n>t;t++)if(" "!==e.charAt(t)&&"\t"!==e.charAt(t))return t
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
var f=/\x1B\x5B[12]?K/g,h=/\xA/g,p=/\x1b\[\d+m/g,m=/\x1b\[0?m/g
t.removeAnsiEscapeCodes=function(e){return e&&(e=(e=(e=(e=e.replace(f,"")).replace(h,"\n")).replace(p,"")).replace(m,"")),e}
var d=65279
t.UTF8_BOM_CHARACTER=String.fromCharCode(d),t.startsWithUTF8BOM=function(e){return e&&e.length>0&&e.charCodeAt(0)===d},t.appendWithLimit=function(e,t,n){var r=e.length+t.length
return r>n&&(e="..."+e.substr(r-n)),e+(t.length>n?t.substr(t.length-n):t)},t.safeBtoa=function(e){return btoa(encodeURIComponent(e))},t.repeat=function(e,t){for(var n="",r=0;t>r;r++)n+=e
return n}}),define(e[25],t([1,0,4,8]),function(e,t,n,r){"use strict"
function i(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return function(t,n){for(var r=0,i=e.length;i>r;r++){var o=e[r](t,n)
if(o)return o}return null}}function o(e,t,n){if(!n||0===n.length||n.length<t.length)return null
e&&(t=t.toLowerCase(),n=n.toLowerCase())
for(var r=0;r<t.length;r++)if(t[r]!==n[r])return null
return t.length>0?[{start:0,end:t.length}]:[]}function s(e,t){var n=t.toLowerCase().indexOf(e.toLowerCase())
return-1===n?null:[{start:n,end:n+e.length}]}function a(e,t){return function e(t,n,r,i){if(r===t.length)return[]
if(i===n.length)return null
if(t[r]===n[i]){var o=null
if(o=e(t,n,r+1,i+1))return p({start:i,end:i+1},o)}return e(t,n,r,i+1)}(e.toLowerCase(),t.toLowerCase(),0,0)}function u(e){return e>=97&&122>=e}function l(e){return e>=65&&90>=e}function c(e){return e>=48&&57>=e}function f(e){return[32,9,10,13].indexOf(e)>-1}function h(e){return u(e)||l(e)||c(e)}function p(e,t){return 0===t.length?t=[e]:e.end===t[0].start?t[0].start=e.start:t.unshift(e),t}function m(e,t){for(var n=t;n<e.length;n++){var r=e.charCodeAt(n)
if(l(r)||c(r)||n>0&&!h(e.charCodeAt(n-1)))return n}return e.length}function d(e,t,n,r){if(n===e.length)return[]
if(r===t.length)return null
if(e[n]!==t[r].toLowerCase())return null
var i=null,o=r+1
for(i=d(e,t,n+1,r+1);!i&&(o=m(t,o))<t.length;)i=d(e,t,n+1,o),o++
return null===i?null:p({start:r,end:r+1},i)}function g(e,t){if(!t||0===t.length)return null
if(!function(e){for(var t=0,n=0,r=0,i=0,o=0;o<e.length;o++)l(r=e.charCodeAt(o))&&t++,u(r)&&n++,f(r)&&i++
return 0!==t&&0!==n||0!==i?5>=t:e.length<=30}(e))return null
if(!function(e){if(e.length>60)return!1
for(var t=0,n=0,r=0,i=0,o=0,s=0;s<e.length;s++)l(o=e.charCodeAt(s))&&t++,u(o)&&n++,h(o)&&r++,c(o)&&i++
var a=t/e.length,f=n/e.length,p=r/e.length,m=i/e.length
return f>.2&&.8>a&&p>.6&&.2>m}(t))return null
for(var n=null,r=0;r<t.length&&null===(n=d(e.toLowerCase(),t,0,r));)r=m(t,r+1)
return n}function _(e,t,n,r){if(n===e.length)return[]
if(r===t.length)return null
if(e[n]!==t[r].toLowerCase())return null
var i=null,o=r+1
for(i=_(e,t,n+1,r+1);!i&&(o=v(t,o))<t.length;)i=_(e,t,n+1,o),o++
return null===i?null:p({start:r,end:r+1},i)}function v(e,t){for(var n=t;n<e.length;n++){if(f(e.charCodeAt(n))||n>0&&f(e.charCodeAt(n-1)))return n}return e.length}t.or=i,t.and=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return function(t,n){for(var r=[],i=0,o=e.length;o>i;i++){var s=e[i](t,n)
if(!s)return null
r=r.concat(s)}return r}},t.matchesStrictPrefix=function(e,t){return o(!1,e,t)},t.matchesPrefix=function(e,t){return o(!0,e,t)},t.matchesContiguousSubString=s,t.matchesSubString=a,t.matchesCamelCase=g,t.matchesWords=function(e,t){if(!t||0===t.length)return null
for(var n=null,r=0;r<t.length&&null===(n=_(e.toLowerCase(),t,0,r));)r=v(t,r+1)
return n},function(e){e[e.Contiguous=0]="Contiguous",e[e.Separate=1]="Separate"}(t.SubstringMatching||(t.SubstringMatching={})),t.SubstringMatching,t.fuzzyContiguousFilter=i(t.matchesPrefix,g,s)
var y=i(t.matchesPrefix,g,a),b=new r.LinkedMap(1e4)
t.matchesFuzzy=function(e,r,i){if(void 0===i&&(i=!1),"string"!=typeof e||"string"!=typeof r)return null
var o=b.get(e)
o||(o=new RegExp(n.convertSimple2RegExpPattern(e),"i"),b.set(e,o))
var s=o.exec(r)
return s?[{start:s.index,end:s.index+s[0].length}]:i?y(e,r):t.fuzzyContiguousFilter(e,r)}}),define(e[6],t([1,0]),function(e,t){"use strict"
function n(e){return Array.isArray?Array.isArray(e):!(!e||typeof e.length!==u.number||e.constructor!==Array)}function r(e){return typeof e===u.string||e instanceof String}function i(e){return!(typeof e!==u.object||null===e||Array.isArray(e)||e instanceof RegExp||e instanceof Date)}function o(e){return typeof e===u.undefined}function s(e){return typeof e===u.function}function a(e,t){if(r(t)){if(typeof e!==t)throw new Error("argument does not match constraint: typeof "+t)}else if(s(t)){if(e instanceof t)return
if(e&&e.constructor===t)return
if(1===t.length&&!0===t.call(void 0,e))return
throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")}}var u={number:"number",string:"string",undefined:"undefined",object:"object",function:"function"}
t.isArray=n,t.isString=r,t.isStringArray=function(e){return n(e)&&e.every(function(e){return r(e)})},t.isObject=i,t.isNumber=function(e){return(typeof e===u.number||e instanceof Number)&&!isNaN(e)},t.isBoolean=function(e){return!0===e||!1===e},t.isUndefined=o,t.isUndefinedOrNull=function(e){return o(e)||null===e}
var l=Object.prototype.hasOwnProperty
t.isEmptyObject=function(e){if(!i(e))return!1
for(var t in e)if(l.call(e,t))return!1
return!0},t.isFunction=s,t.areFunctions=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return e&&e.length>0&&e.every(s)},t.validateConstraints=function(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)a(e[r],t[r])},t.validateConstraint=a,t.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=Object.create(e.prototype)
return e.apply(r,t),r}}),define(e[10],t([1,0,6]),function(e,t,r){"use strict"
function i(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
var n=e[0]
return r.isArray(n)&&(e=n),e.forEach(function(e){return e&&e.dispose()}),[]}function o(e){return{dispose:function(){return i(e)}}}t.empty=Object.freeze({dispose:function(){}}),t.dispose=i,t.combinedDisposable=o,t.toDisposable=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
return o(e.map(function(e){return{dispose:e}}))}
var s=function(){function e(){this._toDispose=[]}return e.prototype.dispose=function(){this._toDispose=i(this._toDispose)},e.prototype._register=function(e){return this._toDispose.push(e),e},e}()
t.Disposable=s
var a=function(e){function t(){e.apply(this,arguments)}return n(t,e),t.prototype.add=function(e){if(!Array.isArray(e))return this._register(e)
for(var t=0,n=e;t<n.length;t++){var r=n[t]
return this._register(r)}},t}(s)
t.Disposables=a}),define(e[23],t([1,0,6]),function(e,t,n){"use strict"
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
var l={}
for(var c in t)o.call(t,c)&&(l[c]=e(t[c],r,i))
return i.pop(),l}return t}(e,t,[])},t.mixin=function e(t,r,i){return void 0===i&&(i=!0),n.isObject(t)?(n.isObject(r)&&Object.keys(r).forEach(function(o){o in t?i&&(n.isObject(t[o])&&n.isObject(r[o])?e(t[o],r[o],i):t[o]=r[o]):t[o]=r[o]}),t):r},t.assign=r,t.toObject=function(e,t,n){return void 0===n&&(n=function(e){return e}),e.reduce(function(e,i){return r(e,((o={})[t(i)]=n(i),o))
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
return void 0===r?n:r}}),define(e[13],t([1,0,3]),function(e,t,n){"use strict"
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
if(!e.authority&&0===e.path.indexOf("//"))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')},e.prototype.toString=function(t){return void 0===t&&(t=!1),t?e._asFormatted(this,!0):(this._formatted||(this._formatted=e._asFormatted(this,!1)),this._formatted)},e._asFormatted=function(t,n){var s=n?o:i,a=[],u=t.scheme,l=t.authority,c=t.path,f=t.query,h=t.fragment;(u&&a.push(u,":"),(l||"file"===u)&&a.push("//"),l)&&(-1===(d=(l=l.toLowerCase()).indexOf(":"))?a.push(s(l)):a.push(s(l.substr(0,d)),l.substr(d)))
if(c){var p=e._upperCaseDrive.exec(c)
p&&(c=p[1]+p[2].toLowerCase()+c.substr(p[1].length+p[2].length))
for(var m=0;;){var d
if(-1===(d=c.indexOf(e._slash,m))){a.push(s(c.substring(m)).replace(/[#?]/,r))
break}a.push(s(c.substring(m,d)).replace(/[#?]/,r),e._slash),m=d+1}}return f&&a.push("?",s(f)),h&&a.push("#",s(h)),a.join(e._empty)},e.prototype.toJSON=function(){return{scheme:this.scheme,authority:this.authority,path:this.path,fsPath:this.fsPath,query:this.query,fragment:this.fragment,external:this.toString(),$mid:1}},e.revive=function(t){var n=new e
return n._scheme=t.scheme,n._authority=t.authority,n._path=t.path,n._query=t.query,n._fragment=t.fragment,n._fsPath=t.fsPath,n._formatted=t.external,e._validate(n),n},e._empty="",e._slash="/",e._regexp=/^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,e._driveLetterPath=/^\/[a-zA-z]:/,e._upperCaseDrive=/^(\/)?([A-Z]:)/,e}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=s}),function(){var e={"WinJS/Core/_WinJS":{}},t=function(t,n,r){var i={},o=!1,s=n.map(function(t){return"exports"===t?(o=!0,i):e[t]}),a=r.apply({},s)
e[t]=o?i:a}
t("WinJS/Core/_Global",[],function(){"use strict"
return"undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:{}}),t("WinJS/Core/_BaseCoreUtils",["WinJS/Core/_Global"],function(e){"use strict"
return{hasWinRT:!!e.Windows,markSupportedForProcessing:function(e){return e.supportedForProcessing=!0,e},_setImmediate:e.setImmediate?e.setImmediate.bind(e):function(t){e.setTimeout(t,0)}}}),t("WinJS/Core/_WriteProfilerMark",["WinJS/Core/_Global"],function(e){"use strict"
return e.msWriteProfilerMark||function(){}}),t("WinJS/Core/_Base",["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"],function(e,t,n,r){"use strict"
function i(e,t,n){var r,i,o,s=Object.keys(t),a=Array.isArray(e)
for(i=0,o=s.length;o>i;i++){var u=s[i],l=95!==u.charCodeAt(0),c=t[u]
!c||"object"!=typeof c||void 0===c.value&&"function"!=typeof c.get&&"function"!=typeof c.set?l?a?e.forEach(function(e){e[u]=c}):e[u]=c:(r=r||{})[u]={value:c,enumerable:l,configurable:!0,writable:!0}:(void 0===c.enumerable&&(c.enumerable=l),n&&c.setName&&"function"==typeof c.setName&&c.setName(n+"."+u),(r=r||{})[u]=c)}r&&(a?e.forEach(function(e){Object.defineProperties(e,r)}):Object.defineProperties(e,r))}return function(){function n(n,r){var i=n||{}
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
n=t&&"object"==typeof t&&"function"==typeof t.then?O:K,e._value=t,e._setState(n)}function u(e,t,n,r,i,o){return{exception:e,error:t,promise:n,handler:o,id:r,parent:i}}function l(e,t,n,r){var i=n._isException
return u(i?t:null,i?null:t,e,n._errorId,n,r)}function c(e,t,n){var r=n._isException,i=n._errorId
return b(e,i,r),u(r?t:null,r?null:t,e,i,n)}function f(e,t){var n=++F
return b(e,n),u(null,t,e,n)}function h(e,t){var n=++F
return b(e,n,!0),u(t,null,e,n)}function p(e,t,n,r){y(e,{c:t,e:n,p:r,asyncOpID:o._traceAsyncOperationStarting("WinJS.Promise.done")})}function m(e,t,n,r){e._value=t,_(e,t,n,r),e._setState(R)}function d(t,n){var r,i,s=t._value,a=t._listeners
if(a)for(t._listeners=null,r=0,i=Array.isArray(a)?a.length:1;i>r;r++){var u=1===i?a:a[r],l=u.c,c=u.promise
if(o._traceAsyncOperationCompleted(u.asyncOpID,e.Debug&&e.Debug.MS_ASYNC_OP_STATUS_SUCCESS),c){o._traceAsyncCallbackStarting(u.asyncOpID)
try{c._setCompleteValue(l?l(s):s)}catch(e){c._setExceptionValue(e)}finally{o._traceAsyncCallbackCompleted()}c._state!==O&&c._listeners&&n.push(c)}else H.prototype.done.call(t,l)}}function g(t,n){var r,i,s=t._value,a=t._listeners
if(a)for(t._listeners=null,r=0,i=Array.isArray(a)?a.length:1;i>r;r++){var u=1===i?a:a[r],c=u.e,f=u.promise,h=e.Debug&&(s&&s.name===w?e.Debug.MS_ASYNC_OP_STATUS_CANCELED:e.Debug.MS_ASYNC_OP_STATUS_ERROR)
if(o._traceAsyncOperationCompleted(u.asyncOpID,h),f){var p=!1
try{c?(o._traceAsyncCallbackStarting(u.asyncOpID),p=!0,c.handlesOnError||_(f,s,l,t,c),f._setCompleteValue(c(s))):f._setChainedErrorValue(s,t)}catch(e){f._setExceptionValue(e)}finally{p&&o._traceAsyncCallbackCompleted()}f._state!==O&&f._listeners&&n.push(f)}else z.prototype.done.call(t,null,c)}}function _(e,t,n,r,i){if(A._listeners[N]){if(t instanceof Error&&t.message===w)return
A.dispatchEvent(N,n(e,t,r,i))}}function v(e,t){var n,r,i=e._listeners
if(i)for(n=0,r=Array.isArray(i)?i.length:1;r>n;n++){var o=1===r?i:i[n],s=o.p
if(s)try{s(t)}catch(e){}o.c||o.e||!o.promise||o.promise._progress(t)}}function y(e,t){var n=e._listeners
n?(n=Array.isArray(n)?n:[n]).push(t):n=t,e._listeners=n}function b(e,t,n){e._isException=n||!1,e._errorId=t}function C(e,t,n,r){e._value=t,_(e,t,n,r),e._setState(W)}function S(e,t){var n
n=t&&"object"==typeof t&&"function"==typeof t.then?O:I,e._value=t,e._setState(n)}function E(e,t,n,r){var i=new j(e)
return y(e,{promise:i,c:t,e:n,p:r,asyncOpID:o._traceAsyncOperationStarting("WinJS.Promise.then")}),i}function L(n){var r
return new B(function(i){n?r=e.setTimeout(i,n):t._setImmediate(i)},function(){r&&e.clearTimeout(r)})}e.Debug&&(e.Debug.setNonUserCodeExceptions=!0)
var A=new(n.Class.mix(n.Class.define(null,{},{supportedForProcessing:!1}),i.eventMixin))
A._listeners={}
var N="error",w="Canceled",P=!1,M={promise:1,thenPromise:2,errorPromise:4,exceptionPromise:8,completePromise:16}
M.all=M.promise|M.thenPromise|M.errorPromise|M.exceptionPromise|M.completePromise
var T,x,O,k,U,D,K,I,R,W,F=1
T={name:"created",enter:function(e){e._setState(x)},cancel:s,done:s,then:s,_completed:s,_error:s,_notify:s,_progress:s,_setCompleteValue:s,_setErrorValue:s},x={name:"working",enter:s,cancel:function(e){e._setState(U)},done:p,then:E,_completed:a,_error:m,_notify:s,_progress:v,_setCompleteValue:S,_setErrorValue:C},O={name:"waiting",enter:function(e){var t=e._value
if(t instanceof j&&t._state!==W&&t._state!==I)y(t,{promise:e})
else{var n=function(r){t._errorId?e._chainedError(r,t):(_(e,r,l,t,n),e._error(r))}
n.handlesOnError=!0,t.then(e._completed.bind(e),n,e._progress.bind(e))}},cancel:function(e){e._setState(k)},done:p,then:E,_completed:a,_error:m,_notify:s,_progress:v,_setCompleteValue:S,_setErrorValue:C},k={name:"waiting_canceled",enter:function(e){e._setState(D)
var t=e._value
t.cancel&&t.cancel()},cancel:s,done:p,then:E,_completed:a,_error:m,_notify:s,_progress:v,_setCompleteValue:S,_setErrorValue:C},U={name:"canceled",enter:function(e){e._setState(D),e._cancelAction()},cancel:s,done:p,then:E,_completed:a,_error:m,_notify:s,_progress:v,_setCompleteValue:S,_setErrorValue:C},D={name:"canceling",enter:function(e){var t=new Error(w)
t.name=t.message,e._value=t,e._setState(R)},cancel:s,done:s,then:s,_completed:s,_error:s,_notify:s,_progress:s,_setCompleteValue:s,_setErrorValue:s},K={name:"complete_notify",enter:function(e){if(e.done=H.prototype.done,e.then=H.prototype.then,e._listeners)for(var t,n=[e];n.length;)(t=n.shift())._state._notify(t,n)
e._setState(I)},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:d,_progress:s,_setCompleteValue:s,_setErrorValue:s},I={name:"success",enter:function(e){e.done=H.prototype.done,e.then=H.prototype.then,e._cleanupAction()},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:d,_progress:s,_setCompleteValue:s,_setErrorValue:s},R={name:"error_notify",enter:function(e){if(e.done=z.prototype.done,e.then=z.prototype.then,e._listeners)for(var t,n=[e];n.length;)(t=n.shift())._state._notify(t,n)
e._setState(W)},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:g,_progress:s,_setCompleteValue:s,_setErrorValue:s},W={name:"error",enter:function(e){e.done=z.prototype.done,e.then=z.prototype.then,e._cleanupAction()},cancel:s,done:null,then:null,_completed:s,_error:s,_notify:g,_progress:s,_setCompleteValue:s,_setErrorValue:s}
var Y,q=n.Class.define(null,{_listeners:null,_nextState:null,_state:null,_value:null,cancel:function(){this._state.cancel(this),this._run()},done:function(e,t,n){this._state.done(this,e,t,n)},then:function(e,t,n){return this._state.then(this,e,t,n)},_chainedError:function(e,t){var n=this._state._error(this,e,c,t)
return this._run(),n},_completed:function(e){var t=this._state._completed(this,e)
return this._run(),t},_error:function(e){var t=this._state._error(this,e,f)
return this._run(),t},_progress:function(e){this._state._progress(this,e)},_setState:function(e){this._nextState=e},_setCompleteValue:function(e){this._state._setCompleteValue(this,e),this._run()},_setChainedErrorValue:function(e,t){var n=this._state._setErrorValue(this,e,c,t)
return this._run(),n},_setExceptionValue:function(e){var t=this._state._setErrorValue(this,e,h)
return this._run(),t},_run:function(){for(;this._nextState;)this._state=this._nextState,this._nextState=null,this._state.enter(this)}},{supportedForProcessing:!1}),j=n.Class.derive(q,function(e){P&&(!0===P||P&M.thenPromise)&&(this._stack=B._getStack()),this._creator=e,this._setState(T),this._run()},{_creator:null,_cancelAction:function(){this._creator&&this._creator.cancel()},_cleanupAction:function(){this._creator=null}},{supportedForProcessing:!1}),z=n.Class.define(function(e){P&&(!0===P||P&M.errorPromise)&&(this._stack=B._getStack()),this._value=e,_(this,e,f)},{cancel:function(){},done:function(e,t){var n=this._value
if(t)try{t.handlesOnError||_(null,n,l,this,t)
var r=t(n)
return void(r&&"object"==typeof r&&"function"==typeof r.done&&r.done())}catch(e){n=e}n instanceof Error&&n.message===w||B._doneHandler(n)},then:function(e,t){if(!t)return this
var n,r=this._value
try{t.handlesOnError||_(null,r,l,this,t),n=new H(t(r))}catch(e){n=e===r?this:new V(e)}return n}},{supportedForProcessing:!1}),V=n.Class.derive(z,function(e){P&&(!0===P||P&M.exceptionPromise)&&(this._stack=B._getStack()),this._value=e,_(this,e,h)},{},{supportedForProcessing:!1}),H=n.Class.define(function(e){if(P&&(!0===P||P&M.completePromise)&&(this._stack=B._getStack()),e&&"object"==typeof e&&"function"==typeof e.then){var t=new j(null)
return t._setCompleteValue(e),t}this._value=e},{cancel:function(){},done:function(e){if(e)try{var t=e(this._value)
t&&"object"==typeof t&&"function"==typeof t.done&&t.done()}catch(e){B._doneHandler(e)}},then:function(e){try{var t=e?e(this._value):this._value
return t===this._value?this:new H(t)}catch(e){return new V(e)}}},{supportedForProcessing:!1}),B=n.Class.derive(q,function(e,t){P&&(!0===P||P&M.promise)&&(this._stack=B._getStack()),this._oncancel=t,this._setState(T),this._run()
try{e(this._completed.bind(this),this._error.bind(this),this._progress.bind(this))}catch(e){this._setExceptionValue(e)}},{_oncancel:null,_cancelAction:function(){try{if(!this._oncancel)throw new Error("Promise did not implement oncancel")
this._oncancel()}catch(e){e.message,e.stack,A.dispatchEvent("error",e)}},_cleanupAction:function(){this._oncancel=null}},{addEventListener:function(e,t,n){A.addEventListener(e,t,n)},any:function(e){return new B(function(t,n){var r=Object.keys(e)
0===r.length&&t()
var i=0
r.forEach(function(o){B.as(e[o]).then(function(){t({key:o,value:e[o]})},function(s){return s instanceof Error&&s.name===w?void(++i===r.length&&t(B.cancel)):void n({key:o,value:e[o]})})})},function(){Object.keys(e).forEach(function(t){var n=B.as(e[t])
"function"==typeof n.cancel&&n.cancel()})})},as:function(e){return e&&"object"==typeof e&&"function"==typeof e.then?e:new H(e)},cancel:{get:function(){return Y=Y||new z(new r(w))}},dispatchEvent:function(e,t){return A.dispatchEvent(e,t)},is:function(e){return e&&"object"==typeof e&&"function"==typeof e.then},join:function(e){return new B(function(t,n,r){var i=Object.keys(e),o=Array.isArray(e)?[]:{},s=Array.isArray(e)?[]:{},a=0,u=i.length,l=function(e){if(0==--u){var a=Object.keys(o).length
if(0===a)t(s)
else{var l=0
i.forEach(function(e){var t=o[e]
t instanceof Error&&t.name===w&&l++}),l===a?t(B.cancel):n(o)}}else r({Key:e,Done:!0})}
return i.forEach(function(t){var n=e[t]
void 0===n?a++:B.then(n,function(e){s[t]=e,l(t)},function(e){o[t]=e,l(t)})}),0===(u-=a)?void t(s):void 0},function(){Object.keys(e).forEach(function(t){var n=B.as(e[t])
"function"==typeof n.cancel&&n.cancel()})})},removeEventListener:function(e,t,n){A.removeEventListener(e,t,n)},supportedForProcessing:!1,then:function(e,t,n,r){return B.as(e).then(t,n,r)},thenEach:function(e,t,n,r){var i=Array.isArray(e)?[]:{}
return Object.keys(e).forEach(function(o){i[o]=B.as(e[o]).then(t,n,r)}),B.join(i)},timeout:function(e,t){var n=L(e)
return t?function(e,t){var n=function(){e.cancel()}
return e.then(function(){t.cancel()}),t.then(n,n),t}(n,t):n},wrap:function(e){return new H(e)},wrapError:function(e){return new z(e)},_veryExpensiveTagWithStack:{get:function(){return P},set:function(e){P=e}},_veryExpensiveTagWithStack_tag:M,_getStack:function(){if(e.Debug&&e.Debug.debuggerEnabled)try{throw new Error}catch(e){return e.stack}},_cancelBlocker:function(e,t){if(!B.is(e))return B.wrap(e)
var n,r,i=new B(function(e,t){n=e,r=t},function(){n=null,r=null,t&&t()})
return e.then(function(e){n&&n(e)},function(e){r&&r(e)}),i}})
return Object.defineProperties(B,i.createEventProperties(N)),B._doneHandler=function(e){t._setImmediate(function(){throw e})},{PromiseStateMachine:q,Promise:B,state_created:T}}),t("WinJS/Promise",["WinJS/Core/_Base","WinJS/Promise/_StateMachine"],function(e,t){"use strict"
return e.Namespace.define("WinJS",{Promise:t.Promise}),t.Promise})
var n=e["WinJS/Core/_WinJS"]
"undefined"==typeof exports&&"function"==typeof define&&define.amd?define("vs/base/common/winjs.base.raw",n):module.exports=n,"undefined"!=typeof process&&"function"==typeof process.nextTick&&(e["WinJS/Core/_BaseCoreUtils"]._setImmediate=function(e){return process.nextTick(e)})}(),define(e[9],t([1,0]),function(e,t){"use strict"
var n=function(){function e(e,t){this.lineNumber=e,this.column=t}return e.prototype.equals=function(t){return e.equals(this,t)},e.equals=function(e,t){return!e&&!t||!!e&&!!t&&e.lineNumber===t.lineNumber&&e.column===t.column},e.prototype.isBefore=function(t){return e.isBefore(this,t)},e.isBefore=function(e,t){return e.lineNumber<t.lineNumber||!(t.lineNumber<e.lineNumber)&&e.column<t.column},e.prototype.isBeforeOrEqual=function(t){return e.isBeforeOrEqual(this,t)},e.isBeforeOrEqual=function(e,t){return e.lineNumber<t.lineNumber||!(t.lineNumber<e.lineNumber)&&e.column<=t.column},e.prototype.clone=function(){return new e(this.lineNumber,this.column)},e.prototype.toString=function(){return"("+this.lineNumber+","+this.column+")"},e.lift=function(t){return new e(t.lineNumber,t.column)},e.isIPosition=function(e){return e&&"number"==typeof e.lineNumber&&"number"==typeof e.column},e}()
t.Position=n}),define(e[7],t([1,0,9]),function(e,t,n){"use strict"
var r=function(){function e(e,t,n,r){e>n||e===n&&t>r?(this.startLineNumber=n,this.startColumn=r,this.endLineNumber=e,this.endColumn=t):(this.startLineNumber=e,this.startColumn=t,this.endLineNumber=n,this.endColumn=r)}return e.prototype.isEmpty=function(){return e.isEmpty(this)},e.isEmpty=function(e){return e.startLineNumber===e.endLineNumber&&e.startColumn===e.endColumn},e.prototype.containsPosition=function(t){return e.containsPosition(this,t)},e.containsPosition=function(e,t){return!(t.lineNumber<e.startLineNumber||t.lineNumber>e.endLineNumber)&&(!(t.lineNumber===e.startLineNumber&&t.column<e.startColumn)&&!(t.lineNumber===e.endLineNumber&&t.column>e.endColumn))},e.prototype.containsRange=function(t){return e.containsRange(this,t)},e.containsRange=function(e,t){return!(t.startLineNumber<e.startLineNumber||t.endLineNumber<e.startLineNumber)&&(!(t.startLineNumber>e.endLineNumber||t.endLineNumber>e.endLineNumber)&&(!(t.startLineNumber===e.startLineNumber&&t.startColumn<e.startColumn)&&!(t.endLineNumber===e.endLineNumber&&t.endColumn>e.endColumn)))},e.prototype.plusRange=function(t){return e.plusRange(this,t)},e.plusRange=function(t,n){var r,i,o,s
return n.startLineNumber<t.startLineNumber?(r=n.startLineNumber,i=n.startColumn):n.startLineNumber===t.startLineNumber?(r=n.startLineNumber,i=Math.min(n.startColumn,t.startColumn)):(r=t.startLineNumber,i=t.startColumn),n.endLineNumber>t.endLineNumber?(o=n.endLineNumber,s=n.endColumn):n.endLineNumber===t.endLineNumber?(o=n.endLineNumber,s=Math.max(n.endColumn,t.endColumn)):(o=t.endLineNumber,s=t.endColumn),new e(r,i,o,s)},e.prototype.intersectRanges=function(t){return e.intersectRanges(this,t)},e.intersectRanges=function(t,n){var r=t.startLineNumber,i=t.startColumn,o=t.endLineNumber,s=t.endColumn,a=n.startLineNumber,u=n.startColumn,l=n.endLineNumber,c=n.endColumn
return a>r?(r=a,i=u):r===a&&(i=Math.max(i,u)),o>l?(o=l,s=c):o===l&&(s=Math.min(s,c)),r>o?null:r===o&&i>s?null:new e(r,i,o,s)},e.prototype.equalsRange=function(t){return e.equalsRange(this,t)},e.equalsRange=function(e,t){return!!e&&!!t&&e.startLineNumber===t.startLineNumber&&e.startColumn===t.startColumn&&e.endLineNumber===t.endLineNumber&&e.endColumn===t.endColumn},e.prototype.getEndPosition=function(){return new n.Position(this.endLineNumber,this.endColumn)},e.prototype.getStartPosition=function(){return new n.Position(this.startLineNumber,this.startColumn)},e.prototype.cloneRange=function(){return new e(this.startLineNumber,this.startColumn,this.endLineNumber,this.endColumn)},e.prototype.toString=function(){return"["+this.startLineNumber+","+this.startColumn+" -> "+this.endLineNumber+","+this.endColumn+"]"},e.prototype.setEndPosition=function(t,n){return new e(this.startLineNumber,this.startColumn,t,n)},e.prototype.setStartPosition=function(t,n){return new e(t,n,this.endLineNumber,this.endColumn)},e.prototype.collapseToStart=function(){return e.collapseToStart(this)},e.collapseToStart=function(t){return new e(t.startLineNumber,t.startColumn,t.startLineNumber,t.startColumn)},e.lift=function(t){return t?new e(t.startLineNumber,t.startColumn,t.endLineNumber,t.endColumn):null},e.isIRange=function(e){return e&&"number"==typeof e.startLineNumber&&"number"==typeof e.startColumn&&"number"==typeof e.endLineNumber&&"number"==typeof e.endColumn},e.areIntersectingOrTouching=function(e,t){return!(e.endLineNumber<t.startLineNumber||e.endLineNumber===t.startLineNumber&&e.endColumn<t.startColumn)&&!(t.endLineNumber<e.startLineNumber||t.endLineNumber===e.startLineNumber&&t.endColumn<e.startColumn)},e.compareRangesUsingStarts=function(e,t){var n=0|e.startLineNumber,r=0|t.startLineNumber,i=0|e.startColumn,o=0|t.startColumn,s=0|e.endLineNumber,a=0|t.endLineNumber,u=0|e.endColumn,l=0|t.endColumn
return n===r?i===o?s===a?u-l:s-a:i-o:n-r},e.compareRangesUsingEnds=function(e,t){return e.endLineNumber===t.endLineNumber?e.endColumn===t.endColumn?e.startLineNumber===t.startLineNumber?e.startColumn-t.startColumn:e.startLineNumber-t.startLineNumber:e.endColumn-t.endColumn:e.endLineNumber-t.endLineNumber},e.spansMultipleLines=function(e){return e.endLineNumber>e.startLineNumber},e}()
t.Range=r}),define(e[28],t([1,0,7]),function(e,t,r){"use strict"
!function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(t.SelectionDirection||(t.SelectionDirection={}))
var i=t.SelectionDirection,o=function(e){function t(t,n,r,i){e.call(this,t,n,r,i),this.selectionStartLineNumber=t,this.selectionStartColumn=n,this.positionLineNumber=r,this.positionColumn=i}return n(t,e),t.prototype.clone=function(){return new t(this.selectionStartLineNumber,this.selectionStartColumn,this.positionLineNumber,this.positionColumn)},t.prototype.toString=function(){return"["+this.selectionStartLineNumber+","+this.selectionStartColumn+" -> "+this.positionLineNumber+","+this.positionColumn+"]"},t.prototype.equalsSelection=function(e){return t.selectionsEqual(this,e)},t.selectionsEqual=function(e,t){return e.selectionStartLineNumber===t.selectionStartLineNumber&&e.selectionStartColumn===t.selectionStartColumn&&e.positionLineNumber===t.positionLineNumber&&e.positionColumn===t.positionColumn},t.prototype.getDirection=function(){return this.selectionStartLineNumber===this.startLineNumber&&this.selectionStartColumn===this.startColumn?i.LTR:i.RTL},t.prototype.setEndPosition=function(e,n){return this.getDirection()===i.LTR?new t(this.startLineNumber,this.startColumn,e,n):new t(e,n,this.startLineNumber,this.startColumn)},t.prototype.setStartPosition=function(e,n){return this.getDirection()===i.LTR?new t(e,n,this.endLineNumber,this.endColumn):new t(this.endLineNumber,this.endColumn,e,n)},t.liftSelection=function(e){return new t(e.selectionStartLineNumber,e.selectionStartColumn,e.positionLineNumber,e.positionColumn)},t.selectionsArrEqual=function(e,t){if(e&&!t||!e&&t)return!1
if(!e&&!t)return!0
if(e.length!==t.length)return!1
for(var n=0,r=e.length;r>n;n++)if(!this.selectionsEqual(e[n],t[n]))return!1
return!0},t.isISelection=function(e){return e&&"number"==typeof e.selectionStartLineNumber&&"number"==typeof e.selectionStartColumn&&"number"==typeof e.positionLineNumber&&"number"==typeof e.positionColumn},t.createWithDirection=function(e,n,r,o,s){return s===i.LTR?new t(e,n,r,o):new t(r,o,e,n)},t}(r.Range)
t.Selection=o}),define(e[29],t([1,0,24,4]),function(e,t,r,i){"use strict"
function o(e,t,n){return new r.LcsDiff(e,t,n).ComputeDiff()}function s(e){if(e.length<=1)return e
var t,n,r,i,o,s,a=[e[0]],l=a[0]
for(t=1,n=e.length;n>t;t++)r=(s=e[t]).originalStart-(l.originalStart+l.originalLength),i=s.modifiedStart-(l.modifiedStart+l.modifiedLength),o=Math.min(r,i),u>o?(l.originalLength=s.originalStart+s.originalLength-l.originalStart,l.modifiedLength=s.modifiedStart+s.modifiedLength-l.modifiedStart):(a.push(s),l=s)
return a}var a=5e3,u=3,l=function(){function e(e,t,n){this.buffer=e,this.startMarkers=t,this.endMarkers=n}return e.prototype.equals=function(t){if(!(t instanceof e))return!1
var n=t
if(this.getLength()!==n.getLength())return!1
for(var r=0,i=this.getLength();i>r;r++){if(this.getElementHash(r)!==n.getElementHash(r))return!1}return!0},e.prototype.getLength=function(){return this.startMarkers.length},e.prototype.getElementHash=function(e){return this.buffer.substring(this.startMarkers[e].offset,this.endMarkers[e].offset)},e.prototype.getStartLineNumber=function(e){return e===this.startMarkers.length?this.startMarkers[e-1].lineNumber+1:this.startMarkers[e].lineNumber},e.prototype.getStartColumn=function(e){return this.startMarkers[e].column},e.prototype.getEndLineNumber=function(e){return this.endMarkers[e].lineNumber},e.prototype.getEndColumn=function(e){return this.endMarkers[e].column},e}(),c=function(e){function t(n,r){var i,o,s,a,u,l="",c=[],f=[]
for(s=0,i=0,o=n.length;o>i;i++)l+=n[i],a=1,u=n[i].length+1,r&&(a=t._getFirstNonBlankColumn(n[i],1),u=t._getLastNonBlankColumn(n[i],1)),c.push({offset:s+a-1,lineNumber:i+1,column:a}),f.push({offset:s+u-1,lineNumber:i+1,column:u}),s+=n[i].length
e.call(this,l,c,f)}return n(t,e),t._getFirstNonBlankColumn=function(e,t){var n=i.firstNonWhitespaceIndex(e)
return-1===n?t:n+1},t._getLastNonBlankColumn=function(e,t){var n=i.lastNonWhitespaceIndex(e)
return-1===n?t:n+2},t.prototype.getCharSequence=function(e,t){var n,r,i,o,s=[],a=[]
for(n=e;t>=n;n++)for(i=this.startMarkers[n],o=this.endMarkers[n],r=i.offset;r<o.offset;r++)s.push({offset:r,lineNumber:i.lineNumber,column:i.column+(r-i.offset)}),a.push({offset:r+1,lineNumber:i.lineNumber,column:i.column+(r-i.offset)+1})
return new l(this.buffer,s,a)},t}(l),f=function(){return function(e,t,n){0===e.originalLength?(this.originalStartLineNumber=0,this.originalStartColumn=0,this.originalEndLineNumber=0,this.originalEndColumn=0):(this.originalStartLineNumber=t.getStartLineNumber(e.originalStart),this.originalStartColumn=t.getStartColumn(e.originalStart),this.originalEndLineNumber=t.getEndLineNumber(e.originalStart+e.originalLength-1),this.originalEndColumn=t.getEndColumn(e.originalStart+e.originalLength-1)),0===e.modifiedLength?(this.modifiedStartLineNumber=0,this.modifiedStartColumn=0,this.modifiedEndLineNumber=0,this.modifiedEndColumn=0):(this.modifiedStartLineNumber=n.getStartLineNumber(e.modifiedStart),this.modifiedStartColumn=n.getStartColumn(e.modifiedStart),this.modifiedEndLineNumber=n.getEndLineNumber(e.modifiedStart+e.modifiedLength-1),this.modifiedEndColumn=n.getEndColumn(e.modifiedStart+e.modifiedLength-1))}}(),h=function(){return function(e,t,n,r,i){if(0===e.originalLength?(this.originalStartLineNumber=t.getStartLineNumber(e.originalStart)-1,this.originalEndLineNumber=0):(this.originalStartLineNumber=t.getStartLineNumber(e.originalStart),this.originalEndLineNumber=t.getEndLineNumber(e.originalStart+e.originalLength-1)),0===e.modifiedLength?(this.modifiedStartLineNumber=n.getStartLineNumber(e.modifiedStart)-1,this.modifiedEndLineNumber=0):(this.modifiedStartLineNumber=n.getStartLineNumber(e.modifiedStart),this.modifiedEndLineNumber=n.getEndLineNumber(e.modifiedStart+e.modifiedLength-1)),0!==e.originalLength&&0!==e.modifiedLength&&r()){var a=t.getCharSequence(e.originalStart,e.originalStart+e.originalLength-1),u=n.getCharSequence(e.modifiedStart,e.modifiedStart+e.modifiedLength-1),l=o(a,u,r)
i&&(l=s(l)),this.charChanges=[]
for(var c=0,h=l.length;h>c;c++)this.charChanges.push(new f(l[c],a,u))}}}(),p=function(){function e(e,t,n){this.shouldPostProcessCharChanges=n.shouldPostProcessCharChanges,this.shouldIgnoreTrimWhitespace=n.shouldIgnoreTrimWhitespace,this.maximumRunTimeMs=a,this.original=new c(e,this.shouldIgnoreTrimWhitespace),this.modified=new c(t,this.shouldIgnoreTrimWhitespace),n.shouldConsiderTrimWhitespaceInEmptyCase&&this.shouldIgnoreTrimWhitespace&&this.original.equals(this.modified)&&(this.shouldIgnoreTrimWhitespace=!1,this.original=new c(e,this.shouldIgnoreTrimWhitespace),this.modified=new c(t,this.shouldIgnoreTrimWhitespace))}return e.prototype.computeDiff=function(){this.computationStartTime=(new Date).getTime()
for(var e=o(this.original,this.modified,this._continueProcessingPredicate.bind(this)),t=[],n=0,r=e.length;r>n;n++)t.push(new h(e[n],this.original,this.modified,this._continueProcessingPredicate.bind(this),this.shouldPostProcessCharChanges))
return t},e.prototype._continueProcessingPredicate=function(){return 0===this.maximumRunTimeMs||(new Date).getTime()-this.computationStartTime<this.maximumRunTimeMs},e}()
t.DiffComputer=p}),define(e[17],t([1,0]),function(e,t){"use strict"
function n(e){void 0===e&&(e="")
for(var n=t.USUAL_WORD_SEPARATORS,r="(-?\\d*\\.\\d\\w*)|([^",i=0;i<n.length;i++)e.indexOf(n[i])>=0||(r+="\\"+n[i])
return r+="\\s]+)",new RegExp(r,"g")}t.USUAL_WORD_SEPARATORS="`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",t.createWordRegExp=n,t.DEFAULT_WORD_REGEXP=n(),t.ensureValidWordDefinition=function(e){var n=t.DEFAULT_WORD_REGEXP
if(e&&e instanceof RegExp)if(e.global)n=e
else{var r="g"
e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),n=new RegExp(e.source,r)}return n.lastIndex=0,n},t.getWordAtText=function(e,t,n,r){var i,o,s,a,u,l,c=n.match(t)
if(c)for(i=0;i<c.length;i++)if((l=c[i].trim()).length>0&&(u=r+(s=(o=n.indexOf(l,s))+l.length)+1,e>=(a=r+o+1)&&u>=e))return{word:l,startColumn:a,endColumn:u}
return null}}),define(e[18],t([1,0]),function(e,t){"use strict"
var n,r=[]
r[1]={h:2,H:2,f:11,F:11},r[2]={t:3,T:3},r[3]={t:4,T:4},r[4]={p:5,P:5},r[5]={s:6,S:6,":":7},r[6]={":":7},r[7]={"/":8},r[8]={"/":9},r[11]={i:12,I:12},r[12]={l:13,L:13},r[13]={e:6,E:6},function(e){e[e.None=0]="None",e[e.ForceTermination=1]="ForceTermination",e[e.CannotEndIn=2]="CannotEndIn"}(n||(n={}))
var i="(".charCodeAt(0),o=")".charCodeAt(0),s="[".charCodeAt(0),a="]".charCodeAt(0),u="{".charCodeAt(0),l="}".charCodeAt(0),c=function(){function e(){var e=" \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…"
this._asciiMap=[]
for(var t=0;256>t;t++)this._asciiMap[t]=n.None
this._map=[]
for(t=0;t<e.length;t++)this._set(e.charCodeAt(t),n.ForceTermination)
for(t=0;t<".,;".length;t++)this._set(".,;".charCodeAt(t),n.CannotEndIn)}return e.prototype._set=function(e,t){256>e&&(this._asciiMap[e]=t),this._map[e]=t},e.prototype.classify=function(e){if(256>e)return this._asciiMap[e]
var t=this._map[e]
return t||n.None},e}(),f=function(){function e(){}return e._createLink=function(e,t,n,r){return{range:{startLineNumber:t,startColumn:n+1,endLineNumber:t,endColumn:r+1},url:e.substring(n,r)}},e.computeLinks=function(t){var c,f,h,p,m,d,g,_,v,y,b,C,S,E,L,A=[],N=e._characterClassifier
for(c=1,f=t.getLineCount();f>=c;c++){for(p=0,d=(h=t.getLineContent(c)).length,g=0,_=1,S=!1,E=!1,L=!1;d>p;){if(v=h.charAt(p),y=h.charCodeAt(p),C=!1,10===_){switch(y){case i:S=!0,b=n.None
break
case o:b=S?n.None:n.ForceTermination
break
case s:E=!0,b=n.None
break
case a:b=E?n.None:n.ForceTermination
break
case u:L=!0,b=n.None
break
case l:b=L?n.None:n.ForceTermination
break
default:b=N.classify(y)}if(b===n.ForceTermination){m=p-1
do{if(y=h.charCodeAt(m),(b=N.classify(y))!==n.CannotEndIn)break
m--}while(m>g)
A.push(e._createLink(h,c,g,m+1)),C=!0}}else 9===_?(b=N.classify(y))===n.ForceTermination?C=!0:_=10:r[_].hasOwnProperty(v)?_=r[_][v]:C=!0
C&&(_=1,S=!1,E=!1,L=!1,g=p+1),p++}10===_&&A.push(e._createLink(h,c,g,d))}return A},e._characterClassifier=new c,e}()
t.computeLinks=function(e){return e&&"function"==typeof e.getLineCount&&"function"==typeof e.getLineContent?f.computeLinks(e):[]}}),define(e[16],t([1,0]),function(e,t){"use strict"
var n=function(){function e(){this._defaultValueSet=[["true","false"],["True","False"],["Private","Public","Friend","ReadOnly","Partial","Protected","WriteOnly"],["public","protected","private"]]}return e.prototype.navigateValueSet=function(e,t,n,r,i){var o
if(e&&t&&(o=this.doNavigateValueSet(t,i)))return{range:e,value:o}
if(n&&r&&(o=this.doNavigateValueSet(r,i)))return{range:n,value:o}
return null},e.prototype.doNavigateValueSet=function(e,t){var n=this.numberReplace(e,t)
return null!==n?n:this.textReplace(e,t)},e.prototype.numberReplace=function(e,t){var n=Math.pow(10,e.length-(e.lastIndexOf(".")+1)),r=Number(e),i=parseFloat(e)
return isNaN(r)||isNaN(i)||r!==i?null:0!==r||t?(r=Math.floor(r*n),r+=t?n:-n,String(r/n)):null},e.prototype.textReplace=function(e,t){return this.valueSetsReplace(this._defaultValueSet,e,t)},e.prototype.valueSetsReplace=function(e,t,n){for(var r=null,i=0,o=e.length;null===r&&o>i;i++)r=this.valueSetReplace(e[i],t,n)
return r},e.prototype.valueSetReplace=function(e,t,n){var r=e.indexOf(t)
return r>=0?(0>(r+=n?1:-1)?r=e.length-1:r%=e.length,e[r]):null},e.INSTANCE=new e,e}()
t.BasicInplaceReplace=n}),define(e[20],t([1,0]),function(e,t){"use strict"
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
t.PrefixSumComputer=r}),define(e[21],t([1,0,20]),function(e,t,n){"use strict"
var r=function(){function e(e,t,n,r){this._uri=e,this._lines=t,this._eol=n,this._versionId=r}return e.prototype.dispose=function(){this._lines.length=0},Object.defineProperty(e.prototype,"version",{get:function(){return this._versionId},enumerable:!0,configurable:!0}),e.prototype.getText=function(){return this._lines.join(this._eol)},e.prototype.onEvents=function(e){for(var t=null,n=0,r=e.length;r>n;n++){(o=e[n]).eol&&(t=o.eol)}t&&t!==this._eol&&(this._eol=t,this._lineStarts=null)
var i=-1
for(n=0,r=e.length;r>n;n++){var o=e[n]
this._acceptDeleteRange(o.range),this._acceptInsertText({lineNumber:o.range.startLineNumber,column:o.range.startColumn},o.text),i=Math.max(i,o.versionId)}-1!==i&&(this._versionId=i)},e.prototype._ensureLineStarts=function(){if(!this._lineStarts){for(var e=[],t=this._eol.length,r=0,i=this._lines.length;i>r;r++)e.push(this._lines[r].length+t)
this._lineStarts=new n.PrefixSumComputer(e)}},e.prototype._setLineText=function(e,t){this._lines[e]=t,this._lineStarts&&this._lineStarts.changeValue(e,this._lines[e].length+this._eol.length)},e.prototype._acceptDeleteRange=function(e){if(e.startLineNumber!==e.endLineNumber)this._setLineText(e.startLineNumber-1,this._lines[e.startLineNumber-1].substring(0,e.startColumn-1)+this._lines[e.endLineNumber-1].substring(e.endColumn-1)),this._lines.splice(e.startLineNumber,e.endLineNumber-e.startLineNumber),this._lineStarts&&this._lineStarts.removeValues(e.startLineNumber,e.endLineNumber-e.startLineNumber)
else{if(e.startColumn===e.endColumn)return
this._setLineText(e.startLineNumber-1,this._lines[e.startLineNumber-1].substring(0,e.startColumn-1)+this._lines[e.startLineNumber-1].substring(e.endColumn-1))}},e.prototype._acceptInsertText=function(e,t){if(0!==t.length){var n=t.split(/\r\n|\r|\n/)
if(1===n.length)return void this._setLineText(e.lineNumber-1,this._lines[e.lineNumber-1].substring(0,e.column-1)+n[0]+this._lines[e.lineNumber-1].substring(e.column-1))
n[n.length-1]+=this._lines[e.lineNumber-1].substring(e.column-1),this._setLineText(e.lineNumber-1,this._lines[e.lineNumber-1].substring(0,e.column-1)+n[0])
for(var r=new Array(n.length-1),i=1;i<n.length;i++)this._lines.splice(e.lineNumber+i-1,0,n[i]),r[i-1]=n[i].length+this._eol.length
this._lineStarts&&this._lineStarts.insertValues(e.lineNumber,r)}},e}()
t.MirrorModel2=r}),define(e[22],t([11,12]),function(e,t){return e.create("vs/base/common/errors",t)}),define(e[5],t([1,0,22,23,3,6,27,4]),function(e,t,n,r,i,o,s,a){"use strict"
function u(e){h(e)||t.errorHandler.onUnexpectedError(e)}function l(e,t){var n=new m(e)
return t?n.verboseMessage:n.message}function c(e,t){return e.message?t&&(e.stack||e.stacktrace)?n.localize(7,null,f(e),e.stack||e.stacktrace):f(e):n.localize(8,null)}function f(e){return"string"==typeof e.code&&"number"==typeof e.errno&&"string"==typeof e.syscall?n.localize(9,null,e.message):e.message}function h(e){return e instanceof Error&&e.name===d&&e.message===d}var p=function(){function e(){this.listeners=[],this.unexpectedErrorHandler=function(e){i.setTimeout(function(){if(e.stack)throw new Error(e.message+"\n\n"+e.stack)
throw e},0)}}return e.prototype.addListener=function(e){var t=this
return this.listeners.push(e),function(){t._removeListener(e)}},e.prototype.emit=function(e){this.listeners.forEach(function(t){t(e)})},e.prototype._removeListener=function(e){this.listeners.splice(this.listeners.indexOf(e),1)},e.prototype.setUnexpectedErrorHandler=function(e){this.unexpectedErrorHandler=e},e.prototype.getUnexpectedErrorHandler=function(){return this.unexpectedErrorHandler},e.prototype.onUnexpectedError=function(e){this.unexpectedErrorHandler(e),this.emit(e)},e}()
t.ErrorHandler=p,t.errorHandler=new p,t.setUnexpectedErrorHandler=function(e){t.errorHandler.setUnexpectedErrorHandler(e)},t.onUnexpectedError=u,t.onUnexpectedPromiseError=function(e){return e.then(null,u)},t.transformErrorForSerialization=function(e){return e instanceof Error?{$isError:!0,name:e.name,message:e.message,stack:e.stacktrace||e.stack}:e}
var m=function(){function e(e){this.status=e.status,this.statusText=e.statusText,this.name="ConnectionError"
try{this.responseText=e.responseText}catch(e){this.responseText=""}if(this.errorMessage=null,this.errorCode=null,this.errorObject=null,this.responseText)try{var t=JSON.parse(this.responseText)
this.errorMessage=t.message,this.errorCode=t.code,this.errorObject=t}catch(e){}}return Object.defineProperty(e.prototype,"message",{get:function(){return this.connectionErrorToMessage(this,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verboseMessage",{get:function(){return this.connectionErrorToMessage(this,!0)},enumerable:!0,configurable:!0}),e.prototype.connectionErrorDetailsToMessage=function(e,t){var r=e.errorCode,i=e.errorMessage
return null!==r&&null!==i?n.localize(0,null,a.rtrim(i,"."),r):null!==i?i:t&&null!==e.responseText?e.responseText:null},e.prototype.connectionErrorToMessage=function(e,t){var r=this.connectionErrorDetailsToMessage(e,t)
return 401===e.status?null!==r?n.localize(1,null,r):n.localize(2,null):r||(e.status>0&&null!==e.statusText?t&&null!==e.responseText&&e.responseText.length>0?n.localize(3,null,e.statusText,e.status,e.responseText):n.localize(4,null,e.statusText,e.status):t&&null!==e.responseText&&e.responseText.length>0?n.localize(5,null,e.responseText):n.localize(6,null))},e}()
t.ConnectionError=m,r.derive(Error,m),t.toErrorMessage=function e(t,r){if(void 0===t&&(t=null),void 0===r&&(r=!1),!t)return n.localize(10,null)
if(Array.isArray(t)){var i=s.coalesce(t),a=e(i[0],r)
return i.length>1?n.localize(11,null,a,i.length):a}if(o.isString(t))return t
if(!o.isUndefinedOrNull(t.status))return l(t,r)
if(t.detail){var u=t.detail
if(u.error){if(u.error&&!o.isUndefinedOrNull(u.error.status))return l(u.error,r)
if(!o.isArray(u.error))return c(u.error,r)
for(var f=0;f<u.error.length;f++)if(u.error[f]&&!o.isUndefinedOrNull(u.error[f].status))return l(u.error[f],r)}if(u.exception)return o.isUndefinedOrNull(u.exception.status)?c(u.exception,r):l(u.exception,r)}return t.stack?c(t,r):t.message?t.message:n.localize(12,null)}
var d="Canceled"
t.isPromiseCanceledError=h,t.canceled=function(){var e=new Error(d)
return e.name=e.message,e},t.notImplemented=function(){return new Error(n.localize(13,null))},t.illegalArgument=function(e){return e?new Error(n.localize(14,null,e)):new Error(n.localize(15,null))},t.illegalState=function(e){return e?new Error(n.localize(16,null,e)):new Error(n.localize(17,null))},t.readonly=function(e){return e?new Error("readonly property '"+e+" cannot be changed'"):new Error("readonly property cannot be changed")},t.loaderError=function(e){return i.isWeb?new Error(n.localize(18,null)):new Error(n.localize(19,null,JSON.stringify(e)))},t.create=function(e,t){void 0===t&&(t={})
var n=new Error(e)
return o.isNumber(t.severity)&&(n.severity=t.severity),t.actions&&(n.actions=t.actions),n}}),define(e[26],t([1,0,5]),function(e,t,n){"use strict"
var r=function(){function e(){}return e.prototype.add=function(e,t,n){var r=this
void 0===t&&(t=null),this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(t),Array.isArray(n)&&n.push({dispose:function(){return r.remove(e,t)}})},e.prototype.remove=function(e,t){if(void 0===t&&(t=null),this._callbacks){for(var n=!1,r=0,i=this._callbacks.length;i>r;r++)if(this._callbacks[r]===e){if(this._contexts[r]===t)return this._callbacks.splice(r,1),void this._contexts.splice(r,1)
n=!0}if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}},e.prototype.invoke=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
if(this._callbacks){for(var r=[],i=this._callbacks.slice(0),o=this._contexts.slice(0),s=0,a=i.length;a>s;s++)try{r.push(i[s].apply(o[s],e))}catch(e){n.onUnexpectedError(e)}return r}},e.prototype.isEmpty=function(){return!this._callbacks||0===this._callbacks.length},e.prototype.dispose=function(){this._callbacks=void 0,this._contexts=void 0},e}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}),define(e[14],t([1,0,26]),function(e,t,n){"use strict"
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
t.EventBufferer=s}),define(e[15],t([1,0,14]),function(e,t,n){"use strict"
var r
!function(e){e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:n.default.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:n.default.None})}(r=t.CancellationToken||(t.CancellationToken={}))
var i=Object.freeze(function(e,t){var n=setTimeout(e.bind(t),0)
return{dispose:function(){clearTimeout(n)}}}),o=function(){function e(){this._isCancelled=!1}return e.prototype.cancel=function(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this._emitter=void 0))},Object.defineProperty(e.prototype,"isCancellationRequested",{get:function(){return this._isCancelled},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCancellationRequested",{get:function(){return this._isCancelled?i:(this._emitter||(this._emitter=new n.Emitter),this._emitter.event)},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){}return Object.defineProperty(e.prototype,"token",{get:function(){return this._token||(this._token=new o),this._token},enumerable:!0,configurable:!0}),e.prototype.cancel=function(){this._token?this._token.cancel():this._token=r.Cancelled},e.prototype.dispose=function(){this.cancel()},e}()
t.CancellationTokenSource=s}),define(e[2],t([37,5]),function(e,t){"use strict"
var n={}
return e.Promise.addEventListener("error",function(e){var r=e.detail,i=r.id
return r.parent?void(r.handler&&n&&delete n[i]):(n[i]=r,void(1===Object.keys(n).length&&setTimeout(function(){var e=n
n={},Object.keys(e).forEach(function(n){var r=e[n]
r.exception?t.onUnexpectedError(r.exception):r.error&&t.onUnexpectedError(r.error),console.log("WARNING: Promise with no error callback:"+r.id),console.log(r),r.exception&&console.log(r.exception.stack)})},0)))}),{Promise:e.Promise,TPromise:e.Promise,PPromise:e.Promise}}),define(e[31],t([1,0,5,3,2,15,10]),function(e,t,r,i,o,s,a){"use strict"
function u(e){return e&&"function"==typeof e.then}t.toThenable=function(e){return u(e)?e:o.TPromise.as(e)},t.asWinJsPromise=function(e){var t=new s.CancellationTokenSource
return new o.TPromise(function(n,r){var i=e(t.token)
u(i)?i.then(n,r):n(i)},function(){t.cancel()})},t.wireCancellationToken=function(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}
var l=function(){function e(){this.activePromise=null,this.queuedPromise=null,this.queuedPromiseFactory=null}return e.prototype.queue=function(e){var t=this
if(this.activePromise){if(this.queuedPromiseFactory=e,!this.queuedPromise){var n=function(){t.queuedPromise=null
var e=t.queue(t.queuedPromiseFactory)
return t.queuedPromiseFactory=null,e}
this.queuedPromise=new o.Promise(function(e,r,i){t.activePromise.then(n,n,i).done(e)},function(){t.activePromise.cancel()})}return new o.Promise(function(e,n,r){t.queuedPromise.then(e,n,r)},function(){})}return this.activePromise=e(),new o.Promise(function(e,n,r){t.activePromise.done(function(n){t.activePromise=null,e(n)},function(e){t.activePromise=null,n(e)},r)},function(){t.activePromise.cancel()})},e}()
t.Throttler=l
var c=function(){function e(){this.current=o.TPromise.as(null)}return e.prototype.queue=function(e){return this.current=this.current.then(function(){return e()})},e}()
t.SimpleThrottler=c
var f=function(){function e(e){this.defaultDelay=e,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}return e.prototype.trigger=function(e,t){var n=this
return void 0===t&&(t=this.defaultDelay),this.task=e,this.cancelTimeout(),this.completionPromise||(this.completionPromise=new o.Promise(function(e){n.onSuccess=e},function(){}).then(function(){n.completionPromise=null,n.onSuccess=null
var e=n.task
return n.task=null,e()})),this.timeout=setTimeout(function(){n.timeout=null,n.onSuccess(null)},t),this.completionPromise},e.prototype.isTriggered=function(){return null!==this.timeout},e.prototype.cancel=function(){this.cancelTimeout(),this.completionPromise&&(this.completionPromise.cancel(),this.completionPromise=null)},e.prototype.cancelTimeout=function(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},e}()
t.Delayer=f
var h=function(e){function t(t){e.call(this,t),this.throttler=new l}return n(t,e),t.prototype.trigger=function(t,n){var r=this
return e.prototype.trigger.call(this,function(){return r.throttler.queue(t)},n)},t}(f)
t.ThrottledDelayer=h
var p=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,t),this.minimumPeriod=n,this.periodThrottler=new l}return n(t,e),t.prototype.trigger=function(t,n){var r=this
return e.prototype.trigger.call(this,function(){return r.periodThrottler.queue(function(){return o.Promise.join([o.TPromise.timeout(r.minimumPeriod),t()]).then(function(e){return e[1]})})},n)},t}(h)
t.PeriodThrottledDelayer=p
var m=function(){function e(){var e=this
this._value=new o.TPromise(function(t,n){e._completeCallback=t,e._errorCallback=n})}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),e.prototype.complete=function(e){this._completeCallback(e)},e.prototype.error=function(e){this._errorCallback(e)},e}()
t.PromiseSource=m
var d=function(e){function t(t){var n,i,o
e.call(this,function(e,t,r){n=e,i=t,o=r},function(){i(r.canceled())}),t.then(n,i,o)}return n(t,e),t}(o.TPromise)
t.ShallowCancelThenPromise=d,t.always=function(e,t){return new o.TPromise(function(n,i,o){e.done(function(e){try{t(e)}catch(e){r.onUnexpectedError(e)}n(e)},function(e){try{t(e)}catch(e){r.onUnexpectedError(e)}i(e)},function(e){o(e)})},function(){e.cancel()})},t.sequence=function(e){function t(){return e.length?e.pop()():null}var n=[]
return e=e.reverse(),o.TPromise.as(null).then(function e(r){r&&n.push(r)
var i=t()
return i?i.then(e):o.TPromise.as(n)})},t.once=function(e){var t,n=this,r=!1
return function(){return r?t:(r=!0,t=e.apply(n,arguments))}}
var g=function(){function e(e){this.maxDegreeOfParalellism=e,this.outstandingPromises=[],this.runningPromises=0}return e.prototype.queue=function(e){var t=this
return new o.TPromise(function(n,r,i){t.outstandingPromises.push({factory:e,c:n,e:r,p:i}),t.consume()})},e.prototype.consume=function(){for(var e=this;this.outstandingPromises.length&&this.runningPromises<this.maxDegreeOfParalellism;){var t=this.outstandingPromises.shift()
this.runningPromises++
var n=t.factory()
n.done(t.c,t.e,t.p),n.done(function(){return e.consumed()},function(){return e.consumed()})}},e.prototype.consumed=function(){this.runningPromises--,this.consume()},e}()
t.Limiter=g
var _=function(e){function t(){e.call(this),this._token=-1}return n(t,e),t.prototype.dispose=function(){this.cancel(),e.prototype.dispose.call(this)},t.prototype.cancel=function(){-1!==this._token&&(i.clearTimeout(this._token),this._token=-1)},t.prototype.cancelAndSet=function(e,t){var n=this
this.cancel(),this._token=i.setTimeout(function(){n._token=-1,e()},t)},t.prototype.setIfNotSet=function(e,t){var n=this;-1===this._token&&(this._token=i.setTimeout(function(){n._token=-1,e()},t))},t}(a.Disposable)
t.TimeoutTimer=_
var v=function(e){function t(){e.call(this),this._token=-1}return n(t,e),t.prototype.dispose=function(){this.cancel(),e.prototype.dispose.call(this)},t.prototype.cancel=function(){-1!==this._token&&(i.clearInterval(this._token),this._token=-1)},t.prototype.cancelAndSet=function(e,t){this.cancel(),this._token=i.setInterval(function(){e()},t)},t}(a.Disposable)
t.IntervalTimer=v
var y=function(){function e(e,t){this.timeoutToken=-1,this.runner=e,this.timeout=t,this.timeoutHandler=this.onTimeout.bind(this)}return e.prototype.dispose=function(){this.cancel(),this.runner=null},e.prototype.cancel=function(){this.isScheduled()&&(i.clearTimeout(this.timeoutToken),this.timeoutToken=-1)},e.prototype.setRunner=function(e){this.runner=e},e.prototype.schedule=function(e){void 0===e&&(e=this.timeout),this.cancel(),this.timeoutToken=i.setTimeout(this.timeoutHandler,e)},e.prototype.isScheduled=function(){return-1!==this.timeoutToken},e.prototype.onTimeout=function(){this.timeoutToken=-1,this.runner&&this.runner()},e}()
t.RunOnceScheduler=y,t.nfcall=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return new o.Promise(function(n,r){return e.apply(void 0,t.concat([function(e,t){return e?r(e):n(t)}]))})},t.ninvoke=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
return new o.Promise(function(r,i){return t.call.apply(t,[e].concat(n,[function(e,t){return e?i(e):r(t)}]))})}}),define(e[36],t([1,0,5,10,2,31]),function(e,t,r,i,o,s){"use strict"
var a="$initialize",u=function(){function e(e){this._workerId=-1,this._handler=e,this._lastSentReq=0,this._pendingReplies=Object.create(null)}return e.prototype.setWorkerId=function(e){this._workerId=e},e.prototype.sendMessage=function(e,t){var n=String(++this._lastSentReq),r={c:null,e:null},i=new o.TPromise(function(e,t,n){r.c=e,r.e=t},function(){})
return this._pendingReplies[n]=r,this._send({vsWorker:this._workerId,req:n,method:e,args:t}),i},e.prototype.handleMessage=function(e){var t
try{t=JSON.parse(e)}catch(e){}t.vsWorker&&(-1!==this._workerId&&t.vsWorker!==this._workerId||this._handleMessage(t))},e.prototype._handleMessage=function(e){var t=this
if(e.seq){var n=e
if(!this._pendingReplies[n.seq])return void console.warn("Got reply to unknown seq")
var i=this._pendingReplies[n.seq]
if(delete this._pendingReplies[n.seq],n.err){var o=n.err
return n.err.$isError&&((o=new Error).name=n.err.name,o.message=n.err.message,o.stack=n.err.stack),void i.e(o)}i.c(n.res)}else{var s=e,a=s.req
this._handler.handleMessage(s.method,s.args).then(function(e){t._send({vsWorker:t._workerId,seq:a,res:e,err:void 0})},function(e){t._send({vsWorker:t._workerId,seq:a,res:void 0,err:r.transformErrorForSerialization(e)})})}},e.prototype._send=function(e){var t=JSON.stringify(e)
this._handler.sendMessage(t)},e}(),l=function(e){function t(t,n){var r=this
e.call(this),this._lastRequestTimestamp=-1
var i=null,s=null
this._worker=this._register(t.create("vs/base/common/worker/simpleWorker",function(e){r._protocol.handleMessage(e)},function(e){s(e)})),this._protocol=new u({sendMessage:function(e){r._worker.postMessage(e)},handleMessage:function(e,t){return o.TPromise.as(null)}}),this._protocol.setWorkerId(this._worker.getId())
var l=null,c=window.require
"function"==typeof c.getConfig?l=c.getConfig():void 0!==window.requirejs&&(l=window.requirejs.s.contexts._.config),this._lazyProxy=new o.TPromise(function(e,t,n){i=e,s=t},function(){}),this._onModuleLoaded=this._protocol.sendMessage(a,[this._worker.getId(),n,l]),this._onModuleLoaded.then(function(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=h(e[n],f)
i(t)},function(e){s(e),r._onError("Worker failed to load "+n,e)})
var f=function(e,t){return r._request(e,t)},h=function(e,t){return function(){var n=Array.prototype.slice.call(arguments,0)
return t(e,n)}}}return n(t,e),t.prototype.getProxyObject=function(){return new s.ShallowCancelThenPromise(this._lazyProxy)},t.prototype.getLastRequestTimestamp=function(){return this._lastRequestTimestamp},t.prototype._request=function(e,t){var n=this
return new o.TPromise(function(r,i,o){n._onModuleLoaded.then(function(){n._lastRequestTimestamp=Date.now(),n._protocol.sendMessage(e,t).then(r,i)},i)},function(){})},t.prototype._onError=function(e,t){console.error(e),console.info(t)},t}(i.Disposable)
t.SimpleWorkerClient=l
var c=function(){function t(e){var t=this
this._protocol=new u({sendMessage:function(t){e(t)},handleMessage:function(e,n){return t._handleMessage(e,n)}})}return t.prototype.onmessage=function(e){this._protocol.handleMessage(e)},t.prototype._handleMessage=function(e,t){if(e===a)return this.initialize(t[0],t[1],t[2])
if(!this._requestHandler||"function"!=typeof this._requestHandler[e])return o.TPromise.wrapError(new Error("Missing requestHandler or method: "+e))
try{return o.TPromise.as(this._requestHandler[e].apply(this._requestHandler,t))}catch(e){return o.TPromise.wrapError(e)}},t.prototype.initialize=function(t,n,r){var i=this
if(this._protocol.setWorkerId(t),r){void 0!==r.baseUrl&&delete r.baseUrl,void 0!==r.paths&&void 0!==r.paths.vs&&delete r.paths.vs
var s=r["vs/nls"]
s&&s.pseudo&&e(["vs/nls"],function(e){e.setPseudoTranslation(s.pseudo)}),r.catchError=!0,self.require.config(r)}var a,u,l=new o.TPromise(function(e,t,n){a=e,u=t})
return self.require([n],function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
var n=e[0]
i._requestHandler=n.create()
var r=[]
for(var o in i._requestHandler)"function"==typeof i._requestHandler[o]&&r.push(o)
a(r)},u),l},t}()
t.SimpleWorkerServer=c,t.create=function(e){return new c(e)}}),define(e[33],t([11,12]),function(e,t){return e.create("vs/base/common/keyCodes",t)}),define(e[34],t([1,0,33,3]),function(e,t,n,r){"use strict"
function i(e,t){var n=[]
e(n)
for(var r={},i=0,o=n.length;o>i;i++)n[i]&&(r[n[i]]=i)
t(r)
var s={}
for(var a in r)r.hasOwnProperty(a)&&(s[a]=r[a],s[a.toLowerCase()]=r[a])
return new l(n,s)}function o(e,t,n){var r=[],i=h.hasCtrlCmd(e),s=h.hasShift(e),a=h.hasAlt(e),u=h.hasWinCtrl(e),l=h.extractKeyCode(e),c=t.getLabelForKey(l)
if(!c)return"";(i&&!n.isMacintosh||u&&n.isMacintosh)&&r.push(t.ctrlKeyLabel),s&&r.push(t.shiftKeyLabel),a&&r.push(t.altKeyLabel),i&&n.isMacintosh&&r.push(t.cmdKeyLabel),u&&!n.isMacintosh&&r.push(t.windowsKeyLabel),r.push(c)
var f=r.join(t.modifierSeparator)
return h.hasChord(e)?f+" "+o(h.extractChordPart(e),t,n):f}function s(e,t){e.length>0&&e.push({tagName:"span",text:"+"}),e.push({tagName:"span",className:"monaco-kbkey",text:t})}function a(e,t,n,r){void 0===r&&(r=!1)
var i=[],o=h.hasCtrlCmd(e),u=h.hasShift(e),l=h.hasAlt(e),c=h.hasWinCtrl(e),f=h.extractKeyCode(e),p=t.getLabelForKey(f)
if(!p)return[];(o&&!n.isMacintosh||c&&n.isMacintosh)&&s(i,t.ctrlKeyLabel),u&&s(i,t.shiftKeyLabel),l&&s(i,t.altKeyLabel),o&&n.isMacintosh&&s(i,t.cmdKeyLabel),c&&!n.isMacintosh&&s(i,t.windowsKeyLabel),s(i,p)
var m=null
return h.hasChord(e)&&(m=a(h.extractChordPart(e),t,n,!0),i.push({tagName:"span",text:" "}),i=i.concat(m)),r?i:[{tagName:"span",className:"monaco-kb",children:i}]}!function(e){e[e.Unknown=0]="Unknown",e[e.Backspace=1]="Backspace",e[e.Tab=2]="Tab",e[e.Enter=3]="Enter",e[e.Shift=4]="Shift",e[e.Ctrl=5]="Ctrl",e[e.Alt=6]="Alt",e[e.PauseBreak=7]="PauseBreak",e[e.CapsLock=8]="CapsLock",e[e.Escape=9]="Escape",e[e.Space=10]="Space",e[e.PageUp=11]="PageUp",e[e.PageDown=12]="PageDown",e[e.End=13]="End",e[e.Home=14]="Home",e[e.LeftArrow=15]="LeftArrow",e[e.UpArrow=16]="UpArrow",e[e.RightArrow=17]="RightArrow",e[e.DownArrow=18]="DownArrow",e[e.Insert=19]="Insert",e[e.Delete=20]="Delete",e[e.KEY_0=21]="KEY_0",e[e.KEY_1=22]="KEY_1",e[e.KEY_2=23]="KEY_2",e[e.KEY_3=24]="KEY_3",e[e.KEY_4=25]="KEY_4",e[e.KEY_5=26]="KEY_5",e[e.KEY_6=27]="KEY_6",e[e.KEY_7=28]="KEY_7",e[e.KEY_8=29]="KEY_8",e[e.KEY_9=30]="KEY_9",e[e.KEY_A=31]="KEY_A",e[e.KEY_B=32]="KEY_B",e[e.KEY_C=33]="KEY_C",e[e.KEY_D=34]="KEY_D",e[e.KEY_E=35]="KEY_E",e[e.KEY_F=36]="KEY_F",e[e.KEY_G=37]="KEY_G",e[e.KEY_H=38]="KEY_H",e[e.KEY_I=39]="KEY_I",e[e.KEY_J=40]="KEY_J",e[e.KEY_K=41]="KEY_K",e[e.KEY_L=42]="KEY_L",e[e.KEY_M=43]="KEY_M",e[e.KEY_N=44]="KEY_N",e[e.KEY_O=45]="KEY_O",e[e.KEY_P=46]="KEY_P",e[e.KEY_Q=47]="KEY_Q",e[e.KEY_R=48]="KEY_R",e[e.KEY_S=49]="KEY_S",e[e.KEY_T=50]="KEY_T",e[e.KEY_U=51]="KEY_U",e[e.KEY_V=52]="KEY_V",e[e.KEY_W=53]="KEY_W",e[e.KEY_X=54]="KEY_X",e[e.KEY_Y=55]="KEY_Y",e[e.KEY_Z=56]="KEY_Z",e[e.Meta=57]="Meta",e[e.ContextMenu=58]="ContextMenu",e[e.F1=59]="F1",e[e.F2=60]="F2",e[e.F3=61]="F3",e[e.F4=62]="F4",e[e.F5=63]="F5",e[e.F6=64]="F6",e[e.F7=65]="F7",e[e.F8=66]="F8",e[e.F9=67]="F9",e[e.F10=68]="F10",e[e.F11=69]="F11",e[e.F12=70]="F12",e[e.F13=71]="F13",e[e.F14=72]="F14",e[e.F15=73]="F15",e[e.F16=74]="F16",e[e.F17=75]="F17",e[e.F18=76]="F18",e[e.F19=77]="F19",e[e.NumLock=78]="NumLock",e[e.ScrollLock=79]="ScrollLock",e[e.US_SEMICOLON=80]="US_SEMICOLON",e[e.US_EQUAL=81]="US_EQUAL",e[e.US_COMMA=82]="US_COMMA",e[e.US_MINUS=83]="US_MINUS",e[e.US_DOT=84]="US_DOT",e[e.US_SLASH=85]="US_SLASH",e[e.US_BACKTICK=86]="US_BACKTICK",e[e.US_OPEN_SQUARE_BRACKET=87]="US_OPEN_SQUARE_BRACKET",e[e.US_BACKSLASH=88]="US_BACKSLASH",e[e.US_CLOSE_SQUARE_BRACKET=89]="US_CLOSE_SQUARE_BRACKET",e[e.US_QUOTE=90]="US_QUOTE",e[e.OEM_8=91]="OEM_8",e[e.OEM_102=92]="OEM_102",e[e.NUMPAD_0=93]="NUMPAD_0",e[e.NUMPAD_1=94]="NUMPAD_1",e[e.NUMPAD_2=95]="NUMPAD_2",e[e.NUMPAD_3=96]="NUMPAD_3",e[e.NUMPAD_4=97]="NUMPAD_4",e[e.NUMPAD_5=98]="NUMPAD_5",e[e.NUMPAD_6=99]="NUMPAD_6",e[e.NUMPAD_7=100]="NUMPAD_7",e[e.NUMPAD_8=101]="NUMPAD_8",e[e.NUMPAD_9=102]="NUMPAD_9",e[e.NUMPAD_MULTIPLY=103]="NUMPAD_MULTIPLY",e[e.NUMPAD_ADD=104]="NUMPAD_ADD",e[e.NUMPAD_SEPARATOR=105]="NUMPAD_SEPARATOR",e[e.NUMPAD_SUBTRACT=106]="NUMPAD_SUBTRACT",e[e.NUMPAD_DECIMAL=107]="NUMPAD_DECIMAL",e[e.NUMPAD_DIVIDE=108]="NUMPAD_DIVIDE",e[e.MAX_VALUE=109]="MAX_VALUE"}(t.KeyCode||(t.KeyCode={}))
var u=t.KeyCode,l=function(){function e(e,t){this._fromKeyCode=e,this._toKeyCode=t}return e.prototype.fromKeyCode=function(e){return this._fromKeyCode[e]},e.prototype.toKeyCode=function(e){return this._toKeyCode.hasOwnProperty(e)?this._toKeyCode[e]:u.Unknown},e}(),c=i(function(e){e[u.Unknown]="unknown",e[u.Backspace]="Backspace",e[u.Tab]="Tab",e[u.Enter]="Enter",e[u.Shift]="Shift",e[u.Ctrl]="Ctrl",e[u.Alt]="Alt",e[u.PauseBreak]="PauseBreak",e[u.CapsLock]="CapsLock",e[u.Escape]="Escape",e[u.Space]="Space",e[u.PageUp]="PageUp",e[u.PageDown]="PageDown",e[u.End]="End",e[u.Home]="Home",e[u.LeftArrow]="LeftArrow",e[u.UpArrow]="UpArrow",e[u.RightArrow]="RightArrow",e[u.DownArrow]="DownArrow",e[u.Insert]="Insert",e[u.Delete]="Delete",e[u.KEY_0]="0",e[u.KEY_1]="1",e[u.KEY_2]="2",e[u.KEY_3]="3",e[u.KEY_4]="4",e[u.KEY_5]="5",e[u.KEY_6]="6",e[u.KEY_7]="7",e[u.KEY_8]="8",e[u.KEY_9]="9",e[u.KEY_A]="A",e[u.KEY_B]="B",e[u.KEY_C]="C",e[u.KEY_D]="D",e[u.KEY_E]="E",e[u.KEY_F]="F",e[u.KEY_G]="G",e[u.KEY_H]="H",e[u.KEY_I]="I",e[u.KEY_J]="J",e[u.KEY_K]="K",e[u.KEY_L]="L",e[u.KEY_M]="M",e[u.KEY_N]="N",e[u.KEY_O]="O",e[u.KEY_P]="P",e[u.KEY_Q]="Q",e[u.KEY_R]="R",e[u.KEY_S]="S",e[u.KEY_T]="T",e[u.KEY_U]="U",e[u.KEY_V]="V",e[u.KEY_W]="W",e[u.KEY_X]="X",e[u.KEY_Y]="Y",e[u.KEY_Z]="Z",e[u.ContextMenu]="ContextMenu",e[u.F1]="F1",e[u.F2]="F2",e[u.F3]="F3",e[u.F4]="F4",e[u.F5]="F5",e[u.F6]="F6",e[u.F7]="F7",e[u.F8]="F8",e[u.F9]="F9",e[u.F10]="F10",e[u.F11]="F11",e[u.F12]="F12",e[u.F13]="F13",e[u.F14]="F14",e[u.F15]="F15",e[u.F16]="F16",e[u.F17]="F17",e[u.F18]="F18",e[u.F19]="F19",e[u.NumLock]="NumLock",e[u.ScrollLock]="ScrollLock",e[u.US_SEMICOLON]=";",e[u.US_EQUAL]="=",e[u.US_COMMA]=",",e[u.US_MINUS]="-",e[u.US_DOT]=".",e[u.US_SLASH]="/",e[u.US_BACKTICK]="`",e[u.US_OPEN_SQUARE_BRACKET]="[",e[u.US_BACKSLASH]="\\",e[u.US_CLOSE_SQUARE_BRACKET]="]",e[u.US_QUOTE]="'",e[u.OEM_8]="OEM_8",e[u.OEM_102]="OEM_102",e[u.NUMPAD_0]="NumPad0",e[u.NUMPAD_1]="NumPad1",e[u.NUMPAD_2]="NumPad2",e[u.NUMPAD_3]="NumPad3",e[u.NUMPAD_4]="NumPad4",e[u.NUMPAD_5]="NumPad5",e[u.NUMPAD_6]="NumPad6",e[u.NUMPAD_7]="NumPad7",e[u.NUMPAD_8]="NumPad8",e[u.NUMPAD_9]="NumPad9",e[u.NUMPAD_MULTIPLY]="NumPad_Multiply",e[u.NUMPAD_ADD]="NumPad_Add",e[u.NUMPAD_SEPARATOR]="NumPad_Separator",e[u.NUMPAD_SUBTRACT]="NumPad_Subtract",e[u.NUMPAD_DECIMAL]="NumPad_Decimal",e[u.NUMPAD_DIVIDE]="NumPad_Divide"},function(e){e["\r"]=u.Enter}),f=i(function(e){for(var t=0,n=c._fromKeyCode.length;n>t;t++)e[t]=c._fromKeyCode[t]
e[u.LeftArrow]="Left",e[u.UpArrow]="Up",e[u.RightArrow]="Right",e[u.DownArrow]="Down"},function(e){e.OEM_1=u.US_SEMICOLON,e.OEM_PLUS=u.US_EQUAL,e.OEM_COMMA=u.US_COMMA,e.OEM_MINUS=u.US_MINUS,e.OEM_PERIOD=u.US_DOT,e.OEM_2=u.US_SLASH,e.OEM_3=u.US_BACKTICK,e.OEM_4=u.US_OPEN_SQUARE_BRACKET,e.OEM_5=u.US_BACKSLASH,e.OEM_6=u.US_CLOSE_SQUARE_BRACKET,e.OEM_7=u.US_QUOTE,e.OEM_8=u.OEM_8,e.OEM_102=u.OEM_102})
!function(e){e.toString=function(e){return c.fromKeyCode(e)},e.fromString=function(e){return c.toKeyCode(e)}}(u=t.KeyCode||(t.KeyCode={}))
var h=function(){function e(){}return e.extractFirstPart=function(e){return 65535&e},e.extractChordPart=function(e){return e>>16&65535},e.hasChord=function(e){return 0!==this.extractChordPart(e)},e.hasCtrlCmd=function(e){return!!(32768&e)},e.hasShift=function(e){return!!(16384&e)},e.hasAlt=function(e){return!!(8192&e)},e.hasWinCtrl=function(e){return!!(4096&e)},e.extractKeyCode=function(e){return 4095&e},e}()
t.BinaryKeybindings=h
var p=function(){function e(){}return e.chord=function(e,t){return e|(65535&t)<<16},e.CtrlCmd=32768,e.Shift=16384,e.Alt=8192,e.WinCtrl=4096,e}()
t.KeyMod=p
var m=function(){function e(){}return e.ENTER=u.Enter,e.SHIFT_ENTER=p.Shift|u.Enter,e.CTRLCMD_ENTER=p.CtrlCmd|u.Enter,e.WINCTRL_ENTER=p.WinCtrl|u.Enter,e.TAB=u.Tab,e.SHIFT_TAB=p.Shift|u.Tab,e.ESCAPE=u.Escape,e.SPACE=u.Space,e.DELETE=u.Delete,e.SHIFT_DELETE=p.Shift|u.Delete,e.CTRLCMD_BACKSPACE=p.CtrlCmd|u.Backspace,e.UP_ARROW=u.UpArrow,e.SHIFT_UP_ARROW=p.Shift|u.UpArrow,e.CTRLCMD_UP_ARROW=p.CtrlCmd|u.UpArrow,e.DOWN_ARROW=u.DownArrow,e.SHIFT_DOWN_ARROW=p.Shift|u.DownArrow,e.CTRLCMD_DOWN_ARROW=p.CtrlCmd|u.DownArrow,e.LEFT_ARROW=u.LeftArrow,e.RIGHT_ARROW=u.RightArrow,e.HOME=u.Home,e.END=u.End,e.PAGE_UP=u.PageUp,e.SHIFT_PAGE_UP=p.Shift|u.PageUp,e.PAGE_DOWN=u.PageDown,e.SHIFT_PAGE_DOWN=p.Shift|u.PageDown,e.F2=u.F2,e.CTRLCMD_S=p.CtrlCmd|u.KEY_S,e.CTRLCMD_C=p.CtrlCmd|u.KEY_C,e.CTRLCMD_V=p.CtrlCmd|u.KEY_V,e}()
t.CommonKeybindings=m
var d=function(){function e(e){this.value=e}return e._toUSLabel=function(e,t){return o(e,t.isMacintosh?_.INSTANCE:y.INSTANCE,t)},e._toUSAriaLabel=function(e,t){return o(e,v.INSTANCE,t)},e._toUSHTMLLabel=function(e,t){return a(e,t.isMacintosh?_.INSTANCE:y.INSTANCE,t)},e._toCustomLabel=function(e,t,n){return o(e,t,n)},e._toCustomHTMLLabel=function(e,t,n){return a(e,t,n)},e._toElectronAccelerator=function(e,t){return h.hasChord(e)?null:o(e,g.INSTANCE,t)},e.getUserSettingsKeybindingRegex=function(){if(!this._cachedKeybindingRegex){var e="(((ctrl|shift|alt|cmd|win|meta)\\+)*"+("(("+["numpad(0|1|2|3|4|5|6|7|8|9|_multiply|_add|_subtract|_decimal|_divide|_separator)","`|\\-|=|\\[|\\]|\\\\\\\\|;|'|,|\\.|\\/|oem_8|oem_102","left|up|right|down|pageup|pagedown|end|home|tab|enter|escape|space|backspace|delete|pausebreak|capslock|insert|contextmenu|numlock|scrolllock","[a-z]|[0-9]|f(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)"].join(")|(")+"))")+")"
this._cachedKeybindingRegex='"\\s*('+e+"(\\s+"+e+')?)\\s*"'}return this._cachedKeybindingRegex},e.toUserSettingsLabel=function(e,t){void 0===t&&(t=r)
var n=o(e,b.INSTANCE,t)
return n=n.toLowerCase(),t.isMacintosh?n=n.replace(/meta/g,"cmd"):t.isWindows&&(n=n.replace(/meta/g,"win")),n},e.fromUserSettingsLabel=function(t,n){if(void 0===n&&(n=r),!t)return null
t=t.toLowerCase().trim()
for(var i=!1,o=!1,s=!1,a=!1,u="";/^(ctrl|shift|alt|meta|win|cmd)(\+|\-)/.test(t);)/^ctrl(\+|\-)/.test(t)&&(n.isMacintosh?a=!0:i=!0,t=t.substr("ctrl-".length)),/^shift(\+|\-)/.test(t)&&(o=!0,t=t.substr("shift-".length)),/^alt(\+|\-)/.test(t)&&(s=!0,t=t.substr("alt-".length)),/^meta(\+|\-)/.test(t)&&(n.isMacintosh?i=!0:a=!0,t=t.substr("meta-".length)),/^win(\+|\-)/.test(t)&&(n.isMacintosh?i=!0:a=!0,t=t.substr("win-".length)),/^cmd(\+|\-)/.test(t)&&(n.isMacintosh?i=!0:a=!0,t=t.substr("cmd-".length))
var l=0,c=t.indexOf(" ")
c>0?(u=t.substring(0,c),l=e.fromUserSettingsLabel(t.substring(c),n)):u=t
var h=f.toKeyCode(u),m=0
return i&&(m|=p.CtrlCmd),o&&(m|=p.Shift),s&&(m|=p.Alt),a&&(m|=p.WinCtrl),m|=h,p.chord(m,l)},e.prototype.hasCtrlCmd=function(){return h.hasCtrlCmd(this.value)},e.prototype.hasShift=function(){return h.hasShift(this.value)},e.prototype.hasAlt=function(){return h.hasAlt(this.value)},e.prototype.hasWinCtrl=function(){return h.hasWinCtrl(this.value)},e.prototype.extractKeyCode=function(){return h.extractKeyCode(this.value)},e.prototype._toUSLabel=function(t){return void 0===t&&(t=r),e._toUSLabel(this.value,t)},e.prototype._toUSAriaLabel=function(t){return void 0===t&&(t=r),e._toUSAriaLabel(this.value,t)},e.prototype._toUSHTMLLabel=function(t){return void 0===t&&(t=r),e._toUSHTMLLabel(this.value,t)},e.prototype.toCustomLabel=function(t,n){return void 0===n&&(n=r),e._toCustomLabel(this.value,t,n)},e.prototype.toCustomHTMLLabel=function(t,n){return void 0===n&&(n=r),e._toCustomHTMLLabel(this.value,t,n)},e.prototype._toElectronAccelerator=function(t){return void 0===t&&(t=r),e._toElectronAccelerator(this.value,t)},e.prototype.toUserSettingsLabel=function(t){return void 0===t&&(t=r),e.toUserSettingsLabel(this.value,t)},e._cachedKeybindingRegex=null,e}()
t.Keybinding=d
var g=function(){function e(){this.ctrlKeyLabel="Ctrl",this.shiftKeyLabel="Shift",this.altKeyLabel="Alt",this.cmdKeyLabel="Cmd",this.windowsKeyLabel="Super",this.modifierSeparator="+"}return e.prototype.getLabelForKey=function(e){switch(e){case u.UpArrow:return"Up"
case u.DownArrow:return"Down"
case u.LeftArrow:return"Left"
case u.RightArrow:return"Right"}return u.toString(e)},e.INSTANCE=new e,e}()
t.ElectronAcceleratorLabelProvider=g
var _=function(){function e(){this.ctrlKeyLabel="⌃",this.shiftKeyLabel="⇧",this.altKeyLabel="⌥",this.cmdKeyLabel="⌘",this.windowsKeyLabel=n.localize(0,null),this.modifierSeparator=""}return e.prototype.getLabelForKey=function(t){switch(t){case u.LeftArrow:return e.leftArrowUnicodeLabel
case u.UpArrow:return e.upArrowUnicodeLabel
case u.RightArrow:return e.rightArrowUnicodeLabel
case u.DownArrow:return e.downArrowUnicodeLabel}return u.toString(t)},e.INSTANCE=new e,e.leftArrowUnicodeLabel=String.fromCharCode(8592),e.upArrowUnicodeLabel=String.fromCharCode(8593),e.rightArrowUnicodeLabel=String.fromCharCode(8594),e.downArrowUnicodeLabel=String.fromCharCode(8595),e}()
t.MacUIKeyLabelProvider=_
var v=function(){function e(){this.ctrlKeyLabel=n.localize(1,null),this.shiftKeyLabel=n.localize(2,null),this.altKeyLabel=n.localize(3,null),this.cmdKeyLabel=n.localize(4,null),this.windowsKeyLabel=n.localize(5,null),this.modifierSeparator="+"}return e.prototype.getLabelForKey=function(e){return u.toString(e)},e.INSTANCE=new _,e}()
t.AriaKeyLabelProvider=v
var y=function(){function e(){this.ctrlKeyLabel=n.localize(6,null),this.shiftKeyLabel=n.localize(7,null),this.altKeyLabel=n.localize(8,null),this.cmdKeyLabel=n.localize(9,null),this.windowsKeyLabel=n.localize(10,null),this.modifierSeparator="+"}return e.prototype.getLabelForKey=function(e){return u.toString(e)},e.INSTANCE=new e,e}()
t.ClassicUIKeyLabelProvider=y
var b=function(){function e(){this.ctrlKeyLabel="Ctrl",this.shiftKeyLabel="Shift",this.altKeyLabel="Alt",this.cmdKeyLabel="Meta",this.windowsKeyLabel="Meta",this.modifierSeparator="+"}return e.prototype.getLabelForKey=function(e){return f.fromKeyCode(e)},e.INSTANCE=new e,e}()}),define(e[35],t([11,12]),function(e,t){return e.create("vs/base/common/severity",t)}),define(e[32],t([1,0,35,4]),function(e,t,n,r){"use strict"
var i
!function(e){e[e.Ignore=0]="Ignore",e[e.Info=1]="Info",e[e.Warning=2]="Warning",e[e.Error=3]="Error"}(i||(i={})),function(e){var t="error",i="warning",o="warn",s="info",a=Object.create(null)
a[e.Error]=n.localize(0,null),a[e.Warning]=n.localize(1,null),a[e.Info]=n.localize(2,null),e.fromValue=function(n){return n?r.equalsIgnoreCase(t,n)?e.Error:r.equalsIgnoreCase(i,n)||r.equalsIgnoreCase(o,n)?e.Warning:r.equalsIgnoreCase(s,n)?e.Info:e.Ignore:e.Ignore},e.toString=function(e){return a[e]||r.empty},e.compare=function(e,t){return t-e}}(i||(i={})),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i}),define(e[30],t([1,0,14,34,9,7,28,2,15,32,13]),function(e,t,n,r,i,o,s,a,u,l,c){"use strict"
t.createMonacoBaseAPI=function(){return{editor:void 0,languages:void 0,CancellationTokenSource:u.CancellationTokenSource,Emitter:n.Emitter,KeyCode:r.KeyCode,KeyMod:r.KeyMod,Position:i.Position,Range:o.Range,Selection:s.Selection,SelectionDirection:s.SelectionDirection,Severity:l.default,Promise:a.TPromise,Uri:c.default}}}),define(e[38],t([1,0,13,2,7,25,29,21,18,16,17,30]),function(e,t,r,i,o,s,a,u,l,c,f,h){"use strict"
var p=function(e){function t(){e.apply(this,arguments)}return n(t,e),Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._versionId},enumerable:!0,configurable:!0}),t.prototype.getValue=function(){return this.getText()},t.prototype.getLinesContent=function(){return this._lines.slice(0)},t.prototype.getLineCount=function(){return this._lines.length},t.prototype.getLineContent=function(e){return this._lines[e-1]},t.prototype.getWordAtPosition=function(e,t){var n=f.getWordAtText(e.column,f.ensureValidWordDefinition(t),this._lines[e.lineNumber-1],0)
return n?new o.Range(e.lineNumber,n.startColumn,e.lineNumber,n.endColumn):null},t.prototype.getWordUntilPosition=function(e,t){var n=this.getWordAtPosition(e,t)
return n?{word:this._lines[e.lineNumber-1].substring(n.startColumn-1,e.column-1),startColumn:n.startColumn,endColumn:e.column}:{word:"",startColumn:e.column,endColumn:e.column}},t.prototype._getAllWords=function(e){var t=this,n=[]
return this._lines.forEach(function(r){t._wordenize(r,e).forEach(function(e){n.push(r.substring(e.start,e.end))})}),n},t.prototype.getAllUniqueWords=function(e,t){var n=!1,r={}
return this._getAllWords(e).filter(function(e){return t&&!n&&t===e?(n=!0,!1):!r[e]&&(r[e]=!0,!0)})},t.prototype._wordenize=function(e,t){for(var n,r=[];(n=t.exec(e))&&0!==n[0].length;)r.push({start:n.index,end:n.index+n[0].length})
return r},t.prototype.getValueInRange=function(e){if(e.startLineNumber===e.endLineNumber)return this._lines[e.startLineNumber-1].substring(e.startColumn-1,e.endColumn-1)
var t=this._eol,n=e.startLineNumber-1,r=e.endLineNumber-1,i=[]
i.push(this._lines[n].substring(e.startColumn-1))
for(var o=n+1;r>o;o++)i.push(this._lines[o])
return i.push(this._lines[r].substring(0,e.endColumn-1)),i.join(t)},t}(u.MirrorModel2)
t.MirrorModel=p
var m=function(){function e(){this._foreignModule=null}return e.prototype.computeDiff=function(e,t,n){var r=this._getModel(e),o=this._getModel(t)
if(!r||!o)return null
var s=r.getLinesContent(),u=o.getLinesContent(),l=new a.DiffComputer(s,u,{shouldPostProcessCharChanges:!0,shouldIgnoreTrimWhitespace:n,shouldConsiderTrimWhitespaceInEmptyCase:!0})
return i.TPromise.as(l.computeDiff())},e.prototype.computeDirtyDiff=function(e,t,n){var r=this._getModel(e),o=this._getModel(t)
if(!r||!o)return null
var s=r.getLinesContent(),u=o.getLinesContent(),l=new a.DiffComputer(s,u,{shouldPostProcessCharChanges:!1,shouldIgnoreTrimWhitespace:n,shouldConsiderTrimWhitespaceInEmptyCase:!1})
return i.TPromise.as(l.computeDiff())},e.prototype.computeLinks=function(e){var t=this._getModel(e)
return t?i.TPromise.as(l.computeLinks(t)):null},e.prototype.textualSuggest=function(e,t,n,r){var o=this._getModel(e)
return o?i.TPromise.as(this._suggestFiltered(o,t,new RegExp(n,r))):null},e.prototype._suggestFiltered=function(e,t,n){var r=this._suggestUnfiltered(e,t,n)
return[{currentWord:r.currentWord,suggestions:r.suggestions.filter(function(e){return!!s.fuzzyContiguousFilter(r.currentWord,e.label)}),incomplete:r.incomplete}]},e.prototype._suggestUnfiltered=function(e,t,n){var r=e.getWordUntilPosition(t,n).word
return{currentWord:r,suggestions:e.getAllUniqueWords(n,r).filter(function(e){return!/^-?\d*\.?\d/.test(e)}).map(function(e){return{type:"text",label:e,codeSnippet:e,noAutoAccept:!0}})}},e.prototype.navigateValueSet=function(e,t,n,r,o){var s=this._getModel(e)
if(!s)return null
var a=new RegExp(r,o)
t.startColumn===t.endColumn&&(t.endColumn+=1)
var u=s.getValueInRange(t),l=s.getWordAtPosition({lineNumber:t.startLineNumber,column:t.startColumn},a),f=null
null!==l&&(f=s.getValueInRange(l))
var h=c.BasicInplaceReplace.INSTANCE.navigateValueSet(t,u,l,f,n)
return i.TPromise.as(h)},e.prototype.loadForeignModule=function(e,t){var n=this
return new i.TPromise(function(r,i){self.require([e],function(e){var i={getMirrorModels:function(){return n._getModels()}}
n._foreignModule=e.create(i,t)
var o=[]
for(var s in n._foreignModule)"function"==typeof n._foreignModule[s]&&o.push(s)
r(o)},i)})},e.prototype.fmr=function(e,t){if(!this._foreignModule||"function"!=typeof this._foreignModule[e])return i.TPromise.wrapError(new Error("Missing requestHandler or method: "+e))
try{return i.TPromise.as(this._foreignModule[e].apply(this._foreignModule,t))}catch(e){return i.TPromise.wrapError(e)}},e}()
t.BaseEditorSimpleWorker=m
var d=function(e){function t(){e.call(this),this._models=Object.create(null)}return n(t,e),t.prototype.dispose=function(){this._models=Object.create(null)},t.prototype._getModel=function(e){return this._models[e]},t.prototype._getModels=function(){var e=this,t=[]
return Object.keys(this._models).forEach(function(n){return t.push(e._models[n])}),t},t.prototype.acceptNewModel=function(e){this._models[e.url]=new p(r.default.parse(e.url),e.value.lines,e.value.EOL,e.versionId)},t.prototype.acceptModelChanged=function(e,t){this._models[e]&&this._models[e].onEvents(t)},t.prototype.acceptRemovedModel=function(e){this._models[e]&&delete this._models[e]},t}(m)
t.EditorSimpleWorkerImpl=d,t.create=function(){return new d}
var g=self
"function"==typeof g.importScripts&&(g.monaco=h.createMonacoBaseAPI())})}).call(this)
