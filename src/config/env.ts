import { EnvSchemaData, EnvSchemaOpt, envSchema } from 'env-schema';
import { configSchema } from './env.schema';


export function buildConfig(): EnvSchemaData {
  const envSchemaOptions: EnvSchemaOpt = {
    // sem julgamentos
    schema: configSchema as any,
    dotenv: true,
  };

  return envSchema(envSchemaOptions);
}