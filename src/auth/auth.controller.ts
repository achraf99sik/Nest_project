import { Body, Controller, Get, HttpStatus, Param, Post, Res, UsePipes, ValidationPipe  } from "@nestjs/common";
import { UserDto } from "./auth.userDto";

@Controller("auth")
export class AuthController {
  @Get()
  auth() {
    return "<a href='/auth/login'><button>Login</button></a>";
  }
  @Get("login")
  login(): string {
    return `
    <form action="/auth/register" method=POST>
      <label for="firstName">First name:</label><br>
      <input type="text" id="firstName" name="firstName" value="John"><br>
      <label for="lastName">Last name:</label><br>
      <input type="text" id="lastName" name="lastName" value="Doe"><br><br>
      <label for="email">Last name:</label><br>
      <input type="email" id="email" name="email" value="exemple@email.com"><br><br>
      <label for="password">Last name:</label><br>
      <input type="password" id="password" name="password" value="Pa$$w0rd!"><br><br>
      <input type="submit" value="Submit">
    </form>
    `;
  }
  @Get("login/:id")
  show(@Param() params: any): string {
    return `<body style='background:#050505;'><h1 class='bg-red-900' style='color:white;'>you are logged in ${params.id}</h1></body>`;
  }
  @Post("register")
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() UserDto: UserDto) {
    return this.register(UserDto);
  }
  register(user: UserDto): string {
    console.log(user)
    return `Successfully registered`
  }

}
