const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    name: {
        tag_name: String,
        count: Number,
        fake_clicks: {type: Number, default: Math.floor(Math.random() * 101) + 14},
        real_clicks: Number,
    },
}
)
const Tags = mongoose.model('Tags', TagsSchema);
module.exports = Tags