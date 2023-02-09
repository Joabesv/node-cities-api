import { Type, Static } from '@sinclair/typebox';

export const configSchema = Type.Object({
  PORT: Type.Number({ default: 3000 }),
  HOST: Type.String({ default: 'localhost' }),
  DATABASE_URL: Type.String(),
  JWT_SECRET: Type.String({ minLength: 32 }),
  POSTGRES_USER: Type.String(),
  POSTGRES_PASSWORD: Type.String(),
});

export type Config = Static<typeof configSchema>;
