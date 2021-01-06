// Compiled by ClojureScript 1.10.191 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__8631_SHARP_,p2__8630_SHARP_){
var or__3920__auto__ = p2__8630_SHARP_.call(null,path,value,p1__8631_SHARP_);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return p1__8631_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__5733__auto__)){
var in_fn = temp__5733__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field_type]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n))))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n))));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3909__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__3909__auto__){
return fmt;
} else {
return and__3909__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (p__8632,_){
var map__8633 = p__8632;
var map__8633__$1 = ((((!((map__8633 == null)))?(((((map__8633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8633):map__8633);
var field = cljs.core.get.call(null,map__8633__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field]),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__8636,p__8637){
var map__8638 = p__8636;
var map__8638__$1 = ((((!((map__8638 == null)))?(((((map__8638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8638):map__8638);
var field = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__8639 = p__8637;
var map__8639__$1 = ((((!((map__8639 == null)))?(((((map__8639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8639):map__8639);
var get = cljs.core.get.call(null,map__8639__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8639__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__8639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3920__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__8638,map__8638__$1,field,id,fmt,map__8639,map__8639__$1,get,save_BANG_,doc){
return (function (p1__8635_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__8635_SHARP_)));
});})(map__8638,map__8638__$1,field,id,fmt,map__8639,map__8639__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__8642,p__8643){
var map__8644 = p__8642;
var map__8644__$1 = ((((!((map__8644 == null)))?(((((map__8644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8644):map__8644);
var id = cljs.core.get.call(null,map__8644__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8645 = p__8643;
var map__8645__$1 = ((((!((map__8645 == null)))?(((((map__8645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8645):map__8645);
var get = cljs.core.get.call(null,map__8645__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8645__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__8644,map__8644__$1,id,map__8645,map__8645__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__8644,map__8644__$1,id,map__8645,map__8645__$1,get,save_BANG_))
], null),(cljs.core.truth_(get.call(null,id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null));
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4500__auto__ = [];
var len__4497__auto___8659 = arguments.length;
var i__4498__auto___8660 = (0);
while(true){
if((i__4498__auto___8660 < len__4497__auto___8659)){
args__4500__auto__.push((arguments[i__4498__auto___8660]));

var G__8661 = (i__4498__auto___8660 + (1));
i__4498__auto___8660 = G__8661;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8651,opts,p__8652){
var vec__8653 = p__8651;
var seq__8654 = cljs.core.seq.call(null,vec__8653);
var first__8655 = cljs.core.first.call(null,seq__8654);
var seq__8654__$1 = cljs.core.next.call(null,seq__8654);
var type = first__8655;
var first__8655__$1 = cljs.core.first.call(null,seq__8654__$1);
var seq__8654__$2 = cljs.core.next.call(null,seq__8654__$1);
var attrs = first__8655__$1;
var body = seq__8654__$2;
var vec__8656 = p__8652;
var default_attrs = cljs.core.nth.call(null,vec__8656,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq8648){
var G__8649 = cljs.core.first.call(null,seq8648);
var seq8648__$1 = cljs.core.next.call(null,seq8648);
var G__8650 = cljs.core.first.call(null,seq8648__$1);
var seq8648__$2 = cljs.core.next.call(null,seq8648__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8649,G__8650,seq8648__$2);
});

if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (p__8662,_){
var vec__8663 = p__8662;
var ___$1 = cljs.core.nth.call(null,vec__8663,(0),null);
var map__8666 = cljs.core.nth.call(null,vec__8663,(1),null);
var map__8666__$1 = ((((!((map__8666 == null)))?(((((map__8666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8666):map__8666);
var field = cljs.core.get.call(null,map__8666__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field__$1]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__8669,p__8670){
var vec__8671 = p__8669;
var seq__8672 = cljs.core.seq.call(null,vec__8671);
var first__8673 = cljs.core.first.call(null,seq__8672);
var seq__8672__$1 = cljs.core.next.call(null,seq__8672);
var type = first__8673;
var first__8673__$1 = cljs.core.first.call(null,seq__8672__$1);
var seq__8672__$2 = cljs.core.next.call(null,seq__8672__$1);
var map__8674 = first__8673__$1;
var map__8674__$1 = ((((!((map__8674 == null)))?(((((map__8674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8674):map__8674);
var attrs = map__8674__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__8674__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = seq__8672__$2;
var map__8675 = p__8670;
var map__8675__$1 = ((((!((map__8675 == null)))?(((((map__8675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8675):map__8675);
var doc = cljs.core.get.call(null,map__8675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__8671,seq__8672,first__8673,seq__8672__$1,type,first__8673__$1,seq__8672__$2,map__8674,map__8674__$1,attrs,valid_QMARK_,body,map__8675,map__8675__$1,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__5733__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__5733__auto____$1)){
var valid_class = temp__5733__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__5733__auto____$1,visible__8389__auto__,temp__5733__auto__,vec__8671,seq__8672,first__8673,seq__8672__$1,type,first__8673__$1,seq__8672__$2,map__8674,map__8674__$1,attrs,valid_QMARK_,body,map__8675,map__8675__$1,doc){
return (function (p1__8668_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__8668_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8668_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__5733__auto____$1,visible__8389__auto__,temp__5733__auto__,vec__8671,seq__8672,first__8673,seq__8672__$1,type,first__8673__$1,seq__8672__$2,map__8674,map__8674__$1,attrs,valid_QMARK_,body,map__8675,map__8675__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__5733__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__5733__auto____$1)){
var valid_class = temp__5733__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__5733__auto____$1,temp__5733__auto__,vec__8671,seq__8672,first__8673,seq__8672__$1,type,first__8673__$1,seq__8672__$2,map__8674,map__8674__$1,attrs,valid_QMARK_,body,map__8675,map__8675__$1,doc){
return (function (p1__8668_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__8668_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8668_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__5733__auto____$1,temp__5733__auto__,vec__8671,seq__8672,first__8673,seq__8672__$1,type,first__8673__$1,seq__8672__$2,map__8674,map__8674__$1,attrs,valid_QMARK_,body,map__8675,map__8675__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__8671,seq__8672,first__8673,seq__8672__$1,type,first__8673__$1,seq__8672__$2,map__8674,map__8674__$1,attrs,valid_QMARK_,body,map__8675,map__8675__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__8678,p__8679){
var vec__8680 = p__8678;
var _ = cljs.core.nth.call(null,vec__8680,(0),null);
var map__8683 = cljs.core.nth.call(null,vec__8680,(1),null);
var map__8683__$1 = ((((!((map__8683 == null)))?(((((map__8683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8683):map__8683);
var attrs = map__8683__$1;
var field = cljs.core.get.call(null,map__8683__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__8680;
var map__8684 = p__8679;
var map__8684__$1 = ((((!((map__8684 == null)))?(((((map__8684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8684):map__8684);
var opts = map__8684__$1;
var doc = cljs.core.get.call(null,map__8684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__8680,_,map__8683,map__8683__$1,attrs,field,component,map__8684,map__8684__$1,opts,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__8680,_,map__8683,map__8683__$1,attrs,field,component,map__8684,map__8684__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__8689,p__8690){
var vec__8691 = p__8689;
var type = cljs.core.nth.call(null,vec__8691,(0),null);
var map__8694 = cljs.core.nth.call(null,vec__8691,(1),null);
var map__8694__$1 = ((((!((map__8694 == null)))?(((((map__8694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8694):map__8694);
var attrs = map__8694__$1;
var id = cljs.core.get.call(null,map__8694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__8694__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__8695 = p__8690;
var map__8695__$1 = ((((!((map__8695 == null)))?(((((map__8695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8695):map__8695);
var doc = cljs.core.get.call(null,map__8695__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8695__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8695__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3920__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__8389__auto__,temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_){
return (function (p1__8687_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__8687_SHARP_));
});})(visible__8389__auto__,temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__8389__auto__,temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_){
return (function (p1__8688_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__8688_SHARP_))));
});})(visible__8389__auto__,temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3920__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_){
return (function (p1__8687_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__8687_SHARP_));
});})(temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_){
return (function (p1__8688_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__8688_SHARP_))));
});})(temp__5733__auto__,input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__8691,type,map__8694,map__8694__$1,attrs,id,fmt,map__8695,map__8695__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__8699,p__8700){
var vec__8701 = p__8699;
var _ = cljs.core.nth.call(null,vec__8701,(0),null);
var map__8704 = cljs.core.nth.call(null,vec__8701,(1),null);
var map__8704__$1 = ((((!((map__8704 == null)))?(((((map__8704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8704):map__8704);
var attrs = map__8704__$1;
var id = cljs.core.get.call(null,map__8704__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__8704__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__8704__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__8704__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var lang = cljs.core.get.call(null,map__8704__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var map__8705 = p__8700;
var map__8705__$1 = ((((!((map__8705 == null)))?(((((map__8705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8705):map__8705);
var doc = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var selected_date = get.call(null,id);
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__3920__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__3920__auto__ = selected_month;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__3920__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5735__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__5735__auto__)){
var date = temp__5735__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
,((function (visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (p1__8698_SHARP_){
return save_BANG_.call(null,id,p1__8698_SHARP_);
});})(visible__8389__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5735__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__5735__auto__)){
var date = temp__5735__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
,((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_){
return (function (p1__8698_SHARP_){
return save_BANG_.call(null,id,p1__8698_SHARP_);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__8701,_,map__8704,map__8704__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__8705,map__8705__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__8708,p__8709){
var vec__8710 = p__8708;
var _ = cljs.core.nth.call(null,vec__8710,(0),null);
var map__8713 = cljs.core.nth.call(null,vec__8710,(1),null);
var map__8713__$1 = ((((!((map__8713 == null)))?(((((map__8713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8713):map__8713);
var attrs = map__8713__$1;
var id = cljs.core.get.call(null,map__8713__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__8713__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__8713__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__8713__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__8710;
var map__8714 = p__8709;
var map__8714__$1 = ((((!((map__8714 == null)))?(((((map__8714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8714):map__8714);
var opts = map__8714__$1;
var doc = cljs.core.get.call(null,map__8714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8714__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8714__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__3920__auto__ = checked;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__8710,_,map__8713,map__8713__$1,attrs,id,field,checked,default_checked,component,map__8714,map__8714__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__8710,_,map__8713,map__8713__$1,attrs,id,field,checked,default_checked,component,map__8714,map__8714__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__8717,p__8718){
var vec__8719 = p__8717;
var type = cljs.core.nth.call(null,vec__8719,(0),null);
var map__8722 = cljs.core.nth.call(null,vec__8719,(1),null);
var map__8722__$1 = ((((!((map__8722 == null)))?(((((map__8722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8722):map__8722);
var attrs = map__8722__$1;
var id = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__8723 = p__8718;
var map__8723__$1 = ((((!((map__8723 == null)))?(((((map__8723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8723):map__8723);
var doc = cljs.core.get.call(null,map__8723__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8723__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__8719,type,map__8722,map__8722__$1,attrs,id,preamble,postamble,placeholder,map__8723,map__8723__$1,doc,get){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__5733__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__5733__auto____$1)){
var value = temp__5733__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__5733__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__5733__auto____$1)){
var value = temp__5733__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__8719,type,map__8722,map__8722__$1,attrs,id,preamble,postamble,placeholder,map__8723,map__8723__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__8726,p__8727){
var vec__8728 = p__8726;
var seq__8729 = cljs.core.seq.call(null,vec__8728);
var first__8730 = cljs.core.first.call(null,seq__8729);
var seq__8729__$1 = cljs.core.next.call(null,seq__8729);
var type = first__8730;
var first__8730__$1 = cljs.core.first.call(null,seq__8729__$1);
var seq__8729__$2 = cljs.core.next.call(null,seq__8729__$1);
var map__8731 = first__8730__$1;
var map__8731__$1 = ((((!((map__8731 == null)))?(((((map__8731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8731):map__8731);
var attrs = map__8731__$1;
var id = cljs.core.get.call(null,map__8731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__8731__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__8731__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.call(null,map__8731__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__8729__$2;
var map__8732 = p__8727;
var map__8732__$1 = ((((!((map__8732 == null)))?(((((map__8732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8732):map__8732);
var opts = map__8732__$1;
var doc = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__8728,seq__8729,first__8730,seq__8729__$1,type,first__8730__$1,seq__8729__$2,map__8731,map__8731__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__8732,map__8732__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__5733__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__5733__auto____$1)){
var message = temp__5733__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3920__auto__ = touch_event;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__5733__auto____$1,visible__8389__auto__,temp__5733__auto__,vec__8728,seq__8729,first__8730,seq__8729__$1,type,first__8730__$1,seq__8729__$2,map__8731,map__8731__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__8732,map__8732__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__5733__auto____$1,visible__8389__auto__,temp__5733__auto__,vec__8728,seq__8729,first__8730,seq__8729__$1,type,first__8730__$1,seq__8729__$2,map__8731,map__8731__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__8732,map__8732__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__5733__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__5733__auto____$1)){
var message = temp__5733__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3920__auto__ = touch_event;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__5733__auto____$1,temp__5733__auto__,vec__8728,seq__8729,first__8730,seq__8729__$1,type,first__8730__$1,seq__8729__$2,map__8731,map__8731__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__8732,map__8732__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__5733__auto____$1,temp__5733__auto__,vec__8728,seq__8729,first__8730,seq__8729__$1,type,first__8730__$1,seq__8729__$2,map__8731,map__8731__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__8732,map__8732__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__8728,seq__8729,first__8730,seq__8729__$1,type,first__8730__$1,seq__8729__$2,map__8731,map__8731__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__8732,map__8732__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__8735,p__8736){
var vec__8737 = p__8735;
var seq__8738 = cljs.core.seq.call(null,vec__8737);
var first__8739 = cljs.core.first.call(null,seq__8738);
var seq__8738__$1 = cljs.core.next.call(null,seq__8738);
var type = first__8739;
var first__8739__$1 = cljs.core.first.call(null,seq__8738__$1);
var seq__8738__$2 = cljs.core.next.call(null,seq__8738__$1);
var map__8740 = first__8739__$1;
var map__8740__$1 = ((((!((map__8740 == null)))?(((((map__8740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8740):map__8740);
var attrs = map__8740__$1;
var field = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__8738__$2;
var map__8741 = p__8736;
var map__8741__$1 = ((((!((map__8741 == null)))?(((((map__8741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8741):map__8741);
var doc = cljs.core.get.call(null,map__8741__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8741__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8741__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__3920__auto__ = checked;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__8737,seq__8738,first__8739,seq__8738__$1,type,first__8739__$1,seq__8738__$2,map__8740,map__8740__$1,attrs,field,name,value,checked,default_checked,body,map__8741,map__8741__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__8389__auto__,temp__5733__auto__,vec__8737,seq__8738,first__8739,seq__8738__$1,type,first__8739__$1,seq__8738__$2,map__8740,map__8740__$1,attrs,field,name,value,checked,default_checked,body,map__8741,map__8741__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__8389__auto__,temp__5733__auto__,vec__8737,seq__8738,first__8739,seq__8738__$1,type,first__8739__$1,seq__8738__$2,map__8740,map__8740__$1,attrs,field,name,value,checked,default_checked,body,map__8741,map__8741__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,vec__8737,seq__8738,first__8739,seq__8738__$1,type,first__8739__$1,seq__8738__$2,map__8740,map__8740__$1,attrs,field,name,value,checked,default_checked,body,map__8741,map__8741__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__5733__auto__,vec__8737,seq__8738,first__8739,seq__8738__$1,type,first__8739__$1,seq__8738__$2,map__8740,map__8740__$1,attrs,field,name,value,checked,default_checked,body,map__8741,map__8741__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__8737,seq__8738,first__8739,seq__8738__$1,type,first__8739__$1,seq__8738__$2,map__8740,map__8740__$1,attrs,field,name,value,checked,default_checked,body,map__8741,map__8741__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__8747,p__8748){
var vec__8749 = p__8747;
var type = cljs.core.nth.call(null,vec__8749,(0),null);
var map__8752 = cljs.core.nth.call(null,vec__8749,(1),null);
var map__8752__$1 = ((((!((map__8752 == null)))?(((((map__8752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8752):map__8752);
var attrs = map__8752__$1;
var result_fn = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__8752__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__8753 = p__8748;
var map__8753__$1 = ((((!((map__8753 == null)))?(((((map__8753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8753):map__8753);
var doc = cljs.core.get.call(null,map__8753__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8753__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8753__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__3909__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__3909__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__3909__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (p1__8744_SHARP_){
var temp__5735__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__8744_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__8744_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (p1__8745_SHARP_){
var G__8756 = p1__8745_SHARP_.which;
switch (G__8756) {
case (38):
p1__8745_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__8745_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__8745_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__3920__auto__){
return or__3920__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (p1__8746_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__8746_SHARP_.target.getAttribute("tabIndex")));
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__8389__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (p1__8744_SHARP_){
var temp__5735__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__8744_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__8744_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (p1__8745_SHARP_){
var G__8757 = p1__8745_SHARP_.which;
switch (G__8757) {
case (38):
p1__8745_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__8745_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__8745_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__3920__auto__){
return or__3920__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (p1__8746_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__8746_SHARP_.target.getAttribute("tabIndex")));
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__8749,type,map__8752,map__8752__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__8753,map__8753__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__8761,p__8762){
var vec__8763 = p__8761;
var type = cljs.core.nth.call(null,vec__8763,(0),null);
var map__8766 = cljs.core.nth.call(null,vec__8763,(1),null);
var map__8766__$1 = ((((!((map__8766 == null)))?(((((map__8766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8766):map__8766);
var attrs = map__8766__$1;
var id = cljs.core.get.call(null,map__8766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8767 = p__8762;
var map__8767__$1 = ((((!((map__8767 == null)))?(((((map__8767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8767):map__8767);
var doc = cljs.core.get.call(null,map__8767__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__8767__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__8763,type,map__8766,map__8766__$1,attrs,id,map__8767,map__8767__$1,doc,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__8389__auto__,temp__5733__auto__,vec__8763,type,map__8766,map__8766__$1,attrs,id,map__8767,map__8767__$1,doc,save_BANG_){
return (function (p1__8760_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__8760_SHARP_.target.files)));
});})(visible__8389__auto__,temp__5733__auto__,vec__8763,type,map__8766,map__8766__$1,attrs,id,map__8767,map__8767__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,vec__8763,type,map__8766,map__8766__$1,attrs,id,map__8767,map__8767__$1,doc,save_BANG_){
return (function (p1__8760_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__8760_SHARP_.target.files)));
});})(temp__5733__auto__,vec__8763,type,map__8766,map__8766__$1,attrs,id,map__8767,map__8767__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__8763,type,map__8766,map__8766__$1,attrs,id,map__8767,map__8767__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__8771,p__8772){
var vec__8773 = p__8771;
var type = cljs.core.nth.call(null,vec__8773,(0),null);
var map__8776 = cljs.core.nth.call(null,vec__8773,(1),null);
var map__8776__$1 = ((((!((map__8776 == null)))?(((((map__8776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8776):map__8776);
var attrs = map__8776__$1;
var id = cljs.core.get.call(null,map__8776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8777 = p__8772;
var map__8777__$1 = ((((!((map__8777 == null)))?(((((map__8777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8777):map__8777);
var doc = cljs.core.get.call(null,map__8777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__8777__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__8773,type,map__8776,map__8776__$1,attrs,id,map__8777,map__8777__$1,doc,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__8389__auto__,temp__5733__auto__,vec__8773,type,map__8776,map__8776__$1,attrs,id,map__8777,map__8777__$1,doc,save_BANG_){
return (function (p1__8770_SHARP_){
return save_BANG_.call(null,id,p1__8770_SHARP_.target.files);
});})(visible__8389__auto__,temp__5733__auto__,vec__8773,type,map__8776,map__8776__$1,attrs,id,map__8777,map__8777__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,vec__8773,type,map__8776,map__8776__$1,attrs,id,map__8777,map__8777__$1,doc,save_BANG_){
return (function (p1__8770_SHARP_){
return save_BANG_.call(null,id,p1__8770_SHARP_.target.files);
});})(temp__5733__auto__,vec__8773,type,map__8776,map__8776__$1,attrs,id,map__8777,map__8777__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__8773,type,map__8776,map__8776__$1,attrs,id,map__8777,map__8777__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__8780,p__8781,selections,field,id){
var vec__8782 = p__8780;
var seq__8783 = cljs.core.seq.call(null,vec__8782);
var first__8784 = cljs.core.first.call(null,seq__8783);
var seq__8783__$1 = cljs.core.next.call(null,seq__8783);
var type = first__8784;
var first__8784__$1 = cljs.core.first.call(null,seq__8783__$1);
var seq__8783__$2 = cljs.core.next.call(null,seq__8783__$1);
var map__8785 = first__8784__$1;
var map__8785__$1 = ((((!((map__8785 == null)))?(((((map__8785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8785):map__8785);
var attrs = map__8785__$1;
var key = cljs.core.get.call(null,map__8785__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__8785__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = seq__8783__$2;
var map__8786 = p__8781;
var map__8786__$1 = ((((!((map__8786 == null)))?(((((map__8786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8786):map__8786);
var save_BANG_ = cljs.core.get.call(null,map__8786__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__8786__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__8782,seq__8783,first__8784,seq__8783__$1,type,first__8784__$1,seq__8783__$2,map__8785,map__8785__$1,attrs,key,touch_event,body,map__8786,map__8786__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not.call(null,value)]));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__8782,seq__8783,first__8784,seq__8783__$1,type,first__8784__$1,seq__8783__$2,map__8785,map__8785__$1,attrs,key,touch_event,body,map__8786,map__8786__$1,save_BANG_,multi_select))
;
return ((function (vec__8782,seq__8783,first__8784,seq__8783__$1,type,first__8784__$1,seq__8783__$2,map__8785,map__8785__$1,attrs,key,touch_event,body,map__8786,map__8786__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__3920__auto__ = touch_event;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_]),attrs),body], null);
});
;})(vec__8782,seq__8783,first__8784,seq__8783__$1,type,first__8784__$1,seq__8783__$2,map__8785,map__8785__$1,attrs,key,touch_event,body,map__8786,map__8786__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__8789){
var map__8790 = p__8789;
var map__8790__$1 = ((((!((map__8790 == null)))?(((((map__8790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8790):map__8790);
var get = cljs.core.get.call(null,map__8790__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__8790__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__8790,map__8790__$1,get,multi_select){
return (function (m,p__8792){
var vec__8793 = p__8792;
var _ = cljs.core.nth.call(null,vec__8793,(0),null);
var map__8796 = cljs.core.nth.call(null,vec__8793,(1),null);
var map__8796__$1 = ((((!((map__8796 == null)))?(((((map__8796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8796):map__8796);
var key = cljs.core.get.call(null,map__8796__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__8790,map__8790__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__8800,p__8801){
var vec__8802 = p__8800;
var seq__8803 = cljs.core.seq.call(null,vec__8802);
var first__8804 = cljs.core.first.call(null,seq__8803);
var seq__8803__$1 = cljs.core.next.call(null,seq__8803);
var type = first__8804;
var first__8804__$1 = cljs.core.first.call(null,seq__8803__$1);
var seq__8803__$2 = cljs.core.next.call(null,seq__8803__$1);
var map__8805 = first__8804__$1;
var map__8805__$1 = ((((!((map__8805 == null)))?(((((map__8805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8805):map__8805);
var attrs = map__8805__$1;
var field = cljs.core.get.call(null,map__8805__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__8805__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__8803__$2;
var map__8806 = p__8801;
var map__8806__$1 = ((((!((map__8806 == null)))?(((((map__8806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8806):map__8806);
var opts = map__8806__$1;
var get = cljs.core.get.call(null,map__8806__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get){
return (function (p1__8798_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get){
return (function (p__8809){
var vec__8810 = p__8809;
var k = cljs.core.nth.call(null,vec__8810,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get))
,p1__8798_SHARP_));
});})(selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get){
return (function (p1__8799_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__8799_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var visible_QMARK_ = temp__5733__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__8802,seq__8803,first__8804,seq__8803__$1,type,first__8804__$1,seq__8803__$2,map__8805,map__8805__$1,attrs,field,id,selection_items,map__8806,map__8806__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__8813,p__8814){
var vec__8815 = p__8813;
var _ = cljs.core.nth.call(null,vec__8815,(0),null);
var attrs = cljs.core.nth.call(null,vec__8815,(1),null);
var field = vec__8815;
var map__8818 = p__8814;
var map__8818__$1 = ((((!((map__8818 == null)))?(((((map__8818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8818):map__8818);
var opts = map__8818__$1;
var doc = cljs.core.get.call(null,map__8818__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__8815,_,attrs,field,map__8818,map__8818__$1,opts,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__8815,_,attrs,field,map__8818,map__8818__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__8820,p__8821){
var vec__8822 = p__8820;
var _ = cljs.core.nth.call(null,vec__8822,(0),null);
var attrs = cljs.core.nth.call(null,vec__8822,(1),null);
var field = vec__8822;
var map__8825 = p__8821;
var map__8825__$1 = ((((!((map__8825 == null)))?(((((map__8825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8825):map__8825);
var opts = map__8825__$1;
var doc = cljs.core.get.call(null,map__8825__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__8822,_,attrs,field,map__8825,map__8825__$1,opts,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__8822,_,attrs,field,map__8825,map__8825__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4290__auto__ = (function reagent_forms$core$map_options_$_iter__8827(s__8828){
return (new cljs.core.LazySeq(null,(function (){
var s__8828__$1 = s__8828;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__8828__$1);
if(temp__5735__auto__){
var s__8828__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8828__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__8828__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__8830 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__8829 = (0);
while(true){
if((i__8829 < size__4289__auto__)){
var vec__8831 = cljs.core._nth.call(null,c__4288__auto__,i__8829);
var _ = cljs.core.nth.call(null,vec__8831,(0),null);
var map__8834 = cljs.core.nth.call(null,vec__8831,(1),null);
var map__8834__$1 = ((((!((map__8834 == null)))?(((((map__8834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8834):map__8834);
var key = cljs.core.get.call(null,map__8834__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__8831,(2),null);
cljs.core.chunk_append.call(null,b__8830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null));

var G__8841 = (i__8829 + (1));
i__8829 = G__8841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8830),reagent_forms$core$map_options_$_iter__8827.call(null,cljs.core.chunk_rest.call(null,s__8828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8830),null);
}
} else {
var vec__8836 = cljs.core.first.call(null,s__8828__$2);
var _ = cljs.core.nth.call(null,vec__8836,(0),null);
var map__8839 = cljs.core.nth.call(null,vec__8836,(1),null);
var map__8839__$1 = ((((!((map__8839 == null)))?(((((map__8839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8839):map__8839);
var key = cljs.core.get.call(null,map__8839__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__8836,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__8827.call(null,cljs.core.rest.call(null,s__8828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4290__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8842_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__8842_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__8845,p__8846){
var vec__8847 = p__8845;
var seq__8848 = cljs.core.seq.call(null,vec__8847);
var first__8849 = cljs.core.first.call(null,seq__8848);
var seq__8848__$1 = cljs.core.next.call(null,seq__8848);
var type = first__8849;
var first__8849__$1 = cljs.core.first.call(null,seq__8848__$1);
var seq__8848__$2 = cljs.core.next.call(null,seq__8848__$1);
var map__8850 = first__8849__$1;
var map__8850__$1 = ((((!((map__8850 == null)))?(((((map__8850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8850):map__8850);
var attrs = map__8850__$1;
var field = cljs.core.get.call(null,map__8850__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__8850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__8848__$2;
var map__8851 = p__8846;
var map__8851__$1 = ((((!((map__8851 == null)))?(((((map__8851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8851):map__8851);
var doc = cljs.core.get.call(null,map__8851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__8851__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__8851__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__3920__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__8389__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__8389__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__8389__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_){
return (function (p1__8843_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__8843_SHARP_)));
});})(visible__8389__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__8389__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_){
return (function (p1__8844_SHARP_){
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8844_SHARP_));
if(cljs.core.truth_(temp__5733__auto____$1)){
var visible_QMARK_ = temp__5733__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__8389__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_){
return (function (p1__8843_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__8843_SHARP_)));
});})(temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_){
return (function (p1__8844_SHARP_){
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8844_SHARP_));
if(cljs.core.truth_(temp__5733__auto____$1)){
var visible_QMARK_ = temp__5733__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__5733__auto__,options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__8847,seq__8848,first__8849,seq__8848__$1,type,first__8849__$1,seq__8848__$2,map__8850,map__8850__$1,attrs,field,id,options,map__8851,map__8851__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500))));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__4500__auto__ = [];
var len__4497__auto___8858 = arguments.length;
var i__4498__auto___8859 = (0);
while(true){
if((i__4498__auto___8859 < len__4497__auto___8858)){
args__4500__auto__.push((arguments[i__4498__auto___8859]));

var G__8860 = (i__4498__auto___8859 + (1));
i__4498__auto___8859 = G__8860;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__8854_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__8854_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq8855){
var G__8856 = cljs.core.first.call(null,seq8855);
var seq8855__$1 = cljs.core.next.call(null,seq8855);
var G__8857 = cljs.core.first.call(null,seq8855__$1);
var seq8855__$2 = cljs.core.next.call(null,seq8855__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8856,G__8857,seq8855__$2);
});


//# sourceMappingURL=core.js.map
