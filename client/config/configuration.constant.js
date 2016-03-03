(function(){

    'use strict';

    angular.module('app.global').
        constant('configuration', {
            idsrvurl: '@@idsrvurl',
            clientid: '@@clientid',
            profileuri: '@@profileuri',
            returnuri: '@@returnuri',
            scope: '@@scope',
            authorizepath: '@@authorizepath',
            servicebase: '@@servicebase',
            sitebase:'@@sitebase',
            signalrbase:'@@signalrbase'
        });

})();
