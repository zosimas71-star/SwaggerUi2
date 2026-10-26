import type { Express } from "express";
import swaggerUi from "swagger-ui-express";
import openapi from "./openapi.json";

// Optional: point "Try it out" at your real backend.
// Example: API_BASE_URL=https://your-backend.onrender.com/api/v1
function buildSpec(): swaggerUi.JsonObject {
  const spec = JSON.parse(JSON.stringify(openapi)) as swaggerUi.JsonObject;
  if (process.env.API_BASE_URL) {
    spec.servers = [{ url: process.env.API_BASE_URL, description: "Backend" }];
  }
  return spec;
}

export function setupSwagger(app: Express): void {
  const spec = buildSpec();

  // Raw spec (Postman / code generators)
  app.get("/api-docs.json", (_req, res) => {
    res.json(spec);
  });

  // Swagger UI
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(spec, {
      customSiteTitle: "Official Letter Management API",
      swaggerOptions: {
        persistAuthorization: true,
        docExpansion: "none",
        filter: true,
        defaultModelsExpandDepth: -1,
        tryItOutEnabled: true,
      },
    })
  );
}
