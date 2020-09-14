import { Component, OnInit } from '@angular/core';
import { ApiExampleService } from '../api-example.service';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.scss']
})
export class ApiExampleComponent implements OnInit {
  data: any
  constructor(private apiService: ApiExampleService) { }

  ngOnInit(): void {
    
  }

  getWeather(place:string){
    this.data = null
    this.apiService.getWeather(place).subscribe(data =>{
      if(data && data.cod != 404){
        this.data = data;
      }
    })
  }


  getWeatherWithPromise(place:string){
    this.data = null
    this.apiService.getWeatherWithPromise(place).then(response =>{
      this.data = response;
    }).catch(err =>{
      alert("Err: "+ err.message)
    })
  }
}
