import cors from 'cors';
import express from 'express';
const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
import campaignRouter from './routes/campaign.routes.js';

app.use('/api/v1/campaigns', campaignRouter);

export { app };
