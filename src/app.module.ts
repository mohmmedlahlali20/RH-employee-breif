import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroservicesModule } from './microservices.model';
import { GatewayController } from './gateway.controller';
import { EmployeesModule } from './employee/employee.module';

@Module({
  imports: [
    MicroservicesModule,
    EmployeesModule
  ],
  controllers: [AppController, GatewayController],
  providers: [AppService],
})
export class AppModule {}
