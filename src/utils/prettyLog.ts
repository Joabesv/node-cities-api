import { PrettyOptions } from 'pino-pretty';

const options: PrettyOptions = {
  destination: 1,
  colorize: true,
  translateTime: 'HH:MM:ss.l',
  ignore: 'pid,hostname',
};

export const prettyLog = {
  target: 'pino-pretty',
  options,
};
