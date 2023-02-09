import Fastify from 'fastify';
import { fastifyAutoload } from '@fastify/autoload';
import { join } from 'node:path';
import { config } from '@/config/env';
import { prettyLog } from '@/utils/prettyLog';

export async function buildServer() {
  const server = Fastify({
    logger: {
      transport: prettyLog,
    },
  });

  try {
    // decorate instance with envVars
    server.decorate('config', config);
    server.register(fastifyAutoload, {
      dir: join(__dirname, '../modules'),
    });
  } catch (e: unknown) {
    server.log.error(e, 'error while mounting fastify')
  }

  return server;
}
