/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(r,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(r)),e(i),i}:e(jQuery)}(function(e){"use strict";e.extend(e.FroalaEditor.POPUP_TEMPLATES,{"file.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"}),e.extend(e.FroalaEditor.DEFAULTS,{fileUploadURL:"http://i.froala.com/upload",fileUploadParam:"file",fileUploadParams:{},fileUploadToS3:!1,fileUploadMethod:"POST",fileMaxSize:10485760,fileAllowedTypes:["*"],fileInsertButtons:["fileBack","|"],fileUseSelectedText:!1}),e.FroalaEditor.PLUGINS.file=function(r){function i(){var e=r.$tb.find('.fr-command[data-cmd="insertFile"]'),i=r.popups.get("file.insert");if(i||(i=m()),o(),!i.hasClass("fr-active")){r.popups.refresh("file.insert"),r.popups.setContainer("file.insert",r.$tb);var t=e.offset().left+e.outerWidth()/2,a=e.offset().top+(r.opts.toolbarBottom?0:e.outerHeight());r.popups.show("file.insert",t,a,e.outerHeight())}}function t(){var e=r.popups.get("file.insert");e&&(e.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),e.find(".fr-file-progress-bar-layer").addClass("fr-active"),e.find(".fr-buttons").hide(),a("Uploading",0))}function o(e){var i=r.popups.get("file.insert");i&&(i.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),i.find(".fr-file-progress-bar-layer").removeClass("fr-active"),i.find(".fr-buttons").show(),e&&r.popups.show("file.insert",null,null))}function a(e,i){var t=r.popups.get("file.insert");if(t){var o=t.find(".fr-file-progress-bar-layer");o.find("h3").text(e+(i?" "+i+"%":"")),o.removeClass("fr-error"),i?(o.find("div").removeClass("fr-indeterminate"),o.find("div > span").css("width",i+"%")):o.find("div").addClass("fr-indeterminate")}}function n(e){var i=r.popups.get("file.insert"),t=i.find(".fr-file-progress-bar-layer");t.addClass("fr-error"),t.find("h3").text(e)}function s(e,i,t){r.edit.on(),r.events.focus(!0),r.selection.restore(),r.html.insert('<a href="'+e+'" id="fr-inserted-file" class="fr-file">'+(i||r.selection.text())+"</a>");var o=r.$el.find("#fr-inserted-file");o.removeAttr("id"),r.popups.hide("file.insert"),r.undo.saveStep(),r.events.trigger("file.inserted",[o,t])}function l(i){try{if(r.events.trigger("file.uploaded",[i],!0)===!1)return r.edit.on(),!1;var t=e.parseJSON(i);return t.link?t:(c(k,i),!1)}catch(o){return c(S,i),!1}}function f(i){try{var t=e(i).find("Location").text(),o=e(i).find("Key").text();return r.events.trigger("file.uploadedToS3",[t,o,i],!0)===!1?(r.edit.on(),!1):t}catch(a){return c(S,i),!1}}function p(e){var i=this.status,t=this.response,o=this.responseXML,a=this.responseText;try{if(r.opts.fileUploadToS3)if(201==i){var n=f(o);n&&s(n,e,t||o)}else c(S,t||o);else if(i>=200&&300>i){var p=l(a);p&&s(p.link,e,t||a)}else c(E,t||a)}catch(d){c(S,t||a)}}function d(){c(S,this.response||this.responseText||this.responseXML)}function u(e){if(e.lengthComputable){var r=e.loaded/e.total*100|0;a("Uploading",r)}}function c(e,i){r.edit.on(),n(r.language.translate("Something went wrong. Please try again.")),r.events.trigger("file.error",[{code:e,message:A[e]},i])}function v(e){if(r.events.trigger("file.beforeUpload",[e])===!1)return!1;if("undefined"!=typeof e&&e.length>0){var i=e[0];if(i.size>r.opts.fileMaxSize)return c(x),!1;if(r.opts.fileAllowedTypes.indexOf("*")<0&&r.opts.fileAllowedTypes.indexOf(i.type.replace(/file\//g,""))<0)return c(P),!1;var o;if(r.drag_support.formdata&&(o=r.drag_support.formdata?new FormData:null),o){var a;if(r.opts.fileUploadToS3!==!1){o.append("key",r.opts.fileUploadToS3.keyStart+(new Date).getTime()+"-"+(i.name||"untitled")),o.append("success_action_status","201"),o.append("X-Requested-With","xhr"),o.append("Content-Type",i.type);for(a in r.opts.fileUploadToS3.params)o.append(a,r.opts.fileUploadToS3.params[a])}for(a in r.opts.fileUploadParams)o.append(a,r.opts.fileUploadParams[a]);o.append(r.opts.fileUploadParam,i);var n=r.opts.fileUploadURL;r.opts.fileUploadToS3&&(n="https://"+r.opts.fileUploadToS3.region+".amazonaws.com/"+r.opts.fileUploadToS3.bucket);var s=r.core.getXHR(n,r.opts.fileUploadMethod);s.onload=function(){p.call(s,[r.opts.fileUseSelectedText?null:i.name])},s.onerror=d,s.upload.onprogress=u,t(),r.edit.off(),s.send(o)}}}function g(r){r.on("dragover dragenter",".fr-file-upload-layer",function(){return e(this).addClass("fr-drop"),!1}),r.on("dragleave dragend",".fr-file-upload-layer",function(){return e(this).removeClass("fr-drop"),!1}),r.on("drop",".fr-file-upload-layer",function(r){r.preventDefault(),r.stopPropagation(),e(this).removeClass("fr-drop");var i=r.originalEvent.dataTransfer;i&&i.files&&v(i.files)}),r.on("change",'.fr-file-upload-layer input[type="file"]',function(){this.files&&v(this.files),e(this).val("")})}function h(){o()}function m(){var e="";e='<div class="fr-buttons">'+r.button.buildList(r.opts.fileInsertButtons)+"</div>";var i="";i='<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'+r.id+'"><strong>'+r.language.translate("Drop file")+"</strong><br>("+r.language.translate("or click")+')<div class="fr-form"><input type="file" name="'+r.opts.fileUploadParam+'" accept="/*" tabIndex="-1"></div></div>';var t='<div class="fr-file-progress-bar-layer fr-layer"><h3 class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command" data-cmd="fileDismissError" tabIndex="2">OK</button></div></div>',o={buttons:e,upload_layer:i,progress_bar:t},a=r.popups.create("file.insert",o);return r.popups.onHide("file.insert",h),g(a),a}function y(i){return e(i).hasClass("fr-file")?r.events.trigger("file.unlink",[i]):void 0}function b(){var i=function(e){e.preventDefault()};r.events.on("dragenter",i),r.events.on("dragover",i),r.events.on("drop",function(i){r.popups.hideAll();var o=i.originalEvent.dataTransfer;if(o&&o.files&&o.files.length){var a=o.files[0];if(a&&a.type&&(r.opts.fileAllowedTypes.indexOf(a.type)>=0||r.opts.fileAllowedTypes.indexOf("*")>=0)){r.markers.insertAtPoint(i.originalEvent),r.markers.remove(),r.popups.hideAll();var n=r.popups.get("file.insert");n||(n=m()),r.popups.setContainer("file.insert",e(r.opts.scrollableContainer)),r.popups.show("file.insert",i.originalEvent.pageX,i.originalEvent.pageY),t(),v(o.files),i.preventDefault(),i.stopPropagation()}}})}function U(){r.events.disableBlur(),r.selection.restore(),r.events.enableBlur(),r.popups.hide("file.insert"),r.toolbar.showInline()}function C(){b(),r.events.on("link.beforeRemove",y)}var T=1,k=2,E=3,S=4,x=5,P=6,w=7,A={};return A[T]="File cannot be loaded from the passed link.",A[k]="No link in upload response.",A[E]="Error during file upload.",A[S]="Parsing response failed.",A[x]="File is too large.",A[P]="File file type is invalid.",A[w]="Files can be uploaded only to same domain in IE 8 and IE 9.",{_init:C,showInsertPopup:i,upload:v,insert:s,back:U,hideProgressBar:o}},e.FroalaEditor.DefineIcon("insertFile",{NAME:"file-o"}),e.FroalaEditor.RegisterCommand("insertFile",{title:"Upload File",undo:!1,focus:!0,refershAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("file.insert")?(this.$el.find(".fr-marker")&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("file.insert")):this.file.showInsertPopup()}}),e.FroalaEditor.DefineIcon("fileBack",{NAME:"arrow-left"}),e.FroalaEditor.RegisterCommand("fileBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.file.back()},refresh:function(e){this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),e.FroalaEditor.RegisterCommand("fileDismissError",{title:"OK",callback:function(){this.file.hideProgressBar(!0)}})});