import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./user.entity";

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return [
      {
        id: "asdf",
        firstName: "asdf",
      },
    ];
  }
}
