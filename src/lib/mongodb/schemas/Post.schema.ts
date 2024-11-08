
import { Document, Schema } from 'mongoose';
import Post from '../../../core/entity/post';

export const PostSchema = new Schema<Post, Document, Post>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

