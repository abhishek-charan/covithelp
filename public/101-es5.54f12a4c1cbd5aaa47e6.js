(window.webpackJsonp=window.webpackJsonp||[]).push([[101,103],{"26gb":function(l,n,e){"use strict";var t=e("8Y7J"),o=e("MKJQ"),u=e("sZkV"),i=e("SVse");e("RJ4+"),e("N5Ls"),e("bD4E"),e("iInd"),e("Rznk"),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return h}));var a=t.nb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]{padding:0 16px}ion-title[_ngcontent-%COMP%]{padding:0;text-transform:capitalize}"]],data:{}});function r(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,4,"ion-buttons",[["slot","start"]],null,null,null,o.M,o.e)),t.ob(1,49152,null,0,u.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t.Bb(l,4).onClick(e)&&o),o}),o.K,o.c)),t.ob(3,49152,null,0,u.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(4,16384,null,0,u.h,[[2,u.fb],u.Fb],{defaultHref:[0,"defaultHref"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.backPageLink),l(n,4,0,e.backPageLink)}),null)}function s(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,2,"ion-buttons",[["slot","start"]],null,null,null,o.M,o.e)),t.ob(1,49152,null,0,u.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,0,"img",[["alt","VIT logo"],["src","assets/images/VITLogo.png"],["title","VIT logo"],["width","150"]],null,null,null,null,null))],null,null)}function c(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,2,"ion-buttons",[["slot","end"]],null,null,null,o.M,o.e)),t.ob(1,49152,null,0,u.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,0,"img",[["alt","VIT logo"],["src","assets/images/VIT-logo.png"],["title","VIT logo"],["width","64"]],null,null,null,null,null))],null,null)}function p(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,2,"ion-buttons",[["slot","end"]],null,null,null,o.M,o.e)),t.ob(1,49152,null,0,u.l,[t.h,t.k,t.x],null,null),(l()(),t.Jb(2,0,["Logged As: ",""]))],null,(function(l,n){l(n,2,0,n.component.serviceRole)}))}function h(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,14,"ion-header",[],null,null,null,o.T,o.l)),t.ob(1,49152,null,0,u.B,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,12,"ion-toolbar",[],null,null,null,o.pb,o.H)),t.ob(3,49152,null,0,u.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,o.nb,o.F)),t.ob(5,49152,null,0,u.xb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(6,0,[" "," "])),(l()(),t.eb(16777216,null,0,1,null,r)),t.ob(8,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,s)),t.ob(10,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,c)),t.ob(12,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,p)),t.ob(14,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,8,0,e.isBackButtonActivate),l(n,10,0,e.isFullLogoActivate),l(n,12,0,e.isSmallLogoActivate),l(n,14,0,e.isLoggedAsActivate)}),(function(l,n){l(n,6,0,n.component.title)}))}},"RJ4+":function(l,n,e){"use strict";e.d(n,"a",(function(){return u}));var t=e("mrSG"),o=(e("N5Ls"),e("bD4E"),e("Rznk"),e("bl9C"));class u{constructor(l,n,e,t){this.loginService=l,this.commonPopover=n,this.router=e,this.keystore=t}ngOnInit(){this.keystore.get("User").then(l=>{this.serviceRole=l.serviceRole===o.a.enums.roles.SERVICE_PROVIDER?o.a.enums.rolesValue.VOLUNTEER:o.a.enums.rolesValue.DISTRESSED})}goToLogout(){this.commonPopover.alertPopOver("Do you really want to logout?","Logout confirmation").then(l=>{l&&this.logout()})}logout(){return t.a(this,void 0,void 0,(function*(){yield this.commonPopover.loaderPresent("Logging Out..."),this.loginService.logout().then(l=>{this.router.navigate(["/login"]),this.commonPopover.toastPopOver("Successfully logged out"),this.commonPopover.loaderDismiss()})}))}}},q7y6:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("26gb"),a=e("RJ4+"),r=e("N5Ls"),s=e("bD4E"),c=e("iInd"),p=e("Rznk"),h=e("MKJQ"),d=e("sZkV");class b{constructor(){this.title="Terms & Condition"}ngOnInit(){}}var y=t.nb({encapsulation:0,styles:[[".center[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--padding-start:0px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-left:15px}"]],data:{}});function m(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-common-header",[["backPageLink","/home/settings"],["isBackButtonActivate","true"],["isSmallLogoActivate","true"]],null,null,null,i.b,i.a)),t.ob(1,114688,null,0,a.a,[r.a,s.a,c.m,p.a],{title:[0,"title"],isBackButtonActivate:[1,"isBackButtonActivate"],isSmallLogoActivate:[2,"isSmallLogoActivate"],backPageLink:[3,"backPageLink"]},null),(l()(),t.pb(2,0,null,null,128,"ion-content",[],null,null,null,h.Q,h.i)),t.ob(3,49152,null,0,d.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,126,"ion-row",[],null,null,null,h.fb,h.x)),t.ob(5,49152,null,0,d.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,124,"div",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"h2",[["class","center"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Mobile App Terms & Conditions"])),(l()(),t.pb(9,0,null,null,16,"ul",[],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["By downloading or using the app, these terms will automatically apply to you \u2013 you should make sure therefore that you read them carefully before using the app. You're not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights and other intellectual property rights related to it, still belong to ORANE/VIT. ORANE/VIT is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you're paying for."])),(l()(),t.pb(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["The ORANE/VIT app stores and processes personal data that you have provided to us, in order to provide our Service. It's your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone's security features and it could mean that the VIT app won't work properly or at all."])),(l()(),t.pb(14,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["You should be aware that there are certain things that ORANE/VIT will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but ORANE/VIT cannot take responsibility for the app not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left."])),(l()(),t.pb(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["If you're using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you're accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you're using the app, please be aware that we assume that you have received permission from the bill payer for using the app."])),(l()(),t.pb(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Along the same lines, ORANE/VIT cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged \u2013 if it runs out of battery and you can't turn it on to avail the Service, ORANE/VIT cannot accept responsibility. With respect to ORANE/VIT's responsibility for your use of the app, when you're using the app, it's important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you."])),(l()(),t.pb(20,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["ORANE/VIT accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app."])),(l()(),t.pb(22,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["At some point, we may wish to update the app. The app is currently available on Android \u2013 the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you'll need to download the updates if you want to keep using the app."])),(l()(),t.pb(24,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["ORANE/VIT does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, we may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device."])),(l()(),t.pb(26,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Changes to This Terms and Conditions"])),(l()(),t.pb(28,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately after they are posted on this page."])),(l()(),t.pb(31,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Privacy Policy"])),(l()(),t.pb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["ORANE/VIT built the VIT app as a Free app. This SERVICE is provided by ORANE/VIT and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy."])),(l()(),t.pb(35,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Policy"])),(l()(),t.pb(37,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at ORANE/VIT Website OR Office unless otherwise defined in this Privacy Policy."])),(l()(),t.pb(39,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Information Collection and Use For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, phone number and location. The information that we request will be retained by us and used as described in this privacy policy."])),(l()(),t.pb(41,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" The app does use third party services that may collect information used to identify you. Link to privacy policy of third-party service providers used by the app"])),(l()(),t.pb(43,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),t.pb(44,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Google Play Services"])),(l()(),t.pb(46,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Firebase Analytics"])),(l()(),t.pb(48,0,null,null,1,"h2",[["style","display:block"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Log Data"])),(l()(),t.pb(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,['We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.'])),(l()(),t.pb(52,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Cookies"])),(l()(),t.pb(54,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."])),(l()(),t.pb(56,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[' This Service does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you'])),(l()(),t.pb(58,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" choose to refuse our cookies, you may not be able to use some portions of this Service."])),(l()(),t.pb(60,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Service Providers"])),(l()(),t.pb(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["We may employ third-party companies and individuals due to the following reasons:"])),(l()(),t.pb(64,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),t.pb(65,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["To facilitate our Service."])),(l()(),t.pb(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["To provide the Service on our behalf."])),(l()(),t.pb(69,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["To perform Service-related services; or"])),(l()(),t.pb(71,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["To assist us in analysing how our Service is used."])),(l()(),t.pb(73,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."])),(l()(),t.pb(75,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Security"])),(l()(),t.pb(77,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."])),(l()(),t.pb(79,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Links to Other Sites"])),(l()(),t.pb(81,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. "])),(l()(),t.pb(83,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Children's Privacy"])),(l()(),t.pb(85,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."])),(l()(),t.pb(87,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Changes to This Privacy Policy"])),(l()(),t.pb(89,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page."])),(l()(),t.pb(91,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["License Grant:"])),(l()(),t.pb(93,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,['Orane Intelli Solutions- grants you a revocable, non-exclusive, non-transferable, limited right to install and use the application on a single mobile device owner and controlled by you in accordance with the Terms & Conditions f this License, the Usage Rules and any Service Agreement associated with your Mobile device collectively "related Agreements". '])),(l()(),t.pb(95,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Restrictions on Use:"])),(l()(),t.pb(97,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["You shall use the application strictly in accordance with the terms of the Related Agreement and shall not, Decompile, reverse engineer, disassemble, attempt to derive the source code, OR make modification, adaptation, improvement, enhancement, translation or derivative work from the application OR decrypt the application or violate any applicable laws, rules or regulations in connection with your access or use of application OR remove, alter or obscure any proprietary notice (Including any notice of copyright or trademark) of company or its affiliates, partners, suppliers or the licensors of the application OR use the application for any revenue generating endeavour, commercial enterprise or other purpose for which it is not designed or intended OR install, use or permit the application to exist on more than one mobile device at a time or on any other mobile device or computer OR distribute the application to multiple mobile devices OR make the application available over a network or other environment permitting access or use by multiple mobile devices or users at the same time OR use the application for creating a product, service or software that is, directly or indirectly, competitive with or in any way a substitute for any services, product or software offered by Company; OR use the application to send automated queries to any website or to send any unsolicited commercial e-mail OR use any proprietary information or interfaces of company or other intellectual property of company in the design, development, manufacturing, licensing or distribution of any applications, accessories or devices for use with the application. "])),(l()(),t.pb(99,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["EULA/ License Agreement:"])),(l()(),t.pb(101,0,null,null,11,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,['The end user license agreement is a legal agreement between you and Orane Intelli Solutions and its affiliates. EULA governs your use of VIT software and any third-party software that maybe distributed therewith (collectively "Software"). Orane agrees to license the software to you (Personally or on behalf of your employer) (collectively You or Your) only if you accept all the terms contained in this agreement. By installing, using, copying or distributing all or portion of the software, you accept and agree to be bound by al the terms and conditions of this EULA. IF YOU DO NOT AGREE WITH ANY OGF THE TERMS AND CONDITIONS, DO NOT DOWNLOAD, INSTALL OR USE THE SOFTWARE. '])),(l()(),t.pb(103,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Your use of the software is also subject to your agreement with us concerning your use of Orane's and VIT's website (www.oranetech.com/ www.VIT.in/wwwVIT.org) and the services provided through that website. The EULA hereby incorporates by reference all terms, conditions, rules, policies and guidelines on the website, including the VIT terms of service (the \"terms of Service\"). Please also see VIT privacy policy as "])),(l()(),t.pb(105,0,null,null,1,"a",[["href","http://www.VIT.in"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["www.VIT.in"])),(l()(),t.Jb(-1,null,["\xa0 and "])),(l()(),t.pb(108,0,null,null,1,"a",[["href","http://www.VIT.org"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["www.VIT.org"])),(l()(),t.Jb(-1,null,[" . Capitalized terms not defined in EULA are defined in the terms of service. "])),(l()(),t.pb(111,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" (Agree/ Disagree). "])),(l()(),t.pb(113,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Copyright/ Infringement acknowledgement: "])),(l()(),t.pb(115,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["You and Company acknowledge and agree that, in the event of a third party claim that the application or your possession or use of the application infringes any third party's intellectual property rights, You (and not the company) will be responsible for the investigation, defence, settlement and discharge of any such claim of intellectual property infringement. You will however promptly notify company in writing of such claim. "])),(l()(),t.pb(117,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Termination: "])),(l()(),t.pb(119,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Orane may, in its sole and absolute discretion, at any time and for any or no reason, suspend or terminate this license and the rights afforded to you hereunder with or without prior notice. Furthermore, if you fail to comply with any terms and conditions of this license, then this license and any rights afforded to you hereunder shall be terminated automatically, without any notice or other action by company. Upon the termination of the license, you shall cease all use of the application and uninstall the application"])),(l()(),t.pb(121,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Disclaimer of Warranties:\xa0 "])),(l()(),t.pb(123,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,['YOU ACKNOWLEDGE AND AGREE THAT THE APPLICAITON IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, AND THAT YOUR USE OF OR RELIANCE UPON THE APPLICATION AND ANY THIRD PARTY CONTENT AND SERVICES ACCESS THEREBY IS AT YOUR SOLE RISK AND DISCRETION. COMPANY AND ITS AFFILIATES, PARTNERS, SUPPLIERS AND LICENSIRS HEREBE DISCLAIN ANY AND ALL REPRESENTATIONS, WARRANTIES AND GUARANTIED REGARDING THE APPLICATION AND THIRD PARTY CONTENT AND SERVICES, WHETHER EXPRESS, IMPLIED OR STATUTORY, AND INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MECHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. FURTHERMORE, COMPANY AND ITS AFFILIATES, PARTNERS, SUPPIERS AND LICENSORS MAKE NO WARRANTY THAT- THE APPLICATION OR THIRD PARTY CONTENT AND SERVICES WILL MEET YOUR REQUIREMENTS, THE APPLICATION OR THIRD PARTY CONTENT AND SERVICES WILL BE UNINTERRUPED, ACCURATE, RELIABLE, TIMELY, SECURE OR ERROR-FREE, THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION OR OTHER MATERIAL ACCESSED OR OBTAINED BY YOU THROUGH THE APPLICATION WILL BE AS REPRESENTED OR MEET YOUR EXPECTATION or ANY ERRORS IN THE APPLICATION OR THIRD PARTY CONTENT AND SERVICES WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM COMPANY OR FROM THE APPLICATION SHALL CREATE ANY WARRANTS.'])),(l()(),t.pb(125,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Contact Us"])),(l()(),t.pb(127,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us on "])),(l()(),t.pb(129,0,null,null,1,"a",[["href","mailto:oraneintellisolutions@gmail.com"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["oraneintellisolutions@gmail.com"]))],(function(l,n){l(n,1,0,n.component.title,"true","true","/home/settings")}),null)}var f=t.lb("app-terms",b,(function(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-terms",[],null,null,null,m,y)),t.ob(1,114688,null,0,b,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=e("SVse"),v=e("s7LF");class T{}var w=e("QhV3");e.d(n,"TermsPageModuleNgFactory",(function(){return I}));var I=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[u.a,f]],[3,t.j],t.v]),t.zb(4608,g.l,g.k,[t.s,[2,g.t]]),t.zb(4608,v.q,v.q,[]),t.zb(4608,d.b,d.b,[t.x,t.g]),t.zb(4608,d.Eb,d.Eb,[d.b,t.j,t.p]),t.zb(4608,d.Ib,d.Ib,[d.b,t.j,t.p]),t.zb(1073742336,g.b,g.b,[]),t.zb(1073742336,v.p,v.p,[]),t.zb(1073742336,v.f,v.f,[]),t.zb(1073742336,d.Bb,d.Bb,[]),t.zb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),t.zb(1073742336,T,T,[]),t.zb(1073742336,w.a,w.a,[]),t.zb(1073742336,o,o,[]),t.zb(1024,c.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);