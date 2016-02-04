"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _trips = require('./trips');

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://takemetour:123456@ds053305.mongolab.com:53305/takemetour');
_mongoose2.default.Promise = _bluebird2.default;

var app = (0, _express2.default)();
var trips = (0, _express2.default)();
var tool = new _api2.default();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Welcome to API');
});

trips.get('/', function (req, res) {
    tool.getTrips().then(function (err, doc) {
        if (err) res.send(err);
        res.json(doc);
    });
});

trips.post('/', function (req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var description = req.body.description;
    tool.saveTrip(name).then(function (doc) {
        if (doc == null) {
            var data = new _trips.TripsModel({
                name: name,
                price: price,
                description: description
            });
            data.save(function (err) {
                if (err) res.send(err);
                res.json({ message: 'Save trip complete!!!.' });
            });
        }
    });
});

trips.get('/:id', function (req, res) {
    var _id = req.params.id;
    tool.getTrip(_id).then(function (doc) {
        res.json(doc);
    });
});

trips.put('/:id', function (req, res) {
    var _id = req.params.id;
    tool.updateTrip(_id).then(function (doc) {
        doc.name = req.body.name;
        doc.price = req.body.price;
        doc.description = req.body.description;
        doc.save(function (err) {
            if (err) res.send(err);
            res.json({ message: 'Update trip complete!!!.' });
        });
    });
});

trips.delete('/:id', function (req, res) {
    var _id = req.params.id;
    tool.removeTrip(_id).then(function (doc) {
        res.json({ message: 'Delete trip complete!!!.' });
    });
});

app.use('/trips', trips);
app.listen(3000, function () {
    console.log('Server start.');
});