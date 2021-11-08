const course = require('../models/course');
class HomeController{
    show(req, res, next){
        course
            .find({})
            .then((course) => {
                course = course.map((course) => course.toObject());
                res.render('home', { course: course });
            })
            .catch(next);
    }
    AddCourse(req, res, next){
        res.render('AddCourse');
    }
    store(req, res, next){
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`;
        const newCourse = new course(formData);
        newCourse.save();
        res.redirect('back');
    }
}
module.exports = new HomeController();