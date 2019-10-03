import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from './employee.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(EmployeeEntity) private readonly EmployeeRepository: Repository<EmployeeEntity>) {
  }

  async createEmployee(data: CreateEmployeeDto): Promise<EmployeeEntity> {
    const employee = new EmployeeEntity();
    employee.name = data.name;
    employee.surname = data.surname;
    employee.avatar = data.avatar || '/avatar.png';

    await this.EmployeeRepository.save(employee);

    return employee;
  }

  async getEmployees() {
    return await this.EmployeeRepository.find();
  }

  async getEmployee(id: number) {
    return await this.EmployeeRepository.findOne(id);
  }

  async updateEmployee(id: number, data: UpdateEmployeeDto): Promise<EmployeeEntity> {
    let employee = await this.EmployeeRepository.findOne(id);
    employee = { ...employee, ...data };
    await this.EmployeeRepository.save(employee);

    return employee;
  }
}
