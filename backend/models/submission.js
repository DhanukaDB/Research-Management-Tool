const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },


    description: {
      type: String,
      required: true,
      trim: true
    },

    submission_path: {
        type: String,
        required: true
      },

    submission_mimetype: {
        type: String,
        required: true
      },

    
    },
    {
      timestamps: true
    }
  );


//create model name as Submission . then mongodb creates plural version of the collection it will be submissions.
const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;