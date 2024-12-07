import { Router } from 'express';
import {
	addCampaign,
	getCampaign,
	getCampaigns,
	getMyCampaigns,
	updateCampaign,
} from '../controllers/campaign.controllers.js';

const router = Router();

router.get('/', getCampaigns);
router.post('/', addCampaign);
router.get('/:id', getCampaign);
router.put('/:id', updateCampaign);
router.get('/my-campaigns', getMyCampaigns);

export default router;
