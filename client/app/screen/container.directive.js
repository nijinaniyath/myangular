/**
 * Created by Nijin on 04-02-2016.
 */
(function(){
    'use strict';
angular.module('app.resize')
    .directive('ideContainer',hcontainerDirective);
hcontainerDirective.$inject = ['$compile','$templateCache'];

function hcontainerDirective($compile, $templateCache){
    return{
        restrict:'E',
        // templateUrl:'app/screen/hcon.html',
        scope:{
            container:'=',
            currentHcon:'='
        },
        //replace:true,
        link:linkFunction
    }
    function linkFunction(scope, element, attr){
        element.replaceWith(
            $compile(
                $templateCache.get('app/global/test.html')
            )(scope))
    }
}

})();

(function(){
    'use strict';
    angular.module('app.resize')
        .directive('ideButton',buttonDirective);

    buttonDirective.$inject = ['$compile','$templateCache'];

    function buttonDirective($compile, $templateCache){
        return{
            restrict:'E',
            templateUrl:'app/screen/button.html',
            scope:{
                controlData:'='
            },
            //replace:true,
            link:linkFunction
        }
        function linkFunction(scope, element, attr){
            scope.absoluteDim = {
                Height : (element.parent()[0].offsetHeight * scope.controlData.StyleProperties.Height)/100 + 'px',
                Width : (element.parent()[0].offsetWidth * scope.controlData.StyleProperties.Width)/100 + 'px'

        }
        }
    }

})();
(function(){
    'use strict';
    angular.module('app.resize')
        .directive('ideHcontainer',hcontainerDirective);
    hcontainerDirective.$inject = ['$compile','$templateCache'];

    function hcontainerDirective($compile, $templateCache){
        return{
            restrict:'E',
            // templateUrl:'app/screen/hcon.html',
            scope:{
                container:'=',
                currentHcon:'='
            },
            //replace:true,
            link:linkFunction
        }
        function linkFunction(scope, element, attr){
            element.replaceWith(
                $compile(
                    $templateCache.get('app/global/hcontainer.html')
                )(scope))
        }
    }

})();
(function(){
    'use strict';
    angular.module('app.resize')
        .directive('ideVContainer',hcontainerDirective);
    vcontainerDirective.$inject = ['$compile','$templateCache'];

    function vcontainerDirective($compile, $templateCache){
        return{
            restrict:'E',
            // templateUrl:'app/screen/hcon.html',
            scope:{
                container:'=',
                currentHcon:'='
            },
            //replace:true,
            link:linkFunction
        }
        function linkFunction(scope, element, attr){
            element.replaceWith(
                $compile(
                    $templateCache.get('app/global/vcontainer.html')
                )(scope))
        }
    }

})();