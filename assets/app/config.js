(function(){
    'use strict';

    var app = angular.module('appName');


    // Set up the angular-translate plugin
    //app.config(['$translateProvider', function($translateProvider){
    //    $translateProvider.useStaticFilesLoader({
    //        prefix: window.CONFIG.STATIC_URL + 'lang/locale-',
    //        suffix: '.json'
    //    });
    //    $translateProvider.preferredLanguage(window.CONFIG.LANGUAGE);
    //}]);

    app.config(/* @ngInject */ function($locationProvider){
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');
    });

})();