(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FhbL:function(l,n,a){"use strict";a.r(n);var t=a("CcnG"),u=function(){},e=a("t68o"),o=a("NcP4"),r=a("xYTU"),i=a("lzlj"),s=a("FVSy"),c=a("21Lb"),d=a("OzfB"),p=a("bujt"),f=a("UodH"),m=a("dWZg"),h=a("lLAP"),g=a("ZYCi"),b=a("Ip0R"),Y=a("Mr+X"),y=a("SMsm"),v=a("AytR"),O=a("t/Na"),P=v.a.baseApiUrl+"/posts",k=function(){function l(l){this.http=l}return l.prototype.getPosts=function(l){var n=new O.i;return Object.keys(l).map(function(a){l[a]&&n.set(a,l[a])}),this.http.get(""+P,{params:n})},l.prototype.getPost=function(l){return this.http.get(P+"/"+l)},l.prototype.savePost=function(l){return console.log("saving post:"+l),this.http.post(""+P,l)},l.prototype.updatePost=function(l,n){return console.log("updating post:"+n),this.http.put(P+"/"+l,n)},l.prototype.deletePost=function(l){return console.log("delete post by id:"+l),this.http.delete(P+"/"+l)},l.prototype.saveComment=function(l,n){return this.http.post(P+"/"+l+"/comments",n)},l.prototype.getCommentsOfPost=function(l){return this.http.get(P+"/"+l+"/comments")},l}(),C=function(){function l(l,n){this.router=l,this.postService=n,this.q=null}return l.prototype.search=function(){var l=this;this.sub=this.postService.getPosts({q:this.q}).subscribe(function(n){return l.posts=n},function(l){return console.log(l)})},l.prototype.searchByTerm=function(l){console.log("search by term:"+l),this.updateTerm(l),this.search()},l.prototype.updateTerm=function(l){console.log("update term:"+l),this.q=l},l.prototype.clearTerm=function(l){console.log("clear term:"+l),this.q=null},l.prototype.addPost=function(){this.router.navigate(["","post","new"])},l.prototype.ngOnInit=function(){console.log("calling ngOnInit::PostListComponent"),this.search()},l.prototype.ngOnDestroy=function(){console.log("calling ngOnDestroy::PostListComponent"),this.sub&&this.sub.unsubscribe()},l}(),x=t.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-flow:row wrap}.fab-bottom-right[_ngcontent-%COMP%]{position:fixed;z-index:10;right:16px;bottom:16px}"]],data:{}});function _(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,27,"mat-card",[["class","mat-card"],["fxFlex","35"],["style","margin:2px"]],null,null,null,i.d,i.a)),t.Oa(1,49152,null,0,s.a,[],null,null),t.Oa(2,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),(l()(),t.Pa(3,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],null,null,null,i.c,i.b)),t.Oa(4,49152,null,0,s.e,[],null,null),(l()(),t.Pa(5,0,null,1,3,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.Oa(6,16384,null,0,s.h,[],null,null),(l()(),t.Pa(7,0,null,null,1,"h1",[["class","mat-heading"]],null,null,null,null,null)),(l()(),t.fb(8,null,["",""])),(l()(),t.Pa(9,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.Oa(10,16384,null,0,s.g,[],null,null),(l()(),t.fb(11,null,[""," \u2022 ",""])),t.bb(12,2),(l()(),t.Pa(13,0,null,0,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t.Oa(14,16384,null,0,s.c,[],null,null),(l()(),t.fb(15,null,[" "," "])),(l()(),t.Pa(16,0,null,0,11,"mat-card-actions",[["align","start"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t.Oa(17,16384,null,0,s.b,[],{align:[0,"align"]},null),(l()(),t.Pa(18,0,null,null,4,"a",[["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==t.Ya(l,19)._haltDisabledEvents(a)&&u),"click"===n&&(u=!1!==t.Ya(l,20).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&u),u},p.c,p.a)),t.Oa(19,180224,null,0,f.a,[m.a,h.c,t.k],null,null),t.Oa(20,671744,null,0,g.m,[g.k,g.a,b.i],{routerLink:[0,"routerLink"]},null),t.Za(21,3),(l()(),t.fb(-1,0,[" Edytuj "])),(l()(),t.Pa(23,0,null,null,4,"a",[["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==t.Ya(l,24)._haltDisabledEvents(a)&&u),"click"===n&&(u=!1!==t.Ya(l,25).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&u),u},p.c,p.a)),t.Oa(24,180224,null,0,f.a,[m.a,h.c,t.k],null,null),t.Oa(25,671744,null,0,g.m,[g.k,g.a,b.i],{routerLink:[0,"routerLink"]},null),t.Za(26,3),(l()(),t.fb(-1,0,["Wyswietl"]))],function(l,n){l(n,2,0,"35"),l(n,17,0,"start"),l(n,20,0,l(n,21,0,"/post","edit",n.context.$implicit.id)),l(n,25,0,l(n,26,0,"/post","view",n.context.$implicit.id))},function(l,n){l(n,8,0,n.context.$implicit.title),l(n,11,0,null==n.context.$implicit.author?null:n.context.$implicit.author.username,t.gb(n,11,1,l(n,12,0,t.Ya(n.parent,0),n.context.$implicit.createdDate,"short"))),l(n,15,0,n.context.$implicit.content),l(n,16,0,"end"===t.Ya(n,17).align),l(n,18,0,t.Ya(n,19).disabled?-1:0,t.Ya(n,19).disabled||null,t.Ya(n,19).disabled.toString(),t.Ya(n,20).target,t.Ya(n,20).href),l(n,23,0,t.Ya(n,24).disabled?-1:0,t.Ya(n,24).disabled||null,t.Ya(n,24).disabled.toString(),t.Ya(n,25).target,t.Ya(n,25).href)})}function W(l){return t.hb(0,[t.ab(0,b.e,[t.s]),(l()(),t.Ga(16777216,null,null,1,null,_)),t.Oa(2,802816,null,0,b.k,[t.O,t.L,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Pa(3,0,null,null,4,"button",[["class","fab-bottom-right"],["color","warn"],["mat-fab",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,a){var t=!0;return"click"===n&&(t=!1!==l.component.addPost()&&t),t},p.d,p.b)),t.Oa(4,180224,null,0,f.b,[t.k,m.a,h.c],{color:[0,"color"]},null),(l()(),t.Pa(5,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,Y.b,Y.a)),t.Oa(6,638976,null,0,y.b,[t.k,y.d,[8,null]],null,null),(l()(),t.fb(-1,0,["add"]))],function(l,n){l(n,2,0,n.component.posts),l(n,4,0,"warn"),l(n,6,0)},function(l,n){l(n,3,0,t.Ya(n,4).disabled||null),l(n,5,0,t.Ya(n,6).inline)})}var w=t.La("app-post-list",C,function(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,1,"app-post-list",[],null,null,null,W,x)),t.Oa(1,245760,null,0,C,[g.k,k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),S=a("seP3"),q=a("gIcY"),F=a("dJrM"),L=a("Wf4p"),j=a("Fzqc"),I=a("b716"),D=a("/VYK"),z=function(){function l(l){this.postService=l,this.post={title:"",content:""},this.save=new t.m}return l.prototype.submit=function(){var l=this,n={title:this.post.title,content:this.post.content,status:"PUBLISHED"};this.post.id?this.postService.updatePost(this.post.id,n).subscribe(function(n){l.save.emit(!0)},function(n){l.save.emit(!1)}):this.postService.savePost(n).subscribe(function(n){l.save.emit(!0)},function(n){l.save.emit(!1)})},l.prototype.ngOnInit=function(){console.log("calling ngOnInit::PostFormComponent...")},l.prototype.ngOnDestroy=function(){console.log("calling ngOnDestroy::PostFormComponent..."),this.sub&&this.sub.unsubscribe()},l}(),M=t.Na({encapsulation:0,styles:[[""]],data:{}});function K(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,2,"mat-error",[["align","start"],["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.Oa(1,16384,[[4,4]],0,S.b,[],null,null),(l()(),t.fb(-1,null,[" Wymagany tytul posta "]))],null,function(l,n){l(n,0,0,t.Ya(n,1).id)})}function N(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,2,"mat-error",[["align","start"],["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.Oa(1,16384,[[11,4]],0,S.b,[],null,null),(l()(),t.fb(-1,null,[" To pole nie moze byc puste "]))],null,function(l,n){l(n,0,0,t.Ya(n,1).id)})}function V(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,2,"mat-error",[["align","start"],["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.Oa(1,16384,[[11,4]],0,S.b,[],null,null),(l()(),t.fb(-1,null,[" wymagane rzynajmniej 10 znakow "]))],null,function(l,n){l(n,0,0,t.Ya(n,1).id)})}function E(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,58,"form",[["class","form"],["id","form"],["name","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,a){var u=!0,e=l.component;return"submit"===n&&(u=!1!==t.Ya(l,2).onSubmit(a)&&u),"reset"===n&&(u=!1!==t.Ya(l,2).onReset()&&u),"ngSubmit"===n&&(u=!1!==e.submit()&&u),u},null,null)),t.Oa(1,16384,null,0,q.t,[],null,null),t.Oa(2,4210688,[["f",4]],0,q.o,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.cb(2048,null,q.c,null,[q.o]),t.Oa(4,16384,null,0,q.n,[[4,q.c]],null,null),(l()(),t.Pa(5,0,null,null,22,"p",[],null,null,null,null,null)),(l()(),t.Pa(6,0,null,null,21,"mat-form-field",[["class","mat-form-field"],["fxFlex",""],["style","border-style: outset;"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,F.b,F.a)),t.Oa(7,7389184,null,7,S.c,[t.k,t.h,[2,L.j],[2,j.b],[2,S.a],m.a],null,null),t.db(335544320,1,{_control:0}),t.db(335544320,2,{_placeholderChild:0}),t.db(335544320,3,{_labelChild:0}),t.db(603979776,4,{_errorChildren:1}),t.db(603979776,5,{_hintChildren:1}),t.db(603979776,6,{_prefixChildren:1}),t.db(603979776,7,{_suffixChildren:1}),t.Oa(15,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),(l()(),t.Pa(16,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["id","title"],["matInput",""],["name","title"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var u=!0,e=l.component;return"input"===n&&(u=!1!==t.Ya(l,17)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==t.Ya(l,17).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.Ya(l,17)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.Ya(l,17)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==t.Ya(l,24)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==t.Ya(l,24)._focusChanged(!0)&&u),"input"===n&&(u=!1!==t.Ya(l,24)._onInput()&&u),"ngModelChange"===n&&(u=!1!==(e.post.title=a)&&u),u},null,null)),t.Oa(17,16384,null,0,q.d,[t.C,t.k,[2,q.a]],null,null),t.Oa(18,16384,null,0,q.r,[],{required:[0,"required"]},null),t.cb(1024,null,q.j,function(l){return[l]},[q.r]),t.cb(1024,null,q.k,function(l){return[l]},[q.d]),t.Oa(21,671744,[["title",4]],0,q.p,[[2,q.c],[6,q.j],[8,null],[6,q.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.cb(2048,null,q.l,null,[q.p]),t.Oa(23,16384,null,0,q.m,[[4,q.l]],null,null),t.Oa(24,999424,null,0,I.a,[t.k,m.a,[6,q.l],[2,q.o],[2,q.f],L.d,[8,null],D.a,t.x],{id:[0,"id"],required:[1,"required"]},null),t.cb(2048,[[1,4]],S.d,null,[I.a]),(l()(),t.Ga(16777216,null,5,1,null,K)),t.Oa(27,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Pa(28,0,null,null,26,"p",[],null,null,null,null,null)),(l()(),t.Pa(29,0,null,null,25,"mat-form-field",[["class","mat-form-field"],["fxFlex",""],["style","border-style: outset;"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,F.b,F.a)),t.Oa(30,7389184,null,7,S.c,[t.k,t.h,[2,L.j],[2,j.b],[2,S.a],m.a],null,null),t.db(335544320,8,{_control:0}),t.db(335544320,9,{_placeholderChild:0}),t.db(335544320,10,{_labelChild:0}),t.db(603979776,11,{_errorChildren:1}),t.db(603979776,12,{_hintChildren:1}),t.db(603979776,13,{_prefixChildren:1}),t.db(603979776,14,{_suffixChildren:1}),t.Oa(38,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),(l()(),t.Pa(39,0,null,1,11,"textarea",[["class","mat-input-element mat-form-field-autofill-control"],["id","content"],["matInput",""],["minlength","10"],["name","content"],["required",""],["rows","8"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var u=!0,e=l.component;return"input"===n&&(u=!1!==t.Ya(l,40)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==t.Ya(l,40).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.Ya(l,40)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.Ya(l,40)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==t.Ya(l,48)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==t.Ya(l,48)._focusChanged(!0)&&u),"input"===n&&(u=!1!==t.Ya(l,48)._onInput()&&u),"ngModelChange"===n&&(u=!1!==(e.post.content=a)&&u),u},null,null)),t.Oa(40,16384,null,0,q.d,[t.C,t.k,[2,q.a]],null,null),t.Oa(41,16384,null,0,q.r,[],{required:[0,"required"]},null),t.Oa(42,540672,null,0,q.i,[],{minlength:[0,"minlength"]},null),t.cb(1024,null,q.j,function(l,n){return[l,n]},[q.r,q.i]),t.cb(1024,null,q.k,function(l){return[l]},[q.d]),t.Oa(45,671744,[["content",4]],0,q.p,[[2,q.c],[6,q.j],[8,null],[6,q.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.cb(2048,null,q.l,null,[q.p]),t.Oa(47,16384,null,0,q.m,[[4,q.l]],null,null),t.Oa(48,999424,null,0,I.a,[t.k,m.a,[6,q.l],[2,q.o],[2,q.f],L.d,[8,null],D.a,t.x],{id:[0,"id"],required:[1,"required"]},null),t.cb(2048,[[8,4]],S.d,null,[I.a]),(l()(),t.fb(-1,null,["          "])),(l()(),t.Ga(16777216,null,5,1,null,N)),t.Oa(52,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ga(16777216,null,5,1,null,V)),t.Oa(54,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Pa(55,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.Pa(56,0,null,null,2,"button",[["color","primary"],["mat-button",""],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0]],null,null,p.d,p.b)),t.Oa(57,180224,null,0,f.b,[t.k,m.a,h.c],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.fb(58,0,[" ",""]))],function(l,n){var a=n.component;l(n,15,0,""),l(n,18,0,""),l(n,21,0,"title",a.post.title),l(n,24,0,"title",""),l(n,27,0,t.Ya(n,21).hasError("required")),l(n,38,0,""),l(n,41,0,""),l(n,42,0,"10"),l(n,45,0,"content",a.post.content),l(n,48,0,"content",""),l(n,52,0,t.Ya(n,45).hasError("required")),l(n,54,0,t.Ya(n,45).hasError("minlength")),l(n,57,0,t.Ya(n,2).invalid||t.Ya(n,2).pending,"primary")},function(l,n){l(n,0,0,t.Ya(n,4).ngClassUntouched,t.Ya(n,4).ngClassTouched,t.Ya(n,4).ngClassPristine,t.Ya(n,4).ngClassDirty,t.Ya(n,4).ngClassValid,t.Ya(n,4).ngClassInvalid,t.Ya(n,4).ngClassPending),l(n,6,1,["standard"==t.Ya(n,7).appearance,"fill"==t.Ya(n,7).appearance,"outline"==t.Ya(n,7).appearance,"legacy"==t.Ya(n,7).appearance,t.Ya(n,7)._control.errorState,t.Ya(n,7)._canLabelFloat,t.Ya(n,7)._shouldLabelFloat(),t.Ya(n,7)._hideControlPlaceholder(),t.Ya(n,7)._control.disabled,t.Ya(n,7)._control.autofilled,t.Ya(n,7)._control.focused,"accent"==t.Ya(n,7).color,"warn"==t.Ya(n,7).color,t.Ya(n,7)._shouldForward("untouched"),t.Ya(n,7)._shouldForward("touched"),t.Ya(n,7)._shouldForward("pristine"),t.Ya(n,7)._shouldForward("dirty"),t.Ya(n,7)._shouldForward("valid"),t.Ya(n,7)._shouldForward("invalid"),t.Ya(n,7)._shouldForward("pending")]),l(n,16,1,[t.Ya(n,18).required?"":null,t.Ya(n,23).ngClassUntouched,t.Ya(n,23).ngClassTouched,t.Ya(n,23).ngClassPristine,t.Ya(n,23).ngClassDirty,t.Ya(n,23).ngClassValid,t.Ya(n,23).ngClassInvalid,t.Ya(n,23).ngClassPending,t.Ya(n,24)._isServer,t.Ya(n,24).id,t.Ya(n,24).placeholder,t.Ya(n,24).disabled,t.Ya(n,24).required,t.Ya(n,24).readonly,t.Ya(n,24)._ariaDescribedby||null,t.Ya(n,24).errorState,t.Ya(n,24).required.toString()]),l(n,29,1,["standard"==t.Ya(n,30).appearance,"fill"==t.Ya(n,30).appearance,"outline"==t.Ya(n,30).appearance,"legacy"==t.Ya(n,30).appearance,t.Ya(n,30)._control.errorState,t.Ya(n,30)._canLabelFloat,t.Ya(n,30)._shouldLabelFloat(),t.Ya(n,30)._hideControlPlaceholder(),t.Ya(n,30)._control.disabled,t.Ya(n,30)._control.autofilled,t.Ya(n,30)._control.focused,"accent"==t.Ya(n,30).color,"warn"==t.Ya(n,30).color,t.Ya(n,30)._shouldForward("untouched"),t.Ya(n,30)._shouldForward("touched"),t.Ya(n,30)._shouldForward("pristine"),t.Ya(n,30)._shouldForward("dirty"),t.Ya(n,30)._shouldForward("valid"),t.Ya(n,30)._shouldForward("invalid"),t.Ya(n,30)._shouldForward("pending")]),l(n,39,1,[t.Ya(n,41).required?"":null,t.Ya(n,42).minlength?t.Ya(n,42).minlength:null,t.Ya(n,47).ngClassUntouched,t.Ya(n,47).ngClassTouched,t.Ya(n,47).ngClassPristine,t.Ya(n,47).ngClassDirty,t.Ya(n,47).ngClassValid,t.Ya(n,47).ngClassInvalid,t.Ya(n,47).ngClassPending,t.Ya(n,48)._isServer,t.Ya(n,48).id,t.Ya(n,48).placeholder,t.Ya(n,48).disabled,t.Ya(n,48).required,t.Ya(n,48).readonly,t.Ya(n,48)._ariaDescribedby||null,t.Ya(n,48).errorState,t.Ya(n,48).required.toString()]),l(n,56,0,t.Ya(n,57).disabled||null),l(n,58,0,"save")})}var T=function(){function l(l){this.router=l,this.post={title:"",content:""}}return l.prototype.onPostSaved=function(l){l&&this.router.navigate(["","post"])},l.prototype.ngOnInit=function(){},l.prototype.ngOnDestroy=function(){},l}(),U=t.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1 auto}"]],data:{}});function G(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,24,"mat-card",[["class","mat-card"],["fxFlex",""]],null,null,null,i.d,i.a)),t.Oa(1,49152,null,0,s.a,[],null,null),t.Oa(2,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),(l()(),t.Pa(3,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],null,null,null,i.c,i.b)),t.Oa(4,49152,null,0,s.e,[],null,null),(l()(),t.Pa(5,0,null,1,3,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.Oa(6,16384,null,0,s.h,[],null,null),(l()(),t.Pa(7,0,null,null,1,"h1",[["class","mat-heading"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["Dodaj ogloszenie"])),(l()(),t.Pa(9,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.Oa(10,16384,null,0,s.g,[],null,null),(l()(),t.Pa(11,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["Nie zapomnij o danych kontaktowych"])),(l()(),t.Pa(13,0,null,0,4,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t.Oa(14,16384,null,0,s.c,[],null,null),(l()(),t.Pa(15,0,null,null,2,"app-post-form",[["fxFlex",""]],null,[[null,"save"]],function(l,n,a){var t=!0;return"save"===n&&(t=!1!==l.component.onPostSaved(a)&&t),t},E,M)),t.Oa(16,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),t.Oa(17,245760,null,0,z,[k],{post:[0,"post"]},{save:"save"}),(l()(),t.Pa(18,0,null,1,6,"mat-card-footer",[["class","mat-card-footer"]],null,null,null,null,null)),t.Oa(19,16384,null,0,s.d,[],null,null),(l()(),t.fb(-1,null,[" Przejdz do "])),(l()(),t.Pa(21,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==t.Ya(l,22).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&u),u},null,null)),t.Oa(22,671744,null,0,g.m,[g.k,g.a,b.i],{routerLink:[0,"routerLink"]},null),t.Za(23,3),(l()(),t.fb(-1,null,["ogloszen"]))],function(l,n){var a=n.component;l(n,2,0,""),l(n,16,0,""),l(n,17,0,a.post),l(n,22,0,l(n,23,0,"","post","list"))},function(l,n){l(n,21,0,t.Ya(n,22).target,t.Ya(n,22).href)})}var Z=t.La("app-new-post",T,function(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,1,"app-new-post",[],null,null,null,G,U)),t.Oa(1,245760,null,0,T,[g.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),A=function(){function l(l,n){this.router=l,this.route=n,this.post={title:"",content:""}}return l.prototype.onPostUpdated=function(l){l&&this.router.navigate(["","post","list"])},l.prototype.ngOnInit=function(){this.post=this.route.snapshot.data.post},l.prototype.ngOnDestroy=function(){},l}(),$=t.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1 auto}"]],data:{}});function J(l){return t.hb(0,[t.ab(0,b.e,[t.s]),(l()(),t.Pa(1,0,null,null,27,"mat-card",[["class","mat-card"],["fxFlex",""]],null,null,null,i.d,i.a)),t.Oa(2,49152,null,0,s.a,[],null,null),t.Oa(3,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),(l()(),t.Pa(4,0,null,0,13,"mat-card-header",[["class","mat-card-header"]],null,null,null,i.c,i.b)),t.Oa(5,49152,null,0,s.e,[],null,null),(l()(),t.Pa(6,0,null,1,3,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.Oa(7,16384,null,0,s.h,[],null,null),(l()(),t.Pa(8,0,null,null,1,"h1",[["class","mat-heading"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["Edycja"])),(l()(),t.Pa(10,0,null,1,7,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.Oa(11,16384,null,0,s.g,[],null,null),(l()(),t.Pa(12,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.fb(13,null,["created at: ",""])),t.bb(14,2),(l()(),t.Pa(15,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.Pa(16,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["Pamietaj o danych kontaktowych."])),(l()(),t.Pa(18,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t.Oa(19,16384,null,0,s.c,[],null,null),(l()(),t.Pa(20,0,null,null,1,"app-post-form",[["xFlex",""]],null,[[null,"save"]],function(l,n,a){var t=!0;return"save"===n&&(t=!1!==l.component.onPostUpdated(a)&&t),t},E,M)),t.Oa(21,245760,null,0,z,[k],{post:[0,"post"]},{save:"save"}),(l()(),t.Pa(22,0,null,1,6,"mat-card-footer",[["class","mat-card-footer"]],null,null,null,null,null)),t.Oa(23,16384,null,0,s.d,[],null,null),(l()(),t.fb(-1,null,[" Przejdz do "])),(l()(),t.Pa(25,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==t.Ya(l,26).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&u),u},null,null)),t.Oa(26,671744,null,0,g.m,[g.k,g.a,b.i],{routerLink:[0,"routerLink"]},null),t.Za(27,3),(l()(),t.fb(-1,null,["ogloszen"]))],function(l,n){var a=n.component;l(n,3,0,""),l(n,21,0,a.post),l(n,26,0,l(n,27,0,"","post","list"))},function(l,n){var a=n.component;l(n,13,0,t.gb(n,13,0,l(n,14,0,t.Ya(n,0),a.post.createdDate,"short"))),l(n,25,0,t.Ya(n,26).target,t.Ya(n,26).href)})}var B=t.La("app-edit-post",A,function(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,1,"app-edit-post",[],null,null,null,J,$)),t.Oa(1,245760,null,0,A,[g.k,g.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=function(){function l(l,n){this._postService=l,this._router=n}return l.prototype.ngOnInit=function(){},l.prototype.deletePost=function(l){var n=this;this.sub=this._postService.deletePost(l).subscribe(function(l){n._router.navigate(["","post","list"])},function(l){console.log(l)})},l.prototype.ngOnChanges=function(l){for(var n in l&&l.post&&l.post.currentValue&&(this.post=Object.assign({},l.post.currentValue)),l){var a=l[n],t=JSON.stringify(a.currentValue),u=JSON.stringify(a.previousValue);console.log(n+": currentValue = "+t+", previousValue = "+u)}},l.prototype.ngOnDestroy=function(){console.log("calling ngOnDestroy::PostListComponent"),this.sub&&this.sub.unsubscribe()},l}(),H=t.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1 auto}"]],data:{}});function X(l){return t.hb(0,[t.ab(0,b.e,[t.s]),(l()(),t.Pa(1,0,null,null,28,"mat-card",[["class","mat-card"],["fxFlex",""]],null,null,null,i.d,i.a)),t.Oa(2,49152,null,0,s.a,[],null,null),t.Oa(3,737280,null,0,c.a,[d.g,t.k,[3,c.d],d.k,[2,d.a]],{flex:[0,"flex"]},null),(l()(),t.Pa(4,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],null,null,null,i.c,i.b)),t.Oa(5,49152,null,0,s.e,[],null,null),(l()(),t.Pa(6,0,null,1,3,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.Oa(7,16384,null,0,s.h,[],null,null),(l()(),t.Pa(8,0,null,null,1,"h1",[["class","mat-display-1"]],null,null,null,null,null)),(l()(),t.fb(9,null,["",""])),(l()(),t.Pa(10,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.Oa(11,16384,null,0,s.g,[],null,null),(l()(),t.fb(12,null,[" \u2022 "," "])),t.bb(13,2),(l()(),t.Pa(14,0,null,0,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t.Oa(15,16384,null,0,s.c,[],null,null),(l()(),t.fb(16,null,[" "," "])),(l()(),t.Pa(17,0,null,0,5,"mat-card-actions",[["align","end"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t.Oa(18,16384,null,0,s.b,[],{align:[0,"align"]},null),(l()(),t.Pa(19,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.Pa(20,0,null,null,2,"a",[["class","mat-button-lg"],["color","primary"],["mat-raised-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0]],[[null,"click"]],function(l,n,a){var u=!0,e=l.component;return"click"===n&&(u=!1!==t.Ya(l,21)._haltDisabledEvents(a)&&u),"click"===n&&(u=!1!==e.deletePost(e.post.id)&&u),u},p.c,p.a)),t.Oa(21,180224,null,0,f.a,[m.a,h.c,t.k],{color:[0,"color"]},null),(l()(),t.fb(-1,0,["DELETE"])),(l()(),t.Pa(23,0,null,1,6,"mat-card-footer",[["class","mat-card-footer"]],null,null,null,null,null)),t.Oa(24,16384,null,0,s.d,[],null,null),(l()(),t.fb(-1,null,[" Przejdz do "])),(l()(),t.Pa(26,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==t.Ya(l,27).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&u),u},null,null)),t.Oa(27,671744,null,0,g.m,[g.k,g.a,b.i],{routerLink:[0,"routerLink"]},null),t.Za(28,3),(l()(),t.fb(-1,null,["ogloszen"]))],function(l,n){l(n,3,0,""),l(n,18,0,"end"),l(n,21,0,"primary"),l(n,27,0,l(n,28,0,"","post","list"))},function(l,n){var a=n.component;l(n,9,0,a.post.title),l(n,12,0,t.gb(n,12,0,l(n,13,0,t.Ya(n,0),a.post.createdDate,"short"))),l(n,16,0,a.post.content),l(n,17,0,"end"===t.Ya(n,18).align),l(n,20,0,t.Ya(n,21).disabled?-1:0,t.Ya(n,21).disabled||null,t.Ya(n,21).disabled.toString()),l(n,26,0,t.Ya(n,27).target,t.Ya(n,27).href)})}var Q=a("VNr4"),ll=a("psW0"),nl=function(){function l(l,n,a){this.postService=l,this.router=n,this.route=a,this.post={title:"",content:""},this.comments=[]}return l.prototype.ngOnInit=function(){var l=this;console.log("calling ngOnInit::PostDetailsComponent... "),this.sub=this.route.params.pipe(Object(ll.a)(function(n){return l.slug=n.slug,Object(Q.a)(l.postService.getPost(l.slug),l.postService.getCommentsOfPost(l.slug))})).subscribe(function(n){console.log(n),l.post=n[0],l.comments=n[1],console.log(l.post),console.log(l.comments)})},l.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},l}(),al=t.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1 auto;flex-direction:column}"]],data:{}});function tl(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,1,"app-post-details-panel",[],null,null,null,X,H)),t.Oa(1,770048,null,0,R,[k,g.k],{post:[0,"post"]},null)],function(l,n){l(n,1,0,n.component.post)},null)}var ul=t.La("app-post-details",nl,function(l){return t.hb(0,[(l()(),t.Pa(0,0,null,null,1,"app-post-details",[],null,null,null,tl,al)),t.Oa(1,245760,null,0,nl,[k,g.k,g.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),el=a("eDkP"),ol=a("o3x0"),rl=a("ZYjt"),il=a("M2Lx"),sl=a("vARd"),cl=a("vGXY"),dl=a("uGex"),pl=function(){function l(l){this.postService=l}return l.prototype.resolve=function(l){return this.postService.getPost(l.paramMap.get("slug"))},l}(),fl=a("4c35"),ml=a("qAlS"),hl=a("LC5p"),gl=a("0/Q6"),bl=a("mVsa"),Yl=a("v9Dh"),yl=a("kWGw"),vl=a("de3e"),Ol=a("8mMr"),Pl=a("Nsh5"),kl=a("La40"),Cl=a("r43C"),xl=a("hUWP"),_l=a("V9q+"),Wl=a("PCNd"),wl=a("vToU"),Sl=function(){};a.d(n,"PostModuleNgFactory",function(){return ql});var ql=t.Ma(u,[],function(l){return t.Va([t.Wa(512,t.j,t.Ba,[[8,[e.a,o.a,r.a,r.b,w,Z,B,ul]],[3,t.j],t.v]),t.Wa(4608,b.n,b.m,[t.s,[2,b.w]]),t.Wa(4608,q.u,q.u,[]),t.Wa(4608,q.e,q.e,[]),t.Wa(4608,el.a,el.a,[el.g,el.c,t.j,el.f,el.d,t.p,t.x,b.d,j.b]),t.Wa(5120,ol.b,ol.c,[el.a]),t.Wa(4608,ol.d,ol.d,[el.a,t.p,[2,b.h],[2,ol.a],ol.b,[3,ol.d],el.c]),t.Wa(5120,y.d,y.a,[[3,y.d],[2,O.c],rl.c,[2,b.d]]),t.Wa(4608,il.a,il.a,[]),t.Wa(4608,rl.f,L.e,[[2,L.i],[2,L.n]]),t.Wa(4608,L.d,L.d,[]),t.Wa(4608,sl.c,sl.c,[el.a,h.e,t.p,cl.a,[3,sl.c],sl.b]),t.Wa(5120,dl.a,dl.b,[el.a]),t.Wa(4608,d.i,d.h,[d.d,d.f]),t.Wa(5120,t.b,function(l,n){return[d.l(l,n)]},[b.d,t.z]),t.Wa(4608,k,k,[O.c]),t.Wa(4608,pl,pl,[k]),t.Wa(1073742336,b.c,b.c,[]),t.Wa(1073742336,q.s,q.s,[]),t.Wa(1073742336,q.g,q.g,[]),t.Wa(1073742336,q.q,q.q,[]),t.Wa(1073742336,j.a,j.a,[]),t.Wa(1073742336,L.n,L.n,[[2,L.f]]),t.Wa(1073742336,m.b,m.b,[]),t.Wa(1073742336,L.x,L.x,[]),t.Wa(1073742336,f.c,f.c,[]),t.Wa(1073742336,s.f,s.f,[]),t.Wa(1073742336,fl.g,fl.g,[]),t.Wa(1073742336,ml.b,ml.b,[]),t.Wa(1073742336,el.e,el.e,[]),t.Wa(1073742336,ol.f,ol.f,[]),t.Wa(1073742336,y.c,y.c,[]),t.Wa(1073742336,L.o,L.o,[]),t.Wa(1073742336,L.v,L.v,[]),t.Wa(1073742336,hl.a,hl.a,[]),t.Wa(1073742336,gl.d,gl.d,[]),t.Wa(1073742336,bl.a,bl.a,[]),t.Wa(1073742336,Yl.a,Yl.a,[]),t.Wa(1073742336,il.b,il.b,[]),t.Wa(1073742336,yl.a,yl.a,[]),t.Wa(1073742336,D.c,D.c,[]),t.Wa(1073742336,S.e,S.e,[]),t.Wa(1073742336,I.b,I.b,[]),t.Wa(1073742336,vl.a,vl.a,[]),t.Wa(1073742336,Ol.b,Ol.b,[]),t.Wa(1073742336,sl.e,sl.e,[]),t.Wa(1073742336,Pl.h,Pl.h,[]),t.Wa(1073742336,kl.a,kl.a,[]),t.Wa(1073742336,L.t,L.t,[]),t.Wa(1073742336,dl.c,dl.c,[]),t.Wa(1073742336,Cl.a,Cl.a,[]),t.Wa(1073742336,d.e,d.e,[]),t.Wa(1073742336,c.b,c.b,[]),t.Wa(1073742336,xl.a,xl.a,[]),t.Wa(1073742336,_l.a,_l.a,[[2,d.j],t.z]),t.Wa(1073742336,Wl.a,Wl.a,[]),t.Wa(1073742336,g.n,g.n,[[2,g.s],[2,g.k]]),t.Wa(1073742336,Sl,Sl,[]),t.Wa(1073742336,u,u,[]),t.Wa(1024,g.i,function(){return[[{path:"",redirectTo:"list"},{path:"list",component:C},{path:"new",component:T,canActivate:[wl.a]},{path:"edit/:slug",component:A,canActivate:[wl.a],resolve:{post:pl}},{path:"view/:slug",component:nl}]]},[])])})}}]);