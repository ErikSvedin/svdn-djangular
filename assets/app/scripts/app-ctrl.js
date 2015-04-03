(function(){

    angular.module('appName').
        controller('AppCtrl', Ctrl);

    /* @ngInject */
    function Ctrl(){

        this.values = {
            first: 5,
            second: 10
        }

    }

})();

