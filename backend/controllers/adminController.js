const Admin = require("../models/Admin");

exports.getAdmin = async (req, res) => {
    const id = req.user._id;
  
    try {
      const Admin = await Admin.findById({ _id: id });
      res.status(200).send({ Admin: Admin });
  
      return true;
    } catch (error) {
      res.status(500).json({
        success: false,
        desc: "Error in adding todo -" + error,
      });
    }
  };

  exports.updateAdmin = async (req, res) => {
    const { username, email, fileEnc } = req.body;
    let Admin;
    try {
      if (fileEnc) {
        const uploadedResponse = await cloudinary.uploader.upload(fileEnc, {
          upload_preset: "Newsletter_Covers",
        });
        Admin = await Admin.findByIdAndUpdate(
          req.user._id,
          {
            $set: {
              username,
              email,
              profilePicture: {
                imagePublicId: uploadedResponse.public_id,
                imageSecURL: uploadedResponse.secure_url,
              },
            },
          },
          {
            new: true,
            upsert: false,
            omitUndefined: true,
          }
        );
      } else {
        Admin = await Admin.findByIdAndUpdate(
          req.user._id,
          {
            $set: {
              username,
              email,
            },
          },
          {
            new: true,
            upsert: false,
            omitUndefined: true,
          }
        );
      }
      res.status(200).send({
        success: true,
        desc: "Admin account updated successfully",
        Admin,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        desc: "Error in update Admin account " + error,
      });
    }
  };