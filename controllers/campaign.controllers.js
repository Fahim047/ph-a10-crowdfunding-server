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
			.json({ status: false, error: 'All fields are required' });
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
		status: true,
		data: newCampaign,
	});
});

export const getCampaigns = asyncHandler(async (req, res) => {
	try {
		const campaigns = await Campaign.find();
		res.status(200).json({
			status: true,
			data: campaigns,
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
});

export const getCampaign = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const campaign = await Campaign.findById(id);
	console.log(campaign);
	if (!campaign) {
		return res
			.status(404)
			.json({ success: false, message: 'Campaign not found' });
	}

	return res.status(200).json({ success: true, data: campaign });
});

export const updateCampaign = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const updatedCampaign = await Campaign.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	if (!updatedCampaign) {
		return res.status(404).json({
			success: false,
			message: 'Campaign not found',
		});
	}

	return res.status(200).json({
		success: true,
		data: updatedCampaign,
	});
});

export const deleteCampaign = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const deletedCampaign = await Campaign.findByIdAndDelete(id);
	console.log(deletedCampaign);

	if (!deletedCampaign) {
		return res.status(404).json({
			success: false,
			message: 'Campaign not found',
		});
	}

	return res.status(200).json({
		success: true,
		data: deletedCampaign,
	});
});

export const getMyCampaigns = asyncHandler(async (req, res) => {
	const { email } = req.params;

	if (!email) {
		return res
			.status(400)
			.json({ success: false, message: 'Author email is required' });
	}

	const campaigns = await Campaign.find({ 'author.email': email });

	if (!campaigns.length) {
		return res
			.status(404)
			.json({ success: false, message: 'No campaigns found for this author' });
	}

	res.status(200).json({ success: true, data: campaigns });
});
