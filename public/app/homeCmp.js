angular.module('app')
    .component('home', {
        templateUrl: 'tmpl/home.html',
        controller: ['deviceSvc', 'valuesSvc', function (deviceSvc, valuesSvc) {
            var ctrl = this;

            ctrl.devices = [];
            ctrl.temperature = {};
            ctrl.humidity = {};
            ctrl.airquality = {};

            deviceSvc.getDevices().then(function (response) {
                ctrl.devices = response.data;
            });

            deviceSvc.getAllReadings().then(function (response) {
                valuesSvc.groupAndExtractData(
                    response.data,
                    ['temperature', 'humidity', 'airquality'],
                    ctrl
                );
            });
        }]
    });
