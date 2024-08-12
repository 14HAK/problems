import mongoose, { Schema, Types } from 'mongoose';
import { TREVIEW, TREVIEWMODEL } from './review.interface';

const reviewSchema: Schema<TREVIEW> = new mongoose.Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: String,
  },
  {
    timestamps: true,
  }
);

//* using pre / save hook to save this date in this formate
reviewSchema.pre('save', function(next) {
  this.rating = this.rating + 1;
  next();
});

// instance methods:
reviewSchema.methods.ratingComment = function() {
  return this.rating + '' + this.comment;
};

// statics method name "findByEmail":
reviewSchema.statics.findByUserId = async function(id: string): Promise<TREVIEW | null> {
  return Review.findById({ userId: id });
};

// virtual methods:
reviewSchema.virtual('reviewPercent').get(function() {
  return this.rating / 5;
});

const Review: TREVIEWMODEL = mongoose.model<TREVIEW, TREVIEWMODEL>(
  'Review',
  reviewSchema
);

export default Review;
