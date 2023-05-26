import express from "express";
import { fileDownload } from "../controllers/file-controller";
const filerouter=express.Router();

filerouter.get("/download",fileDownload);

export default filerouter;