import { Router } from "express";
import { test } from "../controllers/testController.js";

const router = Router();
router.get("/", test);
export default router;
// 挂载到 app 时用 app.use('/test', router)