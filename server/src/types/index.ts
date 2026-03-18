/**
 * 服务端公共类型
 */
import type { Request } from "express";

/** 统一 API 响应体 */
export interface ApiResponse<T = unknown> {
  code: number;
  message?: string;
  data?: T;
}

/** 扩展 Express Request（可挂载 user 等） */
export interface AppRequest extends Request {
  // userId?: string;
}
