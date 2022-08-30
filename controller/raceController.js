
let arduinoNo = -1;

const checkGrantCar = (req, res) => {
    arduinoNo =  req.params.arduinoNo;
    res.status(200);
}

const sendCarGrant = (req, res) => {
    let carNo =  req.params.carNo;
    if(carNo == arduinoNo)
    {
        res.send(arduinoNo);
    }
    else
    {
        res.send(-1);
    }
}

module.exports = {checkGrantCar, sendCarGrant}