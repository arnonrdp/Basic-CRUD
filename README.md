# Curso Node

Curso de Node.js do [Cataline](https://www.cataline.io/) com o básido de CRUD.

---

### Compile e recarregue para executar o back-end

```console
npm run dev
```

---

## Utilize um Cliente de REST API e perfome as seguintes operações:

### **GET**: `http://localhost:3333/users`

### **POST**: `http://localhost:3333/users`

```json
// body
{
  "name": "Ariel",
  "email": "ariel@gmail.com"
}
```

### **PUT**: `http://localhost:3333/users/:id`

```json
// body
{
  "name": "Ariel R.",
  "email": "arielr@gmail.com"
}
```

### **DELETE**: `http://localhost:3333/users/:id`