// Compiled by ClojureScript 1.10.191 {}
goog.provide('forms_example.view_three');
goog.require('cljs.core');
goog.require('json_html.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('lambdaisland.fetch');
goog.require('forms_example.mediabox');
forms_example.view_three.row = (function forms_example$view_three$row(label,input){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
forms_example.view_three.friends = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no","one","here","yet"], null));
forms_example.view_three.reset_friends = (function forms_example$view_three$reset_friends(result){
console.log(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(result));

var edn = cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var _ = console.log(["edn = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)].join(''));
return cljs.core.reset_BANG_.call(null,forms_example.view_three.friends,edn);
});
forms_example.view_three.friend_source = (function forms_example$view_three$friend_source(text){
var _ = console.log(["searching: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''));
var ___$1 = console.log(["friends = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,forms_example.view_three.friends))].join(''));
var result = Promise.resolve(lambdaisland.fetch.get.call(null,"http://localhost:3000/api",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null))).then(((function (_,___$1){
return (function (p1__4210_SHARP_){
return forms_example.view_three.reset_friends.call(null,p1__4210_SHARP_);
});})(_,___$1))
);
console.log(["result = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join(''));

return cljs.core.deref.call(null,forms_example.view_three.friends);
});
forms_example.view_three.show_media = (function forms_example$view_three$show_media(item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null);
});
forms_example.view_three.form_template = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),forms_example.view_three.row.call(null,"Best friend",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"item-class","item-class",1277553858),new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860),new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list-class","list-class",1412758252),new cljs.core.Keyword(null,"input-class","input-class",-62053138),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"result-fn","result-fn",-726333573)],["mediabox-item","Who's your best friend? You can pick only one",forms_example.view_three.friends,"highlighted",forms_example.view_three.friend_source,new cljs.core.Keyword(null,"mediabox","mediabox",-20067461),"mediabox-list","form-control",new cljs.core.Keyword(null,"ta","ta",1022552790),forms_example.view_three.show_media])], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
forms_example.view_three.page = (function forms_example$view_three$page(){
var doc = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pick-one","pick-one",-101885082),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null));
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sample Form"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["friends = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,forms_example.view_three.friends))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,forms_example.view_three.form_template,doc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (doc){
return (function (){
return console.log("clicked.");
});})(doc))
], null),"Lookup"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Document State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [json_html.core.edn__GT_hiccup,cljs.core.deref.call(null,doc)], null)], null);
});
;})(doc))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [forms_example.view_three.page], null),document.getElementById("app"));

//# sourceMappingURL=view_three.js.map
