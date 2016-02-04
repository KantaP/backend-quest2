"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _trips = require('./trips');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'getTrips',
        value: function getTrips() {
            return _trips.TripsModel.find({}, '_id name').exec();
        }
    }, {
        key: 'saveTrip',
        value: function saveTrip(name) {
            return _trips.TripsModel.findOne({ name: name }).exec();
        }
    }, {
        key: 'getTrip',
        value: function getTrip(id) {
            return _trips.TripsModel.findOne({ _id: id }).exec();
        }
    }, {
        key: 'updateTrip',
        value: function updateTrip(id) {
            return _trips.TripsModel.findOne({ _id: id }).exec();
        }
    }, {
        key: 'removeTrip',
        value: function removeTrip(id) {
            return _trips.TripsModel.remove({ _id: id }).exec();
        }
    }]);

    return _class;
}();

exports.default = _class;