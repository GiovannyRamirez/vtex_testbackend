import { Request, Response } from 'express'
import Vendor, { IVendor } from '../models/vendor.model'

export async function newVendor(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, phone } = req.body    
    const vendor:IVendor = await Vendor.create({ name, email, phone })
    res.status(200).json({ vendor })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}

export async function listVendors(req: Request, res: Response): Promise<void> {
  try {
    const vendors:IVendor[] = await Vendor.find()
    res.status(200).json({ vendors })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}
