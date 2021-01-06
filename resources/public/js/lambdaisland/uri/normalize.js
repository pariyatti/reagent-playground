// Compiled by ClojureScript 1.10.191 {}
goog.provide('lambdaisland.uri.normalize');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lambdaisland.uri.platform');
/**
 * Which characters should be percent-encoded depends on which section
 *  of the URI is being normalized. This map contains regexes that for each
 *  case match the characters that need encoding.
 */
lambdaisland.uri.normalize.character_classes = (function (){var alpha = "a-zA-Z";
var digit = "0-9";
var gen_delims = ":\\/\\?#\\[\\]@";
var sub_delims = "!\\$&'\\(\\)\\*\\+,;=";
var reserved = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen_delims),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_delims)].join('');
var unreserved = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),cljs.core.str.cljs$core$IFn$_invoke$arity$1(digit),"\\-\\._~"].join('');
var pchar = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(unreserved),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_delims),":@"].join('');
var scheme = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),cljs.core.str.cljs$core$IFn$_invoke$arity$1(digit),"\\-\\+\\."].join('');
var host = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(unreserved),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_delims),"\\[:\\]"].join('');
var authority = pchar;
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pchar),"\\/"].join('');
var query = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(unreserved),":@\\/\\?"].join('');
var fragment = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pchar),"\\/\\?"].join('');
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"authority","authority",-551669367),new cljs.core.Keyword(null,"pchar","pchar",-247796372),new cljs.core.Keyword(null,"unreserved","unreserved",354716524),new cljs.core.Keyword(null,"sub-delims","sub-delims",1571683437),new cljs.core.Keyword(null,"gen-delims","gen-delims",-1487021297),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"reserved","reserved",-775228297),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"digit","digit",1612650493)],[cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(authority),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pchar),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unreserved),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_delims),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen_delims),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reserved),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme),"]"].join('')),cljs.core.re_pattern.call(null,["[^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(digit),"]"].join(''))]);
})();
/**
 * Return a seq of the characters in a string, making sure not to split up
 *   UCS-2 (or is it UTF-16?) surrogate pairs. Because JavaScript. And Java.
 */
lambdaisland.uri.normalize.char_seq = (function lambdaisland$uri$normalize$char_seq(var_args){
var G__1541 = arguments.length;
switch (G__1541) {
case 1:
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1 = (function (str){
return lambdaisland.uri.normalize.char_seq.call(null,str,(0));
});

lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2 = (function (str,offset){
if((offset >= lambdaisland.uri.platform.str_len.call(null,str))){
return cljs.core.List.EMPTY;
} else {
var code = lambdaisland.uri.platform.char_code_at.call(null,str,offset);
var width = ((((((55296) <= code)) && ((code <= (56319)))))?(2):(1));
return cljs.core.cons.call(null,cljs.core.subs.call(null,str,offset,(offset + width)),lambdaisland.uri.normalize.char_seq.call(null,str,(offset + width)));
}
});

lambdaisland.uri.normalize.char_seq.cljs$lang$maxFixedArity = 2;

/**
 * Convert characters in their percent encoded form. e.g.
 * `(percent_encode "a") #_=> "%61"`. When given a second argument, then
 * only characters of the given character class are encoded,
 * see `character-class`.
 * 
 * Characters are encoded as UTF-8. To use a different encoding. re-bind
 * `*character-encoding*`
 */
lambdaisland.uri.normalize.percent_encode = (function lambdaisland$uri$normalize$percent_encode(var_args){
var G__1546 = arguments.length;
switch (G__1546) {
case 1:
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1 = (function (component){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__1543_SHARP_){
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.platform.byte__GT_hex.call(null,p1__1543_SHARP_))].join('');
}),lambdaisland.uri.platform.string__GT_byte_seq.call(null,component)));
});

lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2 = (function (component,type){
var char_class = cljs.core.get.call(null,lambdaisland.uri.normalize.character_classes,type);
var encode_char = ((function (char_class){
return (function (p1__1544_SHARP_){
var G__1547 = p1__1544_SHARP_;
if(cljs.core.truth_(cljs.core.re_find.call(null,char_class,p1__1544_SHARP_))){
return lambdaisland.uri.normalize.percent_encode.call(null,G__1547);
} else {
return G__1547;
}
});})(char_class))
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,encode_char,lambdaisland.uri.normalize.char_seq.call(null,component)));
});

lambdaisland.uri.normalize.percent_encode.cljs$lang$maxFixedArity = 2;

/**
 * The inverse of `percent-encode`, convert any %XX sequences in a string to
 * characters. Byte sequences are interpreted as UTF-8. To use a different
 * encoding. re-bind `*character-encoding*`
 */
lambdaisland.uri.normalize.percent_decode = (function lambdaisland$uri$normalize$percent_decode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/(%[0-9A-Fa-f]{2})+/,(function (p__1549){
var vec__1550 = p__1549;
var x = cljs.core.nth.call(null,vec__1550,(0),null);
var _ = cljs.core.nth.call(null,vec__1550,(1),null);
return lambdaisland.uri.platform.byte_seq__GT_string.call(null,cljs.core.map.call(null,lambdaisland.uri.platform.hex__GT_byte,cljs.core.drop.call(null,(1),clojure.string.split.call(null,x,/%/))));
}));
} else {
return null;
}
});
lambdaisland.uri.normalize.normalize_path = (function lambdaisland$uri$normalize$normalize_path(path){
if((path == null)){
return null;
} else {
return lambdaisland.uri.normalize.percent_encode.call(null,lambdaisland.uri.normalize.percent_decode.call(null,path),new cljs.core.Keyword(null,"path","path",-188191168));
}
});
lambdaisland.uri.normalize.hex_code_point_QMARK_ = (function lambdaisland$uri$normalize$hex_code_point_QMARK_(cp){
return ((((((48) <= cp)) && ((cp <= (57))))) || (((((65) <= cp)) && ((cp <= (70))))) || (((((97) <= cp)) && ((cp <= (102))))));
});
/**
 * RFC3986 section 2.2
 * 
 *   The purpose of reserved characters is to provide a set of delimiting
 *   characters that are distinguishable from other data within a URI.
 *   URIs that differ in the replacement of a reserved character with its
 *   corresponding percent-encoded octet are not equivalent.  Percent-
 *   encoding a reserved character, or decoding a percent-encoded octet
 *   that corresponds to a reserved character, will change how the URI is
 *   interpreted by most applications.  Thus, characters in the reserved
 *   set are protected from normalization and are therefore safe to be
 *   used by scheme-specific and producer-specific algorithms for
 *   delimiting data subcomponents within a URI. 
 */
lambdaisland.uri.normalize.sub_delims = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["'",null,")",null,"=",null,"!",null,"*",null,"(",null,"&",null,";",null,",",null,"+",null,"$",null], null), null);
/**
 * Normalize the query section of a URI
 * 
 *   - sub-delimiters that are not percent encoded are left unencoded
 *   - sub-delimiters and other reserved characters are always percent encoded
 *   - non-reserved characters that are percent-encoded are decoded
 *   
 */
lambdaisland.uri.normalize.normalize_query = (function lambdaisland$uri$normalize$normalize_query(s){
if(cljs.core.truth_(s)){
var len = lambdaisland.uri.platform.str_len.call(null,s);
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,i,len)){
return cljs.core.apply.call(null,cljs.core.str,res);
} else {
if(cljs.core.truth_((function (){var and__3909__auto__ = (i < (len - (2)));
if(and__3909__auto__){
var and__3909__auto____$1 = cljs.core._EQ_.call(null,(37),lambdaisland.uri.platform.char_code_at.call(null,s,i));
if(and__3909__auto____$1){
var and__3909__auto____$2 = lambdaisland.uri.normalize.hex_code_point_QMARK_.call(null,lambdaisland.uri.platform.char_code_at.call(null,s,(i + (1))));
if(cljs.core.truth_(and__3909__auto____$2)){
return lambdaisland.uri.normalize.hex_code_point_QMARK_.call(null,lambdaisland.uri.platform.char_code_at.call(null,s,(i + (2))));
} else {
return and__3909__auto____$2;
}
} else {
return and__3909__auto____$1;
}
} else {
return and__3909__auto__;
}
})())){
var G__1553 = (i + (3));
var G__1554 = cljs.core.conj.call(null,res,lambdaisland.uri.normalize.percent_encode.call(null,lambdaisland.uri.normalize.percent_decode.call(null,cljs.core.subs.call(null,s,i,(i + (3)))),new cljs.core.Keyword(null,"query","query",-1288509510)));
i = G__1553;
res = G__1554;
continue;
} else {
if(cljs.core.contains_QMARK_.call(null,lambdaisland.uri.normalize.sub_delims,cljs.core.subs.call(null,s,i,(i + (1))))){
var G__1555 = (i + (1));
var G__1556 = cljs.core.conj.call(null,res,cljs.core.subs.call(null,s,i,(i + (1))));
i = G__1555;
res = G__1556;
continue;
} else {
var G__1557 = (i + (1));
var G__1558 = cljs.core.conj.call(null,res,lambdaisland.uri.normalize.percent_encode.call(null,cljs.core.subs.call(null,s,i,(i + (1))),new cljs.core.Keyword(null,"query","query",-1288509510)));
i = G__1557;
res = G__1558;
continue;

}
}
}
break;
}
} else {
return null;
}
});
/**
 * Normalize a lambdaisland.uri.URI.
 */
lambdaisland.uri.normalize.normalize = (function lambdaisland$uri$normalize$normalize(uri){
return cljs.core.update.call(null,cljs.core.update.call(null,uri,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.normalize.normalize_path),new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.normalize.normalize_query);
});

//# sourceMappingURL=normalize.js.map
