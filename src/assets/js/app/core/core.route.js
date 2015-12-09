(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            },
            //{
            //    state: 'access_token',
            //    config: {
            //        url: '/access_token={accessToken}',
            //        //templateUrl: 'app/dashboard/dashboard.html',
            //        controller:['$location' , function($location) {
            //            console.log($location);
            //            //This is a state to capture the token, and a hack to let oauth-ng find the right hash
            //            $location.$$hash = $location.$$path.substring(1);
            //            //$state.go('patients');
            //        }]
            //    }
            //}
        ];
    }
})();
