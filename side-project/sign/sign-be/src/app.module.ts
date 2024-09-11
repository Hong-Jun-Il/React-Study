import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, DatabaseModule, MyLoggerModule],
})
export class AppModule {}
