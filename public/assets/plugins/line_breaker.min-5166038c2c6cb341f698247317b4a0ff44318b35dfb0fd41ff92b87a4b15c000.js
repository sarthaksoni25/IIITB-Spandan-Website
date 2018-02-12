/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,o){return void 0===o&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(o),o}:e(jQuery)}(function(e){"use strict";e.extend(e.FroalaEditor.DEFAULTS,{lineBreakerTags:["table","hr","iframe","form","dl"],lineBreakerOffset:10}),e.FroalaEditor.PLUGINS.lineBreaker=function(t){function o(o,n){var i,r,a,f,l,s,d,u;if(null==o)f=n.parent(),l=f.offset().top,d=n.offset().top,i=d-Math.min((d-l)/2,t.opts.lineBreakerOffset),a=f.outerWidth(),r=f.offset().left;else if(null==n)f=o.parent(),s=f.offset().top+f.outerHeight(),u=o.offset().top+o.outerHeight(),i=u+Math.min((s-u)/2,t.opts.lineBreakerOffset),a=f.outerWidth(),r=f.offset().left;else{f=o.parent();var p=o.offset().top+o.height(),w=n.offset().top;if(p>w)return!1;i=(p+w)/2,a=f.outerWidth(),r=f.offset().left}t.opts.iframe&&(r+=t.$iframe.offset().left-e(t.original_window).scrollLeft(),i+=t.$iframe.offset().top-e(t.original_window).scrollTop()),g.css("top",i-t.window.pageYOffset),g.css("left",r-t.window.pageXOffset),g.css("width",a),g.data("tag1",o),g.data("tag2",n),g.show()}function n(e,n){var r,a,f=e.offset().top,l=e.offset().top+e.outerHeight();if(Math.abs(l-n)<=t.opts.lineBreakerOffset||Math.abs(n-f)<=t.opts.lineBreakerOffset)if(Math.abs(l-n)<Math.abs(n-f)){a=e.get(0);for(var s=a.nextSibling;s&&s.nodeType==Node.TEXT_NODE&&0===s.textContent.length;)s=s.nextSibling;s?(r=i(s),r&&o(e,r)):o(e,null)}else a=e.get(0),a.previousSibling?(r=i(a.previousSibling),r&&o(r,e)):o(null,e)}function i(o){if(o){var n=e(o);if(0===t.$el.find(n).length)return null;if(o.nodeType!=Node.TEXT_NODE&&t.opts.lineBreakerTags.indexOf(o.tagName.toLowerCase())>=0)return n;if(n.parents(t.opts.lineBreakerTags.join(",")).length>0)return o=n.parents(t.opts.lineBreakerTags.join(",")).get(0),e(o)}return null}function r(o){m=null,g.hide();var r,a,f,l=null,s=t.document.elementFromPoint(o.pageX-t.window.pageXOffset,o.pageY-t.window.pageYOffset);if(t.node.isElement(s))for(r=1;r<=t.opts.lineBreakerOffset;r++){if(a=t.document.elementFromPoint(o.pageX-t.window.pageXOffset,o.pageY-t.window.pageYOffset-r),a&&!t.node.isElement(a)&&a!=t.$wp.get(0)&&e(a).parents(t.$wp).length){l=i(a);break}if(f=t.document.elementFromPoint(o.pageX-t.window.pageXOffset,o.pageY-t.window.pageYOffset+r),f&&!t.node.isElement(f)&&f!=t.$wp.get(0)&&e(f).parents(t.$wp).length){l=i(f);break}}else l=i(s);l&&n(l,o.pageY)}function a(e){w===!1&&(m&&clearTimeout(m),m=setTimeout(r,30,e))}function f(){m&&clearTimeout(m),g.hide()}function l(){w=!0,f()}function s(){w=!1}function d(o){o.preventDefault(),g.hide();var n=g.data("tag1"),i=g.data("tag2"),r=t.html.defaultTag();null==n?r&&"TD"!=i.parent().get(0).tagName?i.before("<"+r+">"+e.FroalaEditor.MARKERS+"<br></"+r+">"):i.before(e.FroalaEditor.MARKERS+"<br>"):r&&"TD"!=n.parent().get(0).tagName?n.after("<"+r+">"+e.FroalaEditor.MARKERS+"<br></"+r+">"):n.after(e.FroalaEditor.MARKERS+"<br>"),t.selection.restore()}function u(){g=e('<div class="fr-line-breaker"><a role="button" tabindex="-1" title="'+t.language.translate("Break")+'"><i class="fa fa-plus"></i></a></div>'),t.$wp.append(g),t.events.on("destroy",function(){g.html("").removeData().remove()},!0),g.on("mouseleave.linebreaker"+t.id,f),g.on("mousemove",function(e){e.stopPropagation()}),g.on("mousedown","a",function(e){e.stopPropagation()}),g.on("click","a",d),t.events.on("destroy",function(){g.off("mouseleave.linebreaker"),g.off("mousedown"),g.off("mousedown","a"),g.off("click","a")},!0)}function p(){return t.$wp?(u(),w=!1,t.$window.on("mousemove.linebreaker"+t.id,a),e(t.window).on("scroll.linebreaker"+t.id,f),e(t.window).on("mousedown.linebreaker"+t.id,l),e(t.window).on("mouseup.linebreaker"+t.id,s),void t.events.on("destroy",function(){t.$window.off("mousemove.linebreaker"+t.id),e(t.window).off("scroll.linebreaker"+t.id),e(t.window).off("mousedown.linebreaker"+t.id),e(t.window).off("mouseup.linebreaker"+t.id)},!0)):!1}var g,w,m;return{_init:p}}});