module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Allow images, media, and fonts to be served from any location (good for Strapi's media library)
          'img-src': ['\'self\'', 'data:', 'blob:', 'cdn.jsdelivr.net', 'strapi.io', '*'],
          'media-src': ['\'self\'', 'data:', 'blob:', 'cdn.jsdelivr.net', 'strapi.io', '*'],
          'font-src': ['\'self\'', 'https:', 'data:', '*'],
          // IMPORTANT: Allow scripts from the default sources
          'script-src': ['\'self\'', 'https:', 'http:', 'blob:', '*'],
          
          // 🛑 ADDED LINE: Allow your deployed GitHub Pages domain to connect 🛑
          'connect-src': ['\'self\'', 'https:', 'http:', 'ws:', 'wss:', 'https://bamlak9.github.io'], 
          
          'upgradeInsecureRequests': null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];