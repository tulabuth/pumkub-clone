import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiPaginationQuery, PaginationOptions } from '@app/common/decorator/pagination.decorator';
import { ApiPaginationResponse, IPagination, IPaginationOptions } from '@app/common/database/pagination';
import { Categories } from '@app/common/entities/Categories';
import { ApiCommonErrorResponse } from '@app/common/decorator/api-common-error-response.decorator';
import { Platform } from '@app/common/entities/Platform';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags("MEMBER")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiPaginationQuery()
  @ApiPaginationResponse(Categories)
  @ApiCommonErrorResponse()
  async pagination(
    @PaginationOptions() options: IPaginationOptions,
    @Param('id') id: number,
  ): Promise<IPagination<Categories>> {
    return this.categoriesService.pagination(options,id);
  }
}
