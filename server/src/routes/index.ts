import { Router } from "express";
import testRoutes from "./test.js";

const router = Router();
router.use("/test", testRoutes);
// 可继续挂载： router.use('/users', userRoutes);

export default router;
// 挂载到 app： app.use(router) 或 app.use('/api', router)