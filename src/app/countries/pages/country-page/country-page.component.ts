import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country, Currencies, CurrencyData } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country
  public currency?: Currencies

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if(!country) {
          return this.router.navigateByUrl('')
        }
        return this.country = country
      })
  }

  extractLanguage(country: Country) {
    return Object.values(country.languages)[0]
  }

  extractCurrency(country: Country) {
    return Object.values(country.currencies)[0].name
  }
  extractSymbol(country: Country) {
    return Object.values(country.currencies)[0].symbol
  }
}