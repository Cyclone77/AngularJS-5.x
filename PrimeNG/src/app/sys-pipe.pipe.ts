import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sysPipe'
})
export class SysPipePipe implements PipeTransform {

  transform(data: Array<any>, args?: any): Array<any> {
    let arr = data.filter(item=>{
      if (item.sys === true){
        return item;
      }
    })
    return arr;
  }

}
