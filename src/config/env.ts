import { EnvSchemaData, EnvSchemaOpt, envSchema } from 'env-schema';
import { configSchema } from './env.schema';

function buildConfig(): EnvSchemaData {
  const envSchemaOptions: EnvSchemaOpt = {
    schema: configSchema,
    dotenv: true,
  };

  return envSchema(envSchemaOptions);
}

export const config = buildConfig();
