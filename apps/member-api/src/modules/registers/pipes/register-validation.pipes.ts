import {
    BadRequestException,
    Inject,
    Injectable,
    PipeTransform,
  } from '@nestjs/common';
import { CreateRegisterDto } from '../dto/create-register.dto';
import { UsersService } from '../../users/users.service';

 
  @Injectable()
  export class RegisterValidationPipes implements PipeTransform {
    @Inject() private readonly usersService: UsersService
    async transform(body: CreateRegisterDto): Promise<CreateRegisterDto> {
      
      const emailExits = await this.usersService.findUserByEmail(body.email);
      if(emailExits){
        throw new BadRequestException('The email is already to used.');
      }

      const usernameExits = await this.usersService.findUserByUsername(body.username);
      if(usernameExits){
        throw new BadRequestException('The username is already to used.');
      } 

      const phoneExits = await this.usersService.findUserByPhone(body.phone);
      if(phoneExits){
        throw new BadRequestException('The mobile number already exits.');
      }
      
      const mob = body.phone
      body.phone = "66"+ mob.substring(1,10);
    
      return body;
    }
  }
  