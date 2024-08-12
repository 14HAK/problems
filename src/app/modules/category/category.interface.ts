import { Document, Model, Types } from 'mongoose';

// Document Interface:
export interface TCATEGORY extends Document {
  name: string;
  email: string;
  dateOfBirth: Date;
  age: number;
  isActive: boolean;
  purchases: Types.ObjectId[];
  fullName(): string; // instance methods
  completeName: string; // This is a virtual property
}

// Model Interface: // statics method
export interface TCATEGORYMODEL extends Model<TCATEGORY> {
  findByEmail(email: string): Promise<TCATEGORY | null>;
}
