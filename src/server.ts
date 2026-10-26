import express from "express";
import { setupSwagger } from "./docs/swagger";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req, res) => res.redirect("/api-docs"));
app.get("/health", (_req, res) => res.json({ status: "ok" }));

setupSwagger(app);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});
