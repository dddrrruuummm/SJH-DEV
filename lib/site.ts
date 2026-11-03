import { foods } from "./foods";
export const site = {
  name: "SJH DEV", legalName: "SJH DEV LIMITED", url: "https://www.sjhdev.com",
  email: "contact@sjhdev.com", address: { city: "Hong Kong", country: "HK" }
};
export const navItems = [
  {label:"Products",href:"/showcase"}, {label:"Sourcing",href:"/services"},
  {label:"Company",href:"/about"}, {label:"Contact",href:"/contact"}
];
export const products = foods;
export const services = ["Food ingredient sourcing", "Product format and grade review", "Packing and quantity requirements", "Documentation and shipment discussions", "Buyer and distribution inquiries"];
