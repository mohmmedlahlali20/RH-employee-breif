import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('SERVICE_3_employee') private readonly client: ClientProxy,
  ) {}

  async createEmployee(data: any) {
    return this.client.send('create_employee', data).toPromise();
  }

  async findAllEmployees() {
    return this.client.send('find_all_employees', {}).toPromise();
  }

  async findEmployeeById(id: string) {
    return this.client.send('find_employee_by_id', id).toPromise();
  }

  async updateEmployee(id: string, updateData: any) {
    return this.client.send('update_employee', { id, updateData }).toPromise();
  }
}
