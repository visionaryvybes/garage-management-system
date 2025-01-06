const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    licensePlate: { type: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    serviceHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }],
    currentStatus: {
        type: String,
        enum: ['in_service', 'completed', 'waiting', 'scheduled'],
        default: 'waiting'
    }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema); 