import { NgModule } from "@angular/core";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { ListPriceRepositoryAdapter } from "./adapter/out/list-price-repository.adapter";
import { ProductsRepositoryAdapter } from "./adapter/out/products-repository.adapter";
import { WarehouseRepositoryAdapter } from "./adapter/out/warehouse-repository.adapter";
import { StockMovementRepositoryAdapter } from "./adapter/out/stock-movement-repository.adapter";
import { LIST_PRICE_REPOSITORY_TOKEN } from "../../../data/dashboard/logistic/out/list-price-repository.token";
import { PRODUCT_REPOSITORY_TOKEN } from "../../../data/dashboard/logistic/out/product-repository.token";
import { WAREHOUSE_REPOSITORY_TOKEN } from "../../../data/dashboard/logistic/out/warehouse-repository.token";
import { STOCK_MOVEMENT_REPOSITORY_TOKEN } from "../../../data/dashboard/logistic/out/stock-movement-repository.token";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: LIST_PRICE_REPOSITORY_TOKEN,
      useClass: ListPriceRepositoryAdapter
    },
    {
      provide: PRODUCT_REPOSITORY_TOKEN,
      useClass: ProductsRepositoryAdapter
    },
    {
      provide: WAREHOUSE_REPOSITORY_TOKEN,
      useClass: WarehouseRepositoryAdapter
    },
    {
      provide: STOCK_MOVEMENT_REPOSITORY_TOKEN,
      useClass: StockMovementRepositoryAdapter
    },
  ]
})
export class LogisticProvider { }
