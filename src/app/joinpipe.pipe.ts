import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'joinpipe'
})
export class JoinpipePipe implements PipeTransform {

    transform(value: string[], joinString: string = ','): any {
        return !value ? '' : value.join(joinString + ' ');
    }

}
