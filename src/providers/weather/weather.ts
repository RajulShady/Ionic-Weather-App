import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
   apikey = 'd932fade2f9d6d2b';
   url;
  constructor(public httpClient: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getWeather(city, state){
    return this.httpClient.get(this.url+'/'+state+'/'+city+'.json');
  }

}
