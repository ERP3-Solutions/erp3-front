import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";

@Injectable()
export class UserRepositoryAdapter implements UserRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  async loginWithCredentials(params: ICredentialsCommand) {
    // return firstValueFrom(this.httpClient.post<string>(SECURITY_API, params));
    return "mi token especial";
  }
}