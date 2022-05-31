const StudentModel = require("../models/Student");

const mongoose = require("mongoose");

//fetch customer profile
exports.getStudentProfile = async (req,res) =>{
    try{
        if(!req.user) {
            res.status(422).json({
                success:false,
                desc:"Can not find the user - please check again",

            });
        }else {
            res.status(200).send({
                customer:req.user,
            });
        }
    }catch(error) {
        res.status(500).json({
            success:false,
            desc:"Error in getStudentProfile controller - "+error,
        });
    }
};

//update cutomer profile
exports.updateCustomerProfile = async (req,res) => {
    const {username,email,address,phone} = req.body;

    try{
        const newData = {
            username,
            email,
            address,
            phone
        };

        const updatedCustomer = await CustomerModel.findByIdAndUpdate(
            req.user.id,
            newData,
            {
                new:true,
                upsert:false,
                omitUndefined:true
            }
        );
        res.status(200).send({
            success:true,
            desc: "customer update successfully",
            updatedCustomer,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            desc:"Error in updating customer profile controller " +error,
        });
    }
};

