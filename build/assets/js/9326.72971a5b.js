"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[9326],{58350:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var a=[Object.freeze({$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"nushell",scopeName:"source.nushell",patterns:[{include:"#define-variable"},{include:"#define-alias"},{include:"#function"},{include:"#extern"},{include:"#module"},{include:"#use-module"},{include:"#expression"},{include:"#comment"}],repository:{string:{patterns:[{include:"#string-single-quote"},{include:"#string-backtick"},{include:"#string-double-quote"},{include:"#string-interpolated-double"},{include:"#string-interpolated-single"},{include:"#string-bare"}]},"string-escape":{match:"\\\\(?:[bfrnt\\\\'\"/]|u[0-9a-fA-F]{4})",name:"constant.character.escape.nushell"},"string-bare":{match:"[^$\\[{(\"',|#\\s|][^\\[\\]{}()\"'\\s#,|]*",name:"string.bare.nushell"},"string-single-quote":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.nushell"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.nushell"}},name:"string.quoted.single.nushell"},"string-backtick":{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.nushell"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.nushell"}},name:"string.quoted.single.nushell"},"string-double-quote":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.nushell"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nushell"}},name:"string.quoted.double.nushell",patterns:[{match:"\\w+"},{include:"#string-escape"}]},"string-interpolated-double":{begin:'\\$"',beginCaptures:{0:{name:"punctuation.definition.string.begin.nushell"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nushell"}},name:"string.interpolated.double.nushell",patterns:[{match:"\\\\[()]",name:"constant.character.escape.nushell"},{include:"#string-escape"},{include:"#paren-expression"}]},"string-interpolated-single":{begin:"\\$'",beginCaptures:{0:{name:"punctuation.definition.string.begin.nushell"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.nushell"}},name:"string.interpolated.single.nushell",patterns:[{include:"#paren-expression"}]},"control-keywords":{comment:"Regex generated with list-to-tree (https://github.com/glcraft/list-to-tree)",match:"(?<![0-9a-zA-Z_\\-.\\/:\\\\])(?:break|continue|else(?: if)?|for|if|loop|mut|return|try|while)(?![0-9a-zA-Z_\\-.\\/:\\\\])",name:"keyword.control.nushell"},comment:{match:"(#.*)$",name:"comment.nushell"},keyword:{match:"(?:def(?:-env)?)",name:"keyword.other.nushell"},parameters:{match:"\\b-{1,2}[\\w-]*",name:"variable.parameter.nushell"},variables:{match:'(\\$[a-zA-Z0-9_]+)((?:\\.(?:[\\w-]+|"[\\w\\- ]+"))*)',captures:{1:{patterns:[{include:"#internal-variables"},{match:"\\$.+",name:"variable.other.nushell"}]},2:{name:"variable.other.nushell"}}},"variable-fields":{match:'(?<=\\)|\\}|\\])(?:\\.(?:[\\w-]+|"[\\w\\- ]+"))+',name:"variable.other.nushell"},"internal-variables":{match:"\\$(?:nu|env)\\b",name:"variable.language.nushell"},datetime:{match:"\\b\\d{4}-\\d{2}-\\d{2}(?:T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:\\+\\d{2}:?\\d{2}|Z)?)?\\b",name:"constant.numeric.nushell"},"numbers-hexa":{match:"(?<![\\w-])0x[0-9a-fA-F]+(?![\\w.])",name:"constant.numeric.nushell"},numbers:{match:"(?<![\\w-])[-+]?(?:\\d+|\\d{1,3}(?:_\\d{3})*)(?:\\.\\d*)?(?i:ns|us|ms|sec|min|hr|day|wk|b|kb|mb|gb|tb|pt|eb|zb|kib|mib|gib|tib|pit|eib|zib)?(?:(?![\\w.])|(?=\\.\\.))",name:"constant.numeric.nushell"},binary:{begin:"\\b(0x)(\\[)",beginCaptures:{1:{name:"constant.numeric.nushell"},2:{name:"meta.brace.square.begin.nushell"}},end:"\\]",endCaptures:{0:{name:"meta.brace.square.begin.nushell"}},name:"constant.binary.nushell",patterns:[{match:"[0-9a-fA-F]{2}",name:"constant.numeric.nushell"}]},"constant-keywords":{match:"\\b(?:true|false|null)\\b",name:"constant.language.nushell"},"constant-value":{patterns:[{include:"#constant-keywords"},{include:"#datetime"},{include:"#numbers"},{include:"#numbers-hexa"},{include:"#binary"}]},ranges:{match:"\\.\\.<?|:",name:"keyword.control.nushell"},"operators-word":{match:"(?<= |\\()(?:mod|in|not-in|not|and|or|xor|bit-or|bit-and|bit-xor|bit-shl|bit-shr|starts-with|ends-with)(?= |\\)|$)",name:"keyword.control.nushell"},"operators-symbols":{match:"(?<= )(?:\\+|\\-|\\*|\\/|\\/\\/|\\*\\*|!=|[<>=]=?|[!=]~|&&|\\|\\||\\||\\+\\+=?)(?= |$)",name:"keyword.control.nushell"},operators:{patterns:[{include:"#operators-word"},{include:"#operators-symbols"},{include:"#ranges"}]},table:{begin:"\\[",beginCaptures:{0:{name:"meta.brace.square.begin.nushell"}},end:"\\]",endCaptures:{0:{name:"meta.brace.square.end.nushell"}},name:"meta.table.nushell",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.nushell"},{include:"#comment"}]},"function-parameter-default-value":{begin:"=\\s*",captures:{1:{name:"variable.parameter.nushell"},2:{name:"variable.parameter.nushell"},3:{name:"keyword.operator.nushell"},4:{name:"entity.name.type.nushell"}},end:"(?=\\])|,|$",patterns:[{include:"#value"}]},"function-parameter-declare":{match:"(-{0,2}[\\w-]+|\\.{3})(?:\\((-[\\w?])\\))?(?:\\s*(\\??:)\\s*(\\w+)(?:@((?:\"[^\"]+\")|(?:'[^']+')))?)?",captures:{1:{name:"variable.parameter.nushell"},2:{name:"variable.parameter.nushell"},3:{name:"keyword.operator.nushell"},4:{name:"entity.name.type.nushell"},5:{name:"string.quoted.nushell"}}},"function-parameter":{patterns:[{include:"#function-parameter-declare"},{include:"#function-parameter-default-value"}]},"function-parameters":{begin:"\\[",beginCaptures:{0:{name:"meta.brace.square.begin.nushell"}},end:"\\]",endCaptures:{0:{name:"meta.brace.square.end.nushell"}},patterns:[{include:"#function-parameter"},{include:"#comment"}],name:"meta.function.parameters.nushell"},"define-function":{match:'((?:export\\s+)?def(?:-env)?)\\s+([\\w\\-!]+|"[\\w\\-! ]+")',captures:{1:{name:"entity.name.function.nushell"},2:{name:"entity.name.type.nushell"}}},"define-extern":{match:'((?:export\\s+)?extern)\\s+([\\w\\-!]+|"[\\w\\-! ]+")',captures:{1:{name:"entity.name.function.nushell"},2:{name:"entity.name.type.nushell"}}},"function-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.function.begin.nushell"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.function.end.nushell"}},name:"meta.function.body.nushell",patterns:[{include:"source.nushell"}]},function:{begin:'((?:export\\s+)?def(?:-env)?)\\s+([\\w\\-]+|"[\\w\\- ]+")',beginCaptures:{0:{patterns:[{include:"#define-function"},{include:"#define-extern"}]}},end:"(?<=\\})",endCaptures:{0:{name:"punctuation.definition.function.end.nushell"}},patterns:[{include:"#function-parameters"},{include:"#function-body"}]},extern:{begin:'((?:export\\s+)?extern)\\s+([\\w\\-]+|"[\\w\\- ]+")',beginCaptures:{0:{patterns:[{include:"#define-extern"}]}},end:"(?<=\\])",endCaptures:{0:{name:"punctuation.definition.function.end.nushell"}},patterns:[{include:"#function-parameters"}]},module:{begin:"(module)\\s+([\\w\\-]+)\\s*\\{",beginCaptures:{1:{name:"entity.name.function.nushell"},2:{name:"entity.name.namespace.nushell"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.module.end.nushell"}},name:"meta.module.nushell",patterns:[{include:"source.nushell"}]},"use-module":{patterns:[{match:"^\\s*((?:export )?use)\\s+([\\w\\-]+|\"[\\w\\- ]+\"|'[\\w\\- ]+')(?:\\s+([\\w\\-]+|\"[\\w\\- ]+\"|'[\\w\\- ]+'|\\*))?\\s*;?$",captures:{1:{name:"entity.name.function.nushell"},2:{name:"entity.name.namespace.nushell"},3:{name:"keyword.other.nushell"}}},{begin:"^\\s*((?:export )?use)\\s+([\\w\\-]+|\"[\\w\\- ]+\"|'[\\w\\- ]+')\\s*\\[",beginCaptures:{1:{name:"entity.name.function.nushell"},2:{name:"entity.name.namespace.nushell"}},end:"(\\])\\s*;?\\s*$",endCaptures:{1:{name:"meta.brace.square.end.nushell"}},patterns:[{match:"([\\w\\-]+|\"[\\w\\- ]+\"|'[\\w\\- ]+'|\\*),?",captures:{1:{name:"keyword.other.nushell"}}},{include:"#comment"}]},{match:"(?<path>(?:/|\\\\|~[\\/\\\\]|\\.\\.?[\\/\\\\])?(?:[^\\/\\\\]+[\\/\\\\])*[\\w\\- ]+(?:\\.nu)?){0}^\\s*((?:export )?use)\\s+(\"\\g<path>\"|'\\g<path>\\'|(?![\"'])\\g<path>)(?:\\s+([\\w\\-]+|\"[\\w\\- ]+\"|'[^']+'|\\*))?\\s*;?$",captures:{2:{name:"entity.name.function.nushell"},3:{name:"string.bare.nushell",patterns:[{match:"([\\w\\- ]+)(?:\\.nu)?(?=$|\"|')",captures:{1:{name:"entity.name.namespace.nushell"}}}]},4:{name:"keyword.other.nushell"}}},{begin:"(?<path>(?:/|\\\\|~[\\/\\\\]|\\.\\.?[\\/\\\\])?(?:[^\\/\\\\]+[\\/\\\\])*[\\w\\- ]+(?:\\.nu)?){0}^\\s*((?:export )?use)\\s+(\"\\g<path>\"|'\\g<path>\\'|(?![\"'])\\g<path>)\\s+\\[",beginCaptures:{2:{name:"entity.name.function.nushell"},3:{name:"string.bare.nushell",patterns:[{match:"([\\w\\- ]+)(?:\\.nu)?(?=$|\"|')",captures:{1:{name:"entity.name.namespace.nushell"}}}]}},end:"(\\])\\s*;?\\s*$",endCaptures:{1:{name:"meta.brace.square.end.nushell"}},patterns:[{match:"([\\w\\-]+|\"[\\w\\- ]+\"|'[\\w\\- ]+'|\\*),?",captures:{0:{name:"keyword.other.nushell"}}},{include:"#comment"}]},{match:"^\\s*(?:export )?use\\b",captures:{0:{name:"entity.name.function.nushell"}}}]},"for-loop":{begin:"(for)\\s+(\\$?\\w+)\\s+(in)\\s+(.+)\\s*(\\{)",beginCaptures:{1:{name:"keyword.other.nushell"},2:{name:"variable.other.nushell"},3:{name:"keyword.other.nushell"},4:{patterns:[{include:"#value"}]},5:{name:"punctuation.section.block.begin.bracket.curly.nushell"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.block.end.bracket.curly.nushell"}},name:"meta.for-loop.nushell",patterns:[{include:"source.nushell"}]},"paren-expression":{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.begin.nushell"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.end.nushell"}},name:"meta.expression.parenthesis.nushell",patterns:[{include:"#expression"}]},"braced-expression":{begin:"(\\{)(?:\\s*\\|([\\w, ]*)\\|)?",beginCaptures:{1:{name:"punctuation.section.block.begin.bracket.curly.nushell"},2:{patterns:[{include:"#function-parameter"},{match:",",name:"punctuation.separator.nushell"}]}},end:"\\}",endCaptures:{0:{name:"punctuation.section.block.end.bracket.curly.nushell"}},name:"meta.expression.braced.nushell",patterns:[{begin:"((?:(?:[^$\\(\\{\\[\"'#\\s][^\\(\\{\\[\"'#\\s]*)|\\$?(?:\"[^\"]+\"|'[^']+')))\\s*(:)\\s*",beginCaptures:{1:{name:"variable.other.nushell",patterns:[{include:"#paren-expression"}]},2:{patterns:[{include:"#operators"}]}},end:"(?=,|\\s|\\})",name:"meta.record-entry.nushell",patterns:[{include:"#value"}]},{include:"source.nushell"}]},"define-variable":{match:"(let(?:-env)?|mut|const)\\s+(\\w+)\\s*(=)",captures:{1:{name:"keyword.other.nushell"},2:{name:"variable.other.nushell"},3:{patterns:[{include:"#operators"}]}}},"define-alias":{match:"((?:export )?alias)\\s+([\\w\\-!]+)\\s*(=)",captures:{1:{name:"entity.name.function.nushell"},2:{name:"entity.name.type.nushell"},3:{patterns:[{include:"#operators"}]}}},"pre-command":{begin:"(\\w+)(=)",beginCaptures:{1:{name:"variable.other.nushell"},2:{patterns:[{include:"#operators"}]}},end:"(?=\\s+)",patterns:[{include:"#value"}]},command:{begin:"(?<!\\w)(?:(\\^)|(?![0-9]|\\$))([\\w.!]+(?:(?: (?!-)[\\w\\-.!]+(?:(?= |\\))|$)|[\\w\\-.!]+))*|(?<=\\^)\\$?(?:\"[^\"]+\"|'[^']+'))",beginCaptures:{1:{name:"keyword.operator.nushell"},2:{patterns:[{include:"#control-keywords"},{match:"(?:ansi|char) \\w+",captures:{0:{name:"keyword.other.builtin.nushell"}}},{comment:"Regex generated with list-to-tree (https://github.com/glcraft/list-to-tree)",match:"(a(?:l(?:ias|l)|n(?:si(?: (?:gradient|link|strip))?|y)|ppend|st)|b(?:its(?: (?:and|not|or|ro(?:l|r)|sh(?:l|r)|xor))?|reak|ytes(?: (?:a(?:dd|t)|build|collect|ends-with|index-of|length|re(?:move|place|verse)|starts-with))?)|c(?:al|d|har|lear|o(?:l(?:lect|umns)|m(?:mandline|p(?:act|lete))|n(?:fig(?: (?:env|nu|reset))?|st|tinue))|p|ustom-value (?:generate(?:2)?|update))|d(?:ate(?: (?:format|humanize|list-timezone|now|to-(?:record|t(?:able|imezone))))?|e(?:bug|code(?: (?:base64|hex))?|f(?:-env|ault)?|scribe|tect columns)|fr (?:a(?:gg(?:-groups)?|ll-(?:false|true)|ppend|rg-(?:m(?:ax|in)|sort|true|unique|where)|s(?:-date(?:time)?)?)|c(?:ache|o(?:l(?:lect|umns)?|n(?:cat(?:-str|enate)|tains)|unt(?:-null)?)|umulative)|d(?:atepart|rop(?:-(?:duplicates|nulls))?|types|ummies)|exp(?:lode|r-not)|f(?:etch|i(?:l(?:l-n(?:an|ull)|ter(?:-with)?)|rst)|latten)|g(?:et(?:-(?:day|hour|m(?:inute|onth)|nanosecond|ordinal|second|week(?:day)?|year))?|roup-by)|i(?:mplode|nto-(?:df|lazy|nu)|s-(?:duplicated|in|n(?:ot-null|ull)|unique))|join|l(?:ast|it|owercase|s)|m(?:ax|e(?:an|dian|lt)|in)|n(?:-unique|ot)|o(?:pen|therwise)|qu(?:antile|ery)|r(?:e(?:name|place(?:-all)?|verse)|olling)|s(?:ample|e(?:lect|t(?:-with-idx)?)|h(?:ape|ift)|lice|ort-by|t(?:d|r(?:-(?:lengths|slice)|ftime))|um(?:mary)?)|t(?:ake|o-(?:a(?:rrow|vro)|csv|jsonl|parquet))|u(?:nique|ppercase)|va(?:lue-counts|r)|w(?:hen|ith-column))|o|rop(?: (?:column|nth))?|u)|e(?:ach(?: while)?|cho|moji|n(?:code(?: (?:base64|hex))?|umerate)|rror make|very|x(?:ec|it|p(?:l(?:ain|ore)|ort(?: (?:alias|const|def(?:-env)?|extern(?:-wrapped)?|module|use)|-env)?)|tern(?:-wrapped)?))|f(?:i(?:l(?:e|l|ter)|nd|rst)|latten|mt|or(?:mat(?: (?:d(?:ate|uration)|filesize))?)?|rom(?: (?:csv|eml|i(?:cs|ni)|json|nuon|ods|parquet|ssv|t(?:oml|sv)|url|vcf|x(?:lsx|ml)|y(?:aml|ml)))?)|g(?:et|lob|r(?:id|oup(?:-by)?)|stat)|h(?:ash(?: (?:md5|sha256))?|e(?:aders|lp(?: (?:aliases|commands|externs|modules|operators))?)|i(?:de(?:-env)?|ghlight|st(?:o(?:gram|ry(?: session)?))?)|ttp(?: (?:delete|get|head|options|p(?:atch|ost|ut)))?)|i(?:f|gnore|n(?:c|put(?: list(?:en)?)?|s(?:ert|pect)|to(?: (?:b(?:i(?:nary|ts)|ool)|d(?:atetime|ecimal|uration)|f(?:ilesize|loat)|int|record|s(?:qlite|tring)))?)|s-(?:admin|empty)|tems)|j(?:oin|son path)|k(?:eybindings(?: (?:default|list(?:en)?))?|ill)|l(?:a(?:st|zy make)|e(?:ngth|t(?:-env)?)|ines|o(?:ad-env|op)|s)|m(?:at(?:ch|h(?: (?:a(?:bs|rc(?:cos(?:h)?|sin(?:h)?|tan(?:h)?)|vg)|c(?:eil|os(?:h)?)|exp|floor|l(?:n|og)|m(?:ax|edian|in|ode)|product|round|s(?:in(?:h)?|qrt|tddev|um)|tan(?:h)?|variance))?)|e(?:rge|tadata)|kdir|o(?:dule|ve)|ut|v)|nu(?:-(?:check|example-(?:1|2|3)|highlight)|_plugin_explore)|o(?:pen|verlay(?: (?:hide|list|new|use))?)|p(?:a(?:r(?:-each|se)|th(?: (?:basename|dirname|ex(?:ists|pand)|join|parse|relative-to|split|type))?)|eriodic-table|lot|net|ort|r(?:epend|int|ofile)|s)|query(?: (?:db|json|web|xml))?|r(?:an(?:dom(?: (?:bool|chars|d(?:ecimal|ice)|float|integer|uuid))?|ge)|e(?:duce|g(?:ex|ist(?:er|ry query))|ject|name|turn|verse)|m|o(?:ll(?: (?:down|left|right|up))?|tate)|un-external)|s(?:ave|c(?:hema|ope(?: (?:aliases|commands|e(?:ngine-stats|xterns)|modules|variables))?)|e(?:lect|q(?: (?:char|date))?)|huffle|ize|kip(?: (?:until|while))?|leep|o(?:rt(?:-by)?|urce(?:-env)?)|plit(?: (?:c(?:hars|olumn)|list|row|words)|-by)?|t(?:art|r(?: (?:c(?:a(?:mel-case|pitalize)|ontains)|d(?:istance|owncase)|e(?:nds-with|xpand)|index-of|join|kebab-case|length|pascal-case|re(?:place|verse)|s(?:creaming-snake-case|imilarity|nake-case|tarts-with|ubstring)|t(?:itle-case|rim)|upcase))?)|ys)|t(?:a(?:ble|ke(?: (?:until|while))?)|erm size|imeit|o(?: (?:csv|html|json|md|nuon|t(?:ext|oml|sv)|xml|yaml)|uch)?|r(?:anspose|y)|utor)|u(?:cp|niq(?:-by)?|p(?:date(?: cells)?|sert)|rl(?: (?:build-query|encode|join|parse))?|se)|v(?:alues|ersion|iew(?: (?:files|s(?:ource|pan)))?)|w(?:atch|h(?:ere|i(?:ch|le))|i(?:ndow|th-env)|rap)|xyplot|zip)(?![\\w-])( (.*))?",captures:{1:{name:"keyword.other.builtin.nushell"},2:{patterns:[{include:"#value"}]}}},{match:"(?<=\\^)(?:\\$(\"[^\"]+\"|'[^']+')|\"[^\"]+\"|'[^']+')",name:"entity.name.type.external.nushell",captures:{1:{patterns:[{include:"#paren-expression"}]}}},{match:"([\\w.]+(?:-[\\w.!]+)*)(?: (.*))?",captures:{1:{name:"entity.name.type.external.nushell"},2:{patterns:[{include:"#value"}]}}},{include:"#value"}]}},end:"(?=\\||\\)|\\}|;)|$",name:"meta.command.nushell",patterns:[{include:"#value"}]},expression:{patterns:[{include:"#pre-command"},{include:"#for-loop"},{include:"#operators"},{include:"#control-keywords"},{include:"#constant-value"},{include:"#command"},{include:"#value"}]},value:{patterns:[{include:"#variables"},{include:"#variable-fields"},{include:"#control-keywords"},{include:"#constant-value"},{include:"#table"},{include:"#parameters"},{include:"#operators"},{include:"#paren-expression"},{include:"#braced-expression"},{include:"#string"},{include:"#comment"}]}},displayName:"nushell",aliases:["nu"]})]}}]);