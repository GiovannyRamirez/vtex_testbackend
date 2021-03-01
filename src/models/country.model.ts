import { model, Schema } from 'mongoose'
import { ILocation, locationRegexp } from '../interfaces/location'

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [locationRegexp, 'Invalid country name, it must have at least 2 letters']
  }
}, {
  timestamps: true,
})

export default model<ILocation>('Country', countrySchema)
