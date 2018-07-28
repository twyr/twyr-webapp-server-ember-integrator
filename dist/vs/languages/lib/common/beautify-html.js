(function(){var t=["vs/languages/lib/common/beautify","require","exports","vs/languages/lib/common/beautify-html","vs/languages/lib/common/beautify-css"],e=function(e){for(var n=[],i=0,s=e.length;s>i;i++)n[i]=t[e[i]]
return n}
define(t[0],e([1,2]),function(t,e){"use strict"
e.js_beautify=function(t,e){return t}}),function(){function t(e,n){function i(){return(v=e.charAt(++y))||""}function s(t){var n,s=y
return t&&h(),n=e.charAt(y+1)||"",y=s-1,i(),n}function r(t){for(var n=y;i();)if("\\"===v)i()
else{if(-1!==t.indexOf(v))break
if("\n"===v)break}return e.substring(n,y+1)}function a(t){var e=y,n=r(t)
return y=e-1,i(),n}function h(){for(var t="";b.test(s());)i(),t+=v
return t}function o(){var t=""
for(v&&b.test(v)&&(t=v);b.test(i());)t+=v
return t}function u(t){var n=y
for(t="/"===s(),i();i();){if(!t&&"*"===v&&"/"===s()){i()
break}if(t&&"\n"===v)return e.substring(n,y)}return e.substring(n,y)+v}function _(t){return e.substring(y-t.length,y).toLowerCase()===t}function p(){for(var t=0,n=y+1;n<e.length;n++){var i=e.charAt(n)
if("{"===i)return!0
if("("===i)t+=1
else if(")"===i){if(0==t)return!1
t-=1}else if(";"===i||"}"===i)return!1}return!1}n=n||{},e=(e=e||"").replace(/\r\n|[\r\u2028\u2029]/g,"\n")
var l=n.indent_size||4,c=n.indent_char||" ",f=void 0===n.selector_separator_newline||n.selector_separator_newline,g=void 0!==n.end_with_newline&&n.end_with_newline,d=void 0===n.newline_between_rules||n.newline_between_rules,w=n.eol?n.eol:"\n"
"string"==typeof l&&(l=parseInt(l,10)),n.indent_with_tabs&&(c="\t",l=1),w=w.replace(/\\r/,"\r").replace(/\\n/,"\n")
for(var v,b=/^\s+$/,y=-1,m=0,T=e.match(/^[\t ]*/)[0],k=new Array(l+1).join(c),x=0,A=0,S={"{":function(t){S.singleSpace(),E.push(t),S.newLine()},"}":function(t){S.newLine(),E.push(t),S.newLine()},_lastCharWhitespace:function(){return b.test(E[E.length-1])},newLine:function(t){E.length&&(t||"\n"===E[E.length-1]||S.trim(),E.push("\n"),T&&E.push(T))},singleSpace:function(){E.length&&!S._lastCharWhitespace()&&E.push(" ")},preserveSingleSpace:function(){K&&S.singleSpace()},trim:function(){for(;S._lastCharWhitespace();)E.pop()}},E=[],N=!1,L=!1,O=!1,C="",U="";;){var I=o(),K=""!==I,j=-1!==I.indexOf("\n")
if(U=C,C=v,!v)break
if("/"===v&&"*"===s()){var G=0===x;(j||G)&&S.newLine(),E.push(u()),S.newLine(),G&&S.newLine(!0)}else if("/"===v&&"/"===s())j||"{"===U||S.trim(),S.singleSpace(),E.push(u()),S.newLine()
else if("@"===v){S.preserveSingleSpace(),E.push(v)
var R=a(": ,;{}()[]/='\"")
R.match(/[ :]$/)&&(i(),R=r(": ").replace(/\s$/,""),E.push(R),S.singleSpace()),(R=R.replace(/\s$/,""))in t.NESTED_AT_RULE&&(A+=1,R in t.CONDITIONAL_GROUP_RULE&&(O=!0))}else"#"===v&&"{"===s()?(S.preserveSingleSpace(),E.push(r("}"))):"{"===v?"}"===s(!0)?(h(),i(),S.singleSpace(),E.push("{}"),S.newLine(),d&&0===x&&S.newLine(!0)):(x++,T+=k,S["{"](v),O?(O=!1,N=x>A):N=x>=A):"}"===v?(x--,T=T.slice(0,-l),S["}"](v),N=!1,L=!1,A&&A--,d&&0===x&&S.newLine(!0)):":"===v?(h(),!N&&!O||_("&")||p()?":"===s()?(i(),E.push("::")):E.push(":"):(L=!0,E.push(":"),S.singleSpace())):'"'===v||"'"===v?(S.preserveSingleSpace(),E.push(r(v))):";"===v?(L=!1,E.push(v),S.newLine()):"("===v?_("url")?(E.push(v),h(),i()&&(")"!==v&&'"'!==v&&"'"!==v?E.push(r(")")):y--)):(m++,S.preserveSingleSpace(),E.push(v),h()):")"===v?(E.push(v),m--):","===v?(E.push(v),h(),f&&!L&&1>m?S.newLine():S.singleSpace()):"]"===v?E.push(v):"["===v?(S.preserveSingleSpace(),E.push(v)):"="===v?(h(),v="=",E.push(v)):(S.preserveSingleSpace(),E.push(v))}var D=""
return T&&(D+=T),D+=E.join("").replace(/[\r\n\t ]+$/,""),g&&(D+="\n"),"\n"!=w&&(D=D.replace(/[\n]/g,w)),D}t.NESTED_AT_RULE={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},t.CONDITIONAL_GROUP_RULE={"@media":!0,"@supports":!0,"@document":!0},"function"==typeof define&&define.amd?define("vs/languages/lib/common/beautify-css",[],function(){return{css_beautify:t}}):"undefined"!=typeof exports?exports.css_beautify=t:"undefined"!=typeof window?window.css_beautify=t:"undefined"!=typeof global&&(global.css_beautify=t)}(),function(){function n(t){return t.replace(/\s+$/g,"")}function i(t,e,i,s){var r,a,h,o,u,_,p,l,c,f,g,d,w,v,b
for(void 0!==(e=e||{}).wrap_line_length&&0!==parseInt(e.wrap_line_length,10)||void 0===e.max_char||0===parseInt(e.max_char,10)||(e.wrap_line_length=e.max_char),a=void 0!==e.indent_inner_html&&e.indent_inner_html,h=void 0===e.indent_size?4:parseInt(e.indent_size,10),o=void 0===e.indent_char?" ":e.indent_char,_=void 0===e.brace_style?"collapse":e.brace_style,u=0===parseInt(e.wrap_line_length,10)?32786:parseInt(e.wrap_line_length||250,10),p=e.unformatted||["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","template","textarea","time","u","var","video","wbr","text","acronym","address","big","dt","ins","small","strike","tt","pre","h1","h2","h3","h4","h5","h6"],l=void 0===e.preserve_newlines||e.preserve_newlines,c=l?isNaN(parseInt(e.max_preserve_newlines,10))?32786:parseInt(e.max_preserve_newlines,10):0,f=void 0!==e.indent_handlebars&&e.indent_handlebars,g=void 0===e.wrap_attributes?"auto":e.wrap_attributes,d=isNaN(parseInt(e.wrap_attributes_indent_size,10))?h:parseInt(e.wrap_attributes_indent_size,10),w=void 0!==e.end_with_newline&&e.end_with_newline,v="object"==typeof e.extra_liners&&e.extra_liners?e.extra_liners.concat():"string"==typeof e.extra_liners?e.extra_liners.split(","):"head,body,/html".split(","),b=e.eol?e.eol:"\n",e.indent_with_tabs&&(o="\t",h=1),b=b.replace(/\\r/,"\r").replace(/\\n/,"\n"),(r=new function(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=a,this.Utils={whitespace:"\n\r\t ".split(""),single_token:["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","?xml","?php","basefont","isindex"],extra_liners:v,in_array:function(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0
return!1}},this.is_whitespace=function(t){for(var e=0;e<t.length;e++)if(!this.Utils.in_array(t.charAt(e),this.Utils.whitespace))return!1
return!0},this.traverse_whitespace=function(){var t=""
if(t=this.input.charAt(this.pos),this.Utils.in_array(t,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(t,this.Utils.whitespace);)l&&"\n"===t&&this.newlines<=c&&(this.newlines+=1),this.pos++,t=this.input.charAt(this.pos)
return!0}return!1},this.space_or_wrap=function(t){return this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,t),this.print_indentation(t),!0):(this.line_char_count++,t.push(" "),!1)},this.get_content=function(){for(var t="",e=[];"<"!==this.input.charAt(this.pos);){if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"]
if(this.traverse_whitespace())this.space_or_wrap(e)
else{if(f){var n=this.input.substr(this.pos,3)
if("{{#"===n||"{{/"===n)break
if("{{!"===n)return[this.get_tag(),"TK_TAG_HANDLEBARS_COMMENT"]
if("{{"===this.input.substr(this.pos,2)&&"{{else}}"===this.get_tag(!0))break}t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,e.push(t)}}return e.length?e.join(""):""},this.get_contents_to=function(t){if(this.pos===this.input.length)return["","TK_EOF"]
var e="",n=new RegExp("</"+t+"\\s*>","igm")
n.lastIndex=this.pos
var i=n.exec(this.input),s=i?i.index:this.input.length
return this.pos<s&&(e=this.input.substring(this.pos,s),this.pos=s),e},this.record_tag=function(t){this.tags[t+"count"]?(this.tags[t+"count"]++,this.tags[t+this.tags[t+"count"]]=this.indent_level):(this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level),this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"]
e&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[e+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1===this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.indent_to_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"]
e&&(this.indent_level=this.tags[t+this.tags[t+"count"]])}},this.get_tag=function(t){var e,n,i="",s=[],r="",a=!1,h=!0,u=this.pos,_=this.line_char_count
t=void 0!==t&&t
do{if(this.pos>=this.input.length)return t&&(this.pos=u,this.line_char_count=_),s.length?s.join(""):["","TK_EOF"]
if(i=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(i,this.Utils.whitespace))a=!0
else{if("'"!==i&&'"'!==i||(i+=this.get_unformatted(i),a=!0),"="===i&&(a=!1),s.length&&"="!==s[s.length-1]&&">"!==i&&a){var l=this.space_or_wrap(s)&&"/"!==i&&"force"!==g
if(a=!1,h||"force"!==g||"/"===i||(this.print_newline(!1,s),this.print_indentation(s),l=!0),l)for(var c=0;d>c;c++)s.push(o)
for(var w=0;w<s.length;w++)if(" "===s[w]){h=!1
break}}if(f&&"<"===n&&i+this.input.charAt(this.pos)==="{{"&&(i+=this.get_unformatted("}}"),s.length&&" "!==s[s.length-1]&&"<"!==s[s.length-1]&&(i=" "+i),a=!0),"<"!==i||n||(e=this.pos-1,n="<"),f&&!n&&s.length>=2&&"{"===s[s.length-1]&&"{"===s[s.length-2]&&(e="#"===i||"/"===i||"!"===i?this.pos-3:this.pos-2,n="{"),this.line_char_count++,s.push(i),s[1]&&("!"===s[1]||"?"===s[1]||"%"===s[1])){s=[this.get_comment(e)]
break}if(f&&s[1]&&"{"===s[1]&&s[2]&&"!"===s[2]){s=[this.get_comment(e)]
break}if(f&&"{"===n&&s.length>2&&"}"===s[s.length-2]&&"}"===s[s.length-1])break}}while(">"!==i)
var v,b,y=s.join("")
v=-1!==y.indexOf(" ")?y.indexOf(" "):"{"===y.charAt(0)?y.indexOf("}"):y.indexOf(">"),b="<"!==y.charAt(0)&&f?"#"===y.charAt(2)?3:2:1
var m=y.substring(b,v).toLowerCase()
return"/"===y.charAt(y.length-2)||this.Utils.in_array(m,this.Utils.single_token)?t||(this.tag_type="SINGLE"):f&&"{"===y.charAt(0)&&"else"===m?t||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(m,p)?(r=this.get_unformatted("</"+m+">",y),s.push(r),this.pos,this.tag_type="SINGLE"):"script"===m&&(-1===y.search("type")||y.search("type")>-1&&y.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json)/)>-1)?t||(this.record_tag(m),this.tag_type="SCRIPT"):"style"===m&&(-1===y.search("type")||y.search("type")>-1&&y.search("text/css")>-1)?t||(this.record_tag(m),this.tag_type="STYLE"):"!"===m.charAt(0)?t||(this.tag_type="SINGLE",this.traverse_whitespace()):t||("/"===m.charAt(0)?(this.retrieve_tag(m.substring(1)),this.tag_type="END"):(this.record_tag(m),"html"!==m.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(s),this.Utils.in_array(m,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!==this.output[this.output.length-2]&&this.print_newline(!0,this.output))),t&&(this.pos=u,this.line_char_count=_),s.join("")},this.get_comment=function(t){var e="",n=">",i=!1
this.pos=t
var s=this.input.charAt(this.pos)
for(this.pos++;this.pos<=this.input.length&&((e+=s).charAt(e.length-1)!==n.charAt(n.length-1)||-1===e.indexOf(n));)!i&&e.length<10&&(0===e.indexOf("<![if")?(n="<![endif]>",i=!0):0===e.indexOf("<![cdata[")?(n="]]>",i=!0):0===e.indexOf("<![")?(n="]>",i=!0):0===e.indexOf("\x3c!--")?(n="--\x3e",i=!0):0===e.indexOf("{{!")?(n="}}",i=!0):0===e.indexOf("<?")?(n="?>",i=!0):0===e.indexOf("<%")&&(n="%>",i=!0)),s=this.input.charAt(this.pos),this.pos++
return e},this.get_unformatted=function(t,e){if(e&&-1!==e.toLowerCase().indexOf(t))return""
var n="",i="",s=!0,r=function(t){var e=""
return{add:function(n){var i=e+n.toLowerCase()
e=i.length<=t.length?i:i.substr(i.length-t.length,t.length)},doesNotMatch:function(){return-1===e.indexOf(t)}}}(t)
do{if(this.pos>=this.input.length)return i
if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!s){this.line_char_count--
continue}if("\n"===n||"\r"===n){i+="\n",this.line_char_count=0
continue}}i+=n,r.add(n),this.line_char_count++,s=!0,f&&"{"===n&&i.length&&"{"===i.charAt(i.length-2)&&(i+=this.get_unformatted("}}"))}while(r.doesNotMatch())
return i},this.get_token=function(){var t
if("TK_TAG_SCRIPT"===this.last_token||"TK_TAG_STYLE"===this.last_token){var e=this.last_token.substr(7)
return"string"!=typeof(t=this.get_contents_to(e))?t:[t,"TK_"+e]}return"CONTENT"===this.current_mode?"string"!=typeof(t=this.get_content())?t:[t,"TK_CONTENT"]:"TAG"===this.current_mode?"string"!=typeof(t=this.get_tag())?t:[t,"TK_TAG_"+this.tag_type]:void 0},this.get_full_indent=function(t){return 1>(t=this.indent_level+t||0)?"":Array(t+1).join(this.indent_string)},this.is_unformatted=function(t,e){if(!this.Utils.in_array(t,e))return!1
if("a"!==t.toLowerCase()||!this.Utils.in_array("a",e))return!0
var n=(this.get_tag(!0)||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/)
return!(n&&!this.Utils.in_array(n,e))},this.printer=function(t,e,i,s,r){this.input=t||"",this.input=this.input.replace(/\r\n|[\r\u2028\u2029]/g,"\n"),this.output=[],this.indent_character=e,this.indent_string="",this.indent_size=i,this.brace_style=r,this.indent_level=0,this.wrap_line_length=s,this.line_char_count=0
for(var a=0;a<this.indent_size;a++)this.indent_string+=this.indent_character
this.print_newline=function(t,e){this.line_char_count=0,e&&e.length&&(t||"\n"!==e[e.length-1])&&("\n"!==e[e.length-1]&&(e[e.length-1]=n(e[e.length-1])),e.push("\n"))},this.print_indentation=function(t){for(var e=0;e<this.indent_level;e++)t.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(t){this.is_whitespace(t)&&!this.output.length||((t||""!==t)&&this.output.length&&"\n"===this.output[this.output.length-1]&&(this.print_indentation(this.output),t=function(t){return t.replace(/^\s+/g,"")}(t)),this.print_token_raw(t))},this.print_token_raw=function(t){this.newlines>0&&(t=n(t)),t&&""!==t&&(t.length>1&&"\n"===t.charAt(t.length-1)?(this.output.push(t.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(t))
for(var e=0;e<this.newlines;e++)this.print_newline(e>0,this.output)
this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}).printer(t,o,h,u,_);;){var y=r.get_token()
if(r.token_text=y[0],r.token_type=y[1],"TK_EOF"===r.token_type)break
switch(r.token_type){case"TK_TAG_START":r.print_newline(!1,r.output),r.print_token(r.token_text),r.indent_content&&(r.indent(),r.indent_content=!1),r.current_mode="CONTENT"
break
case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":r.print_newline(!1,r.output),r.print_token(r.token_text),r.current_mode="CONTENT"
break
case"TK_TAG_END":if("TK_CONTENT"===r.last_token&&""===r.last_text){var m=r.token_text.match(/\w+/)[0],T=null
r.output.length&&(T=r.output[r.output.length-1].match(/(?:<|{{#)\s*(\w+)/)),(null===T||T[1]!==m&&!r.Utils.in_array(T[1],p))&&r.print_newline(!1,r.output)}r.print_token(r.token_text),r.current_mode="CONTENT"
break
case"TK_TAG_SINGLE":var k=r.token_text.match(/^\s*<([a-z-]+)/i)
k&&r.Utils.in_array(k[1],p)||r.print_newline(!1,r.output),r.print_token(r.token_text),r.current_mode="CONTENT"
break
case"TK_TAG_HANDLEBARS_ELSE":for(var x=!1,A=r.output.length-1;A>=0&&"\n"!==r.output[A];A--)if(r.output[A].match(/{{#if/)){x=!0
break}x||r.print_newline(!1,r.output),r.print_token(r.token_text),r.indent_content&&(r.indent(),r.indent_content=!1),r.current_mode="CONTENT"
break
case"TK_TAG_HANDLEBARS_COMMENT":case"TK_CONTENT":r.print_token(r.token_text),r.current_mode="TAG"
break
case"TK_STYLE":case"TK_SCRIPT":if(""!==r.token_text){r.print_newline(!1,r.output)
var S,E=r.token_text,N=1
"TK_SCRIPT"===r.token_type?S="function"==typeof i&&i:"TK_STYLE"===r.token_type&&(S="function"==typeof s&&s),"keep"===e.indent_scripts?N=0:"separate"===e.indent_scripts&&(N=-r.indent_level)
var L=r.get_full_indent(N)
if(S){var O=function(){this.eol="\n"}
O.prototype=e
var C=new O
E=S(E.replace(/^\s*/,L),C)}else{var U=E.match(/^\s*/)[0].match(/[^\n\r]*$/)[0].split(r.indent_string).length-1,I=r.get_full_indent(N-U)
E=E.replace(/^\s*/,L).replace(/\r\n|\r|\n/g,"\n"+I).replace(/\s+$/,"")}E&&(r.print_token_raw(E),r.print_newline(!0,r.output))}r.current_mode="TAG"
break
default:""!==r.token_text&&r.print_token(r.token_text)}r.last_token=r.token_type,r.last_text=r.token_text}var K=r.output.join("").replace(/[\r\n\t ]+$/,"")
return w&&(K+="\n"),"\n"!=b&&(K=K.replace(/[\n]/g,b)),K}if("function"==typeof define&&define.amd)define(t[3],e([1,0,4]),function(t){var e=t("./beautify"),n=t("./beautify-css")
return{html_beautify:function(t,s){return i(t,s,e.js_beautify,n.css_beautify)}}})
else if("undefined"!=typeof exports){var s=require("./beautify.js"),r=require("./beautify-css.js")
exports.html_beautify=function(t,e){return i(t,e,s.js_beautify,r.css_beautify)}}else"undefined"!=typeof window?window.html_beautify=function(t,e){return i(t,e,window.js_beautify,window.css_beautify)}:"undefined"!=typeof global&&(global.html_beautify=function(t,e){return i(t,e,global.js_beautify,global.css_beautify)})}()}).call(this)
