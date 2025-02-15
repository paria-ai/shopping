
/** @type {import('next').NextConfig}*/
const nextConfig={
  reactStrictMode:true,
  swcMinify:true,
  images:{
    domains:['cdn.dummyjson.com'],
    
  },
  experimental:{
  runtime:"nodejs",
  }
  
};
module.exports=nextConfig;
