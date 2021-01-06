// Compiled by ClojureScript 1.10.191 {}
goog.provide('kitchen_async.protocols.promisable');
goog.require('cljs.core');

/**
 * @interface
 */
kitchen_async.protocols.promisable.Promisable = function(){};

kitchen_async.protocols.promisable.__GT_promise_STAR_ = (function kitchen_async$protocols$promisable$__GT_promise_STAR_(this$){
if(((!((this$ == null))) && (!((this$.kitchen_async$protocols$promisable$Promisable$__GT_promise_STAR_$arity$1 == null))))){
return this$.kitchen_async$protocols$promisable$Promisable$__GT_promise_STAR_$arity$1(this$);
} else {
var x__4209__auto__ = (((this$ == null))?null:this$);
var m__4210__auto__ = (kitchen_async.protocols.promisable.__GT_promise_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,this$);
} else {
var m__4210__auto____$1 = (kitchen_async.protocols.promisable.__GT_promise_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Promisable.->promise*",this$);
}
}
}
});


//# sourceMappingURL=promisable.js.map
