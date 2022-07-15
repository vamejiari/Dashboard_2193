import express from 'express'
import { credenciales } from '../controllers/Login.js'
const router=express.Router()

router.post('/', credenciales)

export default router