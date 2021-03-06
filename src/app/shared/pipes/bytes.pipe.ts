import { Pipe, PipeTransform } from '@angular/core';
import { utils } from '../utils/utils';

export type ByteUnit = 'Byte' | 'KB' | 'MB' | 'GB' | 'TB';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  static formats: { [key: string]: { max: number, prev?: ByteUnit } } = {
    Byte: {max: 1024},
    KB: {max: Math.pow(1024, 2), prev: 'Byte'},
    MB: {max: Math.pow(1024, 3), prev: 'KB'},
    GB: {max: Math.pow(1024, 4), prev: 'MB'},
    TB: {max: Number.MAX_SAFE_INTEGER, prev: 'GB'}
  };


  transform(inputX: any, decimal: number = 0, from: ByteUnit = 'Byte'): any {
    const input: number = parseInt(inputX, 2);

    if (!(utils.isNumberFinite(input) &&
      utils.isNumberFinite(decimal) &&
      utils.isInteger(decimal) &&
      utils.isPositive(decimal))) {
      return input;
    }

    let bytes: any = input;
    let unit: any = from;
    while (unit !== 'Byte') {
      bytes *= 1024;
      unit = BytesPipe.formats[unit].prev;
    }
    for (const key of Object.keys(BytesPipe.formats)) {
      const format = BytesPipe.formats[key];
      if (bytes < format.max) {

        const prev = BytesPipe.formats[<any>format.prev];

        const result = prev ?
          utils.toDecimal(bytes / prev.max, decimal) :
          utils.toDecimal(bytes, decimal);

        return (result > 1 && key === 'Byte') ? `${result} Bytes` : `${result} ${key}`;
      }
    }
  }
}
