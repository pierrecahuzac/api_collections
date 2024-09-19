import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(signupData: {
    email: string;
    password: string;
    passwordConfirmation: string;
    username: string;
  }) {
    
    const {email,password,
      passwordConfirmation,
      username} = signupData
    const userExist = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      throw new Error('Impossible to create, user exist in db');
    }
    let passwordHashed: string;
    if (signupData.password === passwordConfirmation) {
      const saltOrRounds = 10;
      passwordHashed = await bcrypt.hash(password, saltOrRounds);
    }
    const newUser = await this.prisma.user.create({
      data: {
        email: email,
        password: passwordHashed,        
        username: username,
      },
    });
    return { message: 'Utilisateur créé avec succès', newUser };
  }
  async login(loginData: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginData.email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { message: 'Utilisateur trouvé', user };
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

  async update(id: string, user: {email:string, username: string}) {
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
        username: user.username,
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
