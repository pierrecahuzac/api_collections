import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create(signupData: CreateUserDto) {
    const { email, password, passwordConfirmation, username } = signupData;
    const userExist = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      return { message: 'Impossible to create, user exist in db' };
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

  async login(loginData: LoginUserDto) {
    console.log('ici');
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginData.email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordIsOK = bcrypt.compareSync(loginData.password, user.password);
    if (!passwordIsOK) {
      return { message: 'Mauvaise combinaison email / mot de passe' };
    }
    delete user.password;
    const payload = {
      userId: user.id,
      email: user.email,
      username: user.username,
    };
    console.log(payload);
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      message: 'Utilisateur trouvé',
      user,
      accessToken,
    };
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
  async getAllUserCollections(userId: string) {
    const response = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        collections: true,
      },
    });
    return response;
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

  async update(id: string, user: { email: string; username: string }) {
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
