import { UseCase } from "@base/use-case";
import { Warehouse } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/get-warehouse.query";

export type GetWarehousePort = UseCase<IGetWarehouseQuery, Warehouse>;