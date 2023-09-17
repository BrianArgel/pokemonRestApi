const jsonServer = require("json-server");
const cors = require("cors"); 
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(cors()); 

server.use(jsonServer.bodyParser);

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = require("./db.json").users;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ error: "Usuario not found" });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: "Usuario not found" });
  }

  const jwt = require("jsonwebtoken");
  const secretKey = "tu_clave_secreta";
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

  res.json({ token });
});

server.use(middlewares);
const router = jsonServer.router("db.json");
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
