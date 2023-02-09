import type { FastifyInstance } from 'fastify';
import type { Config } from '@/config/env.schema';

declare module 'fastify' {
  export interface FastifyInstance {
    config: Config
  }
}