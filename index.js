const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")
const app = express();

app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post('http://localhost:8000/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:8001/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:8003/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:8006/events', event).catch((err) => {
        console.log(err.message);
    });
    res.send({status: 'OK'});
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(8005, () => {
    console.log("Event bus listening on 8005")
})