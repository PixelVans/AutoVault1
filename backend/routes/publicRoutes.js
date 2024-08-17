import express from 'express'


import { publicListings } from '../controllers/publicController.js'
const router = express.Router()

router.get('/listings', publicListings)


export default router