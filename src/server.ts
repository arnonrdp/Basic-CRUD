import express from "express";

const app = express();

app.get("/users", (request, response) => {
  const { perPage, currentPage } = request.query;
  console.log(perPage, currentPage);
  return response.json({ perPage, currentPage });
});

app.post("/users", (request, response) => {
  return response.json({ message: "Criando usuário" });
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
