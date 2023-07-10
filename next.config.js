require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
