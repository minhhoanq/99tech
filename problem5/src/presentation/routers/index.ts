import express from "express";
const router = express.Router();
import resourceRouter from "./resource/index";

//route resource
router.use("/resource", resourceRouter);

export default router;
