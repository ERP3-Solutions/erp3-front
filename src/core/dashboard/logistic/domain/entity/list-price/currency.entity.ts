import { ECurrencyCode } from "../../enum/currency-code.enum";
import { ECurrencySymbol } from "../../enum/currency-symbol.enum";

export class Currency {

  currencyCode: ECurrencyCode;
  name: string;
  symbol: ECurrencySymbol;

  private constructor(
    currencyCode: ECurrencyCode,
    name: string,
    symbol: ECurrencySymbol
  ) {
    this.currencyCode = currencyCode;
    this.name = name;
    this.symbol = symbol;
  }

  static readonly Sol = new Currency(
    ECurrencyCode.PEN,
    'Sol Peruano',
    ECurrencySymbol.PEN
  );

  static readonly Dollar = new Currency(
    ECurrencyCode.USD,
    'US Dollar',
    ECurrencySymbol.USD
  );

  static readonly Euro = new Currency(
    ECurrencyCode.EUR,
    'Euro',
    ECurrencySymbol.EUR
  );

  static readonly Pound = new Currency(
    ECurrencyCode.GBP,
    'British Pound',
    ECurrencySymbol.GBP
  );

  static readonly Yen = new Currency(
    ECurrencyCode.JPY,
    'Japanese Yen',
    ECurrencySymbol.JPY
  );

  static readonly All: Currency[] = [
    Currency.Sol,
    Currency.Dollar,
    Currency.Euro,
    Currency.Pound,
    Currency.Yen
  ];

  static from(code: ECurrencyCode): Currency {
    const currency = Currency.All.find(x => x.currencyCode === code);

    if (!currency) {
      throw new Error(`Currency inválida: ${code}`);
    }

    return currency;
  }

}