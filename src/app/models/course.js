const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String},
    description: { type: String},
    img: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoID: { type: String },
    levelCourse: { type: String },
    number_of_participants: { type: Number, default: 0 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
module.exports = mongoose.model('Course', Course);
