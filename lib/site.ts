import { foods } from "./foods";

export const site = {
  name: "SJH DEV",
  legalName: "SJH DEV LIMITED",
  url: "https://www.sjhdev.com",
  email: "contact@sjhdev.com",
  address: { city: "Hong Kong", country: "HK" }
};

export const navItems = [
  {label:"Home",href:"/"}, {label:"Hardware & electronics",href:"/hardware"}, {label:"Procurement",href:"/services"}, {label:"Food ingredients",href:"/showcase?q=Food"}, {label:"Company",href:"/about"}, {label:"Contact",href:"/contact"}
];

export const products = [
  ...foods,
  { name: "Compute GPUs", category: "Compute Infrastructure", image: "/images/compute-gpu.png", description: "Enterprise GPU and accelerator procurement inquiries for qualified commercial requirements.", tags: ["GPU", "Accelerators", "Compute"] },
  { name: "Enterprise Servers", category: "Compute Infrastructure", image: "/photos/servers.webp", description: "Server hardware conversations organized around workload, deployment context, and infrastructure needs.", tags: ["Servers", "Hardware", "Enterprise"] },
  { name: "Network Infrastructure", category: "Compute Infrastructure", image: "/photos/network.webp", description: "Network equipment and connectivity component sourcing for commercial infrastructure programs.", tags: ["Networking", "Optics", "Infrastructure"] }
];

export const services = [
  "Food ingredient sourcing and export coordination", "Product format, grade and packaging conversations", "Documentation and shipment planning discussions", "Enterprise compute hardware procurement", "Server and network infrastructure sourcing", "Buyer, supplier, and distribution partnerships"
];
