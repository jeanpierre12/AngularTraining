import { Component,Input, OnInit } from '@angular/core';
import { MyClass } from '../Models/MyClass';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() name = '';
  @Input() description = '';
  @Input() flagurl = '';
  @Input() population = 0;
 constructor(private mc: MyClass) { }

  ngOnInit(): void {
  }

  showPopulation()
  {
    this.mc.increment();
  }

}
