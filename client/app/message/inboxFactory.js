/**
 * Created by Nijin on 15-12-2015.
 */
(function(){
    'use strict';

    angular.module('message').
        factory('inboxFactory',inboxFactory);

    inboxFactory.$inject = ['$http'];

    function inboxFactory($http){
        inboxFactory.messages = [];

        var service = {
           getMessages : getMessages
       }

        return service;

        function getMessages(){
            return $http.get('/messages')
                .success(function (data) {
                    // magic line, we resolve the data IN the factory!
                    inboxFactory.messages = data;
                })
                .error(function () {

                })
        }
    }
})()