import { ApiError } from "../libs/ApiError.js";
import { User } from "../models/contact.model.js";

const createUser = async (req, res) => {
    try{
        const {username, contact } = req.body;
        const user = await User.create({username,contact});
        res.status(201).json(user);
        console.log("User created successfully");
    }
    catch(error){
        throw new ApiError(400, error.message, error.errors);
    }
}

const getContacts = async (req, res) => {
    try{
        const contacts = await User.find();
        res.status(200).json(contacts);
    }
    catch(error){
        throw new ApiError(400, error.message, error.errors);
    }
}

export {createUser,getContacts};

