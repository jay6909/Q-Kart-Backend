const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const { isEmailTaken } = require("../../models/user.model");
const { User } = require("../../models");
const mongoose=require('mongoose')
const router = express.Router();

// router.use( validate(userValidation.getUser))

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
// router.put("/create",userController.create)

router.get(
  "/:userId",
  validate(userValidation.getUser),
  userController.getUser
);
// router.get("/:userId", async (req, res) => {

//    const boolTaken=await isEmailTaken("test@gmail.com")
//    if(!boolTaken){
//     const user = await User.create({
//       _id: mongoose.Types.ObjectId(),
//       walletMoney: 500,
//       address: "test addr",
//       name: "jayaditya-developer",
//       email: "jayaditya@developer.com",
//       password: "sajdaw112skdlkdh",
//     });
//     return res.send(user);
//    }
//   //  return res.send(boolTaken)
  
// });

// router.post("/register",(req,res)=>{
//     res.send(req.body)
// })

module.exports = router;
