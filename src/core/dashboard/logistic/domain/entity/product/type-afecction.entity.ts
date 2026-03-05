export interface TypeAffectation {
  code: string;
  description: string;
  paysIgv: boolean;
}

export const TypeAffectations = {
  GravadoOperacionOnerosa: {
    code: '10',
    description: 'Gravado - Operación Onerosa',
    paysIgv: true,
  },

  GravadoRetiroPorPremio: {
    code: '11',
    description: 'Gravado - Retiro por Premio',
    paysIgv: true,
  },

  GravadoRetiroPorDonacion: {
    code: '12',
    description: 'Gravado - Retiro por Donación',
    paysIgv: true,
  },

  GravadoRetiro: {
    code: '13',
    description: 'Gravado - Retiro',
    paysIgv: true,
  },

  GravadoRetiroPorPublicidad: {
    code: '14',
    description: 'Gravado - Retiro por Publicidad',
    paysIgv: true,
  },
} as const;

export const TypeAffectationList: TypeAffectation[] =
  Object.values(TypeAffectations);
