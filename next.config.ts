import type {NextConfig} from "next";
const nextConfig:NextConfig={output:"standalone",async headers(){return [{source:"/hardware/:path*",headers:[{key:"X-Robots-Tag",value:"noindex, follow"}]}];}};
export default nextConfig;
