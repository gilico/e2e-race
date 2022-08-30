const { Router } = require('express');
const router = Router({ mergeParams: true });
const raceController = require('../controller/raceController');

router.get('/:arduinoNo', raceController.checkGrantCar);

// const arduinoNo = raceController.sendCarGrant();
// console.log(arduinoNo);

router.get(`/car-grant/:carNo`, raceController.sendCarGrant);

module.exports = router;