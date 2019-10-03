import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { IsNull, Repository, TreeRepository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { EmployeeService } from '../employee/employee.service';
import { DepartmentService } from '../department/department.service';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(RoleEntity) private readonly RoleRepository: TreeRepository<RoleEntity>,
              private readonly employeeService: EmployeeService,
              private readonly departmentService: DepartmentService) {
  }

  async createRole(data: CreateRoleDto): Promise<RoleEntity> {
    const role = new RoleEntity();
    role.name = data.name;
    role.employee = data.employeeId ? await this.employeeService.getEmployee(data.employeeId) : null;
    role.parent = data.parentId ? await this.RoleRepository.findOne(data.parentId) : null;
    role.department = await this.departmentService.getDepartment(data.departmentId);

    await this.RoleRepository.save(role);

    return role;
  }

  async getRoles() {
    /*return await this.RoleRepository.find({
      where: {
        parent: IsNull(),
      },
      relations: ['employee', 'department'],
    });*/
    return await this.RoleRepository.findTrees();
  }

  async getRole(id: number) {
    return await this.RoleRepository.findOne(id);
  }

  async countDescendants(id: number) {
    const { count } = await this.RoleRepository
      .createQueryBuilder('role')
      .where('"role"."parentId" = :id', { id })
      .select('COUNT(id)', 'count')
      .getRawOne();
    const parent = await this.RoleRepository.findOne(id);
    const countTotal = await this.RoleRepository.countDescendants(parent);
    return [count, countTotal];
  }

  async updateRole(id: number, data: UpdateRoleDto): Promise<RoleEntity> {
    const role = await this.RoleRepository.findOne(id);
    role.name = data.name || role.name;
    role.employee = data.employeeId ? await this.employeeService.getEmployee(data.employeeId) : role.employee;
    role.parent = data.parentId ? await this.RoleRepository.findOne(data.parentId) : role.parent;
    role.department = data.departmentId ? await this.departmentService.getDepartment(data.departmentId) : role.department;

    await this.RoleRepository.save(role);

    return role;
  }
}
