
/** @type {import('next').NextConfig}*/
const nextConfig={
  reactStricMode:true,
  swcMinify:true,
  images:{
    domains:['cdn.dummyjson.com'],
  },
};
module.exports=nextConfig;