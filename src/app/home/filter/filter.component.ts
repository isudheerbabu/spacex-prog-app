import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../services/space.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpaceData } from '../models/spaceData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  data: SpaceData[];
  findYear: SpaceData[] = [];
  yearData: number[];
  selectYear;
  succLaunch;
  succLand;
  constructor(private spaceService: SpaceService, private router: Router) { }

  ngOnInit() {
    this.collectAllData();
  }
  selectedYear(year) {
    this.selectYear = year;
    this.router.navigate([''], {
      queryParams : {
        // tslint:disable-next-line:object-literal-key-quotes
        'launch_year' : this.selectYear
      }
    });
  }

  successLaunch(value: boolean) {
    this.succLaunch = value;
    this.router.navigate([''], {
      queryParams : {
        // tslint:disable-next-line:object-literal-key-quotes
        'launch_success' : this.succLaunch
      }
    });
  }

  successLand(value: boolean) {
      this.succLand = value;
      this.router.navigate([''], {
        queryParams : {
          // tslint:disable-next-line:object-literal-key-quotes
          'land_success' : this.succLand
        }
      });
  }

  collectAllData() {
    this.spaceService.getAllData('').subscribe({
      next: (res) => {
        this.data = res;
        let result = res.map(a => parseInt(a.launch_year));
        this.yearData = result.filter((item, pos) => {
          return result.indexOf(item) === pos;
      });
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
      }
    });
  }

  // collectSelectedYear(year) {
  //   this.findYear = this.data.filter(data => {
  //     return data.launch_year == year;
  //   });
  // }
}
