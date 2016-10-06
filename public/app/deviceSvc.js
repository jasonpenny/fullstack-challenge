angular.module('app')
    .factory('deviceSvc', ['$http', function ($http) {
        var urlBase = 'http://localhost:3000/proxy';

        var deviceSvc = {};

        deviceSvc.getDevices = function () {
            return $http.get(urlBase + '/devices');
        };

        deviceSvc.getReadingsForDevice = function (deviceId) {
            return $http.get(urlBase + '/devices/' + deviceId + '/readings');
        };

        deviceSvc.addNewDevice = function (deviceName) {
            var data = { "name": deviceName };
            return $http.post(urlBase + '/devices', data);
        };

        deviceSvc.deleteDevice = function (deviceId) {
            return $http.delete(urlBase + '/devices/' + deviceId);
        };

        deviceSvc.addNewReading = function (deviceId, value, type, createdAt) {
            var data = {
                "type": type,
                "value": value,
                "deviceId": deviceId
            };
            if (createdAt) {
                data.createdAt = createdAt;
            }

            return $http.post(urlBase + '/readings', data);
        };

        deviceSvc.getAllReadings = function (deviceId) {
            return $http.get(urlBase + '/readings');
        };

        return deviceSvc;
    }]);
