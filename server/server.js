import "dotenv/config"
import express from "express"
import cors from "cors"
import { connectDb } from "./config.js"
import contactModel from "./contact_model.js"
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json())

app.use(cors({
    origin: ['http://10.0.1.138', 'http://16.16.205.65'],
    credentials: true
}));

app.post("/api/send-msg" ,  (req , res)=>{
const {name , email , subject , message} = req.body 

const newCont = new contactModel({
      name,email,subject,message
    }).save().then(()=>{
      res.status(200).json({ 
            success: true, 
            message: "Message received successfully!" 
        });

    }).catch((err)=>{
      console.log(err)
    })
})

app.get("/api/get-list",async (req,res)=>{
    
const contacts =  await  contactModel.find();
res.json({
  success:true ,
  message : "Contacts successfully retireved ",
  data:contacts
})
})



connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
