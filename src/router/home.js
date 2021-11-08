const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
router.get('/', homeController.show);
router.get('/add-course',homeController.AddCourse);
router.post('/course/store',homeController.store);
module.exports = router;
