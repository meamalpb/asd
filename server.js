const express               = require("express");
const bodyParser            = require("body-parser");
const mysql                 = require("mysql");
const { rootCertificates }  = require("tls");
const sql                   = require("./sql");
var app                     = express();
var swarden                 = 'SELECT * FROM warden'
var sinmates                = 'SELECT * FROM inmates'
var scells                  = 'SELECT * FROM cells'
var smo                     = 'SELECT * FROM medical_officer'
var sjailor                 = 'SELECT * FROM jailor'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 



//warden routes

app.get('/warden',(req,res)   =>  { 
    res.render('form-warden');
});

app.post('/warden',(req,res)   =>  {
    console.log(req.body);
    sql.query('INSERT INTO warden VALUES(?)',[[req.body.id,req.body.name,req.body.ssn,req.body.no]])
    res.redirect('/');
});


//home route
app.get('/',(req,res)   =>  { 
    sql.query(swarden,(err,rows,fields)=>{
        if(!err){
         sql.query(sinmates,(err1,rows1,fields1)=>{
             if(!err1){
                sql.query(scells,(err2,rows2,fields2)=>{
                    if(!err2){
                        sql.query(smo,(err3,rows3,fields3)=>{
                            if(!err3){
                                sql.query(sjailor,(err4,rows4,fields4)=>{
                                    if(!err4){  
                                        res.render('home',{rows:rows,rows1:rows1,rows2:rows2,rows3:rows3,rows3:rows3,rows4:rows4});
                                    }
                                })
                            }
                        })
                    }
                })
             }
         })
         
        }
        else{
            console.log(err)
        }
    })
   
 });

//login route
 app.get('/login',(req,res)   =>  {
    res.render('login');
});

//change to display the tables
app.post('/login',(req,res)   =>  {
    console.log(req.body);
    res.redirect('/warden');
});



//jailor routes
app.post('/jailor',(req,res)   =>  {
    console.log(req.body);
    sql.query('INSERT INTO jailor VALUES(?)',[[req.body.id,req.body.name,req.body.no,req.body.wid]])
    res.redirect('/');
});
app.get('/jailor',(req,res)   =>  {
    res.render('form-jailor');
});

//inmate routes
app.get('/inmate',(req,res)   =>  {
    res.render('form-inmate');
});

app.post('/inmate',(req,res)   =>  {
    console.log(req.body);
    sql.query('INSERT INTO inmates VALUES(?)',[[req.body.id,req.body.name,req.body.cellid,req.body.job]])
    res.redirect('/');
});


//cell routes


app.get('/cell',(req,res)   =>  {
    res.render('form-cell');
});

app.post('/cell',(req,res)   =>  {
    sql.query('INSERT INTO cells VALUES(?)',[[req.body.cellid,req.body.jid]])
    console.log(req.body);
    res.redirect('/');
});


//mo routes
app.get('/mo',(req,res)   =>  {
    res.render('form-mo');
});

app.post('/mo',(req,res)   =>  {
    sql.query('INSERT INTO medical_officer VALUES(?)',[[req.body.id,req.body.name,req.body.no,req.body.wid]])
    console.log(req.body);
    res.redirect('/');
});


//port
app.listen(3000, function () {
console.log("http://localhost:3000/")
 })













//testing connection
// sql.connect((err) => {
//     if(!err){
//         console.log("connected");
//     }
//     else{
//         console.log(err);
//     }
// })