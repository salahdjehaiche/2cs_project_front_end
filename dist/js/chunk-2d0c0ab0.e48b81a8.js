(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0ab0"],{4383:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),i={class:"bg-white"};function a(t,e,n,a,l,c){var r=Object(o["x"])("MainHeader"),u=Object(o["x"])("FormulaireProjet"),s=Object(o["x"])("WelcomeLayout");return Object(o["r"])(),Object(o["e"])(s,null,{default:Object(o["F"])((function(){return[Object(o["i"])(r,{titre:" Soumettre un projet"}),Object(o["i"])("main",i,[Object(o["i"])(u,{type:"creer"})])]})),_:1})}var l=n("5061"),c=n("3ff6"),r=n("d7f7"),u={components:{WelcomeLayout:c["a"],MainHeader:l["a"],FormulaireProjet:r["a"]},data:function(){return{form:{title:null,description:null,collaborations:[]},SelectOption:"non",SelectPays:"1",selectColab:!1,international:!1}},methods:{add:function(){this.form.collaborations.push({etab:null,nom:null,prenom:null,fonction:null,pays:"algérie"})},remove:function(){this.form.collaborations.pop()},selectAction:function(){"oui"==this.SelectOption?this.selectColab=!0:this.selectColab=!1},selectType:function(){"2"==this.SelectPays?this.international=!0:this.international=!1}}};u.render=a;e["default"]=u}}]);
//# sourceMappingURL=chunk-2d0c0ab0.e48b81a8.js.map