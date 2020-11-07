import { Resolver, Query, Mutation } from "@nestjs/graphql";
import { InjectConnection, InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { User } from "./user.entity";

@Resolver(() => User)
export class UserResolver {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>
  ) {}

  @Query(() => [User])
  async getUsers() {
    return this.users.find();
  }

  @Mutation(() => User)
  async createUser() {
    return this.users.save({});
  }
}
