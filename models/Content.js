// Require Mongoose
const mongoose = require("mongoose");
const Tags = require('./Tags');
// Define a schema
const Schema = mongoose.Schema;

// Create a schema for the Content model with the following fields:  Title (string), Description (string), URL (string), and Date (date), 
// and a Text field (string) for the content of the article
const ContentSchema = new Schema({
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
        type:  Tags.schema ,
        default: {}
    },
});

// Create a model using the schema.
const Content = mongoose.model("Content", ContentSchema);

// Export the model.
module.exports = Content;
