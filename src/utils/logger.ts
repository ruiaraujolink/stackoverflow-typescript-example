import { addColors, createLogger, format, transports } from 'winston';
const colorizer = format.colorize();

addColors({
  debug: 'green',
  error: 'bold red',
  info: 'bold blue',
  warn: 'italic yellow',
});

const alignColorsAndTime = format.combine(
  format.timestamp({
    format: 'DD-MM-YYYY HH:mm:ss',
  }),
  format.printf((msg) => colorizer.colorize(msg.level, `[${msg.level}] ${msg.timestamp} - ${msg.message}`)),
);

const logger = createLogger({
  exceptionHandlers: [new transports.File({ filename: 'uncaught_exceptions.log' })],
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console({
      format: format.combine(alignColorsAndTime),
      // eslint-disable-next-line no-process-env
      silent: process.env.NODE_ENV === 'test',
    }),
    new transports.File({
      filename: `logger.log`,
      format: format.combine(
        format.timestamp({
          format: 'DD-MM-YYYY HH:mm:ss',
        }),
      ),
    }),
  ],
});

export default logger;
