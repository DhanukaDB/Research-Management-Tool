const router = require("express").Router();
let SendFeedbak = require ("../models/EvaluationTopics");



//Add feedback for topics
router.route("/add").post((req,res) => {
    const groupno = req.body.groupno;
    const topic = req.body.topic;
    const status = req.body.status;
    const feedback = req.body.feedback;


    if(!groupno || !topic || !status || !feedback ){
        return res.status(422).json({error:"please add all the feilds"})

    }
     

    SendFeedbak.findOne({groupno: groupno})
    .then((savedTopic) => {
        if(savedTopic) {
            return res.status(422).json({error:"Group already exists with that no"})
        }

    const newFeedback = new SendFeedbak({
        groupno,
        topic,
        status,
        feedback,
       
    })

    newFeedback.save().then(() => {
         res.json("Result Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})



router.route("/").get((req,res) => {
     
    SendFeedbak.find().then((feedbackTopics) => {
        res.json(feedbackTopics)

    }).catch((err) => {
        console.log(err)
    })


})


//update  using topic ID
router.route("/update/:id").put(async (req, res) => {
      let topicID = req.params.id;
      const {groupno,topic, staus,feedback} = req.body;

      const updateTopic = {
        groupno,
        topic,
        staus,
        feedback
      }


      const update = await SendFeedbak.findByIdAndUpdate(topicID, updateTopic).then(() => {
        res.status(200).send({status: "Result updated"})
      }).catch((err) => {
          console.log(err);
          res.status(500).send({status: "Error with updating data", error: err.message});
      })   
})



// //Delete  
// router.route("/delete/:id").delete(async (req, res) => {
//       let topicID = req.params.id;
      
//       await EvaluateTopic.findByIdAndDelete(topicID).then(() => {
//           res.status(200).send({status: " deleted"});
//       }).catch ((err) => {
//           console.log(err.message);
//           res.status(500).send({status: " Error with delete ", error: err.message});
//       })
//     })


router.route("/get/:id").get(async(req, res) => {

    let topicID = req.params.id;
    const topic = await SendFeedbak.findById(topicID).then((topic) => {
        res.status(200).send({status: "  fetched", topic})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get " , error: err.message})
    })
})



module.exports = router;
