import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IPlanEntity } from "@core/shared/domain/entity/plan.entity";
import { PlanRepositoryPort } from "@core/shared/port/out/plan-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PlanRepositoryAdapter implements PlanRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  private plansUrl = `${API_URL}/v1/plans`

  async obtainPlans(): Promise<IPlanEntity[]> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IPlanEntity[]>>(this.plansUrl)
    );
    if (!response.success) throw new Error(response.message)
    return response.data;
  }
}
