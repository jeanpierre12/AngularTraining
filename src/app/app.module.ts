import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PluralizePipe } from './Pipes/pluralize.pipe';

import {FormsModule} from '@angular/forms';
import { CountryDetailsComponent } from './country-details/country-details.component'
import { MyClass } from './Models/MyClass';
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent,
    SearchBarComponent,
    PluralizePipe,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
