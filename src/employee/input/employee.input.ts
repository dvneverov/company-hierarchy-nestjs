import { Field, InputType } from 'type-graphql';

@InputType()
export class InputEmployee {
  @Field() readonly name: string;
  @Field() readonly surname: string;
  @Field({ nullable: true }) readonly avatar: string;
}
