import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';

import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { CollectionModule } from './collection/collection.module';
import { CollectionController } from './collection/collection.controller';
import { CollectionService } from './collection/collection.service';

@Module({
  imports: [UsersModule, PrismaModule, CollectionModule],
  controllers: [AppController, UsersController, CollectionController],
  providers: [AppService, UsersService, CollectionService],
})
export class AppModule {}
