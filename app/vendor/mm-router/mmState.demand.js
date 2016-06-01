/**
 * Created by otherlite on 2015/12/8.
 */
require('imports?require=>false!mmState');
//require('mmState')
avalon.demandLoad = function(callback){
    return {
        controllerProvider:function(){
            var deferred = Promise.defer();
            var deferred2 = Promise.defer();
            callback(deferred2);
            deferred2.promise.done(function (route) {
                var controller = route.controller;
                deferred.resolve(controller);
            });
            return deferred.promise;
        },
        templateProvider:function(){
            var deferred = Promise.defer();
            var deferred2 = Promise.defer();
            callback(deferred2);
            deferred2.promise.done(function (route) {
                var template = route.template;
                deferred.resolve(template);
            });
            return deferred.promise;
        }
    }
}
