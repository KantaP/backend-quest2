"use strict";
import {TripsModel} from './trips';

export default class {
    getTrips() {
        return TripsModel.find({},'_id name').exec();
    }
    
    saveTrip(name){
        return TripsModel.findOne({name: name}).exec();
    }
    
    getTrip(id){
        return TripsModel.findOne({_id: id}).exec();
    }
    
    updateTrip(id){
        return TripsModel.findOne({_id: id}).exec();
    }
    
    removeTrip(id){
        return TripsModel.remove({_id: id}).exec();
    }
}
 