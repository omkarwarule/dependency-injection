import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(value:String): number
  { 
      var ans:number=0;
      var i:number=0;

      for(i=0;i<value.length;i++)
      {
          if(value[i]>='A' && value[i]<='Z')
          { 
              ans++;
          }

      }
      return ans;
  }
}
