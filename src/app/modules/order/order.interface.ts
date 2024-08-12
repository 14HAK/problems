import { Document, Model, Types } from 'mongoose';

interface TPRODUCTITMS {
  productId: Types.ObjectId;
  quantity: number;
  price: number;
}

export enum TPRODUCTORDERSTATUS {
  COMPLETED = 'completed',
  PENDING = 'pending',
  CANCELED = 'canceled',
}

export interface TORDER extends Document {
  userId: Types.ObjectId;
  items: TPRODUCTITMS;
  totalPrice: number;
  status: TPRODUCTORDERSTATUS;
  total(): string;
}

export interface TORDERMODEL extends Model<TORDER> {
  findAll(status: string): Promise<TORDER | null>;
}
