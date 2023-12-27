/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.editorConfig = function( config ) {
	// Определите изменения в конфигурации по умолчанию здесь. Например:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'savestatic,exportodt,exportpdf,inputsdb';

	config.toolbar = [
		["Source",'savestatic',"DocProps", "Preview","Print","Templates","document",'exportodt','exportpdf','inputsdb'],
		["Cut","Copy","Paste","PasteText",'-',"Undo","Redo"],
		["Find","Replace","SelectAll"],
		['Bold', 'Italic', 'Underline', "Strike","Subscript","Superscript"],
		["NumberedList","BulletedList"],
		["Outdent","Indent"],

		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],

		["CreatePlaceholder","Image","Table","HorizontalRule","PageBreak","InsertPre"],
		['Styles', 'Format', 'Font', 'FontSize'],
		['TextColor', 'BGColor'],
		["Maximize","ShowBlocks", "About"]
	];

};
