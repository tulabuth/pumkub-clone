import { RouterModule } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { RegistersModule } from './registers/registers.module';
import { AuthModule } from './auth/auth.module';
import { PlatformsModule } from './platforms/platforms.module';
import { Categories } from '@app/common/entities/Categories';
import { CategoriesModule } from './categories/categories.module';
import { ServicesModule } from './services/services.module';

export function getModulesMember() {
  return [
    UsersModule,
    RegistersModule,
    AuthModule,
    CategoriesModule,
   PlatformsModule,
   ServicesModule,
    RouterModule.register([
      {
        path: 'member',
        children: [
         RegistersModule,
         UsersModule,
         AuthModule,
         PlatformsModule,
       CategoriesModule,
       ServicesModule
        ],
      },
    ]),
  ];
}
