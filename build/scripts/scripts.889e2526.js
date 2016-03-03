!function(){angular.module("app.global",["ui.router"])}(),function(){"use strict";angular.module("message",[])}(),function(){"use strict";angular.module("app.resize",[])}(),function(){"use strict";angular.module("demoApp",["app.global","app.resize"]).config(["$stateProvider",function($stateProvider){$stateProvider.state("resize",{url:"/resize",templateUrl:"app/resize/resize.html",controller:"resizeController as resize"})}])}(),function(){"use strict";angular.module("app.global").constant("configuration",{idsrvurl:"https://www.attinad.com:444/idsrv/issue/",clientid:"mmclientimplicit",profileuri:"https://www.attinad.com:444/meetingmanager/api/user",returnuri:"https://localhost:9000/",scope:"urn:meetingmanagerservice",authorizepath:"oauth2/authorize",servicebase:"https://www.attinad.com:444/meetingmanager/api/",sitebase:"/",signalrbase:"https://www.attinad.com:444/meetingmanager/"})}(),function(){"use strict";function MessageController(inboxFactory){function init(){getMessages()}function getMessages(){inboxFactory.getMessages().then(function(){vm.messages=inboxFactory.messages})}var vm=this;vm.messages=inboxFactory.messages,init()}angular.module("message").controller("MessageController",MessageController),MessageController.$inject=["inboxFactory"]}(),function(){"use strict";function resizeController(){}angular.module("app.resize").controller("resizeController",resizeController),resizeController.$inject=[]}(),function(){"use strict";angular.module("app.resize").directive("resizable",function(){return{restrict:"AE",scope:{rDirections:"=",rCenteredX:"=",rCenteredY:"=",rWidth:"=",rHeight:"=",rFlex:"="},link:function(scope,element,attr){function addHandler(directions){for(var i=0;i<directions.length;i++)!function(){var grabber=document.createElement("div"),direction=directions[i];grabber.setAttribute("class","rg-"+direction),grabber.innerHTML="<span></span>",element[0].appendChild(grabber),grabber.ondragstart=function(){return!1},grabber.addEventListener("mousedown",function(e){dragStart(e,direction)},!1)}()}element.on("click",function(){addHandler(["right","bottom"]),element.addClass("ide-resize-active")}),element.addClass("resizable");var w,h,start,dragDir,axis,style=window.getComputedStyle(element[0],null),vx=(scope.rDirections,scope.rCenteredX?2:1),vy=scope.rCenteredY?2:1,info={},updateInfo=function(){info.width=!1,info.height=!1,"x"==axis?info.width=scope.rFlex?parseInt(element[0].style.flexBasis):parseInt(element[0].style.width):info.height=scope.rFlex?parseInt(element[0].style.flexBasis):parseInt(element[0].style.height),info.id=element[0].id},dragging=function(e){var offset="x"==axis?start-e.clientX:start-e.clientY;switch(dragDir){case"top":scope.rFlex?element[0].style.flexBasis=h+offset*vy+"px":element[0].style.height=h+offset*vy+"px";break;case"right":scope.rFlex?element[0].style.flexBasis=w-offset*vx+"px":element[0].style.width=w-offset*vx+"px";break;case"bottom":scope.rFlex?element[0].style.flexBasis=h-offset*vy+"px":element[0].style.height=h-offset*vy+"px";break;case"left":scope.rFlex?element[0].style.flexBasis=w+offset*vx+"px":element[0].style.width=w+offset*vx+"px"}},dragEnd=function(e){updateInfo(),scope.$emit("angular-resizable.resizeEnd",info),scope.$apply(),document.removeEventListener("mouseup",dragEnd,!1),document.removeEventListener("mousemove",dragging,!1),element.removeClass("no-transition")},dragStart=function(e,direction){dragDir=direction,axis="left"==dragDir||"right"==dragDir?"x":"y",start="x"==axis?e.clientX:e.clientY,w=parseInt(style.getPropertyValue("width")),h=parseInt(style.getPropertyValue("height")),element.addClass("no-transition"),document.addEventListener("mouseup",dragEnd,!1),document.addEventListener("mousemove",dragging,!1),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,updateInfo(),scope.$emit("angular-resizable.resizeStart",info),scope.$apply()}}}})}();