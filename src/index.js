const express = require("express");
const route = require("./routes/route");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://jai84322:Bing%401234%23@demo.3li78.mongodb.net/nyxwolves_assignment?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("express app running on PORT " + (process.env.PORT || 3000));
});
