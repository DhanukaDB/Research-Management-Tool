const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({


Student1: {
    studentID : {
        type : String,
        unique: true,
        require: true
       },

    name :{
        type: String,
        require: true
       },
     
    email:{
        type: String,
        unique: true,
        require: true
        },
    
   
    contactNumber : {
        type: Number,
        require: true
        },
    },



    Student2: {
        studentID : {
            type : String,
            unique: true,
            require: true
           },
    
        name :{
            type: String,
            require: true
           },
         
        email:{
            type: String,
            unique: true,
            require: true
            },
        
       
        contactNumber : {
            type: Number,
            require: true
            },
        },



        Student3: {
            studentID : {
                type : String,
                unique: true,
                require: true
               },
        
            name :{
                type: String,
                require: true
               },
             
            email:{
                type: String,
                unique: true,
                require: true
                },
            
           
            contactNumber : {
                type: Number,
                require: true
                },
            },



            Student4: {
                studentID : {
                    type : String,
                    unique: true,
                    require: true
                   },
            
                name :{
                    type: String,
                    require: true
                   },
                 
                email:{
                    type: String,
                    unique: true,
                    require: true
                    },
                
               
                contactNumber : {
                    type: Number,
                    require: true
                    },
                },

    field: {

        type: String,
        require: true
    },        

    Supervisor: {
            staffID : {
                    type : String,
                    unique: true,
                    require: true
              },
              name :{
                type: String,
                require: true
            },
            
               email :{
                     type: String,
                     unique: true,
                     require: true
               },          
          },

     
   CoSupervior: {

            staffID : {
                type : String,
                unique: true,
                require: true
               },
            name :{
                type: String,
                require: true
               },
        
            email :{
                 type: String,
                 unique: true,
                 require: true
               },


        topic : {
            type:String,
            require: true
        }       
 }
})

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;