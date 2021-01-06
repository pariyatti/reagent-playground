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
var obj__2193__auto__ = bodyp;
var f__2194__auto__ = (obj__2193__auto__["text"]);
return f__2194__auto__.call(obj__2193__auto__);
})));
}catch (e2763){var e__1342__auto__ = e2763;
return kitchen_async.promise.reject.call(null,e__1342__auto__);
}}));
cljs.core._add_method.call(null,lambdaisland.fetch.decode_body,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,bodyp,opts){
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,(function (){var obj__2193__auto__ = bodyp;
var f__2194__auto__ = (obj__2193__auto__["text"]);
return f__2194__auto__.call(obj__2193__auto__);
})(),(function (text){
var decoded = cognitect.transit.read.call(null,new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref.call(null,lambdaisland.fetch.transit_json_reader)),text);
if(((!((decoded == null)))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.call(null,decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e2764){var e__1342__auto__ = e2764;
return kitchen_async.promise.reject.call(null,e__1342__auto__);
}}));
cljs.core._add_method.call(null,lambdaisland.fetch.decode_body,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,bodyp,opts){
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,bodyp,(function (body){
var obj__2193__auto__ = bodyp;
var f__2194__auto__ = (obj__2193__auto__["json"]);
return f__2194__auto__.call(obj__2193__auto__);
})));
}catch (e2766){var e__1342__auto__ = e2766;
return kitchen_async.promise.reject.call(null,e__1342__auto__);
}}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__2767){
var map__2768 = p__2767;
var map__2768__$1 = ((((!((map__2768 == null)))?(((((map__2768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2768):map__2768);
var method = cljs.core.get.call(null,map__2768__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var accept = cljs.core.get.call(null,map__2768__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.call(null,map__2768__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
return ({"method": clojure.string.upper_case.call(null,cljs.core.name.call(null,method)), "headers": ({"Accept": cljs.core.get.call(null,lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.call(null,lambdaisland.fetch.content_types,content_type)}), "redirect": "follow"});
});
lambdaisland.fetch.request = (function lambdaisland$fetch$request(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2801 = arguments.length;
var i__4498__auto___2802 = (0);
while(true){
if((i__4498__auto___2802 < len__4497__auto___2801)){
args__4500__auto__.push((arguments[i__4498__auto___2802]));

var G__2803 = (i__4498__auto___2802 + (1));
i__4498__auto___2802 = G__2803;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__2772){
var vec__2773 = p__2772;
var map__2776 = cljs.core.nth.call(null,vec__2773,(0),null);
var map__2776__$1 = ((((!((map__2776 == null)))?(((((map__2776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2776):map__2776);
var opts = map__2776__$1;
var method = cljs.core.get.call(null,map__2776__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.call(null,map__2776__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.call(null,map__2776__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.call(null,map__2776__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.call(null,map__2776__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.call(null,lambdaisland.uri.uri.call(null,url),new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.map__GT_query_string.call(null,query_params)))].join('');
var request = (function (){var G__2778 = lambdaisland.fetch.fetch_opts.call(null,opts);
if(cljs.core.truth_(body)){
var obj2779 = G__2778;
var obj2780 = ((!((obj2779 == null)))?obj2779:{});
(obj2780["body"] = lambdaisland.fetch.encode_body.call(null,content_type,body,opts));

return obj2780;
} else {
return G__2778;
}
})();
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,fetch(url__$1,request),((function (url__$1,request,vec__2773,map__2776,map__2776__$1,opts,method,accept,content_type,query_params,body){
return (function (response){
return kitchen_async.promise.catch_STAR_.call(null,(function (){try{return kitchen_async.promise.__GT_promise.call(null,(function (){var headers = (function (){var obj2786 = response;
var k2787 = "headers";
if((function (){var obj2788 = obj2786;
return ((!((obj2788 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2787,obj2788)));
})()){
return (obj2786[k2787]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec),cljs.core.es6_iterator_seq.call(null,(function (){var obj__2193__auto__ = headers;
var f__2194__auto__ = (obj__2193__auto__["entries"]);
return f__2194__auto__.call(obj__2193__auto__);
})()));
var content_type_header = (function (){var obj__2193__auto__ = headers;
var f__2194__auto__ = (obj__2193__auto__["get"]);
return f__2194__auto__.call(obj__2193__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.call(null,clojure.set.map_invert.call(null,lambdaisland.fetch.content_types),clojure.string.replace.call(null,content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise.call(null,kitchen_async.promise.then.call(null,lambdaisland.fetch.decode_body.call(null,content_type__$1,response,opts),((function (headers,header_map,content_type_header,content_type__$1,url__$1,request,vec__2773,map__2776,map__2776__$1,opts,method,accept,content_type,query_params,body){
return (function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj2790 = response;
var k2791 = "status";
if((function (){var obj2792 = obj2790;
return ((!((obj2792 == null))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k2791,obj2792)));
})()){
return (obj2790[k2791]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj2793 = request;
var obj2794 = ((!((obj2793 == null)))?obj2793:{});
(obj2794["url"] = url__$1);

return obj2794;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
});})(headers,header_map,content_type_header,content_type__$1,url__$1,request,vec__2773,map__2776,map__2776__$1,opts,method,accept,content_type,query_params,body))
));
}catch (e2789){var e__1342__auto__ = e2789;
return kitchen_async.promise.reject.call(null,e__1342__auto__);
}})());
}catch (e2785){var e__1342__auto__ = e2785;
return kitchen_async.promise.reject.call(null,e__1342__auto__);
}})(),((function (url__$1,request,vec__2773,map__2776,map__2776__$1,opts,method,accept,content_type,query_params,body){
return (function (err2784){
var e = err2784;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj2797 = request;
var obj2798 = ((!((obj2797 == null)))?obj2797:{});
(obj2798["url"] = url__$1);

return obj2798;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

});})(url__$1,request,vec__2773,map__2776,map__2776__$1,opts,method,accept,content_type,query_params,body))
);
});})(url__$1,request,vec__2773,map__2776,map__2776__$1,opts,method,accept,content_type,query_params,body))
));
}catch (e2783){var e__1342__auto__ = e2783;
return kitchen_async.promise.reject.call(null,e__1342__auto__);
}});

lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq2770){
var G__2771 = cljs.core.first.call(null,seq2770);
var seq2770__$1 = cljs.core.next.call(null,seq2770);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2771,seq2770__$1);
});

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2810 = arguments.length;
var i__4498__auto___2811 = (0);
while(true){
if((i__4498__auto___2811 < len__4497__auto___2810)){
args__4500__auto__.push((arguments[i__4498__auto___2811]));

var G__2812 = (i__4498__auto___2811 + (1));
i__4498__auto___2811 = G__2812;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__2806){
var vec__2807 = p__2806;
var opts = cljs.core.nth.call(null,vec__2807,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)));
});

lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq2804){
var G__2805 = cljs.core.first.call(null,seq2804);
var seq2804__$1 = cljs.core.next.call(null,seq2804);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2805,seq2804__$1);
});

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2819 = arguments.length;
var i__4498__auto___2820 = (0);
while(true){
if((i__4498__auto___2820 < len__4497__auto___2819)){
args__4500__auto__.push((arguments[i__4498__auto___2820]));

var G__2821 = (i__4498__auto___2820 + (1));
i__4498__auto___2820 = G__2821;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__2815){
var vec__2816 = p__2815;
var opts = cljs.core.nth.call(null,vec__2816,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570)));
});

lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq2813){
var G__2814 = cljs.core.first.call(null,seq2813);
var seq2813__$1 = cljs.core.next.call(null,seq2813);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2814,seq2813__$1);
});

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2828 = arguments.length;
var i__4498__auto___2829 = (0);
while(true){
if((i__4498__auto___2829 < len__4497__auto___2828)){
args__4500__auto__.push((arguments[i__4498__auto___2829]));

var G__2830 = (i__4498__auto___2829 + (1));
i__4498__auto___2829 = G__2830;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__2824){
var vec__2825 = p__2824;
var opts = cljs.core.nth.call(null,vec__2825,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620)));
});

lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq2822){
var G__2823 = cljs.core.first.call(null,seq2822);
var seq2822__$1 = cljs.core.next.call(null,seq2822);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2823,seq2822__$1);
});

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__4500__auto__ = [];
var len__4497__auto___2837 = arguments.length;
var i__4498__auto___2838 = (0);
while(true){
if((i__4498__auto___2838 < len__4497__auto___2837)){
args__4500__auto__.push((arguments[i__4498__auto___2838]));

var G__2839 = (i__4498__auto___2838 + (1));
i__4498__auto___2838 = G__2839;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__2833){
var vec__2834 = p__2833;
var opts = cljs.core.nth.call(null,vec__2834,(0),null);
return lambdaisland.fetch.request.call(null,url,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919)));
});

lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq2831){
var G__2832 = cljs.core.first.call(null,seq2831);
var seq2831__$1 = cljs.core.next.call(null,seq2831);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2832,seq2831__$1);
});


//# sourceMappingURL=fetch.js.map
