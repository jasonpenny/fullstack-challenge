angular.module('app')
    .component('newDevice', {
        templateUrl: 'tmpl/newdevice.html',
        controller: ['deviceSvc', '$location', function (deviceSvc, $location) {
            var ctrl = this;

            ctrl.submit = function (isValid) {
                if (isValid) {
                    deviceSvc.addNewDevice(ctrl.name).then(function (response) {
                        if (response.data.id) {
                            $location.path('/device/' + response.data.id + '/' + response.data.name);
                        } else {
                            $location.path('/');
                        }
                    });
                }
            };
        }]
    });
