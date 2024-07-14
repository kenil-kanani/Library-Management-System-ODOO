import mongoose, { Schema } from 'mongoose';

const librarySchema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: false },
        librarian: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

export const Library = mongoose.model('Library', librarySchema);
