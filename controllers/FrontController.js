const AboutModel = require('../models/About');
const CategoryModel = require('../models/Category');
const ContactModel = require('../models/Contact');
const BlogModel = require('../models/blog') 

class FrontController {
  static home = async (req, res) => {
    try {

         const result = await BlogModel.find().sort({_id:-1}).limit(6)
        //  console.log(result)

      res.render('home',{data:result});
    } catch (err) {
      console.log(err);
    }
  };

  static about = async (req, res) => {
    try {
      const result = await AboutModel.find()
      res.render("about",{data:result});
    } catch (err) {
      console.log(err);
    }
  };

  static contact = async (req, res) => {
    try {
      const result = await ContactModel.find()
      res.render("contact",{data:result});
    } catch (err) {
      console.log(err);
    }
  };

  static blogform = async (req, res) => {
    try {
      res.render("blogform");
    } catch (err) {
      console.log(err);
    }
  };

  static detail = async (req, res) => {
    try {
      const result = await BlogModel.findById(req.params.id)
      const recentblogs = await BlogModel.find().sort({_id:-1}).limit(6)
      const category = await CategoryModel.find().sort({_id:-1}).limit(5)

      res.render("detail",{data:result,r:recentblogs,c:category});
    } catch (err) {
      console.log(err);
    }
  };

  static blog = async (req, res) => {
    try {
       const result = await BlogModel.find()

      res.render("blog",{data:result});
    } catch (err) {
      console.log(err);
    }
  };
  static login = async (req, res) => {
    try {
      res.render("login",{message:req.flash('error')});
    } catch (err) {
      console.log(err);
    }
  }

 

}
module.exports = FrontController;
