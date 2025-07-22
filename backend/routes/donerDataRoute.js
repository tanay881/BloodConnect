import express from "express";
import { postDonerData, getDonerData } from "../controllers/donerDataController.js";

const donerDataRouter = express.Router()

donerDataRouter.post('/donateblood', postDonerData)
donerDataRouter.get('/donerdata', getDonerData)

export default donerDataRouter;