import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CreateEmployeeDto {
  @Field() readonly id?: number;
  @Field() readonly name: string;
  @Field() readonly surname: string;
  @Field() readonly avatar: string;
}
