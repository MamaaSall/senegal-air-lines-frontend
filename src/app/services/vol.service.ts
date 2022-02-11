import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vol} from "../models/vol";
import {UrlMapping} from "../constant/url-mapping";

@Injectable({
  providedIn: 'root'
})
export class VolService {

  constructor(private _http: HttpClient) {
  }

  /**
   *
   * @param countryArrival
   * @param countryDeparture
   */
  findAllVolByArrivalAndDeparture(countryArrival: string, countryDeparture: string): Observable<Vol[]> {

    return this._http.get<Vol[]>(UrlMapping.FIND_ALL_VOLS_BY_ARRIVAL_AND_DEPARTURE + `${countryArrival}/${countryDeparture}`);
  }

  /**
   *
   * @param number
   */
  findVolByNumber(number: any): Observable<Vol> {

    return this._http.get<Vol>(UrlMapping.FIND_VOL_BY_NUMBER + `${number}`);
  }


}
