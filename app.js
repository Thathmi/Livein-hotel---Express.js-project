const  dotenv = require('dotenv');
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

const authRouter = require('./routes/auth.router');
const countriesRouter = require('./routes/countries.router');
const commissionsRouter = require('./routes/commissions.router');

const hotelRouter = require('./routes/hotel.router');

const statusRouter = require('./routes/status.router');


app.use(express.json()); 
app.use(helmet());
app.use(
    cors({
        origin:"*",
        credentials:true
    })
);
app.use('/api', authRouter);
app.use('/api/countries/', countriesRouter);
app.use('/api/commissions/', commissionsRouter);

app.use('/api/hotel/', hotelRouter);

app.use('/api/status/', statusRouter);




app.listen(PORT, () => console.log(`server running on port ${PORT}`));