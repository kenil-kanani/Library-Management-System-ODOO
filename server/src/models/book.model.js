import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
    {
        library: { type: Schema.Types.ObjectId, ref: 'Library' }, // Reference to Library (assuming multiple libraries can have the same book)
        ISBN: { type: String, required: true },
        title: { type: String, required: true },
        thumbnail: { type: String, default: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg' },
        author: { type: String, required: true },
        publisher: { type: String, required: true },
        language: { type: String, required: true },
        year: { type: String, required: true },
        genre: { type: String },
        pageCount: { type: Number, required: true },
        quantity: { type: Number, required: true },
        available_quantity: { type: Number, required: true },
        borrowers: { type: Number, default: 0 },
    },
    { timestamps: true }
);


export const Book = mongoose.model('Book', bookSchema);
