import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiConflictResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
//import { ProfilUpdateDto } from './dto/profil-update.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserSignupDto } from './dto/user-signup.dto';
//import { UserUpdateDto } from './dto/user-update.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserUpdateDto } from './dto/user-update.dto';
import { ProfilUpdateDto } from './dto/profil-update.dto';

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post('login')
    @ApiOkResponse({ type: User })
    @ApiUnauthorizedResponse()
    login(@Body() body: UserLoginDto): Promise<User> {
        return this.userService.login(body.email, body.password);
    }

    @Post('signup')
    @ApiOkResponse({ type: User })
    @ApiConflictResponse()
    async signup(@Body() body: UserSignupDto): Promise<User> {
        return this.userService.signup(body.email, body.password);
    }

    @Get('excludeUserId/:userId')
    @ApiParam({name: 'userId', type: Number})
    @ApiOkResponse({ type: User, isArray: true })
    getAllUsers(@Param('userId') userId: string): Promise<User[]> {
        return this.userService.getAllUsers(userId);
    }

    @Get(':id')
    @ApiOkResponse({ type: User })
    getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Put()
    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    updateUser(@Body() body: UserUpdateDto): Promise<User> {
        return this.userService.updateUser(body.id, body.email, body.password);
    }

    @Put('updateProfil')
    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    updateProfil(@Body() body: ProfilUpdateDto): Promise<User> {
        return this.userService.updateProfil(body.id, body.lastName, body.firstName, body.dateOfBirth);
    }

    @Post(':userId/friend/:friendId')
    @ApiOkResponse({ type: User })
    addFriendById(@Param('userId') userId: string, @Param('friendId') friendId: string): Promise<User> {
        return this.userService.addFriendById(userId, friendId);
    }

    /**@Delete(':id')
    @ApiOkResponse()
    @ApiNotFoundResponse()
    delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
        return this.userService.deleteById(id);
    }

    @Get()
    @ApiOkResponse({ type: User, isArray: true })
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }*/

    @Get('email-exist/:email')
    @ApiOkResponse({ type: Boolean })
    emailExists(@Param('email') email: string): Promise<boolean> {
        return this.userService.emailExists(email)
    }

    /*@Get(':id')
    @ApiOkResponse({ type: User })
    getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Put()
    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    updateUser(@Body() body: UserUpdateDto): Promise<User> {
        return this.userService.updateUser(body.id, body.email, body.password);
    }

    @Put('updateProfil')
    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    updateProfil(@Body() body: ProfilUpdateDto): Promise<User> {
        return this.userService.updateProfil(body.id, body.lastName, body.firstName, body.dateOfBirth);
    }*/
}