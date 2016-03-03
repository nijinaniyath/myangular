/**
 * Created by Nijin on 12-02-2016.
 */
describe('MessageController', function() {
    var $controller;
    var vm, $scope = {}, $timeout, messageFactory, $q, deferred, messages,$rootScope;
    beforeEach(module('message'));

    beforeEach(function(){
         messageFactory = {
             messages:[],
             getMessages: function(){
                messages = [{Id:1, Message:'helloo '},{Id:1, Message:'helloo '}];
                deferred = $q.defer();
                messageFactory.messages = messages;
                return deferred.promise;
            }
        }
    })

    beforeEach(inject(function( _$controller_, _$timeout_, _$q_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $timeout = _$timeout_;
        $q = _$q_;
        $rootScope = _$rootScope_;

        vm = $controller('MessageController', { inboxFactory :messageFactory});

    }));

    describe('vm.grade', function() {

        it('sets the strength to "strong" if the password length is >8 chars', function() {
            vm.password = 'nijinaniyath';
            vm.grade();
            expect(vm.strength).toEqual('strong');
        });

    describe('vm.sort',function(){

        it('sort the array in ascending order',function(){
            var message = [2,4,1,3,7,6]
            vm.ascSort(message);
            expect(message).toEqual([1,2,3,4,6,7]);
        })
    });

        describe('vm.getMessage',function(){
           it('fetch the messages from inbox factory', function(){
               spyOn(messageFactory,'getMessages').andCallThrough();
               vm.getMessages();
               expect(messageFactory.getMessages).toHaveBeenCalled();
               deferred.resolve(messages);
               $rootScope.$digest();
               expect(vm.messages.length).toEqual(2);
            })
        });

    });

});