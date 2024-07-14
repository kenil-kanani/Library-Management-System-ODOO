import mongoose, { Schema } from 'mongoose';

// Define Notification Schema
const notificationSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        type: {
            type: String,
            enum: ['DueDate', 'NewArrival', 'OverdueFee'],
            required: true,
        },
        message: { type: String, required: true },
        dateSent: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ['sent', 'pending'],
            default: 'pending',
        },
    },
    { timestamps: true }
);

export const Notification = mongoose.model('Notification', notificationSchema);
