import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserPrimaryKey1640732439411 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "users",
            "id",
            new TableColumn({
                name: "id",
                type: "varchar",
                isPrimary: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "id");
    }
}
