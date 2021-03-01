import { Request, Response } from 'express'
import { ILocation } from '../interfaces/location'
import Country from '../models/country.model'

export async function newCountry(req: Request, res: Response): Promise<void> {
  try {
    const { name } = req.body
    const country:ILocation = await Country.create({ name })
    res.status(200).json({ country })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}

export async function list(req: Request, res: Response): Promise<void> {
  try {
    const countries:ILocation[] = await Country.find()
    res.status(200).json({ countries })
  } catch (err) {
    res.status(400).json({ message: `Ups ${err.message}` })
  }
}

