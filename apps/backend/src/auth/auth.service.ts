import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@/user/entities/user.entity';
import { UserService } from '@/user/user.service';
import { saltRounds } from '@/config/constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.userService.getUser(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isMatch: boolean = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }

  public async login(user: User): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  public async register(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const existingUser = await this.userService.getUser(email);
    if (existingUser) {
      throw new BadRequestException('email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user: User = await this.userService.createUser(email, hashedPassword);
    return this.login(user);
  }
}
