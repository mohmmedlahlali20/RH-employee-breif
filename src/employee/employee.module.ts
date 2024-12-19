
import { Module } from '@nestjs/common';
import { EmployeeService } from '../../../service-1-employee/src/employee/employee.service';
import { EmployeeController } from '../../../service-1-employee/src/employee/employee.controller';
import { ClientsModule , Transport } from '@nestjs/microservices';



@Module({
  imports: [ClientsModule.register([
    {
      name:'SERVICE_3_employee',
      transport: Transport.REDIS,
      options:{
        host:'localhost',
        port: 1111, 
      }
    }
  ])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeesModule {}
 
