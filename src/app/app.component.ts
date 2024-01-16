import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Weather';
  ApiK = 'd3ca1e154f6610c68a72de3e7d4db84d';
  Api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
  data: any = {};
  city = '';
  showed = false;
  err = '';

  Weather_icon: any = '';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  checkweather() {
    this.http.get(this.Api + this.city + `&appid=${this.ApiK}`).subscribe(
      (data: any) => {
        this.showed = true;
        this.data = data;
        console.log(data);
        console.log(data.weather[0].main);
        if (data.weather[0].main == 'Clouds') {
          this.Weather_icon = 'assets/images/clouds.png';
        } else if (data.weather[0].main == 'Clear') {
          this.Weather_icon = 'assets/images/clear.png';
        } else if (data.weather[0].main == 'Rain') {
          this.Weather_icon = 'assets/images/rain.png';
        } else if (data.weather[0].main == 'Drizzle') {
          this.Weather_icon = 'assets/images/drizzle.png';
        } else if (data.weather[0].main == 'Mist') {
          this.Weather_icon = 'assets/images/mist.png';
        }
        this.err = '';
      },
      (error) => {
        this.showed = false;
        console.log(error);
        this.err = error;
      }
    );
  }
}
