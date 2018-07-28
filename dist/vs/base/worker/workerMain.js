!function(){"use strict"
var e=self.MonacoEnvironment,s=e&&e.baseUrl?e.baseUrl:"../../../"
importScripts(s+"vs/loader.js"),require.config({baseUrl:s,catchError:!0})
var n=!0,r=[]
self.onmessage=function(e){return n?(n=!1,void function(e){require([e],function(e){var s=e.create(function(e){self.postMessage(e)},null)
for(self.onmessage=function(e){return s.onmessage(e.data)};r.length>0;)self.onmessage(r.shift())})}(e.data)):void r.push(e)}}()
