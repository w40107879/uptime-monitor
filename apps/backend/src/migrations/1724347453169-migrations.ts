import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1724347453169 implements MigrationInterface {
  name = 'Migrations1724347453169';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "monitor" (
                "id" SERIAL NOT NULL,
                "site_id" integer NOT NULL,
                "up" boolean NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_2206b1127c3617bd63373acba74" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "site" (
                "id" SERIAL NOT NULL,
                "url" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_635c0eeabda8862d5b0237b42b4" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "site"
        `);
    await queryRunner.query(`
            DROP TABLE "monitor"
        `);
  }
}
