const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'http://localhost:4200' // URL of the frontend
};

app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded
const db = require("./app/models/index.js");
db.sequelize.sync();

require('./app/routes/articles.routes.js')(app);

const PORT = process.env.PORT || 8080; // Port

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});