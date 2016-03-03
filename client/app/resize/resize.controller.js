/**
 * Created by Nijin on 23-12-2015.
 */
(function(){
    'use strict';
    angular.module('app.resize')
        .controller('resizeController',resizeController);

    resizeController.$inject = ['$resource','resizeService'];

    function resizeController($resource,resizeService){
          var vm = this;
          var User = $resource('http://localhost:4320/api/actionproperty?controlType=:controlType', {},{

            get:{
                headers:{'Content-Type': 'application/json',authorization:'A9BBEA417254C9F70863F40FB0800A07'},
                params:{actionType:'@controlType'}
            }
          }
          );
        vm.button = 'Say Hello';
        vm.doLogin = function(){
            var data = {
                username : 'tamo.rules.the.world@gmail.com',
                password : 'attinad@123',
                scope : 'urn:meetingmanagerservice',
                grant_type : 'password'
            }
            var loginData='grant_type=password&username='+data.username+'&password='+data.password+'&scope='+data.scope
            User.get({controlType:'Button'},function(user) {
                vm.user = user;
                console.info(user);
            });
        }

        vm.screenData = resizeService.screen;
        vm.add = function (){
            resizeService.add();
        }
        vm.delete = function(){
            resizeService.remove();
        }

    }

})();