import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from '@app/common/entities/Services';
import { IPagination, IPaginationOptions, paginate } from '@app/common/database/pagination';
import { Exception } from '@app/common/core/errors/exception';
import { dbError } from '@app/common/core/errors/message';

@Injectable()
export class ServicesService {
 constructor(
  @InjectRepository(Services)
  private readonly serviceRepository: Repository<Services>,
 ){}

  async pagination(
    options: IPaginationOptions,
  ): Promise<IPagination<Services>> {
    try {
      const query = { where: { } };
      return await paginate<Services>(this.serviceRepository, options, query);
    } catch (e) {
      throw new Exception(e, dbError);
    }
  }

  async paginationCategory(
    options: IPaginationOptions,
    id:number,
  ): Promise<IPagination<Services>> {
    try {
      const query = { where: { categoryId: id} };
      return await paginate<Services>(this.serviceRepository, options, query);
    } catch (e) {
      throw new Exception(e, dbError);
    }
  }
}
