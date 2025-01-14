{
	func: {
		prefix: "func",
		body: [
			"function (${param}) {  }"
		],
		description: "An anonymous function."
	},
	jqAfter: {
		prefix: "jqAfter",
		body: [
			"$(${selector}).after(${content});"
		],
		description: "Insert content, specified by the parameter, after each element in the set of matched elements."
	},
	jqAjax: {
		prefix: "jqAjax",
		body: [
			"$.ajax({",
			"\ttype: \"${method}\",",
			"\turl: \"${url}\",",
			"\tdata: \"${data}\",",
			"\tdataType: \"${dataType}\",",
			"\tsuccess: function (response) {",
			"\t\t$0",
			"\t}",
			"});"
		],
		description: "Perform an asynchronous HTTP (Ajax) request."
	},
	jqAjaxAspNetWebService: {
		prefix: "jqAjaxAspNetWebService",
		body: [
			"$.ajax({",
			"\ttype: \"POST\",",
			"\tcontentType: \"application/json; charset=utf-8\",",
			"\tdataType: \"${dataType}\",",
			"\turl: \"${url}\",",
			"\tdata: \"${data}\",",
			"\tsuccess: function (response) {",
			"\t\t$0",
			"\t}",
			"});"
		],
		description: "Perform an asynchronous HTTP (Ajax) request to a ASP.NET web service."
	},
	jqAppend: {
		prefix: "jqAppend",
		body: [
			"$(${selector}).append(${content});"
		],
		description: "Insert content, specified by the parameter, to the end of each element in the set of matched elements."
	},
	jqAppendTo: {
		prefix: "jqAppendTo",
		body: [
			"$(${content}).appendTo(${selector});"
		],
		description: "Insert every element in the set of matched elements to the end of the target."
	},
	jqAttrGet: {
		prefix: "jqAttrGet",
		body: [
			"$(${selector}).attr(${attributeName});"
		],
		description: "Get the value of an attribute for the first element in the set of matched elements."
	},
	jqAttrRemove: {
		prefix: "jqAttrRemove",
		body: [
			"$(${selector}).removeAttr(${attributeName});"
		],
		description: "Remove an attribute from each element in the set of matched elements."
	},
	jqAttrSet: {
		prefix: "jqAttrSet",
		body: [
			"$(${selector}).attr(${attributeName}, ${value});"
		],
		description: "Set one or more attributes for the set of matched elements."
	},
	jqAttrSetFn: {
		prefix: "jqAttrSetFn",
		body: [
			"$(${selector}).attr(${attributeName}, function (index, attr) { ",
			"\t$0 ",
			"});"
		],
		description: "Set one or more attributes for the set of matched elements."
	},
	jqAttrSetObj: {
		prefix: "jqAttrSetObj",
		body: [
			"$(${selector}).attr({",
			"\t${name}: ${value}",
			"\t$0",
			"});"
		],
		description: "Set one or more attributes for the set of matched elements."
	},
	jqBefore: {
		prefix: "jqBefore",
		body: [
			"$(${selector}).before(${content});"
		],
		description: "Insert content, specified by the parameter, before each element in the set of matched elements."
	},
	jqBind: {
		prefix: "jqBind",
		body: [
			"$(${selector}).bind(${eventType}, function (e) {",
			"\t$0",
			"});"
		],
		description: "Attach a handler to an event for the elements."
	},
	jqBindWithData: {
		prefix: "jqBindWithData",
		body: [
			"$(${selector}).bind(${eventType}, ${eventData}, function (e) {",
			"\t$0",
			"});"
		],
		description: "Attach a handler to an event for the elements."
	},
	jqBlur: {
		prefix: "jqBlur",
		body: [
			"$(${selector}).blur(function (e) { ",
			"\te.preventDefault();",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"blur\" JavaScript event, or trigger that event on an element."
	},
	jqChange: {
		prefix: "jqChange",
		body: [
			"$(${selector}).change(function (e) { ",
			"\te.preventDefault();",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"change\" JavaScript event, or trigger that event on an element."
	},
	jqClassAdd: {
		prefix: "jqClassAdd",
		body: [
			"$(${selector}).addClass(${className});"
		],
		description: "Adds the specified class(es) to each of the set of matched elements."
	},
	jqClassRemove: {
		prefix: "jqClassRemove",
		body: [
			"$(${selector}).removeClass(${className});"
		],
		description: "Remove a single class, multiple classes, or all classes from each element in the set of matched elements."
	},
	jqClassToggle: {
		prefix: "jqClassToggle",
		body: [
			"$(${selector}).toggleClass(${className});"
		],
		description: "Add or remove one or more classes from each element in the set of matched elements, depending on either the class\u0027s presence."
	},
	jqClassToggleSwitch: {
		prefix: "jqClassToggleSwitch",
		body: [
			"$(${selector}).toggleClass(${className}, ${switch});"
		],
		description: "Add or remove one or more classes from each element in the set of matched elements, depending on either the class\u0027s presence or the value of the switch argument."
	},
	jqClick: {
		prefix: "jqClick",
		body: [
			"$(${selector}).click(function (e) { ",
			"\te.preventDefault();",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"click\" JavaScript event, or trigger that event on an element."
	},
	jqClone: {
		prefix: "jqClone",
		body: [
			"$(${selector}).clone();"
		],
		description: "Create a deep copy of the set of matched elements."
	},
	jqCloneWithEvents: {
		prefix: "jqCloneWithEvents",
		body: [
			"$(${selector}).clone(true);"
		],
		description: "Create a deep copy of the set of matched elements."
	},
	jqCssGet: {
		prefix: "jqCssGet",
		body: [
			"$(${selector}).css(${propertyName});"
		],
		description: "Get the computed style properties for the first element in the set of matched elements."
	},
	jqCssSet: {
		prefix: "jqCssSet",
		body: [
			"$(${selector}).css(${propertyName}, ${value});"
		],
		description: "Set one or more CSS properties for the set of matched elements."
	},
	jqCssSetObj: {
		prefix: "jqCssSetObj",
		body: [
			"$(${selector}).css({",
			"\t${propertyName}: ${value}",
			"\t$0",
			"});"
		],
		description: "Set one or more CSS properties for the set of matched elements."
	},
	jqDataGet: {
		prefix: "jqDataGet",
		body: [
			"$(${selector}).data(${key});"
		],
		description: "Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute."
	},
	jqDataRemove: {
		prefix: "jqDataRemove",
		body: [
			"$(${selector}).removeData(${element});"
		],
		description: "Remove a previously-stored piece of data."
	},
	jqDataSet: {
		prefix: "jqDataSet",
		body: [
			"$(${selector}).data(${key}, ${value});"
		],
		description: "Store arbitrary data associated with the matched elements."
	},
	jqDataSetObj: {
		prefix: "jqDataSetObj",
		body: [
			"$(${selector}).data({",
			"\t${key}: ${value}",
			"\t$0",
			"});"
		],
		description: "Store arbitrary data associated with the matched elements."
	},
	jqDie: {
		prefix: "jqDie",
		body: [
			"$(${selector}).die(${eventType});"
		],
		description: "Remove event handlers previously attached using .live() from the elements."
	},
	jqDieAll: {
		prefix: "jqDieAll",
		body: [
			"$(${selector}).die();"
		],
		description: "Remove event handlers previously attached using .live() from the elements."
	},
	jqDieFn: {
		prefix: "jqDieFn",
		body: [
			"$(${selector}).die(${eventType}, ${handler});"
		],
		description: "Remove event handlers previously attached using .live() from the elements."
	},
	jqDocReady: {
		prefix: "jqDocReady",
		body: [
			"$(document).ready(function () {",
			"\t$0",
			"});"
		],
		description: "Function to execute when the DOM is fully loaded."
	},
	jqDocReadyShort: {
		prefix: "jqDocReadyShort",
		body: [
			"$(function () {",
			"\t$0",
			"});"
		],
		description: "Function to execute when the DOM is fully loaded."
	},
	jqEach: {
		prefix: "jqEach",
		body: [
			"$.each(${collection}, function (indexInArray, valueOfElement) { ",
			"\t$0 ",
			"});"
		],
		description: "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function\u0027s arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties."
	},
	jqEachElement: {
		prefix: "jqEachElement",
		body: [
			"$(${selector}).each(function (index, element) {",
			"\t// element == this",
			"\t$0",
			"});"
		],
		description: "Iterate over a jQuery object, executing a function for each matched element. "
	},
	jqEmpty: {
		prefix: "jqEmpty",
		body: [
			"$(${selector}).empty();"
		],
		description: "Remove all child nodes of the set of matched elements from the DOM."
	},
	jqFadeIn: {
		prefix: "jqFadeIn",
		body: [
			"$(${selector}).fadeIn();"
		],
		description: "Display the matched elements by fading them to opaque."
	},
	jqFadeInFull: {
		prefix: "jqFadeInFull",
		body: [
			"$(${selector}).fadeIn(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Display the matched elements by fading them to opaque."
	},
	jqFadeOut: {
		prefix: "jqFadeOut",
		body: [
			"$(${selector}).fadeOut();"
		],
		description: "Hide the matched elements by fading them to transparent."
	},
	jqFadeOutFull: {
		prefix: "jqFadeOutFull",
		body: [
			"$(${selector}).fadeOut(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Hide the matched elements by fading them to transparent."
	},
	jqFadeTo: {
		prefix: "jqFadeTo",
		body: [
			"$(${selector}).fadeTo(${duration}, ${opacity});"
		],
		description: "Adjust the opacity of the matched elements."
	},
	jqFadeToFull: {
		prefix: "jqFadeToFull",
		body: [
			"$(${selector}).fadeTo(${duration}, ${opacity}, function () {",
			"\t$0",
			"});"
		],
		description: "Adjust the opacity of the matched elements."
	},
	jqFind: {
		prefix: "jqFind",
		body: [
			"$(${selector}).find(${selector2});"
		],
		description: "Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element."
	},
	jqFocus: {
		prefix: "jqFocus",
		body: [
			"$(${selector}).focus(function (e) { ",
			"\te.preventDefault();",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"focus\" JavaScript event, or trigger that event on an element."
	},
	jqGet: {
		prefix: "jqGet",
		body: [
			"$.get(\"${url}\", ${data},",
			"\tfunction (data, textStatus, jqXHR) {",
			"\t\t$0",
			"\t},",
			"\t\"${dataType}\"",
			");"
		],
		description: "Load data from the server using a HTTP GET request."
	},
	jqGetJson: {
		prefix: "jqGetJson",
		body: [
			"$.getJSON(\"${url}\", ${data},",
			"\tfunction (data, textStatus, jqXHR) {",
			"\t\t$0",
			"\t}",
			");"
		],
		description: "Load JSON-encoded data from the server using a GET HTTP request."
	},
	jqGetScript: {
		prefix: "jqGetScript",
		body: [
			"$.getScript(\"${url}\", function (script, textStatus, jqXHR) {",
			"\t$0",
			"});"
		],
		description: "Load a JavaScript file from the server using a GET HTTP request, then execute it."
	},
	jqHasClass: {
		prefix: "jqHasClass",
		body: [
			"$(${selector}).hasClass(${className});"
		],
		description: "Determine whether any of the matched elements are assigned the given class."
	},
	jqHeightGet: {
		prefix: "jqHeightGet",
		body: [
			"$(${selector}).height();"
		],
		description: "Get the current computed height for the first element in the set of matched elements."
	},
	jqHeightSet: {
		prefix: "jqHeightSet",
		body: [
			"$(${selector}).height(${value});"
		],
		description: "Set the CSS height of every matched element."
	},
	jqHide: {
		prefix: "jqHide",
		body: [
			"$(${selector}).hide();"
		],
		description: "Hide the matched elements."
	},
	jqHideFull: {
		prefix: "jqHideFull",
		body: [
			"$(${selector}).hide(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Hide the matched elements."
	},
	jqHover: {
		prefix: "jqHover",
		body: [
			"$(${selector}).hover(function () {",
			"\t\t// over",
			"\t\t$0",
			"\t}, function () {",
			"\t\t// out",
			"\t}",
			");"
		],
		description: "Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements."
	},
	jqHtmlGet: {
		prefix: "jqHtmlGet",
		body: [
			"$(${selector}).html();"
		],
		description: "Get the HTML contents of the first element in the set of matched elements."
	},
	jqHtmlSet: {
		prefix: "jqHtmlSet",
		body: [
			"$(${selector}).html(${htmlString});"
		],
		description: "Set the HTML contents of each element in the set of matched elements."
	},
	jqInnerHeight: {
		prefix: "jqInnerHeight",
		body: [
			"$(${selector}).innerHeight();"
		],
		description: "Get the current computed height for the first element in the set of matched elements, including padding but not border."
	},
	jqInnerWidth: {
		prefix: "jqInnerWidth",
		body: [
			"$(${selector}).innerWidth();"
		],
		description: "Get the current computed inner width for the first element in the set of matched elements, including padding but not border."
	},
	jqInsertAfter: {
		prefix: "jqInsertAfter",
		body: [
			"$(${target}).insertAfter(${selector});"
		],
		description: "Insert every element in the set of matched elements after the target."
	},
	jqInsertBefore: {
		prefix: "jqInsertBefore",
		body: [
			"$(${target}).insertBefore(${selector});"
		],
		description: "Insert every element in the set of matched elements before the target."
	},
	jqKeyDown: {
		prefix: "jqKeyDown",
		body: [
			"$(${selector}).keydown(function (e) { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"keydown\" JavaScript event, or trigger that event on an element."
	},
	jqKeyPress: {
		prefix: "jqKeyPress",
		body: [
			"$(${selector}).keypress(function (e) { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"keypress\" JavaScript event, or trigger that event on an element."
	},
	jqKeyUp: {
		prefix: "jqKeyUp",
		body: [
			"$(${selector}).keyup(function (e) { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"keyup\" JavaScript event, or trigger that event on an element."
	},
	jqLoadGet: {
		prefix: "jqLoadGet",
		body: [
			"$(${selector}).load(\"${url}\", \"${data}\", function (response, status, request) {",
			"\tthis; // dom element",
			"\t$0",
			"});"
		],
		description: "Load data from the server and place the returned HTML into the matched element."
	},
	jqLoadPost: {
		prefix: "jqLoadPost",
		body: [
			"$(${selector}).load(\"${url}\", \"${data}\", function (response, status, request) {",
			"\tthis; // dom element",
			"\t$0",
			"});"
		],
		description: "Load data from the server and place the returned HTML into the matched element."
	},
	jqMap: {
		prefix: "jqMap",
		body: [
			"$.map(${arrayOrObject}, function (elementOrValue, indexOrKey) {",
			"\t$0",
			"});"
		],
		description: "Translate all items in an array or object to new array of items."
	},
	jqMouseDown: {
		prefix: "jqMouseDown",
		body: [
			"$(${selector}).mousedown(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"mousedown\" JavaScript event, or trigger that event on an element."
	},
	jqMouseEnter: {
		prefix: "jqMouseEnter",
		body: [
			"$(${selector}).mouseenter(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element."
	},
	jqMouseLeave: {
		prefix: "jqMouseLeave",
		body: [
			"$(${selector}).mouseleave(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element."
	},
	jqMouseMove: {
		prefix: "jqMouseMove",
		body: [
			"$(${selector}).mousemove(function (e) { ",
			"\t// values: e.clientX, e.clientY, e.pageX, e.pageY",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"mousemove\" JavaScript event, or trigger that event on an element."
	},
	jqMouseOut: {
		prefix: "jqMouseOut",
		body: [
			"$(${selector}).mouseout(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"mouseout\" JavaScript event, or trigger that event on an element."
	},
	jqMouseOver: {
		prefix: "jqMouseOver",
		body: [
			"$(${selector}).mouseover(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"mouseover\" JavaScript event, or trigger that event on an element."
	},
	jqMouseUp: {
		prefix: "jqMouseUp",
		body: [
			"$(${selector}).mouseup(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"mouseup\" JavaScript event, or trigger that event on an element."
	},
	jqNamespace: {
		prefix: "jqNamespace",
		body: [
			"(function ( ${name}, $, undefined ) {",
			"\t// Private Property",
			"\tmyPrivateProperty = \"Private Property\";",
			"\t\t",
			"\t// Public Property",
			"\t${name}.myPublicProperty = \"Publically Accessible Property\";",
			"\t\t",
			"\t// Private Method",
			"\tfunction myPrivateMethod () {",
			"\t\t",
			"\t}",
			"\t\t",
			"\t// Public Method",
			"\t${name}.myPublicMethod = function () {",
			"\t\t",
			"\t};  ",
			"}(window.${name} = window.${name} || {}, jQuery ));"
		],
		description: "A namespace template. ref: http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/"
	},
	jqOffsetGet: {
		prefix: "jqOffsetGet",
		body: [
			"var offset = $(${selector}).offset();",
			"var top = offset.top;",
			"var left = offset.left;",
			"$0"
		],
		description: "Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document."
	},
	jqOffsetParent: {
		prefix: "jqOffsetParent",
		body: [
			"var offset = $(${selector}).offsetParent();",
			"var top = offset.top;",
			"var left = offset.left;",
			"$0"
		],
		description: "Get the closest ancestor element that is positioned."
	},
	jqOn: {
		prefix: "jqOn",
		body: [
			"$(${selector}).on(${events}, function () {",
			"\t$0",
			"});"
		],
		description: "Attach an event handler function for one or more events to the selected elements."
	},
	jqOne: {
		prefix: "jqOne",
		body: [
			"$(${selector}).one(${events}, function (e) {",
			"\t$0",
			"});"
		],
		description: "Attach a handler to an event for the elements. The handler is executed at most once per element per event type."
	},
	jqOneWithData: {
		prefix: "jqOneWithData",
		body: [
			"$(${selector}).one(${events}, ${data}, function (e) {",
			"\t$0",
			"});"
		],
		description: "Attach a handler to an event for the elements. The handler is executed at most once per element per event type."
	},
	jqOuterHeight: {
		prefix: "jqOuterHeight",
		body: [
			"$(${selector}).outerHeight(${includeMargin});"
		],
		description: "Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns a number (without \"px\") representation of the value or null if called on an empty set of elements."
	},
	jqOuterWidth: {
		prefix: "jqOuterWidth",
		body: [
			"$(${selector}).outerWidth(${includeMargin});"
		],
		description: "Get the current computed width for the first element in the set of matched elements, including padding and border."
	},
	jqPlugin: {
		prefix: "jqPlugin",
		body: [
			"(function ($) {",
			"\tjQuery.fn.${pluginName} = function (settings) {",
			"\t\tvar config = {\u0027foo\u0027: \u0027bar\u0027};",
			" ",
			"\t\tif (settings) jQuery.extend(config, settings);",
			" ",
			"\t\tthis.each(function () {",
			"\t\t\t// element-specific code here",
			"\t\t\t$0",
			"\t\t});",
			" ",
			"\t\treturn this;",
			"\t};",
			"})(jQuery);"
		],
		description: "Plugin template."
	},
	jqPosition: {
		prefix: "jqPosition",
		body: [
			"var position = $(${selector}).position();",
			"var top = position.top;",
			"var left = position.left;",
			"$0"
		],
		description: "Get the current coordinates of the first element in the set of matched elements, relative to the offset parent."
	},
	jqPost: {
		prefix: "jqPost",
		body: [
			"$.post(\"${url}\", ${data},",
			"\tfunction (data, textStatus, jqXHR) {",
			"\t\t$0",
			"\t},",
			"\t\"${dataType}\"",
			");"
		],
		description: "Load data from the server using a HTTP POST request."
	},
	jqPrepend: {
		prefix: "jqPrepend",
		body: [
			"$(${selector}).prepend(${content});"
		],
		description: "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements."
	},
	jqPrependTo: {
		prefix: "jqPrependTo",
		body: [
			"$(${content}).prependTo(${selector});"
		],
		description: "Insert every element in the set of matched elements to the beginning of the target."
	},
	jqRemove: {
		prefix: "jqRemove",
		body: [
			"$(${selector}).remove();"
		],
		description: "Remove the set of matched elements from the DOM."
	},
	jqRemoveExp: {
		prefix: "jqRemoveExp",
		body: [
			"$(${selector}).remove(${expression});"
		],
		description: "Remove the set of matched elements from the DOM."
	},
	jqReplaceAll: {
		prefix: "jqReplaceAll",
		body: [
			"$(${selector}).replaceAll(${target});"
		],
		description: "Replace each target element with the set of matched elements."
	},
	jqReplaceWith: {
		prefix: "jqReplaceWith",
		body: [
			"$(${selector}).replaceWith(${newContent});"
		],
		description: "Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed."
	},
	jqResize: {
		prefix: "jqResize",
		body: [
			"$(${selector}).resize(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"resize\" JavaScript event, or trigger that event on an element."
	},
	jqScroll: {
		prefix: "jqScroll",
		body: [
			"$(${selector}).scroll(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"scroll\" JavaScript event, or trigger that event on an element."
	},
	jqScrollLeftGet: {
		prefix: "jqScrollLeftGet",
		body: [
			"$(${selector}).scrollLeft();"
		],
		description: "Get the current horizontal position of the scroll bar for the first element in the set of matched elements."
	},
	jqScrollLeftSet: {
		prefix: "jqScrollLeftSet",
		body: [
			"$(${selector}).scrollLeft(${value});"
		],
		description: "Set the current horizontal position of the scroll bar for each of the set of matched elements."
	},
	jqScrollTopGet: {
		prefix: "jqScrollTopGet",
		body: [
			"$(${selector}).scrollTop();"
		],
		description: "Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element."
	},
	jqScrollTopSet: {
		prefix: "jqScrollTopSet",
		body: [
			"$(${selector}).scrollTop(${value});"
		],
		description: "Set the current vertical position of the scroll bar for each of the set of matched elements."
	},
	jqSelect: {
		prefix: "jqSelect",
		body: [
			"$(${selector}).select(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"select\" JavaScript event, or trigger that event on an element."
	},
	jqSelectTrigger: {
		prefix: "jqSelectTrigger",
		body: [
			"$(${selector}).select();"
		],
		description: "Bind an event handler to the \"select\" JavaScript event, or trigger that event on an element."
	},
	jqShow: {
		prefix: "jqShow",
		body: [
			"$(${selector}).show();"
		],
		description: "Display the matched elements."
	},
	jqShowFull: {
		prefix: "jqShowFull",
		body: [
			"$(${selector}).show(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Display the matched elements."
	},
	jqSlideDown: {
		prefix: "jqSlideDown",
		body: [
			"$(${selector}).slideDown();"
		],
		description: "Display the matched elements with a sliding motion."
	},
	jqSlideDownFull: {
		prefix: "jqSlideDownFull",
		body: [
			"$(${selector}).slideDown(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Display the matched elements with a sliding motion."
	},
	jqSlideToggle: {
		prefix: "jqSlideToggle",
		body: [
			"$(${selector}).slideToggle();"
		],
		description: "Display or hide the matched elements with a sliding motion."
	},
	jqSlideToggleFull: {
		prefix: "jqSlideToggleFull",
		body: [
			"$(${selector}).slideToggle(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Display or hide the matched elements with a sliding motion."
	},
	jqSlideUp: {
		prefix: "jqSlideUp",
		body: [
			"$(${selector}).slideUp();"
		],
		description: "Display the matched elements with a sliding motion."
	},
	jqSlideUpFull: {
		prefix: "jqSlideUpFull",
		body: [
			"$(${selector}).slideUp(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Display the matched elements with a sliding motion."
	},
	jqSubmit: {
		prefix: "jqSubmit",
		body: [
			"$(${selector}).submit(function (e) { ",
			"\te.preventDefault();",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"submit\" JavaScript event, or trigger that event on an element."
	},
	jqSubmitTrigger: {
		prefix: "jqSubmitTrigger",
		body: [
			"$(${selector}).submit();"
		],
		description: "Bind an event handler to the \"submit\" JavaScript event, or trigger that event on an element."
	},
	jqTextGet: {
		prefix: "jqTextGet",
		body: [
			"$(${selector}).text();"
		],
		description: "Get the combined text contents of each element in the set of matched elements, including their descendants."
	},
	jqTextSet: {
		prefix: "jqTextSet",
		body: [
			"$(${selector}).text(${textString});"
		],
		description: "Set the content of each element in the set of matched elements to the specified text."
	},
	jqToggle: {
		prefix: "jqToggle",
		body: [
			"$(${selector}).toggle();"
		],
		description: "Display or hide the matched elements."
	},
	jqToggleFull: {
		prefix: "jqToggleFull",
		body: [
			"$(${selector}).toggle(${duration}, function () {",
			"\t$0",
			"});"
		],
		description: "Display or hide the matched elements."
	},
	jqToggleSwitch: {
		prefix: "jqToggleSwitch",
		body: [
			"$(${selector}).toggle(${showOrHide});"
		],
		description: "Display or hide the matched elements."
	},
	jqTrigger: {
		prefix: "jqTrigger",
		body: [
			"$(${selector}).trigger(${eventType});"
		],
		description: "Execute all handlers and behaviors attached to the matched elements for the given event type."
	},
	jqTriggerHandler: {
		prefix: "jqTriggerHandler",
		body: [
			"$(${selector}).triggerHandler(${eventType});"
		],
		description: "Execute all handlers attached to an element for an event."
	},
	jqTriggerHandlerWithData: {
		prefix: "jqTriggerHandlerWithData",
		body: [
			"$(${selector}).triggerHandler(${eventType}, { ${name}: ${value} });"
		],
		description: "Execute all handlers attached to an element for an event."
	},
	jqTriggerWithData: {
		prefix: "jqTriggerWithData",
		body: [
			"$(${selector}).trigger(${eventType}, { ${name}: ${value} });"
		],
		description: "Execute all handlers and behaviors attached to the matched elements for the given event type."
	},
	jqUnbind: {
		prefix: "jqUnbind",
		body: [
			"$(${selector}).unbind(${eventType});"
		],
		description: "Remove a previously-attached event handler from the elements."
	},
	jqUnbindAll: {
		prefix: "jqUnbindAll",
		body: [
			"$(${selector}).unbind();"
		],
		description: "Remove a previously-attached event handler from the elements."
	},
	jqUnload: {
		prefix: "jqUnload",
		body: [
			"$(${selector}).unload(function () { ",
			"\t$0",
			"});"
		],
		description: "Bind an event handler to the \"unload\" JavaScript event."
	},
	jqValGet: {
		prefix: "jqValGet",
		body: [
			"$(${selector}).val();"
		],
		description: "Get the current value of the first element in the set of matched elements."
	},
	jqValSet: {
		prefix: "jqValSet",
		body: [
			"$(${selector}).val(${value});"
		],
		description: "Set the value of each element in the set of matched elements."
	},
	jqWidthGet: {
		prefix: "jqWidthGet",
		body: [
			"$(${selector}).width();"
		],
		description: "Get the current computed width for the first element in the set of matched elements."
	},
	jqWidthSet: {
		prefix: "jqWidthSet",
		body: [
			"$(${selector}).width(${value});"
		],
		description: "Set the CSS width of each element in the set of matched elements."
	},
	jqWrap: {
		prefix: "jqWrap",
		body: [
			"$(${selector}).wrap(\"\u003c${wrappingElement}\u003e\u003c/${wrappingElement}\u003e\");"
		],
		description: "Wrap an HTML structure around each element in the set of matched elements."
	},
	jqWrapAll: {
		prefix: "jqWrapAll",
		body: [
			"$(${selector}).wrapAll(\"\u003c${wrappingElement}\u003e\u003c/${wrappingElement}\u003e\");"
		],
		description: "Wrap an HTML structure around all elements in the set of matched elements."
	},
	jqWrapInner: {
		prefix: "jqWrapInner",
		body: [
			"$(${selector}).wrapInner(\"\u003c${wrappingElement}\u003e\u003c/${wrappingElement}\u003e\");"
		],
		description: "Wrap an HTML structure around the content of each element in the set of matched elements."
	}
}
