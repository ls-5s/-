/**
 * 工具函数
 */
import type { Response } from "express";
import type { ApiResponse } from "../types/index.js";

/** 统一成功响应 */
export function sendSuccess<T>(res: Response, data?: T, message?: string) {
  const body: ApiResponse<T> = {
    code: 200,
    ...(message && { message }),
    ...(data !== undefined && { data }),
  };
  res.json(body);
}

/** 统一错误码响应 */
export function sendError(res: Response, code: number, message: string) {
  res.status(code >= 400 ? code : 200).json({ code, message });
}
