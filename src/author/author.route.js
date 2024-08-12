import { Router } from "express";
import * as ac from "./author.controller.js";

const router = Router();
router.post("/", ac.createauthor);
router.get("/", ac.retrieveauthors);
router.get("/singleauthor/:id", ac.retrievesingleauthor);
router.patch("/:id", ac.updateauthor);
router.delete("/:id", ac.deleteauthor);
router.get("/:name", ac.searchAuthors);
router.get("/pagination", ac.pagination);
router.get("/relationship/:id", ac.relationship);


export default router;
