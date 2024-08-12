// TLOCATION extends Document
// TLOCATIONMODEL extends Model<TLOCATION>

import { Document, Model } from 'mongoose';

interface TADDRESS {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface TCOORDINATES {
  type: string;
  coordinates: number[];
}

interface TOPENINGHOURS {
  open: string;
  close: string;
}

export interface TLOCATION extends Document {
  name: string;
  address: TADDRESS;
  coordinates: TCOORDINATES;
  openingHours: TOPENINGHOURS;
  locationAddress: string; //virtual properties
  getCountryName(): string; //instance methods
}

export interface TLOCATIONMODEl extends Model<TLOCATION> {
  findLocationByName(name: string): Promise<TLOCATION | null>;
}
