import { Router } from 'express';
import { addDonation } from '../controllers/donation.controllers.js';

const router = Router();

router.post('/', addDonation);

export default router;
