import { Specification } from "../entities/Specification";

interface ICreateSpecificatiionDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificatiionDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificatiionDTO, ISpecificationsRepository };
