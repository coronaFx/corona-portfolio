import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public data: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData('./assets/data/footer.json')
      .subscribe( (data) => {
        this.data = data;
      });
  }
}
