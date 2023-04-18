const express = require("express");
const dbConnect = require("./dbConnect");
const cors = require("cors");
const UserModel = require("./user.model");
const jwt = require("jsonwebtoken")
const app = express()




app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())


app.post("/login",async(req,res)=>{
    try {
        let user = await UserModel.find({email:req.body.email});
        if(user.length==0){
            return res.send("No Email Found!")
        }
        if(user.length>0){
            if(user[0].password != req.body.password){
                return res.send("Wrong Password")
            }
            const token = jwt.sign({id:user[0]._id ,email:user[0].email}, "HASHIRA" , {
                expiresIn:"20 seconds"
            })
            res.status(200).send({message:"Token Generated",token:token})
        }
    } catch (error) {
        console.log(error)
    }

})


app.listen(8080,()=>{
    dbConnect();
    console.log("Server Connected on http://localhost:8080")
})