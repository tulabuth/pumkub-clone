import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@app/common/decorator/user.decorator';
import { UserDto } from '@app/common/dto/user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer/class-serializer.interceptor';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Languages } from '@app/common/entities/Language';


@Controller('users')
@ApiTags("MEMBER")
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async profile(@User() user: UserDto){
    return await this.usersService.profile(user);
  }

  @Post('api-key')
  async apikey(@User() user:UserDto){
    return await this.usersService.generateApiKey(user.id);
  }

  @Put('/changePassword')
  async changePassword(@User() user: UserDto,@Body() body: ChangePasswordDto){
  return this.usersService.changePassword(user.id,body); 
  }

  @Get('/language')
  async getLanguage():Promise<Languages[]>{
    return await this.usersService.getLanguage();
  }
}
