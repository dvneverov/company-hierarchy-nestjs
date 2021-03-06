import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class InputRole {
  @Field() readonly name: string;
  @Field(type => ID, { nullable: true }) readonly parentId?: number;
  @Field(type => ID, { nullable: true }) readonly employeeId?: number;
  @Field(type => ID) readonly departmentId: number;
}
