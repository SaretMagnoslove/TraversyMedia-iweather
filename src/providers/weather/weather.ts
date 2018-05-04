import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '3b2975996901706d';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'conditions/q'
  }

  getWeather(state, city) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json').map((res: Response) => res.json());    
  }

}
