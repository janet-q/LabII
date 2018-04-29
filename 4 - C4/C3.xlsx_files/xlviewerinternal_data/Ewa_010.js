/*! Version=16.0.9321.5050 */
Type.registerNamespace("BasicChat");BasicChat.j=function(){};BasicChat.j.registerInterface("BasicChat.j");BasicChat.l=function(){};BasicChat.l.registerInterface("BasicChat.l");BasicChat.d=function(){};BasicChat.d.prototype={implicitOAuth:1,password:2,token:3,anonymous:4};BasicChat.d.registerEnum("BasicChat.d",!1);BasicChat.C=function(){};BasicChat.C.registerInterface("BasicChat.C");BasicChat.k=function(){};BasicChat.k.registerInterface("BasicChat.k");BasicChat.a=function(n,t,i,r){this.g=Function.createDelegate(this,this.j);this.b=new Common.J;this.d=t;this.e=i;this.h=n;this.f=r};BasicChat.a.prototype={d:null,e:null,h:null,c:null,f:null,i:function(n){this.b.n("ACEK",n)},a:function(n){if(n&&BasicChat.a.a){if(this.c){var t=this;this.f.a(new Common.L(0,1,0,function(){n(t.b,t.c)}))}return this.i(n),BasicChat.a.a}return BasicChat.a.a=this.d(),BasicChat.a.a||(BasicChat.a.a=this.e()),BasicChat.a.a.i(this.g),n&&this.i(n),BasicChat.a.a},j:function(n,t){this.c=t;this.b.m("ACEK",t,null)}};BasicChat.c=function(n,t){this.v=Function.createDelegate(this,this.D);this.u=Function.createDelegate(this,this.A);this.q=new Common.J;this.y=new($$sc.A.$$(Boolean));this.x=n;this.s=t;this.t(0)};BasicChat.c.a=function(n,t,i){return n.c("SkypeExperience",0)===3?new BasicChat.c(t,i):null};BasicChat.c.prototype={x:null,s:null,l:null,n:null,p:0,w:0,o:null,m:null,f:function(){return $$sc.a.a(String,Common.a.l)},j:function(){return this.p},t:function(n){return this.p!==n&&(this.p=n,this.q.m("cam",new Common.App.BasicChat.d(this.p),null)),n},a:function(){return!!this.l&&this.l.b()},z:function(n){return this.l?this.l.b()!==n&&(this.l.c(n),this.q.m("PSCH",new Common.App.BasicChat.i(n?1:0),null)):n&&Diag.a.a(8782405,333,15,"Trying to set visible while flexpane is null"),n},i:function(n){this.q.n("cam",n)},c:function(n){this.q.n("PSCH",n)},d:function(n){this.q.n("unreadConvEventKey",n)},b:function(){return this.C(),this.t(2),this.q.m("cam",new Common.App.BasicChat.d(2),null),this.y.b(!0),this.y.a},h:function(){(this.z(!0),this.a())||this.z(!0)},C:function(){this.l||(this.l=this.x.a("Mock Chat Pane",null,null,2277126358),this.B())},B:function(){var t=document.createElement("div"),n;t.innerText="Notification types: unreadmessage | chat | contactrequest | audio\n\n";t.innerText+="Type in the mock notif type:\n";this.l.a().appendChild(t);this.n=document.createElement("input");this.n.setAttribute("type","text");this.n.setAttribute("data-lpignore","true");this.n.style.width="100px";this.n.style.display="block";this.l.a().appendChild(this.n);n=document.createElement("div");n.innerText="\n";this.l.a().appendChild(n);this.o=document.createElement("button");this.o.id="chatNotif";this.o.innerText="Send Chat Notification";this.l.a().appendChild(this.o);$addHandler(this.o,"mousedown",this.u);this.l.a().appendChild(n);this.m=document.createElement("input");this.m.id="hideThenChatNotif";this.m.type="button";this.m.value="Dismiss then Send Chat Notif";this.l.a().appendChild(this.m);$addHandler(this.m,"mousedown",this.v)},D:function(n){this.g();var t=this;window.setTimeout(function(){t.A(null)},0);n.stopPropagation()},A:function(n){n.stopPropagation();var i=BasicChat.i.a(this.n.value),t,r=this,u=this,f=this,e=this,o=this,s=this,c=this,h=(t=new Common.App.BasicChat.h,t.a=i,t.g=null,t.j="mock name",t.n=null,t.m="mock title",t.i="mock description",t.f=function(){r.h();r.r("notification accepted")},t.c=function(n){u.h();u.r("notification accepted with "+n)},t.k=function(){f.h();f.r("notification opened")},t.h=function(){e.r("notification declined")},t.b=function(){o.r("notification sound played")},t.e=function(){s.r("notification sound stopped")},t.l=function(){},t.d=i===1?0:2,t);this.s.a(this,h)},g:function(){this.z(!1)},k:function(n,t){this.r(String.format("Trying to join conversation {0}",n));n==="mockChatThread"&&t()},e:function(n){n?(this.w=this.p,this.t(3),this.g()):this.p===3&&this.t(this.w)},r:function(n){if(!this.l||!this.l.a()){alert(String.format("Mock Chat Client: {0}",n));return}var t=document.createElement("div");t.innerText=n+"\n";this.l.a().appendChild(t)},dispose:function(){this.l&&(this.g(),$removeHandler(this.o,"mousedown",this.u),$removeHandler(this.m,"mousedown",this.v),this.l=null);this.s&&(this.s.dispose(),this.s=null)}};BasicChat.p=function(){};BasicChat.p.a=function(){Common.App.a.a().a(new BasicChat.p,0,!1)};BasicChat.p.prototype={d:null,e:null,a:function(){return"Common.App.BasicChat"},b:function(){var n=Common.W.a().i.a,t=this;n.CW(function(){Common.a.b.e(function(){t.f()})})},f:function(){this.e=this.d.a(BasicChat.b);this.e.i().c();this.e.h().c();var t=this.d.a(Common.App.BasicChat.c).a(),n=this;t.CW(function(){var i=t.a(),r;i.a?(n.d.a(Common.App.BasicChat.b),r=n.d.a(BasicChat.j),r.a()):i.b&&n.d.a(Common.App.BasicChat.b)})},c:function(n){var f,o,s,t,r,u,i,h,e;this.d=n;f=this;this.d.b(BasicChat.n).a().c(BasicChat.l).c(Common.App.BasicChat.c).b(function(){return new BasicChat.n(Common.a.b,f.d.c(Common.App.O365Shell.b))});o=this;this.d.b(BasicChat.b).a().b(function(){return new BasicChat.b(Common.a.a().c())});s=this;this.d.b(BasicChat.q.a).c(Common.dn).a().b(function(){return new BasicChat.q.a(new($$sc.v.$$(Common.eZ))(function(){return Common.p.a()}),new($$sc.v.$$(Common.eY))(function(){return Common.a.a().h()}),new($$sc.v.$$(Common.K))(function(){return Common.K.a()}),new($$sc.v.$$(Common.k))(function(){return Common.k.a()}),new($$sc.v.$$(Common.dL))(function(){return Common.a.a()}))});this.d.b(BasicChat.h).a();t=this;this.d.b(BasicChat.e).a().b(function(){return new BasicChat.e(Common.a.a().a(),Common.a.b,t.d.a(Common.dn),t.d.a(BasicChat.h),t.d.a(BasicChat.l),t.d.a(BasicChat.b),t.d.a(Common.App.BasicChat.e))});r=this;this.d.b(BasicChat.c).a().b(function(){return BasicChat.c.a(Common.a.b,r.d.a(Common.dn),r.d.a(Common.App.BasicChat.e))});u=this;this.d.b(Common.App.BasicChat.b).a().b(function(){return new BasicChat.a(Common.a.b,function(){return u.d.a(BasicChat.c)},function(){return u.d.a(BasicChat.e)},Common.C.a())});i=this;this.d.b(BasicChat.j).a().b(function(){return new BasicChat.o(Common.a.c(),i.d.a(Common.App.BasicChat.b),Common.Utils.b.a(Common.cn,i.d.c(Common.cn)),i.d.a(BasicChat.b),Common.a.eN)});h=this;this.d.b(BasicChat.k).a().b(function(){return new BasicChat.f.a(Common.h.a())});e=this;this.d.b(Common.App.BasicChat.e).a().b(function(){return new BasicChat.i(function(){return Common.a.a().j().parentNode},e.d.a(BasicChat.k))})}};BasicChat.o=function(n,t,i,r,u){this.q=Function.createDelegate(this,this.B);this.p=Function.createDelegate(this,this.z);this.r=Function.createDelegate(this,this.E);this.l=Function.createDelegate(this,this.A);this.k=Function.createDelegate(this,this.s);this.f=n;this.m=t;this.h=i;this.i=r;this.n=u};BasicChat.o.prototype={f:null,b:null,m:null,h:null,c:null,i:null,n:null,g:!1,j:0,e:null,d:null,a:function(){this.C();this.x();var n=this;this.n(function(){n.dispose()})},y:function(n){if(n){var t=this;this.h.CW(function(){t.v()})}},v:function(){this.c=this.h.a();this.c.b&&this.s(null,null);this.c.e(this.k);this.c.f(this.l)},s:function(){this.F(this.c.c)&&this.b.e(!1)},A:function(){this.e=null;this.d=null;this.b.e(!0)},F:function(n){return n?(this.e=this.t(n,Common.m.d),this.d=this.t(n,Common.m.i),this.i.i()&&this.i.i().a(),!!this.e||!!this.d):!1},t:function(n,t){var i=null;if(t){try{i=n.b(t,Common.m.o)}catch(r){Diag.a.a(18465952,333,10,"Couldn't find the button. Basic Chat will be disabled, message: {0} Callstack: {1}.",r.message,r.stack)}i&&(n.g(t),i.style.display="",this.o(i,this.j))}return i},C:function(){this.f.a(2277126358,2147483648,this.r)},x:function(){this.b=this.m.a(null);this.b.c(this.p);var n=this.b.b(),t=this;n.CW(function(){t.y(n.a())});this.b.d(this.q)},z:function(){this.u(this.e);this.u(this.d)},B:function(n,t){var i=t.a;i!==this.j&&(this.o(this.e,i),this.o(this.d,i),this.j=i)},E:function(n,t,i){return this.g?32:i!==2?32:(this.b.a()?this.w():this.D(),32)},D:function(){this.b.h()},w:function(){this.b.g()},u:function(n){var r,t,i;if(n){if(r=n.querySelector("img"),!r)return;i="";r.getAttribute("class")&&(t=r.getAttribute("class").toString(),t.indexOf("WACSkypeButtonBlack_20x20x32")>0?i=t.replace("WACSkypeButtonBlack_20x20x32","WACSkypeButtonWhite_20x20x32"):t.indexOf("WACSkypeButtonWhite_20x20x32")>0?i=t.replace("WACSkypeButtonWhite_20x20x32","WACSkypeButtonBlack_20x20x32"):t.indexOf("WACSkypeBusinessButtonBlack_20x20x32")>0?i=t.replace("WACSkypeBusinessButtonBlack_20x20x32","WACSkypeBusinessButtonWhite_20x20x32"):t.indexOf("WACSkypeBusinessButtonWhite_20x20x32")>0&&(i=t.replace("WACSkypeBusinessButtonWhite_20x20x32","WACSkypeBusinessButtonBlack_20x20x32")),i.length&&r.setAttribute("class",i),Sys.UI.DomElement.containsCssClass(n,"activated")?Sys.UI.DomElement.removeCssClass(n,"activated"):Sys.UI.DomElement.addCssClass(n,"activated"))}},o:function(n,t){var i,u,r;n&&(t+=0,i=n.querySelector(".SkypeUnreadConversationsBubble"),i&&(t<=0?(i.style.display="none",i.innerText=""):(u=t>99,r=t.toString(),u?(r="99+",Sys.UI.DomElement.containsCssClass(i,"SkypeUCBWide")||Sys.UI.DomElement.addCssClass(i,"SkypeUCBWide")):Sys.UI.DomElement.containsCssClass(i,"SkypeUCBWide")&&Sys.UI.DomElement.removeCssClass(i,"SkypeUCBWide"),i.innerText=r,i.style.display="")))},dispose:function(){this.g||(this.c&&(this.c.i(this.k),this.c.j(this.l),this.c=null),this.b&&(this.b.dispose(),this.b=null),this.e=null,this.d=null,this.f=null,this.g=!0)}};BasicChat.b=function(n){this.a=n};BasicChat.b.prototype={a:null,c:null,d:null,e:null,f:null,b:function(){return this.c||(this.c=this.a.b("WebServiceCall","SkypeBasicChatClientAuth"))},g:function(){return this.d||(this.d=this.a.b("LoadResource","SkypeBasicChatClientLoad"))},h:function(){return this.e||(this.e=this.a.b("CommandTask","SkypeBasicChatTimeToChattable"))},i:function(){return this.f||(this.f=this.a.b("CommandTask","SkypeUserExperienceLoad"))}};BasicChat.B=function(n){this.f=n;this.i=!this.f.a("HeaderInsideRibbonIsEnabled");this.h=this.f.a("BasicChatIsEnabled");this.e=this.f.c("SkypeExperience",0)};BasicChat.B.prototype={g:null,i:!1,e:0,f:null,h:!1,d:null,a:function(){return this.s(),this.g.a},r:function(){return this.i&&this.p()},s:function(){if(!this.g){this.g=new($$sc.A.$$(Common.App.BasicChat.f));this.t();var n=this;this.d.a.CW(function(){var t=n.d.a.a(),i=!t&&n.r();n.g.b(new Common.App.BasicChat.f(t,i))})}},t:function(){if(!this.d){if(this.d=new($$sc.A.$$(Boolean)),!this.i||!this.h){this.d.b(!1);return}this.o()}},b:function(){return this.e}};BasicChat.q=function(n,t,i,r,u,f,e,o,s){this.h=n;this.g=t;this.p=i;this.q=r;this.i=u;this.j=u.j().parentNode;this.f=u.j();this.m=e;this.l=o;this.o=s;this.k=Common.g.b(27,0);this.r(f)};BasicChat.q.prototype={e:null,h:null,g:null,p:null,q:null,i:null,j:null,f:null,m:null,l:null,o:0,n:!1,k:null,b:function(){return this.n},c:function(n){return n===this.n?n:(this.u(n),this.n=n,n)},d:null,a:function(){return this.d},r:function(n){if(!this.d){var t=!!Common.a.a()&&Common.a.a().a().d();this.d=document.createElement("div");this.d.id="FlexPane";this.d.className="FlexPane"+(t?" FlexBoxLayout":"");this.d.style.display="none";this.d.setAttribute("tabindex",0);Common.v.a(this.d,"role","region");Common.v.a(this.d,"aria-label",n);t?this.f.parentNode.appendChild(this.d):this.j.insertBefore(this.d,this.f);this.s()}},u:function(n){n?(this.d.style.display="block",Sys.UI.DomElement.addCssClass(this.f,"FlexPaneUp"),this.g.a("FlexPane"),this.h.d("FlexPane",!0)):(this.d.style.display="none",Sys.UI.DomElement.removeCssClass(this.f,"FlexPaneUp"),this.g.d("FlexPane"),this.h.i("FlexPane",!0));this.i.N();Common.a.a()&&Common.a.a().a().a()&&this.t()},t:function(){if(window.document.dispatchEvent){var n=null;window.document.createEvent&&(n=window.document.createEvent("UIEvents"),n.initUIEvent("resize",!0,!0,Common.f.D(window.document),0));n&&window.document.dispatchEvent(n)}},s:function(){var n,t;this.e||(this.e=this.h.a("FlexPane"),this.e.d="main",n=this,this.e.q(function(){Common.p.b(n.d);n.m&&n.m()}),this.l&&(t=this,this.e.n(function(){t.l()})),this.e.b(this.k,this.o),this.p.g("FlexPane",this.d,!1,!0),this.q.g("FlexPane",this.d,!1,!0),this.g.c("FlexPane",!0))},dispose:function(){this.j.removeChild(this.d);this.d=null;this.i=null;this.e.a(this.k)}};BasicChat.q.a=function(n,t,i,r,u){this.d=n;this.c=t;this.e=i;this.f=r;this.b=u};BasicChat.q.a.prototype={b:null,d:null,c:null,e:null,f:null,a:function(n,t,i,r){return new BasicChat.q(this.d.a(),this.c.a(),this.e.a(),this.f.a(),this.b.a(),n,t,i,r)}};BasicChat.g=function(n){this.a=n;this.c=this.a.me;this.b=this.a.activity};BasicChat.g.a=function(n,t){try{return t.val=new BasicChat.g(n),!0}catch(i){return Diag.a.a(8757716,333,10,"SkypeApi initialization error. Message: {0}, Callstack: {1}",i.message,i.stack),t.val=null,!1}};BasicChat.g.prototype={c:null,b:null,a:null,d:function(){return this.c||Diag.a.a(17105566,333,10,"Skype Native Contact ME is null."),this.c},g:function(){return this.b||Diag.a.a(17105567,333,10,"Skype Native Contact activity is null"),this.b},h:function(){try{return this.a.getVersion()}catch(n){return Diag.a.a(8947681,333,10,"Skype GetVersion error. Message: {0}, Callstack: {1}",n.message,n.stack),""}},i:function(){try{return this.a.isAvailable()}catch(n){return Diag.a.a(17440901,333,10,"Skype IsAvailable error. Message: {0}, Callstack: {1}",n.message,n.stack),!1}},k:function(n){try{this.a.renderContent(n)}catch(t){Diag.a.a(8757717,333,10,"Skype render content error. Message: {0}, Callstack {1}",t.message,t.stack)}},j:function(n,t,i){try{Diag.a.a(9209431,333,50,"Joining Conversation");var u=this;this.a.joinConversation(n,["Chat"],t,function(n){Diag.a.a(9209432,333,10,"JoinConversation Failed. Error: {0}",n);i()})}catch(r){Diag.a.a(8913495,333,10,"Skype join request error. Message: {0}, Callstack: {1}",r.message,r.stack);i()}},l:function(n){try{this.a.renderSidebar(n)}catch(t){Diag.a.a(8757718,333,10,"Skype render sidebar error. Message: {0}, Callstack: {1}",t.message,t.stack)}},e:function(n,t,i){try{this.a.setAuthProvider(n,t,i)}catch(r){Diag.a.a(8757719,333,10,"Skype SetAuthProvider error. Message: {0}, Callstack: {1}",r.message,r.stack)}},m:function(n){try{this.a.setNotificationHandler(n)}catch(t){Diag.a.a(8979149,333,10,"Skype SetNotificationHandler error. Message: {0}, Callstack: {1}",t.message,t.stack)}},f:function(n){try{this.a.setFocus(n)}catch(t){Diag.a.a(16799060,333,10,"Skype SetFocus error. Message: {0}, Callstack: {1}",t.message,t.stack)}}};BasicChat.e=function(n,t,i,r,u,f,e){this.F=Function.createDelegate(this,this.Y);this.G=Function.createDelegate(this,this.Z);this.D=Function.createDelegate(this,this.V);this.E=Function.createDelegate(this,this.W);this.v=new($$sc.A.$$(Boolean));this.C=new($$sc.A.$$(String));this.x=n;this.s=t;this.B=r;this.q=new Common.J;this.z=i;this.r=u;this.p=f;this.u=e;this.m=0};BasicChat.e.a=function(n){var t;switch(n){case 2:case 4:case 3:t=2;break;default:t=1}return t};BasicChat.e.prototype={m:0,y:0,l:null,q:null,B:null,z:null,o:null,A:!1,r:null,t:null,p:null,u:null,w:!1,x:null,s:null,f:function(){return this.C.a},a:function(){return!!this.o&&this.o.b()},J:function(n){return this.o?this.o.b()!==n&&(this.o.c(n),this.q.m("PSCH",new Common.App.BasicChat.i(n?1:0),null)):n&&Diag.a.a(8728835,333,10,"Trying to set visible while flexpane is null"),n},c:function(n){this.q.n("PSCH",n)},d:function(n){this.q.n("unreadConvEventKey",n)},h:function(){if(!this.l){Diag.a.a(8696157,333,10,"SkypeApi is null so will not render content.");return}this.R();this.J(!0)},R:function(){if(!this.o){var t=this,i=this;this.o=this.z.a($a.bn,function(){t.l.f(!0)},function(){i.l.f(!1)},2277126358);Diag.a.a(8696156,333,50,"Setting Chat pane to visible and attempting to create the divs.");this.O();try{this.l.k("#SkypePaneContent");this.l.l("#SkypePaneTimeline")}catch(n){Diag.a.a(8728836,333,10,"Failure to render the skype api. Message: {0}, Callstack: {1}",n.message,n.stack)}}},g:function(){this.J(!1)},b:function(){var n,r,u,t,i;if(this.A)return this.v.a;this.A=!0;this.t=this.r.a().a();n=this.r.b();n===1&&(Diag.a.a(8757720,333,50,"Starting skype experience for Consumers users."),r=this,window.setTimeout(function(){Diag.a.a(18655443,333,50,"Starting skype experience for Consumer users with longer sessions.")},15e3));n===2&&(Diag.a.a(8757721,333,50,"Starting skype experience for Enterprise users."),u=this,window.setTimeout(function(){Diag.a.a(18655444,333,50,"Starting skype experience for Enterprise users with longer sessions.")},15e3));var f=this.s.d.SkypeBootstrapUrl.toString(),e=this.s.d.SkypeApiKey.toString(),o=this.M(n);return this.p.g().c(),t=this.B.k(f,e,!1,o),i=this,t.CW(function(){i.X(t.a())}),this.v.a},M:function(n){var t=Common.R.a(this.s.c("Lcid",1033)),i=t?t.a:null,r=this.N(),u=this.s.d.SessionId;return new BasicChat.u(n,i,r,u)},N:function(){var n;switch(this.x.b()){case 3:n="Word";break;case 4:n="OneNote";break;case 1:n="Excel";break;case 2:n="PowerPoint";break;default:n="UnknownWAC"}switch(this.x.i()){case 1:n+=" Edit";break;case 2:n+=" View"}return n},X:function(n){if(n){if(this.p.g()&&this.p.g().a(),this.l=n,Diag.a.a(8696158,333,50,"The Skype api version we are using is: {0}.",this.l.h()),!this.l.i()){Diag.a.a(17440902,333,50,"The Skype api is not available for this browser.");this.n(1,!1);this.v.b(!0);return}this.t.a?this.L():this.t.b&&this.n(4,!1);this.ba();this.v.b(!0)}else Diag.a.a(8947682,333,10,"Skype client unavailable. Failed to initialize SWX api."),this.n(0,!1),this.v.b(!1)},L:function(){this.n(1,!1);this.bd();this.bc();try{Diag.a.a(8947683,333,50,"Calling Skype Api auth provider for implicit auth.");this.p.b().c();this.l.e(new BasicChat.m(BasicChat.d.toString(1),null,null,null,null,null),this.E,this.D)}catch(n){Diag.a.a(8947712,333,10,"Error setting auth provider {0}. Callstack: {1}.",n.message,n.stack)}},bc:function(){var n=this;this.l.d().authenticated.subscribe(function(t){t?(n.n(2,!1),Diag.a.a(8947713,333,50,"Authenticated and setting signed in.")):(n.n(1,!1),Diag.a.a(8947714,333,10,"Skype authentication error, authentication failed or disconnected from SWX."))})},bd:function(){var n=this;this.l.d().uri.subscribe(function(t){if(!t){Diag.a.a(8947715,333,10,"Skype client lost the user URI!");return}Diag.a.a(8947716,333,50,"Successfully got an user identifier from Skype client.");n.C.b(t)})},W:function(){this.n(2,!1);Diag.a.a(8947717,333,50,"Authentication is successful.");this.H()},V:function(n){this.n(1,!1);this.S(n)},S:function(n){this.r.c()?Common.c.m()?Diag.a.a(17126927,333,10,"Skype authentication failing for Internet Explorer. Error: {0}",n):Diag.a.a(8947718,333,10,"Skype authentication failing. Error: {0}",n):Diag.a.a(16831619,333,15,"MSIT user failed to authenticate with Skype. Error: {0}",n)},K:function(n,t,i,r,u){if(!r){Diag.a.a(17846555,333,10,"Cannot attempt to sign in anonymously with conversation discovery uri being null or empty.");return}if(!u){Diag.a.a(17846556,333,10,"Cannot attempt to sign in  anonymously with conversation uri being null or empty.");return}n||Diag.a.a(17846557,333,15,"Attempting to sign in  anonymously without a user friendly name...");this.bb();this.p.b().c();Diag.a.a(18200788,333,50,"Start anonymous sign in.");this.w=!0;var f=this,e=this;this.l.e(new BasicChat.m(BasicChat.d.toString(4),null,null,null,null,new BasicChat.r(n,u,r,!0)),function(){f.w=!1;f.U();t()},function(n){e.w=!1;e.T(n);i()})},bb:function(){var n=this;this.l.d().authenticated.subscribe(function(t){t?(n.n(5,!1),Diag.a.a(18121751,333,50,"Successfully authenticated as ANONYMOUS and setting state to AnonymousChatConnected.")):(n.n(4,!1),Diag.a.a(18121752,333,10,"Skype authentication error, ANONYMOUS authentication failed or got disconnected."))})},U:function(){this.n(5,!1);Diag.a.a(17846558,333,50,"Skype anonymous authentication was successful.");this.H()},T:function(n){this.n(4,!1);Diag.a.a(17846559,333,10,"Skype anonymous authentication failed. Error: {0}",n)},i:function(n){this.q.n("availEventKey",n)},j:function(){return this.m},n:function(n,t){t||this.m!==3?this.m!==n&&(this.m=n,this.q.m("availEventKey",new Common.App.BasicChat.d(this.m),null),Diag.a.a(17052561,333,50,"client state {0}",n)):this.y=n},k:function(n,t,i,r,u){if(!n){Diag.a.a(16832196,333,50,"Not performing join operation as convUri is null");i();return}if(this.m===2||this.m===5)this.I(n,t,i);else if(this.m===4){if(!this.w){var f=this;this.K(r,function(){f.I(n,t,i)},i,u,n)}}else Diag.a.a(18900673,333,50,"Cannot perform join operation when client is not signed in!"),i()},I:function(n,t,i){this.r.b()===1?Diag.a.a(18699104,333,50,"Joining Conversation for Consumer"):Diag.a.a(18699105,333,50,"Joining Conversation for Business");var r=this.r.b()===1?String.format("19:{0}",n):n;this.l.j(r,t,i)},e:function(n){n?(this.y=this.m,this.n(3,!0),this.g()):this.m===3&&this.n(this.y,!0)},O:function(){if(!this.o.a()){Diag.a.a(8696159,333,10,"Failed to get chatpane Element so not creating content and timeline divs.");return}var n=document.createElement("div");Sys.UI.DomElement.addCssClass(n,"ChatPane");Sys.UI.DomElement.addCssClass(n,"skypeWX");Sys.UI.DomElement.addCssClass(n,"Selectable");!this.t.a&&this.t.b&&Sys.UI.DomElement.addCssClass(n,"DocChatOnly");this.o.a().appendChild(n);this.P(n);this.Q(n)},ba:function(){this.l.g().unreadConversations.subscribe(this.G);this.l.m(this.F)},Z:function(n){this.m!==3&&this.q.m("unreadConvEventKey",new Common.App.BasicChat.j(n),null)},Y:function(n){if(this.m!==3){var i=BasicChat.i.a(n.type),t,r=this,u=this,f=this,o=this,s=this,h=this,c=this,e=(t=new Common.App.BasicChat.h,t.a=i,t.g=n.sender.avatar(),t.j=n.sender.displayName(),t.n=n.sender.status(),t.m=n.title(),t.i=n.description(),t.f=function(){r.h();n.accept()},t.c=function(t){u.h();n.accept(t)},t.k=function(){f.h();n.open()},t.h=function(){n.decline()},t.b=function(){n.sound.play()},t.e=function(){n.sound.stop()},t.l=function(t){n.active.subscribe(t)},t.d=BasicChat.e.a(i,this.r.b()),t);this.u.a(this,e)}},P:function(n){var t=document.createElement("div");return t.className="ChatContent",t.id="SkypePaneContent",n.appendChild(t),t},Q:function(n){var t=document.createElement("div");return t.id="SkypePaneTimeline",t.className="ChatTimeline",n.appendChild(t),t},H:function(){this.p.b()&&this.p.b().a();this.p.h()&&this.p.h().a()},dispose:function(){this.g();this.u&&(this.u.dispose(),this.u=null);this.l=null;this.o=null}};BasicChat.h=function(){this.i=Function.createDelegate(this,this.g);this.j=Function.createDelegate(this,this.m);this.h=Function.createDelegate(this,this.l);this.a=new($$sc.A.$$(BasicChat.g))};BasicChat.h.a=function(n,t){var i=n?Common.bv.a(n,null,null,null,!1,!1):null;i&&i.e(t);try{Common.O.a(i)}catch(r){Diag.a.a(8757722,333,10,"Failure downloading the skype api bootstrapper: Message: {0}, Callstack: {1}",r.message,r.stack)}Diag.a.a(8254435,333,100,"Downloading SWX bootstrapper from: {0}",n)};BasicChat.h.prototype={b:null,c:null,f:null,e:!1,d:!1,k:function(n,t,i,r){var u=n;if(!u)return Diag.a.a(19726497,333,10,"Cannot initialize Skype. Invalid setting for Skypebootstrap url."),this.a.b(null),this.a.a;this.c=t;this.f=r.b;this.e=i;this.b=new BasicChat.t;this.b.userAppId=r.e;this.b.hostProperty=r.d;this.b.userId=r.f;this.b.sessionId=r.c;this.b.experienceId=Common.App.BasicChat.g.toString(r.a);this.d=r.a===2;try{BasicChat.h.a(u,this.h)}catch(f){Diag.a.a(8245794,333,10,"Exception loading the api Message: {0} Callstack: {1}.",f.message,f.stack)}return this.a.a},l:function(n,t){if(t.a){Diag.a.a(8210202,333,50,"Calling the Skype initialized method.");try{Skype.initialize(new BasicChat.s(this.c,this.f,this.e,this.b,this.d),this.j,this.i)}catch(i){Diag.a.a(8245795,333,10,"Exception in initializing the Skype SWX api Message: {0} Callstack: {1}.",i.message,i.stack);this.a.b(null)}}else Diag.a.a(8210203,333,10,"Failed to download the SkypBootstrapper."),this.a.b(null)},m:function(n){if(!n){this.g("This is not real success. Null native api object.");this.a.b(null);return}var t,i,r;if(!(r=BasicChat.g.a(n,i={val:t}),t=i.val,r)){this.g("This is not real success. Invalid native api object.");this.a.b(null);return}Diag.a.a(8245825,333,50,"Initializing succeeded and about to create the api instance.");this.a.b(t)},g:function(n){Diag.a.a(8210207,333,10,"Skype Api error: {0}",n);this.a.b(null)}};BasicChat.u=function(n,t,i,r){this.a=n;this.b=t;this.d=i;this.c=r};BasicChat.u.prototype={a:0,b:null,d:null,f:null,c:null,e:null};BasicChat.n=function(n,t){this.q=Function.createDelegate(this,this.w);BasicChat.n.initializeBase(this,[n]);this.n=t;this.j=!0;this.k=new($$sc.v.$$(Boolean))(this.q)};BasicChat.n.prototype={n:null,l:null,m:null,k:null,j:!1,p:function(){if(!this.k.a())return!1;var n=this.f.a("DocChatIsEnabled"),t=!this.h&&n;return t&&(this.e===2||this.e===3)},o:function(){this.u()},u:function(){if(!this.k.a()){this.d.b(!1);return}if(this.e===2){var n=this;this.n.a(function(t){n.l=t;t.a().CW(function(){n.v()})})}else this.e===1||this.e===3?this.d.b(!0):this.d.b(!1)},c:function(){return this.j},v:function(){var u,n,t,f,e,o,i,r;if(this.m=this.l.a(),this.m.b===4||!(this.m.b>3)){Diag.a.a(17949148,333,15,"Shell info task was canceled or was not completed");this.d.b(!1);return}u=this.l.a().a();n=!1;try{(e=Common.bs.a(Object,u.ClientData.toString(),f={val:t}),t=f.val,e)&&(o=this.f.a("BasicChatIsForced"),o?(n=!0,this.j=!1):(i=t.IsTenantDirSyncEnabled,r=t.HasSkypeLicense,n=!i&&r,Diag.a.a(17949149,333,50,"Suite UX Skype check resulted in Enabled:{0}, from: Tenant Hybrid:{1}; License:{2}",n,i,r)))}catch(s){Diag.a.a(17949150,333,15,"object format is incorrect. Error {0}",s.message)}this.d.b(n)},w:function(){return Common.c.e()?!1:Common.c.p()&&!Common.c.h()?!1:Common.c.k()&&!Common.c.j()&&!Common.c.A(8)?!1:Common.c.ba()?!1:!0}};BasicChat.r=function(n,t,i,r){this.displayName=n;this.conferenceUri=t;this.discoverUri=i;this.discoveryUri=i;this.useInternalAnonFlow=r};BasicChat.r.prototype={displayName:null,conferenceUri:null,discoverUri:null,discoveryUri:null,useInternalAnonFlow:!1};BasicChat.m=function(n,t,i,r,u,f){this.type=n;this.username=t;this.password=i;this.token=r;this.product=u;this.options=f};BasicChat.m.prototype={type:null,username:null,password:null,token:null,product:null,options:null};BasicChat.D=function(){};BasicChat.D.prototype={id:null,execute:function(){}};BasicChat.E=function(){};BasicChat.E.prototype={senderUri:null,message:null,time:null,description:null};BasicChat.s=function(n,t,i,r,u){this.apiKey=n;this.locale=t;this.correlationIds=r;this.jsonp=i;this.business=u};BasicChat.s.prototype={correlationIds:null,apiKey:null,locale:null,jsonp:!1,business:!1};BasicChat.t=function(){};BasicChat.t.prototype={hostProperty:null,userId:null,sessionId:null,userAppId:null,experienceId:null};BasicChat.f=function(n,t){this.o=Function.createDelegate(this,this.x);BasicChat.f.initializeBase(this);this.i=n;this.k=new Common.J;this.w();this.h=!1;this.t(t)};BasicChat.f.b=function(n){switch(n.a){case 2:return n.f;case 1:case 4:return n.k;case 3:return function(){n.c("Audio")};default:return Function.emptyFunction}};BasicChat.f.d=function(n){switch(n.a){case 3:return function(){n.c("Chat")};default:return null}};BasicChat.f.c=function(n){switch(n){case 2:return 25e3;case 1:case 4:return 7e3;case 3:return 6e4;default:return 7e3}};BasicChat.f.prototype={f:null,a:function(){return this.f},n:null,j:null,m:null,g:null,h:!1,l:null,k:null,i:null,q:!1,p:!1,w:function(){this.f=document.createElement("div");this.v();this.u();Sys.UI.DomElement.addCssClass(this.f,"SkypeToastDiv")},v:function(){var n=this.e(this.f,"div");this.n=new BasicChat.z(n)},u:function(){var n=this.e(this.f,"div");this.j=new BasicChat.v(n,this.i)},t:function(n){var i,t,r;this.g=n;Diag.a.a(17114639,333,100,"Building toast type: <{0}>.",this.g.a);i=0;this.n.g(n.g,i);this.m=this.r(BasicChat.f.b(n));t=BasicChat.f.d(n);this.j.i(n.j,n.m,n.i,n.a,this.r(n.h),t?this.r(t):null);n.b&&n.b();this.y(n.a);r=this;this.g.l(function(n){n||(Diag.a.a(17114640,333,100,"Notification inactive triggered..."),r.c())});this.i.a("click",this.f,this.o)},y:function(n){this.s();var t=this;this.l=new Common.L(2,1,BasicChat.f.c(n),function(){t.h=!1;Diag.a.a(17114641,333,100,"Auto-hide toast task executing...");t.c()},73);Common.C.a().a(this.l);this.h=!0},s:function(){this.h&&(Common.C.a().b(this.l),this.h=!1)},c:function(){this.p||(Diag.a.a(17114642,333,100,"Dismissing toast type: <{0}>.",this.g.a),this.p=!0,this.s(),this.g.e&&this.g.e(),this.k.m("toastDismissedEventKey",null,null))},d:function(){return this.g.a===3},b:function(n){this.k.n("toastDismissedEventKey",n)},x:function(){return this.m&&this.m(),!0},r:function(n){var t=this;return function(){n&&n();Diag.a.a(17114643,333,100,"Toast action taken...");t.c()}},dispose:function(){this.q||(this.q=!0,this.i.b("click",this.f,this.o),this.j.dispose(),this.j=null,this.n=null,this.f=null)}};BasicChat.f.a=function(n){this.b=n};BasicChat.f.a.prototype={b:null,a:function(n){return new BasicChat.f(this.b,n)}};BasicChat.F=function(){};BasicChat.F.prototype={e:function(n,t){var i=document.createElement(t);return n.appendChild(i),i}};BasicChat.i=function(n,t){this.g=Function.createDelegate(this,this.o);this.h=Function.createDelegate(this,this.p);BasicChat.i.initializeBase(this);this.d=n;this.c=new($$sc.v.$$(Object))(this.h);this.f=t};BasicChat.i.a=function(n){switch(n.toLowerCase()){case"unreadmessage":return 1;case"chat":return 2;case"audio":return 3;case"contactrequest":return 4;default:return 0}};BasicChat.i.prototype={c:null,b:null,d:null,f:null,i:!1,p:function(){var t=this.d(),n=this.e(t,"div");return Sys.UI.DomElement.addCssClass(n,"SkypeToastManagerContainer"),n},a:function(n,t){var i=n,r;(Diag.a.b(17114644,333,!!i,null),this.m(i,t))&&(this.q(i,t)?(r=this.f.a(t),r.b(this.g),this.l(r)):!0&&t.b&&t.b())},l:function(n){this.j();this.k(!0);this.c.a().appendChild(n.a());this.b=n},j:function(){this.b&&(Diag.a.a(17114645,333,100,"About to show new toast over existing one..."),this.b.c())},m:function(n,t){return this.i?!1:n.j()===3?!1:t.a?this.n()?(Diag.a.a(17114646,333,100,"Ignoring new [{0}] notification while last A/V toast is still up...",t.a),!1):!0:!1},q:function(n,t){var i;switch(t.d){case 0:i=!1;break;case 1:i=!n.a();break;case 2:i=!0;break;default:i=!1}return Diag.a.a(17118549,333,100,"{0}toast for notification level {1}. Chat Pane was visible: {2}.",i?"SHOW ":"SKIP ",t.d,n.a()),i},n:function(){return!!this.b&&this.b.d()},k:function(n){this.c.a().style.display=n?"block":"none"},o:function(){this.b&&(this.c.a().removeChild(this.b.a()),this.b.dispose(),this.b=null);this.k(!1)},dispose:function(){this.j()}};BasicChat.v=function(n,t){BasicChat.v.initializeBase(this);this.b=n;Sys.UI.DomElement.addCssClass(this.b,"SkypeNotificationArea");this.d=t;this.h()};BasicChat.v.prototype={b:null,c:null,f:null,g:null,a:null,d:null,h:function(){var n,t,i;this.c=this.e(this.b,"div");Sys.UI.DomElement.addCssClass(this.c,"SkypeNotificationTopBar");n=this.e(this.c,"div");this.f=new BasicChat.x(n);t=this.e(this.c,"div");this.g=new BasicChat.y(t);i=this.e(this.b,"div");this.a=new BasicChat.w(i,this.d)},i:function(n,t,i,r,u,f){this.f.g(n,t,i,r);this.g.f(r);this.a.n(r,u,f)},dispose:function(){this.a&&(this.a.dispose(),this.a=null)}};BasicChat.w=function(n,t){this.i=Function.createDelegate(this,this.l);this.j=Function.createDelegate(this,this.m);BasicChat.w.initializeBase(this);this.c=n;Sys.UI.DomElement.addCssClass(this.c,"SkypeNotificationActionArea");this.f=t;this.k()};BasicChat.w.prototype={c:null,d:null,b:null,a:null,h:null,g:null,f:null,k:function(){this.d=this.e(this.c,"div");Sys.UI.DomElement.addCssClass(this.d,"SkypeNotificationButton");this.b=this.e(this.c,"div");Sys.UI.DomElement.addCssClass(this.b,"SkypeNotificationButton");this.f.a("click",this.b,this.j);this.a=this.e(this.c,"div");Sys.UI.DomElement.addCssClass(this.a,"SkypeNotificationButton");this.a.style.display="none";this.f.a("click",this.a,this.i)},m:function(){return this.h&&this.h(),!0},l:function(){return this.g&&this.g(),!0},n:function(n,t,i){var r=$a.dn,u=$a.dl,f=$a.dk;switch(n){case 3:r=$a.dj;this.a.style.display="";this.a.style.maxWidth="120px";this.d.style.maxWidth=this.b.style.maxWidth="65px";break;default:this.a.style.display="none";this.d.style.maxWidth=this.b.style.maxWidth=""}this.d.innerText=r;this.b.innerText=u;this.a.innerText=f;this.h=t;this.g=i},dispose:function(){this.f.b("click",this.b,this.j);this.f.b("click",this.a,this.i)}};BasicChat.x=function(n){BasicChat.x.initializeBase(this);this.a=n;Sys.UI.DomElement.addCssClass(this.a,"SkypeNotificationText");this.f()};BasicChat.x.prototype={a:null,c:null,d:null,b:null,f:function(){this.c=this.e(this.a,"span");Sys.UI.DomElement.addCssClass(this.c,"SkypeNotificationSender");this.d=this.e(this.a,"span");Sys.UI.DomElement.addCssClass(this.d,"SkypeNotificationTitle");this.b=this.e(this.a,"span");Sys.UI.DomElement.addCssClass(this.b,"SkypeNotificationMessage")},g:function(n,t,i,r){var u=i;switch(r){case 3:u=$a.dm}this.c.innerText=n;this.d.innerText=t;this.b.innerText=u}};BasicChat.y=function(n){this.a={};BasicChat.y.initializeBase(this);this.b=n;Sys.UI.DomElement.addCssClass(this.b,"SkypeNotificationType");this.d();var i=Common.a.L,t=Common.A.d(i,"WACSkypeChatRequest_40x40x32");this.a[Common.App.BasicChat.a.toString(0)]=t;this.a[Common.App.BasicChat.a.toString(1)]=t;this.a[Common.App.BasicChat.a.toString(2)]=t;this.a[Common.App.BasicChat.a.toString(4)]=t;this.a[Common.App.BasicChat.a.toString(3)]=Common.A.d(i,"WACSkypeVoiceRequest_40x40x32")};BasicChat.y.prototype={b:null,c:null,d:function(){this.c=this.e(this.b,"span")},f:function(n){var t=Common.A.c(40,40,this.a[Common.App.BasicChat.a.toString(n)],Common.a.o,"cui-img-cont-float","",!1,"",this.b.ownerDocument,null);this.c&&this.b.removeChild(this.c);this.b.appendChild(t);this.c=t}};BasicChat.z=function(n){BasicChat.z.initializeBase(this);this.a=n;Sys.UI.DomElement.addCssClass(this.a,"SkypePresenceArea");this.f()};BasicChat.z.prototype={a:null,b:null,d:null,c:null,f:function(){this.b=this.e(this.a,"div");Sys.UI.DomElement.addCssClass(this.b,"SkypePresenceIndicator");var n=this.e(this.a,"div");this.d=new BasicChat.A(n)},g:function(n,t){this.h(t);this.d.b.src=n},h:function(n){var t;switch(n){case 1:t="skPresenceAvailable";break;case 2:t="skPresenceAway";break;case 3:t="skPresenceBusy";break;default:t="skPresenceUnknown"}this.c&&Sys.UI.DomElement.removeCssClass(this.b,this.c);Sys.UI.DomElement.addCssClass(this.b,t);this.c=t}};BasicChat.A=function(n){BasicChat.A.initializeBase(this);this.a=n;Sys.UI.DomElement.addCssClass(this.a,"SkypePresenceImage");this.b=this.e(this.a,"img");Sys.UI.DomElement.addCssClass(this.b,"SkypePresenceImage")};BasicChat.A.prototype={a:null,b:null};BasicChat.c.registerClass("BasicChat.c",null,Common.App.BasicChat.k,Sys.IDisposable);BasicChat.b.registerClass("BasicChat.b");BasicChat.B.registerClass("BasicChat.B",null,Common.App.BasicChat.c);BasicChat.q.a.registerClass("BasicChat.q.a",null,Common.dn);BasicChat.g.registerClass("BasicChat.g");BasicChat.e.registerClass("BasicChat.e",null,Common.App.BasicChat.k,Sys.IDisposable);BasicChat.h.registerClass("BasicChat.h");BasicChat.n.registerClass("BasicChat.n",BasicChat.B,BasicChat.l,Common.App.BasicChat.c);BasicChat.F.registerClass("BasicChat.F");BasicChat.f.registerClass("BasicChat.f",BasicChat.F,BasicChat.C,Sys.IDisposable);BasicChat.i.registerClass("BasicChat.i",BasicChat.F,Common.App.BasicChat.e,Sys.IDisposable);BasicChat.v.registerClass("BasicChat.v",BasicChat.F,Sys.IDisposable);BasicChat.w.registerClass("BasicChat.w",BasicChat.F,Sys.IDisposable);BasicChat.x.registerClass("BasicChat.x",BasicChat.F);BasicChat.y.registerClass("BasicChat.y",BasicChat.F);BasicChat.z.registerClass("BasicChat.z",BasicChat.F);BasicChat.A.registerClass("BasicChat.A",BasicChat.F);BasicChat.a.a=null;BasicChat.p.a();Type.registerNamespace("_Ewa");_Ewa.sg=function(n,t){this.a=n;this.c=t};_Ewa.sg.prototype={a:null,c:null,b:!1,r:function(){return!1},p:function(n,t,i){var u=!0,f=32,r=t.a;if(r!==-1398645260||this.b)r.toString()==="2277126358"?f=this.a.b(2277126358,2,i):u=!1;else return this.c.a(),this.b=!0,$$sc.a.a(Boolean,!0);return u&&f!==2?$$sc.a.a(Boolean,!0):_Ewa.G.a(r)},o:function(n,t){var i=!1,r=t.a;return(r===-1398645260||r.toString()==="2277126358")&&(i=!0),i},q:function(){return!1}};_Ewa.lX=function(n){_Ewa.lX.initializeBase(this,[n])};_Ewa.lX.a=function(n){_Ewa.Q.a(200,new _Ewa.lX(n))};_Ewa.lX.prototype={k:function(){var t=_Ewa.k.a(_Ewa.fM,this.h.a(),136,this.h.k()),n=this;_Ewa.d.cw(t,function(){_Ewa.d.cw(_Ewa.k.a(Object,n.h.a(),151,n.cF()),function(){n.l([new _Ewa.sg(Common.a.c(),t.a())],null)},n.cF(),3)},this.cF(),3)}};_Ewa.lX.registerClass("_Ewa.lX",_Ewa.Q);Type.registerNamespace("_Ewa");_Ewa.Cx=function(){};_Ewa.Cx.a=function(){_Ewa.e.a(_Ewa.lX.a)};_Ewa.Cx.a();