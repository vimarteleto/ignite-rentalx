import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategotyUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategotyUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListCategoriesController };
