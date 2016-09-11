var sampledata = [
    {
        "deviceId": "SkyEbvmi",
        "type": "temperature",
        "value": 74,
        "createdAt": "2016-08-31T06:53:04.000Z",
        "updatedAt": "2016-08-31T06:53:06.395Z",
        "id": "HycC0gVi"
    },
    {
        "deviceId": "SkyEbvmi",
        "type": "humidity",
        "value": 40,
        "createdAt": "2016-08-31T06:53:07.000Z",
        "updatedAt": "2016-08-31T06:53:09.395Z",
        "id": "HycC0gVi"
    },
    {
        "deviceId": "SkyEbvmi",
        "type": "temperature",
        "value": 76,
        "createdAt": "2016-08-31T06:43:04.000Z",
        "updatedAt": "2016-08-31T06:53:06.409Z",
        "id": "B1gcARl4i"
    }
];

describe('groupAndExtractData', function () {
    var valuesSvc;
    beforeEach(module('app'));
    beforeEach(inject(function (_valuesSvc_) {
        valuesSvc = _valuesSvc_;
    }));

    it('groups data by type', function () {
        var result = {"temperature": {}, "humidity": {}};

        valuesSvc.groupAndExtractData(sampledata, ['temperature', 'humidity'], result);

        expect(result.temperature.labels.length).toEqual(2);
        expect(result.temperature.values[0].length).toEqual(2);

        expect(result.humidity.labels.length).toEqual(1);
        expect(result.humidity.values[0].length).toEqual(1);
    });
});
