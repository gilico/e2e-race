const { Router } = require('express');
const router = Router({ mergeParams: true });
const raceController = require('../controller/raceController');

// trivia send grant request to the car
router.get('/:arduinoNo', raceController.checkGrantCar);

// car recieve grant request
router.get(`/car-grant/:arduinoNo`, raceController.sendCarGrant);

// remote control send car direction
router.get('/:carNo/:dir', raceController.sendCarDirection);

// car recieve direction
router.get(`/car-dir/:carNo`, raceController.getCarDirection);

module.exports = router;