import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts) => {
   fastify.get('/', async (request, reply) => {
    try {
      fastify.log.info('this is working, root route')
      return reply.code(200).send({ msg: 'be welcome guest' })
    } catch (error: unknown) {
      fastify.log.error(error, 'error in root route')
    }
  })

};

export default root;
