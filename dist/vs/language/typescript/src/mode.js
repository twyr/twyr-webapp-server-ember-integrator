define("vs/language/typescript/src/tokenization",["require","exports","../lib/typescriptServices"],function(e,t,n){function r(e,t,r,a,s){function c(e,t){0!==u.tokens.length&&u.tokens[u.tokens.length-1].scopes===t||u.tokens.push({startIndex:e,scopes:t})}var u={tokens:[],endState:new i(a.language,n.EndOfLineState.None,!1)},l=a.language===o.TypeScript
if(!l&&function(e,t,n){return 0===t.indexOf("#!")?(n(e,"comment.shebang"),!0):void 0}(0,s,c))return u
var p=r.getClassificationsForLine(s,a.eolState,!0),m=0
u.endState.eolState=p.finalLexState,u.endState.inJsDocComment=p.finalLexState===n.EndOfLineState.InMultiLineCommentTrivia&&(a.inJsDocComment||/\/\*\*.*$/.test(s))
for(var g=0,d=p.entries;g<d.length;g++){var f=d[g]
if(f.classification===n.TokenClass.Punctuation)c(m,e[s.charCodeAt(m)]||t[f.classification])
else f.classification===n.TokenClass.Comment?u.endState.inJsDocComment||/\/\*\*.*\*\//.test(s.substr(m,f.length))?c(m,l?"comment.doc.ts":"comment.doc.js"):c(m,l?"comment.ts":"comment.js"):c(m,t[f.classification]||"")
m+=f.length}return u}!function(e){e[e.TypeScript=0]="TypeScript",e[e.EcmaScript5=1]="EcmaScript5"}(t.Language||(t.Language={}))
var o=t.Language
t.createTokenizationSupport=function(e){var t=n.createClassifier(),l=e===o.TypeScript?a:c,p=e===o.TypeScript?s:u
return{getInitialState:function(){return new i(e,n.EndOfLineState.None,!1)},tokenize:function(e,n){return r(l,p,t,n,e)}}}
var i=function(){function e(e,t,n){this.language=e,this.eolState=t,this.inJsDocComment=n}return e.prototype.clone=function(){return new e(this.language,this.eolState,this.inJsDocComment)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.eolState===t.eolState&&this.inJsDocComment===t.inJsDocComment)},e}(),a=Object.create(null)
a["(".charCodeAt(0)]="delimiter.parenthesis.ts",a[")".charCodeAt(0)]="delimiter.parenthesis.ts",a["{".charCodeAt(0)]="delimiter.bracket.ts",a["}".charCodeAt(0)]="delimiter.bracket.ts",a["[".charCodeAt(0)]="delimiter.array.ts",a["]".charCodeAt(0)]="delimiter.array.ts"
var s=Object.create(null)
s[n.TokenClass.Identifier]="identifier.ts",s[n.TokenClass.Keyword]="keyword.ts",s[n.TokenClass.Operator]="delimiter.ts",s[n.TokenClass.Punctuation]="delimiter.ts",s[n.TokenClass.NumberLiteral]="number.ts",s[n.TokenClass.RegExpLiteral]="regexp.ts",s[n.TokenClass.StringLiteral]="string.ts"
var c=Object.create(null)
c["(".charCodeAt(0)]="delimiter.parenthesis.js",c[")".charCodeAt(0)]="delimiter.parenthesis.js",c["{".charCodeAt(0)]="delimiter.bracket.js",c["}".charCodeAt(0)]="delimiter.bracket.js",c["[".charCodeAt(0)]="delimiter.array.js",c["]".charCodeAt(0)]="delimiter.array.js"
var u=Object.create(null)
u[n.TokenClass.Identifier]="identifier.js",u[n.TokenClass.Keyword]="keyword.js",u[n.TokenClass.Operator]="delimiter.js",u[n.TokenClass.Punctuation]="delimiter.js",u[n.TokenClass.NumberLiteral]="number.js",u[n.TokenClass.RegExpLiteral]="regexp.js",u[n.TokenClass.StringLiteral]="string.js"}),define("vs/language/typescript/src/workerManager",["require","exports"],function(e,t){function n(e){var t,n,o=new r(function(e,r){t=e,n=r},function(){})
return e.then(t,n),o}var r=monaco.Promise,o=function(){function e(e){var t=this
this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/src/worker",createData:{compilerOptions:this._defaults.compilerOptions,extraLibs:this._defaults.extraLibs}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r]
var o
return n(this._getClient().then(function(e){o=e}).then(function(n){return e._worker.withSyncedResources(t)}).then(function(e){return o}))},e}()
t.WorkerManager=o})
var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}
define("vs/language/typescript/src/languageFeatures",["require","exports","../lib/typescriptServices"],function(e,t,n){function r(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}var o=monaco.Uri,i=monaco.Promise,a=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,t){var n=this._offsetToPosition(e,t.start),r=this._offsetToPosition(e,t.start+t.length)
return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}()
t.Adapter=a
var s=function(e){function t(t,n,r){var o=this
e.call(this,r),this._defaults=t,this._selector=n,this._disposables=[],this._listener=Object.create(null)
var i=function(e){var t
e.getModeId()===n&&(o._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return o._doValidate(e.uri)},500)}),o._doValidate(e.uri))},a=function(e){delete o._listener[e.uri.toString()]}
this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(a)),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){a(e.model),i(e.model)})),this._disposables.push({dispose:function(){for(var e in o._listener)o._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return __extends(t,e),t.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},t.prototype._doValidate=function(e){var t=this
this._worker(e).then(function(n){var r=[]
return t._defaults.diagnosticsOptions.noSyntaxValidation||r.push(n.getSyntacticDiagnostics(e.toString())),t._defaults.diagnosticsOptions.noSemanticValidation||r.push(n.getSemanticDiagnostics(e.toString())),i.join(r)}).then(function(n){var r=n.reduce(function(e,t){return t.concat(e)},[]).map(function(n){return t._convertDiagnostics(e,n)})
monaco.editor.setModelMarkers(monaco.editor.getModel(e),t._selector,r)}).done(void 0,function(e){console.error(e)})},t.prototype._convertDiagnostics=function(e,t){var r=this._offsetToPosition(e,t.start),o=r.lineNumber,i=r.column,a=this._offsetToPosition(e,t.start+t.length),s=a.lineNumber,c=a.column
return{severity:monaco.Severity.Error,startLineNumber:o,startColumn:i,endLineNumber:s,endColumn:c,message:n.flattenDiagnosticMessageText(t.messageText,"\n")}},t}(a)
t.DiagnostcsAdapter=s
var c=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,o){var i=(e.getWordUntilPosition(n),e.uri),a=this._positionToOffset(i,n)
return r(o,this._worker(i).then(function(e){return e.getCompletionsAtPosition(i.toString(),a)}).then(function(e){if(e)return e.entries.map(function(e){return{uri:i,position:n,label:e.name,sortText:e.sortText,kind:t.convertKind(e.kind)}})}))},t.prototype.resolveCompletionItem=function(e,o){var i=this,a=e,s=a.uri,c=a.position
return r(o,this._worker(s).then(function(e){return e.getCompletionEntryDetails(s.toString(),i._positionToOffset(s,c),a.label)}).then(function(e){return e?{uri:s,position:c,label:e.name,kind:t.convertKind(e.kind),detail:n.displayPartsToString(e.displayParts),documentation:n.displayPartsToString(e.documentation)}:a}))},t.convertKind=function(e){switch(e){case f.primitiveType:case f.keyword:return monaco.languages.CompletionItemKind.Keyword
case f.variable:case f.localVariable:return monaco.languages.CompletionItemKind.Variable
case f.memberVariable:case f.memberGetAccessor:case f.memberSetAccessor:return monaco.languages.CompletionItemKind.Field
case f.function:case f.memberFunction:case f.constructSignature:case f.callSignature:case f.indexSignature:return monaco.languages.CompletionItemKind.Function
case f.enum:return monaco.languages.CompletionItemKind.Enum
case f.module:return monaco.languages.CompletionItemKind.Module
case f.class:return monaco.languages.CompletionItemKind.Class
case f.interface:return monaco.languages.CompletionItemKind.Interface
case f.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},t}(a)
t.SuggestAdapter=c
var u=function(e){function t(){e.apply(this,arguments),this.signatureHelpTriggerCharacters=["(",","]}return __extends(t,e),t.prototype.provideSignatureHelp=function(e,t,o){var i=this,a=e.uri
return r(o,this._worker(a).then(function(e){return e.getSignatureHelpItems(a.toString(),i._positionToOffset(a,t))}).then(function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]}
return e.items.forEach(function(e){var r={label:"",documentation:null,parameters:[]}
r.label+=n.displayPartsToString(e.prefixDisplayParts),e.parameters.forEach(function(t,o,i){var a=n.displayPartsToString(t.displayParts),s={label:a,documentation:n.displayPartsToString(t.documentation)}
r.label+=a,r.parameters.push(s),o<i.length-1&&(r.label+=n.displayPartsToString(e.separatorDisplayParts))}),r.label+=n.displayPartsToString(e.suffixDisplayParts),t.signatures.push(r)}),t}}))},t}(a)
t.SignatureHelpAdapter=u
var l=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.provideHover=function(e,t,o){var i=this,a=e.uri
return r(o,this._worker(a).then(function(e){return e.getQuickInfoAtPosition(a.toString(),i._positionToOffset(a,t))}).then(function(e){if(e){var t=n.displayPartsToString(e.displayParts)
return{range:i._textSpanToRange(a,e.textSpan),contents:[t]}}}))},t}(a)
t.QuickInfoAdapter=l
var p=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){var o=this,i=e.uri
return r(n,this._worker(i).then(function(e){return e.getOccurrencesAtPosition(i.toString(),o._positionToOffset(i,t))}).then(function(e){return e?e.map(function(e){return{range:o._textSpanToRange(i,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}}):void 0}))},t}(a)
t.OccurrencesAdapter=p
var m=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.provideDefinition=function(e,t,n){var i=this,a=e.uri
return r(n,this._worker(a).then(function(e){return e.getDefinitionAtPosition(a.toString(),i._positionToOffset(a,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var a=r[n],s=o.parse(a.fileName)
monaco.editor.getModel(s)&&t.push({uri:s,range:i._textSpanToRange(s,a.textSpan)})}return t}}))},t}(a)
t.DefinitionAdapter=m
var g=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.provideReferences=function(e,t,n,i){var a=this,s=e.uri
return r(i,this._worker(s).then(function(e){return e.getReferencesAtPosition(s.toString(),a._positionToOffset(s,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n],s=o.parse(i.fileName)
monaco.editor.getModel(s)&&t.push({uri:s,range:a._textSpanToRange(s,i.textSpan)})}return t}}))},t}(a)
t.ReferenceAdapter=g
var d=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.provideDocumentSymbols=function(e,t){var n=e.uri
return r(t,this._worker(n).then(function(e){return e.getNavigationBarItems(n.toString())}).then(function(e){if(e){var t=[]
return e.forEach(function(e){return function e(t,r,o){var i={name:r.text,kind:h[r.kind]||monaco.languages.SymbolKind.Variable,location:{uri:n,range:this._textSpanToRange(n,r.spans[0])},containerName:o}
if(r.childItems&&r.childItems.length>0)for(var a=0,s=r.childItems;a<s.length;a++)e(t,s[a],i.name)
t.push(i)}(t,e)}),t}}))},t}(a)
t.OutlineAdapter=d
var f=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}()
t.Kind=f
var h=Object.create(null)
h[f.module]=monaco.languages.SymbolKind.Module,h[f.class]=monaco.languages.SymbolKind.Class,h[f.enum]=monaco.languages.SymbolKind.Enum,h[f.interface]=monaco.languages.SymbolKind.Interface,h[f.memberFunction]=monaco.languages.SymbolKind.Method,h[f.memberVariable]=monaco.languages.SymbolKind.Property,h[f.memberGetAccessor]=monaco.languages.SymbolKind.Property,h[f.memberSetAccessor]=monaco.languages.SymbolKind.Property,h[f.variable]=monaco.languages.SymbolKind.Variable,h[f.const]=monaco.languages.SymbolKind.Variable,h[f.localVariable]=monaco.languages.SymbolKind.Variable,h[f.variable]=monaco.languages.SymbolKind.Variable,h[f.function]=monaco.languages.SymbolKind.Function,h[f.localFunction]=monaco.languages.SymbolKind.Function
var v=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:n.IndentStyle.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!1,InsertSpaceAfterKeywordsInControlFlowStatements:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!0,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!0,InsertSpaceAfterSemicolonInForStatements:!1,InsertSpaceBeforeAndAfterBinaryOperators:!0,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(a)
t.FormatHelper=v
var y=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,o){var i=this,a=e.uri
return r(o,this._worker(a).then(function(e){return e.getFormattingEditsForRange(a.toString(),i._positionToOffset(a,{lineNumber:t.startLineNumber,column:t.startColumn}),i._positionToOffset(a,{lineNumber:t.endLineNumber,column:t.endColumn}),v._convertOptions(n))}).then(function(e){return e?e.map(function(e){return i._convertTextChanges(a,e)}):void 0}))},t}(v)
t.FormatAdapter=y
var S=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,o,i){var a=this,s=e.uri
return r(i,this._worker(s).then(function(e){return e.getFormattingEditsAfterKeystroke(s.toString(),a._positionToOffset(s,t),n,v._convertOptions(o))}).then(function(e){return e?e.map(function(e){return a._convertTextChanges(s,e)}):void 0}))},t}(v)
t.FormatOnTypeAdapter=S}),define("vs/language/typescript/src/mode",["require","exports","./tokenization","./workerManager","./languageFeatures"],function(e,t,n,r,o){function i(e,t,i){var s=[],c=new r.WorkerManager(e)
s.push(c)
var u=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return c.getLanguageServiceWorker.apply(c,[e].concat(t))}
s.push(monaco.languages.registerCompletionItemProvider(t,new o.SuggestAdapter(u))),s.push(monaco.languages.registerSignatureHelpProvider(t,new o.SignatureHelpAdapter(u))),s.push(monaco.languages.registerHoverProvider(t,new o.QuickInfoAdapter(u))),s.push(monaco.languages.registerDocumentHighlightProvider(t,new o.OccurrencesAdapter(u))),s.push(monaco.languages.registerDefinitionProvider(t,new o.DefinitionAdapter(u))),s.push(monaco.languages.registerReferenceProvider(t,new o.ReferenceAdapter(u))),s.push(monaco.languages.registerDocumentSymbolProvider(t,new o.OutlineAdapter(u))),s.push(monaco.languages.registerDocumentRangeFormattingEditProvider(t,new o.FormatAdapter(u))),s.push(monaco.languages.registerOnTypeFormattingEditProvider(t,new o.FormatOnTypeAdapter(u))),s.push(new o.DiagnostcsAdapter(e,t,u)),s.push(monaco.languages.setLanguageConfiguration(t,a)),s.push(monaco.languages.setTokensProvider(t,n.createTokenizationSupport(i)))}t.setupTypeScript=function(e){i(e,"typescript",n.Language.TypeScript)},t.setupJavaScript=function(e){i(e,"javascript",n.Language.EcmaScript5)}
var a={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:monaco.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:monaco.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:monaco.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:monaco.languages.IndentAction.None,removeText:1}}],__electricCharacterSupport:{docComment:{scope:"comment.doc",open:"/**",lineStart:" * ",close:" */"}},autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`"}]}})
