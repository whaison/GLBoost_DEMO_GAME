!function(e){function r(a){if(t[a])return t[a].exports;var o=t[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r){window.onload=function(){for(var e=new Object,r=location.search.substring(1).split("&"),t=0;r[t];t++){var a=r[t].split("=");e[a[0]]=a[1]}GLBoost.TARGET_WEBGL_VERSION=e.webglver?parseInt(e.webglver):1;var o=document.getElementById("world"),n=new GLBoost.GLBoostMiddleContext(o),s=n.createRenderer({clearColor:{red:1,green:.5,blue:.5,alpha:1}}),c=n.createScene(),d=n.createClassicMaterial(),l=n.createTexture("resources/texture.png");d.diffuseTexture=l;var i=n.createPlane(10,10,10,10,null),u=n.createMesh(i,d);c.addChild(u);var p=n.createCube(new GLBoost.Vector3(1,1,1),new GLBoost.Vector4(1,1,1,1)),v=n.createMesh(p,d);v.translate=new GLBoost.Vector3(0,2,0),c.addChild(v);var w=n.createPerspectiveCamera({eye:new GLBoost.Vector3(0,5,15),center:new GLBoost.Vector3(0,5,0),up:new GLBoost.Vector3(0,1,0)},{fovy:45,aspect:1,zNear:.1,zFar:300});c.addChild(w);var B=n.createExpressionAndRenderPasses(1);B.renderPasses[0].scene=c,B.prepareToRender();var G=function(){s.clearCanvas(),s.draw(B);var e=GLBoost.Matrix33.rotateY(-1),r=e.multiplyVector(w.eye);w.eye=r,requestAnimationFrame(G)};G()}}]);