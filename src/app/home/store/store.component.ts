import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../services/space.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpaceData } from '../models/spaceData';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: SpaceData[] = [];
  constructor(private spaceService: SpaceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe({
      next: (paramMap: ParamMap) => {
        // tslint:disable-next-line:variable-name
        let launch_year = paramMap.get('launch_year');
        let launch_success = paramMap.get('launch_success');
        let land_success = paramMap.get('land_success');
        // tslint:disable-next-line:object-literal-shorthand
        this.collectAllData({launch_year : launch_year,
                             launch_success : launch_success ,
                             land_success : land_success});
      }
    });
  }

  collectAllData(params) {
    this.spaceService.getAllData(params).subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
      }
    });
  }
}
