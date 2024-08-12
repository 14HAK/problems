import { Document, Model, Types } from 'mongoose';

// Document Interface:
export interface TREVIEW extends Document {
  productId: Types.ObjectId;
  userId: Types.ObjectId;
  rating: number;
  comment: string;
  ratingComent(): string; // instance method,
  ratingPercent: string; // virtual field,
}

// Model Interface: // statics method
export interface TREVIEWMODEL extends Model<TREVIEW> {
  findByUserId(id: string): Promise<TREVIEW | null>;
}
