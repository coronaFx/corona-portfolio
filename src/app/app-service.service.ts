import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  _data: any = [];
  routeId: any = 'all';
  isMenu: boolean = false;

  constructor(private http: HttpClient) { }

  public getData(link: string){
    return this.http.get(link);
  }

  get data(): any {
    return this._data;
  }
  set data(val: any) {
    this._data = val;
  }

  get filteredData() {
    return this.data.filter(el => {
      if (this.routeId in el) { return el; }
    });
  }

  get mainPageData() {
    return this.data.filter(el => {
      if ('default' in el) { return el; }
    });
  }

}
