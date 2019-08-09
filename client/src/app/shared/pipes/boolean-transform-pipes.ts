import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'statusBoolean' })
export class BooleanTransformPipe implements PipeTransform {
    transform(value: boolean): string {
        return value === true ? 'Yes' : 'No';
    }
}
