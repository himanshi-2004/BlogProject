const CategoryModel = require('../../models/Category')
class CategoryController{
          

    static displaycategory = async(req,res)=>{
        try{
              const result = await CategoryModel.find() 
                res.render('admin/category/displaycategory',{data:result})
        }
        catch(err){
            console.log(err)
        }
    }

    static createcategory = async(req,res)=>{
        try{
                res.render('admin/category/createcategory')
        }
        catch(err){
            console.log(err)
        }
    }
    static insertcategory = async(req,res)=>{
        try{
            // console.log('hello')
            //console.log(req.body)
            const {category} = req.body
            const result = await CategoryModel({
                category:category,
            })
            await result.save()
            res.redirect('/admin/category/displaycategory')

        }
        catch(err){

            console.log(err)
        }
    }
    static viewcategory = async(req,res)=>{
        try{
              const result = await CategoryModel.findById(req.params.id)
              res.render('admin/category/viewcategory',{data:result})
        }
        catch(err){
            console.log(err)
        }
    }

    static editcategory = async(req,res)=>{
        try{
              const result = await CategoryModel.findByIdAndUpdate(req.params.id)
              res.render('admin/category/editcategory',{data:result})
        }
        catch(err){
            console.log(err)
        }
    }
    static updatecategory = async(req,res)=>{
             try{
                   const {category} = req.body
                  const result = await CategoryModel.findByIdAndUpdate(req.params.id,({
                    category:category,
                  }))
                  await result.save()
                  res.redirect('/admin/category/displaycategory')
             }
             catch(err){
                console.log(err)
             }
    }
    static deletecategory = async(req,res)=>{
        try{
             const result = await CategoryModel.findByIdAndDelete(req.params.id)
             res.redirect('/admin/category/displaycategory')
        }
        catch(err){
            console.log(err)
        }
    }

}
module.exports = CategoryController