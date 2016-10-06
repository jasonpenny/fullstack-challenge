angular.module('app')
    .component('newReading', {
        bindings: {
            id: '@',
            name: '@'
        },
        templateUrl: 'tmpl/newreading.html',
        controller: ['deviceSvc', '$location', '$confirm', function (deviceSvc, $location, $confirm) {
            var ctrl = this;

            ctrl.submit = function (isValid) {
                if (isValid) {
                    var createdAt = null;
                    if (ctrl.createdAt) {
                        createdAt = ctrl.createdAt.toISOString();
                    }

                    deviceSvc.addNewReading(ctrl.id, ctrl.value, ctrl.type, createdAt)
                        .then(function () {
                            var confirmOptions = {
                                text: 'Would you like to add another reading?',
                                title: 'Add Another Reading?',
                                ok: 'Add Another Reading',
                                cancel: 'Go Back to Device'
                            };

                            $confirm(confirmOptions)
                                .then(function() {
                                    delete ctrl.value;
                                    delete ctrl.type;
                                    delete ctrl.createdAt;
                                }, function () {
                                    $location.path('/device/' + ctrl.id + '/' + ctrl.name);
                                });
                        });
                }
            };
        }]
    });
