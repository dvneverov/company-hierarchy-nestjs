import { Field, InputType } from 'type-graphql';

@InputType()
export class InputUpdateEmployee {
  @Field({ nullable: true }) readonly name: string;
  @Field({ nullable: true }) readonly surname: string;
  @Field({ nullable: true }) readonly avatar: string;
}
