import { Module } from '@nestjs/common';
import { RoleResolver } from './role.resolver';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { EmployeeEntity } from '../employee/employee.entity';
import { DepartmentEntity } from '../department/department.entity';
import { EmployeeService } from '../employee/employee.service';
import { DepartmentService } from '../department/department.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, EmployeeEntity, DepartmentEntity])],
  providers: [RoleResolver, RoleService, EmployeeService, DepartmentService],
})
export class RoleModule {
}
