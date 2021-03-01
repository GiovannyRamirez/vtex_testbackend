import { Router } from 'express'
import { newDepartament, list } from '../controllers/departament.controller'

const router = Router()

router.route('/').post(newDepartament)
router.route('/').get(list)

export default router
