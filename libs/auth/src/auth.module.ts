import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthConfigService } from './auth-config.service';
import { AuthService } from './auth.service';
import { BasicStrategy } from './strategies/basic.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    AuthModule.forRoot(),
    JwtModule.registerAsync({
      useClass: AuthConfigService,
      useExisting: AuthConfigService,
    }),
    PassportModule.registerAsync({
      useClass: AuthConfigService,
      useExisting: AuthConfigService,
    }),
  ],
  providers: [AuthService, JwtStrategy, BasicStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {
  private static forRoot(): DynamicModule {
    return {
      module: AuthModule,
      imports: [ConfigModule],
      providers: [AuthConfigService],
      exports: [AuthConfigService],
      global: true,
    };
  }
}
