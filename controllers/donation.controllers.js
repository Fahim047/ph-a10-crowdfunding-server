import { Campaign } from '../models/campaign.models.js';
import { Donation } from '../models/donation.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const addDonation = asyncHandler(async (req, res) => {
	const { campaignId, amount, message, donor } = req.body;

	if (!campaignId || !amount || !donor) {
		return res.status(400).json({
			success: false,
			message: 'Some required fields are missing.',
		});
	}

	const campaign = await Campaign.findById(campaignId);
	if (!campaign) {
		return res
			.status(404)
			.json({ success: false, message: 'Campaign not found.' });
	}

	const donation = await Donation.create({
		campaignId,
		amount,
		message,
		donor,
	});

	campaign.currentAmount += parseFloat(amount);
	await campaign.save();

	res.status(201).json({ success: true, data: donation });
});
