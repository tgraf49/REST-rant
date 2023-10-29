const express = require('express');
const places = require('../models/places.js')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.post('/', (req,res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city){
        req.body.city = 'Anytown'
    }
    if (!req.body.state){
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
});

router.get('/', (req, res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant1.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant2.jpg'
    }]
    res.render('places/index', { places })
});



module.exports = router