import { Request, Response } from 'express'
import { ILocation } from '../interfaces/location' 
import City from '../models/city.model'

export async function newCity(req: Request, res: Response): Promise<void> {
  try {
    const { name } = req.body
    const city:ILocation = await City.create({ name })
    res.status(200).json({ city })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}

export async function list(req: Request, res: Response): Promise<void> {
  try {
    const cities:ILocation[] = await City.find()
    res.status(200).json({ cities })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}
