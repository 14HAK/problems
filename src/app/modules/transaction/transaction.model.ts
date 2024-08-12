import mongoose, { Schema } from 'mongoose';
import {
  TTRANSACTION,
  TTRANSACTIONMODEL,
  TTRANSACTIONSTATUS,
} from './transaction.interface';

const transactionSchema: Schema<TTRANSACTION> = new mongoose.Schema(
  {
    orderId: {
      type: Schema.ObjectId,
      ref: 'Order',
    },
    amount: Number,
    status: {
      type: String,
      default: TTRANSACTIONSTATUS?.COMPLETE,
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
transactionSchema.pre('save', function(next) {
  this.amount = this.amount + 1;
  next();
});

// instance methods:
transactionSchema.methods.findStatus = function(): string {
  return `${this.status}`;
};

// statics method name "findByEmail":
transactionSchema.statics.findOrder = function(
  id: string
): Promise<TTRANSACTION | null> {
  return this.findById({ orderId: id }).exec();
};

// virtual methods:
transactionSchema.virtual('mullerId').get(function() {
  return this.status;
});

const Transaction: TTRANSACTIONMODEL = mongoose.model<TTRANSACTION, TTRANSACTIONMODEL>(
  'Transaction',
  transactionSchema
);

export default Transaction;
