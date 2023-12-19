const BlogModel = require('../../models/blog')
const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: 'dwy8hd761', 
  api_key: '822826584515219', 
  api_secret: 'tOwVhCBcpcPxothANYLY3kaYcX4',
//   secure: true
});

class BlogController{
      

        static displayblog = async(req,res)=>{
            try{

                const result = await BlogModel.find()
                // console.log(result)
                     res.render('admin/blog/displayblog',{data:result})
            }
            catch(err){
                console.log(err)
            }
        }
        static createblog = async(req,res)=>{
            try{
                    res.render('admin/blog/createblog')
            }
            catch(err){
                console.log(err)
            }
        }

        static insertblog = async(req,res)=>{
            // try{
            //     // console.log('hello')
            //       //  console.log(req.body)
            //                const {title,description}= req.body
            //                const result = new BlogModel({
            //                   title:title,
            //                   description:description,

            //                })
            //                await result.save()

            //                res.redirect('/admin/blog/displayblog')
            // }
            try{
                // console.log(req.files.image)
                const file = req.files.image
                const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
                    folder:'blogimages',
                })
                // console.log(myimage)
                const {title,description}= req.body
                const result = new BlogModel({
                    title:title,
                    description:description,
                    image:{
                        public_id: myimage.public_id,
                        url:  myimage.secure_url
                    }
                })
                await result.save()
                res.redirect('/admin/blog/displayblog')
            }
            catch(err){
                console.log(err)
            }
        }


        static viewblog = async(req,res)=>{
            try{
                //    console.log(req.params.id)
                const result = await BlogModel.findById(req.params.id)
                // console.log(result)
                res.render('admin/blog/viewblog',{data:result})
            }
            catch(err){
                console.log(err)
            }
        } 

        static editblog = async(req,res)=>{
            try{
                 const result = await BlogModel.findByIdAndUpdate(req.params.id)
                //   console.log(result)
                res.render('admin/blog/editblog',{data:result})
            }
            catch(err){
                console.log(err)
            }
        }

        static updateblog = async(req,res)=>{
            try{

                         //for deletig the image from cloudinary
                               //code start
                               const blog= await BlogModel.findById(req.params.id)
                               const imageid = blog.image.public_id
                            //    console.log(imageid)
                            await cloudinary.uploader.destroy(imageid)
                               //code end
//update image code start
                          // console.log(req.files.image)
                const file = req.files.image
                const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
                    folder:'blogimages',
                })

                const {title,description}= req.body
                 const result = await BlogModel.findByIdAndUpdate(req.params.id,{
                    title:title,
                    description:description,
                    image:{
                        public_id: myimage.public_id,
                        url:  myimage.secure_url
                    }

                 })
                 await result.save()
                 res.redirect('/admin/blog/displayblog')
            }
            catch(err){
                console.log(err)
            }
        }

        static deleteblog = async(req,res)=>{
            try{
                               //for deletig the image from cloudinary
                               //code start
                               const blog= await BlogModel.findById(req.params.id)
                               const imageid = blog.image.public_id
                            //    console.log(imageid)
                            await cloudinary.uploader.destroy(imageid)
                               //code end

                  
                      const result = await BlogModel.findByIdAndDelete(req.params.id)
                      res.redirect('/admin/blog/displayblog')
            }
            catch(err){
                console.log(err)
            }
        }
}
module.exports = BlogController