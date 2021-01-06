// Compiled by ClojureScript 1.10.191 {}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2503 = arguments.length;
var i__4498__auto___2504 = (0);
while(true){
if((i__4498__auto___2504 < len__4497__auto___2503)){
args__4500__auto__.push((arguments[i__4498__auto___2504]));

var G__2505 = (i__4498__auto___2504 + (1));
i__4498__auto___2504 = G__2505;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__2496_2506 = keyvals;
var vec__2497_2507 = G__2496_2506;
var seq__2498_2508 = cljs.core.seq.call(null,vec__2497_2507);
var first__2499_2509 = cljs.core.first.call(null,seq__2498_2508);
var seq__2498_2510__$1 = cljs.core.next.call(null,seq__2498_2508);
var k_2511 = first__2499_2509;
var first__2499_2512__$1 = cljs.core.first.call(null,seq__2498_2510__$1);
var seq__2498_2513__$2 = cljs.core.next.call(null,seq__2498_2510__$1);
var v_2514 = first__2499_2512__$1;
var keyvals_2515__$1 = seq__2498_2513__$2;
var G__2496_2516__$1 = G__2496_2506;
while(true){
var vec__2500_2517 = G__2496_2516__$1;
var seq__2501_2518 = cljs.core.seq.call(null,vec__2500_2517);
var first__2502_2519 = cljs.core.first.call(null,seq__2501_2518);
var seq__2501_2520__$1 = cljs.core.next.call(null,seq__2501_2518);
var k_2521__$1 = first__2502_2519;
var first__2502_2522__$1 = cljs.core.first.call(null,seq__2501_2520__$1);
var seq__2501_2523__$2 = cljs.core.next.call(null,seq__2501_2520__$1);
var v_2524__$1 = first__2502_2522__$1;
var keyvals_2525__$2 = seq__2501_2523__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_2521__$1)] = v_2524__$1);

if(keyvals_2525__$2){
var G__2526 = keyvals_2525__$2;
G__2496_2516__$1 = G__2526;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq2491){
var G__2492 = cljs.core.first.call(null,seq2491);
var seq2491__$1 = cljs.core.next.call(null,seq2491);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2492,seq2491__$1);
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
var G__2528 = arguments.length;
switch (G__2528) {
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
var obj2529 = obj;
var k2530 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj2531 = obj2529;
return ((!((obj2531 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2530,obj2531)));
})()){
return (obj2529[k2530]);
} else {
return undefined;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj2532 = obj;
var k2533 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj2534 = obj2532;
return ((!((obj2534 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2533,obj2534)));
})()){
return (obj2532[k2533]);
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
var G__2537 = arguments.length;
switch (G__2537) {
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
var obj2539 = self__.obj;
var k2540 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj2541 = obj2539;
return ((!((obj2541 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2540,obj2541)));
})()){
return (obj2539[k2540]);
} else {
return undefined;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj2542 = self__.obj;
var k2543 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj2544 = obj2542;
return ((!((obj2544 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2543,obj2544)));
})()){
return (obj2542[k2543]);
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
var len__4497__auto___2557 = arguments.length;
var i__4498__auto___2558 = (0);
while(true){
if((i__4498__auto___2558 < len__4497__auto___2557)){
args__4500__auto__.push((arguments[i__4498__auto___2558]));

var G__2559 = (i__4498__auto___2558 + (1));
i__4498__auto___2558 = G__2559;
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
var G__2550 = keyvals;
var vec__2551 = G__2550;
var seq__2552 = cljs.core.seq.call(null,vec__2551);
var first__2553 = cljs.core.first.call(null,seq__2552);
var seq__2552__$1 = cljs.core.next.call(null,seq__2552);
var k = first__2553;
var first__2553__$1 = cljs.core.first.call(null,seq__2552__$1);
var seq__2552__$2 = cljs.core.next.call(null,seq__2552__$1);
var v = first__2553__$1;
var kvs = seq__2552__$2;
var G__2550__$1 = G__2550;
while(true){
var vec__2554 = G__2550__$1;
var seq__2555 = cljs.core.seq.call(null,vec__2554);
var first__2556 = cljs.core.first.call(null,seq__2555);
var seq__2555__$1 = cljs.core.next.call(null,seq__2555);
var k__$1 = first__2556;
var first__2556__$1 = cljs.core.first.call(null,seq__2555__$1);
var seq__2555__$2 = cljs.core.next.call(null,seq__2555__$1);
var v__$1 = first__2556__$1;
var kvs__$1 = seq__2555__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__2560 = kvs__$1;
G__2550__$1 = G__2560;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq2545){
var G__2546 = cljs.core.first.call(null,seq2545);
var seq2545__$1 = cljs.core.next.call(null,seq2545);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2546,seq2545__$1);
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
var len__4497__auto___2565 = arguments.length;
var i__4498__auto___2566 = (0);
while(true){
if((i__4498__auto___2566 < len__4497__auto___2565)){
args__4500__auto__.push((arguments[i__4498__auto___2566]));

var G__2567 = (i__4498__auto___2566 + (1));
i__4498__auto___2566 = G__2567;
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
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq2561){
var G__2562 = cljs.core.first.call(null,seq2561);
var seq2561__$1 = cljs.core.next.call(null,seq2561);
var G__2563 = cljs.core.first.call(null,seq2561__$1);
var seq2561__$2 = cljs.core.next.call(null,seq2561__$1);
var G__2564 = cljs.core.first.call(null,seq2561__$2);
var seq2561__$3 = cljs.core.next.call(null,seq2561__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2562,G__2563,G__2564,seq2561__$3);
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
var len__4497__auto___2572 = arguments.length;
var i__4498__auto___2573 = (0);
while(true){
if((i__4498__auto___2573 < len__4497__auto___2572)){
args__4500__auto__.push((arguments[i__4498__auto___2573]));

var G__2574 = (i__4498__auto___2573 + (1));
i__4498__auto___2573 = G__2574;
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
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq2568){
var G__2569 = cljs.core.first.call(null,seq2568);
var seq2568__$1 = cljs.core.next.call(null,seq2568);
var G__2570 = cljs.core.first.call(null,seq2568__$1);
var seq2568__$2 = cljs.core.next.call(null,seq2568__$1);
var G__2571 = cljs.core.first.call(null,seq2568__$2);
var seq2568__$3 = cljs.core.next.call(null,seq2568__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2569,G__2570,G__2571,seq2568__$3);
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
var G__2579 = arguments.length;
switch (G__2579) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___2585 = arguments.length;
var i__4498__auto___2586 = (0);
while(true){
if((i__4498__auto___2586 < len__4497__auto___2585)){
args_arr__4512__auto__.push((arguments[i__4498__auto___2586]));

var G__2587 = (i__4498__auto___2586 + (1));
i__4498__auto___2586 = G__2587;
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
var seq__2580_2588 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__2581_2589 = null;
var count__2582_2590 = (0);
var i__2583_2591 = (0);
while(true){
if((i__2583_2591 < count__2582_2590)){
var k_2592 = cljs.core._nth.call(null,chunk__2581_2589,i__2583_2591);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_2592,applied_science.js_interop.unchecked_get.call(null,x,k_2592));


var G__2593 = seq__2580_2588;
var G__2594 = chunk__2581_2589;
var G__2595 = count__2582_2590;
var G__2596 = (i__2583_2591 + (1));
seq__2580_2588 = G__2593;
chunk__2581_2589 = G__2594;
count__2582_2590 = G__2595;
i__2583_2591 = G__2596;
continue;
} else {
var temp__5735__auto___2597 = cljs.core.seq.call(null,seq__2580_2588);
if(temp__5735__auto___2597){
var seq__2580_2598__$1 = temp__5735__auto___2597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2580_2598__$1)){
var c__4317__auto___2599 = cljs.core.chunk_first.call(null,seq__2580_2598__$1);
var G__2600 = cljs.core.chunk_rest.call(null,seq__2580_2598__$1);
var G__2601 = c__4317__auto___2599;
var G__2602 = cljs.core.count.call(null,c__4317__auto___2599);
var G__2603 = (0);
seq__2580_2588 = G__2600;
chunk__2581_2589 = G__2601;
count__2582_2590 = G__2602;
i__2583_2591 = G__2603;
continue;
} else {
var k_2604 = cljs.core.first.call(null,seq__2580_2598__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_2604,applied_science.js_interop.unchecked_get.call(null,x,k_2604));


var G__2605 = cljs.core.next.call(null,seq__2580_2598__$1);
var G__2606 = null;
var G__2607 = (0);
var G__2608 = (0);
seq__2580_2588 = G__2605;
chunk__2581_2589 = G__2606;
count__2582_2590 = G__2607;
i__2583_2591 = G__2608;
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
applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq2576){
var G__2577 = cljs.core.first.call(null,seq2576);
var seq2576__$1 = cljs.core.next.call(null,seq2576);
var G__2578 = cljs.core.first.call(null,seq2576__$1);
var seq2576__$2 = cljs.core.next.call(null,seq2576__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2577,G__2578,seq2576__$2);
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
var G__2609 = array;
G__2609.push(x);

return G__2609;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__2610 = array;
G__2610.unshift(x);

return G__2610;
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
var len__4497__auto___2617 = arguments.length;
var i__4498__auto___2618 = (0);
while(true){
if((i__4498__auto___2618 < len__4497__auto___2617)){
args__4500__auto__.push((arguments[i__4498__auto___2618]));

var G__2619 = (i__4498__auto___2618 + (1));
i__4498__auto___2618 = G__2619;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj2614 = obj;
var k2615 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj2616 = obj2614;
return ((!((obj2616 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2615,obj2616)));
})()){
return (obj2614[k2615]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq2611){
var G__2612 = cljs.core.first.call(null,seq2611);
var seq2611__$1 = cljs.core.next.call(null,seq2611);
var G__2613 = cljs.core.first.call(null,seq2611__$1);
var seq2611__$2 = cljs.core.next.call(null,seq2611__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2612,G__2613,seq2611__$2);
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
return (function (){var obj2620 = obj;
var k2621 = applied_science.js_interop.impl.wrap_key.call(null,k);
if((function (){var obj2622 = obj2620;
return ((!((obj2622 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2621,obj2622)));
})()){
return (obj2620[k2621]);
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
var len__4497__auto___2626 = arguments.length;
var i__4498__auto___2627 = (0);
while(true){
if((i__4498__auto___2627 < len__4497__auto___2626)){
args__4500__auto__.push((arguments[i__4498__auto___2627]));

var G__2628 = (i__4498__auto___2627 + (1));
i__4498__auto___2627 = G__2628;
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
applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq2623){
var G__2624 = cljs.core.first.call(null,seq2623);
var seq2623__$1 = cljs.core.next.call(null,seq2623);
var G__2625 = cljs.core.first.call(null,seq2623__$1);
var seq2623__$2 = cljs.core.next.call(null,seq2623__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2624,G__2625,seq2623__$2);
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
var len__4497__auto___2650 = arguments.length;
var i__4498__auto___2651 = (0);
while(true){
if((i__4498__auto___2651 < len__4497__auto___2650)){
args__4500__auto__.push((arguments[i__4498__auto___2651]));

var G__2652 = (i__4498__auto___2651 + (1));
i__4498__auto___2651 = G__2652;
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
var seq__2632_2653 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__2633_2654 = null;
var count__2634_2655 = (0);
var i__2635_2656 = (0);
while(true){
if((i__2635_2656 < count__2634_2655)){
var vec__2636_2657 = cljs.core._nth.call(null,chunk__2633_2654,i__2635_2656);
var k_2658 = cljs.core.nth.call(null,vec__2636_2657,(0),null);
var v_2659 = cljs.core.nth.call(null,vec__2636_2657,(1),null);
var obj2639_2660 = obj;
var obj2640_2661 = ((!((obj2639_2660 == null)))?obj2639_2660:{});
(obj2640_2661[applied_science.js_interop.impl.wrap_key.call(null,k_2658)] = v_2659);



var G__2662 = seq__2632_2653;
var G__2663 = chunk__2633_2654;
var G__2664 = count__2634_2655;
var G__2665 = (i__2635_2656 + (1));
seq__2632_2653 = G__2662;
chunk__2633_2654 = G__2663;
count__2634_2655 = G__2664;
i__2635_2656 = G__2665;
continue;
} else {
var temp__5735__auto___2666 = cljs.core.seq.call(null,seq__2632_2653);
if(temp__5735__auto___2666){
var seq__2632_2667__$1 = temp__5735__auto___2666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2632_2667__$1)){
var c__4317__auto___2668 = cljs.core.chunk_first.call(null,seq__2632_2667__$1);
var G__2669 = cljs.core.chunk_rest.call(null,seq__2632_2667__$1);
var G__2670 = c__4317__auto___2668;
var G__2671 = cljs.core.count.call(null,c__4317__auto___2668);
var G__2672 = (0);
seq__2632_2653 = G__2669;
chunk__2633_2654 = G__2670;
count__2634_2655 = G__2671;
i__2635_2656 = G__2672;
continue;
} else {
var vec__2643_2673 = cljs.core.first.call(null,seq__2632_2667__$1);
var k_2674 = cljs.core.nth.call(null,vec__2643_2673,(0),null);
var v_2675 = cljs.core.nth.call(null,vec__2643_2673,(1),null);
var obj2646_2676 = obj;
var obj2647_2677 = ((!((obj2646_2676 == null)))?obj2646_2676:{});
(obj2647_2677[applied_science.js_interop.impl.wrap_key.call(null,k_2674)] = v_2675);



var G__2678 = cljs.core.next.call(null,seq__2632_2667__$1);
var G__2679 = null;
var G__2680 = (0);
var G__2681 = (0);
seq__2632_2653 = G__2678;
chunk__2633_2654 = G__2679;
count__2634_2655 = G__2680;
i__2635_2656 = G__2681;
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
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq2629){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2629));
});


//# sourceMappingURL=js_interop.js.map
