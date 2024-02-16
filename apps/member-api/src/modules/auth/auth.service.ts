import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '../users/users.service';
import { Users } from '@app/common/entities/Users';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ){}

  async login(body: CreateAuthDto){
    const {username, password} = body;
    const user = await this.validateUser(username, password);
    if (user != null) {
      const payload = {email: username, sub:user.id, id:user.id};
      this.logger.log(`username: ${username} - login success -${new Date()}`);
      return {
        data: user,
        access_token: this.jwtService.sign(payload),
        isSuccess: true
      }
    }

    this.logger.log(`username: ${username} - login failed - ${new Date()}`);
    throw new HttpException(
      'ข้อมูลการเข้าระบบไม่ถูกต้อง',
      HttpStatus.UNAUTHORIZED,
    );
    return null;
  }

  async getUserById(id: number):Promise<Users>{
    return await this.usersService.findUserById(id);
  }

  async validateUser(username: string, password: string):Promise<any>{
    const option = {where:[{username: username},{email: username}]}
    const user = await this.usersService.findUserByOption(option);
    if (user) {
      const isValid = await this.compareHashPassword(user.password, password);
      console.log(isValid);
      if(isValid){
        const {...restult} = user;
        return restult;
      }
      return null;
    }
    return null;
  }

  private compareHashPassword(password:string, DbPassword:string){
    return  bcrypt.compare(DbPassword,password);
  }

}
