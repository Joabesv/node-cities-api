import S from 'fluent-json-schema';

export const configSchema = S.object()
  .required([
    'PORT',
    'HOST',
    'DATABASE_URL',
    'JWT_SECRET',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD'
  ])
  .prop('PORT', S.number().default(3000))
  .prop('HOST', S.string().default('localhost'))
  .prop('POSTGRES_PASSWORD', S.string())
  .prop('POSTGRES_USER', S.string().minLength(5))
  .prop('DATABASE_URL', S.string())
  // ask for review about Secret possible types
  .prop('JWT_SECRET', S.string());