import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.pw, 10);
    const mappedUserData: Prisma.UserCreateInput = {
      id: createUserDto.id,
      password: hashedPassword,
      nickname: createUserDto.nickname,
      email: createUserDto.email,
    };

    return this.databaseService.user.create({
      data: mappedUserData,
    });
  }

  findAll() {
    return this.databaseService.user.findMany();
  }

  async onLogin(loginUserDto: LoginUserDto) {
    const user = this.databaseService.user.findUnique({
      where: {
        id: loginUserDto.id,
      },
    });
  }
}
