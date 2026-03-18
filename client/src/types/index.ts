/**
 * 全局类型定义
 */

/** 用户信息 */
export interface User {
  id: string;
  name: string;
  email: string;
}

/** 后端统一响应结构 */
export interface ApiResponse<T = unknown> {
  code: number;
  message?: string;
  data?: T;
}

/** 分页请求参数 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/** 分页结果 */
export interface PaginatedResult<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}
