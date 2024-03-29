import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const HttpContext = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest();
  },
);

