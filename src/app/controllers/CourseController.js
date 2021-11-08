const course = require('../models/course');
class CourseController{
    show(req, res, next){
        course
            .find({})
            .then((course) => {
                course = course.map((course) => course.toObject());
                res.render('listCourse', { course: course , isActive: false });
            })
            .catch(next);
    }
    showDetails(req, res, next){
        res.render('courseDetail');
    }
}
module.exports = new CourseController();