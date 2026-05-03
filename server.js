const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./src/config/dbc');
const routes = require('./src/routes/UserRoutes');
const errorhandler = require('./src/middlewares/errorMiddleware');
const notfound = require('./src/middlewares/unknownroute');


connectDB();
app.use(express.json());
app.use('/',routes);
app.use(notfound);

app.use(errorhandler);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on PORT ${process.env.PORT}`);
}); 