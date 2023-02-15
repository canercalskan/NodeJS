
import bodyParser from 'body-parser';
import express from 'express'
import userRoutes from './routes/users.js';
const app = express();
const PORT = 4200

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json())
app.use('/api' , userRoutes)

app.listen(PORT , () => {
    console.log('Server listening on port ' + PORT +'....');
})















