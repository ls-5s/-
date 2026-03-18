import "dotenv/config";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { initDb, testConnection } from "./db/index.js";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// route
app.get("/test", (req, res) => {
  res.json({ message: "Test endpoint working!" });
});

// Express 全局错误处理中间件
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      code: 401,
      message: "Token验证失败，请重新登录",
    });
  }

  res.status(500).json({
    code: 500,
    message: err.message || "服务器内部错误",
  });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  await initDb();
  const dbConnected = await testConnection();
  if (dbConnected) {
    console.log("✅ Database connected successfully");
  } else {
    console.log("❌ Database connection failed");
  }
});

export default app;
