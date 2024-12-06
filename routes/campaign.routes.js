import { Router } from 'express';
import {
	addCampaign,
	getCampaigns,
} from '../controllers/campaign.controllers.js';

const router = Router();

router.get('/', getCampaigns);
router.post('/', addCampaign);

export default router;
