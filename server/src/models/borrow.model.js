import mongoose, { Schema } from 'mongoose';

const borrowSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        libId: { type: Schema.Types.ObjectId, ref: 'Library', required: true },
        borrowedAt: { type: Date, default: Date.now },
        dueDate: { type: Date, required: true },
        returnedAt: { type: Date },
        lateFee: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export const Borrow = mongoose.model('Borrow', borrowSchema);
