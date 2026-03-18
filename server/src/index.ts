import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import { config } from "./config/index.js";
import { initDb, testConnection } from "./db/index.js";
import { errorHandler } from "./middleware/index.js";
import routes from "./routes/index.js";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// 全局错误处理
app.use(errorHandler);

// Start server
app.listen(config.port, async () => {
  console.log(`Server is running on http://localhost:${config.port}`);

  await initDb();
  const dbConnected = await testConnection();
  if (dbConnected) {
    console.log("✅ Database connected successfully");
  } else {
    console.log("❌ Database connection failed");
  }
});

export default app;
