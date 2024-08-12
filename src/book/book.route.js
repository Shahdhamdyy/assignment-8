import { Router } from "express";
import * as bc from "./book.controller.js";
const router = Router();
router.post("/", bc.createbook);
router.get("/", bc.retrievebooks);
router.get("/singlebook/:id", bc.retrievesinglebook);
router.patch("/:id", bc.updatebook);
router.delete("/:id", bc.deletebook);
router.get("/pagination",bc.pagination)

export default router;
