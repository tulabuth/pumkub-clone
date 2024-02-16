import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { RegisterValidationPipes } from './pipes/register-validation.pipes';
import { ApiTags } from '@nestjs/swagger';

@Controller('registers')
@ApiTags("MEMBER")
export class RegistersController {
  constructor(private readonly registersService: RegistersService) {}

  @Post()
  create(@Body(RegisterValidationPipes) createRegisterDto: CreateRegisterDto) {
    return this.registersService.create(createRegisterDto);
  }

}
