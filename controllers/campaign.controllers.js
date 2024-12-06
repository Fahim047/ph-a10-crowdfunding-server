import { Campaign } from '../models/campaign.models.js';

export const addCampaign = async (req, res) => {
	const {
		title,
		type,
		description,
		imageURL,
		minimumDonation,
		deadline,
		currentAmount,
		targetAmount,
		author: { email, name, photoURL },
	} = req.body;

	// if (!title || !type ||  !imageURL || !minimumDonation || !deadline || email || !name || !targetAmount) {
	//   return res.status(400).json({ error: 'All fields are required' });
	// }
	try {
		const newCampaign = await Campaign.create({
			title,
			type,
			description,
			imageURL,
			minimumDonation,
			deadline,
			currentAmount,
			targetAmount,
			author: {
				email,
				name,
				photoURL,
			},
		});

		res.status(201).json(newCampaign);
	} catch (err) {
		console.log(err);
	}
};

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
