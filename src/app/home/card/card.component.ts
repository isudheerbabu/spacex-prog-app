import { Component, OnInit, Input } from '@angular/core';
import { SpaceData } from '../models/spaceData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: SpaceData;
  @Input() findYear: SpaceData;
  constructor() { }

  ngOnInit() {
  }

}
