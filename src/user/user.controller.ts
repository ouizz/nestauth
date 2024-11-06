import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Request } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  create(@Body() registerDto: RegisterUserDto) {
    return this.userService.create(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    const user = this.userService.findByEmail(req.user.email);
    return user;
  }

}
