(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21dbad"],{d319:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),i=Object(o["h"])(" Projet Actuel "),l=Object(o["i"])("span",{class:"text-grey-dark text-center font-bold"},"> ",-1),a={class:"bg-white"};function c(t,e,n,c,r,u){var s=Object(o["x"])("router-link"),b=Object(o["x"])("MainHeader"),f=Object(o["x"])("FormulaireProjet"),d=Object(o["x"])("WelcomeLayout");return Object(o["r"])(),Object(o["e"])(d,null,{default:Object(o["F"])((function(){return[Object(o["i"])(b,{titre:" Modifier Projet"},{default:Object(o["F"])((function(){return[Object(o["i"])(s,{to:{path:"/actuel"},class:"text-blue-500 hover:text-blue-800 hover:font-bold"},{default:Object(o["F"])((function(){return[i]})),_:1}),l]})),_:1}),Object(o["i"])("main",a,[Object(o["i"])(f,{type:"modifier"})])]})),_:1})}var r=n("5061"),u=n("3ff6"),s=n("d7f7"),b={components:{WelcomeLayout:u["a"],MainHeader:r["a"],FormulaireProjet:s["a"]},data:function(){return{form:{title:null,description:null,collaborations:[]},SelectOption:"non",SelectPays:"1",selectColab:!1,international:!1}},methods:{add:function(){this.form.collaborations.push({etab:null,nom:null,prenom:null,fonction:null,pays:"algérie"})},remove:function(){this.form.collaborations.pop()},selectAction:function(){"oui"==this.SelectOption?this.selectColab=!0:this.selectColab=!1},selectType:function(){"2"==this.SelectPays?this.international=!0:this.international=!1}}};b.render=c;e["default"]=b}}]);
//# sourceMappingURL=chunk-2d21dbad.6c43530d.js.map