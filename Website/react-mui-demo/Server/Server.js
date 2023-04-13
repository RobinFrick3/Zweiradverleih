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

app.post('/validatePassword', (req, res) => {
    console.log(req.body);
    const {derName, dasPassword} = req.body
    console.log(derName);
    console.log(dasPassword);
    Userdb.all(`select * from AccountDaten WHERE USER_NAME = ? AND USER_PASSWORD = ?`,[derName, dasPassword], (err, rows) =>{
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

app.listen(5000 , () => console.log('Listening on port 5000'))