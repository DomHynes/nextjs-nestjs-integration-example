import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import ormconfig from "../../ormconfig";
import { UserModule } from "../users/user.module";

@Module({
  imports: [
    UserModule,

    TypeOrmModule.forRoot({ ...ormconfig, migrations: [] }),

    GraphQLModule.forRoot({
      path: "/api/graphql",
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
  ],
})
export class AppModule {}
