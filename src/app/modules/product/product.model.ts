import mongoose, { Schema } from 'mongoose';
import { TPRODUCT, TPRODUCTMODEL } from './product.interface';

const productSchema: Schema<TPRODUCT> = new mongoose.Schema(
  {
    name: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: [true, 'price required.'],
    },
    inventory: {
      type: Number,
      required: [true, 'inventory required.'],
    },
    ratings: [Number],
    tags: [String],
  },
  {
    timestamps: true,
  }
);

//pre/save hook middleware:
productSchema.pre('save', function() {
  return (this.price = this.price - 4);
});

//instance methods:
productSchema.methods.productName = function(): string {
  return this.name + +this.price;
};

//static methods:
productSchema.statics.findByName = async function(
  name: string
): Promise<TPRODUCT | null> {
  return this.find({ name });
};

//virtual:
productSchema.virtual('nameRatings').get(function() {
  return this.name + +this.ratings[0];
});

//model:
const Product = mongoose.model<TPRODUCT, TPRODUCTMODEL>('Product', productSchema);

export default Product;
