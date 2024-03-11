import { Router } from "express";
import teamsRoutes from "./teams.js"

const router = Router();

router.get("/", (request, response) => response.send("This is the world cup api root!"));

router.use("/teams", teamsRoutes)

export default router;