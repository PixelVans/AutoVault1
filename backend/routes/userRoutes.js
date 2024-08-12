import express from 'express'
const router = express.Router()

router.get("/", (req, res) => {
    res.send('New autovault')
})







export default router