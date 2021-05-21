const mongoose = require("mongoose");
const uri = process.env.mongodburl

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  .then((db) => console.log(`Conexión  exítosa. `))
  .catch((err) => console.error(err));
