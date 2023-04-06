const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors())

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:8000/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:8001/events', event).catch((err) => {
        console.log(err.message);
    });
    // axios.post('http://localhost:4002/events', event).catch((err) => {
    //     console.log(err.message);
    // });
    res.send({ status: 'OK' });

})

app.listen(8005, () => {
    console.log("Event bus listening on 8005")
})