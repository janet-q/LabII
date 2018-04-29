(function() {var h=window.O365||{};h.__BLS=(new Date).getTime();
var m=function(){function c(){}c.F=function(b){l.G(b);l.b(c.a,"SetData",arguments)};c.C=function(b,a){l.j(b);l.b(c.a,"Render",arguments)};c.D=function(b,a,d){l.j(b);l.b(c.a,"RenderAsync",arguments)};c.v=function(){l.b(c.a,"LoadShellCore",arguments)};c.A=function(b){l.b(c.a,"OnShellPlusPreInitialize",arguments)};c.w=function(b){l.b(c.a,"OnFlexPaneInitialize",arguments)};c.B=function(b){l.b(c.a,"OnSuiteAPILoaded",arguments)};c.a="O365Shell";return c}(),l=function(){function c(){}c.G=function(b){c.c=
b};c.j=function(b){c.f=b};c.b=function(b,a,d){this.i.push([b,a,d]);if(b==m.a&&("Render"===a||"RenderAsync"===a))try{c.s()}catch(e){throw c.g(428159,e.message),e;}};c.s=function(){if(null!=c.c){var b=c.ia(),a=JSON.parse(c.c.ClientData);null!=b?("localhost"==b.toLowerCase()&&(a.ResourceCatalogHostUrl="https://localhost:3443",b="16.00.latest"),c.ga(b,a)):c.h(a)}};c.ea=function(){for(var b=0,a=this.i;b<a.length;b++){var d=a[b],e=d[0],g=d[1],d=d[2];window[e]&&window[e][g]?window[e][g].apply(window[e],
d):c.g(423043,e,g)}this.i.length=0};c.o=function(b,a,d){var c=document.createElement("script");c.src=b;c.setAttribute("crossorigin","anonymous");null!=a&&(c.onload=a);null!=d&&(c.onerror=d);document.body.appendChild(c)};c.ma=function(b){var a=document.createElement("link");a.rel="stylesheet";a.type="text/css";a.href=b;document.head.appendChild(a)};c.h=function(b){var a=b.ShellCoreMinJS,d=b.ShellCoreMinCSS,e="mouse";c.f&&c.f.layout&&(e=c.f.layout.toLowerCase());"mouse"!==e&&(c.f.loadCombinedJSForTouch?
(a=b.ShellCoreTouchJS,d=b.ShellCoreTouchCSS):"tnarrow"===e?(a=b.ShellCoreNarrowJS,d=b.ShellCoreNarrowCSS):"twide"===e&&(a=b.ShellCoreWideJS,d=b.ShellCoreWideCSS));c.ma(d);c.o(a,function(){c.o(b.ShellStringsJS,function(){c.ea()},function(){c.g(421964,b.ShellStringsJS)})},function(){c.g(421965,b.ShellCoreMinJS)})};c.ga=function(b,a){c.la(b,a,function(b){b&&c.u(b,a);c.h(a)})};c.u=function(b,a){a.ShellCoreMinJS=b.K;a.ShellCoreMinCSS=b.J;a.ShellStringsJS=b.T;a.ShellCoreJS=b.I;a.ShellCoreCSS=b.H;a.ShellCoreWideJS=
b.R;a.ShellCoreWideCSS=b.P;a.ShellCoreNarrowJS=b.M;a.ShellCoreNarrowCSS=b.L;a.ShellCoreTouchJS=b.O;a.ShellCoreTouchCSS=b.N;a.ShellPlusJS=b.V;a.ShellPlusCSS=b.U;a.ShellPlusWideJS=b.aa;a.ShellPlusWideCSS=b.$;a.ShellPlusNarrowJS=b.X;a.ShellPlusNarrowCSS=b.W;a.ShellPlusTouchJS=b.Z;a.ShellAriaLoggerJS=b.l;a.ShellPlusTouchCSS=b.Y;a.ShellDefaultThemeCSS=b.S;a.SettingsSearchNlrtUrl=b.da;a.CardBundleJS=b.ba;a.SettingsSearchClassifierUrl=b.ca;c.c.ClientData=JSON.stringify(a)};c.ia=function(){return c.ka()};
c.ka=function(){var b=null;try{sessionStorage&&(b=sessionStorage.getItem("shellver"))}catch(a){}return b};c.la=function(b,a,d){var e=new XMLHttpRequest,g=a.ResourceCatalogHostUrl+"/o365/"+encodeURI(b)+"/shellresourcecatalog.xml";e.open("GET",g,!0);e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE&&200==e.status){var b=c.ha(e.responseXML,a);d(b)}else e.readyState==XMLHttpRequest.DONE&&200!=e.status&&(console.error("Bad shell resource version specified: %s",g),c.h(a))};e.send()};
c.ha=function(b,a){var d=null,e=b.documentElement.getElementsByTagName("Resources")[0];if(null!=e)for(var d=new n,g=a.ResourceCatalogHostUrl+"/o365/versionless",e=e.getElementsByTagName("Resource"),k=0;k<e.length;k++){var f=e.item(k),p=f.getAttribute("Key"),q=f.getAttribute("Type"),f=c.ja(g,f,q,a.IsRTL,a.CultureHierarchy);switch(p){case a.ShellCoreMinJSResourceKey:d.K=f;break;case a.ShellCoreMinCSSResourceKey:d.J=f;break;case a.ShellCoreJSResourceKey:d.I=f;break;case a.ShellCoreWideJSResourceKey:d.R=
f;break;case a.ShellCoreNarrowJSResourceKey:d.M=f;break;case a.ShellCoreTouchJSResourceKey:d.O=f;break;case a.ShellCoreCSSResourceKey:d.H=f;break;case a.ShellCoreWideCSSResourceKey:d.P=f;break;case a.ShellCoreNarrowCSSResourceKey:d.L=f;break;case a.ShellCoreTouchCSSResourceKey:d.N=f;break;case a.ShellPlusJSResourceKey:d.V=f;break;case a.ShellPlusWideJSResourceKey:d.aa=f;break;case a.ShellPlusNarrowJSResourceKey:d.X=f;break;case a.ShellPlusTouchJSResourceKey:d.Z=f;break;case a.ShellPlusCSSResourceKey:d.U=
f;break;case a.ShellPlusWideCSSResourceKey:d.$=f;break;case a.ShellPlusNarrowCSSResourceKey:d.W=f;break;case a.ShellPlusTouchCSSResourceKey:d.Y=f;break;case a.ShellStringsJSResourceKey:d.T=f;break;case "o365shellarialogger":d.l=f;break;case "shellarialogger":d.l=f;break;case a.ShellDefaultThemeCSSResourceKey:d.S=f;break;case "microsoftnaturallanguageruntime":d.da=f;break;case "shellg2settingscardbundle":d.ba=f;break;case "shellg2settingssearchclassifier":d.ca=f}}return d};c.ja=function(b,a,d,e,g){switch(d){case "Path":g=
a.getElementsByTagName("Path")[0];b+=g.textContent;break;case "LangPath":a=a.getElementsByTagName("LangPath");d=null;for(e=0;null==d&&e<g.length;e++)d=c.m(a,g[e]);null==d&&(d=c.m(a,"en"));b+=d.textContent;break;case "LTRRTLPath":g=a.getElementsByTagName(e?"RTLPath":"LTRPath")[0];b+=g.textContent;break;default:b=null}return b?encodeURI(b):b};c.m=function(b,a){void 0===a&&(a="en");for(var d=null,c=0;c<b.length;c++){var g=b[c];if(g.getAttribute("Language").toLowerCase()==a.toLowerCase()){d=g;break}}return d};
c.g=function(b){for(var a=[],d=1;d<arguments.length;d++)a[d-1]=arguments[d];var d=Date.now(),e=d.toString(),g=JSON.parse(c.c.ClientData);document.createElement("img").setAttribute("src",g.LogUrl+"?d="+c.fa(b,d,g,a)+"&cb="+encodeURIComponent(e))};c.fa=function(b,a,c,e){for(var g="[",k=0;k<e.length;k++)0<k&&(g+=","),g+=encodeURIComponent(e[k]);e="";k=0;for(c=[["shsid",c.SHSID],["s",c.WorkloadId],["u",c.UID],["t",c.TID],["p",c.PUID],["c",null!=c.IsConsumerShell?c.IsConsumerShell.toString():"false"],
["sid",c.CLSID]];k<c.length;k++){var f=c[k];e+='"'+encodeURIComponent(f[0])+'","'+encodeURIComponent(f[1])+'",'}e=e.slice(0,-1);return"{m:[{t:"+b+",l:6,ct:"+a+",a:["+(g+"]")+"]}],a:["+e+"]}"};c.i=[];return c}();function n(){}window.O365Shell=m;window.O365=h;m.SetData=m.F;m.Render=m.C;m.RenderAsync=m.D;m.LoadShellCore=m.v;m.OnShellPlusPreInitialize=m.A;m.OnFlexPaneInitialize=m.w;m.OnSuiteAPILoaded=m.B;h.__BLC=(new Date).getTime();}).call(window);