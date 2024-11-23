import { Injectable } from '@nestjs/common';
import { LoginDto } from './login-dto';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from './users/dto/create-user.dto';

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    async login(data: LoginDto){
        const user: CreateUserDto = await this.userService.findOne(data.email);

        if(!user || bcrypt.compareSync(data.password, user.password)){
            throw new Error('Invalid Credentials');
        }

        const {password, ...result} = user

        return {
            access_token: this.jwtService.sign(result)
        }
    }
}
