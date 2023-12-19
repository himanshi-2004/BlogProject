const express = require('express')
// console.log(express)
const app = express()
const port= 8000
const web = require('./routes/web')
const connectDB = require('./db/connectDB')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary')


//flash
const  flash = require('connect-flash');
app.use(flash());

// for flash message session
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))
//cookies
const cookieParser  =  require('cookie-parser')
app.use(cookieParser())
//fileupload
app.use(fileUpload({useTempFiles:true})) 
// Body-parser middleware
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
//ejs setup
app.set('view engine','ejs')
// app.get('/',(req,res)=>{
//     res.send('hello everyone')
// })
//routing


connectDB()
app.use('/',web)


  
app.listen(port,()=>{
    console.log("server running on localhost 8000")
})