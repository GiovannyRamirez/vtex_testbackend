import { Request, Response } from 'express'
import { ILocation } from '../interfaces/location'
import Departament from '../models/departament.model'

export async function newDepartament(req: Request, res: Response): Promise<void> {
  try {
    const { name } = req.body
    const departament:ILocation = await Departament.create({ name })
    res.status(200).json({ departament })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}

export async function list(req: Request, res: Response): Promise<void> {
  try {
    const departaments:ILocation[] = await Departament.find()
    res.status(200).json({ departaments })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}
