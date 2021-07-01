(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1084f7d6"],{5061:function(t,e,o){"use strict";var a=o("7a23"),n={class:"bg-blue-100 shadow"},c={class:"max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-left"},r={class:"text-2xl font-bold leading-tight text-gray-900"};function i(t,e,o,i,l,s){return Object(a["r"])(),Object(a["e"])("header",n,[Object(a["i"])("div",c,[Object(a["i"])("h1",r,[Object(a["w"])(t.$slots,"default"),Object(a["h"])(" "+Object(a["z"])(o.titre),1)])])])}var l={props:["titre"]};l.render=i;e["a"]=l},"7cba":function(t,e,o){"use strict";o("b0c0");var a=o("7a23"),n={class:"max-w-8xl mx-auto sm:px-6 lg:px-4"},c={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},r={class:" md:grid md:grid-cols-4 md:gap-6 py-2 sm:px-3 lg:px-4 bg-white rounded-md  "},i={class:"md:col-span-4 px-3 sm:px-2"},l={class:"px-4 sm:px-0"},s=Object(a["i"])("div",{class:"bg-orange-50 overflow-hidden shadow sm:rounded-lg"},[Object(a["i"])("div",{class:" w-full h-10 px-4 pb-1 flex items-center justify-between  "},[Object(a["i"])("div",{class:"text-left px-2 py-4 text-xl flex items-center"},[Object(a["i"])("p",{class:"text-grey-800 font-bold"}," Remplir les informations du contrat ")])])],-1),d={class:"px-4 sm:px-0"},u={class:"overflow-hidden sm:rounded-md"},b={class:"px-2 py-2 bg-white sm:p-6 border-b"},p={class:"grid grid-cols-6 gap-6"},m={key:0,class:"col-span-6 sm:col-span-4"},f=Object(a["i"])("label",{for:"title",class:"block text-sm font-medium text-left text-black"},"Titre du contrat",-1),j={class:"w-1/3"},x={class:"col-span-6 sm:col-span-4  "},O={key:0,for:"nom",class:"block text-sm font-medium text-left text-black"},h={key:1,for:"nom",class:"block text-sm font-medium text-left text-black"},g={class:"w-1/3"},v={key:1,class:"col-span-6 sm:col-span-6"},w=Object(a["i"])("label",{for:"prenom",class:"block text-sm font-medium text-left text-black"},"Détail",-1),y={key:2,class:"col-span-6 sm:col-span-3"},k=Object(a["i"])("label",{for:"file",class:"block text-sm text-left font-medium text-black"}," Fichier ",-1),C=Object(a["i"])("input",{type:"file",name:"file",id:"file",placeholder:"Selectionner",class:"mt-1 border  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md",required:""},null,-1),_={class:"px-4 py-3 bg-gray-50 text-center sm:px-6"},$={type:"submit",class:"py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"},F={class:"flex items-center"},z=Object(a["i"])("svg",{class:"h-6 w-6 fill-current mr-2",viewBox:"0 0 20 20"},[Object(a["i"])("path",{d:"M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11h-4 v4H9v-4H5V9h4V5h2v4h4V11z"})],-1);function V(t,e,o,V,D,H){return Object(a["r"])(),Object(a["e"])("div",n,[Object(a["i"])("div",c,[Object(a["i"])("div",r,[Object(a["i"])("div",i,[Object(a["i"])("div",l,[s,Object(a["i"])("div",d,[Object(a["i"])("form",{onSubmit:e[4]||(e[4]=Object(a["H"])((function(){return H.saveContrat&&H.saveContrat.apply(H,arguments)}),["prevent"]))},[Object(a["i"])("div",u,[Object(a["i"])("div",b,[Object(a["i"])("div",p,["CreationContrat"===t.$route.name?(Object(a["r"])(),Object(a["e"])("div",m,[f,Object(a["i"])("div",j,[Object(a["G"])(Object(a["i"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return D.title=t}),type:"text",name:"title",id:"title",placeholder:"Titre",autocomplete:"given-name",class:"mt-1 px-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md",required:""},null,512),[[a["C"],D.title]])])])):Object(a["f"])("",!0),Object(a["i"])("div",x,["CreationContrat"===t.$route.name?(Object(a["r"])(),Object(a["e"])("label",O," Date de signature ")):Object(a["f"])("",!0),"RenouvlerContrat"===t.$route.name?(Object(a["r"])(),Object(a["e"])("label",h," Date de renouvlement ")):Object(a["f"])("",!0),Object(a["i"])("div",g,[Object(a["G"])(Object(a["i"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return D.date_sign=t}),type:"date",name:"date_sign",id:"date_sign",placeholder:"Date de signature",autocomplete:"given-name",class:"block w-full px-3  transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",required:""},null,512),[[a["C"],D.date_sign]])])]),"CreationContrat"===t.$route.name?(Object(a["r"])(),Object(a["e"])("div",v,[w,Object(a["G"])(Object(a["i"])("textarea",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return D.detail=t}),maxlength:"300",name:"detail",id:"detail",rows:"10",cols:"80",class:"mt-1 px-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md",placeholder:"Détail",required:""},null,512),[[a["C"],D.detail]])])):Object(a["f"])("",!0),"CreationContrat"===t.$route.name?(Object(a["r"])(),Object(a["e"])("div",y,[k,C])):Object(a["f"])("",!0)])]),Object(a["i"])("div",_,[Object(a["i"])("button",$,[Object(a["i"])("div",F,[z,Object(a["i"])("h3",null,Object(a["z"])(o.button),1)])])])])],32)])])])])])])}var D=o("bc3a"),H=o.n(D),R={props:["button","id"],data:function(){return{title:"",date_sign:"",detail:"",file:null}},methods:{saveContrat:function(){"Renouvler"!=this.button?this.postContrat():this.updateContrat()},postContrat:function(){var t=this,e=localStorage.getItem("token"),o={title:this.title,date_sign:this.date_sign,detail:this.detail};console.log(o),H()({method:"post",url:"https://django-app-dpgr.herokuapp.com/v1/api/contrats/",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},data:o}).then((function(e){200==e.status&&(alert("le contrat  est ajouté avec succées "),t.$router.push({path:"/actuel/contrat"}))})).catch((function(t){return console.log(t)}))},updateContrat:function(){var t=this,e=localStorage.getItem("token"),o={id:this.id,date_ren:this.date_sign};H.a.put("https://django-app-dpgr.herokuapp.com/v1/api/contrats/",o,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){200==e.status&&(alert("le contrat  est renouvlé avec succées "),t.$router.push({path:"/actuel/contrat"}))})).catch((function(t){return console.log(t)}))}},mounted:function(){console.log(this.id)}};R.render=V;e["a"]=R},c833:function(t,e,o){"use strict";o.r(e);var a=o("7a23"),n=Object(a["h"])("Projet Actuel"),c=Object(a["i"])("span",{class:"text-grey-dark text-center font-bold"}," > ",-1),r=Object(a["h"])("Contrat"),i=Object(a["i"])("span",{class:"text-grey-dark text-center font-bold"}," > ",-1),l={class:"bg-white"};function s(t,e,o,s,d,u){var b=Object(a["x"])("router-link"),p=Object(a["x"])("MainHeader"),m=Object(a["x"])("FormulaireContrat"),f=Object(a["x"])("welcome-layout");return Object(a["r"])(),Object(a["e"])(f,null,{default:Object(a["F"])((function(){return[Object(a["i"])(p,{titre:"Renouvler Contrat"},{default:Object(a["F"])((function(){return[Object(a["i"])(b,{to:{path:"/actuel"},class:"text-blue-500   hover:text-blue-800 hover:font-bold"},{default:Object(a["F"])((function(){return[n]})),_:1}),c,Object(a["i"])(b,{to:{path:"/actuel/contrat"},class:"text-blue-500   hover:text-blue-800 hover:font-bold"},{default:Object(a["F"])((function(){return[r]})),_:1}),i]})),_:1}),Object(a["i"])("main",l,[Object(a["i"])(m,{button:"Renouvler",id:o.id},null,8,["id"])])]})),_:1})}var d=o("7cba"),u=o("3ff6"),b=o("5061"),p={props:["id"],components:{WelcomeLayout:u["a"],FormulaireContrat:d["a"],MainHeader:b["a"]}};p.render=s;e["default"]=p}}]);
//# sourceMappingURL=chunk-1084f7d6.abc1e10c.js.map