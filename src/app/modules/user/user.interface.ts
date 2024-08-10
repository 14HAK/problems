import { Document, Model, Types } from 'mongoose';

interface TUSERNAME {
  firstName: string;
  lastName: string;
}

interface TADDRESS {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface TPREFERENCES {
  darkMode: boolean;
  emailNotification: boolean;
}

// Document Interface:
export interface TUSER extends Document {
  name: TUSERNAME;
  email: string;
  dateOfBirth: Date;
  age: number;
  address: TADDRESS;
  isActive: boolean;
  purchases: Types.ObjectId[];
  preferences: TPREFERENCES;
  fullName(): string; // instance methods
  completeName: string; // This is a virtual property
}

// Model Interface: // statics method
export interface TUSERMODEL extends Model<TUSER> {
  findByEmail(email: string): Promise<TUSER | null>;
}
