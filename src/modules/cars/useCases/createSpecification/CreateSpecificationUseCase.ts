import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specficiationsRepository: ISpecificationsRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationExists =
            await this.specficiationsRepository.findByName(name);

        if (specificationExists) {
            throw new Error("Specification already exists");
        }

        await this.specficiationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
