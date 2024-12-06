import cors from 'cors';
import express from 'express';
const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Something went wrong!' });
});

// Routers
import campaignRouter from './routes/campaign.routes.js';

app.use('/api/v1/campaigns', campaignRouter);

export { app };
