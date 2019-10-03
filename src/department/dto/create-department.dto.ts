import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CreateDepartmentDto {
  @Field() readonly id?: number;
  @Field() readonly name: string;
}
