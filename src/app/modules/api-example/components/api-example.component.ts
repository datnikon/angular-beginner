import { Component, OnInit } from '@angular/core';
import { ApiExampleService } from '../api-example.service';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.scss']
})
export class ApiExampleComponent implements OnInit {
  data: any
  urlIcon:string
  constructor(private apiService: ApiExampleService) { }

  ngOnInit(): void {
    
  }

  getWeather(place:string){
    this.resetData();
    this.apiService.getWeather(place).subscribe(data =>{
      if(data && data.cod != 404){
        this.data = data;
        this.urlIcon = "http://openweathermap.org/img/w/" + this.data.weather[0].icon + ".png";
      }
    })
  }


  getWeatherWithPromise(place:string){
    this.resetData();
    this.apiService.getWeatherWithPromise(place).then(response =>{
      this.data = response;
      this.urlIcon = "http://openweathermap.org/img/w/" + this.data.weather[0].icon + ".png";
    }).catch(err =>{
      alert("Err: "+ err.message)
    })
  }


  resetData(){
    this.data = null;
    this.urlIcon = null;
  }
}
