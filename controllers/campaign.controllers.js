import { Campaign } from '../models/campaign.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
export const addCampaign = asyncHandler(async (req, res) => {
	const {
		title,
		type,
		description,
		imageURL,
		minDonation,
		deadline,
		currentAmount,
		targetAmount,
		author: { email, name, photoURL },
	} = req.body;

	if (
		!title ||
		!type ||
		!imageURL ||
		!minDonation ||
		!deadline ||
		!email ||
		!name ||
		!photoURL ||
		!targetAmount
	) {
		return res
			.status(400)
			.json({ status: 'failed', error: 'All fields are required' });
	}
	const newCampaign = await Campaign.create({
		title,
		type,
		description,
		imageURL,
		minDonation,
		deadline,
		currentAmount,
		targetAmount,
		author: {
			email,
			name,
			photoURL,
		},
	});

	return res.status(201).json({
		status: 'success',
		data: newCampaign,
	});
});

export const getCampaigns = async (req, res) => {
	try {
		const campaigns = await Campaign.find();
		res.status(200).json({
			status: 'success',
			data: campaigns,
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
};
