// Compiled by ClojureScript 1.10.191 {}
goog.provide('forms_example.mediabox');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent_forms.core');
forms_example.mediabox.scroll_to = (function forms_example$mediabox$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__4148 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.call(null,vec__4148,(0),null);
var offset_top = cljs.core.nth.call(null,vec__4148,(1),null);
return list_elem.scrollTop = (offset_top - ((2) * item_height));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"mediabox","mediabox",-20067461),(function (p__4155,p__4156){
var vec__4157 = p__4155;
var type = cljs.core.nth.call(null,vec__4157,(0),null);
var map__4160 = cljs.core.nth.call(null,vec__4157,(1),null);
var map__4160__$1 = ((((!((map__4160 == null)))?(((((map__4160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4160):map__4160);
var attrs = map__4160__$1;
var result_fn = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var selections = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var highlight_class = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var get_index = cljs.core.get.call(null,map__4160__$1,new cljs.core.Keyword(null,"get-index","get-index",440051606));
var map__4161 = p__4156;
var map__4161__$1 = ((((!((map__4161 == null)))?(((((map__4161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4161):map__4161);
var doc = cljs.core.get.call(null,map__4161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__4161__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__4161__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections__$1 = (function (){var or__3920__auto__ = selections;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__3920__auto__ = get_index;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.constantly.call(null,(-1));
}
})();
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__3909__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections__$1));
if(cljs.core.truth_(and__3909__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__3909__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections__$1),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__1587__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__1587__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[input_placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs),((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"text","text",-1790561697),input_class,((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4151_SHARP_){
var temp__5735__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__4151_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,selections__$1,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__4151_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,selections__$1))))?(0):(-1)));
} else {
return null;
}
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4152_SHARP_){
var G__4164 = p1__4152_SHARP_.which;
switch (G__4164) {
case (38):
p1__4152_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.deref.call(null,typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return (cljs.core.deref.call(null,selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);

return forms_example.mediabox.scroll_to.call(null,p1__4152_SHARP_,cljs.core.deref.call(null,selected_index));
}

break;
case (40):
p1__4152_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref.call(null,typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_.call(null,selections__$1,data_source.call(null,new cljs.core.Keyword(null,"all","all",892129742)));

cljs.core.reset_BANG_.call(null,selected_index,get_index__$1.call(null,clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__4152_SHARP_)),cljs.core.deref.call(null,selections__$1)));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return forms_example.mediabox.scroll_to.call(null,p1__4152_SHARP_,cljs.core.deref.call(null,selected_index));
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections__$1)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__4152_SHARP_));

cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);

return forms_example.mediabox.scroll_to.call(null,p1__4152_SHARP_,cljs.core.deref.call(null,selected_index));
}
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
p1__4152_SHARP_.preventDefault();

return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));

break;
default:
return "default";

}
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections__$1));
if(or__3920__auto__){
return or__3920__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4153_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__4153_SHARP_.target.getAttribute("tabIndex")));
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4154_SHARP_){
p1__4154_SHARP_.preventDefault();

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__1587__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections__$1)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[input_placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"text","text",-1790561697),input_class,((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4151_SHARP_){
var temp__5735__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__4151_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,selections__$1,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__4151_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,selections__$1))))?(0):(-1)));
} else {
return null;
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4152_SHARP_){
var G__4165 = p1__4152_SHARP_.which;
switch (G__4165) {
case (38):
p1__4152_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.deref.call(null,typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return (cljs.core.deref.call(null,selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);

return forms_example.mediabox.scroll_to.call(null,p1__4152_SHARP_,cljs.core.deref.call(null,selected_index));
}

break;
case (40):
p1__4152_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref.call(null,typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_.call(null,selections__$1,data_source.call(null,new cljs.core.Keyword(null,"all","all",892129742)));

cljs.core.reset_BANG_.call(null,selected_index,get_index__$1.call(null,clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__4152_SHARP_)),cljs.core.deref.call(null,selections__$1)));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return forms_example.mediabox.scroll_to.call(null,p1__4152_SHARP_,cljs.core.deref.call(null,selected_index));
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections__$1)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__4152_SHARP_));

cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);

return forms_example.mediabox.scroll_to.call(null,p1__4152_SHARP_,cljs.core.deref.call(null,selected_index));
}
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
p1__4152_SHARP_.preventDefault();

return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));

break;
default:
return "default";

}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections__$1));
if(or__3920__auto__){
return or__3920__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4153_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__4153_SHARP_.target.getAttribute("tabIndex")));
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_){
return (function (p1__4154_SHARP_){
p1__4154_SHARP_.preventDefault();

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections__$1)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__4157,type,map__4160,map__4160__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__4161,map__4161__$1,doc,get,save_BANG_))
}));

//# sourceMappingURL=mediabox.js.map
