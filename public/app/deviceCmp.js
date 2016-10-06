angular.module('app')
    .component('device', {
        bindings: {
            id: '@',
            name: '@'
        },
        templateUrl: 'tmpl/device.html',
        controller: ['deviceSvc', '$location', 'valuesSvc', function (deviceSvc, $location, valuesSvc) {
            var ctrl = this;

            ctrl.temperature = {};
            ctrl.humidity = {};
            ctrl.airquality = {};


            deviceSvc.getReadingsForDevice(ctrl.id).then(function (response) {
                valuesSvc.groupAndExtractData(
                    response.data,
                    ['temperature', 'humidity', 'airquality'],
                    ctrl
                );
            });

            ctrl.deleteDevice = function () {
                deviceSvc.deleteDevice(ctrl.id).then(function () {
                    $location.path('/');
                });
            };

            ctrl.addReading = function () {
                $location.path('/newreading/' + ctrl.id + '/' + ctrl.name);
            };
        }]
    });
