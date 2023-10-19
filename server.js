import { create, router as _router, defaults, bodyParser } from "json-server";
const server = create();
const router = _router("db.json");
const middlewares = defaults();

server.use(middlewares);
server.use(bodyParser);

server.post("/doctors", (req, res) => {
  const doctorData = req.body;
  res.json({ message: "Doctor registered successfully", data: doctorData });
});

server.use(router);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
