import { inject, Injectable } from "@angular/core";
import { WarehouseFacade } from "@ui/dashboard/logistic/facades/warehouse/warehouse.facade";

@Injectable()
export class WarehouseService {
    private readonly facade: WarehouseFacade = inject(WarehouseFacade);
}