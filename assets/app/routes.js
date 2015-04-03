var app = angular.module('appName');

// Set basic routes
app.config(/* @ngInject */ function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            url: "",
            views: {
                "FullContentView": { templateUrl: "start.html" }
            }
        })

    // Set a catch-all URL when no matching state can be found
    // If the url is ever invalid, e.g. '/jibberish', then redirect to '/' aka the home state
    $urlRouterProvider.otherwise('/404');

});