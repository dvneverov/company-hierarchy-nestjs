import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { InputDepartment } from './input/department.input';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InputUpdateDepartment } from './input/update-department.input';

@Resolver('Department')
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {
  }

  @Query(() => [CreateDepartmentDto])
  async department() {
    return this.departmentService.getDepartments();
  }

  @Mutation(() => CreateDepartmentDto)
  async createDepartment(@Args('data') data: InputDepartment) {
    return this.departmentService.createDepartment(data);
  }

  @Mutation(() => UpdateDepartmentDto)
  async updateDepartment(
    @Args('id') id: number,
    @Args('data') data: InputUpdateDepartment,
  ) {
    return this.departmentService.updateDepartment(id, data);
  }
}
