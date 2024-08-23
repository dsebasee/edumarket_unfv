import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://edumarket:123@cluster0.guqlj.mongodb.net/unfv_edumarket').then(()=>console.log("DB Connected"));
   
}
