"use strict";
exports.id = 6259;
exports.ids = [6259];
exports.modules = {

/***/ 86259:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jssm)
/* harmony export */ });
const lang = Object.freeze({ "fileTypes": ["jssm", "jssm_state"], "name": "jssm", "patterns": [{ "begin": "/\\*", "captures": { "0": { "name": "punctuation.definition.comment.mn" } }, "comment": "block comment", "end": "\\*/", "name": "comment.block.jssm" }, { "begin": "//", "comment": "block comment", "end": "$", "name": "comment.line.jssm" }, { "begin": "\\${", "captures": { "0": { "name": "entity.name.function" } }, "comment": "js outcalls", "end": "}", "name": "keyword.other" }, { "comment": "semver", "match": "([0-9]*)(\\.)([0-9]*)(\\.)([0-9]*)", "name": "constant.numeric" }, { "comment": "jssm language tokens", "match": "graph_layout(\\s*)(:)", "name": "constant.language.jssmLanguage" }, { "comment": "jssm language tokens", "match": "machine_name(\\s*)(:)", "name": "constant.language.jssmLanguage" }, { "comment": "jssm language tokens", "match": "machine_version(\\s*)(:)", "name": "constant.language.jssmLanguage" }, { "comment": "jssm language tokens", "match": "jssm_version(\\s*)(:)", "name": "constant.language.jssmLanguage" }, { "comment": "transitions", "match": "<->", "name": "keyword.control.transition.jssmArrow.legal_legal" }, { "comment": "transitions", "match": "<-", "name": "keyword.control.transition.jssmArrow.legal_none" }, { "comment": "transitions", "match": "->", "name": "keyword.control.transition.jssmArrow.none_legal" }, { "comment": "transitions", "match": "<=>", "name": "keyword.control.transition.jssmArrow.main_main" }, { "comment": "transitions", "match": "=>", "name": "keyword.control.transition.jssmArrow.none_main" }, { "comment": "transitions", "match": "<=", "name": "keyword.control.transition.jssmArrow.main_none" }, { "comment": "transitions", "match": "<~>", "name": "keyword.control.transition.jssmArrow.forced_forced" }, { "comment": "transitions", "match": "~>", "name": "keyword.control.transition.jssmArrow.none_forced" }, { "comment": "transitions", "match": "<~", "name": "keyword.control.transition.jssmArrow.forced_none" }, { "comment": "transitions", "match": "<-=>", "name": "keyword.control.transition.jssmArrow.legal_main" }, { "comment": "transitions", "match": "<=->", "name": "keyword.control.transition.jssmArrow.main_legal" }, { "comment": "transitions", "match": "<-~>", "name": "keyword.control.transition.jssmArrow.legal_forced" }, { "comment": "transitions", "match": "<~->", "name": "keyword.control.transition.jssmArrow.forced_legal" }, { "comment": "transitions", "match": "<=~>", "name": "keyword.control.transition.jssmArrow.main_forced" }, { "comment": "transitions", "match": "<~=>", "name": "keyword.control.transition.jssmArrow.forced_main" }, { "comment": "edge probability annotation", "match": "([0-9]+)%", "name": "constant.numeric.jssmProbability" }, { "comment": "action annotation", "match": "\\'[^']*\\'", "name": "constant.character.jssmAction" }, { "comment": "jssm label annotation", "match": '\\"[^"]*\\"', "name": "entity.name.tag.jssmLabel.doublequoted" }, { "comment": "jssm label annotation", "match": "([a-zA-Z0-9_.+&()#@!?,])", "name": "entity.name.tag.jssmLabel.atom" }], "scopeName": "source.jssm", "uuid": "2bb22b55-e811-4383-9929-ae6d0ab92aca", "displayName": "JSSM", "aliases": ["fsl"] });
var jssm = [
  lang
];




/***/ })

};
;