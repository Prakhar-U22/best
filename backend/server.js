import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
const port = 5000;

const data = {
    student: [
        { name: "a", rollno: "20894" },
        { name: "b", rollno: "20895" }
    ]
};

app.get('/', (req, res) => {
    res.json(data);
});


app.listen(port, () => {
    console.log(`Backend is running on port http://localhost:${port}`);
});
