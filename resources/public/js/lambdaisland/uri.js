// Compiled by ClojureScript 1.10.191 {}
goog.provide('lambdaisland.uri');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lambdaisland.uri.normalize');
lambdaisland.uri.uri_regex = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?$/;
lambdaisland.uri.authority_regex = /^(([^:]*)(:(.*))?@)?([^:]*)(:(\d*))?$/;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {lambdaisland.uri.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.uri.URI = (function (scheme,user,password,host,port,path,query,fragment,__meta,__extmap,__hash){
this.scheme = scheme;
this.user = user;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
lambdaisland.uri.URI.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var authority_string = ((function (this$){
return (function (user__$1,password__$1,host__$1,port__$1){
if(cljs.core.truth_(host__$1)){
var G__8988 = user__$1;
var G__8988__$1 = (cljs.core.truth_((function (){var and__3909__auto__ = user__$1;
if(cljs.core.truth_(and__3909__auto__)){
return password__$1;
} else {
return and__3909__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8988),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password__$1)].join(''):G__8988);
var G__8988__$2 = (cljs.core.truth_(user__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8988__$1),"@"].join(''):G__8988__$1);
var G__8988__$3 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8988__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host__$1)].join('')
;
if(cljs.core.truth_(port__$1)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8988__$3),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port__$1)].join('');
} else {
return G__8988__$3;
}
} else {
return null;
}
});})(this$))
;
var authority = authority_string.call(null,self__.user,self__.password,self__.host,self__.port);
var G__8989 = "";
var G__8989__$1 = (cljs.core.truth_(self__.scheme)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8989),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.scheme),":"].join(''):G__8989);
var G__8989__$2 = (cljs.core.truth_(authority)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8989__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(authority)].join(''):G__8989__$1);
var G__8989__$3 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8989__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join('')
;
var G__8989__$4 = (cljs.core.truth_(self__.query)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8989__$3),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.query)].join(''):G__8989__$3);
if(cljs.core.truth_(self__.fragment)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8989__$4),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fragment)].join('');
} else {
return G__8989__$4;
}
});

lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4170__auto__,k__4171__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return this__4170__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4171__auto__,null);
});

lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4172__auto__,k8983,else__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
var G__8990 = k8983;
var G__8990__$1 = (((G__8990 instanceof cljs.core.Keyword))?G__8990.fqn:null);
switch (G__8990__$1) {
case "scheme":
return self__.scheme;

break;
case "user":
return self__.user;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8983,else__4173__auto__);

}
});

lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4184__auto__,writer__4185__auto__,opts__4186__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
var pr_pair__4187__auto__ = ((function (this__4184__auto____$1){
return (function (keyval__4188__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,cljs.core.pr_writer,""," ","",opts__4186__auto__,keyval__4188__auto__);
});})(this__4184__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,pr_pair__4187__auto__,"#lambdaisland.uri.URI{",", ","}",opts__4186__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
});

lambdaisland.uri.URI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8982){
var self__ = this;
var G__8982__$1 = this;
return (new cljs.core.RecordIter((0),G__8982__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

lambdaisland.uri.URI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
return self__.__meta;
});

lambdaisland.uri.URI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4165__auto__){
var self__ = this;
var this__4165__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
});

lambdaisland.uri.URI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4174__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

lambdaisland.uri.URI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4166__auto__){
var self__ = this;
var this__4166__auto____$1 = this;
var h__4028__auto__ = self__.__hash;
if(!((h__4028__auto__ == null))){
return h__4028__auto__;
} else {
var h__4028__auto____$1 = ((function (h__4028__auto__,this__4166__auto____$1){
return (function (coll__4167__auto__){
return (-701916260 ^ cljs.core.hash_unordered_coll.call(null,coll__4167__auto__));
});})(h__4028__auto__,this__4166__auto____$1))
.call(null,this__4166__auto____$1);
self__.__hash = h__4028__auto____$1;

return h__4028__auto____$1;
}
});

lambdaisland.uri.URI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8984,other8985){
var self__ = this;
var this8984__$1 = this;
return ((!((other8985 == null))) && ((this8984__$1.constructor === other8985.constructor)) && (cljs.core._EQ_.call(null,this8984__$1.scheme,other8985.scheme)) && (cljs.core._EQ_.call(null,this8984__$1.user,other8985.user)) && (cljs.core._EQ_.call(null,this8984__$1.password,other8985.password)) && (cljs.core._EQ_.call(null,this8984__$1.host,other8985.host)) && (cljs.core._EQ_.call(null,this8984__$1.port,other8985.port)) && (cljs.core._EQ_.call(null,this8984__$1.path,other8985.path)) && (cljs.core._EQ_.call(null,this8984__$1.query,other8985.query)) && (cljs.core._EQ_.call(null,this8984__$1.fragment,other8985.fragment)) && (cljs.core._EQ_.call(null,this8984__$1.__extmap,other8985.__extmap)));
});

lambdaisland.uri.URI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4179__auto__,k__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"fragment","fragment",826775688),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"scheme","scheme",90199613),null], null), null),k__4180__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4179__auto____$1),self__.__meta),k__4180__auto__);
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4180__auto__)),null));
}
});

lambdaisland.uri.URI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4177__auto__,k__4178__auto__,G__8982){
var self__ = this;
var this__4177__auto____$1 = this;
var pred__8991 = cljs.core.keyword_identical_QMARK_;
var expr__8992 = k__4178__auto__;
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613),expr__8992))){
return (new lambdaisland.uri.URI(G__8982,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,G__8982,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,G__8982,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,G__8982,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,G__8982,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,G__8982,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,G__8982,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8991.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688),expr__8992))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,G__8982,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4178__auto__,G__8982),null));
}
}
}
}
}
}
}
}
});

lambdaisland.uri.URI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4182__auto__){
var self__ = this;
var this__4182__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user","user",1532431356),self__.user,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"password","password",417022471),self__.password,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"host","host",-1558485167),self__.host,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"port","port",1534937262),self__.port,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"query","query",-1288509510),self__.query,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment,null))], null),self__.__extmap));
});

lambdaisland.uri.URI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4169__auto__,G__8982){
var self__ = this;
var this__4169__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,G__8982,self__.__extmap,self__.__hash));
});

lambdaisland.uri.URI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4175__auto__,entry__4176__auto__){
var self__ = this;
var this__4175__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4176__auto__)){
return this__4175__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4176__auto__,(0)),cljs.core._nth.call(null,entry__4176__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4175__auto____$1,entry__4176__auto__);
}
});

lambdaisland.uri.URI.prototype.call = (function (self__,kw){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,kw);
});

lambdaisland.uri.URI.prototype.apply = (function (self__,args8987){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8987)));
});

lambdaisland.uri.URI.prototype.cljs$core$IFn$_invoke$arity$1 = (function (kw){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,kw);
});

lambdaisland.uri.URI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",1730731140,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"fragment","fragment",-1827660081,null)], null);
});

lambdaisland.uri.URI.cljs$lang$type = true;

lambdaisland.uri.URI.cljs$lang$ctorPrSeq = (function (this__4206__auto__){
return (new cljs.core.List(null,"lambdaisland.uri/URI",null,(1),null));
});

lambdaisland.uri.URI.cljs$lang$ctorPrWriter = (function (this__4206__auto__,writer__4207__auto__){
return cljs.core._write.call(null,writer__4207__auto__,"lambdaisland.uri/URI");
});

/**
 * Positional factory function for lambdaisland.uri/URI.
 */
lambdaisland.uri.__GT_URI = (function lambdaisland$uri$__GT_URI(scheme,user,password,host,port,path,query,fragment){
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
});

/**
 * Factory function for lambdaisland.uri/URI, taking a map of keywords to field values.
 */
lambdaisland.uri.map__GT_URI = (function lambdaisland$uri$map__GT_URI(G__8986){
return (new lambdaisland.uri.URI(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__8986),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(G__8986),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__8986,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688))),null));
});

lambdaisland.uri.match_uri = (function lambdaisland$uri$match_uri(uri){
var matches = cljs.core.re_matches.call(null,lambdaisland.uri.uri_regex,uri);
var vec__8995 = matches;
var _ = cljs.core.nth.call(null,vec__8995,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8995,(1),null);
var scheme = cljs.core.nth.call(null,vec__8995,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__8995,(3),null);
var authority = cljs.core.nth.call(null,vec__8995,(4),null);
var path = cljs.core.nth.call(null,vec__8995,(5),null);
var ___$3 = cljs.core.nth.call(null,vec__8995,(6),null);
var query = cljs.core.nth.call(null,vec__8995,(7),null);
var ___$4 = cljs.core.nth.call(null,vec__8995,(8),null);
var fragment = cljs.core.nth.call(null,vec__8995,(9),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheme,authority,((cljs.core.seq.call(null,path))?path:null),query,fragment], null);
});
lambdaisland.uri.match_authority = (function lambdaisland$uri$match_authority(authority){
var matches = cljs.core.re_matches.call(null,lambdaisland.uri.authority_regex,authority);
var vec__8998 = matches;
var _ = cljs.core.nth.call(null,vec__8998,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8998,(1),null);
var user = cljs.core.nth.call(null,vec__8998,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__8998,(3),null);
var password = cljs.core.nth.call(null,vec__8998,(4),null);
var host = cljs.core.nth.call(null,vec__8998,(5),null);
var ___$3 = cljs.core.nth.call(null,vec__8998,(6),null);
var port = cljs.core.nth.call(null,vec__8998,(7),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,password,host,port], null);
});
/**
 * Parse a URI string into a lambadisland.uri.URI record.
 */
lambdaisland.uri.parse = (function lambdaisland$uri$parse(uri){
var vec__9001 = lambdaisland.uri.match_uri.call(null,uri);
var scheme = cljs.core.nth.call(null,vec__9001,(0),null);
var authority = cljs.core.nth.call(null,vec__9001,(1),null);
var path = cljs.core.nth.call(null,vec__9001,(2),null);
var query = cljs.core.nth.call(null,vec__9001,(3),null);
var fragment = cljs.core.nth.call(null,vec__9001,(4),null);
if(cljs.core.truth_(authority)){
var vec__9004 = lambdaisland.uri.match_authority.call(null,authority);
var user = cljs.core.nth.call(null,vec__9004,(0),null);
var password = cljs.core.nth.call(null,vec__9004,(1),null);
var host = cljs.core.nth.call(null,vec__9004,(2),null);
var port = cljs.core.nth.call(null,vec__9004,(3),null);
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
} else {
return (new lambdaisland.uri.URI(scheme,null,null,null,null,path,query,fragment,null,null,null));
}
});
/**
 * Turn the given value into a lambdaisland.uri.URI record, if it isn't one
 *   already. Supports String, java.net.URI, and other URI-like objects that return
 *   a valid URI string with `str`.
 */
lambdaisland.uri.uri = (function lambdaisland$uri$uri(uri_like){
if((uri_like instanceof lambdaisland.uri.URI)){
return uri_like;
} else {
return lambdaisland.uri.parse.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri_like)].join(''));
}
});
lambdaisland.uri.absolute_path_QMARK_ = (function lambdaisland$uri$absolute_path_QMARK_(path){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,path),"/");
});
/**
 * As per RFC 3986 section 5.2.4
 */
lambdaisland.uri.remove_dot_segments = (function lambdaisland$uri$remove_dot_segments(path){
if(cljs.core.truth_(path)){
var in$ = clojure.string.split.call(null,path,/(?=\/)/);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var G__9007 = cljs.core.first.call(null,in$);
if(cljs.core._EQ_.call(null,"/.",G__9007)){
if(cljs.core.next.call(null,in$)){
var G__9008 = cljs.core.next.call(null,in$);
var G__9009 = out;
in$ = G__9008;
out = G__9009;
continue;
} else {
var G__9010 = null;
var G__9011 = cljs.core.conj.call(null,out,"/");
in$ = G__9010;
out = G__9011;
continue;
}
} else {
if(cljs.core._EQ_.call(null,"/..",G__9007)){
if(cljs.core.next.call(null,in$)){
var G__9012 = cljs.core.next.call(null,in$);
var G__9013 = cljs.core.vec.call(null,cljs.core.butlast.call(null,out));
in$ = G__9012;
out = G__9013;
continue;
} else {
var G__9014 = null;
var G__9015 = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,out)),"/");
in$ = G__9014;
out = G__9015;
continue;
}
} else {
if(cljs.core._EQ_.call(null,null,G__9007)){
return clojure.string.join.call(null,out);
} else {
var G__9016 = cljs.core.next.call(null,in$);
var G__9017 = cljs.core.conj.call(null,out,cljs.core.first.call(null,in$));
in$ = G__9016;
out = G__9017;
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
lambdaisland.uri.merge_paths = (function lambdaisland$uri$merge_paths(a,b){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/",null], null), null),a))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find.call(null,/^.*\//,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
if(cljs.core.truth_(lambdaisland.uri.absolute_path_QMARK_.call(null,b))){
return b;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}
}
});
/**
 * Join two URI records as per RFC 3986. Handles relative URIs.
 */
lambdaisland.uri.join_STAR_ = (function lambdaisland$uri$join_STAR_(base,ref){
if(cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(ref))){
return cljs.core.update.call(null,ref,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.remove_dot_segments);
} else {
return cljs.core.assoc.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(ref))?cljs.core.assoc.call(null,ref,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ref)):(((new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref) == null))?cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.some.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,base], null))):cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.remove_dot_segments.call(null,(cljs.core.truth_(lambdaisland.uri.absolute_path_QMARK_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref)))?new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref):lambdaisland.uri.merge_paths.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref)))),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ref)))),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(ref));
}
});
/**
 * Joins any number of URIs as per RFC3986. Arguments can be strings, they will
 *   be coerced to URI records.
 */
lambdaisland.uri.join = (function lambdaisland$uri$join(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9019 = arguments.length;
var i__4498__auto___9020 = (0);
while(true){
if((i__4498__auto___9020 < len__4497__auto___9019)){
args__4500__auto__.push((arguments[i__4498__auto___9020]));

var G__9021 = (i__4498__auto___9020 + (1));
i__4498__auto___9020 = G__9021;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic = (function (uris){
return cljs.core.reduce.call(null,lambdaisland.uri.join_STAR_,cljs.core.map.call(null,lambdaisland.uri.uri,uris));
});

lambdaisland.uri.join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lambdaisland.uri.join.cljs$lang$applyTo = (function (seq9018){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9018));
});

lambdaisland.uri.decode_param_pair = (function lambdaisland$uri$decode_param_pair(param){
var vec__9022 = clojure.string.split.call(null,param,/=/);
var k = cljs.core.nth.call(null,vec__9022,(0),null);
var v = cljs.core.nth.call(null,vec__9022,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(k)?lambdaisland.uri.normalize.percent_decode.call(null,k):""),(cljs.core.truth_(v)?lambdaisland.uri.normalize.percent_decode.call(null,clojure.string.replace.call(null,v,/\+/," ")):"")], null);
});
/**
 * Parse a query string, consisting of key=value pairs, separated by "&". Takes
 *   the following options:
 * 
 *   - `:keywordize?` whether to turn return keys as keywords. Defaults to `true`.
 *   - `:multikeys` how to handle the same key occuring multiple times, defaults to
 *  `:duplicates`
 * 
 *   The possible values for `:multikeys` are
 * 
 *   - `:never` always return a single value for a key. The rightmost value
 *  "wins"
 *   - `:always` return a map with vectors as values, with successive
 *  values of the same key in order
 *   - `:duplicates` return a vector for keys that occur multiple times, or a
 *  string otherwise
 */
lambdaisland.uri.query_string__GT_map = (function lambdaisland$uri$query_string__GT_map(var_args){
var G__9026 = arguments.length;
switch (G__9026) {
case 1:
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1 = (function (q){
return lambdaisland.uri.query_string__GT_map.call(null,q,null);
});

lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (q,p__9027){
var map__9028 = p__9027;
var map__9028__$1 = ((((!((map__9028 == null)))?(((((map__9028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9028):map__9028);
var multikeys = cljs.core.get.call(null,map__9028__$1,new cljs.core.Keyword(null,"multikeys","multikeys",-695183366),new cljs.core.Keyword(null,"duplicates","duplicates",1265485699));
var keywordize_QMARK_ = cljs.core.get.call(null,map__9028__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),true);
if(!(clojure.string.blank_QMARK_.call(null,q))){
return cljs.core.reduce.call(null,((function (map__9028,map__9028__$1,multikeys,keywordize_QMARK_){
return (function (m,p__9030){
var vec__9031 = p__9030;
var k = cljs.core.nth.call(null,vec__9031,(0),null);
var v = cljs.core.nth.call(null,vec__9031,(1),null);
var k__$1 = (cljs.core.truth_(keywordize_QMARK_)?cljs.core.keyword.call(null,k):k);
var G__9034 = multikeys;
var G__9034__$1 = (((G__9034 instanceof cljs.core.Keyword))?G__9034.fqn:null);
switch (G__9034__$1) {
case "never":
return cljs.core.assoc.call(null,m,k__$1,v);

break;
case "always":
if(cljs.core.contains_QMARK_.call(null,m,k__$1)){
return cljs.core.update.call(null,m,k__$1,cljs.core.conj,v);
} else {
return cljs.core.assoc.call(null,m,k__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}

break;
case "duplicates":
if(cljs.core.contains_QMARK_.call(null,m,k__$1)){
if(cljs.core.vector_QMARK_.call(null,m.call(null,k__$1))){
return cljs.core.update.call(null,m,k__$1,cljs.core.conj,v);
} else {
return cljs.core.assoc.call(null,m,k__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,k__$1),v], null));
}
} else {
return cljs.core.assoc.call(null,m,k__$1,v);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9034__$1)].join('')));

}
});})(map__9028,map__9028__$1,multikeys,keywordize_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,lambdaisland.uri.decode_param_pair,clojure.string.split.call(null,q,/&/)));
} else {
return null;
}
});

lambdaisland.uri.query_string__GT_map.cljs$lang$maxFixedArity = 2;

/**
 * Return the query section of a URI as a map. Will coerce its argument
 *   with [[uri]]. Takes an options map, see [[query-string->map]] for options.
 */
lambdaisland.uri.query_map = (function lambdaisland$uri$query_map(var_args){
var G__9038 = arguments.length;
switch (G__9038) {
case 1:
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return lambdaisland.uri.query_map.call(null,uri,null);
});

lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2 = (function (u,opts){
return lambdaisland.uri.query_string__GT_map.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.uri.call(null,u)),opts);
});

lambdaisland.uri.query_map.cljs$lang$maxFixedArity = 2;

/**
 * Percent encoding for query strings. Will percent-encode values that are
 *   reserved in query strings only. Encodes spaces as +.
 */
lambdaisland.uri.query_encode = (function lambdaisland$uri$query_encode(s){
var encode_char = (function (p1__9040_SHARP_){
if(cljs.core._EQ_.call(null," ",p1__9040_SHARP_)){
return "+";
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/[^a-zA-Z0-9\-\._~@\\/]/,p1__9040_SHARP_))){
return lambdaisland.uri.normalize.percent_encode.call(null,p1__9040_SHARP_);
} else {
return p1__9040_SHARP_;

}
}
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,encode_char,lambdaisland.uri.normalize.char_seq.call(null,s)));
});
lambdaisland.uri.encode_param_pair = (function lambdaisland$uri$encode_param_pair(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.query_encode.call(null,((cljs.core.simple_ident_QMARK_.call(null,k))?cljs.core.name.call(null,k):((cljs.core.qualified_ident_QMARK_.call(null,k))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,k)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')
)))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.query_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
/**
 * Convert a map into a query string, consisting of key=value pairs separated by
 *   `&`. The result is percent-encoded so it is always safe to use. Keys can be
 *   strings or keywords. If values are collections then this results in multiple
 *   entries for the same key. `nil` values are ignored. Values are stringified.
 */
lambdaisland.uri.map__GT_query_string = (function lambdaisland$uri$map__GT_query_string(m){
if(cljs.core.seq.call(null,m)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"&",cljs.core.mapcat.call(null,(function (p__9041){
var vec__9042 = p__9041;
var k = cljs.core.nth.call(null,vec__9042,(0),null);
var v = cljs.core.nth.call(null,vec__9042,(1),null);
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.map.call(null,cljs.core.partial.call(null,lambdaisland.uri.encode_param_pair,k),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.uri.encode_param_pair.call(null,k,v)], null);

}
}
}),m)));
} else {
return null;
}
});
/**
 * Add additional query parameters to a URI. Takes a URI (or coercible to URI) and
 *   a map of query params.
 */
lambdaisland.uri.assoc_query_STAR_ = (function lambdaisland$uri$assoc_query_STAR_(u,m){
var u__$1 = lambdaisland.uri.uri.call(null,u);
return cljs.core.assoc.call(null,u__$1,new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.map__GT_query_string.call(null,cljs.core.merge.call(null,lambdaisland.uri.query_map.call(null,u__$1),m)));
});
/**
 * Add additional query parameters to a URI. Takes a URI (or coercible to URI)
 *   followed key value pairs.
 * 
 *   (assoc-query "http://example.com?id=1&name=John" :name "Jack" :style "goth")
 *   ;;=> #lambdaisland/uri "http://example.com?id=1&name=Jack&style=goth" 
 */
lambdaisland.uri.assoc_query = (function lambdaisland$uri$assoc_query(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9050 = arguments.length;
var i__4498__auto___9051 = (0);
while(true){
if((i__4498__auto___9051 < len__4497__auto___9050)){
args__4500__auto__.push((arguments[i__4498__auto___9051]));

var G__9052 = (i__4498__auto___9051 + (1));
i__4498__auto___9051 = G__9052;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return lambdaisland.uri.assoc_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

lambdaisland.uri.assoc_query.cljs$core$IFn$_invoke$arity$variadic = (function (u,p__9047){
var map__9048 = p__9047;
var map__9048__$1 = ((((!((map__9048 == null)))?(((((map__9048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9048):map__9048);
var kvs = map__9048__$1;
return lambdaisland.uri.assoc_query_STAR_.call(null,u,kvs);
});

lambdaisland.uri.assoc_query.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lambdaisland.uri.assoc_query.cljs$lang$applyTo = (function (seq9045){
var G__9046 = cljs.core.first.call(null,seq9045);
var seq9045__$1 = cljs.core.next.call(null,seq9045);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9046,seq9045__$1);
});

/**
 * Is the URI relative? Returns true if the URI does not have a scheme (protocol).
 */
lambdaisland.uri.relative_QMARK_ = (function lambdaisland$uri$relative_QMARK_(uri){
return (new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(uri) == null);
});
/**
 * Is the URI absolute? Returns true if the URI has a scheme (protocol), and hence also an origin.
 */
lambdaisland.uri.absolute_QMARK_ = cljs.core.complement.call(null,lambdaisland.uri.relative_QMARK_);
lambdaisland.uri.edn_tag = new cljs.core.Symbol("lambdaisland","uri","lambdaisland/uri",-75335492,null);
lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.edn_tag)].join('')," ",cljs.core.prn_str.call(null,this$__$1.toString()));
});
/**
 * A map that can be passed to clojure.edn/read, so tagged URI literals are
 *   read back correctly.
 */
lambdaisland.uri.edn_readers = cljs.core.PersistentArrayMap.createAsIfByAssoc([lambdaisland.uri.edn_tag,lambdaisland.uri.parse]);

//# sourceMappingURL=uri.js.map
