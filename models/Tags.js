const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    name: {
        tag_name: String,
        count: Number,
    },
}
)
const Tags = mongoose.model('Tags', TagsSchema);
module.exports = Tags
