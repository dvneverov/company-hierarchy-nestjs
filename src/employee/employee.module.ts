import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeEntity } from './employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {
}
