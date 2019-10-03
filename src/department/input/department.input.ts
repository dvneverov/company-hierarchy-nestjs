import { Field, InputType } from 'type-graphql';

@InputType()
export class InputDepartment {
  @Field() readonly name: string;
}
