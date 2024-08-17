import express from 'express'
import {  createCarListing, deleteCarListing, deleteUser, getListing, myListings, updateUser, updateUserListing } from '../controllers/userController.js'
import { verifyToken } from '../utilities/verifyUser.js'

const router = express.Router()

router.get("/", (req, res) => {
    res.send('New autovault')
})


router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.post('/createlisting', verifyToken, createCarListing)
router.delete('/delete-listing/:id', verifyToken, deleteCarListing)
router.put('/update-listing/:id', verifyToken, updateUserListing);

router.get('/mylistings/:id',  myListings)
router.get('/get-listing/:id',  getListing)





export default router