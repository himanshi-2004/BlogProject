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
router.get('/admin/blog/createblog',Auth,BlogController.createblog)
router.post('/insertblog',Auth,BlogController.insertblog)
router.get('/viewblog/:id',Auth,BlogController.viewblog)
router.get('/editblog/:id',Auth,BlogController.editblog)
router.post('/updateblog/:id',Auth,BlogController.updateblog)
router.get('/deleteblog/:id',Auth,BlogController.deleteblog)


//categoryController
router.get('/admin/category/displaycategory',Auth,CategoryController.displaycategory)
router.get('/admin/category/createcategory',Auth,CategoryController.createcategory)
router.post('/insertcategory',Auth,CategoryController.insertcategory)
router.get('/admin/category/viewcategory/:id',Auth,CategoryController.viewcategory)
router.get('/admin/category/editcategory/:id',Auth,CategoryController.editcategory)
router.post('/admin/category/updatecategory/:id',Auth,CategoryController.updatecategory)
router.get('/admin/category/deletecategory/:id',Auth,CategoryController.deletecategory)


//AboutController files
router.get('/admin/about/createabout',Auth,AboutController.createabout)
router.post('/insertabout',Auth,AboutController.insertabout)
router.get('/admin/about/displayabout',Auth,AboutController.displayabout)
router.get('/admin/about/viewabout/:id',Auth,AboutController.viewabout)
router.get('/admin/about/editabout/:id',Auth,AboutController.editabout)
router.post('/admin/about/updateabout/:id',Auth,AboutController.updateabout)
router.get('/admin/about/deleteabout/:id',Auth,AboutController.deleteabout)

//contact controller files
router.get('/admin/contact/createcontact',Auth,ContactController.createcontact)
router.post('/insertcontact',Auth,ContactController.insertcontact)
router.get('/admin/contact/displaycontact',Auth,ContactController.displaycontact)
router.get('/admin/contact/viewcontact/:id',Auth,ContactController.viewcontact)
router.get('/admin/contact/editcontact/:id',Auth,ContactController.editcontact)
router.post('/admin/contact/updatecontact/:id',Auth,ContactController.updatecontact)
router.get('/admin/contact/deletecontact/:id',Auth,ContactController.deletecontact)

module.exports=router