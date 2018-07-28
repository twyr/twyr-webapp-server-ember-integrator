(function(){var e=["vs/editor/common/services/modeService","vs/languages/php/common/php","exports","vs/base/common/objects","vs/editor/common/modes","vs/editor/common/modes/abstractMode","vs/editor/common/modes/abstractState","require","vs/editor/common/modes/languageConfigurationRegistry","vs/editor/common/modes/supports/tokenizationSupport","vs/editor/common/modes/supports/suggestSupport","vs/editor/common/services/editorWorkerService","vs/platform/configuration/common/configuration","vs/editor/common/services/compatWorkerService"],t=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},n=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>i?o(s):i>3?o(t,n,s):o(t,n))||s)
return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__param||function(e,t){return function(n,r){t(n,r,e)}}
define(e[1],function(t){for(var n=[],r=0,o=t.length;o>r;r++)n[r]=e[t[r]]
return n}([7,2,3,4,5,6,0,8,9,10,11,12,13]),function(e,o,i,s,a,p,c,u,l,f,h,g,d){"use strict"
var m=function(){for(var e=[{tokenType:"delimiter.bracket.php",open:"{",close:"}"},{tokenType:"delimiter.array.php",open:"[",close:"]"},{tokenType:"delimiter.parenthesis.php",open:"(",close:")"}],t=Object.create(null),n=0;n<e.length;n++){var r=e[n]
t[r.open]={tokenType:r.tokenType},t[r.close]={tokenType:r.tokenType}}return{stringIsBracket:function(e){return!!t[e]},tokenTypeFromString:function(e){return t[e].tokenType}}}(),y=i.createKeywordMatcher(["abstract","and","array","as","break","callable","case","catch","cfunction","class","clone","const","continue","declare","default","do","else","elseif","enddeclare","endfor","endforeach","endif","endswitch","endwhile","extends","false","final","for","foreach","function","global","goto","if","implements","interface","instanceof","insteadof","namespace","new","null","object","old_function","or","private","protected","public","resource","static","switch","throw","trait","try","true","use","var","while","xor","die","echo","empty","exit","eval","include","include_once","isset","list","require","require_once","return","print","unset","yield","__construct"]),S=i.createKeywordMatcher(["__CLASS__","__DIR__","__FILE__","__LINE__","__NAMESPACE__","__METHOD__","__FUNCTION__","__TRAIT__"]),v=i.createKeywordMatcher(["$GLOBALS","$_SERVER","$_GET","$_POST","$_FILES","$_REQUEST","$_SESSION","$_ENV","$_COOKIE","$php_errormsg","$HTTP_RAW_POST_DATA","$http_response_header","$argc","$argv"]),k=function(e){function n(t,n,r,o){void 0===o&&(o=""),e.call(this,t),this.name=n,this.parent=r,this.whitespaceTokenType=o}return t(n,e),n.prototype.equals=function(t){return t instanceof n&&(e.prototype.equals.call(this,t)&&this.name===t.name&&this.whitespaceTokenType===t.whitespaceTokenType&&p.AbstractState.safeEquals(this.parent,t.parent))},n.prototype.tokenize=function(e){return e.setTokenRules("+-*/%&|^~!=<>(){}[]\"'\\/?;:.,#","\t "),e.skipWhitespace().length>0?{type:this.whitespaceTokenType}:this.stateTokenize(e)},n.prototype.stateTokenize=function(e){throw new Error("To be implemented")},n}(p.AbstractState)
o.PHPState=k
var _=function(e){function n(t,n,r,o){void 0===o&&(o=!0),e.call(this,t,"string",n,"string.php"),this.delimiter=r,this.isAtBeginning=o}return t(n,e),n.prototype.makeClone=function(){return new n(this.getMode(),p.AbstractState.safeClone(this.parent),this.delimiter,this.isAtBeginning)},n.prototype.equals=function(t){return t instanceof n&&(e.prototype.equals.call(this,t)&&this.delimiter===t.delimiter&&this.isAtBeginning===t.isAtBeginning)},n.prototype.tokenize=function(e){var t=this.isAtBeginning?1:0
for(this.isAtBeginning=!1;!e.eos();){var n=e.next()
if("\\"===n){if(0!==t)return e.goBack(1),{type:"string.php"}
if(e.eos())return{type:"string.php",nextState:this.parent}
e.next()}else if(n===this.delimiter)return{type:"string.php",nextState:this.parent}
t+=1}return{type:"string.php"}},n}(k)
o.PHPString=_
var x=function(e){function n(t,n,r){e.call(this,t,"number",n),this.firstDigit=r}return t(n,e),n.prototype.makeClone=function(){return new n(this.getMode(),p.AbstractState.safeClone(this.parent),this.firstDigit)},n.prototype.equals=function(t){return t instanceof n&&(e.prototype.equals.call(this,t)&&this.firstDigit===t.firstDigit)},n.prototype.tokenize=function(e){var t=this.firstDigit,n=10,r=!1,o=!1
if("0"===t&&!e.eos()){if("x"===(t=e.peek()).toLowerCase())n=16
else if("b"===t.toLowerCase())n=2
else if("."===t)n=10
else{if(!a.isDigit(t,8))return{type:"number.php",nextState:this.parent}
n=8}e.next()}for(;!e.eos();)if(t=e.peek(),a.isDigit(t,n))e.next()
else if(10===n)if("."!==t||o||r){if("e"!==t||o)break
o=!0,e.next(),e.eos()||"-"!==e.peek()||e.next()}else r=!0,e.next()
else{if(8!==n||!a.isDigit(t,10))break
n=10,e.next()}var i="number"
return 16===n?i+=".hex":8===n?i+=".octal":2===n&&(i+=".binary"),{type:i+".php",nextState:this.parent}},n}(k)
o.PHPNumber=x
var w=function(e){function n(t,n){e.call(this,t,"comment",n,"comment.php")}return t(n,e),n.prototype.makeClone=function(){return new T(this.getMode(),p.AbstractState.safeClone(this.parent))},n.prototype.equals=function(t){return t instanceof n&&e.prototype.equals.call(this,t)},n.prototype.tokenize=function(e){for(;!e.eos();){if("?"===e.next()&&!e.eos()&&">"===e.peek())return e.goBack(1),{type:"comment.php",nextState:this.parent}}return{type:"comment.php",nextState:this.parent}},n}(k)
o.PHPLineComment=w
var T=function(e){function n(t,n){e.call(this,t,"comment",n,"comment.php")}return t(n,e),n.prototype.makeClone=function(){return new n(this.getMode(),p.AbstractState.safeClone(this.parent))},n.prototype.equals=function(t){return t instanceof n&&e.prototype.equals.call(this,t)},n.prototype.tokenize=function(e){for(;!e.eos();){if("*"===e.next()&&!e.eos()&&!e.peekWhitespace()&&"/"===e.peek())return e.next(),{type:"comment.php",nextState:this.parent}}return{type:"comment.php"}},n}(k)
o.PHPDocComment=T
var b=function(e){function n(t,n){e.call(this,t,"expression",n)}return t(n,e),n.prototype.makeClone=function(){return new n(this.getMode(),p.AbstractState.safeClone(this.parent))},n.prototype.equals=function(t){return t instanceof n&&e.prototype.equals.call(this,t)},n.prototype.stateTokenize=function(e){if(a.isDigit(e.peek(),10))return{nextState:new x(this.getMode(),this,e.next())}
if(e.advanceIfString("?>").length)return{type:"metatag.php",nextState:this.parent}
var t=e.nextToken()
if(y(t.toString().toLowerCase()))return{type:"keyword.php"}
if(S(t))return{type:"constant.php"}
if(v(t))return{type:"variable.predefined.php"}
if(function(e){return"$"===e[0]}(t))return{type:"variable.php"}
if("/"===t){if(!e.eos()&&!e.peekWhitespace())switch(e.peekToken()){case"/":return{nextState:new w(this.getMode(),this)}
case"*":return e.nextToken(),{nextState:new T(this.getMode(),this)}}}else{if("#"===t)return{nextState:new w(this.getMode(),this)}
if('"'===t||"'"===t)return{nextState:new _(this.getMode(),this,t)}
if(m.stringIsBracket(t))return{type:m.tokenTypeFromString(t)}
if(function(e){return"+-*%&|^~!=<>(){}[]/?;:.,@".indexOf(e)>-1}(t))return{type:"delimiter.php"}}return{type:""}},n}(k)
o.PHPStatement=b
var C=function(e){function n(t,n){e.call(this,t,"plain",n)}return t(n,e),n.prototype.makeClone=function(){return new n(this.getMode(),p.AbstractState.safeClone(this.parent))},n.prototype.equals=function(t){return t instanceof n&&e.prototype.equals.call(this,t)},n.prototype.stateTokenize=function(e){return e.advanceIfStringCaseInsensitive("<?php").length||e.advanceIfString("<?=").length||e.advanceIfString("<%=").length||e.advanceIfString("<?").length||e.advanceIfString("<%").length?{type:"metatag.php",nextState:new b(this.getMode(),new M(this.getMode(),this.parent))}:(e.next(),{type:""})},n}(k)
o.PHPPlain=C
var M=function(e){function n(t,n){e.call(this,t,"enterHTML",n)}return t(n,e),n.prototype.makeClone=function(){return new n(this.getMode(),p.AbstractState.safeClone(this.parent))},n.prototype.equals=function(t){return t instanceof n&&e.prototype.equals.call(this,t)},n}(k)
o.PHPEnterHTMLState=M
var I=function(e){function o(t,n,r,i,a){e.call(this,t.id,a),this.modeService=n,this.tokenizationSupport=new l.TokenizationSupport(this,this,!0),u.LanguageConfigurationRegistry.register(this.getId(),o.LANG_CONFIG),i&&s.SuggestRegistry.register(this.getId(),new f.TextualSuggestSupport(i,r),!0)}return t(o,e),o.prototype.getInitialState=function(){var e=this.modeService.getMode("text/html").tokenizationSupport.getInitialState()
return e.setStateData(new M(this,null)),e},o.prototype.enterNestedMode=function(e){return e instanceof M},o.prototype.getNestedModeInitialState=function(e){var t=e.parent
return e.parent=null,{state:t,missingModePromise:null}},o.prototype.getLeavingNestedModeData=function(e,t){var n=/<\?/i.exec(e)
return null!==n?{nestedModeBuffer:e.substring(0,n.index),bufferAfterNestedMode:e.substring(n.index),stateAfterNestedMode:new C(this,null)}:null},o.prototype.onReturningFromNestedMode=function(e,t){e.parent=t},o.LANG_CONFIG={wordPattern:a.createWordRegExp("$_"),comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string.php"]},{open:"[",close:"]",notIn:["string.php"]},{open:"(",close:")",notIn:["string.php"]},{open:'"',close:'"',notIn:["string.php"]},{open:"'",close:"'",notIn:["string.php"]}]},o=n([r(1,c.IModeService),r(2,g.IConfigurationService),r(3,h.IEditorWorkerService),r(4,d.ICompatWorkerService)],o)}(a.CompatMode)
o.PHPMode=I})}).call(this)
