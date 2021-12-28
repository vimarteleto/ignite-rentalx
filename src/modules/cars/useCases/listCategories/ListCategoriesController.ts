import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategotyUseCase = container.resolve(ListCategoriesUseCase);
        const all = await listCategotyUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListCategoriesController };
