import express from 'express';

const app=  express();

app.get('/', (req, res) => {
    res.send('Server is ready')
});

app.get('/login', (req, res) => {
    const username = "demoUser"

    res.send(username)
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    }
)