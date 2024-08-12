// Schema<TLOCATION>
import mongoose, { Schema } from 'mongoose';
import { TLOCATION, TLOCATIONMODEl } from './location.interface';
// Location:TLOCATIONMODEL = model<TLOCATION,TLOCATIONMODEL>

const locationSchema = new Schema<TLOCATION>(
  {
    name: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    coordinates: {
      type: {
        type: String,
        default: 'point',
      },
      coordinates: [Number],
    },
    openingHours: {
      open: String,
      close: String,
    },
  },
  {
    timestamps: true,
  }
);

//using pre / save hook to save this date in this formate
locationSchema.pre('save', function(next) {
  this.name = 'pre/save hook method';
  next();
});

// instance methods:
locationSchema.methods.getCountryName = function() {
  return this.address.country;
};

// statics methods:
locationSchema.statics.findLocationByName = async function(name: string) {
  return await Location.find({ name });
};

// virtual methods:
locationSchema.virtual('locationAddress').get(function() {
  return this.address.country;
});

const Location: TLOCATIONMODEl = mongoose.model<TLOCATION, TLOCATIONMODEl>(
  'Location',
  locationSchema
);

export default Location;
