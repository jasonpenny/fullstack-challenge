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

        var sum = function (values) {
            return values.reduce(function (a, b) { return a + b; });
        };

        valuesSvc.groupAndExtractData = function (data, types, result) {
            var groups = _.groupBy(data, 'type');
            _.each(types, function (type) {
                if (groups[type]) {
                    var labelsAndValues = valuesSvc.labelsAndValues(groups[type]);

                    result[type].labels = labelsAndValues.labels;
                    result[type].values = labelsAndValues.values;

                    result[type].minimum = Math.min.apply(null, labelsAndValues.values[0]);
                    result[type].maximum = Math.max.apply(null, labelsAndValues.values[0]);
                    result[type].average = sum(labelsAndValues.values[0]) / labelsAndValues.values[0].length;
                }
            });
        };

        return valuesSvc;
    }]);
