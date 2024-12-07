import { Router } from 'express';
import {
	addDonation,
	getDonationsByUserEmail,
} from '../controllers/donation.controllers.js';

const router = Router();

router.post('/', addDonation);
router.get('/user/:email', getDonationsByUserEmail);

export default router;
