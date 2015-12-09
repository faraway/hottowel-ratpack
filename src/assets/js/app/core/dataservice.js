(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('https://certify-rhel-01.corp.certifydatasystems.com:8245/hl/1.4/fhir/AuditEvent?format=json')
                .then(success)
                .catch(fail);

            function success(response) {
                console.log('response data...');
                console.log(response);
                return response.data.entry;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }
})();
