import pino from 'pino';
import pretty from 'pino-pretty';

export const Logger = pino(
  {
    enabled: true,
    level: 'warn',
  },
  pretty({
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'SYS:HH:MM:ss',
    destination: 1,
    sync: true,
  })
);
