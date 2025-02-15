
/** @type {import('next').NextConfig}*/
const nextConfig={
  reactStrictMode:true,
  swcMinify:true,
  images:{
    domains:['cdn.dummyjson.com'],
    
  },
  experimental:{
    appDir:true,
  }
  
};
module.exports=nextConfig;
