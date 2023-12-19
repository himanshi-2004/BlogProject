//Authentication means provide security
const jwt = require('jsonwebtoken')
const AdminModel = require('../models/Admin')

const checkAdminAuth = async(req,res,next)=>{
    //console.log('hello Middleware')
    const {token} = req.cookies
   // console.log(token)
   if(!token){
    req.flash('error','Unauthoirzed admin Please login')
    res.redirect('/login')
   }
   else{
     const data = jwt.verify(token,
        'himanshisharma2001')
       // console.log(data)
       const user = await AdminModel.findOne({_id:data.id})
      // console.log(user)
       req.user = user
       next()
       
   }

}
module.exports = checkAdminAuth 