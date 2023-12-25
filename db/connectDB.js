const mongoose = require('mongoose')
const db_liveurl = 'mongodb+srv://himanshisharma83721:himanshi123@cluster0.u6wzvtw.mongodb.net/BlogProject?retryWrites=true&w=majority'
const local_url = 'mongodb://127.0.0.1:27017/blogging'
const connectDB = ()=>{
    return mongoose.connect(db_liveurl)
    .then(()=>{
       console.log("connection successful")
    })
    .catch((err)=>{
          console.log(err)
    })
}
module.exports = connectDB
