import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {

  @IsAlpha()
  firstName: string;

  @IsAlpha()
  lastName: string;
  
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  password: string;
  }