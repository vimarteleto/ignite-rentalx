import { Specification } from "../model/Specification";

interface ICreateSpecificatiionDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificatiionDTO): void;
    findByName(name: string): Specification;
}

export { ICreateSpecificatiionDTO, ISpecificationsRepository };
