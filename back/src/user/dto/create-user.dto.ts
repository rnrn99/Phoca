import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { Users } from "../user.entity";

export class CreateUserDto {
  @ApiProperty({
    description: "유저 이름",
    required: true,
    type: "string",
  })
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  userName: Users["userName"];

  @ApiProperty({
    description: "이메일(아이디)",
    required: true,
    type: "string",
  })
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  @IsEmail()
  email: Users["email"];

  @ApiProperty({
    description: "비밀번호",
    required: true,
    type: "string",
  })
  @IsString()
  @MinLength(4)
  @Matches(/^[a-zA-Z0-9!@#$%^&*]*$/, {
    message: "password only accpets english, number and !@#$%^&*.",
  })
  password: Users["password"];
}
