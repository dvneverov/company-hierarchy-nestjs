import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoleEntity } from '../role/role.entity';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column('varchar', { length: 500 })
  name: string;

  @Column('varchar', { length: 500 })
  surname: string;

  @Column('varchar', { length: 500 })
  avatar: string;

  @OneToMany(type => RoleEntity, role => role.employee)
  roles: RoleEntity[];
}
