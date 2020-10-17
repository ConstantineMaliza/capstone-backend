import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import signupRoutes from './routes/signup_routes';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use(signupRoutes);

app.get('/', (req, res) => {
    res.end("hello world");
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})





