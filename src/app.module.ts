import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModelModule } from './model/model.module';
import { ResultModule } from './result/result.module';

@Module({
  imports: [UserModule, ModelModule, ResultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
