import S from 'fluent-json-schema';

export const configSchema = S.object()
  .required([
    'PORT',
    'HOST',
    'DATABASE_URL',
    'JWT_SECRET',
  ])
  .prop('PORT', S.number().default(3000))
  .prop('HOST', S.string().default('localhost'))
  .prop('DATABASE_URL', S.string())
  // ask for review about Secret possible types
  .prop('JWT_SECRET', S.string());