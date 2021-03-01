import { Document } from 'mongoose'

export interface ILocation extends Document {
  name: string
}

// Regexp only letters and multiple words
export const locationRegexp = /^[A-záéíóúÁÉÍÓÚñÑ\s]{2,}$/g
