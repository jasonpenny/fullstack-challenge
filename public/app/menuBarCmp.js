angular.module('app')
    .component('menuBar', {
        templateUrl: 'tmpl/menubar.html',
        controller: function () {
            this.menu = [
                {
                    name: "Add Device",
                    component: "#/newdevice"
                },
            ];
        }
    });
