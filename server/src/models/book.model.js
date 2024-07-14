import mongoose,{ Schema } from "mongoose";

const bookSchema = new Schema(
    {
        library: { type: Schema.Types.ObjectId, ref: 'Library' }, // Reference to Library (assuming multiple libraries can have the same book)
        ISBN: { type: String, required: true },
        title: { type: String, required: true },
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
