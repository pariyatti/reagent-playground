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
return (function (p1__2491_SHARP_,p2__2490_SHARP_){
var or__3920__auto__ = p2__2490_SHARP_.call(null,path,value,p1__2491_SHARP_);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return p1__2491_SHARP_;
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
return (function (p__2492,_){
var map__2493 = p__2492;
var map__2493__$1 = ((((!((map__2493 == null)))?(((((map__2493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2493):map__2493);
var field = cljs.core.get.call(null,map__2493__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field]),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__2496,p__2497){
var map__2498 = p__2496;
var map__2498__$1 = ((((!((map__2498 == null)))?(((((map__2498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2498):map__2498);
var field = cljs.core.get.call(null,map__2498__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__2498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__2498__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__2499 = p__2497;
var map__2499__$1 = ((((!((map__2499 == null)))?(((((map__2499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2499):map__2499);
var get = cljs.core.get.call(null,map__2499__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2499__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__2499__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3920__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__2498,map__2498__$1,field,id,fmt,map__2499,map__2499__$1,get,save_BANG_,doc){
return (function (p1__2495_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__2495_SHARP_)));
});})(map__2498,map__2498__$1,field,id,fmt,map__2499,map__2499__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__2502,p__2503){
var map__2504 = p__2502;
var map__2504__$1 = ((((!((map__2504 == null)))?(((((map__2504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2504):map__2504);
var id = cljs.core.get.call(null,map__2504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__2505 = p__2503;
var map__2505__$1 = ((((!((map__2505 == null)))?(((((map__2505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2505):map__2505);
var get = cljs.core.get.call(null,map__2505__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2505__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__2504,map__2504__$1,id,map__2505,map__2505__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__2504,map__2504__$1,id,map__2505,map__2505__$1,get,save_BANG_))
], null),(cljs.core.truth_(get.call(null,id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null));
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2519 = arguments.length;
var i__4498__auto___2520 = (0);
while(true){
if((i__4498__auto___2520 < len__4497__auto___2519)){
args__4500__auto__.push((arguments[i__4498__auto___2520]));

var G__2521 = (i__4498__auto___2520 + (1));
i__4498__auto___2520 = G__2521;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__2511,opts,p__2512){
var vec__2513 = p__2511;
var seq__2514 = cljs.core.seq.call(null,vec__2513);
var first__2515 = cljs.core.first.call(null,seq__2514);
var seq__2514__$1 = cljs.core.next.call(null,seq__2514);
var type = first__2515;
var first__2515__$1 = cljs.core.first.call(null,seq__2514__$1);
var seq__2514__$2 = cljs.core.next.call(null,seq__2514__$1);
var attrs = first__2515__$1;
var body = seq__2514__$2;
var vec__2516 = p__2512;
var default_attrs = cljs.core.nth.call(null,vec__2516,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq2508){
var G__2509 = cljs.core.first.call(null,seq2508);
var seq2508__$1 = cljs.core.next.call(null,seq2508);
var G__2510 = cljs.core.first.call(null,seq2508__$1);
var seq2508__$2 = cljs.core.next.call(null,seq2508__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2509,G__2510,seq2508__$2);
});

if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (p__2522,_){
var vec__2523 = p__2522;
var ___$1 = cljs.core.nth.call(null,vec__2523,(0),null);
var map__2526 = cljs.core.nth.call(null,vec__2523,(1),null);
var map__2526__$1 = ((((!((map__2526 == null)))?(((((map__2526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2526):map__2526);
var field = cljs.core.get.call(null,map__2526__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
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
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__2529,p__2530){
var vec__2531 = p__2529;
var seq__2532 = cljs.core.seq.call(null,vec__2531);
var first__2533 = cljs.core.first.call(null,seq__2532);
var seq__2532__$1 = cljs.core.next.call(null,seq__2532);
var type = first__2533;
var first__2533__$1 = cljs.core.first.call(null,seq__2532__$1);
var seq__2532__$2 = cljs.core.next.call(null,seq__2532__$1);
var map__2534 = first__2533__$1;
var map__2534__$1 = ((((!((map__2534 == null)))?(((((map__2534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2534):map__2534);
var attrs = map__2534__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__2534__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = seq__2532__$2;
var map__2535 = p__2530;
var map__2535__$1 = ((((!((map__2535 == null)))?(((((map__2535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2535):map__2535);
var doc = cljs.core.get.call(null,map__2535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__2531,seq__2532,first__2533,seq__2532__$1,type,first__2533__$1,seq__2532__$2,map__2534,map__2534__$1,attrs,valid_QMARK_,body,map__2535,map__2535__$1,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__5733__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__5733__auto____$1)){
var valid_class = temp__5733__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__5733__auto____$1,visible__2249__auto__,temp__5733__auto__,vec__2531,seq__2532,first__2533,seq__2532__$1,type,first__2533__$1,seq__2532__$2,map__2534,map__2534__$1,attrs,valid_QMARK_,body,map__2535,map__2535__$1,doc){
return (function (p1__2528_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__2528_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2528_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__5733__auto____$1,visible__2249__auto__,temp__5733__auto__,vec__2531,seq__2532,first__2533,seq__2532__$1,type,first__2533__$1,seq__2532__$2,map__2534,map__2534__$1,attrs,valid_QMARK_,body,map__2535,map__2535__$1,doc))
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
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__5733__auto____$1,temp__5733__auto__,vec__2531,seq__2532,first__2533,seq__2532__$1,type,first__2533__$1,seq__2532__$2,map__2534,map__2534__$1,attrs,valid_QMARK_,body,map__2535,map__2535__$1,doc){
return (function (p1__2528_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__2528_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2528_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__5733__auto____$1,temp__5733__auto__,vec__2531,seq__2532,first__2533,seq__2532__$1,type,first__2533__$1,seq__2532__$2,map__2534,map__2534__$1,attrs,valid_QMARK_,body,map__2535,map__2535__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__2531,seq__2532,first__2533,seq__2532__$1,type,first__2533__$1,seq__2532__$2,map__2534,map__2534__$1,attrs,valid_QMARK_,body,map__2535,map__2535__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__2538,p__2539){
var vec__2540 = p__2538;
var _ = cljs.core.nth.call(null,vec__2540,(0),null);
var map__2543 = cljs.core.nth.call(null,vec__2540,(1),null);
var map__2543__$1 = ((((!((map__2543 == null)))?(((((map__2543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2543):map__2543);
var attrs = map__2543__$1;
var field = cljs.core.get.call(null,map__2543__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__2540;
var map__2544 = p__2539;
var map__2544__$1 = ((((!((map__2544 == null)))?(((((map__2544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2544):map__2544);
var opts = map__2544__$1;
var doc = cljs.core.get.call(null,map__2544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__2540,_,map__2543,map__2543__$1,attrs,field,component,map__2544,map__2544__$1,opts,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__2540,_,map__2543,map__2543__$1,attrs,field,component,map__2544,map__2544__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__2549,p__2550){
var vec__2551 = p__2549;
var type = cljs.core.nth.call(null,vec__2551,(0),null);
var map__2554 = cljs.core.nth.call(null,vec__2551,(1),null);
var map__2554__$1 = ((((!((map__2554 == null)))?(((((map__2554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2554):map__2554);
var attrs = map__2554__$1;
var id = cljs.core.get.call(null,map__2554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__2554__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__2555 = p__2550;
var map__2555__$1 = ((((!((map__2555 == null)))?(((((map__2555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2555):map__2555);
var doc = cljs.core.get.call(null,map__2555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2555__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2555__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3920__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__2249__auto__,temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_){
return (function (p1__2547_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__2547_SHARP_));
});})(visible__2249__auto__,temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__2249__auto__,temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_){
return (function (p1__2548_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__2548_SHARP_))));
});})(visible__2249__auto__,temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_))
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
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_){
return (function (p1__2547_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__2547_SHARP_));
});})(temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_){
return (function (p1__2548_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__2548_SHARP_))));
});})(temp__5733__auto__,input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__2551,type,map__2554,map__2554__$1,attrs,id,fmt,map__2555,map__2555__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__2559,p__2560){
var vec__2561 = p__2559;
var _ = cljs.core.nth.call(null,vec__2561,(0),null);
var map__2564 = cljs.core.nth.call(null,vec__2561,(1),null);
var map__2564__$1 = ((((!((map__2564 == null)))?(((((map__2564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2564):map__2564);
var attrs = map__2564__$1;
var id = cljs.core.get.call(null,map__2564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__2564__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__2564__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__2564__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var lang = cljs.core.get.call(null,map__2564__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var map__2565 = p__2560;
var map__2565__$1 = ((((!((map__2565 == null)))?(((((map__2565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2565):map__2565);
var doc = cljs.core.get.call(null,map__2565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2565__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2565__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5735__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__5735__auto__)){
var date = temp__5735__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
,((function (visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (p1__2558_SHARP_){
return save_BANG_.call(null,id,p1__2558_SHARP_);
});})(visible__2249__auto__,temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5735__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__5735__auto__)){
var date = temp__5735__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
,((function (temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_){
return (function (p1__2558_SHARP_){
return save_BANG_.call(null,id,p1__2558_SHARP_);
});})(temp__5733__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__2561,_,map__2564,map__2564__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__2565,map__2565__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__2568,p__2569){
var vec__2570 = p__2568;
var _ = cljs.core.nth.call(null,vec__2570,(0),null);
var map__2573 = cljs.core.nth.call(null,vec__2570,(1),null);
var map__2573__$1 = ((((!((map__2573 == null)))?(((((map__2573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2573):map__2573);
var attrs = map__2573__$1;
var id = cljs.core.get.call(null,map__2573__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__2573__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__2573__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__2573__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__2570;
var map__2574 = p__2569;
var map__2574__$1 = ((((!((map__2574 == null)))?(((((map__2574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2574):map__2574);
var opts = map__2574__$1;
var doc = cljs.core.get.call(null,map__2574__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2574__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2574__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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

return ((function (vec__2570,_,map__2573,map__2573__$1,attrs,id,field,checked,default_checked,component,map__2574,map__2574__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__2570,_,map__2573,map__2573__$1,attrs,id,field,checked,default_checked,component,map__2574,map__2574__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__2577,p__2578){
var vec__2579 = p__2577;
var type = cljs.core.nth.call(null,vec__2579,(0),null);
var map__2582 = cljs.core.nth.call(null,vec__2579,(1),null);
var map__2582__$1 = ((((!((map__2582 == null)))?(((((map__2582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2582):map__2582);
var attrs = map__2582__$1;
var id = cljs.core.get.call(null,map__2582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__2582__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__2582__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__2582__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__2583 = p__2578;
var map__2583__$1 = ((((!((map__2583 == null)))?(((((map__2583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2583):map__2583);
var doc = cljs.core.get.call(null,map__2583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2583__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__2579,type,map__2582,map__2582__$1,attrs,id,preamble,postamble,placeholder,map__2583,map__2583__$1,doc,get){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
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
;})(vec__2579,type,map__2582,map__2582__$1,attrs,id,preamble,postamble,placeholder,map__2583,map__2583__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__2586,p__2587){
var vec__2588 = p__2586;
var seq__2589 = cljs.core.seq.call(null,vec__2588);
var first__2590 = cljs.core.first.call(null,seq__2589);
var seq__2589__$1 = cljs.core.next.call(null,seq__2589);
var type = first__2590;
var first__2590__$1 = cljs.core.first.call(null,seq__2589__$1);
var seq__2589__$2 = cljs.core.next.call(null,seq__2589__$1);
var map__2591 = first__2590__$1;
var map__2591__$1 = ((((!((map__2591 == null)))?(((((map__2591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2591):map__2591);
var attrs = map__2591__$1;
var id = cljs.core.get.call(null,map__2591__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__2591__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__2591__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.call(null,map__2591__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__2589__$2;
var map__2592 = p__2587;
var map__2592__$1 = ((((!((map__2592 == null)))?(((((map__2592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2592):map__2592);
var opts = map__2592__$1;
var doc = cljs.core.get.call(null,map__2592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2592__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2592__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__2588,seq__2589,first__2590,seq__2589__$1,type,first__2590__$1,seq__2589__$2,map__2591,map__2591__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__2592,map__2592__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
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
})(),((function (message,temp__5733__auto____$1,visible__2249__auto__,temp__5733__auto__,vec__2588,seq__2589,first__2590,seq__2589__$1,type,first__2590__$1,seq__2589__$2,map__2591,map__2591__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__2592,map__2592__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__5733__auto____$1,visible__2249__auto__,temp__5733__auto__,vec__2588,seq__2589,first__2590,seq__2589__$1,type,first__2590__$1,seq__2589__$2,map__2591,map__2591__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__2592,map__2592__$1,opts,doc,get,save_BANG_))
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
})(),((function (message,temp__5733__auto____$1,temp__5733__auto__,vec__2588,seq__2589,first__2590,seq__2589__$1,type,first__2590__$1,seq__2589__$2,map__2591,map__2591__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__2592,map__2592__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__5733__auto____$1,temp__5733__auto__,vec__2588,seq__2589,first__2590,seq__2589__$1,type,first__2590__$1,seq__2589__$2,map__2591,map__2591__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__2592,map__2592__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__2588,seq__2589,first__2590,seq__2589__$1,type,first__2590__$1,seq__2589__$2,map__2591,map__2591__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__2592,map__2592__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__2595,p__2596){
var vec__2597 = p__2595;
var seq__2598 = cljs.core.seq.call(null,vec__2597);
var first__2599 = cljs.core.first.call(null,seq__2598);
var seq__2598__$1 = cljs.core.next.call(null,seq__2598);
var type = first__2599;
var first__2599__$1 = cljs.core.first.call(null,seq__2598__$1);
var seq__2598__$2 = cljs.core.next.call(null,seq__2598__$1);
var map__2600 = first__2599__$1;
var map__2600__$1 = ((((!((map__2600 == null)))?(((((map__2600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2600):map__2600);
var attrs = map__2600__$1;
var field = cljs.core.get.call(null,map__2600__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__2600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__2600__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__2600__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__2600__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__2598__$2;
var map__2601 = p__2596;
var map__2601__$1 = ((((!((map__2601 == null)))?(((((map__2601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2601):map__2601);
var doc = cljs.core.get.call(null,map__2601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2601__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2601__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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

return ((function (vec__2597,seq__2598,first__2599,seq__2598__$1,type,first__2599__$1,seq__2598__$2,map__2600,map__2600__$1,attrs,field,name,value,checked,default_checked,body,map__2601,map__2601__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__2249__auto__,temp__5733__auto__,vec__2597,seq__2598,first__2599,seq__2598__$1,type,first__2599__$1,seq__2598__$2,map__2600,map__2600__$1,attrs,field,name,value,checked,default_checked,body,map__2601,map__2601__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__2249__auto__,temp__5733__auto__,vec__2597,seq__2598,first__2599,seq__2598__$1,type,first__2599__$1,seq__2598__$2,map__2600,map__2600__$1,attrs,field,name,value,checked,default_checked,body,map__2601,map__2601__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,vec__2597,seq__2598,first__2599,seq__2598__$1,type,first__2599__$1,seq__2598__$2,map__2600,map__2600__$1,attrs,field,name,value,checked,default_checked,body,map__2601,map__2601__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__5733__auto__,vec__2597,seq__2598,first__2599,seq__2598__$1,type,first__2599__$1,seq__2598__$2,map__2600,map__2600__$1,attrs,field,name,value,checked,default_checked,body,map__2601,map__2601__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__2597,seq__2598,first__2599,seq__2598__$1,type,first__2599__$1,seq__2598__$2,map__2600,map__2600__$1,attrs,field,name,value,checked,default_checked,body,map__2601,map__2601__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__2607,p__2608){
var vec__2609 = p__2607;
var type = cljs.core.nth.call(null,vec__2609,(0),null);
var map__2612 = cljs.core.nth.call(null,vec__2609,(1),null);
var map__2612__$1 = ((((!((map__2612 == null)))?(((((map__2612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2612):map__2612);
var attrs = map__2612__$1;
var result_fn = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__2612__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__2613 = p__2608;
var map__2613__$1 = ((((!((map__2613 == null)))?(((((map__2613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2613):map__2613);
var doc = cljs.core.get.call(null,map__2613__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2613__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2613__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
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
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (p1__2604_SHARP_){
var temp__5735__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__2604_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__2604_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (p1__2605_SHARP_){
var G__2616 = p1__2605_SHARP_.which;
switch (G__2616) {
case (38):
p1__2605_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__2605_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__2605_SHARP_));

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
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__3920__auto__){
return or__3920__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (p1__2606_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__2606_SHARP_.target.getAttribute("tabIndex")));
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__2249__auto__,temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
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
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (p1__2604_SHARP_){
var temp__5735__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__2604_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__2604_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (p1__2605_SHARP_){
var G__2617 = p1__2605_SHARP_.which;
switch (G__2617) {
case (38):
p1__2605_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__2605_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__2605_SHARP_));

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
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3920__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__3920__auto__){
return or__3920__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (p1__2606_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__2606_SHARP_.target.getAttribute("tabIndex")));
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__5733__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__2609,type,map__2612,map__2612__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__2613,map__2613__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__2621,p__2622){
var vec__2623 = p__2621;
var type = cljs.core.nth.call(null,vec__2623,(0),null);
var map__2626 = cljs.core.nth.call(null,vec__2623,(1),null);
var map__2626__$1 = ((((!((map__2626 == null)))?(((((map__2626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2626):map__2626);
var attrs = map__2626__$1;
var id = cljs.core.get.call(null,map__2626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__2627 = p__2622;
var map__2627__$1 = ((((!((map__2627 == null)))?(((((map__2627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2627):map__2627);
var doc = cljs.core.get.call(null,map__2627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__2627__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__2623,type,map__2626,map__2626__$1,attrs,id,map__2627,map__2627__$1,doc,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__2249__auto__,temp__5733__auto__,vec__2623,type,map__2626,map__2626__$1,attrs,id,map__2627,map__2627__$1,doc,save_BANG_){
return (function (p1__2620_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__2620_SHARP_.target.files)));
});})(visible__2249__auto__,temp__5733__auto__,vec__2623,type,map__2626,map__2626__$1,attrs,id,map__2627,map__2627__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,vec__2623,type,map__2626,map__2626__$1,attrs,id,map__2627,map__2627__$1,doc,save_BANG_){
return (function (p1__2620_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__2620_SHARP_.target.files)));
});})(temp__5733__auto__,vec__2623,type,map__2626,map__2626__$1,attrs,id,map__2627,map__2627__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__2623,type,map__2626,map__2626__$1,attrs,id,map__2627,map__2627__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__2631,p__2632){
var vec__2633 = p__2631;
var type = cljs.core.nth.call(null,vec__2633,(0),null);
var map__2636 = cljs.core.nth.call(null,vec__2633,(1),null);
var map__2636__$1 = ((((!((map__2636 == null)))?(((((map__2636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2636):map__2636);
var attrs = map__2636__$1;
var id = cljs.core.get.call(null,map__2636__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__2637 = p__2632;
var map__2637__$1 = ((((!((map__2637 == null)))?(((((map__2637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2637):map__2637);
var doc = cljs.core.get.call(null,map__2637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__2637__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__2633,type,map__2636,map__2636__$1,attrs,id,map__2637,map__2637__$1,doc,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__2249__auto__,temp__5733__auto__,vec__2633,type,map__2636,map__2636__$1,attrs,id,map__2637,map__2637__$1,doc,save_BANG_){
return (function (p1__2630_SHARP_){
return save_BANG_.call(null,id,p1__2630_SHARP_.target.files);
});})(visible__2249__auto__,temp__5733__auto__,vec__2633,type,map__2636,map__2636__$1,attrs,id,map__2637,map__2637__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,vec__2633,type,map__2636,map__2636__$1,attrs,id,map__2637,map__2637__$1,doc,save_BANG_){
return (function (p1__2630_SHARP_){
return save_BANG_.call(null,id,p1__2630_SHARP_.target.files);
});})(temp__5733__auto__,vec__2633,type,map__2636,map__2636__$1,attrs,id,map__2637,map__2637__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__2633,type,map__2636,map__2636__$1,attrs,id,map__2637,map__2637__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__2640,p__2641,selections,field,id){
var vec__2642 = p__2640;
var seq__2643 = cljs.core.seq.call(null,vec__2642);
var first__2644 = cljs.core.first.call(null,seq__2643);
var seq__2643__$1 = cljs.core.next.call(null,seq__2643);
var type = first__2644;
var first__2644__$1 = cljs.core.first.call(null,seq__2643__$1);
var seq__2643__$2 = cljs.core.next.call(null,seq__2643__$1);
var map__2645 = first__2644__$1;
var map__2645__$1 = ((((!((map__2645 == null)))?(((((map__2645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2645):map__2645);
var attrs = map__2645__$1;
var key = cljs.core.get.call(null,map__2645__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__2645__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = seq__2643__$2;
var map__2646 = p__2641;
var map__2646__$1 = ((((!((map__2646 == null)))?(((((map__2646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2646):map__2646);
var save_BANG_ = cljs.core.get.call(null,map__2646__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__2646__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__2642,seq__2643,first__2644,seq__2643__$1,type,first__2644__$1,seq__2643__$2,map__2645,map__2645__$1,attrs,key,touch_event,body,map__2646,map__2646__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not.call(null,value)]));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__2642,seq__2643,first__2644,seq__2643__$1,type,first__2644__$1,seq__2643__$2,map__2645,map__2645__$1,attrs,key,touch_event,body,map__2646,map__2646__$1,save_BANG_,multi_select))
;
return ((function (vec__2642,seq__2643,first__2644,seq__2643__$1,type,first__2644__$1,seq__2643__$2,map__2645,map__2645__$1,attrs,key,touch_event,body,map__2646,map__2646__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__3920__auto__ = touch_event;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_]),attrs),body], null);
});
;})(vec__2642,seq__2643,first__2644,seq__2643__$1,type,first__2644__$1,seq__2643__$2,map__2645,map__2645__$1,attrs,key,touch_event,body,map__2646,map__2646__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__2649){
var map__2650 = p__2649;
var map__2650__$1 = ((((!((map__2650 == null)))?(((((map__2650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2650):map__2650);
var get = cljs.core.get.call(null,map__2650__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__2650__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__2650,map__2650__$1,get,multi_select){
return (function (m,p__2652){
var vec__2653 = p__2652;
var _ = cljs.core.nth.call(null,vec__2653,(0),null);
var map__2656 = cljs.core.nth.call(null,vec__2653,(1),null);
var map__2656__$1 = ((((!((map__2656 == null)))?(((((map__2656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2656):map__2656);
var key = cljs.core.get.call(null,map__2656__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__2650,map__2650__$1,get,multi_select))
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
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__2660,p__2661){
var vec__2662 = p__2660;
var seq__2663 = cljs.core.seq.call(null,vec__2662);
var first__2664 = cljs.core.first.call(null,seq__2663);
var seq__2663__$1 = cljs.core.next.call(null,seq__2663);
var type = first__2664;
var first__2664__$1 = cljs.core.first.call(null,seq__2663__$1);
var seq__2663__$2 = cljs.core.next.call(null,seq__2663__$1);
var map__2665 = first__2664__$1;
var map__2665__$1 = ((((!((map__2665 == null)))?(((((map__2665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2665):map__2665);
var attrs = map__2665__$1;
var field = cljs.core.get.call(null,map__2665__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__2665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__2663__$2;
var map__2666 = p__2661;
var map__2666__$1 = ((((!((map__2666 == null)))?(((((map__2666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2666):map__2666);
var opts = map__2666__$1;
var get = cljs.core.get.call(null,map__2666__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get){
return (function (p1__2658_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get){
return (function (p__2669){
var vec__2670 = p__2669;
var k = cljs.core.nth.call(null,vec__2670,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get))
,p1__2658_SHARP_));
});})(selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get){
return (function (p1__2659_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__2659_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var visible_QMARK_ = temp__5733__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__2662,seq__2663,first__2664,seq__2663__$1,type,first__2664__$1,seq__2663__$2,map__2665,map__2665__$1,attrs,field,id,selection_items,map__2666,map__2666__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__2673,p__2674){
var vec__2675 = p__2673;
var _ = cljs.core.nth.call(null,vec__2675,(0),null);
var attrs = cljs.core.nth.call(null,vec__2675,(1),null);
var field = vec__2675;
var map__2678 = p__2674;
var map__2678__$1 = ((((!((map__2678 == null)))?(((((map__2678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2678):map__2678);
var opts = map__2678__$1;
var doc = cljs.core.get.call(null,map__2678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__2675,_,attrs,field,map__2678,map__2678__$1,opts,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__2675,_,attrs,field,map__2678,map__2678__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__2680,p__2681){
var vec__2682 = p__2680;
var _ = cljs.core.nth.call(null,vec__2682,(0),null);
var attrs = cljs.core.nth.call(null,vec__2682,(1),null);
var field = vec__2682;
var map__2685 = p__2681;
var map__2685__$1 = ((((!((map__2685 == null)))?(((((map__2685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2685):map__2685);
var opts = map__2685__$1;
var doc = cljs.core.get.call(null,map__2685__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__2682,_,attrs,field,map__2685,map__2685__$1,opts,doc){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__2682,_,attrs,field,map__2685,map__2685__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4290__auto__ = (function reagent_forms$core$map_options_$_iter__2687(s__2688){
return (new cljs.core.LazySeq(null,(function (){
var s__2688__$1 = s__2688;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__2688__$1);
if(temp__5735__auto__){
var s__2688__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2688__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__2688__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__2690 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__2689 = (0);
while(true){
if((i__2689 < size__4289__auto__)){
var vec__2691 = cljs.core._nth.call(null,c__4288__auto__,i__2689);
var _ = cljs.core.nth.call(null,vec__2691,(0),null);
var map__2694 = cljs.core.nth.call(null,vec__2691,(1),null);
var map__2694__$1 = ((((!((map__2694 == null)))?(((((map__2694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2694):map__2694);
var key = cljs.core.get.call(null,map__2694__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__2691,(2),null);
cljs.core.chunk_append.call(null,b__2690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null));

var G__2701 = (i__2689 + (1));
i__2689 = G__2701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2690),reagent_forms$core$map_options_$_iter__2687.call(null,cljs.core.chunk_rest.call(null,s__2688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2690),null);
}
} else {
var vec__2696 = cljs.core.first.call(null,s__2688__$2);
var _ = cljs.core.nth.call(null,vec__2696,(0),null);
var map__2699 = cljs.core.nth.call(null,vec__2696,(1),null);
var map__2699__$1 = ((((!((map__2699 == null)))?(((((map__2699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2699):map__2699);
var key = cljs.core.get.call(null,map__2699__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__2696,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__2687.call(null,cljs.core.rest.call(null,s__2688__$2)));
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
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2702_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__2702_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__2705,p__2706){
var vec__2707 = p__2705;
var seq__2708 = cljs.core.seq.call(null,vec__2707);
var first__2709 = cljs.core.first.call(null,seq__2708);
var seq__2708__$1 = cljs.core.next.call(null,seq__2708);
var type = first__2709;
var first__2709__$1 = cljs.core.first.call(null,seq__2708__$1);
var seq__2708__$2 = cljs.core.next.call(null,seq__2708__$1);
var map__2710 = first__2709__$1;
var map__2710__$1 = ((((!((map__2710 == null)))?(((((map__2710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2710):map__2710);
var attrs = map__2710__$1;
var field = cljs.core.get.call(null,map__2710__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__2710__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__2708__$2;
var map__2711 = p__2706;
var map__2711__$1 = ((((!((map__2711 == null)))?(((((map__2711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2711):map__2711);
var doc = cljs.core.get.call(null,map__2711__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__2711__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__2711__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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

return ((function (options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_){
return (function (){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__2249__auto__ = temp__5733__auto__;
if(cljs.core.truth_(visible__2249__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__2249__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_){
return (function (p1__2703_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__2703_SHARP_)));
});})(visible__2249__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__2249__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_){
return (function (p1__2704_SHARP_){
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__2704_SHARP_));
if(cljs.core.truth_(temp__5733__auto____$1)){
var visible_QMARK_ = temp__5733__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__2249__auto__,temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_){
return (function (p1__2703_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__2703_SHARP_)));
});})(temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_){
return (function (p1__2704_SHARP_){
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__2704_SHARP_));
if(cljs.core.truth_(temp__5733__auto____$1)){
var visible_QMARK_ = temp__5733__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__5733__auto__,options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__2707,seq__2708,first__2709,seq__2708__$1,type,first__2709__$1,seq__2708__$2,map__2710,map__2710__$1,attrs,field,id,options,map__2711,map__2711__$1,doc,get,save_BANG_))
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
var len__4497__auto___2718 = arguments.length;
var i__4498__auto___2719 = (0);
while(true){
if((i__4498__auto___2719 < len__4497__auto___2718)){
args__4500__auto__.push((arguments[i__4498__auto___2719]));

var G__2720 = (i__4498__auto___2719 + (1));
i__4498__auto___2719 = G__2720;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__2714_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__2714_SHARP_));
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
reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq2715){
var G__2716 = cljs.core.first.call(null,seq2715);
var seq2715__$1 = cljs.core.next.call(null,seq2715);
var G__2717 = cljs.core.first.call(null,seq2715__$1);
var seq2715__$2 = cljs.core.next.call(null,seq2715__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2716,G__2717,seq2715__$2);
});


//# sourceMappingURL=core.js.map
