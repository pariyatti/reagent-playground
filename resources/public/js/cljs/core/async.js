// Compiled by ClojureScript 1.10.191 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__5282 = arguments.length;
switch (G__5282) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async5283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5283 = (function (f,blockable,meta5284){
this.f = f;
this.blockable = blockable;
this.meta5284 = meta5284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5285,meta5284__$1){
var self__ = this;
var _5285__$1 = this;
return (new cljs.core.async.t_cljs$core$async5283(self__.f,self__.blockable,meta5284__$1));
});

cljs.core.async.t_cljs$core$async5283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5285){
var self__ = this;
var _5285__$1 = this;
return self__.meta5284;
});

cljs.core.async.t_cljs$core$async5283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async5283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async5283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async5283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta5284","meta5284",-1449149729,null)], null);
});

cljs.core.async.t_cljs$core$async5283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5283";

cljs.core.async.t_cljs$core$async5283.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5283");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5283.
 */
cljs.core.async.__GT_t_cljs$core$async5283 = (function cljs$core$async$__GT_t_cljs$core$async5283(f__$1,blockable__$1,meta5284){
return (new cljs.core.async.t_cljs$core$async5283(f__$1,blockable__$1,meta5284));
});

}

return (new cljs.core.async.t_cljs$core$async5283(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__5289 = arguments.length;
switch (G__5289) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__5292 = arguments.length;
switch (G__5292) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__5295 = arguments.length;
switch (G__5295) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_5297 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_5297);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_5297,ret){
return (function (){
return fn1.call(null,val_5297);
});})(val_5297,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__5299 = arguments.length;
switch (G__5299) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4374__auto___5301 = n;
var x_5302 = (0);
while(true){
if((x_5302 < n__4374__auto___5301)){
(a[x_5302] = x_5302);

var G__5303 = (x_5302 + (1));
x_5302 = G__5303;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async5304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5304 = (function (flag,meta5305){
this.flag = flag;
this.meta5305 = meta5305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_5306,meta5305__$1){
var self__ = this;
var _5306__$1 = this;
return (new cljs.core.async.t_cljs$core$async5304(self__.flag,meta5305__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async5304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_5306){
var self__ = this;
var _5306__$1 = this;
return self__.meta5305;
});})(flag))
;

cljs.core.async.t_cljs$core$async5304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async5304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async5304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async5304.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta5305","meta5305",-324331336,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async5304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5304";

cljs.core.async.t_cljs$core$async5304.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5304");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5304.
 */
cljs.core.async.__GT_t_cljs$core$async5304 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async5304(flag__$1,meta5305){
return (new cljs.core.async.t_cljs$core$async5304(flag__$1,meta5305));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async5304(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async5307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5307 = (function (flag,cb,meta5308){
this.flag = flag;
this.cb = cb;
this.meta5308 = meta5308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5309,meta5308__$1){
var self__ = this;
var _5309__$1 = this;
return (new cljs.core.async.t_cljs$core$async5307(self__.flag,self__.cb,meta5308__$1));
});

cljs.core.async.t_cljs$core$async5307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5309){
var self__ = this;
var _5309__$1 = this;
return self__.meta5308;
});

cljs.core.async.t_cljs$core$async5307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async5307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async5307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async5307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta5308","meta5308",-1071046031,null)], null);
});

cljs.core.async.t_cljs$core$async5307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5307";

cljs.core.async.t_cljs$core$async5307.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5307");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5307.
 */
cljs.core.async.__GT_t_cljs$core$async5307 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async5307(flag__$1,cb__$1,meta5308){
return (new cljs.core.async.t_cljs$core$async5307(flag__$1,cb__$1,meta5308));
});

}

return (new cljs.core.async.t_cljs$core$async5307(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5310_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5310_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5311_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5311_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3920__auto__ = wport;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return port;
}
})()], null));
} else {
var G__5312 = (i + (1));
i = G__5312;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3920__auto__ = ret;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__3909__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3909__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___5318 = arguments.length;
var i__4498__auto___5319 = (0);
while(true){
if((i__4498__auto___5319 < len__4497__auto___5318)){
args__4500__auto__.push((arguments[i__4498__auto___5319]));

var G__5320 = (i__4498__auto___5319 + (1));
i__4498__auto___5319 = G__5320;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__5315){
var map__5316 = p__5315;
var map__5316__$1 = ((((!((map__5316 == null)))?(((((map__5316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5316):map__5316);
var opts = map__5316__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq5313){
var G__5314 = cljs.core.first.call(null,seq5313);
var seq5313__$1 = cljs.core.next.call(null,seq5313);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5314,seq5313__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__5322 = arguments.length;
switch (G__5322) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3305__auto___5369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___5369){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___5369){
return (function (state_5346){
var state_val_5347 = (state_5346[(1)]);
if((state_val_5347 === (7))){
var inst_5342 = (state_5346[(2)]);
var state_5346__$1 = state_5346;
var statearr_5348_5370 = state_5346__$1;
(statearr_5348_5370[(2)] = inst_5342);

(statearr_5348_5370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (1))){
var state_5346__$1 = state_5346;
var statearr_5349_5371 = state_5346__$1;
(statearr_5349_5371[(2)] = null);

(statearr_5349_5371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (4))){
var inst_5325 = (state_5346[(7)]);
var inst_5325__$1 = (state_5346[(2)]);
var inst_5326 = (inst_5325__$1 == null);
var state_5346__$1 = (function (){var statearr_5350 = state_5346;
(statearr_5350[(7)] = inst_5325__$1);

return statearr_5350;
})();
if(cljs.core.truth_(inst_5326)){
var statearr_5351_5372 = state_5346__$1;
(statearr_5351_5372[(1)] = (5));

} else {
var statearr_5352_5373 = state_5346__$1;
(statearr_5352_5373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (13))){
var state_5346__$1 = state_5346;
var statearr_5353_5374 = state_5346__$1;
(statearr_5353_5374[(2)] = null);

(statearr_5353_5374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (6))){
var inst_5325 = (state_5346[(7)]);
var state_5346__$1 = state_5346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5346__$1,(11),to,inst_5325);
} else {
if((state_val_5347 === (3))){
var inst_5344 = (state_5346[(2)]);
var state_5346__$1 = state_5346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5346__$1,inst_5344);
} else {
if((state_val_5347 === (12))){
var state_5346__$1 = state_5346;
var statearr_5354_5375 = state_5346__$1;
(statearr_5354_5375[(2)] = null);

(statearr_5354_5375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (2))){
var state_5346__$1 = state_5346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5346__$1,(4),from);
} else {
if((state_val_5347 === (11))){
var inst_5335 = (state_5346[(2)]);
var state_5346__$1 = state_5346;
if(cljs.core.truth_(inst_5335)){
var statearr_5355_5376 = state_5346__$1;
(statearr_5355_5376[(1)] = (12));

} else {
var statearr_5356_5377 = state_5346__$1;
(statearr_5356_5377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (9))){
var state_5346__$1 = state_5346;
var statearr_5357_5378 = state_5346__$1;
(statearr_5357_5378[(2)] = null);

(statearr_5357_5378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (5))){
var state_5346__$1 = state_5346;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5358_5379 = state_5346__$1;
(statearr_5358_5379[(1)] = (8));

} else {
var statearr_5359_5380 = state_5346__$1;
(statearr_5359_5380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (14))){
var inst_5340 = (state_5346[(2)]);
var state_5346__$1 = state_5346;
var statearr_5360_5381 = state_5346__$1;
(statearr_5360_5381[(2)] = inst_5340);

(statearr_5360_5381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (10))){
var inst_5332 = (state_5346[(2)]);
var state_5346__$1 = state_5346;
var statearr_5361_5382 = state_5346__$1;
(statearr_5361_5382[(2)] = inst_5332);

(statearr_5361_5382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5347 === (8))){
var inst_5329 = cljs.core.async.close_BANG_.call(null,to);
var state_5346__$1 = state_5346;
var statearr_5362_5383 = state_5346__$1;
(statearr_5362_5383[(2)] = inst_5329);

(statearr_5362_5383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___5369))
;
return ((function (switch__3180__auto__,c__3305__auto___5369){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_5363 = [null,null,null,null,null,null,null,null];
(statearr_5363[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_5363[(1)] = (1));

return statearr_5363;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_5346){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5364){var ex__3184__auto__ = e5364;
var statearr_5365_5384 = state_5346;
(statearr_5365_5384[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5346[(4)]))){
var statearr_5366_5385 = state_5346;
(statearr_5366_5385[(1)] = cljs.core.first.call(null,(state_5346[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5386 = state_5346;
state_5346 = G__5386;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_5346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_5346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___5369))
})();
var state__3307__auto__ = (function (){var statearr_5367 = f__3306__auto__.call(null);
(statearr_5367[(6)] = c__3305__auto___5369);

return statearr_5367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___5369))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__5387){
var vec__5388 = p__5387;
var v = cljs.core.nth.call(null,vec__5388,(0),null);
var p = cljs.core.nth.call(null,vec__5388,(1),null);
var job = vec__5388;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3305__auto___5564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___5564,res,vec__5388,v,p,job,jobs,results){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___5564,res,vec__5388,v,p,job,jobs,results){
return (function (state_5395){
var state_val_5396 = (state_5395[(1)]);
if((state_val_5396 === (1))){
var state_5395__$1 = state_5395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5395__$1,(2),res,v);
} else {
if((state_val_5396 === (2))){
var inst_5392 = (state_5395[(2)]);
var inst_5393 = cljs.core.async.close_BANG_.call(null,res);
var state_5395__$1 = (function (){var statearr_5397 = state_5395;
(statearr_5397[(7)] = inst_5392);

return statearr_5397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5395__$1,inst_5393);
} else {
return null;
}
}
});})(c__3305__auto___5564,res,vec__5388,v,p,job,jobs,results))
;
return ((function (switch__3180__auto__,c__3305__auto___5564,res,vec__5388,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0 = (function (){
var statearr_5398 = [null,null,null,null,null,null,null,null];
(statearr_5398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__);

(statearr_5398[(1)] = (1));

return statearr_5398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1 = (function (state_5395){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5399){var ex__3184__auto__ = e5399;
var statearr_5400_5565 = state_5395;
(statearr_5400_5565[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5395[(4)]))){
var statearr_5401_5566 = state_5395;
(statearr_5401_5566[(1)] = cljs.core.first.call(null,(state_5395[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5567 = state_5395;
state_5395 = G__5567;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = function(state_5395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1.call(this,state_5395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___5564,res,vec__5388,v,p,job,jobs,results))
})();
var state__3307__auto__ = (function (){var statearr_5402 = f__3306__auto__.call(null);
(statearr_5402[(6)] = c__3305__auto___5564);

return statearr_5402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___5564,res,vec__5388,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__5403){
var vec__5404 = p__5403;
var v = cljs.core.nth.call(null,vec__5404,(0),null);
var p = cljs.core.nth.call(null,vec__5404,(1),null);
var job = vec__5404;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4374__auto___5568 = n;
var __5569 = (0);
while(true){
if((__5569 < n__4374__auto___5568)){
var G__5407_5570 = type;
var G__5407_5571__$1 = (((G__5407_5570 instanceof cljs.core.Keyword))?G__5407_5570.fqn:null);
switch (G__5407_5571__$1) {
case "compute":
var c__3305__auto___5573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5569,c__3305__auto___5573,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (__5569,c__3305__auto___5573,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async){
return (function (state_5420){
var state_val_5421 = (state_5420[(1)]);
if((state_val_5421 === (1))){
var state_5420__$1 = state_5420;
var statearr_5422_5574 = state_5420__$1;
(statearr_5422_5574[(2)] = null);

(statearr_5422_5574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5421 === (2))){
var state_5420__$1 = state_5420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5420__$1,(4),jobs);
} else {
if((state_val_5421 === (3))){
var inst_5418 = (state_5420[(2)]);
var state_5420__$1 = state_5420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5420__$1,inst_5418);
} else {
if((state_val_5421 === (4))){
var inst_5410 = (state_5420[(2)]);
var inst_5411 = process.call(null,inst_5410);
var state_5420__$1 = state_5420;
if(cljs.core.truth_(inst_5411)){
var statearr_5423_5575 = state_5420__$1;
(statearr_5423_5575[(1)] = (5));

} else {
var statearr_5424_5576 = state_5420__$1;
(statearr_5424_5576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5421 === (5))){
var state_5420__$1 = state_5420;
var statearr_5425_5577 = state_5420__$1;
(statearr_5425_5577[(2)] = null);

(statearr_5425_5577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5421 === (6))){
var state_5420__$1 = state_5420;
var statearr_5426_5578 = state_5420__$1;
(statearr_5426_5578[(2)] = null);

(statearr_5426_5578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5421 === (7))){
var inst_5416 = (state_5420[(2)]);
var state_5420__$1 = state_5420;
var statearr_5427_5579 = state_5420__$1;
(statearr_5427_5579[(2)] = inst_5416);

(statearr_5427_5579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__5569,c__3305__auto___5573,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async))
;
return ((function (__5569,switch__3180__auto__,c__3305__auto___5573,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0 = (function (){
var statearr_5428 = [null,null,null,null,null,null,null];
(statearr_5428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__);

(statearr_5428[(1)] = (1));

return statearr_5428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1 = (function (state_5420){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5429){var ex__3184__auto__ = e5429;
var statearr_5430_5580 = state_5420;
(statearr_5430_5580[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5420[(4)]))){
var statearr_5431_5581 = state_5420;
(statearr_5431_5581[(1)] = cljs.core.first.call(null,(state_5420[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5582 = state_5420;
state_5420 = G__5582;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = function(state_5420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1.call(this,state_5420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__;
})()
;})(__5569,switch__3180__auto__,c__3305__auto___5573,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async))
})();
var state__3307__auto__ = (function (){var statearr_5432 = f__3306__auto__.call(null);
(statearr_5432[(6)] = c__3305__auto___5573);

return statearr_5432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(__5569,c__3305__auto___5573,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async))
);


break;
case "async":
var c__3305__auto___5583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5569,c__3305__auto___5583,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (__5569,c__3305__auto___5583,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async){
return (function (state_5445){
var state_val_5446 = (state_5445[(1)]);
if((state_val_5446 === (1))){
var state_5445__$1 = state_5445;
var statearr_5447_5584 = state_5445__$1;
(statearr_5447_5584[(2)] = null);

(statearr_5447_5584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5446 === (2))){
var state_5445__$1 = state_5445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5445__$1,(4),jobs);
} else {
if((state_val_5446 === (3))){
var inst_5443 = (state_5445[(2)]);
var state_5445__$1 = state_5445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5445__$1,inst_5443);
} else {
if((state_val_5446 === (4))){
var inst_5435 = (state_5445[(2)]);
var inst_5436 = async.call(null,inst_5435);
var state_5445__$1 = state_5445;
if(cljs.core.truth_(inst_5436)){
var statearr_5448_5585 = state_5445__$1;
(statearr_5448_5585[(1)] = (5));

} else {
var statearr_5449_5586 = state_5445__$1;
(statearr_5449_5586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5446 === (5))){
var state_5445__$1 = state_5445;
var statearr_5450_5587 = state_5445__$1;
(statearr_5450_5587[(2)] = null);

(statearr_5450_5587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5446 === (6))){
var state_5445__$1 = state_5445;
var statearr_5451_5588 = state_5445__$1;
(statearr_5451_5588[(2)] = null);

(statearr_5451_5588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5446 === (7))){
var inst_5441 = (state_5445[(2)]);
var state_5445__$1 = state_5445;
var statearr_5452_5589 = state_5445__$1;
(statearr_5452_5589[(2)] = inst_5441);

(statearr_5452_5589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__5569,c__3305__auto___5583,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async))
;
return ((function (__5569,switch__3180__auto__,c__3305__auto___5583,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0 = (function (){
var statearr_5453 = [null,null,null,null,null,null,null];
(statearr_5453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__);

(statearr_5453[(1)] = (1));

return statearr_5453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1 = (function (state_5445){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5454){var ex__3184__auto__ = e5454;
var statearr_5455_5590 = state_5445;
(statearr_5455_5590[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5445[(4)]))){
var statearr_5456_5591 = state_5445;
(statearr_5456_5591[(1)] = cljs.core.first.call(null,(state_5445[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5592 = state_5445;
state_5445 = G__5592;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = function(state_5445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1.call(this,state_5445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__;
})()
;})(__5569,switch__3180__auto__,c__3305__auto___5583,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async))
})();
var state__3307__auto__ = (function (){var statearr_5457 = f__3306__auto__.call(null);
(statearr_5457[(6)] = c__3305__auto___5583);

return statearr_5457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(__5569,c__3305__auto___5583,G__5407_5570,G__5407_5571__$1,n__4374__auto___5568,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5407_5571__$1)].join('')));

}

var G__5593 = (__5569 + (1));
__5569 = G__5593;
continue;
} else {
}
break;
}

var c__3305__auto___5594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___5594,jobs,results,process,async){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___5594,jobs,results,process,async){
return (function (state_5479){
var state_val_5480 = (state_5479[(1)]);
if((state_val_5480 === (7))){
var inst_5475 = (state_5479[(2)]);
var state_5479__$1 = state_5479;
var statearr_5481_5595 = state_5479__$1;
(statearr_5481_5595[(2)] = inst_5475);

(statearr_5481_5595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5480 === (1))){
var state_5479__$1 = state_5479;
var statearr_5482_5596 = state_5479__$1;
(statearr_5482_5596[(2)] = null);

(statearr_5482_5596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5480 === (4))){
var inst_5460 = (state_5479[(7)]);
var inst_5460__$1 = (state_5479[(2)]);
var inst_5461 = (inst_5460__$1 == null);
var state_5479__$1 = (function (){var statearr_5483 = state_5479;
(statearr_5483[(7)] = inst_5460__$1);

return statearr_5483;
})();
if(cljs.core.truth_(inst_5461)){
var statearr_5484_5597 = state_5479__$1;
(statearr_5484_5597[(1)] = (5));

} else {
var statearr_5485_5598 = state_5479__$1;
(statearr_5485_5598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5480 === (6))){
var inst_5460 = (state_5479[(7)]);
var inst_5465 = (state_5479[(8)]);
var inst_5465__$1 = cljs.core.async.chan.call(null,(1));
var inst_5466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5467 = [inst_5460,inst_5465__$1];
var inst_5468 = (new cljs.core.PersistentVector(null,2,(5),inst_5466,inst_5467,null));
var state_5479__$1 = (function (){var statearr_5486 = state_5479;
(statearr_5486[(8)] = inst_5465__$1);

return statearr_5486;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5479__$1,(8),jobs,inst_5468);
} else {
if((state_val_5480 === (3))){
var inst_5477 = (state_5479[(2)]);
var state_5479__$1 = state_5479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5479__$1,inst_5477);
} else {
if((state_val_5480 === (2))){
var state_5479__$1 = state_5479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5479__$1,(4),from);
} else {
if((state_val_5480 === (9))){
var inst_5472 = (state_5479[(2)]);
var state_5479__$1 = (function (){var statearr_5487 = state_5479;
(statearr_5487[(9)] = inst_5472);

return statearr_5487;
})();
var statearr_5488_5599 = state_5479__$1;
(statearr_5488_5599[(2)] = null);

(statearr_5488_5599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5480 === (5))){
var inst_5463 = cljs.core.async.close_BANG_.call(null,jobs);
var state_5479__$1 = state_5479;
var statearr_5489_5600 = state_5479__$1;
(statearr_5489_5600[(2)] = inst_5463);

(statearr_5489_5600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5480 === (8))){
var inst_5465 = (state_5479[(8)]);
var inst_5470 = (state_5479[(2)]);
var state_5479__$1 = (function (){var statearr_5490 = state_5479;
(statearr_5490[(10)] = inst_5470);

return statearr_5490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5479__$1,(9),results,inst_5465);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___5594,jobs,results,process,async))
;
return ((function (switch__3180__auto__,c__3305__auto___5594,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0 = (function (){
var statearr_5491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__);

(statearr_5491[(1)] = (1));

return statearr_5491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1 = (function (state_5479){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5492){var ex__3184__auto__ = e5492;
var statearr_5493_5601 = state_5479;
(statearr_5493_5601[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5479[(4)]))){
var statearr_5494_5602 = state_5479;
(statearr_5494_5602[(1)] = cljs.core.first.call(null,(state_5479[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5603 = state_5479;
state_5479 = G__5603;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = function(state_5479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1.call(this,state_5479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___5594,jobs,results,process,async))
})();
var state__3307__auto__ = (function (){var statearr_5495 = f__3306__auto__.call(null);
(statearr_5495[(6)] = c__3305__auto___5594);

return statearr_5495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___5594,jobs,results,process,async))
);


var c__3305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto__,jobs,results,process,async){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto__,jobs,results,process,async){
return (function (state_5533){
var state_val_5534 = (state_5533[(1)]);
if((state_val_5534 === (7))){
var inst_5529 = (state_5533[(2)]);
var state_5533__$1 = state_5533;
var statearr_5535_5604 = state_5533__$1;
(statearr_5535_5604[(2)] = inst_5529);

(statearr_5535_5604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (20))){
var state_5533__$1 = state_5533;
var statearr_5536_5605 = state_5533__$1;
(statearr_5536_5605[(2)] = null);

(statearr_5536_5605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (1))){
var state_5533__$1 = state_5533;
var statearr_5537_5606 = state_5533__$1;
(statearr_5537_5606[(2)] = null);

(statearr_5537_5606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (4))){
var inst_5498 = (state_5533[(7)]);
var inst_5498__$1 = (state_5533[(2)]);
var inst_5499 = (inst_5498__$1 == null);
var state_5533__$1 = (function (){var statearr_5538 = state_5533;
(statearr_5538[(7)] = inst_5498__$1);

return statearr_5538;
})();
if(cljs.core.truth_(inst_5499)){
var statearr_5539_5607 = state_5533__$1;
(statearr_5539_5607[(1)] = (5));

} else {
var statearr_5540_5608 = state_5533__$1;
(statearr_5540_5608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (15))){
var inst_5511 = (state_5533[(8)]);
var state_5533__$1 = state_5533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5533__$1,(18),to,inst_5511);
} else {
if((state_val_5534 === (21))){
var inst_5524 = (state_5533[(2)]);
var state_5533__$1 = state_5533;
var statearr_5541_5609 = state_5533__$1;
(statearr_5541_5609[(2)] = inst_5524);

(statearr_5541_5609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (13))){
var inst_5526 = (state_5533[(2)]);
var state_5533__$1 = (function (){var statearr_5542 = state_5533;
(statearr_5542[(9)] = inst_5526);

return statearr_5542;
})();
var statearr_5543_5610 = state_5533__$1;
(statearr_5543_5610[(2)] = null);

(statearr_5543_5610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (6))){
var inst_5498 = (state_5533[(7)]);
var state_5533__$1 = state_5533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5533__$1,(11),inst_5498);
} else {
if((state_val_5534 === (17))){
var inst_5519 = (state_5533[(2)]);
var state_5533__$1 = state_5533;
if(cljs.core.truth_(inst_5519)){
var statearr_5544_5611 = state_5533__$1;
(statearr_5544_5611[(1)] = (19));

} else {
var statearr_5545_5612 = state_5533__$1;
(statearr_5545_5612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (3))){
var inst_5531 = (state_5533[(2)]);
var state_5533__$1 = state_5533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5533__$1,inst_5531);
} else {
if((state_val_5534 === (12))){
var inst_5508 = (state_5533[(10)]);
var state_5533__$1 = state_5533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5533__$1,(14),inst_5508);
} else {
if((state_val_5534 === (2))){
var state_5533__$1 = state_5533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5533__$1,(4),results);
} else {
if((state_val_5534 === (19))){
var state_5533__$1 = state_5533;
var statearr_5546_5613 = state_5533__$1;
(statearr_5546_5613[(2)] = null);

(statearr_5546_5613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (11))){
var inst_5508 = (state_5533[(2)]);
var state_5533__$1 = (function (){var statearr_5547 = state_5533;
(statearr_5547[(10)] = inst_5508);

return statearr_5547;
})();
var statearr_5548_5614 = state_5533__$1;
(statearr_5548_5614[(2)] = null);

(statearr_5548_5614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (9))){
var state_5533__$1 = state_5533;
var statearr_5549_5615 = state_5533__$1;
(statearr_5549_5615[(2)] = null);

(statearr_5549_5615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (5))){
var state_5533__$1 = state_5533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5550_5616 = state_5533__$1;
(statearr_5550_5616[(1)] = (8));

} else {
var statearr_5551_5617 = state_5533__$1;
(statearr_5551_5617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (14))){
var inst_5511 = (state_5533[(8)]);
var inst_5513 = (state_5533[(11)]);
var inst_5511__$1 = (state_5533[(2)]);
var inst_5512 = (inst_5511__$1 == null);
var inst_5513__$1 = cljs.core.not.call(null,inst_5512);
var state_5533__$1 = (function (){var statearr_5552 = state_5533;
(statearr_5552[(8)] = inst_5511__$1);

(statearr_5552[(11)] = inst_5513__$1);

return statearr_5552;
})();
if(inst_5513__$1){
var statearr_5553_5618 = state_5533__$1;
(statearr_5553_5618[(1)] = (15));

} else {
var statearr_5554_5619 = state_5533__$1;
(statearr_5554_5619[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (16))){
var inst_5513 = (state_5533[(11)]);
var state_5533__$1 = state_5533;
var statearr_5555_5620 = state_5533__$1;
(statearr_5555_5620[(2)] = inst_5513);

(statearr_5555_5620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (10))){
var inst_5505 = (state_5533[(2)]);
var state_5533__$1 = state_5533;
var statearr_5556_5621 = state_5533__$1;
(statearr_5556_5621[(2)] = inst_5505);

(statearr_5556_5621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (18))){
var inst_5516 = (state_5533[(2)]);
var state_5533__$1 = state_5533;
var statearr_5557_5622 = state_5533__$1;
(statearr_5557_5622[(2)] = inst_5516);

(statearr_5557_5622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5534 === (8))){
var inst_5502 = cljs.core.async.close_BANG_.call(null,to);
var state_5533__$1 = state_5533;
var statearr_5558_5623 = state_5533__$1;
(statearr_5558_5623[(2)] = inst_5502);

(statearr_5558_5623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto__,jobs,results,process,async))
;
return ((function (switch__3180__auto__,c__3305__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0 = (function (){
var statearr_5559 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__);

(statearr_5559[(1)] = (1));

return statearr_5559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1 = (function (state_5533){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5560){var ex__3184__auto__ = e5560;
var statearr_5561_5624 = state_5533;
(statearr_5561_5624[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5533[(4)]))){
var statearr_5562_5625 = state_5533;
(statearr_5562_5625[(1)] = cljs.core.first.call(null,(state_5533[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5626 = state_5533;
state_5533 = G__5626;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__ = function(state_5533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1.call(this,state_5533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto__,jobs,results,process,async))
})();
var state__3307__auto__ = (function (){var statearr_5563 = f__3306__auto__.call(null);
(statearr_5563[(6)] = c__3305__auto__);

return statearr_5563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto__,jobs,results,process,async))
);

return c__3305__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__5628 = arguments.length;
switch (G__5628) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__5631 = arguments.length;
switch (G__5631) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__5634 = arguments.length;
switch (G__5634) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3305__auto___5684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___5684,tc,fc){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___5684,tc,fc){
return (function (state_5660){
var state_val_5661 = (state_5660[(1)]);
if((state_val_5661 === (7))){
var inst_5656 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
var statearr_5662_5685 = state_5660__$1;
(statearr_5662_5685[(2)] = inst_5656);

(statearr_5662_5685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (1))){
var state_5660__$1 = state_5660;
var statearr_5663_5686 = state_5660__$1;
(statearr_5663_5686[(2)] = null);

(statearr_5663_5686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (4))){
var inst_5637 = (state_5660[(7)]);
var inst_5637__$1 = (state_5660[(2)]);
var inst_5638 = (inst_5637__$1 == null);
var state_5660__$1 = (function (){var statearr_5664 = state_5660;
(statearr_5664[(7)] = inst_5637__$1);

return statearr_5664;
})();
if(cljs.core.truth_(inst_5638)){
var statearr_5665_5687 = state_5660__$1;
(statearr_5665_5687[(1)] = (5));

} else {
var statearr_5666_5688 = state_5660__$1;
(statearr_5666_5688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (13))){
var state_5660__$1 = state_5660;
var statearr_5667_5689 = state_5660__$1;
(statearr_5667_5689[(2)] = null);

(statearr_5667_5689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (6))){
var inst_5637 = (state_5660[(7)]);
var inst_5643 = p.call(null,inst_5637);
var state_5660__$1 = state_5660;
if(cljs.core.truth_(inst_5643)){
var statearr_5668_5690 = state_5660__$1;
(statearr_5668_5690[(1)] = (9));

} else {
var statearr_5669_5691 = state_5660__$1;
(statearr_5669_5691[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (3))){
var inst_5658 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5660__$1,inst_5658);
} else {
if((state_val_5661 === (12))){
var state_5660__$1 = state_5660;
var statearr_5670_5692 = state_5660__$1;
(statearr_5670_5692[(2)] = null);

(statearr_5670_5692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (2))){
var state_5660__$1 = state_5660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5660__$1,(4),ch);
} else {
if((state_val_5661 === (11))){
var inst_5637 = (state_5660[(7)]);
var inst_5647 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5660__$1,(8),inst_5647,inst_5637);
} else {
if((state_val_5661 === (9))){
var state_5660__$1 = state_5660;
var statearr_5671_5693 = state_5660__$1;
(statearr_5671_5693[(2)] = tc);

(statearr_5671_5693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (5))){
var inst_5640 = cljs.core.async.close_BANG_.call(null,tc);
var inst_5641 = cljs.core.async.close_BANG_.call(null,fc);
var state_5660__$1 = (function (){var statearr_5672 = state_5660;
(statearr_5672[(8)] = inst_5640);

return statearr_5672;
})();
var statearr_5673_5694 = state_5660__$1;
(statearr_5673_5694[(2)] = inst_5641);

(statearr_5673_5694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (14))){
var inst_5654 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
var statearr_5674_5695 = state_5660__$1;
(statearr_5674_5695[(2)] = inst_5654);

(statearr_5674_5695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (10))){
var state_5660__$1 = state_5660;
var statearr_5675_5696 = state_5660__$1;
(statearr_5675_5696[(2)] = fc);

(statearr_5675_5696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5661 === (8))){
var inst_5649 = (state_5660[(2)]);
var state_5660__$1 = state_5660;
if(cljs.core.truth_(inst_5649)){
var statearr_5676_5697 = state_5660__$1;
(statearr_5676_5697[(1)] = (12));

} else {
var statearr_5677_5698 = state_5660__$1;
(statearr_5677_5698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___5684,tc,fc))
;
return ((function (switch__3180__auto__,c__3305__auto___5684,tc,fc){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_5678 = [null,null,null,null,null,null,null,null,null];
(statearr_5678[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_5678[(1)] = (1));

return statearr_5678;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_5660){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5679){var ex__3184__auto__ = e5679;
var statearr_5680_5699 = state_5660;
(statearr_5680_5699[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5660[(4)]))){
var statearr_5681_5700 = state_5660;
(statearr_5681_5700[(1)] = cljs.core.first.call(null,(state_5660[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5701 = state_5660;
state_5660 = G__5701;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_5660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_5660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___5684,tc,fc))
})();
var state__3307__auto__ = (function (){var statearr_5682 = f__3306__auto__.call(null);
(statearr_5682[(6)] = c__3305__auto___5684);

return statearr_5682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___5684,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__3305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto__){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto__){
return (function (state_5723){
var state_val_5724 = (state_5723[(1)]);
if((state_val_5724 === (7))){
var inst_5719 = (state_5723[(2)]);
var state_5723__$1 = state_5723;
var statearr_5725_5744 = state_5723__$1;
(statearr_5725_5744[(2)] = inst_5719);

(statearr_5725_5744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (1))){
var inst_5702 = init;
var inst_5703 = inst_5702;
var state_5723__$1 = (function (){var statearr_5726 = state_5723;
(statearr_5726[(7)] = inst_5703);

return statearr_5726;
})();
var statearr_5727_5745 = state_5723__$1;
(statearr_5727_5745[(2)] = null);

(statearr_5727_5745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (4))){
var inst_5706 = (state_5723[(8)]);
var inst_5706__$1 = (state_5723[(2)]);
var inst_5707 = (inst_5706__$1 == null);
var state_5723__$1 = (function (){var statearr_5728 = state_5723;
(statearr_5728[(8)] = inst_5706__$1);

return statearr_5728;
})();
if(cljs.core.truth_(inst_5707)){
var statearr_5729_5746 = state_5723__$1;
(statearr_5729_5746[(1)] = (5));

} else {
var statearr_5730_5747 = state_5723__$1;
(statearr_5730_5747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (6))){
var inst_5706 = (state_5723[(8)]);
var inst_5710 = (state_5723[(9)]);
var inst_5703 = (state_5723[(7)]);
var inst_5710__$1 = f.call(null,inst_5703,inst_5706);
var inst_5711 = cljs.core.reduced_QMARK_.call(null,inst_5710__$1);
var state_5723__$1 = (function (){var statearr_5731 = state_5723;
(statearr_5731[(9)] = inst_5710__$1);

return statearr_5731;
})();
if(inst_5711){
var statearr_5732_5748 = state_5723__$1;
(statearr_5732_5748[(1)] = (8));

} else {
var statearr_5733_5749 = state_5723__$1;
(statearr_5733_5749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (3))){
var inst_5721 = (state_5723[(2)]);
var state_5723__$1 = state_5723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5723__$1,inst_5721);
} else {
if((state_val_5724 === (2))){
var state_5723__$1 = state_5723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5723__$1,(4),ch);
} else {
if((state_val_5724 === (9))){
var inst_5710 = (state_5723[(9)]);
var inst_5703 = inst_5710;
var state_5723__$1 = (function (){var statearr_5734 = state_5723;
(statearr_5734[(7)] = inst_5703);

return statearr_5734;
})();
var statearr_5735_5750 = state_5723__$1;
(statearr_5735_5750[(2)] = null);

(statearr_5735_5750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (5))){
var inst_5703 = (state_5723[(7)]);
var state_5723__$1 = state_5723;
var statearr_5736_5751 = state_5723__$1;
(statearr_5736_5751[(2)] = inst_5703);

(statearr_5736_5751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (10))){
var inst_5717 = (state_5723[(2)]);
var state_5723__$1 = state_5723;
var statearr_5737_5752 = state_5723__$1;
(statearr_5737_5752[(2)] = inst_5717);

(statearr_5737_5752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5724 === (8))){
var inst_5710 = (state_5723[(9)]);
var inst_5713 = cljs.core.deref.call(null,inst_5710);
var state_5723__$1 = state_5723;
var statearr_5738_5753 = state_5723__$1;
(statearr_5738_5753[(2)] = inst_5713);

(statearr_5738_5753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto__))
;
return ((function (switch__3180__auto__,c__3305__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3181__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3181__auto____0 = (function (){
var statearr_5739 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5739[(0)] = cljs$core$async$reduce_$_state_machine__3181__auto__);

(statearr_5739[(1)] = (1));

return statearr_5739;
});
var cljs$core$async$reduce_$_state_machine__3181__auto____1 = (function (state_5723){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5740){var ex__3184__auto__ = e5740;
var statearr_5741_5754 = state_5723;
(statearr_5741_5754[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5723[(4)]))){
var statearr_5742_5755 = state_5723;
(statearr_5742_5755[(1)] = cljs.core.first.call(null,(state_5723[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5756 = state_5723;
state_5723 = G__5756;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3181__auto__ = function(state_5723){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3181__auto____1.call(this,state_5723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3181__auto____0;
cljs$core$async$reduce_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3181__auto____1;
return cljs$core$async$reduce_$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto__))
})();
var state__3307__auto__ = (function (){var statearr_5743 = f__3306__auto__.call(null);
(statearr_5743[(6)] = c__3305__auto__);

return statearr_5743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto__))
);

return c__3305__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto__,f__$1){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto__,f__$1){
return (function (state_5762){
var state_val_5763 = (state_5762[(1)]);
if((state_val_5763 === (1))){
var inst_5757 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_5762__$1 = state_5762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5762__$1,(2),inst_5757);
} else {
if((state_val_5763 === (2))){
var inst_5759 = (state_5762[(2)]);
var inst_5760 = f__$1.call(null,inst_5759);
var state_5762__$1 = state_5762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5762__$1,inst_5760);
} else {
return null;
}
}
});})(c__3305__auto__,f__$1))
;
return ((function (switch__3180__auto__,c__3305__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3181__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3181__auto____0 = (function (){
var statearr_5764 = [null,null,null,null,null,null,null];
(statearr_5764[(0)] = cljs$core$async$transduce_$_state_machine__3181__auto__);

(statearr_5764[(1)] = (1));

return statearr_5764;
});
var cljs$core$async$transduce_$_state_machine__3181__auto____1 = (function (state_5762){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5765){var ex__3184__auto__ = e5765;
var statearr_5766_5769 = state_5762;
(statearr_5766_5769[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5762[(4)]))){
var statearr_5767_5770 = state_5762;
(statearr_5767_5770[(1)] = cljs.core.first.call(null,(state_5762[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5771 = state_5762;
state_5762 = G__5771;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3181__auto__ = function(state_5762){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3181__auto____1.call(this,state_5762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3181__auto____0;
cljs$core$async$transduce_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3181__auto____1;
return cljs$core$async$transduce_$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto__,f__$1))
})();
var state__3307__auto__ = (function (){var statearr_5768 = f__3306__auto__.call(null);
(statearr_5768[(6)] = c__3305__auto__);

return statearr_5768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto__,f__$1))
);

return c__3305__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__5773 = arguments.length;
switch (G__5773) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto__){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto__){
return (function (state_5798){
var state_val_5799 = (state_5798[(1)]);
if((state_val_5799 === (7))){
var inst_5780 = (state_5798[(2)]);
var state_5798__$1 = state_5798;
var statearr_5800_5822 = state_5798__$1;
(statearr_5800_5822[(2)] = inst_5780);

(statearr_5800_5822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (1))){
var inst_5774 = cljs.core.seq.call(null,coll);
var inst_5775 = inst_5774;
var state_5798__$1 = (function (){var statearr_5801 = state_5798;
(statearr_5801[(7)] = inst_5775);

return statearr_5801;
})();
var statearr_5802_5823 = state_5798__$1;
(statearr_5802_5823[(2)] = null);

(statearr_5802_5823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (4))){
var inst_5775 = (state_5798[(7)]);
var inst_5778 = cljs.core.first.call(null,inst_5775);
var state_5798__$1 = state_5798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5798__$1,(7),ch,inst_5778);
} else {
if((state_val_5799 === (13))){
var inst_5792 = (state_5798[(2)]);
var state_5798__$1 = state_5798;
var statearr_5803_5824 = state_5798__$1;
(statearr_5803_5824[(2)] = inst_5792);

(statearr_5803_5824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (6))){
var inst_5783 = (state_5798[(2)]);
var state_5798__$1 = state_5798;
if(cljs.core.truth_(inst_5783)){
var statearr_5804_5825 = state_5798__$1;
(statearr_5804_5825[(1)] = (8));

} else {
var statearr_5805_5826 = state_5798__$1;
(statearr_5805_5826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (3))){
var inst_5796 = (state_5798[(2)]);
var state_5798__$1 = state_5798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5798__$1,inst_5796);
} else {
if((state_val_5799 === (12))){
var state_5798__$1 = state_5798;
var statearr_5806_5827 = state_5798__$1;
(statearr_5806_5827[(2)] = null);

(statearr_5806_5827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (2))){
var inst_5775 = (state_5798[(7)]);
var state_5798__$1 = state_5798;
if(cljs.core.truth_(inst_5775)){
var statearr_5807_5828 = state_5798__$1;
(statearr_5807_5828[(1)] = (4));

} else {
var statearr_5808_5829 = state_5798__$1;
(statearr_5808_5829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (11))){
var inst_5789 = cljs.core.async.close_BANG_.call(null,ch);
var state_5798__$1 = state_5798;
var statearr_5809_5830 = state_5798__$1;
(statearr_5809_5830[(2)] = inst_5789);

(statearr_5809_5830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (9))){
var state_5798__$1 = state_5798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5810_5831 = state_5798__$1;
(statearr_5810_5831[(1)] = (11));

} else {
var statearr_5811_5832 = state_5798__$1;
(statearr_5811_5832[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (5))){
var inst_5775 = (state_5798[(7)]);
var state_5798__$1 = state_5798;
var statearr_5812_5833 = state_5798__$1;
(statearr_5812_5833[(2)] = inst_5775);

(statearr_5812_5833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (10))){
var inst_5794 = (state_5798[(2)]);
var state_5798__$1 = state_5798;
var statearr_5813_5834 = state_5798__$1;
(statearr_5813_5834[(2)] = inst_5794);

(statearr_5813_5834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5799 === (8))){
var inst_5775 = (state_5798[(7)]);
var inst_5785 = cljs.core.next.call(null,inst_5775);
var inst_5775__$1 = inst_5785;
var state_5798__$1 = (function (){var statearr_5814 = state_5798;
(statearr_5814[(7)] = inst_5775__$1);

return statearr_5814;
})();
var statearr_5815_5835 = state_5798__$1;
(statearr_5815_5835[(2)] = null);

(statearr_5815_5835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto__))
;
return ((function (switch__3180__auto__,c__3305__auto__){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_5816 = [null,null,null,null,null,null,null,null];
(statearr_5816[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_5816[(1)] = (1));

return statearr_5816;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_5798){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e5817){var ex__3184__auto__ = e5817;
var statearr_5818_5836 = state_5798;
(statearr_5818_5836[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5798[(4)]))){
var statearr_5819_5837 = state_5798;
(statearr_5819_5837[(1)] = cljs.core.first.call(null,(state_5798[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5838 = state_5798;
state_5798 = G__5838;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_5798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_5798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto__))
})();
var state__3307__auto__ = (function (){var statearr_5820 = f__3306__auto__.call(null);
(statearr_5820[(6)] = c__3305__auto__);

return statearr_5820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto__))
);

return c__3305__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__5840 = arguments.length;
switch (G__5840) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4209__auto__ = (((_ == null))?null:_);
var m__4210__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,_);
} else {
var m__4210__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4210__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m);
} else {
var m__4210__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async5842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5842 = (function (ch,cs,meta5843){
this.ch = ch;
this.cs = cs;
this.meta5843 = meta5843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_5844,meta5843__$1){
var self__ = this;
var _5844__$1 = this;
return (new cljs.core.async.t_cljs$core$async5842(self__.ch,self__.cs,meta5843__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_5844){
var self__ = this;
var _5844__$1 = this;
return self__.meta5843;
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta5843","meta5843",-730857550,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async5842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5842";

cljs.core.async.t_cljs$core$async5842.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5842");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5842.
 */
cljs.core.async.__GT_t_cljs$core$async5842 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async5842(ch__$1,cs__$1,meta5843){
return (new cljs.core.async.t_cljs$core$async5842(ch__$1,cs__$1,meta5843));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async5842(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__3305__auto___6061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6061,cs,m,dchan,dctr,done){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6061,cs,m,dchan,dctr,done){
return (function (state_5977){
var state_val_5978 = (state_5977[(1)]);
if((state_val_5978 === (7))){
var inst_5973 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_5979_6062 = state_5977__$1;
(statearr_5979_6062[(2)] = inst_5973);

(statearr_5979_6062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (20))){
var inst_5878 = (state_5977[(7)]);
var inst_5890 = cljs.core.first.call(null,inst_5878);
var inst_5891 = cljs.core.nth.call(null,inst_5890,(0),null);
var inst_5892 = cljs.core.nth.call(null,inst_5890,(1),null);
var state_5977__$1 = (function (){var statearr_5980 = state_5977;
(statearr_5980[(8)] = inst_5891);

return statearr_5980;
})();
if(cljs.core.truth_(inst_5892)){
var statearr_5981_6063 = state_5977__$1;
(statearr_5981_6063[(1)] = (22));

} else {
var statearr_5982_6064 = state_5977__$1;
(statearr_5982_6064[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (27))){
var inst_5922 = (state_5977[(9)]);
var inst_5927 = (state_5977[(10)]);
var inst_5920 = (state_5977[(11)]);
var inst_5847 = (state_5977[(12)]);
var inst_5927__$1 = cljs.core._nth.call(null,inst_5920,inst_5922);
var inst_5928 = cljs.core.async.put_BANG_.call(null,inst_5927__$1,inst_5847,done);
var state_5977__$1 = (function (){var statearr_5983 = state_5977;
(statearr_5983[(10)] = inst_5927__$1);

return statearr_5983;
})();
if(cljs.core.truth_(inst_5928)){
var statearr_5984_6065 = state_5977__$1;
(statearr_5984_6065[(1)] = (30));

} else {
var statearr_5985_6066 = state_5977__$1;
(statearr_5985_6066[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (1))){
var state_5977__$1 = state_5977;
var statearr_5986_6067 = state_5977__$1;
(statearr_5986_6067[(2)] = null);

(statearr_5986_6067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (24))){
var inst_5878 = (state_5977[(7)]);
var inst_5897 = (state_5977[(2)]);
var inst_5898 = cljs.core.next.call(null,inst_5878);
var inst_5856 = inst_5898;
var inst_5857 = null;
var inst_5858 = (0);
var inst_5859 = (0);
var state_5977__$1 = (function (){var statearr_5987 = state_5977;
(statearr_5987[(13)] = inst_5897);

(statearr_5987[(14)] = inst_5858);

(statearr_5987[(15)] = inst_5857);

(statearr_5987[(16)] = inst_5856);

(statearr_5987[(17)] = inst_5859);

return statearr_5987;
})();
var statearr_5988_6068 = state_5977__$1;
(statearr_5988_6068[(2)] = null);

(statearr_5988_6068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (39))){
var state_5977__$1 = state_5977;
var statearr_5992_6069 = state_5977__$1;
(statearr_5992_6069[(2)] = null);

(statearr_5992_6069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (4))){
var inst_5847 = (state_5977[(12)]);
var inst_5847__$1 = (state_5977[(2)]);
var inst_5848 = (inst_5847__$1 == null);
var state_5977__$1 = (function (){var statearr_5993 = state_5977;
(statearr_5993[(12)] = inst_5847__$1);

return statearr_5993;
})();
if(cljs.core.truth_(inst_5848)){
var statearr_5994_6070 = state_5977__$1;
(statearr_5994_6070[(1)] = (5));

} else {
var statearr_5995_6071 = state_5977__$1;
(statearr_5995_6071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (15))){
var inst_5858 = (state_5977[(14)]);
var inst_5857 = (state_5977[(15)]);
var inst_5856 = (state_5977[(16)]);
var inst_5859 = (state_5977[(17)]);
var inst_5874 = (state_5977[(2)]);
var inst_5875 = (inst_5859 + (1));
var tmp5989 = inst_5858;
var tmp5990 = inst_5857;
var tmp5991 = inst_5856;
var inst_5856__$1 = tmp5991;
var inst_5857__$1 = tmp5990;
var inst_5858__$1 = tmp5989;
var inst_5859__$1 = inst_5875;
var state_5977__$1 = (function (){var statearr_5996 = state_5977;
(statearr_5996[(14)] = inst_5858__$1);

(statearr_5996[(15)] = inst_5857__$1);

(statearr_5996[(18)] = inst_5874);

(statearr_5996[(16)] = inst_5856__$1);

(statearr_5996[(17)] = inst_5859__$1);

return statearr_5996;
})();
var statearr_5997_6072 = state_5977__$1;
(statearr_5997_6072[(2)] = null);

(statearr_5997_6072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (21))){
var inst_5901 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6001_6073 = state_5977__$1;
(statearr_6001_6073[(2)] = inst_5901);

(statearr_6001_6073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (31))){
var inst_5927 = (state_5977[(10)]);
var inst_5931 = cljs.core.async.untap_STAR_.call(null,m,inst_5927);
var state_5977__$1 = state_5977;
var statearr_6002_6074 = state_5977__$1;
(statearr_6002_6074[(2)] = inst_5931);

(statearr_6002_6074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (32))){
var inst_5922 = (state_5977[(9)]);
var inst_5920 = (state_5977[(11)]);
var inst_5921 = (state_5977[(19)]);
var inst_5919 = (state_5977[(20)]);
var inst_5933 = (state_5977[(2)]);
var inst_5934 = (inst_5922 + (1));
var tmp5998 = inst_5920;
var tmp5999 = inst_5921;
var tmp6000 = inst_5919;
var inst_5919__$1 = tmp6000;
var inst_5920__$1 = tmp5998;
var inst_5921__$1 = tmp5999;
var inst_5922__$1 = inst_5934;
var state_5977__$1 = (function (){var statearr_6003 = state_5977;
(statearr_6003[(9)] = inst_5922__$1);

(statearr_6003[(11)] = inst_5920__$1);

(statearr_6003[(21)] = inst_5933);

(statearr_6003[(19)] = inst_5921__$1);

(statearr_6003[(20)] = inst_5919__$1);

return statearr_6003;
})();
var statearr_6004_6075 = state_5977__$1;
(statearr_6004_6075[(2)] = null);

(statearr_6004_6075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (40))){
var inst_5946 = (state_5977[(22)]);
var inst_5950 = cljs.core.async.untap_STAR_.call(null,m,inst_5946);
var state_5977__$1 = state_5977;
var statearr_6005_6076 = state_5977__$1;
(statearr_6005_6076[(2)] = inst_5950);

(statearr_6005_6076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (33))){
var inst_5937 = (state_5977[(23)]);
var inst_5939 = cljs.core.chunked_seq_QMARK_.call(null,inst_5937);
var state_5977__$1 = state_5977;
if(inst_5939){
var statearr_6006_6077 = state_5977__$1;
(statearr_6006_6077[(1)] = (36));

} else {
var statearr_6007_6078 = state_5977__$1;
(statearr_6007_6078[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (13))){
var inst_5868 = (state_5977[(24)]);
var inst_5871 = cljs.core.async.close_BANG_.call(null,inst_5868);
var state_5977__$1 = state_5977;
var statearr_6008_6079 = state_5977__$1;
(statearr_6008_6079[(2)] = inst_5871);

(statearr_6008_6079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (22))){
var inst_5891 = (state_5977[(8)]);
var inst_5894 = cljs.core.async.close_BANG_.call(null,inst_5891);
var state_5977__$1 = state_5977;
var statearr_6009_6080 = state_5977__$1;
(statearr_6009_6080[(2)] = inst_5894);

(statearr_6009_6080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (36))){
var inst_5937 = (state_5977[(23)]);
var inst_5941 = cljs.core.chunk_first.call(null,inst_5937);
var inst_5942 = cljs.core.chunk_rest.call(null,inst_5937);
var inst_5943 = cljs.core.count.call(null,inst_5941);
var inst_5919 = inst_5942;
var inst_5920 = inst_5941;
var inst_5921 = inst_5943;
var inst_5922 = (0);
var state_5977__$1 = (function (){var statearr_6010 = state_5977;
(statearr_6010[(9)] = inst_5922);

(statearr_6010[(11)] = inst_5920);

(statearr_6010[(19)] = inst_5921);

(statearr_6010[(20)] = inst_5919);

return statearr_6010;
})();
var statearr_6011_6081 = state_5977__$1;
(statearr_6011_6081[(2)] = null);

(statearr_6011_6081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (41))){
var inst_5937 = (state_5977[(23)]);
var inst_5952 = (state_5977[(2)]);
var inst_5953 = cljs.core.next.call(null,inst_5937);
var inst_5919 = inst_5953;
var inst_5920 = null;
var inst_5921 = (0);
var inst_5922 = (0);
var state_5977__$1 = (function (){var statearr_6012 = state_5977;
(statearr_6012[(9)] = inst_5922);

(statearr_6012[(25)] = inst_5952);

(statearr_6012[(11)] = inst_5920);

(statearr_6012[(19)] = inst_5921);

(statearr_6012[(20)] = inst_5919);

return statearr_6012;
})();
var statearr_6013_6082 = state_5977__$1;
(statearr_6013_6082[(2)] = null);

(statearr_6013_6082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (43))){
var state_5977__$1 = state_5977;
var statearr_6014_6083 = state_5977__$1;
(statearr_6014_6083[(2)] = null);

(statearr_6014_6083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (29))){
var inst_5961 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6015_6084 = state_5977__$1;
(statearr_6015_6084[(2)] = inst_5961);

(statearr_6015_6084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (44))){
var inst_5970 = (state_5977[(2)]);
var state_5977__$1 = (function (){var statearr_6016 = state_5977;
(statearr_6016[(26)] = inst_5970);

return statearr_6016;
})();
var statearr_6017_6085 = state_5977__$1;
(statearr_6017_6085[(2)] = null);

(statearr_6017_6085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (6))){
var inst_5911 = (state_5977[(27)]);
var inst_5910 = cljs.core.deref.call(null,cs);
var inst_5911__$1 = cljs.core.keys.call(null,inst_5910);
var inst_5912 = cljs.core.count.call(null,inst_5911__$1);
var inst_5913 = cljs.core.reset_BANG_.call(null,dctr,inst_5912);
var inst_5918 = cljs.core.seq.call(null,inst_5911__$1);
var inst_5919 = inst_5918;
var inst_5920 = null;
var inst_5921 = (0);
var inst_5922 = (0);
var state_5977__$1 = (function (){var statearr_6018 = state_5977;
(statearr_6018[(9)] = inst_5922);

(statearr_6018[(11)] = inst_5920);

(statearr_6018[(27)] = inst_5911__$1);

(statearr_6018[(19)] = inst_5921);

(statearr_6018[(20)] = inst_5919);

(statearr_6018[(28)] = inst_5913);

return statearr_6018;
})();
var statearr_6019_6086 = state_5977__$1;
(statearr_6019_6086[(2)] = null);

(statearr_6019_6086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (28))){
var inst_5919 = (state_5977[(20)]);
var inst_5937 = (state_5977[(23)]);
var inst_5937__$1 = cljs.core.seq.call(null,inst_5919);
var state_5977__$1 = (function (){var statearr_6020 = state_5977;
(statearr_6020[(23)] = inst_5937__$1);

return statearr_6020;
})();
if(inst_5937__$1){
var statearr_6021_6087 = state_5977__$1;
(statearr_6021_6087[(1)] = (33));

} else {
var statearr_6022_6088 = state_5977__$1;
(statearr_6022_6088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (25))){
var inst_5922 = (state_5977[(9)]);
var inst_5921 = (state_5977[(19)]);
var inst_5924 = (inst_5922 < inst_5921);
var inst_5925 = inst_5924;
var state_5977__$1 = state_5977;
if(cljs.core.truth_(inst_5925)){
var statearr_6023_6089 = state_5977__$1;
(statearr_6023_6089[(1)] = (27));

} else {
var statearr_6024_6090 = state_5977__$1;
(statearr_6024_6090[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (34))){
var state_5977__$1 = state_5977;
var statearr_6025_6091 = state_5977__$1;
(statearr_6025_6091[(2)] = null);

(statearr_6025_6091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (17))){
var state_5977__$1 = state_5977;
var statearr_6026_6092 = state_5977__$1;
(statearr_6026_6092[(2)] = null);

(statearr_6026_6092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (3))){
var inst_5975 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5977__$1,inst_5975);
} else {
if((state_val_5978 === (12))){
var inst_5906 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6027_6093 = state_5977__$1;
(statearr_6027_6093[(2)] = inst_5906);

(statearr_6027_6093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (2))){
var state_5977__$1 = state_5977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5977__$1,(4),ch);
} else {
if((state_val_5978 === (23))){
var state_5977__$1 = state_5977;
var statearr_6028_6094 = state_5977__$1;
(statearr_6028_6094[(2)] = null);

(statearr_6028_6094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (35))){
var inst_5959 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6029_6095 = state_5977__$1;
(statearr_6029_6095[(2)] = inst_5959);

(statearr_6029_6095[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (19))){
var inst_5878 = (state_5977[(7)]);
var inst_5882 = cljs.core.chunk_first.call(null,inst_5878);
var inst_5883 = cljs.core.chunk_rest.call(null,inst_5878);
var inst_5884 = cljs.core.count.call(null,inst_5882);
var inst_5856 = inst_5883;
var inst_5857 = inst_5882;
var inst_5858 = inst_5884;
var inst_5859 = (0);
var state_5977__$1 = (function (){var statearr_6030 = state_5977;
(statearr_6030[(14)] = inst_5858);

(statearr_6030[(15)] = inst_5857);

(statearr_6030[(16)] = inst_5856);

(statearr_6030[(17)] = inst_5859);

return statearr_6030;
})();
var statearr_6031_6096 = state_5977__$1;
(statearr_6031_6096[(2)] = null);

(statearr_6031_6096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (11))){
var inst_5856 = (state_5977[(16)]);
var inst_5878 = (state_5977[(7)]);
var inst_5878__$1 = cljs.core.seq.call(null,inst_5856);
var state_5977__$1 = (function (){var statearr_6032 = state_5977;
(statearr_6032[(7)] = inst_5878__$1);

return statearr_6032;
})();
if(inst_5878__$1){
var statearr_6033_6097 = state_5977__$1;
(statearr_6033_6097[(1)] = (16));

} else {
var statearr_6034_6098 = state_5977__$1;
(statearr_6034_6098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (9))){
var inst_5908 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6035_6099 = state_5977__$1;
(statearr_6035_6099[(2)] = inst_5908);

(statearr_6035_6099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (5))){
var inst_5854 = cljs.core.deref.call(null,cs);
var inst_5855 = cljs.core.seq.call(null,inst_5854);
var inst_5856 = inst_5855;
var inst_5857 = null;
var inst_5858 = (0);
var inst_5859 = (0);
var state_5977__$1 = (function (){var statearr_6036 = state_5977;
(statearr_6036[(14)] = inst_5858);

(statearr_6036[(15)] = inst_5857);

(statearr_6036[(16)] = inst_5856);

(statearr_6036[(17)] = inst_5859);

return statearr_6036;
})();
var statearr_6037_6100 = state_5977__$1;
(statearr_6037_6100[(2)] = null);

(statearr_6037_6100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (14))){
var state_5977__$1 = state_5977;
var statearr_6038_6101 = state_5977__$1;
(statearr_6038_6101[(2)] = null);

(statearr_6038_6101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (45))){
var inst_5967 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6039_6102 = state_5977__$1;
(statearr_6039_6102[(2)] = inst_5967);

(statearr_6039_6102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (26))){
var inst_5911 = (state_5977[(27)]);
var inst_5963 = (state_5977[(2)]);
var inst_5964 = cljs.core.seq.call(null,inst_5911);
var state_5977__$1 = (function (){var statearr_6040 = state_5977;
(statearr_6040[(29)] = inst_5963);

return statearr_6040;
})();
if(inst_5964){
var statearr_6041_6103 = state_5977__$1;
(statearr_6041_6103[(1)] = (42));

} else {
var statearr_6042_6104 = state_5977__$1;
(statearr_6042_6104[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (16))){
var inst_5878 = (state_5977[(7)]);
var inst_5880 = cljs.core.chunked_seq_QMARK_.call(null,inst_5878);
var state_5977__$1 = state_5977;
if(inst_5880){
var statearr_6043_6105 = state_5977__$1;
(statearr_6043_6105[(1)] = (19));

} else {
var statearr_6044_6106 = state_5977__$1;
(statearr_6044_6106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (38))){
var inst_5956 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6045_6107 = state_5977__$1;
(statearr_6045_6107[(2)] = inst_5956);

(statearr_6045_6107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (30))){
var state_5977__$1 = state_5977;
var statearr_6046_6108 = state_5977__$1;
(statearr_6046_6108[(2)] = null);

(statearr_6046_6108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (10))){
var inst_5857 = (state_5977[(15)]);
var inst_5859 = (state_5977[(17)]);
var inst_5867 = cljs.core._nth.call(null,inst_5857,inst_5859);
var inst_5868 = cljs.core.nth.call(null,inst_5867,(0),null);
var inst_5869 = cljs.core.nth.call(null,inst_5867,(1),null);
var state_5977__$1 = (function (){var statearr_6047 = state_5977;
(statearr_6047[(24)] = inst_5868);

return statearr_6047;
})();
if(cljs.core.truth_(inst_5869)){
var statearr_6048_6109 = state_5977__$1;
(statearr_6048_6109[(1)] = (13));

} else {
var statearr_6049_6110 = state_5977__$1;
(statearr_6049_6110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (18))){
var inst_5904 = (state_5977[(2)]);
var state_5977__$1 = state_5977;
var statearr_6050_6111 = state_5977__$1;
(statearr_6050_6111[(2)] = inst_5904);

(statearr_6050_6111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (42))){
var state_5977__$1 = state_5977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5977__$1,(45),dchan);
} else {
if((state_val_5978 === (37))){
var inst_5946 = (state_5977[(22)]);
var inst_5937 = (state_5977[(23)]);
var inst_5847 = (state_5977[(12)]);
var inst_5946__$1 = cljs.core.first.call(null,inst_5937);
var inst_5947 = cljs.core.async.put_BANG_.call(null,inst_5946__$1,inst_5847,done);
var state_5977__$1 = (function (){var statearr_6051 = state_5977;
(statearr_6051[(22)] = inst_5946__$1);

return statearr_6051;
})();
if(cljs.core.truth_(inst_5947)){
var statearr_6052_6112 = state_5977__$1;
(statearr_6052_6112[(1)] = (39));

} else {
var statearr_6053_6113 = state_5977__$1;
(statearr_6053_6113[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5978 === (8))){
var inst_5858 = (state_5977[(14)]);
var inst_5859 = (state_5977[(17)]);
var inst_5861 = (inst_5859 < inst_5858);
var inst_5862 = inst_5861;
var state_5977__$1 = state_5977;
if(cljs.core.truth_(inst_5862)){
var statearr_6054_6114 = state_5977__$1;
(statearr_6054_6114[(1)] = (10));

} else {
var statearr_6055_6115 = state_5977__$1;
(statearr_6055_6115[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6061,cs,m,dchan,dctr,done))
;
return ((function (switch__3180__auto__,c__3305__auto___6061,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3181__auto__ = null;
var cljs$core$async$mult_$_state_machine__3181__auto____0 = (function (){
var statearr_6056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6056[(0)] = cljs$core$async$mult_$_state_machine__3181__auto__);

(statearr_6056[(1)] = (1));

return statearr_6056;
});
var cljs$core$async$mult_$_state_machine__3181__auto____1 = (function (state_5977){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_5977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6057){var ex__3184__auto__ = e6057;
var statearr_6058_6116 = state_5977;
(statearr_6058_6116[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_5977[(4)]))){
var statearr_6059_6117 = state_5977;
(statearr_6059_6117[(1)] = cljs.core.first.call(null,(state_5977[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6118 = state_5977;
state_5977 = G__6118;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3181__auto__ = function(state_5977){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3181__auto____1.call(this,state_5977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3181__auto____0;
cljs$core$async$mult_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3181__auto____1;
return cljs$core$async$mult_$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6061,cs,m,dchan,dctr,done))
})();
var state__3307__auto__ = (function (){var statearr_6060 = f__3306__auto__.call(null);
(statearr_6060[(6)] = c__3305__auto___6061);

return statearr_6060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6061,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__6120 = arguments.length;
switch (G__6120) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m);
} else {
var m__4210__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,state_map);
} else {
var m__4210__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,mode);
} else {
var m__4210__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___6132 = arguments.length;
var i__4498__auto___6133 = (0);
while(true){
if((i__4498__auto___6133 < len__4497__auto___6132)){
args__4500__auto__.push((arguments[i__4498__auto___6133]));

var G__6134 = (i__4498__auto___6133 + (1));
i__4498__auto___6133 = G__6134;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__6126){
var map__6127 = p__6126;
var map__6127__$1 = ((((!((map__6127 == null)))?(((((map__6127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6127):map__6127);
var opts = map__6127__$1;
var statearr_6129_6135 = state;
(statearr_6129_6135[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__6127,map__6127__$1,opts){
return (function (val){
var statearr_6130_6136 = state;
(statearr_6130_6136[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__6127,map__6127__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_6131_6137 = state;
(statearr_6131_6137[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq6122){
var G__6123 = cljs.core.first.call(null,seq6122);
var seq6122__$1 = cljs.core.next.call(null,seq6122);
var G__6124 = cljs.core.first.call(null,seq6122__$1);
var seq6122__$2 = cljs.core.next.call(null,seq6122__$1);
var G__6125 = cljs.core.first.call(null,seq6122__$2);
var seq6122__$3 = cljs.core.next.call(null,seq6122__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6123,G__6124,G__6125,seq6122__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async6138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6138 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta6139){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta6139 = meta6139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_6140,meta6139__$1){
var self__ = this;
var _6140__$1 = this;
return (new cljs.core.async.t_cljs$core$async6138(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta6139__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_6140){
var self__ = this;
var _6140__$1 = this;
return self__.meta6139;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta6139","meta6139",-449934416,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6138";

cljs.core.async.t_cljs$core$async6138.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6138");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6138.
 */
cljs.core.async.__GT_t_cljs$core$async6138 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async6138(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6139){
return (new cljs.core.async.t_cljs$core$async6138(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6139));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async6138(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3305__auto___6303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6303,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6303,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_6242){
var state_val_6243 = (state_6242[(1)]);
if((state_val_6243 === (7))){
var inst_6157 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6244_6304 = state_6242__$1;
(statearr_6244_6304[(2)] = inst_6157);

(statearr_6244_6304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (20))){
var inst_6169 = (state_6242[(7)]);
var state_6242__$1 = state_6242;
var statearr_6245_6305 = state_6242__$1;
(statearr_6245_6305[(2)] = inst_6169);

(statearr_6245_6305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (27))){
var state_6242__$1 = state_6242;
var statearr_6246_6306 = state_6242__$1;
(statearr_6246_6306[(2)] = null);

(statearr_6246_6306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (1))){
var inst_6144 = (state_6242[(8)]);
var inst_6144__$1 = calc_state.call(null);
var inst_6146 = (inst_6144__$1 == null);
var inst_6147 = cljs.core.not.call(null,inst_6146);
var state_6242__$1 = (function (){var statearr_6247 = state_6242;
(statearr_6247[(8)] = inst_6144__$1);

return statearr_6247;
})();
if(inst_6147){
var statearr_6248_6307 = state_6242__$1;
(statearr_6248_6307[(1)] = (2));

} else {
var statearr_6249_6308 = state_6242__$1;
(statearr_6249_6308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (24))){
var inst_6193 = (state_6242[(9)]);
var inst_6202 = (state_6242[(10)]);
var inst_6216 = (state_6242[(11)]);
var inst_6216__$1 = inst_6193.call(null,inst_6202);
var state_6242__$1 = (function (){var statearr_6250 = state_6242;
(statearr_6250[(11)] = inst_6216__$1);

return statearr_6250;
})();
if(cljs.core.truth_(inst_6216__$1)){
var statearr_6251_6309 = state_6242__$1;
(statearr_6251_6309[(1)] = (29));

} else {
var statearr_6252_6310 = state_6242__$1;
(statearr_6252_6310[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (4))){
var inst_6160 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6160)){
var statearr_6253_6311 = state_6242__$1;
(statearr_6253_6311[(1)] = (8));

} else {
var statearr_6254_6312 = state_6242__$1;
(statearr_6254_6312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (15))){
var inst_6187 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6187)){
var statearr_6255_6313 = state_6242__$1;
(statearr_6255_6313[(1)] = (19));

} else {
var statearr_6256_6314 = state_6242__$1;
(statearr_6256_6314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (21))){
var inst_6192 = (state_6242[(12)]);
var inst_6192__$1 = (state_6242[(2)]);
var inst_6193 = cljs.core.get.call(null,inst_6192__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6194 = cljs.core.get.call(null,inst_6192__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6195 = cljs.core.get.call(null,inst_6192__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_6242__$1 = (function (){var statearr_6257 = state_6242;
(statearr_6257[(9)] = inst_6193);

(statearr_6257[(12)] = inst_6192__$1);

(statearr_6257[(13)] = inst_6194);

return statearr_6257;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_6242__$1,(22),inst_6195);
} else {
if((state_val_6243 === (31))){
var inst_6224 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6224)){
var statearr_6258_6315 = state_6242__$1;
(statearr_6258_6315[(1)] = (32));

} else {
var statearr_6259_6316 = state_6242__$1;
(statearr_6259_6316[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (32))){
var inst_6201 = (state_6242[(14)]);
var state_6242__$1 = state_6242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6242__$1,(35),out,inst_6201);
} else {
if((state_val_6243 === (33))){
var inst_6192 = (state_6242[(12)]);
var inst_6169 = inst_6192;
var state_6242__$1 = (function (){var statearr_6260 = state_6242;
(statearr_6260[(7)] = inst_6169);

return statearr_6260;
})();
var statearr_6261_6317 = state_6242__$1;
(statearr_6261_6317[(2)] = null);

(statearr_6261_6317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (13))){
var inst_6169 = (state_6242[(7)]);
var inst_6176 = inst_6169.cljs$lang$protocol_mask$partition0$;
var inst_6177 = (inst_6176 & (64));
var inst_6178 = inst_6169.cljs$core$ISeq$;
var inst_6179 = (cljs.core.PROTOCOL_SENTINEL === inst_6178);
var inst_6180 = ((inst_6177) || (inst_6179));
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6180)){
var statearr_6262_6318 = state_6242__$1;
(statearr_6262_6318[(1)] = (16));

} else {
var statearr_6263_6319 = state_6242__$1;
(statearr_6263_6319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (22))){
var inst_6202 = (state_6242[(10)]);
var inst_6201 = (state_6242[(14)]);
var inst_6200 = (state_6242[(2)]);
var inst_6201__$1 = cljs.core.nth.call(null,inst_6200,(0),null);
var inst_6202__$1 = cljs.core.nth.call(null,inst_6200,(1),null);
var inst_6203 = (inst_6201__$1 == null);
var inst_6204 = cljs.core._EQ_.call(null,inst_6202__$1,change);
var inst_6205 = ((inst_6203) || (inst_6204));
var state_6242__$1 = (function (){var statearr_6264 = state_6242;
(statearr_6264[(10)] = inst_6202__$1);

(statearr_6264[(14)] = inst_6201__$1);

return statearr_6264;
})();
if(cljs.core.truth_(inst_6205)){
var statearr_6265_6320 = state_6242__$1;
(statearr_6265_6320[(1)] = (23));

} else {
var statearr_6266_6321 = state_6242__$1;
(statearr_6266_6321[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (36))){
var inst_6192 = (state_6242[(12)]);
var inst_6169 = inst_6192;
var state_6242__$1 = (function (){var statearr_6267 = state_6242;
(statearr_6267[(7)] = inst_6169);

return statearr_6267;
})();
var statearr_6268_6322 = state_6242__$1;
(statearr_6268_6322[(2)] = null);

(statearr_6268_6322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (29))){
var inst_6216 = (state_6242[(11)]);
var state_6242__$1 = state_6242;
var statearr_6269_6323 = state_6242__$1;
(statearr_6269_6323[(2)] = inst_6216);

(statearr_6269_6323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (6))){
var state_6242__$1 = state_6242;
var statearr_6270_6324 = state_6242__$1;
(statearr_6270_6324[(2)] = false);

(statearr_6270_6324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (28))){
var inst_6212 = (state_6242[(2)]);
var inst_6213 = calc_state.call(null);
var inst_6169 = inst_6213;
var state_6242__$1 = (function (){var statearr_6271 = state_6242;
(statearr_6271[(7)] = inst_6169);

(statearr_6271[(15)] = inst_6212);

return statearr_6271;
})();
var statearr_6272_6325 = state_6242__$1;
(statearr_6272_6325[(2)] = null);

(statearr_6272_6325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (25))){
var inst_6238 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6273_6326 = state_6242__$1;
(statearr_6273_6326[(2)] = inst_6238);

(statearr_6273_6326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (34))){
var inst_6236 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6274_6327 = state_6242__$1;
(statearr_6274_6327[(2)] = inst_6236);

(statearr_6274_6327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (17))){
var state_6242__$1 = state_6242;
var statearr_6275_6328 = state_6242__$1;
(statearr_6275_6328[(2)] = false);

(statearr_6275_6328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (3))){
var state_6242__$1 = state_6242;
var statearr_6276_6329 = state_6242__$1;
(statearr_6276_6329[(2)] = false);

(statearr_6276_6329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (12))){
var inst_6240 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6242__$1,inst_6240);
} else {
if((state_val_6243 === (2))){
var inst_6144 = (state_6242[(8)]);
var inst_6149 = inst_6144.cljs$lang$protocol_mask$partition0$;
var inst_6150 = (inst_6149 & (64));
var inst_6151 = inst_6144.cljs$core$ISeq$;
var inst_6152 = (cljs.core.PROTOCOL_SENTINEL === inst_6151);
var inst_6153 = ((inst_6150) || (inst_6152));
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6153)){
var statearr_6277_6330 = state_6242__$1;
(statearr_6277_6330[(1)] = (5));

} else {
var statearr_6278_6331 = state_6242__$1;
(statearr_6278_6331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (23))){
var inst_6201 = (state_6242[(14)]);
var inst_6207 = (inst_6201 == null);
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6207)){
var statearr_6279_6332 = state_6242__$1;
(statearr_6279_6332[(1)] = (26));

} else {
var statearr_6280_6333 = state_6242__$1;
(statearr_6280_6333[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (35))){
var inst_6227 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6227)){
var statearr_6281_6334 = state_6242__$1;
(statearr_6281_6334[(1)] = (36));

} else {
var statearr_6282_6335 = state_6242__$1;
(statearr_6282_6335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (19))){
var inst_6169 = (state_6242[(7)]);
var inst_6189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_6169);
var state_6242__$1 = state_6242;
var statearr_6283_6336 = state_6242__$1;
(statearr_6283_6336[(2)] = inst_6189);

(statearr_6283_6336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (11))){
var inst_6169 = (state_6242[(7)]);
var inst_6173 = (inst_6169 == null);
var inst_6174 = cljs.core.not.call(null,inst_6173);
var state_6242__$1 = state_6242;
if(inst_6174){
var statearr_6284_6337 = state_6242__$1;
(statearr_6284_6337[(1)] = (13));

} else {
var statearr_6285_6338 = state_6242__$1;
(statearr_6285_6338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (9))){
var inst_6144 = (state_6242[(8)]);
var state_6242__$1 = state_6242;
var statearr_6286_6339 = state_6242__$1;
(statearr_6286_6339[(2)] = inst_6144);

(statearr_6286_6339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (5))){
var state_6242__$1 = state_6242;
var statearr_6287_6340 = state_6242__$1;
(statearr_6287_6340[(2)] = true);

(statearr_6287_6340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (14))){
var state_6242__$1 = state_6242;
var statearr_6288_6341 = state_6242__$1;
(statearr_6288_6341[(2)] = false);

(statearr_6288_6341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (26))){
var inst_6202 = (state_6242[(10)]);
var inst_6209 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_6202);
var state_6242__$1 = state_6242;
var statearr_6289_6342 = state_6242__$1;
(statearr_6289_6342[(2)] = inst_6209);

(statearr_6289_6342[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (16))){
var state_6242__$1 = state_6242;
var statearr_6290_6343 = state_6242__$1;
(statearr_6290_6343[(2)] = true);

(statearr_6290_6343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (38))){
var inst_6232 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6291_6344 = state_6242__$1;
(statearr_6291_6344[(2)] = inst_6232);

(statearr_6291_6344[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (30))){
var inst_6193 = (state_6242[(9)]);
var inst_6202 = (state_6242[(10)]);
var inst_6194 = (state_6242[(13)]);
var inst_6219 = cljs.core.empty_QMARK_.call(null,inst_6193);
var inst_6220 = inst_6194.call(null,inst_6202);
var inst_6221 = cljs.core.not.call(null,inst_6220);
var inst_6222 = ((inst_6219) && (inst_6221));
var state_6242__$1 = state_6242;
var statearr_6292_6345 = state_6242__$1;
(statearr_6292_6345[(2)] = inst_6222);

(statearr_6292_6345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (10))){
var inst_6144 = (state_6242[(8)]);
var inst_6165 = (state_6242[(2)]);
var inst_6166 = cljs.core.get.call(null,inst_6165,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6167 = cljs.core.get.call(null,inst_6165,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6168 = cljs.core.get.call(null,inst_6165,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_6169 = inst_6144;
var state_6242__$1 = (function (){var statearr_6293 = state_6242;
(statearr_6293[(16)] = inst_6167);

(statearr_6293[(7)] = inst_6169);

(statearr_6293[(17)] = inst_6168);

(statearr_6293[(18)] = inst_6166);

return statearr_6293;
})();
var statearr_6294_6346 = state_6242__$1;
(statearr_6294_6346[(2)] = null);

(statearr_6294_6346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (18))){
var inst_6184 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6295_6347 = state_6242__$1;
(statearr_6295_6347[(2)] = inst_6184);

(statearr_6295_6347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (37))){
var state_6242__$1 = state_6242;
var statearr_6296_6348 = state_6242__$1;
(statearr_6296_6348[(2)] = null);

(statearr_6296_6348[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (8))){
var inst_6144 = (state_6242[(8)]);
var inst_6162 = cljs.core.apply.call(null,cljs.core.hash_map,inst_6144);
var state_6242__$1 = state_6242;
var statearr_6297_6349 = state_6242__$1;
(statearr_6297_6349[(2)] = inst_6162);

(statearr_6297_6349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6303,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3180__auto__,c__3305__auto___6303,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3181__auto__ = null;
var cljs$core$async$mix_$_state_machine__3181__auto____0 = (function (){
var statearr_6298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6298[(0)] = cljs$core$async$mix_$_state_machine__3181__auto__);

(statearr_6298[(1)] = (1));

return statearr_6298;
});
var cljs$core$async$mix_$_state_machine__3181__auto____1 = (function (state_6242){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6299){var ex__3184__auto__ = e6299;
var statearr_6300_6350 = state_6242;
(statearr_6300_6350[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6242[(4)]))){
var statearr_6301_6351 = state_6242;
(statearr_6301_6351[(1)] = cljs.core.first.call(null,(state_6242[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6352 = state_6242;
state_6242 = G__6352;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3181__auto__ = function(state_6242){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3181__auto____1.call(this,state_6242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3181__auto____0;
cljs$core$async$mix_$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3181__auto____1;
return cljs$core$async$mix_$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6303,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3307__auto__ = (function (){var statearr_6302 = f__3306__auto__.call(null);
(statearr_6302[(6)] = c__3305__auto___6303);

return statearr_6302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6303,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4210__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__6354 = arguments.length;
switch (G__6354) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__6358 = arguments.length;
switch (G__6358) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3920__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3920__auto__,mults){
return (function (p1__6356_SHARP_){
if(cljs.core.truth_(p1__6356_SHARP_.call(null,topic))){
return p1__6356_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__6356_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async6359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6359 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6360){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6360 = meta6360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_6361,meta6360__$1){
var self__ = this;
var _6361__$1 = this;
return (new cljs.core.async.t_cljs$core$async6359(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6360__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_6361){
var self__ = this;
var _6361__$1 = this;
return self__.meta6360;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta6360","meta6360",-1410365812,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6359";

cljs.core.async.t_cljs$core$async6359.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6359");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6359.
 */
cljs.core.async.__GT_t_cljs$core$async6359 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async6359(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6360){
return (new cljs.core.async.t_cljs$core$async6359(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6360));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async6359(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3305__auto___6480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6480,mults,ensure_mult,p){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6480,mults,ensure_mult,p){
return (function (state_6433){
var state_val_6434 = (state_6433[(1)]);
if((state_val_6434 === (7))){
var inst_6429 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
var statearr_6435_6481 = state_6433__$1;
(statearr_6435_6481[(2)] = inst_6429);

(statearr_6435_6481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (20))){
var state_6433__$1 = state_6433;
var statearr_6436_6482 = state_6433__$1;
(statearr_6436_6482[(2)] = null);

(statearr_6436_6482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (1))){
var state_6433__$1 = state_6433;
var statearr_6437_6483 = state_6433__$1;
(statearr_6437_6483[(2)] = null);

(statearr_6437_6483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (24))){
var inst_6412 = (state_6433[(7)]);
var inst_6421 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_6412);
var state_6433__$1 = state_6433;
var statearr_6438_6484 = state_6433__$1;
(statearr_6438_6484[(2)] = inst_6421);

(statearr_6438_6484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (4))){
var inst_6364 = (state_6433[(8)]);
var inst_6364__$1 = (state_6433[(2)]);
var inst_6365 = (inst_6364__$1 == null);
var state_6433__$1 = (function (){var statearr_6439 = state_6433;
(statearr_6439[(8)] = inst_6364__$1);

return statearr_6439;
})();
if(cljs.core.truth_(inst_6365)){
var statearr_6440_6485 = state_6433__$1;
(statearr_6440_6485[(1)] = (5));

} else {
var statearr_6441_6486 = state_6433__$1;
(statearr_6441_6486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (15))){
var inst_6406 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
var statearr_6442_6487 = state_6433__$1;
(statearr_6442_6487[(2)] = inst_6406);

(statearr_6442_6487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (21))){
var inst_6426 = (state_6433[(2)]);
var state_6433__$1 = (function (){var statearr_6443 = state_6433;
(statearr_6443[(9)] = inst_6426);

return statearr_6443;
})();
var statearr_6444_6488 = state_6433__$1;
(statearr_6444_6488[(2)] = null);

(statearr_6444_6488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (13))){
var inst_6388 = (state_6433[(10)]);
var inst_6390 = cljs.core.chunked_seq_QMARK_.call(null,inst_6388);
var state_6433__$1 = state_6433;
if(inst_6390){
var statearr_6445_6489 = state_6433__$1;
(statearr_6445_6489[(1)] = (16));

} else {
var statearr_6446_6490 = state_6433__$1;
(statearr_6446_6490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (22))){
var inst_6418 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
if(cljs.core.truth_(inst_6418)){
var statearr_6447_6491 = state_6433__$1;
(statearr_6447_6491[(1)] = (23));

} else {
var statearr_6448_6492 = state_6433__$1;
(statearr_6448_6492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (6))){
var inst_6412 = (state_6433[(7)]);
var inst_6414 = (state_6433[(11)]);
var inst_6364 = (state_6433[(8)]);
var inst_6412__$1 = topic_fn.call(null,inst_6364);
var inst_6413 = cljs.core.deref.call(null,mults);
var inst_6414__$1 = cljs.core.get.call(null,inst_6413,inst_6412__$1);
var state_6433__$1 = (function (){var statearr_6449 = state_6433;
(statearr_6449[(7)] = inst_6412__$1);

(statearr_6449[(11)] = inst_6414__$1);

return statearr_6449;
})();
if(cljs.core.truth_(inst_6414__$1)){
var statearr_6450_6493 = state_6433__$1;
(statearr_6450_6493[(1)] = (19));

} else {
var statearr_6451_6494 = state_6433__$1;
(statearr_6451_6494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (25))){
var inst_6423 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
var statearr_6452_6495 = state_6433__$1;
(statearr_6452_6495[(2)] = inst_6423);

(statearr_6452_6495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (17))){
var inst_6388 = (state_6433[(10)]);
var inst_6397 = cljs.core.first.call(null,inst_6388);
var inst_6398 = cljs.core.async.muxch_STAR_.call(null,inst_6397);
var inst_6399 = cljs.core.async.close_BANG_.call(null,inst_6398);
var inst_6400 = cljs.core.next.call(null,inst_6388);
var inst_6374 = inst_6400;
var inst_6375 = null;
var inst_6376 = (0);
var inst_6377 = (0);
var state_6433__$1 = (function (){var statearr_6453 = state_6433;
(statearr_6453[(12)] = inst_6375);

(statearr_6453[(13)] = inst_6376);

(statearr_6453[(14)] = inst_6399);

(statearr_6453[(15)] = inst_6377);

(statearr_6453[(16)] = inst_6374);

return statearr_6453;
})();
var statearr_6454_6496 = state_6433__$1;
(statearr_6454_6496[(2)] = null);

(statearr_6454_6496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (3))){
var inst_6431 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6433__$1,inst_6431);
} else {
if((state_val_6434 === (12))){
var inst_6408 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
var statearr_6455_6497 = state_6433__$1;
(statearr_6455_6497[(2)] = inst_6408);

(statearr_6455_6497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (2))){
var state_6433__$1 = state_6433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6433__$1,(4),ch);
} else {
if((state_val_6434 === (23))){
var state_6433__$1 = state_6433;
var statearr_6456_6498 = state_6433__$1;
(statearr_6456_6498[(2)] = null);

(statearr_6456_6498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (19))){
var inst_6414 = (state_6433[(11)]);
var inst_6364 = (state_6433[(8)]);
var inst_6416 = cljs.core.async.muxch_STAR_.call(null,inst_6414);
var state_6433__$1 = state_6433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6433__$1,(22),inst_6416,inst_6364);
} else {
if((state_val_6434 === (11))){
var inst_6388 = (state_6433[(10)]);
var inst_6374 = (state_6433[(16)]);
var inst_6388__$1 = cljs.core.seq.call(null,inst_6374);
var state_6433__$1 = (function (){var statearr_6457 = state_6433;
(statearr_6457[(10)] = inst_6388__$1);

return statearr_6457;
})();
if(inst_6388__$1){
var statearr_6458_6499 = state_6433__$1;
(statearr_6458_6499[(1)] = (13));

} else {
var statearr_6459_6500 = state_6433__$1;
(statearr_6459_6500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (9))){
var inst_6410 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
var statearr_6460_6501 = state_6433__$1;
(statearr_6460_6501[(2)] = inst_6410);

(statearr_6460_6501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (5))){
var inst_6371 = cljs.core.deref.call(null,mults);
var inst_6372 = cljs.core.vals.call(null,inst_6371);
var inst_6373 = cljs.core.seq.call(null,inst_6372);
var inst_6374 = inst_6373;
var inst_6375 = null;
var inst_6376 = (0);
var inst_6377 = (0);
var state_6433__$1 = (function (){var statearr_6461 = state_6433;
(statearr_6461[(12)] = inst_6375);

(statearr_6461[(13)] = inst_6376);

(statearr_6461[(15)] = inst_6377);

(statearr_6461[(16)] = inst_6374);

return statearr_6461;
})();
var statearr_6462_6502 = state_6433__$1;
(statearr_6462_6502[(2)] = null);

(statearr_6462_6502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (14))){
var state_6433__$1 = state_6433;
var statearr_6466_6503 = state_6433__$1;
(statearr_6466_6503[(2)] = null);

(statearr_6466_6503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (16))){
var inst_6388 = (state_6433[(10)]);
var inst_6392 = cljs.core.chunk_first.call(null,inst_6388);
var inst_6393 = cljs.core.chunk_rest.call(null,inst_6388);
var inst_6394 = cljs.core.count.call(null,inst_6392);
var inst_6374 = inst_6393;
var inst_6375 = inst_6392;
var inst_6376 = inst_6394;
var inst_6377 = (0);
var state_6433__$1 = (function (){var statearr_6467 = state_6433;
(statearr_6467[(12)] = inst_6375);

(statearr_6467[(13)] = inst_6376);

(statearr_6467[(15)] = inst_6377);

(statearr_6467[(16)] = inst_6374);

return statearr_6467;
})();
var statearr_6468_6504 = state_6433__$1;
(statearr_6468_6504[(2)] = null);

(statearr_6468_6504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (10))){
var inst_6375 = (state_6433[(12)]);
var inst_6376 = (state_6433[(13)]);
var inst_6377 = (state_6433[(15)]);
var inst_6374 = (state_6433[(16)]);
var inst_6382 = cljs.core._nth.call(null,inst_6375,inst_6377);
var inst_6383 = cljs.core.async.muxch_STAR_.call(null,inst_6382);
var inst_6384 = cljs.core.async.close_BANG_.call(null,inst_6383);
var inst_6385 = (inst_6377 + (1));
var tmp6463 = inst_6375;
var tmp6464 = inst_6376;
var tmp6465 = inst_6374;
var inst_6374__$1 = tmp6465;
var inst_6375__$1 = tmp6463;
var inst_6376__$1 = tmp6464;
var inst_6377__$1 = inst_6385;
var state_6433__$1 = (function (){var statearr_6469 = state_6433;
(statearr_6469[(12)] = inst_6375__$1);

(statearr_6469[(13)] = inst_6376__$1);

(statearr_6469[(15)] = inst_6377__$1);

(statearr_6469[(16)] = inst_6374__$1);

(statearr_6469[(17)] = inst_6384);

return statearr_6469;
})();
var statearr_6470_6505 = state_6433__$1;
(statearr_6470_6505[(2)] = null);

(statearr_6470_6505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (18))){
var inst_6403 = (state_6433[(2)]);
var state_6433__$1 = state_6433;
var statearr_6471_6506 = state_6433__$1;
(statearr_6471_6506[(2)] = inst_6403);

(statearr_6471_6506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6434 === (8))){
var inst_6376 = (state_6433[(13)]);
var inst_6377 = (state_6433[(15)]);
var inst_6379 = (inst_6377 < inst_6376);
var inst_6380 = inst_6379;
var state_6433__$1 = state_6433;
if(cljs.core.truth_(inst_6380)){
var statearr_6472_6507 = state_6433__$1;
(statearr_6472_6507[(1)] = (10));

} else {
var statearr_6473_6508 = state_6433__$1;
(statearr_6473_6508[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6480,mults,ensure_mult,p))
;
return ((function (switch__3180__auto__,c__3305__auto___6480,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_6474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6474[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_6474[(1)] = (1));

return statearr_6474;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_6433){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6475){var ex__3184__auto__ = e6475;
var statearr_6476_6509 = state_6433;
(statearr_6476_6509[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6433[(4)]))){
var statearr_6477_6510 = state_6433;
(statearr_6477_6510[(1)] = cljs.core.first.call(null,(state_6433[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6511 = state_6433;
state_6433 = G__6511;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_6433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_6433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6480,mults,ensure_mult,p))
})();
var state__3307__auto__ = (function (){var statearr_6478 = f__3306__auto__.call(null);
(statearr_6478[(6)] = c__3305__auto___6480);

return statearr_6478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6480,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__6513 = arguments.length;
switch (G__6513) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__6516 = arguments.length;
switch (G__6516) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__6519 = arguments.length;
switch (G__6519) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__3305__auto___6597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_6562){
var state_val_6563 = (state_6562[(1)]);
if((state_val_6563 === (7))){
var state_6562__$1 = state_6562;
var statearr_6564_6598 = state_6562__$1;
(statearr_6564_6598[(2)] = null);

(statearr_6564_6598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (1))){
var state_6562__$1 = state_6562;
var statearr_6565_6599 = state_6562__$1;
(statearr_6565_6599[(2)] = null);

(statearr_6565_6599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (4))){
var inst_6523 = (state_6562[(7)]);
var inst_6522 = (state_6562[(8)]);
var inst_6525 = (inst_6523 < inst_6522);
var state_6562__$1 = state_6562;
if(cljs.core.truth_(inst_6525)){
var statearr_6566_6600 = state_6562__$1;
(statearr_6566_6600[(1)] = (6));

} else {
var statearr_6567_6601 = state_6562__$1;
(statearr_6567_6601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (15))){
var inst_6548 = (state_6562[(9)]);
var inst_6553 = cljs.core.apply.call(null,f,inst_6548);
var state_6562__$1 = state_6562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6562__$1,(17),out,inst_6553);
} else {
if((state_val_6563 === (13))){
var inst_6548 = (state_6562[(9)]);
var inst_6548__$1 = (state_6562[(2)]);
var inst_6549 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_6548__$1);
var state_6562__$1 = (function (){var statearr_6568 = state_6562;
(statearr_6568[(9)] = inst_6548__$1);

return statearr_6568;
})();
if(cljs.core.truth_(inst_6549)){
var statearr_6569_6602 = state_6562__$1;
(statearr_6569_6602[(1)] = (14));

} else {
var statearr_6570_6603 = state_6562__$1;
(statearr_6570_6603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (6))){
var state_6562__$1 = state_6562;
var statearr_6571_6604 = state_6562__$1;
(statearr_6571_6604[(2)] = null);

(statearr_6571_6604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (17))){
var inst_6555 = (state_6562[(2)]);
var state_6562__$1 = (function (){var statearr_6573 = state_6562;
(statearr_6573[(10)] = inst_6555);

return statearr_6573;
})();
var statearr_6574_6605 = state_6562__$1;
(statearr_6574_6605[(2)] = null);

(statearr_6574_6605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (3))){
var inst_6560 = (state_6562[(2)]);
var state_6562__$1 = state_6562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6562__$1,inst_6560);
} else {
if((state_val_6563 === (12))){
var _ = (function (){var statearr_6575 = state_6562;
(statearr_6575[(4)] = cljs.core.rest.call(null,(state_6562[(4)])));

return statearr_6575;
})();
var state_6562__$1 = state_6562;
var ex6572 = (state_6562__$1[(2)]);
var statearr_6576_6606 = state_6562__$1;
(statearr_6576_6606[(5)] = ex6572);


if((ex6572 instanceof Object)){
var statearr_6577_6607 = state_6562__$1;
(statearr_6577_6607[(1)] = (11));

(statearr_6577_6607[(5)] = null);

} else {
throw ex6572;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (2))){
var inst_6521 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_6522 = cnt;
var inst_6523 = (0);
var state_6562__$1 = (function (){var statearr_6578 = state_6562;
(statearr_6578[(7)] = inst_6523);

(statearr_6578[(11)] = inst_6521);

(statearr_6578[(8)] = inst_6522);

return statearr_6578;
})();
var statearr_6579_6608 = state_6562__$1;
(statearr_6579_6608[(2)] = null);

(statearr_6579_6608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (11))){
var inst_6527 = (state_6562[(2)]);
var inst_6528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_6562__$1 = (function (){var statearr_6580 = state_6562;
(statearr_6580[(12)] = inst_6527);

return statearr_6580;
})();
var statearr_6581_6609 = state_6562__$1;
(statearr_6581_6609[(2)] = inst_6528);

(statearr_6581_6609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (9))){
var inst_6523 = (state_6562[(7)]);
var _ = (function (){var statearr_6582 = state_6562;
(statearr_6582[(4)] = cljs.core.cons.call(null,(12),(state_6562[(4)])));

return statearr_6582;
})();
var inst_6534 = chs__$1.call(null,inst_6523);
var inst_6535 = done.call(null,inst_6523);
var inst_6536 = cljs.core.async.take_BANG_.call(null,inst_6534,inst_6535);
var ___$1 = (function (){var statearr_6583 = state_6562;
(statearr_6583[(4)] = cljs.core.rest.call(null,(state_6562[(4)])));

return statearr_6583;
})();
var state_6562__$1 = state_6562;
var statearr_6584_6610 = state_6562__$1;
(statearr_6584_6610[(2)] = inst_6536);

(statearr_6584_6610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (5))){
var inst_6546 = (state_6562[(2)]);
var state_6562__$1 = (function (){var statearr_6585 = state_6562;
(statearr_6585[(13)] = inst_6546);

return statearr_6585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6562__$1,(13),dchan);
} else {
if((state_val_6563 === (14))){
var inst_6551 = cljs.core.async.close_BANG_.call(null,out);
var state_6562__$1 = state_6562;
var statearr_6586_6611 = state_6562__$1;
(statearr_6586_6611[(2)] = inst_6551);

(statearr_6586_6611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (16))){
var inst_6558 = (state_6562[(2)]);
var state_6562__$1 = state_6562;
var statearr_6587_6612 = state_6562__$1;
(statearr_6587_6612[(2)] = inst_6558);

(statearr_6587_6612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (10))){
var inst_6523 = (state_6562[(7)]);
var inst_6539 = (state_6562[(2)]);
var inst_6540 = (inst_6523 + (1));
var inst_6523__$1 = inst_6540;
var state_6562__$1 = (function (){var statearr_6588 = state_6562;
(statearr_6588[(7)] = inst_6523__$1);

(statearr_6588[(14)] = inst_6539);

return statearr_6588;
})();
var statearr_6589_6613 = state_6562__$1;
(statearr_6589_6613[(2)] = null);

(statearr_6589_6613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6563 === (8))){
var inst_6544 = (state_6562[(2)]);
var state_6562__$1 = state_6562;
var statearr_6590_6614 = state_6562__$1;
(statearr_6590_6614[(2)] = inst_6544);

(statearr_6590_6614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6597,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3180__auto__,c__3305__auto___6597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_6591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6591[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_6591[(1)] = (1));

return statearr_6591;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_6562){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6592){var ex__3184__auto__ = e6592;
var statearr_6593_6615 = state_6562;
(statearr_6593_6615[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6562[(4)]))){
var statearr_6594_6616 = state_6562;
(statearr_6594_6616[(1)] = cljs.core.first.call(null,(state_6562[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6617 = state_6562;
state_6562 = G__6617;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_6562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_6562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6597,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3307__auto__ = (function (){var statearr_6595 = f__3306__auto__.call(null);
(statearr_6595[(6)] = c__3305__auto___6597);

return statearr_6595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6597,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__6620 = arguments.length;
switch (G__6620) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3305__auto___6675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6675,out){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6675,out){
return (function (state_6652){
var state_val_6653 = (state_6652[(1)]);
if((state_val_6653 === (7))){
var inst_6632 = (state_6652[(7)]);
var inst_6631 = (state_6652[(8)]);
var inst_6631__$1 = (state_6652[(2)]);
var inst_6632__$1 = cljs.core.nth.call(null,inst_6631__$1,(0),null);
var inst_6633 = cljs.core.nth.call(null,inst_6631__$1,(1),null);
var inst_6634 = (inst_6632__$1 == null);
var state_6652__$1 = (function (){var statearr_6654 = state_6652;
(statearr_6654[(7)] = inst_6632__$1);

(statearr_6654[(9)] = inst_6633);

(statearr_6654[(8)] = inst_6631__$1);

return statearr_6654;
})();
if(cljs.core.truth_(inst_6634)){
var statearr_6655_6676 = state_6652__$1;
(statearr_6655_6676[(1)] = (8));

} else {
var statearr_6656_6677 = state_6652__$1;
(statearr_6656_6677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (1))){
var inst_6621 = cljs.core.vec.call(null,chs);
var inst_6622 = inst_6621;
var state_6652__$1 = (function (){var statearr_6657 = state_6652;
(statearr_6657[(10)] = inst_6622);

return statearr_6657;
})();
var statearr_6658_6678 = state_6652__$1;
(statearr_6658_6678[(2)] = null);

(statearr_6658_6678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (4))){
var inst_6622 = (state_6652[(10)]);
var state_6652__$1 = state_6652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6652__$1,(7),inst_6622);
} else {
if((state_val_6653 === (6))){
var inst_6648 = (state_6652[(2)]);
var state_6652__$1 = state_6652;
var statearr_6659_6679 = state_6652__$1;
(statearr_6659_6679[(2)] = inst_6648);

(statearr_6659_6679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (3))){
var inst_6650 = (state_6652[(2)]);
var state_6652__$1 = state_6652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6652__$1,inst_6650);
} else {
if((state_val_6653 === (2))){
var inst_6622 = (state_6652[(10)]);
var inst_6624 = cljs.core.count.call(null,inst_6622);
var inst_6625 = (inst_6624 > (0));
var state_6652__$1 = state_6652;
if(cljs.core.truth_(inst_6625)){
var statearr_6661_6680 = state_6652__$1;
(statearr_6661_6680[(1)] = (4));

} else {
var statearr_6662_6681 = state_6652__$1;
(statearr_6662_6681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (11))){
var inst_6622 = (state_6652[(10)]);
var inst_6641 = (state_6652[(2)]);
var tmp6660 = inst_6622;
var inst_6622__$1 = tmp6660;
var state_6652__$1 = (function (){var statearr_6663 = state_6652;
(statearr_6663[(10)] = inst_6622__$1);

(statearr_6663[(11)] = inst_6641);

return statearr_6663;
})();
var statearr_6664_6682 = state_6652__$1;
(statearr_6664_6682[(2)] = null);

(statearr_6664_6682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (9))){
var inst_6632 = (state_6652[(7)]);
var state_6652__$1 = state_6652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6652__$1,(11),out,inst_6632);
} else {
if((state_val_6653 === (5))){
var inst_6646 = cljs.core.async.close_BANG_.call(null,out);
var state_6652__$1 = state_6652;
var statearr_6665_6683 = state_6652__$1;
(statearr_6665_6683[(2)] = inst_6646);

(statearr_6665_6683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (10))){
var inst_6644 = (state_6652[(2)]);
var state_6652__$1 = state_6652;
var statearr_6666_6684 = state_6652__$1;
(statearr_6666_6684[(2)] = inst_6644);

(statearr_6666_6684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (8))){
var inst_6622 = (state_6652[(10)]);
var inst_6632 = (state_6652[(7)]);
var inst_6633 = (state_6652[(9)]);
var inst_6631 = (state_6652[(8)]);
var inst_6636 = (function (){var cs = inst_6622;
var vec__6627 = inst_6631;
var v = inst_6632;
var c = inst_6633;
return ((function (cs,vec__6627,v,c,inst_6622,inst_6632,inst_6633,inst_6631,state_val_6653,c__3305__auto___6675,out){
return (function (p1__6618_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__6618_SHARP_);
});
;})(cs,vec__6627,v,c,inst_6622,inst_6632,inst_6633,inst_6631,state_val_6653,c__3305__auto___6675,out))
})();
var inst_6637 = cljs.core.filterv.call(null,inst_6636,inst_6622);
var inst_6622__$1 = inst_6637;
var state_6652__$1 = (function (){var statearr_6667 = state_6652;
(statearr_6667[(10)] = inst_6622__$1);

return statearr_6667;
})();
var statearr_6668_6685 = state_6652__$1;
(statearr_6668_6685[(2)] = null);

(statearr_6668_6685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6675,out))
;
return ((function (switch__3180__auto__,c__3305__auto___6675,out){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_6669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6669[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_6669[(1)] = (1));

return statearr_6669;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_6652){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6670){var ex__3184__auto__ = e6670;
var statearr_6671_6686 = state_6652;
(statearr_6671_6686[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6652[(4)]))){
var statearr_6672_6687 = state_6652;
(statearr_6672_6687[(1)] = cljs.core.first.call(null,(state_6652[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6688 = state_6652;
state_6652 = G__6688;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_6652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_6652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6675,out))
})();
var state__3307__auto__ = (function (){var statearr_6673 = f__3306__auto__.call(null);
(statearr_6673[(6)] = c__3305__auto___6675);

return statearr_6673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6675,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__6690 = arguments.length;
switch (G__6690) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3305__auto___6736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6736,out){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6736,out){
return (function (state_6714){
var state_val_6715 = (state_6714[(1)]);
if((state_val_6715 === (7))){
var inst_6696 = (state_6714[(7)]);
var inst_6696__$1 = (state_6714[(2)]);
var inst_6697 = (inst_6696__$1 == null);
var inst_6698 = cljs.core.not.call(null,inst_6697);
var state_6714__$1 = (function (){var statearr_6716 = state_6714;
(statearr_6716[(7)] = inst_6696__$1);

return statearr_6716;
})();
if(inst_6698){
var statearr_6717_6737 = state_6714__$1;
(statearr_6717_6737[(1)] = (8));

} else {
var statearr_6718_6738 = state_6714__$1;
(statearr_6718_6738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (1))){
var inst_6691 = (0);
var state_6714__$1 = (function (){var statearr_6719 = state_6714;
(statearr_6719[(8)] = inst_6691);

return statearr_6719;
})();
var statearr_6720_6739 = state_6714__$1;
(statearr_6720_6739[(2)] = null);

(statearr_6720_6739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (4))){
var state_6714__$1 = state_6714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6714__$1,(7),ch);
} else {
if((state_val_6715 === (6))){
var inst_6709 = (state_6714[(2)]);
var state_6714__$1 = state_6714;
var statearr_6721_6740 = state_6714__$1;
(statearr_6721_6740[(2)] = inst_6709);

(statearr_6721_6740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (3))){
var inst_6711 = (state_6714[(2)]);
var inst_6712 = cljs.core.async.close_BANG_.call(null,out);
var state_6714__$1 = (function (){var statearr_6722 = state_6714;
(statearr_6722[(9)] = inst_6711);

return statearr_6722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6714__$1,inst_6712);
} else {
if((state_val_6715 === (2))){
var inst_6691 = (state_6714[(8)]);
var inst_6693 = (inst_6691 < n);
var state_6714__$1 = state_6714;
if(cljs.core.truth_(inst_6693)){
var statearr_6723_6741 = state_6714__$1;
(statearr_6723_6741[(1)] = (4));

} else {
var statearr_6724_6742 = state_6714__$1;
(statearr_6724_6742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (11))){
var inst_6691 = (state_6714[(8)]);
var inst_6701 = (state_6714[(2)]);
var inst_6702 = (inst_6691 + (1));
var inst_6691__$1 = inst_6702;
var state_6714__$1 = (function (){var statearr_6725 = state_6714;
(statearr_6725[(10)] = inst_6701);

(statearr_6725[(8)] = inst_6691__$1);

return statearr_6725;
})();
var statearr_6726_6743 = state_6714__$1;
(statearr_6726_6743[(2)] = null);

(statearr_6726_6743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (9))){
var state_6714__$1 = state_6714;
var statearr_6727_6744 = state_6714__$1;
(statearr_6727_6744[(2)] = null);

(statearr_6727_6744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (5))){
var state_6714__$1 = state_6714;
var statearr_6728_6745 = state_6714__$1;
(statearr_6728_6745[(2)] = null);

(statearr_6728_6745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (10))){
var inst_6706 = (state_6714[(2)]);
var state_6714__$1 = state_6714;
var statearr_6729_6746 = state_6714__$1;
(statearr_6729_6746[(2)] = inst_6706);

(statearr_6729_6746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6715 === (8))){
var inst_6696 = (state_6714[(7)]);
var state_6714__$1 = state_6714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6714__$1,(11),out,inst_6696);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6736,out))
;
return ((function (switch__3180__auto__,c__3305__auto___6736,out){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_6730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6730[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_6730[(1)] = (1));

return statearr_6730;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_6714){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6731){var ex__3184__auto__ = e6731;
var statearr_6732_6747 = state_6714;
(statearr_6732_6747[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6714[(4)]))){
var statearr_6733_6748 = state_6714;
(statearr_6733_6748[(1)] = cljs.core.first.call(null,(state_6714[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6749 = state_6714;
state_6714 = G__6749;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_6714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_6714);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6736,out))
})();
var state__3307__auto__ = (function (){var statearr_6734 = f__3306__auto__.call(null);
(statearr_6734[(6)] = c__3305__auto___6736);

return statearr_6734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6736,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async6751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6751 = (function (f,ch,meta6752){
this.f = f;
this.ch = ch;
this.meta6752 = meta6752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6753,meta6752__$1){
var self__ = this;
var _6753__$1 = this;
return (new cljs.core.async.t_cljs$core$async6751(self__.f,self__.ch,meta6752__$1));
});

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6753){
var self__ = this;
var _6753__$1 = this;
return self__.meta6752;
});

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async6754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6754 = (function (f,ch,meta6752,_,fn1,meta6755){
this.f = f;
this.ch = ch;
this.meta6752 = meta6752;
this._ = _;
this.fn1 = fn1;
this.meta6755 = meta6755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_6756,meta6755__$1){
var self__ = this;
var _6756__$1 = this;
return (new cljs.core.async.t_cljs$core$async6754(self__.f,self__.ch,self__.meta6752,self__._,self__.fn1,meta6755__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async6754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_6756){
var self__ = this;
var _6756__$1 = this;
return self__.meta6755;
});})(___$1))
;

cljs.core.async.t_cljs$core$async6754.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async6754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async6754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__6750_SHARP_){
return f1.call(null,(((p1__6750_SHARP_ == null))?null:self__.f.call(null,p1__6750_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async6754.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6752","meta6752",-1608711532,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async6751","cljs.core.async/t_cljs$core$async6751",-1494460588,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6755","meta6755",-1322431451,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async6754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6754";

cljs.core.async.t_cljs$core$async6754.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6754");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6754.
 */
cljs.core.async.__GT_t_cljs$core$async6754 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6754(f__$1,ch__$1,meta6752__$1,___$2,fn1__$1,meta6755){
return (new cljs.core.async.t_cljs$core$async6754(f__$1,ch__$1,meta6752__$1,___$2,fn1__$1,meta6755));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async6754(self__.f,self__.ch,self__.meta6752,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3909__auto__ = ret;
if(cljs.core.truth_(and__3909__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3909__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async6751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6752","meta6752",-1608711532,null)], null);
});

cljs.core.async.t_cljs$core$async6751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6751";

cljs.core.async.t_cljs$core$async6751.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6751");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6751.
 */
cljs.core.async.__GT_t_cljs$core$async6751 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6751(f__$1,ch__$1,meta6752){
return (new cljs.core.async.t_cljs$core$async6751(f__$1,ch__$1,meta6752));
});

}

return (new cljs.core.async.t_cljs$core$async6751(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async6757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6757 = (function (f,ch,meta6758){
this.f = f;
this.ch = ch;
this.meta6758 = meta6758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6759,meta6758__$1){
var self__ = this;
var _6759__$1 = this;
return (new cljs.core.async.t_cljs$core$async6757(self__.f,self__.ch,meta6758__$1));
});

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6759){
var self__ = this;
var _6759__$1 = this;
return self__.meta6758;
});

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async6757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6758","meta6758",-1373512829,null)], null);
});

cljs.core.async.t_cljs$core$async6757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6757";

cljs.core.async.t_cljs$core$async6757.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6757");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6757.
 */
cljs.core.async.__GT_t_cljs$core$async6757 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6757(f__$1,ch__$1,meta6758){
return (new cljs.core.async.t_cljs$core$async6757(f__$1,ch__$1,meta6758));
});

}

return (new cljs.core.async.t_cljs$core$async6757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async6760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6760 = (function (p,ch,meta6761){
this.p = p;
this.ch = ch;
this.meta6761 = meta6761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6762,meta6761__$1){
var self__ = this;
var _6762__$1 = this;
return (new cljs.core.async.t_cljs$core$async6760(self__.p,self__.ch,meta6761__$1));
});

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6762){
var self__ = this;
var _6762__$1 = this;
return self__.meta6761;
});

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async6760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6761","meta6761",-1196490527,null)], null);
});

cljs.core.async.t_cljs$core$async6760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6760";

cljs.core.async.t_cljs$core$async6760.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6760");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6760.
 */
cljs.core.async.__GT_t_cljs$core$async6760 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6760(p__$1,ch__$1,meta6761){
return (new cljs.core.async.t_cljs$core$async6760(p__$1,ch__$1,meta6761));
});

}

return (new cljs.core.async.t_cljs$core$async6760(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__6764 = arguments.length;
switch (G__6764) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3305__auto___6805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___6805,out){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___6805,out){
return (function (state_6785){
var state_val_6786 = (state_6785[(1)]);
if((state_val_6786 === (7))){
var inst_6781 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
var statearr_6787_6806 = state_6785__$1;
(statearr_6787_6806[(2)] = inst_6781);

(statearr_6787_6806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (1))){
var state_6785__$1 = state_6785;
var statearr_6788_6807 = state_6785__$1;
(statearr_6788_6807[(2)] = null);

(statearr_6788_6807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (4))){
var inst_6767 = (state_6785[(7)]);
var inst_6767__$1 = (state_6785[(2)]);
var inst_6768 = (inst_6767__$1 == null);
var state_6785__$1 = (function (){var statearr_6789 = state_6785;
(statearr_6789[(7)] = inst_6767__$1);

return statearr_6789;
})();
if(cljs.core.truth_(inst_6768)){
var statearr_6790_6808 = state_6785__$1;
(statearr_6790_6808[(1)] = (5));

} else {
var statearr_6791_6809 = state_6785__$1;
(statearr_6791_6809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (6))){
var inst_6767 = (state_6785[(7)]);
var inst_6772 = p.call(null,inst_6767);
var state_6785__$1 = state_6785;
if(cljs.core.truth_(inst_6772)){
var statearr_6792_6810 = state_6785__$1;
(statearr_6792_6810[(1)] = (8));

} else {
var statearr_6793_6811 = state_6785__$1;
(statearr_6793_6811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (3))){
var inst_6783 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6785__$1,inst_6783);
} else {
if((state_val_6786 === (2))){
var state_6785__$1 = state_6785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6785__$1,(4),ch);
} else {
if((state_val_6786 === (11))){
var inst_6775 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
var statearr_6794_6812 = state_6785__$1;
(statearr_6794_6812[(2)] = inst_6775);

(statearr_6794_6812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (9))){
var state_6785__$1 = state_6785;
var statearr_6795_6813 = state_6785__$1;
(statearr_6795_6813[(2)] = null);

(statearr_6795_6813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (5))){
var inst_6770 = cljs.core.async.close_BANG_.call(null,out);
var state_6785__$1 = state_6785;
var statearr_6796_6814 = state_6785__$1;
(statearr_6796_6814[(2)] = inst_6770);

(statearr_6796_6814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (10))){
var inst_6778 = (state_6785[(2)]);
var state_6785__$1 = (function (){var statearr_6797 = state_6785;
(statearr_6797[(8)] = inst_6778);

return statearr_6797;
})();
var statearr_6798_6815 = state_6785__$1;
(statearr_6798_6815[(2)] = null);

(statearr_6798_6815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (8))){
var inst_6767 = (state_6785[(7)]);
var state_6785__$1 = state_6785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6785__$1,(11),out,inst_6767);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___6805,out))
;
return ((function (switch__3180__auto__,c__3305__auto___6805,out){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_6799 = [null,null,null,null,null,null,null,null,null];
(statearr_6799[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_6799[(1)] = (1));

return statearr_6799;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_6785){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6800){var ex__3184__auto__ = e6800;
var statearr_6801_6816 = state_6785;
(statearr_6801_6816[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6785[(4)]))){
var statearr_6802_6817 = state_6785;
(statearr_6802_6817[(1)] = cljs.core.first.call(null,(state_6785[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6818 = state_6785;
state_6785 = G__6818;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_6785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_6785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___6805,out))
})();
var state__3307__auto__ = (function (){var statearr_6803 = f__3306__auto__.call(null);
(statearr_6803[(6)] = c__3305__auto___6805);

return statearr_6803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___6805,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__6820 = arguments.length;
switch (G__6820) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto__){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto__){
return (function (state_6883){
var state_val_6884 = (state_6883[(1)]);
if((state_val_6884 === (7))){
var inst_6879 = (state_6883[(2)]);
var state_6883__$1 = state_6883;
var statearr_6885_6924 = state_6883__$1;
(statearr_6885_6924[(2)] = inst_6879);

(statearr_6885_6924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (20))){
var inst_6849 = (state_6883[(7)]);
var inst_6860 = (state_6883[(2)]);
var inst_6861 = cljs.core.next.call(null,inst_6849);
var inst_6835 = inst_6861;
var inst_6836 = null;
var inst_6837 = (0);
var inst_6838 = (0);
var state_6883__$1 = (function (){var statearr_6886 = state_6883;
(statearr_6886[(8)] = inst_6835);

(statearr_6886[(9)] = inst_6837);

(statearr_6886[(10)] = inst_6838);

(statearr_6886[(11)] = inst_6836);

(statearr_6886[(12)] = inst_6860);

return statearr_6886;
})();
var statearr_6887_6925 = state_6883__$1;
(statearr_6887_6925[(2)] = null);

(statearr_6887_6925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (1))){
var state_6883__$1 = state_6883;
var statearr_6888_6926 = state_6883__$1;
(statearr_6888_6926[(2)] = null);

(statearr_6888_6926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (4))){
var inst_6824 = (state_6883[(13)]);
var inst_6824__$1 = (state_6883[(2)]);
var inst_6825 = (inst_6824__$1 == null);
var state_6883__$1 = (function (){var statearr_6889 = state_6883;
(statearr_6889[(13)] = inst_6824__$1);

return statearr_6889;
})();
if(cljs.core.truth_(inst_6825)){
var statearr_6890_6927 = state_6883__$1;
(statearr_6890_6927[(1)] = (5));

} else {
var statearr_6891_6928 = state_6883__$1;
(statearr_6891_6928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (15))){
var state_6883__$1 = state_6883;
var statearr_6895_6929 = state_6883__$1;
(statearr_6895_6929[(2)] = null);

(statearr_6895_6929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (21))){
var state_6883__$1 = state_6883;
var statearr_6896_6930 = state_6883__$1;
(statearr_6896_6930[(2)] = null);

(statearr_6896_6930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (13))){
var inst_6835 = (state_6883[(8)]);
var inst_6837 = (state_6883[(9)]);
var inst_6838 = (state_6883[(10)]);
var inst_6836 = (state_6883[(11)]);
var inst_6845 = (state_6883[(2)]);
var inst_6846 = (inst_6838 + (1));
var tmp6892 = inst_6835;
var tmp6893 = inst_6837;
var tmp6894 = inst_6836;
var inst_6835__$1 = tmp6892;
var inst_6836__$1 = tmp6894;
var inst_6837__$1 = tmp6893;
var inst_6838__$1 = inst_6846;
var state_6883__$1 = (function (){var statearr_6897 = state_6883;
(statearr_6897[(8)] = inst_6835__$1);

(statearr_6897[(9)] = inst_6837__$1);

(statearr_6897[(14)] = inst_6845);

(statearr_6897[(10)] = inst_6838__$1);

(statearr_6897[(11)] = inst_6836__$1);

return statearr_6897;
})();
var statearr_6898_6931 = state_6883__$1;
(statearr_6898_6931[(2)] = null);

(statearr_6898_6931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (22))){
var state_6883__$1 = state_6883;
var statearr_6899_6932 = state_6883__$1;
(statearr_6899_6932[(2)] = null);

(statearr_6899_6932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (6))){
var inst_6824 = (state_6883[(13)]);
var inst_6833 = f.call(null,inst_6824);
var inst_6834 = cljs.core.seq.call(null,inst_6833);
var inst_6835 = inst_6834;
var inst_6836 = null;
var inst_6837 = (0);
var inst_6838 = (0);
var state_6883__$1 = (function (){var statearr_6900 = state_6883;
(statearr_6900[(8)] = inst_6835);

(statearr_6900[(9)] = inst_6837);

(statearr_6900[(10)] = inst_6838);

(statearr_6900[(11)] = inst_6836);

return statearr_6900;
})();
var statearr_6901_6933 = state_6883__$1;
(statearr_6901_6933[(2)] = null);

(statearr_6901_6933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (17))){
var inst_6849 = (state_6883[(7)]);
var inst_6853 = cljs.core.chunk_first.call(null,inst_6849);
var inst_6854 = cljs.core.chunk_rest.call(null,inst_6849);
var inst_6855 = cljs.core.count.call(null,inst_6853);
var inst_6835 = inst_6854;
var inst_6836 = inst_6853;
var inst_6837 = inst_6855;
var inst_6838 = (0);
var state_6883__$1 = (function (){var statearr_6902 = state_6883;
(statearr_6902[(8)] = inst_6835);

(statearr_6902[(9)] = inst_6837);

(statearr_6902[(10)] = inst_6838);

(statearr_6902[(11)] = inst_6836);

return statearr_6902;
})();
var statearr_6903_6934 = state_6883__$1;
(statearr_6903_6934[(2)] = null);

(statearr_6903_6934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (3))){
var inst_6881 = (state_6883[(2)]);
var state_6883__$1 = state_6883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6883__$1,inst_6881);
} else {
if((state_val_6884 === (12))){
var inst_6869 = (state_6883[(2)]);
var state_6883__$1 = state_6883;
var statearr_6904_6935 = state_6883__$1;
(statearr_6904_6935[(2)] = inst_6869);

(statearr_6904_6935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (2))){
var state_6883__$1 = state_6883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6883__$1,(4),in$);
} else {
if((state_val_6884 === (23))){
var inst_6877 = (state_6883[(2)]);
var state_6883__$1 = state_6883;
var statearr_6905_6936 = state_6883__$1;
(statearr_6905_6936[(2)] = inst_6877);

(statearr_6905_6936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (19))){
var inst_6864 = (state_6883[(2)]);
var state_6883__$1 = state_6883;
var statearr_6906_6937 = state_6883__$1;
(statearr_6906_6937[(2)] = inst_6864);

(statearr_6906_6937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (11))){
var inst_6835 = (state_6883[(8)]);
var inst_6849 = (state_6883[(7)]);
var inst_6849__$1 = cljs.core.seq.call(null,inst_6835);
var state_6883__$1 = (function (){var statearr_6907 = state_6883;
(statearr_6907[(7)] = inst_6849__$1);

return statearr_6907;
})();
if(inst_6849__$1){
var statearr_6908_6938 = state_6883__$1;
(statearr_6908_6938[(1)] = (14));

} else {
var statearr_6909_6939 = state_6883__$1;
(statearr_6909_6939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (9))){
var inst_6871 = (state_6883[(2)]);
var inst_6872 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6883__$1 = (function (){var statearr_6910 = state_6883;
(statearr_6910[(15)] = inst_6871);

return statearr_6910;
})();
if(cljs.core.truth_(inst_6872)){
var statearr_6911_6940 = state_6883__$1;
(statearr_6911_6940[(1)] = (21));

} else {
var statearr_6912_6941 = state_6883__$1;
(statearr_6912_6941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (5))){
var inst_6827 = cljs.core.async.close_BANG_.call(null,out);
var state_6883__$1 = state_6883;
var statearr_6913_6942 = state_6883__$1;
(statearr_6913_6942[(2)] = inst_6827);

(statearr_6913_6942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (14))){
var inst_6849 = (state_6883[(7)]);
var inst_6851 = cljs.core.chunked_seq_QMARK_.call(null,inst_6849);
var state_6883__$1 = state_6883;
if(inst_6851){
var statearr_6914_6943 = state_6883__$1;
(statearr_6914_6943[(1)] = (17));

} else {
var statearr_6915_6944 = state_6883__$1;
(statearr_6915_6944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (16))){
var inst_6867 = (state_6883[(2)]);
var state_6883__$1 = state_6883;
var statearr_6916_6945 = state_6883__$1;
(statearr_6916_6945[(2)] = inst_6867);

(statearr_6916_6945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6884 === (10))){
var inst_6838 = (state_6883[(10)]);
var inst_6836 = (state_6883[(11)]);
var inst_6843 = cljs.core._nth.call(null,inst_6836,inst_6838);
var state_6883__$1 = state_6883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6883__$1,(13),out,inst_6843);
} else {
if((state_val_6884 === (18))){
var inst_6849 = (state_6883[(7)]);
var inst_6858 = cljs.core.first.call(null,inst_6849);
var state_6883__$1 = state_6883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6883__$1,(20),out,inst_6858);
} else {
if((state_val_6884 === (8))){
var inst_6837 = (state_6883[(9)]);
var inst_6838 = (state_6883[(10)]);
var inst_6840 = (inst_6838 < inst_6837);
var inst_6841 = inst_6840;
var state_6883__$1 = state_6883;
if(cljs.core.truth_(inst_6841)){
var statearr_6917_6946 = state_6883__$1;
(statearr_6917_6946[(1)] = (10));

} else {
var statearr_6918_6947 = state_6883__$1;
(statearr_6918_6947[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto__))
;
return ((function (switch__3180__auto__,c__3305__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3181__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3181__auto____0 = (function (){
var statearr_6919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6919[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3181__auto__);

(statearr_6919[(1)] = (1));

return statearr_6919;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3181__auto____1 = (function (state_6883){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e6920){var ex__3184__auto__ = e6920;
var statearr_6921_6948 = state_6883;
(statearr_6921_6948[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6883[(4)]))){
var statearr_6922_6949 = state_6883;
(statearr_6922_6949[(1)] = cljs.core.first.call(null,(state_6883[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6950 = state_6883;
state_6883 = G__6950;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3181__auto__ = function(state_6883){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3181__auto____1.call(this,state_6883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3181__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3181__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto__))
})();
var state__3307__auto__ = (function (){var statearr_6923 = f__3306__auto__.call(null);
(statearr_6923[(6)] = c__3305__auto__);

return statearr_6923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto__))
);

return c__3305__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__6952 = arguments.length;
switch (G__6952) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__6955 = arguments.length;
switch (G__6955) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__6958 = arguments.length;
switch (G__6958) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3305__auto___7006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___7006,out){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___7006,out){
return (function (state_6982){
var state_val_6983 = (state_6982[(1)]);
if((state_val_6983 === (7))){
var inst_6977 = (state_6982[(2)]);
var state_6982__$1 = state_6982;
var statearr_6984_7007 = state_6982__$1;
(statearr_6984_7007[(2)] = inst_6977);

(statearr_6984_7007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (1))){
var inst_6959 = null;
var state_6982__$1 = (function (){var statearr_6985 = state_6982;
(statearr_6985[(7)] = inst_6959);

return statearr_6985;
})();
var statearr_6986_7008 = state_6982__$1;
(statearr_6986_7008[(2)] = null);

(statearr_6986_7008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (4))){
var inst_6962 = (state_6982[(8)]);
var inst_6962__$1 = (state_6982[(2)]);
var inst_6963 = (inst_6962__$1 == null);
var inst_6964 = cljs.core.not.call(null,inst_6963);
var state_6982__$1 = (function (){var statearr_6987 = state_6982;
(statearr_6987[(8)] = inst_6962__$1);

return statearr_6987;
})();
if(inst_6964){
var statearr_6988_7009 = state_6982__$1;
(statearr_6988_7009[(1)] = (5));

} else {
var statearr_6989_7010 = state_6982__$1;
(statearr_6989_7010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (6))){
var state_6982__$1 = state_6982;
var statearr_6990_7011 = state_6982__$1;
(statearr_6990_7011[(2)] = null);

(statearr_6990_7011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (3))){
var inst_6979 = (state_6982[(2)]);
var inst_6980 = cljs.core.async.close_BANG_.call(null,out);
var state_6982__$1 = (function (){var statearr_6991 = state_6982;
(statearr_6991[(9)] = inst_6979);

return statearr_6991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6982__$1,inst_6980);
} else {
if((state_val_6983 === (2))){
var state_6982__$1 = state_6982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6982__$1,(4),ch);
} else {
if((state_val_6983 === (11))){
var inst_6962 = (state_6982[(8)]);
var inst_6971 = (state_6982[(2)]);
var inst_6959 = inst_6962;
var state_6982__$1 = (function (){var statearr_6992 = state_6982;
(statearr_6992[(10)] = inst_6971);

(statearr_6992[(7)] = inst_6959);

return statearr_6992;
})();
var statearr_6993_7012 = state_6982__$1;
(statearr_6993_7012[(2)] = null);

(statearr_6993_7012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (9))){
var inst_6962 = (state_6982[(8)]);
var state_6982__$1 = state_6982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6982__$1,(11),out,inst_6962);
} else {
if((state_val_6983 === (5))){
var inst_6959 = (state_6982[(7)]);
var inst_6962 = (state_6982[(8)]);
var inst_6966 = cljs.core._EQ_.call(null,inst_6962,inst_6959);
var state_6982__$1 = state_6982;
if(inst_6966){
var statearr_6995_7013 = state_6982__$1;
(statearr_6995_7013[(1)] = (8));

} else {
var statearr_6996_7014 = state_6982__$1;
(statearr_6996_7014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (10))){
var inst_6974 = (state_6982[(2)]);
var state_6982__$1 = state_6982;
var statearr_6997_7015 = state_6982__$1;
(statearr_6997_7015[(2)] = inst_6974);

(statearr_6997_7015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6983 === (8))){
var inst_6959 = (state_6982[(7)]);
var tmp6994 = inst_6959;
var inst_6959__$1 = tmp6994;
var state_6982__$1 = (function (){var statearr_6998 = state_6982;
(statearr_6998[(7)] = inst_6959__$1);

return statearr_6998;
})();
var statearr_6999_7016 = state_6982__$1;
(statearr_6999_7016[(2)] = null);

(statearr_6999_7016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___7006,out))
;
return ((function (switch__3180__auto__,c__3305__auto___7006,out){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_7000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7000[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_7000[(1)] = (1));

return statearr_7000;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_6982){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_6982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e7001){var ex__3184__auto__ = e7001;
var statearr_7002_7017 = state_6982;
(statearr_7002_7017[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_6982[(4)]))){
var statearr_7003_7018 = state_6982;
(statearr_7003_7018[(1)] = cljs.core.first.call(null,(state_6982[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7019 = state_6982;
state_6982 = G__7019;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_6982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_6982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___7006,out))
})();
var state__3307__auto__ = (function (){var statearr_7004 = f__3306__auto__.call(null);
(statearr_7004[(6)] = c__3305__auto___7006);

return statearr_7004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___7006,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__7021 = arguments.length;
switch (G__7021) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3305__auto___7088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___7088,out){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___7088,out){
return (function (state_7059){
var state_val_7060 = (state_7059[(1)]);
if((state_val_7060 === (7))){
var inst_7055 = (state_7059[(2)]);
var state_7059__$1 = state_7059;
var statearr_7061_7089 = state_7059__$1;
(statearr_7061_7089[(2)] = inst_7055);

(statearr_7061_7089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (1))){
var inst_7022 = (new Array(n));
var inst_7023 = inst_7022;
var inst_7024 = (0);
var state_7059__$1 = (function (){var statearr_7062 = state_7059;
(statearr_7062[(7)] = inst_7024);

(statearr_7062[(8)] = inst_7023);

return statearr_7062;
})();
var statearr_7063_7090 = state_7059__$1;
(statearr_7063_7090[(2)] = null);

(statearr_7063_7090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (4))){
var inst_7027 = (state_7059[(9)]);
var inst_7027__$1 = (state_7059[(2)]);
var inst_7028 = (inst_7027__$1 == null);
var inst_7029 = cljs.core.not.call(null,inst_7028);
var state_7059__$1 = (function (){var statearr_7064 = state_7059;
(statearr_7064[(9)] = inst_7027__$1);

return statearr_7064;
})();
if(inst_7029){
var statearr_7065_7091 = state_7059__$1;
(statearr_7065_7091[(1)] = (5));

} else {
var statearr_7066_7092 = state_7059__$1;
(statearr_7066_7092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (15))){
var inst_7049 = (state_7059[(2)]);
var state_7059__$1 = state_7059;
var statearr_7067_7093 = state_7059__$1;
(statearr_7067_7093[(2)] = inst_7049);

(statearr_7067_7093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (13))){
var state_7059__$1 = state_7059;
var statearr_7068_7094 = state_7059__$1;
(statearr_7068_7094[(2)] = null);

(statearr_7068_7094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (6))){
var inst_7024 = (state_7059[(7)]);
var inst_7045 = (inst_7024 > (0));
var state_7059__$1 = state_7059;
if(cljs.core.truth_(inst_7045)){
var statearr_7069_7095 = state_7059__$1;
(statearr_7069_7095[(1)] = (12));

} else {
var statearr_7070_7096 = state_7059__$1;
(statearr_7070_7096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (3))){
var inst_7057 = (state_7059[(2)]);
var state_7059__$1 = state_7059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7059__$1,inst_7057);
} else {
if((state_val_7060 === (12))){
var inst_7023 = (state_7059[(8)]);
var inst_7047 = cljs.core.vec.call(null,inst_7023);
var state_7059__$1 = state_7059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7059__$1,(15),out,inst_7047);
} else {
if((state_val_7060 === (2))){
var state_7059__$1 = state_7059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7059__$1,(4),ch);
} else {
if((state_val_7060 === (11))){
var inst_7039 = (state_7059[(2)]);
var inst_7040 = (new Array(n));
var inst_7023 = inst_7040;
var inst_7024 = (0);
var state_7059__$1 = (function (){var statearr_7071 = state_7059;
(statearr_7071[(7)] = inst_7024);

(statearr_7071[(10)] = inst_7039);

(statearr_7071[(8)] = inst_7023);

return statearr_7071;
})();
var statearr_7072_7097 = state_7059__$1;
(statearr_7072_7097[(2)] = null);

(statearr_7072_7097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (9))){
var inst_7023 = (state_7059[(8)]);
var inst_7037 = cljs.core.vec.call(null,inst_7023);
var state_7059__$1 = state_7059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7059__$1,(11),out,inst_7037);
} else {
if((state_val_7060 === (5))){
var inst_7027 = (state_7059[(9)]);
var inst_7024 = (state_7059[(7)]);
var inst_7032 = (state_7059[(11)]);
var inst_7023 = (state_7059[(8)]);
var inst_7031 = (inst_7023[inst_7024] = inst_7027);
var inst_7032__$1 = (inst_7024 + (1));
var inst_7033 = (inst_7032__$1 < n);
var state_7059__$1 = (function (){var statearr_7073 = state_7059;
(statearr_7073[(12)] = inst_7031);

(statearr_7073[(11)] = inst_7032__$1);

return statearr_7073;
})();
if(cljs.core.truth_(inst_7033)){
var statearr_7074_7098 = state_7059__$1;
(statearr_7074_7098[(1)] = (8));

} else {
var statearr_7075_7099 = state_7059__$1;
(statearr_7075_7099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (14))){
var inst_7052 = (state_7059[(2)]);
var inst_7053 = cljs.core.async.close_BANG_.call(null,out);
var state_7059__$1 = (function (){var statearr_7077 = state_7059;
(statearr_7077[(13)] = inst_7052);

return statearr_7077;
})();
var statearr_7078_7100 = state_7059__$1;
(statearr_7078_7100[(2)] = inst_7053);

(statearr_7078_7100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (10))){
var inst_7043 = (state_7059[(2)]);
var state_7059__$1 = state_7059;
var statearr_7079_7101 = state_7059__$1;
(statearr_7079_7101[(2)] = inst_7043);

(statearr_7079_7101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7060 === (8))){
var inst_7032 = (state_7059[(11)]);
var inst_7023 = (state_7059[(8)]);
var tmp7076 = inst_7023;
var inst_7023__$1 = tmp7076;
var inst_7024 = inst_7032;
var state_7059__$1 = (function (){var statearr_7080 = state_7059;
(statearr_7080[(7)] = inst_7024);

(statearr_7080[(8)] = inst_7023__$1);

return statearr_7080;
})();
var statearr_7081_7102 = state_7059__$1;
(statearr_7081_7102[(2)] = null);

(statearr_7081_7102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___7088,out))
;
return ((function (switch__3180__auto__,c__3305__auto___7088,out){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_7082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7082[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_7082[(1)] = (1));

return statearr_7082;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_7059){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_7059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e7083){var ex__3184__auto__ = e7083;
var statearr_7084_7103 = state_7059;
(statearr_7084_7103[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_7059[(4)]))){
var statearr_7085_7104 = state_7059;
(statearr_7085_7104[(1)] = cljs.core.first.call(null,(state_7059[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7105 = state_7059;
state_7059 = G__7105;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_7059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_7059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___7088,out))
})();
var state__3307__auto__ = (function (){var statearr_7086 = f__3306__auto__.call(null);
(statearr_7086[(6)] = c__3305__auto___7088);

return statearr_7086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___7088,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__7107 = arguments.length;
switch (G__7107) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3305__auto___7178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3305__auto___7178,out){
return (function (){
var f__3306__auto__ = (function (){var switch__3180__auto__ = ((function (c__3305__auto___7178,out){
return (function (state_7149){
var state_val_7150 = (state_7149[(1)]);
if((state_val_7150 === (7))){
var inst_7145 = (state_7149[(2)]);
var state_7149__$1 = state_7149;
var statearr_7151_7179 = state_7149__$1;
(statearr_7151_7179[(2)] = inst_7145);

(statearr_7151_7179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (1))){
var inst_7108 = [];
var inst_7109 = inst_7108;
var inst_7110 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_7149__$1 = (function (){var statearr_7152 = state_7149;
(statearr_7152[(7)] = inst_7109);

(statearr_7152[(8)] = inst_7110);

return statearr_7152;
})();
var statearr_7153_7180 = state_7149__$1;
(statearr_7153_7180[(2)] = null);

(statearr_7153_7180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (4))){
var inst_7113 = (state_7149[(9)]);
var inst_7113__$1 = (state_7149[(2)]);
var inst_7114 = (inst_7113__$1 == null);
var inst_7115 = cljs.core.not.call(null,inst_7114);
var state_7149__$1 = (function (){var statearr_7154 = state_7149;
(statearr_7154[(9)] = inst_7113__$1);

return statearr_7154;
})();
if(inst_7115){
var statearr_7155_7181 = state_7149__$1;
(statearr_7155_7181[(1)] = (5));

} else {
var statearr_7156_7182 = state_7149__$1;
(statearr_7156_7182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (15))){
var inst_7139 = (state_7149[(2)]);
var state_7149__$1 = state_7149;
var statearr_7157_7183 = state_7149__$1;
(statearr_7157_7183[(2)] = inst_7139);

(statearr_7157_7183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (13))){
var state_7149__$1 = state_7149;
var statearr_7158_7184 = state_7149__$1;
(statearr_7158_7184[(2)] = null);

(statearr_7158_7184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (6))){
var inst_7109 = (state_7149[(7)]);
var inst_7134 = inst_7109.length;
var inst_7135 = (inst_7134 > (0));
var state_7149__$1 = state_7149;
if(cljs.core.truth_(inst_7135)){
var statearr_7159_7185 = state_7149__$1;
(statearr_7159_7185[(1)] = (12));

} else {
var statearr_7160_7186 = state_7149__$1;
(statearr_7160_7186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (3))){
var inst_7147 = (state_7149[(2)]);
var state_7149__$1 = state_7149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7149__$1,inst_7147);
} else {
if((state_val_7150 === (12))){
var inst_7109 = (state_7149[(7)]);
var inst_7137 = cljs.core.vec.call(null,inst_7109);
var state_7149__$1 = state_7149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7149__$1,(15),out,inst_7137);
} else {
if((state_val_7150 === (2))){
var state_7149__$1 = state_7149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7149__$1,(4),ch);
} else {
if((state_val_7150 === (11))){
var inst_7113 = (state_7149[(9)]);
var inst_7117 = (state_7149[(10)]);
var inst_7127 = (state_7149[(2)]);
var inst_7128 = [];
var inst_7129 = inst_7128.push(inst_7113);
var inst_7109 = inst_7128;
var inst_7110 = inst_7117;
var state_7149__$1 = (function (){var statearr_7161 = state_7149;
(statearr_7161[(7)] = inst_7109);

(statearr_7161[(11)] = inst_7129);

(statearr_7161[(8)] = inst_7110);

(statearr_7161[(12)] = inst_7127);

return statearr_7161;
})();
var statearr_7162_7187 = state_7149__$1;
(statearr_7162_7187[(2)] = null);

(statearr_7162_7187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (9))){
var inst_7109 = (state_7149[(7)]);
var inst_7125 = cljs.core.vec.call(null,inst_7109);
var state_7149__$1 = state_7149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7149__$1,(11),out,inst_7125);
} else {
if((state_val_7150 === (5))){
var inst_7113 = (state_7149[(9)]);
var inst_7117 = (state_7149[(10)]);
var inst_7110 = (state_7149[(8)]);
var inst_7117__$1 = f.call(null,inst_7113);
var inst_7118 = cljs.core._EQ_.call(null,inst_7117__$1,inst_7110);
var inst_7119 = cljs.core.keyword_identical_QMARK_.call(null,inst_7110,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_7120 = ((inst_7118) || (inst_7119));
var state_7149__$1 = (function (){var statearr_7163 = state_7149;
(statearr_7163[(10)] = inst_7117__$1);

return statearr_7163;
})();
if(cljs.core.truth_(inst_7120)){
var statearr_7164_7188 = state_7149__$1;
(statearr_7164_7188[(1)] = (8));

} else {
var statearr_7165_7189 = state_7149__$1;
(statearr_7165_7189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (14))){
var inst_7142 = (state_7149[(2)]);
var inst_7143 = cljs.core.async.close_BANG_.call(null,out);
var state_7149__$1 = (function (){var statearr_7167 = state_7149;
(statearr_7167[(13)] = inst_7142);

return statearr_7167;
})();
var statearr_7168_7190 = state_7149__$1;
(statearr_7168_7190[(2)] = inst_7143);

(statearr_7168_7190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (10))){
var inst_7132 = (state_7149[(2)]);
var state_7149__$1 = state_7149;
var statearr_7169_7191 = state_7149__$1;
(statearr_7169_7191[(2)] = inst_7132);

(statearr_7169_7191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7150 === (8))){
var inst_7109 = (state_7149[(7)]);
var inst_7113 = (state_7149[(9)]);
var inst_7117 = (state_7149[(10)]);
var inst_7122 = inst_7109.push(inst_7113);
var tmp7166 = inst_7109;
var inst_7109__$1 = tmp7166;
var inst_7110 = inst_7117;
var state_7149__$1 = (function (){var statearr_7170 = state_7149;
(statearr_7170[(7)] = inst_7109__$1);

(statearr_7170[(14)] = inst_7122);

(statearr_7170[(8)] = inst_7110);

return statearr_7170;
})();
var statearr_7171_7192 = state_7149__$1;
(statearr_7171_7192[(2)] = null);

(statearr_7171_7192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3305__auto___7178,out))
;
return ((function (switch__3180__auto__,c__3305__auto___7178,out){
return (function() {
var cljs$core$async$state_machine__3181__auto__ = null;
var cljs$core$async$state_machine__3181__auto____0 = (function (){
var statearr_7172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7172[(0)] = cljs$core$async$state_machine__3181__auto__);

(statearr_7172[(1)] = (1));

return statearr_7172;
});
var cljs$core$async$state_machine__3181__auto____1 = (function (state_7149){
while(true){
var ret_value__3182__auto__ = (function (){try{while(true){
var result__3183__auto__ = switch__3180__auto__.call(null,state_7149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3183__auto__;
}
break;
}
}catch (e7173){var ex__3184__auto__ = e7173;
var statearr_7174_7193 = state_7149;
(statearr_7174_7193[(2)] = ex__3184__auto__);


if(cljs.core.seq.call(null,(state_7149[(4)]))){
var statearr_7175_7194 = state_7149;
(statearr_7175_7194[(1)] = cljs.core.first.call(null,(state_7149[(4)])));

} else {
throw ex__3184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7195 = state_7149;
state_7149 = G__7195;
continue;
} else {
return ret_value__3182__auto__;
}
break;
}
});
cljs$core$async$state_machine__3181__auto__ = function(state_7149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3181__auto____1.call(this,state_7149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3181__auto____0;
cljs$core$async$state_machine__3181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3181__auto____1;
return cljs$core$async$state_machine__3181__auto__;
})()
;})(switch__3180__auto__,c__3305__auto___7178,out))
})();
var state__3307__auto__ = (function (){var statearr_7176 = f__3306__auto__.call(null);
(statearr_7176[(6)] = c__3305__auto___7178);

return statearr_7176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3307__auto__);
});})(c__3305__auto___7178,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
