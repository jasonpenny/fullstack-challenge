angular.module('app')
    .component('newReading', {
        bindings: {
            id: '@',
            name: '@'
        },
        templateUrl: 'tmpl/newreading.html',
        controller: ['deviceSvc', '$location', function (deviceSvc, $location) {
            var ctrl = this;

            ctrl.submit = function (isValid) {
                if (isValid) {
                    var createdAt = null;
                    if (ctrl.createdAt) {
                        createdAt = ctrl.createdAt.toISOString();
                    }

                    deviceSvc.addNewReading(ctrl.id, ctrl.value, ctrl.type, createdAt)
                        .then(function () {
                            // TODO : redirect to device page or notify user and allow adding another new reading
                            console.log('finished addNewReading');
                        });
                }
            };
        }]
    });
