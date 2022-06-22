import 'express-async-errors';

import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import logger from './utils/logger';
import routes from './routes/v3';

// eslint-disable-next-line no-process-env
const port = process.env.PORT || config.get('port') || '3000';

const app = express();

const stream = {
  write(message: string) {
    logger.info(message);
  },
};

app.use(morgan('combined', { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.listen(port, () => logger.info(`Server running on http://localhost:${port}`));
