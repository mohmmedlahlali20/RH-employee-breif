import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll() {
    return this.employeeService.findAllEmployees();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.employeeService.findEmployeeById(id);
  }
}
