/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    // Add basePath
    basePath: process.env.NODE_ENV === "production" ? "/buzz_quiz_soundboard" : '',
};

module.exports = nextConfig;