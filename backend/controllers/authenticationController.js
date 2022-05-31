// const Student = require ("../models/Student");

// exports.registerStudent = async (req, res, next) => {
//     const { studentID, name, email, contactNumber, password, ppEnc } = req.body;
//     let existingEmail = await findEmailDuplicates(email, res);
//     if (existingEmail === null) {
//       try {
//         const ppUploadRes = await cloudinary.uploader.upload(ppEnc, {
//           upload_preset: "Profile_Pictures",
//         });
//         const student = await Student.create({
//           studentID,
//           name,
//           email,
//           contactNumber,
//           password,
//           profilePicture: {
//             imagePublicId: ppUploadRes.public_id,
//             imageSecURL: ppUploadRes.secure_url,
//           },
          
//         });
//         const token = await Student.getSignedToken();
//         res.status(201).json({ success: true, token, role: "student" });
//       } catch (error) {
//         res.status(500).json({
//           error,
//           desc: "Error occurred in registerstudent" + error,
//         });
//       }
//     }
//   };
  

exports.register = (req,res,next) =>{
    res.send("register Route")
};

exports.login = (req,res,next) =>{
    res.send("login Route")
};

exports.forgotpassword = (req,res,next) =>{
    res.send("forgotpassword Route")
};

exports.resetpassword = (req,res,next) =>{
    res.send("resetpassword Route")
};