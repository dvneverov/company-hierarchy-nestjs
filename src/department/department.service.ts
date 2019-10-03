import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentEntity } from './department.entity';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(@InjectRepository(DepartmentEntity) private readonly DepartmentRepository: Repository<DepartmentEntity>) {
  }

  async createDepartment(data: CreateDepartmentDto): Promise<DepartmentEntity> {
    const department = new DepartmentEntity();
    department.name = data.name;

    await this.DepartmentRepository.save(department);

    return department;
  }

  async getDepartments() {
    return await this.DepartmentRepository.find();
  }

  async getDepartment(id: number) {
    return await this.DepartmentRepository.findOne(id);
  }

  async updateDepartment(id: number, data: UpdateDepartmentDto): Promise<DepartmentEntity> {
    let department = await this.DepartmentRepository.findOne(id);
    department = { ...department, ...data };
    await this.DepartmentRepository.save(department);

    return department;
  }
}
