import { Controller, Get, Post, Body, Patch, Param, Delete , Request , UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req){ //@Request() คือ decorator
    //console.log(req)
    const { accessToken } = await this.authService.login(req.user);
    //return req.user;
    return { accessToken };
  }

}

