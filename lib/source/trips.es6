"use strict";
import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let tripSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

export let TripsModel = mongoose.model('trips',tripSchema);