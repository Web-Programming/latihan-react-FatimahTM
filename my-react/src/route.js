import React from "react";
import Product from "./Product";

const Home = React.lazy(() => import("./Hello"));
const Product = React.lazy(() => import("./Product"));
const Registrasi = React.lazy(() => import(".Registrasi"));

const routes = [
  { path: "/", Component: Home},
  { path: "/product", Component: Product },
  { path: "/register", Component: Register},
  
];

export default routes;
