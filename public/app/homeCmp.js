angular.module('app')
    .component('home', {
        templateUrl: 'tmpl/home.html',
        controller: ['deviceSvc', function (deviceSvc) {
            var ctrl = this;

            ctrl.devices = [];

            deviceSvc.getDevices().then(function (response) {
                ctrl.devices = response.data;
            });
        }]
    });
