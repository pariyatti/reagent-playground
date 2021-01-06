// Compiled by ClojureScript 1.10.191 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = ((typeof window !== 'undefined') && (!(((window["document"]) == null))));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__1474 = clojure.string.split.call(null,name_str,/-/);
var seq__1475 = cljs.core.seq.call(null,vec__1474);
var first__1476 = cljs.core.first.call(null,seq__1475);
var seq__1475__$1 = cljs.core.next.call(null,seq__1475);
var start = first__1476;
var parts = seq__1475__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__1478__delegate = function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var or__3920__auto___1479 = self__.p;
if(cljs.core.truth_(or__3920__auto___1479)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__1478 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__1480__i = 0, G__1480__a = new Array(arguments.length -  1);
while (G__1480__i < G__1480__a.length) {G__1480__a[G__1480__i] = arguments[G__1480__i + 1]; ++G__1480__i;}
  a = new cljs.core.IndexedSeq(G__1480__a,0,null);
} 
return G__1478__delegate.call(this,self__,a);};
G__1478.cljs$lang$maxFixedArity = 1;
G__1478.cljs$lang$applyTo = (function (arglist__1481){
var self__ = cljs.core.first(arglist__1481);
var a = cljs.core.rest(arglist__1481);
return G__1478__delegate(self__,a);
});
G__1478.cljs$core$IFn$_invoke$arity$variadic = G__1478__delegate;
return G__1478;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args1477){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1477)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__1482__delegate = function (a){
var self__ = this;
var _ = this;
var or__3920__auto___1483 = self__.p;
if(cljs.core.truth_(or__3920__auto___1483)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__1482 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__1484__i = 0, G__1484__a = new Array(arguments.length -  0);
while (G__1484__i < G__1484__a.length) {G__1484__a[G__1484__i] = arguments[G__1484__i + 0]; ++G__1484__i;}
  a = new cljs.core.IndexedSeq(G__1484__a,0,null);
} 
return G__1482__delegate.call(this,a);};
G__1482.cljs$lang$maxFixedArity = 0;
G__1482.cljs$lang$applyTo = (function (arglist__1485){
var a = cljs.core.seq(arglist__1485);
return G__1482__delegate(a);
});
G__1482.cljs$core$IFn$_invoke$arity$variadic = G__1482__delegate;
return G__1482;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"reagent.impl.util/partial-ifn");
});

/**
 * Positional factory function for reagent.impl.util/partial-ifn.
 */
reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5735__auto__)){
var c1 = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5735__auto____$1)){
var c2 = temp__5735__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5735__auto__)){
var s1 = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5735__auto____$1)){
var s2 = temp__5735__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e1486){if((e1486 instanceof Object)){
var e = e1486;
if(typeof console !== 'undefined'){
console.warn(["Warning: ","Error unmounting:"].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e1486;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_1488 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_1488){
return (function (){
var _STAR_always_update_STAR_1489 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_1489;
}});})(_STAR_always_update_STAR_1488))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_1488;
}}catch (e1487){if((e1487 instanceof Object)){
var e = e1487;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e1487;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__1490_1494 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__1491_1495 = null;
var count__1492_1496 = (0);
var i__1493_1497 = (0);
while(true){
if((i__1493_1497 < count__1492_1496)){
var v_1498 = cljs.core._nth.call(null,chunk__1491_1495,i__1493_1497);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_1498);


var G__1499 = seq__1490_1494;
var G__1500 = chunk__1491_1495;
var G__1501 = count__1492_1496;
var G__1502 = (i__1493_1497 + (1));
seq__1490_1494 = G__1499;
chunk__1491_1495 = G__1500;
count__1492_1496 = G__1501;
i__1493_1497 = G__1502;
continue;
} else {
var temp__5735__auto___1503 = cljs.core.seq.call(null,seq__1490_1494);
if(temp__5735__auto___1503){
var seq__1490_1504__$1 = temp__5735__auto___1503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1490_1504__$1)){
var c__4317__auto___1505 = cljs.core.chunk_first.call(null,seq__1490_1504__$1);
var G__1506 = cljs.core.chunk_rest.call(null,seq__1490_1504__$1);
var G__1507 = c__4317__auto___1505;
var G__1508 = cljs.core.count.call(null,c__4317__auto___1505);
var G__1509 = (0);
seq__1490_1494 = G__1506;
chunk__1491_1495 = G__1507;
count__1492_1496 = G__1508;
i__1493_1497 = G__1509;
continue;
} else {
var v_1510 = cljs.core.first.call(null,seq__1490_1504__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_1510);


var G__1511 = cljs.core.next.call(null,seq__1490_1504__$1);
var G__1512 = null;
var G__1513 = (0);
var G__1514 = (0);
seq__1490_1494 = G__1511;
chunk__1491_1495 = G__1512;
count__1492_1496 = G__1513;
i__1493_1497 = G__1514;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map
