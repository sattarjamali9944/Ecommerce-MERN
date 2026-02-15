const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		/* category:{ type:String, }, */
		categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
		userId: { type: Schema.Types.ObjectId, ref: "users" },

		price: {
			type: Number,
			required: true,
		},
		detail: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		attribute: { type: String },
		subattribute: { type: String },
		qty: { type: String },
		salepercent: { type: String },
		warranty: { type: String },
		status: {
			type: String,
		},
		type: {
			type: String,
		},
		images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
		rating: [{ type: mongoose.Schema.Types.ObjectId, ref: "rating" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
