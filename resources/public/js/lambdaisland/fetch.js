// Compiled by ClojureScript 1.10.191 {}
goog.provide('lambdaisland.fetch');
goog.require('cljs.core');
goog.require('kitchen_async.promise');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('lambdaisland.uri');
goog.require('lambdaisland.uri.normalize');
goog.require('applied_science.js_interop');
goog.require('cognitect.transit');
lambdaisland.fetch.content_types = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),"application/transit+json",new cljs.core.Keyword(null,"json","json",1279968570),"application/json",new cljs.core.Keyword(null,"form-encoded","form-encoded",188329083),"application/x-www-form-urlencoded",new cljs.core.Keyword(null,"text","text",-1790561697),"text/plain",new cljs.core.Keyword(null,"html","html",-998796897),"text/html"], null);
lambdaisland.fetch.transit_json_writer = (new cljs.core.Delay((function (){
return cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
}),null));
lambdaisland.fetch.transit_json_reader = (new cljs.core.Delay((function (){
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
}),null));
if(typeof lambdaisland.fetch.encode_body !== 'undefined'){
} else {
lambdaisland.fetch.encode_body = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lambdaisland.fetch","encode-body"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (content_type,body,opts){
return content_type;
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
cljs.core._add_method.call(null,lambdaisland.fetch.encode_body,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,body,opts){
return body;
}));
cljs.core._add_method.call(null,lambdaisland.fetch.encode_body,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,body,opts){
return cognitect.transit.write.call(null,new cljs.core.Keyword(null,"transit-json-writer","transit-json-writer",-326747160).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref.call(null,lambdaisland.fetch.transit_json_writer)),body);
}));
cljs.core._add_method.call(null,lambdaisland.fetch.encode_body,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,body,opts){
return JSON.stringify(cljs.core.clj__GT_js.call(null,body));
}));
if(typeof lambdaisland.fetch.decode_body !== 'undefined'){
} else {
lambdaisland.fetch.decode_body = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lambdaisland.fetch","decode-body"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (content_type,bodyp,opts){
return content_type;
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
cljs.core._add_method.call(null,lambdaisland.fetch.decode_body,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,bodyp,opts){
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,bodyp,(function (body){
var obj__9742__auto__ = bodyp;
var f__9743__auto__ = (obj__9742__auto__["text"]);
return f__9743__auto__.call(obj__9742__auto__);
})));
}catch (e10322){var e__1755__auto__ = e10322;
return kitchen_async.promise.reject.call(null,e__1755__auto__);
}}));
cljs.core._add_method.call(null,lambdaisland.fetch.decode_body,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,bodyp,opts){
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,(function (){var obj__9742__auto__ = bodyp;
var f__9743__auto__ = (obj__9742__auto__["text"]);
return f__9743__auto__.call(obj__9742__auto__);
})(),(function (text){
var decoded = cognitect.transit.read.call(null,new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref.call(null,lambdaisland.fetch.transit_json_reader)),text);
if(((!((decoded == null)))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.call(null,decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e10323){var e__1755__auto__ = e10323;
return kitchen_async.promise.reject.call(null,e__1755__auto__);
}}));
cljs.core._add_method.call(null,lambdaisland.fetch.decode_body,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,bodyp,opts){
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,bodyp,(function (body){
var obj__9742__auto__ = bodyp;
var f__9743__auto__ = (obj__9742__auto__["json"]);
return f__9743__auto__.call(obj__9742__auto__);
})));
}catch (e10325){var e__1755__auto__ = e10325;
return kitchen_async.promise.reject.call(null,e__1755__auto__);
}}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__10326){
var map__10327 = p__10326;
var map__10327__$1 = ((((!((map__10327 == null)))?(((((map__10327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10327):map__10327);
var method = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var accept = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
return ({"method": clojure.string.upper_case.call(null,cljs.core.name.call(null,method)), "headers": ({"Accept": cljs.core.get.call(null,lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.call(null,lambdaisland.fetch.content_types,content_type)}), "redirect": "follow"});
});
lambdaisland.fetch.request = (function lambdaisland$fetch$request(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10360 = arguments.length;
var i__4498__auto___10361 = (0);
while(true){
if((i__4498__auto___10361 < len__4497__auto___10360)){
args__4500__auto__.push((arguments[i__4498__auto___10361]));

var G__10362 = (i__4498__auto___10361 + (1));
i__4498__auto___10361 = G__10362;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10331){
var vec__10332 = p__10331;
var map__10335 = cljs.core.nth.call(null,vec__10332,(0),null);
var map__10335__$1 = ((((!((map__10335 == null)))?(((((map__10335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10335):map__10335);
var opts = map__10335__$1;
var method = cljs.core.get.call(null,map__10335__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.call(null,map__10335__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.call(null,map__10335__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.call(null,map__10335__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.call(null,map__10335__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.call(null,lambdaisland.uri.uri.call(null,url),new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.map__GT_query_string.call(null,query_params)))].join('');
var request = (function (){var G__10337 = lambdaisland.fetch.fetch_opts.call(null,opts);
if(cljs.core.truth_(body)){
var obj10338 = G__10337;
var obj10339 = ((!((obj10338 == null)))?obj10338:{});
(obj10339["body"] = lambdaisland.fetch.encode_body.call(null,content_type,body,opts));

return obj10339;
} else {
return G__10337;
}
})();
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,fetch(url__$1,request),((function (url__$1,request,vec__10332,map__10335,map__10335__$1,opts,method,accept,content_type,query_params,body){
return (function (response){
return kitchen_async.promise.catch_STAR_.call(null,(function (){try{return kitchen_async.promise.__GT_promise.call(null,(function (){var headers = (function (){var obj10345 = response;
var k10346 = "headers";
if((function (){var obj10347 = obj10345;
return ((!((obj10347 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10346,obj10347)));
})()){
return (obj10345[k10346]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec),cljs.core.es6_iterator_seq.call(null,(function (){var obj__9742__auto__ = headers;
var f__9743__auto__ = (obj__9742__auto__["entries"]);
return f__9743__auto__.call(obj__9742__auto__);
})()));
var content_type_header = (function (){var obj__9742__auto__ = headers;
var f__9743__auto__ = (obj__9742__auto__["get"]);
return f__9743__auto__.call(obj__9742__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.call(null,clojure.set.map_invert.call(null,lambdaisland.fetch.content_types),clojure.string.replace.call(null,content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,lambdaisland.fetch.decode_body.call(null,content_type__$1,response,opts),((function (headers,header_map,content_type_header,content_type__$1,url__$1,request,vec__10332,map__10335,map__10335__$1,opts,method,accept,content_type,query_params,body){
return (function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj10349 = response;
var k10350 = "status";
if((function (){var obj10351 = obj10349;
return ((!((obj10351 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k10350,obj10351)));
})()){
return (obj10349[k10350]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj10352 = request;
var obj10353 = ((!((obj10352 == null)))?obj10352:{});
(obj10353["url"] = url__$1);

return obj10353;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
});})(headers,header_map,content_type_header,content_type__$1,url__$1,request,vec__10332,map__10335,map__10335__$1,opts,method,accept,content_type,query_params,body))
));
}catch (e10348){var e__1755__auto__ = e10348;
return kitchen_async.promise.reject.call(null,e__1755__auto__);
}})());
}catch (e10344){var e__1755__auto__ = e10344;
return kitchen_async.promise.reject.call(null,e__1755__auto__);
}})(),((function (url__$1,request,vec__10332,map__10335,map__10335__$1,opts,method,accept,content_type,query_params,body){
return (function (err10343){
var e = err10343;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj10356 = request;
var obj10357 = ((!((obj10356 == null)))?obj10356:{});
(obj10357["url"] = url__$1);

return obj10357;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

});})(url__$1,request,vec__10332,map__10335,map__10335__$1,opts,method,accept,content_type,query_params,body))
);
});})(url__$1,request,vec__10332,map__10335,map__10335__$1,opts,method,accept,content_type,query_params,body))
));
}catch (e10342){var e__1755__auto__ = e10342;
return kitchen_async.promise.reject.call(null,e__1755__auto__);
}});

lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq10329){
var G__10330 = cljs.core.first.call(null,seq10329);
var seq10329__$1 = cljs.core.next.call(null,seq10329);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10330,seq10329__$1);
});

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10369 = arguments.length;
var i__4498__auto___10370 = (0);
while(true){
if((i__4498__auto___10370 < len__4497__auto___10369)){
args__4500__auto__.push((arguments[i__4498__auto___10370]));

var G__10371 = (i__4498__auto___10370 + (1));
i__4498__auto___10370 = G__10371;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10365){
var vec__10366 = p__10365;
var opts = cljs.core.nth.call(null,vec__10366,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)));
});

lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq10363){
var G__10364 = cljs.core.first.call(null,seq10363);
var seq10363__$1 = cljs.core.next.call(null,seq10363);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10364,seq10363__$1);
});

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10378 = arguments.length;
var i__4498__auto___10379 = (0);
while(true){
if((i__4498__auto___10379 < len__4497__auto___10378)){
args__4500__auto__.push((arguments[i__4498__auto___10379]));

var G__10380 = (i__4498__auto___10379 + (1));
i__4498__auto___10379 = G__10380;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10374){
var vec__10375 = p__10374;
var opts = cljs.core.nth.call(null,vec__10375,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570)));
});

lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq10372){
var G__10373 = cljs.core.first.call(null,seq10372);
var seq10372__$1 = cljs.core.next.call(null,seq10372);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10373,seq10372__$1);
});

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10387 = arguments.length;
var i__4498__auto___10388 = (0);
while(true){
if((i__4498__auto___10388 < len__4497__auto___10387)){
args__4500__auto__.push((arguments[i__4498__auto___10388]));

var G__10389 = (i__4498__auto___10388 + (1));
i__4498__auto___10388 = G__10389;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10383){
var vec__10384 = p__10383;
var opts = cljs.core.nth.call(null,vec__10384,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620)));
});

lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq10381){
var G__10382 = cljs.core.first.call(null,seq10381);
var seq10381__$1 = cljs.core.next.call(null,seq10381);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10382,seq10381__$1);
});

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__4500__auto__ = [];
var len__4497__auto___10396 = arguments.length;
var i__4498__auto___10397 = (0);
while(true){
if((i__4498__auto___10397 < len__4497__auto___10396)){
args__4500__auto__.push((arguments[i__4498__auto___10397]));

var G__10398 = (i__4498__auto___10397 + (1));
i__4498__auto___10397 = G__10398;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10392){
var vec__10393 = p__10392;
var opts = cljs.core.nth.call(null,vec__10393,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919)));
});

lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq10390){
var G__10391 = cljs.core.first.call(null,seq10390);
var seq10390__$1 = cljs.core.next.call(null,seq10390);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10391,seq10390__$1);
});


//# sourceMappingURL=fetch.js.map
