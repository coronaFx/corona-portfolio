import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('navigation')navigation: ElementRef;
  @ViewChild('main')main: ElementRef;
  @ViewChild('portfolio')portfolio: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick($event) {
    this.onHostClick($event);
  }

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

  constructor(private renderer: Renderer2,
              private route: ActivatedRoute,
              private element: ElementRef,
              private appService: AppService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  get isOpen() {
    return this.appService.isMenu;
  }

  private onHostClick(event: Event): void {
    const isContains: boolean = this.element.nativeElement.contains(<Node>event.target);
    if (!isContains) {
      this.appService.isMenu = false;
    }
  }

  public close() {
    this.appService.isMenu = false;
  }


}
