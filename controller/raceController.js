
let arduinoNo = -1;

const checkGrantCar = (req, res) => {
    arduinoNo =  req.params.arduinoNo;
    res.status(200);
}

const sendCarGrant = (req, res) => {
    let car_no =  req.params.arduinoNo;
    if(car_no === arduinoNo)
    {
        res.send(arduinoNo);
    }
    else
    {
        res.send(-1);
    }
}



let carNo = -1;
let direction = -1;
const sendCarDirection = (req, res) => {
    carNo =  req.params.carNo;
    direction = req.params.dir;
    res.send(200);
}

const getCarDirection = (req, res) => {
    let carNumber =  req.params.carNo;

    if(carNumber === carNo)
    {
        res.send(direction);
    }
    else
    {
        res.send(-1);
    }
}


module.exports = {checkGrantCar, sendCarGrant,sendCarDirection,getCarDirection}