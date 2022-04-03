import express from "express";

const app = express();

app.get("/users", (request, response) => {
  const { perPage, currentPage } = request.query;
  console.log(perPage, currentPage);
  return response.json({ perPage, currentPage });
});


/**
 * Exemplo de Body de requisição:
 * {
 *   "name": "Arnon Rodrigues",
 *   "email": "arnonrdp@gmail.com"
 * }
 */
app.post("/users", (request, response) => {
  const { body } = request;
  return response.json(body);
});

app.put("/users", (request, response) => {
  return response.json({ message: "Atualizando usuário" });
});

app.delete("/users", (request, response) => {
  return response.json({ message: "Excluindo usuário" });
});

app.listen("3333", () => {
  console.log("Server started on http://localhost:3333");
});
