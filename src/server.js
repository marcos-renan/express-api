import express from 'express'

const app = express();

app.get('/usuarios', (req, res) => {
  res.send('Dalé nego veio')
});

app.listen(3000);