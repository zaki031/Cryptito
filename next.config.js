/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts:true,
  images:{
    remotePatterns:[
      {
      protocol:'https',
      hostname:'assets.coingecko.com',

      },
     {
      protocol:'https',
      hostname:'assets8.lottiefiles.com',
     },
    
    ],
    minimumCacheTTL:1500000,

  },

}
 

module.exports = nextConfig
