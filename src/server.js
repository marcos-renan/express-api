import express from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// criando servidor express
const app = express();
// recebendo como json
app.use(express.json());

//mock de dados com array
const usuarios = [
  { id: 1, nome: 'Juan', idade: 30 },
  { id: 2, nome: 'María', idade: 25 },
  { id: 3, nome: 'Pedro', idade: 35 },
  { id: 4, nome: 'Ana', idade: 28 },
  { id: 5, nome: 'Luis', idade: 40 },
  { id: 6, nome: 'Laura', idade: 22 },
  { id: 7, nome: 'Carlos', idade: 32 },
  { id: 8, nome: 'Sofía', idade: 27 },
  { id: 9, nome: 'Miguel', idade: 33 },
  { id: 10, nome: 'Elena', idade: 29 }
];

//criando rota post
app.post('/usuarios', (req, res) => {

  usuarios.push(req.body)

  res.status(201).json(req.body)
});

//criando rota get
app.get('/usuarios', (req, res) => {
  res.status(200).json(usuarios)
});


app.listen(3000);