


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },

    tickettype: {
        type: String,
        required: true
    },
    yourcode: {
        type: String,
        required: true
    },
    IGhandle: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// Hash password before saving user
// userSchema.pre('save', async function(next) {
//     if (this.isModified('password') || this.isNew) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

// // Method to compare hashed passwords
// userSchema.methods.comparePassword = function(candidatePassword) {
//     return bcrypt.compare(candidatePassword, this.password);
// };

// Method to generate JWT
// userSchema.methods.generateAuthToken = function() {
//     return jwt.sign({ id: this._id, email: this.email }, "Adain", { expiresIn: '1h' });
// };

module.exports = mongoose.model('User', userSchema);