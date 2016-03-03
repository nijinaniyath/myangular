(function(){

    'use strict';

    angular.module('app.global').
        constant('configuration', {
            idsrvurl: 'https://www.attinad.com:444/idsrv/issue/',
            clientid: 'mmclientimplicit',
            profileuri: 'https://www.attinad.com:444/meetingmanager/api/user',
            returnuri: 'https://localhost:9000/',
            scope: 'urn:meetingmanagerservice',
            authorizepath: 'oauth2/authorize',
            servicebase: 'https://www.attinad.com:444/meetingmanager/api/',
            sitebase:'/',
            signalrbase:'https://www.attinad.com:444/meetingmanager/'
        });

})();
