import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  @IsAlpha()
  firstName: string;

  @IsNotEmpty()
  @IsAlpha()
  lastName: string;
  
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  password: string;
}