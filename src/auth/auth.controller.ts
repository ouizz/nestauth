import { Controller, Get, Post, Body, Patch, Param, Delete , Request , UseGuards , Res  } from '@nestjs/common'; //Res cookie
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req , @Res({ passthrough: true }) res ){ //@Request() คือ decorator  // @Res({ passthrough: true }) res [for cookie]
    //console.log(req)
    const { accessToken } = await this.authService.login(req.user);
    //return { accessToken }; // return accessToken

    //cookie used
    res.cookie('access_token', accessToken, {
      httpOnly: true,
    });
    return { message: 'Successfully logged in' };

  }

}

