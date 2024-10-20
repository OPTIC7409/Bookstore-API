import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
    publishedDate: Date;
    genre: string;
    summary: string;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    genre: { type: String, required: true },
    summary: { type: String, required: true }
});

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;
