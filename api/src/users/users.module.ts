import { Module } from '@nestjs/common';
import { UsersService } from './users.service'; 
import { UsersController } from './users.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt'; 
@Module({
  imports: [PrismaModule,JwtModule.register({
    secret: 'yourSecretKey', // Clé secrète utilisée pour signer les tokens JWT
    signOptions: { expiresIn: '1h' }, // Durée de validité du token
  }), ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
