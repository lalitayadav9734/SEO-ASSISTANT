const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 url: {
  type: String,
  required:true
  },  
  industry: {
    type: String,
    required: true
  },
 targetCountry: {
  type: String,
  required: true
 }, 
 
targetAudience: {
  type: String,
  required: true
 },
primaryKeywords: {
  type: String,
  required: true  
},

})
const setupModel = mongoose.model('Setup',setupSchema);

module.exports = setupModel;
