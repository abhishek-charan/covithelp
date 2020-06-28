(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"/yGZ":function(n,l,u){"use strict";u.r(l);var o=u("8Y7J");class e{}var t=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("s7LF"),b=u("SVse"),s=u("iInd"),c=u("mrSG"),p=u("bD4E"),g=u("Qcnj"),d=u("LGxA");class h{constructor(n,l,u,o,e){this.router=n,this.commonPopover=l,this.networkConnection=u,this.otpService=o,this.formBuilder=e}ngOnInit(){this.otpForm=this.formBuilder.group({countryCode:["",[a.o.required,a.o.pattern(/^[0-9]{1,4}$/)]],phone:["",[a.o.required,a.o.pattern(/^[0-9]{9,15}$/)]]})}changeCountryCode(n){n&&this.otpForm.patchValue({countryCode:n.length>3?n.substring(0,3):n})}changePhone(n){n&&this.otpForm.patchValue({phone:n.length>15?n.substring(0,15):n})}login(){return c.a(this,void 0,void 0,(function*(){if(!this.otpForm.valid)return;let n={countryCode:this.otpForm.controls.countryCode.value,phone:this.otpForm.controls.phone.value};if(this.networkConnection.isOffline())return this.networkConnection.isConnectionMessage();yield this.commonPopover.loaderPresent("Sending OTP"),this.otpService.sendOTP(n).then(l=>{this.commonPopover.loaderDismiss(),this.commonPopover.toastPopOver("OTP sent to your number."),this.router.navigate(["/submit-otp",n])}).catch(n=>{this.commonPopover.loaderDismiss()})}))}}var m=o.nb({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%]{text-align:center}input[type=number][_ngcontent-%COMP%]{width:10px}ion-checkbox[_ngcontent-%COMP%]{top:4px}"]],data:{}});function C(n){return o.Lb(0,[(n()(),o.pb(0,0,null,null,37,"ion-content",[],null,null,null,i.Q,i.i)),o.ob(1,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==o.Bb(n,4).onSubmit(u)&&e),"reset"===l&&(e=!1!==o.Bb(n,4).onReset()&&e),e}),null,null)),o.ob(3,16384,null,0,a.s,[],null,null),o.ob(4,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Gb(2048,null,a.a,null,[a.d]),o.ob(6,16384,null,0,a.k,[[4,a.a]],null,null),(n()(),o.pb(7,0,null,null,0,"img",[["alt","VIT logo"],["src","assets/images/VIT-logo.png"],["title","VIT logo"]],null,null,null,null,null)),(n()(),o.pb(8,0,null,null,18,"div",[],null,null,null,null,null)),(n()(),o.pb(9,0,null,null,17,"ion-item",[],null,null,null,i.Y,i.q)),o.ob(10,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(n()(),o.pb(11,0,null,0,1,"ion-icon",[["name","call"]],null,null,null,i.U,i.m)),o.ob(12,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.pb(13,0,null,0,6,"ion-input",[["formControlName","countryCode"],["placeholder",""],["style","max-width: 20%;border-right: 1px solid grey;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,t=n.component;return"ionBlur"===l&&(e=!1!==o.Bb(n,14)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==o.Bb(n,14)._handleIonChange(u.target)&&e),"input"===l&&(e=!1!==t.changeCountryCode(u.target.value)&&e),e}),i.X,i.p)),o.ob(14,16384,null,0,r.Gb,[o.k],null,null),o.Gb(1024,null,a.h,(function(n){return[n]}),[r.Gb]),o.ob(16,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.r]],{name:[0,"name"]},null),o.Gb(2048,null,a.i,null,[a.c]),o.ob(18,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(19,49152,null,0,r.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),o.pb(20,0,null,0,6,"ion-input",[["formControlName","phone"],["placeholder"," Your mobile number "],["style","max-width: 50%;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,t=n.component;return"ionBlur"===l&&(e=!1!==o.Bb(n,21)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==o.Bb(n,21)._handleIonChange(u.target)&&e),"input"===l&&(e=!1!==t.changePhone(u.target.value)&&e),e}),i.X,i.p)),o.ob(21,16384,null,0,r.Gb,[o.k],null,null),o.Gb(1024,null,a.h,(function(n){return[n]}),[r.Gb]),o.ob(23,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.r]],{name:[0,"name"]},null),o.Gb(2048,null,a.i,null,[a.c]),o.ob(25,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(26,49152,null,0,r.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),o.pb(27,0,null,null,6,"div",[["class","center"],["style","margin: 20px 0;"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[' By clicking "Send OTP", you are agreeing to the '])),(n()(),o.pb(29,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==o.Bb(n,30).onClick(u)&&e),"click"===l&&(e=!1!==o.Bb(n,31).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),o.ob(30,737280,null,0,r.Kb,[b.g,r.Fb,o.k,s.m,[2,s.n]],null,null),o.ob(31,671744,null,0,s.o,[s.m,s.a,b.g],{routerLink:[0,"routerLink"]},null),o.Cb(32,1),(n()(),o.Jb(-1,null,["Terms and Conditions."])),(n()(),o.pb(34,0,null,null,3,"div",[["style","margin: 20px 0;"]],null,null,null,null,null)),(n()(),o.pb(35,0,null,null,2,"ion-button",[["color","primary"],["expand","block"],["shape","flat"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o}),i.L,i.d)),o.ob(36,49152,null,0,r.k,[o.h,o.k,o.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"]},null),(n()(),o.Jb(-1,0,["Send OTP"]))],(function(n,l){var u=l.component;n(l,4,0,u.otpForm),n(l,12,0,"call"),n(l,16,0,"countryCode"),n(l,19,0,"","number"),n(l,23,0,"phone"),n(l,26,0," Your mobile number ","number"),n(l,30,0);var o=n(l,32,0,"/terms-common");n(l,31,0,o),n(l,36,0,"primary",!u.otpForm.valid,"block","flat")}),(function(n,l){n(l,2,0,o.Bb(l,6).ngClassUntouched,o.Bb(l,6).ngClassTouched,o.Bb(l,6).ngClassPristine,o.Bb(l,6).ngClassDirty,o.Bb(l,6).ngClassValid,o.Bb(l,6).ngClassInvalid,o.Bb(l,6).ngClassPending),n(l,13,0,o.Bb(l,18).ngClassUntouched,o.Bb(l,18).ngClassTouched,o.Bb(l,18).ngClassPristine,o.Bb(l,18).ngClassDirty,o.Bb(l,18).ngClassValid,o.Bb(l,18).ngClassInvalid,o.Bb(l,18).ngClassPending),n(l,20,0,o.Bb(l,25).ngClassUntouched,o.Bb(l,25).ngClassTouched,o.Bb(l,25).ngClassPristine,o.Bb(l,25).ngClassDirty,o.Bb(l,25).ngClassValid,o.Bb(l,25).ngClassInvalid,o.Bb(l,25).ngClassPending),n(l,29,0,o.Bb(l,31).target,o.Bb(l,31).href)}))}var v=o.lb("app-login",h,(function(n){return o.Lb(0,[(n()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,C,m)),o.ob(1,114688,null,0,h,[s.m,p.a,g.a,d.a,a.b],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);class B{}u.d(l,"LoginPageModuleNgFactory",(function(){return y}));var y=o.mb(e,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[t.a,v]],[3,o.j],o.v]),o.zb(4608,b.l,b.k,[o.s,[2,b.t]]),o.zb(4608,a.q,a.q,[]),o.zb(4608,r.b,r.b,[o.x,o.g]),o.zb(4608,r.Eb,r.Eb,[r.b,o.j,o.p]),o.zb(4608,r.Ib,r.Ib,[r.b,o.j,o.p]),o.zb(4608,a.b,a.b,[]),o.zb(1073742336,b.b,b.b,[]),o.zb(1073742336,a.p,a.p,[]),o.zb(1073742336,a.f,a.f,[]),o.zb(1073742336,r.Bb,r.Bb,[]),o.zb(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),o.zb(1073742336,B,B,[]),o.zb(1073742336,a.m,a.m,[]),o.zb(1073742336,e,e,[]),o.zb(1024,s.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);