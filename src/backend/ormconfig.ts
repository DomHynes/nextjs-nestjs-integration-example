import { ConnectionOptions } from "typeorm";
import { User } from "./modules/users/user.entity";
import { join } from "path";

const config: ConnectionOptions = {
  type: "sqlite",
  database: join(process.cwd(), "test.sqlite"),
  entities: [User],
  migrations: [join(process.cwd(), "src", "backend", "migrations", "*.ts")],
  logging: ["error"],
  cli: {
    migrationsDir: "./src/backend/migrations",
  },
};

export default config;
