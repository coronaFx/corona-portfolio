import {
  AfterViewInit, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import { AppService } from '../app-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @ViewChild('frame')frame: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick($event) {
    if (!this.show) this.onHostClick($event);
  }

  private url: SafeResourceUrl;
  public show: boolean = true;
  description = '';

  constructor(private renderer: Renderer2,
              private appService: AppService,
              private sanitizer: DomSanitizer){}


  mediaDownload(_id:string, item) {
    this.description = item['vimeoData']['description'] || '';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + _id + '?autoplay=1&title=0&byline=0&portrait=0');
    setTimeout( () => {
      this.show = false;
    },0);
  }

  hideVideo(){
    this.show = true;
  }


  get items(){
    return this.appService.filteredData;
  }

  onImageLoad(imgEl, textEl){
    this.renderer.setStyle(imgEl, 'opacity', '1');
    this.renderer.setStyle(textEl, 'opacity', '1');

  }

  private onHostClick(event: Event): void {
    const isContains: boolean = this.frame.nativeElement.contains(<Node>event.target);
    if (!isContains && !this.show) {
      this.show = true;
    }
  }

}
