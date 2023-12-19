const AdminModel = require('../../models/Admin')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')


class AdminController{
      static dashboard = async(req,res)=>{
        try{
               const {username,email} = req.user
                      res.render('admin/dashboard',{n:username,e:email})
        }
        catch(err){
            console.log(err)
        }
      }
    static register = async (req, res) => {
    try {
      res.render("register", { message: req.flash("error") });
    } catch (err) {
      console.log(err);
    }
  }

      static insertregister = async(req,res)=>{
        try{
            
          const {username,email,password,confirmpassword} = req.body
                 const user = await AdminModel.findOne({email:email})
                 if(user){
                  req.flash('error','Email already exists')
                     res.redirect('/register')
                 }
                 else{
                      if(username && email && password && confirmpassword){
                            if(password == confirmpassword){
                              const hashpassword = await bcrypt.hash(password,10)
                                  const result = new AdminModel({
                                      username:username,
                                      email:email,
                                      password:hashpassword,
                                  
                                  })
                                  await result.save()
                                  res.redirect('/login')
                            }
                            else{
                              req.flash('error','Password and confirmpassword does not match')
                              res.redirect('/register')
                            }
                      }

                      else{
                                  req.flash('error','All fields are required')
                                  res.redirect('/register')
                      }
                      }

                 }
             
                // console.log(req.body)

        
      
        catch(err){
          console.log(err)
        }
    }


    static verifylogin = async(req,res)=>{
        try{
             // console.log(req.body)
             const {email,password} = req.body
             if(email && password){
                       const user  =  await AdminModel.findOne({email:email})
                       if(user != null){
                                     const isMatched = await bcrypt.compare(password,user.password)
                                     if(isMatched){
                                      //generate jwt token
                                      const token = jwt.sign({id:user._id},'himanshisharma2001')
                                    //  console.log(token)
                                    res.cookie('token',token)
                                        res.redirect('/admin/dashboard')
                                     }
                                     else{
                                      req.flash('error','Email or password is incorrect')
                                      res.redirect('/login')
                                     }
                       }
                       else{
                          req.flash('error','You are not a registered user')
                          res.redirect('/login')
                       }
             }
             else{
              req.flash('error','All Fields are required')
              res.redirect('/login')
             }
        }
        catch(err){
          console.log(err)
        }
    }

    static logout = async(req,res)=>{
       try{
             res.clearCookie('token')
             res.redirect('/login')
       }
       catch(err){
        console.log(err)
       }
    }
    
}
module.exports = AdminController