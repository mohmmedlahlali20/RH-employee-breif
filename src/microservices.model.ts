import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
    providers: [
        {
            provide: 'SERVICE_1_auth',
            useFactory: () => {
                return ClientProxyFactory.create({
                    transport: Transport.TCP,
                    options: {
                        host: process.env.SERVICE_1_HOST || 'localhost',
                        port: parseInt(process.env.SERVICE_1_PORT, 10) || 3333,
                    },
                });
            },
        },
        {
            provide: 'SERVICE_2_RH',
            useFactory: () => {
                return ClientProxyFactory.create({
                    transport: Transport.TCP,
                    options: {
                        host: process.env.SERVICE_2_HOST || 'localhost',
                        port: parseInt(process.env.SERVICE_2_PORT, 10) || 2222,
                    },
                });
            },
        },
        {
            provide: 'SERVICE_3_employee',
            useFactory: () => {
                return ClientProxyFactory.create({
                    transport: Transport.TCP,
                    options: {
                        host: process.env.SERVICE_3_HOST || 'localhost',
                        port: parseInt(process.env.SERVICE_3_PORT, 10) || 1111,
                    },
                });
            },
        },
    ],

    exports: [
        'SERVICE_1_auth',
        'SERVICE_3_employee',
        'SERVICE_2_RH'
    ]
})
export class MicroservicesModule {}