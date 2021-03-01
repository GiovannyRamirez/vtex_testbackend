import { Document } from 'mongoose'

export interface ILocation extends Document {
  name: string
}

export const locationRegexp = /^[A-záéíóúÁÉÍÓÚñÑ]{2,}$/g
