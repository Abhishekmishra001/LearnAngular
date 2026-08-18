import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeComp',
})
export class PipeCompPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

