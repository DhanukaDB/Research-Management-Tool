const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({

  staffID : {
        type : String,
        require: true
  },
  name :{
    type: String,
    require: true
},

   email :{
         type: String,
         require: true
   },
   
   role :{
    type: String,
    require: true
},
  
   password: {
    type: String,
    require: true
   },

})

const Staff = mongoose.model("Student", staffSchema);

module.exports = Staff;