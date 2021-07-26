const express = require("express");


// const productRoutes = require("./routes/products");
// const shopRoutes = require("./routes/shops");
// const userRoutes = require("./routes/users");
// const orderRoutes = require("./routes/order");


const cors = require("cors");
const path = require("path");



const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

// let products = require("./data");
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// app.use(userRoutes);
// app.use(orderRoutes);
// app.use("/products", productRoutes);
// app.use("/shops", shopRoutes);
// app.use("/media", express.static(path.join(__dirname, "media")));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});


app.listen(8000);


