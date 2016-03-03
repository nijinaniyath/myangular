/**
 * Created by Nijin on 25-11-2015.
 */
(function(){

    'use strict';

    angular.module('demoApp',[
        'app.global',
        'app.resize',
        'ngResource'
    ]).config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('resize', {
                url: "/resize",
                templateUrl: "app/resize/resize.html",
                controller: 'resizeController as resize'
            });
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/message/home.html",
                controller: 'resizeController as resize'
            })
    });




})();