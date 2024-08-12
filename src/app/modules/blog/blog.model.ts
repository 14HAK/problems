import mongoose, { Schema, Types } from 'mongoose';
import { TBLOG, TBLOGMODEL } from './blog.interface';

const blogSchema = new Schema<TBLOG>(
  {
    title: String,
    content: String,
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

blogSchema.pre('save', function (next) {
  this.content = 'pre/save middleware';
  next();
});

blogSchema.methods.findTags = function () {
  return this.tags;
};

blogSchema.statics.findBlogByAuthorId = async function (
  authorId: Types.ObjectId
): Promise<TBLOG | unknown> {
  return await Blog.find({ authorId });
};

blogSchema.virtual('repeatTitle').get(function () {
  return this.title;
});

const Blog: TBLOGMODEL = mongoose.model<TBLOG, TBLOGMODEL>('Blog', blogSchema);

export default Blog;
