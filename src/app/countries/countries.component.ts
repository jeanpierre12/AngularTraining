import { Component, OnInit, Input ,Output , EventEmitter } from '@angular/core';
import { Country } from '../Models/class';
import { MyClass } from '../Models/MyClass';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() Countries : Country[] = [];
  @Output() countrySelected  = new EventEmitter<string>();
  constructor(private mc: MyClass) {
  
  }
  ngOnInit(): void {

  }
  handleCountrySelection(c: Country){
    this.mc.selectedCountry = c;
    this.countrySelected.emit(c.name)
  }


}


