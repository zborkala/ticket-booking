const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express();
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'ticket-app'
})

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Home Page')
})


// We have created the routes needed for ticket booking app
app.post('/tickets/new', (req, res) => {
    con.connect(function(error) {
        if(error) return res.send('Connection Error')
        let name = req.body.name
        let age = req.body.age
        let fare = req.body.fare
        let distance = req.body.distance
        con.query(`insert into tickets (name, age, fare, distance, status) values ('${name}', '${age}', '${fare}', '${distance}', 'Pending')`, function(err, result) {
            if(err) return res.send('Unable to insert data')
            res.send('Ticket has been booked successfully!')
        })
    })
})

app.post('/tickets/edit/:id', (req, res) => {

})

app.get('/tickets/delete/:id', (req, res) => {

})

app.get('/tickets/view/:id', (req, res) => {

})

// localhost:4000/tickets/new
// localhost:4000/tickets/edit/13
// localhost:4000/tickets/delete/13
// localhost:4000/tickets/view/13





app.listen(4000)