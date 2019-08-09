import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-billability',
  templateUrl: './billability.component.html',
  styleUrls: ['./billability.component.scss'],
  animations: [routerTransition()]
})
export class BillabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
