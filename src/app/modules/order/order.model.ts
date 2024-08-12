import mongoose, { Schema } from 'mongoose';
import { TORDER, TORDERMODEL, TPRODUCTORDERSTATUS } from './order.interface';

const orderSchema: Schema<TORDER> = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
        },
        price: Number,
      },
    ],
    totalPrice: Number,
    status: {
      type: String,
      enum: Object.values(TPRODUCTORDERSTATUS),
      // Set enum values here
      default: TPRODUCTORDERSTATUS.COMPLETED,
    },
  },
  {
    timestamps: true,
  }
);

//methods
orderSchema.methods.total = function(): string {
  return this.totalPrice;
};

//instance
orderSchema.statics.findAll = function(status: string): Promise<TORDER | null> {
  return this.find({ status });
};

const Order: TORDERMODEL = mongoose.model<TORDER, TORDERMODEL>('Order', orderSchema);

export default Order;
