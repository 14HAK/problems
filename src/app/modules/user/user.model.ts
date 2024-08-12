import mongoose, { Schema } from 'mongoose';
import { TUSER, TUSERMODEL } from './user.interface';
import moment from 'moment';

const userSchema: Schema<TUSER> = new mongoose.Schema(
  {
    name: {
      firstName: {
        type: String,
        required: [true, 'firstName is required.'],
      },
      lastName: {
        type: String,
        required: [true, 'lastName is required.'],
      },
    },
    email: {
      type: String,
      required: [true, 'email is required.'],
      unique: true,
    },
    age: {
      type: Number,
      required: [true, 'age is required.'],
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'dateOfBirth is required.'],
      // store this formate [2002-12-09] using pre / save hook.
    },
    address: {
      street: {
        type: String,
        required: [true, 'street is required.'],
      },
      city: {
        type: String,
        required: [true, 'city is required.'],
      },
      state: {
        type: String,
        default: 'N/O',
      },
      zip: {
        type: String,
        default: 'N/O',
      },
      country: {
        type: String,
        required: [true, 'country is required.'],
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    purchases: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
    preferences: {
      darkMode: {
        type: Boolean,
        default: true,
      },
      emailNotification: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

//* using pre / save hook to save this date in this formate
// npm install moment.
// import moment from 'moment';
// return moment(this.date).format('DD/MM/YYYY');
// search:  required: [true, 'dateOfBirth is required.']

// pre / save hook middleware:
userSchema.pre('save', function(next) {
  this.dateOfBirth = new Date(moment(this.dateOfBirth).format('YYYY/DD/MM'));
  next();
});

// instance methods named "fullName()":
userSchema.methods.fullName = function(): string {
  return `${this.name}`;
};

// statics method name "findByEmail":
userSchema.statics.findByEmail = function(email: string): Promise<TUSER | null> {
  return this.findOne({ email }).exec();
};

// virtual methods:
userSchema.virtual('completeName').get(function() {
  return this.name.firstName + this.name.lastName;
});

const User: TUSERMODEL = mongoose.model<TUSER, TUSERMODEL>('User', userSchema);

export default User;
