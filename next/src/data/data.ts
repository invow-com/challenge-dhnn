import { CardProps } from "@/interfaces/interfaces";
import Picture from "../utils/imagenHero.png";

export const menuItemsMobile = [
  { title: "Nosotros", id: "Nosotros" },
  { title: "Novedades", id: "Novedades" },
  { title: "Inversores", id: "Inversores" },
  { title: "Sumate al equipo", id: "Sumate al equipo" },
  { title: "Productos y Servicios", id: "Productos y Servicios" },
  { title: "Proveedores", id: "Proveedores" },
  { title: "Asterisco", id: "Asterisco" },
  { title: "Español", id: "Español" },
  { title: "Sitios", id: "Sitios" },
];

export const menuItemsDesktop = [
  { title: "Nosotros", id: "Nosotros" },
  { title: "Novedades", id: "Novedades" },
  { title: "Inversores", id: "Inversores" },
  { title: "Sumate al equipo", id: "Sumate al equipo" },
  { title: "Productos y Servicios", id: "Productos y Servicios" },
  { title: "Proveedores", id: "Proveedores" },
  { title: "*", id: "*" },
  { title: "ES", id: "ES" },
  { title: "Sitios", id: "Sitios" },
];

export const data = {
  title: "Lorem ipsum dolor sit amet, consectetur",
  description:
    "Lorem ipsum  dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus",
  category: "Lorem ipsum.",
  image: Picture,
};

export const mockedCards: CardProps[] = [
  {
    title: "No hay información disponible para mostrar",
    image: "/lostImage.png",
    description: "",
    category: { title: "" },
  },
];