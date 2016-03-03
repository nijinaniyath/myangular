/**
 * Created by Nijin on 22-12-2015.
 */
(function(){
    'use strict';
    angular.module('app.resize',[

    ])
        .run(['$templateCache',function($templateCache){
            $templateCache.put("app/global/test.html",[
                '<li> <input type="checkbox" id="item-0" /><label for="item-0">This Folder is Closed By Default</label>{{container.GeneralProperties.UId}}</li>',
                '<ul class="child">',
                   '<ide-container ng-repeat="hcontainer in container.HContainers" container = "hcontainer"></ide-container>',
                   '<ide-container ng-repeat="vcontainer in container.VContainers" container = "vcontainer"></ide-container>',
                   '<li ng-repeat="btn in container.Buttons"><a href="./">{{btn.GeneralProperties.UId}}</a></li>',
                   '<li ng-repeat="cs in container.CodeScanners"><a href="./">{{cs.GeneralProperties.UId}}</a></li>',
                   '<li ng-repeat="rb in container.RadioButtons"><a href="./">{{rb.GeneralProperties.UId}}</li>',
            '</ul>'
            ].join(''));
            $templateCache.put("app/global/hcontainer.html",[

                '<div class="hcontainer">',
                    '<ide-hcontainer ng-repeat="hcon in container.HContainers" container="hcon"></ide-hcontainer>',
                    '<ide-vcontainer ng-repeat="vcon in container.VContainers" container="vcon"></ide-vcontainer>',
                    '<ide-button ng-repeat="button in container.Buttons"></ide-button>',
                '</div>'
            ].join(''));
            $templateCache.put("app/global/vcontainer.html",[

                '<div class="vcontainer">',
                '<ide-hcontainer ng-repeat="hcon in container.HContainers" container="hcon"></ide-hcontainer>',
                '<ide-vcontainer ng-repeat="vcon in container.VContainers" container="vcon"></ide-vcontainer>',
                '<ide-button ng-repeat="button in container.Buttons"></ide-button>',
                '</div>'
            ].join(''));
        }])
})();