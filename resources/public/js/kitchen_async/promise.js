// Compiled by ClojureScript 1.10.191 {}
goog.provide('kitchen_async.promise');
goog.require('cljs.core');
goog.require('goog.Promise');
goog.require('kitchen_async.protocols.promisable');
kitchen_async.promise._PERCENT_promise_impl = (function (){var init = ((typeof Promise !== 'undefined')?Promise:goog.Promise);
return cljs.core.atom.call(null,init);
})();
kitchen_async.promise.promise_impl = (function kitchen_async$promise$promise_impl(){
return cljs.core.deref.call(null,kitchen_async.promise._PERCENT_promise_impl);
});
kitchen_async.promise.set_promise_impl_BANG_ = (function kitchen_async$promise$set_promise_impl_BANG_(impl){
return cljs.core.reset_BANG_.call(null,kitchen_async.promise._PERCENT_promise_impl,impl);
});
kitchen_async.promise.resolve = (function kitchen_async$promise$resolve(x){
var p = kitchen_async.promise.promise_impl.call(null);
return (new p(((function (p){
return (function (resolve){
return resolve.call(null,x);
});})(p))
));
});
kitchen_async.promise.reject = (function kitchen_async$promise$reject(x){
var p = kitchen_async.promise.promise_impl.call(null);
return (new p(((function (p){
return (function (_,reject){
return reject.call(null,x);
});})(p))
));
});
kitchen_async.promise.then = (function kitchen_async$promise$then(var_args){
var G__1920 = arguments.length;
switch (G__1920) {
case 2:
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return kitchen_async.promise.__GT_promise.call(null,p).then((function (x){
return f.call(null,x);
}));
});

kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,g){
return kitchen_async.promise.__GT_promise.call(null,p).then((function (x){
return f.call(null,x);
}),(function (x){
return g.call(null,x);
}));
});

kitchen_async.promise.then.cljs$lang$maxFixedArity = 3;

kitchen_async.promise.catch_STAR_ = (function kitchen_async$promise$catch_STAR_(p,f){
return kitchen_async.promise.then.call(null,p,cljs.core.identity,f);
});
kitchen_async.promise.finally_STAR_ = (function kitchen_async$promise$finally_STAR_(p,f){
return kitchen_async.promise.then.call(null,p,f,f);
});
kitchen_async.promise.all = (function kitchen_async$promise$all(ps){
return goog.Promise.all(cljs.core.into_array.call(null,cljs.core.map.call(null,kitchen_async.promise.__GT_promise,ps)));
});
kitchen_async.promise.race = (function kitchen_async$promise$race(ps){
return goog.Promise.race(cljs.core.into_array.call(null,cljs.core.map.call(null,kitchen_async.promise.__GT_promise,ps)));
});
kitchen_async.promise.timeout = (function kitchen_async$promise$timeout(var_args){
var G__1923 = arguments.length;
switch (G__1923) {
case 1:
return kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$1 = (function (ms){
return kitchen_async.promise.timeout.call(null,ms,null);
});

kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$2 = (function (ms,v){
var p__1744__auto__ = kitchen_async.promise.promise_impl.call(null);
return (new p__1744__auto__(((function (p__1744__auto__){
return (function (resolve){
return setTimeout(((function (p__1744__auto__){
return (function (){
return resolve.call(null,v);
});})(p__1744__auto__))
,ms);
});})(p__1744__auto__))
));
});

kitchen_async.promise.timeout.cljs$lang$maxFixedArity = 2;

goog.Promise.prototype.kitchen_async$protocols$promisable$Promisable$ = cljs.core.PROTOCOL_SENTINEL;

goog.Promise.prototype.kitchen_async$protocols$promisable$Promisable$__GT_promise_STAR_$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

goog.object.set(kitchen_async.protocols.promisable.Promisable,"_",true);

goog.object.set(kitchen_async.protocols.promisable.__GT_promise_STAR_,"_",(function (x){
return kitchen_async.promise.resolve.call(null,x);
}));
if(typeof Promise !== 'undefined'){
Promise.prototype.kitchen_async$protocols$promisable$Promisable$ = cljs.core.PROTOCOL_SENTINEL;

Promise.prototype.kitchen_async$protocols$promisable$Promisable$__GT_promise_STAR_$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});
} else {
}
kitchen_async.promise.__GT_promise = (function kitchen_async$promise$__GT_promise(x){
return kitchen_async.protocols.promisable.__GT_promise_STAR_.call(null,x);
});
/**
 * Given a fn that takes a callback fn as its last arg, and returns
 *   a modified version of that fn that returns a promise instead of
 *   calling the callback
 */
kitchen_async.promise.promisify = (function kitchen_async$promise$promisify(f){
return (function() { 
var G__1925__delegate = function (args){
var p__1744__auto__ = kitchen_async.promise.promise_impl.call(null);
return (new p__1744__auto__(((function (p__1744__auto__){
return (function (resolve,reject){
var callback = ((function (p__1744__auto__){
return (function kitchen_async$promise$promisify_$_callback(err,val){
if(cljs.core.truth_(err)){
return reject.call(null,err);
} else {
return resolve.call(null,val);
}
});})(p__1744__auto__))
;
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback], null)));
});})(p__1744__auto__))
));
};
var G__1925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1926__i = 0, G__1926__a = new Array(arguments.length -  0);
while (G__1926__i < G__1926__a.length) {G__1926__a[G__1926__i] = arguments[G__1926__i + 0]; ++G__1926__i;}
  args = new cljs.core.IndexedSeq(G__1926__a,0,null);
} 
return G__1925__delegate.call(this,args);};
G__1925.cljs$lang$maxFixedArity = 0;
G__1925.cljs$lang$applyTo = (function (arglist__1927){
var args = cljs.core.seq(arglist__1927);
return G__1925__delegate(args);
});
G__1925.cljs$core$IFn$_invoke$arity$variadic = G__1925__delegate;
return G__1925;
})()
;
});

//# sourceMappingURL=promise.js.map
