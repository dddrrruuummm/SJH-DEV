import type {NextConfig} from "next";
const nextConfig:NextConfig={output:"standalone",async redirects(){return [{source:"/hardware/:path*",destination:"/showcase?q=Food",permanent:true}];}};
export default nextConfig;
