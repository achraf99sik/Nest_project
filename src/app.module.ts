import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { authMiddleware } from './auth/auth.middleware';
import { DevModule } from './dev/dev.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: '',
      database: 'nest_project',
      entities: [],
      synchronize: true,
    }),
    DevModule,
    ConfigModule.forRoot()
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authMiddleware)
      .forRoutes({ path: 'auth/users', method: RequestMethod.GET });
  }
}