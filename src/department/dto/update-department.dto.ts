import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UpdateDepartmentDto {
  @Field() readonly id?: number;
  @Field() readonly name: string;
}
