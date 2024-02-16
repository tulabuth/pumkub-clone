import { RouterModule } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { RegistersModule } from './registers/registers.module';
import { AuthModule } from './auth/auth.module';

export function getModulesMember() {
  return [
    UsersModule,
    RegistersModule,
    AuthModule,
    RouterModule.register([
      {
        path: 'member',
        children: [
         RegistersModule,
         UsersModule,
         AuthModule
        ],
      },
    ]),
  ];
}
