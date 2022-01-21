import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, searchValue: string) {
    if (value.length === 0 || searchValue==='') {
      return value;
    }
      let users=[];
      for(const user of value){
        if(user.fullname.toLowerCase()===searchValue.toLowerCase() || user.email.toLowerCase()===searchValue.toLowerCase()){
          users.push(user)
        }
      }
      return users
  }
  }


