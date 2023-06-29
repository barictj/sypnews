// Require Mongoose
const mongoose = require("mongoose");
const Tags = require('./Tags');
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
    matched: {type: Number, default: 0},
});
ContentSchema.virtual('id').get(function(){
    return this._id.toHexString();
})
ContentSchema.index({title: 'text', body: 'text', description: 'text', tags: 'text', source: 'text', site: 'text', date_published: 'text', _id:'text', id:'text'});
// Create a model using the schema.
const Content = mongoose.model("Content", ContentSchema);

// Export the model.
module.exports = Content;
