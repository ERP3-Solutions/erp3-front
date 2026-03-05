import { UseCase } from "@base/use-case";
import { ICompanyRucEntity } from "@core/auth/domain/entity/company-ruc.entity";

export type ObtainOrganizationByRucPort = UseCase<string, ICompanyRucEntity>