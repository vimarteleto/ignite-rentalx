import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    // em Javascript, tudo isso:
    //      private categoriesRepository: CategoriesRepository;
    //      constructor(categoriesRepository: CategoriesRepository) {
    //          this.categoriesRepository = categoriesRepository;
    //      }
    // pode ser substituido por isso:
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryExists = this.categoriesRepository.findByName(name);
        if (categoryExists) {
            throw new Error("Category already exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
