import { Router } from "express";
import { PositionController } from "../controllers/positionController.js";

const router = Router();
const positionController = new PositionController();

router.post("/create", (req, res) => positionController.createPosition(req, res));
router.get("/list", (req, res) => positionController.getAllPositions(req, res));
router.get("/list/:id", (req, res) => positionController.getPositionById(req, res));
router.put("/update/:id", (req, res) => positionController.updatePosition(req, res));
router.delete("/delete/:id", (req, res) => positionController.deletePosition(req, res));

export default router;
