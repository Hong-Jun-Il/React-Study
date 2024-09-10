import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService){};

    async create(createUserDto: CreateUserDto){
      const mappedUserData: Prisma.UserCreateInput = {
        id: createUserDto.id,
        password: createUserDto.pw,
        nickname: createUserDto.nickname,
        email: createUserDto.email
      };

      return this.databaseService.user.create({
        data: mappedUserData
      })
    }
  }
