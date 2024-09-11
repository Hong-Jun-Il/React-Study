import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return {
      message: 'get users 성공',
      users: await this.userService.findAll(),
    };
  }

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return {
      message: "create user 성공",
      user: this.userService.create(createUserDto),
    }
  }

  @Post()
  onLogin(@Body(ValidationPipe) loginUserDto: LoginUserDto){
    return {
      message: "로그인 성공"
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
