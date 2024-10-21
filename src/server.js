import express from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// criando servidor express
const app = express();

// recebendo como json
app.use(express.json());

//Rota post para criar usuario
app.post('/usuarios', async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)

});

//Rota get para receber informações do usuario
app.get('/usuarios', async(req, res) => {

  const users = await prisma.user.findMany()

  res.status(200).json(users)
});


//Rota put para atualizar dados do usuario
app.put("/usuarios/:id", async (req, res) => {

  await prisma.user.update({
    where: {
      id: req.params.id
    },

    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,

    },
  });

  res.status(201).json(req.body);

});

//Rota delete para deletar o usuario
app.delete('/usuarios/:id', async (req, res) => {

  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.status(200).json({message: 'Usuário deletado com sucesso!'})
})

//Porta
app.listen(3000);