/**
 * Created by Nijin on 04-02-2016.
 */
(function(){
    'use strict';
    angular.module('app.resize')
        .directive('ideScreen',screenDirective);

    screenDirective.$inject = [];

    function screenDirective(){
        return {
            link:linkFunction,
            templateUrl:'app/screen/screen.directive.html',
            scope:{
              screen:'='
            },
            restrict:'E',
            replace:true
        }
        function linkFunction(scope, elem, attr){

        }
    }
})();