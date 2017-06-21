(function() {
    function config($locationProvider, $stateProider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requiredBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    angular
        .module('blocChat', ['ui.router','firebase'])
        .config(config);

})();
