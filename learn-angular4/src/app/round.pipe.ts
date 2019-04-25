import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'roundNum'})

export class RoundPipe implements PipeTransform {
  transform(value: number, isUpper: boolean) : number {
    return isUpper ? Math.ceil(value) : Math.floor(value);
  }
}

