import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name : {
        type: String,
        required: true,
        index: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    },
    refreshToken : {
        type: String
    }
},{timestamps: true});

const User = Schema.model('User', userSchema);