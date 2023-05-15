import { Country } from './class';
export class MyClass
{
  counter : number = 0;
  selectedCountry : Country = new Country();
  constructor(){}

  increment(){
    this.counter +=1;
    alert(this.counter)
  }
}
