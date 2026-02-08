import { Injectable, signal } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";

@Injectable()
export class AuthStore {
  formLogin = signal<ICredentialsCommand>({
    email: '',
    password: '',
  });
}