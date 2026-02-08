import { inject, Injectable } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { AuthStore } from "../store/auth.store";
import { AuthFacade } from "../facades/auth.facade";

@Injectable()
export class AuthService {
  private readonly store: AuthStore = inject(AuthStore);
  private readonly facade: AuthFacade = inject(AuthFacade);

  get formLogin() {
    return this.store.formLogin;
  }

  loginWithCredentials(command: ICredentialsCommand) {
    return this.facade.loginWithCredentials(command);
  }
}
