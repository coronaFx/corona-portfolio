import { Component, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  private url: SafeResourceUrl;
  public show: boolean = true;

  constructor(private renderer: Renderer2,
    private appService: AppService,
    private sanitizer: DomSanitizer){}

  ngOnInit() {}

  mediaDownload(_id:string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + _id + '?autoplay=1&title=0&byline=0&portrait=0');
    this.show = false;
  }

  hideVideo(){
    this.show = true;
  }

  get items() {
    return this.appService.mainPageData;
  }

  onImageLoad(imgEl, ){
    this.renderer.setStyle(imgEl, 'opacity', '1');
  }

  public showMenu() {
    setTimeout( () => {
      this.appService.isMenu = true;
    }, 10);
  }

}
