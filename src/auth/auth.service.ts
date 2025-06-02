import { Injectable } from '@nestjs/common';
import { Auth } from './auth.interface';

@Injectable()
export class AuthService {
    private readonly auths: Auth[] = [];

    register(auth: Auth) {
        this.auths.push(auth);
    }

    findAll(): Auth[] {
        return this.auths;
    }
}
