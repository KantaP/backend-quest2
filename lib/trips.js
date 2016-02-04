"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TripsModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var tripSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

var TripsModel = exports.TripsModel = _mongoose2.default.model('trips', tripSchema);