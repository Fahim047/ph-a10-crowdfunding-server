import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		type: {
			type: String,
			enum: ['personal issue', 'startup', 'business', 'creative ideas'],
			required: true,
		},
		description: {
			type: String,
		},
		imageURL: {
			type: String,
			required: true,
		},
		minimumDonation: {
			type: Number,
			required: true,
			min: [10, 'Minimum donation amount must be at least 10.'],
		},
		currentAmount: {
			type: Number,
			default: 0,
			min: 0,
		},
		targetAmount: {
			type: Number,
			required: true,
			min: [100, 'Target amount must be at least 100.'],
		},
		deadline: {
			type: Date,
			required: true,
			validate: {
				validator: (date) => date > Date.now(),
				message: 'Deadline must be a future date.',
			},
		},
		author: {
			email: {
				type: String,
				required: true,
				trim: true,
				lowercase: true,
			},
			name: {
				type: String,
				required: true,
				trim: true,
			},
			photoURL: {
				type: String,
				required: true,
			},
		},
	},
	{ timestamps: true }
);

export const Campaign = mongoose.model('Campaign', campaignSchema);
