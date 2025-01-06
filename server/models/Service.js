const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    serviceType: {
        type: String,
        required: true,
        enum: ['repair', 'maintenance', 'inspection', 'diagnostic']
    },
    description: {
        type: String,
        required: true
    },
    partsUsed: [{
        part: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Part'
        },
        quantity: Number,
        cost: Number
    }],
    laborHours: {
        type: Number,
        required: true
    },
    laborCost: {
        type: Number,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    mechanic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in_progress', 'completed', 'cancelled'],
        default: 'pending'
    },
    completedAt: Date,
    notes: String,
    warranty: {
        covered: {
            type: Boolean,
            default: false
        },
        expiryDate: Date,
        terms: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema); 