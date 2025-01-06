const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    scheduledDate: {
        type: Date,
        required: true
    },
    timeSlot: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    },
    serviceType: [{
        type: String,
        enum: ['repair', 'maintenance', 'inspection', 'diagnostic'],
        required: true
    }],
    description: String,
    estimatedDuration: Number, // in hours
    assignedMechanic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show'],
        default: 'scheduled'
    },
    preferredContact: {
        type: String,
        enum: ['email', 'phone', 'sms'],
        default: 'email'
    },
    reminderSent: {
        type: Boolean,
        default: false
    },
    notes: String,
    estimatedCost: Number
}, { timestamps: true });

// Index for faster date-based queries
appointmentSchema.index({ scheduledDate: 1, status: 1 });

module.exports = mongoose.model('Appointment', appointmentSchema); 