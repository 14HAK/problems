import { Document, Model, Types } from 'mongoose';

export interface TBLOG extends Document {
  title: string;
  content: string;
  authorId: Types.ObjectId;
  tags: string[];
  repeatTitle: string; //virtual field
  findTags(): string; // instance methods
}

export interface TBLOGMODEL extends Model<TBLOG> {
  findBlogByAuthorId(authorId: Types.ObjectId): Promise<TBLOG | unknown>;
}
