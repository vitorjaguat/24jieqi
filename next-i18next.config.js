const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'zh'],
    localeDetection: false,
  },
  // localePath: path.resolve('./public/locales'),
};

// https://stackoverflow.com/questions/64117595/next-i18next-is-it-possible-to-change-default-language-dynamically
