import { Pipe, PipeTransform } from "@angular/core";
import { TextFormat } from "../types/text-format.type";

@Pipe({
  name: 'textFormat',
  standalone: true
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string | null | undefined, format: TextFormat = 'space'): string {
    if (!value) return '';

    const words = this.extractWords(value);

    switch (format) {
      case 'snake':
        return words.map(w => w.toLowerCase()).join('_');

      case 'kebab':
        return words.map(w => w.toLowerCase()).join('-');

      case 'camel':
        return words
          .map((w, i) =>
            i === 0
              ? w.toLowerCase()
              : this.capitalize(w.toLowerCase())
          )
          .join('');

      case 'pascal':
        return words
          .map(w => this.capitalize(w.toLowerCase()))
          .join('');

      case 'upper':
        return words.join('').toUpperCase();

      case 'lower':
        return words.join('').toLowerCase();

      case 'capitalize':
        return this.capitalize(value);

      case 'title':
        return words
          .map(w => this.capitalize(w.toLowerCase()))
          .join(' ');

      case 'space':
      default:
        return words.map(w => w.toLowerCase()).join(' ');
    }
  }

  private extractWords(input: string): string[] {
    return input
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .filter(Boolean);
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}