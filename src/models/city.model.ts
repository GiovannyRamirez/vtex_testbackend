import { model, Schema } from 'mongoose'
import { ILocation, locationRegexp } from '../interfaces/location'

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [locationRegexp, 'Invalid city name, it must have at least 2 letters']
  }
}, {
  timestamps: true,
})

export default model<ILocation>('City', citySchema)
