import { Component } from '@angular/core';
import { SpaceService } from './home/services/space.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceX-pro-app';
  constructor() {

  }
}
