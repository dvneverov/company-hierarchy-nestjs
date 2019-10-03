import { Field, InputType } from 'type-graphql';

@InputType()
export class InputUpdateDepartment {
  @Field() readonly name: string;
}
