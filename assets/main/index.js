System.register("chunks:///_virtual/Background-001.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,o=t.Component}],execute:function(){var r;n._RF.push({},"fc8a7O0lRxHeLKGBeiPyErs","Background-001",void 0);var c=i.ccclass;t("Background",c("Background")(r=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).currentSpeed=30,e.movingRight=!0,e}return e(n,t),n.prototype.update=function(t){var e=this.node.getPosition();this.movingRight?(e.x+=this.currentSpeed*t*.1,e.y+=this.currentSpeed*t*.1,this.node.setPosition(e),e.x>=10&&(this.movingRight=!1)):(e.x-=this.currentSpeed*t*.1,e.y-=this.currentSpeed*t*.1,this.node.setPosition(e),e.x<=-10&&(this.movingRight=!0))},n}(o))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.Component}],execute:function(){var c;n._RF.push({},"a62ebAbXCZMfpAQhEKlyMuQ","Background",void 0);var i=r.ccclass;t("Background",i("Background")(c=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).currentTime=0,e.currentSpeed=250,e}e(n,t);var r=n.prototype;return r.start=function(){this.schedule(this.updateTime,1)},r.updateTime=function(){this.currentTime+=1},r.update=function(t){var e=this.node.getPosition();e.x-=this.currentSpeed*t*.1,e.x<=-288&&(e.x+=288),this.node.setPosition(e)},n}(o))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,i,r,s;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Collider2D,r=t.Contact2DType,s=t.Component}],execute:function(){var c;n._RF.push({},"28bb377QT1HMZ5pp7+FJlnB","Bird",void 0);var l=e.ccclass;e.property,t("BirdCollider",l("Bird")(c=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.start=function(){var t=this.node.getPosition();t.x=-10,this.node.setPosition(t),this.node.getComponent(i).on(r.BEGIN_CONTACT,this.onCollide,this)},e.onCollide=function(){},n}(s))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/BirdMovement.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,o,s,r,h,a,u,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,h=t.Node,a=t.input,u=t.Input,c=t.Vec3,l=t.Component}],execute:function(){var p,f,d,v,g,b,y;s._RF.push({},"94295GNAK1L7reFOnejfyq4","BirdMovement",void 0);var T=r.ccclass,m=r.property;t("BirdMovement",(p=T("BirdMovement"),f=m({type:h}),d=m({type:h}),p((b=e((g=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,n(e,"buttonLeft",b,o(e)),n(e,"buttonRight",y,o(e)),e.minX=-120,e.maxX=120,e}i(e,t);var s=e.prototype;return s.onLoad=function(){a.on(u.EventType.TOUCH_MOVE,this.onTouchMove,this),this.buttonLeft.on(h.EventType.TOUCH_START,this.GoLeftStart,this),this.buttonLeft.on(h.EventType.TOUCH_END,this.GoLeftEnd,this),this.buttonRight.on(h.EventType.TOUCH_START,this.GoRightStart,this),this.buttonRight.on(h.EventType.TOUCH_END,this.GoRightEnd,this)},s.onTouchMove=function(t){var e=t.getLocation().x;e=Math.max(this.minX,Math.min(this.maxX,e)),this.node.setPosition(new c(e,this.node.getPosition().y,0))},s.GoLeftStart=function(t){var e=this.node.getPosition();e.x>this.minX&&(e.x-=15,this.node.setPosition(e)),this.buttonLeft.setScale(1.2,1.2,1)},s.GoLeftEnd=function(t){this.buttonLeft.setScale(1,1,1)},s.GoRightStart=function(t){var e=this.node.getPosition();e.x<this.maxX&&(e.x+=15,this.node.setPosition(e)),this.buttonRight.setScale(1.2,1.2,1)},s.GoRightEnd=function(t){this.buttonRight.setScale(1,1,1)},e}(l)).prototype,"buttonLeft",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=e(g.prototype,"buttonRight",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=g))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameLogic.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,o,s,n,a,p,l,c,h,u,g,y,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){s=e.cclegacy,n=e._decorator,a=e.Prefab,p=e.Node,l=e.Label,c=e.AudioSource,h=e.Collider2D,u=e.Contact2DType,g=e.instantiate,y=e.director,d=e.Component}],execute:function(){var m,b,S,f,v,P,z,L,T,w,C,O,A,N,B,D,E,R,_,x,H,G,M,k,I;s._RF.push({},"ea747Ix1GhDXZxOaqnH5pLw","GameLogic",void 0);var J=n.ccclass,U=n.property;e("Pipa",(m=J("Game Logic"),b=U({type:a}),S=U({type:p}),f=U({type:p}),v=U({type:p}),P=U({type:p}),z=U({type:p}),L=U({type:l}),T=U({type:p}),w=U({type:c}),C=U({type:c}),O=U({type:c}),m((B=t((N=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return t=e.call.apply(e,[this].concat(s))||this,r(t,"prefabPipa",B,o(t)),r(t,"ScoringLine",D,o(t)),r(t,"nodeBird",E,o(t)),r(t,"gameOverSprite",R,o(t)),r(t,"gameStartSprite",_,o(t)),r(t,"tryAgainSprite",x,o(t)),r(t,"scoreLabel",H,o(t)),r(t,"bloop",G,o(t)),r(t,"hit",M,o(t)),r(t,"die",k,o(t)),r(t,"success",I,o(t)),t.pos1=!1,t.pos2=!1,t.pos3=!1,t.pos4=!1,t.gameover=!1,t.gameStart=!1,t.gameRestart=!1,t.pipaNodes=[],t.currentTime=0,t.currentSpeed=200,t.temp=3,t.gravity=.2,t.deadJump=10,t.size=0,t.score=0,t}i(t,e);var s=t.prototype;return s.start=function(){this.schedule(this.updateTime,1),this.nodeBird.getComponent(h).on(u.BEGIN_CONTACT,this.onCollide,this),this.gameStartSprite.on(p.EventType.TOUCH_END,this.gameStartPressed,this),this.tryAgainSprite.on(p.EventType.TOUCH_START,this.restartStart,this),this.tryAgainSprite.on(p.EventType.TOUCH_END,this.restart,this);for(var e=0;e<3;e++){var t=g(this.prefabPipa),i=t.getPosition();t.setPosition(i),t.setParent(this.node.parent),t.setSiblingIndex(-3),this.pipaNodes.push(t)}var r=this.gameOverSprite.getPosition();r.y=-190,this.gameOverSprite.setPosition(r),this.bloop.active=!1},s.updateTime=function(){this.currentSpeed+=1},s.update=function(e){var t=this;if(0===this.temp&&(this.currentSpeed=2*(this.currentSpeed-15),this.temp=-5),console.log(this.currentTime),console.log(this.currentSpeed),this.gameStart)if(this.gameStartSprite.active=!1,this.gameover){this.pipaNodes.forEach((function(i){var r=i.getPosition();r.y-=t.currentSpeed*e,i.setPosition(r);var o=t.nodeBird.getPosition();t.deadJump-=t.gravity,o.y+=t.deadJump,o.x-=1,t.nodeBird.setPosition(o),t.nodeBird.angle+=10}));var i=this.gameOverSprite.getPosition();i.y>50||(i.y+=5,this.gameOverSprite.setPosition(i),0==i.y&&this.die.play())}else{this.pipaNodes.forEach((function(i){var r=i.getPosition();r.y>-100?(r.y-=.5,i.setPosition(r)):(r.y-=t.currentSpeed*e,r.y<=-550?(r.y=0,r.x=t.getRandomXPosition(),i.setPosition(r)):i.setPosition(r))}));var r=this.ScoringLine.getPosition();r.y>-100?(r.y-=.5,this.ScoringLine.setPosition(r)):(r.y-=this.currentSpeed*e,r.y<=-550?(r.y=0,this.ScoringLine.setPosition(r),this.incrementScore()):this.ScoringLine.setPosition(r)),this.scoreLabel.string=""+this.score}this.gameRestart&&(this.size+=1,this.bloop.setPosition(0,0),this.size<40?(this.bloop.setScale(this.size,this.size,1),this.bloop.angle+=10):y.loadScene("Home"))},s.getRandomXPosition=function(){for(var e=[-210,-140,-70,0],t=Math.floor(Math.random()*e.length);-210===e[t]&&this.pos1||-140===e[t]&&this.pos2||-70===e[t]&&this.pos3||0===e[t]&&this.pos4;)t=Math.floor(Math.random()*e.length);switch(e[t]){case-210:this.pos1=!0;break;case-140:this.pos2=!0;break;case-70:this.pos3=!0;break;case 0:this.pos4=!0}return this.pos1&&this.pos2&&this.pos3&&this.pos4&&(this.pos1=!1,this.pos2=!1,this.pos3=!1,this.pos4=!1),e[t]},s.onCollide=function(){this.gameover=!0,this.hit.play()},s.gameStartPressed=function(){this.gameStart=!0},s.restartStart=function(){this.tryAgainSprite.setScale(1.2,1.2,1),this.bloop.active=!0,this.bloop.setScale(1,1,0)},s.restart=function(){this.gameRestart=!0},s.incrementScore=function(){this.success.play(),this.score++},t}(d)).prototype,"prefabPipa",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(N.prototype,"ScoringLine",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=t(N.prototype,"nodeBird",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(N.prototype,"gameOverSprite",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=t(N.prototype,"gameStartSprite",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(N.prototype,"tryAgainSprite",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=t(N.prototype,"scoreLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(N.prototype,"bloop",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=t(N.prototype,"hit",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(N.prototype,"die",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(N.prototype,"success",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=N))||A));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background-001.ts","./Background.ts","./Bird.ts","./BirdMovement.ts","./GameLogic.ts","./Screenshot.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Screenshot.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o,a,i,c,s,u,p,l,h,d,f,m,v,g,y,S;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,a=e.asyncToGenerator,i=e.regeneratorRuntime},function(e){c=e.cclegacy,s=e._decorator,u=e.Button,p=e.Node,l=e.Component,h=e.Texture2D,d=e.SpriteFrame,f=e.Vec3,m=e.find,v=e.Camera,g=e.RenderTexture,y=e.game,S=e.director}],execute:function(){var T,w,C,x,F;c._RF.push({},"6cdd59YgIdIhIuzxeLNqs5p","Screenshot",void 0);var B=s.ccclass,_=s.property;e("Screenshot",(T=B("Screenshot"),w=_(u),T((F=t((x=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,n(t,"captureButton",F,o(t)),t}r(t,e);var c=t.prototype;return c.start=function(){this.captureButton.node.on(p.EventType.TOUCH_END,this.onCaptureButtonClick,this)},c.onCaptureButtonClick=function(){var e=a(i().mark((function e(){var t,r,n,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m("Main Camera").getComponent(v),(r=new g).createNode({wid:y.canvas.width,height:y.canvas.height,colorFormat:g.PixelFormat.RGBA8888,depthStencilFormat:g.DepthStencilFormat.DEPTH_24_STENCIL_8}),t.targetTexture=r,e.next=6,S.render();case 6:t.targetTexture=null,(n=new h).image=r,(o=new d).texture=n,a=new p,a.addComponent(d).spriteFrame=o,a.setParent(this.node),a.position=new f(0,0,0),this.saveScreenshotToFile(n);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),c.saveScreenshotToFile=function(e){console.log("Screenshot saved!")},t}(l)).prototype,"captureButton",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=x))||C));c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});