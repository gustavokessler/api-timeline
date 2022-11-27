/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  register(@Body() body: {email: string; password: string; name: string}) {
    return this.authService.createAccount(body.email, body.password, body.name);
  }

}
