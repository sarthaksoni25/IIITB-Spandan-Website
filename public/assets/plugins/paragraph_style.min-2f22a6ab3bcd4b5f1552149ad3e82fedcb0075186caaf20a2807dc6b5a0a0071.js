/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";a.extend(a.FroalaEditor.DEFAULTS,{paragraphStyles:{"fr-text-gray":"Gray","fr-text-bordered":"Bordered","fr-text-spaced":"Spaced","fr-text-uppercase":"Uppercase"},paragraphMultipleStyles:!0}),a.FroalaEditor.PLUGINS.paragraphStyle=function(b){function c(c){var d="";b.opts.paragraphMultipleStyles||(d=Object.keys(b.opts.paragraphStyles),d.splice(d.indexOf(c),1),d=d.join(" ")),b.selection.save(),b.html.wrap(!0,!0,!0),b.selection.restore();var e=b.selection.blocks();b.selection.save();for(var f=0;f<e.length;f++)a(e[f]).removeClass(d).toggleClass(c),a(e[f]).hasClass("fr-temp-div")&&a(e[f]).removeClass("fr-temp-div"),""===a(e[f]).attr("class")&&a(e[f]).removeAttr("class");b.html.unwrap(),b.selection.restore()}function d(c,d){var e=b.selection.blocks();if(e.length){var f=a(e[0]);d.find(".fr-command").each(function(){var b=a(this).data("param1");a(this).toggleClass("fr-active",f.hasClass(b))})}}function e(){}return{_init:e,apply:c,refreshOnShow:d}},a.FroalaEditor.RegisterCommand("paragraphStyle",{type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list">',b=this.opts.paragraphStyles;for(var c in b)a+='<li><a class="fr-command '+c+'" data-cmd="paragraphStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>";return a+="</ul>"},title:"Paragraph Style",callback:function(a,b){this.paragraphStyle.apply(b)},refreshOnShow:function(a,b){this.paragraphStyle.refreshOnShow(a,b)}}),a.FroalaEditor.DefineIcon("paragraphStyle",{NAME:"magic"})});