const express = require('express')
const FrontController = require('../controllers/FrontController')
const TeacherController = require('../controllers/TeacherController')
const AdminController = require('../controllers/Admin/AdminController')
const BlogController = require('../controllers/Admin/BlogController')
const CategoryController = require('../controllers/Admin/CategoryController')
const AboutController = require('../controllers/Admin/AboutController')
const ContactController = require('../controllers/Admin/ContactController')
const Auth = require('../middleware/Auth')

const router = express.Router()

router.get('/',Auth,FrontController.home)
router.get('/about',Auth,FrontController.about)
router.get('/contact',Auth,FrontController.contact)
router.get('/blogform',Auth,FrontController.blogform)
router.get('/detail/:id',Auth,FrontController.detail)
router.get('/blog',Auth,FrontController.blog)
router.get('/login',FrontController.login)





//admin controller'
router.get('/admin/dashboard',Auth,AdminController.dashboard)
router.get('/register',AdminController.register)
router.post('/insertregister',AdminController.insertregister)
router.post('/verifylogin',AdminController.verifylogin)
router.get('/logout',AdminController.logout)


//teacher 
router.get('/teacher/display',TeacherController.display)


//Blog COntroller
router.get('/admin/blog/displayblog',Auth,BlogController.displayblog)
router.get('/admin/blog/createblog',BlogController.createblog)
router.post('/insertblog',BlogController.insertblog)
router.get('/viewblog/:id',BlogController.viewblog)
router.get('/editblog/:id',BlogController.editblog)
router.post('/updateblog/:id',BlogController.updateblog)
router.get('/deleteblog/:id',BlogController.deleteblog)


//categoryController
router.get('/admin/category/displaycategory',CategoryController.displaycategory)
router.get('/admin/category/createcategory',CategoryController.createcategory)
router.post('/insertcategory',CategoryController.insertcategory)
router.get('/admin/category/viewcategory/:id',CategoryController.viewcategory)
router.get('/admin/category/editcategory/:id',CategoryController.editcategory)
router.post('/admin/category/updatecategory/:id',CategoryController.updatecategory)
router.get('/admin/category/deletecategory/:id',CategoryController.deletecategory)


//AboutController files
router.get('/admin/about/createabout',AboutController.createabout)
router.post('/insertabout',AboutController.insertabout)
router.get('/admin/about/displayabout',AboutController.displayabout)
router.get('/admin/about/viewabout/:id',AboutController.viewabout)
router.get('/admin/about/editabout/:id',AboutController.editabout)
router.post('/admin/about/updateabout/:id',AboutController.updateabout)
router.get('/admin/about/deleteabout/:id',AboutController.deleteabout)

//contact controller files
router.get('/admin/contact/createcontact',ContactController.createcontact)
router.post('/insertcontact',ContactController.insertcontact)
router.get('/admin/contact/displaycontact',ContactController.displaycontact)
router.get('/admin/contact/viewcontact/:id',ContactController.viewcontact)
router.get('/admin/contact/editcontact/:id',ContactController.editcontact)
router.post('/admin/contact/updatecontact/:id',ContactController.updatecontact)
router.get('/admin/contact/deletecontact/:id',ContactController.deletecontact)

module.exports=router