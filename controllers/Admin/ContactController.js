const ContactModel = require("../../models/Contact")

class ContactController{
        static createcontact = async(req,res)=>{
             try{
                  const result = await ContactModel.find()
                  res.render('admin/contact/createcontact',{data:result})   
             }
             catch(err){
                console.log(err)
             }
        }
        static insertcontact = async(req,res)=>{
            try{
              //  console.log(req.body)
                 const {name,email,phone,message} = req.body
                  const result= await ContactModel({
                        name:name,
                        email:email,
                        phone:phone,
                        message:message,
                  })
                  await result.save()
                  res.redirect('/admin/contact/createcontact')
            }
            catch(Err){
                console.log(err)
            }
        }
        static displaycontact = async(req,res)=>{
            try{
                const result = await ContactModel.find()
                res.render('admin/contact/displaycontact',{data:result})
            }
            catch(err){
                console.log(err)
            }
        }
        static viewcontact = async(req,res)=>{
            try{
                const result = await ContactModel.findById(req.params.id)
                res.render('admin/contact/viewcontact',{data:result})
            }
            catch(err){
                console.log(err)
            }
        }
        static editcontact = async(req,res)=>{
            try{
                  const result = await ContactModel.findByIdAndUpdate(req.params.id)
                  res.render('admin/contact/editcontact',{data:result})
            }
            catch(err){
                console.log(err)
            }
        }
        static updatecontact = async(req,res)=>{
            try{
                  const {name,email,phone,message} = req.body
                  const result = await ContactModel.findByIdAndUpdate(req.params.id,{
                    name:name,
                    email:email,
                    phone:phone,
                    message:message,
                  })
                  await result.save()
                  res.redirect('/admin/contact/displaycontact')
            }
            catch(err){
                console.log(err)
            }
        }
        static deletecontact = async(req,res)=>{
            try{
                 const result = await ContactModel.findByIdAndDelete(req.params.id)
                 res.redirect('/admin/contact/displaycontact')
            }
            catch(err){
                console.log(err)
            }
        }
}
module.exports = ContactController