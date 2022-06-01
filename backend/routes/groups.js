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


module.exports = router;