import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationUseCase {
    constructor(private specficiationsRepository: ISpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationExists =
            this.specficiationsRepository.findByName(name);

        if (specificationExists) {
            throw new Error("Specification already exists");
        }

        this.specficiationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
