"use strict";
exports.id = 5246;
exports.ids = [5246];
exports.modules = {

/***/ 85246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ narrat)
/* harmony export */ });
const lang = Object.freeze({ "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json", "name": "narrat", "patterns": [{ "include": "#comments" }, { "include": "#expression" }], "repository": { "expression": { "patterns": [{ "include": "#keywords" }, { "include": "#commands" }, { "include": "#operators" }, { "include": "#primitives" }, { "include": "#strings" }, { "include": "#paren-expression" }] }, "keywords": { "patterns": [{ "name": "keyword.control.narrat", "match": "\\b(if|else|choice)\\b" }, { "name": "variable.value.narrat", "match": "\\$[\\w|\\.]+\\b" }, { "name": "entity.name.function.narrat", "match": "(?x)                  # Ignore comments\n  ^\\w+                # Find label name\n  (?=(\\s|\\w)*:)       # Positive lookahead for ':'\n" }, { "name": "invalid.label.narrat", "match": "(?x)                  # Ignore comments\n  ^\\w+                # Find label name\n  (?!(\\s|\\w)*:)        # Negative lookahead for ':'\n" }, { "name": "entity.other.attribute-name", "match": "(?<=\\w)[^^](\\b\\w+\\b)(?=(\\s|\\w)*:)" }] }, "commands": { "patterns": [{ "name": "keyword.commands.variables.narrat", "match": "\\b(set|var)\\b" }, { "name": "keyword.commands.text.narrat", "match": "\\b(talk|think)\\b" }, { "name": "keyword.commands.flow.narrat", "match": "\\b(jump|run|wait|return|save|save_prompt)" }, { "name": "keyword.commands.helpers.narrat", "match": "\\b(log|clear_dialog)\\b" }, { "name": "keyword.commands.screens.narrat", "match": "\\b(set_screen|empty_layer|set_button)" }, { "name": "keyword.commands.audio.narrat", "match": "\\b(play|pause|stop)\\b" }, { "name": "keyword.commands.notifications.narrat", "match": "\\b(notify|enable_notifications|disable_notifications)\\b" }, { "name": "keyword.commands.stats.narrat", "match": "\\b(set_stat|get_stat_value|add_stat)" }, { "name": "keyword.commands.math.narrat", "match": "\\b(neg|abs|random|random_float|random_from_args|min|max|clamp|floor|round|ceil|sqrt|^)\\b" }, { "name": "keyword.commands.string.narrat", "match": "\\b(concat|join)\\b" }, { "name": "keyword.commands.text_field.narrat", "match": "\\b(text_field)\\b" }, { "name": "keyword.commands.skills.narrat", "match": "\\b(add_level|set_level|add_xp|roll|get_level|get_xp)\\b" }, { "name": "keyword.commands.inventory.narrat", "match": "\\b(add_item|remove_item|enable_interaction|disable_interaction|has_item?|item_amount?)" }, { "name": "keyword.commands.quests.narrat", "match": "\\b(start_quest|start_objective|complete_objective|complete_quest|quest_started?|objective_started?|quest_completed?|objective_completed?)" }] }, "operators": { "patterns": [{ "name": "keyword.operator.logic.narrat", "match": "(&&|\\|\\||!=|==|>=|<=|<|>|!|\\?)\\s" }, { "name": "keyword.operator.arithmetic.narrat", "match": "(\\+|-|\\*|\\/)\\s" }] }, "interpolation": { "patterns": [{ "name": "variable.interpolation.narrat", "match": "(\\w|\\.)+" }] }, "strings": { "name": "string.quoted.double.narrat", "begin": '"', "end": '"', "patterns": [{ "name": "constant.character.escape.narrat", "match": "\\\\." }, { "name": "expression.template", "begin": "%{", "end": "}", "beginCaptures": { "0": { "name": "punctuation.template.open" } }, "endCaptures": { "0": { "name": "punctuation.template.close.narrat" } }, "patterns": [{ "include": "#expression" }, { "include": "#interpolation" }] }] }, "paren-expression": { "begin": "\\(", "end": "\\)", "beginCaptures": { "0": { "name": "punctuation.paren.open" } }, "endCaptures": { "0": { "name": "punctuation.paren.close" } }, "name": "expression.group", "patterns": [{ "include": "#expression" }] }, "primitives": { "patterns": [{ "name": "constant.numeric.narrat", "match": "\\b\\d+\\b" }, { "name": "constant.language.true.narrat", "match": "\\btrue\\b" }, { "name": "constant.language.false.narrat", "match": "\\bfalse\\b" }, { "name": "constant.language.null.narrat", "match": "\\bnull\\b" }, { "name": "constant.language.undefined.narrat", "match": "\\bundefined\\b" }] }, "comments": { "patterns": [{ "name": "comment.line.narrat", "match": "\\/\\/.*$" }] } }, "scopeName": "source.narrat", "displayName": "Narrat Language", "aliases": ["nar"] });
var narrat = [
  lang
];




/***/ })

};
;