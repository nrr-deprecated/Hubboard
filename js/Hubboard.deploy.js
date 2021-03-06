smalltalk.addPackage('Hubboard', {});
smalltalk.addClass('HubboardApp', smalltalk.Object, ['token'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_bootstrap'),
smalltalk.method({
selector: unescape('bootstrap'),
fn: function (){
var self=this;
var api=nil;
(api=smalltalk.send(smalltalk.send((smalltalk.Issues || Issues), "_new", []), "_setToken_", [self['@token']]));
smalltalk.send(api, "_issues_loadAll_", [(function(issues){return smalltalk.send(issues, "_do_", [(function(issue){var tile=nil;
(tile=smalltalk.send(smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []), "_withData_", [issue]));return ((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_at_", ["labels"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));})]);}), false]);
smalltalk.send(smalltalk.send(".issuecolumn", "_asJQuery", []), "_droppable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("tolerance", "__minus_gt", ["pointer"]),smalltalk.send("drop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_handleDrop_with_", [event, ui]);})])])]);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_inProgress_'),
smalltalk.method({
selector: unescape('inProgress%3A'),
fn: function (arrayOfLabels){
var self=this;
try{(($receiver = arrayOfLabels) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return false}})})();})() : $receiver;
smalltalk.send(arrayOfLabels, "_do_", [(function(label){return ((($receiver = smalltalk.send(smalltalk.send(label, "_at_", ["name"]), "__eq", [unescape("in-progress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_inProgress_'){return e.fn()} throw(e)}}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_handleDrop_with_'),
smalltalk.method({
selector: unescape('handleDrop%3Awith%3A'),
fn: function (theEvent, aWidget){
var self=this;
try{var tile=nil;
var currentParent=nil;
var newParent=nil;
(tile=smalltalk.send(aWidget, "_draggable", []));
(currentParent=smalltalk.send(smalltalk.send(smalltalk.send(tile, "_parent", []), "_at_", [(0)]), "_at_", ["id"]));
(newParent=smalltalk.send(smalltalk.send(theEvent, "_target", []), "_at_", ["id"]));
smalltalk.send(tile, "_css_is_", ["position", "static"]);
((($receiver = smalltalk.send(currentParent, "__eq", [newParent])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_handleDrop_with_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_handleDrop_with_', fn: function(){return true}})})();})]));
smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [newParent]), "_asJQuery", []), "_append_", [smalltalk.send(tile, "_detach", [])]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(tile, "_at_", [(0)]), "_at_", ["id"])]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Moved to: ", "__comma", [newParent])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_handleDrop_with_'){return e.fn()} throw(e)}}
}),
smalltalk.HubboardApp);


smalltalk.HubboardApp.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;}
}),
smalltalk.HubboardApp.klass);


smalltalk.addClass('IssueTile', smalltalk.Widget, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus'], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var numberClass=nil;
(numberClass="number");
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("open")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("inprogress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})]));
(function($rec){smalltalk.send($rec, "_class_", ["issuetile"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [numberClass]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@raw'], "_at_", ["html_url"])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@number'], "_asString", [])])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']])]);return smalltalk.send($rec, "_with_", [self['@projectOwner']]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("/")]);return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']]), "__comma", [unescape("/")]), "__comma", [self['@project']])]);return smalltalk.send($rec, "_with_", [self['@project']]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));(function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [self['@title']]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"])])]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
fn: function (dataHash){
var self=this;
var issueInfo=nil;
(self['@raw']=dataHash);
(self['@issueId']=smalltalk.send(dataHash, "_at_", ["id"]));
(self['@number']=smalltalk.send(dataHash, "_at_", ["number"]));
(self['@title']=smalltalk.send(dataHash, "_at_", ["title"]));
(self['@body']=smalltalk.send(dataHash, "_at_", ["body"]));
(issueInfo=smalltalk.send(self, "_parseUrl_", [smalltalk.send(dataHash, "_at_", ["html_url"])]));
(self['@project']=smalltalk.send(issueInfo, "_at_", ["project"]));
(self['@projectOwner']=smalltalk.send(issueInfo, "_at_", ["owner"]));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_parseUrl_'),
smalltalk.method({
selector: unescape('parseUrl%3A'),
fn: function (aUrl){
var self=this;
var parts=nil;
(parts=aUrl.split('/'));
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("owner", "__minus_gt", [smalltalk.send(parts, "_at_", [(4)])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(parts, "_at_", [(5)])])]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setOpen'),
smalltalk.method({
selector: unescape('setOpen'),
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("open"));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setInProgress'),
smalltalk.method({
selector: unescape('setInProgress'),
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("inprogress"));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "_asJQuery", []);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
fn: function (){
var self=this;
return smalltalk.send("issuetile_", "__comma", [smalltalk.send(self['@issueId'], "_asString", [])]);
return self;}
}),
smalltalk.IssueTile);



