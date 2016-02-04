"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import {TripsModel} from './trips';
import Api from './api';

mongoose.connect('mongodb://takemetour:123456@ds053305.mongolab.com:53305/takemetour');
mongoose.Promise = bluebird;

const app = express();
const trips = express();
const tool = new Api();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Welcome to API');
})

trips.get('/',(req,res)=>{
    tool.getTrips()
        .then((err,doc)=>{
            if(err) res.send(err);
            res.json(doc);
        })
});
 
trips.post('/',(req,res)=>{
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    tool.saveTrip(name)
        .then((doc)=>{
            if(doc == null){
                let data = new TripsModel({
                    name: name,
                    price: price,
                    description: description
                });
                data.save((err)=>{
                    if(err) res.send(err);
                    res.json({message:'Save trip complete!!!.'});
                })
            }
        })
})

trips.get('/:id',(req,res)=>{
    var _id = req.params.id;
    tool.getTrip(_id)
        .then((doc)=>{
            res.json(doc);
        })
})

trips.put('/:id',(req,res)=>{
    var _id = req.params.id;
    tool.updateTrip(_id)
        .then((doc)=>{
            doc.name = req.body.name;
            doc.price = req.body.price;
            doc.description = req.body.description;
            doc.save((err)=>{
                if(err) res.send(err);
                res.json({message:'Update trip complete!!!.'});
            })
        })
})

trips.delete('/:id',(req,res)=>{
    var _id = req.params.id;
    tool.removeTrip(_id)
        .then((doc)=>{
            res.json({message:'Delete trip complete!!!.'});
        })
})

app.use('/trips',trips);
app.listen(3000,()=>{
    console.log('Server start.');
});