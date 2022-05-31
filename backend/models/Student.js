const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({

  studentID : {
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
   
   contactNumber : {
    type: Number,
    require: true
},

   password: {
    type: String,
    require: true
 },
   profilePicture: {
      imagePublicId: {
        type: String,
        required: [
          true,
          "Error with cloudinary service! Can not find the paper URL.",
        ],
      },
      imageSecURL: {
        type: String,
        required: [
          true,
          "Error with cloudinary service! Can not find the paper URL.",
        ],
      },
    },
})

//by using "pre save" we run this code segment before mongoose save data on db
studentSchema.pre("save", async function (next) {
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
studentSchema.methods.matchPasswords = async function (password) {
      return await bcrypt.compare(password, this.password); //password refers to user providing one and this.password refers to one that get from db
    };

studentSchema.methods.getSignedToken = function () {
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });
    };


const Student = mongoose.model("Student", studentSchema);
module.exports = Student;