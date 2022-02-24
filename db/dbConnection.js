const mongoose = require("mongoose");

try {
  let dbLink = process.env.DB_URL || process.env.DB_LINK;
  mongoose.connect(dbLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB IS CONNECTED");
} catch (error) {
  console.log(error);
}
