import express from 'express'


import { homeListings, publicListings } from '../controllers/publicController.js'
const router = express.Router()

router.get('/listings', publicListings)
router.get('/home/listings', homeListings)



export default router