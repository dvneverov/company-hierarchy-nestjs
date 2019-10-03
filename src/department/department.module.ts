import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from './department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {
}
