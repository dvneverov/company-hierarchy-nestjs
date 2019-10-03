import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { DepartmentEntity } from '../department/department.entity';
import { EmployeeEntity } from '../employee/employee.entity';

const createMock = jest.fn((dto: any) => {
  return dto;
});

const saveMock = jest.fn((dto: any) => {
  return dto;
});

const MockRepository = jest.fn().mockImplementation(() => {
  return {
    create: createMock,
    save: saveMock,
  };
});
const mockRepository = new MockRepository();

describe('RoleService', () => {
  let service: RoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleService,
        {
          provide: getRepositoryToken(RoleEntity),
          useValue: mockRepository,
        }, {
          provide: getRepositoryToken(DepartmentEntity),
          useValue: mockRepository,
        }, {
          provide: getRepositoryToken(EmployeeEntity),
          useValue: mockRepository,
        }],
    }).compile();

    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
