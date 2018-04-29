/*! Version=16.0.9321.5050 */
Type.registerNamespace("Common.App.O365Shell");Common.App.O365Shell.c=function(){this.e=Function.createDelegate(this,this.f)};Common.App.O365Shell.c.a=function(){Common.App.a.a().a(new Common.App.O365Shell.c,0,!1)};Common.App.O365Shell.c.prototype={d:null,a:function(){return"Common.App.O365Shell"},c:function(n){this.d=n;var t=this;this.d.b(Common.App.O365Shell.a).c(Common.App.O365Shell.b).a().b(function(){return new Common.App.O365Shell.a(new($$sc.v.$$(Common.dl))(function(){return Common.a.d}),Common.a.b,Common.a.a().a().b())})},b:function(){Common.a.b.e(this.e)},f:function(){Common.a.bs&&this.d.a(Common.App.O365Shell.a).y()}};Common.App.O365Shell.a=function(n,t,i){this.o=Function.createDelegate(this,this.w);this.k=Function.createDelegate(this,this.s);this.l=Function.createDelegate(this,this.t);this.m=Function.createDelegate(this,this.u);this.n=Function.createDelegate(this,this.v);this.d=new($$sc.A.$$(Object));this.g=n;this.p=i;this.j=t.d.ShellWebServiceBase||""};Common.App.O365Shell.a.prototype={i:!1,h:!1,f:null,e:null,g:null,p:0,j:null,b:null,a:function(){return this.d.a},r:function(){return this.g.a()},y:function(){var t,n;this.b=document.getElementById("sw_bar");t={};t["Content-Type"]="application/json; charset=utf-8";Diag.a.a(6612806,215,50,"Client is sending a request to get the code for the O365 switcher");n=this.j+Common.l.a("O365ShellServiceProxy.ashx","qs",Common.d.a(Common.a.h));n=Common.l.a(n,"at",Common.a.a().a().b().toString());this.r().a(n,1,"",t,!0,2,this.n,this.m,null,null,!1,null,null,null,null,!1)},v:function(n){var i=n.b.b,t,r,u;if(!i||!i.length){this.c();Diag.a.a(6362369,215,10,"Response from O365ShellServiceProxy is null.");return}try{if(t=JSON.parse(i),this.z(t)&&(this.f=t.NavBarDataJson),!this.f){Diag.a.a(9000737,215,15,"ShellData is null");this.d.d();return}if(!(u=Common.bs.a(Object,t.NavBarDataJson,r={val:this.e}),this.e=r.val,u)){Diag.a.a(7660113,215,10,"Failed to deserialize : {0}",{ShellData:Common.Utils.d.a(this.f)});this.d.d();return}this.d.b(this.e)}catch(f){this.c();Diag.a.a(6362370,215,10,"Unable to parse the response from O365ShellServiceProxy.");this.d.d()}},u:function(){this.b&&this.c();this.d.d();Diag.a.a(7608091,215,10,"Call to O365ShellServiceProxy failed.")},z:function(n){var t,i;return!n.JsUrl||!n.JsUrl.length?(this.c(),Diag.a.a(6387854,215,10,"Empty or null JS URL."),!1):(t=Common.bv.a(n.JsUrl),t.e(this.l),Common.O.a(t),!n.CssUrl||!n.CssUrl.length)?(this.c(),Diag.a.a(6387855,215,10,"Empty or null CSS URL."),!1):(i=new Common.eI(n.CssUrl),i.e(this.k),Common.O.a(i),!0)},s:function(n,t){t.a?(this.h=!0,this.q()):(Diag.a.a(7608092,215,10,"CSS failed to load"),this.c())},t:function(n,t){t.a?(this.i=!0,this.q()):(Diag.a.a(7608093,215,10,"JS failed to load"),this.c())},q:function(){if(this.h&&this.i){if(!this.b){Diag.a.b(7608280,215,!1,null);return}Sys.UI.DomElement.removeCssClass(this.b,"SwitcherLoading");var n=document.createElement("div");n.id="ShellContainer";this.b.appendChild(n);this.x()}},x:function(){var n=window.self.O365Shell,t,i;if(!n){this.c();Diag.a.b(6613128,215,!1,null);return}if(!n.SetData){this.c();Diag.a.b(6613129,215,!1,null);return}if(!this.f){this.c();Diag.a.b(6613130,215,!1,null);return}if(!this.e){this.c();return}if(n.SetData(this.e),i=(t=new Common.App.O365Shell.a.a,t.launcher="ShellContainer",t.switcher="sw_bar",t),!n.RenderAsync){this.c();Diag.a.b(6613131,215,!1,null);return}n.RenderAsync(i,this.o)},w:function(){if(this.b){var n=this.b.getElementsByTagName("a");n&&n.length>0&&n[0]&&this.b.style.display!=="none"&&n[0].focus();Common.a.c().c(1448619089,2);Diag.a.a(6612807,215,50,"O365 switcher tiles added to the DOM.")}},c:function(){Sys.UI.DomElement.containsCssClass(this.b,"SwitcherError")||(Sys.UI.DomElement.removeCssClass(this.b,"SwitcherLoading"),Sys.UI.DomElement.addCssClass(this.b,"SwitcherError"),Diag.a.a(7129104,215,10,"Failed to display O365 Shell Switcher."))}};Common.App.O365Shell.a.b=function(){};Common.App.O365Shell.a.a=function(){};Common.App.O365Shell.a.registerClass("Common.App.O365Shell.a",null,Common.App.O365Shell.b);Common.App.O365Shell.a.a.registerClass("Common.App.O365Shell.a.a");Common.App.O365Shell.c.a();