import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(user: CreateUserDto) {
    const userExist = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (userExist) {
      throw new Error('Impossible to create, user exist in db');
    }

    const newUser = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });
    return newUser;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, user: UpdateUserDto) {
    const userToUpdate = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }
    const updateUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: user.email,
        name: user.name,
      },
    });
    return updateUser;
  }

  async remove(id: string) {
    const userToUpdate = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }
    const updateUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return updateUser;
  }
}
