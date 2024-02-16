import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '@app/common/entities/Users';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Languages } from '@app/common/entities/Language';

@Module({
  imports: [TypeOrmModule.forFeature([Users,Languages]),
  JwtModule.registerAsync({
    useFactory: () => ({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  }),
],
  controllers: [AuthController],
  providers: [AuthService,UsersService,JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
