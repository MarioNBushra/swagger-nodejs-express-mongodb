const express = require("express");
// const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 6060;

//SWAGGER
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//cors
const cors = require("cors");

app.use(cors());
//OPTIONS SQWAGGER
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:6060",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

//DB Connection
require("./db/dbConnection");
const booksRoutes = require("./routes/bookRoutes");

app.use("/api/book", booksRoutes);

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
