import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})

export class VideoComponent {

  @ViewChild('frame')frame: ElementRef;

  @Input() description: string = null;
  @Input() url: SafeResourceUrl;

  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('document:click', ['$event'])
  onClick($event) {
    this.onHostClick($event);
  }

  constructor() {}

  private onHostClick(event: Event): void {
    const isContains: boolean = this.frame.nativeElement.contains(<Node>event.target);
    // if (!isContains) {
      this.closeEvent.emit(true);
    // }
  }

  public hideVideo() {
    this.closeEvent.emit(true);
  }

}
