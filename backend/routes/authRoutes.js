import express from 'express'
import { googleSignUp, signOutUser, signin, signup } from '../controllers/authController.js'
const router = express.Router()
 

router.post("/sign-up", signup)
router.post("/sign-in", signin)
router.post("/google", googleSignUp)
router.get("/sign-out", signOutUser)

export default router









