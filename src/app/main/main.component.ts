import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('frame')frame: ElementRef;


  @HostListener('document:click', ['$event'])
  onClick($event) {
    if (!this.show) this.onHostClick($event);
  }


  private url: SafeResourceUrl;
  public show: boolean = true;

  constructor(private renderer: Renderer2,
    private appService: AppService,
    private sanitizer: DomSanitizer){}

  ngOnInit() {}

  mediaDownload(_id:string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + _id + '?autoplay=1&title=0&byline=0&portrait=0');
    setTimeout( () => {
      this.show = false;
    },0);

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

  private onHostClick(event: Event): void {
    const isContains: boolean = this.frame.nativeElement.contains(<Node>event.target);
    if (!isContains && !this.show) {
      this.show = true;
    }
  }

}
