import { EUnitCode } from '../../enum/unit-code.enum';

export class Unit {
  constructor(
    public unitCode: EUnitCode,
    public descripcion: string,
    public equivalenciaSunat: string,
  ) {}

  static Bolsa = new Unit(EUnitCode.BG, 'BOLSA', 'bag');

  static UnidadServicios = new Unit(
    EUnitCode.ZZ,
    'UNIDAD SERVICIOS',
    'UNIDAD (SERVICIOS)',
  );

  static Libra = new Unit(EUnitCode.LBR, 'LIBRA', 'POUND');

  static Gramo = new Unit(EUnitCode.GRM, 'GRAMO', 'GRAM');

  static Galon = new Unit(EUnitCode.GLL, 'GALON', 'US GALON (3,7843 L)');

  static Kilogramo = new Unit(EUnitCode.KGM, 'KILOGRAMOS', 'kilogram');

  static Metro = new Unit(EUnitCode.MTR, 'METRO', 'metre');

  static Litro = new Unit(EUnitCode.LTR, 'LITRO', 'Litre');

  static Lata = new Unit(EUnitCode.CA, 'LATAS', 'Can');

  static Paquete = new Unit(EUnitCode.PK, 'PAQUETE', 'package');

  static Unidad = new Unit(
    EUnitCode.NIU,
    'UNIDAD',
    'number of international units',
  );

  static Docena = new Unit(EUnitCode.DZN, 'DOCENA', 'Dozen');

  static Caja = new Unit(EUnitCode.BX, 'CAJA', 'Box');

  static Botella = new Unit(EUnitCode.BO, 'BOTELLA', 'bottle');

  static Barril = new Unit(
    EUnitCode.BLL,
    'BARRILES',
    'barrel (US) (petroleum etc.)',
  );

  static Balde = new Unit(EUnitCode.BJ, 'BALDE', 'bucket');

  static all: Unit[] = [
    Unit.Bolsa,
    Unit.UnidadServicios,
    Unit.Libra,
    Unit.Gramo,
    Unit.Galon,
    Unit.Kilogramo,
    Unit.Metro,
    Unit.Litro,
    Unit.Lata,
    Unit.Paquete,
    Unit.Unidad,
    Unit.Docena,
    Unit.Caja,
    Unit.Botella,
    Unit.Barril,
    Unit.Balde,
  ];

  static from(code: EUnitCode): Unit {
    const unit = Unit.all.find((x) => x.unitCode === code);

    if (!unit) {
      throw new Error(`Unit not found for code: ${code}`);
    }

    return unit;
  }
}
