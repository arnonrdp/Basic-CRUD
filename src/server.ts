import express from "express";
import { v4 as uuid } from "uuid";

const app = express();

app.use(express.json());

interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [];

app.get("/users", (request, response) => {
  // Busca e retorna todos os usuários
  return response.json(users);
});

app.post("/users", (request, response) => {
  // Recebe os dados do novo usuário
  const { name, email } = request.body;

  // Cria um novo usuário
  const user = { id: uuid(), name, email };

  //Registra esse usuário da base de dados
  users.push(user);

  // Retorna os dados do usuário criado
  return response.json(user);
});

app.put("/users/:id", (request, response) => {
  // Recebe os dados do usuário
  const { id } = request.params;
  const { name, email } = request.body;

  // Localiza o usuário na base de dados
  const userIndex = users.findIndex((user) => user.id === id);

  // Se o usuário não existir, retorna um erro
  if (userIndex < 0) {
    return response.status(400).json({ error: "User not found" });
  }

  // Atribui os dados à uma constante para ser reutilizada
  const user = { id, name, email };

  // Atualiza o usuário na base de dados
  users[userIndex] = user;

  // Retorna os dados do usuário atualizado
  return response.json(user);
});

app.delete("/users/:id", (request, response) => {
  // Recebe o ID do usuário
  const { id } = request.params;

  // Localiza o usuário na base de dados
  const userIndex = users.findIndex((user) => user.id === id);
  console.log(!!0);
  
  // Se o usuário não existir, retorna um erro
  if (userIndex < 0) {
    return response.status(400).json({ error: "User not found" });
  }

  // Remove o usuário da base de dados
  users.splice(userIndex, 1);

  // Retorna um status de sucesso
  return response.status(204).send();
});

app.listen("3333", () => {
  console.log("Server started on http://localhost:3333");
});
