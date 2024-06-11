import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://siddhi1kcr:FoodieSiddhi@cluster0.89ttx5z.mongodb.net/Foodie's").then(()=>console.log("DB Connected"));
}