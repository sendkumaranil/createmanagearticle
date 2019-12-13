import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLocaleLowerCase()=='male'){
      return 'Mr. ' + value;
    }else{
      return 'Mrs. '+ value;
    }
  }

}
