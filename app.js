const express = require("express");
const morgan = require("morgan");
const uuid = require("uuid");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Servidor arrancado ok!"));

//Registrar en motor de plantillas
app.set("view engine", "ejs");
//app.set('views', 'misViews')//Por defecto la carpeta para las vistas es views

/* const m1 = (req, res, next)=>{
    console.log("Estoy en el 2ndo Middeleware")
    console.log(new Date());
    next()
}
app.use((req, res, next) => {
    console.log("Hay una peticion...")
    console.log('host: ', req.hostname)
    console.log('path:',req.path);
    console.log('method:', req.method)
    next()
}) */
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
  { id: 10, producto: "Punto de acceeso", precio: "35€" },
];

app.use(morgan("tiny"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get(
  "/",
  /* m1, */ (req, res) => {
    res.render("index", { title: "Inicio", products });
  }
);

app.post("/", (req, res) => {
  // console.log(req.body)
  // res.send("Formulario recibido..")
  // {title: "Tercero Blog", resume: "Resumen",body: "dfg" }
  const blog = { id: uuid.v4(), ...req.body };
  products.push(blog);
  console.log(products);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Crear un blog nuevo" });
});

app.get("/blog/:id", (req, res) => {
  console.log(req.params.id);
  //buscar si existe un blog con el id
  //si es asi enviamos un arespuesta con el blog
  //sinó renderizamos el 404
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
