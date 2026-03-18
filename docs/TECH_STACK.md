# AI Comic 技术栈文档

## 项目概述

AI Comic 是一个前后端分离的全栈项目，用于生成 AI 漫画。项目采用现代化的技术栈，确保开发效率和运行性能。

---

## 前端 (Client)

### 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | React | 18.3.1 |
| 构建工具 | Vite | 6.0.5 |
| 语言 | TypeScript | 5.6.2 |
| 状态管理 | Zustand | 5.0.0 |
| 样式 | Tailwind CSS | 3.4.17 |
| HTTP 请求 | Axios | - |
| 代码规范 | ESLint | 9.17.0 |

### 目录结构

```
client/
├── src/
│   ├── api/          # API 接口封装
│   ├── components/   # React 组件
│   ├── layouts/      # 布局组件
│   ├── pages/        # 页面组件
│   ├── router/      # 路由配置
│   ├── stores/      # Zustand 状态管理
│   ├── types/       # TypeScript 类型定义
│   ├── utils/       # 工具函数
│   ├── App.tsx      # 根组件
│   └── main.tsx     # 入口文件
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

### 核心功能

- **状态管理**：使用 Zustand 进行全局状态管理
- **HTTP 请求**：使用 Axios 封装请求，支持 Token 刷新、错误处理
- **样式方案**：Tailwind CSS 提供原子化 CSS 能力

---

## 后端 (Server)

### 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | Express | 4.21.2 |
| 语言 | TypeScript | 5.7.3 |
| ORM | Drizzle ORM | 0.39.0 |
| 数据库 | SQLite (sql.js) | 1.14.1 |
| 开发工具 | tsx | 4.19.2 |
| 环境变量 | dotenv | 17.3.1 |
| CORS | cors | 2.8.6 |
| 数据库工具 | Drizzle Kit | 0.30.1 |

### 目录结构

```
server/
├── src/
│   ├── db/           # 数据库配置和 Schema
│   │   ├── index.ts # 数据库初始化
│   │   └── schema.ts# 表结构定义
│   └── index.ts     # 服务入口
├── .env             # 环境变量
├── drizzle.config.ts# Drizzle 配置
├── tsconfig.json
└── package.json
```

### 核心功能

- **数据库**：使用 sql.js（基于 SQLite WASM），无需原生编译，跨平台兼容
- **ORM**：Drizzle ORM 提供类型安全的数据库操作
- **开发体验**：tsx 支持 TypeScript 热重载

---

## 技术亮点

1. **前后端 TypeScript**：全项目使用 TypeScript，保证类型安全
2. **轻量级数据库**：sql.js 无需安装 SQLite 环境，纯 JavaScript 运行
3. **现代化前端**：Vite + React 18 + Zustand + Tailwind CSS
4. **优雅 API 调用**：Axios 拦截器处理 Token 刷新

---

## 快速开始

### 前端

```bash
cd client
pnpm install
pnpm dev
```

### 后端

```bash
cd server
pnpm install
pnpm dev
```

后端默认运行在 `http://localhost:3000`

---

## API 规范

后端返回格式：

```json
{
  "code": 200,
  "message": "成功",
  "data": {}
}
```

前端拦截器会自动处理 `code` 为 0、200、201 的成功响应。
