import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(friends: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) {return friends; }
    // Return updated friends list
    return friends.filter(function(friend) {
      return friend.name.toLowerCase().includes(term.toLowerCase())  ;
    });

  }

}
