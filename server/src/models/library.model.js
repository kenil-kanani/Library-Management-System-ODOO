const mongoose = require('mongoose');
const { Schema } = mongoose;

const librarySchema = new Schema(
    {
        name: { type: String, required: true },
        librarian: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

export const Library = mongoose.model('Library', librarySchema);
