import express from "express";
import { personDetail } from "../controllers/person-controller";
const personrouter=express.Router();

personrouter.post("/personal_details",personDetail);

export default personrouter;