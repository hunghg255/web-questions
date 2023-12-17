"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[7088],{27088:(n,e,t)=>{t.r(e),t.d(e,{default:()=>a});var a=[Object.freeze({information_for_contributors:["This file has been converted from https://github.com/microsoft/vscode-JSON.tmLanguage/blob/master/JSON.tmLanguage","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/microsoft/vscode-JSON.tmLanguage/commit/9bd83f1c252b375e957203f21793316203f61f70",name:"jsonl",scopeName:"source.json.lines",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json.lines"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json.lines"}},name:"meta.structure.array.json.lines",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json.lines"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json.lines"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json.lines"}},end:"\\*/",name:"comment.block.documentation.json.lines"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json.lines"}},end:"\\*/",name:"comment.block.json.lines"},{captures:{1:{name:"punctuation.definition.comment.json.lines"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json.lines"},number:{match:"(?x)        # turn on extended mode\n  -?        # an optional minus\n  (?:\n    0       # a zero\n    |       # ...or...\n    [1-9]   # a 1-9 character\n    \\d*     # followed by zero or more digits\n  )\n  (?:\n    (?:\n      \\.    # a period\n      \\d+   # followed by one or more digits\n    )?\n    (?:\n      [eE]  # an e character\n      [+-]? # followed by an option +/-\n      \\d+   # followed by one or more digits\n    )?      # make exponent optional\n  )?        # make decimal portion optional",name:"constant.numeric.json.lines"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json.lines"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json.lines"}},name:"meta.structure.dictionary.json.lines",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json.lines"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json.lines"}},name:"meta.structure.dictionary.value.json.lines",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json.lines"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json.lines"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json.lines"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json.lines"}},name:"string.quoted.double.json.lines",patterns:[{include:"#stringcontent"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json.lines"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json.lines"}},name:"string.json.lines support.type.property-name.json.lines",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:'(?x)                # turn on extended mode\n  \\\\                # a literal backslash\n  (?:               # ...followed by...\n    ["\\\\/bfnrt]     # one of these characters\n    |               # ...or...\n    u               # a u\n    [0-9a-fA-F]{4}) # and four hex digits',name:"constant.character.escape.json.lines"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json.lines"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},displayName:"JSON Lines"})]}}]);