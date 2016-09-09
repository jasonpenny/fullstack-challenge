angular.module('app')
    .factory('valuesSvc', [function () {
        var valuesSvc = {};

        valuesSvc.labelsAndValues = function (data) {
            var datavalues = _.chain(data)
                .sortBy('createdAt')

            var labels = datavalues
                .map(function (t) {
                    return moment(t.createdAt).format('M/D/YY h:mma');
                })
                .value();
            var values = [
                datavalues
                    .pluck('value')
                    .value()
            ];
            return {
                "labels": labels,
                "values": values
            };
        };

        valuesSvc.groupAndExtractData = function (data, types, result) {
            var groups = _.groupBy(data, 'type');
            _.each(types, function (type) {
                if (groups[type]) {
                    var labelsAndValues = valuesSvc.labelsAndValues(groups[type]);

                    result[type].labels = labelsAndValues.labels;
                    result[type].values = labelsAndValues.values;
                }
            });
        };

        return valuesSvc;
    }]);
