import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPresenter } from './user.presenter';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    async create(@Body() data: CreateUserDto){
        const user = await this.usersService.createCommonUser(data)
        return new UserPresenter(user);
    }

    @Get()
    async findMany(){
        return this.usersService.findAll()
    }

}
