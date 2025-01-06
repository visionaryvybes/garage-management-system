const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
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
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    }],
    parts: [{
        part: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Part'
        },
        quantity: Number,
        unitPrice: Number,
        subtotal: Number
    }],
    labor: {
        hours: Number,
        ratePerHour: Number,
        total: Number
    },
    subtotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'issued', 'paid', 'overdue', 'cancelled'],
        default: 'draft'
    },
    issueDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'credit_card', 'debit_card', 'bank_transfer', 'check'],
    },
    paymentDate: Date,
    notes: String,
    warranty: {
        period: Number, // in months
        terms: String
    }
}, { timestamps: true });

// Auto-generate invoice number before saving
invoiceSchema.pre('save', async function(next) {
    if (this.isNew) {
        const date = new Date();
        const year = date.getFullYear().toString().substr(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const count = await mongoose.model('Invoice').countDocuments() + 1;
        this.invoiceNumber = `INV-${year}${month}-${count.toString().padStart(4, '0')}`;
    }
    next();
});

// Index for faster searches
invoiceSchema.index({ invoiceNumber: 1, customer: 1, status: 1 });

module.exports = mongoose.model('Invoice', invoiceSchema); 