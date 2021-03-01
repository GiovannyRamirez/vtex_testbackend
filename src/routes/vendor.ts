import { Router } from 'express'
import { newVendor, listVendors } from '../controllers/vendor.controller'

const router = Router()

router.route('/').post(newVendor)
router.route('/').get(listVendors)

export default router
