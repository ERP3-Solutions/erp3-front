import { TypeDocumentConstant } from "@core/shared/application/constant/type-document.constant";

export const PathTranslationTypeDocumentsConstant: Record<number, string> = {
  [TypeDocumentConstant.FACTURA]: 'shared.document-types.factura',
  [TypeDocumentConstant.BOLETA]: 'shared.document-types.boleta',
  [TypeDocumentConstant.NOTA_CREDITO]: 'shared.document-types.nota-credito',
  [TypeDocumentConstant.NOTA_DEBITO]: 'shared.document-types.nota-debito',
  [TypeDocumentConstant.GUIA_REMISION]: 'shared.document-types.guia-remision',
  [TypeDocumentConstant.COMPROBANTE_RETENCION]: 'shared.document-types.comprobante-retencion',
}