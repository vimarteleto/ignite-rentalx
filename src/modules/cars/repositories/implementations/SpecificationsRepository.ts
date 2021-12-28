import { Repository, getRepository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificatiionDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private respository: Repository<Specification>;

    constructor() {
        this.respository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificatiionDTO): Promise<void> {
        const specification = this.respository.create({
            name,
            description,
        });

        this.respository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.respository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };
