import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Req, RawBodyRequest} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @HttpCode(201)
  async create(@Body() signupData: { email: string; password: string, passwordConfirmation: string, username: string }) {
    return this.usersService.create(signupData);
  }

  @Post("login")
  @HttpCode(200)
  async login(@Body() loginData: { email: string; password: string }) {
    return this.usersService.login(loginData);
  }


  @Get()
  @HttpCode(200)
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  async findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() user: {email:string, username: string}) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
