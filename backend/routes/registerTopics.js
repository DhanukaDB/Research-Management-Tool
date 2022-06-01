const router = require("express").Router();
let RegisterTopic = require ("../models/RegisterTopic");



//Add feedback for topics
router.route("/add").post((req,res) => {
    const groupno = req.body.groupno;
    const topic = req.body.topic;
    const researchArea = req.body.researchArea;
    const description = req.body.description;
    const supervisor=req.body.supervisor;

    if(!groupno || !topic || !researchArea || !description || !supervisor){
        return res.status(422).json({error:"please add all the feilds"})

    }
     

    RegisterTopic.findOne({groupno: groupno})
    .then((savedTopic) => {
        if(savedTopic) {
            return res.status(422).json({error:"Group already exists with that no"})
        }

    const newRegTopic = new RegisterTopic({
        groupno,
        topic,
        researchArea,
        supervisor,
        description
       
    })

    newRegTopic.save().then(() => {
         res.json("Result Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})



router.route("/").get((req,res) => {
     
    RegisterTopic.find().then((RegTopics) => {
        res.json(RegTopics)

    }).catch((err) => {
        console.log(err)
    })


})


//update  using topic ID
router.route("/update/:id").put(async (req, res) => {
      let topicID = req.params.id;
      const {groupno,topic, researchArea,supervisor,description} = req.body;

      const updateTopic = {
        groupno,
        topic,
        researchArea,
        supervisor,
        description
      }


      const update = await RegisterTopic.findByIdAndUpdate(topicID, updateTopic).then(() => {
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
    const topic = await RegisterTopic.findById(topicID).then((topic) => {
        res.status(200).send({status: "  fetched", topic})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get " , error: err.message})
    })
})



module.exports = router;
