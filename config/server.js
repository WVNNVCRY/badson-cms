module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 8080),
  url: env('PUBLIC_URL'),
  proxy: true,
  app: { keys: env.array('APP_KEYS') },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});