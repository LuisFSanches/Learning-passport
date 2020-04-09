const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const Port = process.env.PORT || 3500;

//DB CONFIG
mongoose
  .connect("mongodb://localhost/passport", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    usecreateIndexes: true,
  })
  .then(() => console.log("MongoDB Connected"));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// BodyParser
app.use(express.urlencoded({ extended: false }));

//Importando Rotas
const indexpage = require("./routes/index");
const userpage = require("./routes/users");

app.use(indexpage);
app.use("/users", userpage);

app.listen(Port, console.log(`Server started on port ${Port}`));
