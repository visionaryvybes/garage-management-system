const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: [
            'appointment_reminder',
            'service_completed',
            'invoice_due',
            'maintenance_due',
            'part_reorder',
            'status_update',
            'warranty_expiring'
        ],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    relatedTo: {
        model: {
            type: String,
            enum: ['Appointment', 'Service', 'Invoice', 'Vehicle', 'Part']
        },
        id: mongoose.Schema.Types.ObjectId
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: ['pending', 'sent', 'read', 'failed'],
        default: 'pending'
    },
    sendVia: [{
        type: String,
        enum: ['email', 'sms', 'push', 'in_app'],
        default: ['in_app']
    }],
    scheduledFor: Date,
    sentAt: Date,
    readAt: Date,
    expiresAt: Date
}, { timestamps: true });

// Index for faster queries
notificationSchema.index({ recipient: 1, status: 1, scheduledFor: 1 });

module.exports = mongoose.model('Notification', notificationSchema); 