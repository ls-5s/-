import type { Request, Response } from "express";
import { getTestMessage } from "../services/testService.js";
import { sendSuccess } from "../utils/index.js";

/** GET /test */
export async function test(_req: Request, res: Response) {
  const data = await getTestMessage();
  sendSuccess(res, data);
}
