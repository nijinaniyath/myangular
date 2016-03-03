/**
 * Created by Nijin on 02-02-2016.
 */
(function(){
    'use strict';
    angular.module('app.resize')
        .service('resizeService',resizeService);

    resizeService.$inject = ['$resource'];
    function resizeService($resource){

        var Token = $resource('https://www.attinad.com:444/idsrvnew/issue/oauth2/token',{},{
            'getToken':{
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' :'Basic bW1jbGllbnQ6bm9yWkdzNXZrdytjbWxLUk9hemF1TXJaSW5XOWpva3hJUkNtbmRNd2Mrbz0='
                }

            }
        });
        var data = [
            {
                name:'one',
                Hcontainer:[
                    {
                        name:'Two',
                        Buttons:[{
                            Value:'Button',
                            StyleProperties:{
                                backgroundColor:'red',
                                fontSize:12,
                                Height:60,
                                Width:60
                            }
                        },
                            ],
                        Hcontainer:[
                            {
                                name:'Three',
                                Hcontainer:[
                                    {
                                        name:'Three.1',Hcontainer:[]},
                                    {},
                                    {},

                                ]
                            }
                        ]
                    }
                ]
            },
        ]
        var screen = {"HContainers":[{"GeneralProperties":{"ChildWidths":null,"UId":"CRTHC-PROHCON5278","Id":null,"XPosition":null,"YPosition":0.0,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"HAlign":null,"VAlign":null,"Height":83.74,"Width":99.13,"ParentLevels":null,"WidgetType":null,"IsOverlay":false},"StyleProperties":{"BackgroundColor":null,"ImageId":null,"ImageData":null},"HContainers":[{"GeneralProperties":{"ChildWidths":null,"UId":"CRTHC-PROHCON8523","Id":null,"XPosition":0.0,"YPosition":null,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"HAlign":null,"VAlign":null,"Height":45.77,"Width":96.92,"ParentLevels":null,"WidgetType":null,"IsOverlay":false},"StyleProperties":{"BackgroundColor":null,"ImageId":null,"ImageData":null},"HContainers":[{"GeneralProperties":{"ChildWidths":null,"UId":"CRTHC-PROHCON6319","Id":null,"XPosition":0.0,"YPosition":null,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"HAlign":null,"VAlign":null,"Height":44.73,"Width":95.87,"ParentLevels":null,"WidgetType":null,"IsOverlay":false},"StyleProperties":{"BackgroundColor":null,"ImageId":null,"ImageData":null},"HContainers":[],"VContainers":[],"Buttons":[{"GeneralProperties":{"TextAlign":"CENTER","LineCount":null,"Clickable":true,"UId":"CRTB-PRO6825","Id":"3439","XPosition":0,"YPosition":4,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"Enable":true,"Name":null,"SubType":null,"Value":"button","HAlign":null,"VAlign":null,"Height":50.0,"Width":25.0,"MappedTableId":null,"MappedControlId":null,"MappedToCheckbox":null,"ParentLevels":"//CRTHC-PROHCON5278/CRTHC-PROHCON8523/CRTHC-PROHCON6319"},"ActionProperties":{"IsEnabled":false,"IsCustom":false,"Name":null,"Parameters":{}},"StyleProperties":{"OnFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}},"OffFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}}}}],"Labels":[],"CheckBoxes":[],"RadioButtons":[{"GeneralProperties":{"Clickable":true,"Dimension":"1x2","UId":"CRTRB-PRO5551","Id":"3442","XPosition":53,"YPosition":0,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"Enable":true,"Name":null,"SubType":null,"Value":"","HAlign":null,"VAlign":null,"Height":25.0,"Width":25.0,"MappedTableId":null,"MappedControlId":null,"MappedToCheckbox":null,"ParentLevels":"//CRTHC-PROHCON5278/CRTHC-PROHCON8523/CRTHC-PROHCON6319"},"ActionProperties":{"IsEnabled":false,"IsCustom":false,"Name":null,"Parameters":{}},"StyleProperties":{"OnFocus":{"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}},"OffFocus":{"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}}},"RadioItemProperties":[{"RadioUId":"CRTRI-5551-6830","Id":"3443","Selected":false,"Value":"1","MappedControlId":null,"Width":50,"Height":50,"IsNew":null,"IsRemoval":null,"Position":0},{"RadioUId":"CRTRI-5551-6107","Id":"3444","Selected":false,"Value":"2","MappedControlId":null,"Width":50,"Height":50,"IsNew":null,"IsRemoval":null,"Position":1}]}],"TextBoxes":[],"DynamicImages":[],"DatePickers":[],"HiddenControls":[],"ComboBoxes":[],"ImageViews":[],"DrawingPanels":[],"CodeScanners":[],"MapViews":[],"SearchControls":[],"LineCharts":[],"BarGraphs":[]}],"VContainers":[],"Buttons":[{"GeneralProperties":{"TextAlign":"CENTER","LineCount":null,"Clickable":true,"UId":"CRTB-PRO6933","Id":"3445","XPosition":211,"YPosition":0,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"Enable":true,"Name":null,"SubType":null,"Value":"button","HAlign":null,"VAlign":null,"Height":50.0,"Width":25.0,"MappedTableId":null,"MappedControlId":null,"MappedToCheckbox":null,"ParentLevels":"//CRTHC-PROHCON5278/CRTHC-PROHCON8523"},"ActionProperties":{"IsEnabled":false,"IsCustom":false,"Name":null,"Parameters":{}},"StyleProperties":{"OnFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}},"OffFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}}}}],"Labels":[],"CheckBoxes":[],"RadioButtons":[],"TextBoxes":[],"DynamicImages":[],"DatePickers":[],"HiddenControls":[],"ComboBoxes":[],"ImageViews":[],"DrawingPanels":[],"CodeScanners":[],"MapViews":[],"SearchControls":[],"LineCharts":[],"BarGraphs":[]}],"VContainers":[],"Buttons":[{"GeneralProperties":{"TextAlign":"CENTER","LineCount":null,"Clickable":true,"UId":"CRTB-PRO1398","Id":"3440","XPosition":220,"YPosition":0,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"Enable":true,"Name":null,"SubType":null,"Value":"button","HAlign":null,"VAlign":null,"Height":50.0,"Width":25.0,"MappedTableId":null,"MappedControlId":null,"MappedToCheckbox":null,"ParentLevels":"//CRTHC-PROHCON5278"},"ActionProperties":{"IsEnabled":false,"IsCustom":false,"Name":null,"Parameters":{}},"StyleProperties":{"OnFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}},"OffFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}}}},{"GeneralProperties":{"TextAlign":"CENTER","LineCount":null,"Clickable":true,"UId":"CRTB-PRO7243","Id":"3441","XPosition":277,"YPosition":0,"TopPad":0.0,"BottomPad":0.0,"LeftPad":0.0,"RightPad":0.0,"Enable":true,"Name":null,"SubType":null,"Value":"button","HAlign":null,"VAlign":null,"Height":50.0,"Width":25.0,"MappedTableId":null,"MappedControlId":null,"MappedToCheckbox":null,"ParentLevels":"//CRTHC-PROHCON5278"},"ActionProperties":{"IsEnabled":false,"IsCustom":false,"Name":null,"Parameters":{}},"StyleProperties":{"OnFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}},"OffFocus":{"ArcRadius":null,"TextColor":null,"BackgroundColor":null,"ImageId":null,"ImageData":null,"FontStyle":{"Underline":null,"Bold":null,"Italics":null,"Family":null,"Size":null}}}}],"Labels":[],"CheckBoxes":[],"RadioButtons":[],"TextBoxes":[],"DynamicImages":[],"DatePickers":[],"HiddenControls":[],"ComboBoxes":[],"ImageViews":[],"DrawingPanels":[],"CodeScanners":[],"MapViews":[],"SearchControls":[],"LineCharts":[],"BarGraphs":[]}],"VContainers":[],"Tab":null,"ScreenUId":"CRTS-PRO5976","ScreenId":"Home","ExistingScreenUId":null,"CopyFromExistingOrientation":false,"ScreenOrientation":{"Value":"Portrait","LandscapeId":null,"PortraitId":"Home"},"DocumentType":null,"StyleProperties":{"BackgroundColor":null,"ImageId":null,"ImageData":null},"Title":null,"IsStartup":null,"IsTabbedView":false,"HasMenu":false,"ScreenUpdateTime":"2016-02-25T12:36:58.577Z","IsDataIterative":{"Value":null,"MappedSet":null,"TableId":null},"Menu":null}
        var service = {
            doLogin : Token.getToken,
            all : all,
            add:add,
            data:data,
            screen:screen,
            remove:remove
        }
       return service;

        function doLogin(data){
            var loginData='grant_type=password&username='+data.username+'&password='+data.password+'&scope='+data.scope
            return Token.getToken(loginData);
        }
        function all(){
            return data;
        }
        function add(){
           data[0].Hcontainer[0].Buttons.push( { Value: 'Button',
               StyleProperties: {
                   backgroundColor: 'red',
                   fontSize: 12,
                   Height: 60,
                   Width: 40,
                   Top:0

               }
           })

        }
       function remove(){
           data[0].Hcontainer[0].Buttons.splice(0,1);
       }
    }
})();