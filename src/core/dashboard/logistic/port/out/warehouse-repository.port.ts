export interface WarehouseRepositoryPort {
  getWarehouseById(id: string): Promise<any>;
  getAllWarehouses(): Promise<any[]>;
  createWarehouse(data: any): Promise<any>;
  updateWarehouse(id: string, data: any): Promise<any>;
  deleteWarehouse(id: string): Promise<void>;
}