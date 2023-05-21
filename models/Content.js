// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

// Create a schema for the Content model with the following fields:  Title (string), Description (string), URL (string), and Date (date), 
// and a Text field (string) for the content of the article
const ContentSchema = new Schema({
    title: String,
    description: String,
    url: String,
    date: { type: Date, default: Date.now},
    body: String
});

// Create a model using the schema.
const Content = mongoose.model("Content", ContentSchema);

// Export the model.
module.exports = Content;
