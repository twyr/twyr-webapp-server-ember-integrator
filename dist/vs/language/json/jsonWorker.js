!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}(function(e,t){var n,r,i,o,a
!function(e){e.create=function(e,t){return{line:e,character:t}},e.is=function(e){var t=e
return c.defined(t)&&c.number(t.line)&&c.number(t.character)}}(n=t.Position||(t.Position={})),function(e){e.create=function(e,t,r,i){if(c.number(e)&&c.number(t)&&c.number(r)&&c.number(i))return{start:n.create(e,t),end:n.create(r,i)}
if(n.is(e)&&n.is(t))return{start:e,end:t}
throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+r+", "+i+"]")},e.is=function(e){var t=e
return c.defined(t)&&n.is(t.start)&&n.is(t.end)}}(r=t.Range||(t.Range={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e
return c.defined(t)&&r.is(t)&&(c.string(t.uri)||c.undefined(t.uri))}}(t.Location||(t.Location={})),function(e){e.create=function(e,t,n,r,i){var o={range:e,message:t}
return c.defined(n)&&(o.severity=n),c.defined(r)&&(o.code=r),c.defined(i)&&(o.source=i),o},e.is=function(e){var t=e
return c.defined(t)&&r.is(t.range)&&c.string(t.message)&&(c.number(t.severity)||c.undefined(t.severity))&&(c.number(t.code)||c.string(t.code)||c.undefined(t.code))&&(c.string(t.source)||c.undefined(t.source))}}(i=t.Diagnostic||(t.Diagnostic={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i={title:e,command:t}
return c.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e
return c.defined(t)&&c.string(t.title)&&c.string(t.title)}}(o=t.Command||(t.Command={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}}}(a=t.TextEdit||(t.TextEdit={}))
var s=function(){function e(){this.workspaceEdit={changes:Object.create(null)},this.textEditChanges=Object.create(null)}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){var t=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(a.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(a.replace(e,t))},e.prototype.delete=function(e){this.edits.push(a.del(e))},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),n=this.textEditChanges[e]
if(!n){var r=[]
this.workspaceEdit.changes[e]=r,n=new t(r),this.textEditChanges[e]=n}return n},e}()
t.WorkspaceChange=s,function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e
return c.defined(t)&&c.string(t.uri)}}(t.TextDocumentIdentifier||(t.TextDocumentIdentifier={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e
return c.defined(t)&&c.string(t.uri)&&c.number(t.version)}}(t.VersionedTextDocumentIdentifier||(t.VersionedTextDocumentIdentifier={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e
return c.defined(t)&&c.string(t.uri)&&c.string(t.languageId)&&c.number(t.version)&&c.string(t.text)}}(t.TextDocumentItem||(t.TextDocumentItem={})),function(e){e.create=function(e){return{label:e}}}(t.CompletionItem||(t.CompletionItem={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(t.CompletionList||(t.CompletionList={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(t.ParameterInformation||(t.ParameterInformation={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
var i={label:e}
return c.defined(t)&&(i.documentation=t),c.defined(n)?i.parameters=n:i.parameters=[],i}}(t.SignatureInformation||(t.SignatureInformation={})),function(e){e.create=function(e,t){var n={range:e}
return c.number(t)&&(n.kind=t),n}}(t.DocumentHighlight||(t.DocumentHighlight={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}}
return i&&(o.containerName=i),o}}(t.SymbolInformation||(t.SymbolInformation={})),function(e){e.create=function(e){return{diagnostics:e}},e.is=function(e){var t=e
return c.defined(t)&&c.typedArray(t.diagnostics,i.is)}}(t.CodeActionContext||(t.CodeActionContext={})),function(e){e.create=function(e,t){var n={range:e}
return c.defined(t)&&(n.data=t),n},e.is=function(e){var t=e
return c.defined(t)&&r.is(t.range)&&(c.undefined(t.command)||o.is(t.command))}}(t.CodeLens||(t.CodeLens={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e
return c.defined(t)&&c.number(t.tabSize)&&c.boolean(t.insertSpaces)}}(t.FormattingOptions||(t.FormattingOptions={})),function(e){e.create=function(e,t,n,r){return new u(e,t,n,r)},e.is=function(e){var t=e
return!!(c.defined(t)&&c.string(t.uri)&&(c.undefined(t.languageId)||c.string(t.languageId))&&c.number(t.lineCount)&&c.func(t.getText)&&c.func(t.positionAt)&&c.func(t.offsetAt))}}(t.TextDocument||(t.TextDocument={}))
var c,u=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(){return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1)
var i=t.charAt(r)
n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0)
var t=this.getLineOffsets(),r=0,i=t.length
if(0===i)return n.create(0,e)
for(;r<i;){var o=Math.floor((r+i)/2)
t[o]>e?i=o:r=o+1}var a=r-1
return n.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets()
if(e.line>=t.length)return this._content.length
if(e.line<0)return 0
var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length
return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}()
!function(e){var t=Object.prototype.toString
e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(c||(c={}))}),define("vscode-languageserver-types",["vscode-languageserver-types/main"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-nls/vscode-nls",["require","exports"],e)}(function(e,t){function n(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
return function(e,t){return 0===t.length?e:e.replace(/\{(\d+)\}/g,function(e,n){var r=n[0]
return void 0!==t[r]?t[r]:e})}(t,n)}function r(e){return n}t.loadMessageBundle=r,t.config=function(e){return r}}),define("vscode-nls",["vscode-nls/vscode-nls"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonCompletion",["require","exports","vscode-languageserver-types","vscode-nls"],e)}(function(e,t){var n=e("vscode-languageserver-types"),r=e("vscode-nls").loadMessageBundle(),i=function(){function e(e,t,n){void 0===t&&(t=[]),this.schemaService=e,this.contributions=t,this.promise=n||Promise}return e.prototype.doResolve=function(e){for(var t=this.contributions.length-1;t>=0;t--)if(this.contributions[t].resolveCompletion){var n=this.contributions[t].resolveCompletion(e)
if(n)return n}return this.promise.resolve(e)},e.prototype.doComplete=function(e,t,r){var i=this,o=e.offsetAt(t),a=r.getNodeFromOffsetEndInclusive(o),s=this.getCurrentWord(e,o),c=null,u=void 0,l={items:[],isIncomplete:!1}
!a||"string"!==a.type&&"number"!==a.type&&"boolean"!==a.type&&"null"!==a.type?(c=n.Range.create(e.positionAt(o-s.length),t),u=e.getText().substring(o-s.length,o)):(c=n.Range.create(e.positionAt(a.start),e.positionAt(a.end)),u=e.getText().substring(a.start,o))
var f={},p={add:function(e){f[e.label]||(f[e.label]=!0,c&&(e.textEdit=n.TextEdit.replace(c,e.insertText),e.filterText=u),l.items.push(e))},setAsIncomplete:function(){l.isIncomplete=!0},error:function(e){console.error(e)},log:function(e){console.log(e)}}
return this.schemaService.getSchemaForResource(e.uri,r).then(function(t){var n=[],c=!0,u="",d=null
a&&"string"===a.type&&(a.isKey&&(c=!(a.parent&&a.parent.value),d=a.parent?a.parent:null,u=e.getText().substring(a.start+1,a.end-1),a.parent&&(a=a.parent.parent)))
if(a&&"object"===a.type){if(a.start===o)return l
var h=a.properties
h.forEach(function(e){d&&d===e||(f[e.key.value]=!0)})
var m=0===h.length||o>=h[h.length-1].start
t?i.getPropertySuggestions(t,r,a,c,m,p):i.getSchemaLessPropertySuggestions(r,a,u,s,m,p)
var g=a.getPath()
i.contributions.forEach(function(t){var r=t.collectPropertyCompletions(e.uri,g,s,c,m,p)
r&&n.push(r)})}if(!a||"string"!==a.type&&"number"!==a.type&&"boolean"!==a.type&&"null"!==a.type||(a=a.parent),t?i.getValueSuggestions(t,r,a,o,p):i.getSchemaLessValueSuggestions(r,a,o,e,p),a){if("property"===a.type&&o>a.colonOffset){var v=a.key.value,y=a.value
if(!y||o<=y.end){var b=a.parent.getPath()
i.contributions.forEach(function(t){var r=t.collectValueCompletions(e.uri,b,v,p)
r&&n.push(r)})}}}else i.contributions.forEach(function(t){var r=t.collectDefaultCompletions(e.uri,p)
r&&n.push(r)})
return i.promise.all(n).then(function(){return l})})},e.prototype.getPropertySuggestions=function(e,t,n,r,i,o){var a=this,s=[]
t.validate(e.schema,s,n.start),s.forEach(function(e){if(e.node===n&&!e.inverted){var t=e.schema.properties
t&&Object.keys(t).forEach(function(e){var n=t[e]
o.add({kind:10,label:e,insertText:a.getTextForProperty(e,n,r,i),documentation:n.description||""})})}})},e.prototype.getSchemaLessPropertySuggestions=function(e,t,n,r,i,o){var a=this,s=function(e){e.properties.forEach(function(e){var t=e.key.value
o.add({kind:10,label:t,insertText:a.getTextForSimilarProperty(t,e.value),documentation:""})})}
if(t.parent)if("property"===t.parent.type){var c=t.parent.key.value
e.visit(function(e){return"property"===e.type&&e.key.value===c&&e.value&&"object"===e.value.type&&s(e.value),!0})}else"array"===t.parent.type&&t.parent.items.forEach(function(e){"object"===e.type&&e!==t&&s(e)})
!n&&r.length>0&&o.add({kind:10,label:this.getLabelForValue(r),insertText:this.getTextForProperty(r,null,!0,i),documentation:""})},e.prototype.getSchemaLessValueSuggestions=function(e,t,n,r,i){var o=this,a=function(e){if(!e.contains(n)){var t=o.getTextForMatchingNode(e,r)
i.add({kind:o.getSuggestionKind(e.type),label:t,insertText:t,documentation:""})}"boolean"===e.type&&o.addBooleanSuggestion(!e.getValue(),i)}
if(t){if("property"===t.type&&n>t.colonOffset){var s=t.value
if(s&&n>s.end)return
var c=t.key.value
e.visit(function(e){return"property"===e.type&&e.key.value===c&&e.value&&a(e.value),!0})}if("array"===t.type)if(t.parent&&"property"===t.parent.type){var u=t.parent.key.value
e.visit(function(e){return"property"===e.type&&e.key.value===u&&e.value&&"array"===e.value.type&&e.value.items.forEach(function(e){a(e)}),!0})}else t.items.forEach(function(e){a(e)})}else i.add({kind:this.getSuggestionKind("object"),label:"Empty object",insertText:"{\n\t{{}}\n}",documentation:""}),i.add({kind:this.getSuggestionKind("array"),label:"Empty array",insertText:"[\n\t{{}}\n]",documentation:""})},e.prototype.getValueSuggestions=function(e,t,n,r,i){var o=this
if(n){var a=null
if(n&&"property"===n.type&&r>n.colonOffset){var s=n.value
if(s&&r>s.end)return
a=n.key.value,n=n.parent}if(n&&(null!==a||"array"===n.type)){var c=[]
t.validate(e.schema,c,n.start),c.forEach(function(e){if(e.node===n&&!e.inverted&&e.schema&&(e.schema.items&&(o.addDefaultSuggestion(e.schema.items,i),o.addEnumSuggestion(e.schema.items,i)),e.schema.properties)){var t=e.schema.properties[a]
t&&(o.addDefaultSuggestion(t,i),o.addEnumSuggestion(t,i))}})}}else this.addDefaultSuggestion(e.schema,i)},e.prototype.addBooleanSuggestion=function(e,t){t.add({kind:this.getSuggestionKind("boolean"),label:e?"true":"false",insertText:this.getTextForValue(e),documentation:""})},e.prototype.addNullSuggestion=function(e){e.add({kind:this.getSuggestionKind("null"),label:"null",insertText:"null",documentation:""})},e.prototype.addEnumSuggestion=function(e,t){var n=this
Array.isArray(e.enum)?e.enum.forEach(function(r){return t.add({kind:n.getSuggestionKind(e.type),label:n.getLabelForValue(r),insertText:n.getTextForValue(r),documentation:""})}):(this.isType(e,"boolean")&&(this.addBooleanSuggestion(!0,t),this.addBooleanSuggestion(!1,t)),this.isType(e,"null")&&this.addNullSuggestion(t)),Array.isArray(e.allOf)&&e.allOf.forEach(function(e){return n.addEnumSuggestion(e,t)}),Array.isArray(e.anyOf)&&e.anyOf.forEach(function(e){return n.addEnumSuggestion(e,t)}),Array.isArray(e.oneOf)&&e.oneOf.forEach(function(e){return n.addEnumSuggestion(e,t)})},e.prototype.isType=function(e,t){return Array.isArray(e.type)?-1!==e.type.indexOf(t):e.type===t},e.prototype.addDefaultSuggestion=function(e,t){var n=this
e.default&&t.add({kind:this.getSuggestionKind(e.type),label:this.getLabelForValue(e.default),insertText:this.getTextForValue(e.default),detail:r("json.suggest.default","Default value")}),Array.isArray(e.defaultSnippets)&&e.defaultSnippets.forEach(function(e){t.add({kind:15,label:n.getLabelForSnippetValue(e.body),insertText:n.getTextForSnippetValue(e.body)})}),Array.isArray(e.allOf)&&e.allOf.forEach(function(e){return n.addDefaultSuggestion(e,t)}),Array.isArray(e.anyOf)&&e.anyOf.forEach(function(e){return n.addDefaultSuggestion(e,t)}),Array.isArray(e.oneOf)&&e.oneOf.forEach(function(e){return n.addDefaultSuggestion(e,t)})},e.prototype.getLabelForValue=function(e){var t=JSON.stringify(e)
return t.length>57?t.substr(0,57).trim()+"...":t},e.prototype.getLabelForSnippetValue=function(e){var t=JSON.stringify(e)
return(t=t.replace(/\{\{|\}\}/g,"")).length>57?t.substr(0,57).trim()+"...":t},e.prototype.getTextForValue=function(e){var t=JSON.stringify(e,null,"\t")
return t.replace(/[\\\{\}]/g,"\\$&")},e.prototype.getTextForSnippetValue=function(e){return JSON.stringify(e,null,"\t")},e.prototype.getTextForEnumValue=function(e){var t=this.getTextForValue(e)
switch(typeof e){case"object":return null===e?"{{null}}":t
case"string":return'"{{'+t.substr(1,t.length-2)+'}}"'
case"number":case"boolean":return"{{"+t+"}}"}return t},e.prototype.getSuggestionKind=function(e){if(Array.isArray(e)){var t=e
e=t.length>0?t[0]:null}if(!e)return 12
switch(e){case"string":return 12
case"object":return 9
case"property":return 10
default:return 12}},e.prototype.getTextForMatchingNode=function(e,t){switch(e.type){case"array":return"[]"
case"object":return"{}"
default:return t.getText().substr(e.start,e.end-e.start)}},e.prototype.getTextForProperty=function(e,t,n,r){var i=this.getTextForValue(e)
if(!n)return i
if(i+=": ",t){var o=t.default
if(void 0!==o)i+=this.getTextForEnumValue(o)
else if(t.enum&&t.enum.length>0)i+=this.getTextForEnumValue(t.enum[0])
else{switch(Array.isArray(t.type)?t.type[0]:t.type){case"boolean":i+="{{false}}"
break
case"string":i+='"{{}}"'
break
case"object":i+="{\n\t{{}}\n}"
break
case"array":i+="[\n\t{{}}\n]"
break
case"number":i+="{{0}}"
break
case"null":i+="{{null}}"
break
default:return i}}}else i+="{{0}}"
return r||(i+=","),i},e.prototype.getTextForSimilarProperty=function(e,t){return this.getTextForValue(e)},e.prototype.getCurrentWord=function(e,t){for(var n=t-1,r=e.getText();n>=0&&-1===' \t\n\r\v":{[,'.indexOf(r.charAt(n));)n--
return r.substring(n+1,t)},e}()
t.JSONCompletion=i}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonHover",["require","exports","vscode-languageserver-types"],e)}(function(e,t){var n=e("vscode-languageserver-types"),r=function(){function e(e,t,n){void 0===t&&(t=[]),this.schemaService=e,this.contributions=t,this.promise=n||Promise}return e.prototype.doHover=function(e,t,r){var i=e.offsetAt(t),o=r.getNodeFromOffset(i)
if(o&&"string"===o.type&&o.isKey){var a=o.parent
o=a.value}if(!o)return this.promise.resolve(void 0)
for(var s=function(t){return{contents:t,range:n.Range.create(e.positionAt(o.start),e.positionAt(o.end))}},c=o.getPath(),u=this.contributions.length-1;u>=0;u--){var l=this.contributions[u].getInfoContribution(e.uri,c)
if(l)return l.then(function(e){return s(e)})}return this.schemaService.getSchemaForResource(e.uri,r).then(function(e){if(e){var t=[]
r.validate(e.schema,t,o.start)
var n=null
if(t.every(function(e){return e.node===o&&!e.inverted&&e.schema&&(n=n||e.schema.description),!0}),n)return s([n])}})},e}()
t.JSONHover=r}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonValidation",["require","exports"],e)}(function(e,t){var n=function(){function e(e,t){this.jsonSchemaService=e,this.promise=t,this.validationEnabled=!0}return e.prototype.configure=function(e){e&&(this.validationEnabled=e.validate)},e.prototype.doValidation=function(e,t){return this.validationEnabled?this.jsonSchemaService.getSchemaForResource(e.uri,t).then(function(n){if(n)if(n.errors.length&&t.root){var r=t.root,i="object"===r.type?r.getFirstProperty("$schema"):null
if(i){var o=i.value||i
t.warnings.push({location:{start:o.start,end:o.end},message:n.errors[0]})}else t.warnings.push({location:{start:r.start,end:r.start+1},message:n.errors[0]})}else t.validate(n.schema)
var a=[],s={}
return t.errors.concat(t.warnings).forEach(function(n,r){var i=n.location.start+" "+n.location.end+" "+n.message
if(!s[i]){s[i]=!0
var o={start:e.positionAt(n.location.start),end:e.positionAt(n.location.end)}
a.push({severity:r>=t.errors.length?2:1,range:o,message:n.message})}}),a}):this.promise.resolve([])},e}()
t.JSONValidation=n}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/utils/strings",["require","exports"],e)}(function(e,t){t.startsWith=function(e,t){if(e.length<t.length)return!1
for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1
return!0},t.endsWith=function(e,t){var n=e.length-t.length
return n>0?e.lastIndexOf(t)===n:0===n&&e===t},t.convertSimple2RegExpPattern=function(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")}}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonDocumentSymbols",["require","exports","../utils/strings","vscode-languageserver-types"],e)}(function(e,t){var n=e("../utils/strings"),r=e("vscode-languageserver-types"),i=function(){function e(){}return e.prototype.findDocumentSymbols=function(e,t){var i=this,o=t.root
if(!o)return null
var a=e.uri
if(("vscode://defaultsettings/keybindings.json"===a||n.endsWith(a.toLowerCase(),"/user/keybindings.json"))&&"array"===o.type){var s=[]
return o.items.forEach(function(t){if("object"===t.type){var n=t.getFirstProperty("key")
if(n&&n.value){var i=r.Location.create(e.uri,r.Range.create(e.positionAt(t.start),e.positionAt(t.end)))
s.push({name:n.value.getValue(),kind:12,location:i})}}}),s}var c=function(t,n,o){if("array"===n.type)n.items.forEach(function(e){c(t,e,o)})
else if("object"===n.type){n.properties.forEach(function(n){var a=r.Location.create(e.uri,r.Range.create(e.positionAt(n.start),e.positionAt(n.end))),s=n.value
if(s){var u=o?o+"."+n.key.value:n.key.value
t.push({name:n.key.getValue(),kind:i.getSymbolKind(s.type),location:a,containerName:o}),c(t,s,u)}})}return t}
return c([],o,void 0)},e.prototype.getSymbolKind=function(e){switch(e){case"object":return 2
case"string":return 15
case"number":return 16
case"array":return 18
case"boolean":return 17
default:return 13}},e}()
t.JSONDocumentSymbols=i}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("jsonc-parser/main",["require","exports","vscode-nls"],e)}(function(e,t){function n(e,t){function n(t,n){for(var r=0,i=0;r<t||!n;){var o=e.charCodeAt(p)
if(o>=l._0&&o<=l._9)i=16*i+o-l._0
else if(o>=l.A&&o<=l.F)i=16*i+o-l.A+10
else{if(!(o>=l.a&&o<=l.f))break
i=16*i+o-l.a+10}p++,r++}return r<t&&(i=-1),i}function a(){for(var t="",r=p;;){if(p>=d){t+=e.substring(r,p),v=u.UnexpectedEndOfString
break}var o=e.charCodeAt(p)
if(o===l.doubleQuote){t+=e.substring(r,p),p++
break}if(o!==l.backslash){if(i(o)){t+=e.substring(r,p),v=u.UnexpectedEndOfString
break}p++}else{if(t+=e.substring(r,p),++p>=d){v=u.UnexpectedEndOfString
break}switch(o=e.charCodeAt(p++)){case l.doubleQuote:t+='"'
break
case l.backslash:t+="\\"
break
case l.slash:t+="/"
break
case l.b:t+="\b"
break
case l.f:t+="\f"
break
case l.n:t+="\n"
break
case l.r:t+="\r"
break
case l.t:t+="\t"
break
case l.u:var a=n(4,!0)
a>=0?t+=String.fromCharCode(a):v=u.InvalidUnicode
break
default:v=u.InvalidEscapeCharacter}r=p}}return t}function s(){if(h="",v=u.None,m=p,p>=d)return m=d,g=f.EOF
var t=e.charCodeAt(p)
if(r(t)){do{p++,h+=String.fromCharCode(t),t=e.charCodeAt(p)}while(r(t))
return g=f.Trivia}if(i(t))return p++,h+=String.fromCharCode(t),t===l.carriageReturn&&e.charCodeAt(p)===l.lineFeed&&(p++,h+="\n"),g=f.LineBreakTrivia
switch(t){case l.openBrace:return p++,g=f.OpenBraceToken
case l.closeBrace:return p++,g=f.CloseBraceToken
case l.openBracket:return p++,g=f.OpenBracketToken
case l.closeBracket:return p++,g=f.CloseBracketToken
case l.colon:return p++,g=f.ColonToken
case l.comma:return p++,g=f.CommaToken
case l.doubleQuote:return p++,h=a(),g=f.StringLiteral
case l.slash:var n=p-1
if(e.charCodeAt(p+1)===l.slash){for(p+=2;p<d&&!i(e.charCodeAt(p));)p++
return h=e.substring(n,p),g=f.LineCommentTrivia}if(e.charCodeAt(p+1)===l.asterisk){p+=2
for(var s=d-1,y=!1;p<s;){if(e.charCodeAt(p)===l.asterisk&&e.charCodeAt(p+1)===l.slash){p+=2,y=!0
break}p++}return y||(p++,v=u.UnexpectedEndOfComment),h=e.substring(n,p),g=f.BlockCommentTrivia}return h+=String.fromCharCode(t),p++,g=f.Unknown
case l.minus:if(h+=String.fromCharCode(t),++p===d||!o(e.charCodeAt(p)))return g=f.Unknown
case l._0:case l._1:case l._2:case l._3:case l._4:case l._5:case l._6:case l._7:case l._8:case l._9:return h+=function(){var t=p
if(e.charCodeAt(p)===l._0)p++
else for(p++;p<e.length&&o(e.charCodeAt(p));)p++
if(p<e.length&&e.charCodeAt(p)===l.dot){if(!(++p<e.length&&o(e.charCodeAt(p))))return v=u.UnexpectedEndOfNumber,e.substring(t,p)
for(p++;p<e.length&&o(e.charCodeAt(p));)p++}var n=p
if(p<e.length&&(e.charCodeAt(p)===l.E||e.charCodeAt(p)===l.e))if((++p<e.length&&e.charCodeAt(p)===l.plus||e.charCodeAt(p)===l.minus)&&p++,p<e.length&&o(e.charCodeAt(p))){for(p++;p<e.length&&o(e.charCodeAt(p));)p++
n=p}else v=u.UnexpectedEndOfNumber
return e.substring(t,n)}(),g=f.NumericLiteral
default:for(;p<d&&c(t);)p++,t=e.charCodeAt(p)
if(m!==p){switch(h=e.substring(m,p)){case"true":return g=f.TrueKeyword
case"false":return g=f.FalseKeyword
case"null":return g=f.NullKeyword}return g=f.Unknown}return h+=String.fromCharCode(t),p++,g=f.Unknown}}function c(e){if(r(e)||i(e))return!1
switch(e){case l.closeBrace:case l.closeBracket:case l.openBrace:case l.openBracket:case l.doubleQuote:case l.colon:case l.comma:return!1}return!0}void 0===t&&(t=!1)
var p=0,d=e.length,h="",m=0,g=f.Unknown,v=u.None
return{setPosition:function(e){p=e,h="",m=0,g=f.Unknown,v=u.None},getPosition:function(){return p},scan:t?function(){var e
do{e=s()}while(e>=f.LineCommentTrivia&&e<=f.Trivia)
return e}:s,getToken:function(){return g},getTokenValue:function(){return h},getTokenOffset:function(){return m},getTokenLength:function(){return p-m},getTokenError:function(){return v}}}function r(e){return e===l.space||e===l.tab||e===l.verticalTab||e===l.formFeed||e===l.nonBreakingSpace||e===l.ogham||e>=l.enQuad&&e<=l.zeroWidthSpace||e===l.narrowNoBreakSpace||e===l.mathematicalSpace||e===l.ideographicSpace||e===l.byteOrderMark}function i(e){return e===l.lineFeed||e===l.carriageReturn||e===l.lineSeparator||e===l.paragraphSeparator}function o(e){return e>=l._0&&e<=l._9}function a(e){switch(typeof e){case"boolean":return"boolean"
case"number":return"number"
case"string":return"string"
default:return"null"}}function s(e,t,r){function i(e){return e?function(){return e(l.getTokenOffset(),l.getTokenLength())}:function(){return!0}}function o(e){return e?function(t){return e(t,l.getTokenOffset(),l.getTokenLength())}:function(){return!0}}function a(){for(;;){var e=l.scan()
switch(e){case f.LineCommentTrivia:case f.BlockCommentTrivia:S&&s(p.InvalidSymbol)
break
case f.Unknown:s(p.InvalidSymbol)
break
case f.Trivia:case f.LineBreakTrivia:break
default:return e}}}function s(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),x(e),t.length+n.length>0)for(var r=l.getToken();r!==f.EOF;){if(-1!==t.indexOf(r)){a()
break}if(-1!==n.indexOf(r))break
r=a()}}function c(e){if(l.getToken()!==f.StringLiteral)return!1
var t=l.getTokenValue()
return e?y(t):h(t),a(),!0}function u(){return function(){if(l.getToken()!==f.OpenBracketToken)return!1
g(),a()
for(var e=!1;l.getToken()!==f.CloseBracketToken&&l.getToken()!==f.EOF;)l.getToken()===f.CommaToken?(e||s(p.ValueExpected,[],[]),b(","),a()):e&&s(p.CommaExpected,[],[]),u()||s(p.ValueExpected,[],[f.CloseBracketToken,f.CommaToken]),e=!0
return v(),l.getToken()!==f.CloseBracketToken?s(p.CloseBracketExpected,[f.CloseBracketToken],[]):a(),!0}()||function(){if(l.getToken()!==f.OpenBraceToken)return!1
d(),a()
for(var e=!1;l.getToken()!==f.CloseBraceToken&&l.getToken()!==f.EOF;)l.getToken()===f.CommaToken?(e||s(p.ValueExpected,[],[]),b(","),a()):e&&s(p.CommaExpected,[],[]),(c(!1)?(l.getToken()===f.ColonToken?(b(":"),a(),u()||s(p.ValueExpected,[],[f.CloseBraceToken,f.CommaToken])):s(p.ColonExpected,[],[f.CloseBraceToken,f.CommaToken]),!0):(s(p.PropertyNameExpected,[],[f.CloseBraceToken,f.CommaToken]),!1))||s(p.ValueExpected,[],[f.CloseBraceToken,f.CommaToken]),e=!0
return m(),l.getToken()!==f.CloseBraceToken?s(p.CloseBraceExpected,[f.CloseBraceToken],[]):a(),!0}()||c(!0)||function(){switch(l.getToken()){case f.NumericLiteral:var e=0
try{"number"!=typeof(e=JSON.parse(l.getTokenValue()))&&(s(p.InvalidNumberFormat),e=0)}catch(e){s(p.InvalidNumberFormat)}y(e)
break
case f.NullKeyword:y(null)
break
case f.TrueKeyword:y(!0)
break
case f.FalseKeyword:y(!1)
break
default:return!1}return a(),!0}()}var l=n(e,!1),d=i(t.onObjectBegin),h=o(t.onObjectProperty),m=i(t.onObjectEnd),g=i(t.onArrayBegin),v=i(t.onArrayEnd),y=o(t.onLiteralValue),b=o(t.onSeparator),x=o(t.onError),S=r&&r.disallowComments
return a(),l.getToken()===f.EOF||(u()?(l.getToken()!==f.EOF&&s(p.EndOfFileExpected,[],[]),!0):(s(p.ValueExpected,[],[]),!1))}var c=e("vscode-nls").loadMessageBundle()
!function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter"}(t.ScanError||(t.ScanError={}))
var u=t.ScanError
!function(e){e[e.Unknown=0]="Unknown",e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.EOF=16]="EOF"}(t.SyntaxKind||(t.SyntaxKind={}))
var l,f=t.SyntaxKind
t.createScanner=n,function(e){e[e.nullCharacter=0]="nullCharacter",e[e.maxAsciiCharacter=127]="maxAsciiCharacter",e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.lineSeparator=8232]="lineSeparator",e[e.paragraphSeparator=8233]="paragraphSeparator",e[e.nextLine=133]="nextLine",e[e.space=32]="space",e[e.nonBreakingSpace=160]="nonBreakingSpace",e[e.enQuad=8192]="enQuad",e[e.emQuad=8193]="emQuad",e[e.enSpace=8194]="enSpace",e[e.emSpace=8195]="emSpace",e[e.threePerEmSpace=8196]="threePerEmSpace",e[e.fourPerEmSpace=8197]="fourPerEmSpace",e[e.sixPerEmSpace=8198]="sixPerEmSpace",e[e.figureSpace=8199]="figureSpace",e[e.punctuationSpace=8200]="punctuationSpace",e[e.thinSpace=8201]="thinSpace",e[e.hairSpace=8202]="hairSpace",e[e.zeroWidthSpace=8203]="zeroWidthSpace",e[e.narrowNoBreakSpace=8239]="narrowNoBreakSpace",e[e.ideographicSpace=12288]="ideographicSpace",e[e.mathematicalSpace=8287]="mathematicalSpace",e[e.ogham=5760]="ogham",e[e._=95]="_",e[e.$=36]="$",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.ampersand=38]="ampersand",e[e.asterisk=42]="asterisk",e[e.at=64]="at",e[e.backslash=92]="backslash",e[e.bar=124]="bar",e[e.caret=94]="caret",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.closeParen=41]="closeParen",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.equals=61]="equals",e[e.exclamation=33]="exclamation",e[e.greaterThan=62]="greaterThan",e[e.lessThan=60]="lessThan",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.openParen=40]="openParen",e[e.percent=37]="percent",e[e.plus=43]="plus",e[e.question=63]="question",e[e.semicolon=59]="semicolon",e[e.singleQuote=39]="singleQuote",e[e.slash=47]="slash",e[e.tilde=126]="tilde",e[e.backspace=8]="backspace",e[e.formFeed=12]="formFeed",e[e.byteOrderMark=65279]="byteOrderMark",e[e.tab=9]="tab",e[e.verticalTab=11]="verticalTab"}(l||(l={})),t.stripComments=function(e,t){var r,i,o=n(e),a=[],s=0
do{switch(i=o.getPosition(),r=o.scan()){case f.LineCommentTrivia:case f.BlockCommentTrivia:case f.EOF:s!==i&&a.push(e.substring(s,i)),void 0!==t&&a.push(o.getTokenValue().replace(/[^\r\n]/g,t)),s=o.getPosition()}}while(r!==f.EOF)
return a.join("")},function(e){e[e.InvalidSymbol=0]="InvalidSymbol",e[e.InvalidNumberFormat=1]="InvalidNumberFormat",e[e.PropertyNameExpected=2]="PropertyNameExpected",e[e.ValueExpected=3]="ValueExpected",e[e.ColonExpected=4]="ColonExpected",e[e.CommaExpected=5]="CommaExpected",e[e.CloseBraceExpected=6]="CloseBraceExpected",e[e.CloseBracketExpected=7]="CloseBracketExpected",e[e.EndOfFileExpected=8]="EndOfFileExpected"}(t.ParseErrorCode||(t.ParseErrorCode={}))
var p=t.ParseErrorCode
t.getParseErrorMessage=function(e){switch(e){case p.InvalidSymbol:return c("error.invalidSymbol","Invalid symbol")
case p.InvalidNumberFormat:return c("error.invalidNumberFormat","Invalid number format")
case p.PropertyNameExpected:return c("error.propertyNameExpected","Property name expected")
case p.ValueExpected:return c("error.valueExpected","Value expected")
case p.ColonExpected:return c("error.colonExpected","Colon expected")
case p.CommaExpected:return c("error.commaExpected","Comma expected")
case p.CloseBraceExpected:return c("error.closeBraceExpected","Closing brace expected")
case p.CloseBracketExpected:return c("error.closeBracketExpected","Closing bracket expected")
case p.EndOfFileExpected:return c("error.endOfFileExpected","End of file expected")
default:return""}},t.getLocation=function(e,t){function n(e,t,n,r){c.value=e,c.offset=t,c.length=n,c.type=r,c.columnOffset=void 0,o=c}var r=[],i=new Object,o=void 0,c={value:void 0,offset:void 0,length:void 0,type:void 0},u=!1
try{s(e,{onObjectBegin:function(e,n){if(t<=e)throw i
o=void 0,u=t>e,r.push("")},onObjectProperty:function(e,o,a){if(t<o)throw i
if(n(e,o,a,"property"),r[r.length-1]=e,t<=o+a)throw i},onObjectEnd:function(e,n){if(t<=e)throw i
o=void 0,r.pop()},onArrayBegin:function(e,n){if(t<=e)throw i
o=void 0,r.push(0)},onArrayEnd:function(e,n){if(t<=e)throw i
o=void 0,r.pop()},onLiteralValue:function(e,r,o){if(t<r)throw i
if(n(e,r,o,a(e)),t<=r+o)throw i},onSeparator:function(e,n,a){if(t<=n)throw i
if(":"===e&&"property"===o.type)o.columnOffset=n,u=!1,o=void 0
else if(","===e){var s=r[r.length-1]
"number"==typeof s?r[r.length-1]=s+1:(u=!0,r[r.length-1]=""),o=void 0}}})}catch(e){if(e!==i)throw e}return""===r[r.length-1]&&r.pop(),{path:r,previousNode:o,isAtPropertyKey:u,matches:function(e){for(var t=0,n=0;t<e.length&&n<r.length;n++)if(e[t]===r[n]||"*"===e[t])t++
else if("**"!==e[t])return!1
return t===e.length}}},t.parse=function(e,t,n){function r(e){Array.isArray(o)?o.push(e):i&&(o[i]=e)}void 0===t&&(t=[])
var i=null,o=[],a=[]
return s(e,{onObjectBegin:function(){var e={}
r(e),a.push(o),o=e,i=null},onObjectProperty:function(e){i=e},onObjectEnd:function(){o=a.pop()},onArrayBegin:function(){var e=[]
r(e),a.push(o),o=e,i=null},onArrayEnd:function(){o=a.pop()},onLiteralValue:r,onError:function(e){t.push({error:e})}},n),o[0]},t.parseTree=function(e,t,n){function r(e){"property"===o.type&&(o.length=e-o.offset,o=o.parent)}function i(e){return o.children.push(e),r(e.offset+e.length),e}void 0===t&&(t=[])
var o={type:"array",offset:-1,length:-1,children:[]}
s(e,{onObjectBegin:function(e){o=i({type:"object",offset:e,length:-1,parent:o,children:[]})},onObjectProperty:function(e,t,n){(o=i({type:"property",offset:t,length:-1,parent:o,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:o})},onObjectEnd:function(e,t){r(e),o.length=e+t-o.offset,o=o.parent},onArrayBegin:function(e,t){o=i({type:"array",offset:e,length:-1,parent:o,children:[]})},onArrayEnd:function(e,t){o.length=e+t-o.offset,o=o.parent},onLiteralValue:function(e,t,n){i({type:a(e),offset:t,length:n,parent:o,value:e})},onSeparator:function(e,t,n){"property"===o.type&&(":"===e?o.columnOffset=t:","===e&&r(t))},onError:function(e){t.push({error:e})}},n)
var c=o.children[0]
return c&&delete c.parent,c},t.findNodeAtLocation=function(e,t){if(e){for(var n=e,r=0,i=t;r<i.length;r++){var o=i[r]
if("string"==typeof o){if("object"!==n.type)return
for(var a=!1,s=0,c=n.children;s<c.length;s++){var u=c[s]
if(u.children[0].value===o){n=u.children[1],a=!0
break}}if(!a)return}else{var l=o
if("array"!==n.type||l<0||l>=n.children.length)return
n=n.children[l]}}return n}},t.getNodeValue=function e(t){if("array"===t.type)return t.children.map(e)
if("object"===t.type){for(var n={},r=0,i=t.children;r<i.length;r++){var o=i[r]
n[o.children[0].value]=e(o.children[1])}return n}return t.value},t.visit=s}),define("jsonc-parser",["jsonc-parser/main"],function(e){return e})
var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/parser/jsonParser",["require","exports","jsonc-parser","vscode-nls"],e)}(function(e,t){var n=e("jsonc-parser"),r=e("vscode-nls").loadMessageBundle(),i=function(){function e(e,t,n,r,i){this.type=t,this.location=n,this.start=r,this.end=i,this.parent=e}return e.prototype.getPath=function(){var e=this.parent?this.parent.getPath():[]
return null!==this.location&&e.push(this.location),e},e.prototype.getChildNodes=function(){return[]},e.prototype.getValue=function(){},e.prototype.contains=function(e,t){return void 0===t&&(t=!1),e>=this.start&&e<this.end||t&&e===this.end},e.prototype.visit=function(e){return e(this)},e.prototype.getNodeFromOffset=function(e){var t=function(n){if(e>=n.start&&e<n.end){for(var r=n.getChildNodes(),i=0;i<r.length&&r[i].start<=e;i++){var o=t(r[i])
if(o)return o}return n}return null}
return t(this)},e.prototype.getNodeFromOffsetEndInclusive=function(e){var t=function(n){if(e>=n.start&&e<=n.end){for(var r=n.getChildNodes(),i=0;i<r.length&&r[i].start<=e;i++){var o=t(r[i])
if(o)return o}return n}return null}
return t(this)},e.prototype.validate=function(e,t,n,i){var o=this
if(void 0===i&&(i=-1),-1===i||this.contains(i)){if(Array.isArray(e.type)?-1===e.type.indexOf(this.type)&&t.warnings.push({location:{start:this.start,end:this.end},message:e.errorMessage||r("typeArrayMismatchWarning","Incorrect type. Expected one of {0}",e.type.join(", "))}):e.type&&this.type!==e.type&&t.warnings.push({location:{start:this.start,end:this.end},message:e.errorMessage||r("typeMismatchWarning",'Incorrect type. Expected "{0}"',e.type)}),Array.isArray(e.allOf)&&e.allOf.forEach(function(e){o.validate(e,t,n,i)}),e.not){var a=new p,s=[]
this.validate(e.not,a,s,i),a.hasErrors()||t.warnings.push({location:{start:this.start,end:this.end},message:r("notSchemaWarning","Matches a schema that is not allowed.")}),n&&s.forEach(function(e){e.inverted=!e.inverted,n.push(e)})}var c=function(e,i){var a=[],s=null
return e.forEach(function(e){var t=new p,n=[]
if(o.validate(e,t,n),t.hasErrors()||a.push(e),s)if(i||t.hasErrors()||s.validationResult.hasErrors()){var r=t.compare(s.validationResult)
r>0?s={schema:e,validationResult:t,matchingSchemas:n}:0===r&&s.matchingSchemas.push.apply(s.matchingSchemas,n)}else s.matchingSchemas.push.apply(s.matchingSchemas,n),s.validationResult.propertiesMatches+=t.propertiesMatches,s.validationResult.propertiesValueMatches+=t.propertiesValueMatches
else s={schema:e,validationResult:t,matchingSchemas:n}}),a.length>1&&i&&t.warnings.push({location:{start:o.start,end:o.start+1},message:r("oneOfWarning","Matches multiple schemas when only one must validate.")}),null!==s&&(t.merge(s.validationResult),t.propertiesMatches+=s.validationResult.propertiesMatches,t.propertiesValueMatches+=s.validationResult.propertiesValueMatches,n&&n.push.apply(n,s.matchingSchemas)),a.length}
Array.isArray(e.anyOf)&&c(e.anyOf,!1),Array.isArray(e.oneOf)&&c(e.oneOf,!0),Array.isArray(e.enum)&&(-1===e.enum.indexOf(this.getValue())?t.warnings.push({location:{start:this.start,end:this.end},message:r("enumWarning","Value is not an accepted value. Valid values: {0}",JSON.stringify(e.enum))}):t.enumValueMatch=!0),null!==n&&n.push({node:this,schema:e})}},e}()
t.ASTNode=i
var o=function(e){function t(t,n,r,i){e.call(this,t,"null",n,r,i)}return __extends(t,e),t.prototype.getValue=function(){return null},t}(i)
t.NullASTNode=o
var a=function(e){function t(t,n,r,i,o){e.call(this,t,"boolean",n,i,o),this.value=r}return __extends(t,e),t.prototype.getValue=function(){return this.value},t}(i)
t.BooleanASTNode=a
var s=function(e){function t(t,n,r,i){e.call(this,t,"array",n,r,i),this.items=[]}return __extends(t,e),t.prototype.getChildNodes=function(){return this.items},t.prototype.getValue=function(){return this.items.map(function(e){return e.getValue()})},t.prototype.addItem=function(e){return!!e&&(this.items.push(e),!0)},t.prototype.visit=function(e){for(var t=e(this),n=0;n<this.items.length&&t;n++)t=this.items[n].visit(e)
return t},t.prototype.validate=function(t,n,i,o){var a=this
if(void 0===o&&(o=-1),-1===o||this.contains(o)){if(e.prototype.validate.call(this,t,n,i,o),Array.isArray(t.items)){var s=t.items
s.forEach(function(e,t){var r=new p,c=a.items[t]
c?(c.validate(e,r,i,o),n.mergePropertyMatch(r)):a.items.length>=s.length&&n.propertiesValueMatches++}),!1===t.additionalItems&&this.items.length>s.length?n.warnings.push({location:{start:this.start,end:this.end},message:r("additionalItemsWarning","Array has too many items according to schema. Expected {0} or fewer",s.length)}):this.items.length>=s.length&&(n.propertiesValueMatches+=this.items.length-s.length)}else t.items&&this.items.forEach(function(e){var r=new p
e.validate(t.items,r,i,o),n.mergePropertyMatch(r)})
if(t.minItems&&this.items.length<t.minItems&&n.warnings.push({location:{start:this.start,end:this.end},message:r("minItemsWarning","Array has too few items. Expected {0} or more",t.minItems)}),t.maxItems&&this.items.length>t.maxItems&&n.warnings.push({location:{start:this.start,end:this.end},message:r("maxItemsWarning","Array has too many items. Expected {0} or fewer",t.minItems)}),!0===t.uniqueItems){var c=this.items.map(function(e){return e.getValue()})
c.some(function(e,t){return t!==c.lastIndexOf(e)})&&n.warnings.push({location:{start:this.start,end:this.end},message:r("uniqueItemsWarning","Array has duplicate items")})}}},t}(i)
t.ArrayASTNode=s
var c=function(e){function t(t,n,r,i){e.call(this,t,"number",n,r,i),this.isInteger=!0,this.value=Number.NaN}return __extends(t,e),t.prototype.getValue=function(){return this.value},t.prototype.validate=function(t,n,i,o){if(void 0===o&&(o=-1),-1===o||this.contains(o)){var a=!1;("integer"===t.type||Array.isArray(t.type)&&-1!==t.type.indexOf("integer"))&&(a=!0),a&&!0===this.isInteger&&(this.type="integer"),e.prototype.validate.call(this,t,n,i,o),this.type="number"
var s=this.getValue()
"number"==typeof t.multipleOf&&s%t.multipleOf!=0&&n.warnings.push({location:{start:this.start,end:this.end},message:r("multipleOfWarning","Value is not divisible by {0}",t.multipleOf)}),"number"==typeof t.minimum&&(t.exclusiveMinimum&&s<=t.minimum&&n.warnings.push({location:{start:this.start,end:this.end},message:r("exclusiveMinimumWarning","Value is below the exclusive minimum of {0}",t.minimum)}),!t.exclusiveMinimum&&s<t.minimum&&n.warnings.push({location:{start:this.start,end:this.end},message:r("minimumWarning","Value is below the minimum of {0}",t.minimum)})),"number"==typeof t.maximum&&(t.exclusiveMaximum&&s>=t.maximum&&n.warnings.push({location:{start:this.start,end:this.end},message:r("exclusiveMaximumWarning","Value is above the exclusive maximum of {0}",t.maximum)}),!t.exclusiveMaximum&&s>t.maximum&&n.warnings.push({location:{start:this.start,end:this.end},message:r("maximumWarning","Value is above the maximum of {0}",t.maximum)}))}},t}(i)
t.NumberASTNode=c
var u=function(e){function t(t,n,r,i,o){e.call(this,t,"string",n,i,o),this.isKey=r,this.value=""}return __extends(t,e),t.prototype.getValue=function(){return this.value},t.prototype.validate=function(t,n,i,o){(void 0===o&&(o=-1),(-1===o||this.contains(o))&&(e.prototype.validate.call(this,t,n,i,o),t.minLength&&this.value.length<t.minLength&&n.warnings.push({location:{start:this.start,end:this.end},message:r("minLengthWarning","String is shorter than the minimum length of ",t.minLength)}),t.maxLength&&this.value.length>t.maxLength&&n.warnings.push({location:{start:this.start,end:this.end},message:r("maxLengthWarning","String is shorter than the maximum length of ",t.maxLength)}),t.pattern))&&(new RegExp(t.pattern).test(this.value)||n.warnings.push({location:{start:this.start,end:this.end},message:t.errorMessage||r("patternWarning",'String does not match the pattern of "{0}"',t.pattern)}))},t}(i)
t.StringASTNode=u
var l=function(e){function t(t,n){e.call(this,t,"property",null,n.start),this.key=n,n.parent=this,n.location=n.value,this.colonOffset=-1}return __extends(t,e),t.prototype.getChildNodes=function(){return this.value?[this.key,this.value]:[this.key]},t.prototype.setValue=function(e){return this.value=e,null!==e},t.prototype.visit=function(e){return e(this)&&this.key.visit(e)&&this.value&&this.value.visit(e)},t.prototype.validate=function(e,t,n,r){void 0===r&&(r=-1),(-1===r||this.contains(r))&&this.value&&this.value.validate(e,t,n,r)},t}(i)
t.PropertyASTNode=l
var f=function(e){function t(t,n,r,i){e.call(this,t,"object",n,r,i),this.properties=[]}return __extends(t,e),t.prototype.getChildNodes=function(){return this.properties},t.prototype.addProperty=function(e){return!!e&&(this.properties.push(e),!0)},t.prototype.getFirstProperty=function(e){for(var t=0;t<this.properties.length;t++)if(this.properties[t].key.value===e)return this.properties[t]
return null},t.prototype.getKeyList=function(){return this.properties.map(function(e){return e.key.getValue()})},t.prototype.getValue=function(){var e={}
return this.properties.forEach(function(t){var n=t.value&&t.value.getValue()
n&&(e[t.key.getValue()]=n)}),e},t.prototype.visit=function(e){for(var t=e(this),n=0;n<this.properties.length&&t;n++)t=this.properties[n].visit(e)
return t},t.prototype.validate=function(t,n,i,o){var a=this
if(void 0===o&&(o=-1),-1===o||this.contains(o)){e.prototype.validate.call(this,t,n,i,o)
var s={},c=[]
this.properties.forEach(function(e){var t=e.key.value
s[t]=e.value,c.push(t)}),Array.isArray(t.required)&&t.required.forEach(function(e){if(!s[e]){var t=a.parent&&a.parent&&a.parent.key,i=t?{start:t.start,end:t.end}:{start:a.start,end:a.start+1}
n.warnings.push({location:i,message:r("MissingRequiredPropWarning",'Missing property "{0}"',e)})}})
var u=function(e){for(var t=c.indexOf(e);t>=0;)c.splice(t,1),t=c.indexOf(e)}
t.properties&&Object.keys(t.properties).forEach(function(e){u(e)
var r=t.properties[e],a=s[e]
if(a){var c=new p
a.validate(r,c,i,o),n.mergePropertyMatch(c)}}),t.patternProperties&&Object.keys(t.patternProperties).forEach(function(e){var r=new RegExp(e)
c.slice(0).forEach(function(a){if(r.test(a)){u(a)
var c=s[a]
if(c){var l=new p
c.validate(t.patternProperties[e],l,i,o),n.mergePropertyMatch(l)}}})}),t.additionalProperties?c.forEach(function(e){var r=s[e]
if(r){var a=new p
r.validate(t.additionalProperties,a,i,o),n.mergePropertyMatch(a)}}):!1===t.additionalProperties&&c.length>0&&c.forEach(function(e){var t=s[e]
if(t){var i=t.parent
n.warnings.push({location:{start:i.key.start,end:i.key.end},message:r("DisallowedExtraPropWarning","Property {0} is not allowed",e)})}}),t.maxProperties&&this.properties.length>t.maxProperties&&n.warnings.push({location:{start:this.start,end:this.end},message:r("MaxPropWarning","Object has more properties than limit of {0}",t.maxProperties)}),t.minProperties&&this.properties.length<t.minProperties&&n.warnings.push({location:{start:this.start,end:this.end},message:r("MinPropWarning","Object has fewer properties than the required number of {0}",t.minProperties)}),t.dependencies&&Object.keys(t.dependencies).forEach(function(e){if(s[e])if(Array.isArray(t.dependencies[e])){t.dependencies[e].forEach(function(t){s[t]?n.propertiesValueMatches++:n.warnings.push({location:{start:a.start,end:a.end},message:r("RequiredDependentPropWarning","Object is missing property {0} required by property {1}",t,e)})})}else if(t.dependencies[e]){var c=t.dependencies[e],u=new p
a.validate(c,u,i,o),n.mergePropertyMatch(u)}})}},t}(i)
t.ObjectASTNode=f
var p=function(){function e(){this.errors=[],this.warnings=[],this.propertiesMatches=0,this.propertiesValueMatches=0,this.enumValueMatch=!1}return e.prototype.hasErrors=function(){return!!this.errors.length||!!this.warnings.length},e.prototype.mergeAll=function(e){var t=this
e.forEach(function(e){t.merge(e)})},e.prototype.merge=function(e){this.errors=this.errors.concat(e.errors),this.warnings=this.warnings.concat(e.warnings)},e.prototype.mergePropertyMatch=function(e){this.merge(e),this.propertiesMatches++,(e.enumValueMatch||!e.hasErrors()&&e.propertiesMatches)&&this.propertiesValueMatches++},e.prototype.compare=function(e){var t=this.hasErrors()
return t!==e.hasErrors()?t?-1:1:this.enumValueMatch!==e.enumValueMatch?e.enumValueMatch?-1:1:this.propertiesValueMatches!==e.propertiesValueMatches?this.propertiesValueMatches-e.propertiesValueMatches:this.propertiesMatches-e.propertiesMatches},e}()
t.ValidationResult=p
var d=function(){function e(e){this.validationResult=new p}return Object.defineProperty(e.prototype,"errors",{get:function(){return this.validationResult.errors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"warnings",{get:function(){return this.validationResult.warnings},enumerable:!0,configurable:!0}),e.prototype.getNodeFromOffset=function(e){return this.root&&this.root.getNodeFromOffset(e)},e.prototype.getNodeFromOffsetEndInclusive=function(e){return this.root&&this.root.getNodeFromOffsetEndInclusive(e)},e.prototype.visit=function(e){this.root&&this.root.visit(e)},e.prototype.validate=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=-1),this.root&&this.root.validate(e,this.validationResult,t,n)},e}()
t.JSONDocument=d,t.parse=function(e,t){function i(){for(;;){var e=S.scan()
switch(e){case n.SyntaxKind.LineCommentTrivia:case n.SyntaxKind.BlockCommentTrivia:k&&h(r("InvalidCommentTokem","Comments are not allowed"))
break
case n.SyntaxKind.Trivia:case n.SyntaxKind.LineBreakTrivia:break
default:return e}}}function p(e){return S.getToken()===e&&(i(),!0)}function h(e,t,r,o){if(void 0===t&&(t=null),void 0===r&&(r=[]),void 0===o&&(o=[]),0===x.errors.length||x.errors[0].location.start!==S.getTokenOffset()){var a={message:e,location:{start:S.getTokenOffset(),end:S.getTokenOffset()+S.getTokenLength()}}
x.errors.push(a)}if(t&&g(t,!1),r.length+o.length>0)for(var s=S.getToken();s!==n.SyntaxKind.EOF;){if(-1!==r.indexOf(s)){i()
break}if(-1!==o.indexOf(s))break
s=i()}return t}function m(){switch(S.getTokenError()){case n.ScanError.InvalidUnicode:return h(r("InvalidUnicode","Invalid unicode sequence in string")),!0
case n.ScanError.InvalidEscapeCharacter:return h(r("InvalidEscapeCharacter","Invalid escape character in string")),!0
case n.ScanError.UnexpectedEndOfNumber:return h(r("UnexpectedEndOfNumber","Unexpected end of number")),!0
case n.ScanError.UnexpectedEndOfComment:return h(r("UnexpectedEndOfComment","Unexpected end of comment")),!0
case n.ScanError.UnexpectedEndOfString:return h(r("UnexpectedEndOfString","Unexpected end of string")),!0}return!1}function g(e,t){return e.end=S.getTokenOffset()+S.getTokenLength(),t&&i(),e}function v(e,t){var o=y(null,null,!0)
if(!o)return S.getToken()===n.SyntaxKind.Unknown&&S.getTokenValue().match(/^['\w]/)&&h(r("DoubleQuotesExpected","Property keys must be doublequoted")),null
var a=new l(e,o)
return t[o.value]&&x.warnings.push({location:{start:a.key.start,end:a.key.end},message:r("DuplicateKeyWarning","Duplicate object key")}),t[o.value]=!0,S.getToken()!==n.SyntaxKind.ColonToken?h(r("ColonExpected","Colon expected"),a,[],[n.SyntaxKind.CloseBraceToken,n.SyntaxKind.CommaToken]):(a.colonOffset=S.getTokenOffset(),i(),a.setValue(b(a,o.value))?(a.end=a.value.end,a):h(r("ValueExpected","Value expected"),a,[],[n.SyntaxKind.CloseBraceToken,n.SyntaxKind.CommaToken]))}function y(e,t,r){if(S.getToken()!==n.SyntaxKind.StringLiteral)return null
var i=new u(e,t,r,S.getTokenOffset())
return i.value=S.getTokenValue(),m(),g(i,!0)}function b(e,t){return function(e,t){if(S.getToken()!==n.SyntaxKind.OpenBracketToken)return null
var o=new s(e,t,S.getTokenOffset())
i()
var a=0
if(o.addItem(b(o,a++)))for(;p(n.SyntaxKind.CommaToken);)o.addItem(b(o,a++))||T||h(r("ValueExpected","Value expected"))
return S.getToken()!==n.SyntaxKind.CloseBracketToken?h(r("ExpectedCloseBracket","Expected comma or closing bracket"),o):g(o,!0)}(e,t)||function(e,t){if(S.getToken()!==n.SyntaxKind.OpenBraceToken)return null
var o=new f(e,t,S.getTokenOffset())
i()
var a={}
if(o.addProperty(v(o,a)))for(;p(n.SyntaxKind.CommaToken);)o.addProperty(v(o,a))||T||h(r("PropertyExpected","Property expected"))
return S.getToken()!==n.SyntaxKind.CloseBraceToken?h(r("ExpectedCloseBrace","Expected comma or closing brace"),o):g(o,!0)}(e,t)||y(e,t,!1)||function(e,t){if(S.getToken()!==n.SyntaxKind.NumericLiteral)return null
var i=new c(e,t,S.getTokenOffset())
if(!m()){var o=S.getTokenValue()
try{var a=JSON.parse(o)
if("number"!=typeof a)return h(r("InvalidNumberFormat","Invalid number format"),i)
i.value=a}catch(e){return h(r("InvalidNumberFormat","Invalid number format"),i)}i.isInteger=-1===o.indexOf(".")}return g(i,!0)}(e,t)||function(e,t){var r
switch(S.getToken()){case n.SyntaxKind.NullKeyword:r=new o(e,t,S.getTokenOffset())
break
case n.SyntaxKind.TrueKeyword:r=new a(e,t,!0,S.getTokenOffset())
break
case n.SyntaxKind.FalseKeyword:r=new a(e,t,!1,S.getTokenOffset())
break
default:return null}return g(r,!0)}(e,t)}var x=new d(t),S=n.createScanner(e,!1),k=t&&t.disallowComments,T=t&&t.ignoreDanglingComma
return i(),x.root=b(null,null),x.root?S.getToken()!==n.SyntaxKind.EOF&&h(r("End of file expected","End of file expected")):h(r("Invalid symbol","Expected a JSON object, array or literal")),x}}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/configuration",["require","exports","vscode-nls"],e)}(function(e,t){var n=e("vscode-nls").loadMessageBundle()
t.schemaContributions={schemaAssociations:{},schemas:{"http://json-schema.org/draft-04/schema#":{title:n("schema.json","Describes a JSON file using a schema. See json-schema.org for more info."),$schema:"http://json-schema.org/draft-04/schema#",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0}},type:"object",properties:{id:{type:"string",format:"uri",description:n("schema.json.id","A unique identifier for the schema.")},$schema:{type:"string",format:"uri",description:n("schema.json.$schema","The schema to verify this document against ")},title:{type:"string",description:n("schema.json.title","A descriptive title of the element")},description:{type:"string",description:n("schema.json.description","A long description of the element. Used in hover menus and suggestions.")},default:{description:n("schema.json.default","A default value. Used by suggestions.")},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0,description:n("schema.json.multipleOf","A number that should cleanly divide the current value (i.e. have no remainder)")},maximum:{type:"number",description:n("schema.json.maximum","The maximum numerical value, inclusive by default.")},exclusiveMaximum:{type:"boolean",default:!1,description:n("schema.json.exclusiveMaximum","Makes the maximum property exclusive.")},minimum:{type:"number",description:n("schema.json.minimum","The minimum numerical value, inclusive by default.")},exclusiveMinimum:{type:"boolean",default:!1,description:n("schema.json.exclusiveMininum","Makes the minimum property exclusive.")},maxLength:{allOf:[{$ref:"#/definitions/positiveInteger"}],description:n("schema.json.maxLength","The maximum length of a string.")},minLength:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}],description:n("schema.json.minLength","The minimum length of a string.")},pattern:{type:"string",format:"regex",description:n("schema.json.pattern","A regular expression to match the string against. It is not implicitly anchored.")},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{},description:n("schema.json.additionalItems","For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.")},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{},description:n("schema.json.items","For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.")},maxItems:{allOf:[{$ref:"#/definitions/positiveInteger"}],description:n("schema.json.maxItems","The maximum number of items that can be inside an array. Inclusive.")},minItems:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}],description:n("schema.json.minItems","The minimum number of items that can be inside an array. Inclusive.")},uniqueItems:{type:"boolean",default:!1,description:n("schema.json.uniqueItems","If all of the items in the array must be unique. Defaults to false.")},maxProperties:{allOf:[{$ref:"#/definitions/positiveInteger"}],description:n("schema.json.maxProperties","The maximum number of properties an object can have. Inclusive.")},minProperties:{allOf:[{$ref:"#/definitions/positiveIntegerDefault0"}],description:n("schema.json.minProperties","The minimum number of properties an object can have. Inclusive.")},required:{allOf:[{$ref:"#/definitions/stringArray"}],description:n("schema.json.required","An array of strings that lists the names of all properties required on this object.")},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{},description:n("schema.json.additionalProperties","Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.")},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{},description:n("schema.json.definitions","Not used for validation. Place subschemas here that you wish to reference inline with $ref")},properties:{type:"object",additionalProperties:{$ref:"#"},default:{},description:n("schema.json.properties","A map of property names to schemas for each property.")},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{},description:n("schema.json.patternProperties","A map of regular expressions on property names to schemas for matching properties.")},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]},description:n("schema.json.dependencies","A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.")},enum:{type:"array",minItems:1,uniqueItems:!0,description:n("schema.json.enum","The set of literal values that are valid")},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}],description:n("schema.json.type","Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.")},format:{anyOf:[{type:"string",description:n("schema.json.format","Describes the format expected for the value."),enum:["date-time","uri","email","hostname","ipv4","ipv6","regex"]},{type:"string"}]},allOf:{allOf:[{$ref:"#/definitions/schemaArray"}],description:n("schema.json.allOf","An array of schemas, all of which must match.")},anyOf:{allOf:[{$ref:"#/definitions/schemaArray"}],description:n("schema.json.anyOf","An array of schemas, where at least one must match.")},oneOf:{allOf:[{$ref:"#/definitions/schemaArray"}],description:n("schema.json.oneOf","An array of schemas, exactly one of which must match.")},not:{allOf:[{$ref:"#"}],description:n("schema.json.not","A schema which must not match.")}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},default:{}}}}}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/utils/uri",["require","exports"],e)}(function(e,t){function n(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}function r(e){return encodeURIComponent(e).replace(/[!'()*]/g,n)}function i(e){return e}var o=function(){function e(){this._scheme=e._empty,this._authority=e._empty,this._path=e._empty,this._query=e._empty,this._fragment=e._empty,this._formatted=null,this._fsPath=null}return Object.defineProperty(e.prototype,"scheme",{get:function(){return this._scheme},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"authority",{get:function(){return this._authority},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"query",{get:function(){return this._query},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fragment",{get:function(){return this._fragment},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fsPath",{get:function(){var t
this._fsPath||(t=this._authority&&"file"===this.scheme?"//"+this._authority+this._path:e._driveLetterPath.test(this._path)?this._path[1].toLowerCase()+this._path.substr(2):this._path,"win32"===process.platform&&(t=t.replace(/\//g,"\\")),this._fsPath=t)
return this._fsPath},enumerable:!0,configurable:!0}),e.prototype.with=function(t,n,r,i,o){var a=new e
return a._scheme=t||this.scheme,a._authority=n||this.authority,a._path=r||this.path,a._query=i||this.query,a._fragment=o||this.fragment,e._validate(a),a},e.prototype.withScheme=function(e){return this.with(e,void 0,void 0,void 0,void 0)},e.prototype.withAuthority=function(e){return this.with(void 0,e,void 0,void 0,void 0)},e.prototype.withPath=function(e){return this.with(void 0,void 0,e,void 0,void 0)},e.prototype.withQuery=function(e){return this.with(void 0,void 0,void 0,e,void 0)},e.prototype.withFragment=function(e){return this.with(void 0,void 0,void 0,void 0,e)},e.parse=function(t){var n=new e,r=e._parseComponents(t)
return n._scheme=r.scheme,n._authority=decodeURIComponent(r.authority),n._path=decodeURIComponent(r.path),n._query=decodeURIComponent(r.query),n._fragment=decodeURIComponent(r.fragment),e._validate(n),n},e.file=function(t){var n=new e
if(n._scheme="file",(t=t.replace(/\\/g,e._slash))[0]===e._slash&&t[0]===t[1]){var r=t.indexOf(e._slash,2);-1===r?n._authority=t.substring(2):(n._authority=t.substring(2,r),n._path=t.substring(r))}else n._path=t
return n._path[0]!==e._slash&&(n._path=e._slash+n._path),e._validate(n),n},e._parseComponents=function(t){var n={scheme:e._empty,authority:e._empty,path:e._empty,query:e._empty,fragment:e._empty},r=e._regexp.exec(t)
return r&&(n.scheme=r[2]||n.scheme,n.authority=r[4]||n.authority,n.path=r[5]||n.path,n.query=r[7]||n.query,n.fragment=r[9]||n.fragment),n},e.create=function(t,n,r,i,o){return(new e).with(t,n,r,i,o)},e._validate=function(e){if(e.authority&&e.path&&"/"!==e.path[0])throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
if(!e.authority&&0===e.path.indexOf("//"))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')},e.prototype.toString=function(t){return void 0===t&&(t=!1),t?e._asFormatted(this,!0):(this._formatted||(this._formatted=e._asFormatted(this,!1)),this._formatted)},e._asFormatted=function(t,o){var a=o?i:r,s=[],c=t.scheme,u=t.authority,l=t.path,f=t.query,p=t.fragment;(c&&s.push(c,":"),(u||"file"===c)&&s.push("//"),u)&&(-1===(m=(u=u.toLowerCase()).indexOf(":"))?s.push(a(u)):s.push(a(u.substr(0,m)),u.substr(m)))
if(l){var d=e._upperCaseDrive.exec(l)
d&&(l=d[1]+d[2].toLowerCase()+l.substr(d[1].length+d[2].length))
for(var h=0;;){var m
if(-1===(m=l.indexOf(e._slash,h))){s.push(a(l.substring(h)).replace(/[#?]/,n))
break}s.push(a(l.substring(h,m)).replace(/[#?]/,n),e._slash),h=m+1}}return f&&s.push("?",a(f)),p&&s.push("#",a(p)),s.join(e._empty)},e.prototype.toJSON=function(){return{scheme:this.scheme,authority:this.authority,path:this.path,fsPath:this.fsPath,query:this.query,fragment:this.fragment.replace(/URL_MARSHAL_REMOVE.*$/,""),external:this.toString().replace(/#?URL_MARSHAL_REMOVE.*$/,""),$mid:1}},e._empty="",e._slash="/",e._regexp=/^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,e._driveLetterPath=/^\/[a-zA-z]:/,e._upperCaseDrive=/^(\/)?([A-Z]:)/,e}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=o}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonSchemaService",["require","exports","jsonc-parser","../utils/uri","../utils/strings","vscode-nls"],e)}(function(e,t){function n(e){try{var t=i.default.parse(e)
if("file"===t.scheme)return t.fsPath}catch(e){}return e}var r=e("jsonc-parser"),i=e("../utils/uri"),o=e("../utils/strings"),a=e("vscode-nls").loadMessageBundle(),s=function(){function e(e){this.combinedSchemaId="local://combinedSchema/"+encodeURIComponent(e)
try{this.patternRegExp=new RegExp(o.convertSimple2RegExpPattern(e)+"$")}catch(e){this.patternRegExp=null}this.schemas=[],this.combinedSchema=null}return e.prototype.addSchema=function(e){this.schemas.push(e),this.combinedSchema=null},e.prototype.matchesPattern=function(e){return this.patternRegExp&&this.patternRegExp.test(e)},e.prototype.getCombinedSchema=function(e){return this.combinedSchema||(this.combinedSchema=e.createCombinedSchema(this.combinedSchemaId,this.schemas)),this.combinedSchema},e}(),c=function(){function e(e,t,n){this.service=e,this.url=t,n&&(this.unresolvedSchema=this.service.promise.resolve(new u(n)))}return e.prototype.getUnresolvedSchema=function(){return this.unresolvedSchema||(this.unresolvedSchema=this.service.loadSchema(this.url)),this.unresolvedSchema},e.prototype.getResolvedSchema=function(){var e=this
return this.resolvedSchema||(this.resolvedSchema=this.getUnresolvedSchema().then(function(t){return e.service.resolveSchemaContent(t,e.url)})),this.resolvedSchema},e.prototype.clearSchema=function(){this.resolvedSchema=null,this.unresolvedSchema=null},e}(),u=function(){return function(e,t){void 0===t&&(t=[]),this.schema=e,this.errors=t}}()
t.UnresolvedSchema=u
var l=function(){function e(e,t){void 0===t&&(t=[]),this.schema=e,this.errors=t}return e.prototype.getSection=function(e){return this.getSectionRecursive(e,this.schema)},e.prototype.getSectionRecursive=function(e,t){var n=this
if(!t||0===e.length)return t
var r=e.shift()
if(t.properties&&t.properties[r])return this.getSectionRecursive(e,t.properties[r])
if(t.patternProperties)Object.keys(t.patternProperties).forEach(function(i){if(new RegExp(i).test(r))return n.getSectionRecursive(e,t.patternProperties[i])})
else{if(t.additionalProperties)return this.getSectionRecursive(e,t.additionalProperties)
if(r.match("[0-9]+")){if(t.items)return this.getSectionRecursive(e,t.items)
if(Array.isArray(t.items))try{var i=parseInt(r,10)
return t.items[i]?this.getSectionRecursive(e,t.items[i]):null}catch(e){return null}}}return null},e}()
t.ResolvedSchema=l
var f=function(){function e(e,t,n){this.contextService=t,this.requestService=e,this.promiseConstructor=n||Promise,this.callOnDispose=[],this.contributionSchemas={},this.contributionAssociations={},this.schemasById={},this.filePatternAssociations=[],this.filePatternAssociationById={}}return Object.defineProperty(e.prototype,"promise",{get:function(){return this.promiseConstructor},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){for(;this.callOnDispose.length>0;)this.callOnDispose.pop()()},e.prototype.onResourceChange=function(e){var t=this.schemasById[e]
return!!t&&(t.clearSchema(),!0)},e.prototype.normalizeId=function(e){return i.default.parse(e).toString()},e.prototype.setSchemaContributions=function(e){var t=this
if(e.schemas){var n=e.schemas
for(var r in n){var i=this.normalizeId(r)
this.contributionSchemas[i]=this.addSchemaHandle(i,n[r])}}if(e.schemaAssociations){var o=e.schemaAssociations
for(var a in o){var s=o[a]
this.contributionAssociations[a]=s
var c=this.getOrAddFilePatternAssociation(a)
s.forEach(function(e){var n=t.normalizeId(e)
c.addSchema(n)})}}},e.prototype.addSchemaHandle=function(e,t){var n=new c(this,e,t)
return this.schemasById[e]=n,n},e.prototype.getOrAddSchemaHandle=function(e,t){return this.schemasById[e]||this.addSchemaHandle(e,t)},e.prototype.getOrAddFilePatternAssociation=function(e){var t=this.filePatternAssociationById[e]
return t||(t=new s(e),this.filePatternAssociationById[e]=t,this.filePatternAssociations.push(t)),t},e.prototype.registerExternalSchema=function(e,t,n){var r=this
void 0===t&&(t=null)
var i=this.normalizeId(e)
return t&&t.forEach(function(t){r.getOrAddFilePatternAssociation(t).addSchema(e)}),n?this.addSchemaHandle(i,n):this.getOrAddSchemaHandle(i)},e.prototype.clearExternalSchemas=function(){var e=this
for(var t in this.schemasById={},this.filePatternAssociations=[],this.filePatternAssociationById={},this.contributionSchemas)this.schemasById[t]=this.contributionSchemas[t]
for(var n in this.contributionAssociations){var r=this.getOrAddFilePatternAssociation(n)
this.contributionAssociations[n].forEach(function(t){var n=e.normalizeId(t)
r.addSchema(n)})}},e.prototype.getResolvedSchema=function(e){var t=this.normalizeId(e),n=this.schemasById[t]
return n?n.getResolvedSchema():this.promise.resolve(null)},e.prototype.loadSchema=function(e){if(!this.requestService){var t=a("json.schema.norequestservice","Unable to load schema from '{0}'. No schema request service available",n(e))
return this.promise.resolve(new u({},[t]))}return this.requestService(e).then(function(t){if(!t){var i=a("json.schema.nocontent","Unable to load schema from '{0}': No content.",n(e))
return new u({},[i])}var o,s=[]
o=r.parse(t,s)
var c=s.length?[a("json.schema.invalidFormat","Unable to parse content from '{0}': {1}.",n(e),s[0])]:[]
return new u(o,c)},function(t){var r=a("json.schema.unabletoload","Unable to load schema from '{0}': {1}",n(e),t.toString())
return new u({},[r])})},e.prototype.resolveSchemaContent=function(e,t){var n=this,r=e.errors.slice(0),i=e.schema,o=this.contextService,s=function(e,t,n){var i=function(e,t){if(!t)return e
var n=e
return"/"===t[0]&&(t=t.substr(1)),t.split("/").some(function(e){return!(n=n[e])}),n}(t,n)
if(i)for(var o in i)i.hasOwnProperty(o)&&!e.hasOwnProperty(o)&&(e[o]=i[o])
else r.push(a("json.schema.invalidref","$ref '{0}' in {1} can not be resolved.",n,t.id))
delete e.$ref},c=function(e,t,i,c){return o&&!/^\w+:\/\/.*/.test(t)&&(t=o.resolveRelativePath(t,c)),n.getOrAddSchemaHandle(t).getUnresolvedSchema().then(function(n){if(n.errors.length){var o=i?t+"#"+i:t
r.push(a("json.schema.problemloadingref","Problems loading reference '{0}': {1}",o,n.errors[0]))}return s(e,n.schema,i),u(e,n.schema,t)})},u=function(e,t,r){for(var i=[e],o=[],a=[],u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var o=r[n]
"object"==typeof o&&i.push(o)}},l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var o=r[n]
if("object"==typeof o)for(var a in o){var s=o[a]
i.push(s)}}},f=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var o=r[n]
Array.isArray(o)&&i.push.apply(i,o)}};i.length;){var p=i.pop()
if(!(o.indexOf(p)>=0)){if(o.push(p),p.$ref){var d=p.$ref.split("#",2)
if(d[0].length>0){a.push(c(p,d[0],d[1],r))
continue}s(p,t,d[1])}u(p.items,p.additionalProperties,p.not),l(p.definitions,p.properties,p.patternProperties,p.dependencies),f(p.anyOf,p.allOf,p.oneOf,p.items)}}return n.promise.all(a)}
return u(i,i,t).then(function(e){return new l(i,r)})},e.prototype.getSchemaForResource=function(e,t){if(t&&t.root&&"object"===t.root.type){var n=t.root.properties.filter(function(e){return"$schema"===e.key.value&&!!e.value})
if(n.length>0){var r=n[0].value.getValue()
if(o.startsWith(r,".")&&this.contextService&&(r=this.contextService.resolveRelativePath(r,e)),r){var i=this.normalizeId(r)
return this.getOrAddSchemaHandle(i).getResolvedSchema()}}}for(var a=this.filePatternAssociations.length-1;a>=0;a--){var s=this.filePatternAssociations[a]
if(s.matchesPattern(e))return s.getCombinedSchema(this).getResolvedSchema()}return this.promise.resolve(null)},e.prototype.createCombinedSchema=function(e,t){if(1===t.length)return this.getOrAddSchemaHandle(t[0])
var n={allOf:t.map(function(e){return{$ref:e}})}
return this.addSchemaHandle(e,n)},e}()
t.JSONSchemaService=f}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/services/jsonFormatter",["require","exports","jsonc-parser","vscode-languageserver-types"],e)}(function(e,t){function n(e,t){for(var n="",r=0;r<t;r++)n+=e
return n}function r(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}var i=e("jsonc-parser"),o=e("vscode-languageserver-types")
t.format=function(e,t,a){function s(){return y+n(v,l+x)}function c(){var e=S.scan()
for(b=!1;e===i.SyntaxKind.Trivia||e===i.SyntaxKind.LineBreakTrivia;)b=b||e===i.SyntaxKind.LineBreakTrivia,e=S.scan()
return e}function u(t,n,r){if(d.substring(n,r)!==t){var i=o.Range.create(e.positionAt(n),e.positionAt(r))
k.push(o.TextEdit.replace(i,t))}}var l,f,p,d=e.getText()
if(t){var h=o.Position.create(t.start.line,0)
p=e.offsetAt(h)
for(var m=e.offsetAt(o.Position.create(t.end.line+1,0)),g=e.offsetAt(o.Position.create(t.end.line,0));m>g&&r(d,m-1);)m--
t=o.Range.create(h,e.positionAt(m)),f=d.substring(p,m),l=function(e,t,n){for(var r=0,i=0,o=n.tabSize||4;r<e.length;){var a=e.charAt(r)
if(" "===a)i++
else{if("\t"!==a)break
i+=o}r++}return Math.floor(i/o)}(f,0,a)}else f=d,t=o.Range.create(o.Position.create(0,0),e.positionAt(f.length)),l=0,p=0
var v,y=function(e){var t=e.getText()
if(e.lineCount>1){for(var n=e.offsetAt(o.Position.create(1,0)),i=n;i>0&&r(t,i-1);)i--
return t.substr(i,n-i)}return"\n"}(e),b=!1,x=0
v=a.insertSpaces?n(" ",a.tabSize):"\t"
var S=i.createScanner(f,!1),k=[],T=c()
if(T!==i.SyntaxKind.EOF){var O=S.getTokenOffset()+p
u(n(v,l),p,O)}for(;T!==i.SyntaxKind.EOF;){for(var E=S.getTokenOffset()+S.getTokenLength()+p,C=c(),w="";!b&&(C===i.SyntaxKind.LineCommentTrivia||C===i.SyntaxKind.BlockCommentTrivia);)u(" ",E,S.getTokenOffset()+p),E=S.getTokenOffset()+S.getTokenLength()+p,w=C===i.SyntaxKind.LineCommentTrivia?s():"",C=c()
if(C===i.SyntaxKind.CloseBraceToken)T!==i.SyntaxKind.OpenBraceToken&&(x--,w=s())
else if(C===i.SyntaxKind.CloseBracketToken)T!==i.SyntaxKind.OpenBracketToken&&(x--,w=s())
else{switch(T){case i.SyntaxKind.OpenBracketToken:case i.SyntaxKind.OpenBraceToken:x++,w=s()
break
case i.SyntaxKind.CommaToken:case i.SyntaxKind.LineCommentTrivia:w=s()
break
case i.SyntaxKind.BlockCommentTrivia:w=b?s():" "
break
case i.SyntaxKind.ColonToken:w=" "
break
case i.SyntaxKind.NullKeyword:case i.SyntaxKind.TrueKeyword:case i.SyntaxKind.FalseKeyword:case i.SyntaxKind.NumericLiteral:C!==i.SyntaxKind.NullKeyword&&C!==i.SyntaxKind.FalseKeyword&&C!==i.SyntaxKind.NumericLiteral||(w=" ")}!b||C!==i.SyntaxKind.LineCommentTrivia&&C!==i.SyntaxKind.BlockCommentTrivia||(w=s())}u(w,E,S.getTokenOffset()+p),T=C}return k}}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-json-languageservice/jsonLanguageService",["require","exports","vscode-languageserver-types","./services/jsonCompletion","./services/jsonHover","./services/jsonValidation","./services/jsonDocumentSymbols","./parser/jsonParser","./services/configuration","./services/jsonSchemaService","./services/jsonFormatter"],e)}(function(e,t){var n=e("vscode-languageserver-types")
t.TextDocument=n.TextDocument,t.Position=n.Position,t.CompletionItem=n.CompletionItem,t.CompletionList=n.CompletionList,t.Range=n.Range,t.SymbolInformation=n.SymbolInformation,t.Diagnostic=n.Diagnostic,t.TextEdit=n.TextEdit,t.FormattingOptions=n.FormattingOptions
var r=e("./services/jsonCompletion"),i=e("./services/jsonHover"),o=e("./services/jsonValidation"),a=e("./services/jsonDocumentSymbols"),s=e("./parser/jsonParser"),c=e("./services/configuration"),u=e("./services/jsonSchemaService"),l=e("./services/jsonFormatter")
t.getLanguageService=function(e){var t=e.promiseConstructor||Promise,n=new u.JSONSchemaService(e.schemaRequestService,e.workspaceContext,t)
n.setSchemaContributions(c.schemaContributions)
var f=new r.JSONCompletion(n,e.contributions,t),p=new i.JSONHover(n,e.contributions,t),d=new a.JSONDocumentSymbols,h=new o.JSONValidation(n,t),m=!1
return{configure:function(e){n.clearExternalSchemas(),e.schemas&&e.schemas.forEach(function(e){n.registerExternalSchema(e.uri,e.fileMatch,e.schema)}),h.configure(e),m=e&&!e.allowComments},resetSchema:function(e){return n.onResourceChange(e)},doValidation:h.doValidation.bind(h),parseJSONDocument:function(e){return s.parse(e.getText(),{disallowComments:m})},doResolve:f.doResolve.bind(f),doComplete:f.doComplete.bind(f),findDocumentSymbols:d.findDocumentSymbols.bind(d),doHover:p.doHover.bind(p),format:l.format}}}),define("vscode-json-languageservice",["vscode-json-languageservice/jsonLanguageService"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports)
void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vs/language/json/jsonWorker",["require","exports","vscode-json-languageservice","vscode-languageserver-types"],e)}(function(e,t){var n=monaco.Promise,r=e("vscode-json-languageservice"),i=e("vscode-languageserver-types"),o=function(){function e(e){this.wrapped=new monaco.Promise(e)}return e.prototype.then=function(e,t){return this.wrapped.then(e,t)},e.prototype.getWrapped=function(){return this.wrapped},e.prototype.cancel=function(){this.wrapped.cancel()},e.resolve=function(e){return monaco.Promise.as(e)},e.reject=function(e){return monaco.Promise.wrapError(e)},e.all=function(e){return monaco.Promise.join(e)},e}(),a=function(){function e(e,t){this._ctx=e,this._languageSettings=t.languageSettings,this._languageId=t.languageId,this._languageService=r.getLanguageService({promiseConstructor:o}),this._languageService.configure(this._languageSettings)}return e.prototype.doValidation=function(e){var t=this._getTextDocument(e),n=this._languageService.parseJSONDocument(t)
return this._languageService.doValidation(t,n)},e.prototype.doComplete=function(e,t){var n=this._getTextDocument(e),r=this._languageService.parseJSONDocument(n)
return this._languageService.doComplete(n,t,r)},e.prototype.doResolve=function(e){return this._languageService.doResolve(e)},e.prototype.doHover=function(e,t){var n=this._getTextDocument(e),r=this._languageService.parseJSONDocument(n)
return this._languageService.doHover(n,t,r)},e.prototype.format=function(e,t,r){var i=this._getTextDocument(e),o=this._languageService.format(i,t,r)
return n.as(o)},e.prototype.resetSchema=function(e){return n.as(this._languageService.resetSchema(e))},e.prototype.findDocumentSymbols=function(e){var t=this._getTextDocument(e),r=this._languageService.parseJSONDocument(t),i=this._languageService.findDocumentSymbols(t,r)
return n.as(i)},e.prototype._getTextDocument=function(e){for(var t=0,n=this._ctx.getMirrorModels();t<n.length;t++){var r=n[t]
if(r.uri.toString()===e)return i.TextDocument.create(e,this._languageId,r.version,r.getValue())}return null},e}()
t.JSONWorker=a,t.create=function(e,t){return new a(e,t)}})
