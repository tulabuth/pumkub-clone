import { Users } from '@app/common/entities/Users';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterDto } from '../registers/dto/create-register.dto';
import { UserDto } from '@app/common/dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { ChangePasswordDto } from './dto/change-password.dto';
import * as bcrypt from 'bcryptjs';
import { Languages } from '@app/common/entities/Language';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersReposity: Repository<Users>,
    @InjectRepository(Languages)
    private readonly languageReposity: Repository<Languages>,
  ){}


  async create(body: CreateRegisterDto){
    return await this.usersReposity.save(body);
  }

  
  async findUserByEmail(email: string):Promise<Users> {
    return await this.usersReposity.findOne({where: {email}})
  }

  async findUserByPhone(phone: string):Promise<Users> {
    return await this.usersReposity.findOne({where: {phone}})
  }

  async findUserByUsername(username: string):Promise<Users> {
    return await this.usersReposity.findOne({where: {username}})
  }

  async profile(body:UserDto){
  const user =  await this.usersReposity.findOne({where: {id: body.id}})
  return {
    user,
    isSuccess: true,
  }
  }

  async findUserById(id: number):Promise<Users>{
    return await this.usersReposity.findOne({where: {id}});
  }
  
  async findUserByOption(option:any):Promise<Users>{
    return await this.usersReposity.findOne(option);
  }

  async generateApiKey(id: number):Promise<any>{
    const apiKey = await uuidv4();
    await this.usersReposity.update(id, {api_key: apiKey});
    return {
      apiKey,
      isSuccess:true
    }
  }

  async changePassword(id: number,body: ChangePasswordDto){
    const user = await this.usersReposity.findOne({where: {id}});
    const hashPassword = bcrypt.hash(body.newPassword, 10);
    if(!user){
      throw new NotFoundException(`User not found`);
    }
  
   const isValid = await bcrypt.compare(body.oldPassword,user.password);
   
   if (!isValid) {
    throw new NotFoundException(`The ${body.oldPassword} is not matched`)
   }
 
   await this.usersReposity.update(id, {password: hashPassword});
   return {
    message: `The ${body.newPassword} is changed successfully`,
    isSuccess: true
   }

  }

  async getLanguage():Promise<Languages[]>{
    return await this.languageReposity.find({})
  }
}
