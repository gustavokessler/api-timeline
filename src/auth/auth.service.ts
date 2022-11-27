/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  
  login(email: string, password: string) {
    return true;
  }

  createAccount(email: string, password: string, name: string){
    return true;
  }
}
