import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})

export const User = mongoose.model("User", contactSchema);