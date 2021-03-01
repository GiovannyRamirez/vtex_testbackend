import { model, models, Schema, Document } from 'mongoose'

export interface IVendor extends Document {
  name: string
  email: string
  phone: string
}

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const phoneRegexp = /^[0-9]{7,10}$/g

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, 'Name should have at least 2 letters'],    
  },
  email: {
    type: String,
    required: true,
    match: [emailRegexp, 'Invalid Email'],
    validate: [
      {
        validator(value:String) {
          return models.Vendor.findOne({ email: value })
            .then(vendor => !vendor)
            .catch(() => false)
        },
        message: "Email already exists"
      }
    ]
  },
  phone: {
    type: String,
    default: '0000000',
    match: [phoneRegexp, 'Invalid phone number, it must have between 7 and 10 digits']
  }
}, {
  timestamps: true,
})

export default model<IVendor>('Vendor', vendorSchema)
