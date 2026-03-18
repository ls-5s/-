import type { Request, Response, NextFunction } from "express";

/** 全局错误处理中间件 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
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
}
