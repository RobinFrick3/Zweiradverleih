const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.json({limit:'10mb'}))

let Userdb = new sqlite3.Database('AccountDaten.db' , (err) => {
    if (err){
        console.error(err.message)
    }
    console.log('Connected to database');
})

let Zweiraddb = new sqlite3.Database('WheelsDaten.db' , (err) => {
    if (err){
        console.error(err.message)
    }
    console.log('Connected to database');
})

app.post('/validatePassword', (req, res) => {
    console.log(req.body);
    const {derName, dasPasswort} = req.body
    console.log(derName);
    console.log(dasPasswort);
    Userdb.all(`select * from AccountDaten WHERE USER_NAME = ? AND USER_PASSWORD = ?`,[derName, dasPasswort], (err, rows) =>{
        if(err){
            throw err;
        }
        if(rows.length > 0){
            res.send({validation: true})
        } else{
            res.send({validation: false})
        }
    })
})

app.post('/addAccount', (req, res) => {
    console.log(req.body);
    const {derName, dieEMail, dasPasswort, dieNummer,} = req.body;
    Userdb.run(`INSERT INTO AccountDaten(USER_NAME, USER_EMAIL, USER_PASSWORD, USER_PHONE) VALUES (?, ?, ?, ?)`, [derName, dieEMail, dasPasswort, dieNummer,], (err) => {
        if(err){
            console.log(err.message);
            res.send({success: false});
        }
        res.send({success: true});
    })
})

app.post('/getWheels', (req, res) => {
    console.log(req.body);
    const {dieStation, wheel} = req.body;
    Userdb.run(`select * from WheelsDaten WHERE WHEELS_PLACE = ? AND WHEELS_STATE = 1`,[dieStation], (err, rows) => {
        if(err){
            console.log(err.message);
        }
        res.send({rows});
    })
})

app.listen(5000 , () => console.log('Listening on port 5000'))