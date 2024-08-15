import express from 'express'
import {  createCarListing, deleteUser, updateUser } from '../controllers/userController.js'
import { verifyToken } from '../utilities/verifyUser.js'
const router = express.Router()

router.get("/", (req, res) => {
    res.send('New autovault')
})


router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.post('/createlisting', verifyToken, createCarListing)




export default router