import { Component } from '@angular/core';
import { Country } from './Models/class';
import { MyClass } from './Models/MyClass';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    AllCountries: Country[] = [];
    FilteredCountries: Country[] = [];
    selectedCountry : Country = new Country();
    IsFirstRun : boolean = true;
    constructor(mc: MyClass) {
        this.getCountries();
    }
    ParentFunctionHandlingSearchButton(MessageFromChild:string){
      if (MessageFromChild == '')
      {
        this.getCountries()
      }
      else
      {
        this.getCountryByName(MessageFromChild);
      }

    }

    ListeningToSelectedCountry(MessageFromChild: string){
      this.getSpecificCountry(MessageFromChild);
    }

    getCountries() {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((json) => {
                this.fillArray(json);
            });
    }

    getSpecificCountry(name: string) {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
          .then((response) => response.json())
          .then((json) => {
            let element = json[0];
            this.selectedCountry = new Country();
            this.selectedCountry.name = element.name.common;
            this.selectedCountry.imgsrc = element.flags.png;
            this.selectedCountry.population = element.population;
          });
  }

    getCountryByName(name: string) {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((response) => response.json())
            .then((json) => {
                this.fillArray(json);
            });
    }

    fillArray(json: any) {
        //this.AllCountries = [];
        this.FilteredCountries = [];
        json.forEach((element: any) => {
            let c = new Country();
            c.name = element.name.common;
            c.imgsrc = element.flags.png;
            c.population = element.population;
            if (this.IsFirstRun == true){ this.AllCountries.push(c)};
            this.FilteredCountries.push(c);
        });
        this.IsFirstRun = false;
    }
}
