"use strict"
var define,AMDLoader,_amdLoaderGlobal=this
!function(e){function t(){return L?b.performance.now():Date.now()}var n=!!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0)||"undefined"!=typeof process&&"win32"===process.platform,o=function(){function e(){}return e.fileUriToFilePath=function(e){if(e=decodeURI(e),n){if(/^file:\/\/\//.test(e))return e.substr(8)
if(/^file:\/\//.test(e))return e.substr(5)}else if(/^file:\/\//.test(e))return e.substr(7)
return e},e.startsWith=function(e,t){return e.length>=t.length&&e.substr(0,t.length)===t},e.endsWith=function(e,t){return e.length>=t.length&&e.substr(e.length-t.length)===t},e.containsQueryString=function(e){return/^[^\#]*\?/gi.test(e)},e.isAbsolutePath=function(t){return e.startsWith(t,"http://")||e.startsWith(t,"https://")||e.startsWith(t,"file://")||e.startsWith(t,"/")},e.forEachProperty=function(e,t){var n
if(e)for(n in e)e.hasOwnProperty(n)&&t(n,e[n])},e.isEmpty=function(t){var n=!0
return e.forEachProperty(t,function(){n=!1}),n},e.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},e.recursiveClone=function(t){if(!t||"object"!=typeof t)return t
var n=e.isArray(t)?[]:{}
return e.forEachProperty(t,function(t,o){n[t]=o&&"object"==typeof o?e.recursiveClone(o):o}),n},e.generateAnonymousModule=function(){return"===anonymous"+e.NEXT_ANONYMOUS_ID+++"==="},e.isAnonymousModule=function(e){return 0===e.indexOf("===anonymous")},e.NEXT_ANONYMOUS_ID=1,e}()
e.Utilities=o
var r=function(){function e(){}return e.validateConfigurationOptions=function(e){return"string"!=typeof(e=e||{}).baseUrl&&(e.baseUrl=""),"boolean"!=typeof e.isBuild&&(e.isBuild=!1),"object"!=typeof e.paths&&(e.paths={}),"object"!=typeof e.bundles&&(e.bundles=[]),"object"!=typeof e.shim&&(e.shim={}),"object"!=typeof e.config&&(e.config={}),void 0===e.catchError&&(e.catchError=p),"string"!=typeof e.urlArgs&&(e.urlArgs=""),"function"!=typeof e.onError&&(e.onError=function(e){return"load"===e.errorCode?(console.error('Loading "'+e.moduleId+'" failed'),console.error("Detail: ",e.detail),e.detail&&e.detail.stack&&console.error(e.detail.stack),console.error("Here are the modules that depend on it:"),void console.error(e.neededBy)):"factory"===e.errorCode?(console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),console.error(e.detail),void(e.detail&&e.detail.stack&&console.error(e.detail.stack))):void 0}),"object"==typeof e.ignoreDuplicateModules&&o.isArray(e.ignoreDuplicateModules)||(e.ignoreDuplicateModules=[]),e.baseUrl.length>0&&(o.endsWith(e.baseUrl,"/")||(e.baseUrl+="/")),Array.isArray(e.nodeModules)||(e.nodeModules=[]),e},e.mergeConfigurationOptions=function(t,n){void 0===t&&(t=null),void 0===n&&(n=null)
var r=o.recursiveClone(n||{})
return o.forEachProperty(t,function(e,t){"bundles"===e&&void 0!==r.bundles?o.isArray(t)?r.bundles=r.bundles.concat(t):o.forEachProperty(t,function(e,t){var n={location:e,modules:t}
r.bundles.push(n)}):"ignoreDuplicateModules"===e&&void 0!==r.ignoreDuplicateModules?r.ignoreDuplicateModules=r.ignoreDuplicateModules.concat(t):"paths"===e&&void 0!==r.paths?o.forEachProperty(t,function(e,t){return r.paths[e]=t}):"shim"===e&&void 0!==r.shim?o.forEachProperty(t,function(e,t){return r.shim[e]=t}):"config"===e&&void 0!==r.config?o.forEachProperty(t,function(e,t){return r.config[e]=t}):r[e]=o.recursiveClone(t)}),e.validateConfigurationOptions(r)},e}()
e.ConfigurationOptionsUtil=r
var i=function(){function e(e){if(this.options=r.mergeConfigurationOptions(e),this._createIgnoreDuplicateModulesMap(),this._createSortedPathsRules(),this._createShimModules(),this._createOverwriteModuleIdToPath(),""===this.options.baseUrl){if(g&&this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename){var t=this.options.nodeRequire.main.filename,n=Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))
this.options.baseUrl=t.substring(0,n+1)}if(g&&this.options.nodeMain){t=this.options.nodeMain,n=Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))
this.options.baseUrl=t.substring(0,n+1)}}}return e.prototype._createOverwriteModuleIdToPath=function(){this.overwriteModuleIdToPath={}
for(var e=0;e<this.options.bundles.length;e++){var t=this.options.bundles[e],n=t.location
if(t.modules)for(var o=0;o<t.modules.length;o++)this.overwriteModuleIdToPath[t.modules[o]]=n}},e.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={}
for(var e=0;e<this.options.ignoreDuplicateModules.length;e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]]=!0},e.prototype._createSortedPathsRules=function(){var e=this
this.sortedPathsRules=[],o.forEachProperty(this.options.paths,function(t,n){o.isArray(n)?e.sortedPathsRules.push({from:t,to:n}):e.sortedPathsRules.push({from:t,to:[n]})}),this.sortedPathsRules.sort(function(e,t){return t.from.length-e.from.length})},e.prototype._ensureShimModule1=function(e,t){for(var n=0;n<t.length;n++){var o=t[n]
this.shimModules.hasOwnProperty(o)||this._ensureShimModule1(o,[])}this.shimModules[e]={stack:null,dependencies:t,callback:null},this.options.isBuild&&(this.shimModulesStr[e]="null")},e.prototype._ensureShimModule2=function(e,t){this.shimModules[e]={stack:null,dependencies:t.deps||[],callback:function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n]
if("function"==typeof t.init){var o=t.init.apply(b,e)
if(void 0!==o)return o}if("function"==typeof t.exports)return t.exports.apply(b,e)
if("string"==typeof t.exports){for(var r=t.exports.split("."),i=b,s=0;s<r.length;s++)i&&(i=i[r[s]])
return i}return t.exports||{}}},this.options.isBuild&&("function"==typeof t.init?this.shimModulesStr[e]=t.init.toString():"function"==typeof t.exports?this.shimModulesStr[e]=t.exports.toString():"string"==typeof t.exports?this.shimModulesStr[e]="function() { return this."+t.exports+"; }":this.shimModulesStr[e]=JSON.stringify(t.exports))},e.prototype._createShimModules=function(){var e=this
this.shimModules={},this.shimModulesStr={},o.forEachProperty(this.options.shim,function(t,n){return n?o.isArray(n)?void e._ensureShimModule1(t,n):void e._ensureShimModule2(t,n):void 0})},e.prototype.cloneAndMerge=function(t){return new e(r.mergeConfigurationOptions(t,this.options))},e.prototype.getOptionsLiteral=function(){return this.options},e.prototype._applyPaths=function(e){for(var t,n=0,r=this.sortedPathsRules.length;r>n;n++)if(t=this.sortedPathsRules[n],o.startsWith(e,t.from)){for(var i=[],s=0,l=t.to.length;l>s;s++)i.push(t.to[s]+e.substr(t.from.length))
return i}return[e]},e.prototype._addUrlArgsToUrl=function(e){return o.containsQueryString(e)?e+"&"+this.options.urlArgs:e+"?"+this.options.urlArgs},e.prototype._addUrlArgsIfNecessaryToUrl=function(e){return this.options.urlArgs?this._addUrlArgsToUrl(e):e},e.prototype._addUrlArgsIfNecessaryToUrls=function(e){if(this.options.urlArgs)for(var t=0,n=e.length;n>t;t++)e[t]=this._addUrlArgsToUrl(e[t])
return e},e.prototype.moduleIdToPaths=function(e){if(this.isBuild()&&this.options.nodeModules.indexOf(e)>=0)return["empty:"]
var t,n=e
if(this.overwriteModuleIdToPath.hasOwnProperty(n)&&(n=this.overwriteModuleIdToPath[n]),o.endsWith(n,".js")||o.isAbsolutePath(n))o.endsWith(n,".js")||o.containsQueryString(n)||(n+=".js"),t=[n]
else for(var r=0,i=(t=this._applyPaths(n)).length;i>r;r++)this.isBuild()&&"empty:"===t[r]||(o.isAbsolutePath(t[r])||(t[r]=this.options.baseUrl+t[r]),o.endsWith(t[r],".js")||o.containsQueryString(t[r])||(t[r]=t[r]+".js"))
return this._addUrlArgsIfNecessaryToUrls(t)},e.prototype.requireToUrl=function(e){var t=e
return o.isAbsolutePath(t)||(t=this._applyPaths(t)[0],o.isAbsolutePath(t)||(t=this.options.baseUrl+t)),this._addUrlArgsIfNecessaryToUrl(t)},e.prototype.isShimmed=function(e){return this.shimModules.hasOwnProperty(e)},e.prototype.isBuild=function(){return this.options.isBuild},e.prototype.getShimmedModuleDefine=function(e){return this.shimModules[e]},e.prototype.getShimmedModulesStr=function(e){return this.shimModulesStr[e]},e.prototype.isDuplicateMessageIgnoredFor=function(e){return this.ignoreDuplicateModulesMap.hasOwnProperty(e)},e.prototype.getConfigForModule=function(e){return this.options.config?this.options.config[e]:void 0},e.prototype.shouldCatchError=function(){return this.options.catchError},e.prototype.shouldRecordStats=function(){return this.options.recordStats},e.prototype.onError=function(e){this.options.onError(e)},e}()
e.Configuration=i
var s=function(){function e(e,t){this._config=e
var n=t.lastIndexOf("/")
this.fromModulePath=-1!==n?t.substr(0,n+1):""}return e.prototype.isBuild=function(){return this._config.isBuild()},e._normalizeModuleId=function(e){var t,n=e
for(t=/\/\.\//;t.test(n);)n=n.replace(t,"/")
for(n=n.replace(/^\.\//g,""),t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;t.test(n);)n=n.replace(t,"/")
return n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"")},e.prototype.resolveModule=function(t){var n=t
return o.isAbsolutePath(n)||(o.startsWith(n,"./")||o.startsWith(n,"../"))&&(n=e._normalizeModuleId(this.fromModulePath+n)),n},e.prototype.moduleIdToPaths=function(e){var t=this._config.moduleIdToPaths(e)
return g&&-1===e.indexOf("/")&&t.push("node|"+this.fromModulePath+"|"+e),t},e.prototype.requireToUrl=function(e){return this._config.requireToUrl(e)},e.prototype.shouldCatchError=function(){return this._config.shouldCatchError()},e.prototype.onError=function(e){this._config.onError(e)},e}()
e.ModuleIdResolver=s
var l=function(){function e(e,t,n,o,r,i,s,l){void 0===l&&(l=null),this._id=e,this._dependencies=t,this._dependenciesValues=[],this._callback=n,this._errorback=o,this._recorder=r,this._moduleIdResolver=i,this._exports={},this._exportsPassedIn=!1,this._config=s,this._defineCallStack=l,this._digestDependencies(),0===this._unresolvedDependenciesCount&&this._complete()}return e.prototype._digestDependencies=function(){var e,t,n,o=this
for(this._unresolvedDependenciesCount=this._dependencies.length,this._normalizedDependencies=[],this._managerDependencies=[],this._managerDependenciesMap={},e=0,t=this._dependencies.length;t>e;e++)if(n=this._dependencies[e])if("exports"===n)this._exportsPassedIn=!0,this._normalizedDependencies[e]=n,this._dependenciesValues[e]=this._exports,this._unresolvedDependenciesCount--
else if("module"===n)this._normalizedDependencies[e]=n,this._dependenciesValues[e]={id:this._id,config:function(){return o._config}},this._unresolvedDependenciesCount--
else if("require"===n)this._normalizedDependencies[e]=n,this.addManagerDependency(n,e)
else{var r=n.indexOf("!")
if(r>=0){var i=n.substring(0,r),s=n.substring(r+1,n.length)
n=this._moduleIdResolver.resolveModule(i)+"!"+s}else n=this._moduleIdResolver.resolveModule(n)
this._normalizedDependencies[e]=n,this.addManagerDependency(n,e)}else console.warn("Please check module "+this._id+", the dependency list looks broken"),this._normalizedDependencies[e]=n,this._dependenciesValues[e]=null,this._unresolvedDependenciesCount--},e.prototype.addManagerDependency=function(e,t){if(this._managerDependenciesMap.hasOwnProperty(e))throw new Error("Module "+this._id+" contains multiple times a dependency to "+e)
this._managerDependencies.push(e),this._managerDependenciesMap[e]=t},e.prototype.renameDependency=function(e,t){if(!this._managerDependenciesMap.hasOwnProperty(e))throw new Error("Loader: Cannot rename an unknown dependency!")
var n=this._managerDependenciesMap[e]
delete this._managerDependenciesMap[e],this._managerDependenciesMap[t]=n,this._normalizedDependencies[n]=t},e.prototype.getId=function(){return this._id},e.prototype.getModuleIdResolver=function(){return this._moduleIdResolver},e.prototype.isExportsPassedIn=function(){return this._exportsPassedIn},e.prototype.getExports=function(){return this._exports},e.prototype.getDependencies=function(){return this._managerDependencies},e.prototype.getNormalizedDependencies=function(){return this._normalizedDependencies},e.prototype.getDefineCallStack=function(){return this._defineCallStack},e.prototype._invokeFactory=function(){if(this._moduleIdResolver.isBuild()&&!o.isAnonymousModule(this._id))return{returnedValue:null,producedError:null}
var e=null,t=null
if(this._moduleIdResolver.shouldCatchError())try{t=this._callback.apply(b,this._dependenciesValues)}catch(t){e=t}else t=this._callback.apply(b,this._dependenciesValues)
return{returnedValue:t,producedError:e}},e.prototype._complete=function(){var e=null
if(this._callback)if("function"==typeof this._callback){this._recorder.record(u.BeginInvokeFactory,this._id)
var t=this._invokeFactory()
e=t.producedError,this._recorder.record(u.EndInvokeFactory,this._id),e||void 0===t.returnedValue||this._exportsPassedIn&&!o.isEmpty(this._exports)||(this._exports=t.returnedValue)}else this._exports=this._callback
e&&this.getModuleIdResolver().onError({errorCode:"factory",moduleId:this._id,detail:e})},e.prototype.cleanUp=function(){this._moduleIdResolver&&!this._moduleIdResolver.isBuild()&&(this._normalizedDependencies=null,this._moduleIdResolver=null),this._dependencies=null,this._dependenciesValues=null,this._callback=null,this._managerDependencies=null,this._managerDependenciesMap=null},e.prototype.onDependencyError=function(e){return!!this._errorback&&(this._errorback(e),!0)},e.prototype.resolveDependency=function(e,t){if(!this._managerDependenciesMap.hasOwnProperty(e))throw new Error("Cannot resolve a dependency I do not have!")
this._dependenciesValues[this._managerDependenciesMap[e]]=t,delete this._managerDependenciesMap[e],this._unresolvedDependenciesCount--,0===this._unresolvedDependenciesCount&&this._complete()},e.prototype.isComplete=function(){return 0===this._unresolvedDependenciesCount},e}()
e.Module=l,function(e){e[e.LoaderAvailable=1]="LoaderAvailable",e[e.BeginLoadingScript=10]="BeginLoadingScript",e[e.EndLoadingScriptOK=11]="EndLoadingScriptOK",e[e.EndLoadingScriptError=12]="EndLoadingScriptError",e[e.BeginInvokeFactory=21]="BeginInvokeFactory",e[e.EndInvokeFactory=22]="EndInvokeFactory",e[e.NodeBeginEvaluatingScript=31]="NodeBeginEvaluatingScript",e[e.NodeEndEvaluatingScript=32]="NodeEndEvaluatingScript",e[e.NodeBeginNativeRequire=33]="NodeBeginNativeRequire",e[e.NodeEndNativeRequire=34]="NodeEndNativeRequire"}(e.LoaderEventType||(e.LoaderEventType={}))
var u=e.LoaderEventType,a=function(){return function(e,t,n){this.type=e,this.detail=t,this.timestamp=n}}()
e.LoaderEvent=a
var d=function(){function e(e){this._events=[new a(u.LoaderAvailable,"",e)]}return e.prototype.record=function(e,n){this._events.push(new a(e,n,t()))},e.prototype.getEvents=function(){return this._events},e}()
e.LoaderEventRecorder=d
var c=function(){function e(){}return e.prototype.record=function(e,t){},e.prototype.getEvents=function(){return[]},e.INSTANCE=new e,e}()
e.NullLoaderEventRecorder=c
var h=function(){function e(e){this._recorder=null,this._config=new i,this._scriptLoader=e,this._modules={},this._knownModules={},this._inverseDependencies={},this._dependencies={},this._inversePluginDependencies={},this._queuedDefineCalls=[],this._loadingScriptsCount=0,this._resolvedScriptPaths={}}return e._findRelevantLocationInStack=function(e,t){for(var n=function(e){return e.replace(/\\/g,"/")},o=n(e),r=t.split(/\n/),i=0;i<r.length;i++){var s=r[i].match(/(.*):(\d+):(\d+)\)?$/)
if(s){var l=s[1],u=s[2],a=s[3],d=Math.max(l.lastIndexOf(" ")+1,l.lastIndexOf("(")+1)
if((l=n(l=l.substr(d)))===o){var c={line:parseInt(u,10),col:parseInt(a,10)}
return 1===c.line&&(c.col-="(function (require, define, __filename, __dirname) { ".length),c}}}throw new Error("Could not correlate define call site for needle "+e)},e.prototype.getBuildInfo=function(){var t=this
return this._config.isBuild()?Object.keys(this._modules).map(function(n){var o=t._modules[n],r=t._resolvedScriptPaths[n]||null,i=o.getDefineCallStack()
return{id:n,path:r,defineLocation:r&&i?e._findRelevantLocationInStack(r,i):null,dependencies:o.getNormalizedDependencies(),shim:t._config.isShimmed(n)?t._config.getShimmedModulesStr(n):null,exports:o.getExports()}}):null},e.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new d(v):this._recorder=c.INSTANCE),this._recorder},e.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},e.prototype.enqueueDefineModule=function(e,t,n){0===this._loadingScriptsCount?this.defineModule(e,t,n,null,null):this._queuedDefineCalls.push({id:e,stack:null,dependencies:t,callback:n})},e.prototype.enqueueDefineAnonymousModule=function(e,t){var n=null
this._config.isBuild()&&(n=new Error("StackLocation").stack),this._queuedDefineCalls.push({id:null,stack:n,dependencies:e,callback:t})},e.prototype.defineModule=function(e,t,n,o,r,i){if(void 0===i&&(i=new s(this._config,e)),this._modules.hasOwnProperty(e))this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'")
else{var u=this._config.getConfigForModule(e),a=new l(e,t,n,o,this.getRecorder(),i,u,r)
this._modules[e]=a,this._resolve(a)}},e.prototype._relativeRequire=function(e,t,n,r){return"string"==typeof t?this.synchronousRequire(t,e):void this.defineModule(o.generateAnonymousModule(),t,n,r,null,e)},e.prototype.synchronousRequire=function(e,t){void 0===t&&(t=new s(this._config,e))
var n=t.resolveModule(e),o=n.indexOf("!")
if(o>=0){var r=n.substring(0,o),i=n.substring(o+1,n.length),l={}
this._modules.hasOwnProperty(r)&&(l=this._modules[r])
var u=function(e){return t.resolveModule(e)}
n=r+"!"+(i="function"==typeof l.normalize?l.normalize(i,u):u(i))}if(!this._modules.hasOwnProperty(n))throw new Error("Check dependency list! Synchronous require cannot resolve module '"+n+"'. This is the first mention of this module!")
var a=this._modules[n]
if(!a.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+n+"'. This module has not been resolved completely yet.")
return a.getExports()},e.prototype.configure=function(e,t){var n=this._config.shouldRecordStats()
this._config=t?new i(e):this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!n&&(this._recorder=null)},e.prototype.getConfigurationOptions=function(){return this._config.getOptionsLiteral()},e.prototype._onLoad=function(e){var t
if(this._loadingScriptsCount--,this._config.isShimmed(e))t=this._config.getShimmedModuleDefine(e),this.defineModule(e,t.dependencies,t.callback,null,t.stack)
else if(0===this._queuedDefineCalls.length)this._loadingScriptsCount++,this._onLoadError(e,new Error("No define call received from module "+e+"."))
else for(;this._queuedDefineCalls.length>0;){if((t=this._queuedDefineCalls.shift()).id===e||null===t.id){t.id=e,this.defineModule(t.id,t.dependencies,t.callback,null,t.stack)
break}this.defineModule(t.id,t.dependencies,t.callback,null,t.stack)}if(0===this._loadingScriptsCount)for(;this._queuedDefineCalls.length>0;)null===(t=this._queuedDefineCalls.shift()).id?(console.warn("Found an unmatched anonymous define call in the define queue. Ignoring it!"),console.warn(t.callback)):this.defineModule(t.id,t.dependencies,t.callback,null,t.stack)},e.prototype._onLoadError=function(e,t){this._loadingScriptsCount--
var n,o={errorCode:"load",moduleId:e,neededBy:this._inverseDependencies[e]?this._inverseDependencies[e].slice(0):[],detail:t},r={},i=!1,s=[]
for(s.push(e),r[e]=!0;s.length>0;)if(n=s.shift(),this._modules[n]&&(i=this._modules[n].onDependencyError(o)||i),this._inverseDependencies[n])for(var l=0,u=this._inverseDependencies[n].length;u>l;l++)r.hasOwnProperty(this._inverseDependencies[n][l])||(s.push(this._inverseDependencies[n][l]),r[this._inverseDependencies[n][l]]=!0)
i||this._config.onError(o)},e.prototype._onModuleComplete=function(e,t){var n,r,i,s
if(delete this._dependencies[e],this._inverseDependencies.hasOwnProperty(e)){var l=this._inverseDependencies[e]
for(delete this._inverseDependencies[e],n=0,r=l.length;r>n;n++)i=l[n],(s=this._modules[i]).resolveDependency(e,t),s.isComplete()&&this._onModuleComplete(i,s.getExports())}if(this._inversePluginDependencies.hasOwnProperty(e)){var u=this._inversePluginDependencies[e]
for(delete this._inversePluginDependencies[e],n=0,r=u.length;r>n;n++){var a=u[n].moduleId,d=this._modules[a]
this._resolvePluginDependencySync(a,u[n].dependencyId,t),d.isComplete()&&this._onModuleComplete(a,d.getExports())}}o.isAnonymousModule(e)?(delete this._modules[e],delete this._dependencies[e]):this._modules[e].cleanUp()},e.prototype._hasDependencyPath=function(e,t){var n,o,r,i,s,l={},u=[]
for(u.push(e),l[e]=!0;u.length>0;)if(r=u.shift(),this._dependencies.hasOwnProperty(r))for(n=0,o=(i=this._dependencies[r]).length;o>n;n++){if((s=i[n])===t)return!0
l.hasOwnProperty(s)||(l[s]=!0,u.push(s))}return!1},e.prototype._findCyclePath=function(e,t,n){if(e===t||50===n)return[e]
if(!this._dependencies.hasOwnProperty(e))return null
for(var o,r=this._dependencies[e],i=0,s=r.length;s>i;i++)if(null!==(o=this._findCyclePath(r[i],t,n+1)))return o.push(e),o
return null},e.prototype._createRequire=function(e){var t=this,n=function(n,o,r){return t._relativeRequire(e,n,o,r)}
return n.toUrl=function(t){return e.requireToUrl(e.resolveModule(t))},n.getStats=function(){return t.getLoaderEvents()},n.__$__nodeRequire=b.nodeRequire,n},e.prototype._resolvePluginDependencySync=function(e,t,n){var o=this,r=this._modules[e],i=r.getModuleIdResolver(),s=t.indexOf("!"),l=t.substring(0,s),u=t.substring(s+1,t.length),a=function(e){return i.resolveModule(e)}
if(u="function"==typeof n.normalize?n.normalize(u,a):a(u),n.dynamic){var d=function(n){r.resolveDependency(t,n),r.isComplete()&&o._onModuleComplete(e,r.getExports())}
d.error=function(n){o._config.onError({errorCode:"load",moduleId:t,neededBy:[e],detail:n})},n.load(u,this._createRequire(i),d,this._config.getOptionsLiteral())}else{var c=t
t=l+"!"+u,r.renameDependency(c,t),this._resolveDependency(e,t,function(e){var r=function(e){o.defineModule(t,[],e,null,null)}
r.error=function(e){o._config.onError({errorCode:"load",moduleId:t,neededBy:o._inverseDependencies[t]?o._inverseDependencies[t].slice(0):[],detail:e})},n.load(u,o._createRequire(i),r,o._config.getOptionsLiteral())})}},e.prototype._resolvePluginDependencyAsync=function(e,t){var n=this._modules[e],o=t.indexOf("!"),r=t.substring(0,o)
this._inversePluginDependencies[r]=this._inversePluginDependencies[r]||[],this._inversePluginDependencies[r].push({moduleId:e,dependencyId:t}),this._modules.hasOwnProperty(r)||this._knownModules.hasOwnProperty(r)||(this._knownModules[r]=!0,this._loadModule(n.getModuleIdResolver(),r))},e.prototype._resolvePluginDependency=function(e,t){var n=t.indexOf("!"),o=t.substring(0,n)
this._modules.hasOwnProperty(o)&&this._modules[o].isComplete()?this._resolvePluginDependencySync(e,t,this._modules[o].getExports()):this._resolvePluginDependencyAsync(e,t)},e.prototype._resolveShimmedDependency=function(e,t,n){var r=this._config.getShimmedModuleDefine(t)
r.dependencies.length>0?this.defineModule(o.generateAnonymousModule(),r.dependencies,function(){return n(t)},null,null,new s(this._config,t)):n(t)},e.prototype._resolveDependency=function(e,t,n){var o=this._modules[e]
if(this._modules.hasOwnProperty(t)&&this._modules[t].isComplete())o.resolveDependency(t,this._modules[t].getExports())
else if(this._dependencies[e].push(t),this._hasDependencyPath(t,e)){console.warn("There is a dependency cycle between '"+t+"' and '"+e+"'. The cyclic path follows:")
var r=this._findCyclePath(t,e,0)
r.reverse(),r.push(t),console.warn(r.join(" => \n"))
var i,s=this._modules.hasOwnProperty(t)?this._modules[t]:null
s&&s.isExportsPassedIn()&&(i=s.getExports()),o.resolveDependency(t,i)}else this._inverseDependencies[t]=this._inverseDependencies[t]||[],this._inverseDependencies[t].push(e),this._modules.hasOwnProperty(t)||this._knownModules.hasOwnProperty(t)||(this._knownModules[t]=!0,this._config.isShimmed(t)?this._resolveShimmedDependency(e,t,n):n(t))},e.prototype._loadModule=function(e,t){var n=this
this._loadingScriptsCount++
var o=e.moduleIdToPaths(t),r=-1,i=function(e){if(++r>=o.length)n._onLoadError(t,e)
else{var s=o[r],l=n.getRecorder()
if(n._config.isBuild()&&"empty:"===s)return n._resolvedScriptPaths[t]=s,n.enqueueDefineModule(t,[],null),void n._onLoad(t)
l.record(u.BeginLoadingScript,s),n._scriptLoader.load(s,function(){n._config.isBuild()&&(n._resolvedScriptPaths[t]=s),l.record(u.EndLoadingScriptOK,s),n._onLoad(t)},function(e){l.record(u.EndLoadingScriptError,s),i(e)},l)}}
i(null)},e.prototype._resolve=function(e){var t,n,o,r,i,s,l=this
o=e.getId(),r=e.getDependencies(),s=e.getModuleIdResolver(),this._dependencies[o]=[]
var u=function(e){return l._loadModule(s,e)}
for(t=0,n=r.length;n>t;t++)"require"!==(i=r[t])?i.indexOf("!")>=0?this._resolvePluginDependency(o,i):this._resolveDependency(o,i,u):e.resolveDependency(i,this._createRequire(s))
e.isComplete()&&this._onModuleComplete(o,e.getExports())},e}()
e.ModuleManager=h
var p,f,g,_,y,v,m=function(){function e(e){this.actualScriptLoader=e,this.callbackMap={}}return e.prototype.setModuleManager=function(e){this.actualScriptLoader.setModuleManager(e)},e.prototype.load=function(e,t,n,o){var r=this,i={callback:t,errorback:n}
return this.callbackMap.hasOwnProperty(e)?void this.callbackMap[e].push(i):(this.callbackMap[e]=[i],void this.actualScriptLoader.load(e,function(){return r.triggerCallback(e)},function(t){return r.triggerErrorback(e,t)},o))},e.prototype.triggerCallback=function(e){var t=this.callbackMap[e]
delete this.callbackMap[e]
for(var n=0;n<t.length;n++)t[n].callback()},e.prototype.triggerErrorback=function(e,t){var n=this.callbackMap[e]
delete this.callbackMap[e]
for(var o=0;o<n.length;o++)n[o].errorback(t)},e}(),M=function(){function e(){}return e.prototype.attachListenersV1=function(e,t,n){var o=function(){e.detachEvent("onreadystatechange",r),e.addEventListener&&e.removeEventListener("error",i)},r=function(n){"loaded"!==e.readyState&&"complete"!==e.readyState||(o(),t())},i=function(e){o(),n(e)}
e.attachEvent("onreadystatechange",r),e.addEventListener&&e.addEventListener("error",i)},e.prototype.attachListenersV2=function(e,t,n){var o=function(){e.removeEventListener("load",r),e.removeEventListener("error",i)},r=function(e){o(),t()},i=function(e){o(),n(e)}
e.addEventListener("load",r),e.addEventListener("error",i)},e.prototype.setModuleManager=function(e){},e.prototype.load=function(e,t,n){var o=document.createElement("script")
o.setAttribute("async","async"),o.setAttribute("type","text/javascript"),b.attachEvent?this.attachListenersV1(o,t,n):this.attachListenersV2(o,t,n),o.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(o)},e}(),E=function(){function e(){this.loadCalls=[],this.loadTimeout=-1}return e.prototype.setModuleManager=function(e){},e.prototype.load=function(e,t,n){var o=this
this.loadCalls.push({scriptSrc:e,callback:t,errorback:n}),navigator.userAgent.indexOf("Firefox")>=0?this._load():-1===this.loadTimeout&&(this.loadTimeout=setTimeout(function(){o.loadTimeout=-1,o._load()},0))},e.prototype._load=function(){var e=this.loadCalls
this.loadCalls=[]
var t,n=e.length,o=[]
for(t=0;n>t;t++)o.push(e[t].scriptSrc)
var r=!1
try{importScripts.apply(null,o)}catch(o){for(r=!0,t=0;n>t;t++)e[t].errorback(o)}if(!r)for(t=0;n>t;t++)e[t].callback()},e}(),P=function(){function e(){this._initialized=!1}return e.prototype.setModuleManager=function(e){this._moduleManager=e},e.prototype._init=function(e){this._initialized||(this._initialized=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"))},e.prototype.load=function(t,n,r,i){var s=this,l=this._moduleManager.getConfigurationOptions(),a=l.nodeRequire||b.nodeRequire,d=l.nodeInstrumenter||function(e){return e}
if(this._init(a),/^node\|/.test(t)){var c=t.split("|"),h=null
try{i.record(u.NodeBeginNativeRequire,c[2]),h=a(c[2])}catch(e){return i.record(u.NodeEndNativeRequire,c[2]),void r(e)}i.record(u.NodeEndNativeRequire,c[2]),this._moduleManager.enqueueDefineAnonymousModule([],function(){return h}),n()}else t=o.fileUriToFilePath(t),this._fs.readFile(t,{encoding:"utf8"},function(o,l){if(o)r(o)
else{i.record(u.NodeBeginEvaluatingScript,t)
var a=s._path.normalize(t)
if(f){var c=a.match(/^([a-z])\:(.*)/)
c&&(a=c[1].toUpperCase()+":"+c[2]),a="file:///"+a.replace(/\\/g,"/")}var h,p="(function (require, define, __filename, __dirname) { ",g="\n});"
h=l.charCodeAt(0)===e._BOM?p+l.substring(1)+g:p+l+g,h=d(h,a),(/^v0\.12/.test(process.version)?s._vm.runInThisContext(h,{filename:a}):s._vm.runInThisContext(h,a)).call(b,D,S,a,s._path.dirname(t)),i.record(u.NodeEndEvaluatingScript,t),n()}})},e._BOM=65279,e}(),S=function(){function e(e,t,n){"string"!=typeof e&&(n=t,t=e,e=null),"object"==typeof t&&o.isArray(t)||(n=t,t=null),t||(t=["require","exports","module"]),e?y.enqueueDefineModule(e,t,n):y.enqueueDefineAnonymousModule(t,n)}return e.amd={jQuery:!0},e}(),D=function(){function e(){if(1===arguments.length){if(arguments[0]instanceof Object&&!o.isArray(arguments[0]))return void e.config(arguments[0])
if("string"==typeof arguments[0])return y.synchronousRequire(arguments[0])}if(2!==arguments.length&&3!==arguments.length||!o.isArray(arguments[0]))throw new Error("Unrecognized require call")
y.defineModule(o.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null)}return e.config=function(e,t){void 0===t&&(t=!1),y.configure(e,t)},e.getConfig=function(){return y.getConfigurationOptions()},e.reset=function(){y=new h(_),_.setModuleManager(y)},e.getBuildInfo=function(){return y.getBuildInfo()},e.getStats=function(){return y.getLoaderEvents()},e}(),b=_amdLoaderGlobal,L=b.performance&&"function"==typeof b.performance.now
"function"==typeof b.define&&b.define.amd||(function(){if(p="function"==typeof b.importScripts,f="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"renderer"===process.type,"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"browser"===process.type,g="undefined"!=typeof module&&!!module.exports,_=new m(p?new E:g?new P:new M),y=new h(_),_.setModuleManager(y),g||(b.console||(b.console={}),b.console.log||(b.console.log=function(){}),b.console.warn||(b.console.warn=b.console.log),b.console.error||(b.console.error=b.console.log)),p||g||(window.onload=function(){var e,t,n,r=document.getElementsByTagName("script")
for(e=0,t=r.length;t>e&&!(n=r[e].getAttribute("data-main"));e++);n&&y.defineModule(o.generateAnonymousModule(),[n],null,null,null,new s(new i,""))}),g){var e=b.require||require,t=function(t){y.getRecorder().record(u.NodeBeginNativeRequire,t)
var n=e(t)
return y.getRecorder().record(u.NodeEndNativeRequire,t),n}
b.nodeRequire=t,D.nodeRequire=t}g&&!f?(module.exports=D,define=function(){S.apply(null,arguments)},require=D):(void 0!==b.require&&"function"!=typeof b.require&&D.config(b.require),f?define=function(){S.apply(null,arguments)}:b.define=S,b.require=D,b.require.__$__nodeRequire=t)}(),v=t())}(AMDLoader||(AMDLoader={}))
var CSSLoaderPlugin,__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},_cssPluginGlobal=this
!function(e){var t=_cssPluginGlobal,n=function(){function e(){this._pendingLoads=0}return e.prototype.attachListeners=function(e,t,n,o){var r=function(){t.removeEventListener("load",i),t.removeEventListener("error",s)},i=function(e){r(),n()},s=function(e){r(),o(e)}
t.addEventListener("load",i),t.addEventListener("error",s)},e.prototype._onLoad=function(e,t){this._pendingLoads--,t()},e.prototype._onLoadError=function(e,t,n){this._pendingLoads--,t(n)},e.prototype._insertLinkNode=function(e){this._pendingLoads++
var t=document.head||document.getElementsByTagName("head")[0],n=t.getElementsByTagName("link")||document.head.getElementsByTagName("script")
n.length>0?t.insertBefore(e,n[n.length-1]):t.appendChild(e)},e.prototype.createLinkTag=function(e,t,n,o){var r=this,i=document.createElement("link")
i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("data-name",e)
return this.attachListeners(e,i,function(){return r._onLoad(e,n)},function(t){return r._onLoadError(e,o,t)}),i.setAttribute("href",t),i},e.prototype._linkTagExists=function(e,t){var n,o,r,i,s=document.getElementsByTagName("link")
for(n=0,o=s.length;o>n;n++)if(r=s[n].getAttribute("data-name"),i=s[n].getAttribute("href"),r===e||i===t)return!0
return!1},e.prototype.load=function(e,t,n,o){if(this._linkTagExists(e,t))n()
else{var r=this.createLinkTag(e,t,n,o)
this._insertLinkNode(r)}},e}(),o=function(e){function t(){e.call(this),this._blockedLoads=[],this._mergeStyleSheetsTimeout=-1}return __extends(t,e),t.prototype.load=function(e,t,n,o){if(this._linkTagExists(e,t))n()
else{var r=this.createLinkTag(e,t,n,o)
this._styleSheetCount()<31?this._insertLinkNode(r):(this._blockedLoads.push(r),this._handleBlocked())}},t.prototype._styleSheetCount=function(){return document.getElementsByTagName("link").length+document.getElementsByTagName("style").length},t.prototype._onLoad=function(t,n){e.prototype._onLoad.call(this,t,n),this._handleBlocked()},t.prototype._onLoadError=function(t,n,o){e.prototype._onLoadError.call(this,t,n,o),this._handleBlocked()},t.prototype._handleBlocked=function(){var e=this
this._blockedLoads.length>0&&-1===this._mergeStyleSheetsTimeout&&(this._mergeStyleSheetsTimeout=window.setTimeout(function(){return e._mergeStyleSheets()},0))},t.prototype._mergeStyleSheet=function(e,t,n,o){for(var r=o.rules.length-1;r>=0;r--)t.insertRule(l.rewriteUrls(n,e,o.rules[r].cssText),0)},t.prototype._asIE9HTMLLinkElement=function(e){return e},t.prototype._mergeStyleSheets=function(){this._mergeStyleSheetsTimeout=-1
var e,t=this._blockedLoads.length,n=document.getElementsByTagName("link"),o=n.length,r=[]
for(e=0;o>e;e++)"loaded"!==n[e].readyState&&"complete"!==n[e].readyState||r.push({linkNode:n[e],rulesLength:this._asIE9HTMLLinkElement(n[e]).styleSheet.rules.length})
var i,s,l=r.length,u=Math.min(Math.floor(l/2),t)
for(r.sort(function(e,t){return t.rulesLength-e.rulesLength}),e=0;u>e;e++)i=r.length-1-e,s=e%(r.length-u),this._mergeStyleSheet(r[s].linkNode.href,this._asIE9HTMLLinkElement(r[s].linkNode).styleSheet,r[i].linkNode.href,this._asIE9HTMLLinkElement(r[i].linkNode).styleSheet),r[i].linkNode.parentNode.removeChild(r[i].linkNode),o--
for(var a=this._styleSheetCount();31>a&&this._blockedLoads.length>0;)this._insertLinkNode(this._blockedLoads.shift()),a++},t}(n),r=function(e){function t(){e.call(this)}return __extends(t,e),t.prototype.attachListeners=function(e,t,n,o){t.onload=function(){t.onload=null,n()}},t}(o),i=function(){function e(){this.fs=require.nodeRequire("fs")}return e.prototype.load=function(t,n,o,r){var i=this.fs.readFileSync(n,"utf8")
i.charCodeAt(0)===e.BOM_CHAR_CODE&&(i=i.substring(1)),o(i)},e.BOM_CHAR_CODE=65279,e}(),s=function(){function e(e){this.cssLoader=e}return e.prototype.load=function(n,o,r,i){((i=i||{})["vs/css"]||{}).inlineResources&&(t.inlineResources=!0)
var s=o.toUrl(n+".css")
this.cssLoader.load(n,s,function(t){i.isBuild&&(e.BUILD_MAP[n]=t,e.BUILD_PATH_MAP[n]=s),r({})},function(e){"function"==typeof r.error&&r.error("Could not find "+s+" or it was empty")})},e.prototype.write=function(n,o,r){var i=r.getEntryPoint()
t.cssPluginEntryPoints=t.cssPluginEntryPoints||{},t.cssPluginEntryPoints[i]=t.cssPluginEntryPoints[i]||[],t.cssPluginEntryPoints[i].push({moduleName:o,contents:e.BUILD_MAP[o],fsPath:e.BUILD_PATH_MAP[o]}),r.asModule(n+"!"+o,"define(['vs/css!"+i+"'], {});")},e.prototype.writeFile=function(e,n,o,r,i){if(t.cssPluginEntryPoints&&t.cssPluginEntryPoints.hasOwnProperty(n)){for(var s=o.toUrl(n+".css"),u=["/*---------------------------------------------------------"," * Copyright (c) Microsoft Corporation. All rights reserved."," *--------------------------------------------------------*/"],a=t.cssPluginEntryPoints[n],d=0;d<a.length;d++)t.inlineResources?u.push(l.rewriteOrInlineUrls(a[d].fsPath,a[d].moduleName,n,a[d].contents)):u.push(l.rewriteUrls(a[d].moduleName,n,a[d].contents))
r(s,u.join("\r\n"))}},e.prototype.getInlinedResources=function(){return t.cssInlinedResources||[]},e.BUILD_MAP={},e.BUILD_PATH_MAP={},e}()
e.CSSPlugin=s
var l=function(){function e(){}return e.startsWith=function(e,t){return e.length>=t.length&&e.substr(0,t.length)===t},e.pathOf=function(e){var t=e.lastIndexOf("/")
return-1!==t?e.substr(0,t+1):""},e.joinPaths=function(t,n){function o(t,n){return e.startsWith(t,n)?Math.max(n.length,t.indexOf("/",n.length)):0}function r(e,t){if("./"!==t){if("../"===t){var n=e.length>0?e[e.length-1]:null
if(n&&"/"===n)return
if(n&&"../"!==n)return void e.pop()}e.push(t)}}function i(e,t){for(;t.length>0;){var n=t.indexOf("/"),o=n>=0?t.substring(0,n+1):t
t=n>=0?t.substring(n+1):"",r(e,o)}}var s=0
s=(s=(s=s||o(t,"//"))||o(t,"http://"))||o(t,"https://")
var l=[]
return i(l,t.substr(s)),n.length>0&&"/"===n.charAt(0)&&(l=[]),i(l,n),t.substring(0,s)+l.join("")},e.commonPrefix=function(e,t){for(var n=Math.min(e.length,t.length),o=0;n>o&&e.charCodeAt(o)===t.charCodeAt(o);o++);return e.substring(0,o)},e.commonFolderPrefix=function(t,n){var o=e.commonPrefix(t,n),r=o.lastIndexOf("/")
return-1===r?"":o.substring(0,r+1)},e.relativePath=function(t,n){if(e.startsWith(n,"/")||e.startsWith(n,"http://")||e.startsWith(n,"https://"))return n
var o=e.commonFolderPrefix(t,n)
t=t.substr(o.length),n=n.substr(o.length)
for(var r=t.split("/").length,i="",s=1;r>s;s++)i+="../"
return i+n},e._replaceURL=function(t,n){return t.replace(/url\(\s*([^\)]+)\s*\)?/g,function(t){for(var o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r]
var i=o[0]
for('"'!==i.charAt(0)&&"'"!==i.charAt(0)||(i=i.substring(1));i.length>0&&(" "===i.charAt(i.length-1)||"\t"===i.charAt(i.length-1));)i=i.substring(0,i.length-1)
return'"'!==i.charAt(i.length-1)&&"'"!==i.charAt(i.length-1)||(i=i.substring(0,i.length-1)),e.startsWith(i,"data:")||e.startsWith(i,"http://")||e.startsWith(i,"https://")||(i=n(i)),"url("+i+")"})},e.rewriteUrls=function(t,n,o){return this._replaceURL(o,function(o){var r=e.joinPaths(e.pathOf(t),o)
return e.relativePath(n,r)})},e.rewriteOrInlineUrls=function(n,o,r,i){var s=require.nodeRequire("fs"),l=require.nodeRequire("path")
return this._replaceURL(i,function(i){if(/\.(svg|png)$/.test(i)){var u=l.join(l.dirname(n),i),a=s.readFileSync(u)
if(a.length<3e3){t.cssInlinedResources=t.cssInlinedResources||[]
var d=u.replace(/\\/g,"/")
t.cssInlinedResources.indexOf(d)>=0&&console.warn("CSS INLINING IMAGE AT "+u+" MORE THAN ONCE. CONSIDER CONSOLIDATING CSS RULES"),t.cssInlinedResources.push(d)
var c=/\.svg$/.test(i)?"image/svg+xml":"image/png",h=";base64,"+a.toString("base64")
if(/\.svg$/.test(i)){var p=","+a.toString().replace(/"/g,"'").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/&/g,"%26").replace(/#/g,"%23").replace(/\s+/g," ")
p.length<h.length&&(h=p)}return'"data:'+c+h+'"'}}var f=e.joinPaths(e.pathOf(o),i)
return e.relativePath(r,f)})},e}()
e.Utilities=l,function(){var e,t="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron
e="undefined"!=typeof process&&process.versions&&process.versions.node&&!t?new i:"undefined"!=typeof navigator&&navigator.userAgent.indexOf("MSIE 9")>=0?new o:"undefined"!=typeof navigator&&navigator.userAgent.indexOf("MSIE 8")>=0?new r:new n,define("vs/css",new s(e))}()}(CSSLoaderPlugin||(CSSLoaderPlugin={}))
var NLSLoaderPlugin,_nlsPluginGlobal=this
!function(e){function t(e,t){var n
return n=0===t.length?e:e.replace(/\{(\d+)\}/g,function(e,n){var o=n[0]
return void 0!==t[o]?t[o]:e}),s&&(n="［"+n.replace(/[aouei]/g,"$&$&")+"］"),n}function n(e,n){for(var o=[],r=0;r<arguments.length-2;r++)o[r]=arguments[r+2]
return t(n,o)}function o(e){return function(n,o){var r=l.call(arguments,2)
return t(e[n],r)}}var r=_nlsPluginGlobal,i=r.Plugin&&r.Plugin.Resources?r.Plugin.Resources:void 0,s=r&&r.document&&r.document.location&&r.document.location.hash.indexOf("pseudo=true")>=0,l=Array.prototype.slice,u=function(){function e(){this.localize=n}return e.prototype.setPseudoTranslation=function(e){s=e},e.prototype.create=function(e,t){return{localize:o(t[e])}},e.prototype.load=function(t,r,s,l){if(l=l||{},t&&0!==t.length){var u=void 0
if(i&&i.getString)r([t+(u=".nls.keys")],function(e){s({localize:function(t,n){if(!e[t])return"NLS error: unknown key "+t
var o=e[t].keys
if(n>=o.length)return"NLS error unknow index "+n
var r=o[n],s=[]
s[0]=t+"_"+r
for(var l=0;l<arguments.length-2;l++)s[l+1]=arguments[l+2]
return i.getString.apply(i,s)}})})
else if(l.isBuild)r([t+".nls",t+".nls.keys"],function(n,o){e.BUILD_MAP[t]=n,e.BUILD_MAP_KEYS[t]=o,s(n)})
else{var a=l["vs/nls"]||{},d=a.availableLanguages?function(e,t){var n=e[t]
return n||(n=e["*"])||null}(a.availableLanguages,t):null
u=".nls",null!==d&&"i-default"!==d&&(u=u+"."+d),r([t+u],function(e){Array.isArray(e)?e.localize=o(e):e.localize=o(e[t]),s(e)})}}else s({localize:n})},e.prototype._getEntryPointsMap=function(){return r.nlsPluginEntryPoints=r.nlsPluginEntryPoints||{},r.nlsPluginEntryPoints},e.prototype.write=function(e,t,n){var o=n.getEntryPoint(),r=this._getEntryPointsMap()
r[o]=r[o]||[],r[o].push(t),t!==o&&n.asModule(e+"!"+t,"define(['vs/nls', 'vs/nls!"+o+"'], function(nls, data) { return nls.create(\""+t+'", data); });')},e.prototype.writeFile=function(t,n,o,r,i){var s=this._getEntryPointsMap()
if(s.hasOwnProperty(n)){for(var l=o.toUrl(n+".nls.js"),u=["/*---------------------------------------------------------"," * Copyright (c) Microsoft Corporation. All rights reserved."," *--------------------------------------------------------*/"],a=s[n],d={},c=0;c<a.length;c++)d[a[c]]=e.BUILD_MAP[a[c]]
u.push('define("'+n+'.nls", '+JSON.stringify(d,null,"\t")+");"),r(l,u.join("\r\n"))}},e.prototype.finishBuild=function(t){t("nls.metadata.json",JSON.stringify({keys:e.BUILD_MAP_KEYS,messages:e.BUILD_MAP,bundles:this._getEntryPointsMap()},null,"\t"))},e.BUILD_MAP={},e.BUILD_MAP_KEYS={},e}()
e.NLSPlugin=u,define("vs/nls",new u)}(NLSLoaderPlugin||(NLSLoaderPlugin={}))
