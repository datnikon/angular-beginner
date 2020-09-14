import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiExampleService {
  jsoinFile = "./province.json"


  API_GET_PROVINCE = "http://api.openweathermap.org/data/2.5/weather?q="
  API_KEY = "&appid=55e812c6591f87b57b6664f64b034759"
  constructor(private http: HttpClient) { }

  getWeather(province: string): Observable<any> {
    return this.http.get<any>(this.API_GET_PROVINCE + province + this.API_KEY);
  }

  getWeatherWithPromise(province: string): Promise<any> {
    return this.http.get<any>(this.API_GET_PROVINCE + province + this.API_KEY).toPromise();
  }

  getProvince(){
    return this.http.get<any>(this.jsoinFile).toPromise();
  }
}
