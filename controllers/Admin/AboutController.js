const AboutModel = require("../../models/About")
const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: 'dwy8hd761', 
  api_key: '822826584515219', 
  api_secret: 'tOwVhCBcpcPxothANYLY3kaYcX4',
//   secure: true
});



class AboutController{
       static createabout = async(req,res)=>{
           try{
               res.render('admin/about/createabout')
           }
           catch(err){
            console.log(err)
           }
       }
       static insertabout = async(req,res)=>{
        try{

                     const {about} = req.body
                     const file = req.files.image
                     const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
                         folder:'blogimages',
                     })
                     const result = new AboutModel({
                        about:about,
                      
                        image:{
                            public_id: myimage.public_id,
                            url:  myimage.secure_url
                        }
                    })
                    await result.save()
                    res.redirect('/admin/about/createabout')
        }
        catch(err){
            console.log(err)
        }
       }

       static displayabout = async(req,res)=>{
        try{
           const result = await AboutModel.find()
           res.render('admin/about/displayabout',{data:result})
        }
        catch(err){
            console.log(err)
        }
       }
       static viewabout = async(req,res)=>{
          try{
               const result = await AboutModel.findById(req.params.id)
               res.render('admin/about/viewabout',{data:result})
          }
          catch(err){
            console.log(err)
          }
       }

       static editabout = async(req,res)=>{
          try{
            const result = await AboutModel.findOneAndUpdate(req.params.id)
            res.render('admin/about/editabout',{data:result})
          }
        catch(err){
            console.log(err)
        }
       }

       static updateabout = async(req,res)=>{
        try{
            const {about} = req.body
            const file = req.files.image
            const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
                folder:'blogimages',
            })
            const result = new AboutModel({
               about:about,
             
               image:{
                   public_id: myimage.public_id,
                   url:  myimage.secure_url
               }
           })
           await result.save()
           res.redirect('/admin/about/displayabout')
}
        catch(err){
            console.log(err)
        }
       }

       static deleteabout = async(req,res)=>{
        try{
                           //for deletig the image from cloudinary
                           //code start
                           const about= await AboutModel.findById(req.params.id)
                           const imageid = about.image.public_id
                        //    console.log(imageid)
                        await cloudinary.uploader.destroy(imageid)
                           //code end

              
                  const result = await AboutModel.findByIdAndDelete(req.params.id)
                  res.redirect('/admin/about/displayabout')
        }
        catch(err){
            console.log(err)
        }
    }
}
module.exports = AboutController