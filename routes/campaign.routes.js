import { Router } from 'express';
import {
	addCampaign,
	deleteCampaign,
	getCampaign,
	getCampaigns,
	getMyCampaigns,
	updateCampaign,
} from '../controllers/campaign.controllers.js';

const router = Router();

router.get('/user/:email', getMyCampaigns);
router.get('/', getCampaigns);
router.post('/', addCampaign);
router.get('/:id', getCampaign);
router.put('/:id', updateCampaign);
router.delete('/:id', deleteCampaign);

export default router;
