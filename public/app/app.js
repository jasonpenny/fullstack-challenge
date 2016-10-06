angular
    .module('app', [
        'ngRoute',
        'chart.js',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',
        'angular-confirm'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { template: '<home></home>' })
            .when('/newdevice', { template: '<new-device></new-device>' })
            .when('/device/:id/:name', {
                template: function (params) {
                    return '<device id="' + params.id + '" name="' + params.name + '"></device>';
                }
            })
            .when('/newreading/:id/:name', {
                template: function (params) {
                    return '<new-reading id="' + params.id + '" name="' + params.name + '"></new-reading>';
                }
            })
            .otherwise({
                template: '<div class="container">Not found</div>'
            });
    }]);
