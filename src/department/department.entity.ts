import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoleEntity } from '../role/role.entity';

@Entity('department')
export class DepartmentEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column('varchar', { length: 500 })
  name: string;

  @OneToMany(type => RoleEntity, role => role.department)
  roles: RoleEntity[];
}
