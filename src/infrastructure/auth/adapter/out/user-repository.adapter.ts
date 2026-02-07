import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";
import { SECURITY_API } from "@environment/api.context";
import { firstValueFrom } from "rxjs";

@Injectable()
export class UserRepositoryAdapter extends UserRepositoryPort {
  public constructor(
    private httpClient: HttpClient
  ){
    super();
  }

  async loginWithCredentials(params: ICredentialsCommand) {
    return firstValueFrom(this.httpClient.post<string>(SECURITY_API, params));
  }
}