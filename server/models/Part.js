const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    partNumber: {
        type: String,
        required: true,
        unique: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['engine', 'transmission', 'brake', 'electrical', 'suspension', 'body', 'other']
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    reorderPoint: {
        type: Number,
        required: true,
        default: 5
    },
    location: {
        shelf: String,
        bin: String
    },
    compatibility: [{
        make: String,
        model: String,
        year: Number
    }],
    supplier: {
        name: String,
        contact: String,
        leadTime: Number // in days
    },
    lastOrdered: Date,
    warranty: {
        duration: Number, // in months
        terms: String
    }
}, { timestamps: true });

// Index for faster search
partSchema.index({ partNumber: 1, name: 1 });

module.exports = mongoose.model('Part', partSchema); 