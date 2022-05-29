const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

  username : {
        type : String,
        require: true
  },
   phoneno : {
    type: Number,
    require: true
},

   password: {
    type: String,
    require: true
   },

})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;