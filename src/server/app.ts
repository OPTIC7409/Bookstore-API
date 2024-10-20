import express from 'express';
import { db } from '../Config/db.config';
import router from '../Routes/books.routes';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use('/api/v1/', router)

app.get('/', (req, res) => {
    res.send('Hello World');
});

db.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

export default app;
