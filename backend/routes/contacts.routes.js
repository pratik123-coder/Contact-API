import { Router } from "express";
import { createUser, getContacts } from "../controllers/contacts.controllers.js";


const router = Router();

router.post("/contacts", createUser);

router.get("/getcontacts", getContacts);

export default router;