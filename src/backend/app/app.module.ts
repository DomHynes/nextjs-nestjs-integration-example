import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { Module } from "@nestjs/common";
import { UserResolver } from "../users/user.resolver";
import { UserModule } from "../users/user.module";
@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      path: "/api/graphql",
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
