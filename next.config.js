/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: {
      ssr: true,
      cssProp: true,
    },
  },
};

module.exports = nextConfig;
