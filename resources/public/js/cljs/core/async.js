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
var G__6169 = arguments.length;
switch (G__6169) {
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
if(typeof cljs.core.async.t_cljs$core$async6170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6170 = (function (f,blockable,meta6171){
this.f = f;
this.blockable = blockable;
this.meta6171 = meta6171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6172,meta6171__$1){
var self__ = this;
var _6172__$1 = this;
return (new cljs.core.async.t_cljs$core$async6170(self__.f,self__.blockable,meta6171__$1));
});

cljs.core.async.t_cljs$core$async6170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6172){
var self__ = this;
var _6172__$1 = this;
return self__.meta6171;
});

cljs.core.async.t_cljs$core$async6170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6171","meta6171",261218399,null)], null);
});

cljs.core.async.t_cljs$core$async6170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6170";

cljs.core.async.t_cljs$core$async6170.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6170.
 */
cljs.core.async.__GT_t_cljs$core$async6170 = (function cljs$core$async$__GT_t_cljs$core$async6170(f__$1,blockable__$1,meta6171){
return (new cljs.core.async.t_cljs$core$async6170(f__$1,blockable__$1,meta6171));
});

}

return (new cljs.core.async.t_cljs$core$async6170(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6176 = arguments.length;
switch (G__6176) {
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
var G__6179 = arguments.length;
switch (G__6179) {
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
var G__6182 = arguments.length;
switch (G__6182) {
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
var val_6184 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6184);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6184,ret){
return (function (){
return fn1.call(null,val_6184);
});})(val_6184,ret))
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
var G__6186 = arguments.length;
switch (G__6186) {
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
var n__4374__auto___6188 = n;
var x_6189 = (0);
while(true){
if((x_6189 < n__4374__auto___6188)){
(a[x_6189] = x_6189);

var G__6190 = (x_6189 + (1));
x_6189 = G__6190;
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
if(typeof cljs.core.async.t_cljs$core$async6191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6191 = (function (flag,meta6192){
this.flag = flag;
this.meta6192 = meta6192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6193,meta6192__$1){
var self__ = this;
var _6193__$1 = this;
return (new cljs.core.async.t_cljs$core$async6191(self__.flag,meta6192__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6193){
var self__ = this;
var _6193__$1 = this;
return self__.meta6192;
});})(flag))
;

cljs.core.async.t_cljs$core$async6191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6191.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6192","meta6192",-1876298424,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6191";

cljs.core.async.t_cljs$core$async6191.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6191");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6191.
 */
cljs.core.async.__GT_t_cljs$core$async6191 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6191(flag__$1,meta6192){
return (new cljs.core.async.t_cljs$core$async6191(flag__$1,meta6192));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6191(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async6194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6194 = (function (flag,cb,meta6195){
this.flag = flag;
this.cb = cb;
this.meta6195 = meta6195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6196,meta6195__$1){
var self__ = this;
var _6196__$1 = this;
return (new cljs.core.async.t_cljs$core$async6194(self__.flag,self__.cb,meta6195__$1));
});

cljs.core.async.t_cljs$core$async6194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6196){
var self__ = this;
var _6196__$1 = this;
return self__.meta6195;
});

cljs.core.async.t_cljs$core$async6194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6195","meta6195",-474557212,null)], null);
});

cljs.core.async.t_cljs$core$async6194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6194";

cljs.core.async.t_cljs$core$async6194.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6194");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6194.
 */
cljs.core.async.__GT_t_cljs$core$async6194 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6194(flag__$1,cb__$1,meta6195){
return (new cljs.core.async.t_cljs$core$async6194(flag__$1,cb__$1,meta6195));
});

}

return (new cljs.core.async.t_cljs$core$async6194(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__6197_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6197_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6198_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6198_SHARP_,port], null));
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
var G__6199 = (i + (1));
i = G__6199;
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
var len__4497__auto___6205 = arguments.length;
var i__4498__auto___6206 = (0);
while(true){
if((i__4498__auto___6206 < len__4497__auto___6205)){
args__4500__auto__.push((arguments[i__4498__auto___6206]));

var G__6207 = (i__4498__auto___6206 + (1));
i__4498__auto___6206 = G__6207;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6202){
var map__6203 = p__6202;
var map__6203__$1 = ((((!((map__6203 == null)))?(((((map__6203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6203):map__6203);
var opts = map__6203__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6200){
var G__6201 = cljs.core.first.call(null,seq6200);
var seq6200__$1 = cljs.core.next.call(null,seq6200);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6201,seq6200__$1);
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
var G__6209 = arguments.length;
switch (G__6209) {
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
var c__4192__auto___6256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___6256){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___6256){
return (function (state_6233){
var state_val_6234 = (state_6233[(1)]);
if((state_val_6234 === (7))){
var inst_6229 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6235_6257 = state_6233__$1;
(statearr_6235_6257[(2)] = inst_6229);

(statearr_6235_6257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (1))){
var state_6233__$1 = state_6233;
var statearr_6236_6258 = state_6233__$1;
(statearr_6236_6258[(2)] = null);

(statearr_6236_6258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (4))){
var inst_6212 = (state_6233[(7)]);
var inst_6212__$1 = (state_6233[(2)]);
var inst_6213 = (inst_6212__$1 == null);
var state_6233__$1 = (function (){var statearr_6237 = state_6233;
(statearr_6237[(7)] = inst_6212__$1);

return statearr_6237;
})();
if(cljs.core.truth_(inst_6213)){
var statearr_6238_6259 = state_6233__$1;
(statearr_6238_6259[(1)] = (5));

} else {
var statearr_6239_6260 = state_6233__$1;
(statearr_6239_6260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (13))){
var state_6233__$1 = state_6233;
var statearr_6240_6261 = state_6233__$1;
(statearr_6240_6261[(2)] = null);

(statearr_6240_6261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (6))){
var inst_6212 = (state_6233[(7)]);
var state_6233__$1 = state_6233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6233__$1,(11),to,inst_6212);
} else {
if((state_val_6234 === (3))){
var inst_6231 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6233__$1,inst_6231);
} else {
if((state_val_6234 === (12))){
var state_6233__$1 = state_6233;
var statearr_6241_6262 = state_6233__$1;
(statearr_6241_6262[(2)] = null);

(statearr_6241_6262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (2))){
var state_6233__$1 = state_6233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6233__$1,(4),from);
} else {
if((state_val_6234 === (11))){
var inst_6222 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
if(cljs.core.truth_(inst_6222)){
var statearr_6242_6263 = state_6233__$1;
(statearr_6242_6263[(1)] = (12));

} else {
var statearr_6243_6264 = state_6233__$1;
(statearr_6243_6264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (9))){
var state_6233__$1 = state_6233;
var statearr_6244_6265 = state_6233__$1;
(statearr_6244_6265[(2)] = null);

(statearr_6244_6265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (5))){
var state_6233__$1 = state_6233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6245_6266 = state_6233__$1;
(statearr_6245_6266[(1)] = (8));

} else {
var statearr_6246_6267 = state_6233__$1;
(statearr_6246_6267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (14))){
var inst_6227 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6247_6268 = state_6233__$1;
(statearr_6247_6268[(2)] = inst_6227);

(statearr_6247_6268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (10))){
var inst_6219 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6248_6269 = state_6233__$1;
(statearr_6248_6269[(2)] = inst_6219);

(statearr_6248_6269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (8))){
var inst_6216 = cljs.core.async.close_BANG_.call(null,to);
var state_6233__$1 = state_6233;
var statearr_6249_6270 = state_6233__$1;
(statearr_6249_6270[(2)] = inst_6216);

(statearr_6249_6270[(1)] = (10));


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
});})(c__4192__auto___6256))
;
return ((function (switch__4067__auto__,c__4192__auto___6256){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_6250 = [null,null,null,null,null,null,null,null];
(statearr_6250[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_6250[(1)] = (1));

return statearr_6250;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_6233){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6251){var ex__4071__auto__ = e6251;
var statearr_6252_6271 = state_6233;
(statearr_6252_6271[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6233[(4)]))){
var statearr_6253_6272 = state_6233;
(statearr_6253_6272[(1)] = cljs.core.first.call(null,(state_6233[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6273 = state_6233;
state_6233 = G__6273;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_6233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_6233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___6256))
})();
var state__4194__auto__ = (function (){var statearr_6254 = f__4193__auto__.call(null);
(statearr_6254[(6)] = c__4192__auto___6256);

return statearr_6254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___6256))
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
return (function (p__6274){
var vec__6275 = p__6274;
var v = cljs.core.nth.call(null,vec__6275,(0),null);
var p = cljs.core.nth.call(null,vec__6275,(1),null);
var job = vec__6275;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__4192__auto___6451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___6451,res,vec__6275,v,p,job,jobs,results){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___6451,res,vec__6275,v,p,job,jobs,results){
return (function (state_6282){
var state_val_6283 = (state_6282[(1)]);
if((state_val_6283 === (1))){
var state_6282__$1 = state_6282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6282__$1,(2),res,v);
} else {
if((state_val_6283 === (2))){
var inst_6279 = (state_6282[(2)]);
var inst_6280 = cljs.core.async.close_BANG_.call(null,res);
var state_6282__$1 = (function (){var statearr_6284 = state_6282;
(statearr_6284[(7)] = inst_6279);

return statearr_6284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6282__$1,inst_6280);
} else {
return null;
}
}
});})(c__4192__auto___6451,res,vec__6275,v,p,job,jobs,results))
;
return ((function (switch__4067__auto__,c__4192__auto___6451,res,vec__6275,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0 = (function (){
var statearr_6285 = [null,null,null,null,null,null,null,null];
(statearr_6285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__);

(statearr_6285[(1)] = (1));

return statearr_6285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1 = (function (state_6282){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6286){var ex__4071__auto__ = e6286;
var statearr_6287_6452 = state_6282;
(statearr_6287_6452[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6282[(4)]))){
var statearr_6288_6453 = state_6282;
(statearr_6288_6453[(1)] = cljs.core.first.call(null,(state_6282[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6454 = state_6282;
state_6282 = G__6454;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = function(state_6282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1.call(this,state_6282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___6451,res,vec__6275,v,p,job,jobs,results))
})();
var state__4194__auto__ = (function (){var statearr_6289 = f__4193__auto__.call(null);
(statearr_6289[(6)] = c__4192__auto___6451);

return statearr_6289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___6451,res,vec__6275,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6290){
var vec__6291 = p__6290;
var v = cljs.core.nth.call(null,vec__6291,(0),null);
var p = cljs.core.nth.call(null,vec__6291,(1),null);
var job = vec__6291;
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
var n__4374__auto___6455 = n;
var __6456 = (0);
while(true){
if((__6456 < n__4374__auto___6455)){
var G__6294_6457 = type;
var G__6294_6458__$1 = (((G__6294_6457 instanceof cljs.core.Keyword))?G__6294_6457.fqn:null);
switch (G__6294_6458__$1) {
case "compute":
var c__4192__auto___6460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6456,c__4192__auto___6460,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (__6456,c__4192__auto___6460,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async){
return (function (state_6307){
var state_val_6308 = (state_6307[(1)]);
if((state_val_6308 === (1))){
var state_6307__$1 = state_6307;
var statearr_6309_6461 = state_6307__$1;
(statearr_6309_6461[(2)] = null);

(statearr_6309_6461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6308 === (2))){
var state_6307__$1 = state_6307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6307__$1,(4),jobs);
} else {
if((state_val_6308 === (3))){
var inst_6305 = (state_6307[(2)]);
var state_6307__$1 = state_6307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6307__$1,inst_6305);
} else {
if((state_val_6308 === (4))){
var inst_6297 = (state_6307[(2)]);
var inst_6298 = process.call(null,inst_6297);
var state_6307__$1 = state_6307;
if(cljs.core.truth_(inst_6298)){
var statearr_6310_6462 = state_6307__$1;
(statearr_6310_6462[(1)] = (5));

} else {
var statearr_6311_6463 = state_6307__$1;
(statearr_6311_6463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6308 === (5))){
var state_6307__$1 = state_6307;
var statearr_6312_6464 = state_6307__$1;
(statearr_6312_6464[(2)] = null);

(statearr_6312_6464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6308 === (6))){
var state_6307__$1 = state_6307;
var statearr_6313_6465 = state_6307__$1;
(statearr_6313_6465[(2)] = null);

(statearr_6313_6465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6308 === (7))){
var inst_6303 = (state_6307[(2)]);
var state_6307__$1 = state_6307;
var statearr_6314_6466 = state_6307__$1;
(statearr_6314_6466[(2)] = inst_6303);

(statearr_6314_6466[(1)] = (3));


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
});})(__6456,c__4192__auto___6460,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async))
;
return ((function (__6456,switch__4067__auto__,c__4192__auto___6460,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0 = (function (){
var statearr_6315 = [null,null,null,null,null,null,null];
(statearr_6315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__);

(statearr_6315[(1)] = (1));

return statearr_6315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1 = (function (state_6307){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6316){var ex__4071__auto__ = e6316;
var statearr_6317_6467 = state_6307;
(statearr_6317_6467[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6307[(4)]))){
var statearr_6318_6468 = state_6307;
(statearr_6318_6468[(1)] = cljs.core.first.call(null,(state_6307[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6469 = state_6307;
state_6307 = G__6469;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = function(state_6307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1.call(this,state_6307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__;
})()
;})(__6456,switch__4067__auto__,c__4192__auto___6460,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async))
})();
var state__4194__auto__ = (function (){var statearr_6319 = f__4193__auto__.call(null);
(statearr_6319[(6)] = c__4192__auto___6460);

return statearr_6319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(__6456,c__4192__auto___6460,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async))
);


break;
case "async":
var c__4192__auto___6470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6456,c__4192__auto___6470,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (__6456,c__4192__auto___6470,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async){
return (function (state_6332){
var state_val_6333 = (state_6332[(1)]);
if((state_val_6333 === (1))){
var state_6332__$1 = state_6332;
var statearr_6334_6471 = state_6332__$1;
(statearr_6334_6471[(2)] = null);

(statearr_6334_6471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6333 === (2))){
var state_6332__$1 = state_6332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6332__$1,(4),jobs);
} else {
if((state_val_6333 === (3))){
var inst_6330 = (state_6332[(2)]);
var state_6332__$1 = state_6332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6332__$1,inst_6330);
} else {
if((state_val_6333 === (4))){
var inst_6322 = (state_6332[(2)]);
var inst_6323 = async.call(null,inst_6322);
var state_6332__$1 = state_6332;
if(cljs.core.truth_(inst_6323)){
var statearr_6335_6472 = state_6332__$1;
(statearr_6335_6472[(1)] = (5));

} else {
var statearr_6336_6473 = state_6332__$1;
(statearr_6336_6473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6333 === (5))){
var state_6332__$1 = state_6332;
var statearr_6337_6474 = state_6332__$1;
(statearr_6337_6474[(2)] = null);

(statearr_6337_6474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6333 === (6))){
var state_6332__$1 = state_6332;
var statearr_6338_6475 = state_6332__$1;
(statearr_6338_6475[(2)] = null);

(statearr_6338_6475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6333 === (7))){
var inst_6328 = (state_6332[(2)]);
var state_6332__$1 = state_6332;
var statearr_6339_6476 = state_6332__$1;
(statearr_6339_6476[(2)] = inst_6328);

(statearr_6339_6476[(1)] = (3));


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
});})(__6456,c__4192__auto___6470,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async))
;
return ((function (__6456,switch__4067__auto__,c__4192__auto___6470,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0 = (function (){
var statearr_6340 = [null,null,null,null,null,null,null];
(statearr_6340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__);

(statearr_6340[(1)] = (1));

return statearr_6340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1 = (function (state_6332){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6341){var ex__4071__auto__ = e6341;
var statearr_6342_6477 = state_6332;
(statearr_6342_6477[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6332[(4)]))){
var statearr_6343_6478 = state_6332;
(statearr_6343_6478[(1)] = cljs.core.first.call(null,(state_6332[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6479 = state_6332;
state_6332 = G__6479;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = function(state_6332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1.call(this,state_6332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__;
})()
;})(__6456,switch__4067__auto__,c__4192__auto___6470,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async))
})();
var state__4194__auto__ = (function (){var statearr_6344 = f__4193__auto__.call(null);
(statearr_6344[(6)] = c__4192__auto___6470);

return statearr_6344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(__6456,c__4192__auto___6470,G__6294_6457,G__6294_6458__$1,n__4374__auto___6455,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6294_6458__$1)].join('')));

}

var G__6480 = (__6456 + (1));
__6456 = G__6480;
continue;
} else {
}
break;
}

var c__4192__auto___6481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___6481,jobs,results,process,async){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___6481,jobs,results,process,async){
return (function (state_6366){
var state_val_6367 = (state_6366[(1)]);
if((state_val_6367 === (7))){
var inst_6362 = (state_6366[(2)]);
var state_6366__$1 = state_6366;
var statearr_6368_6482 = state_6366__$1;
(statearr_6368_6482[(2)] = inst_6362);

(statearr_6368_6482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6367 === (1))){
var state_6366__$1 = state_6366;
var statearr_6369_6483 = state_6366__$1;
(statearr_6369_6483[(2)] = null);

(statearr_6369_6483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6367 === (4))){
var inst_6347 = (state_6366[(7)]);
var inst_6347__$1 = (state_6366[(2)]);
var inst_6348 = (inst_6347__$1 == null);
var state_6366__$1 = (function (){var statearr_6370 = state_6366;
(statearr_6370[(7)] = inst_6347__$1);

return statearr_6370;
})();
if(cljs.core.truth_(inst_6348)){
var statearr_6371_6484 = state_6366__$1;
(statearr_6371_6484[(1)] = (5));

} else {
var statearr_6372_6485 = state_6366__$1;
(statearr_6372_6485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6367 === (6))){
var inst_6347 = (state_6366[(7)]);
var inst_6352 = (state_6366[(8)]);
var inst_6352__$1 = cljs.core.async.chan.call(null,(1));
var inst_6353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6354 = [inst_6347,inst_6352__$1];
var inst_6355 = (new cljs.core.PersistentVector(null,2,(5),inst_6353,inst_6354,null));
var state_6366__$1 = (function (){var statearr_6373 = state_6366;
(statearr_6373[(8)] = inst_6352__$1);

return statearr_6373;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6366__$1,(8),jobs,inst_6355);
} else {
if((state_val_6367 === (3))){
var inst_6364 = (state_6366[(2)]);
var state_6366__$1 = state_6366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6366__$1,inst_6364);
} else {
if((state_val_6367 === (2))){
var state_6366__$1 = state_6366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6366__$1,(4),from);
} else {
if((state_val_6367 === (9))){
var inst_6359 = (state_6366[(2)]);
var state_6366__$1 = (function (){var statearr_6374 = state_6366;
(statearr_6374[(9)] = inst_6359);

return statearr_6374;
})();
var statearr_6375_6486 = state_6366__$1;
(statearr_6375_6486[(2)] = null);

(statearr_6375_6486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6367 === (5))){
var inst_6350 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6366__$1 = state_6366;
var statearr_6376_6487 = state_6366__$1;
(statearr_6376_6487[(2)] = inst_6350);

(statearr_6376_6487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6367 === (8))){
var inst_6352 = (state_6366[(8)]);
var inst_6357 = (state_6366[(2)]);
var state_6366__$1 = (function (){var statearr_6377 = state_6366;
(statearr_6377[(10)] = inst_6357);

return statearr_6377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6366__$1,(9),results,inst_6352);
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
});})(c__4192__auto___6481,jobs,results,process,async))
;
return ((function (switch__4067__auto__,c__4192__auto___6481,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0 = (function (){
var statearr_6378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__);

(statearr_6378[(1)] = (1));

return statearr_6378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1 = (function (state_6366){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6379){var ex__4071__auto__ = e6379;
var statearr_6380_6488 = state_6366;
(statearr_6380_6488[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6366[(4)]))){
var statearr_6381_6489 = state_6366;
(statearr_6381_6489[(1)] = cljs.core.first.call(null,(state_6366[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6490 = state_6366;
state_6366 = G__6490;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = function(state_6366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1.call(this,state_6366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___6481,jobs,results,process,async))
})();
var state__4194__auto__ = (function (){var statearr_6382 = f__4193__auto__.call(null);
(statearr_6382[(6)] = c__4192__auto___6481);

return statearr_6382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___6481,jobs,results,process,async))
);


var c__4192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto__,jobs,results,process,async){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto__,jobs,results,process,async){
return (function (state_6420){
var state_val_6421 = (state_6420[(1)]);
if((state_val_6421 === (7))){
var inst_6416 = (state_6420[(2)]);
var state_6420__$1 = state_6420;
var statearr_6422_6491 = state_6420__$1;
(statearr_6422_6491[(2)] = inst_6416);

(statearr_6422_6491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (20))){
var state_6420__$1 = state_6420;
var statearr_6423_6492 = state_6420__$1;
(statearr_6423_6492[(2)] = null);

(statearr_6423_6492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (1))){
var state_6420__$1 = state_6420;
var statearr_6424_6493 = state_6420__$1;
(statearr_6424_6493[(2)] = null);

(statearr_6424_6493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (4))){
var inst_6385 = (state_6420[(7)]);
var inst_6385__$1 = (state_6420[(2)]);
var inst_6386 = (inst_6385__$1 == null);
var state_6420__$1 = (function (){var statearr_6425 = state_6420;
(statearr_6425[(7)] = inst_6385__$1);

return statearr_6425;
})();
if(cljs.core.truth_(inst_6386)){
var statearr_6426_6494 = state_6420__$1;
(statearr_6426_6494[(1)] = (5));

} else {
var statearr_6427_6495 = state_6420__$1;
(statearr_6427_6495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (15))){
var inst_6398 = (state_6420[(8)]);
var state_6420__$1 = state_6420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6420__$1,(18),to,inst_6398);
} else {
if((state_val_6421 === (21))){
var inst_6411 = (state_6420[(2)]);
var state_6420__$1 = state_6420;
var statearr_6428_6496 = state_6420__$1;
(statearr_6428_6496[(2)] = inst_6411);

(statearr_6428_6496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (13))){
var inst_6413 = (state_6420[(2)]);
var state_6420__$1 = (function (){var statearr_6429 = state_6420;
(statearr_6429[(9)] = inst_6413);

return statearr_6429;
})();
var statearr_6430_6497 = state_6420__$1;
(statearr_6430_6497[(2)] = null);

(statearr_6430_6497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (6))){
var inst_6385 = (state_6420[(7)]);
var state_6420__$1 = state_6420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6420__$1,(11),inst_6385);
} else {
if((state_val_6421 === (17))){
var inst_6406 = (state_6420[(2)]);
var state_6420__$1 = state_6420;
if(cljs.core.truth_(inst_6406)){
var statearr_6431_6498 = state_6420__$1;
(statearr_6431_6498[(1)] = (19));

} else {
var statearr_6432_6499 = state_6420__$1;
(statearr_6432_6499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (3))){
var inst_6418 = (state_6420[(2)]);
var state_6420__$1 = state_6420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6420__$1,inst_6418);
} else {
if((state_val_6421 === (12))){
var inst_6395 = (state_6420[(10)]);
var state_6420__$1 = state_6420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6420__$1,(14),inst_6395);
} else {
if((state_val_6421 === (2))){
var state_6420__$1 = state_6420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6420__$1,(4),results);
} else {
if((state_val_6421 === (19))){
var state_6420__$1 = state_6420;
var statearr_6433_6500 = state_6420__$1;
(statearr_6433_6500[(2)] = null);

(statearr_6433_6500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (11))){
var inst_6395 = (state_6420[(2)]);
var state_6420__$1 = (function (){var statearr_6434 = state_6420;
(statearr_6434[(10)] = inst_6395);

return statearr_6434;
})();
var statearr_6435_6501 = state_6420__$1;
(statearr_6435_6501[(2)] = null);

(statearr_6435_6501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (9))){
var state_6420__$1 = state_6420;
var statearr_6436_6502 = state_6420__$1;
(statearr_6436_6502[(2)] = null);

(statearr_6436_6502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (5))){
var state_6420__$1 = state_6420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6437_6503 = state_6420__$1;
(statearr_6437_6503[(1)] = (8));

} else {
var statearr_6438_6504 = state_6420__$1;
(statearr_6438_6504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (14))){
var inst_6398 = (state_6420[(8)]);
var inst_6400 = (state_6420[(11)]);
var inst_6398__$1 = (state_6420[(2)]);
var inst_6399 = (inst_6398__$1 == null);
var inst_6400__$1 = cljs.core.not.call(null,inst_6399);
var state_6420__$1 = (function (){var statearr_6439 = state_6420;
(statearr_6439[(8)] = inst_6398__$1);

(statearr_6439[(11)] = inst_6400__$1);

return statearr_6439;
})();
if(inst_6400__$1){
var statearr_6440_6505 = state_6420__$1;
(statearr_6440_6505[(1)] = (15));

} else {
var statearr_6441_6506 = state_6420__$1;
(statearr_6441_6506[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (16))){
var inst_6400 = (state_6420[(11)]);
var state_6420__$1 = state_6420;
var statearr_6442_6507 = state_6420__$1;
(statearr_6442_6507[(2)] = inst_6400);

(statearr_6442_6507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (10))){
var inst_6392 = (state_6420[(2)]);
var state_6420__$1 = state_6420;
var statearr_6443_6508 = state_6420__$1;
(statearr_6443_6508[(2)] = inst_6392);

(statearr_6443_6508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (18))){
var inst_6403 = (state_6420[(2)]);
var state_6420__$1 = state_6420;
var statearr_6444_6509 = state_6420__$1;
(statearr_6444_6509[(2)] = inst_6403);

(statearr_6444_6509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6421 === (8))){
var inst_6389 = cljs.core.async.close_BANG_.call(null,to);
var state_6420__$1 = state_6420;
var statearr_6445_6510 = state_6420__$1;
(statearr_6445_6510[(2)] = inst_6389);

(statearr_6445_6510[(1)] = (10));


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
});})(c__4192__auto__,jobs,results,process,async))
;
return ((function (switch__4067__auto__,c__4192__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0 = (function (){
var statearr_6446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__);

(statearr_6446[(1)] = (1));

return statearr_6446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1 = (function (state_6420){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6447){var ex__4071__auto__ = e6447;
var statearr_6448_6511 = state_6420;
(statearr_6448_6511[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6420[(4)]))){
var statearr_6449_6512 = state_6420;
(statearr_6449_6512[(1)] = cljs.core.first.call(null,(state_6420[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6513 = state_6420;
state_6420 = G__6513;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__ = function(state_6420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1.call(this,state_6420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4068__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto__,jobs,results,process,async))
})();
var state__4194__auto__ = (function (){var statearr_6450 = f__4193__auto__.call(null);
(statearr_6450[(6)] = c__4192__auto__);

return statearr_6450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto__,jobs,results,process,async))
);

return c__4192__auto__;
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
var G__6515 = arguments.length;
switch (G__6515) {
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
var G__6518 = arguments.length;
switch (G__6518) {
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
var G__6521 = arguments.length;
switch (G__6521) {
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
var c__4192__auto___6571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___6571,tc,fc){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___6571,tc,fc){
return (function (state_6547){
var state_val_6548 = (state_6547[(1)]);
if((state_val_6548 === (7))){
var inst_6543 = (state_6547[(2)]);
var state_6547__$1 = state_6547;
var statearr_6549_6572 = state_6547__$1;
(statearr_6549_6572[(2)] = inst_6543);

(statearr_6549_6572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (1))){
var state_6547__$1 = state_6547;
var statearr_6550_6573 = state_6547__$1;
(statearr_6550_6573[(2)] = null);

(statearr_6550_6573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (4))){
var inst_6524 = (state_6547[(7)]);
var inst_6524__$1 = (state_6547[(2)]);
var inst_6525 = (inst_6524__$1 == null);
var state_6547__$1 = (function (){var statearr_6551 = state_6547;
(statearr_6551[(7)] = inst_6524__$1);

return statearr_6551;
})();
if(cljs.core.truth_(inst_6525)){
var statearr_6552_6574 = state_6547__$1;
(statearr_6552_6574[(1)] = (5));

} else {
var statearr_6553_6575 = state_6547__$1;
(statearr_6553_6575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (13))){
var state_6547__$1 = state_6547;
var statearr_6554_6576 = state_6547__$1;
(statearr_6554_6576[(2)] = null);

(statearr_6554_6576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (6))){
var inst_6524 = (state_6547[(7)]);
var inst_6530 = p.call(null,inst_6524);
var state_6547__$1 = state_6547;
if(cljs.core.truth_(inst_6530)){
var statearr_6555_6577 = state_6547__$1;
(statearr_6555_6577[(1)] = (9));

} else {
var statearr_6556_6578 = state_6547__$1;
(statearr_6556_6578[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (3))){
var inst_6545 = (state_6547[(2)]);
var state_6547__$1 = state_6547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6547__$1,inst_6545);
} else {
if((state_val_6548 === (12))){
var state_6547__$1 = state_6547;
var statearr_6557_6579 = state_6547__$1;
(statearr_6557_6579[(2)] = null);

(statearr_6557_6579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (2))){
var state_6547__$1 = state_6547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6547__$1,(4),ch);
} else {
if((state_val_6548 === (11))){
var inst_6524 = (state_6547[(7)]);
var inst_6534 = (state_6547[(2)]);
var state_6547__$1 = state_6547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6547__$1,(8),inst_6534,inst_6524);
} else {
if((state_val_6548 === (9))){
var state_6547__$1 = state_6547;
var statearr_6558_6580 = state_6547__$1;
(statearr_6558_6580[(2)] = tc);

(statearr_6558_6580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (5))){
var inst_6527 = cljs.core.async.close_BANG_.call(null,tc);
var inst_6528 = cljs.core.async.close_BANG_.call(null,fc);
var state_6547__$1 = (function (){var statearr_6559 = state_6547;
(statearr_6559[(8)] = inst_6527);

return statearr_6559;
})();
var statearr_6560_6581 = state_6547__$1;
(statearr_6560_6581[(2)] = inst_6528);

(statearr_6560_6581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (14))){
var inst_6541 = (state_6547[(2)]);
var state_6547__$1 = state_6547;
var statearr_6561_6582 = state_6547__$1;
(statearr_6561_6582[(2)] = inst_6541);

(statearr_6561_6582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (10))){
var state_6547__$1 = state_6547;
var statearr_6562_6583 = state_6547__$1;
(statearr_6562_6583[(2)] = fc);

(statearr_6562_6583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6548 === (8))){
var inst_6536 = (state_6547[(2)]);
var state_6547__$1 = state_6547;
if(cljs.core.truth_(inst_6536)){
var statearr_6563_6584 = state_6547__$1;
(statearr_6563_6584[(1)] = (12));

} else {
var statearr_6564_6585 = state_6547__$1;
(statearr_6564_6585[(1)] = (13));

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
});})(c__4192__auto___6571,tc,fc))
;
return ((function (switch__4067__auto__,c__4192__auto___6571,tc,fc){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_6565 = [null,null,null,null,null,null,null,null,null];
(statearr_6565[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_6565[(1)] = (1));

return statearr_6565;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_6547){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6566){var ex__4071__auto__ = e6566;
var statearr_6567_6586 = state_6547;
(statearr_6567_6586[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6547[(4)]))){
var statearr_6568_6587 = state_6547;
(statearr_6568_6587[(1)] = cljs.core.first.call(null,(state_6547[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6588 = state_6547;
state_6547 = G__6588;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_6547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_6547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___6571,tc,fc))
})();
var state__4194__auto__ = (function (){var statearr_6569 = f__4193__auto__.call(null);
(statearr_6569[(6)] = c__4192__auto___6571);

return statearr_6569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___6571,tc,fc))
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
var c__4192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto__){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto__){
return (function (state_6610){
var state_val_6611 = (state_6610[(1)]);
if((state_val_6611 === (7))){
var inst_6606 = (state_6610[(2)]);
var state_6610__$1 = state_6610;
var statearr_6612_6631 = state_6610__$1;
(statearr_6612_6631[(2)] = inst_6606);

(statearr_6612_6631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (1))){
var inst_6589 = init;
var inst_6590 = inst_6589;
var state_6610__$1 = (function (){var statearr_6613 = state_6610;
(statearr_6613[(7)] = inst_6590);

return statearr_6613;
})();
var statearr_6614_6632 = state_6610__$1;
(statearr_6614_6632[(2)] = null);

(statearr_6614_6632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (4))){
var inst_6593 = (state_6610[(8)]);
var inst_6593__$1 = (state_6610[(2)]);
var inst_6594 = (inst_6593__$1 == null);
var state_6610__$1 = (function (){var statearr_6615 = state_6610;
(statearr_6615[(8)] = inst_6593__$1);

return statearr_6615;
})();
if(cljs.core.truth_(inst_6594)){
var statearr_6616_6633 = state_6610__$1;
(statearr_6616_6633[(1)] = (5));

} else {
var statearr_6617_6634 = state_6610__$1;
(statearr_6617_6634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (6))){
var inst_6590 = (state_6610[(7)]);
var inst_6593 = (state_6610[(8)]);
var inst_6597 = (state_6610[(9)]);
var inst_6597__$1 = f.call(null,inst_6590,inst_6593);
var inst_6598 = cljs.core.reduced_QMARK_.call(null,inst_6597__$1);
var state_6610__$1 = (function (){var statearr_6618 = state_6610;
(statearr_6618[(9)] = inst_6597__$1);

return statearr_6618;
})();
if(inst_6598){
var statearr_6619_6635 = state_6610__$1;
(statearr_6619_6635[(1)] = (8));

} else {
var statearr_6620_6636 = state_6610__$1;
(statearr_6620_6636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (3))){
var inst_6608 = (state_6610[(2)]);
var state_6610__$1 = state_6610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6610__$1,inst_6608);
} else {
if((state_val_6611 === (2))){
var state_6610__$1 = state_6610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6610__$1,(4),ch);
} else {
if((state_val_6611 === (9))){
var inst_6597 = (state_6610[(9)]);
var inst_6590 = inst_6597;
var state_6610__$1 = (function (){var statearr_6621 = state_6610;
(statearr_6621[(7)] = inst_6590);

return statearr_6621;
})();
var statearr_6622_6637 = state_6610__$1;
(statearr_6622_6637[(2)] = null);

(statearr_6622_6637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (5))){
var inst_6590 = (state_6610[(7)]);
var state_6610__$1 = state_6610;
var statearr_6623_6638 = state_6610__$1;
(statearr_6623_6638[(2)] = inst_6590);

(statearr_6623_6638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (10))){
var inst_6604 = (state_6610[(2)]);
var state_6610__$1 = state_6610;
var statearr_6624_6639 = state_6610__$1;
(statearr_6624_6639[(2)] = inst_6604);

(statearr_6624_6639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6611 === (8))){
var inst_6597 = (state_6610[(9)]);
var inst_6600 = cljs.core.deref.call(null,inst_6597);
var state_6610__$1 = state_6610;
var statearr_6625_6640 = state_6610__$1;
(statearr_6625_6640[(2)] = inst_6600);

(statearr_6625_6640[(1)] = (10));


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
});})(c__4192__auto__))
;
return ((function (switch__4067__auto__,c__4192__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4068__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4068__auto____0 = (function (){
var statearr_6626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6626[(0)] = cljs$core$async$reduce_$_state_machine__4068__auto__);

(statearr_6626[(1)] = (1));

return statearr_6626;
});
var cljs$core$async$reduce_$_state_machine__4068__auto____1 = (function (state_6610){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6627){var ex__4071__auto__ = e6627;
var statearr_6628_6641 = state_6610;
(statearr_6628_6641[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6610[(4)]))){
var statearr_6629_6642 = state_6610;
(statearr_6629_6642[(1)] = cljs.core.first.call(null,(state_6610[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6643 = state_6610;
state_6610 = G__6643;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4068__auto__ = function(state_6610){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4068__auto____1.call(this,state_6610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4068__auto____0;
cljs$core$async$reduce_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4068__auto____1;
return cljs$core$async$reduce_$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto__))
})();
var state__4194__auto__ = (function (){var statearr_6630 = f__4193__auto__.call(null);
(statearr_6630[(6)] = c__4192__auto__);

return statearr_6630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto__))
);

return c__4192__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__4192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto__,f__$1){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto__,f__$1){
return (function (state_6649){
var state_val_6650 = (state_6649[(1)]);
if((state_val_6650 === (1))){
var inst_6644 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_6649__$1 = state_6649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6649__$1,(2),inst_6644);
} else {
if((state_val_6650 === (2))){
var inst_6646 = (state_6649[(2)]);
var inst_6647 = f__$1.call(null,inst_6646);
var state_6649__$1 = state_6649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6649__$1,inst_6647);
} else {
return null;
}
}
});})(c__4192__auto__,f__$1))
;
return ((function (switch__4067__auto__,c__4192__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4068__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4068__auto____0 = (function (){
var statearr_6651 = [null,null,null,null,null,null,null];
(statearr_6651[(0)] = cljs$core$async$transduce_$_state_machine__4068__auto__);

(statearr_6651[(1)] = (1));

return statearr_6651;
});
var cljs$core$async$transduce_$_state_machine__4068__auto____1 = (function (state_6649){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6652){var ex__4071__auto__ = e6652;
var statearr_6653_6656 = state_6649;
(statearr_6653_6656[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6649[(4)]))){
var statearr_6654_6657 = state_6649;
(statearr_6654_6657[(1)] = cljs.core.first.call(null,(state_6649[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6658 = state_6649;
state_6649 = G__6658;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4068__auto__ = function(state_6649){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4068__auto____1.call(this,state_6649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4068__auto____0;
cljs$core$async$transduce_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4068__auto____1;
return cljs$core$async$transduce_$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto__,f__$1))
})();
var state__4194__auto__ = (function (){var statearr_6655 = f__4193__auto__.call(null);
(statearr_6655[(6)] = c__4192__auto__);

return statearr_6655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto__,f__$1))
);

return c__4192__auto__;
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
var G__6660 = arguments.length;
switch (G__6660) {
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
var c__4192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto__){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto__){
return (function (state_6685){
var state_val_6686 = (state_6685[(1)]);
if((state_val_6686 === (7))){
var inst_6667 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
var statearr_6687_6709 = state_6685__$1;
(statearr_6687_6709[(2)] = inst_6667);

(statearr_6687_6709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (1))){
var inst_6661 = cljs.core.seq.call(null,coll);
var inst_6662 = inst_6661;
var state_6685__$1 = (function (){var statearr_6688 = state_6685;
(statearr_6688[(7)] = inst_6662);

return statearr_6688;
})();
var statearr_6689_6710 = state_6685__$1;
(statearr_6689_6710[(2)] = null);

(statearr_6689_6710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (4))){
var inst_6662 = (state_6685[(7)]);
var inst_6665 = cljs.core.first.call(null,inst_6662);
var state_6685__$1 = state_6685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6685__$1,(7),ch,inst_6665);
} else {
if((state_val_6686 === (13))){
var inst_6679 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
var statearr_6690_6711 = state_6685__$1;
(statearr_6690_6711[(2)] = inst_6679);

(statearr_6690_6711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (6))){
var inst_6670 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
if(cljs.core.truth_(inst_6670)){
var statearr_6691_6712 = state_6685__$1;
(statearr_6691_6712[(1)] = (8));

} else {
var statearr_6692_6713 = state_6685__$1;
(statearr_6692_6713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (3))){
var inst_6683 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6685__$1,inst_6683);
} else {
if((state_val_6686 === (12))){
var state_6685__$1 = state_6685;
var statearr_6693_6714 = state_6685__$1;
(statearr_6693_6714[(2)] = null);

(statearr_6693_6714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (2))){
var inst_6662 = (state_6685[(7)]);
var state_6685__$1 = state_6685;
if(cljs.core.truth_(inst_6662)){
var statearr_6694_6715 = state_6685__$1;
(statearr_6694_6715[(1)] = (4));

} else {
var statearr_6695_6716 = state_6685__$1;
(statearr_6695_6716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (11))){
var inst_6676 = cljs.core.async.close_BANG_.call(null,ch);
var state_6685__$1 = state_6685;
var statearr_6696_6717 = state_6685__$1;
(statearr_6696_6717[(2)] = inst_6676);

(statearr_6696_6717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (9))){
var state_6685__$1 = state_6685;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6697_6718 = state_6685__$1;
(statearr_6697_6718[(1)] = (11));

} else {
var statearr_6698_6719 = state_6685__$1;
(statearr_6698_6719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (5))){
var inst_6662 = (state_6685[(7)]);
var state_6685__$1 = state_6685;
var statearr_6699_6720 = state_6685__$1;
(statearr_6699_6720[(2)] = inst_6662);

(statearr_6699_6720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (10))){
var inst_6681 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
var statearr_6700_6721 = state_6685__$1;
(statearr_6700_6721[(2)] = inst_6681);

(statearr_6700_6721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (8))){
var inst_6662 = (state_6685[(7)]);
var inst_6672 = cljs.core.next.call(null,inst_6662);
var inst_6662__$1 = inst_6672;
var state_6685__$1 = (function (){var statearr_6701 = state_6685;
(statearr_6701[(7)] = inst_6662__$1);

return statearr_6701;
})();
var statearr_6702_6722 = state_6685__$1;
(statearr_6702_6722[(2)] = null);

(statearr_6702_6722[(1)] = (2));


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
});})(c__4192__auto__))
;
return ((function (switch__4067__auto__,c__4192__auto__){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_6703 = [null,null,null,null,null,null,null,null];
(statearr_6703[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_6703[(1)] = (1));

return statearr_6703;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_6685){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6704){var ex__4071__auto__ = e6704;
var statearr_6705_6723 = state_6685;
(statearr_6705_6723[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6685[(4)]))){
var statearr_6706_6724 = state_6685;
(statearr_6706_6724[(1)] = cljs.core.first.call(null,(state_6685[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6725 = state_6685;
state_6685 = G__6725;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_6685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_6685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto__))
})();
var state__4194__auto__ = (function (){var statearr_6707 = f__4193__auto__.call(null);
(statearr_6707[(6)] = c__4192__auto__);

return statearr_6707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto__))
);

return c__4192__auto__;
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
var G__6727 = arguments.length;
switch (G__6727) {
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
if(typeof cljs.core.async.t_cljs$core$async6729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6729 = (function (ch,cs,meta6730){
this.ch = ch;
this.cs = cs;
this.meta6730 = meta6730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_6731,meta6730__$1){
var self__ = this;
var _6731__$1 = this;
return (new cljs.core.async.t_cljs$core$async6729(self__.ch,self__.cs,meta6730__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_6731){
var self__ = this;
var _6731__$1 = this;
return self__.meta6730;
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta6730","meta6730",1916672555,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async6729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6729";

cljs.core.async.t_cljs$core$async6729.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6729");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6729.
 */
cljs.core.async.__GT_t_cljs$core$async6729 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async6729(ch__$1,cs__$1,meta6730){
return (new cljs.core.async.t_cljs$core$async6729(ch__$1,cs__$1,meta6730));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async6729(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__4192__auto___6948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___6948,cs,m,dchan,dctr,done){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___6948,cs,m,dchan,dctr,done){
return (function (state_6864){
var state_val_6865 = (state_6864[(1)]);
if((state_val_6865 === (7))){
var inst_6860 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6866_6949 = state_6864__$1;
(statearr_6866_6949[(2)] = inst_6860);

(statearr_6866_6949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (20))){
var inst_6765 = (state_6864[(7)]);
var inst_6777 = cljs.core.first.call(null,inst_6765);
var inst_6778 = cljs.core.nth.call(null,inst_6777,(0),null);
var inst_6779 = cljs.core.nth.call(null,inst_6777,(1),null);
var state_6864__$1 = (function (){var statearr_6867 = state_6864;
(statearr_6867[(8)] = inst_6778);

return statearr_6867;
})();
if(cljs.core.truth_(inst_6779)){
var statearr_6868_6950 = state_6864__$1;
(statearr_6868_6950[(1)] = (22));

} else {
var statearr_6869_6951 = state_6864__$1;
(statearr_6869_6951[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (27))){
var inst_6734 = (state_6864[(9)]);
var inst_6809 = (state_6864[(10)]);
var inst_6814 = (state_6864[(11)]);
var inst_6807 = (state_6864[(12)]);
var inst_6814__$1 = cljs.core._nth.call(null,inst_6807,inst_6809);
var inst_6815 = cljs.core.async.put_BANG_.call(null,inst_6814__$1,inst_6734,done);
var state_6864__$1 = (function (){var statearr_6870 = state_6864;
(statearr_6870[(11)] = inst_6814__$1);

return statearr_6870;
})();
if(cljs.core.truth_(inst_6815)){
var statearr_6871_6952 = state_6864__$1;
(statearr_6871_6952[(1)] = (30));

} else {
var statearr_6872_6953 = state_6864__$1;
(statearr_6872_6953[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (1))){
var state_6864__$1 = state_6864;
var statearr_6873_6954 = state_6864__$1;
(statearr_6873_6954[(2)] = null);

(statearr_6873_6954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (24))){
var inst_6765 = (state_6864[(7)]);
var inst_6784 = (state_6864[(2)]);
var inst_6785 = cljs.core.next.call(null,inst_6765);
var inst_6743 = inst_6785;
var inst_6744 = null;
var inst_6745 = (0);
var inst_6746 = (0);
var state_6864__$1 = (function (){var statearr_6874 = state_6864;
(statearr_6874[(13)] = inst_6746);

(statearr_6874[(14)] = inst_6743);

(statearr_6874[(15)] = inst_6744);

(statearr_6874[(16)] = inst_6745);

(statearr_6874[(17)] = inst_6784);

return statearr_6874;
})();
var statearr_6875_6955 = state_6864__$1;
(statearr_6875_6955[(2)] = null);

(statearr_6875_6955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (39))){
var state_6864__$1 = state_6864;
var statearr_6879_6956 = state_6864__$1;
(statearr_6879_6956[(2)] = null);

(statearr_6879_6956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (4))){
var inst_6734 = (state_6864[(9)]);
var inst_6734__$1 = (state_6864[(2)]);
var inst_6735 = (inst_6734__$1 == null);
var state_6864__$1 = (function (){var statearr_6880 = state_6864;
(statearr_6880[(9)] = inst_6734__$1);

return statearr_6880;
})();
if(cljs.core.truth_(inst_6735)){
var statearr_6881_6957 = state_6864__$1;
(statearr_6881_6957[(1)] = (5));

} else {
var statearr_6882_6958 = state_6864__$1;
(statearr_6882_6958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (15))){
var inst_6746 = (state_6864[(13)]);
var inst_6743 = (state_6864[(14)]);
var inst_6744 = (state_6864[(15)]);
var inst_6745 = (state_6864[(16)]);
var inst_6761 = (state_6864[(2)]);
var inst_6762 = (inst_6746 + (1));
var tmp6876 = inst_6743;
var tmp6877 = inst_6744;
var tmp6878 = inst_6745;
var inst_6743__$1 = tmp6876;
var inst_6744__$1 = tmp6877;
var inst_6745__$1 = tmp6878;
var inst_6746__$1 = inst_6762;
var state_6864__$1 = (function (){var statearr_6883 = state_6864;
(statearr_6883[(13)] = inst_6746__$1);

(statearr_6883[(14)] = inst_6743__$1);

(statearr_6883[(15)] = inst_6744__$1);

(statearr_6883[(16)] = inst_6745__$1);

(statearr_6883[(18)] = inst_6761);

return statearr_6883;
})();
var statearr_6884_6959 = state_6864__$1;
(statearr_6884_6959[(2)] = null);

(statearr_6884_6959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (21))){
var inst_6788 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6888_6960 = state_6864__$1;
(statearr_6888_6960[(2)] = inst_6788);

(statearr_6888_6960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (31))){
var inst_6814 = (state_6864[(11)]);
var inst_6818 = cljs.core.async.untap_STAR_.call(null,m,inst_6814);
var state_6864__$1 = state_6864;
var statearr_6889_6961 = state_6864__$1;
(statearr_6889_6961[(2)] = inst_6818);

(statearr_6889_6961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (32))){
var inst_6806 = (state_6864[(19)]);
var inst_6809 = (state_6864[(10)]);
var inst_6808 = (state_6864[(20)]);
var inst_6807 = (state_6864[(12)]);
var inst_6820 = (state_6864[(2)]);
var inst_6821 = (inst_6809 + (1));
var tmp6885 = inst_6806;
var tmp6886 = inst_6808;
var tmp6887 = inst_6807;
var inst_6806__$1 = tmp6885;
var inst_6807__$1 = tmp6887;
var inst_6808__$1 = tmp6886;
var inst_6809__$1 = inst_6821;
var state_6864__$1 = (function (){var statearr_6890 = state_6864;
(statearr_6890[(21)] = inst_6820);

(statearr_6890[(19)] = inst_6806__$1);

(statearr_6890[(10)] = inst_6809__$1);

(statearr_6890[(20)] = inst_6808__$1);

(statearr_6890[(12)] = inst_6807__$1);

return statearr_6890;
})();
var statearr_6891_6962 = state_6864__$1;
(statearr_6891_6962[(2)] = null);

(statearr_6891_6962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (40))){
var inst_6833 = (state_6864[(22)]);
var inst_6837 = cljs.core.async.untap_STAR_.call(null,m,inst_6833);
var state_6864__$1 = state_6864;
var statearr_6892_6963 = state_6864__$1;
(statearr_6892_6963[(2)] = inst_6837);

(statearr_6892_6963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (33))){
var inst_6824 = (state_6864[(23)]);
var inst_6826 = cljs.core.chunked_seq_QMARK_.call(null,inst_6824);
var state_6864__$1 = state_6864;
if(inst_6826){
var statearr_6893_6964 = state_6864__$1;
(statearr_6893_6964[(1)] = (36));

} else {
var statearr_6894_6965 = state_6864__$1;
(statearr_6894_6965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (13))){
var inst_6755 = (state_6864[(24)]);
var inst_6758 = cljs.core.async.close_BANG_.call(null,inst_6755);
var state_6864__$1 = state_6864;
var statearr_6895_6966 = state_6864__$1;
(statearr_6895_6966[(2)] = inst_6758);

(statearr_6895_6966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (22))){
var inst_6778 = (state_6864[(8)]);
var inst_6781 = cljs.core.async.close_BANG_.call(null,inst_6778);
var state_6864__$1 = state_6864;
var statearr_6896_6967 = state_6864__$1;
(statearr_6896_6967[(2)] = inst_6781);

(statearr_6896_6967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (36))){
var inst_6824 = (state_6864[(23)]);
var inst_6828 = cljs.core.chunk_first.call(null,inst_6824);
var inst_6829 = cljs.core.chunk_rest.call(null,inst_6824);
var inst_6830 = cljs.core.count.call(null,inst_6828);
var inst_6806 = inst_6829;
var inst_6807 = inst_6828;
var inst_6808 = inst_6830;
var inst_6809 = (0);
var state_6864__$1 = (function (){var statearr_6897 = state_6864;
(statearr_6897[(19)] = inst_6806);

(statearr_6897[(10)] = inst_6809);

(statearr_6897[(20)] = inst_6808);

(statearr_6897[(12)] = inst_6807);

return statearr_6897;
})();
var statearr_6898_6968 = state_6864__$1;
(statearr_6898_6968[(2)] = null);

(statearr_6898_6968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (41))){
var inst_6824 = (state_6864[(23)]);
var inst_6839 = (state_6864[(2)]);
var inst_6840 = cljs.core.next.call(null,inst_6824);
var inst_6806 = inst_6840;
var inst_6807 = null;
var inst_6808 = (0);
var inst_6809 = (0);
var state_6864__$1 = (function (){var statearr_6899 = state_6864;
(statearr_6899[(19)] = inst_6806);

(statearr_6899[(10)] = inst_6809);

(statearr_6899[(20)] = inst_6808);

(statearr_6899[(25)] = inst_6839);

(statearr_6899[(12)] = inst_6807);

return statearr_6899;
})();
var statearr_6900_6969 = state_6864__$1;
(statearr_6900_6969[(2)] = null);

(statearr_6900_6969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (43))){
var state_6864__$1 = state_6864;
var statearr_6901_6970 = state_6864__$1;
(statearr_6901_6970[(2)] = null);

(statearr_6901_6970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (29))){
var inst_6848 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6902_6971 = state_6864__$1;
(statearr_6902_6971[(2)] = inst_6848);

(statearr_6902_6971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (44))){
var inst_6857 = (state_6864[(2)]);
var state_6864__$1 = (function (){var statearr_6903 = state_6864;
(statearr_6903[(26)] = inst_6857);

return statearr_6903;
})();
var statearr_6904_6972 = state_6864__$1;
(statearr_6904_6972[(2)] = null);

(statearr_6904_6972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (6))){
var inst_6798 = (state_6864[(27)]);
var inst_6797 = cljs.core.deref.call(null,cs);
var inst_6798__$1 = cljs.core.keys.call(null,inst_6797);
var inst_6799 = cljs.core.count.call(null,inst_6798__$1);
var inst_6800 = cljs.core.reset_BANG_.call(null,dctr,inst_6799);
var inst_6805 = cljs.core.seq.call(null,inst_6798__$1);
var inst_6806 = inst_6805;
var inst_6807 = null;
var inst_6808 = (0);
var inst_6809 = (0);
var state_6864__$1 = (function (){var statearr_6905 = state_6864;
(statearr_6905[(19)] = inst_6806);

(statearr_6905[(10)] = inst_6809);

(statearr_6905[(20)] = inst_6808);

(statearr_6905[(27)] = inst_6798__$1);

(statearr_6905[(12)] = inst_6807);

(statearr_6905[(28)] = inst_6800);

return statearr_6905;
})();
var statearr_6906_6973 = state_6864__$1;
(statearr_6906_6973[(2)] = null);

(statearr_6906_6973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (28))){
var inst_6806 = (state_6864[(19)]);
var inst_6824 = (state_6864[(23)]);
var inst_6824__$1 = cljs.core.seq.call(null,inst_6806);
var state_6864__$1 = (function (){var statearr_6907 = state_6864;
(statearr_6907[(23)] = inst_6824__$1);

return statearr_6907;
})();
if(inst_6824__$1){
var statearr_6908_6974 = state_6864__$1;
(statearr_6908_6974[(1)] = (33));

} else {
var statearr_6909_6975 = state_6864__$1;
(statearr_6909_6975[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (25))){
var inst_6809 = (state_6864[(10)]);
var inst_6808 = (state_6864[(20)]);
var inst_6811 = (inst_6809 < inst_6808);
var inst_6812 = inst_6811;
var state_6864__$1 = state_6864;
if(cljs.core.truth_(inst_6812)){
var statearr_6910_6976 = state_6864__$1;
(statearr_6910_6976[(1)] = (27));

} else {
var statearr_6911_6977 = state_6864__$1;
(statearr_6911_6977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (34))){
var state_6864__$1 = state_6864;
var statearr_6912_6978 = state_6864__$1;
(statearr_6912_6978[(2)] = null);

(statearr_6912_6978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (17))){
var state_6864__$1 = state_6864;
var statearr_6913_6979 = state_6864__$1;
(statearr_6913_6979[(2)] = null);

(statearr_6913_6979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (3))){
var inst_6862 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6864__$1,inst_6862);
} else {
if((state_val_6865 === (12))){
var inst_6793 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6914_6980 = state_6864__$1;
(statearr_6914_6980[(2)] = inst_6793);

(statearr_6914_6980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (2))){
var state_6864__$1 = state_6864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6864__$1,(4),ch);
} else {
if((state_val_6865 === (23))){
var state_6864__$1 = state_6864;
var statearr_6915_6981 = state_6864__$1;
(statearr_6915_6981[(2)] = null);

(statearr_6915_6981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (35))){
var inst_6846 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6916_6982 = state_6864__$1;
(statearr_6916_6982[(2)] = inst_6846);

(statearr_6916_6982[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (19))){
var inst_6765 = (state_6864[(7)]);
var inst_6769 = cljs.core.chunk_first.call(null,inst_6765);
var inst_6770 = cljs.core.chunk_rest.call(null,inst_6765);
var inst_6771 = cljs.core.count.call(null,inst_6769);
var inst_6743 = inst_6770;
var inst_6744 = inst_6769;
var inst_6745 = inst_6771;
var inst_6746 = (0);
var state_6864__$1 = (function (){var statearr_6917 = state_6864;
(statearr_6917[(13)] = inst_6746);

(statearr_6917[(14)] = inst_6743);

(statearr_6917[(15)] = inst_6744);

(statearr_6917[(16)] = inst_6745);

return statearr_6917;
})();
var statearr_6918_6983 = state_6864__$1;
(statearr_6918_6983[(2)] = null);

(statearr_6918_6983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (11))){
var inst_6743 = (state_6864[(14)]);
var inst_6765 = (state_6864[(7)]);
var inst_6765__$1 = cljs.core.seq.call(null,inst_6743);
var state_6864__$1 = (function (){var statearr_6919 = state_6864;
(statearr_6919[(7)] = inst_6765__$1);

return statearr_6919;
})();
if(inst_6765__$1){
var statearr_6920_6984 = state_6864__$1;
(statearr_6920_6984[(1)] = (16));

} else {
var statearr_6921_6985 = state_6864__$1;
(statearr_6921_6985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (9))){
var inst_6795 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6922_6986 = state_6864__$1;
(statearr_6922_6986[(2)] = inst_6795);

(statearr_6922_6986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (5))){
var inst_6741 = cljs.core.deref.call(null,cs);
var inst_6742 = cljs.core.seq.call(null,inst_6741);
var inst_6743 = inst_6742;
var inst_6744 = null;
var inst_6745 = (0);
var inst_6746 = (0);
var state_6864__$1 = (function (){var statearr_6923 = state_6864;
(statearr_6923[(13)] = inst_6746);

(statearr_6923[(14)] = inst_6743);

(statearr_6923[(15)] = inst_6744);

(statearr_6923[(16)] = inst_6745);

return statearr_6923;
})();
var statearr_6924_6987 = state_6864__$1;
(statearr_6924_6987[(2)] = null);

(statearr_6924_6987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (14))){
var state_6864__$1 = state_6864;
var statearr_6925_6988 = state_6864__$1;
(statearr_6925_6988[(2)] = null);

(statearr_6925_6988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (45))){
var inst_6854 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6926_6989 = state_6864__$1;
(statearr_6926_6989[(2)] = inst_6854);

(statearr_6926_6989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (26))){
var inst_6798 = (state_6864[(27)]);
var inst_6850 = (state_6864[(2)]);
var inst_6851 = cljs.core.seq.call(null,inst_6798);
var state_6864__$1 = (function (){var statearr_6927 = state_6864;
(statearr_6927[(29)] = inst_6850);

return statearr_6927;
})();
if(inst_6851){
var statearr_6928_6990 = state_6864__$1;
(statearr_6928_6990[(1)] = (42));

} else {
var statearr_6929_6991 = state_6864__$1;
(statearr_6929_6991[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (16))){
var inst_6765 = (state_6864[(7)]);
var inst_6767 = cljs.core.chunked_seq_QMARK_.call(null,inst_6765);
var state_6864__$1 = state_6864;
if(inst_6767){
var statearr_6930_6992 = state_6864__$1;
(statearr_6930_6992[(1)] = (19));

} else {
var statearr_6931_6993 = state_6864__$1;
(statearr_6931_6993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (38))){
var inst_6843 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6932_6994 = state_6864__$1;
(statearr_6932_6994[(2)] = inst_6843);

(statearr_6932_6994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (30))){
var state_6864__$1 = state_6864;
var statearr_6933_6995 = state_6864__$1;
(statearr_6933_6995[(2)] = null);

(statearr_6933_6995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (10))){
var inst_6746 = (state_6864[(13)]);
var inst_6744 = (state_6864[(15)]);
var inst_6754 = cljs.core._nth.call(null,inst_6744,inst_6746);
var inst_6755 = cljs.core.nth.call(null,inst_6754,(0),null);
var inst_6756 = cljs.core.nth.call(null,inst_6754,(1),null);
var state_6864__$1 = (function (){var statearr_6934 = state_6864;
(statearr_6934[(24)] = inst_6755);

return statearr_6934;
})();
if(cljs.core.truth_(inst_6756)){
var statearr_6935_6996 = state_6864__$1;
(statearr_6935_6996[(1)] = (13));

} else {
var statearr_6936_6997 = state_6864__$1;
(statearr_6936_6997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (18))){
var inst_6791 = (state_6864[(2)]);
var state_6864__$1 = state_6864;
var statearr_6937_6998 = state_6864__$1;
(statearr_6937_6998[(2)] = inst_6791);

(statearr_6937_6998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (42))){
var state_6864__$1 = state_6864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6864__$1,(45),dchan);
} else {
if((state_val_6865 === (37))){
var inst_6734 = (state_6864[(9)]);
var inst_6833 = (state_6864[(22)]);
var inst_6824 = (state_6864[(23)]);
var inst_6833__$1 = cljs.core.first.call(null,inst_6824);
var inst_6834 = cljs.core.async.put_BANG_.call(null,inst_6833__$1,inst_6734,done);
var state_6864__$1 = (function (){var statearr_6938 = state_6864;
(statearr_6938[(22)] = inst_6833__$1);

return statearr_6938;
})();
if(cljs.core.truth_(inst_6834)){
var statearr_6939_6999 = state_6864__$1;
(statearr_6939_6999[(1)] = (39));

} else {
var statearr_6940_7000 = state_6864__$1;
(statearr_6940_7000[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6865 === (8))){
var inst_6746 = (state_6864[(13)]);
var inst_6745 = (state_6864[(16)]);
var inst_6748 = (inst_6746 < inst_6745);
var inst_6749 = inst_6748;
var state_6864__$1 = state_6864;
if(cljs.core.truth_(inst_6749)){
var statearr_6941_7001 = state_6864__$1;
(statearr_6941_7001[(1)] = (10));

} else {
var statearr_6942_7002 = state_6864__$1;
(statearr_6942_7002[(1)] = (11));

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
});})(c__4192__auto___6948,cs,m,dchan,dctr,done))
;
return ((function (switch__4067__auto__,c__4192__auto___6948,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4068__auto__ = null;
var cljs$core$async$mult_$_state_machine__4068__auto____0 = (function (){
var statearr_6943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6943[(0)] = cljs$core$async$mult_$_state_machine__4068__auto__);

(statearr_6943[(1)] = (1));

return statearr_6943;
});
var cljs$core$async$mult_$_state_machine__4068__auto____1 = (function (state_6864){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_6864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e6944){var ex__4071__auto__ = e6944;
var statearr_6945_7003 = state_6864;
(statearr_6945_7003[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_6864[(4)]))){
var statearr_6946_7004 = state_6864;
(statearr_6946_7004[(1)] = cljs.core.first.call(null,(state_6864[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7005 = state_6864;
state_6864 = G__7005;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4068__auto__ = function(state_6864){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4068__auto____1.call(this,state_6864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4068__auto____0;
cljs$core$async$mult_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4068__auto____1;
return cljs$core$async$mult_$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___6948,cs,m,dchan,dctr,done))
})();
var state__4194__auto__ = (function (){var statearr_6947 = f__4193__auto__.call(null);
(statearr_6947[(6)] = c__4192__auto___6948);

return statearr_6947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___6948,cs,m,dchan,dctr,done))
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
var G__7007 = arguments.length;
switch (G__7007) {
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
var len__4497__auto___7019 = arguments.length;
var i__4498__auto___7020 = (0);
while(true){
if((i__4498__auto___7020 < len__4497__auto___7019)){
args__4500__auto__.push((arguments[i__4498__auto___7020]));

var G__7021 = (i__4498__auto___7020 + (1));
i__4498__auto___7020 = G__7021;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7013){
var map__7014 = p__7013;
var map__7014__$1 = ((((!((map__7014 == null)))?(((((map__7014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7014):map__7014);
var opts = map__7014__$1;
var statearr_7016_7022 = state;
(statearr_7016_7022[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__7014,map__7014__$1,opts){
return (function (val){
var statearr_7017_7023 = state;
(statearr_7017_7023[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7014,map__7014__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_7018_7024 = state;
(statearr_7018_7024[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7009){
var G__7010 = cljs.core.first.call(null,seq7009);
var seq7009__$1 = cljs.core.next.call(null,seq7009);
var G__7011 = cljs.core.first.call(null,seq7009__$1);
var seq7009__$2 = cljs.core.next.call(null,seq7009__$1);
var G__7012 = cljs.core.first.call(null,seq7009__$2);
var seq7009__$3 = cljs.core.next.call(null,seq7009__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7010,G__7011,G__7012,seq7009__$3);
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
if(typeof cljs.core.async.t_cljs$core$async7025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7025 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta7026){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta7026 = meta7026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7027,meta7026__$1){
var self__ = this;
var _7027__$1 = this;
return (new cljs.core.async.t_cljs$core$async7025(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta7026__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7027){
var self__ = this;
var _7027__$1 = this;
return self__.meta7026;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async7025.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta7026","meta7026",272905214,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7025";

cljs.core.async.t_cljs$core$async7025.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7025");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7025.
 */
cljs.core.async.__GT_t_cljs$core$async7025 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7025(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta7026){
return (new cljs.core.async.t_cljs$core$async7025(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta7026));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7025(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4192__auto___7190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7129){
var state_val_7130 = (state_7129[(1)]);
if((state_val_7130 === (7))){
var inst_7044 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7131_7191 = state_7129__$1;
(statearr_7131_7191[(2)] = inst_7044);

(statearr_7131_7191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (20))){
var inst_7056 = (state_7129[(7)]);
var state_7129__$1 = state_7129;
var statearr_7132_7192 = state_7129__$1;
(statearr_7132_7192[(2)] = inst_7056);

(statearr_7132_7192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (27))){
var state_7129__$1 = state_7129;
var statearr_7133_7193 = state_7129__$1;
(statearr_7133_7193[(2)] = null);

(statearr_7133_7193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (1))){
var inst_7031 = (state_7129[(8)]);
var inst_7031__$1 = calc_state.call(null);
var inst_7033 = (inst_7031__$1 == null);
var inst_7034 = cljs.core.not.call(null,inst_7033);
var state_7129__$1 = (function (){var statearr_7134 = state_7129;
(statearr_7134[(8)] = inst_7031__$1);

return statearr_7134;
})();
if(inst_7034){
var statearr_7135_7194 = state_7129__$1;
(statearr_7135_7194[(1)] = (2));

} else {
var statearr_7136_7195 = state_7129__$1;
(statearr_7136_7195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (24))){
var inst_7089 = (state_7129[(9)]);
var inst_7080 = (state_7129[(10)]);
var inst_7103 = (state_7129[(11)]);
var inst_7103__$1 = inst_7080.call(null,inst_7089);
var state_7129__$1 = (function (){var statearr_7137 = state_7129;
(statearr_7137[(11)] = inst_7103__$1);

return statearr_7137;
})();
if(cljs.core.truth_(inst_7103__$1)){
var statearr_7138_7196 = state_7129__$1;
(statearr_7138_7196[(1)] = (29));

} else {
var statearr_7139_7197 = state_7129__$1;
(statearr_7139_7197[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (4))){
var inst_7047 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7047)){
var statearr_7140_7198 = state_7129__$1;
(statearr_7140_7198[(1)] = (8));

} else {
var statearr_7141_7199 = state_7129__$1;
(statearr_7141_7199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (15))){
var inst_7074 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7074)){
var statearr_7142_7200 = state_7129__$1;
(statearr_7142_7200[(1)] = (19));

} else {
var statearr_7143_7201 = state_7129__$1;
(statearr_7143_7201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (21))){
var inst_7079 = (state_7129[(12)]);
var inst_7079__$1 = (state_7129[(2)]);
var inst_7080 = cljs.core.get.call(null,inst_7079__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7081 = cljs.core.get.call(null,inst_7079__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7082 = cljs.core.get.call(null,inst_7079__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7129__$1 = (function (){var statearr_7144 = state_7129;
(statearr_7144[(10)] = inst_7080);

(statearr_7144[(13)] = inst_7081);

(statearr_7144[(12)] = inst_7079__$1);

return statearr_7144;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7129__$1,(22),inst_7082);
} else {
if((state_val_7130 === (31))){
var inst_7111 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7111)){
var statearr_7145_7202 = state_7129__$1;
(statearr_7145_7202[(1)] = (32));

} else {
var statearr_7146_7203 = state_7129__$1;
(statearr_7146_7203[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (32))){
var inst_7088 = (state_7129[(14)]);
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7129__$1,(35),out,inst_7088);
} else {
if((state_val_7130 === (33))){
var inst_7079 = (state_7129[(12)]);
var inst_7056 = inst_7079;
var state_7129__$1 = (function (){var statearr_7147 = state_7129;
(statearr_7147[(7)] = inst_7056);

return statearr_7147;
})();
var statearr_7148_7204 = state_7129__$1;
(statearr_7148_7204[(2)] = null);

(statearr_7148_7204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (13))){
var inst_7056 = (state_7129[(7)]);
var inst_7063 = inst_7056.cljs$lang$protocol_mask$partition0$;
var inst_7064 = (inst_7063 & (64));
var inst_7065 = inst_7056.cljs$core$ISeq$;
var inst_7066 = (cljs.core.PROTOCOL_SENTINEL === inst_7065);
var inst_7067 = ((inst_7064) || (inst_7066));
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7067)){
var statearr_7149_7205 = state_7129__$1;
(statearr_7149_7205[(1)] = (16));

} else {
var statearr_7150_7206 = state_7129__$1;
(statearr_7150_7206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (22))){
var inst_7088 = (state_7129[(14)]);
var inst_7089 = (state_7129[(9)]);
var inst_7087 = (state_7129[(2)]);
var inst_7088__$1 = cljs.core.nth.call(null,inst_7087,(0),null);
var inst_7089__$1 = cljs.core.nth.call(null,inst_7087,(1),null);
var inst_7090 = (inst_7088__$1 == null);
var inst_7091 = cljs.core._EQ_.call(null,inst_7089__$1,change);
var inst_7092 = ((inst_7090) || (inst_7091));
var state_7129__$1 = (function (){var statearr_7151 = state_7129;
(statearr_7151[(14)] = inst_7088__$1);

(statearr_7151[(9)] = inst_7089__$1);

return statearr_7151;
})();
if(cljs.core.truth_(inst_7092)){
var statearr_7152_7207 = state_7129__$1;
(statearr_7152_7207[(1)] = (23));

} else {
var statearr_7153_7208 = state_7129__$1;
(statearr_7153_7208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (36))){
var inst_7079 = (state_7129[(12)]);
var inst_7056 = inst_7079;
var state_7129__$1 = (function (){var statearr_7154 = state_7129;
(statearr_7154[(7)] = inst_7056);

return statearr_7154;
})();
var statearr_7155_7209 = state_7129__$1;
(statearr_7155_7209[(2)] = null);

(statearr_7155_7209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (29))){
var inst_7103 = (state_7129[(11)]);
var state_7129__$1 = state_7129;
var statearr_7156_7210 = state_7129__$1;
(statearr_7156_7210[(2)] = inst_7103);

(statearr_7156_7210[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (6))){
var state_7129__$1 = state_7129;
var statearr_7157_7211 = state_7129__$1;
(statearr_7157_7211[(2)] = false);

(statearr_7157_7211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (28))){
var inst_7099 = (state_7129[(2)]);
var inst_7100 = calc_state.call(null);
var inst_7056 = inst_7100;
var state_7129__$1 = (function (){var statearr_7158 = state_7129;
(statearr_7158[(7)] = inst_7056);

(statearr_7158[(15)] = inst_7099);

return statearr_7158;
})();
var statearr_7159_7212 = state_7129__$1;
(statearr_7159_7212[(2)] = null);

(statearr_7159_7212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (25))){
var inst_7125 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7160_7213 = state_7129__$1;
(statearr_7160_7213[(2)] = inst_7125);

(statearr_7160_7213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (34))){
var inst_7123 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7161_7214 = state_7129__$1;
(statearr_7161_7214[(2)] = inst_7123);

(statearr_7161_7214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (17))){
var state_7129__$1 = state_7129;
var statearr_7162_7215 = state_7129__$1;
(statearr_7162_7215[(2)] = false);

(statearr_7162_7215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (3))){
var state_7129__$1 = state_7129;
var statearr_7163_7216 = state_7129__$1;
(statearr_7163_7216[(2)] = false);

(statearr_7163_7216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (12))){
var inst_7127 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7129__$1,inst_7127);
} else {
if((state_val_7130 === (2))){
var inst_7031 = (state_7129[(8)]);
var inst_7036 = inst_7031.cljs$lang$protocol_mask$partition0$;
var inst_7037 = (inst_7036 & (64));
var inst_7038 = inst_7031.cljs$core$ISeq$;
var inst_7039 = (cljs.core.PROTOCOL_SENTINEL === inst_7038);
var inst_7040 = ((inst_7037) || (inst_7039));
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7040)){
var statearr_7164_7217 = state_7129__$1;
(statearr_7164_7217[(1)] = (5));

} else {
var statearr_7165_7218 = state_7129__$1;
(statearr_7165_7218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (23))){
var inst_7088 = (state_7129[(14)]);
var inst_7094 = (inst_7088 == null);
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7094)){
var statearr_7166_7219 = state_7129__$1;
(statearr_7166_7219[(1)] = (26));

} else {
var statearr_7167_7220 = state_7129__$1;
(statearr_7167_7220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (35))){
var inst_7114 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7114)){
var statearr_7168_7221 = state_7129__$1;
(statearr_7168_7221[(1)] = (36));

} else {
var statearr_7169_7222 = state_7129__$1;
(statearr_7169_7222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (19))){
var inst_7056 = (state_7129[(7)]);
var inst_7076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7056);
var state_7129__$1 = state_7129;
var statearr_7170_7223 = state_7129__$1;
(statearr_7170_7223[(2)] = inst_7076);

(statearr_7170_7223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (11))){
var inst_7056 = (state_7129[(7)]);
var inst_7060 = (inst_7056 == null);
var inst_7061 = cljs.core.not.call(null,inst_7060);
var state_7129__$1 = state_7129;
if(inst_7061){
var statearr_7171_7224 = state_7129__$1;
(statearr_7171_7224[(1)] = (13));

} else {
var statearr_7172_7225 = state_7129__$1;
(statearr_7172_7225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (9))){
var inst_7031 = (state_7129[(8)]);
var state_7129__$1 = state_7129;
var statearr_7173_7226 = state_7129__$1;
(statearr_7173_7226[(2)] = inst_7031);

(statearr_7173_7226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (5))){
var state_7129__$1 = state_7129;
var statearr_7174_7227 = state_7129__$1;
(statearr_7174_7227[(2)] = true);

(statearr_7174_7227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (14))){
var state_7129__$1 = state_7129;
var statearr_7175_7228 = state_7129__$1;
(statearr_7175_7228[(2)] = false);

(statearr_7175_7228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (26))){
var inst_7089 = (state_7129[(9)]);
var inst_7096 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7089);
var state_7129__$1 = state_7129;
var statearr_7176_7229 = state_7129__$1;
(statearr_7176_7229[(2)] = inst_7096);

(statearr_7176_7229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (16))){
var state_7129__$1 = state_7129;
var statearr_7177_7230 = state_7129__$1;
(statearr_7177_7230[(2)] = true);

(statearr_7177_7230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (38))){
var inst_7119 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7178_7231 = state_7129__$1;
(statearr_7178_7231[(2)] = inst_7119);

(statearr_7178_7231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (30))){
var inst_7089 = (state_7129[(9)]);
var inst_7080 = (state_7129[(10)]);
var inst_7081 = (state_7129[(13)]);
var inst_7106 = cljs.core.empty_QMARK_.call(null,inst_7080);
var inst_7107 = inst_7081.call(null,inst_7089);
var inst_7108 = cljs.core.not.call(null,inst_7107);
var inst_7109 = ((inst_7106) && (inst_7108));
var state_7129__$1 = state_7129;
var statearr_7179_7232 = state_7129__$1;
(statearr_7179_7232[(2)] = inst_7109);

(statearr_7179_7232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (10))){
var inst_7031 = (state_7129[(8)]);
var inst_7052 = (state_7129[(2)]);
var inst_7053 = cljs.core.get.call(null,inst_7052,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7054 = cljs.core.get.call(null,inst_7052,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7055 = cljs.core.get.call(null,inst_7052,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7056 = inst_7031;
var state_7129__$1 = (function (){var statearr_7180 = state_7129;
(statearr_7180[(7)] = inst_7056);

(statearr_7180[(16)] = inst_7055);

(statearr_7180[(17)] = inst_7053);

(statearr_7180[(18)] = inst_7054);

return statearr_7180;
})();
var statearr_7181_7233 = state_7129__$1;
(statearr_7181_7233[(2)] = null);

(statearr_7181_7233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (18))){
var inst_7071 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7182_7234 = state_7129__$1;
(statearr_7182_7234[(2)] = inst_7071);

(statearr_7182_7234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (37))){
var state_7129__$1 = state_7129;
var statearr_7183_7235 = state_7129__$1;
(statearr_7183_7235[(2)] = null);

(statearr_7183_7235[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (8))){
var inst_7031 = (state_7129[(8)]);
var inst_7049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7031);
var state_7129__$1 = state_7129;
var statearr_7184_7236 = state_7129__$1;
(statearr_7184_7236[(2)] = inst_7049);

(statearr_7184_7236[(1)] = (10));


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
});})(c__4192__auto___7190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__4067__auto__,c__4192__auto___7190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4068__auto__ = null;
var cljs$core$async$mix_$_state_machine__4068__auto____0 = (function (){
var statearr_7185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7185[(0)] = cljs$core$async$mix_$_state_machine__4068__auto__);

(statearr_7185[(1)] = (1));

return statearr_7185;
});
var cljs$core$async$mix_$_state_machine__4068__auto____1 = (function (state_7129){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7186){var ex__4071__auto__ = e7186;
var statearr_7187_7237 = state_7129;
(statearr_7187_7237[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7129[(4)]))){
var statearr_7188_7238 = state_7129;
(statearr_7188_7238[(1)] = cljs.core.first.call(null,(state_7129[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7239 = state_7129;
state_7129 = G__7239;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4068__auto__ = function(state_7129){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4068__auto____1.call(this,state_7129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4068__auto____0;
cljs$core$async$mix_$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4068__auto____1;
return cljs$core$async$mix_$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__4194__auto__ = (function (){var statearr_7189 = f__4193__auto__.call(null);
(statearr_7189[(6)] = c__4192__auto___7190);

return statearr_7189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__7241 = arguments.length;
switch (G__7241) {
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
var G__7245 = arguments.length;
switch (G__7245) {
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
return (function (p1__7243_SHARP_){
if(cljs.core.truth_(p1__7243_SHARP_.call(null,topic))){
return p1__7243_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7243_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async7246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7246 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7247){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7247 = meta7247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7248,meta7247__$1){
var self__ = this;
var _7248__$1 = this;
return (new cljs.core.async.t_cljs$core$async7246(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7247__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7248){
var self__ = this;
var _7248__$1 = this;
return self__.meta7247;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7247","meta7247",1297596719,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7246";

cljs.core.async.t_cljs$core$async7246.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7246");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7246.
 */
cljs.core.async.__GT_t_cljs$core$async7246 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7247){
return (new cljs.core.async.t_cljs$core$async7246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7247));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7246(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4192__auto___7367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7367,mults,ensure_mult,p){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7367,mults,ensure_mult,p){
return (function (state_7320){
var state_val_7321 = (state_7320[(1)]);
if((state_val_7321 === (7))){
var inst_7316 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
var statearr_7322_7368 = state_7320__$1;
(statearr_7322_7368[(2)] = inst_7316);

(statearr_7322_7368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (20))){
var state_7320__$1 = state_7320;
var statearr_7323_7369 = state_7320__$1;
(statearr_7323_7369[(2)] = null);

(statearr_7323_7369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (1))){
var state_7320__$1 = state_7320;
var statearr_7324_7370 = state_7320__$1;
(statearr_7324_7370[(2)] = null);

(statearr_7324_7370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (24))){
var inst_7299 = (state_7320[(7)]);
var inst_7308 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7299);
var state_7320__$1 = state_7320;
var statearr_7325_7371 = state_7320__$1;
(statearr_7325_7371[(2)] = inst_7308);

(statearr_7325_7371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (4))){
var inst_7251 = (state_7320[(8)]);
var inst_7251__$1 = (state_7320[(2)]);
var inst_7252 = (inst_7251__$1 == null);
var state_7320__$1 = (function (){var statearr_7326 = state_7320;
(statearr_7326[(8)] = inst_7251__$1);

return statearr_7326;
})();
if(cljs.core.truth_(inst_7252)){
var statearr_7327_7372 = state_7320__$1;
(statearr_7327_7372[(1)] = (5));

} else {
var statearr_7328_7373 = state_7320__$1;
(statearr_7328_7373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (15))){
var inst_7293 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
var statearr_7329_7374 = state_7320__$1;
(statearr_7329_7374[(2)] = inst_7293);

(statearr_7329_7374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (21))){
var inst_7313 = (state_7320[(2)]);
var state_7320__$1 = (function (){var statearr_7330 = state_7320;
(statearr_7330[(9)] = inst_7313);

return statearr_7330;
})();
var statearr_7331_7375 = state_7320__$1;
(statearr_7331_7375[(2)] = null);

(statearr_7331_7375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (13))){
var inst_7275 = (state_7320[(10)]);
var inst_7277 = cljs.core.chunked_seq_QMARK_.call(null,inst_7275);
var state_7320__$1 = state_7320;
if(inst_7277){
var statearr_7332_7376 = state_7320__$1;
(statearr_7332_7376[(1)] = (16));

} else {
var statearr_7333_7377 = state_7320__$1;
(statearr_7333_7377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (22))){
var inst_7305 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
if(cljs.core.truth_(inst_7305)){
var statearr_7334_7378 = state_7320__$1;
(statearr_7334_7378[(1)] = (23));

} else {
var statearr_7335_7379 = state_7320__$1;
(statearr_7335_7379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (6))){
var inst_7299 = (state_7320[(7)]);
var inst_7301 = (state_7320[(11)]);
var inst_7251 = (state_7320[(8)]);
var inst_7299__$1 = topic_fn.call(null,inst_7251);
var inst_7300 = cljs.core.deref.call(null,mults);
var inst_7301__$1 = cljs.core.get.call(null,inst_7300,inst_7299__$1);
var state_7320__$1 = (function (){var statearr_7336 = state_7320;
(statearr_7336[(7)] = inst_7299__$1);

(statearr_7336[(11)] = inst_7301__$1);

return statearr_7336;
})();
if(cljs.core.truth_(inst_7301__$1)){
var statearr_7337_7380 = state_7320__$1;
(statearr_7337_7380[(1)] = (19));

} else {
var statearr_7338_7381 = state_7320__$1;
(statearr_7338_7381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (25))){
var inst_7310 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
var statearr_7339_7382 = state_7320__$1;
(statearr_7339_7382[(2)] = inst_7310);

(statearr_7339_7382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (17))){
var inst_7275 = (state_7320[(10)]);
var inst_7284 = cljs.core.first.call(null,inst_7275);
var inst_7285 = cljs.core.async.muxch_STAR_.call(null,inst_7284);
var inst_7286 = cljs.core.async.close_BANG_.call(null,inst_7285);
var inst_7287 = cljs.core.next.call(null,inst_7275);
var inst_7261 = inst_7287;
var inst_7262 = null;
var inst_7263 = (0);
var inst_7264 = (0);
var state_7320__$1 = (function (){var statearr_7340 = state_7320;
(statearr_7340[(12)] = inst_7286);

(statearr_7340[(13)] = inst_7264);

(statearr_7340[(14)] = inst_7263);

(statearr_7340[(15)] = inst_7262);

(statearr_7340[(16)] = inst_7261);

return statearr_7340;
})();
var statearr_7341_7383 = state_7320__$1;
(statearr_7341_7383[(2)] = null);

(statearr_7341_7383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (3))){
var inst_7318 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7320__$1,inst_7318);
} else {
if((state_val_7321 === (12))){
var inst_7295 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
var statearr_7342_7384 = state_7320__$1;
(statearr_7342_7384[(2)] = inst_7295);

(statearr_7342_7384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (2))){
var state_7320__$1 = state_7320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7320__$1,(4),ch);
} else {
if((state_val_7321 === (23))){
var state_7320__$1 = state_7320;
var statearr_7343_7385 = state_7320__$1;
(statearr_7343_7385[(2)] = null);

(statearr_7343_7385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (19))){
var inst_7301 = (state_7320[(11)]);
var inst_7251 = (state_7320[(8)]);
var inst_7303 = cljs.core.async.muxch_STAR_.call(null,inst_7301);
var state_7320__$1 = state_7320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7320__$1,(22),inst_7303,inst_7251);
} else {
if((state_val_7321 === (11))){
var inst_7275 = (state_7320[(10)]);
var inst_7261 = (state_7320[(16)]);
var inst_7275__$1 = cljs.core.seq.call(null,inst_7261);
var state_7320__$1 = (function (){var statearr_7344 = state_7320;
(statearr_7344[(10)] = inst_7275__$1);

return statearr_7344;
})();
if(inst_7275__$1){
var statearr_7345_7386 = state_7320__$1;
(statearr_7345_7386[(1)] = (13));

} else {
var statearr_7346_7387 = state_7320__$1;
(statearr_7346_7387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (9))){
var inst_7297 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
var statearr_7347_7388 = state_7320__$1;
(statearr_7347_7388[(2)] = inst_7297);

(statearr_7347_7388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (5))){
var inst_7258 = cljs.core.deref.call(null,mults);
var inst_7259 = cljs.core.vals.call(null,inst_7258);
var inst_7260 = cljs.core.seq.call(null,inst_7259);
var inst_7261 = inst_7260;
var inst_7262 = null;
var inst_7263 = (0);
var inst_7264 = (0);
var state_7320__$1 = (function (){var statearr_7348 = state_7320;
(statearr_7348[(13)] = inst_7264);

(statearr_7348[(14)] = inst_7263);

(statearr_7348[(15)] = inst_7262);

(statearr_7348[(16)] = inst_7261);

return statearr_7348;
})();
var statearr_7349_7389 = state_7320__$1;
(statearr_7349_7389[(2)] = null);

(statearr_7349_7389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (14))){
var state_7320__$1 = state_7320;
var statearr_7353_7390 = state_7320__$1;
(statearr_7353_7390[(2)] = null);

(statearr_7353_7390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (16))){
var inst_7275 = (state_7320[(10)]);
var inst_7279 = cljs.core.chunk_first.call(null,inst_7275);
var inst_7280 = cljs.core.chunk_rest.call(null,inst_7275);
var inst_7281 = cljs.core.count.call(null,inst_7279);
var inst_7261 = inst_7280;
var inst_7262 = inst_7279;
var inst_7263 = inst_7281;
var inst_7264 = (0);
var state_7320__$1 = (function (){var statearr_7354 = state_7320;
(statearr_7354[(13)] = inst_7264);

(statearr_7354[(14)] = inst_7263);

(statearr_7354[(15)] = inst_7262);

(statearr_7354[(16)] = inst_7261);

return statearr_7354;
})();
var statearr_7355_7391 = state_7320__$1;
(statearr_7355_7391[(2)] = null);

(statearr_7355_7391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (10))){
var inst_7264 = (state_7320[(13)]);
var inst_7263 = (state_7320[(14)]);
var inst_7262 = (state_7320[(15)]);
var inst_7261 = (state_7320[(16)]);
var inst_7269 = cljs.core._nth.call(null,inst_7262,inst_7264);
var inst_7270 = cljs.core.async.muxch_STAR_.call(null,inst_7269);
var inst_7271 = cljs.core.async.close_BANG_.call(null,inst_7270);
var inst_7272 = (inst_7264 + (1));
var tmp7350 = inst_7263;
var tmp7351 = inst_7262;
var tmp7352 = inst_7261;
var inst_7261__$1 = tmp7352;
var inst_7262__$1 = tmp7351;
var inst_7263__$1 = tmp7350;
var inst_7264__$1 = inst_7272;
var state_7320__$1 = (function (){var statearr_7356 = state_7320;
(statearr_7356[(13)] = inst_7264__$1);

(statearr_7356[(14)] = inst_7263__$1);

(statearr_7356[(15)] = inst_7262__$1);

(statearr_7356[(17)] = inst_7271);

(statearr_7356[(16)] = inst_7261__$1);

return statearr_7356;
})();
var statearr_7357_7392 = state_7320__$1;
(statearr_7357_7392[(2)] = null);

(statearr_7357_7392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (18))){
var inst_7290 = (state_7320[(2)]);
var state_7320__$1 = state_7320;
var statearr_7358_7393 = state_7320__$1;
(statearr_7358_7393[(2)] = inst_7290);

(statearr_7358_7393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7321 === (8))){
var inst_7264 = (state_7320[(13)]);
var inst_7263 = (state_7320[(14)]);
var inst_7266 = (inst_7264 < inst_7263);
var inst_7267 = inst_7266;
var state_7320__$1 = state_7320;
if(cljs.core.truth_(inst_7267)){
var statearr_7359_7394 = state_7320__$1;
(statearr_7359_7394[(1)] = (10));

} else {
var statearr_7360_7395 = state_7320__$1;
(statearr_7360_7395[(1)] = (11));

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
});})(c__4192__auto___7367,mults,ensure_mult,p))
;
return ((function (switch__4067__auto__,c__4192__auto___7367,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7361[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7361[(1)] = (1));

return statearr_7361;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7320){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7362){var ex__4071__auto__ = e7362;
var statearr_7363_7396 = state_7320;
(statearr_7363_7396[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7320[(4)]))){
var statearr_7364_7397 = state_7320;
(statearr_7364_7397[(1)] = cljs.core.first.call(null,(state_7320[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7398 = state_7320;
state_7320 = G__7398;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7367,mults,ensure_mult,p))
})();
var state__4194__auto__ = (function (){var statearr_7365 = f__4193__auto__.call(null);
(statearr_7365[(6)] = c__4192__auto___7367);

return statearr_7365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7367,mults,ensure_mult,p))
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
var G__7400 = arguments.length;
switch (G__7400) {
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
var G__7403 = arguments.length;
switch (G__7403) {
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
var G__7406 = arguments.length;
switch (G__7406) {
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
var c__4192__auto___7484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7484,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7484,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7449){
var state_val_7450 = (state_7449[(1)]);
if((state_val_7450 === (7))){
var state_7449__$1 = state_7449;
var statearr_7451_7485 = state_7449__$1;
(statearr_7451_7485[(2)] = null);

(statearr_7451_7485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (1))){
var state_7449__$1 = state_7449;
var statearr_7452_7486 = state_7449__$1;
(statearr_7452_7486[(2)] = null);

(statearr_7452_7486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (4))){
var inst_7409 = (state_7449[(7)]);
var inst_7410 = (state_7449[(8)]);
var inst_7412 = (inst_7410 < inst_7409);
var state_7449__$1 = state_7449;
if(cljs.core.truth_(inst_7412)){
var statearr_7453_7487 = state_7449__$1;
(statearr_7453_7487[(1)] = (6));

} else {
var statearr_7454_7488 = state_7449__$1;
(statearr_7454_7488[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (15))){
var inst_7435 = (state_7449[(9)]);
var inst_7440 = cljs.core.apply.call(null,f,inst_7435);
var state_7449__$1 = state_7449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7449__$1,(17),out,inst_7440);
} else {
if((state_val_7450 === (13))){
var inst_7435 = (state_7449[(9)]);
var inst_7435__$1 = (state_7449[(2)]);
var inst_7436 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7435__$1);
var state_7449__$1 = (function (){var statearr_7455 = state_7449;
(statearr_7455[(9)] = inst_7435__$1);

return statearr_7455;
})();
if(cljs.core.truth_(inst_7436)){
var statearr_7456_7489 = state_7449__$1;
(statearr_7456_7489[(1)] = (14));

} else {
var statearr_7457_7490 = state_7449__$1;
(statearr_7457_7490[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (6))){
var state_7449__$1 = state_7449;
var statearr_7458_7491 = state_7449__$1;
(statearr_7458_7491[(2)] = null);

(statearr_7458_7491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (17))){
var inst_7442 = (state_7449[(2)]);
var state_7449__$1 = (function (){var statearr_7460 = state_7449;
(statearr_7460[(10)] = inst_7442);

return statearr_7460;
})();
var statearr_7461_7492 = state_7449__$1;
(statearr_7461_7492[(2)] = null);

(statearr_7461_7492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (3))){
var inst_7447 = (state_7449[(2)]);
var state_7449__$1 = state_7449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7449__$1,inst_7447);
} else {
if((state_val_7450 === (12))){
var _ = (function (){var statearr_7462 = state_7449;
(statearr_7462[(4)] = cljs.core.rest.call(null,(state_7449[(4)])));

return statearr_7462;
})();
var state_7449__$1 = state_7449;
var ex7459 = (state_7449__$1[(2)]);
var statearr_7463_7493 = state_7449__$1;
(statearr_7463_7493[(5)] = ex7459);


if((ex7459 instanceof Object)){
var statearr_7464_7494 = state_7449__$1;
(statearr_7464_7494[(1)] = (11));

(statearr_7464_7494[(5)] = null);

} else {
throw ex7459;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (2))){
var inst_7408 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7409 = cnt;
var inst_7410 = (0);
var state_7449__$1 = (function (){var statearr_7465 = state_7449;
(statearr_7465[(7)] = inst_7409);

(statearr_7465[(11)] = inst_7408);

(statearr_7465[(8)] = inst_7410);

return statearr_7465;
})();
var statearr_7466_7495 = state_7449__$1;
(statearr_7466_7495[(2)] = null);

(statearr_7466_7495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (11))){
var inst_7414 = (state_7449[(2)]);
var inst_7415 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_7449__$1 = (function (){var statearr_7467 = state_7449;
(statearr_7467[(12)] = inst_7414);

return statearr_7467;
})();
var statearr_7468_7496 = state_7449__$1;
(statearr_7468_7496[(2)] = inst_7415);

(statearr_7468_7496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (9))){
var inst_7410 = (state_7449[(8)]);
var _ = (function (){var statearr_7469 = state_7449;
(statearr_7469[(4)] = cljs.core.cons.call(null,(12),(state_7449[(4)])));

return statearr_7469;
})();
var inst_7421 = chs__$1.call(null,inst_7410);
var inst_7422 = done.call(null,inst_7410);
var inst_7423 = cljs.core.async.take_BANG_.call(null,inst_7421,inst_7422);
var ___$1 = (function (){var statearr_7470 = state_7449;
(statearr_7470[(4)] = cljs.core.rest.call(null,(state_7449[(4)])));

return statearr_7470;
})();
var state_7449__$1 = state_7449;
var statearr_7471_7497 = state_7449__$1;
(statearr_7471_7497[(2)] = inst_7423);

(statearr_7471_7497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (5))){
var inst_7433 = (state_7449[(2)]);
var state_7449__$1 = (function (){var statearr_7472 = state_7449;
(statearr_7472[(13)] = inst_7433);

return statearr_7472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7449__$1,(13),dchan);
} else {
if((state_val_7450 === (14))){
var inst_7438 = cljs.core.async.close_BANG_.call(null,out);
var state_7449__$1 = state_7449;
var statearr_7473_7498 = state_7449__$1;
(statearr_7473_7498[(2)] = inst_7438);

(statearr_7473_7498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (16))){
var inst_7445 = (state_7449[(2)]);
var state_7449__$1 = state_7449;
var statearr_7474_7499 = state_7449__$1;
(statearr_7474_7499[(2)] = inst_7445);

(statearr_7474_7499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (10))){
var inst_7410 = (state_7449[(8)]);
var inst_7426 = (state_7449[(2)]);
var inst_7427 = (inst_7410 + (1));
var inst_7410__$1 = inst_7427;
var state_7449__$1 = (function (){var statearr_7475 = state_7449;
(statearr_7475[(14)] = inst_7426);

(statearr_7475[(8)] = inst_7410__$1);

return statearr_7475;
})();
var statearr_7476_7500 = state_7449__$1;
(statearr_7476_7500[(2)] = null);

(statearr_7476_7500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7450 === (8))){
var inst_7431 = (state_7449[(2)]);
var state_7449__$1 = state_7449;
var statearr_7477_7501 = state_7449__$1;
(statearr_7477_7501[(2)] = inst_7431);

(statearr_7477_7501[(1)] = (5));


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
});})(c__4192__auto___7484,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__4067__auto__,c__4192__auto___7484,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7478[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7478[(1)] = (1));

return statearr_7478;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7449){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7479){var ex__4071__auto__ = e7479;
var statearr_7480_7502 = state_7449;
(statearr_7480_7502[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7449[(4)]))){
var statearr_7481_7503 = state_7449;
(statearr_7481_7503[(1)] = cljs.core.first.call(null,(state_7449[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7504 = state_7449;
state_7449 = G__7504;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7484,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__4194__auto__ = (function (){var statearr_7482 = f__4193__auto__.call(null);
(statearr_7482[(6)] = c__4192__auto___7484);

return statearr_7482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7484,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__7507 = arguments.length;
switch (G__7507) {
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
var c__4192__auto___7562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7562,out){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7562,out){
return (function (state_7539){
var state_val_7540 = (state_7539[(1)]);
if((state_val_7540 === (7))){
var inst_7519 = (state_7539[(7)]);
var inst_7518 = (state_7539[(8)]);
var inst_7518__$1 = (state_7539[(2)]);
var inst_7519__$1 = cljs.core.nth.call(null,inst_7518__$1,(0),null);
var inst_7520 = cljs.core.nth.call(null,inst_7518__$1,(1),null);
var inst_7521 = (inst_7519__$1 == null);
var state_7539__$1 = (function (){var statearr_7541 = state_7539;
(statearr_7541[(7)] = inst_7519__$1);

(statearr_7541[(8)] = inst_7518__$1);

(statearr_7541[(9)] = inst_7520);

return statearr_7541;
})();
if(cljs.core.truth_(inst_7521)){
var statearr_7542_7563 = state_7539__$1;
(statearr_7542_7563[(1)] = (8));

} else {
var statearr_7543_7564 = state_7539__$1;
(statearr_7543_7564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (1))){
var inst_7508 = cljs.core.vec.call(null,chs);
var inst_7509 = inst_7508;
var state_7539__$1 = (function (){var statearr_7544 = state_7539;
(statearr_7544[(10)] = inst_7509);

return statearr_7544;
})();
var statearr_7545_7565 = state_7539__$1;
(statearr_7545_7565[(2)] = null);

(statearr_7545_7565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (4))){
var inst_7509 = (state_7539[(10)]);
var state_7539__$1 = state_7539;
return cljs.core.async.ioc_alts_BANG_.call(null,state_7539__$1,(7),inst_7509);
} else {
if((state_val_7540 === (6))){
var inst_7535 = (state_7539[(2)]);
var state_7539__$1 = state_7539;
var statearr_7546_7566 = state_7539__$1;
(statearr_7546_7566[(2)] = inst_7535);

(statearr_7546_7566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (3))){
var inst_7537 = (state_7539[(2)]);
var state_7539__$1 = state_7539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7539__$1,inst_7537);
} else {
if((state_val_7540 === (2))){
var inst_7509 = (state_7539[(10)]);
var inst_7511 = cljs.core.count.call(null,inst_7509);
var inst_7512 = (inst_7511 > (0));
var state_7539__$1 = state_7539;
if(cljs.core.truth_(inst_7512)){
var statearr_7548_7567 = state_7539__$1;
(statearr_7548_7567[(1)] = (4));

} else {
var statearr_7549_7568 = state_7539__$1;
(statearr_7549_7568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (11))){
var inst_7509 = (state_7539[(10)]);
var inst_7528 = (state_7539[(2)]);
var tmp7547 = inst_7509;
var inst_7509__$1 = tmp7547;
var state_7539__$1 = (function (){var statearr_7550 = state_7539;
(statearr_7550[(10)] = inst_7509__$1);

(statearr_7550[(11)] = inst_7528);

return statearr_7550;
})();
var statearr_7551_7569 = state_7539__$1;
(statearr_7551_7569[(2)] = null);

(statearr_7551_7569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (9))){
var inst_7519 = (state_7539[(7)]);
var state_7539__$1 = state_7539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7539__$1,(11),out,inst_7519);
} else {
if((state_val_7540 === (5))){
var inst_7533 = cljs.core.async.close_BANG_.call(null,out);
var state_7539__$1 = state_7539;
var statearr_7552_7570 = state_7539__$1;
(statearr_7552_7570[(2)] = inst_7533);

(statearr_7552_7570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (10))){
var inst_7531 = (state_7539[(2)]);
var state_7539__$1 = state_7539;
var statearr_7553_7571 = state_7539__$1;
(statearr_7553_7571[(2)] = inst_7531);

(statearr_7553_7571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7540 === (8))){
var inst_7519 = (state_7539[(7)]);
var inst_7518 = (state_7539[(8)]);
var inst_7509 = (state_7539[(10)]);
var inst_7520 = (state_7539[(9)]);
var inst_7523 = (function (){var cs = inst_7509;
var vec__7514 = inst_7518;
var v = inst_7519;
var c = inst_7520;
return ((function (cs,vec__7514,v,c,inst_7519,inst_7518,inst_7509,inst_7520,state_val_7540,c__4192__auto___7562,out){
return (function (p1__7505_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__7505_SHARP_);
});
;})(cs,vec__7514,v,c,inst_7519,inst_7518,inst_7509,inst_7520,state_val_7540,c__4192__auto___7562,out))
})();
var inst_7524 = cljs.core.filterv.call(null,inst_7523,inst_7509);
var inst_7509__$1 = inst_7524;
var state_7539__$1 = (function (){var statearr_7554 = state_7539;
(statearr_7554[(10)] = inst_7509__$1);

return statearr_7554;
})();
var statearr_7555_7572 = state_7539__$1;
(statearr_7555_7572[(2)] = null);

(statearr_7555_7572[(1)] = (2));


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
});})(c__4192__auto___7562,out))
;
return ((function (switch__4067__auto__,c__4192__auto___7562,out){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7556[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7556[(1)] = (1));

return statearr_7556;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7539){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7557){var ex__4071__auto__ = e7557;
var statearr_7558_7573 = state_7539;
(statearr_7558_7573[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7539[(4)]))){
var statearr_7559_7574 = state_7539;
(statearr_7559_7574[(1)] = cljs.core.first.call(null,(state_7539[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7575 = state_7539;
state_7539 = G__7575;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7562,out))
})();
var state__4194__auto__ = (function (){var statearr_7560 = f__4193__auto__.call(null);
(statearr_7560[(6)] = c__4192__auto___7562);

return statearr_7560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7562,out))
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
var G__7577 = arguments.length;
switch (G__7577) {
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
var c__4192__auto___7623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7623,out){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7623,out){
return (function (state_7601){
var state_val_7602 = (state_7601[(1)]);
if((state_val_7602 === (7))){
var inst_7583 = (state_7601[(7)]);
var inst_7583__$1 = (state_7601[(2)]);
var inst_7584 = (inst_7583__$1 == null);
var inst_7585 = cljs.core.not.call(null,inst_7584);
var state_7601__$1 = (function (){var statearr_7603 = state_7601;
(statearr_7603[(7)] = inst_7583__$1);

return statearr_7603;
})();
if(inst_7585){
var statearr_7604_7624 = state_7601__$1;
(statearr_7604_7624[(1)] = (8));

} else {
var statearr_7605_7625 = state_7601__$1;
(statearr_7605_7625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (1))){
var inst_7578 = (0);
var state_7601__$1 = (function (){var statearr_7606 = state_7601;
(statearr_7606[(8)] = inst_7578);

return statearr_7606;
})();
var statearr_7607_7626 = state_7601__$1;
(statearr_7607_7626[(2)] = null);

(statearr_7607_7626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (4))){
var state_7601__$1 = state_7601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7601__$1,(7),ch);
} else {
if((state_val_7602 === (6))){
var inst_7596 = (state_7601[(2)]);
var state_7601__$1 = state_7601;
var statearr_7608_7627 = state_7601__$1;
(statearr_7608_7627[(2)] = inst_7596);

(statearr_7608_7627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (3))){
var inst_7598 = (state_7601[(2)]);
var inst_7599 = cljs.core.async.close_BANG_.call(null,out);
var state_7601__$1 = (function (){var statearr_7609 = state_7601;
(statearr_7609[(9)] = inst_7598);

return statearr_7609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7601__$1,inst_7599);
} else {
if((state_val_7602 === (2))){
var inst_7578 = (state_7601[(8)]);
var inst_7580 = (inst_7578 < n);
var state_7601__$1 = state_7601;
if(cljs.core.truth_(inst_7580)){
var statearr_7610_7628 = state_7601__$1;
(statearr_7610_7628[(1)] = (4));

} else {
var statearr_7611_7629 = state_7601__$1;
(statearr_7611_7629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (11))){
var inst_7578 = (state_7601[(8)]);
var inst_7588 = (state_7601[(2)]);
var inst_7589 = (inst_7578 + (1));
var inst_7578__$1 = inst_7589;
var state_7601__$1 = (function (){var statearr_7612 = state_7601;
(statearr_7612[(10)] = inst_7588);

(statearr_7612[(8)] = inst_7578__$1);

return statearr_7612;
})();
var statearr_7613_7630 = state_7601__$1;
(statearr_7613_7630[(2)] = null);

(statearr_7613_7630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (9))){
var state_7601__$1 = state_7601;
var statearr_7614_7631 = state_7601__$1;
(statearr_7614_7631[(2)] = null);

(statearr_7614_7631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (5))){
var state_7601__$1 = state_7601;
var statearr_7615_7632 = state_7601__$1;
(statearr_7615_7632[(2)] = null);

(statearr_7615_7632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (10))){
var inst_7593 = (state_7601[(2)]);
var state_7601__$1 = state_7601;
var statearr_7616_7633 = state_7601__$1;
(statearr_7616_7633[(2)] = inst_7593);

(statearr_7616_7633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7602 === (8))){
var inst_7583 = (state_7601[(7)]);
var state_7601__$1 = state_7601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7601__$1,(11),out,inst_7583);
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
});})(c__4192__auto___7623,out))
;
return ((function (switch__4067__auto__,c__4192__auto___7623,out){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7617[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7617[(1)] = (1));

return statearr_7617;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7601){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7618){var ex__4071__auto__ = e7618;
var statearr_7619_7634 = state_7601;
(statearr_7619_7634[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7601[(4)]))){
var statearr_7620_7635 = state_7601;
(statearr_7620_7635[(1)] = cljs.core.first.call(null,(state_7601[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7636 = state_7601;
state_7601 = G__7636;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7623,out))
})();
var state__4194__auto__ = (function (){var statearr_7621 = f__4193__auto__.call(null);
(statearr_7621[(6)] = c__4192__auto___7623);

return statearr_7621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7623,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async7638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7638 = (function (f,ch,meta7639){
this.f = f;
this.ch = ch;
this.meta7639 = meta7639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7640,meta7639__$1){
var self__ = this;
var _7640__$1 = this;
return (new cljs.core.async.t_cljs$core$async7638(self__.f,self__.ch,meta7639__$1));
});

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7640){
var self__ = this;
var _7640__$1 = this;
return self__.meta7639;
});

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async7641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7641 = (function (f,ch,meta7639,_,fn1,meta7642){
this.f = f;
this.ch = ch;
this.meta7639 = meta7639;
this._ = _;
this.fn1 = fn1;
this.meta7642 = meta7642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_7643,meta7642__$1){
var self__ = this;
var _7643__$1 = this;
return (new cljs.core.async.t_cljs$core$async7641(self__.f,self__.ch,self__.meta7639,self__._,self__.fn1,meta7642__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async7641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_7643){
var self__ = this;
var _7643__$1 = this;
return self__.meta7642;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__7637_SHARP_){
return f1.call(null,(((p1__7637_SHARP_ == null))?null:self__.f.call(null,p1__7637_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async7641.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7639","meta7639",642627811,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async7638","cljs.core.async/t_cljs$core$async7638",-472181598,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta7642","meta7642",-2140613956,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7641";

cljs.core.async.t_cljs$core$async7641.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7641");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7641.
 */
cljs.core.async.__GT_t_cljs$core$async7641 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7641(f__$1,ch__$1,meta7639__$1,___$2,fn1__$1,meta7642){
return (new cljs.core.async.t_cljs$core$async7641(f__$1,ch__$1,meta7639__$1,___$2,fn1__$1,meta7642));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async7641(self__.f,self__.ch,self__.meta7639,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async7638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7639","meta7639",642627811,null)], null);
});

cljs.core.async.t_cljs$core$async7638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7638";

cljs.core.async.t_cljs$core$async7638.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7638");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7638.
 */
cljs.core.async.__GT_t_cljs$core$async7638 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7638(f__$1,ch__$1,meta7639){
return (new cljs.core.async.t_cljs$core$async7638(f__$1,ch__$1,meta7639));
});

}

return (new cljs.core.async.t_cljs$core$async7638(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async7644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7644 = (function (f,ch,meta7645){
this.f = f;
this.ch = ch;
this.meta7645 = meta7645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7646,meta7645__$1){
var self__ = this;
var _7646__$1 = this;
return (new cljs.core.async.t_cljs$core$async7644(self__.f,self__.ch,meta7645__$1));
});

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7646){
var self__ = this;
var _7646__$1 = this;
return self__.meta7645;
});

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async7644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7645","meta7645",534732022,null)], null);
});

cljs.core.async.t_cljs$core$async7644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7644";

cljs.core.async.t_cljs$core$async7644.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7644");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7644.
 */
cljs.core.async.__GT_t_cljs$core$async7644 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async7644(f__$1,ch__$1,meta7645){
return (new cljs.core.async.t_cljs$core$async7644(f__$1,ch__$1,meta7645));
});

}

return (new cljs.core.async.t_cljs$core$async7644(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async7647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7647 = (function (p,ch,meta7648){
this.p = p;
this.ch = ch;
this.meta7648 = meta7648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7649,meta7648__$1){
var self__ = this;
var _7649__$1 = this;
return (new cljs.core.async.t_cljs$core$async7647(self__.p,self__.ch,meta7648__$1));
});

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7649){
var self__ = this;
var _7649__$1 = this;
return self__.meta7648;
});

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async7647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7648","meta7648",271275105,null)], null);
});

cljs.core.async.t_cljs$core$async7647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7647";

cljs.core.async.t_cljs$core$async7647.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7647");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7647.
 */
cljs.core.async.__GT_t_cljs$core$async7647 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async7647(p__$1,ch__$1,meta7648){
return (new cljs.core.async.t_cljs$core$async7647(p__$1,ch__$1,meta7648));
});

}

return (new cljs.core.async.t_cljs$core$async7647(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__7651 = arguments.length;
switch (G__7651) {
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
var c__4192__auto___7692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7692,out){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7692,out){
return (function (state_7672){
var state_val_7673 = (state_7672[(1)]);
if((state_val_7673 === (7))){
var inst_7668 = (state_7672[(2)]);
var state_7672__$1 = state_7672;
var statearr_7674_7693 = state_7672__$1;
(statearr_7674_7693[(2)] = inst_7668);

(statearr_7674_7693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (1))){
var state_7672__$1 = state_7672;
var statearr_7675_7694 = state_7672__$1;
(statearr_7675_7694[(2)] = null);

(statearr_7675_7694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (4))){
var inst_7654 = (state_7672[(7)]);
var inst_7654__$1 = (state_7672[(2)]);
var inst_7655 = (inst_7654__$1 == null);
var state_7672__$1 = (function (){var statearr_7676 = state_7672;
(statearr_7676[(7)] = inst_7654__$1);

return statearr_7676;
})();
if(cljs.core.truth_(inst_7655)){
var statearr_7677_7695 = state_7672__$1;
(statearr_7677_7695[(1)] = (5));

} else {
var statearr_7678_7696 = state_7672__$1;
(statearr_7678_7696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (6))){
var inst_7654 = (state_7672[(7)]);
var inst_7659 = p.call(null,inst_7654);
var state_7672__$1 = state_7672;
if(cljs.core.truth_(inst_7659)){
var statearr_7679_7697 = state_7672__$1;
(statearr_7679_7697[(1)] = (8));

} else {
var statearr_7680_7698 = state_7672__$1;
(statearr_7680_7698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (3))){
var inst_7670 = (state_7672[(2)]);
var state_7672__$1 = state_7672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7672__$1,inst_7670);
} else {
if((state_val_7673 === (2))){
var state_7672__$1 = state_7672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7672__$1,(4),ch);
} else {
if((state_val_7673 === (11))){
var inst_7662 = (state_7672[(2)]);
var state_7672__$1 = state_7672;
var statearr_7681_7699 = state_7672__$1;
(statearr_7681_7699[(2)] = inst_7662);

(statearr_7681_7699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (9))){
var state_7672__$1 = state_7672;
var statearr_7682_7700 = state_7672__$1;
(statearr_7682_7700[(2)] = null);

(statearr_7682_7700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (5))){
var inst_7657 = cljs.core.async.close_BANG_.call(null,out);
var state_7672__$1 = state_7672;
var statearr_7683_7701 = state_7672__$1;
(statearr_7683_7701[(2)] = inst_7657);

(statearr_7683_7701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (10))){
var inst_7665 = (state_7672[(2)]);
var state_7672__$1 = (function (){var statearr_7684 = state_7672;
(statearr_7684[(8)] = inst_7665);

return statearr_7684;
})();
var statearr_7685_7702 = state_7672__$1;
(statearr_7685_7702[(2)] = null);

(statearr_7685_7702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7673 === (8))){
var inst_7654 = (state_7672[(7)]);
var state_7672__$1 = state_7672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7672__$1,(11),out,inst_7654);
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
});})(c__4192__auto___7692,out))
;
return ((function (switch__4067__auto__,c__4192__auto___7692,out){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7686 = [null,null,null,null,null,null,null,null,null];
(statearr_7686[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7686[(1)] = (1));

return statearr_7686;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7672){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7687){var ex__4071__auto__ = e7687;
var statearr_7688_7703 = state_7672;
(statearr_7688_7703[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7672[(4)]))){
var statearr_7689_7704 = state_7672;
(statearr_7689_7704[(1)] = cljs.core.first.call(null,(state_7672[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7705 = state_7672;
state_7672 = G__7705;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7692,out))
})();
var state__4194__auto__ = (function (){var statearr_7690 = f__4193__auto__.call(null);
(statearr_7690[(6)] = c__4192__auto___7692);

return statearr_7690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7692,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__7707 = arguments.length;
switch (G__7707) {
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
var c__4192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto__){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto__){
return (function (state_7770){
var state_val_7771 = (state_7770[(1)]);
if((state_val_7771 === (7))){
var inst_7766 = (state_7770[(2)]);
var state_7770__$1 = state_7770;
var statearr_7772_7811 = state_7770__$1;
(statearr_7772_7811[(2)] = inst_7766);

(statearr_7772_7811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (20))){
var inst_7736 = (state_7770[(7)]);
var inst_7747 = (state_7770[(2)]);
var inst_7748 = cljs.core.next.call(null,inst_7736);
var inst_7722 = inst_7748;
var inst_7723 = null;
var inst_7724 = (0);
var inst_7725 = (0);
var state_7770__$1 = (function (){var statearr_7773 = state_7770;
(statearr_7773[(8)] = inst_7747);

(statearr_7773[(9)] = inst_7724);

(statearr_7773[(10)] = inst_7725);

(statearr_7773[(11)] = inst_7723);

(statearr_7773[(12)] = inst_7722);

return statearr_7773;
})();
var statearr_7774_7812 = state_7770__$1;
(statearr_7774_7812[(2)] = null);

(statearr_7774_7812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (1))){
var state_7770__$1 = state_7770;
var statearr_7775_7813 = state_7770__$1;
(statearr_7775_7813[(2)] = null);

(statearr_7775_7813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (4))){
var inst_7711 = (state_7770[(13)]);
var inst_7711__$1 = (state_7770[(2)]);
var inst_7712 = (inst_7711__$1 == null);
var state_7770__$1 = (function (){var statearr_7776 = state_7770;
(statearr_7776[(13)] = inst_7711__$1);

return statearr_7776;
})();
if(cljs.core.truth_(inst_7712)){
var statearr_7777_7814 = state_7770__$1;
(statearr_7777_7814[(1)] = (5));

} else {
var statearr_7778_7815 = state_7770__$1;
(statearr_7778_7815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (15))){
var state_7770__$1 = state_7770;
var statearr_7782_7816 = state_7770__$1;
(statearr_7782_7816[(2)] = null);

(statearr_7782_7816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (21))){
var state_7770__$1 = state_7770;
var statearr_7783_7817 = state_7770__$1;
(statearr_7783_7817[(2)] = null);

(statearr_7783_7817[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (13))){
var inst_7724 = (state_7770[(9)]);
var inst_7725 = (state_7770[(10)]);
var inst_7723 = (state_7770[(11)]);
var inst_7722 = (state_7770[(12)]);
var inst_7732 = (state_7770[(2)]);
var inst_7733 = (inst_7725 + (1));
var tmp7779 = inst_7724;
var tmp7780 = inst_7723;
var tmp7781 = inst_7722;
var inst_7722__$1 = tmp7781;
var inst_7723__$1 = tmp7780;
var inst_7724__$1 = tmp7779;
var inst_7725__$1 = inst_7733;
var state_7770__$1 = (function (){var statearr_7784 = state_7770;
(statearr_7784[(9)] = inst_7724__$1);

(statearr_7784[(10)] = inst_7725__$1);

(statearr_7784[(11)] = inst_7723__$1);

(statearr_7784[(12)] = inst_7722__$1);

(statearr_7784[(14)] = inst_7732);

return statearr_7784;
})();
var statearr_7785_7818 = state_7770__$1;
(statearr_7785_7818[(2)] = null);

(statearr_7785_7818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (22))){
var state_7770__$1 = state_7770;
var statearr_7786_7819 = state_7770__$1;
(statearr_7786_7819[(2)] = null);

(statearr_7786_7819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (6))){
var inst_7711 = (state_7770[(13)]);
var inst_7720 = f.call(null,inst_7711);
var inst_7721 = cljs.core.seq.call(null,inst_7720);
var inst_7722 = inst_7721;
var inst_7723 = null;
var inst_7724 = (0);
var inst_7725 = (0);
var state_7770__$1 = (function (){var statearr_7787 = state_7770;
(statearr_7787[(9)] = inst_7724);

(statearr_7787[(10)] = inst_7725);

(statearr_7787[(11)] = inst_7723);

(statearr_7787[(12)] = inst_7722);

return statearr_7787;
})();
var statearr_7788_7820 = state_7770__$1;
(statearr_7788_7820[(2)] = null);

(statearr_7788_7820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (17))){
var inst_7736 = (state_7770[(7)]);
var inst_7740 = cljs.core.chunk_first.call(null,inst_7736);
var inst_7741 = cljs.core.chunk_rest.call(null,inst_7736);
var inst_7742 = cljs.core.count.call(null,inst_7740);
var inst_7722 = inst_7741;
var inst_7723 = inst_7740;
var inst_7724 = inst_7742;
var inst_7725 = (0);
var state_7770__$1 = (function (){var statearr_7789 = state_7770;
(statearr_7789[(9)] = inst_7724);

(statearr_7789[(10)] = inst_7725);

(statearr_7789[(11)] = inst_7723);

(statearr_7789[(12)] = inst_7722);

return statearr_7789;
})();
var statearr_7790_7821 = state_7770__$1;
(statearr_7790_7821[(2)] = null);

(statearr_7790_7821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (3))){
var inst_7768 = (state_7770[(2)]);
var state_7770__$1 = state_7770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7770__$1,inst_7768);
} else {
if((state_val_7771 === (12))){
var inst_7756 = (state_7770[(2)]);
var state_7770__$1 = state_7770;
var statearr_7791_7822 = state_7770__$1;
(statearr_7791_7822[(2)] = inst_7756);

(statearr_7791_7822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (2))){
var state_7770__$1 = state_7770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7770__$1,(4),in$);
} else {
if((state_val_7771 === (23))){
var inst_7764 = (state_7770[(2)]);
var state_7770__$1 = state_7770;
var statearr_7792_7823 = state_7770__$1;
(statearr_7792_7823[(2)] = inst_7764);

(statearr_7792_7823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (19))){
var inst_7751 = (state_7770[(2)]);
var state_7770__$1 = state_7770;
var statearr_7793_7824 = state_7770__$1;
(statearr_7793_7824[(2)] = inst_7751);

(statearr_7793_7824[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (11))){
var inst_7736 = (state_7770[(7)]);
var inst_7722 = (state_7770[(12)]);
var inst_7736__$1 = cljs.core.seq.call(null,inst_7722);
var state_7770__$1 = (function (){var statearr_7794 = state_7770;
(statearr_7794[(7)] = inst_7736__$1);

return statearr_7794;
})();
if(inst_7736__$1){
var statearr_7795_7825 = state_7770__$1;
(statearr_7795_7825[(1)] = (14));

} else {
var statearr_7796_7826 = state_7770__$1;
(statearr_7796_7826[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (9))){
var inst_7758 = (state_7770[(2)]);
var inst_7759 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_7770__$1 = (function (){var statearr_7797 = state_7770;
(statearr_7797[(15)] = inst_7758);

return statearr_7797;
})();
if(cljs.core.truth_(inst_7759)){
var statearr_7798_7827 = state_7770__$1;
(statearr_7798_7827[(1)] = (21));

} else {
var statearr_7799_7828 = state_7770__$1;
(statearr_7799_7828[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (5))){
var inst_7714 = cljs.core.async.close_BANG_.call(null,out);
var state_7770__$1 = state_7770;
var statearr_7800_7829 = state_7770__$1;
(statearr_7800_7829[(2)] = inst_7714);

(statearr_7800_7829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (14))){
var inst_7736 = (state_7770[(7)]);
var inst_7738 = cljs.core.chunked_seq_QMARK_.call(null,inst_7736);
var state_7770__$1 = state_7770;
if(inst_7738){
var statearr_7801_7830 = state_7770__$1;
(statearr_7801_7830[(1)] = (17));

} else {
var statearr_7802_7831 = state_7770__$1;
(statearr_7802_7831[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (16))){
var inst_7754 = (state_7770[(2)]);
var state_7770__$1 = state_7770;
var statearr_7803_7832 = state_7770__$1;
(statearr_7803_7832[(2)] = inst_7754);

(statearr_7803_7832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7771 === (10))){
var inst_7725 = (state_7770[(10)]);
var inst_7723 = (state_7770[(11)]);
var inst_7730 = cljs.core._nth.call(null,inst_7723,inst_7725);
var state_7770__$1 = state_7770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7770__$1,(13),out,inst_7730);
} else {
if((state_val_7771 === (18))){
var inst_7736 = (state_7770[(7)]);
var inst_7745 = cljs.core.first.call(null,inst_7736);
var state_7770__$1 = state_7770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7770__$1,(20),out,inst_7745);
} else {
if((state_val_7771 === (8))){
var inst_7724 = (state_7770[(9)]);
var inst_7725 = (state_7770[(10)]);
var inst_7727 = (inst_7725 < inst_7724);
var inst_7728 = inst_7727;
var state_7770__$1 = state_7770;
if(cljs.core.truth_(inst_7728)){
var statearr_7804_7833 = state_7770__$1;
(statearr_7804_7833[(1)] = (10));

} else {
var statearr_7805_7834 = state_7770__$1;
(statearr_7805_7834[(1)] = (11));

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
});})(c__4192__auto__))
;
return ((function (switch__4067__auto__,c__4192__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4068__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4068__auto____0 = (function (){
var statearr_7806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7806[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4068__auto__);

(statearr_7806[(1)] = (1));

return statearr_7806;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4068__auto____1 = (function (state_7770){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7807){var ex__4071__auto__ = e7807;
var statearr_7808_7835 = state_7770;
(statearr_7808_7835[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7770[(4)]))){
var statearr_7809_7836 = state_7770;
(statearr_7809_7836[(1)] = cljs.core.first.call(null,(state_7770[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7837 = state_7770;
state_7770 = G__7837;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4068__auto__ = function(state_7770){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4068__auto____1.call(this,state_7770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4068__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4068__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto__))
})();
var state__4194__auto__ = (function (){var statearr_7810 = f__4193__auto__.call(null);
(statearr_7810[(6)] = c__4192__auto__);

return statearr_7810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto__))
);

return c__4192__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__7839 = arguments.length;
switch (G__7839) {
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
var G__7842 = arguments.length;
switch (G__7842) {
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
var G__7845 = arguments.length;
switch (G__7845) {
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
var c__4192__auto___7893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7893,out){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7893,out){
return (function (state_7869){
var state_val_7870 = (state_7869[(1)]);
if((state_val_7870 === (7))){
var inst_7864 = (state_7869[(2)]);
var state_7869__$1 = state_7869;
var statearr_7871_7894 = state_7869__$1;
(statearr_7871_7894[(2)] = inst_7864);

(statearr_7871_7894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (1))){
var inst_7846 = null;
var state_7869__$1 = (function (){var statearr_7872 = state_7869;
(statearr_7872[(7)] = inst_7846);

return statearr_7872;
})();
var statearr_7873_7895 = state_7869__$1;
(statearr_7873_7895[(2)] = null);

(statearr_7873_7895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (4))){
var inst_7849 = (state_7869[(8)]);
var inst_7849__$1 = (state_7869[(2)]);
var inst_7850 = (inst_7849__$1 == null);
var inst_7851 = cljs.core.not.call(null,inst_7850);
var state_7869__$1 = (function (){var statearr_7874 = state_7869;
(statearr_7874[(8)] = inst_7849__$1);

return statearr_7874;
})();
if(inst_7851){
var statearr_7875_7896 = state_7869__$1;
(statearr_7875_7896[(1)] = (5));

} else {
var statearr_7876_7897 = state_7869__$1;
(statearr_7876_7897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (6))){
var state_7869__$1 = state_7869;
var statearr_7877_7898 = state_7869__$1;
(statearr_7877_7898[(2)] = null);

(statearr_7877_7898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (3))){
var inst_7866 = (state_7869[(2)]);
var inst_7867 = cljs.core.async.close_BANG_.call(null,out);
var state_7869__$1 = (function (){var statearr_7878 = state_7869;
(statearr_7878[(9)] = inst_7866);

return statearr_7878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7869__$1,inst_7867);
} else {
if((state_val_7870 === (2))){
var state_7869__$1 = state_7869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7869__$1,(4),ch);
} else {
if((state_val_7870 === (11))){
var inst_7849 = (state_7869[(8)]);
var inst_7858 = (state_7869[(2)]);
var inst_7846 = inst_7849;
var state_7869__$1 = (function (){var statearr_7879 = state_7869;
(statearr_7879[(7)] = inst_7846);

(statearr_7879[(10)] = inst_7858);

return statearr_7879;
})();
var statearr_7880_7899 = state_7869__$1;
(statearr_7880_7899[(2)] = null);

(statearr_7880_7899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (9))){
var inst_7849 = (state_7869[(8)]);
var state_7869__$1 = state_7869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7869__$1,(11),out,inst_7849);
} else {
if((state_val_7870 === (5))){
var inst_7846 = (state_7869[(7)]);
var inst_7849 = (state_7869[(8)]);
var inst_7853 = cljs.core._EQ_.call(null,inst_7849,inst_7846);
var state_7869__$1 = state_7869;
if(inst_7853){
var statearr_7882_7900 = state_7869__$1;
(statearr_7882_7900[(1)] = (8));

} else {
var statearr_7883_7901 = state_7869__$1;
(statearr_7883_7901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (10))){
var inst_7861 = (state_7869[(2)]);
var state_7869__$1 = state_7869;
var statearr_7884_7902 = state_7869__$1;
(statearr_7884_7902[(2)] = inst_7861);

(statearr_7884_7902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7870 === (8))){
var inst_7846 = (state_7869[(7)]);
var tmp7881 = inst_7846;
var inst_7846__$1 = tmp7881;
var state_7869__$1 = (function (){var statearr_7885 = state_7869;
(statearr_7885[(7)] = inst_7846__$1);

return statearr_7885;
})();
var statearr_7886_7903 = state_7869__$1;
(statearr_7886_7903[(2)] = null);

(statearr_7886_7903[(1)] = (2));


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
});})(c__4192__auto___7893,out))
;
return ((function (switch__4067__auto__,c__4192__auto___7893,out){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7887[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7887[(1)] = (1));

return statearr_7887;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7869){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7888){var ex__4071__auto__ = e7888;
var statearr_7889_7904 = state_7869;
(statearr_7889_7904[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7869[(4)]))){
var statearr_7890_7905 = state_7869;
(statearr_7890_7905[(1)] = cljs.core.first.call(null,(state_7869[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7906 = state_7869;
state_7869 = G__7906;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7893,out))
})();
var state__4194__auto__ = (function (){var statearr_7891 = f__4193__auto__.call(null);
(statearr_7891[(6)] = c__4192__auto___7893);

return statearr_7891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7893,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__7908 = arguments.length;
switch (G__7908) {
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
var c__4192__auto___7975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___7975,out){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___7975,out){
return (function (state_7946){
var state_val_7947 = (state_7946[(1)]);
if((state_val_7947 === (7))){
var inst_7942 = (state_7946[(2)]);
var state_7946__$1 = state_7946;
var statearr_7948_7976 = state_7946__$1;
(statearr_7948_7976[(2)] = inst_7942);

(statearr_7948_7976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (1))){
var inst_7909 = (new Array(n));
var inst_7910 = inst_7909;
var inst_7911 = (0);
var state_7946__$1 = (function (){var statearr_7949 = state_7946;
(statearr_7949[(7)] = inst_7910);

(statearr_7949[(8)] = inst_7911);

return statearr_7949;
})();
var statearr_7950_7977 = state_7946__$1;
(statearr_7950_7977[(2)] = null);

(statearr_7950_7977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (4))){
var inst_7914 = (state_7946[(9)]);
var inst_7914__$1 = (state_7946[(2)]);
var inst_7915 = (inst_7914__$1 == null);
var inst_7916 = cljs.core.not.call(null,inst_7915);
var state_7946__$1 = (function (){var statearr_7951 = state_7946;
(statearr_7951[(9)] = inst_7914__$1);

return statearr_7951;
})();
if(inst_7916){
var statearr_7952_7978 = state_7946__$1;
(statearr_7952_7978[(1)] = (5));

} else {
var statearr_7953_7979 = state_7946__$1;
(statearr_7953_7979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (15))){
var inst_7936 = (state_7946[(2)]);
var state_7946__$1 = state_7946;
var statearr_7954_7980 = state_7946__$1;
(statearr_7954_7980[(2)] = inst_7936);

(statearr_7954_7980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (13))){
var state_7946__$1 = state_7946;
var statearr_7955_7981 = state_7946__$1;
(statearr_7955_7981[(2)] = null);

(statearr_7955_7981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (6))){
var inst_7911 = (state_7946[(8)]);
var inst_7932 = (inst_7911 > (0));
var state_7946__$1 = state_7946;
if(cljs.core.truth_(inst_7932)){
var statearr_7956_7982 = state_7946__$1;
(statearr_7956_7982[(1)] = (12));

} else {
var statearr_7957_7983 = state_7946__$1;
(statearr_7957_7983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (3))){
var inst_7944 = (state_7946[(2)]);
var state_7946__$1 = state_7946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7946__$1,inst_7944);
} else {
if((state_val_7947 === (12))){
var inst_7910 = (state_7946[(7)]);
var inst_7934 = cljs.core.vec.call(null,inst_7910);
var state_7946__$1 = state_7946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7946__$1,(15),out,inst_7934);
} else {
if((state_val_7947 === (2))){
var state_7946__$1 = state_7946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7946__$1,(4),ch);
} else {
if((state_val_7947 === (11))){
var inst_7926 = (state_7946[(2)]);
var inst_7927 = (new Array(n));
var inst_7910 = inst_7927;
var inst_7911 = (0);
var state_7946__$1 = (function (){var statearr_7958 = state_7946;
(statearr_7958[(7)] = inst_7910);

(statearr_7958[(10)] = inst_7926);

(statearr_7958[(8)] = inst_7911);

return statearr_7958;
})();
var statearr_7959_7984 = state_7946__$1;
(statearr_7959_7984[(2)] = null);

(statearr_7959_7984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (9))){
var inst_7910 = (state_7946[(7)]);
var inst_7924 = cljs.core.vec.call(null,inst_7910);
var state_7946__$1 = state_7946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7946__$1,(11),out,inst_7924);
} else {
if((state_val_7947 === (5))){
var inst_7919 = (state_7946[(11)]);
var inst_7910 = (state_7946[(7)]);
var inst_7914 = (state_7946[(9)]);
var inst_7911 = (state_7946[(8)]);
var inst_7918 = (inst_7910[inst_7911] = inst_7914);
var inst_7919__$1 = (inst_7911 + (1));
var inst_7920 = (inst_7919__$1 < n);
var state_7946__$1 = (function (){var statearr_7960 = state_7946;
(statearr_7960[(11)] = inst_7919__$1);

(statearr_7960[(12)] = inst_7918);

return statearr_7960;
})();
if(cljs.core.truth_(inst_7920)){
var statearr_7961_7985 = state_7946__$1;
(statearr_7961_7985[(1)] = (8));

} else {
var statearr_7962_7986 = state_7946__$1;
(statearr_7962_7986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (14))){
var inst_7939 = (state_7946[(2)]);
var inst_7940 = cljs.core.async.close_BANG_.call(null,out);
var state_7946__$1 = (function (){var statearr_7964 = state_7946;
(statearr_7964[(13)] = inst_7939);

return statearr_7964;
})();
var statearr_7965_7987 = state_7946__$1;
(statearr_7965_7987[(2)] = inst_7940);

(statearr_7965_7987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (10))){
var inst_7930 = (state_7946[(2)]);
var state_7946__$1 = state_7946;
var statearr_7966_7988 = state_7946__$1;
(statearr_7966_7988[(2)] = inst_7930);

(statearr_7966_7988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7947 === (8))){
var inst_7919 = (state_7946[(11)]);
var inst_7910 = (state_7946[(7)]);
var tmp7963 = inst_7910;
var inst_7910__$1 = tmp7963;
var inst_7911 = inst_7919;
var state_7946__$1 = (function (){var statearr_7967 = state_7946;
(statearr_7967[(7)] = inst_7910__$1);

(statearr_7967[(8)] = inst_7911);

return statearr_7967;
})();
var statearr_7968_7989 = state_7946__$1;
(statearr_7968_7989[(2)] = null);

(statearr_7968_7989[(1)] = (2));


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
});})(c__4192__auto___7975,out))
;
return ((function (switch__4067__auto__,c__4192__auto___7975,out){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_7969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7969[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_7969[(1)] = (1));

return statearr_7969;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_7946){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_7946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e7970){var ex__4071__auto__ = e7970;
var statearr_7971_7990 = state_7946;
(statearr_7971_7990[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_7946[(4)]))){
var statearr_7972_7991 = state_7946;
(statearr_7972_7991[(1)] = cljs.core.first.call(null,(state_7946[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7992 = state_7946;
state_7946 = G__7992;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_7946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_7946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___7975,out))
})();
var state__4194__auto__ = (function (){var statearr_7973 = f__4193__auto__.call(null);
(statearr_7973[(6)] = c__4192__auto___7975);

return statearr_7973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___7975,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__7994 = arguments.length;
switch (G__7994) {
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
var c__4192__auto___8065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4192__auto___8065,out){
return (function (){
var f__4193__auto__ = (function (){var switch__4067__auto__ = ((function (c__4192__auto___8065,out){
return (function (state_8036){
var state_val_8037 = (state_8036[(1)]);
if((state_val_8037 === (7))){
var inst_8032 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
var statearr_8038_8066 = state_8036__$1;
(statearr_8038_8066[(2)] = inst_8032);

(statearr_8038_8066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (1))){
var inst_7995 = [];
var inst_7996 = inst_7995;
var inst_7997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8036__$1 = (function (){var statearr_8039 = state_8036;
(statearr_8039[(7)] = inst_7997);

(statearr_8039[(8)] = inst_7996);

return statearr_8039;
})();
var statearr_8040_8067 = state_8036__$1;
(statearr_8040_8067[(2)] = null);

(statearr_8040_8067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (4))){
var inst_8000 = (state_8036[(9)]);
var inst_8000__$1 = (state_8036[(2)]);
var inst_8001 = (inst_8000__$1 == null);
var inst_8002 = cljs.core.not.call(null,inst_8001);
var state_8036__$1 = (function (){var statearr_8041 = state_8036;
(statearr_8041[(9)] = inst_8000__$1);

return statearr_8041;
})();
if(inst_8002){
var statearr_8042_8068 = state_8036__$1;
(statearr_8042_8068[(1)] = (5));

} else {
var statearr_8043_8069 = state_8036__$1;
(statearr_8043_8069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (15))){
var inst_8026 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
var statearr_8044_8070 = state_8036__$1;
(statearr_8044_8070[(2)] = inst_8026);

(statearr_8044_8070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (13))){
var state_8036__$1 = state_8036;
var statearr_8045_8071 = state_8036__$1;
(statearr_8045_8071[(2)] = null);

(statearr_8045_8071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (6))){
var inst_7996 = (state_8036[(8)]);
var inst_8021 = inst_7996.length;
var inst_8022 = (inst_8021 > (0));
var state_8036__$1 = state_8036;
if(cljs.core.truth_(inst_8022)){
var statearr_8046_8072 = state_8036__$1;
(statearr_8046_8072[(1)] = (12));

} else {
var statearr_8047_8073 = state_8036__$1;
(statearr_8047_8073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (3))){
var inst_8034 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8036__$1,inst_8034);
} else {
if((state_val_8037 === (12))){
var inst_7996 = (state_8036[(8)]);
var inst_8024 = cljs.core.vec.call(null,inst_7996);
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8036__$1,(15),out,inst_8024);
} else {
if((state_val_8037 === (2))){
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8036__$1,(4),ch);
} else {
if((state_val_8037 === (11))){
var inst_8000 = (state_8036[(9)]);
var inst_8004 = (state_8036[(10)]);
var inst_8014 = (state_8036[(2)]);
var inst_8015 = [];
var inst_8016 = inst_8015.push(inst_8000);
var inst_7996 = inst_8015;
var inst_7997 = inst_8004;
var state_8036__$1 = (function (){var statearr_8048 = state_8036;
(statearr_8048[(7)] = inst_7997);

(statearr_8048[(11)] = inst_8016);

(statearr_8048[(12)] = inst_8014);

(statearr_8048[(8)] = inst_7996);

return statearr_8048;
})();
var statearr_8049_8074 = state_8036__$1;
(statearr_8049_8074[(2)] = null);

(statearr_8049_8074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (9))){
var inst_7996 = (state_8036[(8)]);
var inst_8012 = cljs.core.vec.call(null,inst_7996);
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8036__$1,(11),out,inst_8012);
} else {
if((state_val_8037 === (5))){
var inst_8000 = (state_8036[(9)]);
var inst_8004 = (state_8036[(10)]);
var inst_7997 = (state_8036[(7)]);
var inst_8004__$1 = f.call(null,inst_8000);
var inst_8005 = cljs.core._EQ_.call(null,inst_8004__$1,inst_7997);
var inst_8006 = cljs.core.keyword_identical_QMARK_.call(null,inst_7997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8007 = ((inst_8005) || (inst_8006));
var state_8036__$1 = (function (){var statearr_8050 = state_8036;
(statearr_8050[(10)] = inst_8004__$1);

return statearr_8050;
})();
if(cljs.core.truth_(inst_8007)){
var statearr_8051_8075 = state_8036__$1;
(statearr_8051_8075[(1)] = (8));

} else {
var statearr_8052_8076 = state_8036__$1;
(statearr_8052_8076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (14))){
var inst_8029 = (state_8036[(2)]);
var inst_8030 = cljs.core.async.close_BANG_.call(null,out);
var state_8036__$1 = (function (){var statearr_8054 = state_8036;
(statearr_8054[(13)] = inst_8029);

return statearr_8054;
})();
var statearr_8055_8077 = state_8036__$1;
(statearr_8055_8077[(2)] = inst_8030);

(statearr_8055_8077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (10))){
var inst_8019 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
var statearr_8056_8078 = state_8036__$1;
(statearr_8056_8078[(2)] = inst_8019);

(statearr_8056_8078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (8))){
var inst_8000 = (state_8036[(9)]);
var inst_8004 = (state_8036[(10)]);
var inst_7996 = (state_8036[(8)]);
var inst_8009 = inst_7996.push(inst_8000);
var tmp8053 = inst_7996;
var inst_7996__$1 = tmp8053;
var inst_7997 = inst_8004;
var state_8036__$1 = (function (){var statearr_8057 = state_8036;
(statearr_8057[(14)] = inst_8009);

(statearr_8057[(7)] = inst_7997);

(statearr_8057[(8)] = inst_7996__$1);

return statearr_8057;
})();
var statearr_8058_8079 = state_8036__$1;
(statearr_8058_8079[(2)] = null);

(statearr_8058_8079[(1)] = (2));


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
});})(c__4192__auto___8065,out))
;
return ((function (switch__4067__auto__,c__4192__auto___8065,out){
return (function() {
var cljs$core$async$state_machine__4068__auto__ = null;
var cljs$core$async$state_machine__4068__auto____0 = (function (){
var statearr_8059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8059[(0)] = cljs$core$async$state_machine__4068__auto__);

(statearr_8059[(1)] = (1));

return statearr_8059;
});
var cljs$core$async$state_machine__4068__auto____1 = (function (state_8036){
while(true){
var ret_value__4069__auto__ = (function (){try{while(true){
var result__4070__auto__ = switch__4067__auto__.call(null,state_8036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4070__auto__;
}
break;
}
}catch (e8060){var ex__4071__auto__ = e8060;
var statearr_8061_8080 = state_8036;
(statearr_8061_8080[(2)] = ex__4071__auto__);


if(cljs.core.seq.call(null,(state_8036[(4)]))){
var statearr_8062_8081 = state_8036;
(statearr_8062_8081[(1)] = cljs.core.first.call(null,(state_8036[(4)])));

} else {
throw ex__4071__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8082 = state_8036;
state_8036 = G__8082;
continue;
} else {
return ret_value__4069__auto__;
}
break;
}
});
cljs$core$async$state_machine__4068__auto__ = function(state_8036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4068__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4068__auto____1.call(this,state_8036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4068__auto____0;
cljs$core$async$state_machine__4068__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4068__auto____1;
return cljs$core$async$state_machine__4068__auto__;
})()
;})(switch__4067__auto__,c__4192__auto___8065,out))
})();
var state__4194__auto__ = (function (){var statearr_8063 = f__4193__auto__.call(null);
(statearr_8063[(6)] = c__4192__auto___8065);

return statearr_8063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4194__auto__);
});})(c__4192__auto___8065,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
