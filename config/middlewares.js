module.exports = [
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
        },
      },
    },
  },

  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://wvnnvcry.github.io',
        'http://localhost:5500',
        'http://127.0.0.1:5500',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Accept'],
      exposedHeaders: ['Content-Range', 'X-Total-Count'],
      credentials: false,
      maxAge: 86400,
      keepHeaderOnError: true,
    },
  },

  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];