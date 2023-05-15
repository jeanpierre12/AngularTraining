import { Component, OnInit ,EventEmitter,Output,Input } from '@angular/core';
import { Country } from '../Models/class';
import { MyClass } from '../Models/MyClass';
@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchButtonClicked  = new EventEmitter<string>();
  @Input() Countries : Country[] = [];
  countryName = '';
  constructor(private mc: MyClass) { }

  ngOnInit(): void {
  }

  HandleSearchClick(){
    this.mc.increment();
    this.searchButtonClicked.emit(this.countryName)
  }

  handleDDL(){
    this.searchButtonClicked.emit(this.countryName)
  }

  handleInput(){
    this.searchButtonClicked.emit(this.countryName)
  }

}
