import fastify from 'fastify';
import { buildConfig } from './config/env';
import { prettyLog } from './utils/prettyLog';

const server = fastify({
  logger: {
    transport: prettyLog
  }
});

async function buildServer() {
  try {
    // funcionou :)
    server.decorate('config', buildConfig);
    await server.listen({ port: 5000, host: '0.0.0.0' });
  } catch (error: unknown) {
    server.log.error(error, 'deu merda');
    process.exit(1);
  }
}

buildServer();
