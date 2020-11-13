import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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

  @Query(() => User)
  async getUser(@Args("id") id: string) {
    return this.users.findOne(id);
  }

  @Mutation(() => User)
  async createUser() {
    return this.users.save({});
  }
}
