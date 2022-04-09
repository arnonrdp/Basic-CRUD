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


/**
 * Exemplo de Body de requisição:
 * {
 *   "name": "Arnon Rodrigues",
 *   "email": "arnonrdp@gmail.com"
 * }
 */
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
  const { id } = request.params;
  return response.json("Atualizando usuário: " + id);
});


app.delete("/users", (request, response) => {
  return response.json({ message: "Excluindo usuário" });
});


app.listen("3333", () => {
  console.log("Server started on http://localhost:3333");
});
