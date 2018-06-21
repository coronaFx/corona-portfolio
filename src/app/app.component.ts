import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  // checkValue: Subject<boolean> = new Subject();
  // checkValue$: Observable<boolean> = this.checkValue.asObservable();

  constructor(
    private http: HttpClient, private appService: AppService) {
  }


  ngOnInit() {
    this.appService.getData('./assets/data/portfolio.json')
      .subscribe( (data) => {
        this.appService.data = data;
        this.appService.data.forEach( (el) => {
          this.getVimeoData(el);
        })
      })
  }

  getVimeoData(elem) {
    this.http.get('https://vimeo.com/api/v2/video/' + elem.link + '.json')
      .subscribe( (res) => {
        elem.vimeoData = res[0];
        // console.log('res', this.appService.data);
      });
  }



}
