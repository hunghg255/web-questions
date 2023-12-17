"use strict";
exports.id = 6159;
exports.ids = [6159];
exports.modules = {

/***/ 66159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tasl)
/* harmony export */ });
const lang = Object.freeze({ "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json", "scopeName": "source.tasl", "name": "tasl", "fileTypes": ["tasl"], "patterns": [{ "include": "#comment" }, { "include": "#namespace" }, { "include": "#type" }, { "include": "#class" }, { "include": "#edge" }], "repository": { "comment": { "match": "(#).*$", "name": "comment.line.number-sign.tasl", "captures": { "1": { "name": "punctuation.definition.comment.tasl" } } }, "namespace": { "match": "(?:^\\s*)(namespace)\\b(.*)", "captures": { "1": { "name": "keyword.control.tasl.namespace" }, "2": { "patterns": [{ "include": "#namespaceURI" }, { "match": "[a-zA-Z][a-zA-Z0-9]*\\b", "name": "entity.name" }] } } }, "type": { "begin": "(?:^\\s*)(type)\\b", "beginCaptures": { "1": { "name": "keyword.control.tasl.type" } }, "end": "$", "patterns": [{ "include": "#expression" }] }, "class": { "begin": "(?:^\\s*)(class)\\b", "beginCaptures": { "1": { "name": "keyword.control.tasl.class" } }, "end": "$", "patterns": [{ "include": "#key" }, { "include": "#export" }, { "include": "#expression" }] }, "edge": { "begin": "(?:^\\s*)(edge)\\b", "beginCaptures": { "1": { "name": "keyword.control.tasl.edge" } }, "end": "$", "patterns": [{ "include": "#key" }, { "include": "#export" }, { "match": "=/", "name": "punctuation.separator.tasl.edge.source" }, { "match": "/=>", "name": "punctuation.separator.tasl.edge.target" }, { "match": "=>", "name": "punctuation.separator.tasl.edge" }, { "include": "#expression" }] }, "export": { "match": "::", "name": "keyword.operator.tasl.export" }, "expression": { "patterns": [{ "include": "#literal" }, { "include": "#uri" }, { "include": "#product" }, { "include": "#coproduct" }, { "include": "#reference" }, { "include": "#optional" }, { "include": "#identifier" }] }, "literal": { "patterns": [{ "include": "#datatype" }] }, "uri": { "match": "<>", "name": "variable.other.constant" }, "product": { "begin": "{", "beginCaptures": { "0": { "name": "punctuation.definition.block.tasl.product" } }, "end": "}", "endCaptures": { "0": { "name": "punctuation.definition.block.tasl.product" } }, "patterns": [{ "include": "#comment" }, { "include": "#term" }, { "include": "#component" }] }, "component": { "begin": "->", "end": "$", "beginCaptures": { "0": { "name": "punctuation.separator.tasl.component" } }, "patterns": [{ "include": "#expression" }] }, "coproduct": { "begin": "\\[", "beginCaptures": { "0": { "name": "punctuation.definition.block.tasl.coproduct" } }, "end": "\\]", "endCaptures": { "0": { "name": "punctuation.definition.block.tasl.coproduct" } }, "patterns": [{ "include": "#comment" }, { "include": "#term" }, { "include": "#option" }] }, "option": { "begin": "<-", "end": "$", "beginCaptures": { "0": { "name": "punctuation.separator.tasl.option" } }, "patterns": [{ "include": "#expression" }] }, "reference": { "match": "(\\*)\\s*(.*)", "captures": { "1": { "name": "markup.bold keyword.operator" }, "2": { "patterns": [{ "include": "#key" }] } } }, "identifier": { "match": "([a-zA-Z][a-zA-Z0-9]*)\\b", "captures": { "1": { "name": "variable" } } }, "optional": { "begin": "\\?", "beginCaptures": { "0": { "name": "keyword.operator" } }, "end": "$", "patterns": [{ "include": "#expression" }] }, "namespaceURI": { "match": "[a-z]+:[a-zA-Z0-9-._~:\\/?#\\[\\]@!$&'()*+,;%=]+", "name": "markup.underline.link" }, "key": { "match": "[a-zA-Z][a-zA-Z0-9]*:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})+", "name": "markup.bold entity.name.class" }, "datatype": { "match": "[a-zA-Z][a-zA-Z0-9]*:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})+", "name": "string.regexp" }, "term": { "match": "[a-zA-Z][a-zA-Z0-9]*:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})+", "name": "entity.other.tasl.key" } }, "displayName": "Tasl" });
var tasl = [
  lang
];




/***/ })

};
;