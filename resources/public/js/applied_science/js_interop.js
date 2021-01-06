// Compiled by ClojureScript 1.10.191 {}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10062 = arguments.length;
var i__4498__auto___10063 = (0);
while(true){
if((i__4498__auto___10063 < len__4497__auto___10062)){
args__4500__auto__.push((arguments[i__4498__auto___10063]));

var G__10064 = (i__4498__auto___10063 + (1));
i__4498__auto___10063 = G__10064;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__10055_10065 = keyvals;
var vec__10056_10066 = G__10055_10065;
var seq__10057_10067 = cljs.core.seq.call(null,vec__10056_10066);
var first__10058_10068 = cljs.core.first.call(null,seq__10057_10067);
var seq__10057_10069__$1 = cljs.core.next.call(null,seq__10057_10067);
var k_10070 = first__10058_10068;
var first__10058_10071__$1 = cljs.core.first.call(null,seq__10057_10069__$1);
var seq__10057_10072__$2 = cljs.core.next.call(null,seq__10057_10069__$1);
var v_10073 = first__10058_10071__$1;
var keyvals_10074__$1 = seq__10057_10072__$2;
var G__10055_10075__$1 = G__10055_10065;
while(true){
var vec__10059_10076 = G__10055_10075__$1;
var seq__10060_10077 = cljs.core.seq.call(null,vec__10059_10076);
var first__10061_10078 = cljs.core.first.call(null,seq__10060_10077);
var seq__10060_10079__$1 = cljs.core.next.call(null,seq__10060_10077);
var k_10080__$1 = first__10061_10078;
var first__10061_10081__$1 = cljs.core.first.call(null,seq__10060_10079__$1);
var seq__10060_10082__$2 = cljs.core.next.call(null,seq__10060_10079__$1);
var v_10083__$1 = first__10061_10081__$1;
var keyvals_10084__$2 = seq__10060_10082__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_10080__$1)] = v_10083__$1);

if(keyvals_10084__$2){
var G__10085 = keyvals_10084__$2;
G__10055_10075__$1 = G__10085;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq10050){
var G__10051 = cljs.core.first.call(null,seq10050);
var seq10050__$1 = cljs.core.next.call(null,seq10050);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10051,seq10050__$1);
});

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key.call(null,k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__10087 = arguments.length;
switch (G__10087) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj10088 = obj;
var k10089 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj10090 = obj10088;
return ((!((obj10090 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10089,obj10090)));
})()){
return (obj10088[k10089]);
} else {
return undefined;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj10091 = obj;
var k10092 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj10093 = obj10091;
return ((!((obj10093 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10092,obj10093)));
})()){
return (obj10091[k10092]);
} else {
return not_found;
}
});

applied_science.js_interop.get.cljs$lang$maxFixedArity = 3;

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__10096 = arguments.length;
switch (G__10096) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),not_found);
});

applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3;

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj,applied_science.js_interop.impl.wrap_key.call(null,k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj10098 = self__.obj;
var k10099 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj10100 = obj10098;
return ((!((obj10100 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10099,obj10100)));
})()){
return (obj10098[k10099]);
} else {
return undefined;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj10101 = self__.obj;
var k10102 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj10103 = obj10101;
return ((!((obj10103 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10102,obj10103)));
})()){
return (obj10101[k10102]);
} else {
return not_found;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
});

applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

applied_science.js_interop.JSLookup.cljs$lang$type = true;

applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup";

applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"applied-science.js-interop/JSLookup");
});

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10116 = arguments.length;
var i__4498__auto___10117 = (0);
while(true){
if((i__4498__auto___10117 < len__4497__auto___10116)){
args__4500__auto__.push((arguments[i__4498__auto___10117]));

var G__10118 = (i__4498__auto___10117 + (1));
i__4498__auto___10117 = G__10118;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = ((!((obj == null)))?obj:({}));
var G__10109 = keyvals;
var vec__10110 = G__10109;
var seq__10111 = cljs.core.seq.call(null,vec__10110);
var first__10112 = cljs.core.first.call(null,seq__10111);
var seq__10111__$1 = cljs.core.next.call(null,seq__10111);
var k = first__10112;
var first__10112__$1 = cljs.core.first.call(null,seq__10111__$1);
var seq__10111__$2 = cljs.core.next.call(null,seq__10111__$1);
var v = first__10112__$1;
var kvs = seq__10111__$2;
var G__10109__$1 = G__10109;
while(true){
var vec__10113 = G__10109__$1;
var seq__10114 = cljs.core.seq.call(null,vec__10113);
var first__10115 = cljs.core.first.call(null,seq__10114);
var seq__10114__$1 = cljs.core.next.call(null,seq__10114);
var k__$1 = first__10115;
var first__10115__$1 = cljs.core.first.call(null,seq__10114__$1);
var seq__10114__$2 = cljs.core.next.call(null,seq__10114__$1);
var v__$1 = first__10115__$1;
var kvs__$1 = seq__10114__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__10119 = kvs__$1;
G__10109__$1 = G__10119;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq10104){
var G__10105 = cljs.core.first.call(null,seq10104);
var seq10104__$1 = cljs.core.next.call(null,seq10104);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10105,seq10104__$1);
});

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10124 = arguments.length;
var i__4498__auto___10125 = (0);
while(true){
if((i__4498__auto___10125 < len__4497__auto___10124)){
args__4500__auto__.push((arguments[i__4498__auto___10125]));

var G__10126 = (i__4498__auto___10125 + (1));
i__4498__auto___10125 = G__10126;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = ((!((obj == null)))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key.call(null,k);
var v = cljs.core.apply.call(null,f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
});

applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq10120){
var G__10121 = cljs.core.first.call(null,seq10120);
var seq10120__$1 = cljs.core.next.call(null,seq10120);
var G__10122 = cljs.core.first.call(null,seq10120__$1);
var seq10120__$2 = cljs.core.next.call(null,seq10120__$1);
var G__10123 = cljs.core.first.call(null,seq10120__$2);
var seq10120__$3 = cljs.core.next.call(null,seq10120__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10121,G__10122,G__10123,seq10120__$3);
});

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10131 = arguments.length;
var i__4498__auto___10132 = (0);
while(true){
if((i__4498__auto___10132 < len__4497__auto___10131)){
args__4500__auto__.push((arguments[i__4498__auto___10132]));

var G__10133 = (i__4498__auto___10132 + (1));
i__4498__auto___10132 = G__10133;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),f,args);
});

applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq10127){
var G__10128 = cljs.core.first.call(null,seq10127);
var seq10127__$1 = cljs.core.next.call(null,seq10127);
var G__10129 = cljs.core.first.call(null,seq10127__$1);
var seq10127__$2 = cljs.core.next.call(null,seq10127__$1);
var G__10130 = cljs.core.first.call(null,seq10127__$2);
var seq10127__$3 = cljs.core.next.call(null,seq10127__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10128,G__10129,G__10130,seq10127__$3);
});

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__10138 = arguments.length;
switch (G__10138) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___10144 = arguments.length;
var i__4498__auto___10145 = (0);
while(true){
if((i__4498__auto___10145 < len__4497__auto___10144)){
args_arr__4512__auto__.push((arguments[i__4498__auto___10145]));

var G__10146 = (i__4498__auto___10145 + (1));
i__4498__auto___10145 = G__10146;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4513__auto__);

}
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = ((!((obj == null)))?obj:({}));
if(!((x == null))){
var seq__10139_10147 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__10140_10148 = null;
var count__10141_10149 = (0);
var i__10142_10150 = (0);
while(true){
if((i__10142_10150 < count__10141_10149)){
var k_10151 = cljs.core._nth.call(null,chunk__10140_10148,i__10142_10150);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_10151,applied_science.js_interop.unchecked_get.call(null,x,k_10151));


var G__10152 = seq__10139_10147;
var G__10153 = chunk__10140_10148;
var G__10154 = count__10141_10149;
var G__10155 = (i__10142_10150 + (1));
seq__10139_10147 = G__10152;
chunk__10140_10148 = G__10153;
count__10141_10149 = G__10154;
i__10142_10150 = G__10155;
continue;
} else {
var temp__5735__auto___10156 = cljs.core.seq.call(null,seq__10139_10147);
if(temp__5735__auto___10156){
var seq__10139_10157__$1 = temp__5735__auto___10156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10139_10157__$1)){
var c__4317__auto___10158 = cljs.core.chunk_first.call(null,seq__10139_10157__$1);
var G__10159 = cljs.core.chunk_rest.call(null,seq__10139_10157__$1);
var G__10160 = c__4317__auto___10158;
var G__10161 = cljs.core.count.call(null,c__4317__auto___10158);
var G__10162 = (0);
seq__10139_10147 = G__10159;
chunk__10140_10148 = G__10160;
count__10141_10149 = G__10161;
i__10142_10150 = G__10162;
continue;
} else {
var k_10163 = cljs.core.first.call(null,seq__10139_10157__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_10163,applied_science.js_interop.unchecked_get.call(null,x,k_10163));


var G__10164 = cljs.core.next.call(null,seq__10139_10157__$1);
var G__10165 = null;
var G__10166 = (0);
var G__10167 = (0);
seq__10139_10147 = G__10164;
chunk__10140_10148 = G__10165;
count__10141_10149 = G__10166;
i__10142_10150 = G__10167;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.call(null,applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.call(null,obj,x),more);
});

/** @this {Function} */
applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq10135){
var G__10136 = cljs.core.first.call(null,seq10135);
var seq10135__$1 = cljs.core.next.call(null,seq10135);
var G__10137 = cljs.core.first.call(null,seq10135__$1);
var seq10135__$2 = cljs.core.next.call(null,seq10135__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10136,G__10137,seq10135__$2);
});

applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__10168 = array;
G__10168.push(x);

return G__10168;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__10169 = array;
G__10169.unshift(x);

return G__10169;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10176 = arguments.length;
var i__4498__auto___10177 = (0);
while(true){
if((i__4498__auto___10177 < len__4497__auto___10176)){
args__4500__auto__.push((arguments[i__4498__auto___10177]));

var G__10178 = (i__4498__auto___10177 + (1));
i__4498__auto___10177 = G__10178;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj10173 = obj;
var k10174 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj10175 = obj10173;
return ((!((obj10175 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10174,obj10175)));
})()){
return (obj10173[k10174]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq10170){
var G__10171 = cljs.core.first.call(null,seq10170);
var seq10170__$1 = cljs.core.next.call(null,seq10170);
var G__10172 = cljs.core.first.call(null,seq10170__$1);
var seq10170__$2 = cljs.core.next.call(null,seq10170__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10171,G__10172,seq10170__$2);
});

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj10179 = obj;
var k10180 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj10181 = obj10179;
return ((!((obj10181 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10180,obj10181)));
})()){
return (obj10179[k10180]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10185 = arguments.length;
var i__4498__auto___10186 = (0);
while(true){
if((i__4498__auto___10186 < len__4497__auto___10185)){
args__4500__auto__.push((arguments[i__4498__auto___10186]));

var G__10187 = (i__4498__auto___10186 + (1));
i__4498__auto___10186 = G__10187;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq10182){
var G__10183 = cljs.core.first.call(null,seq10182);
var seq10182__$1 = cljs.core.next.call(null,seq10182);
var G__10184 = cljs.core.first.call(null,seq10182__$1);
var seq10182__$2 = cljs.core.next.call(null,seq10182__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10183,G__10184,seq10182__$2);
});

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10209 = arguments.length;
var i__4498__auto___10210 = (0);
while(true){
if((i__4498__auto___10210 < len__4497__auto___10209)){
args__4500__auto__.push((arguments[i__4498__auto___10210]));

var G__10211 = (i__4498__auto___10210 + (1));
i__4498__auto___10210 = G__10211;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = {};
var seq__10191_10212 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__10192_10213 = null;
var count__10193_10214 = (0);
var i__10194_10215 = (0);
while(true){
if((i__10194_10215 < count__10193_10214)){
var vec__10195_10216 = cljs.core._nth.call(null,chunk__10192_10213,i__10194_10215);
var k_10217 = cljs.core.nth.call(null,vec__10195_10216,(0),null);
var v_10218 = cljs.core.nth.call(null,vec__10195_10216,(1),null);
var obj10198_10219 = obj;
var obj10199_10220 = ((!((obj10198_10219 == null)))?obj10198_10219:{});
(obj10199_10220[applied_science.js_interop.impl.wrap_key.call(null,k_10217)] = v_10218);



var G__10221 = seq__10191_10212;
var G__10222 = chunk__10192_10213;
var G__10223 = count__10193_10214;
var G__10224 = (i__10194_10215 + (1));
seq__10191_10212 = G__10221;
chunk__10192_10213 = G__10222;
count__10193_10214 = G__10223;
i__10194_10215 = G__10224;
continue;
} else {
var temp__5735__auto___10225 = cljs.core.seq.call(null,seq__10191_10212);
if(temp__5735__auto___10225){
var seq__10191_10226__$1 = temp__5735__auto___10225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10191_10226__$1)){
var c__4317__auto___10227 = cljs.core.chunk_first.call(null,seq__10191_10226__$1);
var G__10228 = cljs.core.chunk_rest.call(null,seq__10191_10226__$1);
var G__10229 = c__4317__auto___10227;
var G__10230 = cljs.core.count.call(null,c__4317__auto___10227);
var G__10231 = (0);
seq__10191_10212 = G__10228;
chunk__10192_10213 = G__10229;
count__10193_10214 = G__10230;
i__10194_10215 = G__10231;
continue;
} else {
var vec__10202_10232 = cljs.core.first.call(null,seq__10191_10226__$1);
var k_10233 = cljs.core.nth.call(null,vec__10202_10232,(0),null);
var v_10234 = cljs.core.nth.call(null,vec__10202_10232,(1),null);
var obj10205_10235 = obj;
var obj10206_10236 = ((!((obj10205_10235 == null)))?obj10205_10235:{});
(obj10206_10236[applied_science.js_interop.impl.wrap_key.call(null,k_10233)] = v_10234);



var G__10237 = cljs.core.next.call(null,seq__10191_10226__$1);
var G__10238 = null;
var G__10239 = (0);
var G__10240 = (0);
seq__10191_10212 = G__10237;
chunk__10192_10213 = G__10238;
count__10193_10214 = G__10239;
i__10194_10215 = G__10240;
continue;
}
} else {
}
}
break;
}

return obj;
});

applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq10188){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10188));
});


//# sourceMappingURL=js_interop.js.map
