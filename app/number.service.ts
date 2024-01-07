import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(ino:number):any
  {
        var i:number=0;
        for(i=2;i<=ino/2;i++)
        {
            if(ino%i==0)
            {
                return "It is not prime number";
            }
        }
        return "It is Prime number";
  }
}
