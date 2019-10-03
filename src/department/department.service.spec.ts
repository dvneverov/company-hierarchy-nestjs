import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DepartmentEntity } from './department.entity';

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

describe('DepartmentService', () => {
  let service: DepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentService,
        {
          provide: getRepositoryToken(DepartmentEntity),
          useValue: mockRepository,
        }],
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
