const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app=express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"techy"
})

db.connect(err=>{
    if(err){
        console.error('Error connecting to MySQL:',err);
        return;
    }
    console.log('Connected to MySQL');
});

app.post('/subscribe',(req,res)=>{
    const sql = "INSERT INTO subscribe (`email`) VALUES (?)";
    const values=[req.body.email]
    db.query(sql,values,(err,data)=>{
        if(err){
            console.error('Database query error: ',err)
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        console.log('Query result:', data);
        return res.status(200).json({ message: 'Subscription successful', data: data });
    })
})

app.post('/message',(req,res)=>{
    const sql = "INSERT INTO message (`first_name`,`last_name`,`email`,`subject`,`message`) VALUES (?,?,?,?,?)";
    const values=[
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.subject,
        req.body.your_message
    ]
    db.query(sql,values,(err,data)=>{
        if(err){
            console.error('Database query error: ',err)
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        console.log('Query result:', data);
        return res.status(200).json({ message: 'Message successful', data: data });
    })
})

app.post('/feedback',(req,res)=>{
    const sql = "INSERT INTO feedback (`name`,`review`) VALUES (?,?)";
    const values=[
        req.body.name,
        req.body.review
    ]
    db.query(sql,values,(err,data)=>{
        if(err){
            console.error('Database query error: ',err)
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        console.log('Query result:', data);
        return res.status(200).json({ message: 'Feedback successful', data: data });
    })
})

app.listen(8000, ()=>{
    console.log("listening")
});