var express = require('express');
var request = require('request');

var apiServerHost = 'https://fullstack-challenge-api.herokuapp.com';

var app = express();
app.use('/proxy', function(req, res) {
    var url = apiServerHost + req.url;
    console.log('Proxying: ' + url);
    req.pipe(request(url)).pipe(res);
});

app.use('/js', express.static(__dirname + '/node_modules/angular'));
app.use('/js', express.static(__dirname + '/node_modules/angular-route'));
app.use('/js', express.static(__dirname + '/node_modules/underscore'));
app.use('/js', express.static(__dirname + '/node_modules/chart.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/angular-chart.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/moment/min'));
app.use('/js', express.static(__dirname + '/node_modules/angular-ui-bootstrap/dist'));
app.use('/js', express.static(__dirname + '/node_modules/angular-ui-bootstrap-datetimepicker'));
app.use('/js', express.static(__dirname + '/node_modules/angular-confirm'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/angular-ui-bootstrap-datetimepicker'));

app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);
