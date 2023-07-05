// Require Mongoose
const mongoose = require("mongoose");
const Tags = require('./Tags');
const Candidates = require('./Candidates');
// Define a schema
const Schema = mongoose.Schema;

// Create a schema for the Content model with the following fields:  Title (string), Description (string), URL (string), and Date (date), 
// and a Text field (string) for the content of the article
let ContentSchema = new Schema({
    title: String,
    description: String,
    url: String,
    date: { type: Date, default: Date.now},
    body: String,
    image: String,
    site: String,
    date_published: String,
    source: String,
    fake_clicks: {type: Number, default: Math.floor(Math.random() * 101) + 14},
    real_clicks: Number,
    tags: {
        type: [ Tags.schema ],
        default: []
    },
    candidates: {
        type: [ Candidates.schema ],
        default: []
    },
    matched: {type: Number, default: 0},
});
ContentSchema.virtual('id').get(function(){
    return this._id.toHexString();
})
ContentSchema.index({title: 'text', body: 'text', description: 'text', tags: 'text', source: 'text', site: 'text', date_published: 'text', 
_id:'text', id:'text', url:'text', image:'text'}, 
{name: 'TextIndex', weights: {title: 10, body: 9, description: 5, tags: 5, source: 5, site: 5, date_published: 5, _id: 5, id: 5, url: 5, image: 5}});
// Create a model using the schema.
const Content = mongoose.model("Content", ContentSchema);

// Export the model.
module.exports = Content;
