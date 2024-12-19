import { Controller, Inject, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('api/employee')
export class GatewayController {
  constructor(
    @Inject('SERVICE_3_employee') private readonly employeeService: ClientProxy,
  ) {}

  
}
