const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    candidate_name: 
        {
            type: String,
            unique: true,
        },
    candidate_party: String,
    candidate_name_pretty: String,
    candidate_title: String,
    
    })

const Candidates = mongoose.model('Candidates', CandidateSchema);
module.exports = Candidates
