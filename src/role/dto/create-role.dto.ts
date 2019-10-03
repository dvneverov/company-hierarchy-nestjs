import { Field, ID, ObjectType } from 'type-graphql';
import { CreateEmployeeDto } from '../../employee/dto/create-employee.dto';
import { CreateDepartmentDto } from '../../department/dto/create-department.dto';

@ObjectType()
export class CreateRoleDto {
  @Field() readonly id?: number;
  @Field() readonly name: string;
  @Field() readonly descendants?: number;
  @Field(type => ID, { nullable: true }) readonly parentId?: number;
  @Field(type => ID, { nullable: true }) readonly employeeId?: number;
  @Field(type => ID) readonly departmentId: number;
  @Field(type => [CreateRoleDto], { nullable: true })
  children?: CreateRoleDto[];
}
