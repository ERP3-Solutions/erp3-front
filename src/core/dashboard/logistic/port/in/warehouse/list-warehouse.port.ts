import { UseCase } from "@base/use-case";
import { Warehouse } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { IListWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/list-warehouse.query";

export type ListWarehousePort = UseCase<IListWarehouseQuery, Warehouse[]>;