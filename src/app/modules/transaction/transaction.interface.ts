import { Document, Model, Types } from 'mongoose';

export enum TTRANSACTIONSTATUS {
  COMPLETE = 'complete',
  REFUNDED = 'refunded',
}

// Document Interface:
export interface TTRANSACTION extends Document {
  orderId: Types.ObjectId;
  amount: number;
  status: TTRANSACTIONSTATUS;
  mullerId: string; //virtual property
  findStatus(): string; // instance
}

export interface TTRANSACTIONMODEL extends Model<TTRANSACTION> {
  findOrder(id: string): Promise<TTRANSACTION | null>;
}
