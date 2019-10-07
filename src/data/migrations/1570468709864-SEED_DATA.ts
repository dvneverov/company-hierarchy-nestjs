import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { EmployeeEntity } from '../../employee/employee.entity';
import { DepartmentEntity } from '../../department/department.entity';
import { RoleEntity } from '../../role/role.entity';

export class SEEDDATA1566763187470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getRepository(RoleEntity).query(`TRUNCATE TABLE Role CASCADE;`);
    await getRepository(EmployeeEntity).query(`TRUNCATE TABLE Employee CASCADE;`);
    await getRepository(DepartmentEntity).query(`TRUNCATE TABLE Department CASCADE;`);
    // add an employee
    const employee1 = getRepository(EmployeeEntity).create({
      name: 'Ivan',
      surname: 'Petrov',
      avatar: '/avatar.png',
    });
    const employee2 = getRepository(EmployeeEntity).create({
      name: 'Sergei',
      surname: 'Ivanov',
      avatar: '/avatar.png',
    });
    const employee3 = getRepository(EmployeeEntity).create({
      name: 'Vasiliy',
      surname: 'Fedorov',
      avatar: '/avatar.png',
    });
    const employee4 = getRepository(EmployeeEntity).create({
      name: 'Petr',
      surname: 'Smirnov',
      avatar: '/avatar.png',
    });
    const employee5 = getRepository(EmployeeEntity).create({
      name: 'Andrey',
      surname: 'Fomin',
      avatar: '/avatar.png',
    });

    await getRepository(EmployeeEntity).save(employee1);
    await getRepository(EmployeeEntity).save(employee2);
    await getRepository(EmployeeEntity).save(employee3);
    await getRepository(EmployeeEntity).save(employee4);
    await getRepository(EmployeeEntity).save(employee5);

    const department1 = getRepository(DepartmentEntity).create({
      name: 'IQ Option',
    });
    const department2 = getRepository(DepartmentEntity).create({
      name: 'Product management',
    });
    const department3 = getRepository(DepartmentEntity).create({
      name: 'Technology',
    });
    const department4 = getRepository(DepartmentEntity).create({
      name: 'Administration',
    });

    await getRepository(DepartmentEntity).save(department1);
    await getRepository(DepartmentEntity).save(department2);
    await getRepository(DepartmentEntity).save(department3);
    await getRepository(DepartmentEntity).save(department4);

    const role1 = getRepository(RoleEntity).create({
      name: 'CEO',
      employee: employee1,
      parent: null,
      department: department1,
    });

    await getRepository(RoleEntity).save(role1);

    const role2 = getRepository(RoleEntity).create({
      name: 'Chief',
      employee: employee2,
      parent: role1,
      department: department2,
    });

    await getRepository(RoleEntity).save(role2);

    const role3 = getRepository(RoleEntity).create({
      name: 'CTO',
      employee: employee3,
      parent: role1,
      department: department3,
    });

    await getRepository(RoleEntity).save(role3);

    const role4 = getRepository(RoleEntity).create({
      name: 'Chief',
      employee: null,
      parent: role1,
      department: department4,
    });

    await getRepository(RoleEntity).save(role4);

    const role5 = getRepository(RoleEntity).create({
      name: 'Product Owner',
      employee: null,
      parent: role2,
      department: department2,
    });

    await getRepository(RoleEntity).save(role5);

    const role6 = getRepository(RoleEntity).create({
      name: 'Senior developer',
      employee: employee5,
      parent: role3,
      department: department3,
    });

    await getRepository(RoleEntity).save(role6);

    const role7 = getRepository(RoleEntity).create({
      name: 'Junior developer',
      employee: null,
      parent: role6,
      department: department3,
    });

    await getRepository(RoleEntity).save(role7);

    const role8 = getRepository(RoleEntity).create({
      name: 'Head',
      employee: null,
      parent: role4,
      department: department4,
    });

    await getRepository(RoleEntity).save(role8);

  }
  public async down(queryRunner: QueryRunner): Promise<any> {
  }
}
