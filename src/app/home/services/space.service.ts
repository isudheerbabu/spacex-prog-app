import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SpaceData } from '../models/spaceData';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  fullData: any;
  spacexUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
  lauSuccessUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true';
  landSuccessUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true';
  constructor(private http: HttpClient) { }

  getAllData(params) {
    let query = new URLSearchParams();
    // tslint:disable-next-line:no-string-literal
    if (params['launch_year']) {
      query.append('launch_year', params.launch_year);
    }
    // tslint:disable-next-line:no-string-literal
    if (params['launch_success']) {
      query.append('launch_success', params.launch_success);
    }
    // tslint:disable-next-line:no-string-literal
    if (params['land_success']) {
      query.append('land_success', params.land_success);
    }
    return this.http.get(`${this.spacexUrl}&${query.toString()}`).pipe(
    map((result: SpaceData[]) => {
      this.fullData = result;
      return result;
    })
  );
  }

  getlaunchSucc() {
    return this.http.get(this.lauSuccessUrl).pipe(
      map((result: SpaceData[]) => {
        return result;
      })
    );
  }

  getlandSucc() {
    return this.http.get(this.landSuccessUrl).pipe(
      map((result: SpaceData[]) => {
        return result;
      })
    );
  }

  findYear(year) {
    this.fullData = this.getAllData(year);
    this.fullData.filter(data => {
      return data.launch_year = year;
    });
  }
}
