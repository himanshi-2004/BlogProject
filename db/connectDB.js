const mongoose = require('mongoose')
const connectDB = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/blogging")
    .then(()=>{
       console.log("connection successful")
    })
    .catch((err)=>{
          console.log(err)
    })
}
module.exports = connectDB
