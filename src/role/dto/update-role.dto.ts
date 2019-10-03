import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UpdateRoleDto {
  @Field() readonly id?: number;
  @Field() readonly name?: string;
  @Field(type => ID) readonly parentId?: number;
  @Field(type => ID) readonly employeeId?: number;
  @Field(type => ID) readonly departmentId?: number;
}
