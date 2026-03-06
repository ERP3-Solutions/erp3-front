import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IRegisterProductEquivalenceCommand } from "@core/dashboard/logistic/domain/command/product/register-product-equivalence/register-product-equivalence.command";
import { IRegisterProductVariantsCommand } from "@core/dashboard/logistic/domain/command/product/register-product-variant/register-product-variants.command";
import { IRegisterProductCommand } from "@core/dashboard/logistic/domain/command/product/register-product.command";
import { IUpdateProductCommand } from "@core/dashboard/logistic/domain/command/product/update-product.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";
import { IGetProductByIdQuery } from "@core/dashboard/logistic/domain/query/product/get-product-by-id.query";
import { IListProductQuery } from "@core/dashboard/logistic/domain/query/product/list-product.query";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

interface IPagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export class ProductsRepositoryAdapter implements ProductRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient);

  private productUrl = `${API_URL}/v1/products`;

  async getProductById(query: IGetProductByIdQuery): Promise<IProductEntity> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IProductEntity>>(
        `${this.productUrl}/${query.productId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async listProducts(query: IListProductQuery): Promise<IProductEntity[]> {
    const params: Record<string, string | number> = {
      pageNumber: query.PageNumber,
      pageSize: query.PageSize,
      createdFrom: query.createdAtFrom,
      createdTo: query.createdAtTo,
    };
    if (query.search != null) params['search'] = query.search;
    if (query.typeStock != null) params['typeStock'] = query.typeStock;

    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IPagedResult<IProductEntity>>>(
        this.productUrl,
        { params },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data?.items ?? [];
  }

  async registerProduct(command: IRegisterProductCommand): Promise<IProductEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IProductEntity>>(
        this.productUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async registerProductEquivalences(
    command: IRegisterProductEquivalenceCommand,
  ): Promise<IProductEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IProductEntity>>(
        `${this.productUrl}/equivalences`,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async registerProductVariants(
    command: IRegisterProductVariantsCommand,
  ): Promise<IProductEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IProductEntity>>(
        `${this.productUrl}/variants`,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateProduct(command: IUpdateProductCommand): Promise<IProductEntity> {
    const { productId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IProductEntity>>(
        `${this.productUrl}/${productId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
}
