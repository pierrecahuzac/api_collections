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
import { ItemController } from './item/item.controller';
import { ItemModule } from './item/item.module';
import { ItemService } from './item/item.service';

@Module({
  imports: [UsersModule, PrismaModule, CollectionModule, ItemModule],
  controllers: [AppController, UsersController, CollectionController, ItemController],
  providers: [AppService, UsersService, CollectionService, ItemService],
})
export class AppModule {}
