import { PositionService } from "../services/positionService.js";

const positionService = new PositionService();

export class PositionController {
    async createPosition(req, res) {
        try {
            const { name, departmentId } = req.body;
            const position = await positionService.createPosition({ name, departmentId });
            return res.status(201).json(position);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAllPositions(req, res) {
        try {
            const positions = await positionService.getAllPositions();
            return res.status(200).json(positions);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getPositionById(req, res) {
        try {
            const { id } = req.params;
            const position = await positionService.getPositionById(Number(id));
            if (!position) {
                return res.status(404).json({ error: "Posição não encontrada." });
            }
            return res.status(200).json(position);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async updatePosition(req, res) {
        try {
            const { id } = req.params;
            const { name, departmentId } = req.body;
            const updated = await positionService.updatePosition(Number(id), { name, departmentId });
            return res.status(200).json(updated);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async deletePosition(req, res) {
        try {
            const { id } = req.params;
            const deleted = await positionService.deletePosition(Number(id));
            return res.status(200).json(deleted);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
