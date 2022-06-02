const path = require('path');
const express = require('express');
const multer = require('multer');
const Submission = require("../models/submission");
const Router = express.Router();


const upload = multer({              //The multer function takes an object as a parameter   which are storage ,limits and fileFilter function.
    storage: multer.diskStorage({
      destination(req, submission, cb) {    //req(request), file(actual uploaded file object) and cb(callback function).
        cb(null, './submissions');
      },
      submissionname(req, submission, cb) {       //provide the name we want to give for each uploaded file. 
        cb(null, `${new Date().getTime()}_${submission.originalname}`);
      }
    }),
  

      //decide to either accepts the file to be uploaded or reject it.
      submissionFilter(req, submission, cb) {
        if (!submission.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
          return cb(
            new Error(
              'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
            )
          );
        }
        cb(undefined, true); // continue with upload
      }
    });




    Router.post(
      '/upload',
      upload.single('submission'),
      async (req, res) => {
        try {
          const { title, description } = req.body;
          const { path, mimetype } = req.file;
          

         //passing those values to the object of the Submission model we created.
          const submission = new Submission({
            title,
            description,
            submission_path: path,
            submission_mimetype: mimetype
          });
          await submission.save();
          res.send('submission uploaded successfully.');
        } catch (error) {
          
          res.status(400).send('Error while uploading file. Try again later.');
        }
      },
      
      (error, req, res, next) => {
        //If the file type does not match with type or the file size is larger than we mentioned (1MB)
        if (error) {
          res.status(500).send(error.message);
        }
      }
    );




    module.exports = Router;