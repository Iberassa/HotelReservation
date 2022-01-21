import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue: string) {
    if (value.length === 0 || searchValue==='') {
      return value;
    }
      let rooms=[];
      for(const room of value){
        if(room.roomName.toLowerCase()===searchValue.toLowerCase()){
          rooms.push(room)
        }
      }
      return rooms
  }

}
