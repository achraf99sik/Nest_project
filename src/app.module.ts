import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { authMiddleware } from './auth/auth.middleware';

@Module({
  imports: [AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authMiddleware)
      .forRoutes({ path: 'auth/users', method: RequestMethod.GET });
  }
}