const express               = require("express");
const bodyParser            = require("body-parser");
const mysql                 = require("mysql");
const { rootCertificates }  = require("tls");
const mysqlConnection       = require("./sql");
var app                     = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 

//home
app.get('/test',(req,res)   =>  { 
    res.render('form-warden');
});

app.get('/',(req,res)   =>  { 
   res.render('home');
 });

app.post('/login',(req,res)   =>  {
    console.log(req.body);
    res.redirect('test');
});

app.post('/test',(req,res)   =>  {
    console.log(req.body);
    res.redirect('/');
});

app.post('/jailor',(req,res)   =>  {
    console.log(req.body);
    res.redirect('/');
});

app.get('/login',(req,res)   =>  {
    res.render('login');
});

app.get('/inmate',(req,res)   =>  {
    res.render('form-inmate');
});

app.post('/inmate',(req,res)   =>  {
    console.log(req.body.id);
    res.redirect('/');
});


app.get('/jailor',(req,res)   =>  {
    res.render('form-jailor');
});

app.get('/cell',(req,res)   =>  {
    res.render('form-cell');
});

app.post('/cell',(req,res)   =>  {
    console.log(req.body.cellid);
    res.redirect('/');
});

app.get('/mo',(req,res)   =>  {
    res.render('form-mo');
});

app.post('/mo',(req,res)   =>  {
    console.log(req.body.id);
    res.redirect('/');
});

app.listen(3000);













//testing connection
// mysqlConnection.connect((err) => {
//     if(!err){
//         console.log("connected");
//     }
//     else{
//         console.log(err);
//     }
// })