import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service";

const filmeService = new FilmeService();

export class FilmeController {
    async create(req: Request, res: Response) {
        try {
            const dados = req.body;
            await filmeService.create(dados);
            return res.status(200).send();
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        await filmeService.delete(id);
        res.status(200).send();
    }

    async findAll(req: Request, res: Response) {
        const filmes = await filmeService.findAll();
        res.status(200).json(filmes);
    }

    async findById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const filme = await filmeService.findById(id);
        res.status(200).json(filme);
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const dados = req.body;
            await filmeService.update(id, dados);
            return res.status(200).send();
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}