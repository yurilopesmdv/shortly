import { Router } from "express";
import { signIn, signUp } from "../controllers/sign.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { signUpSchema } from "../schemas/sing.schema.js";

const signRouter = Router()

signRouter.post("/signup",validateSchema(signUpSchema), signUp)
signRouter.post("/signin", signIn)

export default signRouter