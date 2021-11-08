const routerHome = require('./home');
const routerCourse = require('./course');
function router(app){
    app.use('/',routerHome);
    app.use('/courses',routerCourse);
    
}
module.exports = router;