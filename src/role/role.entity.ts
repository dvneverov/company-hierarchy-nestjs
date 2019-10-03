import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, TreeChildren, TreeParent, Tree } from 'typeorm';
import { EmployeeEntity } from '../employee/employee.entity';
import { DepartmentEntity } from '../department/department.entity';

@Entity('role')
@Tree('nested-set')
export class RoleEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column('varchar', { length: 500 })
  name: string;

  @TreeChildren()
  children: RoleEntity[];

  @TreeParent()
  parent: RoleEntity;

  @ManyToOne(type => EmployeeEntity, employee => employee.roles)
  @JoinColumn()
  employee: EmployeeEntity;
  @Column({ nullable: true })
  employeeId: number;

  @ManyToOne(type => DepartmentEntity, department => department.roles)
  @JoinColumn()
  department: DepartmentEntity;
  @Column()
  departmentId: number;
}
