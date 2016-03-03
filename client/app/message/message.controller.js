/**
 * Created by Nijin on 15-12-2015.
 */
(function(){
    'use strict';

    angular.module('message')
        .controller('MessageController',MessageController);

    MessageController.$inject = ['inboxFactory'];

    function MessageController(inboxFactory){
        var vm = this;
        vm.messages = inboxFactory.messages;
        vm.password = '';
        vm.grade = grade;
        vm.ascSort = ascSort;
        vm.getMessages = getMessages;

        init();

        function init(){
            vm.getMessages();
           // console.info(vm.messages);
        }

        function getMessages(){
            inboxFactory
                .getMessages()
                .then(function () {
                    vm.messages = inboxFactory.messages;
                });
        }

        function grade() {
            var size = vm.password.length;
            if (size > 8) {
                vm.strength = 'strong';
            } else if (size > 3) {
                vm.strength = 'medium';
            } else {
                vm.strength = 'weak';
            }
        };

        function ascSort(message){
           message.sort(function compareNumbers(a, b) {
               return a - b;
           });
        }

    }
})();