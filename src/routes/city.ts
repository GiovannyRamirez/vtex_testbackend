import { Router } from 'express'
import { newCity, list } from '../controllers/city.controller'

const router = Router()

router.route('/').post(newCity)
router.route('/').get(list)

export default router
