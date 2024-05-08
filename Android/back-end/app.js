
const express = require('express');

const hostname = "192.168.10.102";
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const cors = require("cors");
app.use(cors({
  origin: '*',
}));




//#4
// Startpage (root)
app.get('/', function (request, response) {
  response.send('Node Server running - startpage...');
  response.end();
})



const PORT = process.env.PORT || 80;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Node server running now - using http://" + hostname + ":" + PORT);
});




const UserRoutes = require("./routes/UserRoutes");
app.use("/user/", UserRoutes);


const HardwareRoutes = require("./routes/HardwareRoutes");
app.use("/hardware/", HardwareRoutes);

const MoviesRoutes = require("./routes/MoviesRoutes");
app.use("/movies/", MoviesRoutes);

module.exports = app;