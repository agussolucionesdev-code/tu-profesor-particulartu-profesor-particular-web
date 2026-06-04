import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import { publicApiLimiter } from './middleware/rateLimit.js';
import { errorHandler } from './middleware/errorHandler.js';
import { healthRoutes } from './routes/health.routes.js';
import { contactRoutes } from './routes/contact.routes.js';

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.corsOrigin.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('cors_not_allowed'));
    },
    credentials: false,
  }),
);
app.use(express.json({ limit: '64kb' }));

if (env.nodeEnv !== 'production') {
  app.use(morgan('dev'));
}

app.use(healthRoutes);
app.use(publicApiLimiter, contactRoutes);
app.use(errorHandler);
