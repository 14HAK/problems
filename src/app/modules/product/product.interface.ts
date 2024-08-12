import { Document, Model, Types } from 'mongoose';

export interface TPRODUCT extends Document {
  name: string;
  category: Types.ObjectId;
  price: number;
  inventory: number;
  ratings: [number];
  tags: [string];
  productName(): string; // instance method
  nameRatings: string;
}

export interface TPRODUCTMODEL extends Model<TPRODUCT> {
  findByName(name: string): Promise<TPRODUCT | null>;
}
