import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USER || 'iqoption',
        password: process.env.DB_PW || '1234',
        database: process.env.DB_DB || 'iqoption_db',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
        logging: true,
        migrations: [
          './dist/data/migrations/*.js',
        ],
        cli: {
          migrationsDir: './src/data/migrations',
        },
      },
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
    EmployeeModule,
    DepartmentModule,
    RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
