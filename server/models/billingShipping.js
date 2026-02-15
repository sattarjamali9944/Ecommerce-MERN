const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Address Schema to avoid redundancy for both billing and shipping
const AddressSchema = new Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	zip_code: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
});

// Define the BillingShipping schema
const BillingShippingSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	}, // Reference to User collection
	shipping: {
		type: AddressSchema,
		required: true,
	},
	billing: {
		type: AddressSchema,
		required: true,
	},
	sameAsShipping: { type: Boolean, default: false }, // Whether billing is the same as shipping
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to copy shipping info to billing if "sameAsShipping" is true
BillingShippingSchema.pre("save", function (next) {
	if (this.sameAsShipping) {
		this.billing = { ...this.shipping }; // Copy shipping address to billing
	}
	this.updatedAt = Date.now(); // Update the updatedAt field on save
	next();
});

// Create and export the BillingShipping model
const BillingShipping = mongoose.model(
	"BillingShipping",
	BillingShippingSchema
);
module.exports = BillingShipping;
