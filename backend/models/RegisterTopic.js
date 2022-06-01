const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regtopicSchema = new Schema({

groupno : {
        type : String,
        require: true
  },
 topic : {
            type : String,
            require: true
      },   
  researchArea : {
        type : String,
        require: true
  }, 
  supervisor : {
    type : String,
    require: true
}, 
  description : {
    type : String,
    require: true
}

})

const RegisterTopic = mongoose.model("RegisterTopic", regtopicSchema);

module.exports = RegisterTopic;