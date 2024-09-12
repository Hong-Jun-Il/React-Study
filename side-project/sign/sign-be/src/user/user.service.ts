import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly databaseService: DatabaseService,
    private jwtService: JwtService,
  ) {}

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

  async onLogin(loginUserDto: LoginUserDto) {
    const user = await this.databaseService.user.findUnique({
      where: {
        id: loginUserDto.id,
      },
    });

    if (!user) {
      throw new NotFoundException("Can't find user");
    }

    const isMatched: boolean = await bcrypt.compare(
      loginUserDto.pw,
      user.password,
    );

    if (!isMatched) {
      throw new UnauthorizedException('잘못된 비밀번호입니다.');
    }

    const { password, ...others } = user;

    console.log(others);
  }

  findAll() {
    return this.databaseService.user.findMany();
  }
}
