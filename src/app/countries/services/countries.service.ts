import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Country } from '../interfaces/county';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {

        const url = `${this.apiUrl}/capital/${term}`

        return this.http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            )
    }

    searchCountry(term: string): Observable<Country[]> {
        
    }
    
    // searchRegion(region: string): Observable<Country[]> {
        
    // }
}