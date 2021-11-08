const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/website_f8', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect Succesfuly');
    }catch (e) {
        console.log('Connect false');
    }
}
module.exports = {connect}