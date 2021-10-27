import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'lodash-es';

@Pipe({ name: 'split' })
export class SplitPipe implements PipeTransform {
  transform(input: any, separator: string = ' ', limit?: number): any {
    if (!isString(input)) {
      return input;
    }

    return input.split(separator, limit);
  }
}
