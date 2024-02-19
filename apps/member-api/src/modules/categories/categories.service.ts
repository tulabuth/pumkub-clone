import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from '@app/common/entities/Categories';
import { Repository } from 'typeorm';
import { IPagination, IPaginationOptions, paginate } from '@app/common/database/pagination';
import { Platform } from '@app/common/entities/Platform';
import { Exception } from '@app/common/core/errors/exception';
import { dbError } from '@app/common/core/errors/message';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoryRepository: Repository<Categories>,
  ){}
  
  async pagination(
    options: IPaginationOptions,
    id:number,
  ): Promise<IPagination<Categories>> {
    try {
      const query = { where: { platformId: id} };
      return await paginate<Categories>(this.categoryRepository, options, query);
    } catch (e) {
      throw new Exception(e, dbError);
    }
  }
}
