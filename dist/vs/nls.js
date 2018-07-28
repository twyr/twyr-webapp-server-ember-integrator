"use strict"
var NLSLoaderPlugin,_nlsPluginGlobal=this
!function(n){function t(n,t){var e
return e=0===t.length?n:n.replace(/\{(\d+)\}/g,function(n,e){var r=e[0]
return void 0!==t[r]?t[r]:n}),l&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),e}function e(n,e){for(var r=[],i=0;i<arguments.length-2;i++)r[i]=arguments[i+2]
return t(e,r)}function r(n){return function(e,r){var i=s.call(arguments,2)
return t(n[e],i)}}var i=_nlsPluginGlobal,o=i.Plugin&&i.Plugin.Resources?i.Plugin.Resources:void 0,l=i&&i.document&&i.document.location&&i.document.location.hash.indexOf("pseudo=true")>=0,s=Array.prototype.slice,u=function(){function n(){this.localize=e}return n.prototype.setPseudoTranslation=function(n){l=n},n.prototype.create=function(n,t){return{localize:r(t[n])}},n.prototype.load=function(t,i,l,s){if(s=s||{},t&&0!==t.length){var u=void 0
if(o&&o.getString)i([t+(u=".nls.keys")],function(n){l({localize:function(t,e){if(!n[t])return"NLS error: unknown key "+t
var r=n[t].keys
if(e>=r.length)return"NLS error unknow index "+e
var i=r[e],l=[]
l[0]=t+"_"+i
for(var s=0;s<arguments.length-2;s++)l[s+1]=arguments[s+2]
return o.getString.apply(o,l)}})})
else if(s.isBuild)i([t+".nls",t+".nls.keys"],function(e,r){n.BUILD_MAP[t]=e,n.BUILD_MAP_KEYS[t]=r,l(e)})
else{var a=s["vs/nls"]||{},c=a.availableLanguages?function(n,t){var e=n[t]
return e||(e=n["*"])||null}(a.availableLanguages,t):null
u=".nls",null!==c&&"i-default"!==c&&(u=u+"."+c),i([t+u],function(n){Array.isArray(n)?n.localize=r(n):n.localize=r(n[t]),l(n)})}}else l({localize:e})},n.prototype._getEntryPointsMap=function(){return i.nlsPluginEntryPoints=i.nlsPluginEntryPoints||{},i.nlsPluginEntryPoints},n.prototype.write=function(n,t,e){var r=e.getEntryPoint(),i=this._getEntryPointsMap()
i[r]=i[r]||[],i[r].push(t),t!==r&&e.asModule(n+"!"+t,"define(['vs/nls', 'vs/nls!"+r+"'], function(nls, data) { return nls.create(\""+t+'", data); });')},n.prototype.writeFile=function(t,e,r,i,o){var l=this._getEntryPointsMap()
if(l.hasOwnProperty(e)){for(var s=r.toUrl(e+".nls.js"),u=["/*---------------------------------------------------------"," * Copyright (c) Microsoft Corporation. All rights reserved."," *--------------------------------------------------------*/"],a=l[e],c={},f=0;f<a.length;f++)c[a[f]]=n.BUILD_MAP[a[f]]
u.push('define("'+e+'.nls", '+JSON.stringify(c,null,"\t")+");"),i(s,u.join("\r\n"))}},n.prototype.finishBuild=function(t){t("nls.metadata.json",JSON.stringify({keys:n.BUILD_MAP_KEYS,messages:n.BUILD_MAP,bundles:this._getEntryPointsMap()},null,"\t"))},n.BUILD_MAP={},n.BUILD_MAP_KEYS={},n}()
n.NLSPlugin=u,define("vs/nls",new u)}(NLSLoaderPlugin||(NLSLoaderPlugin={}))
