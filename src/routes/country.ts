import { Router } from 'express'
import { newCountry, list } from '../controllers/country.controller'

const router = Router()

router.route('/').post(newCountry)
router.route('/').get(list)

export default router
