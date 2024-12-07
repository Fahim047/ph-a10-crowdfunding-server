import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema(
	{
		campaignId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Campaign',
			required: true,
		},
		donor: {
			name: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
				trim: true,
				lowercase: true,
			},
			photoURL: {
				type: String,
				required: true,
			},
		},
		amount: {
			type: Number,
			required: true,
		},
		message: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true }
);

export const Donation = mongoose.model('Donation', donationSchema);
