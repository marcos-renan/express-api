import express from 'express'

const app = express();

app.get('/usuarios', (req, res) => {
  res.send('Usuarios')
});

app.listen(3000);