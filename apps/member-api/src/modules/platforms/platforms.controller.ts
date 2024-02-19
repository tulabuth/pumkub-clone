import { Controller, Get, Param } from "@nestjs/common";
import { PlatformsService } from "./platforms.service";
import { ApiTags } from "@nestjs/swagger";
import { ApiPaginationQuery, PaginationOptions } from "@app/common/decorator/pagination.decorator";
import { ApiPaginationResponse, IPagination, IPaginationOptions } from "@app/common/database/pagination";
import { Platform } from "@app/common/entities/Platform";
import { ApiCommonErrorResponse } from "@app/common/decorator/api-common-error-response.decorator";
import { User } from "@app/common/decorator/user.decorator";
import { Users } from "@app/common/entities/Users";

@Controller('platforms')
@ApiTags('MEMBER')
export class PlatformController{
    constructor(
        private readonly platformsService: PlatformsService,
    ){}

  @Get()
  @ApiPaginationQuery()
  @ApiPaginationResponse(Platform)
  @ApiCommonErrorResponse()
  async pagination(
    @PaginationOptions() options: IPaginationOptions,
  ): Promise<IPagination<Platform>> {
    return this.platformsService.pagination(options);
  }

  @Get("category/:id")
  @ApiPaginationQuery()
  @ApiPaginationResponse(Platform)
  @ApiCommonErrorResponse()
  async paginationCategory(
    @PaginationOptions() options: IPaginationOptions,
    @Param('id') id:number,
  ): Promise<IPagination<Platform>> {
      return this.platformsService.paginationCategory(id,options)
  }
  
}