import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiPaginationQuery, PaginationOptions } from '@app/common/decorator/pagination.decorator';
import { ApiPaginationResponse, IPagination, IPaginationOptions } from '@app/common/database/pagination';
import { Services } from '@app/common/entities/Services';
import { ApiCommonErrorResponse } from '@app/common/decorator/api-common-error-response.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('services')
@ApiTags('MEMBER')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  
  @Get("category/:id")
  @ApiPaginationQuery()
  @ApiPaginationResponse(Services)
  @ApiCommonErrorResponse()
  async paginationCategory(
    @PaginationOptions() options: IPaginationOptions,
    @Param('id') id: number,
  ): Promise<IPagination<Services>> {
    return this.servicesService.paginationCategory(options,id);
  }

  @Get()
  @ApiPaginationQuery()
  @ApiPaginationResponse(Services)
  @ApiCommonErrorResponse()
  async pagination(
    @PaginationOptions() options: IPaginationOptions,
  ): Promise<IPagination<Services>> {
    return this.servicesService.pagination(options);
  }

}
