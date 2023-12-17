"use strict";
exports.id = 8669;
exports.ids = [8669];
exports.modules = {

/***/ 8669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sshConfig)
/* harmony export */ });
const lang = Object.freeze({ "fileTypes": ["ssh_config", ".ssh/config", "sshd_config"], "name": "ssh-config", "patterns": [{ "match": "\\b(A(cceptEnv|dd(ressFamily|KeysToAgent)|llow(AgentForwarding|Groups|StreamLocalForwarding|TcpForwarding|Users)|uth(enticationMethods|orized((Keys(Command(User)?|File)|Principals(Command(User)?|File)))))|B(anner|atchMode|ind(Address|Interface))|C(anonical(Domains|ize(FallbackLocal|Hostname|MaxDots|PermittedCNAMEs))|ertificateFile|hallengeResponseAuthentication|heckHostIP|hrootDirectory|iphers?|learAllForwardings|ientAlive(CountMax|Interval)|ompression(Level)?|onnect(Timeout|ionAttempts)|ontrolMaster|ontrolPath|ontrolPersist)|D(eny(Groups|Users)|isableForwarding|ynamicForward)|E(nableSSHKeysign|scapeChar|xitOnForwardFailure|xposeAuthInfo)|F(ingerprintHash|orceCommand|orward(Agent|X11(Timeout|Trusted)?))|G(atewayPorts|SSAPI(Authentication|CleanupCredentials|ClientIdentity|DelegateCredentials|KeyExchange|RenewalForcesRekey|ServerIdentity|StrictAcceptorCheck|TrustDns)|atewayPorts|lobalKnownHostsFile)|H(ashKnownHosts|ost(based(AcceptedKeyTypes|Authentication|KeyTypes|UsesNameFromPacketOnly)|Certificate|Key(Agent|Algorithms|Alias)?|Name))|I(dentit(iesOnly|y(Agent|File))|gnore(Rhosts|Unknown|UserKnownHosts)|nclude|PQoS)|K(bdInteractive(Authentication|Devices)|erberos(Authentication|GetAFSToken|OrLocalPasswd|TicketCleanup)|exAlgorithms)|L(istenAddress|ocal(Command|Forward)|oginGraceTime|ogLevel)|M(ACs|atch|ax(AuthTries|Sessions|Startups))|N(oHostAuthenticationForLocalhost|umberOfPasswordPrompts)|P(KCS11Provider|asswordAuthentication|ermit(EmptyPasswords|LocalCommand|Open|RootLogin|TTY|Tunnel|User(Environment|RC))|idFile|ort|referredAuthentications|rint(LastLog|Motd)|rotocol|roxy(Command|Jump|UseFdpass)|ubkey(AcceptedKeyTypes|Authentication))|R(Domain|SAAuthentication|ekeyLimit|emote(Command|Forward)|equestTTY|evoked(HostKeys|Keys)|hostsRSAAuthentication)|S(endEnv|erverAlive(CountMax|Interval)|treamLocalBind(Mask|Unlink)|trict(HostKeyChecking|Modes)|ubsystem|yslogFacility)|T(CPKeepAlive|rustedUserCAKeys|unnel(Device)?)|U(pdateHostKeys|se(BlacklistedKeys|DNS|Keychain|PAM|PrivilegedPort|r(KnownHostsFile)?))|V(erifyHostKeyDNS|ersionAddendum|isualHostKey)|X(11(DisplayOffset|Forwarding|UseLocalhost)|AuthLocation))\\b", "name": "keyword.other.ssh-config" }, { "begin": "(^[ \\t]+)?(?=#)", "beginCaptures": { "1": { "name": "punctuation.whitespace.comment.leading.ssh-config" } }, "end": "(?!\\G)", "patterns": [{ "begin": "#", "beginCaptures": { "0": { "name": "punctuation.definition.comment.ssh-config" } }, "end": "\\n", "name": "comment.line.number-sign.ssh-config" }] }, { "begin": "(^[ \\t]+)?(?=//)", "beginCaptures": { "1": { "name": "punctuation.whitespace.comment.leading.ssh-config" } }, "end": "(?!\\G)", "patterns": [{ "begin": "//", "beginCaptures": { "0": { "name": "punctuation.definition.comment.ssh-config" } }, "end": "\\n", "name": "comment.line.double-slash.ssh-config" }] }, { "captures": { "1": { "name": "storage.type.ssh-config" }, "2": { "name": "entity.name.section.ssh-config" }, "3": { "name": "meta.toc-list.ssh-config" } }, "match": "(?:^| |\\t)(Host)\\s+((.*))$" }, { "match": "\\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b", "name": "constant.numeric.ssh-config" }, { "match": "\\b[0-9]+\\b", "name": "constant.numeric.ssh-config" }, { "match": "\\b(yes|no)\\b", "name": "constant.language.ssh-config" }, { "match": "\\b[A-Z_]+\\b", "name": "constant.language.ssh-config" }], "scopeName": "source.ssh-config", "uuid": "B273855C-59D3-4DF3-9B7C-E68E0057D315", "displayName": "SSH Config" });
var sshConfig = [
  lang
];




/***/ })

};
;