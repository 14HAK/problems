import mongoose, { Schema } from 'mongoose';
import { TCATEGORY, TCATEGORYMODEL } from './category.interface';

const CategorySchema: Schema<TCATEGORY> = new mongoose.Schema(
  {
    name: String,
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
CategorySchema.pre('save', function(next) {
  this.dateOfBirth = new Date();
  next();
});

// instance methods named "fullName()":
CategorySchema.methods.fullName = function(): string {
  return `${this.name}`;
};

// statics method name "findByEmail":
CategorySchema.statics.findByEmail = function(email: string): Promise<TCATEGORY | null> {
  return this.findOne({ email }).exec();
};

// virtual methods:
CategorySchema.virtual('completeName').get(function() {
  return this;
});

const Category: TCATEGORYMODEL = mongoose.model<TCATEGORY, TCATEGORYMODEL>(
  'Category',
  CategorySchema
);

export default Category;
