// Sitio Git: https://github.com/sergjime/sitio-node
const express = require("express");
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log("Servidor arrancado ok!"));
app.set("view engine", "ejs");

const products = [
  { id: 1, producto: "Monitor", precio: "45€" },
  { id: 2, producto: "Memoria RAM", precio: "10€" },
  { id: 3, producto: "Ratón", precio: "15€" },
  { id: 4, producto: "Gráfica", precio: "876€" },
  { id: 5, producto: "Tarjeta de red", precio: "14,90€" },
  { id: 6, producto: "Hub USB", precio: "9,99€" },
  { id: 7, producto: "Tableta Digitalizadora", precio: "15€" },
  { id: 8, producto: "Impresora Multifunción", precio: "55€" },
  { id: 9, producto: "Router", precio: "30€" },
  { id: 10, producto: "Punto de acceso", precio: "35€" },
];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/",(req, res) => {
    res.render("index", { title: "Inicio" });
  }
);
app.get("/productos", (req, res) => {
  res.render("productos", { title: "Productos" , products});
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
