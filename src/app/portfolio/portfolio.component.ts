import { Component, Renderer2 } from '@angular/core';
import { AppService } from '../app-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public url: SafeResourceUrl = null;
  public show: boolean = false;
  public description: string = null;

  constructor(private appService: AppService,
              private renderer: Renderer2,
              private sanitizer: DomSanitizer){}


  mediaDownload(_id:string, item) {
    this.description = item['vimeoData']['description'] || '';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + _id + '?autoplay=1&title=0&byline=0&portrait=0');
    setTimeout( () => {
      this.show = true;
    },0);
  }

  get items(): any {
    return this.appService.filteredData;
  }

  onImageLoad(imgEl, textEl){
    this.renderer.setStyle(imgEl, 'opacity', '1');
    this.renderer.setStyle(textEl, 'opacity', '1');

  }

  onError(imgEl, textEl) {
    console.log(imgEl, textEl);
  }
}
