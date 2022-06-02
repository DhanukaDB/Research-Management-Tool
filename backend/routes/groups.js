const router = require("express").Router();
let Group = require("../models/Group");



//Create New Group
router.route("/add").post((req,res) => {
    
    const studentID1 = req.body.studentID1;
    const studentID2 = req.body.studentID2;
    const studentID3 = req.body.studentID3;
    const studentID4 = req.body.studentID4;
    const field      = req.body.field;
    const supervisorName = req.body.supervisorName;
    const coSupName  = req.body.coSupName;
    const topic = req.body.topic;
    
   
  {/*  //check all required fields complete or not
    if(!studentID1 || !studentID2 || !studentID3 || !studentID4 || !field || !supervisorName || !topic ){
        return res.status(422).json({error:"please add all the feilds"})

    } */}
     
    //check the Supervisor allocate or not
    Group.findOne({supervisorName: supervisorName})
    .then((savedGroup) => {
        if(savedGroup) {
            return res.status(422).json({error:"You Supervisor allocated to another Group"})
        }

    
    const newGroup = new Group({
        studentID1,
        studentID2,
        studentID3,
        studentID4,
        field,
        supervisorName,
        coSupName,
        topic
        

    })

    newGroup.save().then(() => {
         res.json("Group Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})



//get all groups
router.route("/").get((req,res) => {
     
    Group.find().then((groups) => {
        res.json(groups)

    }).catch((err) => {
        console.log(err)
    })


})



//fetch a one group
router.route("/get/:id").get(async(req, res) => {

    let groupId = req.params.id;
    const user = await Group.findById(groupId).then((group) => {
        res.status(200).send({status: " Group fetched", group})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get Group" , error: err.message})
    })
})



//update group using an ID
router.route("/update/:id").put(async (req, res) => {
    let groupId = req.params.id;
    const {studentID1, studentID2, studentID3, studentID4,field,supervisorName, coSupName, topic } = req.body;

    const updateGroup = {
        studentID1,
        studentID2,
        studentID3,
        studentID4,
        field,
        supervisorName,
        coSupName,
        topic
    }


    const update = await Group.findByIdAndUpdate(groupId, updateGroup).then(() => {
      res.status(200).send({status: "Group updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
})



//Delete Group Using an Id
router.route("/delete/:id").delete(async (req, res) => {
    let groupId = req.params.id;
    
    await Group.findByIdAndDelete(groupId).then(() => {
        res.status(200).send({status: "Group deleted"});
    }).catch ((err) => {
        console.log(err.message);
        res.status(500).send({status: " Error with delete Group", error: err.message});
    })
  })



  










module.exports = router;