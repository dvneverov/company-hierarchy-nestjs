import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { InputRole } from './input/role.input';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
import { EmployeeService } from '../employee/employee.service';
import { DepartmentService } from '../department/department.service';
import { CreateDepartmentDto } from '../department/dto/create-department.dto';
import { InputUpdateRole } from './input/update-role.input';

@Resolver(of => CreateRoleDto)
export class RoleResolver {
  constructor(private readonly roleService: RoleService,
              private readonly employeeService: EmployeeService,
              private readonly departmentService: DepartmentService) {
  }

  @Query(() => [CreateRoleDto])
  async role() {
    return this.roleService.getRoles();
  }

  @ResolveProperty('employee', type => CreateEmployeeDto, { nullable: true })
  async getEmployee(@Parent() role) {
    const { employeeId } = role;
    return employeeId ? await this.employeeService.getEmployee(employeeId) : null;
  }

  @ResolveProperty('department', type => CreateDepartmentDto)
  async getDepartment(@Parent() role) {
    const { departmentId } = role;
    return await this.departmentService.getDepartment(departmentId);
  }

  @ResolveProperty('descendants', type => [Number])
  async countDescendants(@Parent() role) {
    const { id } = role;
    return await this.roleService.countDescendants(id);
  }

  @Mutation(() => CreateRoleDto)
  async createRole(@Args('data') data: InputRole) {
    return this.roleService.createRole(data);
  }

  @Mutation(() => UpdateRoleDto)
  async updateRole(
    @Args('id') id: number,
    @Args('data') data: InputUpdateRole,
  ) {
    return this.roleService.updateRole(id, data);
  }

}
