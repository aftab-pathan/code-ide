const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://aftabksb:0CW46nysKam3VSzq@code-ide.oxjag.mongodb.net/?retryWrites=true&w=majority&appName=Code-IDE`,
  )
  .then(() => {
    console.log("Database Connected ==> Successfully");
  })
  .catch((error) => {
    console.log("error ==> ", error);
  });
