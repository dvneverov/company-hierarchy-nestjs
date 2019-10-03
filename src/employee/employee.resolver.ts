import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeEntity } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { InputEmployee } from './input/employee.input';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InputUpdateEmployee } from './input/update-employee.input';

@Resolver((of) => EmployeeEntity)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {
  }

  @Query(() => [CreateEmployeeDto])
  async employee() {
    return this.employeeService.getEmployees();
  }

  @Mutation(() => CreateEmployeeDto)
  async createEmployee(@Args('data') data: InputEmployee) {
    return this.employeeService.createEmployee(data);
  }

  @Mutation(() => UpdateEmployeeDto)
  async updateEmployee(
    @Args('id') id: number,
    @Args('data') data: InputUpdateEmployee,
  ) {
    return this.employeeService.updateEmployee(id, data);
  }
}
