// Compiled by ClojureScript 1.10.191 {}
goog.provide('forms_example.two');
goog.require('cljs.core');
goog.require('json_html.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('lambdaisland.fetch');
goog.require('cljs.core.async');
goog.require('cljs.core.async.interop');
forms_example.two.row = (function forms_example$two$row(label,input){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
forms_example.two.radio = (function forms_example$two$radio(label,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.radio","div.radio",1435221667),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null),label], null)], null);
});
forms_example.two.input = (function forms_example$two$input(label,type,id){
return forms_example.two.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
forms_example.two.friends = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no","one","here","yet"], null));
forms_example.two.reset_friends = (function forms_example$two$reset_friends(result){
console.log(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(result));

var edn = cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var _ = console.log(["edn = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)].join(''));
return cljs.core.reset_BANG_.call(null,forms_example.two.friends,edn);
});
forms_example.two.friend_source_ajax2 = (function forms_example$two$friend_source_ajax2(text){
var _ = console.log(["searching: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''));
var ___$1 = console.log(["friends = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,forms_example.two.friends))].join(''));
var result = Promise.resolve(lambdaisland.fetch.get.call(null,"http://localhost:3000/api",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null))).then(((function (_,___$1){
return (function (p1__4008_SHARP_){
return forms_example.two.reset_friends.call(null,p1__4008_SHARP_);
});})(_,___$1))
);
console.log(["result = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join(''));

return cljs.core.deref.call(null,forms_example.two.friends);
});
forms_example.two.form_template = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),forms_example.two.row.call(null,"Best friend",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"item-class","item-class",1277553858),new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860),new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list-class","list-class",1412758252),new cljs.core.Keyword(null,"input-class","input-class",-62053138),new cljs.core.Keyword(null,"id","id",-1388402092)],["typeahead-item","Who's your best friend? You can pick only one",forms_example.two.friends,"highlighted",forms_example.two.friend_source_ajax2,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),"typeahead-list","form-control",new cljs.core.Keyword(null,"ta","ta",1022552790)])], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
forms_example.two.page = (function forms_example$two$page(){
var doc = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unique","unique",329397282),new cljs.core.Keyword(null,"person","person",-1059806875),new cljs.core.Keyword(null,"pick-one","pick-one",-101885082),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"pick-a-few","pick-a-few",1884203630),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bmi","bmi",1421979636),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"radioselection","radioselection",-226362790),new cljs.core.Keyword(null,"many","many",1092119164),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"John",new cljs.core.Keyword(null,"age","age",-604307804),(35),new cljs.core.Keyword(null,"email","email",1415816706),"foo@bar.baz"], null),new cljs.core.Keyword(null,"bar","bar",-1386246584),"some interesting comments\non this subject",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"baz","baz",-1134894686)], null),(100),0.5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null),(200)]));
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sample Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,forms_example.two.form_template,doc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (doc){
return (function (){
return console.log("clicked.");
});})(doc))
], null),"Lookup"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Document State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [json_html.core.edn__GT_hiccup,cljs.core.deref.call(null,doc)], null)], null);
});
;})(doc))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [forms_example.two.page], null),document.getElementById("app"));

//# sourceMappingURL=two.js.map