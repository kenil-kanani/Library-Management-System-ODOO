import mongoose from 'mongoose';
import { isEmail, isPassword } from '../utils/index.js';

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
        validate: [isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: true,
        validate: [isPassword, 'Please provide a valid password']
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationEmailSentAt: {
        type: Date,
        default: new Date(0)
    }
},
    {
        timestamps: true,
    }
)

const Auth = mongoose.model('Auth', authSchema);

export default Auth;