import fastify from 'fastify';

const server = fastify({ logger: true });

async function buildServer()  {
  try {
    await server.listen({ port: 5000, host: '0.0.0.0' })
  } catch (error: unknown) {
    server.log.error(error, 'deu merda');
    process.exit(1);
  }
};


buildServer();