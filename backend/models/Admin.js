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

//by using "pre save" we run this code segment before mongoose save data on db
Admin.pre("save", async function (next) {
      //check whether the password has already been hashed or not by using isModified
      if (!this.isModified("password")) {
        next();
      }
    
      //hash password before passing it to db save query through the model
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt); //this.password reffers to password that contains within request object
    
      next();
    });
    
//to compare hashed passwords in login scenarios
Admin.methods.matchPasswords = async function (password) {
      return await bcrypt.compare(password, this.password); //password refers to user providing one and this.password refers to one that get from db
    };
    
Admin.methods.getSignedToken = function () {
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });
    };

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;