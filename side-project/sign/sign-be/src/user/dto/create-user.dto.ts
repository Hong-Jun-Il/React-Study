import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { Match } from 'src/decorators/match.decorators';

export class CreateUserDto {
  @IsEmail({}, { message: '이메일 형식이 아님' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  @Matches(/^[a-zA-Z가-힣0-9]{3,10}$/)
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 12)
  @Matches(/^[a-zA-Z0-9-_]{6,12}$/)
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)
  pw: string;

  @IsString()
  @IsNotEmpty()
  @Match('pw', { message: '비밀번호 확인이 비밀번호와 일치하지 않습니다.' })
  pwCheck: string;
}
