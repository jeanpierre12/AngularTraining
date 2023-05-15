import { Component, OnInit ,Input} from '@angular/core';
import { Country } from '../Models/class';
@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
 @Input() MyCountry = new Country();
  constructor() { }

  ngOnInit(): void {
  }

}
