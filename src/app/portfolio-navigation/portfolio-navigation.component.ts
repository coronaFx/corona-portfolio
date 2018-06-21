import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-navigation',
  templateUrl: './portfolio-navigation.component.html',
  styleUrls: ['./portfolio-navigation.component.scss']
})
export class PortfolioNavigationComponent implements OnInit {
  public items = [
    {
      name: 'All',
      link: 'all'
    },
    {
      name: 'Color Correction',
      link: 'color-correction'
    },
    {
      name: 'Compositing',
      link: 'compositing'
    },
    {
      name: 'Animation',
      link: 'animation'
    },
    {
      name: 'Camera Tracking',
      link: 'camera-tracking'
    },
    {
      name: 'Keying/Rotoscoping',
      link: 'keying-rotoscoping'
    },
    {
      name: 'Motion Graphics',
      link: 'motion-graphics'
    },
    {
      name: 'VR',
      link: 'vr'
    }
  ]

  constructor(private appService: AppService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.appService.getData('./assets/data/portfolio.json')
    //   .subscribe( (data) => {
    //     this.appService.data = data;
    //     this.getData();
    //   })
    this.getData();
  }

  getData(){
    this.route.paramMap
      .subscribe(params => {
        this.appService.routeId = params.get('id');
      });
  }

  public showMenu() {
    setTimeout( () => {
      this.appService.isMenu = true;
    }, 10);
  }

}
