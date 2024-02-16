import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class RegistersService {
  constructor(
    private readonly usersService: UsersService,
  ){}

  async create(body: CreateRegisterDto) {
    const {password} = body;
    body.password = await bcrypt.hash(password, 10);
    return await this.usersService.create(body);
  }

  

}
