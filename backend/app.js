//import
const express = require("express");
const app = express();

const calculateRoutes = require("./routes/calculate.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/calculate", calculateRoutes);

app.use((req, res, next) => {
  res.status(404).send("Error");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
