import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Platform } from '@app/common/entities/Platform';
import { Repository } from 'typeorm';
import { IPagination, IPaginationOptions, paginate } from '@app/common/database/pagination';
import { Users } from '@app/common/entities/Users';
import { Exception } from '@app/common/core/errors/exception';
import { dbError } from '@app/common/core/errors/message';
import { Categories } from '@app/common/entities/Categories';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectRepository(Platform)
    private readonly platformRepository: Repository<Platform>,
    @InjectRepository(Categories)
    private readonly categoryRepository: Repository<Categories>,
  ){}

  async pagination(
    options: IPaginationOptions,
  ): Promise<IPagination<Platform>> {
    try {
      const query = { where: { } };
      return await paginate<Platform>(this.platformRepository, options, query);
    } catch (e) {
      throw new Exception(e, dbError);
    }
  }

  async paginationCategory(
    id:number,
    options: IPaginationOptions,
  ): Promise<IPagination<Platform>> {
    try {
      const query = { where: { platformId: id } };
      return await paginate<Platform>(this.categoryRepository, options, query);
    } catch (e) {
      throw new Exception(e, dbError);
    }
  }
}
